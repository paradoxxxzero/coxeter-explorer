(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fs={exports:{}},Ii={},As={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),sf=Symbol.for("react.portal"),af=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),vf=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),mf=Symbol.for("react.memo"),gf=Symbol.for("react.lazy"),hu=Symbol.iterator;function yf(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ls=Object.assign,Us={};function xt(e,n,t){this.props=e,this.context=n,this.refs=Us,this.updater=t||js}xt.prototype.isReactComponent={};xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $s(){}$s.prototype=xt.prototype;function xo(e,n,t){this.props=e,this.context=n,this.refs=Us,this.updater=t||js}var wo=xo.prototype=new $s;wo.constructor=xo;Ls(wo,xt.prototype);wo.isPureReactComponent=!0;var mu=Array.isArray,Bs=Object.prototype.hasOwnProperty,So={current:null},Hs={key:!0,ref:!0,__self:!0,__source:!0};function Vs(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Bs.call(n,r)&&!Hs.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:pr,type:e,key:l,ref:o,props:i,_owner:So.current}}function xf(e,n){return{$$typeof:pr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function wf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var gu=/\/+/g;function Gi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wf(""+e.key):n.toString(36)}function $r(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pr:case sf:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Gi(o,0):r,mu(i)?(t="",e!=null&&(t=e.replace(gu,"$&/")+"/"),$r(i,n,t,"",function(a){return a})):i!=null&&(Eo(i)&&(i=xf(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gu,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",mu(e))for(var u=0;u<e.length;u++){l=e[u];var s=r+Gi(l,u);o+=$r(l,n,t,s,i)}else if(s=yf(e),typeof s=="function")for(e=s.call(e),u=0;!(l=e.next()).done;)l=l.value,s=r+Gi(l,u++),o+=$r(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Sr(e,n,t){if(e==null)return e;var r=[],i=0;return $r(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Sf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Br={transition:null},Ef={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Br,ReactCurrentOwner:So};O.Children={map:Sr,forEach:function(e,n,t){Sr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Sr(e,function(){n++}),n},toArray:function(e){return Sr(e,function(n){return n})||[]},only:function(e){if(!Eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=xt;O.Fragment=af;O.Profiler=ff;O.PureComponent=xo;O.StrictMode=cf;O.Suspense=hf;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ef;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ls({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=So.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Bs.call(n,s)&&!Hs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];r.children=u}return{$$typeof:pr,type:e.type,key:i,ref:l,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:df,_context:e},e.Consumer=e};O.createElement=Vs;O.createFactory=function(e){var n=Vs.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:pf,render:e}};O.isValidElement=Eo;O.lazy=function(e){return{$$typeof:gf,_payload:{_status:-1,_result:e},_init:Sf}};O.memo=function(e,n){return{$$typeof:mf,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Br.transition;Br.transition={};try{e()}finally{Br.transition=n}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,n){return ae.current.useCallback(e,n)};O.useContext=function(e){return ae.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};O.useEffect=function(e,n){return ae.current.useEffect(e,n)};O.useId=function(){return ae.current.useId()};O.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return ae.current.useMemo(e,n)};O.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};O.useRef=function(e){return ae.current.useRef(e)};O.useState=function(e){return ae.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return ae.current.useTransition()};O.version="18.2.0";As.exports=O;var K=As.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=K,kf=Symbol.for("react.element"),If=Symbol.for("react.fragment"),Tf=Object.prototype.hasOwnProperty,_f=Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cf={key:!0,ref:!0,__self:!0,__source:!0};function Ws(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Tf.call(n,r)&&!Cf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:kf,type:e,key:l,ref:o,props:i,_owner:_f.current}}Ii.Fragment=If;Ii.jsx=Ws;Ii.jsxs=Ws;Fs.exports=Ii;var T=Fs.exports,yu={},Gs={exports:{}},we={},Qs={exports:{}},Ks={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,R){var P=C.length;C.push(R);e:for(;0<P;){var G=P-1>>>1,q=C[G];if(0<i(q,R))C[G]=R,C[P]=q,P=G;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var R=C[0],P=C.pop();if(P!==R){C[0]=P;e:for(var G=0,q=C.length,xr=q>>>1;G<xr;){var Cn=2*(G+1)-1,Wi=C[Cn],Rn=Cn+1,wr=C[Rn];if(0>i(Wi,P))Rn<q&&0>i(wr,Wi)?(C[G]=wr,C[Rn]=P,G=Rn):(C[G]=Wi,C[Cn]=P,G=Cn);else if(Rn<q&&0>i(wr,P))C[G]=wr,C[Rn]=P,G=Rn;else break e}}return R}function i(C,R){var P=C.sortIndex-R.sortIndex;return P!==0?P:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],a=[],v=1,c=null,d=3,f=!1,m=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var R=t(a);R!==null;){if(R.callback===null)r(a);else if(R.startTime<=C)r(a),R.sortIndex=R.expirationTime,n(s,R);else break;R=t(a)}}function w(C){if(y=!1,g(C),!m)if(t(s)!==null)m=!0,Hi(S);else{var R=t(a);R!==null&&Vi(w,R.startTime-C)}}function S(C,R){m=!1,y&&(y=!1,h(k),k=-1),f=!0;var P=d;try{for(g(R),c=t(s);c!==null&&(!(c.expirationTime>R)||C&&!Re());){var G=c.callback;if(typeof G=="function"){c.callback=null,d=c.priorityLevel;var q=G(c.expirationTime<=R);R=e.unstable_now(),typeof q=="function"?c.callback=q:c===t(s)&&r(s),g(R)}else r(s);c=t(s)}if(c!==null)var xr=!0;else{var Cn=t(a);Cn!==null&&Vi(w,Cn.startTime-R),xr=!1}return xr}finally{c=null,d=P,f=!1}}var I=!1,N=null,k=-1,F=5,z=-1;function Re(){return!(e.unstable_now()-z<F)}function Et(){if(N!==null){var C=e.unstable_now();z=C;var R=!0;try{R=N(!0,C)}finally{R?Nt():(I=!1,N=null)}}else I=!1}var Nt;if(typeof p=="function")Nt=function(){p(Et)};else if(typeof MessageChannel<"u"){var pu=new MessageChannel,lf=pu.port2;pu.port1.onmessage=Et,Nt=function(){lf.postMessage(null)}}else Nt=function(){x(Et,0)};function Hi(C){N=C,I||(I=!0,Nt())}function Vi(C,R){k=x(function(){C(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,Hi(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var P=d;d=R;try{return C()}finally{d=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=d;d=C;try{return R()}finally{d=P}},e.unstable_scheduleCallback=function(C,R,P){var G=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?G+P:G):P=G,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=P+q,C={id:v++,callback:R,priorityLevel:C,startTime:P,expirationTime:q,sortIndex:-1},P>G?(C.sortIndex=P,n(a,C),t(s)===null&&C===t(a)&&(y?(h(k),k=-1):y=!0,Vi(w,P-G))):(C.sortIndex=q,n(s,C),m||f||(m=!0,Hi(S))),C},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(C){var R=d;return function(){var P=d;d=R;try{return C.apply(this,arguments)}finally{d=P}}}})(Ks);Qs.exports=Ks;var Rf=Qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=K,xe=Rf;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ys=new Set,qt={};function Wn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(qt[e]=n,e=0;e<n.length;e++)Ys.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,Pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},wu={};function zf(e){return Nl.call(wu,e)?!0:Nl.call(xu,e)?!1:Pf.test(e)?wu[e]=!0:(xu[e]=!0,!1)}function Of(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Df(e,n,t,r){if(n===null||typeof n>"u"||Of(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var No=/[\-:]([a-z])/g;function ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(No,ko);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(No,ko);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(No,ko);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Io(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Df(n,t,i,r)&&(t=null),r||i===null?zf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ln=Xs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),To=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),Js=Symbol.for("react.provider"),qs=Symbol.for("react.context"),_o=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),Co=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Zs=Symbol.for("react.offscreen"),Su=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=Su&&e[Su]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Qi;function Ft(e){if(Qi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Qi=n&&n[1]||""}return`
`+Qi+e}var Ki=!1;function Xi(e,n){if(!e||Ki)return"";Ki=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Ki=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ft(e):""}function Mf(e){switch(e.tag){case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 2:case 15:return e=Xi(e.type,!1),e;case 11:return e=Xi(e.type.render,!1),e;case 1:return e=Xi(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Kn:return"Portal";case kl:return"Profiler";case To:return"StrictMode";case Il:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qs:return(e.displayName||"Context")+".Consumer";case Js:return(e._context.displayName||"Context")+".Provider";case _o:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Co:return n=e.displayName||null,n!==null?n:_l(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return _l(e(n))}catch{}}return null}function Ff(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(n);case 8:return n===To?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Af(e){var n=bs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nr(e){e._valueTracker||(e._valueTracker=Af(e))}function ea(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=bs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Eu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function na(e,n){n=n.checked,n!=null&&Io(e,"checked",n,!1)}function Rl(e,n){na(e,n);var t=Nn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Pl(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Nu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Pl(e,n,t){(n!=="number"||ei(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var At=Array.isArray;function lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function zl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ku(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(At(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function ta(e,n){var t=Nn(n.value),r=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Iu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ra(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ra(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,ia=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(e){jf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Bt[n]=Bt[e]})});function la(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Bt.hasOwnProperty(e)&&Bt[e]?(""+n).trim():n+"px"}function oa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=la(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Lf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,n){if(n){if(Lf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Ml(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,ot=null,ut=null;function Tu(e){if(e=gr(e)){if(typeof Al!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Pi(n),Al(e.stateNode,e.type,n))}}function ua(e){ot?ut?ut.push(e):ut=[e]:ot=e}function sa(){if(ot){var e=ot,n=ut;if(ut=ot=null,Tu(e),n)for(e=0;e<n.length;e++)Tu(n[e])}}function aa(e,n){return e(n)}function ca(){}var Yi=!1;function fa(e,n,t){if(Yi)return e(n,t);Yi=!0;try{return aa(e,n,t)}finally{Yi=!1,(ot!==null||ut!==null)&&(ca(),sa())}}function bt(e,n){var t=e.stateNode;if(t===null)return null;var r=Pi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var jl=!1;if(en)try{var It={};Object.defineProperty(It,"passive",{get:function(){jl=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{jl=!1}function Uf(e,n,t,r,i,l,o,u,s){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(v){this.onError(v)}}var Ht=!1,ni=null,ti=!1,Ll=null,$f={onError:function(e){Ht=!0,ni=e}};function Bf(e,n,t,r,i,l,o,u,s){Ht=!1,ni=null,Uf.apply($f,arguments)}function Hf(e,n,t,r,i,l,o,u,s){if(Bf.apply(this,arguments),Ht){if(Ht){var a=ni;Ht=!1,ni=null}else throw Error(E(198));ti||(ti=!0,Ll=a)}}function Gn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function da(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _u(e){if(Gn(e)!==e)throw Error(E(188))}function Vf(e){var n=e.alternate;if(!n){if(n=Gn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return _u(i),e;if(l===r)return _u(i),n;l=l.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function va(e){return e=Vf(e),e!==null?pa(e):null}function pa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=pa(e);if(n!==null)return n;e=e.sibling}return null}var ha=xe.unstable_scheduleCallback,Cu=xe.unstable_cancelCallback,Wf=xe.unstable_shouldYield,Gf=xe.unstable_requestPaint,Q=xe.unstable_now,Qf=xe.unstable_getCurrentPriorityLevel,Po=xe.unstable_ImmediatePriority,ma=xe.unstable_UserBlockingPriority,ri=xe.unstable_NormalPriority,Kf=xe.unstable_LowPriority,ga=xe.unstable_IdlePriority,Ti=null,Ge=null;function Xf(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:qf,Yf=Math.log,Jf=Math.LN2;function qf(e){return e>>>=0,e===0?32:31-(Yf(e)/Jf|0)|0}var Ir=64,Tr=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ii(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=jt(u):(l&=o,l!==0&&(r=jt(l)))}else o=t&~i,o!==0?r=jt(o):l!==0&&(r=jt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),i=1<<t,r|=e[t],n&=~i;return r}function Zf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ae(l),u=1<<o,s=i[o];s===-1?(!(u&t)||u&r)&&(i[o]=Zf(u,n)):s<=n&&(e.expiredLanes|=u),l&=~u}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ya(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Ji(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function ed(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ae(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function zo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function xa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wa,Oo,Sa,Ea,Na,$l=!1,_r=[],hn=null,mn=null,gn=null,er=new Map,nr=new Map,fn=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(n.pointerId)}}function Tt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=gr(n),n!==null&&Oo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function td(e,n,t,r,i){switch(n){case"focusin":return hn=Tt(hn,e,n,t,r,i),!0;case"dragenter":return mn=Tt(mn,e,n,t,r,i),!0;case"mouseover":return gn=Tt(gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return er.set(l,Tt(er.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,nr.set(l,Tt(nr.get(l)||null,e,n,t,r,i)),!0}return!1}function ka(e){var n=Dn(e.target);if(n!==null){var t=Gn(n);if(t!==null){if(n=t.tag,n===13){if(n=da(t),n!==null){e.blockedOn=n,Na(e.priority,function(){Sa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Bl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Fl=r,t.target.dispatchEvent(r),Fl=null}else return n=gr(t),n!==null&&Oo(n),e.blockedOn=t,!1;n.shift()}return!0}function Pu(e,n,t){Hr(e)&&t.delete(n)}function rd(){$l=!1,hn!==null&&Hr(hn)&&(hn=null),mn!==null&&Hr(mn)&&(mn=null),gn!==null&&Hr(gn)&&(gn=null),er.forEach(Pu),nr.forEach(Pu)}function _t(e,n){e.blockedOn===n&&(e.blockedOn=null,$l||($l=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,rd)))}function tr(e){function n(i){return _t(i,e)}if(0<_r.length){_t(_r[0],e);for(var t=1;t<_r.length;t++){var r=_r[t];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&_t(hn,e),mn!==null&&_t(mn,e),gn!==null&&_t(gn,e),er.forEach(n),nr.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)ka(t),t.blockedOn===null&&fn.shift()}var st=ln.ReactCurrentBatchConfig,li=!0;function id(e,n,t,r){var i=M,l=st.transition;st.transition=null;try{M=1,Do(e,n,t,r)}finally{M=i,st.transition=l}}function ld(e,n,t,r){var i=M,l=st.transition;st.transition=null;try{M=4,Do(e,n,t,r)}finally{M=i,st.transition=l}}function Do(e,n,t,r){if(li){var i=Bl(e,n,t,r);if(i===null)ol(e,n,r,oi,t),Ru(e,r);else if(td(i,e,n,t,r))r.stopPropagation();else if(Ru(e,r),n&4&&-1<nd.indexOf(e)){for(;i!==null;){var l=gr(i);if(l!==null&&wa(l),l=Bl(e,n,t,r),l===null&&ol(e,n,r,oi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else ol(e,n,r,null,t)}}var oi=null;function Bl(e,n,t,r){if(oi=null,e=Ro(r),e=Dn(e),e!==null)if(n=Gn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=da(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oi=e,null}function Ia(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qf()){case Po:return 1;case ma:return 4;case ri:case Kf:return 16;case ga:return 536870912;default:return 16}default:return 16}}var vn=null,Mo=null,Vr=null;function Ta(){if(Vr)return Vr;var e,n=Mo,t=n.length,r,i="value"in vn?vn.value:vn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Vr=i.slice(e,1<r?1-r:void 0)}function Wr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function zu(){return!1}function Se(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Cr:zu,this.isPropagationStopped=zu,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Se(wt),mr=V({},wt,{view:0,detail:0}),od=Se(mr),qi,Zi,Ct,_i=V({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(qi=e.screenX-Ct.screenX,Zi=e.screenY-Ct.screenY):Zi=qi=0,Ct=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Ou=Se(_i),ud=V({},_i,{dataTransfer:0}),sd=Se(ud),ad=V({},mr,{relatedTarget:0}),bi=Se(ad),cd=V({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Se(cd),dd=V({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=Se(dd),pd=V({},wt,{data:0}),Du=Se(pd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gd[e])?!!n[e]:!1}function Ao(){return yd}var xd=V({},mr,{key:function(e){if(e.key){var n=hd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wd=Se(xd),Sd=V({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Se(Sd),Ed=V({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),Nd=Se(Ed),kd=V({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Id=Se(kd),Td=V({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=Se(Td),Cd=[9,13,27,32],jo=en&&"CompositionEvent"in window,Vt=null;en&&"documentMode"in document&&(Vt=document.documentMode);var Rd=en&&"TextEvent"in window&&!Vt,_a=en&&(!jo||Vt&&8<Vt&&11>=Vt),Fu=String.fromCharCode(32),Au=!1;function Ca(e,n){switch(e){case"keyup":return Cd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Pd(e,n){switch(e){case"compositionend":return Ra(n);case"keypress":return n.which!==32?null:(Au=!0,Fu);case"textInput":return e=n.data,e===Fu&&Au?null:e;default:return null}}function zd(e,n){if(Yn)return e==="compositionend"||!jo&&Ca(e,n)?(e=Ta(),Vr=Mo=vn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _a&&n.locale!=="ko"?null:n.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Od[e.type]:n==="textarea"}function Pa(e,n,t,r){ua(r),n=ui(n,"onChange"),0<n.length&&(t=new Fo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Wt=null,rr=null;function Dd(e){Ba(e,0)}function Ci(e){var n=Zn(e);if(ea(n))return e}function Md(e,n){if(e==="change")return n}var za=!1;if(en){var el;if(en){var nl="oninput"in document;if(!nl){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),nl=typeof Lu.oninput=="function"}el=nl}else el=!1;za=el&&(!document.documentMode||9<document.documentMode)}function Uu(){Wt&&(Wt.detachEvent("onpropertychange",Oa),rr=Wt=null)}function Oa(e){if(e.propertyName==="value"&&Ci(rr)){var n=[];Pa(n,rr,e,Ro(e)),fa(Dd,n)}}function Fd(e,n,t){e==="focusin"?(Uu(),Wt=n,rr=t,Wt.attachEvent("onpropertychange",Oa)):e==="focusout"&&Uu()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(rr)}function jd(e,n){if(e==="click")return Ci(n)}function Ld(e,n){if(e==="input"||e==="change")return Ci(n)}function Ud(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $e=typeof Object.is=="function"?Object.is:Ud;function ir(e,n){if($e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Nl.call(n,i)||!$e(e[i],n[i]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,n){var t=$u(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$u(t)}}function Da(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Da(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ma(){for(var e=window,n=ei();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ei(e.document)}return n}function Lo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $d(e){var n=Ma(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Da(t.ownerDocument.documentElement,t)){if(r!==null&&Lo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Bu(t,l);var o=Bu(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=en&&"documentMode"in document&&11>=document.documentMode,Jn=null,Hl=null,Gt=null,Vl=!1;function Hu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vl||Jn==null||Jn!==ei(r)||(r=Jn,"selectionStart"in r&&Lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gt&&ir(Gt,r)||(Gt=r,r=ui(Hl,"onSelect"),0<r.length&&(n=new Fo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},tl={},Fa={};en&&(Fa=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Ri(e){if(tl[e])return tl[e];if(!qn[e])return e;var n=qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fa)return tl[e]=n[t];return e}var Aa=Ri("animationend"),ja=Ri("animationiteration"),La=Ri("animationstart"),Ua=Ri("transitionend"),$a=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){$a.set(e,n),Wn(n,[e])}for(var rl=0;rl<Vu.length;rl++){var il=Vu[rl],Hd=il.toLowerCase(),Vd=il[0].toUpperCase()+il.slice(1);In(Hd,"on"+Vd)}In(Aa,"onAnimationEnd");In(ja,"onAnimationIteration");In(La,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Ua,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));function Wu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hf(r,n,void 0,e),e.currentTarget=null}function Ba(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,a=u.currentTarget;if(u=u.listener,s!==l&&i.isPropagationStopped())break e;Wu(i,u,a),l=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,a=u.currentTarget,u=u.listener,s!==l&&i.isPropagationStopped())break e;Wu(i,u,a),l=s}}}if(ti)throw e=Ll,ti=!1,Ll=null,e}function j(e,n){var t=n[Xl];t===void 0&&(t=n[Xl]=new Set);var r=e+"__bubble";t.has(r)||(Ha(n,e,2,!1),t.add(r))}function ll(e,n,t){var r=0;n&&(r|=4),Ha(t,e,r,n)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Pr]){e[Pr]=!0,Ys.forEach(function(t){t!=="selectionchange"&&(Wd.has(t)||ll(t,!1,e),ll(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pr]||(n[Pr]=!0,ll("selectionchange",!1,n))}}function Ha(e,n,t,r){switch(Ia(n)){case 1:var i=id;break;case 4:i=ld;break;default:i=Do}t=i.bind(null,n,t,e),i=void 0,!jl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ol(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Dn(u),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}u=u.parentNode}}r=r.return}fa(function(){var a=l,v=Ro(t),c=[];e:{var d=$a.get(e);if(d!==void 0){var f=Fo,m=e;switch(e){case"keypress":if(Wr(t)===0)break e;case"keydown":case"keyup":f=wd;break;case"focusin":m="focus",f=bi;break;case"focusout":m="blur",f=bi;break;case"beforeblur":case"afterblur":f=bi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Nd;break;case Aa:case ja:case La:f=fd;break;case Ua:f=Id;break;case"scroll":f=od;break;case"wheel":f=_d;break;case"copy":case"cut":case"paste":f=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Mu}var y=(n&4)!==0,x=!y&&e==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var p=a,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=bt(p,h),w!=null&&y.push(or(p,w,g)))),x)break;p=p.return}0<y.length&&(d=new f(d,m,null,t,v),c.push({event:d,listeners:y}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&t!==Fl&&(m=t.relatedTarget||t.fromElement)&&(Dn(m)||m[nn]))break e;if((f||d)&&(d=v.window===v?v:(d=v.ownerDocument)?d.defaultView||d.parentWindow:window,f?(m=t.relatedTarget||t.toElement,f=a,m=m?Dn(m):null,m!==null&&(x=Gn(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=a),f!==m)){if(y=Ou,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Mu,w="onPointerLeave",h="onPointerEnter",p="pointer"),x=f==null?d:Zn(f),g=m==null?d:Zn(m),d=new y(w,p+"leave",f,t,v),d.target=x,d.relatedTarget=g,w=null,Dn(v)===a&&(y=new y(h,p+"enter",m,t,v),y.target=g,y.relatedTarget=x,w=y),x=w,f&&m)n:{for(y=f,h=m,p=0,g=y;g;g=Qn(g))p++;for(g=0,w=h;w;w=Qn(w))g++;for(;0<p-g;)y=Qn(y),p--;for(;0<g-p;)h=Qn(h),g--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break n;y=Qn(y),h=Qn(h)}y=null}else y=null;f!==null&&Gu(c,d,f,y,!1),m!==null&&x!==null&&Gu(c,x,m,y,!0)}}e:{if(d=a?Zn(a):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var S=Md;else if(ju(d))if(za)S=Ld;else{S=Ad;var I=Fd}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=jd);if(S&&(S=S(e,a))){Pa(c,S,t,v);break e}I&&I(e,d,a),e==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Pl(d,"number",d.value)}switch(I=a?Zn(a):window,e){case"focusin":(ju(I)||I.contentEditable==="true")&&(Jn=I,Hl=a,Gt=null);break;case"focusout":Gt=Hl=Jn=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,Hu(c,t,v);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":Hu(c,t,v)}var N;if(jo)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Yn?Ca(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(_a&&t.locale!=="ko"&&(Yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Yn&&(N=Ta()):(vn=v,Mo="value"in vn?vn.value:vn.textContent,Yn=!0)),I=ui(a,k),0<I.length&&(k=new Du(k,e,null,t,v),c.push({event:k,listeners:I}),N?k.data=N:(N=Ra(t),N!==null&&(k.data=N)))),(N=Rd?Pd(e,t):zd(e,t))&&(a=ui(a,"onBeforeInput"),0<a.length&&(v=new Du("onBeforeInput","beforeinput",null,t,v),c.push({event:v,listeners:a}),v.data=N))}Ba(c,n)})}function or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ui(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=bt(e,t),l!=null&&r.unshift(or(e,l,i)),l=bt(e,n),l!=null&&r.push(or(e,l,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,s=u.alternate,a=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&a!==null&&(u=a,i?(s=bt(t,l),s!=null&&o.unshift(or(t,s,u))):i||(s=bt(t,l),s!=null&&o.push(or(t,s,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Gd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Qd,"")}function zr(e,n,t){if(n=Qu(n),Qu(e)!==n&&t)throw Error(E(425))}function si(){}var Wl=null,Gl=null;function Ql(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(Yd)}:Kl;function Yd(e){setTimeout(function(){throw e})}function ul(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),tr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);tr(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var St=Math.random().toString(36).slice(2),We="__reactFiber$"+St,ur="__reactProps$"+St,nn="__reactContainer$"+St,Xl="__reactEvents$"+St,Jd="__reactListeners$"+St,qd="__reactHandles$"+St;function Dn(e){var n=e[We];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[We]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xu(e);e!==null;){if(t=e[We])return t;e=Xu(e)}return n}e=t,t=e.parentNode}return null}function gr(e){return e=e[We]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Pi(e){return e[ur]||null}var Yl=[],bn=-1;function Tn(e){return{current:e}}function U(e){0>bn||(e.current=Yl[bn],Yl[bn]=null,bn--)}function A(e,n){bn++,Yl[bn]=e.current,e.current=n}var kn={},oe=Tn(kn),ve=Tn(!1),Un=kn;function vt(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function ai(){U(ve),U(oe)}function Yu(e,n,t){if(oe.current!==kn)throw Error(E(168));A(oe,n),A(ve,t)}function Va(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,Ff(e)||"Unknown",i));return V({},t,r)}function ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Un=oe.current,A(oe,e),A(ve,ve.current),!0}function Ju(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=Va(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,U(ve),U(oe),A(oe,e)):U(ve),A(ve,t)}var Xe=null,zi=!1,sl=!1;function Wa(e){Xe===null?Xe=[e]:Xe.push(e)}function Zd(e){zi=!0,Wa(e)}function _n(){if(!sl&&Xe!==null){sl=!0;var e=0,n=M;try{var t=Xe;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Xe=null,zi=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),ha(Po,_n),i}finally{M=n,sl=!1}}return null}var et=[],nt=0,fi=null,di=0,Ee=[],Ne=0,$n=null,Ye=1,Je="";function Pn(e,n){et[nt++]=di,et[nt++]=fi,fi=e,di=n}function Ga(e,n,t){Ee[Ne++]=Ye,Ee[Ne++]=Je,Ee[Ne++]=$n,$n=e;var r=Ye;e=Je;var i=32-Ae(r)-1;r&=~(1<<i),t+=1;var l=32-Ae(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ye=1<<32-Ae(n)+i|t<<i|r,Je=l+e}else Ye=1<<l|t<<i|r,Je=e}function Uo(e){e.return!==null&&(Pn(e,1),Ga(e,1,0))}function $o(e){for(;e===fi;)fi=et[--nt],et[nt]=null,di=et[--nt],et[nt]=null;for(;e===$n;)$n=Ee[--Ne],Ee[Ne]=null,Je=Ee[--Ne],Ee[Ne]=null,Ye=Ee[--Ne],Ee[Ne]=null}var ye=null,ge=null,$=!1,Me=null;function Qa(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ge=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:Ye,overflow:Je}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ge=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if($){var n=ge;if(n){var t=n;if(!qu(e,n)){if(Jl(e))throw Error(E(418));n=yn(t.nextSibling);var r=ye;n&&qu(e,n)?Qa(r,t):(e.flags=e.flags&-4097|2,$=!1,ye=e)}}else{if(Jl(e))throw Error(E(418));e.flags=e.flags&-4097|2,$=!1,ye=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Or(e){if(e!==ye)return!1;if(!$)return Zu(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ql(e.type,e.memoizedProps)),n&&(n=ge)){if(Jl(e))throw Ka(),Error(E(418));for(;n;)Qa(e,n),n=yn(n.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ye?yn(e.stateNode.nextSibling):null;return!0}function Ka(){for(var e=ge;e;)e=yn(e.nextSibling)}function pt(){ge=ye=null,$=!1}function Bo(e){Me===null?Me=[e]:Me.push(e)}var bd=ln.ReactCurrentBatchConfig;function ze(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var vi=Tn(null),pi=null,tt=null,Ho=null;function Vo(){Ho=tt=pi=null}function Wo(e){var n=vi.current;U(vi),e._currentValue=n}function Zl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){pi=e,Ho=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(Ho!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(pi===null)throw Error(E(308));tt=e,pi.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var Mn=null;function Go(e){Mn===null?Mn=[e]:Mn.push(e)}function Xa(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Go(n)):(t.next=i.next,i.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ya(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,tn(e,t)}return i=r.interleaved,i===null?(n.next=n,Go(r)):(n.next=i.next,i.next=n),r.interleaved=n,tn(e,t)}function Gr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zo(e,t)}}function bu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function hi(e,n,t,r){var i=e.updateQueue;cn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,a=s.next;s.next=null,o===null?l=a:o.next=a,o=s;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=a:u.next=a,v.lastBaseUpdate=s))}if(l!==null){var c=i.baseState;o=0,v=a=s=null,u=l;do{var d=u.lane,f=u.eventTime;if((r&d)===d){v!==null&&(v=v.next={eventTime:f,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,y=u;switch(d=n,f=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(f,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(f,c,d):m,d==null)break e;c=V({},c,d);break e;case 2:cn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else f={eventTime:f,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(a=v=f,s=c):v=v.next=f,o|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(v===null&&(s=c),i.baseState=s,i.firstBaseUpdate=a,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Hn|=o,e.lanes=o,e.memoizedState=c}}function es(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Ja=new Xs.Component().refs;function bl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Oi={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),i=Sn(e),l=Ze(r,i);l.payload=n,t!=null&&(l.callback=t),n=xn(e,l,i),n!==null&&(je(n,e,i,r),Gr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),i=Sn(e),l=Ze(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=xn(e,l,i),n!==null&&(je(n,e,i,r),Gr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=Sn(e),i=Ze(t,r);i.tag=2,n!=null&&(i.callback=n),n=xn(e,i,r),n!==null&&(je(n,e,r,t),Gr(n,e,r))}};function ns(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!ir(t,r)||!ir(i,l):!0}function qa(e,n,t){var r=!1,i=kn,l=n.contextType;return typeof l=="object"&&l!==null?l=Te(l):(i=pe(n)?Un:oe.current,r=n.contextTypes,l=(r=r!=null)?vt(e,i):kn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Oi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ts(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Oi.enqueueReplaceState(n,n.state,null)}function eo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Ja,Qo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Te(l):(l=pe(n)?Un:oe.current,i.context=vt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(bl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Oi.enqueueReplaceState(i,i.state,null),hi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;u===Ja&&(u=i.refs={}),o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Dr(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function rs(e){var n=e._init;return n(e._payload)}function Za(e){function n(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=En(h,p),h.index=0,h.sibling=null,h}function l(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,p,g,w){return p===null||p.tag!==6?(p=hl(g,h.mode,w),p.return=h,p):(p=i(p,g),p.return=h,p)}function s(h,p,g,w){var S=g.type;return S===Xn?v(h,p,g.props.children,w,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&rs(S)===p.type)?(w=i(p,g.props),w.ref=Rt(h,p,g),w.return=h,w):(w=qr(g.type,g.key,g.props,null,h.mode,w),w.ref=Rt(h,p,g),w.return=h,w)}function a(h,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ml(g,h.mode,w),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function v(h,p,g,w,S){return p===null||p.tag!==7?(p=jn(g,h.mode,w,S),p.return=h,p):(p=i(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hl(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return g=qr(p.type,p.key,p.props,null,h.mode,g),g.ref=Rt(h,null,p),g.return=h,g;case Kn:return p=ml(p,h.mode,g),p.return=h,p;case an:var w=p._init;return c(h,w(p._payload),g)}if(At(p)||kt(p))return p=jn(p,h.mode,g,null),p.return=h,p;Dr(h,p)}return null}function d(h,p,g,w){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:u(h,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return g.key===S?s(h,p,g,w):null;case Kn:return g.key===S?a(h,p,g,w):null;case an:return S=g._init,d(h,p,S(g._payload),w)}if(At(g)||kt(g))return S!==null?null:v(h,p,g,w,null);Dr(h,g)}return null}function f(h,p,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,u(p,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Er:return h=h.get(w.key===null?g:w.key)||null,s(p,h,w,S);case Kn:return h=h.get(w.key===null?g:w.key)||null,a(p,h,w,S);case an:var I=w._init;return f(h,p,g,I(w._payload),S)}if(At(w)||kt(w))return h=h.get(g)||null,v(p,h,w,S,null);Dr(p,w)}return null}function m(h,p,g,w){for(var S=null,I=null,N=p,k=p=0,F=null;N!==null&&k<g.length;k++){N.index>k?(F=N,N=null):F=N.sibling;var z=d(h,N,g[k],w);if(z===null){N===null&&(N=F);break}e&&N&&z.alternate===null&&n(h,N),p=l(z,p,k),I===null?S=z:I.sibling=z,I=z,N=F}if(k===g.length)return t(h,N),$&&Pn(h,k),S;if(N===null){for(;k<g.length;k++)N=c(h,g[k],w),N!==null&&(p=l(N,p,k),I===null?S=N:I.sibling=N,I=N);return $&&Pn(h,k),S}for(N=r(h,N);k<g.length;k++)F=f(N,h,k,g[k],w),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?k:F.key),p=l(F,p,k),I===null?S=F:I.sibling=F,I=F);return e&&N.forEach(function(Re){return n(h,Re)}),$&&Pn(h,k),S}function y(h,p,g,w){var S=kt(g);if(typeof S!="function")throw Error(E(150));if(g=S.call(g),g==null)throw Error(E(151));for(var I=S=null,N=p,k=p=0,F=null,z=g.next();N!==null&&!z.done;k++,z=g.next()){N.index>k?(F=N,N=null):F=N.sibling;var Re=d(h,N,z.value,w);if(Re===null){N===null&&(N=F);break}e&&N&&Re.alternate===null&&n(h,N),p=l(Re,p,k),I===null?S=Re:I.sibling=Re,I=Re,N=F}if(z.done)return t(h,N),$&&Pn(h,k),S;if(N===null){for(;!z.done;k++,z=g.next())z=c(h,z.value,w),z!==null&&(p=l(z,p,k),I===null?S=z:I.sibling=z,I=z);return $&&Pn(h,k),S}for(N=r(h,N);!z.done;k++,z=g.next())z=f(N,h,k,z.value,w),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?k:z.key),p=l(z,p,k),I===null?S=z:I.sibling=z,I=z);return e&&N.forEach(function(Et){return n(h,Et)}),$&&Pn(h,k),S}function x(h,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Xn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:e:{for(var S=g.key,I=p;I!==null;){if(I.key===S){if(S=g.type,S===Xn){if(I.tag===7){t(h,I.sibling),p=i(I,g.props.children),p.return=h,h=p;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&rs(S)===I.type){t(h,I.sibling),p=i(I,g.props),p.ref=Rt(h,I,g),p.return=h,h=p;break e}t(h,I);break}else n(h,I);I=I.sibling}g.type===Xn?(p=jn(g.props.children,h.mode,w,g.key),p.return=h,h=p):(w=qr(g.type,g.key,g.props,null,h.mode,w),w.ref=Rt(h,p,g),w.return=h,h=w)}return o(h);case Kn:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{t(h,p);break}else n(h,p);p=p.sibling}p=ml(g,h.mode,w),p.return=h,h=p}return o(h);case an:return I=g._init,x(h,p,I(g._payload),w)}if(At(g))return m(h,p,g,w);if(kt(g))return y(h,p,g,w);Dr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(h,p.sibling),p=i(p,g),p.return=h,h=p):(t(h,p),p=hl(g,h.mode,w),p.return=h,h=p),o(h)):t(h,p)}return x}var ht=Za(!0),ba=Za(!1),yr={},Qe=Tn(yr),sr=Tn(yr),ar=Tn(yr);function Fn(e){if(e===yr)throw Error(E(174));return e}function Ko(e,n){switch(A(ar,n),A(sr,e),A(Qe,yr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ol(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ol(n,e)}U(Qe),A(Qe,n)}function mt(){U(Qe),U(sr),U(ar)}function ec(e){Fn(ar.current);var n=Fn(Qe.current),t=Ol(n,e.type);n!==t&&(A(sr,e),A(Qe,t))}function Xo(e){sr.current===e&&(U(Qe),U(sr))}var B=Tn(0);function mi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var al=[];function Yo(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var Qr=ln.ReactCurrentDispatcher,cl=ln.ReactCurrentBatchConfig,Bn=0,H=null,Y=null,Z=null,gi=!1,Qt=!1,cr=0,ev=0;function re(){throw Error(E(321))}function Jo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!$e(e[t],n[t]))return!1;return!0}function qo(e,n,t,r,i,l){if(Bn=l,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Qr.current=e===null||e.memoizedState===null?iv:lv,e=t(r,i),Qt){l=0;do{if(Qt=!1,cr=0,25<=l)throw Error(E(301));l+=1,Z=Y=null,n.updateQueue=null,Qr.current=ov,e=t(r,i)}while(Qt)}if(Qr.current=yi,n=Y!==null&&Y.next!==null,Bn=0,Z=Y=H=null,gi=!1,n)throw Error(E(300));return e}function Zo(){var e=cr!==0;return cr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function _e(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,Y=e;else{if(e===null)throw Error(E(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function fr(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=_e(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,s=null,a=l;do{var v=a.lane;if((Bn&v)===v)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var c={lane:v,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(u=s=c,o=r):s=s.next=c,H.lanes|=v,Hn|=v}a=a.next}while(a!==null&&a!==l);s===null?o=r:s.next=u,$e(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,Hn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function dl(e){var n=_e(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);$e(l,n.memoizedState)||(de=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function nc(){}function tc(e,n){var t=H,r=_e(),i=n(),l=!$e(r.memoizedState,i);if(l&&(r.memoizedState=i,de=!0),r=r.queue,bo(lc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,dr(9,ic.bind(null,t,r,i,n),void 0,null),b===null)throw Error(E(349));Bn&30||rc(t,n,i)}return i}function rc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ic(e,n,t,r){n.value=t,n.getSnapshot=r,oc(n)&&uc(e)}function lc(e,n,t){return t(function(){oc(n)&&uc(e)})}function oc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!$e(e,t)}catch{return!0}}function uc(e){var n=tn(e,1);n!==null&&je(n,e,1,-1)}function is(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},n.queue=e,e=e.dispatch=rv.bind(null,H,e),[n.memoizedState,e]}function dr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function sc(){return _e().memoizedState}function Kr(e,n,t,r){var i=Ve();H.flags|=e,i.memoizedState=dr(1|n,t,void 0,r===void 0?null:r)}function Di(e,n,t,r){var i=_e();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&Jo(r,o.deps)){i.memoizedState=dr(n,t,l,r);return}}H.flags|=e,i.memoizedState=dr(1|n,t,l,r)}function ls(e,n){return Kr(8390656,8,e,n)}function bo(e,n){return Di(2048,8,e,n)}function ac(e,n){return Di(4,2,e,n)}function cc(e,n){return Di(4,4,e,n)}function fc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dc(e,n,t){return t=t!=null?t.concat([e]):null,Di(4,4,fc.bind(null,n,e),t)}function eu(){}function vc(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Jo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function pc(e,n){var t=_e();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Jo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hc(e,n,t){return Bn&21?($e(t,n)||(t=ya(),H.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function nv(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),n()}finally{M=t,cl.transition=r}}function mc(){return _e().memoizedState}function tv(e,n,t){var r=Sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},gc(e))yc(n,t);else if(t=Xa(e,n,t,r),t!==null){var i=se();je(t,e,r,i),xc(t,n,r)}}function rv(e,n,t){var r=Sn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(gc(e))yc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,$e(u,o)){var s=n.interleaved;s===null?(i.next=i,Go(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Xa(e,n,i,r),t!==null&&(i=se(),je(t,e,r,i),xc(t,n,r))}}function gc(e){var n=e.alternate;return e===H||n!==null&&n===H}function yc(e,n){Qt=gi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function xc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zo(e,t)}}var yi={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},iv={readContext:Te,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:ls,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Kr(4194308,4,fc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Kr(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=tv.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:is,useDebugValue:eu,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=is(!1),n=e[0];return e=nv.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Ve();if($){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),b===null)throw Error(E(349));Bn&30||rc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ls(lc.bind(null,r,l,e),[e]),r.flags|=2048,dr(9,ic.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ve(),n=b.identifierPrefix;if($){var t=Je,r=Ye;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ev++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},lv={readContext:Te,useCallback:vc,useContext:Te,useEffect:bo,useImperativeHandle:dc,useInsertionEffect:ac,useLayoutEffect:cc,useMemo:pc,useReducer:fl,useRef:sc,useState:function(){return fl(fr)},useDebugValue:eu,useDeferredValue:function(e){var n=_e();return hc(n,Y.memoizedState,e)},useTransition:function(){var e=fl(fr)[0],n=_e().memoizedState;return[e,n]},useMutableSource:nc,useSyncExternalStore:tc,useId:mc,unstable_isNewReconciler:!1},ov={readContext:Te,useCallback:vc,useContext:Te,useEffect:bo,useImperativeHandle:dc,useInsertionEffect:ac,useLayoutEffect:cc,useMemo:pc,useReducer:dl,useRef:sc,useState:function(){return dl(fr)},useDebugValue:eu,useDeferredValue:function(e){var n=_e();return Y===null?n.memoizedState=e:hc(n,Y.memoizedState,e)},useTransition:function(){var e=dl(fr)[0],n=_e().memoizedState;return[e,n]},useMutableSource:nc,useSyncExternalStore:tc,useId:mc,unstable_isNewReconciler:!1};function gt(e,n){try{var t="",r=n;do t+=Mf(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function vl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function no(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var uv=typeof WeakMap=="function"?WeakMap:Map;function wc(e,n,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wi||(wi=!0,fo=r),no(e,n)},t}function Sc(e,n,t){t=Ze(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){no(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){no(e,n),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function os(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new uv;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Sv.bind(null,e,n,t),n.then(e,e))}function us(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ss(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ze(-1,1),n.tag=2,xn(t,n,1))),t.lanes|=1),e)}var sv=ln.ReactCurrentOwner,de=!1;function ue(e,n,t,r){n.child=e===null?ba(n,null,t,r):ht(n,e.child,t,r)}function as(e,n,t,r,i){t=t.render;var l=n.ref;return at(n,i),r=qo(e,n,t,r,l,i),t=Zo(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&t&&Uo(n),n.flags|=1,ue(e,n,r,i),n.child)}function cs(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!su(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Ec(e,n,l,r,i)):(e=qr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:ir,t(o,r)&&e.ref===n.ref)return rn(e,n,i)}return n.flags|=1,e=En(l,r),e.ref=n.ref,e.return=n,n.child=e}function Ec(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,rn(e,n,i)}return to(e,n,t,r,i)}function Nc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(it,me),me|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(it,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,A(it,me),me|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,A(it,me),me|=r;return ue(e,n,i,t),n.child}function kc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function to(e,n,t,r,i){var l=pe(t)?Un:oe.current;return l=vt(n,l),at(n,i),t=qo(e,n,t,r,l,i),r=Zo(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&r&&Uo(n),n.flags|=1,ue(e,n,t,i),n.child)}function fs(e,n,t,r,i){if(pe(t)){var l=!0;ci(n)}else l=!1;if(at(n,i),n.stateNode===null)Xr(e,n),qa(n,t,r),eo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var s=o.context,a=t.contextType;typeof a=="object"&&a!==null?a=Te(a):(a=pe(t)?Un:oe.current,a=vt(n,a));var v=t.getDerivedStateFromProps,c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==a)&&ts(n,o,r,a),cn=!1;var d=n.memoizedState;o.state=d,hi(n,r,o,i),s=n.memoizedState,u!==r||d!==s||ve.current||cn?(typeof v=="function"&&(bl(n,t,v,r),s=n.memoizedState),(u=cn||ns(n,t,u,r,d,s,a))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=a,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Ya(e,n),u=n.memoizedProps,a=n.type===n.elementType?u:ze(n.type,u),o.props=a,c=n.pendingProps,d=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Te(s):(s=pe(t)?Un:oe.current,s=vt(n,s));var f=t.getDerivedStateFromProps;(v=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==c||d!==s)&&ts(n,o,r,s),cn=!1,d=n.memoizedState,o.state=d,hi(n,r,o,i);var m=n.memoizedState;u!==c||d!==m||ve.current||cn?(typeof f=="function"&&(bl(n,t,f,r),m=n.memoizedState),(a=cn||ns(n,t,a,r,d,m,s)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=s,r=a):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return ro(e,n,t,r,l,i)}function ro(e,n,t,r,i,l){kc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ju(n,t,!1),rn(e,n,l);r=n.stateNode,sv.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=ht(n,e.child,null,l),n.child=ht(n,null,u,l)):ue(e,n,u,l),n.memoizedState=r.state,i&&Ju(n,t,!0),n.child}function Ic(e){var n=e.stateNode;n.pendingContext?Yu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Yu(e,n.context,!1),Ko(e,n.containerInfo)}function ds(e,n,t,r,i){return pt(),Bo(i),n.flags|=256,ue(e,n,t,r),n.child}var io={dehydrated:null,treeContext:null,retryLane:0};function lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,n,t){var r=n.pendingProps,i=B.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(B,i&1),e===null)return ql(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ai(o,r,0,null),e=jn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=lo(t),n.memoizedState=io,e):nu(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return av(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=En(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=En(u,l):(l=jn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?lo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=io,r}return l=e.child,e=l.sibling,r=En(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function nu(e,n){return n=Ai({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Mr(e,n,t,r){return r!==null&&Bo(r),ht(n,e.child,null,t),e=nu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function av(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=vl(Error(E(422))),Mr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ai({mode:"visible",children:r.children},i,0,null),l=jn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&ht(n,e.child,null,o),n.child.memoizedState=lo(o),n.memoizedState=io,l);if(!(n.mode&1))return Mr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(E(419)),r=vl(l,r,void 0),Mr(e,n,o,r)}if(u=(o&e.childLanes)!==0,de||u){if(r=b,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,tn(e,i),je(r,e,i,-1))}return uu(),r=vl(Error(E(421))),Mr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ev.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ge=yn(i.nextSibling),ye=n,$=!0,Me=null,e!==null&&(Ee[Ne++]=Ye,Ee[Ne++]=Je,Ee[Ne++]=$n,Ye=e.id,Je=e.overflow,$n=n),n=nu(n,r.children),n.flags|=4096,n)}function vs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Zl(e.return,n,t)}function pl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function _c(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vs(e,t,n);else if(e.tag===19)vs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&mi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),pl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}pl(n,!0,t,null,l);break;case"together":pl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=En(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=En(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cv(e,n,t){switch(n.tag){case 3:Ic(n),pt();break;case 5:ec(n);break;case 1:pe(n.type)&&ci(n);break;case 4:Ko(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;A(vi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(A(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Tc(e,n,t):(A(B,B.current&1),e=rn(e,n,t),e!==null?e.sibling:null);A(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return _c(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,Nc(e,n,t)}return rn(e,n,t)}var Cc,oo,Rc,Pc;Cc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};oo=function(){};Rc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Fn(Qe.current);var l=null;switch(t){case"input":i=Cl(e,i),r=Cl(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=zl(e,i),r=zl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}Dl(t,r);var o;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var u=i[a];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(qt.hasOwnProperty(a)?l||(l=[]):(l=l||[]).push(a,null));for(a in r){var s=r[a];if(u=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null))if(a==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(a,t)),t=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(l=l||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(qt.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&j("scroll",e),l||u===s||(l=[])):(l=l||[]).push(a,s))}t&&(l=l||[]).push("style",t);var a=l;(n.updateQueue=a)&&(n.flags|=4)}};Pc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pt(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function fv(e,n,t){var r=n.pendingProps;switch($o(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return pe(n.type)&&ai(),ie(n),null;case 3:return r=n.stateNode,mt(),U(ve),U(oe),Yo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(ho(Me),Me=null))),oo(e,n),ie(n),null;case 5:Xo(n);var i=Fn(ar.current);if(t=n.type,e!==null&&n.stateNode!=null)Rc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return ie(n),null}if(e=Fn(Qe.current),Or(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[We]=n,r[ur]=l,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<Lt.length;i++)j(Lt[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Eu(r,l),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},j("invalid",r);break;case"textarea":ku(r,l),j("invalid",r)}Dl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,u,e),i=["children",""+u]):qt.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&j("scroll",r)}switch(t){case"input":Nr(r),Nu(r,l,!0);break;case"textarea":Nr(r),Iu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=si)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ra(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[We]=n,e[ur]=r,Cc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ml(t,r),t){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lt.length;i++)j(Lt[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":Eu(e,r),i=Cl(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),j("invalid",e);break;case"textarea":ku(e,r),i=zl(e,r),j("invalid",e);break;default:i=r}Dl(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var s=u[l];l==="style"?oa(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ia(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Zt(e,s):typeof s=="number"&&Zt(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&j("scroll",e):s!=null&&Io(e,l,s,o))}switch(t){case"input":Nr(e),Nu(e,r,!1);break;case"textarea":Nr(e),Iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?lt(e,!!r.multiple,l,!1):r.defaultValue!=null&&lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=si)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Pc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Fn(ar.current),Fn(Qe.current),Or(n)){if(r=n.stateNode,t=n.memoizedProps,r[We]=n,(l=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:zr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[We]=n,n.stateNode=r}return ie(n),null;case 13:if(U(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ge!==null&&n.mode&1&&!(n.flags&128))Ka(),pt(),n.flags|=98560,l=!1;else if(l=Or(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[We]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else Me!==null&&(ho(Me),Me=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?J===0&&(J=3):uu())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return mt(),oo(e,n),e===null&&lr(n.stateNode.containerInfo),ie(n),null;case 10:return Wo(n.type._context),ie(n),null;case 17:return pe(n.type)&&ai(),ie(n),null;case 19:if(U(B),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Pt(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=mi(e),o!==null){for(n.flags|=128,Pt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return A(B,B.current&1|2),n.child}e=e.sibling}l.tail!==null&&Q()>yt&&(n.flags|=128,r=!0,Pt(l,!1),n.lanes=4194304)}else{if(!r)if(e=mi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!$)return ie(n),null}else 2*Q()-l.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,Pt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Q(),n.sibling=null,t=B.current,A(B,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return ou(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function dv(e,n){switch($o(n),n.tag){case 1:return pe(n.type)&&ai(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),U(ve),U(oe),Yo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Xo(n),null;case 13:if(U(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(B),null;case 4:return mt(),null;case 10:return Wo(n.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var Fr=!1,le=!1,vv=typeof WeakSet=="function"?WeakSet:Set,_=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function uo(e,n,t){try{t()}catch(r){W(e,n,r)}}var ps=!1;function pv(e,n){if(Wl=li,e=Ma(),Lo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,s=-1,a=0,v=0,c=e,d=null;n:for(;;){for(var f;c!==t||i!==0&&c.nodeType!==3||(u=o+i),c!==l||r!==0&&c.nodeType!==3||(s=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(f=c.firstChild)!==null;)d=c,c=f;for(;;){if(c===e)break n;if(d===t&&++a===i&&(u=o),d===l&&++v===r&&(s=o),(f=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=f}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gl={focusedElem:e,selectionRange:t},li=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,x=m.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?y:ze(n.type,y),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){W(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return m=ps,ps=!1,m}function Kt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&uo(n,t,l)}i=i.next}while(i!==r)}}function Mi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function so(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zc(e){var n=e.alternate;n!==null&&(e.alternate=null,zc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[We],delete n[ur],delete n[Xl],delete n[Jd],delete n[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ao(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(ao(e,n,t),e=e.sibling;e!==null;)ao(e,n,t),e=e.sibling}function co(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(co(e,n,t),e=e.sibling;e!==null;)co(e,n,t),e=e.sibling}var ee=null,Oe=!1;function on(e,n,t){for(t=t.child;t!==null;)Dc(e,n,t),t=t.sibling}function Dc(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Ti,t)}catch{}switch(t.tag){case 5:le||rt(t,n);case 6:var r=ee,i=Oe;ee=null,on(e,n,t),ee=r,Oe=i,ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?ul(e.parentNode,t):e.nodeType===1&&ul(e,t),tr(e)):ul(ee,t.stateNode));break;case 4:r=ee,i=Oe,ee=t.stateNode.containerInfo,Oe=!0,on(e,n,t),ee=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&uo(t,n,o),i=i.next}while(i!==r)}on(e,n,t);break;case 1:if(!le&&(rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){W(t,n,u)}on(e,n,t);break;case 21:on(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,on(e,n,t),le=r):on(e,n,t);break;default:on(e,n,t)}}function ms(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vv),n.forEach(function(r){var i=Nv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Oe=!1;break e;case 3:ee=u.stateNode.containerInfo,Oe=!0;break e;case 4:ee=u.stateNode.containerInfo,Oe=!0;break e}u=u.return}if(ee===null)throw Error(E(160));Dc(l,o,i),ee=null,Oe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(a){W(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Mc(n,e),n=n.sibling}function Mc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Be(e),r&4){try{Kt(3,e,e.return),Mi(3,e)}catch(y){W(e,e.return,y)}try{Kt(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:Pe(n,e),Be(e),r&512&&t!==null&&rt(t,t.return);break;case 5:if(Pe(n,e),Be(e),r&512&&t!==null&&rt(t,t.return),e.flags&32){var i=e.stateNode;try{Zt(i,"")}catch(y){W(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&na(i,l),Ml(u,o);var a=Ml(u,l);for(o=0;o<s.length;o+=2){var v=s[o],c=s[o+1];v==="style"?oa(i,c):v==="dangerouslySetInnerHTML"?ia(i,c):v==="children"?Zt(i,c):Io(i,v,c,a)}switch(u){case"input":Rl(i,l);break;case"textarea":ta(i,l);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var f=l.value;f!=null?lt(i,!!l.multiple,f,!1):d!==!!l.multiple&&(l.defaultValue!=null?lt(i,!!l.multiple,l.defaultValue,!0):lt(i,!!l.multiple,l.multiple?[]:"",!1))}i[ur]=l}catch(y){W(e,e.return,y)}}break;case 6:if(Pe(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){W(e,e.return,y)}}break;case 3:if(Pe(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:Pe(n,e),Be(e);break;case 13:Pe(n,e),Be(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(iu=Q())),r&4&&ms(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(le=(a=le)||v,Pe(n,e),le=a):Pe(n,e),Be(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!v&&e.mode&1)for(_=e,v=e.child;v!==null;){for(c=_=v;_!==null;){switch(d=_,f=d.child,d.tag){case 0:case 11:case 14:case 15:Kt(4,d,d.return);break;case 1:rt(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(y){W(r,t,y)}}break;case 5:rt(d,d.return);break;case 22:if(d.memoizedState!==null){ys(c);continue}}f!==null?(f.return=d,_=f):ys(c)}v=v.sibling}e:for(v=null,c=e;;){if(c.tag===5){if(v===null){v=c;try{i=c.stateNode,a?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=c.stateNode,s=c.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=la("display",o))}catch(y){W(e,e.return,y)}}}else if(c.tag===6){if(v===null)try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(y){W(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;v===c&&(v=null),c=c.return}v===c&&(v=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Pe(n,e),Be(e),r&4&&ms(e);break;case 21:break;default:Pe(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Oc(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zt(i,""),r.flags&=-33);var l=hs(e);co(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=hs(e);ao(e,u,o);break;default:throw Error(E(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hv(e,n,t){_=e,Fc(e)}function Fc(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fr;if(!o){var u=i.alternate,s=u!==null&&u.memoizedState!==null||le;u=Fr;var a=le;if(Fr=o,(le=s)&&!a)for(_=i;_!==null;)o=_,s=o.child,o.tag===22&&o.memoizedState!==null?xs(i):s!==null?(s.return=o,_=s):xs(i);for(;l!==null;)_=l,Fc(l),l=l.sibling;_=i,Fr=u,le=a}gs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):gs(e)}}function gs(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Mi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&es(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}es(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var v=a.memoizedState;if(v!==null){var c=v.dehydrated;c!==null&&tr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}le||n.flags&512&&so(n)}catch(d){W(n,n.return,d)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function ys(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function xs(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Mi(4,n)}catch(s){W(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){W(n,i,s)}}var l=n.return;try{so(n)}catch(s){W(n,l,s)}break;case 5:var o=n.return;try{so(n)}catch(s){W(n,o,s)}}}catch(s){W(n,n.return,s)}if(n===e){_=null;break}var u=n.sibling;if(u!==null){u.return=n.return,_=u;break}_=n.return}}var mv=Math.ceil,xi=ln.ReactCurrentDispatcher,tu=ln.ReactCurrentOwner,Ie=ln.ReactCurrentBatchConfig,D=0,b=null,X=null,ne=0,me=0,it=Tn(0),J=0,vr=null,Hn=0,Fi=0,ru=0,Xt=null,fe=null,iu=0,yt=1/0,Ke=null,wi=!1,fo=null,wn=null,Ar=!1,pn=null,Si=0,Yt=0,vo=null,Yr=-1,Jr=0;function se(){return D&6?Q():Yr!==-1?Yr:Yr=Q()}function Sn(e){return e.mode&1?D&2&&ne!==0?ne&-ne:bd.transition!==null?(Jr===0&&(Jr=ya()),Jr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ia(e.type)),e):1}function je(e,n,t,r){if(50<Yt)throw Yt=0,vo=null,Error(E(185));hr(e,t,r),(!(D&2)||e!==b)&&(e===b&&(!(D&2)&&(Fi|=t),J===4&&dn(e,ne)),he(e,r),t===1&&D===0&&!(n.mode&1)&&(yt=Q()+500,zi&&_n()))}function he(e,n){var t=e.callbackNode;bf(e,n);var r=ii(e,e===b?ne:0);if(r===0)t!==null&&Cu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Cu(t),n===1)e.tag===0?Zd(ws.bind(null,e)):Wa(ws.bind(null,e)),Xd(function(){!(D&6)&&_n()}),t=null;else{switch(xa(r)){case 1:t=Po;break;case 4:t=ma;break;case 16:t=ri;break;case 536870912:t=ga;break;default:t=ri}t=Vc(t,Ac.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ac(e,n){if(Yr=-1,Jr=0,D&6)throw Error(E(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=ii(e,e===b?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ei(e,r);else{n=r;var i=D;D|=2;var l=Lc();(b!==e||ne!==n)&&(Ke=null,yt=Q()+500,An(e,n));do try{xv();break}catch(u){jc(e,u)}while(1);Vo(),xi.current=l,D=i,X!==null?n=0:(b=null,ne=0,n=J)}if(n!==0){if(n===2&&(i=Ul(e),i!==0&&(r=i,n=po(e,i))),n===1)throw t=vr,An(e,0),dn(e,r),he(e,Q()),t;if(n===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!gv(i)&&(n=Ei(e,r),n===2&&(l=Ul(e),l!==0&&(r=l,n=po(e,l))),n===1))throw t=vr,An(e,0),dn(e,r),he(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:zn(e,fe,Ke);break;case 3:if(dn(e,r),(r&130023424)===r&&(n=iu+500-Q(),10<n)){if(ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(zn.bind(null,e,fe,Ke),n);break}zn(e,fe,Ke);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Ae(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mv(r/1960))-r,10<r){e.timeoutHandle=Kl(zn.bind(null,e,fe,Ke),r);break}zn(e,fe,Ke);break;case 5:zn(e,fe,Ke);break;default:throw Error(E(329))}}}return he(e,Q()),e.callbackNode===t?Ac.bind(null,e):null}function po(e,n){var t=Xt;return e.current.memoizedState.isDehydrated&&(An(e,n).flags|=256),e=Ei(e,n),e!==2&&(n=fe,fe=t,n!==null&&ho(n)),e}function ho(e){fe===null?fe=e:fe.push.apply(fe,e)}function gv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!$e(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~ru,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function ws(e){if(D&6)throw Error(E(327));ct();var n=ii(e,0);if(!(n&1))return he(e,Q()),null;var t=Ei(e,n);if(e.tag!==0&&t===2){var r=Ul(e);r!==0&&(n=r,t=po(e,r))}if(t===1)throw t=vr,An(e,0),dn(e,n),he(e,Q()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zn(e,fe,Ke),he(e,Q()),null}function lu(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(yt=Q()+500,zi&&_n())}}function Vn(e){pn!==null&&pn.tag===0&&!(D&6)&&ct();var n=D;D|=1;var t=Ie.transition,r=M;try{if(Ie.transition=null,M=1,e)return e()}finally{M=r,Ie.transition=t,D=n,!(D&6)&&_n()}}function ou(){me=it.current,U(it)}function An(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kd(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch($o(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:mt(),U(ve),U(oe),Yo();break;case 5:Xo(r);break;case 4:mt();break;case 13:U(B);break;case 19:U(B);break;case 10:Wo(r.type._context);break;case 22:case 23:ou()}t=t.return}if(b=e,X=e=En(e.current,null),ne=me=n,J=0,vr=null,ru=Fi=Hn=0,fe=Xt=null,Mn!==null){for(n=0;n<Mn.length;n++)if(t=Mn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Mn=null}return e}function jc(e,n){do{var t=X;try{if(Vo(),Qr.current=yi,gi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(Bn=0,Z=Y=H=null,Qt=!1,cr=0,tu.current=null,t===null||t.return===null){J=1,vr=n,X=null;break}e:{var l=e,o=t.return,u=t,s=n;if(n=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,v=u,c=v.tag;if(!(v.mode&1)&&(c===0||c===11||c===15)){var d=v.alternate;d?(v.updateQueue=d.updateQueue,v.memoizedState=d.memoizedState,v.lanes=d.lanes):(v.updateQueue=null,v.memoizedState=null)}var f=us(o);if(f!==null){f.flags&=-257,ss(f,o,u,l,n),f.mode&1&&os(l,a,n),n=f,s=a;var m=n.updateQueue;if(m===null){var y=new Set;y.add(s),n.updateQueue=y}else m.add(s);break e}else{if(!(n&1)){os(l,a,n),uu();break e}s=Error(E(426))}}else if($&&u.mode&1){var x=us(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ss(x,o,u,l,n),Bo(gt(s,u));break e}}l=s=gt(s,u),J!==4&&(J=2),Xt===null?Xt=[l]:Xt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=wc(l,s,n);bu(l,h);break e;case 1:u=s;var p=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var w=Sc(l,u,n);bu(l,w);break e}}l=l.return}while(l!==null)}$c(t)}catch(S){n=S,X===t&&t!==null&&(X=t=t.return);continue}break}while(1)}function Lc(){var e=xi.current;return xi.current=yi,e===null?yi:e}function uu(){(J===0||J===3||J===2)&&(J=4),b===null||!(Hn&268435455)&&!(Fi&268435455)||dn(b,ne)}function Ei(e,n){var t=D;D|=2;var r=Lc();(b!==e||ne!==n)&&(Ke=null,An(e,n));do try{yv();break}catch(i){jc(e,i)}while(1);if(Vo(),D=t,xi.current=r,X!==null)throw Error(E(261));return b=null,ne=0,J}function yv(){for(;X!==null;)Uc(X)}function xv(){for(;X!==null&&!Wf();)Uc(X)}function Uc(e){var n=Hc(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?$c(e):X=n,tu.current=null}function $c(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=dv(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(t=fv(t,n,me),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);J===0&&(J=5)}function zn(e,n,t){var r=M,i=Ie.transition;try{Ie.transition=null,M=1,wv(e,n,t,r)}finally{Ie.transition=i,M=r}return null}function wv(e,n,t,r){do ct();while(pn!==null);if(D&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(ed(e,l),e===b&&(X=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ar||(Ar=!0,Vc(ri,function(){return ct(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ie.transition,Ie.transition=null;var o=M;M=1;var u=D;D|=4,tu.current=null,pv(e,t),Mc(t,e),$d(Gl),li=!!Wl,Gl=Wl=null,e.current=t,hv(t),Gf(),D=u,M=o,Ie.transition=l}else e.current=t;if(Ar&&(Ar=!1,pn=e,Si=i),l=e.pendingLanes,l===0&&(wn=null),Xf(t.stateNode),he(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(wi)throw wi=!1,e=fo,fo=null,e;return Si&1&&e.tag!==0&&ct(),l=e.pendingLanes,l&1?e===vo?Yt++:(Yt=0,vo=e):Yt=0,_n(),null}function ct(){if(pn!==null){var e=xa(Si),n=Ie.transition,t=M;try{if(Ie.transition=null,M=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Si=0,D&6)throw Error(E(331));var i=D;for(D|=4,_=e.current;_!==null;){var l=_,o=l.child;if(_.flags&16){var u=l.deletions;if(u!==null){for(var s=0;s<u.length;s++){var a=u[s];for(_=a;_!==null;){var v=_;switch(v.tag){case 0:case 11:case 15:Kt(8,v,l)}var c=v.child;if(c!==null)c.return=v,_=c;else for(;_!==null;){v=_;var d=v.sibling,f=v.return;if(zc(v),v===a){_=null;break}if(d!==null){d.return=f,_=d;break}_=f}}}var m=l.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}_=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,_=o;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Kt(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,_=h;break e}_=l.return}}var p=e.current;for(_=p;_!==null;){o=_;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,_=g;else e:for(o=p;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Mi(9,u)}}catch(S){W(u,u.return,S)}if(u===o){_=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,_=w;break e}_=u.return}}if(D=i,_n(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Ti,e)}catch{}r=!0}return r}finally{M=t,Ie.transition=n}}return!1}function Ss(e,n,t){n=gt(t,n),n=wc(e,n,1),e=xn(e,n,1),n=se(),e!==null&&(hr(e,1,n),he(e,n))}function W(e,n,t){if(e.tag===3)Ss(e,e,t);else for(;n!==null;){if(n.tag===3){Ss(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=gt(t,e),e=Sc(n,e,1),n=xn(n,e,1),e=se(),n!==null&&(hr(n,1,e),he(n,e));break}}n=n.return}}function Sv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(J===4||J===3&&(ne&130023424)===ne&&500>Q()-iu?An(e,0):ru|=t),he(e,n)}function Bc(e,n){n===0&&(e.mode&1?(n=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):n=1);var t=se();e=tn(e,n),e!==null&&(hr(e,n,t),he(e,t))}function Ev(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bc(e,t)}function Nv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),Bc(e,t)}var Hc;Hc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,cv(e,n,t);de=!!(e.flags&131072)}else de=!1,$&&n.flags&1048576&&Ga(n,di,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Xr(e,n),e=n.pendingProps;var i=vt(n,oe.current);at(n,t),i=qo(null,n,r,e,i,t);var l=Zo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(l=!0,ci(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qo(n),i.updater=Oi,n.stateNode=i,i._reactInternals=n,eo(n,r,e,t),n=ro(null,n,r,!0,l,t)):(n.tag=0,$&&l&&Uo(n),ue(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Xr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Iv(r),e=ze(r,e),i){case 0:n=to(null,n,r,e,t);break e;case 1:n=fs(null,n,r,e,t);break e;case 11:n=as(null,n,r,e,t);break e;case 14:n=cs(null,n,r,ze(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),to(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),fs(e,n,r,i,t);case 3:e:{if(Ic(n),e===null)throw Error(E(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Ya(e,n),hi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=gt(Error(E(423)),n),n=ds(e,n,r,t,i);break e}else if(r!==i){i=gt(Error(E(424)),n),n=ds(e,n,r,t,i);break e}else for(ge=yn(n.stateNode.containerInfo.firstChild),ye=n,$=!0,Me=null,t=ba(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===i){n=rn(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return ec(n),e===null&&ql(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ql(r,i)?o=null:l!==null&&Ql(r,l)&&(n.flags|=32),kc(e,n),ue(e,n,o,t),n.child;case 6:return e===null&&ql(n),null;case 13:return Tc(e,n,t);case 4:return Ko(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ht(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),as(e,n,r,i,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,A(vi,r._currentValue),r._currentValue=o,l!==null)if($e(l.value,o)){if(l.children===i.children&&!ve.current){n=rn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ze(-1,t&-t),s.tag=2;var a=l.updateQueue;if(a!==null){a=a.shared;var v=a.pending;v===null?s.next=s:(s.next=v.next,v.next=s),a.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Zl(l.return,t,n),u.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(E(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Zl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ue(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=Te(i),r=r(i),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),cs(e,n,r,i,t);case 15:return Ec(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Xr(e,n),n.tag=1,pe(r)?(e=!0,ci(n)):e=!1,at(n,t),qa(n,r,i),eo(n,r,i,t),ro(null,n,r,!0,e,t);case 19:return _c(e,n,t);case 22:return Nc(e,n,t)}throw Error(E(156,n.tag))};function Vc(e,n){return ha(e,n)}function kv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new kv(e,n,t,r)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iv(e){if(typeof e=="function")return su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_o)return 11;if(e===Co)return 14}return 2}function En(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function qr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")su(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Xn:return jn(t.children,i,l,n);case To:o=8,i|=8;break;case kl:return e=ke(12,t,n,i|2),e.elementType=kl,e.lanes=l,e;case Il:return e=ke(13,t,n,i),e.elementType=Il,e.lanes=l,e;case Tl:return e=ke(19,t,n,i),e.elementType=Tl,e.lanes=l,e;case Zs:return Ai(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Js:o=10;break e;case qs:o=9;break e;case _o:o=11;break e;case Co:o=14;break e;case an:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=ke(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function jn(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function Ai(e,n,t,r){return e=ke(22,e,r,n),e.elementType=Zs,e.lanes=t,e.stateNode={isHidden:!1},e}function hl(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function ml(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Tv(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ji(0),this.expirationTimes=Ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function au(e,n,t,r,i,l,o,u,s){return e=new Tv(e,n,t,u,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=ke(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qo(l),e}function _v(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Wc(e){if(!e)return kn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(pe(t))return Va(e,t,n)}return n}function Gc(e,n,t,r,i,l,o,u,s){return e=au(t,r,!0,e,i,l,o,u,s),e.context=Wc(null),t=e.current,r=se(),i=Sn(t),l=Ze(r,i),l.callback=n??null,xn(t,l,i),e.current.lanes=i,hr(e,i,r),he(e,r),e}function ji(e,n,t,r){var i=n.current,l=se(),o=Sn(i);return t=Wc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ze(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=xn(i,n,o),e!==null&&(je(e,i,o,l),Gr(e,i,o)),o}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Es(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cu(e,n){Es(e,n),(e=e.alternate)&&Es(e,n)}function Cv(){return null}var Qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}Li.prototype.render=fu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));ji(e,n,null,null)};Li.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){ji(null,e,null,null)}),n[nn]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ea();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&ka(e)}};function du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ns(){}function Rv(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var a=Ni(o);l.call(a)}}var o=Gc(n,r,e,0,null,!1,!1,"",Ns);return e._reactRootContainer=o,e[nn]=o.current,lr(e.nodeType===8?e.parentNode:e),Vn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var a=Ni(s);u.call(a)}}var s=au(e,0,!1,null,null,!1,!1,"",Ns);return e._reactRootContainer=s,e[nn]=s.current,lr(e.nodeType===8?e.parentNode:e),Vn(function(){ji(n,s,t,r)}),s}function $i(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var s=Ni(o);u.call(s)}}ji(n,o,e,i)}else o=Rv(t,n,e,i,r);return Ni(o)}wa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jt(n.pendingLanes);t!==0&&(zo(n,t|1),he(n,Q()),!(D&6)&&(yt=Q()+500,_n()))}break;case 13:Vn(function(){var r=tn(e,1);if(r!==null){var i=se();je(r,e,1,i)}}),cu(e,1)}};Oo=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=se();je(n,e,134217728,t)}cu(e,134217728)}};Sa=function(e){if(e.tag===13){var n=Sn(e),t=tn(e,n);if(t!==null){var r=se();je(t,e,n,r)}cu(e,n)}};Ea=function(){return M};Na=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Al=function(e,n,t){switch(n){case"input":if(Rl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Pi(r);if(!i)throw Error(E(90));ea(r),Rl(r,i)}}}break;case"textarea":ta(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}};aa=lu;ca=Vn;var Pv={usingClientEntryPoint:!1,Events:[gr,Zn,Pi,ua,sa,lu]},zt={findFiberByHostInstance:Dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zv={bundleType:zt.bundleType,version:zt.version,rendererPackageName:zt.rendererPackageName,rendererConfig:zt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=va(e),e===null?null:e.stateNode},findFiberByHostInstance:zt.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{Ti=jr.inject(zv),Ge=jr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(n))throw Error(E(200));return _v(e,n,null,t)};we.createRoot=function(e,n){if(!du(e))throw Error(E(299));var t=!1,r="",i=Qc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=au(e,1,!1,null,null,t,!1,r,i),e[nn]=n.current,lr(e.nodeType===8?e.parentNode:e),new fu(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=va(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Vn(e)};we.hydrate=function(e,n,t){if(!Ui(n))throw Error(E(200));return $i(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!du(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Qc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Gc(n,null,e,1,t??null,i,!1,l,o),e[nn]=n.current,lr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Li(n)};we.render=function(e,n,t){if(!Ui(n))throw Error(E(200));return $i(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(E(40));return e._reactRootContainer?(Vn(function(){$i(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};we.unstable_batchedUpdates=lu;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ui(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return $i(e,n,t,!1,r)};we.version="18.2.0-next-9e3b772b8-20220608";function Kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)}catch(e){console.error(e)}}Kc(),Gs.exports=we;var Ov=Gs.exports,ks=Ov;yu.createRoot=ks.createRoot,yu.hydrateRoot=ks.hydrateRoot;const Dv=`float ease(float t) {
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
`,Mv=`#include config

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
`,Av=`#loopN2
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
#include complex

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
`,Lv=`const vec2 cone = vec2(1., 0);
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
`,Uv=`vec4 light(vec4 color, float ambient, float shininess) {
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
`,Jp=(e,n)=>{let t;return(...r)=>(clearTimeout(t),t=setTimeout(()=>e(...r),n),()=>clearTimeout(t))},Jt=(e,n=null,t=1,r=!1)=>{if(n===null&&(n=e,e=0),t===0)throw new Error("Step cannot be zero.");if(n<e&&t>0||n>e&&t<0){if(r)return[];t=-t}return new Array(Math.ceil((n-e)/t)).fill().map((i,l)=>e+l*t)},$v=(e,n)=>{let t=0;for(let r=0;r<e.length;r++)t+=e[r]*n[r];return t},Is=(e,n)=>{const t=[];for(let r=0;r<e.length;r++)t[r]=e[r]*n;return t},ki=e=>{const n=[];for(let t=0;t<e[0].length;t++){n.push([]);for(let r=0;r<e.length;r++)n[t].push(e[r][t])}return n},mo=e=>{for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)e[n][t]=Gv(e[n][t]);return e},De=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){t[r]=new Array(n[0].length);for(let i=0;i<n[0].length;i++){let l=0;for(let o=0;o<n.length;o++)l+=e[r][o]*n[o][i];t[r][i]=l}}return t},Bv=(e,n)=>{const t=new Array(e.length);for(let r=0;r<e.length;r++){let i=0;for(let l=0;l<e[0].length;l++)i+=e[r][l]*n[l];t[r]=i}return t},qp=(e,n)=>{for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length;r++)e[t][r]=n[t][r];return e},vu=e=>{const n=new Array(e.length);for(let t=0;t<e.length;t++)n[t]=new Array(e.length).fill(0),n[t][t]=e[t];return n},Ce=e=>{const n=new Array(e).fill(1);return vu(n)},Hv=e=>e.every((n,t)=>n.every((r,i)=>t===i||e[t][i]===0)),Vv=e=>{const n=e[0].length;let t=e.map(s=>s.slice()),r=Ce(n),i=1e3;for(;!Hv(t)&&i-- >0;){let s=0,a=1;for(let d=0;d<n;d++)for(let f=0;f<n;f++)d!==f&&be(t[d][f])>be(t[s][a])&&(s=d,a=f);const v=t[s][s]===t[a][a]?Bi(t[s][a])*Ue/4:.5*ep(2*t[s][a]/(t[s][s]-t[a][a])),c=Ce(n);c[a][a]=c[s][s]=qe(v),c[a][s]=c[s][a]=-Fe(v),c[a][s]*=-1,r=De(r,c),t=De(De(ki(c),t),c)}const l=t.map((s,a)=>be(s[a])<1e-8?0:s[a]),o=l.map((s,a)=>[s,a]).sort((s,a)=>a[0]-s[0]).map(s=>s[1]),u=ki(r);return{values:o.map(s=>l[s]),vectors:o.map(s=>u[s])}},Wv=e=>{const n=e.length,t=[];for(let r=0;r<n;r++)t.push([...e[r],...Ce(n)[r]]);for(let r=0;r<n;r++){const i=t[r][r];for(let l=r+1;l<n;l++){const o=t[l][r]/i;for(let u=r;u<2*n;u++)t[l][u]-=o*t[r][u]}}for(let r=n-1;r>=0;r--){const i=t[r][r];for(let l=r-1;l>=0;l--){const o=t[l][r]/i;for(let u=0;u<2*n;u++)t[l][u]-=o*t[r][u]}for(let l=n;l<2*n;l++)t[r][l]/=i}return t.map(r=>r.slice(n))},Gv=e=>be(e)<1e-9?0:e,Qv=e=>{const n=e.length,t=Ce(n),r=Ce(n);for(let i=0;i<n;i++){t[i][i]=e[i][i];for(let l=0;l<i;l++)t[i][i]-=r[i][l]**2*t[l][l];for(let l=i+1;l<n;l++){let o=0;for(let u=0;u<i;u++)o+=r[i][u]*r[l][u]*t[u][u];r[l][i]=(e[l][i]-o)/t[i][i]}}return mo(t),mo(r),{L:r,D:t}},ft=e=>{if(e.length===2)return[e[0][0],e[1][0],e[0][1],e[1][1]];if(e.length===3)return[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]];if(e.length===4)return[e[0][0],e[1][0],e[2][0],e[3][0],e[0][1],e[1][1],e[2][1],e[3][1],e[0][2],e[1][2],e[2][2],e[3][2],e[0][3],e[1][3],e[2][3],e[3][3]];if(e.length===5)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],e[0][4]],[[e[1][0],e[1][1],e[1][2],e[1][3]],e[1][4]],[[e[2][0],e[2][1],e[2][2],e[2][3]],e[2][4]],[[e[3][0],e[3][1],e[3][2],e[3][3]],e[3][4]],[[e[4][0],e[4][1],e[4][2],e[4][3]],e[4][4]]];if(e.length===6)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5]]]];if(e.length===7)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6]]]];if(e.length===8)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]]]];if(e.length===9)return[[[e[0][0],e[0][1],e[0][2],e[0][3]],[e[0][4],e[0][5],e[0][6],e[0][7]],e[0][8]],[[e[1][0],e[1][1],e[1][2],e[1][3]],[e[1][4],e[1][5],e[1][6],e[1][7]],e[1][8]],[[e[2][0],e[2][1],e[2][2],e[2][3]],[e[2][4],e[2][5],e[2][6],e[2][7]],e[2][8]],[[e[3][0],e[3][1],e[3][2],e[3][3]],[e[3][4],e[3][5],e[3][6],e[3][7]],e[3][8]],[[e[4][0],e[4][1],e[4][2],e[4][3]],[e[4][4],e[4][5],e[4][6],e[4][7]],e[4][8]],[[e[5][0],e[5][1],e[5][2],e[5][3]],[e[5][4],e[5][5],e[5][6],e[5][7]],e[5][8]],[[e[6][0],e[6][1],e[6][2],e[6][3]],[e[6][4],e[6][5],e[6][6],e[6][7]],e[6][8]],[[e[7][0],e[7][1],e[7][2],e[7][3]],[e[7][4],e[7][5],e[7][6],e[7][7]],e[7][8]],[[e[8][0],e[8][1],e[8][2],e[8][3]],[e[8][4],e[8][5],e[8][6],e[8][7]],e[8][8]]];throw new Error("Unsupported matrix size")},Kv=(e,n,t,r,i=1)=>{const l=i/Jc(e/2),o=1/(t-r),u=Ce(4);return u[0][0]=l/n,u[1][1]=l,u[2][2]=(r+t)*o,u[3][2]=-1,u[2][3]=2*r*t*o,u[3][3]=0,u},Xv=(e,n,t)=>{if(be(e[0]-n[0])<1e-4&&be(e[1]-n[1])<1e-4&&be(e[2]-n[2])<1e-4)return Ce(4);let r=e[0]-n[0],i=e[1]-n[1],l=e[2]-n[2],o=1/L(r*r+i*i+l*l);r*=o,i*=o,l*=o;let u=t[1]*l-t[2]*i,s=t[2]*r-t[0]*l,a=t[0]*i-t[1]*r;o=L(u*u+s*s+a*a),o?(o=1/o,u*=o,s*=o,a*=o):(u=0,s=0,a=0);let v=i*a-l*s,c=l*u-r*a,d=r*s-i*u;o=L(v*v+c*c+d*d),o?(o=1/o,v*=o,c*=o,d*=o):(v=0,c=0,d=0);const f=Ce(4);return f[0][0]=u,f[1][0]=v,f[2][0]=r,f[0][1]=s,f[1][1]=c,f[2][1]=i,f[0][2]=a,f[1][2]=d,f[2][2]=l,f[0][3]=-(u*e[0]+s*e[1]+a*e[2]),f[1][3]=-(v*e[0]+c*e[1]+d*e[2]),f[2][3]=-(r*e[0]+i*e[1]+l*e[2]),f},Yv=(e,n)=>n.some((t,r)=>t.some((i,l)=>r===l&&i===0))?Is(e,1/e[e.length-1]):Is(e,-1/L(be($v(Bv(n,e),e)))),Zp=(e,n)=>mo(e.map((t,r)=>t.map((i,l)=>i<0?-Zv(-i/10):i===0?-1:-qe(n[r][l]*Ue/i)))),Xc=e=>{const n=Vv(e);return{"+":n.values.filter(t=>t>0).length,"-":n.values.filter(t=>t<0).length,0:n.values.filter(t=>t===0).length,eigens:n}},Yc=(e,n=[],t=0,r=10)=>{n[t]=n[t]||[];for(let i=0;i<e.length;i++){const l=e.filter((o,u)=>u!==i).map(o=>o.filter((u,s)=>s!==i));n[t].push(Xc(l)),l.length>1&&t+1<r&&Yc(l,n,t+1,r)}return n},bp=e=>{const n=Xc(e),t=n.eigens,r=vu(t.values.map(u=>Bi(u))),i={eigens:t,gram:e,metric:r};if(n["-"]===0&&n[0]===0)return{...i,type:"finite",curvature:1};if(n["-"]===0&&n[0]>0)return{...i,type:"affine",curvature:0};if(n["-"]>1)return{...i,type:"hyperbolic",subtype:"superhyperbolic",level:n["-"],curvature:-1};const l=Yc(e,[],0,3),o=l[0];if(o.every(u=>u["-"]===0&&u[0]===0))return{...i,type:"hyperbolic",subtype:"compact",curvature:-1};if(o.every(u=>u["-"]===0))return{...i,type:"hyperbolic",subtype:"paracompact",curvature:-1};for(let u=1;u<l.length;u++)if(l[u].every(a=>a["-"]===0))return{...i,type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:u+1};return console.log("indefinite",l),{...i,type:"indefinite",curvature:-1}},go=1,Ts=e=>e.map((n,t)=>n.map((r,i)=>t===i&&r===0?go:r)),e0=(e,n)=>{const t=e.eigens,r=e.metric;if(n===!0){const{L:d,D:f}=Qv(e.gram);let m;if(f.some((y,x)=>isNaN(f[x][x])))console.warn("Can’t cholesky"),m=qv(e,n);else{const y=De(r,f).map((x,h)=>x.map((p,g)=>h===g?L(p):0));r.forEach((x,h)=>{x[h]===0&&(y[h][h]=go)}),m=De(d,y)}if(m){const y=De(m,Ts(r)),x=Wv(y);if(!x.some(h=>h.some(p=>isNaN(p))))return{normals:m,vertices:x}}console.warn("Can’t center")}const i=t.values.slice(),l=t.vectors.slice();if(n===!1){const d=Le(...i.filter(m=>m>0)),f=i.indexOf(d);[r[f][f],r[1][1]]=[r[1][1],r[f][f]],l.splice(1,0,l.splice(f,1)[0]),i.splice(f,1),i.splice(1,0,d)}i.forEach((d,f)=>{d===0&&(i[f]=.05)});const o=ki(l),u=vu(i),s=De(r,u).map((d,f)=>d.map((m,y)=>f===y?L(m):0));r.forEach((d,f)=>{d[f]===0&&(s[f][f]=go)});const a=s.map((d,f)=>d.map((m,y)=>f===y?m!==0?1/m:1:0)),v=De(o,s),c=De(De(Ts(r),a),ki(o));return{normals:v,vertices:c}},Jv=e=>e.sort((n,t)=>{const[r,i]=n,[l,o]=t;return r===0&&i===1?1:l===0&&o===1||r<2&&l>=2?-1:l<2&&r>=2?1:r<2&&l<2?i===o?l-r:i-o:r===l?o-i:l-r}),n0=(e,n)=>{const t=Jv(gl(Jt(e),2));if(n.metric.filter((r,i)=>n.metric[i][i]<0).length===1){const r=[...gl(Jt(e-1),2),...gl(Jt(e-1),2).map(([i,l])=>[l,i])].sort((i,l)=>i[0]-l[0]||(i[0]<i[1]?i[1]-l[1]:l[1]-i[1])).map(([i,l])=>[-i,-l]);if(t.length%2){const i=t.pop();t.push(...r,i)}else t.push(...r)}return{combinations:t,maxShift:~~tp(t.length/2)}},t0=(e,n,t,r,i)=>{const l=Ce(r);if(n>t.length-1||be(e)>1)return l;let[o,u]=t[n];if(o<0||u<0){const d=-o;o=-u,u=Jt(r).find(m=>i[m][m]<0);const f=.5*e*e;return l[d][d]=1-f,l[u][u]=1+f,l[d][o]=e,l[o][d]=-e,l[o][u]=e,l[u][o]=e,l[d][u]=f,l[u][d]=-f,l}if(i[o][o]*i[u][u]===0)return i[o][o]===0&&(l[u][o]=e),i[u][u]===0&&(l[o][u]=e),l;const s=i[o][o]*i[u][u],v=(s>0?Fe:bv)(e),c=L(1-s*v*v);return l[o][o]=c,l[u][u]=c,l[o][u]=-s*v,l[u][o]=v,l},qv=(e,n)=>{const t=e.gram,r=t.length,i=e.curvature;let l=null;const o=t.every((u,s)=>u.every((a,v)=>s===v||a<=-1));if(n||o){if(l=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const u=(t[0][1]+1)/2;return l[0][0]=L(u-t[0][1]),l[1][0]=-L(u-t[0][1]),l[0][1]=l[1][1]=L((i||1)*u),i===0&&(l[1][1]=.5),l}else if(r===3){const u=t[0][1],s=t[1][2],a=t[0][2],v=(u*u+s*s+a*a-2*u*s*a-1)/(u*u+s*s+a*a-2*u*s-2*u*a-2*s*a+2*u+2*s+2*a-3);return l[0][2]=l[1][2]=l[2][2]=L(i*v),l[2][1]=-L(1-v),l[1][1]=(s-v)/l[2][1],l[0][1]=(a-v)/l[2][1],l[1][0]=-L(1-l[1][1]**2-v),l[0][0]=L(1-l[0][1]**2-v),i===0&&(l[2][2]=.5),l}else if(r===4){const u=t[0][1],s=t[1][2],a=t[2][3],v=t[0][2],c=t[1][3],d=t[0][3],f=(u*u*a*a+s*s*d*d+v*v*c*c-u*u-s*s-a*a-v*v-c*c-d*d+2*u*c*d+2*u*s*v+2*s*a*c+2*a*v*d-2*s*v*c*d-2*u*s*a*d-2*u*a*v*c+1)/(2*(u*u*a+s*s*d+a*a*u+v*v*c+c*c*v+d*d*s-u*u-s*s-a*a-v*v-c*c-d*d-u*s*a-u*s*d-u*a*v-u*a*c-u*a*d-u*v*c-s*a*d-s*v*c-s*v*d-s*c*d-a*v*c-v*c*d+u*s*v+u*c*d+s*a*c+a*v*d+u*s+u*v+u*c+u*d+s*a+s*v+s*c+a*v+a*c+a*d+v*d+c*d-u-s-a-v-c-d+2));return l[0][3]=l[1][3]=l[2][3]=l[3][3]=L(i*f),l[3][2]=-L(1-f),l[2][2]=(a-f)/l[3][2],l[1][2]=(c-f)/l[3][2],l[0][2]=(d-f)/l[3][2],l[2][1]=-L(1-f-l[2][2]**2),l[1][1]=(s-f-l[1][2]*l[2][2])/l[2][1],l[0][1]=(v-f-l[0][2]*l[2][2])/l[2][1],l[1][0]=-L(1-f-l[1][1]**2-l[1][2]**2),l[0][0]=L(1-f-l[0][1]**2-l[0][2]**2),i===0&&(l[3][3]=.5),l}if(t.every((u,s)=>u.every((a,v)=>s===v||a===-1))){const u=[0];for(let s=1;s<r;s++)u[s]=(u[s-1]+1)/(3-u[s-1]);l[0][0]=1,l[1][0]=-1,l[0][1]=L(u[1]),l[1][1]=L(u[1]);for(let s=0;s<r;s++)for(let a=0;a<r;a++)s<2&&a<2||(l[s][a]=a<s-1?0:a===s-1?s*L(u[a]-u[a-1]):a<r-1?L(u[a]-u[a-1]):L(u[a-1]));return l}}},{abs:be,cos:qe,sin:Fe,tan:Jc,cosh:Zv,sinh:bv,acos:r0,acosh:i0,atan:ep,atan2:np,min:Le,max:Ot,round:l0,sqrt:L,sign:Bi,ceil:tp,floor:o0,log:u0,exp:s0,hypot:a0,pow:rp,PI:Ue}=Math,yo=Ue*2;function*ip(e,n){if(n<0||e.length<n)return;const t=Array.from(Array(n).keys());for(;;){yield t.map(i=>e[i]);let r=n-1;for(;r>=0&&t[r]>=e.length-n+r;)r--;if(r<0)return;for(let i=t[r]+1;r<n;r++,i++)t[r]=i}}const gl=(e,n=2)=>Array.from(ip(e,n)),qc=e=>String.fromCharCode(97+e),_s=e=>e.charCodeAt(0)-97;var Zc={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(of,function(){var t=function(){function r(f){return o.appendChild(f.dom),f}function i(f){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===f?"block":"none";l=f}var l=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++l%o.children.length)},!1);var u=(performance||Date).now(),s=u,a=0,v=r(new t.Panel("FPS","#0ff","#002")),c=r(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=r(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:r,showPanel:i,begin:function(){u=(performance||Date).now()},end:function(){a++;var f=(performance||Date).now();if(c.update(f-u,200),f>s+1e3&&(v.update(1e3*a/(f-s),100),s=f,a=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){u=this.end()},domElement:o,setMode:i}};return t.Panel=function(r,i,l){var o=1/0,u=0,s=Math.round,a=s(window.devicePixelRatio||1),v=80*a,c=48*a,d=3*a,f=2*a,m=3*a,y=15*a,x=74*a,h=30*a,p=document.createElement("canvas");p.width=v,p.height=c,p.style.cssText="width:80px;height:48px";var g=p.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=l,g.fillRect(0,0,v,c),g.fillStyle=i,g.fillText(r,d,f),g.fillRect(m,y,x,h),g.fillStyle=l,g.globalAlpha=.9,g.fillRect(m,y,x,h),{dom:p,update:function(w,S){o=Math.min(o,w),u=Math.max(u,w),g.fillStyle=l,g.globalAlpha=1,g.fillRect(0,0,v,y),g.fillStyle=i,g.fillText(s(w)+" "+r+" ("+s(o)+"-"+s(u)+")",d,f),g.drawImage(p,m+a,y,x-a,h,m,y,x-a,h),g.fillRect(m+x-a,y,a,h),g.fillStyle=l,g.globalAlpha=.9,g.fillRect(m+x-a,y,a,s((1-w/S)*h))}}},t})})(Zc);var lp=Zc.exports;const op=uf(lp),up=({radius:e=1,widthSegments:n=16,segments:t=16}={})=>{const r=[],i=[],l=[],o=[];let u=0;const s=[];for(let a=0;a<=t;a++){const v=[],c=a/t;let d=0;a===0?d=.5/n:a===t&&(d=-.5/n);for(let f=0;f<=n;f++){const m=f/n,y=[-e*qe(m*yo)*Fe(c*Ue),e*qe(c*Ue),e*Fe(m*yo)*Fe(c*Ue)];i.push(...y);const x=(y[0]**2+y[1]**2+y[2]**2)**-.5;l.push(...y.map(h=>h*x)),o.push(m+d,1-c),v.push(u++)}s.push(v)}for(let a=0;a<t;a++)for(let v=0;v<n;v++){const c=s[a][v+1],d=s[a][v],f=s[a+1][v],m=s[a+1][v+1];a!==0&&r.push(c,d,m),a!==t-1&&r.push(d,f,m)}return{vertices:i,normals:l,uvs:o,indices:r}},sp=({radius:e=null,radiusTop:n=1,radiusBottom:t=1,height:r=1,radialSegments:i=8,segments:l=1}={})=>{const o=[],u=[],s=[],a=[];e!==null&&(n=e,t=e);let v=0;const c=[],d=r/2,f=(t-n)/r;for(let m=0;m<=l;m++){const y=[],x=m/l,h=x*(t-n)+n;for(let p=0;p<=i;p++){const g=p/i,w=g*yo,S=Fe(w),I=qe(w),N=[h*S,-x*r+d,h*I];u.push(...N);const k=[S,f,I],F=(k[0]**2+k[1]**2+k[2]**2)**-.5;s.push(...k.map(z=>z*F)),a.push(g,1-x),y.push(v++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<l;y++){const x=c[y][m],h=c[y+1][m],p=c[y+1][m+1],g=c[y][m+1];o.push(x,h,g),o.push(h,p,g)}return{vertices:u,normals:s,uvs:a,indices:o}},ap=({segments:e=3}={})=>{const n=[],t=[],r=[],i=[],l=1/e;for(let o=0;o<e+1;o++)for(let u=0;u<o+1;u++)t.push((2*u-o)*l/2,o*l,0),r.push(0,0,1),i.push(l*u,1-l*o);for(let o=1;o<e+1;o++)for(let u=0;u<o;u++){const s=o*(o+1)/2+u,a=o*(o-1)/2+u;if(n.push(s,a,s+1),o<e){const v=(o+1)*(o+2)/2+u;n.push(v+1,s,s+1)}}return{vertices:t,normals:r,uvs:i,indices:n}},cp="dsbßx",fp=e=>e!==""&&e!=="x",Zr=e=>e==="d"||e==="b",bc=e=>e==="s"||e==="b",dp=e=>e==="ß",Lr={active:1,inactive:0,dual:"d",snub:"s",holosnub:"ß",dualsnub:"b",custom:.5,activeVoid:"x",void:""},ef=e=>e===0?"inactive":e===1?"active":e==="d"?"dual":e==="s"?"snub":e==="ß"?"holosnub":e==="b"?"dualsnub":e==="x"?"activeVoid":e===""?"void":"custom",vp=(e,n,t,r)=>{const i=[],l=[],o=[];for(let s=0;s<e.ranges.face[1];s++){const a=e.face[s],v=new Array(t).fill(0);for(let c=0;c<a.vertices.length;c++){const d=e.vertex[a.vertices[c]];for(let f=0;f<t;f++)v[f]+=d.vertex[f]}for(let c=0;c<t;c++)v[c]/=a.vertices.length;i.push({vertex:Yv(v,r),word:a.word})}const u=new Map;for(let s=0;s<e.ranges.face[1];s++)for(let a=s+1;a<e.ranges.face[1];a++){const v=e.face[s],c=e.face[a];v.vertices.filter(f=>c.vertices.includes(f)).length>1&&(l.push({start:s,end:a,word:v.word}),u.has(s)||u.set(s,[]),u.has(a)||u.set(a,[]),u.get(s).push(a),u.get(a).push(s))}for(let s=0;s<e.ranges.vertex[1];s++){const a=[];for(let d=0;d<e.ranges.face[1];d++)e.face[d].vertices.includes(s)&&a.push(d);const v=[a.shift()];let c=!1;for(;a.length>1;){const d=v[v.length-1],f=u.get(d);if(!f){c=!0;break}const m=a.find(y=>f.includes(y));if(!m){c=!0;break}a.splice(a.indexOf(m),1),v.push(m)}c||(v.push(a[0]),o.push({vertices:v,word:e.vertex[s].word}))}return{vertex:i,edge:l,face:o,ranges:{vertex:[0,i.length],edge:[0,l.length],face:[0,o.length]}}},pp=(e,n,t,r)=>{const i=new Map,l=[],o=[],u=[],s=n.map((c,d)=>bc(c)?qc(d):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const d=e.vertex[c];d.word.replace(a,"").length%2===1?(d.vertex=NaN,i.set(d.i,[])):l.push(d)}for(let c=0;c<e.ranges.edge[1];c++)if(i.has(e.edge[c].start)){const d=i.get(e.edge[c].start);d.push(e.edge[c].end),d.word||(d.word=e.edge[c].word),i.get(e.edge[c].start).push(e.edge[c].end)}else if(i.has(e.edge[c].end)){const d=i.get(e.edge[c].end);d.push(e.edge[c].start),d.word||(d.word=e.edge[c].word),i.get(e.edge[c].end).push(e.edge[c].start)}else o.push(e.edge[c]);const v=Array.from(i.keys());for(let c=0;c<i.size;c++){const d=v[c],f=i.get(d),m=i.get(d);for(let y=0;y<f.length;y++)for(let x=0;x<m.length;x++)f[y]<=m[x]||o.push({start:f[y],end:m[x],word:m.word})}for(let c=0;c<o.length;c++){const d=o[c];for(let f=0;f<2;f++){const m=f?"start":"end",y=d[m];for(let x=0;x<i.size&&!(v[x]>y);x++)d[m]--}}for(let c=0;c<e.ranges.face[1];c++){const d=e.face[c],f=[];for(let m=0;m<d.vertices.length;m++)i.has(d.vertices[m])||f.push(d.vertices[m]);u.push({...d,vertices:f})}for(let c=0;c<i.size;c++){const d=v[c],f=i.get(d);u.push({vertices:f,word:f.word})}for(let c=0;c<u.length;c++){const d=u[c];for(let f=0;f<d.vertices.length;f++){const m=d.vertices[f];for(let y=0;y<i.size&&!(v[y]>m);y++)d.vertices[f]--}}return{vertex:l,edge:o,face:u,ranges:{vertex:[0,l.length],edge:[0,o.length],face:[0,u.length]}}},hp=(e,n,t,r)=>{const i=[new Map,new Map],l=[],o=[],u=[],s=n.map((c,d)=>c==="ß"?qc(d):"").join(""),a=s.length>0?new RegExp(`[^${s}]`,"g"):null;for(let c=0;c<e.ranges.vertex[1];c++){const d=e.vertex[c];i[d.word.replace(a,"").length%2].set(d.i,[])}l.push(...e.vertex);const v=[new Map,new Map];for(let c=0;c<2;c++){for(let f=0;f<e.ranges.edge[1];f++)if(i[c].has(e.edge[f].start)){v[c].has(e.edge[f].start)||v[c].set(e.edge[f].start,[]);const m=i[c].get(e.edge[f].start);m.push(e.edge[f].end),m.word||(m.word=e.edge[f].word),v[c].get(e.edge[f].start).push(e.edge[f].end)}else if(i[c].has(e.edge[f].end)){v[c].has(e.edge[f].end)||v[c].set(e.edge[f].end,[]);const m=i[c].get(e.edge[f].end);m.push(e.edge[f].start),m.word||(m.word=e.edge[f].word),v[c].get(e.edge[f].end).push(e.edge[f].start)}else o.push(e.edge[f]);const d=Array.from(v[c].keys());for(let f=0;f<v[c].size;f++){const m=d[f],y=v[c].get(m),x=i[c].get(m);for(let h=0;h<y.length;h++)for(let p=0;p<x.length;p++)y[h]<=x[p]||o.push({start:y[h],end:x[p],word:x.word})}}for(let c=0;c<2;c++){const d=Array.from(v[c].keys());for(let f=0;f<e.ranges.face[1];f++){const m=e.face[f],y=[];for(let x=0;x<m.vertices.length;x++)i[c].has(m.vertices[x])||y.push(m.vertices[x]);u.push({...m,vertices:y})}for(let f=0;f<v[c].size;f++){const m=d[f],y=i[c].get(m);u.push({vertices:y,word:y.word})}}return{vertex:l,edge:o,face:u,ranges:{vertex:[0,l.length],edge:[0,o.length],face:[0,u.length]}}},mp=`#version 300 es
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
`,yp=`#version 300 es
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
`,xp=`#version 300 es
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
`,wp=`#version 300 es
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
`,Sp=`#version 300 es
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
`,yl={vertex:()=>up(),edge:e=>sp({segments:e}),face:e=>ap({segments:e})};function Ep(e){return{meshes:["vertex","edge","face"],...Sl(e,"vertex",Sp,wp,yl.vertex,1024,e.dimensions,e.showVertices),...Sl(e,"edge",gp,mp,yl.edge,1024,e.dimensions,e.showEdges,["position","target"]),...Sl(e,"face",xp,yp,yl.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].changeArity(n)},updateGeometries(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].updateGeometry(n)},recompilePrograms(n){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].recompileProgram(n)},updateUniforms(n,t=!1,r=null){for(let i=0;i<this.meshes.length;i++){const l=this.meshes[i],o=this[l];if(!t){o.uniforms.curvature.update(n.spaceType.curvature),o.uniforms.metric.update(ft(n.spaceType.metric)),o.uniforms.matrix.update(ft(n.matrix));for(let u=4;u<=n.dimensions;u++)o.uniforms[`fov${u}`].update(1/Jc(Ue*n[`fov${u}`]*.5/180));o.uniforms.segments.update(n.spaceType.curvature&&n.curve?n.segments:1),l==="vertex"?o.uniforms.thickness.update(n.vertexThickness):l==="edge"?o.uniforms.thickness.update(n.edgeThickness):o.uniforms.opacity.update(Ln[n.ambiance].opacity)}o.uniforms.viewProjection.update(n.camera.viewProjection),o.uniforms.zoom.update(t?r:n.zoom),Ln[n.ambiance].lighting&&o.uniforms.eye.update(n.camera.eye)}},plotType(n,t,r,i,l=null){const o=this[t];l=l||i;const{dimensions:u}=n,s=Ln[n.ambiance],[a,v]=r;let c=a,d=v;if(t==="face"){let y=0;for(let x=0;x<a;x++){const h=l[x].vertices.length;y+=h<3?0:h===3?1:h}c=y;for(let x=a;x<v;x++){const h=l[x].vertices.length;y+=h<3?0:h===3?1:h}d=y}o.instances<d&&o.extendAttributes(d),o.count=d;const f=u>4?9:u;let m=c;for(let y=a;y<v;y++){let x=[];const h=l[y];if(t==="vertex")x.push({...h,position:h.vertex,type:t});else if(t==="edge")x.push({...h,position:i[h.start].vertex,target:i[h.end].vertex,type:t});else{if(h.vertices.length<3)continue;if(h.vertices.length===3)x.push({...h,position:i[h.vertices[0]].vertex,target:i[h.vertices[1]].vertex,center:i[h.vertices[2]].vertex,parity:0});else{const p=new Array(h.vertices.length);for(let w=0;w<h.vertices.length;w++)p[w]=i[h.vertices[w]].vertex;const g=new Array(u).fill(0);for(let w=0;w<p.length;w++){const S=p[w];for(let I=0;I<u;I++)g[I]+=S[I]}for(let w=0;w<u;w++)g[w]/=p.length;for(let w=0;w<p.length;w++){const S={...h,position:p[w],target:p[(w+1)%p.length],center:g,parity:w%2};h.word.length%2===(n.spaceType.curvature>0?0:1)&&([S.position,S.target]=[S.target,S.position]),x.push(S)}}}for(let p=0;p<x.length;p++){const g=x[p];for(let S=0;S<u;S++)for(let I=0;I<o.varying.length;I++){const N=o.varying[I];o.attributes[N].data[m*f+S]=g[N][S]}const w=s.color(g,t,n);o.attributes.color.data[m*3+0]=w[0],o.attributes.color.data[m*3+1]=w[1],o.attributes.color.data[m*3+2]=w[2],m++}for(let p=0;p<o.varying.length;p++){const g=o.varying[p];o.attributes[g].update(c,d)}o.attributes.color.update(c,d)}},preprocess(n,t){return n.mirrors.some(r=>bc(r))&&(t=pp(t,n.mirrors,n.dimensions,n.spaceType.metric)),n.mirrors.some(r=>dp(r))&&(t=hp(t,n.mirrors,n.dimensions,n.spaceType.metric)),n.mirrors.some(r=>Zr(r))&&(t=vp(t,n.mirrors,n.dimensions,n.spaceType.metric)),t},plot(n,t){let r=n.face,i=t;t.face[1]===n.face.length&&n.partial&&(r=r.concat(n.partial),i={...t,face:[t.face[0],t.face[1]+n.partial.length]});const l={vertex:n.vertex,edge:n.edge,face:r,ranges:i},{vertex:o,edge:u,face:s,ranges:a}=this.preprocess(n,l);for(let v=0;v<this.meshes.length;v++){const c=this.meshes[v];this[c].visible&&this.plotType(n,c,a[c],o,c!=="vertex"?c==="face"?s:u:null)}}}}const Np=`#version 300 es
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
`,kp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Ip=`#version 300 es
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
`,Tp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,_p=`#version 300 es
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
`,Cp=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Rp=`#version 300 es
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
`,Op=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function Dp(e){return{...Mt(e,"oit",Pp,Rp,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Mt(e,"down",Cp,_p,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Mt(e,"up",Op,zp,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Mt(e,"afterImage",kp,Np,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Mt(e,"bloom",Tp,Ip,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Mp(e){const{gl:n}=e,t=Ln[e.ambiance],r=e.msaa?Le(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),El(e,e.rb.base,n.RGBA8,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),El(e,e.rb.depth,n.DEPTH_COMPONENT24,r),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(n.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(n.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),t.opacity<1&&t.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),r?(e.rb.depth_copy=n.createRenderbuffer(),El(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.textures.oitAccum=un(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=un(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(n.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(n.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(n.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(n.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),t.afterImage&&(e.fb.afterImage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=un(e,n.RGBA8),e.textures.afterImageScreen=un(e,n.RGBA8),e.textures.afterImageOutScreen=un(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let i=0;i<e.textures.kawase.length;i++)n.deleteTexture(e.textures.kawase[i].texture);e.textures.kawase=null}if(e.textures.blur&&(n.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(n.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),t.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let i=0;i<t.glow.steps;i++)e.textures.kawase[i]=un(e,n.RGBA8,t.glow.pow**-i);e.textures.blur=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=un(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.bloom.texture,0)}}const nf=window.location.search.includes("stats");let br;nf&&(br=new op,br.dom.id="stats",document.body.appendChild(br.dom));const c0=e=>{const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const t=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:t},!t){console.error("Unable to initialize WebGL. Your browser may not support it.");return}t.getExtension("EXT_color_buffer_float"),t.enable(t.DEPTH_TEST);const r={zoom:1,fov:Ue/3,position:[0,0,-e.zoom],update(){const a=t.canvas.clientWidth/t.canvas.clientHeight;this.zoom=Le(t.canvas.clientWidth/t.canvas.clientHeight,1),this.eye=[0,0,this.position[2]];const v=Xv(this.eye,[0,0,0],[0,1,0]),c=Kv(this.fov,a,.01,1e3,this.zoom);this.viewProjection=ft(De(c,v))}};r.update();const i=Dp(e),l=Ep(e),o={base:t.createRenderbuffer(),depth:t.createRenderbuffer()},u={base:t.createFramebuffer()};return{...e,gl:t,camera:r,meshes:l,passes:i,rb:o,fb:u,textures:{}}},f0=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},d0=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const t=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,t),document.title=`Coxeter Explorer - ${e.spaceType.type==="finite"?"S":e.spaceType.type==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},v0=(e,n=null)=>{e.camera.fov=e.fov3?Ue*e.fov3/180:1,e.camera.position[2]=n===null?-e.zoom:-n,e.camera.update(),e.meshes.updateUniforms(e,!0,n)},p0=e=>{const n=Ln[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.down.uniforms.offset.update(n.glow.offset.down),e.passes.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterImage.uniforms.strength.update(n.afterImage)},Fp=e=>{nf&&br.update();const{gl:n}=e,t=e.msaa?Le(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=Ln[e.ambiance];jp(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Mp(e),e.camera.update(),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.render(e),e.meshes.edge.render(e),e.meshes.face.visible&&r.opacity<1&&r.transparency==="oit"?(t&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):(r.opacity<1&&r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),e.meshes.face.render(e));const i=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let l=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?l=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let o=0;o<r.glow.steps;o++){const u=o===0?l:e.textures.kawase[o-1],s=e.textures.kawase[o];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let o=r.glow.steps-1;o>=0;o--){const u=e.textures.kawase[o],s=o===0?e.textures.blur:e.textures.kawase[o-1];n.viewport(0,0,s.width,s.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,l.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=Fp;const Ap={globals:Mv,dimensions:Fv,project:jv,helpers:Av,complex:Lv,ease:Dv,lighting:Uv},xl=(e,n,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e),He=(e,n,t)=>{let r,i,l;if(n===0)r=i=l=t;else{const o=t<.5?t*(1+n):t+n-t*n,u=2*t-o;r=xl(u,o,e+1/3),i=xl(u,o,e),l=xl(u,o,e-1/3)}return[r,i,l]},jp=(e,n)=>{n=n||1,n=Math.max(0,n);const t=e.clientWidth*n|0,r=e.clientHeight*n|0;return e.width!==t||e.height!==r?(e.width=t,e.height=r,!0):!1},wl=(e,n)=>e.replace(/\bvecN\b/g,`vec${n}`).replace(/\bmatN\b/g,`mat${n}`).replace(/\bfovN\b/g,`fov${n}`).replace(/\bvecN_1\b/g,`vec${n-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${n}`).replace(/\b_Nf_\b/g,`${n}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${n}`),Lp=(e,n)=>wl(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(t,r,i)=>{const l=[];for(let o=r;o<=n;o++)l.push(wl(i.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(u,s,a,v,c)=>s===`${o}`?wl(a,o):c||""),o));return l.join(`
`)}),n),Cs=(e,n,t)=>{var o;const r=Ln[e.ambiance];let i="";r.lighting&&(i+=`#define LIGHTING ${Wp.indexOf(r.lighting)}
`);const l=e.easing==="auto"?((o=e.spaceType)==null?void 0:o.type)==="hyperbolic"&&e.projection4!=="inverted"?"quintic":"linear":e.easing;i+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)i+=`#define PROJECTION${u} ${Hp.indexOf(e[`projection${u}`])-1}
`;return i+=`#define EASING ${Vp.indexOf(l)}
`,r.opacity<1&&r.transparency==="oit"&&(i+=`#define OIT
`),Object.entries({...Ap,config:i}).forEach(([u,s])=>{n=n.replace(`#include ${u}`,s),t=t.replace(`#include ${u}`,s)}),[n,t].map(u=>Lp(u,e.dimensions))},Ur=(e,n,t,r,i)=>{if(e.gl.shaderSource(i,r),e.gl.compileShader(i),!e.gl.getShaderParameter(i,e.gl.COMPILE_STATUS)){const o=e.gl.getShaderInfoLog(i);return console.error(`An error occurred compiling the ${n}->${t} shader: ${o}`,{shaderSource:r}),o}},Rs=(e,n,t)=>{const{gl:r}=e;if(r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const l=r.getProgramInfoLog(t);return console.error(`Unable to initialize the ${n} shader program: ${l}`),l}},tf=(e,n,t,r,i=[])=>{const{gl:l}=e,o=l.createProgram(),u=l.createShader(l.VERTEX_SHADER),s=l.createShader(l.FRAGMENT_SHADER);if(Ur(e,n,"vertex",t,u)||Ur(e,n,"fragment",r,s)||(l.attachShader(o,u),l.attachShader(o,s),Rs(e,n,o)))return;const a={program:o,vertexShader:u,fragmentShader:s,uniformsDef:i,recompile(v,c,d,f=null){Ur(v,n,"vertex",c,this.vertexShader)||Ur(v,n,"fragment",d,this.fragmentShader)||Rs(v,n,this.program)||(f&&(this.uniformsDef=f),this.bindUniforms(v))},bindUniforms(v){this.uniforms={},this.uniformsDef.forEach(({name:c,type:d,value:f})=>{this.uniforms[c]=Up(v,this.program,c,d),this.uniforms[c].update(f)})}};return a.bindUniforms(e),a},Dt=(e,n,t,r,i,l=null,o=null)=>{const{gl:u}=e;o=o||u.FLOAT;const s=o===u.FLOAT?4:2,a={name:t,mesh:n,indices:rf,instances:l,data:i,size:r,type:o,update(v=null,c=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),v===null&&c===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):u.bufferSubData(u.ARRAY_BUFFER,v*this.size*s,this.data,v*this.size,(c-v)*this.size)},extend(v,c,d=!1){if(u.bindVertexArray(this.mesh.vao),this.size=v,this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const f=v>4?3:1;this.name==="target"&&(this.location=v>4?6:4),this.name==="center"&&(this.location=v>4?9:5);for(let m=0;m<f;m++)u.enableVertexAttribArray(this.location+m);for(let m=0;m<f;m++)u.vertexAttribPointer(this.location+m,v/f,this.type,!1,v*s,v/f*m*s);if(this.instances)for(let m=0;m<f;m++)u.vertexAttribDivisor(this.location+m,this.instances);c&&(d&&c.length>=this.data.length&&c.set(this.data),this.data=c),this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const v=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,v),v}};return a.buffer=u.createBuffer(),a.extend(r),a},rf=(e,n,t)=>{const{gl:r}=e;r.bindVertexArray(n);const i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{buffer:i,vao:n,indices:t,count:t.length,update(l){r.bindVertexArray(this.vao),this.indices=l,this.count=l.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,l,r.STATIC_DRAW)}}},Up=(e,n,t,r)=>{const{gl:i}=e;return{program:n,update(o){if(i.useProgram(this.program),r.startsWith("m")){const u=parseInt(r.slice(1,2));if(u>4)for(let s=0;s<u;s++){const a=i.getUniformLocation(n,`${t}.c${s+1}.v`);if(a!==null&&i.uniform4fv(a,o[s][0]),u-4===1){const v=i.getUniformLocation(n,`${t}.c${s+1}.u`);v!==null&&i.uniform1f(v,o[s][1])}else if(u-4>1){const v=i.getUniformLocation(n,`${t}.c${s+1}.u`);if(v!==null&&i[`uniform${Le(u-4,4)}fv`](v,o[s][1]),u-8===1){const c=i.getUniformLocation(n,`${t}.c${s+1}.t`);c!==null&&i.uniform1f(c,o[s][2])}}}else{const s=i.getUniformLocation(n,t);s!==null&&i[`uniformMatrix${r.slice(1)}`](s,!1,o)}}else{const u=i.getUniformLocation(n,t);u!==null&&i[`uniform${r}`](u,o)}},get(){i.useProgram(this.program);const o=i.getUniformLocation(n,t);if(o!==null)return i.getUniform(this.program,o)}}},un=(e,n,t=null)=>{const{gl:r}=e,i=t?~~(t*r.drawingBufferWidth):r.drawingBufferWidth,l=t?~~(t*r.drawingBufferHeight):r.drawingBufferHeight,o=r.createTexture();return r.bindTexture(r.TEXTURE_2D,o),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,t?r.LINEAR:r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texStorage2D(r.TEXTURE_2D,1,n,i,l),{texture:o,width:i,height:l}},Mt=(e,n,t,r,i=[])=>{const l={name:n,vertex:t,fragment:r,...tf(e,n,t,r,i),recompileProgram(o){this.recompile(o,this.vertex,this.fragment,i)}};return{[n]:l}},Sl=(e,n,t,r,i,l,o,u=!0,s=["position"])=>{const{gl:a}=e,v=i(e.curve?e.segments:1),c=f=>[{name:"viewProjection",type:"m4fv",value:ft(Ce(4))},{name:"matrix",type:`m${f.dimensions}fv`,value:ft(f.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${f.dimensions}fv`,value:ft(Ce(f.dimensions))},{name:"curvature",type:"1f",value:0},{name:"zoom",type:"1f",value:1},{name:"segments",type:"1f",value:f.curve?f.segments:1},...["vertex","edge"].includes(n)?[{name:"thickness",type:"1f",value:0}]:[{name:"opacity",type:"1f",value:0}],...Jt(4,f.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:f[`fov${m}`]}))];o=o>4?9:o;const d={attributes:{},varying:s,vertex:t,type:n,fragment:r,...tf(e,n,...Cs(e,t,r),c(e)),recompileProgram(f){const[m,y]=Cs(f,this.vertex,this.fragment);this.recompile(f,m,y,c(f))},changeArity(f){f=f>4?9:f,this.arity!==f&&(this.arity=f,s.forEach(m=>{this.attributes[m].extend(f,new Float32Array(this.instances*f),!1)}))},extendAttributes(f){this.instances=f,s.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(f*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(f*3),!0)},updateGeometry(f){const m=i(f.spaceType.curvature&&f.curve?f.segments:1);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},render(f){!this.count||!this.visible||(a.useProgram(this.program),a.bindVertexArray(this.vao),a.drawElementsInstanced(a.TRIANGLES,this.indices.count,a.UNSIGNED_SHORT,0,this.count))}};return d.visible=u,d.vao=a.createVertexArray(),d.indices=rf(e,d.vao,new Uint16Array(v.indices)),d.attributes.vertex=Dt(e,d,"vertex",3,new Float32Array(v.vertices)),d.attributes.uv=Dt(e,d,"uv",2,new Float32Array(v.uvs)),d.attributes.normal=Dt(e,d,"normal",3,new Float32Array(v.normals)),d.attributes.color=Dt(e,d,"color",3,new Float32Array(l*3),1),s.forEach(f=>{d.attributes[f]=Dt(e,d,f,o,new Float32Array(l*o),1)}),d.arity=o,d.instances=l,d.count=0,{[n]:d}},El=(e,n,t,r)=>{const{gl:i}=e;i.bindRenderbuffer(i.RENDERBUFFER,n),r?i.renderbufferStorageMultisample(i.RENDERBUFFER,r,t,i.drawingBufferWidth,i.drawingBufferHeight):i.renderbufferStorage(i.RENDERBUFFER,t,i.drawingBufferWidth,i.drawingBufferHeight),i.bindRenderbuffer(i.RENDERBUFFER,null)},$p=document.createElement("canvas"),Ps=$p.getContext("webgl2"),Bp=Ps.getParameter(Ps.MAX_SAMPLES),h0="xyzwvutsrqponmlkjihgfedcba",Hp=["perspective","stereographic","orthographic","klein","inverted","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Vp=["auto","linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],m0=["toddcoxeter","knuthbendix","fundamental"],Wp=["lambert","phong","blinn-phong","toon","oren-nayar"],Ln={neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.05,transparency:"blend",color:({word:e})=>He(e.length*.17%1,.5,.6)},synthwave:{background:[...He(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},exposure:.75,lighting:!1,opacity:.12,afterImage:.7,transparency:"blend",color:({word:e})=>He((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],glow:!1,lighting:"blinn-phong",opacity:.4,transparency:"oit",color:({word:e})=>He(e.length*.03%1,1,.8)},shape:{background:[1,1,1,1],glow:!1,lighting:"lambert",opacity:.75,transparency:"oit",color:({word:e,len:n,vertices:t},r)=>r==="face"?He(((n||t.length)-2)*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],glow:!1,lighting:"toon",opacity:.6,transparency:"blend",color:({word:e},n,{dimensions:t,showFaces:r})=>{const i=e.length?_s(e[e.length-1])/t:0;return He(i%1,1,n==="face"?.6:r?.05:.8)}},catpuccin:{background:[...He(240/360,.23,.09),1],glow:!1,lighting:"lambert",opacity:.6,transparency:"oit",color:({word:e,parity:n},t,{dimensions:r,showFaces:i})=>{const l=[[.027777777777777776,.56,.91],[0,.59,.88],[.8777777777777778,.72,.86],[.7416666666666667,.84,.81],[.9527777777777777,.81,.75],[.9722222222222222,.65,.77],[.06388888888888888,.92,.75],[.11388888888888889,.86,.83],[.3194444444444444,.54,.76],[.4722222222222222,.57,.73],[.525,.71,.73],[.5527777777777778,.76,.69],[.6027777777777777,.92,.76],[.6444444444444445,.97,.85]],o=e.split("").map(s=>_s(s)).reduce((s,a)=>s+a,0),u=l[o%l.length];return t==="face"&&n&&(u[2]*=.9),He(...u)}},pure:{background:[0,0,0,1],glow:!1,lighting:"lambert",opacity:1,color:({word:e})=>He(e.length*.03%1,.75,.7)},plain:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n,{dimensions:t,showFaces:r})=>He(e.length*.06%1,1,n==="face"?.6:r?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],glow:!1,lighting:!1,opacity:1,color:({word:e},n)=>n==="face"?new Array(3).fill(1-rp(.9,e.length+1)):[0,0,0]}},zs={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],matrix:[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,easing:"auto",showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"toddcoxeter",controls:"space",ambiance:"neon",centered:!1,zoom:1.5,msaa:window.devicePixelRatio<=1,msaaSamples:Bp,subsampling:window.devicePixelRatio},Gp=e=>{if(e.coxeter.length!==e.dimensions||e.coxeter.some(n=>n.length!==e.dimensions)){const n=e.coxeter;e.coxeter=new Array(e.dimensions).fill().map((t,r)=>new Array(e.dimensions).fill().map((i,l)=>r===l?1:r===l+1||r+1===l?3:2));for(let t=0;t<Le(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.coxeter[t][r]=n[t][r],e.coxeter[r][t]=n[t][r]}if(e.mirrors.length!==e.dimensions){const n=e.mirrors;e.mirrors=new Array(e.dimensions).fill(0);for(let t=0;t<Le(n.length,e.dimensions);t++)e.mirrors[t]=n[t]}if(e.stellation.length!==e.dimensions||e.stellation.some(n=>n.length!==e.dimensions)){const n=e.stellation;e.stellation=new Array(e.dimensions).fill().map(()=>new Array(e.dimensions).fill(1));for(let t=0;t<Le(n.length,e.dimensions);t++)for(let r=0;r<t;r++)e.stellation[t][r]=n[t][r],e.stellation[r][t]=n[r][t]}return e},g0=(e,n=[],t)=>{const r={...e},i=[];Object.entries(r).forEach(([l,o])=>{typeof zs[l]=="number"||l.startsWith("fov")?(o===""||isNaN(o))&&(delete r[l],i.push(l)):Array.isArray(zs[l])&&(Array.isArray(o[0])?o.find(u=>u.find(s=>o===""||l!=="coxeter"&&isNaN(s)))&&(delete r[l],i.push(l)):o.find(u=>o===""||isNaN(u)&&!(l==="mirrors"&&cp.includes(u)))&&(delete r[l],i.push(l)))}),i.includes("coxeter")||Gp(r),(r.matrix.length!==r.dimensions||r.matrix.some(l=>l.length!==r.dimensions))&&(r.matrix=Ce(r.dimensions));for(let l=3;l<=9;l++)l<=r.dimensions&&!r[`fov${l}`]&&!i.includes(`fov${l}`)&&(r[`fov${l}`]=90),l<=r.dimensions&&!r[`projection${l}`]&&!i.includes(`projection${l}`)&&(r[`projection${l}`]="perspective"),l>r.dimensions&&`fov${l}`in r&&delete r[`fov${l}`],l>r.dimensions&&`projection${l}`in r&&delete r[`projection${l}`];if(t&&n.includes("dimensions")){const l=Bi(t.dimensions-r.dimensions);for(let o=4;o<=r.dimensions;o++)r[`projection${o}`]=t[`projection${o+l}`];r.dimensions!==3&&(r.projection3="perspective"),r.dimensions===4&&t.dimensions===3&&t.projection3==="perspective"&&(r.projection4="stereographic")}return{params:r,badParams:i}},Qp=(e,n,t,r,i)=>{let l=!0,o=0,u=1;if(i&&["∞","inf","Infinity"].includes(e))e="∞",o=0;else if(i&&e.endsWith("i")){const s=e.slice(0,-1);o=-(s===""?1:parseInt(s)),e=`${o===-1?"":-o}i`}else if(e.includes("/")){const[s,a]=e.split("/");o=s===""?"":parseInt(s),u=a===""?"":parseInt(a),u===1?e=`${o}`:e=`${o}/${u}`}else o=e===""?"":parseInt(r)===parseFloat(r)?parseInt(e):parseFloat(e);return l=!(i&&o===1||o===""||isNaN(o)||o<n||o>t||r%1===0&&o%r!==0||isNaN(u)||u===""||u<n||u>t||r%1===0&&u%r!==0),{valid:l,raw:e,value:o,fraction:u}};function Kp({name:e,label:n,min:t=0,max:r=1/0,step:i=1,value:l,coxeter:o,fraction:u,fractionName:s,toggler:a,togglerName:v,onChange:c,...d}){o&&(t=-1/0);const f=K.useCallback(()=>l<0&&o?`${l===-1?"":-l}i`:l===0&&o?"∞":s&&u>1?`${l}/${u}`:`${l}`,[o,u,s,l]),[m,y]=K.useState(f);K.useEffect(()=>{y(f())},[o,f,u,s,l]);const[x,h]=K.useState(!0),p=K.useCallback(N=>{const k=Qp(N,t,r,i,o);y(k.raw),h(k.valid),k.valid&&(c(e,k.value),s&&c(s,k.fraction))},[o,s,r,t,e,c,i]),g=K.useCallback(()=>{if(!x){p(o?"3":`${t}`);return}if(o){if(m==="2"){p("∞");return}if(m==="∞"){p("i");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=(N===""?1:parseInt(N))+1;p(`${k}i`);return}}if(m!==`${t}`)if(m.includes("/"))p((parseInt(m.split("/")[0])-i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))-i;i>0&&i<1?p(N.toFixed(i.toString().split(".")[1].length)):p(N.toString())}},[o,t,m,i,p,x]),w=K.useCallback(()=>{if(!x){p(o?"3":`${t}`);return}if(o){if(m==="∞"){p("2");return}if(m==="i"){p("∞");return}if(m.endsWith("i")){const N=m.slice(0,-1);let k=parseInt(N)-1;k===1&&(k=""),p(`${k}i`);return}}if(m!==`${r}`)if(m.includes("/"))p((parseInt(m.split("/")[0])+i).toString());else{const N=(parseInt(i)===parseFloat(i)?parseInt(m):parseFloat(m))+i;i>0&&i<1?p(N.toFixed(i.toString().split(".")[1].length)):p(N.toString())}},[o,r,t,m,i,p,x]),S=N=>{const k=N.target.value;p(k)},I=N=>{c(N.target.name,N.target.checked)};return T.jsxs("label",{className:`number ${x?"valid":"invalid"}`,children:[n&&T.jsx("span",{className:"number-label",children:n}),v&&T.jsx("input",{type:"checkbox",name:v,checked:a,onChange:I}),(!v||a)&&T.jsxs("div",{className:"number-control",children:[T.jsx("input",{type:"text",name:e,value:m,style:{width:`${m.length+.25}ch`},onChange:S,...d}),T.jsx("button",{className:"plusminus minus",onClick:g,tabIndex:-1,children:"−"}),T.jsx("button",{className:"plusminus plus",onClick:w,tabIndex:-1,children:"+"})]})]})}function Xp({i:e,j:n,value:t,stellation:r,onChange:i}){return T.jsx("div",{className:"coxeter-value",children:T.jsx(Kp,{name:`coxeter-${e}-${n}`,value:t,onChange:i,coxeter:!0,fraction:r,fractionName:`stellation-${e}-${n}`})})}function Os({type:e}){return T.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:T.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:e==="bold"?3:1,stroke:"currentColor",strokeDasharray:e==="dashed"?"1 1":""})})}const Ut=6,On=14,$t={active:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"})]}),inactive:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"})}),dual:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:Ut,fill:"currentColor"}),T.jsx("path",{d:"M 16 2 L 16 10"}),T.jsx("path",{d:"M 16 10 L 16 22",stroke:"black"}),T.jsx("path",{d:"M 16 22 L 16 30"})]}),snub:T.jsx(T.Fragment,{children:T.jsx("circle",{cx:"16",cy:"16",r:On})}),dualsnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On-4}),T.jsx("path",{d:"M 16 0 L 16 32"})]}),holosnub:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("circle",{cx:"16",cy:"16",r:Ut})]}),custom:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]}),activeVoid:T.jsxs(T.Fragment,{children:[T.jsx("circle",{cx:"16",cy:"16",r:On}),T.jsx("path",{d:"M 6 6 L 26 26"}),T.jsx("path",{d:"M 6 26 L 26 6"})]}),void:T.jsxs(T.Fragment,{children:[T.jsx("path",{d:"M 10 10 L 22 22"}),T.jsx("path",{d:"M 10 22 L 22 10"})]})};function Yp({index:e,value:n,onChange:t}){const r=K.useRef(null),[i,l]=K.useState(!1),o=ef(n),u=()=>{const c=Lr[o==="inactive"?"active":"inactive"];t(e,c)},s=v=>{const c=Object.keys($t),d=c.indexOf(o),f=c[(c.length+d+Bi(v.deltaY))%c.length],m=Lr[f];t(e,m)},a=v=>{v.preventDefault(),l(!i)};return K.useEffect(()=>{const v=c=>{r.current.contains(c.target)||l(!1)};if(i)return window.addEventListener("mouseup",v),()=>{window.removeEventListener("mouseup",v)}},[i]),T.jsxs("div",{className:"coxeter-node",title:o,ref:r,children:[T.jsx("svg",{className:`coxeter-graphic ${o}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:u,onContextMenu:a,onWheel:s,children:$t[o]}),o==="custom"&&T.jsx("input",{type:"number",value:n,step:".01",style:{width:`${n.toString().length+1.5}ch`},onChange:v=>t(e,v.target.value)}),i&&T.jsx("div",{className:"coxeter-node-menu",children:Object.keys($t).filter(v=>v!==o).map(v=>T.jsx("div",{title:v,onClick:()=>{t(e,Lr[v]),l(!1)},children:T.jsx("svg",{className:`coxeter-graphic ${v}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",fill:"black",onClick:()=>{t(e,Lr[v]),l(!1)},children:$t[v]})},v))})]})}const Ds=(e,n)=>e[n].some((t,r)=>r<n&&t<0)?"dashed":e[n].some((t,r)=>r<n&&t===0)?"bold":"solid",y0=K.memo(function({dimensions:n,coxeter:t,mirrors:r,stellation:i,extended:l,onChange:o}){const[u,s]=K.useState(1),a=K.useRef(),v=K.useCallback(()=>{if(o("extended",!l),l){const f=t.map(m=>m.slice());for(let m=0;m<n;m++)for(let y=0;y<m-1;y++)f[m][y]=2,f[y][m]=2;o("coxeter",f)}},[l,o,t,n]),c=K.useCallback((f,m)=>{if(f.startsWith("coxeter")){const[y,x]=f.split("-").slice(1).map(p=>+p),h=t.map(p=>p.slice());h[y][x]=m,h[x][y]=m,o("coxeter",h)}if(f.startsWith("stellation")){const[y,x]=f.split("-").slice(1).map(p=>+p),h=i.map(p=>p.slice());h[y][x]=m,h[x][y]=m,o("stellation",h)}},[t,o,i]),d=K.useCallback((f,m)=>{const y=r[f];let x=r.slice();x[f]=m,Zr(m)||y===0?x.some(h=>Zr(h))&&(x=x.map((h,p)=>h==="s"?"b":h&&h!=="b"?"d":h)):m!==0&&fp(m)&&x.some(h=>Zr(h))&&(x=x.map((h,p)=>h==="b"?"s":h==="d"?1:h)),o("mirrors",x)},[r,o]);return K.useEffect(()=>{const f=()=>{if(!a.current)return;const m=Le(1,(window.innerWidth-125)/a.current.offsetWidth);s(m)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[n]),T.jsxs("aside",{className:"coxeters",style:u===1?void 0:{transform:`scale(${u})`},ref:a,children:[T.jsx("div",{className:"coxeter-matrix",children:[...Array(n).keys()].map(f=>T.jsxs(K.Fragment,{children:[f>0&&T.jsx("div",{className:"coxeter-column",children:[...Array(f).keys()].map(m=>(l||f===m+1)&&T.jsx(Xp,{i:f,j:m,value:t[f][m],stellation:i[f][m],onChange:c},`${f}x${m}`))}),f>0&&T.jsx(Os,{type:Ds(t,f)}),T.jsx(Yp,{index:f,value:r[f],onChange:d}),f<n-1&&T.jsx(Os,{type:Ds(t,f+1)})]},f))}),T.jsxs("div",{className:"coxeter-toggles",children:[n<9&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",n+1),title:"Increase dimensions",children:"+"}),n>2&&T.jsx("button",{className:"button",onClick:()=>o("dimensions",n-1),title:"Decrease dimensions",children:"−"}),T.jsx("button",{className:"button",onClick:v,title:"extended mode",children:l?"▲":"▼"})]})]})}),sn=32,Ms=18;function x0({coxeter:e,mirrors:n,stellation:t}){const r=e.length,i=n.map((y,x)=>{const h=ef(y);return{n:x,type:h,i:x,j:0,r:h==="inactive"?Ut:On}});for(let y=0;y<r;y++)for(let x=r-1;x>y+1;x--)if(e[y][x]!==2){const h=y===0,p=x===r-1,g=!h&&!p,w=x-y+1,S=L(w-1)/2,I=2*Math.PI/w,N={i:i[y].i+S,j:i[y].j+(g?-S*Fe((2+w)/4*I):0)};for(let k=y;k<=x;k++){let F=k-y+(h?1:p?w/2:(2+w)/4);i[k].i=N.i+S*qe(I*F),i[k].j=N.j+S*Fe(I*F)}for(let k=x+1;k<r;k++)i[k].i-=x-y,i[k].i+=2*S;y=x-1;break}const l=[];for(let y=0;y<r;y++)for(let x=0;x<y;x++)if(e[y][x]!==2){const h=e[y][x],p=t[y][x];let g=`${h===0?"∞":h<0?`${h===-1?"":-h}i`:h}`;p>1&&(g+=`/${p}`),g==="3"&&(g=""),l.push({source:i[y],target:i[x],value:g,type:h<0?"dashed":h===0?"bold":"solid"})}const o=i.map(({i:y})=>y),u=i.map(({j:y})=>y),s=Le(...o),a=Ot(...o),v=Le(...u),c=Ot(...u);let d=0,f=0;for(let y=0;y<i.length;y++){const x=i[y];x.x=(x.i-s)*2*sn,x.y=(x.j-v)*2*sn,d=Ot(d,x.x),f=Ot(f,x.y)}const m=y=>y+Ot(y-1,0);return T.jsxs("svg",{className:"coxeter-diagram",viewBox:`${-sn/2} ${-sn/2} ${d+sn} ${f+sn}`,width:`${m(a-s+1)}em`,height:`${m(c-v+1)+.5}em`,strokeWidth:"2",fill:"transparent",stroke:"currentColor",children:[i.map(({n:y,type:x,x:h,y:p,r:g})=>T.jsx("g",{className:"coxeter-diagram-node",transform:`translate(${h-sn/2} ${p-sn/2})`,title:x,children:$t[x]},y)),l.map(({source:y,target:x,value:h,type:p})=>{const g={x:y.x,y:y.y},w={x:x.x,y:x.y},S={},I=np(w.y-g.y,w.x-g.x);return S.x=(g.x+w.x)/2+(Ms+(h.length-2)*5)*qe(I-Ue/2),S.y=(g.y+w.y)/2+Ms*Fe(I-Ue/2),g.x+=(y.r+1)*qe(I),g.y+=(y.r+1)*Fe(I),w.x-=(x.r+1)*qe(I),w.y-=(x.r+1)*Fe(I),T.jsxs("g",{className:"coxeter-diagram-link",children:[T.jsx("path",{d:`M ${g.x} ${g.y} L ${w.x} ${w.y}`,strokeWidth:p==="bold"?"4":"2",stroke:"currentColor",strokeDasharray:p==="dashed"?"1 1":""}),T.jsx("text",{style:{fontSize:"1.25rem"},stroke:"none",fill:"currentColor",textAnchor:"middle",dominantBaseline:"middle",x:S.x,y:S.y,children:h})]},`${y.n}-${x.n}`)})]})}export{Hv as A,m0 as B,x0 as C,Vp as D,Ln as E,Hp as F,y0 as G,c0 as H,g0 as I,n0 as J,yu as K,Gp as L,Kp as N,Ue as P,be as a,Fp as b,ft as c,p0 as d,Mp as e,f0 as f,d0 as g,a0 as h,Ot as i,Zp as j,bp as k,u0 as l,De as m,e0 as n,Ce as o,rp as p,T as q,K as r,qp as s,zs as t,v0 as u,Jt as v,Le as w,t0 as x,Jp as y,h0 as z};
