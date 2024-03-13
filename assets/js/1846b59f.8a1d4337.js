"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86302],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),d=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=d(r),f=a,c=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(c,o(o({ref:e},p),{},{components:r})):n.createElement(c,o({ref:e},p))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:r,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(67294),a=r(35742);function l(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(87462),a=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),d=r(67392),p=r(50012);function m(t){return function(t){return a.Children.map(t,(t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:n,default:a}}=t;return{value:e,label:r,attributes:n,default:a}}))}function s(t){const{values:e,children:r}=t;return(0,a.useMemo)((()=>{const t=e??m(r);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function f(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function c(t){let{queryString:e=!1,groupId:r}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function k(t){const{defaultValue:e,queryString:r=!1,groupId:n}=t,l=s(t),[o,i]=(0,a.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=r.find((t=>t.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[u,d]=c({queryString:r,groupId:n}),[m,k]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,p.Nk)(r);return[n,(0,a.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:n}),g=(()=>{const t=u??m;return f({value:t,tabValues:l})?t:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((t=>{if(!f({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),d(t),k(t)}),[d,k,l]),tabValues:l}}var g=r(72389);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(t){let{className:e,block:r,selectedValue:u,selectValue:d,tabValues:p}=t;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),{pathname:f}=(0,i.TH)(),c=t=>{const e=t.currentTarget,r=m.indexOf(e),n=p[r].value;n!==u&&(s(e),d(n))},k=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const r=m.indexOf(t.currentTarget)+1;e=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(t.currentTarget)-1;e=m[r]??m[m.length-1];break}}e?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},p.map((t=>{let{value:e,label:r,attributes:o}=t;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>m.push(t),onKeyDown:k,onClick:c},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",h.tabItem,o?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&f.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&f.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&f.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&f.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&f.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&f.startsWith("/terminal")})}),r??e)})))}function N(t){let{lazy:e,children:r,selectedValue:n}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=k(t);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(b,(0,n.Z)({},t,e)),a.createElement(N,(0,n.Z)({},t,e)))}function v(t){const e=(0,g.Z)();return a.createElement(y,(0,n.Z)({key:String(e)},t))}},58492:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),l=r(88828),o=r(31792),i=r(85162);const u={title:"holdings_performance",description:"Get the ETF holdings performance using the `obb.etf.holdings_performance`  function in Python. This function returns a variety of performance metrics for ETF  holdings, including one-day return, week-to-date return, one-week return, month-to-date  return, and more. Analyze and chart the performance of ETF holdings with this comprehensive  function.",keywords:["ETF holdings performance","etf holdings performance python","etf holdings performance function","etf performance data","etf returns","etf performance metrics","etf performance analysis","etf performance statistics","etf performance calculation","etf performance chart"]},d=void 0,p={unversionedId:"platform/reference/etf/holdings_performance",id:"platform/reference/etf/holdings_performance",title:"holdings_performance",description:"Get the ETF holdings performance using the `obb.etf.holdings_performance`  function in Python. This function returns a variety of performance metrics for ETF  holdings, including one-day return, week-to-date return, one-week return, month-to-date  return, and more. Analyze and chart the performance of ETF holdings with this comprehensive  function.",source:"@site/content/platform/reference/etf/holdings_performance.md",sourceDirName:"platform/reference/etf",slug:"/platform/reference/etf/holdings_performance",permalink:"/platform/reference/etf/holdings_performance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/etf/holdings_performance.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"holdings_performance",description:"Get the ETF holdings performance using the `obb.etf.holdings_performance`  function in Python. This function returns a variety of performance metrics for ETF  holdings, including one-day return, week-to-date return, one-week return, month-to-date  return, and more. Analyze and chart the performance of ETF holdings with this comprehensive  function.",keywords:["ETF holdings performance","etf holdings performance python","etf holdings performance function","etf performance data","etf returns","etf performance metrics","etf performance analysis","etf performance statistics","etf performance calculation","etf performance chart"]},sidebar:"tutorialSidebar",previous:{title:"holdings_date",permalink:"/platform/reference/etf/holdings_date"},next:{title:"info",permalink:"/platform/reference/etf/info"}},m={},s=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],f={toc:s},c="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"etf/holdings_performance - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get the recent price performance of each ticker held in the ETF."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.etf.holdings_performance(symbol='XLK', provider='fmp')\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,a.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,a.kt)("td",{parentName:"tr",align:null},"fmp"),(0,a.kt)("td",{parentName:"tr",align:null},"True"))))),(0,a.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,a.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,a.kt)("td",{parentName:"tr",align:null},"fmp"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[EtfHoldingsPerformance]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"data"},"Data"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_day"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-day return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wtd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Week to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_week"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-week return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mtd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Month to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_month"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"qtd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Quarter to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_month"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"six_month"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Six-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ytd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Year to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"five_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Five-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ten_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Ten-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Return from the beginning of the time series."))))),(0,a.kt)(i.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_day"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-day return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wtd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Week to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_week"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-week return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mtd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Month to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_month"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"qtd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Quarter to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_month"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"six_month"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Six-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ytd"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Year to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"One-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"five_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Five-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ten_year"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Ten-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"Return from the beginning of the time series.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The ticker symbol.")))))))}k.isMDXComponent=!0}}]);