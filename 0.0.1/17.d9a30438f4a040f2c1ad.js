webpackJsonp([17],{1106:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.putEdit=t.create=t.multiRemove=t.remove=t.fetch=void 0;var a=r(101),u=n(a),s=r(26),c=n(s),o=r(76),i=n(o),f=(t.fetch=function(){var e=(0,i.default)(c.default.mark(function e(t,r){var n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=x+"?"+v.default.stringify(r),e.abrupt("return",(0,l.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"GET"}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,i.default)(c.default.mark(function e(t,r){var n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=x+"/"+r,e.abrupt("return",(0,l.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"DELETE"}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.multiRemove=function(){var e=(0,i.default)(c.default.mark(function e(t,r){var n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=x+"?"+v.default.stringify(r),e.abrupt("return",(0,l.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"DELETE"}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.create=function(){var e=(0,i.default)(c.default.mark(function e(t,r){var n;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=x,e.abrupt("return",(0,l.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"POST",body:(0,u.default)(r)}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.putEdit=function(){var e=(0,i.default)(c.default.mark(function e(t,r){var n,a,s;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.id,a=r.data,s=x+"/"+n,e.abrupt("return",(0,l.default)(s,{headers:{"Content-Type":"application/json",Authorization:t},method:"PUT",body:(0,u.default)(a)}));case 3:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),r(102)),l=n(f),p=r(36),d=n(p),h=r(253),v=n(h),y=d.default.api,x=y.privilege},601:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(26),u=n(a),s=r(751),c=n(s),o=r(826),i=r(1106),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i),l=r(253),p=n(l),d=(r(35),r(98)),h=n(d);t.default=(0,c.default)(o.pageModel,{namespace:"privilege",state:{selectedRowKeys:[]},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var r=e.pathname,n=e.search;if("/authority/list"===r){var a=p.default.parse(n);t({type:"fetch",payload:a})}})}},effects:{fetch:u.default.mark(function e(t,r){var n,a,s,c,o,i,l=t.payload,p=r.call,d=r.put,v=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h.default.isEmpty(l)&&(l={currentPage:1,pageSize:10}),e.next=3,v(function(e){return e.user.token});case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,p(f.fetch,n,l);case 8:return a=e.sent,s=a.data,c=s||{},o=c.list,i=c.total,e.next=13,d({type:"save",payload:{list:o,pagination:{current:Number(l.currentPage)||1,pageSize:Number(l.pageSize)||10,total:i}}});case 13:case"end":return e.stop()}},e,this)}),delete:u.default.mark(function e(t,r){var n,a,s,c,o,i=t.payload,l=r.call,d=r.put,h=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,l(f.remove,n,i);case 7:return e.next=9,h(function(e){return e.privilege});case 9:return a=e.sent,s=a.selectedRowKeys,e.next=13,d({type:"save",payload:{selectedRowKeys:s.filter(function(e){return e!==i})}});case 13:return e.next=15,h(function(e){return e.routing.location});case 15:return c=e.sent,o=c.search,e.next=19,d({type:"fetch",payload:p.default.parse(o)});case 19:case"end":return e.stop()}},e,this)}),multiDelete:u.default.mark(function e(t,r){var n,a,s,c=t.payload,o=r.call,i=r.put;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,select(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,o(f.multiRemove,c);case 7:return e.next=9,i({type:"save",payload:{selectedRowKeys:[]}});case 9:return e.next=11,select(function(e){return e.routing.location});case 11:return a=e.sent,s=a.search,e.next=15,i({type:"fetch",payload:p.default.parse(s)});case 15:case"end":return e.stop()}},e,this)}),create:u.default.mark(function e(t,r){var n,a,s,c,o=r.call,i=r.put,l=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return a=t.payload,e.next=8,o(f.create,n,a);case 8:return s=e.sent,c=s.data,e.next=12,i({type:"fetch"});case 12:case"end":return e.stop()}},e,this)}),putEdit:u.default.mark(function e(t,r){var n,a=t.payload,s=r.call,c=r.put,o=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,s(f.putEdit,n,a);case 7:return e.next=9,c({type:"fetch"});case 9:case"end":return e.stop()}},e,this)})},reducers:{}}),e.exports=t.default},751:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=[],r={},n=[],a={},u=[],c={},l=[],p={},d=arguments.length,h=Array(d),v=0;v<d;v++)h[v]=arguments[v];var y=h.reduce(function(e,f){return e.namespace=f.namespace,"object"!==(0,o.default)(f.state)||Array.isArray(f.state)?"state"in f&&(e.state=f.state):(i(f.state,t,r),(0,s.default)(e.state,f.state)),i(f.subscriptions,n,a),(0,s.default)(e.subscriptions,f.subscriptions),i(f.effects,u,c),(0,s.default)(e.effects,f.effects),i(f.reducers,l,p),(0,s.default)(e.reducers,f.reducers),e},e);return f(y,"state",r),f(y,"subscriptions",a),f(y,"effects",c),f(y,"reducers",p),y}Object.defineProperty(t,"__esModule",{value:!0});var u=r(262),s=n(u),c=r(31),o=n(c);t.default=a;var i=function(e,t,r){},f=function(e,t,r){}},826:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.pageModel=t.model=void 0;var a=r(3),u=n(a),s=r(751),c=n(s),o={reducers:{save:function(e,t){var r=t.payload;return(0,u.default)({},e,r)},clear:function(){return{}}}},i=(0,c.default)(o,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"\u5171 "+e+" \u6761"},current:1,total:0}},reducers:{querySuccess:function(e,t){var r=t.payload,n=r.list,a=r.pagination;return(0,u.default)({},e,{list:n,pagination:(0,u.default)({},e.pagination,a)})}}});t.model=o,t.pageModel=i}});