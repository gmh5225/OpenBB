"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51138],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88828:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(35742);function o(e){let{title:n}=e;return a.createElement(i.Z,null,a.createElement("title",null,n))}},20630:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(15569);function o(e){let{youtubeLink:n,videoLegend:t="Tutorial video"}=e;const[o,r]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,t),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(i.Toggle,{isOn:o,handleChange:()=>r(!o)}))),o&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},90700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=t(87462),i=(t(67294),t(3905)),o=t(88828),r=t(20630);const l={title:"The Pipeline of Commands",sidebar_position:1,description:"This page provides a detailed explanation of the OpenBB Terminal command pipeline. The tutorial video and walkthrough guides users in automating their investment research process by using single commands, and sequences of commands, to manipulate and study data.",keywords:["Hub","Routine","Community Routines","Terminal","Architecture","EXE","Script","Single command","Pipeline of commands","Command sequence","Automate investment research","Tutorial video","GME's dark pool data","Technical Analysis","Moving Average Convergence/Divergence indicator","Stock price loaded","Exponential moving average indicator","Price vs Short interest"]},s=void 0,p={unversionedId:"terminal/usage/routines/pipeline-of-commands",id:"terminal/usage/routines/pipeline-of-commands",title:"The Pipeline of Commands",description:"This page provides a detailed explanation of the OpenBB Terminal command pipeline. The tutorial video and walkthrough guides users in automating their investment research process by using single commands, and sequences of commands, to manipulate and study data.",source:"@site/content/terminal/usage/routines/pipeline-of-commands.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/pipeline-of-commands",permalink:"/terminal/usage/routines/pipeline-of-commands",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/routines/pipeline-of-commands.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:1,frontMatter:{title:"The Pipeline of Commands",sidebar_position:1,description:"This page provides a detailed explanation of the OpenBB Terminal command pipeline. The tutorial video and walkthrough guides users in automating their investment research process by using single commands, and sequences of commands, to manipulate and study data.",keywords:["Hub","Routine","Community Routines","Terminal","Architecture","EXE","Script","Single command","Pipeline of commands","Command sequence","Automate investment research","Tutorial video","GME's dark pool data","Technical Analysis","Moving Average Convergence/Divergence indicator","Stock price loaded","Exponential moving average indicator","Price vs Short interest"]},sidebar:"tutorialSidebar",previous:{title:"Routines",permalink:"/terminal/usage/routines/"},next:{title:"Introduction to Routines",permalink:"/terminal/usage/routines/introduction-to-routines"}},m={},d=[{value:"Single Command",id:"single-command",level:2},{value:"Pipeline of Commands",id:"pipeline-of-commands",level:2},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3}],c={toc:d},u="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{title:"The Pipeline of Commands - Routines - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)(r.Z,{youtubeLink:"https://www.youtube.com/embed/j0yZ9BMKulk?si=_CuDhd19pUs_mFDs",videoLegend:"Short video on pipeline of commands",mdxType:"TutorialVideo"}),(0,i.kt)("h2",{id:"single-command"},"Single Command"),(0,i.kt)("p",null,"If you have a good understanding of the Terminal's architecture, you will recognize that commands and menus are organized in the form of a tree."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/a5f10833-9693-4b39-9491-b431919db828",alt:"image"})),(0,i.kt)("p",null,"If the intention is to explore an equity, enter at base of the menu (",(0,i.kt)("inlineCode",{parentName:"p"},"/stocks/"),"), then browse or navigate towards the point of interest - for example, Dark Pools (",(0,i.kt)("inlineCode",{parentName:"p"},"/stocks/dps"),")."),(0,i.kt)("p",null,"While all the information is in one place, having to type one command at a time is far from optimal."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/41737800-7c60-48ad-a43d-814016d81762",alt:"image"})),(0,i.kt)("h2",{id:"pipeline-of-commands"},"Pipeline of Commands"),(0,i.kt)("p",null,"One of the main objectives of the OpenBB Terminal was the ability to automate a user's investment research workflow - not just a single command, but the complete process.  This is where the pipeline of commands comes in,  running a sequence of commands."),(0,i.kt)("p",null,"The example above can be recreated by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load GME/dps/psi\n")),(0,i.kt)("p",null,"Which looks like:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c21c5452-5a67-4384-851c-d2801b60f8cd",alt:"image"})),(0,i.kt)("p",null,"Another example is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load GME/dps/psi/../fa/pt/income/../ins/stats\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/61db4010-bdc2-4851-9e47-79fb4425b816",alt:"image"})),(0,i.kt)("h3",{id:"step-by-step-explanation"},"Step-by-Step Explanation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load amzn/ta/macd/ema -l 50,200/../dps/psi\n")),(0,i.kt)("p",null,"This will do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"stocks")," - Go into ",(0,i.kt)("inlineCode",{parentName:"p"},"stocks")," menu")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"load amzn")," - Load Amazon's stock inside stock menu")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ta")," - Go into Technical Analysis (",(0,i.kt)("inlineCode",{parentName:"p"},"ta"),") menu")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"macd")," - Run the moving average convergence/divergence indicator (",(0,i.kt)("inlineCode",{parentName:"p"},"macd"),") on the stock price loaded (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"amzn"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ema -l 50,200")," - Run the exponential moving average indicator with windows of length 50 and 200 (",(0,i.kt)("inlineCode",{parentName:"p"},"ema -l 50,200"),") on the stock price loaded (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"amzn"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"..")," - Go one menu up")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dps")," - Go into Dark pool and Short (",(0,i.kt)("inlineCode",{parentName:"p"},"dps"),") menu")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"psi")," - Go into Price vs Short interest (",(0,i.kt)("inlineCode",{parentName:"p"},"psi"),") menu"))))}h.isMDXComponent=!0},15569:(e,n,t)=>{e.exports=t(42285)},42285:(e,n,t)=>{var a,i=(a=t(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}}}]);