"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73026],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(a),s=n,N=k["".concat(m,".").concat(s)]||k[s]||g[s]||l;return a?r.createElement(N,i(i({ref:e},d),{},{components:a})):r.createElement(N,i({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[k]="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},54967:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"Comparison Analysis",description:"Learn how to use the CA module of the OpenBB Terminal SDK for functionalities like balance financials comparison, historical price correlation, sentiment analysis comparison and more using Python. Discover the list of similar companies, historical volume data comparison and more.",keywords:["OpenBB Terminal SDK","CA module OpenBB","Python SDK for OpenBB Terminal","financial analysis using Python","stock data analysis","Python stock data","market sentiment analysis","financial comparison using Python","openbb.stocks.ca functions","historical price correlation","sentiment analysis comparison","similar companies list","historical volume data comparison"]},p=void 0,m={unversionedId:"sdk/data-available/stocks/comparison-analysis",id:"sdk/data-available/stocks/comparison-analysis",title:"Comparison Analysis",description:"Learn how to use the CA module of the OpenBB Terminal SDK for functionalities like balance financials comparison, historical price correlation, sentiment analysis comparison and more using Python. Discover the list of similar companies, historical volume data comparison and more.",source:"@site/content/sdk/data-available/stocks/comparison-analysis.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/comparison-analysis",permalink:"/sdk/data-available/stocks/comparison-analysis",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/stocks/comparison-analysis.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1710431685,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Comparison Analysis",description:"Learn how to use the CA module of the OpenBB Terminal SDK for functionalities like balance financials comparison, historical price correlation, sentiment analysis comparison and more using Python. Discover the list of similar companies, historical volume data comparison and more.",keywords:["OpenBB Terminal SDK","CA module OpenBB","Python SDK for OpenBB Terminal","financial analysis using Python","stock data analysis","Python stock data","market sentiment analysis","financial comparison using Python","openbb.stocks.ca functions","historical price correlation","sentiment analysis comparison","similar companies list","historical volume data comparison"]},sidebar:"tutorialSidebar",previous:{title:"Behavioral Analysis",permalink:"/sdk/data-available/stocks/behavioral-analysis"},next:{title:"Dark Pools and Short Data",permalink:"/sdk/data-available/stocks/dark-pool-shorts"}},o={},d=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Balance",id:"balance",level:3},{value:"Sentiment",id:"sentiment",level:3},{value:"Screener",id:"screener",level:3},{value:"HCorr",id:"hcorr",level:3}],k={toc:d},g="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"Comparison Analysis - Stocks - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The CA module provides programmatic access to the commands from within the OpenBB Terminal menu. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.ca")),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"The examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,n.kt)("p",null,"A brief description below highlights the functions available within the module:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.balance"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Balance Financials Comparison")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.cashflow"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Cashflow Financials Comparison")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.hcorr"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical Price Correlation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.hist"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical Price Data Comparison")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.income"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Income Financials Comparison")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.scorr"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Sentiment Correlation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.screener"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Screener Overview")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.sentiment"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Sentiment Analysis Comparison")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.similar"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get a List of Similar Companies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.ca.volume"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical Volume Data Comparison")))),(0,n.kt)("p",null,"Alternatively, the contents of the menu is printed with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.stocks.ca)\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"balance"},"Balance"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"openbb.stocks.ca.balance")," compares the balance sheets for a list of companies."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.ca.balance(["TSLA","F", "GE"], timeframe = \'2021\')\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"TSLA"),(0,n.kt)("th",{parentName:"tr",align:"left"},"F"),(0,n.kt)("th",{parentName:"tr",align:"left"},"GE"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cash & Short Term Investments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"18.05B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"49.59B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"28.07B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cash & Short Term Investments Growth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-8.00%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-0.74%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-35.99%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cash Only"),(0,n.kt)("td",{parentName:"tr",align:"left"},"17.92B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"20.54B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15.77B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Short-Term Investments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cash & ST Investments / Total Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"29.05%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"19.29%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"14.11%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Accounts Receivable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.91B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"44.04B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"20.5B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Accounts Receivable Growth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.43%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-16.24%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-8.70%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Accounts Receivables, Net"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.91B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"43.91B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"20.5B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Accounts Receivables, Gross"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.91B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"44.28B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"21.58B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bad Debt/Doubtful Accounts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(366M)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(1.07B)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Other Receivable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Accounts Receivable Turnover"),(0,n.kt)("td",{parentName:"tr",align:"left"},"28.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.62")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Inventories"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.76B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12.07B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15.85B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Finished Goods"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.28B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6.28B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.93B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Work in Progress"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.09B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Raw Materials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.39B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.79B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8.71B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Progress Payments & Other"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.21B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Other Current Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.38B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.3B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.93B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Miscellaneous Current Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.38B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.3B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.93B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Current Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"27.1B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"109B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"66.35B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net Property, Plant & Equipment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"31.18B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"64.84B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15.61B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Property, Plant & Equipment - Gross"),(0,n.kt)("td",{parentName:"tr",align:"left"},"39.87B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"101.99B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"31.9B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Buildings"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.68B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12.44B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8.31B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Land & Improvements"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"450M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"585M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Computer Software and Equipment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.41B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.6B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Other Property, Plant & Equipment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"18.73B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11.4B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Accumulated Depreciation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8.69B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"37.16B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16.3B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Investments and Advances"),(0,n.kt)("td",{parentName:"tr",align:"left"},"223M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.64B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"42.21B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Other Long-Term Investments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"223M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"197M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"42.21B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Long-Term Note Receivables"),(0,n.kt)("td",{parentName:"tr",align:"left"},"299M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"51.26B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Intangible Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.72B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"619M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"35.51B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net Goodwill"),(0,n.kt)("td",{parentName:"tr",align:"left"},"200M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"619M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"26.18B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net Other Intangibles"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Other Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.62B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11.89B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"28.34B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Assets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"62.13B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"257.04B"),(0,n.kt)("td",{parentName:"tr",align:"left"},"198.87B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Assets Growth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"19.14%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-3.83%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-22.38%")))),(0,n.kt)("h3",{id:"sentiment"},"Sentiment"),(0,n.kt)("p",null,"Social sentiment over time, for a list of tickers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.ca.sentiment(["tsla", "f", "ge"])\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"TSLA"),(0,n.kt)("th",{parentName:"tr",align:"right"},"F"),(0,n.kt)("th",{parentName:"tr",align:"right"},"GE"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.028"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.382"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.328")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.209"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.199"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.242")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.025"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.178"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.112")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.027"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.086"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.056")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.402"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.105"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.104")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.122"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.081"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.075")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.179"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.086")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.156"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.387"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.025")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.216"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.093"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.019")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.071"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.069"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.01")))),(0,n.kt)("h3",{id:"screener"},"Screener"),(0,n.kt)("p",null,"Show a high-level overview of company information for tickers in a given list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.ca.screener(["f", "ge", "tsla"])\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Company"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sector"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Industry"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Country"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Market Cap"),(0,n.kt)("th",{parentName:"tr",align:"right"},"P/E"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Change"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"F"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ford Motor Company"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Auto Manufacturers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USA"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.577e+10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.31"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0029"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.40871e+07")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"General Electric Company"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Industrials"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specialty Industrial Machinery"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USA"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.375e+10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,n.kt)("td",{parentName:"tr",align:"right"},"85.89"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0048"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.26976e+06")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tesla, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Auto Manufacturers"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USA"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.3886e+11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.72"),(0,n.kt)("td",{parentName:"tr",align:"right"},"167.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0684"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.28827e+07")))),(0,n.kt)("h3",{id:"hcorr"},"HCorr"),(0,n.kt)("p",null,"Calculates the historical price (or returns) correlation for a list of tickers, over a specified window."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"correlation,historical = (\n    openbb.stocks.ca.hcorr(similar = openbb.stocks.ca.similar('TSLA', source = 'Polygon'),\n    candle_type = 'R',\n    start_date = '2018-11-01'\n    )\n)\ncorrelation\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"HMC"),(0,n.kt)("th",{parentName:"tr",align:"right"},"TM"),(0,n.kt)("th",{parentName:"tr",align:"right"},"F"),(0,n.kt)("th",{parentName:"tr",align:"right"},"GM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HMC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.74425"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.596182"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.62178")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TM"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.74425"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.532589"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.539333")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"F"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.596182"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.532589"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.787406")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GM"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.62178"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.539333"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.787406"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1")))))}s.isMDXComponent=!0}}]);