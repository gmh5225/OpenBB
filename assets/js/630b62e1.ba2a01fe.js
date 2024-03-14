"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(r),p=n,u=f["".concat(l,".").concat(p)]||f[p]||m[p]||i;return r?o.createElement(u,a(a({ref:t},d),{},{components:r})):o.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(39960),n=r(86010),i=r(67294),a=r(16550);function s(e){let{title:t,url:r,description:s,command:l}=e;const{pathname:c}=(0,a.TH)(),d=c.replace(/\/v\d+/,"");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},78544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905)),i=r(62872);const a={},s="flow",l={unversionedId:"bot/reference/discord/flow/index",id:"bot/reference/discord/flow/index",title:"flow",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/flow/index.mdx",sourceDirName:"bot/reference/discord/flow",slug:"/bot/reference/discord/flow/",permalink:"/bot/reference/discord/flow/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/flow/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1710431685,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tops",permalink:"/bot/reference/discord/etf/tops"},next:{title:"bigflow",permalink:"/bot/reference/discord/flow/bigflow"}},c={},d=[],f={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flow"},"flow"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"bigflow",description:"This command retrieves the top 20 largest flow by premium for a stock. We calculate the largest flow by...",url:"/bot/reference/discord/flow/bigflow",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"day",description:"This command retrieves the most recent flow for a stock with the specified ticker symbol. The command will return...",url:"/bot/reference/discord/flow/day",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"opening",description:"This command allows the user to retrieve the Top 20 flows by premium for a stock with the Opening condition -...",url:"/bot/reference/discord/flow/opening",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"prem",description:"This command allows the user to retrieve a chart displaying the sum of premium for call/put options for a...",url:"/bot/reference/discord/flow/prem",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"sectors",description:"This command retrieves a summary of all flows by MarketCap percentage per sector over the past x days.",url:"/bot/reference/discord/flow/sectors",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"sumday",description:"This command allows the user to retrieve the total premium of the given stock ticker for the current trading day....",url:"/bot/reference/discord/flow/sumday",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"sumexp",description:"This command allows the user to retrieve the total premium of the given stock ticker for the current trading day...",url:"/bot/reference/discord/flow/sumexp",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"summary",description:"This command allows the user to retrieve a summary of all the flow per stock over the last x days, with the...",url:"/bot/reference/discord/flow/summary",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"sumtop",description:"This command allows the user to retrieve the top flow for the day for Calls and Puts by stock. This will provide...",url:"/bot/reference/discord/flow/sumtop",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"sumweek",description:"This command allows the user to retrieve the top flow for the week for Calls and Puts by stock. This will provide...",url:"/bot/reference/discord/flow/sumweek",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"unu",description:"This command allows users to retrieve Unusual Options Trades over $100,000 premium and Total Volume exceeding...",url:"/bot/reference/discord/flow/unu",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"weekly",description:"This command allows the user to retrieve the Top 20 flow by Premium for a stock with an option contact expiring...",url:"/bot/reference/discord/flow/weekly",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);