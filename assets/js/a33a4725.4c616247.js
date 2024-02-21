"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(h,c(c({ref:t},d),{},{components:r})):n.createElement(h,c({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},58308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const c={title:"cw",description:"This page explains the usage of the 'cw' command, which enables the user to retrieve a weekly candlestick chart for a specified ticker or coin. This chart displays valuable trading information, including opening and closing prices, high and low prices, and overall trading volume.",keywords:["cw command","weekly candlestick chart","stock ticker","trading volume","opening and closing prices","high and low prices"]},o=void 0,l={unversionedId:"bot/reference/discord/charts/cw",id:"bot/reference/discord/charts/cw",title:"cw",description:"This page explains the usage of the 'cw' command, which enables the user to retrieve a weekly candlestick chart for a specified ticker or coin. This chart displays valuable trading information, including opening and closing prices, high and low prices, and overall trading volume.",source:"@site/content/bot/reference/discord/charts/cw.md",sourceDirName:"bot/reference/discord/charts",slug:"/bot/reference/discord/charts/cw",permalink:"/bot/reference/discord/charts/cw",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/charts/cw.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"cw",description:"This page explains the usage of the 'cw' command, which enables the user to retrieve a weekly candlestick chart for a specified ticker or coin. This chart displays valuable trading information, including opening and closing prices, high and low prices, and overall trading volume.",keywords:["cw command","weekly candlestick chart","stock ticker","trading volume","opening and closing prices","high and low prices"]},sidebar:"tutorialSidebar",previous:{title:"cm",permalink:"/bot/reference/discord/charts/cm"},next:{title:"crypto",permalink:"/bot/reference/discord/crypto/"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"charts: cw - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve a weekly candlestick chart for the ticker/coin provided. The chart displays the opening and closing prices, the high and low prices, and the trading volume for the week for the specified ticker/coin."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/cw ticker\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/cw ticker:AMD\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);