(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[13],{191:function(e,a,t){"use strict";var l=t(0),r=t.n(l),c=t(192),o=t(26),n=t(46);a.a=e=>{const{Currency:a}=Object(o.d)(e=>e.InputValue),t=Object(o.c)(),[s,i]=Object(l.useState)(a),m=e=>{switch(e){case"green":return{color:"#71DD37",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"red":return{color:"#FF3E1D",backgroundColor:"#3F3131",fontSize:12,textAlign:"center",borderRadius:20};case"blue":return{color:"#03C3EC",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"yellow":case"input_yellow":return{color:"#FA8C26",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_red":return{color:"#FF3E1D",backgroundColor:"#3F3131",fontSize:12,textAlign:"center",borderRadius:20};case"input_green":return{color:"#71DD37",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_white":return{color:"#FCF9F7",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_blue":return{color:"#03C3EC",backgroundColor:"#06324C",fontSize:12,textAlign:"center",borderRadius:20};default:return"foo"}},d=["$","\xa3","\u0e3f","\u20ac","\xa5","\u20a3","\u20b9"].map((e,a)=>r.a.createElement("option",{key:a,value:e},e));return Object(l.useEffect)(()=>{t(Object(n.f)(s))},[s]),r.a.createElement(r.a.Fragment,null,"input_yellow"===e.color||"input_green"===e.color||"input_red"===e.color||"input_white"===e.color||"input_blue"===e.color?r.a.createElement("div",{style:{width:"80%",marginLeft:"10%"}},r.a.createElement("label",{className:"px-1 ",style:m(e.color)},e.title),"%"===e.val?r.a.createElement("div",{className:"input-group"},r.a.createElement(c.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text ",style:{fontSize:14,borderRadius:"0px 6px 6px 0px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"}},e.val))):r.a.createElement("div",{className:"input-group"},"m"===e.val?r.a.createElement(c.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"6px 6px 6px 6px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("select",{className:"input-group-text ",onChange:e=>{i(e.target.value)},style:{fontSize:14,borderRadius:"6px 0px 0px 6px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"},value:a},d," ")),r.a.createElement(c.a,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"0px 6px 6px 0px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name})))):r.a.createElement("div",{className:""},r.a.createElement("span",{className:"px-2",style:m(e.color)},e.title),r.a.createElement("div",{className:"mt-2",style:{fontSize:13,color:"#CBCBE2"}},e.value)))}},194:function(e,a,t){"use strict";var l=t(0),r=t.n(l);class c extends l.Component{renderSwitch(e){switch(e){case"Price":case"Percent":return{borderRadius:6,boxShadow:"0px 1px 20px 1px #434568"};default:return"foo"}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.props.onClick,style:this.renderSwitch(this.props.title),className:"btn btn-outline-info btn-md px-2.5 py-2"},this.props.value))}}a.a=c},195:function(e,a,t){},233:function(e,a,t){"use strict";var l=t(0),r=t.n(l);class c extends l.Component{renderSwitch(e){switch(e){case"green":return{color:"#71DD37",fontSize:14,borderRadius:20};case"red":return{color:"#FF3E1D",fontSize:14,borderRadius:20};case"blue":return{color:"#03C3EC",fontSize:14,borderRadius:20};default:return"foo"}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""},r.a.createElement("span",{className:"px-2",style:{fontSize:12,color:"#CBCBE2",textAlign:"center"}},this.props.title),r.a.createElement("div",{className:"ml-2 mt-1",style:this.renderSwitch(this.props.color)},this.props.value)))}}a.a=c},235:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function l(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=null;return a.forEach((function(e){if(null==r){var a=e.apply(void 0,t);null!=a&&(r=a)}})),r}return(0,c.default)(l)};var l,r=t(362),c=(l=r)&&l.__esModule?l:{default:l};e.exports=a.default},362:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,l,r,c,o){var n=r||"<<anonymous>>",s=o||l;if(null==t[l])return a?new Error("Required "+c+" `"+s+"` was not specified in `"+n+"`."):null;for(var i=arguments.length,m=Array(i>6?i-6:0),d=6;d<i;d++)m[d-6]=arguments[d];return e.apply(void 0,[t,l,n,c,s].concat(m))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},483:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(191),o=t(233);class n extends l.Component{renderSwitch(e){switch(e){case"yellow":return{color:"#FA8C26",fontSize:15};case"blue":return{color:"#87DFE9",fontSize:15};case"red":return{color:"#FF3E1D",fontSize:15};case"green":return{color:"#71DD37",fontSize:15};case"white":return{color:"#FFFFFF",fontSize:15};default:return"foo"}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"avatar flex-shrink-0 "}),r.a.createElement("div",{className:"d-flex w-100  flex-wrap align-items-center justify-content-between "},r.a.createElement("div",{className:""},r.a.createElement("h6",{className:"mb-0 px-2 py-2"},this.props.title)),r.a.createElement("div",{className:"user-progress d-flex align-items-center"},r.a.createElement("h6",{className:"mb-0",style:this.renderSwitch(this.props.color)},this.props.value))))}}var s=n,i=t(194),m=t(234),d=t.n(m),u=t(26),b=t(192),f=t(2),E=t(3),v=t(17),p=t.n(v),x=(t(235),t(5)),N=t.n(x),y=["as","className","type","tooltip"],F={type:N.a.string,tooltip:N.a.bool,as:N.a.elementType},O=r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,c=e.className,o=e.type,n=void 0===o?"valid":o,s=e.tooltip,i=void 0!==s&&s,m=Object(E.a)(e,y);return r.a.createElement(l,Object(f.a)({},m,{ref:a,className:p()(c,n+"-"+(i?"tooltip":"feedback"))}))}));O.displayName="Feedback",O.propTypes=F;var g=O,h=r.a.createContext({controlId:void 0}),C=t(12),j=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],w=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.className,s=e.type,i=void 0===s?"checkbox":s,m=e.isValid,d=void 0!==m&&m,u=e.isInvalid,b=void 0!==u&&u,v=e.isStatic,x=e.as,N=void 0===x?"input":x,y=Object(E.a)(e,j),F=Object(l.useContext)(h),O=F.controlId,g=F.custom?[o,"custom-control-input"]:[c,"form-check-input"],w=g[0],P=g[1];return c=Object(C.a)(w,P),r.a.createElement(N,Object(f.a)({},y,{ref:a,type:i,id:t||O,className:p()(n,c,d&&"is-valid",b&&"is-invalid",v&&"position-static")}))}));w.displayName="FormCheckInput";var P=w,S=["bsPrefix","bsCustomPrefix","className","htmlFor"],k=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,n=e.htmlFor,s=Object(E.a)(e,S),i=Object(l.useContext)(h),m=i.controlId,d=i.custom?[c,"custom-control-label"]:[t,"form-check-label"],u=d[0],b=d[1];return t=Object(C.a)(u,b),r.a.createElement("label",Object(f.a)({},s,{ref:a,htmlFor:n||m,className:p()(o,t)}))}));k.displayName="FormCheckLabel";var B=k,I=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],R=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.inline,s=void 0!==n&&n,i=e.disabled,m=void 0!==i&&i,d=e.isValid,u=void 0!==d&&d,b=e.isInvalid,v=void 0!==b&&b,x=e.feedbackTooltip,N=void 0!==x&&x,y=e.feedback,F=e.className,O=e.style,j=e.title,w=void 0===j?"":j,S=e.type,k=void 0===S?"checkbox":S,R=e.label,A=e.children,z=e.custom,D=e.as,T=void 0===D?"input":D,_=Object(E.a)(e,I),L="switch"===k||z,V=L?[o,"custom-control"]:[c,"form-check"],K=V[0],M=V[1];c=Object(C.a)(K,M);var G=Object(l.useContext)(h).controlId,J=Object(l.useMemo)((function(){return{controlId:t||G,custom:L}}),[G,L,t]),Q=L||null!=R&&!1!==R&&!A,q=r.a.createElement(P,Object(f.a)({},_,{type:"switch"===k?"checkbox":k,ref:a,isValid:u,isInvalid:v,isStatic:!Q,disabled:m,as:T}));return r.a.createElement(h.Provider,{value:J},r.a.createElement("div",{style:O,className:p()(F,c,L&&"custom-"+k,s&&c+"-inline")},A||r.a.createElement(r.a.Fragment,null,q,Q&&r.a.createElement(B,{title:w},R),(u||v)&&r.a.createElement(g,{type:u?"valid":"invalid",tooltip:N},y))))}));R.displayName="FormCheck",R.Input=P,R.Label=B;var A=R,z=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],D=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.className,s=e.isValid,i=e.isInvalid,m=e.lang,d=e.as,u=void 0===d?"input":d,b=Object(E.a)(e,z),v=Object(l.useContext)(h),x=v.controlId,N=v.custom?[o,"custom-file-input"]:[c,"form-control-file"],y=N[0],F=N[1];return c=Object(C.a)(y,F),r.a.createElement(u,Object(f.a)({},b,{ref:a,id:t||x,type:"file",lang:m,className:p()(n,c,s&&"is-valid",i&&"is-invalid")}))}));D.displayName="FormFileInput";var T=D,_=["bsPrefix","bsCustomPrefix","className","htmlFor"],L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,n=e.htmlFor,s=Object(E.a)(e,_),i=Object(l.useContext)(h),m=i.controlId,d=i.custom?[c,"custom-file-label"]:[t,"form-file-label"],u=d[0],b=d[1];return t=Object(C.a)(u,b),r.a.createElement("label",Object(f.a)({},s,{ref:a,htmlFor:n||m,className:p()(o,t),"data-browse":s["data-browse"]}))}));L.displayName="FormFileLabel";var V=L,K=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],M=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,n=e.disabled,s=void 0!==n&&n,i=e.isValid,m=void 0!==i&&i,d=e.isInvalid,u=void 0!==d&&d,b=e.feedbackTooltip,v=void 0!==b&&b,x=e.feedback,N=e.className,y=e.style,F=e.label,O=e.children,j=e.custom,w=e.lang,P=e["data-browse"],S=e.as,k=void 0===S?"div":S,B=e.inputAs,I=void 0===B?"input":B,R=Object(E.a)(e,K),A=j?[o,"custom"]:[c,"form-file"],z=A[0],D=A[1];c=Object(C.a)(z,D);var _=Object(l.useContext)(h).controlId,L=Object(l.useMemo)((function(){return{controlId:t||_,custom:j}}),[_,j,t]),M=null!=F&&!1!==F&&!O,G=r.a.createElement(T,Object(f.a)({},R,{ref:a,isValid:m,isInvalid:u,disabled:s,as:I,lang:w}));return r.a.createElement(h.Provider,{value:L},r.a.createElement(k,{style:y,className:p()(N,c,j&&"custom-file")},O||r.a.createElement(r.a.Fragment,null,j?r.a.createElement(r.a.Fragment,null,G,M&&r.a.createElement(V,{"data-browse":P},F)):r.a.createElement(r.a.Fragment,null,M&&r.a.createElement(V,null,F),G),(m||u)&&r.a.createElement(g,{type:m?"valid":"invalid",tooltip:v},x))))}));M.displayName="FormFile",M.Input=T,M.Label=V;var G=M,J=(t(59),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),Q=r.a.forwardRef((function(e,a){var t,c,o=e.bsPrefix,n=e.bsCustomPrefix,s=e.type,i=e.size,m=e.htmlSize,d=e.id,u=e.className,b=e.isValid,v=void 0!==b&&b,x=e.isInvalid,N=void 0!==x&&x,y=e.plaintext,F=e.readOnly,O=e.custom,g=e.as,j=void 0===g?"input":g,w=Object(E.a)(e,J),P=Object(l.useContext)(h).controlId,S=O?[n,"custom"]:[o,"form-control"],k=S[0],B=S[1];if(o=Object(C.a)(k,B),y)(c={})[o+"-plaintext"]=!0,t=c;else if("file"===s){var I;(I={})[o+"-file"]=!0,t=I}else if("range"===s){var R;(R={})[o+"-range"]=!0,t=R}else if("select"===j&&O){var A;(A={})[o+"-select"]=!0,A[o+"-select-"+i]=i,t=A}else{var z;(z={})[o]=!0,z[o+"-"+i]=i,t=z}return r.a.createElement(j,Object(f.a)({},w,{type:s,size:m,ref:a,readOnly:F,id:d||P,className:p()(u,t,v&&"is-valid",N&&"is-invalid")}))}));Q.displayName="FormControl";var q=Object.assign(Q,{Feedback:g}),U=["bsPrefix","className","children","controlId","as"],X=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.children,n=e.controlId,s=e.as,i=void 0===s?"div":s,m=Object(E.a)(e,U);t=Object(C.a)(t,"form-group");var d=Object(l.useMemo)((function(){return{controlId:n}}),[n]);return r.a.createElement(h.Provider,{value:d},r.a.createElement(i,Object(f.a)({},m,{ref:a,className:p()(c,t)}),o))}));X.displayName="FormGroup";var $=X,H=["bsPrefix","className","as"],W=["xl","lg","md","sm","xs"],Y=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,o=void 0===c?"div":c,n=Object(E.a)(e,H),s=Object(C.a)(t,"col"),i=[],m=[];return W.forEach((function(e){var a,t,l,r=n[e];if(delete n[e],"object"===typeof r&&null!=r){var c=r.span;a=void 0===c||c,t=r.offset,l=r.order}else a=r;var o="xs"!==e?"-"+e:"";a&&i.push(!0===a?""+s+o:""+s+o+"-"+a),null!=l&&m.push("order"+o+"-"+l),null!=t&&m.push("offset"+o+"-"+t)})),i.length||i.push(s),r.a.createElement(o,Object(f.a)({},n,{ref:a,className:p.a.apply(void 0,[l].concat(i,m))}))}));Y.displayName="Col";var Z=Y,ee=["as","bsPrefix","column","srOnly","className","htmlFor"],ae=r.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"label":t,o=e.bsPrefix,n=e.column,s=e.srOnly,i=e.className,m=e.htmlFor,d=Object(E.a)(e,ee),u=Object(l.useContext)(h).controlId;o=Object(C.a)(o,"form-label");var b="col-form-label";"string"===typeof n&&(b=b+" "+b+"-"+n);var v=p()(i,o,s&&"sr-only",n&&b);return m=m||u,n?r.a.createElement(Z,Object(f.a)({ref:a,as:"label",className:v,htmlFor:m},d)):r.a.createElement(c,Object(f.a)({ref:a,className:v,htmlFor:m},d))}));ae.displayName="FormLabel",ae.defaultProps={column:!1,srOnly:!1};var te=ae,le=["bsPrefix","className","as","muted"],re=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,o=void 0===c?"small":c,n=e.muted,s=Object(E.a)(e,le);return t=Object(C.a)(t,"form-text"),r.a.createElement(o,Object(f.a)({},s,{ref:a,className:p()(l,t,n&&"text-muted")}))}));re.displayName="FormText";var ce=re,oe=r.a.forwardRef((function(e,a){return r.a.createElement(A,Object(f.a)({},e,{ref:a,type:"switch"}))}));oe.displayName="Switch",oe.Input=A.Input,oe.Label=A.Label;var ne=oe,se=t(57),ie=["bsPrefix","inline","className","validated","as"],me=Object(se.a)("form-row"),de=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,c=e.className,o=e.validated,n=e.as,s=void 0===n?"form":n,i=Object(E.a)(e,ie);return t=Object(C.a)(t,"form"),r.a.createElement(s,Object(f.a)({},i,{ref:a,className:p()(c,o&&"was-validated",l&&t+"-inline")}))}));de.displayName="Form",de.defaultProps={inline:!1},de.Row=me,de.Group=$,de.Control=q,de.Check=A,de.File=G,de.Switch=ne,de.Label=te,de.Text=ce;var ue=de;var be=function(e){return console.log(e.type),"text"===e.type?r.a.createElement(ue.Control,{type:"text",style:{color:"white",backgroundColor:"#3B4758"},className:"form-control"}):r.a.createElement(b.a,{thousandSeparator:!0,style:{color:"white",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control"})};t(195);a.default=()=>{let e=Intl.NumberFormat("en-US");const{AAAO1:a,AAAO2:t,EEEO1:n,MMMO1:m,CCCO1:b,EEEO3:f,EEEO2:E,CCCO2:v,GGGO1:p,IIIO1:x,JJJO1:N,Currency:y}=Object(u.d)(e=>e.InputValue),[F,O]=(Object(u.c)(),Object(l.useState)(n)),[g,h]=Object(l.useState)(E),[C,j]=Object(l.useState)(f),[w,P]=Object(l.useState)(0),[S,k]=Object(l.useState)(0),[B,I]=Object(l.useState)(0),[R,A]=Object(l.useState)(0),[z,D]=Object(l.useState)(0),[T,_]=Object(l.useState)(0),[L,V]=Object(l.useState)(0),[K,M]=Object(l.useState)(0),[G,J]=Object(l.useState)(0),[Q,q]=Object(l.useState)(0),[U,X]=Object(l.useState)(0),[$,H]=Object(l.useState)(0),[W,Y]=Object(l.useState)(0),[Z,ee]=Object(l.useState)(0),[ae,te]=Object(l.useState)(0),[le,re]=Object(l.useState)(b),[ce,oe]=Object(l.useState)(m),[ne,se]=Object(l.useState)(0),[ie,me]=Object(l.useState)(0),[de,ue]=Object(l.useState)(0),[fe,Ee]=Object(l.useState)(0),[ve,pe]=Object(l.useState)(0),[xe,Ne]=Object(l.useState)(0),[ye,Fe]=Object(l.useState)(0),[Oe,ge]=Object(l.useState)(0),[he,Ce]=Object(l.useState)(0),[je,we]=Object(l.useState)(0),[Pe,Se]=Object(l.useState)(0);Object(l.useEffect)(()=>{P(.01*a*t&&.01*a*t!==1/0&&.01*a*t!==-1/0?.01*a*t:0),k(a/F/ce&&a/F/ce!==1/0&&a/F/ce!==-1/0?a/F/ce:0),J(le/(F-C)/ce*F*ce&&le/(F-C)/ce*F*ce!=1/0&&le/(F-C)/ce*F*ce!==-1/0?le/(F-C)/ce*F*ce:0),D(le/(F-C)/ce&&le/(F-C)/ce!==1/0&&le/(F-C)/ce!==-1/0?le/(F-C)/ce:0),_(F-le/g/ce&&F-le/g/ce!==1/0&&F-le/g/ce!==-1/0?F-le/g/ce:0),V(1*F+F*v/B&&1*F+F*v/B!==1/0&&1*F+F*v/B!==-1/0?1*F+F*v/B:0),I(F*g*ce&&F*g*ce!==1/0&&F*g*ce!==-1/0?F*g*ce:0),M((g*p-g*F)*ce&&(g*p-g*F)*ce!==1/0&&(g*p-g*F)*ce!==-1/0?(g*p-g*F)*ce:0),q(K/B&&K/B!==1/0&&K/B!==-1/0?K/B:0),ee(F-.01*x*F&&F-.01*x*F!==1/0&&F-.01*x*F!==-1/0?F-.01*x*F:0),te(1*F+F*W/B&&1*F+F*W/B!==1/0&&1*F+F*W/B!==-1/0?1*F+F*W/B:0),H(B*x*.01*-1&&B*x*.01*-1!==1/0&&B*x*.01*-1!==-1/0?B*x*.01*-1:0),A(B-C/F*B&&B-C/F*B!==1/0&&B-C/F*B!==-1/0?B-C/F*B:0),X(K/le&&K/le!==1/0&&K/le!==-1/0?K/le:0),Y(F*g*N*.01*ce&&F*g*N*.01*ce!==1/0&&F*g*N*.01*ce!==-1/0?F*g*N*.01*ce:0),se(C-F),me(p-F),ue(p-C),Ee(K-100)});const ke=e=>{pe(F),Ne(g),Fe(C),1===e?(ge(T),Ce(L)):2===e&&(we(Z),Se(ae))};return r.a.createElement("div",{className:"cursor-pointer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card",style:{borderRadius:"8px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"ml-5",style:{color:"#CBCBE2"}},"Portfolio Strength"),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(c.a,{color:"green",title:"Portfolio Risk",value:y+" "+e.format(w.toFixed(2))})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(c.a,{color:"green",title:"Portfolio Quantity",value:y+" "+e.format(S.toFixed(2))}))))))),r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card",style:{borderRadius:"8px"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"ml-5",style:{color:"#CBCBE2"}},"Price Order Simulator"),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"red",title:"Projected Loss",value:y+" "+e.format(R.toFixed(2))})),r.a.createElement("div",{className:"col-6  mb-4"},r.a.createElement(c.a,{color:"blue",title:"Optimum Quantity",value:e.format(z.toFixed(1))})),r.a.createElement("div",{className:"col-6 mb-4 "},r.a.createElement(c.a,{color:"red",title:"Optimum Stop Price",value:y+" "+e.format(T.toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"green",title:"Take Profit",value:y+" "+e.format((1*L).toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"yellow",title:"Amount Invested",value:y+" "+e.format(B.toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"green",title:"Projected Profit",value:y+" "+e.format(K.toFixed(2))})),r.a.createElement("div",{className:"col-6 mb-4"},r.a.createElement(c.a,{color:"yellow",title:"Cost of Trade",value:y+" "+e.format(G.toFixed(2))})),r.a.createElement("div",{className:"col-6"},r.a.createElement(c.a,{color:"green",title:"Cost of Trade",value:(100*Q).toFixed(0)+"%"}))))))))),r.a.createElement("div",{className:"col-sm-4 "},r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Trade Performance"),r.a.createElement("h6",{style:{color:"#7071A4"}},"Rol ",r.a.createElement("span",{style:{color:"#CBCBE2"}},(100*Q).toFixed(2)," %")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(d.a,{hideText:!0,textColor:"#FFFF",colors:["#FF0000","#0A5D00","#0EFF00"],percent:Q?Q.toFixed(2):0,arcsLength:[.15,.35,.5]})),r.a.createElement("h6",{className:"text-center",style:{color:"#CBCBE2"}},U.toFixed(2),r.a.createElement("span",{style:{fontSize:"20px"}}," X")," "))))))),r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"ml-4",style:{color:"#CBCBE2"}},"Percentage Order Report"),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(o.a,{color:"red",title:"Amount Invested",value:y+" "+e.format(B.toFixed(0))})),r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(o.a,{color:"blue",title:"Ticker Value",value:e.format(ce)})),r.a.createElement("div",{className:"col-4 mb-4 "},r.a.createElement(o.a,{color:"red",title:"Projected Loss",value:y+" "+e.format($.toFixed(2))})),r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(o.a,{color:"green",title:"Projected Profit",value:y+" "+e.format(W.toFixed(2))})),r.a.createElement("div",{className:"col-4 mb-4"},r.a.createElement(o.a,{color:"red",title:"Optimum Stop Price",value:y+" "+e.format(Z.toFixed(2))})),r.a.createElement("div",{className:"col-4"},r.a.createElement(o.a,{color:"green",title:"Profit Target",value:y+" "+e.format((1*ae).toFixed(2))})))))))),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Price Order Plan"),r.a.createElement("ul",{className:"p-0 "},r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"yellow",title:"Buy",value:y+" "+(F&&F!==1/0&&F!==-1/0?e.format(parseFloat(F).toFixed(2)):"0"),img:"a1"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"blue",title:"Qty",value:g&&g!==1/0&&g!==-1/0?e.format(parseFloat(g).toFixed(1)):"0",img:"a2"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"red",title:"Stop ",value:y+" "+e.format(T.toFixed(2)),img:"a3"})),r.a.createElement("li",{className:"d-flex"},r.a.createElement(s,{color:"green",title:"Sell",value:y+" "+e.format((1*L).toFixed(2)),img:"a1"}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement(i.a,{color:"input_green",onClick:()=>ke(1),title:"Percent",value:"Log Plan"})))))))),r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Percentage Order Plan"),r.a.createElement("ul",{className:"p-0"},r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"yellow",title:"Buy",value:y+" "+(F&&F!==1/0&&F!==-1/0?e.format(parseFloat(F).toFixed(2)):"0"),img:"a1"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"blue",title:"Qty",value:g&&g!==1/0&&g!==-1/0?e.format(parseFloat(g).toFixed(1)):"0",img:"a2"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"red",title:"Stop",value:y+" "+e.format(Z.toFixed(2)),img:"a3"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"green",title:"Sell",value:y+" "+e.format((1*ae).toFixed(2)),img:"a1"}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement(i.a,{color:"input_green",onClick:()=>ke(2),title:"Percent",value:"Log Plan"})))))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 mb-1 d-none d-md-block",style:{marginTop:"-30px"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",{className:"card-title"},"Trading Plan Log")),r.a.createElement("div",{className:"col text-right",style:{marginTop:"-7px"}},r.a.createElement(i.a,{color:"input_green",onClick:()=>{pe(0),Ne(0),Fe(0),ge(0),Ce(0),we(0),Se(0)},title:"Percent",value:"Clear Plan"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"table-responsive text-center"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Equity Symbol"),r.a.createElement("th",null,"Buy Price"),r.a.createElement("th",null,"Position Size"),r.a.createElement("th",null,"Stop Price"),r.a.createElement("th",null,"Sell Price"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,r.a.createElement(be,{type:"text"})),r.a.createElement("td",null,e.format(ve.toFixed(2))),r.a.createElement("td",null,e.format(xe.toFixed(2))),r.a.createElement("td",null,e.format(Oe.toFixed(2))),r.a.createElement("td",null,e.format(he.toFixed(2)))),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null," ",r.a.createElement(be,{type:"text"})," "),r.a.createElement("td",null,e.format(ve.toFixed(2))),r.a.createElement("td",null,e.format(xe.toFixed(2))),r.a.createElement("td",null,e.format(je.toFixed(2))),r.a.createElement("td",null,e.format(Pe.toFixed(2)))),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null," ",r.a.createElement(be,{type:"text"})," "),r.a.createElement("td",null,r.a.createElement(be,null)),r.a.createElement("td",null,r.a.createElement(be,null)),r.a.createElement("td",null,r.a.createElement(be,null)),r.a.createElement("td",null,r.a.createElement(be,null))))))))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{color:"#CBCBE2"}},"Trade Analytics"),r.a.createElement("ul",{className:"p-0"},r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"white",title:"Stop Range",value:y+" "+e.format(parseFloat(ne.toFixed(2))),img:"a1"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"white",title:"Profit  Range",value:y+" "+e.format(parseFloat(ie.toFixed(2))),img:"a2"})),r.a.createElement("li",{className:"d-flex mb-1"},r.a.createElement(s,{color:"white",title:"Trading Range",value:y+" "+e.format(parseFloat(de.toFixed(2))),img:"a3"})),r.a.createElement("li",{className:"d-flex "},r.a.createElement(s,{color:"white",title:"Amount Invested",value:y+" "+e.format(parseFloat(B.toFixed(2))),img:"a1"}))))))))))}}}]);
//# sourceMappingURL=13.9c358ad7.chunk.js.map