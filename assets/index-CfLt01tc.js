(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var u0={exports:{}},pc={},d0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Cx=Symbol.for("react.fragment"),Rx=Symbol.for("react.strict_mode"),Px=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),kx=Symbol.for("react.forward_ref"),Dx=Symbol.for("react.suspense"),Ix=Symbol.for("react.memo"),Ux=Symbol.for("react.lazy"),Tp=Symbol.iterator;function Fx(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,p0={};function oo(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m0(){}m0.prototype=oo.prototype;function jh(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}var $h=jh.prototype=new m0;$h.constructor=jh;f0($h,oo.prototype);$h.isPureReactComponent=!0;var bp=Array.isArray,g0=Object.prototype.hasOwnProperty,Xh={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function _0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g0.call(e,i)&&!v0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:va,type:t,key:s,ref:o,props:r,_owner:Xh.current}}function Ox(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function zx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ap=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zx(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case va:case Ax:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bc(o,0):i,bp(r)?(n="",t!=null&&(n=t.replace(Ap,"$&/")+"/"),pl(r,e,n,"",function(c){return c})):r!=null&&(qh(r)&&(r=Ox(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ap,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bc(s,a);o+=pl(s,e,n,l,r)}else if(l=Fx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bc(s,a++),o+=pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Bx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},ml={transition:null},Hx={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Xh};function x0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=oo;Ye.Fragment=Cx;Ye.Profiler=Px;Ye.PureComponent=jh;Ye.StrictMode=Rx;Ye.Suspense=Dx;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;Ye.act=x0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=f0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g0.call(e,l)&&!v0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:va,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:Lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};Ye.createElement=_0;Ye.createFactory=function(t){var e=_0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:kx,render:t}};Ye.isValidElement=qh;Ye.lazy=function(t){return{$$typeof:Ux,_payload:{_status:-1,_result:t},_init:Bx}};Ye.memo=function(t,e){return{$$typeof:Ix,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};Ye.unstable_act=x0;Ye.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ye.useContext=function(t){return cn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ye.useId=function(){return cn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ye.useRef=function(t){return cn.current.useRef(t)};Ye.useState=function(t){return cn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return cn.current.useTransition()};Ye.version="18.3.1";d0.exports=Ye;var re=d0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx=re,Gx=Symbol.for("react.element"),Wx=Symbol.for("react.fragment"),jx=Object.prototype.hasOwnProperty,$x=Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xx={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jx.call(e,i)&&!Xx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gx,type:t,key:s,ref:o,props:r,_owner:$x.current}}pc.Fragment=Wx;pc.jsx=y0;pc.jsxs=y0;u0.exports=pc;var x=u0.exports,S0={exports:{}},kn={},M0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,se){var te=k.length;k.push(se);e:for(;0<te;){var oe=te-1>>>1,be=k[oe];if(0<r(be,se))k[oe]=se,k[te]=be,te=oe;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var se=k[0],te=k.pop();if(te!==se){k[0]=te;e:for(var oe=0,be=k.length,Be=be>>>1;oe<Be;){var Q=2*(oe+1)-1,fe=k[Q],_e=Q+1,G=k[_e];if(0>r(fe,te))_e<be&&0>r(G,fe)?(k[oe]=G,k[_e]=te,oe=_e):(k[oe]=fe,k[Q]=te,oe=Q);else if(_e<be&&0>r(G,te))k[oe]=G,k[_e]=te,oe=_e;else break e}}return se}function r(k,se){var te=k.sortIndex-se.sortIndex;return te!==0?te:k.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,p=null,u=3,h=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var se=n(c);se!==null;){if(se.callback===null)i(c);else if(se.startTime<=k)i(c),se.sortIndex=se.expirationTime,e(l,se);else break;se=n(c)}}function M(k){if(y=!1,_(k),!m)if(n(l)!==null)m=!0,$(P);else{var se=n(c);se!==null&&le(M,se.startTime-k)}}function P(k,se){m=!1,y&&(y=!1,f(N),N=-1),h=!0;var te=u;try{for(_(se),p=n(l);p!==null&&(!(p.expirationTime>se)||k&&!E());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,u=p.priorityLevel;var be=oe(p.expirationTime<=se);se=t.unstable_now(),typeof be=="function"?p.callback=be:p===n(l)&&i(l),_(se)}else i(l);p=n(l)}if(p!==null)var Be=!0;else{var Q=n(c);Q!==null&&le(M,Q.startTime-se),Be=!1}return Be}finally{p=null,u=te,h=!1}}var A=!1,T=null,N=-1,K=5,S=-1;function E(){return!(t.unstable_now()-S<K)}function j(){if(T!==null){var k=t.unstable_now();S=k;var se=!0;try{se=T(!0,k)}finally{se?F():(A=!1,T=null)}}else A=!1}var F;if(typeof v=="function")F=function(){v(j)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ie=X.port2;X.port1.onmessage=j,F=function(){ie.postMessage(null)}}else F=function(){g(j,0)};function $(k){T=k,A||(A=!0,F())}function le(k,se){N=g(function(){k(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,$(P))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(u){case 1:case 2:case 3:var se=3;break;default:se=u}var te=u;u=se;try{return k()}finally{u=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,se){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var te=u;u=k;try{return se()}finally{u=te}},t.unstable_scheduleCallback=function(k,se,te){var oe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?oe+te:oe):te=oe,k){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=te+be,k={id:d++,callback:se,priorityLevel:k,startTime:te,expirationTime:be,sortIndex:-1},te>oe?(k.sortIndex=te,e(c,k),n(l)===null&&k===n(c)&&(y?(f(N),N=-1):y=!0,le(M,te-oe))):(k.sortIndex=be,e(l,k),m||h||(m=!0,$(P))),k},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(k){var se=u;return function(){var te=u;u=se;try{return k.apply(this,arguments)}finally{u=te}}}})(w0);M0.exports=w0;var qx=M0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=re,Ln=qx;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E0=new Set,Xo={};function Qr(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Xo[t]=e,t=0;t<e.length;t++)E0.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,Kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cp={},Rp={};function Jx(t){return ed.call(Rp,t)?!0:ed.call(Cp,t)?!1:Kx.test(t)?Rp[t]=!0:(Cp[t]=!0,!1)}function Zx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qx(t,e,n,i){if(e===null||typeof e>"u"||Zx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yh=/[\-:]([a-z])/g;function Kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yh,Kh);Yt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yh,Kh);Yt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yh,Kh);Yt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jh(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qx(e,n,r,i)&&(n=null),i||r===null?Jx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),id=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),A0=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Hc;function No(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Vc=!1;function Gc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function ey(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case td:return"Profiler";case Zh:return"StrictMode";case nd:return"Suspense";case id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b0:return(t.displayName||"Context")+".Consumer";case T0:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:rd(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return rd(t(e))}catch{}}return null}function ty(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rd(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function C0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ny(t){var e=C0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=ny(t))}function R0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=C0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sd(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P0(t,e){e=e.checked,e!=null&&Jh(t,"checked",e,!1)}function od(t,e){P0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&ad(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ad(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(Lo(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function N0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,k0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iy=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){iy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function D0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function I0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=D0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ry=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(t,e){if(e){if(ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fd=null,Is=null,Us=null;function Ip(t){if(t=ya(t)){if(typeof fd!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=xc(e),fd(t.stateNode,t.type,e))}}function U0(t){Is?Us?Us.push(t):Us=[t]:Is=t}function F0(){if(Is){var t=Is,e=Us;if(Us=Is=null,Ip(t),e)for(t=0;t<e.length;t++)Ip(e[t])}}function O0(t,e){return t(e)}function z0(){}var Wc=!1;function B0(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return O0(t,e,n)}finally{Wc=!1,(Is!==null||Us!==null)&&(z0(),F0())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var i=xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var pd=!1;if(Ni)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){pd=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{pd=!1}function sy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fo=!1,Ul=null,Fl=!1,md=null,oy={onError:function(t){Fo=!0,Ul=t}};function ay(t,e,n,i,r,s,o,a,l){Fo=!1,Ul=null,sy.apply(oy,arguments)}function ly(t,e,n,i,r,s,o,a,l){if(ay.apply(this,arguments),Fo){if(Fo){var c=Ul;Fo=!1,Ul=null}else throw Error(ge(198));Fl||(Fl=!0,md=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Up(t){if(es(t)!==t)throw Error(ge(188))}function cy(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Up(r),t;if(s===i)return Up(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function V0(t){return t=cy(t),t!==null?G0(t):null}function G0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G0(t);if(e!==null)return e;t=t.sibling}return null}var W0=Ln.unstable_scheduleCallback,Fp=Ln.unstable_cancelCallback,uy=Ln.unstable_shouldYield,dy=Ln.unstable_requestPaint,Rt=Ln.unstable_now,hy=Ln.unstable_getCurrentPriorityLevel,nf=Ln.unstable_ImmediatePriority,j0=Ln.unstable_UserBlockingPriority,Ol=Ln.unstable_NormalPriority,fy=Ln.unstable_LowPriority,$0=Ln.unstable_IdlePriority,mc=null,hi=null;function py(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:vy,my=Math.log,gy=Math.LN2;function vy(t){return t>>>=0,t===0?32:31-(my(t)/gy|0)|0}var Na=64,La=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ko(a):(s&=o,s!==0&&(i=ko(s)))}else o=n&~r,o!==0?i=ko(o):s!==0&&(i=ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function _y(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_y(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X0(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function yy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y0,sf,K0,J0,Z0,vd=!1,ka=[],tr=null,nr=null,ir=null,Ko=new Map,Jo=new Map,Yi=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function _o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ya(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function My(t,e,n,i,r){switch(e){case"focusin":return tr=_o(tr,t,e,n,i,r),!0;case"dragenter":return nr=_o(nr,t,e,n,i,r),!0;case"mouseover":return ir=_o(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,_o(Ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jo.set(s,_o(Jo.get(s)||null,t,e,n,i,r)),!0}return!1}function Q0(t){var e=Ir(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,Z0(t.priority,function(){K0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hd=i,n.target.dispatchEvent(i),hd=null}else return e=ya(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function zp(t,e,n){gl(t)&&n.delete(e)}function wy(){vd=!1,tr!==null&&gl(tr)&&(tr=null),nr!==null&&gl(nr)&&(nr=null),ir!==null&&gl(ir)&&(ir=null),Ko.forEach(zp),Jo.forEach(zp)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,vd||(vd=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,wy)))}function Zo(t){function e(r){return xo(r,t)}if(0<ka.length){xo(ka[0],t);for(var n=1;n<ka.length;n++){var i=ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&xo(tr,t),nr!==null&&xo(nr,t),ir!==null&&xo(ir,t),Ko.forEach(e),Jo.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&Yi.shift()}var Fs=Fi.ReactCurrentBatchConfig,Bl=!0;function Ey(t,e,n,i){var r=ot,s=Fs.transition;Fs.transition=null;try{ot=1,of(t,e,n,i)}finally{ot=r,Fs.transition=s}}function Ty(t,e,n,i){var r=ot,s=Fs.transition;Fs.transition=null;try{ot=4,of(t,e,n,i)}finally{ot=r,Fs.transition=s}}function of(t,e,n,i){if(Bl){var r=_d(t,e,n,i);if(r===null)tu(t,e,i,Hl,n),Op(t,i);else if(My(r,t,e,n,i))i.stopPropagation();else if(Op(t,i),e&4&&-1<Sy.indexOf(t)){for(;r!==null;){var s=ya(r);if(s!==null&&Y0(s),s=_d(t,e,n,i),s===null&&tu(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(t,e,i,null,n)}}var Hl=null;function _d(t,e,n,i){if(Hl=null,t=tf(i),t=Ir(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hy()){case nf:return 1;case j0:return 4;case Ol:case fy:return 16;case $0:return 536870912;default:return 16}default:return 16}}var Zi=null,af=null,vl=null;function tv(){if(vl)return vl;var t,e=af,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return vl=r.slice(t,1<i?1-i:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Bp(){return!1}function Dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Bp,this.isPropagationStopped=Bp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Dn(ao),xa=wt({},ao,{view:0,detail:0}),by=Dn(xa),$c,Xc,yo,gc=wt({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?($c=t.screenX-yo.screenX,Xc=t.screenY-yo.screenY):Xc=$c=0,yo=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),Hp=Dn(gc),Ay=wt({},gc,{dataTransfer:0}),Cy=Dn(Ay),Ry=wt({},xa,{relatedTarget:0}),qc=Dn(Ry),Py=wt({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=Dn(Py),Ly=wt({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ky=Dn(Ly),Dy=wt({},ao,{data:0}),Vp=Dn(Dy),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fy[t])?!!e[t]:!1}function cf(){return Oy}var zy=wt({},xa,{key:function(t){if(t.key){var e=Iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),By=Dn(zy),Hy=wt({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Dn(Hy),Vy=wt({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),Gy=Dn(Vy),Wy=wt({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=Dn(Wy),$y=wt({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=Dn($y),qy=[9,13,27,32],uf=Ni&&"CompositionEvent"in window,Oo=null;Ni&&"documentMode"in document&&(Oo=document.documentMode);var Yy=Ni&&"TextEvent"in window&&!Oo,nv=Ni&&(!uf||Oo&&8<Oo&&11>=Oo),Wp=" ",jp=!1;function iv(t,e){switch(t){case"keyup":return qy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function Ky(t,e){switch(t){case"compositionend":return rv(e);case"keypress":return e.which!==32?null:(jp=!0,Wp);case"textInput":return t=e.data,t===Wp&&jp?null:t;default:return null}}function Jy(t,e){if(Ms)return t==="compositionend"||!uf&&iv(t,e)?(t=tv(),vl=af=Zi=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zy[t.type]:e==="textarea"}function sv(t,e,n,i){U0(i),e=Vl(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var zo=null,Qo=null;function Qy(t){gv(t,0)}function vc(t){var e=Ts(t);if(R0(e))return t}function eS(t,e){if(t==="change")return e}var ov=!1;if(Ni){var Yc;if(Ni){var Kc="oninput"in document;if(!Kc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Kc=typeof Xp.oninput=="function"}Yc=Kc}else Yc=!1;ov=Yc&&(!document.documentMode||9<document.documentMode)}function qp(){zo&&(zo.detachEvent("onpropertychange",av),Qo=zo=null)}function av(t){if(t.propertyName==="value"&&vc(Qo)){var e=[];sv(e,Qo,t,tf(t)),B0(Qy,e)}}function tS(t,e,n){t==="focusin"?(qp(),zo=e,Qo=n,zo.attachEvent("onpropertychange",av)):t==="focusout"&&qp()}function nS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Qo)}function iS(t,e){if(t==="click")return vc(e)}function rS(t,e){if(t==="input"||t==="change")return vc(e)}function sS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:sS;function ea(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ed.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=Yp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yp(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oS(t){var e=cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(i!==null&&df(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kp(n,s);var o=Kp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aS=Ni&&"documentMode"in document&&11>=document.documentMode,ws=null,xd=null,Bo=null,yd=!1;function Jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yd||ws==null||ws!==Il(i)||(i=ws,"selectionStart"in i&&df(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&ea(Bo,i)||(Bo=i,i=Vl(xd,"onSelect"),0<i.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},Jc={},uv={};Ni&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function _c(t){if(Jc[t])return Jc[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uv)return Jc[t]=e[n];return t}var dv=_c("animationend"),hv=_c("animationiteration"),fv=_c("animationstart"),pv=_c("transitionend"),mv=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){mv.set(t,e),Qr(e,[t])}for(var Zc=0;Zc<Zp.length;Zc++){var Qc=Zp[Zc],lS=Qc.toLowerCase(),cS=Qc[0].toUpperCase()+Qc.slice(1);vr(lS,"on"+cS)}vr(dv,"onAnimationEnd");vr(hv,"onAnimationIteration");vr(fv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(pv,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ly(i,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qp(r,a,c),s=l}}}if(Fl)throw t=md,Fl=!1,md=null,t}function ft(t,e){var n=e[Td];n===void 0&&(n=e[Td]=new Set);var i=t+"__bubble";n.has(i)||(vv(e,t,2,!1),n.add(i))}function eu(t,e,n){var i=0;e&&(i|=4),vv(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Ua]){t[Ua]=!0,E0.forEach(function(n){n!=="selectionchange"&&(uS.has(n)||eu(n,!1,t),eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,eu("selectionchange",!1,e))}}function vv(t,e,n,i){switch(ev(e)){case 1:var r=Ey;break;case 4:r=Ty;break;default:r=of}n=r.bind(null,e,n,t),r=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}B0(function(){var c=s,d=tf(n),p=[];e:{var u=mv.get(t);if(u!==void 0){var h=lf,m=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":h=By;break;case"focusin":m="focus",h=qc;break;case"focusout":m="blur",h=qc;break;case"beforeblur":case"afterblur":h=qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Gy;break;case dv:case hv:case fv:h=Ny;break;case pv:h=jy;break;case"scroll":h=by;break;case"wheel":h=Xy;break;case"copy":case"cut":case"paste":h=ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gp}var y=(e&4)!==0,g=!y&&t==="scroll",f=y?u!==null?u+"Capture":null:u;y=[];for(var v=c,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,f!==null&&(M=Yo(v,f),M!=null&&y.push(na(v,M,_)))),g)break;v=v.return}0<y.length&&(u=new h(u,m,null,n,d),p.push({event:u,listeners:y}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",u&&n!==hd&&(m=n.relatedTarget||n.fromElement)&&(Ir(m)||m[Li]))break e;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?Ir(m):null,m!==null&&(g=es(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(y=Hp,M="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Gp,M="onPointerLeave",f="onPointerEnter",v="pointer"),g=h==null?u:Ts(h),_=m==null?u:Ts(m),u=new y(M,v+"leave",h,n,d),u.target=g,u.relatedTarget=_,M=null,Ir(d)===c&&(y=new y(f,v+"enter",m,n,d),y.target=_,y.relatedTarget=g,M=y),g=M,h&&m)t:{for(y=h,f=m,v=0,_=y;_;_=is(_))v++;for(_=0,M=f;M;M=is(M))_++;for(;0<v-_;)y=is(y),v--;for(;0<_-v;)f=is(f),_--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=is(y),f=is(f)}y=null}else y=null;h!==null&&em(p,u,h,y,!1),m!==null&&g!==null&&em(p,g,m,y,!0)}}e:{if(u=c?Ts(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var P=eS;else if($p(u))if(ov)P=rS;else{P=nS;var A=tS}else(h=u.nodeName)&&h.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(P=iS);if(P&&(P=P(t,c))){sv(p,P,n,d);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&ad(u,"number",u.value)}switch(A=c?Ts(c):window,t){case"focusin":($p(A)||A.contentEditable==="true")&&(ws=A,xd=c,Bo=null);break;case"focusout":Bo=xd=ws=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,Jp(p,n,d);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":Jp(p,n,d)}var T;if(uf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ms?iv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(nv&&n.locale!=="ko"&&(Ms||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ms&&(T=tv()):(Zi=d,af="value"in Zi?Zi.value:Zi.textContent,Ms=!0)),A=Vl(c,N),0<A.length&&(N=new Vp(N,t,null,n,d),p.push({event:N,listeners:A}),T?N.data=T:(T=rv(n),T!==null&&(N.data=T)))),(T=Yy?Ky(t,n):Jy(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(d=new Vp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}gv(p,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(t,n),s!=null&&i.unshift(na(t,s,r)),s=Yo(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function em(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Yo(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=Yo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function tm(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(hS,"")}function Fa(t,e,n){if(e=tm(e),tm(t)!==e&&n)throw Error(ge(425))}function Gl(){}var Sd=null,Md=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ed=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(t){return nm.resolve(null).then(t).catch(mS)}:Ed;function mS(t){setTimeout(function(){throw t})}function nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zo(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),di="__reactFiber$"+lo,ia="__reactProps$"+lo,Li="__reactContainer$"+lo,Td="__reactEvents$"+lo,gS="__reactListeners$"+lo,vS="__reactHandles$"+lo;function Ir(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=im(t);t!==null;){if(n=t[di])return n;t=im(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[di]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function xc(t){return t[ia]||null}var bd=[],bs=-1;function _r(t){return{current:t}}function gt(t){0>bs||(t.current=bd[bs],bd[bs]=null,bs--)}function dt(t,e){bs++,bd[bs]=t.current,t.current=e}var fr={},sn=_r(fr),vn=_r(!1),Wr=fr;function js(t,e){var n=t.type.contextTypes;if(!n)return fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Wl(){gt(vn),gt(sn)}function rm(t,e,n){if(sn.current!==fr)throw Error(ge(168));dt(sn,e),dt(vn,n)}function _v(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,ty(t)||"Unknown",r));return wt({},n,i)}function jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Wr=sn.current,dt(sn,t),dt(vn,vn.current),!0}function sm(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=_v(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,gt(vn),gt(sn),dt(sn,t)):gt(vn),dt(vn,n)}var Ti=null,yc=!1,iu=!1;function xv(t){Ti===null?Ti=[t]:Ti.push(t)}function _S(t){yc=!0,xv(t)}function xr(){if(!iu&&Ti!==null){iu=!0;var t=0,e=ot;try{var n=Ti;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,yc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),W0(nf,xr),r}finally{ot=e,iu=!1}}return null}var As=[],Cs=0,$l=null,Xl=0,On=[],zn=0,jr=null,bi=1,Ai="";function Rr(t,e){As[Cs++]=Xl,As[Cs++]=$l,$l=t,Xl=e}function yv(t,e,n){On[zn++]=bi,On[zn++]=Ai,On[zn++]=jr,jr=t;var i=bi;t=Ai;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-si(e)+r|n<<r|i,Ai=s+t}else bi=1<<s|n<<r|i,Ai=t}function hf(t){t.return!==null&&(Rr(t,1),yv(t,1,0))}function ff(t){for(;t===$l;)$l=As[--Cs],As[Cs]=null,Xl=As[--Cs],As[Cs]=null;for(;t===jr;)jr=On[--zn],On[zn]=null,Ai=On[--zn],On[zn]=null,bi=On[--zn],On[zn]=null}var Nn=null,Rn=null,vt=!1,ti=null;function Sv(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Rn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:bi,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Rn=null,!0):!1;default:return!1}}function Ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cd(t){if(vt){var e=Rn;if(e){var n=e;if(!om(t,e)){if(Ad(t))throw Error(ge(418));e=rr(n.nextSibling);var i=Nn;e&&om(t,e)?Sv(i,n):(t.flags=t.flags&-4097|2,vt=!1,Nn=t)}}else{if(Ad(t))throw Error(ge(418));t.flags=t.flags&-4097|2,vt=!1,Nn=t}}}function am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Oa(t){if(t!==Nn)return!1;if(!vt)return am(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=Rn)){if(Ad(t))throw Mv(),Error(ge(418));for(;e;)Sv(t,e),e=rr(e.nextSibling)}if(am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Nn?rr(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=Rn;t;)t=rr(t.nextSibling)}function $s(){Rn=Nn=null,vt=!1}function pf(t){ti===null?ti=[t]:ti.push(t)}var xS=Fi.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function za(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lm(t){var e=t._init;return e(t._payload)}function wv(t){function e(f,v){if(t){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=lr(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,M){return v===null||v.tag!==6?(v=uu(_,f.mode,M),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,M){var P=_.type;return P===Ss?d(f,v,_.props.children,M,_.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xi&&lm(P)===v.type)?(M=r(v,_.props),M.ref=So(f,v,_),M.return=f,M):(M=Tl(_.type,_.key,_.props,null,f.mode,M),M.ref=So(f,v,_),M.return=f,M)}function c(f,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=du(_,f.mode,M),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function d(f,v,_,M,P){return v===null||v.tag!==7?(v=Gr(_,f.mode,M,P),v.return=f,v):(v=r(v,_),v.return=f,v)}function p(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=uu(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return _=Tl(v.type,v.key,v.props,null,f.mode,_),_.ref=So(f,null,v),_.return=f,_;case ys:return v=du(v,f.mode,_),v.return=f,v;case Xi:var M=v._init;return p(f,M(v._payload),_)}if(Lo(v)||go(v))return v=Gr(v,f.mode,_,null),v.return=f,v;za(f,v)}return null}function u(f,v,_,M){var P=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(f,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ca:return _.key===P?l(f,v,_,M):null;case ys:return _.key===P?c(f,v,_,M):null;case Xi:return P=_._init,u(f,v,P(_._payload),M)}if(Lo(_)||go(_))return P!==null?null:d(f,v,_,M,null);za(f,_)}return null}function h(f,v,_,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(_)||null,a(v,f,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ca:return f=f.get(M.key===null?_:M.key)||null,l(v,f,M,P);case ys:return f=f.get(M.key===null?_:M.key)||null,c(v,f,M,P);case Xi:var A=M._init;return h(f,v,_,A(M._payload),P)}if(Lo(M)||go(M))return f=f.get(_)||null,d(v,f,M,P,null);za(v,M)}return null}function m(f,v,_,M){for(var P=null,A=null,T=v,N=v=0,K=null;T!==null&&N<_.length;N++){T.index>N?(K=T,T=null):K=T.sibling;var S=u(f,T,_[N],M);if(S===null){T===null&&(T=K);break}t&&T&&S.alternate===null&&e(f,T),v=s(S,v,N),A===null?P=S:A.sibling=S,A=S,T=K}if(N===_.length)return n(f,T),vt&&Rr(f,N),P;if(T===null){for(;N<_.length;N++)T=p(f,_[N],M),T!==null&&(v=s(T,v,N),A===null?P=T:A.sibling=T,A=T);return vt&&Rr(f,N),P}for(T=i(f,T);N<_.length;N++)K=h(T,f,N,_[N],M),K!==null&&(t&&K.alternate!==null&&T.delete(K.key===null?N:K.key),v=s(K,v,N),A===null?P=K:A.sibling=K,A=K);return t&&T.forEach(function(E){return e(f,E)}),vt&&Rr(f,N),P}function y(f,v,_,M){var P=go(_);if(typeof P!="function")throw Error(ge(150));if(_=P.call(_),_==null)throw Error(ge(151));for(var A=P=null,T=v,N=v=0,K=null,S=_.next();T!==null&&!S.done;N++,S=_.next()){T.index>N?(K=T,T=null):K=T.sibling;var E=u(f,T,S.value,M);if(E===null){T===null&&(T=K);break}t&&T&&E.alternate===null&&e(f,T),v=s(E,v,N),A===null?P=E:A.sibling=E,A=E,T=K}if(S.done)return n(f,T),vt&&Rr(f,N),P;if(T===null){for(;!S.done;N++,S=_.next())S=p(f,S.value,M),S!==null&&(v=s(S,v,N),A===null?P=S:A.sibling=S,A=S);return vt&&Rr(f,N),P}for(T=i(f,T);!S.done;N++,S=_.next())S=h(T,f,N,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?N:S.key),v=s(S,v,N),A===null?P=S:A.sibling=S,A=S);return t&&T.forEach(function(j){return e(f,j)}),vt&&Rr(f,N),P}function g(f,v,_,M){if(typeof _=="object"&&_!==null&&_.type===Ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ca:e:{for(var P=_.key,A=v;A!==null;){if(A.key===P){if(P=_.type,P===Ss){if(A.tag===7){n(f,A.sibling),v=r(A,_.props.children),v.return=f,f=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xi&&lm(P)===A.type){n(f,A.sibling),v=r(A,_.props),v.ref=So(f,A,_),v.return=f,f=v;break e}n(f,A);break}else e(f,A);A=A.sibling}_.type===Ss?(v=Gr(_.props.children,f.mode,M,_.key),v.return=f,f=v):(M=Tl(_.type,_.key,_.props,null,f.mode,M),M.ref=So(f,v,_),M.return=f,f=M)}return o(f);case ys:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=du(_,f.mode,M),v.return=f,f=v}return o(f);case Xi:return A=_._init,g(f,v,A(_._payload),M)}if(Lo(_))return m(f,v,_,M);if(go(_))return y(f,v,_,M);za(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,_),v.return=f,f=v):(n(f,v),v=uu(_,f.mode,M),v.return=f,f=v),o(f)):n(f,v)}return g}var Xs=wv(!0),Ev=wv(!1),ql=_r(null),Yl=null,Rs=null,mf=null;function gf(){mf=Rs=Yl=null}function vf(t){var e=ql.current;gt(ql),t._currentValue=e}function Rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Yl=t,mf=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Yl===null)throw Error(ge(308));Rs=t,Yl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Ur=null;function _f(t){Ur===null?Ur=[t]:Ur.push(t)}function Tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_f(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,_f(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}function cm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,h=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(u=e,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){p=m.call(h,p,u);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,u=typeof m=="function"?m.call(h,p,u):m,u==null)break e;p=wt({},p,u);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else h={eventTime:h,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=p}}function um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var Sa={},fi=_r(Sa),ra=_r(Sa),sa=_r(Sa);function Fr(t){if(t===Sa)throw Error(ge(174));return t}function yf(t,e){switch(dt(sa,e),dt(ra,t),dt(fi,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cd(e,t)}gt(fi),dt(fi,e)}function qs(){gt(fi),gt(ra),gt(sa)}function Av(t){Fr(sa.current);var e=Fr(fi.current),n=cd(e,t.type);e!==n&&(dt(ra,t),dt(fi,n))}function Sf(t){ra.current===t&&(gt(fi),gt(ra))}var yt=_r(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function Mf(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var yl=Fi.ReactCurrentDispatcher,su=Fi.ReactCurrentBatchConfig,$r=0,Mt=null,kt=null,Bt=null,Zl=!1,Ho=!1,oa=0,yS=0;function Kt(){throw Error(ge(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Ef(t,e,n,i,r,s){if($r=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?ES:TS,t=n(i,r),Ho){s=0;do{if(Ho=!1,oa=0,25<=s)throw Error(ge(301));s+=1,Bt=kt=null,e.updateQueue=null,yl.current=bS,t=n(i,r)}while(Ho)}if(yl.current=Ql,e=kt!==null&&kt.next!==null,$r=0,Bt=kt=Mt=null,Zl=!1,e)throw Error(ge(300));return t}function Tf(){var t=oa!==0;return oa=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Wn(){if(kt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Bt===null?Mt.memoizedState:Bt.next;if(e!==null)Bt=e,kt=t;else{if(t===null)throw Error(ge(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function aa(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if(($r&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Mt.lanes|=d,Xr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function au(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Cv(){}function Rv(t,e){var n=Mt,i=Wn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,bf(Lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,la(9,Nv.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ge(349));$r&30||Pv(n,e,r)}return r}function Pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nv(t,e,n,i){e.value=n,e.getSnapshot=i,kv(e)&&Dv(t)}function Lv(t,e,n){return n(function(){kv(e)&&Dv(t)})}function kv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Dv(t){var e=ki(t,1);e!==null&&oi(e,t,1,-1)}function dm(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=wS.bind(null,Mt,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Iv(){return Wn().memoizedState}function Sl(t,e,n,i){var r=ci();Mt.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function Sc(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&wf(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=la(1|e,n,s,i)}function hm(t,e){return Sl(8390656,8,t,e)}function bf(t,e){return Sc(2048,8,t,e)}function Uv(t,e){return Sc(4,2,t,e)}function Fv(t,e){return Sc(4,4,t,e)}function Ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zv(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,4,Ov.bind(null,e,t),n)}function Af(){}function Bv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hv(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vv(t,e,n){return $r&21?(ai(n,e)||(n=X0(),Mt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function SS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=su.transition;su.transition={};try{t(!1),e()}finally{ot=n,su.transition=i}}function Gv(){return Wn().memoizedState}function MS(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(t))jv(e,n);else if(n=Tv(t,e,n,i),n!==null){var r=ln();oi(n,t,i,r),$v(n,e,i)}}function wS(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(t))jv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,_f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Tv(t,e,r,i),n!==null&&(r=ln(),oi(n,t,i,r),$v(n,e,i))}}function Wv(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function jv(t,e){Ho=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $v(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}var Ql={readContext:Gn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},ES={readContext:Gn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:hm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=MS.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:dm,useDebugValue:Af,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=dm(!1),e=t[0];return t=SS.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ci();if(vt){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),Ht===null)throw Error(ge(349));$r&30||Pv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hm(Lv.bind(null,i,s,t),[t]),i.flags|=2048,la(9,Nv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ci(),e=Ht.identifierPrefix;if(vt){var n=Ai,i=bi;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:Gn,useCallback:Bv,useContext:Gn,useEffect:bf,useImperativeHandle:zv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:Hv,useReducer:ou,useRef:Iv,useState:function(){return ou(aa)},useDebugValue:Af,useDeferredValue:function(t){var e=Wn();return Vv(e,kt.memoizedState,t)},useTransition:function(){var t=ou(aa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Gv,unstable_isNewReconciler:!1},bS={readContext:Gn,useCallback:Bv,useContext:Gn,useEffect:bf,useImperativeHandle:zv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:Hv,useReducer:au,useRef:Iv,useState:function(){return au(aa)},useDebugValue:Af,useDeferredValue:function(t){var e=Wn();return kt===null?e.memoizedState=t:Vv(e,kt.memoizedState,t)},useTransition:function(){var t=au(aa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Gv,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=ar(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(oi(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=ar(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(oi(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=ar(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(oi(e,t,i,n),xl(e,t,i))}};function fm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function Xv(t,e,n){var i=!1,r=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=_n(e)?Wr:sn.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Nd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=_n(e)?Wr:sn.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mc.enqueueReplaceState(r,r.state,null),Kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=ey(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AS=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tc||(tc=!0,Vd=i),Ld(t,e)},n}function Yv(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ld(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var CS=Fi.ReactCurrentOwner,gn=!1;function an(t,e,n,i){e.child=t===null?Ev(e,null,n,i):Xs(e,t.child,n,i)}function _m(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=Ef(t,e,n,i,s,r),n=Tf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(vt&&n&&hf(e),e.flags|=1,an(t,e,i,r),e.child)}function xm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!If(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kv(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return kd(t,e,n,i,r)}function Jv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Ns,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Ns,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Ns,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Ns,An),An|=i;return an(t,e,r,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kd(t,e,n,i,r){var s=_n(n)?Wr:sn.current;return s=js(e,s),Os(e,r),n=Ef(t,e,n,i,s,r),i=Tf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(vt&&i&&hf(e),e.flags|=1,an(t,e,n,r),e.child)}function ym(t,e,n,i,r){if(_n(n)){var s=!0;jl(e)}else s=!1;if(Os(e,r),e.stateNode===null)Ml(t,e),Xv(e,n,i),Nd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=_n(n)?Wr:sn.current,c=js(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&pm(e,o,i,c),qi=!1;var u=e.memoizedState;o.state=u,Kl(e,i,o,r),l=e.memoizedState,a!==i||u!==l||vn.current||qi?(typeof d=="function"&&(Pd(e,n,d,i),l=e.memoizedState),(a=qi||fm(e,n,a,i,u,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,bv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,p=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=_n(n)?Wr:sn.current,l=js(e,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||u!==l)&&pm(e,o,i,l),qi=!1,u=e.memoizedState,o.state=u,Kl(e,i,o,r);var m=e.memoizedState;a!==p||u!==m||vn.current||qi?(typeof h=="function"&&(Pd(e,n,h,i),m=e.memoizedState),(c=qi||fm(e,n,c,i,u,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Dd(t,e,n,i,s,r)}function Dd(t,e,n,i,r,s){Zv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sm(e,n,!1),Di(t,e,s);i=e.stateNode,CS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):an(t,e,a,s),e.memoizedState=i.state,r&&sm(e,n,!0),e.child}function Qv(t){var e=t.stateNode;e.pendingContext?rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rm(t,e.context,!1),yf(t,e.containerInfo)}function Sm(t,e,n,i,r){return $s(),pf(r),e.flags|=256,an(t,e,n,i),e.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function e_(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return Cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ud(n),e.memoizedState=Id,t):Cf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return RS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Id,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cf(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,i){return i!==null&&pf(i),Xs(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lu(Error(ge(422))),Ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Ud(o),e.memoizedState=Id,s);if(!(e.mode&1))return Ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=lu(s,i,void 0),Ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(t,r),oi(i,t,r,-1))}return Df(),i=lu(Error(ge(421))),Ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=VS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=rr(r.nextSibling),Nn=e,vt=!0,ti=null,t!==null&&(On[zn++]=bi,On[zn++]=Ai,On[zn++]=jr,bi=t.id,Ai=t.overflow,jr=e),e=Cf(e,i.children),e.flags|=4096,e)}function Mm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rd(t.return,e,n)}function cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function t_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,n,e);else if(t.tag===19)Mm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cu(e,!0,n,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PS(t,e,n){switch(e.tag){case 3:Qv(e),$s();break;case 5:Av(e);break;case 1:_n(e.type)&&jl(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?e_(t,e,n):(dt(yt,yt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return t_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Jv(t,e,n)}return Di(t,e,n)}var n_,Fd,i_,r_;n_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fd=function(){};i_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(fi.current);var s=null;switch(n){case"input":r=sd(t,r),i=sd(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=ld(t,r),i=ld(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gl)}ud(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};r_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Mo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function NS(t,e,n){var i=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return _n(e.type)&&Wl(),Jt(e),null;case 3:return i=e.stateNode,qs(),gt(vn),gt(sn),Mf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(jd(ti),ti=null))),Fd(t,e),Jt(e),null;case 5:Sf(e);var r=Fr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)i_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return Jt(e),null}if(t=Fr(fi.current),Oa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)ft(Do[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Np(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":kp(i,s),ft("invalid",i)}ud(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ra(i),Lp(i,s,!0);break;case"textarea":Ra(i),Dp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[di]=e,t[ia]=i,n_(t,e,!1,!1),e.stateNode=t;e:{switch(o=dd(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)ft(Do[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Np(t,i),r=sd(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":kp(t,i),r=ld(t,i),ft("invalid",t);break;default:r=i}ud(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?I0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Jh(t,s,l,o))}switch(n){case"input":Ra(t),Lp(t,i,!1);break;case"textarea":Ra(t),Dp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)r_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=Fr(sa.current),Fr(fi.current),Oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Jt(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Rn!==null&&e.mode&1&&!(e.flags&128))Mv(),$s(),e.flags|=98560,s=!1;else if(s=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[di]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else ti!==null&&(jd(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Dt===0&&(Dt=3):Df())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return qs(),Fd(t,e),t===null&&ta(e.stateNode.containerInfo),Jt(e),null;case 10:return vf(e.type._context),Jt(e),null;case 17:return _n(e.type)&&Wl(),Jt(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Mo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,Mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Ks&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Jt(e),null}else 2*Rt()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function LS(t,e){switch(ff(e),e.tag){case 1:return _n(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),gt(vn),gt(sn),Mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sf(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return qs(),null;case 10:return vf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var Ha=!1,tn=!1,kS=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Od(t,e,n){try{n()}catch(i){bt(t,e,i)}}var wm=!1;function DS(t,e){if(Sd=Bl,t=cv(),df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,p=t,u=null;t:for(;;){for(var h;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(h=p.firstChild)!==null;)u=p,p=h;for(;;){if(p===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(h=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Bl=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Jn(e.type,y),g);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(M){bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return m=wm,wm=!1,m}function Vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Od(e,n,s)}r=r.next}while(r!==i)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s_(t){var e=t.alternate;e!==null&&(t.alternate=null,s_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[ia],delete e[Td],delete e[gS],delete e[vS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o_(t){return t.tag===5||t.tag===3||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(i!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var Gt=null,Zn=!1;function zi(t,e,n){for(n=n.child;n!==null;)a_(t,e,n),n=n.sibling}function a_(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:tn||Ps(n,e);case 6:var i=Gt,r=Zn;Gt=null,zi(t,e,n),Gt=i,Zn=r,Gt!==null&&(Zn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Zn?(t=Gt,n=n.stateNode,t.nodeType===8?nu(t.parentNode,n):t.nodeType===1&&nu(t,n),Zo(t)):nu(Gt,n.stateNode));break;case 4:i=Gt,r=Zn,Gt=n.stateNode.containerInfo,Zn=!0,zi(t,e,n),Gt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Od(n,e,o),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!tn&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,zi(t,e,n),tn=i):zi(t,e,n);break;default:zi(t,e,n)}}function Tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kS),e.forEach(function(i){var r=GS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Zn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Zn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Gt===null)throw Error(ge(160));a_(s,o,r),Gt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l_(e,t),e=e.sibling}function l_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),li(t),i&4){try{Vo(3,t,t.return),wc(3,t)}catch(y){bt(t,t.return,y)}try{Vo(5,t,t.return)}catch(y){bt(t,t.return,y)}}break;case 1:Xn(e,t),li(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Xn(e,t),li(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(y){bt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&P0(r,s),dd(a,o);var c=dd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?I0(r,p):d==="dangerouslySetInnerHTML"?k0(r,p):d==="children"?qo(r,p):Jh(r,d,p,c)}switch(a){case"input":od(r,s);break;case"textarea":N0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ds(r,!!s.multiple,h,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(y){bt(t,t.return,y)}}break;case 6:if(Xn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){bt(t,t.return,y)}}break;case 3:if(Xn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(y){bt(t,t.return,y)}break;case 4:Xn(e,t),li(t);break;case 13:Xn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nf=Rt())),i&4&&Tm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||d,Xn(e,t),tn=c):Xn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ne=t,d=t.child;d!==null;){for(p=Ne=d;Ne!==null;){switch(u=Ne,h=u.child,u.tag){case 0:case 11:case 14:case 15:Vo(4,u,u.return);break;case 1:Ps(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){bt(i,n,y)}}break;case 5:Ps(u,u.return);break;case 22:if(u.memoizedState!==null){Am(p);continue}}h!==null?(h.return=u,Ne=h):Am(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=D0("display",o))}catch(y){bt(t,t.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){bt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xn(e,t),li(t),i&4&&Tm(t);break;case 21:break;default:Xn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o_(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=Em(t);Hd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Em(t);Bd(t,a,o);break;default:throw Error(ge(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IS(t,e,n){Ne=t,c_(t)}function c_(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ha;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=Ha;var c=tn;if(Ha=o,(tn=l)&&!c)for(Ne=r;Ne!==null;)o=Ne,l=o.child,o.tag===22&&o.memoizedState!==null?Cm(r):l!==null?(l.return=o,Ne=l):Cm(r);for(;s!==null;)Ne=s,c_(s),s=s.sibling;Ne=r,Ha=a,tn=c}bm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):bm(t)}}function bm(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&um(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}um(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Zo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}tn||e.flags&512&&zd(e)}catch(u){bt(e,e.return,u)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function Am(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function Cm(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{zd(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{zd(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ne=a;break}Ne=e.return}}var US=Math.ceil,ec=Fi.ReactCurrentDispatcher,Rf=Fi.ReactCurrentOwner,Vn=Fi.ReactCurrentBatchConfig,et=0,Ht=null,Lt=null,Xt=0,An=0,Ns=_r(0),Dt=0,ca=null,Xr=0,Ec=0,Pf=0,Go=null,pn=null,Nf=0,Ks=1/0,Ei=null,tc=!1,Vd=null,or=null,Va=!1,Qi=null,nc=0,Wo=0,Gd=null,wl=-1,El=0;function ln(){return et&6?Rt():wl!==-1?wl:wl=Rt()}function ar(t){return t.mode&1?et&2&&Xt!==0?Xt&-Xt:xS.transition!==null?(El===0&&(El=X0()),El):(t=ot,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function oi(t,e,n,i){if(50<Wo)throw Wo=0,Gd=null,Error(ge(185));_a(t,n,i),(!(et&2)||t!==Ht)&&(t===Ht&&(!(et&2)&&(Ec|=n),Dt===4&&Ki(t,Xt)),xn(t,i),n===1&&et===0&&!(e.mode&1)&&(Ks=Rt()+500,yc&&xr()))}function xn(t,e){var n=t.callbackNode;xy(t,e);var i=zl(t,t===Ht?Xt:0);if(i===0)n!==null&&Fp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Fp(n),e===1)t.tag===0?_S(Rm.bind(null,t)):xv(Rm.bind(null,t)),pS(function(){!(et&6)&&xr()}),n=null;else{switch(q0(i)){case 1:n=nf;break;case 4:n=j0;break;case 16:n=Ol;break;case 536870912:n=$0;break;default:n=Ol}n=v_(n,u_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u_(t,e){if(wl=-1,El=0,et&6)throw Error(ge(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=zl(t,t===Ht?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ic(t,i);else{e=i;var r=et;et|=2;var s=h_();(Ht!==t||Xt!==e)&&(Ei=null,Ks=Rt()+500,Vr(t,e));do try{zS();break}catch(a){d_(t,a)}while(!0);gf(),ec.current=s,et=r,Lt!==null?e=0:(Ht=null,Xt=0,e=Dt)}if(e!==0){if(e===2&&(r=gd(t),r!==0&&(i=r,e=Wd(t,r))),e===1)throw n=ca,Vr(t,0),Ki(t,i),xn(t,Rt()),n;if(e===6)Ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!FS(r)&&(e=ic(t,i),e===2&&(s=gd(t),s!==0&&(i=s,e=Wd(t,s))),e===1))throw n=ca,Vr(t,0),Ki(t,i),xn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:Pr(t,pn,Ei);break;case 3:if(Ki(t,i),(i&130023424)===i&&(e=Nf+500-Rt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ed(Pr.bind(null,t,pn,Ei),e);break}Pr(t,pn,Ei);break;case 4:if(Ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*US(i/1960))-i,10<i){t.timeoutHandle=Ed(Pr.bind(null,t,pn,Ei),i);break}Pr(t,pn,Ei);break;case 5:Pr(t,pn,Ei);break;default:throw Error(ge(329))}}}return xn(t,Rt()),t.callbackNode===n?u_.bind(null,t):null}function Wd(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=ic(t,e),t!==2&&(e=pn,pn=n,e!==null&&jd(e)),t}function jd(t){pn===null?pn=t:pn.push.apply(pn,t)}function FS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ki(t,e){for(e&=~Pf,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Rm(t){if(et&6)throw Error(ge(327));zs();var e=zl(t,0);if(!(e&1))return xn(t,Rt()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var i=gd(t);i!==0&&(e=i,n=Wd(t,i))}if(n===1)throw n=ca,Vr(t,0),Ki(t,e),xn(t,Rt()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,pn,Ei),xn(t,Rt()),null}function Lf(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Ks=Rt()+500,yc&&xr())}}function qr(t){Qi!==null&&Qi.tag===0&&!(et&6)&&zs();var e=et;et|=1;var n=Vn.transition,i=ot;try{if(Vn.transition=null,ot=1,t)return t()}finally{ot=i,Vn.transition=n,et=e,!(et&6)&&xr()}}function kf(){An=Ns.current,gt(Ns)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fS(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wl();break;case 3:qs(),gt(vn),gt(sn),Mf();break;case 5:Sf(i);break;case 4:qs();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:vf(i.type._context);break;case 22:case 23:kf()}n=n.return}if(Ht=t,Lt=t=lr(t.current,null),Xt=An=e,Dt=0,ca=null,Pf=Ec=Xr=0,pn=Go=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ur=null}return t}function d_(t,e){do{var n=Lt;try{if(gf(),yl.current=Ql,Zl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zl=!1}if($r=0,Bt=kt=Mt=null,Ho=!1,oa=0,Rf.current=null,n===null||n.return===null){Dt=1,ca=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gm(o);if(h!==null){h.flags&=-257,vm(h,o,a,s,e),h.mode&1&&mm(s,c,e),e=h,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){mm(s,c,e),Df();break e}l=Error(ge(426))}}else if(vt&&a.mode&1){var g=gm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),vm(g,o,a,s,e),pf(Ys(l,a));break e}}s=l=Ys(l,a),Dt!==4&&(Dt=2),Go===null?Go=[s]:Go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=qv(s,l,e);cm(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(or===null||!or.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Yv(s,a,e);cm(s,M);break e}}s=s.return}while(s!==null)}p_(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function h_(){var t=ec.current;return ec.current=Ql,t===null?Ql:t}function Df(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ht===null||!(Xr&268435455)&&!(Ec&268435455)||Ki(Ht,Xt)}function ic(t,e){var n=et;et|=2;var i=h_();(Ht!==t||Xt!==e)&&(Ei=null,Vr(t,e));do try{OS();break}catch(r){d_(t,r)}while(!0);if(gf(),et=n,ec.current=i,Lt!==null)throw Error(ge(261));return Ht=null,Xt=0,Dt}function OS(){for(;Lt!==null;)f_(Lt)}function zS(){for(;Lt!==null&&!uy();)f_(Lt)}function f_(t){var e=g_(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?p_(t):Lt=e,Rf.current=null}function p_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LS(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Lt=null;return}}else if(n=NS(n,e,An),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Pr(t,e,n){var i=ot,r=Vn.transition;try{Vn.transition=null,ot=1,BS(t,e,n,i)}finally{Vn.transition=r,ot=i}return null}function BS(t,e,n,i){do zs();while(Qi!==null);if(et&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yy(t,s),t===Ht&&(Lt=Ht=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,v_(Ol,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=ot;ot=1;var a=et;et|=4,Rf.current=null,DS(t,n),l_(n,t),oS(Md),Bl=!!Sd,Md=Sd=null,t.current=n,IS(n),dy(),et=a,ot=o,Vn.transition=s}else t.current=n;if(Va&&(Va=!1,Qi=t,nc=r),s=t.pendingLanes,s===0&&(or=null),py(n.stateNode),xn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tc)throw tc=!1,t=Vd,Vd=null,t;return nc&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===Gd?Wo++:(Wo=0,Gd=t):Wo=0,xr(),null}function zs(){if(Qi!==null){var t=q0(nc),e=Vn.transition,n=ot;try{if(Vn.transition=null,ot=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,nc=0,et&6)throw Error(ge(331));var r=et;for(et|=4,Ne=t.current;Ne!==null;){var s=Ne,o=s.child;if(Ne.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ne=c;Ne!==null;){var d=Ne;switch(d.tag){case 0:case 11:case 15:Vo(8,d,s)}var p=d.child;if(p!==null)p.return=d,Ne=p;else for(;Ne!==null;){d=Ne;var u=d.sibling,h=d.return;if(s_(d),d===c){Ne=null;break}if(u!==null){u.return=h,Ne=u;break}Ne=h}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ne=o;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ne=f;break e}Ne=s.return}}var v=t.current;for(Ne=v;Ne!==null;){o=Ne;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ne=_;else e:for(o=v;Ne!==null;){if(a=Ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(P){bt(a,a.return,P)}if(a===o){Ne=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ne=M;break e}Ne=a.return}}if(et=r,xr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(mc,t)}catch{}i=!0}return i}finally{ot=n,Vn.transition=e}}return!1}function Pm(t,e,n){e=Ys(n,e),e=qv(t,e,1),t=sr(t,e,1),e=ln(),t!==null&&(_a(t,1,e),xn(t,e))}function bt(t,e,n){if(t.tag===3)Pm(t,t,n);else for(;e!==null;){if(e.tag===3){Pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=Ys(n,t),t=Yv(e,t,1),e=sr(e,t,1),t=ln(),e!==null&&(_a(e,1,t),xn(e,t));break}}e=e.return}}function HS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Xt&n)===n&&(Dt===4||Dt===3&&(Xt&130023424)===Xt&&500>Rt()-Nf?Vr(t,0):Pf|=n),xn(t,e)}function m_(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=ln();t=ki(t,e),t!==null&&(_a(t,e,n),xn(t,n))}function VS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m_(t,n)}function GS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),m_(t,n)}var g_;g_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,PS(t,e,n);gn=!!(t.flags&131072)}else gn=!1,vt&&e.flags&1048576&&yv(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=js(e,sn.current);Os(e,n),r=Ef(null,e,i,t,r,n);var s=Tf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xf(e),r.updater=Mc,e.stateNode=r,r._reactInternals=e,Nd(e,i,t,n),e=Dd(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&hf(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),t=Jn(i,t),r){case 0:e=kd(null,e,i,t,n);break e;case 1:e=ym(null,e,i,t,n);break e;case 11:e=_m(null,e,i,t,n);break e;case 14:e=xm(null,e,i,Jn(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),kd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),ym(t,e,i,r,n);case 3:e:{if(Qv(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,bv(t,e),Kl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(ge(423)),e),e=Sm(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(ge(424)),e),e=Sm(t,e,i,n,r);break e}else for(Rn=rr(e.stateNode.containerInfo.firstChild),Nn=e,vt=!0,ti=null,n=Ev(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Di(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return Av(e),t===null&&Cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wd(i,r)?o=null:s!==null&&wd(i,s)&&(e.flags|=32),Zv(t,e),an(t,e,o,n),e.child;case 6:return t===null&&Cd(e),null;case 13:return e_(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),_m(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(ql,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!vn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Gn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),xm(t,e,i,r,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Ml(t,e),e.tag=1,_n(i)?(t=!0,jl(e)):t=!1,Os(e,n),Xv(e,i,r),Nd(e,i,r,n),Dd(null,e,i,!0,t,n);case 19:return t_(t,e,n);case 22:return Jv(t,e,n)}throw Error(ge(156,e.tag))};function v_(t,e){return W0(t,e)}function WS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new WS(t,e,n,i)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return If(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===ef)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")If(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Gr(n.children,r,s,e);case Zh:o=8,r|=8;break;case td:return t=Hn(12,n,e,r|2),t.elementType=td,t.lanes=s,t;case nd:return t=Hn(13,n,e,r),t.elementType=nd,t.lanes=s,t;case id:return t=Hn(19,n,e,r),t.elementType=id,t.lanes=s,t;case A0:return Tc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T0:o=10;break e;case b0:o=9;break e;case Qh:o=11;break e;case ef:o=14;break e;case Xi:o=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Tc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=A0,t.lanes=n,t.stateNode={isHidden:!1},t}function uu(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function du(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $S(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,i,r,s,o,a,l){return t=new $S(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function XS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function __(t){if(!t)return fr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(_n(n))return _v(t,n,e)}return e}function x_(t,e,n,i,r,s,o,a,l){return t=Uf(n,i,!0,t,r,s,o,a,l),t.context=__(null),n=t.current,i=ln(),r=ar(n),s=Pi(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,_a(t,r,i),xn(t,i),t}function bc(t,e,n,i){var r=e.current,s=ln(),o=ar(r);return n=__(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&(oi(t,r,o,s),xl(t,r,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ff(t,e){Nm(t,e),(t=t.alternate)&&Nm(t,e)}function qS(){return null}var y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Ac.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));bc(t,e,null,null)};Ac.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){bc(null,t,null,null)}),e[Li]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=J0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Q0(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function YS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=rc(o);s.call(c)}}var o=x_(e,i,t,0,null,!1,!1,"",Lm);return t._reactRootContainer=o,t[Li]=o.current,ta(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=rc(l);a.call(c)}}var l=Uf(t,0,!1,null,null,!1,!1,"",Lm);return t._reactRootContainer=l,t[Li]=l.current,ta(t.nodeType===8?t.parentNode:t),qr(function(){bc(e,l,n,i)}),l}function Rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=rc(o);a.call(l)}}bc(e,o,t,r)}else o=YS(n,e,t,r,i);return rc(o)}Y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(rf(e,n|1),xn(e,Rt()),!(et&6)&&(Ks=Rt()+500,xr()))}break;case 13:qr(function(){var i=ki(t,1);if(i!==null){var r=ln();oi(i,t,1,r)}}),Ff(t,1)}};sf=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=ln();oi(e,t,134217728,n)}Ff(t,134217728)}};K0=function(t){if(t.tag===13){var e=ar(t),n=ki(t,e);if(n!==null){var i=ln();oi(n,t,e,i)}Ff(t,e)}};J0=function(){return ot};Z0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};fd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xc(i);if(!r)throw Error(ge(90));R0(i),od(i,r)}}}break;case"textarea":N0(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};O0=Lf;z0=qr;var KS={usingClientEntryPoint:!1,Events:[ya,Ts,xc,U0,F0,Lf]},wo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JS={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V0(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{mc=Ga.inject(JS),hi=Ga}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(ge(200));return XS(t,e,null,n)};kn.createRoot=function(t,e){if(!zf(t))throw Error(ge(299));var n=!1,i="",r=y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,ta(t.nodeType===8?t.parentNode:t),new Of(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=V0(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return qr(t)};kn.hydrate=function(t,e,n){if(!Cc(e))throw Error(ge(200));return Rc(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=y_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=x_(e,null,t,1,n??null,r,!1,s,o),t[Li]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ac(e)};kn.render=function(t,e,n){if(!Cc(e))throw Error(ge(200));return Rc(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(ge(40));return t._reactRootContainer?(qr(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};kn.unstable_batchedUpdates=Lf;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cc(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return Rc(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(t){console.error(t)}}S_(),S0.exports=kn;var ZS=S0.exports,M_,km=ZS;M_=km.createRoot,km.hydrateRoot;const Se={sun:"#FBC426",sunDeep:"#D99A0F",tomato:"#F64034",tomatoDeep:"#C42A22",teal:"#169996",tealDeep:"#0B7A77",cobalt:"#2760BF",cobaltDeep:"#1C4790",grape:"#6B4BC4",caramel:"#DA8A47",caramelDeep:"#B96C33",cream:"#F0BE82",snoutNose:"#B97C52",paw:"#7A4220",pupil:"#3A2210",ink:"#26304A",white:"#FFFFFF",eyeWhite:"#FBFBF8",paper:"#FFF6EA",grass:"#5DBB46",grassDeep:"#3F9A35",sky:"#70BCD6",wood:"#C98B55",woodDeep:"#9E6436",sunSoft:"#FFE6A8",tealSoft:"#CDEFEC",cobaltSoft:"#C9D8F4"},QS=[Se.tomato,Se.teal,Se.sun,Se.cobalt,Se.grape],w_=[{type:"rug",stars:10,w:2,d:2,floor:!0,colors:[Se.teal,Se.tomato,Se.sun,Se.cobalt,Se.grape]},{type:"plant",stars:10,w:1,d:1,colors:[Se.tomato,Se.cobalt,Se.sun,Se.teal,Se.white]},{type:"beanbag",stars:25,w:1,d:1,colors:[Se.sun,...QS.filter(t=>t!==Se.sun)]},{type:"lamp",stars:30,w:1,d:1,colors:[Se.cobalt,Se.sun,Se.tomato,Se.teal,Se.white]},{type:"table",stars:40,w:1,d:1,colors:[Se.white,Se.teal,Se.tomato,Se.sun,Se.cobalt]},{type:"shelf",stars:60,w:1,d:1,colors:[Se.white,Se.sun,Se.teal,Se.tomato,Se.cobalt]},{type:"fishbowl",stars:80,w:1,d:1,colors:[Se.teal,Se.tomato,Se.sun,Se.white,Se.grape]},{type:"bed",stars:100,w:1,d:2,colors:[Se.cobalt,Se.teal,Se.tomato,Se.sun,Se.grape]},{type:"kitty",stars:150,w:1,d:1,colors:["#E58C3A","#5B4A73",Se.white,"#9E9E9E","#E9C8A0"],rare:!0}],pr=t=>w_.find(e=>e.type===t),e1={practice:"Practice",backToRoom:"My room",treasures:"Treasures",close:"Close",langSwitch:"Cambiar a español",soundOn:"Sound on",soundOff:"Sound off",starsLabel:t=>`${t} ${t===1?"star":"stars"}`,meetTitle:"Meet your buddy!",pickKind:"Is your buddy a boy or a girl?",boy:"Boy",girl:"Girl",nameAsk:()=>"What will you call your buddy?",namePlaceholder:"Type a name",start:"Let's go!",treasuresTitle:"Treasures",unlock:"Unlock",place:"Place",inRoom:"In your room",locked:"Locked",newTag:"New",rareTag:"Rare",needMore:t=>`${t} more`,unlocked:"Unlocked!",placeHint:"Tap the floor to place it",noRoom:"It doesn't fit there",turn:"Turn",color:"Color",move:"Move",putAway:"Put away",done:"Done",cancel:"Cancel",items:{rug:"Rug",plant:"Plant",beanbag:"Beanbag",lamp:"Lamp",table:"Table",shelf:"Bookshelf",fishbowl:"Fishbowl",bed:"Bed",kitty:"Kitty"},practiceTitle:"Practice",play:"Play",soon:"Soon",modules:{borrow:"Borrowing",times:"Times tables",arrays:"Arrays",division:"Sharing",words:"Story math"},borrowSteps:["Blocks","Discs","Pencil"],moduleSteps:{borrow:["Blocks","Discs","Pencil"],arrays:["Build","Tens","Boxes"],division:["Plates","Rows","Memory"]}},t1={practice:"Practicar",backToRoom:"Mi cuarto",treasures:"Tesoros",close:"Cerrar",langSwitch:"Switch to English",soundOn:"Sonido activado",soundOff:"Sonido apagado",starsLabel:t=>`${t} ${t===1?"estrella":"estrellas"}`,meetTitle:"¡Conoce a tu amigo!",pickKind:"¿Tu amigo es chico o chica?",boy:"Chico",girl:"Chica",nameAsk:t=>t==="girl"?"¿Cómo se va a llamar tu amiga?":"¿Cómo se va a llamar tu amigo?",namePlaceholder:"Escribe un nombre",start:"¡Vamos!",treasuresTitle:"Tesoros",unlock:"Desbloquear",place:"Poner",inRoom:"En tu cuarto",locked:"Bloqueado",newTag:"Nuevo",rareTag:"Raro",needMore:t=>`Faltan ${t}`,unlocked:"¡Desbloqueado!",placeHint:"Toca el piso para ponerlo",noRoom:"No cabe ahí",turn:"Girar",color:"Color",move:"Mover",putAway:"Guardar",done:"Listo",cancel:"Cancelar",items:{rug:"Alfombra",plant:"Planta",beanbag:"Puf",lamp:"Lámpara",table:"Mesa",shelf:"Librero",fishbowl:"Pecera",bed:"Cama",kitty:"Gatito"},practiceTitle:"Practicar",play:"Jugar",soon:"Pronto",modules:{borrow:"Prestando",times:"Tablas",arrays:"Arreglos",division:"Repartir",words:"Cuentos"},borrowSteps:["Bloques","Fichas","Lápiz"],moduleSteps:{borrow:["Bloques","Fichas","Lápiz"],arrays:["Construir","Decenas","Cajas"],division:["Platos","Filas","Memoria"]}},Pc={en:e1,es:t1},E_="mathbuddy_game",mt=8;function Dm(){var t;return{version:1,name:null,kind:"boy",lang:(t=navigator.language)!=null&&t.toLowerCase().startsWith("es")?"es":"en",stars:5,unlocked:["rug","plant"],newSince:{},room:[{id:1,type:"rug",x:3,z:3,rot:0,color:0},{id:2,type:"plant",x:0,z:0,rot:0,color:0}],nextId:3,borrow:{level:0,rounds:0},tables:{},arrays:0,sharing:0}}function n1(){try{const t=localStorage.getItem(E_);if(t){const e=JSON.parse(t);if(e&&e.version===1)return{...Dm(),...e}}}catch{}return Dm()}function i1(t){try{localStorage.setItem(E_,JSON.stringify(t))}catch{}}function Yr(t,e){const n=pr(t);return e%2?[n.d,n.w]:[n.w,n.d]}function $d(t,e,n,i){const[r,s]=Yr(t,i),o=[];for(let a=0;a<r;a++)for(let l=0;l<s;l++)o.push(`${e+a},${n+l}`);return o}function Xd(t,e,n,i,r,s){const[o,a]=Yr(e,r);if(n<0||i<0||n+o>mt||i+a>mt)return!1;const l=new Set($d(e,n,i,r)),c=!!pr(e).floor;for(const d of t)if(!(d.id===s||!!pr(d.type).floor!==c)&&$d(d.type,d.x,d.z,d.rot).some(p=>l.has(p)))return!1;return!0}function r1(t,e,n=0){const i=[];for(let r=0;r<mt;r++)for(let s=0;s<mt;s++)i.push({x:r,z:s,dist:Math.hypot(r-3.5,s-3.5)});return i.sort((r,s)=>r.dist-s.dist),i.find(r=>Xd(t,e,r.x,r.z,n))??null}let bl=n1();const qd=new Set;function Fn(t){bl=t(bl),i1(bl),qd.forEach(e=>e())}function ua(t){Fn(e=>({...e,stars:e.stars+t}))}function ts(){return re.useSyncExternalStore(t=>(qd.add(t),()=>qd.delete(t)),()=>bl)}const s1="/assets/borrow-1-DdXRa0y5.mp3",o1="/assets/borrow-2-CsGU7TvO.mp3",a1="/assets/challenge-complete-1-DiztpUg3.mp3",l1="/assets/correct-1-Cxe9oZf0.mp3",c1="/assets/correct-2-CP32RgpO.mp3",u1="/assets/correct-3-DaF8zjki.mp3",d1="/assets/correct-4-kvEkctCa.mp3",h1="/assets/correct-5-CKRYNvBQ.mp3",f1="/assets/correct-6-DLINnVAn.mp3",p1="/assets/mulwelcome-1-CgS35O77.mp3",m1="/assets/mulwelcome-2-DlZzx8_z.mp3",g1="/assets/reminder-1-BuGFeBCq.mp3",v1="/assets/tryagain-1-Dnn6n6oO.mp3",_1="/assets/tryagain-2-CW8fu__V.mp3",x1="/assets/tryagain-3-B7FpGqd5.mp3",y1="/assets/tryagain-4-BDc1lCck.mp3",S1="/assets/tryagain-5-BazJO3hL.mp3",M1="/assets/tryagain-6-DBiBBYBm.mp3",w1="/assets/welcome-1-__LCmQuX.mp3",E1="/assets/welcome-2-qJ14_W2O.mp3",T1=Object.assign({"./voice/borrow-1.mp3":s1,"./voice/borrow-2.mp3":o1,"./voice/challenge-complete-1.mp3":a1,"./voice/correct-1.mp3":l1,"./voice/correct-2.mp3":c1,"./voice/correct-3.mp3":u1,"./voice/correct-4.mp3":d1,"./voice/correct-5.mp3":h1,"./voice/correct-6.mp3":f1,"./voice/mulwelcome-1.mp3":p1,"./voice/mulwelcome-2.mp3":m1,"./voice/reminder-1.mp3":g1,"./voice/tryagain-1.mp3":v1,"./voice/tryagain-2.mp3":_1,"./voice/tryagain-3.mp3":x1,"./voice/tryagain-4.mp3":y1,"./voice/tryagain-5.mp3":S1,"./voice/tryagain-6.mp3":M1,"./voice/welcome-1.mp3":w1,"./voice/welcome-2.mp3":E1}),b1=Object.assign({});function Im(t){const e=new Map;for(const[n,i]of Object.entries(t)){const s=n.split("/").pop().replace(/\.[^.]+$/,"").replace(/-\d+$/,"");e.has(s)||e.set(s,[]),e.get(s).push(i)}return e}const T_={voice:Im(T1),sfx:Im(b1)},b_="mathbuddy_sound";let sc=A1();const Yd=new Set;function A1(){try{return localStorage.getItem(b_)!=="off"}catch{return!0}}function C1(){return sc}function R1(t){sc=t;try{localStorage.setItem(b_,t?"on":"off")}catch{}t||P_(),Yd.forEach(e=>e(t))}function P1(t){return Yd.add(t),()=>Yd.delete(t)}let Qn=null,hu=null;const A_={},Um=new Map;let Or=null;const Fm=new Map,N1={voice:1,sfx:.8};function Bf(){if(Qn)return Qn;const t=window.AudioContext||window.webkitAudioContext;return t?(Qn=new t,hu=Qn.createGain(),hu.connect(Qn.destination),["voice","sfx"].forEach(e=>{const n=Qn.createGain();n.gain.value=N1[e],n.connect(hu),A_[e]=n}),Qn):null}function C_(t){let e=Um.get(t);if(!e){const n=Bf();e=n?fetch(t).then(i=>i.arrayBuffer()).then(i=>new Promise(r=>n.decodeAudioData(i,r,()=>r(null)))).catch(()=>null):Promise.resolve(null),Um.set(t,e)}return e}function L1(){["voice","sfx"].forEach(t=>T_[t].forEach(e=>e.forEach(n=>void C_(n))))}let Om=!1;function k1(){const t=Bf();if(!t||(t.state==="suspended"&&t.resume(),Om))return;Om=!0;const e=t.createBuffer(1,1,22050),n=t.createBufferSource();n.buffer=e,n.connect(t.destination),n.start(0),L1()}if(typeof window<"u"){const t=()=>k1();["pointerdown","touchend","keydown"].forEach(e=>window.addEventListener(e,t,{passive:!0})),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(Qn==null?void 0:Qn.state)==="suspended"&&Qn.resume()})}function D1(t,e){if(e.length===1)return e[0];const n=Fm.get(t),i=e.filter(s=>s!==n),r=i[Math.floor(Math.random()*i.length)];return Fm.set(t,r),r}async function R_(t,e,n={}){if(!sc)return;const i=T_[t].get(e);if(!(i!=null&&i.length))return;const r=Bf();if(!r)return;const s=await C_(D1(t+":"+e,i));if(!s||!sc)return;const o=r.createBufferSource();o.buffer=s;const a=n.variance??(t==="sfx"?.5:0),l=((n.semitones??0)+(Math.random()*2-1)*a)*100;o.playbackRate.value=Math.pow(2,l/1200);const c=r.createGain();return c.gain.value=n.volume??1,o.connect(c),c.connect(A_[t]),t==="voice"&&(P_(),Or=o),new Promise(d=>{o.onended=()=>{Or===o&&(Or=null),d()},o.start(r.currentTime+(n.delay??0))})}function pi(t,e){return R_("voice",t,e)}function xt(t,e){return R_("sfx",t,e)}function P_(){if(Or){try{Or.onended=null,Or.stop()}catch{}Or=null}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="169",I1=0,zm=1,U1=2,N_=1,Vf=2,wi=3,mr=0,yn=1,Bn=2,cr=0,Bs=1,Bm=2,Hm=3,Vm=4,F1=5,kr=100,O1=101,z1=102,B1=103,H1=104,V1=200,G1=201,W1=202,j1=203,Kd=204,Jd=205,$1=206,X1=207,q1=208,Y1=209,K1=210,J1=211,Z1=212,Q1=213,eM=214,Zd=0,Qd=1,eh=2,Js=3,th=4,nh=5,ih=6,rh=7,L_=0,tM=1,nM=2,ur=0,iM=1,rM=2,sM=3,oM=4,aM=5,lM=6,cM=7,k_=300,Zs=301,Qs=302,sh=303,oh=304,Nc=306,oc=1e3,zr=1001,ah=1002,nn=1003,uM=1004,Wa=1005,ni=1006,fu=1007,Br=1008,Ii=1009,D_=1010,I_=1011,da=1012,Gf=1013,Kr=1014,Ci=1015,Ma=1016,Wf=1017,jf=1018,eo=1020,U_=35902,F_=1021,O_=1022,ri=1023,z_=1024,B_=1025,Hs=1026,to=1027,$f=1028,Xf=1029,H_=1030,qf=1031,Yf=1033,Al=33776,Cl=33777,Rl=33778,Pl=33779,lh=35840,ch=35841,uh=35842,dh=35843,hh=36196,fh=37492,ph=37496,mh=37808,gh=37809,vh=37810,_h=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,wh=37816,Eh=37817,Th=37818,bh=37819,Ah=37820,Ch=37821,Nl=36492,Rh=36494,Ph=36495,V_=36283,Nh=36284,Lh=36285,kh=36286,dM=3200,hM=3201,G_=0,fM=1,Ji="",ei="srgb",yr="srgb-linear",Kf="display-p3",Lc="display-p3-linear",ac="linear",pt="srgb",lc="rec709",cc="p3",rs=7680,Gm=519,pM=512,mM=513,gM=514,W_=515,vM=516,_M=517,xM=518,yM=519,Wm=35044,jm="300 es",Ri=2e3,uc=2001;class co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pu=Math.PI/180,Dh=180/Math.PI;function uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function SM(t,e){return(t%e+e)%e}function mu(t,e,n){return(1-n)*t+n*e}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],m=i[8],y=r[0],g=r[3],f=r[6],v=r[1],_=r[4],M=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*y+a*v+l*P,s[3]=o*g+a*_+l*A,s[6]=o*f+a*M+l*T,s[1]=c*y+d*v+p*P,s[4]=c*g+d*_+p*A,s[7]=c*f+d*M+p*T,s[2]=u*y+h*v+m*P,s[5]=u*g+h*_+m*A,s[8]=u*f+h*M+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*o-a*c,u=a*l-d*s,h=c*s-o*l,m=n*p+i*u+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=p*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=u*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=h*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new qe;function j_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function MM(){const t=dc("canvas");return t.style.display="block",t}const $m={};function Ll(t){t in $m||($m[t]=!0,console.warn(t))}function wM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function EM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function TM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xm=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qm=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[yr]:{transfer:ac,primaries:lc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ei]:{transfer:pt,primaries:lc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Lc]:{transfer:ac,primaries:cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(qm),fromReference:t=>t.applyMatrix3(Xm)},[Kf]:{transfer:pt,primaries:cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(qm),fromReference:t=>t.applyMatrix3(Xm).convertLinearToSRGB()}},bM=new Set([yr,Lc]),rt={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!bM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=To[e].toReference,r=To[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return To[t].primaries},getTransfer:function(t){return t===Ji?ac:To[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(To[e].luminanceCoefficients)}};function Vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class AM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=dc("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class $_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?AM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RM=0;class rn extends co{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=zr,r=zr,s=ni,o=Br,a=ri,l=Ii,c=rn.DEFAULT_ANISOTROPY,d=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=uo(),this.name="",this.source=new $_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=k_;rn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(h+1)/2,P=(f+1)/2,A=(d+u)/4,T=(p+y)/4,N=(m+g)/4;return _>M&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(p-y)*(p-y)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(p-y)/v,this.z=(u-d)/v,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PM extends co{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends PM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class X_ extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3];const u=s[o+0],h=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p;return}if(a===1){e[n+0]=u,e[n+1]=h,e[n+2]=m,e[n+3]=y;return}if(p!==y||l!==u||c!==h||d!==m){let g=1-a;const f=l*u+c*h+d*m+p*y,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,f*v);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}const M=a*v;if(l=l*g+u*M,c=c*g+h*M,d=d*g+m*M,p=p*g+y*M,g===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=P,c*=P,d*=P,p*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[o],u=s[o+1],h=s[o+2],m=s[o+3];return e[n]=a*m+d*p+l*h-c*u,e[n+1]=l*m+d*u+c*p-a*h,e[n+2]=c*m+d*h+a*u-l*p,e[n+3]=d*m-a*p-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),p=a(s/2),u=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*d*p+c*h*m,this._y=c*h*p-u*d*m,this._z=c*d*m+u*h*p,this._w=c*d*p-u*h*m;break;case"YXZ":this._x=u*d*p+c*h*m,this._y=c*h*p-u*d*m,this._z=c*d*m-u*h*p,this._w=c*d*p+u*h*m;break;case"ZXY":this._x=u*d*p-c*h*m,this._y=c*h*p+u*d*m,this._z=c*d*m+u*h*p,this._w=c*d*p-u*h*m;break;case"ZYX":this._x=u*d*p-c*h*m,this._y=c*h*p+u*d*m,this._z=c*d*m-u*h*p,this._w=c*d*p+u*h*m;break;case"YZX":this._x=u*d*p+c*h*m,this._y=c*h*p+u*d*m,this._z=c*d*m-u*h*p,this._w=c*d*p-u*h*m;break;case"XZY":this._x=u*d*p-c*h*m,this._y=c*h*p-u*d*m,this._z=c*d*m+u*h*p,this._w=c*d*p+u*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+a+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>p){const h=2*Math.sqrt(1+i-a-p);this._w=(d-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>p){const h=2*Math.sqrt(1+a-i-p);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-n)*d)/c,u=Math.sin(n*d)/c;return this._w=o*p+this._w*u,this._x=i*p+this._x*u,this._y=r*p+this._y*u,this._z=s*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ym.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*d,this.y=i+l*d+a*c-s*p,this.z=r+l*p+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new z,Ym=new wa;class ho{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),$a.subVectors(this.max,bo),os.subVectors(e.a,bo),as.subVectors(e.b,bo),ls.subVectors(e.c,bo),Bi.subVectors(as,os),Hi.subVectors(ls,as),Mr.subVectors(os,ls);let n=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-Mr.z,Mr.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,Mr.z,0,-Mr.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-Mr.y,Mr.x,0];return!yu(n,os,as,ls,$a)||(n=[1,0,0,0,1,0,0,0,1],!yu(n,os,as,ls,$a))?!1:(Xa.crossVectors(Bi,Hi),n=[Xa.x,Xa.y,Xa.z],yu(n,os,as,ls,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new z,new z,new z,new z,new z,new z,new z,new z],qn=new z,ja=new ho,os=new z,as=new z,ls=new z,Bi=new z,Hi=new z,Mr=new z,bo=new z,$a=new z,Xa=new z,wr=new z;function yu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){wr.fromArray(t,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=n.dot(wr),d=i.dot(wr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const LM=new ho,Ao=new z,Su=new z;class Jf{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Su)),this.expandByPoint(Ao.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new z,Mu=new z,qa=new z,Vi=new z,wu=new z,Ya=new z,Eu=new z;class q_{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Mu.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(Mu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(qa),a=Vi.dot(this.direction),l=-Vi.dot(qa),c=Vi.lengthSq(),d=Math.abs(1-o*o);let p,u,h,m;if(d>0)if(p=o*l-a,u=o*a-l,m=s*d,p>=0)if(u>=-m)if(u<=m){const y=1/d;p*=y,u*=y,h=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=s,p=Math.max(0,-(o*u+a)),h=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(o*u+a)),h=-p*p+u*(u+2*l)+c;else u<=-m?(p=Math.max(0,-(-o*s+a)),u=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c):u<=m?(p=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(p=Math.max(0,-(o*s+a)),u=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c);else u=o>0?-s:s,p=Math.max(0,-(o*u+a)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Mu).addScaledVector(qa,u),h}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){wu.subVectors(n,e),Ya.subVectors(i,e),Eu.crossVectors(wu,Ya);let o=this.direction.dot(Eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Vi,Ya));if(l<0)return null;const c=a*this.direction.dot(wu.cross(Vi));if(c<0||l+c>o)return null;const d=-a*Vi.dot(Eu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,d,p,u,h,m,y,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,p,u,h,m,y,g)}set(e,n,i,r,s,o,a,l,c,d,p,u,h,m,y,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=o*d,h=o*p,m=a*d,y=a*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+m*c,n[5]=u-y*c,n[9]=-a*l,n[2]=y-u*c,n[6]=m+h*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*d,h=l*p,m=c*d,y=c*p;n[0]=u+y*a,n[4]=m*a-h,n[8]=o*c,n[1]=o*p,n[5]=o*d,n[9]=-a,n[2]=h*a-m,n[6]=y+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*d,h=l*p,m=c*d,y=c*p;n[0]=u-y*a,n[4]=-o*p,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*d,n[9]=y-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*d,h=o*p,m=a*d,y=a*p;n[0]=l*d,n[4]=m*c-h,n[8]=u*c+y,n[1]=l*p,n[5]=y*c+u,n[9]=h*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,h=o*c,m=a*l,y=a*c;n[0]=l*d,n[4]=y-u*p,n[8]=m*p+h,n[1]=p,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=h*p+m,n[10]=u-y*p}else if(e.order==="XZY"){const u=o*l,h=o*c,m=a*l,y=a*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+y,n[5]=o*d,n[9]=h*p-m,n[2]=m*p-h,n[6]=a*d,n[10]=y*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kM,e,DM)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Gi.crossVectors(i,Tn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Gi.crossVectors(i,Tn)),Gi.normalize(),Ka.crossVectors(Tn,Gi),r[0]=Gi.x,r[4]=Ka.x,r[8]=Tn.x,r[1]=Gi.y,r[5]=Ka.y,r[9]=Tn.y,r[2]=Gi.z,r[6]=Ka.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],m=i[2],y=i[6],g=i[10],f=i[14],v=i[3],_=i[7],M=i[11],P=i[15],A=r[0],T=r[4],N=r[8],K=r[12],S=r[1],E=r[5],j=r[9],F=r[13],X=r[2],ie=r[6],$=r[10],le=r[14],k=r[3],se=r[7],te=r[11],oe=r[15];return s[0]=o*A+a*S+l*X+c*k,s[4]=o*T+a*E+l*ie+c*se,s[8]=o*N+a*j+l*$+c*te,s[12]=o*K+a*F+l*le+c*oe,s[1]=d*A+p*S+u*X+h*k,s[5]=d*T+p*E+u*ie+h*se,s[9]=d*N+p*j+u*$+h*te,s[13]=d*K+p*F+u*le+h*oe,s[2]=m*A+y*S+g*X+f*k,s[6]=m*T+y*E+g*ie+f*se,s[10]=m*N+y*j+g*$+f*te,s[14]=m*K+y*F+g*le+f*oe,s[3]=v*A+_*S+M*X+P*k,s[7]=v*T+_*E+M*ie+P*se,s[11]=v*N+_*j+M*$+P*te,s[15]=v*K+_*F+M*le+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],m=e[3],y=e[7],g=e[11],f=e[15];return m*(+s*l*p-r*c*p-s*a*u+i*c*u+r*a*h-i*l*h)+y*(+n*l*h-n*c*u+s*o*u-r*o*h+r*c*d-s*l*d)+g*(+n*c*p-n*a*h-s*o*p+i*o*h+s*a*d-i*c*d)+f*(-r*a*d-n*l*p+n*a*u+r*o*p-i*o*u+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],m=e[12],y=e[13],g=e[14],f=e[15],v=p*g*c-y*u*c+y*l*h-a*g*h-p*l*f+a*u*f,_=m*u*c-d*g*c-m*l*h+o*g*h+d*l*f-o*u*f,M=d*y*c-m*p*c+m*a*h-o*y*h-d*a*f+o*p*f,P=m*p*l-d*y*l-m*a*u+o*y*u+d*a*g-o*p*g,A=n*v+i*_+r*M+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*u*s-p*g*s-y*r*h+i*g*h+p*r*f-i*u*f)*T,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*f+i*l*f)*T,e[3]=(p*l*s-a*u*s-p*r*c+i*u*c+a*r*h-i*l*h)*T,e[4]=_*T,e[5]=(d*g*s-m*u*s+m*r*h-n*g*h-d*r*f+n*u*f)*T,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*f-n*l*f)*T,e[7]=(o*u*s-d*l*s+d*r*c-n*u*c-o*r*h+n*l*h)*T,e[8]=M*T,e[9]=(m*p*s-d*y*s-m*i*h+n*y*h+d*i*f-n*p*f)*T,e[10]=(o*y*s-m*a*s+m*i*c-n*y*c-o*i*f+n*a*f)*T,e[11]=(d*a*s-o*p*s-d*i*c+n*p*c+o*i*h-n*a*h)*T,e[12]=P*T,e[13]=(d*y*r-m*p*r+m*i*u-n*y*u-d*i*g+n*p*g)*T,e[14]=(m*a*r-o*y*r-m*i*l+n*y*l+o*i*g-n*a*g)*T,e[15]=(o*p*r-d*a*r+d*i*l-n*p*l-o*i*u+n*a*u)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,p=a+a,u=s*c,h=s*d,m=s*p,y=o*d,g=o*p,f=a*p,v=l*c,_=l*d,M=l*p,P=i.x,A=i.y,T=i.z;return r[0]=(1-(y+f))*P,r[1]=(h+M)*P,r[2]=(m-_)*P,r[3]=0,r[4]=(h-M)*A,r[5]=(1-(u+f))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(m+_)*T,r[9]=(g-v)*T,r[10]=(1-(u+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,d=1/o,p=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=p,Yn.elements[9]*=p,Yn.elements[10]*=p,n.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ri){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),p=(n+e)/(n-e),u=(i+r)/(i-r);let h,m;if(a===Ri)h=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===uc)h=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri){const l=this.elements,c=1/(n-e),d=1/(i-r),p=1/(o-s),u=(n+e)*c,h=(i+r)*d;let m,y;if(a===Ri)m=(o+s)*p,y=-2*p;else if(a===uc)m=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cs=new z,Yn=new _t,kM=new z(0,0,0),DM=new z(1,1,1),Gi=new z,Ka=new z,Tn=new z,Km=new _t,Jm=new wa;class Ui{constructor(e=0,n=0,i=0,r=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],p=r[2],u=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IM=0;const Zm=new z,us=new wa,yi=new _t,Ja=new z,Co=new z,UM=new z,FM=new wa,Qm=new z(1,0,0),eg=new z(0,1,0),tg=new z(0,0,1),ng={type:"added"},OM={type:"removed"},ds={type:"childadded",child:null},Tu={type:"childremoved",child:null};class qt extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new z,n=new Ui,i=new wa,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(eg,e)}rotateZ(e){return this.rotateOnAxis(tg,e)}translateOnAxis(e,n){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(eg,e)}translateZ(e){return this.translateOnAxis(tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ja.copy(e):Ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Co,Ja,this.up):yi.lookAt(Ja,Co,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(yi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ng),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(OM),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ng),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,UM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,FM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),u=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new z(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new z,Si=new z,bu=new z,Mi=new z,hs=new z,fs=new z,ig=new z,Au=new z,Cu=new z,Ru=new z,Pu=new At,Nu=new At,Lu=new At;class ii{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Si.subVectors(i,n),bu.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(Si),l=Kn.dot(bu),c=Si.dot(Si),d=Si.dot(bu),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const u=1/p,h=(c*l-a*d)*u,m=(o*d-a*l)*u;return s.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Pu.setScalar(0),Nu.setScalar(0),Lu.setScalar(0),Pu.fromBufferAttribute(e,n),Nu.fromBufferAttribute(e,i),Lu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pu,s.x),o.addScaledVector(Nu,s.y),o.addScaledVector(Lu,s.z),o}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Si.subVectors(e,n),Kn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Kn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),fs.subVectors(s,i),Au.subVectors(e,i);const l=hs.dot(Au),c=fs.dot(Au);if(l<=0&&c<=0)return n.copy(i);Cu.subVectors(e,r);const d=hs.dot(Cu),p=fs.dot(Cu);if(d>=0&&p<=d)return n.copy(r);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(hs,o);Ru.subVectors(e,s);const h=hs.dot(Ru),m=fs.dot(Ru);if(m>=0&&h<=m)return n.copy(s);const y=h*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(fs,a);const g=d*m-h*p;if(g<=0&&p-d>=0&&h-m>=0)return ig.subVectors(s,r),a=(p-d)/(p-d+(h-m)),n.copy(r).addScaledVector(ig,a);const f=1/(g+y+u);return o=y*f,a=u*f,n.copy(i).addScaledVector(hs,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=SM(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ku(o,s,e+1/3),this.g=ku(o,s,e),this.b=ku(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const i=Y_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=vu(e.r),this.g=vu(e.g),this.b=vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return rt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(jt(Qt.r*255,0,255))*65536+Math.round(jt(Qt.g*255,0,255))*256+Math.round(jt(Qt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ei){rt.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(Za);const i=mu(Wi.h,Za.h,n),r=mu(Wi.s,Za.s,n),s=mu(Wi.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Qe;Qe.NAMES=Y_;let zM=0;class fo extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=Bs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Jd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kd&&(i.blendSrc=this.blendSrc),this.blendDst!==Jd&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hr extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new z,Qa=new ye;class mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wm,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wm&&(e.usage=this.usage),e}}class K_ extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class J_ extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ct extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BM=0;const Un=new _t,Du=new qt,ps=new z,bn=new ho,Ro=new ho,Ft=new z;class Mn extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j_(e)?J_:K_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(bn.min,Ro.min),bn.expandByPoint(Ft),Ft.addVectors(bn.max,Ro.max),bn.expandByPoint(Ft)):(bn.expandByPoint(Ro.min),bn.expandByPoint(Ro.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ft.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Ft.add(ps)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new z,l[N]=new z;const c=new z,d=new z,p=new z,u=new ye,h=new ye,m=new ye,y=new z,g=new z;function f(N,K,S){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,K),p.fromBufferAttribute(i,S),u.fromBufferAttribute(s,N),h.fromBufferAttribute(s,K),m.fromBufferAttribute(s,S),d.sub(c),p.sub(c),h.sub(u),m.sub(u);const E=1/(h.x*m.y-m.x*h.y);isFinite(E)&&(y.copy(d).multiplyScalar(m.y).addScaledVector(p,-h.y).multiplyScalar(E),g.copy(p).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(E),a[N].add(y),a[K].add(y),a[S].add(y),l[N].add(g),l[K].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,K=v.length;N<K;++N){const S=v[N],E=S.start,j=S.count;for(let F=E,X=E+j;F<X;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new z,M=new z,P=new z,A=new z;function T(N){P.fromBufferAttribute(r,N),A.copy(P);const K=a[N];_.copy(K),_.sub(P.multiplyScalar(P.dot(K))).normalize(),M.crossVectors(A,K);const E=M.dot(l[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,E)}for(let N=0,K=v.length;N<K;++N){const S=v[N],E=S.start,j=S.count;for(let F=E,X=E+j;F<X;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,p=new z;if(e)for(let u=0,h=e.count;u<h;u+=3){const m=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,p=a.normalized,u=new c.constructor(l.length*d);let h=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*d;for(let f=0;f<d;f++)u[m++]=c[h++]}return new mi(u,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rg=new _t,Er=new q_,el=new Jf,sg=new z,tl=new z,nl=new z,il=new z,Iu=new z,rl=new z,og=new z,sl=new z;class $t extends qt{constructor(e=new Mn,n=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],p=s[l];d!==0&&(Iu.fromBufferAttribute(p,e),o?rl.addScaledVector(Iu,d):rl.addScaledVector(Iu.sub(n),d))}n.add(rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(el.containsPoint(Er.origin)===!1&&(Er.intersectSphere(el,sg)===null||Er.origin.distanceToSquared(sg)>(e.far-e.near)**2))&&(rg.copy(s).invert(),Er.copy(e.ray).applyMatrix4(rg),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){const g=u[m],f=o[g.materialIndex],v=Math.max(g.start,h.start),_=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let M=v,P=_;M<P;M+=3){const A=a.getX(M),T=a.getX(M+1),N=a.getX(M+2);r=ol(this,f,e,i,c,d,p,A,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let g=m,f=y;g<f;g+=3){const v=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);r=ol(this,o,e,i,c,d,p,v,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){const g=u[m],f=o[g.materialIndex],v=Math.max(g.start,h.start),_=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let M=v,P=_;M<P;M+=3){const A=M,T=M+1,N=M+2;r=ol(this,f,e,i,c,d,p,A,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let g=m,f=y;g<f;g+=3){const v=g,_=g+1,M=g+2;r=ol(this,o,e,i,c,d,p,v,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function HM(t,e,n,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sl);return c<n.near||c>n.far?null:{distance:c,point:sl.clone(),object:t}}function ol(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,tl),t.getVertexPosition(l,nl),t.getVertexPosition(c,il);const d=HM(t,e,n,i,tl,nl,il,og);if(d){const p=new z;ii.getBarycoord(og,tl,nl,il,p),r&&(d.uv=ii.getInterpolatedAttribute(r,a,l,c,p,new ye)),s&&(d.uv1=ii.getInterpolatedAttribute(s,a,l,c,p,new ye)),o&&(d.normal=ii.getInterpolatedAttribute(o,a,l,c,p,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new z,materialIndex:0};ii.getNormal(tl,nl,il,u.normal),d.face=u,d.barycoord=p}return d}class Wt extends Mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],p=[];let u=0,h=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function m(y,g,f,v,_,M,P,A,T,N,K){const S=M/T,E=P/N,j=M/2,F=P/2,X=A/2,ie=T+1,$=N+1;let le=0,k=0;const se=new z;for(let te=0;te<$;te++){const oe=te*E-F;for(let be=0;be<ie;be++){const Be=be*S-j;se[y]=Be*v,se[g]=oe*_,se[f]=X,c.push(se.x,se.y,se.z),se[y]=0,se[g]=0,se[f]=A>0?1:-1,d.push(se.x,se.y,se.z),p.push(be/T),p.push(1-te/N),le+=1}}for(let te=0;te<N;te++)for(let oe=0;oe<T;oe++){const be=u+oe+ie*te,Be=u+oe+ie*(te+1),Q=u+(oe+1)+ie*(te+1),fe=u+(oe+1)+ie*te;l.push(be,Be,fe),l.push(Be,Q,fe),k+=6}a.addGroup(h,k,K),h+=k,u+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=no(t[n]);for(const r in i)e[r]=i[r]}return e}function VM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Z_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const GM={clone:no,merge:on};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=jM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q_ extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new z,ag=new ye,lg=new ye;class Cn extends Q_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,ag,lg),n.subVectors(lg,ag)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class $M extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new Cn(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new Cn(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new Cn(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new Cn(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new Cn(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(p,u,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ex extends rn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Zs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XM extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ex(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wt(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:cr});s.uniforms.tEquirect.value=n;const o=new $t(r,s),a=n.minFilter;return n.minFilter===Br&&(n.minFilter=ni),new $M(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Uu=new z,qM=new z,YM=new qe;class Nr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uu.subVectors(i,n).cross(qM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YM.getNormalMatrix(e),r=this.coplanarPoint(Uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Jf,al=new z;class Qf{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],p=r[6],u=r[7],h=r[8],m=r[9],y=r[10],g=r[11],f=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,u-c,g-h,M-f).normalize(),i[1].setComponents(l+s,u+c,g+h,M+f).normalize(),i[2].setComponents(l+o,u+d,g+m,M+v).normalize(),i[3].setComponents(l-o,u-d,g-m,M-v).normalize(),i[4].setComponents(l-a,u-p,g-y,M-_).normalize(),n===Ri)i[5].setComponents(l+a,u+p,g+y,M+_).normalize();else if(n===uc)i[5].setComponents(a,p,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KM(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,d);else{p.sort((h,m)=>h.start-m.start);let u=0;for(let h=1;h<p.length;h++){const m=p[u],y=p[h];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,p[u]=y)}p.length=u+1;for(let h=0,m=p.length;h<m;h++){const y=p[h];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class io extends Mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,p=e/a,u=n/l,h=[],m=[],y=[],g=[];for(let f=0;f<d;f++){const v=f*u-o;for(let _=0;_<c;_++){const M=_*p-s;m.push(M,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+c*f,M=v+c*(f+1),P=v+1+c*(f+1),A=v+1+c*f;h.push(_,M,A),h.push(M,P,A)}this.setIndex(h),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ow=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Aw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ow=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:JM,alphahash_pars_fragment:ZM,alphamap_fragment:QM,alphamap_pars_fragment:ew,alphatest_fragment:tw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:rw,batching_pars_vertex:sw,batching_vertex:ow,begin_vertex:aw,beginnormal_vertex:lw,bsdfs:cw,iridescence_fragment:uw,bumpmap_pars_fragment:dw,clipping_planes_fragment:hw,clipping_planes_pars_fragment:fw,clipping_planes_pars_vertex:pw,clipping_planes_vertex:mw,color_fragment:gw,color_pars_fragment:vw,color_pars_vertex:_w,color_vertex:xw,common:yw,cube_uv_reflection_fragment:Sw,defaultnormal_vertex:Mw,displacementmap_pars_vertex:ww,displacementmap_vertex:Ew,emissivemap_fragment:Tw,emissivemap_pars_fragment:bw,colorspace_fragment:Aw,colorspace_pars_fragment:Cw,envmap_fragment:Rw,envmap_common_pars_fragment:Pw,envmap_pars_fragment:Nw,envmap_pars_vertex:Lw,envmap_physical_pars_fragment:Gw,envmap_vertex:kw,fog_vertex:Dw,fog_pars_vertex:Iw,fog_fragment:Uw,fog_pars_fragment:Fw,gradientmap_pars_fragment:Ow,lightmap_pars_fragment:zw,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:Hw,lights_pars_begin:Vw,lights_toon_fragment:Ww,lights_toon_pars_fragment:jw,lights_phong_fragment:$w,lights_phong_pars_fragment:Xw,lights_physical_fragment:qw,lights_physical_pars_fragment:Yw,lights_fragment_begin:Kw,lights_fragment_maps:Jw,lights_fragment_end:Zw,logdepthbuf_fragment:Qw,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:oE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:dE,morphtarget_pars_vertex:hE,morphtarget_vertex:fE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:vE,normal_vertex:_E,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:wE,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:bE,project_vertex:AE,dithering_fragment:CE,dithering_pars_fragment:RE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:kE,shadowmap_vertex:DE,shadowmask_pars_fragment:IE,skinbase_vertex:UE,skinning_pars_vertex:FE,skinning_vertex:OE,skinnormal_vertex:zE,specularmap_fragment:BE,specularmap_pars_fragment:HE,tonemapping_fragment:VE,tonemapping_pars_fragment:GE,transmission_fragment:WE,transmission_pars_fragment:jE,uv_pars_fragment:$E,uv_pars_vertex:XE,uv_vertex:qE,worldpos_vertex:YE,background_vert:KE,background_frag:JE,backgroundCube_vert:ZE,backgroundCube_frag:QE,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:rT,distanceRGBA_frag:sT,equirect_vert:oT,equirect_frag:aT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:dT,meshlambert_vert:hT,meshlambert_frag:fT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:vT,meshphong_vert:_T,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:MT,meshtoon_frag:wT,points_vert:ET,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:CT,sprite_frag:RT},we={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ui={basic:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:on([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:on([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:on([we.points,we.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:on([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:on([we.common,we.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:on([we.sprite,we.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:on([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:on([we.lights,we.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ll={r:0,b:0,g:0},br=new Ui,PT=new _t;function NT(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,d,p=null,u=0,h=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const M=m(v);M===null?f(a,l):M&&M.isColor&&(f(M,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,_){const M=m(_);M&&(M.isCubeTexture||M.mapping===Nc)?(d===void 0&&(d=new $t(new Wt(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:no(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),br.copy(_.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(PT.makeRotationFromEuler(br)),d.material.toneMapped=rt.getTransfer(M.colorSpace)!==pt,(p!==M||u!==M.version||h!==t.toneMapping)&&(d.material.needsUpdate=!0,p=M,u=M.version,h=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $t(new io(2,2),new gr({name:"BackgroundMaterial",uniforms:no(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=rt.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||u!==M.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,u=M.version,h=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(ll,Z_(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:y,addToRenderList:g}}function LT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(S,E,j,F,X){let ie=!1;const $=p(F,j,E);s!==$&&(s=$,c(s.object)),ie=h(S,F,j,X),ie&&m(S,F,j,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,M(S,E,j,F),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function p(S,E,j){const F=j.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let ie=X[E.id];ie===void 0&&(ie={},X[E.id]=ie);let $=ie[F];return $===void 0&&($=u(l()),ie[F]=$),$}function u(S){const E=[],j=[],F=[];for(let X=0;X<n;X++)E[X]=0,j[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:j,attributeDivisors:F,object:S,attributes:{},index:null}}function h(S,E,j,F){const X=s.attributes,ie=E.attributes;let $=0;const le=j.getAttributes();for(const k in le)if(le[k].location>=0){const te=X[k];let oe=ie[k];if(oe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;$++}return s.attributesNum!==$||s.index!==F}function m(S,E,j,F){const X={},ie=E.attributes;let $=0;const le=j.getAttributes();for(const k in le)if(le[k].location>=0){let te=ie[k];te===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),X[k]=oe,$++}s.attributes=X,s.attributesNum=$,s.index=F}function y(){const S=s.newAttributes;for(let E=0,j=S.length;E<j;E++)S[E]=0}function g(S){f(S,0)}function f(S,E){const j=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;j[S]=1,F[S]===0&&(t.enableVertexAttribArray(S),F[S]=1),X[S]!==E&&(t.vertexAttribDivisor(S,E),X[S]=E)}function v(){const S=s.newAttributes,E=s.enabledAttributes;for(let j=0,F=E.length;j<F;j++)E[j]!==S[j]&&(t.disableVertexAttribArray(j),E[j]=0)}function _(S,E,j,F,X,ie,$){$===!0?t.vertexAttribIPointer(S,E,j,X,ie):t.vertexAttribPointer(S,E,j,F,X,ie)}function M(S,E,j,F){y();const X=F.attributes,ie=j.getAttributes(),$=E.defaultAttributeValues;for(const le in ie){const k=ie[le];if(k.location>=0){let se=X[le];if(se===void 0&&(le==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),le==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const te=se.normalized,oe=se.itemSize,be=e.get(se);if(be===void 0)continue;const Be=be.buffer,Q=be.type,fe=be.bytesPerElement,_e=Q===t.INT||Q===t.UNSIGNED_INT||se.gpuType===Gf;if(se.isInterleavedBufferAttribute){const G=se.data,Z=G.stride,U=se.offset;if(G.isInstancedInterleavedBuffer){for(let ae=0;ae<k.locationSize;ae++)f(k.location+ae,G.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ae=0;ae<k.locationSize;ae++)g(k.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ae=0;ae<k.locationSize;ae++)_(k.location+ae,oe/k.locationSize,Q,te,Z*fe,(U+oe/k.locationSize*ae)*fe,_e)}else{if(se.isInstancedBufferAttribute){for(let G=0;G<k.locationSize;G++)f(k.location+G,se.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let G=0;G<k.locationSize;G++)g(k.location+G);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let G=0;G<k.locationSize;G++)_(k.location+G,oe/k.locationSize,Q,te,oe*fe,oe/k.locationSize*G*fe,_e)}}else if($!==void 0){const te=$[le];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(k.location,te);break;case 3:t.vertexAttrib3fv(k.location,te);break;case 4:t.vertexAttrib4fv(k.location,te);break;default:t.vertexAttrib1fv(k.location,te)}}}}v()}function P(){N();for(const S in i){const E=i[S];for(const j in E){const F=E[j];for(const X in F)d(F[X].object),delete F[X];delete E[j]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const j in E){const F=E[j];for(const X in F)d(F[X].object),delete F[X];delete E[j]}delete i[S.id]}function T(S){for(const E in i){const j=i[E];if(j[S.id]===void 0)continue;const F=j[S.id];for(const X in F)d(F[X].object),delete F[X];delete j[S.id]}}function N(){K(),o=!0,s!==r&&(s=r,c(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:K,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function kT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,p){p!==0&&(t.drawArraysInstanced(i,c,d,p),n.update(d,i,p))}function a(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let h=0;for(let m=0;m<p;m++)h+=d[m];n.update(h,i,1)}function l(c,d,p,u){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],d[m],u[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];for(let y=0;y<u.length;y++)n.update(m,i,u[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ri&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const N=T===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ii&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ci&&!N)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function IT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Nr,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||r;return r=u,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const m=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!r||m===null||m.length===0||s&&!g)s?d(null):c();else{const v=s?0:i,_=v*4;let M=f.clippingState||null;l.value=M,M=d(m,u,_,h);for(let P=0;P!==_;++P)M[P]=n[P];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,m){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const f=h+y*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,M=h;_!==y;++_,M+=4)o.copy(p[_]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function UT(t){let e=new WeakMap;function n(o,a){return a===sh?o.mapping=Zs:a===oh&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sh||a===oh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new XM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ep extends Q_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,cg=[.125,.215,.35,.446,.526,.582],Dr=20,Fu=new ep,ug=new Qe;let Ou=null,zu=0,Bu=0,Hu=!1;const Lr=(1+Math.sqrt(5))/2,vs=1/Lr,dg=[new z(-Lr,vs,0),new z(Lr,vs,0),new z(-vs,0,Lr),new z(vs,0,Lr),new z(0,Lr,-vs),new z(0,Lr,vs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),Hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,zu,Bu),this._renderer.xr.enabled=Hu,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),Hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Ma,format:ri,colorSpace:yr,depthBuffer:!1},r=fg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(s)),this._blurMaterial=OT(s,e,n)}return r}_compileMaterial(e){const n=new $t(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,i,r){const a=new Cn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(ug),d.toneMapping=ur,d.autoClear=!1;const h=new Hr({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new $t(new Wt,h);let y=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,y=!0):(h.color.copy(ug),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;cl(r,v*_,f>2?_:0,_,_),d.setRenderTarget(r),y&&d.render(m,a),d.render(e,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zs||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dg[(r-s-1)%dg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new $t(this._lodPlanes[r],c),u=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Dr-1),y=s/m,g=isFinite(s)?1+Math.floor(d*y):Dr;g>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);const f=[];let v=0;for(let T=0;T<Dr;++T){const N=T/y,K=Math.exp(-N*N/2);f.push(K),T===0?v+=K:T<g&&(v+=2*K)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-i;const M=this._sizeLods[r],P=3*M*(r>_-Ls?r-_+Ls:0),A=4*(this._cubeSize-M);cl(n,P,A,3*M,2*M),l.setRenderTarget(n),l.render(p,Fu)}}function FT(t){const e=[],n=[],i=[];let r=t;const s=t-Ls+1+cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ls?l=cg[o-t+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,m=6,y=3,g=2,f=1,v=new Float32Array(y*m*h),_=new Float32Array(g*m*h),M=new Float32Array(f*m*h);for(let A=0;A<h;A++){const T=A%3*2/3-1,N=A>2?0:-1,K=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];v.set(K,y*m*A),_.set(u,g*m*A);const S=[A,A,A,A,A,A];M.set(S,f*m*A)}const P=new Mn;P.setAttribute("position",new mi(v,y)),P.setAttribute("uv",new mi(_,g)),P.setAttribute("faceIndex",new mi(M,f)),e.push(P),r>Ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fg(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OT(t,e,n){const i=new Float32Array(Dr),r=new z(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function pg(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function mg(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sh||l===oh,d=l===Zs||l===Qs;if(c||d){let p=e.get(a);const u=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new hg(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const h=a.image;return c&&h&&h.height>0||d&&h&&r(h)?(n===null&&(n=new hg(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function BT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ll("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HT(t,e,n,i){const r={},s=new WeakMap;function o(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const y=u.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)e.remove(y[g])}u.removeEventListener("dispose",o),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER);const h=p.morphAttributes;for(const m in h){const y=h[m];for(let g=0,f=y.length;g<f;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(p){const u=[],h=p.index,m=p.attributes.position;let y=0;if(h!==null){const v=h.array;y=h.version;for(let _=0,M=v.length;_<M;_+=3){const P=v[_+0],A=v[_+1],T=v[_+2];u.push(P,A,A,T,T,P)}}else if(m!==void 0){const v=m.array;y=m.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const P=_+0,A=_+1,T=_+2;u.push(P,A,A,T,T,P)}}else return;const g=new(j_(u)?J_:K_)(u,1);g.version=y;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function d(p){const u=s.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function VT(t,e,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){t.drawElements(i,h,s,u*o),n.update(h,i,1)}function c(u,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,u*o,m),n.update(h,i,m))}function d(u,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,u,0,m);let g=0;for(let f=0;f<m;f++)g+=h[f];n.update(g,i,1)}function p(u,h,m,y){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<u.length;f++)c(u[f]/o,h[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,u,0,y,0,m);let f=0;for(let v=0;v<m;v++)f+=h[v];for(let v=0;v<y.length;v++)n.update(f,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function GT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WT(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==p){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var h=S;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let P=a.attributes.position.count*M,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*p),N=new X_(T,P,A,p);N.type=Ci,N.needsUpdate=!0;const K=M*4;for(let E=0;E<p;E++){const j=f[E],F=v[E],X=_[E],ie=P*A*4*E;for(let $=0;$<j.count;$++){const le=$*K;m===!0&&(r.fromBufferAttribute(j,$),T[ie+le+0]=r.x,T[ie+le+1]=r.y,T[ie+le+2]=r.z,T[ie+le+3]=0),y===!0&&(r.fromBufferAttribute(F,$),T[ie+le+4]=r.x,T[ie+le+5]=r.y,T[ie+le+6]=r.z,T[ie+le+7]=0),g===!0&&(r.fromBufferAttribute(X,$),T[ie+le+8]=r.x,T[ie+le+9]=r.y,T[ie+le+10]=r.z,T[ie+le+11]=X.itemSize===4?r.w:1)}}u={count:p,texture:N,size:new ye(P,A)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function jT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class nx extends rn{constructor(e,n,i,r,s,o,a,l,c,d=Hs){if(d!==Hs&&d!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Hs&&(i=Kr),i===void 0&&d===to&&(i=eo),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ix=new rn,gg=new nx(1,1),rx=new X_,sx=new NM,ox=new ex,vg=[],_g=[],xg=new Float32Array(16),yg=new Float32Array(9),Sg=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vg[r];if(s===void 0&&(s=new Float32Array(r),vg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function kc(t,e){let n=_g[e];n===void 0&&(n=new Int32Array(e),_g[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function KT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Sg.set(i),t.uniformMatrix2fv(this.addr,!1,Sg),Ut(n,i)}}function JT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;yg.set(i),t.uniformMatrix3fv(this.addr,!1,yg),Ut(n,i)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;xg.set(i),t.uniformMatrix4fv(this.addr,!1,xg),Ut(n,i)}}function QT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gg.compareFunction=W_,s=gg):s=ix,n.setTexture2D(e||s,r)}function lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sx,r)}function cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ox,r)}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rx,r)}function db(t){switch(t){case 5126:return $T;case 35664:return XT;case 35665:return qT;case 35666:return YT;case 35674:return KT;case 35675:return JT;case 35676:return ZT;case 5124:case 35670:return QT;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return sb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function hb(t,e){t.uniform1fv(this.addr,e)}function fb(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function pb(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function mb(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function gb(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vb(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _b(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xb(t,e){t.uniform1iv(this.addr,e)}function yb(t,e){t.uniform2iv(this.addr,e)}function Sb(t,e){t.uniform3iv(this.addr,e)}function Mb(t,e){t.uniform4iv(this.addr,e)}function wb(t,e){t.uniform1uiv(this.addr,e)}function Eb(t,e){t.uniform2uiv(this.addr,e)}function Tb(t,e){t.uniform3uiv(this.addr,e)}function bb(t,e){t.uniform4uiv(this.addr,e)}function Ab(t,e,n){const i=this.cache,r=e.length,s=kc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ix,s[o])}function Cb(t,e,n){const i=this.cache,r=e.length,s=kc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||sx,s[o])}function Rb(t,e,n){const i=this.cache,r=e.length,s=kc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ox,s[o])}function Pb(t,e,n){const i=this.cache,r=e.length,s=kc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||rx,s[o])}function Nb(t){switch(t){case 5126:return hb;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return vb;case 35676:return _b;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return wb;case 36294:return Eb;case 36295:return Tb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Pb}}class Lb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=db(n.type)}}class kb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Nb(n.type)}}class Db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function Mg(t,e){t.seq.push(e),t.map[e.id]=e}function Ib(t,e,n){const i=t.name,r=i.length;for(Vu.lastIndex=0;;){const s=Vu.exec(i),o=Vu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Mg(n,c===void 0?new Lb(a,t,e):new kb(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new Db(a),Mg(n,p)),n=p}}}class kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ib(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function wg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ub=37297;let Fb=0;function Ob(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function zb(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===cc&&n===lc?i="LinearDisplayP3ToLinearSRGB":e===lc&&n===cc&&(i="LinearSRGBToLinearDisplayP3"),t){case yr:case Lc:return[i,"LinearTransferOETF"];case ei:case Kf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Eg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Ob(t.getShaderSource(e),o)}else return r}function Bb(t,e){const n=zb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Hb(t,e){let n;switch(e){case iM:n="Linear";break;case rM:n="Reinhard";break;case sM:n="Cineon";break;case oM:n="ACESFilmic";break;case lM:n="AgX";break;case cM:n="Neutral";break;case aM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new z;function Vb(){rt.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Wb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Io(t){return t!==""}function Tg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(t){return t.replace($b,qb)}const Xb=new Map;function qb(t,e){let n=Xe[e];if(n===void 0){const i=Xb.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ih(n)}const Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(t){return t.replace(Yb,Kb)}function Kb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function eA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case tM:e="ENVMAP_BLENDING_MIX";break;case nM:e="ENVMAP_BLENDING_ADD";break}return e}function tA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Jb(n),c=Zb(n),d=Qb(n),p=eA(n),u=tA(n),h=Gb(n),m=Wb(s),y=r.createProgram();let g,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Io).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Io).join(`
`),f.length>0&&(f+=`
`)):(g=[Cg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),f=[Cg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ur?"#define TONE_MAPPING":"",n.toneMapping!==ur?Xe.tonemapping_pars_fragment:"",n.toneMapping!==ur?Hb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Bb("linearToOutputTexel",n.outputColorSpace),Vb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),o=Ih(o),o=Tg(o,n),o=bg(o,n),a=Ih(a),a=Tg(a,n),a=bg(a,n),o=Ag(o),a=Ag(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=v+g+o,M=v+f+a,P=wg(r,r.VERTEX_SHADER,_),A=wg(r,r.FRAGMENT_SHADER,M);r.attachShader(y,P),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(y).trim(),F=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(A).trim();let ie=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,A);else{const le=Eg(r,P,"vertex"),k=Eg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+j+`
`+le+`
`+k)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(F===""||X==="")&&($=!1);$&&(E.diagnostics={runnable:ie,programLog:j,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:f}})}r.deleteShader(P),r.deleteShader(A),N=new kl(r,y),K=jb(r,y)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let K;this.getAttributes=function(){return K===void 0&&T(this),K};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Ub)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}let iA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sA(e),n.set(e,i)),i}}class sA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function oA(t,e,n,i,r,s,o){const a=new Zf,l=new rA,c=new Set,d=[],p=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,E,j,F,X){const ie=F.fog,$=X.geometry,le=S.isMeshStandardMaterial?F.environment:null,k=(S.isMeshStandardMaterial?n:e).get(S.envMap||le),se=k&&k.mapping===Nc?k.image.height:null,te=y[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,be=oe!==void 0?oe.length:0;let Be=0;$.morphAttributes.position!==void 0&&(Be=1),$.morphAttributes.normal!==void 0&&(Be=2),$.morphAttributes.color!==void 0&&(Be=3);let Q,fe,_e,G;if(te){const hn=ui[te];Q=hn.vertexShader,fe=hn.fragmentShader}else Q=S.vertexShader,fe=S.fragmentShader,l.update(S),_e=l.getVertexShaderID(S),G=l.getFragmentShaderID(S);const Z=t.getRenderTarget(),U=X.isInstancedMesh===!0,ae=X.isBatchedMesh===!0,he=!!S.map,q=!!S.matcap,R=!!k,I=!!S.aoMap,L=!!S.lightMap,D=!!S.bumpMap,V=!!S.normalMap,ee=!!S.displacementMap,ce=!!S.emissiveMap,C=!!S.metalnessMap,w=!!S.roughnessMap,W=S.anisotropy>0,ue=S.clearcoat>0,pe=S.dispersion>0,de=S.iridescence>0,Ie=S.sheen>0,Me=S.transmission>0,Re=W&&!!S.anisotropyMap,Ke=ue&&!!S.clearcoatMap,ve=ue&&!!S.clearcoatNormalMap,Pe=ue&&!!S.clearcoatRoughnessMap,Ge=de&&!!S.iridescenceMap,We=de&&!!S.iridescenceThicknessMap,Le=Ie&&!!S.sheenColorMap,Je=Ie&&!!S.sheenRoughnessMap,je=!!S.specularMap,ut=!!S.specularColorMap,O=!!S.specularIntensityMap,Ae=Me&&!!S.transmissionMap,ne=Me&&!!S.thicknessMap,me=!!S.gradientMap,Ee=!!S.alphaMap,Ce=S.alphaTest>0,Ze=!!S.alphaHash,Pt=!!S.extensions;let dn=ur;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(dn=t.toneMapping);const tt={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:fe,defines:S.defines,customVertexShaderID:_e,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ae,batchingColor:ae&&X._colorsTexture!==null,instancing:U,instancingColor:U&&X.instanceColor!==null,instancingMorph:U&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:yr,alphaToCoverage:!!S.alphaToCoverage,map:he,matcap:q,envMap:R,envMapMode:R&&k.mapping,envMapCubeUVHeight:se,aoMap:I,lightMap:L,bumpMap:D,normalMap:V,displacementMap:h&&ee,emissiveMap:ce,normalMapObjectSpace:V&&S.normalMapType===fM,normalMapTangentSpace:V&&S.normalMapType===G_,metalnessMap:C,roughnessMap:w,anisotropy:W,anisotropyMap:Re,clearcoat:ue,clearcoatMap:Ke,clearcoatNormalMap:ve,clearcoatRoughnessMap:Pe,dispersion:pe,iridescence:de,iridescenceMap:Ge,iridescenceThicknessMap:We,sheen:Ie,sheenColorMap:Le,sheenRoughnessMap:Je,specularMap:je,specularColorMap:ut,specularIntensityMap:O,transmission:Me,transmissionMap:Ae,thicknessMap:ne,gradientMap:me,opaque:S.transparent===!1&&S.blending===Bs&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ce,alphaHash:Ze,combine:S.combine,mapUv:he&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:L&&g(S.lightMap.channel),bumpMapUv:D&&g(S.bumpMap.channel),normalMapUv:V&&g(S.normalMap.channel),displacementMapUv:ee&&g(S.displacementMap.channel),emissiveMapUv:ce&&g(S.emissiveMap.channel),metalnessMapUv:C&&g(S.metalnessMap.channel),roughnessMapUv:w&&g(S.roughnessMap.channel),anisotropyMapUv:Re&&g(S.anisotropyMap.channel),clearcoatMapUv:Ke&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Je&&g(S.sheenRoughnessMap.channel),specularMapUv:je&&g(S.specularMap.channel),specularColorMapUv:ut&&g(S.specularColorMap.channel),specularIntensityMapUv:O&&g(S.specularIntensityMap.channel),transmissionMapUv:Ae&&g(S.transmissionMap.channel),thicknessMapUv:ne&&g(S.thicknessMap.channel),alphaMapUv:Ee&&g(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(V||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(he||Ee),fog:!!ie,useFog:S.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:dn,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bn,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function v(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)E.push(j),E.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(_(E,S),M(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),S.push(a.mask)}function P(S){const E=y[S.type];let j;if(E){const F=ui[E];j=GM.clone(F.uniforms)}else j=S.uniforms;return j}function A(S,E){let j;for(let F=0,X=d.length;F<X;F++){const ie=d[F];if(ie.cacheKey===E){j=ie,++j.usedTimes;break}}return j===void 0&&(j=new nA(t,E,S,s),d.push(j)),j}function T(S){if(--S.usedTimes===0){const E=d.indexOf(S);d[E]=d[d.length-1],d.pop(),S.destroy()}}function N(S){l.remove(S)}function K(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:N,programs:d,dispose:K}}function aA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function lA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,u,h,m,y,g){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:u,material:h,groupOrder:m,renderOrder:p.renderOrder,z:y,group:g},t[e]=f):(f.id=p.id,f.object=p,f.geometry=u,f.material=h,f.groupOrder=m,f.renderOrder=p.renderOrder,f.z=y,f.group=g),e++,f}function a(p,u,h,m,y,g){const f=o(p,u,h,m,y,g);h.transmission>0?i.push(f):h.transparent===!0?r.push(f):n.push(f)}function l(p,u,h,m,y,g){const f=o(p,u,h,m,y,g);h.transmission>0?i.unshift(f):h.transparent===!0?r.unshift(f):n.unshift(f)}function c(p,u){n.length>1&&n.sort(p||lA),i.length>1&&i.sort(u||Rg),r.length>1&&r.sort(u||Rg)}function d(){for(let p=e,u=t.length;p<u;p++){const h=t[p];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function cA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pg,t.set(i,[o])):r>=s.length?(o=new Pg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Qe};break;case"SpotLight":n={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function dA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hA=0;function fA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pA(t){const e=new uA,n=dA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new _t,o=new _t;function a(c){let d=0,p=0,u=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let h=0,m=0,y=0,g=0,f=0,v=0,_=0,M=0,P=0,A=0,T=0;c.sort(fA);for(let K=0,S=c.length;K<S;K++){const E=c[K],j=E.color,F=E.intensity,X=E.distance,ie=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=j.r*F,p+=j.g*F,u+=j.b*F;else if(E.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(E.sh.coefficients[$],F);T++}else if(E.isDirectionalLight){const $=e.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const le=E.shadow,k=n.get(E);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,i.directionalShadow[h]=k,i.directionalShadowMap[h]=ie,i.directionalShadowMatrix[h]=E.shadow.matrix,v++}i.directional[h]=$,h++}else if(E.isSpotLight){const $=e.get(E);$.position.setFromMatrixPosition(E.matrixWorld),$.color.copy(j).multiplyScalar(F),$.distance=X,$.coneCos=Math.cos(E.angle),$.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),$.decay=E.decay,i.spot[y]=$;const le=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,le.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=le.matrix,E.castShadow){const k=n.get(E);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,i.spotShadow[y]=k,i.spotShadowMap[y]=ie,M++}y++}else if(E.isRectAreaLight){const $=e.get(E);$.color.copy(j).multiplyScalar(F),$.halfWidth.set(E.width*.5,0,0),$.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=$,g++}else if(E.isPointLight){const $=e.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),$.distance=E.distance,$.decay=E.decay,E.castShadow){const le=E.shadow,k=n.get(E);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=E.shadow.matrix,_++}i.point[m]=$,m++}else if(E.isHemisphereLight){const $=e.get(E);$.skyColor.copy(E.color).multiplyScalar(F),$.groundColor.copy(E.groundColor).multiplyScalar(F),i.hemi[f]=$,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const N=i.hash;(N.directionalLength!==h||N.pointLength!==m||N.spotLength!==y||N.rectAreaLength!==g||N.hemiLength!==f||N.numDirectionalShadows!==v||N.numPointShadows!==_||N.numSpotShadows!==M||N.numSpotMaps!==P||N.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,N.directionalLength=h,N.pointLength=m,N.spotLength=y,N.rectAreaLength=g,N.hemiLength=f,N.numDirectionalShadows=v,N.numPointShadows=_,N.numSpotShadows=M,N.numSpotMaps=P,N.numLightProbes=T,i.version=hA++)}function l(c,d){let p=0,u=0,h=0,m=0,y=0;const g=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(_.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(_.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function Ng(t){const e=new pA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ng(t),e.set(r,[a])):s>=o.length?(a=new Ng(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class gA extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vA extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yA(t,e,n){let i=new Qf;const r=new ye,s=new ye,o=new At,a=new gA({depthPacking:hM}),l=new vA,c={},d=n.maxTextureSize,p={[mr]:yn,[yn]:mr,[Bn]:Bn},u=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:_A,fragmentShader:xA}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const m=new Mn;m.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $t(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N_;let f=this.type;this.render=function(A,T,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const K=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),j=t.state;j.setBlending(cr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const F=f!==wi&&this.type===wi,X=f===wi&&this.type!==wi;for(let ie=0,$=A.length;ie<$;ie++){const le=A[ie],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const se=k.getFrameExtents();if(r.multiply(se),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/se.x),r.x=s.x*se.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/se.y),r.y=s.y*se.y,k.mapSize.y=s.y)),k.map===null||F===!0||X===!0){const oe=this.type!==wi?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new Jr(r.x,r.y,oe),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const te=k.getViewportCount();for(let oe=0;oe<te;oe++){const be=k.getViewport(oe);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),j.viewport(o),k.updateMatrices(le,oe),i=k.getFrustum(),M(T,N,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===wi&&v(k,N),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(K,S,E)};function v(A,T){const N=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jr(r.x,r.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,N,u,y,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,N,h,y,null)}function _(A,T,N,K){let S=null;const E=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)S=E;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const j=S.uuid,F=T.uuid;let X=c[j];X===void 0&&(X={},c[j]=X);let ie=X[F];ie===void 0&&(ie=S.clone(),X[F]=ie,T.addEventListener("dispose",P)),S=ie}if(S.visible=T.visible,S.wireframe=T.wireframe,K===wi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:p[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=t.properties.get(S);j.light=N}return S}function M(A,T,N,K,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const F=e.update(A),X=A.material;if(Array.isArray(X)){const ie=F.groups;for(let $=0,le=ie.length;$<le;$++){const k=ie[$],se=X[k.materialIndex];if(se&&se.visible){const te=_(A,se,K,S);A.onBeforeShadow(t,A,T,N,F,te,k),t.renderBufferDirect(N,null,F,te,A,k),A.onAfterShadow(t,A,T,N,F,te,k)}}}else if(X.visible){const ie=_(A,X,K,S);A.onBeforeShadow(t,A,T,N,F,ie,null),t.renderBufferDirect(N,null,F,ie,A,null),A.onAfterShadow(t,A,T,N,F,ie,null)}}const j=A.children;for(let F=0,X=j.length;F<X;F++)M(j[F],T,N,K,S)}function P(A){A.target.removeEventListener("dispose",P);for(const N in c){const K=c[N],S=A.target.uuid;S in K&&(K[S].dispose(),delete K[S])}}}const SA={[Zd]:Qd,[eh]:ih,[th]:rh,[Js]:nh,[Qd]:Zd,[ih]:eh,[rh]:th,[nh]:Js};function MA(t){function e(){let O=!1;const Ae=new At;let ne=null;const me=new At(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!O&&(t.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,Ce,Ze,Pt,dn){dn===!0&&(Ee*=Pt,Ce*=Pt,Ze*=Pt),Ae.set(Ee,Ce,Ze,Pt),me.equals(Ae)===!1&&(t.clearColor(Ee,Ce,Ze,Pt),me.copy(Ae))},reset:function(){O=!1,ne=null,me.set(-1,0,0,0)}}}function n(){let O=!1,Ae=!1,ne=null,me=null,Ee=null;return{setReversed:function(Ce){Ae=Ce},setTest:function(Ce){Ce?_e(t.DEPTH_TEST):G(t.DEPTH_TEST)},setMask:function(Ce){ne!==Ce&&!O&&(t.depthMask(Ce),ne=Ce)},setFunc:function(Ce){if(Ae&&(Ce=SA[Ce]),me!==Ce){switch(Ce){case Zd:t.depthFunc(t.NEVER);break;case Qd:t.depthFunc(t.ALWAYS);break;case eh:t.depthFunc(t.LESS);break;case Js:t.depthFunc(t.LEQUAL);break;case th:t.depthFunc(t.EQUAL);break;case nh:t.depthFunc(t.GEQUAL);break;case ih:t.depthFunc(t.GREATER);break;case rh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Ee!==Ce&&(t.clearDepth(Ce),Ee=Ce)},reset:function(){O=!1,ne=null,me=null,Ee=null}}}function i(){let O=!1,Ae=null,ne=null,me=null,Ee=null,Ce=null,Ze=null,Pt=null,dn=null;return{setTest:function(tt){O||(tt?_e(t.STENCIL_TEST):G(t.STENCIL_TEST))},setMask:function(tt){Ae!==tt&&!O&&(t.stencilMask(tt),Ae=tt)},setFunc:function(tt,hn,vi){(ne!==tt||me!==hn||Ee!==vi)&&(t.stencilFunc(tt,hn,vi),ne=tt,me=hn,Ee=vi)},setOp:function(tt,hn,vi){(Ce!==tt||Ze!==hn||Pt!==vi)&&(t.stencilOp(tt,hn,vi),Ce=tt,Ze=hn,Pt=vi)},setLocked:function(tt){O=tt},setClear:function(tt){dn!==tt&&(t.clearStencil(tt),dn=tt)},reset:function(){O=!1,Ae=null,ne=null,me=null,Ee=null,Ce=null,Ze=null,Pt=null,dn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},p=new WeakMap,u=[],h=null,m=!1,y=null,g=null,f=null,v=null,_=null,M=null,P=null,A=new Qe(0,0,0),T=0,N=!1,K=null,S=null,E=null,j=null,F=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,$=0;const le=t.getParameter(t.VERSION);le.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(le)[1]),ie=$>=1):le.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ie=$>=2);let k=null,se={};const te=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),be=new At().fromArray(te),Be=new At().fromArray(oe);function Q(O,Ae,ne,me){const Ee=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(O,Ce),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ne;Ze++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Ae+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Ce}const fe={};fe[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(t.DEPTH_TEST),s.setFunc(Js),L(!1),D(zm),_e(t.CULL_FACE),R(cr);function _e(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function G(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function Z(O,Ae){return d[O]!==Ae?(t.bindFramebuffer(O,Ae),d[O]=Ae,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ae),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function U(O,Ae){let ne=u,me=!1;if(O){ne=p.get(Ae),ne===void 0&&(ne=[],p.set(Ae,ne));const Ee=O.textures;if(ne.length!==Ee.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,Ze=Ee.length;Ce<Ze;Ce++)ne[Ce]=t.COLOR_ATTACHMENT0+Ce;ne.length=Ee.length,me=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,me=!0);me&&t.drawBuffers(ne)}function ae(O){return h!==O?(t.useProgram(O),h=O,!0):!1}const he={[kr]:t.FUNC_ADD,[O1]:t.FUNC_SUBTRACT,[z1]:t.FUNC_REVERSE_SUBTRACT};he[B1]=t.MIN,he[H1]=t.MAX;const q={[V1]:t.ZERO,[G1]:t.ONE,[W1]:t.SRC_COLOR,[Kd]:t.SRC_ALPHA,[K1]:t.SRC_ALPHA_SATURATE,[q1]:t.DST_COLOR,[$1]:t.DST_ALPHA,[j1]:t.ONE_MINUS_SRC_COLOR,[Jd]:t.ONE_MINUS_SRC_ALPHA,[Y1]:t.ONE_MINUS_DST_COLOR,[X1]:t.ONE_MINUS_DST_ALPHA,[J1]:t.CONSTANT_COLOR,[Z1]:t.ONE_MINUS_CONSTANT_COLOR,[Q1]:t.CONSTANT_ALPHA,[eM]:t.ONE_MINUS_CONSTANT_ALPHA};function R(O,Ae,ne,me,Ee,Ce,Ze,Pt,dn,tt){if(O===cr){m===!0&&(G(t.BLEND),m=!1);return}if(m===!1&&(_e(t.BLEND),m=!0),O!==F1){if(O!==y||tt!==N){if((g!==kr||_!==kr)&&(t.blendEquation(t.FUNC_ADD),g=kr,_=kr),tt)switch(O){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFunc(t.ONE,t.ONE);break;case Hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}f=null,v=null,M=null,P=null,A.set(0,0,0),T=0,y=O,N=tt}return}Ee=Ee||Ae,Ce=Ce||ne,Ze=Ze||me,(Ae!==g||Ee!==_)&&(t.blendEquationSeparate(he[Ae],he[Ee]),g=Ae,_=Ee),(ne!==f||me!==v||Ce!==M||Ze!==P)&&(t.blendFuncSeparate(q[ne],q[me],q[Ce],q[Ze]),f=ne,v=me,M=Ce,P=Ze),(Pt.equals(A)===!1||dn!==T)&&(t.blendColor(Pt.r,Pt.g,Pt.b,dn),A.copy(Pt),T=dn),y=O,N=!1}function I(O,Ae){O.side===Bn?G(t.CULL_FACE):_e(t.CULL_FACE);let ne=O.side===yn;Ae&&(ne=!ne),L(ne),O.blending===Bs&&O.transparent===!1?R(cr):R(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const me=O.stencilWrite;o.setTest(me),me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):G(t.SAMPLE_ALPHA_TO_COVERAGE)}function L(O){K!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),K=O)}function D(O){O!==I1?(_e(t.CULL_FACE),O!==S&&(O===zm?t.cullFace(t.BACK):O===U1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):G(t.CULL_FACE),S=O}function V(O){O!==E&&(ie&&t.lineWidth(O),E=O)}function ee(O,Ae,ne){O?(_e(t.POLYGON_OFFSET_FILL),(j!==Ae||F!==ne)&&(t.polygonOffset(Ae,ne),j=Ae,F=ne)):G(t.POLYGON_OFFSET_FILL)}function ce(O){O?_e(t.SCISSOR_TEST):G(t.SCISSOR_TEST)}function C(O){O===void 0&&(O=t.TEXTURE0+X-1),k!==O&&(t.activeTexture(O),k=O)}function w(O,Ae,ne){ne===void 0&&(k===null?ne=t.TEXTURE0+X-1:ne=k);let me=se[ne];me===void 0&&(me={type:void 0,texture:void 0},se[ne]=me),(me.type!==O||me.texture!==Ae)&&(k!==ne&&(t.activeTexture(ne),k=ne),t.bindTexture(O,Ae||fe[O]),me.type=O,me.texture=Ae)}function W(){const O=se[k];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(O){be.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),be.copy(O))}function Le(O){Be.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Be.copy(O))}function Je(O,Ae){let ne=l.get(Ae);ne===void 0&&(ne=new WeakMap,l.set(Ae,ne));let me=ne.get(O);me===void 0&&(me=t.getUniformBlockIndex(Ae,O.name),ne.set(O,me))}function je(O,Ae){const me=l.get(Ae).get(O);a.get(Ae)!==me&&(t.uniformBlockBinding(Ae,me,O.__bindingPointIndex),a.set(Ae,me))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,se={},d={},p=new WeakMap,u=[],h=null,m=!1,y=null,g=null,f=null,v=null,_=null,M=null,P=null,A=new Qe(0,0,0),T=0,N=!1,K=null,S=null,E=null,j=null,F=null,be.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:G,bindFramebuffer:Z,drawBuffers:U,useProgram:ae,setBlending:R,setMaterial:I,setFlipSided:L,setCullFace:D,setLineWidth:V,setPolygonOffset:ee,setScissorTest:ce,activeTexture:C,bindTexture:w,unbindTexture:W,compressedTexImage2D:ue,compressedTexImage3D:pe,texImage2D:Pe,texImage3D:Ge,updateUBOMapping:Je,uniformBlockBinding:je,texStorage2D:Ke,texStorage3D:ve,texSubImage2D:de,texSubImage3D:Ie,compressedTexSubImage2D:Me,compressedTexSubImage3D:Re,scissor:We,viewport:Le,reset:ut}}function Lg(t,e,n,i){const r=wA(i);switch(n){case F_:return t*e;case z_:return t*e;case B_:return t*e*2;case $f:return t*e/r.components*r.byteLength;case Xf:return t*e/r.components*r.byteLength;case H_:return t*e*2/r.components*r.byteLength;case qf:return t*e*2/r.components*r.byteLength;case O_:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Yf:return t*e*4/r.components*r.byteLength;case Al:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:case dh:return Math.max(t,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(t,8)*Math.max(e,8)/2;case hh:case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case V_:case Nh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Lh:case kh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wA(t){switch(t){case Ii:case D_:return{byteLength:1,components:1};case da:case I_:case Ma:return{byteLength:2,components:1};case Wf:case jf:return{byteLength:2,components:4};case Kr:case Gf:case Ci:return{byteLength:4,components:1};case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function EA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,d=new WeakMap;let p;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,w){return h?new OffscreenCanvas(C,w):dc("canvas")}function y(C,w,W){let ue=1;const pe=ce(C);if((pe.width>W||pe.height>W)&&(ue=W/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(ue*pe.width),Ie=Math.floor(ue*pe.height);p===void 0&&(p=m(de,Ie));const Me=w?m(de,Ie):p;return Me.width=de,Me.height=Ie,Me.getContext("2d").drawImage(C,0,0,de,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+de+"x"+Ie+")."),Me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==nn&&C.minFilter!==ni}function f(C){t.generateMipmap(C)}function v(C,w,W,ue,pe=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de=w;if(w===t.RED&&(W===t.FLOAT&&(de=t.R32F),W===t.HALF_FLOAT&&(de=t.R16F),W===t.UNSIGNED_BYTE&&(de=t.R8)),w===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(de=t.R8UI),W===t.UNSIGNED_SHORT&&(de=t.R16UI),W===t.UNSIGNED_INT&&(de=t.R32UI),W===t.BYTE&&(de=t.R8I),W===t.SHORT&&(de=t.R16I),W===t.INT&&(de=t.R32I)),w===t.RG&&(W===t.FLOAT&&(de=t.RG32F),W===t.HALF_FLOAT&&(de=t.RG16F),W===t.UNSIGNED_BYTE&&(de=t.RG8)),w===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(de=t.RG8UI),W===t.UNSIGNED_SHORT&&(de=t.RG16UI),W===t.UNSIGNED_INT&&(de=t.RG32UI),W===t.BYTE&&(de=t.RG8I),W===t.SHORT&&(de=t.RG16I),W===t.INT&&(de=t.RG32I)),w===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(de=t.RGB8UI),W===t.UNSIGNED_SHORT&&(de=t.RGB16UI),W===t.UNSIGNED_INT&&(de=t.RGB32UI),W===t.BYTE&&(de=t.RGB8I),W===t.SHORT&&(de=t.RGB16I),W===t.INT&&(de=t.RGB32I)),w===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),W===t.UNSIGNED_INT&&(de=t.RGBA32UI),W===t.BYTE&&(de=t.RGBA8I),W===t.SHORT&&(de=t.RGBA16I),W===t.INT&&(de=t.RGBA32I)),w===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),w===t.RGBA){const Ie=pe?ac:rt.getTransfer(ue);W===t.FLOAT&&(de=t.RGBA32F),W===t.HALF_FLOAT&&(de=t.RGBA16F),W===t.UNSIGNED_BYTE&&(de=Ie===pt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function _(C,w){let W;return C?w===null||w===Kr||w===eo?W=t.DEPTH24_STENCIL8:w===Ci?W=t.DEPTH32F_STENCIL8:w===da&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Kr||w===eo?W=t.DEPTH_COMPONENT24:w===Ci?W=t.DEPTH_COMPONENT32F:w===da&&(W=t.DEPTH_COMPONENT16),W}function M(C,w){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==ni?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){const w=C.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&d.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),K(w)}function T(C){const w=i.get(C);if(w.__webglInit===void 0)return;const W=C.source,ue=u.get(W);if(ue){const pe=ue[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&N(C),Object.keys(ue).length===0&&u.delete(W)}i.remove(C)}function N(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const W=C.source,ue=u.get(W);delete ue[w.__cacheKey],o.memory.textures--}function K(C){const w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let pe=0;pe<w.__webglFramebuffer[ue].length;pe++)t.deleteFramebuffer(w.__webglFramebuffer[ue][pe]);else t.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)t.deleteFramebuffer(w.__webglFramebuffer[ue]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=C.textures;for(let ue=0,pe=W.length;ue<pe;ue++){const de=i.get(W[ue]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(W[ue])}i.remove(C)}let S=0;function E(){S=0}function j(){const C=S;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),S+=1,C}function F(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function X(C,w){const W=i.get(C);if(C.isVideoTexture&&V(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ue=C.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(W,C,w);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+w)}function ie(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Be(W,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+w)}function $(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Be(W,C,w);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+w)}function le(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Q(W,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+w)}const k={[oc]:t.REPEAT,[zr]:t.CLAMP_TO_EDGE,[ah]:t.MIRRORED_REPEAT},se={[nn]:t.NEAREST,[uM]:t.NEAREST_MIPMAP_NEAREST,[Wa]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[fu]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},te={[pM]:t.NEVER,[yM]:t.ALWAYS,[mM]:t.LESS,[W_]:t.LEQUAL,[gM]:t.EQUAL,[xM]:t.GEQUAL,[vM]:t.GREATER,[_M]:t.NOTEQUAL};function oe(C,w){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ni||w.magFilter===fu||w.magFilter===Wa||w.magFilter===Br||w.minFilter===ni||w.minFilter===fu||w.minFilter===Wa||w.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,k[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,k[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,k[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,se[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==Wa&&w.minFilter!==Br||w.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function be(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",P));const ue=w.source;let pe=u.get(ue);pe===void 0&&(pe={},u.set(ue,pe));const de=F(w);if(de!==C.__cacheKey){pe[de]===void 0&&(pe[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),pe[de].usedTimes++;const Ie=pe[C.__cacheKey];Ie!==void 0&&(pe[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&N(w)),C.__cacheKey=de,C.__webglTexture=pe[de].texture}return W}function Be(C,w,W){let ue=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=t.TEXTURE_3D);const pe=be(C,w),de=w.source;n.bindTexture(ue,C.__webglTexture,t.TEXTURE0+W);const Ie=i.get(de);if(de.version!==Ie.__version||pe===!0){n.activeTexture(t.TEXTURE0+W);const Me=rt.getPrimaries(rt.workingColorSpace),Re=w.colorSpace===Ji?null:rt.getPrimaries(w.colorSpace),Ke=w.colorSpace===Ji||Me===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ve=y(w.image,!1,r.maxTextureSize);ve=ee(w,ve);const Pe=s.convert(w.format,w.colorSpace),Ge=s.convert(w.type);let We=v(w.internalFormat,Pe,Ge,w.colorSpace,w.isVideoTexture);oe(ue,w);let Le;const Je=w.mipmaps,je=w.isVideoTexture!==!0,ut=Ie.__version===void 0||pe===!0,O=de.dataReady,Ae=M(w,ve);if(w.isDepthTexture)We=_(w.format===to,w.type),ut&&(je?n.texStorage2D(t.TEXTURE_2D,1,We,ve.width,ve.height):n.texImage2D(t.TEXTURE_2D,0,We,ve.width,ve.height,0,Pe,Ge,null));else if(w.isDataTexture)if(Je.length>0){je&&ut&&n.texStorage2D(t.TEXTURE_2D,Ae,We,Je[0].width,Je[0].height);for(let ne=0,me=Je.length;ne<me;ne++)Le=Je[ne],je?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Le.width,Le.height,Pe,Ge,Le.data):n.texImage2D(t.TEXTURE_2D,ne,We,Le.width,Le.height,0,Pe,Ge,Le.data);w.generateMipmaps=!1}else je?(ut&&n.texStorage2D(t.TEXTURE_2D,Ae,We,ve.width,ve.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve.width,ve.height,Pe,Ge,ve.data)):n.texImage2D(t.TEXTURE_2D,0,We,ve.width,ve.height,0,Pe,Ge,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,We,Je[0].width,Je[0].height,ve.depth);for(let ne=0,me=Je.length;ne<me;ne++)if(Le=Je[ne],w.format!==ri)if(Pe!==null)if(je){if(O)if(w.layerUpdates.size>0){const Ee=Lg(Le.width,Le.height,w.format,w.type);for(const Ce of w.layerUpdates){const Ze=Le.data.subarray(Ce*Ee/Le.data.BYTES_PER_ELEMENT,(Ce+1)*Ee/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ce,Le.width,Le.height,1,Pe,Ze,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,ve.depth,Pe,Le.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,We,Le.width,Le.height,ve.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,ve.depth,Pe,Ge,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,We,Le.width,Le.height,ve.depth,0,Pe,Ge,Le.data)}else{je&&ut&&n.texStorage2D(t.TEXTURE_2D,Ae,We,Je[0].width,Je[0].height);for(let ne=0,me=Je.length;ne<me;ne++)Le=Je[ne],w.format!==ri?Pe!==null?je?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,Le.width,Le.height,Pe,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,We,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Le.width,Le.height,Pe,Ge,Le.data):n.texImage2D(t.TEXTURE_2D,ne,We,Le.width,Le.height,0,Pe,Ge,Le.data)}else if(w.isDataArrayTexture)if(je){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,We,ve.width,ve.height,ve.depth),O)if(w.layerUpdates.size>0){const ne=Lg(ve.width,ve.height,w.format,w.type);for(const me of w.layerUpdates){const Ee=ve.data.subarray(me*ne/ve.data.BYTES_PER_ELEMENT,(me+1)*ne/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ve.width,ve.height,1,Pe,Ge,Ee)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Pe,Ge,ve.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,ve.width,ve.height,ve.depth,0,Pe,Ge,ve.data);else if(w.isData3DTexture)je?(ut&&n.texStorage3D(t.TEXTURE_3D,Ae,We,ve.width,ve.height,ve.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Pe,Ge,ve.data)):n.texImage3D(t.TEXTURE_3D,0,We,ve.width,ve.height,ve.depth,0,Pe,Ge,ve.data);else if(w.isFramebufferTexture){if(ut)if(je)n.texStorage2D(t.TEXTURE_2D,Ae,We,ve.width,ve.height);else{let ne=ve.width,me=ve.height;for(let Ee=0;Ee<Ae;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,We,ne,me,0,Pe,Ge,null),ne>>=1,me>>=1}}else if(Je.length>0){if(je&&ut){const ne=ce(Je[0]);n.texStorage2D(t.TEXTURE_2D,Ae,We,ne.width,ne.height)}for(let ne=0,me=Je.length;ne<me;ne++)Le=Je[ne],je?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Pe,Ge,Le):n.texImage2D(t.TEXTURE_2D,ne,We,Pe,Ge,Le);w.generateMipmaps=!1}else if(je){if(ut){const ne=ce(ve);n.texStorage2D(t.TEXTURE_2D,Ae,We,ne.width,ne.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,Ge,ve)}else n.texImage2D(t.TEXTURE_2D,0,We,Pe,Ge,ve);g(w)&&f(ue),Ie.__version=de.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Q(C,w,W){if(w.image.length!==6)return;const ue=be(C,w),pe=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const de=i.get(pe);if(pe.version!==de.__version||ue===!0){n.activeTexture(t.TEXTURE0+W);const Ie=rt.getPrimaries(rt.workingColorSpace),Me=w.colorSpace===Ji?null:rt.getPrimaries(w.colorSpace),Re=w.colorSpace===Ji||Ie===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,ve=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!Ke&&!ve?Pe[me]=y(w.image[me],!0,r.maxCubemapSize):Pe[me]=ve?w.image[me].image:w.image[me],Pe[me]=ee(w,Pe[me]);const Ge=Pe[0],We=s.convert(w.format,w.colorSpace),Le=s.convert(w.type),Je=v(w.internalFormat,We,Le,w.colorSpace),je=w.isVideoTexture!==!0,ut=de.__version===void 0||ue===!0,O=pe.dataReady;let Ae=M(w,Ge);oe(t.TEXTURE_CUBE_MAP,w);let ne;if(Ke){je&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Je,Ge.width,Ge.height);for(let me=0;me<6;me++){ne=Pe[me].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const Ce=ne[Ee];w.format!==ri?We!==null?je?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,0,0,Ce.width,Ce.height,We,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,Je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,0,0,Ce.width,Ce.height,We,Le,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,Je,Ce.width,Ce.height,0,We,Le,Ce.data)}}}else{if(ne=w.mipmaps,je&&ut){ne.length>0&&Ae++;const me=ce(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Je,me.width,me.height)}for(let me=0;me<6;me++)if(ve){je?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,We,Le,Pe[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Je,Pe[me].width,Pe[me].height,0,We,Le,Pe[me].data);for(let Ee=0;Ee<ne.length;Ee++){const Ze=ne[Ee].image[me].image;je?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,0,0,Ze.width,Ze.height,We,Le,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,Je,Ze.width,Ze.height,0,We,Le,Ze.data)}}else{je?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We,Le,Pe[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Je,We,Le,Pe[me]);for(let Ee=0;Ee<ne.length;Ee++){const Ce=ne[Ee];je?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,0,0,We,Le,Ce.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,Je,We,Le,Ce.image[me])}}}g(w)&&f(t.TEXTURE_CUBE_MAP),de.__version=pe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function fe(C,w,W,ue,pe,de){const Ie=s.convert(W.format,W.colorSpace),Me=s.convert(W.type),Re=v(W.internalFormat,Ie,Me,W.colorSpace);if(!i.get(w).__hasExternalTextures){const ve=Math.max(1,w.width>>de),Pe=Math.max(1,w.height>>de);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,de,Re,ve,Pe,w.depth,0,Ie,Me,null):n.texImage2D(pe,de,Re,ve,Pe,0,Ie,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),D(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,pe,i.get(W).__webglTexture,0,L(w)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ue,pe,i.get(W).__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(C,w,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer){const ue=w.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,de=_(w.stencilBuffer,pe),Ie=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=L(w);D(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,de,w.width,w.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,de,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,de,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,C)}else{const ue=w.textures;for(let pe=0;pe<ue.length;pe++){const de=ue[pe],Ie=s.convert(de.format,de.colorSpace),Me=s.convert(de.type),Re=v(de.internalFormat,Ie,Me,de.colorSpace),Ke=L(w);W&&D(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,Re,w.width,w.height):D(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,Re,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Re,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function G(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const ue=i.get(w.depthTexture).__webglTexture,pe=L(w);if(w.depthTexture.format===Hs)D(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ue,0);else if(w.depthTexture.format===to)D(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Z(C){const w=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const ue=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=ue}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");G(w.__webglFramebuffer,C)}else if(W){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=t.createRenderbuffer(),_e(w.__webglDepthbuffer[ue],C,!1);else{const pe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[ue];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,de)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),_e(w.__webglDepthbuffer,C,!1);else{const ue=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,pe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(C,w,W){const ue=i.get(C);w!==void 0&&fe(ue.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Z(C)}function ae(C){const w=C.texture,W=i.get(C),ue=i.get(w);C.addEventListener("dispose",A);const pe=C.textures,de=C.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture()),ue.__version=w.version,o.memory.textures++),de){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let Re=0;Re<w.mipmaps.length;Re++)W.__webglFramebuffer[Me][Re]=t.createFramebuffer()}else W.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)W.__webglFramebuffer[Me]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let Me=0,Re=pe.length;Me<Re;Me++){const Ke=i.get(pe[Me]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&D(C)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<pe.length;Me++){const Re=pe[Me];W.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);const Ke=s.convert(Re.format,Re.colorSpace),ve=s.convert(Re.type),Pe=v(Re.internalFormat,Ke,ve,Re.colorSpace,C.isXRRenderTarget===!0),Ge=L(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),oe(t.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Re=0;Re<w.mipmaps.length;Re++)fe(W.__webglFramebuffer[Me][Re],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Re);else fe(W.__webglFramebuffer[Me],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let Me=0,Re=pe.length;Me<Re;Me++){const Ke=pe[Me],ve=i.get(Ke);n.bindTexture(t.TEXTURE_2D,ve.__webglTexture),oe(t.TEXTURE_2D,Ke),fe(W.__webglFramebuffer,C,Ke,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),g(Ke)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,ue.__webglTexture),oe(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let Re=0;Re<w.mipmaps.length;Re++)fe(W.__webglFramebuffer[Re],C,w,t.COLOR_ATTACHMENT0,Me,Re);else fe(W.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,Me,0);g(w)&&f(Me),n.unbindTexture()}C.depthBuffer&&Z(C)}function he(C){const w=C.textures;for(let W=0,ue=w.length;W<ue;W++){const pe=w[W];if(g(pe)){const de=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(pe).__webglTexture;n.bindTexture(de,Ie),f(de),n.unbindTexture()}}}const q=[],R=[];function I(C){if(C.samples>0){if(D(C)===!1){const w=C.textures,W=C.width,ue=C.height;let pe=t.COLOR_BUFFER_BIT;const de=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(C),Me=w.length>1;if(Me)for(let Re=0;Re<w.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<w.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const Ke=i.get(w[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,W,ue,0,0,W,ue,pe,t.NEAREST),l===!0&&(q.length=0,R.length=0,q.push(t.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.resolveDepthBuffer===!1&&(q.push(de),R.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,q))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Re=0;Re<w.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const Ke=i.get(w[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function L(C){return Math.min(r.maxSamples,C.samples)}function D(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function V(C){const w=o.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function ee(C,w){const W=C.colorSpace,ue=C.format,pe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==yr&&W!==Ji&&(rt.getTransfer(W)===pt?(ue!==ri||pe!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=ie,this.setTexture3D=$,this.setTextureCube=le,this.rebindTextures=U,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=D}function TA(t,e){function n(i,r=Ji){let s;const o=rt.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===Wf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===U_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===D_)return t.BYTE;if(i===I_)return t.SHORT;if(i===da)return t.UNSIGNED_SHORT;if(i===Gf)return t.INT;if(i===Kr)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===Ma)return t.HALF_FLOAT;if(i===F_)return t.ALPHA;if(i===O_)return t.RGB;if(i===ri)return t.RGBA;if(i===z_)return t.LUMINANCE;if(i===B_)return t.LUMINANCE_ALPHA;if(i===Hs)return t.DEPTH_COMPONENT;if(i===to)return t.DEPTH_STENCIL;if(i===$f)return t.RED;if(i===Xf)return t.RED_INTEGER;if(i===H_)return t.RG;if(i===qf)return t.RG_INTEGER;if(i===Yf)return t.RGBA_INTEGER;if(i===Al||i===Cl||i===Rl||i===Pl)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lh||i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hh||i===fh||i===ph)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hh||i===fh)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ph)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mh||i===gh||i===vh||i===_h||i===xh||i===yh||i===Sh||i===Mh||i===wh||i===Eh||i===Th||i===bh||i===Ah||i===Ch)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_h)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ah)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ch)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nl)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===V_||i===Nh||i===Lh||i===kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class bA extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mn extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,m=.005;c.inputState.pinching&&u>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gr({vertexShader:CA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $t(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends co{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,m=null;const y=new PA,g=n.getContextAttributes();let f=null,v=null;const _=[],M=[],P=new ye;let A=null;const T=new Cn;T.layers.enable(1),T.viewport=new At;const N=new Cn;N.layers.enable(2),N.viewport=new At;const K=[T,N],S=new bA;S.layers.enable(1),S.layers.enable(2);let E=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=_[Q];return fe===void 0&&(fe=new Gu,_[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=_[Q];return fe===void 0&&(fe=new Gu,_[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=_[Q];return fe===void 0&&(fe=new Gu,_[Q]=fe),fe.getHandSpace()};function F(Q){const fe=M.indexOf(Q.inputSource);if(fe===-1)return;const _e=_[fe];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,c||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<_.length;Q++){const fe=M[Q];fe!==null&&(M[Q]=null,_[Q].disconnect(fe))}E=null,j=null,y.reset(),e.setRenderTarget(f),h=null,u=null,p=null,r=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ie),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Jr(h.framebufferWidth,h.framebufferHeight,{format:ri,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let fe=null,_e=null,G=null;g.depth&&(G=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=g.stencil?to:Hs,_e=g.stencil?eo:Kr);const Z={colorFormat:n.RGBA8,depthFormat:G,scaleFactor:s};p=new XRWebGLBinding(r,n),u=p.createProjectionLayer(Z),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Jr(u.textureWidth,u.textureHeight,{format:ri,type:Ii,depthTexture:new nx(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(Q){for(let fe=0;fe<Q.removed.length;fe++){const _e=Q.removed[fe],G=M.indexOf(_e);G>=0&&(M[G]=null,_[G].disconnect(_e))}for(let fe=0;fe<Q.added.length;fe++){const _e=Q.added[fe];let G=M.indexOf(_e);if(G===-1){for(let U=0;U<_.length;U++)if(U>=M.length){M.push(_e),G=U;break}else if(M[U]===null){M[U]=_e,G=U;break}if(G===-1)break}const Z=_[G];Z&&Z.connect(_e)}}const $=new z,le=new z;function k(Q,fe,_e){$.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);const G=$.distanceTo(le),Z=fe.projectionMatrix.elements,U=_e.projectionMatrix.elements,ae=Z[14]/(Z[10]-1),he=Z[14]/(Z[10]+1),q=(Z[9]+1)/Z[5],R=(Z[9]-1)/Z[5],I=(Z[8]-1)/Z[0],L=(U[8]+1)/U[0],D=ae*I,V=ae*L,ee=G/(-I+L),ce=ee*-I;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ce),Q.translateZ(ee),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Z[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const C=ae+ee,w=he+ee,W=D-ce,ue=V+(G-ce),pe=q*he/w*C,de=R*he/w*C;Q.projectionMatrix.makePerspective(W,ue,pe,de,C,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let fe=Q.near,_e=Q.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),S.near=N.near=T.near=fe,S.far=N.far=T.far=_e,(E!==S.near||j!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,j=S.far);const G=Q.parent,Z=S.cameras;se(S,G);for(let U=0;U<Z.length;U++)se(Z[U],G);Z.length===2?k(S,T,N):S.projectionMatrix.copy(T.projectionMatrix),te(Q,S,G)};function te(Q,fe,_e){_e===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Dh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function be(Q,fe){if(d=fe.getViewerPose(c||o),m=fe,d!==null){const _e=d.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let G=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,G=!0);for(let U=0;U<_e.length;U++){const ae=_e[U];let he=null;if(h!==null)he=h.getViewport(ae);else{const R=p.getViewSubImage(u,ae);he=R.viewport,U===0&&(e.setRenderTargetTextures(v,R.colorTexture,u.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(v))}let q=K[U];q===void 0&&(q=new Cn,q.layers.enable(U),q.viewport=new At,K[U]=q),q.matrix.fromArray(ae.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(ae.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(he.x,he.y,he.width,he.height),U===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),G===!0&&S.cameras.push(q)}const Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const U=p.getDepthInformation(_e[0]);U&&U.isValid&&U.texture&&y.init(e,U,r.renderState)}}for(let _e=0;_e<_.length;_e++){const G=M[_e],Z=_[_e];G!==null&&Z!==void 0&&Z.update(G,fe,c||o)}oe&&oe(Q,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}const Be=new tx;Be.setAnimationLoop(be),this.setAnimationLoop=function(Q){oe=Q},this.dispose=function(){}}}const Ar=new Ui,LA=new _t;function kA(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Z_(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,v,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&h(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),y(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,v,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===yn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===yn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=e.get(f),_=v.envMap,M=v.envMapRotation;_&&(g.envMap.value=_,Ar.copy(M),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(Ar)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function h(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function c(v,_){let M=r[v.id];M===void 0&&(m(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",g));const P=_.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}function d(v){const _=p();v.__bindingPointIndex=_;const M=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const _=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=M.length;A<T;A++){const N=Array.isArray(M[A])?M[A]:[M[A]];for(let K=0,S=N.length;K<S;K++){const E=N[K];if(h(E,A,K,P)===!0){const j=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let ie=0;ie<F.length;ie++){const $=F[ie],le=y($);typeof $=="number"||typeof $=="boolean"?(E.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,j+X,E.__data)):$.isMatrix3?(E.__data[0]=$.elements[0],E.__data[1]=$.elements[1],E.__data[2]=$.elements[2],E.__data[3]=0,E.__data[4]=$.elements[3],E.__data[5]=$.elements[4],E.__data[6]=$.elements[5],E.__data[7]=0,E.__data[8]=$.elements[6],E.__data[9]=$.elements[7],E.__data[10]=$.elements[8],E.__data[11]=0):($.toArray(E.__data,X),X+=le.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(v,_,M,P){const A=v.value,T=_+"_"+M;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const N=P[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function m(v){const _=v.uniforms;let M=0;const P=16;for(let T=0,N=_.length;T<N;T++){const K=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,E=K.length;S<E;S++){const j=K[S],F=Array.isArray(j.value)?j.value:[j.value];for(let X=0,ie=F.length;X<ie;X++){const $=F[X],le=y($),k=M%P,se=k%le.boundary,te=k+se;M+=se,te!==0&&P-te<le.storage&&(M+=P-te),j.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=le.storage}}}const A=M%P;return A>0&&(M+=P-A),v.__size=M,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class np{constructor(e={}){const{canvas:n=MM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const h=new Uint32Array(4),m=new Int32Array(4);let y=null,g=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=ur,this.toneMappingExposure=1;const _=this;let M=!1,P=0,A=0,T=null,N=-1,K=null;const S=new At,E=new At;let j=null;const F=new Qe(0);let X=0,ie=n.width,$=n.height,le=1,k=null,se=null;const te=new At(0,0,ie,$),oe=new At(0,0,ie,$);let be=!1;const Be=new Qf;let Q=!1,fe=!1;const _e=new _t,G=new _t,Z=new z,U=new At,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function q(){return T===null?le:1}let R=i;function I(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),R===null){const B="webgl2";if(R=I(B,b),R===null)throw I(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let L,D,V,ee,ce,C,w,W,ue,pe,de,Ie,Me,Re,Ke,ve,Pe,Ge,We,Le,Je,je,ut,O;function Ae(){L=new BT(R),L.init(),je=new TA(R,L),D=new DT(R,L,e,je),V=new MA(R),D.reverseDepthBuffer&&V.buffers.depth.setReversed(!0),ee=new GT(R),ce=new aA,C=new EA(R,L,V,ce,D,je,ee),w=new UT(_),W=new zT(_),ue=new KM(R),ut=new LT(R,ue),pe=new HT(R,ue,ee,ut),de=new jT(R,pe,ue,ee),We=new WT(R,D,C),ve=new IT(ce),Ie=new oA(_,w,W,L,D,ut,ve),Me=new kA(_,ce),Re=new cA,Ke=new mA(L),Ge=new NT(_,w,W,V,de,u,l),Pe=new yA(_,de,D),O=new DA(R,ee,D,V),Le=new kT(R,L,ee),Je=new VT(R,L,ee),ee.programs=Ie.programs,_.capabilities=D,_.extensions=L,_.properties=ce,_.renderLists=Re,_.shadowMap=Pe,_.state=V,_.info=ee}Ae();const ne=new NA(_,R);this.xr=ne,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=L.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=L.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(ie,$,!1))},this.getSize=function(b){return b.set(ie,$)},this.setSize=function(b,B,Y=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,$=B,n.width=Math.floor(b*le),n.height=Math.floor(B*le),Y===!0&&(n.style.width=b+"px",n.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(ie*le,$*le).floor()},this.setDrawingBufferSize=function(b,B,Y){ie=b,$=B,le=Y,n.width=Math.floor(b*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,B,Y,J){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,B,Y,J),V.viewport(S.copy(te).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,B,Y,J){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,B,Y,J),V.scissor(E.copy(oe).multiplyScalar(le).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(b){V.setScissorTest(be=b)},this.setOpaqueSort=function(b){k=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(b=!0,B=!0,Y=!0){let J=0;if(b){let H=!1;if(T!==null){const xe=T.texture.format;H=xe===Yf||xe===qf||xe===Xf}if(H){const xe=T.texture.type,Te=xe===Ii||xe===Kr||xe===da||xe===eo||xe===Wf||xe===jf,ke=Ge.getClearColor(),Ue=Ge.getClearAlpha(),He=ke.r,Ve=ke.g,Fe=ke.b;Te?(h[0]=He,h[1]=Ve,h[2]=Fe,h[3]=Ue,R.clearBufferuiv(R.COLOR,0,h)):(m[0]=He,m[1]=Ve,m[2]=Fe,m[3]=Ue,R.clearBufferiv(R.COLOR,0,m))}else J|=R.COLOR_BUFFER_BIT}B&&(J|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Re.dispose(),Ke.dispose(),ce.dispose(),w.dispose(),W.dispose(),de.dispose(),ut.dispose(),O.dispose(),Ie.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",vp),ne.removeEventListener("sessionend",_p),Sr.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=ee.autoReset,B=Pe.enabled,Y=Pe.autoUpdate,J=Pe.needsUpdate,H=Pe.type;Ae(),ee.autoReset=b,Pe.enabled=B,Pe.autoUpdate=Y,Pe.needsUpdate=J,Pe.type=H}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ze(b){const B=b.target;B.removeEventListener("dispose",Ze),Pt(B)}function Pt(b){dn(b),ce.remove(b)}function dn(b){const B=ce.get(b).programs;B!==void 0&&(B.forEach(function(Y){Ie.releaseProgram(Y)}),b.isShaderMaterial&&Ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,Y,J,H,xe){B===null&&(B=ae);const Te=H.isMesh&&H.matrixWorld.determinant()<0,ke=wx(b,B,Y,J,H);V.setMaterial(J,Te);let Ue=Y.index,He=1;if(J.wireframe===!0){if(Ue=pe.getWireframeAttribute(Y),Ue===void 0)return;He=2}const Ve=Y.drawRange,Fe=Y.attributes.position;let st=Ve.start*He,ht=(Ve.start+Ve.count)*He;xe!==null&&(st=Math.max(st,xe.start*He),ht=Math.min(ht,(xe.start+xe.count)*He)),Ue!==null?(st=Math.max(st,0),ht=Math.min(ht,Ue.count)):Fe!=null&&(st=Math.max(st,0),ht=Math.min(ht,Fe.count));const Et=ht-st;if(Et<0||Et===1/0)return;ut.setup(H,J,ke,Y,Ue);let wn,nt=Le;if(Ue!==null&&(wn=ue.get(Ue),nt=Je,nt.setIndex(wn)),H.isMesh)J.wireframe===!0?(V.setLineWidth(J.wireframeLinewidth*q()),nt.setMode(R.LINES)):nt.setMode(R.TRIANGLES);else if(H.isLine){let Oe=J.linewidth;Oe===void 0&&(Oe=1),V.setLineWidth(Oe*q()),H.isLineSegments?nt.setMode(R.LINES):H.isLineLoop?nt.setMode(R.LINE_LOOP):nt.setMode(R.LINE_STRIP)}else H.isPoints?nt.setMode(R.POINTS):H.isSprite&&nt.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)nt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Oe=H._multiDrawStarts,Vt=H._multiDrawCounts,it=H._multiDrawCount,$n=Ue?ue.get(Ue).bytesPerElement:1,ns=ce.get(J).currentProgram.getUniforms();for(let En=0;En<it;En++)ns.setValue(R,"_gl_DrawID",En),nt.render(Oe[En]/$n,Vt[En])}else if(H.isInstancedMesh)nt.renderInstances(st,Et,H.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Vt=Math.min(Y.instanceCount,Oe);nt.renderInstances(st,Et,Vt)}else nt.render(st,Et)};function tt(b,B,Y){b.transparent===!0&&b.side===Bn&&b.forceSinglePass===!1?(b.side=yn,b.needsUpdate=!0,ba(b,B,Y),b.side=mr,b.needsUpdate=!0,ba(b,B,Y),b.side=Bn):ba(b,B,Y)}this.compile=function(b,B,Y=null){Y===null&&(Y=b),g=Ke.get(Y),g.init(B),v.push(g),Y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),b!==Y&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const J=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const ke=xe[Te];tt(ke,Y,H),J.add(ke)}else tt(xe,Y,H),J.add(xe)}),v.pop(),g=null,J},this.compileAsync=function(b,B,Y=null){const J=this.compile(b,B,Y);return new Promise(H=>{function xe(){if(J.forEach(function(Te){ce.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){H(b);return}setTimeout(xe,10)}L.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let hn=null;function vi(b){hn&&hn(b)}function vp(){Sr.stop()}function _p(){Sr.start()}const Sr=new tx;Sr.setAnimationLoop(vi),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(b){hn=b,ne.setAnimationLoop(b),b===null?Sr.stop():Sr.start()},ne.addEventListener("sessionstart",vp),ne.addEventListener("sessionend",_p),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(B),B=ne.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,B,T),g=Ke.get(b,v.length),g.init(B),v.push(g),G.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(G),fe=this.localClippingEnabled,Q=ve.init(this.clippingPlanes,fe),y=Re.get(b,f.length),y.init(),f.push(y),ne.enabled===!0&&ne.isPresenting===!0){const xe=_.xr.getDepthSensingMesh();xe!==null&&Uc(xe,B,-1/0,_.sortObjects)}Uc(b,B,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(k,se),he=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,he&&Ge.addToRenderList(y,b),this.info.render.frame++,Q===!0&&ve.beginShadows();const Y=g.state.shadowsArray;Pe.render(Y,b,B),Q===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,H=y.transmissive;if(g.setupLights(),B.isArrayCamera){const xe=B.cameras;if(H.length>0)for(let Te=0,ke=xe.length;Te<ke;Te++){const Ue=xe[Te];yp(J,H,b,Ue)}he&&Ge.render(b);for(let Te=0,ke=xe.length;Te<ke;Te++){const Ue=xe[Te];xp(y,b,Ue,Ue.viewport)}}else H.length>0&&yp(J,H,b,B),he&&Ge.render(b),xp(y,b,B);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,B),ut.resetDefaultState(),N=-1,K=null,v.pop(),v.length>0?(g=v[v.length-1],Q===!0&&ve.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Uc(b,B,Y,J){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){J&&U.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);const Te=de.update(b),ke=b.material;ke.visible&&y.push(b,Te,ke,Y,U.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const Te=de.update(b),ke=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),U.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),U.copy(Te.boundingSphere.center)),U.applyMatrix4(b.matrixWorld).applyMatrix4(G)),Array.isArray(ke)){const Ue=Te.groups;for(let He=0,Ve=Ue.length;He<Ve;He++){const Fe=Ue[He],st=ke[Fe.materialIndex];st&&st.visible&&y.push(b,Te,st,Y,U.z,Fe)}}else ke.visible&&y.push(b,Te,ke,Y,U.z,null)}}const xe=b.children;for(let Te=0,ke=xe.length;Te<ke;Te++)Uc(xe[Te],B,Y,J)}function xp(b,B,Y,J){const H=b.opaque,xe=b.transmissive,Te=b.transparent;g.setupLightsView(Y),Q===!0&&ve.setGlobalState(_.clippingPlanes,Y),J&&V.viewport(S.copy(J)),H.length>0&&Ta(H,B,Y),xe.length>0&&Ta(xe,B,Y),Te.length>0&&Ta(Te,B,Y),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function yp(b,B,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new Jr(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Ma:Ii,minFilter:Br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const xe=g.state.transmissionRenderTarget[J.id],Te=J.viewport||S;xe.setSize(Te.z,Te.w);const ke=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(F),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),he&&Ge.render(Y);const Ue=_.toneMapping;_.toneMapping=ur;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),Q===!0&&ve.setGlobalState(_.clippingPlanes,J),Ta(b,Y,J),C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,st=B.length;Fe<st;Fe++){const ht=B[Fe],Et=ht.object,wn=ht.geometry,nt=ht.material,Oe=ht.group;if(nt.side===Bn&&Et.layers.test(J.layers)){const Vt=nt.side;nt.side=yn,nt.needsUpdate=!0,Sp(Et,Y,J,wn,nt,Oe),nt.side=Vt,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe))}_.setRenderTarget(ke),_.setClearColor(F,X),He!==void 0&&(J.viewport=He),_.toneMapping=Ue}function Ta(b,B,Y){const J=B.isScene===!0?B.overrideMaterial:null;for(let H=0,xe=b.length;H<xe;H++){const Te=b[H],ke=Te.object,Ue=Te.geometry,He=J===null?Te.material:J,Ve=Te.group;ke.layers.test(Y.layers)&&Sp(ke,B,Y,Ue,He,Ve)}}function Sp(b,B,Y,J,H,xe){b.onBeforeRender(_,B,Y,J,H,xe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(_,B,Y,J,b,xe),H.transparent===!0&&H.side===Bn&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,_.renderBufferDirect(Y,B,J,H,b,xe),H.side=mr,H.needsUpdate=!0,_.renderBufferDirect(Y,B,J,H,b,xe),H.side=Bn):_.renderBufferDirect(Y,B,J,H,b,xe),b.onAfterRender(_,B,Y,J,H,xe)}function ba(b,B,Y){B.isScene!==!0&&(B=ae);const J=ce.get(b),H=g.state.lights,xe=g.state.shadowsArray,Te=H.state.version,ke=Ie.getParameters(b,H.state,xe,B,Y),Ue=Ie.getProgramCacheKey(ke);let He=J.programs;J.environment=b.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(b.isMeshStandardMaterial?W:w).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,He===void 0&&(b.addEventListener("dispose",Ze),He=new Map,J.programs=He);let Ve=He.get(Ue);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===Te)return wp(b,ke),Ve}else ke.uniforms=Ie.getUniforms(b),b.onBeforeCompile(ke,_),Ve=Ie.acquireProgram(ke,Ue),He.set(Ue,Ve),J.uniforms=ke.uniforms;const Fe=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=ve.uniform),wp(b,ke),J.needsLights=Tx(b),J.lightsStateVersion=Te,J.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function Mp(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=kl.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function wp(b,B){const Y=ce.get(b);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function wx(b,B,Y,J,H){B.isScene!==!0&&(B=ae),C.resetTextureUnits();const xe=B.fog,Te=J.isMeshStandardMaterial?B.environment:null,ke=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:yr,Ue=(J.isMeshStandardMaterial?W:w).get(J.envMap||Te),He=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Fe=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,ht=!!Y.morphAttributes.color;let Et=ur;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Et=_.toneMapping);const wn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=wn!==void 0?wn.length:0,Oe=ce.get(J),Vt=g.state.lights;if(Q===!0&&(fe===!0||b!==K)){const In=b===K&&J.id===N;ve.setState(J,b,In)}let it=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Vt.state.version||Oe.outputColorSpace!==ke||H.isBatchedMesh&&Oe.batching===!1||!H.isBatchedMesh&&Oe.batching===!0||H.isBatchedMesh&&Oe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Oe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Oe.instancing===!1||!H.isInstancedMesh&&Oe.instancing===!0||H.isSkinnedMesh&&Oe.skinning===!1||!H.isSkinnedMesh&&Oe.skinning===!0||H.isInstancedMesh&&Oe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Oe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Oe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Oe.instancingMorph===!1&&H.morphTexture!==null||Oe.envMap!==Ue||J.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ve.numPlanes||Oe.numIntersection!==ve.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==Ve||Oe.morphTargets!==Fe||Oe.morphNormals!==st||Oe.morphColors!==ht||Oe.toneMapping!==Et||Oe.morphTargetsCount!==nt)&&(it=!0):(it=!0,Oe.__version=J.version);let $n=Oe.currentProgram;it===!0&&($n=ba(J,B,H));let ns=!1,En=!1,Fc=!1;const Ct=$n.getUniforms(),Oi=Oe.uniforms;if(V.useProgram($n.program)&&(ns=!0,En=!0,Fc=!0),J.id!==N&&(N=J.id,En=!0),ns||K!==b){D.reverseDepthBuffer?(_e.copy(b.projectionMatrix),EM(_e),TM(_e),Ct.setValue(R,"projectionMatrix",_e)):Ct.setValue(R,"projectionMatrix",b.projectionMatrix),Ct.setValue(R,"viewMatrix",b.matrixWorldInverse);const In=Ct.map.cameraPosition;In!==void 0&&In.setValue(R,Z.setFromMatrixPosition(b.matrixWorld)),D.logarithmicDepthBuffer&&Ct.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,En=!0,Fc=!0)}if(H.isSkinnedMesh){Ct.setOptional(R,H,"bindMatrix"),Ct.setOptional(R,H,"bindMatrixInverse");const In=H.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Ct.setValue(R,"boneTexture",In.boneTexture,C))}H.isBatchedMesh&&(Ct.setOptional(R,H,"batchingTexture"),Ct.setValue(R,"batchingTexture",H._matricesTexture,C),Ct.setOptional(R,H,"batchingIdTexture"),Ct.setValue(R,"batchingIdTexture",H._indirectTexture,C),Ct.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&Ct.setValue(R,"batchingColorTexture",H._colorsTexture,C));const Oc=Y.morphAttributes;if((Oc.position!==void 0||Oc.normal!==void 0||Oc.color!==void 0)&&We.update(H,Y,$n),(En||Oe.receiveShadow!==H.receiveShadow)&&(Oe.receiveShadow=H.receiveShadow,Ct.setValue(R,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Oi.envMap.value=Ue,Oi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(Oi.envMapIntensity.value=B.environmentIntensity),En&&(Ct.setValue(R,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&Ex(Oi,Fc),xe&&J.fog===!0&&Me.refreshFogUniforms(Oi,xe),Me.refreshMaterialUniforms(Oi,J,le,$,g.state.transmissionRenderTarget[b.id]),kl.upload(R,Mp(Oe),Oi,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(kl.upload(R,Mp(Oe),Oi,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(R,"center",H.center),Ct.setValue(R,"modelViewMatrix",H.modelViewMatrix),Ct.setValue(R,"normalMatrix",H.normalMatrix),Ct.setValue(R,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const In=J.uniformsGroups;for(let zc=0,bx=In.length;zc<bx;zc++){const Ep=In[zc];O.update(Ep,$n),O.bind(Ep,$n)}}return $n}function Ex(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Tx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,B,Y){ce.get(b.texture).__webglTexture=B,ce.get(b.depthTexture).__webglTexture=Y;const J=ce.get(b);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const Y=ce.get(b);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,Y=0){T=b,P=B,A=Y;let J=!0,H=null,xe=!1,Te=!1;if(b){const Ue=ce.get(b);if(Ue.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Ue.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Ue.__hasExternalTextures)C.rebindTextures(b,ce.get(b.texture).__webglTexture,ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&ce.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ve=ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?H=Ve[B][Y]:H=Ve[B],xe=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?H=ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[Y]:H=Ve,S.copy(b.viewport),E.copy(b.scissor),j=b.scissorTest}else S.copy(te).multiplyScalar(le).floor(),E.copy(oe).multiplyScalar(le).floor(),j=be;if(V.bindFramebuffer(R.FRAMEBUFFER,H)&&J&&V.drawBuffers(b,H),V.viewport(S),V.scissor(E),V.setScissorTest(j),xe){const Ue=ce.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,Y)}else if(Te){const Ue=ce.get(b.texture),He=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,He)}N=-1},this.readRenderTargetPixels=function(b,B,Y,J,H,xe,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(ke=ke[Te]),ke){V.bindFramebuffer(R.FRAMEBUFFER,ke);try{const Ue=b.texture,He=Ue.format,Ve=Ue.type;if(!D.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-J&&Y>=0&&Y<=b.height-H&&R.readPixels(B,Y,J,H,je.convert(He),je.convert(Ve),xe)}finally{const Ue=T!==null?ce.get(T).__webglFramebuffer:null;V.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,B,Y,J,H,xe,Te){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(ke=ke[Te]),ke){const Ue=b.texture,He=Ue.format,Ve=Ue.type;if(!D.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-J&&Y>=0&&Y<=b.height-H){V.bindFramebuffer(R.FRAMEBUFFER,ke);const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,xe.byteLength,R.STREAM_READ),R.readPixels(B,Y,J,H,je.convert(He),je.convert(Ve),0);const st=T!==null?ce.get(T).__webglFramebuffer:null;V.bindFramebuffer(R.FRAMEBUFFER,st);const ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await wM(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,xe),R.deleteBuffer(Fe),R.deleteSync(ht),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,Y=0){b.isTexture!==!0&&(Ll("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const J=Math.pow(2,-Y),H=Math.floor(b.image.width*J),xe=Math.floor(b.image.height*J),Te=B!==null?B.x:0,ke=B!==null?B.y:0;C.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,Y,0,0,Te,ke,H,xe),V.unbindTexture()},this.copyTextureToTexture=function(b,B,Y=null,J=null,H=0){b.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,b=arguments[1],B=arguments[2],H=arguments[3]||0,Y=null);let xe,Te,ke,Ue,He,Ve;Y!==null?(xe=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,ke=Y.min.x,Ue=Y.min.y):(xe=b.image.width,Te=b.image.height,ke=0,Ue=0),J!==null?(He=J.x,Ve=J.y):(He=0,Ve=0);const Fe=je.convert(B.format),st=je.convert(B.type);C.setTexture2D(B,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const ht=R.getParameter(R.UNPACK_ROW_LENGTH),Et=R.getParameter(R.UNPACK_IMAGE_HEIGHT),wn=R.getParameter(R.UNPACK_SKIP_PIXELS),nt=R.getParameter(R.UNPACK_SKIP_ROWS),Oe=R.getParameter(R.UNPACK_SKIP_IMAGES),Vt=b.isCompressedTexture?b.mipmaps[H]:b.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Vt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Vt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ke),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,H,He,Ve,xe,Te,Fe,st,Vt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,H,He,Ve,Vt.width,Vt.height,Fe,Vt.data):R.texSubImage2D(R.TEXTURE_2D,H,He,Ve,xe,Te,Fe,st,Vt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wn),R.pixelStorei(R.UNPACK_SKIP_ROWS,nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Oe),H===0&&B.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(b,B,Y=null,J=null,H=0){b.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,J=arguments[1]||null,b=arguments[2],B=arguments[3],H=arguments[4]||0);let xe,Te,ke,Ue,He,Ve,Fe,st,ht;const Et=b.isCompressedTexture?b.mipmaps[H]:b.image;Y!==null?(xe=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,ke=Y.max.z-Y.min.z,Ue=Y.min.x,He=Y.min.y,Ve=Y.min.z):(xe=Et.width,Te=Et.height,ke=Et.depth,Ue=0,He=0,Ve=0),J!==null?(Fe=J.x,st=J.y,ht=J.z):(Fe=0,st=0,ht=0);const wn=je.convert(B.format),nt=je.convert(B.type);let Oe;if(B.isData3DTexture)C.setTexture3D(B,0),Oe=R.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)C.setTexture2DArray(B,0),Oe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const Vt=R.getParameter(R.UNPACK_ROW_LENGTH),it=R.getParameter(R.UNPACK_IMAGE_HEIGHT),$n=R.getParameter(R.UNPACK_SKIP_PIXELS),ns=R.getParameter(R.UNPACK_SKIP_ROWS),En=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,He),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ve),b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Oe,H,Fe,st,ht,xe,Te,ke,wn,nt,Et.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Oe,H,Fe,st,ht,xe,Te,ke,wn,Et.data):R.texSubImage3D(Oe,H,Fe,st,ht,xe,Te,ke,wn,nt,Et),R.pixelStorei(R.UNPACK_ROW_LENGTH,Vt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$n),R.pixelStorei(R.UNPACK_SKIP_ROWS,ns),R.pixelStorei(R.UNPACK_SKIP_IMAGES,En),H===0&&B.generateMipmaps&&R.generateMipmap(Oe),V.unbindTexture()},this.initRenderTarget=function(b){ce.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),V.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,V.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kf?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===Lc?"display-p3":"srgb"}}class ip extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class IA extends rn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=nn,d=nn,p,u){super(null,o,a,l,c,d,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class UA extends rn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],u=i[r+1]-d,h=(o-d)/u;return(r+h)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new z,r=[],s=[],o=[],a=new z,l=new _t;for(let h=0;h<=e;h++){const m=h/e;r[h]=this.getTangentAt(m,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),p=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(jt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(n===!0){let h=Math.acos(jt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rp extends gi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ye){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,h=c-this.aY;l=u*d-h*p+this.aX,c=u*p+h*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class FA extends rp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,p){let u=(o-s)/c-(a-s)/(c+d)+(a-o)/d,h=(a-o)/d-(l-o)/(d+p)+(l-a)/p;u*=d,h*=d,r(o,a,u,h)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const dl=new z,Wu=new sp,ju=new sp,$u=new sp;class OA extends gi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new z){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(dl.subVectors(r[0],r[1]).add(r[0]),c=dl);const p=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=dl),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(p),h),y=Math.pow(p.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(d),h);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Wu.initNonuniformCatmullRom(c.x,p.x,u.x,d.x,m,y,g),ju.initNonuniformCatmullRom(c.y,p.y,u.y,d.y,m,y,g),$u.initNonuniformCatmullRom(c.z,p.z,u.z,d.z,m,y,g)}else this.curveType==="catmullrom"&&(Wu.initCatmullRom(c.x,p.x,u.x,d.x,this.tension),ju.initCatmullRom(c.y,p.y,u.y,d.y,this.tension),$u.initCatmullRom(c.z,p.z,u.z,d.z,this.tension));return i.set(Wu.calc(l),ju.calc(l),$u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function zA(t,e){const n=1-t;return n*n*e}function BA(t,e){return 2*(1-t)*t*e}function HA(t,e){return t*t*e}function jo(t,e,n,i){return zA(t,e)+BA(t,n)+HA(t,i)}function VA(t,e){const n=1-t;return n*n*n*e}function GA(t,e){const n=1-t;return 3*n*n*t*e}function WA(t,e){return 3*(1-t)*t*t*e}function jA(t,e){return t*t*t*e}function $o(t,e,n,i,r){return VA(t,e)+GA(t,n)+WA(t,i)+jA(t,r)}class ax extends gi{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($o(e,r.x,s.x,o.x,a.x),$o(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $A extends gi{constructor(e=new z,n=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($o(e,r.x,s.x,o.x,a.x),$o(e,r.y,s.y,o.y,a.y),$o(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lx extends gi{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XA extends gi{constructor(e=new z,n=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new z){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cx extends gi{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qA extends gi{constructor(e=new z,n=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y),jo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ux extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(kg(a,l.x,c.x,d.x,p.x),kg(a,l.y,c.y,d.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var Uh=Object.freeze({__proto__:null,ArcCurve:FA,CatmullRomCurve3:OA,CubicBezierCurve:ax,CubicBezierCurve3:$A,EllipseCurve:rp,LineCurve:lx,LineCurve3:XA,QuadraticBezierCurve:cx,QuadraticBezierCurve3:qA,SplineCurve:ux});class YA extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Uh[r.type]().fromJSON(r))}return this}}class Fh extends YA{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new lx(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new cx(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new ax(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new ux(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new rp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class op extends Mn{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=jt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],d=1/n,p=new z,u=new ye,h=new z,m=new z,y=new z;let g=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,h.x=f*1,h.y=-g,h.z=f*0,y.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,h.x=f*1,h.y=-g,h.z=f*0,m.copy(h),h.x+=y.x,h.y+=y.y,h.z+=y.z,h.normalize(),l.push(h.x,h.y,h.z),y.copy(m)}for(let v=0;v<=n;v++){const _=i+v*d*r,M=Math.sin(_),P=Math.cos(_);for(let A=0;A<=e.length-1;A++){p.x=e[A].x*M,p.y=e[A].y,p.z=e[A].x*P,o.push(p.x,p.y,p.z),u.x=v/n,u.y=A/(e.length-1),a.push(u.x,u.y);const T=l[3*A+0]*M,N=l[3*A+1],K=l[3*A+0]*P;c.push(T,N,K)}}for(let v=0;v<n;v++)for(let _=0;_<e.length-1;_++){const M=_+v*e.length,P=M,A=M+e.length,T=M+e.length+1,N=M+1;s.push(P,A,N),s.push(T,N,A)}this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.points,e.segments,e.phiStart,e.phiLength)}}class Gs extends op{constructor(e=1,n=1,i=4,r=8){const s=new Fh;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Gs(e.radius,e.length,e.capSegments,e.radialSegments)}}class ap extends Mn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new z,d=new ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=n;p++,u+=3){const h=i+p/n*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class en extends Mn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],u=[],h=[];let m=0;const y=[],g=i/2;let f=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function v(){const M=new z,P=new z;let A=0;const T=(n-e)/i;for(let N=0;N<=s;N++){const K=[],S=N/s,E=S*(n-e)+e;for(let j=0;j<=r;j++){const F=j/r,X=F*l+a,ie=Math.sin(X),$=Math.cos(X);P.x=E*ie,P.y=-S*i+g,P.z=E*$,p.push(P.x,P.y,P.z),M.set(ie,T,$).normalize(),u.push(M.x,M.y,M.z),h.push(F,1-S),K.push(m++)}y.push(K)}for(let N=0;N<r;N++)for(let K=0;K<s;K++){const S=y[K][N],E=y[K+1][N],j=y[K+1][N+1],F=y[K][N+1];e>0&&(d.push(S,E,F),A+=3),n>0&&(d.push(E,j,F),A+=3)}c.addGroup(f,A,0),f+=A}function _(M){const P=m,A=new ye,T=new z;let N=0;const K=M===!0?e:n,S=M===!0?1:-1;for(let j=1;j<=r;j++)p.push(0,g*S,0),u.push(0,S,0),h.push(.5,.5),m++;const E=m;for(let j=0;j<=r;j++){const X=j/r*l+a,ie=Math.cos(X),$=Math.sin(X);T.x=K*$,T.y=g*S,T.z=K*ie,p.push(T.x,T.y,T.z),u.push(0,S,0),A.x=ie*.5+.5,A.y=$*.5*S+.5,h.push(A.x,A.y),m++}for(let j=0;j<r;j++){const F=P+j,X=E+j;M===!0?d.push(X,X+1,F):d.push(X+1,X,F),N+=3}c.addGroup(f,N,M===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends en{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ha(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dc extends Fh{constructor(e){super(e),this.uuid=uo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Fh().fromJSON(r))}return this}}const KA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=dx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,p,u,h;if(i&&(s=tC(t,e,s,n)),t.length>80*n){a=c=t[0],l=d=t[1];for(let m=n;m<r;m+=n)p=t[m],u=t[m+1],p<a&&(a=p),u<l&&(l=u),p>c&&(c=p),u>d&&(d=u);h=Math.max(c-a,d-l),h=h!==0?32767/h:0}return fa(s,o,n,a,l,h,0),o}};function dx(t,e,n,i,r){let s,o;if(r===hC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Dg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Dg(s,t[s],t[s+1],o);return o&&Ic(o,o.next)&&(ma(o),o=o.next),o}function Zr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ic(n,n.next)||St(n.prev,n,n.next)===0)){if(ma(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function fa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&oC(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?ZA(t,i,r,s):JA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ma(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=QA(Zr(t),e,n),fa(t,e,n,i,r,s,2)):o===2&&eC(t,e,n,i,r,s):fa(Zr(t),e,n,i,r,s,1);break}}}function JA(t){const e=t.prev,n=t,i=t.next;if(St(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,d=r<s?r<o?r:o:s<o?s:o,p=a<l?a<c?a:c:l<c?l:c,u=r>s?r>o?r:o:s>o?s:o,h=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=u&&m.y>=p&&m.y<=h&&ks(r,a,s,l,o,c,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ZA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(St(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,p=s.y,u=o.y,h=a<l?a<c?a:c:l<c?l:c,m=d<p?d<u?d:u:p<u?p:u,y=a>l?a>c?a:c:l>c?l:c,g=d>p?d>u?d:u:p>u?p:u,f=Oh(h,m,e,n,i),v=Oh(y,g,e,n,i);let _=t.prevZ,M=t.nextZ;for(;_&&_.z>=f&&M&&M.z<=v;){if(_.x>=h&&_.x<=y&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&ks(a,d,l,p,c,u,_.x,_.y)&&St(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=h&&M.x<=y&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&ks(a,d,l,p,c,u,M.x,M.y)&&St(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=f;){if(_.x>=h&&_.x<=y&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&ks(a,d,l,p,c,u,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=h&&M.x<=y&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&ks(a,d,l,p,c,u,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function QA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Ic(r,s)&&hx(r,i,i.next,s)&&pa(r,s)&&pa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ma(i),ma(i.next),i=t=s),i=i.next}while(i!==t);return Zr(i)}function eC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cC(o,a)){let l=fx(o,a);o=Zr(o,o.next),l=Zr(l,l.next),fa(o,e,n,i,r,s,0),fa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function tC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=dx(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(lC(c));for(r.sort(nC),s=0;s<r.length;s++)n=iC(r[s],n);return n}function nC(t,e){return t.x-e.x}function iC(t,e){const n=rC(t,e);if(!n)return e;const i=fx(n,t);return Zr(i,i.next),Zr(n,n.next)}function rC(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const u=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=s&&u>i&&(i=u,r=n.x<n.next.x?n:n.next,u===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let d=1/0,p;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&ks(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(p=Math.abs(o-n.y)/(s-n.x),pa(n,t)&&(p<d||p===d&&(n.x>r.x||n.x===r.x&&sC(r,n)))&&(r=n,d=p)),n=n.next;while(n!==a);return r}function sC(t,e){return St(t.prev,t,e.prev)<0&&St(e.next,t,t.next)<0}function oC(t,e,n,i){let r=t;do r.z===0&&(r.z=Oh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,aC(r)}function aC(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Oh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function lC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ks(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function cC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!uC(t,e)&&(pa(t,e)&&pa(e,t)&&dC(t,e)&&(St(t.prev,t,e.prev)||St(t,e.prev,e))||Ic(t,e)&&St(t.prev,t,t.next)>0&&St(e.prev,e,e.next)>0)}function St(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ic(t,e){return t.x===e.x&&t.y===e.y}function hx(t,e,n,i){const r=fl(St(t,e,n)),s=fl(St(t,e,i)),o=fl(St(n,i,t)),a=fl(St(n,i,e));return!!(r!==s&&o!==a||r===0&&hl(t,n,e)||s===0&&hl(t,i,e)||o===0&&hl(n,t,i)||a===0&&hl(n,e,i))}function hl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function fl(t){return t>0?1:t<0?-1:0}function uC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&hx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function pa(t,e){return St(t.prev,t,t.next)<0?St(t,e,t.next)>=0&&St(t,t.prev,e)>=0:St(t,e,t.prev)<0||St(t,t.next,e)<0}function dC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function fx(t,e){const n=new zh(t.i,t.x,t.y),i=new zh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Dg(t,e,n,i){const r=new zh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ma(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function zh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class dr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return dr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Ig(e),Ug(i,e);let o=e.length;n.forEach(Ig);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Ug(i,n[l]);const a=KA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ig(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ug(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class lp extends Mn{constructor(e=new Dc([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,d=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1;let u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,h=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:h-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:fC;let _,M=!1,P,A,T,N;f&&(_=f.getSpacedPoints(d),M=!0,u=!1,P=f.computeFrenetFrames(d,!1),A=new z,T=new z,N=new z),u||(g=0,h=0,m=0,y=0);const K=a.extractPoints(c);let S=K.shape;const E=K.holes;if(!dr.isClockWise(S)){S=S.reverse();for(let q=0,R=E.length;q<R;q++){const I=E[q];dr.isClockWise(I)&&(E[q]=I.reverse())}}const F=dr.triangulateShape(S,E),X=S;for(let q=0,R=E.length;q<R;q++){const I=E[q];S=S.concat(I)}function ie(q,R,I){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(R,I)}const $=S.length,le=F.length;function k(q,R,I){let L,D,V;const ee=q.x-R.x,ce=q.y-R.y,C=I.x-q.x,w=I.y-q.y,W=ee*ee+ce*ce,ue=ee*w-ce*C;if(Math.abs(ue)>Number.EPSILON){const pe=Math.sqrt(W),de=Math.sqrt(C*C+w*w),Ie=R.x-ce/pe,Me=R.y+ee/pe,Re=I.x-w/de,Ke=I.y+C/de,ve=((Re-Ie)*w-(Ke-Me)*C)/(ee*w-ce*C);L=Ie+ee*ve-q.x,D=Me+ce*ve-q.y;const Pe=L*L+D*D;if(Pe<=2)return new ye(L,D);V=Math.sqrt(Pe/2)}else{let pe=!1;ee>Number.EPSILON?C>Number.EPSILON&&(pe=!0):ee<-Number.EPSILON?C<-Number.EPSILON&&(pe=!0):Math.sign(ce)===Math.sign(w)&&(pe=!0),pe?(L=-ce,D=ee,V=Math.sqrt(W)):(L=ee,D=ce,V=Math.sqrt(W/2))}return new ye(L/V,D/V)}const se=[];for(let q=0,R=X.length,I=R-1,L=q+1;q<R;q++,I++,L++)I===R&&(I=0),L===R&&(L=0),se[q]=k(X[q],X[I],X[L]);const te=[];let oe,be=se.concat();for(let q=0,R=E.length;q<R;q++){const I=E[q];oe=[];for(let L=0,D=I.length,V=D-1,ee=L+1;L<D;L++,V++,ee++)V===D&&(V=0),ee===D&&(ee=0),oe[L]=k(I[L],I[V],I[ee]);te.push(oe),be=be.concat(oe)}for(let q=0;q<g;q++){const R=q/g,I=h*Math.cos(R*Math.PI/2),L=m*Math.sin(R*Math.PI/2)+y;for(let D=0,V=X.length;D<V;D++){const ee=ie(X[D],se[D],L);G(ee.x,ee.y,-I)}for(let D=0,V=E.length;D<V;D++){const ee=E[D];oe=te[D];for(let ce=0,C=ee.length;ce<C;ce++){const w=ie(ee[ce],oe[ce],L);G(w.x,w.y,-I)}}}const Be=m+y;for(let q=0;q<$;q++){const R=u?ie(S[q],be[q],Be):S[q];M?(T.copy(P.normals[0]).multiplyScalar(R.x),A.copy(P.binormals[0]).multiplyScalar(R.y),N.copy(_[0]).add(T).add(A),G(N.x,N.y,N.z)):G(R.x,R.y,0)}for(let q=1;q<=d;q++)for(let R=0;R<$;R++){const I=u?ie(S[R],be[R],Be):S[R];M?(T.copy(P.normals[q]).multiplyScalar(I.x),A.copy(P.binormals[q]).multiplyScalar(I.y),N.copy(_[q]).add(T).add(A),G(N.x,N.y,N.z)):G(I.x,I.y,p/d*q)}for(let q=g-1;q>=0;q--){const R=q/g,I=h*Math.cos(R*Math.PI/2),L=m*Math.sin(R*Math.PI/2)+y;for(let D=0,V=X.length;D<V;D++){const ee=ie(X[D],se[D],L);G(ee.x,ee.y,p+I)}for(let D=0,V=E.length;D<V;D++){const ee=E[D];oe=te[D];for(let ce=0,C=ee.length;ce<C;ce++){const w=ie(ee[ce],oe[ce],L);M?G(w.x,w.y+_[d-1].y,_[d-1].x+I):G(w.x,w.y,p+I)}}}Q(),fe();function Q(){const q=r.length/3;if(u){let R=0,I=$*R;for(let L=0;L<le;L++){const D=F[L];Z(D[2]+I,D[1]+I,D[0]+I)}R=d+g*2,I=$*R;for(let L=0;L<le;L++){const D=F[L];Z(D[0]+I,D[1]+I,D[2]+I)}}else{for(let R=0;R<le;R++){const I=F[R];Z(I[2],I[1],I[0])}for(let R=0;R<le;R++){const I=F[R];Z(I[0]+$*d,I[1]+$*d,I[2]+$*d)}}i.addGroup(q,r.length/3-q,0)}function fe(){const q=r.length/3;let R=0;_e(X,R),R+=X.length;for(let I=0,L=E.length;I<L;I++){const D=E[I];_e(D,R),R+=D.length}i.addGroup(q,r.length/3-q,1)}function _e(q,R){let I=q.length;for(;--I>=0;){const L=I;let D=I-1;D<0&&(D=q.length-1);for(let V=0,ee=d+g*2;V<ee;V++){const ce=$*V,C=$*(V+1),w=R+L+ce,W=R+D+ce,ue=R+D+C,pe=R+L+C;U(w,W,ue,pe)}}}function G(q,R,I){l.push(q),l.push(R),l.push(I)}function Z(q,R,I){ae(q),ae(R),ae(I);const L=r.length/3,D=v.generateTopUV(i,r,L-3,L-2,L-1);he(D[0]),he(D[1]),he(D[2])}function U(q,R,I,L){ae(q),ae(R),ae(L),ae(R),ae(I),ae(L);const D=r.length/3,V=v.generateSideWallUV(i,r,D-6,D-3,D-2,D-1);he(V[0]),he(V[1]),he(V[3]),he(V[1]),he(V[2]),he(V[3])}function ae(q){r.push(l[q*3+0]),r.push(l[q*3+1]),r.push(l[q*3+2])}function he(q){s.push(q.x),s.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return pC(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Uh[r.type]().fromJSON(r)),new lp(i,e.options)}}const fC={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],d=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(c,d)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],d=e[i*3+1],p=e[i*3+2],u=e[r*3],h=e[r*3+1],m=e[r*3+2],y=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-p),new ye(u,1-m),new ye(y,1-f)]:[new ye(a,1-l),new ye(d,1-p),new ye(h,1-m),new ye(g,1-f)]}};function pC(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class cp extends Mn{constructor(e=new Dc([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(s,3)),this.setAttribute("uv",new ct(o,2));function c(d){const p=r.length/3,u=d.extractPoints(n);let h=u.shape;const m=u.holes;dr.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,f=m.length;g<f;g++){const v=m[g];dr.isClockWise(v)===!0&&(m[g]=v.reverse())}const y=dr.triangulateShape(h,m);for(let g=0,f=m.length;g<f;g++){const v=m[g];h=h.concat(v)}for(let g=0,f=h.length;g<f;g++){const v=h[g];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,f=y.length;g<f;g++){const v=y[g],_=v[0]+p,M=v[1]+p,P=v[2]+p;i.push(_,M,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return mC(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new cp(i,e.curveSegments)}}function mC(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class lt extends Mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],p=new z,u=new z,h=[],m=[],y=[],g=[];for(let f=0;f<=i;f++){const v=[],_=f/i;let M=0;f===0&&o===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const A=P/n;p.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),p.y=e*Math.cos(o+_*a),p.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),m.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),g.push(A+M,1-_),v.push(c++)}d.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const _=d[f][v+1],M=d[f][v],P=d[f+1][v],A=d[f+1][v+1];(f!==0||o>0)&&h.push(_,M,A),(f!==i-1||l<Math.PI)&&h.push(M,P,A)}this.setIndex(h),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class up extends Mn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new z,p=new z,u=new z;for(let h=0;h<=i;h++)for(let m=0;m<=r;m++){const y=m/r*s,g=h/i*Math.PI*2;p.x=(e+n*Math.cos(g))*Math.cos(y),p.y=(e+n*Math.cos(g))*Math.sin(y),p.z=n*Math.sin(g),a.push(p.x,p.y,p.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),u.subVectors(p,d).normalize(),l.push(u.x,u.y,u.z),c.push(m/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let m=1;m<=r;m++){const y=(r+1)*h+m-1,g=(r+1)*(h-1)+m-1,f=(r+1)*(h-1)+m,v=(r+1)*h+m;o.push(y,g,v),o.push(g,f,v)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gC extends fo{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ro extends fo{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G_,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class px extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class dp extends px{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Xu=new _t,Fg=new z,Og=new z;class vC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fg),Og.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Og),n.updateMatrixWorld(),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _C extends vC{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends px{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new _C}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zg=new _t;class xC{constructor(e,n,i=0,r=1/0){this.ray=new q_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return zg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zg),this}intersectObject(e,n=!0,i=[]){return Bh(e,this,i,n),i.sort(Bg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Bh(e[r],this,i,n);return i.sort(Bg),i}}function Bg(t,e){return t.distance-e.distance}function Bh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Bh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);let Cr=null;function hc(){return Cr||(Cr=new IA(new Uint8Array([110,190,255]),3,1,$f),Cr.minFilter=nn,Cr.magFilter=nn,Cr.generateMipmaps=!1,Cr.needsUpdate=!0),Cr}const Hg=new Map;function $e(t){let e=Hg.get(t);return e||(e=new ro({color:t,gradientMap:hc()}),Hg.set(t,e)),e}function ze(t,e,n=0,i=0,r=0){const s=new $t(t,e);return s.position.set(n,i,r),s}function $i(t,e,n,i){const r=new Dc,s=-t/2+i,o=-e/2+i,a=t-2*i,l=e-2*i;r.moveTo(s,o-i),r.lineTo(s+a,o-i),r.quadraticCurveTo(s+a+i,o-i,s+a+i,o),r.lineTo(s+a+i,o+l),r.quadraticCurveTo(s+a+i,o+l+i,s+a,o+l+i),r.lineTo(s,o+l+i),r.quadraticCurveTo(s-i,o+l+i,s-i,o+l),r.lineTo(s-i,o),r.quadraticCurveTo(s-i,o-i,s,o-i);const c=new lp(r,{depth:n-2*i,bevelEnabled:!0,bevelSize:i,bevelThickness:i,bevelSegments:3,curveSegments:4});return c.translate(0,0,-(n-2*i)/2),c}function Hh(t,e){const n=pr(t),i=n.colors[e%n.colors.length],r=new mn,s=[],o=(l,c=!1)=>(r.add(l),c&&s.push(l),l);let a;switch(t){case"rug":{const l=o(ze(new en(.95,.95,.03,40),$e(i),0,.016,0),!0);l.receiveShadow=!0,o(ze(new en(.66,.66,.034,40),$e(Se.paper),0,.018,0)).receiveShadow=!0,o(ze(new en(.34,.34,.038,32),$e(i),0,.02,0),!0).receiveShadow=!0;break}case"plant":{o(ze(new en(.24,.18,.38,20),$e(i),0,.19,0),!0),o(ze(new en(.22,.22,.03,20),$e(Se.paw),0,.38,0));const l=$e(Se.grass),c=$e(Se.grassDeep);[[0,.66,0,.24,l],[.15,.53,.08,.17,c],[-.14,.55,-.06,.18,l],[.04,.86,-.04,.15,c]].forEach(([d,p,u,h,m])=>o(ze(new lt(h,16,12),m,d,p,u)));break}case"beanbag":{o(ze(new lt(.44,28,20),$e(i),0,.25,0),!0).scale.set(1,.58,1),o(ze(new lt(.3,24,16),$e(i),-.03,.43,-.12),!0).scale.set(1,.55,.85);break}case"lamp":{const l=$e(Se.ink);o(ze(new en(.18,.22,.06,20),l,0,.03,0)),o(ze(new en(.03,.03,1.25,10),l,0,.66,0)),o(ze(new lt(.1,12,10),new Hr({color:"#FFF4C2"}),0,1.28,0));const c=new ro({color:i,gradientMap:hc(),side:Bn});o(ze(new en(.15,.32,.38,24,1,!0),c,0,1.38,0),!0);break}case"table":{o(ze(new en(.42,.42,.08,28),$e(i),0,.56,0),!0),o(ze(new en(.06,.06,.52,12),$e(Se.wood),0,.27,0)),o(ze(new en(.22,.26,.04,20),$e(Se.wood),0,.02,0)),o(ze(new en(.08,.07,.15,16),$e(Se.tomato),.13,.67,.05)),o(ze($i(.26,.05,.19,.02),$e(Se.sun),-.12,.625,-.06));break}case"shelf":{o(ze($i(.86,1.55,.42,.05),$e(i),0,.775,-.24),!0);const l=$e("#F1E4D2");[.35,.85,1.32].forEach(d=>o(ze(new Wt(.72,.36,.06),l,0,d,-.02)));const c=[Se.tomato,Se.cobalt,Se.sun,Se.teal,Se.grape];[.35,.85,1.32].forEach((d,p)=>{let u=-.3;for(let h=0;h<5;h++){const m=.07+(h+p)%3*.025,y=.22+(h*7+p)%3*.04;if(u+m>.32)break;o(ze($i(m,y,.22,.01),$e(c[(h+p*2)%c.length]),u+m/2,d-.17+y/2,-.12)),u+=m+.02}});break}case"fishbowl":{o(ze(new en(.2,.26,.55,20),$e(i),0,.275,0),!0),o(ze(new lt(.3,28,20),new ro({color:"#BDEBFF",transparent:!0,opacity:.45,depthWrite:!1,gradientMap:hc()}),0,.84,0));const l=new mn;l.position.y=.82;const c=ze(new lt(.07,14,10),$e("#FF9F45"),.13,0,0);c.scale.set(1.5,1,.7);const d=ze(new ha(.05,.08,8),$e("#FF9F45"),.03,0,0);d.rotation.z=Math.PI/2,l.add(c,d),r.add(l),a=p=>{l.rotation.y=p*1.2,l.position.y=.82+Math.sin(p*2)*.03};break}case"bed":{o(ze($i(.92,.28,1.9,.06),$e(Se.wood),0,.16,0)),o(ze($i(.92,.85,.12,.05),$e(i),0,.45,-.92),!0),o(ze($i(.86,.14,1.8,.05),$e(Se.white),0,.37,0)),o(ze($i(.6,.13,.32,.06),$e(Se.paper),0,.5,-.66)),o(ze($i(.9,.09,1.15,.04),$e(i),0,.47,.3),!0);break}case"kitty":{const l=$e(i),c=$e(Se.ink),d=$e("#FF8FAB");o(ze(new lt(.26,24,18),l,0,.24,-.04),!0).scale.set(.9,1,1.15),o(ze(new lt(.2,24,18),l,0,.56,.08),!0),[-1,1].forEach(m=>{const y=o(ze(new ha(.07,.14,12),l,m*.11,.74,.08),!0);y.rotation.z=-m*.25,o(ze(new lt(.03,10,8),c,m*.075,.59,.26))}),o(ze(new lt(.022,10,8),d,0,.53,.28));const u=new mn;u.position.set(0,.14,-.3);const h=ze(new Gs(.035,.36,4,8),l,0,.2,0);u.add(h),u.rotation.x=-.4,s.push(h),r.add(u),a=m=>{u.rotation.z=Math.sin(m*2.4)*.45};break}}return r.traverse(l=>{l.isMesh&&(l.castShadow=!n.floor,l.receiveShadow=!0)}),{group:r,tinted:s,animate:a}}function yC(t,e,n){const i=pr(e),r=i.colors[n%i.colors.length];for(const s of t.tinted){const o=s.material;s.material=o.side===Bn?new ro({color:r,gradientMap:hc(),side:Bn}):$e(r)}}function mx(t){const e=new mn,n=new mn;e.add(n);const i=$e(Se.caramel),r=$e(Se.caramelDeep),s=$e(Se.cream),o=$e(Se.snoutNose),a=$e(Se.paw),l=$e(Se.pupil),c=$e(Se.eyeWhite),d=ze(new lt(.34,32,24),i,0,.36,0);d.scale.set(1,1.05,.9),n.add(d);const p=ze(new lt(.24,32,24),s,0,.34,.2);p.scale.set(1,1.15,.5),n.add(p),[-1,1].forEach(P=>{const A=ze(new lt(.11,18,12),a,P*.15,.05,.06);A.scale.set(1,.55,1.3),n.add(A);const T=ze(new Gs(.07,.16,6,12),i,P*.34,.38,.03);T.rotation.z=P*.35,n.add(T),n.add(ze(new lt(.075,14,10),a,P*.38,.27,.05))});const u=new mn;u.position.set(0,.78,.02),n.add(u);const h=ze(new lt(.3,32,24),i,0,0,0);h.scale.set(1.14,.86,.95),u.add(h);const m=ze(new lt(.24,32,24),i,0,.12,-.02);m.scale.set(1,1,.95),u.add(m),[-1,1].forEach(P=>{const A=ze(new lt(.075,16,12),r,P*.17,.32,-.04);A.scale.set(1,1,.6),u.add(A);const T=ze(new lt(.042,12,10),a,P*.17,.32,0);T.scale.set(1,1,.4),u.add(T)});const y=ze(new lt(.23,32,24),s,0,-.07,.19);y.scale.set(1.18,.95,.88),u.add(y);const g=ze(new lt(.11,24,16),o,0,.02,.35);g.scale.set(1.3,.72,.5),u.add(g),[-1,1].forEach(P=>{const A=ze(new lt(.026,10,8),l,P*.075,.045,.39);A.scale.set(1.2,.9,.6),u.add(A)});const f=ze(new up(.07,.013,8,20,Math.PI),a,0,-.13,.39);f.rotation.z=Math.PI,u.add(f);const v=[];[-1,1].forEach(P=>{const A=new mn;A.position.set(P*.17,.13,.2);const T=ze(new lt(.075,18,14),c);T.scale.set(.95,1.05,.6),A.add(T),A.add(ze(new lt(.052,16,12),l,-P*.012,-.005,.03)),A.add(ze(new lt(.016,8,6),c,-P*0,.02,.07)),u.add(A),v.push(A);const N=ze(new Gs(.015,.07,4,8),a,P*.17,.24,.2);N.rotation.z=Math.PI/2+P*.2,u.add(N)});const _=new mn;[-.035,0,.035].forEach((P,A)=>{const T=ze(new ha(.03,.09+(A===1?.03:0),10),r,P,.37,0);T.rotation.z=-P*6,_.add(T)}),u.add(_);const M=new mn;return[-1,1].forEach(P=>{[0,1,2].forEach(A=>{const T=ze(new Gs(.008,.035,3,6),l,P*(.225+A*.012),.185-A*.025,.215);T.rotation.z=P*(.9+A*.35),M.add(T)})}),u.add(M),_.visible=t==="boy",M.visible=t==="girl",e.traverse(P=>{P.isMesh&&(P.castShadow=!0,P.receiveShadow=!1)}),e.scale.setScalar(1.3),e.userData.buddy=!0,{root:e,body:n,eyes:v,boyDetail:_,girlDetail:M}}const Tt=mt/2;function Vg(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"));const r=new UA(i);return r.colorSpace=ei,r.anisotropy=4,r}function qu(t,e,n,i,r){const[s,o]=Yr(e,r);t.position.set(n+s/2-Tt,0,i+o/2-Tt),t.rotation.y=-r*Math.PI/2}class SC{constructor(e,n,i){var s;this.canvas=e,this.cb=n,this.scene=new ip,this.camera=new ep(-1,1,1,-1,.1,100),this.itemRoot=new mn,this.live=new Map,this.buddyCell={x:4,z:5},this.path=[],this.nextWander=0,this.hopStart=-1,this.blinkAt=0,this.ghost=null,this.selectedId=null,this.frame=0,this.running=!0,this.downAt=null,this.ray=new xC,this.ndc=new ye,this.reduceMotion=((s=window.matchMedia)==null?void 0:s.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.onDown=o=>{this.downAt={x:o.clientX,y:o.clientY}},this.onMove=o=>{if(!this.ghost||o.pointerType==="touch")return;this.setRay(o);const a=this.ray.intersectObject(this.floor)[0];if(!a)return;const l=this.cellFor(a.point,this.ghost.type,this.ghost.rot);(!this.ghost.cell||l.x!==this.ghost.cell.x||l.z!==this.ghost.cell.z)&&this.cb.onFloorTap(l.x,l.z)},this.onUp=o=>{if(!this.downAt)return;const a=Math.hypot(o.clientX-this.downAt.x,o.clientY-this.downAt.y);if(this.downAt=null,a>12)return;if(this.setRay(o),this.ghost){const c=this.ray.intersectObject(this.floor)[0];if(c){const d=this.cellFor(c.point,this.ghost.type,this.ghost.rot);this.cb.onFloorTap(d.x,d.z)}return}if(this.ray.intersectObject(this.buddy.root,!0).length){this.cb.onBuddyTap();return}const l=this.ray.intersectObjects(this.itemRoot.children,!0);for(const c of l){let d=c.object;for(;d&&d.userData.itemId===void 0;)d=d.parent;if(d){this.cb.onSelectItem(d.userData.itemId);return}}this.cb.onSelectItem(null)},this.onVisibility=()=>{document.visibilityState==="visible"&&this.running&&(cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(this.loop))},this.loop=o=>{var u,h;if(!this.running||document.visibilityState==="hidden")return;const a=o/1e3,l=this.buddy.body,c=this.buddy.root;if(this.path.length){const m=this.path[0],y=m.x-Tt+.5,g=m.z-Tt+.5,f=y-c.position.x,v=g-c.position.z,_=Math.hypot(f,v),M=.032;_<M?(c.position.set(y,0,g),this.buddyCell=this.path.shift()):(c.position.x+=f/_*M,c.position.z+=v/_*M,this.turnTo(Math.atan2(f,v))),l.position.y=Math.abs(Math.sin(a*10))*.05,l.rotation.z=Math.sin(a*10)*.05}else if(this.turnTo(Math.PI/4),l.rotation.z*=.85,l.position.y=Math.sin(a*2.2)*.02,o>this.nextWander&&!this.ghost&&this.hopStart<0){const m=this.occupied(),y=[];for(let g=0;g<mt;g++)for(let f=0;f<mt;f++)m.has(`${g},${f}`)||y.push({x:g,z:f});y.length&&(this.path=this.findPath(y[Math.floor(Math.random()*y.length)]).slice(0,5)),this.nextWander=o+4e3+Math.random()*5e3}if(this.hopStart>=0){const m=(o-this.hopStart)/650;m>=1?(this.hopStart=-1,l.rotation.y=0,l.scale.set(1,1,1)):(l.position.y=Math.sin(m*Math.PI)*.5,l.scale.set(1+Math.sin(m*Math.PI*2)*.06,1-Math.sin(m*Math.PI*2)*.06,1),this.reduceMotion||(l.rotation.y=m*Math.PI*2))}else l.scale.set(1,1+Math.sin(a*2.2)*.012,1);const d=o-this.blinkAt,p=d>0&&d<140?.1:1;this.buddy.eyes.forEach(m=>m.scale.y=p),d>140&&(this.blinkAt=o+2200+Math.random()*2600);for(const{built:m}of this.live.values())(u=m.animate)==null||u.call(m,a);(h=this.ghost)!=null&&h.group.visible&&(this.ghost.group.position.y=.06+Math.sin(a*5)*.03),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop)},this.renderer=new np({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vf,this.camera.position.set(12,11,12),this.camera.lookAt(0,.6,0),this.scene.add(new dp(16777215,15980984,1.6));const r=new hp(16773596,1.9);r.position.set(6,10,7),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),r.shadow.bias=-.002,r.shadow.radius=4,this.scene.add(r),this.buildRoom(),this.scene.add(this.itemRoot),this.buddy=mx(i),this.scene.add(this.buddy.root),this.placeBuddyAt(this.buddyCell),this.buddy.root.rotation.y=Math.PI/4,this.highlight=new $t(new io(1,1),new Hr({color:Se.teal,transparent:!0,opacity:.45,depthWrite:!1})),this.highlight.rotation.x=-Math.PI/2,this.highlight.position.y=.05,this.highlight.visible=!1,this.scene.add(this.highlight),e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointermove",this.onMove),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e.parentElement??e),document.addEventListener("visibilitychange",this.onVisibility),this.resize(),this.frame=requestAnimationFrame(this.loop)}buildRoom(){const e=Vg(512,512,p=>{for(let u=0;u<8;u++){p.fillStyle=u%2?"#D9A06A":"#E2AD78",p.fillRect(0,u*64,512,64),p.fillStyle="rgba(122,66,32,0.22)",p.fillRect(0,u*64,512,3);const h=u*192%512;p.fillRect(h,u*64,3,64),p.fillRect((h+256)%512,u*64,3,64)}});this.floor=new $t(new io(mt,mt),new ro({map:e})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);const n=new $t(new Wt(mt+.5,.45,mt+.5),$e(Se.woodDeep));n.position.y=-.226,this.scene.add(n);const i=(p,u)=>{const h=Vg(256,256,m=>{m.fillStyle=p,m.fillRect(0,0,256,256),m.fillStyle=u;for(let y=0;y<8;y++)for(let g=0;g<8;g++)m.beginPath(),m.arc(g*32+(y%2?16:0)+8,y*32+16,4.5,0,7),m.fill()});return h.wrapS=h.wrapT=oc,h.repeat.set(3,1.3),new ro({map:h})},r=new $t(new Wt(mt+.5,3.4,.25),i(Se.cobaltSoft,"#DCE6F8"));r.position.set(0,1.7,-Tt-.125);const s=new $t(new Wt(.25,3.4,mt+.25),i(Se.sunSoft,"#FFF0C8"));s.position.set(-Tt-.125,1.7,.125),r.receiveShadow=s.receiveShadow=!0,this.scene.add(r,s);const o=$e(Se.white),a=(p,u,h,m,y)=>{const g=new $t(p,u);return g.position.set(h,m,y),this.scene.add(g),g};a(new Wt(mt+.25,.18,.08),o,.125,.09,-Tt+.04),a(new Wt(.08,.18,mt),o,-Tt+.04,.09,.125),a(new Wt(2.1,1.5,.06),o,1.2,1.95,-Tt+.02),a(new Wt(1.85,1.25,.07),new Hr({color:"#BFE6F5"}),1.2,1.95,-Tt+.03),a(new Wt(.08,1.25,.09),o,1.2,1.95,-Tt+.05),a(new Wt(1.85,.08,.09),o,1.2,1.95,-Tt+.05);const l=new Hr({color:"#FFFFFF"});[[.62,2.25,.16],[.82,2.3,.2],[1.02,2.24,.14],[1.6,1.66,.12],[1.78,1.7,.16]].forEach(([p,u,h])=>{const m=a(new lt(h,12,10),l,p,u,-Tt+.07);m.scale.z=.3}),a(new Wt(.06,1,1),$e(Se.sun),-Tt+.02,1.95,-1.3),a(new Wt(.07,.8,.8),$e(Se.white),-Tt+.03,1.95,-1.3);const c=new Dc;for(let p=0;p<10;p++){const u=-Math.PI/2+p*Math.PI/5,h=p%2?.13:.3;p===0?c.moveTo(Math.cos(u)*h,-Math.sin(u)*h):c.lineTo(Math.cos(u)*h,-Math.sin(u)*h)}const d=a(new cp(c),new Hr({color:Se.sun}),-Tt+.075,1.95,-1.3);d.rotation.y=Math.PI/2}setRoom(e){const n=new Set(e.map(i=>i.id));for(const[i,r]of this.live)n.has(i)||(this.itemRoot.remove(r.built.group),this.live.delete(i));for(const i of e){const r=this.live.get(i.id);if(r)r.item.color!==i.color&&yC(r.built,i.type,i.color),qu(r.built.group,i.type,i.x,i.z,i.rot),r.item={...i};else{const s=Hh(i.type,i.color);s.group.userData.itemId=i.id,qu(s.group,i.type,i.x,i.z,i.rot),this.itemRoot.add(s.group),this.live.set(i.id,{item:{...i},built:s})}}this.ensureBuddyFree(),this.setSelected(this.selectedId)}setSelected(e){this.selectedId=e;const n=e!=null?this.live.get(e):void 0;if(!n){this.highlight.visible=!!this.ghost&&this.highlight.visible,this.ghost||(this.highlight.visible=!1);return}this.showHighlight(n.item.type,n.item.x,n.item.z,n.item.rot,!0)}showHighlight(e,n,i,r,s){const[o,a]=Yr(e,r);this.highlight.scale.set(o,a,1),this.highlight.position.x=n+o/2-Tt,this.highlight.position.z=i+a/2-Tt,this.highlight.material.color.set(s?Se.teal:Se.sun),this.highlight.visible=!0}setBuddyKind(e){this.buddy.boyDetail.visible=e==="boy",this.buddy.girlDetail.visible=e==="girl"}startGhost(e,n,i,r){this.stopGhost();const s=Hh(e,i);if(s.group.traverse(o=>{const a=o;a.isMesh&&(a.material=a.material.clone(),a.material.transparent=!0,a.material.opacity=.6,a.castShadow=!1)}),s.group.visible=!1,this.scene.add(s.group),this.ghost={type:e,rot:n,group:s.group,cell:null},r!=null){const o=this.live.get(r);o&&(o.built.group.visible=!1)}}updateGhost(e,n,i,r){this.ghost&&(this.ghost.rot=i,this.ghost.cell={x:e,z:n},qu(this.ghost.group,this.ghost.type,e,n,i),this.ghost.group.visible=!0,this.showHighlight(this.ghost.type,e,n,i,r))}stopGhost(){this.ghost&&(this.scene.remove(this.ghost.group),this.ghost=null);for(const e of this.live.values())e.built.group.visible=!0;this.highlight.visible=!1,this.selectedId!=null&&this.setSelected(this.selectedId)}cellFor(e,n,i){const[r,s]=Yr(n,i),o=Math.max(0,Math.min(mt-r,Math.round(e.x+Tt-r/2))),a=Math.max(0,Math.min(mt-s,Math.round(e.z+Tt-s/2)));return{x:o,z:a}}hop(){this.hopStart=performance.now()}buddyScreenPos(){const e=this.buddy.root.position.clone();e.y+=1.75,e.project(this.camera);const n=this.canvas.getBoundingClientRect();return{x:(e.x+1)/2*n.width,y:(1-e.y)/2*n.height}}occupied(){const e=new Set;for(const{item:n}of this.live.values())pr(n.type).floor||$d(n.type,n.x,n.z,n.rot).forEach(i=>e.add(i));return e}placeBuddyAt(e){this.buddy.root.position.set(e.x-Tt+.5,0,e.z-Tt+.5)}ensureBuddyFree(){const e=this.occupied();if(!e.has(`${this.buddyCell.x},${this.buddyCell.z}`))return;let n=null,i=1/0;for(let r=0;r<mt;r++)for(let s=0;s<mt;s++){if(e.has(`${r},${s}`))continue;const o=Math.hypot(r-this.buddyCell.x,s-this.buddyCell.z);o<i&&(i=o,n={x:r,z:s})}n&&(this.buddyCell=n,this.path=[],this.placeBuddyAt(n))}findPath(e){const n=this.occupied(),i=o=>`${o.x},${o.z}`,r=new Map([[i(this.buddyCell),null]]),s=[this.buddyCell];for(;s.length;){const o=s.shift();if(o.x===e.x&&o.z===e.z){const a=[];let l=i(o);for(;l;){const[c,d]=l.split(",").map(Number);a.unshift({x:c,z:d}),l=r.get(l)??null}return a.slice(1)}for(const[a,l]of[[1,0],[-1,0],[0,1],[0,-1]]){const c={x:o.x+a,z:o.z+l};if(c.x<0||c.z<0||c.x>=mt||c.z>=mt)continue;const d=i(c);r.has(d)||n.has(d)||(r.set(d,i(o)),s.push(c))}}return[]}setRay(e){const n=this.canvas.getBoundingClientRect();this.ndc.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}resize(){const e=this.canvas.parentElement??this.canvas,n=e.clientWidth||1,i=e.clientHeight||1,r=n/i;this.renderer.setSize(n,i,!1);const s=Math.max(5.6,6.2/r);Object.assign(this.camera,{left:-s*r,right:s*r,top:s,bottom:-s}),this.camera.updateProjectionMatrix()}turnTo(e){let n=e-this.buddy.root.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.buddy.root.rotation.y+=n*.15}dispose(){this.running=!1,cancelAnimationFrame(this.frame),this.resizeObs.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.canvas.removeEventListener("pointerdown",this.onDown),this.canvas.removeEventListener("pointerup",this.onUp),this.canvas.removeEventListener("pointermove",this.onMove),this.renderer.dispose()}}const Gg=new Map;let Po=null;function MC(t,e=0){const n=`${t}:${e}`,i=Gg.get(n);if(i)return i;try{Po||(Po=new np({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Po.setSize(256,256,!1));const r=new ip;r.add(new dp(16777215,15980984,1.8));const s=new hp(16773596,1.8);s.position.set(3,5,4),r.add(s);const o=Hh(t,e);r.add(o.group);const a=new ho().setFromObject(o.group),l=a.getSize(new z),c=a.getCenter(new z),d=new Cn(28,1,.1,50),p=Math.max(l.x,l.y,l.z)*2.6+.3;d.position.set(c.x+p*.62,c.y+p*.45,c.z+p*.62),d.lookAt(c),Po.render(r,d);const u=Po.domElement.toDataURL("image/png");return Gg.set(n,u),u}catch{return""}}function Sn({size:t=26}){return x.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{d:"M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z",fill:"#FBC426",stroke:"#D99A0F",strokeWidth:"1.6",strokeLinejoin:"round"})})}function so({size:t=20}){return x.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{d:"M5 12.5l4.5 4.5L19 7.5",fill:"none",stroke:"currentColor",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function fp({size:t=18}){return x.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[x.jsx("rect",{x:"5",y:"10.5",width:"14",height:"10",rx:"3",fill:"currentColor"}),x.jsx("path",{d:"M8 10.5V8a4 4 0 0 1 8 0v2.5",fill:"none",stroke:"currentColor",strokeWidth:"2.6"})]})}function gx({size:t=22}){return x.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})})}function wC({on:t,size:e=24}){return x.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24","aria-hidden":"true",children:[x.jsx("path",{d:"M4 9.5h3.5L12 5.5v13l-4.5-4H4z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),t?x.jsx("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"}):x.jsx("path",{d:"M16 9.5l5 5M21 9.5l-5 5",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})]})}const Wg=["words"],EC={borrow:"borrow",times:"times",arrays:"arrays",division:"sharing"};function TC(){return x.jsx("svg",{width:"16",height:"18",viewBox:"0 0 16 18","aria-hidden":"true",children:x.jsx("path",{d:"M3 2.2v13.6a1 1 0 0 0 1.5.9l10.6-6.8a1 1 0 0 0 0-1.8L4.5 1.3A1 1 0 0 0 3 2.2z",fill:"currentColor"})})}function bC({k:t}){switch(t){case"borrow":return x.jsxs("div",{className:"pk-borrow",children:[x.jsx("div",{className:"pk-rod"}),Array.from({length:6},(e,n)=>x.jsx("i",{className:"pk-cube"},n)),x.jsx("span",{className:"pk-badge minus"})]});case"times":return x.jsxs("div",{className:"pk-times",children:[x.jsx("div",{className:"pk-dots",children:Array.from({length:12},(e,n)=>x.jsx("i",{className:n%4===3?"split":""},n))}),x.jsx("span",{className:"pk-badge",children:"×"})]});case"arrays":return x.jsx("div",{className:"pk-arr",children:Array.from({length:15},(e,n)=>x.jsx("i",{},n))});case"division":return x.jsx("div",{className:"pk-plates",children:[0,1].map(e=>x.jsxs("div",{className:"pk-plate",children:[x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{})]},e))});case"words":return x.jsxs("div",{className:"pk-story",children:[x.jsx("i",{}),x.jsx("i",{}),x.jsx("i",{})]})}}function AC({onClose:t,onPick:e}){var u,h,m;const n=ts(),i=Pc[n.lang],[r,s]=re.useState(null),o=Math.min(2,Math.max(0,((u=n.borrow)==null?void 0:u.level)??0)),a=(((h=n.borrow)==null?void 0:h.level)??0)===0&&(((m=n.borrow)==null?void 0:m.rounds)??0)===0,l={borrow:o,arrays:n.arrays??0,division:n.sharing??0},c={borrow:a,arrays:!n.arrays,division:!n.sharing},d=y=>{if(Wg.includes(y)){s({k:y,n:Date.now()}),xt("cant-afford");return}xt("sheet-close"),e(EC[y])},p=["borrow","times","arrays","division","words"];return x.jsxs("section",{className:"mb-sheet pk-sheet",role:"dialog","aria-label":i.practiceTitle,children:[x.jsxs("div",{className:"mb-sheet-head",children:[x.jsx("h2",{children:i.practiceTitle}),x.jsx("button",{className:"mb-close",onClick:t,"aria-label":i.close,children:x.jsx(gx,{})})]}),x.jsx("div",{className:"pk-grid",children:p.map(y=>{const g=Wg.includes(y),f=i.modules[y];return x.jsxs("div",{className:`pk-card${g?" soon":""}${(r==null?void 0:r.k)===y?" shake":""}`,onClick:()=>d(y),children:[c[y]&&x.jsx("span",{className:"mb-tag",children:i.newTag}),x.jsxs("div",{className:"pk-art",children:[x.jsx(bC,{k:y}),g&&x.jsx("span",{className:"mb-lock",children:x.jsx(fp,{})})]}),x.jsx("b",{children:f}),l[y]!==void 0&&x.jsx("div",{className:"pk-steps",children:i.moduleSteps[y].map((v,_)=>x.jsx("span",{className:_<l[y]?"done":_===l[y]?"on":"",children:v},v))}),x.jsx("button",{className:"pk-tab","aria-label":`${g?i.soon:i.play}: ${f}`,onClick:v=>{v.stopPropagation(),d(y)},children:g?i.soon:x.jsxs(x.Fragment,{children:[x.jsx(TC,{}),i.play]})})]},y+((r==null?void 0:r.k)===y?r.n:""))})})]})}const CC=3*24*60*60*1e3,jg=["♪","2 + 2 = 4","★","5 × 5 = 25","♥","10 − 3 = 7"],RC={rug:"place-rug",plant:"place-plant",beanbag:"place-soft",bed:"place-soft",lamp:"place-glass",fishbowl:"place-glass",table:"place-wood",shelf:"place-wood",kitty:"place-pet"};function PC({onPractice:t}){const e=ts(),n=Pc[e.lang],i=re.useRef(null),r=re.useRef(null),s=re.useRef(null),[o,a]=re.useState(null),[l,c]=re.useState(null),[d,p]=re.useState(!1),[u,h]=re.useState(!1),[m,y]=re.useState(!1),[g,f]=re.useState(null),[v,_]=re.useState(C1()),[M,P]=re.useState(0),A=re.useRef(e.stars),T=re.useCallback(U=>{pi(`buddy${e.kind}-${U}`)},[e.kind]),N=re.useCallback(U=>f({text:U,id:Date.now()}),[]),K=re.useRef(l);K.current=l;const S=re.useRef(e.room);S.current=e.room,re.useEffect(()=>{const U=i.current;if(!U)return;const ae=new SC(U,{onSelectItem:he=>{a(he),he!=null&&xt("item-select")},onBuddyTap:()=>{var he;(he=r.current)==null||he.hop(),T("giggle"),N(jg[Math.floor(Math.random()*jg.length)])},onFloorTap:(he,q)=>{const R=K.current;R&&c({...R,x:he,z:q})}},e.kind);return r.current=ae,ae.setRoom(e.room),()=>{ae.dispose(),r.current=null}},[]),re.useEffect(()=>{var U;(U=r.current)==null||U.setRoom(e.room)},[e.room]),re.useEffect(()=>{var U;(U=r.current)==null||U.setBuddyKind(e.kind)},[e.kind]),re.useEffect(()=>{var U;(U=r.current)==null||U.setSelected(o)},[o]),re.useEffect(()=>P1(_),[]);const E=l?Xd(e.room,l.type,l.x,l.z,l.rot,l.moveId):!1,j=l?`${l.type}:${l.moveId??"new"}`:"";re.useEffect(()=>{const U=r.current;if(U){if(!l){U.stopGhost();return}U.startGhost(l.type,l.rot,l.color,l.moveId)}},[j]),re.useEffect(()=>{var U;l&&((U=r.current)==null||U.updateGhost(l.x,l.z,l.rot,E))},[l,E]),re.useEffect(()=>{e.stars>A.current&&P(U=>U+1),A.current=e.stars},[e.stars]),re.useEffect(()=>{if(e.name){const U=setTimeout(()=>{T("hello"),N(`${e.name}!`)},700);return()=>clearTimeout(U)}},[]),re.useEffect(()=>{if(!g)return;let U=0;const ae=performance.now()+3200,he=()=>{const q=s.current,R=r.current;if(q&&R){const I=R.buddyScreenPos(),L=q.offsetWidth,D=q.offsetHeight,V=window.innerWidth,ee=Math.max(16,Math.min(V-16-L,I.x-L/2)),ce=Math.max(76,I.y-D-14);q.style.transform=`translate(${ee}px, ${ce}px)`,q.style.setProperty("--tail",`${Math.max(18,Math.min(L-18,I.x-ee))}px`)}performance.now()<ae?U=requestAnimationFrame(he):f(null)};return U=requestAnimationFrame(he),()=>cancelAnimationFrame(U)},[g]);const F=o!=null?e.room.find(U=>U.id===o)??null:null,X=(U,ae)=>Fn(he=>({...he,room:he.room.map(q=>q.id===U?ae(q):q)})),ie=()=>{if(!F)return;const U=(F.rot+1)%4,[ae,he]=Yr(F.type,U),R=[[F.x,F.z],[Math.min(F.x,mt-ae),Math.min(F.z,mt-he)]].find(([I,L])=>Xd(e.room,F.type,I,L,U,F.id));if(!R){N(n.noRoom);return}xt("item-rotate"),X(F.id,I=>({...I,rot:U,x:R[0],z:R[1]}))},$=()=>{F&&(xt("item-recolor"),X(F.id,U=>({...U,color:(U.color+1)%pr(U.type).colors.length})))},le=()=>{F&&(xt("item-putaway"),Fn(U=>({...U,room:U.room.filter(ae=>ae.id!==F.id)})),a(null))},k=(U,ae=0)=>{const he=r1(e.room,U)??{x:0,z:0};a(null),p(!1),c({type:U,rot:0,color:ae,x:he.x,z:he.z})},se=()=>{var ae;if(!l||!E)return;const U=l;U.moveId!=null?X(U.moveId,he=>({...he,x:U.x,z:U.z,rot:U.rot})):Fn(he=>({...he,nextId:he.nextId+1,room:[...he.room,{id:he.nextId,type:U.type,x:U.x,z:U.z,rot:U.rot,color:U.color}]})),xt(RC[U.type]),(ae=r.current)==null||ae.hop(),T("happy"),N("♥"),c(null)},te=()=>{if(!l)return;const U=(l.rot+1)%4,[ae,he]=Yr(l.type,U);c({...l,rot:U,x:Math.min(l.x,mt-ae),z:Math.min(l.z,mt-he)})},oe=U=>{const ae=pr(U);if(e.stars<ae.stars){xt("cant-afford"),N(`${n.needMore(ae.stars-e.stars)} ★`);return}xt("treasure-unlock"),Fn(he=>({...he,stars:he.stars-ae.stars,unlocked:[...he.unlocked,U],newSince:{...he.newSince,[U]:Date.now()}})),k(U)},be=()=>{a(null),p(!0),xt("sheet-open")},Be=()=>{p(!1),xt("sheet-close")},Q=()=>{a(null),h(!0),xt("sheet-open")},fe=()=>{h(!1),xt("sheet-close")},_e=()=>R1(!v),G=()=>Fn(U=>({...U,lang:U.lang==="en"?"es":"en"})),Z=!e.name||m;return x.jsxs("div",{className:"mb mb-room",lang:e.lang,children:[x.jsx("canvas",{ref:i,"aria-label":e.name??"Buddy"}),!Z&&x.jsxs("div",{className:"mb-hud",children:[x.jsx("button",{className:"mb-chip buddy",onClick:()=>y(!0),children:e.name}),x.jsxs("div",{className:"mb-hud-right",children:[x.jsxs("span",{className:`mb-chip${M?" bump":""}`,"aria-label":n.starsLabel(e.stars),children:[x.jsx(Sn,{}),e.stars]},M),x.jsx("button",{className:"mb-chip icon",onClick:_e,"aria-label":v?n.soundOn:n.soundOff,"aria-pressed":v,children:x.jsx(wC,{on:v})}),x.jsx("button",{className:"mb-chip icon",onClick:G,"aria-label":n.langSwitch,children:e.lang==="en"?"ES":"EN"})]})]}),g&&x.jsx("div",{ref:s,className:"mb-bubble",role:"status",children:g.text},g.id),!Z&&!d&&!u&&x.jsx("div",{className:"mb-bar",children:l?x.jsxs("div",{className:"mb-tools",children:[x.jsx("span",{className:`mb-hint${E?"":" warn"}`,children:E?n.placeHint:n.noRoom}),x.jsxs("div",{className:"mb-tools-row",children:[x.jsx("button",{className:"mb-btn quiet small",onClick:()=>c(null),children:n.cancel}),x.jsx("button",{className:"mb-btn quiet small",onClick:te,children:n.turn}),x.jsxs("button",{className:"mb-btn small",onClick:se,disabled:!E,children:[x.jsx(so,{}),n.done]})]})]}):F?x.jsxs("div",{className:"mb-tools-row",children:[x.jsx("button",{className:"mb-btn quiet small",onClick:ie,children:n.turn}),x.jsx("button",{className:"mb-btn quiet small",onClick:$,children:n.color}),x.jsx("button",{className:"mb-btn quiet small",onClick:()=>{a(null),c({type:F.type,rot:F.rot,color:F.color,moveId:F.id,x:F.x,z:F.z})},children:n.move}),x.jsx("button",{className:"mb-btn quiet small",onClick:le,children:n.putAway}),x.jsx("button",{className:"mb-btn small",onClick:()=>a(null),children:n.done})]}):x.jsxs(x.Fragment,{children:[x.jsx("button",{className:"mb-btn",onClick:Q,children:n.practice}),x.jsx("button",{className:"mb-btn secondary",onClick:be,children:n.treasures})]})}),d&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"mb-scrim",onClick:Be}),x.jsx(NC,{onClose:Be,onUnlock:oe,onPlace:U=>k(U)})]}),u&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"mb-scrim",onClick:fe}),x.jsx(AC,{onClose:fe,onPick:U=>{h(!1),t(U)}})]}),Z&&x.jsx(LC,{initialName:e.name??"",initialKind:e.kind,onKind:U=>{Fn(ae=>({...ae,kind:U}))},onDone:U=>{var ae;Fn(he=>({...he,name:U})),y(!1),(ae=r.current)==null||ae.hop(),T("cheer"),N(`${U}!`)}})]})}function NC({onClose:t,onUnlock:e,onPlace:n}){const i=ts(),r=Pc[i.lang],s=re.useMemo(()=>new Set(i.room.map(a=>a.type)),[i.room]),o=Date.now();return x.jsxs("section",{className:"mb-sheet",role:"dialog","aria-label":r.treasuresTitle,children:[x.jsxs("div",{className:"mb-sheet-head",children:[x.jsx("h2",{children:r.treasuresTitle}),x.jsxs("span",{className:"mb-chip",children:[x.jsx(Sn,{}),i.stars]}),x.jsx("button",{className:"mb-close",onClick:t,"aria-label":r.close,children:x.jsx(gx,{})})]}),x.jsx("div",{className:"mb-collect",children:w_.map(a=>{const l=i.unlocked.includes(a.type),c=s.has(a.type),d=i.stars>=a.stars,p=l&&o-(i.newSince[a.type]??0)<CC,u=!l&&!d,h=r.items[a.type],m=`mb-item${u?" locked":""}${p?" is-new":""}`;return x.jsxs("div",{className:m,children:[p?x.jsx("span",{className:"mb-tag",children:r.newTag}):a.rare?x.jsx("span",{className:"mb-tag rare",children:r.rareTag}):null,c&&x.jsx("span",{className:"mb-check","aria-label":r.inRoom,children:x.jsx(so,{})}),x.jsxs("div",{className:"art",children:[x.jsx("img",{src:MC(a.type),alt:""}),u&&x.jsx("span",{className:"mb-lock","aria-label":r.locked,children:x.jsx(fp,{})})]}),x.jsx("b",{children:h}),c?x.jsx("span",{className:"tab owned",children:r.inRoom}):l?x.jsx("button",{className:"tab place",onClick:()=>n(a.type),children:r.place}):d?x.jsxs("button",{className:"tab",onClick:()=>e(a.type),"aria-label":`${r.unlock} ${h}, ${r.starsLabel(a.stars)}`,children:[x.jsx(Sn,{size:18}),a.stars," · ",r.unlock]}):x.jsxs("button",{className:"tab need",onClick:()=>e(a.type),"aria-label":`${h}, ${r.starsLabel(a.stars)}`,children:[x.jsx(Sn,{size:18}),a.stars]})]},a.type)})})]})}function LC({initialName:t,initialKind:e,onKind:n,onDone:i}){const r=ts(),s=Pc[r.lang],[o,a]=re.useState(t),[l,c]=re.useState(e),d=u=>{c(u),n(u),xt("choice-tap")},p=u=>{u.preventDefault();const h=o.trim().slice(0,14);h&&i(h)};return x.jsx("div",{className:"mb-onboard",children:x.jsxs("form",{className:"mb-onboard-card",onSubmit:p,children:[x.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:-8},children:x.jsx("button",{type:"button",className:"mb-chip icon",onClick:()=>Fn(u=>({...u,lang:u.lang==="en"?"es":"en"})),"aria-label":s.langSwitch,children:r.lang==="en"?"ES":"EN"})}),x.jsx("img",{className:"logo",src:"/logo-stacked.svg",alt:"Math Buddy"}),x.jsx("h2",{children:s.pickKind}),x.jsxs("div",{className:"mb-kinds",role:"group","aria-label":s.pickKind,children:[x.jsx("button",{type:"button",className:"mb-kind","aria-pressed":l==="boy",onClick:()=>d("boy"),children:s.boy}),x.jsx("button",{type:"button",className:"mb-kind","aria-pressed":l==="girl",onClick:()=>d("girl"),children:s.girl})]}),x.jsx("label",{htmlFor:"mb-buddy-name",children:x.jsx("h2",{children:s.nameAsk(l)})}),x.jsx("input",{id:"mb-buddy-name",className:"mb-name",value:o,maxLength:14,autoComplete:"off",autoCapitalize:"words",placeholder:s.namePlaceholder,onChange:u=>a(u.target.value)}),x.jsx("button",{type:"submit",className:"mb-btn",disabled:!o.trim(),children:s.start})]})})}class pp{constructor(e,n,i=1){var o;this.canvas=e,this.facing=i,this.scene=new ip,this.camera=new Cn(24,1,.1,50),this.mood="idle",this.moodAt=0,this.blinkAt=0,this.frame=0,this.reduceMotion=((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.look=1,this.loop=a=>{const l=a/1e3,c=this.buddy.body,d=this.buddy.root,p=(a-this.moodAt)/1e3,u=this.reduceMotion?.3:1,h=this.facing*(this.look>0?.55:.12);let m=h,y=0,g=0,f=Math.sin(l*2.2)*.015,v=1,_=1+Math.sin(l*2.2)*.012,M=0,P=Math.sin(l*.9)*.03,A=0;switch(this.mood){case"happy":case"thanks":{const K=this.mood==="thanks"?.9:.7,S=Math.min(1,p/K);f=Math.sin(S*Math.PI)*.45,v=1+Math.sin(S*Math.PI*2)*.07,_=1-Math.sin(S*Math.PI*2)*.07,M=this.reduceMotion?0:S*Math.PI*2,m=this.facing*.12,p>K+.4&&(this.mood="idle");break}case"curious":{const K=Math.min(1,p/.35);y=.16*K,P=.22*K+Math.sin(l*3)*.02,p>2.6&&(this.mood="idle");break}case"think":{P=-.16+Math.sin(l*1.4)*.05,A=.08,m=h*.8,p>2.2&&(this.mood="idle");break}case"oops":{const K=Math.min(1,p/1.1);_=1-Math.sin(Math.min(1,p/.25)*Math.PI)*.06,P=Math.sin(K*Math.PI*4)*.18*(1-K)*u,A=.12,m=this.facing*.12,p>1.8&&(this.mood="idle");break}}d.rotation.y+=(m+M-d.rotation.y)*(M?1:.12),!M&&Math.abs(d.rotation.y)>Math.PI&&(d.rotation.y=m),c.position.y=f*u,c.rotation.x+=(y-c.rotation.x)*.15,c.rotation.z+=(g-c.rotation.z)*.15,c.scale.set(v,_,1),this.head&&(this.head.rotation.z+=(P-this.head.rotation.z)*.2,this.head.rotation.x+=(A-this.head.rotation.x)*.2);const T=a-this.blinkAt,N=T>0&&T<140?.1:1;this.buddy.eyes.forEach(K=>K.scale.y=N),T>140&&(this.blinkAt=a+2200+Math.random()*2600),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop)},this.renderer=new np({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vf,this.scene.add(new dp(16777215,15980984,1.6));const r=new hp(16773596,1.9);r.position.set(2,6,4),r.castShadow=!0,r.shadow.mapSize.set(512,512),Object.assign(r.shadow.camera,{left:-2,right:2,top:2,bottom:-2,near:.5,far:15}),r.shadow.radius=6,this.scene.add(r);const s=new $t(new ap(1.2,40),new gC({opacity:.18}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.buddy=mx(n),this.scene.add(this.buddy.root),this.head=this.buddy.body.children.find(a=>a.type==="Group"&&a.position.y>.7)??null,this.camera.position.set(0,1.35,6.2),this.camera.lookAt(0,.82,0),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e.parentElement??e),this.resize(),this.frame=requestAnimationFrame(this.loop)}setKind(e){this.buddy.boyDetail.visible=e==="boy",this.buddy.girlDetail.visible=e==="girl"}react(e){this.mood=e,this.moodAt=performance.now()}lookAt(e){this.look=e}headPos(){const e=new z(0,1.32,0).applyMatrix4(this.buddy.root.matrixWorld).project(this.camera),n=this.canvas.getBoundingClientRect();return{x:(e.x+1)/2*n.width,y:(1-e.y)/2*n.height}}dispose(){cancelAnimationFrame(this.frame),this.resizeObs.disconnect(),this.renderer.dispose()}resize(){const e=this.canvas.parentElement??this.canvas,n=Math.max(1,e.clientWidth),i=Math.max(1,e.clientHeight);this.renderer.setSize(n,i,!1),this.camera.aspect=n/i;const r=6.2,s=.78,o=n/i,a=2*Math.atan(Math.tan(Math.atan(s/r))/o)*(180/Math.PI);this.camera.fov=o>1.1?17:Math.max(24,a);const l=r*Math.tan(this.camera.fov*Math.PI/360);this.camera.position.set(0,1.35,r),this.camera.lookAt(0,Math.max(.82,l*.5),0),this.camera.updateProjectionMatrix()}}const $g={en:[["one","ones"],["ten","tens"],["hundred","hundreds"]],es:[["unidad","unidades"],["decena","decenas"],["centena","centenas"]]},Yu=t=>t[0].toUpperCase()+t.slice(1),at=t=>`<b>${t}</b>`;function fc(t){const e=r=>$g[t][r][1],n=r=>$g[t][r][0],i=t==="en";return{back:i?"My room":"Mi cuarto",next:i?"Next":"Siguiente",again:i?"Play again":"Otra vez",room:i?"My room":"Mi cuarto",fix:i?"Fix it":"Corregir",buddyAnswer:r=>i?`${r.name}'s answer`:`Respuesta de ${r.name}`,roundTitle:i?"Round complete!":"¡Ronda completa!",roundStars:r=>i?`You earned ${r} ${r===1?"star":"stars"}`:`Ganaste ${r} ${r===1?"estrella":"estrellas"}`,unlockedStep:r=>i?`New next time: ${fc(t).tag(r,{name:"",kind:"boy"})}!`:`¡Nuevo la próxima vez: ${fc(t).tag(r,{name:"",kind:"boy"})}!`,tag:(r,s)=>({blocks:i?"Blocks":"Bloques",discs:i?"Discs":"Fichas",pencil:i?"Pencil":"Lápiz",buddy:i?`${s.name}'s turn`:`Turno de ${s.name}`})[r],place:r=>Yu(e(r)),msg:(r,s)=>{const o=s.kind==="girl"?"she":"he";switch(r.k){case"startTake":return i?`Start with the ${e(r.p)}. Take away ${at(r.n)}.`:`Empieza por las ${e(r.p)}. Quita ${at(r.n)}.`;case"taking":return i?`Take away ${e(r.p)}: ${at(r.done)} of ${at(r.n)}`:`Quita ${e(r.p)}: ${at(r.done)} de ${at(r.n)}`;case"notEnough":return i?`Only ${at(r.have)} ${r.have===1?n(r.p):e(r.p)}. Not enough to take away ${at(r.need)}! Tap a ${n(r.p+1)} to break it.`:`Solo hay ${at(r.have)} ${r.have===1?n(r.p):e(r.p)}. ¡No alcanza para quitar ${at(r.need)}! Toca una ${n(r.p+1)} para romperla.`;case"breakFurther":return i?`No ${e(r.p)} to break! Tap a ${n(r.from)} first.`:`¡No hay ${e(r.p)} para romper! Toca primero una ${n(r.from)}.`;case"brokeAgain":return i?`Now tap a ${n(r.p)} to break it.`:`Ahora toca una ${n(r.p)} para romperla.`;case"broke":return i?`10 more ${e(r.p)}! Now there are ${at(r.have)}. Take away ${at(r.need)}.`:`¡10 ${e(r.p)} más! Ahora hay ${at(r.have)}. Quita ${at(r.need)}.`;case"left":return i?`How many ${e(r.p)} are left?`:`¿Cuántas ${e(r.p)} quedan?`;case"countLeft":return i?`Count the ${e(r.p)} that are left.`:`Cuenta las ${e(r.p)} que quedan.`;case"nextCol":return i?`Now the ${e(r.p)}. Take away ${at(r.n)}.`:`Ahora las ${e(r.p)}. Quita ${at(r.n)}.`;case"wCol":return`${Yu(e(r.p))}: ${at(`${r.a} − ${r.b}`)}`;case"wLess":return i?`${at(r.a)} is less than ${at(r.b)}. Tap the ${e(r.from)} to borrow.`:`${at(r.a)} es menor que ${at(r.b)}. Toca las ${e(r.from)} para pedir prestado.`;case"wBorrowMore":return i?`Now borrow from the ${e(r.p)}.`:`Ahora pide prestado a las ${e(r.p)}.`;case"wAfter":return i?`Now it's ${at(`${r.a} − ${r.b}`)}.`:`Ahora es ${at(`${r.a} − ${r.b}`)}.`;case"tryAgain":return i?`Almost! Try ${at(`${r.a} − ${r.b}`)} again.`:`¡Casi! Intenta ${at(`${r.a} − ${r.b}`)} otra vez.`;case"done":return i?"You did it!":"¡Lo lograste!";case"buddyAsk":return i?`${s.name} tried this one. <b>Tap the number ${o} got wrong.</b>`:`${s.name} hizo esta. <b>Toca el número que tiene mal.</b>`;case"buddyTens":return i?"That one is wrong too, but start with the ones.":"Ese también está mal, pero empieza por las unidades.";case"buddyNope":return i?"That part is right. Look at the ones.":"Esa parte está bien. Mira las unidades.";case"buddyFound":return i?`Yes! ${Yu(o)} did ${at(`${r.b} − ${r.a}`)} because it was easier. Help ${s.name} borrow.`:`¡Sí! Hizo ${at(`${r.b} − ${r.a}`)} porque era más fácil. Ayuda a ${s.name} a pedir prestado.`;case"buddyThanks":return i?`${s.name} says thanks!`:`¡${s.name} te da las gracias!`}}}}const kC={en:fc("en"),es:fc("es")},Ea=t=>JSON.parse(JSON.stringify(t)),ga=(t,e)=>String(t).padStart(e,"0").split("").reverse().map(Number),Pn=t=>t==="blocks"||t==="discs";function Ku(t,e,n){const i=String(e).length,r=ga(e,i),s=ga(n,i);let o=1;const a={mode:t,a:e,b:n,n:i,orig:r.slice(),top:r.slice(),bot:s,active:0,phase:t==="buddy"?"find":Pn(t)?"take":"answer",taken:Array(i).fill(0),ans:Array(i).fill(null),wrong:Array(i).fill(0),items:Pn(t)?r.map(l=>Array.from({length:l},()=>({id:o++}))):r.map(()=>[]),crossed:Array(i).fill(!1),source:-1,hintKey:-1,numbered:!1,picked:null,slips:0,msg:{k:"buddyAsk"},nextId:o};return a.msg=t==="buddy"?{k:"buddyAsk"}:Pn(t)?{k:"startTake",p:0,n:s[0]}:{k:"wCol",p:0,a:r[0],b:s[0]},Pn(t)&&vx(a),a}function vx(t){t.phase==="take"&&t.bot[t.active]===0&&(t.phase="answer",t.msg={k:"left",p:t.active})}function mp(t,e){const n=t.active;if(e<=n||t.top[n]>=t.bot[n]||t.taken[n]>0)return!1;for(let i=n+1;i<e;i++)if(t.top[i]!==0)return!1;return t.top[e]>0}function Vh(t){for(let e=t.active+1;e<t.n;e++)if(t.top[e]>0)return e;return-1}function _x(t){t.items.forEach(e=>e.forEach(n=>{delete n.fresh,delete n.k}))}function gp(t,e,n,i){const r=e-1;if(Pn(t.mode)){const o=t.items[e].filter(l=>!l.gone),a=n!==null&&o.find(l=>l.id===n)||o[o.length-1];t.items[e]=t.items[e].filter(l=>l!==a);for(let l=0;l<10;l++)t.items[r].push({id:t.nextId++,fresh:!0,k:l});i.push({t:"break",from:e,id:a?a.id:null})}t.top[e]-=1,t.top[r]+=10,t.crossed[e]=!0,t.crossed[r]=!0,t.source=-1,t.hintKey=-1,i.push({t:"sfx",name:e===2?"hundred-break":"ten-break"});const s=t.active;if(r!==s){t.source=r,t.msg=Pn(t.mode)?{k:"brokeAgain",p:r}:{k:"wBorrowMore",p:r},i.push({t:"buddy",mood:"curious",emote:"!"});return}i.push({t:"buddy",mood:"curious",emote:"!"},{t:"voice",name:"curious"}),t.msg=Pn(t.mode)?{k:"broke",p:s,have:t.top[s],need:t.bot[s]}:{k:"wAfter",p:s,a:t.top[s],b:t.bot[s]}}function DC(t,e,n){const i=Ea(t);_x(i);const r=[];if(i.phase==="done"||!Pn(i.mode))return{s:t,fx:r};const s=i.active;if(e===s&&i.phase==="take"){if(i.top[s]<i.bot[s]){const a=Vh(i);return i.source=a,i.slips++,i.msg=a===s+1?{k:"notEnough",p:s,have:i.top[s],need:i.bot[s]}:{k:"breakFurther",p:s+1,from:a},r.push({t:"shake",target:"mat",p:e},{t:"buddy",mood:"curious",emote:"?"},{t:"voice",name:"hmm"},{t:"sfx",name:"cant-afford"}),{s:i,fx:r}}const o=i.items[e].find(a=>a.id===n);return!o||o.gone?{s:t,fx:r}:(o.gone=!0,i.taken[e]++,r.push({t:"sfx",name:"cross-out"}),i.taken[e]>=i.bot[e]?(i.phase="answer",i.msg={k:"left",p:e},r.push({t:"sfx",name:"column-done"})):i.msg={k:"taking",p:e,done:i.taken[e],n:i.bot[e]},{s:i,fx:r})}return e>s&&i.phase==="take"&&mp(i,e)?(gp(i,e,n,r),{s:i,fx:r}):(r.push({t:"shake",target:"mat",p:e},{t:"sfx",name:"cant-place"}),e>s&&i.source>=0&&r.push({t:"buddy",mood:"think",emote:"dots"}),{s:i,fx:r})}function IC(t,e){const n=[];if(t.phase!=="answer"||Pn(t.mode))return{s:t,fx:n};const i=Ea(t);return mp(i,e)?(gp(i,e,null,n),{s:i,fx:n}):(n.push({t:"shake",target:"top",p:e},{t:"sfx",name:"cant-place"}),{s:t,fx:n})}function Xg(t,e){const n=[];if(t.phase!=="answer")return{s:t,fx:n};const i=Ea(t);_x(i);const r=i.active;if(n.push({t:"sfx",name:"keypad-tap"}),i.top[r]<i.bot[r]){if(e===i.top[r]+10-i.bot[r]){let o;const a=[];for(;i.top[r]<i.bot[r]&&(o=Vh(i))>=0;)gp(i,o,null,a);return n.push(...a.filter(l=>l.t==="sfx")),qg(i,e,n)}i.wrong[r]++,i.slips++;const s=Vh(i);return i.source=s,i.msg={k:"wLess",p:r,a:i.top[r],b:i.bot[r],from:s},n.push({t:"shake",target:"slot",p:r},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"curious",emote:"?"},{t:"voice",name:"hmm"}),{s:i,fx:n}}return e===i.top[r]-i.bot[r]?qg(i,e,n):(i.wrong[r]++,i.slips++,n.push({t:"shake",target:"slot",p:r},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"dots"},{t:"voice",name:"hmm"}),Pn(i.mode)?(i.msg={k:"countLeft",p:r},i.wrong[r]>=2&&(i.numbered=!0)):(i.msg={k:"tryAgain",a:i.top[r],b:i.bot[r]},i.wrong[r]>=2&&(i.hintKey=i.top[r]-i.bot[r])),{s:i,fx:n})}function qg(t,e,n){const i=t.active;t.ans[i]=e,t.wrong[i]=0,t.hintKey=-1,t.numbered=!1,t.source=-1,n.push({t:"sfx",name:t.slips===0?"answer-correct":"answer-correct-retry"});const r=i+1,s=r===t.n-1&&t.top[r]===0&&t.bot[r]===0;if(r>=t.n||s){r<t.n&&(t.ans[r]=0),t.phase="done";const o=t.mode==="buddy";return t.msg=o?{k:"buddyThanks"}:{k:"done"},n.push({t:"buddy",mood:o?"thanks":"happy",emote:o?"heart":"star"},{t:"voice",name:o?"thanks":"happy"},{t:"sfx",name:"star-earn"},{t:"solved",firstTry:t.slips===0}),{s:t,fx:n}}return t.active=r,t.phase=Pn(t.mode)?"take":"answer",t.msg=Pn(t.mode)?{k:"nextCol",p:r,n:t.bot[r]}:{k:"wCol",p:r,a:t.top[r],b:t.bot[r]},vx(t),n.push({t:"buddy",mood:"happy"}),{s:t,fx:n}}function xx(t){return t.orig.map((e,n)=>Math.abs(e-t.bot[n]))}const UC=t=>ga(t.a-t.b,t.n);function FC(t,e){const n=[];if(t.phase!=="find")return{s:t,fx:n};const i=Ea(t),r=xx(i),s=UC(i),o=r.findIndex((a,l)=>a!==s[l]);return e===o?(i.picked=e,i.msg={k:"buddyFound",a:i.orig[e],b:i.bot[e]},n.push({t:"buddy",mood:"oops",emote:"drop"},{t:"voice",name:"oops"},{t:"sfx",name:"answer-correct"}),{s:i,fx:n}):(i.slips++,i.msg=r[e]!==s[e]?{k:"buddyTens"}:{k:"buddyNope"},n.push({t:"shake",target:"buddyDigit",p:e},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:r[e]!==s[e]?"dots":"?"}),{s:i,fx:n})}function OC(t){const e=Ea(t);return e.phase="answer",e.slips=0,e.msg={k:"wCol",p:0,a:e.top[0],b:e.bot[0]},{s:e,fx:[{t:"buddy",mood:"think",emote:"dots"}]}}const er=(t,e)=>t+Math.floor(Math.random()*(e-t+1));function zC(t,e){const n=String(t).length,i=ga(t,n),r=ga(e,n);return i.some((s,o)=>s<r[o])}function Gh(){for(;;){const t=er(3,9),e=er(1,t-1),n=er(2,9),i=er(0,n-1);if(!(t-1-e<1))return[t*10+i,e*10+n]}}function Yg(t){for(let e=0;e<500;e++){const n=t?er(2,9)*100+er(0,9):er(200,999),i=er(101,n-100);if(!(t&&Math.floor(n/10)%10!==0)&&zC(n,i)&&!(Math.floor((n-i)/100)<1)&&!(t&&n%10>=i%10))return[n,i]}return[403,158]}function BC(){for(;;){const[t,e]=Gh();if(e%10-t%10!==5)return[t,e]}}const HC=5;function Kg(t){const e=[],n=new Set;for(;e.length<HC;){const i=e.length;let r,s;t<=0?(r="blocks",s=Gh()):t===1?(r="discs",s=Yg(i===3)):i===2?(r="buddy",s=BC()):(r="pencil",s=i===0?Gh():Yg(i===4));const o=s.join("-");n.has(o)||(n.add(o),e.push({mode:r,a:s[0],b:s[1]}))}return e}const VC=2,GC=["blocks","discs","pencil"],WC=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function jC(){return x.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{d:"M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z",fill:"#F64034"})})}function $C(){return x.jsxs("svg",{width:"26",height:"30",viewBox:"0 0 20 24","aria-hidden":"true",children:[x.jsx("path",{d:"M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z",fill:"#70BCD6"}),x.jsx("ellipse",{cx:"7.5",cy:"15",rx:"1.6",ry:"2.4",fill:"#fff",opacity:".8"})]})}function XC({e:t}){switch(t){case"?":return x.jsx("span",{style:{color:"var(--cobalt)"},children:"?"});case"!":return x.jsx("span",{style:{color:"var(--tomato)"},children:"!"});case"heart":return x.jsx(jC,{});case"drop":return x.jsx($C,{});case"dots":return x.jsx("span",{style:{color:"var(--ink-soft)",letterSpacing:2,fontSize:26},children:"•••"});case"star":return x.jsx(Sn,{size:30})}}function qC(t,e){t&&(t.classList.remove(e),t.offsetWidth,t.classList.add(e))}function YC({onExit:t,onSolved:e}){var R;const n=ts(),i=kC[n.lang],r=re.useMemo(()=>({name:WC(n.name||"Buddy"),kind:n.kind}),[n.name,n.kind]),s=Math.min(2,Math.max(0,((R=n.borrow)==null?void 0:R.level)??0)),[o,a]=re.useState(()=>Kg(s)),[l,c]=re.useState(0),[d,p]=re.useState(0),[u,h]=re.useState(null),[m,y]=re.useState(()=>Ku(o[0].mode,o[0].a,o[0].b)),g=re.useRef(null),f=re.useRef(null),v=re.useRef(null),[_,M]=re.useState(null),P=re.useRef(0);re.useEffect(()=>{if(!g.current)return;let I=null;try{I=new pp(g.current,n.kind,1)}catch{I=null}f.current=I;let L=0;const D=()=>{if(I&&v.current){const V=I.headPos();v.current.style.left=`${V.x}px`,v.current.style.top=`${V.y}px`}L=requestAnimationFrame(D)};return L=requestAnimationFrame(D),pi(`buddy${n.kind}-hello`),()=>{cancelAnimationFrame(L),I==null||I.dispose(),f.current=null}},[]),re.useEffect(()=>{var I;return(I=f.current)==null?void 0:I.setKind(n.kind)},[n.kind]),re.useEffect(()=>()=>clearTimeout(P.current),[]);const A=re.useCallback(I=>{M(I),clearTimeout(P.current),P.current=window.setTimeout(()=>M(null),1600)},[]),T=re.useRef(null),N=re.useRef(null),K=re.useRef(null),S=re.useRef({shakes:[],breakRect:null}),[E,j]=re.useState(0),F=re.useCallback(()=>{var ce,C;const I=(ce=K.current)==null?void 0:ce.getBoundingClientRect(),L=(C=N.current)==null?void 0:C.getBoundingClientRect();if(!I||!L)return;const D=document.createElement("div");D.className="bp-flystar",D.innerHTML='<svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#FBC426" stroke="#D99A0F" stroke-width="1.6" stroke-linejoin="round"/></svg>';const V=I.left+I.width/2-22,ee=I.top+I.height/2-22;D.style.left=`${V}px`,D.style.top=`${ee}px`,document.body.appendChild(D),requestAnimationFrame(()=>requestAnimationFrame(()=>{D.style.transform=`translate(${L.left+12-V}px, ${L.top+2-ee}px) scale(.6)`,D.style.opacity="0"})),window.setTimeout(()=>{D.remove(),ua(1),j(w=>w+1)},820)},[]),X=re.useCallback(I=>{var L,D;for(const V of I.fx)switch(V.t){case"sfx":xt(V.name);break;case"voice":pi(`buddy${n.kind}-${V.name}`);break;case"buddy":(L=f.current)==null||L.react(V.mood),V.emote&&A(V.emote);break;case"shake":S.current.shakes.push(V);break;case"break":{const ee=V.id!==null?(D=T.current)==null?void 0:D.querySelector(`[data-id="${V.id}"]`):null;S.current.breakRect=ee?ee.getBoundingClientRect():null;break}case"solved":p(ee=>ee+1),e==null||e(V.firstTry),F();break}I.s===m?ie():y(I.s)},[m,n.kind,A,F,e]);function ie(){const I=T.current;if(I){for(const L of S.current.shakes){if(L.t!=="shake")continue;const D={mat:`.bp-mat[data-p="${L.p}"]`,slot:".bp-slot.active",top:`[data-top="${L.p}"]`,buddyDigit:`[data-buddy="${L.p}"]`}[L.target];qC(I.querySelector(D),"bp-shake")}S.current.shakes=[]}}re.useLayoutEffect(()=>{const I=S.current.breakRect,L=T.current;L&&L.querySelectorAll(".bp-it.fresh").forEach(D=>{const V=Number(D.dataset.k||0);if(!I){D.classList.remove("fresh");return}const ee=D.getBoundingClientRect(),ce=I.left+I.width/2,w=I.height>I.width*3?I.top+(V+.5)*(I.height/10):I.top+I.height/2;D.style.setProperty("--fx",`${ce-(ee.left+ee.width/2)}px`),D.style.setProperty("--fy",`${w-(ee.top+ee.height/2)}px`),D.style.setProperty("--dl",`${V*.035}s`)}),S.current.breakRect=null,ie()},[m]);const $=re.useCallback(()=>{var L,D;if(xt("sheet-close"),l+1<o.length){const V=o[l+1];c(l+1),y(Ku(V.mode,V.a,V.b)),(L=f.current)==null||L.react("idle");return}let I=null;Fn(V=>{const ee=V.borrow??{level:0,rounds:0};let ce=ee.level,C=ee.rounds+1;return C>=VC&&ce<2&&(ce+=1,C=0,I=GC[ce]),{...V,borrow:{level:ce,rounds:C}}}),h({unlocked:I}),xt("round-complete"),pi(`buddy${n.kind}-cheer`),(D=f.current)==null||D.react("happy"),A("star")},[l,o,n.kind,A]),le=re.useCallback(()=>{var D;const I=Math.min(2,Math.max(0,((D=n.borrow)==null?void 0:D.level)??0)),L=Kg(I);a(L),c(0),p(0),h(null),y(Ku(L[0].mode,L[0].a,L[0].b))},[n.borrow]);re.useEffect(()=>{const I=L=>{u||(/^[0-9]$/.test(L.key)?X(Xg(m,Number(L.key))):L.key==="Enter"&&m.phase==="done"&&$())};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[m,X,$,u]);const k=m.n,se=Pn(m.mode),te=m.mode==="pencil"||m.mode==="buddy",oe=I=>k-I+1,be=m.mode==="blocks"?k===2?["1.5fr","1fr"]:["1.2fr","1.5fr","1fr"]:Array(k).fill("1fr"),Be=m.mode==="buddy"&&(m.phase==="find"||m.picked!==null),Q=Be?2:1,fe=Q+1,_e=Q+2,G=Q+3,Z=Q+4,U=se?Z:G,ae=Array.from({length:k},(I,L)=>k-1-L),he=xx(m),q=m.phase==="take"||m.phase==="answer";return x.jsxs("div",{className:"mb bp",children:[x.jsxs("header",{className:"bp-hud",children:[x.jsxs("button",{className:"mb-chip",onClick:t,"aria-label":i.back,children:[x.jsx("img",{src:"/mark-face.svg",alt:"",width:34,height:38,style:{margin:"-4px 0 -2px"}}),x.jsx("span",{className:"label",children:i.back})]}),x.jsx("div",{className:"bp-dots","aria-label":`${l+1} / ${o.length}`,children:o.map((I,L)=>x.jsx("span",{className:`bp-dot ${L<l||L===l&&m.phase==="done"?"done":L===l?"now":""}`},L))}),x.jsxs("span",{ref:N,className:`mb-chip${E?" bump":""}`,children:[x.jsx(Sn,{}),n.stars]},E)]}),x.jsxs("main",{className:"bp-stage",children:[x.jsxs("div",{className:"bp-buddy",children:[x.jsx("canvas",{ref:g,"aria-hidden":"true"}),x.jsx("div",{ref:v,className:`bp-emote${_?" on":""}`,children:_&&x.jsx(XC,{e:_})})]}),x.jsxs("section",{className:"bp-card",ref:K,children:[x.jsxs("div",{className:"bp-task","aria-live":"polite",children:[x.jsx("span",{className:"tag",children:i.tag(m.mode,r)}),x.jsx("span",{dangerouslySetInnerHTML:{__html:i.msg(m.msg,r)}})]},JSON.stringify(m.msg)+n.lang),x.jsx("div",{className:"bp-work",children:x.jsxs("div",{ref:T,className:"bp-sheet",style:{gridTemplateColumns:`calc(var(--digit) * .7) ${be.join(" ")}`,gridTemplateRows:`repeat(${U}, auto)`},children:[q&&x.jsx("div",{className:"bp-band",style:{gridRow:`${Q} / -1`,gridColumn:oe(m.active)}}),Be&&x.jsxs("div",{className:"bp-paper",style:{gridRow:1,gridColumn:"1 / -1"},children:[x.jsx("img",{src:"/mark-face.svg",width:26,height:29,alt:""}),x.jsx("span",{dangerouslySetInnerHTML:{__html:`${i.buddyAnswer(r)}:`}}),x.jsxs("span",{className:"bp-marker",style:{fontSize:26},children:[m.a," − ",m.b," = ",Number(he.slice().reverse().join(""))]})]}),ae.map(I=>{const L=m.crossed[I]?x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"old",children:m.orig[I]}),x.jsx("span",{className:"new",children:m.top[I]})]}):x.jsx(x.Fragment,{children:m.orig[I]}),D=te&&m.source===I,V={gridRow:Q,gridColumn:oe(I)};return te&&m.phase==="answer"?x.jsx("div",{className:"bp-cell top",style:V,children:x.jsx("button",{className:`bp-digit${mp(m,I)?" can":""}${D?" glow":""}`,"data-top":I,onClick:()=>X(IC(m,I)),children:L})},`t${I}`):x.jsx("div",{className:"bp-cell top",style:V,children:x.jsx("span",{className:"bp-digit","data-top":I,children:L})},`t${I}`)}),x.jsx("div",{className:"bp-cell sign",style:{gridRow:fe,gridColumn:1},children:"−"}),ae.map(I=>x.jsx("div",{className:"bp-cell",style:{gridRow:fe,gridColumn:oe(I)},children:x.jsx("span",{className:"bp-digit",children:m.bot[I]})},`b${I}`)),x.jsx("div",{className:"bp-rule",style:{gridRow:_e,gridColumn:"1 / -1"}}),ae.map(I=>{const L={gridRow:G,gridColumn:oe(I)};if(m.phase==="find")return x.jsx("div",{className:"bp-cell",style:L,children:x.jsx("button",{className:`bp-digit bp-marker${m.picked===I?" picked":""}`,"data-buddy":I,style:{minWidth:"calc(var(--digit) * .82)"},onClick:()=>X(FC(m,I)),children:he[I]})},`a${I}`);const D=m.ans[I]!==null,V=I===m.active&&m.phase==="answer";return x.jsx("div",{className:"bp-cell",style:L,children:x.jsx("div",{className:`bp-slot ${D?"filled":V?"active":"empty"}`,children:D?m.ans[I]:""})},`a${I}`)}),se&&ae.map(I=>{const L=m.mode==="discs"?"discs":I===0?"cubes":"rods",D=m.mode==="discs"?"disc":I===0?"cube":"rod",V=m.mode==="discs"?[1,10,100][I]:"";let ee=0;return x.jsxs("div",{className:`bp-mat p${I}${m.source===I?" source":""}`,"data-p":I,style:{gridRow:Z,gridColumn:oe(I)},children:[I===m.active&&m.phase==="take"&&m.taken[I]>0&&x.jsxs("span",{className:"bp-counter",children:["−",m.taken[I]]}),x.jsx("span",{className:"head",children:i.place(I)}),x.jsx("div",{className:`bp-pile ${L}`,children:m.items[I].map(ce=>{const C=m.numbered&&I===m.active&&!ce.gone;return x.jsx("button",{className:`bp-it ${D}${ce.gone?" gone":""}${ce.fresh?" fresh":""}`,"data-id":ce.id,"data-k":ce.k??"","aria-label":i.place(I),onClick:()=>X(DC(m,I,ce.id)),children:C?x.jsx("span",{className:"num",children:++ee}):V},ce.id)})})]},`m${I}`)})]})}),x.jsx("div",{children:m.phase==="done"?x.jsxs("div",{className:"bp-next",children:[x.jsxs("span",{className:"bp-result",children:[m.a," − ",m.b," = ",m.a-m.b]}),x.jsxs("button",{className:"mb-btn",onClick:$,children:[i.next," →"]})]}):m.phase==="find"?x.jsx("div",{className:"bp-next",children:m.picked!==null&&x.jsx("button",{className:"mb-btn secondary",onClick:()=>X(OC(m)),children:i.fix})}):x.jsx("div",{className:`bp-pad${m.phase!=="answer"?" off":""}`,children:[1,2,3,4,5,6,7,8,9,0].map(I=>x.jsx("button",{className:`bp-key${m.hintKey===I?" hinted":""}`,onClick:()=>X(Xg(m,I)),children:I},I))})})]})]}),u&&x.jsx("div",{className:"bp-overlay",children:x.jsxs("div",{className:"bp-done",role:"dialog","aria-modal":"true",children:[x.jsx("h2",{children:i.roundTitle}),x.jsx("div",{className:"bp-done-stars",children:Array.from({length:Math.min(d,8)},(I,L)=>x.jsx("span",{style:{animationDelay:`${L*.12}s`},children:x.jsx(Sn,{size:40})},L))}),x.jsx("p",{children:i.roundStars(d)}),u.unlocked&&x.jsx("div",{className:"unlock",children:i.unlockedStep(u.unlocked)}),x.jsxs("div",{className:"row",children:[x.jsx("button",{className:"mb-btn quiet",onClick:le,children:i.again}),x.jsx("button",{className:"mb-btn",onClick:t,children:i.room})]})]})})]})}const Ot=t=>`<b>${t}</b>`;function Jg(t){const e=t==="en",n=e?["Dots","Split","Memory"]:["Puntos","Partir","Memoria"];return{back:e?"My room":"Mi cuarto",next:e?"Next":"Siguiente",again:e?"Play again":"Otra vez",room:e?"My room":"Mi cuarto",pickTable:e?"Pick a table":"Elegir tabla",pickTitle:e?"Pick a table":"Elige una tabla",pickSub:e?"Each table has three steps: Dots, Split, Memory.":"Cada tabla tiene tres pasos: Puntos, Partir, Memoria.",mix:e?"Mix":"Mezcla",mixLocked:e?"Learn a table to unlock Mix":"Aprende una tabla para abrir la Mezcla",peek:e?"Show me":"Muéstrame",yes:e?"Right":"Sí",no:e?"Not right":"No",del:e?"Delete":"Borrar",check:e?"Check":"Revisar",roundTitle:e?"Round complete!":"¡Ronda completa!",roundStars:i=>e?`You earned ${i} ${i===1?"star":"stars"}`:`Ganaste ${i} ${i===1?"estrella":"estrellas"}`,stepUnlocked:(i,r)=>e?`Table of ${i}: ${n[r]} unlocked!`:`Tabla del ${i}: ¡${n[r]} desbloqueado!`,learned:i=>e?`You learned the ${i}s!`:`¡Aprendiste la tabla del ${i}!`,keepGoing:i=>e?`Get ${i} right on the first try to unlock the next step.`:`Acierta ${i} a la primera para abrir el siguiente paso.`,tag:(i,r)=>i==="buddy"?e?`${r.name}'s turn`:`Turno de ${r.name}`:n[["array","split","recall"].indexOf(i)],tableTag:i=>i==="mix"?e?"Mix":"Mezcla":`× ${i}`,msg:(i,r)=>{const s=r.kind==="girl"?"she":"he";switch(i.k){case"arrayAsk":return e?`${Ot(i.m)} rows of ${Ot(i.t)}. Tap the dots to count by ${i.t}s, or type the answer.`:`${Ot(i.m)} filas de ${Ot(i.t)}. Toca los puntos para contar de ${i.t} en ${i.t}, o escribe la respuesta.`;case"counting":return e?`Keep going… ${Ot(i.n)}`:`Sigue… ${Ot(i.n)}`;case"counted":return e?`So ${Ot(`${i.t} × ${i.m}`)} is…`:`Entonces ${Ot(`${i.t} × ${i.m}`)} es…`;case"splitAsk":return e?`Split it! First the top ${Ot(i.a)} rows.`:`¡Pártelo! Primero las ${Ot(i.a)} filas de arriba.`;case"splitNine":return e?"Ten rows is easy. Then take one row away.":"Diez filas es fácil. Luego quita una fila.";case"splitB":return e?`Now the other ${Ot(i.b)} ${i.b===1?"row":"rows"}.`:i.b===1?"Ahora la otra fila.":`Ahora las otras ${Ot(i.b)} filas.`;case"splitSum":return e?"Put them together.":"Júntalos.";case"splitMinus":return e?`Take away the crossed-out row of ${Ot(i.t)}.`:`Quita la fila tachada de ${Ot(i.t)}.`;case"recallAsk":return e?"Do you remember?":"¿Te acuerdas?";case"tryAgain":return e?"Almost! Try again.":"¡Casi! Intenta otra vez.";case"countRows":return e?"Count the dots row by row.":"Cuenta los puntos fila por fila.";case"buddyAsk":return e?`${r.name} says ${Ot(`${i.t} × ${i.m} = ${i.w}`)}. Is ${s} right?`:`${r.name} dice ${Ot(`${i.t} × ${i.m} = ${i.w}`)}. ¿Tiene razón?`;case"buddyNo":return e?`Good catch! So what is ${Ot(`${i.t} × ${i.m}`)}?`:`¡Bien visto! Entonces, ¿cuánto es ${Ot(`${i.t} × ${i.m}`)}?`;case"buddyYesWrong":return e?"Look again at the dots.":"Mira otra vez los puntos.";case"buddyThanks":return e?`${r.name} says thanks!`:`¡${r.name} te da las gracias!`;case"done":return e?"You did it!":"¡Lo lograste!"}}}}const KC={en:Jg("en"),es:Jg("es")},mo=t=>({...t,parts:t.parts.slice(),vals:t.vals.slice()});function JC(t){return t===9?{kind:"minus",a:10,b:1}:t===4?{kind:"plus",a:2,b:2}:t===8?{kind:"plus",a:5,b:3}:t>=11?{kind:"plus",a:10,b:t-10}:t>=6?{kind:"plus",a:5,b:t-5}:{kind:"plus",a:Math.ceil(t/2),b:Math.floor(t/2)}}function ZC(t){var e;return t.mode==="split"&&((e=t.plan)==null?void 0:e.kind)==="minus"?10:t.m}function Zg(t,e,n,i=0){const r={mode:t,t:e,m:n,ans:e*n,phase:t==="buddy"?"judge":"answer",lit:0,typed:"",wrong:0,slips:0,peek:!1,peekReady:!1,plan:null,parts:[],part:0,vals:[],claim:i,msg:{k:"recallAsk"}};if(t==="split"){const s=JC(n);r.plan=s,r.parts=s.kind==="minus"?[{x:e,op:"×",y:10,v:e*10,cls:"a"},{x:e*10,op:"−",y:e,v:e*n,cls:"b"}]:[{x:e,op:"×",y:s.a,v:e*s.a,cls:"a"},{x:e,op:"×",y:s.b,v:e*s.b,cls:"b"},{x:e*s.a,op:"+",y:e*s.b,v:e*n,cls:""}]}return r.msg=t==="array"?{k:"arrayAsk",t:e,m:n}:t==="split"?r.plan.kind==="minus"?{k:"splitNine"}:{k:"splitAsk",a:r.plan.a}:t==="recall"?{k:"recallAsk"}:{k:"buddyAsk",t:e,m:n,w:i},r}function QC(t){const e=t.mode==="array"||(t.mode==="recall"||t.mode==="buddy")&&t.peek;if(t.phase==="done"||!e||t.lit>=t.m)return{s:t,fx:[]};const n=mo(t);n.lit++;const i=[{t:"sfx",name:"count-tick",semitones:[0,2,4,5,7,9,11,12,14,16,17,19][n.lit-1]??19}];return n.lit<n.m?n.msg={k:"counting",n:n.lit*n.t}:(n.msg={k:"counted",t:n.t,m:n.m},i.push({t:"buddy",mood:"curious",emote:"!"})),{s:n,fx:i}}function e2(t){if(t.peek||t.phase==="done")return{s:t,fx:[]};const e=mo(t);return e.peek=!0,e.peekReady=!1,e.slips++,e.msg={k:"arrayAsk",t:e.t,m:e.m},{s:e,fx:[{t:"sfx",name:"hint-start"},{t:"buddy",mood:"curious",emote:"!"},{t:"voice",name:"curious"}]}}function t2(t){return t.peek||t.peekReady||t.phase==="done"?{s:t,fx:[]}:{s:{...mo(t),peekReady:!0},fx:[]}}function _s(t,e){if(t.phase!=="answer")return{s:t,fx:[]};if(e==="go")return n2(t);const n=mo(t);return e==="del"?n.typed?(n.typed=n.typed.slice(0,-1),{s:n,fx:[{t:"sfx",name:"keypad-delete"}]}):{s:t,fx:[]}:!/^[0-9]$/.test(e)||n.typed.length>=3?{s:t,fx:[]}:(n.typed=n.typed==="0"?e:n.typed+e,{s:n,fx:[{t:"sfx",name:"keypad-tap"}]})}function n2(t){if(!t.typed)return{s:t,fx:[]};const e=mo(t),n=Number(e.typed),i=e.mode==="split"?e.parts[e.part].v:e.ans;if(e.typed="",n===i){if(e.mode==="split"&&(e.vals[e.part]=n,e.part<e.parts.length-1)){e.part++,e.msg=e.plan.kind==="minus"?{k:"splitMinus",t:e.t}:e.part===1?{k:"splitB",b:e.plan.b}:{k:"splitSum"};const s=[{t:"sfx",name:"answer-correct"},{t:"buddy",mood:"happy"}];return e.part===1&&s.push({t:"sfx",name:"split-array"}),{s:e,fx:s}}return i2(e)}e.wrong++,e.slips++;const r=[{t:"shake"},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"dots"},{t:"voice",name:"hmm"}];return e.mode==="array"?e.msg=e.wrong>=2?{k:"countRows"}:{k:"tryAgain"}:(e.msg={k:"tryAgain"},(e.mode==="recall"||e.mode==="buddy")&&!e.peek&&(e.peekReady=!0)),{s:e,fx:r}}function i2(t){t.phase="done";const e=t.mode==="buddy";return t.msg=e?{k:"buddyThanks"}:{k:"done"},{s:t,fx:[{t:"sfx",name:t.slips===0?"answer-correct":"answer-correct-retry"},{t:"buddy",mood:e?"thanks":"happy",emote:e?"heart":"star"},{t:"voice",name:e?"thanks":"happy"},{t:"sfx",name:"star-earn"},{t:"solved",firstTry:t.slips===0}]}}function Qg(t,e){if(t.phase!=="judge")return{s:t,fx:[]};const n=mo(t);return e?(n.peek=!0,n.slips++,n.msg={k:"buddyYesWrong"},{s:n,fx:[{t:"shake"},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"?"}]}):(n.phase="answer",n.msg={k:"buddyNo",t:n.t,m:n.m},{s:n,fx:[{t:"sfx",name:"answer-correct"},{t:"buddy",mood:"oops",emote:"drop"},{t:"voice",name:"oops"}]})}const e0=8,t0=6,r2=["array","split","recall"];function yx(t){const e=t.slice();for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function Sx(t,e){const n=e<=2||Math.random()<.5;return t*(n?e+1:e-1)}function s2(t,e){const n=r2[Math.min(2,Math.max(0,e))];return yx([3,4,5,6,7,8,9,10]).map((r,s)=>n==="recall"&&s===3?{mode:"buddy",t,m:r,claim:Sx(t,r)}:{mode:n,t,m:r})}function o2(t){const e=[];for(const r of t)for(let s=2;s<=10;s++)e.push({mode:"recall",t:r,m:s});const n=yx(e).slice(0,e0);for(;n.length<e0;)n.push({...e[Math.floor(Math.random()*e.length)]});const i=n[3];return n[3]={mode:"buddy",t:i.t,m:i.m,claim:Sx(i.t,i.m)},n}const n0=[2,3,4,5,6,7,8,9,10,11,12],a2=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),l2={"?":x.jsx("span",{style:{color:"var(--cobalt)"},children:"?"}),"!":x.jsx("span",{style:{color:"var(--tomato)"},children:"!"}),dots:x.jsx("span",{style:{color:"var(--ink-soft)",letterSpacing:2,fontSize:26},children:"•••"}),star:x.jsx(Sn,{size:30}),heart:x.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{d:"M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z",fill:"#F64034"})}),drop:x.jsx("svg",{width:"26",height:"30",viewBox:"0 0 20 24","aria-hidden":"true",children:x.jsx("path",{d:"M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z",fill:"#70BCD6"})})},c2=5e3;function u2({onExit:t,onSolved:e}){const n=ts(),i=KC[n.lang],r=re.useMemo(()=>({name:a2(n.name||"Buddy"),kind:n.kind}),[n.name,n.kind]),s=n.tables??{},o=n0.filter(Z=>(s[Z]??0)>=3),[a,l]=re.useState(null),[c,d]=re.useState([]),[p,u]=re.useState(0),[h,m]=re.useState(null),[y,g]=re.useState(0),[f,v]=re.useState(0),[_,M]=re.useState(null),P=re.useRef(null),A=re.useRef(null),T=re.useRef(null),[N,K]=re.useState(null),S=re.useRef(0);re.useEffect(()=>{if(!P.current)return;let Z=null;try{Z=new pp(P.current,n.kind,1)}catch{Z=null}A.current=Z;let U=0;const ae=()=>{if(Z&&T.current){const he=Z.headPos();T.current.style.left=`${he.x}px`,T.current.style.top=`${he.y}px`}U=requestAnimationFrame(ae)};return U=requestAnimationFrame(ae),pi(`buddy${n.kind}-hello`),()=>{cancelAnimationFrame(U),Z==null||Z.dispose(),A.current=null}},[]),re.useEffect(()=>{var Z;return(Z=A.current)==null?void 0:Z.setKind(n.kind)},[n.kind]),re.useEffect(()=>()=>clearTimeout(S.current),[]);const E=re.useCallback(Z=>{K(Z),clearTimeout(S.current),S.current=window.setTimeout(()=>K(null),1600)},[]),j=re.useRef(null),[F,X]=re.useState({w:600,h:400});re.useLayoutEffect(()=>{const Z=j.current;if(!Z)return;const U=new ResizeObserver(()=>X({w:Z.clientWidth,h:Z.clientHeight}));return U.observe(Z),()=>U.disconnect()},[]);const ie=re.useRef(null),$=re.useRef(null),[le,k]=re.useState(0),se=re.useCallback(()=>{var R,I;const Z=(R=$.current)==null?void 0:R.getBoundingClientRect(),U=(I=ie.current)==null?void 0:I.getBoundingClientRect();if(!Z||!U){ua(1);return}const ae=document.createElement("div");ae.className="bp-flystar",ae.innerHTML='<svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#FBC426" stroke="#D99A0F" stroke-width="1.6" stroke-linejoin="round"/></svg>';const he=Z.left+Z.width/2-22,q=Z.top+Z.height/2-22;ae.style.left=`${he}px`,ae.style.top=`${q}px`,document.body.appendChild(ae),requestAnimationFrame(()=>requestAnimationFrame(()=>{ae.style.transform=`translate(${U.left+12-he}px, ${U.top+2-q}px) scale(.6)`,ae.style.opacity="0"})),window.setTimeout(()=>{ae.remove(),ua(1),k(L=>L+1)},820)},[]),te=re.useCallback(Z=>{var U,ae;for(const he of Z.fx)switch(he.t){case"sfx":xt(he.name,he.semitones!==void 0?{semitones:he.semitones,variance:0}:void 0);break;case"voice":pi(`buddy${n.kind}-${he.name}`);break;case"buddy":(U=A.current)==null||U.react(he.mood),he.emote&&E(he.emote);break;case"shake":{const q=((ae=$.current)==null?void 0:ae.querySelector(".tp-slot.active, .tp-verdict"))??null;q&&(q.classList.remove("bp-shake"),q.offsetWidth,q.classList.add("bp-shake"));break}case"solved":v(q=>q+1),he.firstTry&&g(q=>q+1),e==null||e(he.firstTry),se();break}m(Z.s)},[n.kind,E,se,e]);re.useEffect(()=>{if(!h||h.mode!=="recall"||h.phase!=="answer"||h.peek||h.peekReady)return;const Z=window.setTimeout(()=>m(U=>U&&t2(U).s),c2);return()=>clearTimeout(Z)},[h]);const oe=re.useCallback(Z=>{var ae;const U=Z==="mix"?o2(o):s2(Z,Math.min(2,s[Z]??0));l(Z),d(U),u(0),g(0),v(0),M(null),m(Zg(U[0].mode,U[0].t,U[0].m,U[0].claim)),(ae=A.current)==null||ae.react("idle"),xt("sheet-close")},[o,s]),be=re.useCallback(()=>{var U,ae;if(!h)return;if(p+1<c.length){const he=c[p+1];u(p+1),m(Zg(he.mode,he.t,he.m,he.claim)),(U=A.current)==null||U.react("idle");return}let Z=null;if(typeof a=="number"){const he=Math.min(2,s[a]??0),q=s[a]??0;q<3&&(y>=t0?(Fn(R=>({...R,tables:{...R.tables??{},[a]:Math.max(q,he+1)}})),Z=he+1>=3?i.learned(a):i.stepUnlocked(a,he+1)):Z=i.keepGoing(t0))}M({line:Z}),xt("round-complete"),pi(`buddy${n.kind}-cheer`),(ae=A.current)==null||ae.react("happy"),E("star")},[h,p,c,a,s,y,i,n.kind,E]);re.useEffect(()=>{const Z=U=>{!h||_||a===null||(/^[0-9]$/.test(U.key)?te(_s(h,U.key)):U.key==="Backspace"?te(_s(h,"del")):U.key==="Enter"&&(h.phase==="done"?be():te(_s(h,"go"))))};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[h,te,be,_,a]);const Be=F.h>F.w*.9;function Q(){var R;if(!h)return null;const Z=ZC(h),U=Be?F.w-90:F.w*.55,ae=Be?F.h*.58:F.h-30,he=Math.max(10,Math.min(34,U/(h.t*1.38),ae/(Z*1.38))),q=[];for(let I=0;I<Z;I++){let L="tp-row",D=null;h.mode==="split"&&h.plan?h.plan.kind==="minus"?L+=I===9&&h.part>=1?" minus":" pa":(L+=I<h.plan.a?" pa":" pb",h.phase!=="done"&&(h.part===0&&I>=h.plan.a||h.part===1&&I<h.plan.a)&&(L+=" dim")):I<h.lit&&(L+=" lit",D=x.jsx("span",{className:"lab",children:(I+1)*h.t})),q.push(x.jsxs("div",{className:L,children:[Array.from({length:h.t},(V,ee)=>x.jsx("i",{},ee)),D]},I)),h.mode==="split"&&((R=h.plan)==null?void 0:R.kind)==="plus"&&I===h.plan.a-1&&q.push(x.jsx("div",{className:"tp-split"},"split"))}return x.jsx("div",{className:"tp-arr",style:{"--d":`${he}px`,"--gap":`${Math.round(he*.32)}px`},onClick:()=>te(QC(h)),role:"img","aria-label":`${Z} × ${h.t}`,children:q})}function fe(Z,U){return U!==void 0?x.jsx("span",{className:"tp-slot ok",children:U}):x.jsx("span",{className:`tp-slot${Z?" active":""}`,children:Z&&h?h.typed:""})}let _e=null,G=null;if(h){const Z=h.phase==="done";h.mode==="split"?(_e=x.jsx("div",{className:"tp-eqs many",children:h.parts.map((U,ae)=>{var q;const he=!Z&&ae===h.part?" on":!Z&&ae>h.part?" later":"";return x.jsxs("div",{className:`tp-eq${he}`,children:[x.jsx("span",{className:ae<2&&((q=h.plan)==null?void 0:q.kind)==="plus"?U.cls:"",children:U.x}),x.jsx("span",{children:U.op}),x.jsx("span",{className:U.cls,children:U.y}),x.jsx("span",{children:"="}),fe(!Z&&ae===h.part,h.vals[ae])]},ae)})}),G=Q()):h.mode==="buddy"&&h.phase==="judge"?(_e=x.jsxs("div",{className:"tp-eq",children:[x.jsx("span",{children:h.t}),x.jsx("span",{children:"×"}),x.jsx("span",{children:h.m}),x.jsx("span",{children:"="}),x.jsx("span",{className:"tp-slot buddy",children:h.claim})]}),G=h.peek?Q():null):(_e=x.jsxs("div",{className:"tp-eq",children:[x.jsx("span",{children:h.t}),x.jsx("span",{children:"×"}),x.jsx("span",{children:h.m}),x.jsx("span",{children:"="}),fe(!Z,Z?h.ans:void 0)]}),h.mode==="array"||h.peek?G=Q():h.peekReady&&!Z&&(G=x.jsxs("button",{className:"tp-peek",onClick:()=>te(e2(h)),children:[x.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24","aria-hidden":"true",children:[x.jsx("path",{d:"M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7z",fill:"none",stroke:"currentColor",strokeWidth:"2.4"}),x.jsx("circle",{cx:"12",cy:"12",r:"3.2",fill:"currentColor"})]}),i.peek]})))}return x.jsxs("div",{className:"mb bp",children:[x.jsxs("header",{className:"bp-hud",children:[x.jsxs("button",{className:"mb-chip",onClick:t,"aria-label":i.back,children:[x.jsx("img",{src:"/mark-face.svg",alt:"",width:34,height:38,style:{margin:"-4px 0 -2px"}}),x.jsx("span",{className:"label",children:i.back})]}),x.jsx("div",{className:"bp-dots","aria-label":c.length?`${p+1} / ${c.length}`:void 0,children:c.map((Z,U)=>x.jsx("span",{className:`bp-dot ${U<p||U===p&&(h==null?void 0:h.phase)==="done"?"done":U===p?"now":""}`},U))}),x.jsxs("span",{ref:ie,className:`mb-chip${le?" bump":""}`,children:[x.jsx(Sn,{}),n.stars]},le)]}),x.jsxs("main",{className:"bp-stage",children:[x.jsxs("div",{className:"bp-buddy",children:[x.jsx("canvas",{ref:P,"aria-hidden":"true"}),x.jsx("div",{ref:T,className:`bp-emote${N?" on":""}`,children:N&&l2[N]})]}),x.jsxs("section",{className:"bp-card",ref:$,children:[x.jsx("div",{className:"bp-task","aria-live":"polite",children:h&&a!==null&&x.jsxs(x.Fragment,{children:[x.jsxs("span",{className:"tag",children:[i.tableTag(a)," · ",i.tag(h.mode,r)]}),x.jsx("span",{dangerouslySetInnerHTML:{__html:i.msg(h.msg,r)}})]})},h?JSON.stringify(h.msg)+n.lang:"none"),x.jsxs("div",{className:"tp-work",ref:j,children:[_e,G]}),x.jsx("div",{children:(h==null?void 0:h.phase)==="done"?x.jsxs("div",{className:"bp-next",children:[x.jsxs("span",{className:"bp-result",children:[h.t," × ",h.m," = ",h.ans]}),x.jsxs("button",{className:"mb-btn",onClick:be,children:[i.next," →"]})]}):(h==null?void 0:h.mode)==="buddy"&&h.phase==="judge"?x.jsxs("div",{className:"bp-next tp-verdict",children:[x.jsxs("button",{className:"mb-btn tp-yes",onClick:()=>te(Qg(h,!0)),children:[x.jsx(so,{}),i.yes]}),x.jsxs("button",{className:"mb-btn tp-no",onClick:()=>te(Qg(h,!1)),children:["✕ ",i.no]})]}):x.jsxs("div",{className:"tp-pad",children:[["1","2","3","4","5","6","7","8","9","0"].map(Z=>x.jsx("button",{className:"bp-key",onClick:()=>h&&te(_s(h,Z)),children:Z},Z)),x.jsx("button",{className:"bp-key tp-del","aria-label":i.del,onClick:()=>h&&te(_s(h,"del")),children:x.jsxs("svg",{width:"28",height:"22",viewBox:"0 0 28 22","aria-hidden":"true",children:[x.jsx("path",{d:"M9 2h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-7-9z",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinejoin:"round"}),x.jsx("path",{d:"M13 7l7 8M20 7l-7 8",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]})}),x.jsx("button",{className:"bp-key tp-go","aria-label":i.check,onClick:()=>h&&te(_s(h,"go")),children:x.jsx(so,{size:26})})]})})]})]}),a===null&&x.jsx("div",{className:"bp-overlay",children:x.jsxs("div",{className:"tp-panel",role:"dialog","aria-modal":"true","aria-label":i.pickTitle,children:[x.jsx("h2",{children:i.pickTitle}),x.jsx("p",{className:"sub",children:i.pickSub}),x.jsxs("div",{className:"tp-tables",children:[n0.map(Z=>{const U=Math.min(3,s[Z]??0);return x.jsxs("button",{className:`tp-tile${U>=3?" learned":""}`,onClick:()=>oe(Z),"aria-label":`× ${Z}`,children:[U>=3&&x.jsx("span",{className:"star",children:x.jsx(Sn,{size:28})}),x.jsx("span",{className:"n",children:Z}),x.jsx("span",{className:"pips",children:[0,1,2].map(ae=>x.jsx("i",{className:ae<U?"done":""},ae))})]},Z)}),x.jsxs("button",{className:`tp-tile mix${o.length?"":" locked"}`,disabled:!o.length,onClick:()=>oe("mix"),title:o.length?void 0:i.mixLocked,"aria-label":o.length?i.mix:i.mixLocked,children:[x.jsx("span",{className:"n",children:i.mix}),o.length?x.jsxs("span",{className:"pips",children:[x.jsx("i",{className:"done"}),x.jsx("i",{className:"done"}),x.jsx("i",{className:"done"})]}):x.jsx("span",{className:"lock",children:x.jsx(fp,{})})]})]}),!o.length&&x.jsx("p",{className:"hint",children:i.mixLocked})]})}),_&&x.jsx("div",{className:"bp-overlay",children:x.jsxs("div",{className:"bp-done",role:"dialog","aria-modal":"true",children:[x.jsx("h2",{children:i.roundTitle}),x.jsx("div",{className:"bp-done-stars",children:Array.from({length:Math.min(f,8)},(Z,U)=>x.jsx("span",{style:{animationDelay:`${U*.1}s`},children:x.jsx(Sn,{size:36})},U))}),x.jsx("p",{children:i.roundStars(f)}),_.line&&x.jsx("div",{className:"unlock",children:_.line}),x.jsxs("div",{className:"row",children:[x.jsx("button",{className:"mb-btn quiet",onClick:()=>{M(null),l(null),d([]),m(null)},children:i.pickTable}),x.jsx("button",{className:"mb-btn quiet",onClick:()=>a!==null&&oe(a),children:i.again}),x.jsx("button",{className:"mb-btn",onClick:t,children:i.room})]})]})})]})}const De=t=>`<b>${t}</b>`;function i0(t){const e=t==="en",n=r=>r==="arrays"?e?["Build","Tens","Boxes"]:["Construir","Decenas","Cajas"]:e?["Plates","Rows","Memory"]:["Platos","Filas","Memoria"],i=r=>r==="arrays"?e?"Arrays":"Arreglos":e?"Sharing":"Repartir";return{back:e?"My room":"Mi cuarto",next:e?"Next":"Siguiente",again:e?"Play again":"Otra vez",room:e?"My room":"Mi cuarto",turn:e?"Turn it":"Girar",fix:e?"Fix it":"Corregir",yes:e?"Right":"Sí",no:e?"Not right":"No",peek:e?"Show me":"Muéstrame",deal:e?"Deal":"Repartir",left:e?"left over":"sobran",del:e?"Delete":"Borrar",check:e?"Check":"Revisar",roundTitle:e?"Round complete!":"¡Ronda completa!",roundStars:r=>e?`You earned ${r} ${r===1?"star":"stars"}`:`Ganaste ${r} ${r===1?"estrella":"estrellas"}`,stepUnlocked:(r,s)=>e?`${i(r)}: ${n(r)[s]} unlocked!`:`${i(r)}: ¡${n(r)[s]} desbloqueado!`,allDone:r=>e?`You finished every ${i(r)} step!`:`¡Terminaste todos los pasos de ${i(r)}!`,keepGoing:r=>e?`Get ${r} right on the first try to unlock the next step.`:`Acierta ${r} a la primera para abrir el siguiente paso.`,module:i,steps:n,tag:(r,s)=>{if(r==="abuddy"||r==="sbuddy")return e?`${s.name}'s turn`:`Turno de ${s.name}`;const o={build:0,tens:1,boxes:2,plates:0,rows:1,memory:2}[r];return n(r==="build"||r==="tens"||r==="boxes"?"arrays":"sharing")[o]},because:(r,s,o)=>e?`because ${r} × ${s} = ${o}`:`porque ${r} × ${s} = ${o}`,buddyAnswer:r=>e?`${r.name}'s answer`:`Respuesta de ${r.name}`,msg:(r,s)=>{const o=s.kind==="girl"?"she":"he";switch(r.k){case"buildAsk":return e?`Make ${De(r.r)} rows of ${De(r.c)}. Tap or drag on the dots.`:`Haz ${De(r.r)} filas de ${De(r.c)}. Toca o arrastra sobre los puntos.`;case"buildSwapped":return e?`That's ${De(r.c)} rows of ${De(r.r)}. We need ${De(r.r)} rows.`:`Eso son ${De(r.c)} filas de ${De(r.r)}. Necesitamos ${De(r.r)} filas.`;case"buildWrong":return e?`That's ${De(r.rr)} rows of ${De(r.cc)}. Make ${De(r.r)} rows of ${De(r.c)}.`:`Eso son ${De(r.rr)} filas de ${De(r.cc)}. Haz ${De(r.r)} filas de ${De(r.c)}.`;case"buildOk":return e?`${De(r.r)} rows of ${De(r.c)}! How many dots?`:`¡${De(r.r)} filas de ${De(r.c)}! ¿Cuántos puntos hay?`;case"turned":return e?`Turned: ${De(r.c)} rows of ${De(r.r)}. Still ${De(r.n)} dots!`:`Girado: ${De(r.c)} filas de ${De(r.r)}. ¡Siguen siendo ${De(r.n)} puntos!`;case"tensAsk":return e?"Split off the ten! First the blue part.":"¡Separa la decena! Primero la parte azul.";case"tensB":return e?"Now the green part.":"Ahora la parte verde.";case"sum":return e?"Put them together.":"Júntalos.";case"boxesAsk":return e?`Split ${De(r.a)} into tens and ones. First the blue box.`:`Parte ${De(r.a)} en decenas y unidades. Primero la caja azul.`;case"boxesB":return e?"Now the green box.":"Ahora la caja verde.";case"abuddyAsk":return e?`${s.name} tried this one. ${De(`Tap the box ${o} got wrong.`)}`:`${s.name} hizo esta. ${De("Toca la caja que tiene mal.")}`;case"abuddyNope":return e?"That box is right. Look at the blue one.":"Esa caja está bien. Mira la azul.";case"abuddyFound":return e?`Yes! ${o==="she"?"She":"He"} did ${De(`${r.t/10} × ${r.b}`)} but it's ${De(`${r.t} × ${r.b}`)}. Help ${s.name} fix it.`:`¡Sí! Hizo ${De(`${r.t/10} × ${r.b}`)} pero es ${De(`${r.t} × ${r.b}`)}. Ayuda a ${s.name} a corregirlo.`;case"platesAsk":return e?`Share ${De(r.n)} cookies on ${De(r.k2)} plates. Tap the jar to deal.`:`Reparte ${De(r.n)} galletas en ${De(r.k2)} platos. Toca el frasco para repartir.`;case"dealing":return e?`Keep dealing… ${De(r.left)} left.`:`Sigue repartiendo… quedan ${De(r.left)}.`;case"dealtEven":return e?"All shared! How many on each plate?":"¡Todo repartido! ¿Cuántas hay en cada plato?";case"dealtLeft":return e?`Only ${De(r.left)} left, not enough for everyone! How many on each plate?`:`Solo quedan ${De(r.left)}, ¡no alcanza para todos! ¿Cuántas hay en cada plato?`;case"leftAsk":return e?"And how many are left over?":"¿Y cuántas sobran?";case"rowsAsk":return e?`${De(r.n)} dots in rows of ${De(r.k2)}. Tap to add rows. How many rows?`:`${De(r.n)} puntos en filas de ${De(r.k2)}. Toca para añadir filas. ¿Cuántas filas?`;case"rowsCount":return e?`Keep going… ${De(r.n)}`:`Sigue… ${De(r.n)}`;case"rowsDone":return e?`${De(r.n)}! Now count the rows.`:`¡${De(r.n)}! Ahora cuenta las filas.`;case"rowsOver":return e?`That's more than ${De(r.n)}. Tap the last row to take it away.`:`Eso es más de ${De(r.n)}. Toca la última fila para quitarla.`;case"countRows":return e?`Add rows until you reach ${De(r.n)}, then count them.`:`Añade filas hasta llegar a ${De(r.n)} y luego cuéntalas.`;case"memAsk":return e?"Do you remember?":"¿Te acuerdas?";case"sbuddyAsk":return e?`${s.name} says ${De(`${r.n} ÷ ${r.k2} = ${r.w}`)}. Is ${o} right?`:`${s.name} dice ${De(`${r.n} ÷ ${r.k2} = ${r.w}`)}. ¿Tiene razón?`;case"sbuddyNo":return e?`Good catch! So what is ${De(`${r.n} ÷ ${r.k2}`)}?`:`¡Bien visto! Entonces, ¿cuánto es ${De(`${r.n} ÷ ${r.k2}`)}?`;case"lookAgain":return e?"Look again.":"Mira otra vez.";case"tryAgain":return e?"Almost! Try again.":"¡Casi! Intenta otra vez.";case"thanks":return e?`${s.name} says thanks!`:`¡${s.name} te da las gracias!`;case"done":return e?"You did it!":"¡Lo lograste!"}}}}const d2={en:i0("en"),es:i0("es")},jn=t=>({...t,answers:t.answers.slice(),vals:t.vals.slice(),plates:t.plates.slice(),sel:t.sel?{...t.sel}:null}),Wh=6,Dl=8;function Ju(t){const e={fact:t,kind:t.kind,phase:"answer",answers:[],cur:0,vals:[],typed:"",gate:!0,slips:0,wrong:0,msg:{k:"memAsk"},sel:null,ok:!1,turned:!1,tensPart:0,onesPart:0,picked:null,left:0,plates:[],rowsN:0,peek:!1,peekReady:!1};switch(t.kind){case"build":e.gate=!1,e.answers=[t.r*t.c],e.msg={k:"buildAsk",r:t.r,c:t.c};break;case"tens":e.answers=[10*t.r,(t.n-10)*t.r,t.n*t.r],e.msg={k:"tensAsk"};break;case"boxes":case"abuddy":e.tensPart=Math.floor(t.a/10)*10,e.onesPart=t.a%10,e.answers=[e.tensPart*t.b,e.onesPart*t.b,t.a*t.b],t.kind==="abuddy"?(e.phase="find",e.gate=!1,e.msg={k:"abuddyAsk"}):e.msg={k:"boxesAsk",a:t.a};break;case"plates":{e.gate=!1,e.left=t.n,e.plates=Array(t.k).fill(0);const n=t.n%t.k;e.answers=n?[Math.floor(t.n/t.k),n]:[t.n/t.k],e.msg={k:"platesAsk",n:t.n,k2:t.k};break}case"rows":e.answers=[t.n/t.k],e.msg={k:"rowsAsk",n:t.n,k2:t.k};break;case"memory":e.answers=[t.n/t.k],e.msg={k:"memAsk"};break;case"sbuddy":e.answers=[t.n/t.k],e.phase="judge",e.gate=!1,e.msg={k:"sbuddyAsk",n:t.n,k2:t.k,w:t.claim};break}return e}function xs(t,e){if(t.phase!=="answer"||!t.gate)return{s:t,fx:[]};if(e==="go")return h2(t);const n=jn(t);return e==="del"?n.typed?(n.typed=n.typed.slice(0,-1),{s:n,fx:[{t:"sfx",name:"keypad-delete"}]}):{s:t,fx:[]}:!/^[0-9]$/.test(e)||n.typed.length>=3?{s:t,fx:[]}:(n.typed=n.typed==="0"?e:n.typed+e,{s:n,fx:[{t:"sfx",name:"keypad-tap"}]})}function h2(t){if(!t.typed)return{s:t,fx:[]};const e=jn(t),n=Number(e.typed);if(e.typed="",n===e.answers[e.cur]){if(e.vals[e.cur]=n,e.cur<e.answers.length-1){e.cur++;const r=[{t:"sfx",name:"answer-correct"},{t:"buddy",mood:"happy"}];return e.kind==="tens"?(e.msg=e.cur===1?{k:"tensB"}:{k:"sum"},e.cur===1&&r.push({t:"sfx",name:"split-array"})):e.kind==="boxes"||e.kind==="abuddy"?e.msg=e.cur===1?{k:"boxesB"}:{k:"sum"}:e.kind==="plates"&&(e.msg={k:"leftAsk"}),{s:e,fx:r}}return f2(e)}e.wrong++,e.slips++;const i=[{t:"shake",target:"slot"},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"dots"},{t:"voice",name:"hmm"}];return e.kind==="rows"&&e.wrong>=2?e.msg={k:"countRows",n:e.fact.n}:e.msg={k:"tryAgain"},(e.kind==="memory"||e.kind==="sbuddy")&&!e.peek&&(e.peekReady=!0),{s:e,fx:i}}function f2(t){t.phase="done",t.gate=!1;const e=t.kind==="abuddy"||t.kind==="sbuddy";return t.msg=e?{k:"thanks"}:{k:"done"},{s:t,fx:[{t:"sfx",name:t.slips===0?"answer-correct":"answer-correct-retry"},{t:"buddy",mood:e?"thanks":"happy",emote:e?"heart":"star"},{t:"voice",name:e?"thanks":"happy"},{t:"sfx",name:"star-earn"},{t:"solved",firstTry:t.slips===0}]}}function r0(t,e,n){return t.kind!=="build"||t.ok||t.sel&&t.sel.r===e&&t.sel.c===n?t:{...jn(t),sel:{r:e,c:n}}}function p2(t,e,n){if(t.kind!=="build"||t.ok)return{s:t,fx:[]};const i=jn(t);i.sel={r:e,c:n};const r=i.fact;return e===r.r&&n===r.c?(i.ok=!0,i.gate=!0,i.msg={k:"buildOk",r:e,c:n},{s:i,fx:[{t:"sfx",name:"block-drop"},{t:"buddy",mood:"curious",emote:"!"},{t:"voice",name:"curious"}]}):(i.slips++,i.msg=e===r.c&&n===r.r?{k:"buildSwapped",r:r.r,c:r.c}:{k:"buildWrong",r:r.r,c:r.c,rr:e,cc:n},{s:i,fx:[{t:"sfx",name:"cant-place"},{t:"buddy",mood:"think",emote:"?"}]})}function m2(t){if(t.kind!=="build"||t.phase!=="done")return{s:t,fx:[]};const e=jn(t);return e.turned=!e.turned,e.msg=e.turned?{k:"turned",r:e.fact.r,c:e.fact.c,n:e.fact.r*e.fact.c}:{k:"done"},{s:e,fx:[{t:"sfx",name:"item-rotate"}]}}const Zu=t=>t.tensPart/10*t.fact.b;function s0(t,e){if(t.phase!=="find")return{s:t,fx:[]};const n=jn(t);return e==="t"?(n.picked="t",n.msg={k:"abuddyFound",t:n.tensPart,b:n.fact.b},{s:n,fx:[{t:"sfx",name:"answer-correct"},{t:"buddy",mood:"oops",emote:"drop"},{t:"voice",name:"oops"}]}):(n.slips++,n.msg={k:"abuddyNope"},{s:n,fx:[{t:"shake",target:"box"},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"?"}]})}function g2(t){if(t.phase!=="find"||!t.picked)return{s:t,fx:[]};const e=jn(t);return e.phase="answer",e.gate=!0,e.picked=null,e.slips=0,e.msg={k:"boxesAsk",a:e.fact.a},{s:e,fx:[{t:"buddy",mood:"think",emote:"dots"}]}}function v2(t){if(t.kind!=="plates"||t.gate||t.phase!=="answer")return{s:t,fx:[]};const e=t.fact.k;if(t.left<e)return{s:t,fx:[]};const n=jn(t);n.left-=e,n.plates=n.plates.map(r=>r+1);const i=[{t:"sfx",name:"deal-slide"},{t:"sfx",name:"deal-land"}];return n.left===0?(n.gate=!0,n.msg={k:"dealtEven"},i.push({t:"buddy",mood:"curious",emote:"!"})):n.left<e?(n.gate=!0,n.msg={k:"dealtLeft",left:n.left},i.push({t:"buddy",mood:"curious",emote:"?"},{t:"voice",name:"curious"})):n.msg={k:"dealing",left:n.left},{s:n,fx:i}}const _2=t=>t.kind==="rows"||(t.kind==="memory"||t.kind==="sbuddy")&&t.peek;function o0(t,e){if(t.phase==="done"||!_2(t))return{s:t,fx:[]};const{n,k:i}=t.fact,r=t.rowsN*i>n,s=jn(t);if(e&&r)s.rowsN--;else if(!e&&s.rowsN<n/i+2)s.rowsN++;else return{s:t,fx:[]};const o=s.rowsN*i;s.msg=o===n?{k:"rowsDone",n}:o>n?{k:"rowsOver",n}:{k:"rowsCount",n:o};const a=[{t:"sfx",name:"count-tick",semitones:Math.min(19,(s.rowsN-1)*2)}];return o===n&&a.push({t:"buddy",mood:"curious",emote:"!"}),{s,fx:a}}function x2(t){if(t.peek||t.phase==="done")return{s:t,fx:[]};const e=jn(t);return e.peek=!0,e.peekReady=!1,e.slips++,e.msg={k:"rowsAsk",n:e.fact.n,k2:e.fact.k},{s:e,fx:[{t:"sfx",name:"hint-start"},{t:"buddy",mood:"curious",emote:"!"},{t:"voice",name:"curious"}]}}function y2(t){return t.peek||t.peekReady||t.phase==="done"?t:{...jn(t),peekReady:!0}}function a0(t,e){if(t.phase!=="judge")return{s:t,fx:[]};const n=jn(t);return e?(n.peek=!0,n.slips++,n.msg={k:"lookAgain"},{s:n,fx:[{t:"shake",target:"board"},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"?"}]}):(n.phase="answer",n.gate=!0,n.msg={k:"sbuddyNo",n:n.fact.n,k2:n.fact.k},{s:n,fx:[{t:"sfx",name:"answer-correct"},{t:"buddy",mood:"oops",emote:"drop"},{t:"voice",name:"oops"}]})}const S2=5,l0=4,M2={arrays:["build","tens","boxes"],sharing:["plates","rows","memory"]},zt=(t,e)=>t+Math.floor(Math.random()*(e-t+1));function w2(t,e){switch(t){case"build":return{kind:t,r:zt(2,Wh),c:zt(2,Dl)};case"tens":return{kind:t,r:zt(2,6),n:zt(11,19)};case"boxes":return{kind:t,a:zt(2,9)*10+zt(1,9),b:zt(2,9)};case"abuddy":{const n=zt(2,9);let i=zt(1,9);for(;i===n;)i=zt(1,9);return{kind:t,a:n*10+i,b:zt(2,9)}}case"plates":{const n=zt(2,5),i=zt(2,5);return{kind:t,k:n,n:n*i+(e===3?zt(1,n-1):0)}}case"rows":case"memory":{const n=zt(2,9),i=zt(2,9);return{kind:t,k:n,n:n*i}}case"sbuddy":{const n=zt(2,9),i=zt(2,9);return{kind:t,k:n,n:n*i,claim:i<=2||Math.random()<.5?i+1:i-1}}}}function c0(t,e){const n=M2[t][Math.min(2,Math.max(0,e))],i=[],r=new Set;for(;i.length<S2;){const s=i.length;let o=n;s===2&&n==="boxes"&&(o="abuddy"),s===2&&n==="memory"&&(o="sbuddy");const a=w2(o,s),l=JSON.stringify({...a,claim:void 0});r.has(l)||(r.add(l),i.push(a))}return i}const E2=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),T2={"?":x.jsx("span",{style:{color:"var(--cobalt)"},children:"?"}),"!":x.jsx("span",{style:{color:"var(--tomato)"},children:"!"}),dots:x.jsx("span",{style:{color:"var(--ink-soft)",letterSpacing:2,fontSize:26},children:"•••"}),star:x.jsx(Sn,{size:30}),heart:x.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{d:"M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z",fill:"#F64034"})}),drop:x.jsx("svg",{width:"26",height:"30",viewBox:"0 0 20 24","aria-hidden":"true",children:x.jsx("path",{d:"M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z",fill:"#70BCD6"})})},b2=5e3;function A2({module:t,onExit:e,onSolved:n}){const i=ts(),r=d2[i.lang],s=re.useMemo(()=>({name:E2(i.name||"Buddy"),kind:i.kind}),[i.name,i.kind]),o=Math.min(3,Math.max(0,i[t]??0)),a=Math.min(2,o),[l,c]=re.useState(()=>c0(t,a)),[d,p]=re.useState(0),[u,h]=re.useState(()=>Ju(l[0])),[m,y]=re.useState(0),[g,f]=re.useState(0),[v,_]=re.useState(null),M=re.useRef(null),P=re.useRef(null),A=re.useRef(null),[T,N]=re.useState(null),K=re.useRef(0);re.useEffect(()=>{if(!M.current)return;let L=null;try{L=new pp(M.current,i.kind,1)}catch{L=null}P.current=L;let D=0;const V=()=>{if(L&&A.current){const ee=L.headPos();A.current.style.left=`${ee.x}px`,A.current.style.top=`${ee.y}px`}D=requestAnimationFrame(V)};return D=requestAnimationFrame(V),pi(`buddy${i.kind}-hello`),()=>{cancelAnimationFrame(D),L==null||L.dispose(),P.current=null}},[]),re.useEffect(()=>{var L;return(L=P.current)==null?void 0:L.setKind(i.kind)},[i.kind]),re.useEffect(()=>()=>clearTimeout(K.current),[]);const S=re.useCallback(L=>{N(L),clearTimeout(K.current),K.current=window.setTimeout(()=>N(null),1600)},[]),E=re.useRef(null),[j,F]=re.useState({w:600,h:400});re.useLayoutEffect(()=>{const L=E.current;if(!L)return;const D=new ResizeObserver(()=>F({w:L.clientWidth,h:L.clientHeight}));return D.observe(L),()=>D.disconnect()},[]);const X=j.h>j.w*.9,ie=(L,D,V=.55)=>{const ee=X?j.w-60:j.w*V,ce=X?j.h*.55:j.h-40;return Math.max(10,Math.min(34,ee/(D*1.38),ce/(L*1.38)))},$=re.useRef(null),le=re.useRef(null),[k,se]=re.useState(0),te=re.useCallback(()=>{var C,w;const L=(C=le.current)==null?void 0:C.getBoundingClientRect(),D=(w=$.current)==null?void 0:w.getBoundingClientRect();if(!L||!D){ua(1);return}const V=document.createElement("div");V.className="bp-flystar",V.innerHTML='<svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#FBC426" stroke="#D99A0F" stroke-width="1.6" stroke-linejoin="round"/></svg>';const ee=L.left+L.width/2-22,ce=L.top+L.height/2-22;V.style.left=`${ee}px`,V.style.top=`${ce}px`,document.body.appendChild(V),requestAnimationFrame(()=>requestAnimationFrame(()=>{V.style.transform=`translate(${D.left+12-ee}px, ${D.top+2-ce}px) scale(.6)`,V.style.opacity="0"})),window.setTimeout(()=>{V.remove(),ua(1),se(W=>W+1)},820)},[]),oe=re.useCallback(L=>{var D,V;for(const ee of L.fx)switch(ee.t){case"sfx":xt(ee.name,ee.semitones!==void 0?{semitones:ee.semitones,variance:0}:void 0);break;case"voice":pi(`buddy${i.kind}-${ee.name}`);break;case"buddy":(D=P.current)==null||D.react(ee.mood),ee.emote&&S(ee.emote);break;case"shake":{const ce={slot:".tp-slot.active",board:".sa-board",box:".sa-box.o"}[ee.target],C=(V=le.current)==null?void 0:V.querySelector(ce);C&&(C.classList.remove("bp-shake"),C.offsetWidth,C.classList.add("bp-shake"));break}case"solved":f(ce=>ce+1),ee.firstTry&&y(ce=>ce+1),n==null||n(ee.firstTry),te();break}h(L.s)},[i.kind,S,te,n]);re.useEffect(()=>{if(u.kind!=="memory"||u.phase!=="answer"||u.peek||u.peekReady)return;const L=window.setTimeout(()=>h(D=>y2(D)),b2);return()=>clearTimeout(L)},[u]);const be=re.useRef(!1),Be=(L,D)=>{const V=document.elementFromPoint(L,D);return V!=null&&V.dataset.r?{r:Number(V.dataset.r),c:Number(V.dataset.c)}:null},Q=re.useRef(u);Q.current=u,re.useEffect(()=>{const L=()=>{if(!be.current)return;be.current=!1;const D=Q.current;D.sel&&!D.ok&&oe(p2(D,D.sel.r,D.sel.c))};return window.addEventListener("pointerup",L),window.addEventListener("pointercancel",L),()=>{window.removeEventListener("pointerup",L),window.removeEventListener("pointercancel",L)}},[oe]);const fe=re.useCallback(()=>{const L=Math.min(2,Math.max(0,i[t]??0)),D=c0(t,L);c(D),p(0),y(0),f(0),_(null),h(Ju(D[0]))},[i,t]),_e=re.useCallback(()=>{var D,V;if(xt("sheet-close"),d+1<l.length){p(d+1),h(Ju(l[d+1])),(D=P.current)==null||D.react("idle");return}let L=null;o<3&&(m>=l0?(Fn(ee=>({...ee,[t]:Math.max(ee[t]??0,o+1)})),L=o+1>=3?r.allDone(t):r.stepUnlocked(t,o+1)):L=r.keepGoing(l0)),_({line:L}),xt("round-complete"),pi(`buddy${i.kind}-cheer`),(V=P.current)==null||V.react("happy"),S("star")},[d,l,o,m,t,r,i.kind,S]);re.useEffect(()=>{const L=D=>{v||(/^[0-9]$/.test(D.key)?oe(xs(u,D.key)):D.key==="Backspace"?oe(xs(u,"del")):D.key==="Enter"&&(u.phase==="done"?_e():oe(xs(u,"go"))))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[u,oe,_e,v]);const G=u.fact,Z=u.phase==="done";function U(L){if(u.vals[L]!==void 0)return x.jsx("span",{className:"tp-slot ok",children:u.vals[L]});const D=!Z&&u.gate&&L===u.cur;return x.jsx("span",{className:`tp-slot${D?" active":""}`,children:D?u.typed:""})}function ae(L,D,V=[]){const ee=Z?"":L===u.cur&&u.gate?" on":L>u.cur?" later":"";return x.jsxs("div",{className:`tp-eq${ee}`,children:[D.map((ce,C)=>x.jsx("span",{className:V[C]??"",children:ce},C)),x.jsx("span",{children:"="}),U(L)]},L)}function he(L,D,V={}){const ee=ie(L,D),ce=[];for(let C=0;C<L;C++){const w=[];for(let W=0;W<D;W++){V.split&&W===10&&w.push(x.jsx("b",{className:"sa-vs"},"vs"));const ue=V.split?(W<10?"t":"o")+(!Z&&(u.cur===0&&W>=10||u.cur===1&&W<10)?" dimd":""):"";w.push(x.jsx("i",{className:ue},W))}ce.push(x.jsx("div",{className:`tp-row${V.lit?" lit":""}`,children:w},C))}return{out:ce,d:ee}}let q=null,R=null;switch(u.kind){case"build":{if(u.ok){q=ae(0,[G.r,"×",G.c]);const L=he(G.r,G.c,{lit:!0});R=x.jsx("div",{className:`tp-arr sa-turnable${u.turned?" turned":""}`,style:{"--d":`${L.d}px`,"--gap":`${Math.round(L.d*.32)}px`,marginRight:0},children:L.out})}else{const L=ie(Wh,Dl,.5),D=[];for(let V=1;V<=Wh;V++)for(let ee=1;ee<=Dl;ee++){const ce=u.sel&&V<=u.sel.r&&ee<=u.sel.c,C=u.sel&&V===u.sel.r&&ee===u.sel.c;D.push(x.jsx("span",{className:`sa-peg${ce?" on":""}${C?" corner":""}`,"data-r":V,"data-c":ee},`${V}-${ee}`))}q=x.jsxs("div",{className:"tp-eq",children:[x.jsx("span",{children:G.r}),x.jsx("span",{children:"×"}),x.jsx("span",{children:G.c})]}),R=x.jsxs("div",{className:"sa-board sa-pegs",style:{"--d":`${L}px`,"--gap":`${Math.round(L*.32)}px`,gridTemplateColumns:`repeat(${Dl}, var(--d))`},onPointerDown:V=>{be.current=!0;const ee=Be(V.clientX,V.clientY);ee&&h(ce=>r0(ce,ee.r,ee.c))},onPointerMove:V=>{if(!be.current)return;const ee=Be(V.clientX,V.clientY);ee&&h(ce=>r0(ce,ee.r,ee.c))},role:"grid","aria-label":`${G.r} × ${G.c}`,children:[D,u.sel&&x.jsxs("span",{className:"sa-size",children:[u.sel.r," × ",u.sel.c]})]})}break}case"tens":{const L=G.n-10;q=x.jsxs("div",{className:"tp-eqs many",children:[x.jsxs("div",{className:"sa-head",children:[G.n," × ",G.r]}),ae(0,[10,"×",G.r],["t"]),ae(1,[L,"×",G.r],["o"]),ae(2,[10*G.r,"+",L*G.r])]});const D=he(G.r,G.n,{split:!0});R=x.jsx("div",{className:"tp-arr",style:{"--d":`${D.d}px`,"--gap":`${Math.round(D.d*.32)}px`,marginRight:0},children:D.out});break}case"boxes":case"abuddy":{const L=u.phase==="find",D=Math.min(72,Math.max(55,u.tensPart/G.a*100)),V=Math.min(j.w*(X?.9:.5),460),ee=L?x.jsx("span",{className:"bp-marker",children:Zu(u)}):U(0),ce=L?x.jsx("span",{className:"bp-marker",children:u.onesPart*G.b}):U(1);R=x.jsxs("div",{className:"sa-boxes-wrap",children:[x.jsxs("div",{className:"top",style:{width:V},children:[x.jsx("span",{className:"t",style:{width:`${D}%`},children:u.tensPart}),x.jsx("span",{className:"o",style:{width:`${100-D}%`},children:u.onesPart})]}),x.jsx("div",{className:"side",children:G.b}),x.jsxs("div",{className:"sa-boxes",style:{width:V},children:[x.jsx("button",{className:`sa-box t${!L&&!Z&&u.cur===0?" on":""}${u.picked==="t"?" picked":""}`,style:{width:`${D}%`},disabled:!L,onClick:()=>oe(s0(u,"t")),children:ee}),x.jsx("button",{className:`sa-box o${!L&&!Z&&u.cur===1?" on":""}`,style:{width:`${100-D}%`},disabled:!L,onClick:()=>oe(s0(u,"o")),children:ce})]})]}),q=L?x.jsxs("div",{className:"tp-eqs many",children:[x.jsxs("div",{className:"sa-head",children:[G.a," × ",G.b]}),x.jsxs("div",{className:"sa-buddyline",children:[x.jsxs("span",{children:[r.buddyAnswer({name:i.name||"Buddy",kind:i.kind}),":"]}),x.jsxs("span",{className:"bp-marker",children:[Zu(u)," + ",u.onesPart*G.b," = ",Zu(u)+u.onesPart*G.b]})]})]}):x.jsxs("div",{className:"tp-eqs many",children:[x.jsxs("div",{className:"sa-head",children:[G.a," × ",G.b]}),x.jsxs("div",{className:`tp-eq${!Z&&u.cur===0?" on":""}`,children:[x.jsx("span",{className:"t",children:u.tensPart}),x.jsx("span",{children:"×"}),x.jsx("span",{children:G.b}),x.jsx("span",{children:"="}),x.jsx("span",{children:u.vals[0]??"?"})]}),x.jsxs("div",{className:`tp-eq${!Z&&u.cur===1?" on":!Z&&u.cur<1?" later":""}`,children:[x.jsx("span",{className:"o",children:u.onesPart}),x.jsx("span",{children:"×"}),x.jsx("span",{children:G.b}),x.jsx("span",{children:"="}),x.jsx("span",{children:u.vals[1]??"?"})]}),ae(2,[u.answers[0],"+",u.answers[1]])]});break}case"plates":{const L=u.gate&&u.left<G.k;R=x.jsxs("div",{className:"sa-share",children:[x.jsxs("button",{className:`sa-jar${u.gate?" empty":""}`,onClick:()=>oe(v2(u)),disabled:u.gate,"aria-label":r.deal,children:[Array.from({length:u.left},(D,V)=>x.jsx("span",{className:`sa-cookie${L?" left":""}`},V)),!u.gate&&x.jsx("span",{className:"hint",children:r.deal})]}),x.jsx("div",{className:"sa-plates",children:u.plates.map((D,V)=>x.jsx("div",{className:"sa-plate",children:Array.from({length:D},(ee,ce)=>x.jsx("span",{className:"sa-cookie fly"},ce))},V))})]}),q=u.answers.length>1?x.jsxs("div",{className:"tp-eqs many",children:[ae(0,[G.n,"÷",G.k]),x.jsxs("div",{className:`tp-eq${!Z&&u.cur===1?" on":Z?"":" later"}`,children:[x.jsx("span",{children:r.left}),U(1)]})]}):x.jsx("div",{className:"tp-eqs",children:ae(0,[G.n,"÷",G.k])});break}default:{const L=u.kind==="rows"||u.peek;if(q=u.phase==="judge"?x.jsxs("div",{className:"tp-eq",children:[x.jsx("span",{children:G.n}),x.jsx("span",{children:"÷"}),x.jsx("span",{children:G.k}),x.jsx("span",{children:"="}),x.jsx("span",{className:"tp-slot buddy",children:G.claim})]}):x.jsxs("div",{className:"tp-eqs",children:[ae(0,[G.n,"÷",G.k]),Z&&x.jsx("div",{className:"sa-because",children:r.because(G.k,G.n/G.k,G.n)})]}),L){const D=ie(G.n/G.k+2,G.k+2),V=[];for(let ee=0;ee<u.rowsN;ee++){const ce=ee===u.rowsN-1;V.push(x.jsxs("div",{className:`tp-row lit${(ee+1)*G.k>G.n?" minus":""}`,onClick:C=>{ce&&u.rowsN*G.k>G.n&&(C.stopPropagation(),oe(o0(u,!0)))},children:[Array.from({length:G.k},(C,w)=>x.jsx("i",{},w)),x.jsx("span",{className:"lab",children:(ee+1)*G.k})]},ee))}R=x.jsxs("div",{className:"sa-board sa-rows",style:{"--d":`${D}px`,"--gap":`${Math.round(D*.32)}px`},onClick:()=>oe(o0(u,!1)),children:[x.jsx("span",{className:"goal",children:G.n}),V,!Z&&x.jsx("div",{className:"add",children:Array.from({length:G.k},(ee,ce)=>x.jsx("i",{},ce))})]})}else u.peekReady&&!Z&&(R=x.jsxs("button",{className:"tp-peek",onClick:()=>oe(x2(u)),children:[x.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24","aria-hidden":"true",children:[x.jsx("path",{d:"M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7z",fill:"none",stroke:"currentColor",strokeWidth:"2.4"}),x.jsx("circle",{cx:"12",cy:"12",r:"3.2",fill:"currentColor"})]}),r.peek]}))}}const I=(()=>{switch(u.kind){case"build":return`${G.r} × ${G.c} = ${G.c} × ${G.r} = ${G.r*G.c}`;case"tens":return`${G.n} × ${G.r} = ${G.n*G.r}`;case"boxes":case"abuddy":return`${G.a} × ${G.b} = ${G.a*G.b}`;case"plates":return u.answers.length>1?`${G.n} ÷ ${G.k} = ${u.answers[0]}, ${r.left} ${u.answers[1]}`:`${G.n} ÷ ${G.k} = ${u.answers[0]}`;default:return`${G.n} ÷ ${G.k} = ${G.n/G.k}`}})();return x.jsxs("div",{className:"mb bp",children:[x.jsxs("header",{className:"bp-hud",children:[x.jsxs("button",{className:"mb-chip",onClick:e,"aria-label":r.back,children:[x.jsx("img",{src:"/mark-face.svg",alt:"",width:34,height:38,style:{margin:"-4px 0 -2px"}}),x.jsx("span",{className:"label",children:r.back})]}),x.jsx("div",{className:"bp-dots","aria-label":`${d+1} / ${l.length}`,children:l.map((L,D)=>x.jsx("span",{className:`bp-dot ${D<d||D===d&&Z?"done":D===d?"now":""}`},D))}),x.jsxs("span",{ref:$,className:`mb-chip${k?" bump":""}`,children:[x.jsx(Sn,{}),i.stars]},k)]}),x.jsxs("main",{className:"bp-stage",children:[x.jsxs("div",{className:"bp-buddy",children:[x.jsx("canvas",{ref:M,"aria-hidden":"true"}),x.jsx("div",{ref:A,className:`bp-emote${T?" on":""}`,children:T&&T2[T]})]}),x.jsxs("section",{className:"bp-card",ref:le,children:[x.jsxs("div",{className:"bp-task","aria-live":"polite",children:[x.jsxs("span",{className:"tag",children:[r.module(t)," · ",r.tag(u.kind,s)]}),x.jsx("span",{dangerouslySetInnerHTML:{__html:r.msg(u.msg,s)}})]},JSON.stringify(u.msg)+i.lang),x.jsxs("div",{className:"tp-work",ref:E,children:[q,R]}),x.jsx("div",{children:Z?x.jsxs("div",{className:"bp-next",children:[x.jsx("span",{className:"bp-result",children:I}),u.kind==="build"&&x.jsxs("button",{className:"mb-btn quiet",onClick:()=>oe(m2(u)),children:["↻ ",r.turn]}),x.jsxs("button",{className:"mb-btn",onClick:_e,children:[r.next," →"]})]}):u.phase==="find"?x.jsx("div",{className:"bp-next",children:u.picked&&x.jsx("button",{className:"mb-btn secondary",onClick:()=>oe(g2(u)),children:r.fix})}):u.phase==="judge"?x.jsxs("div",{className:"bp-next",children:[x.jsxs("button",{className:"mb-btn tp-yes",onClick:()=>oe(a0(u,!0)),children:[x.jsx(so,{}),r.yes]}),x.jsxs("button",{className:"mb-btn tp-no",onClick:()=>oe(a0(u,!1)),children:["✕ ",r.no]})]}):x.jsxs("div",{className:`tp-pad${u.gate?"":" sa-off"}`,children:[["1","2","3","4","5","6","7","8","9","0"].map(L=>x.jsx("button",{className:"bp-key",onClick:()=>oe(xs(u,L)),children:L},L)),x.jsx("button",{className:"bp-key tp-del","aria-label":r.del,onClick:()=>oe(xs(u,"del")),children:x.jsxs("svg",{width:"28",height:"22",viewBox:"0 0 28 22","aria-hidden":"true",children:[x.jsx("path",{d:"M9 2h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-7-9z",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinejoin:"round"}),x.jsx("path",{d:"M13 7l7 8M20 7l-7 8",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]})}),x.jsx("button",{className:"bp-key tp-go","aria-label":r.check,onClick:()=>oe(xs(u,"go")),children:x.jsx(so,{size:26})})]})})]})]}),v&&x.jsx("div",{className:"bp-overlay",children:x.jsxs("div",{className:"bp-done",role:"dialog","aria-modal":"true",children:[x.jsx("h2",{children:r.roundTitle}),x.jsx("div",{className:"bp-done-stars",children:Array.from({length:Math.min(g,8)},(L,D)=>x.jsx("span",{style:{animationDelay:`${D*.1}s`},children:x.jsx(Sn,{size:36})},D))}),x.jsx("p",{children:r.roundStars(g)}),v.line&&x.jsx("div",{className:"unlock",children:v.line}),x.jsxs("div",{className:"row",children:[x.jsx("button",{className:"mb-btn quiet",onClick:fe,children:r.again}),x.jsx("button",{className:"mb-btn",onClick:e,children:r.room})]})]})})]})}const Mx="mathbuddy_stats";function C2(){try{const t=localStorage.getItem(Mx);if(t)return JSON.parse(t)}catch{}return{totalProblems:0,correctAnswers:0,currentStreak:0,bestStreak:0}}function R2(t){try{localStorage.setItem(Mx,JSON.stringify(t))}catch{}}function Qu(t){const e=C2(),n=t?e.currentStreak+1:0;R2({totalProblems:e.totalProblems+1,correctAnswers:e.correctAnswers+(t?1:0),currentStreak:n,bestStreak:Math.max(e.bestStreak,n)})}function P2(){const[t,e]=re.useState("room"),n=re.useCallback(()=>e("room"),[]);return x.jsxs(x.Fragment,{children:[t==="room"&&x.jsx(PC,{onPractice:e}),t==="borrow"&&x.jsx(YC,{onExit:n,onSolved:Qu}),t==="times"&&x.jsx(u2,{onExit:n,onSolved:Qu}),(t==="arrays"||t==="sharing")&&x.jsx(A2,{module:t,onExit:n,onSolved:Qu},t)]})}M_(document.getElementById("root")).render(x.jsx(re.StrictMode,{children:x.jsx(P2,{})}));
