"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[93546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(n),N=a,c=d["".concat(o,".").concat(N)]||d[N]||k[N]||i;return n?l.createElement(c,r(r({ref:t},m),{},{components:n})):l.createElement(c,r({ref:t},m))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const i={title:"\u679a\u8209\u5b9a\u7fa9",sidebar_label:"\u679a\u8209\u5b9a\u7fa9",slug:"/spot/enum"},r=void 0,p={unversionedId:"v3/spot/enum",id:"v3/spot/enum",title:"\u679a\u8209\u5b9a\u7fa9",description:"side",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/enum.mdx",sourceDirName:"v3/spot",slug:"/spot/enum",permalink:"/docs/zh-TW/spot/enum",draft:!1,tags:[],version:"current",frontMatter:{title:"\u679a\u8209\u5b9a\u7fa9",sidebar_label:"\u679a\u8209\u5b9a\u7fa9",slug:"/spot/enum"}},o={},u=[{value:"side",id:"side",level:3},{value:"timeInForce",id:"timeinforce",level:3},{value:"symbol",id:"symbol",level:3},{value:"orderType",id:"ordertype",level:3},{value:"currency/coin",id:"currencycoin",level:3},{value:"orderStatus",id:"orderstatus",level:3},{value:"interval",id:"interval",level:3},{value:"ltStatus",id:"ltstatus",level:3},{value:"ltOrderStatus",id:"ltorderstatus",level:3},{value:"ltOrderType",id:"ltordertype",level:3},{value:"smpType",id:"smptype",level:3}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"side"},"side"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BUY"),"\u2003","\u8cb7"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SELL"),"\u2003","\u8ce3")),(0,a.kt)("h3",{id:"timeinforce"},"timeInForce"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GTC"),"\u2003","Good Till Cancel\uff0c\u4e00\u76f4\u6709\u6548\u81f3\u53d6\u6d88"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FOK"),"\u2003","Fill or Kill\uff0c\u5b8c\u5168\u6210\u4ea4\u6216\u53d6\u6d88"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IOC"),"\u2003","Immediate or Cancel\uff0c\u7acb\u5373\u6210\u4ea4\u6216\u53d6\u6d88")),(0,a.kt)("h3",{id:"symbol"},"symbol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BTCUSDT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ETHUSDT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BTCUSDC")),(0,a.kt)("li",{parentName:"ul"},"...",(0,a.kt)("br",null),"\n\u53ef\u4ee5\u901a\u904e",(0,a.kt)("a",{parentName:"li",href:"/spot/public/instrument"},"\u7372\u53d6\u4ea4\u6613\u5c0d\u898f\u683c"),"\u63a5\u53e3\uff0c\u7372\u53d6\u6240\u6709\u53ef\u7528\u7684\u4ea4\u6613\u5c0d")),(0,a.kt)("h3",{id:"ordertype"},"orderType"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MARKET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LIMIT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LIMIT_MAKER"),"\u2003","\u88ab\u52d5\u59d4\u8a17")),(0,a.kt)("h3",{id:"currencycoin"},"currency/coin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BTC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ETH")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USDT")),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5e63\u7a2e\u652f\u6301\u5168\u5009\u69d3\u687f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BTC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ETH")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XRP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LTC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LINK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XLM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USDC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USDT"),(0,a.kt)("br",null),"\n\u60a8\u53ef\u4ee5\u901a\u904e\u9019\u500b",(0,a.kt)("a",{href:"https://www.bybit.com/en-US/trade/spot/leverage/vip"},"\u7db2\u5740"),"\u7372\u5f97\u6240\u6709\u5168\u5009\u69d3\u687f\u652f\u6301\u7684\u5e63\u7a2e.")),(0,a.kt)("h3",{id:"orderstatus"},"orderStatus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEW"),"\u2003","\u666e\u901a\u55ae\u88ab\u4e0b\u9054"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ORDER_NEW"),"\u2003","\u6b62\u76c8\u6b62\u640d\u55ae\u88ab\u4e0b\u9054"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PARTIALLY_FILLED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FILLED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ORDER_FILLED"),"\u2003","\u6b62\u76c8\u6b62\u640d\u55ae\u6210\u4ea4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CANCELED"),"\u2003","\u666e\u901a\u55ae\u88ab\u53d6\u6d88"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ORDER_CANCELED"),"\u2003","\u6b62\u76c8\u6b62\u640d\u55ae\u88ab\u53d6\u6d88"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REJECTED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ORDER_REJECTED"),"\u2003","\u6b62\u76c8\u6b62\u640d\u55ae\u88ab\u62d2\u7d55"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PARTIALLY_FILLED_CANCELED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ORDER_FAILED"),"\u2003","\u6b62\u76c8\u6b62\u640d\u55ae\u5931\u6557")),(0,a.kt)("h3",{id:"interval"},"interval"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1m"),"\u2003","1 \u5206\u9418"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3m"),"\u2003","3 \u5206\u9418"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"5m"),"\u2003","5 \u5206\u9418"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"15m"),"\u2003","15 \u5206\u9418"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"30m"),"\u2003","30 \u5206\u9418"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1h"),"\u2003","1 \u5c0f\u6642"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2h"),"\u2003","2 \u5c0f\u6642"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4h"),"\u2003","4 \u5c0f\u6642"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6h"),"\u2003","6 \u5c0f\u6642"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"12h"),"\u2003","12 \u5c0f\u6642"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1d"),"\u2003","1 \u5929"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1w"),"\u2003","1 \u5468"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1M"),"\u2003","1 \u6708")),(0,a.kt)("h3",{id:"ltstatus"},"ltStatus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","\u69d3\u687f\u4ee3\u5e63\u652f\u6301\u7533\u8d16"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","\u69d3\u687f\u4ee3\u5e63\u652f\u6301\u7533\u8cfc\uff0c\u4f46\u7121\u6cd5\u8d16\u56de"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","\u69d3\u687f\u4ee3\u5e63\u652f\u6301\u8d16\u56de\uff0c\u4f46\u662f\u7121\u6cd5\u7533\u8cfc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4"),"\u2003","\u69d3\u687f\u4ee3\u5e63\u7121\u6cd5\u7533\u8d16")),(0,a.kt)("h3",{id:"ltorderstatus"},"ltOrderStatus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","\u5b8c\u6210"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","\u9032\u884c\u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","\u5931\u6557")),(0,a.kt)("h3",{id:"ltordertype"},"ltOrderType"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","\u7533\u8cfc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","\u8d16\u56de")),(0,a.kt)("h3",{id:"smptype"},"smpType"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8a8d: ",(0,a.kt)("inlineCode",{parentName:"li"},"None")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CancelMaker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CancelTaker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CancelBoth"))))}k.isMDXComponent=!0}}]);