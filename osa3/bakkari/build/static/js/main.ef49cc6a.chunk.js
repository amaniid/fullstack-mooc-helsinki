(this.webpackJsonplecturenotes=this.webpackJsonplecturenotes||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),l=n(4),u=n(2),i=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},t.content," \xa0",o.a.createElement("button",{onClick:n},a))},m=n(3),s=n.n(m),f=function(){return console.log("promise fulfilled"),console.log("THIS HAPPENS ONLY ONCE"),s.a.get("api/notes").then((function(e){return e.data}))},p=function(e){var t=s.a.post("api/notes",e);return console.log("new submission through FORM"),t.then((function(e){return e.data}))},d=function(e,t){var n=s.a.put("".concat("api/notes","/").concat(e),t);return console.log("updating importance!"),n.then((function(e){return e.data}))},E=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},g=function(e){var t=e.message;return null===t?null:o.a.createElement("div",{className:"error"},t)},b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),m=Object(u.a)(c,2),s=m[0],b=m[1],h=Object(a.useState)(!0),v=Object(u.a)(h,2),O=v[0],S=v[1],j=Object(a.useState)("some error happened"),k=Object(u.a)(j,2),y=k[0],N=k[1];Object(a.useEffect)((function(){console.log("effect !"),f().then((function(e){r(e)}))}),[]);var w=O?n:n.filter((function(e){return e.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(g,{message:y}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return S(!O)}},"show ",O?"important":"all")),o.a.createElement("ul",null,w.map((function(e,t){return o.a.createElement(i,{key:t,note:e,toggleImportance:function(){return function(e){var t=n.find((function(t){return t.id===e})),a=Object(l.a)(Object(l.a)({},t),{},{important:!t.important});d(e,a).then((function(t){r(n.map((function(n){return n.id!==e?n:t}))),console.log("importance of ".concat(e," toggled"))})).catch((function(a){N("the note '".concat(t.content,"' was already deleted from server")),setTimeout((function(){N(null)}),5e3),r(n.filter((function(t){return t.id!==e})))}))}(e.id)}})}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("button clicked",e.target);var t={content:s,date:(new Date).toISOString(),important:Math.random()>.85};p(t).then((function(e){r(n.concat(e)),b("")}))}},o.a.createElement("input",{value:s,onChange:function(e){b(e.target.value)}}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement("ol",null,o.a.createElement("li",null,"Olen hasu"),o.a.createElement("li",null,"minulla on s\xf6p\xf6..... MASU")),o.a.createElement(E,null))};n(37);c.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ef49cc6a.chunk.js.map