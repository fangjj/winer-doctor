webpackJsonp([14],{589:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return{value:t.count.value}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),l=u(o),r=n(96),c=n(978),f=u(c),d=n(979),i=u(d),s=function(t){var e=t.value,n=t.dispatch,u=function(){n({type:"count/addCount",payload:{step:2}})};return l.default.createElement("div",{className:f.default.normal},"count: "+e,l.default.createElement("button",{onClick:u},"+"),l.default.createElement(i.default,null))};e.default=(0,r.connect)(a)(s),t.exports=e.default},609:function(t,e,n){t.exports={default:n(655),__esModule:!0}},655:function(t,e,n){n(656),t.exports=n(10).Object.getPrototypeOf},656:function(t,e,n){var u=n(74),a=n(257);n(258)("getPrototypeOf",function(){return function(t){return a(u(t))}})},978:function(t,e){t.exports={normal:"_3hw8Y"}},979:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(609),o=u(a),l=n(11),r=u(l),c=n(12),f=u(c),d=n(15),i=u(d),s=n(16),v=u(s),p=n(0),_=u(p),m=n(980),C=u(m),h=function(t){function e(t){(0,r.default)(this,e);var n=(0,i.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return n.addCountLocal=function(t){var e=n.state.value+t;n.setState({value:e})},n.state={a:1,value:0},n}return(0,v.default)(e,t),(0,f.default)(e,[{key:"render",value:function(){var t=this;return _.default.createElement("div",{className:C.default.normal},"CountLocal value is "+this.state.value,_.default.createElement("button",{onClick:function(){return t.addCountLocal(2)}},"addCountLocal"))}}]),e}(p.Component);e.default=h,t.exports=e.default},980:function(t,e){t.exports={normal:"_2eZw_"}}});