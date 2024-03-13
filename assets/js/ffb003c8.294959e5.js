"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(39960),o=r(86010),a=r(67294),i=r(16550);function s(e){let{title:t,url:r,description:s,command:c}=e;const{pathname:l}=(0,i.TH)(),d=l.replace(/\/v\d+/,"");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},13496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const i={},s="discovery",c={unversionedId:"bot/reference/telegram/discovery/index",id:"bot/reference/telegram/discovery/index",title:"discovery",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/discovery/index.mdx",sourceDirName:"bot/reference/telegram/discovery",slug:"/bot/reference/telegram/discovery/",permalink:"/bot/reference/telegram/discovery/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/discovery/index.mdx",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topsum",permalink:"/bot/reference/telegram/darkpool/topsum"},next:{title:"arktrades",permalink:"/bot/reference/telegram/discovery/arktrades"}},l={},d=[],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discovery"},"discovery"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"arktrades",description:"This command allows the user to retrieve a list of all trades made by ARK, including the time and amount of each...",url:"/bot/reference/telegram/discovery/arktrades",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fgindex",description:"This command allows the user to retrieve the Fear & Greed Index, which is an investor sentiment indicator...",url:"/bot/reference/telegram/discovery/fgindex",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"halts",description:"This command allows the user to retrieve the time and halt code of stocks in the market, excluding penny stocks....",url:"/bot/reference/telegram/discovery/halts",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"holidays",description:"This command allows the user to retrieve a list of upcoming market holidays. The command will return a list of...",url:"/bot/reference/telegram/discovery/holidays",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"ipolist",description:"This command allows the user to view 10 of the most recent and upcoming Initial Public Offerings (IPOs) including...",url:"/bot/reference/telegram/discovery/ipolist",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"pop",description:"This command retrieves the top 15 tickers for the day or hour based on popularity on the OpenBB Bot across all...",url:"/bot/reference/telegram/discovery/pop",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"trendingst",description:"This command allows the user to retrieve the top 15 trending stocks from StockTwits according to the most recent...",url:"/bot/reference/telegram/discovery/trendingst",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"wsb",description:"This command allows the user to view the top 15 trending stocks on r/WallStreetBets (WSB) using the /disc wsb...",url:"/bot/reference/telegram/discovery/wsb",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);