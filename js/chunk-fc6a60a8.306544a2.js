(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc6a60a8"],{"24a1":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"multi-manager-container"},[t("div",{staticClass:"title-container"},[t("h3",[e._v(e._s(e.$t("ens.ens-manager.title")))]),t("p",[e._v(e._s(e.$t("ens.ens-manager.description")))])]),e.loading?t("div",[t("i",{attrs:{clas:"fa fa-spinner fa-spin"}}),e._v(" "+e._s(e.$t("ens.fetching"))+" ")]):0!==e.names.length||e.loading?t("div",{staticClass:"name-container"},e._l(e.names,(function(n){return t("div",{key:n["name"],staticClass:"information-container"},[t("p",{staticClass:"name-container"},[e._v(" "+e._s(n.name)+"."+e._s(e.network.type.ens.registrarTLD)+" ")]),t("p",[e._v(e._s(n.expiration))]),t("button",{directives:[{name:"show",rawName:"v-show",value:0!==n.name.indexOf("0x"),expression:"name.name.indexOf('0x') !== 0"}],class:["action-button",n.gracePeriod&&!n.expired?"renew-class":n.expired&&!n.gracePeriod?"expired-class":""],on:{click:function(t){return e.methodCall(n.name+"."+e.network.type.ens.registrarTLD,n)}}},[e._v(" "+e._s(n.gracePeriod&&!n.expired?e.$t("ens.renew"):n.expired&&!n.gracePeriod?e.$t("ens.expired"):e.$t("ens.manage"))+" ")])])})),0):t("div",{staticClass:"no-ens-container"},[e._v(" "+e._s(e.$t("ens.no-names-found",{address:e.account.address}))+" ")])])},i=[],r=(t("99af"),t("4160"),t("caad"),t("d81d"),t("fb6a"),t("d3b7"),t("159b"),t("5530")),s=t("b7d3"),o=t("2f62"),c=t("ce96"),d=t("2e13"),u="0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",l="0x78e21d038fcbb6d56f825dc1e8d8acd965744adb",p={props:{renewName:{type:Function,default:function(){}},checkDomain:{type:Function,default:function(){}}},data:function(){return{names:[],loading:!0}},computed:Object(r["a"])({},Object(o["c"])("main",["account","network","web3"])),mounted:function(){this.loading=!0;var e=fetch("https://nft2.mewapi.io/tokens?owner=".concat(this.account.address,"&chain=mainnet")).then((function(e){return e.json()}));e.then(this.setExpiry)},methods:{setExpiry:function(e){var n=this,t=e.hasOwnProperty(u)?e[u].tokens:[];if(t.length>0){var a=t.map((function(e){return e.id})),i=new this.web3.eth.Contract(d["a"],l),r=i.methods.getExpirationDates(u,a).call().then((function(e){return e})).catch((function(){c["e"].responseHandler(n.$t("ens.error.something-went-wrong"),c["e"].ERROR)}));r.then((function(e){if(e){e.forEach((function(e,n){var a=1e3*e,i=new Date(a);i.setDate(i.getDate()+90);var r=a<(new Date).getTime(),s=i.getTime()<(new Date).getTime(),o=new Date(a);t[n].gracePeriod=r,t[n].expired=s,t[n].expireDateValue=o,t[n].expiration="".concat(o.toLocaleDateString()," ").concat(o.toLocaleTimeString())}));var a=t.slice().sort((function(e,n){return e.expireDateValue-n.expireDateValue}));n.names=a,n.loading=!1}}))}else this.loading=!1},methodCall:function(e,n){n.gracePeriod&&!n.expired?this.checkDomain(e,!0):this.checkDomain(e,!1)},showBlockie:function(e){return!("controller"!==e&&"registrant"!==e&&"resolver"!==e)},shouldHide:function(e,n){var t=["name","id","description","image","expired"];return!t.includes(e)&&("controller"!==e||!n["expired"])},isAddress:s["a"]}},f=p,m=(t("3ece"),t("2877")),h=Object(m["a"])(f,a,i,!1,null,"3af22488",null),g=h.exports},"2e13":function(e,n,t){"use strict";var a=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{internalType:"address",name:"ensAdd",type:"address"},{internalType:"uint256[]",name:"labelHases",type:"uint256[]"}],name:"getExpirationDates",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"}];n["a"]=a},"32d2":function(e,n,t){},"3ece":function(e,n,t){"use strict";var a=t("32d2"),i=t.n(a);i.a}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-fc6a60a8.306544a2.js.map