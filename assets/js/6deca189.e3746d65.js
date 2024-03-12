"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},23862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const i={title:"Custom Data",sidebar_position:3,description:"Documentation detailing usage of the OpenBB Terminal for financial data aggregation, standardization, and user data import. It explains the OpenBBUserData folder functions, how to modify settings, and how to import or export user data.",keywords:["financial data","data aggregation","data standardization","OpenBBUserData folder","import data","export data","Econometrics","Portfolio","Portfolio Optimization","settings menu","export folder location","userdata command","user-created files"]},l=void 0,s={unversionedId:"terminal/usage/data/custom-data",id:"terminal/usage/data/custom-data",title:"Custom Data",description:"Documentation detailing usage of the OpenBB Terminal for financial data aggregation, standardization, and user data import. It explains the OpenBBUserData folder functions, how to modify settings, and how to import or export user data.",source:"@site/content/terminal/usage/data/custom-data.md",sourceDirName:"terminal/usage/data",slug:"/terminal/usage/data/custom-data",permalink:"/terminal/usage/data/custom-data",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/data/custom-data.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710271896,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:3,frontMatter:{title:"Custom Data",sidebar_position:3,description:"Documentation detailing usage of the OpenBB Terminal for financial data aggregation, standardization, and user data import. It explains the OpenBBUserData folder functions, how to modify settings, and how to import or export user data.",keywords:["financial data","data aggregation","data standardization","OpenBBUserData folder","import data","export data","Econometrics","Portfolio","Portfolio Optimization","settings menu","export folder location","userdata command","user-created files"]},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/terminal/usage/data/api-keys"},next:{title:"Outputs",permalink:"/terminal/usage/outputs/"}},d={},p=[{value:"The OpenBBUserData Folder",id:"the-openbbuserdata-folder",level:2},{value:"Update export folder location",id:"update-export-folder-location",level:3},{value:"Import data",id:"import-data",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Custom Data - Data - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The OpenBB Terminal not only allows access to a world of financial data through our data aggregation and standardization. We also allow users to bring their own data to the terminal and export data."),(0,r.kt)("h2",{id:"the-openbbuserdata-folder"},"The OpenBBUserData Folder"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBBUserData")," folder's default location is the home of the system user account. By default this will be the following paths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"Macintosh HD/Users/<YOUR_USERNAME>/OpenBBUserData")),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/Users/<YOUR_USERNAME>/OpenBBUserData"))),(0,r.kt)("p",null,"Within the folder you can find files that you have exported as well as files that you wish to import directly into the OpenBB Terminal. For example, this could be an orderbook which you can store in ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenBBUserData/portfolio/holdings"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/195742985-19f0e420-d8f7-4fea-a145-a0243b8f2ddc.png",alt:"OpenBBUserData Folder"})),(0,r.kt)("p",null,"This folder contains all things user-created. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Screener presets"),(0,r.kt)("li",{parentName:"ul"},"Portfolio files"),(0,r.kt)("li",{parentName:"ul"},"Exported files"),(0,r.kt)("li",{parentName:"ul"},"Files to be imported by various functions"),(0,r.kt)("li",{parentName:"ul"},"Styles and themes"),(0,r.kt)("li",{parentName:"ul"},"Preferred data sources")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note:")," With a WSL-enabled Windows installation, this folder will be under the Linux partition")),(0,r.kt)("h3",{id:"update-export-folder-location"},"Update export folder location"),(0,r.kt)("p",null,"The location of this folder can be set by the user from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/settings")," menu. There should be no need to update paths in this menu unless the folders have been moved manually. If the location of the OpenBBUserData folder must be changed, it is best to move the entire existing folder to the new path. The path is then changed under the settings menu with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'/settings/ $ userdata --folder "/complete_path_to/OpenBBUserData"\n')),(0,r.kt)("h2",{id:"import-data"},"Import data"),(0,r.kt)("p",null,"Menus, such as ",(0,r.kt)("a",{parentName:"p",href:"/terminal/menus/econometrics"},"Econometrics")," or ",(0,r.kt)("a",{parentName:"p",href:"/terminal/menus/forecast"},"Forecast"),", allow the user to import their own dataset. Files available to import will be included with the selections made available by auto-complete. In the Econometrics menu, this is activated after pressing the space bar with ",(0,r.kt)("inlineCode",{parentName:"p"},"load -f")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/204921760-38742f6c-ec78-4009-9c23-54dcb0504524.png",alt:"Importing Data"})),(0,r.kt)("p",null,"Both menus look in the ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_imports")," folders within the ",(0,r.kt)("inlineCode",{parentName:"p"},"/OpenBBUserData")," folder."))}m.isMDXComponent=!0}}]);