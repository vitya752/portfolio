(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/paris.e94190b3.jpg"},16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),i=n.n(r),c=n(10),l=n(4),u=n(5),s=n(7),m=n(6),d=n(8),f=(n(21),n(2),n(22),function(e){var t=e.text;return o.a.createElement("h1",{className:"text-center"},t)}),p=function(e){var t=e.onSeachChange;return o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},"Search")),o.a.createElement("input",{type:"text",className:"form-control",onChange:t}))},g=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],b=function(e){var t=e.filter,n=e.onFilterChange,a=g.map((function(e){var a=e.name,r=e.label,i="btn btn-dark"+(t===a?" active":"");return o.a.createElement("button",{key:a,className:i,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group mb-3"},a)},h=function(e){var t=e.onSearchChange,n=e.filter,a=e.onFilterChange;return o.a.createElement("div",{className:"navigation-panel d-flex"},o.a.createElement(p,{onSeachChange:t}),o.a.createElement(b,{filter:n,onFilterChange:a}))},v=["First list-item","I like smoking","I like coding","My favorite framework is ReactJS"],E=(n(23),n(14)),I=n(9),C=function(e){var t=e.data,n=e.important,a=e.done,r=e.onToggleImportant,i=e.onToggleDone,c=e.onItemDelete,l=n?"active":null,u=a?"doneItem":null,s=[{classNames:"btn btn-primary",onClickFunction:r,fontAwesomeIcon:I.b},{classNames:"btn btn-success btn-done",onClickFunction:i,fontAwesomeIcon:I.a},{classNames:"btn btn-danger",onClickFunction:c,fontAwesomeIcon:I.c}].map((function(e){return o.a.createElement("button",{type:"button",className:e.classNames,onClick:e.onClickFunction},o.a.createElement(E.a,{icon:e.fontAwesomeIcon}))}));return o.a.createElement("li",{className:"list-group-item list-group-item--custom ".concat(l," ").concat(u)},t,o.a.createElement("div",{className:"float-right buttons-wrap"},s))},N=(n(29),function(e){var t=e.data,n=e.onToggleImportant,a=e.onToggleDone,r=e.onItemDelete,i=t.map((function(e){return o.a.createElement(C,{key:e.id,data:e.text,important:e.important,done:e.done,onToggleImportant:function(){return n(e.id)},onToggleDone:function(){return a(e.id)},onItemDelete:function(){return r(e.id)}})})),c=i||o.a.createElement("p",null,"\u041d\u0435\u0442\u0443 \u0434\u0435\u043b");return o.a.createElement("div",{className:"jumbotron jumbotron--custom mb-3"},o.a.createElement("ul",{className:"list-group"},c))}),S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={inputValue:"",disableSubmit:!0},n.validateInput=function(e){n.setState({inputValue:e.target.value,disableSubmit:""===e.target.value})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onItemAdd;return o.a.createElement("form",{className:"d-flex",onSubmit:function(n){n.preventDefault(),t(e.state.inputValue),e.setState({inputValue:""})}},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},"New item")),o.a.createElement("input",{type:"text",value:this.state.inputValue,onChange:this.validateInput,className:"form-control"})),o.a.createElement("button",{type:"submit",className:"btn btn-dark mb-3",disabled:this.state.disableSubmit},"Add"))}}]),t}(a.Component),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).maxId=100,e.onItemCreate=function(t){return{id:e.maxId++,text:t,important:!1,done:!1}},e.onSearchChange=function(t){e.setState({searchValue:t.target.value})},e.onSearch=function(e,t){return 0===t.length?e:e.filter((function(e){return!1!==e.text.toLowerCase().includes(t.toLowerCase())}))},e.onFilterChange=function(t){e.setState({filter:t})},e.onFilter=function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!0!==e.done}));case"done":return e.filter((function(e){return!0===e.done}))}},e.onToggle=function(t,n){e.setState((function(e){var a=e.todoList,o=a.findIndex((function(e){return e.id===t}));return{todoList:a.map((function(e,t){return t===o&&(e[n]=!e[n]),e}))}}))},e.onItemDelete=function(t){e.setState((function(e){var n=e.todoList,a=n.findIndex((function(e){return e.id===t}));return{todoList:[].concat(Object(c.a)(n.slice(0,a)),Object(c.a)(n.slice(a+1)))}}))},e.onItemAddFromForm=function(t){e.setState((function(n){n.todoList;var a=e.onItemCreate(t);return{todoList:[].concat(Object(c.a)(e.state.todoList),[a])}}))},e.state={todoList:v.map((function(t){return e.onItemCreate(t)})),searchValue:"",filter:"active"},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.imageUrl,n=this.state,a=n.todoList,r=n.searchValue,i=n.filter,c={backgroundImage:"url(".concat(t,")")},l=this.onSearch(this.onFilter(a,i),r);return o.a.createElement("div",{className:"main-container main-container--dark-bg",style:c},o.a.createElement("div",{className:"container container--custom"},o.a.createElement(f,{text:"Welcome to my TodoList App"}),o.a.createElement(h,{onSearchChange:this.onSearchChange,filter:this.state.filter,onFilterChange:this.onFilterChange}),o.a.createElement(N,{data:l,onToggleImportant:function(t){return e.onToggle(t,"important")},onToggleDone:function(t){return e.onToggle(t,"done")},onItemDelete:this.onItemDelete}),o.a.createElement(S,{onItemAdd:this.onItemAddFromForm})))}}]),t}(a.Component),x=n(15),w=n.n(x);i.a.render(o.a.createElement(k,{imageUrl:w.a}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2f3fb54f.chunk.js.map