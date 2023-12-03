(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fs={exports:{}},Ti={},Ls={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),af=Symbol.for("react.portal"),cf=Symbol.for("react.fragment"),ff=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),vf=Symbol.for("react.provider"),pf=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.memo"),yf=Symbol.for("react.lazy"),mu=Symbol.iterator;function xf(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Us=Object.assign,$s={};function xt(e,n,t){this.props=e,this.context=n,this.refs=$s,this.updater=t||js}xt.prototype.isReactComponent={};xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bs(){}Bs.prototype=xt.prototype;function wl(e,n,t){this.props=e,this.context=n,this.refs=$s,this.updater=t||js}var Sl=wl.prototype=new Bs;Sl.constructor=wl;Us(Sl,xt.prototype);Sl.isPureReactComponent=!0;var gu=Array.isArray,Hs=Object.prototype.hasOwnProperty,El={current:null},Vs={key:!0,ref:!0,__self:!0,__source:!0};function Gs(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Hs.call(n,r)&&!Vs.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:pr,type:e,key:o,ref:l,props:i,_owner:El.current}}function wf(e,n){return{$$typeof:pr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function Sf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var yu=/\/+/g;function Qi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sf(""+e.key):n.toString(36)}function Br(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case pr:case af:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Qi(l,0):r,gu(i)?(t="",e!=null&&(t=e.replace(yu,"$&/")+"/"),Br(i,n,t,"",function(a){return a})):i!=null&&(Nl(i)&&(i=wf(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(yu,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",gu(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Qi(o,u);l+=Br(o,n,t,s,i)}else if(s=xf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Qi(o,u++),l+=Br(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Sr(e,n,t){if(e==null)return e;var r=[],i=0;return Br(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Ef(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Hr={transition:null},Nf={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:El};z.Children={map:Sr,forEach:function(e,n,t){Sr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Sr(e,function(){n++}),n},toArray:function(e){return Sr(e,function(n){return n})||[]},only:function(e){if(!Nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=xt;z.Fragment=cf;z.Profiler=df;z.PureComponent=wl;z.StrictMode=ff;z.Suspense=mf;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Us({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=El.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Hs.call(n,s)&&!Vs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:pr,type:e.type,key:i,ref:o,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vf,_context:e},e.Consumer=e};z.createElement=Gs;z.createFactory=function(e){var n=Gs.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:hf,render:e}};z.isValidElement=Nl;z.lazy=function(e){return{$$typeof:yf,_payload:{_status:-1,_result:e},_init:Ef}};z.memo=function(e,n){return{$$typeof:gf,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=n}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,n){return ae.current.useCallback(e,n)};z.useContext=function(e){return ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};z.useEffect=function(e,n){return ae.current.useEffect(e,n)};z.useId=function(){return ae.current.useId()};z.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return ae.current.useMemo(e,n)};z.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};z.useRef=function(e){return ae.current.useRef(e)};z.useState=function(e){return ae.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return ae.current.useTransition()};z.version="18.2.0";Ls.exports=z;var K=Ls.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=K,If=Symbol.for("react.element"),Tf=Symbol.for("react.fragment"),_f=Object.prototype.hasOwnProperty,Cf=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rf={key:!0,ref:!0,__self:!0,__source:!0};function Ws(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)_f.call(n,r)&&!Rf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:If,type:e,key:o,ref:l,props:i,_owner:Cf.current}}Ti.Fragment=Tf;Ti.jsx=Ws;Ti.jsxs=Ws;Fs.exports=Ti;var T=Fs.exports,xu={},Qs={exports:{}},we={},Ks={exports:{}},Xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,R){var O=C.length;C.push(R);e:for(;0<O;){var W=O-1>>>1,q=C[W];if(0<i(q,R))C[W]=R,C[O]=q,O=W;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var R=C[0],O=C.pop();if(O!==R){C[0]=O;e:for(var W=0,q=C.length,xr=q>>>1;W<xr;){var Rn=2*(W+1)-1,Wi=C[Rn],On=Rn+1,wr=C[On];if(0>i(Wi,O))On<q&&0>i(wr,Wi)?(C[W]=wr,C[On]=O,W=On):(C[W]=Wi,C[Rn]=O,W=Rn);else if(On<q&&0>i(wr,O))C[W]=wr,C[On]=O,W=On;else break e}}return R}function i(C,R){var O=C.sortIndex-R.sortIndex;return O!==0?O:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],a=[],v=1,c=null,d=3,f=!1,m=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var R=t(a);R!==null;){if(R.callback===null)r(a);else if(R.startTime<=C)r(a),R.sortIndex=R.expirationTime,n(s,R);else break;R=t(a)}}function w(C){if(y=!1,g(C),!m)if(t(s)!==null)m=!0,Vi(S);else{var R=t(a);R!==null&&Gi(w,R.startTime-C)}}function S(C,R){m=!1,y&&(y=!1,h(k),k=-1),f=!0;var O=d;try{for(g(R),c=t(s);c!==null&&(!(c.expirationTime>R)||C&&!Oe());){var W=c.callback;if(typeof W=="function"){c.callback=null,d=c.priorityLevel;var q=W(c.expirationTime<=R);R=e.unstable_now(),typeof q=="function"?c.callback=q:c===t(s)&&r(s),g(R)}else r(s);c=t(s)}if(c!==null)var xr=!0;else{var Rn=t(a);Rn!==null&&Gi(w,Rn.startTime-R),xr=!1}return xr}finally{c=null,d=O,f=!1}}var I=!1,N=null,k=-1,A=5,P=-1;function Oe(){return!(e.unstable_now()-P<A)}function Et(){if(N!==null){var C=e.unstable_now();P=C;var R=!0;try{R=N(!0,C)}finally{R?Nt():(I=!1,N=null)}}else I=!1}var Nt;if(typeof p=="function")Nt=function(){p(Et)};else if(typeof MessageChannel<"u"){var hu=new MessageChannel,lf=hu.port2;hu.port1.onmessage=Et,Nt=function(){lf.postMessage(null)}}else Nt=function(){x(Et,0)};function Vi(C){N=C,I||(I=!0,Nt())}function Gi(C,R){k=x(function(){C(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,Vi(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var O=d;d=R;try{return C()}finally{d=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=d;d=C;try{return R()}finally{d=O}},e.unstable_scheduleCallback=function(C,R,O){var W=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=O+q,C={id:v++,callback:R,priorityLevel:C,startTime:O,expirationTime:q,sortIndex:-1},O>W?(C.sortIndex=O,n(a,C),t(s)===null&&C===t(a)&&(y?(h(k),k=-1):y=!0,Gi(w,O-W))):(C.sortIndex=q,n(s,C),m||f||(m=!0,Vi(S))),C},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(C){var R=d;return function(){var O=d;d=R;try{return C.apply(this,arguments)}finally{d=O}}}})(Xs);Ks.exports=Xs;var Of=Ks.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=K,xe=Of;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Js=new Set,qt={};function Gn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(qt[e]=n,e=0;e<n.length;e++)Js.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=Object.prototype.hasOwnProperty,Pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wu={},Su={};function zf(e){return Io.call(Su,e)?!0:Io.call(wu,e)?!1:Pf.test(e)?Su[e]=!0:(wu[e]=!0,!1)}function Df(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mf(e,n,t,r){if(n===null||typeof n>"u"||Df(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var kl=/[\-:]([a-z])/g;function Il(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(kl,Il);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(kl,Il);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(kl,Il);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tl(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Mf(n,t,i,r)&&(t=null),r||i===null?zf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=Ys.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),_l=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),qs=Symbol.for("react.provider"),bs=Symbol.for("react.context"),Cl=Symbol.for("react.forward_ref"),_o=Symbol.for("react.suspense"),Co=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Zs=Symbol.for("react.offscreen"),Eu=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ki;function At(e){if(Ki===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ki=n&&n[1]||""}return`
`+Ki+e}var Xi=!1;function Yi(e,n){if(!e||Xi)return"";Xi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Xi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?At(e):""}function Af(e){switch(e.tag){case 5:return At(e.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 2:case 15:return e=Yi(e.type,!1),e;case 11:return e=Yi(e.type.render,!1),e;case 1:return e=Yi(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Kn:return"Portal";case To:return"Profiler";case _l:return"StrictMode";case _o:return"Suspense";case Co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bs:return(e.displayName||"Context")+".Consumer";case qs:return(e._context.displayName||"Context")+".Provider";case Cl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rl:return n=e.displayName||null,n!==null?n:Ro(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Ro(e(n))}catch{}}return null}function Ff(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(n);case 8:return n===_l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ea(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Lf(e){var n=ea(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nr(e){e._valueTracker||(e._valueTracker=Lf(e))}function na(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ea(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Nu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ta(e,n){n=n.checked,n!=null&&Tl(e,"checked",n,!1)}function Po(e,n){ta(e,n);var t=kn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zo(e,n.type,t):n.hasOwnProperty("defaultValue")&&zo(e,n.type,kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ku(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zo(e,n,t){(n!=="number"||ni(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ft=Array.isArray;function ot(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+kn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Do(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Ft(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:kn(t)}}function ra(e,n){var t=kn(n.value),r=kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ia(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ia(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,oa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(e){jf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Bt[n]=Bt[e]})});function la(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Bt.hasOwnProperty(e)&&Bt[e]?(""+n).trim():n+"px"}function ua(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=la(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Uf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,n){if(n){if(Uf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Fo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lo=null;function Ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,lt=null,ut=null;function _u(e){if(e=gr(e)){if(typeof jo!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Pi(n),jo(e.stateNode,e.type,n))}}function sa(e){lt?ut?ut.push(e):ut=[e]:lt=e}function aa(){if(lt){var e=lt,n=ut;if(ut=lt=null,_u(e),n)for(e=0;e<n.length;e++)_u(n[e])}}function ca(e,n){return e(n)}function fa(){}var Ji=!1;function da(e,n,t){if(Ji)return e(n,t);Ji=!0;try{return ca(e,n,t)}finally{Ji=!1,(lt!==null||ut!==null)&&(fa(),aa())}}function Zt(e,n){var t=e.stateNode;if(t===null)return null;var r=Pi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Uo=!1;if(en)try{var It={};Object.defineProperty(It,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Uo=!1}function $f(e,n,t,r,i,o,l,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(v){this.onError(v)}}var Ht=!1,ti=null,ri=!1,$o=null,Bf={onError:function(e){Ht=!0,ti=e}};function Hf(e,n,t,r,i,o,l,u,s){Ht=!1,ti=null,$f.apply(Bf,arguments)}function Vf(e,n,t,r,i,o,l,u,s){if(Hf.apply(this,arguments),Ht){if(Ht){var a=ti;Ht=!1,ti=null}else throw Error(E(198));ri||(ri=!0,$o=a)}}function Wn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function va(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Cu(e){if(Wn(e)!==e)throw Error(E(188))}function Gf(e){var n=e.alternate;if(!n){if(n=Wn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Cu(i),e;if(o===r)return Cu(i),n;o=o.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function pa(e){return e=Gf(e),e!==null?ha(e):null}function ha(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ha(e);if(n!==null)return n;e=e.sibling}return null}var ma=xe.unstable_scheduleCallback,Ru=xe.unstable_cancelCallback,Wf=xe.unstable_shouldYield,Qf=xe.unstable_requestPaint,Q=xe.unstable_now,Kf=xe.unstable_getCurrentPriorityLevel,Pl=xe.unstable_ImmediatePriority,ga=xe.unstable_UserBlockingPriority,ii=xe.unstable_NormalPriority,Xf=xe.unstable_LowPriority,ya=xe.unstable_IdlePriority,_i=null,We=null;function Yf(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(_i,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:bf,Jf=Math.log,qf=Math.LN2;function bf(e){return e>>>=0,e===0?32:31-(Jf(e)/qf|0)|0}var Ir=64,Tr=4194304;function Lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=Lt(u):(o&=l,o!==0&&(r=Lt(o)))}else l=t&~i,l!==0?r=Lt(l):o!==0&&(r=Lt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),i=1<<t,r|=e[t],n&=~i;return r}function Zf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Le(o),u=1<<l,s=i[l];s===-1?(!(u&t)||u&r)&&(i[l]=Zf(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function Bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xa(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function qi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function nd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Le(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function zl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function wa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sa,Dl,Ea,Na,ka,Ho=!1,_r=[],hn=null,mn=null,gn=null,er=new Map,nr=new Map,fn=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(n.pointerId)}}function Tt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=gr(n),n!==null&&Dl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function rd(e,n,t,r,i){switch(n){case"focusin":return hn=Tt(hn,e,n,t,r,i),!0;case"dragenter":return mn=Tt(mn,e,n,t,r,i),!0;case"mouseover":return gn=Tt(gn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return er.set(o,Tt(er.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,nr.set(o,Tt(nr.get(o)||null,e,n,t,r,i)),!0}return!1}function Ia(e){var n=Mn(e.target);if(n!==null){var t=Wn(n);if(t!==null){if(n=t.tag,n===13){if(n=va(t),n!==null){e.blockedOn=n,ka(e.priority,function(){Ea(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Vo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Lo=r,t.target.dispatchEvent(r),Lo=null}else return n=gr(t),n!==null&&Dl(n),e.blockedOn=t,!1;n.shift()}return!0}function Pu(e,n,t){Vr(e)&&t.delete(n)}function id(){Ho=!1,hn!==null&&Vr(hn)&&(hn=null),mn!==null&&Vr(mn)&&(mn=null),gn!==null&&Vr(gn)&&(gn=null),er.forEach(Pu),nr.forEach(Pu)}function _t(e,n){e.blockedOn===n&&(e.blockedOn=null,Ho||(Ho=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,id)))}function tr(e){function n(i){return _t(i,e)}if(0<_r.length){_t(_r[0],e);for(var t=1;t<_r.length;t++){var r=_r[t];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&_t(hn,e),mn!==null&&_t(mn,e),gn!==null&&_t(gn,e),er.forEach(n),nr.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)Ia(t),t.blockedOn===null&&fn.shift()}var st=on.ReactCurrentBatchConfig,li=!0;function od(e,n,t,r){var i=M,o=st.transition;st.transition=null;try{M=1,Ml(e,n,t,r)}finally{M=i,st.transition=o}}function ld(e,n,t,r){var i=M,o=st.transition;st.transition=null;try{M=4,Ml(e,n,t,r)}finally{M=i,st.transition=o}}function Ml(e,n,t,r){if(li){var i=Vo(e,n,t,r);if(i===null)uo(e,n,r,ui,t),Ou(e,r);else if(rd(i,e,n,t,r))r.stopPropagation();else if(Ou(e,r),n&4&&-1<td.indexOf(e)){for(;i!==null;){var o=gr(i);if(o!==null&&Sa(o),o=Vo(e,n,t,r),o===null&&uo(e,n,r,ui,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else uo(e,n,r,null,t)}}var ui=null;function Vo(e,n,t,r){if(ui=null,e=Ol(r),e=Mn(e),e!==null)if(n=Wn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=va(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ui=e,null}function Ta(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kf()){case Pl:return 1;case ga:return 4;case ii:case Xf:return 16;case ya:return 536870912;default:return 16}default:return 16}}var vn=null,Al=null,Gr=null;function _a(){if(Gr)return Gr;var e,n=Al,t=n.length,r,i="value"in vn?vn.value:vn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Gr=i.slice(e,1<r?1-r:void 0)}function Wr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function zu(){return!1}function Se(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:zu,this.isPropagationStopped=zu,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Se(wt),mr=V({},wt,{view:0,detail:0}),ud=Se(mr),bi,Zi,Ct,Ci=V({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(bi=e.screenX-Ct.screenX,Zi=e.screenY-Ct.screenY):Zi=bi=0,Ct=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Du=Se(Ci),sd=V({},Ci,{dataTransfer:0}),ad=Se(sd),cd=V({},mr,{relatedTarget:0}),eo=Se(cd),fd=V({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=Se(fd),vd=V({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=Se(vd),hd=V({},wt,{data:0}),Mu=Se(hd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yd[e])?!!n[e]:!1}function Ll(){return xd}var wd=V({},mr,{key:function(e){if(e.key){var n=md[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=Se(wd),Ed=V({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=Se(Ed),Nd=V({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),kd=Se(Nd),Id=V({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=Se(Id),_d=V({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=Se(_d),Rd=[9,13,27,32],jl=en&&"CompositionEvent"in window,Vt=null;en&&"documentMode"in document&&(Vt=document.documentMode);var Od=en&&"TextEvent"in window&&!Vt,Ca=en&&(!jl||Vt&&8<Vt&&11>=Vt),Fu=String.fromCharCode(32),Lu=!1;function Ra(e,n){switch(e){case"keyup":return Rd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Pd(e,n){switch(e){case"compositionend":return Oa(n);case"keypress":return n.which!==32?null:(Lu=!0,Fu);case"textInput":return e=n.data,e===Fu&&Lu?null:e;default:return null}}function zd(e,n){if(Yn)return e==="compositionend"||!jl&&Ra(e,n)?(e=_a(),Gr=Al=vn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ca&&n.locale!=="ko"?null:n.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Dd[e.type]:n==="textarea"}function Pa(e,n,t,r){sa(r),n=si(n,"onChange"),0<n.length&&(t=new Fl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Gt=null,rr=null;function Md(e){Ha(e,0)}function Ri(e){var n=bn(e);if(na(n))return e}function Ad(e,n){if(e==="change")return n}var za=!1;if(en){var no;if(en){var to="oninput"in document;if(!to){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),to=typeof Uu.oninput=="function"}no=to}else no=!1;za=no&&(!document.documentMode||9<document.documentMode)}function $u(){Gt&&(Gt.detachEvent("onpropertychange",Da),rr=Gt=null)}function Da(e){if(e.propertyName==="value"&&Ri(rr)){var n=[];Pa(n,rr,e,Ol(e)),da(Md,n)}}function Fd(e,n,t){e==="focusin"?($u(),Gt=n,rr=t,Gt.attachEvent("onpropertychange",Da)):e==="focusout"&&$u()}function Ld(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(rr)}function jd(e,n){if(e==="click")return Ri(n)}function Ud(e,n){if(e==="input"||e==="change")return Ri(n)}function $d(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Be=typeof Object.is=="function"?Object.is:$d;function ir(e,n){if(Be(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Io.call(n,i)||!Be(e[i],n[i]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,n){var t=Bu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bu(t)}}function Ma(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ma(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Aa(){for(var e=window,n=ni();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ni(e.document)}return n}function Ul(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bd(e){var n=Aa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ma(t.ownerDocument.documentElement,t)){if(r!==null&&Ul(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Hu(t,o);var l=Hu(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hd=en&&"documentMode"in document&&11>=document.documentMode,Jn=null,Go=null,Wt=null,Wo=!1;function Vu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wo||Jn==null||Jn!==ni(r)||(r=Jn,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wt&&ir(Wt,r)||(Wt=r,r=si(Go,"onSelect"),0<r.length&&(n=new Fl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},ro={},Fa={};en&&(Fa=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Oi(e){if(ro[e])return ro[e];if(!qn[e])return e;var n=qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fa)return ro[e]=n[t];return e}var La=Oi("animationend"),ja=Oi("animationiteration"),Ua=Oi("animationstart"),$a=Oi("transitionend"),Ba=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,n){Ba.set(e,n),Gn(n,[e])}for(var io=0;io<Gu.length;io++){var oo=Gu[io],Vd=oo.toLowerCase(),Gd=oo[0].toUpperCase()+oo.slice(1);Tn(Vd,"on"+Gd)}Tn(La,"onAnimationEnd");Tn(ja,"onAnimationIteration");Tn(Ua,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn($a,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));function Wu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Vf(r,n,void 0,e),e.currentTarget=null}function Ha(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;Wu(i,u,a),o=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,a=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;Wu(i,u,a),o=s}}}if(ri)throw e=$o,ri=!1,$o=null,e}function L(e,n){var t=n[Jo];t===void 0&&(t=n[Jo]=new Set);var r=e+"__bubble";t.has(r)||(Va(n,e,2,!1),t.add(r))}function lo(e,n,t){var r=0;n&&(r|=4),Va(t,e,r,n)}var Or="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Or]){e[Or]=!0,Js.forEach(function(t){t!=="selectionchange"&&(Wd.has(t)||lo(t,!1,e),lo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Or]||(n[Or]=!0,lo("selectionchange",!1,n))}}function Va(e,n,t,r){switch(Ta(n)){case 1:var i=od;break;case 4:i=ld;break;default:i=Ml}t=i.bind(null,n,t,e),i=void 0,!Uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function uo(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Mn(u),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}u=u.parentNode}}r=r.return}da(function(){var a=o,v=Ol(t),c=[];e:{var d=Ba.get(e);if(d!==void 0){var f=Fl,m=e;switch(e){case"keypress":if(Wr(t)===0)break e;case"keydown":case"keyup":f=Sd;break;case"focusin":m="focus",f=eo;break;case"focusout":m="blur",f=eo;break;case"beforeblur":case"afterblur":f=eo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=kd;break;case La:case ja:case Ua:f=dd;break;case $a:f=Td;break;case"scroll":f=ud;break;case"wheel":f=Cd;break;case"copy":case"cut":case"paste":f=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Au}var y=(n&4)!==0,x=!y&&e==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var p=a,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=Zt(p,h),w!=null&&y.push(lr(p,w,g)))),x)break;p=p.return}0<y.length&&(d=new f(d,m,null,t,v),c.push({event:d,listeners:y}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&t!==Lo&&(m=t.relatedTarget||t.fromElement)&&(Mn(m)||m[nn]))break e;if((f||d)&&(d=v.window===v?v:(d=v.ownerDocument)?d.defaultView||d.parentWindow:window,f?(m=t.relatedTarget||t.toElement,f=a,m=m?Mn(m):null,m!==null&&(x=Wn(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=a),f!==m)){if(y=Du,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Au,w="onPointerLeave",h="onPointerEnter",p="pointer"),x=f==null?d:bn(f),g=m==null?d:bn(m),d=new y(w,p+"leave",f,t,v),d.target=x,d.relatedTarget=g,w=null,Mn(v)===a&&(y=new y(h,p+"enter",m,t,v),y.target=g,y.relatedTarget=x,w=y),x=w,f&&m)n:{for(y=f,h=m,p=0,g=y;g;g=Qn(g))p++;for(g=0,w=h;w;w=Qn(w))g++;for(;0<p-g;)y=Qn(y),p--;for(;0<g-p;)h=Qn(h),g--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break n;y=Qn(y),h=Qn(h)}y=null}else y=null;f!==null&&Qu(c,d,f,y,!1),m!==null&&x!==null&&Qu(c,x,m,y,!0)}}e:{if(d=a?bn(a):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var S=Ad;else if(ju(d))if(za)S=Ud;else{S=Ld;var I=Fd}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=jd);if(S&&(S=S(e,a))){Pa(c,S,t,v);break e}I&&I(e,d,a),e==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&zo(d,"number",d.value)}switch(I=a?bn(a):window,e){case"focusin":(ju(I)||I.contentEditable==="true")&&(Jn=I,Go=a,Wt=null);break;case"focusout":Wt=Go=Jn=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,Vu(c,t,v);break;case"selectionchange":if(Hd)break;case"keydown":case"keyup":Vu(c,t,v)}var N;if(jl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Yn?Ra(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(Ca&&t.locale!=="ko"&&(Yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Yn&&(N=_a()):(vn=v,Al="value"in vn?vn.value:vn.textContent,Yn=!0)),I=si(a,k),0<I.length&&(k=new Mu(k,e,null,t,v),c.push({event:k,listeners:I}),N?k.data=N:(N=Oa(t),N!==null&&(k.data=N)))),(N=Od?Pd(e,t):zd(e,t))&&(a=si(a,"onBeforeInput"),0<a.length&&(v=new Mu("onBeforeInput","beforeinput",null,t,v),c.push({event:v,listeners:a}),v.data=N))}Ha(c,n)})}function lr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function si(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zt(e,t),o!=null&&r.unshift(lr(e,o,i)),o=Zt(e,n),o!=null&&r.push(lr(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=Zt(t,o),s!=null&&l.unshift(lr(t,s,u))):i||(s=Zt(t,o),s!=null&&l.push(lr(t,s,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Qd=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Kd,"")}function Pr(e,n,t){if(n=Ku(n),Ku(e)!==n&&t)throw Error(E(425))}function ai(){}var Qo=null,Ko=null;function Xo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yo=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0,Xu=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof Xu<"u"?function(e){return Xu.resolve(null).then(e).catch(Jd)}:Yo;function Jd(e){setTimeout(function(){throw e})}function so(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),tr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);tr(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var St=Math.random().toString(36).slice(2),Ge="__reactFiber$"+St,ur="__reactProps$"+St,nn="__reactContainer$"+St,Jo="__reactEvents$"+St,qd="__reactListeners$"+St,bd="__reactHandles$"+St;function Mn(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Yu(e);e!==null;){if(t=e[Ge])return t;e=Yu(e)}return n}e=t,t=e.parentNode}return null}function gr(e){return e=e[Ge]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Pi(e){return e[ur]||null}var qo=[],Zn=-1;function _n(e){return{current:e}}function U(e){0>Zn||(e.current=qo[Zn],qo[Zn]=null,Zn--)}function F(e,n){Zn++,qo[Zn]=e.current,e.current=n}var In={},le=_n(In),ve=_n(!1),Un=In;function vt(e,n){var t=e.type.contextTypes;if(!t)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function ci(){U(ve),U(le)}function Ju(e,n,t){if(le.current!==In)throw Error(E(168));F(le,n),F(ve,t)}function Ga(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,Ff(e)||"Unknown",i));return V({},t,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Un=le.current,F(le,e),F(ve,ve.current),!0}function qu(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=Ga(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,U(ve),U(le),F(le,e)):U(ve),F(ve,t)}var Xe=null,zi=!1,ao=!1;function Wa(e){Xe===null?Xe=[e]:Xe.push(e)}function Zd(e){zi=!0,Wa(e)}function Cn(){if(!ao&&Xe!==null){ao=!0;var e=0,n=M;try{var t=Xe;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Xe=null,zi=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),ma(Pl,Cn),i}finally{M=n,ao=!1}}return null}var et=[],nt=0,di=null,vi=0,Ne=[],ke=0,$n=null,Je=1,qe="";function Pn(e,n){et[nt++]=vi,et[nt++]=di,di=e,vi=n}function Qa(e,n,t){Ne[ke++]=Je,Ne[ke++]=qe,Ne[ke++]=$n,$n=e;var r=Je;e=qe;var i=32-Le(r)-1;r&=~(1<<i),t+=1;var o=32-Le(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-Le(n)+i|t<<i|r,qe=o+e}else Je=1<<o|t<<i|r,qe=e}function $l(e){e.return!==null&&(Pn(e,1),Qa(e,1,0))}function Bl(e){for(;e===di;)di=et[--nt],et[nt]=null,vi=et[--nt],et[nt]=null;for(;e===$n;)$n=Ne[--ke],Ne[ke]=null,qe=Ne[--ke],Ne[ke]=null,Je=Ne[--ke],Ne[ke]=null}var ye=null,ge=null,$=!1,Ae=null;function Ka(e,n){var t=Ie(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function bu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ge=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ie(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ge=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zo(e){if($){var n=ge;if(n){var t=n;if(!bu(e,n)){if(bo(e))throw Error(E(418));n=yn(t.nextSibling);var r=ye;n&&bu(e,n)?Ka(r,t):(e.flags=e.flags&-4097|2,$=!1,ye=e)}}else{if(bo(e))throw Error(E(418));e.flags=e.flags&-4097|2,$=!1,ye=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function zr(e){if(e!==ye)return!1;if(!$)return Zu(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Xo(e.type,e.memoizedProps)),n&&(n=ge)){if(bo(e))throw Xa(),Error(E(418));for(;n;)Ka(e,n),n=yn(n.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ye?yn(e.stateNode.nextSibling):null;return!0}function Xa(){for(var e=ge;e;)e=yn(e.nextSibling)}function pt(){ge=ye=null,$=!1}function Hl(e){Ae===null?Ae=[e]:Ae.push(e)}var ev=on.ReactCurrentBatchConfig;function ze(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var pi=_n(null),hi=null,tt=null,Vl=null;function Gl(){Vl=tt=hi=null}function Wl(e){var n=pi.current;U(pi),e._currentValue=n}function el(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){hi=e,Vl=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(hi===null)throw Error(E(308));tt=e,hi.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var An=null;function Ql(e){An===null?An=[e]:An.push(e)}function Ya(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ql(n)):(t.next=i.next,i.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ja(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,tn(e,t)}return i=r.interleaved,i===null?(n.next=n,Ql(r)):(n.next=i.next,i.next=n),r.interleaved=n,tn(e,t)}function Qr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zl(e,t)}}function es(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function mi(e,n,t,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,l===null?o=a:l.next=a,l=s;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==l&&(u===null?v.firstBaseUpdate=a:u.next=a,v.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,v=a=s=null,u=o;do{var d=u.lane,f=u.eventTime;if((r&d)===d){v!==null&&(v=v.next={eventTime:f,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(d=n,f=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(f,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(f,c,d):m,d==null)break e;c=V({},c,d);break e;case 2:cn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else f={eventTime:f,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(a=v=f,s=c):v=v.next=f,l|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(v===null&&(s=c),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Hn|=l,e.lanes=l,e.memoizedState=c}}function ns(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var qa=new Ys.Component().refs;function nl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Di={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),i=Sn(e),o=Ze(r,i);o.payload=n,t!=null&&(o.callback=t),n=xn(e,o,i),n!==null&&(je(n,e,i,r),Qr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),i=Sn(e),o=Ze(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=xn(e,o,i),n!==null&&(je(n,e,i,r),Qr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=Sn(e),i=Ze(t,r);i.tag=2,n!=null&&(i.callback=n),n=xn(e,i,r),n!==null&&(je(n,e,r,t),Qr(n,e,r))}};function ts(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!ir(t,r)||!ir(i,o):!0}function ba(e,n,t){var r=!1,i=In,o=n.contextType;return typeof o=="object"&&o!==null?o=_e(o):(i=pe(n)?Un:le.current,r=n.contextTypes,o=(r=r!=null)?vt(e,i):In),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Di,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function rs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Di.enqueueReplaceState(n,n.state,null)}function tl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=qa,Kl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=_e(o):(o=pe(n)?Un:le.current,i.context=vt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(nl(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Di.enqueueReplaceState(i,i.state,null),mi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;u===qa&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Dr(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function is(e){var n=e._init;return n(e._payload)}function Za(e){function n(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=En(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,p,g,w){return p===null||p.tag!==6?(p=go(g,h.mode,w),p.return=h,p):(p=i(p,g),p.return=h,p)}function s(h,p,g,w){var S=g.type;return S===Xn?v(h,p,g.props.children,w,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&is(S)===p.type)?(w=i(p,g.props),w.ref=Rt(h,p,g),w.return=h,w):(w=br(g.type,g.key,g.props,null,h.mode,w),w.ref=Rt(h,p,g),w.return=h,w)}function a(h,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=yo(g,h.mode,w),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function v(h,p,g,w,S){return p===null||p.tag!==7?(p=jn(g,h.mode,w,S),p.return=h,p):(p=i(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=go(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return g=br(p.type,p.key,p.props,null,h.mode,g),g.ref=Rt(h,null,p),g.return=h,g;case Kn:return p=yo(p,h.mode,g),p.return=h,p;case an:var w=p._init;return c(h,w(p._payload),g)}if(Ft(p)||kt(p))return p=jn(p,h.mode,g,null),p.return=h,p;Dr(h,p)}return null}function d(h,p,g,w){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:u(h,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return g.key===S?s(h,p,g,w):null;case Kn:return g.key===S?a(h,p,g,w):null;case an:return S=g._init,d(h,p,S(g._payload),w)}if(Ft(g)||kt(g))return S!==null?null:v(h,p,g,w,null);Dr(h,g)}return null}function f(h,p,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,u(p,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Er:return h=h.get(w.key===null?g:w.key)||null,s(p,h,w,S);case Kn:return h=h.get(w.key===null?g:w.key)||null,a(p,h,w,S);case an:var I=w._init;return f(h,p,g,I(w._payload),S)}if(Ft(w)||kt(w))return h=h.get(g)||null,v(p,h,w,S,null);Dr(p,w)}return null}function m(h,p,g,w){for(var S=null,I=null,N=p,k=p=0,A=null;N!==null&&k<g.length;k++){N.index>k?(A=N,N=null):A=N.sibling;var P=d(h,N,g[k],w);if(P===null){N===null&&(N=A);break}e&&N&&P.alternate===null&&n(h,N),p=o(P,p,k),I===null?S=P:I.sibling=P,I=P,N=A}if(k===g.length)return t(h,N),$&&Pn(h,k),S;if(N===null){for(;k<g.length;k++)N=c(h,g[k],w),N!==null&&(p=o(N,p,k),I===null?S=N:I.sibling=N,I=N);return $&&Pn(h,k),S}for(N=r(h,N);k<g.length;k++)A=f(N,h,k,g[k],w),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?k:A.key),p=o(A,p,k),I===null?S=A:I.sibling=A,I=A);return e&&N.forEach(function(Oe){return n(h,Oe)}),$&&Pn(h,k),S}function y(h,p,g,w){var S=kt(g);if(typeof S!="function")throw Error(E(150));if(g=S.call(g),g==null)throw Error(E(151));for(var I=S=null,N=p,k=p=0,A=null,P=g.next();N!==null&&!P.done;k++,P=g.next()){N.index>k?(A=N,N=null):A=N.sibling;var Oe=d(h,N,P.value,w);if(Oe===null){N===null&&(N=A);break}e&&N&&Oe.alternate===null&&n(h,N),p=o(Oe,p,k),I===null?S=Oe:I.sibling=Oe,I=Oe,N=A}if(P.done)return t(h,N),$&&Pn(h,k),S;if(N===null){for(;!P.done;k++,P=g.next())P=c(h,P.value,w),P!==null&&(p=o(P,p,k),I===null?S=P:I.sibling=P,I=P);return $&&Pn(h,k),S}for(N=r(h,N);!P.done;k++,P=g.next())P=f(N,h,k,P.value,w),P!==null&&(e&&P.alternate!==null&&N.delete(P.key===null?k:P.key),p=o(P,p,k),I===null?S=P:I.sibling=P,I=P);return e&&N.forEach(function(Et){return n(h,Et)}),$&&Pn(h,k),S}function x(h,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Xn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:e:{for(var S=g.key,I=p;I!==null;){if(I.key===S){if(S=g.type,S===Xn){if(I.tag===7){t(h,I.sibling),p=i(I,g.props.children),p.return=h,h=p;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&is(S)===I.type){t(h,I.sibling),p=i(I,g.props),p.ref=Rt(h,I,g),p.return=h,h=p;break e}t(h,I);break}else n(h,I);I=I.sibling}g.type===Xn?(p=jn(g.props.children,h.mode,w,g.key),p.return=h,h=p):(w=br(g.type,g.key,g.props,null,h.mode,w),w.ref=Rt(h,p,g),w.return=h,h=w)}return l(h);case Kn:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{t(h,p);break}else n(h,p);p=p.sibling}p=yo(g,h.mode,w),p.return=h,h=p}return l(h);case an:return I=g._init,x(h,p,I(g._payload),w)}if(Ft(g))return m(h,p,g,w);if(kt(g))return y(h,p,g,w);Dr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(h,p.sibling),p=i(p,g),p.return=h,h=p):(t(h,p),p=go(g,h.mode,w),p.return=h,h=p),l(h)):t(h,p)}return x}var ht=Za(!0),ec=Za(!1),yr={},Qe=_n(yr),sr=_n(yr),ar=_n(yr);function Fn(e){if(e===yr)throw Error(E(174));return e}function Xl(e,n){switch(F(ar,n),F(sr,e),F(Qe,yr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Mo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Mo(n,e)}U(Qe),F(Qe,n)}function mt(){U(Qe),U(sr),U(ar)}function nc(e){Fn(ar.current);var n=Fn(Qe.current),t=Mo(n,e.type);n!==t&&(F(sr,e),F(Qe,t))}function Yl(e){sr.current===e&&(U(Qe),U(sr))}var B=_n(0);function gi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var co=[];function Jl(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Kr=on.ReactCurrentDispatcher,fo=on.ReactCurrentBatchConfig,Bn=0,H=null,Y=null,b=null,yi=!1,Qt=!1,cr=0,nv=0;function re(){throw Error(E(321))}function ql(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Be(e[t],n[t]))return!1;return!0}function bl(e,n,t,r,i,o){if(Bn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Kr.current=e===null||e.memoizedState===null?ov:lv,e=t(r,i),Qt){o=0;do{if(Qt=!1,cr=0,25<=o)throw Error(E(301));o+=1,b=Y=null,n.updateQueue=null,Kr.current=uv,e=t(r,i)}while(Qt)}if(Kr.current=xi,n=Y!==null&&Y.next!==null,Bn=0,b=Y=H=null,yi=!1,n)throw Error(E(300));return e}function Zl(){var e=cr!==0;return cr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?H.memoizedState=b=e:b=b.next=e,b}function Ce(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=b===null?H.memoizedState:b.next;if(n!==null)b=n,Y=e;else{if(e===null)throw Error(E(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},b===null?H.memoizedState=b=e:b=b.next=e}return b}function fr(e,n){return typeof n=="function"?n(e):n}function vo(e){var n=Ce(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,s=null,a=o;do{var v=a.lane;if((Bn&v)===v)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var c={lane:v,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=c,l=r):s=s.next=c,H.lanes|=v,Hn|=v}a=a.next}while(a!==null&&a!==o);s===null?l=r:s.next=u,Be(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function po(e){var n=Ce(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Be(o,n.memoizedState)||(de=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function tc(){}function rc(e,n){var t=H,r=Ce(),i=n(),o=!Be(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,eu(lc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,dr(9,oc.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(E(349));Bn&30||ic(t,n,i)}return i}function ic(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function oc(e,n,t,r){n.value=t,n.getSnapshot=r,uc(n)&&sc(e)}function lc(e,n,t){return t(function(){uc(n)&&sc(e)})}function uc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Be(e,t)}catch{return!0}}function sc(e){var n=tn(e,1);n!==null&&je(n,e,1,-1)}function os(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},n.queue=e,e=e.dispatch=iv.bind(null,H,e),[n.memoizedState,e]}function dr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ac(){return Ce().memoizedState}function Xr(e,n,t,r){var i=Ve();H.flags|=e,i.memoizedState=dr(1|n,t,void 0,r===void 0?null:r)}function Mi(e,n,t,r){var i=Ce();r=r===void 0?null:r;var o=void 0;if(Y!==null){var l=Y.memoizedState;if(o=l.destroy,r!==null&&ql(r,l.deps)){i.memoizedState=dr(n,t,o,r);return}}H.flags|=e,i.memoizedState=dr(1|n,t,o,r)}function ls(e,n){return Xr(8390656,8,e,n)}function eu(e,n){return Mi(2048,8,e,n)}function cc(e,n){return Mi(4,2,e,n)}function fc(e,n){return Mi(4,4,e,n)}function dc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vc(e,n,t){return t=t!=null?t.concat([e]):null,Mi(4,4,dc.bind(null,n,e),t)}function nu(){}function pc(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ql(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function hc(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ql(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function mc(e,n,t){return Bn&21?(Be(t,n)||(t=xa(),H.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function tv(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=fo.transition;fo.transition={};try{e(!1),n()}finally{M=t,fo.transition=r}}function gc(){return Ce().memoizedState}function rv(e,n,t){var r=Sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},yc(e))xc(n,t);else if(t=Ya(e,n,t,r),t!==null){var i=se();je(t,e,r,i),wc(t,n,r)}}function iv(e,n,t){var r=Sn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(yc(e))xc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,Be(u,l)){var s=n.interleaved;s===null?(i.next=i,Ql(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Ya(e,n,i,r),t!==null&&(i=se(),je(t,e,r,i),wc(t,n,r))}}function yc(e){var n=e.alternate;return e===H||n!==null&&n===H}function xc(e,n){Qt=yi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function wc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zl(e,t)}}var xi={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},ov={readContext:_e,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:ls,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Xr(4194308,4,dc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Xr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Xr(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=rv.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:os,useDebugValue:nu,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=os(!1),n=e[0];return e=tv.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Ve();if($){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),Z===null)throw Error(E(349));Bn&30||ic(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,ls(lc.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,oc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ve(),n=Z.identifierPrefix;if($){var t=qe,r=Je;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=nv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},lv={readContext:_e,useCallback:pc,useContext:_e,useEffect:eu,useImperativeHandle:vc,useInsertionEffect:cc,useLayoutEffect:fc,useMemo:hc,useReducer:vo,useRef:ac,useState:function(){return vo(fr)},useDebugValue:nu,useDeferredValue:function(e){var n=Ce();return mc(n,Y.memoizedState,e)},useTransition:function(){var e=vo(fr)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:tc,useSyncExternalStore:rc,useId:gc,unstable_isNewReconciler:!1},uv={readContext:_e,useCallback:pc,useContext:_e,useEffect:eu,useImperativeHandle:vc,useInsertionEffect:cc,useLayoutEffect:fc,useMemo:hc,useReducer:po,useRef:ac,useState:function(){return po(fr)},useDebugValue:nu,useDeferredValue:function(e){var n=Ce();return Y===null?n.memoizedState=e:mc(n,Y.memoizedState,e)},useTransition:function(){var e=po(fr)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:tc,useSyncExternalStore:rc,useId:gc,unstable_isNewReconciler:!1};function gt(e,n){try{var t="",r=n;do t+=Af(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function ho(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function rl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sv=typeof WeakMap=="function"?WeakMap:Map;function Sc(e,n,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Si||(Si=!0,vl=r),rl(e,n)},t}function Ec(e,n,t){t=Ze(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){rl(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){rl(e,n),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function us(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sv;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Ev.bind(null,e,n,t),n.then(e,e))}function ss(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function as(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ze(-1,1),n.tag=2,xn(t,n,1))),t.lanes|=1),e)}var av=on.ReactCurrentOwner,de=!1;function ue(e,n,t,r){n.child=e===null?ec(n,null,t,r):ht(n,e.child,t,r)}function cs(e,n,t,r,i){t=t.render;var o=n.ref;return at(n,i),r=bl(e,n,t,r,o,i),t=Zl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&t&&$l(n),n.flags|=1,ue(e,n,r,i),n.child)}function fs(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!au(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Nc(e,n,o,r,i)):(e=br(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:ir,t(l,r)&&e.ref===n.ref)return rn(e,n,i)}return n.flags|=1,e=En(o,r),e.ref=n.ref,e.return=n,n.child=e}function Nc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(ir(o,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,rn(e,n,i)}return il(e,n,t,r,i)}function kc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(it,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(it,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,F(it,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,F(it,me),me|=r;return ue(e,n,i,t),n.child}function Ic(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function il(e,n,t,r,i){var o=pe(t)?Un:le.current;return o=vt(n,o),at(n,i),t=bl(e,n,t,r,o,i),r=Zl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&r&&$l(n),n.flags|=1,ue(e,n,t,i),n.child)}function ds(e,n,t,r,i){if(pe(t)){var o=!0;fi(n)}else o=!1;if(at(n,i),n.stateNode===null)Yr(e,n),ba(n,t,r),tl(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var s=l.context,a=t.contextType;typeof a=="object"&&a!==null?a=_e(a):(a=pe(t)?Un:le.current,a=vt(n,a));var v=t.getDerivedStateFromProps,c=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==a)&&rs(n,l,r,a),cn=!1;var d=n.memoizedState;l.state=d,mi(n,r,l,i),s=n.memoizedState,u!==r||d!==s||ve.current||cn?(typeof v=="function"&&(nl(n,t,v,r),s=n.memoizedState),(u=cn||ts(n,t,u,r,d,s,a))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=a,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Ja(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:ze(n.type,u),l.props=a,c=n.pendingProps,d=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=pe(t)?Un:le.current,s=vt(n,s));var f=t.getDerivedStateFromProps;(v=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==c||d!==s)&&rs(n,l,r,s),cn=!1,d=n.memoizedState,l.state=d,mi(n,r,l,i);var m=n.memoizedState;u!==c||d!==m||ve.current||cn?(typeof f=="function"&&(nl(n,t,f,r),m=n.memoizedState),(a=cn||ts(n,t,a,r,d,m,s)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),l.props=r,l.state=m,l.context=s,r=a):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return ol(e,n,t,r,o,i)}function ol(e,n,t,r,i,o){Ic(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&qu(n,t,!1),rn(e,n,o);r=n.stateNode,av.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=ht(n,e.child,null,o),n.child=ht(n,null,u,o)):ue(e,n,u,o),n.memoizedState=r.state,i&&qu(n,t,!0),n.child}function Tc(e){var n=e.stateNode;n.pendingContext?Ju(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ju(e,n.context,!1),Xl(e,n.containerInfo)}function vs(e,n,t,r,i){return pt(),Hl(i),n.flags|=256,ue(e,n,t,r),n.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(B,i&1),e===null)return Zo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Li(l,r,0,null),e=jn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ul(t),n.memoizedState=ll,e):tu(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return cv(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=En(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=En(u,o):(o=jn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?ul(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=ll,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function tu(e,n){return n=Li({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Mr(e,n,t,r){return r!==null&&Hl(r),ht(n,e.child,null,t),e=tu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cv(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=ho(Error(E(422))),Mr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Li({mode:"visible",children:r.children},i,0,null),o=jn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ht(n,e.child,null,l),n.child.memoizedState=ul(l),n.memoizedState=ll,o);if(!(n.mode&1))return Mr(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(E(419)),r=ho(o,r,void 0),Mr(e,n,l,r)}if(u=(l&e.childLanes)!==0,de||u){if(r=Z,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),je(r,e,i,-1))}return su(),r=ho(Error(E(421))),Mr(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Nv.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ge=yn(i.nextSibling),ye=n,$=!0,Ae=null,e!==null&&(Ne[ke++]=Je,Ne[ke++]=qe,Ne[ke++]=$n,Je=e.id,qe=e.overflow,$n=n),n=tu(n,r.children),n.flags|=4096,n)}function ps(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),el(e.return,n,t)}function mo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Cc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ps(e,t,n);else if(e.tag===19)ps(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&gi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),mo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&gi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}mo(n,!0,t,null,o);break;case"together":mo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=En(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=En(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fv(e,n,t){switch(n.tag){case 3:Tc(n),pt();break;case 5:nc(n);break;case 1:pe(n.type)&&fi(n);break;case 4:Xl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(pi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?_c(e,n,t):(F(B,B.current&1),e=rn(e,n,t),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Cc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,kc(e,n,t)}return rn(e,n,t)}var Rc,sl,Oc,Pc;Rc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sl=function(){};Oc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Fn(Qe.current);var o=null;switch(t){case"input":i=Oo(e,i),r=Oo(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=Do(e,i),r=Do(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}Ao(t,r);var l;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(qt.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(qt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&L("scroll",e),o||u===s||(o=[])):(o=o||[]).push(a,s))}t&&(o=o||[]).push("style",t);var a=o;(n.updateQueue=a)&&(n.flags|=4)}};Pc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ot(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function dv(e,n,t){var r=n.pendingProps;switch(Bl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return pe(n.type)&&ci(),ie(n),null;case 3:return r=n.stateNode,mt(),U(ve),U(le),Jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(ml(Ae),Ae=null))),sl(e,n),ie(n),null;case 5:Yl(n);var i=Fn(ar.current);if(t=n.type,e!==null&&n.stateNode!=null)Oc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return ie(n),null}if(e=Fn(Qe.current),zr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ge]=n,r[ur]=o,e=(n.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(i=0;i<jt.length;i++)L(jt[i],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Nu(r,o),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},L("invalid",r);break;case"textarea":Iu(r,o),L("invalid",r)}Ao(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Pr(r.textContent,u,e),i=["children",""+u]):qt.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&L("scroll",r)}switch(t){case"input":Nr(r),ku(r,o,!0);break;case"textarea":Nr(r),Tu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ai)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ia(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ge]=n,e[ur]=r,Rc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Fo(t,r),t){case"dialog":L("cancel",e),L("close",e),i=r;break;case"iframe":case"object":case"embed":L("load",e),i=r;break;case"video":case"audio":for(i=0;i<jt.length;i++)L(jt[i],e);i=r;break;case"source":L("error",e),i=r;break;case"img":case"image":case"link":L("error",e),L("load",e),i=r;break;case"details":L("toggle",e),i=r;break;case"input":Nu(e,r),i=Oo(e,r),L("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),L("invalid",e);break;case"textarea":Iu(e,r),i=Do(e,r),L("invalid",e);break;default:i=r}Ao(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?ua(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&oa(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&bt(e,s):typeof s=="number"&&bt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&L("scroll",e):s!=null&&Tl(e,o,s,l))}switch(t){case"input":Nr(e),ku(e,r,!1);break;case"textarea":Nr(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ot(e,!!r.multiple,o,!1):r.defaultValue!=null&&ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ai)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Pc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Fn(ar.current),Fn(Qe.current),zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(o=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return ie(n),null;case 13:if(U(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ge!==null&&n.mode&1&&!(n.flags&128))Xa(),pt(),n.flags|=98560,o=!1;else if(o=zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Ge]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),o=!1}else Ae!==null&&(ml(Ae),Ae=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?J===0&&(J=3):su())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return mt(),sl(e,n),e===null&&or(n.stateNode.containerInfo),ie(n),null;case 10:return Wl(n.type._context),ie(n),null;case 17:return pe(n.type)&&ci(),ie(n),null;case 19:if(U(B),o=n.memoizedState,o===null)return ie(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Ot(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=gi(e),l!==null){for(n.flags|=128,Ot(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>yt&&(n.flags|=128,r=!0,Ot(o,!1),n.lanes=4194304)}else{if(!r)if(e=gi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ot(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ie(n),null}else 2*Q()-o.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,Ot(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=B.current,F(B,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return uu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function vv(e,n){switch(Bl(n),n.tag){case 1:return pe(n.type)&&ci(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),U(ve),U(le),Jl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Yl(n),null;case 13:if(U(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(B),null;case 4:return mt(),null;case 10:return Wl(n.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var Ar=!1,oe=!1,pv=typeof WeakSet=="function"?WeakSet:Set,_=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function al(e,n,t){try{t()}catch(r){G(e,n,r)}}var hs=!1;function hv(e,n){if(Qo=li,e=Aa(),Ul(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,s=-1,a=0,v=0,c=e,d=null;n:for(;;){for(var f;c!==t||i!==0&&c.nodeType!==3||(u=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(f=c.firstChild)!==null;)d=c,c=f;for(;;){if(c===e)break n;if(d===t&&++a===i&&(u=l),d===o&&++v===r&&(s=l),(f=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=f}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ko={focusedElem:e,selectionRange:t},li=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,x=m.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:ze(n.type,y),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){G(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return m=hs,hs=!1,m}function Kt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&al(n,t,o)}i=i.next}while(i!==r)}}function Ai(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function cl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zc(e){var n=e.alternate;n!==null&&(e.alternate=null,zc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[ur],delete n[Jo],delete n[qd],delete n[bd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(fl(e,n,t),e=e.sibling;e!==null;)fl(e,n,t),e=e.sibling}function dl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dl(e,n,t),e=e.sibling;e!==null;)dl(e,n,t),e=e.sibling}var ee=null,De=!1;function ln(e,n,t){for(t=t.child;t!==null;)Mc(e,n,t),t=t.sibling}function Mc(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(_i,t)}catch{}switch(t.tag){case 5:oe||rt(t,n);case 6:var r=ee,i=De;ee=null,ln(e,n,t),ee=r,De=i,ee!==null&&(De?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(De?(e=ee,t=t.stateNode,e.nodeType===8?so(e.parentNode,t):e.nodeType===1&&so(e,t),tr(e)):so(ee,t.stateNode));break;case 4:r=ee,i=De,ee=t.stateNode.containerInfo,De=!0,ln(e,n,t),ee=r,De=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&al(t,n,l),i=i.next}while(i!==r)}ln(e,n,t);break;case 1:if(!oe&&(rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){G(t,n,u)}ln(e,n,t);break;case 21:ln(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,ln(e,n,t),oe=r):ln(e,n,t);break;default:ln(e,n,t)}}function gs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pv),n.forEach(function(r){var i=kv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,De=!1;break e;case 3:ee=u.stateNode.containerInfo,De=!0;break e;case 4:ee=u.stateNode.containerInfo,De=!0;break e}u=u.return}if(ee===null)throw Error(E(160));Mc(o,l,i),ee=null,De=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){G(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ac(n,e),n=n.sibling}function Ac(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),He(e),r&4){try{Kt(3,e,e.return),Ai(3,e)}catch(y){G(e,e.return,y)}try{Kt(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:Pe(n,e),He(e),r&512&&t!==null&&rt(t,t.return);break;case 5:if(Pe(n,e),He(e),r&512&&t!==null&&rt(t,t.return),e.flags&32){var i=e.stateNode;try{bt(i,"")}catch(y){G(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ta(i,o),Fo(u,l);var a=Fo(u,o);for(l=0;l<s.length;l+=2){var v=s[l],c=s[l+1];v==="style"?ua(i,c):v==="dangerouslySetInnerHTML"?oa(i,c):v==="children"?bt(i,c):Tl(i,v,c,a)}switch(u){case"input":Po(i,o);break;case"textarea":ra(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?ot(i,!!o.multiple,f,!1):d!==!!o.multiple&&(o.defaultValue!=null?ot(i,!!o.multiple,o.defaultValue,!0):ot(i,!!o.multiple,o.multiple?[]:"",!1))}i[ur]=o}catch(y){G(e,e.return,y)}}break;case 6:if(Pe(n,e),He(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){G(e,e.return,y)}}break;case 3:if(Pe(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:Pe(n,e),He(e);break;case 13:Pe(n,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ou=Q())),r&4&&gs(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(a=oe)||v,Pe(n,e),oe=a):Pe(n,e),He(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!v&&e.mode&1)for(_=e,v=e.child;v!==null;){for(c=_=v;_!==null;){switch(d=_,f=d.child,d.tag){case 0:case 11:case 14:case 15:Kt(4,d,d.return);break;case 1:rt(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){G(r,t,y)}}break;case 5:rt(d,d.return);break;case 22:if(d.memoizedState!==null){xs(c);continue}}f!==null?(f.return=d,_=f):xs(c)}v=v.sibling}e:for(v=null,c=e;;){if(c.tag===5){if(v===null){v=c;try{i=c.stateNode,a?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=la("display",l))}catch(y){G(e,e.return,y)}}}else if(c.tag===6){if(v===null)try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(y){G(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;v===c&&(v=null),c=c.return}v===c&&(v=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Pe(n,e),He(e),r&4&&gs(e);break;case 21:break;default:Pe(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Dc(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bt(i,""),r.flags&=-33);var o=ms(e);dl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ms(e);fl(e,u,l);break;default:throw Error(E(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mv(e,n,t){_=e,Fc(e)}function Fc(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ar;if(!l){var u=i.alternate,s=u!==null&&u.memoizedState!==null||oe;u=Ar;var a=oe;if(Ar=l,(oe=s)&&!a)for(_=i;_!==null;)l=_,s=l.child,l.tag===22&&l.memoizedState!==null?ws(i):s!==null?(s.return=l,_=s):ws(i);for(;o!==null;)_=o,Fc(o),o=o.sibling;_=i,Ar=u,oe=a}ys(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):ys(e)}}function ys(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Ai(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ns(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ns(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var v=a.memoizedState;if(v!==null){var c=v.dehydrated;c!==null&&tr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}oe||n.flags&512&&cl(n)}catch(d){G(n,n.return,d)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function xs(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function ws(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ai(4,n)}catch(s){G(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){G(n,i,s)}}var o=n.return;try{cl(n)}catch(s){G(n,o,s)}break;case 5:var l=n.return;try{cl(n)}catch(s){G(n,l,s)}}}catch(s){G(n,n.return,s)}if(n===e){_=null;break}var u=n.sibling;if(u!==null){u.return=n.return,_=u;break}_=n.return}}var gv=Math.ceil,wi=on.ReactCurrentDispatcher,ru=on.ReactCurrentOwner,Te=on.ReactCurrentBatchConfig,D=0,Z=null,X=null,ne=0,me=0,it=_n(0),J=0,vr=null,Hn=0,Fi=0,iu=0,Xt=null,fe=null,ou=0,yt=1/0,Ke=null,Si=!1,vl=null,wn=null,Fr=!1,pn=null,Ei=0,Yt=0,pl=null,Jr=-1,qr=0;function se(){return D&6?Q():Jr!==-1?Jr:Jr=Q()}function Sn(e){return e.mode&1?D&2&&ne!==0?ne&-ne:ev.transition!==null?(qr===0&&(qr=xa()),qr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ta(e.type)),e):1}function je(e,n,t,r){if(50<Yt)throw Yt=0,pl=null,Error(E(185));hr(e,t,r),(!(D&2)||e!==Z)&&(e===Z&&(!(D&2)&&(Fi|=t),J===4&&dn(e,ne)),he(e,r),t===1&&D===0&&!(n.mode&1)&&(yt=Q()+500,zi&&Cn()))}function he(e,n){var t=e.callbackNode;ed(e,n);var r=oi(e,e===Z?ne:0);if(r===0)t!==null&&Ru(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ru(t),n===1)e.tag===0?Zd(Ss.bind(null,e)):Wa(Ss.bind(null,e)),Yd(function(){!(D&6)&&Cn()}),t=null;else{switch(wa(r)){case 1:t=Pl;break;case 4:t=ga;break;case 16:t=ii;break;case 536870912:t=ya;break;default:t=ii}t=Gc(t,Lc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Lc(e,n){if(Jr=-1,qr=0,D&6)throw Error(E(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=oi(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ni(e,r);else{n=r;var i=D;D|=2;var o=Uc();(Z!==e||ne!==n)&&(Ke=null,yt=Q()+500,Ln(e,n));do try{wv();break}catch(u){jc(e,u)}while(1);Gl(),wi.current=o,D=i,X!==null?n=0:(Z=null,ne=0,n=J)}if(n!==0){if(n===2&&(i=Bo(e),i!==0&&(r=i,n=hl(e,i))),n===1)throw t=vr,Ln(e,0),dn(e,r),he(e,Q()),t;if(n===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!yv(i)&&(n=Ni(e,r),n===2&&(o=Bo(e),o!==0&&(r=o,n=hl(e,o))),n===1))throw t=vr,Ln(e,0),dn(e,r),he(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:zn(e,fe,Ke);break;case 3:if(dn(e,r),(r&130023424)===r&&(n=ou+500-Q(),10<n)){if(oi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yo(zn.bind(null,e,fe,Ke),n);break}zn(e,fe,Ke);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Le(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gv(r/1960))-r,10<r){e.timeoutHandle=Yo(zn.bind(null,e,fe,Ke),r);break}zn(e,fe,Ke);break;case 5:zn(e,fe,Ke);break;default:throw Error(E(329))}}}return he(e,Q()),e.callbackNode===t?Lc.bind(null,e):null}function hl(e,n){var t=Xt;return e.current.memoizedState.isDehydrated&&(Ln(e,n).flags|=256),e=Ni(e,n),e!==2&&(n=fe,fe=t,n!==null&&ml(n)),e}function ml(e){fe===null?fe=e:fe.push.apply(fe,e)}function yv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Be(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~iu,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Ss(e){if(D&6)throw Error(E(327));ct();var n=oi(e,0);if(!(n&1))return he(e,Q()),null;var t=Ni(e,n);if(e.tag!==0&&t===2){var r=Bo(e);r!==0&&(n=r,t=hl(e,r))}if(t===1)throw t=vr,Ln(e,0),dn(e,n),he(e,Q()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zn(e,fe,Ke),he(e,Q()),null}function lu(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(yt=Q()+500,zi&&Cn())}}function Vn(e){pn!==null&&pn.tag===0&&!(D&6)&&ct();var n=D;D|=1;var t=Te.transition,r=M;try{if(Te.transition=null,M=1,e)return e()}finally{M=r,Te.transition=t,D=n,!(D&6)&&Cn()}}function uu(){me=it.current,U(it)}function Ln(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xd(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ci();break;case 3:mt(),U(ve),U(le),Jl();break;case 5:Yl(r);break;case 4:mt();break;case 13:U(B);break;case 19:U(B);break;case 10:Wl(r.type._context);break;case 22:case 23:uu()}t=t.return}if(Z=e,X=e=En(e.current,null),ne=me=n,J=0,vr=null,iu=Fi=Hn=0,fe=Xt=null,An!==null){for(n=0;n<An.length;n++)if(t=An[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}An=null}return e}function jc(e,n){do{var t=X;try{if(Gl(),Kr.current=xi,yi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yi=!1}if(Bn=0,b=Y=H=null,Qt=!1,cr=0,ru.current=null,t===null||t.return===null){J=1,vr=n,X=null;break}e:{var o=e,l=t.return,u=t,s=n;if(n=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,v=u,c=v.tag;if(!(v.mode&1)&&(c===0||c===11||c===15)){var d=v.alternate;d?(v.updateQueue=d.updateQueue,v.memoizedState=d.memoizedState,v.lanes=d.lanes):(v.updateQueue=null,v.memoizedState=null)}var f=ss(l);if(f!==null){f.flags&=-257,as(f,l,u,o,n),f.mode&1&&us(o,a,n),n=f,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){us(o,a,n),su();break e}s=Error(E(426))}}else if($&&u.mode&1){var x=ss(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),as(x,l,u,o,n),Hl(gt(s,u));break e}}o=s=gt(s,u),J!==4&&(J=2),Xt===null?Xt=[o]:Xt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var h=Sc(o,s,n);es(o,h);break e;case 1:u=s;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Ec(o,u,n);es(o,w);break e}}o=o.return}while(o!==null)}Bc(t)}catch(S){n=S,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function Uc(){var e=wi.current;return wi.current=xi,e===null?xi:e}function su(){(J===0||J===3||J===2)&&(J=4),Z===null||!(Hn&268435455)&&!(Fi&268435455)||dn(Z,ne)}function Ni(e,n){var t=D;D|=2;var r=Uc();(Z!==e||ne!==n)&&(Ke=null,Ln(e,n));do try{xv();break}catch(i){jc(e,i)}while(1);if(Gl(),D=t,wi.current=r,X!==null)throw Error(E(261));return Z=null,ne=0,J}function xv(){for(;X!==null;)$c(X)}function wv(){for(;X!==null&&!Wf();)$c(X)}function $c(e){var n=Vc(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Bc(e):X=n,ru.current=null}function Bc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=vv(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(t=dv(t,n,me),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);J===0&&(J=5)}function zn(e,n,t){var r=M,i=Te.transition;try{Te.transition=null,M=1,Sv(e,n,t,r)}finally{Te.transition=i,M=r}return null}function Sv(e,n,t,r){do ct();while(pn!==null);if(D&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(nd(e,o),e===Z&&(X=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Fr||(Fr=!0,Gc(ii,function(){return ct(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Te.transition,Te.transition=null;var l=M;M=1;var u=D;D|=4,ru.current=null,hv(e,t),Ac(t,e),Bd(Ko),li=!!Qo,Ko=Qo=null,e.current=t,mv(t),Qf(),D=u,M=l,Te.transition=o}else e.current=t;if(Fr&&(Fr=!1,pn=e,Ei=i),o=e.pendingLanes,o===0&&(wn=null),Yf(t.stateNode),he(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Si)throw Si=!1,e=vl,vl=null,e;return Ei&1&&e.tag!==0&&ct(),o=e.pendingLanes,o&1?e===pl?Yt++:(Yt=0,pl=e):Yt=0,Cn(),null}function ct(){if(pn!==null){var e=wa(Ei),n=Te.transition,t=M;try{if(Te.transition=null,M=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Ei=0,D&6)throw Error(E(331));var i=D;for(D|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(_=a;_!==null;){var v=_;switch(v.tag){case 0:case 11:case 15:Kt(8,v,o)}var c=v.child;if(c!==null)c.return=v,_=c;else for(;_!==null;){v=_;var d=v.sibling,f=v.return;if(zc(v),v===a){_=null;break}if(d!==null){d.return=f,_=d;break}_=f}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kt(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,_=h;break e}_=o.return}}var p=e.current;for(_=p;_!==null;){l=_;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,_=g;else e:for(l=p;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ai(9,u)}}catch(S){G(u,u.return,S)}if(u===l){_=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,_=w;break e}_=u.return}}if(D=i,Cn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(_i,e)}catch{}r=!0}return r}finally{M=t,Te.transition=n}}return!1}function Es(e,n,t){n=gt(t,n),n=Sc(e,n,1),e=xn(e,n,1),n=se(),e!==null&&(hr(e,1,n),he(e,n))}function G(e,n,t){if(e.tag===3)Es(e,e,t);else for(;n!==null;){if(n.tag===3){Es(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=gt(t,e),e=Ec(n,e,1),n=xn(n,e,1),e=se(),n!==null&&(hr(n,1,e),he(n,e));break}}n=n.return}}function Ev(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(J===4||J===3&&(ne&130023424)===ne&&500>Q()-ou?Ln(e,0):iu|=t),he(e,n)}function Hc(e,n){n===0&&(e.mode&1?(n=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):n=1);var t=se();e=tn(e,n),e!==null&&(hr(e,n,t),he(e,t))}function Nv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Hc(e,t)}function kv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),Hc(e,t)}var Vc;Vc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,fv(e,n,t);de=!!(e.flags&131072)}else de=!1,$&&n.flags&1048576&&Qa(n,vi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Yr(e,n),e=n.pendingProps;var i=vt(n,le.current);at(n,t),i=bl(null,n,r,e,i,t);var o=Zl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(o=!0,fi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kl(n),i.updater=Di,n.stateNode=i,i._reactInternals=n,tl(n,r,e,t),n=ol(null,n,r,!0,o,t)):(n.tag=0,$&&o&&$l(n),ue(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Yr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Tv(r),e=ze(r,e),i){case 0:n=il(null,n,r,e,t);break e;case 1:n=ds(null,n,r,e,t);break e;case 11:n=cs(null,n,r,e,t);break e;case 14:n=fs(null,n,r,ze(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),il(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),ds(e,n,r,i,t);case 3:e:{if(Tc(n),e===null)throw Error(E(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Ja(e,n),mi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=gt(Error(E(423)),n),n=vs(e,n,r,t,i);break e}else if(r!==i){i=gt(Error(E(424)),n),n=vs(e,n,r,t,i);break e}else for(ge=yn(n.stateNode.containerInfo.firstChild),ye=n,$=!0,Ae=null,t=ec(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===i){n=rn(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return nc(n),e===null&&Zo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Xo(r,i)?l=null:o!==null&&Xo(r,o)&&(n.flags|=32),Ic(e,n),ue(e,n,l,t),n.child;case 6:return e===null&&Zo(n),null;case 13:return _c(e,n,t);case 4:return Xl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ht(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),cs(e,n,r,i,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,F(pi,r._currentValue),r._currentValue=l,o!==null)if(Be(o.value,l)){if(o.children===i.children&&!ve.current){n=rn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ze(-1,t&-t),s.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var v=a.pending;v===null?s.next=s:(s.next=v.next,v.next=s),a.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),el(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),el(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ue(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=_e(i),r=r(i),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),fs(e,n,r,i,t);case 15:return Nc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Yr(e,n),n.tag=1,pe(r)?(e=!0,fi(n)):e=!1,at(n,t),ba(n,r,i),tl(n,r,i,t),ol(null,n,r,!0,e,t);case 19:return Cc(e,n,t);case 22:return kc(e,n,t)}throw Error(E(156,n.tag))};function Gc(e,n){return ma(e,n)}function Iv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,t,r){return new Iv(e,n,t,r)}function au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tv(e){if(typeof e=="function")return au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cl)return 11;if(e===Rl)return 14}return 2}function En(e,n){var t=e.alternate;return t===null?(t=Ie(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function br(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")au(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xn:return jn(t.children,i,o,n);case _l:l=8,i|=8;break;case To:return e=Ie(12,t,n,i|2),e.elementType=To,e.lanes=o,e;case _o:return e=Ie(13,t,n,i),e.elementType=_o,e.lanes=o,e;case Co:return e=Ie(19,t,n,i),e.elementType=Co,e.lanes=o,e;case Zs:return Li(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qs:l=10;break e;case bs:l=9;break e;case Cl:l=11;break e;case Rl:l=14;break e;case an:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Ie(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function jn(e,n,t,r){return e=Ie(7,e,r,n),e.lanes=t,e}function Li(e,n,t,r){return e=Ie(22,e,r,n),e.elementType=Zs,e.lanes=t,e.stateNode={isHidden:!1},e}function go(e,n,t){return e=Ie(6,e,null,n),e.lanes=t,e}function yo(e,n,t){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function _v(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cu(e,n,t,r,i,o,l,u,s){return e=new _v(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ie(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(o),e}function Cv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Wc(e){if(!e)return In;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(pe(t))return Ga(e,t,n)}return n}function Qc(e,n,t,r,i,o,l,u,s){return e=cu(t,r,!0,e,i,o,l,u,s),e.context=Wc(null),t=e.current,r=se(),i=Sn(t),o=Ze(r,i),o.callback=n??null,xn(t,o,i),e.current.lanes=i,hr(e,i,r),he(e,r),e}function ji(e,n,t,r){var i=n.current,o=se(),l=Sn(i);return t=Wc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ze(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=xn(i,n,l),e!==null&&(je(e,i,l,o),Qr(e,i,l)),l}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ns(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function fu(e,n){Ns(e,n),(e=e.alternate)&&Ns(e,n)}function Rv(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}Ui.prototype.render=du.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));ji(e,n,null,null)};Ui.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){ji(null,e,null,null)}),n[nn]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var n=Na();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&Ia(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function Ov(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var a=ki(l);o.call(a)}}var l=Qc(n,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=l,e[nn]=l.current,or(e.nodeType===8?e.parentNode:e),Vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=ki(s);u.call(a)}}var s=cu(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=s,e[nn]=s.current,or(e.nodeType===8?e.parentNode:e),Vn(function(){ji(n,s,t,r)}),s}function Bi(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var s=ki(l);u.call(s)}}ji(n,l,e,i)}else l=Ov(t,n,e,i,r);return ki(l)}Sa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Lt(n.pendingLanes);t!==0&&(zl(n,t|1),he(n,Q()),!(D&6)&&(yt=Q()+500,Cn()))}break;case 13:Vn(function(){var r=tn(e,1);if(r!==null){var i=se();je(r,e,1,i)}}),fu(e,1)}};Dl=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=se();je(n,e,134217728,t)}fu(e,134217728)}};Ea=function(e){if(e.tag===13){var n=Sn(e),t=tn(e,n);if(t!==null){var r=se();je(t,e,n,r)}fu(e,n)}};Na=function(){return M};ka=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};jo=function(e,n,t){switch(n){case"input":if(Po(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Pi(r);if(!i)throw Error(E(90));na(r),Po(r,i)}}}break;case"textarea":ra(e,t);break;case"select":n=t.value,n!=null&&ot(e,!!t.multiple,n,!1)}};ca=lu;fa=Vn;var Pv={usingClientEntryPoint:!1,Events:[gr,bn,Pi,sa,aa,lu]},Pt={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zv={bundleType:Pt.bundleType,version:Pt.version,rendererPackageName:Pt.rendererPackageName,rendererConfig:Pt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pa(e),e===null?null:e.stateNode},findFiberByHostInstance:Pt.findFiberByHostInstance||Rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{_i=Lr.inject(zv),We=Lr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(n))throw Error(E(200));return Cv(e,n,null,t)};we.createRoot=function(e,n){if(!vu(e))throw Error(E(299));var t=!1,r="",i=Kc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=cu(e,1,!1,null,null,t,!1,r,i),e[nn]=n.current,or(e.nodeType===8?e.parentNode:e),new du(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=pa(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Vn(e)};we.hydrate=function(e,n,t){if(!$i(n))throw Error(E(200));return Bi(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!vu(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Kc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Qc(n,null,e,1,t??null,i,!1,o,l),e[nn]=n.current,or(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ui(n)};we.render=function(e,n,t){if(!$i(n))throw Error(E(200));return Bi(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!$i(e))throw Error(E(40));return e._reactRootContainer?(Vn(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};we.unstable_batchedUpdates=lu;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$i(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Bi(e,n,t,!1,r)};we.version="18.2.0-next-9e3b772b8-20220608";function Xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc)}catch(e){console.error(e)}}Xc(),Qs.exports=we;var Dv=Qs.exports,Is=Dv;xu.createRoot=Is.createRoot,xu.hydrateRoot=Is.hydrateRoot;const Mv=`float ease(float t) {
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
`,Av=`#include config

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
uniform float opacity;

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
`,Fv=`
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
vec2 nadd(in vec2 v, in vec2 w) {
  return v + w;
}
vec2 nsub(in vec2 v, in vec2 w) {
  return v - w;
}
vec2 nmul(in vec2 v, in float s) {
  return v * s;
}
float nonlast(in vec2 v) {
  return v.x;
}
#endif
#if DIMENSIONS >= 3
float ndot(in vec3 v, in vec3 w) {
  return dot(v, w);
}
vec3 nadd(in vec3 v, in vec3 w) {
  return v + w;
}
vec3 nsub(in vec3 v, in vec3 w) {
  return v - w;
}
vec3 nmul(in vec3 v, in float s) {
  return v * s;
}
vec2 nonlast(in vec3 v) {
  return v.xy;
}
#endif
#if DIMENSIONS >= 4
float ndot(in vec4 v, in vec4 w) {
  return dot(v, w);
}
vec4 nadd(in vec4 v, in vec4 w) {
  return v + w;
}
vec4 nsub(in vec4 v, in vec4 w) {
  return v - w;
}
vec4 nmul(in vec4 v, in float s) {
  return v * s;
}
vec3 nonlast(in vec4 v) {
  return v.xyz;
}
#endif
#if DIMENSIONS >= 5
float ndot(in vec5 v, in vec5 w) {
  return dot(v.v, w.v) + v.u * w.u;
}
vec5 nadd(in vec5 v, in vec5 w) {
  return vec5(v.v + w.v, v.u + w.u);
}
vec5 nsub(in vec5 v, in vec5 w) {
  return vec5(v.v - w.v, v.u - w.u);
}
vec5 nmul(in vec5 v, in float s) {
  return vec5(v.v * s, v.u * s);
}
vec4 nonlast(in vec5 v) {
  return v.v;
}
#endif
#if DIMENSIONS >= 6
float ndot(in vec6 v, in vec6 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec6 nadd(in vec6 v, in vec6 w) {
  return vec6(v.v + w.v, v.u + w.u);
}
vec6 nsub(in vec6 v, in vec6 w) {
  return vec6(v.v - w.v, v.u - w.u);
}
vec6 nmul(in vec6 v, in float s) {
  return vec6(v.v * s, v.u * s);
}
vec5 nonlast(in vec6 v) {
  return vec5(v.v, v.u.x);
}
#endif
#if DIMENSIONS >= 7
float ndot(in vec7 v, in vec7 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec7 nadd(in vec7 v, in vec7 w) {
  return vec7(v.v + w.v, v.u + w.u);
}
vec7 nsub(in vec7 v, in vec7 w) {
  return vec7(v.v - w.v, v.u - w.u);
}
vec7 nmul(in vec7 v, in float s) {
  return vec7(v.v * s, v.u * s);
}
vec6 nonlast(in vec7 v) {
  return vec6(v.v, v.u.xy);
}
#endif
#if DIMENSIONS >= 8
float ndot(in vec8 v, in vec8 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec8 nadd(in vec8 v, in vec8 w) {
  return vec8(v.v + w.v, v.u + w.u);
}
vec8 nsub(in vec8 v, in vec8 w) {
  return vec8(v.v - w.v, v.u - w.u);
}
vec8 nmul(in vec8 v, in float s) {
  return vec8(v.v * s, v.u * s);
}
vec7 nonlast(in vec8 v) {
  return vec7(v.v, v.u.xyz);
}
#endif
#if DIMENSIONS >= 9
float ndot(in vec9 v, in vec9 w) {
  return dot(v.v, w.v) + dot(v.u, w.u) + v.t * w.t;
}
vec9 nadd(in vec9 v, in vec9 w) {
  return vec9(v.v + w.v, v.u + w.u, v.t + w.t);
}
vec9 nsub(in vec9 v, in vec9 w) {
  return vec9(v.v - w.v, v.u - w.u, v.t - w.t);
}
vec9 nmul(in vec9 v, in float s) {
  return vec9(v.v * s, v.u * s, v.t * s);
}
vec8 nonlast(in vec9 v) {
  return vec8(v.v, v.u);
}
#endif

vec2 adapt(in vec2 m) {
  return m;
}
#if DIMENSIONS == 3
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

float nget(in vec2 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#if DIMENSIONS >= 3
float nget(in vec3 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#endif
#if DIMENSIONS >= 4
float nget(in vec4 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#endif
#if DIMENSIONS >= 5
float nget(in vec5 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u;
  }
}
#endif
#if DIMENSIONS >= 6
float nget(in vec6 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 7
float nget(in vec7 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 8
float nget(in vec8 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 9
float nget(in vec9 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else if(i < 8) {
    return v.u[i - 4];
  } else {
    return v.t;
  }
}
#endif

void nset(inout vec2 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#if DIMENSIONS >= 3
void nset(inout vec3 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#endif
#if DIMENSIONS >= 4
void nset(inout vec4 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#endif
#if DIMENSIONS >= 5
void nset(inout vec5 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u = x;
  }
}
#endif
#if DIMENSIONS >= 6
void nset(inout vec6 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 7
void nset(inout vec7 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 8
void nset(inout vec8 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 9
void nset(inout vec9 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else if(i < 8) {
    v.u[i - 4] = x;
  } else {
    v.t = x;
  }
}
#endif
`,Lv=`#loopN2
float len(in vecN v) {
  return sqrt(ndot(v, v));
}
#endloopN

float xdot(in vecN v) {
  return ndot(multiplyMatrix(metric, v), v);
}

vecN xnormalize(in vecN v) {
  float n = 1. / sqrt(curvature * xdot(v));
  return nmul(v, n);
}

#loopN3
vecN halff(in vecN v, in float k) {
  nset(v, -1, 1. / nget(v, -1)); // Invert last

  float nr = nget(v, -1);
  for(int i = 0; i < _N_ - 1; i++) { // Normalize by last
    nset(v, i, nget(v, i) * nr);
  }

  nr = 2. / (1. + k * nget(v, 1));
  for(int i = 0; i < _N_; i++) {
    nset(v, i, nget(v, i) * nr);

  }

  float temp = nget(v, 1);
  for(int i = 1; i < _N_ - 1; i++) {
    nset(v, i, nget(v, i + 1));
  }
  nset(v, -1, temp);
  return v;
}
vecN_1 halfv(in vecN v) {
  return nonlast(halff(v, 1.));
}
#endloopN
`,jv=`#include helpers
#include ease
#include complex

vec3 project(in vec3 v, in float k) {
  float nr = 1. / max(v.z + k, 1e-9);
  return vec3(v.xy * nr, v.z);
}

#loopN4
vecN_1 project(in vecN v, in float k) {
  float nr = fovN / max(nget(v, -1) + k, 1e-9);
  return nmul(nonlast(v), nr);
}
#endloopN

vec4 viewProject(vec3 position) {
  #if DIMENSIONS == 3 && PROJECTION3 != -1 && PROJECTION3 != 7
  vec4 normalProjection = viewProjection * vec4(position, 1.);
  vec4 flatProjection = viewProjection * vec4(position.xy, 0., 1.);
  return vec4(flatProjection.xy / flatProjection.w, normalProjection.z / normalProjection.w, 1.);
  #else
  return viewProjection * vec4(position, 1.);
  #endif
}

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
  #elif PROJECTION3 == 5 // HALF
  vec2 z = halfv(v);
  if(len(z) > 24.) {
    return vec3(1. / 0.);
  }
  return xproject(z);
  #elif PROJECTION3 == 6 // UPPERHALF
  vec2 z = halfv(v);
  if(len(z) > 24.) {
    return vec3(1. / 0.);
  }
  nset(z, -1, nget(z, -1) - 1.); // Lower the plane for better perspectize
  return xproject(z);
  #elif PROJECTION3 == 7 // HALFSPHERE
  v = halff(v, -1.);
  if(len(v.xy) > 24.) {
    return vec3(1. / 0.);
  }
  v.y -= 1.;
  return v * .5;
  #elif PROJECTION3 == 8 // BAND
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3((2. / PI) * ((clog(cone + z)) - clog(cone - z)), v.z);
  #elif PROJECTION3 == 9 // CROSS
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  // Sum of angles
  // float o = -.5 * PI;
  // vec2 a = vec2(cos(o), sin(o));
  return vec3((2. / PI) * .5 * (clog(cone + z) - clog(cone - z) + cmul(ci, clog(cone - cmul(ci, z))) + cmul(-ci, clog(cone - cmul(-ci, z)))), v.z);
  #elif PROJECTION3 == 10 // HEART
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(-z.y * z.x + z.x, -.5 * (z.y * z.y - z.x * z.x - 2. * z.y - 0.75), v.z);
  #elif PROJECTION3 == 11 // TEARDROP
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  return vec3(sign(z.x) *
    sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) - (1. - z.y)) / 2.), -(sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) + (1. - z.y)) / 2.) - 0.75), v.z);
  #elif PROJECTION3 == 12 // SQUARE
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
  #elif PROJECTION3 == 13 // RING
  vec2 z = project(v, 1.).xy;
  z = (2. / PI) * ((clog(cone + z)) - clog(cone - z));
  float k = 4.;
  float P = 1.1393;
  return vec3(cexp(TAU * cmul(ci, (z.xy + ci)) / (k * P)), v.z);
  #elif PROJECTION3 == 14 // SINUSOIDAL
  vec2 z = project(v, 1.).xy;
  return vec3(csin(1.5 * z), v.z);
  #elif PROJECTION3 == 15 // SPIRAL
  vec2 z = project(v, 1.).xy;
  z = ((clog(cone + z)) - clog(cone - z));
  z = cmul(z, conei);
  return vec3(cexp(z), 0.);
  #elif PROJECTION3 >= 16 // TRIANGLE
  vec2 z = curvature < 0. ? project(v, 1.).xy : v.xy;
  vec2 w = sc(z, PROJECTION3 - 13);
  // Rotate by PI / 4
  #if PROJECTION3 == 17
  w = cmul(w, cexp(ci * PI / 4.));
  #elif PROJECTION3 == 18
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

#loopN4
vec3 xproject(in vecN v) {
  #if PROJECTION_N == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION_N == 1 // ORTHOGRAPHIC
  return xproject(nmul(nonlast(v), fovN));
  #elif PROJECTION_N == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION_N == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION_N == 4 // JOUKOWSKY
  vecN_1 z = project(v, 1.);
  float r = len(z);
  float nr = 1. / (r * r);
  float k = (_Nf_ - 2.) / (_Nf_ - 1.);
  nset(z, 1, nget(z, 1) * (nr - r) / (r / (_Nf_ - 2.) + nr));
  z = nmul(z, k * (r / (_Nf_ - 2.) + nr));
  return xproject(z);
  #elif PROJECTION_N == 5 // HALF
  return xproject(halfv(v));
  #elif PROJECTION_N == 6 // UPPERHALF
  vecN_1 z = halfv(v);
  nset(z, -1, nget(z, -1) - 1.); // Lower the plane for better perspectize
  for(int i = 1; i < _N_ / 2; i++) {
    float temp = nget(z, -i);
    nset(z, -i, nget(z, i));
    nset(z, i, temp);
  }
  return xproject(z);
  #else
  return xproject(project(v, zoom));
  #endif
}
#endloopN

vec3 inflate(in vec3 point, in vecN pos, in vec3 norm, in float size) {
  // Removing 3d length in perspective computation
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION3 == -1
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif
  vec3 inv = clamp(abs(xproject(pos)), 0.01, 100.);

  return size * SCALING * norm * inv + point;
}
`,Uv=`const vec2 cone = vec2(1., 0);
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
`,$v=`uniform vec3 eye;
uniform float ambient;
uniform float shininess;

vec4 light(vec3 position, vec3 normal, vec4 color) {
  #ifdef LIGHTING
  vec3 eyeDirection = eye - position;
  float distance = length(eyeDirection);
  float attenuation = 1.;//1. / (1. + distance * distance * .005);
  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;
  float diffuse = abs(dot(normal, lightDirection));
  float specular = 0.;
  #if LIGHTING == 0
  // Lambert
  specular = 0.;

  #elif LIGHTING == 1
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, normal);
  specular = pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif LIGHTING == 2
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  specular = pow(abs(dot(normal, halfVector)), shininess);

  #elif LIGHTING == 3
  // Toon
  specular = 0.;
  diffuse = floor(diffuse * 4.) / 4.;

  #elif LIGHTING == 4
  // Oren-Nayar
  float roughness = 0.5;
  float A = 1. - 0.5 * (roughness / (roughness + 0.33));
  float B = 0.45 * (roughness / (roughness + 0.09));
  float theta_i = acos(dot(normal, lightDirection));
  float theta_r = acos(dot(normal, eyeDirection));
  float alpha = max(theta_i, theta_r);
  float beta = min(theta_i, theta_r);
  diffuse = max(0., dot(lightDirection, normal)) * (A + B * max(0., cos(theta_i - theta_r)) * sin(alpha) * tan(beta));
  specular = 0.;

  #elif LIGHTING == 5
  // Fresnel
  float p = 1. - diffuse;
  color.a = clamp(p * p * p, color.a, 1.);
  diffuse = 1. - ambient;
  #endif

  return vec4((ambient + diffuse + specular) * attenuation * color.rgb, color.a);
  #else

  return color;
  #endif
}
`,bp=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Jt=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,o)=>e+o*t)},Bv=(e,n)=>{let t=0;for(let r=0;r<e.length;r++)t+=e[r]*n[r];return t},Ts=(e,n)=>{const t=[];for(let r=0;r<e.length;r++)t[r]=e[r]*n;return t},Ii=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},gl=e=>{for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)e[n][t]=Qv(e[n][t]);return e},Me=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let i=0;i<n[0].length;i++){let o=0;for(let l=0;l<n.length;l++)o+=e[r][l]*n[l][i];t[r][i]=o}}return t},Hv=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let o=0;o<e[0].length;o++)i+=e[r][o]*n[o];t[r]=i}return t},Zp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},pu=e=>{const n=new Array(e.length);for(let t=0;t<e.length;t++)n[t]=new Array(e.length).fill(0),n[t][t]=e[t];return n},Re=e=>{const n=new Array(e).fill(1);return pu(n)},Vv=e=>e.every((n,t)=>n.every((r,i)=>t===i||e[t][i]===0)),Gv=e=>{const n=e[0].length;let t=e.map(s=>s.slice()),r=Re(n),i=1e3;for(;!Vv(t)&&i-- >0;){let s=0,a=1;for(let d=0;d<n;d++)for(let f=0;f<n;f++)d!==f&&Nn(t[d][f])>Nn(t[s][a])&&(s=d,a=f);const v=t[s][s]===t[a][a]?Hi(t[s][a])*$e/4:.5*np(2*t[s][a]/(t[s][s]-t[a][a])),c=Re(n);c[a][a]=c[s][s]=be(v),c[a][s]=c[s][a]=-Fe(v),c[a][s]*=-1,r=Me(r,c),t=Me(Me(Ii(c),t),c)}const o=t.map((s,a)=>Nn(s[a])<1e-8?0:s[a]),l=o.map((s,a)=>[s,a]).sort((s,a)=>a[0]-s[0]).map(s=>s[1]),u=Ii(r);return{values:l.map(s=>o[s]),vectors:l.map(s=>u[s])}},Wv=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...Re(n)[r]]);for(let r=0;r<n;r++){const i=t[r][r];for(let o=r+1;o<n;o++){const l=t[o][r]/i;for(let u=r;u<2*n;u++)t[o][u]-=l*t[r][u]}}for(let r=n-1;r>=0;r--){const i=t[r][r];for(let o=r-1;o>=0;o--){const l=t[o][r]/i;for(let u=0;u<2*n;u++)t[o][u]-=l*t[r][u]}for(let o=n;o<2*n;o++)t[r][o]/=i}return t.map(r=>r.slice(n))},Qv=e=>Nn(e)<1e-9?0:e,Kv=e=>{const n=e.length,t=Re(n),r=Re(n);for(let i=0;i<n;i++){t[i][i]=e[i][i];for(let o=0;o<i;o++)t[i][i]-=r[i][o]**2*t[o][o];for(let o=i+1;o<n;o++){let l=0;for(let u=0;u<i;u++)l+=r[i][u]*r[o][u]*t[u][u];r[o][i]=(e[o][i]-l)/t[i][i]}}return gl(t),gl(r),{L:r,D:t}},ft=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Xv=(e,n,t,r,i=1)=>{const o=i/qc(e/2),l=1/(t-r),u=Re(4);return u[0][0]=o/n,u[1][1]=o,u[2][2]=(r+t)*l,u[3][2]=-1,u[2][3]=2*r*t*l,u[3][3]=0,u},Yv=(e,n,t)=>{if(Nn(e[0]-n[0])<1e-4&&Nn(e[1]-n[1])<1e-4&&Nn(e[2]-n[2])<1e-4)return Re(4);let r=e[0]-n[0],i=e[1]-n[1],o=e[2]-n[2],l=1/j(r*r+i*i+o*o);r*=l,i*=l,o*=l;let u=t[1]*o-t[2]*i,s=t[2]*r-t[0]*o,a=t[0]*i-t[1]*r;l=j(u*u+s*s+a*a),l?(l=1/l,u*=l,s*=l,a*=l):(u=0,s=0,a=0);let v=i*a-o*s,c=o*u-r*a,d=r*s-i*u;l=j(v*v+c*c+d*d),l?(l=1/l,v*=l,c*=l,d*=l):(v=0,c=0,d=0);const f=Re(4);return f[0][0]=u,f[1][0]=v,f[2][0]=r,f[0][1]=s,f[1][1]=c,f[2][1]=i,f[0][2]=a,f[1][2]=d,f[2][2]=o,f[0][3]=-(u*e[0]+s*e[1]+a*e[2]),f[1][3]=-(v*e[0]+c*e[1]+d*e[2]),f[2][3]=-(r*e[0]+i*e[1]+o*e[2]),f},Jv=(e,n)=>n.some((t,r)=>t.some((i,o)=>r===o&&i===0))?Ts(e,1/e[e.length-1]):Ts(e,-1/j(Nn(Bv(Hv(n,e),e)))),e0=(e,n)=>gl(e.map((t,r)=>t.map((i,o)=>i<0?-Zv(-i/10):i===0?-1:-be(n[r][o]*$e/i)))),Yc=e=>{const n=Gv(e);return{"+":n.values.filter(t=>t>0).length,"-":n.values.filter(t=>t<0).length,0:n.values.filter(t=>t===0).length,eigens:n}},Jc=(e,n=[],t=0,r=10)=>{n[t]=n[t]||[];for(let i=0;i<e.length;i++){const o=e.filter((l,u)=>u!==i).map(l=>l.filter((u,s)=>s!==i));n[t].push(Yc(o)),o.length>1&&t+1<r&&Jc(o,n,t+1,r)}return n},n0=e=>{const n=Yc(e),t=n.eigens,r=pu(t.values.map(u=>Hi(u))),i={eigens:t,gram:e,metric:r};if(n["-"]===0&&n[0]===0)return{...i,type:"finite",curvature:1};if(n["-"]===0&&n[0]>0)return{...i,type:"affine",curvature:0};if(n["-"]>1)return{...i,type:"hyperbolic",subtype:"superhyperbolic",level:n["-"],curvature:-1};const o=Jc(e,[],0,3),l=o[0];if(l.every(u=>u["-"]===0&&u[0]===0))return{...i,type:"hyperbolic",subtype:"compact",curvature:-1};if(l.every(u=>u["-"]===0))return{...i,type:"hyperbolic",subtype:"paracompact",curvature:-1};for(let u=1;u<o.length;u++)if(o[u].every(a=>a["-"]===0))return{...i,type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:u+1};return console.log("indefinite",o),{...i,type:"indefinite",curvature:-1}},yl=1,_s=e=>e.map((n,t)=>n.map((r,i)=>t===i&&r===0?yl:r)),t0=(e,n)=>{const t=e.eigens,r=e.metric;if(n===!0){const{L:d,D:f}=Kv(e.gram);let m;if(f.some((y,x)=>isNaN(f[x][x])))console.warn("Can’t cholesky"),m=bv(e,n);else{const y=Me(r,f).map((x,h)=>x.map((p,g)=>h===g?j(p):0));r.forEach((x,h)=>{x[h]===0&&(y[h][h]=yl)}),m=Me(d,y)}if(m){const y=Me(m,_s(r)),x=Wv(y);if(!x.some(h=>h.some(p=>isNaN(p))))return{normals:m,vertices:x}}console.warn("Can’t center")}const i=t.values.slice(),o=t.vectors.slice();if(n===!1){const d=Ue(...i.filter(m=>m>0)),f=i.indexOf(d);[r[f][f],r[1][1]]=[r[1][1],r[f][f]],o.splice(1,0,o.splice(f,1)[0]),i.splice(f,1),i.splice(1,0,d)}i.forEach((d,f)=>{d===0&&(i[f]=.05)});const l=Ii(o),u=pu(i),s=Me(r,u).map((d,f)=>d.map((m,y)=>f===y?j(m):0));r.forEach((d,f)=>{d[f]===0&&(s[f][f]=yl)});const a=s.map((d,f)=>d.map((m,y)=>f===y?m!==0?1/m:1:0)),v=Me(l,s),c=Me(Me(_s(r),a),Ii(l));return{normals:v,vertices:c}},qv=e=>e.sort((n,t)=>{const[r,i]=n,[o,l]=t;return r===0&&i===1?1:o===0&&l===1||r<2&&o>=2?-1:o<2&&r>=2?1:r<2&&o<2?i===l?o-r:i-l:r===o?l-i:o-r}),r0=(e,n)=>{const t=qv(xo(Jt(e),2));if(n.metric.filter((r,i)=>n.metric[i][i]<0).length===1){const r=[...xo(Jt(e-1),2),...xo(Jt(e-1),2).map(([i,o])=>[o,i])].sort((i,o)=>i[0]-o[0]||(i[0]<i[1]?i[1]-o[1]:o[1]-i[1])).map(([i,o])=>[-i,-o]);if(t.length%2){const i=t.pop();t.push(...r,i)}else t.push(...r)}return{combinations:t,maxShift:~~rp(t.length/2)}},i0=(e,[n,t],r,i)=>{const o=Re(r);if(n<0||t<0){const v=-n;n=-t,t=Jt(r).find(d=>i[d][d]<0);const c=.5*e*e;return o[v][v]=1-c,o[t][t]=1+c,o[v][n]=e,o[n][v]=-e,o[n][t]=e,o[t][n]=e,o[v][t]=c,o[t][v]=-c,o}if(i[n][n]*i[t][t]===0)return i[n][n]===0&&(o[t][n]=e),i[t][t]===0&&(o[n][t]=e),o;const l=i[n][n]*i[t][t],s=(l>0?Fe:ep)(e),a=j(1-l*s*s);return o[n][n]=a,o[t][t]=a,o[n][t]=-l*s,o[t][n]=s,o},bv=(e,n)=>{const t=e.gram,r=t.length,i=e.curvature;let o=null;const l=t.every((u,s)=>u.every((a,v)=>s===v||a<=-1));if(n||l){if(o=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const u=(t[0][1]+1)/2;return o[0][0]=j(u-t[0][1]),o[1][0]=-j(u-t[0][1]),o[0][1]=o[1][1]=j((i||1)*u),i===0&&(o[1][1]=.5),o}else if(r===3){const u=t[0][1],s=t[1][2],a=t[0][2],v=(u*u+s*s+a*a-2*u*s*a-1)/(u*u+s*s+a*a-2*u*s-2*u*a-2*s*a+2*u+2*s+2*a-3);return o[0][2]=o[1][2]=o[2][2]=j(i*v),o[2][1]=-j(1-v),o[1][1]=(s-v)/o[2][1],o[0][1]=(a-v)/o[2][1],o[1][0]=-j(1-o[1][1]**2-v),o[0][0]=j(1-o[0][1]**2-v),i===0&&(o[2][2]=.5),o}else if(r===4){const u=t[0][1],s=t[1][2],a=t[2][3],v=t[0][2],c=t[1][3],d=t[0][3],f=(u*u*a*a+s*s*d*d+v*v*c*c-u*u-s*s-a*a-v*v-c*c-d*d+2*u*c*d+2*u*s*v+2*s*a*c+2*a*v*d-2*s*v*c*d-2*u*s*a*d-2*u*a*v*c+1)/(2*(u*u*a+s*s*d+a*a*u+v*v*c+c*c*v+d*d*s-u*u-s*s-a*a-v*v-c*c-d*d-u*s*a-u*s*d-u*a*v-u*a*c-u*a*d-u*v*c-s*a*d-s*v*c-s*v*d-s*c*d-a*v*c-v*c*d+u*s*v+u*c*d+s*a*c+a*v*d+u*s+u*v+u*c+u*d+s*a+s*v+s*c+a*v+a*c+a*d+v*d+c*d-u-s-a-v-c-d+2));return o[0][3]=o[1][3]=o[2][3]=o[3][3]=j(i*f),o[3][2]=-j(1-f),o[2][2]=(a-f)/o[3][2],o[1][2]=(c-f)/o[3][2],o[0][2]=(d-f)/o[3][2],o[2][1]=-j(1-f-o[2][2]**2),o[1][1]=(s-f-o[1][2]*o[2][2])/o[2][1],o[0][1]=(v-f-o[0][2]*o[2][2])/o[2][1],o[1][0]=-j(1-f-o[1][1]**2-o[1][2]**2),o[0][0]=j(1-f-o[0][1]**2-o[0][2]**2),i===0&&(o[3][3]=.5),o}if(t.every((u,s)=>u.every((a,v)=>s===v||a===-1))){const u=[0];for(let s=1;s<r;s++)u[s]=(u[s-1]+1)/(3-u[s-1]);o[0][0]=1,o[1][0]=-1,o[0][1]=j(u[1]),o[1][1]=j(u[1]);for(let s=0;s<r;s++)for(let a=0;a<r;a++)s<2&&a<2||(o[s][a]=a<s-1?0:a===s-1?s*j(u[a]-u[a-1]):a<r-1?j(u[a]-u[a-1]):j(u[a-1]));return o}}},{abs:Nn,cos:be,sin:Fe,tan:qc,cosh:Zv,sinh:ep,acos:o0,acosh:l0,atan:np,atan2:tp,min:Ue,max:zt,round:u0,sqrt:j,sign:Hi,ceil:rp,floor:s0,log:a0,exp:c0,hypot:f0,pow:ip,PI:$e}=Math,xl=$e*2;function*op(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(i=>e[i]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let i=t[r]+1;r<n;r++,i++)t[r]=i}}const xo=(e,n=2)=>Array.from(op(e,n)),bc=e=>String.fromCharCode(97+e),Cs=e=>e.charCodeAt(0)-97;var Zc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(uf,function(){var t=function(){function r(f){return l.appendChild(f.dom),f}function i(f){for(var m=0;m<l.children.length;m++)l.children[m].style.display=m===f?"block":"none";o=f}var o=0,l=document.createElement("div");l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(f){f.preventDefault(),i(++o%l.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,v=r(new t.Panel("FPS","#0ff","#002")),c=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=r(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:l,addPanel:r,showPanel:i,begin:function(){u=(performance||Date).now()},end:function(){a++;var f=(performance||Date).now();if(c.update(f-u,200),f>s+1e3&&(v.update(1e3*a/(f-s),100),s=f,a=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){u=this.end()},domElement:l,setMode:i}};return t.Panel=function(r,i,o){var l=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),v=80*a,c=48*a,d=3*a,f=2*a,m=3*a,y=15*a,x=74*a,h=30*a,p=document.createElement("canvas");p.width=v,p.height=c,p.style.cssText="width:80px;height:48px";var g=p.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=o,g.fillRect(0,0,v,c),g.fillStyle=i,g.fillText(r,d,f),g.fillRect(m,y,x,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m,y,x,h),{dom:p,update:function(w,S){l=Math.min(l,w),u=Math.max(u,w),g.fillStyle=o,g.globalAlpha=1,g.fillRect(0,0,v,y),g.fillStyle=i,g.fillText(s(w)+" "+r+" ("+s(l)+"-"+s(u)+")",d,f),g.drawImage(p,m+a,y,x-a,h,m,y,x-a,h),g.fillRect(m+x-a,y,a,h),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(m+x-a,y,a,s((1-w/S)*h))}}},t})})(Zc);var lp=Zc.exports;const up=sf(lp),sp=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],i=[],o=[],l=[];let u=0;const s=[];for(let a=0;a<=t;a++){const v=[],c=a/t;let d=0;a===0?d=.5/n:a===t&&(d=-.5/n);for(let f=0;f<=n;f++){const m=f/n,y=[-e*be(m*xl)*Fe(c*$e),e*be(c*$e),e*Fe(m*xl)*Fe(c*$e)];i.push(...y);const x=(y[0]**2+y[1]**2+y[2]**2)**-.5;o.push(...y.map(h=>h*x)),l.push(m+d,1-c),v.push(u++)}s.push(v)}for(let a=0;a<t;a++)for(let v=0;v<n;v++){const c=s[a][v+1],d=s[a][v],f=s[a+1][v],m=s[a+1][v+1];a!==0&&r.push(c,d,m),a!==t-1&&r.push(d,f,m)}return{vertices:i,normals:o,uvs:l,indices:r}},ap=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:i=8,segments:o=1}={})=>{const l=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let v=0;const c=[],d=r/2,f=(t-n)/r;for(let m=0;m<=o;m++){const y=[],x=m/o,h=x*(t-n)+n;for(let p=0;p<=i;p++){const g=p/i,w=g*xl,S=Fe(w),I=be(w),N=[h*S,-x*r+d,h*I];u.push(...N);const k=[S,f,I],A=(k[0]**2+k[1]**2+k[2]**2)**-.5;s.push(...k.map(P=>P*A)),a.push(g,1-x),y.push(v++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<o;y++){const x=c[y][m],h=c[y+1][m],p=c[y+1][m+1],g=c[y][m+1];l.push(x,h,g),l.push(h,p,g)}return{vertices:u,normals:s,uvs:a,indices:l}},cp=({segments:e=3}={})=>{const n=[],t=[],r=[],i=[],o=1/e;for(let l=0;l<e+1;l++)for(let u=0;u<l+1;u++)t.push((2*u-l)*o/2,l*o,0),r.push(0,0,1),i.push(o*u,1-o*l);for(let l=1;l<e+1;l++)for(let u=0;u<l;u++){const s=l*(l+1)/2+u,a=l*(l-1)/2+u;if(n.push(s,a,s+1),l<e){const v=(l+1)*(l+2)/2+u;n.push(v+1,s,s+1)}}return{vertices:t,normals:r,uvs:i,indices:n}},fp="dsbßx",dp=e=>e!==""&&e!=="x",Zr=e=>e==="d"||e==="b",ef=e=>e==="s"||e==="b",vp=e=>e==="ß",jr={active:1,inactive:0,dual:"d",snub:"s",holosnub:"ß",dualsnub:"b",custom:.5,activeVoid:"x",void:""},nf=e=>e===0?"inactive":e===1?"active":e==="d"?"dual":e==="s"?"snub":e==="ß"?"holosnub":e==="b"?"dualsnub":e==="x"?"activeVoid":e===""?"void":"custom",pp=(e,n,t,r)=>{const i=[],o=[],l=[];for(let s=0;s<e.ranges.face[1];s++){const a=e.face[s],v=new Array(t).fill(0);for(let c=0;c<a.vertices.length;c++){const d=e.vertex[a.vertices[c]];for(let f=0;f<t;f++)v[f]+=d.vertex[f]}for(let c=0;c<t;c++)v[c]/=a.vertices.length;i.push({vertex:Jv(v,r),word:a.word})}const u=new Map;for(let s=0;s<e.ranges.face[1];s++)for(let a=s+1;a<e.ranges.face[1];a++){const v=e.face[s],c=e.face[a];v.vertices.filter(f=>c.vertices.includes(f)).length>1&&(o.push({start:s,end:a,word:v.word}),u.has(s)||u.set(s,[]),u.has(a)||u.set(a,[]),u.get(s).push(a),u.get(a).push(s))}for(let s=0;s<e.ranges.vertex[1];s++){const a=[];for(let d=0;d<e.ranges.face[1];d++)e.face[d].vertices.includes(s)&&a.push(d);const v=[a.shift()];let c=!1;for(;a.length>1;){const d=v[v.length-1],f=u.get(d);if(!f){c=!0;break}const m=a.find(y=>f.includes(y));if(!m){c=!0;break}a.splice(a.indexOf(m),1),v.push(m)}c||(v.push(a[0]),l.push({vertices:v,word:e.vertex[s].word}))}return{vertex:i,edge:o,face:l,ranges:{vertex:[0,i.length],edge:[0,o.length],face:[0,l.length]}}},hp=(e,n,t,r)=>{const i=new Map,o=[],l=[],u=[],s=n.map((c,d)=>ef(c)?bc(d):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const d=e.vertex[c];d.word.replace(a,"").length%2===1?(d.vertex=NaN,i.set(d.i,[])):o.push(d)}for(let c=0;c<e.ranges.edge[1];c++)if(i.has(e.edge[c].start)){const d=i.get(e.edge[c].start);d.push(e.edge[c].end),d.word||(d.word=e.edge[c].word),i.get(e.edge[c].start).push(e.edge[c].end)}else if(i.has(e.edge[c].end)){const d=i.get(e.edge[c].end);d.push(e.edge[c].start),d.word||(d.word=e.edge[c].word),i.get(e.edge[c].end).push(e.edge[c].start)}else l.push(e.edge[c]);const v=Array.from(i.keys());for(let c=0;c<i.size;c++){const d=v[c],f=i.get(d),m=i.get(d);for(let y=0;y<f.length;y++)for(let x=0;x<m.length;x++)f[y]<=m[x]||l.push({start:f[y],end:m[x],word:m.word})}for(let c=0;c<l.length;c++){const d=l[c];for(let f=0;f<2;f++){const m=f?"start":"end",y=d[m];for(let x=0;x<i.size&&!(v[x]>y);x++)d[m]--}}for(let c=0;c<e.ranges.face[1];c++){const d=e.face[c],f=[];for(let m=0;m<d.vertices.length;m++)i.has(d.vertices[m])||f.push(d.vertices[m]);u.push({...d,vertices:f})}for(let c=0;c<i.size;c++){const d=v[c],f=i.get(d);u.push({vertices:f,word:f.word})}for(let c=0;c<u.length;c++){const d=u[c];for(let f=0;f<d.vertices.length;f++){const m=d.vertices[f];for(let y=0;y<i.size&&!(v[y]>m);y++)d.vertices[f]--}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},mp=(e,n,t,r)=>{const i=[new Map,new Map],o=[],l=[],u=[],s=n.map((c,d)=>c==="ß"?bc(d):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const d=e.vertex[c];i[d.word.replace(a,"").length%2].set(d.i,[])}o.push(...e.vertex);const v=[new Map,new Map];for(let c=0;c<2;c++){for(let f=0;f<e.ranges.edge[1];f++)if(i[c].has(e.edge[f].start)){v[c].has(e.edge[f].start)||v[c].set(e.edge[f].start,[]);const m=i[c].get(e.edge[f].start);m.push(e.edge[f].end),m.word||(m.word=e.edge[f].word),v[c].get(e.edge[f].start).push(e.edge[f].end)}else if(i[c].has(e.edge[f].end)){v[c].has(e.edge[f].end)||v[c].set(e.edge[f].end,[]);const m=i[c].get(e.edge[f].end);m.push(e.edge[f].start),m.word||(m.word=e.edge[f].word),v[c].get(e.edge[f].end).push(e.edge[f].start)}else l.push(e.edge[f]);const d=Array.from(v[c].keys());for(let f=0;f<v[c].size;f++){const m=d[f],y=v[c].get(m),x=i[c].get(m);for(let h=0;h<y.length;h++)for(let p=0;p<x.length;p++)y[h]<=x[p]||l.push({start:y[h],end:x[p],word:x.word})}}for(let c=0;c<2;c++){const d=Array.from(v[c].keys());for(let f=0;f<e.ranges.face[1];f++){const m=e.face[f],y=[];for(let x=0;x<m.vertices.length;x++)i[c].has(m.vertices[x])||y.push(m.vertices[x]);u.push({...m,vertices:y})}for(let f=0;f<v[c].size;f++){const m=d[f],y=i[c].get(m);u.push({vertices:y,word:y.word})}}return{vertex:o,edge:l,face:u,ranges:{vertex:[0,o.length],edge:[0,l.length],face:[0,u.length]}}},gp=`#version 300 es
precision highp float;

#include config

#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  float b = min(1.0f, a * 10.0f) + 0.01f;
  float c = 1.0f - z * 0.9f;
  return clamp(b * b * b * 1e8f * c * c * c, 1e-2f, 3e3f);
}

#else
out vec4 outColor;
#endif

#ifdef LIGHTING
#ifndef GOURAUD
#include lighting
in vec3 vNormal;
in vec3 vPosition;

flat
#endif
#endif 
in vec4 vColor;

void main() {

  #if !defined(LIGHTING) || defined(GOURAUD)
  vec4 color = vColor;
  #else
  vec4 color = light(vPosition, vNormal, vColor);
  #endif

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
`,yp=`#version 300 es
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

#ifdef LIGHTING
#ifdef GOURAUD
#include lighting
#else
out vec3 vPosition;
out vec3 vNormal;

flat 
#endif
#endif
out vec4 vColor;

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

  proj = inflate(proj, pos, norm, thickness);

  gl_Position = viewProject(proj);

  #ifndef LIGHTING
  vColor = vec4(color, opacity);
  #else

  #ifdef GOURAUD
  vColor = light(proj, norm, vec4(color, opacity));
  #else 
  vColor = vec4(color, opacity);

  vPosition = proj;
  vNormal = norm;
  #endif
  #endif
}
`,xp=`#version 300 es
precision highp float;

#include config

#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  float b = min(1.0f, a * 10.0f) + 0.01f;
  float c = 1.0f - z * 0.9f;
  return clamp(b * b * b * 1e8f * c * c * c, 1e-2f, 3e3f);
}

#else
out vec4 outColor;
#endif

#ifdef LIGHTING
#ifndef GOURAUD
#include lighting
in vec3 vNormal;
in vec3 vPosition;

flat
#endif
#endif 
in vec4 vColor;

void main() {

  #if !defined(LIGHTING) || defined(GOURAUD)
  vec4 color = vColor;
  #else
  vec4 color = light(vPosition, vNormal, vColor);
  #endif

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
`,wp=`#version 300 es
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

#ifdef LIGHTING
#ifdef GOURAUD
#include lighting
#else
out vec3 vPosition;
out vec3 vNormal;

flat 
#endif
#endif
out vec4 vColor;

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

  #ifndef LIGHTING
  vColor = vec4(color, opacity);
  #else

  #ifdef GOURAUD
  vColor = light(proj, norm, vec4(color, opacity));
  #else 
  vColor = vec4(color, opacity);

  vPosition = proj;
  vNormal = norm;
  #endif
  #endif
}
`,Sp=`#version 300 es
precision highp float;

#include config

#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  float b = min(1.0f, a * 10.0f) + 0.01f;
  float c = 1.0f - z * 0.9f;
  return clamp(b * b * b * 1e8f * c * c * c, 1e-2f, 3e3f);
}

#else
out vec4 outColor;
#endif

#ifdef LIGHTING
#ifndef GOURAUD
#include lighting
in vec3 vNormal;
in vec3 vPosition;

flat
#endif
#endif 
in vec4 vColor;

void main() {

  #if !defined(LIGHTING) || defined(GOURAUD)
  vec4 color = vColor;
  #else
  vec4 color = light(vPosition, vNormal, vColor);
  #endif

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
`,Ep=`#version 300 es
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

#ifdef LIGHTING
#ifdef GOURAUD
#include lighting
#else
out vec3 vPosition;
out vec3 vNormal;

flat 
#endif
#endif
out vec4 vColor;

#include project

void main() {
  vecN pos = multiplyMatrix(matrix, adapt(position));

  if(segments > 1.f) {
    // Normalization is done mainly to remove OOD points
    pos = xnormalize(pos);
  }

  vec3 proj = xproject(pos);
  vec3 norm = normal;
  proj = inflate(proj, pos, normal, thickness);

  gl_Position = viewProject(proj);

  #ifndef LIGHTING
  vColor = vec4(color, opacity);
  #else

  #ifdef GOURAUD
  vColor = light(proj, norm, vec4(color, opacity));
  #else 
  vColor = vec4(color, opacity);

  vPosition = proj;
  vNormal = norm;
  #endif
  #endif
}
`,wo={vertex:()=>sp(),edge:e=>ap({segments:e}),face:e=>cp({segments:e})};function Np(e){return{meshes:["vertex","edge","face"],...No(e,"vertex",Ep,Sp,wo.vertex,1024,e.dimensions,e.showVertices),...No(e,"edge",yp,gp,wo.edge,1024,e.dimensions,e.showEdges,["position","target"]),...No(e,"face",wp,xp,wo.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1,r=null){for(let i=0;i<this.meshes.length;i++){const o=this.meshes[i],l=this[o];if(!t){l.uniforms.curvature.update(n.spaceType.curvature),l.uniforms.metric.update(ft(n.spaceType.metric)),l.uniforms.matrix.update(ft(n.matrix));for(let u=4;u<=n.dimensions;u++)l.uniforms[`fov${u}`].update(1/qc($e*n[`fov${u}`]*.5/180));l.uniforms.segments.update(n.spaceType.curvature&&n.curve?n.segments:1),o==="vertex"?l.uniforms.thickness.update(n.vertexThickness):o==="edge"&&l.uniforms.thickness.update(n.edgeThickness),l.uniforms.opacity.update(Ye[n.ambiance].opacity[o]),l.uniforms.ambient.update(Ye[n.ambiance].ambient[o]),l.uniforms.shininess.update(Ye[n.ambiance].shininess[o])}l.uniforms.viewProjection.update(n.camera.viewProjection),l.uniforms.zoom.update(t?r:n.zoom),Ye[n.ambiance].lighting&&l.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r,i,o=null){const l=this[t];o=o||i;const{dimensions:u}=n,s=Ye[n.ambiance],[a,v]=r;let c=a,d=v;if(t==="face"){let y=0;for(let x=0;x<a;x++){const h=o[x].vertices.length;y+=h<3?0:h===3?1:h}c=y;for(let x=a;x<v;x++){const h=o[x].vertices.length;y+=h<3?0:h===3?1:h}d=y}l.instances<d&&l.extendAttributes(d),l.count=d;const f=u>4?9:u;let m=c;for(let y=a;y<v;y++){let x=[];const h=o[y];if(t==="vertex")x.push({...h,position:h.vertex,type:t});else if(t==="edge")x.push({...h,position:i[h.start].vertex,target:i[h.end].vertex,type:t});else{if(h.vertices.length<3)continue;if(h.vertices.length===3)x.push({...h,position:i[h.vertices[0]].vertex,target:i[h.vertices[1]].vertex,center:i[h.vertices[2]].vertex,parity:0});else{const p=new Array(h.vertices.length);for(let w=0;w<h.vertices.length;w++)p[w]=i[h.vertices[w]].vertex;const g=new Array(u).fill(0);for(let w=0;w<p.length;w++){const S=p[w];for(let I=0;I<u;I++)g[I]+=S[I]}for(let w=0;w<u;w++)g[w]/=p.length;for(let w=0;w<p.length;w++){const S={...h,position:p[w],target:p[(w+1)%p.length],center:g,parity:w%2};h.word.length%2===(n.spaceType.curvature>0?0:1)&&([S.position,S.target]=[S.target,S.position]),x.push(S)}}}for(let p=0;p<x.length;p++){const g=x[p];for(let S=0;S<u;S++)for(let I=0;I<l.varying.length;I++){const N=l.varying[I];l.attributes[N].data[m*f+S]=g[N][S]}const w=s.color(g,t,n);l.attributes.color.data[m*3+0]=w[0],l.attributes.color.data[m*3+1]=w[1],l.attributes.color.data[m*3+2]=w[2],m++}for(let p=0;p<l.varying.length;p++){const g=l.varying[p];l.attributes[g].update(c,d)}l.attributes.color.update(c,d)}},preprocess(n,t){return n.mirrors.some(r=>ef(r))&&(t=hp(t,n.mirrors,n.dimensions,n.spaceType.metric)),n.mirrors.some(r=>vp(r))&&(t=mp(t,n.mirrors,n.dimensions,n.spaceType.metric)),n.mirrors.some(r=>Zr(r))&&(t=pp(t,n.mirrors,n.dimensions,n.spaceType.metric)),t},plot(n,t){let r=n.face,i=t;t.face[1]===n.face.length&&n.partial&&(r=r.concat(n.partial),i={...t,face:[t.face[0],t.face[1]+n.partial.length]});const o={vertex:n.vertex,edge:n.edge,face:r,ranges:i},{vertex:l,edge:u,face:s,ranges:a}=this.preprocess(n,o);for(let v=0;v<this.meshes.length;v++){const c=this.meshes[v];this[c].visible&&this.plotType(n,c,a[c],l,c!=="vertex"?c==="face"?s:u:null)}}}}const kp=`#version 300 es
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
`,Ip=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Tp=`#version 300 es
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
`,_p=`#version 300 es

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
  vec4 sum = texture(screen, uv) * 4.0f;
  sum += texture(screen, uv - halfpixel);
  sum += texture(screen, uv + halfpixel);
  sum += texture(screen, uv + vec2(halfpixel.x, -halfpixel.y));
  sum += texture(screen, uv - vec2(halfpixel.x, -halfpixel.y));
  fragColor = sum / 8.0f;
}
`,Rp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Op=`#version 300 es
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
`,Pp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,zp=`#version 300 es
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
`,Dp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function Mp(e){return{...Mt(e,"oit",Pp,Op,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Mt(e,"down",Rp,Cp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Mt(e,"up",Dp,zp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Mt(e,"afterImage",Ip,kp,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Mt(e,"bloom",_p,Tp,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Ap(e){const{gl:n}=e,t=Ye[e.ambiance],r=e.msaa?Ue(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),ko(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),ko(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),ko(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=un(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=un(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=un(e,n.RGBA8),e.textures.afterImageScreen=un(e,n.RGBA8),e.textures.afterImageOutScreen=un(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let i=0;i<e.textures.kawase.length;i++)n.deleteTexture(e.textures.kawase[i].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let i=0;i<t.glow.steps;i++)e.textures.kawase[i]=un(e,n.RGBA8,t.glow.pow**-i);e.textures.blur=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const tf=window.location.search.includes("stats");let ei;tf&&(ei=new up,ei.dom.id="stats",document.body.appendChild(ei.dom));const d0=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:$e/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=Ue(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]];const v=Yv(this.eye,[0,0,0],[0,1,0]),c=Xv(this.fov,a,.01,1e3,this.zoom);this.viewProjection=ft(Me(c,v))}};r.update();const i=Mp(e),o=Np(e),l={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:o,passes:i,rb:l,fb:u,textures:{}}},v0=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},p0=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType.type==="finite"?"S":e.spaceType.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},h0=(e,n=null)=>{e.camera.fov=e.fov3?$e*e.fov3/180:1,e.camera.position[2]=n===null?-e.zoom:-n,e.camera.update(),e.meshes.updateUniforms(e,!0,n)},m0=e=>{const n=Ye[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},Fp=e=>{tf&&ei.update();const{gl:n}=e,t=e.msaa?Ue(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Ye[e.ambiance];jp(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Ap(e),e.camera.update(),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),r.opacity.vertex===1&&e.meshes.vertex.render(e),r.opacity.edge===1&&e.meshes.edge.render(e),r.opacity.face===1&&e.meshes.face.render(e),(r.opacity.vertex<1||r.opacity.edge<1||r.opacity.face<1)&&(r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),r.opacity.vertex<1&&e.meshes.vertex.render(e),r.opacity.edge<1&&e.meshes.edge.render(e),r.opacity.face<1&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),r.opacity.vertex<1&&e.meshes.vertex.render(e),r.opacity.edge<1&&e.meshes.edge.render(e),r.opacity.face<1&&e.meshes.face.render(e)));const i=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let o=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?o=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<r.glow.steps;l++){const u=l===0?o:e.textures.kawase[l-1],s=e.textures.kawase[l];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=r.glow.steps-1;l>=0;l--){const u=e.textures.kawase[l],s=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=Fp;const Lp={globals:Av,dimensions:Fv,project:jv,helpers:Lv,complex:Uv,ease:Mv,lighting:$v},So=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),Ee=(e,n,t)=>{let r,i,o;if(n===0)r=i=o=t;else{const l=t<.5?t*(1+n):t+n-t*n,u=2*t-l;r=So(u,l,e+1/3),i=So(u,l,e),o=So(u,l,e-1/3)}return[r,i,o]},jp=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},Eo=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`).replace(/\bfovN\b/g,`fov${n}`).replace(/\bvecN_1\b/g,`vec${n-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${n}`).replace(/\b_Nf_\b/g,`${n}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${n}`),Up=(e,n)=>Eo(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(t,r,i)=>{const o=[];for(let l=r;l<=n;l++)o.push(Eo(i.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(u,s,a,v,c)=>s===`${l}`?Eo(a,l):c||""),l));return o.join(`
`)}),n),Rs=(e,n,t,r)=>{var u;const i=Ye[e.ambiance];let o="";i.lighting[r]&&(o+=`#define LIGHTING ${Wp.indexOf(i.lighting[r])}
`);const l=e.easing==="auto"?((u=e.spaceType)==null?void 0:u.type)==="hyperbolic"&&e.projection4!=="inverted"?"quintic":"linear":e.easing;o+=`#define DIMENSIONS ${e.dimensions}
`;for(let s=3;s<=e.dimensions;s++)o+=`#define PROJECTION${s} ${Vp.indexOf(e[`projection${s}`])-1}
`;return o+=`#define EASING ${Gp.indexOf(l)}
`,i.opacity[r]<1&&i.transparency==="oit"&&(o+=`#define OIT
`),i.gouraud[r]&&(o+=`#define GOURAUD
`),Object.entries({...Lp,config:o}).forEach(([s,a])=>{n=n.replace(`#include ${s}`,a),t=t.replace(`#include ${s}`,a)}),[n,t].map(s=>Up(s,e.dimensions))},Ur=(e,n,t,r,i)=>{if(e.gl.shaderSource(i,r),e.gl.compileShader(i),!e.gl.getShaderParameter(i,e.gl.COMPILE_STATUS)){const l=e.gl.getShaderInfoLog(i);return console.error(`An error occurred compiling the ${n}->${t} shader: ${l}`,{shaderSource:r}),l}},Os=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const o=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${o}`),o}},rf=(e,n,t,r,i=[])=>{const{gl:o}=e,l=o.createProgram(),u=o.createShader(o.VERTEX_SHADER),s=o.createShader(o.FRAGMENT_SHADER);if(Ur(e,n,"vertex",t,u)||Ur(e,n,"fragment",r,s)||(o.attachShader(l,u),o.attachShader(l,s),Os(e,n,l)))return;const a={program:l,vertexShader:u,fragmentShader:s,uniformsDef:i,recompile(v,c,d,f=null){Ur(v,n,"vertex",c,this.vertexShader)||Ur(v,n,"fragment",d,this.fragmentShader)||Os(v,n,this.program)||(f&&(this.uniformsDef=f),this.bindUniforms(v))},bindUniforms(v){this.uniforms={},this.uniformsDef.forEach(({name:c,type:d,value:f})=>{this.uniforms[c]=$p(v,this.program,c,d),this.uniforms[c].update(f)})}};return a.bindUniforms(e),a},Dt=(e,n,t,r,i,o=null,l=null)=>{const{gl:u}=e;l=l||u.FLOAT;const s=l===u.FLOAT?4:2,a={name:t,mesh:n,indices:of,instances:o,data:i,size:r,type:l,update(v=null,c=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),v===null&&c===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,v*this.size*s,this.data,v*this.size,(c-v)*this.size)},extend(v,c,d=!1){if(u.bindVertexArray(this.mesh.vao),this.size=v,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const f=v>4?3:1;this.name==="target"&&(this.location=v>4?6:4),this.name==="center"&&(this.location=v>4?9:5);for(let m=0;m<f;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<f;m++)u.vertexAttribPointer(this.location+m,v/f,this.type,!1,v*s,v/f*m*s);if(this.instances)for(let m=0;m<f;m++)u.vertexAttribDivisor(this.location+m,this.instances);c&&(d&&c.length>=this.data.length&&c.set(this.data),this.data=c),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const v=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,v),v}};return a.buffer=u.createBuffer(),a.extend(r),a},of=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:i,vao:n,indices:t,count:t.length,update(o){r.bindVertexArray(this.vao),this.indices=o,this.count=o.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,o,r.STATIC_DRAW)}}},$p=(e,n,t,r)=>{const{gl:i}=e;return{program:n,update(l){if(i.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=i.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&i.uniform4fv(a,l[s][0]),u-4===1){const v=i.getUniformLocation(n,`${t}.c${s+1}.u`);v!==null&&i.uniform1f(v,l[s][1])}else if(u-4>1){const v=i.getUniformLocation(n,`${t}.c${s+1}.u`);if(v!==null&&i[`uniform${Ue(u-4,4)}fv`](v,l[s][1]),u-8===1){const c=i.getUniformLocation(n,`${t}.c${s+1}.t`);c!==null&&i.uniform1f(c,l[s][2])}}}else{const s=i.getUniformLocation(n,t);s!==null&&i[`uniformMatrix${r.slice(1)}`](s,!1,l)}}else{const u=i.getUniformLocation(n,t);u!==null&&i[`uniform${r}`](u,l)}},get(){i.useProgram(this.program);const l=i.getUniformLocation(n,t);if(l!==null)return i.getUniform(this.program,l)}}},un=(e,n,t=null)=>{const{gl:r}=e,i=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,o=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,l=r.createTexture();return r.bindTexture(r.TEXTURE_2D,l),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,i,o),{texture:l,width:i,height:o}},Mt=(e,n,t,r,i=[])=>{const o={name:n,vertex:t,fragment:r,...rf(e,n,t,r,i),recompileProgram(l){this.recompile(l,this.vertex,this.fragment,i)}};return{[n]:o}},No=(e,n,t,r,i,o,l,u=!0,s=["position"])=>{const{gl:a}=e,v=i(e.curve?e.segments:1),c=f=>[{name:"viewProjection",type:"m4fv",value:ft(Re(4))},{name:"matrix",type:`m${f.dimensions}fv`,value:ft(f.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${f.dimensions}fv`,value:ft(Re(f.dimensions))},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},{name:"segments",type:"1f",value:f.curve?f.segments:1},{name:"opacity",type:"1f",value:0},{name:"ambient",type:"1f",value:0},{name:"shininess",type:"1f",value:0},...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[],...Jt(4,f.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:f[`fov${m}`]}))];l=l>4?9:l;const d={attributes:{},varying:s,vertex:t,type:n,fragment:r,...rf(e,n,...Rs(e,t,r,n),c(e)),recompileProgram(f){const[m,y]=Rs(f,this.vertex,this.fragment,this.type);this.recompile(f,m,y,c(f))},changeArity(f){f=f>4?9:f,this.arity!==f&&(this.arity=f,s.forEach(m=>{this.attributes[m].extend(f,new Float32Array(this.instances*f),!1)}))},extendAttributes(f){this.instances=f,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(f*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(f*3),!0)},updateGeometry(f){const m=i(f.spaceType.curvature&&f.curve?f.segments:1);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(f){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return d.visible=u,d.vao=a.createVertexArray(),d.indices=of(e,d.vao,new Uint16Array(v.indices)),d.attributes.vertex=Dt(e,d,"vertex",3,new Float32Array(v.vertices)),d.attributes.uv=Dt(e,d,"uv",2,new Float32Array(v.uvs)),d.attributes.normal=Dt(e,d,"normal",3,new Float32Array(v.normals)),d.attributes.color=Dt(e,d,"color",3,new Float32Array(o*3),1),s.forEach(f=>{d.attributes[f]=Dt(e,d,f,l,new Float32Array(o*l),1)}),d.type=n,d.arity=l,d.instances=o,d.count=0,{[n]:d}},ko=(e,n,t,r)=>{const{gl:i}=e;i.bindRenderbuffer(i.RENDERBUFFER,n),r?i.renderbufferStorageMultisample(i.RENDERBUFFER,r,t,i.drawingBufferWidth,i.drawingBufferHeight):i.renderbufferStorage(i.RENDERBUFFER,t,i.drawingBufferWidth,i.drawingBufferHeight),i.bindRenderbuffer(i.RENDERBUFFER,null)},Bp=document.createElement("canvas"),Ps=Bp.getContext("webgl2"),Hp=Ps.getParameter(Ps.MAX_SAMPLES),g0="xyzwvutsrqponmlkjihgfedcba",Vp=["perspective","stereographic","orthographic","klein","inverted","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Gp=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],y0=["toddcoxeter","knuthbendix","fundamental"],Wp=["lambert","phong","blinn-phong","toon","oren-nayar","fresnel"],$r=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Qp={background:[0,0,0,1],glow:!1,lighting:{vertex:"lambert",edge:"lambert",face:"lambert"},gouraud:{vertex:!1,edge:!1,face:!0},opacity:{vertex:1,edge:1,face:.2},shininess:{vertex:32,edge:32,face:32},ambient:{vertex:.2,edge:.2,face:.2},transparency:"oit",color:({word:e})=>Ee(e.length*.03%1,.75,.7)},Ye=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},lighting:{vertex:!1,edge:!1,face:!1},opacity:{vertex:1,edge:1,face:.025},transparency:"blend",color:({word:e})=>Ee(e.length*.17%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},lighting:{vertex:"lambert",edge:"lambert",face:"fresnel"},opacity:{vertex:1,edge:1,face:.025},transparency:"blend",color:({word:e})=>Ee(...$r[e.length%$r.length])},synthwave:{background:[...Ee(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},lighting:{vertex:!1,edge:!1,face:!1},opacity:{vertex:1,edge:1,face:.15},afterImage:.7,transparency:"blend",color:({word:e})=>Ee((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],lighting:{vertex:"blinn-phong",edge:"blinn-phong",face:"fresnel"},gouraud:{vertex:!1,edge:!1,face:!0},opacity:{vertex:1,edge:1,face:.1},transparency:"oit",color:({word:e})=>Ee(e.length*.03%1,1,.8)},shape:{background:[1,1,1,1],lighting:{vertex:"lambert",edge:"lambert",face:"fresnel"},opacity:{vertex:1,edge:1,face:.2},transparency:"oit",color:({word:e,len:n,vertices:t},r)=>r==="face"?Ee(((n||t.length)-2)*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],lighting:{vertex:"toon",edge:"toon",face:"toon"},opacity:{vertex:1,edge:1,face:.6},transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const i=e.length?Cs(e[e.length-1])/t:0;return Ee(i%1,1,n==="face"?.6:r?.05:.8)}},arlequin:{background:[...Ee(240/360,.23,.09),1],lighting:{vertex:"lambert",edge:"lambert",face:"lambert"},opacity:{vertex:1,edge:1,face:.6},transparency:"oit",color:({word:e,parity:n},t,{dimensions:r,showFaces:i})=>{const o=e.split("").map(u=>Cs(u)).reduce((u,s)=>u+s,0),l=[...$r[o%$r.length]];return t==="face"&&n&&(l[2]*=.5),Ee(...l)}},pure:{background:[0,0,0,1],lighting:{vertex:"lambert",edge:"lambert",face:"lambert"},opacity:{vertex:1,edge:1,face:1},gouraud:{vertex:!1,edge:!1,face:!1},color:({word:e})=>Ee(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:{vertex:!1,edge:!1,face:!1},opacity:{vertex:1,edge:1,face:1},color:({word:e},n,{dimensions:t,showFaces:r})=>Ee(e.length*.06%1,1,n==="face"?.6:r?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],lighting:{vertex:!1,edge:!1,face:!1},opacity:{vertex:1,edge:1,face:1},color:({word:e},n)=>n==="face"?new Array(3).fill(1-ip(.9,e.length+1)):[0,0,0]}}).map(([e,n])=>[e,{...Qp,...n}])),zs={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"toddcoxeter",controls:"space",ambiance:"neon",centered:!1,zoom:1.5,msaa:window.devicePixelRatio<=1,msaaSamples:Hp,subsampling:window.devicePixelRatio},Kp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((i,o)=>r===o?1:r===o+1||r+1===o?3:2));for(let t=0;t<Ue(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Ue(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Ue(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},x0=(e,n=[],t)=>{const r={...e},i=[];Object.entries(r).forEach(([o,l])=>{typeof zs[o]=="number"||o.startsWith("fov")?(l===""||isNaN(l))&&(delete r[o],i.push(o)):Array.isArray(zs[o])&&(Array.isArray(l[0])?l.find(u=>u.find(s=>l===""||o!=="coxeter"&&isNaN(s)))&&(delete r[o],i.push(o)):l.find(u=>l===""||isNaN(u)&&!(o==="mirrors"&&fp.includes(u)))&&(delete r[o],i.push(o)))}),i.includes("coxeter")||Kp(r),(r.matrix.length!==r.dimensions||r.matrix.some(o=>o.length!==r.dimensions))&&(r.matrix=Re(r.dimensions));for(let o=3;o<=9;o++)o<=r.dimensions&&!r[`fov${o}`]&&!i.includes(`fov${o}`)&&(r[`fov${o}`]=90),o<=r.dimensions&&!r[`projection${o}`]&&!i.includes(`projection${o}`)&&(r[`projection${o}`]="perspective"),o>r.dimensions&&`fov${o}`in r&&delete r[`fov${o}`],o>r.dimensions&&`projection${o}`in r&&delete r[`projection${o}`];if(t&&n.includes("dimensions")){const o=Hi(t.dimensions-r.dimensions);for(let l=4;l<=r.dimensions;l++)r[`projection${l}`]=t[`projection${l+o}`];r.dimensions!==3&&(r.projection3="perspective"),r.dimensions===4&&t.dimensions===3&&t.projection3==="perspective"&&(r.projection4="stereographic")}return{params:r,badParams:i}},Xp=(e,n,t,r,i)=>{let o=!0,l=0,u=1;if(i&&["∞","inf","Infinity"].includes(e))e="∞",l=0;else if(i&&e.endsWith("i")){const s=e.slice(0,-1);l=-(s===""?1:parseInt(s)),e=`${l===-1?"":-l}i`}else if(e.includes("/")){const[s,a]=e.split("/");l=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${l}`:e=`${l}/${u}`}else l=e===""?"":parseInt(r)===parseFloat(r)?parseInt(e):parseFloat(e);return o=!(i&&l===1||l===""||isNaN(l)||l<n||l>t||r%1===0&&l%r!==0||isNaN(u)||u===""||u<n||u>t||r%1===0&&u%r!==0),{valid:o,raw:e,value:l,fraction:u}};function Yp({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:o,coxeter:l,fraction:u,fractionName:s,toggler:a,togglerName:v,onChange:c,...d}){l&&(t=-1/0);const f=K.useCallback(()=>o<0&&l?`${o===-1?"":-o}i`:o===0&&l?"∞":s&&u>1?`${o}/${u}`:`${o}`,[l,u,s,o]),[m,y]=K.useState(f);K.useEffect(()=>{y(f())},[l,f,u,s,o]);const[x,h]=K.useState(!0),p=K.useCallback(N=>{const k=Xp(N,t,r,i,l);y(k.raw),h(k.valid),k.valid&&(c(e,k.value),s&&c(s,k.fraction))},[l,s,r,t,e,c,i]),g=K.useCallback(()=>{if(!x){p(l?"3":`${t}`);return}if(l){if(m==="2"){p("∞");return}if(m==="∞"){p("i");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=(N===""?1:parseInt(N))+1;p(`${k}i`);return}}if(m!==`${t}`)if(m.includes("/"))p((parseInt(m.split("/")[0])-i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))-i;i>0&&i<1?p(N.toFixed(i.toString().split(".")[1].length)):p(N.toString())}},[l,t,m,i,p,x]),w=K.useCallback(()=>{if(!x){p(l?"3":`${t}`);return}if(l){if(m==="∞"){p("2");return}if(m==="i"){p("∞");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=parseInt(N)-1;k===1&&(k=""),p(`${k}i`);return}}if(m!==`${r}`)if(m.includes("/"))p((parseInt(m.split("/")[0])+i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))+i;i>0&&i<1?p(N.toFixed(i.toString().split(".")[1].length)):p(N.toString())}},[l,r,t,m,i,p,x]),S=N=>{const k=N.target.value;p(k)},I=N=>{c(N.target.name,N.target.checked)};return T.jsxs("label",{className:`number ${x?"valid":"invalid"}`,children:[n&&T.jsx("span",{className:"number-label",children:n}),v&&T.jsx("input",{type:"checkbox",name:v,checked:a,onChange:I}),(!v||a)&&T.jsxs("div",{className:"number-control",children:[T.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:S,...d}),T.jsx("button",{className:"plusminus minus",onClick:g,tabIndex:-1,children:"−"}),T.jsx("button",{className:"plusminus plus",onClick:w,tabIndex:-1,children:"+"})]})]})}function Jp({i:e,j:n,value:t,stellation:r,onChange:i}){return T.jsx("div",{className:"coxeter-value",children:T.jsx(Yp,{name:`coxeter-${e}-${n}`,value:t,onChange:i,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Ds({type:e}){return T.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:T.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const Ut=6,Dn=14,$t={active:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"})]}),inactive:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"})}),dual:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"}),T.jsx("path",{d:"M 16 2 L 16 10"}),T.jsx("path",{d:"M 16 10 L 16 22",stroke:"black"}),T.jsx("path",{d:"M 16 22 L 16 30"})]}),snub:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Dn})}),dualsnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn-4}),T.jsx("path",{d:"M 16 0 L 16 32"})]}),holosnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("circle",{cx:"16",cy:"16",r:Ut})]}),custom:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Dn}),T.jsx("path",{d:"M 6 6 L 26 26"}),T.jsx("path",{d:"M 6 26 L 26 6"})]}),void:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M 10 10 L 22 22"}),T.jsx("path",{d:"M 10 22 L 22 10"})]})};function qp({index:e,value:n,onChange:t}){const r=K.useRef(null),[i,o]=K.useState(!1),l=nf(n),u=()=>{const c=jr[l==="inactive"?"active":"inactive"];t(e,c)},s=v=>{const c=Object.keys($t),d=c.indexOf(l),f=c[(c.length+d+Hi(v.deltaY))%c.length],m=jr[f];t(e,m)},a=v=>{v.preventDefault(),o(!i)};return K.useEffect(()=>{const v=c=>{r.current.contains(c.target)||o(!1)};if(i)return window.addEventListener("mouseup",v),()=>{window.removeEventListener("mouseup",v)}},[i]),T.jsxs("div",{className:"coxeter-node",title:l,ref:r,children:[T.jsx("svg",{className:`coxeter-graphic ${l}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:$t[l]}),l==="custom"&&T.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:v=>t(e,v.target.value)}),i&&T.jsx("div",{className:"coxeter-node-menu",children:Object.keys($t).filter(v=>v!==l).map(v=>T.jsx("div",{title:v,onClick:()=>{t(e,jr[v]),o(!1)},children:T.jsx("svg",{className:`coxeter-graphic ${v}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,jr[v]),o(!1)},children:$t[v]})},v))})]})}const Ms=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid",w0=K.memo(function({dimensions:n,coxeter:t,mirrors:r,stellation:i,extended:o,onChange:l}){const[u,s]=K.useState(1),a=K.useRef(),v=K.useCallback(()=>{if(l("extended",!o),o){const f=t.map(m=>m.slice());for(let m=0;m<n;m++)for(let y=0;y<m-1;y++)f[m][y]=2,f[y][m]=2;l("coxeter",f)}},[o,l,t,n]),c=K.useCallback((f,m)=>{if(f.startsWith("coxeter")){const[y,x]=f.split("-").slice(1).map(p=>+p),h=t.map(p=>p.slice());h[y][x]=m,h[x][y]=m,l("coxeter",h)}if(f.startsWith("stellation")){const[y,x]=f.split("-").slice(1).map(p=>+p),h=i.map(p=>p.slice());h[y][x]=m,h[x][y]=m,l("stellation",h)}},[t,l,i]),d=K.useCallback((f,m)=>{const y=r[f];let x=r.slice();x[f]=m,Zr(m)||y===0?x.some(h=>Zr(h))&&(x=x.map((h,p)=>h==="s"?"b":h&&h!=="b"?"d":h)):m!==0&&dp(m)&&x.some(h=>Zr(h))&&(x=x.map((h,p)=>h==="b"?"s":h==="d"?1:h)),l("mirrors",x)},[r,l]);return K.useEffect(()=>{const f=()=>{if(!a.current)return;const m=Ue(1,(window.innerWidth-125)/a.current.offsetWidth);s(m)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[n]),T.jsxs("aside",{className:"coxeters",style:u===1?void 0:{transform:`scale(${u})`},ref:a,children:[T.jsx("div",{className:"coxeter-matrix",children:[...Array(n).keys()].map(f=>T.jsxs(K.Fragment,{children:[f>0&&T.jsx("div",{className:"coxeter-column",children:[...Array(f).keys()].map(m=>(o||f===m+1)&&T.jsx(Jp,{i:f,j:m,value:t[f][m],stellation:i[f][m],onChange:c},`${f}x${m}`))}),f>0&&T.jsx(Ds,{type:Ms(t,f)}),T.jsx(qp,{index:f,value:r[f],onChange:d}),f<n-1&&T.jsx(Ds,{type:Ms(t,f+1)})]},f))}),T.jsxs("div",{className:"coxeter-toggles",children:[n<9&&T.jsx("button",{className:"button",onClick:()=>l("dimensions",n+1),title:"Increase dimensions",children:"+"}),n>2&&T.jsx("button",{className:"button",onClick:()=>l("dimensions",n-1),title:"Decrease dimensions",children:"−"}),T.jsx("button",{className:"button",onClick:v,title:"extended mode",children:o?"▲":"▼"})]})]})}),sn=32,As=18;function S0({coxeter:e,mirrors:n,stellation:t}){const r=e.length,i=n.map((y,x)=>{const h=nf(y);return{n:x,type:h,i:x,j:0,r:h==="inactive"?Ut:Dn}});for(let y=0;y<r;y++)for(let x=r-1;x>y+1;x--)if(e[y][x]!==2){const h=y===0,p=x===r-1,g=!h&&!p,w=x-y+1,S=j(w-1)/2,I=2*Math.PI/w,N={i:i[y].i+S,j:i[y].j+(g?-S*Fe((2+w)/4*I):0)};for(let k=y;k<=x;k++){let A=k-y+(h?1:p?w/2:(2+w)/4);i[k].i=N.i+S*be(I*A),i[k].j=N.j+S*Fe(I*A)}for(let k=x+1;k<r;k++)i[k].i-=x-y,i[k].i+=2*S;y=x-1;break}const o=[];for(let y=0;y<r;y++)for(let x=0;x<y;x++)if(e[y][x]!==2){const h=e[y][x],p=t[y][x];let g=`${h===0?"∞":h<0?`${h===-1?"":-h}i`:h}`;p>1&&(g+=`/${p}`),g==="3"&&(g=""),o.push({source:i[y],target:i[x],value:g,type:h<0?"dashed":h===0?"bold":"solid"})}const l=i.map(({i:y})=>y),u=i.map(({j:y})=>y),s=Ue(...l),a=zt(...l),v=Ue(...u),c=zt(...u);let d=0,f=0;for(let y=0;y<i.length;y++){const x=i[y];x.x=(x.i-s)*2*sn,x.y=(x.j-v)*2*sn,d=zt(d,x.x),f=zt(f,x.y)}const m=y=>y+zt(y-1,0);return T.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-sn/2} ${-sn/2} ${d+sn} ${f+sn}`,width:`${m(a-s+1)}em`,height:`${m(c-v+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[i.map(({n:y,type:x,x:h,y:p,r:g})=>T.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${h-sn/2} ${p-sn/2})`,title:x,children:$t[x]},y)),o.map(({source:y,target:x,value:h,type:p})=>{const g={x:y.x,y:y.y},w={x:x.x,y:x.y},S={},I=tp(w.y-g.y,w.x-g.x);return S.x=(g.x+w.x)/2+(As+(h.length-2)*5)*be(I-$e/2),S.y=(g.y+w.y)/2+As*Fe(I-$e/2),g.x+=(y.r+1)*be(I),g.y+=(y.r+1)*Fe(I),w.x-=(x.r+1)*be(I),w.y-=(x.r+1)*Fe(I),T.jsxs("g",{className:"coxeter-diagram-link",children:[T.jsx("path",{d:`M ${g.x} ${g.y} L ${w.x} ${w.y}`,strokeWidth:p==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:p==="dashed"?"1 1":""}),T.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:S.x,y:S.y,children:h})]},`${y.n}-${x.n}`)})]})}export{Vv as A,y0 as B,S0 as C,Gp as D,Ye as E,Vp as F,w0 as G,d0 as H,x0 as I,r0 as J,xu as K,Kp as L,Yp as N,$e as P,Nn as a,i0 as b,ft as c,Fp as d,m0 as e,Ap as f,v0 as g,f0 as h,p0 as i,zt as j,e0 as k,a0 as l,Me as m,n0 as n,t0 as o,ip as p,Re as q,K as r,Zp as s,T as t,h0 as u,zs as v,Jt as w,Ue as x,bp as y,g0 as z};
