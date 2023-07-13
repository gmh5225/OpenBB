"""Polygon forex end of day fetcher."""

# IMPORT STANDARD
from datetime import date, datetime, timedelta
from typing import Dict, List, Optional, Union, Literal

# IMPORT INTERNAL
from openbb_provider.model.abstract.data import QueryParams
from openbb_provider.model.data.forex_eod import ForexEODData, ForexEODQueryParams
from openbb_provider.provider.abstract.fetcher import Fetcher
from openbb_provider.provider.provider_helpers import data_transformer
from openbb_polygon.types import Timespan

# IMPORT THIRD-PARTY
from pydantic import Field, NonNegativeFloat, PositiveFloat, PositiveInt

from openbb_polygon.helpers import get_data
from openbb_polygon.types import BaseStockData


class PolygonForexEODQueryParams(QueryParams):
    """Polygon forex end of day query.

    Source: https://polygon.io/docs/forex/get_v2_aggs_ticker__forexticker__range__multiplier___timespan___from___to

    Parameters
    ----------
    stocksTicker : str
        The ticker symbol of the stocks to fetch.
    start_date : Union[date, datetime], optional
        The start date of the query.
    end_date : Union[date, datetime], optional
        The end date of the query.
    timespan : Timespan, optional
        The timespan of the query, by default Timespan.day
    sort : Literal["asc", "desc"], optional
        The sort order of the query, by default "desc"
    limit : PositiveInt, optional
        The limit of the query, by default 49999
    adjusted : bool, optional
        Whether the query is adjusted, by default True
    multiplier : PositiveInt, optional
        The multiplier of the query, by default 1
    """

    stocksTicker: str = Field(alias="symbol")
    start_date: Optional[Union[date, datetime]]
    end_date: Optional[Union[date, datetime]]
    timespan: Optional[Timespan] = Field(default=Timespan.day)
    sort: Optional[Literal["asc", "desc"]] = Field(default="desc")
    limit: Optional[PositiveInt] = Field(default=49999)
    adjusted: Optional[bool] = Field(default=True)
    multiplier: Optional[PositiveInt] = Field(default=1)


class PolygonForexEODData(BaseStockData):
    v: NonNegativeFloat = Field(alias="volume")
    n: PositiveInt
    vw: Optional[PositiveFloat]


class PolygonForexEODFetcher(
    Fetcher[
        ForexEODQueryParams,
        ForexEODData,
        PolygonForexEODQueryParams,
        PolygonForexEODData,
    ]
):
    @staticmethod
    def transform_query(
        query: ForexEODQueryParams, extra_params: Optional[Dict] = None
    ) -> PolygonForexEODQueryParams:
        return PolygonForexEODQueryParams(
            symbol=query.symbol,
            **extra_params or {},
        )

    @staticmethod
    def extract_data(
        query: PolygonForexEODQueryParams, api_key: str
    ) -> List[PolygonForexEODData]:
        now = datetime.now()
        start_date = query.start_date or (now - timedelta(days=7)).date()
        end_date = query.end_date or now.date()
        request_url = (
            f"https://api.polygon.io/v2/aggs/ticker/"
            f"C:{query.stocksTicker.upper()}/range/1/{query.timespan.value}/"
            f"{start_date}/{end_date}?adjusted={query.adjusted}"
            f"&sort={query.sort}&limit={query.limit}&multiplier={query.multiplier}"
            f"&apiKey={api_key}"
        )

        data = get_data(request_url)
        if isinstance(data, list):
            raise ValueError("Expected a dict, got a list")

        if "results" not in data.keys() or len(data["results"]) == 0:
            raise RuntimeError("No results found. Please change your query parameters.")

        data = data["results"]
        return [PolygonForexEODData(**d) for d in data]

    @staticmethod
    def transform_data(data: List[PolygonForexEODData]) -> List[ForexEODData]:
        return data_transformer(data, ForexEODData)
