(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[21],{476:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(20),l=t(213),c=t(214),s=t(482),i=(t(206),t(207));const m=r.a.createElement(l.a,{icon:c.a});a.default=()=>{const[e,a]=Object(o.useState)(""),[t,l]=Object(o.useState)(!1),[c,d]=Object(o.useState)(!1),[g,u]=Object(o.useState)(!1),[p,b]=Object(o.useState)(""),[w,E]=Object(o.useState)(""),N=(e,a)=>{1===e?b(a):2===e&&E(a)};return r.a.createElement("div",null,r.a.createElement(i.NotificationContainer,null),r.a.createElement("div",{className:"d-flex align-items-center auth px-0"},r.a.createElement("div",{className:"row w-100 mx-0"},r.a.createElement("div",{className:"col-lg-4 mx-auto"},t?r.a.createElement("div",{className:"card text-left py-5 px-5 px-sm-5",style:{backgroundColor:"#1a1a34"}},r.a.createElement("h4",{className:"mb-4"},"Please input your new Password"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("div",{className:"input-group"},c?r.a.createElement("input",{type:"text",value:p,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>N(1,e.target.value),placeholder:"Password"}):r.a.createElement("input",{type:"password",value:p,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>N(1,e.target.value),placeholder:"Password"}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{onClick:()=>{d(!c)},style:{cursor:"pointer",zIndex:"1",color:"#d1d1d1"}},m)))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("div",{className:"input-group"},g?r.a.createElement("input",{type:"text",value:w,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>N(2,e.target.value),placeholder:"Confirm Password"}):r.a.createElement("input",{type:"password",value:w,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>N(2,e.target.value),placeholder:"Confirm Password"}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{onClick:()=>{u(!g)},style:{cursor:"pointer",zIndex:"1",color:"#d1d1d1"}},m)))))),r.a.createElement("div",{className:"mt-3"},r.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",onClick:()=>{p||w||p===w?(console.log(e),s.a.post("/api/users/newpass",{email:e,pass:p}).then(e=>{e.data&&(i.NotificationManager.success(e.data,"Success"),window.location="/login")}).catch(e=>{e&&alert(e)})):p&&void 0!==p&&""!==p?w&&void 0!==w&&""!==w?p!==w&&i.NotificationManager.warning("Passwords don't match!","Warning"):i.NotificationManager.warning("Confirm Password!","Warning"):i.NotificationManager.warning("Invaild Password","Warning")}},"Confirm")),r.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Please go on Login\xa0\xa0\xa0\xa0 ",r.a.createElement(n.b,{to:"/login",className:"text-primary"},"Login"))):r.a.createElement("div",{className:"card text-left py-5 px-5 px-sm-5",style:{backgroundColor:"#1a1a34"}},r.a.createElement("h4",{className:"mb-4"},"Enter your email to reset password"),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("input",{type:"email",value:e,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",placeholder:"Email",onChange:e=>{a(e.target.value)}})),r.a.createElement("div",{className:"mt-3"},r.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",onClick:()=>{/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e)?e&&s.a.post("/api/users/forgotpass",{email:e}).then(e=>{"User is not exist"===e.data?(i.NotificationManager.warning(e.data,"Failure"),alert(e.data)):l(!t)}):i.NotificationManager.warning("Please enter a valid email address","Warning")}},"Submit")),r.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Please go on Login\xa0\xa0\xa0\xa0 ",r.a.createElement(n.b,{to:"/login",className:"text-primary"},"Login")))))))}}}]);
//# sourceMappingURL=21.648276f0.chunk.js.map