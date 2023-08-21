from typing import Any, List, Optional, Tuple, TypeVar
from unittest.mock import MagicMock

from openbb_core.app.repository.mongodb.journal_entry_repository import (
    JournalEntryRepository,
)
from pydantic import BaseModel

T = TypeVar("T", bound=BaseModel)


def test_journal_entry_repository():
    class TestJournalEntryRepository(JournalEntryRepository):
        def __init__(self, test_arg_1, test_arg_2, mock_client):
            self.test_arg_1 = test_arg_1
            self.test_arg_2 = test_arg_2
            super().__init__(client=mock_client)

        @property
        def collection_name(self):
            return "test_collection"

        def create(self, model):
            pass

        @property
        def database_name(self):
            return "test_database"

        def delete(self, filter_list: Optional[List[Tuple[str, Any]]] = None):
            pass

        def delete_all(self, filter_list: Optional[List[Tuple[str, Any]]] = None):
            pass

        def read(
            self,
            field_list: Optional[List[str]] = None,
            filter_list: Optional[List[Tuple[str, Any]]] = None,
        ):
            pass

        def read_all(
            self,
            field_list: Optional[List[str]] = None,
            filter_list: Optional[List[Tuple[str, Any]]] = None,
        ):
            pass

        def update(self, model: T):
            pass

        def mock_method(self):
            return self.test_arg_1, self.test_arg_2

    jr = TestJournalEntryRepository("xpto_1", "xpto_2", MagicMock())
    assert isinstance(jr, JournalEntryRepository)
