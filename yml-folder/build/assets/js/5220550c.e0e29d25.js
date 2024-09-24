"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[15669],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>p});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(d,".").concat(p)]||u[p]||k[p]||l;return n?r.createElement(m,i(i({ref:e},s),{},{components:n})):r.createElement(m,i({ref:e},s))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4688:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Demo Trading Service",sidebar_label:"Demo Trading Service"},i=void 0,o={unversionedId:"v5/demo",id:"v5/demo",title:"Demo Trading Service",description:"Introduction",source:"@site/docs/v5/demo.mdx",sourceDirName:"v5",slug:"/v5/demo",permalink:"/docs/v5/demo",draft:!1,tags:[],version:"current",frontMatter:{title:"Demo Trading Service",sidebar_label:"Demo Trading Service"},sidebar:"v5SideBar",previous:{title:"How To Start Copy Trading",permalink:"/docs/v5/copytrade"},next:{title:"Get Bybit Server Time",permalink:"/docs/v5/market/time"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Create API Key",id:"create-api-key",level:2},{value:"Usage rules",id:"usage-rules",level:2},{value:"Domain",id:"domain",level:2},{value:"Tips",id:"tips",level:2},{value:"Available API List",id:"available-api-list",level:2},{value:"Request Demo Trading Funds",id:"request-demo-trading-funds",level:3},{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Request Example",id:"request-example",level:4}],s={toc:c};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Bybit v5 Open API supports demo trading account, but please note ",(0,a.kt)("strong",{parentName:"p"},"not")," every API is available for demo trading account because demo trading service is\nmainly for trading experience purpose, so that it does not have a complete function compared with the real trading service."),(0,a.kt)("h2",{id:"create-api-key"},"Create API Key"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You need to log in to your ",(0,a.kt)("a",{parentName:"li",href:"https://www.bybit.com/"},"mainnet")," account;"),(0,a.kt)("li",{parentName:"ol"},"Switch to ",(0,a.kt)("inlineCode",{parentName:"li"},"Demo Trading"),", please note it is an independent account for demo trading only, and it has its own user ID;"),(0,a.kt)("li",{parentName:"ol"},'Hover the mouse on user avatar, then click "API" to generate api key and secret;')),(0,a.kt)("h2",{id:"usage-rules"},"Usage rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic trading rules are the same as real trading"),(0,a.kt)("li",{parentName:"ul"},"Orders generated in demo trading keep ",(0,a.kt)("strong",{parentName:"li"},"7 days")),(0,a.kt)("li",{parentName:"ul"},"Default rate limit, not upgradable")),(0,a.kt)("h2",{id:"domain"},"Domain"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mainnet Demo Trading URL:"),(0,a.kt)("br",null),"\nRest API: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-demo.bybit.com"),(0,a.kt)("br",null),"\nWebsocket: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-demo.bybit.com")," (note that this only supports the private streams; public data is identical to that found on mainnet with ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream.bybit.com"),"; WS Trade is not supported)"),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please note that demo trading is an isolated module. When you create the key from demo trading, please use above domain to connect."),(0,a.kt)("li",{parentName:"ul"},"By the way, it is meaningless to use demo trading service in the ",(0,a.kt)("a",{parentName:"li",href:"https://testnet.bybit.com"},"testnet")," website, so do not create a key from Testnet demo trading.")),(0,a.kt)("h2",{id:"available-api-list"},"Available API List"),(0,a.kt)("span",{class:"blocky_table"},(0,a.kt)("table",{border:"0.8"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"Cateogory"),(0,a.kt)("th",null,"Title"),(0,a.kt)("th",null,"Endpoint")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Market"),(0,a.kt)("td",{align:"center"},"All"),(0,a.kt)("td",{align:"center"},"all endpoints")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"10"},"Trade"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/create-order"},"Place Order")),(0,a.kt)("td",{align:"center"},"/v5/order/create")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/amend-order"},"Amend Order")),(0,a.kt)("td",{align:"center"},"/v5/order/amend")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/cancel-order"},"Cancel order")),(0,a.kt)("td",{align:"center"},"/v5/order/cancel")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/open-order"},"Get Open Orders")),(0,a.kt)("td",{align:"center"},"/v5/order/realtime")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/cancel-all"},"Cancel All Orders")),(0,a.kt)("td",{align:"center"},"/v5/order/cancel-all")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/order-list"},"Get Order History")),(0,a.kt)("td",{align:"center"},"/v5/order/history")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/execution"},"Get Trade History")),(0,a.kt)("td",{align:"center"},"/v5/execution/list")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/batch-place"},"Batch Place Order")),(0,a.kt)("td",{align:"center"},"/v5/order/create-batch (linear,option)")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/batch-amend"},"Batch Amend Order")),(0,a.kt)("td",{align:"center"},"/v5/order/amend-batch (linear,option)")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/batch-cancel"},"Batch Cancel Order")),(0,a.kt)("td",{align:"center"},"/v5/order/cancel-batch (linear,option)")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"7"},"Position"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position"},"Get Position Info")),(0,a.kt)("td",{align:"center"},"/v5/position/list")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/leverage"},"Set Leverage")),(0,a.kt)("td",{align:"center"},"/v5/position/set-leverage")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/position-mode"},"Switch Position Mode")),(0,a.kt)("td",{align:"center"},"/v5/position/switch-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/trading-stop"},"Set Trading Stop")),(0,a.kt)("td",{align:"center"},"/v5/position/trading-stop")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/auto-add-margin"},"Set Auto Add Margin")),(0,a.kt)("td",{align:"center"},"/v5/position/set-auto-add-margin")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/manual-add-margin"},"Add Or Reduce Margin")),(0,a.kt)("td",{align:"center"},"/v5/position/add-margin")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/close-pnl"},"Get Closed PnL")),(0,a.kt)("td",{align:"center"},"/v5/position/closed-pnl")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"9"},"Account"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/wallet-balance"},"Get Wallet Balance")),(0,a.kt)("td",{align:"center"},"/v5/account/wallet-balance")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/borrow-history"},"Get Borrow History")),(0,a.kt)("td",{align:"center"},"/v5/account/borrow-history")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/set-collateral"},"Set Collateral Coin")),(0,a.kt)("td",{align:"center"},"/v5/account/set-collateral-switch")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/collateral-info"},"Get Collateral Info")),(0,a.kt)("td",{align:"center"},"/v5/account/collateral-info")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/coin-greeks"},"Get Coin Greeks")),(0,a.kt)("td",{align:"center"},"/v5/asset/coin-greeks")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/account-info"},"Get Account Info")),(0,a.kt)("td",{align:"center"},"/v5/account/info")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/transaction-log"},"Get Transaction Log")),(0,a.kt)("td",{align:"center"},"/v5/account/transaction-log")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/set-margin-mode"},"Set Margin Mode")),(0,a.kt)("td",{align:"center"},"/v5/account/set-margin-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/set-spot-hedge"},"Set Spot Hedging")),(0,a.kt)("td",{align:"center"},"/v5/account/set-hedging-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"Asset"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/asset/delivery"},"Get Delivery Record")),(0,a.kt)("td",{align:"center"},"/v5/asset/delivery-record")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/asset/settlement"},"Get USDC Session Settlement")),(0,a.kt)("td",{align:"center"},"/v5/asset/settlement-record")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"3"},"Spot Margin Trade"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/spot-margin-uta/switch-mode"},"Toggle Margin Trade")),(0,a.kt)("td",{align:"center"},"/v5/spot-margin-trade/switch-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/spot-margin-uta/set-leverage"},"Set Leverage")),(0,a.kt)("td",{align:"center"},"/v5/spot-margin-trade/set-leverage")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/spot-margin-uta/status"},"Get Status And Leverage")),(0,a.kt)("td",{align:"center"},"/v5/spot-margin-uta/status")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/v5/websocket/private/position"},"WS Private")),(0,a.kt)("td",{align:"center"},"order,execution,position,wallet,greeks"),(0,a.kt)("td",{align:"center"},"/v5/private")))),(0,a.kt)("h3",{id:"request-demo-trading-funds"},"Request Demo Trading Funds"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API rate limit: 1 req per minute")),(0,a.kt)("h4",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/account/demo-apply-money")),(0,a.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"adjustType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0"),"(default): add demo funds; ",(0,a.kt)("inlineCode",{parentName:"td"},"1"),": reduce demo funds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"utaDemoApplyMoney"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Applied coin, supports ",(0,a.kt)("inlineCode",{parentName:"td"},"BTC"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ETH"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"USDT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"USDC"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> amountStr"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Applied amount, the max applied amount in each request ",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"BTC"),': "15"'),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ETH"),': "200"'),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"USDT"),': "100000"'),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"USDC"),': "100000"'))))),(0,a.kt)("h4",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/account/demo-apply-money HTTP/1.1\nHost: api-demo.bybit.com\nX-BAPI-SIGN: XXXXXXX\nX-BAPI-API-KEY: XXXXXXX\nX-BAPI-TIMESTAMP: 1711420489915\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "adjustType": 0,\n    "utaDemoApplyMoney": [\n        {\n            "coin": "USDT",\n            "amountStr": "109"\n        },\n        {\n            "coin": "ETH",\n            "amountStr": "1"\n        }\n    ]\n}\n')))}k.isMDXComponent=!0}}]);