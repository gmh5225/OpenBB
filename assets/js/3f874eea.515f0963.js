"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},54841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"load",description:"This page provides documentation on how to load a file of stocks tickers with optional categories using Python. It contains information on the parameters and file options that are available.",keywords:["Load","Stocks","Tickers","File","Categories","Parameters","Allocation","OpenBB_Parameters_Template_v1.0.0.xlsx","defaults.ini","dany.ini","james.ini","example.ini","dd.ini"]},i=void 0,p={unversionedId:"terminal/reference/portfolio/po/load",id:"terminal/reference/portfolio/po/load",title:"load",description:"This page provides documentation on how to load a file of stocks tickers with optional categories using Python. It contains information on the parameters and file options that are available.",source:"@site/content/terminal/reference/portfolio/po/load.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/load",permalink:"/terminal/reference/portfolio/po/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/load.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"load",description:"This page provides documentation on how to load a file of stocks tickers with optional categories using Python. It contains information on the parameters and file options that are available.",keywords:["Load","Stocks","Tickers","File","Categories","Parameters","Allocation","OpenBB_Parameters_Template_v1.0.0.xlsx","defaults.ini","dany.ini","james.ini","example.ini","dd.ini"]},sidebar:"tutorialSidebar",previous:{title:"hrp",permalink:"/terminal/reference/portfolio/po/hrp"},next:{title:"maxdecorr",permalink:"/terminal/reference/portfolio/po/maxdecorr"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"portfolio /po/load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Load file of stocks tickers with optional categories"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-f {} [{} ...]] [-e]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"file"),(0,a.kt)("td",{parentName:"tr",align:null},"-f  --file"),(0,a.kt)("td",{parentName:"tr",align:null},"Allocation file to be used"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"File in ",(0,a.kt)("inlineCode",{parentName:"td"},"EXPORTS")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"CUSTOM_IMPORTS")," directories")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"example"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --example"),(0,a.kt)("td",{parentName:"tr",align:null},"Run an example allocation file to understand how the portfolio optimization menu can be used."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);