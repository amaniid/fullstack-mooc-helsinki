(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),u=n.n(o),c=(n(4),n(2)),l=function(e){var t=e.filterValue,n=e.filterFunction;return r.a.createElement("div",null,"find contacts:",r.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}))},i=function(e){var t=e.addContactFunction,n=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.setNewNumber;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name:\xa0",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number:\xa0",r.a.createElement("input",{value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"ass")))},m=function(e){var t=e.person,n=e.copy;e.deleteContact;return r.a.createElement("div",null,t.name," ",t.number,"\xa0",r.a.createElement("button",{onClick:n},"COPY id"))},d=n(3),s=n.n(d),f="/api/persons",b=function(){return s.a.get(f).then((function(e){return e.data}))},g=function(e){return s.a.post(f,e).then((function(e){return e.data})).catch((function(e){console.log("after request (services/persons.js):",e)}))},p=function(e){var t=e.message,n=e.msgColor;if(null===t)return null;console.log(n);var a={color:n,backgroundColor:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:a},t)},v=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),d=Object(c.a)(u,2),s=d[0],f=d[1],v=Object(a.useState)("+358"),h=Object(c.a)(v,2),E=h[0],C=h[1],j=Object(a.useState)(""),y=Object(c.a)(j,2),O=y[0],w=y[1],N=Object(a.useState)([null,"green"]),k=Object(c.a)(N,2),S=k[0],F=k[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var x=n.filter((function(e){return e.name.toLowerCase().match(O.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:S[0],msgColor:S[1]}),r.a.createElement(l,{filterValue:O,filterFunction:w}),r.a.createElement("h4",null,"Found"),x.map((function(e,t){return r.a.createElement(m,{key:t,person:e,copy:function(){return function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),F(["Copied id ".concat(e," to clipboard."),"green"]),setTimeout((function(){F([null,"green"])}),5e3)}(e.id)}})})),r.a.createElement("h3",null,"Add new contact"),r.a.createElement(i,{addContactFunction:function(e){if(e.preventDefault(),console.log("button clicked",e.target),n.some((function(e){return e.name===s}))|n.some((function(e){return e.number===E}))){return F(["Name ".concat(s," and/or number ").concat(E," is/are already added to phonebook."),"red"]),setTimeout((function(){F([null,"green"])}),5e3),f(""),void C("+358")}g({name:s,number:E}).then((function(e){o(n.concat(e)),F(["Added ".concat(e.name,"!"),"green"]),setTimeout((function(){F([null,"green"])}),5e3),f(""),C("+358")}))},newName:s,handleNameChange:function(e){f(e.target.value)},newNumber:E,setNewNumber:C}))};u.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.896919ed.chunk.js.map