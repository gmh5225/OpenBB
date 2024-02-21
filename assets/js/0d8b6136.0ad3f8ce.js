"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(15569);function i(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[i,o]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(r.Toggle,{isOn:i,handleChange:()=>o(!i)}))),i&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},15161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(88828),o=n(20630);const s={title:"Structure and Navigation",sidebar_position:1,description:"Learn about the OpenBB Terminal, an interactive Command Line Interface application. Understand the structure and navigation of the terminal, functions or commands input via a keyboard, and the presentation of results in the form of interactive charts, tables, or text. Get introduced to terminal commands, terminal menus, OpenBB Hub's theme style, and the concept of absolute paths.",keywords:["CLI application","terminal structure","Terminal navigation","Command Line Interface","Interactive Charts and Tables","Terminal commands","terminal menus","OpenBB Hub Theme Style","Absolute paths"]},l=void 0,c={unversionedId:"terminal/usage/overview/structure-and-navigation",id:"terminal/usage/overview/structure-and-navigation",title:"Structure and Navigation",description:"Learn about the OpenBB Terminal, an interactive Command Line Interface application. Understand the structure and navigation of the terminal, functions or commands input via a keyboard, and the presentation of results in the form of interactive charts, tables, or text. Get introduced to terminal commands, terminal menus, OpenBB Hub's theme style, and the concept of absolute paths.",source:"@site/content/terminal/usage/overview/structure-and-navigation.md",sourceDirName:"terminal/usage/overview",slug:"/terminal/usage/overview/structure-and-navigation",permalink:"/terminal/usage/overview/structure-and-navigation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/overview/structure-and-navigation.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:1,frontMatter:{title:"Structure and Navigation",sidebar_position:1,description:"Learn about the OpenBB Terminal, an interactive Command Line Interface application. Understand the structure and navigation of the terminal, functions or commands input via a keyboard, and the presentation of results in the form of interactive charts, tables, or text. Get introduced to terminal commands, terminal menus, OpenBB Hub's theme style, and the concept of absolute paths.",keywords:["CLI application","terminal structure","Terminal navigation","Command Line Interface","Interactive Charts and Tables","Terminal commands","terminal menus","OpenBB Hub Theme Style","Absolute paths"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/terminal/usage/overview/"},next:{title:"Commands and arguments",permalink:"/terminal/usage/overview/commands-and-arguments"}},d={},u=[{value:"Structure",id:"structure",level:2},{value:"Navigation",id:"navigation",level:2}],m={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Structure and Navigation - Overview - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/8qjG_SyuQgY?si=kc948AQLp3yrfkgB",videoLegend:"Short introduction to terminal structure",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"The OpenBB Terminal is a Command Line Interface (CLI) application. Functions (commands) are called through the keyboard with results returned as charts, tables, or text.  Charts and tables (if enabled) are displayed in a new window, and are fully interactive, while text prints directly to the Terminal screen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233247655-2f8d0dae-be68-48ca-9b35-123b5b985cb6.png",alt:"The Home Screen"})),(0,r.kt)("p",null,"A menu is a collection of commands (and sub-menus). A menu can be distinguished from a command because the former has a ",(0,r.kt)("inlineCode",{parentName:"p"},">")," on the left. The color of a command and a menu also differ, but these can be changed in OpenBB Hub's theme style."),(0,r.kt)("h2",{id:"navigation"},"Navigation"),(0,r.kt)("p",null,"Navigating through the Terminal menus is similar to traversing folders from any operating system's command line prompt. The ",(0,r.kt)("inlineCode",{parentName:"p"},"/home")," screen is the main directory where everything begins, and the menus are paths branched from the main. Instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\OpenBB\\Documents"),", you'll have something like ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks/options"),". Instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"cd .."),", you can do ",(0,r.kt)("inlineCode",{parentName:"p"},"..")," to return the menu right above. To go back to the root menu you can do ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,r.kt)("p",null,"Absolute paths are also valid to-and-from any point. From the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/menus/stocks/options"},(0,r.kt)("inlineCode",{parentName:"a"},"/stocks/options"))," menu, you can go directly to ",(0,r.kt)("a",{parentName:"p",href:"/terminal/menus/crypto"},(0,r.kt)("inlineCode",{parentName:"a"},"crypto"))," menu with: ",(0,r.kt)("inlineCode",{parentName:"p"},"/crypto"),'. Note the forward slash at the start to denote the "absolute" path.'),(0,r.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/xy8LElyYmaI?si=psfs7nD9xjb-N1N8",videoLegend:"Short introduction to navigation",mdxType:"TutorialVideo"}))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,r=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);