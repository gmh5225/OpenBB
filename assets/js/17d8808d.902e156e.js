"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(35742);function l(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},35934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const i={title:"Data slicer",sidebar_position:2,description:"Slice Excel ranges by label or index",keywords:["Microsoft Excel","Add-in","Advanced","Slice data","Data slicer","Get specific fields"]},o=void 0,c={unversionedId:"excel/data-slicer",id:"excel/data-slicer",title:"Data slicer",description:"Slice Excel ranges by label or index",source:"@site/content/excel/data-slicer.md",sourceDirName:"excel",slug:"/excel/data-slicer",permalink:"/excel/data-slicer",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/data-slicer.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1710431685,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:2,frontMatter:{title:"Data slicer",sidebar_position:2,description:"Slice Excel ranges by label or index",keywords:["Microsoft Excel","Add-in","Advanced","Slice data","Data slicer","Get specific fields"]},sidebar:"tutorialSidebar",previous:{title:"Formula Builder",permalink:"/excel/getting-started/formula_builder"},next:{title:"Data connectors",permalink:"/excel/data-connectors"}},p={},s=[{value:"Example",id:"example",level:3}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Data slicer | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"To help you slice parts of data, we provide the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/excel/reference/get"},"OBB.GET")," function. This function allows to slice rows, columns or range subsets. It is useful to extract specific fields from the ",(0,r.kt)("inlineCode",{parentName:"p"},"OBB.")," custom functions. Data can be sliced by label or index."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suppose you called an ",(0,r.kt)("inlineCode",{parentName:"li"},"OBB.")," function and it returned the following data at cells A1:D3:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"period_ending"),(0,r.kt)("th",{parentName:"tr",align:null},"revenue"),(0,r.kt)("th",{parentName:"tr",align:null},"cost_of_revenue"),(0,r.kt)("th",{parentName:"tr",align:null},"gross_profit"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023/09/30"),(0,r.kt)("td",{parentName:"tr",align:null},"383 285 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null},"214 137 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null},"169 148 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2022/09/24"),(0,r.kt)("td",{parentName:"tr",align:null},"394 328 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null},"223 546 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null},"170 782 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021/09/25"),(0,r.kt)("td",{parentName:"tr",align:null},"365 817 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null},"212 981 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null},"152 836 000 000.00"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slicing a single row:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.GET(A1:D3,DATE(2023,9,30))\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When passing date labels make sure to use the format ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY/MM/DD")," or refer to a cell range containing Excel date format - DATE(year,month,day).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slicing a single column:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.GET(A1:D3,,"revenue")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slicing by index:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},"=OBB.GET(A1:D3,2,3)\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To slice the from the last row use negative numbers. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"=OBB.GET(A1:D3,-1,-2)")," will return the last row and the second to last column.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slicing multiple rows and columns:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel"},'=OBB.GET(A1:D3,{"2023/09/30","2021/09/25"},{"cost_of_revenue","gross_profit"})\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The easiest way to pass ranges is to write them into cells and reference them in the function. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"=OBB.GET(...,A1:A2)"),' where A1 contains "item1", A2 "item2".')))}m.isMDXComponent=!0}}]);