(this.webpackJsonpproject3=this.webpackJsonpproject3||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(32),i=n.n(a),s=(n(59),n(60),n(6)),o=n(0);var l=function(){return Object(o.jsx)("div",{className:"container valign-wrapper",children:Object(o.jsxs)("div",{className:"row valign",children:[Object(o.jsx)("div",{className:"col l12 m12 s12 center",children:Object(o.jsxs)("div",{className:"card-panel transparentBG no-shadows ",children:[Object(o.jsx)("h1",{className:"black-text large-welcome",children:"Welcome to TRVLR"}),Object(o.jsx)("h1",{className:"mobile-welcome center-align",children:"T R V L R"})]})}),Object(o.jsx)("div",{className:"col l12 s12 center",children:Object(o.jsx)("div",{className:"card-panel transparentBG no-shadows mobile-action",children:Object(o.jsx)("h5",{className:"black-text",children:"Plan your next trip with your friends - all in one place."})})}),Object(o.jsxs)("div",{className:"mobile-buttons",children:[Object(o.jsx)(s.b,{to:"/login",className:"roundedbtn btn-small white-text bigger-text",children:"Log In"}),Object(o.jsx)("br",{}),Object(o.jsx)(s.b,{to:"/signup",className:"roundedTransparent btn-small transparentBG no-shadows",children:"Sign Up"})]})]})})};var d=function(){return Object(o.jsx)(l,{})},j=n(7);function b(e){var t=e.size,n=e.children;return Object(o.jsx)("div",{className:t.split(" ").map((function(e){return"col "+e})).join(" "),children:n})}function u(e){return Object(o.jsx)("div",{className:"container",children:e.children})}function h(e){return Object(o.jsx)("div",{className:"row",children:e.children})}n(69);var m=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{children:Object(o.jsx)("div",{className:"card  no-shadows center-align",children:Object(o.jsx)("div",{className:"card-content",children:e.children})})})})},O=n(4);n(70);var x=function(e){return Object(o.jsx)("div",Object(O.a)(Object(O.a)({className:"delete-btn "},e),{},{role:"button",tabIndex:"0",children:Object(o.jsx)("i",{className:"material-icons",children:"clear"})}))};var p=function(e){var t=e.children;return Object(o.jsx)("div",{style:{clear:"both",padding:"1vh",textAlign:"center"},className:"jumbotron",children:t})};n(71);function f(e){var t=e.children;return Object(o.jsx)("div",{className:"list-overflow-container",children:Object(o.jsx)("ul",{className:"list-group",children:t})})}var g=n(9),v=n.n(g),N={getUsers:function(){return v.a.get("/api/users")},getUser:function(e){return v.a.get("/api/users/"+e)},getUserByUsername:function(e){return v.a.get("/api/username/"+e)},deleteUser:function(e){return v.a.delete("/api/users/"+e)},saveUser:function(e){return v.a.post("/api/users/signup",e)},saveTrip:function(e){return v.a.post("/api/users/:id",e)},findOneUser:function(e){return v.a.post("/api/users/login",{username:e.userName,password:e.password})},signOut:function(){return console.log("signing out"),v.a.get("/api/users/signout")},getTrips:function(){return v.a.get("/api/trips")},getTrip:function(e){return v.a.get("/api/trips/"+e)},findTripByTripId:function(e){return v.a.get("/api/trips/tripId/"+e.tripId)},updateTrip:function(e,t){return v.a.put("/api/trips/"+e,{members:t.members})},deleteTrip:function(e){return v.a.delete("/api/trips/"+e)},createExpense:function(e,t){return v.a.post("/api/trips/".concat(e),t)},deleteExpense:function(e){return v.a.delete("/api/trips/expenses/"+e)},createSchedule:function(e,t){return v.a.post("/api/trips/schedule/".concat(e),t)},deleteSchedule:function(e){return v.a.delete("/api/trips/schedule/"+e)},createCollection:function(e,t){return v.a.post("/api/trips/collection/".concat(e),t)},createCollectionItem:function(e,t){return v.a.put("/api/trips/collection/".concat(e),t)},deleteCollection:function(e){return v.a.delete("/api/trips/collection/"+e)}},y=n(27),w=Object(c.createContext)({id:"",userName:"",firstName:"",lastName:"",isAuthenticated:"false",memberOf:[]}),D=w.Provider;function C(e,t){switch(t.type){case"add":var n=Object(O.a)(Object(O.a)({},e),{},{id:t.id,userName:t.userName,firstName:t.firstName,lastName:t.lastName,memberOf:t.memberOf,isAuthenticated:t.isAuthenticated});return localStorage.setItem("user",JSON.stringify(n)),n;case"remove":return e.filter((function(e,n){return n!==t.index}));case"update":var c=Object(O.a)(Object(O.a)({},e),{},{memberOf:t.memberOf});return localStorage.setItem("user",JSON.stringify(c)),Object(O.a)(Object(O.a)({},e),{},{memberOf:t.memberOf});case"timeOut":return Object(O.a)(Object(O.a)({},e),{},{userName:"",firstName:"",lastName:"",memberOf:[],isAuthenticated:"false"});default:return e}}var T=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[];function S(e){e.value;var t=Object(y.a)(e,["value"]),n=Object(c.useReducer)(C,T),r=Object(j.a)(n,2),a=r[0],i=r[1];return Object(o.jsx)(D,Object(O.a)({value:{state:a,dispatch:i}},t))}function k(){return Object(c.useContext)(w)}n(90);function I(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{children:Object(o.jsx)("table",{children:e.children})})})}function A(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("tbody",{children:e.children})})}function B(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:e.children})})})}var E=n(5);var F=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=k().state,i=Object(c.useState)({}),l=Object(j.a)(i,2),d=l[0],O=l[1],g=Object(c.useState)({}),v=Object(j.a)(g,2),y=v[0],w=v[1];function D(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&cnt=1&units=imperial&appid=").concat("f97d87b11d38ee9851d48951d845fdef")).then((function(e){return e.json()})).then((function(e){"city not found"!==e.message&&w(e)})).catch((function(e){return console.log(e)}))}function C(){N.getUser(a.id).then((function(e){r(e.data);for(var t=0;t<e.data.memberOf.length;t++){var n=e.data.memberOf[t].startDate,c=e.data.memberOf[t].endDate,a=Date.parse(n),i=Date.parse(c);a<=Date.now()&&i>=Date.now()&&(O(e.data.memberOf[t]),D(e.data.memberOf[t].tripCity))}})).catch((function(e){return console.log(e)}))}return Object(c.useEffect)((function(){C()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(u,{children:[Object(o.jsx)(m,{children:Object(o.jsx)(p,{children:Object(o.jsxs)("h5",{children:["Welcome ",null===a||void 0===a?void 0:a.firstName," ",null===a||void 0===a?void 0:a.lastName,"!"]})})}),"{}"!==JSON.stringify(d)?Object(o.jsxs)(m,{children:["{}"!==JSON.stringify(y)?Object(o.jsx)(h,{children:Object(o.jsxs)(b,{size:"m12",children:[Object(o.jsxs)("h5",{children:["It looks like you're currently on a trip to ",d.tripCity,"!"]}),Object(o.jsx)("br",{}),Object(o.jsx)(s.b,{to:"/trips/"+d._id,className:"roundedbtn btn-small white-text trip-details",children:"Trip Details"}),Object(o.jsxs)("h4",{children:["Current weather in ",d.tripCity,":"]}),Object(o.jsx)(m,{children:Object(o.jsxs)(h,{children:[Object(o.jsxs)(b,{size:"m4 s12",children:[Object(o.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(y.weather[0].icon,".png"),alt:"weather status icon"}),Object(o.jsx)("p",{children:y.weather[0].description})]}),Object(o.jsxs)(b,{size:"m8 s12",children:[Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["Temperature: ",y.main.temp.toFixed(0),"\xb0F"]}),Object(o.jsxs)("p",{children:["Feels Like: ",y.main.feels_like.toFixed(0),"\xb0F"]}),Object(o.jsxs)("p",{children:["Humidity: ",y.main.humidity,"%"]})]})]})})]})}):Object(o.jsx)("p",{children:"No weather data found for your city input. :("}),d.tripSchedule.length?Object(o.jsx)(h,{children:Object(o.jsxs)(b,{size:"m12",children:[Object(o.jsxs)("h4",{children:[d.tripName," Schedule:"]}),Object(o.jsxs)(I,{children:[Object(o.jsxs)(B,{children:[Object(o.jsx)("th",{children:"Date"}),Object(o.jsx)("th",{children:"Activity"}),Object(o.jsx)("th",{children:"Time"})]}),Object(o.jsx)(A,{children:d.tripSchedule.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.activityDate}),Object(o.jsx)("td",{children:e.activityName}),Object(o.jsx)("td",{children:e.startTime})]},t)}))})]})]})}):Object(o.jsx)("p",{children:"Add something to your trip schedule to see it here!"})]}):"",Object(o.jsx)(m,{children:Object(o.jsx)(h,{children:Object(o.jsxs)(b,{size:"m12 s12",children:[Object(o.jsx)("h2",{children:"My Trips"}),Object(o.jsx)(s.b,{to:"/createtrip",className:"roundedbtn btn-small white-text",children:"+ Add a trip"}),n.memberOf?Object(o.jsx)(f,{children:n.memberOf.map((function(e,t){return Object(o.jsxs)(m,{children:[Object(o.jsxs)(s.b,{to:"/trips/"+e._id,children:[Object(o.jsx)("h4",{className:"trip-name",children:e.tripName}),Object(o.jsxs)("p",{children:[e.startDate," to ",e.endDate]}),Object(o.jsxs)("p",{children:["Trip ID: ",e.tripId]}),Object(o.jsx)("br",{}),Object(o.jsx)(E.Button,{className:"roundedbtn go-to",children:"Trip Details"})]}),Object(o.jsx)(E.Modal,{actions:[Object(o.jsx)(E.Button,{flat:!0,modal:"close",node:"button",waves:"green",children:"Cancel"}),Object(o.jsx)(E.Button,{className:"modal-close delete-confirm",onClick:function(){return t=e._id,void N.deleteTrip(t).then((function(){O({}),C()})).catch((function(e){return console.log(e)}));var t},children:"Delete Trip"})],bottomSheet:!1,fixedFooter:!1,header:"Are you sure? This will delete all trip data for all trip members!",id:"Modal-0",open:!1,options:{dismissible:!0,endingTop:"10%",inDuration:250,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"},trigger:Object(o.jsx)(x,{})})]},t)}))}):Object(o.jsx)("h3",{children:"No Results to Display"})]})})})]})})},U=n(8),z=n(12);function M(e){return Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",Object(O.a)({className:"form-control"},e))})}function L(e){return Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("textarea",Object(O.a)({className:"form-control",rows:"30"},e))})}function P(e){return Object(o.jsx)("button",Object(O.a)(Object(O.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn-small roundedbtn link-btn",children:e.children}))}var _=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({}),i=Object(j.a)(a,2),l=i[0],d=i[1],u=k().state,x=Object(U.h)().id;function p(){N.getTrip(x).then((function(e){r(e.data.tripCollections)})).catch((function(e){return console.log(e)}))}function f(e){var t=e.target,n=t.name,c=t.value;d(Object(O.a)(Object(O.a)({},l),{},Object(z.a)({},n,c)))}function g(){document.getElementById("add-collection-form").reset(),d({collectionName:"",collectionDescription:"",itemName:"",itemUrl:""})}return Object(c.useEffect)((function(){p()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(m,{children:[Object(o.jsx)(h,{children:Object(o.jsxs)(b,{size:"m12 s12",children:[Object(o.jsx)("h1",{children:"Idea Board"}),Object(o.jsx)("br",{}),Object(o.jsx)(E.Modal,{actions:[Object(o.jsx)(E.Button,{flat:!0,modal:"close",node:"button",waves:"green",children:"Close"}),Object(o.jsx)(E.Button,{className:"modal-close roundedbtn",onClick:function(e){e.preventDefault(),l.collectionName&&N.createCollection(x,{collectionName:l.collectionName,collectionDescription:l.collectionDescription}).then((function(e){p(),g()})).catch((function(e){return console.log(e)}))},children:"Add"})],bottomSheet:!1,fixedFooter:!1,header:"Add a Category",id:"Modal-0",open:!1,options:{dismissible:!0,endingTop:"10%",inDuration:250,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"},trigger:Object(o.jsx)(s.b,{to:"",node:"button",className:"roundedbtn btn-small white-text link-btn",children:"+ Add a Category"}),children:Object(o.jsxs)("form",{id:"add-collection-form",children:[Object(o.jsx)(M,{onChange:f,name:"collectionName",placeholder:"Name of the Category, i.e. Restaurants or Hotels"}),Object(o.jsx)(L,{onChange:f,name:"collectionDescription",placeholder:"(Optional) Add any necessary details here"})]})})]})}),Object(o.jsx)(h,{children:Object(o.jsx)(b,{size:"m12 s12",children:n.length?Object(o.jsx)(E.Collapsible,{accordion:!1,children:n.map((function(e,t){return Object(o.jsxs)(E.CollapsibleItem,{expanded:!1,header:e.collectionName,node:"div",children:[e.collectionDescription,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(E.Modal,{actions:[Object(o.jsx)(E.Button,{flat:!0,modal:"close",node:"button",waves:"green",children:"Close"}),Object(o.jsx)(E.Button,{className:"modal-close roundedbtn",onClick:function(){return t=e._id,void(l.itemName&&N.createCollectionItem(t,{itemName:l.itemName,itemUrl:l.itemUrl,itemSubmitter:u.firstName}).then((function(e){p(),g()})).catch((function(e){return console.log(e)})));var t},children:"Add"})],bottomSheet:!1,fixedFooter:!1,header:"Add an Item",id:"collectionItem",className:"modal",open:!1,options:{container:"body",dismissible:!0,endingTop:"10%",inDuration:250,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"},trigger:Object(o.jsx)(s.b,{node:"button",className:"btn-small roundedbtn white-text link-btn",children:"+ Add an Item"}),children:[Object(o.jsx)(M,{onChange:f,name:"itemName",value:l.itemName,placeholder:"Item Name"}),Object(o.jsx)(M,{onChange:f,name:"itemUrl",value:l.itemUrl,placeholder:"(Optional) Enter a link"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),e.collectionItems.length?Object(o.jsxs)(I,{children:[Object(o.jsxs)(B,{children:[Object(o.jsx)("th",{children:"Idea"}),Object(o.jsx)("th",{children:"Link"}),Object(o.jsx)("th",{children:"By"})]}),Object(o.jsx)(A,{children:e.collectionItems.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.itemName}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:e.itemUrl,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{class:"material-icons",children:"link"})})}),Object(o.jsx)("td",{children:e.itemSubmitter})]},t)}))})]}):Object(o.jsx)("p",{children:"Share some ideas to get started!"}),Object(o.jsx)("br",{}),Object(o.jsx)(s.b,{onClick:function(){return t=e._id,void N.deleteCollection(t).then((function(e){p()})).catch((function(e){return console.log(e)}));var t},className:"transparentBG btn-flat red-text",children:"Delete Category"})]},t)}))}):Object(o.jsx)("p",{children:"No idea categories started yet!"})})})]})})};var R=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({}),i=Object(j.a)(a,2),l=i[0],d=i[1],u=k().state,p=Object(U.h)().id;function f(){N.getTrip(p).then((function(e){r(e.data.tripExpenses)})).catch((function(e){return console.log(e)}))}function g(e){var t=e.target,n=t.name,c=t.value;d(Object(O.a)(Object(O.a)({},l),{},Object(z.a)({},n,c)))}return Object(c.useEffect)((function(){f()}),[p]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(m,{children:[Object(o.jsx)(h,{children:Object(o.jsxs)(b,{size:"m12 s12",children:[Object(o.jsx)("h1",{children:"Expenses"}),Object(o.jsx)("br",{}),Object(o.jsx)(E.Modal,{actions:[Object(o.jsx)(E.Button,{flat:!0,modal:"close",node:"button",waves:"green",children:"Close"}),Object(o.jsx)(E.Button,{onClick:function(e){e.preventDefault(),l.expenseAmount&&N.createExpense(p,{expenseDescription:l.expenseDescription,expenseAmount:l.expenseAmount,expenseSubmitter:u.firstName,expenseDate:document.getElementById("expenseDate").value}).then((function(e){f(),document.getElementById("add-expense-form").reset(),d({expenseDescription:"",expenseAmount:""})})).catch((function(e){return console.log(e)}))},className:"modal-close roundedbtn",children:"Add"})],bottomSheet:!1,fixedFooter:!1,header:"Add an Expense",id:"Modal-0",className:"modal",open:!1,options:{autoclose:!0,container:"body",dismissible:!0,endingTop:"10%",inDuration:250,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"},trigger:Object(o.jsx)(s.b,{node:"button",className:"btn-small roundedbtn white-text link-btn",children:"+ Add an Expense"}),children:Object(o.jsxs)("form",{id:"add-expense-form",children:[Object(o.jsx)(M,{onChange:g,name:"expenseDescription",placeholder:"Brief description of the expense"}),Object(o.jsx)(M,{onChange:g,name:"expenseAmount",type:"number",placeholder:"Enter dollar amount here"}),Object(o.jsx)(E.DatePicker,{id:"expenseDate",name:"expenseDate",placeholder:"When did you make the purchase?",options:{autoClose:!0,container:"body"}})]})})]})}),Object(o.jsx)(h,{children:Object(o.jsx)(b,{size:"m12 s12",children:n.length?Object(o.jsxs)(I,{children:[Object(o.jsxs)(B,{children:[Object(o.jsx)("th",{children:"By"}),Object(o.jsx)("th",{children:"Entry"}),Object(o.jsx)("th",{children:"Cost"}),Object(o.jsx)("th",{children:"Date"})]}),Object(o.jsx)(A,{children:n.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.expenseSubmitter}),Object(o.jsx)("td",{children:e.expenseDescription}),Object(o.jsxs)("td",{children:["$",e.expenseAmount]}),Object(o.jsx)("td",{children:e.expenseDate}),Object(o.jsx)("td",{children:Object(o.jsx)(x,{onClick:function(){return t=e._id,void N.deleteExpense(t).then((function(e){f()})).catch((function(e){return console.log(e)}));var t}})})]},t)}))})]}):Object(o.jsx)("p",{children:"No expenses logged yet!"})})})]})})},G=n(35),J=n.n(G);var W=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=k().state,i=Object(c.useState)({}),l=Object(j.a)(i,2),d=l[0],u=l[1],p=Object(U.h)().id;function f(){N.getTrip(p).then((function(e){!function(e){var t=e.sort((function(e,t){return J()(e.activityDate+", "+e.startTime).valueOf()-J()(t.activityDate+", "+t.startTime).valueOf()}));r(t)}(e.data.tripSchedule)})).catch((function(e){return console.log(e)}))}function g(e){var t=e.target,n=t.name,c=t.value;u(Object(O.a)(Object(O.a)({},d),{},Object(z.a)({},n,c)))}return Object(c.useEffect)((function(){f()}),[p]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(m,{children:Object(o.jsx)(h,{children:Object(o.jsxs)(b,{size:"m12 s12",children:[Object(o.jsx)("h1",{children:"Schedule"}),Object(o.jsx)("br",{}),Object(o.jsx)(E.Modal,{actions:[Object(o.jsx)(E.Button,{flat:!0,modal:"close",node:"button",waves:"green",children:"Close"}),Object(o.jsx)(E.Button,{onClick:function(e){e.preventDefault(),d.activityName&&N.createSchedule(p,{activityName:d.activityName,activityDate:document.getElementById("activityDate").value,activitySubmitter:a.firstName,startTime:document.getElementById("startTime").value,endTime:document.getElementById("endTime").value}).then((function(e){f(),document.getElementById("addScheduleForm").reset(),u({activityName:"",activityDescription:""})})).catch((function(e){return console.log(e)}))},className:"modal-close roundedbtn",children:"Add"})],bottomSheet:!1,fixedFooter:!1,header:"Add an Activity",id:"add-activity-modal",className:"modal",open:!1,options:{autoclose:!0,container:"body",dismissible:!0,endingTop:"10%",inDuration:250,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"},trigger:Object(o.jsx)(s.b,{node:"button",className:"btn-small roundedbtn white-text link-btn",children:"+ Add an Activity"}),children:Object(o.jsxs)("form",{id:"addScheduleForm",children:[Object(o.jsx)(M,{onChange:g,name:"activityName",value:d.activityName,placeholder:"What are you doing?"}),Object(o.jsx)(E.DatePicker,{id:"activityDate",name:"activityDate",value:d.activityDate,placeholder:"Date",options:{container:"body",autoClose:!0}}),Object(o.jsx)(E.TimePicker,{id:"startTime",name:"startTime",value:d.startTime,placeholder:"Start Time",options:{container:"body",autoClose:!0}}),Object(o.jsx)(E.TimePicker,{id:"endTime",name:"endTime",value:d.endTime,placeholder:"End Time",options:{container:"body",autoClose:!0}}),Object(o.jsx)(L,{onChange:g,name:"activityDescription",value:d.activityDescription,placeholder:"(Optional) Add any necessary details about the activity here"})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),n.length?Object(o.jsxs)(I,{children:[Object(o.jsxs)(B,{children:[Object(o.jsx)("th",{children:"Date"}),Object(o.jsx)("th",{children:"Activity"}),Object(o.jsx)("th",{children:"Time"})]}),Object(o.jsx)(A,{children:n.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.activityDate}),Object(o.jsx)("td",{children:e.activityName}),Object(o.jsx)("td",{children:e.startTime}),Object(o.jsx)("td",{children:Object(o.jsx)(x,{onClick:function(){return t=e._id,void N.deleteSchedule(t).then((function(e){f()})).catch((function(e){return console.log(e)}));var t}})})]},t)}))})]}):Object(o.jsx)("p",{children:"Nothing scheduled yet!"})]})})})})};var q=function(){var e=Object(c.useState)({members:[]}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(U.h)().id;return Object(c.useEffect)((function(){N.getTrip(a).then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)(u,{fluid:!0,children:[Object(o.jsxs)(m,{children:[Object(o.jsx)(h,{children:Object(o.jsxs)(b,{size:"m12 s12",children:[Object(o.jsx)("h3",{children:n.tripName}),Object(o.jsxs)("p",{children:[n.startDate," to ",n.endDate]})]})}),Object(o.jsx)(h,{children:Object(o.jsx)(b,{size:"m12",children:Object(o.jsx)("p",{children:n.description})})})]}),Object(o.jsx)(m,{children:Object(o.jsx)(h,{children:Object(o.jsx)(b,{size:"m12 s12",children:Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:"Trip Members"}),Object(o.jsx)("br",{}),n.members.length?Object(o.jsx)(E.Collection,{children:n.members.map((function(e,t){return Object(o.jsxs)(E.CollectionItem,{children:[e.name.firstName+" "+e.name.lastName,Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:["Username: ",e.userName]})]},t)}))}):"",Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Send your friends this unique Trip ID to join:"}),Object(o.jsx)("h4",{children:n.tripId})]})})})}),Object(o.jsx)(_,{}),Object(o.jsx)(W,{}),Object(o.jsx)(R,{}),Object(o.jsx)(m,{children:Object(o.jsx)(h,{children:Object(o.jsx)(b,{size:"m12 s12",children:Object(o.jsx)(s.b,{to:"/dashboard",className:"btn-small roundedbtn white-text link-btn",children:"\u2190 Back to Dashboard"})})})})]})},H=n(54),Y=n(17),V=n.n(Y),K=n(21);var $=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),i=Object(j.a)(a,2),s=i[0],l=i[1],d=Object(c.useState)(!0),b=Object(j.a)(d,2),h=b[0],x=b[1],f=k(),g=f.state,v=f.dispatch,y=Object(U.g)();function w(e){var t=e.target,c=t.name,a=t.value;r(Object(O.a)(Object(O.a)({},n),{},Object(z.a)({},c,a)))}return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(u,{children:[Object(o.jsxs)(m,{children:[Object(o.jsx)(p,{children:Object(o.jsx)("h1",{children:"Find An Existing Trip"})}),Object(o.jsxs)("form",{children:[Object(o.jsx)(M,{onChange:w,name:"tripId",placeholder:"Insert 9 Character ID Here"}),Object(o.jsx)(E.Button,{disabled:!n.tripId,onClick:function(e){e.preventDefault(),n.tripId&&N.findTripByTripId({tripId:n.tripId}).then((function(e){N.updateTrip(e.data._id,{members:[].concat(Object(H.a)(e.data.members),[g.id])}).then(function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v({type:"update",memberOf:t.data.memberOf}),y.push("/dashboard");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){l(!1),x(!0),console.log(e)}))})).catch((function(e){l(!1),x(!0),console.log(e)}))},className:"roundedbtn btn-small white-text bigger-text",children:"Add"})]})]}),Object(o.jsxs)(m,{children:[Object(o.jsx)(p,{children:Object(o.jsx)("h1",{children:"Create a New Trip"})}),Object(o.jsxs)("form",{children:[Object(o.jsx)("h3",{children:"Trip Name"}),Object(o.jsx)(M,{onChange:w,name:"tripName",placeholder:"Give your trip a name!"}),Object(o.jsx)("h3",{children:"City"}),Object(o.jsx)("span",{children:"Enter a city name to get live weather data while on your trip!"}),Object(o.jsx)(M,{onChange:w,name:"tripCity",placeholder:"City Name"}),Object(o.jsx)(M,{onChange:w,name:"tripState",placeholder:"State and/or country"}),Object(o.jsx)("h3",{children:"Trip Dates"}),Object(o.jsx)(E.DatePicker,{id:"startDate",name:"startDate",placeholder:"Start Date",options:{container:"body",autoClose:!0}}),Object(o.jsx)(E.DatePicker,{id:"endDate",name:"endDate",placeholder:"End Date",options:{container:"body",autoClose:!0}}),Object(o.jsx)(L,{onChange:w,name:"description",placeholder:"(Optional) What kind of trip is this, what are your hopes and dreams? Are you looking to accomplish anything specific?"}),Object(o.jsx)(E.Button,{disabled:!n.tripName,onClick:function(e){e.preventDefault(),n.tripName&&N.saveTrip({id:g.id,tripId:Math.random().toString(36).substr(2,9).toUpperCase(),tripName:n.tripName,tripCity:n.tripCity,startDate:document.getElementById("startDate").value,endDate:document.getElementById("endDate").value,description:n.description,members:[g.id]}).then(function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v({type:"update",memberOf:t.data.memberOf}),y.push("/dashboard");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){l(!1),x(!0),console.log(e)}))},className:"roundedbtn btn-small white-text bigger-text",children:"Create"}),!s&&Object(o.jsx)("div",{children:" Whoops! Please try again."}),!h&&Object(o.jsx)("div",{children:" Success! Your trip was created."})]})]})]})})};var Q=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(j.a)(a,2),l=i[0],d=i[1],x=k().dispatch;function p(e){var t=e.target,c=t.name,a=t.value;r(Object(O.a)(Object(O.a)({},n),{},Object(z.a)({},c,a)))}return Object(o.jsx)(u,{children:Object(o.jsx)(h,{children:Object(o.jsx)(b,{size:"l8 offset-l2 s12",children:Object(o.jsxs)(m,{children:[Object(o.jsx)(h,{children:Object(o.jsx)("h3",{children:"Sign Up for a New Account"})}),Object(o.jsxs)("form",{children:[Object(o.jsx)(M,{onChange:p,name:"userName",placeholder:"Username (required)"}),Object(o.jsx)(M,{onChange:p,name:"firstName",placeholder:"First Name (required)"}),Object(o.jsx)(M,{onChange:p,name:"lastName",placeholder:"Last Name (required)"}),Object(o.jsx)(M,{onChange:p,name:"password",type:"password",placeholder:"Password (required)"}),Object(o.jsx)(P,{disabled:!(n.userName&&n.firstName&&n.lastName&&n.password),onClick:function(e){e.preventDefault(),n.userName&&n.firstName&&n.lastName&&n.password&&N.saveUser({userName:n.userName,name:{firstName:n.firstName,lastName:n.lastName},password:n.password}).then((function(e){N.findOneUser({userName:n.userName,password:n.password}).then(function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x({type:"add",id:t.data._id,userName:t.data.userName,firstName:t.data.name.firstName,lastName:t.data.name.lastName,memberOf:t.data.memberOf,isAuthenticated:"true"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})),d(!0),setTimeout((function(){window.location.href="/dashboard/"}),2e3)})).catch((function(e){return console.log(e)}))},children:"Submit User"}),Object(o.jsx)(s.b,{to:"/login",children:"Already have an account? Log in here"}),l&&Object(o.jsx)("div",{children:" Success! Redirecting to Dashboard."})]})]})})})})};var X=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),i=Object(j.a)(a,2),l=i[0],d=i[1],u=Object(c.useState)(!0),x=Object(j.a)(u,2),p=x[0],f=x[1],g=Object(U.g)(),v=k().dispatch;function y(e){var t=e.target,c=t.name,a=t.value;r(Object(O.a)(Object(O.a)({},n),{},Object(z.a)({},c,a)))}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container login-box",children:Object(o.jsx)(h,{children:Object(o.jsx)(b,{size:"m12 s12",children:Object(o.jsxs)(m,{children:[Object(o.jsx)(h,{children:Object(o.jsx)("h3",{children:"Log Into an Existing Account"})}),Object(o.jsxs)("form",{children:[Object(o.jsx)(M,{onChange:y,name:"userName",placeholder:"Username"}),Object(o.jsx)(M,{onChange:y,name:"password",type:"password",placeholder:"Password"}),Object(o.jsx)(P,{disabled:!(n.userName&&n.password),onClick:function(e){e.preventDefault(),n.userName&&n.password&&N.findOneUser({userName:n.userName,password:n.password}).then(function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(!0),f(!1),v({type:"add",id:t.data._id,userName:t.data.userName,firstName:t.data.name.firstName,lastName:t.data.name.lastName,memberOf:t.data.memberOf,isAuthenticated:"true"}),g.push("/dashboard");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){d(!1),f(!0),console.log(e)}))},className:"roundedbtn",children:"Log in"}),Object(o.jsx)(s.b,{to:"/signup",children:"Create a new account"}),!l&&Object(o.jsx)("div",{children:" Whoops! Please try again."}),!p&&Object(o.jsx)("div",{children:" Success! You are now logged in."})]})]})})})})})};var Z=function(){return N.signOut().then((function(e){console.log("signout")})),localStorage.clear(),setTimeout((function(){window.location.href="/"}),2e3),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{children:Object(o.jsx)(m,{children:Object(o.jsx)("p",{children:Object(o.jsx)("span",{children:"You have been signed out. Redirecting to Home..."})})})})})},ee=(n(136),n(53));n(51);var te=function(){var e=k().state;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("header",{children:Object(o.jsx)(E.Navbar,{className:"transparentBG no-shadows",alignLinks:"right",brand:Object(o.jsx)(s.b,{to:"/",className:"brand-logo center",id:"brand-logo",children:"T R V L R"}),children:Object(o.jsx)("div",{className:"navbar-default",children:Object(o.jsx)("ul",{className:"sidenav-close",children:ee.map((function(t,n){return e.userName&&"in"===t.logged?Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:t.linkTo,className:"btn transparentBG no-shadows",children:t.linkName})},n):e.userName||"out"!==t.logged?"":Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:t.linkTo,className:"btn transparentBG no-shadows",children:t.linkName})},n)}))})})})})})};n(137);var ne=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("footer",{className:"page-footer",children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col l8 s12",children:[Object(o.jsx)("h5",{className:"white-text",children:"Development Team"}),Object(o.jsx)("p",{className:"grey-text text-lighten-4",children:"We all got our start at KU's coding bootcamp!"})]}),Object(o.jsxs)("div",{className:"col l4 s12",children:[Object(o.jsx)("h5",{className:"white-text",children:"Dev Team GitHub"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"white-text",href:"https://github.com/verusbabb",children:"Steve Babb"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"white-text",href:"https://github.com/koltondecker",children:"Kolton Decker"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"white-text",href:"https://github.com/cgouge93",children:"Carly Gouge"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"white-text",href:"https://github.com/cmoss703",children:"Christina Moss"})})]})]})]})}),Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsx)("div",{class:"container"})})]})})},ce=function(e){var t=e.component,n=Object(y.a)(e,["component"]),c=k().state;return Object(o.jsx)(U.b,Object(O.a)(Object(O.a)({},n),{},{render:function(e){return c.isAuthenticated?Object(o.jsx)(t,Object(O.a)({},e)):Object(o.jsx)(U.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var re=function(){var e=k(),t=e.state,n=e.dispatch;return t.isAuthenticated&&function(){var e;function t(){alert("You are now logged out."),n({type:"logOut",isAuthenticated:"false"}),localStorage.removeItem("user"),location.href="/login"}function c(){clearTimeout(e),e=setTimeout(t,12e5)}window.onload=c,document.onmousemove=c,document.onkeydown=c}(),Object(o.jsxs)(s.a,{children:[Object(o.jsx)(te,{}),Object(o.jsx)("main",{className:"valign-wrapper",children:Object(o.jsxs)(U.d,{children:[Object(o.jsx)(U.b,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(ce,{exact:!0,path:"/dashboard",component:F}),Object(o.jsx)(ce,{exact:!0,path:"/trips/:id",component:q}),Object(o.jsx)(ce,{exact:!0,path:"/createtrip",component:$}),Object(o.jsx)(ce,{exact:!0,path:"/trips/:id/schedule",component:W}),Object(o.jsx)(ce,{exact:!0,path:"/trips/:id/expenses",component:R}),Object(o.jsx)(U.b,{exact:!0,path:"/signup",children:Object(o.jsx)(Q,{})}),Object(o.jsx)(U.b,{exact:!0,path:"/login",children:Object(o.jsx)(X,{})}),Object(o.jsx)(U.b,{exact:!0,path:"/signout",children:Object(o.jsx)(Z,{})})]})}),Object(o.jsx)(ne,{})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(S,{children:Object(o.jsx)(re,{})})}),document.getElementById("root"))},53:function(e){e.exports=JSON.parse('[{"linkName":"Sign Up","linkTo":"/signup","logged":"out"},{"linkName":"Log In","linkTo":"/login","logged":"out"},{"linkName":"Dashboard","linkTo":"/dashboard","logged":"in"},{"linkName":"Sign Out","linkTo":"/signout","logged":"in"},{"linkName":"Create a Trip","linkTo":"/createtrip","logged":"in"}]')},59:function(e,t,n){},60:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},90:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.1640104e.chunk.js.map