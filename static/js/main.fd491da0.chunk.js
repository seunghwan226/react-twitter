(this["webpackJsonpreact-twitter"]=this["webpackJsonpreact-twitter"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(50),s=n.n(r),i=n(11),u=n(36),o=n(15),j=n(0),l=n.n(j),b=n(2),O=n(24),d=n(35),p=n(25),f=n(6),h=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],j=Object(c.useState)(!0),O=Object(i.a)(j,2),d=O[0],h=O[1],x=Object(c.useState)(""),m=Object(i.a)(x,2),v=m[0],g=m[1],y=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&o(c)},w=function(){var e=Object(b.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=Object(p.d)(),e.prev=2,d){e.next=9;break}return e.next=6,Object(p.c)(c,n,u);case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,Object(p.e)(c,n,u);case 11:a=e.sent;case 12:console.log(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),g(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:w,className:"container",children:[Object(f.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(f.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(f.jsx)("input",{type:"submit",className:"authInput authSubmit",value:d?"Create Account":" Log In"}),v&&Object(f.jsx)("span",{className:"authError",children:v})]}),Object(f.jsx)("span",{onClick:function(){h((function(e){return!e}))},className:"authSwitch",children:d?"Log in":"Create Account"})]})},x=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new p.b:"github"===n&&(c=new p.a),a=Object(p.d)(),e.next=5,Object(p.f)(a,c);case 5:r=e.sent,console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"authContainer",children:[Object(f.jsx)(O.a,{icon:d.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(f.jsx)(h,{}),Object(f.jsxs)("div",{className:"authBtns",children:[Object(f.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(f.jsx)(O.a,{icon:d.b})]}),Object(f.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(f.jsx)(O.a,{icon:d.a})]})]})]})},m=n(51),v=n(42),g=n(16),y=n(30),w=Object(v.initializeApp)({apiKey:"AIzaSyBonJpJklSGkc2lZvhV8OhitzSqL6SEQsM",authDomain:"react-twitter-34211.firebaseapp.com",projectId:"react-twitter-34211",storageBucket:"react-twitter-34211.appspot.com",messagingSenderId:"866549909567",appId:"1:866549909567:web:9065cc21f19fbdfb32108a"}),N=Object(p.d)(w),k=Object(g.f)(),S=Object(y.b)(),I=n(37),C=n(29),F=function(e){var t=e.tweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],u=r[1],o=Object(c.useState)(t.text),j=Object(i.a)(o,2),d=j[0],p=j[1],h=function(){var e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet")){e.next=8;break}return n=Object(g.d)(k,"tweets","".concat(t.id)),e.next=5,Object(g.c)(n);case 5:if(!t.attachmentUrl){e.next=8;break}return e.next=8,Object(I.a)(Object(I.d)(S,t.attachmentUrl));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return u((function(e){return!e}))},m=function(){var e=Object(b.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=Object(g.d)(k,"tweets","".concat(t.id)),e.next=4,Object(g.j)(c,{text:d});case 4:u(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"nweet",children:s?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:m,className:"container nweetEdit",children:[Object(f.jsx)("input",{type:"text",placeholder:"Edit your Tweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(f.jsx)("input",{type:"submit",value:"Edit",className:"formBtn"})]}),Object(f.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(f.jsx)("img",{src:t.attachmentUrl}),n&&Object(f.jsxs)("div",{className:"tweet__actions",children:[Object(f.jsx)("span",{onClick:h,children:Object(f.jsx)(O.a,{icon:C.d})}),Object(f.jsx)("span",{onClick:x,children:Object(f.jsx)(O.a,{icon:C.a})})]})]})})},A=n(69),B=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),o=Object(i.a)(u,2),j=o[0],d=o[1],p=function(){var e=Object(b.a)(l.a.mark((function e(n){var c,a,i,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===j){e.next=12;break}return a=Object(y.c)(S,"".concat(t.uid,"/").concat(Object(A.a)())),e.next=8,Object(y.d)(a,j,"data_url");case 8:return i=e.sent,e.next=11,Object(y.a)(i.ref);case 11:c=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.prev=13,e.next=16,Object(g.a)(Object(g.b)(k,"tweets"),u);case 16:o=e.sent,console.log("Document written with ID: ",o.id),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(13),console.error("Error adding document: ",e.t0);case 23:s(""),d("");case 25:case"end":return e.stop()}}),e,null,[[13,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(f.jsxs)("div",{className:"factoryInput__container",children:[Object(f.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(f.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(f.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(f.jsx)("span",{children:"Add photos"}),Object(f.jsx)(O.a,{icon:C.b})]}),Object(f.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(f.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(f.jsx)("span",{children:"Remove"}),Object(f.jsx)(O.a,{icon:C.c})]})]})]})},_=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){Object(g.g)(Object(g.i)(Object(g.b)(k,"tweets"),Object(g.h)("createdAt","desc")),(function(e){var t=e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(B,{userObj:t}),Object(f.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(f.jsx)(F,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},E=function(e){var t=e.userObj;return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(f.jsx)(O.a,{icon:d.c,color:"#04AAFF",size:"2x"})})}),Object(f.jsx)("li",{children:Object(f.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(f.jsx)(O.a,{icon:C.e,color:"#04AAFF",size:"2x"}),Object(f.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})}),Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/",children:"Home"})})]})})},U=function(e){var t=e.refreshUser,n=e.userObj,a=Object(o.g)(),r=Object(c.useState)(n.displayName),s=Object(i.a)(r,2),u=s[0],j=s[1],O=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(g.i)(Object(g.b)(k,"nweets"),Object(g.k)("creatorId","==",n.uid)),e.next=3,Object(g.e)(t);case 3:e.sent.forEach((function(e){console.log(e.id," => ",e.data())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(b.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===u){e.next=4;break}return e.next=4,Object(p.g)(n,{displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(f.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(f.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){N.signOut(),a.push("/")},children:"Log Out"})]})},D=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(f.jsxs)(u.a,{children:[n&&Object(f.jsx)(E,{userObj:c}),Object(f.jsx)(o.d,{children:n?Object(f.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(_,{userObj:c})}),Object(f.jsx)(o.b,{exact:!0,path:"/profile",children:Object(f.jsx)(U,{userObj:c,refreshUser:t})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(x,{})}),Object(f.jsx)(o.a,{from:"*",to:"/"})]})})]})};var L=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),u=s[0],o=s[1],j=Object(c.useState)(null),l=Object(i.a)(j,2),b=l[0],O=l[1];return Object(c.useEffect)((function(){N.onAuthStateChanged((function(e){e?(o(!0),O({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):O(null),a(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(D,{refreshUser:function(){var e=N.currentUser;O({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:u,userObj:b}):"Initializing..."})};n(67);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fd491da0.chunk.js.map