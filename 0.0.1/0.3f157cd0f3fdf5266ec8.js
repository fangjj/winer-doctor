webpackJsonp([0],{1388:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.reduce(function(e,t){return e.namespace=t.namespace,"object"!==(0,s.default)(t.state)||Array.isArray(t.state)?"state"in t&&(e.state=t.state):(0,c.default)(e.state,t.state),(0,c.default)(e.subscriptions,t.subscriptions),(0,c.default)(e.effects,t.effects),(0,c.default)(e.reducers,t.reducers),e},e)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(294),c=n(a),o=r(54),s=n(o);t.default=u},1389:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.doctorIdentity=t.doctorContact=t.doctorFamily=t.doctorAssets=t.doctorSocial=t.doctorEnterprise=t.doctorOccupation=t.doctorAcademic=t.doctorEducation=t.doctorBasic=t.multiRemove=t.remove=t.create=t.getDoctor=t.query=void 0;var u=r(13),a=n(u),c=r(3),o=n(c),s=r(119),i=n(s),d=r(287),f=n(d),l=(t.query=function(){var e=(0,f.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)({url:h,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getDoctor=function(){var e=(0,f.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)({url:v+"/"+t,method:"get"}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.create=function(){var e=(0,f.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)({url:h,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,f.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("remove",t),e.abrupt("return",(0,l.request)({url:h+"/"+t,method:"delete"}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.multiRemove=function(){var e=(0,f.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)({url:h,method:"delete",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.doctorBasic=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorBasic accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorBasic+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorEducation=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorEducation accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorEducation+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorAcademic=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorOccupation=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorEducation accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)((0,a.default)({url:p.doctorAcademic+"/"+t},"url",p.doctorOccupation+"/"+t),r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorEnterprise=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorEducation accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorEnterprise+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorSocial=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorEducation accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorSocial+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorAssets=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorEducation accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorAssets+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorFamily=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorFamily accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorFamily+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorContact=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorContact accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorContact+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.doctorIdentity=function(){var e=(0,f.default)(i.default.mark(function e(t,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.error("doctorContact accountId is needed!"),e.abrupt("return");case 3:return e.abrupt("return",(0,l.request)((0,o.default)({url:p.doctorIdentity+"/"+t},r)));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),r(74)),p=l.config.api,h=p.accounts,v=p.doctor},1520:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var u=r(3),a=n(u),c=r(1388),o=n(c),s={reducers:{updateState:function(e,t){var r=t.payload;return(0,a.default)({},e,r)}}},i=(0,o.default)(s,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"Total "+e+" Items"},current:1,total:0}},reducers:{querySuccess:function(e,t){var r=t.payload,n=r.list,u=r.pagination;return(0,a.default)({},e,{list:n,pagination:(0,a.default)({},e.pagination,u)})}}});e.exports={model:s,pageModel:i}},299:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(3),a=n(u),c=r(119),o=n(c),s=r(1389),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),d=(r(74),r(1388)),f=n(d),l=r(1520);t.default=(0,f.default)(l.pageModel,{namespace:"accounts",state:{selectedRowKeys:[]},reducers:{},effects:{fetch:o.default.mark(function e(t,r){var n,u=t.payload,a=void 0===u?{currentPage:1,pageSize:10}:u,c=r.call,s=r.put;r.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(i.query,a);case 2:if(n=e.sent,!n.success){e.next=6;break}return e.next=6,s({type:"querySuccess",payload:{list:n.data.list,pagination:{currentPage:Number(a.page)||1,pageSize:Number(a.pageSize)||10,total:n.data.total}}});case 6:case"end":return e.stop()}},e,this)}),create:o.default.mark(function e(t,r){var n,u,a=r.call;r.put,r.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.next=3,a(i.create,n);case 3:if(u=e.sent,!u.success){e.next=7;break}e.next=8;break;case 7:throw u;case 8:case"end":return e.stop()}},e,this)}),edit:o.default.mark(function e(t,r){var n,u,c,s,i,d=r.call;r.put,r.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,u=n.value,c=n.id,s=(0,a.default)({},u,{id:c}),e.next=5,d(update,s);case 5:if(i=e.sent,!i.success){e.next=9;break}e.next=10;break;case 9:throw i;case 10:case"end":return e.stop()}},e,this)}),delete:o.default.mark(function e(t,r){var n,u,a,c=t.payload,s=r.call,d=r.put,f=r.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(i.remove,c);case 2:return n=e.sent,e.next=5,f(function(e){return e.accounts});case 5:if(u=e.sent,a=u.selectedRowKeys,!n.success){e.next=14;break}return e.next=10,d({type:"updateState",payload:{selectedRowKeys:a.filter(function(e){return e!==c})}});case 10:return e.next=12,d({type:"fetch"});case 12:e.next=15;break;case 14:throw n;case 15:case"end":return e.stop()}},e,this)}),multiDelete:o.default.mark(function e(t,r){var n,u=t.payload,a=r.call,c=r.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(i.multiRemove,u);case 2:if(n=e.sent,!n.success){e.next=10;break}return e.next=6,c({type:"updateState",payload:{selectedRowKeys:[]}});case 6:return e.next=8,c({type:"fetch"});case 8:e.next=11;break;case 10:throw n;case 11:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var r=e.pathname,n=e.query;"/doctor/list"===r&&t({type:"fetch",payload:n})})}}}),e.exports=t.default}});