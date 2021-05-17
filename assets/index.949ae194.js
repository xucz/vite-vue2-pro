import{n as s,v as t}from"./index.09634802.js";import"./vendor.ae19cf99.js";const e={};var o=s({name:"SocialSignin",methods:{wechatHandleClick(s){alert(s+" - ok")},tencentHandleClick(s){alert(s+" - ok")}}},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(t){return s.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),s._v(" WeChat ")]),e("div",{staticClass:"sign-btn",on:{click:function(t){return s.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),s._v(" QQ ")])])}),[],!1,(function(s){for(let t in e)this[t]=e[t]}),"8cb00914",null,null);o.options.__file="src/views/login/components/SocialSignin.vue";var n=o.exports;const i={};var a=s({name:"Login",components:{SocialSign:n},data:()=>({loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:(s,e,o)=>{t(e)?o():o(new Error("Please enter the correct user name"))}}],password:[{required:!0,trigger:"blur",validator:(s,t,e)=>{t.length<6?e(new Error("The password can not be less than 6 digits")):e()}}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}),watch:{$route:{handler:function(s){const t=s.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created(){},mounted(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed(){},methods:{checkCapslock(s){const{key:t}=s;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd(){"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((()=>{this.$refs.password.focus()}))},handleLogin(){console.log("TTTTMMMDDDD"),this.loading=!0,this.$store.dispatch("user/login",this.loginForm).then((()=>{this.$router.push({path:this.redirect||"/",query:this.otherQuery}),this.loading=!1})).catch((()=>{this.loading=!1}))},getOtherQuery:s=>Object.keys(s).reduce(((t,e)=>("redirect"!==e&&(t[e]=s[e]),t)),{})}},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:s.loginForm,rules:s.loginRules,autocomplete:"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[s._v("Login Form")])]),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),e("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:s.loginForm.username,callback:function(t){s.$set(s.loginForm,"username",t)},expression:"loginForm.username"}})],1),e("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:s.capsTooltip,callback:function(t){s.capsTooltip=t},expression:"capsTooltip"}},[e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),e("el-input",{key:s.passwordType,ref:"password",attrs:{type:s.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){s.capsTooltip=!1}},nativeOn:{keyup:[function(t){return s.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.handleLogin(t)}]},model:{value:s.loginForm.password,callback:function(t){s.$set(s.loginForm,"password",t)},expression:"loginForm.password"}}),e("span",{staticClass:"show-pwd",on:{click:s.showPwd}},[e("svg-icon",{attrs:{"icon-class":"password"===s.passwordType?"eye":"eye-open"}})],1)],1)],1),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:s.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),s.handleLogin(t)}}},[s._v("Login")]),e("div",{staticStyle:{position:"relative"}},[e("div",{staticClass:"tips"},[e("span",[s._v("Username : admin")]),e("span",[s._v("Password : any")])]),e("div",{staticClass:"tips"},[e("span",{staticStyle:{"margin-right":"18px"}},[s._v("Username : editor")]),e("span",[s._v("Password : any")])]),e("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(t){s.showDialog=!0}}},[s._v(" Or connect with ")])],1)],1),e("el-dialog",{attrs:{title:"Or connect with",visible:s.showDialog},on:{"update:visible":function(t){s.showDialog=t}}},[s._v(" Can not be simulated on local, so please combine you own business simulation! ! ! "),e("br"),e("br"),e("br"),e("social-sign")],1)],1)}),[],!1,(function(s){for(let t in i)this[t]=i[t]}),"563eb988",null,null);a.options.__file="src/views/login/index.vue";var r=a.exports;export default r;
