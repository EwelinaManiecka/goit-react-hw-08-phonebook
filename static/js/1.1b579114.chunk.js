"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[1],[,function(t,n,e){e.r(n),e.d(n,{default:function(){return D}});var r=e(791),u=e(270),i=e(434),o=e(7),c=e.n(o),a="Notification_msg__jIyxQ",s=e(184),l=function(t){var n=t.message,e=a;return(0,s.jsx)("p",{className:e,children:n})},f=e(208),p="Contact_wrapper__K-zLN",v="Contact_text__Wq-3f",d="Contact_btnDelete__9qWfp",m=function(t){var n=t.contact,e=(0,i.I0)();return(0,s.jsxs)("div",{className:p,children:[(0,s.jsxs)("p",{className:v,children:[n.name,": ",n.phone]}),(0,s.jsx)("button",{className:d,type:"button",onClick:function(){return e((0,f.GK)(n.id))},children:"Delete"})]})},h="ContactList_list__csErn",y="ContactList_item__EZYHO",_="NOT_FOUND";var x=function(t,n){return t===n};function g(t,n){var e="object"===typeof n?n:{equalityCheck:n},r=e.equalityCheck,u=void 0===r?x:r,i=e.maxSize,o=void 0===i?1:i,c=e.resultEqualityCheck,a=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!t(n[u],e[u]))return!1;return!0}}(u),s=1===o?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:_},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(t,n){var e=[];function r(t){var r=e.findIndex((function(e){return n(t,e.key)}));if(r>-1){var u=e[r];return r>0&&(e.splice(r,1),e.unshift(u)),u.value}return _}return{get:r,put:function(n,u){r(n)===_&&(e.unshift({key:n,value:u}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(o,a);function l(){var n=s.get(arguments);if(n===_){if(n=t.apply(null,arguments),c){var e=s.getEntries(),r=e.find((function(t){return c(t.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function j(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function b(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var i,o=0,c={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(c=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var s=c,l=s.memoizeOptions,f=void 0===l?e:l,p=Array.isArray(f)?f:[f],v=j(r),d=t.apply(void 0,[function(){return o++,a.apply(null,arguments)}].concat(p)),m=t((function(){for(var t=[],n=v.length,e=0;e<n;e++)t.push(v[e].apply(null,arguments));return i=d.apply(null,t)}));return Object.assign(m,{resultFunc:a,memoizedResultFunc:d,dependencies:v,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return u}var C=b(g),k=function(t){return t.contacts.items},w=function(t){return t.filters.status},N=function(t){return t.contacts.loading},E=C([k,w],(function(t,n){return n?t.filter((function(t){return t.name.includes(n)})):t})),q=function(){var t=(0,i.v9)(k),n=(0,i.v9)(w),e=(0,i.v9)(E);return(0,s.jsx)(s.Fragment,{children:e.length>0?(0,s.jsx)("ul",{className:h,children:t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return(0,s.jsx)("li",{className:y,children:(0,s.jsx)(m,{contact:t})},t.id)}))}):(0,s.jsx)(l,{message:"You don't have this contact."})})};q.prototype={statusFilter:c().arrayOf(c().shape({id:c().string.isRequired,name:c().string.isRequired,number:c().number.isRequired})),onDeleteContact:c().func.isRequired};var R=q,A="ContactEditor_form__U4ufl",F="ContactEditor_input__Nbns0",O="ContactEditor_button__yGZhk",z=function(){var t=(0,i.I0)();return(0,s.jsxs)("form",{className:A,onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r=e.elements.text.value;if(""!==r)return t((0,f.uK)(r)),void e.reset();alert("Contact cannot be empty. Enter some text")},children:[(0,s.jsx)("input",{className:F,name:"text"}),(0,s.jsx)("button",{className:O,type:"submit",children:"Add contact"})]})};function D(){var t=(0,i.I0)(),n=(0,i.v9)(N);return(0,r.useEffect)((function(){t((0,f.yF)())}),[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.q,{children:(0,s.jsx)("h1",{children:"Your contacts"})}),(0,s.jsx)(z,{}),(0,s.jsx)("div",{children:n&&"Request in progres..."}),(0,s.jsx)(R,{})]})}}]]);
//# sourceMappingURL=1.1b579114.chunk.js.map