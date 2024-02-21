"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25519],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,u=m["".concat(l,".").concat(p)]||m[p]||f[p]||o;return t?n.createElement(u,i(i({ref:r},d),{},{components:t})):n.createElement(u,i({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:d}=(0,i.TH)(),m=d.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&o.createElement(c.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},95653:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},c="ETFs",l={unversionedId:"terminal/reference/etf/index",id:"terminal/reference/etf/index",title:"ETFs",description:"Menus",source:"@site/content/terminal/reference/etf/index.mdx",sourceDirName:"terminal/reference/etf",slug:"/terminal/reference/etf/",permalink:"/terminal/reference/etf/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/terminal/reference/futures/search"},next:{title:"Discovery",permalink:"/terminal/reference/etf/disc/"}},s={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:d},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etfs"},"ETFs"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Disc",description:"gainers, active, decliners",url:"/terminal/reference/etf/disc",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ta",description:"atr, demark, sma, fisher, hma, obv, adosc, ema, wma, aroon, vwap, clenow, cci, kc, rsi, ad, zlma, bbands, cg,...",url:"/terminal/reference/etf/ta",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Ca",description:"Compare ETF's holdings with each other",url:"/terminal/reference/etf/ca",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Candle",description:"Shows historic data for an ETF",url:"/terminal/reference/etf/candle",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Compare",description:"Compare selected ETFs [Source: StockAnalysis]",url:"/terminal/reference/etf/compare",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holding_Perf",description:"Look at ETF company holdings' performance",url:"/terminal/reference/etf/holding_perf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holdings",description:"Look at ETF company holdings",url:"/terminal/reference/etf/holdings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load ETF ticker to perform analysis on.",url:"/terminal/reference/etf/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"News",description:"Prints latest news about ETF, including date, title and web link. [Source: News API]",url:"/terminal/reference/etf/news",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Overview",description:"Get overview data for selected etf",url:"/terminal/reference/etf/overview",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Search ETF by name [Source: FinanceDatabase/StockAnalysis.com]",url:"/terminal/reference/etf/search",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Weights",description:"Look at ETF sector holdings",url:"/terminal/reference/etf/weights",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);