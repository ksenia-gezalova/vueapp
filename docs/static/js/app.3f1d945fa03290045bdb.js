webpackJsonp([1],{"+M/Y":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};s.d(n,"saveNote",function(){return k}),s.d(n,"storeNotes",function(){return w}),s.d(n,"openNote",function(){return C}),s.d(n,"deleteNote",function(){return R}),s.d(n,"startSaveTimeout",function(){return U}),s.d(n,"stopSaveTimeout",function(){return x}),s.d(n,"clearCurrentNote",function(){return D});var o={};s.d(o,"note",function(){return V}),s.d(o,"notes",function(){return L}),s.d(o,"lastSaved",function(){return q}),s.d(o,"wordCount",function(){return I});var a=s("7+uW"),r=s("Dd8w"),i=s.n(r),c=s("NYxO"),l={computed:i()({},Object(c.c)(["note","lastSaved","wordCount"])),methods:i()({},Object(c.b)(["saveNote","startSaveTimeout"]),{save:function(){this.note.id?this.startSaveTimeout():this.saveNote()}})},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pad"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"pad__title",attrs:{type:"text",placeholder:"Untitled note"},domProps:{value:t.note.title},on:{keydown:t.save,input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.body,expression:"note.body"}],staticClass:"pad__text",attrs:{placeholder:"Start writing.."},domProps:{value:t.note.body},on:{keydown:t.save,input:function(e){e.target.composing||t.$set(t.note,"body",e.target.value)}}}),t._v(" "),s("footer",{staticClass:"pad__footer"},[s("ul",{staticClass:"pad__footer-items"},[s("li",{staticClass:"pad__footer-item"},[t._v("Words: "+t._s(t.wordCount))]),t._v(" "),s("li",{staticClass:"pad__footer-item pad__footer-item--right"},[t._v("Last saved: "+t._s(t.lastSaved))])])])])},staticRenderFns:[]};var d=s("VU/8")(l,u,!1,function(t){s("+M/Y")},"data-v-4da4223c",null).exports,j={props:["note"],methods:i()({},Object(c.b)(["openNote","deleteNote"]))},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"note"},[s("a",{staticClass:"note__delete",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.deleteNote(t.note.id)}}},[s("span",{staticClass:"note__delete-icon"},[t._v("×")])]),t._v(" "),s("div",{staticClass:"note__content"},[s("a",{staticClass:"note__title",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.openNote(t.note)}}},[t.note.title?s("span",[t._v(t._s(t.note.title))]):s("span",[t._v("Untitled note")])]),t._v(" "),s("p",{staticClass:"note__body"},[t.note.body?s("span",[t._v(t._s(t.note.body))]):s("span",[t._v("Empty")])])])])},staticRenderFns:[]};var m={components:{Note:s("VU/8")(j,v,!1,function(t){s("uo9W")},"data-v-cc988c2a",null).exports},methods:i()({},Object(c.b)(["clearCurrentNote"])),computed:i()({},Object(c.c)(["notes"]))},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[t.notes.length?s("div",t._l(t.notes,function(t){return s("note",{attrs:{note:t}})})):s("div",{staticClass:"sidebar__content"},[t._v("No notes here now. Don't be shy, please write something..\n    ")]),t._v(" "),s("div",{staticClass:"sidebar__content"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearCurrentNote(e)}}},[t._v("Start a new note")])])])},staticRenderFns:[]};var p={name:"App",components:{Pad:d,Sidebar:s("VU/8")(m,f,!1,function(t){s("VdQD")},"data-v-4acebe18",null).exports}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("pad")],1)},staticRenderFns:[]};var h,E=s("VU/8")(p,_,!1,function(t){s("gUKz")},null,null).exports,b={id:null,title:null,body:null,lastSaved:null},N=s("M4fF"),T={note:Object(N.clone)(b),notes:JSON.parse(localStorage.getItem("notes"))||[],saveTimeout:null},g=s("bOdI"),S=s.n(g),y=(h={},S()(h,"SET_CURRENT_NOTE_ID",function(t,e){t.note.id=e}),S()(h,"PREPEND_TO_NOTES",function(t,e){t.notes.unshift(e)}),S()(h,"TOUCH_LAST_SAVED",function(t){t.note.lastSaved=Date.now()}),S()(h,"SET_SAVE_TIMEOUT",function(t,e){var s=e.callback,n=e.delay;t.saveTimeout=setTimeout(s,n)}),S()(h,"CLEAR_SAVE_TIMEOUT",function(t){clearInterval(t.saveTimeout),t.saveTimeout=null}),S()(h,"SET_CURRENT_NOTE",function(t,e){t.note=null!==e?e:Object(N.clone)(b)}),S()(h,"DELETE_NOTE",function(t,e){t.notes=t.notes.filter(function(t){return t.id!==e})}),h),O=s("mvHQ"),z=s.n(O),k=function(t){var e=t.commit,s=t.dispatch,n=t.state;e("TOUCH_LAST_SAVED"),null===n.note.id&&(e("SET_CURRENT_NOTE_ID",Date.now()),e("PREPEND_TO_NOTES",n.note)),s("storeNotes")},w=function(t){var e=t.state;localStorage.setItem("notes",z()(e.notes))},C=function(t,e){(0,t.commit)("SET_CURRENT_NOTE",e)},R=function(t,e){var s=t.commit,n=t.dispatch;e===t.state.note.id&&n("clearCurrentNote"),s("DELETE_NOTE",e),n("storeNotes")},U=function(t){var e=t.commit,s=t.dispatch;null===t.state.saveTimeout&&e("SET_SAVE_TIMEOUT",{callback:function(){s("saveNote"),s("stopSaveTimeout")},delay:1e3})},x=function(t){var e=t.commit;t.dispatch,t.state;e("CLEAR_SAVE_TIMEOUT")},D=function(t){var e=t.commit;(0,t.dispatch)("stopSaveTimeout"),e("SET_CURRENT_NOTE",null)},F=s("PJh5"),P=s.n(F),V=function(t){return t.note},L=function(t){return t.notes.sort(function(t,e){return t.lastSaved<e.lastSaved})},q=function(t){return t.note.lastSaved?P()(t.note.lastSaved).calendar():"Never"},I=function(t){return t.note.body&&""!==t.note.body.trim()?t.note.body.trim().split(" ").length:0};a.a.use(c.a);var M=new c.a.Store({state:T,mutations:y,actions:n,getters:o});new a.a({el:"#app",components:{App:E},store:M,template:"<App/>"})},VdQD:function(t,e){},gUKz:function(t,e){},uo9W:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function o(t){return s(a(t))}function a(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.3f1d945fa03290045bdb.js.map