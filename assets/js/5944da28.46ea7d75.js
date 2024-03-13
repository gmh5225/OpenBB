"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(u,s(s({ref:t},d),{},{components:r})):n.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),a=r(86010),o=r(67294),s=r(16550),i=r(48334);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:d}=(0,s.TH)(),m=d.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&o.createElement(i.Z,{className:"ml-auto mr-4"})),c?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},38758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const s={},i="Stocks",c={unversionedId:"terminal/reference/stocks/index",id:"terminal/reference/stocks/index",title:"Stocks",description:"Menus",source:"@site/content/terminal/reference/stocks/index.mdx",sourceDirName:"terminal/reference/stocks",slug:"/terminal/reference/stocks/",permalink:"/terminal/reference/stocks/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/index.mdx",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"whisper",permalink:"/terminal/reference/forecast/whisper"},next:{title:"Options",permalink:"/terminal/reference/stocks/options/"}},l={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stocks"},"Stocks"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Options",description:"grhist, oi, exp, calc, info, eodchain, vol, greeks, hist, chains, pcr, load, unu, voi, plot, vsurf",url:"/terminal/reference/stocks/options",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Gov",description:"topsells, contracts, topbuys, lasttrades, qtrcontracts, toplobbying, histcont, load, lastcontracts, gtrades,...",url:"/terminal/reference/stocks/gov",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Th",description:"symbol, holidays, closed, all, open, exchange",url:"/terminal/reference/stocks/th",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ta",description:"demark, ema, aroon, donchian, adosc, fib, summary, zlma, ichimoku, atr, sma, fisher, rsi, hma, adx, macd, wma,...",url:"/terminal/reference/stocks/ta",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Backtesting",description:"ema, emacross, rsi, whatif, load",url:"/terminal/reference/stocks/backtesting",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Screener",description:"overview, financial, view, technical, set, ownership, valuation, performance",url:"/terminal/reference/stocks/screener",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ca",description:"overview, volume, balance, financial, historical, sentiment, ticker, technical, hcorr, get, add, cashflow,...",url:"/terminal/reference/stocks/ca",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Fa",description:"shrs, overview, epsfc, supplier, balance, ratios, pt, est, cash, metrics, warnings, divs, growth, analysis,...",url:"/terminal/reference/stocks/fa",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Qa",description:"line, bw, pick, unitroot, beta, es, qqplot, so, raw, normality, decompose, quantile, summary, capm, acf, om,...",url:"/terminal/reference/stocks/qa",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Disc",description:"ugs, fipo, gtech, lowfloat, asc, filings, divcal, hotpenny, pipo, rtat, losers, ulc, trending, gainers, active,...",url:"/terminal/reference/stocks/disc",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Dps",description:"shorted, hsi, prom, sidtc, psi, spos, dpotc, load, pos, ftd",url:"/terminal/reference/stocks/dps",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ins",description:"lpsb, view, blop, topt, blos, filter, lins, lip, lcb, stats, tispm, tippw, lit, blip, blcp, act, tipt, tist, lis,...",url:"/terminal/reference/stocks/ins",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ba",description:"redditsent, snews, mentions, queries, interest, messages, regions, wsb, rise, trending, load, bullbear,...",url:"/terminal/reference/stocks/ba",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Candle",description:"Shows historic price and volume for the asset.",url:"/terminal/reference/stocks/candle",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/stocks/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"News",description:"latest news of the company",url:"/terminal/reference/stocks/news",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Quote",description:"Current quote for the loaded stock ticker.",url:"/terminal/reference/stocks/quote",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Show companies matching the search query, country, sector, industry and/or exchange. Note that by default only...",url:"/terminal/reference/stocks/search",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Tob",description:"Get top of book for loaded ticker from selected exchange",url:"/terminal/reference/stocks/tob",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);