var b=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var _=(t,a,e)=>a in t?b(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,r=(t,a)=>{for(var e in a||(a={}))L.call(a,e)&&_(t,e,a[e]);if(c)for(var e of c(a))C.call(a,e)&&_(t,e,a[e]);return t},o=(t,a)=>w(t,x(a));import{n as l,d as n,m as v,e as K,i as m,V as P}from"./index.bf812aa3.js";import{B as S,a as N}from"./BaseKey.a90c234b.js";var z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"key",class:t.myclasses,style:t.mystyles,attrs:{id:t.myid,title:t.displayName}},[t._v(" "+t._s(t.displayName)+" ")])},R=[];const j={name:"print-key",props:{layer:Number},extends:S,computed:{myid(){return`key-${this.layer}-${this.id}`},displayName(){return this.meta.type==="layer"?this.meta.code.replace("layer",this.meta.layer):this.meta.type==="text"?this.formatName(this.breakLines(this.meta.text)):this.meta.type==="layer-container"?`${this.meta.name.toUpperCase()},
${this.formatName(this.meta.contents.code)}`:this.meta.type==="container"?`${this.meta.name.toUpperCase()}
(${this.formatName(this.meta.contents.code)})`:this.formatName(this.breakLines(this.meta.name))}},methods:{breakLines(t){return this.uw<1.75&&(t=t.replace(" ",`
`).replace("_",`_
`)),t}}},y={};var D=l(j,z,R,!1,O,null,null,null);function O(t){for(let a in y)this[a]=y[a]}var p=function(){return D.exports}(),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"print-keymap",style:t.styles},[t._l(t.currentLayer(t.layer),function(s){return[e("PrintKey",t._b({key:s.id,attrs:{layer:t.layer,printable:!0}},"PrintKey",s,!1))]})],2)},U=[];const M={name:"print-keymap",extends:N,props:{profile:Boolean,layer:Number},mounted(){this.setSize(this.calculateMax(this.layout))},computed:r(r(r(r({},n("app",["layout","displaySizes"])),n("keymap",["config","displaySizes"])),v("keymap",["getLayer","loadingKeymapPromise","colorway","defaults"])),n("app",["layout","layouts","previewRequested"])),methods:o(r({},K("keymap",["resizeConfig"])),{currentLayer(t){const a=this.layouts[this.layout],e=this.getLayer(t);if(m(a)||m(e))return[];this.profile&&console.time("currentLayer");const s=this.colorway;let f=a.map((g,u)=>{let i=Object.assign({w:1,h:1},g);const $=this.calcKeyKeymapPos(i.x,i.y),k=this.calcKeyKeymapDims(i.w,i.h);return Object.assign({id:u,layer:this.layer,meta:e[u],colorway:s,displaySizes:this.displaySizes},$,k)});return this.profile&&console.timeEnd("currentLayer"),f},getComponent(){return p}}),data(){return{width:0,height:0}},components:{PrintKey:p}},h={};var B=l(M,T,U,!1,E,null,null,null);function E(t){for(let a in h)this[a]=h[a]}var q=function(){return B.exports}(),A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"print-layout"},[e("div",{staticClass:"print-controls"},[e("button",{staticClass:"ui-button",attrs:{id:"leavePrint"},on:{click:t.gohome}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",size:"lg","fixed-width":""}}),t._v(" "+t._s(t.i18n("back.title"))+" ")],1),e("button",{staticClass:"ui-button",attrs:{id:"print"},on:{click:function(s){return t.print()}}},[e("font-awesome-icon",{attrs:{icon:"print",size:"lg","fixed-width":""}}),t._v(" "+t._s(t.i18n("print.title"))+" ")],1)]),e("div",{staticClass:"meta-info"},[e("table",[e("tr",[e("th",[t._v(t._s(t.i18n("keyboard.label")))]),e("td",[t._v(t._s(t.keyboard))])]),e("tr",[e("th",[t._v(t._s(t.i18n("layout.label")))]),e("td",[t._v(t._s(t.layout))])]),e("tr",[e("th",[t._v(t._s(t.i18n("author.title")))]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t._author,expression:"_author"}],attrs:{type:"text",placeholder:t.i18n("author.placeholder")},domProps:{value:t._author},on:{input:function(s){s.target.composing||(t._author=s.target.value)}}})])]),e("tr",{on:{click:t.toggleDate}},[e("th",[t._v(t._s(t.i18n("date.title")))]),e("td",[t._v(t._s(t.today))])]),e("tr",[e("th",[t._v(t._s(t.i18n("source.title")))]),e("td",[e("a",{class:t.myclasses,attrs:{href:t.firmwareURL,target:"_blank"}},[t._v(t._s(t.firmwareURL))])])]),e("tr",[e("th",[t._v(t._s(t.i18n("notes.title")))]),e("td",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t._notes,expression:"_notes"}],staticClass:"optional-notes",attrs:{cols:"80",rows:"3",placeholder:t.i18n("notes.placeholder")},domProps:{value:t._notes},on:{input:function(s){s.target.composing||(t._notes=s.target.value)}}})])])])]),e("div",[t._l(t.activeLayers,function(s){return[e("div",{key:s,staticClass:"layer-output",class:t.firefoxOnly(s)},[e("h3",{staticClass:"layer-output-title"},[t._v(" "+t._s(t.i18n("layer.label"))+" "+t._s(s)+" ")]),e("PrintKeymap",{attrs:{layer:s}})],1)]})],2)])},F=[];const V={name:"printerator",computed:o(r(r({},n("app",["keyboard","layout","layouts","author","notes"])),v("keymap",["activeLayers"])),{today(){const t=new Date(Date.now());return this.dateToggle?`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`:`${t.toISOString()}`},firmwareURL(){return`https://github.com/qmk/qmk_firmware/tree/master/keyboards/${this.keyboard}`},myclasses(){let t=[];return(this.keyboard.match(/\//g)||[]).length>0&&t.push("source-small"),t.join(" ")},_author:{set(t){this.$store.commit("app/setAuthor",t)},get(){return this.author}},_notes:{set(t){this.$store.commit("app/setNotes",t)},get(){return this.notes}}}),components:{PrintKeymap:q},mounted(){console.log("Active layers",this.activeLayers)},methods:{i18n(t){return this.$t(`print.${t}`)},gohome(){this.$router.push(`/${this.keyboard}/${this.layout}`)},toggleDate(){this.dateToggle=!this.dateToggle},print(){this._notes===""&&(this._notes=this.$t("print.notes.empty")),this._author===""&&(this._author=this.$t("print.anonymous.label")),P.nextTick(()=>{window.print()})},firefoxOnly(t){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&t/3%3==0?"layout-output-firefox":""}},data(){return{dateToggle:!0}}},d={};var G=l(V,A,F,!1,I,null,null,null);function I(t){for(let a in d)this[a]=d[a]}var W=function(){return G.exports}();export{W as default};
