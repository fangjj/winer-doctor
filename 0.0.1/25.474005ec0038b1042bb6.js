webpackJsonp([25],{1213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(119),a=r(u),o=n(3),s=r(o),c=n(193),l=n(2047),i=n(74),f=i.config.prefix;t.default={namespace:"login",state:{token:null},reducers:{save:function(e,t){var n=t.payload,r=n.token;return window.localStorage.setItem(f+"Token",r),(0,s.default)({},e,{token:r})},remove:function(e){return window.localStorage.removeItem(f+"Token"),(0,s.default)({},e,{token:null})}},effects:{login:a.default.mark(function e(t,n){var r,u,o,s,i=t.payload,f=n.put,p=n.call,d=n.select;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(l.login,i);case 2:if(r=e.sent,console.log(r),!r.success){e.next=27;break}return e.next=7,f({type:"save",payload:{token:r.data.token}});case 7:return e.next=9,f({type:"app/getUserTypes"});case 9:return e.next=11,f({type:"app/getMedicalField"});case 11:return e.next=13,d(function(e){return e.app});case 13:return u=e.sent,o=u.locationQuery,s=o.from,e.next=18,f({type:"app/query"});case 18:if(!s||"/login"===s){e.next=23;break}return e.next=21,f(c.routerRedux.push(s));case 21:e.next=25;break;case 23:return e.next=25,f(c.routerRedux.push("/dashboard"));case 25:e.next=28;break;case 27:throw r;case 28:case"end":return e.stop()}},e,this)})}},e.exports=t.default},2047:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.logout=t.login=void 0;var u=n(119),a=r(u),o=n(287),s=r(o),c=(t.login=function(){var e=(0,s.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:i,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.logout=function(){var e=(0,s.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)({url:f,method:"delete"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n(74)),l=c.config.api,i=l.userLogin,f=l.userLogout}});