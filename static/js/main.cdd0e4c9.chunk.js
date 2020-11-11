(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(1),c=a.n(n),i=a(10),r=a.n(i),o=(a(17),a(9)),l=a(4),d=a(5),j=a(7),u=a(6),h=(a(18),function(t){var e=t.onClickHandler,a=t.title,n=t.isDisabled,c=t.buttonStyle||"primary";return Object(s.jsx)("button",{onClick:e,className:"".concat(c),disabled:n,children:a})}),b=(a(19),function(t){var e=t.type,a=t.value,n=t.onChangeHandler,c=t.error,i=t.min,r=t.max,o=t.checked,l={text:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Add task",value:a,onChange:n}),c&&Object(s.jsx)("p",{className:"warning",children:c})]}),date:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{htmlFor:"date",children:"Deadline date:"}),Object(s.jsx)("input",{type:"date",id:"date",min:i,max:r,value:a,onChange:n})]}),checkbox:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{id:"checkbox",type:"checkbox",checked:o,onChange:n}),Object(s.jsx)("label",{htmlFor:"checkbox",children:"Important"})]})};return Object(s.jsx)("div",{className:"input-wrapper",children:l[e]})}),p=(a(20),function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={text:"",date:(new Date).toISOString().substring(0,10),important:!1,error:""},t.handleInputChange=function(e){"checkbox"===e.target.type?t.setState({important:e.target.checked}):"text"===e.target.type?t.setState({text:e.target.value}):"date"===e.target.type&&t.setState({date:e.target.value})},t.handleSubmitButton=function(e){var a=t.state,s=a.text,n=a.date,c=a.important;if(e.preventDefault(),s){var i={id:Date.now(),text:s,active:!0,important:c,date:n,endDate:""};t.props.addTask(i),t.setState({text:"",date:(new Date).toISOString().substring(0,10),important:!1,error:""}),t.props.switchList(!0)}else t.setState({error:"Write task first"})},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"menu-wrapper",children:[Object(s.jsx)("h1",{className:"form-title",children:"Add your task"}),Object(s.jsxs)("form",{className:"form-wrapper",noValidate:!0,children:[Object(s.jsx)(b,{type:"text",value:this.state.text,onChangeHandler:function(e){return t.handleInputChange(e)},error:this.state.error}),Object(s.jsx)(b,{type:"date",value:this.state.date,onChangeHandler:function(e){return t.handleInputChange(e)},min:this.state.date,max:"".concat(Number(this.state.date.substring(0,4))+1,"-12-31")}),Object(s.jsx)(b,{type:"checkbox",checked:this.state.important,onChangeHandler:function(e){return t.handleInputChange(e)}}),Object(s.jsx)(h,{title:"Add Task",onClickHandler:function(e){return t.handleSubmitButton(e)}})]})]})}}]),a}(n.Component)),x=(a(21),function(t){var e=t.switchList,a=t.show,n=!!a;return Object(s.jsxs)("div",{className:"sidebar-wrapper",children:[Object(s.jsx)(h,{buttonStyle:"sidebar",isDisabled:!n,onClickHandler:function(){return e(!a)},title:"done"}),Object(s.jsx)(h,{buttonStyle:"sidebar",isDisabled:n,onClickHandler:function(){return e(!a)},title:"active"})]})}),k=(a(22),a(11)),O=(a(23),function(t){var e=t.date,a=new Date(e).getTime()-Date.now(),n=Math.ceil(a/864e5),c="";return c=n<0?Object(s.jsx)("i",{class:"far fa-frown"}):n>0?Object(s.jsx)("i",{class:"far fa-smile"}):Object(s.jsx)("i",{class:"far fa-meh"}),Object(s.jsxs)("div",{className:"tooltip",children:[c,Object(s.jsxs)("div",{className:"tooltiptext",children:[n," days left"]}),Object(s.jsx)("div",{className:"tooltiparrow"})]})}),m=(a(24),function(t){var e=t.task,a=t.deleteTask,c=t.setDoneTask,i=Object(n.useState)(!1),r=Object(k.a)(i,2),o=r[0],l=r[1],d=e.active,j=e.important?"important":"",u=o?"deleted":"",b=function(){l(!0),setTimeout((function(){return a(e.id)}),3e3)};return Object(s.jsx)(s.Fragment,{children:d?Object(s.jsxs)("div",{className:"task-wrapper ".concat(j," ").concat(u),children:[Object(s.jsxs)("p",{className:"task-text",children:[Object(s.jsxs)("span",{className:"task-title",children:['"',e.text,'"']})," - do until:"," ",Object(s.jsx)("em",{className:"task-date",children:e.date})]}),Object(s.jsx)(O,{date:e.date}),Object(s.jsx)(h,{title:"done",onClickHandler:function(){return c(e.id)},isDisabled:o}),Object(s.jsx)(h,{title:"x",onClickHandler:b,isDisabled:o})]}):Object(s.jsxs)("div",{className:"task-wrapper ".concat(u),children:[Object(s.jsxs)("p",{className:"task-text",children:[Object(s.jsxs)("span",{className:"task-title",children:['"',e.text,'"']})," - Done:"," ",Object(s.jsx)("em",{className:"task-date",children:e.endDate})]}),Object(s.jsx)(h,{title:"x",onClickHandler:b,isDisabled:o})]})})}),f=function(t){var e=t.tasks,a=t.deleteTask,n=t.setDoneTask,c=t.show;return e=c?e.filter((function(t){return t.active})):e.filter((function(t){return!t.active})),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"tasklist-wrapper",children:Object(s.jsxs)("div",{className:"tasks-wrapper",children:[Object(s.jsx)("h2",{className:"tasks-title",children:c?"Active tasks":"Done tasks"}),e.length?null:Object(s.jsx)("h3",{className:"tasks-info",children:"No tasks yet.."}),e.map((function(t){return Object(s.jsx)(m,{task:t,deleteTask:a,setDoneTask:n},t.id)}))]})})})},v="tasks",g=function(t){Object(j.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={tasks:[],show:!0},t.addTask=function(e){var a=[].concat(Object(o.a)(t.state.tasks),[e]);t.setState({tasks:a})},t.deleteTask=function(e){var a=t.state.tasks.filter((function(t){return t.id!==e}));t.setState({tasks:a})},t.setDoneTask=function(e){var a=Object(o.a)(t.state.tasks),s=(new Date).toISOString();a.forEach((function(t){t.id===e&&(t.active=!1,t.endDate=s.substring(0,10)+" "+s.substring(11,19))})),t.setState({tasks:a})},t.switchList=function(e){t.setState({show:e})},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem(v);t&&this.setState({tasks:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(v,JSON.stringify(this.state.tasks))}},{key:"render",value:function(){var t=this.state,e=t.show,a=t.tasks;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{addTask:this.addTask,switchList:this.switchList}),Object(s.jsx)(x,{switchList:this.switchList,show:e}),Object(s.jsx)(f,{tasks:a,show:e,deleteTask:this.deleteTask,setDoneTask:this.setDoneTask})]})}}]),a}(n.Component);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.cdd0e4c9.chunk.js.map