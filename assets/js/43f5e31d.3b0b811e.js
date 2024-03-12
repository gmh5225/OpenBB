"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4704],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),s=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return r?a.createElement(m,o(o({ref:e},u),{},{components:r})):a.createElement(m,o({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(35742);function l(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},30434:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"acf",description:"Explore Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff stock data using the acf Python script command. Understand maximum lags to display in plots.",keywords:["Auto-Correlation","Partial Auto-Correlation","diff stock data","acf","lags","maximum lags"]},i=void 0,c={unversionedId:"terminal/reference/stocks/qa/acf",id:"terminal/reference/stocks/qa/acf",title:"acf",description:"Explore Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff stock data using the acf Python script command. Understand maximum lags to display in plots.",source:"@site/content/terminal/reference/stocks/qa/acf.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/acf",permalink:"/terminal/reference/stocks/qa/acf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/acf.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710271896,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"acf",description:"Explore Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff stock data using the acf Python script command. Understand maximum lags to display in plots.",keywords:["Auto-Correlation","Partial Auto-Correlation","diff stock data","acf","lags","maximum lags"]},sidebar:"tutorialSidebar",previous:{title:"Quantitative Analysis",permalink:"/terminal/reference/stocks/qa/"},next:{title:"beta",permalink:"/terminal/reference/stocks/qa/beta"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:u},f="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(f,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks /qa/acf - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Auto-Correlation and Partial Auto-Correlation Functions for diff and diff diff stock data"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"acf [-l LAGS]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lags"),(0,n.kt)("td",{parentName:"tr",align:null},"-l  --lags"),(0,n.kt)("td",{parentName:"tr",align:null},"maximum lags to display in plots"),(0,n.kt)("td",{parentName:"tr",align:null},"15"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154305242-176c3ba1-ebfc-43e7-a027-46251fb02463.png",alt:"acf"})),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);