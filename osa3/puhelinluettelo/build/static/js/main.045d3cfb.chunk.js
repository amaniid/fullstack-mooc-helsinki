(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=(t(4),t(2)),l=function(e){var n=e.filterValue,t=e.filterFunction;return r.a.createElement("div",null,"find contacts:",r.a.createElement("input",{value:n,onChange:function(e){return t(e.target.value)}}))},i=function(e){var n=e.addContactFunction,t=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.setNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:\xa0",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number:\xa0",r.a.createElement("input",{value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"ass")))},m=function(e){var n=e.person,t=e.deleteContact;return r.a.createElement("div",null,n.name," ",n.number,"\xa0",r.a.createElement("button",{onClick:t},"DELETE"))},s=t(3),f=t.n(s),d="/api/persons",b=function(){return f.a.get(d).then((function(e){return e.data}))},g=function(e){return f.a.post(d,e).then((function(e){return e.data})).catch((function(e){console.log("after request (services/persons.js):",e)}))},h=function(e){return f.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message,t=e.msgColor;if(null===n)return null;console.log(t);var a={color:t,backgroundColor:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:a},n)},E=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),s=Object(c.a)(u,2),f=s[0],d=s[1],E=Object(a.useState)("+358"),p=Object(c.a)(E,2),C=p[0],w=p[1],O=Object(a.useState)("Jorma"),j=Object(c.a)(O,2),N=j[0],y=j[1],k=Object(a.useState)([null,"green"]),S=Object(c.a)(k,2),D=S[0],F=S[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var A=t.filter((function(e){return e.name.toLowerCase().match(N.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:D[0],msgColor:D[1]}),r.a.createElement(l,{filterValue:N,filterFunction:y}),r.a.createElement("h4",null,"Found"),A.map((function(e,n){return r.a.createElement(m,{key:n,person:e,deleteContact:function(){return n=e.name,a=e.id,void(window.confirm("Are you sure u want to delete ".concat(n,"?"))&&h(a).then((function(){o(t.filter((function(e){return e.id!==a}))),F(["Deleted ".concat(n,", GOOD RIDDANCE!"),"red"]),setTimeout((function(){F([null,"green"])}),5e3)})).catch((function(e){F(["Information of ".concat(n," has already been removed from server"),"red"]),o(t.filter((function(e){return e.name!==n}))),setTimeout((function(){F([null,"green"])}),5e3)})));var n,a}})})),r.a.createElement("h3",null,"Add new contact"),r.a.createElement(i,{addContactFunction:function(e){if(e.preventDefault(),console.log("button clicked",e.target),t.some((function(e){return e.name===f}))|t.some((function(e){return e.number===C}))){alert("Name ".concat(f," and/or number ").concat(C," is/are already added to phonebook."))}else{g({name:f,number:C}).then((function(e){o(t.concat(e)),F(["Added ".concat(e.name,"!"),"green"]),setTimeout((function(){F([null,"green"])}),5e3),d(""),w("+358")}))}},newName:f,handleNameChange:function(e){d(e.target.value)},newNumber:C,setNewNumber:w}))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.045d3cfb.chunk.js.map