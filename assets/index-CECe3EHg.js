(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var j0={exports:{}},ac={},W0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),u_=Symbol.for("react.portal"),d_=Symbol.for("react.fragment"),h_=Symbol.for("react.strict_mode"),f_=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),g_=Symbol.for("react.forward_ref"),v_=Symbol.for("react.suspense"),x_=Symbol.for("react.memo"),__=Symbol.for("react.lazy"),vp=Symbol.iterator;function y_(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var $0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X0=Object.assign,q0={};function eo(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||$0}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Y0(){}Y0.prototype=eo.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||$0}var Fh=kh.prototype=new Y0;Fh.constructor=kh;X0(Fh,eo.prototype);Fh.isPureReactComponent=!0;var xp=Array.isArray,K0=Object.prototype.hasOwnProperty,Oh={current:null},Z0={key:!0,ref:!0,__self:!0,__source:!0};function J0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K0.call(e,i)&&!Z0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:t,key:s,ref:o,props:r,_owner:Oh.current}}function S_(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function M_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _p=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?M_(""+t.key):e.toString(36)}function al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case u_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Dc(o,0):i,xp(r)?(n="",t!=null&&(n=t.replace(_p,"$&/")+"/"),al(r,e,n,"",function(c){return c})):r!=null&&(zh(r)&&(r=S_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_p,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Dc(s,a);o+=al(s,e,n,l,r)}else if(l=y_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Dc(s,a++),o+=al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function w_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},ll={transition:null},E_={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Oh};function Q0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=eo;qe.Fragment=d_;qe.Profiler=f_;qe.PureComponent=kh;qe.StrictMode=h_;qe.Suspense=v_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_;qe.act=Q0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=X0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)K0.call(e,l)&&!Z0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:m_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:p_,_context:t},t.Consumer=t};qe.createElement=J0;qe.createFactory=function(t){var e=J0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:g_,render:t}};qe.isValidElement=zh;qe.lazy=function(t){return{$$typeof:__,_payload:{_status:-1,_result:t},_init:w_}};qe.memo=function(t,e){return{$$typeof:x_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};qe.unstable_act=Q0;qe.useCallback=function(t,e){return ln.current.useCallback(t,e)};qe.useContext=function(t){return ln.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};qe.useEffect=function(t,e){return ln.current.useEffect(t,e)};qe.useId=function(){return ln.current.useId()};qe.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return ln.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};qe.useRef=function(t){return ln.current.useRef(t)};qe.useState=function(t){return ln.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return ln.current.useTransition()};qe.version="18.3.1";W0.exports=qe;var ue=W0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_=ue,T_=Symbol.for("react.element"),A_=Symbol.for("react.fragment"),C_=Object.prototype.hasOwnProperty,R_=b_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P_={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)C_.call(e,i)&&!P_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:T_,type:t,key:s,ref:o,props:r,_owner:R_.current}}ac.Fragment=A_;ac.jsx=eg;ac.jsxs=eg;j0.exports=ac;var v=j0.exports,tg={exports:{}},Nn={},ng={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,j){var K=N.length;N.push(j);e:for(;0<K;){var ne=K-1>>>1,Ae=N[ne];if(0<r(Ae,j))N[ne]=j,N[K]=Ae,K=ne;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var j=N[0],K=N.pop();if(K!==j){N[0]=K;e:for(var ne=0,Ae=N.length,Ge=Ae>>>1;ne<Ge;){var Z=2*(ne+1)-1,k=N[Z],ce=Z+1,te=N[ce];if(0>r(k,K))ce<Ae&&0>r(te,k)?(N[ne]=te,N[ce]=K,ne=ce):(N[ne]=k,N[Z]=K,ne=Z);else if(ce<Ae&&0>r(te,K))N[ne]=te,N[ce]=K,ne=ce;else break e}}return j}function r(N,j){var K=N.sortIndex-j.sortIndex;return K!==0?K:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,m=!1,p=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=N)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function M(N){if(S=!1,_(N),!p)if(n(l)!==null)p=!0,G(R);else{var j=n(c);j!==null&&z(M,j.startTime-N)}}function R(N,j){p=!1,S&&(S=!1,f(L),L=-1),m=!0;var K=d;try{for(_(j),h=n(l);h!==null&&(!(h.expirationTime>j)||N&&!E());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var Ae=ne(h.expirationTime<=j);j=t.unstable_now(),typeof Ae=="function"?h.callback=Ae:h===n(l)&&i(l),_(j)}else i(l);h=n(l)}if(h!==null)var Ge=!0;else{var Z=n(c);Z!==null&&z(M,Z.startTime-j),Ge=!1}return Ge}finally{h=null,d=K,m=!1}}var A=!1,b=null,L=-1,W=5,y=-1;function E(){return!(t.unstable_now()-y<W)}function V(){if(b!==null){var N=t.unstable_now();y=N;var j=!0;try{j=b(!0,N)}finally{j?H():(A=!1,b=null)}}else A=!1}var H;if(typeof x=="function")H=function(){x(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ee=$.port2;$.port1.onmessage=V,H=function(){ee.postMessage(null)}}else H=function(){g(V,0)};function G(N){b=N,A||(A=!0,H())}function z(N,j){L=g(function(){N(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){p||m||(p=!0,G(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var K=d;d=j;try{return N()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=d;d=N;try{return j()}finally{d=K}},t.unstable_scheduleCallback=function(N,j,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,N){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=K+Ae,N={id:u++,callback:j,priorityLevel:N,startTime:K,expirationTime:Ae,sortIndex:-1},K>ne?(N.sortIndex=K,e(c,N),n(l)===null&&N===n(c)&&(S?(f(L),L=-1):S=!0,z(M,K-ne))):(N.sortIndex=Ae,e(l,N),p||m||(p=!0,G(R))),N},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(N){var j=d;return function(){var K=d;d=j;try{return N.apply(this,arguments)}finally{d=K}}}})(ig);ng.exports=ig;var N_=ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_=ue,Pn=N_;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,Bo={};function Zr(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Bo[t]=e,t=0;t<e.length;t++)rg.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,D_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},Sp={};function I_(t){return ju.call(Sp,t)?!0:ju.call(yp,t)?!1:D_.test(t)?Sp[t]=!0:(yp[t]=!0,!1)}function U_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k_(t,e,n,i){if(e===null||typeof e>"u"||U_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);qt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Hh);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k_(e,n,r,i)&&(n=null),i||r===null?I_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=L_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),og=Symbol.for("react.context"),jh=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Ic;function Eo(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Uc=!1;function kc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function F_(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Wu:return"Profiler";case Gh:return"StrictMode";case $u:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case og:return(t.displayName||"Context")+".Consumer";case sg:return(t._context.displayName||"Context")+".Provider";case jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function O_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function z_(t){var e=lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=z_(t))}function cg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=lg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yu(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ug(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function Ku(t,e){ug(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(bo(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function dg(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B_=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){B_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var H_=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(t,e){if(e){if(H_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var id=null,Ps=null,Ns=null;function Ap(t){if(t=ha(t)){if(typeof id!="function")throw Error(de(280));var e=t.stateNode;e&&(e=hc(e),id(t.stateNode,t.type,e))}}function gg(t){Ps?Ns?Ns.push(t):Ns=[t]:Ps=t}function vg(){if(Ps){var t=Ps,e=Ns;if(Ns=Ps=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function xg(t,e){return t(e)}function _g(){}var Fc=!1;function yg(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return xg(t,e,n)}finally{Fc=!1,(Ps!==null||Ns!==null)&&(_g(),vg())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var rd=!1;if(Ci)try{var co={};Object.defineProperty(co,"passive",{get:function(){rd=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{rd=!1}function V_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Po=!1,Rl=null,Pl=!1,sd=null,G_={onError:function(t){Po=!0,Rl=t}};function j_(t,e,n,i,r,s,o,a,l){Po=!1,Rl=null,V_.apply(G_,arguments)}function W_(t,e,n,i,r,s,o,a,l){if(j_.apply(this,arguments),Po){if(Po){var c=Rl;Po=!1,Rl=null}else throw Error(de(198));Pl||(Pl=!0,sd=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cp(t){if(Jr(t)!==t)throw Error(de(188))}function $_(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Cp(r),t;if(s===i)return Cp(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function Mg(t){return t=$_(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=Pn.unstable_scheduleCallback,Rp=Pn.unstable_cancelCallback,X_=Pn.unstable_shouldYield,q_=Pn.unstable_requestPaint,At=Pn.unstable_now,Y_=Pn.unstable_getCurrentPriorityLevel,Xh=Pn.unstable_ImmediatePriority,bg=Pn.unstable_UserBlockingPriority,Nl=Pn.unstable_NormalPriority,K_=Pn.unstable_LowPriority,Tg=Pn.unstable_IdlePriority,lc=null,ci=null;function Z_(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:ey,J_=Math.log,Q_=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(J_(t)/Q_|0)|0}var Ea=64,ba=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ty(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ag(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rg,Yh,Pg,Ng,Lg,ad=!1,Ta=[],Ji=null,Qi=null,er=null,Go=new Map,jo=new Map,$i=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sy(t,e,n,i,r){switch(e){case"focusin":return Ji=uo(Ji,t,e,n,i,r),!0;case"dragenter":return Qi=uo(Qi,t,e,n,i,r),!0;case"mouseover":return er=uo(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,uo(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,uo(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function Dg(t){var e=Dr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Sg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ld(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nd=i,n.target.dispatchEvent(i),nd=null}else return e=ha(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Np(t,e,n){cl(t)&&n.delete(e)}function oy(){ad=!1,Ji!==null&&cl(Ji)&&(Ji=null),Qi!==null&&cl(Qi)&&(Qi=null),er!==null&&cl(er)&&(er=null),Go.forEach(Np),jo.forEach(Np)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,ad||(ad=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,oy)))}function Wo(t){function e(r){return ho(r,t)}if(0<Ta.length){ho(Ta[0],t);for(var n=1;n<Ta.length;n++){var i=Ta[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&ho(Ji,t),Qi!==null&&ho(Qi,t),er!==null&&ho(er,t),Go.forEach(e),jo.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&$i.shift()}var Ls=Ii.ReactCurrentBatchConfig,Dl=!0;function ay(t,e,n,i){var r=st,s=Ls.transition;Ls.transition=null;try{st=1,Kh(t,e,n,i)}finally{st=r,Ls.transition=s}}function ly(t,e,n,i){var r=st,s=Ls.transition;Ls.transition=null;try{st=4,Kh(t,e,n,i)}finally{st=r,Ls.transition=s}}function Kh(t,e,n,i){if(Dl){var r=ld(t,e,n,i);if(r===null)qc(t,e,i,Il,n),Pp(t,i);else if(sy(r,t,e,n,i))i.stopPropagation();else if(Pp(t,i),e&4&&-1<ry.indexOf(t)){for(;r!==null;){var s=ha(r);if(s!==null&&Rg(s),s=ld(t,e,n,i),s===null&&qc(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Il=null;function ld(t,e,n,i){if(Il=null,t=$h(i),t=Dr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y_()){case Xh:return 1;case bg:return 4;case Nl:case K_:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var Yi=null,Zh=null,ul=null;function Ug(){if(ul)return ul;var t,e=Zh,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ul=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function Lp(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:Lp,this.isPropagationStopped=Lp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=Ln(to),da=St({},to,{view:0,detail:0}),cy=Ln(da),zc,Bc,fo,cc=St({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(zc=t.screenX-fo.screenX,Bc=t.screenY-fo.screenY):Bc=zc=0,fo=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Dp=Ln(cc),uy=St({},cc,{dataTransfer:0}),dy=Ln(uy),hy=St({},da,{relatedTarget:0}),Hc=Ln(hy),fy=St({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Ln(fy),my=St({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gy=Ln(my),vy=St({},to,{data:0}),Ip=Ln(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yy[t])?!!e[t]:!1}function Qh(){return Sy}var My=St({},da,{key:function(t){if(t.key){var e=xy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_y[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wy=Ln(My),Ey=St({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Ln(Ey),by=St({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),Ty=Ln(by),Ay=St({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=Ln(Ay),Ry=St({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=Ln(Ry),Ny=[9,13,27,32],ef=Ci&&"CompositionEvent"in window,No=null;Ci&&"documentMode"in document&&(No=document.documentMode);var Ly=Ci&&"TextEvent"in window&&!No,kg=Ci&&(!ef||No&&8<No&&11>=No),kp=" ",Fp=!1;function Fg(t,e){switch(t){case"keyup":return Ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function Dy(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(Fp=!0,kp);case"textInput":return t=e.data,t===kp&&Fp?null:t;default:return null}}function Iy(t,e){if(vs)return t==="compositionend"||!ef&&Fg(t,e)?(t=Ug(),ul=Zh=Yi=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kg&&e.locale!=="ko"?null:e.data;default:return null}}var Uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uy[t.type]:e==="textarea"}function zg(t,e,n,i){gg(i),e=Ul(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,$o=null;function ky(t){Kg(t,0)}function uc(t){var e=ys(t);if(cg(e))return t}function Fy(t,e){if(t==="change")return e}var Bg=!1;if(Ci){var Vc;if(Ci){var Gc="oninput"in document;if(!Gc){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Gc=typeof zp.oninput=="function"}Vc=Gc}else Vc=!1;Bg=Vc&&(!document.documentMode||9<document.documentMode)}function Bp(){Lo&&(Lo.detachEvent("onpropertychange",Hg),$o=Lo=null)}function Hg(t){if(t.propertyName==="value"&&uc($o)){var e=[];zg(e,$o,t,$h(t)),yg(ky,e)}}function Oy(t,e,n){t==="focusin"?(Bp(),Lo=e,$o=n,Lo.attachEvent("onpropertychange",Hg)):t==="focusout"&&Bp()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc($o)}function By(t,e){if(t==="click")return uc(e)}function Hy(t,e){if(t==="input"||t==="change")return uc(e)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:Vy;function Xo(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ju.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,e){var n=Hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function Vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gy(t){var e=Gg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vp(n,s);var o=Vp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jy=Ci&&"documentMode"in document&&11>=document.documentMode,xs=null,cd=null,Do=null,ud=!1;function Gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||xs==null||xs!==Cl(i)||(i=xs,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&Xo(Do,i)||(Do=i,i=Ul(cd,"onSelect"),0<i.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},jc={},jg={};Ci&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function dc(t){if(jc[t])return jc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return jc[t]=e[n];return t}var Wg=dc("animationend"),$g=dc("animationiteration"),Xg=dc("animationstart"),qg=dc("transitionend"),Yg=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){Yg.set(t,e),Zr(e,[t])}for(var Wc=0;Wc<jp.length;Wc++){var $c=jp[Wc],Wy=$c.toLowerCase(),$y=$c[0].toUpperCase()+$c.slice(1);mr(Wy,"on"+$y)}mr(Wg,"onAnimationEnd");mr($g,"onAnimationIteration");mr(Xg,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(qg,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,W_(i,e,void 0,t),t.currentTarget=null}function Kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,a,c),s=l}}}if(Pl)throw t=sd,Pl=!1,sd=null,t}function ht(t,e){var n=e[md];n===void 0&&(n=e[md]=new Set);var i=t+"__bubble";n.has(i)||(Zg(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),Zg(n,t,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Ra]){t[Ra]=!0,rg.forEach(function(n){n!=="selectionchange"&&(Xy.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Xc("selectionchange",!1,e))}}function Zg(t,e,n,i){switch(Ig(e)){case 1:var r=ay;break;case 4:r=ly;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}yg(function(){var c=s,u=$h(n),h=[];e:{var d=Yg.get(t);if(d!==void 0){var m=Jh,p=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":m=wy;break;case"focusin":p="focus",m=Hc;break;case"focusout":p="blur",m=Hc;break;case"beforeblur":case"afterblur":m=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ty;break;case Wg:case $g:case Xg:m=py;break;case qg:m=Cy;break;case"scroll":m=cy;break;case"wheel":m=Py;break;case"copy":case"cut":case"paste":m=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Up}var S=(e&4)!==0,g=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var x=c,_;x!==null;){_=x;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,f!==null&&(M=Vo(x,f),M!=null&&S.push(Yo(x,M,_)))),g)break;x=x.return}0<S.length&&(d=new m(d,p,null,n,u),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==nd&&(p=n.relatedTarget||n.fromElement)&&(Dr(p)||p[Ri]))break e;if((m||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,m?(p=n.relatedTarget||n.toElement,m=c,p=p?Dr(p):null,p!==null&&(g=Jr(p),p!==g||p.tag!==5&&p.tag!==6)&&(p=null)):(m=null,p=c),m!==p)){if(S=Dp,M="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(S=Up,M="onPointerLeave",f="onPointerEnter",x="pointer"),g=m==null?d:ys(m),_=p==null?d:ys(p),d=new S(M,x+"leave",m,n,u),d.target=g,d.relatedTarget=_,M=null,Dr(u)===c&&(S=new S(f,x+"enter",p,n,u),S.target=_,S.relatedTarget=g,M=S),g=M,m&&p)t:{for(S=m,f=p,x=0,_=S;_;_=es(_))x++;for(_=0,M=f;M;M=es(M))_++;for(;0<x-_;)S=es(S),x--;for(;0<_-x;)f=es(f),_--;for(;x--;){if(S===f||f!==null&&S===f.alternate)break t;S=es(S),f=es(f)}S=null}else S=null;m!==null&&$p(h,d,m,S,!1),p!==null&&g!==null&&$p(h,g,p,S,!0)}}e:{if(d=c?ys(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var R=Fy;else if(Op(d))if(Bg)R=Hy;else{R=zy;var A=Oy}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=By);if(R&&(R=R(t,c))){zg(h,R,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Zu(d,"number",d.value)}switch(A=c?ys(c):window,t){case"focusin":(Op(A)||A.contentEditable==="true")&&(xs=A,cd=c,Do=null);break;case"focusout":Do=cd=xs=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,Gp(h,n,u);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Gp(h,n,u)}var b;if(ef)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else vs?Fg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(kg&&n.locale!=="ko"&&(vs||L!=="onCompositionStart"?L==="onCompositionEnd"&&vs&&(b=Ug()):(Yi=u,Zh="value"in Yi?Yi.value:Yi.textContent,vs=!0)),A=Ul(c,L),0<A.length&&(L=new Ip(L,t,null,n,u),h.push({event:L,listeners:A}),b?L.data=b:(b=Og(n),b!==null&&(L.data=b)))),(b=Ly?Dy(t,n):Iy(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(u=new Ip("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=b))}Kg(h,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vo(t,n),s!=null&&i.unshift(Yo(t,s,r)),s=Vo(t,e),s!=null&&i.push(Yo(t,s,r))),t=t.return}return i}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Vo(n,s),l!=null&&o.unshift(Yo(n,l,a))):r||(l=Vo(n,s),l!=null&&o.push(Yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function Xp(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Yy,"")}function Pa(t,e,n){if(e=Xp(e),Xp(t)!==e&&n)throw Error(de(425))}function kl(){}var dd=null,hd=null;function fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,Ky=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(Jy)}:pd;function Jy(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),li="__reactFiber$"+no,Ko="__reactProps$"+no,Ri="__reactContainer$"+no,md="__reactEvents$"+no,Qy="__reactListeners$"+no,eS="__reactHandles$"+no;function Dr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yp(t);t!==null;){if(n=t[li])return n;t=Yp(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[li]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function hc(t){return t[Ko]||null}var gd=[],Ss=-1;function gr(t){return{current:t}}function mt(t){0>Ss||(t.current=gd[Ss],gd[Ss]=null,Ss--)}function ut(t,e){Ss++,gd[Ss]=t.current,t.current=e}var dr={},rn=gr(dr),gn=gr(!1),Vr=dr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Fl(){mt(gn),mt(rn)}function Kp(t,e,n){if(rn.current!==dr)throw Error(de(168));ut(rn,e),ut(gn,n)}function Jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,O_(t)||"Unknown",r));return St({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Vr=rn.current,ut(rn,t),ut(gn,gn.current),!0}function Zp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=Jg(t,e,Vr),i.__reactInternalMemoizedMergedChildContext=t,mt(gn),mt(rn),ut(rn,t)):mt(gn),ut(gn,n)}var Mi=null,fc=!1,Kc=!1;function Qg(t){Mi===null?Mi=[t]:Mi.push(t)}function tS(t){fc=!0,Qg(t)}function vr(){if(!Kc&&Mi!==null){Kc=!0;var t=0,e=st;try{var n=Mi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,fc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Eg(Xh,vr),r}finally{st=e,Kc=!1}}return null}var Ms=[],ws=0,zl=null,Bl=0,Un=[],kn=0,Gr=null,wi=1,Ei="";function Ar(t,e){Ms[ws++]=Bl,Ms[ws++]=zl,zl=t,Bl=e}function ev(t,e,n){Un[kn++]=wi,Un[kn++]=Ei,Un[kn++]=Gr,Gr=t;var i=wi;t=Ei;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-ti(e)+r|n<<r|i,Ei=s+t}else wi=1<<s|n<<r|i,Ei=t}function nf(t){t.return!==null&&(Ar(t,1),ev(t,1,0))}function rf(t){for(;t===zl;)zl=Ms[--ws],Ms[ws]=null,Bl=Ms[--ws],Ms[ws]=null;for(;t===Gr;)Gr=Un[--kn],Un[kn]=null,Ei=Un[--kn],Un[kn]=null,wi=Un[--kn],Un[kn]=null}var Rn=null,An=null,gt=!1,Zn=null;function tv(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,An=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:wi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,An=null,!0):!1;default:return!1}}function vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xd(t){if(gt){var e=An;if(e){var n=e;if(!Jp(t,e)){if(vd(t))throw Error(de(418));e=tr(n.nextSibling);var i=Rn;e&&Jp(t,e)?tv(i,n):(t.flags=t.flags&-4097|2,gt=!1,Rn=t)}}else{if(vd(t))throw Error(de(418));t.flags=t.flags&-4097|2,gt=!1,Rn=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Na(t){if(t!==Rn)return!1;if(!gt)return Qp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fd(t.type,t.memoizedProps)),e&&(e=An)){if(vd(t))throw nv(),Error(de(418));for(;e;)tv(t,e),e=tr(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Rn?tr(t.stateNode.nextSibling):null;return!0}function nv(){for(var t=An;t;)t=tr(t.nextSibling)}function Hs(){An=Rn=null,gt=!1}function sf(t){Zn===null?Zn=[t]:Zn.push(t)}var nS=Ii.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function iv(t){function e(f,x){if(t){var _=f.deletions;_===null?(f.deletions=[x],f.flags|=16):_.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=sr(f,x),f.index=0,f.sibling=null,f}function s(f,x,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<x?(f.flags|=2,x):_):(f.flags|=2,x)):(f.flags|=1048576,x)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,_,M){return x===null||x.tag!==6?(x=iu(_,f.mode,M),x.return=f,x):(x=r(x,_),x.return=f,x)}function l(f,x,_,M){var R=_.type;return R===gs?u(f,x,_.props.children,M,_.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ji&&em(R)===x.type)?(M=r(x,_.props),M.ref=po(f,x,_),M.return=f,M):(M=xl(_.type,_.key,_.props,null,f.mode,M),M.ref=po(f,x,_),M.return=f,M)}function c(f,x,_,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=ru(_,f.mode,M),x.return=f,x):(x=r(x,_.children||[]),x.return=f,x)}function u(f,x,_,M,R){return x===null||x.tag!==7?(x=Hr(_,f.mode,M,R),x.return=f,x):(x=r(x,_),x.return=f,x)}function h(f,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=iu(""+x,f.mode,_),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return _=xl(x.type,x.key,x.props,null,f.mode,_),_.ref=po(f,null,x),_.return=f,_;case ms:return x=ru(x,f.mode,_),x.return=f,x;case ji:var M=x._init;return h(f,M(x._payload),_)}if(bo(x)||lo(x))return x=Hr(x,f.mode,_,null),x.return=f,x;La(f,x)}return null}function d(f,x,_,M){var R=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(f,x,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:return _.key===R?l(f,x,_,M):null;case ms:return _.key===R?c(f,x,_,M):null;case ji:return R=_._init,d(f,x,R(_._payload),M)}if(bo(_)||lo(_))return R!==null?null:u(f,x,_,M,null);La(f,_)}return null}function m(f,x,_,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(_)||null,a(x,f,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Sa:return f=f.get(M.key===null?_:M.key)||null,l(x,f,M,R);case ms:return f=f.get(M.key===null?_:M.key)||null,c(x,f,M,R);case ji:var A=M._init;return m(f,x,_,A(M._payload),R)}if(bo(M)||lo(M))return f=f.get(_)||null,u(x,f,M,R,null);La(x,M)}return null}function p(f,x,_,M){for(var R=null,A=null,b=x,L=x=0,W=null;b!==null&&L<_.length;L++){b.index>L?(W=b,b=null):W=b.sibling;var y=d(f,b,_[L],M);if(y===null){b===null&&(b=W);break}t&&b&&y.alternate===null&&e(f,b),x=s(y,x,L),A===null?R=y:A.sibling=y,A=y,b=W}if(L===_.length)return n(f,b),gt&&Ar(f,L),R;if(b===null){for(;L<_.length;L++)b=h(f,_[L],M),b!==null&&(x=s(b,x,L),A===null?R=b:A.sibling=b,A=b);return gt&&Ar(f,L),R}for(b=i(f,b);L<_.length;L++)W=m(b,f,L,_[L],M),W!==null&&(t&&W.alternate!==null&&b.delete(W.key===null?L:W.key),x=s(W,x,L),A===null?R=W:A.sibling=W,A=W);return t&&b.forEach(function(E){return e(f,E)}),gt&&Ar(f,L),R}function S(f,x,_,M){var R=lo(_);if(typeof R!="function")throw Error(de(150));if(_=R.call(_),_==null)throw Error(de(151));for(var A=R=null,b=x,L=x=0,W=null,y=_.next();b!==null&&!y.done;L++,y=_.next()){b.index>L?(W=b,b=null):W=b.sibling;var E=d(f,b,y.value,M);if(E===null){b===null&&(b=W);break}t&&b&&E.alternate===null&&e(f,b),x=s(E,x,L),A===null?R=E:A.sibling=E,A=E,b=W}if(y.done)return n(f,b),gt&&Ar(f,L),R;if(b===null){for(;!y.done;L++,y=_.next())y=h(f,y.value,M),y!==null&&(x=s(y,x,L),A===null?R=y:A.sibling=y,A=y);return gt&&Ar(f,L),R}for(b=i(f,b);!y.done;L++,y=_.next())y=m(b,f,L,y.value,M),y!==null&&(t&&y.alternate!==null&&b.delete(y.key===null?L:y.key),x=s(y,x,L),A===null?R=y:A.sibling=y,A=y);return t&&b.forEach(function(V){return e(f,V)}),gt&&Ar(f,L),R}function g(f,x,_,M){if(typeof _=="object"&&_!==null&&_.type===gs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:e:{for(var R=_.key,A=x;A!==null;){if(A.key===R){if(R=_.type,R===gs){if(A.tag===7){n(f,A.sibling),x=r(A,_.props.children),x.return=f,f=x;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ji&&em(R)===A.type){n(f,A.sibling),x=r(A,_.props),x.ref=po(f,A,_),x.return=f,f=x;break e}n(f,A);break}else e(f,A);A=A.sibling}_.type===gs?(x=Hr(_.props.children,f.mode,M,_.key),x.return=f,f=x):(M=xl(_.type,_.key,_.props,null,f.mode,M),M.ref=po(f,x,_),M.return=f,f=M)}return o(f);case ms:e:{for(A=_.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(f,x.sibling),x=r(x,_.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=ru(_,f.mode,M),x.return=f,f=x}return o(f);case ji:return A=_._init,g(f,x,A(_._payload),M)}if(bo(_))return p(f,x,_,M);if(lo(_))return S(f,x,_,M);La(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,_),x.return=f,f=x):(n(f,x),x=iu(_,f.mode,M),x.return=f,f=x),o(f)):n(f,x)}return g}var Vs=iv(!0),rv=iv(!1),Hl=gr(null),Vl=null,Es=null,of=null;function af(){of=Es=Vl=null}function lf(t){var e=Hl.current;mt(Hl),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Vl=t,of=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Vl===null)throw Error(de(308));Es=t,Vl.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Ir=null;function cf(t){Ir===null?Ir=[t]:Ir.push(t)}function sv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ov(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function tm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,S=a;switch(d=e,m=n,S.tag){case 1:if(p=S.payload,typeof p=="function"){h=p.call(m,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=S.payload,d=typeof p=="function"?p.call(m,h,d):p,d==null)break e;h=St({},h,d);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=h}}function nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var fa={},ui=gr(fa),Zo=gr(fa),Jo=gr(fa);function Ur(t){if(t===fa)throw Error(de(174));return t}function df(t,e){switch(ut(Jo,e),ut(Zo,t),ut(ui,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qu(e,t)}mt(ui),ut(ui,e)}function Gs(){mt(ui),mt(Zo),mt(Jo)}function av(t){Ur(Jo.current);var e=Ur(ui.current),n=Qu(e,t.type);e!==n&&(ut(Zo,t),ut(ui,n))}function hf(t){Zo.current===t&&(mt(ui),mt(Zo))}var xt=gr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function ff(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var fl=Ii.ReactCurrentDispatcher,Jc=Ii.ReactCurrentBatchConfig,jr=0,yt=null,Nt=null,Ot=null,Wl=!1,Io=!1,Qo=0,iS=0;function Yt(){throw Error(de(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(jr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?aS:lS,t=n(i,r),Io){s=0;do{if(Io=!1,Qo=0,25<=s)throw Error(de(301));s+=1,Ot=Nt=null,e.updateQueue=null,fl.current=cS,t=n(i,r)}while(Io)}if(fl.current=$l,e=Nt!==null&&Nt.next!==null,jr=0,Ot=Nt=yt=null,Wl=!1,e)throw Error(de(300));return t}function gf(){var t=Qo!==0;return Qo=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Hn(){if(Nt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Ot===null?yt.memoizedState:Ot.next;if(e!==null)Ot=e,Nt=t;else{if(t===null)throw Error(de(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function ea(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,yt.lanes|=u,Wr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,Wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function lv(){}function cv(t,e){var n=yt,i=Hn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,vf(hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,ta(9,dv.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(de(349));jr&30||uv(n,e,r)}return r}function uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dv(t,e,n,i){e.value=n,e.getSnapshot=i,fv(e)&&pv(t)}function hv(t,e,n){return n(function(){fv(e)&&pv(t)})}function fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function pv(t){var e=Pi(t,1);e!==null&&ni(e,t,1,-1)}function im(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=oS.bind(null,yt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function mv(){return Hn().memoizedState}function pl(t,e,n,i){var r=si();yt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}yt.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function rm(t,e){return pl(8390656,8,t,e)}function vf(t,e){return pc(2048,8,t,e)}function gv(t,e){return pc(4,2,t,e)}function vv(t,e){return pc(4,4,t,e)}function xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _v(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,xv.bind(null,e,t),n)}function xf(){}function yv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Mv(t,e,n){return jr&21?(ii(n,e)||(n=Ag(),yt.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function rS(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{st=n,Jc.transition=i}}function wv(){return Hn().memoizedState}function sS(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ev(t))bv(e,n);else if(n=sv(t,e,n,i),n!==null){var r=an();ni(n,t,i,r),Tv(n,e,i)}}function oS(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ev(t))bv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=sv(t,e,r,i),n!==null&&(r=an(),ni(n,t,i,r),Tv(n,e,i))}}function Ev(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function bv(t,e){Io=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var $l={readContext:Bn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},aS={readContext:Bn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:xf,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=rS.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=si();if(gt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),zt===null)throw Error(de(349));jr&30||uv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rm(hv.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,dv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=zt.identifierPrefix;if(gt){var n=Ei,i=wi;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lS={readContext:Bn,useCallback:yv,useContext:Bn,useEffect:vf,useImperativeHandle:_v,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:Qc,useRef:mv,useState:function(){return Qc(ea)},useDebugValue:xf,useDeferredValue:function(t){var e=Hn();return Mv(e,Nt.memoizedState,t)},useTransition:function(){var t=Qc(ea)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:cv,useId:wv,unstable_isNewReconciler:!1},cS={readContext:Bn,useCallback:yv,useContext:Bn,useEffect:vf,useImperativeHandle:_v,useInsertionEffect:gv,useLayoutEffect:vv,useMemo:Sv,useReducer:eu,useRef:mv,useState:function(){return eu(ea)},useDebugValue:xf,useDeferredValue:function(t){var e=Hn();return Nt===null?e.memoizedState=t:Mv(e,Nt.memoizedState,t)},useTransition:function(){var t=eu(ea)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:lv,useSyncExternalStore:cv,useId:wv,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=rr(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ni(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=rr(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ni(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=rr(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(ni(e,t,i,n),hl(e,t,i))}};function sm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,i)||!Xo(r,s):!0}function Av(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=vn(e)?Vr:rn.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function om(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function Sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=vn(e)?Vr:rn.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=F_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uS=typeof WeakMap=="function"?WeakMap:Map;function Cv(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Ld=i),Md(t,e)},n}function Rv(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function am(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ES.bind(null,t,e,n),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var dS=Ii.ReactCurrentOwner,mn=!1;function on(t,e,n,i){e.child=t===null?rv(e,null,n,i):Vs(e,t.child,n,i)}function um(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(gt&&n&&nf(e),e.flags|=1,on(t,e,i,r),e.child)}function dm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Tf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pv(t,e,s,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Pv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Xo(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return wd(t,e,n,i,r)}function Nv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Ts,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Ts,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Ts,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Ts,bn),bn|=i;return on(t,e,r,n),e.child}function Lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,i,r){var s=vn(n)?Vr:rn.current;return s=Bs(e,s),Ds(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(gt&&i&&nf(e),e.flags|=1,on(t,e,n,r),e.child)}function hm(t,e,n,i,r){if(vn(n)){var s=!0;Ol(e)}else s=!1;if(Ds(e,r),e.stateNode===null)ml(t,e),Av(e,n,i),Sd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=vn(n)?Vr:rn.current,c=Bs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&om(e,o,i,c),Wi=!1;var d=e.memoizedState;o.state=d,Gl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||gn.current||Wi?(typeof u=="function"&&(yd(e,n,u,i),l=e.memoizedState),(a=Wi||sm(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ov(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?Vr:rn.current,l=Bs(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&om(e,o,i,l),Wi=!1,d=e.memoizedState,o.state=d,Gl(e,i,o,r);var p=e.memoizedState;a!==h||d!==p||gn.current||Wi?(typeof m=="function"&&(yd(e,n,m,i),p=e.memoizedState),(c=Wi||sm(e,n,c,i,d,p,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),o.props=i,o.state=p,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ed(t,e,n,i,s,r)}function Ed(t,e,n,i,r,s){Lv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zp(e,n,!1),Ni(t,e,s);i=e.stateNode,dS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&Zp(e,n,!0),e.child}function Dv(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),df(t,e.containerInfo)}function fm(t,e,n,i,r){return Hs(),sf(r),e.flags|=256,on(t,e,n,i),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iv(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(xt,r&1),t===null)return xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,i,0,null),t=Hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Td(n),e.memoizedState=bd,t):_f(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bd,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _f(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&sf(i),Vs(e,t.child,null,n),t=_f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(de(422))),Da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=bd,s);if(!(e.mode&1))return Da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=tu(s,i,void 0),Da(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),ni(i,t,r,-1))}return bf(),i=tu(Error(de(421))),Da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=tr(r.nextSibling),Rn=e,gt=!0,Zn=null,t!==null&&(Un[kn++]=wi,Un[kn++]=Ei,Un[kn++]=Gr,wi=t.id,Ei=t.overflow,Gr=e),e=_f(e,i.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_d(t.return,e,n)}function nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Uv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fS(t,e,n){switch(e.tag){case 3:Dv(e),Hs();break;case 5:av(e);break;case 1:vn(e.type)&&Ol(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?Iv(t,e,n):(ut(xt,xt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);ut(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Uv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Nv(t,e,n)}return Ni(t,e,n)}var kv,Ad,Fv,Ov;kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};Fv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(ui.current);var s=null;switch(n){case"input":r=Yu(t,r),i=Yu(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Ju(t,r),i=Ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}ed(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ov=function(t,e,n,i){n!==i&&(e.flags|=4)};function mo(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pS(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return vn(e.type)&&Fl(),Kt(e),null;case 3:return i=e.stateNode,Gs(),mt(gn),mt(rn),ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(Ud(Zn),Zn=null))),Ad(t,e),Kt(e),null;case 5:hf(e);var r=Ur(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return Kt(e),null}if(t=Ur(ui.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)ht(Ao[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":wp(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":bp(i,s),ht("invalid",i)}ed(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":Ma(i),Ep(i,s,!0);break;case"textarea":Ma(i),Tp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[Ko]=i,kv(t,e,!1,!1),e.stateNode=t;e:{switch(o=td(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)ht(Ao[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":wp(t,i),r=Yu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ht("invalid",t);break;case"textarea":bp(t,i),r=Ju(t,i),ht("invalid",t);break;default:r=i}ed(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":Ma(t),Ep(t,i,!1);break;case"textarea":Ma(t),Tp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Ur(Jo.current),Ur(ui.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Kt(e),null;case 13:if(mt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&An!==null&&e.mode&1&&!(e.flags&128))nv(),Hs(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[li]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Zn!==null&&(Ud(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Lt===0&&(Lt=3):bf())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Gs(),Ad(t,e),t===null&&qo(e.stateNode.containerInfo),Kt(e),null;case 10:return lf(e.type._context),Kt(e),null;case 17:return vn(e.type)&&Fl(),Kt(e),null;case 19:if(mt(xt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Ws&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Kt(e),null}else 2*At()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=xt.current,ut(xt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Ef(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function mS(t,e){switch(rf(e),e.tag){case 1:return vn(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),mt(gn),mt(rn),ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(mt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(xt),null;case 4:return Gs(),null;case 10:return lf(e.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var Ia=!1,en=!1,gS=typeof WeakSet=="function"?WeakSet:Set,Te=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Cd(t,e,n){try{n()}catch(i){Et(t,e,i)}}var mm=!1;function vS(t,e){if(dd=Dl,t=Gg(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},Dl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var S=p.memoizedProps,g=p.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:Xn(e.type,S),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(M){Et(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return p=mm,mm=!1,p}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cd(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zv(t){var e=t.alternate;e!==null&&(t.alternate=null,zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Ko],delete e[md],delete e[Qy],delete e[eS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bv(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}function Nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}var Vt=null,qn=!1;function ki(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:en||bs(n,e);case 6:var i=Vt,r=qn;Vt=null,ki(t,e,n),Vt=i,qn=r,Vt!==null&&(qn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(qn?(t=Vt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Wo(t)):Yc(Vt,n.stateNode));break;case 4:i=Vt,r=qn,Vt=n.stateNode.containerInfo,qn=!0,ki(t,e,n),Vt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cd(n,e,o),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!en&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,ki(t,e,n),en=i):ki(t,e,n);break;default:ki(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gS),e.forEach(function(i){var r=TS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,qn=!1;break e;case 3:Vt=a.stateNode.containerInfo,qn=!0;break e;case 4:Vt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Vt===null)throw Error(de(160));Hv(s,o,r),Vt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ri(t),i&4){try{Uo(3,t,t.return),gc(3,t)}catch(S){Et(t,t.return,S)}try{Uo(5,t,t.return)}catch(S){Et(t,t.return,S)}}break;case 1:Gn(e,t),ri(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(Gn(e,t),ri(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(S){Et(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ug(r,s),td(a,o);var c=td(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?mg(r,h):u==="dangerouslySetInnerHTML"?fg(r,h):u==="children"?Ho(r,h):Vh(r,u,h,c)}switch(a){case"input":Ku(r,s);break;case"textarea":dg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(S){Et(t,t.return,S)}}break;case 6:if(Gn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Et(t,t.return,S)}}break;case 3:if(Gn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(S){Et(t,t.return,S)}break;case 4:Gn(e,t),ri(t);break;case 13:Gn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=At())),i&4&&vm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,Gn(e,t),en=c):Gn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(h=Te=u;Te!==null;){switch(d=Te,m=d.child,d.tag){case 0:case 11:case 14:case 15:Uo(4,d,d.return);break;case 1:bs(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(S){Et(i,n,S)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){_m(h);continue}}m!==null?(m.return=d,Te=m):_m(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pg("display",o))}catch(S){Et(t,t.return,S)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Et(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gn(e,t),ri(t),i&4&&vm(t);break;case 21:break;default:Gn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bv(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=gm(t);Nd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=gm(t);Pd(t,a,o);break;default:throw Error(de(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xS(t,e,n){Te=t,Gv(t)}function Gv(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Ia;var c=en;if(Ia=o,(en=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?ym(r):l!==null?(l.return=o,Te=l):ym(r);for(;s!==null;)Te=s,Gv(s),s=s.sibling;Te=r,Ia=a,en=c}xm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):xm(t)}}function xm(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Wo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}en||e.flags&512&&Rd(e)}catch(d){Et(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function _m(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function ym(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Rd(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Rd(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var _S=Math.ceil,Xl=Ii.ReactCurrentDispatcher,yf=Ii.ReactCurrentOwner,zn=Ii.ReactCurrentBatchConfig,Qe=0,zt=null,Pt=null,$t=0,bn=0,Ts=gr(0),Lt=0,na=null,Wr=0,vc=0,Sf=0,ko=null,fn=null,Mf=0,Ws=1/0,Si=null,ql=!1,Ld=null,ir=null,Ua=!1,Ki=null,Yl=0,Fo=0,Dd=null,gl=-1,vl=0;function an(){return Qe&6?At():gl!==-1?gl:gl=At()}function rr(t){return t.mode&1?Qe&2&&$t!==0?$t&-$t:nS.transition!==null?(vl===0&&(vl=Ag()),vl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function ni(t,e,n,i){if(50<Fo)throw Fo=0,Dd=null,Error(de(185));ua(t,n,i),(!(Qe&2)||t!==zt)&&(t===zt&&(!(Qe&2)&&(vc|=n),Lt===4&&Xi(t,$t)),xn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ws=At()+500,fc&&vr()))}function xn(t,e){var n=t.callbackNode;ny(t,e);var i=Ll(t,t===zt?$t:0);if(i===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?tS(Sm.bind(null,t)):Qg(Sm.bind(null,t)),Zy(function(){!(Qe&6)&&vr()}),n=null;else{switch(Cg(i)){case 1:n=Xh;break;case 4:n=bg;break;case 16:n=Nl;break;case 536870912:n=Tg;break;default:n=Nl}n=Zv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(gl=-1,vl=0,Qe&6)throw Error(de(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Ll(t,t===zt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=Qe;Qe|=2;var s=$v();(zt!==t||$t!==e)&&(Si=null,Ws=At()+500,Br(t,e));do try{MS();break}catch(a){Wv(t,a)}while(!0);af(),Xl.current=s,Qe=r,Pt!==null?e=0:(zt=null,$t=0,e=Lt)}if(e!==0){if(e===2&&(r=od(t),r!==0&&(i=r,e=Id(t,r))),e===1)throw n=na,Br(t,0),Xi(t,i),xn(t,At()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!yS(r)&&(e=Kl(t,i),e===2&&(s=od(t),s!==0&&(i=s,e=Id(t,s))),e===1))throw n=na,Br(t,0),Xi(t,i),xn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Cr(t,fn,Si);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Mf+500-At(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pd(Cr.bind(null,t,fn,Si),e);break}Cr(t,fn,Si);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_S(i/1960))-i,10<i){t.timeoutHandle=pd(Cr.bind(null,t,fn,Si),i);break}Cr(t,fn,Si);break;case 5:Cr(t,fn,Si);break;default:throw Error(de(329))}}}return xn(t,At()),t.callbackNode===n?jv.bind(null,t):null}function Id(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=fn,fn=n,e!==null&&Ud(e)),t}function Ud(t){fn===null?fn=t:fn.push.apply(fn,t)}function yS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Sf,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function Sm(t){if(Qe&6)throw Error(de(327));Is();var e=Ll(t,0);if(!(e&1))return xn(t,At()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=od(t);i!==0&&(e=i,n=Id(t,i))}if(n===1)throw n=na,Br(t,0),Xi(t,e),xn(t,At()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,fn,Si),xn(t,At()),null}function wf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ws=At()+500,fc&&vr())}}function $r(t){Ki!==null&&Ki.tag===0&&!(Qe&6)&&Is();var e=Qe;Qe|=1;var n=zn.transition,i=st;try{if(zn.transition=null,st=1,t)return t()}finally{st=i,zn.transition=n,Qe=e,!(Qe&6)&&vr()}}function Ef(){bn=Ts.current,mt(Ts)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ky(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Gs(),mt(gn),mt(rn),ff();break;case 5:hf(i);break;case 4:Gs();break;case 13:mt(xt);break;case 19:mt(xt);break;case 10:lf(i.type._context);break;case 22:case 23:Ef()}n=n.return}if(zt=t,Pt=t=sr(t.current,null),$t=bn=e,Lt=0,na=null,Sf=vc=Wr=0,fn=ko=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ir=null}return t}function Wv(t,e){do{var n=Pt;try{if(af(),fl.current=$l,Wl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wl=!1}if(jr=0,Ot=Nt=yt=null,Io=!1,Qo=0,yf.current=null,n===null||n.return===null){Lt=1,na=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=lm(o);if(m!==null){m.flags&=-257,cm(m,o,a,s,e),m.mode&1&&am(s,c,e),e=m,l=c;var p=e.updateQueue;if(p===null){var S=new Set;S.add(l),e.updateQueue=S}else p.add(l);break e}else{if(!(e&1)){am(s,c,e),bf();break e}l=Error(de(426))}}else if(gt&&a.mode&1){var g=lm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),cm(g,o,a,s,e),sf(js(l,a));break e}}s=l=js(l,a),Lt!==4&&(Lt=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Cv(s,l,e);tm(s,f);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ir===null||!ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Rv(s,a,e);tm(s,M);break e}}s=s.return}while(s!==null)}qv(n)}catch(R){e=R,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function $v(){var t=Xl.current;return Xl.current=$l,t===null?$l:t}function bf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||!(Wr&268435455)&&!(vc&268435455)||Xi(zt,$t)}function Kl(t,e){var n=Qe;Qe|=2;var i=$v();(zt!==t||$t!==e)&&(Si=null,Br(t,e));do try{SS();break}catch(r){Wv(t,r)}while(!0);if(af(),Qe=n,Xl.current=i,Pt!==null)throw Error(de(261));return zt=null,$t=0,Lt}function SS(){for(;Pt!==null;)Xv(Pt)}function MS(){for(;Pt!==null&&!X_();)Xv(Pt)}function Xv(t){var e=Kv(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?qv(t):Pt=e,yf.current=null}function qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mS(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Pt=null;return}}else if(n=pS(n,e,bn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Cr(t,e,n){var i=st,r=zn.transition;try{zn.transition=null,st=1,wS(t,e,n,i)}finally{zn.transition=r,st=i}return null}function wS(t,e,n,i){do Is();while(Ki!==null);if(Qe&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===zt&&(Pt=zt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,Zv(Nl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=st;st=1;var a=Qe;Qe|=4,yf.current=null,vS(t,n),Vv(n,t),Gy(hd),Dl=!!dd,hd=dd=null,t.current=n,xS(n),q_(),Qe=a,st=o,zn.transition=s}else t.current=n;if(Ua&&(Ua=!1,Ki=t,Yl=r),s=t.pendingLanes,s===0&&(ir=null),Z_(n.stateNode),xn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Ld,Ld=null,t;return Yl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Dd?Fo++:(Fo=0,Dd=t):Fo=0,vr(),null}function Is(){if(Ki!==null){var t=Cg(Yl),e=zn.transition,n=st;try{if(zn.transition=null,st=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,Yl=0,Qe&6)throw Error(de(331));var r=Qe;for(Qe|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:Uo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Te=h;else for(;Te!==null;){u=Te;var d=u.sibling,m=u.return;if(zv(u),u===c){Te=null;break}if(d!==null){d.return=m,Te=d;break}Te=m}}}var p=s.alternate;if(p!==null){var S=p.child;if(S!==null){p.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Te=f;break e}Te=s.return}}var x=t.current;for(Te=x;Te!==null;){o=Te;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Te=_;else e:for(o=x;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(R){Et(a,a.return,R)}if(a===o){Te=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Te=M;break e}Te=a.return}}if(Qe=r,vr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{st=n,zn.transition=e}}return!1}function Mm(t,e,n){e=js(n,e),e=Cv(t,e,1),t=nr(t,e,1),e=an(),t!==null&&(ua(t,1,e),xn(t,e))}function Et(t,e,n){if(t.tag===3)Mm(t,t,n);else for(;e!==null;){if(e.tag===3){Mm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=js(n,t),t=Rv(e,t,1),e=nr(e,t,1),t=an(),e!==null&&(ua(e,1,t),xn(e,t));break}}e=e.return}}function ES(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&($t&n)===n&&(Lt===4||Lt===3&&($t&130023424)===$t&&500>At()-Mf?Br(t,0):Sf|=n),xn(t,e)}function Yv(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=an();t=Pi(t,e),t!==null&&(ua(t,e,n),xn(t,n))}function bS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yv(t,n)}function TS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),Yv(t,n)}var Kv;Kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,fS(t,e,n);mn=!!(t.flags&131072)}else mn=!1,gt&&e.flags&1048576&&ev(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=Bs(e,rn.current);Ds(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uf(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,Sd(e,i,t,n),e=Ed(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&nf(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=CS(i),t=Xn(i,t),r){case 0:e=wd(null,e,i,t,n);break e;case 1:e=hm(null,e,i,t,n);break e;case 11:e=um(null,e,i,t,n);break e;case 14:e=dm(null,e,i,Xn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),wd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),hm(t,e,i,r,n);case 3:e:{if(Dv(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ov(t,e),Gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(de(423)),e),e=fm(t,e,i,n,r);break e}else if(i!==r){r=js(Error(de(424)),e),e=fm(t,e,i,n,r);break e}else for(An=tr(e.stateNode.containerInfo.firstChild),Rn=e,gt=!0,Zn=null,n=rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Ni(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return av(e),t===null&&xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fd(i,r)?o=null:s!==null&&fd(i,s)&&(e.flags|=32),Lv(t,e),on(t,e,o,n),e.child;case 6:return t===null&&xd(e),null;case 13:return Iv(t,e,n);case 4:return df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),um(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Hl,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!gn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_d(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Bn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),dm(t,e,i,r,n);case 15:return Pv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ml(t,e),e.tag=1,vn(i)?(t=!0,Ol(e)):t=!1,Ds(e,n),Av(e,i,r),Sd(e,i,r,n),Ed(null,e,i,!0,t,n);case 19:return Uv(t,e,n);case 22:return Nv(t,e,n)}throw Error(de(156,e.tag))};function Zv(t,e){return Eg(t,e)}function AS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new AS(t,e,n,i)}function Tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CS(t){if(typeof t=="function")return Tf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jh)return 11;if(t===Wh)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Tf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Hr(n.children,r,s,e);case Gh:o=8,r|=8;break;case Wu:return t=On(12,n,e,r|2),t.elementType=Wu,t.lanes=s,t;case $u:return t=On(13,n,e,r),t.elementType=$u,t.lanes=s,t;case Xu:return t=On(19,n,e,r),t.elementType=Xu,t.lanes=s,t;case ag:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sg:o=10;break e;case og:o=9;break e;case jh:o=11;break e;case Wh:o=14;break e;case ji:o=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=On(22,t,i,e),t.elementType=ag,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Af(t,e,n,i,r,s,o,a,l){return t=new RS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function PS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jv(t){if(!t)return dr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(vn(n))return Jg(t,n,e)}return e}function Qv(t,e,n,i,r,s,o,a,l){return t=Af(n,i,!0,t,r,s,o,a,l),t.context=Jv(null),n=t.current,i=an(),r=rr(n),s=Ai(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,ua(t,r,i),xn(t,i),t}function _c(t,e,n,i){var r=e.current,s=an(),o=rr(r);return n=Jv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(ni(t,r,o,s),hl(t,r,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){wm(t,e),(t=t.alternate)&&wm(t,e)}function NS(){return null}var ex=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rf(t){this._internalRoot=t}yc.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));_c(t,e,null,null)};yc.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){_c(null,t,null,null)}),e[Ri]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&Dg(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Em(){}function LS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zl(o);s.call(c)}}var o=Qv(e,i,t,0,null,!1,!1,"",Em);return t._reactRootContainer=o,t[Ri]=o.current,qo(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Zl(l);a.call(c)}}var l=Af(t,0,!1,null,null,!1,!1,"",Em);return t._reactRootContainer=l,t[Ri]=l.current,qo(t.nodeType===8?t.parentNode:t),$r(function(){_c(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zl(o);a.call(l)}}_c(e,o,t,r)}else o=LS(n,e,t,r,i);return Zl(o)}Rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(qh(e,n|1),xn(e,At()),!(Qe&6)&&(Ws=At()+500,vr()))}break;case 13:$r(function(){var i=Pi(t,1);if(i!==null){var r=an();ni(i,t,1,r)}}),Cf(t,1)}};Yh=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=an();ni(e,t,134217728,n)}Cf(t,134217728)}};Pg=function(t){if(t.tag===13){var e=rr(t),n=Pi(t,e);if(n!==null){var i=an();ni(n,t,e,i)}Cf(t,e)}};Ng=function(){return st};Lg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};id=function(t,e,n){switch(e){case"input":if(Ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(de(90));cg(i),Ku(i,r)}}}break;case"textarea":dg(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};xg=wf;_g=$r;var DS={usingClientEntryPoint:!1,Events:[ha,ys,hc,gg,vg,wf]},go={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IS={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mg(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||NS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{lc=ka.inject(IS),ci=ka}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DS;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(de(200));return PS(t,e,null,n)};Nn.createRoot=function(t,e){if(!Pf(t))throw Error(de(299));var n=!1,i="",r=ex;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Af(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,qo(t.nodeType===8?t.parentNode:t),new Rf(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=Mg(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return $r(t)};Nn.hydrate=function(t,e,n){if(!Sc(e))throw Error(de(200));return Mc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ex;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qv(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};Nn.render=function(t,e,n){if(!Sc(e))throw Error(de(200));return Mc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(de(40));return t._reactRootContainer?($r(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Nn.unstable_batchedUpdates=wf;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Mc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tx)}catch(t){console.error(t)}}tx(),tg.exports=Nn;var US=tg.exports,nx,bm=US;nx=bm.createRoot,bm.hydrateRoot;const ge={sun:"#FBC426",sunDeep:"#D99A0F",tomato:"#F64034",tomatoDeep:"#C42A22",teal:"#169996",tealDeep:"#0B7A77",cobalt:"#2760BF",cobaltDeep:"#1C4790",grape:"#6B4BC4",caramel:"#DA8A47",caramelDeep:"#B96C33",cream:"#F0BE82",snoutNose:"#B97C52",paw:"#7A4220",pupil:"#3A2210",ink:"#26304A",white:"#FFFFFF",eyeWhite:"#FBFBF8",paper:"#FFF6EA",grass:"#5DBB46",grassDeep:"#3F9A35",sky:"#70BCD6",wood:"#C98B55",woodDeep:"#9E6436",sunSoft:"#FFE6A8",tealSoft:"#CDEFEC",cobaltSoft:"#C9D8F4"},kS=[ge.tomato,ge.teal,ge.sun,ge.cobalt,ge.grape],ix=[{type:"rug",stars:3,w:2,d:2,floor:!0,colors:[ge.teal,ge.tomato,ge.sun,ge.cobalt,ge.grape]},{type:"plant",stars:3,w:1,d:1,colors:[ge.tomato,ge.cobalt,ge.sun,ge.teal,ge.white]},{type:"beanbag",stars:4,w:1,d:1,colors:[ge.sun,...kS.filter(t=>t!==ge.sun)]},{type:"lamp",stars:5,w:1,d:1,colors:[ge.cobalt,ge.sun,ge.tomato,ge.teal,ge.white]},{type:"table",stars:6,w:1,d:1,colors:[ge.white,ge.teal,ge.tomato,ge.sun,ge.cobalt]},{type:"shelf",stars:8,w:1,d:1,colors:[ge.white,ge.sun,ge.teal,ge.tomato,ge.cobalt]},{type:"fishbowl",stars:10,w:1,d:1,colors:[ge.teal,ge.tomato,ge.sun,ge.white,ge.grape]},{type:"bed",stars:12,w:1,d:2,colors:[ge.cobalt,ge.teal,ge.tomato,ge.sun,ge.grape]},{type:"kitty",stars:20,w:1,d:1,colors:["#E58C3A","#5B4A73",ge.white,"#9E9E9E","#E9C8A0"],rare:!0}],hr=t=>ix.find(e=>e.type===t),FS={practice:"Practice",backToRoom:"My room",treasures:"Treasures",close:"Close",langSwitch:"Cambiar a español",soundOn:"Sound on",soundOff:"Sound off",starsLabel:t=>`${t} ${t===1?"star":"stars"}`,meetTitle:"Meet your buddy!",pickKind:"Is your buddy a boy or a girl?",boy:"Boy",girl:"Girl",nameAsk:()=>"What will you call your buddy?",namePlaceholder:"Type a name",start:"Let's go!",treasuresTitle:"Treasures",unlock:"Unlock",place:"Place",inRoom:"In your room",locked:"Locked",newTag:"New",rareTag:"Rare",needMore:t=>`${t} more`,unlocked:"Unlocked!",placeHint:"Tap the floor to place it",noRoom:"It doesn't fit there",turn:"Turn",color:"Color",move:"Move",putAway:"Put away",done:"Done",cancel:"Cancel",items:{rug:"Rug",plant:"Plant",beanbag:"Beanbag",lamp:"Lamp",table:"Table",shelf:"Bookshelf",fishbowl:"Fishbowl",bed:"Bed",kitty:"Kitty"}},OS={practice:"Practicar",backToRoom:"Mi cuarto",treasures:"Tesoros",close:"Cerrar",langSwitch:"Switch to English",soundOn:"Sonido activado",soundOff:"Sonido apagado",starsLabel:t=>`${t} ${t===1?"estrella":"estrellas"}`,meetTitle:"¡Conoce a tu amigo!",pickKind:"¿Tu amigo es chico o chica?",boy:"Chico",girl:"Chica",nameAsk:t=>t==="girl"?"¿Cómo se va a llamar tu amiga?":"¿Cómo se va a llamar tu amigo?",namePlaceholder:"Escribe un nombre",start:"¡Vamos!",treasuresTitle:"Tesoros",unlock:"Desbloquear",place:"Poner",inRoom:"En tu cuarto",locked:"Bloqueado",newTag:"Nuevo",rareTag:"Raro",needMore:t=>`Faltan ${t}`,unlocked:"¡Desbloqueado!",placeHint:"Toca el piso para ponerlo",noRoom:"No cabe ahí",turn:"Girar",color:"Color",move:"Mover",putAway:"Guardar",done:"Listo",cancel:"Cancelar",items:{rug:"Alfombra",plant:"Planta",beanbag:"Puf",lamp:"Lámpara",table:"Mesa",shelf:"Librero",fishbowl:"Pecera",bed:"Cama",kitty:"Gatito"}},wc={en:FS,es:OS},rx="mathbuddy_game",pt=8;function Tm(){var t;return{version:1,name:null,kind:"boy",lang:(t=navigator.language)!=null&&t.toLowerCase().startsWith("es")?"es":"en",stars:5,unlocked:["rug","plant"],newSince:{},room:[{id:1,type:"rug",x:3,z:3,rot:0,color:0},{id:2,type:"plant",x:0,z:0,rot:0,color:0}],nextId:3,borrow:{level:0,rounds:0}}}function zS(){try{const t=localStorage.getItem(rx);if(t){const e=JSON.parse(t);if(e&&e.version===1)return{...Tm(),...e}}}catch{}return Tm()}function BS(t){try{localStorage.setItem(rx,JSON.stringify(t))}catch{}}function Xr(t,e){const n=hr(t);return e%2?[n.d,n.w]:[n.w,n.d]}function kd(t,e,n,i){const[r,s]=Xr(t,i),o=[];for(let a=0;a<r;a++)for(let l=0;l<s;l++)o.push(`${e+a},${n+l}`);return o}function Fd(t,e,n,i,r,s){const[o,a]=Xr(e,r);if(n<0||i<0||n+o>pt||i+a>pt)return!1;const l=new Set(kd(e,n,i,r)),c=!!hr(e).floor;for(const u of t)if(!(u.id===s||!!hr(u.type).floor!==c)&&kd(u.type,u.x,u.z,u.rot).some(h=>l.has(h)))return!1;return!0}function HS(t,e,n=0){const i=[];for(let r=0;r<pt;r++)for(let s=0;s<pt;s++)i.push({x:r,z:s,dist:Math.hypot(r-3.5,s-3.5)});return i.sort((r,s)=>r.dist-s.dist),i.find(r=>Fd(t,e,r.x,r.z,n))??null}let _l=zS();const Od=new Set;function oi(t){_l=t(_l),BS(_l),Od.forEach(e=>e())}function yl(t){t>0&&oi(e=>({...e,stars:e.stars+t}))}function pa(){return ue.useSyncExternalStore(t=>(Od.add(t),()=>Od.delete(t)),()=>_l)}const VS="/assets/borrow-1-DdXRa0y5.mp3",GS="/assets/borrow-2-CsGU7TvO.mp3",jS="/assets/challenge-complete-1-DiztpUg3.mp3",WS="/assets/correct-1-Cxe9oZf0.mp3",$S="/assets/correct-2-CP32RgpO.mp3",XS="/assets/correct-3-DaF8zjki.mp3",qS="/assets/correct-4-kvEkctCa.mp3",YS="/assets/correct-5-CKRYNvBQ.mp3",KS="/assets/correct-6-DLINnVAn.mp3",ZS="/assets/mulwelcome-1-CgS35O77.mp3",JS="/assets/mulwelcome-2-DlZzx8_z.mp3",QS="/assets/reminder-1-BuGFeBCq.mp3",e1="/assets/tryagain-1-Dnn6n6oO.mp3",t1="/assets/tryagain-2-CW8fu__V.mp3",n1="/assets/tryagain-3-B7FpGqd5.mp3",i1="/assets/tryagain-4-BDc1lCck.mp3",r1="/assets/tryagain-5-BazJO3hL.mp3",s1="/assets/tryagain-6-DBiBBYBm.mp3",o1="/assets/welcome-1-__LCmQuX.mp3",a1="/assets/welcome-2-qJ14_W2O.mp3",l1=Object.assign({"./voice/borrow-1.mp3":VS,"./voice/borrow-2.mp3":GS,"./voice/challenge-complete-1.mp3":jS,"./voice/correct-1.mp3":WS,"./voice/correct-2.mp3":$S,"./voice/correct-3.mp3":XS,"./voice/correct-4.mp3":qS,"./voice/correct-5.mp3":YS,"./voice/correct-6.mp3":KS,"./voice/mulwelcome-1.mp3":ZS,"./voice/mulwelcome-2.mp3":JS,"./voice/reminder-1.mp3":QS,"./voice/tryagain-1.mp3":e1,"./voice/tryagain-2.mp3":t1,"./voice/tryagain-3.mp3":n1,"./voice/tryagain-4.mp3":i1,"./voice/tryagain-5.mp3":r1,"./voice/tryagain-6.mp3":s1,"./voice/welcome-1.mp3":o1,"./voice/welcome-2.mp3":a1}),c1=Object.assign({});function Am(t){const e=new Map;for(const[n,i]of Object.entries(t)){const s=n.split("/").pop().replace(/\.[^.]+$/,"").replace(/-\d+$/,"");e.has(s)||e.set(s,[]),e.get(s).push(i)}return e}const sx={voice:Am(l1),sfx:Am(c1)},ox="mathbuddy_sound";let Jl=u1();const zd=new Set;function u1(){try{return localStorage.getItem(ox)!=="off"}catch{return!0}}function Nf(){return Jl}function Lf(t){Jl=t;try{localStorage.setItem(ox,t?"on":"off")}catch{}t||ux(),zd.forEach(e=>e(t))}function d1(t){return zd.add(t),()=>zd.delete(t)}let Yn=null,su=null;const ax={},Cm=new Map;let kr=null;const Rm=new Map,h1={voice:1,sfx:.8};function Df(){if(Yn)return Yn;const t=window.AudioContext||window.webkitAudioContext;return t?(Yn=new t,su=Yn.createGain(),su.connect(Yn.destination),["voice","sfx"].forEach(e=>{const n=Yn.createGain();n.gain.value=h1[e],n.connect(su),ax[e]=n}),Yn):null}function lx(t){let e=Cm.get(t);if(!e){const n=Df();e=n?fetch(t).then(i=>i.arrayBuffer()).then(i=>new Promise(r=>n.decodeAudioData(i,r,()=>r(null)))).catch(()=>null):Promise.resolve(null),Cm.set(t,e)}return e}function f1(){["voice","sfx"].forEach(t=>sx[t].forEach(e=>e.forEach(n=>void lx(n))))}let Pm=!1;function p1(){const t=Df();if(!t||(t.state==="suspended"&&t.resume(),Pm))return;Pm=!0;const e=t.createBuffer(1,1,22050),n=t.createBufferSource();n.buffer=e,n.connect(t.destination),n.start(0),f1()}if(typeof window<"u"){const t=()=>p1();["pointerdown","touchend","keydown"].forEach(e=>window.addEventListener(e,t,{passive:!0})),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(Yn==null?void 0:Yn.state)==="suspended"&&Yn.resume()})}function m1(t,e){if(e.length===1)return e[0];const n=Rm.get(t),i=e.filter(s=>s!==n),r=i[Math.floor(Math.random()*i.length)];return Rm.set(t,r),r}async function cx(t,e,n={}){if(!Jl)return;const i=sx[t].get(e);if(!(i!=null&&i.length))return;const r=Df();if(!r)return;const s=await lx(m1(t+":"+e,i));if(!s||!Jl)return;const o=r.createBufferSource();o.buffer=s;const a=n.variance??(t==="sfx"?.5:0),l=((n.semitones??0)+(Math.random()*2-1)*a)*100;o.playbackRate.value=Math.pow(2,l/1200);const c=r.createGain();return c.gain.value=n.volume??1,o.connect(c),c.connect(ax[t]),t==="voice"&&(ux(),kr=o),new Promise(u=>{o.onended=()=>{kr===o&&(kr=null),u()},o.start(r.currentTime+(n.delay??0))})}function di(t,e){return cx("voice",t,e)}function Ft(t,e){return cx("sfx",t,e)}function ux(){if(kr){try{kr.onended=null,kr.stop()}catch{}kr=null}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="169",g1=0,Nm=1,v1=2,dx=1,Uf=2,yi=3,fr=0,_n=1,Fn=2,or=0,Us=1,Lm=2,Dm=3,Im=4,x1=5,Nr=100,_1=101,y1=102,S1=103,M1=104,w1=200,E1=201,b1=202,T1=203,Bd=204,Hd=205,A1=206,C1=207,R1=208,P1=209,N1=210,L1=211,D1=212,I1=213,U1=214,Vd=0,Gd=1,jd=2,$s=3,Wd=4,$d=5,Xd=6,qd=7,hx=0,k1=1,F1=2,ar=0,O1=1,z1=2,B1=3,H1=4,V1=5,G1=6,j1=7,fx=300,Xs=301,qs=302,Yd=303,Kd=304,Ec=306,Ql=1e3,Fr=1001,Zd=1002,tn=1003,W1=1004,Fa=1005,Jn=1006,ou=1007,Or=1008,Li=1009,px=1010,mx=1011,ia=1012,kf=1013,qr=1014,bi=1015,ma=1016,Ff=1017,Of=1018,Ys=1020,gx=35902,vx=1021,xx=1022,ei=1023,_x=1024,yx=1025,ks=1026,Ks=1027,zf=1028,Bf=1029,Sx=1030,Hf=1031,Vf=1033,Sl=33776,Ml=33777,wl=33778,El=33779,Jd=35840,Qd=35841,eh=35842,th=35843,nh=36196,ih=37492,rh=37496,sh=37808,oh=37809,ah=37810,lh=37811,ch=37812,uh=37813,dh=37814,hh=37815,fh=37816,ph=37817,mh=37818,gh=37819,vh=37820,xh=37821,bl=36492,_h=36494,yh=36495,Mx=36283,Sh=36284,Mh=36285,wh=36286,$1=3200,X1=3201,wx=0,q1=1,qi="",Kn="srgb",xr="srgb-linear",Gf="display-p3",bc="display-p3-linear",ec="linear",ft="srgb",tc="rec709",nc="p3",ts=7680,Um=519,Y1=512,K1=513,Z1=514,Ex=515,J1=516,Q1=517,eM=518,tM=519,km=35044,Fm="300 es",Ti=2e3,ic=2001;class io{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,Eh=180/Math.PI;function ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function nM(t,e){return(t%e+e)%e}function lu(t,e,n){return(1-n)*t+n*e}function vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],p=i[8],S=r[0],g=r[3],f=r[6],x=r[1],_=r[4],M=r[7],R=r[2],A=r[5],b=r[8];return s[0]=o*S+a*x+l*R,s[3]=o*g+a*_+l*A,s[6]=o*f+a*M+l*b,s[1]=c*S+u*x+h*R,s[4]=c*g+u*_+h*A,s[7]=c*f+u*M+h*b,s[2]=d*S+m*x+p*R,s[5]=d*g+m*_+p*A,s[8]=d*f+m*M+p*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,p=n*h+i*d+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/p;return e[0]=h*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cu.makeScale(e,n)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cu=new Xe;function bx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iM(){const t=rc("canvas");return t.style.display="block",t}const Om={};function Tl(t){t in Om||(Om[t]=!0,console.warn(t))}function rM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function sM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zm=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bm=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[xr]:{transfer:ec,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:ft,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bc]:{transfer:ec,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Bm),fromReference:t=>t.applyMatrix3(zm)},[Gf]:{transfer:ft,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Bm),fromReference:t=>t.applyMatrix3(zm).convertLinearToSRGB()}},aM=new Set([xr,bc]),it={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!aM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xo[e].toReference,r=xo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xo[t].primaries},getTransfer:function(t){return t===qi?ec:xo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(xo[e].luminanceCoefficients)}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ns;class lM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=rc("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ns}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cM=0;class Tx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(du(r[o].image)):s.push(du(r[o]))}else s=du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uM=0;class nn extends io{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Fr,r=Fr,s=Jn,o=Or,a=ei,l=Li,c=nn.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ro(),this.name="",this.source=new Tx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=fx;nn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],p=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(p+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(m+1)/2,R=(f+1)/2,A=(u+d)/4,b=(h+S)/4,L=(p+g)/4;return _>M&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=b/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=L/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-p)*(g-p)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-S)/x,this.z=(d-u)/x,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends io{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends dM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ax extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],p=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=p,e[n+3]=S;return}if(h!==S||l!==d||c!==m||u!==p){let g=1-a;const f=l*d+c*m+u*p+h*S,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const R=Math.sqrt(_),A=Math.atan2(R,f*x);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}const M=a*x;if(l=l*g+d*M,c=c*g+m*M,u=u*g+p*M,h=h*g+S*M,g===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],m=s[o+2],p=s[o+3];return e[n]=a*p+u*h+l*m-c*d,e[n+1]=l*p+u*d+c*h-a*m,e[n+2]=c*p+u*m+a*d-l*h,e[n+3]=u*p-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*p,this._y=c*m*h-d*u*p,this._z=c*u*p+d*m*h,this._w=c*u*h-d*m*p;break;case"YXZ":this._x=d*u*h+c*m*p,this._y=c*m*h-d*u*p,this._z=c*u*p-d*m*h,this._w=c*u*h+d*m*p;break;case"ZXY":this._x=d*u*h-c*m*p,this._y=c*m*h+d*u*p,this._z=c*u*p+d*m*h,this._w=c*u*h-d*m*p;break;case"ZYX":this._x=d*u*h-c*m*p,this._y=c*m*h+d*u*p,this._z=c*u*p-d*m*h,this._w=c*u*h+d*m*p;break;case"YZX":this._x=d*u*h+c*m*p,this._y=c*m*h+d*u*p,this._z=c*u*p-d*m*h,this._w=c*u*h-d*m*p;break;case"XZY":this._x=d*u*h-c*m*p,this._y=c*m*h-d*u*p,this._z=c*u*p+d*m*h,this._w=c*u*h+d*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hu=new U,Hm=new ga;class so{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),za.subVectors(this.max,_o),is.subVectors(e.a,_o),rs.subVectors(e.b,_o),ss.subVectors(e.c,_o),Fi.subVectors(rs,is),Oi.subVectors(ss,rs),yr.subVectors(is,ss);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-yr.z,yr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,yr.z,0,-yr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-yr.y,yr.x,0];return!fu(n,is,rs,ss,za)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,is,rs,ss,za))?!1:(Ba.crossVectors(Fi,Oi),n=[Ba.x,Ba.y,Ba.z],fu(n,is,rs,ss,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new U,new U,new U,new U,new U,new U,new U,new U],jn=new U,Oa=new so,is=new U,rs=new U,ss=new U,Fi=new U,Oi=new U,yr=new U,_o=new U,za=new U,Ba=new U,Sr=new U;function fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fM=new so,yo=new U,pu=new U;class jf{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):fM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(pu)),this.expandByPoint(yo.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new U,mu=new U,Ha=new U,zi=new U,gu=new U,Va=new U,vu=new U;class Cx{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(mu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=zi.dot(this.direction),l=-zi.dot(Ha),c=zi.lengthSq(),u=Math.abs(1-o*o);let h,d,m,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const S=1/u;h*=S,d*=S,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mu).addScaledVector(Ha,d),m}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){gu.subVectors(n,e),Va.subVectors(i,e),vu.crossVectors(gu,Va);let o=this.direction.dot(vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(zi,Va));if(l<0)return null;const c=a*this.direction.dot(gu.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(vu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,u,h,d,m,p,S,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,m,p,S,g)}set(e,n,i,r,s,o,a,l,c,u,h,d,m,p,S,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=p,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,p=a*u,S=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=m+p*c,n[5]=d-S*c,n[9]=-a*l,n[2]=S-d*c,n[6]=p+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,p=c*u,S=c*h;n[0]=d+S*a,n[4]=p*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=m*a-p,n[6]=S+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,p=c*u,S=c*h;n[0]=d-S*a,n[4]=-o*h,n[8]=p+m*a,n[1]=m+p*a,n[5]=o*u,n[9]=S-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,p=a*u,S=a*h;n[0]=l*u,n[4]=p*c-m,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=m*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,p=a*l,S=a*c;n[0]=l*u,n[4]=S-d*h,n[8]=p*h+m,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*h+p,n[10]=d-S*h}else if(e.order==="XZY"){const d=o*l,m=o*c,p=a*l,S=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+S,n[5]=o*u,n[9]=m*h-p,n[2]=p*h-m,n[6]=a*u,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Bi.crossVectors(i,wn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Bi.crossVectors(i,wn)),Bi.normalize(),Ga.crossVectors(wn,Bi),r[0]=Bi.x,r[4]=Ga.x,r[8]=wn.x,r[1]=Bi.y,r[5]=Ga.y,r[9]=wn.y,r[2]=Bi.z,r[6]=Ga.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],p=i[2],S=i[6],g=i[10],f=i[14],x=i[3],_=i[7],M=i[11],R=i[15],A=r[0],b=r[4],L=r[8],W=r[12],y=r[1],E=r[5],V=r[9],H=r[13],$=r[2],ee=r[6],G=r[10],z=r[14],N=r[3],j=r[7],K=r[11],ne=r[15];return s[0]=o*A+a*y+l*$+c*N,s[4]=o*b+a*E+l*ee+c*j,s[8]=o*L+a*V+l*G+c*K,s[12]=o*W+a*H+l*z+c*ne,s[1]=u*A+h*y+d*$+m*N,s[5]=u*b+h*E+d*ee+m*j,s[9]=u*L+h*V+d*G+m*K,s[13]=u*W+h*H+d*z+m*ne,s[2]=p*A+S*y+g*$+f*N,s[6]=p*b+S*E+g*ee+f*j,s[10]=p*L+S*V+g*G+f*K,s[14]=p*W+S*H+g*z+f*ne,s[3]=x*A+_*y+M*$+R*N,s[7]=x*b+_*E+M*ee+R*j,s[11]=x*L+_*V+M*G+R*K,s[15]=x*W+_*H+M*z+R*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],p=e[3],S=e[7],g=e[11],f=e[15];return p*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*m-i*l*m)+S*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+g*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],p=e[12],S=e[13],g=e[14],f=e[15],x=h*g*c-S*d*c+S*l*m-a*g*m-h*l*f+a*d*f,_=p*d*c-u*g*c-p*l*m+o*g*m+u*l*f-o*d*f,M=u*S*c-p*h*c+p*a*m-o*S*m-u*a*f+o*h*f,R=p*h*l-u*S*l-p*a*d+o*S*d+u*a*g-o*h*g,A=n*x+i*_+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=x*b,e[1]=(S*d*s-h*g*s-S*r*m+i*g*m+h*r*f-i*d*f)*b,e[2]=(a*g*s-S*l*s+S*r*c-i*g*c-a*r*f+i*l*f)*b,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*m-i*l*m)*b,e[4]=_*b,e[5]=(u*g*s-p*d*s+p*r*m-n*g*m-u*r*f+n*d*f)*b,e[6]=(p*l*s-o*g*s-p*r*c+n*g*c+o*r*f-n*l*f)*b,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*b,e[8]=M*b,e[9]=(p*h*s-u*S*s-p*i*m+n*S*m+u*i*f-n*h*f)*b,e[10]=(o*S*s-p*a*s+p*i*c-n*S*c-o*i*f+n*a*f)*b,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*m-n*a*m)*b,e[12]=R*b,e[13]=(u*S*r-p*h*r+p*i*d-n*S*d-u*i*g+n*h*g)*b,e[14]=(p*a*r-o*S*r-p*i*l+n*S*l+o*i*g-n*a*g)*b,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,p=s*h,S=o*u,g=o*h,f=a*h,x=l*c,_=l*u,M=l*h,R=i.x,A=i.y,b=i.z;return r[0]=(1-(S+f))*R,r[1]=(m+M)*R,r[2]=(p-_)*R,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+f))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(p+_)*b,r[9]=(g-x)*b,r[10]=(1-(d+S))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,p;if(a===Ti)m=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===ic)m=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,m=(i+r)*u;let p,S;if(a===Ti)p=(o+s)*h,S=-2*h;else if(a===ic)p=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new U,Wn=new vt,pM=new U(0,0,0),mM=new U(1,1,1),Bi=new U,Ga=new U,wn=new U,Vm=new vt,Gm=new ga;class Di{constructor(e=0,n=0,i=0,r=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gM=0;const jm=new U,as=new ga,vi=new vt,ja=new U,So=new U,vM=new U,xM=new ga,Wm=new U(1,0,0),$m=new U(0,1,0),Xm=new U(0,0,1),qm={type:"added"},_M={type:"removed"},ls={type:"childadded",child:null},xu={type:"childremoved",child:null};class Xt extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new U,n=new Di,i=new ga,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Xe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Wm,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,n){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wm,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(So,ja,this.up):vi.lookAt(ja,So,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(vi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_M),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,vM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,xM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new U(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new U,xi=new U,_u=new U,_i=new U,cs=new U,us=new U,Ym=new U,yu=new U,Su=new U,Mu=new U,wu=new bt,Eu=new bt,bu=new bt;class Qn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),xi.subVectors(i,n),_u.subVectors(e,n);const o=$n.dot($n),a=$n.dot(xi),l=$n.dot(_u),c=xi.dot(xi),u=xi.dot(_u),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-m-p,p,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return wu.setScalar(0),Eu.setScalar(0),bu.setScalar(0),wu.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),bu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wu,s.x),o.addScaledVector(Eu,s.y),o.addScaledVector(bu,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),xi.subVectors(e,n),$n.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),$n.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;cs.subVectors(r,i),us.subVectors(s,i),yu.subVectors(e,i);const l=cs.dot(yu),c=us.dot(yu);if(l<=0&&c<=0)return n.copy(i);Su.subVectors(e,r);const u=cs.dot(Su),h=us.dot(Su);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(cs,o);Mu.subVectors(e,s);const m=cs.dot(Mu),p=us.dot(Mu);if(p>=0&&m<=p)return n.copy(s);const S=m*c-l*p;if(S<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(us,a);const g=u*p-m*h;if(g<=0&&h-u>=0&&m-p>=0)return Ym.subVectors(s,r),a=(h-u)/(h-u+(m-p)),n.copy(r).addScaledVector(Ym,a);const f=1/(g+S+d);return o=S*f,a=d*f,n.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=nM(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Tu(o,s,e+1/3),this.g=Tu(o,s,e),this.b=Tu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=uu(e.r),this.g=uu(e.g),this.b=uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return it.fromWorkingColorSpace(Jt.copy(this),e),Math.round(jt(Jt.r*255,0,255))*65536+Math.round(jt(Jt.g*255,0,255))*256+Math.round(jt(Jt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Kn){it.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Wa);const i=lu(Hi.h,Wa.h,n),r=lu(Hi.s,Wa.s,n),s=lu(Hi.l,Wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Je;Je.NAMES=Rx;let yM=0;class oo extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=Us,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Hd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zr extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new U,$a=new me;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=km,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$a.fromBufferAttribute(this,n),$a.applyMatrix3(e),this.setXY(n,$a.x,$a.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class Px extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Nx extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class lt extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let SM=0;const In=new vt,Au=new Xt,ds=new U,En=new so,Mo=new so,Ut=new U;class yn extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bx(e)?Nx:Px)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(En.min,Mo.min),En.expandByPoint(Ut),Ut.addVectors(En.max,Mo.max),En.expandByPoint(Ut)):(En.expandByPoint(Mo.min),En.expandByPoint(Mo.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),Ut.add(ds)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new U,l[L]=new U;const c=new U,u=new U,h=new U,d=new me,m=new me,p=new me,S=new U,g=new U;function f(L,W,y){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,W),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,L),m.fromBufferAttribute(s,W),p.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(d),p.sub(d);const E=1/(m.x*p.y-p.x*m.y);isFinite(E)&&(S.copy(u).multiplyScalar(p.y).addScaledVector(h,-m.y).multiplyScalar(E),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(E),a[L].add(S),a[W].add(S),a[y].add(S),l[L].add(g),l[W].add(g),l[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,W=x.length;L<W;++L){const y=x[L],E=y.start,V=y.count;for(let H=E,$=E+V;H<$;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new U,M=new U,R=new U,A=new U;function b(L){R.fromBufferAttribute(r,L),A.copy(R);const W=a[L];_.copy(W),_.sub(R.multiplyScalar(R.dot(W))).normalize(),M.crossVectors(A,W);const E=M.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,E)}for(let L=0,W=x.length;L<W;++L){const y=x[L],E=y.start,V=y.count;for(let H=E,$=E+V;H<$;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const p=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,p=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let f=0;f<u;f++)d[p++]=c[m++]}return new hi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new vt,Mr=new Cx,Xa=new jf,Zm=new U,qa=new U,Ya=new U,Ka=new U,Cu=new U,Za=new U,Jm=new U,Ja=new U;class Wt extends Xt{constructor(e=new yn,n=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Cu.fromBufferAttribute(h,e),o?Za.addScaledVector(Cu,u):Za.addScaledVector(Cu.sub(n),u))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Xa.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Xa,Zm)===null||Mr.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Km),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,S=d.length;p<S;p++){const g=d[p],f=o[g.materialIndex],x=Math.max(g.start,m.start),_=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=x,R=_;M<R;M+=3){const A=a.getX(M),b=a.getX(M+1),L=a.getX(M+2);r=Qa(this,f,e,i,c,u,h,A,b,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let g=p,f=S;g<f;g+=3){const x=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);r=Qa(this,o,e,i,c,u,h,x,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,S=d.length;p<S;p++){const g=d[p],f=o[g.materialIndex],x=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=x,R=_;M<R;M+=3){const A=M,b=M+1,L=M+2;r=Qa(this,f,e,i,c,u,h,A,b,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=p,f=S;g<f;g+=3){const x=g,_=g+1,M=g+2;r=Qa(this,o,e,i,c,u,h,x,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function MM(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ja);return c<n.near||c>n.far?null:{distance:c,point:Ja.clone(),object:t}}function Qa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qa),t.getVertexPosition(l,Ya),t.getVertexPosition(c,Ka);const u=MM(t,e,n,i,qa,Ya,Ka,Jm);if(u){const h=new U;Qn.getBarycoord(Jm,qa,Ya,Ka,h),r&&(u.uv=Qn.getInterpolatedAttribute(r,a,l,c,h,new me)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,a,l,c,h,new me)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Qn.getNormal(qa,Ya,Ka,d.normal),u.face=d,u.barycoord=h}return u}class Gt extends yn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function p(S,g,f,x,_,M,R,A,b,L,W){const y=M/b,E=R/L,V=M/2,H=R/2,$=A/2,ee=b+1,G=L+1;let z=0,N=0;const j=new U;for(let K=0;K<G;K++){const ne=K*E-H;for(let Ae=0;Ae<ee;Ae++){const Ge=Ae*y-V;j[S]=Ge*x,j[g]=ne*_,j[f]=$,c.push(j.x,j.y,j.z),j[S]=0,j[g]=0,j[f]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(Ae/b),h.push(1-K/L),z+=1}}for(let K=0;K<L;K++)for(let ne=0;ne<b;ne++){const Ae=d+ne+ee*K,Ge=d+ne+ee*(K+1),Z=d+(ne+1)+ee*(K+1),k=d+(ne+1)+ee*K;l.push(Ae,Ge,k),l.push(Ge,Z,k),N+=6}a.addGroup(m,N,W),m+=N,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function wM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const EM={clone:Zs,merge:sn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dx extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new U,Qm=new me,e0=new me;class Tn extends Dx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,Qm,e0),n.subVectors(e0,Qm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,fs=1;class AM extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(hs,fs,e,n);r.layers=this.layers,this.add(r);const s=new Tn(hs,fs,e,n);s.layers=this.layers,this.add(s);const o=new Tn(hs,fs,e,n);o.layers=this.layers,this.add(o);const a=new Tn(hs,fs,e,n);a.layers=this.layers,this.add(a);const l=new Tn(hs,fs,e,n);l.layers=this.layers,this.add(l);const c=new Tn(hs,fs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,m),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ix extends nn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CM extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ix(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gt(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:or});s.uniforms.tEquirect.value=n;const o=new Wt(r,s),a=n.minFilter;return n.minFilter===Or&&(n.minFilter=Jn),new AM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ru=new U,RM=new U,PM=new Xe;class Rr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ru.subVectors(i,n).cross(RM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PM.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new jf,el=new U;class $f{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],p=r[9],S=r[10],g=r[11],f=r[12],x=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,g-m,M-f).normalize(),i[1].setComponents(l+s,d+c,g+m,M+f).normalize(),i[2].setComponents(l+o,d+u,g+p,M+x).normalize(),i[3].setComponents(l-o,d-u,g-p,M-x).normalize(),i[4].setComponents(l-a,d-h,g-S,M-_).normalize(),n===Ti)i[5].setComponents(l+a,d+h,g+S,M+_).normalize();else if(n===ic)i[5].setComponents(a,h,S,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ux(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((m,p)=>m.start-p.start);let d=0;for(let m=1;m<h.length;m++){const p=h[d],S=h[m];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++d,h[d]=S)}h.length=d+1;for(let m=0,p=h.length;m<p;m++){const S=h[m];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Js extends yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,m=[],p=[],S=[],g=[];for(let f=0;f<u;f++){const x=f*d-o;for(let _=0;_<c;_++){const M=_*h-s;p.push(M,-x,0),S.push(0,0,1),g.push(_/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,M=x+c*(f+1),R=x+1+c*(f+1),A=x+1+c*f;m.push(_,M,A),m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(S,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var LM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
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
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
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
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WM=`#ifdef USE_IRIDESCENCE
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
#endif`,$M=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tw=`#define PI 3.141592653589793
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
} // validated`,nw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iw=`vec3 transformedNormal = objectNormal;
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
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",cw=`
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
}`,uw=`#ifdef USE_ENVMAP
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
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hw=`#ifdef USE_ENVMAP
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
#endif`,fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_w=`#ifdef USE_GRADIENTMAP
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
}`,yw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
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
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rw=`PhysicalMaterial material;
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
#endif`,Pw=`struct PhysicalMaterial {
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
}`,Nw=`
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
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hw=`#if defined( USE_POINTS_UV )
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
#endif`,Vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ww=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$w=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xw=`#ifdef USE_MORPHTARGETS
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
#endif`,qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gE=`float getShadowMask() {
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
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`#include <common>
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
}`,OE=`#if DEPTH_PACKING == 3200
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
}`,zE=`#define DISTANCE
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
}`,BE=`#define DISTANCE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
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
}`,jE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,XE=`#define LAMBERT
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
}`,qE=`#define LAMBERT
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
}`,YE=`#define MATCAP
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
}`,KE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,JE=`#define NORMAL
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
}`,QE=`#define PHONG
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
}`,eb=`#define PHONG
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
}`,tb=`#define STANDARD
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
}`,nb=`#define STANDARD
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
}`,ib=`#define TOON
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
}`,rb=`#define TOON
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
}`,sb=`uniform float size;
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
}`,ob=`uniform vec3 diffuse;
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
}`,ab=`#include <common>
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
}`,lb=`uniform vec3 color;
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
}`,cb=`uniform float rotation;
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
}`,ub=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:LM,alphahash_pars_fragment:DM,alphamap_fragment:IM,alphamap_pars_fragment:UM,alphatest_fragment:kM,alphatest_pars_fragment:FM,aomap_fragment:OM,aomap_pars_fragment:zM,batching_pars_vertex:BM,batching_vertex:HM,begin_vertex:VM,beginnormal_vertex:GM,bsdfs:jM,iridescence_fragment:WM,bumpmap_pars_fragment:$M,clipping_planes_fragment:XM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:KM,color_fragment:ZM,color_pars_fragment:JM,color_pars_vertex:QM,color_vertex:ew,common:tw,cube_uv_reflection_fragment:nw,defaultnormal_vertex:iw,displacementmap_pars_vertex:rw,displacementmap_vertex:sw,emissivemap_fragment:ow,emissivemap_pars_fragment:aw,colorspace_fragment:lw,colorspace_pars_fragment:cw,envmap_fragment:uw,envmap_common_pars_fragment:dw,envmap_pars_fragment:hw,envmap_pars_vertex:fw,envmap_physical_pars_fragment:Ew,envmap_vertex:pw,fog_vertex:mw,fog_pars_vertex:gw,fog_fragment:vw,fog_pars_fragment:xw,gradientmap_pars_fragment:_w,lightmap_pars_fragment:yw,lights_lambert_fragment:Sw,lights_lambert_pars_fragment:Mw,lights_pars_begin:ww,lights_toon_fragment:bw,lights_toon_pars_fragment:Tw,lights_phong_fragment:Aw,lights_phong_pars_fragment:Cw,lights_physical_fragment:Rw,lights_physical_pars_fragment:Pw,lights_fragment_begin:Nw,lights_fragment_maps:Lw,lights_fragment_end:Dw,logdepthbuf_fragment:Iw,logdepthbuf_pars_fragment:Uw,logdepthbuf_pars_vertex:kw,logdepthbuf_vertex:Fw,map_fragment:Ow,map_pars_fragment:zw,map_particle_fragment:Bw,map_particle_pars_fragment:Hw,metalnessmap_fragment:Vw,metalnessmap_pars_fragment:Gw,morphinstance_vertex:jw,morphcolor_vertex:Ww,morphnormal_vertex:$w,morphtarget_pars_vertex:Xw,morphtarget_vertex:qw,normal_fragment_begin:Yw,normal_fragment_maps:Kw,normal_pars_fragment:Zw,normal_pars_vertex:Jw,normal_vertex:Qw,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:aE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:_E,skinnormal_vertex:yE,specularmap_fragment:SE,specularmap_pars_fragment:ME,tonemapping_fragment:wE,tonemapping_pars_fragment:EE,transmission_fragment:bE,transmission_pars_fragment:TE,uv_pars_fragment:AE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:PE,background_vert:NE,background_frag:LE,backgroundCube_vert:DE,backgroundCube_frag:IE,cube_vert:UE,cube_frag:kE,depth_vert:FE,depth_frag:OE,distanceRGBA_vert:zE,distanceRGBA_frag:BE,equirect_vert:HE,equirect_frag:VE,linedashed_vert:GE,linedashed_frag:jE,meshbasic_vert:WE,meshbasic_frag:$E,meshlambert_vert:XE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:KE,meshnormal_vert:ZE,meshnormal_frag:JE,meshphong_vert:QE,meshphong_frag:eb,meshphysical_vert:tb,meshphysical_frag:nb,meshtoon_vert:ib,meshtoon_frag:rb,points_vert:sb,points_frag:ob,shadow_vert:ab,shadow_frag:lb,sprite_vert:cb,sprite_frag:ub},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ai={basic:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:sn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:sn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:sn([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:sn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:sn([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:sn([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:sn([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:sn([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ai.physical={uniforms:sn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const tl={r:0,b:0,g:0},Er=new Di,db=new vt;function hb(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?n:e).get(_)),_}function S(x){let _=!1;const M=p(x);M===null?f(a,l):M&&M.isColor&&(f(M,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Ec)?(u===void 0&&(u=new Wt(new Gt(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Zs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(_.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(db.makeRotationFromEuler(Er)),u.material.toneMapped=it.getTransfer(M.colorSpace)!==ft,(h!==M||d!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Wt(new Js(2,2),new pr({name:"BackgroundMaterial",uniforms:Zs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(tl,Lx(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:S,addToRenderList:g}}function fb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,E,V,H,$){let ee=!1;const G=h(H,V,E);s!==G&&(s=G,c(s.object)),ee=m(y,H,V,$),ee&&p(y,H,V,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,M(y,E,V,H),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function h(y,E,V){const H=V.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let ee=$[E.id];ee===void 0&&(ee={},$[E.id]=ee);let G=ee[H];return G===void 0&&(G=d(l()),ee[H]=G),G}function d(y){const E=[],V=[],H=[];for(let $=0;$<n;$++)E[$]=0,V[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:H,object:y,attributes:{},index:null}}function m(y,E,V,H){const $=s.attributes,ee=E.attributes;let G=0;const z=V.getAttributes();for(const N in z)if(z[N].location>=0){const K=$[N];let ne=ee[N];if(ne===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;G++}return s.attributesNum!==G||s.index!==H}function p(y,E,V,H){const $={},ee=E.attributes;let G=0;const z=V.getAttributes();for(const N in z)if(z[N].location>=0){let K=ee[N];K===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),$[N]=ne,G++}s.attributes=$,s.attributesNum=G,s.index=H}function S(){const y=s.newAttributes;for(let E=0,V=y.length;E<V;E++)y[E]=0}function g(y){f(y,0)}function f(y,E){const V=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;V[y]=1,H[y]===0&&(t.enableVertexAttribArray(y),H[y]=1),$[y]!==E&&(t.vertexAttribDivisor(y,E),$[y]=E)}function x(){const y=s.newAttributes,E=s.enabledAttributes;for(let V=0,H=E.length;V<H;V++)E[V]!==y[V]&&(t.disableVertexAttribArray(V),E[V]=0)}function _(y,E,V,H,$,ee,G){G===!0?t.vertexAttribIPointer(y,E,V,$,ee):t.vertexAttribPointer(y,E,V,H,$,ee)}function M(y,E,V,H){S();const $=H.attributes,ee=V.getAttributes(),G=E.defaultAttributeValues;for(const z in ee){const N=ee[z];if(N.location>=0){let j=$[z];if(j===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const K=j.normalized,ne=j.itemSize,Ae=e.get(j);if(Ae===void 0)continue;const Ge=Ae.buffer,Z=Ae.type,k=Ae.bytesPerElement,ce=Z===t.INT||Z===t.UNSIGNED_INT||j.gpuType===kf;if(j.isInterleavedBufferAttribute){const te=j.data,Ce=te.stride,Pe=j.offset;if(te.isInstancedInterleavedBuffer){for(let Ie=0;Ie<N.locationSize;Ie++)f(N.location+Ie,te.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ie=0;Ie<N.locationSize;Ie++)g(N.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Ie=0;Ie<N.locationSize;Ie++)_(N.location+Ie,ne/N.locationSize,Z,K,Ce*k,(Pe+ne/N.locationSize*Ie)*k,ce)}else{if(j.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)f(N.location+te,j.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<N.locationSize;te++)g(N.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let te=0;te<N.locationSize;te++)_(N.location+te,ne/N.locationSize,Z,K,ne*k,ne/N.locationSize*te*k,ce)}}else if(G!==void 0){const K=G[z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(N.location,K);break;case 3:t.vertexAttrib3fv(N.location,K);break;case 4:t.vertexAttrib4fv(N.location,K);break;default:t.vertexAttrib1fv(N.location,K)}}}}x()}function R(){L();for(const y in i){const E=i[y];for(const V in E){const H=E[V];for(const $ in H)u(H[$].object),delete H[$];delete E[V]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const V in E){const H=E[V];for(const $ in H)u(H[$].object),delete H[$];delete E[V]}delete i[y.id]}function b(y){for(const E in i){const V=i[E];if(V[y.id]===void 0)continue;const H=V[y.id];for(const $ in H)u(H[$].object),delete H[$];delete V[y.id]}}function L(){W(),o=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:W,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:g,disableUnusedAttributes:x}}function pb(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];n.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let p=0;for(let S=0;S<h;S++)p+=u[S];for(let S=0;S<d.length;S++)n.update(p,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ei&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const L=b===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Li&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==bi&&!L)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function gb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Rr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,m){const p=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const x=s?0:i,_=x*4;let M=f.clippingState||null;l.value=M,M=u(p,d,_,m);for(let R=0;R!==_;++R)M[R]=n[R];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,p){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,p!==!0||g===null){const f=m+S*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,M=m;_!==S;++_,M+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function vb(t){let e=new WeakMap;function n(o,a){return a===Yd?o.mapping=Xs:a===Kd&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yd||a===Kd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new CM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Xf extends Dx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,t0=[.125,.215,.35,.446,.526,.582],Lr=20,Pu=new Xf,n0=new Je;let Nu=null,Lu=0,Du=0,Iu=!1;const Pr=(1+Math.sqrt(5))/2,ps=1/Pr,i0=[new U(-Pr,ps,0),new U(Pr,ps,0),new U(-ps,0,Pr),new U(ps,0,Pr),new U(0,Pr,-ps),new U(0,Pr,ps),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class r0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Lu,Du),this._renderer.xr.enabled=Iu,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:ma,format:ei,colorSpace:xr,depthBuffer:!1},r=s0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xb(s)),this._blurMaterial=_b(s,e,n)}return r}_compileMaterial(e){const n=new Wt(this._lodPlanes[0],e);this._renderer.compile(n,Pu)}_sceneToCubeUV(e,n,i,r){const a=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(n0),u.toneMapping=ar,u.autoClear=!1;const m=new zr({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),p=new Wt(new Gt,m);let S=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,S=!0):(m.color.copy(n0),S=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;nl(r,x*_,f>2?_:0,_,_),u.setRenderTarget(r),S&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=i0[(r-s-1)%i0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Lr-1),S=s/p,g=isFinite(s)?1+Math.floor(u*S):Lr;g>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Lr}`);const f=[];let x=0;for(let b=0;b<Lr;++b){const L=b/S,W=Math.exp(-L*L/2);f.push(W),b===0?x+=W:b<g&&(x+=2*W)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;const M=this._sizeLods[r],R=3*M*(r>_-As?r-_+As:0),A=4*(this._cubeSize-M);nl(n,R,A,3*M,2*M),l.setRenderTarget(n),l.render(h,Pu)}}function xb(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+t0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-As?l=t0[o-t+As-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,p=6,S=3,g=2,f=1,x=new Float32Array(S*p*m),_=new Float32Array(g*p*m),M=new Float32Array(f*p*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,L=A>2?0:-1,W=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];x.set(W,S*p*A),_.set(d,g*p*A);const y=[A,A,A,A,A,A];M.set(y,f*p*A)}const R=new yn;R.setAttribute("position",new hi(x,S)),R.setAttribute("uv",new hi(_,g)),R.setAttribute("faceIndex",new hi(M,f)),e.push(R),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function s0(t,e,n){const i=new Yr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _b(t,e,n){const i=new Float32Array(Lr),r=new U(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function o0(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function a0(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function qf(){return`

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
	`}function yb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yd||l===Kd,u=l===Xs||l===qs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new r0(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new r0(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Sb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Tl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Mb(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const S=d.morphAttributes[p];for(let g=0,f=S.length;g<f;g++)e.remove(S[g])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const p in m){const S=m[p];for(let g=0,f=S.length;g<f;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,p=h.attributes.position;let S=0;if(m!==null){const x=m.array;S=m.version;for(let _=0,M=x.length;_<M;_+=3){const R=x[_+0],A=x[_+1],b=x[_+2];d.push(R,A,A,b,b,R)}}else if(p!==void 0){const x=p.array;S=p.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const R=_+0,A=_+1,b=_+2;d.push(R,A,A,b,b,R)}}else return;const g=new(bx(d)?Nx:Px)(d,1);g.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wb(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,p){p!==0&&(t.drawElementsInstanced(i,m,s,d*o,p),n.update(m,i,p))}function u(d,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,p);let g=0;for(let f=0;f<p;f++)g+=m[f];n.update(g,i,1)}function h(d,m,p,S){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],S[f]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,p);let f=0;for(let x=0;x<p;x++)f+=m[x];for(let x=0;x<S.length;x++)n.update(f,i,S[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Eb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bb(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let R=a.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*A*4*h),L=new Ax(b,R,A,h);L.type=bi,L.needsUpdate=!0;const W=M*4;for(let E=0;E<h;E++){const V=f[E],H=x[E],$=_[E],ee=R*A*4*E;for(let G=0;G<V.count;G++){const z=G*W;p===!0&&(r.fromBufferAttribute(V,G),b[ee+z+0]=r.x,b[ee+z+1]=r.y,b[ee+z+2]=r.z,b[ee+z+3]=0),S===!0&&(r.fromBufferAttribute(H,G),b[ee+z+4]=r.x,b[ee+z+5]=r.y,b[ee+z+6]=r.z,b[ee+z+7]=0),g===!0&&(r.fromBufferAttribute($,G),b[ee+z+8]=r.x,b[ee+z+9]=r.y,b[ee+z+10]=r.z,b[ee+z+11]=$.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new me(R,A)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const S=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Tb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class kx extends nn{constructor(e,n,i,r,s,o,a,l,c,u=ks){if(u!==ks&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ks&&(i=qr),i===void 0&&u===Ks&&(i=Ys),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Fx=new nn,l0=new kx(1,1),Ox=new Ax,zx=new hM,Bx=new Ix,c0=[],u0=[],d0=new Float32Array(16),h0=new Float32Array(9),f0=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=c0[r];if(s===void 0&&(s=new Float32Array(r),c0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=u0[e];n===void 0&&(n=new Int32Array(e),u0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function Nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;f0.set(i),t.uniformMatrix2fv(this.addr,!1,f0),It(n,i)}}function Lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;h0.set(i),t.uniformMatrix3fv(this.addr,!1,h0),It(n,i)}}function Db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;d0.set(i),t.uniformMatrix4fv(this.addr,!1,d0),It(n,i)}}function Ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function Ob(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(l0.compareFunction=Ex,s=l0):s=Fx,n.setTexture2D(e||s,r)}function Gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zx,r)}function jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Bx,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ox,r)}function $b(t){switch(t){case 5126:return Ab;case 35664:return Cb;case 35665:return Rb;case 35666:return Pb;case 35674:return Nb;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Ub;case 35668:case 35672:return kb;case 35669:case 35673:return Fb;case 5125:return Ob;case 36294:return zb;case 36295:return Bb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Wb}}function Xb(t,e){t.uniform1fv(this.addr,e)}function qb(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function Yb(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function Kb(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function Zb(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Jb(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Qb(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eT(t,e){t.uniform1iv(this.addr,e)}function tT(t,e){t.uniform2iv(this.addr,e)}function nT(t,e){t.uniform3iv(this.addr,e)}function iT(t,e){t.uniform4iv(this.addr,e)}function rT(t,e){t.uniform1uiv(this.addr,e)}function sT(t,e){t.uniform2uiv(this.addr,e)}function oT(t,e){t.uniform3uiv(this.addr,e)}function aT(t,e){t.uniform4uiv(this.addr,e)}function lT(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fx,s[o])}function cT(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||zx,s[o])}function uT(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Bx,s[o])}function dT(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ox,s[o])}function hT(t){switch(t){case 5126:return Xb;case 35664:return qb;case 35665:return Yb;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return oT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return dT}}class fT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$b(n.type)}}class pT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hT(n.type)}}class mT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function p0(t,e){t.seq.push(e),t.map[e.id]=e}function gT(t,e,n){const i=t.name,r=i.length;for(Uu.lastIndex=0;;){const s=Uu.exec(i),o=Uu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){p0(n,c===void 0?new fT(a,t,e):new pT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new mT(a),p0(n,h)),n=h}}}class Al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);gT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function m0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vT=37297;let xT=0;function _T(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function yT(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===nc&&n===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&n===nc&&(i="LinearSRGBToLinearDisplayP3"),t){case xr:case bc:return[i,"LinearTransferOETF"];case Kn:case Gf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function g0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_T(t.getShaderSource(e),o)}else return r}function ST(t,e){const n=yT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function MT(t,e){let n;switch(e){case O1:n="Linear";break;case z1:n="Reinhard";break;case B1:n="Cineon";break;case H1:n="ACESFilmic";break;case G1:n="AgX";break;case j1:n="Neutral";break;case V1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const il=new U;function wT(){it.getLuminanceCoefficients(il);const t=il.x.toFixed(4),e=il.y.toFixed(4),n=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ET(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function bT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function v0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(t){return t.replace(AT,RT)}const CT=new Map;function RT(t,e){let n=$e[e];if(n===void 0){const i=CT.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bh(n)}const PT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(t){return t.replace(PT,NT)}function NT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function y0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function LT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function DT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function UT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hx:e="ENVMAP_BLENDING_MULTIPLY";break;case k1:e="ENVMAP_BLENDING_MIX";break;case F1:e="ENVMAP_BLENDING_ADD";break}return e}function kT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function FT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=LT(n),c=DT(n),u=IT(n),h=UT(n),d=kT(n),m=ET(n),p=bT(s),S=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Co).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Co).join(`
`),f.length>0&&(f+=`
`)):(g=[y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),f=[y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?$e.tonemapping_pars_fragment:"",n.toneMapping!==ar?MT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,ST("linearToOutputTexel",n.outputColorSpace),wT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=bh(o),o=v0(o,n),o=x0(o,n),a=bh(a),a=v0(a,n),a=x0(a,n),o=_0(o),a=_0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+g+o,M=x+f+a,R=m0(r,r.VERTEX_SHADER,_),A=m0(r,r.FRAGMENT_SHADER,M);r.attachShader(S,R),r.attachShader(S,A),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(E){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),H=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(A).trim();let ee=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,R,A);else{const z=g0(r,R,"vertex"),N=g0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+z+`
`+N)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||$==="")&&(G=!1);G&&(E.diagnostics={runnable:ee,programLog:V,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:f}})}r.deleteShader(R),r.deleteShader(A),L=new Al(r,S),W=TT(r,S)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let W;this.getAttributes=function(){return W===void 0&&b(this),W};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,vT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=A,this}let OT=0;class zT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BT(e),n.set(e,i)),i}}class BT{constructor(e){this.id=OT++,this.code=e,this.usedTimes=0}}function HT(t,e,n,i,r,s,o){const a=new Wf,l=new zT,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let p=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,E,V,H,$){const ee=H.fog,G=$.geometry,z=y.isMeshStandardMaterial?H.environment:null,N=(y.isMeshStandardMaterial?n:e).get(y.envMap||z),j=N&&N.mapping===Ec?N.image.height:null,K=S[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=ne!==void 0?ne.length:0;let Ge=0;G.morphAttributes.position!==void 0&&(Ge=1),G.morphAttributes.normal!==void 0&&(Ge=2),G.morphAttributes.color!==void 0&&(Ge=3);let Z,k,ce,te;if(K){const dn=ai[K];Z=dn.vertexShader,k=dn.fragmentShader}else Z=y.vertexShader,k=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const Ce=t.getRenderTarget(),Pe=$.isInstancedMesh===!0,Ie=$.isBatchedMesh===!0,Oe=!!y.map,oe=!!y.matcap,P=!!N,D=!!y.aoMap,q=!!y.lightMap,J=!!y.bumpMap,se=!!y.normalMap,ve=!!y.displacementMap,he=!!y.emissiveMap,C=!!y.metalnessMap,w=!!y.roughnessMap,B=y.anisotropy>0,ie=y.clearcoat>0,ae=y.dispersion>0,re=y.iridescence>0,Le=y.sheen>0,xe=y.transmission>0,Ee=B&&!!y.anisotropyMap,Ye=ie&&!!y.clearcoatMap,fe=ie&&!!y.clearcoatNormalMap,be=ie&&!!y.clearcoatRoughnessMap,He=re&&!!y.iridescenceMap,Ve=re&&!!y.iridescenceThicknessMap,Re=Le&&!!y.sheenColorMap,Ke=Le&&!!y.sheenRoughnessMap,je=!!y.specularMap,ct=!!y.specularColorMap,I=!!y.specularIntensityMap,Me=xe&&!!y.transmissionMap,Q=xe&&!!y.thicknessMap,le=!!y.gradientMap,ye=!!y.alphaMap,we=y.alphaTest>0,Ze=!!y.alphaHash,Ct=!!y.extensions;let un=ar;y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(un=t.toneMapping);const et={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:k,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&$._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&$.instanceColor!==null,instancingMorph:Pe&&$.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:xr,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:oe,envMap:P,envMapMode:P&&N.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:q,bumpMap:J,normalMap:se,displacementMap:m&&ve,emissiveMap:he,normalMapObjectSpace:se&&y.normalMapType===q1,normalMapTangentSpace:se&&y.normalMapType===wx,metalnessMap:C,roughnessMap:w,anisotropy:B,anisotropyMap:Ee,clearcoat:ie,clearcoatMap:Ye,clearcoatNormalMap:fe,clearcoatRoughnessMap:be,dispersion:ae,iridescence:re,iridescenceMap:He,iridescenceThicknessMap:Ve,sheen:Le,sheenColorMap:Re,sheenRoughnessMap:Ke,specularMap:je,specularColorMap:ct,specularIntensityMap:I,transmission:xe,transmissionMap:Me,thicknessMap:Q,gradientMap:le,opaque:y.transparent===!1&&y.blending===Us&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:we,alphaHash:Ze,combine:y.combine,mapUv:Oe&&g(y.map.channel),aoMapUv:D&&g(y.aoMap.channel),lightMapUv:q&&g(y.lightMap.channel),bumpMapUv:J&&g(y.bumpMap.channel),normalMapUv:se&&g(y.normalMap.channel),displacementMapUv:ve&&g(y.displacementMap.channel),emissiveMapUv:he&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:Ee&&g(y.anisotropyMap.channel),clearcoatMapUv:Ye&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&g(y.sheenRoughnessMap.channel),specularMapUv:je&&g(y.specularMap.channel),specularColorMapUv:ct&&g(y.specularColorMap.channel),specularIntensityMapUv:I&&g(y.specularIntensityMap.channel),transmissionMapUv:Me&&g(y.transmissionMap.channel),thicknessMapUv:Q&&g(y.thicknessMap.channel),alphaMapUv:ye&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(se||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(Oe||ye),fog:!!ee,useFog:y.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:un,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fn,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ct&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&y.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)E.push(V),E.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(_(E,y),M(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const E=S[y.type];let V;if(E){const H=ai[E];V=EM.clone(H.uniforms)}else V=y.uniforms;return V}function A(y,E){let V;for(let H=0,$=u.length;H<$;H++){const ee=u[H];if(ee.cacheKey===E){V=ee,++V.usedTimes;break}}return V===void 0&&(V=new FT(t,E,y,s),u.push(V)),V}function b(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function L(y){l.remove(y)}function W(){l.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:R,acquireProgram:A,releaseProgram:b,releaseShaderCache:L,programs:u,dispose:W}}function VT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function GT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function S0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function M0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,p,S,g){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:p,renderOrder:h.renderOrder,z:S,group:g},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=p,f.renderOrder=h.renderOrder,f.z=S,f.group=g),e++,f}function a(h,d,m,p,S,g){const f=o(h,d,m,p,S,g);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(h,d,m,p,S,g){const f=o(h,d,m,p,S,g);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||GT),i.length>1&&i.sort(d||S0),r.length>1&&r.sort(d||S0)}function u(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new M0,t.set(i,[o])):r>=s.length?(o=new M0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Je};break;case"SpotLight":n={position:new U,direction:new U,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function $T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XT=0;function qT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YT(t){const e=new WT,n=$T(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new vt,o=new vt;function a(c){let u=0,h=0,d=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let m=0,p=0,S=0,g=0,f=0,x=0,_=0,M=0,R=0,A=0,b=0;c.sort(qT);for(let W=0,y=c.length;W<y;W++){const E=c[W],V=E.color,H=E.intensity,$=E.distance,ee=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=V.r*H,h+=V.g*H,d+=V.b*H;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],H);b++}else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const z=E.shadow,N=n.get(E);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=E.shadow.matrix,x++}i.directional[m]=G,m++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(V).multiplyScalar(H),G.distance=$,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[S]=G;const z=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,z.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[S]=z.matrix,E.castShadow){const N=n.get(E);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=ee,M++}S++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(V).multiplyScalar(H),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=G,g++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const z=E.shadow,N=n.get(E);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[p]=N,i.pointShadowMap[p]=ee,i.pointShadowMatrix[p]=E.shadow.matrix,_++}i.point[p]=G,p++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(H),G.groundColor.copy(E.groundColor).multiplyScalar(H),i.hemi[f]=G,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==_||L.numSpotShadows!==M||L.numSpotMaps!==R||L.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=p,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=_,L.numSpotShadows=M,L.numSpotMaps=R,L.numLightProbes=b,i.version=XT++)}function l(c,u){let h=0,d=0,m=0,p=0,S=0;const g=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function w0(t){const e=new YT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new w0(t),e.set(r,[a])):s>=o.length?(a=new w0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ZT extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JT extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
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
}`;function t2(t,e,n){let i=new $f;const r=new me,s=new me,o=new bt,a=new ZT({depthPacking:X1}),l=new JT,c={},u=n.maxTextureSize,h={[fr]:_n,[_n]:fr,[Fn]:Fn},d=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:QT,fragmentShader:e2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const p=new yn;p.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Wt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dx;let f=this.type;this.render=function(A,b,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const W=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),V=t.state;V.setBlending(or),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=f!==yi&&this.type===yi,$=f===yi&&this.type!==yi;for(let ee=0,G=A.length;ee<G;ee++){const z=A[ee],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null||H===!0||$===!0){const ne=this.type!==yi?{minFilter:tn,magFilter:tn}:{};N.map!==null&&N.map.dispose(),N.map=new Yr(r.x,r.y,ne),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const K=N.getViewportCount();for(let ne=0;ne<K;ne++){const Ae=N.getViewport(ne);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),V.viewport(o),N.updateMatrices(z,ne),i=N.getFrustum(),M(b,L,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===yi&&x(N,L),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(W,y,E)};function x(A,b){const L=e.update(S);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,L,d,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,L,m,S,null)}function _(A,b,L,W){let y=null;const E=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)y=E;else if(y=L.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=y.uuid,H=b.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let ee=$[H];ee===void 0&&(ee=y.clone(),$[H]=ee,b.addEventListener("dispose",R)),y=ee}if(y.visible=b.visible,y.wireframe=b.wireframe,W===yi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=L}return y}function M(A,b,L,W,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===yi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=e.update(A),$=A.material;if(Array.isArray($)){const ee=H.groups;for(let G=0,z=ee.length;G<z;G++){const N=ee[G],j=$[N.materialIndex];if(j&&j.visible){const K=_(A,j,W,y);A.onBeforeShadow(t,A,b,L,H,K,N),t.renderBufferDirect(L,null,H,K,A,N),A.onAfterShadow(t,A,b,L,H,K,N)}}}else if($.visible){const ee=_(A,$,W,y);A.onBeforeShadow(t,A,b,L,H,ee,null),t.renderBufferDirect(L,null,H,ee,A,null),A.onAfterShadow(t,A,b,L,H,ee,null)}}const V=A.children;for(let H=0,$=V.length;H<$;H++)M(V[H],b,L,W,y)}function R(A){A.target.removeEventListener("dispose",R);for(const L in c){const W=c[L],y=A.target.uuid;y in W&&(W[y].dispose(),delete W[y])}}}const n2={[Vd]:Gd,[jd]:Xd,[Wd]:qd,[$s]:$d,[Gd]:Vd,[Xd]:jd,[qd]:Wd,[$d]:$s};function i2(t){function e(){let I=!1;const Me=new bt;let Q=null;const le=new bt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!I&&(t.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){I=ye},setClear:function(ye,we,Ze,Ct,un){un===!0&&(ye*=Ct,we*=Ct,Ze*=Ct),Me.set(ye,we,Ze,Ct),le.equals(Me)===!1&&(t.clearColor(ye,we,Ze,Ct),le.copy(Me))},reset:function(){I=!1,Q=null,le.set(-1,0,0,0)}}}function n(){let I=!1,Me=!1,Q=null,le=null,ye=null;return{setReversed:function(we){Me=we},setTest:function(we){we?ce(t.DEPTH_TEST):te(t.DEPTH_TEST)},setMask:function(we){Q!==we&&!I&&(t.depthMask(we),Q=we)},setFunc:function(we){if(Me&&(we=n2[we]),le!==we){switch(we){case Vd:t.depthFunc(t.NEVER);break;case Gd:t.depthFunc(t.ALWAYS);break;case jd:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case Wd:t.depthFunc(t.EQUAL);break;case $d:t.depthFunc(t.GEQUAL);break;case Xd:t.depthFunc(t.GREATER);break;case qd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=we}},setLocked:function(we){I=we},setClear:function(we){ye!==we&&(t.clearDepth(we),ye=we)},reset:function(){I=!1,Q=null,le=null,ye=null}}}function i(){let I=!1,Me=null,Q=null,le=null,ye=null,we=null,Ze=null,Ct=null,un=null;return{setTest:function(et){I||(et?ce(t.STENCIL_TEST):te(t.STENCIL_TEST))},setMask:function(et){Me!==et&&!I&&(t.stencilMask(et),Me=et)},setFunc:function(et,dn,pi){(Q!==et||le!==dn||ye!==pi)&&(t.stencilFunc(et,dn,pi),Q=et,le=dn,ye=pi)},setOp:function(et,dn,pi){(we!==et||Ze!==dn||Ct!==pi)&&(t.stencilOp(et,dn,pi),we=et,Ze=dn,Ct=pi)},setLocked:function(et){I=et},setClear:function(et){un!==et&&(t.clearStencil(et),un=et)},reset:function(){I=!1,Me=null,Q=null,le=null,ye=null,we=null,Ze=null,Ct=null,un=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,p=!1,S=null,g=null,f=null,x=null,_=null,M=null,R=null,A=new Je(0,0,0),b=0,L=!1,W=null,y=null,E=null,V=null,H=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,G=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),ee=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ee=G>=2);let N=null,j={};const K=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),Ae=new bt().fromArray(K),Ge=new bt().fromArray(ne);function Z(I,Me,Q,le){const ye=new Uint8Array(4),we=t.createTexture();t.bindTexture(I,we),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<Q;Ze++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(Me+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return we}const k={};k[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc($s),q(!1),J(Nm),ce(t.CULL_FACE),P(or);function ce(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function te(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ce(I,Me){return u[I]!==Me?(t.bindFramebuffer(I,Me),u[I]=Me,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Me),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function Pe(I,Me){let Q=d,le=!1;if(I){Q=h.get(Me),Q===void 0&&(Q=[],h.set(Me,Q));const ye=I.textures;if(Q.length!==ye.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ze=ye.length;we<Ze;we++)Q[we]=t.COLOR_ATTACHMENT0+we;Q.length=ye.length,le=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,le=!0);le&&t.drawBuffers(Q)}function Ie(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const Oe={[Nr]:t.FUNC_ADD,[_1]:t.FUNC_SUBTRACT,[y1]:t.FUNC_REVERSE_SUBTRACT};Oe[S1]=t.MIN,Oe[M1]=t.MAX;const oe={[w1]:t.ZERO,[E1]:t.ONE,[b1]:t.SRC_COLOR,[Bd]:t.SRC_ALPHA,[N1]:t.SRC_ALPHA_SATURATE,[R1]:t.DST_COLOR,[A1]:t.DST_ALPHA,[T1]:t.ONE_MINUS_SRC_COLOR,[Hd]:t.ONE_MINUS_SRC_ALPHA,[P1]:t.ONE_MINUS_DST_COLOR,[C1]:t.ONE_MINUS_DST_ALPHA,[L1]:t.CONSTANT_COLOR,[D1]:t.ONE_MINUS_CONSTANT_COLOR,[I1]:t.CONSTANT_ALPHA,[U1]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,Me,Q,le,ye,we,Ze,Ct,un,et){if(I===or){p===!0&&(te(t.BLEND),p=!1);return}if(p===!1&&(ce(t.BLEND),p=!0),I!==x1){if(I!==S||et!==L){if((g!==Nr||_!==Nr)&&(t.blendEquation(t.FUNC_ADD),g=Nr,_=Nr),et)switch(I){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lm:t.blendFunc(t.ONE,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,x=null,M=null,R=null,A.set(0,0,0),b=0,S=I,L=et}return}ye=ye||Me,we=we||Q,Ze=Ze||le,(Me!==g||ye!==_)&&(t.blendEquationSeparate(Oe[Me],Oe[ye]),g=Me,_=ye),(Q!==f||le!==x||we!==M||Ze!==R)&&(t.blendFuncSeparate(oe[Q],oe[le],oe[we],oe[Ze]),f=Q,x=le,M=we,R=Ze),(Ct.equals(A)===!1||un!==b)&&(t.blendColor(Ct.r,Ct.g,Ct.b,un),A.copy(Ct),b=un),S=I,L=!1}function D(I,Me){I.side===Fn?te(t.CULL_FACE):ce(t.CULL_FACE);let Q=I.side===_n;Me&&(Q=!Q),q(Q),I.blending===Us&&I.transparent===!1?P(or):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const le=I.stencilWrite;o.setTest(le),le&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):te(t.SAMPLE_ALPHA_TO_COVERAGE)}function q(I){W!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),W=I)}function J(I){I!==g1?(ce(t.CULL_FACE),I!==y&&(I===Nm?t.cullFace(t.BACK):I===v1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):te(t.CULL_FACE),y=I}function se(I){I!==E&&(ee&&t.lineWidth(I),E=I)}function ve(I,Me,Q){I?(ce(t.POLYGON_OFFSET_FILL),(V!==Me||H!==Q)&&(t.polygonOffset(Me,Q),V=Me,H=Q)):te(t.POLYGON_OFFSET_FILL)}function he(I){I?ce(t.SCISSOR_TEST):te(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+$-1),N!==I&&(t.activeTexture(I),N=I)}function w(I,Me,Q){Q===void 0&&(N===null?Q=t.TEXTURE0+$-1:Q=N);let le=j[Q];le===void 0&&(le={type:void 0,texture:void 0},j[Q]=le),(le.type!==I||le.texture!==Me)&&(N!==Q&&(t.activeTexture(Q),N=Q),t.bindTexture(I,Me||k[I]),le.type=I,le.texture=Me)}function B(){const I=j[N];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(I){Ae.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ae.copy(I))}function Re(I){Ge.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ge.copy(I))}function Ke(I,Me){let Q=l.get(Me);Q===void 0&&(Q=new WeakMap,l.set(Me,Q));let le=Q.get(I);le===void 0&&(le=t.getUniformBlockIndex(Me,I.name),Q.set(I,le))}function je(I,Me){const le=l.get(Me).get(I);a.get(Me)!==le&&(t.uniformBlockBinding(Me,le,I.__bindingPointIndex),a.set(Me,le))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,j={},u={},h=new WeakMap,d=[],m=null,p=!1,S=null,g=null,f=null,x=null,_=null,M=null,R=null,A=new Je(0,0,0),b=0,L=!1,W=null,y=null,E=null,V=null,H=null,Ae.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:te,bindFramebuffer:Ce,drawBuffers:Pe,useProgram:Ie,setBlending:P,setMaterial:D,setFlipSided:q,setCullFace:J,setLineWidth:se,setPolygonOffset:ve,setScissorTest:he,activeTexture:C,bindTexture:w,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:be,texImage3D:He,updateUBOMapping:Ke,uniformBlockBinding:je,texStorage2D:Ye,texStorage3D:fe,texSubImage2D:re,texSubImage3D:Le,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ee,scissor:Ve,viewport:Re,reset:ct}}function E0(t,e,n,i){const r=r2(i);switch(n){case vx:return t*e;case _x:return t*e;case yx:return t*e*2;case zf:return t*e/r.components*r.byteLength;case Bf:return t*e/r.components*r.byteLength;case Sx:return t*e*2/r.components*r.byteLength;case Hf:return t*e*2/r.components*r.byteLength;case xx:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case Vf:return t*e*4/r.components*r.byteLength;case Sl:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qd:case th:return Math.max(t,16)*Math.max(e,8)/4;case Jd:case eh:return Math.max(t,8)*Math.max(e,8)/2;case nh:case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bl:case _h:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mx:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function r2(t){switch(t){case Li:case px:return{byteLength:1,components:1};case ia:case mx:case ma:return{byteLength:2,components:1};case Ff:case Of:return{byteLength:2,components:4};case qr:case kf:case bi:return{byteLength:4,components:1};case gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function s2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,w){return m?new OffscreenCanvas(C,w):rc("canvas")}function S(C,w,B){let ie=1;const ae=he(C);if((ae.width>B||ae.height>B)&&(ie=B/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(ie*ae.width),Le=Math.floor(ie*ae.height);h===void 0&&(h=p(re,Le));const xe=w?p(re,Le):h;return xe.width=re,xe.height=Le,xe.getContext("2d").drawImage(C,0,0,re,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+re+"x"+Le+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==tn&&C.minFilter!==Jn}function f(C){t.generateMipmap(C)}function x(C,w,B,ie,ae=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=w;if(w===t.RED&&(B===t.FLOAT&&(re=t.R32F),B===t.HALF_FLOAT&&(re=t.R16F),B===t.UNSIGNED_BYTE&&(re=t.R8)),w===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.R8UI),B===t.UNSIGNED_SHORT&&(re=t.R16UI),B===t.UNSIGNED_INT&&(re=t.R32UI),B===t.BYTE&&(re=t.R8I),B===t.SHORT&&(re=t.R16I),B===t.INT&&(re=t.R32I)),w===t.RG&&(B===t.FLOAT&&(re=t.RG32F),B===t.HALF_FLOAT&&(re=t.RG16F),B===t.UNSIGNED_BYTE&&(re=t.RG8)),w===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.RG8UI),B===t.UNSIGNED_SHORT&&(re=t.RG16UI),B===t.UNSIGNED_INT&&(re=t.RG32UI),B===t.BYTE&&(re=t.RG8I),B===t.SHORT&&(re=t.RG16I),B===t.INT&&(re=t.RG32I)),w===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.RGB8UI),B===t.UNSIGNED_SHORT&&(re=t.RGB16UI),B===t.UNSIGNED_INT&&(re=t.RGB32UI),B===t.BYTE&&(re=t.RGB8I),B===t.SHORT&&(re=t.RGB16I),B===t.INT&&(re=t.RGB32I)),w===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),B===t.UNSIGNED_INT&&(re=t.RGBA32UI),B===t.BYTE&&(re=t.RGBA8I),B===t.SHORT&&(re=t.RGBA16I),B===t.INT&&(re=t.RGBA32I)),w===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),w===t.RGBA){const Le=ae?ec:it.getTransfer(ie);B===t.FLOAT&&(re=t.RGBA32F),B===t.HALF_FLOAT&&(re=t.RGBA16F),B===t.UNSIGNED_BYTE&&(re=Le===ft?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(C,w){let B;return C?w===null||w===qr||w===Ys?B=t.DEPTH24_STENCIL8:w===bi?B=t.DEPTH32F_STENCIL8:w===ia&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===qr||w===Ys?B=t.DEPTH_COMPONENT24:w===bi?B=t.DEPTH_COMPONENT32F:w===ia&&(B=t.DEPTH_COMPONENT16),B}function M(C,w){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){const w=C.target;w.removeEventListener("dispose",R),b(w),w.isVideoTexture&&u.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),W(w)}function b(C){const w=i.get(C);if(w.__webglInit===void 0)return;const B=C.source,ie=d.get(B);if(ie){const ae=ie[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&L(C),Object.keys(ie).length===0&&d.delete(B)}i.remove(C)}function L(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const B=C.source,ie=d.get(B);delete ie[w.__cacheKey],o.memory.textures--}function W(C){const w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let ae=0;ae<w.__webglFramebuffer[ie].length;ae++)t.deleteFramebuffer(w.__webglFramebuffer[ie][ae]);else t.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[ie]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=C.textures;for(let ie=0,ae=B.length;ie<ae;ie++){const re=i.get(B[ie]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(B[ie])}i.remove(C)}let y=0;function E(){y=0}function V(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function H(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function $(C,w){const B=i.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(B,C,w);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+w)}function ee(C,w){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ge(B,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+w)}function G(C,w){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ge(B,C,w);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+w)}function z(C,w){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Z(B,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+w)}const N={[Ql]:t.REPEAT,[Fr]:t.CLAMP_TO_EDGE,[Zd]:t.MIRRORED_REPEAT},j={[tn]:t.NEAREST,[W1]:t.NEAREST_MIPMAP_NEAREST,[Fa]:t.NEAREST_MIPMAP_LINEAR,[Jn]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[Or]:t.LINEAR_MIPMAP_LINEAR},K={[Y1]:t.NEVER,[tM]:t.ALWAYS,[K1]:t.LESS,[Ex]:t.LEQUAL,[Z1]:t.EQUAL,[eM]:t.GEQUAL,[J1]:t.GREATER,[Q1]:t.NOTEQUAL};function ne(C,w){if(w.type===bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===ou||w.magFilter===Fa||w.magFilter===Or||w.minFilter===Jn||w.minFilter===ou||w.minFilter===Fa||w.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,N[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,N[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,N[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,j[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,j[w.minFilter]),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===tn||w.minFilter!==Fa&&w.minFilter!==Or||w.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ae(C,w){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const ie=w.source;let ae=d.get(ie);ae===void 0&&(ae={},d.set(ie,ae));const re=H(w);if(re!==C.__cacheKey){ae[re]===void 0&&(ae[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ae[re].usedTimes++;const Le=ae[C.__cacheKey];Le!==void 0&&(ae[C.__cacheKey].usedTimes--,Le.usedTimes===0&&L(w)),C.__cacheKey=re,C.__webglTexture=ae[re].texture}return B}function Ge(C,w,B){let ie=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=t.TEXTURE_3D);const ae=Ae(C,w),re=w.source;n.bindTexture(ie,C.__webglTexture,t.TEXTURE0+B);const Le=i.get(re);if(re.version!==Le.__version||ae===!0){n.activeTexture(t.TEXTURE0+B);const xe=it.getPrimaries(it.workingColorSpace),Ee=w.colorSpace===qi?null:it.getPrimaries(w.colorSpace),Ye=w.colorSpace===qi||xe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let fe=S(w.image,!1,r.maxTextureSize);fe=ve(w,fe);const be=s.convert(w.format,w.colorSpace),He=s.convert(w.type);let Ve=x(w.internalFormat,be,He,w.colorSpace,w.isVideoTexture);ne(ie,w);let Re;const Ke=w.mipmaps,je=w.isVideoTexture!==!0,ct=Le.__version===void 0||ae===!0,I=re.dataReady,Me=M(w,fe);if(w.isDepthTexture)Ve=_(w.format===Ks,w.type),ct&&(je?n.texStorage2D(t.TEXTURE_2D,1,Ve,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ve,fe.width,fe.height,0,be,He,null));else if(w.isDataTexture)if(Ke.length>0){je&&ct&&n.texStorage2D(t.TEXTURE_2D,Me,Ve,Ke[0].width,Ke[0].height);for(let Q=0,le=Ke.length;Q<le;Q++)Re=Ke[Q],je?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Re.width,Re.height,be,He,Re.data):n.texImage2D(t.TEXTURE_2D,Q,Ve,Re.width,Re.height,0,be,He,Re.data);w.generateMipmaps=!1}else je?(ct&&n.texStorage2D(t.TEXTURE_2D,Me,Ve,fe.width,fe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,be,He,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Ve,fe.width,fe.height,0,be,He,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ve,Ke[0].width,Ke[0].height,fe.depth);for(let Q=0,le=Ke.length;Q<le;Q++)if(Re=Ke[Q],w.format!==ei)if(be!==null)if(je){if(I)if(w.layerUpdates.size>0){const ye=E0(Re.width,Re.height,w.format,w.type);for(const we of w.layerUpdates){const Ze=Re.data.subarray(we*ye/Re.data.BYTES_PER_ELEMENT,(we+1)*ye/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,we,Re.width,Re.height,1,be,Ze,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Re.width,Re.height,fe.depth,be,Re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Ve,Re.width,Re.height,fe.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Re.width,Re.height,fe.depth,be,He,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Ve,Re.width,Re.height,fe.depth,0,be,He,Re.data)}else{je&&ct&&n.texStorage2D(t.TEXTURE_2D,Me,Ve,Ke[0].width,Ke[0].height);for(let Q=0,le=Ke.length;Q<le;Q++)Re=Ke[Q],w.format!==ei?be!==null?je?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Re.width,Re.height,be,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Re.width,Re.height,be,He,Re.data):n.texImage2D(t.TEXTURE_2D,Q,Ve,Re.width,Re.height,0,be,He,Re.data)}else if(w.isDataArrayTexture)if(je){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ve,fe.width,fe.height,fe.depth),I)if(w.layerUpdates.size>0){const Q=E0(fe.width,fe.height,w.format,w.type);for(const le of w.layerUpdates){const ye=fe.data.subarray(le*Q/fe.data.BYTES_PER_ELEMENT,(le+1)*Q/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,be,He,ye)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,be,He,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,fe.width,fe.height,fe.depth,0,be,He,fe.data);else if(w.isData3DTexture)je?(ct&&n.texStorage3D(t.TEXTURE_3D,Me,Ve,fe.width,fe.height,fe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,be,He,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,fe.width,fe.height,fe.depth,0,be,He,fe.data);else if(w.isFramebufferTexture){if(ct)if(je)n.texStorage2D(t.TEXTURE_2D,Me,Ve,fe.width,fe.height);else{let Q=fe.width,le=fe.height;for(let ye=0;ye<Me;ye++)n.texImage2D(t.TEXTURE_2D,ye,Ve,Q,le,0,be,He,null),Q>>=1,le>>=1}}else if(Ke.length>0){if(je&&ct){const Q=he(Ke[0]);n.texStorage2D(t.TEXTURE_2D,Me,Ve,Q.width,Q.height)}for(let Q=0,le=Ke.length;Q<le;Q++)Re=Ke[Q],je?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,be,He,Re):n.texImage2D(t.TEXTURE_2D,Q,Ve,be,He,Re);w.generateMipmaps=!1}else if(je){if(ct){const Q=he(fe);n.texStorage2D(t.TEXTURE_2D,Me,Ve,Q.width,Q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,He,fe)}else n.texImage2D(t.TEXTURE_2D,0,Ve,be,He,fe);g(w)&&f(ie),Le.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Z(C,w,B){if(w.image.length!==6)return;const ie=Ae(C,w),ae=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const re=i.get(ae);if(ae.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const Le=it.getPrimaries(it.workingColorSpace),xe=w.colorSpace===qi?null:it.getPrimaries(w.colorSpace),Ee=w.colorSpace===qi||Le===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!Ye&&!fe?be[le]=S(w.image[le],!0,r.maxCubemapSize):be[le]=fe?w.image[le].image:w.image[le],be[le]=ve(w,be[le]);const He=be[0],Ve=s.convert(w.format,w.colorSpace),Re=s.convert(w.type),Ke=x(w.internalFormat,Ve,Re,w.colorSpace),je=w.isVideoTexture!==!0,ct=re.__version===void 0||ie===!0,I=ae.dataReady;let Me=M(w,He);ne(t.TEXTURE_CUBE_MAP,w);let Q;if(Ye){je&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ke,He.width,He.height);for(let le=0;le<6;le++){Q=be[le].mipmaps;for(let ye=0;ye<Q.length;ye++){const we=Q[ye];w.format!==ei?Ve!==null?je?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,0,0,we.width,we.height,Ve,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,Ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,0,0,we.width,we.height,Ve,Re,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,Ke,we.width,we.height,0,Ve,Re,we.data)}}}else{if(Q=w.mipmaps,je&&ct){Q.length>0&&Me++;const le=he(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ke,le.width,le.height)}for(let le=0;le<6;le++)if(fe){je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,Ve,Re,be[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,be[le].width,be[le].height,0,Ve,Re,be[le].data);for(let ye=0;ye<Q.length;ye++){const Ze=Q[ye].image[le].image;je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,0,0,Ze.width,Ze.height,Ve,Re,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,Ke,Ze.width,Ze.height,0,Ve,Re,Ze.data)}}else{je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ve,Re,be[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Ve,Re,be[le]);for(let ye=0;ye<Q.length;ye++){const we=Q[ye];je?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,0,0,Ve,Re,we.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,Ke,Ve,Re,we.image[le])}}}g(w)&&f(t.TEXTURE_CUBE_MAP),re.__version=ae.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function k(C,w,B,ie,ae,re){const Le=s.convert(B.format,B.colorSpace),xe=s.convert(B.type),Ee=x(B.internalFormat,Le,xe,B.colorSpace);if(!i.get(w).__hasExternalTextures){const fe=Math.max(1,w.width>>re),be=Math.max(1,w.height>>re);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,re,Ee,fe,be,w.depth,0,Le,xe,null):n.texImage2D(ae,re,Ee,fe,be,0,Le,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),J(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ae,i.get(B).__webglTexture,0,q(w)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ae,i.get(B).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(C,w,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer){const ie=w.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,re=_(w.stencilBuffer,ae),Le=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=q(w);J(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,re,w.width,w.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,re,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,re,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,C)}else{const ie=w.textures;for(let ae=0;ae<ie.length;ae++){const re=ie[ae],Le=s.convert(re.format,re.colorSpace),xe=s.convert(re.type),Ee=x(re.internalFormat,Le,xe,re.colorSpace),Ye=q(w);B&&J(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Ee,w.width,w.height):J(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,Ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);const ie=i.get(w.depthTexture).__webglTexture,ae=q(w);if(w.depthTexture.format===ks)J(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Ks)J(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const w=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=ie}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");te(w.__webglFramebuffer,C)}else if(B){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=t.createRenderbuffer(),ce(w.__webglDepthbuffer[ie],C,!1);else{const ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,re)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ce(w.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(C,w,B){const ie=i.get(C);w!==void 0&&k(ie.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ce(C)}function Ie(C){const w=C.texture,B=i.get(C),ie=i.get(w);C.addEventListener("dispose",A);const ae=C.textures,re=C.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,o.memory.textures++),re){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)B.__webglFramebuffer[xe][Ee]=t.createFramebuffer()}else B.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)B.__webglFramebuffer[xe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Le)for(let xe=0,Ee=ae.length;xe<Ee;xe++){const Ye=i.get(ae[xe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&J(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<ae.length;xe++){const Ee=ae[xe];B.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const Ye=s.convert(Ee.format,Ee.colorSpace),fe=s.convert(Ee.type),be=x(Ee.internalFormat,Ye,fe,Ee.colorSpace,C.isXRRenderTarget===!0),He=q(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,be,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),ne(t.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)k(B.__webglFramebuffer[xe][Ee],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else k(B.__webglFramebuffer[xe],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let xe=0,Ee=ae.length;xe<Ee;xe++){const Ye=ae[xe],fe=i.get(Ye);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),ne(t.TEXTURE_2D,Ye),k(B.__webglFramebuffer,C,Ye,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),g(Ye)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,ie.__webglTexture),ne(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)k(B.__webglFramebuffer[Ee],C,w,t.COLOR_ATTACHMENT0,xe,Ee);else k(B.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,xe,0);g(w)&&f(xe),n.unbindTexture()}C.depthBuffer&&Ce(C)}function Oe(C){const w=C.textures;for(let B=0,ie=w.length;B<ie;B++){const ae=w[B];if(g(ae)){const re=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=i.get(ae).__webglTexture;n.bindTexture(re,Le),f(re),n.unbindTexture()}}}const oe=[],P=[];function D(C){if(C.samples>0){if(J(C)===!1){const w=C.textures,B=C.width,ie=C.height;let ae=t.COLOR_BUFFER_BIT;const re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(C),xe=w.length>1;if(xe)for(let Ee=0;Ee<w.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);const Ye=i.get(w[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,B,ie,0,0,B,ie,ae,t.NEAREST),l===!0&&(oe.length=0,P.length=0,oe.push(t.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.resolveDepthBuffer===!1&&(oe.push(re),P.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Ee=0;Ee<w.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);const Ye=i.get(w[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function q(C){return Math.min(r.maxSamples,C.samples)}function J(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function se(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function ve(C,w){const B=C.colorSpace,ie=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==xr&&B!==qi&&(it.getTransfer(B)===ft?(ie!==ei||ae!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=Pe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=k,this.useMultisampledRTT=J}function o2(t,e){function n(i,r=qi){let s;const o=it.getTransfer(r);if(i===Li)return t.UNSIGNED_BYTE;if(i===Ff)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Of)return t.UNSIGNED_SHORT_5_5_5_1;if(i===gx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===px)return t.BYTE;if(i===mx)return t.SHORT;if(i===ia)return t.UNSIGNED_SHORT;if(i===kf)return t.INT;if(i===qr)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===ma)return t.HALF_FLOAT;if(i===vx)return t.ALPHA;if(i===xx)return t.RGB;if(i===ei)return t.RGBA;if(i===_x)return t.LUMINANCE;if(i===yx)return t.LUMINANCE_ALPHA;if(i===ks)return t.DEPTH_COMPONENT;if(i===Ks)return t.DEPTH_STENCIL;if(i===zf)return t.RED;if(i===Bf)return t.RED_INTEGER;if(i===Sx)return t.RG;if(i===Hf)return t.RG_INTEGER;if(i===Vf)return t.RGBA_INTEGER;if(i===Sl||i===Ml||i===wl||i===El)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jd||i===Qd||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nh||i===ih||i===rh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nh||i===ih)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===hh||i===fh||i===ph||i===mh||i===gh||i===vh||i===xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ah)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ch)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ph)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===_h||i===yh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mx||i===Sh||i===Mh||i===wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class a2 extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pn extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l2={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,p=.005;c.inputState.pinching&&d>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const c2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u2=`
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

}`;class d2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pr({vertexShader:c2,fragmentShader:u2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h2 extends io{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,p=null;const S=new d2,g=n.getContextAttributes();let f=null,x=null;const _=[],M=[],R=new me;let A=null;const b=new Tn;b.layers.enable(1),b.viewport=new bt;const L=new Tn;L.layers.enable(2),L.viewport=new bt;const W=[b,L],y=new a2;y.layers.enable(1),y.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let k=_[Z];return k===void 0&&(k=new ku,_[Z]=k),k.getTargetRaySpace()},this.getControllerGrip=function(Z){let k=_[Z];return k===void 0&&(k=new ku,_[Z]=k),k.getGripSpace()},this.getHand=function(Z){let k=_[Z];return k===void 0&&(k=new ku,_[Z]=k),k.getHandSpace()};function H(Z){const k=M.indexOf(Z.inputSource);if(k===-1)return;const ce=_[k];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,c||o),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<_.length;Z++){const k=M[Z];k!==null&&(M[Z]=null,_[Z].disconnect(k))}E=null,V=null,S.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,x=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const k={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Yr(m.framebufferWidth,m.framebufferHeight,{format:ei,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let k=null,ce=null,te=null;g.depth&&(te=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,k=g.stencil?Ks:ks,ce=g.stencil?Ys:qr);const Ce={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Yr(d.textureWidth,d.textureHeight,{format:ei,type:Li,depthTexture:new kx(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(Z){for(let k=0;k<Z.removed.length;k++){const ce=Z.removed[k],te=M.indexOf(ce);te>=0&&(M[te]=null,_[te].disconnect(ce))}for(let k=0;k<Z.added.length;k++){const ce=Z.added[k];let te=M.indexOf(ce);if(te===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=M.length){M.push(ce),te=Pe;break}else if(M[Pe]===null){M[Pe]=ce,te=Pe;break}if(te===-1)break}const Ce=_[te];Ce&&Ce.connect(ce)}}const G=new U,z=new U;function N(Z,k,ce){G.setFromMatrixPosition(k.matrixWorld),z.setFromMatrixPosition(ce.matrixWorld);const te=G.distanceTo(z),Ce=k.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,Ie=Ce[14]/(Ce[10]-1),Oe=Ce[14]/(Ce[10]+1),oe=(Ce[9]+1)/Ce[5],P=(Ce[9]-1)/Ce[5],D=(Ce[8]-1)/Ce[0],q=(Pe[8]+1)/Pe[0],J=Ie*D,se=Ie*q,ve=te/(-D+q),he=ve*-D;if(k.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(he),Z.translateZ(ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(k.projectionMatrix),Z.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const C=Ie+ve,w=Oe+ve,B=J-he,ie=se+(te-he),ae=oe*Oe/w*C,re=P*Oe/w*C;Z.projectionMatrix.makePerspective(B,ie,ae,re,C,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function j(Z,k){k===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(k.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let k=Z.near,ce=Z.far;S.texture!==null&&(S.depthNear>0&&(k=S.depthNear),S.depthFar>0&&(ce=S.depthFar)),y.near=L.near=b.near=k,y.far=L.far=b.far=ce,(E!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,V=y.far);const te=Z.parent,Ce=y.cameras;j(y,te);for(let Pe=0;Pe<Ce.length;Pe++)j(Ce[Pe],te);Ce.length===2?N(y,b,L):y.projectionMatrix.copy(b.projectionMatrix),K(Z,y,te)};function K(Z,k,ce){ce===null?Z.matrix.copy(k.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(k.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(k.projectionMatrix),Z.projectionMatrixInverse.copy(k.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Eh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let ne=null;function Ae(Z,k){if(u=k.getViewerPose(c||o),p=k,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let te=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,te=!0);for(let Pe=0;Pe<ce.length;Pe++){const Ie=ce[Pe];let Oe=null;if(m!==null)Oe=m.getViewport(Ie);else{const P=h.getViewSubImage(d,Ie);Oe=P.viewport,Pe===0&&(e.setRenderTargetTextures(x,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let oe=W[Pe];oe===void 0&&(oe=new Tn,oe.layers.enable(Pe),oe.viewport=new bt,W[Pe]=oe),oe.matrix.fromArray(Ie.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ie.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Pe===0&&(y.matrix.copy(oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),te===!0&&y.cameras.push(oe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Pe=h.getDepthInformation(ce[0]);Pe&&Pe.isValid&&Pe.texture&&S.init(e,Pe,r.renderState)}}for(let ce=0;ce<_.length;ce++){const te=M[ce],Ce=_[ce];te!==null&&Ce!==void 0&&Ce.update(te,k,c||o)}ne&&ne(Z,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),p=null}const Ge=new Ux;Ge.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}}const br=new Di,f2=new vt;function p2(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Lx(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),p(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),S(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===_n&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===_n&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,M=x.envMapRotation;_&&(g.envMap.value=_,br.copy(M),br.x*=-1,br.y*=-1,br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),g.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(br)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function m2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function c(x,_){let M=r[x.id];M===void 0&&(p(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",g));const R=_.program;i.updateUBOMapping(x,R);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function u(x){const _=h();x.__bindingPointIndex=_;const M=t.createBuffer(),R=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],M=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,b=M.length;A<b;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let W=0,y=L.length;W<y;W++){const E=L[W];if(m(E,A,W,R)===!0){const V=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let $=0;for(let ee=0;ee<H.length;ee++){const G=H[ee],z=S(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+$,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,$),$+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,_,M,R){const A=x.value,b=_+"_"+M;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const L=R[b];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[b]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function p(x){const _=x.uniforms;let M=0;const R=16;for(let b=0,L=_.length;b<L;b++){const W=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,E=W.length;y<E;y++){const V=W[y],H=Array.isArray(V.value)?V.value:[V.value];for(let $=0,ee=H.length;$<ee;$++){const G=H[$],z=S(G),N=M%R,j=N%z.boundary,K=N+j;M+=j,K!==0&&R-K<z.storage&&(M+=R-K),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=z.storage}}}const A=M%R;return A>0&&(M+=R-A),x.__size=M,x.__cache={},this}function S(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Yf{constructor(e={}){const{canvas:n=iM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),p=new Int32Array(4);let S=null,g=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=ar,this.toneMappingExposure=1;const _=this;let M=!1,R=0,A=0,b=null,L=-1,W=null;const y=new bt,E=new bt;let V=null;const H=new Je(0);let $=0,ee=n.width,G=n.height,z=1,N=null,j=null;const K=new bt(0,0,ee,G),ne=new bt(0,0,ee,G);let Ae=!1;const Ge=new $f;let Z=!1,k=!1;const ce=new vt,te=new vt,Ce=new U,Pe=new bt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function oe(){return b===null?z:1}let P=i;function D(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",we,!1),P===null){const F="webgl2";if(P=D(F,T),P===null)throw D(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let q,J,se,ve,he,C,w,B,ie,ae,re,Le,xe,Ee,Ye,fe,be,He,Ve,Re,Ke,je,ct,I;function Me(){q=new Sb(P),q.init(),je=new o2(P,q),J=new mb(P,q,e,je),se=new i2(P),J.reverseDepthBuffer&&se.buffers.depth.setReversed(!0),ve=new Eb(P),he=new VT,C=new s2(P,q,se,he,J,je,ve),w=new vb(_),B=new yb(_),ie=new NM(P),ct=new fb(P,ie),ae=new Mb(P,ie,ve,ct),re=new Tb(P,ae,ie,ve),Ve=new bb(P,J,C),fe=new gb(he),Le=new HT(_,w,B,q,J,ct,fe),xe=new p2(_,he),Ee=new jT,Ye=new KT(q),He=new hb(_,w,B,se,re,d,l),be=new t2(_,re,J),I=new m2(P,ve,J,se),Re=new pb(P,q,ve),Ke=new wb(P,q,ve),ve.programs=Le.programs,_.capabilities=J,_.extensions=q,_.properties=he,_.renderLists=Ee,_.shadowMap=be,_.state=se,_.info=ve}Me();const Q=new h2(_,P);this.xr=Q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(ee,G,!1))},this.getSize=function(T){return T.set(ee,G)},this.setSize=function(T,F,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,G=F,n.width=Math.floor(T*z),n.height=Math.floor(F*z),X===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ee*z,G*z).floor()},this.setDrawingBufferSize=function(T,F,X){ee=T,G=F,z=X,n.width=Math.floor(T*X),n.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,F,X,Y){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,F,X,Y),se.viewport(y.copy(K).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,F,X,Y){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,F,X,Y),se.scissor(E.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){se.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(T=!0,F=!0,X=!0){let Y=0;if(T){let O=!1;if(b!==null){const pe=b.texture.format;O=pe===Vf||pe===Hf||pe===Bf}if(O){const pe=b.texture.type,Se=pe===Li||pe===qr||pe===ia||pe===Ys||pe===Ff||pe===Of,Ne=He.getClearColor(),De=He.getClearAlpha(),ze=Ne.r,Be=Ne.g,Ue=Ne.b;Se?(m[0]=ze,m[1]=Be,m[2]=Ue,m[3]=De,P.clearBufferuiv(P.COLOR,0,m)):(p[0]=ze,p[1]=Be,p[2]=Ue,p[3]=De,P.clearBufferiv(P.COLOR,0,p))}else Y|=P.COLOR_BUFFER_BIT}F&&(Y|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Ee.dispose(),Ye.dispose(),he.dispose(),w.dispose(),B.dispose(),re.dispose(),ct.dispose(),I.dispose(),Le.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",cp),Q.removeEventListener("sessionend",up),_r.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ve.autoReset,F=be.enabled,X=be.autoUpdate,Y=be.needsUpdate,O=be.type;Me(),ve.autoReset=T,be.enabled=F,be.autoUpdate=X,be.needsUpdate=Y,be.type=O}function we(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){const F=T.target;F.removeEventListener("dispose",Ze),Ct(F)}function Ct(T){un(T),he.remove(T)}function un(T){const F=he.get(T).programs;F!==void 0&&(F.forEach(function(X){Le.releaseProgram(X)}),T.isShaderMaterial&&Le.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,Y,O,pe){F===null&&(F=Ie);const Se=O.isMesh&&O.matrixWorld.determinant()<0,Ne=o_(T,F,X,Y,O);se.setMaterial(Y,Se);let De=X.index,ze=1;if(Y.wireframe===!0){if(De=ae.getWireframeAttribute(X),De===void 0)return;ze=2}const Be=X.drawRange,Ue=X.attributes.position;let rt=Be.start*ze,dt=(Be.start+Be.count)*ze;pe!==null&&(rt=Math.max(rt,pe.start*ze),dt=Math.min(dt,(pe.start+pe.count)*ze)),De!==null?(rt=Math.max(rt,0),dt=Math.min(dt,De.count)):Ue!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,Ue.count));const Mt=dt-rt;if(Mt<0||Mt===1/0)return;ct.setup(O,Y,Ne,X,De);let Sn,tt=Re;if(De!==null&&(Sn=ie.get(De),tt=Ke,tt.setIndex(Sn)),O.isMesh)Y.wireframe===!0?(se.setLineWidth(Y.wireframeLinewidth*oe()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(O.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),se.setLineWidth(ke*oe()),O.isLineSegments?tt.setMode(P.LINES):O.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else O.isPoints?tt.setMode(P.POINTS):O.isSprite&&tt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ke=O._multiDrawStarts,Ht=O._multiDrawCounts,nt=O._multiDrawCount,Vn=De?ie.get(De).bytesPerElement:1,Qr=he.get(Y).currentProgram.getUniforms();for(let Mn=0;Mn<nt;Mn++)Qr.setValue(P,"_gl_DrawID",Mn),tt.render(ke[Mn]/Vn,Ht[Mn])}else if(O.isInstancedMesh)tt.renderInstances(rt,Mt,O.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ht=Math.min(X.instanceCount,ke);tt.renderInstances(rt,Mt,Ht)}else tt.render(rt,Mt)};function et(T,F,X){T.transparent===!0&&T.side===Fn&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,_a(T,F,X),T.side=fr,T.needsUpdate=!0,_a(T,F,X),T.side=Fn):_a(T,F,X)}this.compile=function(T,F,X=null){X===null&&(X=T),g=Ye.get(X),g.init(F),x.push(g),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),T!==X&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const Y=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pe=O.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Ne=pe[Se];et(Ne,X,O),Y.add(Ne)}else et(pe,X,O),Y.add(pe)}),x.pop(),g=null,Y},this.compileAsync=function(T,F,X=null){const Y=this.compile(T,F,X);return new Promise(O=>{function pe(){if(Y.forEach(function(Se){he.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){O(T);return}setTimeout(pe,10)}q.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let dn=null;function pi(T){dn&&dn(T)}function cp(){_r.stop()}function up(){_r.start()}const _r=new Ux;_r.setAnimationLoop(pi),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(T){dn=T,Q.setAnimationLoop(T),T===null?_r.stop():_r.start()},Q.addEventListener("sessionstart",cp),Q.addEventListener("sessionend",up),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,b),g=Ye.get(T,x.length),g.init(F),x.push(g),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(te),k=this.localClippingEnabled,Z=fe.init(this.clippingPlanes,k),S=Ee.get(T,f.length),S.init(),f.push(S),Q.enabled===!0&&Q.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&Rc(pe,F,-1/0,_.sortObjects)}Rc(T,F,0,_.sortObjects),S.finish(),_.sortObjects===!0&&S.sort(N,j),Oe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Oe&&He.addToRenderList(S,T),this.info.render.frame++,Z===!0&&fe.beginShadows();const X=g.state.shadowsArray;be.render(X,T,F),Z===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=S.opaque,O=S.transmissive;if(g.setupLights(),F.isArrayCamera){const pe=F.cameras;if(O.length>0)for(let Se=0,Ne=pe.length;Se<Ne;Se++){const De=pe[Se];hp(Y,O,T,De)}Oe&&He.render(T);for(let Se=0,Ne=pe.length;Se<Ne;Se++){const De=pe[Se];dp(S,T,De,De.viewport)}}else O.length>0&&hp(Y,O,T,F),Oe&&He.render(T),dp(S,T,F);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(_,T,F),ct.resetDefaultState(),L=-1,W=null,x.pop(),x.length>0?(g=x[x.length-1],Z===!0&&fe.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function Rc(T,F,X,Y){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){Y&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const Se=re.update(T),Ne=T.material;Ne.visible&&S.push(T,Se,Ne,X,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const Se=re.update(T),Ne=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Pe.copy(Se.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Ne)){const De=Se.groups;for(let ze=0,Be=De.length;ze<Be;ze++){const Ue=De[ze],rt=Ne[Ue.materialIndex];rt&&rt.visible&&S.push(T,Se,rt,X,Pe.z,Ue)}}else Ne.visible&&S.push(T,Se,Ne,X,Pe.z,null)}}const pe=T.children;for(let Se=0,Ne=pe.length;Se<Ne;Se++)Rc(pe[Se],F,X,Y)}function dp(T,F,X,Y){const O=T.opaque,pe=T.transmissive,Se=T.transparent;g.setupLightsView(X),Z===!0&&fe.setGlobalState(_.clippingPlanes,X),Y&&se.viewport(y.copy(Y)),O.length>0&&xa(O,F,X),pe.length>0&&xa(pe,F,X),Se.length>0&&xa(Se,F,X),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function hp(T,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Yr(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?ma:Li,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const pe=g.state.transmissionRenderTarget[Y.id],Se=Y.viewport||y;pe.setSize(Se.z,Se.w);const Ne=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(H),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Oe&&He.render(X);const De=_.toneMapping;_.toneMapping=ar;const ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),Z===!0&&fe.setGlobalState(_.clippingPlanes,Y),xa(T,X,Y),C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe),q.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ue=0,rt=F.length;Ue<rt;Ue++){const dt=F[Ue],Mt=dt.object,Sn=dt.geometry,tt=dt.material,ke=dt.group;if(tt.side===Fn&&Mt.layers.test(Y.layers)){const Ht=tt.side;tt.side=_n,tt.needsUpdate=!0,fp(Mt,X,Y,Sn,tt,ke),tt.side=Ht,tt.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe))}_.setRenderTarget(Ne),_.setClearColor(H,$),ze!==void 0&&(Y.viewport=ze),_.toneMapping=De}function xa(T,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,pe=T.length;O<pe;O++){const Se=T[O],Ne=Se.object,De=Se.geometry,ze=Y===null?Se.material:Y,Be=Se.group;Ne.layers.test(X.layers)&&fp(Ne,F,X,De,ze,Be)}}function fp(T,F,X,Y,O,pe){T.onBeforeRender(_,F,X,Y,O,pe),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,F,X,Y,T,pe),O.transparent===!0&&O.side===Fn&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,_.renderBufferDirect(X,F,Y,O,T,pe),O.side=fr,O.needsUpdate=!0,_.renderBufferDirect(X,F,Y,O,T,pe),O.side=Fn):_.renderBufferDirect(X,F,Y,O,T,pe),T.onAfterRender(_,F,X,Y,O,pe)}function _a(T,F,X){F.isScene!==!0&&(F=Ie);const Y=he.get(T),O=g.state.lights,pe=g.state.shadowsArray,Se=O.state.version,Ne=Le.getParameters(T,O.state,pe,F,X),De=Le.getProgramCacheKey(Ne);let ze=Y.programs;Y.environment=T.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(T.isMeshStandardMaterial?B:w).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",Ze),ze=new Map,Y.programs=ze);let Be=ze.get(De);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===Se)return mp(T,Ne),Be}else Ne.uniforms=Le.getUniforms(T),T.onBeforeCompile(Ne,_),Be=Le.acquireProgram(Ne,De),ze.set(De,Be),Y.uniforms=Ne.uniforms;const Ue=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),mp(T,Ne),Y.needsLights=l_(T),Y.lightsStateVersion=Se,Y.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function pp(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Al.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function mp(T,F){const X=he.get(T);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function o_(T,F,X,Y,O){F.isScene!==!0&&(F=Ie),C.resetTextureUnits();const pe=F.fog,Se=Y.isMeshStandardMaterial?F.environment:null,Ne=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:xr,De=(Y.isMeshStandardMaterial?B:w).get(Y.envMap||Se),ze=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,dt=!!X.morphAttributes.color;let Mt=ar;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const Sn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tt=Sn!==void 0?Sn.length:0,ke=he.get(Y),Ht=g.state.lights;if(Z===!0&&(k===!0||T!==W)){const Dn=T===W&&Y.id===L;fe.setState(Y,T,Dn)}let nt=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ht.state.version||ke.outputColorSpace!==Ne||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isBatchedMesh&&ke.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ke.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ke.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ke.instancingMorph===!1&&O.morphTexture!==null||ke.envMap!==De||Y.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Be||ke.morphTargets!==Ue||ke.morphNormals!==rt||ke.morphColors!==dt||ke.toneMapping!==Mt||ke.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,ke.__version=Y.version);let Vn=ke.currentProgram;nt===!0&&(Vn=_a(Y,F,O));let Qr=!1,Mn=!1,Pc=!1;const Tt=Vn.getUniforms(),Ui=ke.uniforms;if(se.useProgram(Vn.program)&&(Qr=!0,Mn=!0,Pc=!0),Y.id!==L&&(L=Y.id,Mn=!0),Qr||W!==T){J.reverseDepthBuffer?(ce.copy(T.projectionMatrix),sM(ce),oM(ce),Tt.setValue(P,"projectionMatrix",ce)):Tt.setValue(P,"projectionMatrix",T.projectionMatrix),Tt.setValue(P,"viewMatrix",T.matrixWorldInverse);const Dn=Tt.map.cameraPosition;Dn!==void 0&&Dn.setValue(P,Ce.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,Mn=!0,Pc=!0)}if(O.isSkinnedMesh){Tt.setOptional(P,O,"bindMatrix"),Tt.setOptional(P,O,"bindMatrixInverse");const Dn=O.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Tt.setValue(P,"boneTexture",Dn.boneTexture,C))}O.isBatchedMesh&&(Tt.setOptional(P,O,"batchingTexture"),Tt.setValue(P,"batchingTexture",O._matricesTexture,C),Tt.setOptional(P,O,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",O._indirectTexture,C),Tt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",O._colorsTexture,C));const Nc=X.morphAttributes;if((Nc.position!==void 0||Nc.normal!==void 0||Nc.color!==void 0)&&Ve.update(O,X,Vn),(Mn||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,Tt.setValue(P,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ui.envMap.value=De,Ui.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Ui.envMapIntensity.value=F.environmentIntensity),Mn&&(Tt.setValue(P,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&a_(Ui,Pc),pe&&Y.fog===!0&&xe.refreshFogUniforms(Ui,pe),xe.refreshMaterialUniforms(Ui,Y,z,G,g.state.transmissionRenderTarget[T.id]),Al.upload(P,pp(ke),Ui,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Al.upload(P,pp(ke),Ui,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(P,"center",O.center),Tt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Tt.setValue(P,"normalMatrix",O.normalMatrix),Tt.setValue(P,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Dn=Y.uniformsGroups;for(let Lc=0,c_=Dn.length;Lc<c_;Lc++){const gp=Dn[Lc];I.update(gp,Vn),I.bind(gp,Vn)}}return Vn}function a_(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function l_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,F,X){he.get(T.texture).__webglTexture=F,he.get(T.depthTexture).__webglTexture=X;const Y=he.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const X=he.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){b=T,R=F,A=X;let Y=!0,O=null,pe=!1,Se=!1;if(T){const De=he.get(T);if(De.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(De.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(De.__hasExternalTextures)C.rebindTextures(T,he.get(T.texture).__webglTexture,he.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(De.__boundDepthTexture!==Ue){if(Ue!==null&&he.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Be=he.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?O=Be[F][X]:O=Be[F],pe=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?O=he.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[X]:O=Be,y.copy(T.viewport),E.copy(T.scissor),V=T.scissorTest}else y.copy(K).multiplyScalar(z).floor(),E.copy(ne).multiplyScalar(z).floor(),V=Ae;if(se.bindFramebuffer(P.FRAMEBUFFER,O)&&Y&&se.drawBuffers(T,O),se.viewport(y),se.scissor(E),se.setScissorTest(V),pe){const De=he.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,X)}else if(Se){const De=he.get(T.texture),ze=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,X||0,ze)}L=-1},this.readRenderTargetPixels=function(T,F,X,Y,O,pe,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){se.bindFramebuffer(P.FRAMEBUFFER,Ne);try{const De=T.texture,ze=De.format,Be=De.type;if(!J.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-Y&&X>=0&&X<=T.height-O&&P.readPixels(F,X,Y,O,je.convert(ze),je.convert(Be),pe)}finally{const De=b!==null?he.get(b).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,F,X,Y,O,pe,Se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){const De=T.texture,ze=De.format,Be=De.type;if(!J.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-Y&&X>=0&&X<=T.height-O){se.bindFramebuffer(P.FRAMEBUFFER,Ne);const Ue=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.bufferData(P.PIXEL_PACK_BUFFER,pe.byteLength,P.STREAM_READ),P.readPixels(F,X,Y,O,je.convert(ze),je.convert(Be),0);const rt=b!==null?he.get(b).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,rt);const dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rM(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pe),P.deleteBuffer(Ue),P.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,X=0){T.isTexture!==!0&&(Tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-X),O=Math.floor(T.image.width*Y),pe=Math.floor(T.image.height*Y),Se=F!==null?F.x:0,Ne=F!==null?F.y:0;C.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Se,Ne,O,pe),se.unbindTexture()},this.copyTextureToTexture=function(T,F,X=null,Y=null,O=0){T.isTexture!==!0&&(Tl("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,X=null);let pe,Se,Ne,De,ze,Be;X!==null?(pe=X.max.x-X.min.x,Se=X.max.y-X.min.y,Ne=X.min.x,De=X.min.y):(pe=T.image.width,Se=T.image.height,Ne=0,De=0),Y!==null?(ze=Y.x,Be=Y.y):(ze=0,Be=0);const Ue=je.convert(F.format),rt=je.convert(F.type);C.setTexture2D(F,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const dt=P.getParameter(P.UNPACK_ROW_LENGTH),Mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Sn=P.getParameter(P.UNPACK_SKIP_PIXELS),tt=P.getParameter(P.UNPACK_SKIP_ROWS),ke=P.getParameter(P.UNPACK_SKIP_IMAGES),Ht=T.isCompressedTexture?T.mipmaps[O]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,ze,Be,pe,Se,Ue,rt,Ht.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,ze,Be,Ht.width,Ht.height,Ue,Ht.data):P.texSubImage2D(P.TEXTURE_2D,O,ze,Be,pe,Se,Ue,rt,Ht),P.pixelStorei(P.UNPACK_ROW_LENGTH,dt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,tt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke),O===0&&F.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(T,F,X=null,Y=null,O=0){T.isTexture!==!0&&(Tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0);let pe,Se,Ne,De,ze,Be,Ue,rt,dt;const Mt=T.isCompressedTexture?T.mipmaps[O]:T.image;X!==null?(pe=X.max.x-X.min.x,Se=X.max.y-X.min.y,Ne=X.max.z-X.min.z,De=X.min.x,ze=X.min.y,Be=X.min.z):(pe=Mt.width,Se=Mt.height,Ne=Mt.depth,De=0,ze=0,Be=0),Y!==null?(Ue=Y.x,rt=Y.y,dt=Y.z):(Ue=0,rt=0,dt=0);const Sn=je.convert(F.format),tt=je.convert(F.type);let ke;if(F.isData3DTexture)C.setTexture3D(F,0),ke=P.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ht=P.getParameter(P.UNPACK_ROW_LENGTH),nt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Vn=P.getParameter(P.UNPACK_SKIP_PIXELS),Qr=P.getParameter(P.UNPACK_SKIP_ROWS),Mn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,De),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(ke,O,Ue,rt,dt,pe,Se,Ne,Sn,tt,Mt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ke,O,Ue,rt,dt,pe,Se,Ne,Sn,Mt.data):P.texSubImage3D(ke,O,Ue,rt,dt,pe,Se,Ne,Sn,tt,Mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ht),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Mn),O===0&&F.generateMipmaps&&P.generateMipmap(ke),se.unbindTexture()},this.initRenderTarget=function(T){he.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),se.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,se.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gf?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===bc?"display-p3":"srgb"}}class Kf extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class g2 extends nn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=tn,u=tn,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v2 extends nn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,m=(o-u)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new me:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],s=[],o=[],a=new U,l=new vt;for(let m=0;m<=e;m++){const p=m/e;r[m]=this.getTangentAt(p,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(jt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,p))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(jt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],m*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zf extends fi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new me){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class x2 extends Zf{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,m*=u,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const rl=new U,Fu=new Jf,Ou=new Jf,zu=new Jf;class _2 extends fi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(rl.subVectors(r[0],r[1]).add(r[0]),c=rl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(rl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=rl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),m),S=Math.pow(h.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(u),m);S<1e-4&&(S=1),p<1e-4&&(p=S),g<1e-4&&(g=S),Fu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,S,g),Ou.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,S,g),zu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,S,g)}else this.curveType==="catmullrom"&&(Fu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ou.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),zu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Fu.calc(l),Ou.calc(l),zu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function b0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function y2(t,e){const n=1-t;return n*n*e}function S2(t,e){return 2*(1-t)*t*e}function M2(t,e){return t*t*e}function Oo(t,e,n,i){return y2(t,e)+S2(t,n)+M2(t,i)}function w2(t,e){const n=1-t;return n*n*n*e}function E2(t,e){const n=1-t;return 3*n*n*t*e}function b2(t,e){return 3*(1-t)*t*t*e}function T2(t,e){return t*t*t*e}function zo(t,e,n,i,r){return w2(t,e)+E2(t,n)+b2(t,i)+T2(t,r)}class Hx extends fi{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A2 extends fi{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y),zo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vx extends fi{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C2 extends fi{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gx extends fi{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Oo(e,r.x,s.x,o.x),Oo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R2 extends fi{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Oo(e,r.x,s.x,o.x),Oo(e,r.y,s.y,o.y),Oo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jx extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(b0(a,l.x,c.x,u.x,h.x),b0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new me().fromArray(r))}return this}}var Th=Object.freeze({__proto__:null,ArcCurve:x2,CatmullRomCurve3:_2,CubicBezierCurve:Hx,CubicBezierCurve3:A2,EllipseCurve:Zf,LineCurve:Vx,LineCurve3:C2,QuadraticBezierCurve:Gx,QuadraticBezierCurve3:R2,SplineCurve:jx});class P2 extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Th[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Th[r.type]().fromJSON(r))}return this}}class Ah extends P2{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Vx(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Gx(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Hx(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new jx(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Zf(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qf extends yn{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=jt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,h=new U,d=new me,m=new U,p=new U,S=new U;let g=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,m.x=f*1,m.y=-g,m.z=f*0,S.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(S.x,S.y,S.z);break;default:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,m.x=f*1,m.y=-g,m.z=f*0,p.copy(m),m.x+=S.x,m.y+=S.y,m.z+=S.z,m.normalize(),l.push(m.x,m.y,m.z),S.copy(p)}for(let x=0;x<=n;x++){const _=i+x*u*r,M=Math.sin(_),R=Math.cos(_);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*M,h.y=e[A].y,h.z=e[A].x*R,o.push(h.x,h.y,h.z),d.x=x/n,d.y=A/(e.length-1),a.push(d.x,d.y);const b=l[3*A+0]*M,L=l[3*A+1],W=l[3*A+0]*R;c.push(b,L,W)}}for(let x=0;x<n;x++)for(let _=0;_<e.length-1;_++){const M=_+x*e.length,R=M,A=M+e.length,b=M+e.length+1,L=M+1;s.push(R,A,L),s.push(b,L,A)}this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qf(e.points,e.segments,e.phiStart,e.phiLength)}}class Os extends Qf{constructor(e=1,n=1,i=4,r=8){const s=new Ah;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Os(e.radius,e.length,e.capSegments,e.radialSegments)}}class ep extends yn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new U,u=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const m=i+h/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qt extends yn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],m=[];let p=0;const S=[],g=i/2;let f=0;x(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(m,2));function x(){const M=new U,R=new U;let A=0;const b=(n-e)/i;for(let L=0;L<=s;L++){const W=[],y=L/s,E=y*(n-e)+e;for(let V=0;V<=r;V++){const H=V/r,$=H*l+a,ee=Math.sin($),G=Math.cos($);R.x=E*ee,R.y=-y*i+g,R.z=E*G,h.push(R.x,R.y,R.z),M.set(ee,b,G).normalize(),d.push(M.x,M.y,M.z),m.push(H,1-y),W.push(p++)}S.push(W)}for(let L=0;L<r;L++)for(let W=0;W<s;W++){const y=S[W][L],E=S[W+1][L],V=S[W+1][L+1],H=S[W][L+1];e>0&&(u.push(y,E,H),A+=3),n>0&&(u.push(E,V,H),A+=3)}c.addGroup(f,A,0),f+=A}function _(M){const R=p,A=new me,b=new U;let L=0;const W=M===!0?e:n,y=M===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,g*y,0),d.push(0,y,0),m.push(.5,.5),p++;const E=p;for(let V=0;V<=r;V++){const $=V/r*l+a,ee=Math.cos($),G=Math.sin($);b.x=W*G,b.y=g*y,b.z=W*ee,h.push(b.x,b.y,b.z),d.push(0,y,0),A.x=ee*.5+.5,A.y=G*.5*y+.5,m.push(A.x,A.y),p++}for(let V=0;V<r;V++){const H=R+V,$=E+V;M===!0?u.push($,$+1,H):u.push($+1,$,H),L+=3}c.addGroup(f,L,M===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ra extends Qt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ra(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends Ah{constructor(e){super(e),this.uuid=ro(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Ah().fromJSON(r))}return this}}const N2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Wx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,m;if(i&&(s=k2(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let p=n;p<r;p+=n)h=t[p],d=t[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return sa(s,o,n,a,l,m,0),o}};function Wx(t,e,n,i,r){let s,o;if(r===X2(t,e,n,i)>0)for(s=e;s<n;s+=i)o=T0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=T0(s,t[s],t[s+1],o);return o&&Cc(o,o.next)&&(aa(o),o=o.next),o}function Kr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Cc(n,n.next)||_t(n.prev,n,n.next)===0)){if(aa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function sa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&H2(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?D2(t,i,r,s):L2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),aa(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=I2(Kr(t),e,n),sa(t,e,n,i,r,s,2)):o===2&&U2(t,e,n,i,r,s):sa(Kr(t),e,n,i,r,s,1);break}}}function L2(t){const e=t.prev,n=t,i=t.next;if(_t(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=m&&Cs(r,a,s,l,o,c,p.x,p.y)&&_t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function D2(t,e,n,i){const r=t.prev,s=t,o=t.next;if(_t(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,S=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,f=Ch(m,p,e,n,i),x=Ch(S,g,e,n,i);let _=t.prevZ,M=t.nextZ;for(;_&&_.z>=f&&M&&M.z<=x;){if(_.x>=m&&_.x<=S&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Cs(a,u,l,h,c,d,_.x,_.y)&&_t(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=m&&M.x<=S&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&Cs(a,u,l,h,c,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=S&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Cs(a,u,l,h,c,d,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=x;){if(M.x>=m&&M.x<=S&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&Cs(a,u,l,h,c,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function I2(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Cc(r,s)&&$x(r,i,i.next,s)&&oa(r,s)&&oa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),aa(i),aa(i.next),i=t=s),i=i.next}while(i!==t);return Kr(i)}function U2(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j2(o,a)){let l=Xx(o,a);o=Kr(o,o.next),l=Kr(l,l.next),sa(o,e,n,i,r,s,0),sa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function k2(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Wx(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(G2(c));for(r.sort(F2),s=0;s<r.length;s++)n=O2(r[s],n);return n}function F2(t,e){return t.x-e.x}function O2(t,e){const n=z2(t,e);if(!n)return e;const i=Xx(n,t);return Kr(i,i.next),Kr(n,n.next)}function z2(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Cs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),oa(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&B2(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function B2(t,e){return _t(t.prev,t,e.prev)<0&&_t(e.next,t,t.next)<0}function H2(t,e,n,i){let r=t;do r.z===0&&(r.z=Ch(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,V2(r)}function V2(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Ch(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function G2(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Cs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function j2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!W2(t,e)&&(oa(t,e)&&oa(e,t)&&$2(t,e)&&(_t(t.prev,t,e.prev)||_t(t,e.prev,e))||Cc(t,e)&&_t(t.prev,t,t.next)>0&&_t(e.prev,e,e.next)>0)}function _t(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Cc(t,e){return t.x===e.x&&t.y===e.y}function $x(t,e,n,i){const r=ol(_t(t,e,n)),s=ol(_t(t,e,i)),o=ol(_t(n,i,t)),a=ol(_t(n,i,e));return!!(r!==s&&o!==a||r===0&&sl(t,n,e)||s===0&&sl(t,i,e)||o===0&&sl(n,t,i)||a===0&&sl(n,e,i))}function sl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ol(t){return t>0?1:t<0?-1:0}function W2(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&$x(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function oa(t,e){return _t(t.prev,t,t.next)<0?_t(t,e,t.next)>=0&&_t(t,t.prev,e)>=0:_t(t,e,t.prev)<0||_t(t,t.next,e)<0}function $2(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Xx(t,e){const n=new Rh(t.i,t.x,t.y),i=new Rh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function T0(t,e,n,i){const r=new Rh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function aa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Rh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X2(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class lr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return lr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];A0(e),C0(i,e);let o=e.length;n.forEach(A0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,C0(i,n[l]);const a=N2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function A0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function C0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class tp extends yn{constructor(e=new Ac([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new lt(r,3)),this.setAttribute("uv",new lt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,m=n.bevelThickness!==void 0?n.bevelThickness:.2,p=n.bevelSize!==void 0?n.bevelSize:m-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:q2;let _,M=!1,R,A,b,L;f&&(_=f.getSpacedPoints(u),M=!0,d=!1,R=f.computeFrenetFrames(u,!1),A=new U,b=new U,L=new U),d||(g=0,m=0,p=0,S=0);const W=a.extractPoints(c);let y=W.shape;const E=W.holes;if(!lr.isClockWise(y)){y=y.reverse();for(let oe=0,P=E.length;oe<P;oe++){const D=E[oe];lr.isClockWise(D)&&(E[oe]=D.reverse())}}const H=lr.triangulateShape(y,E),$=y;for(let oe=0,P=E.length;oe<P;oe++){const D=E[oe];y=y.concat(D)}function ee(oe,P,D){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(P,D)}const G=y.length,z=H.length;function N(oe,P,D){let q,J,se;const ve=oe.x-P.x,he=oe.y-P.y,C=D.x-oe.x,w=D.y-oe.y,B=ve*ve+he*he,ie=ve*w-he*C;if(Math.abs(ie)>Number.EPSILON){const ae=Math.sqrt(B),re=Math.sqrt(C*C+w*w),Le=P.x-he/ae,xe=P.y+ve/ae,Ee=D.x-w/re,Ye=D.y+C/re,fe=((Ee-Le)*w-(Ye-xe)*C)/(ve*w-he*C);q=Le+ve*fe-oe.x,J=xe+he*fe-oe.y;const be=q*q+J*J;if(be<=2)return new me(q,J);se=Math.sqrt(be/2)}else{let ae=!1;ve>Number.EPSILON?C>Number.EPSILON&&(ae=!0):ve<-Number.EPSILON?C<-Number.EPSILON&&(ae=!0):Math.sign(he)===Math.sign(w)&&(ae=!0),ae?(q=-he,J=ve,se=Math.sqrt(B)):(q=ve,J=he,se=Math.sqrt(B/2))}return new me(q/se,J/se)}const j=[];for(let oe=0,P=$.length,D=P-1,q=oe+1;oe<P;oe++,D++,q++)D===P&&(D=0),q===P&&(q=0),j[oe]=N($[oe],$[D],$[q]);const K=[];let ne,Ae=j.concat();for(let oe=0,P=E.length;oe<P;oe++){const D=E[oe];ne=[];for(let q=0,J=D.length,se=J-1,ve=q+1;q<J;q++,se++,ve++)se===J&&(se=0),ve===J&&(ve=0),ne[q]=N(D[q],D[se],D[ve]);K.push(ne),Ae=Ae.concat(ne)}for(let oe=0;oe<g;oe++){const P=oe/g,D=m*Math.cos(P*Math.PI/2),q=p*Math.sin(P*Math.PI/2)+S;for(let J=0,se=$.length;J<se;J++){const ve=ee($[J],j[J],q);te(ve.x,ve.y,-D)}for(let J=0,se=E.length;J<se;J++){const ve=E[J];ne=K[J];for(let he=0,C=ve.length;he<C;he++){const w=ee(ve[he],ne[he],q);te(w.x,w.y,-D)}}}const Ge=p+S;for(let oe=0;oe<G;oe++){const P=d?ee(y[oe],Ae[oe],Ge):y[oe];M?(b.copy(R.normals[0]).multiplyScalar(P.x),A.copy(R.binormals[0]).multiplyScalar(P.y),L.copy(_[0]).add(b).add(A),te(L.x,L.y,L.z)):te(P.x,P.y,0)}for(let oe=1;oe<=u;oe++)for(let P=0;P<G;P++){const D=d?ee(y[P],Ae[P],Ge):y[P];M?(b.copy(R.normals[oe]).multiplyScalar(D.x),A.copy(R.binormals[oe]).multiplyScalar(D.y),L.copy(_[oe]).add(b).add(A),te(L.x,L.y,L.z)):te(D.x,D.y,h/u*oe)}for(let oe=g-1;oe>=0;oe--){const P=oe/g,D=m*Math.cos(P*Math.PI/2),q=p*Math.sin(P*Math.PI/2)+S;for(let J=0,se=$.length;J<se;J++){const ve=ee($[J],j[J],q);te(ve.x,ve.y,h+D)}for(let J=0,se=E.length;J<se;J++){const ve=E[J];ne=K[J];for(let he=0,C=ve.length;he<C;he++){const w=ee(ve[he],ne[he],q);M?te(w.x,w.y+_[u-1].y,_[u-1].x+D):te(w.x,w.y,h+D)}}}Z(),k();function Z(){const oe=r.length/3;if(d){let P=0,D=G*P;for(let q=0;q<z;q++){const J=H[q];Ce(J[2]+D,J[1]+D,J[0]+D)}P=u+g*2,D=G*P;for(let q=0;q<z;q++){const J=H[q];Ce(J[0]+D,J[1]+D,J[2]+D)}}else{for(let P=0;P<z;P++){const D=H[P];Ce(D[2],D[1],D[0])}for(let P=0;P<z;P++){const D=H[P];Ce(D[0]+G*u,D[1]+G*u,D[2]+G*u)}}i.addGroup(oe,r.length/3-oe,0)}function k(){const oe=r.length/3;let P=0;ce($,P),P+=$.length;for(let D=0,q=E.length;D<q;D++){const J=E[D];ce(J,P),P+=J.length}i.addGroup(oe,r.length/3-oe,1)}function ce(oe,P){let D=oe.length;for(;--D>=0;){const q=D;let J=D-1;J<0&&(J=oe.length-1);for(let se=0,ve=u+g*2;se<ve;se++){const he=G*se,C=G*(se+1),w=P+q+he,B=P+J+he,ie=P+J+C,ae=P+q+C;Pe(w,B,ie,ae)}}}function te(oe,P,D){l.push(oe),l.push(P),l.push(D)}function Ce(oe,P,D){Ie(oe),Ie(P),Ie(D);const q=r.length/3,J=x.generateTopUV(i,r,q-3,q-2,q-1);Oe(J[0]),Oe(J[1]),Oe(J[2])}function Pe(oe,P,D,q){Ie(oe),Ie(P),Ie(q),Ie(P),Ie(D),Ie(q);const J=r.length/3,se=x.generateSideWallUV(i,r,J-6,J-3,J-2,J-1);Oe(se[0]),Oe(se[1]),Oe(se[3]),Oe(se[1]),Oe(se[2]),Oe(se[3])}function Ie(oe){r.push(l[oe*3+0]),r.push(l[oe*3+1]),r.push(l[oe*3+2])}function Oe(oe){s.push(oe.x),s.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Y2(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Th[r.type]().fromJSON(r)),new tp(i,e.options)}}const q2={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new me(s,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],m=e[r*3+1],p=e[r*3+2],S=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-h),new me(d,1-p),new me(S,1-f)]:[new me(a,1-l),new me(u,1-h),new me(m,1-p),new me(g,1-f)]}};function Y2(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class np extends yn{constructor(e=new Ac([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function c(u){const h=r.length/3,d=u.extractPoints(n);let m=d.shape;const p=d.holes;lr.isClockWise(m)===!1&&(m=m.reverse());for(let g=0,f=p.length;g<f;g++){const x=p[g];lr.isClockWise(x)===!0&&(p[g]=x.reverse())}const S=lr.triangulateShape(m,p);for(let g=0,f=p.length;g<f;g++){const x=p[g];m=m.concat(x)}for(let g=0,f=m.length;g<f;g++){const x=m[g];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,f=S.length;g<f;g++){const x=S[g],_=x[0]+h,M=x[1]+h,R=x[2]+h;i.push(_,M,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return K2(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new np(i,e.curveSegments)}}function K2(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class at extends yn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,d=new U,m=[],p=[],S=[],g=[];for(let f=0;f<=i;f++){const x=[],_=f/i;let M=0;f===0&&o===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const A=R/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),g.push(A+M,1-_),x.push(c++)}u.push(x)}for(let f=0;f<i;f++)for(let x=0;x<n;x++){const _=u[f][x+1],M=u[f][x],R=u[f+1][x],A=u[f+1][x+1];(f!==0||o>0)&&m.push(_,M,A),(f!==i-1||l<Math.PI)&&m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(S,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ip extends yn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new U,h=new U,d=new U;for(let m=0;m<=i;m++)for(let p=0;p<=r;p++){const S=p/r*s,g=m/i*Math.PI*2;h.x=(e+n*Math.cos(g))*Math.cos(S),h.y=(e+n*Math.cos(g))*Math.sin(S),h.z=n*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let p=1;p<=r;p++){const S=(r+1)*m+p-1,g=(r+1)*(m-1)+p-1,f=(r+1)*(m-1)+p,x=(r+1)*m+p;o.push(S,g,x),o.push(g,f,x)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ip(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Z2 extends oo{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Qs extends oo{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wx,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class qx extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class rp extends qx{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Bu=new vt,R0=new U,P0=new U;class J2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $f,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;R0.setFromMatrixPosition(e.matrixWorld),n.position.copy(R0),P0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(P0),n.updateMatrixWorld(),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q2 extends J2{constructor(){super(new Xf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sp extends qx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Q2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const N0=new vt;class eA{constructor(e,n,i=0,r=1/0){this.ray=new Cx(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Wf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return N0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(N0),this}intersectObject(e,n=!0,i=[]){return Ph(e,this,i,n),i.sort(L0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ph(e[r],this,i,n);return i.sort(L0),i}}function L0(t,e){return t.distance-e.distance}function Ph(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Ph(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);let Tr=null;function sc(){return Tr||(Tr=new g2(new Uint8Array([110,190,255]),3,1,zf),Tr.minFilter=tn,Tr.magFilter=tn,Tr.generateMipmaps=!1,Tr.needsUpdate=!0),Tr}const D0=new Map;function We(t){let e=D0.get(t);return e||(e=new Qs({color:t,gradientMap:sc()}),D0.set(t,e)),e}function Fe(t,e,n=0,i=0,r=0){const s=new Wt(t,e);return s.position.set(n,i,r),s}function Gi(t,e,n,i){const r=new Ac,s=-t/2+i,o=-e/2+i,a=t-2*i,l=e-2*i;r.moveTo(s,o-i),r.lineTo(s+a,o-i),r.quadraticCurveTo(s+a+i,o-i,s+a+i,o),r.lineTo(s+a+i,o+l),r.quadraticCurveTo(s+a+i,o+l+i,s+a,o+l+i),r.lineTo(s,o+l+i),r.quadraticCurveTo(s-i,o+l+i,s-i,o+l),r.lineTo(s-i,o),r.quadraticCurveTo(s-i,o-i,s,o-i);const c=new tp(r,{depth:n-2*i,bevelEnabled:!0,bevelSize:i,bevelThickness:i,bevelSegments:3,curveSegments:4});return c.translate(0,0,-(n-2*i)/2),c}function Nh(t,e){const n=hr(t),i=n.colors[e%n.colors.length],r=new pn,s=[],o=(l,c=!1)=>(r.add(l),c&&s.push(l),l);let a;switch(t){case"rug":{const l=o(Fe(new Qt(.95,.95,.03,40),We(i),0,.016,0),!0);l.receiveShadow=!0,o(Fe(new Qt(.66,.66,.034,40),We(ge.paper),0,.018,0)).receiveShadow=!0,o(Fe(new Qt(.34,.34,.038,32),We(i),0,.02,0),!0).receiveShadow=!0;break}case"plant":{o(Fe(new Qt(.24,.18,.38,20),We(i),0,.19,0),!0),o(Fe(new Qt(.22,.22,.03,20),We(ge.paw),0,.38,0));const l=We(ge.grass),c=We(ge.grassDeep);[[0,.66,0,.24,l],[.15,.53,.08,.17,c],[-.14,.55,-.06,.18,l],[.04,.86,-.04,.15,c]].forEach(([u,h,d,m,p])=>o(Fe(new at(m,16,12),p,u,h,d)));break}case"beanbag":{o(Fe(new at(.44,28,20),We(i),0,.25,0),!0).scale.set(1,.58,1),o(Fe(new at(.3,24,16),We(i),-.03,.43,-.12),!0).scale.set(1,.55,.85);break}case"lamp":{const l=We(ge.ink);o(Fe(new Qt(.18,.22,.06,20),l,0,.03,0)),o(Fe(new Qt(.03,.03,1.25,10),l,0,.66,0)),o(Fe(new at(.1,12,10),new zr({color:"#FFF4C2"}),0,1.28,0));const c=new Qs({color:i,gradientMap:sc(),side:Fn});o(Fe(new Qt(.15,.32,.38,24,1,!0),c,0,1.38,0),!0);break}case"table":{o(Fe(new Qt(.42,.42,.08,28),We(i),0,.56,0),!0),o(Fe(new Qt(.06,.06,.52,12),We(ge.wood),0,.27,0)),o(Fe(new Qt(.22,.26,.04,20),We(ge.wood),0,.02,0)),o(Fe(new Qt(.08,.07,.15,16),We(ge.tomato),.13,.67,.05)),o(Fe(Gi(.26,.05,.19,.02),We(ge.sun),-.12,.625,-.06));break}case"shelf":{o(Fe(Gi(.86,1.55,.42,.05),We(i),0,.775,-.24),!0);const l=We("#F1E4D2");[.35,.85,1.32].forEach(u=>o(Fe(new Gt(.72,.36,.06),l,0,u,-.02)));const c=[ge.tomato,ge.cobalt,ge.sun,ge.teal,ge.grape];[.35,.85,1.32].forEach((u,h)=>{let d=-.3;for(let m=0;m<5;m++){const p=.07+(m+h)%3*.025,S=.22+(m*7+h)%3*.04;if(d+p>.32)break;o(Fe(Gi(p,S,.22,.01),We(c[(m+h*2)%c.length]),d+p/2,u-.17+S/2,-.12)),d+=p+.02}});break}case"fishbowl":{o(Fe(new Qt(.2,.26,.55,20),We(i),0,.275,0),!0),o(Fe(new at(.3,28,20),new Qs({color:"#BDEBFF",transparent:!0,opacity:.45,depthWrite:!1,gradientMap:sc()}),0,.84,0));const l=new pn;l.position.y=.82;const c=Fe(new at(.07,14,10),We("#FF9F45"),.13,0,0);c.scale.set(1.5,1,.7);const u=Fe(new ra(.05,.08,8),We("#FF9F45"),.03,0,0);u.rotation.z=Math.PI/2,l.add(c,u),r.add(l),a=h=>{l.rotation.y=h*1.2,l.position.y=.82+Math.sin(h*2)*.03};break}case"bed":{o(Fe(Gi(.92,.28,1.9,.06),We(ge.wood),0,.16,0)),o(Fe(Gi(.92,.85,.12,.05),We(i),0,.45,-.92),!0),o(Fe(Gi(.86,.14,1.8,.05),We(ge.white),0,.37,0)),o(Fe(Gi(.6,.13,.32,.06),We(ge.paper),0,.5,-.66)),o(Fe(Gi(.9,.09,1.15,.04),We(i),0,.47,.3),!0);break}case"kitty":{const l=We(i),c=We(ge.ink),u=We("#FF8FAB");o(Fe(new at(.26,24,18),l,0,.24,-.04),!0).scale.set(.9,1,1.15),o(Fe(new at(.2,24,18),l,0,.56,.08),!0),[-1,1].forEach(p=>{const S=o(Fe(new ra(.07,.14,12),l,p*.11,.74,.08),!0);S.rotation.z=-p*.25,o(Fe(new at(.03,10,8),c,p*.075,.59,.26))}),o(Fe(new at(.022,10,8),u,0,.53,.28));const d=new pn;d.position.set(0,.14,-.3);const m=Fe(new Os(.035,.36,4,8),l,0,.2,0);d.add(m),d.rotation.x=-.4,s.push(m),r.add(d),a=p=>{d.rotation.z=Math.sin(p*2.4)*.45};break}}return r.traverse(l=>{l.isMesh&&(l.castShadow=!n.floor,l.receiveShadow=!0)}),{group:r,tinted:s,animate:a}}function tA(t,e,n){const i=hr(e),r=i.colors[n%i.colors.length];for(const s of t.tinted){const o=s.material;s.material=o.side===Fn?new Qs({color:r,gradientMap:sc(),side:Fn}):We(r)}}function Yx(t){const e=new pn,n=new pn;e.add(n);const i=We(ge.caramel),r=We(ge.caramelDeep),s=We(ge.cream),o=We(ge.snoutNose),a=We(ge.paw),l=We(ge.pupil),c=We(ge.eyeWhite),u=Fe(new at(.34,32,24),i,0,.36,0);u.scale.set(1,1.05,.9),n.add(u);const h=Fe(new at(.24,32,24),s,0,.34,.2);h.scale.set(1,1.15,.5),n.add(h),[-1,1].forEach(R=>{const A=Fe(new at(.11,18,12),a,R*.15,.05,.06);A.scale.set(1,.55,1.3),n.add(A);const b=Fe(new Os(.07,.16,6,12),i,R*.34,.38,.03);b.rotation.z=R*.35,n.add(b),n.add(Fe(new at(.075,14,10),a,R*.38,.27,.05))});const d=new pn;d.position.set(0,.78,.02),n.add(d);const m=Fe(new at(.3,32,24),i,0,0,0);m.scale.set(1.14,.86,.95),d.add(m);const p=Fe(new at(.24,32,24),i,0,.12,-.02);p.scale.set(1,1,.95),d.add(p),[-1,1].forEach(R=>{const A=Fe(new at(.075,16,12),r,R*.17,.32,-.04);A.scale.set(1,1,.6),d.add(A);const b=Fe(new at(.042,12,10),a,R*.17,.32,0);b.scale.set(1,1,.4),d.add(b)});const S=Fe(new at(.23,32,24),s,0,-.07,.19);S.scale.set(1.18,.95,.88),d.add(S);const g=Fe(new at(.11,24,16),o,0,.02,.35);g.scale.set(1.3,.72,.5),d.add(g),[-1,1].forEach(R=>{const A=Fe(new at(.026,10,8),l,R*.075,.045,.39);A.scale.set(1.2,.9,.6),d.add(A)});const f=Fe(new ip(.07,.013,8,20,Math.PI),a,0,-.13,.39);f.rotation.z=Math.PI,d.add(f);const x=[];[-1,1].forEach(R=>{const A=new pn;A.position.set(R*.17,.13,.2);const b=Fe(new at(.075,18,14),c);b.scale.set(.95,1.05,.6),A.add(b),A.add(Fe(new at(.052,16,12),l,-R*.012,-.005,.03)),A.add(Fe(new at(.016,8,6),c,-R*0,.02,.07)),d.add(A),x.push(A);const L=Fe(new Os(.015,.07,4,8),a,R*.17,.24,.2);L.rotation.z=Math.PI/2+R*.2,d.add(L)});const _=new pn;[-.035,0,.035].forEach((R,A)=>{const b=Fe(new ra(.03,.09+(A===1?.03:0),10),r,R,.37,0);b.rotation.z=-R*6,_.add(b)}),d.add(_);const M=new pn;return[-1,1].forEach(R=>{[0,1,2].forEach(A=>{const b=Fe(new Os(.008,.035,3,6),l,R*(.225+A*.012),.185-A*.025,.215);b.rotation.z=R*(.9+A*.35),M.add(b)})}),d.add(M),_.visible=t==="boy",M.visible=t==="girl",e.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!1)}),e.scale.setScalar(1.3),e.userData.buddy=!0,{root:e,body:n,eyes:x,boyDetail:_,girlDetail:M}}const wt=pt/2;function I0(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"));const r=new v2(i);return r.colorSpace=Kn,r.anisotropy=4,r}function Hu(t,e,n,i,r){const[s,o]=Xr(e,r);t.position.set(n+s/2-wt,0,i+o/2-wt),t.rotation.y=-r*Math.PI/2}class nA{constructor(e,n,i){var s;this.canvas=e,this.cb=n,this.scene=new Kf,this.camera=new Xf(-1,1,1,-1,.1,100),this.itemRoot=new pn,this.live=new Map,this.buddyCell={x:4,z:5},this.path=[],this.nextWander=0,this.hopStart=-1,this.blinkAt=0,this.ghost=null,this.selectedId=null,this.frame=0,this.running=!0,this.downAt=null,this.ray=new eA,this.ndc=new me,this.reduceMotion=((s=window.matchMedia)==null?void 0:s.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.onDown=o=>{this.downAt={x:o.clientX,y:o.clientY}},this.onMove=o=>{if(!this.ghost||o.pointerType==="touch")return;this.setRay(o);const a=this.ray.intersectObject(this.floor)[0];if(!a)return;const l=this.cellFor(a.point,this.ghost.type,this.ghost.rot);(!this.ghost.cell||l.x!==this.ghost.cell.x||l.z!==this.ghost.cell.z)&&this.cb.onFloorTap(l.x,l.z)},this.onUp=o=>{if(!this.downAt)return;const a=Math.hypot(o.clientX-this.downAt.x,o.clientY-this.downAt.y);if(this.downAt=null,a>12)return;if(this.setRay(o),this.ghost){const c=this.ray.intersectObject(this.floor)[0];if(c){const u=this.cellFor(c.point,this.ghost.type,this.ghost.rot);this.cb.onFloorTap(u.x,u.z)}return}if(this.ray.intersectObject(this.buddy.root,!0).length){this.cb.onBuddyTap();return}const l=this.ray.intersectObjects(this.itemRoot.children,!0);for(const c of l){let u=c.object;for(;u&&u.userData.itemId===void 0;)u=u.parent;if(u){this.cb.onSelectItem(u.userData.itemId);return}}this.cb.onSelectItem(null)},this.onVisibility=()=>{document.visibilityState==="visible"&&this.running&&(cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(this.loop))},this.loop=o=>{var d,m;if(!this.running||document.visibilityState==="hidden")return;const a=o/1e3,l=this.buddy.body,c=this.buddy.root;if(this.path.length){const p=this.path[0],S=p.x-wt+.5,g=p.z-wt+.5,f=S-c.position.x,x=g-c.position.z,_=Math.hypot(f,x),M=.032;_<M?(c.position.set(S,0,g),this.buddyCell=this.path.shift()):(c.position.x+=f/_*M,c.position.z+=x/_*M,this.turnTo(Math.atan2(f,x))),l.position.y=Math.abs(Math.sin(a*10))*.05,l.rotation.z=Math.sin(a*10)*.05}else if(this.turnTo(Math.PI/4),l.rotation.z*=.85,l.position.y=Math.sin(a*2.2)*.02,o>this.nextWander&&!this.ghost&&this.hopStart<0){const p=this.occupied(),S=[];for(let g=0;g<pt;g++)for(let f=0;f<pt;f++)p.has(`${g},${f}`)||S.push({x:g,z:f});S.length&&(this.path=this.findPath(S[Math.floor(Math.random()*S.length)]).slice(0,5)),this.nextWander=o+4e3+Math.random()*5e3}if(this.hopStart>=0){const p=(o-this.hopStart)/650;p>=1?(this.hopStart=-1,l.rotation.y=0,l.scale.set(1,1,1)):(l.position.y=Math.sin(p*Math.PI)*.5,l.scale.set(1+Math.sin(p*Math.PI*2)*.06,1-Math.sin(p*Math.PI*2)*.06,1),this.reduceMotion||(l.rotation.y=p*Math.PI*2))}else l.scale.set(1,1+Math.sin(a*2.2)*.012,1);const u=o-this.blinkAt,h=u>0&&u<140?.1:1;this.buddy.eyes.forEach(p=>p.scale.y=h),u>140&&(this.blinkAt=o+2200+Math.random()*2600);for(const{built:p}of this.live.values())(d=p.animate)==null||d.call(p,a);(m=this.ghost)!=null&&m.group.visible&&(this.ghost.group.position.y=.06+Math.sin(a*5)*.03),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop)},this.renderer=new Yf({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Uf,this.camera.position.set(12,11,12),this.camera.lookAt(0,.6,0),this.scene.add(new rp(16777215,15980984,1.6));const r=new sp(16773596,1.9);r.position.set(6,10,7),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),r.shadow.bias=-.002,r.shadow.radius=4,this.scene.add(r),this.buildRoom(),this.scene.add(this.itemRoot),this.buddy=Yx(i),this.scene.add(this.buddy.root),this.placeBuddyAt(this.buddyCell),this.buddy.root.rotation.y=Math.PI/4,this.highlight=new Wt(new Js(1,1),new zr({color:ge.teal,transparent:!0,opacity:.45,depthWrite:!1})),this.highlight.rotation.x=-Math.PI/2,this.highlight.position.y=.05,this.highlight.visible=!1,this.scene.add(this.highlight),e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointermove",this.onMove),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e.parentElement??e),document.addEventListener("visibilitychange",this.onVisibility),this.resize(),this.frame=requestAnimationFrame(this.loop)}buildRoom(){const e=I0(512,512,h=>{for(let d=0;d<8;d++){h.fillStyle=d%2?"#D9A06A":"#E2AD78",h.fillRect(0,d*64,512,64),h.fillStyle="rgba(122,66,32,0.22)",h.fillRect(0,d*64,512,3);const m=d*192%512;h.fillRect(m,d*64,3,64),h.fillRect((m+256)%512,d*64,3,64)}});this.floor=new Wt(new Js(pt,pt),new Qs({map:e})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);const n=new Wt(new Gt(pt+.5,.45,pt+.5),We(ge.woodDeep));n.position.y=-.226,this.scene.add(n);const i=(h,d)=>{const m=I0(256,256,p=>{p.fillStyle=h,p.fillRect(0,0,256,256),p.fillStyle=d;for(let S=0;S<8;S++)for(let g=0;g<8;g++)p.beginPath(),p.arc(g*32+(S%2?16:0)+8,S*32+16,4.5,0,7),p.fill()});return m.wrapS=m.wrapT=Ql,m.repeat.set(3,1.3),new Qs({map:m})},r=new Wt(new Gt(pt+.5,3.4,.25),i(ge.cobaltSoft,"#DCE6F8"));r.position.set(0,1.7,-wt-.125);const s=new Wt(new Gt(.25,3.4,pt+.25),i(ge.sunSoft,"#FFF0C8"));s.position.set(-wt-.125,1.7,.125),r.receiveShadow=s.receiveShadow=!0,this.scene.add(r,s);const o=We(ge.white),a=(h,d,m,p,S)=>{const g=new Wt(h,d);return g.position.set(m,p,S),this.scene.add(g),g};a(new Gt(pt+.25,.18,.08),o,.125,.09,-wt+.04),a(new Gt(.08,.18,pt),o,-wt+.04,.09,.125),a(new Gt(2.1,1.5,.06),o,1.2,1.95,-wt+.02),a(new Gt(1.85,1.25,.07),new zr({color:"#BFE6F5"}),1.2,1.95,-wt+.03),a(new Gt(.08,1.25,.09),o,1.2,1.95,-wt+.05),a(new Gt(1.85,.08,.09),o,1.2,1.95,-wt+.05);const l=new zr({color:"#FFFFFF"});[[.62,2.25,.16],[.82,2.3,.2],[1.02,2.24,.14],[1.6,1.66,.12],[1.78,1.7,.16]].forEach(([h,d,m])=>{const p=a(new at(m,12,10),l,h,d,-wt+.07);p.scale.z=.3}),a(new Gt(.06,1,1),We(ge.sun),-wt+.02,1.95,-1.3),a(new Gt(.07,.8,.8),We(ge.white),-wt+.03,1.95,-1.3);const c=new Ac;for(let h=0;h<10;h++){const d=-Math.PI/2+h*Math.PI/5,m=h%2?.13:.3;h===0?c.moveTo(Math.cos(d)*m,-Math.sin(d)*m):c.lineTo(Math.cos(d)*m,-Math.sin(d)*m)}const u=a(new np(c),new zr({color:ge.sun}),-wt+.075,1.95,-1.3);u.rotation.y=Math.PI/2}setRoom(e){const n=new Set(e.map(i=>i.id));for(const[i,r]of this.live)n.has(i)||(this.itemRoot.remove(r.built.group),this.live.delete(i));for(const i of e){const r=this.live.get(i.id);if(r)r.item.color!==i.color&&tA(r.built,i.type,i.color),Hu(r.built.group,i.type,i.x,i.z,i.rot),r.item={...i};else{const s=Nh(i.type,i.color);s.group.userData.itemId=i.id,Hu(s.group,i.type,i.x,i.z,i.rot),this.itemRoot.add(s.group),this.live.set(i.id,{item:{...i},built:s})}}this.ensureBuddyFree(),this.setSelected(this.selectedId)}setSelected(e){this.selectedId=e;const n=e!=null?this.live.get(e):void 0;if(!n){this.highlight.visible=!!this.ghost&&this.highlight.visible,this.ghost||(this.highlight.visible=!1);return}this.showHighlight(n.item.type,n.item.x,n.item.z,n.item.rot,!0)}showHighlight(e,n,i,r,s){const[o,a]=Xr(e,r);this.highlight.scale.set(o,a,1),this.highlight.position.x=n+o/2-wt,this.highlight.position.z=i+a/2-wt,this.highlight.material.color.set(s?ge.teal:ge.sun),this.highlight.visible=!0}setBuddyKind(e){this.buddy.boyDetail.visible=e==="boy",this.buddy.girlDetail.visible=e==="girl"}startGhost(e,n,i,r){this.stopGhost();const s=Nh(e,i);if(s.group.traverse(o=>{const a=o;a.isMesh&&(a.material=a.material.clone(),a.material.transparent=!0,a.material.opacity=.6,a.castShadow=!1)}),s.group.visible=!1,this.scene.add(s.group),this.ghost={type:e,rot:n,group:s.group,cell:null},r!=null){const o=this.live.get(r);o&&(o.built.group.visible=!1)}}updateGhost(e,n,i,r){this.ghost&&(this.ghost.rot=i,this.ghost.cell={x:e,z:n},Hu(this.ghost.group,this.ghost.type,e,n,i),this.ghost.group.visible=!0,this.showHighlight(this.ghost.type,e,n,i,r))}stopGhost(){this.ghost&&(this.scene.remove(this.ghost.group),this.ghost=null);for(const e of this.live.values())e.built.group.visible=!0;this.highlight.visible=!1,this.selectedId!=null&&this.setSelected(this.selectedId)}cellFor(e,n,i){const[r,s]=Xr(n,i),o=Math.max(0,Math.min(pt-r,Math.round(e.x+wt-r/2))),a=Math.max(0,Math.min(pt-s,Math.round(e.z+wt-s/2)));return{x:o,z:a}}hop(){this.hopStart=performance.now()}buddyScreenPos(){const e=this.buddy.root.position.clone();e.y+=1.75,e.project(this.camera);const n=this.canvas.getBoundingClientRect();return{x:(e.x+1)/2*n.width,y:(1-e.y)/2*n.height}}occupied(){const e=new Set;for(const{item:n}of this.live.values())hr(n.type).floor||kd(n.type,n.x,n.z,n.rot).forEach(i=>e.add(i));return e}placeBuddyAt(e){this.buddy.root.position.set(e.x-wt+.5,0,e.z-wt+.5)}ensureBuddyFree(){const e=this.occupied();if(!e.has(`${this.buddyCell.x},${this.buddyCell.z}`))return;let n=null,i=1/0;for(let r=0;r<pt;r++)for(let s=0;s<pt;s++){if(e.has(`${r},${s}`))continue;const o=Math.hypot(r-this.buddyCell.x,s-this.buddyCell.z);o<i&&(i=o,n={x:r,z:s})}n&&(this.buddyCell=n,this.path=[],this.placeBuddyAt(n))}findPath(e){const n=this.occupied(),i=o=>`${o.x},${o.z}`,r=new Map([[i(this.buddyCell),null]]),s=[this.buddyCell];for(;s.length;){const o=s.shift();if(o.x===e.x&&o.z===e.z){const a=[];let l=i(o);for(;l;){const[c,u]=l.split(",").map(Number);a.unshift({x:c,z:u}),l=r.get(l)??null}return a.slice(1)}for(const[a,l]of[[1,0],[-1,0],[0,1],[0,-1]]){const c={x:o.x+a,z:o.z+l};if(c.x<0||c.z<0||c.x>=pt||c.z>=pt)continue;const u=i(c);r.has(u)||n.has(u)||(r.set(u,i(o)),s.push(c))}}return[]}setRay(e){const n=this.canvas.getBoundingClientRect();this.ndc.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}resize(){const e=this.canvas.parentElement??this.canvas,n=e.clientWidth||1,i=e.clientHeight||1,r=n/i;this.renderer.setSize(n,i,!1);const s=Math.max(5.6,6.2/r);Object.assign(this.camera,{left:-s*r,right:s*r,top:s,bottom:-s}),this.camera.updateProjectionMatrix()}turnTo(e){let n=e-this.buddy.root.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.buddy.root.rotation.y+=n*.15}dispose(){this.running=!1,cancelAnimationFrame(this.frame),this.resizeObs.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.canvas.removeEventListener("pointerdown",this.onDown),this.canvas.removeEventListener("pointerup",this.onUp),this.canvas.removeEventListener("pointermove",this.onMove),this.renderer.dispose()}}const U0=new Map;let wo=null;function iA(t,e=0){const n=`${t}:${e}`,i=U0.get(n);if(i)return i;try{wo||(wo=new Yf({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),wo.setSize(256,256,!1));const r=new Kf;r.add(new rp(16777215,15980984,1.8));const s=new sp(16773596,1.8);s.position.set(3,5,4),r.add(s);const o=Nh(t,e);r.add(o.group);const a=new so().setFromObject(o.group),l=a.getSize(new U),c=a.getCenter(new U),u=new Tn(28,1,.1,50),h=Math.max(l.x,l.y,l.z)*2.6+.3;u.position.set(c.x+h*.62,c.y+h*.45,c.z+h*.62),u.lookAt(c),wo.render(r,u);const d=wo.domElement.toDataURL("image/png");return U0.set(n,d),d}catch{return""}}function cr({size:t=26}){return v.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:v.jsx("path",{d:"M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z",fill:"#FBC426",stroke:"#D99A0F",strokeWidth:"1.6",strokeLinejoin:"round"})})}function Kx({size:t=20}){return v.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:v.jsx("path",{d:"M5 12.5l4.5 4.5L19 7.5",fill:"none",stroke:"currentColor",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function rA({size:t=18}){return v.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[v.jsx("rect",{x:"5",y:"10.5",width:"14",height:"10",rx:"3",fill:"currentColor"}),v.jsx("path",{d:"M8 10.5V8a4 4 0 0 1 8 0v2.5",fill:"none",stroke:"currentColor",strokeWidth:"2.6"})]})}function sA({size:t=22}){return v.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:v.jsx("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})})}function oA({on:t,size:e=24}){return v.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24","aria-hidden":"true",children:[v.jsx("path",{d:"M4 9.5h3.5L12 5.5v13l-4.5-4H4z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),t?v.jsx("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"}):v.jsx("path",{d:"M16 9.5l5 5M21 9.5l-5 5",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})]})}const aA=3*24*60*60*1e3,k0=["♪","2 + 2 = 4","★","5 × 5 = 25","♥","10 − 3 = 7"],lA={rug:"place-rug",plant:"place-plant",beanbag:"place-soft",bed:"place-soft",lamp:"place-glass",fishbowl:"place-glass",table:"place-wood",shelf:"place-wood",kitty:"place-pet"};function cA({onPractice:t}){const e=pa(),n=wc[e.lang],i=ue.useRef(null),r=ue.useRef(null),s=ue.useRef(null),[o,a]=ue.useState(null),[l,c]=ue.useState(null),[u,h]=ue.useState(!1),[d,m]=ue.useState(!1),[p,S]=ue.useState(null),[g,f]=ue.useState(Nf()),[x,_]=ue.useState(0),M=ue.useRef(e.stars),R=ue.useCallback(k=>{di(`buddy${e.kind}-${k}`)},[e.kind]),A=ue.useCallback(k=>S({text:k,id:Date.now()}),[]),b=ue.useRef(l);b.current=l;const L=ue.useRef(e.room);L.current=e.room,ue.useEffect(()=>{const k=i.current;if(!k)return;const ce=new nA(k,{onSelectItem:te=>{a(te),te!=null&&Ft("item-select")},onBuddyTap:()=>{var te;(te=r.current)==null||te.hop(),R("giggle"),A(k0[Math.floor(Math.random()*k0.length)])},onFloorTap:(te,Ce)=>{const Pe=b.current;Pe&&c({...Pe,x:te,z:Ce})}},e.kind);return r.current=ce,ce.setRoom(e.room),()=>{ce.dispose(),r.current=null}},[]),ue.useEffect(()=>{var k;(k=r.current)==null||k.setRoom(e.room)},[e.room]),ue.useEffect(()=>{var k;(k=r.current)==null||k.setBuddyKind(e.kind)},[e.kind]),ue.useEffect(()=>{var k;(k=r.current)==null||k.setSelected(o)},[o]),ue.useEffect(()=>d1(f),[]);const W=l?Fd(e.room,l.type,l.x,l.z,l.rot,l.moveId):!1,y=l?`${l.type}:${l.moveId??"new"}`:"";ue.useEffect(()=>{const k=r.current;if(k){if(!l){k.stopGhost();return}k.startGhost(l.type,l.rot,l.color,l.moveId)}},[y]),ue.useEffect(()=>{var k;l&&((k=r.current)==null||k.updateGhost(l.x,l.z,l.rot,W))},[l,W]),ue.useEffect(()=>{e.stars>M.current&&_(k=>k+1),M.current=e.stars},[e.stars]),ue.useEffect(()=>{if(e.name){const k=setTimeout(()=>{R("hello"),A(`${e.name}!`)},700);return()=>clearTimeout(k)}},[]),ue.useEffect(()=>{if(!p)return;let k=0;const ce=performance.now()+3200,te=()=>{const Ce=s.current,Pe=r.current;if(Ce&&Pe){const Ie=Pe.buddyScreenPos(),Oe=Ce.offsetWidth,oe=Ce.offsetHeight,P=window.innerWidth,D=Math.max(16,Math.min(P-16-Oe,Ie.x-Oe/2)),q=Math.max(76,Ie.y-oe-14);Ce.style.transform=`translate(${D}px, ${q}px)`,Ce.style.setProperty("--tail",`${Math.max(18,Math.min(Oe-18,Ie.x-D))}px`)}performance.now()<ce?k=requestAnimationFrame(te):S(null)};return k=requestAnimationFrame(te),()=>cancelAnimationFrame(k)},[p]);const E=o!=null?e.room.find(k=>k.id===o)??null:null,V=(k,ce)=>oi(te=>({...te,room:te.room.map(Ce=>Ce.id===k?ce(Ce):Ce)})),H=()=>{if(!E)return;const k=(E.rot+1)%4,[ce,te]=Xr(E.type,k),Pe=[[E.x,E.z],[Math.min(E.x,pt-ce),Math.min(E.z,pt-te)]].find(([Ie,Oe])=>Fd(e.room,E.type,Ie,Oe,k,E.id));if(!Pe){A(n.noRoom);return}Ft("item-rotate"),V(E.id,Ie=>({...Ie,rot:k,x:Pe[0],z:Pe[1]}))},$=()=>{E&&(Ft("item-recolor"),V(E.id,k=>({...k,color:(k.color+1)%hr(k.type).colors.length})))},ee=()=>{E&&(Ft("item-putaway"),oi(k=>({...k,room:k.room.filter(ce=>ce.id!==E.id)})),a(null))},G=(k,ce=0)=>{const te=HS(e.room,k)??{x:0,z:0};a(null),h(!1),c({type:k,rot:0,color:ce,x:te.x,z:te.z})},z=()=>{var ce;if(!l||!W)return;const k=l;k.moveId!=null?V(k.moveId,te=>({...te,x:k.x,z:k.z,rot:k.rot})):oi(te=>({...te,nextId:te.nextId+1,room:[...te.room,{id:te.nextId,type:k.type,x:k.x,z:k.z,rot:k.rot,color:k.color}]})),Ft(lA[k.type]),(ce=r.current)==null||ce.hop(),R("happy"),A("♥"),c(null)},N=()=>{if(!l)return;const k=(l.rot+1)%4,[ce,te]=Xr(l.type,k);c({...l,rot:k,x:Math.min(l.x,pt-ce),z:Math.min(l.z,pt-te)})},j=k=>{const ce=hr(k);if(e.stars<ce.stars){Ft("cant-afford"),A(`${n.needMore(ce.stars-e.stars)} ★`);return}Ft("treasure-unlock"),oi(te=>({...te,stars:te.stars-ce.stars,unlocked:[...te.unlocked,k],newSince:{...te.newSince,[k]:Date.now()}})),G(k)},K=()=>{a(null),h(!0),Ft("sheet-open")},ne=()=>{h(!1),Ft("sheet-close")},Ae=()=>Lf(!g),Ge=()=>oi(k=>({...k,lang:k.lang==="en"?"es":"en"})),Z=!e.name||d;return v.jsxs("div",{className:"mb mb-room",lang:e.lang,children:[v.jsx("canvas",{ref:i,"aria-label":e.name??"Buddy"}),!Z&&v.jsxs("div",{className:"mb-hud",children:[v.jsx("button",{className:"mb-chip buddy",onClick:()=>m(!0),children:e.name}),v.jsxs("div",{className:"mb-hud-right",children:[v.jsxs("span",{className:`mb-chip${x?" bump":""}`,"aria-label":n.starsLabel(e.stars),children:[v.jsx(cr,{}),e.stars]},x),v.jsx("button",{className:"mb-chip icon",onClick:Ae,"aria-label":g?n.soundOn:n.soundOff,"aria-pressed":g,children:v.jsx(oA,{on:g})}),v.jsx("button",{className:"mb-chip icon",onClick:Ge,"aria-label":n.langSwitch,children:e.lang==="en"?"ES":"EN"})]})]}),p&&v.jsx("div",{ref:s,className:"mb-bubble",role:"status",children:p.text},p.id),!Z&&!u&&v.jsx("div",{className:"mb-bar",children:l?v.jsxs("div",{className:"mb-tools",children:[v.jsx("span",{className:`mb-hint${W?"":" warn"}`,children:W?n.placeHint:n.noRoom}),v.jsxs("div",{className:"mb-tools-row",children:[v.jsx("button",{className:"mb-btn quiet small",onClick:()=>c(null),children:n.cancel}),v.jsx("button",{className:"mb-btn quiet small",onClick:N,children:n.turn}),v.jsxs("button",{className:"mb-btn small",onClick:z,disabled:!W,children:[v.jsx(Kx,{}),n.done]})]})]}):E?v.jsxs("div",{className:"mb-tools-row",children:[v.jsx("button",{className:"mb-btn quiet small",onClick:H,children:n.turn}),v.jsx("button",{className:"mb-btn quiet small",onClick:$,children:n.color}),v.jsx("button",{className:"mb-btn quiet small",onClick:()=>{a(null),c({type:E.type,rot:E.rot,color:E.color,moveId:E.id,x:E.x,z:E.z})},children:n.move}),v.jsx("button",{className:"mb-btn quiet small",onClick:ee,children:n.putAway}),v.jsx("button",{className:"mb-btn small",onClick:()=>a(null),children:n.done})]}):v.jsxs(v.Fragment,{children:[v.jsx("button",{className:"mb-btn",onClick:t,children:n.practice}),v.jsx("button",{className:"mb-btn secondary",onClick:K,children:n.treasures})]})}),u&&v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"mb-scrim",onClick:ne}),v.jsx(uA,{onClose:ne,onUnlock:j,onPlace:k=>G(k)})]}),Z&&v.jsx(dA,{initialName:e.name??"",initialKind:e.kind,onKind:k=>{oi(ce=>({...ce,kind:k}))},onDone:k=>{var ce;oi(te=>({...te,name:k})),m(!1),(ce=r.current)==null||ce.hop(),R("cheer"),A(`${k}!`)}})]})}function uA({onClose:t,onUnlock:e,onPlace:n}){const i=pa(),r=wc[i.lang],s=ue.useMemo(()=>new Set(i.room.map(a=>a.type)),[i.room]),o=Date.now();return v.jsxs("section",{className:"mb-sheet",role:"dialog","aria-label":r.treasuresTitle,children:[v.jsxs("div",{className:"mb-sheet-head",children:[v.jsx("h2",{children:r.treasuresTitle}),v.jsxs("span",{className:"mb-chip",children:[v.jsx(cr,{}),i.stars]}),v.jsx("button",{className:"mb-close",onClick:t,"aria-label":r.close,children:v.jsx(sA,{})})]}),v.jsx("div",{className:"mb-collect",children:ix.map(a=>{const l=i.unlocked.includes(a.type),c=s.has(a.type),u=i.stars>=a.stars,h=l&&o-(i.newSince[a.type]??0)<aA,d=!l&&!u,m=r.items[a.type],p=`mb-item${d?" locked":""}${h?" is-new":""}`;return v.jsxs("div",{className:p,children:[h?v.jsx("span",{className:"mb-tag",children:r.newTag}):a.rare?v.jsx("span",{className:"mb-tag rare",children:r.rareTag}):null,c&&v.jsx("span",{className:"mb-check","aria-label":r.inRoom,children:v.jsx(Kx,{})}),v.jsxs("div",{className:"art",children:[v.jsx("img",{src:iA(a.type),alt:""}),d&&v.jsx("span",{className:"mb-lock","aria-label":r.locked,children:v.jsx(rA,{})})]}),v.jsx("b",{children:m}),c?v.jsx("span",{className:"tab owned",children:r.inRoom}):l?v.jsx("button",{className:"tab place",onClick:()=>n(a.type),children:r.place}):u?v.jsxs("button",{className:"tab",onClick:()=>e(a.type),"aria-label":`${r.unlock} ${m}, ${r.starsLabel(a.stars)}`,children:[v.jsx(cr,{size:18}),a.stars," · ",r.unlock]}):v.jsxs("button",{className:"tab need",onClick:()=>e(a.type),"aria-label":`${m}, ${r.starsLabel(a.stars)}`,children:[v.jsx(cr,{size:18}),a.stars]})]},a.type)})})]})}function dA({initialName:t,initialKind:e,onKind:n,onDone:i}){const r=pa(),s=wc[r.lang],[o,a]=ue.useState(t),[l,c]=ue.useState(e),u=d=>{c(d),n(d),Ft("choice-tap")},h=d=>{d.preventDefault();const m=o.trim().slice(0,14);m&&i(m)};return v.jsx("div",{className:"mb-onboard",children:v.jsxs("form",{className:"mb-onboard-card",onSubmit:h,children:[v.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:-8},children:v.jsx("button",{type:"button",className:"mb-chip icon",onClick:()=>oi(d=>({...d,lang:d.lang==="en"?"es":"en"})),"aria-label":s.langSwitch,children:r.lang==="en"?"ES":"EN"})}),v.jsx("img",{className:"logo",src:"/logo-stacked.svg",alt:"Math Buddy"}),v.jsx("h2",{children:s.pickKind}),v.jsxs("div",{className:"mb-kinds",role:"group","aria-label":s.pickKind,children:[v.jsx("button",{type:"button",className:"mb-kind","aria-pressed":l==="boy",onClick:()=>u("boy"),children:s.boy}),v.jsx("button",{type:"button",className:"mb-kind","aria-pressed":l==="girl",onClick:()=>u("girl"),children:s.girl})]}),v.jsx("label",{htmlFor:"mb-buddy-name",children:v.jsx("h2",{children:s.nameAsk(l)})}),v.jsx("input",{id:"mb-buddy-name",className:"mb-name",value:o,maxLength:14,autoComplete:"off",autoCapitalize:"words",placeholder:s.namePlaceholder,onChange:d=>a(d.target.value)}),v.jsx("button",{type:"submit",className:"mb-btn",disabled:!o.trim(),children:s.start})]})})}function hA({onClick:t}){const e=pa(),n=wc[e.lang],[i,r]=ue.useState(0),s=ue.useRef(e.stars);return ue.useEffect(()=>{e.stars>s.current&&r(o=>o+1),s.current=e.stars},[e.stars]),v.jsxs("div",{className:"mb",style:{position:"fixed",left:16,bottom:"calc(env(safe-area-inset-bottom, 0px) + 16px)",zIndex:20,display:"flex",gap:8},children:[v.jsxs("button",{className:"mb-chip",onClick:t,"aria-label":n.backToRoom,children:[v.jsx("img",{src:"/mark-face.svg",alt:"",width:34,height:38,style:{margin:"-4px 0 -2px"}}),n.backToRoom]}),v.jsxs("span",{className:`mb-chip${i?" bump":""}`,"aria-label":n.starsLabel(e.stars),children:[v.jsx(cr,{}),e.stars]},i)]})}class fA{constructor(e,n,i=1){var o;this.canvas=e,this.facing=i,this.scene=new Kf,this.camera=new Tn(24,1,.1,50),this.mood="idle",this.moodAt=0,this.blinkAt=0,this.frame=0,this.reduceMotion=((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.look=1,this.loop=a=>{const l=a/1e3,c=this.buddy.body,u=this.buddy.root,h=(a-this.moodAt)/1e3,d=this.reduceMotion?.3:1,m=this.facing*(this.look>0?.55:.12);let p=m,S=0,g=0,f=Math.sin(l*2.2)*.015,x=1,_=1+Math.sin(l*2.2)*.012,M=0,R=Math.sin(l*.9)*.03,A=0;switch(this.mood){case"happy":case"thanks":{const W=this.mood==="thanks"?.9:.7,y=Math.min(1,h/W);f=Math.sin(y*Math.PI)*.45,x=1+Math.sin(y*Math.PI*2)*.07,_=1-Math.sin(y*Math.PI*2)*.07,M=this.reduceMotion?0:y*Math.PI*2,p=this.facing*.12,h>W+.4&&(this.mood="idle");break}case"curious":{const W=Math.min(1,h/.35);S=.16*W,R=.22*W+Math.sin(l*3)*.02,h>2.6&&(this.mood="idle");break}case"think":{R=-.16+Math.sin(l*1.4)*.05,A=.08,p=m*.8,h>2.2&&(this.mood="idle");break}case"oops":{const W=Math.min(1,h/1.1);_=1-Math.sin(Math.min(1,h/.25)*Math.PI)*.06,R=Math.sin(W*Math.PI*4)*.18*(1-W)*d,A=.12,p=this.facing*.12,h>1.8&&(this.mood="idle");break}}u.rotation.y+=(p+M-u.rotation.y)*(M?1:.12),!M&&Math.abs(u.rotation.y)>Math.PI&&(u.rotation.y=p),c.position.y=f*d,c.rotation.x+=(S-c.rotation.x)*.15,c.rotation.z+=(g-c.rotation.z)*.15,c.scale.set(x,_,1),this.head&&(this.head.rotation.z+=(R-this.head.rotation.z)*.2,this.head.rotation.x+=(A-this.head.rotation.x)*.2);const b=a-this.blinkAt,L=b>0&&b<140?.1:1;this.buddy.eyes.forEach(W=>W.scale.y=L),b>140&&(this.blinkAt=a+2200+Math.random()*2600),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop)},this.renderer=new Yf({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Uf,this.scene.add(new rp(16777215,15980984,1.6));const r=new sp(16773596,1.9);r.position.set(2,6,4),r.castShadow=!0,r.shadow.mapSize.set(512,512),Object.assign(r.shadow.camera,{left:-2,right:2,top:2,bottom:-2,near:.5,far:15}),r.shadow.radius=6,this.scene.add(r);const s=new Wt(new ep(1.2,40),new Z2({opacity:.18}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.buddy=Yx(n),this.scene.add(this.buddy.root),this.head=this.buddy.body.children.find(a=>a.type==="Group"&&a.position.y>.7)??null,this.camera.position.set(0,1.35,6.2),this.camera.lookAt(0,.82,0),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e.parentElement??e),this.resize(),this.frame=requestAnimationFrame(this.loop)}setKind(e){this.buddy.boyDetail.visible=e==="boy",this.buddy.girlDetail.visible=e==="girl"}react(e){this.mood=e,this.moodAt=performance.now()}lookAt(e){this.look=e}headPos(){const e=new U(0,1.32,0).applyMatrix4(this.buddy.root.matrixWorld).project(this.camera),n=this.canvas.getBoundingClientRect();return{x:(e.x+1)/2*n.width,y:(1-e.y)/2*n.height}}dispose(){cancelAnimationFrame(this.frame),this.resizeObs.disconnect(),this.renderer.dispose()}resize(){const e=this.canvas.parentElement??this.canvas,n=Math.max(1,e.clientWidth),i=Math.max(1,e.clientHeight);this.renderer.setSize(n,i,!1),this.camera.aspect=n/i;const r=6.2,s=.78,o=n/i,a=2*Math.atan(Math.tan(Math.atan(s/r))/o)*(180/Math.PI);this.camera.fov=o>1.1?17:Math.max(24,a);const l=r*Math.tan(this.camera.fov*Math.PI/360);this.camera.position.set(0,1.35,r),this.camera.lookAt(0,Math.max(.82,l*.5),0),this.camera.updateProjectionMatrix()}}const F0={en:[["one","ones"],["ten","tens"],["hundred","hundreds"]],es:[["unidad","unidades"],["decena","decenas"],["centena","centenas"]]},Vu=t=>t[0].toUpperCase()+t.slice(1),ot=t=>`<b>${t}</b>`;function oc(t){const e=r=>F0[t][r][1],n=r=>F0[t][r][0],i=t==="en";return{back:i?"My room":"Mi cuarto",next:i?"Next":"Siguiente",again:i?"Play again":"Otra vez",room:i?"My room":"Mi cuarto",fix:i?"Fix it":"Corregir",buddyAnswer:r=>i?`${r.name}'s answer`:`Respuesta de ${r.name}`,roundTitle:i?"Round complete!":"¡Ronda completa!",roundStars:r=>i?`You earned ${r} ${r===1?"star":"stars"}`:`Ganaste ${r} ${r===1?"estrella":"estrellas"}`,unlockedStep:r=>i?`New next time: ${oc(t).tag(r,{name:"",kind:"boy"})}!`:`¡Nuevo la próxima vez: ${oc(t).tag(r,{name:"",kind:"boy"})}!`,tag:(r,s)=>({blocks:i?"Blocks":"Bloques",discs:i?"Discs":"Fichas",pencil:i?"Pencil":"Lápiz",buddy:i?`${s.name}'s turn`:`Turno de ${s.name}`})[r],place:r=>Vu(e(r)),msg:(r,s)=>{const o=s.kind==="girl"?"she":"he";switch(r.k){case"startTake":return i?`Start with the ${e(r.p)}. Take away ${ot(r.n)}.`:`Empieza por las ${e(r.p)}. Quita ${ot(r.n)}.`;case"taking":return i?`Take away ${e(r.p)}: ${ot(r.done)} of ${ot(r.n)}`:`Quita ${e(r.p)}: ${ot(r.done)} de ${ot(r.n)}`;case"notEnough":return i?`Only ${ot(r.have)} ${r.have===1?n(r.p):e(r.p)}. Not enough to take away ${ot(r.need)}! Tap a ${n(r.p+1)} to break it.`:`Solo hay ${ot(r.have)} ${r.have===1?n(r.p):e(r.p)}. ¡No alcanza para quitar ${ot(r.need)}! Toca una ${n(r.p+1)} para romperla.`;case"breakFurther":return i?`No ${e(r.p)} to break! Tap a ${n(r.from)} first.`:`¡No hay ${e(r.p)} para romper! Toca primero una ${n(r.from)}.`;case"brokeAgain":return i?`Now tap a ${n(r.p)} to break it.`:`Ahora toca una ${n(r.p)} para romperla.`;case"broke":return i?`10 more ${e(r.p)}! Now there are ${ot(r.have)}. Take away ${ot(r.need)}.`:`¡10 ${e(r.p)} más! Ahora hay ${ot(r.have)}. Quita ${ot(r.need)}.`;case"left":return i?`How many ${e(r.p)} are left?`:`¿Cuántas ${e(r.p)} quedan?`;case"countLeft":return i?`Count the ${e(r.p)} that are left.`:`Cuenta las ${e(r.p)} que quedan.`;case"nextCol":return i?`Now the ${e(r.p)}. Take away ${ot(r.n)}.`:`Ahora las ${e(r.p)}. Quita ${ot(r.n)}.`;case"wCol":return`${Vu(e(r.p))}: ${ot(`${r.a} − ${r.b}`)}`;case"wLess":return i?`${ot(r.a)} is less than ${ot(r.b)}. Tap the ${e(r.from)} to borrow.`:`${ot(r.a)} es menor que ${ot(r.b)}. Toca las ${e(r.from)} para pedir prestado.`;case"wBorrowMore":return i?`Now borrow from the ${e(r.p)}.`:`Ahora pide prestado a las ${e(r.p)}.`;case"wAfter":return i?`Now it's ${ot(`${r.a} − ${r.b}`)}.`:`Ahora es ${ot(`${r.a} − ${r.b}`)}.`;case"tryAgain":return i?`Almost! Try ${ot(`${r.a} − ${r.b}`)} again.`:`¡Casi! Intenta ${ot(`${r.a} − ${r.b}`)} otra vez.`;case"done":return i?"You did it!":"¡Lo lograste!";case"buddyAsk":return i?`${s.name} tried this one. <b>Tap the number ${o} got wrong.</b>`:`${s.name} hizo esta. <b>Toca el número que tiene mal.</b>`;case"buddyTens":return i?"That one is wrong too, but start with the ones.":"Ese también está mal, pero empieza por las unidades.";case"buddyNope":return i?"That part is right. Look at the ones.":"Esa parte está bien. Mira las unidades.";case"buddyFound":return i?`Yes! ${Vu(o)} did ${ot(`${r.b} − ${r.a}`)} because it was easier. Help ${s.name} borrow.`:`¡Sí! Hizo ${ot(`${r.b} − ${r.a}`)} porque era más fácil. Ayuda a ${s.name} a pedir prestado.`;case"buddyThanks":return i?`${s.name} says thanks!`:`¡${s.name} te da las gracias!`}}}}const pA={en:oc("en"),es:oc("es")},va=t=>JSON.parse(JSON.stringify(t)),la=(t,e)=>String(t).padStart(e,"0").split("").reverse().map(Number),Cn=t=>t==="blocks"||t==="discs";function Gu(t,e,n){const i=String(e).length,r=la(e,i),s=la(n,i);let o=1;const a={mode:t,a:e,b:n,n:i,orig:r.slice(),top:r.slice(),bot:s,active:0,phase:t==="buddy"?"find":Cn(t)?"take":"answer",taken:Array(i).fill(0),ans:Array(i).fill(null),wrong:Array(i).fill(0),items:Cn(t)?r.map(l=>Array.from({length:l},()=>({id:o++}))):r.map(()=>[]),crossed:Array(i).fill(!1),source:-1,hintKey:-1,numbered:!1,picked:null,slips:0,msg:{k:"buddyAsk"},nextId:o};return a.msg=t==="buddy"?{k:"buddyAsk"}:Cn(t)?{k:"startTake",p:0,n:s[0]}:{k:"wCol",p:0,a:r[0],b:s[0]},Cn(t)&&Zx(a),a}function Zx(t){t.phase==="take"&&t.bot[t.active]===0&&(t.phase="answer",t.msg={k:"left",p:t.active})}function op(t,e){const n=t.active;if(e<=n||t.top[n]>=t.bot[n]||t.taken[n]>0)return!1;for(let i=n+1;i<e;i++)if(t.top[i]!==0)return!1;return t.top[e]>0}function Lh(t){for(let e=t.active+1;e<t.n;e++)if(t.top[e]>0)return e;return-1}function Jx(t){t.items.forEach(e=>e.forEach(n=>{delete n.fresh,delete n.k}))}function ap(t,e,n,i){const r=e-1;if(Cn(t.mode)){const o=t.items[e].filter(l=>!l.gone),a=n!==null&&o.find(l=>l.id===n)||o[o.length-1];t.items[e]=t.items[e].filter(l=>l!==a);for(let l=0;l<10;l++)t.items[r].push({id:t.nextId++,fresh:!0,k:l});i.push({t:"break",from:e,id:a?a.id:null})}t.top[e]-=1,t.top[r]+=10,t.crossed[e]=!0,t.crossed[r]=!0,t.source=-1,t.hintKey=-1,i.push({t:"sfx",name:e===2?"hundred-break":"ten-break"});const s=t.active;if(r!==s){t.source=r,t.msg=Cn(t.mode)?{k:"brokeAgain",p:r}:{k:"wBorrowMore",p:r},i.push({t:"buddy",mood:"curious",emote:"!"});return}i.push({t:"buddy",mood:"curious",emote:"!"},{t:"voice",name:"curious"}),t.msg=Cn(t.mode)?{k:"broke",p:s,have:t.top[s],need:t.bot[s]}:{k:"wAfter",p:s,a:t.top[s],b:t.bot[s]}}function mA(t,e,n){const i=va(t);Jx(i);const r=[];if(i.phase==="done"||!Cn(i.mode))return{s:t,fx:r};const s=i.active;if(e===s&&i.phase==="take"){if(i.top[s]<i.bot[s]){const a=Lh(i);return i.source=a,i.slips++,i.msg=a===s+1?{k:"notEnough",p:s,have:i.top[s],need:i.bot[s]}:{k:"breakFurther",p:s+1,from:a},r.push({t:"shake",target:"mat",p:e},{t:"buddy",mood:"curious",emote:"?"},{t:"voice",name:"hmm"},{t:"sfx",name:"cant-afford"}),{s:i,fx:r}}const o=i.items[e].find(a=>a.id===n);return!o||o.gone?{s:t,fx:r}:(o.gone=!0,i.taken[e]++,r.push({t:"sfx",name:"cross-out"}),i.taken[e]>=i.bot[e]?(i.phase="answer",i.msg={k:"left",p:e},r.push({t:"sfx",name:"column-done"})):i.msg={k:"taking",p:e,done:i.taken[e],n:i.bot[e]},{s:i,fx:r})}return e>s&&i.phase==="take"&&op(i,e)?(ap(i,e,n,r),{s:i,fx:r}):(r.push({t:"shake",target:"mat",p:e},{t:"sfx",name:"cant-place"}),e>s&&i.source>=0&&r.push({t:"buddy",mood:"think",emote:"dots"}),{s:i,fx:r})}function gA(t,e){const n=[];if(t.phase!=="answer"||Cn(t.mode))return{s:t,fx:n};const i=va(t);return op(i,e)?(ap(i,e,null,n),{s:i,fx:n}):(n.push({t:"shake",target:"top",p:e},{t:"sfx",name:"cant-place"}),{s:t,fx:n})}function O0(t,e){const n=[];if(t.phase!=="answer")return{s:t,fx:n};const i=va(t);Jx(i);const r=i.active;if(n.push({t:"sfx",name:"keypad-tap"}),i.top[r]<i.bot[r]){if(e===i.top[r]+10-i.bot[r]){let o;const a=[];for(;i.top[r]<i.bot[r]&&(o=Lh(i))>=0;)ap(i,o,null,a);return n.push(...a.filter(l=>l.t==="sfx")),z0(i,e,n)}i.wrong[r]++,i.slips++;const s=Lh(i);return i.source=s,i.msg={k:"wLess",p:r,a:i.top[r],b:i.bot[r],from:s},n.push({t:"shake",target:"slot",p:r},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"curious",emote:"?"},{t:"voice",name:"hmm"}),{s:i,fx:n}}return e===i.top[r]-i.bot[r]?z0(i,e,n):(i.wrong[r]++,i.slips++,n.push({t:"shake",target:"slot",p:r},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"dots"},{t:"voice",name:"hmm"}),Cn(i.mode)?(i.msg={k:"countLeft",p:r},i.wrong[r]>=2&&(i.numbered=!0)):(i.msg={k:"tryAgain",a:i.top[r],b:i.bot[r]},i.wrong[r]>=2&&(i.hintKey=i.top[r]-i.bot[r])),{s:i,fx:n})}function z0(t,e,n){const i=t.active;t.ans[i]=e,t.wrong[i]=0,t.hintKey=-1,t.numbered=!1,t.source=-1,n.push({t:"sfx",name:t.slips===0?"answer-correct":"answer-correct-retry"});const r=i+1,s=r===t.n-1&&t.top[r]===0&&t.bot[r]===0;if(r>=t.n||s){r<t.n&&(t.ans[r]=0),t.phase="done";const o=t.mode==="buddy";return t.msg=o?{k:"buddyThanks"}:{k:"done"},n.push({t:"buddy",mood:o?"thanks":"happy",emote:o?"heart":"star"},{t:"voice",name:o?"thanks":"happy"},{t:"sfx",name:"star-earn"},{t:"solved",firstTry:t.slips===0}),{s:t,fx:n}}return t.active=r,t.phase=Cn(t.mode)?"take":"answer",t.msg=Cn(t.mode)?{k:"nextCol",p:r,n:t.bot[r]}:{k:"wCol",p:r,a:t.top[r],b:t.bot[r]},Zx(t),n.push({t:"buddy",mood:"happy"}),{s:t,fx:n}}function Qx(t){return t.orig.map((e,n)=>Math.abs(e-t.bot[n]))}const vA=t=>la(t.a-t.b,t.n);function xA(t,e){const n=[];if(t.phase!=="find")return{s:t,fx:n};const i=va(t),r=Qx(i),s=vA(i),o=r.findIndex((a,l)=>a!==s[l]);return e===o?(i.picked=e,i.msg={k:"buddyFound",a:i.orig[e],b:i.bot[e]},n.push({t:"buddy",mood:"oops",emote:"drop"},{t:"voice",name:"oops"},{t:"sfx",name:"answer-correct"}),{s:i,fx:n}):(i.slips++,i.msg=r[e]!==s[e]?{k:"buddyTens"}:{k:"buddyNope"},n.push({t:"shake",target:"buddyDigit",p:e},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:r[e]!==s[e]?"dots":"?"}),{s:i,fx:n})}function _A(t){const e=va(t);return e.phase="answer",e.slips=0,e.msg={k:"wCol",p:0,a:e.top[0],b:e.bot[0]},{s:e,fx:[{t:"buddy",mood:"think",emote:"dots"}]}}const Zi=(t,e)=>t+Math.floor(Math.random()*(e-t+1));function yA(t,e){const n=String(t).length,i=la(t,n),r=la(e,n);return i.some((s,o)=>s<r[o])}function Dh(){for(;;){const t=Zi(3,9),e=Zi(1,t-1),n=Zi(2,9),i=Zi(0,n-1);if(!(t-1-e<1))return[t*10+i,e*10+n]}}function B0(t){for(let e=0;e<500;e++){const n=t?Zi(2,9)*100+Zi(0,9):Zi(200,999),i=Zi(101,n-100);if(!(t&&Math.floor(n/10)%10!==0)&&yA(n,i)&&!(Math.floor((n-i)/100)<1)&&!(t&&n%10>=i%10))return[n,i]}return[403,158]}function SA(){for(;;){const[t,e]=Dh();if(e%10-t%10!==5)return[t,e]}}const MA=5;function H0(t){const e=[],n=new Set;for(;e.length<MA;){const i=e.length;let r,s;t<=0?(r="blocks",s=Dh()):t===1?(r="discs",s=B0(i===3)):i===2?(r="buddy",s=SA()):(r="pencil",s=i===0?Dh():B0(i===4));const o=s.join("-");n.has(o)||(n.add(o),e.push({mode:r,a:s[0],b:s[1]}))}return e}const wA=2,EA=["blocks","discs","pencil"],bA=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function TA(){return v.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24","aria-hidden":"true",children:v.jsx("path",{d:"M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z",fill:"#F64034"})})}function AA(){return v.jsxs("svg",{width:"26",height:"30",viewBox:"0 0 20 24","aria-hidden":"true",children:[v.jsx("path",{d:"M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z",fill:"#70BCD6"}),v.jsx("ellipse",{cx:"7.5",cy:"15",rx:"1.6",ry:"2.4",fill:"#fff",opacity:".8"})]})}function CA({e:t}){switch(t){case"?":return v.jsx("span",{style:{color:"var(--cobalt)"},children:"?"});case"!":return v.jsx("span",{style:{color:"var(--tomato)"},children:"!"});case"heart":return v.jsx(TA,{});case"drop":return v.jsx(AA,{});case"dots":return v.jsx("span",{style:{color:"var(--ink-soft)",letterSpacing:2,fontSize:26},children:"•••"});case"star":return v.jsx(cr,{size:30})}}function RA(t,e){t&&(t.classList.remove(e),t.offsetWidth,t.classList.add(e))}function PA({onExit:t,onSolved:e}){var P;const n=pa(),i=pA[n.lang],r=ue.useMemo(()=>({name:bA(n.name||"Buddy"),kind:n.kind}),[n.name,n.kind]),s=Math.min(2,Math.max(0,((P=n.borrow)==null?void 0:P.level)??0)),[o,a]=ue.useState(()=>H0(s)),[l,c]=ue.useState(0),[u,h]=ue.useState(0),[d,m]=ue.useState(null),[p,S]=ue.useState(()=>Gu(o[0].mode,o[0].a,o[0].b)),g=ue.useRef(null),f=ue.useRef(null),x=ue.useRef(null),[_,M]=ue.useState(null),R=ue.useRef(0);ue.useEffect(()=>{if(!g.current)return;let D=null;try{D=new fA(g.current,n.kind,1)}catch{D=null}f.current=D;let q=0;const J=()=>{if(D&&x.current){const se=D.headPos();x.current.style.left=`${se.x}px`,x.current.style.top=`${se.y}px`}q=requestAnimationFrame(J)};return q=requestAnimationFrame(J),di(`buddy${n.kind}-hello`),()=>{cancelAnimationFrame(q),D==null||D.dispose(),f.current=null}},[]),ue.useEffect(()=>{var D;return(D=f.current)==null?void 0:D.setKind(n.kind)},[n.kind]),ue.useEffect(()=>()=>clearTimeout(R.current),[]);const A=ue.useCallback(D=>{M(D),clearTimeout(R.current),R.current=window.setTimeout(()=>M(null),1600)},[]),b=ue.useRef(null),L=ue.useRef(null),W=ue.useRef(null),y=ue.useRef({shakes:[],breakRect:null}),[E,V]=ue.useState(0),H=ue.useCallback(()=>{var he,C;const D=(he=W.current)==null?void 0:he.getBoundingClientRect(),q=(C=L.current)==null?void 0:C.getBoundingClientRect();if(!D||!q)return;const J=document.createElement("div");J.className="bp-flystar",J.innerHTML='<svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#FBC426" stroke="#D99A0F" stroke-width="1.6" stroke-linejoin="round"/></svg>';const se=D.left+D.width/2-22,ve=D.top+D.height/2-22;J.style.left=`${se}px`,J.style.top=`${ve}px`,document.body.appendChild(J),requestAnimationFrame(()=>requestAnimationFrame(()=>{J.style.transform=`translate(${q.left+12-se}px, ${q.top+2-ve}px) scale(.6)`,J.style.opacity="0"})),window.setTimeout(()=>{J.remove(),yl(1),V(w=>w+1)},820)},[]),$=ue.useCallback(D=>{var q,J;for(const se of D.fx)switch(se.t){case"sfx":Ft(se.name);break;case"voice":di(`buddy${n.kind}-${se.name}`);break;case"buddy":(q=f.current)==null||q.react(se.mood),se.emote&&A(se.emote);break;case"shake":y.current.shakes.push(se);break;case"break":{const ve=se.id!==null?(J=b.current)==null?void 0:J.querySelector(`[data-id="${se.id}"]`):null;y.current.breakRect=ve?ve.getBoundingClientRect():null;break}case"solved":h(ve=>ve+1),e==null||e(se.firstTry),H();break}D.s===p?ee():S(D.s)},[p,n.kind,A,H,e]);function ee(){const D=b.current;if(D){for(const q of y.current.shakes){if(q.t!=="shake")continue;const J={mat:`.bp-mat[data-p="${q.p}"]`,slot:".bp-slot.active",top:`[data-top="${q.p}"]`,buddyDigit:`[data-buddy="${q.p}"]`}[q.target];RA(D.querySelector(J),"bp-shake")}y.current.shakes=[]}}ue.useLayoutEffect(()=>{const D=y.current.breakRect,q=b.current;q&&q.querySelectorAll(".bp-it.fresh").forEach(J=>{const se=Number(J.dataset.k||0);if(!D){J.classList.remove("fresh");return}const ve=J.getBoundingClientRect(),he=D.left+D.width/2,w=D.height>D.width*3?D.top+(se+.5)*(D.height/10):D.top+D.height/2;J.style.setProperty("--fx",`${he-(ve.left+ve.width/2)}px`),J.style.setProperty("--fy",`${w-(ve.top+ve.height/2)}px`),J.style.setProperty("--dl",`${se*.035}s`)}),y.current.breakRect=null,ee()},[p]);const G=ue.useCallback(()=>{var q,J;if(Ft("sheet-close"),l+1<o.length){const se=o[l+1];c(l+1),S(Gu(se.mode,se.a,se.b)),(q=f.current)==null||q.react("idle");return}let D=null;oi(se=>{const ve=se.borrow??{level:0,rounds:0};let he=ve.level,C=ve.rounds+1;return C>=wA&&he<2&&(he+=1,C=0,D=EA[he]),{...se,borrow:{level:he,rounds:C}}}),m({unlocked:D}),Ft("round-complete"),di(`buddy${n.kind}-cheer`),(J=f.current)==null||J.react("happy"),A("star")},[l,o,n.kind,A]),z=ue.useCallback(()=>{var J;const D=Math.min(2,Math.max(0,((J=n.borrow)==null?void 0:J.level)??0)),q=H0(D);a(q),c(0),h(0),m(null),S(Gu(q[0].mode,q[0].a,q[0].b))},[n.borrow]);ue.useEffect(()=>{const D=q=>{d||(/^[0-9]$/.test(q.key)?$(O0(p,Number(q.key))):q.key==="Enter"&&p.phase==="done"&&G())};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[p,$,G,d]);const N=p.n,j=Cn(p.mode),K=p.mode==="pencil"||p.mode==="buddy",ne=D=>N-D+1,Ae=p.mode==="blocks"?N===2?["1.5fr","1fr"]:["1.2fr","1.5fr","1fr"]:Array(N).fill("1fr"),Ge=p.mode==="buddy"&&(p.phase==="find"||p.picked!==null),Z=Ge?2:1,k=Z+1,ce=Z+2,te=Z+3,Ce=Z+4,Pe=j?Ce:te,Ie=Array.from({length:N},(D,q)=>N-1-q),Oe=Qx(p),oe=p.phase==="take"||p.phase==="answer";return v.jsxs("div",{className:"mb bp",children:[v.jsxs("header",{className:"bp-hud",children:[v.jsxs("button",{className:"mb-chip",onClick:t,"aria-label":i.back,children:[v.jsx("img",{src:"/mark-face.svg",alt:"",width:34,height:38,style:{margin:"-4px 0 -2px"}}),v.jsx("span",{className:"label",children:i.back})]}),v.jsx("div",{className:"bp-dots","aria-label":`${l+1} / ${o.length}`,children:o.map((D,q)=>v.jsx("span",{className:`bp-dot ${q<l||q===l&&p.phase==="done"?"done":q===l?"now":""}`},q))}),v.jsxs("span",{ref:L,className:`mb-chip${E?" bump":""}`,children:[v.jsx(cr,{}),n.stars]},E)]}),v.jsxs("main",{className:"bp-stage",children:[v.jsxs("div",{className:"bp-buddy",children:[v.jsx("canvas",{ref:g,"aria-hidden":"true"}),v.jsx("div",{ref:x,className:`bp-emote${_?" on":""}`,children:_&&v.jsx(CA,{e:_})})]}),v.jsxs("section",{className:"bp-card",ref:W,children:[v.jsxs("div",{className:"bp-task","aria-live":"polite",children:[v.jsx("span",{className:"tag",children:i.tag(p.mode,r)}),v.jsx("span",{dangerouslySetInnerHTML:{__html:i.msg(p.msg,r)}})]},JSON.stringify(p.msg)+n.lang),v.jsx("div",{className:"bp-work",children:v.jsxs("div",{ref:b,className:"bp-sheet",style:{gridTemplateColumns:`calc(var(--digit) * .7) ${Ae.join(" ")}`,gridTemplateRows:`repeat(${Pe}, auto)`},children:[oe&&v.jsx("div",{className:"bp-band",style:{gridRow:`${Z} / -1`,gridColumn:ne(p.active)}}),Ge&&v.jsxs("div",{className:"bp-paper",style:{gridRow:1,gridColumn:"1 / -1"},children:[v.jsx("img",{src:"/mark-face.svg",width:26,height:29,alt:""}),v.jsx("span",{dangerouslySetInnerHTML:{__html:`${i.buddyAnswer(r)}:`}}),v.jsxs("span",{className:"bp-marker",style:{fontSize:26},children:[p.a," − ",p.b," = ",Number(Oe.slice().reverse().join(""))]})]}),Ie.map(D=>{const q=p.crossed[D]?v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"old",children:p.orig[D]}),v.jsx("span",{className:"new",children:p.top[D]})]}):v.jsx(v.Fragment,{children:p.orig[D]}),J=K&&p.source===D,se={gridRow:Z,gridColumn:ne(D)};return K&&p.phase==="answer"?v.jsx("div",{className:"bp-cell top",style:se,children:v.jsx("button",{className:`bp-digit${op(p,D)?" can":""}${J?" glow":""}`,"data-top":D,onClick:()=>$(gA(p,D)),children:q})},`t${D}`):v.jsx("div",{className:"bp-cell top",style:se,children:v.jsx("span",{className:"bp-digit","data-top":D,children:q})},`t${D}`)}),v.jsx("div",{className:"bp-cell sign",style:{gridRow:k,gridColumn:1},children:"−"}),Ie.map(D=>v.jsx("div",{className:"bp-cell",style:{gridRow:k,gridColumn:ne(D)},children:v.jsx("span",{className:"bp-digit",children:p.bot[D]})},`b${D}`)),v.jsx("div",{className:"bp-rule",style:{gridRow:ce,gridColumn:"1 / -1"}}),Ie.map(D=>{const q={gridRow:te,gridColumn:ne(D)};if(p.phase==="find")return v.jsx("div",{className:"bp-cell",style:q,children:v.jsx("button",{className:`bp-digit bp-marker${p.picked===D?" picked":""}`,"data-buddy":D,style:{minWidth:"calc(var(--digit) * .82)"},onClick:()=>$(xA(p,D)),children:Oe[D]})},`a${D}`);const J=p.ans[D]!==null,se=D===p.active&&p.phase==="answer";return v.jsx("div",{className:"bp-cell",style:q,children:v.jsx("div",{className:`bp-slot ${J?"filled":se?"active":"empty"}`,children:J?p.ans[D]:""})},`a${D}`)}),j&&Ie.map(D=>{const q=p.mode==="discs"?"discs":D===0?"cubes":"rods",J=p.mode==="discs"?"disc":D===0?"cube":"rod",se=p.mode==="discs"?[1,10,100][D]:"";let ve=0;return v.jsxs("div",{className:`bp-mat p${D}${p.source===D?" source":""}`,"data-p":D,style:{gridRow:Ce,gridColumn:ne(D)},children:[D===p.active&&p.phase==="take"&&p.taken[D]>0&&v.jsxs("span",{className:"bp-counter",children:["−",p.taken[D]]}),v.jsx("span",{className:"head",children:i.place(D)}),v.jsx("div",{className:`bp-pile ${q}`,children:p.items[D].map(he=>{const C=p.numbered&&D===p.active&&!he.gone;return v.jsx("button",{className:`bp-it ${J}${he.gone?" gone":""}${he.fresh?" fresh":""}`,"data-id":he.id,"data-k":he.k??"","aria-label":i.place(D),onClick:()=>$(mA(p,D,he.id)),children:C?v.jsx("span",{className:"num",children:++ve}):se},he.id)})})]},`m${D}`)})]})}),v.jsx("div",{children:p.phase==="done"?v.jsxs("div",{className:"bp-next",children:[v.jsxs("span",{className:"bp-result",children:[p.a," − ",p.b," = ",p.a-p.b]}),v.jsxs("button",{className:"mb-btn",onClick:G,children:[i.next," →"]})]}):p.phase==="find"?v.jsx("div",{className:"bp-next",children:p.picked!==null&&v.jsx("button",{className:"mb-btn secondary",onClick:()=>$(_A(p)),children:i.fix})}):v.jsx("div",{className:`bp-pad${p.phase!=="answer"?" off":""}`,children:[1,2,3,4,5,6,7,8,9,0].map(D=>v.jsx("button",{className:`bp-key${p.hintKey===D?" hinted":""}`,onClick:()=>$(O0(p,D)),children:D},D))})})]})]}),d&&v.jsx("div",{className:"bp-overlay",children:v.jsxs("div",{className:"bp-done",role:"dialog","aria-modal":"true",children:[v.jsx("h2",{children:i.roundTitle}),v.jsx("div",{className:"bp-done-stars",children:Array.from({length:Math.min(u,8)},(D,q)=>v.jsx("span",{style:{animationDelay:`${q*.12}s`},children:v.jsx(cr,{size:40})},q))}),v.jsx("p",{children:i.roundStars(u)}),d.unlocked&&v.jsx("div",{className:"unlock",children:i.unlockedStep(d.unlocked)}),v.jsxs("div",{className:"row",children:[v.jsx("button",{className:"mb-btn quiet",onClick:z,children:i.again}),v.jsx("button",{className:"mb-btn",onClick:t,children:i.room})]})]})})]})}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Bt=(t,e)=>{const n=ue.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>ue.createElement("svg",{ref:u,...NA,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${LA(t)}`,a].join(" "),...c},[...e.map(([h,d])=>ue.createElement(h,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=Bt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=Bt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=Bt("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=Bt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=Bt("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=Bt("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=Bt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=Bt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=Bt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=Bt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=Bt("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=Bt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=Bt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=Bt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=Bt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=Bt("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=Bt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=Bt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function VA({onSelect:t}){return v.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-8",children:v.jsxs("div",{className:"text-center max-w-4xl w-full",children:[v.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 font-['Permanent_Marker'] text-gray-800",style:{textShadow:"3px 3px 0 rgba(255, 255, 255, 0.8)"},children:"How would you like to practice today?"}),v.jsxs("div",{className:"grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16",children:[v.jsx("button",{onClick:()=>t("free"),className:"group relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-blue-200 hover:border-blue-400",children:v.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[v.jsx("div",{className:"w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300",children:v.jsx(DA,{className:"w-12 h-12 sm:w-16 sm:h-16 text-white",strokeWidth:2.5})}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-3xl sm:text-4xl font-['Permanent_Marker'] text-gray-800 mb-3",children:"Free Practice"}),v.jsx("p",{className:"text-xl sm:text-2xl text-gray-600 font-medium",children:"Practice as much as you want"})]})]})}),v.jsx("button",{onClick:()=>t("challenge"),className:"group relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-200 hover:border-yellow-400",children:v.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[v.jsx("div",{className:"w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300",children:v.jsx(lp,{className:"w-12 h-12 sm:w-16 sm:h-16 text-white",strokeWidth:2.5})}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-3xl sm:text-4xl font-['Permanent_Marker'] text-gray-800 mb-3",children:"Challenge"}),v.jsx("p",{className:"text-xl sm:text-2xl text-gray-600 font-medium",children:"Complete a set of problems"})]})]})})]})]})})}function GA({onSelect:t}){const e=()=>{t({totalProblems:5,difficultySequence:["easy","easy","easy","easy","easy"]})},n=()=>{t({totalProblems:10,difficultySequence:["easy","easy","easy","easy","easy","medium","medium","medium","medium","medium"]})},i=()=>{t({totalProblems:15,difficultySequence:["easy","easy","easy","easy","easy","medium","medium","medium","medium","medium","hard","hard","hard","hard","hard"]})};return v.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-8",children:v.jsxs("div",{className:"text-center max-w-5xl w-full",children:[v.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 font-['Permanent_Marker'] text-gray-800",style:{textShadow:"3px 3px 0 rgba(255, 255, 255, 0.8)"},children:"Choose Your Challenge"}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16",children:[v.jsx("button",{onClick:e,className:"group relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-green-200 hover:border-green-400",children:v.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[v.jsx("div",{className:"w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300",children:v.jsx(Uh,{className:"w-10 h-10 sm:w-12 sm:h-12 text-white",strokeWidth:2.5})}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-2xl sm:text-3xl font-['Permanent_Marker'] text-gray-800 mb-3",children:"Easy Challenge"}),v.jsx("p",{className:"text-lg sm:text-xl text-gray-600 font-medium",children:"5 easy problems"})]})]})}),v.jsx("button",{onClick:n,className:"group relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-blue-200 hover:border-blue-400",children:v.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[v.jsx("div",{className:"w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300",children:v.jsx(r_,{className:"w-10 h-10 sm:w-12 sm:h-12 text-white",strokeWidth:2.5})}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-2xl sm:text-3xl font-['Permanent_Marker'] text-gray-800 mb-3",children:"Mixed Challenge"}),v.jsx("p",{className:"text-lg sm:text-xl text-gray-600 font-medium",children:"5 easy + 5 medium"})]})]})}),v.jsx("button",{onClick:i,className:"group relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-purple-200 hover:border-purple-400",children:v.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[v.jsx("div",{className:"w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300",children:v.jsx(Ih,{className:"w-10 h-10 sm:w-12 sm:h-12 text-white",strokeWidth:2.5})}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-2xl sm:text-3xl font-['Permanent_Marker'] text-gray-800 mb-3",children:"Big Challenge"}),v.jsx("p",{className:"text-lg sm:text-xl text-gray-600 font-medium",children:"5 easy + 5 medium + 5 hard"})]})]})})]})]})})}function jA({onSelect:t}){const e=n=>{n==="multiplication"&&di("mulwelcome"),t(n)};return v.jsxs("div",{className:"flex flex-col items-center justify-center gap-8 p-8",children:[v.jsx("h1",{className:"text-4xl font-bold text-blue-600 mb-4",children:"Choose Your Math Adventure!"}),v.jsxs("div",{className:"flex gap-6 flex-wrap justify-center",children:[v.jsxs("button",{onClick:()=>e("subtraction"),className:"flex flex-col items-center gap-4 bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-64 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(kA,{size:64,className:"text-orange-600",strokeWidth:3})}),v.jsx("span",{className:"text-3xl font-bold",children:"Subtraction"}),v.jsx("span",{className:"text-lg",children:"Take Away!"})]}),v.jsxs("button",{onClick:()=>e("multiplication"),className:"flex flex-col items-center gap-4 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-64 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(HA,{size:64,className:"text-green-600",strokeWidth:3})}),v.jsx("span",{className:"text-3xl font-bold",children:"Multiplication"}),v.jsx("span",{className:"text-lg",children:"Times Fun!"})]})]})]})}function WA({mathType:t,onSelect:e,onTimesTablesSelect:n,onBack:i}){const r=t==="subtraction";return v.jsxs("div",{className:"flex flex-col items-center justify-center gap-8 p-8",children:[v.jsx("h1",{className:"text-4xl font-bold text-blue-600 mb-4",children:"Choose Your Level!"}),v.jsx("div",{className:"flex gap-6 flex-wrap justify-center",children:r?v.jsxs(v.Fragment,{children:[v.jsxs("button",{onClick:()=>e("easy"),className:"flex flex-col items-center gap-4 bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(Uh,{size:56,className:"text-yellow-600",fill:"currentColor"})}),v.jsx("span",{className:"text-3xl font-bold",children:"Easy"}),v.jsxs("span",{className:"text-lg text-center",children:["2-digit numbers",v.jsx("br",{}),"No borrowing needed"]})]}),v.jsxs("button",{onClick:()=>e("medium"),className:"flex flex-col items-center gap-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(t_,{size:56,className:"text-blue-600"})}),v.jsx("span",{className:"text-3xl font-bold",children:"Medium"}),v.jsxs("span",{className:"text-lg text-center",children:["2-3 digit numbers",v.jsx("br",{}),"Some borrowing"]})]}),v.jsxs("button",{onClick:()=>e("hard"),className:"flex flex-col items-center gap-4 bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(Ih,{size:56,className:"text-red-600"})}),v.jsx("span",{className:"text-3xl font-bold",children:"Hard"}),v.jsxs("span",{className:"text-lg text-center",children:["3-4 digit numbers",v.jsx("br",{}),"Borrowing required"]})]})]}):v.jsxs(v.Fragment,{children:[v.jsxs("button",{onClick:()=>e("single-digit"),className:"flex flex-col items-center gap-4 bg-gradient-to-br from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(Uh,{size:56,className:"text-teal-600",fill:"currentColor"})}),v.jsx("span",{className:"text-3xl font-bold",children:"Basic Facts"}),v.jsxs("span",{className:"text-lg text-center",children:["Single digit",v.jsx("br",{}),"× Single digit"]}),v.jsx("span",{className:"text-sm opacity-90",children:"(e.g., 7 × 8)"})]}),v.jsxs("button",{onClick:()=>e("single-double"),className:"flex flex-col items-center gap-4 bg-gradient-to-br from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(Ih,{size:56,className:"text-pink-600"})}),v.jsx("span",{className:"text-3xl font-bold",children:"Challenge"}),v.jsxs("span",{className:"text-lg text-center",children:["Single digit",v.jsx("br",{}),"× Double digit"]}),v.jsx("span",{className:"text-sm opacity-90",children:"(e.g., 6 × 23)"})]}),n&&v.jsxs("button",{onClick:n,className:"flex flex-col items-center gap-4 bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center",children:[v.jsx("div",{className:"bg-white rounded-full p-6",children:v.jsx(UA,{size:56,className:"text-orange-600"})}),v.jsx("span",{className:"text-3xl font-bold",children:"Times Tables"}),v.jsxs("span",{className:"text-lg text-center",children:["Master your",v.jsx("br",{}),"multiplication tables"]}),v.jsx("span",{className:"text-sm opacity-90",children:"(e.g., 7 × 4)"})]})]})}),v.jsx("button",{onClick:i,className:"mt-8 px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-2xl text-xl font-semibold shadow-lg transition-all",children:"← Back"})]})}function $A({problem:t,studentAnswer:e,onAnswerChange:n,onSubmit:i,onBack:r}){const[s,o]=ue.useState(Nf()),a=h=>{n(e+h)},l=()=>{n(e.slice(0,-1))},c=()=>{const h=!s;o(h),Lf(h)},u=Math.max(t.num1.toString().length,t.num2.toString().length);return v.jsx("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto",children:v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-12 w-full",children:[v.jsxs("div",{className:"flex justify-between items-center mb-8",children:[v.jsx("button",{onClick:r,className:"px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl text-lg font-semibold transition-all",children:"← Back"}),v.jsxs("button",{onClick:c,className:`flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold transition-all ${s?"bg-green-500 hover:bg-green-600 text-white":"bg-gray-300 hover:bg-gray-400 text-gray-700"}`,children:[s?v.jsx(n_,{size:24}):v.jsx(i_,{size:24}),v.jsxs("span",{children:["Sound ",s?"On":"Off"]})]})]}),v.jsxs("div",{className:"flex flex-col items-end gap-2 mb-8 font-mono text-5xl font-bold",children:[v.jsx("div",{className:"text-right",style:{minWidth:`${u+2}ch`},children:t.num1}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-4xl",children:t.type==="subtraction"?"−":"×"}),v.jsx("div",{className:"text-right",style:{minWidth:`${u}ch`},children:t.num2})]}),v.jsx("div",{className:"border-t-4 border-gray-800 w-full my-2"}),v.jsx("div",{className:"text-right bg-yellow-100 px-4 py-2 rounded-lg min-h-[4rem] flex items-center justify-end",style:{minWidth:`${u+2}ch`},children:e||v.jsx("span",{className:"text-gray-400",children:"?"})})]}),v.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[[1,2,3,4,5,6,7,8,9].map(h=>v.jsx("button",{onClick:()=>a(h.toString()),className:"bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all",children:h},h)),v.jsx("button",{onClick:l,className:"bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all flex items-center justify-center",children:v.jsx(e_,{size:32})}),v.jsx("button",{onClick:()=>a("0"),className:"bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all",children:"0"}),v.jsx("button",{onClick:i,disabled:!e,className:"bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-2xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",children:"✓"})]})]})})}function XA({problem:t}){const e=t.num1.toString(),n=t.num2.toString().padStart(e.length,"0"),i=t.correctAnswer.toString().padStart(e.length,"0"),r=[];let s=Array(e.length).fill(!1),o=e.split("").map(Number);for(let a=e.length-1;a>=0;a--){const l=o[a],c=parseInt(n[a]);if(l<c&&a>0){s[a]=!0;let d=a-1;for(;d>=0&&o[d]===0;)o[d]=9,d--;d>=0&&(o[d]--,o[a]+=10);const m=["ones","tens","hundreds","thousands"],p=m[e.length-1-(a-1)]||"next place",S=m[e.length-1-a]||"this place";r.push(`We need to borrow from the ${p} to the ${S}. Now we have ${o[a]} in the ${S}.`)}const u=o[a]-c,h=["ones","tens","hundreds","thousands"][e.length-1-a]||"place";r.push(`${o[a]} minus ${c} in the ${h} equals ${u}.`)}return v.jsxs("div",{className:"bg-blue-50 rounded-2xl p-8",children:[v.jsx("h3",{className:"text-2xl font-bold text-blue-800 mb-6",children:"Step-by-Step Solution:"}),v.jsxs("div",{className:"bg-white rounded-xl p-6 mb-6 font-mono text-3xl",children:[v.jsx("div",{className:"flex justify-end gap-8 mb-2",children:s.map((a,l)=>v.jsx("div",{className:"w-12 text-center",children:a&&v.jsx("span",{className:"text-red-500 text-xl",children:"↓"})},l))}),v.jsx("div",{className:"flex justify-end gap-8",children:o.map((a,l)=>v.jsx("div",{className:"w-12 text-center",children:s[l]?v.jsx("span",{className:"text-red-600 font-bold",children:a}):v.jsx("span",{children:e[l]})},l))}),v.jsxs("div",{className:"flex justify-end gap-8 items-center",children:[v.jsx("span",{className:"text-2xl",children:"−"}),n.split("").map((a,l)=>v.jsx("div",{className:"w-12 text-center",children:a},l))]}),v.jsx("div",{className:"border-t-4 border-gray-800 my-2"}),v.jsx("div",{className:"flex justify-end gap-8",children:i.split("").map((a,l)=>v.jsx("div",{className:"w-12 text-center text-green-600 font-bold",children:a},l))})]}),v.jsx("div",{className:"space-y-4",children:r.map((a,l)=>v.jsxs("div",{className:"bg-yellow-100 rounded-lg p-4 text-lg",children:[v.jsxs("span",{className:"font-bold text-orange-600",children:["Step ",l+1,":"]})," ",a]},l))}),v.jsx("div",{className:"mt-6 p-4 bg-green-100 rounded-lg",children:v.jsxs("p",{className:"text-lg text-green-800",children:[v.jsx("strong",{children:"Remember:"})," When we don't have enough in one place, we borrow 10 from the next place!"]})})]})}function qA({problem:t}){const{num1:e,num2:n,correctAnswer:i}=t,r=[];for(let a=1;a<=Math.min(e,5);a++)r.push(n*a);const s=n.toString(),o=[];if(s.length>1)for(let a=s.length-1;a>=0;a--){const l=parseInt(s[a]),c=Math.pow(10,s.length-1-a),u=e*l*c;o.push({digit:l,place:c,product:u,description:c===1?"ones":c===10?"tens":"hundreds"})}return v.jsxs("div",{className:"bg-purple-50 rounded-2xl p-8 space-y-6",children:[v.jsx("h3",{className:"text-2xl font-bold text-purple-800 mb-6",children:"Let's Solve This Together!"}),v.jsxs("div",{className:"bg-white rounded-xl p-6",children:[v.jsx("h4",{className:"text-xl font-bold text-purple-700 mb-4",children:"Method 1: Repeated Addition"}),v.jsxs("p",{className:"text-lg mb-4",children:[e," × ",n,' means "',n," added together ",e,' times"']}),v.jsxs("div",{className:"space-y-2 text-lg",children:[r.map((a,l)=>v.jsx("div",{className:"flex items-center gap-3",children:v.jsxs("span",{className:"font-mono",children:[Array(l+1).fill(n).join(" + ")," = ",a]})},l)),e>5&&v.jsxs("div",{className:"text-gray-600 italic",children:["... continue adding ",n," until we've added it ",e," times"]}),v.jsxs("div",{className:"pt-2 border-t-2 border-purple-300 font-bold text-green-600",children:["Final answer: ",i]})]})]}),o.length>0&&v.jsxs("div",{className:"bg-white rounded-xl p-6",children:[v.jsx("h4",{className:"text-xl font-bold text-purple-700 mb-4",children:"Method 2: Break It Down"}),v.jsxs("div",{className:"font-mono text-2xl mb-4",children:[v.jsx("div",{className:"flex justify-end gap-4 mb-2",children:v.jsx("span",{className:"w-32 text-right",children:e})}),v.jsxs("div",{className:"flex justify-end gap-4 items-center",children:[v.jsx("span",{className:"text-xl",children:"×"}),v.jsx("span",{className:"w-32 text-right",children:n})]}),v.jsx("div",{className:"border-t-2 border-gray-800 my-2"}),o.slice().reverse().map((a,l)=>v.jsxs("div",{className:"flex justify-end gap-4 text-blue-600",children:[v.jsx("span",{className:"w-32 text-right",children:a.product}),v.jsxs("span",{className:"text-sm text-gray-600 w-24",children:["(",e," × ",a.digit," ",a.description,")"]})]},l)),o.length>1&&v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"border-t-2 border-gray-800 my-2"}),v.jsx("div",{className:"flex justify-end gap-4 text-green-600 font-bold",children:v.jsx("span",{className:"w-32 text-right",children:i})})]})]}),v.jsxs("div",{className:"space-y-2 mt-4",children:[o.slice().reverse().map((a,l)=>v.jsxs("div",{className:"bg-yellow-100 rounded-lg p-3 text-lg",children:[v.jsxs("span",{className:"font-bold text-orange-600",children:["Step ",l+1,":"]})," ",e," × ",a.digit," (in the ",a.description," place) = ",a.product]},l)),o.length>1&&v.jsxs("div",{className:"bg-yellow-100 rounded-lg p-3 text-lg",children:[v.jsx("span",{className:"font-bold text-orange-600",children:"Final Step:"})," Add them together: ",o.map(a=>a.product).join(" + ")," = ",i]},"add")]})]}),v.jsx("div",{className:"bg-green-100 rounded-lg p-4",children:v.jsxs("p",{className:"text-lg text-green-800",children:[v.jsx("strong",{children:"Remember:"})," Multiplication is like adding the same number many times!"]})})]})}const G0=["Amazing work!","You're a math superstar!","Fantastic!","Incredible job!","You're on fire!","Brilliant!","Outstanding!","You got it!","Perfect!","Excellent thinking!"];function YA(t,e){const n=t.toString(),i=e.toString().padStart(n.length,"0");for(let r=n.length-1;r>=0;r--)if(parseInt(n[r])<parseInt(i[r]))return!0;return!1}function KA({isCorrect:t,problem:e,studentAnswer:n,onNext:i,onTryAgain:r}){return ue.useEffect(()=>{if(t)Ft("answer-correct"),di("correct");else{Ft("answer-wrong");const s=e.type==="subtraction"&&YA(e.num1,e.num2);di(s?"borrow":"tryagain")}},[t,e]),t?v.jsx("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto",children:v.jsxs("div",{className:"bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl p-12 w-full text-white text-center",children:[v.jsx("div",{className:"flex justify-center mb-6",children:v.jsx(t_,{size:80,className:"animate-bounce",fill:"currentColor"})}),v.jsx("h2",{className:"text-5xl font-bold mb-4",children:G0[Math.floor(Math.random()*G0.length)]}),v.jsxs("p",{className:"text-3xl mb-8",children:[e.displayText," = ",e.correctAnswer]}),v.jsxs("button",{onClick:i,className:"bg-white text-green-600 text-2xl font-bold px-12 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 mx-auto",children:["Next Problem",v.jsx(V0,{size:32})]})]})}):v.jsx("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-4xl mx-auto",children:v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-12 w-full",children:[v.jsxs("div",{className:"text-center mb-8",children:[v.jsx("h2",{className:"text-4xl font-bold text-orange-600 mb-4",children:"Let's Learn Together!"}),v.jsxs("p",{className:"text-2xl text-gray-700 mb-2",children:["You answered: ",v.jsx("span",{className:"font-bold text-red-600",children:n})]}),v.jsxs("p",{className:"text-2xl text-gray-700",children:["The correct answer is: ",v.jsx("span",{className:"font-bold text-green-600",children:e.correctAnswer})]})]}),e.type==="subtraction"?v.jsx(XA,{problem:e}):v.jsx(qA,{problem:e}),v.jsxs("div",{className:"flex gap-4 justify-center mt-8",children:[v.jsxs("button",{onClick:r,className:"bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-2",children:[v.jsx(OA,{size:24}),"Try Again"]}),v.jsxs("button",{onClick:i,className:"bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-2",children:["Next Problem",v.jsx(V0,{size:24})]})]})]})})}function ZA({totalProblems:t,correctAnswers:e,currentStreak:n}){const i=t>0?Math.round(e/t*100):0;return v.jsxs("div",{className:"fixed bottom-4 right-4 bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 z-10 max-w-[calc(100vw-2rem)]",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(zA,{className:"text-blue-600 flex-shrink-0",size:20}),v.jsxs("div",{children:[v.jsx("div",{className:"text-xs text-gray-600",children:"Problems"}),v.jsx("div",{className:"text-base sm:text-lg font-bold",children:t})]})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(lp,{className:"text-green-600 flex-shrink-0",size:20}),v.jsxs("div",{children:[v.jsx("div",{className:"text-xs text-gray-600",children:"Success"}),v.jsxs("div",{className:"text-base sm:text-lg font-bold",children:[i,"%"]})]})]}),n>0&&v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(r_,{className:"text-yellow-600 flex-shrink-0",size:20,fill:"currentColor"}),v.jsxs("div",{children:[v.jsx("div",{className:"text-xs text-gray-600",children:"Streak"}),v.jsx("div",{className:"text-base sm:text-lg font-bold",children:n})]})]})]})}function JA({totalProblems:t,correctAnswers:e,onNewChallenge:n,onFreePractice:i}){const[r,s]=ue.useState(!1),o=t>0?Math.round(e/t*100):0;ue.useEffect(()=>{a()},[]);function a(){s(!1),Ft("round-complete"),di("challenge-complete").catch(()=>s(!0))}return v.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",children:v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full",children:[v.jsxs("div",{className:"text-center mb-8",children:[v.jsx("div",{className:"flex justify-center mb-4",children:v.jsx(lp,{className:"w-24 h-24 text-yellow-500",strokeWidth:2})}),v.jsx("h1",{className:"text-5xl font-bold text-gray-800 mb-4",children:"Challenge Complete!"}),v.jsx("p",{className:"text-2xl text-green-600 font-semibold",children:"Great job!"})]}),v.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4 text-center",children:"Your Results"}),v.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"text-4xl font-bold text-blue-600 mb-1",children:t}),v.jsx("div",{className:"text-sm text-gray-600",children:"Total Problems"})]}),v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"text-4xl font-bold text-green-600 mb-1",children:e}),v.jsx("div",{className:"text-sm text-gray-600",children:"Correct"})]}),v.jsxs("div",{className:"text-center",children:[v.jsxs("div",{className:"text-4xl font-bold text-purple-600 mb-1",children:[o,"%"]}),v.jsx("div",{className:"text-sm text-gray-600",children:"Accuracy"})]})]})]}),r&&v.jsx("div",{className:"flex justify-center mb-6",children:v.jsxs("button",{onClick:a,className:"flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-lg",children:[v.jsx(FA,{className:"w-5 h-5"}),"Tap to hear Ellie"]})}),v.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[v.jsx("button",{onClick:n,className:"py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg text-xl font-bold",children:"New Challenge"}),v.jsx("button",{onClick:i,className:"py-4 px-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg text-xl font-bold",children:"Free Practice"})]})]})})}function QA({onStart:t,onBack:e}){const[n,i]=ue.useState(2),[r,s]=ue.useState(0),[o,a]=ue.useState(10),[l,c]=ue.useState(!0),u=[2,3,4,5,6,7,8,9,10,11,12];function h(p){p>o?(s(o),a(p)):s(p)}function d(p){p<r?(a(r),s(p)):a(p)}function m(){t({table:n,rangeStart:Math.min(r,o),rangeEnd:Math.max(r,o),shuffle:l})}return v.jsxs("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-4xl mx-auto",children:[v.jsx("h1",{className:"text-4xl font-bold text-orange-600 mb-4",children:"Times Tables Practice"}),v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 w-full",children:[v.jsxs("div",{className:"mb-8",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Choose Your Table"}),v.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 gap-3",children:u.map(p=>v.jsx("button",{onClick:()=>i(p),className:`py-4 px-6 rounded-xl text-2xl font-bold transition-all transform hover:scale-105 ${n===p?"bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:p},p))})]}),v.jsxs("div",{className:"mb-8",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Practice with multipliers"}),v.jsxs("p",{className:"text-gray-600 text-sm mb-4",children:["Example: × 0 to 10 means ",n,"×0, ",n,"×1 … ",n,"×10"]}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsxs("div",{className:"flex-1",children:[v.jsx("label",{className:"block text-sm font-semibold text-gray-600 mb-2",children:"From"}),v.jsx("select",{value:r,onChange:p=>h(parseInt(p.target.value)),className:"w-full py-3 px-4 rounded-xl text-xl font-bold bg-gray-100 border-2 border-gray-300 focus:border-orange-500 focus:outline-none",children:[0,1,2,3,4,5,6,7,8,9,10,11,12].map(p=>v.jsx("option",{value:p,children:p},p))})]}),v.jsx("div",{className:"text-3xl font-bold text-gray-400 mt-6",children:"to"}),v.jsxs("div",{className:"flex-1",children:[v.jsx("label",{className:"block text-sm font-semibold text-gray-600 mb-2",children:"To"}),v.jsx("select",{value:o,onChange:p=>d(parseInt(p.target.value)),className:"w-full py-3 px-4 rounded-xl text-xl font-bold bg-gray-100 border-2 border-gray-300 focus:border-orange-500 focus:outline-none",children:[0,1,2,3,4,5,6,7,8,9,10,11,12].map(p=>v.jsx("option",{value:p,children:p},p))})]})]})]}),v.jsx("div",{className:"mb-8",children:v.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[v.jsx("input",{type:"checkbox",checked:l,onChange:p=>c(p.target.checked),className:"w-6 h-6 rounded border-2 border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-500"}),v.jsxs("div",{children:[v.jsx("span",{className:"text-lg font-semibold text-gray-800",children:"Shuffle multipliers"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Cycles through all multipliers before repeating"})]})]})}),v.jsxs("div",{className:"flex gap-4",children:[v.jsx("button",{onClick:e,className:"flex-1 py-4 px-6 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-2xl text-xl font-bold shadow-lg transition-all",children:"← Back"}),v.jsx("button",{onClick:m,className:"flex-1 py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl text-xl font-bold shadow-lg transition-all transform hover:scale-105",children:"Start Practice"})]})]})]})}function eC({config:t,onBack:e,onStatsUpdate:n}){const[i,r]=ue.useState(Nf()),[s,o]=ue.useState(""),[a,l]=ue.useState(0),[c,u]=ue.useState(null),[h,d]=ue.useState(0),[m,p]=ue.useState(null),[S,g]=ue.useState(0),[f,x]=ue.useState([]),[_,M]=ue.useState(0),R=Math.abs(t.rangeEnd-t.rangeStart)+1;ue.useEffect(()=>{if(t.shuffle){const z=[],N=Math.min(t.rangeStart,t.rangeEnd),j=Math.max(t.rangeStart,t.rangeEnd);for(let ne=N;ne<=j;ne++)z.push(ne);A(z),x(z),M(1);const K=z[0];l(K),g(t.table*K)}else{const z=Math.min(t.rangeStart,t.rangeEnd),N=Math.max(t.rangeStart,t.rangeEnd),j=Math.floor(Math.random()*(N-z+1))+z;l(j),g(t.table*j),u(j)}},[]);function A(z){for(let N=z.length-1;N>0;N--){const j=Math.floor(Math.random()*(N+1));[z[N],z[j]]=[z[j],z[N]]}}function b(){let z;if(t.shuffle)if(_>=f.length){const N=[],j=Math.min(t.rangeStart,t.rangeEnd),K=Math.max(t.rangeStart,t.rangeEnd);for(let ne=j;ne<=K;ne++)N.push(ne);A(N),x(N),M(1),z=N[0]}else z=f[_],M(N=>N+1);else{const N=Math.min(t.rangeStart,t.rangeEnd),j=Math.max(t.rangeStart,t.rangeEnd);if(R===1)z=N;else do z=Math.floor(Math.random()*(j-N+1))+N;while(z===c&&R>1);u(z)}l(z),g(t.table*z),o(""),d(0),p(null)}function L(z){z==="correct"?(Ft("answer-correct"),di("correct")):(Ft("answer-wrong"),di("tryagain"))}function W(z){o(s+z)}function y(){o(s.slice(0,-1))}function E(){if(!s||m)return;if(parseInt(s)===S)p("correct"),L("correct"),n&&n(!0);else{const j=h+1;d(j),j>=2?(p("show-answer"),n&&n(!1)):(p("incorrect"),L("incorrect"))}}function V(){b()}function H(){o(""),p(null)}function $(){const z=!i;r(z),Lf(z)}function ee(z,N){return N===0?"Anything times 0 equals 0.":N===1?"Anything times 1 stays the same.":N===9?"Think of ten groups, then take one away.":N===10?"Just add a zero.":N===11?"Write the number twice side by side.":{2:"Try doubling the number.",3:"Think of three equal groups.",4:"Try doubling twice.",5:"Try counting by fives.",6:"Think of five groups, then one more.",7:"Start with a number you know.",8:"Try doubling again and again.",9:"Think of ten groups, then take one away.",10:"Just add a zero.",11:"Write the number twice side by side.",12:"Try ten groups first, then two more."}[z]||"Think carefully about the groups."}function G(z,N){const j=z*N;if(N===0)return{strategy:"Anything times 0 equals 0.",example:"Zero groups means nothing at all!"};if(N===1)return{strategy:"Anything times 1 stays the same.",example:`For example: one group of ${z} = ${j}`};if(N===10)return{strategy:"When multiplying by 10, just add a zero.",example:`For example: ${z} becomes ${z}0, which is ${j}`};if(N===9){const K=z*10;return{strategy:"Multiply by 10 first, then subtract one group.",example:`What is ${z} × 10? That's ${K}. Then subtract one group of ${z}: ${K} - ${z} = ${j}`}}if(N===11)return{strategy:"When multiplying by 11, write the number twice.",example:`For example: ${z} becomes ${z}${z}, which is ${j}`};switch(z){case 2:return{strategy:"Doubling means adding the number once.",example:`For example: ${N} + ${N} = ${j}`};case 3:return{strategy:"Add the number three times.",example:`For example: ${N} + ${N} + ${N} = ${j}`};case 4:{const K=N*2;return{strategy:"Double it once, then double again.",example:`For example: ${N} + ${N} = ${K}, then ${K} + ${K} = ${j}`}}case 5:{const K=[];for(let Ae=1;Ae<=Math.min(N,6);Ae++)K.push(5*Ae);return{strategy:"Count by fives. Every answer ends in 0 or 5.",example:`For example: ${N<=6?K.join(", "):K.join(", ")+"..."} = ${j}`}}case 6:{const K=N*5;return{strategy:"Do five first, then add one more.",example:`For example: five ${N}s = ${K}, plus one more ${N} = ${j}`}}case 7:return{strategy:"Add seven again and again.",example:`For example: ${Array(N).fill(7).join(" + ")} = ${j}`};case 8:return N===2?{strategy:"Double the number.",example:`For example: 8 + 8 = ${j}`}:N===4?{strategy:"Double once. Then double again.",example:`For example: 8 + 8 = 16, then 16 + 16 = ${j}`}:{strategy:"Add eight groups together.",example:`For example: ${Array(N).fill(8).join(" + ")} = ${j}`};case 9:{const K=N*10;return{strategy:"Multiply by 10 first, then subtract one group.",example:`What is ${N} × 10? That's ${K}. Then subtract one group of ${N}: ${K} - ${N} = ${j}`}}case 10:return{strategy:"Ten always ends with zero.",example:`For example: ${N} becomes ${j}`};case 11:return{strategy:"The number appears twice.",example:`For example: ${N} becomes ${j}`};case 12:{const K=N*10,ne=N*2;return{strategy:"Count ten groups, then two more.",example:`For example: ten ${N}s = ${K}, two more ${N}s = ${ne}, total = ${j}`}}default:return{strategy:"Keep practicing!",example:"Count the groups one by one."}}}if(m==="correct")return v.jsx("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto",children:v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-12 w-full text-center",children:[v.jsx(IA,{className:"w-24 h-24 text-green-500 mx-auto mb-6"}),v.jsx("h2",{className:"text-4xl font-bold text-green-600 mb-4",children:"Correct!"}),v.jsxs("div",{className:"text-6xl font-bold text-gray-800 mb-6 font-mono",children:[t.table," × ",a," = ",S]}),v.jsx("button",{onClick:V,className:"w-full py-4 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-2xl font-bold rounded-2xl shadow-lg transform hover:scale-105 transition-all",children:"Next Problem"})]})});if(m==="incorrect")return v.jsx("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto",children:v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-12 w-full text-center",children:[v.jsx(BA,{className:"w-24 h-24 text-red-500 mx-auto mb-6"}),v.jsx("h2",{className:"text-4xl font-bold text-red-600 mb-4",children:"Not quite!"}),v.jsxs("div",{className:"text-5xl font-bold text-gray-800 mb-6 font-mono",children:[t.table," × ",a]}),v.jsxs("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6",children:[v.jsx("p",{className:"text-2xl font-semibold text-blue-900 mb-3",children:ee(t.table,a)}),v.jsxs("p",{className:"text-xl text-blue-700",children:["What is ",t.table," groups of ",a,"?"]})]}),v.jsx("p",{className:"text-2xl text-gray-700 mb-6",children:"Try again! You have one more attempt."}),v.jsx("button",{onClick:H,className:"w-full py-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-2xl font-bold rounded-2xl shadow-lg transform hover:scale-105 transition-all",children:"Try Again"})]})});if(m==="show-answer"){const z=G(t.table,a);return v.jsx("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto",children:v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-12 w-full text-center",children:[v.jsx("div",{className:"text-6xl mb-6",children:"💡"}),v.jsx("h2",{className:"text-4xl font-bold text-orange-600 mb-4",children:"Here's the answer"}),v.jsxs("div",{className:"text-6xl font-bold text-gray-800 mb-6 font-mono",children:[t.table," × ",a," = ",S]}),v.jsxs("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6",children:[v.jsx("p",{className:"text-xl font-semibold text-blue-900 mb-3",children:z.strategy}),v.jsx("p",{className:"text-lg text-blue-700 font-mono",children:z.example})]}),v.jsx("p",{className:"text-xl text-gray-600 mb-6",children:"Keep practicing! You'll get it next time."}),v.jsx("button",{onClick:V,className:"w-full py-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-2xl font-bold rounded-2xl shadow-lg transform hover:scale-105 transition-all",children:"Next Problem"})]})})}return v.jsx("div",{className:"flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto",children:v.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-12 w-full",children:[v.jsxs("div",{className:"flex justify-between items-center mb-8",children:[v.jsx("button",{onClick:e,className:"px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl text-lg font-semibold transition-all",children:"← Back"}),v.jsxs("button",{onClick:$,className:`flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold transition-all ${i?"bg-green-500 hover:bg-green-600 text-white":"bg-gray-300 hover:bg-gray-400 text-gray-700"}`,children:[i?v.jsx(n_,{size:24}):v.jsx(i_,{size:24}),v.jsxs("span",{children:["Sound ",i?"On":"Off"]})]})]}),v.jsxs("div",{className:"flex flex-col items-end gap-2 mb-8 font-mono text-5xl font-bold",children:[v.jsx("div",{className:"text-right",children:t.table}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-4xl",children:"×"}),v.jsx("div",{className:"text-right",children:a})]}),v.jsx("div",{className:"border-t-4 border-gray-800 w-full my-2"}),v.jsx("div",{className:"text-right bg-yellow-100 px-4 py-2 rounded-lg min-h-[4rem] flex items-center justify-end w-full",children:s||v.jsx("span",{className:"text-gray-400",children:"?"})})]}),R===1&&v.jsx("div",{className:"mb-4 text-center text-sm text-gray-600 bg-blue-50 py-2 px-4 rounded-lg",children:"Only one multiplier in this range"}),v.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[[1,2,3,4,5,6,7,8,9].map(z=>v.jsx("button",{onClick:()=>W(z.toString()),className:"bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all",children:z},z)),v.jsx("button",{onClick:y,className:"bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all flex items-center justify-center",children:v.jsx(e_,{size:32})}),v.jsx("button",{onClick:()=>W("0"),className:"bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all",children:"0"}),v.jsx("button",{onClick:E,disabled:!s,className:"bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-2xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",children:"✓"})]})]})})}const s_="mathbuddy_stats";function tC(){try{const t=localStorage.getItem(s_);if(t)return JSON.parse(t)}catch{}return{totalProblems:0,correctAnswers:0,currentStreak:0,bestStreak:0}}function nC(t){try{localStorage.setItem(s_,JSON.stringify(t))}catch{}}function kt(t,e){return Math.floor(Math.random()*(e-t+1))+t}function iC(t){let e,n;if(t==="easy"){e=kt(20,99);const r=Math.min(e-1,89);n=kt(10,r);const s=e%10,o=n%10;s<o&&(n=n-o+kt(0,s))}else if(t==="medium")if(Math.random()<.5){e=kt(100,999);const r=Math.min(e-1,950);n=kt(50,r)}else{e=kt(50,99);const r=Math.min(e-1,90);n=kt(20,r)}else{if(Math.random()<.5){e=kt(1e3,9999);const a=Math.min(e-1,9500);n=kt(500,a)}else{e=kt(100,999);const a=Math.min(e-1,950);n=kt(50,a)}let r=!1;const s=e.toString(),o=n.toString().padStart(s.length,"0");for(let a=s.length-1;a>=0;a--)if(parseInt(s[a])<parseInt(o[a])){r=!0;break}if(!r){const a=e%10,l=n%10;if(a>=l&&a<9){const c=kt(a+1,9),u=n-l+c;u<e&&(n=u)}}}n>=e&&(e>100?n=e-kt(50,Math.min(200,e-1)):n=e-kt(10,Math.min(50,e-1)));const i=e-n;return{type:"subtraction",difficulty:t,num1:e,num2:n,correctAnswer:i,displayText:`${e} - ${n}`}}function rC(t){let e,n;t==="single-digit"?(e=kt(2,9),n=kt(2,9)):(e=kt(2,9),n=kt(10,99));const i=e*n;return{type:"multiplication",difficulty:t,num1:e,num2:n,correctAnswer:i,displayText:`${e} × ${n}`}}function sC(){const[t,e]=ue.useState("room"),[n,i]=ue.useState(null),[r,s]=ue.useState(null),[o,a]=ue.useState(0),[l,c]=ue.useState(0),[u,h]=ue.useState(0),[d,m]=ue.useState(null),[p,S]=ue.useState(null),[g,f]=ue.useState(null),[x,_]=ue.useState(null),[M,R]=ue.useState(""),[A,b]=ue.useState(!1),[L,W]=ue.useState(0),[y,E]=ue.useState(0),[V,H]=ue.useState(0),[$,ee]=ue.useState(0);ue.useEffect(()=>{const D=tC();W(D.totalProblems),E(D.correctAnswers),H(D.currentStreak),ee(D.bestStreak)},[]);function G(D,q,J,se,ve){const he=q+1,C=D?J+1:J,w=D?se+1:0,B=Math.max(ve,w);return W(he),E(C),H(w),ee(B),nC({totalProblems:he,correctAnswers:C,currentStreak:w,bestStreak:B}),{newTotal:he,newCorrect:C,newStreak:w,newBest:B}}function z(D){i(D),e(D==="challenge"?"challenge-setup":"math-type")}function N(D){s(D),a(0),c(0),h(0),e("math-type")}function j(D){if(S(D),D==="subtraction"&&n!=="challenge"){e("borrow");return}if(n==="challenge"&&r){const q=r.difficultySequence[0];ne(D,q),e("problem")}else e("difficulty")}function K(D){f(D),ne(p,D),e("problem")}function ne(D,q){let J;D==="subtraction"?J=iC(q):J=rC(q),_(J),R("")}function Ae(){if(!x||!M)return;const q=parseInt(M)===x.correctAnswer;b(q),G(q,L,y,V,$),q&&yl(1),n==="challenge"&&(c(l+1),q&&h(u+1)),e("feedback")}function Ge(){if(n==="challenge"&&r&&p){const D=o+1;if(D>=r.totalProblems){yl(3),e("challenge-complete"),a(0);return}const q=r.difficultySequence[D];a(D),ne(p,q),e("problem")}else p&&g&&(ne(p,g),e("problem"))}function Z(){R(""),e("problem")}function k(){e(n==="challenge"?"math-type":"difficulty")}function ce(){e("math-type")}function te(){e("challenge-setup")}function Ce(){i("free"),e("math-type")}function Pe(){e("tables-setup")}function Ie(D){m(D),e("tables-practice")}function Oe(D){D&&yl(1),G(D,L,y,V,$)}function oe(){e("tables-setup")}function P(){e("difficulty")}return v.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100",children:[t!=="room"&&t!=="borrow"&&v.jsx(hA,{onClick:()=>e("room")}),t==="borrow"&&v.jsx(PA,{onExit:()=>e("room"),onSolved:D=>G(D,L,y,V,$)}),t==="room"&&v.jsx(cA,{onPractice:()=>e("practice-mode")}),t!=="room"&&t!=="borrow"&&t!=="practice-mode"&&t!=="challenge-setup"&&t!=="challenge-complete"&&t!=="tables-setup"&&v.jsx(ZA,{totalProblems:L,correctAnswers:y,currentStreak:V}),t==="practice-mode"&&v.jsx(VA,{onSelect:z}),t==="challenge-setup"&&v.jsx(GA,{onSelect:N}),t==="math-type"&&v.jsx(jA,{onSelect:j}),t==="difficulty"&&p&&n==="free"&&v.jsx(WA,{mathType:p,onSelect:K,onTimesTablesSelect:p==="multiplication"?Pe:void 0,onBack:ce}),t==="problem"&&x&&v.jsx($A,{problem:x,studentAnswer:M,onAnswerChange:R,onSubmit:Ae,onBack:k}),t==="feedback"&&x&&v.jsx(KA,{isCorrect:A,problem:x,studentAnswer:parseInt(M),onNext:Ge,onTryAgain:Z}),t==="challenge-complete"&&v.jsx(JA,{totalProblems:l,correctAnswers:u,onNewChallenge:te,onFreePractice:Ce}),t==="tables-setup"&&v.jsx(QA,{onStart:Ie,onBack:P}),t==="tables-practice"&&d&&v.jsx(eC,{config:d,onBack:oe,onStatsUpdate:Oe})]})}nx(document.getElementById("root")).render(v.jsx(ue.StrictMode,{children:v.jsx(sC,{})}));
