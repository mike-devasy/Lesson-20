import{D as C,q as m,i as c}from"./index-BM3S7LO8.js";function h(d,e){const o=new C(d),n=m(null),u=m(null);async function i(){n.value=await e({operation:()=>o.loadItemsList()})}async function r(t){return u.value=await e({operation:()=>o.getItemById(t)}),u.value}async function l(t,a,s){return n.value=await e({operation:()=>o.loadFilteredData(t,a,s)}),n.value}async function I(t){return n.value=await e({operation:()=>o.loadDocumentsFromIdsList(t)}),n.value}async function v(t){u.value=await e({operation:()=>o.addItem(t)})}async function y(t,a,s){u.value=await e({operation:()=>o.addItemToArray(t,a,s)})}async function f(t,a,s){u.value=await e({operation:()=>o.removeItemFromArray(t,a,s)})}async function w({id:t,data:a}){u.value=await e({operation:()=>o.addItemWithCustomId(t,a)})}async function D(t,a){u.value=await e({operation:()=>o.updateItem(t,a)})}async function F(t){await e({operation:()=>o.deleteItem(t)}),n.value=n.value.filter(a=>a.id!==t)}const L=c(()=>n.value??[]),B=c(()=>u.value);return{loadItemsList:i,addItem:v,addItemWithCustomId:w,addItemToArray:y,removeItemFromArray:f,updateItem:D,deleteItem:F,getItemsList:L,loadItemById:r,loadFilteredData:l,getCurrentItem:B,loadDocumentsFromIdsList:I}}export{h as g};
