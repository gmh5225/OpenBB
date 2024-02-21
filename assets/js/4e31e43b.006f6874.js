"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72640],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,l(l({ref:e},c),{},{components:r})):n.createElement(g,l({ref:e},c))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(35742);function o(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},92160:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"so",description:"This page provides information on how to calculate the Sortino ratio of a selected stock, including parameters for target return, adjusting the Sortino ratio for comparison with the Sharpe ratio, and setting the rolling window length.",keywords:["sortino ratio","stock analysis","target return","adjusted sortino ratio","rolling window length","sharpe ratio","investment strategy"]},i=void 0,s={unversionedId:"terminal/reference/stocks/qa/so",id:"terminal/reference/stocks/qa/so",title:"so",description:"This page provides information on how to calculate the Sortino ratio of a selected stock, including parameters for target return, adjusting the Sortino ratio for comparison with the Sharpe ratio, and setting the rolling window length.",source:"@site/content/terminal/reference/stocks/qa/so.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/so",permalink:"/terminal/reference/stocks/qa/so",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/so.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"so",description:"This page provides information on how to calculate the Sortino ratio of a selected stock, including parameters for target return, adjusting the Sortino ratio for comparison with the Sharpe ratio, and setting the rolling window length.",keywords:["sortino ratio","stock analysis","target return","adjusted sortino ratio","rolling window length","sharpe ratio","investment strategy"]},sidebar:"tutorialSidebar",previous:{title:"skew",permalink:"/terminal/reference/stocks/qa/skew"},next:{title:"spread",permalink:"/terminal/reference/stocks/qa/spread"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:c},d="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks /qa/so - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Provides the sortino ratio of the selected stock."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"so [-t TARGET_RETURN] [-a] [-w WINDOW]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target_return"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --target"),(0,a.kt)("td",{parentName:"tr",align:null},"Target return"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"adjusted"),(0,a.kt)("td",{parentName:"tr",align:null},"-a  --adjusted"),(0,a.kt)("td",{parentName:"tr",align:null},"If one should adjust the sortino ratio inorder to make it comparable to the sharpe ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"window"),(0,a.kt)("td",{parentName:"tr",align:null},"-w  --window"),(0,a.kt)("td",{parentName:"tr",align:null},"Rolling window length"),(0,a.kt)("td",{parentName:"tr",align:null},"252"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75195383/163530572-e527bc75-7ecd-44e3-b971-83b9a0662d0d.png",alt:"image"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);