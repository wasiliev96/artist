(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(t,e){},261:function(t,e,n){var r=n(405),o={space:"u7f0l5kgwpzz",accessToken:"pOYG4BZoF-El9sm-Ty45imYG7dYgr6YWx5BXaB8EN-Q"};t.exports={createClient:function(){return r.createClient(o)}}},266:function(t,e,n){"use strict";var r=n(81),o=Object(r.a)({setup:function(){var t=Object(r.c)(!1),e=Object(r.e)();return{page:Object(r.c)(e.state.pageData),isMenuOpen:t,menuLinks:[{title:"Home",href:"#"},{title:"Portfolio",href:"#"},{title:"About",href:"#"},{title:"Contact",href:"#"}]}}}),l=n(86),c=n(259),f=n.n(c),v=n(457),d=n(460),m=n(461),h=n(462),_=n(267),x=n(189),k=n(121),w=n(144),O=n(459),y=n(80),C=n(458),V=n(260),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"page"},[r("v-app-bar",{attrs:{absolute:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[r("v-toolbar-title",[r("v-img",{staticClass:"level-item",attrs:{src:t.page.logo.fields.file.url,alt:t.page.logo.fields.title,width:t.page.logo.fields.file.details.image.width,height:t.page.logo.fields.file.details.image.height}})],1),t._v(" "),r("v-spacer"),t._v(" "),t._l(t.page.headerSocialLinks.fields.socialLink,(function(t){return r("v-btn",{key:t.id,attrs:{color:"accent",text:""}},[r("img",{staticClass:"social-link__image",attrs:{src:t.fields.icon.fields.file.url,alt:t.fields.icon.fields.title,width:t.fields.icon.fields.file.details.image.width,heigth:t.fields.icon.fields.file.details.image.height}})])})),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"cta-button",attrs:{outlined:"",plain:""}},[t._v("\n      Message\n    ")]),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"menu-toggler",attrs:{plain:""},on:{click:function(e){t.isMenuOpen=!t.isMenuOpen}}},"v-btn",l,!1),o),[r("transition",{attrs:{name:"fade"}},[t.isMenuOpen?r("img",{key:"open",attrs:{src:n(301),alt:"Open menu"}}):r("img",{key:"close",attrs:{src:n(302),alt:"Close menu"}})])],1)]}}])},[t._v(" "),r("v-list",t._l(t.menuLinks,(function(e,n){return r("v-list-item",{key:n,attrs:{href:e.href}},[r("v-list-item-title",[t._v("\n            "+t._s(e.title)+"\n          ")])],1)})),1)],1)],2),t._v(" "),r("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-7","max-height":"600"}},[r("v-container",{staticStyle:{height:"1500px"}})],1),t._v(" "),r("main",[r("Nuxt")],1),t._v(" "),r("footer",[r("h2",[t._v("Footer")])])],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:v.a,VAppBar:d.a,VBtn:m.a,VContainer:h.a,VImg:_.a,VList:x.a,VListItem:k.a,VListItemTitle:w.a,VMenu:O.a,VSheet:y.a,VSpacer:C.a,VToolbarTitle:V.a})},269:function(t,e,n){n(270),n(271),t.exports=n(274)},299:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0b3fb090",content,!0,{sourceMap:!1})},300:function(t,e,n){var r=n(26)(!1);r.push([t.i,".menu-toggler .v-btn__content{position:relative;width:32px;height:32px}.menu-toggler .v-btn__content img{position:absolute;top:10%;left:10%;width:80%;height:80%}.cta-button{text-transform:capitalize!important}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-active{opacity:0}",""]),t.exports=r},301:function(t,e,n){t.exports=n.p+"82a8c269928af56651998804d5c9e0e6.svg"},302:function(t,e,n){t.exports=n.p+"61730bb69a4993632c0feff75ed9b51e.svg"},404:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return f}));var r=n(23),o=(n(92),n(261)),l=function(){return{pageData:{}}},c={setPageData:function(t,e){t.pageData=e}},f={nuxtServerInit:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,r=Object(o.createClient)(),e.next=4,r.getEntries({select:["fields"]}).catch(console.error);case 4:l=e.sent,n("setPageData",l.items[0].fields);case 6:case"end":return e.stop()}}),e)})))()}}},432:function(t,e){}},[[269,5,1,6]]]);