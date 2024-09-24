"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[48169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,c=u["".concat(m,".").concat(k)]||u[k]||s[k]||i;return n?r.createElement(c,l(l({ref:t},o),{},{components:n})):r.createElement(c,l({ref:t},o))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"Premium Index Price Kline",sidebar_label:"Premium Index Price Kline",sidebar_position:4,slug:"/derivatives/public/premium-index-kline"},l=void 0,p={unversionedId:"v3/derivatives/rest-public/premium-index-kline",id:"v3/derivatives/rest-public/premium-index-kline",title:"Premium Index Price Kline",description:"Get premium index price kline data",source:"@site/docs/v3/derivatives/rest-public/premium-index-kline.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/premium-index-kline",permalink:"/docs/derivatives/public/premium-index-kline",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Premium Index Price Kline",sidebar_label:"Premium Index Price Kline",sidebar_position:4,slug:"/derivatives/public/premium-index-kline"}},m={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=o("Tabs"),u=o("TabItem"),k={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get premium index price kline data"),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/premium-index-price-kline")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),". Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", but in the response category shows ",(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#interval"},"interval")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Kline interval. ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," ",(0,a.kt)("inlineCode",{parentName:"td"},"3")," ",(0,a.kt)("inlineCode",{parentName:"td"},"5")," ",(0,a.kt)("inlineCode",{parentName:"td"},"15")," ",(0,a.kt)("inlineCode",{parentName:"td"},"30")," ",(0,a.kt)("inlineCode",{parentName:"td"},"60")," ",(0,a.kt)("inlineCode",{parentName:"td"},"120")," ",(0,a.kt)("inlineCode",{parentName:"td"},"240")," ",(0,a.kt)("inlineCode",{parentName:"td"},"360")," ",(0,a.kt)("inlineCode",{parentName:"td"},"720")," ",(0,a.kt)("inlineCode",{parentName:"td"},"D")," ",(0,a.kt)("inlineCode",{parentName:"td"},"M")," ",(0,a.kt)("inlineCode",{parentName:"td"},"W"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"start"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"end"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"1000"),"]",". Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"200"))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type. Keeps empty string ",(0,a.kt)("inlineCode",{parentName:"td"},'""')," when ",(0,a.kt)("inlineCode",{parentName:"td"},"category")," is not passed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"An string array of individual candle"),(0,a.kt)("li",null,"Sort in reverse by ",(0,a.kt)("inlineCode",{parentName:"td"},"start")),(0,a.kt)("li",null,"The default collation within the array is ",(0,a.kt)("inlineCode",{parentName:"td"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"open"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"high"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"low"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"close"))," "))))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(u,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/premium-index-price-kline?symbol=BTCUSDT&interval=D&start=1668441600000&end=1668528000000 HTTP/1.1\nHost: api.bybit.com\n")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(u,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "symbol": "BTCUSDT",\n    "category": "",\n    "list": [\n        [\n            "1668470400000",\n            "-0.000754",\n            "-0.001071",\n            "-0.001072",\n            "-0.001072"\n        ]\n    ]\n},\n    "retExtInfo": {},\n    "time": 1671969006930\n}\n')))))}c.isMDXComponent=!0}}]);