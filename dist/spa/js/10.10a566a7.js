(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"18f6":function(t,e,s){"use strict";s("fb6a");e["a"]={methods:{chunk(t,e){const s=[];let a=0;while(a<t.length)s.push(t.slice(a,e+a)),a+=e;return s}}}},"1fca":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 q-mt-sm"},[t._m(0),s("q-carousel",{staticClass:"rounded-borders",attrs:{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",navigation:"",padding:"",arrows:"",height:"260px"},model:{value:t.latest_slide,callback:function(e){t.latest_slide=e},expression:"latest_slide"}},t._l(t.lists,(function(e,a){return s("q-carousel-slide",{key:a,staticClass:"column no-wrap",attrs:{name:a}},[s("div",{staticClass:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},t._l(e,(function(e){return s("div",{key:e.product_id,staticClass:"col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height",on:{click:function(e){return t.$router.push("/details")}}},[s("q-img",{staticClass:"rounded-borders",attrs:{src:e.image_filename}}),s("div",[t._v(t._s(e.product_name))]),s("div",{staticClass:"text-caption text-weight-bold text-green"},[t._v("\n            "+t._s(e.product_name)+"\n          ")]),s("div",[s("span",[t._v("₹"+t._s(e.sale_rate))]),s("span",{staticClass:"q-ml-sm text-grey-6",staticStyle:{"text-decoration":"line-through"}},[t._v("₹"+t._s(e.mrp))])])],1)})),0)])})),1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pl-md bg-white q-pt-sm "},[s("span",{staticClass:"text-grey-9 text-h6 text-weight-bold"},[t._v("Sale")]),s("a",{staticClass:"text-primary q-ml-sm cursor-pointer"},[t._v("[see all]")])])}],i=s("18f6"),l=s("9769"),n={mixins:[i["a"]],data(){return{latest_slide:1,lists:[]}},mounted(){l["a"].get("data/sale.json").then(t=>{this.lists=this.chunk(t.data,6)}).catch(t=>{console.log("mixin/ddlb Error",t)})}},o=n,c=s("2877"),u=s("880c"),d=s("62cd"),p=s("068f"),m=s("eebe"),_=s.n(m),h=Object(c["a"])(o,a,r,!1,null,null,null);e["default"]=h.exports;_()(h,"components",{QCarousel:u["a"],QCarouselSlide:d["a"],QImg:p["a"]})},9769:function(t,e,s){"use strict";var a=s("758b");e["a"]={get(t){return a["a"].get(t)},post(t,e){return a["a"].post(t,e)},put(t,e){return a["a"].put(t,e)},delete(t){return a["a"].delete(t)}}}}]);