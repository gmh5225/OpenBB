"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(h,s(s({ref:t},l),{},{components:r})):o.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(67294),n=r(35742);function a(e){let{title:t}=e;return o.createElement(n.Z,null,o.createElement("title",null,t))}},7651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),a=r(88828);const s={title:"1hr",description:"The /pop 1hr command page is about a command associated with the OpenBB Bot. This command shares information about the top 15 most traded stocks in the past hour across all our platforms, helping users to monitor active stocks and anticipate market trends.",keywords:["OpenBB Bot","active stocks","stock trading","stock trends","/pop 1hr command","trading platforms","trading strategies","trade updates"]},i=void 0,p={unversionedId:"bot/reference/discord/pop/1hr",id:"bot/reference/discord/pop/1hr",title:"1hr",description:"The /pop 1hr command page is about a command associated with the OpenBB Bot. This command shares information about the top 15 most traded stocks in the past hour across all our platforms, helping users to monitor active stocks and anticipate market trends.",source:"@site/content/bot/reference/discord/pop/1hr.md",sourceDirName:"bot/reference/discord/pop",slug:"/bot/reference/discord/pop/1hr",permalink:"/bot/reference/discord/pop/1hr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/pop/1hr.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"1hr",description:"The /pop 1hr command page is about a command associated with the OpenBB Bot. This command shares information about the top 15 most traded stocks in the past hour across all our platforms, helping users to monitor active stocks and anticipate market trends.",keywords:["OpenBB Bot","active stocks","stock trading","stock trends","/pop 1hr command","trading platforms","trading strategies","trade updates"]},sidebar:"tutorialSidebar",previous:{title:"1d",permalink:"/bot/reference/discord/pop/1d"},next:{title:"screeners",permalink:"/bot/reference/discord/screeners/"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{title:"pop: 1hr - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command retrieves the top 15 stocks that have been traded in the past hour on the OpenBB Bot across all our platforms. It provides the user with an up-to-date overview of the stocks that have been the most active over the past hour, allowing the user to quickly identify trends and potentially capitalize on them."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/pop 1hr\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This command has no parameters"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/pop 1hr\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);