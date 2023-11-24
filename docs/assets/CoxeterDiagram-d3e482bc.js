(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},To={},_s={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),of=Symbol.for("react.portal"),lf=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),cf=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),vf=Symbol.for("react.memo"),pf=Symbol.for("react.lazy"),du=Symbol.iterator;function hf(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ms=Object.assign,Fs={};function xt(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||js}xt.prototype.isReactComponent={};xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ds(){}Ds.prototype=xt.prototype;function ml(e,n,t){this.props=e,this.context=n,this.refs=Fs,this.updater=t||js}var gl=ml.prototype=new Ds;gl.constructor=ml;Ms(gl,xt.prototype);gl.isPureReactComponent=!0;var vu=Array.isArray,As=Object.prototype.hasOwnProperty,yl={current:null},Ls={key:!0,ref:!0,__self:!0,__source:!0};function Us(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)As.call(n,r)&&!Ls.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(u===1)o.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:dr,type:e,key:i,ref:l,props:o,_owner:yl.current}}function mf(e,n){return{$$typeof:dr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function gf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var pu=/\/+/g;function Go(e,n){return typeof e=="object"&&e!==null&&e.key!=null?gf(""+e.key):n.toString(36)}function Lr(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case dr:case of:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Go(l,0):r,vu(o)?(t="",e!=null&&(t=e.replace(pu,"$&/")+"/"),Lr(o,n,t,"",function(a){return a})):o!=null&&(xl(o)&&(o=mf(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(pu,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",vu(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+Go(i,u);l+=Lr(i,n,t,s,o)}else if(s=hf(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+Go(i,u++),l+=Lr(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function xr(e,n,t){if(e==null)return e;var r=[],o=0;return Lr(e,r,"","",function(i){return n.call(t,i,o++)}),r}function yf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Ur={transition:null},xf={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:yl};_.Children={map:xr,forEach:function(e,n,t){xr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return xr(e,function(){n++}),n},toArray:function(e){return xr(e,function(n){return n})||[]},only:function(e){if(!xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=xt;_.Fragment=lf;_.Profiler=sf;_.PureComponent=ml;_.StrictMode=uf;_.Suspense=df;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xf;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ms({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=yl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)As.call(n,s)&&!Ls.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:dr,type:e.type,key:o,ref:i,props:r,_owner:l}};_.createContext=function(e){return e={$$typeof:cf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:af,_context:e},e.Consumer=e};_.createElement=Us;_.createFactory=function(e){var n=Us.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:ff,render:e}};_.isValidElement=xl;_.lazy=function(e){return{$$typeof:pf,_payload:{_status:-1,_result:e},_init:yf}};_.memo=function(e,n){return{$$typeof:vf,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=n}};_.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_.useCallback=function(e,n){return ce.current.useCallback(e,n)};_.useContext=function(e){return ce.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};_.useEffect=function(e,n){return ce.current.useEffect(e,n)};_.useId=function(){return ce.current.useId()};_.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return ce.current.useMemo(e,n)};_.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};_.useRef=function(e){return ce.current.useRef(e)};_.useState=function(e){return ce.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return ce.current.useTransition()};_.version="18.2.0";_s.exports=_;var Y=_s.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=Y,wf=Symbol.for("react.element"),Sf=Symbol.for("react.fragment"),Nf=Object.prototype.hasOwnProperty,kf=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,If={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Nf.call(n,r)&&!If.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:wf,type:e,key:i,ref:l,props:o,_owner:kf.current}}To.Fragment=Sf;To.jsx=Bs;To.jsxs=Bs;Os.exports=To;var T=Os.exports,hu={},$s={exports:{}},we={},Hs={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var z=C.length;C.push(P);e:for(;0<z;){var K=z-1>>>1,Z=C[K];if(0<o(Z,P))C[K]=P,C[z]=Z,z=K;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],z=C.pop();if(z!==P){C[0]=z;e:for(var K=0,Z=C.length,gr=Z>>>1;K<gr;){var Cn=2*(K+1)-1,Wo=C[Cn],Pn=Cn+1,yr=C[Pn];if(0>o(Wo,z))Pn<Z&&0>o(yr,Wo)?(C[K]=yr,C[Pn]=z,K=Pn):(C[K]=Wo,C[Cn]=z,K=Cn);else if(Pn<Z&&0>o(yr,z))C[K]=yr,C[Pn]=z,K=Pn;else break e}}return P}function o(C,P){var z=C.sortIndex-P.sortIndex;return z!==0?z:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],a=[],d=1,c=null,f=3,v=!1,m=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var P=t(a);P!==null;){if(P.callback===null)r(a);else if(P.startTime<=C)r(a),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(a)}}function E(C){if(y=!1,g(C),!m)if(t(s)!==null)m=!0,Ho(w);else{var P=t(a);P!==null&&Vo(E,P.startTime-C)}}function w(C,P){m=!1,y&&(y=!1,h(k),k=-1),v=!0;var z=f;try{for(g(P),c=t(s);c!==null&&(!(c.expirationTime>P)||C&&!ze());){var K=c.callback;if(typeof K=="function"){c.callback=null,f=c.priorityLevel;var Z=K(c.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?c.callback=Z:c===t(s)&&r(s),g(P)}else r(s);c=t(s)}if(c!==null)var gr=!0;else{var Cn=t(a);Cn!==null&&Vo(E,Cn.startTime-P),gr=!1}return gr}finally{c=null,f=z,v=!1}}var I=!1,N=null,k=-1,F=5,O=-1;function ze(){return!(e.unstable_now()-O<F)}function St(){if(N!==null){var C=e.unstable_now();O=C;var P=!0;try{P=N(!0,C)}finally{P?Nt():(I=!1,N=null)}}else I=!1}var Nt;if(typeof p=="function")Nt=function(){p(St)};else if(typeof MessageChannel<"u"){var fu=new MessageChannel,nf=fu.port2;fu.port1.onmessage=St,Nt=function(){nf.postMessage(null)}}else Nt=function(){x(St,0)};function Ho(C){N=C,I||(I=!0,Nt())}function Vo(C,P){k=x(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||v||(m=!0,Ho(w))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var z=f;f=P;try{return C()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=f;f=C;try{return P()}finally{f=z}},e.unstable_scheduleCallback=function(C,P,z){var K=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?K+z:K):z=K,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,C={id:d++,callback:P,priorityLevel:C,startTime:z,expirationTime:Z,sortIndex:-1},z>K?(C.sortIndex=z,n(a,C),t(s)===null&&C===t(a)&&(y?(h(k),k=-1):y=!0,Vo(E,z-K))):(C.sortIndex=Z,n(s,C),m||v||(m=!0,Ho(w))),C},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(C){var P=f;return function(){var z=f;f=P;try{return C.apply(this,arguments)}finally{f=z}}}})(Vs);Hs.exports=Vs;var Tf=Hs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Y,Ee=Tf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gs=new Set,Xt={};function Wn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(Xt[e]=n,e=0;e<n.length;e++)Gs.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=Object.prototype.hasOwnProperty,Rf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},gu={};function Cf(e){return wi.call(gu,e)?!0:wi.call(mu,e)?!1:Rf.test(e)?gu[e]=!0:(mu[e]=!0,!1)}function Pf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zf(e,n,t,r){if(n===null||typeof n>"u"||Pf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var El=/[\-:]([a-z])/g;function wl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(El,wl);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(El,wl);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(El,wl);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sl(e,n,t,r){var o=re.hasOwnProperty(n)?re[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(zf(n,t,o,r)&&(t=null),r||o===null?Cf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=Ws.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),Nl=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),Ks=Symbol.for("react.provider"),Qs=Symbol.for("react.context"),kl=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),ki=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Js=Symbol.for("react.offscreen"),yu=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ko;function Mt(e){if(Ko===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ko=n&&n[1]||""}return`
`+Ko+e}var Qo=!1;function Jo(e,n){if(!e||Qo)return"";Qo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var o=a.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Qo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Mt(e):""}function Of(e){switch(e.tag){case 5:return Mt(e.type);case 16:return Mt("Lazy");case 13:return Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Jn:return"Portal";case Si:return"Profiler";case Nl:return"StrictMode";case Ni:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qs:return(e.displayName||"Context")+".Consumer";case Ks:return(e._context.displayName||"Context")+".Provider";case kl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return n=e.displayName||null,n!==null?n:Ii(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Ii(e(n))}catch{}}return null}function _f(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(n);case 8:return n===Nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jf(e){var n=Xs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wr(e){e._valueTracker||(e._valueTracker=jf(e))}function Ys(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function qs(e,n){n=n.checked,n!=null&&Sl(e,"checked",n,!1)}function Ri(e,n){qs(e,n);var t=Nn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ci(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ci(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Eu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ci(e,n,t){(n!=="number"||br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ft=Array.isArray;function lt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Pi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Ft(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function Zs(e,n){var t=Nn(n.value),r=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Su(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,ea=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Yt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mf=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(e){Mf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Bt[n]=Bt[e]})});function na(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Bt.hasOwnProperty(e)&&Bt[e]?(""+n).trim():n+"px"}function ta(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=na(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Ff=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,n){if(n){if(Ff[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function _i(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function Tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,ut=null,st=null;function Nu(e){if(e=hr(e)){if(typeof Mi!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Oo(n),Mi(e.stateNode,e.type,n))}}function ra(e){ut?st?st.push(e):st=[e]:ut=e}function oa(){if(ut){var e=ut,n=st;if(st=ut=null,Nu(e),n)for(e=0;e<n.length;e++)Nu(n[e])}}function ia(e,n){return e(n)}function la(){}var Xo=!1;function ua(e,n,t){if(Xo)return e(n,t);Xo=!0;try{return ia(e,n,t)}finally{Xo=!1,(ut!==null||st!==null)&&(la(),oa())}}function qt(e,n){var t=e.stateNode;if(t===null)return null;var r=Oo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Fi=!1;if(en)try{var It={};Object.defineProperty(It,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Fi=!1}function Df(e,n,t,r,o,i,l,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(d){this.onError(d)}}var $t=!1,eo=null,no=!1,Di=null,Af={onError:function(e){$t=!0,eo=e}};function Lf(e,n,t,r,o,i,l,u,s){$t=!1,eo=null,Df.apply(Af,arguments)}function Uf(e,n,t,r,o,i,l,u,s){if(Lf.apply(this,arguments),$t){if($t){var a=eo;$t=!1,eo=null}else throw Error(S(198));no||(no=!0,Di=a)}}function Gn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function sa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ku(e){if(Gn(e)!==e)throw Error(S(188))}function Bf(e){var n=e.alternate;if(!n){if(n=Gn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return ku(o),e;if(i===r)return ku(o),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function aa(e){return e=Bf(e),e!==null?ca(e):null}function ca(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ca(e);if(n!==null)return n;e=e.sibling}return null}var fa=Ee.unstable_scheduleCallback,Iu=Ee.unstable_cancelCallback,$f=Ee.unstable_shouldYield,Hf=Ee.unstable_requestPaint,Q=Ee.unstable_now,Vf=Ee.unstable_getCurrentPriorityLevel,Rl=Ee.unstable_ImmediatePriority,da=Ee.unstable_UserBlockingPriority,to=Ee.unstable_NormalPriority,Wf=Ee.unstable_LowPriority,va=Ee.unstable_IdlePriority,Ro=null,Ge=null;function Gf(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Jf,Kf=Math.log,Qf=Math.LN2;function Jf(e){return e>>>=0,e===0?32:31-(Kf(e)/Qf|0)|0}var Nr=64,kr=4194304;function Dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~o;u!==0?r=Dt(u):(i&=l,i!==0&&(r=Dt(i)))}else l=t&~o,l!==0?r=Dt(l):i!==0&&(r=Dt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Fe(n),o=1<<t,r|=e[t],n&=~o;return r}function Xf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Fe(i),u=1<<l,s=o[l];s===-1?(!(u&t)||u&r)&&(o[l]=Xf(u,n)):s<=n&&(e.expiredLanes|=u),i&=~u}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pa(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Yo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function vr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Fe(n),e[n]=t}function qf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Fe(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Cl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Fe(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var M=0;function ha(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ma,Pl,ga,ya,xa,Li=!1,Ir=[],hn=null,mn=null,gn=null,Zt=new Map,bt=new Map,fn=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tu(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Zt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bt.delete(n.pointerId)}}function Tt(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=hr(n),n!==null&&Pl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function bf(e,n,t,r,o){switch(n){case"focusin":return hn=Tt(hn,e,n,t,r,o),!0;case"dragenter":return mn=Tt(mn,e,n,t,r,o),!0;case"mouseover":return gn=Tt(gn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Zt.set(i,Tt(Zt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,bt.set(i,Tt(bt.get(i)||null,e,n,t,r,o)),!0}return!1}function Ea(e){var n=jn(e.target);if(n!==null){var t=Gn(n);if(t!==null){if(n=t.tag,n===13){if(n=sa(t),n!==null){e.blockedOn=n,xa(e.priority,function(){ga(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ui(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ji=r,t.target.dispatchEvent(r),ji=null}else return n=hr(t),n!==null&&Pl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ru(e,n,t){Br(e)&&t.delete(n)}function ed(){Li=!1,hn!==null&&Br(hn)&&(hn=null),mn!==null&&Br(mn)&&(mn=null),gn!==null&&Br(gn)&&(gn=null),Zt.forEach(Ru),bt.forEach(Ru)}function Rt(e,n){e.blockedOn===n&&(e.blockedOn=null,Li||(Li=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,ed)))}function er(e){function n(o){return Rt(o,e)}if(0<Ir.length){Rt(Ir[0],e);for(var t=1;t<Ir.length;t++){var r=Ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&Rt(hn,e),mn!==null&&Rt(mn,e),gn!==null&&Rt(gn,e),Zt.forEach(n),bt.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)Ea(t),t.blockedOn===null&&fn.shift()}var at=on.ReactCurrentBatchConfig,oo=!0;function nd(e,n,t,r){var o=M,i=at.transition;at.transition=null;try{M=1,zl(e,n,t,r)}finally{M=o,at.transition=i}}function td(e,n,t,r){var o=M,i=at.transition;at.transition=null;try{M=4,zl(e,n,t,r)}finally{M=o,at.transition=i}}function zl(e,n,t,r){if(oo){var o=Ui(e,n,t,r);if(o===null)li(e,n,r,io,t),Tu(e,r);else if(bf(o,e,n,t,r))r.stopPropagation();else if(Tu(e,r),n&4&&-1<Zf.indexOf(e)){for(;o!==null;){var i=hr(o);if(i!==null&&ma(i),i=Ui(e,n,t,r),i===null&&li(e,n,r,io,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else li(e,n,r,null,t)}}var io=null;function Ui(e,n,t,r){if(io=null,e=Tl(r),e=jn(e),e!==null)if(n=Gn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=sa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return io=e,null}function wa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vf()){case Rl:return 1;case da:return 4;case to:case Wf:return 16;case va:return 536870912;default:return 16}default:return 16}}var vn=null,Ol=null,$r=null;function Sa(){if($r)return $r;var e,n=Ol,t=n.length,r,o="value"in vn?vn.value:vn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return $r=o.slice(e,1<r?1-r:void 0)}function Hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Cu(){return!1}function Se(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Tr:Cu,this.isPropagationStopped=Cu,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Se(Et),pr=W({},Et,{view:0,detail:0}),rd=Se(pr),qo,Zo,Ct,Co=W({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(qo=e.screenX-Ct.screenX,Zo=e.screenY-Ct.screenY):Zo=qo=0,Ct=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),Pu=Se(Co),od=W({},Co,{dataTransfer:0}),id=Se(od),ld=W({},pr,{relatedTarget:0}),bo=Se(ld),ud=W({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=Se(ud),ad=W({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=Se(ad),fd=W({},Et,{data:0}),zu=Se(fd),dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pd[e])?!!n[e]:!1}function jl(){return hd}var md=W({},pr,{key:function(e){if(e.key){var n=dd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=Se(md),yd=W({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=Se(yd),xd=W({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Ed=Se(xd),wd=W({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=Se(wd),Nd=W({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kd=Se(Nd),Id=[9,13,27,32],Ml=en&&"CompositionEvent"in window,Ht=null;en&&"documentMode"in document&&(Ht=document.documentMode);var Td=en&&"TextEvent"in window&&!Ht,Na=en&&(!Ml||Ht&&8<Ht&&11>=Ht),_u=String.fromCharCode(32),ju=!1;function ka(e,n){switch(e){case"keyup":return Id.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ia(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Rd(e,n){switch(e){case"compositionend":return Ia(n);case"keypress":return n.which!==32?null:(ju=!0,_u);case"textInput":return e=n.data,e===_u&&ju?null:e;default:return null}}function Cd(e,n){if(Yn)return e==="compositionend"||!Ml&&ka(e,n)?(e=Sa(),$r=Ol=vn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Na&&n.locale!=="ko"?null:n.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pd[e.type]:n==="textarea"}function Ta(e,n,t,r){ra(r),n=lo(n,"onChange"),0<n.length&&(t=new _l("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vt=null,nr=null;function zd(e){Aa(e,0)}function Po(e){var n=bn(e);if(Ys(n))return e}function Od(e,n){if(e==="change")return n}var Ra=!1;if(en){var ei;if(en){var ni="oninput"in document;if(!ni){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),ni=typeof Fu.oninput=="function"}ei=ni}else ei=!1;Ra=ei&&(!document.documentMode||9<document.documentMode)}function Du(){Vt&&(Vt.detachEvent("onpropertychange",Ca),nr=Vt=null)}function Ca(e){if(e.propertyName==="value"&&Po(nr)){var n=[];Ta(n,nr,e,Tl(e)),ua(zd,n)}}function _d(e,n,t){e==="focusin"?(Du(),Vt=n,nr=t,Vt.attachEvent("onpropertychange",Ca)):e==="focusout"&&Du()}function jd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Po(nr)}function Md(e,n){if(e==="click")return Po(n)}function Fd(e,n){if(e==="input"||e==="change")return Po(n)}function Dd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:Dd;function tr(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!wi.call(n,o)||!Ue(e[o],n[o]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,n){var t=Au(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Au(t)}}function Pa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function za(){for(var e=window,n=br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=br(e.document)}return n}function Fl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ad(e){var n=za(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Pa(t.ownerDocument.documentElement,t)){if(r!==null&&Fl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Lu(t,i);var l=Lu(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ld=en&&"documentMode"in document&&11>=document.documentMode,qn=null,Bi=null,Wt=null,$i=!1;function Uu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$i||qn==null||qn!==br(r)||(r=qn,"selectionStart"in r&&Fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wt&&tr(Wt,r)||(Wt=r,r=lo(Bi,"onSelect"),0<r.length&&(n=new _l("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=qn)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Zn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},ti={},Oa={};en&&(Oa=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function zo(e){if(ti[e])return ti[e];if(!Zn[e])return e;var n=Zn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Oa)return ti[e]=n[t];return e}var _a=zo("animationend"),ja=zo("animationiteration"),Ma=zo("animationstart"),Fa=zo("transitionend"),Da=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){Da.set(e,n),Wn(n,[e])}for(var ri=0;ri<Bu.length;ri++){var oi=Bu[ri],Ud=oi.toLowerCase(),Bd=oi[0].toUpperCase()+oi.slice(1);In(Ud,"on"+Bd)}In(_a,"onAnimationEnd");In(ja,"onAnimationIteration");In(Ma,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Fa,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function $u(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Uf(r,n,void 0,e),e.currentTarget=null}function Aa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==i&&o.isPropagationStopped())break e;$u(o,u,a),i=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,a=u.currentTarget,u=u.listener,s!==i&&o.isPropagationStopped())break e;$u(o,u,a),i=s}}}if(no)throw e=Di,no=!1,Di=null,e}function A(e,n){var t=n[Ki];t===void 0&&(t=n[Ki]=new Set);var r=e+"__bubble";t.has(r)||(La(n,e,2,!1),t.add(r))}function ii(e,n,t){var r=0;n&&(r|=4),La(t,e,r,n)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Cr]){e[Cr]=!0,Gs.forEach(function(t){t!=="selectionchange"&&($d.has(t)||ii(t,!1,e),ii(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cr]||(n[Cr]=!0,ii("selectionchange",!1,n))}}function La(e,n,t,r){switch(wa(n)){case 1:var o=nd;break;case 4:o=td;break;default:o=zl}t=o.bind(null,n,t,e),o=void 0,!Fi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function li(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;u!==null;){if(l=jn(u),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}u=u.parentNode}}r=r.return}ua(function(){var a=i,d=Tl(t),c=[];e:{var f=Da.get(e);if(f!==void 0){var v=_l,m=e;switch(e){case"keypress":if(Hr(t)===0)break e;case"keydown":case"keyup":v=gd;break;case"focusin":m="focus",v=bo;break;case"focusout":m="blur",v=bo;break;case"beforeblur":case"afterblur":v=bo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ed;break;case _a:case ja:case Ma:v=sd;break;case Fa:v=Sd;break;case"scroll":v=rd;break;case"wheel":v=kd;break;case"copy":case"cut":case"paste":v=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ou}var y=(n&4)!==0,x=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var p=a,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,h!==null&&(E=qt(p,h),E!=null&&y.push(or(p,E,g)))),x)break;p=p.return}0<y.length&&(f=new v(f,m,null,t,d),c.push({event:f,listeners:y}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==ji&&(m=t.relatedTarget||t.fromElement)&&(jn(m)||m[nn]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(m=t.relatedTarget||t.toElement,v=a,m=m?jn(m):null,m!==null&&(x=Gn(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=a),v!==m)){if(y=Pu,E="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ou,E="onPointerLeave",h="onPointerEnter",p="pointer"),x=v==null?f:bn(v),g=m==null?f:bn(m),f=new y(E,p+"leave",v,t,d),f.target=x,f.relatedTarget=g,E=null,jn(d)===a&&(y=new y(h,p+"enter",m,t,d),y.target=g,y.relatedTarget=x,E=y),x=E,v&&m)n:{for(y=v,h=m,p=0,g=y;g;g=Kn(g))p++;for(g=0,E=h;E;E=Kn(E))g++;for(;0<p-g;)y=Kn(y),p--;for(;0<g-p;)h=Kn(h),g--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break n;y=Kn(y),h=Kn(h)}y=null}else y=null;v!==null&&Hu(c,f,v,y,!1),m!==null&&x!==null&&Hu(c,x,m,y,!0)}}e:{if(f=a?bn(a):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var w=Od;else if(Mu(f))if(Ra)w=Fd;else{w=jd;var I=_d}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Md);if(w&&(w=w(e,a))){Ta(c,w,t,d);break e}I&&I(e,f,a),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Ci(f,"number",f.value)}switch(I=a?bn(a):window,e){case"focusin":(Mu(I)||I.contentEditable==="true")&&(qn=I,Bi=a,Wt=null);break;case"focusout":Wt=Bi=qn=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Uu(c,t,d);break;case"selectionchange":if(Ld)break;case"keydown":case"keyup":Uu(c,t,d)}var N;if(Ml)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Yn?ka(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(Na&&t.locale!=="ko"&&(Yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Yn&&(N=Sa()):(vn=d,Ol="value"in vn?vn.value:vn.textContent,Yn=!0)),I=lo(a,k),0<I.length&&(k=new zu(k,e,null,t,d),c.push({event:k,listeners:I}),N?k.data=N:(N=Ia(t),N!==null&&(k.data=N)))),(N=Td?Rd(e,t):Cd(e,t))&&(a=lo(a,"onBeforeInput"),0<a.length&&(d=new zu("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:a}),d.data=N))}Aa(c,n)})}function or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function lo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=qt(e,t),i!=null&&r.unshift(or(e,i,o)),i=qt(e,n),i!=null&&r.push(or(e,i,o))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hu(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,o?(s=qt(t,i),s!=null&&l.unshift(or(t,s,u))):o||(s=qt(t,i),s!=null&&l.push(or(t,s,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Hd=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(Hd,`
`).replace(Vd,"")}function Pr(e,n,t){if(n=Vu(n),Vu(e)!==n&&t)throw Error(S(425))}function uo(){}var Hi=null,Vi=null;function Wi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(Kd)}:Gi;function Kd(e){setTimeout(function(){throw e})}function ui(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),er(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);er(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+wt,ir="__reactProps$"+wt,nn="__reactContainer$"+wt,Ki="__reactEvents$"+wt,Qd="__reactListeners$"+wt,Jd="__reactHandles$"+wt;function jn(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Gu(e);e!==null;){if(t=e[Ve])return t;e=Gu(e)}return n}e=t,t=e.parentNode}return null}function hr(e){return e=e[Ve]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Oo(e){return e[ir]||null}var Qi=[],et=-1;function Tn(e){return{current:e}}function U(e){0>et||(e.current=Qi[et],Qi[et]=null,et--)}function D(e,n){et++,Qi[et]=e.current,e.current=n}var kn={},ue=Tn(kn),pe=Tn(!1),Un=kn;function vt(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function he(e){return e=e.childContextTypes,e!=null}function so(){U(pe),U(ue)}function Ku(e,n,t){if(ue.current!==kn)throw Error(S(168));D(ue,n),D(pe,t)}function Ua(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(S(108,_f(e)||"Unknown",o));return W({},t,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Un=ue.current,D(ue,e),D(pe,pe.current),!0}function Qu(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Ua(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,U(pe),U(ue),D(ue,e)):U(pe),D(pe,t)}var Je=null,_o=!1,si=!1;function Ba(e){Je===null?Je=[e]:Je.push(e)}function Xd(e){_o=!0,Ba(e)}function Rn(){if(!si&&Je!==null){si=!0;var e=0,n=M;try{var t=Je;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Je=null,_o=!1}catch(o){throw Je!==null&&(Je=Je.slice(e+1)),fa(Rl,Rn),o}finally{M=n,si=!1}}return null}var nt=[],tt=0,co=null,fo=0,ke=[],Ie=0,Bn=null,Xe=1,Ye="";function zn(e,n){nt[tt++]=fo,nt[tt++]=co,co=e,fo=n}function $a(e,n,t){ke[Ie++]=Xe,ke[Ie++]=Ye,ke[Ie++]=Bn,Bn=e;var r=Xe;e=Ye;var o=32-Fe(r)-1;r&=~(1<<o),t+=1;var i=32-Fe(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Xe=1<<32-Fe(n)+o|t<<o|r,Ye=i+e}else Xe=1<<i|t<<o|r,Ye=e}function Dl(e){e.return!==null&&(zn(e,1),$a(e,1,0))}function Al(e){for(;e===co;)co=nt[--tt],nt[tt]=null,fo=nt[--tt],nt[tt]=null;for(;e===Bn;)Bn=ke[--Ie],ke[Ie]=null,Ye=ke[--Ie],ke[Ie]=null,Xe=ke[--Ie],ke[Ie]=null}var xe=null,ye=null,B=!1,Me=null;function Ha(e,n){var t=Te(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ju(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,ye=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:Xe,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Te(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xe=e,ye=null,!0):!1;default:return!1}}function Ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(B){var n=ye;if(n){var t=n;if(!Ju(e,n)){if(Ji(e))throw Error(S(418));n=yn(t.nextSibling);var r=xe;n&&Ju(e,n)?Ha(r,t):(e.flags=e.flags&-4097|2,B=!1,xe=e)}}else{if(Ji(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,xe=e}}}function Xu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function zr(e){if(e!==xe)return!1;if(!B)return Xu(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wi(e.type,e.memoizedProps)),n&&(n=ye)){if(Ji(e))throw Va(),Error(S(418));for(;n;)Ha(e,n),n=yn(n.nextSibling)}if(Xu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ye=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ye=null}}else ye=xe?yn(e.stateNode.nextSibling):null;return!0}function Va(){for(var e=ye;e;)e=yn(e.nextSibling)}function pt(){ye=xe=null,B=!1}function Ll(e){Me===null?Me=[e]:Me.push(e)}var Yd=on.ReactCurrentBatchConfig;function _e(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var vo=Tn(null),po=null,rt=null,Ul=null;function Bl(){Ul=rt=po=null}function $l(e){var n=vo.current;U(vo),e._currentValue=n}function Yi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){po=e,Ul=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function Ce(e){var n=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:n,next:null},rt===null){if(po===null)throw Error(S(308));rt=e,po.dependencies={lanes:0,firstContext:e}}else rt=rt.next=e;return n}var Mn=null;function Hl(e){Mn===null?Mn=[e]:Mn.push(e)}function Wa(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Hl(n)):(t.next=o.next,o.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ga(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,tn(e,t)}return o=r.interleaved,o===null?(n.next=n,Hl(r)):(n.next=o.next,o.next=n),r.interleaved=n,tn(e,t)}function Vr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Cl(e,t)}}function Yu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ho(e,n,t,r){var o=e.updateQueue;cn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var s=u,a=s.next;s.next=null,l===null?i=a:l.next=a,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==l&&(u===null?d.firstBaseUpdate=a:u.next=a,d.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;l=0,d=a=s=null,u=i;do{var f=u.lane,v=u.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(f=n,v=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(v,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(v,c,f):m,f==null)break e;c=W({},c,f);break e;case 2:cn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[u]:f.push(u))}else v={eventTime:v,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(a=d=v,s=c):d=d.next=v,l|=f;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;f=u,u=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(d===null&&(s=c),o.baseState=s,o.firstBaseUpdate=a,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Hn|=l,e.lanes=l,e.memoizedState=c}}function qu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Ka=new Ws.Component().refs;function qi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var jo={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ae(),o=wn(e),i=Ze(r,o);i.payload=n,t!=null&&(i.callback=t),n=xn(e,i,o),n!==null&&(De(n,e,o,r),Vr(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ae(),o=wn(e),i=Ze(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=xn(e,i,o),n!==null&&(De(n,e,o,r),Vr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),r=wn(e),o=Ze(t,r);o.tag=2,n!=null&&(o.callback=n),n=xn(e,o,r),n!==null&&(De(n,e,r,t),Vr(n,e,r))}};function Zu(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(o,i):!0}function Qa(e,n,t){var r=!1,o=kn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(o=he(n)?Un:ue.current,r=n.contextTypes,i=(r=r!=null)?vt(e,o):kn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=jo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function bu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&jo.enqueueReplaceState(n,n.state,null)}function Zi(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Ka,Vl(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Ce(i):(i=he(n)?Un:ue.current,o.context=vt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(qi(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&jo.enqueueReplaceState(o,o.state,null),ho(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var u=o.refs;u===Ka&&(u=o.refs={}),l===null?delete u[i]:u[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Or(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function es(e){var n=e._init;return n(e._payload)}function Ja(e){function n(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Sn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,p,g,E){return p===null||p.tag!==6?(p=hi(g,h.mode,E),p.return=h,p):(p=o(p,g),p.return=h,p)}function s(h,p,g,E){var w=g.type;return w===Xn?d(h,p,g.props.children,E,g.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===an&&es(w)===p.type)?(E=o(p,g.props),E.ref=Pt(h,p,g),E.return=h,E):(E=Xr(g.type,g.key,g.props,null,h.mode,E),E.ref=Pt(h,p,g),E.return=h,E)}function a(h,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=mi(g,h.mode,E),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function d(h,p,g,E,w){return p===null||p.tag!==7?(p=An(g,h.mode,E,w),p.return=h,p):(p=o(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hi(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return g=Xr(p.type,p.key,p.props,null,h.mode,g),g.ref=Pt(h,null,p),g.return=h,g;case Jn:return p=mi(p,h.mode,g),p.return=h,p;case an:var E=p._init;return c(h,E(p._payload),g)}if(Ft(p)||kt(p))return p=An(p,h.mode,g,null),p.return=h,p;Or(h,p)}return null}function f(h,p,g,E){var w=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:u(h,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return g.key===w?s(h,p,g,E):null;case Jn:return g.key===w?a(h,p,g,E):null;case an:return w=g._init,f(h,p,w(g._payload),E)}if(Ft(g)||kt(g))return w!==null?null:d(h,p,g,E,null);Or(h,g)}return null}function v(h,p,g,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(g)||null,u(p,h,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Er:return h=h.get(E.key===null?g:E.key)||null,s(p,h,E,w);case Jn:return h=h.get(E.key===null?g:E.key)||null,a(p,h,E,w);case an:var I=E._init;return v(h,p,g,I(E._payload),w)}if(Ft(E)||kt(E))return h=h.get(g)||null,d(p,h,E,w,null);Or(p,E)}return null}function m(h,p,g,E){for(var w=null,I=null,N=p,k=p=0,F=null;N!==null&&k<g.length;k++){N.index>k?(F=N,N=null):F=N.sibling;var O=f(h,N,g[k],E);if(O===null){N===null&&(N=F);break}e&&N&&O.alternate===null&&n(h,N),p=i(O,p,k),I===null?w=O:I.sibling=O,I=O,N=F}if(k===g.length)return t(h,N),B&&zn(h,k),w;if(N===null){for(;k<g.length;k++)N=c(h,g[k],E),N!==null&&(p=i(N,p,k),I===null?w=N:I.sibling=N,I=N);return B&&zn(h,k),w}for(N=r(h,N);k<g.length;k++)F=v(N,h,k,g[k],E),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?k:F.key),p=i(F,p,k),I===null?w=F:I.sibling=F,I=F);return e&&N.forEach(function(ze){return n(h,ze)}),B&&zn(h,k),w}function y(h,p,g,E){var w=kt(g);if(typeof w!="function")throw Error(S(150));if(g=w.call(g),g==null)throw Error(S(151));for(var I=w=null,N=p,k=p=0,F=null,O=g.next();N!==null&&!O.done;k++,O=g.next()){N.index>k?(F=N,N=null):F=N.sibling;var ze=f(h,N,O.value,E);if(ze===null){N===null&&(N=F);break}e&&N&&ze.alternate===null&&n(h,N),p=i(ze,p,k),I===null?w=ze:I.sibling=ze,I=ze,N=F}if(O.done)return t(h,N),B&&zn(h,k),w;if(N===null){for(;!O.done;k++,O=g.next())O=c(h,O.value,E),O!==null&&(p=i(O,p,k),I===null?w=O:I.sibling=O,I=O);return B&&zn(h,k),w}for(N=r(h,N);!O.done;k++,O=g.next())O=v(N,h,k,O.value,E),O!==null&&(e&&O.alternate!==null&&N.delete(O.key===null?k:O.key),p=i(O,p,k),I===null?w=O:I.sibling=O,I=O);return e&&N.forEach(function(St){return n(h,St)}),B&&zn(h,k),w}function x(h,p,g,E){if(typeof g=="object"&&g!==null&&g.type===Xn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:e:{for(var w=g.key,I=p;I!==null;){if(I.key===w){if(w=g.type,w===Xn){if(I.tag===7){t(h,I.sibling),p=o(I,g.props.children),p.return=h,h=p;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===an&&es(w)===I.type){t(h,I.sibling),p=o(I,g.props),p.ref=Pt(h,I,g),p.return=h,h=p;break e}t(h,I);break}else n(h,I);I=I.sibling}g.type===Xn?(p=An(g.props.children,h.mode,E,g.key),p.return=h,h=p):(E=Xr(g.type,g.key,g.props,null,h.mode,E),E.ref=Pt(h,p,g),E.return=h,h=E)}return l(h);case Jn:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{t(h,p);break}else n(h,p);p=p.sibling}p=mi(g,h.mode,E),p.return=h,h=p}return l(h);case an:return I=g._init,x(h,p,I(g._payload),E)}if(Ft(g))return m(h,p,g,E);if(kt(g))return y(h,p,g,E);Or(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(h,p.sibling),p=o(p,g),p.return=h,h=p):(t(h,p),p=hi(g,h.mode,E),p.return=h,h=p),l(h)):t(h,p)}return x}var ht=Ja(!0),Xa=Ja(!1),mr={},Ke=Tn(mr),lr=Tn(mr),ur=Tn(mr);function Fn(e){if(e===mr)throw Error(S(174));return e}function Wl(e,n){switch(D(ur,n),D(lr,e),D(Ke,mr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:zi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=zi(n,e)}U(Ke),D(Ke,n)}function mt(){U(Ke),U(lr),U(ur)}function Ya(e){Fn(ur.current);var n=Fn(Ke.current),t=zi(n,e.type);n!==t&&(D(lr,e),D(Ke,t))}function Gl(e){lr.current===e&&(U(Ke),U(lr))}var H=Tn(0);function mo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ai=[];function Kl(){for(var e=0;e<ai.length;e++)ai[e]._workInProgressVersionPrimary=null;ai.length=0}var Wr=on.ReactCurrentDispatcher,ci=on.ReactCurrentBatchConfig,$n=0,V=null,X=null,b=null,go=!1,Gt=!1,sr=0,qd=0;function oe(){throw Error(S(321))}function Ql(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function Jl(e,n,t,r,o,i){if($n=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wr.current=e===null||e.memoizedState===null?nv:tv,e=t(r,o),Gt){i=0;do{if(Gt=!1,sr=0,25<=i)throw Error(S(301));i+=1,b=X=null,n.updateQueue=null,Wr.current=rv,e=t(r,o)}while(Gt)}if(Wr.current=yo,n=X!==null&&X.next!==null,$n=0,b=X=V=null,go=!1,n)throw Error(S(300));return e}function Xl(){var e=sr!==0;return sr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?V.memoizedState=b=e:b=b.next=e,b}function Pe(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=b===null?V.memoizedState:b.next;if(n!==null)b=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},b===null?V.memoizedState=b=e:b=b.next=e}return b}function ar(e,n){return typeof n=="function"?n(e):n}function fi(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=X,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,s=null,a=i;do{var d=a.lane;if(($n&d)===d)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var c={lane:d,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=c,l=r):s=s.next=c,V.lanes|=d,Hn|=d}a=a.next}while(a!==null&&a!==i);s===null?l=r:s.next=u,Ue(r,n.memoizedState)||(ve=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,V.lanes|=i,Hn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function di(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ue(i,n.memoizedState)||(ve=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function qa(){}function Za(e,n){var t=V,r=Pe(),o=n(),i=!Ue(r.memoizedState,o);if(i&&(r.memoizedState=o,ve=!0),r=r.queue,Yl(nc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,cr(9,ec.bind(null,t,r,o,n),void 0,null),ee===null)throw Error(S(349));$n&30||ba(t,n,o)}return o}function ba(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ec(e,n,t,r){n.value=t,n.getSnapshot=r,tc(n)&&rc(e)}function nc(e,n,t){return t(function(){tc(n)&&rc(e)})}function tc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function rc(e){var n=tn(e,1);n!==null&&De(n,e,1,-1)}function ns(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},n.queue=e,e=e.dispatch=ev.bind(null,V,e),[n.memoizedState,e]}function cr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function oc(){return Pe().memoizedState}function Gr(e,n,t,r){var o=He();V.flags|=e,o.memoizedState=cr(1|n,t,void 0,r===void 0?null:r)}function Mo(e,n,t,r){var o=Pe();r=r===void 0?null:r;var i=void 0;if(X!==null){var l=X.memoizedState;if(i=l.destroy,r!==null&&Ql(r,l.deps)){o.memoizedState=cr(n,t,i,r);return}}V.flags|=e,o.memoizedState=cr(1|n,t,i,r)}function ts(e,n){return Gr(8390656,8,e,n)}function Yl(e,n){return Mo(2048,8,e,n)}function ic(e,n){return Mo(4,2,e,n)}function lc(e,n){return Mo(4,4,e,n)}function uc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sc(e,n,t){return t=t!=null?t.concat([e]):null,Mo(4,4,uc.bind(null,n,e),t)}function ql(){}function ac(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ql(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function cc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ql(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function fc(e,n,t){return $n&21?(Ue(t,n)||(t=pa(),V.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=t)}function Zd(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=ci.transition;ci.transition={};try{e(!1),n()}finally{M=t,ci.transition=r}}function dc(){return Pe().memoizedState}function bd(e,n,t){var r=wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},vc(e))pc(n,t);else if(t=Wa(e,n,t,r),t!==null){var o=ae();De(t,e,r,o),hc(t,n,r)}}function ev(e,n,t){var r=wn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(vc(e))pc(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,u=i(l,t);if(o.hasEagerState=!0,o.eagerState=u,Ue(u,l)){var s=n.interleaved;s===null?(o.next=o,Hl(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Wa(e,n,o,r),t!==null&&(o=ae(),De(t,e,r,o),hc(t,n,r))}}function vc(e){var n=e.alternate;return e===V||n!==null&&n===V}function pc(e,n){Gt=go=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function hc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Cl(e,t)}}var yo={readContext:Ce,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},nv={readContext:Ce,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Ce,useEffect:ts,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Gr(4194308,4,uc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Gr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Gr(4,2,e,n)},useMemo:function(e,n){var t=He();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=He();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bd.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:ns,useDebugValue:ql,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=ns(!1),n=e[0];return e=Zd.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,o=He();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),ee===null)throw Error(S(349));$n&30||ba(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,ts(nc.bind(null,r,i,e),[e]),r.flags|=2048,cr(9,ec.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=He(),n=ee.identifierPrefix;if(B){var t=Ye,r=Xe;t=(r&~(1<<32-Fe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=qd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tv={readContext:Ce,useCallback:ac,useContext:Ce,useEffect:Yl,useImperativeHandle:sc,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:cc,useReducer:fi,useRef:oc,useState:function(){return fi(ar)},useDebugValue:ql,useDeferredValue:function(e){var n=Pe();return fc(n,X.memoizedState,e)},useTransition:function(){var e=fi(ar)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:qa,useSyncExternalStore:Za,useId:dc,unstable_isNewReconciler:!1},rv={readContext:Ce,useCallback:ac,useContext:Ce,useEffect:Yl,useImperativeHandle:sc,useInsertionEffect:ic,useLayoutEffect:lc,useMemo:cc,useReducer:di,useRef:oc,useState:function(){return di(ar)},useDebugValue:ql,useDeferredValue:function(e){var n=Pe();return X===null?n.memoizedState=e:fc(n,X.memoizedState,e)},useTransition:function(){var e=di(ar)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:qa,useSyncExternalStore:Za,useId:dc,unstable_isNewReconciler:!1};function gt(e,n){try{var t="",r=n;do t+=Of(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function vi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function bi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ov=typeof WeakMap=="function"?WeakMap:Map;function mc(e,n,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Eo||(Eo=!0,al=r),bi(e,n)},t}function gc(e,n,t){t=Ze(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){bi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){bi(e,n),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function rs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ov;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=yv.bind(null,e,n,t),n.then(e,e))}function os(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function is(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ze(-1,1),n.tag=2,xn(t,n,1))),t.lanes|=1),e)}var iv=on.ReactCurrentOwner,ve=!1;function se(e,n,t,r){n.child=e===null?Xa(n,null,t,r):ht(n,e.child,t,r)}function ls(e,n,t,r,o){t=t.render;var i=n.ref;return ct(n,o),r=Jl(e,n,t,r,i,o),t=Xl(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,rn(e,n,o)):(B&&t&&Dl(n),n.flags|=1,se(e,n,r,o),n.child)}function us(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!iu(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,yc(e,n,i,r,o)):(e=Xr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(l,r)&&e.ref===n.ref)return rn(e,n,o)}return n.flags|=1,e=Sn(i,r),e.ref=n.ref,e.return=n,n.child=e}function yc(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(tr(i,r)&&e.ref===n.ref)if(ve=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,rn(e,n,o)}return el(e,n,t,r,o)}function xc(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(it,ge),ge|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(it,ge),ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,D(it,ge),ge|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,D(it,ge),ge|=r;return se(e,n,o,t),n.child}function Ec(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function el(e,n,t,r,o){var i=he(t)?Un:ue.current;return i=vt(n,i),ct(n,o),t=Jl(e,n,t,r,i,o),r=Xl(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,rn(e,n,o)):(B&&r&&Dl(n),n.flags|=1,se(e,n,t,o),n.child)}function ss(e,n,t,r,o){if(he(t)){var i=!0;ao(n)}else i=!1;if(ct(n,o),n.stateNode===null)Kr(e,n),Qa(n,t,r),Zi(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var s=l.context,a=t.contextType;typeof a=="object"&&a!==null?a=Ce(a):(a=he(t)?Un:ue.current,a=vt(n,a));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==a)&&bu(n,l,r,a),cn=!1;var f=n.memoizedState;l.state=f,ho(n,r,l,o),s=n.memoizedState,u!==r||f!==s||pe.current||cn?(typeof d=="function"&&(qi(n,t,d,r),s=n.memoizedState),(u=cn||Zu(n,t,u,r,f,s,a))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=a,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Ga(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:_e(n.type,u),l.props=a,c=n.pendingProps,f=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=he(t)?Un:ue.current,s=vt(n,s));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==c||f!==s)&&bu(n,l,r,s),cn=!1,f=n.memoizedState,l.state=f,ho(n,r,l,o);var m=n.memoizedState;u!==c||f!==m||pe.current||cn?(typeof v=="function"&&(qi(n,t,v,r),m=n.memoizedState),(a=cn||Zu(n,t,a,r,f,m,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),l.props=r,l.state=m,l.context=s,r=a):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return nl(e,n,t,r,i,o)}function nl(e,n,t,r,o,i){Ec(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Qu(n,t,!1),rn(e,n,i);r=n.stateNode,iv.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=ht(n,e.child,null,i),n.child=ht(n,null,u,i)):se(e,n,u,i),n.memoizedState=r.state,o&&Qu(n,t,!0),n.child}function wc(e){var n=e.stateNode;n.pendingContext?Ku(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ku(e,n.context,!1),Wl(e,n.containerInfo)}function as(e,n,t,r,o){return pt(),Ll(o),n.flags|=256,se(e,n,t,r),n.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sc(e,n,t){var r=n.pendingProps,o=H.current,i=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(H,o&1),e===null)return Xi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ao(l,r,0,null),e=An(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=rl(t),n.memoizedState=tl,e):Zl(n,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return lv(e,n,l,r,u,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,u=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Sn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Sn(u,i):(i=An(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?rl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=tl,r}return i=e.child,e=i.sibling,r=Sn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Zl(e,n){return n=Ao({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _r(e,n,t,r){return r!==null&&Ll(r),ht(n,e.child,null,t),e=Zl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lv(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=vi(Error(S(422))),_r(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Ao({mode:"visible",children:r.children},o,0,null),i=An(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&ht(n,e.child,null,l),n.child.memoizedState=rl(l),n.memoizedState=tl,i);if(!(n.mode&1))return _r(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(S(419)),r=vi(i,r,void 0),_r(e,n,l,r)}if(u=(l&e.childLanes)!==0,ve||u){if(r=ee,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,tn(e,o),De(r,e,o,-1))}return ou(),r=vi(Error(S(421))),_r(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=xv.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,ye=yn(o.nextSibling),xe=n,B=!0,Me=null,e!==null&&(ke[Ie++]=Xe,ke[Ie++]=Ye,ke[Ie++]=Bn,Xe=e.id,Ye=e.overflow,Bn=n),n=Zl(n,r.children),n.flags|=4096,n)}function cs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yi(e.return,n,t)}function pi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Nc(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(se(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cs(e,t,n);else if(e.tag===19)cs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(H,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&mo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),pi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&mo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}pi(n,!0,t,null,i);break;case"together":pi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Kr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=Sn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Sn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function uv(e,n,t){switch(n.tag){case 3:wc(n),pt();break;case 5:Ya(n);break;case 1:he(n.type)&&ao(n);break;case 4:Wl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;D(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Sc(e,n,t):(D(H,H.current&1),e=rn(e,n,t),e!==null?e.sibling:null);D(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Nc(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,xc(e,n,t)}return rn(e,n,t)}var kc,ol,Ic,Tc;kc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ol=function(){};Ic=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Fn(Ke.current);var i=null;switch(t){case"input":o=Ti(e,o),r=Ti(e,r),i=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":o=Pi(e,o),r=Pi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=uo)}Oi(t,r);var l;t=null;for(a in o)if(!r.hasOwnProperty(a)&&o.hasOwnProperty(a)&&o[a]!=null)if(a==="style"){var u=o[a];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xt.hasOwnProperty(a)?i||(i=[]):(i=i||[]).push(a,null));for(a in r){var s=r[a];if(u=o!=null?o[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(i||(i=[]),i.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Xt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&A("scroll",e),i||u===s||(i=[])):(i=i||[]).push(a,s))}t&&(i=i||[]).push("style",t);var a=i;(n.updateQueue=a)&&(n.flags|=4)}};Tc=function(e,n,t,r){t!==r&&(n.flags|=4)};function zt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function sv(e,n,t){var r=n.pendingProps;switch(Al(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&so(),ie(n),null;case 3:return r=n.stateNode,mt(),U(pe),U(ue),Kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(dl(Me),Me=null))),ol(e,n),ie(n),null;case 5:Gl(n);var o=Fn(ur.current);if(t=n.type,e!==null&&n.stateNode!=null)Ic(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=Fn(Ke.current),zr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ve]=n,r[ir]=i,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(o=0;o<At.length;o++)A(At[o],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":xu(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":wu(r,i),A("invalid",r)}Oi(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),o=["children",""+u]):Xt.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&A("scroll",r)}switch(t){case"input":wr(r),Eu(r,i,!0);break;case"textarea":wr(r),Su(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=uo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ve]=n,e[ir]=r,kc(e,n,!1,!1),n.stateNode=e;e:{switch(l=_i(t,r),t){case"dialog":A("cancel",e),A("close",e),o=r;break;case"iframe":case"object":case"embed":A("load",e),o=r;break;case"video":case"audio":for(o=0;o<At.length;o++)A(At[o],e);o=r;break;case"source":A("error",e),o=r;break;case"img":case"image":case"link":A("error",e),A("load",e),o=r;break;case"details":A("toggle",e),o=r;break;case"input":xu(e,r),o=Ti(e,r),A("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),A("invalid",e);break;case"textarea":wu(e,r),o=Pi(e,r),A("invalid",e);break;default:o=r}Oi(t,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?ta(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ea(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Yt(e,s):typeof s=="number"&&Yt(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xt.hasOwnProperty(i)?s!=null&&i==="onScroll"&&A("scroll",e):s!=null&&Sl(e,i,s,l))}switch(t){case"input":wr(e),Eu(e,r,!1);break;case"textarea":wr(e),Su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?lt(e,!!r.multiple,i,!1):r.defaultValue!=null&&lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=uo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Tc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Fn(ur.current),Fn(Ke.current),zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ve]=n,(i=r.nodeValue!==t)&&(e=xe,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ve]=n,n.stateNode=r}return ie(n),null;case 13:if(U(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ye!==null&&n.mode&1&&!(n.flags&128))Va(),pt(),n.flags|=98560,i=!1;else if(i=zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ve]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),i=!1}else Me!==null&&(dl(Me),Me=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?q===0&&(q=3):ou())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return mt(),ol(e,n),e===null&&rr(n.stateNode.containerInfo),ie(n),null;case 10:return $l(n.type._context),ie(n),null;case 17:return he(n.type)&&so(),ie(n),null;case 19:if(U(H),i=n.memoizedState,i===null)return ie(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)zt(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=mo(e),l!==null){for(n.flags|=128,zt(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D(H,H.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>yt&&(n.flags|=128,r=!0,zt(i,!1),n.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),zt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!B)return ie(n),null}else 2*Q()-i.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,zt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=H.current,D(H,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return ru(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ge&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function av(e,n){switch(Al(n),n.tag){case 1:return he(n.type)&&so(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),U(pe),U(ue),Kl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Gl(n),null;case 13:if(U(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(H),null;case 4:return mt(),null;case 10:return $l(n.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var jr=!1,le=!1,cv=typeof WeakSet=="function"?WeakSet:Set,R=null;function ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function il(e,n,t){try{t()}catch(r){G(e,n,r)}}var fs=!1;function fv(e,n){if(Hi=oo,e=za(),Fl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,u=-1,s=-1,a=0,d=0,c=e,f=null;n:for(;;){for(var v;c!==t||o!==0&&c.nodeType!==3||(u=l+o),c!==i||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(v=c.firstChild)!==null;)f=c,c=v;for(;;){if(c===e)break n;if(f===t&&++a===o&&(u=l),f===i&&++d===r&&(s=l),(v=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=v}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vi={focusedElem:e,selectionRange:t},oo=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,x=m.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:_e(n.type,y),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){G(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return m=fs,fs=!1,m}function Kt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&il(n,t,i)}o=o.next}while(o!==r)}}function Fo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ll(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Rc(e){var n=e.alternate;n!==null&&(e.alternate=null,Rc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ve],delete n[ir],delete n[Ki],delete n[Qd],delete n[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ul(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=uo));else if(r!==4&&(e=e.child,e!==null))for(ul(e,n,t),e=e.sibling;e!==null;)ul(e,n,t),e=e.sibling}function sl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,n,t),e=e.sibling;e!==null;)sl(e,n,t),e=e.sibling}var ne=null,je=!1;function ln(e,n,t){for(t=t.child;t!==null;)Pc(e,n,t),t=t.sibling}function Pc(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Ro,t)}catch{}switch(t.tag){case 5:le||ot(t,n);case 6:var r=ne,o=je;ne=null,ln(e,n,t),ne=r,je=o,ne!==null&&(je?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(je?(e=ne,t=t.stateNode,e.nodeType===8?ui(e.parentNode,t):e.nodeType===1&&ui(e,t),er(e)):ui(ne,t.stateNode));break;case 4:r=ne,o=je,ne=t.stateNode.containerInfo,je=!0,ln(e,n,t),ne=r,je=o;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&il(t,n,l),o=o.next}while(o!==r)}ln(e,n,t);break;case 1:if(!le&&(ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){G(t,n,u)}ln(e,n,t);break;case 21:ln(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,ln(e,n,t),le=r):ln(e,n,t);break;default:ln(e,n,t)}}function vs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cv),n.forEach(function(r){var o=Ev.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ne=u.stateNode,je=!1;break e;case 3:ne=u.stateNode.containerInfo,je=!0;break e;case 4:ne=u.stateNode.containerInfo,je=!0;break e}u=u.return}if(ne===null)throw Error(S(160));Pc(i,l,o),ne=null,je=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(a){G(o,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zc(n,e),n=n.sibling}function zc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),$e(e),r&4){try{Kt(3,e,e.return),Fo(3,e)}catch(y){G(e,e.return,y)}try{Kt(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:Oe(n,e),$e(e),r&512&&t!==null&&ot(t,t.return);break;case 5:if(Oe(n,e),$e(e),r&512&&t!==null&&ot(t,t.return),e.flags&32){var o=e.stateNode;try{Yt(o,"")}catch(y){G(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&qs(o,i),_i(u,l);var a=_i(u,i);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?ta(o,c):d==="dangerouslySetInnerHTML"?ea(o,c):d==="children"?Yt(o,c):Sl(o,d,c,a)}switch(u){case"input":Ri(o,i);break;case"textarea":Zs(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?lt(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?lt(o,!!i.multiple,i.defaultValue,!0):lt(o,!!i.multiple,i.multiple?[]:"",!1))}o[ir]=i}catch(y){G(e,e.return,y)}}break;case 6:if(Oe(n,e),$e(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){G(e,e.return,y)}}break;case 3:if(Oe(n,e),$e(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{er(n.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:Oe(n,e),$e(e);break;case 13:Oe(n,e),$e(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(nu=Q())),r&4&&vs(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(le=(a=le)||d,Oe(n,e),le=a):Oe(n,e),$e(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(f=R,v=f.child,f.tag){case 0:case 11:case 14:case 15:Kt(4,f,f.return);break;case 1:ot(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){G(r,t,y)}}break;case 5:ot(f,f.return);break;case 22:if(f.memoizedState!==null){hs(c);continue}}v!==null?(v.return=f,R=v):hs(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,a?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=na("display",l))}catch(y){G(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(y){G(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Oe(n,e),$e(e),r&4&&vs(e);break;case 21:break;default:Oe(n,e),$e(e)}}function $e(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Cc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yt(o,""),r.flags&=-33);var i=ds(e);sl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ds(e);ul(e,u,l);break;default:throw Error(S(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dv(e,n,t){R=e,Oc(e)}function Oc(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||jr;if(!l){var u=o.alternate,s=u!==null&&u.memoizedState!==null||le;u=jr;var a=le;if(jr=l,(le=s)&&!a)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?ms(o):s!==null?(s.return=l,R=s):ms(o);for(;i!==null;)R=i,Oc(i),i=i.sibling;R=o,jr=u,le=a}ps(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):ps(e)}}function ps(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Fo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:_e(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&qu(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qu(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var d=a.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&er(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||n.flags&512&&ll(n)}catch(f){G(n,n.return,f)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function hs(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function ms(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Fo(4,n)}catch(s){G(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){G(n,o,s)}}var i=n.return;try{ll(n)}catch(s){G(n,i,s)}break;case 5:var l=n.return;try{ll(n)}catch(s){G(n,l,s)}}}catch(s){G(n,n.return,s)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var vv=Math.ceil,xo=on.ReactCurrentDispatcher,bl=on.ReactCurrentOwner,Re=on.ReactCurrentBatchConfig,j=0,ee=null,J=null,te=0,ge=0,it=Tn(0),q=0,fr=null,Hn=0,Do=0,eu=0,Qt=null,de=null,nu=0,yt=1/0,Qe=null,Eo=!1,al=null,En=null,Mr=!1,pn=null,wo=0,Jt=0,cl=null,Qr=-1,Jr=0;function ae(){return j&6?Q():Qr!==-1?Qr:Qr=Q()}function wn(e){return e.mode&1?j&2&&te!==0?te&-te:Yd.transition!==null?(Jr===0&&(Jr=pa()),Jr):(e=M,e!==0||(e=window.event,e=e===void 0?16:wa(e.type)),e):1}function De(e,n,t,r){if(50<Jt)throw Jt=0,cl=null,Error(S(185));vr(e,t,r),(!(j&2)||e!==ee)&&(e===ee&&(!(j&2)&&(Do|=t),q===4&&dn(e,te)),me(e,r),t===1&&j===0&&!(n.mode&1)&&(yt=Q()+500,_o&&Rn()))}function me(e,n){var t=e.callbackNode;Yf(e,n);var r=ro(e,e===ee?te:0);if(r===0)t!==null&&Iu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Iu(t),n===1)e.tag===0?Xd(gs.bind(null,e)):Ba(gs.bind(null,e)),Gd(function(){!(j&6)&&Rn()}),t=null;else{switch(ha(r)){case 1:t=Rl;break;case 4:t=da;break;case 16:t=to;break;case 536870912:t=va;break;default:t=to}t=Uc(t,_c.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function _c(e,n){if(Qr=-1,Jr=0,j&6)throw Error(S(327));var t=e.callbackNode;if(ft()&&e.callbackNode!==t)return null;var r=ro(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=So(e,r);else{n=r;var o=j;j|=2;var i=Mc();(ee!==e||te!==n)&&(Qe=null,yt=Q()+500,Dn(e,n));do try{mv();break}catch(u){jc(e,u)}while(1);Bl(),xo.current=i,j=o,J!==null?n=0:(ee=null,te=0,n=q)}if(n!==0){if(n===2&&(o=Ai(e),o!==0&&(r=o,n=fl(e,o))),n===1)throw t=fr,Dn(e,0),dn(e,r),me(e,Q()),t;if(n===6)dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!pv(o)&&(n=So(e,r),n===2&&(i=Ai(e),i!==0&&(r=i,n=fl(e,i))),n===1))throw t=fr,Dn(e,0),dn(e,r),me(e,Q()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:On(e,de,Qe);break;case 3:if(dn(e,r),(r&130023424)===r&&(n=nu+500-Q(),10<n)){if(ro(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Gi(On.bind(null,e,de,Qe),n);break}On(e,de,Qe);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Fe(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vv(r/1960))-r,10<r){e.timeoutHandle=Gi(On.bind(null,e,de,Qe),r);break}On(e,de,Qe);break;case 5:On(e,de,Qe);break;default:throw Error(S(329))}}}return me(e,Q()),e.callbackNode===t?_c.bind(null,e):null}function fl(e,n){var t=Qt;return e.current.memoizedState.isDehydrated&&(Dn(e,n).flags|=256),e=So(e,n),e!==2&&(n=de,de=t,n!==null&&dl(n)),e}function dl(e){de===null?de=e:de.push.apply(de,e)}function pv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ue(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~eu,n&=~Do,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Fe(n),r=1<<t;e[t]=-1,n&=~r}}function gs(e){if(j&6)throw Error(S(327));ft();var n=ro(e,0);if(!(n&1))return me(e,Q()),null;var t=So(e,n);if(e.tag!==0&&t===2){var r=Ai(e);r!==0&&(n=r,t=fl(e,r))}if(t===1)throw t=fr,Dn(e,0),dn(e,n),me(e,Q()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,On(e,de,Qe),me(e,Q()),null}function tu(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(yt=Q()+500,_o&&Rn())}}function Vn(e){pn!==null&&pn.tag===0&&!(j&6)&&ft();var n=j;j|=1;var t=Re.transition,r=M;try{if(Re.transition=null,M=1,e)return e()}finally{M=r,Re.transition=t,j=n,!(j&6)&&Rn()}}function ru(){ge=it.current,U(it)}function Dn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Wd(t)),J!==null)for(t=J.return;t!==null;){var r=t;switch(Al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:mt(),U(pe),U(ue),Kl();break;case 5:Gl(r);break;case 4:mt();break;case 13:U(H);break;case 19:U(H);break;case 10:$l(r.type._context);break;case 22:case 23:ru()}t=t.return}if(ee=e,J=e=Sn(e.current,null),te=ge=n,q=0,fr=null,eu=Do=Hn=0,de=Qt=null,Mn!==null){for(n=0;n<Mn.length;n++)if(t=Mn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}Mn=null}return e}function jc(e,n){do{var t=J;try{if(Bl(),Wr.current=yo,go){for(var r=V.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}go=!1}if($n=0,b=X=V=null,Gt=!1,sr=0,bl.current=null,t===null||t.return===null){q=1,fr=n,J=null;break}e:{var i=e,l=t.return,u=t,s=n;if(n=te,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,d=u,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=os(l);if(v!==null){v.flags&=-257,is(v,l,u,i,n),v.mode&1&&rs(i,a,n),n=v,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){rs(i,a,n),ou();break e}s=Error(S(426))}}else if(B&&u.mode&1){var x=os(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),is(x,l,u,i,n),Ll(gt(s,u));break e}}i=s=gt(s,u),q!==4&&(q=2),Qt===null?Qt=[i]:Qt.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=mc(i,s,n);Yu(i,h);break e;case 1:u=s;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(En===null||!En.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var E=gc(i,u,n);Yu(i,E);break e}}i=i.return}while(i!==null)}Dc(t)}catch(w){n=w,J===t&&t!==null&&(J=t=t.return);continue}break}while(1)}function Mc(){var e=xo.current;return xo.current=yo,e===null?yo:e}function ou(){(q===0||q===3||q===2)&&(q=4),ee===null||!(Hn&268435455)&&!(Do&268435455)||dn(ee,te)}function So(e,n){var t=j;j|=2;var r=Mc();(ee!==e||te!==n)&&(Qe=null,Dn(e,n));do try{hv();break}catch(o){jc(e,o)}while(1);if(Bl(),j=t,xo.current=r,J!==null)throw Error(S(261));return ee=null,te=0,q}function hv(){for(;J!==null;)Fc(J)}function mv(){for(;J!==null&&!$f();)Fc(J)}function Fc(e){var n=Lc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,n===null?Dc(e):J=n,bl.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=av(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,J=null;return}}else if(t=sv(t,n,ge),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);q===0&&(q=5)}function On(e,n,t){var r=M,o=Re.transition;try{Re.transition=null,M=1,gv(e,n,t,r)}finally{Re.transition=o,M=r}return null}function gv(e,n,t,r){do ft();while(pn!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(qf(e,i),e===ee&&(J=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Mr||(Mr=!0,Uc(to,function(){return ft(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var l=M;M=1;var u=j;j|=4,bl.current=null,fv(e,t),zc(t,e),Ad(Vi),oo=!!Hi,Vi=Hi=null,e.current=t,dv(t),Hf(),j=u,M=l,Re.transition=i}else e.current=t;if(Mr&&(Mr=!1,pn=e,wo=o),i=e.pendingLanes,i===0&&(En=null),Gf(t.stateNode),me(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Eo)throw Eo=!1,e=al,al=null,e;return wo&1&&e.tag!==0&&ft(),i=e.pendingLanes,i&1?e===cl?Jt++:(Jt=0,cl=e):Jt=0,Rn(),null}function ft(){if(pn!==null){var e=ha(wo),n=Re.transition,t=M;try{if(Re.transition=null,M=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,wo=0,j&6)throw Error(S(331));var o=j;for(j|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(R=a;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Kt(8,d,i)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var f=d.sibling,v=d.return;if(Rc(d),d===a){R=null;break}if(f!==null){f.return=v,R=f;break}R=v}}}var m=i.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Kt(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,R=h;break e}R=i.return}}var p=e.current;for(R=p;R!==null;){l=R;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,R=g;else e:for(l=p;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Fo(9,u)}}catch(w){G(u,u.return,w)}if(u===l){R=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,R=E;break e}R=u.return}}if(j=o,Rn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Ro,e)}catch{}r=!0}return r}finally{M=t,Re.transition=n}}return!1}function ys(e,n,t){n=gt(t,n),n=mc(e,n,1),e=xn(e,n,1),n=ae(),e!==null&&(vr(e,1,n),me(e,n))}function G(e,n,t){if(e.tag===3)ys(e,e,t);else for(;n!==null;){if(n.tag===3){ys(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=gt(t,e),e=gc(n,e,1),n=xn(n,e,1),e=ae(),n!==null&&(vr(n,1,e),me(n,e));break}}n=n.return}}function yv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(q===4||q===3&&(te&130023424)===te&&500>Q()-nu?Dn(e,0):eu|=t),me(e,n)}function Ac(e,n){n===0&&(e.mode&1?(n=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):n=1);var t=ae();e=tn(e,n),e!==null&&(vr(e,n,t),me(e,t))}function xv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ac(e,t)}function Ev(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Ac(e,t)}var Lc;Lc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)ve=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ve=!1,uv(e,n,t);ve=!!(e.flags&131072)}else ve=!1,B&&n.flags&1048576&&$a(n,fo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Kr(e,n),e=n.pendingProps;var o=vt(n,ue.current);ct(n,t),o=Jl(null,n,r,e,o,t);var i=Xl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(i=!0,ao(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vl(n),o.updater=jo,n.stateNode=o,o._reactInternals=n,Zi(n,r,e,t),n=nl(null,n,r,!0,i,t)):(n.tag=0,B&&i&&Dl(n),se(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Kr(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Sv(r),e=_e(r,e),o){case 0:n=el(null,n,r,e,t);break e;case 1:n=ss(null,n,r,e,t);break e;case 11:n=ls(null,n,r,e,t);break e;case 14:n=us(null,n,r,_e(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:_e(r,o),el(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:_e(r,o),ss(e,n,r,o,t);case 3:e:{if(wc(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Ga(e,n),ho(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=gt(Error(S(423)),n),n=as(e,n,r,t,o);break e}else if(r!==o){o=gt(Error(S(424)),n),n=as(e,n,r,t,o);break e}else for(ye=yn(n.stateNode.containerInfo.firstChild),xe=n,B=!0,Me=null,t=Xa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===o){n=rn(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return Ya(n),e===null&&Xi(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Wi(r,o)?l=null:i!==null&&Wi(r,i)&&(n.flags|=32),Ec(e,n),se(e,n,l,t),n.child;case 6:return e===null&&Xi(n),null;case 13:return Sc(e,n,t);case 4:return Wl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ht(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:_e(r,o),ls(e,n,r,o,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,D(vo,r._currentValue),r._currentValue=l,i!==null)if(Ue(i.value,l)){if(i.children===o.children&&!pe.current){n=rn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ze(-1,t&-t),s.tag=2;var a=i.updateQueue;if(a!==null){a=a.shared;var d=a.pending;d===null?s.next=s:(s.next=d.next,d.next=s),a.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Yi(i.return,t,n),u.lanes|=t;break}s=s.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Yi(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}se(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,ct(n,t),o=Ce(o),r=r(o),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,o=_e(r,n.pendingProps),o=_e(r.type,o),us(e,n,r,o,t);case 15:return yc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:_e(r,o),Kr(e,n),n.tag=1,he(r)?(e=!0,ao(n)):e=!1,ct(n,t),Qa(n,r,o),Zi(n,r,o,t),nl(null,n,r,!0,e,t);case 19:return Nc(e,n,t);case 22:return xc(e,n,t)}throw Error(S(156,n.tag))};function Uc(e,n){return fa(e,n)}function wv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,n,t,r){return new wv(e,n,t,r)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sv(e){if(typeof e=="function")return iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kl)return 11;if(e===Il)return 14}return 2}function Sn(e,n){var t=e.alternate;return t===null?(t=Te(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Xr(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")iu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xn:return An(t.children,o,i,n);case Nl:l=8,o|=8;break;case Si:return e=Te(12,t,n,o|2),e.elementType=Si,e.lanes=i,e;case Ni:return e=Te(13,t,n,o),e.elementType=Ni,e.lanes=i,e;case ki:return e=Te(19,t,n,o),e.elementType=ki,e.lanes=i,e;case Js:return Ao(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ks:l=10;break e;case Qs:l=9;break e;case kl:l=11;break e;case Il:l=14;break e;case an:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Te(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function An(e,n,t,r){return e=Te(7,e,r,n),e.lanes=t,e}function Ao(e,n,t,r){return e=Te(22,e,r,n),e.elementType=Js,e.lanes=t,e.stateNode={isHidden:!1},e}function hi(e,n,t){return e=Te(6,e,null,n),e.lanes=t,e}function mi(e,n,t){return n=Te(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nv(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function lu(e,n,t,r,o,i,l,u,s){return e=new Nv(e,n,t,u,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Te(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(i),e}function kv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bc(e){if(!e)return kn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(he(t))return Ua(e,t,n)}return n}function $c(e,n,t,r,o,i,l,u,s){return e=lu(t,r,!0,e,o,i,l,u,s),e.context=Bc(null),t=e.current,r=ae(),o=wn(t),i=Ze(r,o),i.callback=n??null,xn(t,i,o),e.current.lanes=o,vr(e,o,r),me(e,r),e}function Lo(e,n,t,r){var o=n.current,i=ae(),l=wn(o);return t=Bc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ze(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=xn(o,n,l),e!==null&&(De(e,o,l,i),Vr(e,o,l)),l}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function uu(e,n){xs(e,n),(e=e.alternate)&&xs(e,n)}function Iv(){return null}var Hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}Uo.prototype.render=su.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Lo(e,n,null,null)};Uo.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){Lo(null,e,null,null)}),n[nn]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var n=ya();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&Ea(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Es(){}function Tv(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var a=No(l);i.call(a)}}var l=$c(n,r,e,0,null,!1,!1,"",Es);return e._reactRootContainer=l,e[nn]=l.current,rr(e.nodeType===8?e.parentNode:e),Vn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var a=No(s);u.call(a)}}var s=lu(e,0,!1,null,null,!1,!1,"",Es);return e._reactRootContainer=s,e[nn]=s.current,rr(e.nodeType===8?e.parentNode:e),Vn(function(){Lo(n,s,t,r)}),s}function $o(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var s=No(l);u.call(s)}}Lo(n,l,e,o)}else l=Tv(t,n,e,o,r);return No(l)}ma=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Dt(n.pendingLanes);t!==0&&(Cl(n,t|1),me(n,Q()),!(j&6)&&(yt=Q()+500,Rn()))}break;case 13:Vn(function(){var r=tn(e,1);if(r!==null){var o=ae();De(r,e,1,o)}}),uu(e,1)}};Pl=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=ae();De(n,e,134217728,t)}uu(e,134217728)}};ga=function(e){if(e.tag===13){var n=wn(e),t=tn(e,n);if(t!==null){var r=ae();De(t,e,n,r)}uu(e,n)}};ya=function(){return M};xa=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Mi=function(e,n,t){switch(n){case"input":if(Ri(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Oo(r);if(!o)throw Error(S(90));Ys(r),Ri(r,o)}}}break;case"textarea":Zs(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}};ia=tu;la=Vn;var Rv={usingClientEntryPoint:!1,Events:[hr,bn,Oo,ra,oa,tu]},Ot={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cv={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=aa(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{Ro=Fr.inject(Cv),Ge=Fr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(n))throw Error(S(200));return kv(e,n,null,t)};we.createRoot=function(e,n){if(!au(e))throw Error(S(299));var t=!1,r="",o=Hc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=lu(e,1,!1,null,null,t,!1,r,o),e[nn]=n.current,rr(e.nodeType===8?e.parentNode:e),new su(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=aa(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Vn(e)};we.hydrate=function(e,n,t){if(!Bo(n))throw Error(S(200));return $o(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!au(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Hc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=$c(n,null,e,1,t??null,o,!1,i,l),e[nn]=n.current,rr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Uo(n)};we.render=function(e,n,t){if(!Bo(n))throw Error(S(200));return $o(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!Bo(e))throw Error(S(40));return e._reactRootContainer?(Vn(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};we.unstable_batchedUpdates=tu;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bo(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return $o(e,n,t,!1,r)};we.version="18.2.0-next-9e3b772b8-20220608";function Vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vc)}catch(e){console.error(e)}}Vc(),$s.exports=we;var Pv=$s.exports,ws=Pv;hu.createRoot=ws.createRoot,hu.hydrateRoot=ws.hydrateRoot;const zv=`float ease(float t) {
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
`,Ov=`#include config

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
`,_v=`bool nan(in vec2 v) {
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
`,jv=`#include helpers
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
`,Mv=`const vec2 cone = vec2(1., 0);
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
  float attenuation = 1. / (1. + distance * distance * .005);
  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;
  float diffuse = abs(dot(vNormal, lightDirection));
  float specular = 0.;
  #if LIGHTING == 0
  // Lambert
  specular = 0.;

  #elif LIGHTING == 1
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, vNormal);
  specular = pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif LIGHTING == 2
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  specular = pow(abs(dot(vNormal, halfVector)), shininess);

  #elif LIGHTING == 3
  // Toon
  specular = 0.;
  diffuse = floor(diffuse * 4.) / 4.;

  #elif LIGHTING == 4
  // Oren-Nayar
  float roughness = 0.5;
  float A = 1. - 0.5 * (roughness / (roughness + 0.33));
  float B = 0.45 * (roughness / (roughness + 0.09));
  float theta_i = acos(dot(vNormal, lightDirection));
  float theta_r = acos(dot(vNormal, eyeDirection));
  float alpha = max(theta_i, theta_r);
  float beta = min(theta_i, theta_r);
  diffuse = max(0., dot(lightDirection, vNormal)) * (A + B * max(0., cos(theta_i - theta_r)) * sin(alpha) * tan(beta));
  specular = 0.;

  #endif

  return vec4((ambient + diffuse + specular) * attenuation * color.rgb, color.a);
  #else
  return color;
  #endif
}
`,Hp=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Wc=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((o,i)=>e+i*t)},ko=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},vl=e=>{for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)e[n][t]=Lv(e[n][t]);return e},Ne=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let o=0;o<n[0].length;o++){let i=0;for(let l=0;l<n.length;l++)i+=e[r][l]*n[l][o];t[r][o]=i}}return t},Vp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},pl=e=>{const n=new Array(e.length);for(let t=0;t<e.length;t++)n[t]=new Array(e.length).fill(0),n[t][t]=e[t];return n},Be=e=>{const n=new Array(e).fill(1);return pl(n)},Dv=e=>e.every((n,t)=>n.every((r,o)=>t===o||e[t][o]===0)),Av=e=>{const n=e[0].length;let t=e.map(s=>s.slice()),r=Be(n),o=1e3;for(;!Dv(t)&&o-- >0;){let s=0,a=1;for(let f=0;f<n;f++)for(let v=0;v<n;v++)f!==v&&be(t[f][v])>be(t[s][a])&&(s=f,a=v);const d=t[s][s]===t[a][a]?cu(t[s][a])*Le/4:.5*Qv(2*t[s][a]/(t[s][s]-t[a][a])),c=Be(n);c[a][a]=c[s][s]=qe(d),c[a][s]=c[s][a]=-We(d),c[a][s]*=-1,r=Ne(r,c),t=Ne(Ne(ko(c),t),c)}const i=t.map((s,a)=>be(s[a])<1e-8?0:s[a]),l=i.map((s,a)=>[s,a]).sort((s,a)=>a[0]-s[0]).map(s=>s[1]),u=ko(r);return{values:l.map(s=>i[s]),vectors:l.map(s=>u[s])}},Ss=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...Be(n)[r]]);for(let r=0;r<n;r++){const o=t[r][r];for(let i=r+1;i<n;i++){const l=t[i][r]/o;for(let u=r;u<2*n;u++)t[i][u]-=l*t[r][u]}}for(let r=n-1;r>=0;r--){const o=t[r][r];for(let i=r-1;i>=0;i--){const l=t[i][r]/o;for(let u=0;u<2*n;u++)t[i][u]-=l*t[r][u]}for(let i=n;i<2*n;i++)t[r][i]/=o}return t.map(r=>r.slice(n))},Lv=e=>be(e)<1e-9?0:e,Uv=e=>{const n=e.length,t=Be(n),r=Be(n);for(let o=0;o<n;o++){t[o][o]=e[o][o];for(let i=0;i<o;i++)t[o][o]-=r[o][i]**2*t[i][i];for(let i=o+1;i<n;i++){let l=0;for(let u=0;u<o;u++)l+=r[o][u]*r[i][u]*t[u][u];r[i][o]=(e[i][o]-l)/t[o][o]}}return vl(t),vl(r),{L:r,D:t}},Io=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Bv=(e,n,t,r,o=1)=>{const i=o/Qc(e/2),l=1/(t-r),u=Be(4);return u[0][0]=i/n,u[1][1]=i,u[2][2]=(r+t)*l,u[3][2]=-1,u[2][3]=2*r*t*l,u[3][3]=0,u},$v=(e,n,t)=>{if(be(e[0]-n[0])<1e-4&&be(e[1]-n[1])<1e-4&&be(e[2]-n[2])<1e-4)return Be(4);let r=e[0]-n[0],o=e[1]-n[1],i=e[2]-n[2],l=1/L(r*r+o*o+i*i);r*=l,o*=l,i*=l;let u=t[1]*i-t[2]*o,s=t[2]*r-t[0]*i,a=t[0]*o-t[1]*r;l=L(u*u+s*s+a*a),l?(l=1/l,u*=l,s*=l,a*=l):(u=0,s=0,a=0);let d=o*a-i*s,c=i*u-r*a,f=r*s-o*u;l=L(d*d+c*c+f*f),l?(l=1/l,d*=l,c*=l,f*=l):(d=0,c=0,f=0);const v=Be(4);return v[0][0]=u,v[1][0]=d,v[2][0]=r,v[0][1]=s,v[1][1]=c,v[2][1]=o,v[0][2]=a,v[1][2]=f,v[2][2]=i,v[0][3]=-(u*e[0]+s*e[1]+a*e[2]),v[1][3]=-(d*e[0]+c*e[1]+f*e[2]),v[2][3]=-(r*e[0]+o*e[1]+i*e[2]),v},Hv=(e,n,t)=>{let r=0;for(let o=0;o<e.length;o++)r+=e[o]*n[o]*(o===e.length-1&&t||1);return r},Vv=(e,n)=>Hv(e,e,n),Wv=(e,n)=>{if(e=e.slice(),n===0){for(let r=0;r<e.length;r++)e[r]/=e[e.length-1];return e}const t=(n===-1&&cu(e[e.length-1])||1)/L(Qn(1e-32,be(Vv(e,n))));for(let r=0;r<e.length;r++)e[r]*=t;return e},Wp=(e,n)=>vl(e.map((t,r)=>t.map((o,i)=>o<0?-Kv(-o/10):o===0?-1:-qe(n[r][i]*Le/o)))),Gc=e=>{const n=Av(e);return{"+":n.values.filter(t=>t>0).length,"-":n.values.filter(t=>t<0).length,0:n.values.filter(t=>t===0).length,eigens:n}},Kc=(e,n=[],t=0,r=10)=>{n[t]=n[t]||[];for(let o=0;o<e.length;o++){const i=e.filter((l,u)=>u!==o).map(l=>l.filter((u,s)=>s!==o));n[t].push(Gc(i)),i.length>1&&t+1<r&&Kc(i,n,t+1,r)}return n},Gp=e=>{const n=Gc(e),t=n.eigens;if(n["-"]===0&&n[0]===0)return{type:"finite",curvature:1,eigens:t,gram:e};if(n["-"]===0&&n[0]>0)return{type:"affine",curvature:0,eigens:t,gram:e};if(n["-"]>1)return{type:"hyperbolic",subtype:"superhyperbolic",level:n["-"],curvature:-1,eigens:t,gram:e};const r=Kc(e,[],0,3),o=r[0];if(o.every(i=>i["-"]===0&&i[0]===0))return{type:"hyperbolic",subtype:"compact",curvature:-1,eigens:t,gram:e};if(o.every(i=>i["-"]===0))return{type:"hyperbolic",subtype:"paracompact",curvature:-1,eigens:t,gram:e};for(let i=1;i<r.length;i++)if(r[i].every(u=>u["-"]===0))return{type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:i+1,eigens:t,gram:e};return console.log("indefinite",r),{type:"indefinite",curvature:-1,eigens:t,gram:e}},Kp=(e,n)=>{const t=e.gram.length,r=e.eigens,o=e.curvature;console.log(r);const i=pl(Wc(t).map(m=>m===t-1&&o||1));if(n===!0){const{L:m,D:y}=Uv(e.gram);if(o===0&&(y[t-1][t-1]=.25),y.some((p,g)=>isNaN(y[g][g]))){const p=Gv(e,n);return{normals:p,vertices:Ss(Ne(p,i))}}const x=Ne(i,y).map((p,g)=>p.map((E,w)=>g===w?L(E):0)),h=Ne(m,x);return{normals:h,vertices:Ss(Ne(h,i))}}const l=r.values.slice(),u=r.vectors.slice();if(n===!1){const m=Ae(...l.filter(y=>y>0));u.splice(1,0,u.splice(l.indexOf(m),1)[0]),l.splice(l.indexOf(m),1),l.splice(1,0,m)}l.forEach((m,y)=>{m===0&&(l[y]=.05)});const s=ko(u),a=pl(l),d=Ne(i,a).map((m,y)=>m.map((x,h)=>y===h?L(x):0)),c=d.map((m,y)=>m.map((x,h)=>y===h?1/x:0)),f=Ne(s,d),v=Ne(Ne(i,c),ko(s));return{normals:f,vertices:v}},Qp=e=>e.sort((n,t)=>{const[r,o]=n,[i,l]=t;return r===0&&o===1?1:i===0&&l===1||r<2&&i>=2?-1:i<2&&r>=2?1:r<2&&i<2?o===l?i-r:o-l:r===i?l-o:i-r}),Jp=(e,n,t,r,o)=>{const i=Be(r);if(n>t.length-1||be(e)>1)return i;const[l,u]=t[n],s=u===r-1?o:1,a=L(1-s*e*e),d=e;return i[l][l]=a,i[u][u]=a,i[l][u]=-s*d,i[u][l]=d,i},Gv=(e,n)=>{const t=e.gram,r=t.length,o=e.curvature;let i=null;const l=t.every((u,s)=>u.every((a,d)=>s===d||a<=-1));if(n||l){if(i=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const u=(t[0][1]+1)/2;return i[0][0]=L(u-t[0][1]),i[1][0]=-L(u-t[0][1]),i[0][1]=i[1][1]=L((o||1)*u),o===0&&(i[1][1]=.5),i}else if(r===3){const u=t[0][1],s=t[1][2],a=t[0][2],d=(u*u+s*s+a*a-2*u*s*a-1)/(u*u+s*s+a*a-2*u*s-2*u*a-2*s*a+2*u+2*s+2*a-3);return i[0][2]=i[1][2]=i[2][2]=o*L(o*d),i[2][1]=-L(1-d),i[1][1]=(s-d)/i[2][1],i[0][1]=(a-d)/i[2][1],i[1][0]=-L(1-i[1][1]**2-d),i[0][0]=L(1-i[0][1]**2-d),o===0&&(i[2][2]=.5),i}else if(r===4){const u=t[0][1],s=t[1][2],a=t[2][3],d=t[0][2],c=t[1][3],f=t[0][3],v=(u*u*a*a+s*s*f*f+d*d*c*c-u*u-s*s-a*a-d*d-c*c-f*f+2*u*c*f+2*u*s*d+2*s*a*c+2*a*d*f-2*s*d*c*f-2*u*s*a*f-2*u*a*d*c+1)/(2*(u*u*a+s*s*f+a*a*u+d*d*c+c*c*d+f*f*s-u*u-s*s-a*a-d*d-c*c-f*f-u*s*a-u*s*f-u*a*d-u*a*c-u*a*f-u*d*c-s*a*f-s*d*c-s*d*f-s*c*f-a*d*c-d*c*f+u*s*d+u*c*f+s*a*c+a*d*f+u*s+u*d+u*c+u*f+s*a+s*d+s*c+a*d+a*c+a*f+d*f+c*f-u-s-a-d-c-f+2));return i[0][3]=i[1][3]=i[2][3]=i[3][3]=o*L(o*v),i[3][2]=-L(1-v),i[2][2]=(a-v)/i[3][2],i[1][2]=(c-v)/i[3][2],i[0][2]=(f-v)/i[3][2],i[2][1]=-L(1-v-i[2][2]**2),i[1][1]=(s-v-i[1][2]*i[2][2])/i[2][1],i[0][1]=(d-v-i[0][2]*i[2][2])/i[2][1],i[1][0]=-L(1-v-i[1][1]**2-i[1][2]**2),i[0][0]=L(1-v-i[0][1]**2-i[0][2]**2),o===0&&(i[3][3]=.5),i}if(t.every((u,s)=>u.every((a,d)=>s===d||a===-1))){const u=[0];for(let s=1;s<r;s++)u[s]=(u[s-1]+1)/(3-u[s-1]);i[0][0]=1,i[1][0]=-1,i[0][1]=L(u[1]),i[1][1]=L(u[1]);for(let s=0;s<r;s++)for(let a=0;a<r;a++)s<2&&a<2||(i[s][a]=a<s-1?0:a===s-1?-(s*L(u[a]-u[a-1])):a<r-1?L(u[a]-u[a-1]):L(u[a-1]));return i}}},{abs:be,cos:qe,sin:We,tan:Qc,cosh:Kv,sinh:Xp,acos:Yp,acosh:qp,atan:Qv,atan2:Jv,min:Ae,max:Qn,round:Zp,sqrt:L,sign:cu,ceil:bp,floor:e0,log:n0,exp:t0,hypot:r0,pow:Xv,PI:Le}=Math,hl=Le*2;function*Yv(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(o=>e[o]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let o=t[r]+1;r<n;r++,o++)t[r]=o}}const o0=(e,n=2)=>Array.from(Yv(e,n)),Jc=e=>String.fromCharCode(97+e),Ns=e=>e.charCodeAt(0)-97,Yr=e=>e?e*Yr(e-1):1,i0=(e,n)=>Yr(e)/(Yr(n)*Yr(e-n));var Xc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(tf,function(){var t=function(){function r(v){return l.appendChild(v.dom),v}function o(v){for(var m=0;m<l.children.length;m++)l.children[m].style.display=m===v?"block":"none";i=v}var i=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(v){v.preventDefault(),o(++i%l.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,d=r(new t.Panel("FPS","#0ff","#002")),c=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=r(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:l,addPanel:r,showPanel:o,begin:function(){u=(performance||Date).now()},end:function(){a++;var v=(performance||Date).now();if(c.update(v-u,200),v>s+1e3&&(d.update(1e3*a/(v-s),100),s=v,a=0,f)){var m=performance.memory;f.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return v},update:function(){u=this.end()},domElement:l,setMode:o}};return t.Panel=function(r,o,i){var l=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),d=80*a,c=48*a,f=3*a,v=2*a,m=3*a,y=15*a,x=74*a,h=30*a,p=document.createElement("canvas");p.width=d,p.height=c,p.style.cssText="width:80px;height:48px";var g=p.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=i,g.fillRect(0,0,d,c),g.fillStyle=o,g.fillText(r,f,v),g.fillRect(m,y,x,h),g.fillStyle=i,g.globalAlpha=.9,g.fillRect(m,y,x,h),{dom:p,update:function(E,w){l=Math.min(l,E),u=Math.max(u,E),g.fillStyle=i,g.globalAlpha=1,g.fillRect(0,0,d,y),g.fillStyle=o,g.fillText(s(E)+" "+r+" ("+s(l)+"-"+s(u)+")",f,v),g.drawImage(p,m+a,y,x-a,h,m,y,x-a,h),g.fillRect(m+x-a,y,a,h),g.fillStyle=i,g.globalAlpha=.9,g.fillRect(m+x-a,y,a,s((1-E/w)*h))}}},t})})(Xc);var qv=Xc.exports;const Zv=rf(qv),bv=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],o=[],i=[],l=[];let u=0;const s=[];for(let a=0;a<=t;a++){const d=[],c=a/t;let f=0;a===0?f=.5/n:a===t&&(f=-.5/n);for(let v=0;v<=n;v++){const m=v/n,y=[-e*qe(m*hl)*We(c*Le),e*qe(c*Le),e*We(m*hl)*We(c*Le)];o.push(...y);const x=(y[0]**2+y[1]**2+y[2]**2)**-.5;i.push(...y.map(h=>h*x)),l.push(m+f,1-c),d.push(u++)}s.push(d)}for(let a=0;a<t;a++)for(let d=0;d<n;d++){const c=s[a][d+1],f=s[a][d],v=s[a+1][d],m=s[a+1][d+1];a!==0&&r.push(c,f,m),a!==t-1&&r.push(f,v,m)}return{vertices:o,normals:i,uvs:l,indices:r}},ep=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:o=8,segments:i=1}={})=>{const l=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let d=0;const c=[],f=r/2,v=(t-n)/r;for(let m=0;m<=i;m++){const y=[],x=m/i,h=x*(t-n)+n;for(let p=0;p<=o;p++){const g=p/o,E=g*hl,w=We(E),I=qe(E),N=[h*w,-x*r+f,h*I];u.push(...N);const k=[w,v,I],F=(k[0]**2+k[1]**2+k[2]**2)**-.5;s.push(...k.map(O=>O*F)),a.push(g,1-x),y.push(d++)}c.push(y)}for(let m=0;m<o;m++)for(let y=0;y<i;y++){const x=c[y][m],h=c[y+1][m],p=c[y+1][m+1],g=c[y][m+1];l.push(x,h,g),l.push(h,p,g)}return{vertices:u,normals:s,uvs:a,indices:l}},np=({segments:e=3}={})=>{const n=[],t=[],r=[],o=[],i=1/e;for(let l=0;l<e+1;l++)for(let u=0;u<l+1;u++)t.push((2*u-l)*i/2,l*i,0),r.push(0,0,1),o.push(i*u,1-i*l);for(let l=1;l<e+1;l++)for(let u=0;u<l;u++){const s=l*(l+1)/2+u,a=l*(l-1)/2+u;if(n.push(s,a,s+1),l<e){const d=(l+1)*(l+2)/2+u;n.push(d+1,s,s+1)}}return{vertices:t,normals:r,uvs:o,indices:n}},tp="dsbßx",rp=e=>e!==""&&e!=="x",qr=e=>e==="d"||e==="b",Yc=e=>e==="s"||e==="b",op=e=>e==="ß",Dr={active:1,inactive:0,dual:"d",snub:"s",holosnub:"ß",dualsnub:"b",custom:.5,activeVoid:"x",void:""},qc=e=>e===0?"inactive":e===1?"active":e==="d"?"dual":e==="s"?"snub":e==="ß"?"holosnub":e==="b"?"dualsnub":e==="x"?"activeVoid":e===""?"void":"custom",ip=(e,n,t,r)=>{const o=[],i=[],l=[];for(let s=0;s<e.ranges.face[1];s++){const a=e.face[s],d=new Array(t).fill(0);for(let c=0;c<a.vertices.length;c++){const f=e.vertex[a.vertices[c]];for(let v=0;v<t;v++)d[v]+=f.vertex[v]}for(let c=0;c<t;c++)d[c]/=a.vertices.length;o.push({vertex:Wv(d,r),word:a.word})}const u=new Map;for(let s=0;s<e.ranges.face[1];s++)for(let a=s+1;a<e.ranges.face[1];a++){const d=e.face[s],c=e.face[a];d.vertices.filter(v=>c.vertices.includes(v)).length>1&&(i.push({start:s,end:a,word:d.word}),u.has(s)||u.set(s,[]),u.has(a)||u.set(a,[]),u.get(s).push(a),u.get(a).push(s))}for(let s=0;s<e.ranges.vertex[1];s++){const a=[];for(let f=0;f<e.ranges.face[1];f++)e.face[f].vertices.includes(s)&&a.push(f);const d=[a.shift()];let c=!1;for(;a.length>1;){const f=d[d.length-1],v=u.get(f);if(!v){c=!0;break}const m=a.find(y=>v.includes(y));if(!m){c=!0;break}a.splice(a.indexOf(m),1),d.push(m)}c||(d.push(a[0]),l.push({vertices:d,word:e.vertex[s].word}))}return{vertex:o,edge:i,face:l,ranges:{vertex:[0,o.length],edge:[0,i.length],face:[0,l.length]}}},lp=(e,n,t,r)=>{const o=new Map,i=[],l=[],u=[],s=n.map((c,f)=>Yc(c)?Jc(f):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const f=e.vertex[c];f.word.replace(a,"").length%2===1?(f.vertex=NaN,o.set(f.i,[])):i.push(f)}for(let c=0;c<e.ranges.edge[1];c++)if(o.has(e.edge[c].start)){const f=o.get(e.edge[c].start);f.push(e.edge[c].end),f.word||(f.word=e.edge[c].word),o.get(e.edge[c].start).push(e.edge[c].end)}else if(o.has(e.edge[c].end)){const f=o.get(e.edge[c].end);f.push(e.edge[c].start),f.word||(f.word=e.edge[c].word),o.get(e.edge[c].end).push(e.edge[c].start)}else l.push(e.edge[c]);const d=Array.from(o.keys());for(let c=0;c<o.size;c++){const f=d[c],v=o.get(f),m=o.get(f);for(let y=0;y<v.length;y++)for(let x=0;x<m.length;x++)v[y]<=m[x]||l.push({start:v[y],end:m[x],word:m.word})}for(let c=0;c<l.length;c++){const f=l[c];for(let v=0;v<2;v++){const m=v?"start":"end",y=f[m];for(let x=0;x<o.size&&!(d[x]>y);x++)f[m]--}}for(let c=0;c<e.ranges.face[1];c++){const f=e.face[c],v=[];for(let m=0;m<f.vertices.length;m++)o.has(f.vertices[m])||v.push(f.vertices[m]);u.push({...f,vertices:v})}for(let c=0;c<o.size;c++){const f=d[c],v=o.get(f);u.push({vertices:v,word:v.word})}for(let c=0;c<u.length;c++){const f=u[c];for(let v=0;v<f.vertices.length;v++){const m=f.vertices[v];for(let y=0;y<o.size&&!(d[y]>m);y++)f.vertices[v]--}}return{vertex:i,edge:l,face:u,ranges:{vertex:[0,i.length],edge:[0,l.length],face:[0,u.length]}}},up=(e,n,t,r)=>{const o=[new Map,new Map],i=[],l=[],u=[],s=n.map((c,f)=>c==="ß"?Jc(f):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const f=e.vertex[c];o[f.word.replace(a,"").length%2].set(f.i,[])}i.push(...e.vertex);const d=[new Map,new Map];for(let c=0;c<2;c++){for(let v=0;v<e.ranges.edge[1];v++)if(o[c].has(e.edge[v].start)){d[c].has(e.edge[v].start)||d[c].set(e.edge[v].start,[]);const m=o[c].get(e.edge[v].start);m.push(e.edge[v].end),m.word||(m.word=e.edge[v].word),d[c].get(e.edge[v].start).push(e.edge[v].end)}else if(o[c].has(e.edge[v].end)){d[c].has(e.edge[v].end)||d[c].set(e.edge[v].end,[]);const m=o[c].get(e.edge[v].end);m.push(e.edge[v].start),m.word||(m.word=e.edge[v].word),d[c].get(e.edge[v].end).push(e.edge[v].start)}else l.push(e.edge[v]);const f=Array.from(d[c].keys());for(let v=0;v<d[c].size;v++){const m=f[v],y=d[c].get(m),x=o[c].get(m);for(let h=0;h<y.length;h++)for(let p=0;p<x.length;p++)y[h]<=x[p]||l.push({start:y[h],end:x[p],word:x.word})}}for(let c=0;c<2;c++){const f=Array.from(d[c].keys());for(let v=0;v<e.ranges.face[1];v++){const m=e.face[v],y=[];for(let x=0;x<m.vertices.length;x++)o[c].has(m.vertices[x])||y.push(m.vertices[x]);u.push({...m,vertices:y})}for(let v=0;v<d[c].size;v++){const m=f[v],y=o[c].get(m);u.push({vertices:y,word:y.word})}}return{vertex:i,edge:l,face:u,ranges:{vertex:[0,i.length],edge:[0,l.length],face:[0,u.length]}}},sp=`#version 300 es
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
`,ap=`#version 300 es
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

  vec3 norm = cross(nextProj, proj);

  // // Find a stable norm for the whole tube
  // vecN mid = mix(iPosition, iTarget, .5f);

  // vec3 start = xproject(iPosition);
  // vec3 end = xproject(iTarget);
  // vec3 middle = xproject(xnormalize(mid));
  // vec3 norm = cross(end - start, middle - start);

  // // If there is no curvature the tube will be straight:
  // if(length(norm) < 0.001f) {
  //   middle += NOISE;
  //   norm = cross(end - start, middle - start);
  // }

  // Rodrigues' rotation formula: rotate norm around tangent by angle r:
  float r = uv.x * TAU;
  norm = normalize(norm * cos(r) + cross(tangent, norm) * sin(r));

  vec3 finalPosition = inflate(proj, pos, norm, thickness, 0.f);

  gl_Position = viewProject(finalPosition);

  vColor = color;
  vPosition = finalPosition;
  vNormal = norm;
}
`,cp=`#version 300 es
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
`,fp=`#version 300 es
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
`,dp=`#version 300 es
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
`,vp=`#version 300 es
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
`,gi={vertex:()=>bv(),edge:e=>ep({segments:e}),face:e=>np({segments:e})};function pp(e){return{meshes:["vertex","edge","face"],...xi(e,"vertex",vp,dp,gi.vertex,1024,e.dimensions,e.showVertices),...xi(e,"edge",ap,sp,gi.edge,1024,e.dimensions,e.showEdges,["position","target"]),...xi(e,"face",fp,cp,gi.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1){for(let r=0;r<this.meshes.length;r++){const o=this.meshes[r],i=this[o];if(!t){i.uniforms.curvature.update(n.curvature),i.uniforms.matrix.update(Io(n.matrix));for(let l=4;l<=n.dimensions;l++)i.uniforms[`fov${l}`].update(1/Qc(Le*n[`fov${l}`]*.5/180));o==="vertex"?i.uniforms.thickness.update(n.vertexThickness):o==="edge"?(i.uniforms.thickness.update(n.edgeThickness),i.uniforms.segments.update(n.curvature&&n.curve?n.segments:1)):(i.uniforms.segments.update(n.curvature&&n.curve?n.segments:1),i.uniforms.opacity.update(Ln[n.ambiance].opacity))}i.uniforms.viewProjection.update(n.camera.viewProjection),i.uniforms.zoom.update(-n.camera.position[2]),Ln[n.ambiance].lighting&&i.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r,o,i=null){const l=this[t];i=i||o;const{dimensions:u}=n,s=Ln[n.ambiance],[a,d]=r;let c=a,f=d;if(t==="face"){let y=0;for(let x=0;x<a;x++){const h=i[x].vertices.length;y+=h<3?0:h===3?1:h}c=y;for(let x=a;x<d;x++){const h=i[x].vertices.length;y+=h<3?0:h===3?1:h}f=y}l.instances<f&&l.extendAttributes(f),l.count=f;const v=u>4?9:u;let m=c;for(let y=a;y<d;y++){let x=[];const h=i[y];if(t==="vertex")x.push({...h,position:h.vertex,type:t});else if(t==="edge")x.push({...h,position:o[h.start].vertex,target:o[h.end].vertex,type:t});else{if(h.vertices.length<3)continue;if(h.vertices.length===3)x.push({...h,position:o[h.vertices[0]].vertex,target:o[h.vertices[1]].vertex,center:o[h.vertices[2]].vertex});else{const p=new Array(h.vertices.length);for(let E=0;E<h.vertices.length;E++)p[E]=o[h.vertices[E]].vertex;const g=new Array(u).fill(0);for(let E=0;E<p.length;E++){const w=p[E];for(let I=0;I<u;I++)g[I]+=w[I]}for(let E=0;E<u;E++)g[E]/=p.length;for(let E=0;E<p.length;E++){const w={...h,position:p[E],target:p[(E+1)%p.length],center:g};h.word.length%2===(n.curvature>0?0:1)&&([w.position,w.target]=[w.target,w.position]),x.push(w)}}}for(let p=0;p<x.length;p++){const g=x[p];for(let w=0;w<u;w++)for(let I=0;I<l.varying.length;I++){const N=l.varying[I];l.attributes[N].data[m*v+w]=g[N][w]}const E=s.color(g,t,n);l.attributes.color.data[m*3+0]=E[0],l.attributes.color.data[m*3+1]=E[1],l.attributes.color.data[m*3+2]=E[2],m++}for(let p=0;p<l.varying.length;p++){const g=l.varying[p];l.attributes[g].update(c,f)}l.attributes.color.update(c,f)}},preprocess(n,t){return n.mirrors.some(r=>Yc(r))&&(t=lp(t,n.mirrors,n.dimensions,n.curvature)),n.mirrors.some(r=>op(r))&&(t=up(t,n.mirrors,n.dimensions,n.curvature)),n.mirrors.some(r=>qr(r))&&(t=ip(t,n.mirrors,n.dimensions,n.curvature)),t},plot(n,t){let r=n.face,o=t;t.face[1]===n.face.length&&n.partial&&(r=r.concat(n.partial),o={...t,face:[t.face[0],t.face[1]+n.partial.length]});const i={vertex:n.vertex,edge:n.edge,face:r,ranges:o},{vertex:l,edge:u,face:s,ranges:a}=this.preprocess(n,i);for(let d=0;d<this.meshes.length;d++){const c=this.meshes[d];this[c].visible&&this.plotType(n,c,a[c],l,c!=="vertex"?c==="face"?s:u:null)}}}}const hp=`#version 300 es
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
`,mp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,gp=`#version 300 es
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
`,yp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,xp=`#version 300 es
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
`,Ep=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,wp=`#version 300 es
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
`,Sp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Np=`#version 300 es
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
`,kp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function Ip(e){return{...jt(e,"oit",Sp,wp,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...jt(e,"down",Ep,xp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...jt(e,"up",kp,Np,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...jt(e,"afterImage",mp,hp,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...jt(e,"bloom",yp,gp,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Tp(e){const{gl:n}=e,t=Ln[e.ambiance],r=e.msaa?Ae(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),Ei(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),Ei(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),Ei(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=un(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=un(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=un(e,n.RGBA8),e.textures.afterImageScreen=un(e,n.RGBA8),e.textures.afterImageOutScreen=un(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let o=0;o<e.textures.kawase.length;o++)n.deleteTexture(e.textures.kawase[o].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let o=0;o<t.glow.steps;o++)e.textures.kawase[o]=un(e,n.RGBA8,t.glow.pow**-o);e.textures.blur=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const Zc=window.location.search.includes("stats");let Zr;Zc&&(Zr=new Zv,Zr.dom.id="stats",document.body.appendChild(Zr.dom));const l0=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:Le/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=Ae(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]];const d=$v(this.eye,[0,0,0],[0,1,0]),c=Bv(this.fov,a,.01,1e3,this.zoom);this.viewProjection=Io(Ne(c,d))}};r.update();const o=Ip(e),i=pp(e),l={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:i,passes:o,rb:l,fb:u,textures:{}}},u0=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},s0=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType.type==="finite"?"S":e.spaceType.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},a0=e=>{e.camera.fov=Le*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},c0=e=>{const n=Ln[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},Rp=e=>{Zc&&Zr.update();const{gl:n}=e,t=e.msaa?Ae(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Ln[e.ambiance];Pp(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Tp(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const o=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,o),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let i=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?i=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<r.glow.steps;l++){const u=l===0?i:e.textures.kawase[l-1],s=e.textures.kawase[l];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=r.glow.steps-1;l>=0;l--){const u=e.textures.kawase[l],s=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=Rp;const Cp={globals:Ov,project:jv,helpers:_v,complex:Mv,ease:zv,lighting:Fv},yi=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),$=(e,n,t)=>{let r,o,i;if(n===0)r=o=i=t;else{const l=t<.5?t*(1+n):t+n-t*n,u=2*t-l;r=yi(u,l,e+1/3),o=yi(u,l,e),i=yi(u,l,e-1/3)}return[r,o,i]},Pp=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},zp=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`),ks=(e,n,t)=>{var l;const r=Ln[e.ambiance];let o="";r.lighting&&(o+=`#define LIGHTING ${Dp.indexOf(r.lighting)}
`);const i=e.easing==="auto"?((l=e.spaceType)==null?void 0:l.type)==="hyperbolic"&&e.projection4!=="inverted"?"quintic":"linear":e.easing;o+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)o+=`#define PROJECTION${u} ${Mp.indexOf(e[`projection${u}`])-1}
`;return o+=`#define EASING ${Fp.indexOf(i)}
`,r.opacity<1&&r.transparency==="oit"&&(o+=`#define OIT
`),Object.entries({...Cp,config:o}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>zp(u,e.dimensions))},Ar=(e,n,t,r,o)=>{if(e.gl.shaderSource(o,r),e.gl.compileShader(o),!e.gl.getShaderParameter(o,e.gl.COMPILE_STATUS)){const l=e.gl.getShaderInfoLog(o);return console.error(`An error occurred compiling the ${n}->${t} shader: ${l}`,{shaderSource:r}),l}},Is=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const i=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${i}`),i}},bc=(e,n,t,r,o=[])=>{const{gl:i}=e,l=i.createProgram(),u=i.createShader(i.VERTEX_SHADER),s=i.createShader(i.FRAGMENT_SHADER);if(Ar(e,n,"vertex",t,u)||Ar(e,n,"fragment",r,s)||(i.attachShader(l,u),i.attachShader(l,s),Is(e,n,l)))return;const a={program:l,vertexShader:u,fragmentShader:s,uniformsDef:o,recompile(d,c,f,v=null){Ar(d,n,"vertex",c,this.vertexShader)||Ar(d,n,"fragment",f,this.fragmentShader)||Is(d,n,this.program)||(v&&(this.uniformsDef=v),this.bindUniforms(d))},bindUniforms(d){this.uniforms={},this.uniformsDef.forEach(({name:c,type:f,value:v})=>{this.uniforms[c]=Op(d,this.program,c,f),this.uniforms[c].update(v)})}};return a.bindUniforms(e),a},_t=(e,n,t,r,o,i=null,l=null)=>{const{gl:u}=e;l=l||u.FLOAT;const s=l===u.FLOAT?4:2,a={name:t,mesh:n,indices:ef,instances:i,data:o,size:r,type:l,update(d=null,c=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),d===null&&c===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,d*this.size*s,this.data,d*this.size,(c-d)*this.size)},extend(d,c,f=!1){if(u.bindVertexArray(this.mesh.vao),this.size=d,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const v=d>4?3:1;this.name==="target"&&(this.location=d>4?6:4),this.name==="center"&&(this.location=d>4?9:5);for(let m=0;m<v;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<v;m++)u.vertexAttribPointer(this.location+m,d/v,this.type,!1,d*s,d/v*m*s);if(this.instances)for(let m=0;m<v;m++)u.vertexAttribDivisor(this.location+m,this.instances);c&&(f&&c.length>=this.data.length&&c.set(this.data),this.data=c),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const d=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,d),d}};return a.buffer=u.createBuffer(),a.extend(r),a},ef=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const o=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,o),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:o,vao:n,indices:t,count:t.length,update(i){r.bindVertexArray(this.vao),this.indices=i,this.count=i.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,i,r.STATIC_DRAW)}}},Op=(e,n,t,r)=>{const{gl:o}=e;return{program:n,update(l){if(o.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=o.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&o.uniform4fv(a,l[s][0]),u-4===1){const d=o.getUniformLocation(n,`${t}.c${s+1}.u`);d!==null&&o.uniform1f(d,l[s][1])}else if(u-4>1){const d=o.getUniformLocation(n,`${t}.c${s+1}.u`);if(d!==null&&o[`uniform${Ae(u-4,4)}fv`](d,l[s][1]),u-8===1){const c=o.getUniformLocation(n,`${t}.c${s+1}.t`);c!==null&&o.uniform1f(c,l[s][2])}}}else{const s=o.getUniformLocation(n,t);s!==null&&o[`uniformMatrix${r.slice(1)}`](s,!1,l)}}else{const u=o.getUniformLocation(n,t);u!==null&&o[`uniform${r}`](u,l)}},get(){o.useProgram(this.program);const l=o.getUniformLocation(n,t);if(l!==null)return o.getUniform(this.program,l)}}},un=(e,n,t=null)=>{const{gl:r}=e,o=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,i=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,l=r.createTexture();return r.bindTexture(r.TEXTURE_2D,l),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,o,i),{texture:l,width:o,height:i}},jt=(e,n,t,r,o=[])=>{const i={name:n,vertex:t,fragment:r,...bc(e,n,t,r,o),recompileProgram(l){this.recompile(l,this.vertex,this.fragment,o)}};return{[n]:i}},xi=(e,n,t,r,o,i,l,u=!0,s=["position"])=>{const{gl:a}=e,d=o(e.curve?e.segments:1),c=v=>[{name:"viewProjection",type:"m4fv",value:Io(Be(4))},{name:"matrix",type:`m${v.dimensions}fv`,value:Io(v.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},...["edge","face"].includes(n)?[{name:"segments",type:"1f",value:v.curve?v.segments:1}]:[],...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"opacity",type:"1f",value:0}],...Wc(4,v.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:v[`fov${m}`]}))];l=l>4?9:l;const f={attributes:{},varying:s,vertex:t,type:n,fragment:r,...bc(e,n,...ks(e,t,r),c(e)),recompileProgram(v){const[m,y]=ks(v,this.vertex,this.fragment);this.recompile(v,m,y,c(v))},changeArity(v){v=v>4?9:v,this.arity!==v&&(this.arity=v,s.forEach(m=>{this.attributes[m].extend(v,new Float32Array(this.instances*v),!1)}))},extendAttributes(v){this.instances=v,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(v*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(v*3),!0)},updateGeometry(v){const m=o(v.curvature&&v.curve?v.segments:1);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(v){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return f.visible=u,f.vao=a.createVertexArray(),f.indices=ef(e,f.vao,new Uint16Array(d.indices)),f.attributes.vertex=_t(e,f,"vertex",3,new Float32Array(d.vertices)),f.attributes.uv=_t(e,f,"uv",2,new Float32Array(d.uvs)),f.attributes.normal=_t(e,f,"normal",3,new Float32Array(d.normals)),f.attributes.color=_t(e,f,"color",3,new Float32Array(i*3),1),s.forEach(v=>{f.attributes[v]=_t(e,f,v,l,new Float32Array(i*l),1)}),f.arity=l,f.instances=i,f.count=0,{[n]:f}},Ei=(e,n,t,r)=>{const{gl:o}=e;o.bindRenderbuffer(o.RENDERBUFFER,n),r?o.renderbufferStorageMultisample(o.RENDERBUFFER,r,t,o.drawingBufferWidth,o.drawingBufferHeight):o.renderbufferStorage(o.RENDERBUFFER,t,o.drawingBufferWidth,o.drawingBufferHeight),o.bindRenderbuffer(o.RENDERBUFFER,null)},_p=document.createElement("canvas"),Ts=_p.getContext("webgl2"),jp=Ts.getParameter(Ts.MAX_SAMPLES),f0="xyzwvutsrqponmlkjihgfedcba",Mp=["perspective","stereographic","orthographic","klein","inverted","joukowsky","upperhalf","band","cross","heart","teardrop","square","ring","sinusoidal","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Fp=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],d0=["toddcoxeter","knuthbendix","fundamental"],Dp=["lambert","phong","blinn-phong","toon","oren-nayar"],Ln={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>$(e.length*.17%1,.5,.6)},synthwave:{background:[...$(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>$((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.4,transparency:"oit",color:({word:e})=>$(e.length*.03%1,1,.8)},shape:{background:[1,1,1,1],glow:!1,lighting:"lambert",opacity:.75,transparency:"oit",color:({word:e,len:n,vertices:t},r)=>r==="face"?$(((n||t.length)-2)*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const o=e.length?Ns(e[e.length-1])/t:0;return $(o%1,1,n==="face"?.6:r?.05:.8)}},catpuccin:{background:[...$(240/360,.23,.09),1],glow:!1,lighting:"lambert",opacity:.6,transparency:"oit",color:({word:e},n,{dimensions:t,showFaces:r})=>{const o=[$(.027777777777777776,.56,.91),$(0,.59,.88),$(.8777777777777778,.72,.86),$(.7416666666666667,.84,.81),$(.9527777777777777,.81,.75),$(.9722222222222222,.65,.77),$(.06388888888888888,.92,.75),$(.11388888888888889,.86,.83),$(.3194444444444444,.54,.76),$(.4722222222222222,.57,.73),$(.525,.71,.73),$(.5527777777777778,.76,.69),$(.6027777777777777,.92,.76),$(.6444444444444445,.97,.85)],i=e.split("").map(l=>Ns(l)).reduce((l,u)=>l+u,0);return o[i%o.length]}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>$(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e})=>$(e.length*.06%1,.7,.6)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-Xv(.9,e.length+1)):[0,0,0]}},Rs={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"toddcoxeter",controls:"space",ambiance:"neon",centered:!1,zoom:1.5,fov3:90,projection3:"perspective",fov4:90,projection4:"stereographic",msaa:window.devicePixelRatio<=1,msaaSamples:jp,subsampling:window.devicePixelRatio},Ap=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((o,i)=>r===i?1:r===i+1||r+1===i?3:2));for(let t=0;t<Ae(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Ae(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Ae(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},v0=(e,n=[],t)=>{const r={...e},o=[];Object.entries(r).forEach(([i,l])=>{typeof Rs[i]=="number"||i.startsWith("fov")?(l===""||isNaN(l))&&(delete r[i],o.push(i)):Array.isArray(Rs[i])&&(Array.isArray(l[0])?l.find(u=>u.find(s=>l===""||i!=="coxeter"&&isNaN(s)))&&(delete r[i],o.push(i)):l.find(u=>l===""||isNaN(u)&&!(i==="mirrors"&&tp.includes(u)))&&(delete r[i],o.push(i)))}),o.includes("coxeter")||Ap(r),r.matrix._preset?delete r.matrix._preset:(r.matrix.length!==r.dimensions||r.matrix.some(i=>i.length!==r.dimensions))&&(r.matrix=Be(r.dimensions)),n.includes("dimensions")&&!n.some(i=>i.startsWith("projection"))&&r.dimensions>=4&&(r.projection3="perspective");for(let i=4;i<=9;i++)i<=r.dimensions&&!r[`fov${i}`]&&!o.includes(`fov${i}`)&&(r[`fov${i}`]=90),i<=r.dimensions&&(!r[`projection${i}`]||n.includes("dimensions")&&!n.includes(`projection${i}`))&&!o.includes(`projection${i}`)&&(r[`projection${i}`]=i===r.dimensions?r[`projection${i+1}`]||"stereographic":"perspective"),i>r.dimensions&&r[`fov${i}`]&&delete r[`fov${i}`],i>r.dimensions&&r[`projection${i}`]&&delete r[`projection${i}`];return{params:r,badParams:o}},Lp=(e,n,t,r,o)=>{let i=!0,l=0,u=1;if(o&&["∞","inf","Infinity"].includes(e))e="∞",l=0;else if(o&&e.endsWith("i")){const s=e.slice(0,-1);l=-(s===""?1:parseInt(s)),e=`${l===-1?"":-l}i`}else if(e.includes("/")){const[s,a]=e.split("/");l=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${l}`:e=`${l}/${u}`}else l=e===""?"":parseInt(r)===parseFloat(r)?parseInt(e):parseFloat(e);return i=!(o&&l===1||l===""||isNaN(l)||l<n||l>t||r%1===0&&l%r!==0||isNaN(u)||u===""||u<n||u>t||r%1===0&&u%r!==0),{valid:i,raw:e,value:l,fraction:u}};function Up({name:e,label:n,min:t=0,max:r=1/0,step:o=1,value:i,coxeter:l,fraction:u,fractionName:s,toggler:a,togglerName:d,onChange:c,...f}){l&&(t=-1/0);const v=Y.useCallback(()=>i<0&&l?`${i===-1?"":-i}i`:i===0&&l?"∞":s&&u>1?`${i}/${u}`:`${i}`,[l,u,s,i]),[m,y]=Y.useState(v);Y.useEffect(()=>{y(v())},[l,v,u,s,i]);const[x,h]=Y.useState(!0),p=Y.useCallback(N=>{const k=Lp(N,t,r,o,l);y(k.raw),h(k.valid),k.valid&&(c(e,k.value),s&&c(s,k.fraction))},[l,s,r,t,e,c,o]),g=Y.useCallback(()=>{if(!x){p(l?"3":`${t}`);return}if(l){if(m==="2"){p("∞");return}if(m==="∞"){p("i");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=(N===""?1:parseInt(N))+1;p(`${k}i`);return}}if(m!==`${t}`)if(m.includes("/"))p((parseInt(m.split("/")[0])-o).toString());else{const N=(parseInt(o)===parseFloat(o)?parseInt(m):parseFloat(m))-o;o>0&&o<1?p(N.toFixed(o.toString().split(".")[1].length)):p(N.toString())}},[l,t,m,o,p,x]),E=Y.useCallback(()=>{if(!x){p(l?"3":`${t}`);return}if(l){if(m==="∞"){p("2");return}if(m==="i"){p("∞");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=parseInt(N)-1;k===1&&(k=""),p(`${k}i`);return}}if(m!==`${r}`)if(m.includes("/"))p((parseInt(m.split("/")[0])+o).toString());else{const N=(parseInt(o)===parseFloat(o)?parseInt(m):parseFloat(m))+o;o>0&&o<1?p(N.toFixed(o.toString().split(".")[1].length)):p(N.toString())}},[l,r,t,m,o,p,x]),w=N=>{const k=N.target.value;p(k)},I=N=>{c(N.target.name,N.target.checked)};return T.jsxs("label",{className:`number ${x?"valid":"invalid"}`,children:[n&&T.jsx("span",{className:"number-label",children:n}),d&&T.jsx("input",{type:"checkbox",name:d,checked:a,onChange:I}),(!d||a)&&T.jsxs("div",{className:"number-control",children:[T.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:w,...f}),T.jsx("button",{className:"plusminus minus",onClick:g,tabIndex:-1,children:"−"}),T.jsx("button",{className:"plusminus plus",onClick:E,tabIndex:-1,children:"+"})]})]})}function Bp({i:e,j:n,value:t,stellation:r,onChange:o}){return T.jsx("div",{className:"coxeter-value",children:T.jsx(Up,{name:`coxeter-${e}-${n}`,value:t,onChange:o,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Cs({type:e}){return T.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:T.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const Lt=6,_n=14,Ut={active:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:_n}),T.jsx("circle",{cx:"16",cy:"16",r:Lt,fill:"currentColor"})]}),inactive:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Lt,fill:"currentColor"})}),dual:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Lt,fill:"currentColor"}),T.jsx("path",{d:"M 16 2 L 16 10"}),T.jsx("path",{d:"M 16 10 L 16 22",stroke:"black"}),T.jsx("path",{d:"M 16 22 L 16 30"})]}),snub:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:_n})}),dualsnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:_n-4}),T.jsx("path",{d:"M 16 0 L 16 32"})]}),holosnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:_n}),T.jsx("circle",{cx:"16",cy:"16",r:Lt})]}),custom:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:_n}),T.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:_n}),T.jsx("path",{d:"M 6 6 L 26 26"}),T.jsx("path",{d:"M 6 26 L 26 6"})]}),void:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M 10 10 L 22 22"}),T.jsx("path",{d:"M 10 22 L 22 10"})]})};function $p({index:e,value:n,onChange:t}){const r=Y.useRef(null),[o,i]=Y.useState(!1),l=qc(n),u=()=>{const c=Dr[l==="inactive"?"active":"inactive"];t(e,c)},s=d=>{const c=Object.keys(Ut),f=c.indexOf(l),v=c[(c.length+f+cu(d.deltaY))%c.length],m=Dr[v];t(e,m)},a=d=>{d.preventDefault(),i(!o)};return Y.useEffect(()=>{const d=c=>{r.current.contains(c.target)||i(!1)};if(o)return window.addEventListener("mouseup",d),()=>{window.removeEventListener("mouseup",d)}},[o]),T.jsxs("div",{className:"coxeter-node",title:l,ref:r,children:[T.jsx("svg",{className:`coxeter-graphic ${l}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:Ut[l]}),l==="custom"&&T.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:d=>t(e,d.target.value)}),o&&T.jsx("div",{className:"coxeter-node-menu",children:Object.keys(Ut).filter(d=>d!==l).map(d=>T.jsx("div",{title:d,onClick:()=>{t(e,Dr[d]),i(!1)},children:T.jsx("svg",{className:`coxeter-graphic ${d}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,Dr[d]),i(!1)},children:Ut[d]})},d))})]})}const Ps=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid";function p0({dimensions:e,coxeter:n,mirrors:t,stellation:r,extended:o,onChange:i}){const[l,u]=Y.useState(1),s=Y.useRef(),a=Y.useCallback(()=>{if(i("extended",!o),o){const f=n.map(v=>v.slice());for(let v=0;v<e;v++)for(let m=0;m<v-1;m++)f[v][m]=2,f[m][v]=2;i("coxeter",f)}},[o,i,n,e]),d=Y.useCallback((f,v)=>{if(f.startsWith("coxeter")){const[m,y]=f.split("-").slice(1).map(h=>+h),x=n.map(h=>h.slice());x[m][y]=v,x[y][m]=v,i("coxeter",x)}if(f.startsWith("stellation")){const[m,y]=f.split("-").slice(1).map(h=>+h),x=r.map(h=>h.slice());x[m][y]=v,x[y][m]=v,i("stellation",x)}},[n,i,r]),c=Y.useCallback((f,v)=>{const m=t[f];let y=t.slice();y[f]=v,qr(v)||m===0?y.some(x=>qr(x))&&(y=y.map((x,h)=>x==="s"?"b":x&&x!=="b"?"d":x)):v!==0&&rp(v)&&y.some(x=>qr(x))&&(y=y.map((x,h)=>x==="b"?"s":x==="d"?1:x)),i("mirrors",y)},[t,i]);return Y.useEffect(()=>{const f=()=>{if(!s.current)return;const v=Ae(1,(window.innerWidth-125)/s.current.offsetWidth);u(v)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[e]),T.jsxs("aside",{className:"coxeters",style:l===1?void 0:{transform:`scale(${l})`},ref:s,children:[T.jsx("div",{className:"coxeter-matrix",children:[...Array(e).keys()].map(f=>T.jsxs(Y.Fragment,{children:[f>0&&T.jsx("div",{className:"coxeter-column",children:[...Array(f).keys()].map(v=>(o||f===v+1)&&T.jsx(Bp,{i:f,j:v,value:n[f][v],stellation:r[f][v],onChange:d},`${f}x${v}`))}),f>0&&T.jsx(Cs,{type:Ps(n,f)}),T.jsx($p,{index:f,value:t[f],onChange:c}),f<e-1&&T.jsx(Cs,{type:Ps(n,f+1)})]},f))}),T.jsxs("div",{className:"coxeter-toggles",children:[e>2&&T.jsx("button",{className:"button",onClick:()=>i("dimensions",e-1),title:"Decrease dimensions",children:"−"}),e<9&&T.jsx("button",{className:"button",onClick:()=>i("dimensions",e+1),title:"Increase dimensions",children:"+"}),T.jsx("button",{className:"button",onClick:a,title:"extended mode",children:o?"▲":"▼"})]})]})}const sn=32,zs=18;function h0({coxeter:e,mirrors:n,stellation:t}){const r=e.length,o=n.map((y,x)=>{const h=qc(y);return{n:x,type:h,i:x,j:0,r:h==="inactive"?Lt:_n}});for(let y=0;y<r;y++)for(let x=r-1;x>y+1;x--)if(e[y][x]!==2){const h=y===0,p=x===r-1,g=!h&&!p,E=x-y+1,w=L(E-1)/2,I=2*Math.PI/E,N={i:o[y].i+w,j:o[y].j+(g?-w*We((2+E)/4*I):0)};for(let k=y;k<=x;k++){let F=k-y+(h?1:p?E/2:(2+E)/4);o[k].i=N.i+w*qe(I*F),o[k].j=N.j+w*We(I*F)}for(let k=x+1;k<r;k++)o[k].i-=x-y,o[k].i+=2*w;y=x-1;break}const i=[];for(let y=0;y<r;y++)for(let x=0;x<y;x++)if(e[y][x]!==2){const h=e[y][x],p=t[y][x];let g=`${h===0?"∞":h<0?`${h===-1?"":-h}i`:h}`;p>1&&(g+=`/${p}`),g==="3"&&(g=""),i.push({source:o[y],target:o[x],value:g,type:h<0?"dashed":h===0?"bold":"solid"})}const l=o.map(({i:y})=>y),u=o.map(({j:y})=>y),s=Ae(...l),a=Qn(...l),d=Ae(...u),c=Qn(...u);let f=0,v=0;for(let y=0;y<o.length;y++){const x=o[y];x.x=(x.i-s)*2*sn,x.y=(x.j-d)*2*sn,f=Qn(f,x.x),v=Qn(v,x.y)}const m=y=>y+Qn(y-1,0);return T.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-sn/2} ${-sn/2} ${f+sn} ${v+sn}`,width:`${m(a-s+1)}em`,height:`${m(c-d+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[o.map(({n:y,type:x,x:h,y:p,r:g})=>T.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${h-sn/2} ${p-sn/2})`,title:x,children:Ut[x]},y)),i.map(({source:y,target:x,value:h,type:p})=>{const g={x:y.x,y:y.y},E={x:x.x,y:x.y},w={},I=Jv(E.y-g.y,E.x-g.x);return w.x=(g.x+E.x)/2+(zs+(h.length-2)*5)*qe(I-Le/2),w.y=(g.y+E.y)/2+zs*We(I-Le/2),g.x+=(y.r+1)*qe(I),g.y+=(y.r+1)*We(I),E.x-=(x.r+1)*qe(I),E.y-=(x.r+1)*We(I),T.jsxs("g",{className:"coxeter-diagram-link",children:[T.jsx("path",{d:`M ${g.x} ${g.y} L ${E.x} ${E.y}`,strokeWidth:p==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:p==="dashed"?"1 1":""}),T.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:w.x,y:w.y,children:h})]},`${y.n}-${x.n}`)})]})}export{Ln as A,Wc as B,h0 as C,Mp as D,p0 as E,l0 as F,v0 as G,bp as H,i0 as I,Qp as J,o0 as K,hu as L,Ap as M,Up as N,Le as P,be as a,Rp as b,Io as c,Hp as d,c0 as e,Tp as f,u0 as g,r0 as h,Qn as i,Wp as j,Gp as k,Kp as l,Ne as m,Be as n,T as o,s0 as p,Rs as q,Y as r,Vp as s,Ae as t,a0 as u,f0 as v,Dv as w,Jp as x,d0 as y,Fp as z};
