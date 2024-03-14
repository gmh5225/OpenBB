"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89721],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,f=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},17041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const i={title:"Data and Data Providers",sidebar_position:2,description:"This page contains some frequently asked questions about OpenBB data and providers.",keywords:["provider","data","source","live","platform","api","FastAPI"]},s=void 0,l={unversionedId:"platform/faqs/data_providers",id:"platform/faqs/data_providers",title:"Data and Data Providers",description:"This page contains some frequently asked questions about OpenBB data and providers.",source:"@site/content/platform/faqs/data_providers.md",sourceDirName:"platform/faqs",slug:"/platform/faqs/data_providers",permalink:"/platform/faqs/data_providers",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/faqs/data_providers.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1710431685,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:2,frontMatter:{title:"Data and Data Providers",sidebar_position:2,description:"This page contains some frequently asked questions about OpenBB data and providers.",keywords:["provider","data","source","live","platform","api","FastAPI"]},sidebar:"tutorialSidebar",previous:{title:"Platform vs SDK",permalink:"/platform/faqs/platform_vs_sdk"},next:{title:"Introduction",permalink:"/terminal/"}},p={},d=[],u={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Data Providers FAQ - FAQs | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does OpenBB have coverage for [insert type of data]?"),(0,r.kt)("p",null,"Equity market coverage will vary by provider and subscription status with them. It is common for free tiers to be US-listings only."),(0,r.kt)("p",null,"You can find all data models ",(0,r.kt)("a",{parentName:"p",href:"/platform/data_models"},"here"),", or the ",(0,r.kt)("a",{parentName:"p",href:"/platform/reference"},"Reference")," page of endpoints. If the type of data you are looking for is not listed there, send us a ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"feature request")," telling us about your use case.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"The router appears to be missing functions."),(0,r.kt)("p",null,"The router populates itself from the installed extensions. For example, if the Technical Analysis extension is not installed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.technical")," router path will not be present."),(0,r.kt)("p",null,"The same applies to data extensions. If a provider module is not installed, it will not be displayed as a choice."),(0,r.kt)("p",null,"If you have just installed a new extension, the Python interface may need to be rebuilt. This can be triggered manually with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import openbb\nopenbb.build()\nexit()\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Install all toolkits and data providers with:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "openbb[all]"\n')),(0,r.kt)("p",{parentName:"admonition"},"or by cloning the GitHub repo, from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/openbb_platform/")," folder:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python dev_install.py -e\n")),(0,r.kt)("p",{parentName:"admonition"},"The nightly PyPI distribution is another way to install everything, and to be on the bleeding edge of development:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bashe"},"pip install openbb-nightly\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why is the returned data not matching the start/end date I requested?"),(0,r.kt)("p",null,"The provider may not have data from the requested period, in which case the data will be what they return. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"provider='yfinance'")," at one-minute intervals will not return beyond one week ago."),(0,r.kt)("p",null,"Another reason could be the data entitlements of your API key. Check the provider's website to know what data coverage to expect. If there is technical problem with a provider or function, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose"},"GitHub")," and raise an issue if one does not already exist. Or, send us an ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@openbb.co"},"email")," with the details, your system configuration, the syntax used, and any error messages that are raised.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I load a ticker symbol from India?"),(0,r.kt)("p",null,"Ticker symbols listed on exchanges outside of the US will have a suffix attached, for example, Rico Auto Industries Limited:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\ndata = obb.equity.price.historical("ricoauto.ns", provider="fmp")\n')),(0,r.kt)("p",null,"The precise naming convention will differ by source, it's best to reference each source's own documentation for conventions.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How can I request a data provider or function?"),(0,r.kt)("p",null,"Please  ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"request a feature"),", tell us about your use case.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I contribute my own data provider extension?"),(0,r.kt)("p",null,"Yes! Please take a look at our ",(0,r.kt)("a",{parentName:"p",href:"/platform/development"},"Development")," pages for more information.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can my company become a data partner?"),(0,r.kt)("p",null,"Yes! Please visit our website ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/use-cases/data-vendors"},"here")," and fill out the form.")))}c.isMDXComponent=!0}}]);