"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21851],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),s=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(b,o(o({ref:e},c),{},{components:r})):a.createElement(b,o({ref:e},c))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:r,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(35742);function l(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>N});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),s=r(67392),c=r(50012);function p(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:a,default:n}}=t;return{value:e,label:r,attributes:a,default:n}}))}function d(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=e??p(r);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function m(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:r}=t;const a=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function f(t){const{defaultValue:e,queryString:r=!1,groupId:a}=t,l=d(t),[o,i]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=r.find((t=>t.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[u,s]=b({queryString:r,groupId:a}),[p,f]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:a}),k=(()=>{const t=u??p;return m({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),f(t)}),[s,f,l]),tabValues:l}}var k=r(72389);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function g(t){let{className:e,block:r,selectedValue:u,selectValue:s,tabValues:c}=t;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),{pathname:m}=(0,i.TH)(),b=t=>{const e=t.currentTarget,r=p.indexOf(e),a=c[r].value;a!==u&&(d(e),s(a))},f=t=>{let e=null;switch(t.key){case"Enter":b(t);break;case"ArrowRight":{const r=p.indexOf(t.currentTarget)+1;e=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(t.currentTarget)-1;e=p[r]??p[p.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((t=>{let{value:e,label:r,attributes:o}=t;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>p.push(t),onKeyDown:f,onClick:b},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",h.tabItem,o?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&m.startsWith("/terminal")})}),r??e)})))}function y(t){let{lazy:e,children:r,selectedValue:a}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===a));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function v(t){const e=f(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(g,(0,a.Z)({},t,e)),n.createElement(y,(0,a.Z)({},t,e)))}function N(t){const e=(0,k.Z)();return n.createElement(v,(0,a.Z)({key:String(e)},t))}},21327:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),l=r(88828),o=r(31792),i=r(85162);const u={title:"vaults",description:"This page provides detailed information on DeFi Vaults including functions to get data and tools to visualize this data. The provided functions allow querying various blockchains and DeFi protocols, and sorting by key metrics such as APY.",keywords:["DeFi Vaults Information","openbb.crypto.defi.vaults","openbb.crypto.defi.vaults_chart","Blockchain","DeFi protocol","Kind of vault","APY","ethereum","polygon","avalanche","bsc","terra","fantom","moonriver","celo","heco","okex","cronos","arbitrum","eth","harmony","fuse","defichain","solana","optimism","aave","acryptos","alpaca","anchor","autofarm","balancer","bancor","beefy","belt","compound","convex","cream","curve","defichain","geist","lido","liquity","mirror","pancakeswap","raydium","sushi","tarot","traderjoe"]},s=void 0,c={unversionedId:"sdk/reference/crypto/defi/vaults",id:"sdk/reference/crypto/defi/vaults",title:"vaults",description:"This page provides detailed information on DeFi Vaults including functions to get data and tools to visualize this data. The provided functions allow querying various blockchains and DeFi protocols, and sorting by key metrics such as APY.",source:"@site/content/sdk/reference/crypto/defi/vaults.md",sourceDirName:"sdk/reference/crypto/defi",slug:"/sdk/reference/crypto/defi/vaults",permalink:"/sdk/reference/crypto/defi/vaults",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/defi/vaults.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710337987,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"vaults",description:"This page provides detailed information on DeFi Vaults including functions to get data and tools to visualize this data. The provided functions allow querying various blockchains and DeFi protocols, and sorting by key metrics such as APY.",keywords:["DeFi Vaults Information","openbb.crypto.defi.vaults","openbb.crypto.defi.vaults_chart","Blockchain","DeFi protocol","Kind of vault","APY","ethereum","polygon","avalanche","bsc","terra","fantom","moonriver","celo","heco","okex","cronos","arbitrum","eth","harmony","fuse","defichain","solana","optimism","aave","acryptos","alpaca","anchor","autofarm","balancer","bancor","beefy","belt","compound","convex","cream","curve","defichain","geist","lido","liquity","mirror","pancakeswap","raydium","sushi","tarot","traderjoe"]},sidebar:"tutorialSidebar",previous:{title:"stvl",permalink:"/sdk/reference/crypto/defi/stvl"},next:{title:"tools",permalink:"/sdk/reference/crypto/tools/"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:d},b="wrapper";function f(t){let{components:e,...r}=t;return(0,n.kt)(b,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"crypto.defi.vaults - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Get DeFi Vaults Information. DeFi Vaults are pools of funds with an assigned strategy which main goal is to"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/coindix_model.py#L112"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.crypto.defi.vaults(chain: Optional[str] = None, protocol: Optional[str] = None, kind: Optional[str] = None, ascend: bool = True, sortby: str = "apy")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"chain"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Blockchain - one from list ","[",(0,n.kt)("br",null),"'ethereum', 'polygon', 'avalanche', 'bsc', 'terra', 'fantom',",(0,n.kt)("br",null),"'moonriver', 'celo', 'heco', 'okex', 'cronos', 'arbitrum', 'eth',",(0,n.kt)("br",null),"'harmony', 'fuse', 'defichain', 'solana', 'optimism'",(0,n.kt)("br",null),"]"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"protocol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"DeFi protocol - one from list: ","[",(0,n.kt)("br",null),"'aave', 'acryptos', 'alpaca', 'anchor', 'autofarm', 'balancer', 'bancor',",(0,n.kt)("br",null),"'beefy', 'belt', 'compound', 'convex', 'cream', 'curve', 'defichain', 'geist',",(0,n.kt)("br",null),"'lido', 'liquity', 'mirror', 'pancakeswap', 'raydium', 'sushi', 'tarot', 'traderjoe',",(0,n.kt)("br",null),"'tulip', 'ubeswap', 'uniswap', 'venus', 'yearn'",(0,n.kt)("br",null),"]"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kind"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Kind/type of vault - one from list: ","['lp','single','noimploss','stable']"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Top 100 DeFi Vaults for given chain/protocol sorted by APY.")))),(0,n.kt)("hr",null)),(0,n.kt)(i.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,n.kt)("p",null,"Prints table showing Top DeFi Vaults - pools of funds with an assigned strategy which main goal is to"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/coindix_view.py#L20"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.crypto.defi.vaults_chart(chain: Optional[str] = None, protocol: Optional[str] = None, kind: Optional[str] = None, limit: int = 10, sortby: str = "apy", ascend: bool = True, link: bool = False, export: str = "", sheet_name: Optional[str] = None)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"chain"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Blockchain - one from list ","[",(0,n.kt)("br",null),"'ethereum', 'polygon', 'avalanche', 'bsc', 'terra', 'fantom',",(0,n.kt)("br",null),"'moonriver', 'celo', 'heco', 'okex', 'cronos', 'arbitrum', 'eth',",(0,n.kt)("br",null),"'harmony', 'fuse', 'defichain', 'solana', 'optimism'",(0,n.kt)("br",null),"]"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"protocol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"DeFi protocol - one from list: ","[",(0,n.kt)("br",null),"'aave', 'acryptos', 'alpaca', 'anchor', 'autofarm', 'balancer', 'bancor',",(0,n.kt)("br",null),"'beefy', 'belt', 'compound', 'convex', 'cream', 'curve', 'defichain', 'geist',",(0,n.kt)("br",null),"'lido', 'liquity', 'mirror', 'pancakeswap', 'raydium', 'sushi', 'tarot', 'traderjoe',",(0,n.kt)("br",null),"'tulip', 'ubeswap', 'uniswap', 'venus', 'yearn'",(0,n.kt)("br",null),"]"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kind"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Kind/type of vault - one from list: ","['lp','single','noimploss','stable']"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of records to display"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,n.kt)("td",{parentName:"tr",align:null},"apy"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ascend"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to sort data descending"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"link"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show links"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null))))}f.isMDXComponent=!0}}]);