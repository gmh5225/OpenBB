"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,g=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},23202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"CONSENSUS",description:"Learn how to access and use the Price Target Consensus functionality in your application. Explore the available parameters and understand the returned data structure.",keywords:["Price target consensus data","equity estimates consensus","symbol parameter","provider parameter","results attribute","provider attribute","warnings attribute","chart attribute","metadata attribute","data table","target_high column","target_low column","target_consensus column","target_median column"]},s=void 0,o={unversionedId:"excel/reference/equity/estimates/consensus",id:"excel/reference/equity/estimates/consensus",title:"CONSENSUS",description:"Learn how to access and use the Price Target Consensus functionality in your application. Explore the available parameters and understand the returned data structure.",source:"@site/content/excel/reference/equity/estimates/consensus.md",sourceDirName:"excel/reference/equity/estimates",slug:"/excel/reference/equity/estimates/consensus",permalink:"/excel/reference/equity/estimates/consensus",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/estimates/consensus.md",tags:[],version:"current",frontMatter:{title:"CONSENSUS",description:"Learn how to access and use the Price Target Consensus functionality in your application. Explore the available parameters and understand the returned data structure.",keywords:["Price target consensus data","equity estimates consensus","symbol parameter","provider parameter","results attribute","provider attribute","warnings attribute","chart attribute","metadata attribute","data table","target_high column","target_low column","target_consensus column","target_median column"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.ESTIMATES",permalink:"/excel/reference/equity/estimates/"},next:{title:"HISTORICAL",permalink:"/excel/reference/equity/estimates/historical"}},u={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"EQUITY.ESTIMATES.CONSENSUS | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Price Target Consensus. Price target consensus data."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.EQUITY.ESTIMATES.CONSENSUS(symbol,[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.EQUITY.ESTIMATES.CONSENSUS("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target_high"),(0,n.kt)("td",{parentName:"tr",align:null},"High target of the price target consensus.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target_low"),(0,n.kt)("td",{parentName:"tr",align:null},"Low target of the price target consensus.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target_consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"Consensus target of the price target consensus.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target_median"),(0,n.kt)("td",{parentName:"tr",align:null},"Median target of the price target consensus.")))))}d.isMDXComponent=!0}}]);