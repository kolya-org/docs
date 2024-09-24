"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[49755],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=d(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10686:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"Switch Position Mode",sidebar_label:"Switch Position Mode",sidebar_position:4,slug:"/derivatives/contract/position-mode"},o=void 0,i={unversionedId:"v3/derivatives/rest-contract/position/position-mode",id:"v3/derivatives/rest-contract/position/position-mode",title:"Switch Position Mode",description:"It supports to switch the position mode for USDT perpetual and Inverse futures. If you are in one-way Mode, you can only open one position on Buy or Sell side. If you are in hedge mode, you can open both Buy and Sell side positions simultaneously.",source:"@site/docs/v3/derivatives/rest-contract/position/position-mode.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/position-mode",permalink:"/docs/derivatives/contract/position-mode",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Switch Position Mode",sidebar_label:"Switch Position Mode",sidebar_position:4,slug:"/derivatives/contract/position-mode"}},s={},d=[{value:"Example",id:"example",level:3},{value:"The position-switch ability for each contract",id:"the-position-switch-ability-for-each-contract",level:3},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It supports to switch the position mode for ",(0,a.kt)("strong",{parentName:"p"},"USDT perpetual")," and ",(0,a.kt)("strong",{parentName:"p"},"Inverse futures"),". If you are in one-way Mode, you can only open one position on Buy or Sell side. If you are in hedge mode, you can open both Buy and Sell side positions simultaneously."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Priority for configuration to take effect: symbol > coin > system default"),(0,a.kt)("li",{parentName:"ul"},"System default: one-way mode"),(0,a.kt)("li",{parentName:"ul"},"If the request is by coin (settleCoin), then all symbols based on this setteCoin that do not have position and open order will be batch switched, and new listed symbol based on this settleCoin will be the same mode you set."))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("table",{class:"custom_table"},(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"System default"),(0,a.kt)("th",null,"coin"),(0,a.kt)("th",null,"symbol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Initial setting"),(0,a.kt)("td",null,"one-way"),(0,a.kt)("td",null,"never configured"),(0,a.kt)("td",null,"never configured")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Result"),(0,a.kt)("td",{colspan:"3"},"All USDT perpetual trading pairs are one-way mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Change 1")),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Set BTCUSDT to hedge-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Result"),(0,a.kt)("td",{colspan:"3"},"BTCUSDT becomes hedge-mode, and all other symbols keep one-way mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"list new symbol ETHUSDT"),(0,a.kt)("td",{colspan:"3"},"ETHUSDT is one-way mode \uff08inherit default rules\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Change 2")),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Set USDT to hedge-mode"),(0,a.kt)("td",null,"-")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Result"),(0,a.kt)("td",{colspan:"3"},"All current trading pairs with no positions or orders are hedge-mode, and no adjustments will be made for trading pairs with positions and orders")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"list new symbol SOLUSDT"),(0,a.kt)("td",{colspan:"3"},"SOLUSDT is hedge-mode (Inherit coin rule)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Change 3")),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Set ASXUSDT to one-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Take effect result"),(0,a.kt)("td",{colspan:"3"},"AXSUSDT is one-way mode, other trading pairs have no change")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"list new symbol BITUSDT"),(0,a.kt)("td",{colspan:"3"},"BITUSDT is hedge-mode (Inherit coin rule)"))),(0,a.kt)("h3",{id:"the-position-switch-ability-for-each-contract"},"The position-switch ability for each contract"),(0,a.kt)("table",{class:"custom_table"},(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"Regular account"),(0,a.kt)("th",null,"Unified margin account")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"USDT perpetual"),(0,a.kt)("td",null,(0,a.kt)("b",null,"Support one-way & hedge-mode")),(0,a.kt)("td",null,"Support one-way **only**")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"USDC perpetual"),(0,a.kt)("td",null,"Support one-way **only**"),(0,a.kt)("td",null,"Support one-way **only**")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Inverse perpetual"),(0,a.kt)("td",null,"Support one-way **only**"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Inverse future "),(0,a.kt)("td",null,(0,a.kt)("b",null,"Support one-way & hedge-mode")),(0,a.kt)("td",null,"N/A"))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/switch-mode")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name. Either ",(0,a.kt)("inlineCode",{parentName:"td"},"symbol")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"coin")," is ",(0,a.kt)("strong",{parentName:"td"},"required"),". ",(0,a.kt)("inlineCode",{parentName:"td"},"symbol")," has a higher priority")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Coin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#positionmode"},"mode")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Position mode. ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),": Merged Single. ",(0,a.kt)("inlineCode",{parentName:"td"},"3"),": Both Side")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Success/Error code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Success/Error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"result"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"time"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/position/switch-mode HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670848915553\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol":"CHZUSDT",\n    "coin": null,\n    "mode": 0\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1670848915768\n}\n')))}u.isMDXComponent=!0}}]);