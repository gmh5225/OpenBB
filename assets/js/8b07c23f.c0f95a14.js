"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},85032:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const s={title:"pm",description:"Our tool offers the ability to view the top pre-market gainers, losers, and most active. This page will guide you on how to use the pm command to have a better understanding of the market's movements before it officially opens.",keywords:["Pre-Market Top Gainers","Pre-Market Top Losers","Pre-Market Most Active","pm command","Market Movement","Financial Tools","Market Analysis","Stock Market"]},i=void 0,l={unversionedId:"bot/reference/discord/screeners/pm",id:"bot/reference/discord/screeners/pm",title:"pm",description:"Our tool offers the ability to view the top pre-market gainers, losers, and most active. This page will guide you on how to use the pm command to have a better understanding of the market's movements before it officially opens.",source:"@site/content/bot/reference/discord/screeners/pm.md",sourceDirName:"bot/reference/discord/screeners",slug:"/bot/reference/discord/screeners/pm",permalink:"/bot/reference/discord/screeners/pm",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/screeners/pm.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"pm",description:"Our tool offers the ability to view the top pre-market gainers, losers, and most active. This page will guide you on how to use the pm command to have a better understanding of the market's movements before it officially opens.",keywords:["Pre-Market Top Gainers","Pre-Market Top Losers","Pre-Market Most Active","pm command","Market Movement","Financial Tools","Market Analysis","Stock Market"]},sidebar:"tutorialSidebar",previous:{title:"all",permalink:"/bot/reference/discord/screeners/all"},next:{title:"pm_all",permalink:"/bot/reference/discord/screeners/pm_all"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"screeners: pm - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command offers the user the ability to view the top pre-market gainers, losers, and most active, giving the user a better understanding of the market\u2019s movements before the market officially opens."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/scr pm signal\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"signal"),(0,a.kt)("td",{parentName:"tr",align:null},"screener preset"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"Pre-Market Top Gainers (pmgainers), Pre-Market Top Losers (pmlosers), Pre-Market Most Active (pmmost_active)")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/scr pm signal:Pre-Market Top Gainers\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);