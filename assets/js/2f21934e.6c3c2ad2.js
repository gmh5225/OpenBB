"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(35742);function l(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},56736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"Fixed Income",description:"This guide introduces the Fixed Income menu, in the OpenBB Terminal, and provides examples for use. Features in this menu cover reference rates and government bonds, as well as corporate bond indices.",keywords:["Fixed Income","Financial Terminal","Rates and Indices","Plotting Data","Central Bank Rates","Government Bonds","Corporate Bonds","Spreads","API Key","User Guide"]},o=void 0,p={unversionedId:"terminal/menus/fixedincome",id:"terminal/menus/fixedincome",title:"Fixed Income",description:"This guide introduces the Fixed Income menu, in the OpenBB Terminal, and provides examples for use. Features in this menu cover reference rates and government bonds, as well as corporate bond indices.",source:"@site/content/terminal/menus/fixedincome.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/fixedincome",permalink:"/terminal/menus/fixedincome",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/fixedincome.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"Fixed Income",description:"This guide introduces the Fixed Income menu, in the OpenBB Terminal, and provides examples for use. Features in this menu cover reference rates and government bonds, as well as corporate bond indices.",keywords:["Fixed Income","Financial Terminal","Rates and Indices","Plotting Data","Central Bank Rates","Government Bonds","Corporate Bonds","Spreads","API Key","User Guide"]},sidebar:"tutorialSidebar",previous:{title:"ETF",permalink:"/terminal/menus/etf"},next:{title:"Forecast",permalink:"/terminal/menus/forecast"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"SOFR",id:"sofr",level:3},{value:"USRates",id:"usrates",level:3},{value:"ICESpread",id:"icespread",level:3},{value:"Treasury",id:"treasury",level:3},{value:"YCRV",id:"ycrv",level:3}],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Fixed Income - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Fixed Income menu functions for reference rates (ESTER, SOFR, SONIA and Ameribor), central bank rates (FRED, FOMC projections and ECB key interest rates), government bonds (treasury rates for any country, us-specific rates, yield curves), corporate bonds (ICE BofA Corporate Indices, Moody's AAA and BAA Corporate Indices, Commercial Paper, Spot Rates and HQM Corporate Yield Curve) and spreads (ICE BofA spreads, constant maturity spreads, and federal funds rate)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The menu relies on FRED for data requests, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"API keys guide")," for information on how to obtain and set a key for FRED.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Enter the Fixed Income menu by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"fixedincome")," into the Terminal from the Main menu, or use the absolute path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/fixedincome\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f1f00a5e-e55b-48b5-9298-01886ecc3c3f",alt:"Screenshot 2023-11-03 at 10 00 27\u202fAM"})),(0,r.kt)("p",null,"The menu has groups of commands related to the type of data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference Rates"),(0,r.kt)("li",{parentName:"ul"},"Central Bank Rates"),(0,r.kt)("li",{parentName:"ul"},"Government Bonds"),(0,r.kt)("li",{parentName:"ul"},"Corporate Bonds"),(0,r.kt)("li",{parentName:"ul"},"Spreads")),(0,r.kt)("p",null,"Most commands are a time series, and they will have ",(0,r.kt)("inlineCode",{parentName:"p"},"--start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--end")," arguments.  The specific series can be selected in functions where a ",(0,r.kt)("inlineCode",{parentName:"p"},"--parameter")," argument is supplied."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/69a146fd-4849-499b-8c59-5f55b31ddae0",alt:"Screenshot 2023-11-03 at 10 45 28\u202fAM"})),(0,r.kt)("h3",{id:"sofr"},"SOFR"),(0,r.kt)("p",null,"Enter, ",(0,r.kt)("inlineCode",{parentName:"p"},"sofr"),", to get the Secured Overnight Financing Rate as a chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/fixedincome/sofr\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/5c769dd2-226e-44d5-bebf-baca2cb1b5bf",alt:"Screenshot 2023-11-03 at 10 48 07\u202fAM"})),(0,r.kt)("h3",{id:"usrates"},"USRates"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"usrates")," command is parameterized for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TIPS (tips)"),(0,r.kt)("li",{parentName:"ul"},"Bills (tbill)"),(0,r.kt)("li",{parentName:"ul"},"Constant Maturity (cmn)")),(0,r.kt)("p",null,"The lengths of duration will differ between the three.  To see the available combinations, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--options")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/fixedincome/usrates --options\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"tbill"),(0,r.kt)("th",{parentName:"tr",align:"left"},"cmn"),(0,r.kt)("th",{parentName:"tr",align:"left"},"tips"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4_week"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DTB4WK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1_month"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS1MO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3_month"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TB3MS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS3MO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6_month"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DTB6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS6MO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DTB1YR"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DFII5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DFII7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"10_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DFII10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"20_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DFII20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"30_year"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DGS30"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DFII30")))),(0,r.kt)("p",null,"Make the selection with a syntax like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/fixedincome/usrates -p tbill -m 1_year --start 2009-01-01\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b84d4713-c7da-4fe2-a8a6-3ae15834d8fc",alt:"Screenshot 2023-11-03 at 11 03 11\u202fAM"})),(0,r.kt)("h3",{id:"icespread"},"ICESpread"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"icespread")," command are the Option-Adjusted Spreads from the ICE BofA Corporate Bond Index series."),(0,r.kt)("p",null,"Adding, ",(0,r.kt)("inlineCode",{parentName:"p"},"--category duration"),", will place all of the US indices on the same chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"icespread --category duration\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/18c77008-4bf1-44e7-a3e6-0fbb37a5e3bd",alt:"Screenshot 2023-11-03 at 11 11 04\u202fAM"})),(0,r.kt)("h3",{id:"treasury"},"Treasury"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"treasury")," command allows the comparison between multiple countries at the short or long ends of rates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"treasury --forecast --short united_kingdom,united_states,germany --start 2014-01-01\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9122ae5b-4a58-4aaa-87c1-adedb5ddf4c0",alt:"Screenshot 2023-11-03 at 11 21 14\u202fAM"})),(0,r.kt)("h3",{id:"ycrv"},"YCRV"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ycrv")," command displays the yield curve on a specific date.  The default state is the most recent.  To view a historical date, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--date")," argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ycrv --date 2008-11-03\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/14f9ff75-d2ed-4e29-af94-2598c7fae95e",alt:"Screenshot 2023-11-03 at 11 25 18\u202fAM"})))}u.isMDXComponent=!0}}]);