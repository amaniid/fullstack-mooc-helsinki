(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=t(4),i=t(2),l=function(e){var n=e.filterValue,t=e.filterFunction;return r.a.createElement("div",null,"find contacts:",r.a.createElement("input",{value:n,onChange:function(e){return t(e.target.value)}}))},m=function(e){var n=e.addContactFunction,t=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.setNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:\xa0",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number:\xa0",r.a.createElement("input",{value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"ass")))},d=function(e){var n=e.person,t=e.copy,a=e.deleteContact;return r.a.createElement("div",null,n.name," ",n.number,"\xa0",r.a.createElement("button",{onClick:a},"DELETE"),"\xa0",r.a.createElement("button",{onClick:t},"COPY id"))},f=t(3),s=t.n(f),b="/api/persons",h=function(){return s.a.get(b).then((function(e){return e.data}))},g=function(e){return s.a.post(b,e).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return s.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){var n=e.message,t=e.msgColor;if(null===n)return null;var a={color:t,backgroundColor:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:a},n)},C=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),f=Object(i.a)(u,2),s=f[0],b=f[1],C=Object(a.useState)("+358"),O=Object(i.a)(C,2),w=O[0],y=O[1],N=Object(a.useState)(""),j=Object(i.a)(N,2),T=j[0],k=j[1],D=Object(a.useState)([null,"green"]),S=Object(i.a)(D,2),A=S[0],F=S[1];Object(a.useEffect)((function(){h().then((function(e){o(e)}))}),[]);var I=t.filter((function(e){return e.name.toLowerCase().match(T.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:A[0],msgColor:A[1]}),r.a.createElement(l,{filterValue:T,filterFunction:k}),r.a.createElement("h4",null,"Found"),I.map((function(e,n){return r.a.createElement(d,{key:n,person:e,copy:function(){return function(e){var n=document.createElement("textarea");document.body.appendChild(n),n.value=e,n.select(),document.execCommand("copy"),document.body.removeChild(n),F(["Copied id ".concat(e," to clipboard."),"green"]),setTimeout((function(){F([null,"green"])}),5e3)}(e.id)},deleteContact:function(){return n=e.name,a=e.id,void(window.confirm("Are you sure u want to delete ".concat(n,"?"))&&v(a).then((function(){o(t.filter((function(e){return e.id!==a}))),F(["Deleted ".concat(n,", GOOD RIDDANCE!"),"red"]),setTimeout((function(){F([null,"green"])}),5e3)})).catch((function(e){F(["Information of ".concat(n," has already been removed from server"),"red"]),o(t.filter((function(e){return e.name!==n}))),setTimeout((function(){F([null,"green"])}),5e3)})));var n,a}})})),r.a.createElement("h3",null,"Add new contact"),r.a.createElement(m,{addContactFunction:function(e){if(e.preventDefault(),console.log("button clicked",e.target),t.some((function(e){return e.name===s}))){if(!window.confirm("".concat(s," is already added to phonebook. Do you want to replace the old number with a new one?")))return b(""),void y("+358");var n=t.find((function(e){return e.name===s})),a=Object(c.a)(Object(c.a)({},n),{},{number:w});p(a.id,a).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),F(["Changed ".concat(e.name,"'s number!"),"green"]),b(""),y("+358"),setTimeout((function(){F([null,"green"])}),5e3)})).catch((function(e){F(["Information of ".concat(n.name," has already been removed from server"),"red"]),b(""),y("+358"),setTimeout((function(){F([null,"green"])}),5e3),o(t.filter((function(e){return e.name!==n.name})))}))}else{if(t.some((function(e){return e.number===w}))){var r=t.findIndex((function(e){return e.number===w}));return alert("Number ".concat(w," is already added to phonebook for ").concat(t[r].name,".")),void y("+358")}g({name:s,number:w}).then((function(e){console.log("CONTACT ADDED TO PHONEBOOK"),o(t.concat(e)),F(["Added ".concat(e.name,"!"),"green"]),setTimeout((function(){F([null,"green"])}),5e3),b(""),y("+358")})).catch((function(e){console.log(e.response.data),F([e.response.data.error,"red"]),setTimeout((function(){F([null,"green"])}),5e3)}))}},newName:s,handleNameChange:function(e){b(e.target.value)},newNumber:w,setNewNumber:y}))};u.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1498a40f.chunk.js.map