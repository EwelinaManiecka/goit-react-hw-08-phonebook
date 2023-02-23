"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[101],{2101:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(2791),a=n(4270),i=n(9434),u=n(2007),c=n.n(u),o="Notification_msg__jIyxQ",s=n(3329),l=function(e){var t=e.message,n=o;return(0,s.jsx)("p",{className:n,children:t})},f=n(208),p="Contact_wrapper__K-zLN",m="Contact_text__Wq-3f",d="Contact_btnDelete__9qWfp",h=function(e){var t=e.contact,n=(0,i.I0)();return(0,s.jsxs)("div",{className:p,children:[(0,s.jsxs)("p",{className:m,children:[t.name,": ",t.phone]}),(0,s.jsx)("button",{className:d,type:"button",onClick:function(){return n((0,f.GK)(t.id))},children:"Delete"})]})},v="ContactList_list__csErn",y="ContactList_item__EZYHO",_="NOT_FOUND";var x=function(e,t){return e===t};function g(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?x:r,i=n.maxSize,u=void 0===i?1:i,c=n.resultEqualityCheck,o=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),s=1===u?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:_},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(o):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return _}return{get:r,put:function(t,a){r(t)===_&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,o);function l(){var t=s.get(arguments);if(t===_){if(t=e.apply(null,arguments),c){var n=s.getEntries(),r=n.find((function(e){return c(e.value,t)}));r&&(t=r.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function j(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var i,u=0,c={memoizeOptions:void 0},o=r.pop();if("object"===typeof o&&(c=o,o=r.pop()),"function"!==typeof o)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof o+"]");var s=c,l=s.memoizeOptions,f=void 0===l?n:l,p=Array.isArray(f)?f:[f],m=j(r),d=e.apply(void 0,[function(){return u++,o.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return i=d.apply(null,e)}));return Object.assign(h,{resultFunc:o,memoizedResultFunc:d,dependencies:m,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return a}var N=b(g),C=function(e){return e.contacts.items},F=function(e){return e.contacts.loading},k=N([C,function(e){return e.filters.status}],(function(e,t){return t?e.filter((function(e){return e.name.includes(t)})):e})),q=function(){var e=(0,i.v9)(k);return(0,s.jsx)(s.Fragment,{children:e.length>0?(0,s.jsx)("ul",{className:v,children:e.map((function(e){return(0,s.jsx)("li",{className:y,children:(0,s.jsx)(h,{contact:e})},e.id)}))}):(0,s.jsx)(l,{message:"You don't have this contact."})})};q.prototype={statusFilter:c().arrayOf(c().shape({id:c().string.isRequired,name:c().string.isRequired,number:c().number.isRequired})),onDeleteContact:c().func.isRequired};var w=q,A="ContactForm_container__qpJ1N",z="ContactForm_title__jZguf",E="ContactForm_input__Bl93P",R="ContactForm_btnSubmit__+7wnS",S=n(6382),O=function(){var e=(0,i.v9)(C),t=(0,i.I0)(),n=(0,r.useRef)(!1);(0,r.useEffect)((function(){n.current?localStorage.setItem("Contacts",JSON.stringify(e)):n.current=!0}),[e]);return(0,s.jsx)("div",{className:A,children:(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target,a=r.name.value,i=r.number.value,u={id:(0,S.x0)(),name:a,number:i};if(e.some((function(e){return e.name===a})))alert("".concat(a," is already in contacts"));else if(e.some((function(e){return e.number===i}))){var c=e.filter((function(e){return e.number===i}))[0].name;alert("".concat(i," is already in contact with ").concat(c))}else t((0,f.uK)(u)),r.reset()},children:[(0,s.jsx)("p",{className:z,children:"Name"}),(0,s.jsx)("input",{className:E,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,s.jsx)("p",{className:z,children:"Number"}),(0,s.jsx)("input",{className:E,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,s.jsx)("button",{className:R,type:"submit",children:"Add contact"})]})})},Z=n(6895),I="Filter_title__pSkfx",D="Filter_input__N7T3z",J=function(){var e=(0,i.I0)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:I,children:"Find contacts by name"}),(0,s.jsx)("input",{className:D,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:function(t){var n=t.target.value;e((0,Z.b)(n))}})]})};function K(){var e=(0,i.I0)(),t=(0,i.v9)(F);return(0,r.useEffect)((function(){e((0,f.yF)())}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.q,{children:(0,s.jsx)("h1",{children:"Your contacts"})}),(0,s.jsx)(O,{}),(0,s.jsx)("div",{children:t&&"Request in progres..."}),(0,s.jsx)(J,{}),(0,s.jsx)(w,{})]})}J.prototype={filter:c().func.isRequired}}}]);
//# sourceMappingURL=101.4740236b.chunk.js.map