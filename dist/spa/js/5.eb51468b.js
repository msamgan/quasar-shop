(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"24f8":function(e,t,s){},8476:function(e,t,s){"use strict";var a=s("24f8"),i=s.n(a);i.a},"8b16":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-dialog",{attrs:{persistent:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[s("q-card",{staticStyle:{"min-width":"40vw"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-4 q-pa-sm text-center",staticStyle:{"background-color":"#1f509e"}},[s("div",{staticClass:"row items-center justify-center full-height"},[s("div",{staticClass:"col-xs-12 text-center"},[s("img",{attrs:{src:"/images/logo.png",width:"30%"}}),s("div",{staticClass:"text-weight-bolder text-white text-h6"},[e._v("\n              "+e._s(e.siteName)+"\n            ")]),s("div",{staticClass:"text-caption text-white"},[e._v("\n              some text goes here\n            ")])])])]),s("div",{staticClass:"col-xs-12 col-md-8"},[s("div",{staticClass:"q-pa-sm"},[s("div",{staticClass:"text-h6"},[e._v("Welcome "+e._s(e.siteName))]),s("div",[e._v("Some more text")]),s("q-separator"),s("q-input",{staticClass:"q-ma-sm",attrs:{dense:"",outlined:"",label:"Username","lazy-rules":""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("q-input",{staticClass:"q-ma-sm",attrs:{dense:"",type:"password",outlined:"",label:"Password","lazy-rules":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("q-checkbox",{staticClass:"text-grey-8",attrs:{dense:"",label:"Remember me"},model:{value:e.remember_me,callback:function(t){e.remember_me=t},expression:"remember_me"}})],1),s("div",[s("q-separator",{attrs:{inset:""}}),s("div",{staticClass:"q-pa-sm"},[s("q-btn",{attrs:{flat:"",label:"Login"},on:{click:e.close}}),s("q-btn",{staticClass:"float-right text-blue-9 text-capitalize",attrs:{flat:"",label:"Sign Up"}})],1)],1)])])])],1)},i=[],l={props:["show","closeAction"],data(){return{username:"admin",password:"admin",remember_me:!1}},methods:{close(e){this.$emit("close")}},computed:{siteName(){return"My Shop"}}},o=l,r=(s("8476"),s("2877")),n=s("24e8"),c=s("f09f"),m=s("eb85"),d=s("27f9"),u=s("8f8e"),p=s("9c40"),b=s("eebe"),v=s.n(b),w=Object(r["a"])(o,a,i,!1,null,"c8433662",null);t["default"]=w.exports;v()(w,"components",{QDialog:n["a"],QCard:c["a"],QSeparator:m["a"],QInput:d["a"],QCheckbox:u["a"],QBtn:p["a"]})}}]);