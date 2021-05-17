import{n as e,_ as t}from"./index.09634802.js";import{a as l}from"./article.b06b80ab.js";import"./vendor.ae19cf99.js";const a={};var n=e({name:"SelectExcel",data:()=>({list:null,listLoading:!0,multipleSelection:[],downloadLoading:!1,filename:""}),created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,l(this.listQuery).then((e=>{this.list=e.data.items,this.listLoading=!1}))},handleSelectionChange(e){this.multipleSelection=e},handleDownload(){this.multipleSelection.length?(this.downloadLoading=!0,t((()=>import("./Export2Excel.2009f15d.js")),["/vite-vue2-pro/assets/Export2Excel.2009f15d.js","/vite-vue2-pro/assets/FileSaver.min.98bd1f62.js","/vite-vue2-pro/assets/vendor.ae19cf99.js","/vite-vue2-pro/assets/xlsx.ebd77e05.js"]).then((e=>{const t=this.multipleSelection,l=this.formatJson(["id","title","author","pageviews","display_time"],t);e.export_json_to_excel({header:["Id","Title","Author","Readings","Date"],data:l,filename:this.filename}),this.$refs.multipleTable.clearSelection(),this.downloadLoading=!1}))):this.$message({message:"Please select at least one item",type:"warning"})},formatJson:(e,t)=>t.map((t=>e.map((e=>t[e]))))}},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"Please enter the file name (default excel-list)","prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),l("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v(" Export Selected Items ")]),l("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[l("el-tag",{attrs:{type:"info"}},[e._v("Documentation")])],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",align:"center"}}),l("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index)+" ")]}}])}),l("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.title)+" ")]}}])}),l("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",[e._v(e._s(t.row.author))])]}}])}),l("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.pageviews)+" ")]}}])}),l("el-table-column",{attrs:{align:"center",label:"PDate",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("i",{staticClass:"el-icon-time"}),l("span",[e._v(e._s(t.row.display_time))])]}}])})],1)],1)}),[],!1,(function(e){for(let t in a)this[t]=a[t]}),null,null,null);n.options.__file="src/views/excel/select-excel.vue";var i=n.exports;export default i;