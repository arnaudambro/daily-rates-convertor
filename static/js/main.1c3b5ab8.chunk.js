(this["webpackJsonpdaily-rates-convertor"]=this["webpackJsonpdaily-rates-convertor"]||[]).push([[0],{26:function(e,n,t){e.exports=t(52)},52:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),i=t.n(o),u=t(3),c=t(4),l=t(6),d=t(5),s=t(7),h=t(2),f=t(1);function p(){var e=Object(h.a)(["\n  flex-shrink: 0;\n"]);return p=function(){return e},e}function m(){var e=Object(h.a)(["\n  background: transparent;\n  height: 100%;\n  border: none;\n  width: ",";\n  flex-grow: 0;\n  flex-shrink: 1;\n  text-align: ",";\n"]);return m=function(){return e},e}function b(){var e=Object(h.a)(["\n  background: ",";\n  color: ",";\n  border: 2px solid #24b100;\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 40px;\n  padding: 8px 20px;\n  margin-bottom: 40px;\n  &:not(:first-of-type) {\n    margin-left: 10px;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(h.a)([""]);return v=function(){return e},e}function g(){var e=Object(h.a)(["\n  flex-grow: ",';\n  flex-shrink: 0;\n  padding: 5px;\n  min-height: 50px;\n  flex-basis: auto;\n  text-align: center;\n  border-top: 1px solid #ddd;\n\n  &[data-type="check"] {\n    flex: 8;\n    ','\n  }\n  &[data-type="mission"] {\n    flex: 25;\n    ','\n  }\n  &[data-type="duration"] {\n    flex: 12;\n  }\n  &[data-type="vente"] {\n    flex: 15;\n  }\n  &[data-type="revient"] {\n    flex: 15;\n  }\n  &[data-type="calcul-duree"] {\n    flex: 15;\n  }\n  &[data-type="calcul-revient"] {\n    flex: 15;\n  }\n']);return g=function(){return e},e}function y(){var e=Object(h.a)(["\n  background: #929292;\n  color: white;\n"]);return y=function(){return e},e}function x(){var e=Object(h.a)(["\n  width: 100%;\n  overflow: hidden;\n  ","\n  ","\n  ","\n"]);return x=function(){return e},e}function w(){var e=Object(h.a)(["\n  border-bottom: 1px solid #ddd;\n  & > * {\n    & ~ * {\n      border-left: 1px solid #ddd;\n    }\n    &:first-of-type {\n      border-left: 1px solid #ddd;\n    }\n    &:last-of-type {\n      border-right: 1px solid #ddd;\n    }\n  }\n"]);return w=function(){return e},e}function j(){var e=Object(h.a)(["\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  * {\n    color: white;\n    font-weight: bold;\n    background: #24b100 !important;\n    border-left: none !important;\n    border-right: none !important;\n  }\n"]);return j=function(){return e},e}function E(){var e=Object(h.a)(["\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  * {\n    color: white;\n    font-weight: bold;\n    background: #137102 !important;\n    border-left: none !important;\n    border-right: none !important;\n  }\n"]);return E=function(){return e},e}function C(){var e=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n  max-width: 1000px;\n  flex-direction: column;\n  overflow: hidden;\n  #delete-container {\n    width: 100%;\n    overflow: hidden;\n  }\n  #delete-content {\n    width: 100%;\n    background: white;\n  }\n  ","\n"]);return C=function(){return e},e}function O(){var e=Object(h.a)(['\n  * [data-type="check"] { display: none !important; }\n  * [data-type="revient"] { display: none !important; }\n  * [data-type="duration"] { display: none !important; }\n']);return O=function(){return e},e}function k(){var e=Object(h.a)(["\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n"]);return k=function(){return e},e}function P(){var e=Object(h.a)(["\n  body, html {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    color: black;\n  }\n  #root * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n"]);return P=function(){return e},e}var D=Object(f.createGlobalStyle)(P()),S=f.default.div(k()),H=Object(f.css)(O()),M=f.default.div(C(),(function(e){return e.hideCells&&H})),I=Object(f.css)(E()),T=Object(f.css)(j()),F=Object(f.css)(w()),R=f.default.div(x(),(function(e){return e.header&&I}),(function(e){return e.footer&&T}),F),A=Object(f.css)(y()),N=f.default.div(g(),(function(e){return e.flex||1}),A,A),J=f.default.div(v()),V=f.default.button(b(),(function(e){return e.highlight?"white":"#24b100"}),(function(e){return e.highlight?"#24b100":"white"})),z=f.default.input(m(),(function(e){return e.restricted?"50px":"auto"}),(function(e){return e.alignRight?"right":"center"})),q=f.default.span(p()),B=D,G=t(8),L=t(11),K=t(24),Q=t(23),U=t.n(Q),W=function(e){return Number(e.split("h")[0])+Number(e.split("h")[1]/60)},X=function(e){var n,t=Math.trunc(e),a=(n=Math.round(60*(e-t)))<10?"0".concat(n):n;return"".concat(t).concat("h").concat(a)},Y=function(e){var n=e.included,t=e.revient,a=e.duration;if(!a)return"";if(!n)return"";var r=window.localStorage.getItem("hoursPerDay");return Math.round(W(a)/r*t)+" \u20ac HT"},Z={included:!0,mission:"",duration:"",vente:"",revient:""},$=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={missions:JSON.parse(window.localStorage.getItem("missions"))||[],captureClient:!1},t.addMission=function(){t.setState((function(e){var n=e.missions;return{missions:[].concat(Object(K.a)(n),[Z])}}))},t.handleDelete=function(e){t.setState((function(n){return{missions:n.missions.filter((function(n,t){return t!==e}))}}),(function(){return t.save()}))},t.handleIncluded=function(e){var n=Number(e.target.value);t.setState((function(e){return{missions:e.missions.map((function(e,t){return t!==n?e:Object(L.a)({},e,{included:!e.included})}))}}),(function(){return t.save()}))},t.handleChangeField=function(e){e.persist();var n=Number(e.target.dataset.index);t.setState((function(t){return{missions:t.missions.map((function(t,a){return a!==n?t:Object(L.a)({},t,Object(G.a)({},e.target.dataset.label,e.target.value))}))}}),(function(){return t.save()}))},t.save=function(){window.localStorage.setItem("missions",JSON.stringify(t.state.missions))},t.handleCancelEvent=function(e){e.preventDefault(),e.stopPropagation()},t.toggleCaptureClient=function(){return t.setState((function(e){return{captureClient:!e.captureClient}}))},t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.missions,a=n.captureClient;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null,r.a.createElement(V,{onClick:this.addMission},"Ajouter une mission"),r.a.createElement(V,{onClick:this.props.changeHoursPerDay},"Changer le nombre d'heures par jour (",window.localStorage.getItem("hoursPerDay"),")"),r.a.createElement(V,{highlight:a,onClick:this.toggleCaptureClient},"Capture client")),r.a.createElement(M,{hideCells:a},r.a.createElement(R,{header:!0},r.a.createElement(N,{"data-type":"check"},"Inclure"),r.a.createElement(N,{"data-type":"mission"},"Mission"),r.a.createElement(N,{"data-type":"duration"},"Dur\xe9e (HHhMM)"),r.a.createElement(N,{"data-type":"calcul-duree"},"Dur\xe9e",a?"":" \xe9quivalente"),r.a.createElement(N,{"data-type":"vente"},"TJM",a?"":" de vente"," (\u20ac\xa0HT\xa0/\xa0j)"),r.a.createElement(N,{"data-type":"revient"},"TJM de revient (\u20ac\xa0HT\xa0/\xa0j)"),r.a.createElement(N,{"data-type":"calcul-revient"},"Facturable HT")),t.map((function(n,t){var o=n.included,i=n.mission,u=n.duration,c=n.vente,l=n.revient;return!o&&a?null:r.a.createElement(U.a,{onDelete:function(){return e.handleDelete(t)},deleteColor:"#137102",deleteText:"Supprimer",height:50,key:t},r.a.createElement(R,null,r.a.createElement(N,{as:"button","data-type":"check",value:t,onClick:e.handleIncluded},r.a.createElement("input",{key:o,type:"checkbox",checked:o,value:t,onChange:e.handleIncluded,onClick:e.handleCancelEvent})),r.a.createElement(N,{"data-type":"mission"},r.a.createElement(z,{key:o,type:"text",value:i,"data-index":t,"data-label":"mission",onChange:e.handleChangeField})),r.a.createElement(N,{"data-type":"duration"},r.a.createElement(z,{key:o,type:"text",value:u,"data-index":t,restricted:!0,"data-label":"duration",onChange:e.handleChangeField})),r.a.createElement(N,{"data-type":"calcul-duree"},function(e){var n=e.vente,t=e.revient,a=e.duration;if(!a)return"";var r=W(a),o=t/n;return o?X(r*o):a}(n)),r.a.createElement(N,{"data-type":"vente"},r.a.createElement(z,{key:o,type:"text",value:c,"data-index":t,"data-label":"vente",restricted:!0,onChange:e.handleChangeField,alignRight:!0}),c&&r.a.createElement(q,null,"\u20ac\xa0HT\xa0/\xa0j")),r.a.createElement(N,{"data-type":"revient"},r.a.createElement(z,{key:o,type:"text",value:l,"data-index":t,"data-label":"revient",restricted:!0,onChange:e.handleChangeField,alignRight:!0}),l&&r.a.createElement(q,null,"\u20ac\xa0HT\xa0/\xa0j")),r.a.createElement(N,{"data-type":"calcul-revient"},Y(n))))})),r.a.createElement(R,{footer:!0},r.a.createElement(N,{"data-type":"check"}),r.a.createElement(N,{"data-type":"mission"},"TOTAL"),r.a.createElement(N,{"data-type":"duration"},function(e){var n=e.reduce((function(e,n){var t=n.duration;return n.included&&t?e+W(t):e}),0);return X(n)}(t)),r.a.createElement(N,{"data-type":"calcul-duree"},function(e){var n=e.reduce((function(e,n){var t=n.duration,a=n.included,r=n.revient,o=n.vente;if(!a)return e;if(!t)return e;var i=r/o;return i?e+W(t)*i:e}),0);return X(n)}(t)),r.a.createElement(N,{"data-type":"vente"}),r.a.createElement(N,{"data-type":"revient"}),r.a.createElement(N,{"data-type":"calcul-revient"},function(e){return e.reduce((function(e,n){var t=Y(n);return t?e+Number(t.replace(" \u20ac HT","")):e}),0)}(t)," \u20ac\xa0HT"))))}}]),n}(r.a.Component);function _(){var e=Object(h.a)(["\n  border-radius: 10px;\n  border: 1px solid #24b100;\n  width: 80%;\n  height: 40px;\n  text-align: center;\n  margin-bottom: 30px;\n"]);return _=function(){return e},e}function ee(){var e=Object(h.a)(["\n  font-size: 20px;\n  margin-bottom: 30px;\n  font-weight: bold;\n"]);return ee=function(){return e},e}function ne(){var e=Object(h.a)(["\n  width: 500px;\n  height: 300px;\n  border-radius: 15px;\n  background: white;\n  flex-direction: column;\n"]);return ne=function(){return e},e}function te(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ",";\n"]);return te=function(){return e},e}var ae=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={value:t.props.initValue||""},t.handleChange=function(e){var n=e.target.value;t.setState({value:n},(function(){t.props.onChange(n)}))},t.handleClick=function(){return t.props.onRemoveModal(t.state.value)},t.handleCancel=function(){return t.props.onRemoveModal(t.props.initValue)},t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.placeholder,t=e.background,a=e.title,o=e.onRemoveModal,i=e.initValue;return r.a.createElement(re,{background:t},r.a.createElement(oe,null,r.a.createElement(ie,null,a),r.a.createElement(ue,{type:"password",autoFocus:!0,onChange:this.handleChange,placeholder:n||i}),o&&r.a.createElement(J,null,r.a.createElement(V,{type:"submit",onSubmit:this.handleClick,onClick:this.handleClick},"Valider"),r.a.createElement(V,{onClick:this.handleCancel},"Annuler"))))}}]),n}(r.a.Component);ae.defaultProps={onChange:function(){return null},onRemoveModal:null};var re=f.default.div(te(),(function(e){return e.background||"#00000099"})),oe=f.default.form(ne()),ie=f.default.span(ee()),ue=f.default.input(_()),ce=ae,le=t(12),de=t.n(le);console.log(de()("coronavirus"));var se=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).handlePasswordChange=function(e){"29f4a4d0f6202a0dfa5ec319ab763229"===de()(e)&&t.props.removeModal()},t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(ce,{title:"Mot de passe",placeholder:"Mot de passe",onChange:this.handlePasswordChange,background:"#000"})}}]),n}(r.a.Component),he=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={showPassword:!0,showHoursPerDay:!1},t.removePassword=function(){return t.setState({showPassword:!1})},t.showChangeHoursPerDay=function(){return t.setState({showHoursPerDay:!0})},t.hideChangeHoursPerDay=function(e){window.localStorage.setItem("hoursPerDay",e),t.setState({showHoursPerDay:!1})},t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){window.localStorage.getItem("hoursPerDay")||window.localStorage.setItem("hoursPerDay",7)}},{key:"render",value:function(){var e=this.state,n=e.showPassword,t=e.showHoursPerDay;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(S,null,r.a.createElement($,{changeHoursPerDay:this.showChangeHoursPerDay}),n&&r.a.createElement(se,{removeModal:this.removePassword}),t&&r.a.createElement(ce,{title:"Changer le nombre d'heures par jour",onRemoveModaloread:this.hideChangeHoursPerDay,initValue:window.localStorage.getItem("hoursPerDay")})))}}]),n}(r.a.Component);i.a.render(r.a.createElement(he,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1c3b5ab8.chunk.js.map