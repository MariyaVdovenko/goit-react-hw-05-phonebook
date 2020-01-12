(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={App:"App_App__2yPX-",AppText:"App_AppText__1Jx_H"}},17:function(t,e,n){t.exports={ContactListItem:"ContactListItem_ContactListItem__PmGUa",Button:"ContactListItem_Button__puJZ-"}},32:function(t,e,n){t.exports={Input:"Filter_Input__3jYis"}},33:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},35:function(t,e,n){t.exports=n(69)},4:function(t,e,n){t.exports={Label:"ContactForm_Label__3fQOU",Label__text:"ContactForm_Label__text__1Gglc",Input:"ContactForm_Input__3eLno",Button:"ContactForm_Button__2_F4s"}},45:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=n(2),u=(n(45),n(5)),l=n(6),s=n(9),m=n(7),p=n(10),b=n(16),f=n.n(b),_=n(15),d=n(4),C=n.n(d),h=n(8),O=n(30),E=n.n(O),g=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(_.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.state.name?(n.props.onSave(n.state.name,n.state.number),n.setState({number:"",name:""})):h.NotificationManager.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f","\u041e\u0448\u0438\u0431\u043a\u0430",5e3)},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return c.a.createElement("form",{className:C.a.Form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:C.a.Label},c.a.createElement("span",{className:C.a.Label__text},"Name"),c.a.createElement("input",{className:C.a.Input,type:"text",placeholder:"Enter name",value:this.state.name,name:"name",onChange:this.handleChange}),c.a.createElement("input",{className:C.a.Input,type:"tel",placeholder:"Enter number",name:"number",value:this.state.number,onChange:this.handleChange})),c.a.createElement("button",{className:C.a.Button,type:"submit"},"Add contact"))}}]),e}(a.Component),N=Object(i.b)(null,(function(t){return{onSave:function(e,n){return t(function(t,e){return{type:"ADD_CONTACT",payload:{contact:{id:E.a.generate(),name:t,number:e}}}}(e,n))}}}))(g),j=n(11),y=n(17),v=n.n(y),I=n(31),S=function(t){return t.contacts},A=function(t){return t.filter},L=Object(I.a)([S,A],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),T={getContacts:S,getFilter:A,getFiltredContacts:L,getContactById:function(t,e){return S(t).find((function(t){return t.id===e}))}},x=Object(i.b)((function(t,e){var n=T.getContactById(t,e.id);return Object(j.a)({},n)}),(function(t,e){return{onDeleteContact:function(n){return t(function(t){return{type:"REMOVE_CONTACT",payload:{id:t}}}(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return c.a.createElement("li",{className:v.a.ContactListItem},c.a.createElement("p",{className:v.a.name},e,": ",n),c.a.createElement("button",{className:v.a.Button,onClick:a},"Delete"))})),F=n(32),w=n.n(F),D=Object(i.b)((function(t){return{filter:T.getFilter(t)}}),(function(t){return{onChangeFilter:function(e){return t(function(t){return{type:"CHANGE_FILTER",payload:{filter:t}}}(e))}}}))((function(t){var e=t.filter,n=t.onChangeFilter;return c.a.createElement("section",null,c.a.createElement("input",{className:w.a.Input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)}}))})),k=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement("ul",null,this.props.contacts.map((function(t){var e=t.id;t.name,t.number;return c.a.createElement(x,{key:e,id:e})}))))}}]),e}(a.Component),B=Object(i.b)((function(t,e){return{contacts:T.getFiltredContacts(t)}}))(k),J=(n(68),function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:f.a.App},c.a.createElement("h1",{className:f.a.AppText},"Phonebook"),c.a.createElement(N,{onSubmit:this.onSubmit}),c.a.createElement("h2",{className:f.a.AppText},"Contacts"),c.a.createElement(B,{contacts:this.props.contacts,onDeleteContact:this.deleteContact}),c.a.createElement(h.NotificationContainer,null))}}]),e}(a.Component)),R=Object(i.b)((function(t,e){return{contacts:t.contacts}}))(J),X=n(14),G=n(34),H=function(t,e){var n=e.type,a=e.payload;switch(n){case"ADD_CONTACT":return void 0!==t.contacts.find((function(t){return t.name.toLowerCase()===a.contact.name.toLowerCase()}))?(h.NotificationManager.warning("".concat(a.contact.name," already exist"),"Try another name",3e3),t):Object(j.a)({},t,{contacts:[].concat(Object(G.a)(t.contacts),[a.contact])});case"REMOVE_CONTACT":return Object(j.a)({},t,{contacts:t.contacts.filter((function(t){return t.id!==a.id}))});case"CHANGE_FILTER":return Object(j.a)({},t,{filter:a.filter});default:return t}},M=n(33),U={contacts:localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):M,filter:""},V=Object(X.b)(H,U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());V.subscribe((function(){localStorage.setItem("contacts",JSON.stringify(V.getState().contacts))}));var P=V;o.a.render(c.a.createElement(i.a,{store:P},c.a.createElement(R,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6a28d188.chunk.js.map