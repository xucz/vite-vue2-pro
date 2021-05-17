import{F as e}from"./FileSaver.min.98bd1f62.js";import{X as t}from"./xlsx.ebd77e05.js";import"./vendor.ae19cf99.js";function r(e,r){for(var n,o={},s={s:{c:1e7,r:1e7},e:{c:0,r:0}},l=0;l!=e.length;++l)for(var a=0;a!=e[l].length;++a){s.s.r>l&&(s.s.r=l),s.s.c>a&&(s.s.c=a),s.e.r<l&&(s.e.r=l),s.e.c<a&&(s.e.c=a);var h={v:e[l][a]};if(null!=h.v){var c=t.utils.encode_cell({c:a,r:l});"number"==typeof h.v?h.t="n":"boolean"==typeof h.v?h.t="b":h.v instanceof Date?(h.t="n",h.z=t.SSF._table[14],h.v=(n=h.v,void 0&&(n+=1462),(Date.parse(n)-new Date(Date.UTC(1899,11,30)))/864e5)):h.t="s",o[c]=h}}return s.s.c<1e7&&(o["!ref"]=t.utils.encode_range(s)),o}function n(){if(!(this instanceof n))return new n;this.SheetNames=[],this.Sheets={}}function o(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!=e.length;++n)r[n]=255&e.charCodeAt(n);return t}function s(s){var l=function(e){for(var t=[],r=e.querySelectorAll("tr"),n=[],o=0;o<r.length;++o){for(var s=[],l=r[o].querySelectorAll("td"),a=0;a<l.length;++a){var h=l[a],c=h.getAttribute("colspan"),i=h.getAttribute("rowspan"),f=h.innerText;if(""!==f&&f==+f&&(f=+f),n.forEach((function(e){if(o>=e.s.r&&o<=e.e.r&&s.length>=e.s.c&&s.length<=e.e.c)for(var t=0;t<=e.e.c-e.s.c;++t)s.push(null)})),(i||c)&&(i=i||1,c=c||1,n.push({s:{r:o,c:s.length},e:{r:o+i-1,c:s.length+c-1}})),s.push(""!==f?f:null),c)for(var u=0;u<c-1;++u)s.push(null)}t.push(s)}return[t,n]}(document.getElementById(s)),a=l[1],h=l[0],c="SheetJS",i=new n,f=r(h);f["!merges"]=a,i.SheetNames.push(c),i.Sheets.SheetJS=f;var u=t.write(i,{bookType:"xlsx",bookSST:!1,type:"binary"});e.exports.saveAs(new Blob([o(u)],{type:"application/octet-stream"}),"test.xlsx")}function l({multiHeader:s=[],header:l,data:a,filename:h,merges:c=[],autoWidth:i=!0,bookType:f="xlsx"}={}){h=h||"excel-list",(a=[...a]).unshift(l);for(let e=s.length-1;e>-1;e--)a.unshift(s[e]);var u="SheetJS",p=new n,g=r(a);if(c.length>0&&(g["!merges"]||(g["!merges"]=[]),c.forEach((e=>{g["!merges"].push(t.utils.decode_range(e))}))),i){const e=a.map((e=>e.map((e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}))));let t=e[0];for(let r=1;r<e.length;r++)for(let n=0;n<e[r].length;n++)t[n].wch<e[r][n].wch&&(t[n].wch=e[r][n].wch);g["!cols"]=t}p.SheetNames.push(u),p.Sheets.SheetJS=g;var v=t.write(p,{bookType:f,bookSST:!1,type:"binary"});e.exports.saveAs(new Blob([o(v)],{type:"application/octet-stream"}),`${h}.${f}`)}export{l as export_json_to_excel,s as export_table_to_excel};
