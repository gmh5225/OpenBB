"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99954],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?t.createElement(g,o(o({ref:a},c),{},{components:n})):t.createElement(g,o({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88828:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(67294),r=n(35742);function i(e){let{title:a}=e;return t.createElement(r.Z,null,t.createElement("title",null,a))}},28182:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(87462),r=(n(67294),n(3905)),i=n(88828);const o={title:"country",description:"This page provides information on how to set a country for funds. It explains the usage and parameters needed for this process, primarily focusing on the country selection parameter.",keywords:["country","funds","usage","parameters","name","select"]},l=void 0,s={unversionedId:"terminal/reference/funds/country",id:"terminal/reference/funds/country",title:"country",description:"This page provides information on how to set a country for funds. It explains the usage and parameters needed for this process, primarily focusing on the country selection parameter.",source:"@site/content/terminal/reference/funds/country.md",sourceDirName:"terminal/reference/funds",slug:"/terminal/reference/funds/country",permalink:"/terminal/reference/funds/country",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/funds/country.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1710431685,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"country",description:"This page provides information on how to set a country for funds. It explains the usage and parameters needed for this process, primarily focusing on the country selection parameter.",keywords:["country","funds","usage","parameters","name","select"]},sidebar:"tutorialSidebar",previous:{title:"carbon",permalink:"/terminal/reference/funds/carbon"},next:{title:"exclusion",permalink:"/terminal/reference/funds/exclusion"}},u={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:c},m="wrapper";function p(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"funds /country - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Set a country for funds."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"country [-n NAME]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"-n  --name"),(0,r.kt)("td",{parentName:"tr",align:null},"country to select"),(0,r.kt)("td",{parentName:"tr",align:null},"united_states"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"afghanistan, \xe5land",(0,r.kt)("em",{parentName:"td"},"islands, albania, algeria, american_samoa, andorra, angola, anguilla, antarctica, antigua_and_barbuda, argentina, armenia, aruba, australia, austria, azerbaijan, bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bermuda, bhutan, bolivia, bonaire, bosnia_and_herzegovina, botswana, bouvet_island, brazil, british_indian_ocean_territory, brunei_darussalam, bulgaria, burkina_faso, burundi, cabo_verde, cambodia, cameroon, canada, cayman_islands, central_african_republic, chad, chile, china, christmas_island, cocos"),"(keeling)",(0,r.kt)("em",{parentName:"td"},"islands, colombia, comoros, congo"),"(the",(0,r.kt)("em",{parentName:"td"},"democratic_republic_of_the), congo"),"(the), cook",(0,r.kt)("em",{parentName:"td"},"islands, costa_rica, cote_divoire, croatia, cuba, cura\xe7ao, cyprus, czechia, denmark, djibouti, dominica, dominican_republic, ecuador, egypt, el_salvador, equatorial_guinea, eritrea, estonia, eswatini, ethiopia, falkland_islands, fiji, finland, france, french_guiana, french_polynesia, french_southern_territories, gabon, gambia, georgia, germany, ghana, gibraltar, greece, greenland, grenada, guadeloupe, guam, guatemala, guernsey, guinea, guinea-bissau, guyana, haiti, heard_island_and_mcdonald_islands, holy_see, honduras, hong_kong, hungary, iceland, india, indonesia, iran, iraq, ireland, isle_of_man, israel, italy, jamaica, japan, jersey, jordan, kazakhstan, kenya, kiribati, korea"),"(the",(0,r.kt)("em",{parentName:"td"},"democratic_peoples_republic_of), korea"),"(the",(0,r.kt)("em",{parentName:"td"},"republic_of), kuwait, kyrgyzstan, lao_peoples_democratic_republic, latvia, lebanon, lesotho, liberia, libya, liechtenstein, lithuania, luxembourg, macao, north_macedonia, madagascar, malawi, malaysia, maldives, mali, malta, marshall_islands, martinique, mauritania, mauritius, mayotte, mexico, micronesia, moldova, monaco, mongolia, montenegro, montserrat, morocco, mozambique, myanmar, namibia, nauru, nepal, netherlands, new_caledonia, new_zealand, nicaragua, niger, nigeria, niue, norfolk_island, northern_mariana_islands, norway, oman, pakistan, palau, palestine, panama, papua_new_guinea, paraguay, peru, philippines, pitcairn, poland, portugal, puerto_rico, qatar, r\xe9union, romania, russian_federation, rwanda, saint_barth\xe9lemy, saint_helena, saint_kitts_and_nevis, saint_lucia, saint_martin"),"(french",(0,r.kt)("em",{parentName:"td"},"part), saint_pierre_and_miquelon, saint_vincent_and_the_grenadines, samoa, san_marino, sao_tome_and_principe, saudi_arabia, senegal, serbia, seychelles, sierra_leone, singapore, sint_maarten"),"(dutch",(0,r.kt)("em",{parentName:"td"},"part), slovakia, slovenia, solomon_islands, somalia, south_africa, south_georgia_and_the_south_sandwich_islands, south_sudan, spain, sri_lanka, sudan, suriname, svalbard, sweden, switzerland, syrian_arab_republic, taiwan, tajikistan, tanzania, thailand, timor-leste, togo, tokelau, tonga, trinidad_and_tobago, tunisia, t\xfcrkiye, turkmenistan, turks_and_caicos_islands, tuvalu, uganda, ukraine, united_arab_emirates, united_kingdom, united_states_minor_outlying_islands, united_states, uruguay, uzbekistan, vanuatu, venezuela, viet_nam, virgin_islands"),"(british), virgin",(0,r.kt)("em",{parentName:"td"},"islands"),"(u.s.), wallis_and_futuna, western_sahara, yemen, zambia, zimbabwe")))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);