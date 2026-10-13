(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var qg={exports:{}},lc={},Yg={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),hx=Symbol.for("react.portal"),fx=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),xx=Symbol.for("react.suspense"),yx=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),mp=Symbol.iterator;function Mx(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jg=Object.assign,Zg={};function eo(t,e,n){this.props=t,this.context=e,this.refs=Zg,this.updater=n||Kg}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qg(){}Qg.prototype=eo.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=Zg,this.updater=n||Kg}var Fh=kh.prototype=new Qg;Fh.constructor=kh;Jg(Fh,eo.prototype);Fh.isPureReactComponent=!0;var gp=Array.isArray,e0=Object.prototype.hasOwnProperty,Oh={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:t,key:s,ref:o,props:r,_owner:Oh.current}}function Ex(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function wx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wx(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case hx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ic(o,0):i,gp(r)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(zh(r)&&(r=Ex(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ic(s,a);o+=ll(s,e,n,l,r)}else if(l=Mx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ic(s,a++),o+=ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},cl={transition:null},Ax={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Oh};function i0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=eo;qe.Fragment=fx;qe.Profiler=mx;qe.PureComponent=kh;qe.StrictMode=px;qe.Suspense=xx;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;qe.act=i0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:da,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:vx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gx,_context:t},t.Consumer=t};qe.createElement=n0;qe.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:_x,render:t}};qe.isValidElement=zh;qe.lazy=function(t){return{$$typeof:Sx,_payload:{_status:-1,_result:t},_init:Tx}};qe.memo=function(t,e){return{$$typeof:yx,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};qe.unstable_act=i0;qe.useCallback=function(t,e){return an.current.useCallback(t,e)};qe.useContext=function(t){return an.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};qe.useEffect=function(t,e){return an.current.useEffect(t,e)};qe.useId=function(){return an.current.useId()};qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return an.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};qe.useRef=function(t){return an.current.useRef(t)};qe.useState=function(t){return an.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return an.current.useTransition()};qe.version="18.3.1";Yg.exports=qe;var fe=Yg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx=fe,Cx=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),Px=Object.prototype.hasOwnProperty,Lx=bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nx={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Px.call(e,i)&&!Nx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cx,type:t,key:s,ref:o,props:r,_owner:Lx.current}}lc.Fragment=Rx;lc.jsx=r0;lc.jsxs=r0;qg.exports=lc;var T=qg.exports,s0={exports:{}},Pn={},o0={exports:{}},a0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,te){var Z=N.length;N.push(te);e:for(;0<Z;){var de=Z-1>>>1,Le=N[de];if(0<r(Le,te))N[de]=te,N[Z]=Le,Z=de;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var te=N[0],Z=N.pop();if(Z!==te){N[0]=Z;e:for(var de=0,Le=N.length,Be=Le>>>1;de<Be;){var Y=2*(de+1)-1,ue=N[Y],xe=Y+1,pe=N[xe];if(0>r(ue,Z))xe<Le&&0>r(pe,ue)?(N[de]=pe,N[xe]=Z,de=xe):(N[de]=ue,N[Y]=Z,de=Y);else if(xe<Le&&0>r(pe,Z))N[de]=pe,N[xe]=Z,de=xe;else break e}}return te}function r(N,te){var Z=N.sortIndex-te.sortIndex;return Z!==0?Z:N.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,p=null,h=3,d=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var te=n(c);te!==null;){if(te.callback===null)i(c);else if(te.startTime<=N)i(c),te.sortIndex=te.expirationTime,e(l,te);else break;te=n(c)}}function S(N){if(y=!1,v(N),!m)if(n(l)!==null)m=!0,H(P);else{var te=n(c);te!==null&&re(S,te.startTime-N)}}function P(N,te){m=!1,y&&(y=!1,f(L),L=-1),d=!0;var Z=h;try{for(v(te),p=n(l);p!==null&&(!(p.expirationTime>te)||N&&!E());){var de=p.callback;if(typeof de=="function"){p.callback=null,h=p.priorityLevel;var Le=de(p.expirationTime<=te);te=t.unstable_now(),typeof Le=="function"?p.callback=Le:p===n(l)&&i(l),v(te)}else i(l);p=n(l)}if(p!==null)var Be=!0;else{var Y=n(c);Y!==null&&re(S,Y.startTime-te),Be=!1}return Be}finally{p=null,h=Z,d=!1}}var b=!1,w=null,L=-1,q=5,x=-1;function E(){return!(t.unstable_now()-x<q)}function V(){if(w!==null){var N=t.unstable_now();x=N;var te=!0;try{te=w(!0,N)}finally{te?k():(b=!1,w=null)}}else b=!1}var k;if(typeof _=="function")k=function(){_(V)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,ee=W.port2;W.port1.onmessage=V,k=function(){ee.postMessage(null)}}else k=function(){g(V,0)};function H(N){w=N,b||(b=!0,k())}function re(N,te){L=g(function(){N(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||d||(m=!0,H(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var te=3;break;default:te=h}var Z=h;h=te;try{return N()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,te){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=h;h=N;try{return te()}finally{h=Z}},t.unstable_scheduleCallback=function(N,te,Z){var de=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?de+Z:de):Z=de,N){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=Z+Le,N={id:u++,callback:te,priorityLevel:N,startTime:Z,expirationTime:Le,sortIndex:-1},Z>de?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(y?(f(L),L=-1):y=!0,re(S,Z-de))):(N.sortIndex=Le,e(l,N),m||d||(m=!0,H(P))),N},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(N){var te=h;return function(){var Z=h;h=te;try{return N.apply(this,arguments)}finally{h=Z}}}})(a0);o0.exports=a0;var Dx=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix=fe,Rn=Dx;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Vo={};function Kr(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Vo[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,Ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},xp={};function kx(t){return ju.call(xp,t)?!0:ju.call(_p,t)?!1:Ux.test(t)?xp[t]=!0:(_p[t]=!0,!1)}function Fx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ox(t,e,n,i){if(e===null||typeof e>"u"||Fx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);Xt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Hh);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Hh);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ox(e,n,r,i)&&(n=null),i||r===null?kx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=Ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),yp=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Uc;function Ao(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var kc=!1;function Fc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function zx(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case $u:return"Profiler";case Gh:return"StrictMode";case Xu:return"Suspense";case qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function Bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hx(t){var e=h0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=Hx(t))}function f0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=h0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function Ju(t,e){p0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(bo(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function m0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vx=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){Vx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function _0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function x0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gx=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(Gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,Ps=null,Ls=null;function Tp(t){if(t=pa(t)){if(typeof rd!="function")throw Error(he(280));var e=t.stateNode;e&&(e=fc(e),rd(t.stateNode,t.type,e))}}function y0(t){Ps?Ls?Ls.push(t):Ls=[t]:Ps=t}function S0(){if(Ps){var t=Ps,e=Ls;if(Ls=Ps=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function M0(t,e){return t(e)}function E0(){}var Oc=!1;function w0(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return M0(t,e,n)}finally{Oc=!1,(Ps!==null||Ls!==null)&&(E0(),S0())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var sd=!1;if(bi)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){sd=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{sd=!1}function Wx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var No=!1,Rl=null,Pl=!1,od=null,jx={onError:function(t){No=!0,Rl=t}};function $x(t,e,n,i,r,s,o,a,l){No=!1,Rl=null,Wx.apply(jx,arguments)}function Xx(t,e,n,i,r,s,o,a,l){if($x.apply(this,arguments),No){if(No){var c=Rl;No=!1,Rl=null}else throw Error(he(198));Pl||(Pl=!0,od=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ap(t){if(Jr(t)!==t)throw Error(he(188))}function qx(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ap(r),t;if(s===i)return Ap(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function A0(t){return t=qx(t),t!==null?b0(t):null}function b0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b0(t);if(e!==null)return e;t=t.sibling}return null}var C0=Rn.unstable_scheduleCallback,bp=Rn.unstable_cancelCallback,Yx=Rn.unstable_shouldYield,Kx=Rn.unstable_requestPaint,bt=Rn.unstable_now,Jx=Rn.unstable_getCurrentPriorityLevel,Xh=Rn.unstable_ImmediatePriority,R0=Rn.unstable_UserBlockingPriority,Ll=Rn.unstable_NormalPriority,Zx=Rn.unstable_LowPriority,P0=Rn.unstable_IdlePriority,cc=null,ci=null;function Qx(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(t){return t>>>=0,t===0?32:31-(ey(t)/ty|0)|0}var Ta=64,Aa=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Co(a):(s&=o,s!==0&&(i=Co(s)))}else o=n&~r,o!==0?i=Co(o):s!==0&&(i=Co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function iy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=iy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function sy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function N0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,Yh,I0,U0,k0,ld=!1,ba=[],Ji=null,Zi=null,Qi=null,jo=new Map,$o=new Map,ji=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=pa(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ay(t,e,n,i,r){switch(e){case"focusin":return Ji=fo(Ji,t,e,n,i,r),!0;case"dragenter":return Zi=fo(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=fo(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return jo.set(s,fo(jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$o.set(s,fo($o.get(s)||null,t,e,n,i,r)),!0}return!1}function F0(t){var e=Lr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=T0(n),e!==null){t.blockedOn=e,k0(t.priority,function(){I0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);id=i,n.target.dispatchEvent(i),id=null}else return e=pa(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Rp(t,e,n){ul(t)&&n.delete(e)}function ly(){ld=!1,Ji!==null&&ul(Ji)&&(Ji=null),Zi!==null&&ul(Zi)&&(Zi=null),Qi!==null&&ul(Qi)&&(Qi=null),jo.forEach(Rp),$o.forEach(Rp)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,ly)))}function Xo(t){function e(r){return po(r,t)}if(0<ba.length){po(ba[0],t);for(var n=1;n<ba.length;n++){var i=ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&po(Ji,t),Zi!==null&&po(Zi,t),Qi!==null&&po(Qi,t),jo.forEach(e),$o.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)F0(n),n.blockedOn===null&&ji.shift()}var Ns=Di.ReactCurrentBatchConfig,Dl=!0;function cy(t,e,n,i){var r=st,s=Ns.transition;Ns.transition=null;try{st=1,Kh(t,e,n,i)}finally{st=r,Ns.transition=s}}function uy(t,e,n,i){var r=st,s=Ns.transition;Ns.transition=null;try{st=4,Kh(t,e,n,i)}finally{st=r,Ns.transition=s}}function Kh(t,e,n,i){if(Dl){var r=cd(t,e,n,i);if(r===null)Yc(t,e,i,Il,n),Cp(t,i);else if(ay(r,t,e,n,i))i.stopPropagation();else if(Cp(t,i),e&4&&-1<oy.indexOf(t)){for(;r!==null;){var s=pa(r);if(s!==null&&D0(s),s=cd(t,e,n,i),s===null&&Yc(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yc(t,e,i,null,n)}}var Il=null;function cd(t,e,n,i){if(Il=null,t=$h(i),t=Lr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function O0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case Xh:return 1;case R0:return 4;case Ll:case Zx:return 16;case P0:return 536870912;default:return 16}default:return 16}}var qi=null,Jh=null,dl=null;function z0(){if(dl)return dl;var t,e=Jh,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Pp(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:Pp,this.isPropagationStopped=Pp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=Ln(to),fa=St({},to,{view:0,detail:0}),dy=Ln(fa),Bc,Hc,mo,uc=St({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Bc=t.screenX-mo.screenX,Hc=t.screenY-mo.screenY):Hc=Bc=0,mo=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Lp=Ln(uc),hy=St({},uc,{dataTransfer:0}),fy=Ln(hy),py=St({},fa,{relatedTarget:0}),Vc=Ln(py),my=St({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Ln(my),vy=St({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=Ln(vy),xy=St({},to,{data:0}),Np=Ln(xy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=My[t])?!!e[t]:!1}function Qh(){return Ey}var wy=St({},fa,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ty=Ln(wy),Ay=St({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Ln(Ay),by=St({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),Cy=Ln(by),Ry=St({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=Ln(Ry),Ly=St({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ny=Ln(Ly),Dy=[9,13,27,32],ef=bi&&"CompositionEvent"in window,Do=null;bi&&"documentMode"in document&&(Do=document.documentMode);var Iy=bi&&"TextEvent"in window&&!Do,B0=bi&&(!ef||Do&&8<Do&&11>=Do),Ip=" ",Up=!1;function H0(t,e){switch(t){case"keyup":return Dy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function Uy(t,e){switch(t){case"compositionend":return V0(e);case"keypress":return e.which!==32?null:(Up=!0,Ip);case"textInput":return t=e.data,t===Ip&&Up?null:t;default:return null}}function ky(t,e){if(vs)return t==="compositionend"||!ef&&H0(t,e)?(t=z0(),dl=Jh=qi=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fy[t.type]:e==="textarea"}function G0(t,e,n,i){y0(i),e=Ul(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Io=null,qo=null;function Oy(t){ev(t,0)}function dc(t){var e=ys(t);if(f0(e))return t}function zy(t,e){if(t==="change")return e}var W0=!1;if(bi){var Gc;if(bi){var Wc="oninput"in document;if(!Wc){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Wc=typeof Fp.oninput=="function"}Gc=Wc}else Gc=!1;W0=Gc&&(!document.documentMode||9<document.documentMode)}function Op(){Io&&(Io.detachEvent("onpropertychange",j0),qo=Io=null)}function j0(t){if(t.propertyName==="value"&&dc(qo)){var e=[];G0(e,qo,t,$h(t)),w0(Oy,e)}}function By(t,e,n){t==="focusin"?(Op(),Io=e,qo=n,Io.attachEvent("onpropertychange",j0)):t==="focusout"&&Op()}function Hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(qo)}function Vy(t,e){if(t==="click")return dc(e)}function Gy(t,e){if(t==="input"||t==="change")return dc(e)}function Wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:Wy;function Yo(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ju.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bp(t,e){var n=zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zp(n)}}function $0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X0(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jy(t){var e=X0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$0(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bp(n,s);var o=Bp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $y=bi&&"documentMode"in document&&11>=document.documentMode,_s=null,ud=null,Uo=null,dd=!1;function Hp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||_s==null||_s!==Cl(i)||(i=_s,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Uo&&Yo(Uo,i)||(Uo=i,i=Ul(ud,"onSelect"),0<i.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},jc={},q0={};bi&&(q0=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function hc(t){if(jc[t])return jc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q0)return jc[t]=e[n];return t}var Y0=hc("animationend"),K0=hc("animationiteration"),J0=hc("animationstart"),Z0=hc("transitionend"),Q0=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Q0.set(t,e),Kr(e,[t])}for(var $c=0;$c<Vp.length;$c++){var Xc=Vp[$c],Xy=Xc.toLowerCase(),qy=Xc[0].toUpperCase()+Xc.slice(1);fr(Xy,"on"+qy)}fr(Y0,"onAnimationEnd");fr(K0,"onAnimationIteration");fr(J0,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Z0,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Xx(i,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gp(r,a,c),s=l}}}if(Pl)throw t=od,Pl=!1,od=null,t}function ht(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var i=t+"__bubble";n.has(i)||(tv(e,t,2,!1),n.add(i))}function qc(t,e,n){var i=0;e&&(i|=4),tv(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Pa]){t[Pa]=!0,l0.forEach(function(n){n!=="selectionchange"&&(Yy.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,qc("selectionchange",!1,e))}}function tv(t,e,n,i){switch(O0(e)){case 1:var r=cy;break;case 4:r=uy;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}w0(function(){var c=s,u=$h(n),p=[];e:{var h=Q0.get(t);if(h!==void 0){var d=Zh,m=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":d=Ty;break;case"focusin":m="focus",d=Vc;break;case"focusout":m="blur",d=Vc;break;case"beforeblur":case"afterblur":d=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Cy;break;case Y0:case K0:case J0:d=gy;break;case Z0:d=Py;break;case"scroll":d=dy;break;case"wheel":d=Ny;break;case"copy":case"cut":case"paste":d=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Dp}var y=(e&4)!==0,g=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=Wo(_,f),S!=null&&y.push(Jo(_,S,v)))),g)break;_=_.return}0<y.length&&(h=new d(h,m,null,n,u),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",h&&n!==id&&(m=n.relatedTarget||n.fromElement)&&(Lr(m)||m[Ci]))break e;if((d||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,d?(m=n.relatedTarget||n.toElement,d=c,m=m?Lr(m):null,m!==null&&(g=Jr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(d=null,m=c),d!==m)){if(y=Lp,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Dp,S="onPointerLeave",f="onPointerEnter",_="pointer"),g=d==null?h:ys(d),v=m==null?h:ys(m),h=new y(S,_+"leave",d,n,u),h.target=g,h.relatedTarget=v,S=null,Lr(u)===c&&(y=new y(f,_+"enter",m,n,u),y.target=v,y.relatedTarget=g,S=y),g=S,d&&m)t:{for(y=d,f=m,_=0,v=y;v;v=Qr(v))_++;for(v=0,S=f;S;S=Qr(S))v++;for(;0<_-v;)y=Qr(y),_--;for(;0<v-_;)f=Qr(f),v--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=Qr(y),f=Qr(f)}y=null}else y=null;d!==null&&Wp(p,h,d,y,!1),m!==null&&g!==null&&Wp(p,g,m,y,!0)}}e:{if(h=c?ys(c):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var P=zy;else if(kp(h))if(W0)P=Gy;else{P=Hy;var b=By}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Vy);if(P&&(P=P(t,c))){G0(p,P,n,u);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Zu(h,"number",h.value)}switch(b=c?ys(c):window,t){case"focusin":(kp(b)||b.contentEditable==="true")&&(_s=b,ud=c,Uo=null);break;case"focusout":Uo=ud=_s=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,Hp(p,n,u);break;case"selectionchange":if($y)break;case"keydown":case"keyup":Hp(p,n,u)}var w;if(ef)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else vs?H0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(B0&&n.locale!=="ko"&&(vs||L!=="onCompositionStart"?L==="onCompositionEnd"&&vs&&(w=z0()):(qi=u,Jh="value"in qi?qi.value:qi.textContent,vs=!0)),b=Ul(c,L),0<b.length&&(L=new Np(L,t,null,n,u),p.push({event:L,listeners:b}),w?L.data=w:(w=V0(n),w!==null&&(L.data=w)))),(w=Iy?Uy(t,n):ky(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(u=new Np("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:c}),u.data=w))}ev(p,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wo(t,n),s!=null&&i.unshift(Jo(t,s,r)),s=Wo(t,e),s!=null&&i.push(Jo(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Wo(n,s),l!=null&&o.unshift(Jo(n,l,a))):r||(l=Wo(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ky=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Jy,"")}function La(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(he(425))}function kl(){}var hd=null,fd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(t){return $p.resolve(null).then(t).catch(eS)}:md;function eS(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),li="__reactFiber$"+no,Zo="__reactProps$"+no,Ci="__reactContainer$"+no,gd="__reactEvents$"+no,tS="__reactListeners$"+no,nS="__reactHandles$"+no;function Lr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xp(t);t!==null;){if(n=t[li])return n;t=Xp(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[li]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function fc(t){return t[Zo]||null}var vd=[],Ss=-1;function pr(t){return{current:t}}function mt(t){0>Ss||(t.current=vd[Ss],vd[Ss]=null,Ss--)}function ut(t,e){Ss++,vd[Ss]=t.current,t.current=e}var cr={},nn=pr(cr),mn=pr(!1),Hr=cr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Fl(){mt(mn),mt(nn)}function qp(t,e,n){if(nn.current!==cr)throw Error(he(168));ut(nn,e),ut(mn,n)}function nv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,Bx(t)||"Unknown",r));return St({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Hr=nn.current,ut(nn,t),ut(mn,mn.current),!0}function Yp(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=nv(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,mt(mn),mt(nn),ut(nn,t)):mt(mn),ut(mn,n)}var Si=null,pc=!1,Jc=!1;function iv(t){Si===null?Si=[t]:Si.push(t)}function iS(t){pc=!0,iv(t)}function mr(){if(!Jc&&Si!==null){Jc=!0;var t=0,e=st;try{var n=Si;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,pc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),C0(Xh,mr),r}finally{st=e,Jc=!1}}return null}var Ms=[],Es=0,zl=null,Bl=0,In=[],Un=0,Vr=null,Mi=1,Ei="";function Tr(t,e){Ms[Es++]=Bl,Ms[Es++]=zl,zl=t,Bl=e}function rv(t,e,n){In[Un++]=Mi,In[Un++]=Ei,In[Un++]=Vr,Vr=t;var i=Mi;t=Ei;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-ti(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function nf(t){t.return!==null&&(Tr(t,1),rv(t,1,0))}function rf(t){for(;t===zl;)zl=Ms[--Es],Ms[Es]=null,Bl=Ms[--Es],Ms[Es]=null;for(;t===Vr;)Vr=In[--Un],In[Un]=null,Ei=In[--Un],In[Un]=null,Mi=In[--Un],In[Un]=null}var Cn=null,An=null,gt=!1,Jn=null;function sv(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function _d(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xd(t){if(gt){var e=An;if(e){var n=e;if(!Kp(t,e)){if(_d(t))throw Error(he(418));e=er(n.nextSibling);var i=Cn;e&&Kp(t,e)?sv(i,n):(t.flags=t.flags&-4097|2,gt=!1,Cn=t)}}else{if(_d(t))throw Error(he(418));t.flags=t.flags&-4097|2,gt=!1,Cn=t}}}function Jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Na(t){if(t!==Cn)return!1;if(!gt)return Jp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=An)){if(_d(t))throw ov(),Error(he(418));for(;e;)sv(t,e),e=er(e.nextSibling)}if(Jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?er(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=An;t;)t=er(t.nextSibling)}function Hs(){An=Cn=null,gt=!1}function sf(t){Jn===null?Jn=[t]:Jn.push(t)}var rS=Di.ReactCurrentBatchConfig;function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zp(t){var e=t._init;return e(t._payload)}function av(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=rr(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,S){return _===null||_.tag!==6?(_=ru(v,f.mode,S),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,S){var P=v.type;return P===gs?u(f,_,v.props.children,S,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gi&&Zp(P)===_.type)?(S=r(_,v.props),S.ref=go(f,_,v),S.return=f,S):(S=xl(v.type,v.key,v.props,null,f.mode,S),S.ref=go(f,_,v),S.return=f,S)}function c(f,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=su(v,f.mode,S),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function u(f,_,v,S,P){return _===null||_.tag!==7?(_=zr(v,f.mode,S,P),_.return=f,_):(_=r(_,v),_.return=f,_)}function p(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ru(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:return v=xl(_.type,_.key,_.props,null,f.mode,v),v.ref=go(f,null,_),v.return=f,v;case ms:return _=su(_,f.mode,v),_.return=f,_;case Gi:var S=_._init;return p(f,S(_._payload),v)}if(bo(_)||uo(_))return _=zr(_,f.mode,v,null),_.return=f,_;Da(f,_)}return null}function h(f,_,v,S){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(f,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:return v.key===P?l(f,_,v,S):null;case ms:return v.key===P?c(f,_,v,S):null;case Gi:return P=v._init,h(f,_,P(v._payload),S)}if(bo(v)||uo(v))return P!==null?null:u(f,_,v,S,null);Da(f,v)}return null}function d(f,_,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,a(_,f,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ma:return f=f.get(S.key===null?v:S.key)||null,l(_,f,S,P);case ms:return f=f.get(S.key===null?v:S.key)||null,c(_,f,S,P);case Gi:var b=S._init;return d(f,_,v,b(S._payload),P)}if(bo(S)||uo(S))return f=f.get(v)||null,u(_,f,S,P,null);Da(_,S)}return null}function m(f,_,v,S){for(var P=null,b=null,w=_,L=_=0,q=null;w!==null&&L<v.length;L++){w.index>L?(q=w,w=null):q=w.sibling;var x=h(f,w,v[L],S);if(x===null){w===null&&(w=q);break}t&&w&&x.alternate===null&&e(f,w),_=s(x,_,L),b===null?P=x:b.sibling=x,b=x,w=q}if(L===v.length)return n(f,w),gt&&Tr(f,L),P;if(w===null){for(;L<v.length;L++)w=p(f,v[L],S),w!==null&&(_=s(w,_,L),b===null?P=w:b.sibling=w,b=w);return gt&&Tr(f,L),P}for(w=i(f,w);L<v.length;L++)q=d(w,f,L,v[L],S),q!==null&&(t&&q.alternate!==null&&w.delete(q.key===null?L:q.key),_=s(q,_,L),b===null?P=q:b.sibling=q,b=q);return t&&w.forEach(function(E){return e(f,E)}),gt&&Tr(f,L),P}function y(f,_,v,S){var P=uo(v);if(typeof P!="function")throw Error(he(150));if(v=P.call(v),v==null)throw Error(he(151));for(var b=P=null,w=_,L=_=0,q=null,x=v.next();w!==null&&!x.done;L++,x=v.next()){w.index>L?(q=w,w=null):q=w.sibling;var E=h(f,w,x.value,S);if(E===null){w===null&&(w=q);break}t&&w&&E.alternate===null&&e(f,w),_=s(E,_,L),b===null?P=E:b.sibling=E,b=E,w=q}if(x.done)return n(f,w),gt&&Tr(f,L),P;if(w===null){for(;!x.done;L++,x=v.next())x=p(f,x.value,S),x!==null&&(_=s(x,_,L),b===null?P=x:b.sibling=x,b=x);return gt&&Tr(f,L),P}for(w=i(f,w);!x.done;L++,x=v.next())x=d(w,f,L,x.value,S),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?L:x.key),_=s(x,_,L),b===null?P=x:b.sibling=x,b=x);return t&&w.forEach(function(V){return e(f,V)}),gt&&Tr(f,L),P}function g(f,_,v,S){if(typeof v=="object"&&v!==null&&v.type===gs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:e:{for(var P=v.key,b=_;b!==null;){if(b.key===P){if(P=v.type,P===gs){if(b.tag===7){n(f,b.sibling),_=r(b,v.props.children),_.return=f,f=_;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gi&&Zp(P)===b.type){n(f,b.sibling),_=r(b,v.props),_.ref=go(f,b,v),_.return=f,f=_;break e}n(f,b);break}else e(f,b);b=b.sibling}v.type===gs?(_=zr(v.props.children,f.mode,S,v.key),_.return=f,f=_):(S=xl(v.type,v.key,v.props,null,f.mode,S),S.ref=go(f,_,v),S.return=f,f=S)}return o(f);case ms:e:{for(b=v.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=su(v,f.mode,S),_.return=f,f=_}return o(f);case Gi:return b=v._init,g(f,_,b(v._payload),S)}if(bo(v))return m(f,_,v,S);if(uo(v))return y(f,_,v,S);Da(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=ru(v,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return g}var Vs=av(!0),lv=av(!1),Hl=pr(null),Vl=null,ws=null,of=null;function af(){of=ws=Vl=null}function lf(t){var e=Hl.current;mt(Hl),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Vl=t,of=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Vl===null)throw Error(he(308));ws=t,Vl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Nr=null;function cf(t){Nr===null?Nr=[t]:Nr.push(t)}function cv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function Qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,d=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(h=e,d=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){p=m.call(d,p,h);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(d,p,h):m,h==null)break e;p=St({},p,h);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else d={eventTime:d,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=d,l=p):u=u.next=d,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=p}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var ma={},ui=pr(ma),Qo=pr(ma),ea=pr(ma);function Dr(t){if(t===ma)throw Error(he(174));return t}function df(t,e){switch(ut(ea,e),ut(Qo,t),ut(ui,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}mt(ui),ut(ui,e)}function Gs(){mt(ui),mt(Qo),mt(ea)}function dv(t){Dr(ea.current);var e=Dr(ui.current),n=ed(e,t.type);e!==n&&(ut(Qo,t),ut(ui,n))}function hf(t){Qo.current===t&&(mt(ui),mt(Qo))}var _t=pr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function ff(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var pl=Di.ReactCurrentDispatcher,Qc=Di.ReactCurrentBatchConfig,Gr=0,yt=null,Nt=null,Ot=null,jl=!1,ko=!1,ta=0,sS=0;function qt(){throw Error(he(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(Gr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?cS:uS,t=n(i,r),ko){s=0;do{if(ko=!1,ta=0,25<=s)throw Error(he(301));s+=1,Ot=Nt=null,e.updateQueue=null,pl.current=dS,t=n(i,r)}while(ko)}if(pl.current=$l,e=Nt!==null&&Nt.next!==null,Gr=0,Ot=Nt=yt=null,jl=!1,e)throw Error(he(300));return t}function gf(){var t=ta!==0;return ta=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Bn(){if(Nt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Ot===null?yt.memoizedState:Ot.next;if(e!==null)Ot=e,Nt=t;else{if(t===null)throw Error(he(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ot===null?yt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function na(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Gr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,yt.lanes|=u,Wr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,Wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hv(){}function fv(t,e){var n=yt,i=Bn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,vf(gv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,ia(9,mv.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(he(349));Gr&30||pv(n,e,r)}return r}function pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mv(t,e,n,i){e.value=n,e.getSnapshot=i,vv(e)&&_v(t)}function gv(t,e,n){return n(function(){vv(e)&&_v(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function _v(t){var e=Ri(t,1);e!==null&&ni(e,t,1,-1)}function tm(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=lS.bind(null,yt,t),[e.memoizedState,t]}function ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function xv(){return Bn().memoizedState}function ml(t,e,n,i){var r=oi();yt.flags|=t,r.memoizedState=ia(1|e,n,void 0,i===void 0?null:i)}function mc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=ia(e,n,s,i);return}}yt.flags|=t,r.memoizedState=ia(1|e,n,s,i)}function nm(t,e){return ml(8390656,8,t,e)}function vf(t,e){return mc(2048,8,t,e)}function yv(t,e){return mc(4,2,t,e)}function Sv(t,e){return mc(4,4,t,e)}function Mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ev(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,Mv.bind(null,e,t),n)}function _f(){}function wv(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tv(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return Gr&21?(ri(n,e)||(n=L0(),yt.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function oS(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{st=n,Qc.transition=i}}function bv(){return Bn().memoizedState}function aS(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cv(t))Rv(e,n);else if(n=cv(t,e,n,i),n!==null){var r=on();ni(n,t,i,r),Pv(n,e,i)}}function lS(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cv(t))Rv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=cv(t,e,r,i),n!==null&&(r=on(),ni(n,t,i,r),Pv(n,e,i))}}function Cv(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Rv(t,e){ko=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var $l={readContext:zn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},cS={readContext:zn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,Mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=aS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:_f,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=oS.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=oi();if(gt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),zt===null)throw Error(he(349));Gr&30||pv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,nm(gv.bind(null,i,s,t),[t]),i.flags|=2048,ia(9,mv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=zt.identifierPrefix;if(gt){var n=Ei,i=Mi;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uS={readContext:zn,useCallback:wv,useContext:zn,useEffect:vf,useImperativeHandle:Ev,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:Tv,useReducer:eu,useRef:xv,useState:function(){return eu(na)},useDebugValue:_f,useDeferredValue:function(t){var e=Bn();return Av(e,Nt.memoizedState,t)},useTransition:function(){var t=eu(na)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:bv,unstable_isNewReconciler:!1},dS={readContext:zn,useCallback:wv,useContext:zn,useEffect:vf,useImperativeHandle:Ev,useInsertionEffect:yv,useLayoutEffect:Sv,useMemo:Tv,useReducer:tu,useRef:xv,useState:function(){return tu(na)},useDebugValue:_f,useDeferredValue:function(t){var e=Bn();return Nt===null?e.memoizedState=t:Av(e,Nt.memoizedState,t)},useTransition:function(){var t=tu(na)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:fv,useId:bv,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=ir(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(ni(e,t,r,i),fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=ir(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(ni(e,t,r,i),fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=ir(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(ni(e,t,i,n),fl(e,t,i))}};function im(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,i)||!Yo(r,s):!0}function Lv(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=gn(e)?Hr:nn.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function Md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=gn(e)?Hr:nn.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=zx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hS=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Dd=i),Ed(t,e)},n}function Dv(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ed(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=AS.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var fS=Di.ReactCurrentOwner,pn=!1;function sn(t,e,n,i){e.child=t===null?lv(e,null,n,i):Vs(e,t.child,n,i)}function lm(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(gt&&n&&nf(e),e.flags|=1,sn(t,e,i,r),e.child)}function cm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Iv(t,e,s,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Iv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Yo(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return wd(t,e,n,i,r)}function Uv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(As,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(As,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(As,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(As,wn),wn|=i;return sn(t,e,r,n),e.child}function kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,i,r){var s=gn(n)?Hr:nn.current;return s=Bs(e,s),Ds(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(gt&&i&&nf(e),e.flags|=1,sn(t,e,n,r),e.child)}function um(t,e,n,i,r){if(gn(n)){var s=!0;Ol(e)}else s=!1;if(Ds(e,r),e.stateNode===null)gl(t,e),Lv(e,n,i),Md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=gn(n)?Hr:nn.current,c=Bs(e,c));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rm(e,o,i,c),Wi=!1;var h=e.memoizedState;o.state=h,Gl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||mn.current||Wi?(typeof u=="function"&&(Sd(e,n,u,i),l=e.memoizedState),(a=Wi||im(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,uv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:$n(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=gn(n)?Hr:nn.current,l=Bs(e,l));var d=n.getDerivedStateFromProps;(u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&rm(e,o,i,l),Wi=!1,h=e.memoizedState,o.state=h,Gl(e,i,o,r);var m=e.memoizedState;a!==p||h!==m||mn.current||Wi?(typeof d=="function"&&(Sd(e,n,d,i),m=e.memoizedState),(c=Wi||im(e,n,c,i,h,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Td(t,e,n,i,s,r)}function Td(t,e,n,i,r,s){kv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yp(e,n,!1),Pi(t,e,s);i=e.stateNode,fS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&Yp(e,n,!0),e.child}function Fv(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),df(t,e.containerInfo)}function dm(t,e,n,i,r){return Hs(),sf(r),e.flags|=256,sn(t,e,n,i),e.child}var Ad={dehydrated:null,treeContext:null,retryLane:0};function bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ov(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bd(n),e.memoizedState=Ad,t):xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ad,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xf(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&sf(i),Vs(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(he(422))),Ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=bd(o),e.memoizedState=Ad,s);if(!(e.mode&1))return Ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=nu(s,i,void 0),Ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),ni(i,t,r,-1))}return Tf(),i=nu(Error(he(421))),Ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=er(r.nextSibling),Cn=e,gt=!0,Jn=null,t!==null&&(In[Un++]=Mi,In[Un++]=Ei,In[Un++]=Vr,Mi=t.id,Ei=t.overflow,Vr=e),e=xf(e,i.children),e.flags|=4096,e)}function hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yd(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,n,e);else if(t.tag===19)hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mS(t,e,n){switch(e.tag){case 3:Fv(e),Hs();break;case 5:dv(e);break;case 1:gn(e.type)&&Ol(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Ov(t,e,n):(ut(_t,_t.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,n)}return Pi(t,e,n)}var Bv,Cd,Hv,Vv;Bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cd=function(){};Hv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(ui.current);var s=null;switch(n){case"input":r=Ku(t,r),i=Ku(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Qu(t,r),i=Qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}td(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Vv=function(t,e,n,i){n!==i&&(e.flags|=4)};function vo(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gS(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return gn(e.type)&&Fl(),Yt(e),null;case 3:return i=e.stateNode,Gs(),mt(mn),mt(nn),ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(kd(Jn),Jn=null))),Cd(t,e),Yt(e),null;case 5:hf(e);var r=Dr(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Yt(e),null}if(t=Dr(ui.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)ht(Ro[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Sp(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Ep(i,s),ht("invalid",i)}td(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":Ea(i),Mp(i,s,!0);break;case"textarea":Ea(i),wp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[Zo]=i,Bv(t,e,!1,!1),e.stateNode=t;e:{switch(o=nd(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ro.length;r++)ht(Ro[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Sp(t,i),r=Ku(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Ep(t,i),r=Qu(t,i),ht("invalid",t);break;default:r=i}td(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?x0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":Ea(t),Mp(t,i,!1);break;case"textarea":Ea(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Vv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Dr(ea.current),Dr(ui.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:La(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Yt(e),null;case 13:if(mt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&An!==null&&e.mode&1&&!(e.flags&128))ov(),Hs(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[li]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Jn!==null&&(kd(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Dt===0&&(Dt=3):Tf())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Gs(),Cd(t,e),t===null&&Ko(e.stateNode.containerInfo),Yt(e),null;case 10:return lf(e.type._context),Yt(e),null;case 17:return gn(e.type)&&Fl(),Yt(e),null;case 19:if(mt(_t),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wl(t),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>js&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Yt(e),null}else 2*bt()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function vS(t,e){switch(rf(e),e.tag){case 1:return gn(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),mt(mn),mt(nn),ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(mt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(_t),null;case 4:return Gs(),null;case 10:return lf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var Ua=!1,Qt=!1,_S=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Rd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var fm=!1;function xS(t,e){if(hd=Dl,t=X0(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,p=t,h=null;t:for(;;){for(var d;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(d=p.firstChild)!==null;)h=p,p=d;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(d=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:t,selectionRange:n},Dl=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:$n(e.type,y),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(S){wt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return m=fm,fm=!1,m}function Fo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rd(e,n,s)}r=r.next}while(r!==i)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gv(t){var e=t.alternate;e!==null&&(t.alternate=null,Gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Zo],delete e[gd],delete e[tS],delete e[nS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wv(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}function Nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}var Ht=null,Xn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)jv(t,e,n),n=n.sibling}function jv(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:Qt||Ts(n,e);case 6:var i=Ht,r=Xn;Ht=null,Ui(t,e,n),Ht=i,Xn=r,Ht!==null&&(Xn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Xn?(t=Ht,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Xo(t)):Kc(Ht,n.stateNode));break;case 4:i=Ht,r=Xn,Ht=n.stateNode.containerInfo,Xn=!0,Ui(t,e,n),Ht=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rd(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Qt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Ui(t,e,n),Qt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _S),e.forEach(function(i){var r=CS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Xn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Xn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Ht===null)throw Error(he(160));jv(s,o,r),Ht=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),si(t),i&4){try{Fo(3,t,t.return),vc(3,t)}catch(y){wt(t,t.return,y)}try{Fo(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:Vn(e,t),si(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Vn(e,t),si(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Go(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),nd(a,o);var c=nd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],p=l[o+1];u==="style"?x0(r,p):u==="dangerouslySetInnerHTML"?v0(r,p):u==="children"?Go(r,p):Vh(r,u,p,c)}switch(a){case"input":Ju(r,s);break;case"textarea":m0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Rs(r,!!s.multiple,d,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(y){wt(t,t.return,y)}}break;case 6:if(Vn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if(Vn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:Vn(e,t),si(t);break;case 13:Vn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=bt())),i&4&&mm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,Vn(e,t),Qt=c):Vn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Pe=t,u=t.child;u!==null;){for(p=Pe=u;Pe!==null;){switch(h=Pe,d=h.child,h.tag){case 0:case 11:case 14:case 15:Fo(4,h,h.return);break;case 1:Ts(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:Ts(h,h.return);break;case 22:if(h.memoizedState!==null){vm(p);continue}}d!==null?(d.return=h,Pe=d):vm(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_0("display",o))}catch(y){wt(t,t.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){wt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vn(e,t),si(t),i&4&&mm(t);break;case 21:break;default:Vn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wv(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=pm(t);Nd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pm(t);Ld(t,a,o);break;default:throw Error(he(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yS(t,e,n){Pe=t,Xv(t)}function Xv(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Ua;var c=Qt;if(Ua=o,(Qt=l)&&!c)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?_m(r):l!==null?(l.return=o,Pe=l):_m(r);for(;s!==null;)Pe=s,Xv(s),s=s.sibling;Pe=r,Ua=a,Qt=c}gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):gm(t)}}function gm(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Xo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Qt||e.flags&512&&Pd(e)}catch(h){wt(e,e.return,h)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function vm(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function _m(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Pd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Pd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var SS=Math.ceil,Xl=Di.ReactCurrentDispatcher,yf=Di.ReactCurrentOwner,On=Di.ReactCurrentBatchConfig,Qe=0,zt=null,Lt=null,jt=0,wn=0,As=pr(0),Dt=0,ra=null,Wr=0,_c=0,Sf=0,Oo=null,hn=null,Mf=0,js=1/0,yi=null,ql=!1,Dd=null,nr=null,ka=!1,Yi=null,Yl=0,zo=0,Id=null,vl=-1,_l=0;function on(){return Qe&6?bt():vl!==-1?vl:vl=bt()}function ir(t){return t.mode&1?Qe&2&&jt!==0?jt&-jt:rS.transition!==null?(_l===0&&(_l=L0()),_l):(t=st,t!==0||(t=window.event,t=t===void 0?16:O0(t.type)),t):1}function ni(t,e,n,i){if(50<zo)throw zo=0,Id=null,Error(he(185));ha(t,n,i),(!(Qe&2)||t!==zt)&&(t===zt&&(!(Qe&2)&&(_c|=n),Dt===4&&$i(t,jt)),vn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(js=bt()+500,pc&&mr()))}function vn(t,e){var n=t.callbackNode;ry(t,e);var i=Nl(t,t===zt?jt:0);if(i===0)n!==null&&bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bp(n),e===1)t.tag===0?iS(xm.bind(null,t)):iv(xm.bind(null,t)),Qy(function(){!(Qe&6)&&mr()}),n=null;else{switch(N0(i)){case 1:n=Xh;break;case 4:n=R0;break;case 16:n=Ll;break;case 536870912:n=P0;break;default:n=Ll}n=t_(n,qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qv(t,e){if(vl=-1,_l=0,Qe&6)throw Error(he(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Nl(t,t===zt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=Qe;Qe|=2;var s=Kv();(zt!==t||jt!==e)&&(yi=null,js=bt()+500,Or(t,e));do try{wS();break}catch(a){Yv(t,a)}while(!0);af(),Xl.current=s,Qe=r,Lt!==null?e=0:(zt=null,jt=0,e=Dt)}if(e!==0){if(e===2&&(r=ad(t),r!==0&&(i=r,e=Ud(t,r))),e===1)throw n=ra,Or(t,0),$i(t,i),vn(t,bt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!MS(r)&&(e=Kl(t,i),e===2&&(s=ad(t),s!==0&&(i=s,e=Ud(t,s))),e===1))throw n=ra,Or(t,0),$i(t,i),vn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Ar(t,hn,yi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Mf+500-bt(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=md(Ar.bind(null,t,hn,yi),e);break}Ar(t,hn,yi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*SS(i/1960))-i,10<i){t.timeoutHandle=md(Ar.bind(null,t,hn,yi),i);break}Ar(t,hn,yi);break;case 5:Ar(t,hn,yi);break;default:throw Error(he(329))}}}return vn(t,bt()),t.callbackNode===n?qv.bind(null,t):null}function Ud(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=hn,hn=n,e!==null&&kd(e)),t}function kd(t){hn===null?hn=t:hn.push.apply(hn,t)}function MS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Sf,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(Qe&6)throw Error(he(327));Is();var e=Nl(t,0);if(!(e&1))return vn(t,bt()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=ad(t);i!==0&&(e=i,n=Ud(t,i))}if(n===1)throw n=ra,Or(t,0),$i(t,e),vn(t,bt()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,hn,yi),vn(t,bt()),null}function Ef(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(js=bt()+500,pc&&mr())}}function jr(t){Yi!==null&&Yi.tag===0&&!(Qe&6)&&Is();var e=Qe;Qe|=1;var n=On.transition,i=st;try{if(On.transition=null,st=1,t)return t()}finally{st=i,On.transition=n,Qe=e,!(Qe&6)&&mr()}}function wf(){wn=As.current,mt(As)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zy(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Gs(),mt(mn),mt(nn),ff();break;case 5:hf(i);break;case 4:Gs();break;case 13:mt(_t);break;case 19:mt(_t);break;case 10:lf(i.type._context);break;case 22:case 23:wf()}n=n.return}if(zt=t,Lt=t=rr(t.current,null),jt=wn=e,Dt=0,ra=null,Sf=_c=Wr=0,hn=Oo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function Yv(t,e){do{var n=Lt;try{if(af(),pl.current=$l,jl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(Gr=0,Ot=Nt=yt=null,ko=!1,ta=0,yf.current=null,n===null||n.return===null){Dt=1,ra=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var d=om(o);if(d!==null){d.flags&=-257,am(d,o,a,s,e),d.mode&1&&sm(s,c,e),e=d,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){sm(s,c,e),Tf();break e}l=Error(he(426))}}else if(gt&&a.mode&1){var g=om(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),am(g,o,a,s,e),sf(Ws(l,a));break e}}s=l=Ws(l,a),Dt!==4&&(Dt=2),Oo===null?Oo=[s]:Oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Nv(s,l,e);Qp(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Dv(s,a,e);Qp(s,S);break e}}s=s.return}while(s!==null)}Zv(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Kv(){var t=Xl.current;return Xl.current=$l,t===null?$l:t}function Tf(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),zt===null||!(Wr&268435455)&&!(_c&268435455)||$i(zt,jt)}function Kl(t,e){var n=Qe;Qe|=2;var i=Kv();(zt!==t||jt!==e)&&(yi=null,Or(t,e));do try{ES();break}catch(r){Yv(t,r)}while(!0);if(af(),Qe=n,Xl.current=i,Lt!==null)throw Error(he(261));return zt=null,jt=0,Dt}function ES(){for(;Lt!==null;)Jv(Lt)}function wS(){for(;Lt!==null&&!Yx();)Jv(Lt)}function Jv(t){var e=e_(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Zv(t):Lt=e,yf.current=null}function Zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vS(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Lt=null;return}}else if(n=gS(n,e,wn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Ar(t,e,n){var i=st,r=On.transition;try{On.transition=null,st=1,TS(t,e,n,i)}finally{On.transition=r,st=i}return null}function TS(t,e,n,i){do Is();while(Yi!==null);if(Qe&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sy(t,s),t===zt&&(Lt=zt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,t_(Ll,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=st;st=1;var a=Qe;Qe|=4,yf.current=null,xS(t,n),$v(n,t),jy(fd),Dl=!!hd,fd=hd=null,t.current=n,yS(n),Kx(),Qe=a,st=o,On.transition=s}else t.current=n;if(ka&&(ka=!1,Yi=t,Yl=r),s=t.pendingLanes,s===0&&(nr=null),Qx(n.stateNode),vn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Dd,Dd=null,t;return Yl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Id?zo++:(zo=0,Id=t):zo=0,mr(),null}function Is(){if(Yi!==null){var t=N0(Yl),e=On.transition,n=st;try{if(On.transition=null,st=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Yl=0,Qe&6)throw Error(he(331));var r=Qe;for(Qe|=4,Pe=t.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Pe=c;Pe!==null;){var u=Pe;switch(u.tag){case 0:case 11:case 15:Fo(8,u,s)}var p=u.child;if(p!==null)p.return=u,Pe=p;else for(;Pe!==null;){u=Pe;var h=u.sibling,d=u.return;if(Gv(u),u===c){Pe=null;break}if(h!==null){h.return=d,Pe=h;break}Pe=d}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Pe=f;break e}Pe=s.return}}var _=t.current;for(Pe=_;Pe!==null;){o=Pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Pe=v;else e:for(o=_;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vc(9,a)}}catch(P){wt(a,a.return,P)}if(a===o){Pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Pe=S;break e}Pe=a.return}}if(Qe=r,mr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(cc,t)}catch{}i=!0}return i}finally{st=n,On.transition=e}}return!1}function ym(t,e,n){e=Ws(n,e),e=Nv(t,e,1),t=tr(t,e,1),e=on(),t!==null&&(ha(t,1,e),vn(t,e))}function wt(t,e,n){if(t.tag===3)ym(t,t,n);else for(;e!==null;){if(e.tag===3){ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Ws(n,t),t=Dv(e,t,1),e=tr(e,t,1),t=on(),e!==null&&(ha(e,1,t),vn(e,t));break}}e=e.return}}function AS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(jt&n)===n&&(Dt===4||Dt===3&&(jt&130023424)===jt&&500>bt()-Mf?Or(t,0):Sf|=n),vn(t,e)}function Qv(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=on();t=Ri(t,e),t!==null&&(ha(t,e,n),vn(t,n))}function bS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qv(t,n)}function CS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),Qv(t,n)}var e_;e_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,mS(t,e,n);pn=!!(t.flags&131072)}else pn=!1,gt&&e.flags&1048576&&rv(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Bs(e,nn.current);Ds(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uf(e),r.updater=gc,e.stateNode=r,r._reactInternals=e,Md(e,i,t,n),e=Td(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&nf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=PS(i),t=$n(i,t),r){case 0:e=wd(null,e,i,t,n);break e;case 1:e=um(null,e,i,t,n);break e;case 11:e=lm(null,e,i,t,n);break e;case 14:e=cm(null,e,i,$n(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),wd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),um(t,e,i,r,n);case 3:e:{if(Fv(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,uv(t,e),Gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(he(423)),e),e=dm(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(he(424)),e),e=dm(t,e,i,n,r);break e}else for(An=er(e.stateNode.containerInfo.firstChild),Cn=e,gt=!0,Jn=null,n=lv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Pi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return dv(e),t===null&&xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,pd(i,r)?o=null:s!==null&&pd(i,s)&&(e.flags|=32),kv(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&xd(e),null;case 13:return Ov(t,e,n);case 4:return df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),lm(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Hl,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!mn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=zn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),cm(t,e,i,r,n);case 15:return Iv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),gl(t,e),e.tag=1,gn(i)?(t=!0,Ol(e)):t=!1,Ds(e,n),Lv(e,i,r),Md(e,i,r,n),Td(null,e,i,!0,t,n);case 19:return zv(t,e,n);case 22:return Uv(t,e,n)}throw Error(he(156,e.tag))};function t_(t,e){return C0(t,e)}function RS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new RS(t,e,n,i)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PS(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===jh)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return zr(n.children,r,s,e);case Gh:o=8,r|=8;break;case $u:return t=Fn(12,n,e,r|2),t.elementType=$u,t.lanes=s,t;case Xu:return t=Fn(13,n,e,r),t.elementType=Xu,t.lanes=s,t;case qu:return t=Fn(19,n,e,r),t.elementType=qu,t.lanes=s,t;case d0:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:o=10;break e;case u0:o=9;break e;case Wh:o=11;break e;case jh:o=14;break e;case Gi:o=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bf(t,e,n,i,r,s,o,a,l){return t=new LS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function NS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function n_(t){if(!t)return cr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(gn(n))return nv(t,n,e)}return e}function i_(t,e,n,i,r,s,o,a,l){return t=bf(n,i,!0,t,r,s,o,a,l),t.context=n_(null),n=t.current,i=on(),r=ir(n),s=Ai(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,ha(t,r,i),vn(t,i),t}function yc(t,e,n,i){var r=e.current,s=on(),o=ir(r);return n=n_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(ni(t,r,o,s),fl(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function DS(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rf(t){this._internalRoot=t}Sc.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));yc(t,e,null,null)};Sc.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){yc(null,t,null,null)}),e[Ci]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=U0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&F0(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function IS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=i_(e,i,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[Ci]=o.current,Ko(t.nodeType===8?t.parentNode:t),jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=bf(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=l,t[Ci]=l.current,Ko(t.nodeType===8?t.parentNode:t),jr(function(){yc(e,l,n,i)}),l}function Ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}yc(e,o,t,r)}else o=IS(n,e,t,r,i);return Jl(o)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(qh(e,n|1),vn(e,bt()),!(Qe&6)&&(js=bt()+500,mr()))}break;case 13:jr(function(){var i=Ri(t,1);if(i!==null){var r=on();ni(i,t,1,r)}}),Cf(t,1)}};Yh=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=on();ni(e,t,134217728,n)}Cf(t,134217728)}};I0=function(t){if(t.tag===13){var e=ir(t),n=Ri(t,e);if(n!==null){var i=on();ni(n,t,e,i)}Cf(t,e)}};U0=function(){return st};k0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};rd=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(he(90));f0(i),Ju(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};M0=Ef;E0=jr;var US={usingClientEntryPoint:!1,Events:[pa,ys,fc,y0,S0,Ef]},_o={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kS={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A0(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||DS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{cc=Fa.inject(kS),ci=Fa}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=US;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(he(200));return NS(t,e,null,n)};Pn.createRoot=function(t,e){if(!Pf(t))throw Error(he(299));var n=!1,i="",r=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bf(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Ko(t.nodeType===8?t.parentNode:t),new Rf(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=A0(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return jr(t)};Pn.hydrate=function(t,e,n){if(!Mc(e))throw Error(he(200));return Ec(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=r_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=i_(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,Ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sc(e)};Pn.render=function(t,e,n){if(!Mc(e))throw Error(he(200));return Ec(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(he(40));return t._reactRootContainer?(jr(function(){Ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Pn.unstable_batchedUpdates=Ef;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Mc(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return Ec(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),s0.exports=Pn;var FS=s0.exports,o_,Em=FS;o_=Em.createRoot,Em.hydrateRoot;const Se={sun:"#FBC426",sunDeep:"#D99A0F",tomato:"#F64034",tomatoDeep:"#C42A22",teal:"#169996",tealDeep:"#0B7A77",cobalt:"#2760BF",cobaltDeep:"#1C4790",grape:"#6B4BC4",caramel:"#DA8A47",caramelDeep:"#B96C33",cream:"#F0BE82",snoutNose:"#B97C52",paw:"#7A4220",pupil:"#3A2210",ink:"#26304A",white:"#FFFFFF",eyeWhite:"#FBFBF8",paper:"#FFF6EA",grass:"#5DBB46",grassDeep:"#3F9A35",sky:"#70BCD6",wood:"#C98B55",woodDeep:"#9E6436",sunSoft:"#FFE6A8",tealSoft:"#CDEFEC",cobaltSoft:"#C9D8F4"},OS=[Se.tomato,Se.teal,Se.sun,Se.cobalt,Se.grape],a_=[{type:"rug",stars:3,w:2,d:2,floor:!0,colors:[Se.teal,Se.tomato,Se.sun,Se.cobalt,Se.grape]},{type:"plant",stars:3,w:1,d:1,colors:[Se.tomato,Se.cobalt,Se.sun,Se.teal,Se.white]},{type:"beanbag",stars:4,w:1,d:1,colors:[Se.sun,...OS.filter(t=>t!==Se.sun)]},{type:"lamp",stars:5,w:1,d:1,colors:[Se.cobalt,Se.sun,Se.tomato,Se.teal,Se.white]},{type:"table",stars:6,w:1,d:1,colors:[Se.white,Se.teal,Se.tomato,Se.sun,Se.cobalt]},{type:"shelf",stars:8,w:1,d:1,colors:[Se.white,Se.sun,Se.teal,Se.tomato,Se.cobalt]},{type:"fishbowl",stars:10,w:1,d:1,colors:[Se.teal,Se.tomato,Se.sun,Se.white,Se.grape]},{type:"bed",stars:12,w:1,d:2,colors:[Se.cobalt,Se.teal,Se.tomato,Se.sun,Se.grape]},{type:"kitty",stars:20,w:1,d:1,colors:["#E58C3A","#5B4A73",Se.white,"#9E9E9E","#E9C8A0"],rare:!0}],ur=t=>a_.find(e=>e.type===t),zS={practice:"Practice",backToRoom:"My room",treasures:"Treasures",close:"Close",langSwitch:"Cambiar a español",soundOn:"Sound on",soundOff:"Sound off",starsLabel:t=>`${t} ${t===1?"star":"stars"}`,meetTitle:"Meet your buddy!",pickKind:"Is your buddy a boy or a girl?",boy:"Boy",girl:"Girl",nameAsk:()=>"What will you call your buddy?",namePlaceholder:"Type a name",start:"Let's go!",treasuresTitle:"Treasures",unlock:"Unlock",place:"Place",inRoom:"In your room",locked:"Locked",newTag:"New",rareTag:"Rare",needMore:t=>`${t} more`,unlocked:"Unlocked!",placeHint:"Tap the floor to place it",noRoom:"It doesn't fit there",turn:"Turn",color:"Color",move:"Move",putAway:"Put away",done:"Done",cancel:"Cancel",items:{rug:"Rug",plant:"Plant",beanbag:"Beanbag",lamp:"Lamp",table:"Table",shelf:"Bookshelf",fishbowl:"Fishbowl",bed:"Bed",kitty:"Kitty"},practiceTitle:"Practice",play:"Play",soon:"Soon",modules:{borrow:"Borrowing",times:"Times tables",arrays:"Arrays",division:"Sharing",words:"Story math"},borrowSteps:["Blocks","Discs","Pencil"]},BS={practice:"Practicar",backToRoom:"Mi cuarto",treasures:"Tesoros",close:"Cerrar",langSwitch:"Switch to English",soundOn:"Sonido activado",soundOff:"Sonido apagado",starsLabel:t=>`${t} ${t===1?"estrella":"estrellas"}`,meetTitle:"¡Conoce a tu amigo!",pickKind:"¿Tu amigo es chico o chica?",boy:"Chico",girl:"Chica",nameAsk:t=>t==="girl"?"¿Cómo se va a llamar tu amiga?":"¿Cómo se va a llamar tu amigo?",namePlaceholder:"Escribe un nombre",start:"¡Vamos!",treasuresTitle:"Tesoros",unlock:"Desbloquear",place:"Poner",inRoom:"En tu cuarto",locked:"Bloqueado",newTag:"Nuevo",rareTag:"Raro",needMore:t=>`Faltan ${t}`,unlocked:"¡Desbloqueado!",placeHint:"Toca el piso para ponerlo",noRoom:"No cabe ahí",turn:"Girar",color:"Color",move:"Mover",putAway:"Guardar",done:"Listo",cancel:"Cancelar",items:{rug:"Alfombra",plant:"Planta",beanbag:"Puf",lamp:"Lámpara",table:"Mesa",shelf:"Librero",fishbowl:"Pecera",bed:"Cama",kitty:"Gatito"},practiceTitle:"Practicar",play:"Jugar",soon:"Pronto",modules:{borrow:"Prestando",times:"Tablas",arrays:"Arreglos",division:"Repartir",words:"Cuentos"},borrowSteps:["Bloques","Fichas","Lápiz"]},wc={en:zS,es:BS},l_="mathbuddy_game",pt=8;function wm(){var t;return{version:1,name:null,kind:"boy",lang:(t=navigator.language)!=null&&t.toLowerCase().startsWith("es")?"es":"en",stars:5,unlocked:["rug","plant"],newSince:{},room:[{id:1,type:"rug",x:3,z:3,rot:0,color:0},{id:2,type:"plant",x:0,z:0,rot:0,color:0}],nextId:3,borrow:{level:0,rounds:0},tables:{}}}function HS(){try{const t=localStorage.getItem(l_);if(t){const e=JSON.parse(t);if(e&&e.version===1)return{...wm(),...e}}}catch{}return wm()}function VS(t){try{localStorage.setItem(l_,JSON.stringify(t))}catch{}}function $r(t,e){const n=ur(t);return e%2?[n.d,n.w]:[n.w,n.d]}function Fd(t,e,n,i){const[r,s]=$r(t,i),o=[];for(let a=0;a<r;a++)for(let l=0;l<s;l++)o.push(`${e+a},${n+l}`);return o}function Od(t,e,n,i,r,s){const[o,a]=$r(e,r);if(n<0||i<0||n+o>pt||i+a>pt)return!1;const l=new Set(Fd(e,n,i,r)),c=!!ur(e).floor;for(const u of t)if(!(u.id===s||!!ur(u.type).floor!==c)&&Fd(u.type,u.x,u.z,u.rot).some(p=>l.has(p)))return!1;return!0}function GS(t,e,n=0){const i=[];for(let r=0;r<pt;r++)for(let s=0;s<pt;s++)i.push({x:r,z:s,dist:Math.hypot(r-3.5,s-3.5)});return i.sort((r,s)=>r.dist-s.dist),i.find(r=>Od(t,e,r.x,r.z,n))??null}let yl=HS();const zd=new Set;function qn(t){yl=t(yl),VS(yl),zd.forEach(e=>e())}function Bd(t){qn(e=>({...e,stars:e.stars+t}))}function io(){return fe.useSyncExternalStore(t=>(zd.add(t),()=>zd.delete(t)),()=>yl)}const WS="/assets/borrow-1-DdXRa0y5.mp3",jS="/assets/borrow-2-CsGU7TvO.mp3",$S="/assets/challenge-complete-1-DiztpUg3.mp3",XS="/assets/correct-1-Cxe9oZf0.mp3",qS="/assets/correct-2-CP32RgpO.mp3",YS="/assets/correct-3-DaF8zjki.mp3",KS="/assets/correct-4-kvEkctCa.mp3",JS="/assets/correct-5-CKRYNvBQ.mp3",ZS="/assets/correct-6-DLINnVAn.mp3",QS="/assets/mulwelcome-1-CgS35O77.mp3",eM="/assets/mulwelcome-2-DlZzx8_z.mp3",tM="/assets/reminder-1-BuGFeBCq.mp3",nM="/assets/tryagain-1-Dnn6n6oO.mp3",iM="/assets/tryagain-2-CW8fu__V.mp3",rM="/assets/tryagain-3-B7FpGqd5.mp3",sM="/assets/tryagain-4-BDc1lCck.mp3",oM="/assets/tryagain-5-BazJO3hL.mp3",aM="/assets/tryagain-6-DBiBBYBm.mp3",lM="/assets/welcome-1-__LCmQuX.mp3",cM="/assets/welcome-2-qJ14_W2O.mp3",uM=Object.assign({"./voice/borrow-1.mp3":WS,"./voice/borrow-2.mp3":jS,"./voice/challenge-complete-1.mp3":$S,"./voice/correct-1.mp3":XS,"./voice/correct-2.mp3":qS,"./voice/correct-3.mp3":YS,"./voice/correct-4.mp3":KS,"./voice/correct-5.mp3":JS,"./voice/correct-6.mp3":ZS,"./voice/mulwelcome-1.mp3":QS,"./voice/mulwelcome-2.mp3":eM,"./voice/reminder-1.mp3":tM,"./voice/tryagain-1.mp3":nM,"./voice/tryagain-2.mp3":iM,"./voice/tryagain-3.mp3":rM,"./voice/tryagain-4.mp3":sM,"./voice/tryagain-5.mp3":oM,"./voice/tryagain-6.mp3":aM,"./voice/welcome-1.mp3":lM,"./voice/welcome-2.mp3":cM}),dM=Object.assign({});function Tm(t){const e=new Map;for(const[n,i]of Object.entries(t)){const s=n.split("/").pop().replace(/\.[^.]+$/,"").replace(/-\d+$/,"");e.has(s)||e.set(s,[]),e.get(s).push(i)}return e}const c_={voice:Tm(uM),sfx:Tm(dM)},u_="mathbuddy_sound";let Zl=hM();const Hd=new Set;function hM(){try{return localStorage.getItem(u_)!=="off"}catch{return!0}}function fM(){return Zl}function pM(t){Zl=t;try{localStorage.setItem(u_,t?"on":"off")}catch{}t||p_(),Hd.forEach(e=>e(t))}function mM(t){return Hd.add(t),()=>Hd.delete(t)}let Yn=null,ou=null;const d_={},Am=new Map;let Ir=null;const bm=new Map,gM={voice:1,sfx:.8};function Lf(){if(Yn)return Yn;const t=window.AudioContext||window.webkitAudioContext;return t?(Yn=new t,ou=Yn.createGain(),ou.connect(Yn.destination),["voice","sfx"].forEach(e=>{const n=Yn.createGain();n.gain.value=gM[e],n.connect(ou),d_[e]=n}),Yn):null}function h_(t){let e=Am.get(t);if(!e){const n=Lf();e=n?fetch(t).then(i=>i.arrayBuffer()).then(i=>new Promise(r=>n.decodeAudioData(i,r,()=>r(null)))).catch(()=>null):Promise.resolve(null),Am.set(t,e)}return e}function vM(){["voice","sfx"].forEach(t=>c_[t].forEach(e=>e.forEach(n=>void h_(n))))}let Cm=!1;function _M(){const t=Lf();if(!t||(t.state==="suspended"&&t.resume(),Cm))return;Cm=!0;const e=t.createBuffer(1,1,22050),n=t.createBufferSource();n.buffer=e,n.connect(t.destination),n.start(0),vM()}if(typeof window<"u"){const t=()=>_M();["pointerdown","touchend","keydown"].forEach(e=>window.addEventListener(e,t,{passive:!0})),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(Yn==null?void 0:Yn.state)==="suspended"&&Yn.resume()})}function xM(t,e){if(e.length===1)return e[0];const n=bm.get(t),i=e.filter(s=>s!==n),r=i[Math.floor(Math.random()*i.length)];return bm.set(t,r),r}async function f_(t,e,n={}){if(!Zl)return;const i=c_[t].get(e);if(!(i!=null&&i.length))return;const r=Lf();if(!r)return;const s=await h_(xM(t+":"+e,i));if(!s||!Zl)return;const o=r.createBufferSource();o.buffer=s;const a=n.variance??(t==="sfx"?.5:0),l=((n.semitones??0)+(Math.random()*2-1)*a)*100;o.playbackRate.value=Math.pow(2,l/1200);const c=r.createGain();return c.gain.value=n.volume??1,o.connect(c),c.connect(d_[t]),t==="voice"&&(p_(),Ir=o),new Promise(u=>{o.onended=()=>{Ir===o&&(Ir=null),u()},o.start(r.currentTime+(n.delay??0))})}function Br(t,e){return f_("voice",t,e)}function Pt(t,e){return f_("sfx",t,e)}function p_(){if(Ir){try{Ir.onended=null,Ir.stop()}catch{}Ir=null}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="169",yM=0,Rm=1,SM=2,m_=1,Df=2,xi=3,dr=0,_n=1,kn=2,sr=0,Us=1,Pm=2,Lm=3,Nm=4,MM=5,Rr=100,EM=101,wM=102,TM=103,AM=104,bM=200,CM=201,RM=202,PM=203,Vd=204,Gd=205,LM=206,NM=207,DM=208,IM=209,UM=210,kM=211,FM=212,OM=213,zM=214,Wd=0,jd=1,$d=2,$s=3,Xd=4,qd=5,Yd=6,Kd=7,g_=0,BM=1,HM=2,or=0,VM=1,GM=2,WM=3,jM=4,$M=5,XM=6,qM=7,v_=300,Xs=301,qs=302,Jd=303,Zd=304,Tc=306,Ql=1e3,Ur=1001,Qd=1002,en=1003,YM=1004,Oa=1005,Zn=1006,au=1007,kr=1008,Li=1009,__=1010,x_=1011,sa=1012,If=1013,Xr=1014,wi=1015,ga=1016,Uf=1017,kf=1018,Ys=1020,y_=35902,S_=1021,M_=1022,ei=1023,E_=1024,w_=1025,ks=1026,Ks=1027,Ff=1028,Of=1029,T_=1030,zf=1031,Bf=1033,Sl=33776,Ml=33777,El=33778,wl=33779,eh=35840,th=35841,nh=35842,ih=35843,rh=36196,sh=37492,oh=37496,ah=37808,lh=37809,ch=37810,uh=37811,dh=37812,hh=37813,fh=37814,ph=37815,mh=37816,gh=37817,vh=37818,_h=37819,xh=37820,yh=37821,Tl=36492,Sh=36494,Mh=36495,A_=36283,Eh=36284,wh=36285,Th=36286,KM=3200,JM=3201,b_=0,ZM=1,Xi="",Kn="srgb",gr="srgb-linear",Hf="display-p3",Ac="display-p3-linear",ec="linear",ft="srgb",tc="rec709",nc="p3",es=7680,Dm=519,QM=512,e1=513,t1=514,C_=515,n1=516,i1=517,r1=518,s1=519,Im=35044,Um="300 es",Ti=2e3,ic=2001;class ro{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=Math.PI/180,Ah=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function o1(t,e){return(t%e+e)%e}function cu(t,e,n){return(1-n)*t+n*e}function xo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],d=i[5],m=i[8],y=r[0],g=r[3],f=r[6],_=r[1],v=r[4],S=r[7],P=r[2],b=r[5],w=r[8];return s[0]=o*y+a*_+l*P,s[3]=o*g+a*v+l*b,s[6]=o*f+a*S+l*w,s[1]=c*y+u*_+p*P,s[4]=c*g+u*v+p*b,s[7]=c*f+u*S+p*w,s[2]=h*y+d*_+m*P,s[5]=h*g+d*v+m*b,s[8]=h*f+d*S+m*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,h=a*l-u*s,d=c*s-o*l,m=n*p+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=p*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=d*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(uu.makeScale(e,n)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uu=new Xe;function R_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function a1(){const t=rc("canvas");return t.style.display="block",t}const km={};function Al(t){t in km||(km[t]=!0,console.warn(t))}function l1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function c1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function u1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fm=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Om=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[gr]:{transfer:ec,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:ft,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ac]:{transfer:ec,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Om),fromReference:t=>t.applyMatrix3(Fm)},[Hf]:{transfer:ft,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Om),fromReference:t=>t.applyMatrix3(Fm).convertLinearToSRGB()}},d1=new Set([gr,Ac]),it={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!d1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=yo[e].toReference,r=yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return yo[t].primaries},getTransfer:function(t){return t===Xi?ec:yo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(yo[e].luminanceCoefficients)}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function du(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ts;class h1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=rc("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f1=0;class P_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hu(r[o].image)):s.push(hu(r[o]))}else s=hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?h1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p1=0;class tn extends ro{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Ur,r=Ur,s=Zn,o=kr,a=ei,l=Li,c=tn.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=so(),this.name="",this.source=new P_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=v_;tn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],d=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(d+1)/2,P=(f+1)/2,b=(u+h)/4,w=(p+y)/4,L=(m+g)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=w/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(p-y)*(p-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(p-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m1 extends ro{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new P_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends m1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class L_ extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g1 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3];const h=s[o+0],d=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=m,e[n+3]=y;return}if(p!==y||l!==h||c!==d||u!==m){let g=1-a;const f=l*h+c*d+u*m+p*y,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,f*_);g=Math.sin(g*b)/P,a=Math.sin(a*b)/P}const S=a*_;if(l=l*g+h*S,c=c*g+d*S,u=u*g+m*S,p=p*g+y*S,g===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=P,c*=P,u*=P,p*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[n]=a*m+u*p+l*d-c*h,e[n+1]=l*m+u*h+c*p-a*d,e[n+2]=c*m+u*d+a*h-l*p,e[n+3]=u*m-a*p-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),p=a(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*p+c*d*m,this._y=c*d*p-h*u*m,this._z=c*u*m+h*d*p,this._w=c*u*p-h*d*m;break;case"YXZ":this._x=h*u*p+c*d*m,this._y=c*d*p-h*u*m,this._z=c*u*m-h*d*p,this._w=c*u*p+h*d*m;break;case"ZXY":this._x=h*u*p-c*d*m,this._y=c*d*p+h*u*m,this._z=c*u*m+h*d*p,this._w=c*u*p-h*d*m;break;case"ZYX":this._x=h*u*p-c*d*m,this._y=c*d*p+h*u*m,this._z=c*u*m-h*d*p,this._w=c*u*p+h*d*m;break;case"YZX":this._x=h*u*p+c*d*m,this._y=c*d*p+h*u*m,this._z=c*u*m-h*d*p,this._w=c*u*p-h*d*m;break;case"XZY":this._x=h*u*p-c*d*m,this._y=c*d*p-h*u*m,this._z=c*u*m+h*d*p,this._w=c*u*p+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],p=n[10],h=i+a+p;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>p){const d=2*Math.sqrt(1+i-a-p);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>p){const d=2*Math.sqrt(1+a-i-p);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+p-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*u,this.y=i+l*u+a*c-s*p,this.z=r+l*p+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new F,zm=new va;class oo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Ba.subVectors(this.max,So),ns.subVectors(e.a,So),is.subVectors(e.b,So),rs.subVectors(e.c,So),ki.subVectors(is,ns),Fi.subVectors(rs,is),_r.subVectors(ns,rs);let n=[0,-ki.z,ki.y,0,-Fi.z,Fi.y,0,-_r.z,_r.y,ki.z,0,-ki.x,Fi.z,0,-Fi.x,_r.z,0,-_r.x,-ki.y,ki.x,0,-Fi.y,Fi.x,0,-_r.y,_r.x,0];return!pu(n,ns,is,rs,Ba)||(n=[1,0,0,0,1,0,0,0,1],!pu(n,ns,is,rs,Ba))?!1:(Ha.crossVectors(ki,Fi),n=[Ha.x,Ha.y,Ha.z],pu(n,ns,is,rs,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new F,new F,new F,new F,new F,new F,new F,new F],Gn=new F,za=new oo,ns=new F,is=new F,rs=new F,ki=new F,Fi=new F,_r=new F,So=new F,Ba=new F,Ha=new F,xr=new F;function pu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xr.fromArray(t,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=n.dot(xr),u=i.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const v1=new oo,Mo=new F,mu=new F;class Vf{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):v1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(mu)),this.expandByPoint(Mo.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new F,gu=new F,Va=new F,Oi=new F,vu=new F,Ga=new F,_u=new F;class N_{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gu.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(gu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Va),a=Oi.dot(this.direction),l=-Oi.dot(Va),c=Oi.lengthSq(),u=Math.abs(1-o*o);let p,h,d,m;if(u>0)if(p=o*l-a,h=o*a-l,m=s*u,p>=0)if(h>=-m)if(h<=m){const y=1/u;p*=y,h*=y,d=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*l)+c;else h<=-m?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+h*(h+2*l)+c):h<=m?(p=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(gu).addScaledVector(Va,h),d}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){vu.subVectors(n,e),Ga.subVectors(i,e),_u.crossVectors(vu,Ga);let o=this.direction.dot(_u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Oi,Ga));if(l<0)return null;const c=a*this.direction.dot(vu.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(_u);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,u,p,h,d,m,y,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,p,h,d,m,y,g)}set(e,n,i,r,s,o,a,l,c,u,p,h,d,m,y,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*p,m=a*u,y=a*p;n[0]=l*u,n[4]=-l*p,n[8]=c,n[1]=d+m*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=m+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*p,m=c*u,y=c*p;n[0]=h+y*a,n[4]=m*a-d,n[8]=o*c,n[1]=o*p,n[5]=o*u,n[9]=-a,n[2]=d*a-m,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*p,m=c*u,y=c*p;n[0]=h-y*a,n[4]=-o*p,n[8]=m+d*a,n[1]=d+m*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*p,m=a*u,y=a*p;n[0]=l*u,n[4]=m*c-d,n[8]=h*c+y,n[1]=l*p,n[5]=y*c+h,n[9]=d*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=y-h*p,n[8]=m*p+d,n[1]=p,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*p+m,n[10]=h-y*p}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=-p,n[8]=c*u,n[1]=h*p+y,n[5]=o*u,n[9]=d*p-m,n[2]=m*p-d,n[6]=a*u,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_1,e,x1)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),zi.crossVectors(i,Mn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),zi.crossVectors(i,Mn)),zi.normalize(),Wa.crossVectors(Mn,zi),r[0]=zi.x,r[4]=Wa.x,r[8]=Mn.x,r[1]=zi.y,r[5]=Wa.y,r[9]=Mn.y,r[2]=zi.z,r[6]=Wa.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],d=i[13],m=i[2],y=i[6],g=i[10],f=i[14],_=i[3],v=i[7],S=i[11],P=i[15],b=r[0],w=r[4],L=r[8],q=r[12],x=r[1],E=r[5],V=r[9],k=r[13],W=r[2],ee=r[6],H=r[10],re=r[14],N=r[3],te=r[7],Z=r[11],de=r[15];return s[0]=o*b+a*x+l*W+c*N,s[4]=o*w+a*E+l*ee+c*te,s[8]=o*L+a*V+l*H+c*Z,s[12]=o*q+a*k+l*re+c*de,s[1]=u*b+p*x+h*W+d*N,s[5]=u*w+p*E+h*ee+d*te,s[9]=u*L+p*V+h*H+d*Z,s[13]=u*q+p*k+h*re+d*de,s[2]=m*b+y*x+g*W+f*N,s[6]=m*w+y*E+g*ee+f*te,s[10]=m*L+y*V+g*H+f*Z,s[14]=m*q+y*k+g*re+f*de,s[3]=_*b+v*x+S*W+P*N,s[7]=_*w+v*E+S*ee+P*te,s[11]=_*L+v*V+S*H+P*Z,s[15]=_*q+v*k+S*re+P*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],d=e[14],m=e[3],y=e[7],g=e[11],f=e[15];return m*(+s*l*p-r*c*p-s*a*h+i*c*h+r*a*d-i*l*d)+y*(+n*l*d-n*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+g*(+n*c*p-n*a*d-s*o*p+i*o*d+s*a*u-i*c*u)+f*(-r*a*u-n*l*p+n*a*h+r*o*p-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],d=e[11],m=e[12],y=e[13],g=e[14],f=e[15],_=p*g*c-y*h*c+y*l*d-a*g*d-p*l*f+a*h*f,v=m*h*c-u*g*c-m*l*d+o*g*d+u*l*f-o*h*f,S=u*y*c-m*p*c+m*a*d-o*y*d-u*a*f+o*p*f,P=m*p*l-u*y*l-m*a*h+o*y*h+u*a*g-o*p*g,b=n*_+i*v+r*S+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(y*h*s-p*g*s-y*r*d+i*g*d+p*r*f-i*h*f)*w,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*f+i*l*f)*w,e[3]=(p*l*s-a*h*s-p*r*c+i*h*c+a*r*d-i*l*d)*w,e[4]=v*w,e[5]=(u*g*s-m*h*s+m*r*d-n*g*d-u*r*f+n*h*f)*w,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*f-n*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*d+n*l*d)*w,e[8]=S*w,e[9]=(m*p*s-u*y*s-m*i*d+n*y*d+u*i*f-n*p*f)*w,e[10]=(o*y*s-m*a*s+m*i*c-n*y*c-o*i*f+n*a*f)*w,e[11]=(u*a*s-o*p*s-u*i*c+n*p*c+o*i*d-n*a*d)*w,e[12]=P*w,e[13]=(u*y*r-m*p*r+m*i*h-n*y*h-u*i*g+n*p*g)*w,e[14]=(m*a*r-o*y*r-m*i*l+n*y*l+o*i*g-n*a*g)*w,e[15]=(o*p*r-u*a*r+u*i*l-n*p*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,p=a+a,h=s*c,d=s*u,m=s*p,y=o*u,g=o*p,f=a*p,_=l*c,v=l*u,S=l*p,P=i.x,b=i.y,w=i.z;return r[0]=(1-(y+f))*P,r[1]=(d+S)*P,r[2]=(m-v)*P,r[3]=0,r[4]=(d-S)*b,r[5]=(1-(h+f))*b,r[6]=(g+_)*b,r[7]=0,r[8]=(m+v)*w,r[9]=(g-_)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,p=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=p,Wn.elements[9]*=p,Wn.elements[10]*=p,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let d,m;if(a===Ti)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===ic)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),u=1/(i-r),p=1/(o-s),h=(n+e)*c,d=(i+r)*u;let m,y;if(a===Ti)m=(o+s)*p,y=-2*p;else if(a===ic)m=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new F,Wn=new vt,_1=new F(0,0,0),x1=new F(1,1,1),zi=new F,Wa=new F,Mn=new F,Bm=new vt,Hm=new va;class Ni{constructor(e=0,n=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],p=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y1=0;const Vm=new F,os=new va,gi=new vt,ja=new F,Eo=new F,S1=new F,M1=new va,Gm=new F(1,0,0),Wm=new F(0,1,0),jm=new F(0,0,1),$m={type:"added"},E1={type:"removed"},as={type:"childadded",child:null},xu={type:"childremoved",child:null};class $t extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new F,n=new Ni,i=new va,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Xe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(jm,e)}translateOnAxis(e,n){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Eo,ja,this.up):gi.lookAt(ja,Eo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(gi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($m),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(E1),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($m),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,S1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,M1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new F(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new F,vi=new F,yu=new F,_i=new F,ls=new F,cs=new F,Xm=new F,Su=new F,Mu=new F,Eu=new F,wu=new Tt,Tu=new Tt,Au=new Tt;class Qn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),vi.subVectors(i,n),yu.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(vi),l=jn.dot(yu),c=vi.dot(vi),u=vi.dot(yu),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return wu.setScalar(0),Tu.setScalar(0),Au.setScalar(0),wu.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,i),Au.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wu,s.x),o.addScaledVector(Tu,s.y),o.addScaledVector(Au,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),vi.subVectors(e,n),jn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),Su.subVectors(e,i);const l=ls.dot(Su),c=cs.dot(Su);if(l<=0&&c<=0)return n.copy(i);Mu.subVectors(e,r);const u=ls.dot(Mu),p=cs.dot(Mu);if(u>=0&&p<=u)return n.copy(r);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ls,o);Eu.subVectors(e,s);const d=ls.dot(Eu),m=cs.dot(Eu);if(m>=0&&d<=m)return n.copy(s);const y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(cs,a);const g=u*m-d*p;if(g<=0&&p-u>=0&&d-m>=0)return Xm.subVectors(s,r),a=(p-u)/(p-u+(d-m)),n.copy(r).addScaledVector(Xm,a);const f=1/(g+y+h);return o=y*f,a=h*f,n.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=o1(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bu(o,s,e+1/3),this.g=bu(o,s,e),this.b=bu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=D_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=du(e.r),this.g=du(e.g),this.b=du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return it.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Gt(Jt.r*255,0,255))*65536+Math.round(Gt(Jt.g*255,0,255))*256+Math.round(Gt(Jt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Kn){it.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL($a);const i=cu(Bi.h,$a.h,n),r=cu(Bi.s,$a.s,n),s=cu(Bi.l,$a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ze;Ze.NAMES=D_;let w1=0;class ao extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Us,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Gd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vd&&(i.blendSrc=this.blendSrc),this.blendDst!==Gd&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fr extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new F,Xa=new _e;class di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Im,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xo(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xo(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xo(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Im&&(e.usage=this.usage),e}}class I_ extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class U_ extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class lt extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T1=0;const Dn=new vt,Cu=new $t,us=new F,En=new oo,wo=new oo,kt=new F;class xn extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R_(e)?U_:I_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(En.min,wo.min),En.expandByPoint(kt),kt.addVectors(En.max,wo.max),En.expandByPoint(kt)):(En.expandByPoint(wo.min),En.expandByPoint(wo.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),kt.add(us)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;const c=new F,u=new F,p=new F,h=new _e,d=new _e,m=new _e,y=new F,g=new F;function f(L,q,x){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,q),p.fromBufferAttribute(i,x),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,q),m.fromBufferAttribute(s,x),u.sub(c),p.sub(c),d.sub(h),m.sub(h);const E=1/(d.x*m.y-m.x*d.y);isFinite(E)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(E),g.copy(p).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(E),a[L].add(y),a[q].add(y),a[x].add(y),l[L].add(g),l[q].add(g),l[x].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,q=_.length;L<q;++L){const x=_[L],E=x.start,V=x.count;for(let k=E,W=E+V;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new F,S=new F,P=new F,b=new F;function w(L){P.fromBufferAttribute(r,L),b.copy(P);const q=a[L];v.copy(q),v.sub(P.multiplyScalar(P.dot(q))).normalize(),S.crossVectors(b,q);const E=S.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,E)}for(let L=0,q=_.length;L<q;++L){const x=_[L],E=x.start,V=x.count;for(let k=E,W=E+V;k<W;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,p=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let f=0;f<u;f++)h[m++]=c[d++]}return new di(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,p=c.length;u<p;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const d=c[p];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qm=new vt,yr=new N_,qa=new Vf,Ym=new F,Ya=new F,Ka=new F,Ja=new F,Ru=new F,Za=new F,Km=new F,Qa=new F;class Wt extends $t{constructor(e=new xn,n=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],p=s[l];u!==0&&(Ru.fromBufferAttribute(p,e),o?Za.addScaledVector(Ru,u):Za.addScaledVector(Ru.sub(n),u))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(qa.containsPoint(yr.origin)===!1&&(yr.intersectSphere(qa,Ym)===null||yr.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(qm.copy(s).invert(),yr.copy(e.ray).applyMatrix4(qm),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){const g=h[m],f=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let S=_,P=v;S<P;S+=3){const b=a.getX(S),w=a.getX(S+1),L=a.getX(S+2);r=el(this,f,e,i,c,u,p,b,w,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=m,f=y;g<f;g+=3){const _=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=el(this,o,e,i,c,u,p,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){const g=h[m],f=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=_,P=v;S<P;S+=3){const b=S,w=S+1,L=S+2;r=el(this,f,e,i,c,u,p,b,w,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=m,f=y;g<f;g+=3){const _=g,v=g+1,S=g+2;r=el(this,o,e,i,c,u,p,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function A1(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===dr,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function el(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ya),t.getVertexPosition(l,Ka),t.getVertexPosition(c,Ja);const u=A1(t,e,n,i,Ya,Ka,Ja,Km);if(u){const p=new F;Qn.getBarycoord(Km,Ya,Ka,Ja,p),r&&(u.uv=Qn.getInterpolatedAttribute(r,a,l,c,p,new _e)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,a,l,c,p,new _e)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,l,c,p,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Qn.getNormal(Ya,Ka,Ja,h.normal),u.face=h,u.barycoord=p}return u}class Vt extends xn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,d=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(p,2));function m(y,g,f,_,v,S,P,b,w,L,q){const x=S/w,E=P/L,V=S/2,k=P/2,W=b/2,ee=w+1,H=L+1;let re=0,N=0;const te=new F;for(let Z=0;Z<H;Z++){const de=Z*E-k;for(let Le=0;Le<ee;Le++){const Be=Le*x-V;te[y]=Be*_,te[g]=de*v,te[f]=W,c.push(te.x,te.y,te.z),te[y]=0,te[g]=0,te[f]=b>0?1:-1,u.push(te.x,te.y,te.z),p.push(Le/w),p.push(1-Z/L),re+=1}}for(let Z=0;Z<L;Z++)for(let de=0;de<w;de++){const Le=h+de+ee*Z,Be=h+de+ee*(Z+1),Y=h+(de+1)+ee*(Z+1),ue=h+(de+1)+ee*Z;l.push(Le,Be,ue),l.push(Be,Y,ue),N+=6}a.addGroup(d,N,q),d+=N,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function b1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function k_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const C1={clone:Js,merge:rn};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=P1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=b1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class F_ extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new F,Jm=new _e,Zm=new _e;class Tn extends F_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ah*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,Jm,Zm),n.subVectors(Zm,Jm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(lu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ds=-90,hs=1;class L1 extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(ds,hs,e,n);r.layers=this.layers,this.add(r);const s=new Tn(ds,hs,e,n);s.layers=this.layers,this.add(s);const o=new Tn(ds,hs,e,n);o.layers=this.layers,this.add(o);const a=new Tn(ds,hs,e,n);a.layers=this.layers,this.add(a);const l=new Tn(ds,hs,e,n);l.layers=this.layers,this.add(l);const c=new Tn(ds,hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(p,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class O_ extends tn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N1 extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new O_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vt(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:sr});s.uniforms.tEquirect.value=n;const o=new Wt(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=Zn),new L1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Pu=new F,D1=new F,I1=new Xe;class br{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pu.subVectors(i,n).cross(D1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||I1.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Vf,tl=new F;class Wf{constructor(e=new br,n=new br,i=new br,r=new br,s=new br,o=new br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],p=r[6],h=r[7],d=r[8],m=r[9],y=r[10],g=r[11],f=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-d,S-f).normalize(),i[1].setComponents(l+s,h+c,g+d,S+f).normalize(),i[2].setComponents(l+o,h+u,g+m,S+_).normalize(),i[3].setComponents(l-o,h-u,g-m,S-_).normalize(),i[4].setComponents(l-a,h-p,g-y,S-v).normalize(),n===Ti)i[5].setComponents(l+a,h+p,g+y,S+v).normalize();else if(n===ic)i[5].setComponents(a,p,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function U1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const u=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,u);else{p.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<p.length;d++){const m=p[h],y=p[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,p[h]=y)}p.length=h+1;for(let d=0,m=p.length;d<m;d++){const y=p[d];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Zs extends xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,p=e/a,h=n/l,d=[],m=[],y=[],g=[];for(let f=0;f<u;f++){const _=f*h-o;for(let v=0;v<c;v++){const S=v*p-s;m.push(S,-_,0),y.push(0,0,1),g.push(v/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,S=_+c*(f+1),P=_+1+c*(f+1),b=_+1+c*f;d.push(v,S,b),d.push(S,P,b)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(y,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var k1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F1=`#ifdef USE_ALPHAHASH
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
#endif`,O1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
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
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W1=`#ifdef USE_BATCHING
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
#endif`,j1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y1=`#ifdef USE_IRIDESCENCE
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
#endif`,K1=`#ifdef USE_BUMPMAP
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sE=`#define PI 3.141592653589793
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
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aE=`vec3 transformedNormal = objectNormal;
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
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",fE=`
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
}`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gE=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
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
#endif`,xE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ME=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EE=`#ifdef USE_GRADIENTMAP
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
}`,wE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bE=`uniform bool receiveShadow;
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
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,RE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DE=`PhysicalMaterial material;
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
#endif`,IE=`struct PhysicalMaterial {
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
}`,UE=`
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
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
#endif`,FE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jE=`#if defined( USE_POINTS_UV )
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
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
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
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rw=`#ifdef USE_NORMALMAP
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
#endif`,sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yw=`float getShadowMask() {
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
}`,Sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mw=`#ifdef USE_SKINNING
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
#endif`,Ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rw=`#ifdef USE_TRANSMISSION
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
#endif`,Pw=`#ifdef USE_TRANSMISSION
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
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kw=`uniform sampler2D t2D;
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ow=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
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
}`,Vw=`#if DEPTH_PACKING == 3200
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
}`,Gw=`#define DISTANCE
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
}`,Ww=`#define DISTANCE
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`uniform float scale;
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
}`,qw=`uniform vec3 diffuse;
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
}`,Yw=`#include <common>
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Jw=`#define LAMBERT
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
}`,Zw=`#define LAMBERT
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
}`,Qw=`#define MATCAP
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
}`,eT=`#define MATCAP
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
}`,tT=`#define NORMAL
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
}`,nT=`#define NORMAL
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
}`,iT=`#define PHONG
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
}`,rT=`#define PHONG
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
}`,sT=`#define STANDARD
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
}`,oT=`#define STANDARD
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
}`,aT=`#define TOON
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
}`,lT=`#define TOON
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
}`,cT=`uniform float size;
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
}`,uT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,hT=`uniform vec3 color;
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
}`,fT=`uniform float rotation;
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
}`,pT=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:k1,alphahash_pars_fragment:F1,alphamap_fragment:O1,alphamap_pars_fragment:z1,alphatest_fragment:B1,alphatest_pars_fragment:H1,aomap_fragment:V1,aomap_pars_fragment:G1,batching_pars_vertex:W1,batching_vertex:j1,begin_vertex:$1,beginnormal_vertex:X1,bsdfs:q1,iridescence_fragment:Y1,bumpmap_pars_fragment:K1,clipping_planes_fragment:J1,clipping_planes_pars_fragment:Z1,clipping_planes_pars_vertex:Q1,clipping_planes_vertex:eE,color_fragment:tE,color_pars_fragment:nE,color_pars_vertex:iE,color_vertex:rE,common:sE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:aE,displacementmap_pars_vertex:lE,displacementmap_vertex:cE,emissivemap_fragment:uE,emissivemap_pars_fragment:dE,colorspace_fragment:hE,colorspace_pars_fragment:fE,envmap_fragment:pE,envmap_common_pars_fragment:mE,envmap_pars_fragment:gE,envmap_pars_vertex:vE,envmap_physical_pars_fragment:CE,envmap_vertex:_E,fog_vertex:xE,fog_pars_vertex:yE,fog_fragment:SE,fog_pars_fragment:ME,gradientmap_pars_fragment:EE,lightmap_pars_fragment:wE,lights_lambert_fragment:TE,lights_lambert_pars_fragment:AE,lights_pars_begin:bE,lights_toon_fragment:RE,lights_toon_pars_fragment:PE,lights_phong_fragment:LE,lights_phong_pars_fragment:NE,lights_physical_fragment:DE,lights_physical_pars_fragment:IE,lights_fragment_begin:UE,lights_fragment_maps:kE,lights_fragment_end:FE,logdepthbuf_fragment:OE,logdepthbuf_pars_fragment:zE,logdepthbuf_pars_vertex:BE,logdepthbuf_vertex:HE,map_fragment:VE,map_pars_fragment:GE,map_particle_fragment:WE,map_particle_pars_fragment:jE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:XE,morphinstance_vertex:qE,morphcolor_vertex:YE,morphnormal_vertex:KE,morphtarget_pars_vertex:JE,morphtarget_vertex:ZE,normal_fragment_begin:QE,normal_fragment_maps:ew,normal_pars_fragment:tw,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:rw,clearcoat_normal_fragment_begin:sw,clearcoat_normal_fragment_maps:ow,clearcoat_pars_fragment:aw,iridescence_pars_fragment:lw,opaque_fragment:cw,packing:uw,premultiplied_alpha_fragment:dw,project_vertex:hw,dithering_fragment:fw,dithering_pars_fragment:pw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:_w,shadowmap_vertex:xw,shadowmask_pars_fragment:yw,skinbase_vertex:Sw,skinning_pars_vertex:Mw,skinning_vertex:Ew,skinnormal_vertex:ww,specularmap_fragment:Tw,specularmap_pars_fragment:Aw,tonemapping_fragment:bw,tonemapping_pars_fragment:Cw,transmission_fragment:Rw,transmission_pars_fragment:Pw,uv_pars_fragment:Lw,uv_pars_vertex:Nw,uv_vertex:Dw,worldpos_vertex:Iw,background_vert:Uw,background_frag:kw,backgroundCube_vert:Fw,backgroundCube_frag:Ow,cube_vert:zw,cube_frag:Bw,depth_vert:Hw,depth_frag:Vw,distanceRGBA_vert:Gw,distanceRGBA_frag:Ww,equirect_vert:jw,equirect_frag:$w,linedashed_vert:Xw,linedashed_frag:qw,meshbasic_vert:Yw,meshbasic_frag:Kw,meshlambert_vert:Jw,meshlambert_frag:Zw,meshmatcap_vert:Qw,meshmatcap_frag:eT,meshnormal_vert:tT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:rT,meshphysical_vert:sT,meshphysical_frag:oT,meshtoon_vert:aT,meshtoon_frag:lT,points_vert:cT,points_frag:uT,shadow_vert:dT,shadow_frag:hT,sprite_vert:fT,sprite_frag:pT},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ai={basic:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:rn([Ee.points,Ee.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:rn([Ee.common,Ee.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:rn([Ee.sprite,Ee.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:rn([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ai.physical={uniforms:rn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const nl={r:0,b:0,g:0},Mr=new Ni,mT=new vt;function gT(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,p=null,h=0,d=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function y(_){let v=!1;const S=m(_);S===null?f(a,l):S&&S.isColor&&(f(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===Tc)?(u===void 0&&(u=new Wt(new Vt(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Js(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mr.copy(v.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(Mr)),u.material.toneMapped=it.getTransfer(S.colorSpace)!==ft,(p!==S||h!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,h=S.version,d=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Wt(new Zs(2,2),new hr({name:"BackgroundMaterial",uniforms:Js(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,p=S,h=S.version,d=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(nl,k_(t)),i.buffers.color.setClear(nl.r,nl.g,nl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:y,addToRenderList:g}}function vT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,E,V,k,W){let ee=!1;const H=p(k,V,E);s!==H&&(s=H,c(s.object)),ee=d(x,k,V,W),ee&&m(x,k,V,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(x,E,V,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function p(x,E,V){const k=V.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let ee=W[E.id];ee===void 0&&(ee={},W[E.id]=ee);let H=ee[k];return H===void 0&&(H=h(l()),ee[k]=H),H}function h(x){const E=[],V=[],k=[];for(let W=0;W<n;W++)E[W]=0,V[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:k,object:x,attributes:{},index:null}}function d(x,E,V,k){const W=s.attributes,ee=E.attributes;let H=0;const re=V.getAttributes();for(const N in re)if(re[N].location>=0){const Z=W[N];let de=ee[N];if(de===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function m(x,E,V,k){const W={},ee=E.attributes;let H=0;const re=V.getAttributes();for(const N in re)if(re[N].location>=0){let Z=ee[N];Z===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),W[N]=de,H++}s.attributes=W,s.attributesNum=H,s.index=k}function y(){const x=s.newAttributes;for(let E=0,V=x.length;E<V;E++)x[E]=0}function g(x){f(x,0)}function f(x,E){const V=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;V[x]=1,k[x]===0&&(t.enableVertexAttribArray(x),k[x]=1),W[x]!==E&&(t.vertexAttribDivisor(x,E),W[x]=E)}function _(){const x=s.newAttributes,E=s.enabledAttributes;for(let V=0,k=E.length;V<k;V++)E[V]!==x[V]&&(t.disableVertexAttribArray(V),E[V]=0)}function v(x,E,V,k,W,ee,H){H===!0?t.vertexAttribIPointer(x,E,V,W,ee):t.vertexAttribPointer(x,E,V,k,W,ee)}function S(x,E,V,k){y();const W=k.attributes,ee=V.getAttributes(),H=E.defaultAttributeValues;for(const re in ee){const N=ee[re];if(N.location>=0){let te=W[re];if(te===void 0&&(re==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),re==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const Z=te.normalized,de=te.itemSize,Le=e.get(te);if(Le===void 0)continue;const Be=Le.buffer,Y=Le.type,ue=Le.bytesPerElement,xe=Y===t.INT||Y===t.UNSIGNED_INT||te.gpuType===If;if(te.isInterleavedBufferAttribute){const pe=te.data,Q=pe.stride,I=te.offset;if(pe.isInstancedInterleavedBuffer){for(let oe=0;oe<N.locationSize;oe++)f(N.location+oe,pe.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let oe=0;oe<N.locationSize;oe++)g(N.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let oe=0;oe<N.locationSize;oe++)v(N.location+oe,de/N.locationSize,Y,Z,Q*ue,(I+de/N.locationSize*oe)*ue,xe)}else{if(te.isInstancedBufferAttribute){for(let pe=0;pe<N.locationSize;pe++)f(N.location+pe,te.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<N.locationSize;pe++)g(N.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let pe=0;pe<N.locationSize;pe++)v(N.location+pe,de/N.locationSize,Y,Z,de*ue,de/N.locationSize*pe*ue,xe)}}else if(H!==void 0){const Z=H[re];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}_()}function P(){L();for(const x in i){const E=i[x];for(const V in E){const k=E[V];for(const W in k)u(k[W].object),delete k[W];delete E[V]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const V in E){const k=E[V];for(const W in k)u(k[W].object),delete k[W];delete E[V]}delete i[x.id]}function w(x){for(const E in i){const V=i[E];if(V[x.id]===void 0)continue;const k=V[x.id];for(const W in k)u(k[W].object),delete k[W];delete V[x.id]}}function L(){q(),o=!0,s!==r&&(s=r,c(s.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:q,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function _T(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,p){p!==0&&(t.drawArraysInstanced(i,c,u,p),n.update(u,i,p))}function a(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let d=0;for(let m=0;m<p;m++)d+=u[m];n.update(d,i,1)}function l(c,u,p,h){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,p);let m=0;for(let y=0;y<p;y++)m+=u[y];for(let y=0;y<h.length;y++)n.update(m,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ei&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Li&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wi&&!L)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:b}}function yT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new br,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const d=p.length!==0||h||i!==0||r;return r=h,i=p.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=u(p,h,0)},this.setState=function(p,h,d){const m=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,v=_*4;let S=f.clippingState||null;l.value=S,S=u(m,h,v,d);for(let P=0;P!==v;++P)S[P]=n[P];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,d,m){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const f=d+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,S=d;v!==y;++v,S+=4)o.copy(p[v]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function ST(t){let e=new WeakMap;function n(o,a){return a===Jd?o.mapping=Xs:a===Zd&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jd||a===Zd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new N1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jf extends F_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=4,Qm=[.125,.215,.35,.446,.526,.582],Pr=20,Lu=new jf,eg=new Ze;let Nu=null,Du=0,Iu=0,Uu=!1;const Cr=(1+Math.sqrt(5))/2,fs=1/Cr,tg=[new F(-Cr,fs,0),new F(Cr,fs,0),new F(-fs,0,Cr),new F(fs,0,Cr),new F(0,Cr,-fs),new F(0,Cr,fs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Du,Iu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:ga,format:ei,colorSpace:gr,depthBuffer:!1},r=ig(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MT(s)),this._blurMaterial=ET(s,e,n)}return r}_compileMaterial(e){const n=new Wt(this._lodPlanes[0],e);this._renderer.compile(n,Lu)}_sceneToCubeUV(e,n,i,r){const a=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(eg),u.toneMapping=or,u.autoClear=!1;const d=new Fr({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),m=new Wt(new Vt,d);let y=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,y=!0):(d.color.copy(eg),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;il(r,_*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tg[(r-s-1)%tg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Wt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pr-1),y=s/m,g=isFinite(s)?1+Math.floor(u*y):Pr;g>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);const f=[];let _=0;for(let w=0;w<Pr;++w){const L=w/y,q=Math.exp(-L*L/2);f.push(q),w===0?_+=q:w<g&&(_+=2*q)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-bs?r-v+bs:0),b=4*(this._cubeSize-S);il(n,P,b,3*S,2*S),l.setRenderTarget(n),l.render(p,Lu)}}function MT(t){const e=[],n=[],i=[];let r=t;const s=t-bs+1+Qm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-bs?l=Qm[o-t+bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],d=6,m=6,y=3,g=2,f=1,_=new Float32Array(y*m*d),v=new Float32Array(g*m*d),S=new Float32Array(f*m*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,L=b>2?0:-1,q=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];_.set(q,y*m*b),v.set(h,g*m*b);const x=[b,b,b,b,b,b];S.set(x,f*m*b)}const P=new xn;P.setAttribute("position",new di(_,y)),P.setAttribute("uv",new di(v,g)),P.setAttribute("faceIndex",new di(S,f)),e.push(P),r>bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ig(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ET(t,e,n){const i=new Float32Array(Pr),r=new F(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$f(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function rg(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function sg(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function $f(){return`

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
	`}function wT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jd||l===Zd,u=l===Xs||l===qs;if(c||u){let p=e.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new ng(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(n===null&&(n=new ng(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function TT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Al("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AT(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const y=h.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER);const d=p.morphAttributes;for(const m in d){const y=d[m];for(let g=0,f=y.length;g<f;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(p){const h=[],d=p.index,m=p.attributes.position;let y=0;if(d!==null){const _=d.array;y=d.version;for(let v=0,S=_.length;v<S;v+=3){const P=_[v+0],b=_[v+1],w=_[v+2];h.push(P,b,b,w,w,P)}}else if(m!==void 0){const _=m.array;y=m.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const P=v+0,b=v+1,w=v+2;h.push(P,b,b,w,w,P)}}else return;const g=new(R_(h)?U_:I_)(h,1);g.version=y;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function u(p){const h=s.get(p);if(h){const d=p.index;d!==null&&h.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function bT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,h*o,m),n.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let g=0;for(let f=0;f<m;f++)g+=d[f];n.update(g,i,1)}function p(h,d,m,y){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/o,d[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,y,0,m);let f=0;for(let _=0;_<m;_++)f+=d[_];for(let _=0;_<y.length;_++)n.update(f,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function CT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RT(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let P=a.attributes.position.count*S,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*b*4*p),L=new L_(w,P,b,p);L.type=wi,L.needsUpdate=!0;const q=S*4;for(let E=0;E<p;E++){const V=f[E],k=_[E],W=v[E],ee=P*b*4*E;for(let H=0;H<V.count;H++){const re=H*q;m===!0&&(r.fromBufferAttribute(V,H),w[ee+re+0]=r.x,w[ee+re+1]=r.y,w[ee+re+2]=r.z,w[ee+re+3]=0),y===!0&&(r.fromBufferAttribute(k,H),w[ee+re+4]=r.x,w[ee+re+5]=r.y,w[ee+re+6]=r.z,w[ee+re+7]=0),g===!0&&(r.fromBufferAttribute(W,H),w[ee+re+8]=r.x,w[ee+re+9]=r.y,w[ee+re+10]=r.z,w[ee+re+11]=W.itemSize===4?r.w:1)}}h={count:p,texture:L,size:new _e(P,b)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function PT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class B_ extends tn{constructor(e,n,i,r,s,o,a,l,c,u=ks){if(u!==ks&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ks&&(i=Xr),i===void 0&&u===Ks&&(i=Ys),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const H_=new tn,og=new B_(1,1),V_=new L_,G_=new g1,W_=new O_,ag=[],lg=[],cg=new Float32Array(16),ug=new Float32Array(9),dg=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ag[r];if(s===void 0&&(s=new Float32Array(r),ag[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=lg[e];n===void 0&&(n=new Int32Array(e),lg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function UT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;dg.set(i),t.uniformMatrix2fv(this.addr,!1,dg),Ut(n,i)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;ug.set(i),t.uniformMatrix3fv(this.addr,!1,ug),Ut(n,i)}}function FT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;cg.set(i),t.uniformMatrix4fv(this.addr,!1,cg),Ut(n,i)}}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function VT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(og.compareFunction=C_,s=og):s=H_,n.setTexture2D(e||s,r)}function XT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G_,r)}function qT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||W_,r)}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||V_,r)}function KT(t){switch(t){case 5126:return LT;case 35664:return NT;case 35665:return DT;case 35666:return IT;case 35674:return UT;case 35675:return kT;case 35676:return FT;case 5124:case 35670:return OT;case 35667:case 35671:return zT;case 35668:case 35672:return BT;case 35669:case 35673:return HT;case 5125:return VT;case 36294:return GT;case 36295:return WT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function JT(t,e){t.uniform1fv(this.addr,e)}function ZT(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function QT(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function eA(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function tA(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nA(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function iA(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rA(t,e){t.uniform1iv(this.addr,e)}function sA(t,e){t.uniform2iv(this.addr,e)}function oA(t,e){t.uniform3iv(this.addr,e)}function aA(t,e){t.uniform4iv(this.addr,e)}function lA(t,e){t.uniform1uiv(this.addr,e)}function cA(t,e){t.uniform2uiv(this.addr,e)}function uA(t,e){t.uniform3uiv(this.addr,e)}function dA(t,e){t.uniform4uiv(this.addr,e)}function hA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||H_,s[o])}function fA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||G_,s[o])}function pA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||W_,s[o])}function mA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||V_,s[o])}function gA(t){switch(t){case 5126:return JT;case 35664:return ZT;case 35665:return QT;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return oA;case 35669:case 35673:return aA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class vA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=KT(n.type)}}class _A{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gA(n.type)}}class xA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function hg(t,e){t.seq.push(e),t.map[e.id]=e}function yA(t,e,n){const i=t.name,r=i.length;for(ku.lastIndex=0;;){const s=ku.exec(i),o=ku.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hg(n,c===void 0?new vA(a,t,e):new _A(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new xA(a),hg(n,p)),n=p}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);yA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const SA=37297;let MA=0;function EA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wA(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===nc&&n===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&n===nc&&(i="LinearSRGBToLinearDisplayP3"),t){case gr:case Ac:return[i,"LinearTransferOETF"];case Kn:case Hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function pg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+EA(t.getShaderSource(e),o)}else return r}function TA(t,e){const n=wA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function AA(t,e){let n;switch(e){case VM:n="Linear";break;case GM:n="Reinhard";break;case WM:n="Cineon";break;case jM:n="ACESFilmic";break;case XM:n="AgX";break;case qM:n="Neutral";break;case $M:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const rl=new F;function bA(){it.getLuminanceCoefficients(rl);const t=rl.x.toFixed(4),e=rl.y.toFixed(4),n=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function RA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Po(t){return t!==""}function mg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LA=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(t){return t.replace(LA,DA)}const NA=new Map;function DA(t,e){let n=$e[e];if(n===void 0){const i=NA.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bh(n)}const IA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(t){return t.replace(IA,UA)}function UA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _g(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function kA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===m_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function FA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function zA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case g_:e="ENVMAP_BLENDING_MULTIPLY";break;case BM:e="ENVMAP_BLENDING_MIX";break;case HM:e="ENVMAP_BLENDING_ADD";break}return e}function BA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=kA(n),c=FA(n),u=OA(n),p=zA(n),h=BA(n),d=CA(n),m=RA(s),y=r.createProgram();let g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Po).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(g=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?$e.tonemapping_pars_fragment:"",n.toneMapping!==or?AA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,TA("linearToOutputTexel",n.outputColorSpace),bA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),o=bh(o),o=mg(o,n),o=gg(o,n),a=bh(a),a=mg(a,n),a=gg(a,n),o=vg(o),a=vg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+g+o,S=_+f+a,P=fg(r,r.VERTEX_SHADER,v),b=fg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,P),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(E){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(b).trim();let ee=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,b);else{const re=pg(r,P,"vertex"),N=pg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+re+`
`+N)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||W==="")&&(H=!1);H&&(E.diagnostics={runnable:ee,programLog:V,vertexShader:{log:k,prefix:g},fragmentShader:{log:W,prefix:f}})}r.deleteShader(P),r.deleteShader(b),L=new bl(r,y),q=PA(r,y)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let q;this.getAttributes=function(){return q===void 0&&w(this),q};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,SA)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=b,this}let VA=0;class GA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WA(e),n.set(e,i)),i}}class WA{constructor(e){this.id=VA++,this.code=e,this.usedTimes=0}}function jA(t,e,n,i,r,s,o){const a=new Gf,l=new GA,c=new Set,u=[],p=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,d=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,E,V,k,W){const ee=k.fog,H=W.geometry,re=x.isMeshStandardMaterial?k.environment:null,N=(x.isMeshStandardMaterial?n:e).get(x.envMap||re),te=N&&N.mapping===Tc?N.image.height:null,Z=y[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const de=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Le=de!==void 0?de.length:0;let Be=0;H.morphAttributes.position!==void 0&&(Be=1),H.morphAttributes.normal!==void 0&&(Be=2),H.morphAttributes.color!==void 0&&(Be=3);let Y,ue,xe,pe;if(Z){const un=ai[Z];Y=un.vertexShader,ue=un.fragmentShader}else Y=x.vertexShader,ue=x.fragmentShader,l.update(x),xe=l.getVertexShaderID(x),pe=l.getFragmentShaderID(x);const Q=t.getRenderTarget(),I=W.isInstancedMesh===!0,oe=W.isBatchedMesh===!0,ae=!!x.map,X=!!x.matcap,C=!!N,D=!!x.aoMap,j=!!x.lightMap,K=!!x.bumpMap,se=!!x.normalMap,ye=!!x.displacementMap,ge=!!x.emissiveMap,R=!!x.metalnessMap,M=!!x.roughnessMap,B=x.anisotropy>0,ne=x.clearcoat>0,le=x.dispersion>0,ie=x.iridescence>0,Ie=x.sheen>0,Me=x.transmission>0,Ce=B&&!!x.anisotropyMap,Ye=ne&&!!x.clearcoatMap,me=ne&&!!x.clearcoatNormalMap,Re=ne&&!!x.clearcoatRoughnessMap,Ve=ie&&!!x.iridescenceMap,Ge=ie&&!!x.iridescenceThicknessMap,Ne=Ie&&!!x.sheenColorMap,Ke=Ie&&!!x.sheenRoughnessMap,We=!!x.specularMap,ct=!!x.specularColorMap,U=!!x.specularIntensityMap,Ae=Me&&!!x.transmissionMap,J=Me&&!!x.thicknessMap,ce=!!x.gradientMap,we=!!x.alphaMap,be=x.alphaTest>0,Je=!!x.alphaHash,Ct=!!x.extensions;let cn=or;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(cn=t.toneMapping);const et={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:ue,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:oe,batchingColor:oe&&W._colorsTexture!==null,instancing:I,instancingColor:I&&W.instanceColor!==null,instancingMorph:I&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:gr,alphaToCoverage:!!x.alphaToCoverage,map:ae,matcap:X,envMap:C,envMapMode:C&&N.mapping,envMapCubeUVHeight:te,aoMap:D,lightMap:j,bumpMap:K,normalMap:se,displacementMap:d&&ye,emissiveMap:ge,normalMapObjectSpace:se&&x.normalMapType===ZM,normalMapTangentSpace:se&&x.normalMapType===b_,metalnessMap:R,roughnessMap:M,anisotropy:B,anisotropyMap:Ce,clearcoat:ne,clearcoatMap:Ye,clearcoatNormalMap:me,clearcoatRoughnessMap:Re,dispersion:le,iridescence:ie,iridescenceMap:Ve,iridescenceThicknessMap:Ge,sheen:Ie,sheenColorMap:Ne,sheenRoughnessMap:Ke,specularMap:We,specularColorMap:ct,specularIntensityMap:U,transmission:Me,transmissionMap:Ae,thicknessMap:J,gradientMap:ce,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:we,alphaTest:be,alphaHash:Je,combine:x.combine,mapUv:ae&&g(x.map.channel),aoMapUv:D&&g(x.aoMap.channel),lightMapUv:j&&g(x.lightMap.channel),bumpMapUv:K&&g(x.bumpMap.channel),normalMapUv:se&&g(x.normalMap.channel),displacementMapUv:ye&&g(x.displacementMap.channel),emissiveMapUv:ge&&g(x.emissiveMap.channel),metalnessMapUv:R&&g(x.metalnessMap.channel),roughnessMapUv:M&&g(x.roughnessMap.channel),anisotropyMapUv:Ce&&g(x.anisotropyMap.channel),clearcoatMapUv:Ye&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&g(x.sheenRoughnessMap.channel),specularMapUv:We&&g(x.specularMap.channel),specularColorMapUv:ct&&g(x.specularColorMap.channel),specularIntensityMapUv:U&&g(x.specularIntensityMap.channel),transmissionMapUv:Ae&&g(x.transmissionMap.channel),thicknessMapUv:J&&g(x.thicknessMap.channel),alphaMapUv:we&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(se||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(ae||we),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:cn,decodeVideoTexture:ae&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ct&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&x.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function _(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)E.push(V),E.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(v(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const E=y[x.type];let V;if(E){const k=ai[E];V=C1.clone(k.uniforms)}else V=x.uniforms;return V}function b(x,E){let V;for(let k=0,W=u.length;k<W;k++){const ee=u[k];if(ee.cacheKey===E){V=ee,++V.usedTimes;break}}return V===void 0&&(V=new HA(t,E,x,s),u.push(V)),V}function w(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function L(x){l.remove(x)}function q(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:P,acquireProgram:b,releaseProgram:w,releaseShaderCache:L,programs:u,dispose:q}}function $A(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function XA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,d,m,y,g){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:h,material:d,groupOrder:m,renderOrder:p.renderOrder,z:y,group:g},t[e]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=d,f.groupOrder=m,f.renderOrder=p.renderOrder,f.z=y,f.group=g),e++,f}function a(p,h,d,m,y,g){const f=o(p,h,d,m,y,g);d.transmission>0?i.push(f):d.transparent===!0?r.push(f):n.push(f)}function l(p,h,d,m,y,g){const f=o(p,h,d,m,y,g);d.transmission>0?i.unshift(f):d.transparent===!0?r.unshift(f):n.unshift(f)}function c(p,h){n.length>1&&n.sort(p||XA),i.length>1&&i.sort(h||xg),r.length>1&&r.sort(h||xg)}function u(){for(let p=e,h=t.length;p<h;p++){const d=t[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new yg,t.set(i,[o])):r>=s.length?(o=new yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function YA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ze};break;case"SpotLight":n={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function KA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JA=0;function ZA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QA(t){const e=new YA,n=KA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new vt,o=new vt;function a(c){let u=0,p=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let d=0,m=0,y=0,g=0,f=0,_=0,v=0,S=0,P=0,b=0,w=0;c.sort(ZA);for(let q=0,x=c.length;q<x;q++){const E=c[q],V=E.color,k=E.intensity,W=E.distance,ee=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=V.r*k,p+=V.g*k,h+=V.b*k;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],k);w++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const re=E.shadow,N=n.get(E);N.shadowIntensity=re.intensity,N.shadowBias=re.bias,N.shadowNormalBias=re.normalBias,N.shadowRadius=re.radius,N.shadowMapSize=re.mapSize,i.directionalShadow[d]=N,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=E.shadow.matrix,_++}i.directional[d]=H,d++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(V).multiplyScalar(k),H.distance=W,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[y]=H;const re=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,re.updateMatrices(E),E.castShadow&&b++),i.spotLightMatrix[y]=re.matrix,E.castShadow){const N=n.get(E);N.shadowIntensity=re.intensity,N.shadowBias=re.bias,N.shadowNormalBias=re.normalBias,N.shadowRadius=re.radius,N.shadowMapSize=re.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=ee,S++}y++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(V).multiplyScalar(k),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=H,g++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const re=E.shadow,N=n.get(E);N.shadowIntensity=re.intensity,N.shadowBias=re.bias,N.shadowNormalBias=re.normalBias,N.shadowRadius=re.radius,N.shadowMapSize=re.mapSize,N.shadowCameraNear=re.camera.near,N.shadowCameraFar=re.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=E.shadow.matrix,v++}i.point[m]=H,m++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(k),H.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[f]=H,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==y||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==v||L.numSpotShadows!==S||L.numSpotMaps!==P||L.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,L.directionalLength=d,L.pointLength=m,L.spotLength=y,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=v,L.numSpotShadows=S,L.numSpotMaps=P,L.numLightProbes=w,i.version=JA++)}function l(c,u){let p=0,h=0,d=0,m=0,y=0;const g=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const v=c[f];if(v.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function Sg(t){const e=new QA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function eb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sg(t),e.set(r,[a])):s>=o.length?(a=new Sg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class tb extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nb extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
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
}`;function sb(t,e,n){let i=new Wf;const r=new _e,s=new _e,o=new Tt,a=new tb({depthPacking:JM}),l=new nb,c={},u=n.maxTextureSize,p={[dr]:_n,[_n]:dr,[kn]:kn},h=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ib,fragmentShader:rb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new xn;m.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m_;let f=this.type;this.render=function(b,w,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const q=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),V=t.state;V.setBlending(sr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=f!==xi&&this.type===xi,W=f===xi&&this.type!==xi;for(let ee=0,H=b.length;ee<H;ee++){const re=b[ee],N=re.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const te=N.getFrameExtents();if(r.multiply(te),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,N.mapSize.y=s.y)),N.map===null||k===!0||W===!0){const de=this.type!==xi?{minFilter:en,magFilter:en}:{};N.map!==null&&N.map.dispose(),N.map=new qr(r.x,r.y,de),N.map.texture.name=re.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let de=0;de<Z;de++){const Le=N.getViewport(de);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),V.viewport(o),N.updateMatrices(re,de),i=N.getFrustum(),S(w,L,N.camera,re,this.type)}N.isPointLightShadow!==!0&&this.type===xi&&_(N,L),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(q,x,E)};function _(b,w){const L=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,L,h,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,L,d,y,null)}function v(b,w,L,q){let x=null;const E=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)x=E;else if(x=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=x.uuid,k=w.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let ee=W[k];ee===void 0&&(ee=x.clone(),W[k]=ee,w.addEventListener("dispose",P)),x=ee}if(x.visible=w.visible,x.wireframe=w.wireframe,q===xi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:p[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=t.properties.get(x);V.light=L}return x}function S(b,w,L,q,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===xi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const k=e.update(b),W=b.material;if(Array.isArray(W)){const ee=k.groups;for(let H=0,re=ee.length;H<re;H++){const N=ee[H],te=W[N.materialIndex];if(te&&te.visible){const Z=v(b,te,q,x);b.onBeforeShadow(t,b,w,L,k,Z,N),t.renderBufferDirect(L,null,k,Z,b,N),b.onAfterShadow(t,b,w,L,k,Z,N)}}}else if(W.visible){const ee=v(b,W,q,x);b.onBeforeShadow(t,b,w,L,k,ee,null),t.renderBufferDirect(L,null,k,ee,b,null),b.onAfterShadow(t,b,w,L,k,ee,null)}}const V=b.children;for(let k=0,W=V.length;k<W;k++)S(V[k],w,L,q,x)}function P(b){b.target.removeEventListener("dispose",P);for(const L in c){const q=c[L],x=b.target.uuid;x in q&&(q[x].dispose(),delete q[x])}}}const ob={[Wd]:jd,[$d]:Yd,[Xd]:Kd,[$s]:qd,[jd]:Wd,[Yd]:$d,[Kd]:Xd,[qd]:$s};function ab(t){function e(){let U=!1;const Ae=new Tt;let J=null;const ce=new Tt(0,0,0,0);return{setMask:function(we){J!==we&&!U&&(t.colorMask(we,we,we,we),J=we)},setLocked:function(we){U=we},setClear:function(we,be,Je,Ct,cn){cn===!0&&(we*=Ct,be*=Ct,Je*=Ct),Ae.set(we,be,Je,Ct),ce.equals(Ae)===!1&&(t.clearColor(we,be,Je,Ct),ce.copy(Ae))},reset:function(){U=!1,J=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,Ae=!1,J=null,ce=null,we=null;return{setReversed:function(be){Ae=be},setTest:function(be){be?xe(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(be){J!==be&&!U&&(t.depthMask(be),J=be)},setFunc:function(be){if(Ae&&(be=ob[be]),ce!==be){switch(be){case Wd:t.depthFunc(t.NEVER);break;case jd:t.depthFunc(t.ALWAYS);break;case $d:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case Xd:t.depthFunc(t.EQUAL);break;case qd:t.depthFunc(t.GEQUAL);break;case Yd:t.depthFunc(t.GREATER);break;case Kd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=be}},setLocked:function(be){U=be},setClear:function(be){we!==be&&(t.clearDepth(be),we=be)},reset:function(){U=!1,J=null,ce=null,we=null}}}function i(){let U=!1,Ae=null,J=null,ce=null,we=null,be=null,Je=null,Ct=null,cn=null;return{setTest:function(et){U||(et?xe(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(et){Ae!==et&&!U&&(t.stencilMask(et),Ae=et)},setFunc:function(et,un,fi){(J!==et||ce!==un||we!==fi)&&(t.stencilFunc(et,un,fi),J=et,ce=un,we=fi)},setOp:function(et,un,fi){(be!==et||Je!==un||Ct!==fi)&&(t.stencilOp(et,un,fi),be=et,Je=un,Ct=fi)},setLocked:function(et){U=et},setClear:function(et){cn!==et&&(t.clearStencil(et),cn=et)},reset:function(){U=!1,Ae=null,J=null,ce=null,we=null,be=null,Je=null,Ct=null,cn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,h=[],d=null,m=!1,y=null,g=null,f=null,_=null,v=null,S=null,P=null,b=new Ze(0,0,0),w=0,L=!1,q=null,x=null,E=null,V=null,k=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,H=0;const re=t.getParameter(t.VERSION);re.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(re)[1]),ee=H>=1):re.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ee=H>=2);let N=null,te={};const Z=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Le=new Tt().fromArray(Z),Be=new Tt().fromArray(de);function Y(U,Ae,J,ce){const we=new Uint8Array(4),be=t.createTexture();t.bindTexture(U,be),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<J;Je++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(Ae+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return be}const ue={};ue[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xe(t.DEPTH_TEST),s.setFunc($s),j(!1),K(Rm),xe(t.CULL_FACE),C(sr);function xe(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function pe(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Q(U,Ae){return u[U]!==Ae?(t.bindFramebuffer(U,Ae),u[U]=Ae,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Ae),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function I(U,Ae){let J=h,ce=!1;if(U){J=p.get(Ae),J===void 0&&(J=[],p.set(Ae,J));const we=U.textures;if(J.length!==we.length||J[0]!==t.COLOR_ATTACHMENT0){for(let be=0,Je=we.length;be<Je;be++)J[be]=t.COLOR_ATTACHMENT0+be;J.length=we.length,ce=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ce=!0);ce&&t.drawBuffers(J)}function oe(U){return d!==U?(t.useProgram(U),d=U,!0):!1}const ae={[Rr]:t.FUNC_ADD,[EM]:t.FUNC_SUBTRACT,[wM]:t.FUNC_REVERSE_SUBTRACT};ae[TM]=t.MIN,ae[AM]=t.MAX;const X={[bM]:t.ZERO,[CM]:t.ONE,[RM]:t.SRC_COLOR,[Vd]:t.SRC_ALPHA,[UM]:t.SRC_ALPHA_SATURATE,[DM]:t.DST_COLOR,[LM]:t.DST_ALPHA,[PM]:t.ONE_MINUS_SRC_COLOR,[Gd]:t.ONE_MINUS_SRC_ALPHA,[IM]:t.ONE_MINUS_DST_COLOR,[NM]:t.ONE_MINUS_DST_ALPHA,[kM]:t.CONSTANT_COLOR,[FM]:t.ONE_MINUS_CONSTANT_COLOR,[OM]:t.CONSTANT_ALPHA,[zM]:t.ONE_MINUS_CONSTANT_ALPHA};function C(U,Ae,J,ce,we,be,Je,Ct,cn,et){if(U===sr){m===!0&&(pe(t.BLEND),m=!1);return}if(m===!1&&(xe(t.BLEND),m=!0),U!==MM){if(U!==y||et!==L){if((g!==Rr||v!==Rr)&&(t.blendEquation(t.FUNC_ADD),g=Rr,v=Rr),et)switch(U){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pm:t.blendFunc(t.ONE,t.ONE);break;case Lm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,_=null,S=null,P=null,b.set(0,0,0),w=0,y=U,L=et}return}we=we||Ae,be=be||J,Je=Je||ce,(Ae!==g||we!==v)&&(t.blendEquationSeparate(ae[Ae],ae[we]),g=Ae,v=we),(J!==f||ce!==_||be!==S||Je!==P)&&(t.blendFuncSeparate(X[J],X[ce],X[be],X[Je]),f=J,_=ce,S=be,P=Je),(Ct.equals(b)===!1||cn!==w)&&(t.blendColor(Ct.r,Ct.g,Ct.b,cn),b.copy(Ct),w=cn),y=U,L=!1}function D(U,Ae){U.side===kn?pe(t.CULL_FACE):xe(t.CULL_FACE);let J=U.side===_n;Ae&&(J=!J),j(J),U.blending===Us&&U.transparent===!1?C(sr):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ce=U.stencilWrite;o.setTest(ce),ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){q!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),q=U)}function K(U){U!==yM?(xe(t.CULL_FACE),U!==x&&(U===Rm?t.cullFace(t.BACK):U===SM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),x=U}function se(U){U!==E&&(ee&&t.lineWidth(U),E=U)}function ye(U,Ae,J){U?(xe(t.POLYGON_OFFSET_FILL),(V!==Ae||k!==J)&&(t.polygonOffset(Ae,J),V=Ae,k=J)):pe(t.POLYGON_OFFSET_FILL)}function ge(U){U?xe(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+W-1),N!==U&&(t.activeTexture(U),N=U)}function M(U,Ae,J){J===void 0&&(N===null?J=t.TEXTURE0+W-1:J=N);let ce=te[J];ce===void 0&&(ce={type:void 0,texture:void 0},te[J]=ce),(ce.type!==U||ce.texture!==Ae)&&(N!==J&&(t.activeTexture(J),N=J),t.bindTexture(U,Ae||ue[U]),ce.type=U,ce.texture=Ae)}function B(){const U=te[N];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(U){Le.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Le.copy(U))}function Ne(U){Be.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Be.copy(U))}function Ke(U,Ae){let J=l.get(Ae);J===void 0&&(J=new WeakMap,l.set(Ae,J));let ce=J.get(U);ce===void 0&&(ce=t.getUniformBlockIndex(Ae,U.name),J.set(U,ce))}function We(U,Ae){const ce=l.get(Ae).get(U);a.get(Ae)!==ce&&(t.uniformBlockBinding(Ae,ce,U.__bindingPointIndex),a.set(Ae,ce))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,te={},u={},p=new WeakMap,h=[],d=null,m=!1,y=null,g=null,f=null,_=null,v=null,S=null,P=null,b=new Ze(0,0,0),w=0,L=!1,q=null,x=null,E=null,V=null,k=null,Le.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:xe,disable:pe,bindFramebuffer:Q,drawBuffers:I,useProgram:oe,setBlending:C,setMaterial:D,setFlipSided:j,setCullFace:K,setLineWidth:se,setPolygonOffset:ye,setScissorTest:ge,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:ne,compressedTexImage3D:le,texImage2D:Re,texImage3D:Ve,updateUBOMapping:Ke,uniformBlockBinding:We,texStorage2D:Ye,texStorage3D:me,texSubImage2D:ie,texSubImage3D:Ie,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ce,scissor:Ge,viewport:Ne,reset:ct}}function Mg(t,e,n,i){const r=lb(i);switch(n){case S_:return t*e;case E_:return t*e;case w_:return t*e*2;case Ff:return t*e/r.components*r.byteLength;case Of:return t*e/r.components*r.byteLength;case T_:return t*e*2/r.components*r.byteLength;case zf:return t*e*2/r.components*r.byteLength;case M_:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case Bf:return t*e*4/r.components*r.byteLength;case Sl:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case El:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(t,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(t,8)*Math.max(e,8)/2;case rh:case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Sh:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case A_:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wh:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lb(t){switch(t){case Li:case __:return{byteLength:1,components:1};case sa:case x_:case ga:return{byteLength:2,components:1};case Uf:case kf:return{byteLength:2,components:4};case Xr:case If:case wi:return{byteLength:4,components:1};case y_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function cb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let p;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return d?new OffscreenCanvas(R,M):rc("canvas")}function y(R,M,B){let ne=1;const le=ge(R);if((le.width>B||le.height>B)&&(ne=B/Math.max(le.width,le.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(ne*le.width),Ie=Math.floor(ne*le.height);p===void 0&&(p=m(ie,Ie));const Me=M?m(ie,Ie):p;return Me.width=ie,Me.height=Ie,Me.getContext("2d").drawImage(R,0,0,ie,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ie+"x"+Ie+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==en&&R.minFilter!==Zn}function f(R){t.generateMipmap(R)}function _(R,M,B,ne,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=M;if(M===t.RED&&(B===t.FLOAT&&(ie=t.R32F),B===t.HALF_FLOAT&&(ie=t.R16F),B===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.R8UI),B===t.UNSIGNED_SHORT&&(ie=t.R16UI),B===t.UNSIGNED_INT&&(ie=t.R32UI),B===t.BYTE&&(ie=t.R8I),B===t.SHORT&&(ie=t.R16I),B===t.INT&&(ie=t.R32I)),M===t.RG&&(B===t.FLOAT&&(ie=t.RG32F),B===t.HALF_FLOAT&&(ie=t.RG16F),B===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.RG8UI),B===t.UNSIGNED_SHORT&&(ie=t.RG16UI),B===t.UNSIGNED_INT&&(ie=t.RG32UI),B===t.BYTE&&(ie=t.RG8I),B===t.SHORT&&(ie=t.RG16I),B===t.INT&&(ie=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.RGB8UI),B===t.UNSIGNED_SHORT&&(ie=t.RGB16UI),B===t.UNSIGNED_INT&&(ie=t.RGB32UI),B===t.BYTE&&(ie=t.RGB8I),B===t.SHORT&&(ie=t.RGB16I),B===t.INT&&(ie=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(ie=t.RGBA16UI),B===t.UNSIGNED_INT&&(ie=t.RGBA32UI),B===t.BYTE&&(ie=t.RGBA8I),B===t.SHORT&&(ie=t.RGBA16I),B===t.INT&&(ie=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),M===t.RGBA){const Ie=le?ec:it.getTransfer(ne);B===t.FLOAT&&(ie=t.RGBA32F),B===t.HALF_FLOAT&&(ie=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ie=Ie===ft?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(R,M){let B;return R?M===null||M===Xr||M===Ys?B=t.DEPTH24_STENCIL8:M===wi?B=t.DEPTH32F_STENCIL8:M===sa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xr||M===Ys?B=t.DEPTH_COMPONENT24:M===wi?B=t.DEPTH_COMPONENT32F:M===sa&&(B=t.DEPTH_COMPONENT16),B}function S(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==Zn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),w(M),M.isVideoTexture&&u.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),q(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,ne=h.get(B);if(ne){const le=ne[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(R),Object.keys(ne).length===0&&h.delete(B)}i.remove(R)}function L(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,ne=h.get(B);delete ne[M.__cacheKey],o.memory.textures--}function q(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let le=0;le<M.__webglFramebuffer[ne].length;le++)t.deleteFramebuffer(M.__webglFramebuffer[ne][le]);else t.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ne]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let ne=0,le=B.length;ne<le;ne++){const ie=i.get(B[ne]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(B[ne])}i.remove(R)}let x=0;function E(){x=0}function V(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const B=i.get(R);if(R.isVideoTexture&&se(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function ee(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Be(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function H(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Be(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function re(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const N={[Ql]:t.REPEAT,[Ur]:t.CLAMP_TO_EDGE,[Qd]:t.MIRRORED_REPEAT},te={[en]:t.NEAREST,[YM]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[Zn]:t.LINEAR,[au]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},Z={[QM]:t.NEVER,[s1]:t.ALWAYS,[e1]:t.LESS,[C_]:t.LEQUAL,[t1]:t.EQUAL,[r1]:t.GEQUAL,[n1]:t.GREATER,[i1]:t.NOTEQUAL};function de(R,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zn||M.magFilter===au||M.magFilter===Oa||M.magFilter===kr||M.minFilter===Zn||M.minFilter===au||M.minFilter===Oa||M.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==Oa&&M.minFilter!==kr||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Le(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const ne=M.source;let le=h.get(ne);le===void 0&&(le={},h.set(ne,le));const ie=k(M);if(ie!==R.__cacheKey){le[ie]===void 0&&(le[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),le[ie].usedTimes++;const Ie=le[R.__cacheKey];Ie!==void 0&&(le[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&L(M)),R.__cacheKey=ie,R.__webglTexture=le[ie].texture}return B}function Be(R,M,B){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const le=Le(R,M),ie=M.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+B);const Ie=i.get(ie);if(ie.version!==Ie.__version||le===!0){n.activeTexture(t.TEXTURE0+B);const Me=it.getPrimaries(it.workingColorSpace),Ce=M.colorSpace===Xi?null:it.getPrimaries(M.colorSpace),Ye=M.colorSpace===Xi||Me===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let me=y(M.image,!1,r.maxTextureSize);me=ye(M,me);const Re=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type);let Ge=_(M.internalFormat,Re,Ve,M.colorSpace,M.isVideoTexture);de(ne,M);let Ne;const Ke=M.mipmaps,We=M.isVideoTexture!==!0,ct=Ie.__version===void 0||le===!0,U=ie.dataReady,Ae=S(M,me);if(M.isDepthTexture)Ge=v(M.format===Ks,M.type),ct&&(We?n.texStorage2D(t.TEXTURE_2D,1,Ge,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Ge,me.width,me.height,0,Re,Ve,null));else if(M.isDataTexture)if(Ke.length>0){We&&ct&&n.texStorage2D(t.TEXTURE_2D,Ae,Ge,Ke[0].width,Ke[0].height);for(let J=0,ce=Ke.length;J<ce;J++)Ne=Ke[J],We?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ne.width,Ne.height,Re,Ve,Ne.data):n.texImage2D(t.TEXTURE_2D,J,Ge,Ne.width,Ne.height,0,Re,Ve,Ne.data);M.generateMipmaps=!1}else We?(ct&&n.texStorage2D(t.TEXTURE_2D,Ae,Ge,me.width,me.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me.width,me.height,Re,Ve,me.data)):n.texImage2D(t.TEXTURE_2D,0,Ge,me.width,me.height,0,Re,Ve,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Ge,Ke[0].width,Ke[0].height,me.depth);for(let J=0,ce=Ke.length;J<ce;J++)if(Ne=Ke[J],M.format!==ei)if(Re!==null)if(We){if(U)if(M.layerUpdates.size>0){const we=Mg(Ne.width,Ne.height,M.format,M.type);for(const be of M.layerUpdates){const Je=Ne.data.subarray(be*we/Ne.data.BYTES_PER_ELEMENT,(be+1)*we/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,be,Ne.width,Ne.height,1,Re,Je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ne.width,Ne.height,me.depth,Re,Ne.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Ge,Ne.width,Ne.height,me.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ne.width,Ne.height,me.depth,Re,Ve,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Ge,Ne.width,Ne.height,me.depth,0,Re,Ve,Ne.data)}else{We&&ct&&n.texStorage2D(t.TEXTURE_2D,Ae,Ge,Ke[0].width,Ke[0].height);for(let J=0,ce=Ke.length;J<ce;J++)Ne=Ke[J],M.format!==ei?Re!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Ne.width,Ne.height,Re,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Ge,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ne.width,Ne.height,Re,Ve,Ne.data):n.texImage2D(t.TEXTURE_2D,J,Ge,Ne.width,Ne.height,0,Re,Ve,Ne.data)}else if(M.isDataArrayTexture)if(We){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Ge,me.width,me.height,me.depth),U)if(M.layerUpdates.size>0){const J=Mg(me.width,me.height,M.format,M.type);for(const ce of M.layerUpdates){const we=me.data.subarray(ce*J/me.data.BYTES_PER_ELEMENT,(ce+1)*J/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,Re,Ve,we)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,Ve,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ge,me.width,me.height,me.depth,0,Re,Ve,me.data);else if(M.isData3DTexture)We?(ct&&n.texStorage3D(t.TEXTURE_3D,Ae,Ge,me.width,me.height,me.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,Ve,me.data)):n.texImage3D(t.TEXTURE_3D,0,Ge,me.width,me.height,me.depth,0,Re,Ve,me.data);else if(M.isFramebufferTexture){if(ct)if(We)n.texStorage2D(t.TEXTURE_2D,Ae,Ge,me.width,me.height);else{let J=me.width,ce=me.height;for(let we=0;we<Ae;we++)n.texImage2D(t.TEXTURE_2D,we,Ge,J,ce,0,Re,Ve,null),J>>=1,ce>>=1}}else if(Ke.length>0){if(We&&ct){const J=ge(Ke[0]);n.texStorage2D(t.TEXTURE_2D,Ae,Ge,J.width,J.height)}for(let J=0,ce=Ke.length;J<ce;J++)Ne=Ke[J],We?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Re,Ve,Ne):n.texImage2D(t.TEXTURE_2D,J,Ge,Re,Ve,Ne);M.generateMipmaps=!1}else if(We){if(ct){const J=ge(me);n.texStorage2D(t.TEXTURE_2D,Ae,Ge,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Ve,me)}else n.texImage2D(t.TEXTURE_2D,0,Ge,Re,Ve,me);g(M)&&f(ne),Ie.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Y(R,M,B){if(M.image.length!==6)return;const ne=Le(R,M),le=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ie=i.get(le);if(le.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const Ie=it.getPrimaries(it.workingColorSpace),Me=M.colorSpace===Xi?null:it.getPrimaries(M.colorSpace),Ce=M.colorSpace===Xi||Ie===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ye=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!Ye&&!me?Re[ce]=y(M.image[ce],!0,r.maxCubemapSize):Re[ce]=me?M.image[ce].image:M.image[ce],Re[ce]=ye(M,Re[ce]);const Ve=Re[0],Ge=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),Ke=_(M.internalFormat,Ge,Ne,M.colorSpace),We=M.isVideoTexture!==!0,ct=ie.__version===void 0||ne===!0,U=le.dataReady;let Ae=S(M,Ve);de(t.TEXTURE_CUBE_MAP,M);let J;if(Ye){We&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ke,Ve.width,Ve.height);for(let ce=0;ce<6;ce++){J=Re[ce].mipmaps;for(let we=0;we<J.length;we++){const be=J[we];M.format!==ei?Ge!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,be.width,be.height,Ge,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,Ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,be.width,be.height,Ge,Ne,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,Ke,be.width,be.height,0,Ge,Ne,be.data)}}}else{if(J=M.mipmaps,We&&ct){J.length>0&&Ae++;const ce=ge(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ke,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,Ge,Ne,Re[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,Re[ce].width,Re[ce].height,0,Ge,Ne,Re[ce].data);for(let we=0;we<J.length;we++){const Je=J[we].image[ce].image;We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,Je.width,Je.height,Ge,Ne,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,Ke,Je.width,Je.height,0,Ge,Ne,Je.data)}}else{We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ge,Ne,Re[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,Ge,Ne,Re[ce]);for(let we=0;we<J.length;we++){const be=J[we];We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,Ge,Ne,be.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,Ke,Ge,Ne,be.image[ce])}}}g(M)&&f(t.TEXTURE_CUBE_MAP),ie.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,B,ne,le,ie){const Ie=s.convert(B.format,B.colorSpace),Me=s.convert(B.type),Ce=_(B.internalFormat,Ie,Me,B.colorSpace);if(!i.get(M).__hasExternalTextures){const me=Math.max(1,M.width>>ie),Re=Math.max(1,M.height>>ie);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,ie,Ce,me,Re,M.depth,0,Ie,Me,null):n.texImage2D(le,ie,Ce,me,Re,0,Ie,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),K(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,le,i.get(B).__webglTexture,0,j(M)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,le,i.get(B).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const ne=M.depthTexture,le=ne&&ne.isDepthTexture?ne.type:null,ie=v(M.stencilBuffer,le),Ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=j(M);K(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ie,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,R)}else{const ne=M.textures;for(let le=0;le<ne.length;le++){const ie=ne[le],Ie=s.convert(ie.format,ie.colorSpace),Me=s.convert(ie.type),Ce=_(ie.internalFormat,Ie,Me,ie.colorSpace),Ye=j(M);B&&K(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Ce,M.width,M.height):K(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,Ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ne=i.get(M.depthTexture).__webglTexture,le=j(M);if(M.depthTexture.format===ks)K(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Ks)K(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Q(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",le)};ne.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=ne}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pe(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=t.createRenderbuffer(),xe(M.__webglDepthbuffer[ne],R,!1);else{const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,ie)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),xe(M.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,le)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(R,M,B){const ne=i.get(R);M!==void 0&&ue(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Q(R)}function oe(R){const M=R.texture,B=i.get(R),ne=i.get(M);R.addEventListener("dispose",b);const le=R.textures,ie=R.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,o.memory.textures++),ie){B.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[Me]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)B.__webglFramebuffer[Me][Ce]=t.createFramebuffer()}else B.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Me=0;Me<M.mipmaps.length;Me++)B.__webglFramebuffer[Me]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let Me=0,Ce=le.length;Me<Ce;Me++){const Ye=i.get(le[Me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&K(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Me=0;Me<le.length;Me++){const Ce=le[Me];B.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Me]);const Ye=s.convert(Ce.format,Ce.colorSpace),me=s.convert(Ce.type),Re=_(Ce.internalFormat,Ye,me,Ce.colorSpace,R.isXRRenderTarget===!0),Ve=j(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Re,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,B.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),xe(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),de(t.TEXTURE_CUBE_MAP,M);for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ue(B.__webglFramebuffer[Me][Ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ce);else ue(B.__webglFramebuffer[Me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let Me=0,Ce=le.length;Me<Ce;Me++){const Ye=le[Me],me=i.get(Ye);n.bindTexture(t.TEXTURE_2D,me.__webglTexture),de(t.TEXTURE_2D,Ye),ue(B.__webglFramebuffer,R,Ye,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),g(Ye)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,ne.__webglTexture),de(Me,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ue(B.__webglFramebuffer[Ce],R,M,t.COLOR_ATTACHMENT0,Me,Ce);else ue(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,Me,0);g(M)&&f(Me),n.unbindTexture()}R.depthBuffer&&Q(R)}function ae(R){const M=R.textures;for(let B=0,ne=M.length;B<ne;B++){const le=M[B];if(g(le)){const ie=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(le).__webglTexture;n.bindTexture(ie,Ie),f(ie),n.unbindTexture()}}}const X=[],C=[];function D(R){if(R.samples>0){if(K(R)===!1){const M=R.textures,B=R.width,ne=R.height;let le=t.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(R),Me=M.length>1;if(Me)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const Ye=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,le,t.NEAREST),l===!0&&(X.length=0,C.length=0,X.push(t.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(X.push(ie),C.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,C)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,X))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const Ye=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function j(R){return Math.min(r.maxSamples,R.samples)}function K(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ye(R,M){const B=R.colorSpace,ne=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==gr&&B!==Xi&&(it.getTransfer(B)===ft?(ne!==ei||le!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=ee,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=I,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=K}function ub(t,e){function n(i,r=Xi){let s;const o=it.getTransfer(r);if(i===Li)return t.UNSIGNED_BYTE;if(i===Uf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===y_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===__)return t.BYTE;if(i===x_)return t.SHORT;if(i===sa)return t.UNSIGNED_SHORT;if(i===If)return t.INT;if(i===Xr)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===ga)return t.HALF_FLOAT;if(i===S_)return t.ALPHA;if(i===M_)return t.RGB;if(i===ei)return t.RGBA;if(i===E_)return t.LUMINANCE;if(i===w_)return t.LUMINANCE_ALPHA;if(i===ks)return t.DEPTH_COMPONENT;if(i===Ks)return t.DEPTH_STENCIL;if(i===Ff)return t.RED;if(i===Of)return t.RED_INTEGER;if(i===T_)return t.RG;if(i===zf)return t.RG_INTEGER;if(i===Bf)return t.RGBA_INTEGER;if(i===Sl||i===Ml||i===El||i===wl)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rh||i===sh||i===oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rh||i===sh)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ah||i===lh||i===ch||i===uh||i===dh||i===hh||i===fh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh||i===yh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ah)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ch)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ph)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===Sh||i===Mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tl)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===A_||i===Eh||i===wh||i===Th)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class db extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hb={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pb=`
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

}`;class mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:fb,fragmentShader:pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gb extends ro{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,h=null,d=null,m=null;const y=new mb,g=n.getContextAttributes();let f=null,_=null;const v=[],S=[],P=new _e;let b=null;const w=new Tn;w.layers.enable(1),w.viewport=new Tt;const L=new Tn;L.layers.enable(2),L.viewport=new Tt;const q=[w,L],x=new db;x.layers.enable(1),x.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=v[Y];return ue===void 0&&(ue=new Fu,v[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=v[Y];return ue===void 0&&(ue=new Fu,v[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=v[Y];return ue===void 0&&(ue=new Fu,v[Y]=ue),ue.getHandSpace()};function k(Y){const ue=S.indexOf(Y.inputSource);if(ue===-1)return;const xe=v[ue];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<v.length;Y++){const ue=S[Y];ue!==null&&(S[Y]=null,v[Y].disconnect(ue))}E=null,V=null,y.reset(),e.setRenderTarget(f),d=null,h=null,p=null,r=null,_=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new qr(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,xe=null,pe=null;g.depth&&(pe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?Ks:ks,xe=g.stencil?Ys:Xr);const Q={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Q),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new qr(h.textureWidth,h.textureHeight,{format:ei,type:Li,depthTexture:new B_(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ee(Y){for(let ue=0;ue<Y.removed.length;ue++){const xe=Y.removed[ue],pe=S.indexOf(xe);pe>=0&&(S[pe]=null,v[pe].disconnect(xe))}for(let ue=0;ue<Y.added.length;ue++){const xe=Y.added[ue];let pe=S.indexOf(xe);if(pe===-1){for(let I=0;I<v.length;I++)if(I>=S.length){S.push(xe),pe=I;break}else if(S[I]===null){S[I]=xe,pe=I;break}if(pe===-1)break}const Q=v[pe];Q&&Q.connect(xe)}}const H=new F,re=new F;function N(Y,ue,xe){H.setFromMatrixPosition(ue.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const pe=H.distanceTo(re),Q=ue.projectionMatrix.elements,I=xe.projectionMatrix.elements,oe=Q[14]/(Q[10]-1),ae=Q[14]/(Q[10]+1),X=(Q[9]+1)/Q[5],C=(Q[9]-1)/Q[5],D=(Q[8]-1)/Q[0],j=(I[8]+1)/I[0],K=oe*D,se=oe*j,ye=pe/(-D+j),ge=ye*-D;if(ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ge),Y.translateZ(ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Q[10]===-1)Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const R=oe+ye,M=ae+ye,B=K-ge,ne=se+(pe-ge),le=X*ae/M*R,ie=C*ae/M*R;Y.projectionMatrix.makePerspective(B,ne,le,ie,R,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ue=Y.near,xe=Y.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),x.near=L.near=w.near=ue,x.far=L.far=w.far=xe,(E!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,V=x.far);const pe=Y.parent,Q=x.cameras;te(x,pe);for(let I=0;I<Q.length;I++)te(Q[I],pe);Q.length===2?N(x,w,L):x.projectionMatrix.copy(w.projectionMatrix),Z(Y,x,pe)};function Z(Y,ue,xe){xe===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ah*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let de=null;function Le(Y,ue){if(u=ue.getViewerPose(c||o),m=ue,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let pe=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let I=0;I<xe.length;I++){const oe=xe[I];let ae=null;if(d!==null)ae=d.getViewport(oe);else{const C=p.getViewSubImage(h,oe);ae=C.viewport,I===0&&(e.setRenderTargetTextures(_,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(_))}let X=q[I];X===void 0&&(X=new Tn,X.layers.enable(I),X.viewport=new Tt,q[I]=X),X.matrix.fromArray(oe.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(oe.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&(x.matrix.copy(X.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(X)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const I=p.getDepthInformation(xe[0]);I&&I.isValid&&I.texture&&y.init(e,I,r.renderState)}}for(let xe=0;xe<v.length;xe++){const pe=S[xe],Q=v[xe];pe!==null&&Q!==void 0&&Q.update(pe,ue,c||o)}de&&de(Y,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),m=null}const Be=new z_;Be.setAnimationLoop(Le),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const Er=new Ni,vb=new vt;function _b(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,k_(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&d(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),y(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,_,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===_n&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===_n&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,S=_.envMapRotation;v&&(g.envMap.value=v,Er.copy(S),Er.x*=-1,Er.y*=-1,Er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),g.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(Er)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(m(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const P=v.program;i.updateUBOMapping(_,P);const b=e.render.frame;s[_.id]!==b&&(h(_),s[_.id]=b)}function u(_){const v=p();_.__bindingPointIndex=v;const S=t.createBuffer(),P=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,w=S.length;b<w;b++){const L=Array.isArray(S[b])?S[b]:[S[b]];for(let q=0,x=L.length;q<x;q++){const E=L[q];if(d(E,b,q,P)===!0){const V=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let ee=0;ee<k.length;ee++){const H=k[ee],re=y(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,V+W,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(_,v,S,P){const b=_.value,w=v+"_"+S;if(P[w]===void 0)return typeof b=="number"||typeof b=="boolean"?P[w]=b:P[w]=b.clone(),!0;{const L=P[w];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return P[w]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function m(_){const v=_.uniforms;let S=0;const P=16;for(let w=0,L=v.length;w<L;w++){const q=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,E=q.length;x<E;x++){const V=q[x],k=Array.isArray(V.value)?V.value:[V.value];for(let W=0,ee=k.length;W<ee;W++){const H=k[W],re=y(H),N=S%P,te=N%re.boundary,Z=N+te;S+=te,Z!==0&&P-Z<re.storage&&(S+=P-Z),V.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=re.storage}}}const b=S%P;return b>0&&(S+=P-b),_.__size=S,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Xf{constructor(e={}){const{canvas:n=a1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),m=new Int32Array(4);let y=null,g=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=or,this.toneMappingExposure=1;const v=this;let S=!1,P=0,b=0,w=null,L=-1,q=null;const x=new Tt,E=new Tt;let V=null;const k=new Ze(0);let W=0,ee=n.width,H=n.height,re=1,N=null,te=null;const Z=new Tt(0,0,ee,H),de=new Tt(0,0,ee,H);let Le=!1;const Be=new Wf;let Y=!1,ue=!1;const xe=new vt,pe=new vt,Q=new F,I=new Tt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function X(){return w===null?re:1}let C=i;function D(A,O){return n.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",be,!1),C===null){const O="webgl2";if(C=D(O,A),C===null)throw D(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let j,K,se,ye,ge,R,M,B,ne,le,ie,Ie,Me,Ce,Ye,me,Re,Ve,Ge,Ne,Ke,We,ct,U;function Ae(){j=new TT(C),j.init(),We=new ub(C,j),K=new xT(C,j,e,We),se=new ab(C),K.reverseDepthBuffer&&se.buffers.depth.setReversed(!0),ye=new CT(C),ge=new $A,R=new cb(C,j,se,ge,K,We,ye),M=new ST(v),B=new wT(v),ne=new U1(C),ct=new vT(C,ne),le=new AT(C,ne,ye,ct),ie=new PT(C,le,ne,ye),Ge=new RT(C,K,R),me=new yT(ge),Ie=new jA(v,M,B,j,K,ct,me),Me=new _b(v,ge),Ce=new qA,Ye=new eb(j),Ve=new gT(v,M,B,se,ie,h,l),Re=new sb(v,ie,K),U=new xb(C,ye,K,se),Ne=new _T(C,j,ye),Ke=new bT(C,j,ye),ye.programs=Ie.programs,v.capabilities=K,v.extensions=j,v.properties=ge,v.renderLists=Ce,v.shadowMap=Re,v.state=se,v.info=ye}Ae();const J=new gb(v,C);this.xr=J,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=j.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=j.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(ee,H,!1))},this.getSize=function(A){return A.set(ee,H)},this.setSize=function(A,O,G=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,H=O,n.width=Math.floor(A*re),n.height=Math.floor(O*re),G===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(ee*re,H*re).floor()},this.setDrawingBufferSize=function(A,O,G){ee=A,H=O,re=G,n.width=Math.floor(A*G),n.height=Math.floor(O*G),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,O,G,$){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,O,G,$),se.viewport(x.copy(Z).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(de)},this.setScissor=function(A,O,G,$){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,O,G,$),se.scissor(E.copy(de).multiplyScalar(re).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){se.setScissorTest(Le=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,O=!0,G=!0){let $=0;if(A){let z=!1;if(w!==null){const ve=w.texture.format;z=ve===Bf||ve===zf||ve===Of}if(z){const ve=w.texture.type,Te=ve===Li||ve===Xr||ve===sa||ve===Ys||ve===Uf||ve===kf,De=Ve.getClearColor(),Ue=Ve.getClearAlpha(),ze=De.r,He=De.g,ke=De.b;Te?(d[0]=ze,d[1]=He,d[2]=ke,d[3]=Ue,C.clearBufferuiv(C.COLOR,0,d)):(m[0]=ze,m[1]=He,m[2]=ke,m[3]=Ue,C.clearBufferiv(C.COLOR,0,m))}else $|=C.COLOR_BUFFER_BIT}O&&($|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&($|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ce.dispose(),Ye.dispose(),ge.dispose(),M.dispose(),B.dispose(),ie.dispose(),ct.dispose(),U.dispose(),Ie.dispose(),J.dispose(),J.removeEventListener("sessionstart",ap),J.removeEventListener("sessionend",lp),vr.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ye.autoReset,O=Re.enabled,G=Re.autoUpdate,$=Re.needsUpdate,z=Re.type;Ae(),ye.autoReset=A,Re.enabled=O,Re.autoUpdate=G,Re.needsUpdate=$,Re.type=z}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Je(A){const O=A.target;O.removeEventListener("dispose",Je),Ct(O)}function Ct(A){cn(A),ge.remove(A)}function cn(A){const O=ge.get(A).programs;O!==void 0&&(O.forEach(function(G){Ie.releaseProgram(G)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,G,$,z,ve){O===null&&(O=oe);const Te=z.isMesh&&z.matrixWorld.determinant()<0,De=lx(A,O,G,$,z);se.setMaterial($,Te);let Ue=G.index,ze=1;if($.wireframe===!0){if(Ue=le.getWireframeAttribute(G),Ue===void 0)return;ze=2}const He=G.drawRange,ke=G.attributes.position;let rt=He.start*ze,dt=(He.start+He.count)*ze;ve!==null&&(rt=Math.max(rt,ve.start*ze),dt=Math.min(dt,(ve.start+ve.count)*ze)),Ue!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Ue.count)):ke!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,ke.count));const Mt=dt-rt;if(Mt<0||Mt===1/0)return;ct.setup(z,$,De,G,Ue);let yn,tt=Ne;if(Ue!==null&&(yn=ne.get(Ue),tt=Ke,tt.setIndex(yn)),z.isMesh)$.wireframe===!0?(se.setLineWidth($.wireframeLinewidth*X()),tt.setMode(C.LINES)):tt.setMode(C.TRIANGLES);else if(z.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),se.setLineWidth(Fe*X()),z.isLineSegments?tt.setMode(C.LINES):z.isLineLoop?tt.setMode(C.LINE_LOOP):tt.setMode(C.LINE_STRIP)}else z.isPoints?tt.setMode(C.POINTS):z.isSprite&&tt.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,Bt=z._multiDrawCounts,nt=z._multiDrawCount,Hn=Ue?ne.get(Ue).bytesPerElement:1,Zr=ge.get($).currentProgram.getUniforms();for(let Sn=0;Sn<nt;Sn++)Zr.setValue(C,"_gl_DrawID",Sn),tt.render(Fe[Sn]/Hn,Bt[Sn])}else if(z.isInstancedMesh)tt.renderInstances(rt,Mt,z.count);else if(G.isInstancedBufferGeometry){const Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Bt=Math.min(G.instanceCount,Fe);tt.renderInstances(rt,Mt,Bt)}else tt.render(rt,Mt)};function et(A,O,G){A.transparent===!0&&A.side===kn&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,ya(A,O,G),A.side=dr,A.needsUpdate=!0,ya(A,O,G),A.side=kn):ya(A,O,G)}this.compile=function(A,O,G=null){G===null&&(G=A),g=Ye.get(G),g.init(O),_.push(g),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),A!==G&&A.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const $=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const De=ve[Te];et(De,G,z),$.add(De)}else et(ve,G,z),$.add(ve)}),_.pop(),g=null,$},this.compileAsync=function(A,O,G=null){const $=this.compile(A,O,G);return new Promise(z=>{function ve(){if($.forEach(function(Te){ge.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){z(A);return}setTimeout(ve,10)}j.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let un=null;function fi(A){un&&un(A)}function ap(){vr.stop()}function lp(){vr.start()}const vr=new z_;vr.setAnimationLoop(fi),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(A){un=A,J.setAnimationLoop(A),A===null?vr.stop():vr.start()},J.addEventListener("sessionstart",ap),J.addEventListener("sessionend",lp),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,w),g=Ye.get(A,_.length),g.init(O),_.push(g),pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(pe),ue=this.localClippingEnabled,Y=me.init(this.clippingPlanes,ue),y=Ce.get(A,f.length),y.init(),f.push(y),J.enabled===!0&&J.isPresenting===!0){const ve=v.xr.getDepthSensingMesh();ve!==null&&Pc(ve,O,-1/0,v.sortObjects)}Pc(A,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(N,te),ae=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ae&&Ve.addToRenderList(y,A),this.info.render.frame++,Y===!0&&me.beginShadows();const G=g.state.shadowsArray;Re.render(G,A,O),Y===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,z=y.transmissive;if(g.setupLights(),O.isArrayCamera){const ve=O.cameras;if(z.length>0)for(let Te=0,De=ve.length;Te<De;Te++){const Ue=ve[Te];up($,z,A,Ue)}ae&&Ve.render(A);for(let Te=0,De=ve.length;Te<De;Te++){const Ue=ve[Te];cp(y,A,Ue,Ue.viewport)}}else z.length>0&&up($,z,A,O),ae&&Ve.render(A),cp(y,A,O);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,O),ct.resetDefaultState(),L=-1,q=null,_.pop(),_.length>0?(g=_[_.length-1],Y===!0&&me.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Pc(A,O,G,$){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){$&&I.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const Te=ie.update(A),De=A.material;De.visible&&y.push(A,Te,De,G,I.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const Te=ie.update(A),De=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),I.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),I.copy(Te.boundingSphere.center)),I.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(De)){const Ue=Te.groups;for(let ze=0,He=Ue.length;ze<He;ze++){const ke=Ue[ze],rt=De[ke.materialIndex];rt&&rt.visible&&y.push(A,Te,rt,G,I.z,ke)}}else De.visible&&y.push(A,Te,De,G,I.z,null)}}const ve=A.children;for(let Te=0,De=ve.length;Te<De;Te++)Pc(ve[Te],O,G,$)}function cp(A,O,G,$){const z=A.opaque,ve=A.transmissive,Te=A.transparent;g.setupLightsView(G),Y===!0&&me.setGlobalState(v.clippingPlanes,G),$&&se.viewport(x.copy($)),z.length>0&&xa(z,O,G),ve.length>0&&xa(ve,O,G),Te.length>0&&xa(Te,O,G),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function up(A,O,G,$){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new qr(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?ga:Li,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ve=g.state.transmissionRenderTarget[$.id],Te=$.viewport||x;ve.setSize(Te.z,Te.w);const De=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(k),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),ae&&Ve.render(G);const Ue=v.toneMapping;v.toneMapping=or;const ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),Y===!0&&me.setGlobalState(v.clippingPlanes,$),xa(A,G,$),R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve),j.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,rt=O.length;ke<rt;ke++){const dt=O[ke],Mt=dt.object,yn=dt.geometry,tt=dt.material,Fe=dt.group;if(tt.side===kn&&Mt.layers.test($.layers)){const Bt=tt.side;tt.side=_n,tt.needsUpdate=!0,dp(Mt,G,$,yn,tt,Fe),tt.side=Bt,tt.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve))}v.setRenderTarget(De),v.setClearColor(k,W),ze!==void 0&&($.viewport=ze),v.toneMapping=Ue}function xa(A,O,G){const $=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ve=A.length;z<ve;z++){const Te=A[z],De=Te.object,Ue=Te.geometry,ze=$===null?Te.material:$,He=Te.group;De.layers.test(G.layers)&&dp(De,O,G,Ue,ze,He)}}function dp(A,O,G,$,z,ve){A.onBeforeRender(v,O,G,$,z,ve),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,O,G,$,A,ve),z.transparent===!0&&z.side===kn&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,v.renderBufferDirect(G,O,$,z,A,ve),z.side=dr,z.needsUpdate=!0,v.renderBufferDirect(G,O,$,z,A,ve),z.side=kn):v.renderBufferDirect(G,O,$,z,A,ve),A.onAfterRender(v,O,G,$,z,ve)}function ya(A,O,G){O.isScene!==!0&&(O=oe);const $=ge.get(A),z=g.state.lights,ve=g.state.shadowsArray,Te=z.state.version,De=Ie.getParameters(A,z.state,ve,O,G),Ue=Ie.getProgramCacheKey(De);let ze=$.programs;$.environment=A.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Je),ze=new Map,$.programs=ze);let He=ze.get(Ue);if(He!==void 0){if($.currentProgram===He&&$.lightsStateVersion===Te)return fp(A,De),He}else De.uniforms=Ie.getUniforms(A),A.onBeforeCompile(De,v),He=Ie.acquireProgram(De,Ue),ze.set(Ue,He),$.uniforms=De.uniforms;const ke=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=me.uniform),fp(A,De),$.needsLights=ux(A),$.lightsStateVersion=Te,$.needsLights&&(ke.ambientLightColor.value=z.state.ambient,ke.lightProbe.value=z.state.probe,ke.directionalLights.value=z.state.directional,ke.directionalLightShadows.value=z.state.directionalShadow,ke.spotLights.value=z.state.spot,ke.spotLightShadows.value=z.state.spotShadow,ke.rectAreaLights.value=z.state.rectArea,ke.ltc_1.value=z.state.rectAreaLTC1,ke.ltc_2.value=z.state.rectAreaLTC2,ke.pointLights.value=z.state.point,ke.pointLightShadows.value=z.state.pointShadow,ke.hemisphereLights.value=z.state.hemi,ke.directionalShadowMap.value=z.state.directionalShadowMap,ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ke.spotShadowMap.value=z.state.spotShadowMap,ke.spotLightMatrix.value=z.state.spotLightMatrix,ke.spotLightMap.value=z.state.spotLightMap,ke.pointShadowMap.value=z.state.pointShadowMap,ke.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=He,$.uniformsList=null,He}function hp(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=bl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function fp(A,O){const G=ge.get(A);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function lx(A,O,G,$,z){O.isScene!==!0&&(O=oe),R.resetTextureUnits();const ve=O.fog,Te=$.isMeshStandardMaterial?O.environment:null,De=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:gr,Ue=($.isMeshStandardMaterial?B:M).get($.envMap||Te),ze=$.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ke=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,dt=!!G.morphAttributes.color;let Mt=or;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const yn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tt=yn!==void 0?yn.length:0,Fe=ge.get($),Bt=g.state.lights;if(Y===!0&&(ue===!0||A!==q)){const Nn=A===q&&$.id===L;me.setState($,A,Nn)}let nt=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Bt.state.version||Fe.outputColorSpace!==De||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Ue||$.fog===!0&&Fe.fog!==ve||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==me.numPlanes||Fe.numIntersection!==me.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==He||Fe.morphTargets!==ke||Fe.morphNormals!==rt||Fe.morphColors!==dt||Fe.toneMapping!==Mt||Fe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Fe.__version=$.version);let Hn=Fe.currentProgram;nt===!0&&(Hn=ya($,O,z));let Zr=!1,Sn=!1,Lc=!1;const At=Hn.getUniforms(),Ii=Fe.uniforms;if(se.useProgram(Hn.program)&&(Zr=!0,Sn=!0,Lc=!0),$.id!==L&&(L=$.id,Sn=!0),Zr||q!==A){K.reverseDepthBuffer?(xe.copy(A.projectionMatrix),c1(xe),u1(xe),At.setValue(C,"projectionMatrix",xe)):At.setValue(C,"projectionMatrix",A.projectionMatrix),At.setValue(C,"viewMatrix",A.matrixWorldInverse);const Nn=At.map.cameraPosition;Nn!==void 0&&Nn.setValue(C,Q.setFromMatrixPosition(A.matrixWorld)),K.logarithmicDepthBuffer&&At.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&At.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,Sn=!0,Lc=!0)}if(z.isSkinnedMesh){At.setOptional(C,z,"bindMatrix"),At.setOptional(C,z,"bindMatrixInverse");const Nn=z.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),At.setValue(C,"boneTexture",Nn.boneTexture,R))}z.isBatchedMesh&&(At.setOptional(C,z,"batchingTexture"),At.setValue(C,"batchingTexture",z._matricesTexture,R),At.setOptional(C,z,"batchingIdTexture"),At.setValue(C,"batchingIdTexture",z._indirectTexture,R),At.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&At.setValue(C,"batchingColorTexture",z._colorsTexture,R));const Nc=G.morphAttributes;if((Nc.position!==void 0||Nc.normal!==void 0||Nc.color!==void 0)&&Ge.update(z,G,Hn),(Sn||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,At.setValue(C,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ii.envMap.value=Ue,Ii.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(Ii.envMapIntensity.value=O.environmentIntensity),Sn&&(At.setValue(C,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&cx(Ii,Lc),ve&&$.fog===!0&&Me.refreshFogUniforms(Ii,ve),Me.refreshMaterialUniforms(Ii,$,re,H,g.state.transmissionRenderTarget[A.id]),bl.upload(C,hp(Fe),Ii,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(bl.upload(C,hp(Fe),Ii,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&At.setValue(C,"center",z.center),At.setValue(C,"modelViewMatrix",z.modelViewMatrix),At.setValue(C,"normalMatrix",z.normalMatrix),At.setValue(C,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Nn=$.uniformsGroups;for(let Dc=0,dx=Nn.length;Dc<dx;Dc++){const pp=Nn[Dc];U.update(pp,Hn),U.bind(pp,Hn)}}return Hn}function cx(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function ux(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,G){ge.get(A.texture).__webglTexture=O,ge.get(A.depthTexture).__webglTexture=G;const $=ge.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=G===void 0,$.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const G=ge.get(A);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,G=0){w=A,P=O,b=G;let $=!0,z=null,ve=!1,Te=!1;if(A){const Ue=ge.get(A);if(Ue.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(C.FRAMEBUFFER,null),$=!1;else if(Ue.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Ue.__hasExternalTextures)R.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(Ue.__boundDepthTexture!==ke){if(ke!==null&&ge.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Te=!0);const He=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[O])?z=He[O][G]:z=He[O],ve=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?z=ge.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[G]:z=He,x.copy(A.viewport),E.copy(A.scissor),V=A.scissorTest}else x.copy(Z).multiplyScalar(re).floor(),E.copy(de).multiplyScalar(re).floor(),V=Le;if(se.bindFramebuffer(C.FRAMEBUFFER,z)&&$&&se.drawBuffers(A,z),se.viewport(x),se.scissor(E),se.setScissorTest(V),ve){const Ue=ge.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,G)}else if(Te){const Ue=ge.get(A.texture),ze=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ue.__webglTexture,G||0,ze)}L=-1},this.readRenderTargetPixels=function(A,O,G,$,z,ve,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){se.bindFramebuffer(C.FRAMEBUFFER,De);try{const Ue=A.texture,ze=Ue.format,He=Ue.type;if(!K.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-$&&G>=0&&G<=A.height-z&&C.readPixels(O,G,$,z,We.convert(ze),We.convert(He),ve)}finally{const Ue=w!==null?ge.get(w).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,O,G,$,z,ve,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){const Ue=A.texture,ze=Ue.format,He=Ue.type;if(!K.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-$&&G>=0&&G<=A.height-z){se.bindFramebuffer(C.FRAMEBUFFER,De);const ke=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.bufferData(C.PIXEL_PACK_BUFFER,ve.byteLength,C.STREAM_READ),C.readPixels(O,G,$,z,We.convert(ze),We.convert(He),0);const rt=w!==null?ge.get(w).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,rt);const dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await l1(C,dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ve),C.deleteBuffer(ke),C.deleteSync(dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,G=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-G),z=Math.floor(A.image.width*$),ve=Math.floor(A.image.height*$),Te=O!==null?O.x:0,De=O!==null?O.y:0;R.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,Te,De,z,ve),se.unbindTexture()},this.copyTextureToTexture=function(A,O,G=null,$=null,z=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],O=arguments[2],z=arguments[3]||0,G=null);let ve,Te,De,Ue,ze,He;G!==null?(ve=G.max.x-G.min.x,Te=G.max.y-G.min.y,De=G.min.x,Ue=G.min.y):(ve=A.image.width,Te=A.image.height,De=0,Ue=0),$!==null?(ze=$.x,He=$.y):(ze=0,He=0);const ke=We.convert(O.format),rt=We.convert(O.type);R.setTexture2D(O,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const dt=C.getParameter(C.UNPACK_ROW_LENGTH),Mt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),yn=C.getParameter(C.UNPACK_SKIP_PIXELS),tt=C.getParameter(C.UNPACK_SKIP_ROWS),Fe=C.getParameter(C.UNPACK_SKIP_IMAGES),Bt=A.isCompressedTexture?A.mipmaps[z]:A.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,De),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ue),A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,z,ze,He,ve,Te,ke,rt,Bt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,z,ze,He,Bt.width,Bt.height,ke,Bt.data):C.texSubImage2D(C.TEXTURE_2D,z,ze,He,ve,Te,ke,rt,Bt),C.pixelStorei(C.UNPACK_ROW_LENGTH,dt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,yn),C.pixelStorei(C.UNPACK_SKIP_ROWS,tt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Fe),z===0&&O.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(A,O,G=null,$=null,z=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,$=arguments[1]||null,A=arguments[2],O=arguments[3],z=arguments[4]||0);let ve,Te,De,Ue,ze,He,ke,rt,dt;const Mt=A.isCompressedTexture?A.mipmaps[z]:A.image;G!==null?(ve=G.max.x-G.min.x,Te=G.max.y-G.min.y,De=G.max.z-G.min.z,Ue=G.min.x,ze=G.min.y,He=G.min.z):(ve=Mt.width,Te=Mt.height,De=Mt.depth,Ue=0,ze=0,He=0),$!==null?(ke=$.x,rt=$.y,dt=$.z):(ke=0,rt=0,dt=0);const yn=We.convert(O.format),tt=We.convert(O.type);let Fe;if(O.isData3DTexture)R.setTexture3D(O,0),Fe=C.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),Fe=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const Bt=C.getParameter(C.UNPACK_ROW_LENGTH),nt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Hn=C.getParameter(C.UNPACK_SKIP_PIXELS),Zr=C.getParameter(C.UNPACK_SKIP_ROWS),Sn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Fe,z,ke,rt,dt,ve,Te,De,yn,tt,Mt.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Fe,z,ke,rt,dt,ve,Te,De,yn,Mt.data):C.texSubImage3D(Fe,z,ke,rt,dt,ve,Te,De,yn,tt,Mt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Bt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Hn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Sn),z===0&&O.generateMipmaps&&C.generateMipmap(Fe),se.unbindTexture()},this.initRenderTarget=function(A){ge.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),se.unbindTexture()},this.resetState=function(){P=0,b=0,w=null,se.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Ac?"display-p3":"srgb"}}class qf extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yb extends tn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=en,u=en,p,h){super(null,o,a,l,c,u,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sb extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new _e:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new F,r=[],s=[],o=[],a=new F,l=new vt;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),p=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(n===!0){let d=Math.acos(Gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yf extends hi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new _e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*p+this.aX,c=h*p+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mb extends Yf{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,p){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+p)+(l-a)/p;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const sl=new F,Ou=new Kf,zu=new Kf,Bu=new Kf;class Eb extends hi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(sl.subVectors(r[0],r[1]).add(r[0]),c=sl);const p=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(sl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=sl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(p),d),y=Math.pow(p.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Ou.initNonuniformCatmullRom(c.x,p.x,h.x,u.x,m,y,g),zu.initNonuniformCatmullRom(c.y,p.y,h.y,u.y,m,y,g),Bu.initNonuniformCatmullRom(c.z,p.z,h.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(Ou.initCatmullRom(c.x,p.x,h.x,u.x,this.tension),zu.initCatmullRom(c.y,p.y,h.y,u.y,this.tension),Bu.initCatmullRom(c.z,p.z,h.z,u.z,this.tension));return i.set(Ou.calc(l),zu.calc(l),Bu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function wb(t,e){const n=1-t;return n*n*e}function Tb(t,e){return 2*(1-t)*t*e}function Ab(t,e){return t*t*e}function Bo(t,e,n,i){return wb(t,e)+Tb(t,n)+Ab(t,i)}function bb(t,e){const n=1-t;return n*n*n*e}function Cb(t,e){const n=1-t;return 3*n*n*t*e}function Rb(t,e){return 3*(1-t)*t*t*e}function Pb(t,e){return t*t*t*e}function Ho(t,e,n,i,r){return bb(t,e)+Cb(t,n)+Rb(t,i)+Pb(t,r)}class j_ extends hi{constructor(e=new _e,n=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,r.x,s.x,o.x,a.x),Ho(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lb extends hi{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,r.x,s.x,o.x,a.x),Ho(e,r.y,s.y,o.y,a.y),Ho(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $_ extends hi{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nb extends hi{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X_ extends hi{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Bo(e,r.x,s.x,o.x),Bo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Db extends hi{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Bo(e,r.x,s.x,o.x),Bo(e,r.y,s.y,o.y),Bo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q_ extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(Eg(a,l.x,c.x,u.x,p.x),Eg(a,l.y,c.y,u.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new _e().fromArray(r))}return this}}var Ch=Object.freeze({__proto__:null,ArcCurve:Mb,CatmullRomCurve3:Eb,CubicBezierCurve:j_,CubicBezierCurve3:Lb,EllipseCurve:Yf,LineCurve:$_,LineCurve3:Nb,QuadraticBezierCurve:X_,QuadraticBezierCurve3:Db,SplineCurve:q_});class Ib extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ch[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Ch[r.type]().fromJSON(r))}return this}}class Rh extends Ib{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new $_(this.currentPoint.clone(),new _e(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new X_(this.currentPoint.clone(),new _e(e,n),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new j_(this.currentPoint.clone(),new _e(e,n),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new q_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Yf(e,n,i,r,s,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jf extends xn{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Gt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,p=new F,h=new _e,d=new F,m=new F,y=new F;let g=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-g,d.z=f*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,d.x=f*1,d.y=-g,d.z=f*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(m)}for(let _=0;_<=n;_++){const v=i+_*u*r,S=Math.sin(v),P=Math.cos(v);for(let b=0;b<=e.length-1;b++){p.x=e[b].x*S,p.y=e[b].y,p.z=e[b].x*P,o.push(p.x,p.y,p.z),h.x=_/n,h.y=b/(e.length-1),a.push(h.x,h.y);const w=l[3*b+0]*S,L=l[3*b+1],q=l[3*b+0]*P;c.push(w,L,q)}}for(let _=0;_<n;_++)for(let v=0;v<e.length-1;v++){const S=v+_*e.length,P=S,b=S+e.length,w=S+e.length+1,L=S+1;s.push(P,b,L),s.push(w,L,b)}this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.points,e.segments,e.phiStart,e.phiLength)}}class Os extends Jf{constructor(e=1,n=1,i=4,r=8){const s=new Rh;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Os(e.radius,e.length,e.capSegments,e.radialSegments)}}class Zf extends xn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new F,u=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=n;p++,h+=3){const d=i+p/n*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zt extends xn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],d=[];let m=0;const y=[],g=i/2;let f=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function _(){const S=new F,P=new F;let b=0;const w=(n-e)/i;for(let L=0;L<=s;L++){const q=[],x=L/s,E=x*(n-e)+e;for(let V=0;V<=r;V++){const k=V/r,W=k*l+a,ee=Math.sin(W),H=Math.cos(W);P.x=E*ee,P.y=-x*i+g,P.z=E*H,p.push(P.x,P.y,P.z),S.set(ee,w,H).normalize(),h.push(S.x,S.y,S.z),d.push(k,1-x),q.push(m++)}y.push(q)}for(let L=0;L<r;L++)for(let q=0;q<s;q++){const x=y[q][L],E=y[q+1][L],V=y[q+1][L+1],k=y[q][L+1];e>0&&(u.push(x,E,k),b+=3),n>0&&(u.push(E,V,k),b+=3)}c.addGroup(f,b,0),f+=b}function v(S){const P=m,b=new _e,w=new F;let L=0;const q=S===!0?e:n,x=S===!0?1:-1;for(let V=1;V<=r;V++)p.push(0,g*x,0),h.push(0,x,0),d.push(.5,.5),m++;const E=m;for(let V=0;V<=r;V++){const W=V/r*l+a,ee=Math.cos(W),H=Math.sin(W);w.x=q*H,w.y=g*x,w.z=q*ee,p.push(w.x,w.y,w.z),h.push(0,x,0),b.x=ee*.5+.5,b.y=H*.5*x+.5,d.push(b.x,b.y),m++}for(let V=0;V<r;V++){const k=P+V,W=E+V;S===!0?u.push(W,W+1,k):u.push(W+1,W,k),L+=3}c.addGroup(f,L,S===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oa extends Zt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new oa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends Rh{constructor(e){super(e),this.uuid=so(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Rh().fromJSON(r))}return this}}const Ub={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Y_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,p,h,d;if(i&&(s=Bb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let m=n;m<r;m+=n)p=t[m],h=t[m+1],p<a&&(a=p),h<l&&(l=h),p>c&&(c=p),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return aa(s,o,n,a,l,d,0),o}};function Y_(t,e,n,i,r){let s,o;if(r===Jb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=wg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=wg(s,t[s],t[s+1],o);return o&&Rc(o,o.next)&&(ca(o),o=o.next),o}function Yr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Rc(n,n.next)||xt(n.prev,n,n.next)===0)){if(ca(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function aa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&jb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?Fb(t,i,r,s):kb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ca(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Ob(Yr(t),e,n),aa(t,e,n,i,r,s,2)):o===2&&zb(t,e,n,i,r,s):aa(Yr(t),e,n,i,r,s,1);break}}}function kb(t){const e=t.prev,n=t,i=t.next;if(xt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,p=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=p&&m.y<=d&&Cs(r,a,s,l,o,c,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(xt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,p=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<p?u<h?u:h:p<h?p:h,y=a>l?a>c?a:c:l>c?l:c,g=u>p?u>h?u:h:p>h?p:h,f=Ph(d,m,e,n,i),_=Ph(y,g,e,n,i);let v=t.prevZ,S=t.nextZ;for(;v&&v.z>=f&&S&&S.z<=_;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Cs(a,u,l,p,c,h,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=y&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Cs(a,u,l,p,c,h,S.x,S.y)&&xt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Cs(a,u,l,p,c,h,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=d&&S.x<=y&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Cs(a,u,l,p,c,h,S.x,S.y)&&xt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ob(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Rc(r,s)&&K_(r,i,i.next,s)&&la(r,s)&&la(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ca(i),ca(i.next),i=t=s),i=i.next}while(i!==t);return Yr(i)}function zb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qb(o,a)){let l=J_(o,a);o=Yr(o,o.next),l=Yr(l,l.next),aa(o,e,n,i,r,s,0),aa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Bb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Y_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Xb(c));for(r.sort(Hb),s=0;s<r.length;s++)n=Vb(r[s],n);return n}function Hb(t,e){return t.x-e.x}function Vb(t,e){const n=Gb(t,e);if(!n)return e;const i=J_(n,t);return Yr(i,i.next),Yr(n,n.next)}function Gb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,p;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Cs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(p=Math.abs(o-n.y)/(s-n.x),la(n,t)&&(p<u||p===u&&(n.x>r.x||n.x===r.x&&Wb(r,n)))&&(r=n,u=p)),n=n.next;while(n!==a);return r}function Wb(t,e){return xt(t.prev,t,e.prev)<0&&xt(e.next,t,t.next)<0}function jb(t,e,n,i){let r=t;do r.z===0&&(r.z=Ph(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,$b(r)}function $b(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Ph(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Xb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Cs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function qb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Yb(t,e)&&(la(t,e)&&la(e,t)&&Kb(t,e)&&(xt(t.prev,t,e.prev)||xt(t,e.prev,e))||Rc(t,e)&&xt(t.prev,t,t.next)>0&&xt(e.prev,e,e.next)>0)}function xt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Rc(t,e){return t.x===e.x&&t.y===e.y}function K_(t,e,n,i){const r=al(xt(t,e,n)),s=al(xt(t,e,i)),o=al(xt(n,i,t)),a=al(xt(n,i,e));return!!(r!==s&&o!==a||r===0&&ol(t,n,e)||s===0&&ol(t,i,e)||o===0&&ol(n,t,i)||a===0&&ol(n,e,i))}function ol(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function al(t){return t>0?1:t<0?-1:0}function Yb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&K_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function la(t,e){return xt(t.prev,t,t.next)<0?xt(t,e,t.next)>=0&&xt(t,t.prev,e)>=0:xt(t,e,t.prev)<0||xt(t,t.next,e)<0}function Kb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function J_(t,e){const n=new Lh(t.i,t.x,t.y),i=new Lh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function wg(t,e,n,i){const r=new Lh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ca(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Lh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ar{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ar.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Tg(e),Ag(i,e);let o=e.length;n.forEach(Tg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Ag(i,n[l]);const a=Ub.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Tg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ag(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Qf extends xn{constructor(e=new Cc([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new lt(r,3)),this.setAttribute("uv",new lt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:d-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:Zb;let v,S=!1,P,b,w,L;f&&(v=f.getSpacedPoints(u),S=!0,h=!1,P=f.computeFrenetFrames(u,!1),b=new F,w=new F,L=new F),h||(g=0,d=0,m=0,y=0);const q=a.extractPoints(c);let x=q.shape;const E=q.holes;if(!ar.isClockWise(x)){x=x.reverse();for(let X=0,C=E.length;X<C;X++){const D=E[X];ar.isClockWise(D)&&(E[X]=D.reverse())}}const k=ar.triangulateShape(x,E),W=x;for(let X=0,C=E.length;X<C;X++){const D=E[X];x=x.concat(D)}function ee(X,C,D){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(C,D)}const H=x.length,re=k.length;function N(X,C,D){let j,K,se;const ye=X.x-C.x,ge=X.y-C.y,R=D.x-X.x,M=D.y-X.y,B=ye*ye+ge*ge,ne=ye*M-ge*R;if(Math.abs(ne)>Number.EPSILON){const le=Math.sqrt(B),ie=Math.sqrt(R*R+M*M),Ie=C.x-ge/le,Me=C.y+ye/le,Ce=D.x-M/ie,Ye=D.y+R/ie,me=((Ce-Ie)*M-(Ye-Me)*R)/(ye*M-ge*R);j=Ie+ye*me-X.x,K=Me+ge*me-X.y;const Re=j*j+K*K;if(Re<=2)return new _e(j,K);se=Math.sqrt(Re/2)}else{let le=!1;ye>Number.EPSILON?R>Number.EPSILON&&(le=!0):ye<-Number.EPSILON?R<-Number.EPSILON&&(le=!0):Math.sign(ge)===Math.sign(M)&&(le=!0),le?(j=-ge,K=ye,se=Math.sqrt(B)):(j=ye,K=ge,se=Math.sqrt(B/2))}return new _e(j/se,K/se)}const te=[];for(let X=0,C=W.length,D=C-1,j=X+1;X<C;X++,D++,j++)D===C&&(D=0),j===C&&(j=0),te[X]=N(W[X],W[D],W[j]);const Z=[];let de,Le=te.concat();for(let X=0,C=E.length;X<C;X++){const D=E[X];de=[];for(let j=0,K=D.length,se=K-1,ye=j+1;j<K;j++,se++,ye++)se===K&&(se=0),ye===K&&(ye=0),de[j]=N(D[j],D[se],D[ye]);Z.push(de),Le=Le.concat(de)}for(let X=0;X<g;X++){const C=X/g,D=d*Math.cos(C*Math.PI/2),j=m*Math.sin(C*Math.PI/2)+y;for(let K=0,se=W.length;K<se;K++){const ye=ee(W[K],te[K],j);pe(ye.x,ye.y,-D)}for(let K=0,se=E.length;K<se;K++){const ye=E[K];de=Z[K];for(let ge=0,R=ye.length;ge<R;ge++){const M=ee(ye[ge],de[ge],j);pe(M.x,M.y,-D)}}}const Be=m+y;for(let X=0;X<H;X++){const C=h?ee(x[X],Le[X],Be):x[X];S?(w.copy(P.normals[0]).multiplyScalar(C.x),b.copy(P.binormals[0]).multiplyScalar(C.y),L.copy(v[0]).add(w).add(b),pe(L.x,L.y,L.z)):pe(C.x,C.y,0)}for(let X=1;X<=u;X++)for(let C=0;C<H;C++){const D=h?ee(x[C],Le[C],Be):x[C];S?(w.copy(P.normals[X]).multiplyScalar(D.x),b.copy(P.binormals[X]).multiplyScalar(D.y),L.copy(v[X]).add(w).add(b),pe(L.x,L.y,L.z)):pe(D.x,D.y,p/u*X)}for(let X=g-1;X>=0;X--){const C=X/g,D=d*Math.cos(C*Math.PI/2),j=m*Math.sin(C*Math.PI/2)+y;for(let K=0,se=W.length;K<se;K++){const ye=ee(W[K],te[K],j);pe(ye.x,ye.y,p+D)}for(let K=0,se=E.length;K<se;K++){const ye=E[K];de=Z[K];for(let ge=0,R=ye.length;ge<R;ge++){const M=ee(ye[ge],de[ge],j);S?pe(M.x,M.y+v[u-1].y,v[u-1].x+D):pe(M.x,M.y,p+D)}}}Y(),ue();function Y(){const X=r.length/3;if(h){let C=0,D=H*C;for(let j=0;j<re;j++){const K=k[j];Q(K[2]+D,K[1]+D,K[0]+D)}C=u+g*2,D=H*C;for(let j=0;j<re;j++){const K=k[j];Q(K[0]+D,K[1]+D,K[2]+D)}}else{for(let C=0;C<re;C++){const D=k[C];Q(D[2],D[1],D[0])}for(let C=0;C<re;C++){const D=k[C];Q(D[0]+H*u,D[1]+H*u,D[2]+H*u)}}i.addGroup(X,r.length/3-X,0)}function ue(){const X=r.length/3;let C=0;xe(W,C),C+=W.length;for(let D=0,j=E.length;D<j;D++){const K=E[D];xe(K,C),C+=K.length}i.addGroup(X,r.length/3-X,1)}function xe(X,C){let D=X.length;for(;--D>=0;){const j=D;let K=D-1;K<0&&(K=X.length-1);for(let se=0,ye=u+g*2;se<ye;se++){const ge=H*se,R=H*(se+1),M=C+j+ge,B=C+K+ge,ne=C+K+R,le=C+j+R;I(M,B,ne,le)}}}function pe(X,C,D){l.push(X),l.push(C),l.push(D)}function Q(X,C,D){oe(X),oe(C),oe(D);const j=r.length/3,K=_.generateTopUV(i,r,j-3,j-2,j-1);ae(K[0]),ae(K[1]),ae(K[2])}function I(X,C,D,j){oe(X),oe(C),oe(j),oe(C),oe(D),oe(j);const K=r.length/3,se=_.generateSideWallUV(i,r,K-6,K-3,K-2,K-1);ae(se[0]),ae(se[1]),ae(se[3]),ae(se[1]),ae(se[2]),ae(se[3])}function oe(X){r.push(l[X*3+0]),r.push(l[X*3+1]),r.push(l[X*3+2])}function ae(X){s.push(X.x),s.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Qb(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ch[r.type]().fromJSON(r)),new Qf(i,e.options)}}const Zb={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new _e(s,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],p=e[i*3+2],h=e[r*3],d=e[r*3+1],m=e[r*3+2],y=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-p),new _e(h,1-m),new _e(y,1-f)]:[new _e(a,1-l),new _e(u,1-p),new _e(d,1-m),new _e(g,1-f)]}};function Qb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class ep extends xn{constructor(e=new Cc([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function c(u){const p=r.length/3,h=u.extractPoints(n);let d=h.shape;const m=h.holes;ar.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,f=m.length;g<f;g++){const _=m[g];ar.isClockWise(_)===!0&&(m[g]=_.reverse())}const y=ar.triangulateShape(d,m);for(let g=0,f=m.length;g<f;g++){const _=m[g];d=d.concat(_)}for(let g=0,f=d.length;g<f;g++){const _=d[g];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,f=y.length;g<f;g++){const _=y[g],v=_[0]+p,S=_[1]+p,P=_[2]+p;i.push(v,S,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return eC(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new ep(i,e.curveSegments)}}function eC(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class at extends xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],p=new F,h=new F,d=[],m=[],y=[],g=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const b=P/n;p.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),p.y=e*Math.cos(o+v*a),p.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),m.push(p.x,p.y,p.z),h.copy(p).normalize(),y.push(h.x,h.y,h.z),g.push(b+S,1-v),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const v=u[f][_+1],S=u[f][_],P=u[f+1][_],b=u[f+1][_+1];(f!==0||o>0)&&d.push(v,S,b),(f!==i-1||l<Math.PI)&&d.push(S,P,b)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(y,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tp extends xn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new F,p=new F,h=new F;for(let d=0;d<=i;d++)for(let m=0;m<=r;m++){const y=m/r*s,g=d/i*Math.PI*2;p.x=(e+n*Math.cos(g))*Math.cos(y),p.y=(e+n*Math.cos(g))*Math.sin(y),p.z=n*Math.sin(g),a.push(p.x,p.y,p.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),h.subVectors(p,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=r;m++){const y=(r+1)*d+m-1,g=(r+1)*(d-1)+m-1,f=(r+1)*(d-1)+m,_=(r+1)*d+m;o.push(y,g,_),o.push(g,f,_)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tC extends ao{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Qs extends ao{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b_,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Z_ extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class np extends Z_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Hu=new vt,bg=new F,Cg=new F;class nC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bg.setFromMatrixPosition(e.matrixWorld),n.position.copy(bg),Cg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cg),n.updateMatrixWorld(),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iC extends nC{constructor(){super(new jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ip extends Z_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new iC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rg=new vt;class rC{constructor(e,n,i=0,r=1/0){this.ray=new N_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Rg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rg),this}intersectObject(e,n=!0,i=[]){return Nh(e,this,i,n),i.sort(Pg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Nh(e[r],this,i,n);return i.sort(Pg),i}}function Pg(t,e){return t.distance-e.distance}function Nh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Nh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);let wr=null;function sc(){return wr||(wr=new yb(new Uint8Array([110,190,255]),3,1,Ff),wr.minFilter=en,wr.magFilter=en,wr.generateMipmaps=!1,wr.needsUpdate=!0),wr}const Lg=new Map;function je(t){let e=Lg.get(t);return e||(e=new Qs({color:t,gradientMap:sc()}),Lg.set(t,e)),e}function Oe(t,e,n=0,i=0,r=0){const s=new Wt(t,e);return s.position.set(n,i,r),s}function Vi(t,e,n,i){const r=new Cc,s=-t/2+i,o=-e/2+i,a=t-2*i,l=e-2*i;r.moveTo(s,o-i),r.lineTo(s+a,o-i),r.quadraticCurveTo(s+a+i,o-i,s+a+i,o),r.lineTo(s+a+i,o+l),r.quadraticCurveTo(s+a+i,o+l+i,s+a,o+l+i),r.lineTo(s,o+l+i),r.quadraticCurveTo(s-i,o+l+i,s-i,o+l),r.lineTo(s-i,o),r.quadraticCurveTo(s-i,o-i,s,o-i);const c=new Qf(r,{depth:n-2*i,bevelEnabled:!0,bevelSize:i,bevelThickness:i,bevelSegments:3,curveSegments:4});return c.translate(0,0,-(n-2*i)/2),c}function Dh(t,e){const n=ur(t),i=n.colors[e%n.colors.length],r=new fn,s=[],o=(l,c=!1)=>(r.add(l),c&&s.push(l),l);let a;switch(t){case"rug":{const l=o(Oe(new Zt(.95,.95,.03,40),je(i),0,.016,0),!0);l.receiveShadow=!0,o(Oe(new Zt(.66,.66,.034,40),je(Se.paper),0,.018,0)).receiveShadow=!0,o(Oe(new Zt(.34,.34,.038,32),je(i),0,.02,0),!0).receiveShadow=!0;break}case"plant":{o(Oe(new Zt(.24,.18,.38,20),je(i),0,.19,0),!0),o(Oe(new Zt(.22,.22,.03,20),je(Se.paw),0,.38,0));const l=je(Se.grass),c=je(Se.grassDeep);[[0,.66,0,.24,l],[.15,.53,.08,.17,c],[-.14,.55,-.06,.18,l],[.04,.86,-.04,.15,c]].forEach(([u,p,h,d,m])=>o(Oe(new at(d,16,12),m,u,p,h)));break}case"beanbag":{o(Oe(new at(.44,28,20),je(i),0,.25,0),!0).scale.set(1,.58,1),o(Oe(new at(.3,24,16),je(i),-.03,.43,-.12),!0).scale.set(1,.55,.85);break}case"lamp":{const l=je(Se.ink);o(Oe(new Zt(.18,.22,.06,20),l,0,.03,0)),o(Oe(new Zt(.03,.03,1.25,10),l,0,.66,0)),o(Oe(new at(.1,12,10),new Fr({color:"#FFF4C2"}),0,1.28,0));const c=new Qs({color:i,gradientMap:sc(),side:kn});o(Oe(new Zt(.15,.32,.38,24,1,!0),c,0,1.38,0),!0);break}case"table":{o(Oe(new Zt(.42,.42,.08,28),je(i),0,.56,0),!0),o(Oe(new Zt(.06,.06,.52,12),je(Se.wood),0,.27,0)),o(Oe(new Zt(.22,.26,.04,20),je(Se.wood),0,.02,0)),o(Oe(new Zt(.08,.07,.15,16),je(Se.tomato),.13,.67,.05)),o(Oe(Vi(.26,.05,.19,.02),je(Se.sun),-.12,.625,-.06));break}case"shelf":{o(Oe(Vi(.86,1.55,.42,.05),je(i),0,.775,-.24),!0);const l=je("#F1E4D2");[.35,.85,1.32].forEach(u=>o(Oe(new Vt(.72,.36,.06),l,0,u,-.02)));const c=[Se.tomato,Se.cobalt,Se.sun,Se.teal,Se.grape];[.35,.85,1.32].forEach((u,p)=>{let h=-.3;for(let d=0;d<5;d++){const m=.07+(d+p)%3*.025,y=.22+(d*7+p)%3*.04;if(h+m>.32)break;o(Oe(Vi(m,y,.22,.01),je(c[(d+p*2)%c.length]),h+m/2,u-.17+y/2,-.12)),h+=m+.02}});break}case"fishbowl":{o(Oe(new Zt(.2,.26,.55,20),je(i),0,.275,0),!0),o(Oe(new at(.3,28,20),new Qs({color:"#BDEBFF",transparent:!0,opacity:.45,depthWrite:!1,gradientMap:sc()}),0,.84,0));const l=new fn;l.position.y=.82;const c=Oe(new at(.07,14,10),je("#FF9F45"),.13,0,0);c.scale.set(1.5,1,.7);const u=Oe(new oa(.05,.08,8),je("#FF9F45"),.03,0,0);u.rotation.z=Math.PI/2,l.add(c,u),r.add(l),a=p=>{l.rotation.y=p*1.2,l.position.y=.82+Math.sin(p*2)*.03};break}case"bed":{o(Oe(Vi(.92,.28,1.9,.06),je(Se.wood),0,.16,0)),o(Oe(Vi(.92,.85,.12,.05),je(i),0,.45,-.92),!0),o(Oe(Vi(.86,.14,1.8,.05),je(Se.white),0,.37,0)),o(Oe(Vi(.6,.13,.32,.06),je(Se.paper),0,.5,-.66)),o(Oe(Vi(.9,.09,1.15,.04),je(i),0,.47,.3),!0);break}case"kitty":{const l=je(i),c=je(Se.ink),u=je("#FF8FAB");o(Oe(new at(.26,24,18),l,0,.24,-.04),!0).scale.set(.9,1,1.15),o(Oe(new at(.2,24,18),l,0,.56,.08),!0),[-1,1].forEach(m=>{const y=o(Oe(new oa(.07,.14,12),l,m*.11,.74,.08),!0);y.rotation.z=-m*.25,o(Oe(new at(.03,10,8),c,m*.075,.59,.26))}),o(Oe(new at(.022,10,8),u,0,.53,.28));const h=new fn;h.position.set(0,.14,-.3);const d=Oe(new Os(.035,.36,4,8),l,0,.2,0);h.add(d),h.rotation.x=-.4,s.push(d),r.add(h),a=m=>{h.rotation.z=Math.sin(m*2.4)*.45};break}}return r.traverse(l=>{l.isMesh&&(l.castShadow=!n.floor,l.receiveShadow=!0)}),{group:r,tinted:s,animate:a}}function sC(t,e,n){const i=ur(e),r=i.colors[n%i.colors.length];for(const s of t.tinted){const o=s.material;s.material=o.side===kn?new Qs({color:r,gradientMap:sc(),side:kn}):je(r)}}function Q_(t){const e=new fn,n=new fn;e.add(n);const i=je(Se.caramel),r=je(Se.caramelDeep),s=je(Se.cream),o=je(Se.snoutNose),a=je(Se.paw),l=je(Se.pupil),c=je(Se.eyeWhite),u=Oe(new at(.34,32,24),i,0,.36,0);u.scale.set(1,1.05,.9),n.add(u);const p=Oe(new at(.24,32,24),s,0,.34,.2);p.scale.set(1,1.15,.5),n.add(p),[-1,1].forEach(P=>{const b=Oe(new at(.11,18,12),a,P*.15,.05,.06);b.scale.set(1,.55,1.3),n.add(b);const w=Oe(new Os(.07,.16,6,12),i,P*.34,.38,.03);w.rotation.z=P*.35,n.add(w),n.add(Oe(new at(.075,14,10),a,P*.38,.27,.05))});const h=new fn;h.position.set(0,.78,.02),n.add(h);const d=Oe(new at(.3,32,24),i,0,0,0);d.scale.set(1.14,.86,.95),h.add(d);const m=Oe(new at(.24,32,24),i,0,.12,-.02);m.scale.set(1,1,.95),h.add(m),[-1,1].forEach(P=>{const b=Oe(new at(.075,16,12),r,P*.17,.32,-.04);b.scale.set(1,1,.6),h.add(b);const w=Oe(new at(.042,12,10),a,P*.17,.32,0);w.scale.set(1,1,.4),h.add(w)});const y=Oe(new at(.23,32,24),s,0,-.07,.19);y.scale.set(1.18,.95,.88),h.add(y);const g=Oe(new at(.11,24,16),o,0,.02,.35);g.scale.set(1.3,.72,.5),h.add(g),[-1,1].forEach(P=>{const b=Oe(new at(.026,10,8),l,P*.075,.045,.39);b.scale.set(1.2,.9,.6),h.add(b)});const f=Oe(new tp(.07,.013,8,20,Math.PI),a,0,-.13,.39);f.rotation.z=Math.PI,h.add(f);const _=[];[-1,1].forEach(P=>{const b=new fn;b.position.set(P*.17,.13,.2);const w=Oe(new at(.075,18,14),c);w.scale.set(.95,1.05,.6),b.add(w),b.add(Oe(new at(.052,16,12),l,-P*.012,-.005,.03)),b.add(Oe(new at(.016,8,6),c,-P*0,.02,.07)),h.add(b),_.push(b);const L=Oe(new Os(.015,.07,4,8),a,P*.17,.24,.2);L.rotation.z=Math.PI/2+P*.2,h.add(L)});const v=new fn;[-.035,0,.035].forEach((P,b)=>{const w=Oe(new oa(.03,.09+(b===1?.03:0),10),r,P,.37,0);w.rotation.z=-P*6,v.add(w)}),h.add(v);const S=new fn;return[-1,1].forEach(P=>{[0,1,2].forEach(b=>{const w=Oe(new Os(.008,.035,3,6),l,P*(.225+b*.012),.185-b*.025,.215);w.rotation.z=P*(.9+b*.35),S.add(w)})}),h.add(S),v.visible=t==="boy",S.visible=t==="girl",e.traverse(P=>{P.isMesh&&(P.castShadow=!0,P.receiveShadow=!1)}),e.scale.setScalar(1.3),e.userData.buddy=!0,{root:e,body:n,eyes:_,boyDetail:v,girlDetail:S}}const Et=pt/2;function Ng(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"));const r=new Sb(i);return r.colorSpace=Kn,r.anisotropy=4,r}function Vu(t,e,n,i,r){const[s,o]=$r(e,r);t.position.set(n+s/2-Et,0,i+o/2-Et),t.rotation.y=-r*Math.PI/2}class oC{constructor(e,n,i){var s;this.canvas=e,this.cb=n,this.scene=new qf,this.camera=new jf(-1,1,1,-1,.1,100),this.itemRoot=new fn,this.live=new Map,this.buddyCell={x:4,z:5},this.path=[],this.nextWander=0,this.hopStart=-1,this.blinkAt=0,this.ghost=null,this.selectedId=null,this.frame=0,this.running=!0,this.downAt=null,this.ray=new rC,this.ndc=new _e,this.reduceMotion=((s=window.matchMedia)==null?void 0:s.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.onDown=o=>{this.downAt={x:o.clientX,y:o.clientY}},this.onMove=o=>{if(!this.ghost||o.pointerType==="touch")return;this.setRay(o);const a=this.ray.intersectObject(this.floor)[0];if(!a)return;const l=this.cellFor(a.point,this.ghost.type,this.ghost.rot);(!this.ghost.cell||l.x!==this.ghost.cell.x||l.z!==this.ghost.cell.z)&&this.cb.onFloorTap(l.x,l.z)},this.onUp=o=>{if(!this.downAt)return;const a=Math.hypot(o.clientX-this.downAt.x,o.clientY-this.downAt.y);if(this.downAt=null,a>12)return;if(this.setRay(o),this.ghost){const c=this.ray.intersectObject(this.floor)[0];if(c){const u=this.cellFor(c.point,this.ghost.type,this.ghost.rot);this.cb.onFloorTap(u.x,u.z)}return}if(this.ray.intersectObject(this.buddy.root,!0).length){this.cb.onBuddyTap();return}const l=this.ray.intersectObjects(this.itemRoot.children,!0);for(const c of l){let u=c.object;for(;u&&u.userData.itemId===void 0;)u=u.parent;if(u){this.cb.onSelectItem(u.userData.itemId);return}}this.cb.onSelectItem(null)},this.onVisibility=()=>{document.visibilityState==="visible"&&this.running&&(cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(this.loop))},this.loop=o=>{var h,d;if(!this.running||document.visibilityState==="hidden")return;const a=o/1e3,l=this.buddy.body,c=this.buddy.root;if(this.path.length){const m=this.path[0],y=m.x-Et+.5,g=m.z-Et+.5,f=y-c.position.x,_=g-c.position.z,v=Math.hypot(f,_),S=.032;v<S?(c.position.set(y,0,g),this.buddyCell=this.path.shift()):(c.position.x+=f/v*S,c.position.z+=_/v*S,this.turnTo(Math.atan2(f,_))),l.position.y=Math.abs(Math.sin(a*10))*.05,l.rotation.z=Math.sin(a*10)*.05}else if(this.turnTo(Math.PI/4),l.rotation.z*=.85,l.position.y=Math.sin(a*2.2)*.02,o>this.nextWander&&!this.ghost&&this.hopStart<0){const m=this.occupied(),y=[];for(let g=0;g<pt;g++)for(let f=0;f<pt;f++)m.has(`${g},${f}`)||y.push({x:g,z:f});y.length&&(this.path=this.findPath(y[Math.floor(Math.random()*y.length)]).slice(0,5)),this.nextWander=o+4e3+Math.random()*5e3}if(this.hopStart>=0){const m=(o-this.hopStart)/650;m>=1?(this.hopStart=-1,l.rotation.y=0,l.scale.set(1,1,1)):(l.position.y=Math.sin(m*Math.PI)*.5,l.scale.set(1+Math.sin(m*Math.PI*2)*.06,1-Math.sin(m*Math.PI*2)*.06,1),this.reduceMotion||(l.rotation.y=m*Math.PI*2))}else l.scale.set(1,1+Math.sin(a*2.2)*.012,1);const u=o-this.blinkAt,p=u>0&&u<140?.1:1;this.buddy.eyes.forEach(m=>m.scale.y=p),u>140&&(this.blinkAt=o+2200+Math.random()*2600);for(const{built:m}of this.live.values())(h=m.animate)==null||h.call(m,a);(d=this.ghost)!=null&&d.group.visible&&(this.ghost.group.position.y=.06+Math.sin(a*5)*.03),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop)},this.renderer=new Xf({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Df,this.camera.position.set(12,11,12),this.camera.lookAt(0,.6,0),this.scene.add(new np(16777215,15980984,1.6));const r=new ip(16773596,1.9);r.position.set(6,10,7),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),r.shadow.bias=-.002,r.shadow.radius=4,this.scene.add(r),this.buildRoom(),this.scene.add(this.itemRoot),this.buddy=Q_(i),this.scene.add(this.buddy.root),this.placeBuddyAt(this.buddyCell),this.buddy.root.rotation.y=Math.PI/4,this.highlight=new Wt(new Zs(1,1),new Fr({color:Se.teal,transparent:!0,opacity:.45,depthWrite:!1})),this.highlight.rotation.x=-Math.PI/2,this.highlight.position.y=.05,this.highlight.visible=!1,this.scene.add(this.highlight),e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointermove",this.onMove),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e.parentElement??e),document.addEventListener("visibilitychange",this.onVisibility),this.resize(),this.frame=requestAnimationFrame(this.loop)}buildRoom(){const e=Ng(512,512,p=>{for(let h=0;h<8;h++){p.fillStyle=h%2?"#D9A06A":"#E2AD78",p.fillRect(0,h*64,512,64),p.fillStyle="rgba(122,66,32,0.22)",p.fillRect(0,h*64,512,3);const d=h*192%512;p.fillRect(d,h*64,3,64),p.fillRect((d+256)%512,h*64,3,64)}});this.floor=new Wt(new Zs(pt,pt),new Qs({map:e})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);const n=new Wt(new Vt(pt+.5,.45,pt+.5),je(Se.woodDeep));n.position.y=-.226,this.scene.add(n);const i=(p,h)=>{const d=Ng(256,256,m=>{m.fillStyle=p,m.fillRect(0,0,256,256),m.fillStyle=h;for(let y=0;y<8;y++)for(let g=0;g<8;g++)m.beginPath(),m.arc(g*32+(y%2?16:0)+8,y*32+16,4.5,0,7),m.fill()});return d.wrapS=d.wrapT=Ql,d.repeat.set(3,1.3),new Qs({map:d})},r=new Wt(new Vt(pt+.5,3.4,.25),i(Se.cobaltSoft,"#DCE6F8"));r.position.set(0,1.7,-Et-.125);const s=new Wt(new Vt(.25,3.4,pt+.25),i(Se.sunSoft,"#FFF0C8"));s.position.set(-Et-.125,1.7,.125),r.receiveShadow=s.receiveShadow=!0,this.scene.add(r,s);const o=je(Se.white),a=(p,h,d,m,y)=>{const g=new Wt(p,h);return g.position.set(d,m,y),this.scene.add(g),g};a(new Vt(pt+.25,.18,.08),o,.125,.09,-Et+.04),a(new Vt(.08,.18,pt),o,-Et+.04,.09,.125),a(new Vt(2.1,1.5,.06),o,1.2,1.95,-Et+.02),a(new Vt(1.85,1.25,.07),new Fr({color:"#BFE6F5"}),1.2,1.95,-Et+.03),a(new Vt(.08,1.25,.09),o,1.2,1.95,-Et+.05),a(new Vt(1.85,.08,.09),o,1.2,1.95,-Et+.05);const l=new Fr({color:"#FFFFFF"});[[.62,2.25,.16],[.82,2.3,.2],[1.02,2.24,.14],[1.6,1.66,.12],[1.78,1.7,.16]].forEach(([p,h,d])=>{const m=a(new at(d,12,10),l,p,h,-Et+.07);m.scale.z=.3}),a(new Vt(.06,1,1),je(Se.sun),-Et+.02,1.95,-1.3),a(new Vt(.07,.8,.8),je(Se.white),-Et+.03,1.95,-1.3);const c=new Cc;for(let p=0;p<10;p++){const h=-Math.PI/2+p*Math.PI/5,d=p%2?.13:.3;p===0?c.moveTo(Math.cos(h)*d,-Math.sin(h)*d):c.lineTo(Math.cos(h)*d,-Math.sin(h)*d)}const u=a(new ep(c),new Fr({color:Se.sun}),-Et+.075,1.95,-1.3);u.rotation.y=Math.PI/2}setRoom(e){const n=new Set(e.map(i=>i.id));for(const[i,r]of this.live)n.has(i)||(this.itemRoot.remove(r.built.group),this.live.delete(i));for(const i of e){const r=this.live.get(i.id);if(r)r.item.color!==i.color&&sC(r.built,i.type,i.color),Vu(r.built.group,i.type,i.x,i.z,i.rot),r.item={...i};else{const s=Dh(i.type,i.color);s.group.userData.itemId=i.id,Vu(s.group,i.type,i.x,i.z,i.rot),this.itemRoot.add(s.group),this.live.set(i.id,{item:{...i},built:s})}}this.ensureBuddyFree(),this.setSelected(this.selectedId)}setSelected(e){this.selectedId=e;const n=e!=null?this.live.get(e):void 0;if(!n){this.highlight.visible=!!this.ghost&&this.highlight.visible,this.ghost||(this.highlight.visible=!1);return}this.showHighlight(n.item.type,n.item.x,n.item.z,n.item.rot,!0)}showHighlight(e,n,i,r,s){const[o,a]=$r(e,r);this.highlight.scale.set(o,a,1),this.highlight.position.x=n+o/2-Et,this.highlight.position.z=i+a/2-Et,this.highlight.material.color.set(s?Se.teal:Se.sun),this.highlight.visible=!0}setBuddyKind(e){this.buddy.boyDetail.visible=e==="boy",this.buddy.girlDetail.visible=e==="girl"}startGhost(e,n,i,r){this.stopGhost();const s=Dh(e,i);if(s.group.traverse(o=>{const a=o;a.isMesh&&(a.material=a.material.clone(),a.material.transparent=!0,a.material.opacity=.6,a.castShadow=!1)}),s.group.visible=!1,this.scene.add(s.group),this.ghost={type:e,rot:n,group:s.group,cell:null},r!=null){const o=this.live.get(r);o&&(o.built.group.visible=!1)}}updateGhost(e,n,i,r){this.ghost&&(this.ghost.rot=i,this.ghost.cell={x:e,z:n},Vu(this.ghost.group,this.ghost.type,e,n,i),this.ghost.group.visible=!0,this.showHighlight(this.ghost.type,e,n,i,r))}stopGhost(){this.ghost&&(this.scene.remove(this.ghost.group),this.ghost=null);for(const e of this.live.values())e.built.group.visible=!0;this.highlight.visible=!1,this.selectedId!=null&&this.setSelected(this.selectedId)}cellFor(e,n,i){const[r,s]=$r(n,i),o=Math.max(0,Math.min(pt-r,Math.round(e.x+Et-r/2))),a=Math.max(0,Math.min(pt-s,Math.round(e.z+Et-s/2)));return{x:o,z:a}}hop(){this.hopStart=performance.now()}buddyScreenPos(){const e=this.buddy.root.position.clone();e.y+=1.75,e.project(this.camera);const n=this.canvas.getBoundingClientRect();return{x:(e.x+1)/2*n.width,y:(1-e.y)/2*n.height}}occupied(){const e=new Set;for(const{item:n}of this.live.values())ur(n.type).floor||Fd(n.type,n.x,n.z,n.rot).forEach(i=>e.add(i));return e}placeBuddyAt(e){this.buddy.root.position.set(e.x-Et+.5,0,e.z-Et+.5)}ensureBuddyFree(){const e=this.occupied();if(!e.has(`${this.buddyCell.x},${this.buddyCell.z}`))return;let n=null,i=1/0;for(let r=0;r<pt;r++)for(let s=0;s<pt;s++){if(e.has(`${r},${s}`))continue;const o=Math.hypot(r-this.buddyCell.x,s-this.buddyCell.z);o<i&&(i=o,n={x:r,z:s})}n&&(this.buddyCell=n,this.path=[],this.placeBuddyAt(n))}findPath(e){const n=this.occupied(),i=o=>`${o.x},${o.z}`,r=new Map([[i(this.buddyCell),null]]),s=[this.buddyCell];for(;s.length;){const o=s.shift();if(o.x===e.x&&o.z===e.z){const a=[];let l=i(o);for(;l;){const[c,u]=l.split(",").map(Number);a.unshift({x:c,z:u}),l=r.get(l)??null}return a.slice(1)}for(const[a,l]of[[1,0],[-1,0],[0,1],[0,-1]]){const c={x:o.x+a,z:o.z+l};if(c.x<0||c.z<0||c.x>=pt||c.z>=pt)continue;const u=i(c);r.has(u)||n.has(u)||(r.set(u,i(o)),s.push(c))}}return[]}setRay(e){const n=this.canvas.getBoundingClientRect();this.ndc.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}resize(){const e=this.canvas.parentElement??this.canvas,n=e.clientWidth||1,i=e.clientHeight||1,r=n/i;this.renderer.setSize(n,i,!1);const s=Math.max(5.6,6.2/r);Object.assign(this.camera,{left:-s*r,right:s*r,top:s,bottom:-s}),this.camera.updateProjectionMatrix()}turnTo(e){let n=e-this.buddy.root.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.buddy.root.rotation.y+=n*.15}dispose(){this.running=!1,cancelAnimationFrame(this.frame),this.resizeObs.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.canvas.removeEventListener("pointerdown",this.onDown),this.canvas.removeEventListener("pointerup",this.onUp),this.canvas.removeEventListener("pointermove",this.onMove),this.renderer.dispose()}}const Dg=new Map;let To=null;function aC(t,e=0){const n=`${t}:${e}`,i=Dg.get(n);if(i)return i;try{To||(To=new Xf({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),To.setSize(256,256,!1));const r=new qf;r.add(new np(16777215,15980984,1.8));const s=new ip(16773596,1.8);s.position.set(3,5,4),r.add(s);const o=Dh(t,e);r.add(o.group);const a=new oo().setFromObject(o.group),l=a.getSize(new F),c=a.getCenter(new F),u=new Tn(28,1,.1,50),p=Math.max(l.x,l.y,l.z)*2.6+.3;u.position.set(c.x+p*.62,c.y+p*.45,c.z+p*.62),u.lookAt(c),To.render(r,u);const h=To.domElement.toDataURL("image/png");return Dg.set(n,h),h}catch{return""}}function ii({size:t=26}){return T.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:T.jsx("path",{d:"M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z",fill:"#FBC426",stroke:"#D99A0F",strokeWidth:"1.6",strokeLinejoin:"round"})})}function oc({size:t=20}){return T.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:T.jsx("path",{d:"M5 12.5l4.5 4.5L19 7.5",fill:"none",stroke:"currentColor",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function rp({size:t=18}){return T.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[T.jsx("rect",{x:"5",y:"10.5",width:"14",height:"10",rx:"3",fill:"currentColor"}),T.jsx("path",{d:"M8 10.5V8a4 4 0 0 1 8 0v2.5",fill:"none",stroke:"currentColor",strokeWidth:"2.6"})]})}function ex({size:t=22}){return T.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:T.jsx("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})})}function lC({on:t,size:e=24}){return T.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24","aria-hidden":"true",children:[T.jsx("path",{d:"M4 9.5h3.5L12 5.5v13l-4.5-4H4z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),t?T.jsx("path",{d:"M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"}):T.jsx("path",{d:"M16 9.5l5 5M21 9.5l-5 5",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})]})}const Ig=["arrays","division","words"];function cC(){return T.jsx("svg",{width:"16",height:"18",viewBox:"0 0 16 18","aria-hidden":"true",children:T.jsx("path",{d:"M3 2.2v13.6a1 1 0 0 0 1.5.9l10.6-6.8a1 1 0 0 0 0-1.8L4.5 1.3A1 1 0 0 0 3 2.2z",fill:"currentColor"})})}function uC({k:t}){switch(t){case"borrow":return T.jsxs("div",{className:"pk-borrow",children:[T.jsx("div",{className:"pk-rod"}),Array.from({length:6},(e,n)=>T.jsx("i",{className:"pk-cube"},n)),T.jsx("span",{className:"pk-badge minus"})]});case"times":return T.jsxs("div",{className:"pk-times",children:[T.jsx("div",{className:"pk-dots",children:Array.from({length:12},(e,n)=>T.jsx("i",{className:n%4===3?"split":""},n))}),T.jsx("span",{className:"pk-badge",children:"×"})]});case"arrays":return T.jsx("div",{className:"pk-arr",children:Array.from({length:15},(e,n)=>T.jsx("i",{},n))});case"division":return T.jsx("div",{className:"pk-plates",children:[0,1].map(e=>T.jsxs("div",{className:"pk-plate",children:[T.jsx("i",{}),T.jsx("i",{}),T.jsx("i",{})]},e))});case"words":return T.jsxs("div",{className:"pk-story",children:[T.jsx("i",{}),T.jsx("i",{}),T.jsx("i",{})]})}}function dC({onClose:t,onPick:e}){var u,p,h;const n=io(),i=wc[n.lang],[r,s]=fe.useState(null),o=Math.min(2,Math.max(0,((u=n.borrow)==null?void 0:u.level)??0)),a=(((p=n.borrow)==null?void 0:p.level)??0)===0&&(((h=n.borrow)==null?void 0:h.rounds)??0)===0,l=d=>{if(Ig.includes(d)){s({k:d,n:Date.now()}),Pt("cant-afford");return}Pt("sheet-close"),e(d)},c=["borrow","times","arrays","division","words"];return T.jsxs("section",{className:"mb-sheet pk-sheet",role:"dialog","aria-label":i.practiceTitle,children:[T.jsxs("div",{className:"mb-sheet-head",children:[T.jsx("h2",{children:i.practiceTitle}),T.jsx("button",{className:"mb-close",onClick:t,"aria-label":i.close,children:T.jsx(ex,{})})]}),T.jsx("div",{className:"pk-grid",children:c.map(d=>{const m=Ig.includes(d),y=i.modules[d];return T.jsxs("div",{className:`pk-card${m?" soon":""}${(r==null?void 0:r.k)===d?" shake":""}`,onClick:()=>l(d),children:[d==="borrow"&&a&&T.jsx("span",{className:"mb-tag",children:i.newTag}),T.jsxs("div",{className:"pk-art",children:[T.jsx(uC,{k:d}),m&&T.jsx("span",{className:"mb-lock",children:T.jsx(rp,{})})]}),T.jsx("b",{children:y}),d==="borrow"&&T.jsx("div",{className:"pk-steps",children:i.borrowSteps.map((g,f)=>T.jsx("span",{className:f<o?"done":f===o?"on":"",children:g},g))}),T.jsx("button",{className:"pk-tab","aria-label":`${m?i.soon:i.play}: ${y}`,onClick:g=>{g.stopPropagation(),l(d)},children:m?i.soon:T.jsxs(T.Fragment,{children:[T.jsx(cC,{}),i.play]})})]},d+((r==null?void 0:r.k)===d?r.n:""))})})]})}const hC=3*24*60*60*1e3,Ug=["♪","2 + 2 = 4","★","5 × 5 = 25","♥","10 − 3 = 7"],fC={rug:"place-rug",plant:"place-plant",beanbag:"place-soft",bed:"place-soft",lamp:"place-glass",fishbowl:"place-glass",table:"place-wood",shelf:"place-wood",kitty:"place-pet"};function pC({onPractice:t}){const e=io(),n=wc[e.lang],i=fe.useRef(null),r=fe.useRef(null),s=fe.useRef(null),[o,a]=fe.useState(null),[l,c]=fe.useState(null),[u,p]=fe.useState(!1),[h,d]=fe.useState(!1),[m,y]=fe.useState(!1),[g,f]=fe.useState(null),[_,v]=fe.useState(fM()),[S,P]=fe.useState(0),b=fe.useRef(e.stars),w=fe.useCallback(I=>{Br(`buddy${e.kind}-${I}`)},[e.kind]),L=fe.useCallback(I=>f({text:I,id:Date.now()}),[]),q=fe.useRef(l);q.current=l;const x=fe.useRef(e.room);x.current=e.room,fe.useEffect(()=>{const I=i.current;if(!I)return;const oe=new oC(I,{onSelectItem:ae=>{a(ae),ae!=null&&Pt("item-select")},onBuddyTap:()=>{var ae;(ae=r.current)==null||ae.hop(),w("giggle"),L(Ug[Math.floor(Math.random()*Ug.length)])},onFloorTap:(ae,X)=>{const C=q.current;C&&c({...C,x:ae,z:X})}},e.kind);return r.current=oe,oe.setRoom(e.room),()=>{oe.dispose(),r.current=null}},[]),fe.useEffect(()=>{var I;(I=r.current)==null||I.setRoom(e.room)},[e.room]),fe.useEffect(()=>{var I;(I=r.current)==null||I.setBuddyKind(e.kind)},[e.kind]),fe.useEffect(()=>{var I;(I=r.current)==null||I.setSelected(o)},[o]),fe.useEffect(()=>mM(v),[]);const E=l?Od(e.room,l.type,l.x,l.z,l.rot,l.moveId):!1,V=l?`${l.type}:${l.moveId??"new"}`:"";fe.useEffect(()=>{const I=r.current;if(I){if(!l){I.stopGhost();return}I.startGhost(l.type,l.rot,l.color,l.moveId)}},[V]),fe.useEffect(()=>{var I;l&&((I=r.current)==null||I.updateGhost(l.x,l.z,l.rot,E))},[l,E]),fe.useEffect(()=>{e.stars>b.current&&P(I=>I+1),b.current=e.stars},[e.stars]),fe.useEffect(()=>{if(e.name){const I=setTimeout(()=>{w("hello"),L(`${e.name}!`)},700);return()=>clearTimeout(I)}},[]),fe.useEffect(()=>{if(!g)return;let I=0;const oe=performance.now()+3200,ae=()=>{const X=s.current,C=r.current;if(X&&C){const D=C.buddyScreenPos(),j=X.offsetWidth,K=X.offsetHeight,se=window.innerWidth,ye=Math.max(16,Math.min(se-16-j,D.x-j/2)),ge=Math.max(76,D.y-K-14);X.style.transform=`translate(${ye}px, ${ge}px)`,X.style.setProperty("--tail",`${Math.max(18,Math.min(j-18,D.x-ye))}px`)}performance.now()<oe?I=requestAnimationFrame(ae):f(null)};return I=requestAnimationFrame(ae),()=>cancelAnimationFrame(I)},[g]);const k=o!=null?e.room.find(I=>I.id===o)??null:null,W=(I,oe)=>qn(ae=>({...ae,room:ae.room.map(X=>X.id===I?oe(X):X)})),ee=()=>{if(!k)return;const I=(k.rot+1)%4,[oe,ae]=$r(k.type,I),C=[[k.x,k.z],[Math.min(k.x,pt-oe),Math.min(k.z,pt-ae)]].find(([D,j])=>Od(e.room,k.type,D,j,I,k.id));if(!C){L(n.noRoom);return}Pt("item-rotate"),W(k.id,D=>({...D,rot:I,x:C[0],z:C[1]}))},H=()=>{k&&(Pt("item-recolor"),W(k.id,I=>({...I,color:(I.color+1)%ur(I.type).colors.length})))},re=()=>{k&&(Pt("item-putaway"),qn(I=>({...I,room:I.room.filter(oe=>oe.id!==k.id)})),a(null))},N=(I,oe=0)=>{const ae=GS(e.room,I)??{x:0,z:0};a(null),p(!1),c({type:I,rot:0,color:oe,x:ae.x,z:ae.z})},te=()=>{var oe;if(!l||!E)return;const I=l;I.moveId!=null?W(I.moveId,ae=>({...ae,x:I.x,z:I.z,rot:I.rot})):qn(ae=>({...ae,nextId:ae.nextId+1,room:[...ae.room,{id:ae.nextId,type:I.type,x:I.x,z:I.z,rot:I.rot,color:I.color}]})),Pt(fC[I.type]),(oe=r.current)==null||oe.hop(),w("happy"),L("♥"),c(null)},Z=()=>{if(!l)return;const I=(l.rot+1)%4,[oe,ae]=$r(l.type,I);c({...l,rot:I,x:Math.min(l.x,pt-oe),z:Math.min(l.z,pt-ae)})},de=I=>{const oe=ur(I);if(e.stars<oe.stars){Pt("cant-afford"),L(`${n.needMore(oe.stars-e.stars)} ★`);return}Pt("treasure-unlock"),qn(ae=>({...ae,stars:ae.stars-oe.stars,unlocked:[...ae.unlocked,I],newSince:{...ae.newSince,[I]:Date.now()}})),N(I)},Le=()=>{a(null),p(!0),Pt("sheet-open")},Be=()=>{p(!1),Pt("sheet-close")},Y=()=>{a(null),d(!0),Pt("sheet-open")},ue=()=>{d(!1),Pt("sheet-close")},xe=()=>pM(!_),pe=()=>qn(I=>({...I,lang:I.lang==="en"?"es":"en"})),Q=!e.name||m;return T.jsxs("div",{className:"mb mb-room",lang:e.lang,children:[T.jsx("canvas",{ref:i,"aria-label":e.name??"Buddy"}),!Q&&T.jsxs("div",{className:"mb-hud",children:[T.jsx("button",{className:"mb-chip buddy",onClick:()=>y(!0),children:e.name}),T.jsxs("div",{className:"mb-hud-right",children:[T.jsxs("span",{className:`mb-chip${S?" bump":""}`,"aria-label":n.starsLabel(e.stars),children:[T.jsx(ii,{}),e.stars]},S),T.jsx("button",{className:"mb-chip icon",onClick:xe,"aria-label":_?n.soundOn:n.soundOff,"aria-pressed":_,children:T.jsx(lC,{on:_})}),T.jsx("button",{className:"mb-chip icon",onClick:pe,"aria-label":n.langSwitch,children:e.lang==="en"?"ES":"EN"})]})]}),g&&T.jsx("div",{ref:s,className:"mb-bubble",role:"status",children:g.text},g.id),!Q&&!u&&!h&&T.jsx("div",{className:"mb-bar",children:l?T.jsxs("div",{className:"mb-tools",children:[T.jsx("span",{className:`mb-hint${E?"":" warn"}`,children:E?n.placeHint:n.noRoom}),T.jsxs("div",{className:"mb-tools-row",children:[T.jsx("button",{className:"mb-btn quiet small",onClick:()=>c(null),children:n.cancel}),T.jsx("button",{className:"mb-btn quiet small",onClick:Z,children:n.turn}),T.jsxs("button",{className:"mb-btn small",onClick:te,disabled:!E,children:[T.jsx(oc,{}),n.done]})]})]}):k?T.jsxs("div",{className:"mb-tools-row",children:[T.jsx("button",{className:"mb-btn quiet small",onClick:ee,children:n.turn}),T.jsx("button",{className:"mb-btn quiet small",onClick:H,children:n.color}),T.jsx("button",{className:"mb-btn quiet small",onClick:()=>{a(null),c({type:k.type,rot:k.rot,color:k.color,moveId:k.id,x:k.x,z:k.z})},children:n.move}),T.jsx("button",{className:"mb-btn quiet small",onClick:re,children:n.putAway}),T.jsx("button",{className:"mb-btn small",onClick:()=>a(null),children:n.done})]}):T.jsxs(T.Fragment,{children:[T.jsx("button",{className:"mb-btn",onClick:Y,children:n.practice}),T.jsx("button",{className:"mb-btn secondary",onClick:Le,children:n.treasures})]})}),u&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"mb-scrim",onClick:Be}),T.jsx(mC,{onClose:Be,onUnlock:de,onPlace:I=>N(I)})]}),h&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"mb-scrim",onClick:ue}),T.jsx(dC,{onClose:ue,onPick:I=>{d(!1),t(I)}})]}),Q&&T.jsx(gC,{initialName:e.name??"",initialKind:e.kind,onKind:I=>{qn(oe=>({...oe,kind:I}))},onDone:I=>{var oe;qn(ae=>({...ae,name:I})),y(!1),(oe=r.current)==null||oe.hop(),w("cheer"),L(`${I}!`)}})]})}function mC({onClose:t,onUnlock:e,onPlace:n}){const i=io(),r=wc[i.lang],s=fe.useMemo(()=>new Set(i.room.map(a=>a.type)),[i.room]),o=Date.now();return T.jsxs("section",{className:"mb-sheet",role:"dialog","aria-label":r.treasuresTitle,children:[T.jsxs("div",{className:"mb-sheet-head",children:[T.jsx("h2",{children:r.treasuresTitle}),T.jsxs("span",{className:"mb-chip",children:[T.jsx(ii,{}),i.stars]}),T.jsx("button",{className:"mb-close",onClick:t,"aria-label":r.close,children:T.jsx(ex,{})})]}),T.jsx("div",{className:"mb-collect",children:a_.map(a=>{const l=i.unlocked.includes(a.type),c=s.has(a.type),u=i.stars>=a.stars,p=l&&o-(i.newSince[a.type]??0)<hC,h=!l&&!u,d=r.items[a.type],m=`mb-item${h?" locked":""}${p?" is-new":""}`;return T.jsxs("div",{className:m,children:[p?T.jsx("span",{className:"mb-tag",children:r.newTag}):a.rare?T.jsx("span",{className:"mb-tag rare",children:r.rareTag}):null,c&&T.jsx("span",{className:"mb-check","aria-label":r.inRoom,children:T.jsx(oc,{})}),T.jsxs("div",{className:"art",children:[T.jsx("img",{src:aC(a.type),alt:""}),h&&T.jsx("span",{className:"mb-lock","aria-label":r.locked,children:T.jsx(rp,{})})]}),T.jsx("b",{children:d}),c?T.jsx("span",{className:"tab owned",children:r.inRoom}):l?T.jsx("button",{className:"tab place",onClick:()=>n(a.type),children:r.place}):u?T.jsxs("button",{className:"tab",onClick:()=>e(a.type),"aria-label":`${r.unlock} ${d}, ${r.starsLabel(a.stars)}`,children:[T.jsx(ii,{size:18}),a.stars," · ",r.unlock]}):T.jsxs("button",{className:"tab need",onClick:()=>e(a.type),"aria-label":`${d}, ${r.starsLabel(a.stars)}`,children:[T.jsx(ii,{size:18}),a.stars]})]},a.type)})})]})}function gC({initialName:t,initialKind:e,onKind:n,onDone:i}){const r=io(),s=wc[r.lang],[o,a]=fe.useState(t),[l,c]=fe.useState(e),u=h=>{c(h),n(h),Pt("choice-tap")},p=h=>{h.preventDefault();const d=o.trim().slice(0,14);d&&i(d)};return T.jsx("div",{className:"mb-onboard",children:T.jsxs("form",{className:"mb-onboard-card",onSubmit:p,children:[T.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:-8},children:T.jsx("button",{type:"button",className:"mb-chip icon",onClick:()=>qn(h=>({...h,lang:h.lang==="en"?"es":"en"})),"aria-label":s.langSwitch,children:r.lang==="en"?"ES":"EN"})}),T.jsx("img",{className:"logo",src:"/logo-stacked.svg",alt:"Math Buddy"}),T.jsx("h2",{children:s.pickKind}),T.jsxs("div",{className:"mb-kinds",role:"group","aria-label":s.pickKind,children:[T.jsx("button",{type:"button",className:"mb-kind","aria-pressed":l==="boy",onClick:()=>u("boy"),children:s.boy}),T.jsx("button",{type:"button",className:"mb-kind","aria-pressed":l==="girl",onClick:()=>u("girl"),children:s.girl})]}),T.jsx("label",{htmlFor:"mb-buddy-name",children:T.jsx("h2",{children:s.nameAsk(l)})}),T.jsx("input",{id:"mb-buddy-name",className:"mb-name",value:o,maxLength:14,autoComplete:"off",autoCapitalize:"words",placeholder:s.namePlaceholder,onChange:h=>a(h.target.value)}),T.jsx("button",{type:"submit",className:"mb-btn",disabled:!o.trim(),children:s.start})]})})}class tx{constructor(e,n,i=1){var o;this.canvas=e,this.facing=i,this.scene=new qf,this.camera=new Tn(24,1,.1,50),this.mood="idle",this.moodAt=0,this.blinkAt=0,this.frame=0,this.reduceMotion=((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,this.look=1,this.loop=a=>{const l=a/1e3,c=this.buddy.body,u=this.buddy.root,p=(a-this.moodAt)/1e3,h=this.reduceMotion?.3:1,d=this.facing*(this.look>0?.55:.12);let m=d,y=0,g=0,f=Math.sin(l*2.2)*.015,_=1,v=1+Math.sin(l*2.2)*.012,S=0,P=Math.sin(l*.9)*.03,b=0;switch(this.mood){case"happy":case"thanks":{const q=this.mood==="thanks"?.9:.7,x=Math.min(1,p/q);f=Math.sin(x*Math.PI)*.45,_=1+Math.sin(x*Math.PI*2)*.07,v=1-Math.sin(x*Math.PI*2)*.07,S=this.reduceMotion?0:x*Math.PI*2,m=this.facing*.12,p>q+.4&&(this.mood="idle");break}case"curious":{const q=Math.min(1,p/.35);y=.16*q,P=.22*q+Math.sin(l*3)*.02,p>2.6&&(this.mood="idle");break}case"think":{P=-.16+Math.sin(l*1.4)*.05,b=.08,m=d*.8,p>2.2&&(this.mood="idle");break}case"oops":{const q=Math.min(1,p/1.1);v=1-Math.sin(Math.min(1,p/.25)*Math.PI)*.06,P=Math.sin(q*Math.PI*4)*.18*(1-q)*h,b=.12,m=this.facing*.12,p>1.8&&(this.mood="idle");break}}u.rotation.y+=(m+S-u.rotation.y)*(S?1:.12),!S&&Math.abs(u.rotation.y)>Math.PI&&(u.rotation.y=m),c.position.y=f*h,c.rotation.x+=(y-c.rotation.x)*.15,c.rotation.z+=(g-c.rotation.z)*.15,c.scale.set(_,v,1),this.head&&(this.head.rotation.z+=(P-this.head.rotation.z)*.2,this.head.rotation.x+=(b-this.head.rotation.x)*.2);const w=a-this.blinkAt,L=w>0&&w<140?.1:1;this.buddy.eyes.forEach(q=>q.scale.y=L),w>140&&(this.blinkAt=a+2200+Math.random()*2600),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop)},this.renderer=new Xf({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Df,this.scene.add(new np(16777215,15980984,1.6));const r=new ip(16773596,1.9);r.position.set(2,6,4),r.castShadow=!0,r.shadow.mapSize.set(512,512),Object.assign(r.shadow.camera,{left:-2,right:2,top:2,bottom:-2,near:.5,far:15}),r.shadow.radius=6,this.scene.add(r);const s=new Wt(new Zf(1.2,40),new tC({opacity:.18}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.buddy=Q_(n),this.scene.add(this.buddy.root),this.head=this.buddy.body.children.find(a=>a.type==="Group"&&a.position.y>.7)??null,this.camera.position.set(0,1.35,6.2),this.camera.lookAt(0,.82,0),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e.parentElement??e),this.resize(),this.frame=requestAnimationFrame(this.loop)}setKind(e){this.buddy.boyDetail.visible=e==="boy",this.buddy.girlDetail.visible=e==="girl"}react(e){this.mood=e,this.moodAt=performance.now()}lookAt(e){this.look=e}headPos(){const e=new F(0,1.32,0).applyMatrix4(this.buddy.root.matrixWorld).project(this.camera),n=this.canvas.getBoundingClientRect();return{x:(e.x+1)/2*n.width,y:(1-e.y)/2*n.height}}dispose(){cancelAnimationFrame(this.frame),this.resizeObs.disconnect(),this.renderer.dispose()}resize(){const e=this.canvas.parentElement??this.canvas,n=Math.max(1,e.clientWidth),i=Math.max(1,e.clientHeight);this.renderer.setSize(n,i,!1),this.camera.aspect=n/i;const r=6.2,s=.78,o=n/i,a=2*Math.atan(Math.tan(Math.atan(s/r))/o)*(180/Math.PI);this.camera.fov=o>1.1?17:Math.max(24,a);const l=r*Math.tan(this.camera.fov*Math.PI/360);this.camera.position.set(0,1.35,r),this.camera.lookAt(0,Math.max(.82,l*.5),0),this.camera.updateProjectionMatrix()}}const kg={en:[["one","ones"],["ten","tens"],["hundred","hundreds"]],es:[["unidad","unidades"],["decena","decenas"],["centena","centenas"]]},Gu=t=>t[0].toUpperCase()+t.slice(1),ot=t=>`<b>${t}</b>`;function ac(t){const e=r=>kg[t][r][1],n=r=>kg[t][r][0],i=t==="en";return{back:i?"My room":"Mi cuarto",next:i?"Next":"Siguiente",again:i?"Play again":"Otra vez",room:i?"My room":"Mi cuarto",fix:i?"Fix it":"Corregir",buddyAnswer:r=>i?`${r.name}'s answer`:`Respuesta de ${r.name}`,roundTitle:i?"Round complete!":"¡Ronda completa!",roundStars:r=>i?`You earned ${r} ${r===1?"star":"stars"}`:`Ganaste ${r} ${r===1?"estrella":"estrellas"}`,unlockedStep:r=>i?`New next time: ${ac(t).tag(r,{name:"",kind:"boy"})}!`:`¡Nuevo la próxima vez: ${ac(t).tag(r,{name:"",kind:"boy"})}!`,tag:(r,s)=>({blocks:i?"Blocks":"Bloques",discs:i?"Discs":"Fichas",pencil:i?"Pencil":"Lápiz",buddy:i?`${s.name}'s turn`:`Turno de ${s.name}`})[r],place:r=>Gu(e(r)),msg:(r,s)=>{const o=s.kind==="girl"?"she":"he";switch(r.k){case"startTake":return i?`Start with the ${e(r.p)}. Take away ${ot(r.n)}.`:`Empieza por las ${e(r.p)}. Quita ${ot(r.n)}.`;case"taking":return i?`Take away ${e(r.p)}: ${ot(r.done)} of ${ot(r.n)}`:`Quita ${e(r.p)}: ${ot(r.done)} de ${ot(r.n)}`;case"notEnough":return i?`Only ${ot(r.have)} ${r.have===1?n(r.p):e(r.p)}. Not enough to take away ${ot(r.need)}! Tap a ${n(r.p+1)} to break it.`:`Solo hay ${ot(r.have)} ${r.have===1?n(r.p):e(r.p)}. ¡No alcanza para quitar ${ot(r.need)}! Toca una ${n(r.p+1)} para romperla.`;case"breakFurther":return i?`No ${e(r.p)} to break! Tap a ${n(r.from)} first.`:`¡No hay ${e(r.p)} para romper! Toca primero una ${n(r.from)}.`;case"brokeAgain":return i?`Now tap a ${n(r.p)} to break it.`:`Ahora toca una ${n(r.p)} para romperla.`;case"broke":return i?`10 more ${e(r.p)}! Now there are ${ot(r.have)}. Take away ${ot(r.need)}.`:`¡10 ${e(r.p)} más! Ahora hay ${ot(r.have)}. Quita ${ot(r.need)}.`;case"left":return i?`How many ${e(r.p)} are left?`:`¿Cuántas ${e(r.p)} quedan?`;case"countLeft":return i?`Count the ${e(r.p)} that are left.`:`Cuenta las ${e(r.p)} que quedan.`;case"nextCol":return i?`Now the ${e(r.p)}. Take away ${ot(r.n)}.`:`Ahora las ${e(r.p)}. Quita ${ot(r.n)}.`;case"wCol":return`${Gu(e(r.p))}: ${ot(`${r.a} − ${r.b}`)}`;case"wLess":return i?`${ot(r.a)} is less than ${ot(r.b)}. Tap the ${e(r.from)} to borrow.`:`${ot(r.a)} es menor que ${ot(r.b)}. Toca las ${e(r.from)} para pedir prestado.`;case"wBorrowMore":return i?`Now borrow from the ${e(r.p)}.`:`Ahora pide prestado a las ${e(r.p)}.`;case"wAfter":return i?`Now it's ${ot(`${r.a} − ${r.b}`)}.`:`Ahora es ${ot(`${r.a} − ${r.b}`)}.`;case"tryAgain":return i?`Almost! Try ${ot(`${r.a} − ${r.b}`)} again.`:`¡Casi! Intenta ${ot(`${r.a} − ${r.b}`)} otra vez.`;case"done":return i?"You did it!":"¡Lo lograste!";case"buddyAsk":return i?`${s.name} tried this one. <b>Tap the number ${o} got wrong.</b>`:`${s.name} hizo esta. <b>Toca el número que tiene mal.</b>`;case"buddyTens":return i?"That one is wrong too, but start with the ones.":"Ese también está mal, pero empieza por las unidades.";case"buddyNope":return i?"That part is right. Look at the ones.":"Esa parte está bien. Mira las unidades.";case"buddyFound":return i?`Yes! ${Gu(o)} did ${ot(`${r.b} − ${r.a}`)} because it was easier. Help ${s.name} borrow.`:`¡Sí! Hizo ${ot(`${r.b} − ${r.a}`)} porque era más fácil. Ayuda a ${s.name} a pedir prestado.`;case"buddyThanks":return i?`${s.name} says thanks!`:`¡${s.name} te da las gracias!`}}}}const vC={en:ac("en"),es:ac("es")},_a=t=>JSON.parse(JSON.stringify(t)),ua=(t,e)=>String(t).padStart(e,"0").split("").reverse().map(Number),bn=t=>t==="blocks"||t==="discs";function Wu(t,e,n){const i=String(e).length,r=ua(e,i),s=ua(n,i);let o=1;const a={mode:t,a:e,b:n,n:i,orig:r.slice(),top:r.slice(),bot:s,active:0,phase:t==="buddy"?"find":bn(t)?"take":"answer",taken:Array(i).fill(0),ans:Array(i).fill(null),wrong:Array(i).fill(0),items:bn(t)?r.map(l=>Array.from({length:l},()=>({id:o++}))):r.map(()=>[]),crossed:Array(i).fill(!1),source:-1,hintKey:-1,numbered:!1,picked:null,slips:0,msg:{k:"buddyAsk"},nextId:o};return a.msg=t==="buddy"?{k:"buddyAsk"}:bn(t)?{k:"startTake",p:0,n:s[0]}:{k:"wCol",p:0,a:r[0],b:s[0]},bn(t)&&nx(a),a}function nx(t){t.phase==="take"&&t.bot[t.active]===0&&(t.phase="answer",t.msg={k:"left",p:t.active})}function sp(t,e){const n=t.active;if(e<=n||t.top[n]>=t.bot[n]||t.taken[n]>0)return!1;for(let i=n+1;i<e;i++)if(t.top[i]!==0)return!1;return t.top[e]>0}function Ih(t){for(let e=t.active+1;e<t.n;e++)if(t.top[e]>0)return e;return-1}function ix(t){t.items.forEach(e=>e.forEach(n=>{delete n.fresh,delete n.k}))}function op(t,e,n,i){const r=e-1;if(bn(t.mode)){const o=t.items[e].filter(l=>!l.gone),a=n!==null&&o.find(l=>l.id===n)||o[o.length-1];t.items[e]=t.items[e].filter(l=>l!==a);for(let l=0;l<10;l++)t.items[r].push({id:t.nextId++,fresh:!0,k:l});i.push({t:"break",from:e,id:a?a.id:null})}t.top[e]-=1,t.top[r]+=10,t.crossed[e]=!0,t.crossed[r]=!0,t.source=-1,t.hintKey=-1,i.push({t:"sfx",name:e===2?"hundred-break":"ten-break"});const s=t.active;if(r!==s){t.source=r,t.msg=bn(t.mode)?{k:"brokeAgain",p:r}:{k:"wBorrowMore",p:r},i.push({t:"buddy",mood:"curious",emote:"!"});return}i.push({t:"buddy",mood:"curious",emote:"!"},{t:"voice",name:"curious"}),t.msg=bn(t.mode)?{k:"broke",p:s,have:t.top[s],need:t.bot[s]}:{k:"wAfter",p:s,a:t.top[s],b:t.bot[s]}}function _C(t,e,n){const i=_a(t);ix(i);const r=[];if(i.phase==="done"||!bn(i.mode))return{s:t,fx:r};const s=i.active;if(e===s&&i.phase==="take"){if(i.top[s]<i.bot[s]){const a=Ih(i);return i.source=a,i.slips++,i.msg=a===s+1?{k:"notEnough",p:s,have:i.top[s],need:i.bot[s]}:{k:"breakFurther",p:s+1,from:a},r.push({t:"shake",target:"mat",p:e},{t:"buddy",mood:"curious",emote:"?"},{t:"voice",name:"hmm"},{t:"sfx",name:"cant-afford"}),{s:i,fx:r}}const o=i.items[e].find(a=>a.id===n);return!o||o.gone?{s:t,fx:r}:(o.gone=!0,i.taken[e]++,r.push({t:"sfx",name:"cross-out"}),i.taken[e]>=i.bot[e]?(i.phase="answer",i.msg={k:"left",p:e},r.push({t:"sfx",name:"column-done"})):i.msg={k:"taking",p:e,done:i.taken[e],n:i.bot[e]},{s:i,fx:r})}return e>s&&i.phase==="take"&&sp(i,e)?(op(i,e,n,r),{s:i,fx:r}):(r.push({t:"shake",target:"mat",p:e},{t:"sfx",name:"cant-place"}),e>s&&i.source>=0&&r.push({t:"buddy",mood:"think",emote:"dots"}),{s:i,fx:r})}function xC(t,e){const n=[];if(t.phase!=="answer"||bn(t.mode))return{s:t,fx:n};const i=_a(t);return sp(i,e)?(op(i,e,null,n),{s:i,fx:n}):(n.push({t:"shake",target:"top",p:e},{t:"sfx",name:"cant-place"}),{s:t,fx:n})}function Fg(t,e){const n=[];if(t.phase!=="answer")return{s:t,fx:n};const i=_a(t);ix(i);const r=i.active;if(n.push({t:"sfx",name:"keypad-tap"}),i.top[r]<i.bot[r]){if(e===i.top[r]+10-i.bot[r]){let o;const a=[];for(;i.top[r]<i.bot[r]&&(o=Ih(i))>=0;)op(i,o,null,a);return n.push(...a.filter(l=>l.t==="sfx")),Og(i,e,n)}i.wrong[r]++,i.slips++;const s=Ih(i);return i.source=s,i.msg={k:"wLess",p:r,a:i.top[r],b:i.bot[r],from:s},n.push({t:"shake",target:"slot",p:r},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"curious",emote:"?"},{t:"voice",name:"hmm"}),{s:i,fx:n}}return e===i.top[r]-i.bot[r]?Og(i,e,n):(i.wrong[r]++,i.slips++,n.push({t:"shake",target:"slot",p:r},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"dots"},{t:"voice",name:"hmm"}),bn(i.mode)?(i.msg={k:"countLeft",p:r},i.wrong[r]>=2&&(i.numbered=!0)):(i.msg={k:"tryAgain",a:i.top[r],b:i.bot[r]},i.wrong[r]>=2&&(i.hintKey=i.top[r]-i.bot[r])),{s:i,fx:n})}function Og(t,e,n){const i=t.active;t.ans[i]=e,t.wrong[i]=0,t.hintKey=-1,t.numbered=!1,t.source=-1,n.push({t:"sfx",name:t.slips===0?"answer-correct":"answer-correct-retry"});const r=i+1,s=r===t.n-1&&t.top[r]===0&&t.bot[r]===0;if(r>=t.n||s){r<t.n&&(t.ans[r]=0),t.phase="done";const o=t.mode==="buddy";return t.msg=o?{k:"buddyThanks"}:{k:"done"},n.push({t:"buddy",mood:o?"thanks":"happy",emote:o?"heart":"star"},{t:"voice",name:o?"thanks":"happy"},{t:"sfx",name:"star-earn"},{t:"solved",firstTry:t.slips===0}),{s:t,fx:n}}return t.active=r,t.phase=bn(t.mode)?"take":"answer",t.msg=bn(t.mode)?{k:"nextCol",p:r,n:t.bot[r]}:{k:"wCol",p:r,a:t.top[r],b:t.bot[r]},nx(t),n.push({t:"buddy",mood:"happy"}),{s:t,fx:n}}function rx(t){return t.orig.map((e,n)=>Math.abs(e-t.bot[n]))}const yC=t=>ua(t.a-t.b,t.n);function SC(t,e){const n=[];if(t.phase!=="find")return{s:t,fx:n};const i=_a(t),r=rx(i),s=yC(i),o=r.findIndex((a,l)=>a!==s[l]);return e===o?(i.picked=e,i.msg={k:"buddyFound",a:i.orig[e],b:i.bot[e]},n.push({t:"buddy",mood:"oops",emote:"drop"},{t:"voice",name:"oops"},{t:"sfx",name:"answer-correct"}),{s:i,fx:n}):(i.slips++,i.msg=r[e]!==s[e]?{k:"buddyTens"}:{k:"buddyNope"},n.push({t:"shake",target:"buddyDigit",p:e},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:r[e]!==s[e]?"dots":"?"}),{s:i,fx:n})}function MC(t){const e=_a(t);return e.phase="answer",e.slips=0,e.msg={k:"wCol",p:0,a:e.top[0],b:e.bot[0]},{s:e,fx:[{t:"buddy",mood:"think",emote:"dots"}]}}const Ki=(t,e)=>t+Math.floor(Math.random()*(e-t+1));function EC(t,e){const n=String(t).length,i=ua(t,n),r=ua(e,n);return i.some((s,o)=>s<r[o])}function Uh(){for(;;){const t=Ki(3,9),e=Ki(1,t-1),n=Ki(2,9),i=Ki(0,n-1);if(!(t-1-e<1))return[t*10+i,e*10+n]}}function zg(t){for(let e=0;e<500;e++){const n=t?Ki(2,9)*100+Ki(0,9):Ki(200,999),i=Ki(101,n-100);if(!(t&&Math.floor(n/10)%10!==0)&&EC(n,i)&&!(Math.floor((n-i)/100)<1)&&!(t&&n%10>=i%10))return[n,i]}return[403,158]}function wC(){for(;;){const[t,e]=Uh();if(e%10-t%10!==5)return[t,e]}}const TC=5;function Bg(t){const e=[],n=new Set;for(;e.length<TC;){const i=e.length;let r,s;t<=0?(r="blocks",s=Uh()):t===1?(r="discs",s=zg(i===3)):i===2?(r="buddy",s=wC()):(r="pencil",s=i===0?Uh():zg(i===4));const o=s.join("-");n.has(o)||(n.add(o),e.push({mode:r,a:s[0],b:s[1]}))}return e}const AC=2,bC=["blocks","discs","pencil"],CC=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function RC(){return T.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24","aria-hidden":"true",children:T.jsx("path",{d:"M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z",fill:"#F64034"})})}function PC(){return T.jsxs("svg",{width:"26",height:"30",viewBox:"0 0 20 24","aria-hidden":"true",children:[T.jsx("path",{d:"M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z",fill:"#70BCD6"}),T.jsx("ellipse",{cx:"7.5",cy:"15",rx:"1.6",ry:"2.4",fill:"#fff",opacity:".8"})]})}function LC({e:t}){switch(t){case"?":return T.jsx("span",{style:{color:"var(--cobalt)"},children:"?"});case"!":return T.jsx("span",{style:{color:"var(--tomato)"},children:"!"});case"heart":return T.jsx(RC,{});case"drop":return T.jsx(PC,{});case"dots":return T.jsx("span",{style:{color:"var(--ink-soft)",letterSpacing:2,fontSize:26},children:"•••"});case"star":return T.jsx(ii,{size:30})}}function NC(t,e){t&&(t.classList.remove(e),t.offsetWidth,t.classList.add(e))}function DC({onExit:t,onSolved:e}){var C;const n=io(),i=vC[n.lang],r=fe.useMemo(()=>({name:CC(n.name||"Buddy"),kind:n.kind}),[n.name,n.kind]),s=Math.min(2,Math.max(0,((C=n.borrow)==null?void 0:C.level)??0)),[o,a]=fe.useState(()=>Bg(s)),[l,c]=fe.useState(0),[u,p]=fe.useState(0),[h,d]=fe.useState(null),[m,y]=fe.useState(()=>Wu(o[0].mode,o[0].a,o[0].b)),g=fe.useRef(null),f=fe.useRef(null),_=fe.useRef(null),[v,S]=fe.useState(null),P=fe.useRef(0);fe.useEffect(()=>{if(!g.current)return;let D=null;try{D=new tx(g.current,n.kind,1)}catch{D=null}f.current=D;let j=0;const K=()=>{if(D&&_.current){const se=D.headPos();_.current.style.left=`${se.x}px`,_.current.style.top=`${se.y}px`}j=requestAnimationFrame(K)};return j=requestAnimationFrame(K),Br(`buddy${n.kind}-hello`),()=>{cancelAnimationFrame(j),D==null||D.dispose(),f.current=null}},[]),fe.useEffect(()=>{var D;return(D=f.current)==null?void 0:D.setKind(n.kind)},[n.kind]),fe.useEffect(()=>()=>clearTimeout(P.current),[]);const b=fe.useCallback(D=>{S(D),clearTimeout(P.current),P.current=window.setTimeout(()=>S(null),1600)},[]),w=fe.useRef(null),L=fe.useRef(null),q=fe.useRef(null),x=fe.useRef({shakes:[],breakRect:null}),[E,V]=fe.useState(0),k=fe.useCallback(()=>{var ge,R;const D=(ge=q.current)==null?void 0:ge.getBoundingClientRect(),j=(R=L.current)==null?void 0:R.getBoundingClientRect();if(!D||!j)return;const K=document.createElement("div");K.className="bp-flystar",K.innerHTML='<svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#FBC426" stroke="#D99A0F" stroke-width="1.6" stroke-linejoin="round"/></svg>';const se=D.left+D.width/2-22,ye=D.top+D.height/2-22;K.style.left=`${se}px`,K.style.top=`${ye}px`,document.body.appendChild(K),requestAnimationFrame(()=>requestAnimationFrame(()=>{K.style.transform=`translate(${j.left+12-se}px, ${j.top+2-ye}px) scale(.6)`,K.style.opacity="0"})),window.setTimeout(()=>{K.remove(),Bd(1),V(M=>M+1)},820)},[]),W=fe.useCallback(D=>{var j,K;for(const se of D.fx)switch(se.t){case"sfx":Pt(se.name);break;case"voice":Br(`buddy${n.kind}-${se.name}`);break;case"buddy":(j=f.current)==null||j.react(se.mood),se.emote&&b(se.emote);break;case"shake":x.current.shakes.push(se);break;case"break":{const ye=se.id!==null?(K=w.current)==null?void 0:K.querySelector(`[data-id="${se.id}"]`):null;x.current.breakRect=ye?ye.getBoundingClientRect():null;break}case"solved":p(ye=>ye+1),e==null||e(se.firstTry),k();break}D.s===m?ee():y(D.s)},[m,n.kind,b,k,e]);function ee(){const D=w.current;if(D){for(const j of x.current.shakes){if(j.t!=="shake")continue;const K={mat:`.bp-mat[data-p="${j.p}"]`,slot:".bp-slot.active",top:`[data-top="${j.p}"]`,buddyDigit:`[data-buddy="${j.p}"]`}[j.target];NC(D.querySelector(K),"bp-shake")}x.current.shakes=[]}}fe.useLayoutEffect(()=>{const D=x.current.breakRect,j=w.current;j&&j.querySelectorAll(".bp-it.fresh").forEach(K=>{const se=Number(K.dataset.k||0);if(!D){K.classList.remove("fresh");return}const ye=K.getBoundingClientRect(),ge=D.left+D.width/2,M=D.height>D.width*3?D.top+(se+.5)*(D.height/10):D.top+D.height/2;K.style.setProperty("--fx",`${ge-(ye.left+ye.width/2)}px`),K.style.setProperty("--fy",`${M-(ye.top+ye.height/2)}px`),K.style.setProperty("--dl",`${se*.035}s`)}),x.current.breakRect=null,ee()},[m]);const H=fe.useCallback(()=>{var j,K;if(Pt("sheet-close"),l+1<o.length){const se=o[l+1];c(l+1),y(Wu(se.mode,se.a,se.b)),(j=f.current)==null||j.react("idle");return}let D=null;qn(se=>{const ye=se.borrow??{level:0,rounds:0};let ge=ye.level,R=ye.rounds+1;return R>=AC&&ge<2&&(ge+=1,R=0,D=bC[ge]),{...se,borrow:{level:ge,rounds:R}}}),d({unlocked:D}),Pt("round-complete"),Br(`buddy${n.kind}-cheer`),(K=f.current)==null||K.react("happy"),b("star")},[l,o,n.kind,b]),re=fe.useCallback(()=>{var K;const D=Math.min(2,Math.max(0,((K=n.borrow)==null?void 0:K.level)??0)),j=Bg(D);a(j),c(0),p(0),d(null),y(Wu(j[0].mode,j[0].a,j[0].b))},[n.borrow]);fe.useEffect(()=>{const D=j=>{h||(/^[0-9]$/.test(j.key)?W(Fg(m,Number(j.key))):j.key==="Enter"&&m.phase==="done"&&H())};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[m,W,H,h]);const N=m.n,te=bn(m.mode),Z=m.mode==="pencil"||m.mode==="buddy",de=D=>N-D+1,Le=m.mode==="blocks"?N===2?["1.5fr","1fr"]:["1.2fr","1.5fr","1fr"]:Array(N).fill("1fr"),Be=m.mode==="buddy"&&(m.phase==="find"||m.picked!==null),Y=Be?2:1,ue=Y+1,xe=Y+2,pe=Y+3,Q=Y+4,I=te?Q:pe,oe=Array.from({length:N},(D,j)=>N-1-j),ae=rx(m),X=m.phase==="take"||m.phase==="answer";return T.jsxs("div",{className:"mb bp",children:[T.jsxs("header",{className:"bp-hud",children:[T.jsxs("button",{className:"mb-chip",onClick:t,"aria-label":i.back,children:[T.jsx("img",{src:"/mark-face.svg",alt:"",width:34,height:38,style:{margin:"-4px 0 -2px"}}),T.jsx("span",{className:"label",children:i.back})]}),T.jsx("div",{className:"bp-dots","aria-label":`${l+1} / ${o.length}`,children:o.map((D,j)=>T.jsx("span",{className:`bp-dot ${j<l||j===l&&m.phase==="done"?"done":j===l?"now":""}`},j))}),T.jsxs("span",{ref:L,className:`mb-chip${E?" bump":""}`,children:[T.jsx(ii,{}),n.stars]},E)]}),T.jsxs("main",{className:"bp-stage",children:[T.jsxs("div",{className:"bp-buddy",children:[T.jsx("canvas",{ref:g,"aria-hidden":"true"}),T.jsx("div",{ref:_,className:`bp-emote${v?" on":""}`,children:v&&T.jsx(LC,{e:v})})]}),T.jsxs("section",{className:"bp-card",ref:q,children:[T.jsxs("div",{className:"bp-task","aria-live":"polite",children:[T.jsx("span",{className:"tag",children:i.tag(m.mode,r)}),T.jsx("span",{dangerouslySetInnerHTML:{__html:i.msg(m.msg,r)}})]},JSON.stringify(m.msg)+n.lang),T.jsx("div",{className:"bp-work",children:T.jsxs("div",{ref:w,className:"bp-sheet",style:{gridTemplateColumns:`calc(var(--digit) * .7) ${Le.join(" ")}`,gridTemplateRows:`repeat(${I}, auto)`},children:[X&&T.jsx("div",{className:"bp-band",style:{gridRow:`${Y} / -1`,gridColumn:de(m.active)}}),Be&&T.jsxs("div",{className:"bp-paper",style:{gridRow:1,gridColumn:"1 / -1"},children:[T.jsx("img",{src:"/mark-face.svg",width:26,height:29,alt:""}),T.jsx("span",{dangerouslySetInnerHTML:{__html:`${i.buddyAnswer(r)}:`}}),T.jsxs("span",{className:"bp-marker",style:{fontSize:26},children:[m.a," − ",m.b," = ",Number(ae.slice().reverse().join(""))]})]}),oe.map(D=>{const j=m.crossed[D]?T.jsxs(T.Fragment,{children:[T.jsx("span",{className:"old",children:m.orig[D]}),T.jsx("span",{className:"new",children:m.top[D]})]}):T.jsx(T.Fragment,{children:m.orig[D]}),K=Z&&m.source===D,se={gridRow:Y,gridColumn:de(D)};return Z&&m.phase==="answer"?T.jsx("div",{className:"bp-cell top",style:se,children:T.jsx("button",{className:`bp-digit${sp(m,D)?" can":""}${K?" glow":""}`,"data-top":D,onClick:()=>W(xC(m,D)),children:j})},`t${D}`):T.jsx("div",{className:"bp-cell top",style:se,children:T.jsx("span",{className:"bp-digit","data-top":D,children:j})},`t${D}`)}),T.jsx("div",{className:"bp-cell sign",style:{gridRow:ue,gridColumn:1},children:"−"}),oe.map(D=>T.jsx("div",{className:"bp-cell",style:{gridRow:ue,gridColumn:de(D)},children:T.jsx("span",{className:"bp-digit",children:m.bot[D]})},`b${D}`)),T.jsx("div",{className:"bp-rule",style:{gridRow:xe,gridColumn:"1 / -1"}}),oe.map(D=>{const j={gridRow:pe,gridColumn:de(D)};if(m.phase==="find")return T.jsx("div",{className:"bp-cell",style:j,children:T.jsx("button",{className:`bp-digit bp-marker${m.picked===D?" picked":""}`,"data-buddy":D,style:{minWidth:"calc(var(--digit) * .82)"},onClick:()=>W(SC(m,D)),children:ae[D]})},`a${D}`);const K=m.ans[D]!==null,se=D===m.active&&m.phase==="answer";return T.jsx("div",{className:"bp-cell",style:j,children:T.jsx("div",{className:`bp-slot ${K?"filled":se?"active":"empty"}`,children:K?m.ans[D]:""})},`a${D}`)}),te&&oe.map(D=>{const j=m.mode==="discs"?"discs":D===0?"cubes":"rods",K=m.mode==="discs"?"disc":D===0?"cube":"rod",se=m.mode==="discs"?[1,10,100][D]:"";let ye=0;return T.jsxs("div",{className:`bp-mat p${D}${m.source===D?" source":""}`,"data-p":D,style:{gridRow:Q,gridColumn:de(D)},children:[D===m.active&&m.phase==="take"&&m.taken[D]>0&&T.jsxs("span",{className:"bp-counter",children:["−",m.taken[D]]}),T.jsx("span",{className:"head",children:i.place(D)}),T.jsx("div",{className:`bp-pile ${j}`,children:m.items[D].map(ge=>{const R=m.numbered&&D===m.active&&!ge.gone;return T.jsx("button",{className:`bp-it ${K}${ge.gone?" gone":""}${ge.fresh?" fresh":""}`,"data-id":ge.id,"data-k":ge.k??"","aria-label":i.place(D),onClick:()=>W(_C(m,D,ge.id)),children:R?T.jsx("span",{className:"num",children:++ye}):se},ge.id)})})]},`m${D}`)})]})}),T.jsx("div",{children:m.phase==="done"?T.jsxs("div",{className:"bp-next",children:[T.jsxs("span",{className:"bp-result",children:[m.a," − ",m.b," = ",m.a-m.b]}),T.jsxs("button",{className:"mb-btn",onClick:H,children:[i.next," →"]})]}):m.phase==="find"?T.jsx("div",{className:"bp-next",children:m.picked!==null&&T.jsx("button",{className:"mb-btn secondary",onClick:()=>W(MC(m)),children:i.fix})}):T.jsx("div",{className:`bp-pad${m.phase!=="answer"?" off":""}`,children:[1,2,3,4,5,6,7,8,9,0].map(D=>T.jsx("button",{className:`bp-key${m.hintKey===D?" hinted":""}`,onClick:()=>W(Fg(m,D)),children:D},D))})})]})]}),h&&T.jsx("div",{className:"bp-overlay",children:T.jsxs("div",{className:"bp-done",role:"dialog","aria-modal":"true",children:[T.jsx("h2",{children:i.roundTitle}),T.jsx("div",{className:"bp-done-stars",children:Array.from({length:Math.min(u,8)},(D,j)=>T.jsx("span",{style:{animationDelay:`${j*.12}s`},children:T.jsx(ii,{size:40})},j))}),T.jsx("p",{children:i.roundStars(u)}),h.unlocked&&T.jsx("div",{className:"unlock",children:i.unlockedStep(h.unlocked)}),T.jsxs("div",{className:"row",children:[T.jsx("button",{className:"mb-btn quiet",onClick:re,children:i.again}),T.jsx("button",{className:"mb-btn",onClick:t,children:i.room})]})]})})]})}const Ft=t=>`<b>${t}</b>`;function Hg(t){const e=t==="en",n=e?["Dots","Split","Memory"]:["Puntos","Partir","Memoria"];return{back:e?"My room":"Mi cuarto",next:e?"Next":"Siguiente",again:e?"Play again":"Otra vez",room:e?"My room":"Mi cuarto",pickTable:e?"Pick a table":"Elegir tabla",pickTitle:e?"Pick a table":"Elige una tabla",pickSub:e?"Each table has three steps: Dots, Split, Memory.":"Cada tabla tiene tres pasos: Puntos, Partir, Memoria.",mix:e?"Mix":"Mezcla",mixLocked:e?"Learn a table to unlock Mix":"Aprende una tabla para abrir la Mezcla",peek:e?"Show me":"Muéstrame",yes:e?"Right":"Sí",no:e?"Not right":"No",del:e?"Delete":"Borrar",check:e?"Check":"Revisar",roundTitle:e?"Round complete!":"¡Ronda completa!",roundStars:i=>e?`You earned ${i} ${i===1?"star":"stars"}`:`Ganaste ${i} ${i===1?"estrella":"estrellas"}`,stepUnlocked:(i,r)=>e?`Table of ${i}: ${n[r]} unlocked!`:`Tabla del ${i}: ¡${n[r]} desbloqueado!`,learned:i=>e?`You learned the ${i}s!`:`¡Aprendiste la tabla del ${i}!`,keepGoing:i=>e?`Get ${i} right on the first try to unlock the next step.`:`Acierta ${i} a la primera para abrir el siguiente paso.`,tag:(i,r)=>i==="buddy"?e?`${r.name}'s turn`:`Turno de ${r.name}`:n[["array","split","recall"].indexOf(i)],tableTag:i=>i==="mix"?e?"Mix":"Mezcla":`× ${i}`,msg:(i,r)=>{const s=r.kind==="girl"?"she":"he";switch(i.k){case"arrayAsk":return e?`${Ft(i.m)} rows of ${Ft(i.t)}. Tap the dots to count by ${i.t}s, or type the answer.`:`${Ft(i.m)} filas de ${Ft(i.t)}. Toca los puntos para contar de ${i.t} en ${i.t}, o escribe la respuesta.`;case"counting":return e?`Keep going… ${Ft(i.n)}`:`Sigue… ${Ft(i.n)}`;case"counted":return e?`So ${Ft(`${i.t} × ${i.m}`)} is…`:`Entonces ${Ft(`${i.t} × ${i.m}`)} es…`;case"splitAsk":return e?`Split it! First the top ${Ft(i.a)} rows.`:`¡Pártelo! Primero las ${Ft(i.a)} filas de arriba.`;case"splitNine":return e?"Ten rows is easy. Then take one row away.":"Diez filas es fácil. Luego quita una fila.";case"splitB":return e?`Now the other ${Ft(i.b)} ${i.b===1?"row":"rows"}.`:i.b===1?"Ahora la otra fila.":`Ahora las otras ${Ft(i.b)} filas.`;case"splitSum":return e?"Put them together.":"Júntalos.";case"splitMinus":return e?`Take away the crossed-out row of ${Ft(i.t)}.`:`Quita la fila tachada de ${Ft(i.t)}.`;case"recallAsk":return e?"Do you remember?":"¿Te acuerdas?";case"tryAgain":return e?"Almost! Try again.":"¡Casi! Intenta otra vez.";case"countRows":return e?"Count the dots row by row.":"Cuenta los puntos fila por fila.";case"buddyAsk":return e?`${r.name} says ${Ft(`${i.t} × ${i.m} = ${i.w}`)}. Is ${s} right?`:`${r.name} dice ${Ft(`${i.t} × ${i.m} = ${i.w}`)}. ¿Tiene razón?`;case"buddyNo":return e?`Good catch! So what is ${Ft(`${i.t} × ${i.m}`)}?`:`¡Bien visto! Entonces, ¿cuánto es ${Ft(`${i.t} × ${i.m}`)}?`;case"buddyYesWrong":return e?"Look again at the dots.":"Mira otra vez los puntos.";case"buddyThanks":return e?`${r.name} says thanks!`:`¡${r.name} te da las gracias!`;case"done":return e?"You did it!":"¡Lo lograste!"}}}}const IC={en:Hg("en"),es:Hg("es")},co=t=>({...t,parts:t.parts.slice(),vals:t.vals.slice()});function UC(t){return t===9?{kind:"minus",a:10,b:1}:t===4?{kind:"plus",a:2,b:2}:t===8?{kind:"plus",a:5,b:3}:t>=11?{kind:"plus",a:10,b:t-10}:t>=6?{kind:"plus",a:5,b:t-5}:{kind:"plus",a:Math.ceil(t/2),b:Math.floor(t/2)}}function kC(t){var e;return t.mode==="split"&&((e=t.plan)==null?void 0:e.kind)==="minus"?10:t.m}function Vg(t,e,n,i=0){const r={mode:t,t:e,m:n,ans:e*n,phase:t==="buddy"?"judge":"answer",lit:0,typed:"",wrong:0,slips:0,peek:!1,peekReady:!1,plan:null,parts:[],part:0,vals:[],claim:i,msg:{k:"recallAsk"}};if(t==="split"){const s=UC(n);r.plan=s,r.parts=s.kind==="minus"?[{x:e,op:"×",y:10,v:e*10,cls:"a"},{x:e*10,op:"−",y:e,v:e*n,cls:"b"}]:[{x:e,op:"×",y:s.a,v:e*s.a,cls:"a"},{x:e,op:"×",y:s.b,v:e*s.b,cls:"b"},{x:e*s.a,op:"+",y:e*s.b,v:e*n,cls:""}]}return r.msg=t==="array"?{k:"arrayAsk",t:e,m:n}:t==="split"?r.plan.kind==="minus"?{k:"splitNine"}:{k:"splitAsk",a:r.plan.a}:t==="recall"?{k:"recallAsk"}:{k:"buddyAsk",t:e,m:n,w:i},r}function FC(t){const e=t.mode==="array"||(t.mode==="recall"||t.mode==="buddy")&&t.peek;if(t.phase==="done"||!e||t.lit>=t.m)return{s:t,fx:[]};const n=co(t);n.lit++;const i=[{t:"sfx",name:"count-tick",semitones:[0,2,4,5,7,9,11,12,14,16,17,19][n.lit-1]??19}];return n.lit<n.m?n.msg={k:"counting",n:n.lit*n.t}:(n.msg={k:"counted",t:n.t,m:n.m},i.push({t:"buddy",mood:"curious",emote:"!"})),{s:n,fx:i}}function OC(t){if(t.peek||t.phase==="done")return{s:t,fx:[]};const e=co(t);return e.peek=!0,e.peekReady=!1,e.slips++,e.msg={k:"arrayAsk",t:e.t,m:e.m},{s:e,fx:[{t:"sfx",name:"hint-start"},{t:"buddy",mood:"curious",emote:"!"},{t:"voice",name:"curious"}]}}function zC(t){return t.peek||t.peekReady||t.phase==="done"?{s:t,fx:[]}:{s:{...co(t),peekReady:!0},fx:[]}}function ps(t,e){if(t.phase!=="answer")return{s:t,fx:[]};if(e==="go")return BC(t);const n=co(t);return e==="del"?n.typed?(n.typed=n.typed.slice(0,-1),{s:n,fx:[{t:"sfx",name:"keypad-delete"}]}):{s:t,fx:[]}:!/^[0-9]$/.test(e)||n.typed.length>=3?{s:t,fx:[]}:(n.typed=n.typed==="0"?e:n.typed+e,{s:n,fx:[{t:"sfx",name:"keypad-tap"}]})}function BC(t){if(!t.typed)return{s:t,fx:[]};const e=co(t),n=Number(e.typed),i=e.mode==="split"?e.parts[e.part].v:e.ans;if(e.typed="",n===i){if(e.mode==="split"&&(e.vals[e.part]=n,e.part<e.parts.length-1)){e.part++,e.msg=e.plan.kind==="minus"?{k:"splitMinus",t:e.t}:e.part===1?{k:"splitB",b:e.plan.b}:{k:"splitSum"};const s=[{t:"sfx",name:"answer-correct"},{t:"buddy",mood:"happy"}];return e.part===1&&s.push({t:"sfx",name:"split-array"}),{s:e,fx:s}}return HC(e)}e.wrong++,e.slips++;const r=[{t:"shake"},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"dots"},{t:"voice",name:"hmm"}];return e.mode==="array"?e.msg=e.wrong>=2?{k:"countRows"}:{k:"tryAgain"}:(e.msg={k:"tryAgain"},(e.mode==="recall"||e.mode==="buddy")&&!e.peek&&(e.peekReady=!0)),{s:e,fx:r}}function HC(t){t.phase="done";const e=t.mode==="buddy";return t.msg=e?{k:"buddyThanks"}:{k:"done"},{s:t,fx:[{t:"sfx",name:t.slips===0?"answer-correct":"answer-correct-retry"},{t:"buddy",mood:e?"thanks":"happy",emote:e?"heart":"star"},{t:"voice",name:e?"thanks":"happy"},{t:"sfx",name:"star-earn"},{t:"solved",firstTry:t.slips===0}]}}function Gg(t,e){if(t.phase!=="judge")return{s:t,fx:[]};const n=co(t);return e?(n.peek=!0,n.slips++,n.msg={k:"buddyYesWrong"},{s:n,fx:[{t:"shake"},{t:"sfx",name:"answer-wrong"},{t:"buddy",mood:"think",emote:"?"}]}):(n.phase="answer",n.msg={k:"buddyNo",t:n.t,m:n.m},{s:n,fx:[{t:"sfx",name:"answer-correct"},{t:"buddy",mood:"oops",emote:"drop"},{t:"voice",name:"oops"}]})}const Wg=8,jg=6,VC=["array","split","recall"];function sx(t){const e=t.slice();for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function ox(t,e){const n=e<=2||Math.random()<.5;return t*(n?e+1:e-1)}function GC(t,e){const n=VC[Math.min(2,Math.max(0,e))];return sx([3,4,5,6,7,8,9,10]).map((r,s)=>n==="recall"&&s===3?{mode:"buddy",t,m:r,claim:ox(t,r)}:{mode:n,t,m:r})}function WC(t){const e=[];for(const r of t)for(let s=2;s<=10;s++)e.push({mode:"recall",t:r,m:s});const n=sx(e).slice(0,Wg);for(;n.length<Wg;)n.push({...e[Math.floor(Math.random()*e.length)]});const i=n[3];return n[3]={mode:"buddy",t:i.t,m:i.m,claim:ox(i.t,i.m)},n}const $g=[2,3,4,5,6,7,8,9,10,11,12],jC=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),$C={"?":T.jsx("span",{style:{color:"var(--cobalt)"},children:"?"}),"!":T.jsx("span",{style:{color:"var(--tomato)"},children:"!"}),dots:T.jsx("span",{style:{color:"var(--ink-soft)",letterSpacing:2,fontSize:26},children:"•••"}),star:T.jsx(ii,{size:30}),heart:T.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24","aria-hidden":"true",children:T.jsx("path",{d:"M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z",fill:"#F64034"})}),drop:T.jsx("svg",{width:"26",height:"30",viewBox:"0 0 20 24","aria-hidden":"true",children:T.jsx("path",{d:"M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z",fill:"#70BCD6"})})},XC=5e3;function qC({onExit:t,onSolved:e}){const n=io(),i=IC[n.lang],r=fe.useMemo(()=>({name:jC(n.name||"Buddy"),kind:n.kind}),[n.name,n.kind]),s=n.tables??{},o=$g.filter(Q=>(s[Q]??0)>=3),[a,l]=fe.useState(null),[c,u]=fe.useState([]),[p,h]=fe.useState(0),[d,m]=fe.useState(null),[y,g]=fe.useState(0),[f,_]=fe.useState(0),[v,S]=fe.useState(null),P=fe.useRef(null),b=fe.useRef(null),w=fe.useRef(null),[L,q]=fe.useState(null),x=fe.useRef(0);fe.useEffect(()=>{if(!P.current)return;let Q=null;try{Q=new tx(P.current,n.kind,1)}catch{Q=null}b.current=Q;let I=0;const oe=()=>{if(Q&&w.current){const ae=Q.headPos();w.current.style.left=`${ae.x}px`,w.current.style.top=`${ae.y}px`}I=requestAnimationFrame(oe)};return I=requestAnimationFrame(oe),Br(`buddy${n.kind}-hello`),()=>{cancelAnimationFrame(I),Q==null||Q.dispose(),b.current=null}},[]),fe.useEffect(()=>{var Q;return(Q=b.current)==null?void 0:Q.setKind(n.kind)},[n.kind]),fe.useEffect(()=>()=>clearTimeout(x.current),[]);const E=fe.useCallback(Q=>{q(Q),clearTimeout(x.current),x.current=window.setTimeout(()=>q(null),1600)},[]),V=fe.useRef(null),[k,W]=fe.useState({w:600,h:400});fe.useLayoutEffect(()=>{const Q=V.current;if(!Q)return;const I=new ResizeObserver(()=>W({w:Q.clientWidth,h:Q.clientHeight}));return I.observe(Q),()=>I.disconnect()},[]);const ee=fe.useRef(null),H=fe.useRef(null),[re,N]=fe.useState(0),te=fe.useCallback(()=>{var C,D;const Q=(C=H.current)==null?void 0:C.getBoundingClientRect(),I=(D=ee.current)==null?void 0:D.getBoundingClientRect();if(!Q||!I){Bd(1);return}const oe=document.createElement("div");oe.className="bp-flystar",oe.innerHTML='<svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#FBC426" stroke="#D99A0F" stroke-width="1.6" stroke-linejoin="round"/></svg>';const ae=Q.left+Q.width/2-22,X=Q.top+Q.height/2-22;oe.style.left=`${ae}px`,oe.style.top=`${X}px`,document.body.appendChild(oe),requestAnimationFrame(()=>requestAnimationFrame(()=>{oe.style.transform=`translate(${I.left+12-ae}px, ${I.top+2-X}px) scale(.6)`,oe.style.opacity="0"})),window.setTimeout(()=>{oe.remove(),Bd(1),N(j=>j+1)},820)},[]),Z=fe.useCallback(Q=>{var I,oe;for(const ae of Q.fx)switch(ae.t){case"sfx":Pt(ae.name,ae.semitones!==void 0?{semitones:ae.semitones,variance:0}:void 0);break;case"voice":Br(`buddy${n.kind}-${ae.name}`);break;case"buddy":(I=b.current)==null||I.react(ae.mood),ae.emote&&E(ae.emote);break;case"shake":{const X=((oe=H.current)==null?void 0:oe.querySelector(".tp-slot.active, .tp-verdict"))??null;X&&(X.classList.remove("bp-shake"),X.offsetWidth,X.classList.add("bp-shake"));break}case"solved":_(X=>X+1),ae.firstTry&&g(X=>X+1),e==null||e(ae.firstTry),te();break}m(Q.s)},[n.kind,E,te,e]);fe.useEffect(()=>{if(!d||d.mode!=="recall"||d.phase!=="answer"||d.peek||d.peekReady)return;const Q=window.setTimeout(()=>m(I=>I&&zC(I).s),XC);return()=>clearTimeout(Q)},[d]);const de=fe.useCallback(Q=>{var oe;const I=Q==="mix"?WC(o):GC(Q,Math.min(2,s[Q]??0));l(Q),u(I),h(0),g(0),_(0),S(null),m(Vg(I[0].mode,I[0].t,I[0].m,I[0].claim)),(oe=b.current)==null||oe.react("idle"),Pt("sheet-close")},[o,s]),Le=fe.useCallback(()=>{var I,oe;if(!d)return;if(p+1<c.length){const ae=c[p+1];h(p+1),m(Vg(ae.mode,ae.t,ae.m,ae.claim)),(I=b.current)==null||I.react("idle");return}let Q=null;if(typeof a=="number"){const ae=Math.min(2,s[a]??0),X=s[a]??0;X<3&&(y>=jg?(qn(C=>({...C,tables:{...C.tables??{},[a]:Math.max(X,ae+1)}})),Q=ae+1>=3?i.learned(a):i.stepUnlocked(a,ae+1)):Q=i.keepGoing(jg))}S({line:Q}),Pt("round-complete"),Br(`buddy${n.kind}-cheer`),(oe=b.current)==null||oe.react("happy"),E("star")},[d,p,c,a,s,y,i,n.kind,E]);fe.useEffect(()=>{const Q=I=>{!d||v||a===null||(/^[0-9]$/.test(I.key)?Z(ps(d,I.key)):I.key==="Backspace"?Z(ps(d,"del")):I.key==="Enter"&&(d.phase==="done"?Le():Z(ps(d,"go"))))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[d,Z,Le,v,a]);const Be=k.h>k.w*.9;function Y(){var C;if(!d)return null;const Q=kC(d),I=Be?k.w-90:k.w*.55,oe=Be?k.h*.58:k.h-30,ae=Math.max(10,Math.min(34,I/(d.t*1.38),oe/(Q*1.38))),X=[];for(let D=0;D<Q;D++){let j="tp-row",K=null;d.mode==="split"&&d.plan?d.plan.kind==="minus"?j+=D===9&&d.part>=1?" minus":" pa":(j+=D<d.plan.a?" pa":" pb",d.phase!=="done"&&(d.part===0&&D>=d.plan.a||d.part===1&&D<d.plan.a)&&(j+=" dim")):D<d.lit&&(j+=" lit",K=T.jsx("span",{className:"lab",children:(D+1)*d.t})),X.push(T.jsxs("div",{className:j,children:[Array.from({length:d.t},(se,ye)=>T.jsx("i",{},ye)),K]},D)),d.mode==="split"&&((C=d.plan)==null?void 0:C.kind)==="plus"&&D===d.plan.a-1&&X.push(T.jsx("div",{className:"tp-split"},"split"))}return T.jsx("div",{className:"tp-arr",style:{"--d":`${ae}px`,"--gap":`${Math.round(ae*.32)}px`},onClick:()=>Z(FC(d)),role:"img","aria-label":`${Q} × ${d.t}`,children:X})}function ue(Q,I){return I!==void 0?T.jsx("span",{className:"tp-slot ok",children:I}):T.jsx("span",{className:`tp-slot${Q?" active":""}`,children:Q&&d?d.typed:""})}let xe=null,pe=null;if(d){const Q=d.phase==="done";d.mode==="split"?(xe=T.jsx("div",{className:"tp-eqs many",children:d.parts.map((I,oe)=>{var X;const ae=!Q&&oe===d.part?" on":!Q&&oe>d.part?" later":"";return T.jsxs("div",{className:`tp-eq${ae}`,children:[T.jsx("span",{className:oe<2&&((X=d.plan)==null?void 0:X.kind)==="plus"?I.cls:"",children:I.x}),T.jsx("span",{children:I.op}),T.jsx("span",{className:I.cls,children:I.y}),T.jsx("span",{children:"="}),ue(!Q&&oe===d.part,d.vals[oe])]},oe)})}),pe=Y()):d.mode==="buddy"&&d.phase==="judge"?(xe=T.jsxs("div",{className:"tp-eq",children:[T.jsx("span",{children:d.t}),T.jsx("span",{children:"×"}),T.jsx("span",{children:d.m}),T.jsx("span",{children:"="}),T.jsx("span",{className:"tp-slot buddy",children:d.claim})]}),pe=d.peek?Y():null):(xe=T.jsxs("div",{className:"tp-eq",children:[T.jsx("span",{children:d.t}),T.jsx("span",{children:"×"}),T.jsx("span",{children:d.m}),T.jsx("span",{children:"="}),ue(!Q,Q?d.ans:void 0)]}),d.mode==="array"||d.peek?pe=Y():d.peekReady&&!Q&&(pe=T.jsxs("button",{className:"tp-peek",onClick:()=>Z(OC(d)),children:[T.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24","aria-hidden":"true",children:[T.jsx("path",{d:"M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7z",fill:"none",stroke:"currentColor",strokeWidth:"2.4"}),T.jsx("circle",{cx:"12",cy:"12",r:"3.2",fill:"currentColor"})]}),i.peek]})))}return T.jsxs("div",{className:"mb bp",children:[T.jsxs("header",{className:"bp-hud",children:[T.jsxs("button",{className:"mb-chip",onClick:t,"aria-label":i.back,children:[T.jsx("img",{src:"/mark-face.svg",alt:"",width:34,height:38,style:{margin:"-4px 0 -2px"}}),T.jsx("span",{className:"label",children:i.back})]}),T.jsx("div",{className:"bp-dots","aria-label":c.length?`${p+1} / ${c.length}`:void 0,children:c.map((Q,I)=>T.jsx("span",{className:`bp-dot ${I<p||I===p&&(d==null?void 0:d.phase)==="done"?"done":I===p?"now":""}`},I))}),T.jsxs("span",{ref:ee,className:`mb-chip${re?" bump":""}`,children:[T.jsx(ii,{}),n.stars]},re)]}),T.jsxs("main",{className:"bp-stage",children:[T.jsxs("div",{className:"bp-buddy",children:[T.jsx("canvas",{ref:P,"aria-hidden":"true"}),T.jsx("div",{ref:w,className:`bp-emote${L?" on":""}`,children:L&&$C[L]})]}),T.jsxs("section",{className:"bp-card",ref:H,children:[T.jsx("div",{className:"bp-task","aria-live":"polite",children:d&&a!==null&&T.jsxs(T.Fragment,{children:[T.jsxs("span",{className:"tag",children:[i.tableTag(a)," · ",i.tag(d.mode,r)]}),T.jsx("span",{dangerouslySetInnerHTML:{__html:i.msg(d.msg,r)}})]})},d?JSON.stringify(d.msg)+n.lang:"none"),T.jsxs("div",{className:"tp-work",ref:V,children:[xe,pe]}),T.jsx("div",{children:(d==null?void 0:d.phase)==="done"?T.jsxs("div",{className:"bp-next",children:[T.jsxs("span",{className:"bp-result",children:[d.t," × ",d.m," = ",d.ans]}),T.jsxs("button",{className:"mb-btn",onClick:Le,children:[i.next," →"]})]}):(d==null?void 0:d.mode)==="buddy"&&d.phase==="judge"?T.jsxs("div",{className:"bp-next tp-verdict",children:[T.jsxs("button",{className:"mb-btn tp-yes",onClick:()=>Z(Gg(d,!0)),children:[T.jsx(oc,{}),i.yes]}),T.jsxs("button",{className:"mb-btn tp-no",onClick:()=>Z(Gg(d,!1)),children:["✕ ",i.no]})]}):T.jsxs("div",{className:"tp-pad",children:[["1","2","3","4","5","6","7","8","9","0"].map(Q=>T.jsx("button",{className:"bp-key",onClick:()=>d&&Z(ps(d,Q)),children:Q},Q)),T.jsx("button",{className:"bp-key tp-del","aria-label":i.del,onClick:()=>d&&Z(ps(d,"del")),children:T.jsxs("svg",{width:"28",height:"22",viewBox:"0 0 28 22","aria-hidden":"true",children:[T.jsx("path",{d:"M9 2h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-7-9z",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinejoin:"round"}),T.jsx("path",{d:"M13 7l7 8M20 7l-7 8",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round"})]})}),T.jsx("button",{className:"bp-key tp-go","aria-label":i.check,onClick:()=>d&&Z(ps(d,"go")),children:T.jsx(oc,{size:26})})]})})]})]}),a===null&&T.jsx("div",{className:"bp-overlay",children:T.jsxs("div",{className:"tp-panel",role:"dialog","aria-modal":"true","aria-label":i.pickTitle,children:[T.jsx("h2",{children:i.pickTitle}),T.jsx("p",{className:"sub",children:i.pickSub}),T.jsxs("div",{className:"tp-tables",children:[$g.map(Q=>{const I=Math.min(3,s[Q]??0);return T.jsxs("button",{className:`tp-tile${I>=3?" learned":""}`,onClick:()=>de(Q),"aria-label":`× ${Q}`,children:[I>=3&&T.jsx("span",{className:"star",children:T.jsx(ii,{size:28})}),T.jsx("span",{className:"n",children:Q}),T.jsx("span",{className:"pips",children:[0,1,2].map(oe=>T.jsx("i",{className:oe<I?"done":""},oe))})]},Q)}),T.jsxs("button",{className:`tp-tile mix${o.length?"":" locked"}`,disabled:!o.length,onClick:()=>de("mix"),title:o.length?void 0:i.mixLocked,"aria-label":o.length?i.mix:i.mixLocked,children:[T.jsx("span",{className:"n",children:i.mix}),o.length?T.jsxs("span",{className:"pips",children:[T.jsx("i",{className:"done"}),T.jsx("i",{className:"done"}),T.jsx("i",{className:"done"})]}):T.jsx("span",{className:"lock",children:T.jsx(rp,{})})]})]}),!o.length&&T.jsx("p",{className:"hint",children:i.mixLocked})]})}),v&&T.jsx("div",{className:"bp-overlay",children:T.jsxs("div",{className:"bp-done",role:"dialog","aria-modal":"true",children:[T.jsx("h2",{children:i.roundTitle}),T.jsx("div",{className:"bp-done-stars",children:Array.from({length:Math.min(f,8)},(Q,I)=>T.jsx("span",{style:{animationDelay:`${I*.1}s`},children:T.jsx(ii,{size:36})},I))}),T.jsx("p",{children:i.roundStars(f)}),v.line&&T.jsx("div",{className:"unlock",children:v.line}),T.jsxs("div",{className:"row",children:[T.jsx("button",{className:"mb-btn quiet",onClick:()=>{S(null),l(null),u([]),m(null)},children:i.pickTable}),T.jsx("button",{className:"mb-btn quiet",onClick:()=>a!==null&&de(a),children:i.again}),T.jsx("button",{className:"mb-btn",onClick:t,children:i.room})]})]})})]})}const ax="mathbuddy_stats";function YC(){try{const t=localStorage.getItem(ax);if(t)return JSON.parse(t)}catch{}return{totalProblems:0,correctAnswers:0,currentStreak:0,bestStreak:0}}function KC(t){try{localStorage.setItem(ax,JSON.stringify(t))}catch{}}function Xg(t){const e=YC(),n=t?e.currentStreak+1:0;KC({totalProblems:e.totalProblems+1,correctAnswers:e.correctAnswers+(t?1:0),currentStreak:n,bestStreak:Math.max(e.bestStreak,n)})}function JC(){const[t,e]=fe.useState("room"),n=fe.useCallback(()=>e("room"),[]);return T.jsxs(T.Fragment,{children:[t==="room"&&T.jsx(pC,{onPractice:e}),t==="borrow"&&T.jsx(DC,{onExit:n,onSolved:Xg}),t==="times"&&T.jsx(qC,{onExit:n,onSolved:Xg})]})}o_(document.getElementById("root")).render(T.jsx(fe.StrictMode,{children:T.jsx(JC,{})}));
