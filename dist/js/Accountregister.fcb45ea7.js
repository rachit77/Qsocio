(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Accountregister"],{ece6:function(t,a,e){"use strict";e.r(a);var s=e("40dc"),c=e("8336"),o=e("b0af"),r=e("62ad"),n=e("ce7e"),l=e("0fd9"),i=e("2fa4"),u=function(){var t=this,a=t._self._c;return a("div",[a(s["a"],{attrs:{flat:"",dark:""}},[a(i["a"]),a("router-link",{attrs:{to:"/",custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:t}){return[a("img",{attrs:{role:"link",src:e("bdf2"),height:"30"},on:{click:t}})]}}])}),a(c["a"],{staticClass:"ml-5 text-capitalize font-weight-regular",attrs:{to:"/account/restore",text:"",dark:""}},[t._v(" Account ")]),a(c["a"],{staticClass:"ml-5 text-capitalize font-weight-regular",attrs:{to:"/transaction",text:"",dark:""}},[t._v(" Transaction ")]),a(c["a"],{staticClass:"ml-5 text-capitalize font-weight-regular",attrs:{to:"/account",text:"",dark:""}},[t._v(" Dashboard ")]),a(i["a"])],1),a(l["a"],[a(i["a"]),a(r["a"],{attrs:{cols:"12",xs:"12",sm:"5",md:"5",lg:"5",xl:"5"}},[a(o["a"],{staticClass:"pa-10 ma-10 grey lighten-4",attrs:{light:""}},[a("p",{staticClass:"text-center"},[a(c["a"],{staticClass:"text-capitalize blue--text mt-7",attrs:{width:"25vw",outlined:""},on:{click:function(a){return t.generateAccount()}}},[t._v("Generate Account")])],1),a(n["a"],{staticClass:"ma-10"}),a("h5",{staticClass:"text-center font-weight-regular mt-5"},[t._v("Already have an account? "),a(c["a"],{staticClass:"text-capitalize ml-3 font-weight-regular",attrs:{to:"/account/restore",outlined:""}},[t._v("Restore Account")])],1)],1),a("h4",{staticClass:"text-center font-weight-regular"},[t._v("Powered By Qsocial")])],1),a(i["a"])],1)],1)},d=[],m=(e("14d9"),e("c030")),g={data:()=>({}),methods:{generateAccount(){const t=m["a"].Wallet.createRandom();console.log("Mnemonic: "+t.mnemonic.phrase),console.log("Address: "+t.address),localStorage.setItem("address",t.address),localStorage.setItem("mnemonic",t.mnemonic.phrase);let a=JSON.parse(localStorage.getItem("accountList"))||[];a.push({address:t.address,mnemonic:t.mnemonic.phrase}),localStorage.setItem("accountList",JSON.stringify(a)),localStorage.setItem("SET_MYMNEMONIC_CONNECTED",!0),localStorage.setItem("SET_WALLET_NAME","myMnemonic"),this.$router.push("/account")}}},h=g,f=e("2877"),p=Object(f["a"])(h,u,d,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=Accountregister.fcb45ea7.js.map