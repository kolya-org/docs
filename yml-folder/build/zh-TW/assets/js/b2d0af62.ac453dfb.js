"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[31287],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63365:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u8a62\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f",sidebar_position:8,slug:"/account-asset/master-deposit-addr"},i=void 0,o={unversionedId:"v3/account-asset/withdraw-deposit/master-deposit-addr",id:"v3/account-asset/withdraw-deposit/master-deposit-addr",title:"\u67e5\u8a62\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f",description:"\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f\u67e5\u8a62",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/withdraw-deposit/master-deposit-addr.mdx",sourceDirName:"v3/account-asset/withdraw-deposit",slug:"/account-asset/master-deposit-addr",permalink:"/docs/zh-TW/account-asset/master-deposit-addr",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u67e5\u8a62\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f",sidebar_position:8,slug:"/account-asset/master-deposit-addr"}},p={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e3b\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f\u67e5\u8a62"),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/deposit/address/query")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"enum#coin"},"coin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chainType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u93c8. \u82e5\u70ba\u7a7a\uff0c\u5247\u8fd4\u56de\u5168\u90e8.",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u6ce8\u610f\uff0c\u6b64\u8655\u61c9\u50b3\u93c8\u540d\uff0c\u4f8b\u5982ETH\uff0c\u800c\u4e0d\u662fERC20.")))))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"enum#coin"},"coin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chains"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> chainType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u93c8\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> addressDeposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tagDeposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5145\u503ctag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u93c8\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> batchReleaseLimit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5e63\u93c8\u6bcf\u65e5\u5145\u503c\u9650\u984d. ",(0,r.kt)("inlineCode",{parentName:"td"},'"-1"'),"\u8868\u793a\u7121\u9650\u5236")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /asset/v3/private/deposit/address/query?coin=USDT&chainType=ETH HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671174181320\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/x-www-form-urlencoded\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "coin": "USDT",\n        "chains": [\n            {\n                "chainType": "ERC20",\n                "addressDeposit": "xxxxxxxxxxx",\n                "tagDeposit": "",\n                "chain": "ETH",\n                "batchReleaseLimit": "ETH"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1671174181514\n}\n')))}c.isMDXComponent=!0}}]);