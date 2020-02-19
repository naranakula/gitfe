(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{351:function(t,e,n){"use strict";n.r(e);var r=n(40),o=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"私有路由实现方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#私有路由实现方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 私有路由实现方案")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("import React from 'react'\nimport { Route, Redirect } from 'react-router-dom'\n\nconst PrivateRoute = ({ component: Component, isPrivate, ...rest }) => (\n  <Route\n    {...rest}\n    render={props =>\n      isPrivate ? (\n        <Component {...props} />\n      ) : (\n        <Redirect\n          to={{\n            pathname: '/notFound',\n            state: { from: props.location }\n          }}\n        />\n      )\n    }\n  />\n)\nexport default PrivateRoute\n\n")])])])])},[],!1,null,null,null);e.default=o.exports}}]);