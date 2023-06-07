(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var km={exports:{}},$l={},zm={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),X0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),Y0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),J0=Symbol.for("react.suspense"),ex=Symbol.for("react.memo"),tx=Symbol.for("react.lazy"),Xd=Symbol.iterator;function nx(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var Bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gm=Object.assign,Vm={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Bm}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hm(){}Hm.prototype=Ks.prototype;function If(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Bm}var Nf=If.prototype=new Hm;Nf.constructor=If;Gm(Nf,Ks.prototype);Nf.isPureReactComponent=!0;var $d=Array.isArray,Wm=Object.prototype.hasOwnProperty,Uf={current:null},jm={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wm.call(e,i)&&!jm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:s,ref:o,props:r,_owner:Uf.current}}function ix(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Of(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function rx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yd=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rx(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case X0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+yc(o,0):i,$d(r)?(n="",t!=null&&(n=t.replace(Yd,"$&/")+"/"),nl(r,e,n,"",function(c){return c})):r!=null&&(Of(r)&&(r=ix(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",$d(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+yc(s,a);o+=nl(s,e,n,l,r)}else if(l=nx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+yc(s,a++),o+=nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function sx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},il={transition:null},ox={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:il,ReactCurrentOwner:Uf};Be.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!Of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Ks;Be.Fragment=$0;Be.Profiler=q0;Be.PureComponent=If;Be.StrictMode=Y0;Be.Suspense=J0;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wm.call(e,l)&&!jm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:Q0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K0,_context:t},t.Consumer=t};Be.createElement=Xm;Be.createFactory=function(t){var e=Xm.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:Z0,render:t}};Be.isValidElement=Of;Be.lazy=function(t){return{$$typeof:tx,_payload:{_status:-1,_result:t},_init:sx}};Be.memo=function(t,e){return{$$typeof:ex,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(t,e){return en.current.useCallback(t,e)};Be.useContext=function(t){return en.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Be.useEffect=function(t,e){return en.current.useEffect(t,e)};Be.useId=function(){return en.current.useId()};Be.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return en.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Be.useRef=function(t){return en.current.useRef(t)};Be.useState=function(t){return en.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return en.current.useTransition()};Be.version="18.2.0";zm.exports=Be;var he=zm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=he,lx=Symbol.for("react.element"),cx=Symbol.for("react.fragment"),ux=Object.prototype.hasOwnProperty,fx=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dx={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ux.call(e,i)&&!dx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lx,type:t,key:s,ref:o,props:r,_owner:fx.current}}$l.Fragment=cx;$l.jsx=$m;$l.jsxs=$m;km.exports=$l;var b=km.exports,Ru={},Ym={exports:{}},yn={},qm={exports:{}},Km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,k){var B=I.length;I.push(k);e:for(;0<B;){var se=B-1>>>1,ie=I[se];if(0<r(ie,k))I[se]=k,I[B]=ie,B=se;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var k=I[0],B=I.pop();if(B!==k){I[0]=B;e:for(var se=0,ie=I.length,G=ie>>>1;se<G;){var K=2*(se+1)-1,re=I[K],ae=K+1,D=I[ae];if(0>r(re,B))ae<ie&&0>r(D,re)?(I[se]=D,I[ae]=B,se=ae):(I[se]=re,I[K]=B,se=K);else if(ae<ie&&0>r(D,B))I[se]=D,I[ae]=B,se=ae;else break e}}return k}function r(I,k){var B=I.sortIndex-k.sortIndex;return B!==0?B:I.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=I)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function M(I){if(g=!1,x(I),!_)if(n(l)!==null)_=!0,Z(S);else{var k=n(c);k!==null&&Q(M,k.startTime-I)}}function S(I,k){_=!1,g&&(g=!1,f(P),P=-1),p=!0;var B=h;try{for(x(k),d=n(l);d!==null&&(!(d.expirationTime>k)||I&&!W());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var ie=se(d.expirationTime<=k);k=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&i(l),x(k)}else i(l);d=n(l)}if(d!==null)var G=!0;else{var K=n(c);K!==null&&Q(M,K.startTime-k),G=!1}return G}finally{d=null,h=B,p=!1}}var C=!1,R=null,P=-1,y=5,T=-1;function W(){return!(t.unstable_now()-T<y)}function $(){if(R!==null){var I=t.unstable_now();T=I;var k=!0;try{k=R(!0,I)}finally{k?U():(C=!1,R=null)}}else C=!1}var U;if(typeof v=="function")U=function(){v($)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,V=z.port2;z.port1.onmessage=$,U=function(){V.postMessage(null)}}else U=function(){m($,0)};function Z(I){R=I,C||(C=!0,U())}function Q(I,k){P=m(function(){I(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Z(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var B=h;h=k;try{return I()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=h;h=I;try{return k()}finally{h=B}},t.unstable_scheduleCallback=function(I,k,B){var se=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?se+B:se):B=se,I){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=B+ie,I={id:u++,callback:k,priorityLevel:I,startTime:B,expirationTime:ie,sortIndex:-1},B>se?(I.sortIndex=B,e(c,I),n(l)===null&&I===n(c)&&(g?(f(P),P=-1):g=!0,Q(M,B-se))):(I.sortIndex=ie,e(l,I),_||p||(_=!0,Z(S))),I},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(I){var k=h;return function(){var B=h;h=k;try{return I.apply(this,arguments)}finally{h=B}}}})(Km);qm.exports=Km;var hx=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=he,_n=hx;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zm=new Set,Fo={};function Hr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Fo[t]=e,t=0;t<e.length;t++)Zm.add(e[t])}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,px=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qd={},Kd={};function mx(t){return bu.call(Kd,t)?!0:bu.call(qd,t)?!1:px.test(t)?Kd[t]=!0:(qd[t]=!0,!1)}function gx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vx(t,e,n,i){if(e===null||typeof e>"u"||gx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ff,kf);Ft[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ff,kf);Ft[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ff,kf);Ft[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vx(e,n,r,i)&&(n=null),i||r===null?mx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),eg=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Du=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),Qd=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,Sc;function _o(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Mc=!1;function Ec(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function xx(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case Pu:return"Profiler";case Bf:return"StrictMode";case Lu:return"Suspense";case Du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eg:return(t.displayName||"Context")+".Consumer";case Jm:return(t._context.displayName||"Context")+".Provider";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function _x(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yx(t){var e=ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=yx(t))}function ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ng(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nu(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rg(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function Uu(t,e){rg(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ou(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ou(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ou(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(yo(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function sg(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function th(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sx=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){Sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Mx=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(t,e){if(e){if(Mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vu=null,Rs=null,bs=null;function nh(t){if(t=aa(t)){if(typeof Vu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Zl(e),Vu(t.stateNode,t.type,e))}}function ug(t){Rs?bs?bs.push(t):bs=[t]:Rs=t}function fg(){if(Rs){var t=Rs,e=bs;if(bs=Rs=null,nh(t),e)for(t=0;t<e.length;t++)nh(e[t])}}function dg(t,e){return t(e)}function hg(){}var wc=!1;function pg(t,e,n){if(wc)return t(e,n);wc=!0;try{return dg(t,e,n)}finally{wc=!1,(Rs!==null||bs!==null)&&(hg(),fg())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var i=Zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Hu=!1;if(Ei)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Hu=!1}function Ex(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var To=!1,_l=null,yl=!1,Wu=null,wx={onError:function(t){To=!0,_l=t}};function Tx(t,e,n,i,r,s,o,a,l){To=!1,_l=null,Ex.apply(wx,arguments)}function Cx(t,e,n,i,r,s,o,a,l){if(Tx.apply(this,arguments),To){if(To){var c=_l;To=!1,_l=null}else throw Error(ee(198));yl||(yl=!0,Wu=c)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ih(t){if(Wr(t)!==t)throw Error(ee(188))}function Ax(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ih(r),t;if(s===i)return ih(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function gg(t){return t=Ax(t),t!==null?vg(t):null}function vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vg(t);if(e!==null)return e;t=t.sibling}return null}var xg=_n.unstable_scheduleCallback,rh=_n.unstable_cancelCallback,Rx=_n.unstable_shouldYield,bx=_n.unstable_requestPaint,pt=_n.unstable_now,Px=_n.unstable_getCurrentPriorityLevel,Wf=_n.unstable_ImmediatePriority,_g=_n.unstable_UserBlockingPriority,Sl=_n.unstable_NormalPriority,Lx=_n.unstable_LowPriority,yg=_n.unstable_IdlePriority,Yl=null,ri=null;function Dx(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:Ux,Ix=Math.log,Nx=Math.LN2;function Ux(t){return t>>>=0,t===0?32:31-(Ix(t)/Nx|0)|0}var ya=64,Sa=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=So(a):(s&=o,s!==0&&(i=So(s)))}else o=n&~r,o!==0?i=So(o):s!==0&&(i=So(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ox(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ox(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sg(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function kx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function Mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eg,Xf,wg,Tg,Cg,Xu=!1,Ma=[],$i=null,Yi=null,qi=null,Bo=new Map,Go=new Map,Gi=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Bx(t,e,n,i,r){switch(e){case"focusin":return $i=ao($i,t,e,n,i,r),!0;case"dragenter":return Yi=ao(Yi,t,e,n,i,r),!0;case"mouseover":return qi=ao(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Bo.set(s,ao(Bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Go.set(s,ao(Go.get(s)||null,t,e,n,i,r)),!0}return!1}function Ag(t){var e=Er(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=mg(n),e!==null){t.blockedOn=e,Cg(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=aa(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function oh(t,e,n){rl(t)&&n.delete(e)}function Gx(){Xu=!1,$i!==null&&rl($i)&&($i=null),Yi!==null&&rl(Yi)&&(Yi=null),qi!==null&&rl(qi)&&(qi=null),Bo.forEach(oh),Go.forEach(oh)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,Gx)))}function Vo(t){function e(r){return lo(r,t)}if(0<Ma.length){lo(Ma[0],t);for(var n=1;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&lo($i,t),Yi!==null&&lo(Yi,t),qi!==null&&lo(qi,t),Bo.forEach(e),Go.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&Gi.shift()}var Ps=Ri.ReactCurrentBatchConfig,El=!0;function Vx(t,e,n,i){var r=$e,s=Ps.transition;Ps.transition=null;try{$e=1,$f(t,e,n,i)}finally{$e=r,Ps.transition=s}}function Hx(t,e,n,i){var r=$e,s=Ps.transition;Ps.transition=null;try{$e=4,$f(t,e,n,i)}finally{$e=r,Ps.transition=s}}function $f(t,e,n,i){if(El){var r=$u(t,e,n,i);if(r===null)Uc(t,e,i,wl,n),sh(t,i);else if(Bx(r,t,e,n,i))i.stopPropagation();else if(sh(t,i),e&4&&-1<zx.indexOf(t)){for(;r!==null;){var s=aa(r);if(s!==null&&Eg(s),s=$u(t,e,n,i),s===null&&Uc(t,e,i,wl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var wl=null;function $u(t,e,n,i){if(wl=null,t=Hf(i),t=Er(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Px()){case Wf:return 1;case _g:return 4;case Sl:case Lx:return 16;case yg:return 536870912;default:return 16}default:return 16}}var Hi=null,Yf=null,sl=null;function bg(){if(sl)return sl;var t,e=Yf,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function ah(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:ah,this.isPropagationStopped=ah,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qf=Sn(Qs),oa=at({},Qs,{view:0,detail:0}),Wx=Sn(oa),Cc,Ac,co,ql=at({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Cc=t.screenX-co.screenX,Ac=t.screenY-co.screenY):Ac=Cc=0,co=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),lh=Sn(ql),jx=at({},ql,{dataTransfer:0}),Xx=Sn(jx),$x=at({},oa,{relatedTarget:0}),Rc=Sn($x),Yx=at({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=Sn(Yx),Kx=at({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=Sn(Kx),Zx=at({},Qs,{data:0}),ch=Sn(Zx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=t_[t])?!!e[t]:!1}function Kf(){return n_}var i_=at({},oa,{key:function(t){if(t.key){var e=Jx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r_=Sn(i_),s_=at({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=Sn(s_),o_=at({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),a_=Sn(o_),l_=at({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),c_=Sn(l_),u_=at({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=Sn(u_),d_=[9,13,27,32],Qf=Ei&&"CompositionEvent"in window,Co=null;Ei&&"documentMode"in document&&(Co=document.documentMode);var h_=Ei&&"TextEvent"in window&&!Co,Pg=Ei&&(!Qf||Co&&8<Co&&11>=Co),fh=String.fromCharCode(32),dh=!1;function Lg(t,e){switch(t){case"keyup":return d_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function p_(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(dh=!0,fh);case"textInput":return t=e.data,t===fh&&dh?null:t;default:return null}}function m_(t,e){if(ms)return t==="compositionend"||!Qf&&Lg(t,e)?(t=bg(),sl=Yf=Hi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!g_[t.type]:e==="textarea"}function Ig(t,e,n,i){ug(i),e=Tl(e,"onChange"),0<e.length&&(n=new qf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ao=null,Ho=null;function v_(t){Wg(t,0)}function Kl(t){var e=xs(t);if(ig(e))return t}function x_(t,e){if(t==="change")return e}var Ng=!1;if(Ei){var bc;if(Ei){var Pc="oninput"in document;if(!Pc){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Pc=typeof ph.oninput=="function"}bc=Pc}else bc=!1;Ng=bc&&(!document.documentMode||9<document.documentMode)}function mh(){Ao&&(Ao.detachEvent("onpropertychange",Ug),Ho=Ao=null)}function Ug(t){if(t.propertyName==="value"&&Kl(Ho)){var e=[];Ig(e,Ho,t,Hf(t)),pg(v_,e)}}function __(t,e,n){t==="focusin"?(mh(),Ao=e,Ho=n,Ao.attachEvent("onpropertychange",Ug)):t==="focusout"&&mh()}function y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(Ho)}function S_(t,e){if(t==="click")return Kl(e)}function M_(t,e){if(t==="input"||t==="change")return Kl(e)}function E_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:E_;function Wo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vh(t,e){var n=gh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gh(n)}}function Og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w_(t){var e=Fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(i!==null&&Zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vh(n,s);var o=vh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=Ei&&"documentMode"in document&&11>=document.documentMode,gs=null,Yu=null,Ro=null,qu=!1;function xh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||gs==null||gs!==xl(i)||(i=gs,"selectionStart"in i&&Zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ro&&Wo(Ro,i)||(Ro=i,i=Tl(Yu,"onSelect"),0<i.length&&(e=new qf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Lc={},kg={};Ei&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Ql(t){if(Lc[t])return Lc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kg)return Lc[t]=e[n];return t}var zg=Ql("animationend"),Bg=Ql("animationiteration"),Gg=Ql("animationstart"),Vg=Ql("transitionend"),Hg=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){Hg.set(t,e),Hr(e,[t])}for(var Dc=0;Dc<_h.length;Dc++){var Ic=_h[Dc],C_=Ic.toLowerCase(),A_=Ic[0].toUpperCase()+Ic.slice(1);or(C_,"on"+A_)}or(zg,"onAnimationEnd");or(Bg,"onAnimationIteration");or(Gg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(Vg,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function yh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cx(i,e,void 0,t),t.currentTarget=null}function Wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;yh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;yh(r,a,c),s=l}}}if(yl)throw t=Wu,yl=!1,Wu=null,t}function Je(t,e){var n=e[ef];n===void 0&&(n=e[ef]=new Set);var i=t+"__bubble";n.has(i)||(jg(e,t,2,!1),n.add(i))}function Nc(t,e,n){var i=0;e&&(i|=4),jg(n,t,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Ta]){t[Ta]=!0,Zm.forEach(function(n){n!=="selectionchange"&&(R_.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Nc("selectionchange",!1,e))}}function jg(t,e,n,i){switch(Rg(e)){case 1:var r=Vx;break;case 4:r=Hx;break;default:r=$f}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pg(function(){var c=s,u=Hf(n),d=[];e:{var h=Hg.get(t);if(h!==void 0){var p=qf,_=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":p=r_;break;case"focusin":_="focus",p=Rc;break;case"focusout":_="blur",p=Rc;break;case"beforeblur":case"afterblur":p=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=a_;break;case zg:case Bg:case Gg:p=qx;break;case Vg:p=c_;break;case"scroll":p=Wx;break;case"wheel":p=f_;break;case"copy":case"cut":case"paste":p=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=uh}var g=(e&4)!==0,m=!g&&t==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,f!==null&&(M=zo(v,f),M!=null&&g.push(Xo(v,M,x)))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,n,u),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Gu&&(_=n.relatedTarget||n.fromElement)&&(Er(_)||_[wi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Er(_):null,_!==null&&(m=Wr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(g=lh,M="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=uh,M="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:xs(p),x=_==null?h:xs(_),h=new g(M,v+"leave",p,n,u),h.target=m,h.relatedTarget=x,M=null,Er(u)===c&&(g=new g(f,v+"enter",_,n,u),g.target=x,g.relatedTarget=m,M=g),m=M,p&&_)t:{for(g=p,f=_,v=0,x=g;x;x=jr(x))v++;for(x=0,M=f;M;M=jr(M))x++;for(;0<v-x;)g=jr(g),v--;for(;0<x-v;)f=jr(f),x--;for(;v--;){if(g===f||f!==null&&g===f.alternate)break t;g=jr(g),f=jr(f)}g=null}else g=null;p!==null&&Sh(d,h,p,g,!1),_!==null&&m!==null&&Sh(d,m,_,g,!0)}}e:{if(h=c?xs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=x_;else if(hh(h))if(Ng)S=M_;else{S=y_;var C=__}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=S_);if(S&&(S=S(t,c))){Ig(d,S,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ou(h,"number",h.value)}switch(C=c?xs(c):window,t){case"focusin":(hh(C)||C.contentEditable==="true")&&(gs=C,Yu=c,Ro=null);break;case"focusout":Ro=Yu=gs=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,xh(d,n,u);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":xh(d,n,u)}var R;if(Qf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ms?Lg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Pg&&n.locale!=="ko"&&(ms||P!=="onCompositionStart"?P==="onCompositionEnd"&&ms&&(R=bg()):(Hi=u,Yf="value"in Hi?Hi.value:Hi.textContent,ms=!0)),C=Tl(c,P),0<C.length&&(P=new ch(P,t,null,n,u),d.push({event:P,listeners:C}),R?P.data=R:(R=Dg(n),R!==null&&(P.data=R)))),(R=h_?p_(t,n):m_(t,n))&&(c=Tl(c,"onBeforeInput"),0<c.length&&(u=new ch("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=R))}Wg(d,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=zo(t,n),s!=null&&i.unshift(Xo(t,s,r)),s=zo(t,e),s!=null&&i.push(Xo(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=zo(n,s),l!=null&&o.unshift(Xo(n,l,a))):r||(l=zo(n,s),l!=null&&o.push(Xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var b_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Mh(t){return(typeof t=="string"?t:""+t).replace(b_,`
`).replace(P_,"")}function Ca(t,e,n){if(e=Mh(e),Mh(t)!==e&&n)throw Error(ee(425))}function Cl(){}var Ku=null,Qu=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,L_=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,D_=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(t){return Eh.resolve(null).then(t).catch(I_)}:Ju;function I_(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vo(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ii="__reactFiber$"+Zs,$o="__reactProps$"+Zs,wi="__reactContainer$"+Zs,ef="__reactEvents$"+Zs,N_="__reactListeners$"+Zs,U_="__reactHandles$"+Zs;function Er(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wh(t);t!==null;){if(n=t[ii])return n;t=wh(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[ii]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Zl(t){return t[$o]||null}var tf=[],_s=-1;function ar(t){return{current:t}}function it(t){0>_s||(t.current=tf[_s],tf[_s]=null,_s--)}function Ze(t,e){_s++,tf[_s]=t.current,t.current=e}var ir={},jt=ar(ir),ln=ar(!1),Or=ir;function Fs(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Al(){it(ln),it(jt)}function Th(t,e,n){if(jt.current!==ir)throw Error(ee(168));Ze(jt,e),Ze(ln,n)}function Xg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,_x(t)||"Unknown",r));return at({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Or=jt.current,Ze(jt,t),Ze(ln,ln.current),!0}function Ch(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Xg(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,it(ln),it(jt),Ze(jt,t)):it(ln),Ze(ln,n)}var xi=null,Jl=!1,Fc=!1;function $g(t){xi===null?xi=[t]:xi.push(t)}function O_(t){Jl=!0,$g(t)}function lr(){if(!Fc&&xi!==null){Fc=!0;var t=0,e=$e;try{var n=xi;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Jl=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),xg(Wf,lr),r}finally{$e=e,Fc=!1}}return null}var ys=[],Ss=0,bl=null,Pl=0,Tn=[],Cn=0,Fr=null,yi=1,Si="";function vr(t,e){ys[Ss++]=Pl,ys[Ss++]=bl,bl=t,Pl=e}function Yg(t,e,n){Tn[Cn++]=yi,Tn[Cn++]=Si,Tn[Cn++]=Fr,Fr=t;var i=yi;t=Si;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Yn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function Jf(t){t.return!==null&&(vr(t,1),Yg(t,1,0))}function ed(t){for(;t===bl;)bl=ys[--Ss],ys[Ss]=null,Pl=ys[--Ss],ys[Ss]=null;for(;t===Fr;)Fr=Tn[--Cn],Tn[Cn]=null,Si=Tn[--Cn],Tn[Cn]=null,yi=Tn[--Cn],Tn[Cn]=null}var xn=null,vn=null,rt=!1,Wn=null;function qg(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ah(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rf(t){if(rt){var e=vn;if(e){var n=e;if(!Ah(t,e)){if(nf(t))throw Error(ee(418));e=Ki(n.nextSibling);var i=xn;e&&Ah(t,e)?qg(i,n):(t.flags=t.flags&-4097|2,rt=!1,xn=t)}}else{if(nf(t))throw Error(ee(418));t.flags=t.flags&-4097|2,rt=!1,xn=t}}}function Rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Aa(t){if(t!==xn)return!1;if(!rt)return Rh(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=vn)){if(nf(t))throw Kg(),Error(ee(418));for(;e;)qg(t,e),e=Ki(e.nextSibling)}if(Rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?Ki(t.stateNode.nextSibling):null;return!0}function Kg(){for(var t=vn;t;)t=Ki(t.nextSibling)}function ks(){vn=xn=null,rt=!1}function td(t){Wn===null?Wn=[t]:Wn.push(t)}var F_=Ri.ReactCurrentBatchConfig;function Vn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ll=ar(null),Dl=null,Ms=null,nd=null;function id(){nd=Ms=Dl=null}function rd(t){var e=Ll.current;it(Ll),t._currentValue=e}function sf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Dl=t,nd=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(nd!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Dl===null)throw Error(ee(308));Ms=t,Dl.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var wr=null;function sd(t){wr===null?wr=[t]:wr.push(t)}function Qg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,sd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jf(t,n)}}function bh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,g=a;switch(h=e,p=n,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=at({},d,h);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=d}}function Ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Jg=new Qm.Component().refs;function of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ji(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(qn(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ji(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(qn(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Ji(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&(qn(e,t,i,n),al(e,t,i))}};function Lh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,i)||!Wo(r,s):!0}function ev(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=cn(e)?Or:jt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function af(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Jg,od(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=cn(e)?Or:jt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Jg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ih(t){var e=t._init;return e(t._payload)}function tv(t){function e(f,v){if(t){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=er(f,v),f.index=0,f.sibling=null,f}function s(f,v,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,x,M){return v===null||v.tag!==6?(v=Wc(x,f.mode,M),v.return=f,v):(v=r(v,x),v.return=f,v)}function l(f,v,x,M){var S=x.type;return S===ps?u(f,v,x.props.children,M,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zi&&Ih(S)===v.type)?(M=r(v,x.props),M.ref=uo(f,v,x),M.return=f,M):(M=hl(x.type,x.key,x.props,null,f.mode,M),M.ref=uo(f,v,x),M.return=f,M)}function c(f,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=jc(x,f.mode,M),v.return=f,v):(v=r(v,x.children||[]),v.return=f,v)}function u(f,v,x,M,S){return v===null||v.tag!==7?(v=Pr(x,f.mode,M,S),v.return=f,v):(v=r(v,x),v.return=f,v)}function d(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case va:return x=hl(v.type,v.key,v.props,null,f.mode,x),x.ref=uo(f,null,v),x.return=f,x;case hs:return v=jc(v,f.mode,x),v.return=f,v;case zi:var M=v._init;return d(f,M(v._payload),x)}if(yo(v)||so(v))return v=Pr(v,f.mode,x,null),v.return=f,v;Ra(f,v)}return null}function h(f,v,x,M){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(f,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case va:return x.key===S?l(f,v,x,M):null;case hs:return x.key===S?c(f,v,x,M):null;case zi:return S=x._init,h(f,v,S(x._payload),M)}if(yo(x)||so(x))return S!==null?null:u(f,v,x,M,null);Ra(f,x)}return null}function p(f,v,x,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(x)||null,a(v,f,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case va:return f=f.get(M.key===null?x:M.key)||null,l(v,f,M,S);case hs:return f=f.get(M.key===null?x:M.key)||null,c(v,f,M,S);case zi:var C=M._init;return p(f,v,x,C(M._payload),S)}if(yo(M)||so(M))return f=f.get(x)||null,u(v,f,M,S,null);Ra(v,M)}return null}function _(f,v,x,M){for(var S=null,C=null,R=v,P=v=0,y=null;R!==null&&P<x.length;P++){R.index>P?(y=R,R=null):y=R.sibling;var T=h(f,R,x[P],M);if(T===null){R===null&&(R=y);break}t&&R&&T.alternate===null&&e(f,R),v=s(T,v,P),C===null?S=T:C.sibling=T,C=T,R=y}if(P===x.length)return n(f,R),rt&&vr(f,P),S;if(R===null){for(;P<x.length;P++)R=d(f,x[P],M),R!==null&&(v=s(R,v,P),C===null?S=R:C.sibling=R,C=R);return rt&&vr(f,P),S}for(R=i(f,R);P<x.length;P++)y=p(R,f,P,x[P],M),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?P:y.key),v=s(y,v,P),C===null?S=y:C.sibling=y,C=y);return t&&R.forEach(function(W){return e(f,W)}),rt&&vr(f,P),S}function g(f,v,x,M){var S=so(x);if(typeof S!="function")throw Error(ee(150));if(x=S.call(x),x==null)throw Error(ee(151));for(var C=S=null,R=v,P=v=0,y=null,T=x.next();R!==null&&!T.done;P++,T=x.next()){R.index>P?(y=R,R=null):y=R.sibling;var W=h(f,R,T.value,M);if(W===null){R===null&&(R=y);break}t&&R&&W.alternate===null&&e(f,R),v=s(W,v,P),C===null?S=W:C.sibling=W,C=W,R=y}if(T.done)return n(f,R),rt&&vr(f,P),S;if(R===null){for(;!T.done;P++,T=x.next())T=d(f,T.value,M),T!==null&&(v=s(T,v,P),C===null?S=T:C.sibling=T,C=T);return rt&&vr(f,P),S}for(R=i(f,R);!T.done;P++,T=x.next())T=p(R,f,P,T.value,M),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?P:T.key),v=s(T,v,P),C===null?S=T:C.sibling=T,C=T);return t&&R.forEach(function($){return e(f,$)}),rt&&vr(f,P),S}function m(f,v,x,M){if(typeof x=="object"&&x!==null&&x.type===ps&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case va:e:{for(var S=x.key,C=v;C!==null;){if(C.key===S){if(S=x.type,S===ps){if(C.tag===7){n(f,C.sibling),v=r(C,x.props.children),v.return=f,f=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zi&&Ih(S)===C.type){n(f,C.sibling),v=r(C,x.props),v.ref=uo(f,C,x),v.return=f,f=v;break e}n(f,C);break}else e(f,C);C=C.sibling}x.type===ps?(v=Pr(x.props.children,f.mode,M,x.key),v.return=f,f=v):(M=hl(x.type,x.key,x.props,null,f.mode,M),M.ref=uo(f,v,x),M.return=f,f=M)}return o(f);case hs:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(f,v.sibling),v=r(v,x.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=jc(x,f.mode,M),v.return=f,f=v}return o(f);case zi:return C=x._init,m(f,v,C(x._payload),M)}if(yo(x))return _(f,v,x,M);if(so(x))return g(f,v,x,M);Ra(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,x),v.return=f,f=v):(n(f,v),v=Wc(x,f.mode,M),v.return=f,f=v),o(f)):n(f,v)}return m}var zs=tv(!0),nv=tv(!1),la={},si=ar(la),Yo=ar(la),qo=ar(la);function Tr(t){if(t===la)throw Error(ee(174));return t}function ad(t,e){switch(Ze(qo,e),Ze(Yo,t),Ze(si,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ku(e,t)}it(si),Ze(si,e)}function Bs(){it(si),it(Yo),it(qo)}function iv(t){Tr(qo.current);var e=Tr(si.current),n=ku(e,t.type);e!==n&&(Ze(Yo,t),Ze(si,n))}function ld(t){Yo.current===t&&(it(si),it(Yo))}var st=ar(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function cd(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var ll=Ri.ReactCurrentDispatcher,zc=Ri.ReactCurrentBatchConfig,kr=0,ot=null,_t=null,Lt=null,Ul=!1,bo=!1,Ko=0,k_=0;function zt(){throw Error(ee(321))}function ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function fd(t,e,n,i,r,s){if(kr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?V_:H_,t=n(i,r),bo){s=0;do{if(bo=!1,Ko=0,25<=s)throw Error(ee(301));s+=1,Lt=_t=null,e.updateQueue=null,ll.current=W_,t=n(i,r)}while(bo)}if(ll.current=Ol,e=_t!==null&&_t.next!==null,kr=0,Lt=_t=ot=null,Ul=!1,e)throw Error(ee(300));return t}function dd(){var t=Ko!==0;return Ko=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ot.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function In(){if(_t===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Lt===null?ot.memoizedState:Lt.next;if(e!==null)Lt=e,_t=t;else{if(t===null)throw Error(ee(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Lt===null?ot.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Qo(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=In(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ot.lanes|=u,zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ot.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=In(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rv(){}function sv(t,e){var n=ot,i=In(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,hd(lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Zo(9,av.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ee(349));kr&30||ov(n,e,r)}return r}function ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function av(t,e,n,i){e.value=n,e.getSnapshot=i,cv(e)&&uv(t)}function lv(t,e,n){return n(function(){cv(e)&&uv(t)})}function cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function uv(t){var e=Ti(t,1);e!==null&&qn(e,t,1,-1)}function Nh(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=G_.bind(null,ot,t),[e.memoizedState,t]}function Zo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fv(){return In().memoizedState}function cl(t,e,n,i){var r=ti();ot.flags|=t,r.memoizedState=Zo(1|e,n,void 0,i===void 0?null:i)}function tc(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&ud(i,o.deps)){r.memoizedState=Zo(e,n,s,i);return}}ot.flags|=t,r.memoizedState=Zo(1|e,n,s,i)}function Uh(t,e){return cl(8390656,8,t,e)}function hd(t,e){return tc(2048,8,t,e)}function dv(t,e){return tc(4,2,t,e)}function hv(t,e){return tc(4,4,t,e)}function pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){return n=n!=null?n.concat([t]):null,tc(4,4,pv.bind(null,e,t),n)}function pd(){}function gv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xv(t,e,n){return kr&21?(Qn(n,e)||(n=Sg(),ot.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function z_(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{$e=n,zc.transition=i}}function _v(){return In().memoizedState}function B_(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yv(t))Sv(e,n);else if(n=Qg(t,e,n,i),n!==null){var r=Zt();qn(n,t,i,r),Mv(n,e,i)}}function G_(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yv(t))Sv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,sd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qg(t,e,r,i),n!==null&&(r=Zt(),qn(n,t,i,r),Mv(n,e,i))}}function yv(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function Sv(t,e){bo=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jf(t,n)}}var Ol={readContext:Dn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},V_={readContext:Dn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Uh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=B_.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:Nh,useDebugValue:pd,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=Nh(!1),e=t[0];return t=z_.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ot,r=ti();if(rt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Dt===null)throw Error(ee(349));kr&30||ov(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Uh(lv.bind(null,i,s,t),[t]),i.flags|=2048,Zo(9,av.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=Dt.identifierPrefix;if(rt){var n=Si,i=yi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=k_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},H_={readContext:Dn,useCallback:gv,useContext:Dn,useEffect:hd,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:vv,useReducer:Bc,useRef:fv,useState:function(){return Bc(Qo)},useDebugValue:pd,useDeferredValue:function(t){var e=In();return xv(e,_t.memoizedState,t)},useTransition:function(){var t=Bc(Qo)[0],e=In().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:_v,unstable_isNewReconciler:!1},W_={readContext:Dn,useCallback:gv,useContext:Dn,useEffect:hd,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:vv,useReducer:Gc,useRef:fv,useState:function(){return Gc(Qo)},useDebugValue:pd,useDeferredValue:function(t){var e=In();return _t===null?e.memoizedState=t:xv(e,_t.memoizedState,t)},useTransition:function(){var t=Gc(Qo)[0],e=In().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:_v,unstable_isNewReconciler:!1};function Gs(t,e){try{var n="",i=e;do n+=xx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var j_=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,xf=i),lf(t,e)},n}function wv(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lf(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Oh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new j_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sy.bind(null,t,e,n),e.then(t,t))}function Fh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var X_=Ri.ReactCurrentOwner,an=!1;function qt(t,e,n,i){e.child=t===null?nv(e,null,n,i):zs(e,t.child,n,i)}function zh(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=fd(t,e,n,i,s,r),n=dd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(rt&&n&&Jf(e),e.flags|=1,qt(t,e,i,r),e.child)}function Bh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tv(t,e,s,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wo(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return cf(t,e,n,i,r)}function Cv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(ws,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ze(ws,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ze(ws,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ze(ws,gn),gn|=i;return qt(t,e,r,n),e.child}function Av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cf(t,e,n,i,r){var s=cn(n)?Or:jt.current;return s=Fs(e,s),Ls(e,r),n=fd(t,e,n,i,s,r),i=dd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(rt&&i&&Jf(e),e.flags|=1,qt(t,e,n,r),e.child)}function Gh(t,e,n,i,r){if(cn(n)){var s=!0;Rl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)ul(t,e),ev(e,n,i),af(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=cn(n)?Or:jt.current,c=Fs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Dh(e,o,i,c),Bi=!1;var h=e.memoizedState;o.state=h,Il(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||Bi?(typeof u=="function"&&(of(e,n,u,i),l=e.memoizedState),(a=Bi||Lh(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Zg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=cn(n)?Or:jt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Dh(e,o,i,l),Bi=!1,h=e.memoizedState,o.state=h,Il(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||ln.current||Bi?(typeof p=="function"&&(of(e,n,p,i),_=e.memoizedState),(c=Bi||Lh(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return uf(t,e,n,i,s,r)}function uf(t,e,n,i,r,s){Av(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ch(e,n,!1),Ci(t,e,s);i=e.stateNode,X_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Ch(e,n,!0),e.child}function Rv(t){var e=t.stateNode;e.pendingContext?Th(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Th(t,e.context,!1),ad(t,e.containerInfo)}function Vh(t,e,n,i,r){return ks(),td(r),e.flags|=256,qt(t,e,n,i),e.child}var ff={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var i=e.pendingProps,r=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ze(st,r&1),t===null)return rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=df(n),e.memoizedState=ff,t):md(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ff,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function md(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,i){return i!==null&&td(i),zs(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(ee(422))),ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rc({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=df(o),e.memoizedState=ff,s);if(!(e.mode&1))return ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Vc(s,i,void 0),ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),qn(i,t,r,-1))}return Sd(),i=Vc(Error(ee(421))),ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Ki(r.nextSibling),xn=e,rt=!0,Wn=null,t!==null&&(Tn[Cn++]=yi,Tn[Cn++]=Si,Tn[Cn++]=Fr,yi=t.id,Si=t.overflow,Fr=e),e=md(e,i.children),e.flags|=4096,e)}function Hh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sf(t.return,e,n)}function Hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Pv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=st.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,n,e);else if(t.tag===19)Hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ze(st,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y_(t,e,n){switch(e.tag){case 3:Rv(e),ks();break;case 5:iv(e);break;case 1:cn(e.type)&&Rl(e);break;case 4:ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ze(Ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(Ze(st,st.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);Ze(st,st.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Pv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ze(st,st.current),i)break;return null;case 22:case 23:return e.lanes=0,Cv(t,e,n)}return Ci(t,e,n)}var Lv,hf,Dv,Iv;Lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};Dv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(si.current);var s=null;switch(n){case"input":r=Nu(t,r),i=Nu(t,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}zu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Iv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function q_(t,e,n){var i=e.pendingProps;switch(ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return cn(e.type)&&Al(),Bt(e),null;case 3:return i=e.stateNode,Bs(),it(ln),it(jt),cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Sf(Wn),Wn=null))),hf(t,e),Bt(e),null;case 5:ld(e);var r=Tr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Dv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Bt(e),null}if(t=Tr(si.current),Aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[$o]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(r=0;r<Mo.length;r++)Je(Mo[r],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":Zd(i,s),Je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Je("invalid",i);break;case"textarea":eh(i,s),Je("invalid",i)}zu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",i)}switch(n){case"input":xa(i),Jd(i,s,!0);break;case"textarea":xa(i),th(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[$o]=i,Lv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bu(n,i),n){case"dialog":Je("cancel",t),Je("close",t),r=i;break;case"iframe":case"object":case"embed":Je("load",t),r=i;break;case"video":case"audio":for(r=0;r<Mo.length;r++)Je(Mo[r],t);r=i;break;case"source":Je("error",t),r=i;break;case"img":case"image":case"link":Je("error",t),Je("load",t),r=i;break;case"details":Je("toggle",t),r=i;break;case"input":Zd(t,i),r=Nu(t,i),Je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),Je("invalid",t);break;case"textarea":eh(t,i),r=Fu(t,i),Je("invalid",t);break;default:r=i}zu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ag(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(t,l):typeof l=="number"&&ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Je("scroll",t):l!=null&&zf(t,s,l,o))}switch(n){case"input":xa(t),Jd(t,i,!1);break;case"textarea":xa(t),th(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)Iv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Tr(qo.current),Tr(si.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Bt(e),null;case 13:if(it(st),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&vn!==null&&e.mode&1&&!(e.flags&128))Kg(),ks(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ii]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Wn!==null&&(Sf(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?St===0&&(St=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Bs(),hf(t,e),t===null&&jo(e.stateNode.containerInfo),Bt(e),null;case 10:return rd(e.type._context),Bt(e),null;case 17:return cn(e.type)&&Al(),Bt(e),null;case 19:if(it(st),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ze(st,st.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>Vs&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return Bt(e),null}else 2*pt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=st.current,Ze(st,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return yd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function K_(t,e){switch(ed(e),e.tag){case 1:return cn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),it(ln),it(jt),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ld(e),null;case 13:if(it(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(st),null;case 4:return Bs(),null;case 10:return rd(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var Pa=!1,Wt=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,de=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ct(t,e,i)}else n.current=null}function pf(t,e,n){try{n()}catch(i){ct(t,e,i)}}var Wh=!1;function Z_(t,e){if(Ku=El,t=Fg(),Zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:t,selectionRange:n},El=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:Vn(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=Wh,Wh=!1,_}function Po(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pf(e,n,s)}r=r.next}while(r!==i)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[$o],delete e[ef],delete e[N_],delete e[U_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uv(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}function vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}var Ut=null,Hn=!1;function Li(t,e,n){for(n=n.child;n!==null;)Ov(t,e,n),n=n.sibling}function Ov(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:Wt||Es(n,e);case 6:var i=Ut,r=Hn;Ut=null,Li(t,e,n),Ut=i,Hn=r,Ut!==null&&(Hn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Hn?(t=Ut,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),Vo(t)):Oc(Ut,n.stateNode));break;case 4:i=Ut,r=Hn,Ut=n.stateNode.containerInfo,Hn=!0,Li(t,e,n),Ut=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pf(n,e,o),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Wt&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ct(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Li(t,e,n),Wt=i):Li(t,e,n);break;default:Li(t,e,n)}}function Xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q_),e.forEach(function(i){var r=ay.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Hn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ut===null)throw Error(ee(160));Ov(s,o,r),Ut=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fv(e,t),e=e.sibling}function Fv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{Po(3,t,t.return),nc(3,t)}catch(g){ct(t,t.return,g)}try{Po(5,t,t.return)}catch(g){ct(t,t.return,g)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{ko(r,"")}catch(g){ct(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rg(r,s),Bu(a,o);var c=Bu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?cg(r,d):u==="dangerouslySetInnerHTML"?ag(r,d):u==="children"?ko(r,d):zf(r,u,d,c)}switch(a){case"input":Uu(r,s);break;case"textarea":sg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[$o]=s}catch(g){ct(t,t.return,g)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){ct(t,t.return,g)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(g){ct(t,t.return,g)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xd=pt())),i&4&&Xh(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,On(e,t),Wt=c):On(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(de=t,u=t.child;u!==null;){for(d=de=u;de!==null;){switch(h=de,p=h.child,h.tag){case 0:case 11:case 14:case 15:Po(4,h,h.return);break;case 1:Es(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){ct(i,n,g)}}break;case 5:Es(h,h.return);break;case 22:if(h.memoizedState!==null){Yh(d);continue}}p!==null?(p.return=h,de=p):Yh(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lg("display",o))}catch(g){ct(t,t.return,g)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){ct(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),Jn(t),i&4&&Xh(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Uv(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ko(r,""),i.flags&=-33);var s=jh(t);vf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=jh(t);gf(t,a,o);break;default:throw Error(ee(161))}}catch(l){ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function J_(t,e,n){de=t,kv(t)}function kv(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Pa;var c=Wt;if(Pa=o,(Wt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?qh(r):l!==null?(l.return=o,de=l):qh(r);for(;s!==null;)de=s,kv(s),s=s.sibling;de=r,Pa=a,Wt=c}$h(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):$h(t)}}function $h(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ph(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ph(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Wt||e.flags&512&&mf(e)}catch(h){ct(e,e.return,h)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Yh(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function qh(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(l){ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ct(e,r,l)}}var s=e.return;try{mf(e)}catch(l){ct(e,s,l)}break;case 5:var o=e.return;try{mf(e)}catch(l){ct(e,o,l)}}}catch(l){ct(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var ey=Math.ceil,Fl=Ri.ReactCurrentDispatcher,gd=Ri.ReactCurrentOwner,Ln=Ri.ReactCurrentBatchConfig,We=0,Dt=null,vt=null,Ot=0,gn=0,ws=ar(0),St=0,Jo=null,zr=0,ic=0,vd=0,Lo=null,rn=null,xd=0,Vs=1/0,vi=null,kl=!1,xf=null,Zi=null,La=!1,Wi=null,zl=0,Do=0,_f=null,fl=-1,dl=0;function Zt(){return We&6?pt():fl!==-1?fl:fl=pt()}function Ji(t){return t.mode&1?We&2&&Ot!==0?Ot&-Ot:F_.transition!==null?(dl===0&&(dl=Sg()),dl):(t=$e,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function qn(t,e,n,i){if(50<Do)throw Do=0,_f=null,Error(ee(185));sa(t,n,i),(!(We&2)||t!==Dt)&&(t===Dt&&(!(We&2)&&(ic|=n),St===4&&Vi(t,Ot)),un(t,i),n===1&&We===0&&!(e.mode&1)&&(Vs=pt()+500,Jl&&lr()))}function un(t,e){var n=t.callbackNode;Fx(t,e);var i=Ml(t,t===Dt?Ot:0);if(i===0)n!==null&&rh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rh(n),e===1)t.tag===0?O_(Kh.bind(null,t)):$g(Kh.bind(null,t)),D_(function(){!(We&6)&&lr()}),n=null;else{switch(Mg(i)){case 1:n=Wf;break;case 4:n=_g;break;case 16:n=Sl;break;case 536870912:n=yg;break;default:n=Sl}n=Xv(n,zv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zv(t,e){if(fl=-1,dl=0,We&6)throw Error(ee(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Ml(t,t===Dt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bl(t,i);else{e=i;var r=We;We|=2;var s=Gv();(Dt!==t||Ot!==e)&&(vi=null,Vs=pt()+500,br(t,e));do try{iy();break}catch(a){Bv(t,a)}while(1);id(),Fl.current=s,We=r,vt!==null?e=0:(Dt=null,Ot=0,e=St)}if(e!==0){if(e===2&&(r=ju(t),r!==0&&(i=r,e=yf(t,r))),e===1)throw n=Jo,br(t,0),Vi(t,i),un(t,pt()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ty(r)&&(e=Bl(t,i),e===2&&(s=ju(t),s!==0&&(i=s,e=yf(t,s))),e===1))throw n=Jo,br(t,0),Vi(t,i),un(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:xr(t,rn,vi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=xd+500-pt(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(xr.bind(null,t,rn,vi),e);break}xr(t,rn,vi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ey(i/1960))-i,10<i){t.timeoutHandle=Ju(xr.bind(null,t,rn,vi),i);break}xr(t,rn,vi);break;case 5:xr(t,rn,vi);break;default:throw Error(ee(329))}}}return un(t,pt()),t.callbackNode===n?zv.bind(null,t):null}function yf(t,e){var n=Lo;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=rn,rn=n,e!==null&&Sf(e)),t}function Sf(t){rn===null?rn=t:rn.push.apply(rn,t)}function ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~vd,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Kh(t){if(We&6)throw Error(ee(327));Ds();var e=Ml(t,0);if(!(e&1))return un(t,pt()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var i=ju(t);i!==0&&(e=i,n=yf(t,i))}if(n===1)throw n=Jo,br(t,0),Vi(t,e),un(t,pt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,rn,vi),un(t,pt()),null}function _d(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Vs=pt()+500,Jl&&lr())}}function Br(t){Wi!==null&&Wi.tag===0&&!(We&6)&&Ds();var e=We;We|=1;var n=Ln.transition,i=$e;try{if(Ln.transition=null,$e=1,t)return t()}finally{$e=i,Ln.transition=n,We=e,!(We&6)&&lr()}}function yd(){gn=ws.current,it(ws)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L_(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Bs(),it(ln),it(jt),cd();break;case 5:ld(i);break;case 4:Bs();break;case 13:it(st);break;case 19:it(st);break;case 10:rd(i.type._context);break;case 22:case 23:yd()}n=n.return}if(Dt=t,vt=t=er(t.current,null),Ot=gn=e,St=0,Jo=null,vd=ic=zr=0,rn=Lo=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}wr=null}return t}function Bv(t,e){do{var n=vt;try{if(id(),ll.current=Ol,Ul){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(kr=0,Lt=_t=ot=null,bo=!1,Ko=0,gd.current=null,n===null||n.return===null){St=1,Jo=e,vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Fh(o);if(p!==null){p.flags&=-257,kh(p,o,a,s,e),p.mode&1&&Oh(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){Oh(s,c,e),Sd();break e}l=Error(ee(426))}}else if(rt&&a.mode&1){var m=Fh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),kh(m,o,a,s,e),td(Gs(l,a));break e}}s=l=Gs(l,a),St!==4&&(St=2),Lo===null?Lo=[s]:Lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Ev(s,l,e);bh(s,f);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zi===null||!Zi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=wv(s,a,e);bh(s,M);break e}}s=s.return}while(s!==null)}Hv(n)}catch(S){e=S,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(1)}function Gv(){var t=Fl.current;return Fl.current=Ol,t===null?Ol:t}function Sd(){(St===0||St===3||St===2)&&(St=4),Dt===null||!(zr&268435455)&&!(ic&268435455)||Vi(Dt,Ot)}function Bl(t,e){var n=We;We|=2;var i=Gv();(Dt!==t||Ot!==e)&&(vi=null,br(t,e));do try{ny();break}catch(r){Bv(t,r)}while(1);if(id(),We=n,Fl.current=i,vt!==null)throw Error(ee(261));return Dt=null,Ot=0,St}function ny(){for(;vt!==null;)Vv(vt)}function iy(){for(;vt!==null&&!Rx();)Vv(vt)}function Vv(t){var e=jv(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?Hv(t):vt=e,gd.current=null}function Hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=K_(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,vt=null;return}}else if(n=q_(n,e,gn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);St===0&&(St=5)}function xr(t,e,n){var i=$e,r=Ln.transition;try{Ln.transition=null,$e=1,ry(t,e,n,i)}finally{Ln.transition=r,$e=i}return null}function ry(t,e,n,i){do Ds();while(Wi!==null);if(We&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kx(t,s),t===Dt&&(vt=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,Xv(Sl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=$e;$e=1;var a=We;We|=4,gd.current=null,Z_(t,n),Fv(n,t),w_(Qu),El=!!Ku,Qu=Ku=null,t.current=n,J_(n),bx(),We=a,$e=o,Ln.transition=s}else t.current=n;if(La&&(La=!1,Wi=t,zl=r),s=t.pendingLanes,s===0&&(Zi=null),Dx(n.stateNode),un(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=xf,xf=null,t;return zl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===_f?Do++:(Do=0,_f=t):Do=0,lr(),null}function Ds(){if(Wi!==null){var t=Mg(zl),e=Ln.transition,n=$e;try{if(Ln.transition=null,$e=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,zl=0,We&6)throw Error(ee(331));var r=We;for(We|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:Po(8,u,s)}var d=u.child;if(d!==null)d.return=u,de=d;else for(;de!==null;){u=de;var h=u.sibling,p=u.return;if(Nv(u),u===c){de=null;break}if(h!==null){h.return=p,de=h;break}de=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,de=f;break e}de=s.return}}var v=t.current;for(de=v;de!==null;){o=de;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,de=x;else e:for(o=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nc(9,a)}}catch(S){ct(a,a.return,S)}if(a===o){de=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,de=M;break e}de=a.return}}if(We=r,lr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Yl,t)}catch{}i=!0}return i}finally{$e=n,Ln.transition=e}}return!1}function Qh(t,e,n){e=Gs(n,e),e=Ev(t,e,1),t=Qi(t,e,1),e=Zt(),t!==null&&(sa(t,1,e),un(t,e))}function ct(t,e,n){if(t.tag===3)Qh(t,t,n);else for(;e!==null;){if(e.tag===3){Qh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Gs(n,t),t=wv(e,t,1),e=Qi(e,t,1),t=Zt(),e!==null&&(sa(e,1,t),un(e,t));break}}e=e.return}}function sy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(St===4||St===3&&(Ot&130023424)===Ot&&500>pt()-xd?br(t,0):vd|=n),un(t,e)}function Wv(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=Zt();t=Ti(t,e),t!==null&&(sa(t,e,n),un(t,n))}function oy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wv(t,n)}function ay(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Wv(t,n)}var jv;jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,Y_(t,e,n);an=!!(t.flags&131072)}else an=!1,rt&&e.flags&1048576&&Yg(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(t,e),t=e.pendingProps;var r=Fs(e,jt.current);Ls(e,n),r=fd(null,e,i,t,r,n);var s=dd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,od(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,af(e,i,t,n),e=uf(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&Jf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cy(i),t=Vn(i,t),r){case 0:e=cf(null,e,i,t,n);break e;case 1:e=Gh(null,e,i,t,n);break e;case 11:e=zh(null,e,i,t,n);break e;case 14:e=Bh(null,e,i,Vn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),cf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Gh(t,e,i,r,n);case 3:e:{if(Rv(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zg(t,e),Il(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(ee(423)),e),e=Vh(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(ee(424)),e),e=Vh(t,e,i,n,r);break e}else for(vn=Ki(e.stateNode.containerInfo.firstChild),xn=e,rt=!0,Wn=null,n=nv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ci(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return iv(e),t===null&&rf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Zu(i,r)?o=null:s!==null&&Zu(i,s)&&(e.flags|=32),Av(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&rf(e),null;case 13:return bv(t,e,n);case 4:return ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),zh(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ze(Ll,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!ln.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Dn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Bh(t,e,i,r,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),ul(t,e),e.tag=1,cn(i)?(t=!0,Rl(e)):t=!1,Ls(e,n),ev(e,i,r),af(e,i,r,n),uf(null,e,i,!0,t,n);case 19:return Pv(t,e,n);case 22:return Cv(t,e,n)}throw Error(ee(156,e.tag))};function Xv(t,e){return xg(t,e)}function ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new ly(t,e,n,i)}function Md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cy(t){if(typeof t=="function")return Md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gf)return 11;if(t===Vf)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Pr(n.children,r,s,e);case Bf:o=8,r|=8;break;case Pu:return t=bn(12,n,e,r|2),t.elementType=Pu,t.lanes=s,t;case Lu:return t=bn(13,n,e,r),t.elementType=Lu,t.lanes=s,t;case Du:return t=bn(19,n,e,r),t.elementType=Du,t.lanes=s,t;case tg:return rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jm:o=10;break e;case eg:o=9;break e;case Gf:o=11;break e;case Vf:o=14;break e;case zi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function rc(t,e,n,i){return t=bn(22,t,i,e),t.elementType=tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ed(t,e,n,i,r,s,o,a,l){return t=new uy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(s),t}function fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $v(t){if(!t)return ir;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(cn(n))return Xg(t,n,e)}return e}function Yv(t,e,n,i,r,s,o,a,l){return t=Ed(n,i,!0,t,r,s,o,a,l),t.context=$v(null),n=t.current,i=Zt(),r=Ji(n),s=Mi(i,r),s.callback=e??null,Qi(n,s,r),t.current.lanes=r,sa(t,r,i),un(t,i),t}function sc(t,e,n,i){var r=e.current,s=Zt(),o=Ji(r);return n=$v(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,o),t!==null&&(qn(t,r,o,s),al(t,r,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){Zh(t,e),(t=t.alternate)&&Zh(t,e)}function dy(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}oc.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));sc(t,e,null,null)};oc.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){sc(null,t,null,null)}),e[wi]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&Ag(t)}};function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jh(){}function hy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gl(o);s.call(c)}}var o=Yv(e,i,t,0,null,!1,!1,"",Jh);return t._reactRootContainer=o,t[wi]=o.current,jo(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Gl(l);a.call(c)}}var l=Ed(t,0,!1,null,null,!1,!1,"",Jh);return t._reactRootContainer=l,t[wi]=l.current,jo(t.nodeType===8?t.parentNode:t),Br(function(){sc(e,l,n,i)}),l}function lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gl(o);a.call(l)}}sc(e,o,t,r)}else o=hy(n,e,t,r,i);return Gl(o)}Eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(jf(e,n|1),un(e,pt()),!(We&6)&&(Vs=pt()+500,lr()))}break;case 13:Br(function(){var i=Ti(t,1);if(i!==null){var r=Zt();qn(i,t,1,r)}}),wd(t,1)}};Xf=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=Zt();qn(e,t,134217728,n)}wd(t,134217728)}};wg=function(t){if(t.tag===13){var e=Ji(t),n=Ti(t,e);if(n!==null){var i=Zt();qn(n,t,e,i)}wd(t,e)}};Tg=function(){return $e};Cg=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Vu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zl(i);if(!r)throw Error(ee(90));ig(i),Uu(i,r)}}}break;case"textarea":sg(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};dg=_d;hg=Br;var py={usingClientEntryPoint:!1,Events:[aa,xs,Zl,ug,fg,_d]},ho={findFiberByHostInstance:Er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},my={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{Yl=Da.inject(my),ri=Da}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(e))throw Error(ee(200));return fy(t,e,null,n)};yn.createRoot=function(t,e){if(!Cd(t))throw Error(ee(299));var n=!1,i="",r=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ed(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,jo(t.nodeType===8?t.parentNode:t),new Td(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=gg(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Br(t)};yn.hydrate=function(t,e,n){if(!ac(e))throw Error(ee(200));return lc(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Cd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yv(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,jo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new oc(e)};yn.render=function(t,e,n){if(!ac(e))throw Error(ee(200));return lc(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!ac(t))throw Error(ee(40));return t._reactRootContainer?(Br(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};yn.unstable_batchedUpdates=_d;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return lc(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(t){console.error(t)}}Kv(),Ym.exports=yn;var gy=Ym.exports,ep=gy;Ru.createRoot=ep.createRoot,Ru.hydrateRoot=ep.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="152",vy=0,tp=1,xy=2,Rd=1,Qv=2,mi=3,rr=0,Jt=1,Rn=2,Pt=0,Is=1,Mf=2,np=3,ip=4,ea=5,_i=100,_y=101,yy=102,rp=103,sp=104,Ef=200,Sy=201,My=202,Ey=203,bd=204,Pd=205,Zv=206,wy=207,Jv=208,Ty=209,Cy=210,Ay=0,Ry=1,by=2,wf=3,Py=4,Ly=5,Dy=6,Iy=7,cc=0,Ny=1,Uy=2,oi=0,Oy=1,e0=2,Fy=3,ky=4,zy=5,t0=300,Hs=301,Ws=302,Vl=303,Tf=304,uc=306,Gr=1e3,Xn=1001,Cf=1002,yt=1003,op=1004,Xc=1005,An=1006,By=1007,ta=1008,Vr=1009,Gy=1010,Vy=1011,Ld=1012,Hy=1013,Cr=1014,Ar=1015,na=1016,Wy=1017,jy=1018,Ns=1020,Xy=1021,$n=1023,$y=1024,Yy=1025,Lr=1026,js=1027,qy=1028,Ky=1029,Qy=1030,Zy=1031,Jy=1033,$c=33776,Yc=33777,qc=33778,Kc=33779,ap=35840,lp=35841,cp=35842,up=35843,eS=36196,fp=37492,dp=37496,hp=37808,pp=37809,mp=37810,gp=37811,vp=37812,xp=37813,_p=37814,yp=37815,Sp=37816,Mp=37817,Ep=37818,wp=37819,Tp=37820,Cp=37821,Qc=36492,tS=36283,Ap=36284,Rp=36285,bp=36286,n0=3e3,Dr=3001,nS=3200,Js=3201,eo=0,iS=1,Ir="",De="srgb",ai="srgb-linear",i0="display-p3",Zc=7680,rS=519,Pp=35044,Lp="300 es",Af=1035;class to{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,Hl=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function sS(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function Dp(t){return(t&t-1)===0&&t!==0}function oS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ia(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],v=r[1],x=r[4],M=r[7],S=r[2],C=r[5],R=r[8];return s[0]=o*g+a*v+l*S,s[3]=o*m+a*x+l*C,s[6]=o*f+a*M+l*R,s[1]=c*g+u*v+d*S,s[4]=c*m+u*x+d*C,s[7]=c*f+u*M+d*R,s[2]=h*g+p*v+_*S,s[5]=h*m+p*x+_*C,s[8]=h*f+p*M+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new Ge;function r0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Ip={};function Io(t){t in Ip||(Ip[t]=!0,console.warn(t))}function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const aS=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),lS=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function cS(t){return t.convertSRGBToLinear().applyMatrix3(lS)}function uS(t){return t.applyMatrix3(aS).convertLinearToSRGB()}const fS={[ai]:t=>t,[De]:t=>t.convertSRGBToLinear(),[i0]:cS},dS={[ai]:t=>t,[De]:t=>t.convertLinearToSRGB(),[i0]:uS},Fn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ai},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=fS[e],r=dS[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Xr;class s0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=ia("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class o0{constructor(e=null){this.isSource=!0,this.uuid=ca(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?s0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hS=0;class fn extends to{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Xn,r=Xn,s=An,o=ta,a=$n,l=Vr,c=fn.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=ca(),this.name="",this.source=new o0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Dr?De:Ir),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?Dr:n0}set encoding(e){Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dr?De:Ir}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=t0;fn.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,n=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,S=(f+1)/2,C=(u+h)/4,R=(d+g)/4,P=(_+m)/4;return x>M&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=R/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=R/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mt extends to{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new tt(0,0,e,n),this.scissorTest=!1,this.viewport=new tt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Dr?De:Ir),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:An,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new o0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class a0 extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pS extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=g;return}if(d!==g||l!==h||c!==p||u!==_){let m=1-a;const f=l*h+c*p+u*_+d*g,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,f*v);m=Math.sin(m*C)/S,a=Math.sin(a*C)/S}const M=a*v;if(l=l*m+h*M,c=c*m+p*M,u=u*m+_*M,d=d*m+g*M,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*p-c*h,e[n+1]=l*_+u*h+c*d-a*p,e[n+2]=c*_+u*p+a*h-l*d,e[n+3]=u*_-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new N,Np=new ua;class fa{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox),$r.applyMatrix4(e.matrixWorld),this.union($r);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else r.boundingBox===null&&r.computeBoundingBox(),$r.copy(r.boundingBox),$r.applyMatrix4(e.matrixWorld),this.union($r)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Na.subVectors(this.max,po),Yr.subVectors(e.a,po),qr.subVectors(e.b,po),Kr.subVectors(e.c,po),Di.subVectors(qr,Yr),Ii.subVectors(Kr,qr),hr.subVectors(Yr,Kr);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-hr.z,hr.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,hr.z,0,-hr.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-hr.y,hr.x,0];return!su(n,Yr,qr,Kr,Na)||(n=[1,0,0,0,1,0,0,0,1],!su(n,Yr,qr,Kr,Na))?!1:(Ua.crossVectors(Di,Ii),n=[Ua.x,Ua.y,Ua.z],su(n,Yr,qr,Kr,Na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new N,new N,new N,new N,new N,new N,new N,new N],ui=new N,$r=new fa,Yr=new N,qr=new N,Kr=new N,Di=new N,Ii=new N,hr=new N,po=new N,Na=new N,Ua=new N,pr=new N;function su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mS=new fa,mo=new N,ou=new N;class Dd{constructor(e=new N,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(ou)),this.expandByPoint(mo.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new N,au=new N,Oa=new N,Ni=new N,lu=new N,Fa=new N,cu=new N;class gS{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oa),a=Ni.dot(this.direction),l=-Ni.dot(Oa),c=Ni.lengthSq(),u=Math.abs(1-o*o);let d,h,p,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(au).addScaledVector(Oa,h),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){lu.subVectors(n,e),Fa.subVectors(i,e),cu.crossVectors(lu,Fa);let o=this.direction.dot(cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(Ni,Fa));if(l<0)return null;const c=a*this.direction.dot(lu.cross(Ni));if(c<0||l+c>o)return null;const u=-a*Ni.dot(cu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,u,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,_=a*u,g=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,g=c*d;n[0]=h+g*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,g=c*d;n[0]=h-g*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,_=a*u,g=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+g,n[1]=l*d,n[5]=g*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,g=a*c;n[0]=l*u,n[4]=g-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,g=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+g,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=g*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,xS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ui.crossVectors(i,pn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ui.crossVectors(i,pn)),Ui.normalize(),ka.crossVectors(pn,Ui),r[0]=Ui.x,r[4]=ka.x,r[8]=pn.x,r[1]=Ui.y,r[5]=ka.y,r[9]=pn.y,r[2]=Ui.z,r[6]=ka.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],v=i[3],x=i[7],M=i[11],S=i[15],C=r[0],R=r[4],P=r[8],y=r[12],T=r[1],W=r[5],$=r[9],U=r[13],z=r[2],V=r[6],Z=r[10],Q=r[14],I=r[3],k=r[7],B=r[11],se=r[15];return s[0]=o*C+a*T+l*z+c*I,s[4]=o*R+a*W+l*V+c*k,s[8]=o*P+a*$+l*Z+c*B,s[12]=o*y+a*U+l*Q+c*se,s[1]=u*C+d*T+h*z+p*I,s[5]=u*R+d*W+h*V+p*k,s[9]=u*P+d*$+h*Z+p*B,s[13]=u*y+d*U+h*Q+p*se,s[2]=_*C+g*T+m*z+f*I,s[6]=_*R+g*W+m*V+f*k,s[10]=_*P+g*$+m*Z+f*B,s[14]=_*y+g*U+m*Q+f*se,s[3]=v*C+x*T+M*z+S*I,s[7]=v*R+x*W+M*V+S*k,s[11]=v*P+x*$+M*Z+S*B,s[15]=v*y+x*U+M*Q+S*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+g*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],v=d*m*c-g*h*c+g*l*p-a*m*p-d*l*f+a*h*f,x=_*h*c-u*m*c-_*l*p+o*m*p+u*l*f-o*h*f,M=u*g*c-_*d*c+_*a*p-o*g*p-u*a*f+o*d*f,S=_*d*l-u*g*l-_*a*h+o*g*h+u*a*m-o*d*m,C=n*v+i*x+r*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=v*R,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*R,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*f+i*l*f)*R,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=x*R,e[5]=(u*m*s-_*h*s+_*r*p-n*m*p-u*r*f+n*h*f)*R,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*f-n*l*f)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=M*R,e[9]=(_*d*s-u*g*s-_*i*p+n*g*p+u*i*f-n*d*f)*R,e[10]=(o*g*s-_*a*s+_*i*c-n*g*c-o*i*f+n*a*f)*R,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*R,e[12]=S*R,e[13]=(u*g*r-_*d*r+_*i*h-n*g*h-u*i*m+n*d*m)*R,e[14]=(_*a*r-o*g*r-_*i*l+n*g*l+o*i*m-n*a*m)*R,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,_=s*d,g=o*u,m=o*d,f=a*d,v=l*c,x=l*u,M=l*d,S=i.x,C=i.y,R=i.z;return r[0]=(1-(g+f))*S,r[1]=(p+M)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(h+f))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(_+x)*R,r[9]=(m-v)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,u=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),d=(i+r)/(i-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(o-s),d=(n+e)*l,h=(i+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new N,kn=new ut,vS=new N(0,0,0),xS=new N(1,1,1),Ui=new N,ka=new N,pn=new N,Up=new ut,Op=new ua;class fc{constructor(e=0,n=0,i=0,r=fc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fc.DEFAULT_ORDER="XYZ";class l0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const Fp=new N,Zr=new ua,di=new ut,za=new N,go=new N,yS=new N,SS=new ua,kp=new N(1,0,0),zp=new N(0,1,0),Bp=new N(0,0,1),MS={type:"added"},Gp={type:"removed"};class Et extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new N,n=new fc,i=new ua,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new l0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?za.copy(e):za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(go,za,this.up):di.lookAt(za,go,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(di),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Gp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Gp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new N(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new N,hi=new N,uu=new N,pi=new N,Jr=new N,es=new N,Vp=new N,fu=new N,du=new N,hu=new N;let Ba=!1;class jn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),hi.subVectors(i,n),uu.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(hi),l=zn.dot(uu),c=hi.dot(hi),u=hi.dot(uu),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi),l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),hi.subVectors(e,n),zn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),zn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Jr.subVectors(r,i),es.subVectors(s,i),fu.subVectors(e,i);const l=Jr.dot(fu),c=es.dot(fu);if(l<=0&&c<=0)return n.copy(i);du.subVectors(e,r);const u=Jr.dot(du),d=es.dot(du);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Jr,o);hu.subVectors(e,s);const p=Jr.dot(hu),_=es.dot(hu);if(_>=0&&p<=_)return n.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(es,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Vp.subVectors(s,r),a=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(Vp,a);const f=1/(m+g+h);return o=g*f,a=h*f,n.copy(i).addScaledVector(Jr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ES=0;class bi extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Is,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bd,this.blendDst=Pd,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zc,this.stencilZFail=Zc,this.stencilZPass=Zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Te{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Fn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Fn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Fn.workingColorSpace){if(e=sS(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return Fn.toWorkingColorSpace(this,r),this}setStyle(e,n=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=De){const i=c0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return Fn.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Kt(Vt.r*255,0,255))*65536+Math.round(Kt(Vt.g*255,0,255))*256+Math.round(Kt(Vt.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Fn.workingColorSpace){Fn.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Fn.workingColorSpace){return Fn.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=De){Fn.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==De?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bn),Bn.h+=e,Bn.s+=n,Bn.l+=i,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bn),e.getHSL(Ga);const i=eu(Bn.h,Ga.h,n),r=eu(Bn.s,Ga.s,n),s=eu(Bn.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Te;Te.NAMES=c0;class ji extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new N,Va=new ge;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class u0 extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class f0 extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class It extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wS=0;const En=new ut,mu=new Et,ts=new N,mn=new fa,vo=new fa,bt=new N;class Nn extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(mn.min,vo.min),mn.expandByPoint(bt),bt.addVectors(mn.max,vo.max),mn.expandByPoint(bt)):(mn.expandByPoint(vo.min),mn.expandByPoint(vo.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),bt.add(ts)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new N,u[T]=new N;const d=new N,h=new N,p=new N,_=new ge,g=new ge,m=new ge,f=new N,v=new N;function x(T,W,$){d.fromArray(r,T*3),h.fromArray(r,W*3),p.fromArray(r,$*3),_.fromArray(o,T*2),g.fromArray(o,W*2),m.fromArray(o,$*2),h.sub(d),p.sub(d),g.sub(_),m.sub(_);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(U),v.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(U),c[T].add(f),c[W].add(f),c[$].add(f),u[T].add(v),u[W].add(v),u[$].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,W=M.length;T<W;++T){const $=M[T],U=$.start,z=$.count;for(let V=U,Z=U+z;V<Z;V+=3)x(i[V+0],i[V+1],i[V+2])}const S=new N,C=new N,R=new N,P=new N;function y(T){R.fromArray(s,T*3),P.copy(R);const W=c[T];S.copy(W),S.sub(R.multiplyScalar(R.dot(W))).normalize(),C.crossVectors(P,W);const U=C.dot(u[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=U}for(let T=0,W=M.length;T<W;++T){const $=M[T],U=$.start,z=$.count;for(let V=U,Z=U+z;V<Z;V+=3)y(i[V+0]),y(i[V+1]),y(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Kn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new ut,ei=new gS,Ha=new Dd,Wp=new N,ns=new N,is=new N,rs=new N,gu=new N,Wa=new N,ja=new ge,Xa=new ge,$a=new ge,jp=new N,Xp=new N,$p=new N,Ya=new N,qa=new N;class Qt extends Et{constructor(e=new Nn,n=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(gu.fromBufferAttribute(d,e),o?Wa.addScaledVector(gu,u):Wa.addScaledVector(gu.sub(n),u))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(Ha.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ha,Wp)===null||ei.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Hp.copy(s).invert(),ei.copy(e.ray).applyMatrix4(Hp),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=s[g.materialIndex],f=Math.max(g.start,h.start),v=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let x=f,M=v;x<M;x+=3){const S=o.getX(x),C=o.getX(x+1),R=o.getX(x+2);i=Ka(this,m,e,ei,l,c,u,S,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const f=o.getX(g),v=o.getX(g+1),x=o.getX(g+2);i=Ka(this,s,e,ei,l,c,u,f,v,x),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=s[g.materialIndex],f=Math.max(g.start,h.start),v=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let x=f,M=v;x<M;x+=3){const S=x,C=x+1,R=x+2;i=Ka(this,m,e,ei,l,c,u,S,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const f=g,v=g+1,x=g+2;i=Ka(this,s,e,ei,l,c,u,f,v,x),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function TS(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;qa.copy(a),qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qa);return c<n.near||c>n.far?null:{distance:c,point:qa.clone(),object:t}}function Ka(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ns),t.getVertexPosition(l,is),t.getVertexPosition(c,rs);const u=TS(t,e,n,i,ns,is,rs,Ya);if(u){r&&(ja.fromBufferAttribute(r,a),Xa.fromBufferAttribute(r,l),$a.fromBufferAttribute(r,c),u.uv=jn.getInterpolation(Ya,ns,is,rs,ja,Xa,$a,new ge)),s&&(ja.fromBufferAttribute(s,a),Xa.fromBufferAttribute(s,l),$a.fromBufferAttribute(s,c),u.uv1=jn.getInterpolation(Ya,ns,is,rs,ja,Xa,$a,new ge),u.uv2=u.uv1),o&&(jp.fromBufferAttribute(o,a),Xp.fromBufferAttribute(o,l),$p.fromBufferAttribute(o,c),u.normal=jn.getInterpolation(Ya,ns,is,rs,jp,Xp,$p,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};jn.getNormal(ns,is,rs,d.normal),u.face=d}return u}class da extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(d,2));function _(g,m,f,v,x,M,S,C,R,P,y){const T=M/R,W=S/P,$=M/2,U=S/2,z=C/2,V=R+1,Z=P+1;let Q=0,I=0;const k=new N;for(let B=0;B<Z;B++){const se=B*W-U;for(let ie=0;ie<V;ie++){const G=ie*T-$;k[g]=G*v,k[m]=se*x,k[f]=z,c.push(k.x,k.y,k.z),k[g]=0,k[m]=0,k[f]=C>0?1:-1,u.push(k.x,k.y,k.z),d.push(ie/R),d.push(1-B/P),Q+=1}}for(let B=0;B<P;B++)for(let se=0;se<R;se++){const ie=h+se+V*B,G=h+se+V*(B+1),K=h+(se+1)+V*(B+1),re=h+(se+1)+V*B;l.push(ie,G,re),l.push(G,K,re),I+=6}a.addGroup(p,I,y),p+=I,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Xs(t[n]);for(const r in i)e[r]=i[r]}return e}function CS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d0(t){return t.getRenderTarget()===null?t.outputColorSpace:ai}const on={clone:Xs,merge:Yt};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nt extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=CS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class h0 extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends h0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,os=1;class bS extends Et{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new sn(ss,os,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new sn(ss,os,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new sn(ss,os,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new sn(ss,os,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new sn(ss,os,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new sn(ss,os,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=oi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class p0 extends fn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PS extends Mt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dr?De:Ir),this.texture=new p0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new da(5,5,5),s=new nt({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Pt});s.uniforms.tEquirect.value=n;const o=new Qt(r,s),a=n.minFilter;return n.minFilter===ta&&(n.minFilter=An),new bS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const vu=new N,LS=new N,DS=new Ge;class _r{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(LS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DS.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Dd,Qa=new N;class Id{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],p=i[9],_=i[10],g=i[11],m=i[12],f=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,d-l,g-h,x-m).normalize(),n[1].setComponents(a+r,d+l,g+h,x+m).normalize(),n[2].setComponents(a+s,d+c,g+p,x+f).normalize(),n[3].setComponents(a-s,d-c,g-p,x-f).normalize(),n[4].setComponents(a-o,d-u,g-_,x-v).normalize(),n[5].setComponents(a+o,d+u,g+_,x+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,p=u.updateRange;t.bindBuffer(d,c),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class ha extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const v=f*h-o;for(let x=0;x<c;x++){const M=x*d-s;_.push(M,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+c*f,M=v+c*(f+1),S=v+1+c*(f+1),C=v+1+c*f;p.push(x,M,C),p.push(M,S,C)}this.setIndex(p),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var NS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,US=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,FS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BS="vec3 transformed = vec3( position );",GS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HS=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,WS=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JS=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,e1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,t1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",a1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
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
}`,x1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,E1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,b1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,P1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,I1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,F1=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,k1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B1=`#if defined( USE_POINTS_UV )
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
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,j1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,sM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xM=`#ifdef USE_SKINNING
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
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,wM=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,TM=`#ifdef USE_UV
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
#endif`,CM=`#ifdef USE_UV
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
#endif`,AM=`#ifdef USE_UV
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
#endif`,RM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,OM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,kM=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,GM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,WM=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,XM=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,YM=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KM=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,ZM=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,eE=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,nE=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
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
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,oE=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:NS,alphamap_pars_fragment:US,alphatest_fragment:OS,alphatest_pars_fragment:FS,aomap_fragment:kS,aomap_pars_fragment:zS,begin_vertex:BS,beginnormal_vertex:GS,bsdfs:VS,iridescence_fragment:HS,bumpmap_pars_fragment:WS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:XS,clipping_planes_pars_vertex:$S,clipping_planes_vertex:YS,color_fragment:qS,color_pars_fragment:KS,color_pars_vertex:QS,color_vertex:ZS,common:JS,cube_uv_reflection_fragment:e1,defaultnormal_vertex:t1,displacementmap_pars_vertex:n1,displacementmap_vertex:i1,emissivemap_fragment:r1,emissivemap_pars_fragment:s1,encodings_fragment:o1,encodings_pars_fragment:a1,envmap_fragment:l1,envmap_common_pars_fragment:c1,envmap_pars_fragment:u1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:E1,envmap_vertex:d1,fog_vertex:h1,fog_pars_vertex:p1,fog_fragment:m1,fog_pars_fragment:g1,gradientmap_pars_fragment:v1,lightmap_fragment:x1,lightmap_pars_fragment:_1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:S1,lights_pars_begin:M1,lights_toon_fragment:w1,lights_toon_pars_fragment:T1,lights_phong_fragment:C1,lights_phong_pars_fragment:A1,lights_physical_fragment:R1,lights_physical_pars_fragment:b1,lights_fragment_begin:P1,lights_fragment_maps:L1,lights_fragment_end:D1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:O1,map_fragment:F1,map_pars_fragment:k1,map_particle_fragment:z1,map_particle_pars_fragment:B1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:V1,morphcolor_vertex:H1,morphnormal_vertex:W1,morphtarget_pars_vertex:j1,morphtarget_vertex:X1,normal_fragment_begin:$1,normal_fragment_maps:Y1,normal_pars_fragment:q1,normal_pars_vertex:K1,normal_vertex:Q1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:eM,clearcoat_pars_fragment:tM,iridescence_pars_fragment:nM,output_fragment:iM,packing:rM,premultiplied_alpha_fragment:sM,project_vertex:oM,dithering_fragment:aM,dithering_pars_fragment:lM,roughnessmap_fragment:cM,roughnessmap_pars_fragment:uM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:dM,shadowmap_vertex:hM,shadowmask_pars_fragment:pM,skinbase_vertex:mM,skinning_pars_vertex:gM,skinning_vertex:vM,skinnormal_vertex:xM,specularmap_fragment:_M,specularmap_pars_fragment:yM,tonemapping_fragment:SM,tonemapping_pars_fragment:MM,transmission_fragment:EM,transmission_pars_fragment:wM,uv_pars_fragment:TM,uv_pars_vertex:CM,uv_vertex:AM,worldpos_vertex:RM,background_vert:bM,background_frag:PM,backgroundCube_vert:LM,backgroundCube_frag:DM,cube_vert:IM,cube_frag:NM,depth_vert:UM,depth_frag:OM,distanceRGBA_vert:FM,distanceRGBA_frag:kM,equirect_vert:zM,equirect_frag:BM,linedashed_vert:GM,linedashed_frag:VM,meshbasic_vert:HM,meshbasic_frag:WM,meshlambert_vert:jM,meshlambert_frag:XM,meshmatcap_vert:$M,meshmatcap_frag:YM,meshnormal_vert:qM,meshnormal_frag:KM,meshphong_vert:QM,meshphong_frag:ZM,meshphysical_vert:JM,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:sE,shadow_frag:oE,sprite_vert:aE,sprite_frag:lE},oe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},ni={basic:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Yt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Yt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Yt([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Yt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Yt([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Yt([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Yt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Yt([oe.lights,oe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};ni.physical={uniforms:Yt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Za={r:0,b:0,g:0};function cE(t,e,n,i,r,s,o){const a=new Te(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function _(m,f){let v=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?n:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),v=!0;break}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===uc)?(u===void 0&&(u=new Qt(new da(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:Xs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==De,(d!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Qt(new ha(2,2),new nt({name:"BackgroundMaterial",uniforms:Xs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==De,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Za,d0(t)),i.buffers.color.setClear(Za.r,Za.g,Za.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function uE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(z,V,Z,Q,I){let k=!1;if(o){const B=g(Q,Z,V);c!==B&&(c=B,p(c.object)),k=f(z,Q,Z,I),k&&v(z,Q,Z,I)}else{const B=V.wireframe===!0;(c.geometry!==Q.id||c.program!==Z.id||c.wireframe!==B)&&(c.geometry=Q.id,c.program=Z.id,c.wireframe=B,k=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,P(z,V,Z,Q),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function g(z,V,Z){const Q=Z.wireframe===!0;let I=a[z.id];I===void 0&&(I={},a[z.id]=I);let k=I[V.id];k===void 0&&(k={},I[V.id]=k);let B=k[Q];return B===void 0&&(B=m(h()),k[Q]=B),B}function m(z){const V=[],Z=[],Q=[];for(let I=0;I<r;I++)V[I]=0,Z[I]=0,Q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:Q,object:z,attributes:{},index:null}}function f(z,V,Z,Q){const I=c.attributes,k=V.attributes;let B=0;const se=Z.getAttributes();for(const ie in se)if(se[ie].location>=0){const K=I[ie];let re=k[ie];if(re===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;B++}return c.attributesNum!==B||c.index!==Q}function v(z,V,Z,Q){const I={},k=V.attributes;let B=0;const se=Z.getAttributes();for(const ie in se)if(se[ie].location>=0){let K=k[ie];K===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(K=z.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),I[ie]=re,B++}c.attributes=I,c.attributesNum=B,c.index=Q}function x(){const z=c.newAttributes;for(let V=0,Z=z.length;V<Z;V++)z[V]=0}function M(z){S(z,0)}function S(z,V){const Z=c.newAttributes,Q=c.enabledAttributes,I=c.attributeDivisors;Z[z]=1,Q[z]===0&&(t.enableVertexAttribArray(z),Q[z]=1),I[z]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,V),I[z]=V)}function C(){const z=c.newAttributes,V=c.enabledAttributes;for(let Z=0,Q=V.length;Z<Q;Z++)V[Z]!==z[Z]&&(t.disableVertexAttribArray(Z),V[Z]=0)}function R(z,V,Z,Q,I,k){i.isWebGL2===!0&&(Z===t.INT||Z===t.UNSIGNED_INT)?t.vertexAttribIPointer(z,V,Z,I,k):t.vertexAttribPointer(z,V,Z,Q,I,k)}function P(z,V,Z,Q){if(i.isWebGL2===!1&&(z.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=Q.attributes,k=Z.getAttributes(),B=V.defaultAttributeValues;for(const se in k){const ie=k[se];if(ie.location>=0){let G=I[se];if(G===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(G=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(G=z.instanceColor)),G!==void 0){const K=G.normalized,re=G.itemSize,ae=n.get(G);if(ae===void 0)continue;const D=ae.buffer,Le=ae.type,be=ae.bytesPerElement;if(G.isInterleavedBufferAttribute){const le=G.data,Ce=le.stride,je=G.offset;if(le.isInstancedInterleavedBuffer){for(let ye=0;ye<ie.locationSize;ye++)S(ie.location+ye,le.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<ie.locationSize;ye++)M(ie.location+ye);t.bindBuffer(t.ARRAY_BUFFER,D);for(let ye=0;ye<ie.locationSize;ye++)R(ie.location+ye,re/ie.locationSize,Le,K,Ce*be,(je+re/ie.locationSize*ye)*be)}else{if(G.isInstancedBufferAttribute){for(let le=0;le<ie.locationSize;le++)S(ie.location+le,G.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let le=0;le<ie.locationSize;le++)M(ie.location+le);t.bindBuffer(t.ARRAY_BUFFER,D);for(let le=0;le<ie.locationSize;le++)R(ie.location+le,re/ie.locationSize,Le,K,re*be,re/ie.locationSize*le*be)}}else if(B!==void 0){const K=B[se];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(ie.location,K);break;case 3:t.vertexAttrib3fv(ie.location,K);break;case 4:t.vertexAttrib4fv(ie.location,K);break;default:t.vertexAttrib1fv(ie.location,K)}}}}C()}function y(){$();for(const z in a){const V=a[z];for(const Z in V){const Q=V[Z];for(const I in Q)_(Q[I].object),delete Q[I];delete V[Z]}delete a[z]}}function T(z){if(a[z.id]===void 0)return;const V=a[z.id];for(const Z in V){const Q=V[Z];for(const I in Q)_(Q[I].object),delete Q[I];delete V[Z]}delete a[z.id]}function W(z){for(const V in a){const Z=a[V];if(Z[z.id]===void 0)continue;const Q=Z[z.id];for(const I in Q)_(Q[I].object),delete Q[I];delete Z[z.id]}}function $(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:U,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function fE(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,d),n.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function dE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),S=x&&M,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function hE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,x=v*4;let M=f.clippingState||null;l.value=M,M=u(_,h,x,p);for(let S=0;S!==x;++S)M[S]=n[S];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=p;x!==g;++x,M+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function pE(t){let e=new WeakMap;function n(o,a){return a===Vl?o.mapping=Hs:a===Tf&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Vl||a===Tf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new PS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dc extends h0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,Yp=[.125,.215,.35,.446,.526,.582],Sr=20,xu=new dc,qp=new Te;let _u=null;const yr=(1+Math.sqrt(5))/2,as=1/yr,Kp=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,yr,as),new N(0,yr,-as),new N(as,0,yr),new N(-as,0,yr),new N(yr,as,0),new N(-yr,as,0)];class Qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_u=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:na,format:$n,colorSpace:ai,depthBuffer:!1},r=Zp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(s)),this._blurMaterial=gE(s,e,n)}return r}_compileMaterial(e){const n=new Qt(this._lodPlanes[0],e);this._renderer.compile(n,xu)}_sceneToCubeUV(e,n,i,r){const a=new sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(qp),u.toneMapping=oi,u.autoClear=!1;const p=new ji({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Qt(new da,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(qp),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Ja(r,v*x,f>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kp[(r-1)%Kp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Qt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const f=[];let v=0;for(let R=0;R<Sr;++R){const P=R/g,y=Math.exp(-P*P/2);f.push(y),R===0?v+=y:R<m&&(v+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const M=this._sizeLods[r],S=3*M*(r>x-Ts?r-x+Ts:0),C=4*(this._cubeSize-M);Ja(n,S,C,3*M,2*M),l.setRenderTarget(n),l.render(d,xu)}}function mE(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=Yp[o-t+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,P=C>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(y,g*_*C),x.set(h,m*_*C);const T=[C,C,C,C,C,C];M.set(T,f*_*C)}const S=new Nn;S.setAttribute("position",new Kn(v,g)),S.setAttribute("uv",new Kn(x,m)),S.setAttribute("faceIndex",new Kn(M,f)),e.push(S),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zp(t,e,n){const i=new Mt(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gE(t,e,n){const i=new Float32Array(Sr),r=new N(0,1,0);return new nt({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Jp(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function em(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function vE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vl||l===Tf,u=l===Hs||l===Ws;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Qp(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Qp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _E(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,M=v.length;x<M;x+=3){const S=v[x+0],C=v[x+1],R=v[x+2];h.push(S,C,C,R,R,S)}}else{const v=_.array;g=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const S=x+0,C=x+1,R=x+2;h.push(S,C,C,R,R,S)}}const m=new(r0(h)?f0:u0)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function yE(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function d(h,p,_){if(_===0)return;let g,m;if(r)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,h*l,_),n.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function SE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ME(t,e){return t[0]-e[0]}function EE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function wE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let z=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",z)};g!==void 0&&g.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let P=0;v===!0&&(P=1),x===!0&&(P=2),M===!0&&(P=3);let y=u.attributes.position.count*P,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const W=new Float32Array(y*T*4*_),$=new a0(W,y,T,_);$.type=Ar,$.needsUpdate=!0;const U=P*4;for(let V=0;V<_;V++){const Z=S[V],Q=C[V],I=R[V],k=y*T*4*V;for(let B=0;B<Z.count;B++){const se=B*U;v===!0&&(o.fromBufferAttribute(Z,B),W[k+se+0]=o.x,W[k+se+1]=o.y,W[k+se+2]=o.z,W[k+se+3]=0),x===!0&&(o.fromBufferAttribute(Q,B),W[k+se+4]=o.x,W[k+se+5]=o.y,W[k+se+6]=o.z,W[k+se+7]=0),M===!0&&(o.fromBufferAttribute(I,B),W[k+se+8]=o.x,W[k+se+9]=o.y,W[k+se+10]=o.z,W[k+se+11]=I.itemSize===4?o.w:1)}}g={count:_,texture:$,size:new ge(y,T)},s.set(u,g),u.addEventListener("dispose",z)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];const f=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",f),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==p){_=[];for(let x=0;x<p;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<p;x++){const M=_[x];M[0]=x,M[1]=h[x]}_.sort(EE);for(let x=0;x<8;x++)x<p&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ME);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const M=a[x],S=M[0],C=M[1];S!==Number.MAX_SAFE_INTEGER&&C?(g&&u.getAttribute("morphTarget"+x)!==g[S]&&u.setAttribute("morphTarget"+x,g[S]),m&&u.getAttribute("morphNormal"+x)!==m[S]&&u.setAttribute("morphNormal"+x,m[S]),r[x]=C,f+=C):(g&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const v=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function TE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const g0=new fn,v0=new a0,x0=new pS,_0=new p0,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),sm=new Float32Array(4);function no(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tm[r];if(s===void 0&&(s=new Float32Array(r),tm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=nm[e];n===void 0&&(n=new Int32Array(e),nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;sm.set(i),t.uniformMatrix2fv(this.addr,!1,sm),Tt(n,i)}}function LE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;rm.set(i),t.uniformMatrix3fv(this.addr,!1,rm),Tt(n,i)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;im.set(i),t.uniformMatrix4fv(this.addr,!1,im),Tt(n,i)}}function IE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||g0,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x0,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_0,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||v0,r)}function jE(t){switch(t){case 5126:return CE;case 35664:return AE;case 35665:return RE;case 35666:return bE;case 35674:return PE;case 35675:return LE;case 35676:return DE;case 5124:case 35670:return IE;case 35667:case 35671:return NE;case 35668:case 35672:return UE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return kE;case 36295:return zE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return WE}}function XE(t,e){t.uniform1fv(this.addr,e)}function $E(t,e){const n=no(e,this.size,2);t.uniform2fv(this.addr,n)}function YE(t,e){const n=no(e,this.size,3);t.uniform3fv(this.addr,n)}function qE(t,e){const n=no(e,this.size,4);t.uniform4fv(this.addr,n)}function KE(t,e){const n=no(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QE(t,e){const n=no(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZE(t,e){const n=no(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JE(t,e){t.uniform1iv(this.addr,e)}function ew(t,e){t.uniform2iv(this.addr,e)}function tw(t,e){t.uniform3iv(this.addr,e)}function nw(t,e){t.uniform4iv(this.addr,e)}function iw(t,e){t.uniform1uiv(this.addr,e)}function rw(t,e){t.uniform2uiv(this.addr,e)}function sw(t,e){t.uniform3uiv(this.addr,e)}function ow(t,e){t.uniform4uiv(this.addr,e)}function aw(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||g0,s[o])}function lw(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||x0,s[o])}function cw(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||_0,s[o])}function uw(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||v0,s[o])}function fw(t){switch(t){case 5126:return XE;case 35664:return $E;case 35665:return YE;case 35666:return qE;case 35674:return KE;case 35675:return QE;case 35676:return ZE;case 5124:case 35670:return JE;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}class dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jE(n.type)}}class hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=fw(n.type)}}class pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function om(t,e){t.seq.push(e),t.map[e.id]=e}function mw(t,e,n){const i=t.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),o=yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){om(n,c===void 0?new dw(a,t,e):new hw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new pw(a),om(n,d)),n=d}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);mw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let gw=0;function vw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function xw(t){switch(t){case ai:return["Linear","( value )"];case De:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function lm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+vw(t.getShaderSource(e),o)}else return r}function _w(t,e){const n=xw(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function yw(t,e){let n;switch(e){case Oy:n="Linear";break;case e0:n="Reinhard";break;case Fy:n="OptimizedCineon";break;case ky:n="ACESFilmic";break;case zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Sw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Eo).join(`
`)}function Mw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ew(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Eo(t){return t!==""}function cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(t){return t.replace(ww,Tw)}function Tw(t,e){const n=Ne[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Rf(n)}const Cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(t){return t.replace(Cw,Aw)}function Aw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function bw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hs:case Ws:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Lw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ny:e="ENVMAP_BLENDING_MIX";break;case Uy:e="ENVMAP_BLENDING_ADD";break}return e}function Dw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Iw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Rw(n),c=bw(n),u=Pw(n),d=Lw(n),h=Dw(n),p=n.isWebGL2?"":Sw(n),_=Mw(s),g=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(Eo).join(`
`),m.length>0&&(m+=`
`),f=[p,_].filter(Eo).join(`
`),f.length>0&&(f+=`
`)):(m=[dm(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),f=[p,dm(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==oi?yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,_w("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eo).join(`
`)),o=Rf(o),o=cm(o,n),o=um(o,n),a=Rf(a),a=cm(a,n),a=um(a,n),o=fm(o),a=fm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+o,M=v+f+a,S=am(r,r.VERTEX_SHADER,x),C=am(r,r.FRAGMENT_SHADER,M);if(r.attachShader(g,S),r.attachShader(g,C),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),t.debug.checkShaderErrors){const y=r.getProgramInfoLog(g).trim(),T=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(C).trim();let $=!0,U=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,S,C);else{const z=lm(r,S,"vertex"),V=lm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+z+`
`+V)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(T===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:$,programLog:y,vertexShader:{log:T,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(S),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new pl(r,g)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=Ew(r,g)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}let Nw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ow(e),n.set(e,i)),i}}class Ow{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Fw(t,e,n,i,r,s,o){const a=new l0,l=new Uw,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function m(y,T,W,$,U){const z=$.fog,V=U.geometry,Z=y.isMeshStandardMaterial?$.environment:null,Q=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),I=Q&&Q.mapping===uc?Q.image.height:null,k=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const B=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=B!==void 0?B.length:0;let ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let G,K,re,ae;if(k){const Ke=ni[k];G=Ke.vertexShader,K=Ke.fragmentShader}else G=y.vertexShader,K=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const D=t.getRenderTarget(),Le=U.isInstancedMesh===!0,be=!!y.map,le=!!y.matcap,Ce=!!Q,je=!!y.aoMap,ye=!!y.lightMap,Fe=!!y.bumpMap,Ct=!!y.normalMap,Nt=!!y.displacementMap,At=!!y.emissiveMap,xt=!!y.metalnessMap,Xe=!!y.roughnessMap,lt=y.clearcoat>0,nn=y.iridescence>0,A=y.sheen>0,E=y.transmission>0,H=lt&&!!y.clearcoatMap,te=lt&&!!y.clearcoatNormalMap,ne=lt&&!!y.clearcoatRoughnessMap,ce=nn&&!!y.iridescenceMap,Ae=nn&&!!y.iridescenceThicknessMap,me=A&&!!y.sheenColorMap,Y=A&&!!y.sheenRoughnessMap,xe=!!y.specularMap,Se=!!y.specularColorMap,Ee=!!y.specularIntensityMap,pe=E&&!!y.transmissionMap,_e=E&&!!y.thicknessMap,Ve=!!y.gradientMap,Ye=!!y.alphaMap,ft=y.alphaTest>0,L=!!y.extensions,j=!!V.attributes.uv1,J=!!V.attributes.uv2,ue=!!V.attributes.uv3;return{isWebGL2:u,shaderID:k,shaderName:y.type,vertexShader:G,fragmentShader:K,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Le,instancingColor:Le&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:D===null?t.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ai,map:be,matcap:le,envMap:Ce,envMapMode:Ce&&Q.mapping,envMapCubeUVHeight:I,aoMap:je,lightMap:ye,bumpMap:Fe,normalMap:Ct,displacementMap:h&&Nt,emissiveMap:At,normalMapObjectSpace:Ct&&y.normalMapType===iS,normalMapTangentSpace:Ct&&y.normalMapType===eo,metalnessMap:xt,roughnessMap:Xe,clearcoat:lt,clearcoatMap:H,clearcoatNormalMap:te,clearcoatRoughnessMap:ne,iridescence:nn,iridescenceMap:ce,iridescenceThicknessMap:Ae,sheen:A,sheenColorMap:me,sheenRoughnessMap:Y,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ee,transmission:E,transmissionMap:pe,thicknessMap:_e,gradientMap:Ve,opaque:y.transparent===!1&&y.blending===Is,alphaMap:Ye,alphaTest:ft,combine:y.combine,mapUv:be&&g(y.map.channel),aoMapUv:je&&g(y.aoMap.channel),lightMapUv:ye&&g(y.lightMap.channel),bumpMapUv:Fe&&g(y.bumpMap.channel),normalMapUv:Ct&&g(y.normalMap.channel),displacementMapUv:Nt&&g(y.displacementMap.channel),emissiveMapUv:At&&g(y.emissiveMap.channel),metalnessMapUv:xt&&g(y.metalnessMap.channel),roughnessMapUv:Xe&&g(y.roughnessMap.channel),clearcoatMapUv:H&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(y.sheenRoughnessMap.channel),specularMapUv:xe&&g(y.specularMap.channel),specularColorMapUv:Se&&g(y.specularColorMap.channel),specularIntensityMapUv:Ee&&g(y.specularIntensityMap.channel),transmissionMapUv:pe&&g(y.transmissionMap.channel),thicknessMapUv:_e&&g(y.thicknessMap.channel),alphaMapUv:Ye&&g(y.alphaMap.channel),vertexTangents:Ct&&!!V.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:J,vertexUv3s:ue,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(be||Ye),fog:!!z,useFog:y.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:oi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:L&&y.extensions.derivatives===!0,extensionFragDepth:L&&y.extensions.fragDepth===!0,extensionDrawBuffers:L&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)T.push(W),T.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(v(T,y),x(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),y.push(a.mask)}function M(y){const T=_[y.type];let W;if(T){const $=ni[T];W=on.clone($.uniforms)}else W=y.uniforms;return W}function S(y,T){let W;for(let $=0,U=c.length;$<U;$++){const z=c[$];if(z.cacheKey===T){W=z,++W.usedTimes;break}}return W===void 0&&(W=new Iw(t,T,y,s),c.push(W)),W}function C(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:S,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:P}}function kw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,g,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||zw),i.length>1&&i.sort(h||hm),r.length>1&&r.sort(h||hm)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Bw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new pm,t.set(i,[o])):r>=s.length?(o=new pm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Te};break;case"SpotLight":n={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":n={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function Vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hw=0;function Ww(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jw(t,e){const n=new Gw,i=Vw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,o=new ut,a=new ut;function l(u,d){let h=0,p=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let g=0,m=0,f=0,v=0,x=0,M=0,S=0,C=0,R=0,P=0;u.sort(Ww);const y=d===!0?Math.PI:1;for(let W=0,$=u.length;W<$;W++){const U=u[W],z=U.color,V=U.intensity,Z=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*V*y,p+=z.g*V*y,_+=z.b*V*y;else if(U.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(U.sh.coefficients[I],V);else if(U.isDirectionalLight){const I=n.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity*y),U.castShadow){const k=U.shadow,B=i.get(U);B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,r.directionalShadow[g]=B,r.directionalShadowMap[g]=Q,r.directionalShadowMatrix[g]=U.shadow.matrix,M++}r.directional[g]=I,g++}else if(U.isSpotLight){const I=n.get(U);I.position.setFromMatrixPosition(U.matrixWorld),I.color.copy(z).multiplyScalar(V*y),I.distance=Z,I.coneCos=Math.cos(U.angle),I.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),I.decay=U.decay,r.spot[f]=I;const k=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,k.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[f]=k.matrix,U.castShadow){const B=i.get(U);B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,r.spotShadow[f]=B,r.spotShadowMap[f]=Q,C++}f++}else if(U.isRectAreaLight){const I=n.get(U);I.color.copy(z).multiplyScalar(V),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=I,v++}else if(U.isPointLight){const I=n.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity*y),I.distance=U.distance,I.decay=U.decay,U.castShadow){const k=U.shadow,B=i.get(U);B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=U.shadow.matrix,S++}r.point[m]=I,m++}else if(U.isHemisphereLight){const I=n.get(U);I.skyColor.copy(U.color).multiplyScalar(V*y),I.groundColor.copy(U.groundColor).multiplyScalar(V*y),r.hemi[x]=I,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==v||T.hemiLength!==x||T.numDirectionalShadows!==M||T.numPointShadows!==S||T.numSpotShadows!==C||T.numSpotMaps!==R)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+R-P,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=P,T.directionalLength=g,T.pointLength=m,T.spotLength=f,T.rectAreaLength=v,T.hemiLength=x,T.numDirectionalShadows=M,T.numPointShadows=S,T.numSpotShadows=C,T.numSpotMaps=R,r.version=Hw++)}function c(u,d){let h=0,p=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const M=u[v];if(M.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(M.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function mm(t,e){const n=new jw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Xw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new mm(t,e),n.set(s,[l])):o>=a.length?(l=new mm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Ai extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $s extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yw=`uniform sampler2D shadow_pass;
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
}`;function qw(t,e,n){let i=new Id;const r=new ge,s=new ge,o=new tt,a=new Ai({depthPacking:Js}),l=new $s,c={},u=n.maxTextureSize,d={[rr]:Jt,[Jt]:rr,[Rn]:Rn},h=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:$w,fragmentShader:Yw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Nn;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Qt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let f=this.type;this.render=function(S,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const P=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Pt),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const $=f!==mi&&this.type===mi,U=f===mi&&this.type!==mi;for(let z=0,V=S.length;z<V;z++){const Z=S[z],Q=Z.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const I=Q.getFrameExtents();if(r.multiply(I),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/I.x),r.x=s.x*I.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/I.y),r.y=s.y*I.y,Q.mapSize.y=s.y)),Q.map===null||$===!0||U===!0){const B=this.type!==mi?{minFilter:yt,magFilter:yt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Mt(r.x,r.y,B),Q.map.texture.name=Z.name+".shadowMap",Q.camera.updateProjectionMatrix()}t.setRenderTarget(Q.map),t.clear();const k=Q.getViewportCount();for(let B=0;B<k;B++){const se=Q.getViewport(B);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),W.viewport(o),Q.updateMatrices(Z,B),i=Q.getFrustum(),M(C,R,Q.camera,Z,this.type)}Q.isPointLightShadow!==!0&&this.type===mi&&v(Q,R),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(P,y,T)};function v(S,C){const R=e.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Mt(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(C,null,R,h,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(C,null,R,p,g,null)}function x(S,C,R,P){let y=null;const T=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=y.uuid,$=C.uuid;let U=c[W];U===void 0&&(U={},c[W]=U);let z=U[$];z===void 0&&(z=y.clone(),U[$]=z),y=z}if(y.visible=C.visible,y.wireframe=C.wireframe,P===mi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=t.properties.get(y);W.light=R}return y}function M(S,C,R,P,y){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===mi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const $=e.update(S),U=S.material;if(Array.isArray(U)){const z=$.groups;for(let V=0,Z=z.length;V<Z;V++){const Q=z[V],I=U[Q.materialIndex];if(I&&I.visible){const k=x(S,I,P,y);t.renderBufferDirect(R,null,$,k,S,Q)}}}else if(U.visible){const z=x(S,U,P,y);t.renderBufferDirect(R,null,$,z,S,null)}}const W=S.children;for(let $=0,U=W.length;$<U;$++)M(W[$],C,R,P,y)}}function Kw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const j=new tt;let J=null;const ue=new tt(0,0,0,0);return{setMask:function(ve){J!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ke,Qe,kt,Pi){Pi===!0&&(ve*=kt,Ke*=kt,Qe*=kt),j.set(ve,Ke,Qe,kt),ue.equals(j)===!1&&(t.clearColor(ve,Ke,Qe,kt),ue.copy(j))},reset:function(){L=!1,J=null,ue.set(-1,0,0,0)}}}function s(){let L=!1,j=null,J=null,ue=null;return{setTest:function(ve){ve?D(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(ve){j!==ve&&!L&&(t.depthMask(ve),j=ve)},setFunc:function(ve){if(J!==ve){switch(ve){case Ay:t.depthFunc(t.NEVER);break;case Ry:t.depthFunc(t.ALWAYS);break;case by:t.depthFunc(t.LESS);break;case wf:t.depthFunc(t.LEQUAL);break;case Py:t.depthFunc(t.EQUAL);break;case Ly:t.depthFunc(t.GEQUAL);break;case Dy:t.depthFunc(t.GREATER);break;case Iy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=ve}},setLocked:function(ve){L=ve},setClear:function(ve){ue!==ve&&(t.clearDepth(ve),ue=ve)},reset:function(){L=!1,j=null,J=null,ue=null}}}function o(){let L=!1,j=null,J=null,ue=null,ve=null,Ke=null,Qe=null,kt=null,Pi=null;return{setTest:function(dt){L||(dt?D(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(dt){j!==dt&&!L&&(t.stencilMask(dt),j=dt)},setFunc:function(dt,Mn,Zn){(J!==dt||ue!==Mn||ve!==Zn)&&(t.stencilFunc(dt,Mn,Zn),J=dt,ue=Mn,ve=Zn)},setOp:function(dt,Mn,Zn){(Ke!==dt||Qe!==Mn||kt!==Zn)&&(t.stencilOp(dt,Mn,Zn),Ke=dt,Qe=Mn,kt=Zn)},setLocked:function(dt){L=dt},setClear:function(dt){Pi!==dt&&(t.clearStencil(dt),Pi=dt)},reset:function(){L=!1,j=null,J=null,ue=null,ve=null,Ke=null,Qe=null,kt=null,Pi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,M=null,S=null,C=null,R=null,P=null,y=!1,T=null,W=null,$=null,U=null,z=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Q=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=Q>=1):I.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=Q>=2);let k=null,B={};const se=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),G=new tt().fromArray(se),K=new tt().fromArray(ie);function re(L,j,J,ue){const ve=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(L,Ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<J;Qe++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(j,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(j+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Ke}const ae={};ae[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),D(t.DEPTH_TEST),l.setFunc(wf),Nt(!1),At(tp),D(t.CULL_FACE),Fe(Pt);function D(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Le(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function be(L,j){return p[L]!==j?(t.bindFramebuffer(L,j),p[L]=j,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=j),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=j)),!0):!1}function le(L,j){let J=g,ue=!1;if(L)if(J=_.get(j),J===void 0&&(J=[],_.set(j,J)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(J.length!==ve.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Qe=ve.length;Ke<Qe;Ke++)J[Ke]=t.COLOR_ATTACHMENT0+Ke;J.length=ve.length,ue=!0}}else J[0]!==t.COLOR_ATTACHMENT0&&(J[0]=t.COLOR_ATTACHMENT0,ue=!0);else J[0]!==t.BACK&&(J[0]=t.BACK,ue=!0);ue&&(n.isWebGL2?t.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ce(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const je={[_i]:t.FUNC_ADD,[_y]:t.FUNC_SUBTRACT,[yy]:t.FUNC_REVERSE_SUBTRACT};if(i)je[rp]=t.MIN,je[sp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(je[rp]=L.MIN_EXT,je[sp]=L.MAX_EXT)}const ye={[Ef]:t.ZERO,[Sy]:t.ONE,[My]:t.SRC_COLOR,[bd]:t.SRC_ALPHA,[Cy]:t.SRC_ALPHA_SATURATE,[Jv]:t.DST_COLOR,[Zv]:t.DST_ALPHA,[Ey]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[Ty]:t.ONE_MINUS_DST_COLOR,[wy]:t.ONE_MINUS_DST_ALPHA};function Fe(L,j,J,ue,ve,Ke,Qe,kt){if(L===Pt){f===!0&&(Le(t.BLEND),f=!1);return}if(f===!1&&(D(t.BLEND),f=!0),L!==ea){if(L!==v||kt!==y){if((x!==_i||C!==_i)&&(t.blendEquation(t.FUNC_ADD),x=_i,C=_i),kt)switch(L){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mf:t.blendFunc(t.ONE,t.ONE);break;case np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,S=null,R=null,P=null,v=L,y=kt}return}ve=ve||j,Ke=Ke||J,Qe=Qe||ue,(j!==x||ve!==C)&&(t.blendEquationSeparate(je[j],je[ve]),x=j,C=ve),(J!==M||ue!==S||Ke!==R||Qe!==P)&&(t.blendFuncSeparate(ye[J],ye[ue],ye[Ke],ye[Qe]),M=J,S=ue,R=Ke,P=Qe),v=L,y=!1}function Ct(L,j){L.side===Rn?Le(t.CULL_FACE):D(t.CULL_FACE);let J=L.side===Jt;j&&(J=!J),Nt(J),L.blending===Is&&L.transparent===!1?Fe(Pt):Fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ue=L.stencilWrite;c.setTest(ue),ue&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?D(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){T!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),T=L)}function At(L){L!==vy?(D(t.CULL_FACE),L!==W&&(L===tp?t.cullFace(t.BACK):L===xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),W=L}function xt(L){L!==$&&(Z&&t.lineWidth(L),$=L)}function Xe(L,j,J){L?(D(t.POLYGON_OFFSET_FILL),(U!==j||z!==J)&&(t.polygonOffset(j,J),U=j,z=J)):Le(t.POLYGON_OFFSET_FILL)}function lt(L){L?D(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function nn(L){L===void 0&&(L=t.TEXTURE0+V-1),k!==L&&(t.activeTexture(L),k=L)}function A(L,j,J){J===void 0&&(k===null?J=t.TEXTURE0+V-1:J=k);let ue=B[J];ue===void 0&&(ue={type:void 0,texture:void 0},B[J]=ue),(ue.type!==L||ue.texture!==j)&&(k!==J&&(t.activeTexture(J),k=J),t.bindTexture(L,j||ae[L]),ue.type=L,ue.texture=j)}function E(){const L=B[k];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){G.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),G.copy(L))}function _e(L){K.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Ve(L,j){let J=d.get(j);J===void 0&&(J=new WeakMap,d.set(j,J));let ue=J.get(L);ue===void 0&&(ue=t.getUniformBlockIndex(j,L.name),J.set(L,ue))}function Ye(L,j){const ue=d.get(j).get(L);u.get(j)!==ue&&(t.uniformBlockBinding(j,ue,L.__bindingPointIndex),u.set(j,ue))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},k=null,B={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,M=null,S=null,C=null,R=null,P=null,y=!1,T=null,W=null,$=null,U=null,z=null,G.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:D,disable:Le,bindFramebuffer:be,drawBuffers:le,useProgram:Ce,setBlending:Fe,setMaterial:Ct,setFlipSided:Nt,setCullFace:At,setLineWidth:xt,setPolygonOffset:Xe,setScissorTest:lt,activeTexture:nn,bindTexture:A,unbindTexture:E,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:Se,texImage3D:Ee,updateUBOMapping:Ve,uniformBlockBinding:Ye,texStorage2D:Y,texStorage3D:xe,texSubImage2D:ne,texSubImage3D:ce,compressedTexSubImage2D:Ae,compressedTexSubImage3D:me,scissor:pe,viewport:_e,reset:ft}}function Qw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,E){return f?new OffscreenCanvas(A,E):ia("canvas")}function x(A,E,H,te){let ne=1;if((A.width>te||A.height>te)&&(ne=te/Math.max(A.width,A.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=E?oS:Math.floor,Ae=ce(ne*A.width),me=ce(ne*A.height);g===void 0&&(g=v(Ae,me));const Y=H?v(Ae,me):g;return Y.width=Ae,Y.height=me,Y.getContext("2d").drawImage(A,0,0,Ae,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ae+"x"+me+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return Dp(A.width)&&Dp(A.height)}function S(A){return a?!1:A.wrapS!==Xn||A.wrapT!==Xn||A.minFilter!==yt&&A.minFilter!==An}function C(A,E){return A.generateMipmaps&&E&&A.minFilter!==yt&&A.minFilter!==An}function R(A){t.generateMipmap(A)}function P(A,E,H,te,ne=!1){if(a===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=E;return E===t.RED&&(H===t.FLOAT&&(ce=t.R32F),H===t.HALF_FLOAT&&(ce=t.R16F),H===t.UNSIGNED_BYTE&&(ce=t.R8)),E===t.RG&&(H===t.FLOAT&&(ce=t.RG32F),H===t.HALF_FLOAT&&(ce=t.RG16F),H===t.UNSIGNED_BYTE&&(ce=t.RG8)),E===t.RGBA&&(H===t.FLOAT&&(ce=t.RGBA32F),H===t.HALF_FLOAT&&(ce=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ce=te===De&&ne===!1?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)),(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(A,E,H){return C(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==yt&&A.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){return A===yt||A===op||A===Xc?t.NEAREST:t.LINEAR}function W(A){const E=A.target;E.removeEventListener("dispose",W),U(E),E.isVideoTexture&&_.delete(E)}function $(A){const E=A.target;E.removeEventListener("dispose",$),V(E)}function U(A){const E=i.get(A);if(E.__webglInit===void 0)return;const H=A.source,te=m.get(H);if(te){const ne=te[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(A),Object.keys(te).length===0&&m.delete(H)}i.remove(A)}function z(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const H=A.source,te=m.get(H);delete te[E.__cacheKey],o.memory.textures--}function V(A){const E=A.texture,H=i.get(A),te=i.get(E);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)t.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ce=E.length;ne<ce;ne++){const Ae=i.get(E[ne]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(E[ne])}i.remove(E),i.remove(A)}let Z=0;function Q(){Z=0}function I(){const A=Z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Z+=1,A}function k(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function B(A,E){const H=i.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(H,A,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function se(A,E){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Le(H,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function ie(A,E){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Le(H,A,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function G(A,E){const H=i.get(A);if(A.version>0&&H.__version!==A.version){be(H,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const K={[Gr]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Cf]:t.MIRRORED_REPEAT},re={[yt]:t.NEAREST,[op]:t.NEAREST_MIPMAP_NEAREST,[Xc]:t.NEAREST_MIPMAP_LINEAR,[An]:t.LINEAR,[By]:t.LINEAR_MIPMAP_NEAREST,[ta]:t.LINEAR_MIPMAP_LINEAR};function ae(A,E,H){if(H?(t.texParameteri(A,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,re[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,re[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==yt&&E.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===yt||E.minFilter!==Xc&&E.minFilter!==ta||E.type===Ar&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===na&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function D(A,E){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",W));const te=E.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const ce=k(E);if(ce!==A.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[ce].usedTimes++;const Ae=ne[A.__cacheKey];Ae!==void 0&&(ne[A.__cacheKey].usedTimes--,Ae.usedTimes===0&&z(E)),A.__cacheKey=ce,A.__webglTexture=ne[ce].texture}return H}function Le(A,E,H){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const ne=D(A,E),ce=E.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+H);const Ae=i.get(ce);if(ce.version!==Ae.__version||ne===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const me=S(E)&&M(E.image)===!1;let Y=x(E.image,me,!1,u);Y=nn(E,Y);const xe=M(Y)||a,Se=s.convert(E.format,E.colorSpace);let Ee=s.convert(E.type),pe=P(E.internalFormat,Se,Ee,E.colorSpace);ae(te,E,xe);let _e;const Ve=E.mipmaps,Ye=a&&E.isVideoTexture!==!0,ft=Ae.__version===void 0||ne===!0,L=y(E,Y,xe);if(E.isDepthTexture)pe=t.DEPTH_COMPONENT,a?E.type===Ar?pe=t.DEPTH_COMPONENT32F:E.type===Cr?pe=t.DEPTH_COMPONENT24:E.type===Ns?pe=t.DEPTH24_STENCIL8:pe=t.DEPTH_COMPONENT16:E.type===Ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Lr&&pe===t.DEPTH_COMPONENT&&E.type!==Ld&&E.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Cr,Ee=s.convert(E.type)),E.format===js&&pe===t.DEPTH_COMPONENT&&(pe=t.DEPTH_STENCIL,E.type!==Ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ns,Ee=s.convert(E.type))),ft&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,pe,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,pe,Y.width,Y.height,0,Se,Ee,null));else if(E.isDataTexture)if(Ve.length>0&&xe){Ye&&ft&&n.texStorage2D(t.TEXTURE_2D,L,pe,Ve[0].width,Ve[0].height);for(let j=0,J=Ve.length;j<J;j++)_e=Ve[j],Ye?n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,Se,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,j,pe,_e.width,_e.height,0,Se,Ee,_e.data);E.generateMipmaps=!1}else Ye?(ft&&n.texStorage2D(t.TEXTURE_2D,L,pe,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Se,Ee,Y.data)):n.texImage2D(t.TEXTURE_2D,0,pe,Y.width,Y.height,0,Se,Ee,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,pe,Ve[0].width,Ve[0].height,Y.depth);for(let j=0,J=Ve.length;j<J;j++)_e=Ve[j],E.format!==$n?Se!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,Y.depth,Se,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,pe,_e.width,_e.height,Y.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,Y.depth,Se,Ee,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,pe,_e.width,_e.height,Y.depth,0,Se,Ee,_e.data)}else{Ye&&ft&&n.texStorage2D(t.TEXTURE_2D,L,pe,Ve[0].width,Ve[0].height);for(let j=0,J=Ve.length;j<J;j++)_e=Ve[j],E.format!==$n?Se!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,Se,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,j,pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,Se,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,j,pe,_e.width,_e.height,0,Se,Ee,_e.data)}else if(E.isDataArrayTexture)Ye?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,pe,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Se,Ee,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,Y.width,Y.height,Y.depth,0,Se,Ee,Y.data);else if(E.isData3DTexture)Ye?(ft&&n.texStorage3D(t.TEXTURE_3D,L,pe,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Se,Ee,Y.data)):n.texImage3D(t.TEXTURE_3D,0,pe,Y.width,Y.height,Y.depth,0,Se,Ee,Y.data);else if(E.isFramebufferTexture){if(ft)if(Ye)n.texStorage2D(t.TEXTURE_2D,L,pe,Y.width,Y.height);else{let j=Y.width,J=Y.height;for(let ue=0;ue<L;ue++)n.texImage2D(t.TEXTURE_2D,ue,pe,j,J,0,Se,Ee,null),j>>=1,J>>=1}}else if(Ve.length>0&&xe){Ye&&ft&&n.texStorage2D(t.TEXTURE_2D,L,pe,Ve[0].width,Ve[0].height);for(let j=0,J=Ve.length;j<J;j++)_e=Ve[j],Ye?n.texSubImage2D(t.TEXTURE_2D,j,0,0,Se,Ee,_e):n.texImage2D(t.TEXTURE_2D,j,pe,Se,Ee,_e);E.generateMipmaps=!1}else Ye?(ft&&n.texStorage2D(t.TEXTURE_2D,L,pe,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ee,Y)):n.texImage2D(t.TEXTURE_2D,0,pe,Se,Ee,Y);C(E,xe)&&R(te),Ae.__version=ce.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function be(A,E,H){if(E.image.length!==6)return;const te=D(A,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const ce=i.get(ne);if(ne.version!==ce.__version||te===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,me=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let j=0;j<6;j++)!Ae&&!me?Y[j]=x(E.image[j],!1,!0,c):Y[j]=me?E.image[j].image:E.image[j],Y[j]=nn(E,Y[j]);const xe=Y[0],Se=M(xe)||a,Ee=s.convert(E.format,E.colorSpace),pe=s.convert(E.type),_e=P(E.internalFormat,Ee,pe,E.colorSpace),Ve=a&&E.isVideoTexture!==!0,Ye=ce.__version===void 0||te===!0;let ft=y(E,xe,Se);ae(t.TEXTURE_CUBE_MAP,E,Se);let L;if(Ae){Ve&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,_e,xe.width,xe.height);for(let j=0;j<6;j++){L=Y[j].mipmaps;for(let J=0;J<L.length;J++){const ue=L[J];E.format!==$n?Ee!==null?Ve?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,0,0,ue.width,ue.height,Ee,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,0,0,ue.width,ue.height,Ee,pe,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,_e,ue.width,ue.height,0,Ee,pe,ue.data)}}}else{L=E.mipmaps,Ve&&Ye&&(L.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,_e,Y[0].width,Y[0].height));for(let j=0;j<6;j++)if(me){Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Y[j].width,Y[j].height,Ee,pe,Y[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,_e,Y[j].width,Y[j].height,0,Ee,pe,Y[j].data);for(let J=0;J<L.length;J++){const ve=L[J].image[j].image;Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,0,0,ve.width,ve.height,Ee,pe,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,_e,ve.width,ve.height,0,Ee,pe,ve.data)}}else{Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,pe,Y[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,_e,Ee,pe,Y[j]);for(let J=0;J<L.length;J++){const ue=L[J];Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,0,0,Ee,pe,ue.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,_e,Ee,pe,ue.image[j])}}}C(E,Se)&&R(t.TEXTURE_CUBE_MAP),ce.__version=ne.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function le(A,E,H,te,ne){const ce=s.convert(H.format,H.colorSpace),Ae=s.convert(H.type),me=P(H.internalFormat,ce,Ae,H.colorSpace);i.get(E).__hasExternalTextures||(ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,me,E.width,E.height,E.depth,0,ce,Ae,null):n.texImage2D(ne,0,me,E.width,E.height,0,ce,Ae,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),Xe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ne,i.get(H).__webglTexture,0,xt(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ne,i.get(H).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(A,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let te=t.DEPTH_COMPONENT16;if(H||Xe(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ar?te=t.DEPTH_COMPONENT32F:ne.type===Cr&&(te=t.DEPTH_COMPONENT24));const ce=xt(E);Xe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,te,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,te,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const te=xt(E);H&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):Xe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<te.length;ne++){const ce=te[ne],Ae=s.convert(ce.format,ce.colorSpace),me=s.convert(ce.type),Y=P(ce.internalFormat,Ae,me,ce.colorSpace),xe=xt(E);H&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,Y,E.width,E.height):Xe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function je(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,ne=xt(E);if(E.depthTexture.format===Lr)Xe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(E.depthTexture.format===js)Xe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(A){const E=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");je(E.__webglFramebuffer,A)}else if(H){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=t.createRenderbuffer(),Ce(E.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Ce(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(A,E,H){const te=i.get(A);E!==void 0&&le(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),H!==void 0&&ye(A)}function Ct(A){const E=A.texture,H=i.get(A),te=i.get(E);A.addEventListener("dispose",$),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,Ae=M(A)||a;if(ne){H.__webglFramebuffer=[];for(let me=0;me<6;me++)H.__webglFramebuffer[me]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const me=A.texture;for(let Y=0,xe=me.length;Y<xe;Y++){const Se=i.get(me[Y]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Xe(A)===!1){const me=ce?E:[E];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Y=0;Y<me.length;Y++){const xe=me[Y];H.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Y]);const Se=s.convert(xe.format,xe.colorSpace),Ee=s.convert(xe.type),pe=P(xe.internalFormat,Se,Ee,xe.colorSpace,A.isXRRenderTarget===!0),_e=xt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,pe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,H.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ae(t.TEXTURE_CUBE_MAP,E,Ae);for(let me=0;me<6;me++)le(H.__webglFramebuffer[me],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me);C(E,Ae)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const me=A.texture;for(let Y=0,xe=me.length;Y<xe;Y++){const Se=me[Y],Ee=i.get(Se);n.bindTexture(t.TEXTURE_2D,Ee.__webglTexture),ae(t.TEXTURE_2D,Se,Ae),le(H.__webglFramebuffer,A,Se,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),C(Se,Ae)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?me=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,te.__webglTexture),ae(me,E,Ae),le(H.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,me),C(E,Ae)&&R(me),n.unbindTexture()}A.depthBuffer&&ye(A)}function Nt(A){const E=M(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ne=H.length;te<ne;te++){const ce=H[te];if(C(ce,E)){const Ae=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(ce).__webglTexture;n.bindTexture(Ae,me),R(Ae),n.unbindTexture()}}}function At(A){if(a&&A.samples>0&&Xe(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,te=A.height;let ne=t.COLOR_BUFFER_BIT;const ce=[],Ae=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let xe=0;xe<E.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){ce.push(t.COLOR_ATTACHMENT0+xe),A.depthBuffer&&ce.push(Ae);const Se=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Se===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]),Se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ae])),Y){const Ee=i.get(E[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,ne,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let xe=0;xe<E.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const Se=i.get(E[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function xt(A){return Math.min(d,A.samples)}function Xe(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(A){const E=o.render.frame;_.get(A)!==E&&(_.set(A,E),A.update())}function nn(A,E){const H=A.colorSpace,te=A.format,ne=A.type;return A.isCompressedTexture===!0||A.format===Af||H!==ai&&H!==Ir&&(H===De?a===!1?e.has("EXT_sRGB")===!0&&te===$n?(A.format=Af,A.minFilter=An,A.generateMipmaps=!1):E=s0.sRGBToLinear(E):(te!==$n||ne!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=se,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Xe}function Zw(t,e,n){const i=n.isWebGL2;function r(s,o=Ir){let a;if(s===Vr)return t.UNSIGNED_BYTE;if(s===Wy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===jy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Gy)return t.BYTE;if(s===Vy)return t.SHORT;if(s===Ld)return t.UNSIGNED_SHORT;if(s===Hy)return t.INT;if(s===Cr)return t.UNSIGNED_INT;if(s===Ar)return t.FLOAT;if(s===na)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xy)return t.ALPHA;if(s===$n)return t.RGBA;if(s===$y)return t.LUMINANCE;if(s===Yy)return t.LUMINANCE_ALPHA;if(s===Lr)return t.DEPTH_COMPONENT;if(s===js)return t.DEPTH_STENCIL;if(s===Af)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===qy)return t.RED;if(s===Ky)return t.RED_INTEGER;if(s===Qy)return t.RG;if(s===Zy)return t.RG_INTEGER;if(s===Jy)return t.RGBA_INTEGER;if(s===$c||s===Yc||s===qc||s===Kc)if(o===De)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ap||s===lp||s===cp||s===up)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===up)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===eS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fp||s===dp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===fp)return o===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===dp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hp||s===pp||s===mp||s===gp||s===vp||s===xp||s===_p||s===yp||s===Sp||s===Mp||s===Ep||s===wp||s===Tp||s===Cp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===hp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_p)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ep)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cp)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qc)return o===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===tS||s===Ap||s===Rp||s===bp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ap)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ns?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Jw extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class el extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eT={type:"move"};class Su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new el,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new el,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new el,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new el;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class y0 extends fn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Lr,u!==Lr&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Lr&&(i=Cr),i===void 0&&u===js&&(i=Ns),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class tT extends to{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const g=n.getContextAttributes();let m=null,f=null;const v=[],x=[],M=new Set,S=new Map,C=new sn;C.layers.enable(1),C.viewport=new tt;const R=new sn;R.layers.enable(2),R.viewport=new tt;const P=[C,R],y=new Jw;y.layers.enable(1),y.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=v[G];return K===void 0&&(K=new Su,v[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=v[G];return K===void 0&&(K=new Su,v[G]=K),K.getGripSpace()},this.getHand=function(G){let K=v[G];return K===void 0&&(K=new Su,v[G]=K),K.getHandSpace()};function $(G){const K=x.indexOf(G.inputSource);if(K===-1)return;const re=v[K];re!==void 0&&(re.update(G.inputSource,G.frame,c||o),re.dispatchEvent({type:G.type,data:G.inputSource}))}function U(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",z);for(let G=0;G<v.length;G++){const K=x[G];K!==null&&(x[G]=null,v[G].disconnect(K))}T=null,W=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",U),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),f=new Mt(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Vr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,re=null,ae=null;g.depth&&(ae=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=g.stencil?js:Lr,re=g.stencil?Ns:Cr);const D={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(D),r.updateRenderState({layers:[h]}),f=new Mt(h.textureWidth,h.textureHeight,{format:$n,type:Vr,depthTexture:new y0(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(f);Le.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(G){for(let K=0;K<G.removed.length;K++){const re=G.removed[K],ae=x.indexOf(re);ae>=0&&(x[ae]=null,v[ae].disconnect(re))}for(let K=0;K<G.added.length;K++){const re=G.added[K];let ae=x.indexOf(re);if(ae===-1){for(let Le=0;Le<v.length;Le++)if(Le>=x.length){x.push(re),ae=Le;break}else if(x[Le]===null){x[Le]=re,ae=Le;break}if(ae===-1)break}const D=v[ae];D&&D.connect(re)}}const V=new N,Z=new N;function Q(G,K,re){V.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const ae=V.distanceTo(Z),D=K.projectionMatrix.elements,Le=re.projectionMatrix.elements,be=D[14]/(D[10]-1),le=D[14]/(D[10]+1),Ce=(D[9]+1)/D[5],je=(D[9]-1)/D[5],ye=(D[8]-1)/D[0],Fe=(Le[8]+1)/Le[0],Ct=be*ye,Nt=be*Fe,At=ae/(-ye+Fe),xt=At*-ye;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xt),G.translateZ(At),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Xe=be+At,lt=le+At,nn=Ct-xt,A=Nt+(ae-xt),E=Ce*le/lt*Xe,H=je*le/lt*Xe;G.projectionMatrix.makePerspective(nn,A,E,H,Xe,lt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function I(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;y.near=R.near=C.near=G.near,y.far=R.far=C.far=G.far,(T!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,W=y.far);const K=G.parent,re=y.cameras;I(y,K);for(let ae=0;ae<re.length;ae++)I(re[ae],K);re.length===2?Q(y,C,R):y.projectionMatrix.copy(C.projectionMatrix),k(G,y,K)};function k(G,K,re){re===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const ae=G.children;for(let D=0,Le=ae.length;D<Le;D++)ae[D].updateMatrixWorld(!0);G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Hl*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return M};let B=null;function se(G,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;re.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let D=0;D<re.length;D++){const Le=re[D];let be=null;if(p!==null)be=p.getViewport(Le);else{const Ce=d.getViewSubImage(h,Le);be=Ce.viewport,D===0&&(e.setRenderTargetTextures(f,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(f))}let le=P[D];le===void 0&&(le=new sn,le.layers.enable(D),le.viewport=new tt,P[D]=le),le.matrix.fromArray(Le.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Le.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(be.x,be.y,be.width,be.height),D===0&&(y.matrix.copy(le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(le)}}for(let re=0;re<v.length;re++){const ae=x[re],D=v[re];ae!==null&&D!==void 0&&D.update(ae,K,c||o)}if(B&&B(G,K),K.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let re=null;for(const ae of M)K.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)M.delete(ae),S.delete(ae),i.dispatchEvent({type:"planeremoved",data:ae});for(const ae of K.detectedPlanes)if(!M.has(ae))M.add(ae),S.set(ae,K.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ae});else{const D=S.get(ae);ae.lastChangedTime>D&&(S.set(ae,ae.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ae}))}}_=null}const ie=new m0;ie.setAnimationLoop(se),this.setAnimationLoop=function(G){B=G},this.dispose=function(){}}}function nT(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,d0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=r[v.id];M===void 0&&(_(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",m));const S=x.program;i.updateUBOMapping(v,S);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function u(v){const x=d();v.__bindingPointIndex=x;const M=t.createBuffer(),S=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,S,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],M=v.uniforms,S=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,R=M.length;C<R;C++){const P=M[C];if(p(P,C,S)===!0){const y=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<T.length;$++){const U=T[$],z=g(U);typeof U=="number"?(P.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,y+W,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,M){const S=v.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const C=Array.isArray(S)?S:[S],R=[];for(let P=0;P<C.length;P++)R.push(C[P].clone());M[x]=R}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const C=Array.isArray(M[x])?M[x]:[M[x]],R=Array.isArray(S)?S:[S];for(let P=0;P<C.length;P++){const y=C[P];if(y.equals(R[P])===!1)return y.copy(R[P]),!0}}return!1}function _(v){const x=v.uniforms;let M=0;const S=16;let C=0;for(let R=0,P=x.length;R<P;R++){const y=x[R],T={boundary:0,storage:0},W=Array.isArray(y.value)?y.value:[y.value];for(let $=0,U=W.length;$<U;$++){const z=W[$],V=g(z);T.boundary+=V.boundary,T.storage+=V.storage}if(y.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=M,R>0){C=M%S;const $=S-C;C!==0&&$-T.boundary<0&&(M+=S-C,y.__offset=M)}M+=T.storage}return C=M%S,C>0&&(M+=S-C),v.__size=M,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}function rT(){const t=ia("canvas");return t.style.display="block",t}class S0{constructor(e={}){const{canvas:n=rT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=De,this.useLegacyLights=!0,this.toneMapping=oi,this.toneMappingExposure=1;const f=this;let v=!1,x=0,M=0,S=null,C=-1,R=null;const P=new tt,y=new tt;let T=null,W=n.width,$=n.height,U=1,z=null,V=null;const Z=new tt(0,0,W,$),Q=new tt(0,0,W,$);let I=!1;const k=new Id;let B=!1,se=!1,ie=null;const G=new ut,K=new N,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return S===null?U:1}let D=i;function Le(w,F){for(let X=0;X<w.length;X++){const O=w[X],q=n.getContext(O,F);if(q!==null)return q}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ad}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",Ye,!1),D===null){const F=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&F.shift(),D=Le(F,w),D===null)throw Le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,le,Ce,je,ye,Fe,Ct,Nt,At,xt,Xe,lt,nn,A,E,H,te,ne,ce,Ae,me,Y,xe,Se;function Ee(){be=new xE(D),le=new dE(D,be,e),be.init(le),Y=new Zw(D,be,le),Ce=new Kw(D,be,le),je=new SE(D),ye=new kw,Fe=new Qw(D,be,Ce,ye,le,Y,je),Ct=new pE(f),Nt=new vE(f),At=new IS(D,le),xe=new uE(D,be,At,le),xt=new _E(D,At,je,xe),Xe=new TE(D,xt,At,je),ce=new wE(D,le,Fe),H=new hE(ye),lt=new Fw(f,Ct,Nt,be,le,xe,H),nn=new nT(f,ye),A=new Bw,E=new Xw(be,le),ne=new cE(f,Ct,Nt,Ce,Xe,h,l),te=new qw(f,Xe,le),Se=new iT(D,je,le,Ce),Ae=new fE(D,be,je,le),me=new yE(D,be,je,le),je.programs=lt.programs,f.capabilities=le,f.extensions=be,f.properties=ye,f.renderLists=A,f.shadowMap=te,f.state=Ce,f.info=je}Ee();const pe=new tT(f,D);this.xr=pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(W,$,!1))},this.getSize=function(w){return w.set(W,$)},this.setSize=function(w,F,X=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,$=F,n.width=Math.floor(w*U),n.height=Math.floor(F*U),X===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(W*U,$*U).floor()},this.setDrawingBufferSize=function(w,F,X){W=w,$=F,U=X,n.width=Math.floor(w*X),n.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,X,O){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,X,O),Ce.viewport(P.copy(Z).multiplyScalar(U).floor())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,F,X,O){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,F,X,O),Ce.scissor(y.copy(Q).multiplyScalar(U).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(w){Ce.setScissorTest(I=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){V=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,F=!0,X=!0){let O=0;w&&(O|=D.COLOR_BUFFER_BIT),F&&(O|=D.DEPTH_BUFFER_BIT),X&&(O|=D.STENCIL_BUFFER_BIT),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",Ye,!1),A.dispose(),E.dispose(),ye.dispose(),Ct.dispose(),Nt.dispose(),Xe.dispose(),xe.dispose(),Se.dispose(),lt.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ve),pe.removeEventListener("sessionend",Ke),ie&&(ie.dispose(),ie=null),Qe.stop()};function _e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=je.autoReset,F=te.enabled,X=te.autoUpdate,O=te.needsUpdate,q=te.type;Ee(),je.autoReset=w,te.enabled=F,te.autoUpdate=X,te.needsUpdate=O,te.type=q}function Ye(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ft(w){const F=w.target;F.removeEventListener("dispose",ft),L(F)}function L(w){j(w),ye.remove(w)}function j(w){const F=ye.get(w).programs;F!==void 0&&(F.forEach(function(X){lt.releaseProgram(X)}),w.isShaderMaterial&&lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,O,q,Me){F===null&&(F=re);const we=q.isMesh&&q.matrixWorld.determinant()<0,Pe=V0(w,F,X,O,q);Ce.setMaterial(O,we);let Ie=X.index,Ue=1;O.wireframe===!0&&(Ie=xt.getWireframeAttribute(X),Ue=2);const Oe=X.drawRange,ke=X.attributes.position;let qe=Oe.start*Ue,Xt=(Oe.start+Oe.count)*Ue;Me!==null&&(qe=Math.max(qe,Me.start*Ue),Xt=Math.min(Xt,(Me.start+Me.count)*Ue)),Ie!==null?(qe=Math.max(qe,0),Xt=Math.min(Xt,Ie.count)):ke!=null&&(qe=Math.max(qe,0),Xt=Math.min(Xt,ke.count));const Un=Xt-qe;if(Un<0||Un===1/0)return;xe.setup(q,O,Pe,X,Ie);let ur,mt=Ae;if(Ie!==null&&(ur=At.get(Ie),mt=me,mt.setIndex(ur)),q.isMesh)O.wireframe===!0?(Ce.setLineWidth(O.wireframeLinewidth*ae()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(q.isLine){let He=O.linewidth;He===void 0&&(He=1),Ce.setLineWidth(He*ae()),q.isLineSegments?mt.setMode(D.LINES):q.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else q.isPoints?mt.setMode(D.POINTS):q.isSprite&&mt.setMode(D.TRIANGLES);if(q.isInstancedMesh)mt.renderInstances(qe,Un,q.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gc=Math.min(X.instanceCount,He);mt.renderInstances(qe,Un,gc)}else mt.render(qe,Un)},this.compile=function(w,F){function X(O,q,Me){O.transparent===!0&&O.side===Rn&&O.forceSinglePass===!1?(O.side=Jt,O.needsUpdate=!0,ma(O,q,Me),O.side=rr,O.needsUpdate=!0,ma(O,q,Me),O.side=Rn):ma(O,q,Me)}_=E.get(w),_.init(),m.push(_),w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights(f.useLegacyLights),w.traverse(function(O){const q=O.material;if(q)if(Array.isArray(q))for(let Me=0;Me<q.length;Me++){const we=q[Me];X(we,w,O)}else X(q,w,O)}),m.pop(),_=null};let J=null;function ue(w){J&&J(w)}function ve(){Qe.stop()}function Ke(){Qe.start()}const Qe=new m0;Qe.setAnimationLoop(ue),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(w){J=w,pe.setAnimationLoop(w),w===null?Qe.stop():Qe.start()},pe.addEventListener("sessionstart",ve),pe.addEventListener("sessionend",Ke),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),w.isScene===!0&&w.onBeforeRender(f,w,F,S),_=E.get(w,m.length),_.init(),m.push(_),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(G),se=this.localClippingEnabled,B=H.init(this.clippingPlanes,se),p=A.get(w,g.length),p.init(),g.push(p),kt(w,F,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(z,V),B===!0&&H.beginShadows();const X=_.state.shadowsArray;if(te.render(X,w,F),B===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(p,w),_.setupLights(f.useLegacyLights),F.isArrayCamera){const O=F.cameras;for(let q=0,Me=O.length;q<Me;q++){const we=O[q];Pi(p,w,we,we.viewport)}}else Pi(p,w,F);S!==null&&(Fe.updateMultisampleRenderTarget(S),Fe.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(f,w,F),xe.resetDefaultState(),C=-1,R=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function kt(w,F,X,O){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||k.intersectsSprite(w)){O&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const we=Xe.update(w),Pe=w.material;Pe.visible&&p.push(w,we,Pe,X,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||k.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==je.render.frame&&(w.skeleton.update(),w.skeleton.frame=je.render.frame);const we=Xe.update(w),Pe=w.material;if(O&&(we.boundingSphere===null&&we.computeBoundingSphere(),K.copy(we.boundingSphere.center).applyMatrix4(w.matrixWorld).applyMatrix4(G)),Array.isArray(Pe)){const Ie=we.groups;for(let Ue=0,Oe=Ie.length;Ue<Oe;Ue++){const ke=Ie[Ue],qe=Pe[ke.materialIndex];qe&&qe.visible&&p.push(w,we,qe,X,K.z,ke)}}else Pe.visible&&p.push(w,we,Pe,X,K.z,null)}}const Me=w.children;for(let we=0,Pe=Me.length;we<Pe;we++)kt(Me[we],F,X,O)}function Pi(w,F,X,O){const q=w.opaque,Me=w.transmissive,we=w.transparent;_.setupLightsView(X),B===!0&&H.setGlobalState(f.clippingPlanes,X),Me.length>0&&dt(q,Me,F,X),O&&Ce.viewport(P.copy(O)),q.length>0&&Mn(q,F,X),Me.length>0&&Mn(Me,F,X),we.length>0&&Mn(we,F,X),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function dt(w,F,X,O){if(ie===null){const Pe=le.isWebGL2;ie=new Mt(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?na:Vr,minFilter:ta,samples:Pe&&a===!0?4:0})}const q=f.getRenderTarget();f.setRenderTarget(ie),f.clear();const Me=f.toneMapping;f.toneMapping=oi,Mn(w,X,O),Fe.updateMultisampleRenderTarget(ie),Fe.updateRenderTargetMipmap(ie);let we=!1;for(let Pe=0,Ie=F.length;Pe<Ie;Pe++){const Ue=F[Pe],Oe=Ue.object,ke=Ue.geometry,qe=Ue.material,Xt=Ue.group;if(qe.side===Rn&&Oe.layers.test(O.layers)){const Un=qe.side;qe.side=Jt,qe.needsUpdate=!0,Zn(Oe,X,O,ke,qe,Xt),qe.side=Un,qe.needsUpdate=!0,we=!0}}we===!0&&(Fe.updateMultisampleRenderTarget(ie),Fe.updateRenderTargetMipmap(ie)),f.setRenderTarget(q),f.toneMapping=Me}function Mn(w,F,X){const O=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Me=w.length;q<Me;q++){const we=w[q],Pe=we.object,Ie=we.geometry,Ue=O===null?we.material:O,Oe=we.group;Pe.layers.test(X.layers)&&Zn(Pe,F,X,Ie,Ue,Oe)}}function Zn(w,F,X,O,q,Me){w.onBeforeRender(f,F,X,O,q,Me),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(f,F,X,O,w,Me),q.transparent===!0&&q.side===Rn&&q.forceSinglePass===!1?(q.side=Jt,q.needsUpdate=!0,f.renderBufferDirect(X,F,O,q,w,Me),q.side=rr,q.needsUpdate=!0,f.renderBufferDirect(X,F,O,q,w,Me),q.side=Rn):f.renderBufferDirect(X,F,O,q,w,Me),w.onAfterRender(f,F,X,O,q,Me)}function ma(w,F,X){F.isScene!==!0&&(F=re);const O=ye.get(w),q=_.state.lights,Me=_.state.shadowsArray,we=q.state.version,Pe=lt.getParameters(w,q.state,Me,F,X),Ie=lt.getProgramCacheKey(Pe);let Ue=O.programs;O.environment=w.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(w.isMeshStandardMaterial?Nt:Ct).get(w.envMap||O.environment),Ue===void 0&&(w.addEventListener("dispose",ft),Ue=new Map,O.programs=Ue);let Oe=Ue.get(Ie);if(Oe!==void 0){if(O.currentProgram===Oe&&O.lightsStateVersion===we)return Hd(w,Pe),Oe}else Pe.uniforms=lt.getUniforms(w),w.onBuild(X,Pe,f),w.onBeforeCompile(Pe,f),Oe=lt.acquireProgram(Pe,Ie),Ue.set(Ie,Oe),O.uniforms=Pe.uniforms;const ke=O.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=H.uniform),Hd(w,Pe),O.needsLights=W0(w),O.lightsStateVersion=we,O.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMap.value=q.state.directionalShadowMap,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotShadowMap.value=q.state.spotShadowMap,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMap.value=q.state.pointShadowMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix);const qe=Oe.getUniforms(),Xt=pl.seqWithValue(qe.seq,ke);return O.currentProgram=Oe,O.uniformsList=Xt,Oe}function Hd(w,F){const X=ye.get(w);X.outputColorSpace=F.outputColorSpace,X.instancing=F.instancing,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function V0(w,F,X,O,q){F.isScene!==!0&&(F=re),Fe.resetTextureUnits();const Me=F.fog,we=O.isMeshStandardMaterial?F.environment:null,Pe=S===null?f.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ai,Ie=(O.isMeshStandardMaterial?Nt:Ct).get(O.envMap||we),Ue=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!O.normalMap&&!!X.attributes.tangent,ke=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,Xt=!!X.morphAttributes.color,Un=O.toneMapped?f.toneMapping:oi,ur=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=ur!==void 0?ur.length:0,He=ye.get(O),gc=_.state.lights;if(B===!0&&(se===!0||w!==R)){const dn=w===R&&O.id===C;H.setState(O,w,dn)}let Rt=!1;O.version===He.__version?(He.needsLights&&He.lightsStateVersion!==gc.state.version||He.outputColorSpace!==Pe||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ie||O.fog===!0&&He.fog!==Me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==H.numPlanes||He.numIntersection!==H.numIntersection)||He.vertexAlphas!==Ue||He.vertexTangents!==Oe||He.morphTargets!==ke||He.morphNormals!==qe||He.morphColors!==Xt||He.toneMapping!==Un||le.isWebGL2===!0&&He.morphTargetsCount!==mt)&&(Rt=!0):(Rt=!0,He.__version=O.version);let fr=He.currentProgram;Rt===!0&&(fr=ma(O,F,q));let Wd=!1,ro=!1,vc=!1;const $t=fr.getUniforms(),dr=He.uniforms;if(Ce.useProgram(fr.program)&&(Wd=!0,ro=!0,vc=!0),O.id!==C&&(C=O.id,ro=!0),Wd||R!==w){if($t.setValue(D,"projectionMatrix",w.projectionMatrix),le.logarithmicDepthBuffer&&$t.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),R!==w&&(R=w,ro=!0,vc=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const dn=$t.map.cameraPosition;dn!==void 0&&dn.setValue(D,K.setFromMatrixPosition(w.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$t.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&$t.setValue(D,"viewMatrix",w.matrixWorldInverse)}if(q.isSkinnedMesh){$t.setOptional(D,q,"bindMatrix"),$t.setOptional(D,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(le.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),$t.setValue(D,"boneTexture",dn.boneTexture,Fe),$t.setValue(D,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xc=X.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0&&le.isWebGL2===!0)&&ce.update(q,X,fr),(ro||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,$t.setValue(D,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(dr.envMap.value=Ie,dr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ro&&($t.setValue(D,"toneMappingExposure",f.toneMappingExposure),He.needsLights&&H0(dr,vc),Me&&O.fog===!0&&nn.refreshFogUniforms(dr,Me),nn.refreshMaterialUniforms(dr,O,U,$,ie),pl.upload(D,He.uniformsList,dr,Fe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(pl.upload(D,He.uniformsList,dr,Fe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$t.setValue(D,"center",q.center),$t.setValue(D,"modelViewMatrix",q.modelViewMatrix),$t.setValue(D,"normalMatrix",q.normalMatrix),$t.setValue(D,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const dn=O.uniformsGroups;for(let _c=0,j0=dn.length;_c<j0;_c++)if(le.isWebGL2){const jd=dn[_c];Se.update(jd,fr),Se.bind(jd,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function H0(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function W0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,F,X){ye.get(w.texture).__webglTexture=F,ye.get(w.depthTexture).__webglTexture=X;const O=ye.get(w);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=X===void 0,O.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const X=ye.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,X=0){S=w,x=F,M=X;let O=!0,q=null,Me=!1,we=!1;if(w){const Ie=ye.get(w);Ie.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(D.FRAMEBUFFER,null),O=!1):Ie.__webglFramebuffer===void 0?Fe.setupRenderTarget(w):Ie.__hasExternalTextures&&Fe.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const Oe=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(q=Oe[F],Me=!0):le.isWebGL2&&w.samples>0&&Fe.useMultisampledRTT(w)===!1?q=ye.get(w).__webglMultisampledFramebuffer:q=Oe,P.copy(w.viewport),y.copy(w.scissor),T=w.scissorTest}else P.copy(Z).multiplyScalar(U).floor(),y.copy(Q).multiplyScalar(U).floor(),T=I;if(Ce.bindFramebuffer(D.FRAMEBUFFER,q)&&le.drawBuffers&&O&&Ce.drawBuffers(w,q),Ce.viewport(P),Ce.scissor(y),Ce.setScissorTest(T),Me){const Ie=ye.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,X)}else if(we){const Ie=ye.get(w.texture),Ue=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,Ue)}C=-1},this.readRenderTargetPixels=function(w,F,X,O,q,Me,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Ce.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const Ie=w.texture,Ue=Ie.format,Oe=Ie.type;if(Ue!==$n&&Y.convert(Ue)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===na&&(be.has("EXT_color_buffer_half_float")||le.isWebGL2&&be.has("EXT_color_buffer_float"));if(Oe!==Vr&&Y.convert(Oe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Ar&&(le.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-O&&X>=0&&X<=w.height-q&&D.readPixels(F,X,O,q,Y.convert(Ue),Y.convert(Oe),Me)}finally{const Ie=S!==null?ye.get(S).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,F,X=0){const O=Math.pow(2,-X),q=Math.floor(F.image.width*O),Me=Math.floor(F.image.height*O);Fe.setTexture2D(F,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,w.x,w.y,q,Me),Ce.unbindTexture()},this.copyTextureToTexture=function(w,F,X,O=0){const q=F.image.width,Me=F.image.height,we=Y.convert(X.format),Pe=Y.convert(X.type);Fe.setTexture2D(X,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,w.x,w.y,q,Me,we,Pe,F.image.data):F.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,O,w.x,w.y,we,Pe,F.image),O===0&&X.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,F,X,O,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Pe=w.max.z-w.min.z+1,Ie=Y.convert(O.format),Ue=Y.convert(O.type);let Oe;if(O.isData3DTexture)Fe.setTexture3D(O,0),Oe=D.TEXTURE_3D;else if(O.isDataArrayTexture)Fe.setTexture2DArray(O,0),Oe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ke=D.getParameter(D.UNPACK_ROW_LENGTH),qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xt=D.getParameter(D.UNPACK_SKIP_PIXELS),Un=D.getParameter(D.UNPACK_SKIP_ROWS),ur=D.getParameter(D.UNPACK_SKIP_IMAGES),mt=X.isCompressedTexture?X.mipmaps[0]:X.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,w.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,w.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,w.min.z),X.isDataTexture||X.isData3DTexture?D.texSubImage3D(Oe,q,F.x,F.y,F.z,Me,we,Pe,Ie,Ue,mt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Oe,q,F.x,F.y,F.z,Me,we,Pe,Ie,mt.data)):D.texSubImage3D(Oe,q,F.x,F.y,F.z,Me,we,Pe,Ie,Ue,mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ke),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ur),q===0&&O.generateMipmaps&&D.generateMipmap(Oe),Ce.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Fe.setTextureCube(w,0):w.isData3DTexture?Fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Fe.setTexture2DArray(w,0):Fe.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){x=0,M=0,S=null,Ce.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?Dr:n0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dr?De:ai}}class sT extends S0{}sT.prototype.isWebGL1Renderer=!0;class M0 extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Pn extends Kn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ud extends Nn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let _=0;const g=[],m=i/2;let f=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function v(){const M=new N,S=new N;let C=0;const R=(n-e)/i;for(let P=0;P<=s;P++){const y=[],T=P/s,W=T*(n-e)+e;for(let $=0;$<=r;$++){const U=$/r,z=U*l+a,V=Math.sin(z),Z=Math.cos(z);S.x=W*V,S.y=-T*i+m,S.z=W*Z,d.push(S.x,S.y,S.z),M.set(V,R,Z).normalize(),h.push(M.x,M.y,M.z),p.push(U,1-T),y.push(_++)}g.push(y)}for(let P=0;P<r;P++)for(let y=0;y<s;y++){const T=g[y][P],W=g[y+1][P],$=g[y+1][P+1],U=g[y][P+1];u.push(T,W,U),u.push(W,$,U),C+=6}c.addGroup(f,C,0),f+=C}function x(M){const S=_,C=new ge,R=new N;let P=0;const y=M===!0?e:n,T=M===!0?1:-1;for(let $=1;$<=r;$++)d.push(0,m*T,0),h.push(0,T,0),p.push(.5,.5),_++;const W=_;for(let $=0;$<=r;$++){const z=$/r*l+a,V=Math.cos(z),Z=Math.sin(z);R.x=y*Z,R.y=m*T,R.z=y*V,d.push(R.x,R.y,R.z),h.push(0,T,0),C.x=V*.5+.5,C.y=Z*.5*T+.5,p.push(C.x,C.y),_++}for(let $=0;$<r;$++){const U=S+$,z=W+$;M===!0?u.push(z,z+1,U):u.push(z+1,z,U),P+=3}c.addGroup(f,P,M===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pc extends Nn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new N,h=new N,p=[],_=[],g=[],m=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let M=0;f===0&&o===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let S=0;S<=n;S++){const C=S/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(C+M,1-x),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const x=u[f][v+1],M=u[f][v],S=u[f+1][v],C=u[f+1][v+1];(f!==0||o>0)&&p.push(x,M,C),(f!==i-1||l<Math.PI)&&p.push(M,S,C)}this.setIndex(p),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oT extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gm extends oT{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mr extends bi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aT extends bi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class E0 extends bi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class vm extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class lT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const cT=new lT;class w0{constructor(e){this.manager=e!==void 0?e:cT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class uT extends w0{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ia("img");function l(){u(),xm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class fT extends w0{constructor(e){super(e)}load(e,n,i,r){const s=new fn,o=new uT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class pa extends Et{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class dT extends pa{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Mu=new ut,_m=new N,ym=new N;class Od{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ym),n.updateMatrixWorld(),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hT extends Od{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Hl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Eu extends pa{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new hT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sm=new ut,xo=new N,wu=new N;class pT extends Od{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),wu.copy(i.position),wu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wu),i.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),Sm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sm)}}class gr extends pa{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mT extends Od{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gT extends pa{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new mT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ls extends pa{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fd extends Nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class vT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Mm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Mm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);const xT="sßx",Em={active:1,inactive:0,snub:"s",holosnub:"ß",custom:.5,activeVoid:"x",void:""},T0=t=>t===0?"inactive":t===1?"active":t==="s"?"snub":t==="ß"?"holosnub":t==="x"?"activeVoid":t===""?"void":"custom",_T=t=>{const e=[];for(let n=0;n<t[0].length;n++){e.push([]);for(let i=0;i<t.length;i++)e[n].push(t[i][n])}return e},No=(t,e)=>{const n=new Array(t.length);for(let i=0;i<t.length;i++){n[i]=new Array(e[0].length);for(let r=0;r<e[0].length;r++){let s=0;for(let o=0;o<e.length;o++)s+=t[i][o]*e[o][r];n[i][r]=s}}return n},Xi=(t,e)=>{const n=new Array(t.length);for(let i=0;i<t.length;i++){let r=0;for(let s=0;s<t[0].length;s++)r+=t[i][s]*e[s];n[i]=r}return n},wm=(t,e)=>{for(let n=0;n<t.length;n++)for(let i=0;i<t[0].length;i++)t[n][i]=e[n][i];return t},sr=t=>{const e=new Array(t);for(let n=0;n<t;n++)e[n]=new Array(t).fill(0),e[n][n]=1;return e},C0=t=>t.every((e,n)=>e.every((i,r)=>n===r||t[n][r]===0)),yT=t=>{const e=t[0].length;let n=t.map(s=>s.slice()),i=sr(e),r=1e3;for(;!C0(n)&&r-- >0;){let s=0,o=1;for(let c=0;c<e;c++)for(let u=0;u<e;u++)c!==u&&Nr(n[c][u])>Nr(n[s][o])&&(s=c,o=u);const a=n[s][s]===n[o][o]?zd(n[s][o])*Ys/4:.5*bT(2*n[s][o]/(n[s][s]-n[o][o])),l=sr(e);l[o][o]=l[s][s]=Cs(a),l[o][s]=l[s][o]=-us(a),l[o][s]*=-1,i=No(i,l),n=No(No(_T(l),n),l)}return{vectors:i,values:n.map((s,o)=>Nr(s[o])<1e-8?0:s[o])}},ST=t=>{const e=t.length,n=[];for(let i=0;i<e;i++)n.push([...t[i],...sr(e)[i]]);for(let i=0;i<e;i++){const r=n[i][i];for(let s=i+1;s<e;s++){const o=n[s][i]/r;for(let a=i;a<2*e;a++)n[s][a]-=o*n[i][a]}}for(let i=e-1;i>=0;i--){const r=n[i][i];for(let s=i-1;s>=0;s--){const o=n[s][i]/r;for(let a=0;a<2*e;a++)n[s][a]-=o*n[i][a]}for(let s=e;s<2*e;s++)n[i][s]/=r}return n.map(i=>i.slice(e))},A0=t=>{if(t.length===2)return[t[0][0],t[1][0],t[0][1],t[1][1]];if(t.length===3)return[t[0][0],t[1][0],t[2][0],t[0][1],t[1][1],t[2][1],t[0][2],t[1][2],t[2][2]];if(t.length===4)return[t[0][0],t[1][0],t[2][0],t[3][0],t[0][1],t[1][1],t[2][1],t[3][1],t[0][2],t[1][2],t[2][2],t[3][2],t[0][3],t[1][3],t[2][3],t[3][3]];throw new Error("Unsupported matrix size")},MT=(t,e)=>t.map((n,i)=>n.map((r,s)=>-Cs(e[i][s]*Ys/r))),R0=t=>{const e=yT(t).values;return{"+":e.filter(n=>n>0).length,"-":e.filter(n=>n<0).length,0:e.filter(n=>n===0).length}},b0=(t,e=[],n=0)=>{e[n]=e[n]||[];for(let i=0;i<t.length;i++){const r=t.filter((s,o)=>o!==i).map(s=>s.filter((o,a)=>a!==i));e[n].push(R0(r)),r.length>1&&b0(r,e,n+1)}return e},ET=t=>{const e=R0(t);if(e["-"]===0&&e[0]===0)return"finite";if(e["-"]===0&&e[0]===1)return"affine";const n=b0(t),i=n[0];if(i.every(r=>r["-"]===0&&r[0]===0))return"hyperbolic-compact";if(i.every(r=>r["-"]===0))return"hyperbolic-paracompact";for(let r=1;r<n.length;r++)if(n[r].every(o=>o["-"]===0))return"hyperbolic-lorentzian-level-"+(r+1);return"indefinite"},kd=(t,e,n)=>{let i=0;for(let r=0;r<t.length;r++)i+=t[r]*e[r]*(r===t.length-1&&n||1);return i},P0=(t,e)=>kd(t,t,e),wT=(t,e,n)=>{t=t.slice();const i=2*kd(t,e,n);for(let r=0;r<t.length;r++)t[r]-=i*(n||r!==t.length-1?e[r]:0);return t},L0=(t,e)=>{if(t=t.slice(),e===0){for(let i=0;i<t.length;i++)t[i]/=t[t.length-1];return t}const n=(e===-1&&zd(t[t.length-1])||1)/ht(Nr(P0(t,e)));for(let i=0;i<t.length;i++)t[i]*=n;return t},TT=t=>t.sort((e,n)=>{const[i,r]=e,[s,o]=n;return i===0&&r===1?1:s===0&&o===1||i<2&&s>=2?-1:s<2&&i>=2?1:i<2&&s<2?r===o?s-i:r-o:i===s?o-r:s-i}),Tm=(t,e,n,i,r)=>{const s=sr(i);if(e>n.length-1||Nr(t)>1)return s;const[o,a]=n[e],l=a===i-1?r:1,c=ht(1-l*t*t),u=t;return s[o][o]=c,s[a][a]=c,s[o][a]=-l*u,s[a][o]=u,s},CT=(t,e,n)=>{const i=e[0].length,r=new Array(i).fill().map(()=>new Array(i).fill(0));r[t][0]=1;for(let o=1;o<i;o++){const a=(o+t)%i;for(let l=0;l<o;l++){const c=(l+t)%i;r[a][l]=(e[a][c]-kd(r[a].slice(0,l),r[c].slice(0,l)))/r[c][l]}if(r[a][o]=ht(Nr(1-P0(r[a].slice(0,o)))),r[a][o]<1e-6&&o<i-1)return null}const s=(i-1+t)%i;return n===0?r[s][i-1]=.5:r[s][i-1]*=n,r},AT=(t,e,n=!1)=>{const i=t[0].length;let r=null;const s=t.every((o,a)=>o.every((l,c)=>l===(a===c?1:-1)));if(n||s){if(r=new Array(i).fill(0).map(()=>new Array(i).fill(0)),i===2){const o=(t[0][1]+1)/2;return r[0][0]=ht(o-t[0][1]),r[1][0]=-ht(o-t[0][1]),r[0][1]=r[1][1]=ht((e||1)*o),e===0&&(r[1][1]=.5),r}else if(i===3){const o=t[0][1],a=t[1][2],l=t[0][2],c=(o*o+a*a+l*l-2*o*a*l-1)/(o*o+a*a+l*l-2*o*a-2*o*l-2*a*l+2*o+2*a+2*l-3);return r[0][2]=r[1][2]=r[2][2]=e*ht(e*c),r[2][1]=-ht(1-c),r[1][1]=(a-c)/r[2][1],r[0][1]=(l-c)/r[2][1],r[1][0]=-ht(1-r[1][1]**2-c),r[0][0]=ht(1-r[0][1]**2-c),e===0&&(r[2][2]=.5),r}else if(i===4){const o=t[0][1],a=t[1][2],l=t[2][3],c=t[0][2],u=t[1][3],d=t[0][3],h=(o*o*l*l+a*a*d*d+c*c*u*u-o*o-a*a-l*l-c*c-u*u-d*d+2*o*u*d+2*o*a*c+2*a*l*u+2*l*c*d-2*a*c*u*d-2*o*a*l*d-2*o*l*c*u+1)/(2*(o*o*l+a*a*d+l*l*o+c*c*u+u*u*c+d*d*a-o*o-a*a-l*l-c*c-u*u-d*d-o*a*l-o*a*d-o*l*c-o*l*u-o*l*d-o*c*u-a*l*d-a*c*u-a*c*d-a*u*d-l*c*u-c*u*d+o*a*c+o*u*d+a*l*u+l*c*d+o*a+o*c+o*u+o*d+a*l+a*c+a*u+l*c+l*u+l*d+c*d+u*d-o-a-l-c-u-d+2));return r[0][3]=r[1][3]=r[2][3]=r[3][3]=e*ht(e*h),r[3][2]=-ht(1-h),r[2][2]=(l-h)/r[3][2],r[1][2]=(u-h)/r[3][2],r[0][2]=(d-h)/r[3][2],r[2][1]=-ht(1-h-r[2][2]**2),r[1][1]=(a-h-r[1][2]*r[2][2])/r[2][1],r[0][1]=(c-h-r[0][2]*r[2][2])/r[2][1],r[1][0]=-ht(1-h-r[1][1]**2-r[1][2]**2),r[0][0]=ht(1-h-r[0][1]**2-r[0][2]**2),e===0&&(r[3][3]=.5),r}if(s){const o=[0];for(let a=1;a<i;a++)o[a]=(o[a-1]+1)/(3-o[a-1]);r[0][0]=1,r[1][0]=-1,r[0][1]=ht(o[1]),r[1][1]=ht(o[1]);for(let a=0;a<i;a++)for(let l=0;l<i;l++)a<2&&l<2||(r[a][l]=l<a-1?0:l===a-1?-(a*ht(o[l]-o[l-1])):l<i-1?ht(o[l]-o[l-1]):ht(o[l-1]));return r}}for(let o=0;o<i&&(r=CT(o,t,e),!r);o++);if(r&&n){const o=D0(new Array(i).fill(1),r,e);if(e!==0){const a=L0(o.slice().map((l,c)=>c===i-1?l-1:l),e);for(let l=0;l<i;l++)r[l]=wT(r[l],a,e)}}return r},D0=(t,e,n)=>{let i=t.map(a=>isNaN(a)?1:+a),r=e.slice(),s;for(let a=0;a<i.length&&(s=ST(r),s.some(l=>l.some(c=>isNaN(c)||Nr(c)>1e8)));a++){console.warn("Non invertible matrix, retrying by shifting mirrors"),r.push(r.shift()),i.push(i.shift());if(a===i.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const o=Xi(s,i);return o[o.length-1]*=n||1,L0(o,n)},{abs:Nr,cos:Cs,sin:us,tan:RT,cosh:X2,sinh:$2,acos:Y2,acosh:q2,atan:bT,atan2:PT,min:tr,max:fs,round:LT,sqrt:ht,sign:zd,ceil:DT,floor:K2,log:Q2,exp:Z2,hypot:IT,pow:J2,PI:Ys}=Math;function*NT(t,e){if(e<0||t.length<e)return;const n=Array.from(Array(e).keys());for(;;){yield n.map(r=>t[r]);let i=e-1;for(;i>=0&&n[i]>=t.length-e+i;)i--;if(i<0)return;for(let r=n[i]+1;i<e;i++,r++)n[i]=r}}const UT=(t,e=2)=>Array.from(NT(t,e)),OT=t=>String.fromCharCode(97+t),FT=t=>t.charCodeAt(0)-97,ml=t=>t?t*ml(t-1):1,I0=(t,e)=>ml(t)/(ml(e)*ml(t-e)),N0=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],kT=["","knuthbendix","toddcoxeter","fundamental"],wn=new Te,Bd=new fT,io=Bd.load("Carbon.png");io.colorSpace=De;io.wrapS=Gr;io.wrapT=Gr;io.repeat.x=10;io.repeat.y=10;const Gd=Bd.load("Carbon_Normal.png");Gd.wrapS=Gr;Gd.wrapT=Gr;const Uo=Bd.load("ocean.jpg");Uo.colorSpace=De;Uo.mapping=Vl;[...new Array(10).keys()].map(t=>new RegExp(OT(t),"g"));const li={neon:{background:0,fx:["bloom"],shadow:!1,material:new ji,lights:[],color:({word:t})=>wn.setHSL(t.length*.17%1,.5,.5)},colorful:{background:16777215,shadow:!1,material:new Mr,lights:[new ls(16777215,.25)],cameraLights:[new gr(16777215,.75)],color:({word:t},e,n)=>wn.setHSL(t.length*.03%1,1,.8),faceMaterial:new Mr({side:Rn,transparent:!0,opacity:.75})},reflection:{background:16777215,shadow:!1,material:new aT,lights:[new ls(16777215,.25)],cameraLights:[new gr(16777215,.75)],color:({word:t},e,n)=>{const i=t.length?FT(t[t.length-1])/n:0;return wn.setHSL(i%1,1,.8)}},projection:{background:16777215,ground:"sphere",shadow:!0,material:new Mr({transparent:!0,opacity:.75,blending:ea}),lights:[new gr],color:({word:t})=>wn.setHSL(t.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new Mr,lights:[new ls(13421772,.4)],cameraLights:[new gr(16777215,1)],color:()=>wn.set(16776960)},pure:{background:0,fx:["sao"],shadow:!1,material:new vm,lights:[new ls(0,.5)],cameraLights:[new gr(16777215,1)],color:({word:t})=>wn.setHSL(t.length*.03%1,.75,.7),faceMaterial:new vm({side:Rn})},glass:{extended:!0,background:Uo,env:Uo,shadow:!1,material:new gm({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new gT,new dT],color:()=>wn.set(15658734)},museum:{extended:!0,background:12303291,env:Uo,shadow:!0,ground:"plane",material:new gm({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:io,normalMap:Gd}),lights:[(()=>{const t=new Eu(16777215,.2);return t.position.set(0,4,-6),t})(),(()=>{const t=new Eu(16777215,.2);return t.position.set(8,7,0),t})(),(()=>{const t=new Eu(16777215,.2);return t.position.set(-4,6,2),t})(),new ls(16777215,.4)],cameraLights:[(()=>{const t=new gr(16777215,2.5,5,5);return t.shadow=null,t})()],color:()=>wn.set(16777215)},bokeh:{extended:!0,background:16777215,fx:["bokeh"],shadow:!1,material:new Mr,lights:[new ls(16777215,.5)],cameraLights:[new gr(16777215,1)],color:({word:t})=>wn.setHSL(t.length*.17%1,.7,.5)},transcendent:{extended:!0,background:16777215,fx:["godray"],shadow:!1,material:new ji,color:()=>wn.set(0)},plain:{extended:!0,background:16777215,shadow:!1,material:new ji,color:({word:t})=>wn.setHSL(t.length*.06%1,.7,.5)},wireframe:{extended:!0,background:0,shadow:!1,material:new ji({wireframe:!0}),lights:[],color:({word:t})=>wn.setHSL(t.length*.17%1,.5,.5)}};Object.values(li).forEach(t=>{t.vertexMaterial||(t.vertexMaterial=t.material),t.edgeMaterial||(t.edgeMaterial=t.material),t.faceMaterial||(t.faceMaterial=t.material.clone(),t.faceMaterial.side=Rn,t.faceMaterial.transparent=!0,t.faceMaterial.opacity=.5,t.faceMaterial.blending=ea,t.faceMaterial.blendEquation=_i,t.faceMaterial.blendSrc=bd,t.faceMaterial.blendDst=Pd,t.faceMaterial.depthWrite=!1)});const Wl={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"",projection:"stereographic",controls:"space",controlsShift:0,ambiance:"neon",centered:null,zoom:1,fov3:90,fov4:90,msaa:window.devicePixelRatio<=1,msaaSamples:8},zT=t=>{if(t.coxeter.length!==t.dimensions||t.coxeter.some(e=>e.length!==t.dimensions)){const e=t.coxeter;t.coxeter=new Array(t.dimensions).fill().map((n,i)=>new Array(t.dimensions).fill().map((r,s)=>i===s?1:i===s+1||i+1===s?3:2));for(let n=0;n<tr(e.length,t.dimensions);n++)for(let i=0;i<n;i++)t.coxeter[n][i]=e[n][i],t.coxeter[i][n]=e[n][i]}if(t.mirrors.length!==t.dimensions){const e=t.mirrors;t.mirrors=new Array(t.dimensions).fill(0);for(let n=0;n<tr(e.length,t.dimensions);n++)t.mirrors[n]=e[n]}if(t.stellation.length!==t.dimensions||t.stellation.some(e=>e.length!==t.dimensions)){const e=t.stellation;t.stellation=new Array(t.dimensions).fill().map(()=>new Array(t.dimensions).fill(1));for(let n=0;n<tr(e.length,t.dimensions);n++)for(let i=0;i<n;i++)t.stellation[n][i]=e[n][i],t.stellation[i][n]=e[i][n]}return t},U0=t=>{const e={...t},n=[];Object.entries(e).forEach(([i,r])=>{typeof Wl[i]=="number"||i.startsWith("fov")?(r===""||isNaN(r))&&(delete e[i],n.push(i)):Array.isArray(Wl[i])&&(Array.isArray(r[0])?r.find(s=>s.find(o=>r===""||isNaN(o)))&&(delete e[i],n.push(i)):r.find(s=>r===""||isNaN(s)&&!(i==="mirrors"&&xT.includes(s)))&&(delete e[i],n.push(i)))}),zT(e),(e.matrix.length!==e.dimensions||e.matrix.some(i=>i.length!==e.dimensions))&&(e.matrix=sr(e.dimensions));for(let i=4;i<=9;i++)i<=e.dimensions&&!e[`fov${i}`]&&!n.includes(`fov${i}`)&&(e[`fov${i}`]=i===4?90:45),i>e.dimensions&&e[`fov${i}`]&&delete e[`fov${i}`];return e.controlsShift=tr(e.controlsShift,LT(I0(e.dimensions,2)/2-1)),{params:e,badParams:n}};class BT extends he.Component{componentDidCatch(e,n){this.props.onError(e,n)}render(){return this.props.error?null:this.props.children}}const bf=(t,e)=>{let n;return(...i)=>(clearTimeout(n),n=setTimeout(()=>t(...i),e),()=>clearTimeout(n))};class cr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const GT=new dc(-1,1,1,-1,0,1),Vd=new Nn;Vd.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3));Vd.setAttribute("uv",new It([0,2,0,0,2,0],2));class mc{constructor(e){this._mesh=new Qt(Vd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const VT={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class HT extends cr{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,s=i.aspect!==void 0?i.aspect:n.aspect,o=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Mt(1,1,{minFilter:yt,magFilter:yt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Ai,this.materialDepth.depthPacking=Js,this.materialDepth.blending=Pt;const l=VT,c=on.clone(l.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=r,c.aspect.value=s,c.aperture.value=o,c.maxblur.value=a,c.nearClip.value=n.near,c.farClip.value=n.far,this.materialBokeh=new nt({defines:Object.assign({},l.defines),uniforms:c,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.uniforms=c,this.needsSwap=!1,this.fsQuad=new mc(this.materialBokeh),this._oldClearColor=new Te}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,n){this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Oo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class jl extends cr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=on.clone(e.uniforms),this.material=new nt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new mc(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cm extends cr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class WT extends cr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class jT{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new ge);this._width=i.width,this._height=i.height,n=new Mt(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jl(Oo),this.clock=new vT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cm!==void 0&&(o instanceof Cm?i=!0:o instanceof WT&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class XT extends cr{constructor(e,n,i,r,s){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const tl={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new ge(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new ut},cameraInverseProjectionMatrix:{value:new ut},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform sampler2D tDepth;

		#if NORMAL_TEXTURE == 1
		uniform sampler2D tNormal;
		#endif

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			#if NORMAL_TEXTURE == 1
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
			#else
			return normalize( cross( dFdx( viewPosition ), dFdy( viewPosition ) ) );
			#endif
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`},Oi={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new ge(512,512)},sampleUvOffsets:{value:[new ge(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},Xl={createSampleWeights:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push($T(i,e));return n},createSampleOffsets:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(e.clone().multiplyScalar(i));return n},configure:function(t,e,n,i){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=Xl.createSampleOffsets(e,i),t.uniforms.sampleWeights.value=Xl.createSampleWeights(e,n),t.needsUpdate=!0}};function $T(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Tu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		#include <packing>

		void main() {

			float depth = 1.0 - unpackRGBAToDepth( texture2D( tDiffuse, vUv ) );
			gl_FragColor = vec4( vec3( depth ), opacity );

		}`};class Pf extends cr{constructor(e,n,i=!1,r=!1,s=new ge(256,256)){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Te,this._oldClearColor=new Te,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new ge(s.x,s.y),this.saoRenderTarget=new Mt(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new Mt(this.resolution.x,this.resolution.y,{minFilter:yt,magFilter:yt}),this.depthRenderTarget=this.normalRenderTarget.clone();let o;this.supportsDepthTextureExtension&&(o=new y0,o.type=Ld,this.beautyRenderTarget.depthTexture=o,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new Ai,this.depthMaterial.depthPacking=Js,this.depthMaterial.blending=Pt,this.normalMaterial=new E0,this.normalMaterial.blending=Pt,this.saoMaterial=new nt({defines:Object.assign({},tl.defines),fragmentShader:tl.fragmentShader,vertexShader:tl.vertexShader,uniforms:on.clone(tl.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?o:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=Pt,this.vBlurMaterial=new nt({uniforms:on.clone(Oi.uniforms),defines:Object.assign({},Oi.defines),vertexShader:Oi.vertexShader,fragmentShader:Oi.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?o:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=Pt,this.hBlurMaterial=new nt({uniforms:on.clone(Oi.uniforms),defines:Object.assign({},Oi.defines),vertexShader:Oi.vertexShader,fragmentShader:Oi.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?o:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=Pt,this.materialCopy=new nt({uniforms:on.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:Pt}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=ea,this.materialCopy.blendSrc=Jv,this.materialCopy.blendDst=Ef,this.materialCopy.blendEquation=_i,this.materialCopy.blendSrcAlpha=Zv,this.materialCopy.blendDstAlpha=Ef,this.materialCopy.blendEquationAlpha=_i,this.depthCopy=new nt({uniforms:on.clone(Tu.uniforms),vertexShader:Tu.vertexShader,fragmentShader:Tu.fragmentShader,blending:Pt}),this.fsQuad=new mc(null)}render(e,n,i){if(this.renderToScreen&&(this.materialCopy.blending=Pt,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const s=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=s,this.hBlurMaterial.uniforms.depthCutoff.value=s,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Xl.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ge(0,1)),Xl.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ge(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let o=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,o=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?o.blending=ea:o.blending=Pt,this.renderPass(e,o,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.beautyRenderTarget.setSize(e,n),this.saoRenderTarget.setSize(e,n),this.blurIntermediateRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.depthRenderTarget.setSize(e,n),this.saoMaterial.uniforms.size.value.set(e,n),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,n),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,n),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}Pf.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const YT={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class qs extends cr{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Mt(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Mt(s,o);h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Mt(s,o);p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=YT;this.highPassUniforms=on.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new ge(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Oo;this.copyUniforms=on.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new nt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Mf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new ji,this.fsQuad=new mc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new ge(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=qs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new nt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}qs.BlurDirectionX=new ge(1,0);qs.BlurDirectionY=new ge(0,1);const qT={uniforms:{tDiffuse:{value:null},resolution:{value:new ge(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},KT={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float l = luminance( texel.rgb );

			gl_FragColor = vec4( l, l, l, texel.w );

		}`},QT={uniforms:{tDiffuse:{value:null},resolution:{value:new ge}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		void main() {

			vec2 texel = vec2( 1.0 / resolution.x, 1.0 / resolution.y );

		// kernel definition (in glsl matrices are filled in column-major order)

			const mat3 Gx = mat3( -1, -2, -1, 0, 0, 0, 1, 2, 1 ); // x direction kernel
			const mat3 Gy = mat3( -1, 0, 1, -2, 0, 2, -1, 0, 1 ); // y direction kernel

		// fetch the 3x3 neighbourhood of a fragment

		// first column

			float tx0y0 = texture2D( tDiffuse, vUv + texel * vec2( -1, -1 ) ).r;
			float tx0y1 = texture2D( tDiffuse, vUv + texel * vec2( -1,  0 ) ).r;
			float tx0y2 = texture2D( tDiffuse, vUv + texel * vec2( -1,  1 ) ).r;

		// second column

			float tx1y0 = texture2D( tDiffuse, vUv + texel * vec2(  0, -1 ) ).r;
			float tx1y1 = texture2D( tDiffuse, vUv + texel * vec2(  0,  0 ) ).r;
			float tx1y2 = texture2D( tDiffuse, vUv + texel * vec2(  0,  1 ) ).r;

		// third column

			float tx2y0 = texture2D( tDiffuse, vUv + texel * vec2(  1, -1 ) ).r;
			float tx2y1 = texture2D( tDiffuse, vUv + texel * vec2(  1,  0 ) ).r;
			float tx2y2 = texture2D( tDiffuse, vUv + texel * vec2(  1,  1 ) ).r;

		// gradient value in x direction

			float valueGx = Gx[0][0] * tx0y0 + Gx[1][0] * tx1y0 + Gx[2][0] * tx2y0 +
				Gx[0][1] * tx0y1 + Gx[1][1] * tx1y1 + Gx[2][1] * tx2y1 +
				Gx[0][2] * tx0y2 + Gx[1][2] * tx1y2 + Gx[2][2] * tx2y2;

		// gradient value in y direction

			float valueGy = Gy[0][0] * tx0y0 + Gy[1][0] * tx1y0 + Gy[2][0] * tx2y0 +
				Gy[0][1] * tx0y1 + Gy[1][1] * tx1y1 + Gy[2][1] * tx2y1 +
				Gy[0][2] * tx0y2 + Gy[1][2] * tx1y2 + Gy[2][2] * tx2y2;

		// magnitute of the total gradient

			float G = sqrt( ( valueGx * valueGx ) + ( valueGy * valueGy ) );

			gl_FragColor = vec4( vec3( G ), 1 );

		}`},ZT=Math.PI/180;function JT(t){return t*ZT}const e2={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},t2={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new N}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		#define TAPS_PER_PASS 6.0

		varying vec2 vUv;

		uniform sampler2D tInput;

		uniform vec3 vSunPositionScreenSpace;
		uniform float fStepSize; // filter step size

		void main() {

		// delta from current pixel to "sun" position

			vec2 delta = vSunPositionScreenSpace.xy - vUv;
			float dist = length( delta );

		// Step vector (uv space)

			vec2 stepv = fStepSize * delta / dist;

		// Number of iterations between pixel and sun

			float iters = dist/fStepSize;

			vec2 uv = vUv.xy;
			float col = 0.0;

		// This breaks ANGLE in Chrome 22
		//	- see http://code.google.com/p/chromium/issues/detail?id=153105

		/*
		// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),
		// so i've just left the loop

		"for ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {",

		// Accumulate samples, making sure we dont walk past the light source.

		// The check for uv.y < 1 would not be necessary with "border" UV wrap
		// mode, with a black border color. I don't think this is currently
		// exposed by three.js. As a result there might be artifacts when the
		// sun is to the left, right or bottom of screen as these cases are
		// not specifically handled.

		"	col += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );",
		"	uv += stepv;",

		"}",
		*/

		// Unrolling loop manually makes it work in ANGLE

			float f = min( 1.0, max( vSunPositionScreenSpace.z / 1000.0, 0.0 ) ); // used to fade out godrays

			if ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

		// Should technically be dividing by 'iters but 'TAPS_PER_PASS' smooths out
		// objectionable artifacts, in particular near the sun position. The side
		// effect is that the result is darker than it should be around the sun, as
		// TAPS_PER_PASS is greater than the number of samples actually accumulated.
		// When the result is inverted (in the shader 'godrays_combine this produces
		// a slight bright spot at the position of the sun, even when it is occluded.

			gl_FragColor = vec4( col/TAPS_PER_PASS );
			gl_FragColor.a = 1.0;

		}`},n2={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tColors;
		uniform sampler2D tGodRays;

		uniform float fGodRayIntensity;

		void main() {

		// Since THREE.MeshDepthMaterial renders foreground objects white and background
		// objects black, the god-rays will be white streaks. Therefore value is inverted
		// before being combined with tColors

			gl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );
			gl_FragColor.a = 1.0;

		}`},i2={uniforms:{vSunPositionScreenSpace:{value:new N},fAspect:{value:1},sunColor:{value:new Te(16772608)},bgColor:{value:new Te(0)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		varying vec2 vUv;

		uniform vec3 vSunPositionScreenSpace;
		uniform float fAspect;

		uniform vec3 sunColor;
		uniform vec3 bgColor;

		void main() {

			vec2 diff = vUv - vSunPositionScreenSpace.xy;

		// Correct for aspect ratio

			diff.x *= fAspect;

			float prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );
			prop = 0.35 * pow( 1.0 - prop, 3.0 );

			gl_FragColor.xyz = ( vSunPositionScreenSpace.z > 0.0 ) ? mix( sunColor, bgColor, 1.0 - prop ) : bgColor;
			gl_FragColor.w = 1.0;

		}`};class r2 extends cr{constructor(e,n,i={}){super(),this.scene=e,this.camera=n,this.orthoScene=new M0,this.orthoCamera=new dc(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new tt,this.sunPosition=i.sunPosition||new N(0,1e3,1e3),this.screenSpacePosition=new N,this.rtTextureDepth=new Mt(1,1),this.rtTextureDepthMask=new Mt(1,1),this.rtTextureGodRays1=new Mt(1,1),this.rtTextureGodRays2=new Mt(1,1),this.materialDepth=new Ai;const r=e2;this.godrayMaskUniforms=on.clone(r.uniforms),this.materialGodraysDepthMask=new nt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const s=t2;this.godrayGenUniforms=on.clone(s.uniforms),this.materialGodraysGenerate=new nt({uniforms:this.godrayGenUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader});const o=n2;this.godrayCombineUniforms=on.clone(o.uniforms),this.materialGodraysCombine=new nt({uniforms:this.godrayCombineUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const a=i2;this.godraysFakeSunUniforms=on.clone(a.uniforms),this.materialGodraysFakeSun=new nt({uniforms:this.godraysFakeSunUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Qt(new ha(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,n,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=n,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,n,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,s=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-s/2,this.screenSpacePosition.y-r/2,s,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(n),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,n){this.rtTextureDepth.setSize(e,n),this.rtTextureDepthMask.setSize(e,n);const i=e*this.multiplier,r=n*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var O0=`/* BEGIN HEADER */
uniform float curvature;
uniform float vertexThickness;
uniform float edgeThickness;
uniform float segments;
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

#if DIMENSIONS == 2
uniform mat2 rotationMatrix;
attribute vec2 instancePosition;
attribute vec2 instanceTarget;
attribute vec2 instanceCentroid;
#elif DIMENSIONS == 3
uniform mat3 rotationMatrix;
attribute vec3 instancePosition;
attribute vec3 instanceTarget;
attribute vec3 instanceCentroid;
#elif DIMENSIONS == 4
uniform mat4 rotationMatrix;
attribute vec4 instancePosition;
attribute vec4 instanceTarget;
attribute vec4 instanceCentroid;
#elif DIMENSIONS >= 5
attribute mat3 instancePosition;
attribute mat3 instanceTarget;
attribute mat3 instanceCentroid;

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

attribute vec3 instanceColor;

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  

  #if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor.rgb = instanceColor.rgb;
  #endif

  
  vec3 transformed;

  
  vec3 objectNormal;

  #if HYPERTYPE == 2 
  faceVertex(transformed, objectNormal);
  #elif HYPERTYPE == 1 
  edgeVertex(transformed, objectNormal);
  #elif HYPERTYPE == 0 
  vertexVertex(transformed, objectNormal);
  #elif HYPERTYPE == 3
  if(!nan(iCentroid)) {
    faceVertex(transformed, objectNormal);
  } else if(!nan(iTarget)) {
    edgeVertex(transformed, objectNormal);
  } else {
    vertexVertex(transformed, objectNormal);
  }
  #endif

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}`,s2=`/* BEGIN INCLUDE */

bool nan(in vec2 v) {
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

vec2 xnormalize(in vec2 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec3 xnormalize(in vec3 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.w *= .999999;
  
  
  
  
  
  
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

#if DIMENSIONS == 5
vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec5(v.v / n, v.u / n);
}
#elif DIMENSIONS == 6
vec6 xnormalize(in vec6 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u.x *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec6(v.v / n, v.u / n);
}
#elif DIMENSIONS == 7
vec7 xnormalize(in vec7 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec7(v.v / n, v.u / n);
}
#elif DIMENSIONS == 8
vec8 xnormalize(in vec8 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec8(v.v / n, v.u / n);
}
#elif DIMENSIONS == 9
vec9 xnormalize(in vec9 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.t *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec9(v.v / n, v.u / n, v.t / n);
}
#endif

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

vec3 xproject(in vec3 v) {
  #if PROJECTION == 0 
  
  
  return v.xyz;
  #elif PROJECTION == 1 
  return vec3(v.xy, 0.);
  #elif PROJECTION == 2 
  return vec3(v.xy / v.z, 0.);
  #elif PROJECTION == 3 
  return vec3(v.xy / (v.z - 1.), 1.);
  #elif PROJECTION == 4 
  return vec3(v.xy / v.z, 1. / v.z);
  #elif PROJECTION == 5 
  v.xy /= v.z;
  v.z = 1. / v.z;

  v.yz *= 2. / (1. + v.x);
  v.x = 1.;
  v.z -= 2.;
  return v.zyx;
  #endif

  return v.xyz;
}

#if DIMENSIONS >= 4
vec3 xproject(in vec4 v) {
  #if PROJECTION == 0 
  return v.xyz / (v.w * fov4 + 1.);
  #elif PROJECTION == 1 
  return v.xyz;
  #elif PROJECTION == 2 
  return v.xyz / (v.w * fov4);
  #elif PROJECTION == 3 
  return v.xyz / (v.w * fov4 - 1.);
  #elif PROJECTION == 4 
  return vec3(v.xyz / v.w) / (v.w * fov4 + 1.);
  #elif PROJECTION == 5 
  v.xyz /= v.w;
  v.w = 1. / v.w;

  v.yzw *= 2. / (1. + v.x);
  v.w -= 1.;
  return v.wyx;
  #endif
}
#endif

#if DIMENSIONS >= 5
vec3 xproject(in vec5 v) {
  #if PROJECTION == 0 
  return xproject(v.v / (v.u * fov5 + 1.));
  #elif PROJECTION == 1 
  return xproject(v.v);
  #elif PROJECTION == 2 
  return xproject(v.v / (v.u * fov5));
  #elif PROJECTION == 3 
  return xproject(v.v / (v.u * fov5 - 1.));
  #elif PROJECTION == 4 
  return xproject(v.v);
  #elif PROJECTION == 5 
  return xproject(v.v);
  #endif
}
#endif

#if DIMENSIONS >= 6
vec3 xproject(in vec6 v) {
  #if PROJECTION == 0 
  float nr = v.u.y * fov6 + 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 1 
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 2 
  float nr = v.u.y * fov6;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 3 
  float nr = v.u.y * fov6 - 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 4 
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 5 
  return xproject(vec5(v.v, v.u.x));
  #endif
}
#endif

#if DIMENSIONS >= 7
vec3 xproject(in vec7 v) {
  #if PROJECTION == 0 
  float nr = v.u.z * fov7 + 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 1 
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 2 
  float nr = v.u.z * fov7;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 3 
  float nr = v.u.z * fov7 - 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 4 
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 5 
  return xproject(vec6(v.v, v.u.xy));
  #endif
}
#endif

#if DIMENSIONS >= 8
vec3 xproject(in vec8 v) {
  #if PROJECTION == 0 
  float nr = v.u.w * fov8 + 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 1 
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 2 
  float nr = v.u.w * fov8;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 3 
  float nr = v.u.w * fov8 - 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 4 
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 5 
  return xproject(vec7(v.v, v.u.xyz));
  #endif
}
#endif

#if DIMENSIONS >= 9
vec3 xproject(in vec9 v) {
  #if PROJECTION == 0 
  float nr = v.t * fov9 + 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 1 
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 2 
  float nr = v.t * fov9;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 3 
  float nr = v.t * fov9 - 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 4 
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 5 
  return xproject(vec8(v.v, v.u));
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
/* END INCLUDE */`,o2=`/* BEGIN INCLUDE */

const float TAU = 6.28318530717958647692528676655900576;
const float EPS = .001;
const float SCALING = .001;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

vecN pos;
vecN iPosition;
#if HYPERTYPE > 0
vecN next;
vecN iTarget;
#endif
#if HYPERTYPE > 1
vecN other;
vecN iCentroid;
#endif

vec3 inflate(in vec3 point, in vecN pos, in vec3 norm, in float size, in float min) {
  
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION == 0
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif

  float inv = max(min, 1. / len(pos));

  return size * SCALING * norm * inv + point;
}

#if HYPERTYPE == 2 || HYPERTYPE == 3
void faceVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  iTarget = fromMat(instanceTarget);
  iCentroid = fromMat(instanceCentroid);
  #else
  iPosition = rotationMatrix * instancePosition;
  iTarget = rotationMatrix * instanceTarget;
  iCentroid = rotationMatrix * instanceCentroid;
  #endif

  pos = trix(iCentroid, iPosition, iTarget, uv);
  next = trix(iCentroid, iPosition, iTarget, uv + vec2(EPS, 0.));
  other = trix(iCentroid, iPosition, iTarget, uv + vec2(0., EPS));

  if(length(uv) != 0. || segments > 1.) {
    pos = xnormalize(pos);
    next = xnormalize(next);
    other = xnormalize(other);
  }

  transformed = xproject(pos);
  objectNormal = cross(xproject(next) - transformed, xproject(other) - transformed);
}
#endif

#if HYPERTYPE == 1 || HYPERTYPE == 3
void edgeVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  iTarget = fromMat(instanceTarget);
  #else
  iPosition = rotationMatrix * instancePosition;
  iTarget = rotationMatrix * instanceTarget;
  #endif

  pos = mix(iPosition, iTarget, uv.y);
  next = mix(iPosition, iTarget, uv.y + EPS);
  
  pos = xnormalize(pos);
  next = xnormalize(next);

  transformed = xproject(pos);

  vec3 n = xproject(next) + NOISE; 
  vec3 k = normalize(transformed - n); 

    
    
  float r = (1. - uv.x) * TAU;
  vec3 v = normalize(cross(n, transformed));
  objectNormal = normalize(objectNormal = v * cos(r) + cross(k, v) * sin(r)); 
  transformed = inflate(transformed, pos, objectNormal, edgeThickness, 0.);
}
#endif

#if HYPERTYPE == 0 || HYPERTYPE == 3
void vertexVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  #else
  iPosition = rotationMatrix * instancePosition;
  #endif

  pos = xnormalize(iPosition);
  transformed = xproject(pos);
  objectNormal = normal;
  transformed = inflate(transformed, pos, objectNormal, vertexThickness, .1);
}
#endif
/* END INCLUDE */`;const a2=O0.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],Am=O0.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],l2=s2.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1]+`
`+o2.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],Rm=(t,e)=>t.replace(/\bvecN\b/g,`vec${e}`),Ur=new Set,Ht=(t,e,n="universal")=>{console.log(Ur.size),t=t.clone(),t.vertexColors=![Ai,nt,E0,$s].find(i=>t instanceof i),t._rt=e,t._type=n,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let i=4;i<=e.dimensions;i++)t.uniforms[`fov${i}`]={value:90};return e.dimensions<5&&(t.uniforms.rotationMatrix={value:e.matrix}),t.onBeforeCompile=i=>{const{dimensions:r,projection:s}=t._rt,o=[`#define DIMENSIONS ${r}`,`#define PROJECTION ${N0.indexOf(s)}`,`#define HYPERTYPE ${["vertex","edge","face","universal"].indexOf(t._type)}`];Object.assign(i.uniforms,t.uniforms),t instanceof ji?i.vertexShader=i.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof Ai||t instanceof $s?i.vertexShader=i.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof nt&&(i.vertexShader=i.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",Am+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),i.vertexShader=[...o,Rm(a2,r),Rm(l2,r),i.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",Am)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t._type}_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}`,t.addEventListener("dispose",()=>{Ur.delete(t)}),Ur.add(t),t},c2=()=>{const t=new S0;t.autoClear=!1,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const e=new sn(90,window.innerWidth/window.innerHeight,.01,1e4);e.position.set(0,0,-1),e.up.set(1,0,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const n=new M0;e.updateProjectionMatrix(),n.add(e);const i=new jT(t);i.setPixelRatio(window.devicePixelRatio);const r=new XT(n,e);return i.addPass(r),{composer:i,camera:e,scene:n}},bm=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.customDepthMaterial.dispose(),e.customDistanceMaterial.dispose());const n=li[t.ambiance],{dimensions:i}=t,r=new pc(1,32,32),s=new Fd().copy(r),o=i>4?9:i;s.setAttribute("instancePosition",new Pn(new Float32Array(t.maxVertices*o),o)),s.setAttribute("instanceTarget",new Pn(new Float32Array(t.maxVertices*o),o)),s.setAttribute("instanceCentroid",new Pn(new Float32Array(t.maxVertices*o),o)),s.setAttribute("instanceColor",new Pn(new Float32Array(t.maxVertices*3),3));const a=new Qt(s,Ht(n.vertexMaterial,t,"vertex"));s.attributes.instanceTarget.array.fill(NaN),s.attributes.instanceCentroid.array.fill(NaN),a.geometry.instanceCount=0,a.frustumCulled=!1,a.customDepthMaterial=Ht(new Ai({depthPacking:Js}),t,"vertex"),a.customDistanceMaterial=Ht(new $s,t,"vertex"),a.castShadow=n.shadow,a.name="instanced-vertex",a.visible=t.showVertices,t.scene.add(a)},Pm=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.customDepthMaterial.dispose(),e.customDistanceMaterial.dispose());const n=li[t.ambiance],{dimensions:i,curve:r,segments:s}=t,o=r?s:1,a=new Ud(1,1,1,8,o,!0),l=new Fd().copy(a),c=i>4?9:i;l.setAttribute("instancePosition",new Pn(new Float32Array(t.maxEdges*c),c)),l.setAttribute("instanceTarget",new Pn(new Float32Array(t.maxEdges*c),c)),l.setAttribute("instanceCentroid",new Pn(new Float32Array(t.maxEdges*c),c)),l.setAttribute("instanceColor",new Pn(new Float32Array(t.maxEdges*3),3));const u=new Qt(l,Ht(n.edgeMaterial,t,"edge"));l.attributes.instanceCentroid.array.fill(NaN),u.geometry.instanceCount=0,u.frustumCulled=!1,u.customDepthMaterial=Ht(new Ai({depthPacking:Js}),t,"edge"),u.customDistanceMaterial=Ht(new $s,t,"edge"),u.castShadow=n.shadow,u.name="instanced-edge",u.visible=t.showEdges,t.scene.add(u)},u2=t=>{let e=null,n=t.scene.getObjectByName("instanced-face");n&&(e=n.material.opacity,t.scene.remove(n),n.geometry.dispose(),n.material.dispose(),n.customDepthMaterial.dispose(),n.customDistanceMaterial.dispose());const i=li[t.ambiance],{dimensions:r,curve:s,segments:o}=t,a=new Nn,l=[],c=[],u=[],d=[],h=s?o:1,p=1/h;for(let f=0;f<h+1;f++)for(let v=0;v<f+1;v++)c.push((2*v-f)*p/2,f*p,0),u.push(0,0,1),d.push(p*v,1-p*f);for(let f=1;f<h+1;f++)for(let v=0;v<f;v++){const x=f*(f+1)/2+v,M=f*(f-1)/2+v;if(l.push(M,x,x+1),f<h){const S=(f+1)*(f+2)/2+v;l.push(S+1,x+1,x)}}a.setIndex(l),a.setAttribute("position",new It(c,3)),a.setAttribute("normal",new It(u,3)),a.setAttribute("uv",new It(d,2));const _=new Fd().copy(a),g=r>4?9:r;_.setAttribute("instanceCentroid",new Pn(new Float32Array(t.maxFaces*g),g)),_.setAttribute("instancePosition",new Pn(new Float32Array(t.maxFaces*g),g)),_.setAttribute("instanceTarget",new Pn(new Float32Array(t.maxFaces*g),g)),_.setAttribute("instanceColor",new Pn(new Float32Array(t.maxFaces*3),3));const m=new Qt(_,Ht(i.faceMaterial,t,"face"));m.geometry.instanceCount=0,m.frustumCulled=!1,m.customDepthMaterial=Ht(new Ai({depthPacking:Js}),t,"face"),m.customDistanceMaterial=Ht(new $s,t,"face"),m.name="instanced-face",m.visible=t.showFaces,m.renderOrder=1,e&&(m.material.opacity=e),t.scene.add(m)},f2=(t,e=null)=>{const n=li[t.ambiance],i=t.scene.getObjectByName("instanced-vertex"),r=i.geometry.attributes.instancePosition.array,{dimensions:s}=t;let o=e?e[0]:0,a=e?e[1]:t.vertices.length;const l=s>4?9:s;i.geometry.instanceCount=a;for(let c=o;c<a;c++){let u=t.vertices[c].vertex;s>4&&(u=Xi(t.matrix,u));for(let p=0;p<s;p++)r[c*l+p]=u[p];const d=i.geometry.attributes.instanceColor.array,h=n.color(t.vertices[c],"vertex",s);d[c*3+0]=h.r,d[c*3+1]=h.g,d[c*3+2]=h.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},d2=(t,e=null)=>{const n=li[t.ambiance],i=t.scene.getObjectByName("instanced-edge"),r=i.geometry.attributes.instancePosition.array,s=i.geometry.attributes.instanceTarget.array,{dimensions:o}=t;let a=e?e[0]:0,l=e?e[1]:t.edges.length;const c=o>4?9:o;i.geometry.instanceCount=l;for(let u=a;u<l;u++){const d=t.edges[u];let h=t.vertices[d.start].vertex,p=t.vertices[d.end].vertex;o>4&&(h=Xi(t.matrix,h),p=Xi(t.matrix,p));for(let m=0;m<o;m++)r[u*c+m]=h[m],s[u*c+m]=p[m];const _=i.geometry.attributes.instanceColor.array,g=n.color(d,"edge",o);_[u*3+0]=g.r,_[u*3+1]=g.g,_[u*3+2]=g.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},h2=(t,e=null)=>{const n=li[t.ambiance],i=t.scene.getObjectByName("instanced-face"),r=i.geometry.attributes.instanceCentroid.array,s=i.geometry.attributes.instancePosition.array,o=i.geometry.attributes.instanceTarget.array,{dimensions:a}=t;let l=e?e[0]:0,c=e?e[1]:t.faces.length,u=0;for(let h=0;h<l;h++){const p=t.faces[h].vertices.length;u+=p<3?0:p===3?1:p}const d=a>4?9:a;for(let h=l;h<c;h++){const p=t.faces[h];if(p.vertices.length<3)continue;let _;if(p.vertices.length===3)_=[t.vertices[p.vertices[0]].vertex,t.vertices[p.vertices[1]].vertex,t.vertices[p.vertices[2]].vertex],a>4&&(_[0]=Xi(t.matrix,_[0]),_[1]=Xi(t.matrix,_[1]),_[2]=Xi(t.matrix,_[2]));else{const g=new Array(p.vertices.length);for(let f=0;f<p.vertices.length;f++)g[f]=t.vertices[p.vertices[f]].vertex,a>4&&(g[f]=Xi(t.matrix,g[f]));const m=new Array(a).fill(0);for(let f=0;f<g.length;f++){const v=g[f];for(let x=0;x<a;x++)m[x]+=v[x]}for(let f=0;f<a;f++)m[f]/=g.length;_=new Array(g.length);for(let f=0;f<g.length;f++)_[f]=[m,g[f],g[(f+1)%g.length]]}for(let g=0;g<_.length;g++){let[m,f,v]=_[g];p.word.length%2===(t.curvature>0?0:1)&&([f,v]=[v,f]);for(let S=0;S<a;S++)r[u*d+S]=m[S],s[u*d+S]=f[S],o[u*d+S]=v[S];const x=i.geometry.attributes.instanceColor.array,M=n.color(p,"face",a);x[u*3+0]=M.r,x[u*3+1]=M.g,x[u*3+2]=M.b,u++}}i.geometry.instanceCount=u,i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceCentroid.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},Cu=(t,e)=>{const n=t.scene.getObjectByName(`instanced-${e}`);n.visible=t[e==="vertex"?"showVertices":e==="edge"?"showEdges":"showFaces"]},Lf=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const n=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]],faces:[t.ranges[0].faces[0],t.ranges[t.currentOrder-1].faces[1]]};t.scene.getObjectByName("instanced-vertex").visible&&f2(t,n.vertices),t.scene.getObjectByName("instanced-edge").visible&&d2(t,n.edges),t.scene.getObjectByName("instanced-face").visible&&h2(t,n.faces),t.composer.render(),document.title=`Honeyball^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges, ${t.faces.length} faces`},p2=(t,e,n)=>{e.fov=n,e.updateProjectionMatrix(),t.render()},Rr=new jl(qT),m2=(t,e,n)=>{const i=t.renderer.getDrawingBufferSize(new ge),r=new Mt(i.width,i.height,{samples:e?n:0});if(t.reset(r),t.removePass(Rr),!e){const s=t.renderer.getPixelRatio();Rr.material.uniforms.resolution.value.x=1/(window.innerWidth*s),Rr.material.uniforms.resolution.value.y=1/(window.innerHeight*s),t.addPass(Rr)}t.render()},g2=t=>{const e=li[t.ambiance],{scene:n,composer:i,camera:r}=t,s=t.scene.getObjectByName("instanced-vertex"),o=t.scene.getObjectByName("instanced-edge"),a=t.scene.getObjectByName("instanced-face");s.material.dispose(),o.material.dispose(),a.material.dispose(),s.material=Ht(e.vertexMaterial,t,"vertex"),o.material=Ht(e.edgeMaterial,t,"edge"),a.material=Ht(e.faceMaterial,t,"face"),e.env?n.environment=e.env:n.environment=null,typeof e.background!="number"?n.background=e.background:(n.background=null,i.renderer.setClearColor(new Te(e.background),1));const l=[];n.traverse(h=>{h.isLight&&l.push(h)}),l.forEach(h=>{h.parent.remove(h)});let c=n.getObjectByName("ground");c&&(c.geometry.dispose(),c.material.dispose(),n.remove(c)),e.shadow&&(i.renderer.shadowMap.type=Rd,e.ground==="sphere"?c=new Qt(new pc(20,32,32),new Mr({color:16777215,side:Jt,depthWrite:!1})):e.ground==="plane"&&(c=new Qt(new ha(1e3,1e3),new Mr({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),c.rotation.x=-Math.PI/2,c.position.y=-3),c.name="ground",c.receiveShadow=!0,n.add(c)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=Qv,s.castShadow=e.shadow,o.castShadow=e.shadow;const u=e.shadow?h=>{h.shadow&&(h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=r.near,h.shadow.camera.far=r.far,h.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(h=>{u(h),n.add(h)}),(e.cameraLights||[]).forEach(h=>{u(h),r.add(h)});const d=e.fx||["copy"];if(i.renderer.toneMapping=d.includes("bloom")?e0:oi,i.renderer.toneMappingExposure=(d.includes("bloom"),1),i.passes.slice(1).forEach(h=>{i.removePass(h),h.dispose()}),d.forEach(h=>{if(h==="copy")i.addPass(i.copyPass);else if(h==="sao"){const p=new Pf(n,r,!1,!0);p.depthMaterial=Ht(p.depthMaterial,t),p.normalMaterial=Ht(p.normalMaterial,t),p.params.output=Pf.OUTPUT.Default,p.params.saoBias=.5,p.params.saoIntensity=1e-6,p.params.saoScale=10,p.params.saoKernelRadius=50,p.params.saoMinResolution=0,p.params.saoBlur=!0,p.params.saoBlurRadius=8,p.params.saoBlurStdDev=4,p.params.saoBlurDepthCutoff=.01,i.addPass(p)}else if(h==="bokeh"){const p=new HT(n,r,{focus:.5,aperture:.005,maxblur:.005});p.materialDepth=Ht(p.materialDepth,t),i.addPass(p)}else if(h==="sobel"){const p=new jl(KT);i.addPass(p);const _=new jl(QT);_.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,_.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(_)}else if(h==="bloom"){const p=new qs(new ge(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(p),a.material.opacity=t.dimensions===3?.075:.025}else if(h==="godray"){const p=new r2(n,r);p.materialDepth=Ht(p.materialDepth,t),i.addPass(p)}}),!t.msaa){const h=i.renderer.getPixelRatio();Rr.material.uniforms.resolution.value.x=1/(window.innerWidth*h),Rr.material.uniforms.resolution.value.y=1/(window.innerHeight*h),i.addPass(Rr)}F0(t),i.render()},F0=t=>{const{dimensions:e,curvature:n,projection:i,vertexThickness:r,edgeThickness:s}=t,o=t.curve?t.segments:1,a=Ur.values();for(let l=0;l<Ur.size;l++){const c=a.next().value;c.uniforms.curvature.value=n,c.uniforms.vertexThickness.value=r,c.uniforms.edgeThickness.value=s,c.needsUpdate=e!==c._rt.dimensions||i!==c._rt.projection,c._rt=t,c.uniforms.segments.value=o;for(let u=4;u<=e;u++)c.uniforms[`fov${u}`]||(c.uniforms[`fov${u}`]={value:1}),c.uniforms[`fov${u}`].value=RT(JT(t[`fov${u}`])*.5);t.dimensions<5&&(c.uniforms.rotationMatrix.value=A0(t.matrix))}},Lm=.95,Gn=(t,e,n,i,r,s,o)=>{wm(r,No(Tm(t,n*2,i.combinations,s,o),r)),wm(r,No(Tm(e,n*2+1,i.combinations,s,o),r))},v2=(t,e,n,i,r)=>{const{code:s}=t;if(t.target!==document.body)return;const o=.01;if(s==="ArrowLeft"||s==="KeyA")Gn(-o,0,0,e,n,i,r);else if(s==="ArrowRight"||s==="KeyD")Gn(o,0,0,e,n,i,r);else if(s==="ArrowUp"||s==="KeyW")Gn(0,-o,1,e,n,i,r);else if(s==="ArrowDown"||s==="KeyS")Gn(0,o,1,e,n,i,r);else if(s==="PageUp"||s==="KeyQ")Gn(-o,0,2,e,n,i,r);else if(s==="PageDown"||s==="KeyE")Gn(o,0,2,e,n,i,r);else if(s==="Digit1")Gn(0,-o,2,e,n,i,r);else if(s==="Digit3")Gn(0,o,2,e,n,i,r);else if(s==="KeyZ")Gn(-o,0,3,e,n,i,r);else if(s==="KeyC")Gn(o,0,3,e,n,i,r);else return;return!0},Dm=t=>{if(t.dimensions>4)Lf(t);else{const e=Ur.values();for(let n=0;n<Ur.size;n++){const i=e.next().value;i.uniforms.rotationMatrix.value=A0(t.matrix)}t.composer.render()}},x2=(t,e,n)=>{const i=bf(s=>n({matrix:s}),100),r=bf(s=>n({zoom:s}),100);he.useEffect(()=>{t.camera.position.z=-t.zoom},[t.camera,t.zoom]),he.useEffect(()=>{const s=new Map;let o=null;const a=()=>IT(...[...s.values()].slice(0,2).reduce((u,d)=>d.map((h,p)=>h-u[p]))),l=u=>{if(!s.has(u.pointerId))return;let d=s.get(u.pointerId);const h=[(u.clientX-d[0])/window.innerHeight,(u.clientY-d[1])/window.innerHeight];if(s.set(u.pointerId,[u.clientX,u.clientY]),s.size===2){if(o===null){o=a();return}const _=a();t.camera.position.z*=o/_,o=_,t.composer.render(),r(-t.camera.position.z);return}let p=t.controlsShift;!p&&u.shiftKey?p=1:!p&&u.altKey?p=2:!p&&u.ctrKey?p=3:!p&&u.metaKey&&(p=4),s.size>2&&(p+=s.size-2),Gn(Ys*h[0],-Ys*h[1],p,e,t.matrix,t.dimensions,t.curvature),Dm(t),i(t.matrix)},c=u=>{if(u.button!==0||u.target.tagName!=="CANVAS")return;s.set(u.pointerId,[u.clientX,u.clientY]);const d=h=>{o=null,s.delete(h.pointerId),document.removeEventListener("pointermove",l)};document.addEventListener("pointermove",l),document.addEventListener("pointerup",d,{once:!0})};return document.addEventListener("pointerdown",c),()=>document.removeEventListener("pointerdown",c)},[e,t,t.matrix,i,r]),he.useEffect(()=>{const s=o=>{v2(o,e,t.matrix,t.dimensions,t.curvature,t.controlsShift)&&(Dm(t),i(t.matrix))};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[e,t,i]),he.useEffect(()=>{const s=o=>{t.camera.position.z*=o.deltaY<0?Lm:1/Lm,t.composer.render(),r(-t.camera.position.z)};return document.addEventListener("wheel",s),()=>{document.removeEventListener("wheel",s)}},[t.camera.position,t.composer,r]),he.useEffect(()=>{const s=()=>{const o=-t.camera.position.z,a=o<.5?5:o<2?.25:1;t.camera.position.z=-a,t.composer.render(),r(a)};return t.composer.renderer.domElement.addEventListener("dblclick",s),()=>{t.composer.renderer.domElement.removeEventListener("dblclick",s)}},[t.camera,t.composer,r])};function _2({runtime:t,rotations:e,updateParams:n}){return x2(t,e,n),null}const y2=t=>{const{camera:e,composer:n}=t,i=1,r=window.innerWidth*i,s=window.innerHeight*i,o=n.renderer.domElement;if(o.width!==r||o.height!==s){e.aspect=r/s,e.zoom=Math.min(1,r/s),e.updateProjectionMatrix(),n.renderer.setSize(r,s),n.setSize(r,s);const a=n.renderer.getPixelRatio();n.setPixelRatio(a);const l=r*a,c=s*a;n.passes.forEach(u=>{var d,h;if((h=(d=u.material)==null?void 0:d.uniforms)!=null&&h.resolution){let p=l,_=c;u.material.uniforms.resolution.value.x<=1&&(p=1/p,_=1/_),u.material.uniforms.resolution.value.x=p,u.material.uniforms.resolution.value.y=_}u.resolution&&(u.resolution=new ge(r,s))}),o.style.width=r+"px",o.style.height=s+"px"}n.render()},S2=(t,e)=>{he.useEffect(()=>{e(n=>(m2(n.composer,n.msaa,n.msaaSamples),n))},[t.msaa,t.msaaSamples,t.composer,e]),he.useEffect(()=>{e(n=>(p2(n.composer,n.camera,n.fov3),n))},[t.fov3,t.camera,t.composer,e]),he.useEffect(()=>{e(n=>(bm(n),Pm(n),u2(n),n))},[t.dimensions,t.curve,t.segments,e]),he.useEffect(()=>{e(n=>(n.vertices.length&&(console.warn(`Extending vertex buffer to ${n.vertices.length}`),bm(n)),n))},[t.maxVertices,e]),he.useEffect(()=>{e(n=>(n.edges.length&&(console.warn(`Extending edge buffer to ${n.edges.length}`),Pm(n)),n))},[t.maxEdges,e]),he.useEffect(()=>{e(n=>(g2(n),n))},[t.ambiance,e]),he.useEffect(()=>{e(n=>(Cu(n,"vertex"),Cu(n,"edge"),Cu(n,"face"),n))},[t.showVertices,t.showEdges,t.showFaces,e]),he.useEffect(()=>{e(n=>{if(!(n.currentOrder<0))return Lf(n,n.currentOrder-1),n})},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges,t.showFaces,e]),he.useEffect(()=>{e(n=>(Lf(n),n))},[t.ambiance,t.showVertices,t.showEdges,t.showFaces,t.maxVertices,t.maxEdges,t.curve,t.segments,t.matrix,e]),he.useEffect(()=>{e(n=>(F0(n),n.composer.render(),n))},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges,t.matrix,e]),he.useEffect(()=>{const n=()=>{y2(t)};return window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[t])};function M2({runtime:t,setRuntime:e}){return S2(t,e),null}function E2(){return new Worker(""+new URL("knuthbendix-tiling.worker-dbafa931.js",import.meta.url).href)}function w2(){return new Worker(""+new URL("toddcoxeter-tiling.worker-f1092b89.js",import.meta.url).href)}function T2(){return new Worker(""+new URL("fundamental.worker-575cdf7f.js",import.meta.url).href)}let Au=class k0{constructor(e,n){this.workerClass=n,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=k0.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((n,i)=>{const r=o=>{if(o.data.uuid!==e.uuid)return;const a=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${a}ms`),this.processing--,this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",s),o.data.error){i(o.data.error);return}n(o.data)},s=o=>{this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",s),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=fs(0,this.processing),console.error(`Can't call web worker ${this.name}`,o))};this.worker.addEventListener("message",r),this.worker.addEventListener("error",s)})}};const C2=()=>Object.values(z0).filter(t=>t.processing>0).forEach(t=>t.kill()),z0={knuthbendix:new Au("knuthbendix",E2),toddcoxeter:new Au("toddcoxeter",w2),fundamental:new Au("toddcoxeter",T2)},Im=async(t,e,n)=>{const i=z0[t.grouper.replace(/^auto-/,"")];if(t.currentOrder===0&&(C2(),e.current=!1),e.current===t.currentOrder){console.log("already processing at ",t.currentOrder);return}try{e.current=t.currentOrder;const{vertices:r,edges:s,faces:o,order:a}=await i.process({order:t.currentOrder,coxeter:t.coxeter,curvature:t.curvature,stellation:t.stellation,mirrors:t.mirrors,mirrorsPlanes:t.mirrorsPlanes,rootVertex:t.rootVertex,dimensions:t.dimensions});e.current=!1,n(l=>l.currentOrder!==a?(console.warn("Mismatched order, ignoring",l.currentOrder,a),{...l,currentOrder:0,vertices:[],edges:[],faces:[],ranges:[],renderError:null,processing:!0,error:"Mismatch Order"}):{...l,ranges:[...l.ranges,{vertices:[l.vertices.length,l.vertices.length+r.length],edges:[l.edges.length,l.edges.length+s.length],faces:[l.faces.length,l.faces.length+o.length]}],vertices:l.vertices.concat(r),edges:l.edges.concat(s),faces:l.faces.concat(o),currentOrder:a+1,processing:!1,error:null})}catch(r){e.current=!1,console.error(r);const s={...t,currentOrder:t.order,error:r.message,processing:!1};n(s)}},A2=(t,e)=>{const n=he.useRef(!1);he.useEffect(()=>{e(i=>i.order<i.currentOrder?{...i,currentOrder:i.order}:i)},[t.order,t.currentOrder,e]),he.useEffect(()=>{e(i=>{const r=MT(i.coxeter,i.stellation),s=ET(r);if(!s)return{...i,spaceType:s};const o=s==="finite"?1:s==="affine"?0:-1,a=i.grouper===""||i.grouper.startsWith("auto-")?"auto-toddcoxeter":i.grouper,l=AT(r,o,i.centered===null?a.replace(/^auto-/,"")==="toddcoxeter"&&o<=0||r.some(d=>d.some(h=>h===-1)):i.centered),c=D0(i.mirrors,l,o),u={...i,currentOrder:0,grouper:a,vertices:[],edges:[],faces:[],ranges:[],spaceType:s,curvature:o,mirrorsPlanes:l,rootVertex:c,renderError:null,processing:!0,error:null};return Im(u,n,e),u})},[t.dimensions,t.coxeter,t.mirrors,t.stellation,t.centered,t.grouper,e]),he.useEffect(()=>{e(i=>{var r;return i.order<=i.currentOrder?i:(r=i.ranges)!=null&&r[i.order]?{...i,currentOrder:i.order,askedOrder:null}:(Im(i,n,e),{...i,error:null,processing:!0})})},[e,t.order,t.currentOrder]),he.useEffect(()=>{e(i=>i.vertices.length>i.maxVertices?{...i,maxVertices:i.vertices.length}:i)},[t.vertices,e]),he.useEffect(()=>{e(i=>i.edges.length>i.maxEdges?{...i,maxEdges:i.edges.length}:i)},[t.edges,e]),he.useEffect(()=>{e(i=>{let r=0;for(let s=0;s<i.faces.length;s++){const o=i.faces[s].vertices.length;r+=o===3?1:o}return r>i.maxFaces?{...i,maxFaces:r}:i})},[t.faces,e])};function R2({runtime:t,setRuntime:e}){return A2(t,e),null}function b2({runtime:t,setRuntime:e,rotations:n,updateParams:i}){window.rt=t;const r=he.useCallback(s=>{e(o=>({...o,renderError:s.message}))},[e]);return he.useEffect(()=>()=>{t.curvature!==null&&i({matrix:sr(t.dimensions)})},[t.curvature]),b.jsx(b.Fragment,{children:b.jsxs(BT,{error:t.renderError,onError:r,children:[b.jsx(R2,{runtime:t,setRuntime:e}),b.jsx(M2,{runtime:t,setRuntime:e}),b.jsx(_2,{runtime:t,rotations:n,updateParams:i})]})})}function Nm({allowNull:t,name:e,value:n,onChange:i,...r}){const s=he.useCallback(a=>{let{name:l,checked:c}=a.target,u;t?u=n===!1?!0:n?null:!1:u=c,i(l,u)},[t,i,n]),o=he.useRef(null);return he.useLayoutEffect(()=>{t&&o.current&&(n===null?o.current.indeterminate=!0:o.current.indeterminate=!1)},[n,t]),b.jsx("input",{type:"checkbox",ref:o,name:e,checked:n||!1,onChange:s})}const P2=(t,e,n,i,r)=>{let s=!0,o=0,a=1;if(["inf","Infinity"].includes(t)&&(t="∞"),t==="∞"&&r)o=1/0;else if(t.includes("/")){const[l,c]=t.split("/");o=l===""?"":+l,a=c===""?"":+c,a===1&&(t=`${o}`),s=!(o===""||isNaN(o)||o<e||o>n||o%i!==0||isNaN(a)||a<e||a>n||a%i!==0)}else o=t===""?"":+t,s=!(o===""||isNaN(o)||o<e||o>n||o%i!==0);return{valid:s,raw:t,value:o,fraction:a}};function gi({name:t,label:e,min:n=0,max:i=1/0,step:r=1,value:s,allowInfinity:o,fraction:a,fractionName:l,toggler:c,togglerName:u,onChange:d,...h}){const p=he.useCallback(()=>s===1/0&&o?"∞":l&&a>1?`${s}/${a}`:`${s}`,[o,a,l,s]),[_,g]=he.useState(p);he.useEffect(()=>{g(p())},[o,p,a,l,s]);const[m,f]=he.useState(!0),v=he.useCallback(R=>{const P=P2(R,n,i,r,o);g(P.raw),f(P.valid),P.valid&&(d(t,P.value),l&&d(l,P.fraction))},[o,l,i,n,t,d,r]),x=he.useCallback(()=>{if(!m){v(`${n}`);return}_!=="∞"&&(_===`${n}`?o&&v("∞"):_.includes("/")?v((+_.split("/")[0]-r).toString()):v((+_-r).toString()))},[o,n,_,r,v,m]),M=he.useCallback(()=>{if(!m){v(`${n}`);return}_==="∞"?o&&v(`${n}`):_.includes("/")?v((+_.split("/")[0]+r).toString()):v((+_+r).toString())},[o,n,_,r,v,m]),S=R=>{const P=R.target.value;v(P)},C=R=>{d(R.target.name,R.target.checked)};return b.jsxs("label",{className:`number ${m?"valid":"invalid"}`,children:[e&&b.jsx("span",{className:"number-label",children:e}),u&&b.jsx("input",{type:"checkbox",name:u,checked:c,onChange:C}),(!u||c)&&b.jsxs("div",{className:"number-control",children:[b.jsx("input",{type:"text",name:t,value:_,style:{width:`${_.length+.25}ch`},onChange:S,...h}),b.jsx("button",{className:"plusminus minus",onClick:x,tabIndex:-1,children:"−"}),b.jsx("button",{className:"plusminus plus",onClick:M,tabIndex:-1,children:"+"})]})]})}function L2({i:t,j:e,value:n,stellation:i,onChange:r}){return b.jsx("div",{className:"coxeter-value",children:b.jsx(gi,{name:`coxeter-${t}-${e}`,min:2,step:1,value:n,onChange:r,allowInfinity:!0,fraction:i,fractionName:`stellation-${t}-${e}`})})}function Um(){return b.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:b.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:"1",stroke:"currentColor"})})}const gl=6,ds=14,vl={active:b.jsxs(b.Fragment,{children:[b.jsx("circle",{cx:"16",cy:"16",r:ds}),b.jsx("circle",{cx:"16",cy:"16",r:gl,fill:"currentColor"})]}),inactive:b.jsx(b.Fragment,{children:b.jsx("circle",{cx:"16",cy:"16",r:gl,fill:"currentColor"})}),snub:b.jsx(b.Fragment,{children:b.jsx("circle",{cx:"16",cy:"16",r:ds})}),holosnub:b.jsxs(b.Fragment,{children:[b.jsx("circle",{cx:"16",cy:"16",r:ds}),b.jsx("circle",{cx:"16",cy:"16",r:gl})]}),custom:b.jsxs(b.Fragment,{children:[b.jsx("circle",{cx:"16",cy:"16",r:ds}),b.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:b.jsxs(b.Fragment,{children:[b.jsx("circle",{cx:"16",cy:"16",r:ds}),b.jsx("path",{d:"M 6 6 L 26 26"}),b.jsx("path",{d:"M 6 26 L 26 6"})]}),void:b.jsxs(b.Fragment,{children:[b.jsx("path",{d:"M 10 10 L 22 22"}),b.jsx("path",{d:"M 10 22 L 22 10"})]})};function D2({index:t,value:e,extended:n,onChange:i}){const r=T0(e),s=()=>{const a=Object.keys(vl),l=a.indexOf(r),c=n?a[(l+1)%a.length]:r==="active"?"inactive":"active",u=Em[c];i(t,u)},o=a=>{const l=Object.keys(vl),c=l.indexOf(r),u=l[(l.length+c+zd(a.deltaY))%l.length],d=Em[u];i(t,d)};return b.jsxs("div",{className:"coxeter-node",title:r,children:[b.jsx("svg",{className:`coxeter-graphic ${r}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:s,onWheel:o,children:vl[r]}),r==="custom"&&b.jsx("input",{type:"number",value:e,step:".01",style:{width:`${e.toString().length+1.5}ch`},onChange:a=>i(t,a.target.value)})]})}function I2({dimensions:t,coxeter:e,mirrors:n,stellation:i,extended:r,onChange:s}){const o=he.useCallback(()=>{if(s("extended",!r),r){const c=e.map(u=>u.slice());for(let u=0;u<t;u++)for(let d=0;d<u-1;d++)c[u][d]=2,c[d][u]=2;s("coxeter",c)}},[r,s,e,t]),a=he.useCallback((c,u)=>{if(c.startsWith("coxeter")){const[d,h]=c.split("-").slice(1).map(_=>+_),p=e.map(_=>_.slice());p[d][h]=u,p[h][d]=u,s("coxeter",p)}if(c.startsWith("stellation")){const[d,h]=c.split("-").slice(1).map(_=>+_),p=i.map(_=>_.slice());p[d][h]=u,p[h][d]=u,s("stellation",p)}},[e,s,i]),l=he.useCallback((c,u)=>{const d=n.slice();d[c]=u,s("mirrors",d)},[n,s]);return b.jsxs("aside",{className:"coxeters",children:[b.jsx("div",{className:"coxeter-matrix",children:[...Array(t).keys()].map(c=>b.jsxs(he.Fragment,{children:[c>0&&b.jsx("div",{className:"coxeter-column",children:[...Array(c).keys()].map(u=>(r||c===u+1)&&b.jsx(L2,{i:c,j:u,value:e[c][u],stellation:i[c][u],onChange:a},`${c}x${u}`))}),c>0&&b.jsx(Um,{}),b.jsx(D2,{index:c,value:n[c],extended:r,onChange:l}),c<t-1&&b.jsx(Um,{})]},c))}),b.jsx("div",{className:"coxeter-toggles",children:b.jsx("button",{className:"button",onClick:o,title:"extended mode",children:r?"▲":"▼"})})]})}function et({type:t,dimensions:e}){return b.jsxs(b.Fragment,{children:[b.jsx("span",{className:"space",children:t===null||t==="indefinite"?"𝕏":t==="affine"?"𝔼":t==="finite"?"𝕊":"ℍ"}),e?b.jsx("sup",{children:e-1}):null,t!=null&&t.startsWith("hyperbolic")?b.jsx("sub",{children:{compact:" ",paracompact:"*"}[t.replace(/^hyperbolic-/,"")]||(t.startsWith("hyperbolic-lorentzian")?`L${t.replace(/^hyperbolic-lorentzian-level-/,"")}`:null)}):null]})}const N2=(...t)=>{if(Array.isArray(t[0]))return{coxeter:t,dimensions:t.length,extended:!0};const e=t.length+1;return{coxeter:new Array(e).fill().map((i,r)=>new Array(e).fill().map((s,o)=>r===o?1:r===o+1||o===r+1?t[tr(r,o)]:2)),dimensions:e}},U2=(...t)=>{const e=t.length+1;return{stellation:new Array(e).fill().map((i,r)=>new Array(e).fill().map((s,o)=>r===o?1:r===o+1||o===r+1?t[tr(r,o)]:1))}},fe=(t,e,n,i)=>{const r=N2(...t),{dimensions:s}=r,o={...Wl,...r,showVertices:s<=3,showFaces:s<=4,curve:s>3,grouper:"toddcoxeter",ambiance:"colorful",matrix:sr(s),...i||{}};if(e?o.mirrors=e:o.mirrors=new Array(s).fill().map((a,l)=>l===0?1:0),n?o.stellation=U2(...n).stellation:o.stellation=new Array(s).fill().map((a,l)=>new Array(s).fill(1)),s>4)for(let a=4;a<=s;a++)o[`fov${a}`]=(10-a)*10;return o},Re=(t,e,n,i)=>({...fe(t,e,n),ambiance:"plain",showVertices:!1,curve:!0,...i}),Fi=(t,e,n,i)=>({...fe(t,e,n),ambiance:"neon",showFaces:!1,showVertices:!1,grouper:"",edgeThickness:10,...i}),ze=(t,e,n,i)=>({...fe(t,e,n),ambiance:"neon",showFaces:!1,showVertices:!1,curve:!0,grouper:"",edgeThickness:10,...i}),cs=t=>{if(t===4)return{"":[1,0,0,0],Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(t===5)return{"":[1,0,0,0,0],Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(t===6)return{"":[1,0,0,0,0,0],Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(t===7)return{"":[1,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(t===8)return{"":[1,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(t===9)return{"":[1,0,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},O2=[{type:"title",content:b.jsxs(b.Fragment,{children:[b.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:4})," Tesseract"]}),params:fe([4,3,3],[1,0,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon",centered:!1})},{name:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:Re([7,3],[1,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon"})},{name:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic",dimensions:3})," Ideal triangles"]}),params:Re([[1,1/0,1/0],[1/0,1,1/0],[1/0,1/0,1]],[1,1,1],null,{grouper:"fundamental",showVertices:!1,showFaces:!0,curve:!0,segments:256,ambiance:"neon"})},{name:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic",dimensions:4})," Ideal tetrahedron"]}),params:Re([3,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:256,ambiance:"pure"})},{name:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:ze([5,3,4],[1,0,0,0])},{name:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic",dimensions:4})," Ideal Pentahedron"]}),params:Re([5,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:128,ambiance:"pure"})},{name:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:4})," Flat Torus"]}),params:fe([32,2,32],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon"})},{type:"title",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite"})," Spherical space"]})},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:fe([3,3])},{name:"Cube",params:fe([4,3])},{name:"Octahedron",params:fe([3,4])},{name:"Dodecahedron",params:fe([5,3])},{name:"Icosahedron",params:fe([3,5])},{name:"Cuboctahedron",params:fe([4,3],[0,1,0])},{name:"Icosidodecahedron",params:fe([5,3],[0,1,0])},{name:"Truncated Tetrahedron",params:fe([3,3],[1,1,0])},{name:"Truncated Cube",params:fe([4,3],[1,1,0])},{name:"Truncate Octahedron",params:fe([3,4],[1,1,0])},{name:"Truncate Dodecahedron",params:fe([5,3],[1,1,0])},{name:"Truncate Icosahedron",params:fe([3,5],[1,1,0])},{name:"Rhombicuboctahedron",params:fe([4,3],[1,0,1])},{name:"Rhombicosidodecahedron",params:fe([5,3],[1,0,1])},{name:"Truncated Cuboctahedron",params:fe([4,3],[1,1,1])},{name:"Truncated Icosidodecahedron",params:fe([5,3],[1,1,1])},{name:"Snub Cube",params:fe([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:fe([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:fe([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:fe([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:fe([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:fe([5,3],[1,0,0],[2,1])},{name:"Stellated Octahedron",params:fe([2,2],["ß","ß","ß"])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:4})," Polychora"]})},...Object.entries(cs(4)).map(([t,e])=>[{name:`${t?`${t} `:""}5-cell`,params:fe([3,3,3],e)},{name:`${t?`${t} `:""}8-cell`,params:fe([4,3,3],e)},{name:`${t?`${t} `:""}16-cell`,params:fe([3,3,4],e)},{name:`${t?`${t} `:""}24-cell`,params:fe([3,4,3],e)},{name:`${t?`${t} `:""}120-cell`,params:fe([5,3,3],e)},{name:`${t?`${t} `:""}600-cell`,params:fe([3,3,5],e)}]).flat(),{name:"Snub 24-cell",params:fe([3,4,3],["s","s",0,0])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:5})," Polytera"]})},...Object.entries(cs(5)).map(([t,e])=>[{name:`${t?`${t} `:""}5-simplex`,params:fe([3,3,3,3],e)},{name:`${t?`${t} `:""}5-cube`,params:fe([4,3,3,3],e)},{name:`${t?`${t} `:""}5-orthoplex`,params:fe([3,3,3,4],e)},{name:`${t?`${t} `:""}5-demicube`,params:fe([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]],e)}]).flat(),{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:6})," Polypeta"]})},...Object.entries(cs(6)).map(([t,e])=>[{name:`${t?`${t} `:""}6-simplex`,params:fe([3,3,3,3,3],e)},{name:`${t?`${t} `:""}6-cube`,params:fe([4,3,3,3,3],e)},{name:`${t?`${t} `:""}6-orthoplex`,params:fe([3,3,3,3,4],e)},{name:`${t?`${t} `:""}6-demicube`,params:fe([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]],e)}]).flat(),{name:b.jsxs(b.Fragment,{children:["2",b.jsx("sub",{children:"21"})]}),params:fe([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:b.jsxs(b.Fragment,{children:["1",b.jsx("sub",{children:"22"})]}),params:fe([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:7})," Polyexa"]})},...Object.entries(cs(7)).map(([t,e])=>[{name:`${t?`${t} `:""}7-simplex`,params:fe([3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}7-cube`,params:fe([4,3,3,3,3,3],e)},{name:`${t?`${t} `:""}7-orthoplex`,params:fe([3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}7-demicube`,params:fe([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]],e)}]).flat(),{name:b.jsxs(b.Fragment,{children:["3",b.jsx("sub",{children:"21"})]}),params:fe([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:b.jsxs(b.Fragment,{children:["2",b.jsx("sub",{children:"31"})]}),params:fe([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:b.jsxs(b.Fragment,{children:["1",b.jsx("sub",{children:"32"})]}),params:fe([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:8})," Polyzetta"]})},...Object.entries(cs(8)).map(([t,e])=>[{name:`${t?`${t} `:""}8-simplex`,params:fe([3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}8-cube`,params:fe([4,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}8-orthoplex`,params:fe([3,3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}8-demicube`,params:fe([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],e)}]).flat(),{name:b.jsxs(b.Fragment,{children:["1",b.jsx("sub",{children:"42"})]}),params:fe([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,1,0,0,0,0,0])},{name:b.jsxs(b.Fragment,{children:["2",b.jsx("sub",{children:"41"})]}),params:fe([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:b.jsxs(b.Fragment,{children:["4",b.jsx("sub",{children:"21"})]}),params:fe([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"finite",dimensions:9}),"Polyyotta"]})},...Object.entries(cs(9)).map(([t,e])=>[{name:`${t?`${t} `:""}9-simplex`,params:fe([3,3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}9-cube`,params:fe([4,3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}9-orthoplex`,params:fe([3,3,3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}9-demicube`,params:fe([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],e)}]).flat(),{type:"title",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"affine"})," Euclidean space"]})},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:fe([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:fe([4,4],[1,0,0])},{name:"Hexagonal",params:fe([6,3],[1,0,0])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:Fi([4,3,4],[1,0,0,0])},{name:"Octet",params:Fi([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:Fi([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:Fi([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:Fi([3,3,4,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"24-cellic",params:Fi([3,4,3,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"4-simpletic",params:Fi([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter tesseractic",params:Fi([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0],null,{grouper:"toddcoxeter"})},{type:"title",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:Re([3,7],[1,0,0])},{name:"Order-8 triangular",params:Re([3,8],[1,0,0])},{name:"Infinite Order triangular",params:Re([3,1/0],[1,0,0])},{name:"Order-5 square",params:Re([4,5],[1,0,0])},{name:"Order-6 square",params:Re([4,6],[1,0,0])},{name:"Order-7 square",params:Re([4,7],[1,0,0])},{name:"Order-8 square",params:Re([4,8],[1,0,0])},{name:"Infinite Order square",params:Re([4,1/0],[1,0,0])},{name:"Order-4 pentagonal",params:Re([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:Re([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:Re([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:Re([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:Re([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:Re([5,1/0],[1,0,0])},{name:"Order-4 hexagonal",params:Re([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:Re([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:Re([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:Re([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:Re([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:Re([6,1/0],[1,0,0])},{name:"Order-3 heptagonal",params:Re([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:Re([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:Re([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:Re([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:Re([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:Re([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:Re([7,1/0],[1,0,0])},{name:"Order-3 octagonal",params:Re([8,3],[1,0,0])},{name:"Order-4 octagonal",params:Re([8,4],[1,0,0])},{name:"Order-5 octagonal",params:Re([8,5],[1,0,0])},{name:"Order-6 octagonal",params:Re([8,6],[1,0,0])},{name:"Order-7 octagonal",params:Re([8,7],[1,0,0])},{name:"Order-8 octagonal",params:Re([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:Re([8,1/0],[1,0,0])},{name:"Order-3 apeirogonal",params:Re([1/0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:Re([1/0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:Re([1/0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:Re([1/0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:Re([1/0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:Re([1/0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:Re([1/0,1/0],[1,0,0])},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic-compact",dimensions:4})," Honeycombs compacts"]})},{name:"Icosahedral",params:ze([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:ze([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:ze([5,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 cubic",params:ze([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:ze([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral dodecahedral",params:ze([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic octahedral",params:ze([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Dodcahedral",params:ze([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Icosahedral",params:ze([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic-paracompact",dimensions:4})," Honeycombs paracompacts"]})},{name:"Triangular",params:ze([3,6,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:ze([6,3,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 tetrahedral",params:ze([3,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-6 cubic",params:ze([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-5 hexagonal",params:ze([6,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 hexagonal",params:ze([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 hexagonal",params:ze([6,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Square",params:ze([4,4,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated square",params:ze([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-4 square",params:ze([4,4,4],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral square",params:ze([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic square",params:ze([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter order square",params:ze([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral Hexagonal",params:ze([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Hexagonal",params:ze([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Icosahedral Hexagonal",params:ze([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal Triangular",params:ze([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Hexagonal",params:ze([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-4 Hexagonal",params:ze([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 Hexagonal",params:ze([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Runcic Order-6 Hexagonal",params:ze([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{grouper:"toddcoxeter"})},{name:"Quarter Order-4 hexagonal",params:ze([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:ze([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{grouper:"toddcoxeter"})},{type:"group",content:b.jsxs(b.Fragment,{children:[b.jsx(et,{type:"hyperbolic-lorentzian-level-2",dimensions:4})," Honeycombs lorentzians"]})},{name:"3-3-7",params:ze([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-4-7",params:ze([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-5-7",params:ze([3,5,7],[1,0,0,0],null,{grouper:"toddcoxeter"})}],ki=32,Om=18;function F2({coxeter:t,mirrors:e,stellation:n}){const i=t.length,r=e.map((g,m)=>{const f=T0(g);return{n:m,type:f,i:m,j:0,r:f==="inactive"?gl:ds}});for(let g=0;g<i;g++)for(let m=i-1;m>g+1;m--)if(t[g][m]>2){const f=g===0,v=m===i-1,x=!f&&!v,M=m-g+1,S=ht(M-1)/2,C=2*Math.PI/M,R={i:r[g].i+S,j:r[g].j+(x?-S*us((2+M)/4*C):0)};for(let P=g;P<=m;P++){let y=P-g+(f?1:v?M/2:(2+M)/4);r[P].i=R.i+S*Cs(C*y),r[P].j=R.j+S*us(C*y)}for(let P=m+1;P<i;P++)r[P].i-=m-g,r[P].i+=2*S;g=m-1;break}const s=[];for(let g=0;g<i;g++)for(let m=0;m<g;m++)if(t[g][m]>2){const f=t[g][m],v=n[g][m];if(f===2)return null;let x=`${f===1/0?"∞":f}`;v>1&&(x+=`/${v}`),x==="3"&&(x=""),s.push({source:r[g],target:r[m],value:x})}const o=r.map(({i:g})=>g),a=r.map(({j:g})=>g),l=tr(...o),c=fs(...o),u=tr(...a),d=fs(...a);let h=0,p=0;for(let g=0;g<r.length;g++){const m=r[g];m.x=(m.i-l)*2*ki,m.y=(m.j-u)*2*ki,h=fs(h,m.x),p=fs(p,m.y)}const _=g=>g+fs(g-1,0);return b.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-ki/2} ${-ki/2} ${h+ki} ${p+ki}`,width:`${_(c-l+1)}em`,height:`${_(d-u+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[r.map(({n:g,type:m,x:f,y:v,r:x})=>b.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${f-ki/2} ${v-ki/2})`,title:m,children:vl[m]},g)),s.map(({source:g,target:m,value:f})=>{const v={x:g.x,y:g.y},x={x:m.x,y:m.y},M={},S=PT(x.y-v.y,x.x-v.x);return M.x=(v.x+x.x)/2+(Om+(f.length-2)*5)*Cs(S-Ys/2),M.y=(v.y+x.y)/2+Om*us(S-Ys/2),v.x+=(g.r+1)*Cs(S),v.y+=(g.r+1)*us(S),x.x-=(m.r+1)*Cs(S),x.y-=(m.r+1)*us(S),b.jsxs("g",{className:"coxeter-diagram-link",children:[b.jsx("path",{d:`M ${v.x} ${v.y} L ${x.x} ${x.y}`,strokeWidth:"1",stroke:"currentColor"}),b.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:M.x,y:M.y,children:f})]},`${g.n}-${m.n}`)})]})}const k2=he.memo(function({name:e,params:n,onPreset:i}){return b.jsxs("div",{className:"preset",onClick:()=>i(n),children:[b.jsx("span",{className:"preset-name",children:e}),b.jsx(F2,{coxeter:n.coxeter,mirrors:n.mirrors,stellation:n.stellation})]})}),Df=t=>{if(["string","number"].includes(typeof t))return t;if(t instanceof Array)return t.map(Df).join("");if(typeof t=="object"&&t)return Df(t.props.children)};function z2({onPreset:t,closePresets:e}){const[n,i]=he.useState(""),[r,s]=he.useState(""),o=he.useCallback(a=>{s(a.target.value),bf(i(a.target.value),50)},[]);return b.jsxs("div",{className:"presets-modal",children:[b.jsx("button",{className:"presets-close",onClick:e,children:"✖"}),b.jsxs("div",{className:"presets-search",children:[b.jsx("input",{type:"text",placeholder:"Search",value:r,onChange:o}),b.jsx("button",{className:"presets-clear",onClick:()=>{i(""),s("")},children:"⌫"})]}),b.jsx("div",{className:"presets-list",children:O2.map(({type:a,content:l,name:c,params:u},d)=>b.jsx(he.Fragment,{children:a==="title"?b.jsx("h2",{children:l}):a==="group"?b.jsx("h4",{children:l}):!n||Df(c).toLowerCase().includes(n.toLowerCase())?b.jsx(k2,{name:c,params:u,search:n,onPreset:t}):null},d))})]})}function B2({runtime:t,params:e,rotations:n,updateParams:i,onControls:r}){const[s,o]=he.useState(!0),[a,l]=he.useState(!1),c=he.useCallback(()=>l(!1),[]),u=he.useCallback(g=>{let{name:m,value:f}=g.target;i({[m]:f})},[i]),d=he.useCallback((g,m)=>{i({[g]:m})},[i]),h=he.useCallback(()=>o(g=>!g),[]),p=he.useCallback(g=>{i(g),c()},[i,c]),_=he.useCallback(()=>{i({matrix:sr(t.dimensions)})},[i,t.dimensions]);return b.jsxs(b.Fragment,{children:[b.jsx("aside",{className:`presets ${a?"shown":"hidden"}`,children:b.jsx(z2,{onPreset:p,closePresets:c})}),b.jsxs("div",{className:t.error?"error":"",title:t.error,children:[t.currentOrder<t.order?b.jsxs("aside",{className:"processing-counter",children:[t.currentOrder,"/",t.order]}):null,b.jsx("button",{className:"preset-button",onClick:()=>l(g=>!g),title:"Presets",children:"◭"}),b.jsxs("button",{className:"control-indicator",onClick:r,title:"Rotation Mode",children:[b.jsx("span",{style:{display:"inline-block",transform:`rotate(${t.controlsShift/n.maxShift*360}deg)`},children:"⥁"}),b.jsx("sup",{children:t.controlsShift+1})]}),!C0(t.matrix)&&b.jsx("button",{className:"button reset-view",onClick:_,title:"Reset View",children:"⌖"}),b.jsx("button",{className:`space-indicator${t.processing?" processing":""}`,onClick:h,title:`Space ${t.spaceType}`,children:b.jsx(et,{type:t.spaceType,dimensions:t.dimensions})}),s&&b.jsxs("aside",{className:"controls",children:[(e.extended||e.grouper!=="")&&b.jsxs("label",{children:["Grouper",b.jsx("select",{name:"grouper",value:e.grouper,onChange:u,children:kT.map(g=>b.jsx("option",{value:g,children:g===""?e.grouper===""?`Auto [${t.grouper.replace(/^auto-/,"")}]`:"Auto":g.replace(/_/g," ").replace(/./,m=>m.toUpperCase())},g))})]}),(e.extended||e.grouper)&&b.jsxs("label",{children:["inCentered",b.jsx(Nm,{name:"centered",allowNull:!0,value:e.centered,onChange:d})]}),(e.extended||t.curvature<=0)&&b.jsx(gi,{name:"order",label:"Precision",min:1,step:1,value:e.order,onChange:d}),b.jsx(gi,{name:"segments",label:"Segments",min:1,step:1,value:e.segments,toggler:e.curve,togglerName:"curve",onChange:d}),b.jsx(gi,{name:"dimensions",label:"Dimensions",min:2,max:9,step:1,value:e.dimensions,onChange:d}),b.jsxs("label",{children:["Projection",b.jsx("select",{name:"projection",value:e.projection,onChange:u,children:N0.map(g=>b.jsx("option",{value:g,children:g.replace(/_/g," ").replace(/./,m=>m.toUpperCase())},g))})]}),b.jsx(gi,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:e.vertexThickness,toggler:e.showVertices,togglerName:"showVertices",onChange:d}),b.jsx(gi,{name:"edgeThickness",label:"Edges",min:0,step:1,value:e.edgeThickness,toggler:e.showEdges,togglerName:"showEdges",onChange:d}),(t.grouper.replace(/^auto-/,"")==="toddcoxeter"||t.grouper==="fundamental")&&b.jsxs("label",{children:["Faces",b.jsx(Nm,{name:"showFaces",value:e.showFaces,onChange:d})]}),b.jsxs("label",{children:["Ambiance",b.jsx("select",{name:"ambiance",value:e.ambiance,onChange:u,children:(e.extended?Object.keys(li):Object.entries(li).filter(([g,{extended:m}])=>!m).map(([g])=>g)).map(g=>b.jsx("option",{value:g,children:g.replace(/_/g," ").replace(/./,m=>m.toUpperCase())},g))})]})]}),s&&b.jsxs("aside",{className:"view",children:[b.jsx(gi,{name:"msaaSamples",label:"MSAA",min:0,step:1,value:e.msaaSamples,toggler:e.msaa,togglerName:"msaa",onChange:d}),b.jsx(gi,{name:"fov3",label:"FOV3",min:0,step:1,value:e.fov3,onChange:d}),e.dimensions>3?[...Array(e.dimensions-3).keys()].map(g=>b.jsx(gi,{label:`FOV${g+4}`,name:`fov${g+4}`,step:1,value:e[`fov${g+4}`],onChange:d},g)):null]}),s&&b.jsx(I2,{dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,extended:e.extended,onChange:d})]})]})}function G2({gl:t,params:e,updateParams:n}){window.p=e;const[i,r]=he.useState(()=>({...e,...t,currentOrder:0,askedOrder:null,spaceType:null,curvature:null,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],faces:[],maxVertices:3e4,maxEdges:5e4,maxFaces:5e4,processing:!0,error:null,renderError:null}));he.useEffect(()=>{r(a=>({...a,...U0({order:e.order,controlsShift:e.controlsShift,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,matrix:e.matrix,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,zoom:e.zoom,curve:e.curve,segments:e.segments,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,centered:e.centered}).params}))},[e.order,e.ambiance,e.centered,e.controlsShift,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.showEdges,e.showFaces,e.showVertices,e.stellation,e.vertexThickness,e.zoom]);const s=he.useMemo(()=>({maxShift:~~DT(I0(e.dimensions,2)/2),combinations:TT(UT(new Array(e.dimensions).fill().map((a,l)=>l),2))}),[e.dimensions]);he.useEffect(()=>{r(a=>e.grouper===""&&a.grouper.startsWith("auto-")?a:{...a,grouper:e.grouper})},[e.grouper]);const o=he.useCallback(()=>{const a=(e.controlsShift+1)%s.maxShift;n({controlsShift:a})},[s.maxShift,e.controlsShift,n]);return b.jsxs("div",{className:i.error||i.renderError?"error":"",title:i.error||i.renderError,children:[b.jsx(B2,{runtime:i,params:e,rotations:s,onControls:o,updateParams:n}),b.jsx(b2,{runtime:i,rotations:s,setRuntime:r,updateParams:n})]})}const B0=c2();Object.assign(window,B0);const V2=t=>JSON.parse(t,(n,i)=>i==="Infinity"?1/0:i),H2=t=>JSON.stringify(t,(n,i)=>i===1/0?"Infinity":i),Fm=(t=null)=>{const{location:e}=window;if(e.hash)try{return V2(atob(e.hash.slice(1)))}catch(n){console.warn(n),e.hash=""}return t},W2=t=>{window.history.pushState(null,null,"#"+btoa(H2(t)))},G0=(t,e)=>t.length!==e.length?!1:t.every((n,i)=>Array.isArray(n)?G0(n,e[i]):n===e[i]),j2=()=>{const[t,e]=he.useState(Fm(Wl)),n=he.useCallback(()=>{const r=Fm();r&&(Object.entries(r).forEach(([s,o])=>{Array.isArray(o)&&G0(o,t[s])&&(r[s]=t[s])}),e(r))},[t]),i=he.useCallback(r=>{e(s=>{const{params:o,badParams:a}=U0({...s,...r});return a.length||W2(o),o})},[]);return he.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),b.jsx(G2,{gl:B0,params:t,updateParams:i})};Ru.createRoot(document.getElementById("root")).render(b.jsx(j2,{}));
