"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[69905],{29309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),r=a(26389),s=(a(94891),a(74933)),o=(a(47507),a(24310),a(63303),a(75035),a(85162));const c={id:"account-coin-balance",title:"Get Single Coin Balance",description:"Get Single Coin Balance",sidebar_label:"Get Single Coin Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get Single Coin Balance",operationId:"account-coin-balance",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"memberId",in:"query",description:"If query sub user balance, please input sub uid",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["SPOT","CONTRACT","UNIFIED","OPTION","INVESTMENT","FUND"]}},{name:"coin",in:"query",description:"Coin name",required:!0,schema:{type:"string"}},{name:"withBonus",in:"query",description:"Query bonus or not. 0=false, 1=true",required:!1,schema:{type:"integer",enum:[0,1],default:0}},{name:"withTransferSafeAmount",in:"query",description:"Whether query delay withdraw/transfer safe amount. 0\uff1afalse, 1\uff1btrue",required:!1,schema:{type:"integer",enum:[0,1],default:0}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-account-coin-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Single Coin Balance",description:{content:"Get Single Coin Balance",type:"text/plain"},url:{path:["v5","asset","transfer","query-account-coin-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"If query sub user balance, please input sub uid",type:"text/plain"},key:"memberId",value:""},{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"(Required) Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Query bonus or not. 0=false, 1=true",type:"text/plain"},key:"withBonus",value:""},{disabled:!1,description:{content:"Whether query delay withdraw/transfer safe amount. 0\uff1afalse, 1\uff1btrue",type:"text/plain"},key:"withTransferSafeAmount",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},l=void 0,p={unversionedId:"api-explorer/v5/asset/account-coin-balance",id:"api-explorer/v5/asset/account-coin-balance",title:"Get Single Coin Balance",description:"Get Single Coin Balance",source:"@site/docs/api-explorer/v5/asset/account-coin-balance.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/account-coin-balance",permalink:"/docs/api-explorer/v5/asset/account-coin-balance",draft:!1,tags:[],version:"current",frontMatter:{id:"account-coin-balance",title:"Get Single Coin Balance",description:"Get Single Coin Balance",sidebar_label:"Get Single Coin Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get Single Coin Balance",operationId:"account-coin-balance",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"memberId",in:"query",description:"If query sub user balance, please input sub uid",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["SPOT","CONTRACT","UNIFIED","OPTION","INVESTMENT","FUND"]}},{name:"coin",in:"query",description:"Coin name",required:!0,schema:{type:"string"}},{name:"withBonus",in:"query",description:"Query bonus or not. 0=false, 1=true",required:!1,schema:{type:"integer",enum:[0,1],default:0}},{name:"withTransferSafeAmount",in:"query",description:"Whether query delay withdraw/transfer safe amount. 0\uff1afalse, 1\uff1btrue",required:!1,schema:{type:"integer",enum:[0,1],default:0}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/transfer/query-account-coin-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Single Coin Balance",description:{content:"Get Single Coin Balance",type:"text/plain"},url:{path:["v5","asset","transfer","query-account-coin-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"If query sub user balance, please input sub uid",type:"text/plain"},key:"memberId",value:""},{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"(Required) Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Query bonus or not. 0=false, 1=true",type:"text/plain"},key:"withBonus",value:""},{disabled:!1,description:{content:"Whether query delay withdraw/transfer safe amount. 0\uff1afalse, 1\uff1btrue",type:"text/plain"},key:"withTransferSafeAmount",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get All Coins Balance",permalink:"/docs/api-explorer/v5/asset/all-balance"},next:{title:"Get Transferable Coin",permalink:"/docs/api-explorer/v5/asset/transferable-coin"}},u={},d=[{value:"Get Single Coin Balance",id:"get-single-coin-balance",level:2}],m={toc:d};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-single-coin-balance"},"Get Single Coin Balance"),(0,i.kt)("p",null,"Get Single Coin Balance"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"memberId",in:"query",description:"If query sub user balance, please input sub uid",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["SPOT","CONTRACT","UNIFIED","OPTION","INVESTMENT","FUND"]}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"withBonus",in:"query",description:"Query bonus or not. 0=false, 1=true",required:!1,schema:{type:"integer",enum:[0,1],default:0}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"withTransferSafeAmount",in:"query",description:"Whether query delay withdraw/transfer safe amount. 0\uff1afalse, 1\uff1btrue",required:!1,schema:{type:"integer",enum:[0,1],default:0}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);