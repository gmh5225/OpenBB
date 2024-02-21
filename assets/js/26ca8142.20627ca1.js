"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(15569);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,i]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(r.Toggle,{isOn:o,handleChange:()=>i(!o)}))),o&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},12836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(88828),i=n(20630);const s={title:"AskOBB Feature",sidebar_position:5,description:"This documentation page presents the innovative use of language learning machines (LLMs), in particular, the LlamaIndex in transforming natural language queries into commands in OpenBB Terminal.",keywords:["AskOBB","natural language query","LLMs","LlamaIndex","BloombergGPT"]},l=void 0,d={unversionedId:"terminal/usage/askobb-feature",id:"terminal/usage/askobb-feature",title:"AskOBB Feature",description:"This documentation page presents the innovative use of language learning machines (LLMs), in particular, the LlamaIndex in transforming natural language queries into commands in OpenBB Terminal.",source:"@site/content/terminal/usage/askobb-feature.md",sourceDirName:"terminal/usage",slug:"/terminal/usage/askobb-feature",permalink:"/terminal/usage/askobb-feature",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/askobb-feature.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1708472907,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:5,frontMatter:{title:"AskOBB Feature",sidebar_position:5,description:"This documentation page presents the innovative use of language learning machines (LLMs), in particular, the LlamaIndex in transforming natural language queries into commands in OpenBB Terminal.",keywords:["AskOBB","natural language query","LLMs","LlamaIndex","BloombergGPT"]},sidebar:"tutorialSidebar",previous:{title:"Community Routines",permalink:"/terminal/usage/routines/community-routines"},next:{title:"Hub Synchronization",permalink:"/terminal/usage/hub"}},c={},u=[{value:"Background",id:"background",level:2},{value:"Solution: LlamaIndex",id:"solution-llamaindex",level:2}],m={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"AskOBB Feature - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/GPMFO08115s?si=D86B3sl8g9-FTKtI",videoLegend:"Short introduction on leveraging natural language for data retrieval using AskOBB",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"AskOBB allows users to do a query using natural language and we convert it directly into a command. This makes it easier for newcomers to get started with the OpenBB Terminal."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/1ba1e556-150f-470c-9745-2dd7b536e5ba",alt:"image"})),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"With the rise of LLMs, it was only a matter of time before LlamaIndex became prevalent in the finance space. While emergent technologies like ",(0,r.kt)("a",{parentName:"p",href:"https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance/"},"BloombergGPT")," is trained on financial information and financial documents, OpenBB is taking a different approach. With over 900 different commands accessing data from almost 100 different sources, we wanted to map natural language to these to reduce the barrier of entry to newcomers."),(0,r.kt)("p",null,"While this may not sound like a complex problem, as we just need to classify natural language queries into one of 900 possible options, there are quite a few intricacies. Among these is the tree-type structure of OpenBB terminal commands. For example, if you want to view a candle chart looking at the so-called \u201cGolden Cross\u201d (where a 50 and a 200-day EMA cross), you would use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"stocks/ta/ema -l 50,200"),". However, this requires that we have some previous context - i.e. the data should be previously selected. So the full command to use would actually be ",(0,r.kt)("inlineCode",{parentName:"p"},"stocks/load <TICKER>/ta/ema -l 50,200")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"<TICKER>")," being the data of interest."),(0,r.kt)("p",null,"Another intricacy is that there are many different asset classes covered, which have their individual ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," commands. Loading in a cryptocurrency, such as Bitcoin, is a different command than loading an equity like AAPL. This means that the language model needs to understand the difference in mapping ",(0,r.kt)("inlineCode",{parentName:"p"},"load bitcoin")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"crypto/load btc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"load AAPL")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"stocks/load AAPL"),"."),(0,r.kt)("h2",{id:"solution-llamaindex"},"Solution: LlamaIndex"),(0,r.kt)("p",null,"This is where LlamaIndex comes into play. Each of our OpenBB Terminal commands has an associated usage string in the form of a typical CLI help argument. An example for the stocks load command:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/fcdcdc22-1c80-4f49-9171-8033c607d0b7",alt:"image"})),(0,r.kt)("p",null,"You can find this on our docs here: OpenBB Docs."),(0,r.kt)("p",null,"If this help string is provided to an LLM, we can ask it for a command based on the context. So what we did was copy all of these command helps into txt files. In order to help out the model, we provided a few examples of each command. In our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/d3126b414aac77fe4086661214535975ac55ba95/openbb_terminal/miscellaneous/gpt_index/data/stocks_load.txt"},"stocks load file"),", we add the following examples:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/10cae260-8fea-41d0-adb4-13a4b8f62ca8",alt:"image"})),(0,r.kt)("p",null,"This process is repeated for EVERY function in the OpenBB Terminal. Once we have these, we can pass them to a Vector Index in two lines of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'documents = SimpleDirectoryReader(GPT_INDEX_DIRECTORY / "data/").load_data()\nindex = VectorStoreIndex.from_documents(documents, service_context=service_context)\n')),(0,r.kt)("p",null,"What this Vector Index does is load in each file and create an embedding using the OpenAI embeddings API. In essence, this means each file is associated with a vector (a series of numbers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"[0.001, 0.002, .2, ..., 0.03]"),"), and these are all saved in memory through LlamaIndex."),(0,r.kt)("p",null,"Now that we have the context of our documentation and examples saved, it is time to query the LLM. For AskOBB, we are using OpenAI\u2019s gpt3.5-turbo model by default, but allow users to specify others (e.g. GPT-4). We provide a prompt string to the query, indicating to only return a command and to follow certain rules when querying. The prompt string we provide is:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c0df6589-e22f-46b0-a272-6fa7f6762ff3",alt:"image"})),(0,r.kt)("p",null,"To get the LLM response, it is just another 2 lines of code with LlamaIndex:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"query_engine = index.as_query_engine() response = query_engine.query(prompt_string)\n")),(0,r.kt)("p",null,"And that is all we need!"),(0,r.kt)("p",null,"What this process does is take our previously defined Vector Index, which stores all the relevant embeddings, and it creates an embedding from our prompt, which includes the query. To determine which txt file to use, the Vector Index finds the index with the \u201cclosest\u201d embedding and provides that as context to the LLM."),(0,r.kt)(i.Z,{youtubeLink:"https://www.youtube.com/embed/s8ZNLqi9hzc?si=u0tr6471z32jFzu0",videoLegend:"Watch LlamaIndex Webinar: LLMs for Investment Research",mdxType:"TutorialVideo"}))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,r=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);