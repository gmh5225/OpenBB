"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14983],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(r),m=a,k=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(k,s(s({ref:e},d),{},{components:r})):n.createElement(k,s({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[p]="string"==typeof t?t:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(35742);function o(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},51335:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const s={title:"sidtc",description:"Documentation for sidtc, a tool command that retrieves and sorts short interest and days-to-cover data.",keywords:["sidtc","short interest","days-to-cover","stockgrid","OpenBB-finance","stock data","floating short"]},l=void 0,i={unversionedId:"sdk/reference/stocks/dps/sidtc",id:"sdk/reference/stocks/dps/sidtc",title:"sidtc",description:"Documentation for sidtc, a tool command that retrieves and sorts short interest and days-to-cover data.",source:"@site/content/sdk/reference/stocks/dps/sidtc.md",sourceDirName:"sdk/reference/stocks/dps",slug:"/sdk/reference/stocks/dps/sidtc",permalink:"/sdk/reference/stocks/dps/sidtc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/dps/sidtc.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"sidtc",description:"Documentation for sidtc, a tool command that retrieves and sorts short interest and days-to-cover data.",keywords:["sidtc","short interest","days-to-cover","stockgrid","OpenBB-finance","stock data","floating short"]},sidebar:"tutorialSidebar",previous:{title:"shorted",permalink:"/sdk/reference/stocks/dps/shorted"},next:{title:"spos",permalink:"/sdk/reference/stocks/dps/spos"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:d},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks.dps.sidtc - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get short interest and days to cover. ","[Source: Stockgrid]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L74"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.stocks.dps.sidtc(sortby: str = "float")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Field for which to sort by, where 'float': Float Short %%,",(0,a.kt)("br",null),"'dtc': Days to Cover, 'si': Short Interest"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Short interest and days to cover data")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);