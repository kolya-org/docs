"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[94319],{69452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(87462),a=(r(67294),r(3905)),s=r(26389),d=(r(94891),r(74933)),n=(r(47507),r(24310),r(63303),r(75035),r(85162));const o={id:"order-list",title:"Get Order History (2 years)",description:"Get order history.",sidebar_label:"Get Order History (2 years)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Get order history.",operationId:"order-list",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","inverse","option","spot"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"orderStatus",in:"query",description:"Order status",required:!1,schema:{type:"string",enum:["Created","New","Rejected","PartiallyFilled","PartillyFilledCancelled","Filled","PendingCancel","Cancelled","Untriggered","Triggered","Deactivated","Active"]}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder","tpslOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/order/history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Get Order History (2 years)",description:{content:"Get order history.",type:"text/plain"},url:{path:["v5","order","history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Order status",type:"text/plain"},key:"orderStatus",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},p=void 0,l={unversionedId:"api-explorer/v5/trade/order-list",id:"api-explorer/v5/trade/order-list",title:"Get Order History (2 years)",description:"Get order history.",source:"@site/docs/api-explorer/v5/trade/order-list.api.mdx",sourceDirName:"api-explorer/v5/trade",slug:"/api-explorer/v5/trade/order-list",permalink:"/docs/zh-TW/api-explorer/v5/trade/order-list",draft:!1,tags:[],version:"current",frontMatter:{id:"order-list",title:"Get Order History (2 years)",description:"Get order history.",sidebar_label:"Get Order History (2 years)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Get order history.",operationId:"order-list",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","inverse","option","spot"]}},{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"orderId",in:"query",required:!1,schema:{type:"string"}},{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"orderStatus",in:"query",description:"Order status",required:!1,schema:{type:"string",enum:["Created","New","Rejected","PartiallyFilled","PartillyFilledCancelled","Filled","PendingCancel","Cancelled","Untriggered","Triggered","Deactivated","Active"]}},{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder","tpslOrder"]}},{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/order/history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Get Order History (2 years)",description:{content:"Get order history.",type:"text/plain"},url:{path:["v5","order","history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,key:"orderId",value:""},{disabled:!1,description:{content:"User customised order id",type:"text/plain"},key:"orderLinkId",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Order status",type:"text/plain"},key:"orderStatus",value:""},{disabled:!1,description:{content:"Order filter",type:"text/plain"},key:"orderFilter",value:""},{disabled:!1,description:{content:"1-50. max 50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor to pagnition",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Cancel All Orders",permalink:"/docs/zh-TW/api-explorer/v5/trade/cancel-all"},next:{title:"Batch Place Order",permalink:"/docs/zh-TW/api-explorer/v5/trade/batch-place"}},m={},c=[{value:"Get Order History (2 years)",id:"get-order-history-2-years",level:2}],y={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-order-history-2-years"},"Get Order History (2 years)"),(0,a.kt)("p",null,"Get order history."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"string",enum:["linear","inverse","option","spot"]}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderId",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderLinkId",in:"query",description:"User customised order id",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderStatus",in:"query",description:"Order status",required:!1,schema:{type:"string",enum:["Created","New","Rejected","PartiallyFilled","PartillyFilledCancelled","Filled","PendingCancel","Cancelled","Untriggered","Triggered","Deactivated","Active"]}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"orderFilter",in:"query",description:"Order filter",required:!1,schema:{type:"string",enum:["Order","StopOrder","tpslOrder"]}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-50. max 50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor to pagnition",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}u.isMDXComponent=!0}}]);