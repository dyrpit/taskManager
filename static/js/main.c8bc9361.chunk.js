(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),r=a.n(s),i=a(13),c=a.n(i),o=(a(19),a(3)),d=a(8),l=a(9),u=a(11),j=a(10),b=(a(20),function(t){var e=t.onClickHandler,a=t.title,s=t.isDisabled,r=t.buttonStyle||"primary";return Object(n.jsx)("button",{onClick:e,className:"".concat(r),disabled:s,children:a})}),h=(a(21),function(t){var e=t.type,a=t.value,s=t.onChangeHandler,r=t.error,i=t.min,c=t.max,o=t.checked,d={text:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",id:"text",placeholder:"Add task",value:a,onChange:s}),r&&Object(n.jsx)("p",{className:"warning",children:r})]}),date:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:"date",children:"Deadline date:"}),Object(n.jsx)("input",{type:"date",id:"date",min:i,max:c,value:a,onChange:s})]}),checkbox:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{id:"important",type:"checkbox",checked:o,onChange:s}),Object(n.jsx)("label",{children:"Important"})]})};return Object(n.jsx)("div",{className:"input-wrapper",children:d[e]})}),x=(a(22),function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={text:"",date:(new Date).toISOString().substring(0,10),important:!1,error:""},t.handleInputChange=function(e){"checkbox"===e.target.type?t.setState({important:e.target.checked}):"text"===e.target.type?t.setState({text:e.target.value}):"date"===e.target.type&&t.setState({date:e.target.value})},t.handleSubmitButton=function(e){var a=t.state,n=a.text,s=a.date,r=a.important;if(e.preventDefault(),n){var i={id:Date.now(),text:n,active:!0,important:r,date:s,endDate:""};t.props.addTask(i),t.setState({text:"",date:(new Date).toISOString().substring(0,10),important:!1,error:""}),t.props.switchList(!0)}else t.setState({error:"Write task first"})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"menu-wrapper",children:[Object(n.jsx)("h1",{className:"form-title",children:"Tasks Manager"}),Object(n.jsxs)("form",{className:"form-wrapper",noValidate:!0,children:[Object(n.jsx)(h,{type:"text",value:this.state.text,onChangeHandler:function(e){return t.handleInputChange(e)},error:this.state.error}),Object(n.jsx)(h,{type:"date",value:this.state.date,onChangeHandler:function(e){return t.handleInputChange(e)},min:this.state.date,max:"".concat(Number(this.state.date.substring(0,4))+1,"-12-31")}),Object(n.jsx)(h,{type:"checkbox",checked:this.state.important,onChangeHandler:function(e){return t.handleInputChange(e)}}),Object(n.jsx)(b,{title:"Add Task",onClickHandler:function(e){return t.handleSubmitButton(e)}})]})]})}}]),a}(s.Component)),f=(a(23),function(t){var e=t.switchList,a=t.show,s=!!a;return Object(n.jsxs)("div",{className:"sidebar-wrapper",children:[Object(n.jsx)(b,{buttonStyle:"sidebar",isDisabled:!s,onClickHandler:function(){return e(!a)},title:"done"}),Object(n.jsx)(b,{buttonStyle:"sidebar",isDisabled:s,onClickHandler:function(){return e(!a)},title:"active"})]})}),p=a(2),O=(a(24),function(t){var e=t.searchTask,a=t.sortTasks,r=Object(s.useState)(!1),i=Object(p.a)(r,2),c=i[0],o=i[1],d=Object(s.useState)(!1),l=Object(p.a)(d,2),u=l[0],j=l[1],h=Object(s.useState)(""),x=Object(p.a)(h,2),f=x[0],O=x[1],k=c?"open":"";return Object(n.jsxs)("div",{className:"sortbar-tooltip ".concat(k),children:[Object(n.jsxs)("div",{className:"sortbar-pin-wrapper",onClick:function(){o((function(t){return!t}))},children:[Object(n.jsx)("div",{className:"sortbar-pin"}),Object(n.jsx)("div",{className:"sortbar-pin"}),Object(n.jsx)("div",{className:"sortbar-pin"})]}),Object(n.jsxs)("div",{className:"sortbar-content-wrapper ".concat(k),children:[Object(n.jsx)("input",{className:"sortbar-input",type:"text",placeholder:"Search...",value:f,onChange:function(t){var a=t.target.value||"";O(a),e(a)}}),Object(n.jsx)(b,{title:"sort by add date",buttonStyle:"sortbar",onClickHandler:function(){j((function(t){return!t})),a("index",u)}}),Object(n.jsx)(b,{title:"sort by deadline date",buttonStyle:"sortbar",onClickHandler:function(){j((function(t){return!t})),a("deadline",u)}}),Object(n.jsx)(b,{title:"sort by end date",buttonStyle:"sortbar",onClickHandler:function(){j((function(t){return!t})),a("end",u)}})]})]})}),k=(a(25),a(26),function(t,e){return e&&e.length?t.filter((function(t){return t.text.toLowerCase().includes(e.toLowerCase())})):t}),m=function(t,e,a){return"index"===e?t.sort((function(t,e){return a?t.id-e.id:e.id-t.id})):"deadline"===e?t.sort((function(t,e){var n=new Date(t.date).getTime(),s=new Date(e.date).getTime();return a?s-n:n-s})):"end"===e?t.sort((function(t,e){var n=new Date(t.endDate).getTime(),s=new Date(e.endDate).getTime();return a?s-n:n-s})):void 0},v=function(t){var e=function(t){var e=new Date(t).getTime()-Date.now();return Math.ceil(e/864e5)}(t.date),a="",s="days left";return e<0?(a=Object(n.jsx)("i",{className:"far fa-frown"}),e=Math.abs(e),s="days after deadline"):a=e>0?Object(n.jsx)("i",{className:"far fa-smile"}):Object(n.jsx)("i",{className:"far fa-meh"}),Object(n.jsxs)("div",{className:"tooltip",children:[a,Object(n.jsxs)("div",{className:"tooltiptext",children:[e," ",s]}),Object(n.jsx)("div",{className:"tooltiparrow"})]})},g=a(5),S=a(6),T=(a(27),function(t){var e=t.addTask,a=t.handleModalOpen,r=t.isOpen,i=t.task,c=Object(s.useState)({text:i.text,date:i.date,important:i.important}),o=Object(p.a)(c,2),d=o[0],l=o[1],u=r?"open":"",j=function(t){var e=t.target,a=e.value,n=e.id;l("important"===n?function(t){return Object(S.a)(Object(S.a)({},t),{},Object(g.a)({},n,!d.important))}:function(t){return Object(S.a)(Object(S.a)({},t),{},Object(g.a)({},n,a))})};return Object(n.jsx)("div",{className:"modal-background ".concat(u),children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)(b,{title:"x",buttonStyle:"close",onClickHandler:a}),Object(n.jsx)("h3",{className:"modal-title",children:"Edit task"}),Object(n.jsxs)("form",{className:"modal-form-wrapper",noValidate:!0,children:[Object(n.jsx)(h,{type:"text",value:d.text,onChangeHandler:j}),Object(n.jsx)(h,{type:"date",value:d.date,onChangeHandler:j,min:(new Date).toISOString().substring(0,10),max:"".concat(Number((new Date).toISOString().substring(0,10).substring(0,4))+1,"-12-31")}),Object(n.jsx)(h,{type:"checkbox",checked:d.important,onChangeHandler:j}),Object(n.jsx)(b,{title:"Add Task",onClickHandler:function(t){var n=d.text,s=d.date,r=d.important;t.preventDefault();var c={id:i.id,text:i.text,date:i.date,active:!0,important:i.important,endDate:""};i.text!==n&&n&&(c.text=n),i.date!==s&&s&&(c.date=s),i.important!==r&&(c.important=r),e(c),a(),l({text:c.text,date:c.date,important:c.important})}})]})]})})}),w=(a(28),function(t){var e=t.addTask,a=t.deleteTask,r=t.index,i=t.setDoneTask,c=t.setUndoneTask,d=t.task,l=Object(s.useState)(!1),u=Object(p.a)(l,2),j=u[0],h=u[1],x=Object(s.useState)(!1),f=Object(p.a)(x,2),O=f[0],k=f[1],m=d.active,g=d.important&&m?"important":"",S=j?"deleted":"",w=function(){Object(o.a)(document.getElementsByTagName("body"))[0].classList.toggle("disable-scroll"),k((function(t){return!t}))};return Object(n.jsxs)(n.Fragment,{children:[O&&Object(n.jsx)(T,{isOpen:O,handleModalOpen:w,task:d,addTask:e}),Object(n.jsxs)("div",{className:"task-wrapper ".concat(g," ").concat(S),children:[Object(n.jsx)("span",{className:"task-index",children:r+1}),Object(n.jsxs)("p",{className:"task-text",children:[Object(n.jsxs)("span",{className:"task-title",children:['"',d.text,'"']}),Object(n.jsx)("span",{children:m?" - do until: ":" - Done: "}),Object(n.jsx)("em",{className:"task-date",children:m?"".concat(d.date," "):"".concat(d.endDate)})]}),m?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{date:d.date}),Object(n.jsx)(b,{title:"done",onClickHandler:function(){i(d.id)},isDisabled:j}),Object(n.jsx)(b,{title:"edit",onClickHandler:w,isDisabled:j})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(b,{title:"undone",onClickHandler:function(){c(d.id)}})}),Object(n.jsx)(b,{title:"x",onClickHandler:function(){h(!0),setTimeout((function(){return a(d.id)}),3e3)},buttonStyle:"close",isDisabled:j})]})]})}),y=function(t){var e=t.addTask,a=t.deleteTask,s=t.setDoneTask,r=t.setUndoneTask,i=t.show,c=t.tasks;return c=i?c.filter((function(t){return t.active})):c.filter((function(t){return!t.active})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"tasklist-wrapper",children:Object(n.jsxs)("div",{className:"tasks-wrapper",children:[Object(n.jsx)("h2",{className:"tasks-title",children:i?"Active tasks":"Done tasks"}),c.length?null:Object(n.jsx)("h3",{className:"tasks-info",children:"No tasks yet.."}),c.map((function(t,i){return Object(n.jsx)(w,{index:i,task:t,addTask:e,deleteTask:a,setDoneTask:s,setUndoneTask:r},t.id)}))]})})})},N="tasks",D=function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={tasks:[],show:!0,filtered:[]},t.addTask=function(e){if(t.state.tasks.findIndex((function(t){return t.id===e.id}))>-1){var a=t.state.tasks.map((function(t){return t.id===e.id?e:t}));t.setState({tasks:a,filtered:a})}else{var n=[].concat(Object(o.a)(t.state.tasks),[e]);t.setState({tasks:n,filtered:n})}},t.deleteTask=function(e){var a=t.state.tasks.filter((function(t){return t.id!==e}));t.setState({tasks:a,filtered:a})},t.searchTask=function(e){var a=k(t.state.tasks,e);t.setState({filtered:a})},t.setDoneTask=function(e){var a=Object(o.a)(t.state.tasks),n=(new Date).toISOString();a.forEach((function(t){t.id===e&&(t.active=!1,t.endDate=n.substring(0,10)+" "+n.substring(11,19))})),t.setState({tasks:a,filtered:a})},t.setUndoneTask=function(e){var a=Object(o.a)(t.state.tasks);a.forEach((function(t){t.id===e&&(t.active=!0,t.endDate="")})),t.setState({tasks:a,filtered:a})},t.sortTasks=function(e,a){var n=m(t.state.filtered,e,a);t.setState({filtered:n})},t.switchList=function(e){t.setState({show:e})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem(N);t&&this.setState({tasks:JSON.parse(t),filtered:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(N,JSON.stringify(this.state.tasks))}},{key:"render",value:function(){var t=this.state,e=t.show,a=t.filtered;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{addTask:this.addTask,switchList:this.switchList}),Object(n.jsx)(f,{switchList:this.switchList,show:e}),Object(n.jsx)(O,{sortTasks:this.sortTasks,searchTask:this.searchTask}),Object(n.jsx)(y,{tasks:a,show:e,addTask:this.addTask,deleteTask:this.deleteTask,setDoneTask:this.setDoneTask,setUndoneTask:this.setUndoneTask})]})}}]),a}(s.Component);c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c8bc9361.chunk.js.map