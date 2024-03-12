"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},29540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"dte",description:"This documentation page provides detailed information on the 'dte' function. Learn about the computation of days to expiration from yfinance option date using the 'openbb.stocks.options' methods in Python.",keywords:["dte function","yfinance option date","openbb.stocks.options","python coding","finance model","stock options","days to expiration"]},s=void 0,c={unversionedId:"sdk/reference/stocks/options/dte",id:"sdk/reference/stocks/options/dte",title:"dte",description:"This documentation page provides detailed information on the 'dte' function. Learn about the computation of days to expiration from yfinance option date using the 'openbb.stocks.options' methods in Python.",source:"@site/content/sdk/reference/stocks/options/dte.md",sourceDirName:"sdk/reference/stocks/options",slug:"/sdk/reference/stocks/options/dte",permalink:"/sdk/reference/stocks/options/dte",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/options/dte.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710271896,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"dte",description:"This documentation page provides detailed information on the 'dte' function. Learn about the computation of days to expiration from yfinance option date using the 'openbb.stocks.options' methods in Python.",keywords:["dte function","yfinance option date","openbb.stocks.options","python coding","finance model","stock options","days to expiration"]},sidebar:"tutorialSidebar",previous:{title:"chains",permalink:"/sdk/reference/stocks/options/chains"},next:{title:"eodchain",permalink:"/sdk/reference/stocks/options/eodchain"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],l={toc:d},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"stocks.options.dte - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Returns a new column containing the DTE as an integer, including 0."),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/op_helpers.py#L599"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.options.dte(chain: pd.DataFrame)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"This function does not take any parameters."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("hr",null))}f.isMDXComponent=!0}}]);