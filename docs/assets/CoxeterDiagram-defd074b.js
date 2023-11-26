(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var js={exports:{}},Ii={},Fs={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),lf=Symbol.for("react.portal"),uf=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),ff=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),pf=Symbol.for("react.memo"),hf=Symbol.for("react.lazy"),vu=Symbol.iterator;function mf(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var Ds={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},As=Object.assign,Ms={};function xt(e,n,t){this.props=e,this.context=n,this.refs=Ms,this.updater=t||Ds}xt.prototype.isReactComponent={};xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ls(){}Ls.prototype=xt.prototype;function ml(e,n,t){this.props=e,this.context=n,this.refs=Ms,this.updater=t||Ds}var gl=ml.prototype=new Ls;gl.constructor=ml;As(gl,xt.prototype);gl.isPureReactComponent=!0;var pu=Array.isArray,Us=Object.prototype.hasOwnProperty,yl={current:null},$s={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Us.call(n,r)&&!$s.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:vr,type:e,key:o,ref:l,props:i,_owner:yl.current}}function gf(e,n){return{$$typeof:vr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function yf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hu=/\/+/g;function Wi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?yf(""+e.key):n.toString(36)}function Ur(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case vr:case lf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Wi(l,0):r,pu(i)?(t="",e!=null&&(t=e.replace(hu,"$&/")+"/"),Ur(i,n,t,"",function(a){return a})):i!=null&&(xl(i)&&(i=gf(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(hu,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",pu(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Wi(o,u);l+=Ur(o,n,t,s,i)}else if(s=mf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Wi(o,u++),l+=Ur(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function wr(e,n,t){if(e==null)return e;var r=[],i=0;return Ur(e,r,"","",function(o){return n.call(t,o,i++)}),r}function xf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},$r={transition:null},wf={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:$r,ReactCurrentOwner:yl};z.Children={map:wr,forEach:function(e,n,t){wr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return wr(e,function(){n++}),n},toArray:function(e){return wr(e,function(n){return n})||[]},only:function(e){if(!xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=xt;z.Fragment=uf;z.Profiler=af;z.PureComponent=ml;z.StrictMode=sf;z.Suspense=vf;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wf;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=As({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=yl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Us.call(n,s)&&!$s.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:vr,type:e.type,key:i,ref:o,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:ff,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cf,_context:e},e.Consumer=e};z.createElement=Bs;z.createFactory=function(e){var n=Bs.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:df,render:e}};z.isValidElement=xl;z.lazy=function(e){return{$$typeof:hf,_payload:{_status:-1,_result:e},_init:xf}};z.memo=function(e,n){return{$$typeof:pf,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=$r.transition;$r.transition={};try{e()}finally{$r.transition=n}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,n){return ae.current.useCallback(e,n)};z.useContext=function(e){return ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};z.useEffect=function(e,n){return ae.current.useEffect(e,n)};z.useId=function(){return ae.current.useId()};z.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return ae.current.useMemo(e,n)};z.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};z.useRef=function(e){return ae.current.useRef(e)};z.useState=function(e){return ae.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return ae.current.useTransition()};z.version="18.2.0";Fs.exports=z;var X=Fs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=X,Sf=Symbol.for("react.element"),Nf=Symbol.for("react.fragment"),kf=Object.prototype.hasOwnProperty,If=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tf={key:!0,ref:!0,__self:!0,__source:!0};function Hs(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)kf.call(n,r)&&!Tf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Sf,type:e,key:o,ref:l,props:i,_owner:If.current}}Ii.Fragment=Nf;Ii.jsx=Hs;Ii.jsxs=Hs;js.exports=Ii;var T=js.exports,mu={},Vs={exports:{}},we={},Ws={exports:{}},Gs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var O=C.length;C.push(P);e:for(;0<O;){var G=O-1>>>1,q=C[G];if(0<i(q,P))C[G]=P,C[O]=q,O=G;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],O=C.pop();if(O!==P){C[0]=O;e:for(var G=0,q=C.length,yr=q>>>1;G<yr;){var Cn=2*(G+1)-1,Vi=C[Cn],Pn=Cn+1,xr=C[Pn];if(0>i(Vi,O))Pn<q&&0>i(xr,Vi)?(C[G]=xr,C[Pn]=O,G=Pn):(C[G]=Vi,C[Cn]=O,G=Cn);else if(Pn<q&&0>i(xr,O))C[G]=xr,C[Pn]=O,G=Pn;else break e}}return P}function i(C,P){var O=C.sortIndex-P.sortIndex;return O!==0?O:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],a=[],v=1,f=null,c=3,d=!1,m=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var P=t(a);P!==null;){if(P.callback===null)r(a);else if(P.startTime<=C)r(a),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(a)}}function w(C){if(y=!1,g(C),!m)if(t(s)!==null)m=!0,Bi(E);else{var P=t(a);P!==null&&Hi(w,P.startTime-C)}}function E(C,P){m=!1,y&&(y=!1,h(k),k=-1),d=!0;var O=c;try{for(g(P),f=t(s);f!==null&&(!(f.expirationTime>P)||C&&!Oe());){var G=f.callback;if(typeof G=="function"){f.callback=null,c=f.priorityLevel;var q=G(f.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?f.callback=q:f===t(s)&&r(s),g(P)}else r(s);f=t(s)}if(f!==null)var yr=!0;else{var Cn=t(a);Cn!==null&&Hi(w,Cn.startTime-P),yr=!1}return yr}finally{f=null,c=O,d=!1}}var I=!1,N=null,k=-1,D=5,_=-1;function Oe(){return!(e.unstable_now()-_<D)}function St(){if(N!==null){var C=e.unstable_now();_=C;var P=!0;try{P=N(!0,C)}finally{P?Nt():(I=!1,N=null)}}else I=!1}var Nt;if(typeof p=="function")Nt=function(){p(St)};else if(typeof MessageChannel<"u"){var du=new MessageChannel,tf=du.port2;du.port1.onmessage=St,Nt=function(){tf.postMessage(null)}}else Nt=function(){x(St,0)};function Bi(C){N=C,I||(I=!0,Nt())}function Hi(C,P){k=x(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||d||(m=!0,Bi(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(c){case 1:case 2:case 3:var P=3;break;default:P=c}var O=c;c=P;try{return C()}finally{c=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=c;c=C;try{return P()}finally{c=O}},e.unstable_scheduleCallback=function(C,P,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=O+q,C={id:v++,callback:P,priorityLevel:C,startTime:O,expirationTime:q,sortIndex:-1},O>G?(C.sortIndex=O,n(a,C),t(s)===null&&C===t(a)&&(y?(h(k),k=-1):y=!0,Hi(w,O-G))):(C.sortIndex=q,n(s,C),m||d||(m=!0,Bi(E))),C},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(C){var P=c;return function(){var O=c;c=P;try{return C.apply(this,arguments)}finally{c=O}}}})(Gs);Ws.exports=Gs;var Rf=Ws.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=X,xe=Rf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qs=new Set,Yt={};function Wn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(Yt[e]=n,e=0;e<n.length;e++)Qs.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eo=Object.prototype.hasOwnProperty,Cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},yu={};function Pf(e){return Eo.call(yu,e)?!0:Eo.call(gu,e)?!1:Cf.test(e)?yu[e]=!0:(gu[e]=!0,!1)}function Of(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _f(e,n,t,r){if(n===null||typeof n>"u"||Of(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function El(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wl,El);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wl,El);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wl,El);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sl(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_f(n,t,i,r)&&(t=null),r||i===null?Pf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=Ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Nl=Symbol.for("react.strict_mode"),So=Symbol.for("react.profiler"),Js=Symbol.for("react.provider"),Xs=Symbol.for("react.context"),kl=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Ys=Symbol.for("react.offscreen"),xu=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=xu&&e[xu]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Gi;function Dt(e){if(Gi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Gi=n&&n[1]||""}return`
`+Gi+e}var Ki=!1;function Qi(e,n){if(!e||Ki)return"";Ki=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Ki=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Dt(e):""}function zf(e){switch(e.tag){case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 2:case 15:return e=Qi(e.type,!1),e;case 11:return e=Qi(e.type.render,!1),e;case 1:return e=Qi(e.type,!0),e;default:return""}}function Io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Qn:return"Portal";case So:return"Profiler";case Nl:return"StrictMode";case No:return"Suspense";case ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xs:return(e.displayName||"Context")+".Consumer";case Js:return(e._context.displayName||"Context")+".Provider";case kl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return n=e.displayName||null,n!==null?n:Io(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Io(e(n))}catch{}}return null}function jf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Io(n);case 8:return n===Nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ff(e){var n=qs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Ff(e))}function Zs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=qs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function To(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bs(e,n){n=n.checked,n!=null&&Sl(e,"checked",n,!1)}function Ro(e,n){bs(e,n);var t=Nn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Co(e,n.type,t):n.hasOwnProperty("defaultValue")&&Co(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Eu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Co(e,n,t){(n!=="number"||ei(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var At=Array.isArray;function ot(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Po(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(At(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function ea(e,n){var t=Nn(n.value),r=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function na(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?na(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,ta=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function qt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Df=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(e){Df.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Bt[n]=Bt[e]})});function ra(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Bt.hasOwnProperty(e)&&Bt[e]?(""+n).trim():n+"px"}function ia(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ra(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Af=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(e,n){if(n){if(Af[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function zo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function Tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fo=null,lt=null,ut=null;function ku(e){if(e=mr(e)){if(typeof Fo!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Oi(n),Fo(e.stateNode,e.type,n))}}function oa(e){lt?ut?ut.push(e):ut=[e]:lt=e}function la(){if(lt){var e=lt,n=ut;if(ut=lt=null,ku(e),n)for(e=0;e<n.length;e++)ku(n[e])}}function ua(e,n){return e(n)}function sa(){}var Ji=!1;function aa(e,n,t){if(Ji)return e(n,t);Ji=!0;try{return ua(e,n,t)}finally{Ji=!1,(lt!==null||ut!==null)&&(sa(),la())}}function Zt(e,n){var t=e.stateNode;if(t===null)return null;var r=Oi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Do=!1;if(en)try{var It={};Object.defineProperty(It,"passive",{get:function(){Do=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Do=!1}function Mf(e,n,t,r,i,o,l,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(v){this.onError(v)}}var Ht=!1,ni=null,ti=!1,Ao=null,Lf={onError:function(e){Ht=!0,ni=e}};function Uf(e,n,t,r,i,o,l,u,s){Ht=!1,ni=null,Mf.apply(Lf,arguments)}function $f(e,n,t,r,i,o,l,u,s){if(Uf.apply(this,arguments),Ht){if(Ht){var a=ni;Ht=!1,ni=null}else throw Error(S(198));ti||(ti=!0,Ao=a)}}function Gn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ca(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Iu(e){if(Gn(e)!==e)throw Error(S(188))}function Bf(e){var n=e.alternate;if(!n){if(n=Gn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Iu(i),e;if(o===r)return Iu(i),n;o=o.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function fa(e){return e=Bf(e),e!==null?da(e):null}function da(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=da(e);if(n!==null)return n;e=e.sibling}return null}var va=xe.unstable_scheduleCallback,Tu=xe.unstable_cancelCallback,Hf=xe.unstable_shouldYield,Vf=xe.unstable_requestPaint,K=xe.unstable_now,Wf=xe.unstable_getCurrentPriorityLevel,Rl=xe.unstable_ImmediatePriority,pa=xe.unstable_UserBlockingPriority,ri=xe.unstable_NormalPriority,Gf=xe.unstable_LowPriority,ha=xe.unstable_IdlePriority,Ti=null,Ge=null;function Kf(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Xf,Qf=Math.log,Jf=Math.LN2;function Xf(e){return e>>>=0,e===0?32:31-(Qf(e)/Jf|0)|0}var kr=64,Ir=4194304;function Mt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ii(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=Mt(u):(o&=l,o!==0&&(r=Mt(o)))}else l=t&~i,l!==0?r=Mt(l):o!==0&&(r=Mt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),i=1<<t,r|=e[t],n&=~i;return r}function Yf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ae(o),u=1<<l,s=i[l];s===-1?(!(u&t)||u&r)&&(i[l]=Yf(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function Mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ma(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Xi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function pr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function Zf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ae(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Cl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var F=0;function ga(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ya,Pl,xa,wa,Ea,Lo=!1,Tr=[],hn=null,mn=null,gn=null,bt=new Map,er=new Map,fn=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(n.pointerId)}}function Tt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=mr(n),n!==null&&Pl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ed(e,n,t,r,i){switch(n){case"focusin":return hn=Tt(hn,e,n,t,r,i),!0;case"dragenter":return mn=Tt(mn,e,n,t,r,i),!0;case"mouseover":return gn=Tt(gn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return bt.set(o,Tt(bt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,er.set(o,Tt(er.get(o)||null,e,n,t,r,i)),!0}return!1}function Sa(e){var n=jn(e.target);if(n!==null){var t=Gn(n);if(t!==null){if(n=t.tag,n===13){if(n=ca(t),n!==null){e.blockedOn=n,Ea(e.priority,function(){xa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);jo=r,t.target.dispatchEvent(r),jo=null}else return n=mr(t),n!==null&&Pl(n),e.blockedOn=t,!1;n.shift()}return!0}function Cu(e,n,t){Br(e)&&t.delete(n)}function nd(){Lo=!1,hn!==null&&Br(hn)&&(hn=null),mn!==null&&Br(mn)&&(mn=null),gn!==null&&Br(gn)&&(gn=null),bt.forEach(Cu),er.forEach(Cu)}function Rt(e,n){e.blockedOn===n&&(e.blockedOn=null,Lo||(Lo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,nd)))}function nr(e){function n(i){return Rt(i,e)}if(0<Tr.length){Rt(Tr[0],e);for(var t=1;t<Tr.length;t++){var r=Tr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&Rt(hn,e),mn!==null&&Rt(mn,e),gn!==null&&Rt(gn,e),bt.forEach(n),er.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)Sa(t),t.blockedOn===null&&fn.shift()}var st=on.ReactCurrentBatchConfig,oi=!0;function td(e,n,t,r){var i=F,o=st.transition;st.transition=null;try{F=1,Ol(e,n,t,r)}finally{F=i,st.transition=o}}function rd(e,n,t,r){var i=F,o=st.transition;st.transition=null;try{F=4,Ol(e,n,t,r)}finally{F=i,st.transition=o}}function Ol(e,n,t,r){if(oi){var i=Uo(e,n,t,r);if(i===null)oo(e,n,r,li,t),Ru(e,r);else if(ed(i,e,n,t,r))r.stopPropagation();else if(Ru(e,r),n&4&&-1<bf.indexOf(e)){for(;i!==null;){var o=mr(i);if(o!==null&&ya(o),o=Uo(e,n,t,r),o===null&&oo(e,n,r,li,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else oo(e,n,r,null,t)}}var li=null;function Uo(e,n,t,r){if(li=null,e=Tl(r),e=jn(e),e!==null)if(n=Gn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ca(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return li=e,null}function Na(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wf()){case Rl:return 1;case pa:return 4;case ri:case Gf:return 16;case ha:return 536870912;default:return 16}default:return 16}}var vn=null,_l=null,Hr=null;function ka(){if(Hr)return Hr;var e,n=_l,t=n.length,r,i="value"in vn?vn.value:vn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Hr=i.slice(e,1<r?1-r:void 0)}function Vr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rr(){return!0}function Pu(){return!1}function Ee(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Rr:Pu,this.isPropagationStopped=Pu,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Ee(wt),hr=V({},wt,{view:0,detail:0}),id=Ee(hr),Yi,qi,Ct,Ri=V({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(Yi=e.screenX-Ct.screenX,qi=e.screenY-Ct.screenY):qi=Yi=0,Ct=e),Yi)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),Ou=Ee(Ri),od=V({},Ri,{dataTransfer:0}),ld=Ee(od),ud=V({},hr,{relatedTarget:0}),Zi=Ee(ud),sd=V({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Ee(sd),cd=V({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=Ee(cd),dd=V({},wt,{data:0}),_u=Ee(dd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hd[e])?!!n[e]:!1}function jl(){return md}var gd=V({},hr,{key:function(e){if(e.key){var n=vd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=Ee(gd),xd=V({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zu=Ee(xd),wd=V({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Ed=Ee(wd),Sd=V({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=Ee(Sd),kd=V({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Ee(kd),Td=[9,13,27,32],Fl=en&&"CompositionEvent"in window,Vt=null;en&&"documentMode"in document&&(Vt=document.documentMode);var Rd=en&&"TextEvent"in window&&!Vt,Ia=en&&(!Fl||Vt&&8<Vt&&11>=Vt),ju=String.fromCharCode(32),Fu=!1;function Ta(e,n){switch(e){case"keyup":return Td.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Cd(e,n){switch(e){case"compositionend":return Ra(n);case"keypress":return n.which!==32?null:(Fu=!0,ju);case"textInput":return e=n.data,e===ju&&Fu?null:e;default:return null}}function Pd(e,n){if(Xn)return e==="compositionend"||!Fl&&Ta(e,n)?(e=ka(),Hr=_l=vn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ia&&n.locale!=="ko"?null:n.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Od[e.type]:n==="textarea"}function Ca(e,n,t,r){oa(r),n=ui(n,"onChange"),0<n.length&&(t=new zl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Wt=null,tr=null;function _d(e){Ua(e,0)}function Ci(e){var n=Zn(e);if(Zs(n))return e}function zd(e,n){if(e==="change")return n}var Pa=!1;if(en){var bi;if(en){var eo="oninput"in document;if(!eo){var Au=document.createElement("div");Au.setAttribute("oninput","return;"),eo=typeof Au.oninput=="function"}bi=eo}else bi=!1;Pa=bi&&(!document.documentMode||9<document.documentMode)}function Mu(){Wt&&(Wt.detachEvent("onpropertychange",Oa),tr=Wt=null)}function Oa(e){if(e.propertyName==="value"&&Ci(tr)){var n=[];Ca(n,tr,e,Tl(e)),aa(_d,n)}}function jd(e,n,t){e==="focusin"?(Mu(),Wt=n,tr=t,Wt.attachEvent("onpropertychange",Oa)):e==="focusout"&&Mu()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(tr)}function Dd(e,n){if(e==="click")return Ci(n)}function Ad(e,n){if(e==="input"||e==="change")return Ci(n)}function Md(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:Md;function rr(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Eo.call(n,i)||!Ue(e[i],n[i]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,n){var t=Lu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lu(t)}}function _a(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_a(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function za(){for(var e=window,n=ei();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ei(e.document)}return n}function Dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ld(e){var n=za(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&_a(t.ownerDocument.documentElement,t)){if(r!==null&&Dl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Uu(t,o);var l=Uu(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=en&&"documentMode"in document&&11>=document.documentMode,Yn=null,$o=null,Gt=null,Bo=!1;function $u(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bo||Yn==null||Yn!==ei(r)||(r=Yn,"selectionStart"in r&&Dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gt&&rr(Gt,r)||(Gt=r,r=ui($o,"onSelect"),0<r.length&&(n=new zl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Yn)))}function Cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qn={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},no={},ja={};en&&(ja=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Pi(e){if(no[e])return no[e];if(!qn[e])return e;var n=qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ja)return no[e]=n[t];return e}var Fa=Pi("animationend"),Da=Pi("animationiteration"),Aa=Pi("animationstart"),Ma=Pi("transitionend"),La=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){La.set(e,n),Wn(n,[e])}for(var to=0;to<Bu.length;to++){var ro=Bu[to],$d=ro.toLowerCase(),Bd=ro[0].toUpperCase()+ro.slice(1);In($d,"on"+Bd)}In(Fa,"onAnimationEnd");In(Da,"onAnimationIteration");In(Aa,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Ma,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));function Hu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$f(r,n,void 0,e),e.currentTarget=null}function Ua(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,a),o=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,a=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,a),o=s}}}if(ti)throw e=Ao,ti=!1,Ao=null,e}function M(e,n){var t=n[Ko];t===void 0&&(t=n[Ko]=new Set);var r=e+"__bubble";t.has(r)||($a(n,e,2,!1),t.add(r))}function io(e,n,t){var r=0;n&&(r|=4),$a(t,e,r,n)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Pr]){e[Pr]=!0,Qs.forEach(function(t){t!=="selectionchange"&&(Hd.has(t)||io(t,!1,e),io(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pr]||(n[Pr]=!0,io("selectionchange",!1,n))}}function $a(e,n,t,r){switch(Na(n)){case 1:var i=td;break;case 4:i=rd;break;default:i=Ol}t=i.bind(null,n,t,e),i=void 0,!Do||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function oo(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;u!==null;){if(l=jn(u),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}u=u.parentNode}}r=r.return}aa(function(){var a=o,v=Tl(t),f=[];e:{var c=La.get(e);if(c!==void 0){var d=zl,m=e;switch(e){case"keypress":if(Vr(t)===0)break e;case"keydown":case"keyup":d=yd;break;case"focusin":m="focus",d=Zi;break;case"focusout":m="blur",d=Zi;break;case"beforeblur":case"afterblur":d=Zi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Ed;break;case Fa:case Da:case Aa:d=ad;break;case Ma:d=Nd;break;case"scroll":d=id;break;case"wheel":d=Id;break;case"copy":case"cut":case"paste":d=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=zu}var y=(n&4)!==0,x=!y&&e==="scroll",h=y?c!==null?c+"Capture":null:c;y=[];for(var p=a,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=Zt(p,h),w!=null&&y.push(or(p,w,g)))),x)break;p=p.return}0<y.length&&(c=new d(c,m,null,t,v),f.push({event:c,listeners:y}))}}if(!(n&7)){e:{if(c=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",c&&t!==jo&&(m=t.relatedTarget||t.fromElement)&&(jn(m)||m[nn]))break e;if((d||c)&&(c=v.window===v?v:(c=v.ownerDocument)?c.defaultView||c.parentWindow:window,d?(m=t.relatedTarget||t.toElement,d=a,m=m?jn(m):null,m!==null&&(x=Gn(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(d=null,m=a),d!==m)){if(y=Ou,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=zu,w="onPointerLeave",h="onPointerEnter",p="pointer"),x=d==null?c:Zn(d),g=m==null?c:Zn(m),c=new y(w,p+"leave",d,t,v),c.target=x,c.relatedTarget=g,w=null,jn(v)===a&&(y=new y(h,p+"enter",m,t,v),y.target=g,y.relatedTarget=x,w=y),x=w,d&&m)n:{for(y=d,h=m,p=0,g=y;g;g=Kn(g))p++;for(g=0,w=h;w;w=Kn(w))g++;for(;0<p-g;)y=Kn(y),p--;for(;0<g-p;)h=Kn(h),g--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break n;y=Kn(y),h=Kn(h)}y=null}else y=null;d!==null&&Vu(f,c,d,y,!1),m!==null&&x!==null&&Vu(f,x,m,y,!0)}}e:{if(c=a?Zn(a):window,d=c.nodeName&&c.nodeName.toLowerCase(),d==="select"||d==="input"&&c.type==="file")var E=zd;else if(Du(c))if(Pa)E=Ad;else{E=Fd;var I=jd}else(d=c.nodeName)&&d.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(E=Dd);if(E&&(E=E(e,a))){Ca(f,E,t,v);break e}I&&I(e,c,a),e==="focusout"&&(I=c._wrapperState)&&I.controlled&&c.type==="number"&&Co(c,"number",c.value)}switch(I=a?Zn(a):window,e){case"focusin":(Du(I)||I.contentEditable==="true")&&(Yn=I,$o=a,Gt=null);break;case"focusout":Gt=$o=Yn=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,$u(f,t,v);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":$u(f,t,v)}var N;if(Fl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Xn?Ta(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(Ia&&t.locale!=="ko"&&(Xn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Xn&&(N=ka()):(vn=v,_l="value"in vn?vn.value:vn.textContent,Xn=!0)),I=ui(a,k),0<I.length&&(k=new _u(k,e,null,t,v),f.push({event:k,listeners:I}),N?k.data=N:(N=Ra(t),N!==null&&(k.data=N)))),(N=Rd?Cd(e,t):Pd(e,t))&&(a=ui(a,"onBeforeInput"),0<a.length&&(v=new _u("onBeforeInput","beforeinput",null,t,v),f.push({event:v,listeners:a}),v.data=N))}Ua(f,n)})}function or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ui(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zt(e,t),o!=null&&r.unshift(or(e,o,i)),o=Zt(e,n),o!=null&&r.push(or(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=Zt(t,o),s!=null&&l.unshift(or(t,s,u))):i||(s=Zt(t,o),s!=null&&l.push(or(t,s,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Vd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Wd,"")}function Or(e,n,t){if(n=Wu(n),Wu(e)!==n&&t)throw Error(S(425))}function si(){}var Ho=null,Vo=null;function Wo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Go=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(Qd)}:Go;function Qd(e){setTimeout(function(){throw e})}function lo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),nr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);nr(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Et=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Et,lr="__reactProps$"+Et,nn="__reactContainer$"+Et,Ko="__reactEvents$"+Et,Jd="__reactListeners$"+Et,Xd="__reactHandles$"+Et;function jn(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ku(e);e!==null;){if(t=e[Ve])return t;e=Ku(e)}return n}e=t,t=e.parentNode}return null}function mr(e){return e=e[Ve]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Oi(e){return e[lr]||null}var Qo=[],bn=-1;function Tn(e){return{current:e}}function U(e){0>bn||(e.current=Qo[bn],Qo[bn]=null,bn--)}function A(e,n){bn++,Qo[bn]=e.current,e.current=n}var kn={},le=Tn(kn),ve=Tn(!1),Un=kn;function vt(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function ai(){U(ve),U(le)}function Qu(e,n,t){if(le.current!==kn)throw Error(S(168));A(le,n),A(ve,t)}function Ba(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,jf(e)||"Unknown",i));return V({},t,r)}function ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Un=le.current,A(le,e),A(ve,ve.current),!0}function Ju(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Ba(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,U(ve),U(le),A(le,e)):U(ve),A(ve,t)}var Je=null,_i=!1,uo=!1;function Ha(e){Je===null?Je=[e]:Je.push(e)}function Yd(e){_i=!0,Ha(e)}function Rn(){if(!uo&&Je!==null){uo=!0;var e=0,n=F;try{var t=Je;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Je=null,_i=!1}catch(i){throw Je!==null&&(Je=Je.slice(e+1)),va(Rl,Rn),i}finally{F=n,uo=!1}}return null}var et=[],nt=0,fi=null,di=0,Se=[],Ne=0,$n=null,Xe=1,Ye="";function On(e,n){et[nt++]=di,et[nt++]=fi,fi=e,di=n}function Va(e,n,t){Se[Ne++]=Xe,Se[Ne++]=Ye,Se[Ne++]=$n,$n=e;var r=Xe;e=Ye;var i=32-Ae(r)-1;r&=~(1<<i),t+=1;var o=32-Ae(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Xe=1<<32-Ae(n)+i|t<<i|r,Ye=o+e}else Xe=1<<o|t<<i|r,Ye=e}function Al(e){e.return!==null&&(On(e,1),Va(e,1,0))}function Ml(e){for(;e===fi;)fi=et[--nt],et[nt]=null,di=et[--nt],et[nt]=null;for(;e===$n;)$n=Se[--Ne],Se[Ne]=null,Ye=Se[--Ne],Se[Ne]=null,Xe=Se[--Ne],Se[Ne]=null}var ye=null,ge=null,$=!1,De=null;function Wa(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ge=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:Xe,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ge=null,!0):!1;default:return!1}}function Jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xo(e){if($){var n=ge;if(n){var t=n;if(!Xu(e,n)){if(Jo(e))throw Error(S(418));n=yn(t.nextSibling);var r=ye;n&&Xu(e,n)?Wa(r,t):(e.flags=e.flags&-4097|2,$=!1,ye=e)}}else{if(Jo(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,ye=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function _r(e){if(e!==ye)return!1;if(!$)return Yu(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wo(e.type,e.memoizedProps)),n&&(n=ge)){if(Jo(e))throw Ga(),Error(S(418));for(;n;)Wa(e,n),n=yn(n.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ye?yn(e.stateNode.nextSibling):null;return!0}function Ga(){for(var e=ge;e;)e=yn(e.nextSibling)}function pt(){ge=ye=null,$=!1}function Ll(e){De===null?De=[e]:De.push(e)}var qd=on.ReactCurrentBatchConfig;function ze(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var vi=Tn(null),pi=null,tt=null,Ul=null;function $l(){Ul=tt=pi=null}function Bl(e){var n=vi.current;U(vi),e._currentValue=n}function Yo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){pi=e,Ul=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Re(e){var n=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(pi===null)throw Error(S(308));tt=e,pi.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var Fn=null;function Hl(e){Fn===null?Fn=[e]:Fn.push(e)}function Ka(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Hl(n)):(t.next=i.next,i.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,tn(e,t)}return i=r.interleaved,i===null?(n.next=n,Hl(r)):(n.next=i.next,i.next=n),r.interleaved=n,tn(e,t)}function Wr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Cl(e,t)}}function qu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function hi(e,n,t,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,l===null?o=a:l.next=a,l=s;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==l&&(u===null?v.firstBaseUpdate=a:u.next=a,v.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;l=0,v=a=s=null,u=o;do{var c=u.lane,d=u.eventTime;if((r&c)===c){v!==null&&(v=v.next={eventTime:d,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(c=n,d=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(d,f,c);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,c=typeof m=="function"?m.call(d,f,c):m,c==null)break e;f=V({},f,c);break e;case 2:cn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[u]:c.push(u))}else d={eventTime:d,lane:c,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(a=v=d,s=f):v=v.next=d,l|=c;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;c=u,u=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(v===null&&(s=f),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Hn|=l,e.lanes=l,e.memoizedState=f}}function Zu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ja=new Ks.Component().refs;function qo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zi={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),i=En(e),o=Ze(r,i);o.payload=n,t!=null&&(o.callback=t),n=xn(e,o,i),n!==null&&(Me(n,e,i,r),Wr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),i=En(e),o=Ze(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=xn(e,o,i),n!==null&&(Me(n,e,i,r),Wr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=En(e),i=Ze(t,r);i.tag=2,n!=null&&(i.callback=n),n=xn(e,i,r),n!==null&&(Me(n,e,r,t),Wr(n,e,r))}};function bu(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!rr(t,r)||!rr(i,o):!0}function Xa(e,n,t){var r=!1,i=kn,o=n.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=pe(n)?Un:le.current,r=n.contextTypes,o=(r=r!=null)?vt(e,i):kn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function es(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&zi.enqueueReplaceState(n,n.state,null)}function Zo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Ja,Vl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=pe(n)?Un:le.current,i.context=vt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(qo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&zi.enqueueReplaceState(i,i.state,null),hi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;u===Ja&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function zr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ns(e){var n=e._init;return n(e._payload)}function Ya(e){function n(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Sn(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,p,g,w){return p===null||p.tag!==6?(p=ho(g,h.mode,w),p.return=h,p):(p=i(p,g),p.return=h,p)}function s(h,p,g,w){var E=g.type;return E===Jn?v(h,p,g.props.children,w,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&ns(E)===p.type)?(w=i(p,g.props),w.ref=Pt(h,p,g),w.return=h,w):(w=Yr(g.type,g.key,g.props,null,h.mode,w),w.ref=Pt(h,p,g),w.return=h,w)}function a(h,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=mo(g,h.mode,w),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function v(h,p,g,w,E){return p===null||p.tag!==7?(p=Mn(g,h.mode,w,E),p.return=h,p):(p=i(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ho(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return g=Yr(p.type,p.key,p.props,null,h.mode,g),g.ref=Pt(h,null,p),g.return=h,g;case Qn:return p=mo(p,h.mode,g),p.return=h,p;case an:var w=p._init;return f(h,w(p._payload),g)}if(At(p)||kt(p))return p=Mn(p,h.mode,g,null),p.return=h,p;zr(h,p)}return null}function c(h,p,g,w){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:u(h,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return g.key===E?s(h,p,g,w):null;case Qn:return g.key===E?a(h,p,g,w):null;case an:return E=g._init,c(h,p,E(g._payload),w)}if(At(g)||kt(g))return E!==null?null:v(h,p,g,w,null);zr(h,g)}return null}function d(h,p,g,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,u(p,h,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Er:return h=h.get(w.key===null?g:w.key)||null,s(p,h,w,E);case Qn:return h=h.get(w.key===null?g:w.key)||null,a(p,h,w,E);case an:var I=w._init;return d(h,p,g,I(w._payload),E)}if(At(w)||kt(w))return h=h.get(g)||null,v(p,h,w,E,null);zr(p,w)}return null}function m(h,p,g,w){for(var E=null,I=null,N=p,k=p=0,D=null;N!==null&&k<g.length;k++){N.index>k?(D=N,N=null):D=N.sibling;var _=c(h,N,g[k],w);if(_===null){N===null&&(N=D);break}e&&N&&_.alternate===null&&n(h,N),p=o(_,p,k),I===null?E=_:I.sibling=_,I=_,N=D}if(k===g.length)return t(h,N),$&&On(h,k),E;if(N===null){for(;k<g.length;k++)N=f(h,g[k],w),N!==null&&(p=o(N,p,k),I===null?E=N:I.sibling=N,I=N);return $&&On(h,k),E}for(N=r(h,N);k<g.length;k++)D=d(N,h,k,g[k],w),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?k:D.key),p=o(D,p,k),I===null?E=D:I.sibling=D,I=D);return e&&N.forEach(function(Oe){return n(h,Oe)}),$&&On(h,k),E}function y(h,p,g,w){var E=kt(g);if(typeof E!="function")throw Error(S(150));if(g=E.call(g),g==null)throw Error(S(151));for(var I=E=null,N=p,k=p=0,D=null,_=g.next();N!==null&&!_.done;k++,_=g.next()){N.index>k?(D=N,N=null):D=N.sibling;var Oe=c(h,N,_.value,w);if(Oe===null){N===null&&(N=D);break}e&&N&&Oe.alternate===null&&n(h,N),p=o(Oe,p,k),I===null?E=Oe:I.sibling=Oe,I=Oe,N=D}if(_.done)return t(h,N),$&&On(h,k),E;if(N===null){for(;!_.done;k++,_=g.next())_=f(h,_.value,w),_!==null&&(p=o(_,p,k),I===null?E=_:I.sibling=_,I=_);return $&&On(h,k),E}for(N=r(h,N);!_.done;k++,_=g.next())_=d(N,h,k,_.value,w),_!==null&&(e&&_.alternate!==null&&N.delete(_.key===null?k:_.key),p=o(_,p,k),I===null?E=_:I.sibling=_,I=_);return e&&N.forEach(function(St){return n(h,St)}),$&&On(h,k),E}function x(h,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Jn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:e:{for(var E=g.key,I=p;I!==null;){if(I.key===E){if(E=g.type,E===Jn){if(I.tag===7){t(h,I.sibling),p=i(I,g.props.children),p.return=h,h=p;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&ns(E)===I.type){t(h,I.sibling),p=i(I,g.props),p.ref=Pt(h,I,g),p.return=h,h=p;break e}t(h,I);break}else n(h,I);I=I.sibling}g.type===Jn?(p=Mn(g.props.children,h.mode,w,g.key),p.return=h,h=p):(w=Yr(g.type,g.key,g.props,null,h.mode,w),w.ref=Pt(h,p,g),w.return=h,h=w)}return l(h);case Qn:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{t(h,p);break}else n(h,p);p=p.sibling}p=mo(g,h.mode,w),p.return=h,h=p}return l(h);case an:return I=g._init,x(h,p,I(g._payload),w)}if(At(g))return m(h,p,g,w);if(kt(g))return y(h,p,g,w);zr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(h,p.sibling),p=i(p,g),p.return=h,h=p):(t(h,p),p=ho(g,h.mode,w),p.return=h,h=p),l(h)):t(h,p)}return x}var ht=Ya(!0),qa=Ya(!1),gr={},Ke=Tn(gr),ur=Tn(gr),sr=Tn(gr);function Dn(e){if(e===gr)throw Error(S(174));return e}function Wl(e,n){switch(A(sr,n),A(ur,e),A(Ke,gr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Oo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Oo(n,e)}U(Ke),A(Ke,n)}function mt(){U(Ke),U(ur),U(sr)}function Za(e){Dn(sr.current);var n=Dn(Ke.current),t=Oo(n,e.type);n!==t&&(A(ur,e),A(Ke,t))}function Gl(e){ur.current===e&&(U(Ke),U(ur))}var B=Tn(0);function mi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var so=[];function Kl(){for(var e=0;e<so.length;e++)so[e]._workInProgressVersionPrimary=null;so.length=0}var Gr=on.ReactCurrentDispatcher,ao=on.ReactCurrentBatchConfig,Bn=0,H=null,J=null,Z=null,gi=!1,Kt=!1,ar=0,Zd=0;function re(){throw Error(S(321))}function Ql(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function Jl(e,n,t,r,i,o){if(Bn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Gr.current=e===null||e.memoizedState===null?tv:rv,e=t(r,i),Kt){o=0;do{if(Kt=!1,ar=0,25<=o)throw Error(S(301));o+=1,Z=J=null,n.updateQueue=null,Gr.current=iv,e=t(r,i)}while(Kt)}if(Gr.current=yi,n=J!==null&&J.next!==null,Bn=0,Z=J=H=null,gi=!1,n)throw Error(S(300));return e}function Xl(){var e=ar!==0;return ar=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Ce(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function cr(e,n){return typeof n=="function"?n(e):n}function co(e){var n=Ce(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,s=null,a=o;do{var v=a.lane;if((Bn&v)===v)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var f={lane:v,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=f,l=r):s=s.next=f,H.lanes|=v,Hn|=v}a=a.next}while(a!==null&&a!==o);s===null?l=r:s.next=u,Ue(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function fo(e){var n=Ce(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ue(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ba(){}function ec(e,n){var t=H,r=Ce(),i=n(),o=!Ue(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,Yl(rc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,fr(9,tc.bind(null,t,r,i,n),void 0,null),b===null)throw Error(S(349));Bn&30||nc(t,n,i)}return i}function nc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function tc(e,n,t,r){n.value=t,n.getSnapshot=r,ic(n)&&oc(e)}function rc(e,n,t){return t(function(){ic(n)&&oc(e)})}function ic(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function oc(e){var n=tn(e,1);n!==null&&Me(n,e,1,-1)}function ts(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},n.queue=e,e=e.dispatch=nv.bind(null,H,e),[n.memoizedState,e]}function fr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function lc(){return Ce().memoizedState}function Kr(e,n,t,r){var i=He();H.flags|=e,i.memoizedState=fr(1|n,t,void 0,r===void 0?null:r)}function ji(e,n,t,r){var i=Ce();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&Ql(r,l.deps)){i.memoizedState=fr(n,t,o,r);return}}H.flags|=e,i.memoizedState=fr(1|n,t,o,r)}function rs(e,n){return Kr(8390656,8,e,n)}function Yl(e,n){return ji(2048,8,e,n)}function uc(e,n){return ji(4,2,e,n)}function sc(e,n){return ji(4,4,e,n)}function ac(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cc(e,n,t){return t=t!=null?t.concat([e]):null,ji(4,4,ac.bind(null,n,e),t)}function ql(){}function fc(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ql(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function dc(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ql(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function vc(e,n,t){return Bn&21?(Ue(t,n)||(t=ma(),H.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function bd(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),n()}finally{F=t,ao.transition=r}}function pc(){return Ce().memoizedState}function ev(e,n,t){var r=En(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},hc(e))mc(n,t);else if(t=Ka(e,n,t,r),t!==null){var i=se();Me(t,e,r,i),gc(t,n,r)}}function nv(e,n,t){var r=En(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(hc(e))mc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,Ue(u,l)){var s=n.interleaved;s===null?(i.next=i,Hl(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Ka(e,n,i,r),t!==null&&(i=se(),Me(t,e,r,i),gc(t,n,r))}}function hc(e){var n=e.alternate;return e===H||n!==null&&n===H}function mc(e,n){Kt=gi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Cl(e,t)}}var yi={readContext:Re,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tv={readContext:Re,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:rs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Kr(4194308,4,ac.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Kr(4,2,e,n)},useMemo:function(e,n){var t=He();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=He();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ev.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:ts,useDebugValue:ql,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=ts(!1),n=e[0];return e=bd.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=He();if($){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),b===null)throw Error(S(349));Bn&30||nc(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,rs(rc.bind(null,r,o,e),[e]),r.flags|=2048,fr(9,tc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=He(),n=b.identifierPrefix;if($){var t=Ye,r=Xe;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ar++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rv={readContext:Re,useCallback:fc,useContext:Re,useEffect:Yl,useImperativeHandle:cc,useInsertionEffect:uc,useLayoutEffect:sc,useMemo:dc,useReducer:co,useRef:lc,useState:function(){return co(cr)},useDebugValue:ql,useDeferredValue:function(e){var n=Ce();return vc(n,J.memoizedState,e)},useTransition:function(){var e=co(cr)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:ba,useSyncExternalStore:ec,useId:pc,unstable_isNewReconciler:!1},iv={readContext:Re,useCallback:fc,useContext:Re,useEffect:Yl,useImperativeHandle:cc,useInsertionEffect:uc,useLayoutEffect:sc,useMemo:dc,useReducer:fo,useRef:lc,useState:function(){return fo(cr)},useDebugValue:ql,useDeferredValue:function(e){var n=Ce();return J===null?n.memoizedState=e:vc(n,J.memoizedState,e)},useTransition:function(){var e=fo(cr)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:ba,useSyncExternalStore:ec,useId:pc,unstable_isNewReconciler:!1};function gt(e,n){try{var t="",r=n;do t+=zf(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function vo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function bo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ov=typeof WeakMap=="function"?WeakMap:Map;function yc(e,n,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wi||(wi=!0,al=r),bo(e,n)},t}function xc(e,n,t){t=Ze(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){bo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){bo(e,n),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function is(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ov;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=xv.bind(null,e,n,t),n.then(e,e))}function os(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ls(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ze(-1,1),n.tag=2,xn(t,n,1))),t.lanes|=1),e)}var lv=on.ReactCurrentOwner,de=!1;function ue(e,n,t,r){n.child=e===null?qa(n,null,t,r):ht(n,e.child,t,r)}function us(e,n,t,r,i){t=t.render;var o=n.ref;return at(n,i),r=Jl(e,n,t,r,o,i),t=Xl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&t&&Al(n),n.flags|=1,ue(e,n,r,i),n.child)}function ss(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!ou(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,wc(e,n,o,r,i)):(e=Yr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:rr,t(l,r)&&e.ref===n.ref)return rn(e,n,i)}return n.flags|=1,e=Sn(o,r),e.ref=n.ref,e.return=n,n.child=e}function wc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(rr(o,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,rn(e,n,i)}return el(e,n,t,r,i)}function Ec(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(it,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(it,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,A(it,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,A(it,me),me|=r;return ue(e,n,i,t),n.child}function Sc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function el(e,n,t,r,i){var o=pe(t)?Un:le.current;return o=vt(n,o),at(n,i),t=Jl(e,n,t,r,o,i),r=Xl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&r&&Al(n),n.flags|=1,ue(e,n,t,i),n.child)}function as(e,n,t,r,i){if(pe(t)){var o=!0;ci(n)}else o=!1;if(at(n,i),n.stateNode===null)Qr(e,n),Xa(n,t,r),Zo(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var s=l.context,a=t.contextType;typeof a=="object"&&a!==null?a=Re(a):(a=pe(t)?Un:le.current,a=vt(n,a));var v=t.getDerivedStateFromProps,f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==a)&&es(n,l,r,a),cn=!1;var c=n.memoizedState;l.state=c,hi(n,r,l,i),s=n.memoizedState,u!==r||c!==s||ve.current||cn?(typeof v=="function"&&(qo(n,t,v,r),s=n.memoizedState),(u=cn||bu(n,t,u,r,c,s,a))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=a,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Qa(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:ze(n.type,u),l.props=a,f=n.pendingProps,c=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Re(s):(s=pe(t)?Un:le.current,s=vt(n,s));var d=t.getDerivedStateFromProps;(v=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==f||c!==s)&&es(n,l,r,s),cn=!1,c=n.memoizedState,l.state=c,hi(n,r,l,i);var m=n.memoizedState;u!==f||c!==m||ve.current||cn?(typeof d=="function"&&(qo(n,t,d,r),m=n.memoizedState),(a=cn||bu(n,t,a,r,c,m,s)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),l.props=r,l.state=m,l.context=s,r=a):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),r=!1)}return nl(e,n,t,r,o,i)}function nl(e,n,t,r,i,o){Sc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Ju(n,t,!1),rn(e,n,o);r=n.stateNode,lv.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=ht(n,e.child,null,o),n.child=ht(n,null,u,o)):ue(e,n,u,o),n.memoizedState=r.state,i&&Ju(n,t,!0),n.child}function Nc(e){var n=e.stateNode;n.pendingContext?Qu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qu(e,n.context,!1),Wl(e,n.containerInfo)}function cs(e,n,t,r,i){return pt(),Ll(i),n.flags|=256,ue(e,n,t,r),n.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(B,i&1),e===null)return Xo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ai(l,r,0,null),e=Mn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=rl(t),n.memoizedState=tl,e):Zl(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return uv(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Sn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Sn(u,o):(o=Mn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?rl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=tl,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Zl(e,n){return n=Ai({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function jr(e,n,t,r){return r!==null&&Ll(r),ht(n,e.child,null,t),e=Zl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function uv(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=vo(Error(S(422))),jr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Ai({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ht(n,e.child,null,l),n.child.memoizedState=rl(l),n.memoizedState=tl,o);if(!(n.mode&1))return jr(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(S(419)),r=vo(o,r,void 0),jr(e,n,l,r)}if(u=(l&e.childLanes)!==0,de||u){if(r=b,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),Me(r,e,i,-1))}return iu(),r=vo(Error(S(421))),jr(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=wv.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ge=yn(i.nextSibling),ye=n,$=!0,De=null,e!==null&&(Se[Ne++]=Xe,Se[Ne++]=Ye,Se[Ne++]=$n,Xe=e.id,Ye=e.overflow,$n=n),n=Zl(n,r.children),n.flags|=4096,n)}function fs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yo(e.return,n,t)}function po(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Ic(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fs(e,t,n);else if(e.tag===19)fs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&mi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),po(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}po(n,!0,t,null,o);break;case"together":po(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Qr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=Sn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Sn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sv(e,n,t){switch(n.tag){case 3:Nc(n),pt();break;case 5:Za(n);break;case 1:pe(n.type)&&ci(n);break;case 4:Wl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;A(vi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(A(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?kc(e,n,t):(A(B,B.current&1),e=rn(e,n,t),e!==null?e.sibling:null);A(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ic(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,Ec(e,n,t)}return rn(e,n,t)}var Tc,il,Rc,Cc;Tc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};il=function(){};Rc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Dn(Ke.current);var o=null;switch(t){case"input":i=To(e,i),r=To(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=Po(e,i),r=Po(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}_o(t,r);var l;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Yt.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Yt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&M("scroll",e),o||u===s||(o=[])):(o=o||[]).push(a,s))}t&&(o=o||[]).push("style",t);var a=o;(n.updateQueue=a)&&(n.flags|=4)}};Cc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ot(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function av(e,n,t){var r=n.pendingProps;switch(Ml(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return pe(n.type)&&ai(),ie(n),null;case 3:return r=n.stateNode,mt(),U(ve),U(le),Kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(dl(De),De=null))),il(e,n),ie(n),null;case 5:Gl(n);var i=Dn(sr.current);if(t=n.type,e!==null&&n.stateNode!=null)Rc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=Dn(Ke.current),_r(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ve]=n,r[lr]=o,e=(n.mode&1)!==0,t){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(i=0;i<Lt.length;i++)M(Lt[i],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":wu(r,o),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},M("invalid",r);break;case"textarea":Su(r,o),M("invalid",r)}_o(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Or(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Or(r.textContent,u,e),i=["children",""+u]):Yt.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&M("scroll",r)}switch(t){case"input":Sr(r),Eu(r,o,!0);break;case"textarea":Sr(r),Nu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=si)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=na(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ve]=n,e[lr]=r,Tc(e,n,!1,!1),n.stateNode=e;e:{switch(l=zo(t,r),t){case"dialog":M("cancel",e),M("close",e),i=r;break;case"iframe":case"object":case"embed":M("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lt.length;i++)M(Lt[i],e);i=r;break;case"source":M("error",e),i=r;break;case"img":case"image":case"link":M("error",e),M("load",e),i=r;break;case"details":M("toggle",e),i=r;break;case"input":wu(e,r),i=To(e,r),M("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),M("invalid",e);break;case"textarea":Su(e,r),i=Po(e,r),M("invalid",e);break;default:i=r}_o(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?ia(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ta(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&qt(e,s):typeof s=="number"&&qt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&M("scroll",e):s!=null&&Sl(e,o,s,l))}switch(t){case"input":Sr(e),Eu(e,r,!1);break;case"textarea":Sr(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ot(e,!!r.multiple,o,!1):r.defaultValue!=null&&ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=si)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Cc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Dn(sr.current),Dn(Ke.current),_r(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ve]=n,(o=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Or(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ve]=n,n.stateNode=r}return ie(n),null;case 13:if(U(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ge!==null&&n.mode&1&&!(n.flags&128))Ga(),pt(),n.flags|=98560,o=!1;else if(o=_r(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ve]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),o=!1}else De!==null&&(dl(De),De=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):iu())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return mt(),il(e,n),e===null&&ir(n.stateNode.containerInfo),ie(n),null;case 10:return Bl(n.type._context),ie(n),null;case 17:return pe(n.type)&&ai(),ie(n),null;case 19:if(U(B),o=n.memoizedState,o===null)return ie(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Ot(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=mi(e),l!==null){for(n.flags|=128,Ot(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return A(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>yt&&(n.flags|=128,r=!0,Ot(o,!1),n.lanes=4194304)}else{if(!r)if(e=mi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ot(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ie(n),null}else 2*K()-o.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,Ot(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=B.current,A(B,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return ru(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function cv(e,n){switch(Ml(n),n.tag){case 1:return pe(n.type)&&ai(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),U(ve),U(le),Kl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Gl(n),null;case 13:if(U(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(B),null;case 4:return mt(),null;case 10:return Bl(n.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Fr=!1,oe=!1,fv=typeof WeakSet=="function"?WeakSet:Set,R=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function ol(e,n,t){try{t()}catch(r){W(e,n,r)}}var ds=!1;function dv(e,n){if(Ho=oi,e=za(),Dl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,s=-1,a=0,v=0,f=e,c=null;n:for(;;){for(var d;f!==t||i!==0&&f.nodeType!==3||(u=l+i),f!==o||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(d=f.firstChild)!==null;)c=f,f=d;for(;;){if(f===e)break n;if(c===t&&++a===i&&(u=l),c===o&&++v===r&&(s=l),(d=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=d}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vo={focusedElem:e,selectionRange:t},oi=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,x=m.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:ze(n.type,y),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){W(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return m=ds,ds=!1,m}function Qt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ol(n,t,o)}i=i.next}while(i!==r)}}function Fi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ll(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pc(e){var n=e.alternate;n!==null&&(e.alternate=null,Pc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ve],delete n[lr],delete n[Ko],delete n[Jd],delete n[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function vs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ul(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(ul(e,n,t),e=e.sibling;e!==null;)ul(e,n,t),e=e.sibling}function sl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,n,t),e=e.sibling;e!==null;)sl(e,n,t),e=e.sibling}var ee=null,je=!1;function ln(e,n,t){for(t=t.child;t!==null;)_c(e,n,t),t=t.sibling}function _c(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Ti,t)}catch{}switch(t.tag){case 5:oe||rt(t,n);case 6:var r=ee,i=je;ee=null,ln(e,n,t),ee=r,je=i,ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?lo(e.parentNode,t):e.nodeType===1&&lo(e,t),nr(e)):lo(ee,t.stateNode));break;case 4:r=ee,i=je,ee=t.stateNode.containerInfo,je=!0,ln(e,n,t),ee=r,je=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ol(t,n,l),i=i.next}while(i!==r)}ln(e,n,t);break;case 1:if(!oe&&(rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){W(t,n,u)}ln(e,n,t);break;case 21:ln(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,ln(e,n,t),oe=r):ln(e,n,t);break;default:ln(e,n,t)}}function ps(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new fv),n.forEach(function(r){var i=Ev.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,je=!1;break e;case 3:ee=u.stateNode.containerInfo,je=!0;break e;case 4:ee=u.stateNode.containerInfo,je=!0;break e}u=u.return}if(ee===null)throw Error(S(160));_c(o,l,i),ee=null,je=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){W(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zc(n,e),n=n.sibling}function zc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),$e(e),r&4){try{Qt(3,e,e.return),Fi(3,e)}catch(y){W(e,e.return,y)}try{Qt(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:_e(n,e),$e(e),r&512&&t!==null&&rt(t,t.return);break;case 5:if(_e(n,e),$e(e),r&512&&t!==null&&rt(t,t.return),e.flags&32){var i=e.stateNode;try{qt(i,"")}catch(y){W(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&bs(i,o),zo(u,l);var a=zo(u,o);for(l=0;l<s.length;l+=2){var v=s[l],f=s[l+1];v==="style"?ia(i,f):v==="dangerouslySetInnerHTML"?ta(i,f):v==="children"?qt(i,f):Sl(i,v,f,a)}switch(u){case"input":Ro(i,o);break;case"textarea":ea(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var d=o.value;d!=null?ot(i,!!o.multiple,d,!1):c!==!!o.multiple&&(o.defaultValue!=null?ot(i,!!o.multiple,o.defaultValue,!0):ot(i,!!o.multiple,o.multiple?[]:"",!1))}i[lr]=o}catch(y){W(e,e.return,y)}}break;case 6:if(_e(n,e),$e(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){W(e,e.return,y)}}break;case 3:if(_e(n,e),$e(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:_e(n,e),$e(e);break;case 13:_e(n,e),$e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(nu=K())),r&4&&ps(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(a=oe)||v,_e(n,e),oe=a):_e(n,e),$e(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!v&&e.mode&1)for(R=e,v=e.child;v!==null;){for(f=R=v;R!==null;){switch(c=R,d=c.child,c.tag){case 0:case 11:case 14:case 15:Qt(4,c,c.return);break;case 1:rt(c,c.return);var m=c.stateNode;if(typeof m.componentWillUnmount=="function"){r=c,t=c.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){W(r,t,y)}}break;case 5:rt(c,c.return);break;case 22:if(c.memoizedState!==null){ms(f);continue}}d!==null?(d.return=c,R=d):ms(f)}v=v.sibling}e:for(v=null,f=e;;){if(f.tag===5){if(v===null){v=f;try{i=f.stateNode,a?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ra("display",l))}catch(y){W(e,e.return,y)}}}else if(f.tag===6){if(v===null)try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(y){W(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;v===f&&(v=null),f=f.return}v===f&&(v=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_e(n,e),$e(e),r&4&&ps(e);break;case 21:break;default:_e(n,e),$e(e)}}function $e(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Oc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qt(i,""),r.flags&=-33);var o=vs(e);sl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=vs(e);ul(e,u,l);break;default:throw Error(S(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vv(e,n,t){R=e,jc(e)}function jc(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Fr;if(!l){var u=i.alternate,s=u!==null&&u.memoizedState!==null||oe;u=Fr;var a=oe;if(Fr=l,(oe=s)&&!a)for(R=i;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?gs(i):s!==null?(s.return=l,R=s):gs(i);for(;o!==null;)R=o,jc(o),o=o.sibling;R=i,Fr=u,oe=a}hs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):hs(e)}}function hs(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Fi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Zu(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Zu(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var v=a.memoizedState;if(v!==null){var f=v.dehydrated;f!==null&&nr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||n.flags&512&&ll(n)}catch(c){W(n,n.return,c)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function ms(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function gs(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Fi(4,n)}catch(s){W(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){W(n,i,s)}}var o=n.return;try{ll(n)}catch(s){W(n,o,s)}break;case 5:var l=n.return;try{ll(n)}catch(s){W(n,l,s)}}}catch(s){W(n,n.return,s)}if(n===e){R=null;break}var u=n.sibling;if(u!==null){u.return=n.return,R=u;break}R=n.return}}var pv=Math.ceil,xi=on.ReactCurrentDispatcher,bl=on.ReactCurrentOwner,Ie=on.ReactCurrentBatchConfig,j=0,b=null,Q=null,ne=0,me=0,it=Tn(0),Y=0,dr=null,Hn=0,Di=0,eu=0,Jt=null,fe=null,nu=0,yt=1/0,Qe=null,wi=!1,al=null,wn=null,Dr=!1,pn=null,Ei=0,Xt=0,cl=null,Jr=-1,Xr=0;function se(){return j&6?K():Jr!==-1?Jr:Jr=K()}function En(e){return e.mode&1?j&2&&ne!==0?ne&-ne:qd.transition!==null?(Xr===0&&(Xr=ma()),Xr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Na(e.type)),e):1}function Me(e,n,t,r){if(50<Xt)throw Xt=0,cl=null,Error(S(185));pr(e,t,r),(!(j&2)||e!==b)&&(e===b&&(!(j&2)&&(Di|=t),Y===4&&dn(e,ne)),he(e,r),t===1&&j===0&&!(n.mode&1)&&(yt=K()+500,_i&&Rn()))}function he(e,n){var t=e.callbackNode;qf(e,n);var r=ii(e,e===b?ne:0);if(r===0)t!==null&&Tu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Tu(t),n===1)e.tag===0?Yd(ys.bind(null,e)):Ha(ys.bind(null,e)),Kd(function(){!(j&6)&&Rn()}),t=null;else{switch(ga(r)){case 1:t=Rl;break;case 4:t=pa;break;case 16:t=ri;break;case 536870912:t=ha;break;default:t=ri}t=Bc(t,Fc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fc(e,n){if(Jr=-1,Xr=0,j&6)throw Error(S(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=ii(e,e===b?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Si(e,r);else{n=r;var i=j;j|=2;var o=Ac();(b!==e||ne!==n)&&(Qe=null,yt=K()+500,An(e,n));do try{gv();break}catch(u){Dc(e,u)}while(1);$l(),xi.current=o,j=i,Q!==null?n=0:(b=null,ne=0,n=Y)}if(n!==0){if(n===2&&(i=Mo(e),i!==0&&(r=i,n=fl(e,i))),n===1)throw t=dr,An(e,0),dn(e,r),he(e,K()),t;if(n===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!hv(i)&&(n=Si(e,r),n===2&&(o=Mo(e),o!==0&&(r=o,n=fl(e,o))),n===1))throw t=dr,An(e,0),dn(e,r),he(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:_n(e,fe,Qe);break;case 3:if(dn(e,r),(r&130023424)===r&&(n=nu+500-K(),10<n)){if(ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Go(_n.bind(null,e,fe,Qe),n);break}_n(e,fe,Qe);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Ae(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pv(r/1960))-r,10<r){e.timeoutHandle=Go(_n.bind(null,e,fe,Qe),r);break}_n(e,fe,Qe);break;case 5:_n(e,fe,Qe);break;default:throw Error(S(329))}}}return he(e,K()),e.callbackNode===t?Fc.bind(null,e):null}function fl(e,n){var t=Jt;return e.current.memoizedState.isDehydrated&&(An(e,n).flags|=256),e=Si(e,n),e!==2&&(n=fe,fe=t,n!==null&&dl(n)),e}function dl(e){fe===null?fe=e:fe.push.apply(fe,e)}function hv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ue(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~eu,n&=~Di,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function ys(e){if(j&6)throw Error(S(327));ct();var n=ii(e,0);if(!(n&1))return he(e,K()),null;var t=Si(e,n);if(e.tag!==0&&t===2){var r=Mo(e);r!==0&&(n=r,t=fl(e,r))}if(t===1)throw t=dr,An(e,0),dn(e,n),he(e,K()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_n(e,fe,Qe),he(e,K()),null}function tu(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(yt=K()+500,_i&&Rn())}}function Vn(e){pn!==null&&pn.tag===0&&!(j&6)&&ct();var n=j;j|=1;var t=Ie.transition,r=F;try{if(Ie.transition=null,F=1,e)return e()}finally{F=r,Ie.transition=t,j=n,!(j&6)&&Rn()}}function ru(){me=it.current,U(it)}function An(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Gd(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(Ml(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:mt(),U(ve),U(le),Kl();break;case 5:Gl(r);break;case 4:mt();break;case 13:U(B);break;case 19:U(B);break;case 10:Bl(r.type._context);break;case 22:case 23:ru()}t=t.return}if(b=e,Q=e=Sn(e.current,null),ne=me=n,Y=0,dr=null,eu=Di=Hn=0,fe=Jt=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Fn=null}return e}function Dc(e,n){do{var t=Q;try{if($l(),Gr.current=yi,gi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(Bn=0,Z=J=H=null,Kt=!1,ar=0,bl.current=null,t===null||t.return===null){Y=1,dr=n,Q=null;break}e:{var o=e,l=t.return,u=t,s=n;if(n=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,v=u,f=v.tag;if(!(v.mode&1)&&(f===0||f===11||f===15)){var c=v.alternate;c?(v.updateQueue=c.updateQueue,v.memoizedState=c.memoizedState,v.lanes=c.lanes):(v.updateQueue=null,v.memoizedState=null)}var d=os(l);if(d!==null){d.flags&=-257,ls(d,l,u,o,n),d.mode&1&&is(o,a,n),n=d,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){is(o,a,n),iu();break e}s=Error(S(426))}}else if($&&u.mode&1){var x=os(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ls(x,l,u,o,n),Ll(gt(s,u));break e}}o=s=gt(s,u),Y!==4&&(Y=2),Jt===null?Jt=[o]:Jt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var h=yc(o,s,n);qu(o,h);break e;case 1:u=s;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=xc(o,u,n);qu(o,w);break e}}o=o.return}while(o!==null)}Lc(t)}catch(E){n=E,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(1)}function Ac(){var e=xi.current;return xi.current=yi,e===null?yi:e}function iu(){(Y===0||Y===3||Y===2)&&(Y=4),b===null||!(Hn&268435455)&&!(Di&268435455)||dn(b,ne)}function Si(e,n){var t=j;j|=2;var r=Ac();(b!==e||ne!==n)&&(Qe=null,An(e,n));do try{mv();break}catch(i){Dc(e,i)}while(1);if($l(),j=t,xi.current=r,Q!==null)throw Error(S(261));return b=null,ne=0,Y}function mv(){for(;Q!==null;)Mc(Q)}function gv(){for(;Q!==null&&!Hf();)Mc(Q)}function Mc(e){var n=$c(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Lc(e):Q=n,bl.current=null}function Lc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cv(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(t=av(t,n,me),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);Y===0&&(Y=5)}function _n(e,n,t){var r=F,i=Ie.transition;try{Ie.transition=null,F=1,yv(e,n,t,r)}finally{Ie.transition=i,F=r}return null}function yv(e,n,t,r){do ct();while(pn!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Zf(e,o),e===b&&(Q=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Dr||(Dr=!0,Bc(ri,function(){return ct(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=F;F=1;var u=j;j|=4,bl.current=null,dv(e,t),zc(t,e),Ld(Vo),oi=!!Ho,Vo=Ho=null,e.current=t,vv(t),Vf(),j=u,F=l,Ie.transition=o}else e.current=t;if(Dr&&(Dr=!1,pn=e,Ei=i),o=e.pendingLanes,o===0&&(wn=null),Kf(t.stateNode),he(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(wi)throw wi=!1,e=al,al=null,e;return Ei&1&&e.tag!==0&&ct(),o=e.pendingLanes,o&1?e===cl?Xt++:(Xt=0,cl=e):Xt=0,Rn(),null}function ct(){if(pn!==null){var e=ga(Ei),n=Ie.transition,t=F;try{if(Ie.transition=null,F=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Ei=0,j&6)throw Error(S(331));var i=j;for(j|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(R=a;R!==null;){var v=R;switch(v.tag){case 0:case 11:case 15:Qt(8,v,o)}var f=v.child;if(f!==null)f.return=v,R=f;else for(;R!==null;){v=R;var c=v.sibling,d=v.return;if(Pc(v),v===a){R=null;break}if(c!==null){c.return=d,R=c;break}R=d}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qt(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var p=e.current;for(R=p;R!==null;){l=R;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,R=g;else e:for(l=p;R!==null;){if(u=R,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Fi(9,u)}}catch(E){W(u,u.return,E)}if(u===l){R=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,R=w;break e}R=u.return}}if(j=i,Rn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Ti,e)}catch{}r=!0}return r}finally{F=t,Ie.transition=n}}return!1}function xs(e,n,t){n=gt(t,n),n=yc(e,n,1),e=xn(e,n,1),n=se(),e!==null&&(pr(e,1,n),he(e,n))}function W(e,n,t){if(e.tag===3)xs(e,e,t);else for(;n!==null;){if(n.tag===3){xs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=gt(t,e),e=xc(n,e,1),n=xn(n,e,1),e=se(),n!==null&&(pr(n,1,e),he(n,e));break}}n=n.return}}function xv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>K()-nu?An(e,0):eu|=t),he(e,n)}function Uc(e,n){n===0&&(e.mode&1?(n=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):n=1);var t=se();e=tn(e,n),e!==null&&(pr(e,n,t),he(e,t))}function wv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Uc(e,t)}function Ev(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Uc(e,t)}var $c;$c=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,sv(e,n,t);de=!!(e.flags&131072)}else de=!1,$&&n.flags&1048576&&Va(n,di,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Qr(e,n),e=n.pendingProps;var i=vt(n,le.current);at(n,t),i=Jl(null,n,r,e,i,t);var o=Xl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(o=!0,ci(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vl(n),i.updater=zi,n.stateNode=i,i._reactInternals=n,Zo(n,r,e,t),n=nl(null,n,r,!0,o,t)):(n.tag=0,$&&o&&Al(n),ue(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Qr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Nv(r),e=ze(r,e),i){case 0:n=el(null,n,r,e,t);break e;case 1:n=as(null,n,r,e,t);break e;case 11:n=us(null,n,r,e,t);break e;case 14:n=ss(null,n,r,ze(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),el(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),as(e,n,r,i,t);case 3:e:{if(Nc(n),e===null)throw Error(S(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Qa(e,n),hi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=gt(Error(S(423)),n),n=cs(e,n,r,t,i);break e}else if(r!==i){i=gt(Error(S(424)),n),n=cs(e,n,r,t,i);break e}else for(ge=yn(n.stateNode.containerInfo.firstChild),ye=n,$=!0,De=null,t=qa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===i){n=rn(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return Za(n),e===null&&Xo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Wo(r,i)?l=null:o!==null&&Wo(r,o)&&(n.flags|=32),Sc(e,n),ue(e,n,l,t),n.child;case 6:return e===null&&Xo(n),null;case 13:return kc(e,n,t);case 4:return Wl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ht(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),us(e,n,r,i,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,A(vi,r._currentValue),r._currentValue=l,o!==null)if(Ue(o.value,l)){if(o.children===i.children&&!ve.current){n=rn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ze(-1,t&-t),s.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var v=a.pending;v===null?s.next=s:(s.next=v.next,v.next=s),a.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Yo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Yo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ue(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=Re(i),r=r(i),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),ss(e,n,r,i,t);case 15:return wc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Qr(e,n),n.tag=1,pe(r)?(e=!0,ci(n)):e=!1,at(n,t),Xa(n,r,i),Zo(n,r,i,t),nl(null,n,r,!0,e,t);case 19:return Ic(e,n,t);case 22:return Ec(e,n,t)}throw Error(S(156,n.tag))};function Bc(e,n){return va(e,n)}function Sv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new Sv(e,n,t,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kl)return 11;if(e===Il)return 14}return 2}function Sn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")ou(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jn:return Mn(t.children,i,o,n);case Nl:l=8,i|=8;break;case So:return e=ke(12,t,n,i|2),e.elementType=So,e.lanes=o,e;case No:return e=ke(13,t,n,i),e.elementType=No,e.lanes=o,e;case ko:return e=ke(19,t,n,i),e.elementType=ko,e.lanes=o,e;case Ys:return Ai(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Js:l=10;break e;case Xs:l=9;break e;case kl:l=11;break e;case Il:l=14;break e;case an:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=ke(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Mn(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function Ai(e,n,t,r){return e=ke(22,e,r,n),e.elementType=Ys,e.lanes=t,e.stateNode={isHidden:!1},e}function ho(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function mo(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kv(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xi(0),this.expirationTimes=Xi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lu(e,n,t,r,i,o,l,u,s){return e=new kv(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ke(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(o),e}function Iv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Hc(e){if(!e)return kn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(pe(t))return Ba(e,t,n)}return n}function Vc(e,n,t,r,i,o,l,u,s){return e=lu(t,r,!0,e,i,o,l,u,s),e.context=Hc(null),t=e.current,r=se(),i=En(t),o=Ze(r,i),o.callback=n??null,xn(t,o,i),e.current.lanes=i,pr(e,i,r),he(e,r),e}function Mi(e,n,t,r){var i=n.current,o=se(),l=En(i);return t=Hc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ze(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=xn(i,n,l),e!==null&&(Me(e,i,l,o),Wr(e,i,l)),l}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ws(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function uu(e,n){ws(e,n),(e=e.alternate)&&ws(e,n)}function Tv(){return null}var Wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}Li.prototype.render=su.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Mi(e,n,null,null)};Li.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){Mi(null,e,null,null)}),n[nn]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var n=wa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&Sa(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Es(){}function Rv(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var a=Ni(l);o.call(a)}}var l=Vc(n,r,e,0,null,!1,!1,"",Es);return e._reactRootContainer=l,e[nn]=l.current,ir(e.nodeType===8?e.parentNode:e),Vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=Ni(s);u.call(a)}}var s=lu(e,0,!1,null,null,!1,!1,"",Es);return e._reactRootContainer=s,e[nn]=s.current,ir(e.nodeType===8?e.parentNode:e),Vn(function(){Mi(n,s,t,r)}),s}function $i(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var s=Ni(l);u.call(s)}}Mi(n,l,e,i)}else l=Rv(t,n,e,i,r);return Ni(l)}ya=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Mt(n.pendingLanes);t!==0&&(Cl(n,t|1),he(n,K()),!(j&6)&&(yt=K()+500,Rn()))}break;case 13:Vn(function(){var r=tn(e,1);if(r!==null){var i=se();Me(r,e,1,i)}}),uu(e,1)}};Pl=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=se();Me(n,e,134217728,t)}uu(e,134217728)}};xa=function(e){if(e.tag===13){var n=En(e),t=tn(e,n);if(t!==null){var r=se();Me(t,e,n,r)}uu(e,n)}};wa=function(){return F};Ea=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};Fo=function(e,n,t){switch(n){case"input":if(Ro(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Oi(r);if(!i)throw Error(S(90));Zs(r),Ro(r,i)}}}break;case"textarea":ea(e,t);break;case"select":n=t.value,n!=null&&ot(e,!!t.multiple,n,!1)}};ua=tu;sa=Vn;var Cv={usingClientEntryPoint:!1,Events:[mr,Zn,Oi,oa,la,tu]},_t={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Pv={bundleType:_t.bundleType,version:_t.version,rendererPackageName:_t.rendererPackageName,rendererConfig:_t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fa(e),e===null?null:e.stateNode},findFiberByHostInstance:_t.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{Ti=Ar.inject(Pv),Ge=Ar}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(n))throw Error(S(200));return Iv(e,n,null,t)};we.createRoot=function(e,n){if(!au(e))throw Error(S(299));var t=!1,r="",i=Wc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=lu(e,1,!1,null,null,t,!1,r,i),e[nn]=n.current,ir(e.nodeType===8?e.parentNode:e),new su(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=fa(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Vn(e)};we.hydrate=function(e,n,t){if(!Ui(n))throw Error(S(200));return $i(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!au(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Wc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Vc(n,null,e,1,t??null,i,!1,o,l),e[nn]=n.current,ir(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Li(n)};we.render=function(e,n,t){if(!Ui(n))throw Error(S(200));return $i(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(S(40));return e._reactRootContainer?(Vn(function(){$i(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};we.unstable_batchedUpdates=tu;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ui(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return $i(e,n,t,!1,r)};we.version="18.2.0-next-9e3b772b8-20220608";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(e){console.error(e)}}Gc(),Vs.exports=we;var Ov=Vs.exports,Ss=Ov;mu.createRoot=Ss.createRoot,mu.hydrateRoot=Ss.hydrateRoot;const _v=`float ease(float t) {
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
`,zv=`#include config

// Constants
const float PI = 3.14159265358979323846264338327950288;
const float TAU = 2. * PI;
const float ETA = PI / 2.;
const float DT = .001;
const float SCALING = .0005;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

#include dimensions

// Global vertex uniforms
uniform float segments;
uniform mat4 viewProjection;
uniform matN metric;
uniform matN matrix;
uniform float curvature;

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
`,jv=`
// Structures for >4 vec and mat
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

#if DIMENSIONS >= 2
float ndot(in vec2 v, in vec2 w) {
  return dot(v, w);
}
#endif
#if DIMENSIONS >= 3
float ndot(in vec3 v, in vec3 w) {
  return dot(v, w);
}
#endif
#if DIMENSIONS >= 4
float ndot(in vec4 v, in vec4 w) {
  return dot(v, w);
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

#if DIMENSIONS == 2
vec2 nadd(in vec2 v, in vec2 w) {
  return v + w;
}
vec2 nsub(in vec2 v, in vec2 w) {
  return v - w;
}
vec2 nmul(in vec2 v, in float s) {
  return v * s;
}
#elif DIMENSIONS == 3
vec3 nadd(in vec3 v, in vec3 w) {
  return v + w;
}
vec3 nsub(in vec3 v, in vec3 w) {
  return v - w;
}
vec3 nmul(in vec3 v, in float s) {
  return v * s;
}
#elif DIMENSIONS == 4
vec4 nadd(in vec4 v, in vec4 w) {
  return v + w;
}
vec4 nsub(in vec4 v, in vec4 w) {
  return v - w;
}
vec4 nmul(in vec4 v, in float s) {
  return v * s;
}
#elif DIMENSIONS == 5
vec5 nadd(in vec5 v, in vec5 w) {
  return vec5(v.v + w.v, v.u + w.u);
}
vec5 nsub(in vec5 v, in vec5 w) {
  return vec5(v.v - w.v, v.u - w.u);
}
vec5 nmul(in vec5 v, in float s) {
  return vec5(v.v * s, v.u * s);
}
#elif DIMENSIONS == 6
vec6 nadd(in vec6 v, in vec6 w) {
  return vec6(v.v + w.v, v.u + w.u);
}
vec6 nsub(in vec6 v, in vec6 w) {
  return vec6(v.v - w.v, v.u - w.u);
}
vec6 nmul(in vec6 v, in float s) {
  return vec6(v.v * s, v.u * s);
}
#elif DIMENSIONS == 7
vec7 nadd(in vec7 v, in vec7 w) {
  return vec7(v.v + w.v, v.u + w.u);
}
vec7 nsub(in vec7 v, in vec7 w) {
  return vec7(v.v - w.v, v.u - w.u);
}
vec7 nmul(in vec7 v, in float s) {
  return vec7(v.v * s, v.u * s);
}
#elif DIMENSIONS == 8
vec8 nadd(in vec8 v, in vec8 w) {
  return vec8(v.v + w.v, v.u + w.u);
}
vec8 nsub(in vec8 v, in vec8 w) {
  return vec8(v.v - w.v, v.u - w.u);
}
vec8 nmul(in vec8 v, in float s) {
  return vec8(v.v * s, v.u * s);
}
#elif DIMENSIONS == 9
vec9 nadd(in vec9 v, in vec9 w) {
  return vec9(v.v + w.v, v.u + w.u, v.t + w.t);
}
vec9 nsub(in vec9 v, in vec9 w) {
  return vec9(v.v - w.v, v.u - w.u, v.t - w.t);
}
vec9 nmul(in vec9 v, in float s) {
  return vec9(v.v * s, v.u * s, v.t * s);
}
#endif

#if DIMENSIONS == 2
vec2 adapt(in vec2 m) {
  return m;
}
#elif DIMENSIONS == 3
vec3 adapt(in vec3 m) {
  return m;
}
#elif DIMENSIONS == 4
vec4 adapt(in vec4 m) {
  return m;
}
#elif DIMENSIONS == 5
vec5 adapt(in mat3 m) {
  return vec5(vec4(m[0], m[1][0]), m[1][1]);
}
#elif DIMENSIONS == 6
vec6 adapt(in mat3 m) {
  return vec6(vec4(m[0], m[1][0]), vec2(m[1][1], m[1][2]));
}
#elif DIMENSIONS == 7
vec7 adapt(in mat3 m) {
  return vec7(vec4(m[0], m[1][0]), vec3(m[1][1], m[1][2], m[2][0]));
}
#elif DIMENSIONS == 8
vec8 adapt(in mat3 m) {
  return vec8(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]));
}
#elif DIMENSIONS == 9
vec9 adapt(in mat3 m) {
  return vec9(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]), m[2][2]);
}
#endif

#if DIMENSIONS == 2
vec2 multiplyMatrix(mat2 m, vec2 v) {
  return m * v;
}
#elif DIMENSIONS == 3
vec3 multiplyMatrix(mat3 m, vec3 v) {
  return m * v;
}
#elif DIMENSIONS == 4
vec4 multiplyMatrix(mat4 m, vec4 v) {
  return m * v;
}
#elif DIMENSIONS == 5
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
`,Fv=`float len(in vecN v) {
  return sqrt(ndot(v, v));
}

float xdot(in vecN v) {
  return ndot(multiplyMatrix(metric, v), v);
}

vecN xnormalize(in vecN v) {
  float n = 1. / sqrt(curvature * xdot(v));
  return nmul(v, n);
}

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
`,Dv=`#include helpers
#include ease

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
`,Mv=`vec4 light(vec4 color, float ambient, float shininess) {
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
`,Lv=(e,n)=>{let t=0;for(let r=0;r<e.length;r++)t+=e[r]*n[r];return t},Ns=(e,n)=>{const t=[];for(let r=0;r<e.length;r++)t[r]=e[r]*n;return t},ki=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},vl=e=>{for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)e[n][t]=Vv(e[n][t]);return e},Fe=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let i=0;i<n[0].length;i++){let o=0;for(let l=0;l<n.length;l++)o+=e[r][l]*n[l][i];t[r][i]=o}}return t},Uv=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let o=0;o<e[0].length;o++)i+=e[r][o]*n[o];t[r]=i}return t},Kp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},cu=e=>{const n=new Array(e.length);for(let t=0;t<e.length;t++)n[t]=new Array(e.length).fill(0),n[t][t]=e[t];return n},Pe=e=>{const n=new Array(e).fill(1);return cu(n)},$v=e=>e.every((n,t)=>n.every((r,i)=>t===i||e[t][i]===0)),Bv=e=>{const n=e[0].length;let t=e.map(s=>s.slice()),r=Pe(n),i=1e3;for(;!$v(t)&&i-- >0;){let s=0,a=1;for(let c=0;c<n;c++)for(let d=0;d<n;d++)c!==d&&be(t[c][d])>be(t[s][a])&&(s=c,a=d);const v=t[s][s]===t[a][a]?fu(t[s][a])*Le/4:.5*Yv(2*t[s][a]/(t[s][s]-t[a][a])),f=Pe(n);f[a][a]=f[s][s]=qe(v),f[a][s]=f[s][a]=-We(v),f[a][s]*=-1,r=Fe(r,f),t=Fe(Fe(ki(f),t),f)}const o=t.map((s,a)=>be(s[a])<1e-8?0:s[a]),l=o.map((s,a)=>[s,a]).sort((s,a)=>a[0]-s[0]).map(s=>s[1]),u=ki(r);return{values:l.map(s=>o[s]),vectors:l.map(s=>u[s])}},Hv=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...Pe(n)[r]]);for(let r=0;r<n;r++){const i=t[r][r];for(let o=r+1;o<n;o++){const l=t[o][r]/i;for(let u=r;u<2*n;u++)t[o][u]-=l*t[r][u]}}for(let r=n-1;r>=0;r--){const i=t[r][r];for(let o=r-1;o>=0;o--){const l=t[o][r]/i;for(let u=0;u<2*n;u++)t[o][u]-=l*t[r][u]}for(let o=n;o<2*n;o++)t[r][o]/=i}return t.map(r=>r.slice(n))},Vv=e=>be(e)<1e-9?0:e,Wv=e=>{const n=e.length,t=Pe(n),r=Pe(n);for(let i=0;i<n;i++){t[i][i]=e[i][i];for(let o=0;o<i;o++)t[i][i]-=r[i][o]**2*t[o][o];for(let o=i+1;o<n;o++){let l=0;for(let u=0;u<i;u++)l+=r[i][u]*r[o][u]*t[u][u];r[o][i]=(e[o][i]-l)/t[i][i]}}return vl(t),vl(r),{L:r,D:t}},ft=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Gv=(e,n,t,r,i=1)=>{const o=i/Jc(e/2),l=1/(t-r),u=Pe(4);return u[0][0]=o/n,u[1][1]=o,u[2][2]=(r+t)*l,u[3][2]=-1,u[2][3]=2*r*t*l,u[3][3]=0,u},Kv=(e,n,t)=>{if(be(e[0]-n[0])<1e-4&&be(e[1]-n[1])<1e-4&&be(e[2]-n[2])<1e-4)return Pe(4);let r=e[0]-n[0],i=e[1]-n[1],o=e[2]-n[2],l=1/L(r*r+i*i+o*o);r*=l,i*=l,o*=l;let u=t[1]*o-t[2]*i,s=t[2]*r-t[0]*o,a=t[0]*i-t[1]*r;l=L(u*u+s*s+a*a),l?(l=1/l,u*=l,s*=l,a*=l):(u=0,s=0,a=0);let v=i*a-o*s,f=o*u-r*a,c=r*s-i*u;l=L(v*v+f*f+c*c),l?(l=1/l,v*=l,f*=l,c*=l):(v=0,f=0,c=0);const d=Pe(4);return d[0][0]=u,d[1][0]=v,d[2][0]=r,d[0][1]=s,d[1][1]=f,d[2][1]=i,d[0][2]=a,d[1][2]=c,d[2][2]=o,d[0][3]=-(u*e[0]+s*e[1]+a*e[2]),d[1][3]=-(v*e[0]+f*e[1]+c*e[2]),d[2][3]=-(r*e[0]+i*e[1]+o*e[2]),d},Qv=(e,n)=>n.some((t,r)=>t.some((i,o)=>r===o&&i===0))?Ns(e,1/e[e.length-1]):Ns(e,-1/L(be(Lv(Uv(n,e),e)))),Qp=(e,n)=>vl(e.map((t,r)=>t.map((i,o)=>i<0?-Xv(-i/10):i===0?-1:-qe(n[r][o]*Le/i)))),Kc=e=>{const n=Bv(e);return{"+":n.values.filter(t=>t>0).length,"-":n.values.filter(t=>t<0).length,0:n.values.filter(t=>t===0).length,eigens:n}},Qc=(e,n=[],t=0,r=10)=>{n[t]=n[t]||[];for(let i=0;i<e.length;i++){const o=e.filter((l,u)=>u!==i).map(l=>l.filter((u,s)=>s!==i));n[t].push(Kc(o)),o.length>1&&t+1<r&&Qc(o,n,t+1,r)}return n},Jp=e=>{const n=Kc(e),t=n.eigens,r=cu(t.values.map(u=>fu(u))),i={eigens:t,gram:e,metric:r};if(n["-"]===0&&n[0]===0)return{...i,type:"finite",curvature:1};if(n["-"]===0&&n[0]>0)return{...i,type:"affine",curvature:0};if(n["-"]>1)return{...i,type:"hyperbolic",subtype:"superhyperbolic",level:n["-"],curvature:-1};const o=Qc(e,[],0,3),l=o[0];if(l.every(u=>u["-"]===0&&u[0]===0))return{...i,type:"hyperbolic",subtype:"compact",curvature:-1};if(l.every(u=>u["-"]===0))return{...i,type:"hyperbolic",subtype:"paracompact",curvature:-1};for(let u=1;u<o.length;u++)if(o[u].every(a=>a["-"]===0))return{...i,type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:u+1};return console.log("indefinite",o),{...i,type:"indefinite",curvature:-1}},pl=1,ks=e=>e.map((n,t)=>n.map((r,i)=>t===i&&r===0?pl:r)),Xp=(e,n)=>{const t=e.eigens,r=e.metric;if(n===!0){const{L:c,D:d}=Wv(e.gram);let m;if(d.some((y,x)=>isNaN(d[x][x])))console.warn("Can’t cholesky"),m=Jv(e,n);else{const y=Fe(r,d).map((x,h)=>x.map((p,g)=>h===g?L(p):0));r.forEach((x,h)=>{x[h]===0&&(y[h][h]=pl)}),m=Fe(c,y)}if(m){const y=Fe(m,ks(r)),x=Hv(y);if(!x.some(h=>h.some(p=>isNaN(p))))return{normals:m,vertices:x}}console.warn("Can’t center")}const i=t.values.slice(),o=t.vectors.slice();if(n===!1){const c=Te(...i.filter(m=>m>0)),d=i.indexOf(c);[r[d][d],r[1][1]]=[r[1][1],r[d][d]],o.splice(1,0,o.splice(d,1)[0]),i.splice(d,1),i.splice(1,0,c)}i.forEach((c,d)=>{c===0&&(i[d]=.05)});const l=ki(o),u=cu(i),s=Fe(r,u).map((c,d)=>c.map((m,y)=>d===y?L(m):0));r.forEach((c,d)=>{c[d]===0&&(s[d][d]=pl)});const a=s.map((c,d)=>c.map((m,y)=>d===y?m!==0?1/m:1:0)),v=Fe(l,s),f=Fe(Fe(ks(r),a),ki(l));return{normals:v,vertices:f}},Yp=e=>e.sort((n,t)=>{const[r,i]=n,[o,l]=t;return r===0&&i===1?1:o===0&&l===1||r<2&&o>=2?-1:o<2&&r>=2?1:r<2&&o<2?i===l?o-r:i-l:r===o?l-i:o-r}),qp=(e,n,t,r,i)=>{const o=Pe(r);if(n>t.length-1||be(e)>1)return o;const[l,u]=t[n];if(i[l][l]===0||i[u][u]===0)return i[l][l]===0&&(o[u][l]=e),i[u][u]===0&&(o[l][u]=e),o;const s=Te(i[l][l],i[u][u]),a=L(1-s*e*e),v=e;return o[l][l]=a,o[u][u]=a,o[l][u]=-s*v,o[u][l]=v,o},Jv=(e,n)=>{const t=e.gram,r=t.length,i=e.curvature;let o=null;const l=t.every((u,s)=>u.every((a,v)=>s===v||a<=-1));if(n||l){if(o=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const u=(t[0][1]+1)/2;return o[0][0]=L(u-t[0][1]),o[1][0]=-L(u-t[0][1]),o[0][1]=o[1][1]=L((i||1)*u),i===0&&(o[1][1]=.5),o}else if(r===3){const u=t[0][1],s=t[1][2],a=t[0][2],v=(u*u+s*s+a*a-2*u*s*a-1)/(u*u+s*s+a*a-2*u*s-2*u*a-2*s*a+2*u+2*s+2*a-3);return o[0][2]=o[1][2]=o[2][2]=L(i*v),o[2][1]=-L(1-v),o[1][1]=(s-v)/o[2][1],o[0][1]=(a-v)/o[2][1],o[1][0]=-L(1-o[1][1]**2-v),o[0][0]=L(1-o[0][1]**2-v),i===0&&(o[2][2]=.5),o}else if(r===4){const u=t[0][1],s=t[1][2],a=t[2][3],v=t[0][2],f=t[1][3],c=t[0][3],d=(u*u*a*a+s*s*c*c+v*v*f*f-u*u-s*s-a*a-v*v-f*f-c*c+2*u*f*c+2*u*s*v+2*s*a*f+2*a*v*c-2*s*v*f*c-2*u*s*a*c-2*u*a*v*f+1)/(2*(u*u*a+s*s*c+a*a*u+v*v*f+f*f*v+c*c*s-u*u-s*s-a*a-v*v-f*f-c*c-u*s*a-u*s*c-u*a*v-u*a*f-u*a*c-u*v*f-s*a*c-s*v*f-s*v*c-s*f*c-a*v*f-v*f*c+u*s*v+u*f*c+s*a*f+a*v*c+u*s+u*v+u*f+u*c+s*a+s*v+s*f+a*v+a*f+a*c+v*c+f*c-u-s-a-v-f-c+2));return o[0][3]=o[1][3]=o[2][3]=o[3][3]=L(i*d),o[3][2]=-L(1-d),o[2][2]=(a-d)/o[3][2],o[1][2]=(f-d)/o[3][2],o[0][2]=(c-d)/o[3][2],o[2][1]=-L(1-d-o[2][2]**2),o[1][1]=(s-d-o[1][2]*o[2][2])/o[2][1],o[0][1]=(v-d-o[0][2]*o[2][2])/o[2][1],o[1][0]=-L(1-d-o[1][1]**2-o[1][2]**2),o[0][0]=L(1-d-o[0][1]**2-o[0][2]**2),i===0&&(o[3][3]=.5),o}if(t.every((u,s)=>u.every((a,v)=>s===v||a===-1))){const u=[0];for(let s=1;s<r;s++)u[s]=(u[s-1]+1)/(3-u[s-1]);o[0][0]=1,o[1][0]=-1,o[0][1]=L(u[1]),o[1][1]=L(u[1]);for(let s=0;s<r;s++)for(let a=0;a<r;a++)s<2&&a<2||(o[s][a]=a<s-1?0:a===s-1?s*L(u[a]-u[a-1]):a<r-1?L(u[a]-u[a-1]):L(u[a-1]));return o}}},{abs:be,cos:qe,sin:We,tan:Jc,cosh:Xv,sinh:Zp,acos:bp,acosh:e0,atan:Yv,atan2:qv,min:Te,max:zt,round:n0,sqrt:L,sign:fu,ceil:t0,floor:r0,log:i0,exp:o0,hypot:l0,pow:Zv,PI:Le}=Math,hl=Le*2;function*bv(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(i=>e[i]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let i=t[r]+1;r<n;r++,i++)t[r]=i}}const u0=(e,n=2)=>Array.from(bv(e,n)),Xc=e=>String.fromCharCode(97+e),Is=e=>e.charCodeAt(0)-97,qr=e=>e?e*qr(e-1):1,s0=(e,n)=>qr(e)/(qr(n)*qr(e-n)),a0=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},ep=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,o)=>e+o*t)};var Yc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(rf,function(){var t=function(){function r(d){return l.appendChild(d.dom),d}function i(d){for(var m=0;m<l.children.length;m++)l.children[m].style.display=m===d?"block":"none";o=d}var o=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(d){d.preventDefault(),i(++o%l.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,v=r(new t.Panel("FPS","#0ff","#002")),f=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=r(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:l,addPanel:r,showPanel:i,begin:function(){u=(performance||Date).now()},end:function(){a++;var d=(performance||Date).now();if(f.update(d-u,200),d>s+1e3&&(v.update(1e3*a/(d-s),100),s=d,a=0,c)){var m=performance.memory;c.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return d},update:function(){u=this.end()},domElement:l,setMode:i}};return t.Panel=function(r,i,o){var l=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),v=80*a,f=48*a,c=3*a,d=2*a,m=3*a,y=15*a,x=74*a,h=30*a,p=document.createElement("canvas");p.width=v,p.height=f,p.style.cssText="width:80px;height:48px";var g=p.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=o,g.fillRect(0,0,v,f),g.fillStyle=i,g.fillText(r,c,d),g.fillRect(m,y,x,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m,y,x,h),{dom:p,update:function(w,E){l=Math.min(l,w),u=Math.max(u,w),g.fillStyle=o,g.globalAlpha=1,g.fillRect(0,0,v,y),g.fillStyle=i,g.fillText(s(w)+" "+r+" ("+s(l)+"-"+s(u)+")",c,d),g.drawImage(p,m+a,y,x-a,h,m,y,x-a,h),g.fillRect(m+x-a,y,a,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m+x-a,y,a,s((1-w/E)*h))}}},t})})(Yc);var np=Yc.exports;const tp=of(np),rp=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],i=[],o=[],l=[];let u=0;const s=[];for(let a=0;a<=t;a++){const v=[],f=a/t;let c=0;a===0?c=.5/n:a===t&&(c=-.5/n);for(let d=0;d<=n;d++){const m=d/n,y=[-e*qe(m*hl)*We(f*Le),e*qe(f*Le),e*We(m*hl)*We(f*Le)];i.push(...y);const x=(y[0]**2+y[1]**2+y[2]**2)**-.5;o.push(...y.map(h=>h*x)),l.push(m+c,1-f),v.push(u++)}s.push(v)}for(let a=0;a<t;a++)for(let v=0;v<n;v++){const f=s[a][v+1],c=s[a][v],d=s[a+1][v],m=s[a+1][v+1];a!==0&&r.push(f,c,m),a!==t-1&&r.push(c,d,m)}return{vertices:i,normals:o,uvs:l,indices:r}},ip=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:i=8,segments:o=1}={})=>{const l=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let v=0;const f=[],c=r/2,d=(t-n)/r;for(let m=0;m<=o;m++){const y=[],x=m/o,h=x*(t-n)+n;for(let p=0;p<=i;p++){const g=p/i,w=g*hl,E=We(w),I=qe(w),N=[h*E,-x*r+c,h*I];u.push(...N);const k=[E,d,I],D=(k[0]**2+k[1]**2+k[2]**2)**-.5;s.push(...k.map(_=>_*D)),a.push(g,1-x),y.push(v++)}f.push(y)}for(let m=0;m<i;m++)for(let y=0;y<o;y++){const x=f[y][m],h=f[y+1][m],p=f[y+1][m+1],g=f[y][m+1];l.push(x,h,g),l.push(h,p,g)}return{vertices:u,normals:s,uvs:a,indices:l}},op=({segments:e=3}={})=>{const n=[],t=[],r=[],i=[],o=1/e;for(let l=0;l<e+1;l++)for(let u=0;u<l+1;u++)t.push((2*u-l)*o/2,l*o,0),r.push(0,0,1),i.push(o*u,1-o*l);for(let l=1;l<e+1;l++)for(let u=0;u<l;u++){const s=l*(l+1)/2+u,a=l*(l-1)/2+u;if(n.push(s,a,s+1),l<e){const v=(l+1)*(l+2)/2+u;n.push(v+1,s,s+1)}}return{vertices:t,normals:r,uvs:i,indices:n}},lp="dsbßx",up=e=>e!==""&&e!=="x",Zr=e=>e==="d"||e==="b",qc=e=>e==="s"||e==="b",sp=e=>e==="ß",Mr={active:1,inactive:0,dual:"d",snub:"s",holosnub:"ß",dualsnub:"b",custom:.5,activeVoid:"x",void:""},Zc=e=>e===0?"inactive":e===1?"active":e==="d"?"dual":e==="s"?"snub":e==="ß"?"holosnub":e==="b"?"dualsnub":e==="x"?"activeVoid":e===""?"void":"custom",ap=(e,n,t,r)=>{const i=[],o=[],l=[];for(let s=0;s<e.ranges.face[1];s++){const a=e.face[s],v=new Array(t).fill(0);for(let f=0;f<a.vertices.length;f++){const c=e.vertex[a.vertices[f]];for(let d=0;d<t;d++)v[d]+=c.vertex[d]}for(let f=0;f<t;f++)v[f]/=a.vertices.length;i.push({vertex:Qv(v,r),word:a.word})}const u=new Map;for(let s=0;s<e.ranges.face[1];s++)for(let a=s+1;a<e.ranges.face[1];a++){const v=e.face[s],f=e.face[a];v.vertices.filter(d=>f.vertices.includes(d)).length>1&&(o.push({start:s,end:a,word:v.word}),u.has(s)||u.set(s,[]),u.has(a)||u.set(a,[]),u.get(s).push(a),u.get(a).push(s))}for(let s=0;s<e.ranges.vertex[1];s++){const a=[];for(let c=0;c<e.ranges.face[1];c++)e.face[c].vertices.includes(s)&&a.push(c);const v=[a.shift()];let f=!1;for(;a.length>1;){const c=v[v.length-1],d=u.get(c);if(!d){f=!0;break}const m=a.find(y=>d.includes(y));if(!m){f=!0;break}a.splice(a.indexOf(m),1),v.push(m)}f||(v.push(a[0]),l.push({vertices:v,word:e.vertex[s].word}))}return{vertex:i,edge:o,face:l,ranges:{vertex:[0,i.length],edge:[0,o.length],face:[0,l.length]}}},cp=(e,n,t,r)=>{const i=new Map,o=[],l=[],u=[],s=n.map((f,c)=>qc(f)?Xc(c):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let f=0;f<e.ranges.vertex[1];f++){const c=e.vertex[f];c.word.replace(a,"").length%2===1?(c.vertex=NaN,i.set(c.i,[])):o.push(c)}for(let f=0;f<e.ranges.edge[1];f++)if(i.has(e.edge[f].start)){const c=i.get(e.edge[f].start);c.push(e.edge[f].end),c.word||(c.word=e.edge[f].word),i.get(e.edge[f].start).push(e.edge[f].end)}else if(i.has(e.edge[f].end)){const c=i.get(e.edge[f].end);c.push(e.edge[f].start),c.word||(c.word=e.edge[f].word),i.get(e.edge[f].end).push(e.edge[f].start)}else l.push(e.edge[f]);const v=Array.from(i.keys());for(let f=0;f<i.size;f++){const c=v[f],d=i.get(c),m=i.get(c);for(let y=0;y<d.length;y++)for(let x=0;x<m.length;x++)d[y]<=m[x]||l.push({start:d[y],end:m[x],word:m.word})}for(let f=0;f<l.length;f++){const c=l[f];for(let d=0;d<2;d++){const m=d?"start":"end",y=c[m];for(let x=0;x<i.size&&!(v[x]>y);x++)c[m]--}}for(let f=0;f<e.ranges.face[1];f++){const c=e.face[f],d=[];for(let m=0;m<c.vertices.length;m++)i.has(c.vertices[m])||d.push(c.vertices[m]);u.push({...c,vertices:d})}for(let f=0;f<i.size;f++){const c=v[f],d=i.get(c);u.push({vertices:d,word:d.word})}for(let f=0;f<u.length;f++){const c=u[f];for(let d=0;d<c.vertices.length;d++){const m=c.vertices[d];for(let y=0;y<i.size&&!(v[y]>m);y++)c.vertices[d]--}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},fp=(e,n,t,r)=>{const i=[new Map,new Map],o=[],l=[],u=[],s=n.map((f,c)=>f==="ß"?Xc(c):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let f=0;f<e.ranges.vertex[1];f++){const c=e.vertex[f];i[c.word.replace(a,"").length%2].set(c.i,[])}o.push(...e.vertex);const v=[new Map,new Map];for(let f=0;f<2;f++){for(let d=0;d<e.ranges.edge[1];d++)if(i[f].has(e.edge[d].start)){v[f].has(e.edge[d].start)||v[f].set(e.edge[d].start,[]);const m=i[f].get(e.edge[d].start);m.push(e.edge[d].end),m.word||(m.word=e.edge[d].word),v[f].get(e.edge[d].start).push(e.edge[d].end)}else if(i[f].has(e.edge[d].end)){v[f].has(e.edge[d].end)||v[f].set(e.edge[d].end,[]);const m=i[f].get(e.edge[d].end);m.push(e.edge[d].start),m.word||(m.word=e.edge[d].word),v[f].get(e.edge[d].end).push(e.edge[d].start)}else l.push(e.edge[d]);const c=Array.from(v[f].keys());for(let d=0;d<v[f].size;d++){const m=c[d],y=v[f].get(m),x=i[f].get(m);for(let h=0;h<y.length;h++)for(let p=0;p<x.length;p++)y[h]<=x[p]||l.push({start:y[h],end:x[p],word:x.word})}}for(let f=0;f<2;f++){const c=Array.from(v[f].keys());for(let d=0;d<e.ranges.face[1];d++){const m=e.face[d],y=[];for(let x=0;x<m.vertices.length;x++)i[f].has(m.vertices[x])||y.push(m.vertices[x]);u.push({...m,vertices:y})}for(let d=0;d<v[f].size;d++){const m=c[d],y=i[f].get(m);u.push({vertices:y,word:y.word})}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},dp=`#version 300 es
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

uniform float thickness;

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
  vecN iPosition = multiplyMatrix(matrix, adapt(position));
  vecN iTarget = multiplyMatrix(matrix, adapt(target));

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
`,pp=`#version 300 es
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
`,hp=`#version 300 es
precision highp float;

#include globals

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
  vecN iPosition = multiplyMatrix(matrix, adapt(position));
  vecN iTarget = multiplyMatrix(matrix, adapt(target));
  vecN iCenter = multiplyMatrix(matrix, adapt(center));

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
`,mp=`#version 300 es
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
`,gp=`#version 300 es
precision highp float;

#include globals

uniform float thickness;

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
  vecN pos = multiplyMatrix(matrix, adapt(position));

  if(segments > 1.f) {
    // Normalization is done mainly to remove OOD points
    pos = xnormalize(pos);
  }

  vec3 proj = xproject(pos);
  proj = inflate(proj, pos, normal, thickness, .01f);

  gl_Position = viewProject(proj);

  vColor = color;
  vPosition = proj;
  vNormal = normal;
}
`,go={vertex:()=>rp(),edge:e=>ip({segments:e}),face:e=>op({segments:e})};function yp(e){return{meshes:["vertex","edge","face"],...xo(e,"vertex",gp,mp,go.vertex,1024,e.dimensions,e.showVertices),...xo(e,"edge",vp,dp,go.edge,1024,e.dimensions,e.showEdges,["position","target"]),...xo(e,"face",hp,pp,go.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1){for(let r=0;r<this.meshes.length;r++){const i=this.meshes[r],o=this[i];if(!t){o.uniforms.curvature.update(n.spaceType.curvature),o.uniforms.metric.update(ft(n.spaceType.metric)),o.uniforms.matrix.update(ft(n.matrix));for(let l=4;l<=n.dimensions;l++)o.uniforms[`fov${l}`].update(1/Jc(Le*n[`fov${l}`]*.5/180));o.uniforms.segments.update(n.spaceType.curvature&&n.curve?n.segments:1),i==="vertex"?o.uniforms.thickness.update(n.vertexThickness):i==="edge"?o.uniforms.thickness.update(n.edgeThickness):o.uniforms.opacity.update(Ln[n.ambiance].opacity)}o.uniforms.viewProjection.update(n.camera.viewProjection),o.uniforms.zoom.update(-n.camera.position[2]),Ln[n.ambiance].lighting&&o.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r,i,o=null){const l=this[t];o=o||i;const{dimensions:u}=n,s=Ln[n.ambiance],[a,v]=r;let f=a,c=v;if(t==="face"){let y=0;for(let x=0;x<a;x++){const h=o[x].vertices.length;y+=h<3?0:h===3?1:h}f=y;for(let x=a;x<v;x++){const h=o[x].vertices.length;y+=h<3?0:h===3?1:h}c=y}l.instances<c&&l.extendAttributes(c),l.count=c;const d=u>4?9:u;let m=f;for(let y=a;y<v;y++){let x=[];const h=o[y];if(t==="vertex")x.push({...h,position:h.vertex,type:t});else if(t==="edge")x.push({...h,position:i[h.start].vertex,target:i[h.end].vertex,type:t});else{if(h.vertices.length<3)continue;if(h.vertices.length===3)x.push({...h,position:i[h.vertices[0]].vertex,target:i[h.vertices[1]].vertex,center:i[h.vertices[2]].vertex,parity:0});else{const p=new Array(h.vertices.length);for(let w=0;w<h.vertices.length;w++)p[w]=i[h.vertices[w]].vertex;const g=new Array(u).fill(0);for(let w=0;w<p.length;w++){const E=p[w];for(let I=0;I<u;I++)g[I]+=E[I]}for(let w=0;w<u;w++)g[w]/=p.length;for(let w=0;w<p.length;w++){const E={...h,position:p[w],target:p[(w+1)%p.length],center:g,parity:w%2};h.word.length%2===(n.spaceType.curvature>0?0:1)&&([E.position,E.target]=[E.target,E.position]),x.push(E)}}}for(let p=0;p<x.length;p++){const g=x[p];for(let E=0;E<u;E++)for(let I=0;I<l.varying.length;I++){const N=l.varying[I];l.attributes[N].data[m*d+E]=g[N][E]}const w=s.color(g,t,n);l.attributes.color.data[m*3+0]=w[0],l.attributes.color.data[m*3+1]=w[1],l.attributes.color.data[m*3+2]=w[2],m++}for(let p=0;p<l.varying.length;p++){const g=l.varying[p];l.attributes[g].update(f,c)}l.attributes.color.update(f,c)}},preprocess(n,t){return n.mirrors.some(r=>qc(r))&&(t=cp(t,n.mirrors,n.dimensions,n.spaceType.metric)),n.mirrors.some(r=>sp(r))&&(t=fp(t,n.mirrors,n.dimensions,n.spaceType.metric)),n.mirrors.some(r=>Zr(r))&&(t=ap(t,n.mirrors,n.dimensions,n.spaceType.metric)),t},plot(n,t){let r=n.face,i=t;t.face[1]===n.face.length&&n.partial&&(r=r.concat(n.partial),i={...t,face:[t.face[0],t.face[1]+n.partial.length]});const o={vertex:n.vertex,edge:n.edge,face:r,ranges:i},{vertex:l,edge:u,face:s,ranges:a}=this.preprocess(n,o);for(let v=0;v<this.meshes.length;v++){const f=this.meshes[v];this[f].visible&&this.plotType(n,f,a[f],l,f!=="vertex"?f==="face"?s:u:null)}}}}const xp=`#version 300 es
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
`,Ep=`#version 300 es
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
  vec4 sum = texture(screen, uv) * 4.0f;
  sum += texture(screen, uv - halfpixel);
  sum += texture(screen, uv + halfpixel);
  sum += texture(screen, uv + vec2(halfpixel.x, -halfpixel.y));
  sum += texture(screen, uv - vec2(halfpixel.x, -halfpixel.y));
  fragColor = sum / 8.0f;
}
`,kp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Ip=`#version 300 es
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
`,Tp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Rp=`#version 300 es
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
`,Cp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function Pp(e){return{...Ft(e,"oit",Tp,Ip,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Ft(e,"down",kp,Np,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Ft(e,"up",Cp,Rp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Ft(e,"afterImage",wp,xp,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Ft(e,"bloom",Sp,Ep,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Op(e){const{gl:n}=e,t=Ln[e.ambiance],r=e.msaa?Te(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),wo(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),wo(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),wo(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=un(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=un(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=un(e,n.RGBA8),e.textures.afterImageScreen=un(e,n.RGBA8),e.textures.afterImageOutScreen=un(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let i=0;i<e.textures.kawase.length;i++)n.deleteTexture(e.textures.kawase[i].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let i=0;i<t.glow.steps;i++)e.textures.kawase[i]=un(e,n.RGBA8,t.glow.pow**-i);e.textures.blur=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const bc=window.location.search.includes("stats");let br;bc&&(br=new tp,br.dom.id="stats",document.body.appendChild(br.dom));const c0=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:Le/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=Te(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]];const v=Kv(this.eye,[0,0,0],[0,1,0]),f=Gv(this.fov,a,.01,1e3,this.zoom);this.viewProjection=ft(Fe(f,v))}};r.update();const i=Pp(e),o=yp(e),l={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:o,passes:i,rb:l,fb:u,textures:{}}},f0=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},d0=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType.type==="finite"?"S":e.spaceType.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},v0=e=>{e.camera.fov=Le*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},p0=e=>{const n=Ln[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},_p=e=>{bc&&br.update();const{gl:n}=e,t=e.msaa?Te(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Ln[e.ambiance];jp(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Op(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const i=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let o=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?o=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<r.glow.steps;l++){const u=l===0?o:e.textures.kawase[l-1],s=e.textures.kawase[l];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=r.glow.steps-1;l>=0;l--){const u=e.textures.kawase[l],s=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=_p;const zp={globals:zv,dimensions:jv,project:Dv,helpers:Fv,complex:Av,ease:_v,lighting:Mv},yo=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),Be=(e,n,t)=>{let r,i,o;if(n===0)r=i=o=t;else{const l=t<.5?t*(1+n):t+n-t*n,u=2*t-l;r=yo(u,l,e+1/3),i=yo(u,l,e),o=yo(u,l,e-1/3)}return[r,i,o]},jp=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},Fp=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`),Ts=(e,n,t)=>{var l;const r=Ln[e.ambiance];let i="";r.lighting&&(i+=`#define LIGHTING ${$p.indexOf(r.lighting)}
`);const o=e.easing==="auto"?((l=e.spaceType)==null?void 0:l.type)==="hyperbolic"&&e.projection4!=="inverted"?"quintic":"linear":e.easing;i+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)i+=`#define PROJECTION${u} ${Lp.indexOf(e[`projection${u}`])-1}
`;return i+=`#define EASING ${Up.indexOf(o)}
`,r.opacity<1&&r.transparency==="oit"&&(i+=`#define OIT
`),Object.entries({...zp,config:i}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>Fp(u,e.dimensions))},Lr=(e,n,t,r,i)=>{if(e.gl.shaderSource(i,r),e.gl.compileShader(i),!e.gl.getShaderParameter(i,e.gl.COMPILE_STATUS)){const l=e.gl.getShaderInfoLog(i);return console.error(`An error occurred compiling the ${n}->${t} shader: ${l}`,{shaderSource:r}),l}},Rs=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const o=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${o}`),o}},ef=(e,n,t,r,i=[])=>{const{gl:o}=e,l=o.createProgram(),u=o.createShader(o.VERTEX_SHADER),s=o.createShader(o.FRAGMENT_SHADER);if(Lr(e,n,"vertex",t,u)||Lr(e,n,"fragment",r,s)||(o.attachShader(l,u),o.attachShader(l,s),Rs(e,n,l)))return;const a={program:l,vertexShader:u,fragmentShader:s,uniformsDef:i,recompile(v,f,c,d=null){Lr(v,n,"vertex",f,this.vertexShader)||Lr(v,n,"fragment",c,this.fragmentShader)||Rs(v,n,this.program)||(d&&(this.uniformsDef=d),this.bindUniforms(v))},bindUniforms(v){this.uniforms={},this.uniformsDef.forEach(({name:f,type:c,value:d})=>{this.uniforms[f]=Dp(v,this.program,f,c),this.uniforms[f].update(d)})}};return a.bindUniforms(e),a},jt=(e,n,t,r,i,o=null,l=null)=>{const{gl:u}=e;l=l||u.FLOAT;const s=l===u.FLOAT?4:2,a={name:t,mesh:n,indices:nf,instances:o,data:i,size:r,type:l,update(v=null,f=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),v===null&&f===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,v*this.size*s,this.data,v*this.size,(f-v)*this.size)},extend(v,f,c=!1){if(u.bindVertexArray(this.mesh.vao),this.size=v,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const d=v>4?3:1;this.name==="target"&&(this.location=v>4?6:4),this.name==="center"&&(this.location=v>4?9:5);for(let m=0;m<d;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<d;m++)u.vertexAttribPointer(this.location+m,v/d,this.type,!1,v*s,v/d*m*s);if(this.instances)for(let m=0;m<d;m++)u.vertexAttribDivisor(this.location+m,this.instances);f&&(c&&f.length>=this.data.length&&f.set(this.data),this.data=f),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const v=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,v),v}};return a.buffer=u.createBuffer(),a.extend(r),a},nf=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:i,vao:n,indices:t,count:t.length,update(o){r.bindVertexArray(this.vao),this.indices=o,this.count=o.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,o,r.STATIC_DRAW)}}},Dp=(e,n,t,r)=>{const{gl:i}=e;return{program:n,update(l){if(i.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=i.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&i.uniform4fv(a,l[s][0]),u-4===1){const v=i.getUniformLocation(n,`${t}.c${s+1}.u`);v!==null&&i.uniform1f(v,l[s][1])}else if(u-4>1){const v=i.getUniformLocation(n,`${t}.c${s+1}.u`);if(v!==null&&i[`uniform${Te(u-4,4)}fv`](v,l[s][1]),u-8===1){const f=i.getUniformLocation(n,`${t}.c${s+1}.t`);f!==null&&i.uniform1f(f,l[s][2])}}}else{const s=i.getUniformLocation(n,t);s!==null&&i[`uniformMatrix${r.slice(1)}`](s,!1,l)}}else{const u=i.getUniformLocation(n,t);u!==null&&i[`uniform${r}`](u,l)}},get(){i.useProgram(this.program);const l=i.getUniformLocation(n,t);if(l!==null)return i.getUniform(this.program,l)}}},un=(e,n,t=null)=>{const{gl:r}=e,i=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,o=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,l=r.createTexture();return r.bindTexture(r.TEXTURE_2D,l),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,i,o),{texture:l,width:i,height:o}},Ft=(e,n,t,r,i=[])=>{const o={name:n,vertex:t,fragment:r,...ef(e,n,t,r,i),recompileProgram(l){this.recompile(l,this.vertex,this.fragment,i)}};return{[n]:o}},xo=(e,n,t,r,i,o,l,u=!0,s=["position"])=>{const{gl:a}=e,v=i(e.curve?e.segments:1),f=d=>[{name:"viewProjection",type:"m4fv",value:ft(Pe(4))},{name:"matrix",type:`m${d.dimensions}fv`,value:ft(d.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${d.dimensions}fv`,value:ft(Pe(d.dimensions))},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},{name:"segments",type:"1f",value:d.curve?d.segments:1},...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"opacity",type:"1f",value:0}],...ep(4,d.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:d[`fov${m}`]}))];l=l>4?9:l;const c={attributes:{},varying:s,vertex:t,type:n,fragment:r,...ef(e,n,...Ts(e,t,r),f(e)),recompileProgram(d){const[m,y]=Ts(d,this.vertex,this.fragment);this.recompile(d,m,y,f(d))},changeArity(d){d=d>4?9:d,this.arity!==d&&(this.arity=d,s.forEach(m=>{this.attributes[m].extend(d,new Float32Array(this.instances*d),!1)}))},extendAttributes(d){this.instances=d,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(d*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(d*3),!0)},updateGeometry(d){const m=i(d.spaceType.curvature&&d.curve?d.segments:1);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(d){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return c.visible=u,c.vao=a.createVertexArray(),c.indices=nf(e,c.vao,new Uint16Array(v.indices)),c.attributes.vertex=jt(e,c,"vertex",3,new Float32Array(v.vertices)),c.attributes.uv=jt(e,c,"uv",2,new Float32Array(v.uvs)),c.attributes.normal=jt(e,c,"normal",3,new Float32Array(v.normals)),c.attributes.color=jt(e,c,"color",3,new Float32Array(o*3),1),s.forEach(d=>{c.attributes[d]=jt(e,c,d,l,new Float32Array(o*l),1)}),c.arity=l,c.instances=o,c.count=0,{[n]:c}},wo=(e,n,t,r)=>{const{gl:i}=e;i.bindRenderbuffer(i.RENDERBUFFER,n),r?i.renderbufferStorageMultisample(i.RENDERBUFFER,r,t,i.drawingBufferWidth,i.drawingBufferHeight):i.renderbufferStorage(i.RENDERBUFFER,t,i.drawingBufferWidth,i.drawingBufferHeight),i.bindRenderbuffer(i.RENDERBUFFER,null)},Ap=document.createElement("canvas"),Cs=Ap.getContext("webgl2"),Mp=Cs.getParameter(Cs.MAX_SAMPLES),h0="xyzwvutsrqponmlkjihgfedcba",Lp=["perspective","stereographic","orthographic","klein","inverted","joukowsky","upperhalf","band","cross","heart","teardrop","square","ring","sinusoidal","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Up=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],m0=["toddcoxeter","knuthbendix","fundamental"],$p=["lambert","phong","blinn-phong","toon","oren-nayar"],Ln={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>Be(e.length*.17%1,.5,.6)},synthwave:{background:[...Be(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>Be((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.4,transparency:"oit",color:({word:e})=>Be(e.length*.03%1,1,.8)},shape:{background:[1,1,1,1],glow:!1,lighting:"lambert",opacity:.75,transparency:"oit",color:({word:e,len:n,vertices:t},r)=>r==="face"?Be(((n||t.length)-2)*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const i=e.length?Is(e[e.length-1])/t:0;return Be(i%1,1,n==="face"?.6:r?.05:.8)}},catpuccin:{background:[...Be(240/360,.23,.09),1],glow:!1,lighting:"lambert",opacity:.6,transparency:"oit",color:({word:e,parity:n},t,{dimensions:r,showFaces:i})=>{const o=[[.027777777777777776,.56,.91],[0,.59,.88],[.8777777777777778,.72,.86],[.7416666666666667,.84,.81],[.9527777777777777,.81,.75],[.9722222222222222,.65,.77],[.06388888888888888,.92,.75],[.11388888888888889,.86,.83],[.3194444444444444,.54,.76],[.4722222222222222,.57,.73],[.525,.71,.73],[.5527777777777778,.76,.69],[.6027777777777777,.92,.76],[.6444444444444445,.97,.85]],l=e.split("").map(s=>Is(s)).reduce((s,a)=>s+a,0),u=o[l%o.length];return t==="face"&&n&&(u[2]*=.9),Be(...u)}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>Be(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n,{dimensions:t,showFaces:r})=>Be(e.length*.06%1,1,n==="face"?.6:r?.05:1)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-Zv(.9,e.length+1)):[0,0,0]}},Ps={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"toddcoxeter",controls:"space",ambiance:"neon",centered:!1,zoom:1.5,fov3:90,projection3:"perspective",fov4:90,projection4:"stereographic",msaa:window.devicePixelRatio<=1,msaaSamples:Mp,subsampling:window.devicePixelRatio},Bp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((i,o)=>r===o?1:r===o+1||r+1===o?3:2));for(let t=0;t<Te(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Te(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Te(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},g0=(e,n=[],t)=>{const r={...e},i=[];Object.entries(r).forEach(([o,l])=>{typeof Ps[o]=="number"||o.startsWith("fov")?(l===""||isNaN(l))&&(delete r[o],i.push(o)):Array.isArray(Ps[o])&&(Array.isArray(l[0])?l.find(u=>u.find(s=>l===""||o!=="coxeter"&&isNaN(s)))&&(delete r[o],i.push(o)):l.find(u=>l===""||isNaN(u)&&!(o==="mirrors"&&lp.includes(u)))&&(delete r[o],i.push(o)))}),i.includes("coxeter")||Bp(r),r.matrix._preset?delete r.matrix._preset:(r.matrix.length!==r.dimensions||r.matrix.some(o=>o.length!==r.dimensions))&&(r.matrix=Pe(r.dimensions)),n.includes("dimensions")&&!n.some(o=>o.startsWith("projection"))&&r.dimensions>=4&&(r.projection3="perspective");for(let o=4;o<=9;o++)o<=r.dimensions&&!r[`fov${o}`]&&!i.includes(`fov${o}`)&&(r[`fov${o}`]=90),o<=r.dimensions&&(!r[`projection${o}`]||n.includes("dimensions")&&!n.includes(`projection${o}`))&&!i.includes(`projection${o}`)&&(r[`projection${o}`]=o===r.dimensions?r[`projection${o+1}`]||"stereographic":"perspective"),o>r.dimensions&&r[`fov${o}`]&&delete r[`fov${o}`],o>r.dimensions&&r[`projection${o}`]&&delete r[`projection${o}`];return{params:r,badParams:i}},Hp=(e,n,t,r,i)=>{let o=!0,l=0,u=1;if(i&&["∞","inf","Infinity"].includes(e))e="∞",l=0;else if(i&&e.endsWith("i")){const s=e.slice(0,-1);l=-(s===""?1:parseInt(s)),e=`${l===-1?"":-l}i`}else if(e.includes("/")){const[s,a]=e.split("/");l=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${l}`:e=`${l}/${u}`}else l=e===""?"":parseInt(r)===parseFloat(r)?parseInt(e):parseFloat(e);return o=!(i&&l===1||l===""||isNaN(l)||l<n||l>t||r%1===0&&l%r!==0||isNaN(u)||u===""||u<n||u>t||r%1===0&&u%r!==0),{valid:o,raw:e,value:l,fraction:u}};function Vp({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:o,coxeter:l,fraction:u,fractionName:s,toggler:a,togglerName:v,onChange:f,...c}){l&&(t=-1/0);const d=X.useCallback(()=>o<0&&l?`${o===-1?"":-o}i`:o===0&&l?"∞":s&&u>1?`${o}/${u}`:`${o}`,[l,u,s,o]),[m,y]=X.useState(d);X.useEffect(()=>{y(d())},[l,d,u,s,o]);const[x,h]=X.useState(!0),p=X.useCallback(N=>{const k=Hp(N,t,r,i,l);y(k.raw),h(k.valid),k.valid&&(f(e,k.value),s&&f(s,k.fraction))},[l,s,r,t,e,f,i]),g=X.useCallback(()=>{if(!x){p(l?"3":`${t}`);return}if(l){if(m==="2"){p("∞");return}if(m==="∞"){p("i");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=(N===""?1:parseInt(N))+1;p(`${k}i`);return}}if(m!==`${t}`)if(m.includes("/"))p((parseInt(m.split("/")[0])-i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))-i;i>0&&i<1?p(N.toFixed(i.toString().split(".")[1].length)):p(N.toString())}},[l,t,m,i,p,x]),w=X.useCallback(()=>{if(!x){p(l?"3":`${t}`);return}if(l){if(m==="∞"){p("2");return}if(m==="i"){p("∞");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=parseInt(N)-1;k===1&&(k=""),p(`${k}i`);return}}if(m!==`${r}`)if(m.includes("/"))p((parseInt(m.split("/")[0])+i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))+i;i>0&&i<1?p(N.toFixed(i.toString().split(".")[1].length)):p(N.toString())}},[l,r,t,m,i,p,x]),E=N=>{const k=N.target.value;p(k)},I=N=>{f(N.target.name,N.target.checked)};return T.jsxs("label",{className:`number ${x?"valid":"invalid"}`,children:[n&&T.jsx("span",{className:"number-label",children:n}),v&&T.jsx("input",{type:"checkbox",name:v,checked:a,onChange:I}),(!v||a)&&T.jsxs("div",{className:"number-control",children:[T.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:E,...c}),T.jsx("button",{className:"plusminus minus",onClick:g,tabIndex:-1,children:"−"}),T.jsx("button",{className:"plusminus plus",onClick:w,tabIndex:-1,children:"+"})]})]})}function Wp({i:e,j:n,value:t,stellation:r,onChange:i}){return T.jsx("div",{className:"coxeter-value",children:T.jsx(Vp,{name:`coxeter-${e}-${n}`,value:t,onChange:i,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Os({type:e}){return T.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:T.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const Ut=6,zn=14,$t={active:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:zn}),T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"})]}),inactive:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"})}),dual:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"}),T.jsx("path",{d:"M 16 2 L 16 10"}),T.jsx("path",{d:"M 16 10 L 16 22",stroke:"black"}),T.jsx("path",{d:"M 16 22 L 16 30"})]}),snub:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:zn})}),dualsnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:zn-4}),T.jsx("path",{d:"M 16 0 L 16 32"})]}),holosnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:zn}),T.jsx("circle",{cx:"16",cy:"16",r:Ut})]}),custom:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:zn}),T.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:zn}),T.jsx("path",{d:"M 6 6 L 26 26"}),T.jsx("path",{d:"M 6 26 L 26 6"})]}),void:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M 10 10 L 22 22"}),T.jsx("path",{d:"M 10 22 L 22 10"})]})};function Gp({index:e,value:n,onChange:t}){const r=X.useRef(null),[i,o]=X.useState(!1),l=Zc(n),u=()=>{const f=Mr[l==="inactive"?"active":"inactive"];t(e,f)},s=v=>{const f=Object.keys($t),c=f.indexOf(l),d=f[(f.length+c+fu(v.deltaY))%f.length],m=Mr[d];t(e,m)},a=v=>{v.preventDefault(),o(!i)};return X.useEffect(()=>{const v=f=>{r.current.contains(f.target)||o(!1)};if(i)return window.addEventListener("mouseup",v),()=>{window.removeEventListener("mouseup",v)}},[i]),T.jsxs("div",{className:"coxeter-node",title:l,ref:r,children:[T.jsx("svg",{className:`coxeter-graphic ${l}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:$t[l]}),l==="custom"&&T.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:v=>t(e,v.target.value)}),i&&T.jsx("div",{className:"coxeter-node-menu",children:Object.keys($t).filter(v=>v!==l).map(v=>T.jsx("div",{title:v,onClick:()=>{t(e,Mr[v]),o(!1)},children:T.jsx("svg",{className:`coxeter-graphic ${v}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,Mr[v]),o(!1)},children:$t[v]})},v))})]})}const _s=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid";function y0({dimensions:e,coxeter:n,mirrors:t,stellation:r,extended:i,onChange:o}){const[l,u]=X.useState(1),s=X.useRef(),a=X.useCallback(()=>{if(o("extended",!i),i){const c=n.map(d=>d.slice());for(let d=0;d<e;d++)for(let m=0;m<d-1;m++)c[d][m]=2,c[m][d]=2;o("coxeter",c)}},[i,o,n,e]),v=X.useCallback((c,d)=>{if(c.startsWith("coxeter")){const[m,y]=c.split("-").slice(1).map(h=>+h),x=n.map(h=>h.slice());x[m][y]=d,x[y][m]=d,o("coxeter",x)}if(c.startsWith("stellation")){const[m,y]=c.split("-").slice(1).map(h=>+h),x=r.map(h=>h.slice());x[m][y]=d,x[y][m]=d,o("stellation",x)}},[n,o,r]),f=X.useCallback((c,d)=>{const m=t[c];let y=t.slice();y[c]=d,Zr(d)||m===0?y.some(x=>Zr(x))&&(y=y.map((x,h)=>x==="s"?"b":x&&x!=="b"?"d":x)):d!==0&&up(d)&&y.some(x=>Zr(x))&&(y=y.map((x,h)=>x==="b"?"s":x==="d"?1:x)),o("mirrors",y)},[t,o]);return X.useEffect(()=>{const c=()=>{if(!s.current)return;const d=Te(1,(window.innerWidth-125)/s.current.offsetWidth);u(d)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[e]),T.jsxs("aside",{className:"coxeters",style:l===1?void 0:{transform:`scale(${l})`},ref:s,children:[T.jsx("div",{className:"coxeter-matrix",children:[...Array(e).keys()].map(c=>T.jsxs(X.Fragment,{children:[c>0&&T.jsx("div",{className:"coxeter-column",children:[...Array(c).keys()].map(d=>(i||c===d+1)&&T.jsx(Wp,{i:c,j:d,value:n[c][d],stellation:r[c][d],onChange:v},`${c}x${d}`))}),c>0&&T.jsx(Os,{type:_s(n,c)}),T.jsx(Gp,{index:c,value:t[c],onChange:f}),c<e-1&&T.jsx(Os,{type:_s(n,c+1)})]},c))}),T.jsxs("div",{className:"coxeter-toggles",children:[e>2&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",e-1),title:"Decrease dimensions",children:"−"}),e<9&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",e+1),title:"Increase dimensions",children:"+"}),T.jsx("button",{className:"button",onClick:a,title:"extended mode",children:i?"▲":"▼"})]})]})}const sn=32,zs=18;function x0({coxeter:e,mirrors:n,stellation:t}){const r=e.length,i=n.map((y,x)=>{const h=Zc(y);return{n:x,type:h,i:x,j:0,r:h==="inactive"?Ut:zn}});for(let y=0;y<r;y++)for(let x=r-1;x>y+1;x--)if(e[y][x]!==2){const h=y===0,p=x===r-1,g=!h&&!p,w=x-y+1,E=L(w-1)/2,I=2*Math.PI/w,N={i:i[y].i+E,j:i[y].j+(g?-E*We((2+w)/4*I):0)};for(let k=y;k<=x;k++){let D=k-y+(h?1:p?w/2:(2+w)/4);i[k].i=N.i+E*qe(I*D),i[k].j=N.j+E*We(I*D)}for(let k=x+1;k<r;k++)i[k].i-=x-y,i[k].i+=2*E;y=x-1;break}const o=[];for(let y=0;y<r;y++)for(let x=0;x<y;x++)if(e[y][x]!==2){const h=e[y][x],p=t[y][x];let g=`${h===0?"∞":h<0?`${h===-1?"":-h}i`:h}`;p>1&&(g+=`/${p}`),g==="3"&&(g=""),o.push({source:i[y],target:i[x],value:g,type:h<0?"dashed":h===0?"bold":"solid"})}const l=i.map(({i:y})=>y),u=i.map(({j:y})=>y),s=Te(...l),a=zt(...l),v=Te(...u),f=zt(...u);let c=0,d=0;for(let y=0;y<i.length;y++){const x=i[y];x.x=(x.i-s)*2*sn,x.y=(x.j-v)*2*sn,c=zt(c,x.x),d=zt(d,x.y)}const m=y=>y+zt(y-1,0);return T.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-sn/2} ${-sn/2} ${c+sn} ${d+sn}`,width:`${m(a-s+1)}em`,height:`${m(f-v+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[i.map(({n:y,type:x,x:h,y:p,r:g})=>T.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${h-sn/2} ${p-sn/2})`,title:x,children:$t[x]},y)),o.map(({source:y,target:x,value:h,type:p})=>{const g={x:y.x,y:y.y},w={x:x.x,y:x.y},E={},I=qv(w.y-g.y,w.x-g.x);return E.x=(g.x+w.x)/2+(zs+(h.length-2)*5)*qe(I-Le/2),E.y=(g.y+w.y)/2+zs*We(I-Le/2),g.x+=(y.r+1)*qe(I),g.y+=(y.r+1)*We(I),w.x-=(x.r+1)*qe(I),w.y-=(x.r+1)*We(I),T.jsxs("g",{className:"coxeter-diagram-link",children:[T.jsx("path",{d:`M ${g.x} ${g.y} L ${w.x} ${w.y}`,strokeWidth:p==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:p==="dashed"?"1 1":""}),T.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:E.x,y:E.y,children:h})]},`${y.n}-${x.n}`)})]})}export{Ln as A,ep as B,x0 as C,Lp as D,y0 as E,c0 as F,g0 as G,t0 as H,s0 as I,Yp as J,u0 as K,mu as L,Bp as M,Vp as N,Le as P,be as a,_p as b,ft as c,a0 as d,p0 as e,Op as f,f0 as g,l0 as h,zt as i,Qp as j,Jp as k,Xp as l,Fe as m,Pe as n,T as o,d0 as p,Ps as q,X as r,Kp as s,Te as t,v0 as u,h0 as v,$v as w,qp as x,m0 as y,Up as z};
