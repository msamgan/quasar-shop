(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3cc2":function(t,o,s){"use strict";o["a"]={computed:{isDesktop(){return!!this.$q.platform.is.desktop},isMobile(){return!!this.$q.platform.is.mobile}}}},"635f":function(t,o,s){"use strict";var a=s("7aff"),i=s.n(a);i.a},"6eb0":function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("q-table",{attrs:{title:"Treats",data:t.lists,"hide-header":"","row-key":"name",grid:"","hide-bottom":"",pagination:t.initialPagination},scopedSlots:t._u([{key:"top",fn:function(o){return[o.inFullscreen?t._e():s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.horizontal?"list":"grid_on"},on:{click:function(o){t.horizontal=!t.horizontal}}})]}},{key:"item",fn:function(o){return[s("q-card",{class:t.outer},[s("div",[s("div",{staticClass:"row wrap"},[s("div",{class:[t.horizontal?"col-4":"col-12"]},[s("q-img",{class:{"q-mt-md":!!t.horizontal},attrs:{src:o.row.image_filename,"spinner-color":"primary","spinner-size":"82px","placeholder-src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="}})],1),s("div",{class:[t.horizontal?"col-8":"col-12"]},[s("div",{},[t._v("\n              "+t._s(o.row.product_name)+"\n            ")]),s("div",{class:[t.horizontal?"row":"hidden"]},[s("div",{staticClass:"col-4"},[t._v("Info")]),s("div",{staticClass:"col-4"},[t._v("MRP")]),s("div",{staticClass:"col-4"},[t._v(t._s(o.row.mrp))])]),s("div",{class:[t.horizontal?"row":"hidden"]},[s("div",{staticClass:"col-4"}),s("div",{staticClass:"col-4"},[t._v("Our Price")]),s("div",{staticClass:"col-4"},[t._v(t._s(o.row.sale_rate))])]),s("div",{class:[t.horizontal?"row":"hidden"]},[s("div",{staticClass:"col-4"}),s("div",{staticClass:"col-4"},[t._v("Saving")]),s("div",{staticClass:"col-4"},[t._v("22% off")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[t._v("Size")]),s("q-btn",{staticClass:"col-6 text-weight-bold text-capitalize",attrs:{dense:"",color:"primary"}},[t._v("\n                Add to Cart\n              ")])],1)])]),s("div",{class:{hidden:!!t.horizontal}},[t._v("\n          Verticle product info\n        ")])])])]}}])})},i=[],e=s("9769"),r=s("3cc2"),l={mixins:[r["a"]],data(){return{stars:4,mode:"list",horizontal:!1,loading:!0,class_val:"shadow-1 my-card",lists:[],variety:1,options:[1,2,3],initialPagination:{sortBy:"desc",descending:!1,page:2,rowsPerPage:0}}},computed:{getSize(){return this.horizontal?"30%":"400px"},getClass(){return"col-xs-12 col-sm-6 "+(this.horizontal?"hr col-lg-6 col-md-6":"vr col-lg-3 col-md-3")},outer(){let t="outer q-pa-sm col-xs-12 col-sm-6 "+(this.horizontal?"hr col-lg-3 col-md-4":"vr col-lg-3 col-md-3");return console.log("class",this.isDesktop,this.horizontal,t),t}},mounted(){const t=parseInt(this.$route.params.category_id);e["a"].get("data/product.json").then(o=>{this.lists=o.data.filter(o=>parseInt(o.category_id)===t),this.loading=!1,console.log("data",this.lists)}).catch(t=>{console.log("DataService.get Error",t)})}},n=l,c=(s("635f"),s("2877")),d=s("eaac"),u=s("9c40"),h=s("f09f"),p=s("068f"),v=s("eebe"),g=s.n(v),f=Object(c["a"])(n,a,i,!1,null,"7694def0",null);o["default"]=f.exports;g()(f,"components",{QTable:d["a"],QBtn:u["a"],QCard:h["a"],QImg:p["a"]})},"7aff":function(t,o,s){},9769:function(t,o,s){"use strict";var a=s("758b");o["a"]={get(t){return a["a"].get(t)},post(t,o){return a["a"].post(t,o)},put(t,o){return a["a"].put(t,o)},delete(t){return a["a"].delete(t)}}}}]);