"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),o=r(35742);function n(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},20710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),o=(r(67294),r(3905)),n=r(88828);const i={title:"sectors",description:"The page provides information on how to use the sectors command, which allows the user to view a summary of all prints by MarketCap of different sectors over a given period. The command provides significant insights into the darkpool activities of different sectors.",keywords:["sectors command","MarketCap by Sector","darkpool activity","sector's market cap","accumulation","Basic Materials","Energy sector","Communication Services","Consumer Cyclical","Consumer Defensive","Financial sector","Healthcare sector","Industrials","Real Estate sector","Technology sector","Utilities sector"]},s=void 0,l={unversionedId:"bot/reference/discord/darkpool/sectors",id:"bot/reference/discord/darkpool/sectors",title:"sectors",description:"The page provides information on how to use the sectors command, which allows the user to view a summary of all prints by MarketCap of different sectors over a given period. The command provides significant insights into the darkpool activities of different sectors.",source:"@site/content/bot/reference/discord/darkpool/sectors.md",sourceDirName:"bot/reference/discord/darkpool",slug:"/bot/reference/discord/darkpool/sectors",permalink:"/bot/reference/discord/darkpool/sectors",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/darkpool/sectors.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"sectors",description:"The page provides information on how to use the sectors command, which allows the user to view a summary of all prints by MarketCap of different sectors over a given period. The command provides significant insights into the darkpool activities of different sectors.",keywords:["sectors command","MarketCap by Sector","darkpool activity","sector's market cap","accumulation","Basic Materials","Energy sector","Communication Services","Consumer Cyclical","Consumer Defensive","Financial sector","Healthcare sector","Industrials","Real Estate sector","Technology sector","Utilities sector"]},sidebar:"tutorialSidebar",previous:{title:"levels",permalink:"/bot/reference/discord/darkpool/levels"},next:{title:"summary",permalink:"/bot/reference/discord/darkpool/summary"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{title:"darkpool: sectors - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve a summary of all prints by % of MarketCap by Sector over the last x days. The user will be able to view the sector's market cap divided by total darkpool activity to see possible accumulation."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dp sectors days sector\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"days"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sector"),(0,o.kt)("td",{parentName:"tr",align:null},"Sector to filter by"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"Basic Materials (BM), Energy (E), Communication Services (CS), Consumer Cyclical (CC), Consumer Defensive (CD), Financial (F), Healthcare (H), Industrials (I), Real Estate (RE), Technology (T), Utilities (U)")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/dp sectors days:5 sector:Basic Materials\n")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);