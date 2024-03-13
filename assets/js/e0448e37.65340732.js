"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89034],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),d=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},m=function(e){var r=d(e.components);return o.createElement(c.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(t),f=n,u=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return t?o.createElement(u,a(a({ref:r},m),{},{components:t})):o.createElement(u,a({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>c});var o=t(39960),n=t(86010),i=t(67294),a=t(16550),l=t(48334);function c(e){let{title:r,url:t,description:c,command:d}=e;const{pathname:m}=(0,a.TH)(),s=m.replace(/\/v\d+/,""),p=!s.includes("/reference")&&!s.includes("/widgets-library/")&&!s.includes("/data_models");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":s.startsWith("/terminal")||s.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":s.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":s.startsWith("/sdk")||s.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":s.startsWith("/excel"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/pro")||s.startsWith("/excel")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&i.createElement(l.Z,{className:"ml-auto mr-4"})),c?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},86892:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=t(87462),n=(t(67294),t(3905)),i=t(26515);const a={},l="Portfolio",c={unversionedId:"terminal/reference/portfolio/index",id:"terminal/reference/portfolio/index",title:"Portfolio",description:"Menus",source:"@site/content/terminal/reference/portfolio/index.mdx",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/",permalink:"/terminal/reference/portfolio/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/index.mdx",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"valuation",permalink:"/terminal/reference/economy/valuation"},next:{title:"Portfolio Optimization",permalink:"/terminal/reference/portfolio/po/"}},d={},m=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],s={toc:m},p="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"portfolio"},"Portfolio"),(0,n.kt)("h3",{id:"menus"},"Menus"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Po",description:"hrp, maxsharpe, herc, maxdecorr, file, maxutil, minrisk, relriskparity, equal, maxret, blacklitterman, mktcap,...",url:"/terminal/reference/portfolio/po",mdxType:"ReferenceCard"})),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Alloc",description:"Show your allocation to each asset or sector compared to the benchmark.",url:"/terminal/reference/portfolio/alloc",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Attrib",description:"Displays sector attribution of the portfolio compared to the S&P 500",url:"/terminal/reference/portfolio/attrib",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Bench",description:"Load in a benchmark from a selected list or set your own based on the ticker.",url:"/terminal/reference/portfolio/bench",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Distr",description:"Compute distribution of daily returns",url:"/terminal/reference/portfolio/distr",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Dret",description:"Daily returns",url:"/terminal/reference/portfolio/dret",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Es",description:"Provides Expected Shortfall (short: ES) of the selected portfolio.",url:"/terminal/reference/portfolio/es",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Holdp",description:"Display holdings of assets (in percentage)",url:"/terminal/reference/portfolio/holdp",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Holdv",description:"Display holdings of assets (absolute value)",url:"/terminal/reference/portfolio/holdv",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Load",description:"Load your portfolio transactions.",url:"/terminal/reference/portfolio/load",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Maxdd",description:"Show portfolio maximum drawdown",url:"/terminal/reference/portfolio/maxdd",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Metric",description:"Display metric of choice for different periods",url:"/terminal/reference/portfolio/metric",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Mret",description:"Monthly returns",url:"/terminal/reference/portfolio/mret",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Om",description:"Provides omega ratio of the selected portfolio.",url:"/terminal/reference/portfolio/om",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Perf",description:"Shows performance of each trade and total performance of the portfolio versus the benchmark.",url:"/terminal/reference/portfolio/perf",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rbeta",description:"Show rolling beta portfolio vs benchmark",url:"/terminal/reference/portfolio/rbeta",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rsharpe",description:"Show rolling sharpe portfolio vs benchmark",url:"/terminal/reference/portfolio/rsharpe",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rsort",description:"Show rolling sortino portfolio vs benchmark",url:"/terminal/reference/portfolio/rsort",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rvol",description:"Show rolling volatility portfolio vs benchmark",url:"/terminal/reference/portfolio/rvol",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Show",description:"Show transactions table",url:"/terminal/reference/portfolio/show",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Summary",description:"Display summary of portfolio vs benchmark",url:"/terminal/reference/portfolio/summary",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Var",description:"Provides value at risk (short: VaR) of the selected portfolio.",url:"/terminal/reference/portfolio/var",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Yret",description:"End of the year returns",url:"/terminal/reference/portfolio/yret",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);