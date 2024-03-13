"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(35742);function a(e){let{title:t}=e;return r.createElement(i.Z,null,r.createElement("title",null,t))}},10394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905)),a=n(88828);const o={title:"divinfo",description:"This page provides instructions on how to use the divinfo command for retrieving dividend information for any given stock, including dividend rate, yield, and ex-div date.",keywords:["divinfo command","dividend information","stock dividend rate","stock dividend yield","stock ex-div date","stock ticker","AAPL"]},d=void 0,l={unversionedId:"bot/reference/telegram/duediligence/divinfo",id:"bot/reference/telegram/duediligence/divinfo",title:"divinfo",description:"This page provides instructions on how to use the divinfo command for retrieving dividend information for any given stock, including dividend rate, yield, and ex-div date.",source:"@site/content/bot/reference/telegram/duediligence/divinfo.md",sourceDirName:"bot/reference/telegram/duediligence",slug:"/bot/reference/telegram/duediligence/divinfo",permalink:"/bot/reference/telegram/duediligence/divinfo",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/duediligence/divinfo.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"divinfo",description:"This page provides instructions on how to use the divinfo command for retrieving dividend information for any given stock, including dividend rate, yield, and ex-div date.",keywords:["divinfo command","dividend information","stock dividend rate","stock dividend yield","stock ex-div date","stock ticker","AAPL"]},sidebar:"tutorialSidebar",previous:{title:"customer",permalink:"/bot/reference/telegram/duediligence/customer"},next:{title:"earnings",permalink:"/bot/reference/telegram/duediligence/earnings"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"duediligence: divinfo - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"This command retrieves dividend information for a given stock. The data includes dividend rate, yield, and ex-div date."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/divinfo ticker\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/divinfo AAPL\n")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);