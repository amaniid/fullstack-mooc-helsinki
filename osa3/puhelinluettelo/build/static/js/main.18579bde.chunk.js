(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=t(4),l=t(2),i=function(e){var n=e.filterValue,t=e.filterFunction;return r.a.createElement("div",null,"find contacts:",r.a.createElement("input",{value:n,onChange:function(e){return t(e.target.value)}}))},m=function(e){var n=e.addContactFunction,t=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.setNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:\xa0",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number:\xa0",r.a.createElement("input",{value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"ass")))},d=function(e){var n=e.person,t=e.copy;e.deleteContact;return r.a.createElement("div",null,n.name," ",n.number,"\xa0",r.a.createElement("button",{onClick:t},"COPY id"))},s=t(3),f=t.n(s),b="/api/persons",h=function(){return f.a.get(b).then((function(e){return e.data}))},p=function(e){return f.a.post(b,e).then((function(e){return e.data})).catch((function(e){console.log("after request (services/persons.js):",e)}))},g=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){var n=e.message,t=e.msgColor;if(null===n)return null;var a={color:t,backgroundColor:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:a},n)},E=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),s=Object(l.a)(u,2),f=s[0],b=s[1],E=Object(a.useState)("+358"),C=Object(l.a)(E,2),w=C[0],y=C[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),N=O[0],k=O[1],S=Object(a.useState)([null,"green"]),F=Object(l.a)(S,2),T=F[0],x=F[1];Object(a.useEffect)((function(){h().then((function(e){o(e)}))}),[]);var A=t.filter((function(e){return e.name.toLowerCase().match(N.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:T[0],msgColor:T[1]}),r.a.createElement(i,{filterValue:N,filterFunction:k}),r.a.createElement("h4",null,"Found"),A.map((function(e,n){return r.a.createElement(d,{key:n,person:e,copy:function(){return function(e){var n=document.createElement("textarea");document.body.appendChild(n),n.value=e,n.select(),document.execCommand("copy"),document.body.removeChild(n),x(["Copied id ".concat(e," to clipboard."),"green"]),setTimeout((function(){x([null,"green"])}),5e3)}(e.id)}})})),r.a.createElement("h3",null,"Add new contact"),r.a.createElement(m,{addContactFunction:function(e){if(e.preventDefault(),console.log("button clicked",e.target),t.some((function(e){return e.name===f}))|t.some((function(e){return e.number===w}))){if(alert("Name ".concat(f," and/or number ").concat(w," is/are already added to phonebook.")),!window.confirm("".concat(f," is already added to phonebook. Do you want to replace the old number with a new one?")))return x(["Name ".concat(f," and/or number ").concat(w," is/are already added to phonebook."),"red"]),setTimeout((function(){x([null,"green"])}),5e3),b(""),void y("+358");var n=t.find((function(e){return e.name===f})),a=Object(c.a)(Object(c.a)({},n),{},{number:w});g(a.id,a).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),x(["Changed ".concat(e.name,"'s number!"),"green"]),b(""),y("+358"),setTimeout((function(){x([null,"green"])}),5e3)})).catch((function(e){x(["Information of ".concat(n.name," has already been removed from server"),"red"]),b(""),y("+358"),setTimeout((function(){x([null,"green"])}),5e3),o(t.filter((function(e){return e.name!==n.name})))}))}else{p({name:f,number:w}).then((function(e){o(t.concat(e)),x(["Added ".concat(e.name,"!"),"green"]),setTimeout((function(){x([null,"green"])}),5e3),b(""),y("+358")}))}},newName:f,handleNameChange:function(e){b(e.target.value)},newNumber:w,setNewNumber:y}))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.18579bde.chunk.js.map