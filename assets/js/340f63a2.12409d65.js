"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(r),s=n,f=p["".concat(c,".").concat(s)]||p[s]||d[s]||i;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},57835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const l={title:"demark",description:"Documentation for Demark Sequential Indicator, a technical indicator in Python. Detailed usage and parameter information is available.",keywords:["Demark Sequential Indicator","Technical Indicator","Parameters","Usage"]},o=void 0,c={unversionedId:"terminal/reference/etf/ta/demark",id:"terminal/reference/etf/ta/demark",title:"demark",description:"Documentation for Demark Sequential Indicator, a technical indicator in Python. Detailed usage and parameter information is available.",source:"@site/content/terminal/reference/etf/ta/demark.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/demark",permalink:"/terminal/reference/etf/ta/demark",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/ta/demark.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710271896,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"demark",description:"Documentation for Demark Sequential Indicator, a technical indicator in Python. Detailed usage and parameter information is available.",keywords:["Demark Sequential Indicator","Technical Indicator","Parameters","Usage"]},sidebar:"tutorialSidebar",previous:{title:"clenow",permalink:"/terminal/reference/etf/ta/clenow"},next:{title:"donchian",permalink:"/terminal/reference/etf/ta/donchian"}},m={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"etf /ta/demark - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Calculates the Demark sequential indicator."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"demark [-m MIN_TO_SHOW]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_to_show"),(0,n.kt)("td",{parentName:"tr",align:null},"-m  --min"),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum value of indicator to show (declutters plot)."),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}s.isMDXComponent=!0}}]);