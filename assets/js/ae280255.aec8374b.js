"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48297],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},33196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const i={title:"Export data",sidebar_position:3,description:"Learn how to export financial data through the OpenBB Terminal in different formats like XLSX, CSV, JSON, PNG, JPG, PDF, and SVG. Also learn to specify filename, sheet name, and export directly into a chart.",keywords:["financial data export","XLSX","CSV","JSON","PNG","JPG","PDF","SVG","filename specification","sheet name specification","export to chart"]},l=void 0,p={unversionedId:"terminal/usage/outputs/export-data",id:"terminal/usage/outputs/export-data",title:"Export data",description:"Learn how to export financial data through the OpenBB Terminal in different formats like XLSX, CSV, JSON, PNG, JPG, PDF, and SVG. Also learn to specify filename, sheet name, and export directly into a chart.",source:"@site/content/terminal/usage/outputs/export-data.md",sourceDirName:"terminal/usage/outputs",slug:"/terminal/usage/outputs/export-data",permalink:"/terminal/usage/outputs/export-data",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/outputs/export-data.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:3,frontMatter:{title:"Export data",sidebar_position:3,description:"Learn how to export financial data through the OpenBB Terminal in different formats like XLSX, CSV, JSON, PNG, JPG, PDF, and SVG. Also learn to specify filename, sheet name, and export directly into a chart.",keywords:["financial data export","XLSX","CSV","JSON","PNG","JPG","PDF","SVG","filename specification","sheet name specification","export to chart"]},sidebar:"tutorialSidebar",previous:{title:"Interactive Charts",permalink:"/terminal/usage/outputs/interactive-charts"},next:{title:"Routines",permalink:"/terminal/usage/routines/"}},s={},c=[{value:"Specifying the Filename",id:"specifying-the-filename",level:2},{value:"Specifying a Target Sheet Name",id:"specifying-a-target-sheet-name",level:2},{value:"Export Directly From Charts",id:"export-directly-from-charts",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Export data - Outputs - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The OpenBB Terminal offers a variety of ways to export financial data. This can be to a text-based file - XLSX, CSV or JSON -  or as images - PNG, JPG, PDF and SVG."),(0,r.kt)("p",null,"To export as a spreadsheet, ",(0,r.kt)("inlineCode",{parentName:"p"},"xlsx"),",  add ",(0,r.kt)("inlineCode",{parentName:"p"},"--export xlsx")," to the  command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL -s 2010-01-01 --export xlsx\n")),(0,r.kt)("p",null,"Which creates:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/214817681-fd5324c3-003c-45eb-adf4-96d5b41a3c02.png",alt:"Export Example"})),(0,r.kt)("h2",{id:"specifying-the-filename"},"Specifying the Filename"),(0,r.kt)("p",null,"Instead of the default filename, it can be specified. Exporting as a ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," this time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL -s 2010-01-01 --export apple.csv\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/214818131-597b3bd0-9c66-43f1-bf0e-2c0a703e2645.png",alt:"Filename Example"})),(0,r.kt)("h2",{id:"specifying-a-target-sheet-name"},"Specifying a Target Sheet Name"),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"xlsx")," option, ",(0,r.kt)("inlineCode",{parentName:"p"},"--sheet-name"),"  allows multiple datasets to be saved to the same file. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load AAPL -s 2010-01-01 --export apple.xlsx --sheet-name Market Data\n")),(0,r.kt)("p",null,"Then enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"fa")," (Fundamental Analysis) menu.  Copy and paste the code below to follow along.  This requires an API key from FinancialModelingPrep which you can obtain for free. Please have a look ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"fa\nincome --source FinancialModelingPrep -l 10 --export apple.xlsx --sheet-name Income Statement\nbalance --source FinancialModelingPrep -l 10 --export apple.xlsx --sheet-name Balance Sheet\ncash --source FinancialModelingPrep -l 10 --export apple.xlsx --sheet-name Cash Flow Statement\n")),(0,r.kt)("p",null,"This generates a file for ",(0,r.kt)("inlineCode",{parentName:"p"},"AAPL"),", with market data from 2010-01-01 until now, as well as the  income, balance and cash flow statements from the last ten years."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/214824561-6eaf3a88-746a-4abc-91e1-420c9036c00d.png",alt:"Sheet Name Example"})),(0,r.kt)("h2",{id:"export-directly-from-charts"},"Export Directly From Charts"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/outputs/interactive-charts#export-tools"},"interactive charts")," page for instructions."))}d.isMDXComponent=!0}}]);