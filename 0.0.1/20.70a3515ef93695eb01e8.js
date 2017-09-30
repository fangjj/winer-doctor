webpackJsonp([20],{1204:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),u=n(a),s=r(119),c=n(s),o=r(1388),i=n(o),f=r(74),d=r(1758),l=r(1911),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),y=r(1520),h=p.query,v=f.config.prefix;t.default=(0,i.default)(y.pageModel,{namespace:"user",state:{currentItem:{},modalVisible:!1,modalType:"create",selectedRowKeys:[],isMotion:"true"===window.localStorage.getItem(v+"userIsMotion")},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){if("/user"===e.pathname){var r=e.query||{current:1,pageSize:10};t({type:"query",payload:r})}})}},effects:{query:c.default.mark(function e(t,r){var n,a=t.payload,u=void 0===a?{}:a,s=r.call,o=r.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(h,u);case 2:if(!(n=e.sent)){e.next=6;break}return e.next=6,o({type:"querySuccess",payload:{list:n.data,pagination:{current:Number(u.page)||1,pageSize:Number(u.pageSize)||10,total:n.total}}});case 6:case"end":return e.stop()}},e,this)}),delete:c.default.mark(function e(t,r){var n,a,u,s=t.payload,o=r.call,i=r.put,f=r.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(d.remove,{id:s});case 2:return n=e.sent,e.next=5,f(function(e){return e.user});case 5:if(a=e.sent,u=a.selectedRowKeys,!n.success){e.next=14;break}return e.next=10,i({type:"updateState",payload:{selectedRowKeys:u.filter(function(e){return e!==s})}});case 10:return e.next=12,i({type:"query"});case 12:e.next=15;break;case 14:throw n;case 15:case"end":return e.stop()}},e,this)}),multiDelete:c.default.mark(function e(t,r){var n,a=t.payload,u=r.call,s=r.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(p.remove,a);case 2:if(n=e.sent,!n.success){e.next=10;break}return e.next=6,s({type:"updateState",payload:{selectedRowKeys:[]}});case 6:return e.next=8,s({type:"query"});case 8:e.next=11;break;case 10:throw n;case 11:case"end":return e.stop()}},e,this)}),create:c.default.mark(function e(t,r){var n,a=t.payload,u=r.call,s=r.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(d.create,a);case 2:if(n=e.sent,!n.success){e.next=10;break}return e.next=6,s({type:"hideModal"});case 6:return e.next=8,s({type:"query"});case 8:e.next=11;break;case 10:throw n;case 11:case"end":return e.stop()}},e,this)}),update:c.default.mark(function e(t,r){var n,a,s,o=t.payload,i=r.select,f=r.call,l=r.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(function(e){return e.user.currentItem.id});case 2:return n=e.sent,a=(0,u.default)({},o,{id:n}),e.next=6,f(d.update,a);case 6:if(s=e.sent,!s.success){e.next=14;break}return e.next=10,l({type:"hideModal"});case 10:return e.next=12,l({type:"query"});case 12:e.next=15;break;case 14:throw s;case 15:case"end":return e.stop()}},e,this)})},reducers:{showModal:function(e,t){var r=t.payload;return(0,u.default)({},e,r,{modalVisible:!0})},hideModal:function(e){return(0,u.default)({},e,{modalVisible:!1})},switchIsMotion:function(e){return window.localStorage.setItem(v+"userIsMotion",!e.isMotion),(0,u.default)({},e,{isMotion:!e.isMotion})}}}),e.exports=t.default},1388:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.reduce(function(e,t){return e.namespace=t.namespace,"object"!==(0,o.default)(t.state)||Array.isArray(t.state)?"state"in t&&(e.state=t.state):(0,s.default)(e.state,t.state),(0,s.default)(e.subscriptions,t.subscriptions),(0,s.default)(e.effects,t.effects),(0,s.default)(e.reducers,t.reducers),e},e)}Object.defineProperty(t,"__esModule",{value:!0});var u=r(294),s=n(u),c=r(54),o=n(c);t.default=a},1520:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(3),u=n(a),s=r(1388),c=n(s),o={reducers:{updateState:function(e,t){var r=t.payload;return(0,u.default)({},e,r)}}},i=(0,c.default)(o,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"Total "+e+" Items"},current:1,total:0}},reducers:{querySuccess:function(e,t){var r=t.payload,n=r.list,a=r.pagination;return(0,u.default)({},e,{list:n,pagination:(0,u.default)({},e.pagination,a)})}}});e.exports={model:o,pageModel:i}},1758:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.remove=t.create=t.query=void 0;var a=r(119),u=n(a),s=r(287),c=n(s),o=(t.query=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:f,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.create=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:f.replace("/:id",""),method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:f,method:"delete",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:f,method:"patch",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r(74)),i=o.config.api,f=i.user},1911:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.query=void 0;var a=r(119),u=n(a),s=r(287),c=n(s),o=(t.query=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:f,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:f,method:"delete",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r(74)),i=o.config.api,f=i.users}});