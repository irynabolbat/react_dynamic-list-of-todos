(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(1),o=c.n(i),r=(c(13),c(14),c(6)),d=c.n(r),j=c(0),u=o.a.memo((function(e){var t=e.todos,c=e.onSelect,s=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:d()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:d()("far",{"fa-eye":!s,"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===e.id})})})})})]},e.id)}))})]})}));!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));var b=function(e){var t=e.filteredBy,c=e.onFilteredBy,a=e.query,n=e.onQuery;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return n(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=o.a.memo((function(e){var t=e.loading,c=e.onLoading,s=e.selectedTodo,a=e.onSelectedTodo,n=Object(i.useState)(null),o=Object(l.a)(n,2),r=o[0],d=o[1];Object(i.useEffect)((function(){var e;c(!0),(e=s.userId,m("/users/".concat(e)).catch((function(){throw new Error("Error")}))).then(d).finally((function(){return c(!1)}))}),[s]);var u=t&&(!s||!r);return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===s||void 0===s?void 0:s.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return a(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===s||void 0===s?void 0:s.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==s&&void 0!==s&&s.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),children:null===r||void 0===r?void 0:r.name})]})]})]})]})})),x=c(8);var f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),o=Object(l.a)(n,2),r=o[0],d=o[1],f=Object(i.useState)(null),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(s.All),g=Object(l.a)(y,2),w=g[0],S=g[1],k=Object(i.useState)(""),C=Object(l.a)(k,2),T=C[0],A=C[1];Object(i.useEffect)((function(){d(!0),m("/todos").catch((function(){throw new Error("Error")})).then(a).finally((function(){return d(!1)}))}),[]);var E=function(e,t,c){var a=Object(x.a)(e);if(c){var n=c.toLowerCase().trim();a=a.filter((function(e){return e.title.toLowerCase().includes(n)}))}switch(t){case s.All:return a;case s.Completed:return a.filter((function(e){return e.completed}));case s.Active:return a.filter((function(e){return!e.completed}));default:return a}}(c,w,T),B=(!r||r&&p)&&0!==c.length;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{filteredBy:w,onFilteredBy:S,query:T,onQuery:A})}),Object(j.jsxs)("div",{className:"block",children:[r&&!p&&Object(j.jsx)(h,{}),B&&Object(j.jsx)(u,{todos:E,onSelect:function(e){return N(e)},selectedTodo:p})]})]})})}),p&&Object(j.jsx)(O,{loading:r,onLoading:d,selectedTodo:p,onSelectedTodo:N})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a0af9330.chunk.js.map