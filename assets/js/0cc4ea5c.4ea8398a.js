"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},51707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const i={title:"similar",description:"Documentation for the 'similar' functionality in the OpenBB-finance package. Includes details about the function, parameters and returns, and examples.",keywords:["OpenBB-finance","similar tickers","stock comparison","stock analysis","python package","Finviz","Polygon","Finnhub","TSNE","stock symbols"]},o=void 0,s={unversionedId:"sdk/reference/stocks/ca/similar",id:"sdk/reference/stocks/ca/similar",title:"similar",description:"Documentation for the 'similar' functionality in the OpenBB-finance package. Includes details about the function, parameters and returns, and examples.",source:"@site/content/sdk/reference/stocks/ca/similar.md",sourceDirName:"sdk/reference/stocks/ca",slug:"/sdk/reference/stocks/ca/similar",permalink:"/sdk/reference/stocks/ca/similar",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/ca/similar.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1710431685,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"similar",description:"Documentation for the 'similar' functionality in the OpenBB-finance package. Includes details about the function, parameters and returns, and examples.",keywords:["OpenBB-finance","similar tickers","stock comparison","stock analysis","python package","Finviz","Polygon","Finnhub","TSNE","stock symbols"]},sidebar:"tutorialSidebar",previous:{title:"sentiment",permalink:"/sdk/reference/stocks/ca/sentiment"},next:{title:"volume",permalink:"/sdk/reference/stocks/ca/volume"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks.ca.similar - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Find similar tickers to a given symbol."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/sdk_helpers.py#L14"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.stocks.ca.similar(symbol: str, source: Any = "Finviz")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol to find similar tickers to."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'Source to get data for, by default "Finviz".  Can be "Finviz", "Polygon", "Finnhub", or "TSNE"'),(0,a.kt)("td",{parentName:"tr",align:null},"Finviz"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"List of similar tickers.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To get similar tickers to AAPL from Finviz:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\nsimilar_tickers = openbb.stocks.ca.similar("AAPL")\n')),(0,a.kt)("p",null,"To use our custom TSNE model for similar tickers in the SP500:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'similar_tickers = openbb.stocks.ca.similar("AAPL", source="TSNE")\n')),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);