(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),c=a.n(s),i=a(13),r=a.n(i),o=(a(19),a(2)),d=a(8),l=a(9),j=a(11),u=a(10),b=(a(20),function(t){var e=t.onClickHandler,a=t.title,s=t.isDisabled,c=t.buttonStyle||"primary";return Object(n.jsx)("button",{onClick:e,className:"".concat(c),disabled:s,children:a})}),h=(a(21),function(t){var e=t.type,a=t.value,s=t.onChangeHandler,c=t.error,i=t.min,r=t.max,o=t.checked,d={text:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",id:"text",placeholder:"Add task",value:a,onChange:s}),c&&Object(n.jsx)("p",{className:"warning",children:c})]}),date:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:"date",children:"Deadline date:"}),Object(n.jsx)("input",{type:"date",id:"date",min:i,max:r,value:a,onChange:s})]}),checkbox:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{id:"important",type:"checkbox",checked:o,onChange:s}),Object(n.jsx)("label",{children:"Important"})]})};return Object(n.jsx)("div",{className:"input-wrapper",children:d[e]})}),x=(a(22),function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={text:"",date:(new Date).toISOString().substring(0,10),important:!1,error:""},t.handleInputChange=function(e){"checkbox"===e.target.type?t.setState({important:e.target.checked}):"text"===e.target.type?t.setState({text:e.target.value}):"date"===e.target.type&&t.setState({date:e.target.value})},t.handleSubmitButton=function(e){var a=t.state,n=a.text,s=a.date,c=a.important;if(e.preventDefault(),n){var i={id:Date.now(),text:n,active:!0,important:c,date:s,endDate:""};t.props.addTask(i),t.setState({text:"",date:(new Date).toISOString().substring(0,10),important:!1,error:""}),t.props.switchList(!0)}else t.setState({error:"Write task first"})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"menu-wrapper",children:[Object(n.jsx)("h1",{className:"form-title",children:"Tasks Manager"}),Object(n.jsxs)("form",{className:"form-wrapper",noValidate:!0,children:[Object(n.jsx)(h,{type:"text",value:this.state.text,onChangeHandler:function(e){return t.handleInputChange(e)},error:this.state.error}),Object(n.jsx)(h,{type:"date",value:this.state.date,onChangeHandler:function(e){return t.handleInputChange(e)},min:this.state.date,max:"".concat(Number(this.state.date.substring(0,4))+1,"-12-31")}),Object(n.jsx)(h,{type:"checkbox",checked:this.state.important,onChangeHandler:function(e){return t.handleInputChange(e)}}),Object(n.jsx)(b,{title:"Add Task",onClickHandler:function(e){return t.handleSubmitButton(e)}})]})]})}}]),a}(s.Component)),p=(a(23),function(t){var e=t.switchList,a=t.show,s=!!a;return Object(n.jsxs)("div",{className:"sidebar-wrapper",children:[Object(n.jsx)(b,{buttonStyle:"sidebar",isDisabled:!s,onClickHandler:function(){return e(!a)},title:"done"}),Object(n.jsx)(b,{buttonStyle:"sidebar",isDisabled:s,onClickHandler:function(){return e(!a)},title:"active"})]})}),k=(a(24),a(5)),m=(a(25),function(t){var e=t.date,a=new Date(e).getTime()-Date.now(),s=Math.ceil(a/864e5),c="",i="days left";return s<0?(c=Object(n.jsx)("i",{className:"far fa-frown"}),s=Math.abs(s),i="days after deadline"):c=s>0?Object(n.jsx)("i",{className:"far fa-smile"}):Object(n.jsx)("i",{className:"far fa-meh"}),Object(n.jsxs)("div",{className:"tooltip",children:[c,Object(n.jsxs)("div",{className:"tooltiptext",children:[s," ",i]}),Object(n.jsx)("div",{className:"tooltiparrow"})]})}),O=a(4),f=a(6),v=(a(26),function(t){var e=t.addTask,a=t.handleModalOpen,c=t.isOpen,i=t.task,r=Object(s.useState)({text:i.text,date:i.date,important:i.important}),o=Object(k.a)(r,2),d=o[0],l=o[1],j=c?"open":"",u=function(t){var e=t.target,a=e.value,n=e.id;l("important"===n?function(t){return Object(f.a)(Object(f.a)({},t),{},Object(O.a)({},n,!d.important))}:function(t){return Object(f.a)(Object(f.a)({},t),{},Object(O.a)({},n,a))})};return Object(n.jsx)("div",{className:"modal-background ".concat(j),children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)(b,{title:"x",buttonStyle:"close",onClickHandler:a}),Object(n.jsx)("h3",{className:"modal-title",children:"Edit task"}),Object(n.jsxs)("form",{className:"modal-form-wrapper",noValidate:!0,children:[Object(n.jsx)(h,{type:"text",value:d.text,onChangeHandler:u}),Object(n.jsx)(h,{type:"date",value:d.date,onChangeHandler:u,min:(new Date).toISOString().substring(0,10),max:"".concat(Number((new Date).toISOString().substring(0,10).substring(0,4))+1,"-12-31")}),Object(n.jsx)(h,{type:"checkbox",checked:d.important,onChangeHandler:u}),Object(n.jsx)(b,{title:"Add Task",onClickHandler:function(t){var n=d.text,s=d.date,c=d.important;t.preventDefault();var r={id:i.id,text:i.text,date:i.date,active:!0,important:i.important,endDate:""};i.text!==n&&n&&(r.text=n),i.date!==s&&s&&(r.date=s),i.important!==c&&(r.important=c),e(r),a(),l({text:r.text,date:r.date,important:r.important})}})]})]})})}),g=(a(27),function(t){var e=t.addTask,a=t.deleteTask,c=t.setDoneTask,i=t.setUndoneTask,r=t.task,d=Object(s.useState)(!1),l=Object(k.a)(d,2),j=l[0],u=l[1],h=Object(s.useState)(!1),x=Object(k.a)(h,2),p=x[0],O=x[1],f=r.active,g=r.important?"important":"",w=j?"deleted":"",S=function(){u(!0),setTimeout((function(){return a(r.id)}),3e3)},N=function(){Object(o.a)(document.getElementsByTagName("body"))[0].classList.toggle("disable-scroll"),O((function(t){return!t}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{isOpen:p,handleModalOpen:N,task:r,addTask:e}),f?Object(n.jsxs)("div",{className:"task-wrapper ".concat(g," ").concat(w),children:[Object(n.jsxs)("p",{className:"task-text",children:[Object(n.jsxs)("span",{className:"task-title",children:['"',r.text,'"']})," - do until:"," ",Object(n.jsx)("em",{className:"task-date",children:r.date})]}),Object(n.jsx)(m,{date:r.date}),Object(n.jsx)(b,{title:"done",onClickHandler:function(){c(r.id)},isDisabled:j}),Object(n.jsx)(b,{title:"edit",onClickHandler:N,isDisabled:j}),Object(n.jsx)(b,{title:"x",onClickHandler:S,buttonStyle:"close",isDisabled:j})]}):Object(n.jsxs)("div",{className:"task-wrapper ".concat(w),children:[Object(n.jsxs)("p",{className:"task-text",children:[Object(n.jsxs)("span",{className:"task-title",children:['"',r.text,'"']})," - Done:"," ",Object(n.jsx)("em",{className:"task-date",children:r.endDate})]}),Object(n.jsx)(b,{title:"undone",onClickHandler:function(){i(r.id)}}),Object(n.jsx)(b,{title:"x",onClickHandler:S,isDisabled:j})]})]})}),w=function(t){var e=t.addTask,a=t.deleteTask,s=t.setDoneTask,c=t.setUndoneTask,i=t.show,r=t.tasks;return r=i?r.filter((function(t){return t.active})):r.filter((function(t){return!t.active})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"tasklist-wrapper",children:Object(n.jsxs)("div",{className:"tasks-wrapper",children:[Object(n.jsx)("h2",{className:"tasks-title",children:i?"Active tasks":"Done tasks"}),r.length?null:Object(n.jsx)("h3",{className:"tasks-info",children:"No tasks yet.."}),r.map((function(t){return Object(n.jsx)(g,{task:t,addTask:e,deleteTask:a,setDoneTask:s,setUndoneTask:c},t.id)}))]})})})},S="tasks",N=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={tasks:[],show:!0},t.addTask=function(e){if(t.state.tasks.findIndex((function(t){return t.id===e.id}))>-1){var a=t.state.tasks.map((function(t){return t.id===e.id?e:t}));t.setState({tasks:a})}else{var n=[].concat(Object(o.a)(t.state.tasks),[e]);t.setState({tasks:n})}},t.deleteTask=function(e){var a=t.state.tasks.filter((function(t){return t.id!==e}));t.setState({tasks:a})},t.setDoneTask=function(e){var a=Object(o.a)(t.state.tasks),n=(new Date).toISOString();a.forEach((function(t){t.id===e&&(t.active=!1,t.endDate=n.substring(0,10)+" "+n.substring(11,19))})),t.setState({tasks:a})},t.setUndoneTask=function(e){var a=Object(o.a)(t.state.tasks);a.forEach((function(t){t.id===e&&(t.active=!0,t.endDate="")})),t.setState({tasks:a})},t.switchList=function(e){t.setState({show:e})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem(S);t&&this.setState({tasks:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(S,JSON.stringify(this.state.tasks))}},{key:"render",value:function(){var t=this.state,e=t.show,a=t.tasks;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{addTask:this.addTask,switchList:this.switchList}),Object(n.jsx)(p,{switchList:this.switchList,show:e}),Object(n.jsx)(w,{tasks:a,show:e,addTask:this.addTask,deleteTask:this.deleteTask,setDoneTask:this.setDoneTask,setUndoneTask:this.setUndoneTask})]})}}]),a}(s.Component);r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.00b5d96d.chunk.js.map