(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),l=n(2),s=n(3),o=n(5),u=n(4),m=(n(18),n(12)),p=(n(19),n(6)),d=n(7),f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={inputText:"",items:[]},e.handleChange=function(t){e.setState({inputText:t.target.value})},e.storeItems=function(t){t.preventDefault();var n=e.state,a=n.inputText,c=n.items;e.setState({items:[].concat(Object(m.a)(c),[a]),inputText:""})},e.deleteItem=function(t){var n=e.state.items;n.splice(t,1),e.setState({items:n})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.inputText,a=t.items;return console.log(a),c.a.createElement("div",{className:"todo-container"},c.a.createElement("h1",null,"To Do App "),c.a.createElement("form",{className:"input-section",onSubmit:this.storeItems},c.a.createElement("div",{className:"input-div"},c.a.createElement("input",{type:"text",value:n,onChange:this.handleChange,placeholder:"Enter Items..."})),c.a.createElement("div",{className:"plus"},c.a.createElement(p.a,{icon:d.b,onClick:this.storeItems}))),c.a.createElement("ul",null,a.map((function(t,n){return c.a.createElement("li",{key:n},t,c.a.createElement("div",{className:"fa-edit"},c.a.createElement(p.a,{icon:d.a,onClick:function(){return e.editItem}})),c.a.createElement("div",{className:"fa-trash"},c.a.createElement(p.a,{icon:d.c,onClick:function(){return e.deleteItem(n)}})))}))))}}]),n}(a.Component),h=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null))}}]),n}(a.Component);i.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8c191103.chunk.js.map