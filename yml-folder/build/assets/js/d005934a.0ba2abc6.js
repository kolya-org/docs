"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[56979],{94465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>m,metadata:()=>d,toc:()=>c});var i=r(87462),n=(r(67294),r(3905)),a=r(26389),s=(r(94891),r(74933)),p=(r(47507),r(24310),r(63303),r(75035),r(85162));const m={id:"open-interest",title:"Get Open Interest",description:"Get open interest",sidebar_label:"Get Open Interest",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get open interest",operationId:"open-interest",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"intervalTime",in:"query",description:"interval time",required:!0,schema:{type:"array",items:{type:"string",enum:["5min","15min","30min","1h","4h","1d"]}}},{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:'pass cursor from the response param "nagePageCursor" to paginate',required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/open-interest",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Open Interest",description:{content:"Get open interest",type:"text/plain"},url:{path:["v5","market","open-interest"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) interval time",type:"text/plain"},key:"intervalTime",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:'pass cursor from the response param "nagePageCursor" to paginate',type:"text/plain"},key:"cursor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},o=void 0,d={unversionedId:"api-explorer/v5/market/open-interest",id:"api-explorer/v5/market/open-interest",title:"Get Open Interest",description:"Get open interest",source:"@site/docs/api-explorer/v5/market/open-interest.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/open-interest",permalink:"/docs/api-explorer/v5/market/open-interest",draft:!1,tags:[],version:"current",frontMatter:{id:"open-interest",title:"Get Open Interest",description:"Get open interest",sidebar_label:"Get Open Interest",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get open interest",operationId:"open-interest",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"intervalTime",in:"query",description:"interval time",required:!0,schema:{type:"array",items:{type:"string",enum:["5min","15min","30min","1h","4h","1d"]}}},{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:'pass cursor from the response param "nagePageCursor" to paginate',required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/open-interest",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Open Interest",description:{content:"Get open interest",type:"text/plain"},url:{path:["v5","market","open-interest"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) interval time",type:"text/plain"},key:"intervalTime",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:'pass cursor from the response param "nagePageCursor" to paginate',type:"text/plain"},key:"cursor",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Public Recent Trading History",permalink:"/docs/api-explorer/v5/market/recent-trade"},next:{title:"Get Historical Volatility",permalink:"/docs/api-explorer/v5/market/iv"}},l={},c=[{value:"Get Open Interest",id:"get-open-interest",level:2}],u={toc:c};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-open-interest"},"Get Open Interest"),(0,n.kt)("p",null,"Get open interest"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"intervalTime",in:"query",description:"interval time",required:!0,schema:{type:"array",items:{type:"string",enum:["5min","15min","30min","1h","4h","1d"]}}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:50}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:'pass cursor from the response param "nagePageCursor" to paginate',required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);