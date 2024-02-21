"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,g=p["".concat(m,".").concat(c)]||p[c]||u[c]||i;return a?n.createElement(g,l(l({ref:t},o),{},{components:a})):n.createElement(g,l({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(35742);function i(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},65836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const l={title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},s=void 0,m={unversionedId:"excel/reference/equity/estimates/historical",id:"excel/reference/equity/estimates/historical",title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",source:"@site/content/excel/reference/equity/estimates/historical.md",sourceDirName:"excel/reference/equity/estimates",slug:"/excel/reference/equity/estimates/historical",permalink:"/excel/reference/equity/estimates/historical",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/estimates/historical.md",tags:[],version:"current",frontMatter:{title:"HISTORICAL",description:"Learn about historical analyst estimates and analyst stock recommendations with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical` function and its parameters, including `symbol`, `period`, `limit`, and `provider`. Understand the structure of the returned object, `OBBject`, with `results`, `provider`, `warnings`, `chart`, and `metadata` properties. Dive into the available data such as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`, `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},sidebar:"tutorialSidebar",previous:{title:"CONSENSUS",permalink:"/excel/reference/equity/estimates/consensus"},next:{title:"PRICE_TARGET",permalink:"/excel/reference/equity/estimates/price_target"}},d={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],p={toc:o},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"EQUITY.ESTIMATES.HISTORICAL | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Historical Analyst Estimates. Analyst stock recommendations."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.EQUITY.ESTIMATES.HISTORICAL(symbol,[period],[limit],[provider])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.EQUITY.ESTIMATES.HISTORICAL("AAPL")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_revenue_low"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated revenue low.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_revenue_high"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated revenue high.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_revenue_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated revenue average.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_ebitda_low"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EBITDA low.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_ebitda_high"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EBITDA high.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_ebitda_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EBITDA average.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_ebit_low"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EBIT low.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_ebit_high"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EBIT high.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_ebit_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EBIT average.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_net_income_low"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated net income low.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_net_income_high"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated net income high.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_net_income_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated net income average.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_sga_expense_low"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated SGA expense low.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_sga_expense_high"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated SGA expense high.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_sga_expense_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated SGA expense average.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_eps_avg"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EPS average.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_eps_high"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EPS high.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimated_eps_low"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated EPS low.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_analyst_estimated_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of analysts who estimated revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_analysts_estimated_eps"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of analysts who estimated EPS.")))))}c.isMDXComponent=!0}}]);