"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55676],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return r?a.createElement(m,i(i({ref:e},u),{},{components:r})):a.createElement(m,i({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>n});var a=r(67294),o=r(35742);function n(t){let{title:e}=t;return a.createElement(o.Z,null,a.createElement("title",null,e))}},22498:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),o=(r(67294),r(3905)),n=r(88828);const i={title:"Charts from raw data",sidebar_position:4,description:"In this guide, learn how to build your own charts from raw data using OpenBB Terminal Pro. You will create a chart to visualize the EBITDA ratio trends over the past 5 years using the Income Statement widget, update the Chart title, and download the Chart to PNG.",keywords:["OpenBB Terminal Pro","Build charts","Raw data","EBITDA ratio trends","Income Statement widget","Chart title","Download Chart"]},l=void 0,s={unversionedId:"pro/tutorials/data-to-charts",id:"pro/tutorials/data-to-charts",title:"Charts from raw data",description:"In this guide, learn how to build your own charts from raw data using OpenBB Terminal Pro. You will create a chart to visualize the EBITDA ratio trends over the past 5 years using the Income Statement widget, update the Chart title, and download the Chart to PNG.",source:"@site/content/pro/tutorials/data-to-charts.md",sourceDirName:"pro/tutorials",slug:"/pro/tutorials/data-to-charts",permalink:"/pro/tutorials/data-to-charts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/tutorials/data-to-charts.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1710431685,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:4,frontMatter:{title:"Charts from raw data",sidebar_position:4,description:"In this guide, learn how to build your own charts from raw data using OpenBB Terminal Pro. You will create a chart to visualize the EBITDA ratio trends over the past 5 years using the Income Statement widget, update the Chart title, and download the Chart to PNG.",keywords:["OpenBB Terminal Pro","Build charts","Raw data","EBITDA ratio trends","Income Statement widget","Chart title","Download Chart"]},sidebar:"tutorialSidebar",previous:{title:"Leverage AI",permalink:"/pro/tutorials/ai"},next:{title:"Overlay time series",permalink:"/pro/tutorials/overlay"}},c={},u=[],d={toc:u},p="wrapper";function h(t){let{components:e,...r}=t;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{title:"Charts from raw data | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"In this workflow, you will create a chart to visualize the EBITDA ratio trends over the past 5 years using the Income Statement widget. You will then update the Chart title to your liking and download the Chart to PNG. This allows you to leverage Excel-like capabilities right from the OpenBB Terminal Pro."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a chart to visualize the EBITDA ratio trends over the past 5 years in the Income Statement widget"),(0,o.kt)("li",{parentName:"ul"},"Update the Chart title to your liking"),(0,o.kt)("li",{parentName:"ul"},"Download the Chart to PNG")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("iframe",{style:{width:"800px",height:"450px",display:"block",margin:"0 auto"},src:"https://www.youtube.com/embed/XPxizW94tzM?si=xBVT14yK3U2ytmZZ",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})))}h.isMDXComponent=!0}}]);