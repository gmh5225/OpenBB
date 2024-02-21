"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},70105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"exp",description:"Detailed guide on the 'flowsum exp' command used for retrieving the total premium of a given stock ticker for the current trading day, including example usage and parameters explanation.",keywords:["flowsum exp command","option premium","stock ticker","trading day","above ask","expiry","expiration date","subcmd: exp","example usage"]},i=void 0,p={unversionedId:"bot/reference/telegram/flow/flowsum/exp",id:"bot/reference/telegram/flow/flowsum/exp",title:"exp",description:"Detailed guide on the 'flowsum exp' command used for retrieving the total premium of a given stock ticker for the current trading day, including example usage and parameters explanation.",source:"@site/content/bot/reference/telegram/flow/flowsum/exp.md",sourceDirName:"bot/reference/telegram/flow/flowsum",slug:"/bot/reference/telegram/flow/flowsum/exp",permalink:"/bot/reference/telegram/flow/flowsum/exp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/flow/flowsum/exp.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"exp",description:"Detailed guide on the 'flowsum exp' command used for retrieving the total premium of a given stock ticker for the current trading day, including example usage and parameters explanation.",keywords:["flowsum exp command","option premium","stock ticker","trading day","above ask","expiry","expiration date","subcmd: exp","example usage"]},sidebar:"tutorialSidebar",previous:{title:"day",permalink:"/bot/reference/telegram/flow/flowsum/day"},next:{title:"top",permalink:"/bot/reference/telegram/flow/flowsum/top"}},m={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"flowsum - flow: exp - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve the total premium of the given stock ticker for the current trading day by expiration. We categorize the calls and puts by where the trade occurred on the bid/ask. For example, Above Ask, means the trade happened over the current Ask price."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/flowsum exp [ticker] [expiry]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker - Not available for subcmd: top"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiry"),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration date - Only available/required for subcmd: exp"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/flowsum exp AMD 2022-07-29\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);