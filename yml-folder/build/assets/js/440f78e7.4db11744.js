"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[24804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,b=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Liquidation",sidebar_label:"Liquidation",sidebar_position:5},l=void 0,o={unversionedId:"v5/websocket/public/liquidation",id:"v5/websocket/public/liquidation",title:"Liquidation",description:"Subscribe to the liquidation stream. Pushes at most one order per second per symbol. As such, this feed does not push all liquidations that occur on Bybit.",source:"@site/docs/v5/websocket/public/liquidation.mdx",sourceDirName:"v5/websocket/public",slug:"/v5/websocket/public/liquidation",permalink:"/docs/v5/websocket/public/liquidation",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Liquidation",sidebar_label:"Liquidation",sidebar_position:5},sidebar:"v5SideBar",previous:{title:"Kline",permalink:"/docs/v5/websocket/public/kline"},next:{title:"LT Kline",permalink:"/docs/v5/websocket/public/etp-kline"}},p={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe to the liquidation stream. Pushes at most one order per second per symbol. As such, this feed does not push all liquidations that occur on Bybit."),(0,r.kt)("p",null,"Push frequency: ",(0,r.kt)("strong",{parentName:"p"},"1s")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"liquidation.{symbol}")," e.g., liquidation.BTCUSDT"),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Data type. ",(0,r.kt)("inlineCode",{parentName:"td"},"snapshot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that the system generates the data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> updateTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The updated timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position side. ",(0,r.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Sell"),". When you receive a ",(0,r.kt)("inlineCode",{parentName:"td"},"Buy")," update, this means that a long position has been liquidated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Executed size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.bybit.com/en-US/help-center/s/article/Bankruptcy-Price-USDT-Contract"},"Bankruptcy price"))))),(0,r.kt)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import WebSocket\nfrom time import sleep\nws = WebSocket(\n    testnet=True,\n    channel_type="linear",\n)\ndef handle_message(message):\n    print(message)\nws.liquidation_stream(\n    symbol="BTCUSDT",\n    callback=handle_message\n)\nwhile True:\n    sleep(1)\n')),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "liquidation.BTCUSDT",\n    "type": "snapshot",\n    "ts": 1703485237953,\n    "data": {\n        "updatedTime": 1703485237953,\n        "symbol": "BTCUSDT",\n        "side": "Sell",\n        "size": "0.003",\n        "price": "43511.70"\n    }\n}\n')))}u.isMDXComponent=!0}}]);