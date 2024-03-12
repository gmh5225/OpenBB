"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(r),f=o,p=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},27507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const i={title:"fgindex",description:"This page provides information about the fgindex command which enables the user to retrieve the Fear & Greed Index. This investor sentiment indicator measures the levels of fear and greed in the stock market by observing the momentum, sentiment and volume of stock trading.",keywords:["fgindex command","Fear & Greed Index","investor sentiment indicator","CNNMoney","stock market","momentum","sentiment","volume of stock trading"]},s=void 0,l={unversionedId:"bot/reference/telegram/discovery/fgindex",id:"bot/reference/telegram/discovery/fgindex",title:"fgindex",description:"This page provides information about the fgindex command which enables the user to retrieve the Fear & Greed Index. This investor sentiment indicator measures the levels of fear and greed in the stock market by observing the momentum, sentiment and volume of stock trading.",source:"@site/content/bot/reference/telegram/discovery/fgindex.md",sourceDirName:"bot/reference/telegram/discovery",slug:"/bot/reference/telegram/discovery/fgindex",permalink:"/bot/reference/telegram/discovery/fgindex",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/discovery/fgindex.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710271896,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"fgindex",description:"This page provides information about the fgindex command which enables the user to retrieve the Fear & Greed Index. This investor sentiment indicator measures the levels of fear and greed in the stock market by observing the momentum, sentiment and volume of stock trading.",keywords:["fgindex command","Fear & Greed Index","investor sentiment indicator","CNNMoney","stock market","momentum","sentiment","volume of stock trading"]},sidebar:"tutorialSidebar",previous:{title:"arktrades",permalink:"/bot/reference/telegram/discovery/arktrades"},next:{title:"halts",permalink:"/bot/reference/telegram/discovery/halts"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"discovery: fgindex - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the Fear & Greed Index, which is an investor sentiment indicator published by CNNMoney. The index measures the levels of fear and greed of the investors in the stock market by observing the momentum, sentiment and volume of stock trading. The index ranges from 0 to 100, with 0 being the most fearful and 100 being the most greedy."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/fgindex\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/fgindex\n")),(0,o.kt)("hr",null))}f.isMDXComponent=!0}}]);