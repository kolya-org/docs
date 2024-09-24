"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[82946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_label:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_position:11},o=void 0,l={unversionedId:"v5/order/dcp",id:"v5/order/dcp",title:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",description:"\u4ec0\u9ebc\u662f\u65b7\u7dda\u4fdd\u8b77 (Disconnection Protect)?",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/order/dcp.mdx",sourceDirName:"v5/order",slug:"/v5/order/dcp",permalink:"/docs/zh-TW/v5/order/dcp",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_label:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_position:11},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62\u7528\u6236\u53ef\u7528\u984d\u5ea6 (\u73fe\u8ca8)",permalink:"/docs/zh-TW/v5/order/spot-borrow-quota"},next:{title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",permalink:"/docs/zh-TW/v5/position/"}},p={},c=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=d("Tabs"),m=d("TabItem"),u={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h2",{parentName:"admonition",id:"\u4ec0\u9ebc\u662f\u65b7\u7dda\u4fdd\u8b77-disconnection-protect"},"\u4ec0\u9ebc\u662f\u65b7\u7dda\u4fdd\u8b77 (Disconnection Protect)?"),(0,a.kt)("p",{parentName:"admonition"},"Bybit\u57fa\u65bcwebsocket\u79c1\u6709\u9023\u63a5\u548c\u5fc3\u8df3\u6a5f\u5236\uff0c\u63d0\u4f9b\u65b7\u7dda\u4fdd\u8b77\u529f\u80fd\u3002\u9019\u8a08\u6642\u5f9e\u7b2c\u4e00\u6b21\u65b7\u958b\u958b\u59cb\u3002\u5982\u679cBybit\u670d\u52d9\u5668\u5728\u4e00\u6bb5\u6642\u9593\u5167\u6c92\u6709\u6536\u5230\u5ba2\u6236\u7aef\u7684\u91cd\u9023\u8d85\u904e10\u79d2\uff08\u9ed8\u8a8d\uff09\u4e26\n\u6062\u5fa9\u5fc3\u8df3\u201cping\u201d\uff0c\u5247\u5ba2\u6236\u7aef\u8655\u65bc\u201c\u65b7\u7dda\u4fdd\u8b77\u201d\u72c0\u614b\uff0c\u5ba2\u6236\u6240\u6709\u6d3b\u8e8d\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5408\u7d04 / \u73fe\u8ca8 / \u671f\u6b0a"),"\u8a02\u55ae\u5c07\u81ea\u52d5\u53d6\u6d88\u3002\u5982\u679c\u5728 10 \u79d2\u5167\uff0c\u5ba2\u6236\u7aef\u91cd\u65b0\u9023\u63a5\u4e26\u6062\u5fa9\u5fc3\u8df3\u201cping\u201d\uff0c\u8a08\u6642\u6703\u5728\u4e0b\u6b21\u65b7\u7dda\n\u6642\u91cd\u7f6e\u4e26\u91cd\u65b0\u958b\u59cb\u3002"),(0,a.kt)("h2",{parentName:"admonition",id:"\u5982\u4f55\u555f\u7528\u65b7\u7dda\u4fdd\u8b77"},"\u5982\u4f55\u555f\u7528\u65b7\u7dda\u4fdd\u8b77"),(0,a.kt)("p",{parentName:"admonition"},"\u82e5\u60a8\u9700\u8981\u958b\u555f/\u95dc\u9589\u65b7\u7dda\u4fdd\u8b77\u529f\u80fd, \u60a8\u53ef\u4ee5\u8aee\u8a62\u5ba2\u6236\u7d93\u7406. \u958b\u555f\u5f8c\uff0c\u9ed8\u8a8d\u7684\u65b7\u7dda\u4fdd\u8b77\u6642\u9593\u70ba10\u79d2\u3002"),(0,a.kt)("h2",{parentName:"admonition",id:"\u9069\u7528\u5c0d\u8c61"},"\u9069\u7528\u5c0d\u8c61"),(0,a.kt)("p",{parentName:"admonition"},"\u4f5c\u7528\u65bc",(0,a.kt)("strong",{parentName:"p"},"\u53cd\u5411\u6c38\u7e8c / \u53cd\u5411\u4ea4\u5272 / USDT \u6c38\u7e8c / USDC \u6c38\u7e8c / USDC \u4ea4\u5272 / \u73fe\u8ca8 / \u671f\u6b0a")," (",(0,a.kt)("a",{parentName:"p",href:"../acct-mode#%E7%B5%B1%E4%B8%80%E5%B8%B3%E6%88%B620"},"\u7d71\u4e00\u5e33\u62362.0"),")",(0,a.kt)("br",null),"\n\u4f5c\u7528\u65bc",(0,a.kt)("strong",{parentName:"p"},"USDT \u6c38\u7e8c / USDC \u6c38\u7e8c / USDC \u4ea4\u5272 / \u73fe\u8ca8 / \u671f\u6b0a")," (",(0,a.kt)("a",{parentName:"p",href:"../acct-mode#%E7%B5%B1%E4%B8%80%E5%B8%B3%E6%88%B610"},"\u7d71\u4e00\u5e33\u62361.0"),")")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"API\u8acb\u6c42\u767c\u9001\u6210\u529f\u5f8c\uff0c\u7cfb\u7d71\u9700\u8981\u4e00\u5b9a\u7684\u6642\u9593\u624d\u80fd\u751f\u6548\u3002\u5efa\u8b7010\u79d2\u5f8c\u518d\u67e5\u8a62\u6216\u8a2d\u7f6e\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u4f7f\u7528\u8a72",(0,a.kt)("a",{parentName:"li",href:"/v5/account/account-info"},"\u63a5\u53e3"),"\u4f86\u67e5\u8a62\u7576\u524dDCP\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u7684\u79c1\u6709\u9023\u63a5",(0,a.kt)("strong",{parentName:"li"},"\u5fc5\u9808"),"\u8a02\u95b1",(0,a.kt)("a",{parentName:"li",href:"../websocket/private/dcp"},"\u65b7\u7dda\u4fdd\u8b77"),", \u624d\u80fd\u78ba\u4fddDCP\u529f\u80fd\u88ab\u89f8\u767c")),(0,a.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/order/disconnected-cancel-all")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"product"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"OPTIONS"),"(\u9ed8\u8a8d), ",(0,a.kt)("inlineCode",{parentName:"td"},"DERIVATIVES"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SPOT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"timeWindow"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65b7\u7dda\u4fdd\u8b77\u6642\u9593\u7a97\u53e3. ","[",(0,a.kt)("inlineCode",{parentName:"td"},"3"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"300"),"]",", \u55ae\u4f4d: \u79d2")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(s,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(m,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST v5/order/disconnected-cancel-all HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1675852742375\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\n\n{\n  "timeWindow": 40\n}\n'))),(0,a.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.set_dcp(\n    timeWindow=40,\n))\n'))),(0,a.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.bybit.api.client.config.BybitApiConfig;\nimport com.bybit.api.client.domain.trade.request.TradeOrderRequest;\nimport com.bybit.api.client.domain.*;\nimport com.bybit.api.client.domain.trade.*;\nimport com.bybit.api.client.service.BybitApiClientFactory;\nvar client = BybitApiClientFactory.newInstance("YOUR_API_KEY", "YOUR_API_SECRET", BybitApiConfig.TESTNET_DOMAIN).newTradeRestClient();\nvar setDcpOptionsRequest = TradeOrderRequest.builder().timeWindow(40).build();\nSystem.out.println(client.setDisconnectCancelAllTime(setDcpOptionsRequest));\n'))),(0,a.kt)(m,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n    testnet: true,\n    key: 'apikey',\n    secret: 'apisecret',\n});\n\nclient\n    .setDisconnectCancelAllWindow('option', 40)\n    .then((response) => {\n        console.log(response);\n    })\n    .catch((error) => {\n        console.error(error);\n    });\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success"\n}\n')))}k.isMDXComponent=!0}}]);