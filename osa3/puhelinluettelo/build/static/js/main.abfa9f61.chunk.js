(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),u=n.n(o),c=(n(4),n(2)),l=function(e){var t=e.filterValue,n=e.filterFunction;return r.a.createElement("div",null,"find contacts:",r.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}))},i=function(e){var t=e.addContactFunction,n=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.setNewNumber;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name:\xa0",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number:\xa0",r.a.createElement("input",{value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"ass")))},m=function(e){var t=e.person,n=e.deleteContact;return r.a.createElement("div",null,t.name," ",t.number,"\xa0",r.a.createElement("button",{onClick:n},"DELETE"))},s=n(3),f=n.n(s),d="/api/persons",b=function(){return f.a.get(d).then((function(e){return e.data}))},g=function(e){return f.a.post(d,e).then((function(e){return console.log(e),e.data})).catch((function(e){console.log("after request (services/persons.js):",e)}))},h=function(e){return f.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var t=e.message,n=e.msgColor;if(null===t)return null;console.log(n);var a={color:n,backgroundColor:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:a},t)},E=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),s=Object(c.a)(u,2),f=s[0],d=s[1],E=Object(a.useState)("+358"),p=Object(c.a)(E,2),C=p[0],w=p[1],j=Object(a.useState)("Jorma"),O=Object(c.a)(j,2),N=O[0],y=O[1],S=Object(a.useState)([null,"green"]),k=Object(c.a)(S,2),D=k[0],A=k[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var F=n.filter((function(e){return e.name.toLowerCase().match(N.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:D[0],msgColor:D[1]}),r.a.createElement(l,{filterValue:N,filterFunction:y}),r.a.createElement("h4",null,"Found"),F.map((function(e,t){return r.a.createElement(m,{key:t,person:e,deleteContact:function(){return t=e.name,a=e.id,void(window.confirm("Are you sure u want to delete ".concat(t,"?"))&&h(a).then((function(){o(n.filter((function(e){return e.id!==a}))),A(["Deleted ".concat(t,", GOOD RIDDANCE!"),"red"]),setTimeout((function(){A([null,"green"])}),5e3)})).catch((function(e){A(["Information of ".concat(t," has already been removed from server"),"red"]),o(n.filter((function(e){return e.name!==t}))),setTimeout((function(){A([null,"green"])}),5e3)})));var t,a}})})),r.a.createElement("h3",null,"Add new contact"),r.a.createElement(i,{addContactFunction:function(e){if(e.preventDefault(),console.log("button clicked",e.target),n.some((function(e){return e.name===f}))){alert("".concat(f," is already added to phonebook."))}else{g({name:f,number:C}).then((function(e){o(n.concat(e)),A(["Added ".concat(e.name,"!"),"green"]),setTimeout((function(){A([null,"green"])}),5e3),d(""),w("+358")})).catch((function(e){console.log("after personService (App.js):",e)}))}},newName:f,handleNameChange:function(e){d(e.target.value)},newNumber:C,setNewNumber:w}))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.abfa9f61.chunk.js.map