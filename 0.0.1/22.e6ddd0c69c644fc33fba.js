webpackJsonp([22],{1225:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(119),n=r(u),s=a(3),o=r(s),c=a(1388),i=r(c),f=a(2072),l=a(1520),d=a(487),p=r(d);t.default=(0,i.default)(l.pageModel,{namespace:"post",subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){"/post"===e.pathname&&t({type:"query",payload:(0,o.default)({status:2},p.default.parse(e.search))})})}},effects:{query:n.default.mark(function e(t,a){var r,u=t.payload,s=a.call,o=a.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(f.query,u);case 2:if(r=e.sent,!r.success){e.next=8;break}return e.next=6,o({type:"querySuccess",payload:{list:r.data,pagination:{current:Number(u.page)||1,pageSize:Number(u.pageSize)||10,total:r.total}}});case 6:e.next=9;break;case 8:throw r;case 9:case"end":return e.stop()}},e,this)})}}),e.exports=t.default},1388:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];return a.reduce(function(e,t){return e.namespace=t.namespace,"object"!==(0,c.default)(t.state)||Array.isArray(t.state)?"state"in t&&(e.state=t.state):(0,s.default)(e.state,t.state),(0,s.default)(e.subscriptions,t.subscriptions),(0,s.default)(e.effects,t.effects),(0,s.default)(e.reducers,t.reducers),e},e)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(294),s=r(n),o=a(54),c=r(o);t.default=u},1520:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=a(3),n=r(u),s=a(1388),o=r(s),c={reducers:{updateState:function(e,t){var a=t.payload;return(0,n.default)({},e,a)}}},i=(0,o.default)(c,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"Total "+e+" Items"},current:1,total:0}},reducers:{querySuccess:function(e,t){var a=t.payload,r=a.list,u=a.pagination;return(0,n.default)({},e,{list:r,pagination:(0,n.default)({},e.pagination,u)})}}});e.exports={model:c,pageModel:i}},2072:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.query=void 0;var u=a(119),n=r(u),s=a(287),o=r(s),c=(t.query=function(){var e=(0,o.default)(n.default.mark(function e(t){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:f,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(74)),i=c.config.api,f=i.posts}});