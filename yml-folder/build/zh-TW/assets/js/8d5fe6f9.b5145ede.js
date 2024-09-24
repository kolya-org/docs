"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[61304],{95474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var i=a(87462),r=(a(67294),a(3905)),n=a(26389),o=(a(94891),a(74933)),s=(a(47507),a(24310),a(63303),a(75035),a(85162));const p={id:"fee-rate",title:"Get Fee Rate",description:"Get fee rate",sidebar_label:"Get Fee Rate",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get fee rate",operationId:"fee-rate",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type. working for spot and option",required:!0,schema:{type:"string",enum:["spot","linear","inverse","option"]}},{name:"symbol",in:"query",description:"Symbol name. valid for linear,inverse and spot",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Valid for option",required:!1,schema:{type:"string",enum:["SOL","BTC","ETH"]}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/fee-rate",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Fee Rate",description:{content:"Get fee rate",type:"text/plain"},url:{path:["v5","account","fee-rate"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type. working for spot and option",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name. valid for linear,inverse and spot",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Valid for option",type:"text/plain"},key:"baseCoin",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},d=void 0,c={unversionedId:"api-explorer/v5/account/fee-rate",id:"api-explorer/v5/account/fee-rate",title:"Get Fee Rate",description:"Get fee rate",source:"@site/docs/api-explorer/v5/account/fee-rate.api.mdx",sourceDirName:"api-explorer/v5/account",slug:"/api-explorer/v5/account/fee-rate",permalink:"/docs/zh-TW/api-explorer/v5/account/fee-rate",draft:!1,tags:[],version:"current",frontMatter:{id:"fee-rate",title:"Get Fee Rate",description:"Get fee rate",sidebar_label:"Get Fee Rate",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get fee rate",operationId:"fee-rate",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"category",in:"query",description:"Product type. working for spot and option",required:!0,schema:{type:"string",enum:["spot","linear","inverse","option"]}},{name:"symbol",in:"query",description:"Symbol name. valid for linear,inverse and spot",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin. Valid for option",required:!1,schema:{type:"string",enum:["SOL","BTC","ETH"]}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/fee-rate",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Fee Rate",description:{content:"Get fee rate",type:"text/plain"},url:{path:["v5","account","fee-rate"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type. working for spot and option",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Symbol name. valid for linear,inverse and spot",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Base coin. Valid for option",type:"text/plain"},key:"baseCoin",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Coin Greeks",permalink:"/docs/zh-TW/api-explorer/v5/account/coin-greeks"},next:{title:"Get Account Info",permalink:"/docs/zh-TW/api-explorer/v5/account/account-info"}},l={},u=[{value:"Get Fee Rate",id:"get-fee-rate",level:2}],m={toc:u};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-fee-rate"},"Get Fee Rate"),(0,r.kt)("p",null,"Get fee rate"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type. working for spot and option",required:!0,schema:{type:"string",enum:["spot","linear","inverse","option"]}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name. valid for linear,inverse and spot",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin. Valid for option",required:!1,schema:{type:"string",enum:["SOL","BTC","ETH"]}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}y.isMDXComponent=!0}}]);