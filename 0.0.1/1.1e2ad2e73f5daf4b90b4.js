webpackJsonp([1],{265:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(3),u=n(a),o=r(19),c=n(o),s=r(26),i=n(s),d=r(772),f=n(d),l=r(820),p=r(976),y=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(p),h=r(252),v=(n(h),r(96)),b=n(v),x=(r(35),r(148)),m=n(x);e.default=(0,f.default)(l.model,{namespace:"doctor",state:{},subscriptions:{setup:function(t){var e=t.dispatch;return t.history.listen(function(t){var r=t.pathname;if(t.search,r.startsWith("/doctor/detail/")){var n=(0,b.default)("/doctor/detail/:id").exec(r);n&&e({type:"detail",payload:n[1]})}else if(r.startsWith("/doctor/edit/")){var a=(0,b.default)("/doctor/edit/:type/:id").exec(r);a&&(e({type:"account/getEdit",payload:a[2]}),e({type:"getEdit",payload:{id:a[2],type:a[1]}}),e({type:"getDataScore",payload:a[2]}))}})}},effects:{detail:i.default.mark(function t(e,r){var n,a,u,o=e.payload,c=r.call,s=r.put,d=r.select;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(function(t){return t.user.token});case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,c(y.detail,n,o);case 7:return a=t.sent,u=a.data,t.next=11,s({type:"save",payload:{detail:u}});case 11:case"end":return t.stop()}},t,this)}),getEdit:i.default.mark(function t(e,r){var n,a,u,o=e.payload,s=r.call,d=r.put,f=r.select;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(function(t){return t.user.token});case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,s(y.getEdit,n,o);case 7:return a=t.sent,u=a.data,t.next=11,d({type:"save",payload:(0,c.default)({},o.type,u)});case 11:case"end":return t.stop()}},t,this)}),putEdit:i.default.mark(function t(e,r){var n,a=e.payload,u=r.call,o=(r.put,r.select);return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t.user.token});case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,u(y.putEdit,n,a);case 7:case"end":return t.stop()}},t,this)}),deleteEdit:i.default.mark(function t(e,r){var n,a=e.payload,u=r.call,o=(r.put,r.select);return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t.user.token});case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,u(y.deleteEdit,n,a);case 7:case"end":return t.stop()}},t,this)}),getDataScore:i.default.mark(function t(e,r){var n,a,o,c=e.payload,s=r.call,d=r.put,f=r.select;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(function(t){return t.user.token});case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:if(!m.default.isEmpty(c)){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,s(y.doctorScore,n,c);case 9:return a=t.sent,o=a.data,t.next=13,d({type:"save",payload:(0,u.default)({},o)});case 13:case"end":return t.stop()}},t,this)})},reducers:{}}),t.exports=e.default},772:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(){for(var t={state:{},subscriptions:{},effects:{},reducers:{}},e=[],r={},n=[],a={},u=[],c={},f=[],l={},p=arguments.length,y=Array(p),h=0;h<p;h++)y[h]=arguments[h];var v=y.reduce(function(t,d){return t.namespace=d.namespace,"object"!==(0,s.default)(d.state)||Array.isArray(d.state)?"state"in d&&(t.state=d.state):(i(d.state,e,r),(0,o.default)(t.state,d.state)),i(d.subscriptions,n,a),(0,o.default)(t.subscriptions,d.subscriptions),i(d.effects,u,c),(0,o.default)(t.effects,d.effects),i(d.reducers,f,l),(0,o.default)(t.reducers,d.reducers),t},t);return d(v,"state",r),d(v,"subscriptions",a),d(v,"effects",c),d(v,"reducers",l),v}Object.defineProperty(e,"__esModule",{value:!0});var u=r(257),o=n(u),c=r(32),s=n(c);e.default=a;var i=function(t,e,r){},d=function(t,e,r){}},820:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.pageModel=e.model=void 0;var a=r(3),u=n(a),o=r(772),c=n(o),s={reducers:{save:function(t,e){var r=e.payload;return(0,u.default)({},t,r)},clear:function(){return{}}}},i=(0,c.default)(s,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(t){return"\u5171 "+t+" \u6761"},current:1,total:0}},reducers:{querySuccess:function(t,e){var r=e.payload,n=r.list,a=r.pagination;return(0,u.default)({},t,{list:n,pagination:(0,u.default)({},t.pagination,a)})}}});e.model=s,e.pageModel=i},976:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deleteEdit=e.putEdit=e.getEdit=e.doctorScore=e.detail=void 0;var a=r(100),u=n(a),o=r(26),c=n(o),s=r(75),i=n(s),d=(e.detail=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var n;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=v+"/"+r,t.abrupt("return",(0,f.default)(n,{headers:{"Content-Type":"application/json",Authorization:e},method:"GET"}));case 2:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.doctorScore=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var n;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=h.doctorScore+"/"+r,t.abrupt("return",(0,f.default)(n,{headers:{"Content-Type":"application/json",Authorization:e},method:"GET"}));case 2:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.getEdit=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var n;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=A(r),console.log(n),t.abrupt("return",(0,f.default)(n,{headers:{"Content-Type":"application/json",Authorization:e},method:"GET"}));case 3:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.putEdit=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var n,a;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.data,a=A(r),console.log(a),t.abrupt("return",(0,f.default)(a,{headers:{"Content-Type":"application/json",Authorization:e},method:"PUT",body:(0,u.default)(n)}));case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.deleteEdit=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var n,a;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.data,a=S(r),console.log(a),t.abrupt("return",(0,f.default)(a,{headers:{"Content-Type":"application/json",Authorization:e},method:"DELETE",body:(0,u.default)(n)}));case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),r(101)),f=n(d),l=r(36),p=n(l),y=r(252),h=(n(y),p.default.api),v=h.doctor,b=h.doctorBasic,x=h.doctorIdentity,m=h.doctorContact,w=h.doctorOccupation,E=h.doctorEducation,k=h.doctorAcademic,g=h.doctorEnterprise,_=h.doctorFamily,j=h.doctorAssets,M=h.doctorSocial,T=h.deleteEditInfo,A=function(t){var e=t.id,r=t.type,n="/"+e;return"basic"===r?n=b+n:"identity"===r?n=x+n:"contact"===r?n=m+n:"occupation"===r?n=w+n:"education"===r?n=E+n:"academic"===r?n=k+n:"family"===r?n=_+n:"assets"===r?n=j+n:"enterprise"===r?n=g+n:"social"===r&&(n=M+n),n},S=function(t){var e=t.id,r=t.type,n=t.rId;return T+"/"+e+"/"+r+"/"+n}}});