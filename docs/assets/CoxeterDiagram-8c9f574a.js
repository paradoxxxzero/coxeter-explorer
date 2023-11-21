(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _s={exports:{}},Ii={},js={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),lf=Symbol.for("react.portal"),uf=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),ff=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),pf=Symbol.for("react.memo"),hf=Symbol.for("react.lazy"),vu=Symbol.iterator;function mf(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var Ms={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},As=Object.assign,Fs={};function xt(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||Ms}xt.prototype.isReactComponent={};xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ds(){}Ds.prototype=xt.prototype;function gl(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||Ms}var yl=gl.prototype=new Ds;yl.constructor=gl;As(yl,xt.prototype);yl.isPureReactComponent=!0;var pu=Array.isArray,Ls=Object.prototype.hasOwnProperty,xl={current:null},Us={key:!0,ref:!0,__self:!0,__source:!0};function $s(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Ls.call(n,r)&&!Us.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:dr,type:e,key:o,ref:l,props:i,_owner:xl.current}}function gf(e,n){return{$$typeof:dr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function yf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hu=/\/+/g;function Gi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?yf(""+e.key):n.toString(36)}function Lr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case dr:case lf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Gi(l,0):r,pu(i)?(t="",e!=null&&(t=e.replace(hu,"$&/")+"/"),Lr(i,n,t,"",function(a){return a})):i!=null&&(El(i)&&(i=gf(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(hu,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",pu(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Gi(o,u);l+=Lr(o,n,t,s,i)}else if(s=mf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Gi(o,u++),l+=Lr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function xr(e,n,t){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function xf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Ur={transition:null},Ef={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:xl};_.Children={map:xr,forEach:function(e,n,t){xr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return xr(e,function(){n++}),n},toArray:function(e){return xr(e,function(n){return n})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=xt;_.Fragment=uf;_.Profiler=af;_.PureComponent=gl;_.StrictMode=sf;_.Suspense=vf;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ef;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=As({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=xl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Ls.call(n,s)&&!Us.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:dr,type:e.type,key:i,ref:o,props:r,_owner:l}};_.createContext=function(e){return e={$$typeof:ff,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cf,_context:e},e.Consumer=e};_.createElement=$s;_.createFactory=function(e){var n=$s.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:df,render:e}};_.isValidElement=El;_.lazy=function(e){return{$$typeof:hf,_payload:{_status:-1,_result:e},_init:xf}};_.memo=function(e,n){return{$$typeof:pf,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=n}};_.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_.useCallback=function(e,n){return ae.current.useCallback(e,n)};_.useContext=function(e){return ae.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};_.useEffect=function(e,n){return ae.current.useEffect(e,n)};_.useId=function(){return ae.current.useId()};_.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return ae.current.useMemo(e,n)};_.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};_.useRef=function(e){return ae.current.useRef(e)};_.useState=function(e){return ae.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return ae.current.useTransition()};_.version="18.2.0";js.exports=_;var X=js.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=X,Sf=Symbol.for("react.element"),Nf=Symbol.for("react.fragment"),kf=Object.prototype.hasOwnProperty,If=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tf={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)kf.call(n,r)&&!Tf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Sf,type:e,key:o,ref:l,props:i,_owner:If.current}}Ii.Fragment=Nf;Ii.jsx=Bs;Ii.jsxs=Bs;_s.exports=Ii;var T=_s.exports,mu={},Hs={exports:{}},Ee={},Vs={exports:{}},Ws={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var z=C.length;C.push(P);e:for(;0<z;){var G=z-1>>>1,q=C[G];if(0<i(q,P))C[G]=P,C[z]=q,z=G;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],z=C.pop();if(z!==P){C[0]=z;e:for(var G=0,q=C.length,gr=q>>>1;G<gr;){var Rn=2*(G+1)-1,Wi=C[Rn],Cn=Rn+1,yr=C[Cn];if(0>i(Wi,z))Cn<q&&0>i(yr,Wi)?(C[G]=yr,C[Cn]=z,G=Cn):(C[G]=Wi,C[Rn]=z,G=Rn);else if(Cn<q&&0>i(yr,z))C[G]=yr,C[Cn]=z,G=Cn;else break e}}return P}function i(C,P){var z=C.sortIndex-P.sortIndex;return z!==0?z:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],a=[],d=1,c=null,f=3,p=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var P=t(a);P!==null;){if(P.callback===null)r(a);else if(P.startTime<=C)r(a),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(a)}}function x(C){if(y=!1,g(C),!m)if(t(s)!==null)m=!0,Hi(w);else{var P=t(a);P!==null&&Vi(x,P.startTime-C)}}function w(C,P){m=!1,y&&(y=!1,h(k),k=-1),p=!0;var z=f;try{for(g(P),c=t(s);c!==null&&(!(c.expirationTime>P)||C&&!Ce());){var G=c.callback;if(typeof G=="function"){c.callback=null,f=c.priorityLevel;var q=G(c.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?c.callback=q:c===t(s)&&r(s),g(P)}else r(s);c=t(s)}if(c!==null)var gr=!0;else{var Rn=t(a);Rn!==null&&Vi(x,Rn.startTime-P),gr=!1}return gr}finally{c=null,f=z,p=!1}}var I=!1,N=null,k=-1,A=5,O=-1;function Ce(){return!(e.unstable_now()-O<A)}function St(){if(N!==null){var C=e.unstable_now();O=C;var P=!0;try{P=N(!0,C)}finally{P?Nt():(I=!1,N=null)}}else I=!1}var Nt;if(typeof v=="function")Nt=function(){v(St)};else if(typeof MessageChannel<"u"){var du=new MessageChannel,tf=du.port2;du.port1.onmessage=St,Nt=function(){tf.postMessage(null)}}else Nt=function(){E(St,0)};function Hi(C){N=C,I||(I=!0,Nt())}function Vi(C,P){k=E(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,Hi(w))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var z=f;f=P;try{return C()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=f;f=C;try{return P()}finally{f=z}},e.unstable_scheduleCallback=function(C,P,z){var G=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?G+z:G):z=G,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,C={id:d++,callback:P,priorityLevel:C,startTime:z,expirationTime:q,sortIndex:-1},z>G?(C.sortIndex=z,n(a,C),t(s)===null&&C===t(a)&&(y?(h(k),k=-1):y=!0,Vi(x,z-G))):(C.sortIndex=q,n(s,C),m||p||(m=!0,Hi(w))),C},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(C){var P=f;return function(){var z=f;f=P;try{return C.apply(this,arguments)}finally{f=z}}}})(Ws);Vs.exports=Ws;var Rf=Vs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=X,xe=Rf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ks=new Set,Xt={};function Gn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(Xt[e]=n,e=0;e<n.length;e++)Ks.add(n[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=Object.prototype.hasOwnProperty,Cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},yu={};function Pf(e){return So.call(yu,e)?!0:So.call(gu,e)?!1:Cf.test(e)?yu[e]=!0:(gu[e]=!0,!1)}function zf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,n,t,r){if(n===null||typeof n>"u"||zf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function Sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wl,Sl);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wl,Sl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wl,Sl);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nl(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Of(n,t,i,r)&&(t=null),r||i===null?Pf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var tn=Gs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),No=Symbol.for("react.profiler"),Qs=Symbol.for("react.provider"),Js=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),ko=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Xs=Symbol.for("react.offscreen"),xu=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=xu&&e[xu]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ki;function Mt(e){if(Ki===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ki=n&&n[1]||""}return`
`+Ki+e}var Qi=!1;function Ji(e,n){if(!e||Qi)return"";Qi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Qi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Mt(e):""}function _f(e){switch(e.tag){case 5:return Mt(e.type);case 16:return Mt("Lazy");case 13:return Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function To(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Jn:return"Portal";case No:return"Profiler";case kl:return"StrictMode";case ko:return"Suspense";case Io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Js:return(e.displayName||"Context")+".Consumer";case Qs:return(e._context.displayName||"Context")+".Provider";case Il:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return n=e.displayName||null,n!==null?n:To(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return To(e(n))}catch{}}return null}function jf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return To(n);case 8:return n===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ys(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mf(e){var n=Ys(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wr(e){e._valueTracker||(e._valueTracker=Mf(e))}function qs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ys(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ro(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Eu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Sn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Zs(e,n){n=n.checked,n!=null&&Nl(e,"checked",n,!1)}function Co(e,n){Zs(e,n);var t=Sn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Po(e,n.type,t):n.hasOwnProperty("defaultValue")&&Po(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function wu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Po(e,n,t){(n!=="number"||ei(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var At=Array.isArray;function lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function zo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(At(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Sn(t)}}function bs(e,n){var t=Sn(n.value),r=Sn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ea(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ea(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,na=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Yt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Af=["Webkit","ms","Moz","O"];Object.keys($t).forEach(function(e){Af.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$t[n]=$t[e]})});function ta(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||$t.hasOwnProperty(e)&&$t[e]?(""+n).trim():n+"px"}function ra(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ta(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Ff=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(e,n){if(n){if(Ff[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function jo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mo=null;function Rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ao=null,ut=null,st=null;function ku(e){if(e=hr(e)){if(typeof Ao!="function")throw Error(S(280));var n=e.stateNode;n&&(n=zi(n),Ao(e.stateNode,e.type,n))}}function ia(e){ut?st?st.push(e):st=[e]:ut=e}function oa(){if(ut){var e=ut,n=st;if(st=ut=null,ku(e),n)for(e=0;e<n.length;e++)ku(n[e])}}function la(e,n){return e(n)}function ua(){}var Xi=!1;function sa(e,n,t){if(Xi)return e(n,t);Xi=!0;try{return la(e,n,t)}finally{Xi=!1,(ut!==null||st!==null)&&(ua(),oa())}}function qt(e,n){var t=e.stateNode;if(t===null)return null;var r=zi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Fo=!1;if(Ze)try{var It={};Object.defineProperty(It,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Fo=!1}function Df(e,n,t,r,i,o,l,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(d){this.onError(d)}}var Bt=!1,ni=null,ti=!1,Do=null,Lf={onError:function(e){Bt=!0,ni=e}};function Uf(e,n,t,r,i,o,l,u,s){Bt=!1,ni=null,Df.apply(Lf,arguments)}function $f(e,n,t,r,i,o,l,u,s){if(Uf.apply(this,arguments),Bt){if(Bt){var a=ni;Bt=!1,ni=null}else throw Error(S(198));ti||(ti=!0,Do=a)}}function Kn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function aa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Iu(e){if(Kn(e)!==e)throw Error(S(188))}function Bf(e){var n=e.alternate;if(!n){if(n=Kn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Iu(i),e;if(o===r)return Iu(i),n;o=o.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function ca(e){return e=Bf(e),e!==null?fa(e):null}function fa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=fa(e);if(n!==null)return n;e=e.sibling}return null}var da=xe.unstable_scheduleCallback,Tu=xe.unstable_cancelCallback,Hf=xe.unstable_shouldYield,Vf=xe.unstable_requestPaint,K=xe.unstable_now,Wf=xe.unstable_getCurrentPriorityLevel,Cl=xe.unstable_ImmediatePriority,va=xe.unstable_UserBlockingPriority,ri=xe.unstable_NormalPriority,Gf=xe.unstable_LowPriority,pa=xe.unstable_IdlePriority,Ti=null,He=null;function Kf(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Ti,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:Xf,Qf=Math.log,Jf=Math.LN2;function Xf(e){return e>>>=0,e===0?32:31-(Qf(e)/Jf|0)|0}var Nr=64,kr=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ii(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=Ft(u):(o&=l,o!==0&&(r=Ft(o)))}else l=t&~i,l!==0?r=Ft(l):o!==0&&(r=Ft(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-je(n),i=1<<t,r|=e[t],n&=~i;return r}function Yf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-je(o),u=1<<l,s=i[l];s===-1?(!(u&t)||u&r)&&(i[l]=Yf(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function Lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ha(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Yi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function vr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-je(n),e[n]=t}function Zf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-je(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Pl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-je(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function ma(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ga,zl,ya,xa,Ea,Uo=!1,Ir=[],pn=null,hn=null,mn=null,Zt=new Map,bt=new Map,cn=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Zt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bt.delete(n.pointerId)}}function Tt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=hr(n),n!==null&&zl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ed(e,n,t,r,i){switch(n){case"focusin":return pn=Tt(pn,e,n,t,r,i),!0;case"dragenter":return hn=Tt(hn,e,n,t,r,i),!0;case"mouseover":return mn=Tt(mn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Zt.set(o,Tt(Zt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bt.set(o,Tt(bt.get(o)||null,e,n,t,r,i)),!0}return!1}function wa(e){var n=jn(e.target);if(n!==null){var t=Kn(n);if(t!==null){if(n=t.tag,n===13){if(n=aa(t),n!==null){e.blockedOn=n,Ea(e.priority,function(){ya(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$o(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Mo=r,t.target.dispatchEvent(r),Mo=null}else return n=hr(t),n!==null&&zl(n),e.blockedOn=t,!1;n.shift()}return!0}function Cu(e,n,t){$r(e)&&t.delete(n)}function nd(){Uo=!1,pn!==null&&$r(pn)&&(pn=null),hn!==null&&$r(hn)&&(hn=null),mn!==null&&$r(mn)&&(mn=null),Zt.forEach(Cu),bt.forEach(Cu)}function Rt(e,n){e.blockedOn===n&&(e.blockedOn=null,Uo||(Uo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,nd)))}function er(e){function n(i){return Rt(i,e)}if(0<Ir.length){Rt(Ir[0],e);for(var t=1;t<Ir.length;t++){var r=Ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Rt(pn,e),hn!==null&&Rt(hn,e),mn!==null&&Rt(mn,e),Zt.forEach(n),bt.forEach(n),t=0;t<cn.length;t++)r=cn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(t=cn[0],t.blockedOn===null);)wa(t),t.blockedOn===null&&cn.shift()}var at=tn.ReactCurrentBatchConfig,oi=!0;function td(e,n,t,r){var i=M,o=at.transition;at.transition=null;try{M=1,Ol(e,n,t,r)}finally{M=i,at.transition=o}}function rd(e,n,t,r){var i=M,o=at.transition;at.transition=null;try{M=4,Ol(e,n,t,r)}finally{M=i,at.transition=o}}function Ol(e,n,t,r){if(oi){var i=$o(e,n,t,r);if(i===null)lo(e,n,r,li,t),Ru(e,r);else if(ed(i,e,n,t,r))r.stopPropagation();else if(Ru(e,r),n&4&&-1<bf.indexOf(e)){for(;i!==null;){var o=hr(i);if(o!==null&&ga(o),o=$o(e,n,t,r),o===null&&lo(e,n,r,li,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else lo(e,n,r,null,t)}}var li=null;function $o(e,n,t,r){if(li=null,e=Rl(r),e=jn(e),e!==null)if(n=Kn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=aa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return li=e,null}function Sa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wf()){case Cl:return 1;case va:return 4;case ri:case Gf:return 16;case pa:return 536870912;default:return 16}default:return 16}}var dn=null,_l=null,Br=null;function Na(){if(Br)return Br;var e,n=_l,t=n.length,r,i="value"in dn?dn.value:dn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Br=i.slice(e,1<r?1-r:void 0)}function Hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Pu(){return!1}function we(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tr:Pu,this.isPropagationStopped=Pu,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=we(Et),pr=V({},Et,{view:0,detail:0}),id=we(pr),qi,Zi,Ct,Ri=V({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(qi=e.screenX-Ct.screenX,Zi=e.screenY-Ct.screenY):Zi=qi=0,Ct=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),zu=we(Ri),od=V({},Ri,{dataTransfer:0}),ld=we(od),ud=V({},pr,{relatedTarget:0}),bi=we(ud),sd=V({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=we(sd),cd=V({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=we(cd),dd=V({},Et,{data:0}),Ou=we(dd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hd[e])?!!n[e]:!1}function Ml(){return md}var gd=V({},pr,{key:function(e){if(e.key){var n=vd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=we(gd),xd=V({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=we(xd),Ed=V({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),wd=we(Ed),Sd=V({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=we(Sd),kd=V({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=we(kd),Td=[9,13,27,32],Al=Ze&&"CompositionEvent"in window,Ht=null;Ze&&"documentMode"in document&&(Ht=document.documentMode);var Rd=Ze&&"TextEvent"in window&&!Ht,ka=Ze&&(!Al||Ht&&8<Ht&&11>=Ht),ju=String.fromCharCode(32),Mu=!1;function Ia(e,n){switch(e){case"keyup":return Td.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Cd(e,n){switch(e){case"compositionend":return Ta(n);case"keypress":return n.which!==32?null:(Mu=!0,ju);case"textInput":return e=n.data,e===ju&&Mu?null:e;default:return null}}function Pd(e,n){if(Yn)return e==="compositionend"||!Al&&Ia(e,n)?(e=Na(),Br=_l=dn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ka&&n.locale!=="ko"?null:n.data;default:return null}}var zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zd[e.type]:n==="textarea"}function Ra(e,n,t,r){ia(r),n=ui(n,"onChange"),0<n.length&&(t=new jl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vt=null,nr=null;function Od(e){La(e,0)}function Ci(e){var n=bn(e);if(qs(n))return e}function _d(e,n){if(e==="change")return n}var Ca=!1;if(Ze){var eo;if(Ze){var no="oninput"in document;if(!no){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),no=typeof Fu.oninput=="function"}eo=no}else eo=!1;Ca=eo&&(!document.documentMode||9<document.documentMode)}function Du(){Vt&&(Vt.detachEvent("onpropertychange",Pa),nr=Vt=null)}function Pa(e){if(e.propertyName==="value"&&Ci(nr)){var n=[];Ra(n,nr,e,Rl(e)),sa(Od,n)}}function jd(e,n,t){e==="focusin"?(Du(),Vt=n,nr=t,Vt.attachEvent("onpropertychange",Pa)):e==="focusout"&&Du()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(nr)}function Ad(e,n){if(e==="click")return Ci(n)}function Fd(e,n){if(e==="input"||e==="change")return Ci(n)}function Dd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var De=typeof Object.is=="function"?Object.is:Dd;function tr(e,n){if(De(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!So.call(n,i)||!De(e[i],n[i]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,n){var t=Lu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lu(t)}}function za(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?za(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Oa(){for(var e=window,n=ei();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ei(e.document)}return n}function Fl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ld(e){var n=Oa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&za(t.ownerDocument.documentElement,t)){if(r!==null&&Fl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Uu(t,o);var l=Uu(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=Ze&&"documentMode"in document&&11>=document.documentMode,qn=null,Bo=null,Wt=null,Ho=!1;function $u(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ho||qn==null||qn!==ei(r)||(r=qn,"selectionStart"in r&&Fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wt&&tr(Wt,r)||(Wt=r,r=ui(Bo,"onSelect"),0<r.length&&(n=new jl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=qn)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Zn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},to={},_a={};Ze&&(_a=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Pi(e){if(to[e])return to[e];if(!Zn[e])return e;var n=Zn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _a)return to[e]=n[t];return e}var ja=Pi("animationend"),Ma=Pi("animationiteration"),Aa=Pi("animationstart"),Fa=Pi("transitionend"),Da=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,n){Da.set(e,n),Gn(n,[e])}for(var ro=0;ro<Bu.length;ro++){var io=Bu[ro],$d=io.toLowerCase(),Bd=io[0].toUpperCase()+io.slice(1);kn($d,"on"+Bd)}kn(ja,"onAnimationEnd");kn(Ma,"onAnimationIteration");kn(Aa,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Fa,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function Hu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$f(r,n,void 0,e),e.currentTarget=null}function La(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,a),o=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,a=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,a),o=s}}}if(ti)throw e=Do,ti=!1,Do=null,e}function D(e,n){var t=n[Qo];t===void 0&&(t=n[Qo]=new Set);var r=e+"__bubble";t.has(r)||(Ua(n,e,2,!1),t.add(r))}function oo(e,n,t){var r=0;n&&(r|=4),Ua(t,e,r,n)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Cr]){e[Cr]=!0,Ks.forEach(function(t){t!=="selectionchange"&&(Hd.has(t)||oo(t,!1,e),oo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cr]||(n[Cr]=!0,oo("selectionchange",!1,n))}}function Ua(e,n,t,r){switch(Sa(n)){case 1:var i=td;break;case 4:i=rd;break;default:i=Ol}t=i.bind(null,n,t,e),i=void 0,!Fo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function lo(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;u!==null;){if(l=jn(u),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}u=u.parentNode}}r=r.return}sa(function(){var a=o,d=Rl(t),c=[];e:{var f=Da.get(e);if(f!==void 0){var p=jl,m=e;switch(e){case"keypress":if(Hr(t)===0)break e;case"keydown":case"keyup":p=yd;break;case"focusin":m="focus",p=bi;break;case"focusout":m="blur",p=bi;break;case"beforeblur":case"afterblur":p=bi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wd;break;case ja:case Ma:case Aa:p=ad;break;case Fa:p=Nd;break;case"scroll":p=id;break;case"wheel":p=Id;break;case"copy":case"cut":case"paste":p=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_u}var y=(n&4)!==0,E=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=a,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=qt(v,h),x!=null&&y.push(ir(v,x,g)))),E)break;v=v.return}0<y.length&&(f=new p(f,m,null,t,d),c.push({event:f,listeners:y}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&t!==Mo&&(m=t.relatedTarget||t.fromElement)&&(jn(m)||m[be]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=a,m=m?jn(m):null,m!==null&&(E=Kn(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=a),p!==m)){if(y=zu,x="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=_u,x="onPointerLeave",h="onPointerEnter",v="pointer"),E=p==null?f:bn(p),g=m==null?f:bn(m),f=new y(x,v+"leave",p,t,d),f.target=E,f.relatedTarget=g,x=null,jn(d)===a&&(y=new y(h,v+"enter",m,t,d),y.target=g,y.relatedTarget=E,x=y),E=x,p&&m)n:{for(y=p,h=m,v=0,g=y;g;g=Qn(g))v++;for(g=0,x=h;x;x=Qn(x))g++;for(;0<v-g;)y=Qn(y),v--;for(;0<g-v;)h=Qn(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break n;y=Qn(y),h=Qn(h)}y=null}else y=null;p!==null&&Vu(c,f,p,y,!1),m!==null&&E!==null&&Vu(c,E,m,y,!0)}}e:{if(f=a?bn(a):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=_d;else if(Au(f))if(Ca)w=Fd;else{w=Md;var I=jd}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Ad);if(w&&(w=w(e,a))){Ra(c,w,t,d);break e}I&&I(e,f,a),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Po(f,"number",f.value)}switch(I=a?bn(a):window,e){case"focusin":(Au(I)||I.contentEditable==="true")&&(qn=I,Bo=a,Wt=null);break;case"focusout":Wt=Bo=qn=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,$u(c,t,d);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":$u(c,t,d)}var N;if(Al)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Yn?Ia(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(ka&&t.locale!=="ko"&&(Yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Yn&&(N=Na()):(dn=d,_l="value"in dn?dn.value:dn.textContent,Yn=!0)),I=ui(a,k),0<I.length&&(k=new Ou(k,e,null,t,d),c.push({event:k,listeners:I}),N?k.data=N:(N=Ta(t),N!==null&&(k.data=N)))),(N=Rd?Cd(e,t):Pd(e,t))&&(a=ui(a,"onBeforeInput"),0<a.length&&(d=new Ou("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:a}),d.data=N))}La(c,n)})}function ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ui(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qt(e,t),o!=null&&r.unshift(ir(e,o,i)),o=qt(e,n),o!=null&&r.push(ir(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=qt(t,o),s!=null&&l.unshift(ir(t,s,u))):i||(s=qt(t,o),s!=null&&l.push(ir(t,s,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Vd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Wd,"")}function Pr(e,n,t){if(n=Wu(n),Wu(e)!==n&&t)throw Error(S(425))}function si(){}var Vo=null,Wo=null;function Go(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ko=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(Qd)}:Ko;function Qd(e){setTimeout(function(){throw e})}function uo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),er(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);er(n)}function gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wt=Math.random().toString(36).slice(2),$e="__reactFiber$"+wt,or="__reactProps$"+wt,be="__reactContainer$"+wt,Qo="__reactEvents$"+wt,Jd="__reactListeners$"+wt,Xd="__reactHandles$"+wt;function jn(e){var n=e[$e];if(n)return n;for(var t=e.parentNode;t;){if(n=t[be]||t[$e]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ku(e);e!==null;){if(t=e[$e])return t;e=Ku(e)}return n}e=t,t=e.parentNode}return null}function hr(e){return e=e[$e]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function zi(e){return e[or]||null}var Jo=[],et=-1;function In(e){return{current:e}}function L(e){0>et||(e.current=Jo[et],Jo[et]=null,et--)}function F(e,n){et++,Jo[et]=e.current,e.current=n}var Nn={},le=In(Nn),ve=In(!1),Un=Nn;function vt(e,n){var t=e.type.contextTypes;if(!t)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function ai(){L(ve),L(le)}function Qu(e,n,t){if(le.current!==Nn)throw Error(S(168));F(le,n),F(ve,t)}function $a(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,jf(e)||"Unknown",i));return V({},t,r)}function ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Un=le.current,F(le,e),F(ve,ve.current),!0}function Ju(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=$a(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,L(ve),L(le),F(le,e)):L(ve),F(ve,t)}var Qe=null,Oi=!1,so=!1;function Ba(e){Qe===null?Qe=[e]:Qe.push(e)}function Yd(e){Oi=!0,Ba(e)}function Tn(){if(!so&&Qe!==null){so=!0;var e=0,n=M;try{var t=Qe;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Qe=null,Oi=!1}catch(i){throw Qe!==null&&(Qe=Qe.slice(e+1)),da(Cl,Tn),i}finally{M=n,so=!1}}return null}var nt=[],tt=0,fi=null,di=0,Se=[],Ne=0,$n=null,Je=1,Xe="";function Pn(e,n){nt[tt++]=di,nt[tt++]=fi,fi=e,di=n}function Ha(e,n,t){Se[Ne++]=Je,Se[Ne++]=Xe,Se[Ne++]=$n,$n=e;var r=Je;e=Xe;var i=32-je(r)-1;r&=~(1<<i),t+=1;var o=32-je(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-je(n)+i|t<<i|r,Xe=o+e}else Je=1<<o|t<<i|r,Xe=e}function Dl(e){e.return!==null&&(Pn(e,1),Ha(e,1,0))}function Ll(e){for(;e===fi;)fi=nt[--tt],nt[tt]=null,di=nt[--tt],nt[tt]=null;for(;e===$n;)$n=Se[--Ne],Se[Ne]=null,Xe=Se[--Ne],Se[Ne]=null,Je=Se[--Ne],Se[Ne]=null}var ye=null,ge=null,$=!1,_e=null;function Va(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ge=gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:Je,overflow:Xe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ge=null,!0):!1;default:return!1}}function Xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yo(e){if($){var n=ge;if(n){var t=n;if(!Xu(e,n)){if(Xo(e))throw Error(S(418));n=gn(t.nextSibling);var r=ye;n&&Xu(e,n)?Va(r,t):(e.flags=e.flags&-4097|2,$=!1,ye=e)}}else{if(Xo(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,ye=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function zr(e){if(e!==ye)return!1;if(!$)return Yu(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Go(e.type,e.memoizedProps)),n&&(n=ge)){if(Xo(e))throw Wa(),Error(S(418));for(;n;)Va(e,n),n=gn(n.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ye?gn(e.stateNode.nextSibling):null;return!0}function Wa(){for(var e=ge;e;)e=gn(e.nextSibling)}function pt(){ge=ye=null,$=!1}function Ul(e){_e===null?_e=[e]:_e.push(e)}var qd=tn.ReactCurrentBatchConfig;function ze(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var vi=In(null),pi=null,rt=null,$l=null;function Bl(){$l=rt=pi=null}function Hl(e){var n=vi.current;L(vi),e._currentValue=n}function qo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){pi=e,$l=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if($l!==e)if(e={context:e,memoizedValue:n,next:null},rt===null){if(pi===null)throw Error(S(308));rt=e,pi.dependencies={lanes:0,firstContext:e}}else rt=rt.next=e;return n}var Mn=null;function Vl(e){Mn===null?Mn=[e]:Mn.push(e)}function Ga(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Vl(n)):(t.next=i.next,i.next=t),n.interleaved=t,en(e,r)}function en(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var an=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ka(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,en(e,t)}return i=r.interleaved,i===null?(n.next=n,Vl(r)):(n.next=i.next,i.next=n),r.interleaved=n,en(e,t)}function Vr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Pl(e,t)}}function qu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function hi(e,n,t,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,l===null?o=a:l.next=a,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==l&&(u===null?d.firstBaseUpdate=a:u.next=a,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,d=a=s=null,u=o;do{var f=u.lane,p=u.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(f=n,p=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(p,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(p,c,f):m,f==null)break e;c=V({},c,f);break e;case 2:an=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[u]:f.push(u))}else p={eventTime:p,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(a=d=p,s=c):d=d.next=p,l|=f;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;f=u,u=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Hn|=l,e.lanes=l,e.memoizedState=c}}function Zu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Qa=new Gs.Component().refs;function Zo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _i={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),i=En(e),o=qe(r,i);o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(Me(n,e,i,r),Vr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),i=En(e),o=qe(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(Me(n,e,i,r),Vr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=En(e),i=qe(t,r);i.tag=2,n!=null&&(i.callback=n),n=yn(e,i,r),n!==null&&(Me(n,e,r,t),Vr(n,e,r))}};function bu(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(i,o):!0}function Ja(e,n,t){var r=!1,i=Nn,o=n.contextType;return typeof o=="object"&&o!==null?o=Te(o):(i=pe(n)?Un:le.current,r=n.contextTypes,o=(r=r!=null)?vt(e,i):Nn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_i,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function es(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&_i.enqueueReplaceState(n,n.state,null)}function bo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Qa,Wl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Te(o):(o=pe(n)?Un:le.current,i.context=vt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Zo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&_i.enqueueReplaceState(i,i.state,null),hi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;u===Qa&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Or(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ns(e){var n=e._init;return n(e._payload)}function Xa(e){function n(h,v){if(e){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function t(h,v){if(!e)return null;for(;v!==null;)n(h,v),v=v.sibling;return null}function r(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=wn(h,v),h.index=0,h.sibling=null,h}function o(h,v,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,v,g,x){return v===null||v.tag!==6?(v=mo(g,h.mode,x),v.return=h,v):(v=i(v,g),v.return=h,v)}function s(h,v,g,x){var w=g.type;return w===Xn?d(h,v,g.props.children,x,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sn&&ns(w)===v.type)?(x=i(v,g.props),x.ref=Pt(h,v,g),x.return=h,x):(x=Xr(g.type,g.key,g.props,null,h.mode,x),x.ref=Pt(h,v,g),x.return=h,x)}function a(h,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=go(g,h.mode,x),v.return=h,v):(v=i(v,g.children||[]),v.return=h,v)}function d(h,v,g,x,w){return v===null||v.tag!==7?(v=Dn(g,h.mode,x,w),v.return=h,v):(v=i(v,g),v.return=h,v)}function c(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mo(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Er:return g=Xr(v.type,v.key,v.props,null,h.mode,g),g.ref=Pt(h,null,v),g.return=h,g;case Jn:return v=go(v,h.mode,g),v.return=h,v;case sn:var x=v._init;return c(h,x(v._payload),g)}if(At(v)||kt(v))return v=Dn(v,h.mode,g,null),v.return=h,v;Or(h,v)}return null}function f(h,v,g,x){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:u(h,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return g.key===w?s(h,v,g,x):null;case Jn:return g.key===w?a(h,v,g,x):null;case sn:return w=g._init,f(h,v,w(g._payload),x)}if(At(g)||kt(g))return w!==null?null:d(h,v,g,x,null);Or(h,g)}return null}function p(h,v,g,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,u(v,h,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Er:return h=h.get(x.key===null?g:x.key)||null,s(v,h,x,w);case Jn:return h=h.get(x.key===null?g:x.key)||null,a(v,h,x,w);case sn:var I=x._init;return p(h,v,g,I(x._payload),w)}if(At(x)||kt(x))return h=h.get(g)||null,d(v,h,x,w,null);Or(v,x)}return null}function m(h,v,g,x){for(var w=null,I=null,N=v,k=v=0,A=null;N!==null&&k<g.length;k++){N.index>k?(A=N,N=null):A=N.sibling;var O=f(h,N,g[k],x);if(O===null){N===null&&(N=A);break}e&&N&&O.alternate===null&&n(h,N),v=o(O,v,k),I===null?w=O:I.sibling=O,I=O,N=A}if(k===g.length)return t(h,N),$&&Pn(h,k),w;if(N===null){for(;k<g.length;k++)N=c(h,g[k],x),N!==null&&(v=o(N,v,k),I===null?w=N:I.sibling=N,I=N);return $&&Pn(h,k),w}for(N=r(h,N);k<g.length;k++)A=p(N,h,k,g[k],x),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?k:A.key),v=o(A,v,k),I===null?w=A:I.sibling=A,I=A);return e&&N.forEach(function(Ce){return n(h,Ce)}),$&&Pn(h,k),w}function y(h,v,g,x){var w=kt(g);if(typeof w!="function")throw Error(S(150));if(g=w.call(g),g==null)throw Error(S(151));for(var I=w=null,N=v,k=v=0,A=null,O=g.next();N!==null&&!O.done;k++,O=g.next()){N.index>k?(A=N,N=null):A=N.sibling;var Ce=f(h,N,O.value,x);if(Ce===null){N===null&&(N=A);break}e&&N&&Ce.alternate===null&&n(h,N),v=o(Ce,v,k),I===null?w=Ce:I.sibling=Ce,I=Ce,N=A}if(O.done)return t(h,N),$&&Pn(h,k),w;if(N===null){for(;!O.done;k++,O=g.next())O=c(h,O.value,x),O!==null&&(v=o(O,v,k),I===null?w=O:I.sibling=O,I=O);return $&&Pn(h,k),w}for(N=r(h,N);!O.done;k++,O=g.next())O=p(N,h,k,O.value,x),O!==null&&(e&&O.alternate!==null&&N.delete(O.key===null?k:O.key),v=o(O,v,k),I===null?w=O:I.sibling=O,I=O);return e&&N.forEach(function(St){return n(h,St)}),$&&Pn(h,k),w}function E(h,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Xn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:e:{for(var w=g.key,I=v;I!==null;){if(I.key===w){if(w=g.type,w===Xn){if(I.tag===7){t(h,I.sibling),v=i(I,g.props.children),v.return=h,h=v;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===sn&&ns(w)===I.type){t(h,I.sibling),v=i(I,g.props),v.ref=Pt(h,I,g),v.return=h,h=v;break e}t(h,I);break}else n(h,I);I=I.sibling}g.type===Xn?(v=Dn(g.props.children,h.mode,x,g.key),v.return=h,h=v):(x=Xr(g.type,g.key,g.props,null,h.mode,x),x.ref=Pt(h,v,g),x.return=h,h=x)}return l(h);case Jn:e:{for(I=g.key;v!==null;){if(v.key===I)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(h,v.sibling),v=i(v,g.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else n(h,v);v=v.sibling}v=go(g,h.mode,x),v.return=h,h=v}return l(h);case sn:return I=g._init,E(h,v,I(g._payload),x)}if(At(g))return m(h,v,g,x);if(kt(g))return y(h,v,g,x);Or(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(h,v.sibling),v=i(v,g),v.return=h,h=v):(t(h,v),v=mo(g,h.mode,x),v.return=h,h=v),l(h)):t(h,v)}return E}var ht=Xa(!0),Ya=Xa(!1),mr={},Ve=In(mr),lr=In(mr),ur=In(mr);function An(e){if(e===mr)throw Error(S(174));return e}function Gl(e,n){switch(F(ur,n),F(lr,e),F(Ve,mr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Oo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Oo(n,e)}L(Ve),F(Ve,n)}function mt(){L(Ve),L(lr),L(ur)}function qa(e){An(ur.current);var n=An(Ve.current),t=Oo(n,e.type);n!==t&&(F(lr,e),F(Ve,t))}function Kl(e){lr.current===e&&(L(Ve),L(lr))}var B=In(0);function mi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ao=[];function Ql(){for(var e=0;e<ao.length;e++)ao[e]._workInProgressVersionPrimary=null;ao.length=0}var Wr=tn.ReactCurrentDispatcher,co=tn.ReactCurrentBatchConfig,Bn=0,H=null,J=null,Z=null,gi=!1,Gt=!1,sr=0,Zd=0;function re(){throw Error(S(321))}function Jl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!De(e[t],n[t]))return!1;return!0}function Xl(e,n,t,r,i,o){if(Bn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wr.current=e===null||e.memoizedState===null?tv:rv,e=t(r,i),Gt){o=0;do{if(Gt=!1,sr=0,25<=o)throw Error(S(301));o+=1,Z=J=null,n.updateQueue=null,Wr.current=iv,e=t(r,i)}while(Gt)}if(Wr.current=yi,n=J!==null&&J.next!==null,Bn=0,Z=J=H=null,gi=!1,n)throw Error(S(300));return e}function Yl(){var e=sr!==0;return sr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Re(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function ar(e,n){return typeof n=="function"?n(e):n}function fo(e){var n=Re(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,s=null,a=o;do{var d=a.lane;if((Bn&d)===d)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var c={lane:d,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=c,l=r):s=s.next=c,H.lanes|=d,Hn|=d}a=a.next}while(a!==null&&a!==o);s===null?l=r:s.next=u,De(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function vo(e){var n=Re(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);De(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Za(){}function ba(e,n){var t=H,r=Re(),i=n(),o=!De(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,ql(tc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,cr(9,nc.bind(null,t,r,i,n),void 0,null),b===null)throw Error(S(349));Bn&30||ec(t,n,i)}return i}function ec(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nc(e,n,t,r){n.value=t,n.getSnapshot=r,rc(n)&&ic(e)}function tc(e,n,t){return t(function(){rc(n)&&ic(e)})}function rc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!De(e,t)}catch{return!0}}function ic(e){var n=en(e,1);n!==null&&Me(n,e,1,-1)}function ts(e){var n=Ue();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},n.queue=e,e=e.dispatch=nv.bind(null,H,e),[n.memoizedState,e]}function cr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function oc(){return Re().memoizedState}function Gr(e,n,t,r){var i=Ue();H.flags|=e,i.memoizedState=cr(1|n,t,void 0,r===void 0?null:r)}function ji(e,n,t,r){var i=Re();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&Jl(r,l.deps)){i.memoizedState=cr(n,t,o,r);return}}H.flags|=e,i.memoizedState=cr(1|n,t,o,r)}function rs(e,n){return Gr(8390656,8,e,n)}function ql(e,n){return ji(2048,8,e,n)}function lc(e,n){return ji(4,2,e,n)}function uc(e,n){return ji(4,4,e,n)}function sc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ac(e,n,t){return t=t!=null?t.concat([e]):null,ji(4,4,sc.bind(null,n,e),t)}function Zl(){}function cc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Jl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function fc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Jl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function dc(e,n,t){return Bn&21?(De(t,n)||(t=ha(),H.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function bd(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=co.transition;co.transition={};try{e(!1),n()}finally{M=t,co.transition=r}}function vc(){return Re().memoizedState}function ev(e,n,t){var r=En(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},pc(e))hc(n,t);else if(t=Ga(e,n,t,r),t!==null){var i=se();Me(t,e,r,i),mc(t,n,r)}}function nv(e,n,t){var r=En(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(pc(e))hc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,De(u,l)){var s=n.interleaved;s===null?(i.next=i,Vl(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Ga(e,n,i,r),t!==null&&(i=se(),Me(t,e,r,i),mc(t,n,r))}}function pc(e){var n=e.alternate;return e===H||n!==null&&n===H}function hc(e,n){Gt=gi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function mc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Pl(e,t)}}var yi={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tv={readContext:Te,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:rs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Gr(4194308,4,sc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Gr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Gr(4,2,e,n)},useMemo:function(e,n){var t=Ue();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ue();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ev.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:ts,useDebugValue:Zl,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=ts(!1),n=e[0];return e=bd.bind(null,e[1]),Ue().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Ue();if($){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),b===null)throw Error(S(349));Bn&30||ec(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,rs(tc.bind(null,r,o,e),[e]),r.flags|=2048,cr(9,nc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ue(),n=b.identifierPrefix;if($){var t=Xe,r=Je;t=(r&~(1<<32-je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rv={readContext:Te,useCallback:cc,useContext:Te,useEffect:ql,useImperativeHandle:ac,useInsertionEffect:lc,useLayoutEffect:uc,useMemo:fc,useReducer:fo,useRef:oc,useState:function(){return fo(ar)},useDebugValue:Zl,useDeferredValue:function(e){var n=Re();return dc(n,J.memoizedState,e)},useTransition:function(){var e=fo(ar)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Za,useSyncExternalStore:ba,useId:vc,unstable_isNewReconciler:!1},iv={readContext:Te,useCallback:cc,useContext:Te,useEffect:ql,useImperativeHandle:ac,useInsertionEffect:lc,useLayoutEffect:uc,useMemo:fc,useReducer:vo,useRef:oc,useState:function(){return vo(ar)},useDebugValue:Zl,useDeferredValue:function(e){var n=Re();return J===null?n.memoizedState=e:dc(n,J.memoizedState,e)},useTransition:function(){var e=vo(ar)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Za,useSyncExternalStore:ba,useId:vc,unstable_isNewReconciler:!1};function gt(e,n){try{var t="",r=n;do t+=_f(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function po(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function el(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ov=typeof WeakMap=="function"?WeakMap:Map;function gc(e,n,t){t=qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ei||(Ei=!0,cl=r),el(e,n)},t}function yc(e,n,t){t=qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){el(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){el(e,n),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function is(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ov;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=xv.bind(null,e,n,t),n.then(e,e))}function os(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ls(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qe(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var lv=tn.ReactCurrentOwner,de=!1;function ue(e,n,t,r){n.child=e===null?Ya(n,null,t,r):ht(n,e.child,t,r)}function us(e,n,t,r,i){t=t.render;var o=n.ref;return ct(n,i),r=Xl(e,n,t,r,o,i),t=Yl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nn(e,n,i)):($&&t&&Dl(n),n.flags|=1,ue(e,n,r,i),n.child)}function ss(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!lu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,xc(e,n,o,r,i)):(e=Xr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(l,r)&&e.ref===n.ref)return nn(e,n,i)}return n.flags|=1,e=wn(o,r),e.ref=n.ref,e.return=n,n.child=e}function xc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(tr(o,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,nn(e,n,i)}return nl(e,n,t,r,i)}function Ec(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(ot,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(ot,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,F(ot,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,F(ot,me),me|=r;return ue(e,n,i,t),n.child}function wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function nl(e,n,t,r,i){var o=pe(t)?Un:le.current;return o=vt(n,o),ct(n,i),t=Xl(e,n,t,r,o,i),r=Yl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nn(e,n,i)):($&&r&&Dl(n),n.flags|=1,ue(e,n,t,i),n.child)}function as(e,n,t,r,i){if(pe(t)){var o=!0;ci(n)}else o=!1;if(ct(n,i),n.stateNode===null)Kr(e,n),Ja(n,t,r),bo(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var s=l.context,a=t.contextType;typeof a=="object"&&a!==null?a=Te(a):(a=pe(t)?Un:le.current,a=vt(n,a));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==a)&&es(n,l,r,a),an=!1;var f=n.memoizedState;l.state=f,hi(n,r,l,i),s=n.memoizedState,u!==r||f!==s||ve.current||an?(typeof d=="function"&&(Zo(n,t,d,r),s=n.memoizedState),(u=an||bu(n,t,u,r,f,s,a))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=a,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Ka(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:ze(n.type,u),l.props=a,c=n.pendingProps,f=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Te(s):(s=pe(t)?Un:le.current,s=vt(n,s));var p=t.getDerivedStateFromProps;(d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==c||f!==s)&&es(n,l,r,s),an=!1,f=n.memoizedState,l.state=f,hi(n,r,l,i);var m=n.memoizedState;u!==c||f!==m||ve.current||an?(typeof p=="function"&&(Zo(n,t,p,r),m=n.memoizedState),(a=an||bu(n,t,a,r,f,m,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),l.props=r,l.state=m,l.context=s,r=a):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return tl(e,n,t,r,o,i)}function tl(e,n,t,r,i,o){wc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Ju(n,t,!1),nn(e,n,o);r=n.stateNode,lv.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=ht(n,e.child,null,o),n.child=ht(n,null,u,o)):ue(e,n,u,o),n.memoizedState=r.state,i&&Ju(n,t,!0),n.child}function Sc(e){var n=e.stateNode;n.pendingContext?Qu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qu(e,n.context,!1),Gl(e,n.containerInfo)}function cs(e,n,t,r,i){return pt(),Ul(i),n.flags|=256,ue(e,n,t,r),n.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nc(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(B,i&1),e===null)return Yo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Fi(l,r,0,null),e=Dn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=il(t),n.memoizedState=rl,e):bl(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return uv(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=wn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=wn(u,o):(o=Dn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?il(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=rl,r}return o=e.child,e=o.sibling,r=wn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function bl(e,n){return n=Fi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _r(e,n,t,r){return r!==null&&Ul(r),ht(n,e.child,null,t),e=bl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function uv(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=po(Error(S(422))),_r(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Fi({mode:"visible",children:r.children},i,0,null),o=Dn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ht(n,e.child,null,l),n.child.memoizedState=il(l),n.memoizedState=rl,o);if(!(n.mode&1))return _r(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(S(419)),r=po(o,r,void 0),_r(e,n,l,r)}if(u=(l&e.childLanes)!==0,de||u){if(r=b,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,en(e,i),Me(r,e,i,-1))}return ou(),r=po(Error(S(421))),_r(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ev.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ge=gn(i.nextSibling),ye=n,$=!0,_e=null,e!==null&&(Se[Ne++]=Je,Se[Ne++]=Xe,Se[Ne++]=$n,Je=e.id,Xe=e.overflow,$n=n),n=bl(n,r.children),n.flags|=4096,n)}function fs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),qo(e.return,n,t)}function ho(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function kc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fs(e,t,n);else if(e.tag===19)fs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&mi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ho(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ho(n,!0,t,null,o);break;case"together":ho(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Kr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function nn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sv(e,n,t){switch(n.tag){case 3:Sc(n),pt();break;case 5:qa(n);break;case 1:pe(n.type)&&ci(n);break;case 4:Gl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(vi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Nc(e,n,t):(F(B,B.current&1),e=nn(e,n,t),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return kc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,Ec(e,n,t)}return nn(e,n,t)}var Ic,ol,Tc,Rc;Ic=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ol=function(){};Tc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,An(Ve.current);var o=null;switch(t){case"input":i=Ro(e,i),r=Ro(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=zo(e,i),r=zo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}_o(t,r);var l;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xt.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Xt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&D("scroll",e),o||u===s||(o=[])):(o=o||[]).push(a,s))}t&&(o=o||[]).push("style",t);var a=o;(n.updateQueue=a)&&(n.flags|=4)}};Rc=function(e,n,t,r){t!==r&&(n.flags|=4)};function zt(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function av(e,n,t){var r=n.pendingProps;switch(Ll(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return pe(n.type)&&ai(),ie(n),null;case 3:return r=n.stateNode,mt(),L(ve),L(le),Ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_e!==null&&(vl(_e),_e=null))),ol(e,n),ie(n),null;case 5:Kl(n);var i=An(ur.current);if(t=n.type,e!==null&&n.stateNode!=null)Tc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=An(Ve.current),zr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[$e]=n,r[or]=o,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<Dt.length;i++)D(Dt[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Eu(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":Su(r,o),D("invalid",r)}_o(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),i=["children",""+u]):Xt.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&D("scroll",r)}switch(t){case"input":wr(r),wu(r,o,!0);break;case"textarea":wr(r),Nu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=si)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ea(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[$e]=n,e[or]=r,Ic(e,n,!1,!1),n.stateNode=e;e:{switch(l=jo(t,r),t){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dt.length;i++)D(Dt[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":Eu(e,r),i=Ro(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),D("invalid",e);break;case"textarea":Su(e,r),i=zo(e,r),D("invalid",e);break;default:i=r}_o(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?ra(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&na(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Yt(e,s):typeof s=="number"&&Yt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&D("scroll",e):s!=null&&Nl(e,o,s,l))}switch(t){case"input":wr(e),wu(e,r,!1);break;case"textarea":wr(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?lt(e,!!r.multiple,o,!1):r.defaultValue!=null&&lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=si)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Rc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=An(ur.current),An(Ve.current),zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[$e]=n,(o=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[$e]=n,n.stateNode=r}return ie(n),null;case 13:if(L(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ge!==null&&n.mode&1&&!(n.flags&128))Wa(),pt(),n.flags|=98560,o=!1;else if(o=zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[$e]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),o=!1}else _e!==null&&(vl(_e),_e=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):ou())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return mt(),ol(e,n),e===null&&rr(n.stateNode.containerInfo),ie(n),null;case 10:return Hl(n.type._context),ie(n),null;case 17:return pe(n.type)&&ai(),ie(n),null;case 19:if(L(B),o=n.memoizedState,o===null)return ie(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)zt(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=mi(e),l!==null){for(n.flags|=128,zt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>yt&&(n.flags|=128,r=!0,zt(o,!1),n.lanes=4194304)}else{if(!r)if(e=mi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),zt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ie(n),null}else 2*K()-o.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,zt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=B.current,F(B,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return iu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function cv(e,n){switch(Ll(n),n.tag){case 1:return pe(n.type)&&ai(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),L(ve),L(le),Ql(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Kl(n),null;case 13:if(L(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(B),null;case 4:return mt(),null;case 10:return Hl(n.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var jr=!1,oe=!1,fv=typeof WeakSet=="function"?WeakSet:Set,R=null;function it(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function ll(e,n,t){try{t()}catch(r){W(e,n,r)}}var ds=!1;function dv(e,n){if(Vo=oi,e=Oa(),Fl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,s=-1,a=0,d=0,c=e,f=null;n:for(;;){for(var p;c!==t||i!==0&&c.nodeType!==3||(u=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===e)break n;if(f===t&&++a===i&&(u=l),f===o&&++d===r&&(s=l),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wo={focusedElem:e,selectionRange:t},oi=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,h=n.stateNode,v=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:ze(n.type,y),E);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){W(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return m=ds,ds=!1,m}function Kt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ll(n,t,o)}i=i.next}while(i!==r)}}function Mi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ul(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Cc(e){var n=e.alternate;n!==null&&(e.alternate=null,Cc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[$e],delete n[or],delete n[Qo],delete n[Jd],delete n[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function vs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(sl(e,n,t),e=e.sibling;e!==null;)sl(e,n,t),e=e.sibling}function al(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(al(e,n,t),e=e.sibling;e!==null;)al(e,n,t),e=e.sibling}var ee=null,Oe=!1;function rn(e,n,t){for(t=t.child;t!==null;)zc(e,n,t),t=t.sibling}function zc(e,n,t){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Ti,t)}catch{}switch(t.tag){case 5:oe||it(t,n);case 6:var r=ee,i=Oe;ee=null,rn(e,n,t),ee=r,Oe=i,ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?uo(e.parentNode,t):e.nodeType===1&&uo(e,t),er(e)):uo(ee,t.stateNode));break;case 4:r=ee,i=Oe,ee=t.stateNode.containerInfo,Oe=!0,rn(e,n,t),ee=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ll(t,n,l),i=i.next}while(i!==r)}rn(e,n,t);break;case 1:if(!oe&&(it(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){W(t,n,u)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,rn(e,n,t),oe=r):rn(e,n,t);break;default:rn(e,n,t)}}function ps(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new fv),n.forEach(function(r){var i=wv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Oe=!1;break e;case 3:ee=u.stateNode.containerInfo,Oe=!0;break e;case 4:ee=u.stateNode.containerInfo,Oe=!0;break e}u=u.return}if(ee===null)throw Error(S(160));zc(o,l,i),ee=null,Oe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){W(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Oc(n,e),n=n.sibling}function Oc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Le(e),r&4){try{Kt(3,e,e.return),Mi(3,e)}catch(y){W(e,e.return,y)}try{Kt(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:Pe(n,e),Le(e),r&512&&t!==null&&it(t,t.return);break;case 5:if(Pe(n,e),Le(e),r&512&&t!==null&&it(t,t.return),e.flags&32){var i=e.stateNode;try{Yt(i,"")}catch(y){W(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Zs(i,o),jo(u,l);var a=jo(u,o);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?ra(i,c):d==="dangerouslySetInnerHTML"?na(i,c):d==="children"?Yt(i,c):Nl(i,d,c,a)}switch(u){case"input":Co(i,o);break;case"textarea":bs(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?lt(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?lt(i,!!o.multiple,o.defaultValue,!0):lt(i,!!o.multiple,o.multiple?[]:"",!1))}i[or]=o}catch(y){W(e,e.return,y)}}break;case 6:if(Pe(n,e),Le(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){W(e,e.return,y)}}break;case 3:if(Pe(n,e),Le(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{er(n.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:Pe(n,e),Le(e);break;case 13:Pe(n,e),Le(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=K())),r&4&&ps(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(a=oe)||d,Pe(n,e),oe=a):Pe(n,e),Le(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(f=R,p=f.child,f.tag){case 0:case 11:case 14:case 15:Kt(4,f,f.return);break;case 1:it(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){W(r,t,y)}}break;case 5:it(f,f.return);break;case 22:if(f.memoizedState!==null){ms(c);continue}}p!==null?(p.return=f,R=p):ms(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,a?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ta("display",l))}catch(y){W(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(y){W(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Pe(n,e),Le(e),r&4&&ps(e);break;case 21:break;default:Pe(n,e),Le(e)}}function Le(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Pc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yt(i,""),r.flags&=-33);var o=vs(e);al(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=vs(e);sl(e,u,l);break;default:throw Error(S(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vv(e,n,t){R=e,_c(e)}function _c(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||jr;if(!l){var u=i.alternate,s=u!==null&&u.memoizedState!==null||oe;u=jr;var a=oe;if(jr=l,(oe=s)&&!a)for(R=i;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?gs(i):s!==null?(s.return=l,R=s):gs(i);for(;o!==null;)R=o,_c(o),o=o.sibling;R=i,jr=u,oe=a}hs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):hs(e)}}function hs(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Mi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Zu(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Zu(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var d=a.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&er(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||n.flags&512&&ul(n)}catch(f){W(n,n.return,f)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function ms(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function gs(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Mi(4,n)}catch(s){W(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){W(n,i,s)}}var o=n.return;try{ul(n)}catch(s){W(n,o,s)}break;case 5:var l=n.return;try{ul(n)}catch(s){W(n,l,s)}}}catch(s){W(n,n.return,s)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var pv=Math.ceil,xi=tn.ReactCurrentDispatcher,eu=tn.ReactCurrentOwner,Ie=tn.ReactCurrentBatchConfig,j=0,b=null,Q=null,ne=0,me=0,ot=In(0),Y=0,fr=null,Hn=0,Ai=0,nu=0,Qt=null,fe=null,tu=0,yt=1/0,Ke=null,Ei=!1,cl=null,xn=null,Mr=!1,vn=null,wi=0,Jt=0,fl=null,Qr=-1,Jr=0;function se(){return j&6?K():Qr!==-1?Qr:Qr=K()}function En(e){return e.mode&1?j&2&&ne!==0?ne&-ne:qd.transition!==null?(Jr===0&&(Jr=ha()),Jr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Sa(e.type)),e):1}function Me(e,n,t,r){if(50<Jt)throw Jt=0,fl=null,Error(S(185));vr(e,t,r),(!(j&2)||e!==b)&&(e===b&&(!(j&2)&&(Ai|=t),Y===4&&fn(e,ne)),he(e,r),t===1&&j===0&&!(n.mode&1)&&(yt=K()+500,Oi&&Tn()))}function he(e,n){var t=e.callbackNode;qf(e,n);var r=ii(e,e===b?ne:0);if(r===0)t!==null&&Tu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Tu(t),n===1)e.tag===0?Yd(ys.bind(null,e)):Ba(ys.bind(null,e)),Kd(function(){!(j&6)&&Tn()}),t=null;else{switch(ma(r)){case 1:t=Cl;break;case 4:t=va;break;case 16:t=ri;break;case 536870912:t=pa;break;default:t=ri}t=$c(t,jc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function jc(e,n){if(Qr=-1,Jr=0,j&6)throw Error(S(327));var t=e.callbackNode;if(ft()&&e.callbackNode!==t)return null;var r=ii(e,e===b?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Si(e,r);else{n=r;var i=j;j|=2;var o=Ac();(b!==e||ne!==n)&&(Ke=null,yt=K()+500,Fn(e,n));do try{gv();break}catch(u){Mc(e,u)}while(1);Bl(),xi.current=o,j=i,Q!==null?n=0:(b=null,ne=0,n=Y)}if(n!==0){if(n===2&&(i=Lo(e),i!==0&&(r=i,n=dl(e,i))),n===1)throw t=fr,Fn(e,0),fn(e,r),he(e,K()),t;if(n===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!hv(i)&&(n=Si(e,r),n===2&&(o=Lo(e),o!==0&&(r=o,n=dl(e,o))),n===1))throw t=fr,Fn(e,0),fn(e,r),he(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:zn(e,fe,Ke);break;case 3:if(fn(e,r),(r&130023424)===r&&(n=tu+500-K(),10<n)){if(ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ko(zn.bind(null,e,fe,Ke),n);break}zn(e,fe,Ke);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-je(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pv(r/1960))-r,10<r){e.timeoutHandle=Ko(zn.bind(null,e,fe,Ke),r);break}zn(e,fe,Ke);break;case 5:zn(e,fe,Ke);break;default:throw Error(S(329))}}}return he(e,K()),e.callbackNode===t?jc.bind(null,e):null}function dl(e,n){var t=Qt;return e.current.memoizedState.isDehydrated&&(Fn(e,n).flags|=256),e=Si(e,n),e!==2&&(n=fe,fe=t,n!==null&&vl(n)),e}function vl(e){fe===null?fe=e:fe.push.apply(fe,e)}function hv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!De(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fn(e,n){for(n&=~nu,n&=~Ai,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-je(n),r=1<<t;e[t]=-1,n&=~r}}function ys(e){if(j&6)throw Error(S(327));ft();var n=ii(e,0);if(!(n&1))return he(e,K()),null;var t=Si(e,n);if(e.tag!==0&&t===2){var r=Lo(e);r!==0&&(n=r,t=dl(e,r))}if(t===1)throw t=fr,Fn(e,0),fn(e,n),he(e,K()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zn(e,fe,Ke),he(e,K()),null}function ru(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(yt=K()+500,Oi&&Tn())}}function Vn(e){vn!==null&&vn.tag===0&&!(j&6)&&ft();var n=j;j|=1;var t=Ie.transition,r=M;try{if(Ie.transition=null,M=1,e)return e()}finally{M=r,Ie.transition=t,j=n,!(j&6)&&Tn()}}function iu(){me=ot.current,L(ot)}function Fn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Gd(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(Ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:mt(),L(ve),L(le),Ql();break;case 5:Kl(r);break;case 4:mt();break;case 13:L(B);break;case 19:L(B);break;case 10:Hl(r.type._context);break;case 22:case 23:iu()}t=t.return}if(b=e,Q=e=wn(e.current,null),ne=me=n,Y=0,fr=null,nu=Ai=Hn=0,fe=Qt=null,Mn!==null){for(n=0;n<Mn.length;n++)if(t=Mn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Mn=null}return e}function Mc(e,n){do{var t=Q;try{if(Bl(),Wr.current=yi,gi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(Bn=0,Z=J=H=null,Gt=!1,sr=0,eu.current=null,t===null||t.return===null){Y=1,fr=n,Q=null;break}e:{var o=e,l=t.return,u=t,s=n;if(n=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,d=u,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=os(l);if(p!==null){p.flags&=-257,ls(p,l,u,o,n),p.mode&1&&is(o,a,n),n=p,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){is(o,a,n),ou();break e}s=Error(S(426))}}else if($&&u.mode&1){var E=os(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ls(E,l,u,o,n),Ul(gt(s,u));break e}}o=s=gt(s,u),Y!==4&&(Y=2),Qt===null?Qt=[o]:Qt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var h=gc(o,s,n);qu(o,h);break e;case 1:u=s;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xn===null||!xn.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=yc(o,u,n);qu(o,x);break e}}o=o.return}while(o!==null)}Dc(t)}catch(w){n=w,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(1)}function Ac(){var e=xi.current;return xi.current=yi,e===null?yi:e}function ou(){(Y===0||Y===3||Y===2)&&(Y=4),b===null||!(Hn&268435455)&&!(Ai&268435455)||fn(b,ne)}function Si(e,n){var t=j;j|=2;var r=Ac();(b!==e||ne!==n)&&(Ke=null,Fn(e,n));do try{mv();break}catch(i){Mc(e,i)}while(1);if(Bl(),j=t,xi.current=r,Q!==null)throw Error(S(261));return b=null,ne=0,Y}function mv(){for(;Q!==null;)Fc(Q)}function gv(){for(;Q!==null&&!Hf();)Fc(Q)}function Fc(e){var n=Uc(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Dc(e):Q=n,eu.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cv(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(t=av(t,n,me),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);Y===0&&(Y=5)}function zn(e,n,t){var r=M,i=Ie.transition;try{Ie.transition=null,M=1,yv(e,n,t,r)}finally{Ie.transition=i,M=r}return null}function yv(e,n,t,r){do ft();while(vn!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Zf(e,o),e===b&&(Q=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Mr||(Mr=!0,$c(ri,function(){return ft(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=M;M=1;var u=j;j|=4,eu.current=null,dv(e,t),Oc(t,e),Ld(Wo),oi=!!Vo,Wo=Vo=null,e.current=t,vv(t),Vf(),j=u,M=l,Ie.transition=o}else e.current=t;if(Mr&&(Mr=!1,vn=e,wi=i),o=e.pendingLanes,o===0&&(xn=null),Kf(t.stateNode),he(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ei)throw Ei=!1,e=cl,cl=null,e;return wi&1&&e.tag!==0&&ft(),o=e.pendingLanes,o&1?e===fl?Jt++:(Jt=0,fl=e):Jt=0,Tn(),null}function ft(){if(vn!==null){var e=ma(wi),n=Ie.transition,t=M;try{if(Ie.transition=null,M=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,wi=0,j&6)throw Error(S(331));var i=j;for(j|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(R=a;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Kt(8,d,o)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var f=d.sibling,p=d.return;if(Cc(d),d===a){R=null;break}if(f!==null){f.return=p,R=f;break}R=p}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kt(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var v=e.current;for(R=v;R!==null;){l=R;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,R=g;else e:for(l=v;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Mi(9,u)}}catch(w){W(u,u.return,w)}if(u===l){R=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,R=x;break e}R=u.return}}if(j=i,Tn(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Ti,e)}catch{}r=!0}return r}finally{M=t,Ie.transition=n}}return!1}function xs(e,n,t){n=gt(t,n),n=gc(e,n,1),e=yn(e,n,1),n=se(),e!==null&&(vr(e,1,n),he(e,n))}function W(e,n,t){if(e.tag===3)xs(e,e,t);else for(;n!==null;){if(n.tag===3){xs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=gt(t,e),e=yc(n,e,1),n=yn(n,e,1),e=se(),n!==null&&(vr(n,1,e),he(n,e));break}}n=n.return}}function xv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>K()-tu?Fn(e,0):nu|=t),he(e,n)}function Lc(e,n){n===0&&(e.mode&1?(n=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):n=1);var t=se();e=en(e,n),e!==null&&(vr(e,n,t),he(e,t))}function Ev(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Lc(e,t)}function wv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Lc(e,t)}var Uc;Uc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,sv(e,n,t);de=!!(e.flags&131072)}else de=!1,$&&n.flags&1048576&&Ha(n,di,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Kr(e,n),e=n.pendingProps;var i=vt(n,le.current);ct(n,t),i=Xl(null,n,r,e,i,t);var o=Yl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(o=!0,ci(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wl(n),i.updater=_i,n.stateNode=i,i._reactInternals=n,bo(n,r,e,t),n=tl(null,n,r,!0,o,t)):(n.tag=0,$&&o&&Dl(n),ue(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Kr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Nv(r),e=ze(r,e),i){case 0:n=nl(null,n,r,e,t);break e;case 1:n=as(null,n,r,e,t);break e;case 11:n=us(null,n,r,e,t);break e;case 14:n=ss(null,n,r,ze(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),nl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),as(e,n,r,i,t);case 3:e:{if(Sc(n),e===null)throw Error(S(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Ka(e,n),hi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=gt(Error(S(423)),n),n=cs(e,n,r,t,i);break e}else if(r!==i){i=gt(Error(S(424)),n),n=cs(e,n,r,t,i);break e}else for(ge=gn(n.stateNode.containerInfo.firstChild),ye=n,$=!0,_e=null,t=Ya(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===i){n=nn(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return qa(n),e===null&&Yo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Go(r,i)?l=null:o!==null&&Go(r,o)&&(n.flags|=32),wc(e,n),ue(e,n,l,t),n.child;case 6:return e===null&&Yo(n),null;case 13:return Nc(e,n,t);case 4:return Gl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ht(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),us(e,n,r,i,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,F(vi,r._currentValue),r._currentValue=l,o!==null)if(De(o.value,l)){if(o.children===i.children&&!ve.current){n=nn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=qe(-1,t&-t),s.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var d=a.pending;d===null?s.next=s:(s.next=d.next,d.next=s),a.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),qo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),qo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ue(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ct(n,t),i=Te(i),r=r(i),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),ss(e,n,r,i,t);case 15:return xc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Kr(e,n),n.tag=1,pe(r)?(e=!0,ci(n)):e=!1,ct(n,t),Ja(n,r,i),bo(n,r,i,t),tl(null,n,r,!0,e,t);case 19:return kc(e,n,t);case 22:return Ec(e,n,t)}throw Error(S(156,n.tag))};function $c(e,n){return da(e,n)}function Sv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new Sv(e,n,t,r)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Il)return 11;if(e===Tl)return 14}return 2}function wn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Xr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")lu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xn:return Dn(t.children,i,o,n);case kl:l=8,i|=8;break;case No:return e=ke(12,t,n,i|2),e.elementType=No,e.lanes=o,e;case ko:return e=ke(13,t,n,i),e.elementType=ko,e.lanes=o,e;case Io:return e=ke(19,t,n,i),e.elementType=Io,e.lanes=o,e;case Xs:return Fi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qs:l=10;break e;case Js:l=9;break e;case Il:l=11;break e;case Tl:l=14;break e;case sn:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=ke(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Dn(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function Fi(e,n,t,r){return e=ke(22,e,r,n),e.elementType=Xs,e.lanes=t,e.stateNode={isHidden:!1},e}function mo(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function go(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kv(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uu(e,n,t,r,i,o,l,u,s){return e=new kv(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ke(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wl(o),e}function Iv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bc(e){if(!e)return Nn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(pe(t))return $a(e,t,n)}return n}function Hc(e,n,t,r,i,o,l,u,s){return e=uu(t,r,!0,e,i,o,l,u,s),e.context=Bc(null),t=e.current,r=se(),i=En(t),o=qe(r,i),o.callback=n??null,yn(t,o,i),e.current.lanes=i,vr(e,i,r),he(e,r),e}function Di(e,n,t,r){var i=n.current,o=se(),l=En(i);return t=Bc(t),n.context===null?n.context=t:n.pendingContext=t,n=qe(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yn(i,n,l),e!==null&&(Me(e,i,l,o),Vr(e,i,l)),l}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Es(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function su(e,n){Es(e,n),(e=e.alternate)&&Es(e,n)}function Tv(){return null}var Vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function au(e){this._internalRoot=e}Li.prototype.render=au.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Di(e,n,null,null)};Li.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){Di(null,e,null,null)}),n[be]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var n=xa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<cn.length&&n!==0&&n<cn[t].priority;t++);cn.splice(t,0,e),t===0&&wa(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ws(){}function Rv(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var a=Ni(l);o.call(a)}}var l=Hc(n,r,e,0,null,!1,!1,"",ws);return e._reactRootContainer=l,e[be]=l.current,rr(e.nodeType===8?e.parentNode:e),Vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=Ni(s);u.call(a)}}var s=uu(e,0,!1,null,null,!1,!1,"",ws);return e._reactRootContainer=s,e[be]=s.current,rr(e.nodeType===8?e.parentNode:e),Vn(function(){Di(n,s,t,r)}),s}function $i(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var s=Ni(l);u.call(s)}}Di(n,l,e,i)}else l=Rv(t,n,e,i,r);return Ni(l)}ga=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(Pl(n,t|1),he(n,K()),!(j&6)&&(yt=K()+500,Tn()))}break;case 13:Vn(function(){var r=en(e,1);if(r!==null){var i=se();Me(r,e,1,i)}}),su(e,1)}};zl=function(e){if(e.tag===13){var n=en(e,134217728);if(n!==null){var t=se();Me(n,e,134217728,t)}su(e,134217728)}};ya=function(e){if(e.tag===13){var n=En(e),t=en(e,n);if(t!==null){var r=se();Me(t,e,n,r)}su(e,n)}};xa=function(){return M};Ea=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Ao=function(e,n,t){switch(n){case"input":if(Co(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=zi(r);if(!i)throw Error(S(90));qs(r),Co(r,i)}}}break;case"textarea":bs(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}};la=ru;ua=Vn;var Cv={usingClientEntryPoint:!1,Events:[hr,bn,zi,ia,oa,ru]},Ot={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Pv={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ca(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{Ti=Ar.inject(Pv),He=Ar}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(n))throw Error(S(200));return Iv(e,n,null,t)};Ee.createRoot=function(e,n){if(!cu(e))throw Error(S(299));var t=!1,r="",i=Vc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=uu(e,1,!1,null,null,t,!1,r,i),e[be]=n.current,rr(e.nodeType===8?e.parentNode:e),new au(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ca(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Vn(e)};Ee.hydrate=function(e,n,t){if(!Ui(n))throw Error(S(200));return $i(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!cu(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Vc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Hc(n,null,e,1,t??null,i,!1,o,l),e[be]=n.current,rr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Li(n)};Ee.render=function(e,n,t){if(!Ui(n))throw Error(S(200));return $i(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(S(40));return e._reactRootContainer?(Vn(function(){$i(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};Ee.unstable_batchedUpdates=ru;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ui(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return $i(e,n,t,!1,r)};Ee.version="18.2.0-next-9e3b772b8-20220608";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Hs.exports=Ee;var zv=Hs.exports,Ss=zv;mu.createRoot=Ss.createRoot,mu.hydrateRoot=Ss.hydrateRoot;const Ov=`float ease(float t) {
  #if EASING == 1  // linear
  return t;
  #elif EASING == 2 // sine
  return -0.5 * (cos(PI * t) - 1.);
  #elif EASING == 3 // quadratic
  float p = 2. * t * t;
  return t < 0.5 ? p : -p + (4. * t) - 1.;
  #elif EASING == 4 // cubic
  return t < 0.5 ? 4. * pow(t, 3.) : 1. - pow(-2. * t + 2., 3.) / 2.;
  #elif EASING == 5 // quartic
  return t < 0.5 ? 8. * pow(t, 4.) : -8. * pow(t - 1., 4.) + 1.;
  #elif EASING == 6 // quintic
  return t < 0.5 ? 16. * pow(t, 5.) : 1. - pow(-2. * t + 2., 5.) / 2.;
  #elif EASING == 7 // exponential
  return t == 0. || t == 1. ? t : t < 0.5 ? +0.5 * pow(2., (20. * t) - 10.) : -0.5 * pow(2., 10. - (t * 20.)) + 1.;
  #elif EASING == 8 // circular
  return t < 0.5 ? 0.5 * (1. - sqrt(1. - 4. * t * t)) : 0.5 * (sqrt((3. - 2. * t) * (2. * t - 1.)) + 1.);
  #elif EASING == 9 // back
  const float c1 = 1.70158;
  const float c2 = c1 * 1.525;
  return .5 * (t < 0.5 ? (pow(2. * t, 2.) * ((c2 + 1.) * 2. * t - c2)) : (pow(2. * t - 2., 2.) * ((c2 + 1.) * (t * 2. - 2.) + c2) + 2.));
  #elif EASING == 10 // elastic
  const float c5 = (TAU) / 4.5;
  return t == 0. ? 0. : t == 1. ? 1. : t < 0.5 ? -(pow(2., 20. * t - 10.) * sin((20. * t - 11.125) * c5)) / 2. : (pow(2., -20. * t + 10.) * sin((20. * t - 11.125) * c5)) / 2. + 1.;
  #elif EASING == 11 // bounce
  float s = 7.5625;
  float p = 2.75;
  float l;
  if(t < (1. / p)) {
    l = s * pow(t, 2.);
  } else {
    if(t < (2. / p)) {
      t -= (1.5 / p);
      l = s * pow(t, 2.) + 0.75;
    } else {
      if(t < (2.5 / p)) {
        t -= (2.25 / p);
        l = s * pow(t, 2.) + 0.9375;
      } else {
        t -= (2.625 / p);
        l = s * pow(t, 2.) + 0.984375;
      }
    }
  }
  return l;
  #elif EASING == 12 // inverse_sine
  return acos(1. - (2. * t)) / PI;
  #elif EASING == 13 // inverse_quadratic
  return t < .5 ? sqrt(t / 2.) : .5 * (2. - sqrt(2.) * sqrt(1. - t));
  #elif EASING == 14 // inverse_cubic
  return t < 0.5 ? pow(t / 4., 1. / 3.) : 1. - pow((1. - t) / 4., 1. / 3.);
  #elif EASING == 15 // inverse_quartic
  return t < .5 ? pow(t / 8., 1. / 4.) : 1. - pow((1. - t) / 8., 1. / 4.);
  #elif EASING == 16 // inverse_quintic
  return t < .5 ? pow(t / 16., 1. / 5.) : 1. - pow((1. - t) / 16., 1. / 5.);
  #else
  return t;
  #endif
}

vec2 ease(vec2 t) {
  return vec2(ease(t.x), ease(t.y));
}
`,_v=`#include config

const float PI = 3.14159265358979323846264338327950288;
const float TAU = 2. * PI;
const float ETA = PI / 2.;
const float DT = .001;
const float SCALING = .0005;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

#if DIMENSIONS >= 4
uniform float fov4;
#endif
#if DIMENSIONS >= 5
uniform float fov5;
#endif
#if DIMENSIONS >= 6
uniform float fov6;
#endif
#if DIMENSIONS >= 7
uniform float fov7;
#endif
#if DIMENSIONS >= 8
uniform float fov8;
#endif
#if DIMENSIONS >= 9
uniform float fov9;
#endif
uniform float zoom;

#if DIMENSIONS >= 5
struct vec5 {
  vec4 v;
  float u;
};
#endif
#if DIMENSIONS >= 6
struct vec6 {
  vec4 v;
  vec2 u;
};
#endif
#if DIMENSIONS >= 7
struct vec7 {
  vec4 v;
  vec3 u;
};
#endif
#if DIMENSIONS >= 8
struct vec8 {
  vec4 v;
  vec4 u;
};
#endif
#if DIMENSIONS >= 9
struct vec9 {
  vec4 v;
  vec4 u;
  float t;
};
#endif

#if DIMENSIONS == 5
struct mat5 {
  vec5 c1, c2, c3, c4, c5;
};
#elif DIMENSIONS == 6
struct mat6 {
  vec6 c1, c2, c3, c4, c5, c6;
};
#elif DIMENSIONS == 7
struct mat7 {
  vec7 c1, c2, c3, c4, c5, c6, c7;
};
#elif DIMENSIONS == 8
struct mat8 {
  vec8 c1, c2, c3, c4, c5, c6, c7, c8;
};
#elif DIMENSIONS == 9
struct mat9 {
  vec9 c1, c2, c3, c4, c5, c6, c7, c8, c9;
};
#endif
`,jv=`bool nan(in vec2 v) {
  return isnan(v.x) || isnan(v.y);
}

bool nan(in vec3 v) {
  return nan(v.xy) || isnan(v.z);
}

bool nan(in vec4 v) {
  return nan(v.xyz) || isnan(v.w);
}

#if DIMENSIONS >= 5
bool nan(in vec5 v) {
  return nan(v.v) || isnan(v.u);
}
#endif

#if DIMENSIONS >= 6
bool nan(in vec6 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 7
bool nan(in vec7 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 8
bool nan(in vec8 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 9
bool nan(in vec9 v) {
  return nan(v.v) || nan(v.u) || isnan(v.t);
}
#endif

float trix(in float c, in float p, in float t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec2 trix(in vec2 c, in vec2 p, in vec2 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec3 trix(in vec3 c, in vec3 p, in vec3 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec4 trix(in vec4 c, in vec4 p, in vec4 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}

#if DIMENSIONS == 5
vec5 mix(in vec5 a, in vec5 b, in float t) {
  return vec5(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec5 trix(in vec5 c, in vec5 p, in vec5 t, in vec2 a) {
  return vec5(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 6
vec6 mix(in vec6 a, in vec6 b, in float t) {
  return vec6(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec6 trix(in vec6 c, in vec6 p, in vec6 t, in vec2 a) {
  return vec6(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 7
vec7 mix(in vec7 a, in vec7 b, in float t) {
  return vec7(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec7 trix(in vec7 c, in vec7 p, in vec7 t, in vec2 a) {
  return vec7(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 8
vec8 mix(in vec8 a, in vec8 b, in float t) {
  return vec8(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec8 trix(in vec8 c, in vec8 p, in vec8 t, in vec2 a) {
  return vec8(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 9
vec9 mix(in vec9 a, in vec9 b, in float t) {
  return vec9(mix(a.v, b.v, t), mix(a.u, b.u, t), mix(a.t, b.t, t));
}
vec9 trix(in vec9 c, in vec9 p, in vec9 t, in vec2 a) {
  return vec9(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a), trix(c.t, p.t, t.t, a));
}
#endif

float len(in vec2 v) {
  return length(v);
}

float len(in vec3 v) {
  return length(v);
}

float len(in vec4 v) {
  return length(v);
}

#if DIMENSIONS == 5
float len(in vec5 v) {
  return sqrt(dot(v.v, v.v) + v.u * v.u);
}
#elif DIMENSIONS == 6
float len(in vec6 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 7
float len(in vec7 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 8
float len(in vec8 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 9
float len(in vec9 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u) + v.t * v.t);
}
#endif

float xdot(in vec2 v) {
  return v.x * v.x + curvature * v.y * v.y;
}

float xdot(in vec3 v) {
  return dot(v.xy, v.xy) + curvature * v.z * v.z;
}

float xdot(in vec4 v) {
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
}

#if DIMENSIONS == 5
float xdot(in vec5 v) {
  return dot(v.v, v.v) + curvature * v.u * v.u;
}
#elif DIMENSIONS == 6
float xdot(in vec6 v) {
  return dot(v.v, v.v) + v.u.x * v.u.x + curvature * v.u.y * v.u.y;
}
#elif DIMENSIONS == 7
float xdot(in vec7 v) {
  return dot(v.v, v.v) + dot(v.u.xy, v.u.xy) + curvature * v.u.z * v.u.z;
}
#elif DIMENSIONS == 8
float xdot(in vec8 v) {
  return dot(v.v, v.v) + dot(v.u.xyz, v.u.xyz) + curvature * v.u.w * v.u.w;
}
#elif DIMENSIONS == 9
float xdot(in vec9 v) {
  return dot(v.v, v.v) + dot(v.u, v.u) + curvature * v.t * v.t;
}
#endif

#if DIMENSIONS >= 5
float ndot(in vec5 v, in vec5 w) {
  return dot(v.v, w.v) + v.u * w.u;
}
#endif
#if DIMENSIONS >= 6
float ndot(in vec6 v, in vec6 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
#endif
#if DIMENSIONS >= 7
float ndot(in vec7 v, in vec7 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
#endif
#if DIMENSIONS >= 8
float ndot(in vec8 v, in vec8 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
#endif
#if DIMENSIONS >= 9
float ndot(in vec9 v, in vec9 w) {
  return dot(v.v, w.v) + dot(v.u, w.u) + v.t * w.t;
}
#endif

vec3 inflate(in vec3 point, in vecN pos, in vec3 norm, in float size, in float min) {
  // Removing 3d length in perspective computation
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION3 == -1
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif

  float inv = max(min, 1. / len(pos));

  return size * SCALING * norm * inv + point;
}
`,Mv=`#include helpers
#include ease

vec2 xnormalize(in vec2 v) {
  if(curvature == 0.0 || length(v) < 1e-9) {
    return v;
  }
  // Unalias?
  // v.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec3 xnormalize(in vec3 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.w *= .999999;
  // float d = curvature * xdot(v);
  // if(d < 0.) {
  //   v.w = 0.;
  //   v.xyz /= sqrt(dot(v.xyz, v.xyz));
  //   return v;
  // }
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

#if DIMENSIONS == 5
vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec5(v.v / n, v.u / n);
}
#elif DIMENSIONS == 6
vec6 xnormalize(in vec6 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.x *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec6(v.v / n, v.u / n);
}
#elif DIMENSIONS == 7
vec7 xnormalize(in vec7 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec7(v.v / n, v.u / n);
}
#elif DIMENSIONS == 8
vec8 xnormalize(in vec8 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec8(v.v / n, v.u / n);
}
#elif DIMENSIONS == 9
vec9 xnormalize(in vec9 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.t *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec9(v.v / n, v.u / n, v.t / n);
}
#endif

vec4 viewProject(vec3 position) {
  #if DIMENSIONS == 3 && PROJECTION3 != -1
  vec4 normalProjection = viewProjection * vec4(position, 1.);
  vec4 flatProjection = viewProjection * vec4(position.xy, 0., 1.);
  return vec4(flatProjection.xy / flatProjection.w, normalProjection.z / normalProjection.w, 1.);
  #else
  return viewProjection * vec4(position, 1.);
  #endif
}

float p(in float v) {
  return max(1e-9, v);
}

#if DIMENSIONS >= 3
#if PROJECTION3 > 3
#include complex
#endif

vec3 project(in vec3 v, in float k) {
  float nr = p(v.z + k);
  return vec3(v.xy / nr, v.z);
}
#endif
#if DIMENSIONS >= 4
vec3 project(in vec4 v, in float k) {
  float nr = fov4 / p(v.w + k);
  return v.xyz * nr;
}
#endif
#if DIMENSIONS >= 5
vec4 project(in vec5 v, in float k) {
  float nr = fov5 / p(v.u + k);
  return v.v * nr;
}
#endif
#if DIMENSIONS >= 6
vec5 project(in vec6 v, in float k) {
  float nr = fov6 / p(v.u.y + k);
  return vec5(v.v * nr, v.u.x * nr);
}
#endif
#if DIMENSIONS >= 7
vec6 project(in vec7 v, in float k) {
  float nr = fov7 / p(v.u.z + k);
  return vec6(v.v * nr, v.u.xy * nr);
}
#endif
#if DIMENSIONS >= 8
vec7 project(in vec8 v, in float k) {
  float nr = fov8 / p(v.u.w + k);
  return vec7(v.v * nr, v.u.xyz * nr);
}
#endif
#if DIMENSIONS >= 9
vec8 project(in vec9 v, in float k) {
  float nr = fov9 / p(v.t + k);
  return vec8(v.v * nr, v.u * nr);
}
#endif

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

#if DIMENSIONS >= 3
vec3 xproject(in vec3 v) {
  #if PROJECTION3 == 0 // STEREOGRAPHIC
  return project(v, 1.);
  #elif PROJECTION3 == 1 // ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #elif PROJECTION3 == 2 // KLEIN
  return project(v, 0.);
  #elif PROJECTION3 == 3 // INVERTED
  return project(v, -1.);
  #elif PROJECTION3 == 4 // JOUKOWSKY
  vec2 z = project(v, 1.).xy;
  return vec3(.5 * (z + cinv(z)), 0.);
  #elif PROJECTION3 == 5 // UPPERHALF
  v.xy /= v.z;
  v.z = 1. / v.z;
  v.xz *= 2. / p(1. - v.y);
  v.z -= 1.;
  return vec3(v.xz, 0.);
  #elif PROJECTION3 == 6 // BAND
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3((2. / PI) * ((clog(cone + z)) - clog(cone - z)), v.z);
  #elif PROJECTION3 == 7 // CROSS
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  // Sum of angles
  // float o = -.5 * PI;
  // vec2 a = vec2(cos(o), sin(o));
  return vec3((2. / PI) * .5 * (clog(cone + z) - clog(cone - z) + cmul(ci, clog(cone - cmul(ci, z))) + cmul(-ci, clog(cone - cmul(-ci, z)))), v.z);
  #elif PROJECTION3 == 8 // HEART
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(-z.y * z.x + z.x, -.5 * (z.y * z.y - z.x * z.x - 2. * z.y - 0.75), v.z);
  #elif PROJECTION3 == 9 // TEARDROP
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(sign(z.x) *
    sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) - (1. - z.y)) / 2.), -(sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) + (1. - z.y)) / 2.) - 0.75), v.z);
  #elif PROJECTION3 == 10 // SQUARE
  float Ke = 1.854;
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  z = cmul(conei / sqrt(2.), z);
  z = cacos(z);
  vec2 w = ellipticFi(z, .5);
  if(z.x > PI / 2.) {
    w.x = 2. * Ke - w.x;
  }
  w = cmul(vec2(1., -1.) / -Ke, w) + vec2(1., -1.);
  return vec3(w, v.z);
  #elif PROJECTION3 == 11 // RING
  vec2 z = project(v, 1.).xy;
  z = (2. / PI) * ((clog(cone + z)) - clog(cone - z));
  float k = 4.;
  float P = 1.1393;
  return vec3(cexp(TAU * cmul(ci, (z.xy + ci)) / (k * P)), v.z);
  // LAMBERT
  // float nr = sqrt(2. / (1. + v.z));
  // return vec3(v.xy * nr, 0.);
  #elif PROJECTION3 == 12 // SINUSOIDAL
  vec2 z = project(v, 1.).xy;
  return vec3(csin(1.5 * z), v.z);
  #elif PROJECTION3 >= 13 // TRIANGLE  

  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  vec2 w = sc(z, PROJECTION3 - 10);
  // Rotate by PI / 4
  #if PROJECTION3 == 14
  w = cmul(w, cexp(ci * PI / 4.));
  #elif PROJECTION3 == 15
  w = cmul(w, cexp(ci * PI / 10.));
  #endif
  return vec3(w, v.z);

  // LAMBERT
  // float nr = sqrt(2. / (1. + v.z));
  // return vec3(v.xy * nr, 0.);
  #else
  return v;
  #endif
}
#endif

#if DIMENSIONS >= 4
vec3 xproject(in vec4 v) {
  #if PROJECTION4 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION4 == 1 // ORTHOGRAPHIC
  return xproject(v.xyz * fov4);
  #elif PROJECTION4 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION4 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION4 == 4 // JOUKOWSKY
  vec3 z = project(v, 1.);
  float r = length(z);
  float nr = 1. / (r * r);
  float k = 2. / 3.;
  return xproject(vec3(-k * (r - nr), k * (r / 2. + nr), k * (r / 2. + nr)) * z);
  #elif PROJECTION4 == 5 // UPPERHALF
  v.xyz /= v.w;
  v.w = 1. / v.w;
  v.yzw *= 2. / p(1. + v.x);
  v.w -= 1.;
  return xproject(v.ywz);
  #else
  return xproject(project(v, zoom));
  #endif
}
#endif

#if DIMENSIONS >= 5
vec3 xproject(in vec5 v) {
  #if PROJECTION5 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION5 == 1 // ORTHOGRAPHIC
  return xproject(v.v * fov5);
  #elif PROJECTION5 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION5 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION5 == 4 // JOUKOWSKY
  vec4 z = project(v, 1.);
  float r = length(z);
  float nr = 1. / (r * r * r);
  float k = 3. / 4.;
  return xproject(vec4(-k * (r - nr), k * (r / 3. + nr), k * (r / 3. + nr), k * (r / 3. + nr)) * z);
  #elif PROJECTION5 == 5 // UPPERHALF
  v.v /= v.u;
  v.u = 1. / v.u;
  v.v.yzw *= 2. / p(1. + v.v.x);
  v.u *= 2. / p(1. + v.v.x);
  v.u -= 1.;
  return xproject(vec4(v.v.y, v.u, v.v.w, v.v.z));
  #else
  return xproject(project(v, zoom));
  #endif
}
#endif

#if DIMENSIONS >= 6
vec3 xproject(in vec6 v) {
  #if PROJECTION6 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION6 == 1 // ORTHOGRAPHIC
  return xproject(vec5(v.v * fov6, v.u.x * fov6));
  #elif PROJECTION6 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION6 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION6 == 4 // JOUKOWSKY
  vec5 z = project(v, 1.);
  float nr = 1. / ndot(z, z);
  return xproject(vec5(z.v * vec4(1. + nr, 1. - nr, 1. + nr, 1. - nr), z.u * (1. + nr)));
  #elif PROJECTION6 == 5 // UPPERHALF
  v.v /= v.u.y;
  v.u.x /= v.u.y;
  v.u.y = 1. / v.u.y;

  v.v.yzw *= 2. / p(1. + v.v.x);
  v.u.x *= 2. / p(1. + v.v.x);
  v.u.x -= 1.;
  return xproject(vec5(vec4(v.v.y, v.u.y, v.u.x, v.v.w), v.v.z));
  #else
  return xproject(project(v, zoom));
  #endif
}
#endif

#if DIMENSIONS >= 7
vec3 xproject(in vec7 v) {
  #if PROJECTION7 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION7 == 1 // ORTHOGRAPHIC
  return xproject(vec6(v.v * fov7, v.u.xy * fov7));
  #elif PROJECTION7 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION7 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION7 == 4 // JOUKOWSKY
  vec6 z = project(v, 1.);
  float nr = 1. / ndot(z, z);
  return xproject(vec6(z.v * vec4(1. + nr, 1. - nr, 1. + nr, 1. - nr), z.u.xy * vec2(1. + nr, 1. - nr)));
  #elif PROJECTION7 == 5 // UPPERHALF
  v.v /= v.u.z;
  v.u.xy /= v.u.z;
  v.u.z = 1. / v.u.z;

  v.v.yzw *= 2. / p(1. + v.v.x);
  v.u.xy *= 2. / p(1. + v.v.x);
  v.u.y -= 1.;
  return xproject(vec6(vec4(v.v.y, v.u.zyx), v.v.wz));
  #else
  return xproject(project(v, zoom));
  #endif
}
#endif

#if DIMENSIONS >= 8
vec3 xproject(in vec8 v) {
  #if PROJECTION8 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION8 == 1 // ORTHOGRAPHIC
  return xproject(vec7(v.v * fov8, v.u.xyz * fov8));
  #elif PROJECTION8 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION8 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION8 == 4 // JOUKOWSKY
  vec7 z = project(v, 1.);
  float nr = 1. / ndot(z, z);
  return xproject(vec7(z.v * vec4(1. + nr, 1. - nr, 1. + nr, 1. - nr), z.u.xyz * vec3(1. + nr, 1. - nr, 1. + nr)));
  #elif PROJECTION8 == 5 // UPPERHALF
  v.v /= v.u.w;
  v.u.xyz /= v.u.w;
  v.u.w = 1. / v.u.w;

  v.v.yzw *= 2. / p(1. + v.v.x);
  v.u.xyz *= 2. / p(1. + v.v.x);
  v.u.z -= 1.;
  return xproject(vec7(vec4(v.v.y, v.u.wzy), vec3(v.u.x, v.v.wz)));
  #else
  return xproject(project(v, zoom));
  #endif
}
#endif

#if DIMENSIONS >= 9
vec3 xproject(in vec9 v) {
  #if PROJECTION9 == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION9 == 1 // ORTHOGRAPHIC
  return xproject(vec8(v.v * fov9, v.u * fov9));
  #elif PROJECTION9 == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION9 == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION9 == 4 // JOUKOWSKY
  vec8 z = project(v, 1.);
  float nr = 1. / ndot(z, z);
  return xproject(vec8(z.v * vec4(1. + nr, 1. - nr, 1. + nr, 1. - nr), z.u * vec4(1. + nr, 1. - nr, 1. + nr, 1. - nr)));
  #elif PROJECTION9 == 5 // UPPERHALF
  v.v /= v.t;
  v.u /= v.t;
  v.t = 1. / v.t;

  v.v.yzw *= 2. / p(1. + v.v.x);
  v.u.xyzw *= 2. / p(1. + v.v.x);
  v.t -= 1.;
  return xproject(vec8(vec4(v.v.y, v.t, v.u.wz), vec4(v.u.yx, v.v.wz)));
  #else
  return xproject(project(v, zoom));
  #endif
}
#endif

#if DIMENSIONS == 5
vec5 fromMat(in mat3 m) {
  return vec5(vec4(m[0], m[1][0]), m[1][1]);
}
#elif DIMENSIONS == 6
vec6 fromMat(in mat3 m) {
  return vec6(vec4(m[0], m[1][0]), vec2(m[1][1], m[1][2]));
}
#elif DIMENSIONS == 7
vec7 fromMat(in mat3 m) {
  return vec7(vec4(m[0], m[1][0]), vec3(m[1][1], m[1][2], m[2][0]));
}
#elif DIMENSIONS == 8
vec8 fromMat(in mat3 m) {
  return vec8(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]));
}
#elif DIMENSIONS == 9
vec9 fromMat(in mat3 m) {
  return vec9(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]), m[2][2]);
}
#endif
#if DIMENSIONS == 5
vec5 multiplyMatrix(mat5 m, vec5 v) {
  return vec5(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), ndot(m.c5, v));
}
#elif DIMENSIONS == 6
vec6 multiplyMatrix(mat6 m, vec6 v) {
  return vec6(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec2(ndot(m.c5, v), ndot(m.c6, v)));
}
#elif DIMENSIONS == 7
vec7 multiplyMatrix(mat7 m, vec7 v) {
  return vec7(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec3(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v)));
}
#elif DIMENSIONS == 8
vec8 multiplyMatrix(mat8 m, vec8 v) {
  return vec8(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec4(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v), ndot(m.c8, v)));
}
#elif DIMENSIONS == 9
vec9 multiplyMatrix(mat9 m, vec9 v) {
  return vec9(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec4(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v), ndot(m.c8, v)), ndot(m.c9, v));
}
#endif
`,Av=`const vec2 cone = vec2(1., 0);
const vec2 ci = vec2(0., 1.);
const vec2 conei = vec2(1., 1.);

vec2 cmul(vec2 z, vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

vec2 cinv(vec2 z) {
  return z * vec2(1, -1) / dot(z, z);
}

vec2 cdiv(in vec2 z0, in vec2 z1) {
  return cmul(z0, cinv(z1));
}

vec2 expi(in float x) {
  return vec2(cos(x), sin(x));
}

vec2 cexp(in vec2 z) {
  return exp(z.x) * expi(z.y);
}

vec2 csqrt(in vec2 z) {
  float r = length(z);
  return vec2(sqrt(0.5 * (r + z.x)), sign(z.y) * sqrt(0.5 * (r - z.x)));
}

vec2 clog(in vec2 z) {
  return vec2(log(length(z)), atan(z.y, z.x));
}

vec2 csin(in vec2 z) {
  return cdiv(cexp(vec2(-z.y, z.x)) - cexp(vec2(z.y, -z.x)), vec2(0, 2.0));
}

vec2 cpow(in vec2 z, in float k) {
  return cexp(k * clog(z));
}

vec2 cacos(in vec2 z) {
  return -cmul(ci, clog(z + cmul(ci, csqrt(cone - cmul(z, z)))));
}

void sncndn(
  float u,
  float k2,
  out float sn,
  out float cn,
  out float dn
) {
  float emc = 1.0 - k2;
  float a, b, c;
  const int N = 4;
  float em[N], en[N];
  a = 1.0;
  dn = 1.0;
  for(int i = 0; i < N; i++) {
    em[i] = a;
    emc = sqrt(emc);
    en[i] = emc;
    c = 0.5 * (a + emc);
    emc = a * emc;
    a = c;
  }
  // Nothing up to here depends on u, so
  // could be precalculated.
  u = c * u;
  sn = sin(u);
  cn = cos(u);
  if(sn != 0.0) {
    a = cn / sn;
    c = a * c;
    for(int i = N - 1; i >= 0; i--) {
      b = em[i];
      a = c * a;
      c = dn * c;
      dn = (en[i] + a) / (b + a);
      a = c / b;
    }
    a = 1.0 / sqrt(c * c + 1.0);
    if(sn < 0.0)
      sn = -a;
    else
      sn = a;
    cn = c * sn;
  }
}

vec2 sn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(snu * dnv, cnu * dnu * snv * cnv);
}

vec2 cn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(cnu * cnv, -snu * dnu * snv * dnv);
}

vec2 dn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(dnu * cnv * dnv, -k2 * snu * cnu * snv);
}
const float P[11] = float[](1.37982864606273237150E-4, 2.28025724005875567385E-3, 7.97404013220415179367E-3, 9.85821379021226008714E-3, 6.87489687449949877925E-3, 6.18901033637687613229E-3, 8.79078273952743772254E-3, 1.49380448916805252718E-2, 3.08851465246711995998E-2, 9.65735902811690126535E-2, 1.38629436111989062502E0);
const float Q[11] = float[](2.94078955048598507511E-5, 9.14184723865917226571E-4, 5.94058303753167793257E-3, 1.54850516649762399335E-2, 2.39089602715924892727E-2, 3.01204715227604046988E-2, 3.73774314173823228969E-2, 4.88280347570998239232E-2, 7.03124996963957469739E-2, 1.24999999999870820058E-1, 4.99999999999999999821E-1);

float polevl(float x, float[11] coef) {
  float ans = coef[0];

  for(int i = 0; i < 11; i++) {
    ans = ans * x + coef[i];
  }
  return ans;
}

float ellpk(in float x) {
  if(x > 0.) {
    return (polevl(x, P) - log(x) * polevl(x, Q));
  } else {
    return (1.3862943611198906188E0 - 0.5 * log(x));
  }
}

float ellik(in float phi, in float m) {
  float a = 1.;
  float b = sqrt(1. - m);
  float c = sqrt(m);
  float d = 1.;
  for(int i = 0; abs(c) > 1e-6; i++) {
    if(mod(phi, PI) != 0.) {
      float dPhi = atan((b * tan(phi)), a);
      if(dPhi < 0.) {
        dPhi += PI;
      }
      phi += dPhi + floor(phi / PI) * PI;
    } else {
      phi += phi;
    }
    c = (a + b) / 2.;
    b = sqrt(a * b);
    a = c;
    c = (a - b) / 2.;
    d += d;
  }
  return phi / (d * a);
}

float ellipticF(in float phi, in float m) {
  float b = sqrt(1. - m);
  float t = tan(phi);

  if(abs(t) > 10.) {
    float e = 1.0 / (b * t);
    phi = atan(e);
    return ellpk(1. - m) - ellik(phi, m);
  }
  return ellik(phi, m);
}

vec2 ellipticFi(in vec2 z, in float m) {
  float r = abs(z.x);
  float i = abs(z.y);
  if(r == 0.) {
    return vec2(0., ellipticF(0., 1. - m) * sign(z.y));
  }
  if(abs(r - ETA) < .001) {
    r = ETA - .001;
  }

  float sinhPsi2 = pow(sinh(i), 2.);
  float cscPhi2 = 1. / (sin(r) * sin(r));
  float cotPhi2 = 1. / (tan(r) * tan(r));
  float b = -(cotPhi2 + m * (sinhPsi2 * cscPhi2) - 1. + m);
  float c = (m - 1.) * cotPhi2;
  float cotLambda2 = (-b + sqrt(max(0., b * b - 4. * c))) / 2.;
  r = ellipticF(atan(1. / sqrt(max(0., cotLambda2))), m) * sign(z.x);
  i = ellipticF(atan(sqrt(max(0., (cotLambda2 / cotPhi2 - 1.) / m))), 1. - m) * sign(z.y);
  return vec2(r, i);
}
float gamma(float z) {
  const float[8] p = float[](676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7);
  z -= 1.0;
  float x = 0.99999999999980993; // Unnecessary precision
  for(int i = 0; i < 8; i++) {
    float pval = p[i];
    x += pval / (z + float(i + 1));
  }
  float t = z + 8.0 - 0.5;
  return sqrt(2.0 * PI) * pow(t, z + 0.5) * exp(-t) * x;
}
float B(float a, float b) {
  return (gamma(a) * gamma(b)) / gamma(a + b);
}

float binomial(float a, int n) {
  float s = 1.0;
  for(int i = n; i >= 1; i--, a--) {
    s *= float(a) / float(i);
  }
  return s;
}

vec2 sc(vec2 w, int K) {
  // https://fr.scribd.com/document/480603019/circletopolygon 2.14
  vec2 sum = vec2(0.);
  for(int n = 0; n <= 6; n++) {
    sum += binomial(float(n) - 1.0 + 2.0 / float(K), n) / float(1 + n * K) * cpow(w, float(n * K));
  }
  return cmul(w, sum);
}

vec2 sc2(vec2 w, int K) {
  // https://fr.scribd.com/document/480603019/circletopolygon A
  float Kinv = 1. / float(K);
  float k = 0.;
  vec2 zk = (1. - Kinv) * B(1. + Kinv, 1. - 2. * Kinv) * cexp(TAU * k * Kinv * ci);

  vec2 sum = vec2(0.);
  for(int n = 0; n <= 6; n++) {
    sum += binomial(float(n) - 1.0 * Kinv, n) / float(1 + n - 2 / K) * cpow(cone - cpow(w, float(K)), 1. + float(n) - 2. * Kinv);
  }
  return cmul(zk, 1. - (1. / B(1. - 2. * Kinv, Kinv)) * sum);
}
`,Fv=`vec4 light(vec4 color, float ambient, float shininess) {
  #ifdef LIGHTING
  vec3 eyeDirection = eye - vPosition;
  float distance = length(eyeDirection);
  float attenuation = 1. / (1. + distance * distance * .01);
  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;
  float diffuse = abs(dot(vNormal, lightDirection));
  #if LIGHTING == 0
  // Lambert
  float specular = 0.;

  #elif LIGHTING == 1
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, vNormal);
  float specular = pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif LIGHTING == 2
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  float specular = pow(abs(dot(vNormal, halfVector)), shininess);

  #elif LIGHTING == 3
  // Toon
  float specular = 0.;
  diffuse = floor(diffuse * 4.) / 4.;
  #endif

  return vec4((ambient + diffuse + specular) * attenuation * color.rgb, color.a);
  #else
  return color;
  #endif
}
`,pl=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},Yr=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let i=0;i<n[0].length;i++){let o=0;for(let l=0;l<n.length;l++)o+=e[r][l]*n[l][i];t[r][i]=o}}return t},hl=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let o=0;o<e[0].length;o++)i+=e[r][o]*n[o];t[r]=i}return t},Qp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},Ge=e=>{const n=new Array(e);for(let t=0;t<e;t++)n[t]=new Array(e).fill(0),n[t][t]=1;return n},Dv=e=>e.every((n,t)=>n.every((r,i)=>t===i||e[t][i]===0)),Lv=e=>{const n=e[0].length;let t=e.map(o=>o.slice()),r=Ge(n),i=1e3;for(;!Dv(t)&&i-- >0;){let o=0,l=1;for(let a=0;a<n;a++)for(let d=0;d<n;d++)a!==d&&We(t[a][d])>We(t[o][l])&&(o=a,l=d);const u=t[o][o]===t[l][l]?fu(t[o][l])*Fe/4:.5*Yv(2*t[o][l]/(t[o][o]-t[l][l])),s=Ge(n);s[l][l]=s[o][o]=Ye(u),s[l][o]=s[o][l]=-Be(u),s[l][o]*=-1,r=Yr(r,s),t=Yr(Yr(pl(s),t),s)}return{vectors:r,values:t.map((o,l)=>We(o[l])<1e-8?0:o[l])}},Uv=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...Ge(n)[r]]);for(let r=0;r<n;r++){const i=t[r][r];for(let o=r+1;o<n;o++){const l=t[o][r]/i;for(let u=r;u<2*n;u++)t[o][u]-=l*t[r][u]}}for(let r=n-1;r>=0;r--){const i=t[r][r];for(let o=r-1;o>=0;o--){const l=t[o][r]/i;for(let u=0;u<2*n;u++)t[o][u]-=l*t[r][u]}for(let o=n;o<2*n;o++)t[r][o]/=i}return t.map(r=>r.slice(n))},ki=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},$v=(e,n,t,r,i=1)=>{const o=i/Jc(e/2),l=1/(t-r),u=Ge(4);return u[0][0]=o/n,u[1][1]=o,u[2][2]=(r+t)*l,u[3][2]=-1,u[2][3]=2*r*t*l,u[3][3]=0,u},Bv=(e,n,t)=>{if(We(e[0]-n[0])<1e-4&&We(e[1]-n[1])<1e-4&&We(e[2]-n[2])<1e-4)return Ge(4);let r=e[0]-n[0],i=e[1]-n[1],o=e[2]-n[2],l=1/U(r*r+i*i+o*o);r*=l,i*=l,o*=l;let u=t[1]*o-t[2]*i,s=t[2]*r-t[0]*o,a=t[0]*i-t[1]*r;l=U(u*u+s*s+a*a),l?(l=1/l,u*=l,s*=l,a*=l):(u=0,s=0,a=0);let d=i*a-o*s,c=o*u-r*a,f=r*s-i*u;l=U(d*d+c*c+f*f),l?(l=1/l,d*=l,c*=l,f*=l):(d=0,c=0,f=0);const p=Ge(4);return p[0][0]=u,p[1][0]=d,p[2][0]=r,p[0][1]=s,p[1][1]=c,p[2][1]=i,p[0][2]=a,p[1][2]=f,p[2][2]=o,p[0][3]=-(u*e[0]+s*e[1]+a*e[2]),p[1][3]=-(d*e[0]+c*e[1]+f*e[2]),p[2][3]=-(r*e[0]+i*e[1]+o*e[2]),p},Ns=(e,n)=>e.map((t,r)=>t.map((i,o)=>i<0?-Xv(-i/10):i===0?-1:-Ye(n[r][o]*Fe/i))),Gc=e=>{const n=Lv(e);return{"+":n.values.filter(t=>t>0).length,"-":n.values.filter(t=>t<0).length,0:n.values.filter(t=>t===0).length,eigens:n}},Kc=(e,n=[],t=0,r=2)=>{n[t]=n[t]||[];for(let i=0;i<e.length;i++){const o=e.filter((l,u)=>u!==i).map(l=>l.filter((u,s)=>s!==i));n[t].push(Gc(o)),o.length>1&&t+1<r&&Kc(o,n,t+1)}return n},ks=e=>{const n=Gc(e),t=n.eigens;if(n["-"]===0&&n[0]===0)return{type:"finite",curvature:1,eigens:t};if(n["-"]===0&&n[0]>0)return{type:"affine",curvature:0,eigens:t};if(n["-"]>1)return{type:"hyperbolic",subtype:"superhyperbolic",level:n["-"],curvature:-1,eigens:t};const r=Kc(e),i=r[0];if(i.every(o=>o["-"]===0&&o[0]===0))return{type:"hyperbolic",subtype:"compact",curvature:-1,eigens:t};if(i.every(o=>o["-"]===0))return{type:"hyperbolic",subtype:"paracompact",curvature:-1,eigens:t};for(let o=1;o<r.length;o++)if(r[o].every(u=>u["-"]===0))return{type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:o+1,eigens:t};return{type:"indefinite",curvature:-1,eigens:t}},Bi=(e,n,t)=>{let r=0;for(let i=0;i<e.length;i++)r+=e[i]*n[i]*(i===e.length-1&&t||1);return r},Qc=(e,n)=>Bi(e,e,n),Hv=(e,n,t)=>{e=e.slice();const r=2*Bi(e,n,t);for(let i=0;i<e.length;i++)e[i]-=r*(t||i!==e.length-1?n[i]:0);return e},Wn=(e,n)=>{if(e=e.slice(),n===0){for(let r=0;r<e.length;r++)e[r]/=e[e.length-1];return e}const t=(n===-1&&fu(e[e.length-1])||1)/U(_n(1e-32,We(Qc(e,n))));for(let r=0;r<e.length;r++)e[r]*=t;return e},Jp=e=>e.sort((n,t)=>{const[r,i]=n,[o,l]=t;return r===0&&i===1?1:o===0&&l===1||r<2&&o>=2?-1:o<2&&r>=2?1:r<2&&o<2?i===l?o-r:i-l:r===o?l-i:o-r}),Xp=(e,n,t,r,i)=>{const o=Ge(r);if(n>t.length-1||We(e)>1)return o;const[l,u]=t[n],s=u===r-1&&i||1,a=U(1-s*e*e),d=e;return o[l][l]=a,o[u][u]=a,o[l][u]=-s*d,o[u][l]=d,o},Vv=(e,n,t,r)=>{const i=n[0].length,o=new Array(i).fill().map(()=>new Array(i).fill(0));o[e][0]=1;for(let u=1;u<i;u++){const s=(u+e)%i;for(let a=0;a<u;a++){const d=(a+e)%i;o[s][a]=(n[s][d]-Bi(o[s].slice(0,a),o[d].slice(0,a)))/o[d][a]}if(o[s][u]=U(We(1-Qc(o[s].slice(0,u)))),o[s][u]<1e-6&&u<i-1&&!r)return null}const l=(i-1+e)%i;return t===0?o[l][i-1]=.5:o[l][i-1]*=t,o},Wv=(e,n,t=!1)=>{const r=e[0].length;let i=null;const o=e.every((l,u)=>l.every((s,a)=>u===a||s<=-1));if(t||o){if(i=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const l=(e[0][1]+1)/2;return i[0][0]=U(l-e[0][1]),i[1][0]=-U(l-e[0][1]),i[0][1]=i[1][1]=U((n||1)*l),n===0&&(i[1][1]=.5),i}else if(r===3){const l=e[0][1],u=e[1][2],s=e[0][2],a=(l*l+u*u+s*s-2*l*u*s-1)/(l*l+u*u+s*s-2*l*u-2*l*s-2*u*s+2*l+2*u+2*s-3);return i[0][2]=i[1][2]=i[2][2]=n*U(n*a),i[2][1]=-U(1-a),i[1][1]=(u-a)/i[2][1],i[0][1]=(s-a)/i[2][1],i[1][0]=-U(1-i[1][1]**2-a),i[0][0]=U(1-i[0][1]**2-a),n===0&&(i[2][2]=.5),i}else if(r===4){const l=e[0][1],u=e[1][2],s=e[2][3],a=e[0][2],d=e[1][3],c=e[0][3],f=(l*l*s*s+u*u*c*c+a*a*d*d-l*l-u*u-s*s-a*a-d*d-c*c+2*l*d*c+2*l*u*a+2*u*s*d+2*s*a*c-2*u*a*d*c-2*l*u*s*c-2*l*s*a*d+1)/(2*(l*l*s+u*u*c+s*s*l+a*a*d+d*d*a+c*c*u-l*l-u*u-s*s-a*a-d*d-c*c-l*u*s-l*u*c-l*s*a-l*s*d-l*s*c-l*a*d-u*s*c-u*a*d-u*a*c-u*d*c-s*a*d-a*d*c+l*u*a+l*d*c+u*s*d+s*a*c+l*u+l*a+l*d+l*c+u*s+u*a+u*d+s*a+s*d+s*c+a*c+d*c-l-u-s-a-d-c+2));return i[0][3]=i[1][3]=i[2][3]=i[3][3]=n*U(n*f),i[3][2]=-U(1-f),i[2][2]=(s-f)/i[3][2],i[1][2]=(d-f)/i[3][2],i[0][2]=(c-f)/i[3][2],i[2][1]=-U(1-f-i[2][2]**2),i[1][1]=(u-f-i[1][2]*i[2][2])/i[2][1],i[0][1]=(a-f-i[0][2]*i[2][2])/i[2][1],i[1][0]=-U(1-f-i[1][1]**2-i[1][2]**2),i[0][0]=U(1-f-i[0][1]**2-i[0][2]**2),n===0&&(i[3][3]=.5),i}if(e.every((l,u)=>l.every((s,a)=>u===a||s===-1))){const l=[0];for(let u=1;u<r;u++)l[u]=(l[u-1]+1)/(3-l[u-1]);i[0][0]=1,i[1][0]=-1,i[0][1]=U(l[1]),i[1][1]=U(l[1]);for(let u=0;u<r;u++)for(let s=0;s<r;s++)u<2&&s<2||(i[u][s]=s<u-1?0:s===u-1?-(u*U(l[s]-l[s-1])):s<r-1?U(l[s]-l[s-1]):U(l[s-1]));return i}}for(let l=0;l<r&&(i=Vv(l,e,n,l===r-1),!i);l++);if(!i&&!t)return Wv(e,n,!0);if(i&&t){const l=Gv(new Array(r).fill(1),i,n);if(n!==0){const u=Wn(l.slice().map((s,a)=>a===r-1?s-1:s),n);for(let s=0;s<r;s++)i[s]=Hv(i[s],u,n)}}return i},Gv=(e,n,t)=>{let r=e.map(u=>isNaN(u)?1:+u),i=n.slice(),o;for(let u=0;u<r.length&&(o=Uv(i),o.some(s=>s.some(a=>isNaN(a)||We(a)>1e8)));u++){console.warn("Non invertible matrix, retrying by shifting mirrors"),i.push(i.shift()),r.push(r.shift());if(u===r.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const l=hl(o,r);return l[l.length-1]*=t||1,Wn(l,t)},Kv=(e,n,t)=>{const r=[],i=Bi(e,n,t);for(let o=0;o<e.length;o++)r[o]=i*n[o];return r},Qv=(e,n)=>{const t=[];for(let r=0;r<e.length;r++)t[r]=e[r]-n[r];return t},Jv=(e,n)=>{const t=[Wn(e[0],n)];for(let r=1;r<e.length;r++){let i=e[r];for(let o=0;o<r;o++)i=Qv(i,Kv(e[r],t[o],1));t[r]=Wn(i,n)}return t},Yp=(e,n,t)=>{const{curvature:r}=e,i=e.eigens,o=pl(i.vectors),l=_n(...i.values),u=i.values.indexOf(l),s=o[u],a=Ae(...i.values),d=i.values.indexOf(a),c=o[d];s[s.length-1]*=r,c[c.length-1]*=r;const f=pl(n),p=Wn(hl(f,s),r),m=Wn(hl(f,c),r),y=Ge(t),E=[p,m];for(let v=2;v<t;v++)E.push(y[v]);return Jv(E,r)},{abs:We,cos:Ye,sin:Be,tan:Jc,cosh:Xv,sinh:qp,acos:Zp,acosh:bp,atan:Yv,atan2:qv,min:Ae,max:_n,round:e0,sqrt:U,sign:fu,ceil:n0,floor:t0,log:r0,exp:i0,hypot:o0,pow:Zv,PI:Fe}=Math,ml=Fe*2;function*bv(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(i=>e[i]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let i=t[r]+1;r<n;r++,i++)t[r]=i}}const l0=(e,n=2)=>Array.from(bv(e,n)),Xc=e=>String.fromCharCode(97+e),ep=e=>e.charCodeAt(0)-97,qr=e=>e?e*qr(e-1):1,u0=(e,n)=>qr(e)/(qr(n)*qr(e-n)),s0=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},np=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,o)=>e+o*t)};var Yc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(rf,function(){var t=function(){function r(p){return l.appendChild(p.dom),p}function i(p){for(var m=0;m<l.children.length;m++)l.children[m].style.display=m===p?"block":"none";o=p}var o=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(p){p.preventDefault(),i(++o%l.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,d=r(new t.Panel("FPS","#0ff","#002")),c=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=r(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:l,addPanel:r,showPanel:i,begin:function(){u=(performance||Date).now()},end:function(){a++;var p=(performance||Date).now();if(c.update(p-u,200),p>s+1e3&&(d.update(1e3*a/(p-s),100),s=p,a=0,f)){var m=performance.memory;f.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){u=this.end()},domElement:l,setMode:i}};return t.Panel=function(r,i,o){var l=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),d=80*a,c=48*a,f=3*a,p=2*a,m=3*a,y=15*a,E=74*a,h=30*a,v=document.createElement("canvas");v.width=d,v.height=c,v.style.cssText="width:80px;height:48px";var g=v.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=o,g.fillRect(0,0,d,c),g.fillStyle=i,g.fillText(r,f,p),g.fillRect(m,y,E,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m,y,E,h),{dom:v,update:function(x,w){l=Math.min(l,x),u=Math.max(u,x),g.fillStyle=o,g.globalAlpha=1,g.fillRect(0,0,d,y),g.fillStyle=i,g.fillText(s(x)+" "+r+" ("+s(l)+"-"+s(u)+")",f,p),g.drawImage(v,m+a,y,E-a,h,m,y,E-a,h),g.fillRect(m+E-a,y,a,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m+E-a,y,a,s((1-x/w)*h))}}},t})})(Yc);var tp=Yc.exports;const rp=of(tp),ip=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],i=[],o=[],l=[];let u=0;const s=[];for(let a=0;a<=t;a++){const d=[],c=a/t;let f=0;a===0?f=.5/n:a===t&&(f=-.5/n);for(let p=0;p<=n;p++){const m=p/n,y=[-e*Ye(m*ml)*Be(c*Fe),e*Ye(c*Fe),e*Be(m*ml)*Be(c*Fe)];i.push(...y);const E=(y[0]**2+y[1]**2+y[2]**2)**-.5;o.push(...y.map(h=>h*E)),l.push(m+f,1-c),d.push(u++)}s.push(d)}for(let a=0;a<t;a++)for(let d=0;d<n;d++){const c=s[a][d+1],f=s[a][d],p=s[a+1][d],m=s[a+1][d+1];a!==0&&r.push(c,f,m),a!==t-1&&r.push(f,p,m)}return{vertices:i,normals:o,uvs:l,indices:r}},op=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:i=8,segments:o=1}={})=>{const l=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let d=0;const c=[],f=r/2,p=(t-n)/r;for(let m=0;m<=o;m++){const y=[],E=m/o,h=E*(t-n)+n;for(let v=0;v<=i;v++){const g=v/i,x=g*ml,w=Be(x),I=Ye(x),N=[h*w,-E*r+f,h*I];u.push(...N);const k=[w,p,I],A=(k[0]**2+k[1]**2+k[2]**2)**-.5;s.push(...k.map(O=>O*A)),a.push(g,1-E),y.push(d++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<o;y++){const E=c[y][m],h=c[y+1][m],v=c[y+1][m+1],g=c[y][m+1];l.push(E,h,g),l.push(h,v,g)}return{vertices:u,normals:s,uvs:a,indices:l}},lp=({segments:e=3}={})=>{const n=[],t=[],r=[],i=[],o=1/e;for(let l=0;l<e+1;l++)for(let u=0;u<l+1;u++)t.push((2*u-l)*o/2,l*o,0),r.push(0,0,1),i.push(o*u,1-o*l);for(let l=1;l<e+1;l++)for(let u=0;u<l;u++){const s=l*(l+1)/2+u,a=l*(l-1)/2+u;if(n.push(s,a,s+1),l<e){const d=(l+1)*(l+2)/2+u;n.push(d+1,s,s+1)}}return{vertices:t,normals:r,uvs:i,indices:n}},up=e=>e!==""&&e!=="x",Zr=e=>e==="d"||e==="b",qc=e=>e==="s"||e==="b",sp=e=>e==="ß",ap="dsbßx",Fr={active:1,inactive:0,dual:"d",snub:"s",holosnub:"ß",dualsnub:"b",custom:.5,activeVoid:"x",void:""},Zc=e=>e===0?"inactive":e===1?"active":e==="d"?"dual":e==="s"?"snub":e==="ß"?"holosnub":e==="b"?"dualsnub":e==="x"?"activeVoid":e===""?"void":"custom",cp=(e,n,t,r)=>{const i=[],o=[],l=[];for(let s=0;s<e.ranges.face[1];s++){const a=e.face[s],d=new Array(t).fill(0);for(let c=0;c<a.vertices.length;c++){const f=e.vertex[a.vertices[c]];for(let p=0;p<t;p++)d[p]+=f.vertex[p]}for(let c=0;c<t;c++)d[c]/=a.vertices.length;i.push({vertex:Wn(d,r),word:a.word})}const u=new Map;for(let s=0;s<e.ranges.face[1];s++)for(let a=s+1;a<e.ranges.face[1];a++){const d=e.face[s],c=e.face[a];d.vertices.filter(p=>c.vertices.includes(p)).length>1&&(o.push({start:s,end:a,word:d.word}),u.has(s)||u.set(s,[]),u.has(a)||u.set(a,[]),u.get(s).push(a),u.get(a).push(s))}for(let s=0;s<e.ranges.vertex[1];s++){const a=[];for(let f=0;f<e.ranges.face[1];f++)e.face[f].vertices.includes(s)&&a.push(f);const d=[a.shift()];let c=!1;for(;a.length>1;){const f=d[d.length-1],p=u.get(f);if(!p){c=!0;break}const m=a.find(y=>p.includes(y));if(!m){c=!0;break}a.splice(a.indexOf(m),1),d.push(m)}c||(d.push(a[0]),l.push({vertices:d,word:e.vertex[s].word}))}return{vertex:i,edge:o,face:l,ranges:{vertex:[0,i.length],edge:[0,o.length],face:[0,l.length]}}},fp=(e,n,t,r)=>{const i=new Map,o=[],l=[],u=[],s=n.map((c,f)=>qc(c)?Xc(f):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const f=e.vertex[c];f.word.replace(a,"").length%2===1?(f.vertex=NaN,i.set(f.i,[])):o.push(f)}for(let c=0;c<e.ranges.edge[1];c++)if(i.has(e.edge[c].start)){const f=i.get(e.edge[c].start);f.push(e.edge[c].end),f.word||(f.word=e.edge[c].word),i.get(e.edge[c].start).push(e.edge[c].end)}else if(i.has(e.edge[c].end)){const f=i.get(e.edge[c].end);f.push(e.edge[c].start),f.word||(f.word=e.edge[c].word),i.get(e.edge[c].end).push(e.edge[c].start)}else l.push(e.edge[c]);const d=Array.from(i.keys());for(let c=0;c<i.size;c++){const f=d[c],p=i.get(f),m=i.get(f);for(let y=0;y<p.length;y++)for(let E=0;E<m.length;E++)p[y]<=m[E]||l.push({start:p[y],end:m[E],word:m.word})}for(let c=0;c<l.length;c++){const f=l[c];for(let p=0;p<2;p++){const m=p?"start":"end",y=f[m];for(let E=0;E<i.size&&!(d[E]>y);E++)f[m]--}}for(let c=0;c<e.ranges.face[1];c++){const f=e.face[c],p=[];for(let m=0;m<f.vertices.length;m++)i.has(f.vertices[m])||p.push(f.vertices[m]);u.push({...f,vertices:p})}for(let c=0;c<i.size;c++){const f=d[c],p=i.get(f);u.push({vertices:p,word:p.word})}for(let c=0;c<u.length;c++){const f=u[c];for(let p=0;p<f.vertices.length;p++){const m=f.vertices[p];for(let y=0;y<i.size&&!(d[y]>m);y++)f.vertices[p]--}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},dp=(e,n,t,r)=>{const i=[new Map,new Map],o=[],l=[],u=[],s=n.map((c,f)=>c==="ß"?Xc(f):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const f=e.vertex[c];i[f.word.replace(a,"").length%2].set(f.i,[])}o.push(...e.vertex);const d=[new Map,new Map];for(let c=0;c<2;c++){for(let p=0;p<e.ranges.edge[1];p++)if(i[c].has(e.edge[p].start)){d[c].has(e.edge[p].start)||d[c].set(e.edge[p].start,[]);const m=i[c].get(e.edge[p].start);m.push(e.edge[p].end),m.word||(m.word=e.edge[p].word),d[c].get(e.edge[p].start).push(e.edge[p].end)}else if(i[c].has(e.edge[p].end)){d[c].has(e.edge[p].end)||d[c].set(e.edge[p].end,[]);const m=i[c].get(e.edge[p].end);m.push(e.edge[p].start),m.word||(m.word=e.edge[p].word),d[c].get(e.edge[p].end).push(e.edge[p].start)}else l.push(e.edge[p]);const f=Array.from(d[c].keys());for(let p=0;p<d[c].size;p++){const m=f[p],y=d[c].get(m),E=i[c].get(m);for(let h=0;h<y.length;h++)for(let v=0;v<E.length;v++)y[h]<=E[v]||l.push({start:y[h],end:E[v],word:E.word})}}for(let c=0;c<2;c++){const f=Array.from(d[c].keys());for(let p=0;p<e.ranges.face[1];p++){const m=e.face[p],y=[];for(let E=0;E<m.vertices.length;E++)i[c].has(m.vertices[E])||y.push(m.vertices[E]);u.push({...m,vertices:y})}for(let p=0;p<d[c].size;p++){const m=f[p],y=i[c].get(m);u.push({vertices:y,word:y.word})}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},vp=`#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;
out vec4 outColor;

#include lighting

void main() {
  outColor = light(vec4(vColor, 1.f), .2f, 20.f);
}
`,pp=`#version 300 es
precision highp float;

#include globals

uniform mat4 viewProjection;
uniform float curvature;
uniform float segments;
uniform float thickness;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
in vec2 target;
#elif DIMENSIONS == 3
in vec3 position;
in vec3 target;
#elif DIMENSIONS == 4
in vec4 position;
in vec4 target;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  #endif

  float t = ease(uv.y);
  vecN pos = mix(iPosition, iTarget, t);
  vecN next = mix(iPosition, iTarget, t + DT);
  // Position segments on hypersurface
  if(segments > 1.f) {
    pos = xnormalize(pos);
    next = xnormalize(next);
  }

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next) + NOISE;
  vec3 tangent = normalize(proj - nextProj);

  // vec3 norm = cross(nextProj, proj);

  // Find a stable norm for the whole tube
  vecN mid = mix(iPosition, iTarget, .5f);

  vec3 start = xproject(iPosition);
  vec3 end = xproject(iTarget);
  vec3 middle = xproject(xnormalize(mid));
  vec3 norm = cross(end - start, middle - start);

  // If there is no curvature the tube will be straight:
  if(length(norm) < 0.001f) {
    middle += NOISE;
    norm = cross(end - start, middle - start);
  }

  // Rodrigues' rotation formula: rotate norm around tangent by angle r:
  float r = uv.x * TAU;
  norm = normalize(norm * cos(r) + cross(tangent, norm) * sin(r));

  vec3 finalPosition = inflate(proj, pos, norm, thickness, 0.f);

  gl_Position = viewProject(finalPosition);

  vColor = color;
  vPosition = finalPosition;
  vNormal = norm;
}
`,hp=`#version 300 es
precision highp float;

#include config

uniform vec3 eye;
uniform float opacity;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;

#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  return clamp(pow(min(1.0f, a * 10.0f) + 0.01f, 3.0f) * 1e8f * pow(1.0f - z * 0.9f, 3.0f), 1e-2f, 3e3f);
}

#else
out vec4 outColor;
#endif

#include lighting

void main() {
  vec4 color = light(vec4(vColor, opacity), .2f, 40.f);

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
`,mp=`#version 300 es
precision highp float;

#include globals

uniform float curvature;
uniform float segments;
uniform mat4 viewProjection;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
in vec2 target;
in vec2 center;
#elif DIMENSIONS == 3
in vec3 position;
in vec3 target;
in vec3 center;
#elif DIMENSIONS == 4
in vec4 position;
in vec4 target;
in vec4 center;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
in mat3 center;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;
const vec3 up = vec3(0.f, 0.f, 1.f); 

#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  vecN iCenter = multiplyMatrix(matrix, fromMat(center));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  vecN iCenter = matrix * center;
  #endif

  vec2 t = ease(uv);
  vecN pos = trix(iPosition, iTarget, iCenter, t);
  vecN next = trix(iPosition, iTarget, iCenter, t - vec2(DT, NOISE.y));
  vecN other = trix(iPosition, iTarget, iCenter, t - vec2(NOISE.x, DT));

  if(segments > 1.f) {
    pos = xnormalize(pos);
    next = xnormalize(next);
    other = xnormalize(other);
  }

  vec3 proj = xproject(pos);

  vec3 drdx = (xproject(next) - proj);
  vec3 drdy = (xproject(other) - proj);

  // // if |drdx| or |drdy| is too small the norm will vary too much, see horoball example
  // if(length(drdx) < 1e-4f || length(drdy) < 1e-4f) {
  //   next = trix(iPosition, iCenter, iTarget, t + vec2(DT / (1000.f * length(drdx)), 0.f));
  //   other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, DT / (1000.f * length(drdy))));
  //   if(segments > 1.f) {
  //     next = xnormalize(next);
  //     other = xnormalize(other);
  //   }

  //   drdx = (xproject(next) - proj);
  //   drdy = (xproject(other) - proj);
  // }

  vec3 norm = normalize(cross(drdx, drdy));

  gl_Position = viewProject(proj);

  vColor = color;
  vPosition = proj;
  vNormal = norm;
}
`,gp=`#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;
out vec4 outColor;

#include lighting

void main() {
  outColor = light(vec4(vColor, 1.f), .2f, 20.f);
}
`,yp=`#version 300 es
precision highp float;

#include globals

uniform float curvature;
uniform float thickness;
uniform mat4 viewProjection;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
#elif DIMENSIONS == 3
in vec3 position;
#elif DIMENSIONS == 4
in vec4 position;
#elif DIMENSIONS >= 5
in mat3 position;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include project

void main() {
  #if DIMENSIONS > 4
  vecN pos = multiplyMatrix(matrix, fromMat(position));
  #else
  vecN pos = matrix * position;
  #endif
  // pos = xnormalize(pos);

  vec3 proj = xproject(pos);
  proj = inflate(proj, pos, normal, thickness, .01f);

  gl_Position = viewProject(proj);

  vColor = color;
  vPosition = proj;
  vNormal = normal;
}
`,yo={vertex:()=>ip(),edge:e=>op({segments:e}),face:e=>lp({segments:e})};function xp(e){return{meshes:["vertex","edge","face"],...Eo(e,"vertex",yp,gp,yo.vertex,1024,e.dimensions,e.showVertices),...Eo(e,"edge",pp,vp,yo.edge,1024,e.dimensions,e.showEdges,["position","target"]),...Eo(e,"face",mp,hp,yo.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1){for(let r=0;r<this.meshes.length;r++){const i=this.meshes[r],o=this[i];if(!t){o.uniforms.curvature.update(n.curvature),o.uniforms.matrix.update(ki(n.matrix));for(let l=4;l<=n.dimensions;l++)o.uniforms[`fov${l}`].update(1/Jc(Fe*n[`fov${l}`]*.5/180));i==="vertex"?o.uniforms.thickness.update(n.vertexThickness):i==="edge"?(o.uniforms.thickness.update(n.edgeThickness),o.uniforms.segments.update(n.curvature&&n.curve?n.segments:1)):(o.uniforms.segments.update(n.curvature&&n.curve?n.segments:1),o.uniforms.opacity.update(Ln[n.ambiance].opacity))}o.uniforms.viewProjection.update(n.camera.viewProjection),o.uniforms.zoom.update(-n.camera.position[2]),Ln[n.ambiance].lighting&&o.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r,i,o=null){const l=this[t];o=o||i;const{dimensions:u}=n,s=Ln[n.ambiance],[a,d]=r;let c=a,f=d;if(t==="face"){let y=0;for(let E=0;E<a;E++){const h=o[E].vertices.length;y+=h<3?0:h===3?1:h}c=y;for(let E=a;E<d;E++){const h=o[E].vertices.length;y+=h<3?0:h===3?1:h}f=y}l.instances<f&&l.extendAttributes(f),l.count=f;const p=u>4?9:u;let m=c;for(let y=a;y<d;y++){let E=[];const h=o[y];if(t==="vertex")E.push({...h,position:h.vertex,type:t});else if(t==="edge")E.push({...h,position:i[h.start].vertex,target:i[h.end].vertex,type:t});else{if(h.vertices.length<3)continue;if(h.vertices.length===3)E.push({...h,position:i[h.vertices[0]].vertex,target:i[h.vertices[1]].vertex,center:i[h.vertices[2]].vertex});else{const v=new Array(h.vertices.length);for(let x=0;x<h.vertices.length;x++)v[x]=i[h.vertices[x]].vertex;const g=new Array(u).fill(0);for(let x=0;x<v.length;x++){const w=v[x];for(let I=0;I<u;I++)g[I]+=w[I]}for(let x=0;x<u;x++)g[x]/=v.length;for(let x=0;x<v.length;x++){const w={...h,position:v[x],target:v[(x+1)%v.length],center:g};h.word.length%2===(n.curvature>0?0:1)&&([w.position,w.target]=[w.target,w.position]),E.push(w)}}}for(let v=0;v<E.length;v++){const g=E[v];for(let w=0;w<u;w++)for(let I=0;I<l.varying.length;I++){const N=l.varying[I];l.attributes[N].data[m*p+w]=g[N][w]}const x=s.color(g,t,n);l.attributes.color.data[m*3+0]=x[0],l.attributes.color.data[m*3+1]=x[1],l.attributes.color.data[m*3+2]=x[2],m++}for(let v=0;v<l.varying.length;v++){const g=l.varying[v];l.attributes[g].update(c,f)}l.attributes.color.update(c,f)}},preprocess(n,t){return n.mirrors.some(r=>qc(r))&&(t=fp(t,n.mirrors,n.dimensions,n.curvature)),n.mirrors.some(r=>sp(r))&&(t=dp(t,n.mirrors,n.dimensions,n.curvature)),n.mirrors.some(r=>Zr(r))&&(t=cp(t,n.mirrors,n.dimensions,n.curvature)),t},plot(n,t){let r=n.face,i=t;t.face[1]===n.face.length&&n.partial&&(r=r.concat(n.partial),i={...t,face:[t.face[0],t.face[1]+n.partial.length]});const o={vertex:n.vertex,edge:n.edge,face:r,ranges:i},{vertex:l,edge:u,face:s,ranges:a}=this.preprocess(n,o);for(let d=0;d<this.meshes.length;d++){const c=this.meshes[d];this[c].visible&&this.plotType(n,c,a[c],l,c!=="vertex"?c==="face"?s:u:null)}}}}const Ep=`#version 300 es
precision highp float;

uniform sampler2D screen;
uniform sampler2D afterImage;
uniform float strength;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec3 color = texture(screen, uv).rgb;
  vec3 prevColor = texture(afterImage, uv).rgb;
  prevColor *= max(sign(prevColor - 0.02f), 0.f);
  fragColor = vec4(max(color, prevColor * strength), 1.f);
}
`,wp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Sp=`#version 300 es
precision highp float;

uniform sampler2D screen;
uniform sampler2D bloom;
uniform float exposure;
uniform float strength;

in vec2 uv;
out vec4 fragColor;
void main() {
  vec3 color = texture(screen, uv).rgb;
  vec3 blooming = texture(bloom, uv).rgb;
  color = color + blooming * strength;
  // color = vec3(1.f) - exp(-color);
  color /= color + vec3(1.f);
  color *= exposure;
  fragColor = vec4(color, 1.f);
}
`,Np=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,kp=`#version 300 es
precision highp float;

uniform float offset;
uniform sampler2D screen;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec2 halfpixel = offset * .5f / vec2(textureSize(screen, 0));
  vec4 sum = texture(screen, uv) * 4.0f;
  sum += texture(screen, uv - halfpixel);
  sum += texture(screen, uv + halfpixel);
  sum += texture(screen, uv + vec2(halfpixel.x, -halfpixel.y));
  sum += texture(screen, uv - vec2(halfpixel.x, -halfpixel.y));
  fragColor = sum / 8.0f;
}
`,Ip=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Tp=`#version 300 es
precision highp float;

uniform sampler2D accumTexture;
uniform sampler2D revealageTexture;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec4 accum = texture(accumTexture, uv);
  float r = accum.a;
  accum.a = texture(revealageTexture, uv).r;
  fragColor = vec4(accum.rgb / clamp(accum.a, 1e-4f, 5e4f), r);
}
`,Rp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Cp=`#version 300 es
precision highp float;

uniform float offset;
uniform sampler2D screen;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec2 halfpixel = offset * .5f / vec2(textureSize(screen, 0));
  vec4 sum = texture(screen, uv + vec2(-halfpixel.x * 2.0f, 0.0f));
  sum += texture(screen, uv + vec2(-halfpixel.x, halfpixel.y)) * 2.0f;
  sum += texture(screen, uv + vec2(0.0f, halfpixel.y * 2.0f));
  sum += texture(screen, uv + vec2(halfpixel.x, halfpixel.y)) * 2.0f;
  sum += texture(screen, uv + vec2(halfpixel.x * 2.0f, 0.0f));
  sum += texture(screen, uv + vec2(halfpixel.x, -halfpixel.y)) * 2.0f;
  sum += texture(screen, uv + vec2(0.0f, -halfpixel.y * 2.0f));
  sum += texture(screen, uv + vec2(-halfpixel.x, -halfpixel.y)) * 2.0f;
  fragColor = sum / 12.0f;
}
`,Pp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function zp(e){return{...jt(e,"oit",Rp,Tp,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...jt(e,"down",Ip,kp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...jt(e,"up",Pp,Cp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...jt(e,"afterImage",wp,Ep,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...jt(e,"bloom",Np,Sp,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Op(e){const{gl:n}=e,t=Ln[e.ambiance],r=e.msaa?Ae(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),wo(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),wo(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),wo(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=ln(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=ln(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=ln(e,n.RGBA8),e.textures.afterImageScreen=ln(e,n.RGBA8),e.textures.afterImageOutScreen=ln(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let i=0;i<e.textures.kawase.length;i++)n.deleteTexture(e.textures.kawase[i].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let i=0;i<t.glow.steps;i++)e.textures.kawase[i]=ln(e,n.RGBA8,t.glow.pow**-i);e.textures.blur=ln(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=ln(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const bc=window.location.search.includes("stats");let br;bc&&(br=new rp,br.dom.id="stats",document.body.appendChild(br.dom));const a0=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:Fe/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=Ae(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]];const d=Bv(this.eye,[0,0,0],[0,1,0]),c=$v(this.fov,a,.01,1e3,this.zoom);this.viewProjection=ki(Yr(c,d))}};r.update();const i=zp(e),o=xp(e),l={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:o,passes:i,rb:l,fb:u,textures:{}}},c0=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},f0=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType.type==="finite"?"S":e.spaceType.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},d0=e=>{e.camera.fov=Fe*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},v0=e=>{const n=Ln[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},_p=e=>{bc&&br.update();const{gl:n}=e,t=e.msaa?Ae(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Ln[e.ambiance];Mp(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Op(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const i=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let o=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?o=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<r.glow.steps;l++){const u=l===0?o:e.textures.kawase[l-1],s=e.textures.kawase[l];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=r.glow.steps-1;l>=0;l--){const u=e.textures.kawase[l],s=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=_p;const jp={globals:_v,project:Mv,helpers:jv,complex:Av,ease:Ov,lighting:Fv},xo=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),on=(e,n,t)=>{let r,i,o;if(n===0)r=i=o=t;else{const l=t<.5?t*(1+n):t+n-t*n,u=2*t-l;r=xo(u,l,e+1/3),i=xo(u,l,e),o=xo(u,l,e-1/3)}return[r,i,o]},Mp=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},Ap=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`),Is=(e,n,t)=>{var l;const r=Ln[e.ambiance];let i="";r.lighting&&(i+=`#define LIGHTING ${Bp.indexOf(r.lighting)}
`);const o=e.easing==="auto"?((l=e.spaceType)==null?void 0:l.type)==="hyperbolic"&&e.projection4!=="inverted"?"quintic":"linear":e.easing;i+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)i+=`#define PROJECTION${u} ${Up.indexOf(e[`projection${u}`])-1}
`;return i+=`#define EASING ${$p.indexOf(o)}
`,r.opacity<1&&r.transparency==="oit"&&(i+=`#define OIT
`),Object.entries({...jp,config:i}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>Ap(u,e.dimensions))},Dr=(e,n,t,r,i)=>{if(e.gl.shaderSource(i,r),e.gl.compileShader(i),!e.gl.getShaderParameter(i,e.gl.COMPILE_STATUS)){const l=e.gl.getShaderInfoLog(i);return console.error(`An error occurred compiling the ${n}->${t} shader: ${l}`,{shaderSource:r}),l}},Ts=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const o=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${o}`),o}},ef=(e,n,t,r,i=[])=>{const{gl:o}=e,l=o.createProgram(),u=o.createShader(o.VERTEX_SHADER),s=o.createShader(o.FRAGMENT_SHADER);if(Dr(e,n,"vertex",t,u)||Dr(e,n,"fragment",r,s)||(o.attachShader(l,u),o.attachShader(l,s),Ts(e,n,l)))return;const a={program:l,vertexShader:u,fragmentShader:s,uniformsDef:i,recompile(d,c,f,p=null){Dr(d,n,"vertex",c,this.vertexShader)||Dr(d,n,"fragment",f,this.fragmentShader)||Ts(d,n,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(d))},bindUniforms(d){this.uniforms={},this.uniformsDef.forEach(({name:c,type:f,value:p})=>{this.uniforms[c]=Fp(d,this.program,c,f),this.uniforms[c].update(p)})}};return a.bindUniforms(e),a},_t=(e,n,t,r,i,o=null,l=null)=>{const{gl:u}=e;l=l||u.FLOAT;const s=l===u.FLOAT?4:2,a={name:t,mesh:n,indices:nf,instances:o,data:i,size:r,type:l,update(d=null,c=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),d===null&&c===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,d*this.size*s,this.data,d*this.size,(c-d)*this.size)},extend(d,c,f=!1){if(u.bindVertexArray(this.mesh.vao),this.size=d,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const p=d>4?3:1;this.name==="target"&&(this.location=d>4?6:4),this.name==="center"&&(this.location=d>4?9:5);for(let m=0;m<p;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<p;m++)u.vertexAttribPointer(this.location+m,d/p,this.type,!1,d*s,d/p*m*s);if(this.instances)for(let m=0;m<p;m++)u.vertexAttribDivisor(this.location+m,this.instances);c&&(f&&c.length>=this.data.length&&c.set(this.data),this.data=c),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const d=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,d),d}};return a.buffer=u.createBuffer(),a.extend(r),a},nf=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:i,vao:n,indices:t,count:t.length,update(o){r.bindVertexArray(this.vao),this.indices=o,this.count=o.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,o,r.STATIC_DRAW)}}},Fp=(e,n,t,r)=>{const{gl:i}=e;return{program:n,update(l){if(i.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=i.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&i.uniform4fv(a,l[s][0]),u-4===1){const d=i.getUniformLocation(n,`${t}.c${s+1}.u`);d!==null&&i.uniform1f(d,l[s][1])}else if(u-4>1){const d=i.getUniformLocation(n,`${t}.c${s+1}.u`);if(d!==null&&i[`uniform${Ae(u-4,4)}fv`](d,l[s][1]),u-8===1){const c=i.getUniformLocation(n,`${t}.c${s+1}.t`);c!==null&&i.uniform1f(c,l[s][2])}}}else{const s=i.getUniformLocation(n,t);s!==null&&i[`uniformMatrix${r.slice(1)}`](s,!1,l)}}else{const u=i.getUniformLocation(n,t);u!==null&&i[`uniform${r}`](u,l)}},get(){i.useProgram(this.program);const l=i.getUniformLocation(n,t);if(l!==null)return i.getUniform(this.program,l)}}},ln=(e,n,t=null)=>{const{gl:r}=e,i=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,o=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,l=r.createTexture();return r.bindTexture(r.TEXTURE_2D,l),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,i,o),{texture:l,width:i,height:o}},jt=(e,n,t,r,i=[])=>{const o={name:n,vertex:t,fragment:r,...ef(e,n,t,r,i),recompileProgram(l){this.recompile(l,this.vertex,this.fragment,i)}};return{[n]:o}},Eo=(e,n,t,r,i,o,l,u=!0,s=["position"])=>{const{gl:a}=e,d=i(e.curve?e.segments:1),c=p=>[{name:"viewProjection",type:"m4fv",value:ki(Ge(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:ki(p.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},...["edge","face"].includes(n)?[{name:"segments",type:"1f",value:p.curve?p.segments:1}]:[],...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"opacity",type:"1f",value:0}],...np(4,p.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:p[`fov${m}`]}))];l=l>4?9:l;const f={attributes:{},varying:s,vertex:t,type:n,fragment:r,...ef(e,n,...Is(e,t,r),c(e)),recompileProgram(p){const[m,y]=Is(p,this.vertex,this.fragment);this.recompile(p,m,y,c(p))},changeArity(p){p=p>4?9:p,this.arity!==p&&(this.arity=p,s.forEach(m=>{this.attributes[m].extend(p,new Float32Array(this.instances*p),!1)}))},extendAttributes(p){this.instances=p,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0)},updateGeometry(p){const m=i(p.curvature&&p.curve?p.segments:1);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(p){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return f.visible=u,f.vao=a.createVertexArray(),f.indices=nf(e,f.vao,new Uint16Array(d.indices)),f.attributes.vertex=_t(e,f,"vertex",3,new Float32Array(d.vertices)),f.attributes.uv=_t(e,f,"uv",2,new Float32Array(d.uvs)),f.attributes.normal=_t(e,f,"normal",3,new Float32Array(d.normals)),f.attributes.color=_t(e,f,"color",3,new Float32Array(o*3),1),s.forEach(p=>{f.attributes[p]=_t(e,f,p,l,new Float32Array(o*l),1)}),f.arity=l,f.instances=o,f.count=0,{[n]:f}},wo=(e,n,t,r)=>{const{gl:i}=e;i.bindRenderbuffer(i.RENDERBUFFER,n),r?i.renderbufferStorageMultisample(i.RENDERBUFFER,r,t,i.drawingBufferWidth,i.drawingBufferHeight):i.renderbufferStorage(i.RENDERBUFFER,t,i.drawingBufferWidth,i.drawingBufferHeight),i.bindRenderbuffer(i.RENDERBUFFER,null)},Dp=document.createElement("canvas"),Rs=Dp.getContext("webgl2"),Lp=Rs.getParameter(Rs.MAX_SAMPLES),Up=["perspective","stereographic","orthographic","klein","inverted","joukowsky","upperhalf","band","cross","heart","teardrop","square","ring","sinusoidal","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],$p=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],p0=["","knuthbendix","toddcoxeter","fundamental"],Bp=["lambert","phong","blinn-phong","toon"],Ln={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>on(e.length*.17%1,.5,.6)},synthwave:{background:[...on(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>on((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.4,transparency:"oit",color:({word:e})=>on(e.length*.03%1,1,.8)},shape:{background:[1,1,1,1],glow:!1,lighting:"lambert",opacity:.75,transparency:"oit",color:({word:e,len:n,vertices:t},r)=>r==="face"?on(((n||t.length)-2)*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const i=e.length?ep(e[e.length-1])/t:0;return on(i%1,1,n==="face"?.6:r?.05:.8)}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>on(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e})=>on(e.length*.06%1,.7,.6)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-Zv(.9,e.length+1)):[0,0,0]}},Cs={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"",controls:"space",ambiance:"neon",centered:null,zoom:1.5,fov3:90,projection3:"perspective",fov4:90,projection4:"stereographic",msaa:window.devicePixelRatio<=1,msaaSamples:Lp,subsampling:window.devicePixelRatio},Hp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((i,o)=>r===o?1:r===o+1||r+1===o?3:2));for(let t=0;t<Ae(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Ae(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Ae(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},h0=(e,n=[],t)=>{const r={...e},i=[];Object.entries(r).forEach(([o,l])=>{typeof Cs[o]=="number"||o.startsWith("fov")?(l===""||isNaN(l))&&(delete r[o],i.push(o)):Array.isArray(Cs[o])&&(Array.isArray(l[0])?l.find(u=>u.find(s=>l===""||o!=="coxeter"&&isNaN(s)))&&(delete r[o],i.push(o)):l.find(u=>l===""||isNaN(u)&&!(o==="mirrors"&&ap.includes(u)))&&(delete r[o],i.push(o)))}),i.includes("coxeter")||Hp(r),r.matrix._preset?delete r.matrix._preset:(r.matrix.length!==r.dimensions||r.matrix.some(o=>o.length!==r.dimensions)||(n.includes("coxeter")||n.includes("stellation"))&&ks(Ns(r.coxeter,r.stellation)).curvature!==ks(Ns(t.coxeter,t.stellation)).curvature)&&(r.matrix=Ge(r.dimensions)),n.includes("dimensions")&&!n.some(o=>o.startsWith("projection"))&&r.dimensions>=4&&(r.projection3="perspective");for(let o=4;o<=9;o++)o<=r.dimensions&&!r[`fov${o}`]&&!i.includes(`fov${o}`)&&(r[`fov${o}`]=90),o<=r.dimensions&&(!r[`projection${o}`]||n.includes("dimensions")&&!n.includes(`projection${o}`))&&!i.includes(`projection${o}`)&&(r[`projection${o}`]=o===r.dimensions?r[`projection${o+1}`]||"stereographic":"perspective"),o>r.dimensions&&r[`fov${o}`]&&delete r[`fov${o}`],o>r.dimensions&&r[`projection${o}`]&&delete r[`projection${o}`];return{params:r,badParams:i}},Vp=(e,n,t,r,i)=>{let o=!0,l=0,u=1;if(i&&["∞","inf","Infinity"].includes(e))e="∞",l=0;else if(i&&e.endsWith("i")){const s=e.slice(0,-1);l=-(s===""?1:parseInt(s)),e=`${l===-1?"":-l}i`}else if(e.includes("/")){const[s,a]=e.split("/");l=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${l}`:e=`${l}/${u}`}else l=e===""?"":parseInt(e);return o=!(i&&l===1||l===""||isNaN(l)||l<n||l>t||r%1===0&&l%r!==0||isNaN(u)||u<n||u>t||r%1===0&&u%r!==0),{valid:o,raw:e,value:l,fraction:u}};function Wp({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:o,coxeter:l,fraction:u,fractionName:s,toggler:a,togglerName:d,onChange:c,...f}){l&&(t=-1/0);const p=X.useCallback(()=>o<0&&l?`${o===-1?"":-o}i`:o===0&&l?"∞":s&&u>1?`${o}/${u}`:`${o}`,[l,u,s,o]),[m,y]=X.useState(p);X.useEffect(()=>{y(p())},[l,p,u,s,o]);const[E,h]=X.useState(!0),v=X.useCallback(N=>{const k=Vp(N,t,r,i,l);y(k.raw),h(k.valid),k.valid&&(c(e,k.value),s&&c(s,k.fraction))},[l,s,r,t,e,c,i]),g=X.useCallback(()=>{if(!E){v(l?"3":`${t}`);return}if(l){if(m==="2"){v("∞");return}if(m==="∞"){v("i");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=(N===""?1:parseInt(N))+1;v(`${k}i`);return}}if(m!==`${t}`)if(m.includes("/"))v((parseInt(m.split("/")[0])-i).toString());else{const N=parseInt(m)-i;i>0&&i<1?v(N.toFixed(i.toString().split(".")[1].length)):v(N.toString())}},[l,t,m,i,v,E]),x=X.useCallback(()=>{if(!E){v(l?"3":`${t}`);return}if(l){if(m==="∞"){v("2");return}if(m==="i"){v("∞");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=parseInt(N)-1;k===1&&(k=""),v(`${k}i`);return}}if(m!==`${r}`)if(m.includes("/"))v((parseInt(m.split("/")[0])+i).toString());else{const N=parseInt(m)+i;i>0&&i<1?v(N.toFixed(i.toString().split(".")[1].length)):v(N.toString())}},[l,r,t,m,i,v,E]),w=N=>{const k=N.target.value;v(k)},I=N=>{c(N.target.name,N.target.checked)};return T.jsxs("label",{className:`number ${E?"valid":"invalid"}`,children:[n&&T.jsx("span",{className:"number-label",children:n}),d&&T.jsx("input",{type:"checkbox",name:d,checked:a,onChange:I}),(!d||a)&&T.jsxs("div",{className:"number-control",children:[T.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:w,...f}),T.jsx("button",{className:"plusminus minus",onClick:g,tabIndex:-1,children:"−"}),T.jsx("button",{className:"plusminus plus",onClick:x,tabIndex:-1,children:"+"})]})]})}function Gp({i:e,j:n,value:t,stellation:r,onChange:i}){return T.jsx("div",{className:"coxeter-value",children:T.jsx(Wp,{name:`coxeter-${e}-${n}`,value:t,onChange:i,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Ps({type:e}){return T.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:T.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const Lt=6,On=14,Ut={active:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("circle",{cx:"16",cy:"16",r:Lt,fill:"currentColor"})]}),inactive:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Lt,fill:"currentColor"})}),dual:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Lt,fill:"currentColor"}),T.jsx("path",{d:"M 16 2 L 16 10"}),T.jsx("path",{d:"M 16 10 L 16 22",stroke:"black"}),T.jsx("path",{d:"M 16 22 L 16 30"})]}),snub:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:On})}),dualsnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On-4}),T.jsx("path",{d:"M 16 0 L 16 32"})]}),holosnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("circle",{cx:"16",cy:"16",r:Lt})]}),custom:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("path",{d:"M 6 6 L 26 26"}),T.jsx("path",{d:"M 6 26 L 26 6"})]}),void:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M 10 10 L 22 22"}),T.jsx("path",{d:"M 10 22 L 22 10"})]})};function Kp({index:e,value:n,onChange:t}){const r=X.useRef(null),[i,o]=X.useState(!1),l=Zc(n),u=()=>{const c=Fr[l==="inactive"?"active":"inactive"];t(e,c)},s=d=>{const c=Object.keys(Ut),f=c.indexOf(l),p=c[(c.length+f+fu(d.deltaY))%c.length],m=Fr[p];t(e,m)},a=d=>{d.preventDefault(),o(!i)};return X.useEffect(()=>{const d=c=>{r.current.contains(c.target)||o(!1)};if(i)return window.addEventListener("mouseup",d),()=>{window.removeEventListener("mouseup",d)}},[i]),T.jsxs("div",{className:"coxeter-node",title:l,ref:r,children:[T.jsx("svg",{className:`coxeter-graphic ${l}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:Ut[l]}),l==="custom"&&T.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:d=>t(e,d.target.value)}),i&&T.jsx("div",{className:"coxeter-node-menu",children:Object.keys(Ut).filter(d=>d!==l).map(d=>T.jsx("div",{title:d,onClick:()=>{t(e,Fr[d]),o(!1)},children:T.jsx("svg",{className:`coxeter-graphic ${d}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,Fr[d]),o(!1)},children:Ut[d]})},d))})]})}const zs=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid";function m0({dimensions:e,coxeter:n,mirrors:t,stellation:r,extended:i,onChange:o}){const[l,u]=X.useState(1),s=X.useRef(),a=X.useCallback(()=>{if(o("extended",!i),i){const f=n.map(p=>p.slice());for(let p=0;p<e;p++)for(let m=0;m<p-1;m++)f[p][m]=2,f[m][p]=2;o("coxeter",f)}},[i,o,n,e]),d=X.useCallback((f,p)=>{if(f.startsWith("coxeter")){const[m,y]=f.split("-").slice(1).map(h=>+h),E=n.map(h=>h.slice());E[m][y]=p,E[y][m]=p,o("coxeter",E)}if(f.startsWith("stellation")){const[m,y]=f.split("-").slice(1).map(h=>+h),E=r.map(h=>h.slice());E[m][y]=p,E[y][m]=p,o("stellation",E)}},[n,o,r]),c=X.useCallback((f,p)=>{const m=t[f];let y=t.slice();y[f]=p,Zr(p)||m===0?Zr(y)&&(y=y.map((E,h)=>E==="s"?"b":E&&E!=="b"?"d":E)):p!==0&&up(p)&&Zr(y)&&(y=y.map((E,h)=>E==="b"?"s":E==="d"?1:E)),o("mirrors",y)},[t,o]);return X.useEffect(()=>{const f=()=>{if(!s.current)return;const p=Ae(1,(window.innerWidth-125)/s.current.offsetWidth);u(p)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[e]),T.jsxs("aside",{className:"coxeters",style:l===1?void 0:{transform:`scale(${l})`},ref:s,children:[T.jsx("div",{className:"coxeter-matrix",children:[...Array(e).keys()].map(f=>T.jsxs(X.Fragment,{children:[f>0&&T.jsx("div",{className:"coxeter-column",children:[...Array(f).keys()].map(p=>(i||f===p+1)&&T.jsx(Gp,{i:f,j:p,value:n[f][p],stellation:r[f][p],onChange:d},`${f}x${p}`))}),f>0&&T.jsx(Ps,{type:zs(n,f)}),T.jsx(Kp,{index:f,value:t[f],onChange:c}),f<e-1&&T.jsx(Ps,{type:zs(n,f+1)})]},f))}),T.jsxs("div",{className:"coxeter-toggles",children:[e>2&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",e-1),title:"Decrease dimensions",children:"−"}),e<9&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",e+1),title:"Increase dimensions",children:"+"}),T.jsx("button",{className:"button",onClick:a,title:"extended mode",children:i?"▲":"▼"})]})]})}const un=32,Os=18;function g0({coxeter:e,mirrors:n,stellation:t}){const r=e.length,i=n.map((y,E)=>{const h=Zc(y);return{n:E,type:h,i:E,j:0,r:h==="inactive"?Lt:On}});for(let y=0;y<r;y++)for(let E=r-1;E>y+1;E--)if(e[y][E]!==2){const h=y===0,v=E===r-1,g=!h&&!v,x=E-y+1,w=U(x-1)/2,I=2*Math.PI/x,N={i:i[y].i+w,j:i[y].j+(g?-w*Be((2+x)/4*I):0)};for(let k=y;k<=E;k++){let A=k-y+(h?1:v?x/2:(2+x)/4);i[k].i=N.i+w*Ye(I*A),i[k].j=N.j+w*Be(I*A)}for(let k=E+1;k<r;k++)i[k].i-=E-y,i[k].i+=2*w;y=E-1;break}const o=[];for(let y=0;y<r;y++)for(let E=0;E<y;E++)if(e[y][E]!==2){const h=e[y][E],v=t[y][E];let g=`${h===0?"∞":h<0?`${h===-1?"":-h}i`:h}`;v>1&&(g+=`/${v}`),g==="3"&&(g=""),o.push({source:i[y],target:i[E],value:g,type:h<0?"dashed":h===0?"bold":"solid"})}const l=i.map(({i:y})=>y),u=i.map(({j:y})=>y),s=Ae(...l),a=_n(...l),d=Ae(...u),c=_n(...u);let f=0,p=0;for(let y=0;y<i.length;y++){const E=i[y];E.x=(E.i-s)*2*un,E.y=(E.j-d)*2*un,f=_n(f,E.x),p=_n(p,E.y)}const m=y=>y+_n(y-1,0);return T.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-un/2} ${-un/2} ${f+un} ${p+un}`,width:`${m(a-s+1)}em`,height:`${m(c-d+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[i.map(({n:y,type:E,x:h,y:v,r:g})=>T.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${h-un/2} ${v-un/2})`,title:E,children:Ut[E]},y)),o.map(({source:y,target:E,value:h,type:v})=>{const g={x:y.x,y:y.y},x={x:E.x,y:E.y},w={},I=qv(x.y-g.y,x.x-g.x);return w.x=(g.x+x.x)/2+(Os+(h.length-2)*5)*Ye(I-Fe/2),w.y=(g.y+x.y)/2+Os*Be(I-Fe/2),g.x+=(y.r+1)*Ye(I),g.y+=(y.r+1)*Be(I),x.x-=(E.r+1)*Ye(I),x.y-=(E.r+1)*Be(I),T.jsxs("g",{className:"coxeter-diagram-link",children:[T.jsx("path",{d:`M ${g.x} ${g.y} L ${x.x} ${x.y}`,strokeWidth:v==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:v==="dashed"?"1 1":""}),T.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:w.x,y:w.y,children:h})]},`${y.n}-${E.n}`)})]})}export{$p as A,Ln as B,g0 as C,np as D,Up as E,m0 as F,a0 as G,h0 as H,n0 as I,u0 as J,Jp as K,l0 as L,mu as M,Wp as N,Hp as O,Fe as P,We as a,_p as b,ki as c,s0 as d,v0 as e,Op as f,c0 as g,o0 as h,_n as i,Ns as j,ks as k,Wv as l,Yr as m,Gv as n,T as o,f0 as p,Cs as q,X as r,Qp as s,Ge as t,d0 as u,Yp as v,Ae as w,Xp as x,Dv as y,p0 as z};
