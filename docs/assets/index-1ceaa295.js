(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function WS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w0={exports:{}},Au={},T0={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xl=Symbol.for("react.element"),jS=Symbol.for("react.portal"),XS=Symbol.for("react.fragment"),YS=Symbol.for("react.strict_mode"),qS=Symbol.for("react.profiler"),$S=Symbol.for("react.provider"),KS=Symbol.for("react.context"),ZS=Symbol.for("react.forward_ref"),QS=Symbol.for("react.suspense"),JS=Symbol.for("react.memo"),eM=Symbol.for("react.lazy"),Nm=Symbol.iterator;function tM(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C0=Object.assign,A0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||b0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P0(){}P0.prototype=Ks.prototype;function zh(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||b0}var Bh=zh.prototype=new P0;Bh.constructor=zh;C0(Bh,Ks.prototype);Bh.isPureReactComponent=!0;var Fm=Array.isArray,R0=Object.prototype.hasOwnProperty,Gh={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,n){var i,r={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)R0.call(e,i)&&!D0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var d=Array(l),h=0;h<l;h++)d[h]=arguments[h+2];r.children=d}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:xl,type:t,key:o,ref:a,props:r,_owner:Gh.current}}function nM(t,e){return{$$typeof:xl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xl}function iM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function Cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iM(""+t.key):e.toString(36)}function Gc(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case xl:case jS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Cf(a,0):i,Fm(r)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),Gc(r,e,n,"",function(h){return h})):r!=null&&(Vh(r)&&(r=nM(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(km,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Fm(t))for(var l=0;l<t.length;l++){o=t[l];var d=i+Cf(o,l);a+=Gc(o,e,n,d,r)}else if(d=tM(t),typeof d=="function")for(t=d.call(t),l=0;!(o=t.next()).done;)o=o.value,d=i+Cf(o,l++),a+=Gc(o,e,n,d,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ec(t,e,n){if(t==null)return t;var i=[],r=0;return Gc(t,i,"","",function(o){return e.call(n,o,r++)}),i}function rM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var On={current:null},Vc={transition:null},oM={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Vc,ReactCurrentOwner:Gh};ft.Children={map:ec,forEach:function(t,e,n){ec(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ec(t,function(){e++}),e},toArray:function(t){return ec(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=Ks;ft.Fragment=XS;ft.Profiler=qS;ft.PureComponent=zh;ft.StrictMode=YS;ft.Suspense=QS;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oM;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=C0({},t.props),r=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Gh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(d in e)R0.call(e,d)&&!D0.hasOwnProperty(d)&&(i[d]=e[d]===void 0&&l!==void 0?l[d]:e[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){l=Array(d);for(var h=0;h<d;h++)l[h]=arguments[h+2];i.children=l}return{$$typeof:xl,type:t.type,key:r,ref:o,props:i,_owner:a}};ft.createContext=function(t){return t={$$typeof:KS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$S,_context:t},t.Consumer=t};ft.createElement=L0;ft.createFactory=function(t){var e=L0.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:ZS,render:t}};ft.isValidElement=Vh;ft.lazy=function(t){return{$$typeof:eM,_payload:{_status:-1,_result:t},_init:rM}};ft.memo=function(t,e){return{$$typeof:JS,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=Vc.transition;Vc.transition={};try{t()}finally{Vc.transition=e}};ft.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ft.useCallback=function(t,e){return On.current.useCallback(t,e)};ft.useContext=function(t){return On.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return On.current.useDeferredValue(t)};ft.useEffect=function(t,e){return On.current.useEffect(t,e)};ft.useId=function(){return On.current.useId()};ft.useImperativeHandle=function(t,e,n){return On.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return On.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return On.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return On.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return On.current.useReducer(t,e,n)};ft.useRef=function(t){return On.current.useRef(t)};ft.useState=function(t){return On.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return On.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return On.current.useTransition()};ft.version="18.2.0";T0.exports=ft;var Qe=T0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sM=Qe,aM=Symbol.for("react.element"),lM=Symbol.for("react.fragment"),cM=Object.prototype.hasOwnProperty,uM=sM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fM={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)cM.call(e,i)&&!fM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aM,type:t,key:o,ref:a,props:r,_owner:uM.current}}Au.Fragment=lM;Au.jsx=I0;Au.jsxs=I0;w0.exports=Au;var Ce=w0.exports,Fd={},U0={exports:{}},ei={},O0={exports:{}},N0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,J){var ne=X.length;X.push(J);e:for(;0<ne;){var we=ne-1>>>1,ve=X[we];if(0<r(ve,J))X[we]=J,X[ne]=ve,ne=we;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var J=X[0],ne=X.pop();if(ne!==J){X[0]=ne;e:for(var we=0,ve=X.length,oe=ve>>>1;we<oe;){var q=2*(we+1)-1,Me=X[q],Ee=q+1,H=X[Ee];if(0>r(Me,ne))Ee<ve&&0>r(H,Me)?(X[we]=H,X[Ee]=ne,we=Ee):(X[we]=Me,X[q]=ne,we=q);else if(Ee<ve&&0>r(H,ne))X[we]=H,X[Ee]=ne,we=Ee;else break e}}return J}function r(X,J){var ne=X.sortIndex-J.sortIndex;return ne!==0?ne:X.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var d=[],h=[],p=1,y=null,v=3,_=!1,T=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(X){for(var J=n(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=X)i(h),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(h)}}function L(X){if(b=!1,w(X),!T)if(n(d)!==null)T=!0,ce(P);else{var J=n(h);J!==null&&pe(L,J.startTime-X)}}function P(X,J){T=!1,b&&(b=!1,m(z),z=-1),_=!0;var ne=v;try{for(w(J),y=n(d);y!==null&&(!(y.expirationTime>J)||X&&!ae());){var we=y.callback;if(typeof we=="function"){y.callback=null,v=y.priorityLevel;var ve=we(y.expirationTime<=J);J=t.unstable_now(),typeof ve=="function"?y.callback=ve:y===n(d)&&i(d),w(J)}else i(d);y=n(d)}if(y!==null)var oe=!0;else{var q=n(h);q!==null&&pe(L,q.startTime-J),oe=!1}return oe}finally{y=null,v=ne,_=!1}}var U=!1,B=null,z=-1,R=5,N=-1;function ae(){return!(t.unstable_now()-N<R)}function fe(){if(B!==null){var X=t.unstable_now();N=X;var J=!0;try{J=B(!0,X)}finally{J?$():(U=!1,B=null)}}else U=!1}var $;if(typeof M=="function")$=function(){M(fe)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,j=te.port2;te.port1.onmessage=fe,$=function(){j.postMessage(null)}}else $=function(){E(fe,0)};function ce(X){B=X,U||(U=!0,$())}function pe(X,J){z=E(function(){X(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,ce(P))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(X){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var ne=v;v=J;try{return X()}finally{v=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,J){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=v;v=X;try{return J()}finally{v=ne}},t.unstable_scheduleCallback=function(X,J,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,X){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ne+ve,X={id:p++,callback:J,priorityLevel:X,startTime:ne,expirationTime:ve,sortIndex:-1},ne>we?(X.sortIndex=ne,e(h,X),n(d)===null&&X===n(h)&&(b?(m(z),z=-1):b=!0,pe(L,ne-we))):(X.sortIndex=ve,e(d,X),T||_||(T=!0,ce(P))),X},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(X){var J=v;return function(){var ne=v;v=J;try{return X.apply(this,arguments)}finally{v=ne}}}})(N0);O0.exports=N0;var dM=O0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=Qe,Jn=dM;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k0=new Set,Za={};function Uo(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(Za[t]=e,t=0;t<e.length;t++)k0.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kd=Object.prototype.hasOwnProperty,hM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},Bm={};function pM(t){return kd.call(Bm,t)?!0:kd.call(zm,t)?!1:hM.test(t)?Bm[t]=!0:(zm[t]=!0,!1)}function mM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vM(t,e,n,i){if(e===null||typeof e>"u"||mM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nn(t,e,n,i,r,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yn[t]=new Nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yn[e]=new Nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yn[t]=new Nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yn[t]=new Nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yn[t]=new Nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yn[t]=new Nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yn[t]=new Nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yn[t]=new Nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yn[t]=new Nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hh,Wh);yn[e]=new Nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hh,Wh);yn[e]=new Nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hh,Wh);yn[e]=new Nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yn[t]=new Nn(t,1,!1,t.toLowerCase(),null,!1,!1)});yn.xlinkHref=new Nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yn[t]=new Nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function jh(t,e,n,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vM(e,n,r,i)&&(n=null),i||r===null?pM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mr=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),ds=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),Gm=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var zt=Object.assign,Af;function Ia(t){if(Af===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Af=e&&e[1]||""}return`
`+Af+t}var Pf=!1;function Rf(t,e){if(!t||Pf)return"";Pf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){i=h}t.call(e.prototype)}else{try{throw Error()}catch(h){i=h}t()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,l=o.length-1;1<=a&&0<=l&&r[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==o[l]){var d=`
`+r[a].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=a&&0<=l);break}}}finally{Pf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ia(t):""}function gM(t){switch(t.tag){case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return t=Rf(t.type,!1),t;case 11:return t=Rf(t.type.render,!1),t;case 1:return t=Rf(t.type,!0),t;default:return""}}function Vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case ds:return"Portal";case zd:return"Profiler";case Xh:return"StrictMode";case Bd:return"Suspense";case Gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case Yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:Vd(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return Vd(t(e))}catch{}}return null}function yM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _M(t){var e=V0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nc(t){t._valueTracker||(t._valueTracker=_M(t))}function H0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=V0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hd(t,e){var n=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function W0(t,e){e=e.checked,e!=null&&jh(t,"checked",e,!1)}function Wd(t,e){W0(t,e);var n=Vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jd(t,e.type,n):e.hasOwnProperty("defaultValue")&&jd(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jd(t,e,n){(e!=="number"||eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ua=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Ua(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function j0(t,e){var n=Vr(e.value),i=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ic,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ic=ic||document.createElement("div"),ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ic.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xM=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){xM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function $0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=q0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var SM=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(t,e){if(e){if(SM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function $d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zd=null,As=null,Ps=null;function Xm(t){if(t=El(t)){if(typeof Zd!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=Iu(e),Zd(t.stateNode,t.type,e))}}function K0(t){As?Ps?Ps.push(t):Ps=[t]:As=t}function Z0(){if(As){var t=As,e=Ps;if(Ps=As=null,Xm(t),e)for(t=0;t<e.length;t++)Xm(e[t])}}function Q0(t,e){return t(e)}function J0(){}var Df=!1;function ey(t,e,n){if(Df)return t(e,n);Df=!0;try{return Q0(t,e,n)}finally{Df=!1,(As!==null||Ps!==null)&&(J0(),Z0())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var i=Iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var Qd=!1;if(ur)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{Qd=!1}function MM(t,e,n,i,r,o,a,l,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var za=!1,tu=null,nu=!1,Jd=null,EM={onError:function(t){za=!0,tu=t}};function wM(t,e,n,i,r,o,a,l,d){za=!1,tu=null,MM.apply(EM,arguments)}function TM(t,e,n,i,r,o,a,l,d){if(wM.apply(this,arguments),za){if(za){var h=tu;za=!1,tu=null}else throw Error(Se(198));nu||(nu=!0,Jd=h)}}function Oo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ty(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(Oo(t)!==t)throw Error(Se(188))}function bM(t){var e=t.alternate;if(!e){if(e=Oo(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Ym(r),t;if(o===i)return Ym(r),e;o=o.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=o;break}if(l===i){a=!0,i=r,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,i=r;break}if(l===i){a=!0,i=o,n=r;break}l=l.sibling}if(!a)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function ny(t){return t=bM(t),t!==null?iy(t):null}function iy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iy(t);if(e!==null)return e;t=t.sibling}return null}var ry=Jn.unstable_scheduleCallback,qm=Jn.unstable_cancelCallback,CM=Jn.unstable_shouldYield,AM=Jn.unstable_requestPaint,Wt=Jn.unstable_now,PM=Jn.unstable_getCurrentPriorityLevel,Kh=Jn.unstable_ImmediatePriority,oy=Jn.unstable_UserBlockingPriority,iu=Jn.unstable_NormalPriority,RM=Jn.unstable_LowPriority,sy=Jn.unstable_IdlePriority,Pu=null,Gi=null;function DM(t){if(Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(Pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Pi=Math.clz32?Math.clz32:UM,LM=Math.log,IM=Math.LN2;function UM(t){return t>>>=0,t===0?32:31-(LM(t)/IM|0)|0}var rc=64,oc=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=Oa(l):(o&=a,o!==0&&(i=Oa(o)))}else a=n&~r,a!==0?i=Oa(a):o!==0&&(i=Oa(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Pi(e),r=1<<n,i|=t[n],e&=~r;return i}function OM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Pi(o),l=1<<a,d=r[a];d===-1?(!(l&n)||l&i)&&(r[a]=OM(l,e)):d<=e&&(t.expiredLanes|=l),o&=~l}}function eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ay(){var t=rc;return rc<<=1,!(rc&4194240)&&(rc=64),t}function Lf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pi(e),t[e]=n}function FM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Pi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var St=0;function ly(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cy,Qh,uy,fy,dy,th=!1,sc=[],Ur=null,Or=null,Nr=null,el=new Map,tl=new Map,Rr=[],kM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":el.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(e.pointerId)}}function Ma(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=El(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function zM(t,e,n,i,r){switch(e){case"focusin":return Ur=Ma(Ur,t,e,n,i,r),!0;case"dragenter":return Or=Ma(Or,t,e,n,i,r),!0;case"mouseover":return Nr=Ma(Nr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return el.set(o,Ma(el.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,tl.set(o,Ma(tl.get(o)||null,t,e,n,i,r)),!0}return!1}function hy(t){var e=mo(t.target);if(e!==null){var n=Oo(e);if(n!==null){if(e=n.tag,e===13){if(e=ty(n),e!==null){t.blockedOn=e,dy(t.priority,function(){uy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kd=i,n.target.dispatchEvent(i),Kd=null}else return e=El(n),e!==null&&Qh(e),t.blockedOn=n,!1;e.shift()}return!0}function Km(t,e,n){Hc(t)&&n.delete(e)}function BM(){th=!1,Ur!==null&&Hc(Ur)&&(Ur=null),Or!==null&&Hc(Or)&&(Or=null),Nr!==null&&Hc(Nr)&&(Nr=null),el.forEach(Km),tl.forEach(Km)}function Ea(t,e){t.blockedOn===e&&(t.blockedOn=null,th||(th=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,BM)))}function nl(t){function e(r){return Ea(r,t)}if(0<sc.length){Ea(sc[0],t);for(var n=1;n<sc.length;n++){var i=sc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ur!==null&&Ea(Ur,t),Or!==null&&Ea(Or,t),Nr!==null&&Ea(Nr,t),el.forEach(e),tl.forEach(e),n=0;n<Rr.length;n++)i=Rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)hy(n),n.blockedOn===null&&Rr.shift()}var Rs=mr.ReactCurrentBatchConfig,ou=!0;function GM(t,e,n,i){var r=St,o=Rs.transition;Rs.transition=null;try{St=1,Jh(t,e,n,i)}finally{St=r,Rs.transition=o}}function VM(t,e,n,i){var r=St,o=Rs.transition;Rs.transition=null;try{St=4,Jh(t,e,n,i)}finally{St=r,Rs.transition=o}}function Jh(t,e,n,i){if(ou){var r=nh(t,e,n,i);if(r===null)Vf(t,e,i,su,n),$m(t,i);else if(zM(r,t,e,n,i))i.stopPropagation();else if($m(t,i),e&4&&-1<kM.indexOf(t)){for(;r!==null;){var o=El(r);if(o!==null&&cy(o),o=nh(t,e,n,i),o===null&&Vf(t,e,i,su,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Vf(t,e,i,null,n)}}var su=null;function nh(t,e,n,i){if(su=null,t=$h(i),t=mo(t),t!==null)if(e=Oo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ty(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function py(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PM()){case Kh:return 1;case oy:return 4;case iu:case RM:return 16;case sy:return 536870912;default:return 16}default:return 16}}var Lr=null,ep=null,Wc=null;function my(){if(Wc)return Wc;var t,e=ep,n=e.length,i,r="value"in Lr?Lr.value:Lr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[o-i];i++);return Wc=r.slice(t,1<i?1-i:void 0)}function jc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ac(){return!0}function Zm(){return!1}function ti(t){function e(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ac:Zm,this.isPropagationStopped=Zm,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=ti(Zs),Ml=zt({},Zs,{view:0,detail:0}),HM=ti(Ml),If,Uf,wa,Ru=zt({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(If=t.screenX-wa.screenX,Uf=t.screenY-wa.screenY):Uf=If=0,wa=t),If)},movementY:function(t){return"movementY"in t?t.movementY:Uf}}),Qm=ti(Ru),WM=zt({},Ru,{dataTransfer:0}),jM=ti(WM),XM=zt({},Ml,{relatedTarget:0}),Of=ti(XM),YM=zt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),qM=ti(YM),$M=zt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KM=ti($M),ZM=zt({},Zs,{data:0}),Jm=ti(ZM),QM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eE[t])?!!e[t]:!1}function np(){return tE}var nE=zt({},Ml,{key:function(t){if(t.key){var e=QM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?jc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iE=ti(nE),rE=zt({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ev=ti(rE),oE=zt({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),sE=ti(oE),aE=zt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lE=ti(aE),cE=zt({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uE=ti(cE),fE=[9,13,27,32],ip=ur&&"CompositionEvent"in window,Ba=null;ur&&"documentMode"in document&&(Ba=document.documentMode);var dE=ur&&"TextEvent"in window&&!Ba,vy=ur&&(!ip||Ba&&8<Ba&&11>=Ba),tv=String.fromCharCode(32),nv=!1;function gy(t,e){switch(t){case"keyup":return fE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function hE(t,e){switch(t){case"compositionend":return yy(e);case"keypress":return e.which!==32?null:(nv=!0,tv);case"textInput":return t=e.data,t===tv&&nv?null:t;default:return null}}function pE(t,e){if(ps)return t==="compositionend"||!ip&&gy(t,e)?(t=my(),Wc=ep=Lr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vy&&e.locale!=="ko"?null:e.data;default:return null}}var mE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mE[t.type]:e==="textarea"}function _y(t,e,n,i){K0(i),e=au(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ga=null,il=null;function vE(t){Ry(t,0)}function Du(t){var e=gs(t);if(H0(e))return t}function gE(t,e){if(t==="change")return e}var xy=!1;if(ur){var Nf;if(ur){var Ff="oninput"in document;if(!Ff){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),Ff=typeof rv.oninput=="function"}Nf=Ff}else Nf=!1;xy=Nf&&(!document.documentMode||9<document.documentMode)}function ov(){Ga&&(Ga.detachEvent("onpropertychange",Sy),il=Ga=null)}function Sy(t){if(t.propertyName==="value"&&Du(il)){var e=[];_y(e,il,t,$h(t)),ey(vE,e)}}function yE(t,e,n){t==="focusin"?(ov(),Ga=e,il=n,Ga.attachEvent("onpropertychange",Sy)):t==="focusout"&&ov()}function _E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(il)}function xE(t,e){if(t==="click")return Du(e)}function SE(t,e){if(t==="input"||t==="change")return Du(e)}function ME(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Li=typeof Object.is=="function"?Object.is:ME;function rl(t,e){if(Li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!kd.call(e,r)||!Li(t[r],e[r]))return!1}return!0}function sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function av(t,e){var n=sv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sv(n)}}function My(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?My(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ey(){for(var t=window,e=eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eu(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EE(t){var e=Ey(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&My(n.ownerDocument.documentElement,n)){if(i!==null&&rp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=av(n,o);var a=av(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wE=ur&&"documentMode"in document&&11>=document.documentMode,ms=null,ih=null,Va=null,rh=!1;function lv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||ms==null||ms!==eu(i)||(i=ms,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Va&&rl(Va,i)||(Va=i,i=au(ih,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function lc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},kf={},wy={};ur&&(wy=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Lu(t){if(kf[t])return kf[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wy)return kf[t]=e[n];return t}var Ty=Lu("animationend"),by=Lu("animationiteration"),Cy=Lu("animationstart"),Ay=Lu("transitionend"),Py=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Py.set(t,e),Uo(e,[t])}for(var zf=0;zf<cv.length;zf++){var Bf=cv[zf],TE=Bf.toLowerCase(),bE=Bf[0].toUpperCase()+Bf.slice(1);jr(TE,"on"+bE)}jr(Ty,"onAnimationEnd");jr(by,"onAnimationIteration");jr(Cy,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Ay,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function uv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,TM(i,e,void 0,t),t.currentTarget=null}function Ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],d=l.instance,h=l.currentTarget;if(l=l.listener,d!==o&&r.isPropagationStopped())break e;uv(r,l,h),o=d}else for(a=0;a<i.length;a++){if(l=i[a],d=l.instance,h=l.currentTarget,l=l.listener,d!==o&&r.isPropagationStopped())break e;uv(r,l,h),o=d}}}if(nu)throw t=Jd,nu=!1,Jd=null,t}function Rt(t,e){var n=e[ch];n===void 0&&(n=e[ch]=new Set);var i=t+"__bubble";n.has(i)||(Dy(e,t,2,!1),n.add(i))}function Gf(t,e,n){var i=0;e&&(i|=4),Dy(n,t,i,e)}var cc="_reactListening"+Math.random().toString(36).slice(2);function ol(t){if(!t[cc]){t[cc]=!0,k0.forEach(function(n){n!=="selectionchange"&&(CE.has(n)||Gf(n,!1,t),Gf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cc]||(e[cc]=!0,Gf("selectionchange",!1,e))}}function Dy(t,e,n,i){switch(py(e)){case 1:var r=GM;break;case 4:r=VM;break;default:r=Jh}n=r.bind(null,e,n,t),r=void 0,!Qd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;a=a.return}for(;l!==null;){if(a=mo(l),a===null)return;if(d=a.tag,d===5||d===6){i=o=a;continue e}l=l.parentNode}}i=i.return}ey(function(){var h=o,p=$h(n),y=[];e:{var v=Py.get(t);if(v!==void 0){var _=tp,T=t;switch(t){case"keypress":if(jc(n)===0)break e;case"keydown":case"keyup":_=iE;break;case"focusin":T="focus",_=Of;break;case"focusout":T="blur",_=Of;break;case"beforeblur":case"afterblur":_=Of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=jM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=sE;break;case Ty:case by:case Cy:_=qM;break;case Ay:_=lE;break;case"scroll":_=HM;break;case"wheel":_=uE;break;case"copy":case"cut":case"paste":_=KM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ev}var b=(e&4)!==0,E=!b&&t==="scroll",m=b?v!==null?v+"Capture":null:v;b=[];for(var M=h,w;M!==null;){w=M;var L=w.stateNode;if(w.tag===5&&L!==null&&(w=L,m!==null&&(L=Ja(M,m),L!=null&&b.push(sl(M,L,w)))),E)break;M=M.return}0<b.length&&(v=new _(v,T,null,n,p),y.push({event:v,listeners:b}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",v&&n!==Kd&&(T=n.relatedTarget||n.fromElement)&&(mo(T)||T[fr]))break e;if((_||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=h,T=T?mo(T):null,T!==null&&(E=Oo(T),T!==E||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=h),_!==T)){if(b=Qm,L="onMouseLeave",m="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(b=ev,L="onPointerLeave",m="onPointerEnter",M="pointer"),E=_==null?v:gs(_),w=T==null?v:gs(T),v=new b(L,M+"leave",_,n,p),v.target=E,v.relatedTarget=w,L=null,mo(p)===h&&(b=new b(m,M+"enter",T,n,p),b.target=w,b.relatedTarget=E,L=b),E=L,_&&T)t:{for(b=_,m=T,M=0,w=b;w;w=Xo(w))M++;for(w=0,L=m;L;L=Xo(L))w++;for(;0<M-w;)b=Xo(b),M--;for(;0<w-M;)m=Xo(m),w--;for(;M--;){if(b===m||m!==null&&b===m.alternate)break t;b=Xo(b),m=Xo(m)}b=null}else b=null;_!==null&&fv(y,v,_,b,!1),T!==null&&E!==null&&fv(y,E,T,b,!0)}}e:{if(v=h?gs(h):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var P=gE;else if(iv(v))if(xy)P=SE;else{P=_E;var U=yE}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=xE);if(P&&(P=P(t,h))){_y(y,P,n,p);break e}U&&U(t,v,h),t==="focusout"&&(U=v._wrapperState)&&U.controlled&&v.type==="number"&&jd(v,"number",v.value)}switch(U=h?gs(h):window,t){case"focusin":(iv(U)||U.contentEditable==="true")&&(ms=U,ih=h,Va=null);break;case"focusout":Va=ih=ms=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,lv(y,n,p);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":lv(y,n,p)}var B;if(ip)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else ps?gy(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(vy&&n.locale!=="ko"&&(ps||z!=="onCompositionStart"?z==="onCompositionEnd"&&ps&&(B=my()):(Lr=p,ep="value"in Lr?Lr.value:Lr.textContent,ps=!0)),U=au(h,z),0<U.length&&(z=new Jm(z,t,null,n,p),y.push({event:z,listeners:U}),B?z.data=B:(B=yy(n),B!==null&&(z.data=B)))),(B=dE?hE(t,n):pE(t,n))&&(h=au(h,"onBeforeInput"),0<h.length&&(p=new Jm("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:h}),p.data=B))}Ry(y,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ja(t,n),o!=null&&i.unshift(sl(t,o,r)),o=Ja(t,e),o!=null&&i.push(sl(t,o,r))),t=t.return}return i}function Xo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fv(t,e,n,i,r){for(var o=e._reactName,a=[];n!==null&&n!==i;){var l=n,d=l.alternate,h=l.stateNode;if(d!==null&&d===i)break;l.tag===5&&h!==null&&(l=h,r?(d=Ja(n,o),d!=null&&a.unshift(sl(n,d,l))):r||(d=Ja(n,o),d!=null&&a.push(sl(n,d,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var AE=/\r\n?/g,PE=/\u0000|\uFFFD/g;function dv(t){return(typeof t=="string"?t:""+t).replace(AE,`
`).replace(PE,"")}function uc(t,e,n){if(e=dv(e),dv(t)!==e&&n)throw Error(Se(425))}function lu(){}var oh=null,sh=null;function ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,DE=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch(LE)}:lh;function LE(t){setTimeout(function(){throw t})}function Hf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),nl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);nl(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),zi="__reactFiber$"+Qs,al="__reactProps$"+Qs,fr="__reactContainer$"+Qs,ch="__reactEvents$"+Qs,IE="__reactListeners$"+Qs,UE="__reactHandles$"+Qs;function mo(t){var e=t[zi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fr]||n[zi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pv(t);t!==null;){if(n=t[zi])return n;t=pv(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[zi]||t[fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function Iu(t){return t[al]||null}var uh=[],ys=-1;function Xr(t){return{current:t}}function It(t){0>ys||(t.current=uh[ys],uh[ys]=null,ys--)}function Ct(t,e){ys++,uh[ys]=t.current,t.current=e}var Hr={},bn=Xr(Hr),Vn=Xr(!1),bo=Hr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return Hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Hn(t){return t=t.childContextTypes,t!=null}function cu(){It(Vn),It(bn)}function mv(t,e,n){if(bn.current!==Hr)throw Error(Se(168));Ct(bn,e),Ct(Vn,n)}function Ly(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,yM(t)||"Unknown",r));return zt({},n,i)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,bo=bn.current,Ct(bn,t),Ct(Vn,Vn.current),!0}function vv(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=Ly(t,e,bo),i.__reactInternalMemoizedMergedChildContext=t,It(Vn),It(bn),Ct(bn,t)):It(Vn),Ct(Vn,n)}var or=null,Uu=!1,Wf=!1;function Iy(t){or===null?or=[t]:or.push(t)}function OE(t){Uu=!0,Iy(t)}function Yr(){if(!Wf&&or!==null){Wf=!0;var t=0,e=St;try{var n=or;for(St=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}or=null,Uu=!1}catch(r){throw or!==null&&(or=or.slice(t+1)),ry(Kh,Yr),r}finally{St=e,Wf=!1}}return null}var _s=[],xs=0,fu=null,du=0,ai=[],li=0,Co=null,ar=1,lr="";function lo(t,e){_s[xs++]=du,_s[xs++]=fu,fu=t,du=e}function Uy(t,e,n){ai[li++]=ar,ai[li++]=lr,ai[li++]=Co,Co=t;var i=ar;t=lr;var r=32-Pi(i)-1;i&=~(1<<r),n+=1;var o=32-Pi(e)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ar=1<<32-Pi(e)+r|n<<r|i,lr=o+t}else ar=1<<o|n<<r|i,lr=t}function op(t){t.return!==null&&(lo(t,1),Uy(t,1,0))}function sp(t){for(;t===fu;)fu=_s[--xs],_s[xs]=null,du=_s[--xs],_s[xs]=null;for(;t===Co;)Co=ai[--li],ai[li]=null,lr=ai[--li],ai[li]=null,ar=ai[--li],ai[li]=null}var Qn=null,Zn=null,Ut=!1,Ti=null;function Oy(t,e){var n=ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Co!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,Zn=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(Ut){var e=Zn;if(e){var n=e;if(!gv(t,e)){if(fh(t))throw Error(Se(418));e=Fr(n.nextSibling);var i=Qn;e&&gv(t,e)?Oy(i,n):(t.flags=t.flags&-4097|2,Ut=!1,Qn=t)}}else{if(fh(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Ut=!1,Qn=t}}}function yv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function fc(t){if(t!==Qn)return!1;if(!Ut)return yv(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ah(t.type,t.memoizedProps)),e&&(e=Zn)){if(fh(t))throw Ny(),Error(Se(418));for(;e;)Oy(t,e),e=Fr(e.nextSibling)}if(yv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=Qn?Fr(t.stateNode.nextSibling):null;return!0}function Ny(){for(var t=Zn;t;)t=Fr(t.nextSibling)}function ks(){Zn=Qn=null,Ut=!1}function ap(t){Ti===null?Ti=[t]:Ti.push(t)}var NE=mr.ReactCurrentBatchConfig;function Ei(t,e){if(t&&t.defaultProps){e=zt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var hu=Xr(null),pu=null,Ss=null,lp=null;function cp(){lp=Ss=pu=null}function up(t){var e=hu.current;It(hu),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){pu=t,lp=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gn=!0),t.firstContext=null)}function hi(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(pu===null)throw Error(Se(308));Ss=t,pu.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var vo=null;function fp(t){vo===null?vo=[t]:vo.push(t)}function Fy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,fp(e)):(n.next=r.next,r.next=n),e.interleaved=n,dr(t,i)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ky(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,dr(t,n)}return r=i.interleaved,r===null?(e.next=e,fp(i)):(e.next=r.next,r.next=e),i.interleaved=e,dr(t,n)}function Xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zh(t,n)}}function _v(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mu(t,e,n,i){var r=t.updateQueue;Pr=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,h=d.next;d.next=null,a===null?o=h:a.next=h,a=d;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=d))}if(o!==null){var y=r.baseState;a=0,p=h=d=null,l=o;do{var v=l.lane,_=l.eventTime;if((i&v)===v){p!==null&&(p=p.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,b=l;switch(v=e,_=n,b.tag){case 1:if(T=b.payload,typeof T=="function"){y=T.call(_,y,v);break e}y=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=b.payload,v=typeof T=="function"?T.call(_,y,v):T,v==null)break e;y=zt({},y,v);break e;case 2:Pr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=r.effects,v===null?r.effects=[l]:v.push(l))}else _={eventTime:_,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=_,d=y):p=p.next=_,a|=v;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;v=l,l=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(1);if(p===null&&(d=y),r.baseState=d,r.firstBaseUpdate=h,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Po|=a,t.lanes=a,t.memoizedState=y}}function xv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var zy=new F0.Component().refs;function ph(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:zt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?Oo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=In(),r=Br(t),o=cr(i,r);o.payload=e,n!=null&&(o.callback=n),e=kr(t,o,r),e!==null&&(Ri(e,t,r,i),Xc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=In(),r=Br(t),o=cr(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=kr(t,o,r),e!==null&&(Ri(e,t,r,i),Xc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=In(),i=Br(t),r=cr(n,i);r.tag=2,e!=null&&(r.callback=e),e=kr(t,r,i),e!==null&&(Ri(e,t,i,n),Xc(e,t,i))}};function Sv(t,e,n,i,r,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!rl(n,i)||!rl(r,o):!0}function By(t,e,n){var i=!1,r=Hr,o=e.contextType;return typeof o=="object"&&o!==null?o=hi(o):(r=Hn(e)?bo:bn.current,i=e.contextTypes,o=(i=i!=null)?Fs(t,r):Hr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Mv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function mh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=zy,dp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=hi(o):(o=Hn(e)?bo:bn.current,r.context=Fs(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ph(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ou.enqueueReplaceState(r,r.state,null),mu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var l=r.refs;l===zy&&(l=r.refs={}),a===null?delete l[o]:l[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function dc(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ev(t){var e=t._init;return e(t._payload)}function Gy(t){function e(m,M){if(t){var w=m.deletions;w===null?(m.deletions=[M],m.flags|=16):w.push(M)}}function n(m,M){if(!t)return null;for(;M!==null;)e(m,M),M=M.sibling;return null}function i(m,M){for(m=new Map;M!==null;)M.key!==null?m.set(M.key,M):m.set(M.index,M),M=M.sibling;return m}function r(m,M){return m=Gr(m,M),m.index=0,m.sibling=null,m}function o(m,M,w){return m.index=w,t?(w=m.alternate,w!==null?(w=w.index,w<M?(m.flags|=2,M):w):(m.flags|=2,M)):(m.flags|=1048576,M)}function a(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,M,w,L){return M===null||M.tag!==6?(M=Zf(w,m.mode,L),M.return=m,M):(M=r(M,w),M.return=m,M)}function d(m,M,w,L){var P=w.type;return P===hs?p(m,M,w.props.children,L,w.key):M!==null&&(M.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ar&&Ev(P)===M.type)?(L=r(M,w.props),L.ref=Ta(m,M,w),L.return=m,L):(L=Qc(w.type,w.key,w.props,null,m.mode,L),L.ref=Ta(m,M,w),L.return=m,L)}function h(m,M,w,L){return M===null||M.tag!==4||M.stateNode.containerInfo!==w.containerInfo||M.stateNode.implementation!==w.implementation?(M=Qf(w,m.mode,L),M.return=m,M):(M=r(M,w.children||[]),M.return=m,M)}function p(m,M,w,L,P){return M===null||M.tag!==7?(M=So(w,m.mode,L,P),M.return=m,M):(M=r(M,w),M.return=m,M)}function y(m,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Zf(""+M,m.mode,w),M.return=m,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case tc:return w=Qc(M.type,M.key,M.props,null,m.mode,w),w.ref=Ta(m,null,M),w.return=m,w;case ds:return M=Qf(M,m.mode,w),M.return=m,M;case Ar:var L=M._init;return y(m,L(M._payload),w)}if(Ua(M)||xa(M))return M=So(M,m.mode,w,null),M.return=m,M;dc(m,M)}return null}function v(m,M,w,L){var P=M!==null?M.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return P!==null?null:l(m,M,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case tc:return w.key===P?d(m,M,w,L):null;case ds:return w.key===P?h(m,M,w,L):null;case Ar:return P=w._init,v(m,M,P(w._payload),L)}if(Ua(w)||xa(w))return P!==null?null:p(m,M,w,L,null);dc(m,w)}return null}function _(m,M,w,L,P){if(typeof L=="string"&&L!==""||typeof L=="number")return m=m.get(w)||null,l(M,m,""+L,P);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case tc:return m=m.get(L.key===null?w:L.key)||null,d(M,m,L,P);case ds:return m=m.get(L.key===null?w:L.key)||null,h(M,m,L,P);case Ar:var U=L._init;return _(m,M,w,U(L._payload),P)}if(Ua(L)||xa(L))return m=m.get(w)||null,p(M,m,L,P,null);dc(M,L)}return null}function T(m,M,w,L){for(var P=null,U=null,B=M,z=M=0,R=null;B!==null&&z<w.length;z++){B.index>z?(R=B,B=null):R=B.sibling;var N=v(m,B,w[z],L);if(N===null){B===null&&(B=R);break}t&&B&&N.alternate===null&&e(m,B),M=o(N,M,z),U===null?P=N:U.sibling=N,U=N,B=R}if(z===w.length)return n(m,B),Ut&&lo(m,z),P;if(B===null){for(;z<w.length;z++)B=y(m,w[z],L),B!==null&&(M=o(B,M,z),U===null?P=B:U.sibling=B,U=B);return Ut&&lo(m,z),P}for(B=i(m,B);z<w.length;z++)R=_(B,m,z,w[z],L),R!==null&&(t&&R.alternate!==null&&B.delete(R.key===null?z:R.key),M=o(R,M,z),U===null?P=R:U.sibling=R,U=R);return t&&B.forEach(function(ae){return e(m,ae)}),Ut&&lo(m,z),P}function b(m,M,w,L){var P=xa(w);if(typeof P!="function")throw Error(Se(150));if(w=P.call(w),w==null)throw Error(Se(151));for(var U=P=null,B=M,z=M=0,R=null,N=w.next();B!==null&&!N.done;z++,N=w.next()){B.index>z?(R=B,B=null):R=B.sibling;var ae=v(m,B,N.value,L);if(ae===null){B===null&&(B=R);break}t&&B&&ae.alternate===null&&e(m,B),M=o(ae,M,z),U===null?P=ae:U.sibling=ae,U=ae,B=R}if(N.done)return n(m,B),Ut&&lo(m,z),P;if(B===null){for(;!N.done;z++,N=w.next())N=y(m,N.value,L),N!==null&&(M=o(N,M,z),U===null?P=N:U.sibling=N,U=N);return Ut&&lo(m,z),P}for(B=i(m,B);!N.done;z++,N=w.next())N=_(B,m,z,N.value,L),N!==null&&(t&&N.alternate!==null&&B.delete(N.key===null?z:N.key),M=o(N,M,z),U===null?P=N:U.sibling=N,U=N);return t&&B.forEach(function(fe){return e(m,fe)}),Ut&&lo(m,z),P}function E(m,M,w,L){if(typeof w=="object"&&w!==null&&w.type===hs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case tc:e:{for(var P=w.key,U=M;U!==null;){if(U.key===P){if(P=w.type,P===hs){if(U.tag===7){n(m,U.sibling),M=r(U,w.props.children),M.return=m,m=M;break e}}else if(U.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ar&&Ev(P)===U.type){n(m,U.sibling),M=r(U,w.props),M.ref=Ta(m,U,w),M.return=m,m=M;break e}n(m,U);break}else e(m,U);U=U.sibling}w.type===hs?(M=So(w.props.children,m.mode,L,w.key),M.return=m,m=M):(L=Qc(w.type,w.key,w.props,null,m.mode,L),L.ref=Ta(m,M,w),L.return=m,m=L)}return a(m);case ds:e:{for(U=w.key;M!==null;){if(M.key===U)if(M.tag===4&&M.stateNode.containerInfo===w.containerInfo&&M.stateNode.implementation===w.implementation){n(m,M.sibling),M=r(M,w.children||[]),M.return=m,m=M;break e}else{n(m,M);break}else e(m,M);M=M.sibling}M=Qf(w,m.mode,L),M.return=m,m=M}return a(m);case Ar:return U=w._init,E(m,M,U(w._payload),L)}if(Ua(w))return T(m,M,w,L);if(xa(w))return b(m,M,w,L);dc(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,M!==null&&M.tag===6?(n(m,M.sibling),M=r(M,w),M.return=m,m=M):(n(m,M),M=Zf(w,m.mode,L),M.return=m,m=M),a(m)):n(m,M)}return E}var zs=Gy(!0),Vy=Gy(!1),wl={},Vi=Xr(wl),ll=Xr(wl),cl=Xr(wl);function go(t){if(t===wl)throw Error(Se(174));return t}function hp(t,e){switch(Ct(cl,e),Ct(ll,t),Ct(Vi,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}It(Vi),Ct(Vi,e)}function Bs(){It(Vi),It(ll),It(cl)}function Hy(t){go(cl.current);var e=go(Vi.current),n=Yd(e,t.type);e!==n&&(Ct(ll,t),Ct(Vi,n))}function pp(t){ll.current===t&&(It(Vi),It(ll))}var Ft=Xr(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jf=[];function mp(){for(var t=0;t<jf.length;t++)jf[t]._workInProgressVersionPrimary=null;jf.length=0}var Yc=mr.ReactCurrentDispatcher,Xf=mr.ReactCurrentBatchConfig,Ao=0,kt=null,Zt=null,un=null,gu=!1,Ha=!1,ul=0,FE=0;function _n(){throw Error(Se(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Li(t[n],e[n]))return!1;return!0}function gp(t,e,n,i,r,o){if(Ao=o,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yc.current=t===null||t.memoizedState===null?GE:VE,t=n(i,r),Ha){o=0;do{if(Ha=!1,ul=0,25<=o)throw Error(Se(301));o+=1,un=Zt=null,e.updateQueue=null,Yc.current=HE,t=n(i,r)}while(Ha)}if(Yc.current=yu,e=Zt!==null&&Zt.next!==null,Ao=0,un=Zt=kt=null,gu=!1,e)throw Error(Se(300));return t}function yp(){var t=ul!==0;return ul=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?kt.memoizedState=un=t:un=un.next=t,un}function pi(){if(Zt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var e=un===null?kt.memoizedState:un.next;if(e!==null)un=e,Zt=t;else{if(t===null)throw Error(Se(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},un===null?kt.memoizedState=un=t:un=un.next=t}return un}function fl(t,e){return typeof e=="function"?e(t):e}function Yf(t){var e=pi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Zt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var l=a=null,d=null,h=o;do{var p=h.lane;if((Ao&p)===p)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:t(i,h.action);else{var y={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(l=d=y,a=i):d=d.next=y,kt.lanes|=p,Po|=p}h=h.next}while(h!==null&&h!==o);d===null?a=i:d.next=l,Li(i,e.memoizedState)||(Gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=d,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,kt.lanes|=o,Po|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qf(t){var e=pi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=t(o,a.action),a=a.next;while(a!==r);Li(o,e.memoizedState)||(Gn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Wy(){}function jy(t,e){var n=kt,i=pi(),r=e(),o=!Li(i.memoizedState,r);if(o&&(i.memoizedState=r,Gn=!0),i=i.queue,_p(qy.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||un!==null&&un.memoizedState.tag&1){if(n.flags|=2048,dl(9,Yy.bind(null,n,i,r,e),void 0,null),fn===null)throw Error(Se(349));Ao&30||Xy(n,e,r)}return r}function Xy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yy(t,e,n,i){e.value=n,e.getSnapshot=i,$y(e)&&Ky(t)}function qy(t,e,n){return n(function(){$y(e)&&Ky(t)})}function $y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Li(t,n)}catch{return!0}}function Ky(t){var e=dr(t,1);e!==null&&Ri(e,t,1,-1)}function wv(t){var e=Fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:t},e.queue=t,t=t.dispatch=BE.bind(null,kt,t),[e.memoizedState,t]}function dl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Zy(){return pi().memoizedState}function qc(t,e,n,i){var r=Fi();kt.flags|=t,r.memoizedState=dl(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=pi();i=i===void 0?null:i;var o=void 0;if(Zt!==null){var a=Zt.memoizedState;if(o=a.destroy,i!==null&&vp(i,a.deps)){r.memoizedState=dl(e,n,o,i);return}}kt.flags|=t,r.memoizedState=dl(1|e,n,o,i)}function Tv(t,e){return qc(8390656,8,t,e)}function _p(t,e){return Nu(2048,8,t,e)}function Qy(t,e){return Nu(4,2,t,e)}function Jy(t,e){return Nu(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,e_.bind(null,e,t),n)}function xp(){}function n_(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function i_(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function r_(t,e,n){return Ao&21?(Li(n,e)||(n=ay(),kt.lanes|=n,Po|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gn=!0),t.memoizedState=n)}function kE(t,e){var n=St;St=n!==0&&4>n?n:4,t(!0);var i=Xf.transition;Xf.transition={};try{t(!1),e()}finally{St=n,Xf.transition=i}}function o_(){return pi().memoizedState}function zE(t,e,n){var i=Br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},s_(t))a_(e,n);else if(n=Fy(t,e,n,i),n!==null){var r=In();Ri(n,t,i,r),l_(n,e,i)}}function BE(t,e,n){var i=Br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(t))a_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(r.hasEagerState=!0,r.eagerState=l,Li(l,a)){var d=e.interleaved;d===null?(r.next=r,fp(e)):(r.next=d.next,d.next=r),e.interleaved=r;return}}catch{}finally{}n=Fy(t,e,r,i),n!==null&&(r=In(),Ri(n,t,i,r),l_(n,e,i))}}function s_(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function a_(t,e){Ha=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zh(t,n)}}var yu={readContext:hi,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},GE={readContext:hi,useCallback:function(t,e){return Fi().memoizedState=[t,e===void 0?null:e],t},useContext:hi,useEffect:Tv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qc(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qc(4194308,4,t,e)},useInsertionEffect:function(t,e){return qc(4,2,t,e)},useMemo:function(t,e){var n=Fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zE.bind(null,kt,t),[i.memoizedState,t]},useRef:function(t){var e=Fi();return t={current:t},e.memoizedState=t},useState:wv,useDebugValue:xp,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=wv(!1),e=t[0];return t=kE.bind(null,t[1]),Fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=kt,r=Fi();if(Ut){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),fn===null)throw Error(Se(349));Ao&30||Xy(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Tv(qy.bind(null,i,o,t),[t]),i.flags|=2048,dl(9,Yy.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Fi(),e=fn.identifierPrefix;if(Ut){var n=lr,i=ar;n=(i&~(1<<32-Pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ul++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VE={readContext:hi,useCallback:n_,useContext:hi,useEffect:_p,useImperativeHandle:t_,useInsertionEffect:Qy,useLayoutEffect:Jy,useMemo:i_,useReducer:Yf,useRef:Zy,useState:function(){return Yf(fl)},useDebugValue:xp,useDeferredValue:function(t){var e=pi();return r_(e,Zt.memoizedState,t)},useTransition:function(){var t=Yf(fl)[0],e=pi().memoizedState;return[t,e]},useMutableSource:Wy,useSyncExternalStore:jy,useId:o_,unstable_isNewReconciler:!1},HE={readContext:hi,useCallback:n_,useContext:hi,useEffect:_p,useImperativeHandle:t_,useInsertionEffect:Qy,useLayoutEffect:Jy,useMemo:i_,useReducer:qf,useRef:Zy,useState:function(){return qf(fl)},useDebugValue:xp,useDeferredValue:function(t){var e=pi();return Zt===null?e.memoizedState=t:r_(e,Zt.memoizedState,t)},useTransition:function(){var t=qf(fl)[0],e=pi().memoizedState;return[t,e]},useMutableSource:Wy,useSyncExternalStore:jy,useId:o_,unstable_isNewReconciler:!1};function Gs(t,e){try{var n="",i=e;do n+=gM(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function $f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WE=typeof WeakMap=="function"?WeakMap:Map;function c_(t,e,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xu||(xu=!0,bh=i),vh(t,e)},n}function u_(t,e,n){n=cr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof i!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function bv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new WE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rw.bind(null,t,e,n),e.then(t,t))}function Cv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Av(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cr(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var jE=mr.ReactCurrentOwner,Gn=!1;function Dn(t,e,n,i){e.child=t===null?Vy(e,null,n,i):zs(e,t.child,n,i)}function Pv(t,e,n,i,r){n=n.render;var o=e.ref;return Ds(e,r),i=gp(t,e,n,i,o,r),n=yp(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(Ut&&n&&op(e),e.flags|=1,Dn(t,e,i,r),e.child)}function Rv(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Ap(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,f_(t,e,o,i,r)):(t=Qc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(a,i)&&t.ref===e.ref)return hr(t,e,r)}return e.flags|=1,t=Gr(o,i),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(rl(o,i)&&t.ref===e.ref)if(Gn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Gn=!0);else return e.lanes=t.lanes,hr(t,e,r)}return gh(t,e,n,i,r)}function d_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Es,Kn),Kn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ct(Es,Kn),Kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ct(Es,Kn),Kn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ct(Es,Kn),Kn|=i;return Dn(t,e,r,n),e.child}function h_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,i,r){var o=Hn(n)?bo:bn.current;return o=Fs(e,o),Ds(e,r),n=gp(t,e,n,i,o,r),i=yp(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(Ut&&i&&op(e),e.flags|=1,Dn(t,e,n,r),e.child)}function Dv(t,e,n,i,r){if(Hn(n)){var o=!0;uu(e)}else o=!1;if(Ds(e,r),e.stateNode===null)$c(t,e),By(e,n,i),mh(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var d=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=hi(h):(h=Hn(n)?bo:bn.current,h=Fs(e,h));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||d!==h)&&Mv(e,a,i,h),Pr=!1;var v=e.memoizedState;a.state=v,mu(e,i,a,r),d=e.memoizedState,l!==i||v!==d||Vn.current||Pr?(typeof p=="function"&&(ph(e,n,p,i),d=e.memoizedState),(l=Pr||Sv(e,n,l,i,v,d,h))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),a.props=i,a.state=d,a.context=h,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ky(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ei(e.type,l),a.props=h,y=e.pendingProps,v=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=hi(d):(d=Hn(n)?bo:bn.current,d=Fs(e,d));var _=n.getDerivedStateFromProps;(p=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==y||v!==d)&&Mv(e,a,i,d),Pr=!1,v=e.memoizedState,a.state=v,mu(e,i,a,r);var T=e.memoizedState;l!==y||v!==T||Vn.current||Pr?(typeof _=="function"&&(ph(e,n,_,i),T=e.memoizedState),(h=Pr||Sv(e,n,h,i,v,T,d)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,T,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,T,d)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=T),a.props=i,a.state=T,a.context=d,i=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),i=!1)}return yh(t,e,n,i,o,r)}function yh(t,e,n,i,r,o){h_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&vv(e,n,!1),hr(t,e,o);i=e.stateNode,jE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=zs(e,t.child,null,o),e.child=zs(e,null,l,o)):Dn(t,e,l,o),e.memoizedState=i.state,r&&vv(e,n,!0),e.child}function p_(t){var e=t.stateNode;e.pendingContext?mv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mv(t,e.context,!1),hp(t,e.containerInfo)}function Lv(t,e,n,i,r){return ks(),ap(r),e.flags|=256,Dn(t,e,n,i),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function xh(t){return{baseLanes:t,cachePool:null,transitions:null}}function m_(t,e,n){var i=e.pendingProps,r=Ft.current,o=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ct(Ft,r&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=zu(a,i,0,null),t=So(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=xh(n),e.memoizedState=_h,t):Sp(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return XE(t,e,a,i,l,r,n);if(o){o=i.fallback,a=e.mode,r=t.child,l=r.sibling;var d={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=d,e.deletions=null):(i=Gr(r,d),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?o=Gr(l,o):(o=So(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?xh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=_h,i}return o=t.child,t=o.sibling,i=Gr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sp(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hc(t,e,n,i){return i!==null&&ap(i),zs(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XE(t,e,n,i,r,o,a){if(n)return e.flags&256?(e.flags&=-257,i=$f(Error(Se(422))),hc(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=zu({mode:"visible",children:i.children},r,0,null),o=So(o,r,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&zs(e,t.child,null,a),e.child.memoizedState=xh(a),e.memoizedState=_h,o);if(!(e.mode&1))return hc(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,o=Error(Se(419)),i=$f(o,i,void 0),hc(t,e,a,i)}if(l=(a&t.childLanes)!==0,Gn||l){if(i=fn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,dr(t,r),Ri(i,t,r,-1))}return Cp(),i=$f(Error(Se(421))),hc(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ow.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Zn=Fr(r.nextSibling),Qn=e,Ut=!0,Ti=null,t!==null&&(ai[li++]=ar,ai[li++]=lr,ai[li++]=Co,ar=t.id,lr=t.overflow,Co=e),e=Sp(e,i.children),e.flags|=4096,e)}function Iv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hh(t.return,e,n)}function Kf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function v_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Dn(t,e,i.children,n),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iv(t,n,e);else if(t.tag===19)Iv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ct(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kf(e,!0,n,null,o);break;case"together":Kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Po|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YE(t,e,n){switch(e.tag){case 3:p_(e),ks();break;case 5:Hy(e);break;case 1:Hn(e.type)&&uu(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(hu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(Ft,Ft.current&1),e.flags|=128,null):n&e.child.childLanes?m_(t,e,n):(Ct(Ft,Ft.current&1),t=hr(t,e,n),t!==null?t.sibling:null);Ct(Ft,Ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return v_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,d_(t,e,n)}return hr(t,e,n)}var g_,Sh,y_,__;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};y_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,go(Vi.current);var o=null;switch(n){case"input":r=Hd(t,r),i=Hd(t,i),o=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),o=[];break;case"textarea":r=Xd(t,r),i=Xd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=lu)}qd(n,i);var a;n=null;for(h in r)if(!i.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var l=r[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Za.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var d=i[h];if(l=r!=null?r[h]:void 0,i.hasOwnProperty(h)&&d!==l&&(d!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&l[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(o||(o=[]),o.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Za.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Rt("scroll",t),o||l===d||(o=[])):(o=o||[]).push(h,d))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};__=function(t,e,n,i){n!==i&&(e.flags|=4)};function ba(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function xn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qE(t,e,n){var i=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return Hn(e.type)&&cu(),xn(e),null;case 3:return i=e.stateNode,Bs(),It(Vn),It(bn),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ti!==null&&(Ph(Ti),Ti=null))),Sh(t,e),xn(e),null;case 5:pp(e);var r=go(cl.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return xn(e),null}if(t=go(Vi.current),fc(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[zi]=e,i[al]=o,t=(e.mode&1)!==0,n){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)Rt(Na[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Vm(i,o),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Rt("invalid",i);break;case"textarea":Wm(i,o),Rt("invalid",i)}qd(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?i.textContent!==l&&(o.suppressHydrationWarning!==!0&&uc(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&uc(i.textContent,l,t),r=["children",""+l]):Za.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Rt("scroll",i)}switch(n){case"input":nc(i),Hm(i,o,!0);break;case"textarea":nc(i),jm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=lu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[zi]=e,t[al]=i,g_(t,e,!1,!1),e.stateNode=t;e:{switch(a=$d(n,i),n){case"dialog":Rt("cancel",t),Rt("close",t),r=i;break;case"iframe":case"object":case"embed":Rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)Rt(Na[r],t);r=i;break;case"source":Rt("error",t),r=i;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),r=i;break;case"details":Rt("toggle",t),r=i;break;case"input":Vm(t,i),r=Hd(t,i),Rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Rt("invalid",t);break;case"textarea":Wm(t,i),r=Xd(t,i),Rt("invalid",t);break;default:r=i}qd(n,r),l=r;for(o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="style"?$0(t,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Y0(t,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Qa(t,d):typeof d=="number"&&Qa(t,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Za.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Rt("scroll",t):d!=null&&jh(t,o,d,a))}switch(n){case"input":nc(t),Hm(t,i,!1);break;case"textarea":nc(t),jm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Cs(t,!!i.multiple,o,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(t&&e.stateNode!=null)__(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=go(cl.current),go(Vi.current),fc(e)){if(i=e.stateNode,n=e.memoizedProps,i[zi]=e,(o=i.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:uc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uc(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=e,e.stateNode=i}return xn(e),null;case 13:if(It(Ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Zn!==null&&e.mode&1&&!(e.flags&128))Ny(),ks(),e.flags|=98560,o=!1;else if(o=fc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[zi]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),o=!1}else Ti!==null&&(Ph(Ti),Ti=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Jt===0&&(Jt=3):Cp())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Bs(),Sh(t,e),t===null&&ol(e.stateNode.containerInfo),xn(e),null;case 10:return up(e.type._context),xn(e),null;case 17:return Hn(e.type)&&cu(),xn(e),null;case 19:if(It(Ft),o=e.memoizedState,o===null)return xn(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)ba(o,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=vu(t),a!==null){for(e.flags|=128,ba(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ct(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&Wt()>Vs&&(e.flags|=128,i=!0,ba(o,!1),e.lanes=4194304)}else{if(!i)if(t=vu(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ut)return xn(e),null}else 2*Wt()-o.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,ba(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wt(),e.sibling=null,n=Ft.current,Ct(Ft,i?n&1|2:n&1),e):(xn(e),null);case 22:case 23:return bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function $E(t,e){switch(sp(e),e.tag){case 1:return Hn(e.type)&&cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),It(Vn),It(bn),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(It(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ft),null;case 4:return Bs(),null;case 10:return up(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var pc=!1,wn=!1,KE=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Gt(t,e,i)}else n.current=null}function Mh(t,e,n){try{n()}catch(i){Gt(t,e,i)}}var Uv=!1;function ZE(t,e){if(oh=ou,t=Ey(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,d=-1,h=0,p=0,y=t,v=null;t:for(;;){for(var _;y!==n||r!==0&&y.nodeType!==3||(l=a+r),y!==o||i!==0&&y.nodeType!==3||(d=a+i),y.nodeType===3&&(a+=y.nodeValue.length),(_=y.firstChild)!==null;)v=y,y=_;for(;;){if(y===t)break t;if(v===n&&++h===r&&(l=a),v===o&&++p===i&&(d=a),(_=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=_}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(sh={focusedElem:t,selectionRange:n},ou=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){e=Oe;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var b=T.memoizedProps,E=T.memoizedState,m=e.stateNode,M=m.getSnapshotBeforeUpdate(e.elementType===e.type?b:Ei(e.type,b),E);m.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(L){Gt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}return T=Uv,Uv=!1,T}function Wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Mh(e,n,o)}r=r.next}while(r!==i)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zi],delete e[al],delete e[ch],delete e[IE],delete e[UE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S_(t){return t.tag===5||t.tag===3||t.tag===4}function Ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lu));else if(i!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}function Th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}var vn=null,wi=!1;function Mr(t,e,n){for(n=n.child;n!==null;)M_(t,e,n),n=n.sibling}function M_(t,e,n){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(Pu,n)}catch{}switch(n.tag){case 5:wn||Ms(n,e);case 6:var i=vn,r=wi;vn=null,Mr(t,e,n),vn=i,wi=r,vn!==null&&(wi?(t=vn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vn.removeChild(n.stateNode));break;case 18:vn!==null&&(wi?(t=vn,n=n.stateNode,t.nodeType===8?Hf(t.parentNode,n):t.nodeType===1&&Hf(t,n),nl(t)):Hf(vn,n.stateNode));break;case 4:i=vn,r=wi,vn=n.stateNode.containerInfo,wi=!0,Mr(t,e,n),vn=i,wi=r;break;case 0:case 11:case 14:case 15:if(!wn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Mh(n,e,a),r=r.next}while(r!==i)}Mr(t,e,n);break;case 1:if(!wn&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Gt(n,e,l)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(wn=(i=wn)||n.memoizedState!==null,Mr(t,e,n),wn=i):Mr(t,e,n);break;default:Mr(t,e,n)}}function Nv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KE),e.forEach(function(i){var r=sw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function gi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:vn=l.stateNode,wi=!1;break e;case 3:vn=l.stateNode.containerInfo,wi=!0;break e;case 4:vn=l.stateNode.containerInfo,wi=!0;break e}l=l.return}if(vn===null)throw Error(Se(160));M_(o,a,r),vn=null,wi=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(h){Gt(r,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E_(e,t),e=e.sibling}function E_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gi(e,t),Oi(t),i&4){try{Wa(3,t,t.return),Fu(3,t)}catch(b){Gt(t,t.return,b)}try{Wa(5,t,t.return)}catch(b){Gt(t,t.return,b)}}break;case 1:gi(e,t),Oi(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(gi(e,t),Oi(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Qa(r,"")}catch(b){Gt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,l=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&W0(r,o),$d(l,a);var h=$d(l,o);for(a=0;a<d.length;a+=2){var p=d[a],y=d[a+1];p==="style"?$0(r,y):p==="dangerouslySetInnerHTML"?Y0(r,y):p==="children"?Qa(r,y):jh(r,p,y,h)}switch(l){case"input":Wd(r,o);break;case"textarea":j0(r,o);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Cs(r,!!o.multiple,_,!1):v!==!!o.multiple&&(o.defaultValue!=null?Cs(r,!!o.multiple,o.defaultValue,!0):Cs(r,!!o.multiple,o.multiple?[]:"",!1))}r[al]=o}catch(b){Gt(t,t.return,b)}}break;case 6:if(gi(e,t),Oi(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(b){Gt(t,t.return,b)}}break;case 3:if(gi(e,t),Oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(e.containerInfo)}catch(b){Gt(t,t.return,b)}break;case 4:gi(e,t),Oi(t);break;case 13:gi(e,t),Oi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(wp=Wt())),i&4&&Nv(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(wn=(h=wn)||p,gi(e,t),wn=h):gi(e,t),Oi(t),i&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(Oe=t,p=t.child;p!==null;){for(y=Oe=p;Oe!==null;){switch(v=Oe,_=v.child,v.tag){case 0:case 11:case 14:case 15:Wa(4,v,v.return);break;case 1:Ms(v,v.return);var T=v.stateNode;if(typeof T.componentWillUnmount=="function"){i=v,n=v.return;try{e=i,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(b){Gt(i,n,b)}}break;case 5:Ms(v,v.return);break;case 22:if(v.memoizedState!==null){kv(y);continue}}_!==null?(_.return=v,Oe=_):kv(y)}p=p.sibling}e:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{r=y.stateNode,h?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=y.stateNode,d=y.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=q0("display",a))}catch(b){Gt(t,t.return,b)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(b){Gt(t,t.return,b)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:gi(e,t),Oi(t),i&4&&Nv(t);break;case 21:break;default:gi(e,t),Oi(t)}}function Oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(S_(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qa(r,""),i.flags&=-33);var o=Ov(t);Th(t,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Ov(t);wh(t,l,a);break;default:throw Error(Se(161))}}catch(d){Gt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QE(t,e,n){Oe=t,w_(t)}function w_(t,e,n){for(var i=(t.mode&1)!==0;Oe!==null;){var r=Oe,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||pc;if(!a){var l=r.alternate,d=l!==null&&l.memoizedState!==null||wn;l=pc;var h=wn;if(pc=a,(wn=d)&&!h)for(Oe=r;Oe!==null;)a=Oe,d=a.child,a.tag===22&&a.memoizedState!==null?zv(r):d!==null?(d.return=a,Oe=d):zv(r);for(;o!==null;)Oe=o,w_(o),o=o.sibling;Oe=r,pc=l,wn=h}Fv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Oe=o):Fv(t)}}function Fv(t){for(;Oe!==null;){var e=Oe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wn||Fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!wn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&xv(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xv(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&nl(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}wn||e.flags&512&&Eh(e)}catch(v){Gt(e,e.return,v)}}if(e===t){Oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function kv(t){for(;Oe!==null;){var e=Oe;if(e===t){Oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function zv(t){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(d){Gt(e,n,d)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(d){Gt(e,r,d)}}var o=e.return;try{Eh(e)}catch(d){Gt(e,o,d)}break;case 5:var a=e.return;try{Eh(e)}catch(d){Gt(e,a,d)}}}catch(d){Gt(e,e.return,d)}if(e===t){Oe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Oe=l;break}Oe=e.return}}var JE=Math.ceil,_u=mr.ReactCurrentDispatcher,Mp=mr.ReactCurrentOwner,di=mr.ReactCurrentBatchConfig,vt=0,fn=null,Kt=null,gn=0,Kn=0,Es=Xr(0),Jt=0,hl=null,Po=0,ku=0,Ep=0,ja=null,kn=null,wp=0,Vs=1/0,rr=null,xu=!1,bh=null,zr=null,mc=!1,Ir=null,Su=0,Xa=0,Ch=null,Kc=-1,Zc=0;function In(){return vt&6?Wt():Kc!==-1?Kc:Kc=Wt()}function Br(t){return t.mode&1?vt&2&&gn!==0?gn&-gn:NE.transition!==null?(Zc===0&&(Zc=ay()),Zc):(t=St,t!==0||(t=window.event,t=t===void 0?16:py(t.type)),t):1}function Ri(t,e,n,i){if(50<Xa)throw Xa=0,Ch=null,Error(Se(185));Sl(t,n,i),(!(vt&2)||t!==fn)&&(t===fn&&(!(vt&2)&&(ku|=n),Jt===4&&Dr(t,gn)),Wn(t,i),n===1&&vt===0&&!(e.mode&1)&&(Vs=Wt()+500,Uu&&Yr()))}function Wn(t,e){var n=t.callbackNode;NM(t,e);var i=ru(t,t===fn?gn:0);if(i===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?OE(Bv.bind(null,t)):Iy(Bv.bind(null,t)),DE(function(){!(vt&6)&&Yr()}),n=null;else{switch(ly(i)){case 1:n=Kh;break;case 4:n=oy;break;case 16:n=iu;break;case 536870912:n=sy;break;default:n=iu}n=L_(n,T_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function T_(t,e){if(Kc=-1,Zc=0,vt&6)throw Error(Se(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=ru(t,t===fn?gn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Mu(t,i);else{e=i;var r=vt;vt|=2;var o=C_();(fn!==t||gn!==e)&&(rr=null,Vs=Wt()+500,xo(t,e));do try{nw();break}catch(l){b_(t,l)}while(1);cp(),_u.current=o,vt=r,Kt!==null?e=0:(fn=null,gn=0,e=Jt)}if(e!==0){if(e===2&&(r=eh(t),r!==0&&(i=r,e=Ah(t,r))),e===1)throw n=hl,xo(t,0),Dr(t,i),Wn(t,Wt()),n;if(e===6)Dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!ew(r)&&(e=Mu(t,i),e===2&&(o=eh(t),o!==0&&(i=o,e=Ah(t,o))),e===1))throw n=hl,xo(t,0),Dr(t,i),Wn(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:co(t,kn,rr);break;case 3:if(Dr(t,i),(i&130023424)===i&&(e=wp+500-Wt(),10<e)){if(ru(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){In(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=lh(co.bind(null,t,kn,rr),e);break}co(t,kn,rr);break;case 4:if(Dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Pi(i);o=1<<a,a=e[a],a>r&&(r=a),i&=~o}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*JE(i/1960))-i,10<i){t.timeoutHandle=lh(co.bind(null,t,kn,rr),i);break}co(t,kn,rr);break;case 5:co(t,kn,rr);break;default:throw Error(Se(329))}}}return Wn(t,Wt()),t.callbackNode===n?T_.bind(null,t):null}function Ah(t,e){var n=ja;return t.current.memoizedState.isDehydrated&&(xo(t,e).flags|=256),t=Mu(t,e),t!==2&&(e=kn,kn=n,e!==null&&Ph(e)),t}function Ph(t){kn===null?kn=t:kn.push.apply(kn,t)}function ew(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Li(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~Ep,e&=~ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pi(e),i=1<<n;t[n]=-1,e&=~i}}function Bv(t){if(vt&6)throw Error(Se(327));Ls();var e=ru(t,0);if(!(e&1))return Wn(t,Wt()),null;var n=Mu(t,e);if(t.tag!==0&&n===2){var i=eh(t);i!==0&&(e=i,n=Ah(t,i))}if(n===1)throw n=hl,xo(t,0),Dr(t,e),Wn(t,Wt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,co(t,kn,rr),Wn(t,Wt()),null}function Tp(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(Vs=Wt()+500,Uu&&Yr())}}function Ro(t){Ir!==null&&Ir.tag===0&&!(vt&6)&&Ls();var e=vt;vt|=1;var n=di.transition,i=St;try{if(di.transition=null,St=1,t)return t()}finally{St=i,di.transition=n,vt=e,!(vt&6)&&Yr()}}function bp(){Kn=Es.current,It(Es)}function xo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RE(n)),Kt!==null)for(n=Kt.return;n!==null;){var i=n;switch(sp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cu();break;case 3:Bs(),It(Vn),It(bn),mp();break;case 5:pp(i);break;case 4:Bs();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:up(i.type._context);break;case 22:case 23:bp()}n=n.return}if(fn=t,Kt=t=Gr(t.current,null),gn=Kn=e,Jt=0,hl=null,Ep=ku=Po=0,kn=ja=null,vo!==null){for(e=0;e<vo.length;e++)if(n=vo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}vo=null}return t}function b_(t,e){do{var n=Kt;try{if(cp(),Yc.current=yu,gu){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gu=!1}if(Ao=0,un=Zt=kt=null,Ha=!1,ul=0,Mp.current=null,n===null||n.return===null){Jt=1,hl=e,Kt=null;break}e:{var o=t,a=n.return,l=n,d=e;if(e=gn,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,p=l,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=Cv(a);if(_!==null){_.flags&=-257,Av(_,a,l,o,e),_.mode&1&&bv(o,h,e),e=_,d=h;var T=e.updateQueue;if(T===null){var b=new Set;b.add(d),e.updateQueue=b}else T.add(d);break e}else{if(!(e&1)){bv(o,h,e),Cp();break e}d=Error(Se(426))}}else if(Ut&&l.mode&1){var E=Cv(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Av(E,a,l,o,e),ap(Gs(d,l));break e}}o=d=Gs(d,l),Jt!==4&&(Jt=2),ja===null?ja=[o]:ja.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=c_(o,d,e);_v(o,m);break e;case 1:l=d;var M=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof M.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(zr===null||!zr.has(w)))){o.flags|=65536,e&=-e,o.lanes|=e;var L=u_(o,l,e);_v(o,L);break e}}o=o.return}while(o!==null)}P_(n)}catch(P){e=P,Kt===n&&n!==null&&(Kt=n=n.return);continue}break}while(1)}function C_(){var t=_u.current;return _u.current=yu,t===null?yu:t}function Cp(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),fn===null||!(Po&268435455)&&!(ku&268435455)||Dr(fn,gn)}function Mu(t,e){var n=vt;vt|=2;var i=C_();(fn!==t||gn!==e)&&(rr=null,xo(t,e));do try{tw();break}catch(r){b_(t,r)}while(1);if(cp(),vt=n,_u.current=i,Kt!==null)throw Error(Se(261));return fn=null,gn=0,Jt}function tw(){for(;Kt!==null;)A_(Kt)}function nw(){for(;Kt!==null&&!CM();)A_(Kt)}function A_(t){var e=D_(t.alternate,t,Kn);t.memoizedProps=t.pendingProps,e===null?P_(t):Kt=e,Mp.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$E(n,e),n!==null){n.flags&=32767,Kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Kt=null;return}}else if(n=qE(n,e,Kn),n!==null){Kt=n;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);Jt===0&&(Jt=5)}function co(t,e,n){var i=St,r=di.transition;try{di.transition=null,St=1,iw(t,e,n,i)}finally{di.transition=r,St=i}return null}function iw(t,e,n,i){do Ls();while(Ir!==null);if(vt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(FM(t,o),t===fn&&(Kt=fn=null,gn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mc||(mc=!0,L_(iu,function(){return Ls(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=di.transition,di.transition=null;var a=St;St=1;var l=vt;vt|=4,Mp.current=null,ZE(t,n),E_(n,t),EE(sh),ou=!!oh,sh=oh=null,t.current=n,QE(n),AM(),vt=l,St=a,di.transition=o}else t.current=n;if(mc&&(mc=!1,Ir=t,Su=r),o=t.pendingLanes,o===0&&(zr=null),DM(n.stateNode),Wn(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xu)throw xu=!1,t=bh,bh=null,t;return Su&1&&t.tag!==0&&Ls(),o=t.pendingLanes,o&1?t===Ch?Xa++:(Xa=0,Ch=t):Xa=0,Yr(),null}function Ls(){if(Ir!==null){var t=ly(Su),e=di.transition,n=St;try{if(di.transition=null,St=16>t?16:t,Ir===null)var i=!1;else{if(t=Ir,Ir=null,Su=0,vt&6)throw Error(Se(331));var r=vt;for(vt|=4,Oe=t.current;Oe!==null;){var o=Oe,a=o.child;if(Oe.flags&16){var l=o.deletions;if(l!==null){for(var d=0;d<l.length;d++){var h=l[d];for(Oe=h;Oe!==null;){var p=Oe;switch(p.tag){case 0:case 11:case 15:Wa(8,p,o)}var y=p.child;if(y!==null)y.return=p,Oe=y;else for(;Oe!==null;){p=Oe;var v=p.sibling,_=p.return;if(x_(p),p===h){Oe=null;break}if(v!==null){v.return=_,Oe=v;break}Oe=_}}}var T=o.alternate;if(T!==null){var b=T.child;if(b!==null){T.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}Oe=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Oe=a;else e:for(;Oe!==null;){if(o=Oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wa(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,Oe=m;break e}Oe=o.return}}var M=t.current;for(Oe=M;Oe!==null;){a=Oe;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,Oe=w;else e:for(a=M;Oe!==null;){if(l=Oe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fu(9,l)}}catch(P){Gt(l,l.return,P)}if(l===a){Oe=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,Oe=L;break e}Oe=l.return}}if(vt=r,Yr(),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(Pu,t)}catch{}i=!0}return i}finally{St=n,di.transition=e}}return!1}function Gv(t,e,n){e=Gs(n,e),e=c_(t,e,1),t=kr(t,e,1),e=In(),t!==null&&(Sl(t,1,e),Wn(t,e))}function Gt(t,e,n){if(t.tag===3)Gv(t,t,n);else for(;e!==null;){if(e.tag===3){Gv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zr===null||!zr.has(i))){t=Gs(n,t),t=u_(e,t,1),e=kr(e,t,1),t=In(),e!==null&&(Sl(e,1,t),Wn(e,t));break}}e=e.return}}function rw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=In(),t.pingedLanes|=t.suspendedLanes&n,fn===t&&(gn&n)===n&&(Jt===4||Jt===3&&(gn&130023424)===gn&&500>Wt()-wp?xo(t,0):Ep|=n),Wn(t,e)}function R_(t,e){e===0&&(t.mode&1?(e=oc,oc<<=1,!(oc&130023424)&&(oc=4194304)):e=1);var n=In();t=dr(t,e),t!==null&&(Sl(t,e,n),Wn(t,n))}function ow(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R_(t,n)}function sw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),R_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vn.current)Gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gn=!1,YE(t,e,n);Gn=!!(t.flags&131072)}else Gn=!1,Ut&&e.flags&1048576&&Uy(e,du,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$c(t,e),t=e.pendingProps;var r=Fs(e,bn.current);Ds(e,n),r=gp(null,e,i,t,r,n);var o=yp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Hn(i)?(o=!0,uu(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dp(e),r.updater=Ou,e.stateNode=r,r._reactInternals=e,mh(e,i,t,n),e=yh(null,e,i,!0,o,n)):(e.tag=0,Ut&&o&&op(e),Dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($c(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lw(i),t=Ei(i,t),r){case 0:e=gh(null,e,i,t,n);break e;case 1:e=Dv(null,e,i,t,n);break e;case 11:e=Pv(null,e,i,t,n);break e;case 14:e=Rv(null,e,i,Ei(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),gh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),Dv(t,e,i,r,n);case 3:e:{if(p_(e),t===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,ky(t,e),mu(e,i,null,n);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Gs(Error(Se(423)),e),e=Lv(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(Se(424)),e),e=Lv(t,e,i,n,r);break e}else for(Zn=Fr(e.stateNode.containerInfo.firstChild),Qn=e,Ut=!0,Ti=null,n=Vy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=hr(t,e,n);break e}Dn(t,e,i,n)}e=e.child}return e;case 5:return Hy(e),t===null&&dh(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,a=r.children,ah(i,r)?a=null:o!==null&&ah(i,o)&&(e.flags|=32),h_(t,e),Dn(t,e,a,n),e.child;case 6:return t===null&&dh(e),null;case 13:return m_(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),Pv(t,e,i,r,n);case 7:return Dn(t,e,e.pendingProps,n),e.child;case 8:return Dn(t,e,e.pendingProps.children,n),e.child;case 12:return Dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value,Ct(hu,i._currentValue),i._currentValue=a,o!==null)if(Li(o.value,a)){if(o.children===r.children&&!Vn.current){e=hr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var d=l.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=cr(-1,n&-n),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?d.next=d:(d.next=p.next,p.next=d),h.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),hh(o.return,n,e),l.lanes|=n;break}d=d.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Se(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hh(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=hi(r),i=i(r),e.flags|=1,Dn(t,e,i,n),e.child;case 14:return i=e.type,r=Ei(i,e.pendingProps),r=Ei(i.type,r),Rv(t,e,i,r,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),$c(t,e),e.tag=1,Hn(i)?(t=!0,uu(e)):t=!1,Ds(e,n),By(e,i,r),mh(e,i,r,n),yh(null,e,i,!0,t,n);case 19:return v_(t,e,n);case 22:return d_(t,e,n)}throw Error(Se(156,e.tag))};function L_(t,e){return ry(t,e)}function aw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,e,n,i){return new aw(t,e,n,i)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lw(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yh)return 11;if(t===qh)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qc(t,e,n,i,r,o){var a=2;if(i=t,typeof t=="function")Ap(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return So(n.children,r,o,e);case Xh:a=8,r|=8;break;case zd:return t=ui(12,n,e,r|2),t.elementType=zd,t.lanes=o,t;case Bd:return t=ui(13,n,e,r),t.elementType=Bd,t.lanes=o,t;case Gd:return t=ui(19,n,e,r),t.elementType=Gd,t.lanes=o,t;case G0:return zu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:a=10;break e;case B0:a=9;break e;case Yh:a=11;break e;case qh:a=14;break e;case Ar:a=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=ui(a,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function So(t,e,n,i){return t=ui(7,t,i,e),t.lanes=n,t}function zu(t,e,n,i){return t=ui(22,t,i,e),t.elementType=G0,t.lanes=n,t.stateNode={isHidden:!1},t}function Zf(t,e,n){return t=ui(6,t,null,e),t.lanes=n,t}function Qf(t,e,n){return e=ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lf(0),this.expirationTimes=Lf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,i,r,o,a,l,d){return t=new cw(t,e,n,l,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ui(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(o),t}function uw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function I_(t){if(!t)return Hr;t=t._reactInternals;e:{if(Oo(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(Hn(n))return Ly(t,n,e)}return e}function U_(t,e,n,i,r,o,a,l,d){return t=Pp(n,i,!0,t,r,o,a,l,d),t.context=I_(null),n=t.current,i=In(),r=Br(n),o=cr(i,r),o.callback=e??null,kr(n,o,r),t.current.lanes=r,Sl(t,r,i),Wn(t,i),t}function Bu(t,e,n,i){var r=e.current,o=In(),a=Br(r);return n=I_(n),e.context===null?e.context=n:e.pendingContext=n,e=cr(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=kr(r,e,a),t!==null&&(Ri(t,r,a,o),Xc(t,r,a)),a}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){Vv(t,e),(t=t.alternate)&&Vv(t,e)}function fw(){return null}var O_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dp(t){this._internalRoot=t}Gu.prototype.render=Dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));Bu(t,e,null,null)};Gu.prototype.unmount=Dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ro(function(){Bu(null,t,null,null)}),e[fr]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=fy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&hy(t)}};function Lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hv(){}function dw(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var h=Eu(a);o.call(h)}}var a=U_(e,i,t,0,null,!1,!1,"",Hv);return t._reactRootContainer=a,t[fr]=a.current,ol(t.nodeType===8?t.parentNode:t),Ro(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var h=Eu(d);l.call(h)}}var d=Pp(t,0,!1,null,null,!1,!1,"",Hv);return t._reactRootContainer=d,t[fr]=d.current,ol(t.nodeType===8?t.parentNode:t),Ro(function(){Bu(e,d,n,i)}),d}function Hu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var l=r;r=function(){var d=Eu(a);l.call(d)}}Bu(e,a,t,r)}else a=dw(n,e,t,r,i);return Eu(a)}cy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(Zh(e,n|1),Wn(e,Wt()),!(vt&6)&&(Vs=Wt()+500,Yr()))}break;case 13:Ro(function(){var i=dr(t,1);if(i!==null){var r=In();Ri(i,t,1,r)}}),Rp(t,1)}};Qh=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=In();Ri(e,t,134217728,n)}Rp(t,134217728)}};uy=function(t){if(t.tag===13){var e=Br(t),n=dr(t,e);if(n!==null){var i=In();Ri(n,t,e,i)}Rp(t,e)}};fy=function(){return St};dy=function(t,e){var n=St;try{return St=t,e()}finally{St=n}};Zd=function(t,e,n){switch(e){case"input":if(Wd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Iu(i);if(!r)throw Error(Se(90));H0(i),Wd(i,r)}}}break;case"textarea":j0(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Q0=Tp;J0=Ro;var hw={usingClientEntryPoint:!1,Events:[El,gs,Iu,K0,Z0,Tp]},Ca={findFiberByHostInstance:mo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pw={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ny(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Pu=vc.inject(pw),Gi=vc}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;ei.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(e))throw Error(Se(200));return uw(t,e,null,n)};ei.createRoot=function(t,e){if(!Lp(t))throw Error(Se(299));var n=!1,i="",r=O_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,i,r),t[fr]=e.current,ol(t.nodeType===8?t.parentNode:t),new Dp(e)};ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=ny(e),t=t===null?null:t.stateNode,t};ei.flushSync=function(t){return Ro(t)};ei.hydrate=function(t,e,n){if(!Vu(e))throw Error(Se(200));return Hu(null,t,e,!0,n)};ei.hydrateRoot=function(t,e,n){if(!Lp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=O_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=U_(e,null,t,1,n??null,r,!1,o,a),t[fr]=e.current,ol(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gu(e)};ei.render=function(t,e,n){if(!Vu(e))throw Error(Se(200));return Hu(null,t,e,!1,n)};ei.unmountComponentAtNode=function(t){if(!Vu(t))throw Error(Se(40));return t._reactRootContainer?(Ro(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[fr]=null})}),!0):!1};ei.unstable_batchedUpdates=Tp;ei.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vu(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return Hu(t,e,n,!1,i)};ei.version="18.2.0-next-9e3b772b8-20220608";function N_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N_)}catch(t){console.error(t)}}N_(),U0.exports=ei;var mw=U0.exports,Wv=mw;Fd.createRoot=Wv.createRoot,Fd.hydrateRoot=Wv.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="152",Yo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vw=0,jv=1,gw=2,Up=1,F_=2,nr=3,Wr=0,Un=1,Bi=2,cn=0,Is=1,Rh=2,Xv=3,Yv=4,pl=5,sr=100,yw=101,_w=102,qv=103,$v=104,Dh=200,xw=201,Sw=202,Mw=203,Op=204,Np=205,k_=206,Ew=207,z_=208,ww=209,Tw=210,bw=0,Cw=1,Aw=2,Lh=3,Pw=4,Rw=5,Dw=6,Lw=7,Wu=0,Iw=1,Uw=2,Hi=0,Ow=1,B_=2,Nw=3,Fw=4,kw=5,G_=300,Hs=301,Ws=302,wu=303,Ih=304,ju=306,Do=1e3,Ci=1001,Uh=1002,Qt=1003,Kv=1004,Jf=1005,ci=1006,zw=1007,ml=1008,Lo=1009,Bw=1010,Gw=1011,Fp=1012,Vw=1013,yo=1014,_o=1015,vl=1016,Hw=1017,Ww=1018,Us=1020,jw=1021,Ai=1023,Xw=1024,Yw=1025,Mo=1026,js=1027,qw=1028,$w=1029,Kw=1030,Zw=1031,Qw=1033,ed=33776,td=33777,nd=33778,id=33779,Zv=35840,Qv=35841,Jv=35842,eg=35843,Jw=36196,tg=37492,ng=37496,ig=37808,rg=37809,og=37810,sg=37811,ag=37812,lg=37813,cg=37814,ug=37815,fg=37816,dg=37817,hg=37818,pg=37819,mg=37820,vg=37821,rd=36492,e1=36283,gg=36284,yg=36285,_g=36286,V_=3e3,Eo=3001,t1=3200,Js=3201,ea=0,n1=1,wo="",nt="srgb",Wi="srgb-linear",H_="display-p3",od=7680,i1=519,xg=35044,Sg="300 es",Oh=1035;class No{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,Tu=180/Math.PI;function Tl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[t&255]+Sn[t>>8&255]+Sn[t>>16&255]+Sn[t>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function Tn(t,e,n){return Math.max(e,Math.min(n,t))}function r1(t,e){return(t%e+e)%e}function ad(t,e,n){return(1-n)*t+n*e}function Mg(t){return(t&t-1)===0&&t!==0}function o1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function gc(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,a,l,d,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=n,p[4]=o,p[5]=d,p[6]=i,p[7]=a,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],l=i[3],d=i[6],h=i[1],p=i[4],y=i[7],v=i[2],_=i[5],T=i[8],b=r[0],E=r[3],m=r[6],M=r[1],w=r[4],L=r[7],P=r[2],U=r[5],B=r[8];return o[0]=a*b+l*M+d*P,o[3]=a*E+l*w+d*U,o[6]=a*m+l*L+d*B,o[1]=h*b+p*M+y*P,o[4]=h*E+p*w+y*U,o[7]=h*m+p*L+y*B,o[2]=v*b+_*M+T*P,o[5]=v*E+_*w+T*U,o[8]=v*m+_*L+T*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],d=e[6],h=e[7],p=e[8];return n*a*p-n*l*h-i*o*p+i*l*d+r*o*h-r*a*d}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],d=e[6],h=e[7],p=e[8],y=p*a-l*h,v=l*d-p*o,_=h*o-a*d,T=n*y+i*v+r*_;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=y*b,e[1]=(r*h-p*i)*b,e[2]=(l*i-r*a)*b,e[3]=v*b,e[4]=(p*n-r*d)*b,e[5]=(r*o-l*n)*b,e[6]=_*b,e[7]=(i*d-h*n)*b,e[8]=(a*n-i*o)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,l){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*a+h*l)+a+e,-r*h,r*d,-r*(-h*a+d*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(ld.makeScale(e,n)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new dt;function W_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Eg={};function Ya(t){t in Eg||(Eg[t]=!0,console.warn(t))}function Os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const s1=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),a1=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function l1(t){return t.convertSRGBToLinear().applyMatrix3(a1)}function c1(t){return t.applyMatrix3(s1).convertLinearToSRGB()}const u1={[Wi]:t=>t,[nt]:t=>t.convertSRGBToLinear(),[H_]:l1},f1={[Wi]:t=>t,[nt]:t=>t.convertLinearToSRGB(),[H_]:c1},yi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Wi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=u1[e],r=f1[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let $o;class j_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$o===void 0&&($o=gl("canvas")),$o.width=e.width,$o.height=e.height;const i=$o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$o}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Os(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Os(n[i]/255)*255):n[i]=Os(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class X_{constructor(e=null){this.isSource=!0,this.uuid=Tl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(ud(r[a].image)):o.push(ud(r[a]))}else o=ud(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ud(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?j_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d1=0;class jn extends No{constructor(e=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,i=Ci,r=Ci,o=ci,a=ml,l=Ai,d=Lo,h=jn.DEFAULT_ANISOTROPY,p=wo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Tl(),this.name="",this.source=new X_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=d,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Eo?nt:wo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?Eo:V_}set encoding(e){Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Eo?nt:wo}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=G_;jn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const d=e.elements,h=d[0],p=d[4],y=d[8],v=d[1],_=d[5],T=d[9],b=d[2],E=d[6],m=d[10];if(Math.abs(p-v)<.01&&Math.abs(y-b)<.01&&Math.abs(T-E)<.01){if(Math.abs(p+v)<.1&&Math.abs(y+b)<.1&&Math.abs(T+E)<.1&&Math.abs(h+_+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,L=(_+1)/2,P=(m+1)/2,U=(p+v)/4,B=(y+b)/4,z=(T+E)/4;return w>L&&w>P?w<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(w),r=U/i,o=B/i):L>P?L<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),i=U/r,o=z/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=B/o,r=z/o),this.set(i,r,o,n),this}let M=Math.sqrt((E-T)*(E-T)+(y-b)*(y-b)+(v-p)*(v-p));return Math.abs(M)<.001&&(M=1),this.x=(E-T)/M,this.y=(y-b)/M,this.z=(v-p)/M,this.w=Math.acos((h+_+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends No{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Eo?nt:wo),this.texture=new jn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ci,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new X_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Y_ extends jn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class h1 extends jn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,l){let d=i[r+0],h=i[r+1],p=i[r+2],y=i[r+3];const v=o[a+0],_=o[a+1],T=o[a+2],b=o[a+3];if(l===0){e[n+0]=d,e[n+1]=h,e[n+2]=p,e[n+3]=y;return}if(l===1){e[n+0]=v,e[n+1]=_,e[n+2]=T,e[n+3]=b;return}if(y!==b||d!==v||h!==_||p!==T){let E=1-l;const m=d*v+h*_+p*T+y*b,M=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const P=Math.sqrt(w),U=Math.atan2(P,m*M);E=Math.sin(E*U)/P,l=Math.sin(l*U)/P}const L=l*M;if(d=d*E+v*L,h=h*E+_*L,p=p*E+T*L,y=y*E+b*L,E===1-l){const P=1/Math.sqrt(d*d+h*h+p*p+y*y);d*=P,h*=P,p*=P,y*=P}}e[n]=d,e[n+1]=h,e[n+2]=p,e[n+3]=y}static multiplyQuaternionsFlat(e,n,i,r,o,a){const l=i[r],d=i[r+1],h=i[r+2],p=i[r+3],y=o[a],v=o[a+1],_=o[a+2],T=o[a+3];return e[n]=l*T+p*y+d*_-h*v,e[n+1]=d*T+p*v+h*y-l*_,e[n+2]=h*T+p*_+l*v-d*y,e[n+3]=p*T-l*y-d*v-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,a=e._order,l=Math.cos,d=Math.sin,h=l(i/2),p=l(r/2),y=l(o/2),v=d(i/2),_=d(r/2),T=d(o/2);switch(a){case"XYZ":this._x=v*p*y+h*_*T,this._y=h*_*y-v*p*T,this._z=h*p*T+v*_*y,this._w=h*p*y-v*_*T;break;case"YXZ":this._x=v*p*y+h*_*T,this._y=h*_*y-v*p*T,this._z=h*p*T-v*_*y,this._w=h*p*y+v*_*T;break;case"ZXY":this._x=v*p*y-h*_*T,this._y=h*_*y+v*p*T,this._z=h*p*T+v*_*y,this._w=h*p*y-v*_*T;break;case"ZYX":this._x=v*p*y-h*_*T,this._y=h*_*y+v*p*T,this._z=h*p*T-v*_*y,this._w=h*p*y+v*_*T;break;case"YZX":this._x=v*p*y+h*_*T,this._y=h*_*y+v*p*T,this._z=h*p*T-v*_*y,this._w=h*p*y-v*_*T;break;case"XZY":this._x=v*p*y-h*_*T,this._y=h*_*y-v*p*T,this._z=h*p*T+v*_*y,this._w=h*p*y+v*_*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],l=n[5],d=n[9],h=n[2],p=n[6],y=n[10],v=i+l+y;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(p-d)*_,this._y=(o-h)*_,this._z=(a-r)*_}else if(i>l&&i>y){const _=2*Math.sqrt(1+i-l-y);this._w=(p-d)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(o+h)/_}else if(l>y){const _=2*Math.sqrt(1+l-i-y);this._w=(o-h)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+y-i-l);this._w=(a-r)/_,this._x=(o+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,l=n._x,d=n._y,h=n._z,p=n._w;return this._x=i*p+a*l+r*h-o*d,this._y=r*p+a*d+o*l-i*h,this._z=o*p+a*h+i*d-r*l,this._w=a*p-i*l-r*d-o*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let l=a*e._w+i*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const d=1-l*l;if(d<=Number.EPSILON){const _=1-n;return this._w=_*a+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,l),y=Math.sin((1-n)*p)/h,v=Math.sin(n*p)/h;return this._w=a*y+this._w*v,this._x=i*y+this._x*v,this._y=r*y+this._y*v,this._z=o*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,l=e.z,d=e.w,h=d*n+a*r-l*i,p=d*i+l*n-o*r,y=d*r+o*i-a*n,v=-o*n-a*i-l*r;return this.x=h*d+v*-o+p*-l-y*-a,this.y=p*d+v*-a+y*-o-h*-l,this.z=y*d+v*-l+h*-a-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,l=n.y,d=n.z;return this.x=r*d-o*l,this.y=o*a-i*d,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new Y,wg=new Io;class bl{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox),Ko.applyMatrix4(e.matrixWorld),this.union(Ko);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let a=0,l=o.count;a<l;a++)Zi.fromBufferAttribute(o,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Zi)}else r.boundingBox===null&&r.computeBoundingBox(),Ko.copy(r.boundingBox),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),yc.subVectors(this.max,Aa),Zo.subVectors(e.a,Aa),Qo.subVectors(e.b,Aa),Jo.subVectors(e.c,Aa),Er.subVectors(Qo,Zo),wr.subVectors(Jo,Qo),ro.subVectors(Zo,Jo);let n=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-ro.z,ro.y,Er.z,0,-Er.x,wr.z,0,-wr.x,ro.z,0,-ro.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-ro.y,ro.x,0];return!dd(n,Zo,Qo,Jo,yc)||(n=[1,0,0,0,1,0,0,0,1],!dd(n,Zo,Qo,Jo,yc))?!1:(_c.crossVectors(Er,wr),n=[_c.x,_c.y,_c.z],dd(n,Zo,Qo,Jo,yc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Zi=new Y,Ko=new bl,Zo=new Y,Qo=new Y,Jo=new Y,Er=new Y,wr=new Y,ro=new Y,Aa=new Y,yc=new Y,_c=new Y,oo=new Y;function dd(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){oo.fromArray(t,o);const l=r.x*Math.abs(oo.x)+r.y*Math.abs(oo.y)+r.z*Math.abs(oo.z),d=e.dot(oo),h=n.dot(oo),p=i.dot(oo);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>l)return!1}return!0}const p1=new bl,Pa=new Y,hd=new Y;class kp{constructor(e=new Y,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):p1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(hd)),this.expandByPoint(Pa.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new Y,pd=new Y,xc=new Y,Tr=new Y,md=new Y,Sc=new Y,vd=new Y;class m1{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pd.copy(e).add(n).multiplyScalar(.5),xc.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(pd);const o=e.distanceTo(n)*.5,a=-this.direction.dot(xc),l=Tr.dot(this.direction),d=-Tr.dot(xc),h=Tr.lengthSq(),p=Math.abs(1-a*a);let y,v,_,T;if(p>0)if(y=a*d-l,v=a*l-d,T=o*p,y>=0)if(v>=-T)if(v<=T){const b=1/p;y*=b,v*=b,_=y*(y+a*v+2*l)+v*(a*y+v+2*d)+h}else v=o,y=Math.max(0,-(a*v+l)),_=-y*y+v*(v+2*d)+h;else v=-o,y=Math.max(0,-(a*v+l)),_=-y*y+v*(v+2*d)+h;else v<=-T?(y=Math.max(0,-(-a*o+l)),v=y>0?-o:Math.min(Math.max(-o,-d),o),_=-y*y+v*(v+2*d)+h):v<=T?(y=0,v=Math.min(Math.max(-o,-d),o),_=v*(v+2*d)+h):(y=Math.max(0,-(a*o+l)),v=y>0?o:Math.min(Math.max(-o,-d),o),_=-y*y+v*(v+2*d)+h);else v=a>0?-o:o,y=Math.max(0,-(a*v+l)),_=-y*y+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,y),r&&r.copy(pd).addScaledVector(xc,v),_}intersectSphere(e,n){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),l=i-a,d=i+a;return d<0?null:l<0?this.at(d,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,l,d;const h=1/this.direction.x,p=1/this.direction.y,y=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),p>=0?(o=(e.min.y-v.y)*p,a=(e.max.y-v.y)*p):(o=(e.max.y-v.y)*p,a=(e.min.y-v.y)*p),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),y>=0?(l=(e.min.z-v.z)*y,d=(e.max.z-v.z)*y):(l=(e.max.z-v.z)*y,d=(e.min.z-v.z)*y),i>d||l>r)||((l>i||i!==i)&&(i=l),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,i,r,o){md.subVectors(n,e),Sc.subVectors(i,e),vd.crossVectors(md,Sc);let a=this.direction.dot(vd),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Tr.subVectors(this.origin,e);const d=l*this.direction.dot(Sc.crossVectors(Tr,Sc));if(d<0)return null;const h=l*this.direction.dot(md.cross(Tr));if(h<0||d+h>a)return null;const p=-l*Tr.dot(vd);return p<0?null:this.at(p/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,a,l,d,h,p,y,v,_,T,b,E){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=o,m[5]=a,m[9]=l,m[13]=d,m[2]=h,m[6]=p,m[10]=y,m[14]=v,m[3]=_,m[7]=T,m[11]=b,m[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),o=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),l=Math.sin(i),d=Math.cos(r),h=Math.sin(r),p=Math.cos(o),y=Math.sin(o);if(e.order==="XYZ"){const v=a*p,_=a*y,T=l*p,b=l*y;n[0]=d*p,n[4]=-d*y,n[8]=h,n[1]=_+T*h,n[5]=v-b*h,n[9]=-l*d,n[2]=b-v*h,n[6]=T+_*h,n[10]=a*d}else if(e.order==="YXZ"){const v=d*p,_=d*y,T=h*p,b=h*y;n[0]=v+b*l,n[4]=T*l-_,n[8]=a*h,n[1]=a*y,n[5]=a*p,n[9]=-l,n[2]=_*l-T,n[6]=b+v*l,n[10]=a*d}else if(e.order==="ZXY"){const v=d*p,_=d*y,T=h*p,b=h*y;n[0]=v-b*l,n[4]=-a*y,n[8]=T+_*l,n[1]=_+T*l,n[5]=a*p,n[9]=b-v*l,n[2]=-a*h,n[6]=l,n[10]=a*d}else if(e.order==="ZYX"){const v=a*p,_=a*y,T=l*p,b=l*y;n[0]=d*p,n[4]=T*h-_,n[8]=v*h+b,n[1]=d*y,n[5]=b*h+v,n[9]=_*h-T,n[2]=-h,n[6]=l*d,n[10]=a*d}else if(e.order==="YZX"){const v=a*d,_=a*h,T=l*d,b=l*h;n[0]=d*p,n[4]=b-v*y,n[8]=T*y+_,n[1]=y,n[5]=a*p,n[9]=-l*p,n[2]=-h*p,n[6]=_*y+T,n[10]=v-b*y}else if(e.order==="XZY"){const v=a*d,_=a*h,T=l*d,b=l*h;n[0]=d*p,n[4]=-y,n[8]=h*p,n[1]=v*y+b,n[5]=a*p,n[9]=_*y-T,n[2]=T*y-_,n[6]=l*p,n[10]=b*y+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v1,e,g1)}lookAt(e,n,i){const r=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),br.crossVectors(i,qn),br.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),br.crossVectors(i,qn)),br.normalize(),Mc.crossVectors(qn,br),r[0]=br.x,r[4]=Mc.x,r[8]=qn.x,r[1]=br.y,r[5]=Mc.y,r[9]=qn.y,r[2]=br.z,r[6]=Mc.z,r[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],l=i[4],d=i[8],h=i[12],p=i[1],y=i[5],v=i[9],_=i[13],T=i[2],b=i[6],E=i[10],m=i[14],M=i[3],w=i[7],L=i[11],P=i[15],U=r[0],B=r[4],z=r[8],R=r[12],N=r[1],ae=r[5],fe=r[9],$=r[13],te=r[2],j=r[6],ce=r[10],pe=r[14],X=r[3],J=r[7],ne=r[11],we=r[15];return o[0]=a*U+l*N+d*te+h*X,o[4]=a*B+l*ae+d*j+h*J,o[8]=a*z+l*fe+d*ce+h*ne,o[12]=a*R+l*$+d*pe+h*we,o[1]=p*U+y*N+v*te+_*X,o[5]=p*B+y*ae+v*j+_*J,o[9]=p*z+y*fe+v*ce+_*ne,o[13]=p*R+y*$+v*pe+_*we,o[2]=T*U+b*N+E*te+m*X,o[6]=T*B+b*ae+E*j+m*J,o[10]=T*z+b*fe+E*ce+m*ne,o[14]=T*R+b*$+E*pe+m*we,o[3]=M*U+w*N+L*te+P*X,o[7]=M*B+w*ae+L*j+P*J,o[11]=M*z+w*fe+L*ce+P*ne,o[15]=M*R+w*$+L*pe+P*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],l=e[5],d=e[9],h=e[13],p=e[2],y=e[6],v=e[10],_=e[14],T=e[3],b=e[7],E=e[11],m=e[15];return T*(+o*d*y-r*h*y-o*l*v+i*h*v+r*l*_-i*d*_)+b*(+n*d*_-n*h*v+o*a*v-r*a*_+r*h*p-o*d*p)+E*(+n*h*y-n*l*_-o*a*y+i*a*_+o*l*p-i*h*p)+m*(-r*l*p-n*d*y+n*l*v+r*a*y-i*a*v+i*d*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],l=e[5],d=e[6],h=e[7],p=e[8],y=e[9],v=e[10],_=e[11],T=e[12],b=e[13],E=e[14],m=e[15],M=y*E*h-b*v*h+b*d*_-l*E*_-y*d*m+l*v*m,w=T*v*h-p*E*h-T*d*_+a*E*_+p*d*m-a*v*m,L=p*b*h-T*y*h+T*l*_-a*b*_-p*l*m+a*y*m,P=T*y*d-p*b*d-T*l*v+a*b*v+p*l*E-a*y*E,U=n*M+i*w+r*L+o*P;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/U;return e[0]=M*B,e[1]=(b*v*o-y*E*o-b*r*_+i*E*_+y*r*m-i*v*m)*B,e[2]=(l*E*o-b*d*o+b*r*h-i*E*h-l*r*m+i*d*m)*B,e[3]=(y*d*o-l*v*o-y*r*h+i*v*h+l*r*_-i*d*_)*B,e[4]=w*B,e[5]=(p*E*o-T*v*o+T*r*_-n*E*_-p*r*m+n*v*m)*B,e[6]=(T*d*o-a*E*o-T*r*h+n*E*h+a*r*m-n*d*m)*B,e[7]=(a*v*o-p*d*o+p*r*h-n*v*h-a*r*_+n*d*_)*B,e[8]=L*B,e[9]=(T*y*o-p*b*o-T*i*_+n*b*_+p*i*m-n*y*m)*B,e[10]=(a*b*o-T*l*o+T*i*h-n*b*h-a*i*m+n*l*m)*B,e[11]=(p*l*o-a*y*o-p*i*h+n*y*h+a*i*_-n*l*_)*B,e[12]=P*B,e[13]=(p*b*r-T*y*r+T*i*v-n*b*v-p*i*E+n*y*E)*B,e[14]=(T*l*r-a*b*r-T*i*d+n*b*d+a*i*E-n*l*E)*B,e[15]=(a*y*r-p*l*r+p*i*d-n*y*d-a*i*v+n*l*v)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,l=e.y,d=e.z,h=o*a,p=o*l;return this.set(h*a+i,h*l-r*d,h*d+r*l,0,h*l+r*d,p*l+i,p*d-r*a,0,h*d-r*l,p*d+r*a,o*d*d+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,l=n._z,d=n._w,h=o+o,p=a+a,y=l+l,v=o*h,_=o*p,T=o*y,b=a*p,E=a*y,m=l*y,M=d*h,w=d*p,L=d*y,P=i.x,U=i.y,B=i.z;return r[0]=(1-(b+m))*P,r[1]=(_+L)*P,r[2]=(T-w)*P,r[3]=0,r[4]=(_-L)*U,r[5]=(1-(v+m))*U,r[6]=(E+M)*U,r[7]=0,r[8]=(T+w)*B,r[9]=(E-M)*B,r[10]=(1-(v+b))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=es.set(r[0],r[1],r[2]).length();const a=es.set(r[4],r[5],r[6]).length(),l=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],_i.copy(this);const h=1/o,p=1/a,y=1/l;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=p,_i.elements[5]*=p,_i.elements[6]*=p,_i.elements[8]*=y,_i.elements[9]*=y,_i.elements[10]*=y,n.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,a){const l=this.elements,d=2*o/(n-e),h=2*o/(i-r),p=(n+e)/(n-e),y=(i+r)/(i-r),v=-(a+o)/(a-o),_=-2*a*o/(a-o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=y,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,a){const l=this.elements,d=1/(n-e),h=1/(i-r),p=1/(a-o),y=(n+e)*d,v=(i+r)*h,_=(a+o)*p;return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-y,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*p,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new Y,_i=new Vt,v1=new Y(0,0,0),g1=new Y(1,1,1),br=new Y,Mc=new Y,qn=new Y,Tg=new Vt,bg=new Io;class Xu{constructor(e=0,n=0,i=0,r=Xu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],l=r[8],d=r[1],h=r[5],p=r[9],y=r[2],v=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Tn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bg.setFromEuler(this),this.setFromQuaternion(bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xu.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y1=0;const Cg=new Y,ts=new Io,Ji=new Vt,Ec=new Y,Ra=new Y,_1=new Y,x1=new Io,Ag=new Y(1,0,0),Pg=new Y(0,1,0),Rg=new Y(0,0,1),S1={type:"added"},Dg={type:"removed"};class tn extends No{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Y,n=new Xu,i=new Io,r=new Y(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new dt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(Pg,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,n){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(Pg,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ec.copy(e):Ec.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Ra,Ec,this.up):Ji.lookAt(Ec,Ra,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(Ji),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(S1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Dg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Dg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,_1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,x1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const y=d[h];o(e.shapes,y)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,h=this.material.length;d<h;d++)l.push(o(e.materials,this.material[d]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];r.animations.push(o(e.animations,d))}}if(n){const l=a(e.geometries),d=a(e.materials),h=a(e.textures),p=a(e.images),y=a(e.shapes),v=a(e.skeletons),_=a(e.animations),T=a(e.nodes);l.length>0&&(i.geometries=l),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),y.length>0&&(i.shapes=y),v.length>0&&(i.skeletons=v),_.length>0&&(i.animations=_),T.length>0&&(i.nodes=T)}return i.object=r,i;function a(l){const d=[];for(const h in l){const p=l[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Y(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Y,er=new Y,gd=new Y,tr=new Y,ns=new Y,is=new Y,Lg=new Y,yd=new Y,_d=new Y,xd=new Y;let wc=!1;class bi{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xi.subVectors(e,n),r.cross(xi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){xi.subVectors(r,n),er.subVectors(i,n),gd.subVectors(e,n);const a=xi.dot(xi),l=xi.dot(er),d=xi.dot(gd),h=er.dot(er),p=er.dot(gd),y=a*h-l*l;if(y===0)return o.set(-2,-1,-1);const v=1/y,_=(h*d-l*p)*v,T=(a*p-l*d)*v;return o.set(1-_-T,T,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,tr),tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getUV(e,n,i,r,o,a,l,d){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),this.getInterpolation(e,n,i,r,o,a,l,d)}static getInterpolation(e,n,i,r,o,a,l,d){return this.getBarycoord(e,n,i,r,tr),d.setScalar(0),d.addScaledVector(o,tr.x),d.addScaledVector(a,tr.y),d.addScaledVector(l,tr.z),d}static isFrontFacing(e,n,i,r){return xi.subVectors(i,n),er.subVectors(e,n),xi.cross(er).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),xi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),bi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return bi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,l;ns.subVectors(r,i),is.subVectors(o,i),yd.subVectors(e,i);const d=ns.dot(yd),h=is.dot(yd);if(d<=0&&h<=0)return n.copy(i);_d.subVectors(e,r);const p=ns.dot(_d),y=is.dot(_d);if(p>=0&&y<=p)return n.copy(r);const v=d*y-p*h;if(v<=0&&d>=0&&p<=0)return a=d/(d-p),n.copy(i).addScaledVector(ns,a);xd.subVectors(e,o);const _=ns.dot(xd),T=is.dot(xd);if(T>=0&&_<=T)return n.copy(o);const b=_*h-d*T;if(b<=0&&h>=0&&T<=0)return l=h/(h-T),n.copy(i).addScaledVector(is,l);const E=p*T-_*y;if(E<=0&&y-p>=0&&_-T>=0)return Lg.subVectors(o,r),l=(y-p)/(y-p+(_-T)),n.copy(r).addScaledVector(Lg,l);const m=1/(E+b+v);return a=b*m,l=v*m,n.copy(i).addScaledVector(ns,a).addScaledVector(is,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let M1=0;class vr extends No{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=Is,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Op,this.blendDst=Np,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=od,this.stencilZFail=od,this.stencilZPass=od,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==Wr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const l in o){const d=o[l];delete d.metadata,a.push(d)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Sd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=yi.workingColorSpace){return this.r=e,this.g=n,this.b=i,yi.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=yi.workingColorSpace){if(e=r1(e,1),n=Tn(n,0,1),i=Tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Sd(a,o,e+1/3),this.g=Sd(a,o,e),this.b=Sd(a,o,e-1/3)}return yi.toWorkingColorSpace(this,r),this}setStyle(e,n=nt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=nt){const i=$_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=cd(e.r),this.g=cd(e.g),this.b=cd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return yi.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Tn(Mn.r*255,0,255))*65536+Math.round(Tn(Mn.g*255,0,255))*256+Math.round(Tn(Mn.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yi.workingColorSpace){yi.fromWorkingColorSpace(Mn.copy(this),n);const i=Mn.r,r=Mn.g,o=Mn.b,a=Math.max(i,r,o),l=Math.min(i,r,o);let d,h;const p=(l+a)/2;if(l===a)d=0,h=0;else{const y=a-l;switch(h=p<=.5?y/(a+l):y/(2-a-l),a){case i:d=(r-o)/y+(r<o?6:0);break;case r:d=(o-i)/y+2;break;case o:d=(i-r)/y+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,n=yi.workingColorSpace){return yi.fromWorkingColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=nt){yi.fromWorkingColorSpace(Mn.copy(this),e);const n=Mn.r,i=Mn.g,r=Mn.b;return e!==nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),Si.h+=e,Si.s+=n,Si.l+=i,this.setHSL(Si.h,Si.s,Si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(Tc);const i=ad(Si.h,Tc.h,n),r=ad(Si.s,Tc.s,n),o=ad(Si.l,Tc.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ke;Ke.NAMES=$_;class To extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,bc=new Ne;class Di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bc.fromBufferAttribute(this,n),bc.applyMatrix3(e),this.setXY(n,bc.x,bc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gc(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gc(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gc(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class K_ extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z_ extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let E1=0;const si=new Vt,Md=new tn,rs=new Y,$n=new bl,Da=new bl,ln=new Y;class mi extends No{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W_(e)?Z_:K_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new dt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,i){return si.makeTranslation(e,n,i),this.applyMatrix4(si),this}scale(e,n,i){return si.makeScale(e,n,i),this.applyMatrix4(si),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const l=n[o];Da.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors($n.min,Da.min),$n.expandByPoint(ln),ln.addVectors($n.max,Da.max),$n.expandByPoint(ln)):($n.expandByPoint(Da.min),$n.expandByPoint(Da.max))}$n.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)ln.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ln));if(n)for(let o=0,a=n.length;o<a;o++){const l=n[o],d=this.morphTargetsRelative;for(let h=0,p=l.count;h<p;h++)ln.fromBufferAttribute(l,h),d&&(rs.fromBufferAttribute(e,h),ln.add(rs)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,a=n.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*l),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let N=0;N<l;N++)h[N]=new Y,p[N]=new Y;const y=new Y,v=new Y,_=new Y,T=new Ne,b=new Ne,E=new Ne,m=new Y,M=new Y;function w(N,ae,fe){y.fromArray(r,N*3),v.fromArray(r,ae*3),_.fromArray(r,fe*3),T.fromArray(a,N*2),b.fromArray(a,ae*2),E.fromArray(a,fe*2),v.sub(y),_.sub(y),b.sub(T),E.sub(T);const $=1/(b.x*E.y-E.x*b.y);isFinite($)&&(m.copy(v).multiplyScalar(E.y).addScaledVector(_,-b.y).multiplyScalar($),M.copy(_).multiplyScalar(b.x).addScaledVector(v,-E.x).multiplyScalar($),h[N].add(m),h[ae].add(m),h[fe].add(m),p[N].add(M),p[ae].add(M),p[fe].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ce=$+te;j<ce;j+=3)w(i[j+0],i[j+1],i[j+2])}const P=new Y,U=new Y,B=new Y,z=new Y;function R(N){B.fromArray(o,N*3),z.copy(B);const ae=h[N];P.copy(ae),P.sub(B.multiplyScalar(B.dot(ae))).normalize(),U.crossVectors(z,ae);const $=U.dot(p[N])<0?-1:1;d[N*4]=P.x,d[N*4+1]=P.y,d[N*4+2]=P.z,d[N*4+3]=$}for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ce=$+te;j<ce;j+=3)R(i[j+0]),R(i[j+1]),R(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let v=0,_=i.count;v<_;v++)i.setXYZ(v,0,0,0);const r=new Y,o=new Y,a=new Y,l=new Y,d=new Y,h=new Y,p=new Y,y=new Y;if(e)for(let v=0,_=e.count;v<_;v+=3){const T=e.getX(v+0),b=e.getX(v+1),E=e.getX(v+2);r.fromBufferAttribute(n,T),o.fromBufferAttribute(n,b),a.fromBufferAttribute(n,E),p.subVectors(a,o),y.subVectors(r,o),p.cross(y),l.fromBufferAttribute(i,T),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,E),l.add(p),d.add(p),h.add(p),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(E,h.x,h.y,h.z)}else for(let v=0,_=n.count;v<_;v+=3)r.fromBufferAttribute(n,v+0),o.fromBufferAttribute(n,v+1),a.fromBufferAttribute(n,v+2),p.subVectors(a,o),y.subVectors(r,o),p.cross(y),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(l,d){const h=l.array,p=l.itemSize,y=l.normalized,v=new h.constructor(d.length*p);let _=0,T=0;for(let b=0,E=d.length;b<E;b++){l.isInterleavedBufferAttribute?_=d[b]*l.data.stride+l.offset:_=d[b]*p;for(let m=0;m<p;m++)v[T++]=h[_++]}return new Di(v,p,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,r=this.attributes;for(const l in r){const d=r[l],h=e(d,i);n.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const d=[],h=o[l];for(let p=0,y=h.length;p<y;p++){const v=h[p],_=e(v,i);d.push(_)}n.morphAttributes[l]=d}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let y=0,v=h.length;y<v;y++){const _=h[y];p.push(_.toJSON(e.data))}p.length>0&&(r[d]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(n))}const o=e.morphAttributes;for(const h in o){const p=[],y=o[h];for(let v=0,_=y.length;v<_;v++)p.push(y[v].clone(n));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,p=a.length;h<p;h++){const y=a[h];this.addGroup(y.start,y.count,y.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ig=new Vt,Ni=new m1,Cc=new kp,Ug=new Y,os=new Y,ss=new Y,as=new Y,Ed=new Y,Ac=new Y,Pc=new Ne,Rc=new Ne,Dc=new Ne,Og=new Y,Ng=new Y,Fg=new Y,Lc=new Y,Ic=new Y;class Ln extends tn{constructor(e=new mi,n=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){Ac.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=l[d],y=o[d];p!==0&&(Ed.fromBufferAttribute(y,e),a?Ac.addScaledVector(Ed,p):Ac.addScaledVector(Ed.sub(n),p))}n.add(Ac)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(o),Ni.copy(e.ray).recast(e.near),!(Cc.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Cc,Ug)===null||Ni.origin.distanceToSquared(Ug)>(e.far-e.near)**2))&&(Ig.copy(o).invert(),Ni.copy(e.ray).applyMatrix4(Ig),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,y=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,T=y.length;_<T;_++){const b=y[_],E=o[b.materialIndex],m=Math.max(b.start,v.start),M=Math.min(a.count,Math.min(b.start+b.count,v.start+v.count));for(let w=m,L=M;w<L;w+=3){const P=a.getX(w),U=a.getX(w+1),B=a.getX(w+2);i=Uc(this,E,e,Ni,d,h,p,P,U,B),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=b.materialIndex,n.push(i))}}else{const _=Math.max(0,v.start),T=Math.min(a.count,v.start+v.count);for(let b=_,E=T;b<E;b+=3){const m=a.getX(b),M=a.getX(b+1),w=a.getX(b+2);i=Uc(this,o,e,Ni,d,h,p,m,M,w),i&&(i.faceIndex=Math.floor(b/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,T=y.length;_<T;_++){const b=y[_],E=o[b.materialIndex],m=Math.max(b.start,v.start),M=Math.min(l.count,Math.min(b.start+b.count,v.start+v.count));for(let w=m,L=M;w<L;w+=3){const P=w,U=w+1,B=w+2;i=Uc(this,E,e,Ni,d,h,p,P,U,B),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=b.materialIndex,n.push(i))}}else{const _=Math.max(0,v.start),T=Math.min(l.count,v.start+v.count);for(let b=_,E=T;b<E;b+=3){const m=b,M=b+1,w=b+2;i=Uc(this,o,e,Ni,d,h,p,m,M,w),i&&(i.faceIndex=Math.floor(b/3),n.push(i))}}}}function w1(t,e,n,i,r,o,a,l){let d;if(e.side===Un?d=i.intersectTriangle(a,o,r,!0,l):d=i.intersectTriangle(r,o,a,e.side===Wr,l),d===null)return null;Ic.copy(l),Ic.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Ic);return h<n.near||h>n.far?null:{distance:h,point:Ic.clone(),object:t}}function Uc(t,e,n,i,r,o,a,l,d,h){t.getVertexPosition(l,os),t.getVertexPosition(d,ss),t.getVertexPosition(h,as);const p=w1(t,e,n,i,os,ss,as,Lc);if(p){r&&(Pc.fromBufferAttribute(r,l),Rc.fromBufferAttribute(r,d),Dc.fromBufferAttribute(r,h),p.uv=bi.getInterpolation(Lc,os,ss,as,Pc,Rc,Dc,new Ne)),o&&(Pc.fromBufferAttribute(o,l),Rc.fromBufferAttribute(o,d),Dc.fromBufferAttribute(o,h),p.uv1=bi.getInterpolation(Lc,os,ss,as,Pc,Rc,Dc,new Ne),p.uv2=p.uv1),a&&(Og.fromBufferAttribute(a,l),Ng.fromBufferAttribute(a,d),Fg.fromBufferAttribute(a,h),p.normal=bi.getInterpolation(Lc,os,ss,as,Og,Ng,Fg,new Y),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const y={a:l,b:d,c:h,normal:new Y,materialIndex:0};bi.getNormal(os,ss,as,y.normal),p.face=y}return p}class Cl extends mi{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const d=[],h=[],p=[],y=[];let v=0,_=0;T("z","y","x",-1,-1,i,n,e,a,o,0),T("z","y","x",1,-1,i,n,-e,a,o,1),T("x","z","y",1,1,e,i,n,r,a,2),T("x","z","y",1,-1,e,i,-n,r,a,3),T("x","y","z",1,-1,e,n,i,r,o,4),T("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(p,3)),this.setAttribute("uv",new dn(y,2));function T(b,E,m,M,w,L,P,U,B,z,R){const N=L/B,ae=P/z,fe=L/2,$=P/2,te=U/2,j=B+1,ce=z+1;let pe=0,X=0;const J=new Y;for(let ne=0;ne<ce;ne++){const we=ne*ae-$;for(let ve=0;ve<j;ve++){const oe=ve*N-fe;J[b]=oe*M,J[E]=we*w,J[m]=te,h.push(J.x,J.y,J.z),J[b]=0,J[E]=0,J[m]=U>0?1:-1,p.push(J.x,J.y,J.z),y.push(ve/B),y.push(1-ne/z),pe+=1}}for(let ne=0;ne<z;ne++)for(let we=0;we<B;we++){const ve=v+we+j*ne,oe=v+we+j*(ne+1),q=v+(we+1)+j*(ne+1),Me=v+(we+1)+j*ne;d.push(ve,oe,Me),d.push(oe,q,Me),X+=6}l.addGroup(_,X,R),_+=X,v+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Rn(t){const e={};for(let n=0;n<t.length;n++){const i=Xs(t[n]);for(const r in i)e[r]=i[r]}return e}function T1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Q_(t){return t.getRenderTarget()===null?t.outputColorSpace:Wi}const Bn={clone:Xs,merge:Rn};var b1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=T1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zn extends J_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tu*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,h=a.fullHeight;o+=a.offsetX*r/d,n-=a.offsetY*i/h,r*=a.width/d,i*=a.height/h}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ls=-90,cs=1;class A1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new zn(ls,cs,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new zn(ls,cs,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const a=new zn(ls,cs,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const l=new zn(ls,cs,e,n);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const d=new zn(ls,cs,e,n);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const h=new zn(ls,cs,e,n);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,a,l,d,h]=this.children,p=e.getRenderTarget(),y=e.toneMapping,v=e.xr.enabled;e.toneMapping=Hi,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,l),e.setRenderTarget(i,4),e.render(n,d),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(n,h),e.setRenderTarget(p),e.toneMapping=y,e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ex extends jn{constructor(e,n,i,r,o,a,l,d,h,p){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,i,r,o,a,l,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P1 extends en{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Eo?nt:wo),this.texture=new ex(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cl(5,5,5),o=new Lt({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:cn});o.uniforms.tEquirect.value=n;const a=new Ln(r,o),l=n.minFilter;return n.minFilter===ml&&(n.minFilter=ci),new A1(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const wd=new Y,R1=new Y,D1=new dt;class uo{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wd.subVectors(i,n).cross(R1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||D1.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new kp,Oc=new Y;class zp{constructor(e=new uo,n=new uo,i=new uo,r=new uo,o=new uo,a=new uo){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],d=i[4],h=i[5],p=i[6],y=i[7],v=i[8],_=i[9],T=i[10],b=i[11],E=i[12],m=i[13],M=i[14],w=i[15];return n[0].setComponents(l-r,y-d,b-v,w-E).normalize(),n[1].setComponents(l+r,y+d,b+v,w+E).normalize(),n[2].setComponents(l+o,y+h,b+_,w+m).normalize(),n[3].setComponents(l-o,y-h,b-_,w-m).normalize(),n[4].setComponents(l-a,y-p,b-T,w-M).normalize(),n[5].setComponents(l+a,y+p,b+T,w+M).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oc.x=r.normal.x>0?e.max.x:e.min.x,Oc.y=r.normal.y>0?e.max.y:e.min.y,Oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tx(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function L1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(h,p){const y=h.array,v=h.usage,_=t.createBuffer();t.bindBuffer(p,_),t.bufferData(p,y,v),h.onUploadCallback();let T;if(y instanceof Float32Array)T=t.FLOAT;else if(y instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)T=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=t.UNSIGNED_SHORT;else if(y instanceof Int16Array)T=t.SHORT;else if(y instanceof Uint32Array)T=t.UNSIGNED_INT;else if(y instanceof Int32Array)T=t.INT;else if(y instanceof Int8Array)T=t.BYTE;else if(y instanceof Uint8Array)T=t.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)T=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:_,type:T,bytesPerElement:y.BYTES_PER_ELEMENT,version:h.version}}function o(h,p,y){const v=p.array,_=p.updateRange;t.bindBuffer(y,h),_.count===-1?t.bufferSubData(y,0,v):(n?t.bufferSubData(y,_.offset*v.BYTES_PER_ELEMENT,v,_.offset,_.count):t.bufferSubData(y,_.offset*v.BYTES_PER_ELEMENT,v.subarray(_.offset,_.offset+_.count)),_.count=-1),p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(t.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const v=i.get(h);(!v||v.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const y=i.get(h);y===void 0?i.set(h,r(h,p)):y.version<h.version&&(o(y.buffer,h,p),y.version=h.version)}return{get:a,remove:l,update:d}}class Al extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,l=Math.floor(i),d=Math.floor(r),h=l+1,p=d+1,y=e/l,v=n/d,_=[],T=[],b=[],E=[];for(let m=0;m<p;m++){const M=m*v-a;for(let w=0;w<h;w++){const L=w*y-o;T.push(L,-M,0),b.push(0,0,1),E.push(w/l),E.push(1-m/d)}}for(let m=0;m<d;m++)for(let M=0;M<l;M++){const w=M+h*m,L=M+h*(m+1),P=M+1+h*(m+1),U=M+1+h*m;_.push(w,L,U),_.push(L,P,U)}this.setIndex(_),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(b,3)),this.setAttribute("uv",new dn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,N1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z1="vec3 transformed = vec3( position );",B1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V1=`#ifdef USE_IRIDESCENCE
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
#endif`,H1=`#ifdef USE_BUMPMAP
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
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
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
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eT=`vec3 transformedNormal = objectNormal;
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
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",sT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
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
}`,gT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ST=`uniform bool receiveShadow;
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
#endif`,MT=`#if defined( USE_ENVMAP )
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
#endif`,ET=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
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
#endif`,AT=`struct PhysicalMaterial {
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
}`,PT=`
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
#endif`,RT=`#if defined( RE_IndirectDiffuse )
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
#endif`,DT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,LT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,FT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zT=`#if defined( USE_POINTS_UV )
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
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HT=`#ifdef USE_MORPHNORMALS
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
#endif`,WT=`#ifdef USE_MORPHTARGETS
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
#endif`,jT=`#ifdef USE_MORPHTARGETS
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
#endif`,XT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,YT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
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
#endif`,QT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,JT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ib=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hb=`float getShadowMask() {
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
}`,pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_UV
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
#endif`,Tb=`#ifdef USE_UV
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
#endif`,bb=`#ifdef USE_UV
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
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ub=`#include <common>
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
}`,Ob=`#if DEPTH_PACKING == 3200
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
}`,Nb=`#define DISTANCE
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
}`,Fb=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bb=`uniform float scale;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Wb=`#define LAMBERT
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
}`,jb=`#define LAMBERT
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
}`,Xb=`#define MATCAP
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
}`,Yb=`#define MATCAP
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
}`,qb=`#define NORMAL
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
}`,$b=`#define NORMAL
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
}`,Kb=`#define PHONG
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
}`,Zb=`#define PHONG
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define STANDARD
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
}`,eC=`#define TOON
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
}`,tC=`#define TOON
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
}`,nC=`uniform float size;
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
}`,iC=`uniform vec3 diffuse;
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
}`,rC=`#include <common>
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
}`,oC=`uniform vec3 color;
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
}`,sC=`uniform float rotation;
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
}`,aC=`uniform vec3 diffuse;
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
}`,at={alphamap_fragment:I1,alphamap_pars_fragment:U1,alphatest_fragment:O1,alphatest_pars_fragment:N1,aomap_fragment:F1,aomap_pars_fragment:k1,begin_vertex:z1,beginnormal_vertex:B1,bsdfs:G1,iridescence_fragment:V1,bumpmap_pars_fragment:H1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:j1,clipping_planes_pars_vertex:X1,clipping_planes_vertex:Y1,color_fragment:q1,color_pars_fragment:$1,color_pars_vertex:K1,color_vertex:Z1,common:Q1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:eT,displacementmap_pars_vertex:tT,displacementmap_vertex:nT,emissivemap_fragment:iT,emissivemap_pars_fragment:rT,encodings_fragment:oT,encodings_pars_fragment:sT,envmap_fragment:aT,envmap_common_pars_fragment:lT,envmap_pars_fragment:cT,envmap_pars_vertex:uT,envmap_physical_pars_fragment:MT,envmap_vertex:fT,fog_vertex:dT,fog_pars_vertex:hT,fog_fragment:pT,fog_pars_fragment:mT,gradientmap_pars_fragment:vT,lightmap_fragment:gT,lightmap_pars_fragment:yT,lights_lambert_fragment:_T,lights_lambert_pars_fragment:xT,lights_pars_begin:ST,lights_toon_fragment:ET,lights_toon_pars_fragment:wT,lights_phong_fragment:TT,lights_phong_pars_fragment:bT,lights_physical_fragment:CT,lights_physical_pars_fragment:AT,lights_fragment_begin:PT,lights_fragment_maps:RT,lights_fragment_end:DT,logdepthbuf_fragment:LT,logdepthbuf_pars_fragment:IT,logdepthbuf_pars_vertex:UT,logdepthbuf_vertex:OT,map_fragment:NT,map_pars_fragment:FT,map_particle_fragment:kT,map_particle_pars_fragment:zT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:GT,morphcolor_vertex:VT,morphnormal_vertex:HT,morphtarget_pars_vertex:WT,morphtarget_vertex:jT,normal_fragment_begin:XT,normal_fragment_maps:YT,normal_pars_fragment:qT,normal_pars_vertex:$T,normal_vertex:KT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:QT,clearcoat_normal_fragment_maps:JT,clearcoat_pars_fragment:eb,iridescence_pars_fragment:tb,output_fragment:nb,packing:ib,premultiplied_alpha_fragment:rb,project_vertex:ob,dithering_fragment:sb,dithering_pars_fragment:ab,roughnessmap_fragment:lb,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:fb,shadowmap_vertex:db,shadowmask_pars_fragment:hb,skinbase_vertex:pb,skinning_pars_vertex:mb,skinning_vertex:vb,skinnormal_vertex:gb,specularmap_fragment:yb,specularmap_pars_fragment:_b,tonemapping_fragment:xb,tonemapping_pars_fragment:Sb,transmission_fragment:Mb,transmission_pars_fragment:Eb,uv_pars_fragment:wb,uv_pars_vertex:Tb,uv_vertex:bb,worldpos_vertex:Cb,background_vert:Ab,background_frag:Pb,backgroundCube_vert:Rb,backgroundCube_frag:Db,cube_vert:Lb,cube_frag:Ib,depth_vert:Ub,depth_frag:Ob,distanceRGBA_vert:Nb,distanceRGBA_frag:Fb,equirect_vert:kb,equirect_frag:zb,linedashed_vert:Bb,linedashed_frag:Gb,meshbasic_vert:Vb,meshbasic_frag:Hb,meshlambert_vert:Wb,meshlambert_frag:jb,meshmatcap_vert:Xb,meshmatcap_frag:Yb,meshnormal_vert:qb,meshnormal_frag:$b,meshphong_vert:Kb,meshphong_frag:Zb,meshphysical_vert:Qb,meshphysical_frag:Jb,meshtoon_vert:eC,meshtoon_frag:tC,points_vert:nC,points_frag:iC,shadow_vert:rC,shadow_frag:oC,sprite_vert:sC,sprite_frag:aC},Re={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}}},ki={basic:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Rn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Rn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Rn([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Rn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Rn([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Rn([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Rn([Re.common,Re.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Rn([Re.lights,Re.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ki.physical={uniforms:Rn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Nc={r:0,b:0,g:0};function lC(t,e,n,i,r,o,a){const l=new Ke(0);let d=o===!0?0:1,h,p,y=null,v=0,_=null;function T(E,m){let M=!1,w=m.isScene===!0?m.background:null;switch(w&&w.isTexture&&(w=(m.backgroundBlurriness>0?n:e).get(w)),w===null?b(l,d):w&&w.isColor&&(b(w,1),M=!0),t.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),M=!0;break}(t.autoClear||M)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),w&&(w.isCubeTexture||w.mapping===ju)?(p===void 0&&(p=new Ln(new Cl(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Xs(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.toneMapped=w.colorSpace!==nt,(y!==w||v!==w.version||_!==t.toneMapping)&&(p.material.needsUpdate=!0,y=w,v=w.version,_=t.toneMapping),p.layers.enableAll(),E.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Ln(new Al(2,2),new Lt({name:"BackgroundMaterial",uniforms:Xs(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=w.colorSpace!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(y!==w||v!==w.version||_!==t.toneMapping)&&(h.material.needsUpdate=!0,y=w,v=w.version,_=t.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function b(E,m){E.getRGB(Nc,Q_(t)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,m,a)}return{getClearColor:function(){return l},setClearColor:function(E,m=1){l.set(E),d=m,b(l,d)},getClearAlpha:function(){return d},setClearAlpha:function(E){d=E,b(l,d)},render:T}}function cC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,l={},d=E(null);let h=d,p=!1;function y(te,j,ce,pe,X){let J=!1;if(a){const ne=b(pe,ce,j);h!==ne&&(h=ne,_(h.object)),J=m(te,pe,ce,X),J&&M(te,pe,ce,X)}else{const ne=j.wireframe===!0;(h.geometry!==pe.id||h.program!==ce.id||h.wireframe!==ne)&&(h.geometry=pe.id,h.program=ce.id,h.wireframe=ne,J=!0)}X!==null&&n.update(X,t.ELEMENT_ARRAY_BUFFER),(J||p)&&(p=!1,z(te,j,ce,pe),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function v(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function _(te){return i.isWebGL2?t.bindVertexArray(te):o.bindVertexArrayOES(te)}function T(te){return i.isWebGL2?t.deleteVertexArray(te):o.deleteVertexArrayOES(te)}function b(te,j,ce){const pe=ce.wireframe===!0;let X=l[te.id];X===void 0&&(X={},l[te.id]=X);let J=X[j.id];J===void 0&&(J={},X[j.id]=J);let ne=J[pe];return ne===void 0&&(ne=E(v()),J[pe]=ne),ne}function E(te){const j=[],ce=[],pe=[];for(let X=0;X<r;X++)j[X]=0,ce[X]=0,pe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:pe,object:te,attributes:{},index:null}}function m(te,j,ce,pe){const X=h.attributes,J=j.attributes;let ne=0;const we=ce.getAttributes();for(const ve in we)if(we[ve].location>=0){const q=X[ve];let Me=J[ve];if(Me===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(Me=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(Me=te.instanceColor)),q===void 0||q.attribute!==Me||Me&&q.data!==Me.data)return!0;ne++}return h.attributesNum!==ne||h.index!==pe}function M(te,j,ce,pe){const X={},J=j.attributes;let ne=0;const we=ce.getAttributes();for(const ve in we)if(we[ve].location>=0){let q=J[ve];q===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(q=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(q=te.instanceColor));const Me={};Me.attribute=q,q&&q.data&&(Me.data=q.data),X[ve]=Me,ne++}h.attributes=X,h.attributesNum=ne,h.index=pe}function w(){const te=h.newAttributes;for(let j=0,ce=te.length;j<ce;j++)te[j]=0}function L(te){P(te,0)}function P(te,j){const ce=h.newAttributes,pe=h.enabledAttributes,X=h.attributeDivisors;ce[te]=1,pe[te]===0&&(t.enableVertexAttribArray(te),pe[te]=1),X[te]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,j),X[te]=j)}function U(){const te=h.newAttributes,j=h.enabledAttributes;for(let ce=0,pe=j.length;ce<pe;ce++)j[ce]!==te[ce]&&(t.disableVertexAttribArray(ce),j[ce]=0)}function B(te,j,ce,pe,X,J){i.isWebGL2===!0&&(ce===t.INT||ce===t.UNSIGNED_INT)?t.vertexAttribIPointer(te,j,ce,X,J):t.vertexAttribPointer(te,j,ce,pe,X,J)}function z(te,j,ce,pe){if(i.isWebGL2===!1&&(te.isInstancedMesh||pe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const X=pe.attributes,J=ce.getAttributes(),ne=j.defaultAttributeValues;for(const we in J){const ve=J[we];if(ve.location>=0){let oe=X[we];if(oe===void 0&&(we==="instanceMatrix"&&te.instanceMatrix&&(oe=te.instanceMatrix),we==="instanceColor"&&te.instanceColor&&(oe=te.instanceColor)),oe!==void 0){const q=oe.normalized,Me=oe.itemSize,Ee=n.get(oe);if(Ee===void 0)continue;const H=Ee.buffer,Ze=Ee.type,He=Ee.bytesPerElement;if(oe.isInterleavedBufferAttribute){const Te=oe.data,Ge=Te.stride,ht=oe.offset;if(Te.isInstancedInterleavedBuffer){for(let Be=0;Be<ve.locationSize;Be++)P(ve.location+Be,Te.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Be=0;Be<ve.locationSize;Be++)L(ve.location+Be);t.bindBuffer(t.ARRAY_BUFFER,H);for(let Be=0;Be<ve.locationSize;Be++)B(ve.location+Be,Me/ve.locationSize,Ze,q,Ge*He,(ht+Me/ve.locationSize*Be)*He)}else{if(oe.isInstancedBufferAttribute){for(let Te=0;Te<ve.locationSize;Te++)P(ve.location+Te,oe.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<ve.locationSize;Te++)L(ve.location+Te);t.bindBuffer(t.ARRAY_BUFFER,H);for(let Te=0;Te<ve.locationSize;Te++)B(ve.location+Te,Me/ve.locationSize,Ze,q,Me*He,Me/ve.locationSize*Te*He)}}else if(ne!==void 0){const q=ne[we];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(ve.location,q);break;case 3:t.vertexAttrib3fv(ve.location,q);break;case 4:t.vertexAttrib4fv(ve.location,q);break;default:t.vertexAttrib1fv(ve.location,q)}}}}U()}function R(){fe();for(const te in l){const j=l[te];for(const ce in j){const pe=j[ce];for(const X in pe)T(pe[X].object),delete pe[X];delete j[ce]}delete l[te]}}function N(te){if(l[te.id]===void 0)return;const j=l[te.id];for(const ce in j){const pe=j[ce];for(const X in pe)T(pe[X].object),delete pe[X];delete j[ce]}delete l[te.id]}function ae(te){for(const j in l){const ce=l[j];if(ce[te.id]===void 0)continue;const pe=ce[te.id];for(const X in pe)T(pe[X].object),delete pe[X];delete ce[te.id]}}function fe(){$(),p=!0,h!==d&&(h=d,_(h.object))}function $(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:y,reset:fe,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:w,enableAttribute:L,disableUnusedAttributes:U}}function uC(t,e,n,i){const r=i.isWebGL2;let o;function a(h){o=h}function l(h,p){t.drawArrays(o,h,p),n.update(p,o,1)}function d(h,p,y){if(y===0)return;let v,_;if(r)v=t,_="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](o,h,p,y),n.update(p,o,y)}this.setMode=a,this.render=l,this.renderInstances=d}function fC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let l=n.precision!==void 0?n.precision:"highp";const d=o(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=a||e.has("WEBGL_draw_buffers"),p=n.logarithmicDepthBuffer===!0,y=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),T=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),b=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,L=a||e.has("OES_texture_float"),P=w&&L,U=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:p,maxTextures:y,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:T,maxAttributes:b,maxVertexUniforms:E,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:w,floatFragmentTextures:L,floatVertexTextures:P,maxSamples:U}}function dC(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new uo,l=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const _=y.length!==0||v||i!==0||r;return r=v,i=y.length,_},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,v){n=p(y,v,0)},this.setState=function(y,v,_){const T=y.clippingPlanes,b=y.clipIntersection,E=y.clipShadows,m=t.get(y);if(!r||T===null||T.length===0||o&&!E)o?p(null):h();else{const M=o?0:i,w=M*4;let L=m.clippingState||null;d.value=L,L=p(T,v,w,_);for(let P=0;P!==w;++P)L[P]=n[P];m.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(y,v,_,T){const b=y!==null?y.length:0;let E=null;if(b!==0){if(E=d.value,T!==!0||E===null){const m=_+b*4,M=v.matrixWorldInverse;l.getNormalMatrix(M),(E===null||E.length<m)&&(E=new Float32Array(m));for(let w=0,L=_;w!==b;++w,L+=4)a.copy(y[w]).applyMatrix4(M,l),a.normal.toArray(E,L),E[L+3]=a.constant}d.value=E,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,E}}function hC(t){let e=new WeakMap;function n(a,l){return l===wu?a.mapping=Hs:l===Ih&&(a.mapping=Ws),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping;if(l===wu||l===Ih)if(e.has(a)){const d=e.get(a).texture;return n(d,a.mapping)}else{const d=a.image;if(d&&d.height>0){const h=new P1(d.height/2);return h.fromEquirectangularTexture(t,a),e.set(a,h),a.addEventListener("dispose",r),n(h.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Yu extends J_{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,l=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,l-=p*this.view.offsetY,d=l-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,kg=[.125,.215,.35,.446,.526,.582],po=20,Td=new Yu,zg=new Ke;let bd=null;const fo=(1+Math.sqrt(5))/2,us=1/fo,Bg=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,fo,us),new Y(0,fo,-us),new Y(us,0,fo),new Y(-us,0,fo),new Y(fo,us,0),new Y(-fo,us,0)];class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd),e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:vl,format:Ai,colorSpace:Wi,depthBuffer:!1},r=Vg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pC(o)),this._blurMaterial=mC(o,e,n)}return r}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,Td)}_sceneToCubeUV(e,n,i,r){const l=new zn(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,y=p.autoClear,v=p.toneMapping;p.getClearColor(zg),p.toneMapping=Hi,p.autoClear=!1;const _=new To({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),T=new Ln(new Cl,_);let b=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,b=!0):(_.color.copy(zg),b=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(l.up.set(0,d[m],0),l.lookAt(h[m],0,0)):M===1?(l.up.set(0,0,d[m]),l.lookAt(0,h[m],0)):(l.up.set(0,d[m],0),l.lookAt(0,0,h[m]));const w=this._cubeSize;Fc(r,M*w,m>2?w:0,w,w),p.setRenderTarget(r),b&&p.render(T,l),p.render(e,l)}T.geometry.dispose(),T.material.dispose(),p.toneMapping=v,p.autoClear=y,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const d=this._cubeSize;Fc(n,0,0,3*d,2*d),i.setRenderTarget(n),i.render(a,Td)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bg[(r-1)%Bg.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,l){const d=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,y=new Ln(this._lodPlanes[r],h),v=h.uniforms,_=this._sizeLods[i]-1,T=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*po-1),b=o/T,E=isFinite(o)?1+Math.floor(p*b):po;E>po&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${po}`);const m=[];let M=0;for(let B=0;B<po;++B){const z=B/b,R=Math.exp(-z*z/2);m.push(R),B===0?M+=R:B<E&&(M+=2*R)}for(let B=0;B<m.length;B++)m[B]=m[B]/M;v.envMap.value=e.texture,v.samples.value=E,v.weights.value=m,v.latitudinal.value=a==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:w}=this;v.dTheta.value=T,v.mipInt.value=w-i;const L=this._sizeLods[r],P=3*L*(r>w-ws?r-w+ws:0),U=4*(this._cubeSize-L);Fc(n,P,U,3*L,2*L),d.setRenderTarget(n),d.render(y,Td)}}function pC(t){const e=[],n=[],i=[];let r=t;const o=t-ws+1+kg.length;for(let a=0;a<o;a++){const l=Math.pow(2,r);n.push(l);let d=1/l;a>t-ws?d=kg[a-t+ws-1]:a===0&&(d=0),i.push(d);const h=1/(l-2),p=-h,y=1+h,v=[p,p,y,p,y,y,p,p,y,y,p,y],_=6,T=6,b=3,E=2,m=1,M=new Float32Array(b*T*_),w=new Float32Array(E*T*_),L=new Float32Array(m*T*_);for(let U=0;U<_;U++){const B=U%3*2/3-1,z=U>2?0:-1,R=[B,z,0,B+2/3,z,0,B+2/3,z+1,0,B,z,0,B+2/3,z+1,0,B,z+1,0];M.set(R,b*T*U),w.set(v,E*T*U);const N=[U,U,U,U,U,U];L.set(N,m*T*U)}const P=new mi;P.setAttribute("position",new Di(M,b)),P.setAttribute("uv",new Di(w,E)),P.setAttribute("faceIndex",new Di(L,m)),e.push(P),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vg(t,e,n){const i=new en(t,e,n);return i.texture.mapping=ju,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mC(t,e,n){const i=new Float32Array(po),r=new Y(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:po,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Hg(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Wg(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Bp(){return`

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
	`}function vC(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const d=l.mapping,h=d===wu||d===Ih,p=d===Hs||d===Ws;if(h||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let y=e.get(l);return n===null&&(n=new Gg(t)),y=h?n.fromEquirectangular(l,y):n.fromCubemap(l,y),e.set(l,y),y.texture}else{if(e.has(l))return e.get(l).texture;{const y=l.image;if(h&&y&&y.height>0||p&&y&&r(y)){n===null&&(n=new Gg(t));const v=h?n.fromEquirectangular(l):n.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",o),v.texture}else return null}}}return l}function r(l){let d=0;const h=6;for(let p=0;p<h;p++)l[p]!==void 0&&d++;return d===h}function o(l){const d=l.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function gC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yC(t,e,n,i){const r={},o=new WeakMap;function a(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",a),delete r[v.id];const _=o.get(v);_&&(e.remove(_),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function l(y,v){return r[v.id]===!0||(v.addEventListener("dispose",a),r[v.id]=!0,n.memory.geometries++),v}function d(y){const v=y.attributes;for(const T in v)e.update(v[T],t.ARRAY_BUFFER);const _=y.morphAttributes;for(const T in _){const b=_[T];for(let E=0,m=b.length;E<m;E++)e.update(b[E],t.ARRAY_BUFFER)}}function h(y){const v=[],_=y.index,T=y.attributes.position;let b=0;if(_!==null){const M=_.array;b=_.version;for(let w=0,L=M.length;w<L;w+=3){const P=M[w+0],U=M[w+1],B=M[w+2];v.push(P,U,U,B,B,P)}}else{const M=T.array;b=T.version;for(let w=0,L=M.length/3-1;w<L;w+=3){const P=w+0,U=w+1,B=w+2;v.push(P,U,U,B,B,P)}}const E=new(W_(v)?Z_:K_)(v,1);E.version=b;const m=o.get(y);m&&e.remove(m),o.set(y,E)}function p(y){const v=o.get(y);if(v){const _=y.index;_!==null&&v.version<_.version&&h(y)}else h(y);return o.get(y)}return{get:l,update:d,getWireframeAttribute:p}}function _C(t,e,n,i){const r=i.isWebGL2;let o;function a(v){o=v}let l,d;function h(v){l=v.type,d=v.bytesPerElement}function p(v,_){t.drawElements(o,_,l,v*d),n.update(_,o,1)}function y(v,_,T){if(T===0)return;let b,E;if(r)b=t,E="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),E="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[E](o,_,l,v*d,T),n.update(_,o,T)}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=y}function xC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(o/3);break;case t.LINES:n.lines+=l*(o/2);break;case t.LINE_STRIP:n.lines+=l*(o-1);break;case t.LINE_LOOP:n.lines+=l*o;break;case t.POINTS:n.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function SC(t,e){return t[0]-e[0]}function MC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function EC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,a=new Dt,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function d(h,p,y){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,T=_!==void 0?_.length:0;let b=o.get(p);if(b===void 0||b.count!==T){let te=function(){fe.dispose(),o.delete(p),p.removeEventListener("dispose",te)};b!==void 0&&b.texture.dispose();const M=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,L=p.morphAttributes.color!==void 0,P=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let z=0;M===!0&&(z=1),w===!0&&(z=2),L===!0&&(z=3);let R=p.attributes.position.count*z,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ae=new Float32Array(R*N*4*T),fe=new Y_(ae,R,N,T);fe.type=_o,fe.needsUpdate=!0;const $=z*4;for(let j=0;j<T;j++){const ce=P[j],pe=U[j],X=B[j],J=R*N*4*j;for(let ne=0;ne<ce.count;ne++){const we=ne*$;M===!0&&(a.fromBufferAttribute(ce,ne),ae[J+we+0]=a.x,ae[J+we+1]=a.y,ae[J+we+2]=a.z,ae[J+we+3]=0),w===!0&&(a.fromBufferAttribute(pe,ne),ae[J+we+4]=a.x,ae[J+we+5]=a.y,ae[J+we+6]=a.z,ae[J+we+7]=0),L===!0&&(a.fromBufferAttribute(X,ne),ae[J+we+8]=a.x,ae[J+we+9]=a.y,ae[J+we+10]=a.z,ae[J+we+11]=X.itemSize===4?a.w:1)}}b={count:T,texture:fe,size:new Ne(R,N)},o.set(p,b),p.addEventListener("dispose",te)}let E=0;for(let M=0;M<v.length;M++)E+=v[M];const m=p.morphTargetsRelative?1:1-E;y.getUniforms().setValue(t,"morphTargetBaseInfluence",m),y.getUniforms().setValue(t,"morphTargetInfluences",v),y.getUniforms().setValue(t,"morphTargetsTexture",b.texture,n),y.getUniforms().setValue(t,"morphTargetsTextureSize",b.size)}else{const _=v===void 0?0:v.length;let T=i[p.id];if(T===void 0||T.length!==_){T=[];for(let w=0;w<_;w++)T[w]=[w,0];i[p.id]=T}for(let w=0;w<_;w++){const L=T[w];L[0]=w,L[1]=v[w]}T.sort(MC);for(let w=0;w<8;w++)w<_&&T[w][1]?(l[w][0]=T[w][0],l[w][1]=T[w][1]):(l[w][0]=Number.MAX_SAFE_INTEGER,l[w][1]=0);l.sort(SC);const b=p.morphAttributes.position,E=p.morphAttributes.normal;let m=0;for(let w=0;w<8;w++){const L=l[w],P=L[0],U=L[1];P!==Number.MAX_SAFE_INTEGER&&U?(b&&p.getAttribute("morphTarget"+w)!==b[P]&&p.setAttribute("morphTarget"+w,b[P]),E&&p.getAttribute("morphNormal"+w)!==E[P]&&p.setAttribute("morphNormal"+w,E[P]),r[w]=U,m+=U):(b&&p.hasAttribute("morphTarget"+w)===!0&&p.deleteAttribute("morphTarget"+w),E&&p.hasAttribute("morphNormal"+w)===!0&&p.deleteAttribute("morphNormal"+w),r[w]=0)}const M=p.morphTargetsRelative?1:1-m;y.getUniforms().setValue(t,"morphTargetBaseInfluence",M),y.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:d}}function wC(t,e,n,i){let r=new WeakMap;function o(d){const h=i.render.frame,p=d.geometry,y=e.get(d,p);return r.get(y)!==h&&(e.update(y),r.set(y,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER)),y}function a(){r=new WeakMap}function l(d){const h=d.target;h.removeEventListener("dispose",l),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const nx=new jn,ix=new Y_,rx=new h1,ox=new ex,jg=[],Xg=[],Yg=new Float32Array(16),qg=new Float32Array(9),$g=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=jg[r];if(o===void 0&&(o=new Float32Array(r),jg[r]=o),e!==0){i.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(o,l)}return o}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qu(t,e){let n=Xg[e];n===void 0&&(n=new Int32Array(e),Xg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function PC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;$g.set(i),t.uniformMatrix2fv(this.addr,!1,$g),rn(n,i)}}function RC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;qg.set(i),t.uniformMatrix3fv(this.addr,!1,qg),rn(n,i)}}function DC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Yg.set(i),t.uniformMatrix4fv(this.addr,!1,Yg),rn(n,i)}}function LC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function NC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function BC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||nx,r)}function GC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rx,r)}function VC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ox,r)}function HC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ix,r)}function WC(t){switch(t){case 5126:return TC;case 35664:return bC;case 35665:return CC;case 35666:return AC;case 35674:return PC;case 35675:return RC;case 35676:return DC;case 5124:case 35670:return LC;case 35667:case 35671:return IC;case 35668:case 35672:return UC;case 35669:case 35673:return OC;case 5125:return NC;case 36294:return FC;case 36295:return kC;case 36296:return zC;case 35678:case 36198:case 36298:case 36306:case 35682:return BC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return VC;case 36289:case 36303:case 36311:case 36292:return HC}}function jC(t,e){t.uniform1fv(this.addr,e)}function XC(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function YC(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function qC(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function $C(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KC(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZC(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QC(t,e){t.uniform1iv(this.addr,e)}function JC(t,e){t.uniform2iv(this.addr,e)}function eA(t,e){t.uniform3iv(this.addr,e)}function tA(t,e){t.uniform4iv(this.addr,e)}function nA(t,e){t.uniform1uiv(this.addr,e)}function iA(t,e){t.uniform2uiv(this.addr,e)}function rA(t,e){t.uniform3uiv(this.addr,e)}function oA(t,e){t.uniform4uiv(this.addr,e)}function sA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||nx,o[a])}function aA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||rx,o[a])}function lA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ox,o[a])}function cA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ix,o[a])}function uA(t){switch(t){case 5126:return jC;case 35664:return XC;case 35665:return YC;case 35666:return qC;case 35674:return $C;case 35675:return KC;case 35676:return ZC;case 5124:case 35670:return QC;case 35667:case 35671:return JC;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class fA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=WC(n.type)}}class dA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=uA(n.type)}}class hA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const l=r[o];l.setValue(e,n[l.id],i)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function Kg(t,e){t.seq.push(e),t.map[e.id]=e}function pA(t,e,n){const i=t.name,r=i.length;for(Cd.lastIndex=0;;){const o=Cd.exec(i),a=Cd.lastIndex;let l=o[1];const d=o[2]==="]",h=o[3];if(d&&(l=l|0),h===void 0||h==="["&&a+2===r){Kg(n,h===void 0?new fA(l,t,e):new dA(l,t,e));break}else{let y=n.map[l];y===void 0&&(y=new hA(l),Kg(n,y)),n=y}}}class Jc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);pA(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const l=n[o],d=i[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Zg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let mA=0;function vA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}function gA(t){switch(t){case Wi:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Qg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+vA(t.getShaderSource(e),a)}else return r}function yA(t,e){const n=gA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function _A(t,e){let n;switch(e){case Ow:n="Linear";break;case B_:n="Reinhard";break;case Nw:n="OptimizedCineon";break;case Fw:n="ACESFilmic";break;case kw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fa).join(`
`)}function SA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let l=1;o.type===t.FLOAT_MAT2&&(l=2),o.type===t.FLOAT_MAT3&&(l=3),o.type===t.FLOAT_MAT4&&(l=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function Fa(t){return t!==""}function Jg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(EA,wA)}function wA(t,e){const n=at[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Nh(n)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(t){return t.replace(TA,bA)}function bA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function n0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===F_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function AA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hs:case Ws:e="ENVMAP_TYPE_CUBE";break;case ju:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function RA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wu:e="ENVMAP_BLENDING_MULTIPLY";break;case Iw:e="ENVMAP_BLENDING_MIX";break;case Uw:e="ENVMAP_BLENDING_ADD";break}return e}function DA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,l=n.fragmentShader;const d=CA(n),h=AA(n),p=PA(n),y=RA(n),v=DA(n),_=n.isWebGL2?"":xA(n),T=SA(o),b=r.createProgram();let E,m,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=[T].filter(Fa).join(`
`),E.length>0&&(E+=`
`),m=[_,T].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(E=[n0(n),"#define SHADER_NAME "+n.shaderName,T,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[_,n0(n),"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?at.tonemapping_pars_fragment:"",n.toneMapping!==Hi?_A("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.encodings_pars_fragment,yA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),a=Nh(a),a=Jg(a,n),a=e0(a,n),l=Nh(l),l=Jg(l,n),l=e0(l,n),a=t0(a),l=t0(l),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,E=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,m=["#define varying in",n.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=M+E+a,L=M+m+l,P=Zg(r,r.VERTEX_SHADER,w),U=Zg(r,r.FRAGMENT_SHADER,L);if(r.attachShader(b,P),r.attachShader(b,U),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),t.debug.checkShaderErrors){const R=r.getProgramInfoLog(b).trim(),N=r.getShaderInfoLog(P).trim(),ae=r.getShaderInfoLog(U).trim();let fe=!0,$=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(fe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,P,U);else{const te=Qg(r,P,"vertex"),j=Qg(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+te+`
`+j)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||ae==="")&&($=!1);$&&(this.diagnostics={runnable:fe,programLog:R,vertexShader:{log:N,prefix:E},fragmentShader:{log:ae,prefix:m}})}r.deleteShader(P),r.deleteShader(U);let B;this.getUniforms=function(){return B===void 0&&(B=new Jc(r,b)),B};let z;return this.getAttributes=function(){return z===void 0&&(z=MA(r,b)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.name=n.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=U,this}let IA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OA(e),n.set(e,i)),i}}class OA{constructor(e){this.id=IA++,this.code=e,this.usedTimes=0}}function NA(t,e,n,i,r,o,a){const l=new q_,d=new UA,h=[],p=r.isWebGL2,y=r.logarithmicDepthBuffer,v=r.vertexTextures;let _=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return R===1?"uv1":R===2?"uv2":R===3?"uv3":"uv"}function E(R,N,ae,fe,$){const te=fe.fog,j=$.geometry,ce=R.isMeshStandardMaterial?fe.environment:null,pe=(R.isMeshStandardMaterial?n:e).get(R.envMap||ce),X=pe&&pe.mapping===ju?pe.image.height:null,J=T[R.type];R.precision!==null&&(_=r.getMaxPrecision(R.precision),_!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",_,"instead."));const ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=ne!==void 0?ne.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let oe,q,Me,Ee;if(J){const xt=ki[J];oe=xt.vertexShader,q=xt.fragmentShader}else oe=R.vertexShader,q=R.fragmentShader,d.update(R),Me=d.getVertexShaderID(R),Ee=d.getFragmentShaderID(R);const H=t.getRenderTarget(),Ze=$.isInstancedMesh===!0,He=!!R.map,Te=!!R.matcap,Ge=!!pe,ht=!!R.aoMap,Be=!!R.lightMap,Je=!!R.bumpMap,Ye=!!R.normalMap,Tt=!!R.displacementMap,Ot=!!R.emissiveMap,gt=!!R.metalnessMap,lt=!!R.roughnessMap,Mt=R.clearcoat>0,jt=R.iridescence>0,F=R.sheen>0,D=R.transmission>0,se=Mt&&!!R.clearcoatMap,me=Mt&&!!R.clearcoatNormalMap,xe=Mt&&!!R.clearcoatRoughnessMap,be=jt&&!!R.iridescenceMap,G=jt&&!!R.iridescenceThicknessMap,he=F&&!!R.sheenColorMap,ie=F&&!!R.sheenRoughnessMap,Ae=!!R.specularMap,Ie=!!R.specularColorMap,ze=!!R.specularIntensityMap,De=D&&!!R.transmissionMap,Fe=D&&!!R.thicknessMap,qe=!!R.gradientMap,et=!!R.alphaMap,At=R.alphaTest>0,W=!!R.extensions,le=!!j.attributes.uv1,ge=!!j.attributes.uv2,Le=!!j.attributes.uv3;return{isWebGL2:p,shaderID:J,shaderName:R.type,vertexShader:oe,fragmentShader:q,defines:R.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:_,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Wi,map:He,matcap:Te,envMap:Ge,envMapMode:Ge&&pe.mapping,envMapCubeUVHeight:X,aoMap:ht,lightMap:Be,bumpMap:Je,normalMap:Ye,displacementMap:v&&Tt,emissiveMap:Ot,normalMapObjectSpace:Ye&&R.normalMapType===n1,normalMapTangentSpace:Ye&&R.normalMapType===ea,metalnessMap:gt,roughnessMap:lt,clearcoat:Mt,clearcoatMap:se,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:jt,iridescenceMap:be,iridescenceThicknessMap:G,sheen:F,sheenColorMap:he,sheenRoughnessMap:ie,specularMap:Ae,specularColorMap:Ie,specularIntensityMap:ze,transmission:D,transmissionMap:De,thicknessMap:Fe,gradientMap:qe,opaque:R.transparent===!1&&R.blending===Is,alphaMap:et,alphaTest:At,combine:R.combine,mapUv:He&&b(R.map.channel),aoMapUv:ht&&b(R.aoMap.channel),lightMapUv:Be&&b(R.lightMap.channel),bumpMapUv:Je&&b(R.bumpMap.channel),normalMapUv:Ye&&b(R.normalMap.channel),displacementMapUv:Tt&&b(R.displacementMap.channel),emissiveMapUv:Ot&&b(R.emissiveMap.channel),metalnessMapUv:gt&&b(R.metalnessMap.channel),roughnessMapUv:lt&&b(R.roughnessMap.channel),clearcoatMapUv:se&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:G&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:ie&&b(R.sheenRoughnessMap.channel),specularMapUv:Ae&&b(R.specularMap.channel),specularColorMapUv:Ie&&b(R.specularColorMap.channel),specularIntensityMapUv:ze&&b(R.specularIntensityMap.channel),transmissionMapUv:De&&b(R.transmissionMap.channel),thicknessMapUv:Fe&&b(R.thicknessMap.channel),alphaMapUv:et&&b(R.alphaMap.channel),vertexTangents:Ye&&!!j.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ge,vertexUv3s:Le,pointsUvs:$.isPoints===!0&&!!j.attributes.uv&&(He||et),fog:!!te,useFog:R.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:$.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ve,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&ae.length>0,shadowMapType:t.shadowMap.type,toneMapping:R.toneMapped?t.toneMapping:Hi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Bi,flipSided:R.side===Un,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:W&&R.extensions.derivatives===!0,extensionFragDepth:W&&R.extensions.fragDepth===!0,extensionDrawBuffers:W&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function m(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ae in R.defines)N.push(ae),N.push(R.defines[ae]);return R.isRawShaderMaterial===!1&&(M(N,R),w(N,R),N.push(t.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function M(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function w(R,N){l.disableAll(),N.isWebGL2&&l.enable(0),N.supportsVertexTextures&&l.enable(1),N.instancing&&l.enable(2),N.instancingColor&&l.enable(3),N.matcap&&l.enable(4),N.envMap&&l.enable(5),N.normalMapObjectSpace&&l.enable(6),N.normalMapTangentSpace&&l.enable(7),N.clearcoat&&l.enable(8),N.iridescence&&l.enable(9),N.alphaTest&&l.enable(10),N.vertexColors&&l.enable(11),N.vertexAlphas&&l.enable(12),N.vertexUv1s&&l.enable(13),N.vertexUv2s&&l.enable(14),N.vertexUv3s&&l.enable(15),N.vertexTangents&&l.enable(16),R.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.skinning&&l.enable(4),N.morphTargets&&l.enable(5),N.morphNormals&&l.enable(6),N.morphColors&&l.enable(7),N.premultipliedAlpha&&l.enable(8),N.shadowMapEnabled&&l.enable(9),N.useLegacyLights&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),R.push(l.mask)}function L(R){const N=T[R.type];let ae;if(N){const fe=ki[N];ae=Bn.clone(fe.uniforms)}else ae=R.uniforms;return ae}function P(R,N){let ae;for(let fe=0,$=h.length;fe<$;fe++){const te=h[fe];if(te.cacheKey===N){ae=te,++ae.usedTimes;break}}return ae===void 0&&(ae=new LA(t,N,R,o),h.push(ae)),ae}function U(R){if(--R.usedTimes===0){const N=h.indexOf(R);h[N]=h[h.length-1],h.pop(),R.destroy()}}function B(R){d.remove(R)}function z(){d.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:L,acquireProgram:P,releaseProgram:U,releaseShaderCache:B,programs:h,dispose:z}}function FA(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function i(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function kA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function i0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function r0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(y,v,_,T,b,E){let m=t[e];return m===void 0?(m={id:y.id,object:y,geometry:v,material:_,groupOrder:T,renderOrder:y.renderOrder,z:b,group:E},t[e]=m):(m.id=y.id,m.object=y,m.geometry=v,m.material=_,m.groupOrder=T,m.renderOrder=y.renderOrder,m.z=b,m.group=E),e++,m}function l(y,v,_,T,b,E){const m=a(y,v,_,T,b,E);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):n.push(m)}function d(y,v,_,T,b,E){const m=a(y,v,_,T,b,E);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function h(y,v){n.length>1&&n.sort(y||kA),i.length>1&&i.sort(v||i0),r.length>1&&r.sort(v||i0)}function p(){for(let y=e,v=t.length;y<v;y++){const _=t[y];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:d,finish:p,sort:h}}function zA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new r0,t.set(i,[a])):r>=o.length?(a=new r0,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function BA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Ke};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VA=0;function HA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WA(t,e){const n=new BA,i=GA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)r.probe.push(new Y);const o=new Y,a=new Vt,l=new Vt;function d(p,y){let v=0,_=0,T=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let b=0,E=0,m=0,M=0,w=0,L=0,P=0,U=0,B=0,z=0;p.sort(HA);const R=y===!0?Math.PI:1;for(let ae=0,fe=p.length;ae<fe;ae++){const $=p[ae],te=$.color,j=$.intensity,ce=$.distance,pe=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)v+=te.r*j*R,_+=te.g*j*R,T+=te.b*j*R;else if($.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector($.sh.coefficients[X],j);else if($.isDirectionalLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.directionalShadow[b]=ne,r.directionalShadowMap[b]=pe,r.directionalShadowMatrix[b]=$.shadow.matrix,L++}r.directional[b]=X,b++}else if($.isSpotLight){const X=n.get($);X.position.setFromMatrixPosition($.matrixWorld),X.color.copy(te).multiplyScalar(j*R),X.distance=ce,X.coneCos=Math.cos($.angle),X.penumbraCos=Math.cos($.angle*(1-$.penumbra)),X.decay=$.decay,r.spot[m]=X;const J=$.shadow;if($.map&&(r.spotLightMap[B]=$.map,B++,J.updateMatrices($),$.castShadow&&z++),r.spotLightMatrix[m]=J.matrix,$.castShadow){const ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.spotShadow[m]=ne,r.spotShadowMap[m]=pe,U++}m++}else if($.isRectAreaLight){const X=n.get($);X.color.copy(te).multiplyScalar(j),X.halfWidth.set($.width*.5,0,0),X.halfHeight.set(0,$.height*.5,0),r.rectArea[M]=X,M++}else if($.isPointLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),X.distance=$.distance,X.decay=$.decay,$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,ne.shadowCameraNear=J.camera.near,ne.shadowCameraFar=J.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=$.shadow.matrix,P++}r.point[E]=X,E++}else if($.isHemisphereLight){const X=n.get($);X.skyColor.copy($.color).multiplyScalar(j*R),X.groundColor.copy($.groundColor).multiplyScalar(j*R),r.hemi[w]=X,w++}}M>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=T;const N=r.hash;(N.directionalLength!==b||N.pointLength!==E||N.spotLength!==m||N.rectAreaLength!==M||N.hemiLength!==w||N.numDirectionalShadows!==L||N.numPointShadows!==P||N.numSpotShadows!==U||N.numSpotMaps!==B)&&(r.directional.length=b,r.spot.length=m,r.rectArea.length=M,r.point.length=E,r.hemi.length=w,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,N.directionalLength=b,N.pointLength=E,N.spotLength=m,N.rectAreaLength=M,N.hemiLength=w,N.numDirectionalShadows=L,N.numPointShadows=P,N.numSpotShadows=U,N.numSpotMaps=B,r.version=VA++)}function h(p,y){let v=0,_=0,T=0,b=0,E=0;const m=y.matrixWorldInverse;for(let M=0,w=p.length;M<w;M++){const L=p[M];if(L.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(m),v++}else if(L.isSpotLight){const P=r.spot[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(m),T++}else if(L.isRectAreaLight){const P=r.rectArea[b];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(m),l.identity(),a.copy(L.matrixWorld),a.premultiply(m),l.extractRotation(a),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(l),P.halfHeight.applyMatrix4(l),b++}else if(L.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(m),_++}else if(L.isHemisphereLight){const P=r.hemi[E];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(m),E++}}}return{setup:d,setupView:h,state:r}}function o0(t,e){const n=new WA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(y){i.push(y)}function l(y){r.push(y)}function d(y){n.setup(i,y)}function h(y){n.setupView(i,y)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:d,setupLightsView:h,pushLight:a,pushShadow:l}}function jA(t,e){let n=new WeakMap;function i(o,a=0){const l=n.get(o);let d;return l===void 0?(d=new o0(t,e),n.set(o,[d])):a>=l.length?(d=new o0(t,e),l.push(d)):d=l[a],d}function r(){n=new WeakMap}return{get:i,dispose:r}}class pr extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ys extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
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
}`;function qA(t,e,n){let i=new zp;const r=new Ne,o=new Ne,a=new Dt,l=new pr({depthPacking:Js}),d=new Ys,h={},p=n.maxTextureSize,y={[Wr]:Un,[Un]:Wr,[Bi]:Bi},v=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:XA,fragmentShader:YA}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const T=new mi;T.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ln(T,v),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let m=this.type;this.render=function(P,U,B){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||P.length===0)return;const z=t.getRenderTarget(),R=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(cn),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const fe=m!==nr&&this.type===nr,$=m===nr&&this.type!==nr;for(let te=0,j=P.length;te<j;te++){const ce=P[te],pe=ce.shadow;if(pe===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(pe.autoUpdate===!1&&pe.needsUpdate===!1)continue;r.copy(pe.mapSize);const X=pe.getFrameExtents();if(r.multiply(X),o.copy(pe.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/X.x),r.x=o.x*X.x,pe.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/X.y),r.y=o.y*X.y,pe.mapSize.y=o.y)),pe.map===null||fe===!0||$===!0){const ne=this.type!==nr?{minFilter:Qt,magFilter:Qt}:{};pe.map!==null&&pe.map.dispose(),pe.map=new en(r.x,r.y,ne),pe.map.texture.name=ce.name+".shadowMap",pe.camera.updateProjectionMatrix()}t.setRenderTarget(pe.map),t.clear();const J=pe.getViewportCount();for(let ne=0;ne<J;ne++){const we=pe.getViewport(ne);a.set(o.x*we.x,o.y*we.y,o.x*we.z,o.y*we.w),ae.viewport(a),pe.updateMatrices(ce,ne),i=pe.getFrustum(),L(U,B,pe.camera,ce,this.type)}pe.isPointLightShadow!==!0&&this.type===nr&&M(pe,B),pe.needsUpdate=!1}m=this.type,E.needsUpdate=!1,t.setRenderTarget(z,R,N)};function M(P,U){const B=e.update(b);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new en(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(U,null,B,v,b,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(U,null,B,_,b,null)}function w(P,U,B,z){let R=null;const N=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)R=N;else if(R=B.isPointLight===!0?d:l,t.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ae=R.uuid,fe=U.uuid;let $=h[ae];$===void 0&&($={},h[ae]=$);let te=$[fe];te===void 0&&(te=R.clone(),$[fe]=te),R=te}if(R.visible=U.visible,R.wireframe=U.wireframe,z===nr?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:y[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=t.properties.get(R);ae.light=B}return R}function L(P,U,B,z,R){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===nr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),$=P.material;if(Array.isArray($)){const te=fe.groups;for(let j=0,ce=te.length;j<ce;j++){const pe=te[j],X=$[pe.materialIndex];if(X&&X.visible){const J=w(P,X,z,R);t.renderBufferDirect(B,null,fe,J,P,pe)}}}else if($.visible){const te=w(P,$,z,R);t.renderBufferDirect(B,null,fe,te,P,null)}}const ae=P.children;for(let fe=0,$=ae.length;fe<$;fe++)L(ae[fe],U,B,z,R)}}function $A(t,e,n){const i=n.isWebGL2;function r(){let W=!1;const le=new Dt;let ge=null;const Le=new Dt(0,0,0,0);return{setMask:function(Ue){ge!==Ue&&!W&&(t.colorMask(Ue,Ue,Ue,Ue),ge=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,xt,pt,on,Xt){Xt===!0&&(Ue*=on,xt*=on,pt*=on),le.set(Ue,xt,pt,on),Le.equals(le)===!1&&(t.clearColor(Ue,xt,pt,on),Le.copy(le))},reset:function(){W=!1,ge=null,Le.set(-1,0,0,0)}}}function o(){let W=!1,le=null,ge=null,Le=null;return{setTest:function(Ue){Ue?H(t.DEPTH_TEST):Ze(t.DEPTH_TEST)},setMask:function(Ue){le!==Ue&&!W&&(t.depthMask(Ue),le=Ue)},setFunc:function(Ue){if(ge!==Ue){switch(Ue){case bw:t.depthFunc(t.NEVER);break;case Cw:t.depthFunc(t.ALWAYS);break;case Aw:t.depthFunc(t.LESS);break;case Lh:t.depthFunc(t.LEQUAL);break;case Pw:t.depthFunc(t.EQUAL);break;case Rw:t.depthFunc(t.GEQUAL);break;case Dw:t.depthFunc(t.GREATER);break;case Lw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Ue}},setLocked:function(Ue){W=Ue},setClear:function(Ue){Le!==Ue&&(t.clearDepth(Ue),Le=Ue)},reset:function(){W=!1,le=null,ge=null,Le=null}}}function a(){let W=!1,le=null,ge=null,Le=null,Ue=null,xt=null,pt=null,on=null,Xt=null;return{setTest:function(yt){W||(yt?H(t.STENCIL_TEST):Ze(t.STENCIL_TEST))},setMask:function(yt){le!==yt&&!W&&(t.stencilMask(yt),le=yt)},setFunc:function(yt,Yt,Xn){(ge!==yt||Le!==Yt||Ue!==Xn)&&(t.stencilFunc(yt,Yt,Xn),ge=yt,Le=Yt,Ue=Xn)},setOp:function(yt,Yt,Xn){(xt!==yt||pt!==Yt||on!==Xn)&&(t.stencilOp(yt,Yt,Xn),xt=yt,pt=Yt,on=Xn)},setLocked:function(yt){W=yt},setClear:function(yt){Xt!==yt&&(t.clearStencil(yt),Xt=yt)},reset:function(){W=!1,le=null,ge=null,Le=null,Ue=null,xt=null,pt=null,on=null,Xt=null}}}const l=new r,d=new o,h=new a,p=new WeakMap,y=new WeakMap;let v={},_={},T=new WeakMap,b=[],E=null,m=!1,M=null,w=null,L=null,P=null,U=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,pe=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(X)[1]),ce=pe>=1):X.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ce=pe>=2);let J=null,ne={};const we=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),oe=new Dt().fromArray(we),q=new Dt().fromArray(ve);function Me(W,le,ge,Le){const Ue=new Uint8Array(4),xt=t.createTexture();t.bindTexture(W,xt),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<ge;pt++)i&&(W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(le+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return xt}const Ee={};Ee[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),d.setClear(1),h.setClear(0),H(t.DEPTH_TEST),d.setFunc(Lh),Tt(!1),Ot(jv),H(t.CULL_FACE),Je(cn);function H(W){v[W]!==!0&&(t.enable(W),v[W]=!0)}function Ze(W){v[W]!==!1&&(t.disable(W),v[W]=!1)}function He(W,le){return _[W]!==le?(t.bindFramebuffer(W,le),_[W]=le,i&&(W===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=le),W===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function Te(W,le){let ge=b,Le=!1;if(W)if(ge=T.get(le),ge===void 0&&(ge=[],T.set(le,ge)),W.isWebGLMultipleRenderTargets){const Ue=W.texture;if(ge.length!==Ue.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let xt=0,pt=Ue.length;xt<pt;xt++)ge[xt]=t.COLOR_ATTACHMENT0+xt;ge.length=Ue.length,Le=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Le=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ge(W){return E!==W?(t.useProgram(W),E=W,!0):!1}const ht={[sr]:t.FUNC_ADD,[yw]:t.FUNC_SUBTRACT,[_w]:t.FUNC_REVERSE_SUBTRACT};if(i)ht[qv]=t.MIN,ht[$v]=t.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(ht[qv]=W.MIN_EXT,ht[$v]=W.MAX_EXT)}const Be={[Dh]:t.ZERO,[xw]:t.ONE,[Sw]:t.SRC_COLOR,[Op]:t.SRC_ALPHA,[Tw]:t.SRC_ALPHA_SATURATE,[z_]:t.DST_COLOR,[k_]:t.DST_ALPHA,[Mw]:t.ONE_MINUS_SRC_COLOR,[Np]:t.ONE_MINUS_SRC_ALPHA,[ww]:t.ONE_MINUS_DST_COLOR,[Ew]:t.ONE_MINUS_DST_ALPHA};function Je(W,le,ge,Le,Ue,xt,pt,on){if(W===cn){m===!0&&(Ze(t.BLEND),m=!1);return}if(m===!1&&(H(t.BLEND),m=!0),W!==pl){if(W!==M||on!==R){if((w!==sr||U!==sr)&&(t.blendEquation(t.FUNC_ADD),w=sr,U=sr),on)switch(W){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rh:t.blendFunc(t.ONE,t.ONE);break;case Xv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,B=null,z=null,M=W,R=on}return}Ue=Ue||le,xt=xt||ge,pt=pt||Le,(le!==w||Ue!==U)&&(t.blendEquationSeparate(ht[le],ht[Ue]),w=le,U=Ue),(ge!==L||Le!==P||xt!==B||pt!==z)&&(t.blendFuncSeparate(Be[ge],Be[Le],Be[xt],Be[pt]),L=ge,P=Le,B=xt,z=pt),M=W,R=!1}function Ye(W,le){W.side===Bi?Ze(t.CULL_FACE):H(t.CULL_FACE);let ge=W.side===Un;le&&(ge=!ge),Tt(ge),W.blending===Is&&W.transparent===!1?Je(cn):Je(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),l.setMask(W.colorWrite);const Le=W.stencilWrite;h.setTest(Le),Le&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):Ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(W){N!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),N=W)}function Ot(W){W!==vw?(H(t.CULL_FACE),W!==ae&&(W===jv?t.cullFace(t.BACK):W===gw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ze(t.CULL_FACE),ae=W}function gt(W){W!==fe&&(ce&&t.lineWidth(W),fe=W)}function lt(W,le,ge){W?(H(t.POLYGON_OFFSET_FILL),($!==le||te!==ge)&&(t.polygonOffset(le,ge),$=le,te=ge)):Ze(t.POLYGON_OFFSET_FILL)}function Mt(W){W?H(t.SCISSOR_TEST):Ze(t.SCISSOR_TEST)}function jt(W){W===void 0&&(W=t.TEXTURE0+j-1),J!==W&&(t.activeTexture(W),J=W)}function F(W,le,ge){ge===void 0&&(J===null?ge=t.TEXTURE0+j-1:ge=J);let Le=ne[ge];Le===void 0&&(Le={type:void 0,texture:void 0},ne[ge]=Le),(Le.type!==W||Le.texture!==le)&&(J!==ge&&(t.activeTexture(ge),J=ge),t.bindTexture(W,le||Ee[W]),Le.type=W,Le.texture=le)}function D(){const W=ne[J];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{t.texSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{t.texStorage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{t.texImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(W){oe.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),oe.copy(W))}function Fe(W){q.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function qe(W,le){let ge=y.get(le);ge===void 0&&(ge=new WeakMap,y.set(le,ge));let Le=ge.get(W);Le===void 0&&(Le=t.getUniformBlockIndex(le,W.name),ge.set(W,Le))}function et(W,le){const Le=y.get(le).get(W);p.get(le)!==Le&&(t.uniformBlockBinding(le,Le,W.__bindingPointIndex),p.set(le,Le))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),v={},J=null,ne={},_={},T=new WeakMap,b=[],E=null,m=!1,M=null,w=null,L=null,P=null,U=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null,oe.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),l.reset(),d.reset(),h.reset()}return{buffers:{color:l,depth:d,stencil:h},enable:H,disable:Ze,bindFramebuffer:He,drawBuffers:Te,useProgram:Ge,setBlending:Je,setMaterial:Ye,setFlipSided:Tt,setCullFace:Ot,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:Mt,activeTexture:jt,bindTexture:F,unbindTexture:D,compressedTexImage2D:se,compressedTexImage3D:me,texImage2D:Ie,texImage3D:ze,updateUBOMapping:qe,uniformBlockBinding:et,texStorage2D:ie,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:G,compressedTexSubImage3D:he,scissor:De,viewport:Fe,reset:At}}function KA(t,e,n,i,r,o,a){const l=r.isWebGL2,d=r.maxTextures,h=r.maxCubemapSize,p=r.maxTextureSize,y=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let b;const E=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,D){return m?new OffscreenCanvas(F,D):gl("canvas")}function w(F,D,se,me){let xe=1;if((F.width>me||F.height>me)&&(xe=me/Math.max(F.width,F.height)),xe<1||D===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const be=D?o1:Math.floor,G=be(xe*F.width),he=be(xe*F.height);b===void 0&&(b=M(G,he));const ie=se?M(G,he):b;return ie.width=G,ie.height=he,ie.getContext("2d").drawImage(F,0,0,G,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+G+"x"+he+")."),ie}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function L(F){return Mg(F.width)&&Mg(F.height)}function P(F){return l?!1:F.wrapS!==Ci||F.wrapT!==Ci||F.minFilter!==Qt&&F.minFilter!==ci}function U(F,D){return F.generateMipmaps&&D&&F.minFilter!==Qt&&F.minFilter!==ci}function B(F){t.generateMipmap(F)}function z(F,D,se,me,xe=!1){if(l===!1)return D;if(F!==null){if(t[F]!==void 0)return t[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let be=D;return D===t.RED&&(se===t.FLOAT&&(be=t.R32F),se===t.HALF_FLOAT&&(be=t.R16F),se===t.UNSIGNED_BYTE&&(be=t.R8)),D===t.RG&&(se===t.FLOAT&&(be=t.RG32F),se===t.HALF_FLOAT&&(be=t.RG16F),se===t.UNSIGNED_BYTE&&(be=t.RG8)),D===t.RGBA&&(se===t.FLOAT&&(be=t.RGBA32F),se===t.HALF_FLOAT&&(be=t.RGBA16F),se===t.UNSIGNED_BYTE&&(be=me===nt&&xe===!1?t.SRGB8_ALPHA8:t.RGBA8),se===t.UNSIGNED_SHORT_4_4_4_4&&(be=t.RGBA4),se===t.UNSIGNED_SHORT_5_5_5_1&&(be=t.RGB5_A1)),(be===t.R16F||be===t.R32F||be===t.RG16F||be===t.RG32F||be===t.RGBA16F||be===t.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function R(F,D,se){return U(F,se)===!0||F.isFramebufferTexture&&F.minFilter!==Qt&&F.minFilter!==ci?Math.log2(Math.max(D.width,D.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?D.mipmaps.length:1}function N(F){return F===Qt||F===Kv||F===Jf?t.NEAREST:t.LINEAR}function ae(F){const D=F.target;D.removeEventListener("dispose",ae),$(D),D.isVideoTexture&&T.delete(D)}function fe(F){const D=F.target;D.removeEventListener("dispose",fe),j(D)}function $(F){const D=i.get(F);if(D.__webglInit===void 0)return;const se=F.source,me=E.get(se);if(me){const xe=me[D.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&te(F),Object.keys(me).length===0&&E.delete(se)}i.remove(F)}function te(F){const D=i.get(F);t.deleteTexture(D.__webglTexture);const se=F.source,me=E.get(se);delete me[D.__cacheKey],a.memory.textures--}function j(F){const D=F.texture,se=i.get(F),me=i.get(D);if(me.__webglTexture!==void 0&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)t.deleteFramebuffer(se.__webglFramebuffer[xe]),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer[xe]);else{if(t.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&t.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let xe=0;xe<se.__webglColorRenderbuffer.length;xe++)se.__webglColorRenderbuffer[xe]&&t.deleteRenderbuffer(se.__webglColorRenderbuffer[xe]);se.__webglDepthRenderbuffer&&t.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let xe=0,be=D.length;xe<be;xe++){const G=i.get(D[xe]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(D[xe])}i.remove(D),i.remove(F)}let ce=0;function pe(){ce=0}function X(){const F=ce;return F>=d&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+d),ce+=1,F}function J(F){const D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()}function ne(F,D){const se=i.get(F);if(F.isVideoTexture&&Mt(F),F.isRenderTargetTexture===!1&&F.version>0&&se.__version!==F.version){const me=F.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(se,F,D);return}}n.bindTexture(t.TEXTURE_2D,se.__webglTexture,t.TEXTURE0+D)}function we(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ze(se,F,D);return}n.bindTexture(t.TEXTURE_2D_ARRAY,se.__webglTexture,t.TEXTURE0+D)}function ve(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ze(se,F,D);return}n.bindTexture(t.TEXTURE_3D,se.__webglTexture,t.TEXTURE0+D)}function oe(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){He(se,F,D);return}n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture,t.TEXTURE0+D)}const q={[Do]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Uh]:t.MIRRORED_REPEAT},Me={[Qt]:t.NEAREST,[Kv]:t.NEAREST_MIPMAP_NEAREST,[Jf]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[zw]:t.LINEAR_MIPMAP_NEAREST,[ml]:t.LINEAR_MIPMAP_LINEAR};function Ee(F,D,se){if(se?(t.texParameteri(F,t.TEXTURE_WRAP_S,q[D.wrapS]),t.texParameteri(F,t.TEXTURE_WRAP_T,q[D.wrapT]),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,q[D.wrapR]),t.texParameteri(F,t.TEXTURE_MAG_FILTER,Me[D.magFilter]),t.texParameteri(F,t.TEXTURE_MIN_FILTER,Me[D.minFilter])):(t.texParameteri(F,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(F,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(D.wrapS!==Ci||D.wrapT!==Ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(F,t.TEXTURE_MAG_FILTER,N(D.magFilter)),t.texParameteri(F,t.TEXTURE_MIN_FILTER,N(D.minFilter)),D.minFilter!==Qt&&D.minFilter!==ci&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===Qt||D.minFilter!==Jf&&D.minFilter!==ml||D.type===_o&&e.has("OES_texture_float_linear")===!1||l===!1&&D.type===vl&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(t.texParameterf(F,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function H(F,D){let se=!1;F.__webglInit===void 0&&(F.__webglInit=!0,D.addEventListener("dispose",ae));const me=D.source;let xe=E.get(me);xe===void 0&&(xe={},E.set(me,xe));const be=J(D);if(be!==F.__cacheKey){xe[be]===void 0&&(xe[be]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,se=!0),xe[be].usedTimes++;const G=xe[F.__cacheKey];G!==void 0&&(xe[F.__cacheKey].usedTimes--,G.usedTimes===0&&te(D)),F.__cacheKey=be,F.__webglTexture=xe[be].texture}return se}function Ze(F,D,se){let me=t.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(me=t.TEXTURE_2D_ARRAY),D.isData3DTexture&&(me=t.TEXTURE_3D);const xe=H(F,D),be=D.source;n.bindTexture(me,F.__webglTexture,t.TEXTURE0+se);const G=i.get(be);if(be.version!==G.__version||xe===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const he=P(D)&&L(D.image)===!1;let ie=w(D.image,he,!1,p);ie=jt(D,ie);const Ae=L(ie)||l,Ie=o.convert(D.format,D.colorSpace);let ze=o.convert(D.type),De=z(D.internalFormat,Ie,ze,D.colorSpace);Ee(me,D,Ae);let Fe;const qe=D.mipmaps,et=l&&D.isVideoTexture!==!0,At=G.__version===void 0||xe===!0,W=R(D,ie,Ae);if(D.isDepthTexture)De=t.DEPTH_COMPONENT,l?D.type===_o?De=t.DEPTH_COMPONENT32F:D.type===yo?De=t.DEPTH_COMPONENT24:D.type===Us?De=t.DEPTH24_STENCIL8:De=t.DEPTH_COMPONENT16:D.type===_o&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===Mo&&De===t.DEPTH_COMPONENT&&D.type!==Fp&&D.type!==yo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=yo,ze=o.convert(D.type)),D.format===js&&De===t.DEPTH_COMPONENT&&(De=t.DEPTH_STENCIL,D.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Us,ze=o.convert(D.type))),At&&(et?n.texStorage2D(t.TEXTURE_2D,1,De,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,Ie,ze,null));else if(D.isDataTexture)if(qe.length>0&&Ae){et&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],et?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,ze,Fe.data):n.texImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Ie,ze,Fe.data);D.generateMipmaps=!1}else et?(At&&n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Ie,ze,ie.data)):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,Ie,ze,ie.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){et&&At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,qe[0].width,qe[0].height,ie.depth);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],D.format!==Ai?Ie!==null?et?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,ie.depth,Ie,Fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,De,Fe.width,Fe.height,ie.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,ie.depth,Ie,ze,Fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,De,Fe.width,Fe.height,ie.depth,0,Ie,ze,Fe.data)}else{et&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],D.format!==Ai?Ie!==null?et?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,Fe.data):n.compressedTexImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,ze,Fe.data):n.texImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Ie,ze,Fe.data)}else if(D.isDataArrayTexture)et?(At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ie,ze,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,Ie,ze,ie.data);else if(D.isData3DTexture)et?(At&&n.texStorage3D(t.TEXTURE_3D,W,De,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ie,ze,ie.data)):n.texImage3D(t.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,Ie,ze,ie.data);else if(D.isFramebufferTexture){if(At)if(et)n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height);else{let le=ie.width,ge=ie.height;for(let Le=0;Le<W;Le++)n.texImage2D(t.TEXTURE_2D,Le,De,le,ge,0,Ie,ze,null),le>>=1,ge>>=1}}else if(qe.length>0&&Ae){et&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],et?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ie,ze,Fe):n.texImage2D(t.TEXTURE_2D,le,De,Ie,ze,Fe);D.generateMipmaps=!1}else et?(At&&n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,ze,ie)):n.texImage2D(t.TEXTURE_2D,0,De,Ie,ze,ie);U(D,Ae)&&B(me),G.__version=be.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function He(F,D,se){if(D.image.length!==6)return;const me=H(F,D),xe=D.source;n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+se);const be=i.get(xe);if(xe.version!==be.__version||me===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const G=D.isCompressedTexture||D.image[0].isCompressedTexture,he=D.image[0]&&D.image[0].isDataTexture,ie=[];for(let le=0;le<6;le++)!G&&!he?ie[le]=w(D.image[le],!1,!0,h):ie[le]=he?D.image[le].image:D.image[le],ie[le]=jt(D,ie[le]);const Ae=ie[0],Ie=L(Ae)||l,ze=o.convert(D.format,D.colorSpace),De=o.convert(D.type),Fe=z(D.internalFormat,ze,De,D.colorSpace),qe=l&&D.isVideoTexture!==!0,et=be.__version===void 0||me===!0;let At=R(D,Ae,Ie);Ee(t.TEXTURE_CUBE_MAP,D,Ie);let W;if(G){qe&&et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Fe,Ae.width,Ae.height);for(let le=0;le<6;le++){W=ie[le].mipmaps;for(let ge=0;ge<W.length;ge++){const Le=W[ge];D.format!==Ai?ze!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,Le.width,Le.height,ze,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,Le.width,Le.height,ze,De,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Fe,Le.width,Le.height,0,ze,De,Le.data)}}}else{W=D.mipmaps,qe&&et&&(W.length>0&&At++,n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Fe,ie[0].width,ie[0].height));for(let le=0;le<6;le++)if(he){qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie[le].width,ie[le].height,ze,De,ie[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,ie[le].width,ie[le].height,0,ze,De,ie[le].data);for(let ge=0;ge<W.length;ge++){const Ue=W[ge].image[le].image;qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,Ue.width,Ue.height,ze,De,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Fe,Ue.width,Ue.height,0,ze,De,Ue.data)}}else{qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,De,ie[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,ze,De,ie[le]);for(let ge=0;ge<W.length;ge++){const Le=W[ge];qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,ze,De,Le.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Fe,ze,De,Le.image[le])}}}U(D,Ie)&&B(t.TEXTURE_CUBE_MAP),be.__version=xe.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function Te(F,D,se,me,xe){const be=o.convert(se.format,se.colorSpace),G=o.convert(se.type),he=z(se.internalFormat,be,G,se.colorSpace);i.get(D).__hasExternalTextures||(xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,he,D.width,D.height,D.depth,0,be,G,null):n.texImage2D(xe,0,he,D.width,D.height,0,be,G,null)),n.bindFramebuffer(t.FRAMEBUFFER,F),lt(D)?v.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0,gt(D)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(F,D,se){if(t.bindRenderbuffer(t.RENDERBUFFER,F),D.depthBuffer&&!D.stencilBuffer){let me=t.DEPTH_COMPONENT16;if(se||lt(D)){const xe=D.depthTexture;xe&&xe.isDepthTexture&&(xe.type===_o?me=t.DEPTH_COMPONENT32F:xe.type===yo&&(me=t.DEPTH_COMPONENT24));const be=gt(D);lt(D)?v.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,me,D.width,D.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,be,me,D.width,D.height)}else t.renderbufferStorage(t.RENDERBUFFER,me,D.width,D.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,F)}else if(D.depthBuffer&&D.stencilBuffer){const me=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):lt(D)?v.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,F)}else{const me=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let xe=0;xe<me.length;xe++){const be=me[xe],G=o.convert(be.format,be.colorSpace),he=o.convert(be.type),ie=z(be.internalFormat,G,he,be.colorSpace),Ae=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ie,D.width,D.height):lt(D)?v.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ie,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,ie,D.width,D.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ht(F,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,F),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),ne(D.depthTexture,0);const me=i.get(D.depthTexture).__webglTexture,xe=gt(D);if(D.depthTexture.format===Mo)lt(D)?v.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(D.depthTexture.format===js)lt(D)?v.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Be(F){const D=i.get(F),se=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!D.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ht(D.__webglFramebuffer,F)}else if(se){D.__webglDepthbuffer=[];for(let me=0;me<6;me++)n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer[me]),D.__webglDepthbuffer[me]=t.createRenderbuffer(),Ge(D.__webglDepthbuffer[me],F,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=t.createRenderbuffer(),Ge(D.__webglDepthbuffer,F,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(F,D,se){const me=i.get(F);D!==void 0&&Te(me.__webglFramebuffer,F,F.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),se!==void 0&&Be(F)}function Ye(F){const D=F.texture,se=i.get(F),me=i.get(D);F.addEventListener("dispose",fe),F.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture()),me.__version=D.version,a.memory.textures++);const xe=F.isWebGLCubeRenderTarget===!0,be=F.isWebGLMultipleRenderTargets===!0,G=L(F)||l;if(xe){se.__webglFramebuffer=[];for(let he=0;he<6;he++)se.__webglFramebuffer[he]=t.createFramebuffer()}else{if(se.__webglFramebuffer=t.createFramebuffer(),be)if(r.drawBuffers){const he=F.texture;for(let ie=0,Ae=he.length;ie<Ae;ie++){const Ie=i.get(he[ie]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&F.samples>0&&lt(F)===!1){const he=be?D:[D];se.__webglMultisampledFramebuffer=t.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ie=0;ie<he.length;ie++){const Ae=he[ie];se.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);const Ie=o.convert(Ae.format,Ae.colorSpace),ze=o.convert(Ae.type),De=z(Ae.internalFormat,Ie,ze,Ae.colorSpace,F.isXRRenderTarget===!0),Fe=gt(F);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,De,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,se.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),F.depthBuffer&&(se.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(se.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,D,G);for(let he=0;he<6;he++)Te(se.__webglFramebuffer[he],F,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he);U(D,G)&&B(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){const he=F.texture;for(let ie=0,Ae=he.length;ie<Ae;ie++){const Ie=he[ie],ze=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ze.__webglTexture),Ee(t.TEXTURE_2D,Ie,G),Te(se.__webglFramebuffer,F,Ie,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D),U(Ie,G)&&B(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(l?he=F.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,me.__webglTexture),Ee(he,D,G),Te(se.__webglFramebuffer,F,D,t.COLOR_ATTACHMENT0,he),U(D,G)&&B(he),n.unbindTexture()}F.depthBuffer&&Be(F)}function Tt(F){const D=L(F)||l,se=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let me=0,xe=se.length;me<xe;me++){const be=se[me];if(U(be,D)){const G=F.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(be).__webglTexture;n.bindTexture(G,he),B(G),n.unbindTexture()}}}function Ot(F){if(l&&F.samples>0&&lt(F)===!1){const D=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],se=F.width,me=F.height;let xe=t.COLOR_BUFFER_BIT;const be=[],G=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(F),ie=F.isWebGLMultipleRenderTargets===!0;if(ie)for(let Ae=0;Ae<D.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ae=0;Ae<D.length;Ae++){be.push(t.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&be.push(G);const Ie=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ie===!1&&(F.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),F.stencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),ie&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[G]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[G])),ie){const ze=i.get(D[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,se,me,0,0,se,me,xe,t.NEAREST),_&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,be)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let Ae=0;Ae<D.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const Ie=i.get(D[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function gt(F){return Math.min(y,F.samples)}function lt(F){const D=i.get(F);return l&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Mt(F){const D=a.render.frame;T.get(F)!==D&&(T.set(F,D),F.update())}function jt(F,D){const se=F.colorSpace,me=F.format,xe=F.type;return F.isCompressedTexture===!0||F.format===Oh||se!==Wi&&se!==wo&&(se===nt?l===!1?e.has("EXT_sRGB")===!0&&me===Ai?(F.format=Oh,F.minFilter=ci,F.generateMipmaps=!1):D=j_.sRGBToLinear(D):(me!==Ai||xe!==Lo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),D}this.allocateTextureUnit=X,this.resetTextureUnits=pe,this.setTexture2D=ne,this.setTexture2DArray=we,this.setTexture3D=ve,this.setTextureCube=oe,this.rebindTextures=Je,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=lt}function ZA(t,e,n){const i=n.isWebGL2;function r(o,a=wo){let l;if(o===Lo)return t.UNSIGNED_BYTE;if(o===Hw)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Ww)return t.UNSIGNED_SHORT_5_5_5_1;if(o===Bw)return t.BYTE;if(o===Gw)return t.SHORT;if(o===Fp)return t.UNSIGNED_SHORT;if(o===Vw)return t.INT;if(o===yo)return t.UNSIGNED_INT;if(o===_o)return t.FLOAT;if(o===vl)return i?t.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===jw)return t.ALPHA;if(o===Ai)return t.RGBA;if(o===Xw)return t.LUMINANCE;if(o===Yw)return t.LUMINANCE_ALPHA;if(o===Mo)return t.DEPTH_COMPONENT;if(o===js)return t.DEPTH_STENCIL;if(o===Oh)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===qw)return t.RED;if(o===$w)return t.RED_INTEGER;if(o===Kw)return t.RG;if(o===Zw)return t.RG_INTEGER;if(o===Qw)return t.RGBA_INTEGER;if(o===ed||o===td||o===nd||o===id)if(a===nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===ed)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===td)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===nd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===id)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===ed)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===td)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===nd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===id)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Zv||o===Qv||o===Jv||o===eg)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Zv)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Qv)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Jv)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===eg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Jw)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===tg||o===ng)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===tg)return a===nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===ng)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===cg||o===ug||o===fg||o===dg||o===hg||o===pg||o===mg||o===vg)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===ig)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===rg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===og)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===sg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ag)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===lg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===cg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ug)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===fg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===dg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===hg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===pg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===mg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===vg)return a===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===rd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===rd)return a===nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===e1||o===gg||o===yg||o===_g)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===rd)return l.COMPRESSED_RED_RGTC1_EXT;if(o===gg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===yg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===_g)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Us?i?t.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class QA extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kc extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JA={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const l=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const b of e.hand.values()){const E=n.getJointPose(b,i),m=this._getHandJoint(h,b);E!==null&&(m.matrix.fromArray(E.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=E.radius),m.visible=E!==null}const p=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],v=p.position.distanceTo(y.position),_=.02,T=.005;h.inputState.pinching&&v>_+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=_-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(JA)))}return l!==null&&(l.visible=r!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new kc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class sx extends jn{constructor(e,n,i,r,o,a,l,d,h,p){if(p=p!==void 0?p:Mo,p!==Mo&&p!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Mo&&(i=yo),i===void 0&&p===js&&(i=Us),super(null,r,o,a,l,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1}}class eP extends No{constructor(e,n){super();const i=this;let r=null,o=1,a=null,l="local-floor",d=1,h=null,p=null,y=null,v=null,_=null,T=null;const b=n.getContextAttributes();let E=null,m=null;const M=[],w=[],L=new Set,P=new Map,U=new zn;U.layers.enable(1),U.viewport=new Dt;const B=new zn;B.layers.enable(2),B.viewport=new Dt;const z=[U,B],R=new QA;R.layers.enable(1),R.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let q=M[oe];return q===void 0&&(q=new Ad,M[oe]=q),q.getTargetRaySpace()},this.getControllerGrip=function(oe){let q=M[oe];return q===void 0&&(q=new Ad,M[oe]=q),q.getGripSpace()},this.getHand=function(oe){let q=M[oe];return q===void 0&&(q=new Ad,M[oe]=q),q.getHandSpace()};function fe(oe){const q=w.indexOf(oe.inputSource);if(q===-1)return;const Me=M[q];Me!==void 0&&(Me.update(oe.inputSource,oe.frame,h||a),Me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function $(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",te);for(let oe=0;oe<M.length;oe++){const q=w[oe];q!==null&&(w[oe]=null,M[oe].disconnect(q))}N=null,ae=null,e.setRenderTarget(E),_=null,v=null,y=null,r=null,m=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",$),r.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:_}),m=new en(_.framebufferWidth,_.framebufferHeight,{format:Ai,type:Lo,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let q=null,Me=null,Ee=null;b.depth&&(Ee=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=b.stencil?js:Mo,Me=b.stencil?Us:yo);const H={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:o};y=new XRWebGLBinding(r,n),v=y.createProjectionLayer(H),r.updateRenderState({layers:[v]}),m=new en(v.textureWidth,v.textureHeight,{format:Ai,type:Lo,depthTexture:new sx(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Ze=e.properties.get(m);Ze.__ignoreDepthValues=v.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(d),h=null,a=await r.requestReferenceSpace(l),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(oe){for(let q=0;q<oe.removed.length;q++){const Me=oe.removed[q],Ee=w.indexOf(Me);Ee>=0&&(w[Ee]=null,M[Ee].disconnect(Me))}for(let q=0;q<oe.added.length;q++){const Me=oe.added[q];let Ee=w.indexOf(Me);if(Ee===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=w.length){w.push(Me),Ee=Ze;break}else if(w[Ze]===null){w[Ze]=Me,Ee=Ze;break}if(Ee===-1)break}const H=M[Ee];H&&H.connect(Me)}}const j=new Y,ce=new Y;function pe(oe,q,Me){j.setFromMatrixPosition(q.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const Ee=j.distanceTo(ce),H=q.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,He=H[14]/(H[10]-1),Te=H[14]/(H[10]+1),Ge=(H[9]+1)/H[5],ht=(H[9]-1)/H[5],Be=(H[8]-1)/H[0],Je=(Ze[8]+1)/Ze[0],Ye=He*Be,Tt=He*Je,Ot=Ee/(-Be+Je),gt=Ot*-Be;q.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(gt),oe.translateZ(Ot),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const lt=He+Ot,Mt=Te+Ot,jt=Ye-gt,F=Tt+(Ee-gt),D=Ge*Te/Mt*lt,se=ht*Te/Mt*lt;oe.projectionMatrix.makePerspective(jt,F,D,se,lt,Mt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function X(oe,q){q===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(q.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;R.near=B.near=U.near=oe.near,R.far=B.far=U.far=oe.far,(N!==R.near||ae!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,ae=R.far);const q=oe.parent,Me=R.cameras;X(R,q);for(let Ee=0;Ee<Me.length;Ee++)X(Me[Ee],q);Me.length===2?pe(R,U,B):R.projectionMatrix.copy(U.projectionMatrix),J(oe,R,q)};function J(oe,q,Me){Me===null?oe.matrix.copy(q.matrixWorld):(oe.matrix.copy(Me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(q.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0);const Ee=oe.children;for(let H=0,Ze=Ee.length;H<Ze;H++)Ee[H].updateMatrixWorld(!0);oe.projectionMatrix.copy(q.projectionMatrix),oe.projectionMatrixInverse.copy(q.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Tu*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&_===null))return d},this.setFoveation=function(oe){d=oe,v!==null&&(v.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.getPlanes=function(){return L};let ne=null;function we(oe,q){if(p=q.getViewerPose(h||a),T=q,p!==null){const Me=p.views;_!==null&&(e.setRenderTargetFramebuffer(m,_.framebuffer),e.setRenderTarget(m));let Ee=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,Ee=!0);for(let H=0;H<Me.length;H++){const Ze=Me[H];let He=null;if(_!==null)He=_.getViewport(Ze);else{const Ge=y.getViewSubImage(v,Ze);He=Ge.viewport,H===0&&(e.setRenderTargetTextures(m,Ge.colorTexture,v.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(m))}let Te=z[H];Te===void 0&&(Te=new zn,Te.layers.enable(H),Te.viewport=new Dt,z[H]=Te),Te.matrix.fromArray(Ze.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ze.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(He.x,He.y,He.width,He.height),H===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ee===!0&&R.cameras.push(Te)}}for(let Me=0;Me<M.length;Me++){const Ee=w[Me],H=M[Me];Ee!==null&&H!==void 0&&H.update(Ee,q,h||a)}if(ne&&ne(oe,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let Me=null;for(const Ee of L)q.detectedPlanes.has(Ee)||(Me===null&&(Me=[]),Me.push(Ee));if(Me!==null)for(const Ee of Me)L.delete(Ee),P.delete(Ee),i.dispatchEvent({type:"planeremoved",data:Ee});for(const Ee of q.detectedPlanes)if(!L.has(Ee))L.add(Ee),P.set(Ee,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Ee});else{const H=P.get(Ee);Ee.lastChangedTime>H&&(P.set(Ee,Ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Ee}))}}T=null}const ve=new tx;ve.setAnimationLoop(we),this.setAnimationLoop=function(oe){ne=oe},this.dispose=function(){}}}function tP(t,e){function n(E,m){E.matrixAutoUpdate===!0&&E.updateMatrix(),m.value.copy(E.matrix)}function i(E,m){m.color.getRGB(E.fogColor.value,Q_(t)),m.isFog?(E.fogNear.value=m.near,E.fogFar.value=m.far):m.isFogExp2&&(E.fogDensity.value=m.density)}function r(E,m,M,w,L){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(E,m):m.isMeshToonMaterial?(o(E,m),y(E,m)):m.isMeshPhongMaterial?(o(E,m),p(E,m)):m.isMeshStandardMaterial?(o(E,m),v(E,m),m.isMeshPhysicalMaterial&&_(E,m,L)):m.isMeshMatcapMaterial?(o(E,m),T(E,m)):m.isMeshDepthMaterial?o(E,m):m.isMeshDistanceMaterial?(o(E,m),b(E,m)):m.isMeshNormalMaterial?o(E,m):m.isLineBasicMaterial?(a(E,m),m.isLineDashedMaterial&&l(E,m)):m.isPointsMaterial?d(E,m,M,w):m.isSpriteMaterial?h(E,m):m.isShadowMaterial?(E.color.value.copy(m.color),E.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(E,m){E.opacity.value=m.opacity,m.color&&E.diffuse.value.copy(m.color),m.emissive&&E.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(E.map.value=m.map,n(m.map,E.mapTransform)),m.alphaMap&&(E.alphaMap.value=m.alphaMap,n(m.alphaMap,E.alphaMapTransform)),m.bumpMap&&(E.bumpMap.value=m.bumpMap,n(m.bumpMap,E.bumpMapTransform),E.bumpScale.value=m.bumpScale,m.side===Un&&(E.bumpScale.value*=-1)),m.normalMap&&(E.normalMap.value=m.normalMap,n(m.normalMap,E.normalMapTransform),E.normalScale.value.copy(m.normalScale),m.side===Un&&E.normalScale.value.negate()),m.displacementMap&&(E.displacementMap.value=m.displacementMap,n(m.displacementMap,E.displacementMapTransform),E.displacementScale.value=m.displacementScale,E.displacementBias.value=m.displacementBias),m.emissiveMap&&(E.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,E.emissiveMapTransform)),m.specularMap&&(E.specularMap.value=m.specularMap,n(m.specularMap,E.specularMapTransform)),m.alphaTest>0&&(E.alphaTest.value=m.alphaTest);const M=e.get(m).envMap;if(M&&(E.envMap.value=M,E.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=m.reflectivity,E.ior.value=m.ior,E.refractionRatio.value=m.refractionRatio),m.lightMap){E.lightMap.value=m.lightMap;const w=t.useLegacyLights===!0?Math.PI:1;E.lightMapIntensity.value=m.lightMapIntensity*w,n(m.lightMap,E.lightMapTransform)}m.aoMap&&(E.aoMap.value=m.aoMap,E.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,E.aoMapTransform))}function a(E,m){E.diffuse.value.copy(m.color),E.opacity.value=m.opacity,m.map&&(E.map.value=m.map,n(m.map,E.mapTransform))}function l(E,m){E.dashSize.value=m.dashSize,E.totalSize.value=m.dashSize+m.gapSize,E.scale.value=m.scale}function d(E,m,M,w){E.diffuse.value.copy(m.color),E.opacity.value=m.opacity,E.size.value=m.size*M,E.scale.value=w*.5,m.map&&(E.map.value=m.map,n(m.map,E.uvTransform)),m.alphaMap&&(E.alphaMap.value=m.alphaMap),m.alphaTest>0&&(E.alphaTest.value=m.alphaTest)}function h(E,m){E.diffuse.value.copy(m.color),E.opacity.value=m.opacity,E.rotation.value=m.rotation,m.map&&(E.map.value=m.map,n(m.map,E.mapTransform)),m.alphaMap&&(E.alphaMap.value=m.alphaMap),m.alphaTest>0&&(E.alphaTest.value=m.alphaTest)}function p(E,m){E.specular.value.copy(m.specular),E.shininess.value=Math.max(m.shininess,1e-4)}function y(E,m){m.gradientMap&&(E.gradientMap.value=m.gradientMap)}function v(E,m){E.metalness.value=m.metalness,m.metalnessMap&&(E.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,E.metalnessMapTransform)),E.roughness.value=m.roughness,m.roughnessMap&&(E.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,E.roughnessMapTransform)),e.get(m).envMap&&(E.envMapIntensity.value=m.envMapIntensity)}function _(E,m,M){E.ior.value=m.ior,m.sheen>0&&(E.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),E.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(E.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,E.sheenColorMapTransform)),m.sheenRoughnessMap&&(E.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,E.sheenRoughnessMapTransform))),m.clearcoat>0&&(E.clearcoat.value=m.clearcoat,E.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(E.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,E.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(E.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&E.clearcoatNormalScale.value.negate())),m.iridescence>0&&(E.iridescence.value=m.iridescence,E.iridescenceIOR.value=m.iridescenceIOR,E.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(E.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,E.iridescenceMapTransform)),m.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),m.transmission>0&&(E.transmission.value=m.transmission,E.transmissionSamplerMap.value=M.texture,E.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(E.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,E.transmissionMapTransform)),E.thickness.value=m.thickness,m.thicknessMap&&(E.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=m.attenuationDistance,E.attenuationColor.value.copy(m.attenuationColor)),E.specularIntensity.value=m.specularIntensity,E.specularColor.value.copy(m.specularColor),m.specularColorMap&&(E.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,E.specularColorMapTransform)),m.specularIntensityMap&&(E.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,m){m.matcap&&(E.matcap.value=m.matcap)}function b(E,m){const M=e.get(m).light;E.referencePosition.value.setFromMatrixPosition(M.matrixWorld),E.nearDistance.value=M.shadow.camera.near,E.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nP(t,e,n,i){let r={},o={},a=[];const l=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(M,w){const L=w.program;i.uniformBlockBinding(M,L)}function h(M,w){let L=r[M.id];L===void 0&&(T(M),L=p(M),r[M.id]=L,M.addEventListener("dispose",E));const P=w.program;i.updateUBOMapping(M,P);const U=e.render.frame;o[M.id]!==U&&(v(M),o[M.id]=U)}function p(M){const w=y();M.__bindingPointIndex=w;const L=t.createBuffer(),P=M.__size,U=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,L),t.bufferData(t.UNIFORM_BUFFER,P,U),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,L),L}function y(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(M){const w=r[M.id],L=M.uniforms,P=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let U=0,B=L.length;U<B;U++){const z=L[U];if(_(z,U,P)===!0){const R=z.__offset,N=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let fe=0;fe<N.length;fe++){const $=N[fe],te=b($);typeof $=="number"?(z.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,R+ae,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=$.elements[0],z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=$.elements[0],z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=$.elements[0]):($.toArray(z.__data,ae),ae+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,z.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(M,w,L){const P=M.value;if(L[w]===void 0){if(typeof P=="number")L[w]=P;else{const U=Array.isArray(P)?P:[P],B=[];for(let z=0;z<U.length;z++)B.push(U[z].clone());L[w]=B}return!0}else if(typeof P=="number"){if(L[w]!==P)return L[w]=P,!0}else{const U=Array.isArray(L[w])?L[w]:[L[w]],B=Array.isArray(P)?P:[P];for(let z=0;z<U.length;z++){const R=U[z];if(R.equals(B[z])===!1)return R.copy(B[z]),!0}}return!1}function T(M){const w=M.uniforms;let L=0;const P=16;let U=0;for(let B=0,z=w.length;B<z;B++){const R=w[B],N={boundary:0,storage:0},ae=Array.isArray(R.value)?R.value:[R.value];for(let fe=0,$=ae.length;fe<$;fe++){const te=ae[fe],j=b(te);N.boundary+=j.boundary,N.storage+=j.storage}if(R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=L,B>0){U=L%P;const fe=P-U;U!==0&&fe-N.boundary<0&&(L+=P-U,R.__offset=L)}L+=N.storage}return U=L%P,U>0&&(L+=P-U),M.__size=L,M.__cache={},this}function b(M){const w={boundary:0,storage:0};return typeof M=="number"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function E(M){const w=M.target;w.removeEventListener("dispose",E);const L=a.indexOf(w.__bindingPointIndex);a.splice(L,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function m(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},o={}}return{bind:d,update:h,dispose:m}}function iP(){const t=gl("canvas");return t.style.display="block",t}class ax{constructor(e={}){const{canvas:n=iP(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=a;let _=null,T=null;const b=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=nt,this.useLegacyLights=!0,this.toneMapping=Hi,this.toneMappingExposure=1;const m=this;let M=!1,w=0,L=0,P=null,U=-1,B=null;const z=new Dt,R=new Dt;let N=null,ae=n.width,fe=n.height,$=1,te=null,j=null;const ce=new Dt(0,0,ae,fe),pe=new Dt(0,0,ae,fe);let X=!1;const J=new zp;let ne=!1,we=!1,ve=null;const oe=new Vt,q=new Y,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return P===null?$:1}let H=i;function Ze(O,Q){for(let re=0;re<O.length;re++){const K=O[re],de=n.getContext(K,Q);if(de!==null)return de}return null}try{const O={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ip}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",et,!1),H===null){const Q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&Q.shift(),H=Ze(Q,O),H===null)throw Ze(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let He,Te,Ge,ht,Be,Je,Ye,Tt,Ot,gt,lt,Mt,jt,F,D,se,me,xe,be,G,he,ie,Ae,Ie;function ze(){He=new gC(H),Te=new fC(H,He,e),He.init(Te),ie=new ZA(H,He,Te),Ge=new $A(H,He,Te),ht=new xC(H),Be=new FA,Je=new KA(H,He,Ge,Be,Te,ie,ht),Ye=new hC(m),Tt=new vC(m),Ot=new L1(H,Te),Ae=new cC(H,He,Ot,Te),gt=new yC(H,Ot,ht,Ae),lt=new wC(H,gt,Ot,ht),be=new EC(H,Te,Je),se=new dC(Be),Mt=new NA(m,Ye,Tt,He,Te,Ae,se),jt=new tP(m,Be),F=new zA,D=new jA(He,Te),xe=new lC(m,Ye,Tt,Ge,lt,v,d),me=new qA(m,lt,Te),Ie=new nP(H,ht,Te,Ge),G=new uC(H,He,ht,Te),he=new _C(H,He,ht,Te),ht.programs=Mt.programs,m.capabilities=Te,m.extensions=He,m.properties=Be,m.renderLists=F,m.shadowMap=me,m.state=Ge,m.info=ht}ze();const De=new eP(m,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const O=He.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=He.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(O){O!==void 0&&($=O,this.setSize(ae,fe,!1))},this.getSize=function(O){return O.set(ae,fe)},this.setSize=function(O,Q,re=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=O,fe=Q,n.width=Math.floor(O*$),n.height=Math.floor(Q*$),re===!0&&(n.style.width=O+"px",n.style.height=Q+"px"),this.setViewport(0,0,O,Q)},this.getDrawingBufferSize=function(O){return O.set(ae*$,fe*$).floor()},this.setDrawingBufferSize=function(O,Q,re){ae=O,fe=Q,$=re,n.width=Math.floor(O*re),n.height=Math.floor(Q*re),this.setViewport(0,0,O,Q)},this.getCurrentViewport=function(O){return O.copy(z)},this.getViewport=function(O){return O.copy(ce)},this.setViewport=function(O,Q,re,K){O.isVector4?ce.set(O.x,O.y,O.z,O.w):ce.set(O,Q,re,K),Ge.viewport(z.copy(ce).multiplyScalar($).floor())},this.getScissor=function(O){return O.copy(pe)},this.setScissor=function(O,Q,re,K){O.isVector4?pe.set(O.x,O.y,O.z,O.w):pe.set(O,Q,re,K),Ge.scissor(R.copy(pe).multiplyScalar($).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(O){Ge.setScissorTest(X=O)},this.setOpaqueSort=function(O){te=O},this.setTransparentSort=function(O){j=O},this.getClearColor=function(O){return O.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(O=!0,Q=!0,re=!0){let K=0;O&&(K|=H.COLOR_BUFFER_BIT),Q&&(K|=H.DEPTH_BUFFER_BIT),re&&(K|=H.STENCIL_BUFFER_BIT),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",et,!1),F.dispose(),D.dispose(),Be.dispose(),Ye.dispose(),Tt.dispose(),lt.dispose(),Ae.dispose(),Ie.dispose(),Mt.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ue),De.removeEventListener("sessionend",xt),ve&&(ve.dispose(),ve=null),pt.stop()};function Fe(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const O=ht.autoReset,Q=me.enabled,re=me.autoUpdate,K=me.needsUpdate,de=me.type;ze(),ht.autoReset=O,me.enabled=Q,me.autoUpdate=re,me.needsUpdate=K,me.type=de}function et(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function At(O){const Q=O.target;Q.removeEventListener("dispose",At),W(Q)}function W(O){le(O),Be.remove(O)}function le(O){const Q=Be.get(O).programs;Q!==void 0&&(Q.forEach(function(re){Mt.releaseProgram(re)}),O.isShaderMaterial&&Mt.releaseShaderCache(O))}this.renderBufferDirect=function(O,Q,re,K,de,Ve){Q===null&&(Q=Me);const We=de.isMesh&&de.matrixWorld.determinant()<0,je=$e(O,Q,re,K,de);Ge.setMaterial(K,We);let tt=re.index,ot=1;K.wireframe===!0&&(tt=gt.getWireframeAttribute(re),ot=2);const rt=re.drawRange,st=re.attributes.position;let mt=rt.start*ot,sn=(rt.start+rt.count)*ot;Ve!==null&&(mt=Math.max(mt,Ve.start*ot),sn=Math.min(sn,(Ve.start+Ve.count)*ot)),tt!==null?(mt=Math.max(mt,0),sn=Math.min(sn,tt.count)):st!=null&&(mt=Math.max(mt,0),sn=Math.min(sn,st.count));const Cn=sn-mt;if(Cn<0||Cn===1/0)return;Ae.setup(de,K,je,re,tt);let Ii,Bt=G;if(tt!==null&&(Ii=Ot.get(tt),Bt=he,Bt.setIndex(Ii)),de.isMesh)K.wireframe===!0?(Ge.setLineWidth(K.wireframeLinewidth*Ee()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(de.isLine){let ct=K.linewidth;ct===void 0&&(ct=1),Ge.setLineWidth(ct*Ee()),de.isLineSegments?Bt.setMode(H.LINES):de.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else de.isPoints?Bt.setMode(H.POINTS):de.isSprite&&Bt.setMode(H.TRIANGLES);if(de.isInstancedMesh)Bt.renderInstances(mt,Cn,de.count);else if(re.isInstancedBufferGeometry){const ct=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,gr=Math.min(re.instanceCount,ct);Bt.renderInstances(mt,Cn,gr)}else Bt.render(mt,Cn)},this.compile=function(O,Q){function re(K,de,Ve){K.transparent===!0&&K.side===Bi&&K.forceSinglePass===!1?(K.side=Un,K.needsUpdate=!0,Fo(K,de,Ve),K.side=Wr,K.needsUpdate=!0,Fo(K,de,Ve),K.side=Bi):Fo(K,de,Ve)}T=D.get(O),T.init(),E.push(T),O.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(m.useLegacyLights),O.traverse(function(K){const de=K.material;if(de)if(Array.isArray(de))for(let Ve=0;Ve<de.length;Ve++){const We=de[Ve];re(We,O,K)}else re(de,O,K)}),E.pop(),T=null};let ge=null;function Le(O){ge&&ge(O)}function Ue(){pt.stop()}function xt(){pt.start()}const pt=new tx;pt.setAnimationLoop(Le),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(O){ge=O,De.setAnimationLoop(O),O===null?pt.stop():pt.start()},De.addEventListener("sessionstart",Ue),De.addEventListener("sessionend",xt),this.render=function(O,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),O.isScene===!0&&O.onBeforeRender(m,O,Q,P),T=D.get(O,E.length),T.init(),E.push(T),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J.setFromProjectionMatrix(oe),we=this.localClippingEnabled,ne=se.init(this.clippingPlanes,we),_=F.get(O,b.length),_.init(),b.push(_),on(O,Q,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(te,j),ne===!0&&se.beginShadows();const re=T.state.shadowsArray;if(me.render(re,O,Q),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(_,O),T.setupLights(m.useLegacyLights),Q.isArrayCamera){const K=Q.cameras;for(let de=0,Ve=K.length;de<Ve;de++){const We=K[de];Xt(_,O,We,We.viewport)}}else Xt(_,O,Q);P!==null&&(Je.updateMultisampleRenderTarget(P),Je.updateRenderTargetMipmap(P)),O.isScene===!0&&O.onAfterRender(m,O,Q),Ae.resetDefaultState(),U=-1,B=null,E.pop(),E.length>0?T=E[E.length-1]:T=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function on(O,Q,re,K){if(O.visible===!1)return;if(O.layers.test(Q.layers)){if(O.isGroup)re=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Q);else if(O.isLight)T.pushLight(O),O.castShadow&&T.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||J.intersectsSprite(O)){K&&q.setFromMatrixPosition(O.matrixWorld).applyMatrix4(oe);const We=lt.update(O),je=O.material;je.visible&&_.push(O,We,je,re,q.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||J.intersectsObject(O))){O.isSkinnedMesh&&O.skeleton.frame!==ht.render.frame&&(O.skeleton.update(),O.skeleton.frame=ht.render.frame);const We=lt.update(O),je=O.material;if(K&&(We.boundingSphere===null&&We.computeBoundingSphere(),q.copy(We.boundingSphere.center).applyMatrix4(O.matrixWorld).applyMatrix4(oe)),Array.isArray(je)){const tt=We.groups;for(let ot=0,rt=tt.length;ot<rt;ot++){const st=tt[ot],mt=je[st.materialIndex];mt&&mt.visible&&_.push(O,We,mt,re,q.z,st)}}else je.visible&&_.push(O,We,je,re,q.z,null)}}const Ve=O.children;for(let We=0,je=Ve.length;We<je;We++)on(Ve[We],Q,re,K)}function Xt(O,Q,re,K){const de=O.opaque,Ve=O.transmissive,We=O.transparent;T.setupLightsView(re),ne===!0&&se.setGlobalState(m.clippingPlanes,re),Ve.length>0&&yt(de,Ve,Q,re),K&&Ge.viewport(z.copy(K)),de.length>0&&Yt(de,Q,re),Ve.length>0&&Yt(Ve,Q,re),We.length>0&&Yt(We,Q,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function yt(O,Q,re,K){if(ve===null){const je=Te.isWebGL2;ve=new en(1024,1024,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?vl:Lo,minFilter:ml,samples:je&&l===!0?4:0})}const de=m.getRenderTarget();m.setRenderTarget(ve),m.clear();const Ve=m.toneMapping;m.toneMapping=Hi,Yt(O,re,K),Je.updateMultisampleRenderTarget(ve),Je.updateRenderTargetMipmap(ve);let We=!1;for(let je=0,tt=Q.length;je<tt;je++){const ot=Q[je],rt=ot.object,st=ot.geometry,mt=ot.material,sn=ot.group;if(mt.side===Bi&&rt.layers.test(K.layers)){const Cn=mt.side;mt.side=Un,mt.needsUpdate=!0,Xn(rt,re,K,st,mt,sn),mt.side=Cn,mt.needsUpdate=!0,We=!0}}We===!0&&(Je.updateMultisampleRenderTarget(ve),Je.updateRenderTargetMipmap(ve)),m.setRenderTarget(de),m.toneMapping=Ve}function Yt(O,Q,re){const K=Q.isScene===!0?Q.overrideMaterial:null;for(let de=0,Ve=O.length;de<Ve;de++){const We=O[de],je=We.object,tt=We.geometry,ot=K===null?We.material:K,rt=We.group;je.layers.test(re.layers)&&Xn(je,Q,re,tt,ot,rt)}}function Xn(O,Q,re,K,de,Ve){O.onBeforeRender(m,Q,re,K,de,Ve),O.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),de.onBeforeRender(m,Q,re,K,O,Ve),de.transparent===!0&&de.side===Bi&&de.forceSinglePass===!1?(de.side=Un,de.needsUpdate=!0,m.renderBufferDirect(re,Q,K,de,O,Ve),de.side=Wr,de.needsUpdate=!0,m.renderBufferDirect(re,Q,K,de,O,Ve),de.side=Bi):m.renderBufferDirect(re,Q,K,de,O,Ve),O.onAfterRender(m,Q,re,K,de,Ve)}function Fo(O,Q,re){Q.isScene!==!0&&(Q=Me);const K=Be.get(O),de=T.state.lights,Ve=T.state.shadowsArray,We=de.state.version,je=Mt.getParameters(O,de.state,Ve,Q,re),tt=Mt.getProgramCacheKey(je);let ot=K.programs;K.environment=O.isMeshStandardMaterial?Q.environment:null,K.fog=Q.fog,K.envMap=(O.isMeshStandardMaterial?Tt:Ye).get(O.envMap||K.environment),ot===void 0&&(O.addEventListener("dispose",At),ot=new Map,K.programs=ot);let rt=ot.get(tt);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===We)return ni(O,je),rt}else je.uniforms=Mt.getUniforms(O),O.onBuild(re,je,m),O.onBeforeCompile(je,m),rt=Mt.acquireProgram(je,tt),ot.set(tt,rt),K.uniforms=je.uniforms;const st=K.uniforms;(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(st.clippingPlanes=se.uniform),ni(O,je),K.needsLights=$r(O),K.lightsStateVersion=We,K.needsLights&&(st.ambientLightColor.value=de.state.ambient,st.lightProbe.value=de.state.probe,st.directionalLights.value=de.state.directional,st.directionalLightShadows.value=de.state.directionalShadow,st.spotLights.value=de.state.spot,st.spotLightShadows.value=de.state.spotShadow,st.rectAreaLights.value=de.state.rectArea,st.ltc_1.value=de.state.rectAreaLTC1,st.ltc_2.value=de.state.rectAreaLTC2,st.pointLights.value=de.state.point,st.pointLightShadows.value=de.state.pointShadow,st.hemisphereLights.value=de.state.hemi,st.directionalShadowMap.value=de.state.directionalShadowMap,st.directionalShadowMatrix.value=de.state.directionalShadowMatrix,st.spotShadowMap.value=de.state.spotShadowMap,st.spotLightMatrix.value=de.state.spotLightMatrix,st.spotLightMap.value=de.state.spotLightMap,st.pointShadowMap.value=de.state.pointShadowMap,st.pointShadowMatrix.value=de.state.pointShadowMatrix);const mt=rt.getUniforms(),sn=Jc.seqWithValue(mt.seq,st);return K.currentProgram=rt,K.uniformsList=sn,rt}function ni(O,Q){const re=Be.get(O);re.outputColorSpace=Q.outputColorSpace,re.instancing=Q.instancing,re.skinning=Q.skinning,re.morphTargets=Q.morphTargets,re.morphNormals=Q.morphNormals,re.morphColors=Q.morphColors,re.morphTargetsCount=Q.morphTargetsCount,re.numClippingPlanes=Q.numClippingPlanes,re.numIntersection=Q.numClipIntersection,re.vertexAlphas=Q.vertexAlphas,re.vertexTangents=Q.vertexTangents,re.toneMapping=Q.toneMapping}function $e(O,Q,re,K,de){Q.isScene!==!0&&(Q=Me),Je.resetTextureUnits();const Ve=Q.fog,We=K.isMeshStandardMaterial?Q.environment:null,je=P===null?m.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Wi,tt=(K.isMeshStandardMaterial?Tt:Ye).get(K.envMap||We),ot=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!K.normalMap&&!!re.attributes.tangent,st=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,sn=!!re.morphAttributes.color,Cn=K.toneMapped?m.toneMapping:Hi,Ii=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bt=Ii!==void 0?Ii.length:0,ct=Be.get(K),gr=T.state.lights;if(ne===!0&&(we===!0||O!==B)){const An=O===B&&K.id===U;se.setState(K,O,An)}let qt=!1;K.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==gr.state.version||ct.outputColorSpace!==je||de.isInstancedMesh&&ct.instancing===!1||!de.isInstancedMesh&&ct.instancing===!0||de.isSkinnedMesh&&ct.skinning===!1||!de.isSkinnedMesh&&ct.skinning===!0||ct.envMap!==tt||K.fog===!0&&ct.fog!==Ve||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==se.numPlanes||ct.numIntersection!==se.numIntersection)||ct.vertexAlphas!==ot||ct.vertexTangents!==rt||ct.morphTargets!==st||ct.morphNormals!==mt||ct.morphColors!==sn||ct.toneMapping!==Cn||Te.isWebGL2===!0&&ct.morphTargetsCount!==Bt)&&(qt=!0):(qt=!0,ct.__version=K.version);let ii=ct.currentProgram;qt===!0&&(ii=Fo(K,Q,de));let zo=!1,Kr=!1,ia=!1;const Ht=ii.getUniforms(),Xi=ct.uniforms;if(Ge.useProgram(ii.program)&&(zo=!0,Kr=!0,ia=!0),K.id!==U&&(U=K.id,Kr=!0),zo||B!==O){if(Ht.setValue(H,"projectionMatrix",O.projectionMatrix),Te.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),B!==O&&(B=O,Kr=!0,ia=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const An=Ht.map.cameraPosition;An!==void 0&&An.setValue(H,q.setFromMatrixPosition(O.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",O.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||de.isSkinnedMesh)&&Ht.setValue(H,"viewMatrix",O.matrixWorldInverse)}if(de.isSkinnedMesh){Ht.setOptional(H,de,"bindMatrix"),Ht.setOptional(H,de,"bindMatrixInverse");const An=de.skeleton;An&&(Te.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Ht.setValue(H,"boneTexture",An.boneTexture,Je),Ht.setValue(H,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vi=re.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0&&Te.isWebGL2===!0)&&be.update(de,re,ii),(Kr||ct.receiveShadow!==de.receiveShadow)&&(ct.receiveShadow=de.receiveShadow,Ht.setValue(H,"receiveShadow",de.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Xi.envMap.value=tt,Xi.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),Kr&&(Ht.setValue(H,"toneMappingExposure",m.toneMappingExposure),ct.needsLights&&ko(Xi,ia),Ve&&K.fog===!0&&jt.refreshFogUniforms(Xi,Ve),jt.refreshMaterialUniforms(Xi,K,$,fe,ve),Jc.upload(H,ct.uniformsList,Xi,Je)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Jc.upload(H,ct.uniformsList,Xi,Je),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(H,"center",de.center),Ht.setValue(H,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(H,"normalMatrix",de.normalMatrix),Ht.setValue(H,"modelMatrix",de.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const An=K.uniformsGroups;for(let ra=0,Rl=An.length;ra<Rl;ra++)if(Te.isWebGL2){const Dl=An[ra];Ie.update(Dl,ii),Ie.bind(Dl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function ko(O,Q){O.ambientLightColor.needsUpdate=Q,O.lightProbe.needsUpdate=Q,O.directionalLights.needsUpdate=Q,O.directionalLightShadows.needsUpdate=Q,O.pointLights.needsUpdate=Q,O.pointLightShadows.needsUpdate=Q,O.spotLights.needsUpdate=Q,O.spotLightShadows.needsUpdate=Q,O.rectAreaLights.needsUpdate=Q,O.hemisphereLights.needsUpdate=Q}function $r(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(O,Q,re){Be.get(O.texture).__webglTexture=Q,Be.get(O.depthTexture).__webglTexture=re;const K=Be.get(O);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=re===void 0,K.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,Q){const re=Be.get(O);re.__webglFramebuffer=Q,re.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(O,Q=0,re=0){P=O,w=Q,L=re;let K=!0,de=null,Ve=!1,We=!1;if(O){const tt=Be.get(O);tt.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(H.FRAMEBUFFER,null),K=!1):tt.__webglFramebuffer===void 0?Je.setupRenderTarget(O):tt.__hasExternalTextures&&Je.rebindTextures(O,Be.get(O.texture).__webglTexture,Be.get(O.depthTexture).__webglTexture);const ot=O.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(We=!0);const rt=Be.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(de=rt[Q],Ve=!0):Te.isWebGL2&&O.samples>0&&Je.useMultisampledRTT(O)===!1?de=Be.get(O).__webglMultisampledFramebuffer:de=rt,z.copy(O.viewport),R.copy(O.scissor),N=O.scissorTest}else z.copy(ce).multiplyScalar($).floor(),R.copy(pe).multiplyScalar($).floor(),N=X;if(Ge.bindFramebuffer(H.FRAMEBUFFER,de)&&Te.drawBuffers&&K&&Ge.drawBuffers(O,de),Ge.viewport(z),Ge.scissor(R),Ge.setScissorTest(N),Ve){const tt=Be.get(O.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt.__webglTexture,re)}else if(We){const tt=Be.get(O.texture),ot=Q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.__webglTexture,re||0,ot)}U=-1},this.readRenderTargetPixels=function(O,Q,re,K,de,Ve,We){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Be.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){Ge.bindFramebuffer(H.FRAMEBUFFER,je);try{const tt=O.texture,ot=tt.format,rt=tt.type;if(ot!==Ai&&ie.convert(ot)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=rt===vl&&(He.has("EXT_color_buffer_half_float")||Te.isWebGL2&&He.has("EXT_color_buffer_float"));if(rt!==Lo&&ie.convert(rt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===_o&&(Te.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=O.width-K&&re>=0&&re<=O.height-de&&H.readPixels(Q,re,K,de,ie.convert(ot),ie.convert(rt),Ve)}finally{const tt=P!==null?Be.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(O,Q,re=0){const K=Math.pow(2,-re),de=Math.floor(Q.image.width*K),Ve=Math.floor(Q.image.height*K);Je.setTexture2D(Q,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,O.x,O.y,de,Ve),Ge.unbindTexture()},this.copyTextureToTexture=function(O,Q,re,K=0){const de=Q.image.width,Ve=Q.image.height,We=ie.convert(re.format),je=ie.convert(re.type);Je.setTexture2D(re,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,re.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,re.unpackAlignment),Q.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,O.x,O.y,de,Ve,We,je,Q.image.data):Q.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,O.x,O.y,Q.mipmaps[0].width,Q.mipmaps[0].height,We,Q.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,K,O.x,O.y,We,je,Q.image),K===0&&re.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(O,Q,re,K,de=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=O.max.x-O.min.x+1,We=O.max.y-O.min.y+1,je=O.max.z-O.min.z+1,tt=ie.convert(K.format),ot=ie.convert(K.type);let rt;if(K.isData3DTexture)Je.setTexture3D(K,0),rt=H.TEXTURE_3D;else if(K.isDataArrayTexture)Je.setTexture2DArray(K,0),rt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const st=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),sn=H.getParameter(H.UNPACK_SKIP_PIXELS),Cn=H.getParameter(H.UNPACK_SKIP_ROWS),Ii=H.getParameter(H.UNPACK_SKIP_IMAGES),Bt=re.isCompressedTexture?re.mipmaps[0]:re.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,O.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,O.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,O.min.z),re.isDataTexture||re.isData3DTexture?H.texSubImage3D(rt,de,Q.x,Q.y,Q.z,Ve,We,je,tt,ot,Bt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(rt,de,Q.x,Q.y,Q.z,Ve,We,je,tt,Bt.data)):H.texSubImage3D(rt,de,Q.x,Q.y,Q.z,Ve,We,je,tt,ot,Bt),H.pixelStorei(H.UNPACK_ROW_LENGTH,st),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,sn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ii),de===0&&K.generateMipmaps&&H.generateMipmap(rt),Ge.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?Je.setTextureCube(O,0):O.isData3DTexture?Je.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Je.setTexture2DArray(O,0):Je.setTexture2D(O,0),Ge.unbindTexture()},this.resetState=function(){w=0,L=0,P=null,Ge.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?Eo:V_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Eo?nt:Wi}}class rP extends ax{}rP.prototype.isWebGL1Renderer=!0;class lx extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class fi extends Di{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Gp extends mi{constructor(e=1,n=1,i=1,r=32,o=1,a=!1,l=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:d};const h=this;r=Math.floor(r),o=Math.floor(o);const p=[],y=[],v=[],_=[];let T=0;const b=[],E=i/2;let m=0;M(),a===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(p),this.setAttribute("position",new dn(y,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(_,2));function M(){const L=new Y,P=new Y;let U=0;const B=(n-e)/i;for(let z=0;z<=o;z++){const R=[],N=z/o,ae=N*(n-e)+e;for(let fe=0;fe<=r;fe++){const $=fe/r,te=$*d+l,j=Math.sin(te),ce=Math.cos(te);P.x=ae*j,P.y=-N*i+E,P.z=ae*ce,y.push(P.x,P.y,P.z),L.set(j,B,ce).normalize(),v.push(L.x,L.y,L.z),_.push($,1-N),R.push(T++)}b.push(R)}for(let z=0;z<r;z++)for(let R=0;R<o;R++){const N=b[R][z],ae=b[R+1][z],fe=b[R+1][z+1],$=b[R][z+1];p.push(N,ae,$),p.push(ae,fe,$),U+=6}h.addGroup(m,U,0),m+=U}function w(L){const P=T,U=new Ne,B=new Y;let z=0;const R=L===!0?e:n,N=L===!0?1:-1;for(let fe=1;fe<=r;fe++)y.push(0,E*N,0),v.push(0,N,0),_.push(.5,.5),T++;const ae=T;for(let fe=0;fe<=r;fe++){const te=fe/r*d+l,j=Math.cos(te),ce=Math.sin(te);B.x=R*ce,B.y=E*N,B.z=R*j,y.push(B.x,B.y,B.z),v.push(0,N,0),U.x=j*.5+.5,U.y=ce*.5*N+.5,_.push(U.x,U.y),T++}for(let fe=0;fe<r;fe++){const $=P+fe,te=ae+fe;L===!0?p.push(te,te+1,$):p.push(te+1,te,$),z+=3}h.addGroup(m,z,L===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $u extends mi{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const d=Math.min(a+l,Math.PI);let h=0;const p=[],y=new Y,v=new Y,_=[],T=[],b=[],E=[];for(let m=0;m<=i;m++){const M=[],w=m/i;let L=0;m===0&&a===0?L=.5/n:m===i&&d===Math.PI&&(L=-.5/n);for(let P=0;P<=n;P++){const U=P/n;y.x=-e*Math.cos(r+U*o)*Math.sin(a+w*l),y.y=e*Math.cos(a+w*l),y.z=e*Math.sin(r+U*o)*Math.sin(a+w*l),T.push(y.x,y.y,y.z),v.copy(y).normalize(),b.push(v.x,v.y,v.z),E.push(U+L,1-w),M.push(h++)}p.push(M)}for(let m=0;m<i;m++)for(let M=0;M<n;M++){const w=p[m][M+1],L=p[m][M],P=p[m+1][M],U=p[m+1][M+1];(m!==0||a>0)&&_.push(w,L,U),(m!==i-1||d<Math.PI)&&_.push(L,P,U)}this.setIndex(_),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(b,3)),this.setAttribute("uv",new dn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oP extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class s0 extends oP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ts extends vr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sP extends vr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class cx extends vr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class aP extends vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const a0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class lP{constructor(e,n,i){const r=this;let o=!1,a=0,l=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(p){l++,o===!1&&r.onStart!==void 0&&r.onStart(p,a,l),o=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,y){return h.push(p,y),this},this.removeHandler=function(p){const y=h.indexOf(p);return y!==-1&&h.splice(y,2),this},this.getHandler=function(p){for(let y=0,v=h.length;y<v;y+=2){const _=h[y],T=h[y+1];if(_.global&&(_.lastIndex=0),_.test(p))return T}return null}}}const cP=new lP;class ux{constructor(e){this.manager=e!==void 0?e:cP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class uP extends ux{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=a0.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(a),o.manager.itemEnd(e)},0),a;const l=gl("img");function d(){p(),a0.add(e,this),n&&n(this),o.manager.itemEnd(e)}function h(y){p(),r&&r(y),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){l.removeEventListener("load",d,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",d,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class fP extends ux{constructor(e){super(e)}load(e,n,i,r){const o=new jn,a=new uP(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class Pl extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class dP extends Pl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Pd=new Vt,l0=new Y,c0=new Y;class Vp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),n.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(c0),n.updateMatrixWorld(),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hP extends Vp{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Tu*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rd extends Pl{constructor(e,n,i=0,r=Math.PI/3,o=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new hP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const u0=new Vt,La=new Y,Dd=new Y;class pP extends Vp{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),La.setFromMatrixPosition(e.matrixWorld),i.position.copy(La),Dd.copy(i.position),Dd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Dd),i.updateMatrixWorld(),r.makeTranslation(-La.x,-La.y,-La.z),u0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(u0)}}class ao extends Pl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mP extends Vp{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vP extends Pl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new mP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fs extends Pl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp extends mi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=f0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=f0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function f0(){return(typeof performance>"u"?Date:performance).now()}class d0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);const h0=t=>new Array(t).fill().map((e,n)=>new Array(t).fill().map((i,r)=>n===r?1:0)),yP=t=>t.map((e,n)=>e.map((i,r)=>t[r][n])),Ld=(t,e)=>t.map((n,i)=>n.map((r,o)=>n.reduce((a,l,d)=>a+t[i][d]*e[d][o],0))),_P=t=>t.every((e,n)=>e.every((i,r)=>n===r||t[n][r]===0)),xP=t=>{const e=t[0].length;let n=t.map(o=>o.slice()),i=h0(e),r=1e3;for(;!_P(n)&&r-- >0;){let o=0,a=1;for(let h=0;h<e;h++)for(let p=0;p<e;p++)h!==p&&qa(n[h][p])>qa(n[o][a])&&(o=h,a=p);const l=n[o][o]===n[a][a]?mx(n[o][a])*qs/4:.5*PP(2*n[o][a]/(n[o][o]-n[a][a])),d=h0(e);d[a][a]=d[o][o]=Wp(l),d[a][o]=d[o][a]=-px(l),d[a][o]*=-1,i=Ld(i,d),n=Ld(Ld(yP(d),n),d)}return{vectors:i,values:n.map((o,a)=>qa(o[a])<1e-8?0:o[a])}},SP=(t,e)=>t.map((n,i)=>n.map((r,o)=>-Wp(e[i][o]*qs/r))),fx=t=>{const e=xP(t).values;if(e.every(i=>i>0))return"finite";if(e.every(i=>i>=0))return"affine";const n=[];for(let i=0;i<e.length;i++)n.push(fx(t.filter((r,o)=>o!==i).map(r=>r.filter((o,a)=>a!==i))));return n.every(i=>i==="finite")?"hyperbolic-compact":n.every(i=>i==="finite"||i==="affine")?"hyperbolic-paracompact":"indefinite"},dx=(t,e,n)=>{let i=0;for(let r=0;r<t.length;r++)i+=t[r]*e[r]*(r===t.length-1&&n||1);return i},MP=(t,e)=>{if(t=t.slice(),e===0){for(let i=0;i<t.length;i++)t[i]/=t[t.length-1];return t}const n=(e===-1&&mx(t[t.length-1])||1)/Ku(qa(dx(t,t,e)));for(let i=0;i<t.length;i++)t[i]*=n;return t},EP=(t,e)=>{const[n,i]=t,r=Wp(e),o=px(e);t[0]=n*r-i*o,t[1]=n*o+i*r},wP=(t,e,n)=>{if(n!==0){const i=e/Ku(dx(t,t,1)),r=new Array(t.length-1);for(let o=0;o<t.length-1;o++)r[o]=t[o]*i;hx(t,r,n)}else for(let i=0;i<t.length;i++)t[i]*=1-e},TP=(t,e,n)=>{const i=t.length,r=n;for(let o=0;o<i-1;o++){const a=e[o];if(a!==0){const l=Ku(1-r*a*a),d=a;let h=t[o],p=t[i-1];t[o]=l*h+-r*d*p,t[i-1]=d*h+l*p}}},hx=(t,e,n)=>{if(n===0)for(let i=0;i<e.length;i++)t[i]+=e[i];else TP(t,e,n)},bP=(t,e)=>{const n=t[0].length,i=new Array(n).fill().map(()=>new Array(n).fill(0));i[0][0]=1;for(let r=1;r<n;r++){for(let o=0;o<r;o++){let a=0;for(let l=0;l<o;l++)a+=i[r][l]*i[o][l];i[r][o]=(t[r][o]-a)/i[o][o]}i[r][r]=Ku(qa(1-i[r].slice(0,r).reduce((o,a)=>o+a*a,0)))}return i[i.length-1][i.length-1]=e?i[i.length-1][i.length-1]*e:1,i},CP=(t,e,n)=>{const i=t.length,r=new Array(i);for(let o=0;o<i;o++){let a=0;for(let l=0;l<o;l++)a+=e[o][l]*r[l];r[o]=((isNaN(t[o])?1:+t[o])-a)/e[o][o]}return r[r.length-1]*=n||1,MP(r,n)},{abs:qa,cos:Wp,sin:px,tan:AP,cosh:kR,sinh:zR,acos:BR,acosh:GR,atan:PP,min:RP,max:DP,round:VR,sqrt:Ku,sign:mx,ceil:HR,floor:LP,log:WR,exp:jR,PI:qs}=Math,IP=t=>String.fromCharCode(97+t),UP=t=>t.charCodeAt(0)-97,vx=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],OP=["","knuthbendix","toddcoxeter"],Mi=new Ke,jp=new fP,na=jp.load("Carbon.png");na.colorSpace=nt;na.wrapS=Do;na.wrapT=Do;na.repeat.x=10;na.repeat.y=10;const Xp=jp.load("Carbon_Normal.png");Xp.wrapS=Do;Xp.wrapT=Do;const $a=jp.load("ocean.jpg");$a.colorSpace=nt;$a.mapping=wu;[...new Array(10).keys()].map(t=>new RegExp(IP(t),"g"));const ji={neon:{background:0,fx:["bloom"],shadow:!1,material:new To,lights:[],color:({word:t})=>Mi.setHSL(t.length*.17%1,.5,.5)},colorful:{background:16777215,shadow:!1,material:new Ts,lights:[new fs(16777215,.25)],cameraLights:[new ao(16777215,.75)],color:({word:t},e,n)=>Mi.setHSL(t.length*.03%1,1,.8)},reflection:{background:16777215,shadow:!1,material:new sP,lights:[new fs(16777215,.25)],cameraLights:[new ao(16777215,.75)],color:({word:t},e,n)=>{const i=t.length?UP(t[t.length-1])/n:0;return Mi.setHSL(i%1,1,.8)}},projection:{background:16777215,ground:"sphere",shadow:!0,material:new Ts({transparent:!0,opacity:.75,blending:pl}),lights:[new ao],color:({word:t})=>Mi.setHSL(t.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new Ts,lights:[new fs(13421772,.4)],cameraLights:[new ao(16777215,1)],color:()=>Mi.set(16776960)},pure:{background:0,fx:["sao"],shadow:!1,material:new aP,lights:[new fs(0,.5)],cameraLights:[new ao(16777215,1)],color:({word:t})=>Mi.setHSL(t.length*.03%1,.75,.7)},glass:{extended:!0,background:$a,env:$a,shadow:!1,material:new s0({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new vP,new dP],color:()=>Mi.set(15658734)},museum:{extended:!0,background:12303291,env:$a,shadow:!0,ground:"plane",material:new s0({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:na,normalMap:Xp}),lights:[(()=>{const t=new Rd(16777215,.2);return t.position.set(0,4,-6),t})(),(()=>{const t=new Rd(16777215,.2);return t.position.set(8,7,0),t})(),(()=>{const t=new Rd(16777215,.2);return t.position.set(-4,6,2),t})(),new fs(16777215,.4)],cameraLights:[(()=>{const t=new ao(16777215,2.5,5,5);return t.shadow=null,t})()],color:()=>Mi.set(16777215)},bokeh:{extended:!0,background:16777215,fx:["bokeh"],shadow:!1,material:new Ts,lights:[new fs(16777215,.5)],cameraLights:[new ao(16777215,1)],color:({word:t})=>Mi.setHSL(t.length*.17%1,.7,.5)},transcendent:{extended:!0,background:16777215,fx:["godray"],shadow:!1,material:new To,color:()=>Mi.set(0)},wireframe:{extended:!0,background:0,shadow:!1,material:new To({wireframe:!0}),lights:[],color:({word:t})=>Mi.setHSL(t.length*.17%1,.5,.5)}};Object.values(ji).forEach(t=>{t.vertexMaterial||(t.vertexMaterial=t.material),t.edgeMaterial||(t.edgeMaterial=t.material),t.faceMaterial||(t.faceMaterial=t.material.clone(),t.faceMaterial.side=Bi,t.faceMaterial.transparent=!0,t.faceMaterial.opacity=.5,t.faceMaterial.blending=pl,t.faceMaterial.blendEquation=sr,t.faceMaterial.blendSrc=Op,t.faceMaterial.blendDst=Np,t.faceMaterial.depthWrite=!1)});const bu={dimensions:4,coxeter:[[1,5,2,2],[5,1,3,2],[2,3,1,4],[2,2,4,1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],mirrors:[1,0,0,0],extended:!1,order:10,curve:!0,segments:32,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!1,grouper:"",projection:"stereographic",controls:"orbit",controlsShift:0,ambiance:"neon",fov3:90,fov4:90,msaa:window.devicePixelRatio<=1,msaaSamples:8},gx=t=>{const e={...t};return Object.entries(e).forEach(([n,i])=>{typeof bu[n]=="number"?(i===""||isNaN(i))&&delete e[n]:Array.isArray(bu[n])&&(Array.isArray(i[0])?i.find(r=>r.find(o=>i===""||isNaN(o)))&&delete e[n]:i.find(r=>i===""||isNaN(r)&&!(n==="mirrors"&&"sh".includes(r)))&&delete e[n])}),e};function NP(){return new Worker(""+new URL("knuthbendix-tiling.worker-05f8ec51.js",import.meta.url).href)}function FP(){return new Worker(""+new URL("toddcoxeter-tiling.worker-169faedb.js",import.meta.url).href)}let p0=class yx{constructor(e,n){this.workerClass=n,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=yx.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((n,i)=>{const r=a=>{if(a.data.uuid!==e.uuid)return;const l=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${l}ms`),this.processing--,this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),a.data.error){i(a.data.error);return}n(a.data)},o=a=>{this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=DP(0,this.processing),console.error(`Can't call web worker ${this.name}`,a))};this.worker.addEventListener("message",r),this.worker.addEventListener("error",o)})}};const kP=()=>Object.values(_x).filter(t=>t.processing>0).forEach(t=>t.kill()),_x={knuthbendix:new p0("knuthbendix",NP),toddcoxeter:new p0("toddcoxeter",FP)},zP=async(t,e)=>{const n=_x[t.grouper.replace(/^auto-/,"")];e(i=>({...i,processing:!0,error:null})),t.askedOrder===0&&kP();try{const{vertices:i,edges:r,faces:o}=await n.process({order:t.askedOrder,coxeter:t.coxeter,curvature:t.curvature,stellation:t.stellation,mirrors:t.mirrors,mirrorsPlanes:t.mirrorsPlanes,rootVertex:t.rootVertex,dimensions:t.dimensions});e(a=>a.processing?{...a,ranges:[...a.ranges,{vertices:[a.vertices.length,a.vertices.length+i.length],edges:[a.edges.length,a.edges.length+r.length],faces:[a.faces.length,a.faces.length+o.length]}],vertices:a.vertices.concat(i),edges:a.edges.concat(r),faces:a.faces.concat(o),currentOrder:a.askedOrder+1,processing:!1,error:null}:a)}catch(i){console.warn(i),e(r=>({...r,currentOrder:r.order,error:i.message,processing:!1}))}},BP=(t,e)=>{Qe.useEffect(()=>{e(n=>n.order<n.currentOrder?{...n,currentOrder:n.order}:n)},[t.order,t.currentOrder,e]),Qe.useEffect(()=>{e(n=>{const i=SP(n.coxeter,n.stellation),r=fx(i);if(!r)return{...n,spaceType:r};const o=r==="finite"?1:r==="affine"?0:-1,a=bP(i,o),l=CP(n.mirrors,a,o),d=n.grouper===""||n.grouper.startsWith("auto-")?o>0&&!n.stellation.some(h=>h.some(p=>p>1))?"auto-toddcoxeter":"auto-knuthbendix":n.grouper;return{...n,currentOrder:0,grouper:d,vertices:[],edges:[],faces:[],ranges:[],spaceType:r,curvature:o,mirrorsPlanes:a,rootVertex:l,renderError:null}})},[t.dimensions,t.coxeter,t.mirrors,t.stellation,t.grouper,e]),Qe.useEffect(()=>{e(n=>{var i;return n.order<=n.currentOrder?{...n,askedOrder:null}:n.currentOrder<0?n:(i=n.ranges)!=null&&i[n.order]?{...n,currentOrder:n.order,askedOrder:null}:{...n,askedOrder:n.currentOrder}})},[e,t.order,t.currentOrder]),Qe.useEffect(()=>{t.askedOrder!==null&&zP(t,e)},[t.askedOrder,e]),Qe.useEffect(()=>{e(n=>n.vertices.length>n.maxVertices?{...n,maxVertices:n.vertices.length}:n)},[t.vertices,e]),Qe.useEffect(()=>{e(n=>n.edges.length>n.maxEdges?{...n,maxEdges:n.edges.length}:n)},[t.edges,e]),Qe.useEffect(()=>{e(n=>{let i=0;for(let r=0;r<n.faces.length;r++){const o=n.faces[r].vertices.length;i+=o===3?1:o}return i>n.maxFaces?{...n,maxFaces:i}:n})},[t.faces,e])};class GP extends Qe.Component{componentDidCatch(e,n){this.props.onError(e,n)}render(){return this.props.error?null:this.props.children}}var xx={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default=function(s){return!(!s||!s.Window)&&s instanceof s.Window};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.getWindow=function(s){return(0,n.default)(s)?s:(s.ownerDocument||s).defaultView||o.window},i.init=a,i.window=i.realWindow=void 0;var r=void 0;i.realWindow=r;var o=void 0;function a(s){i.realWindow=r=s;var c=s.document.createTextNode("");c.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(c)===c&&(s=s.wrap(s)),i.window=o=s}i.window=o,typeof window<"u"&&window&&a(window);var l={};function d(s){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d(s)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var h=function(s){return!!s&&d(s)==="object"},p=function(s){return typeof s=="function"},y={window:function(s){return s===i.window||(0,n.default)(s)},docFrag:function(s){return h(s)&&s.nodeType===11},object:h,func:p,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||d(s)!=="object")return!1;var c=i.getWindow(s)||i.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?s instanceof Element||s instanceof c.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return h(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return h(s)&&s.length!==void 0&&p(s.splice)}};l.default=y;var v={};function _(s){var c=s.interaction;if(c.prepared.name==="drag"){var u=c.prepared.axis;u==="x"?(c.coords.cur.page.y=c.coords.start.page.y,c.coords.cur.client.y=c.coords.start.client.y,c.coords.velocity.client.y=0,c.coords.velocity.page.y=0):u==="y"&&(c.coords.cur.page.x=c.coords.start.page.x,c.coords.cur.client.x=c.coords.start.client.x,c.coords.velocity.client.x=0,c.coords.velocity.page.x=0)}}function T(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="drag"){var f=u.prepared.axis;if(f==="x"||f==="y"){var g=f==="x"?"y":"x";c.page[g]=u.coords.start.page[g],c.client[g]=u.coords.start.client[g],c.delta[g]=0}}}Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var b={id:"actions/drag",install:function(s){var c=s.actions,u=s.Interactable,f=s.defaults;u.prototype.draggable=b.draggable,c.map.drag=b,c.methodDict.drag="draggable",f.actions.drag=b.defaults},listeners:{"interactions:before-action-move":_,"interactions:action-resume":_,"interactions:action-move":T,"auto-start:check":function(s){var c=s.interaction,u=s.interactable,f=s.buttons,g=u.options.drag;if(g&&g.enabled&&(!c.pointerIsDown||!/mouse|pointer/.test(c.pointerType)||f&u.options.drag.mouseButtons))return s.action={name:"drag",axis:g.lockAxis==="start"?g.startAxis:g.lockAxis},!1}},draggable:function(s){return l.default.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):l.default.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:_,move:T,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},E=b;v.default=E;var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var M={init:function(s){var c=s;M.document=c.document,M.DocumentFragment=c.DocumentFragment||w,M.SVGElement=c.SVGElement||w,M.SVGSVGElement=c.SVGSVGElement||w,M.SVGElementInstance=c.SVGElementInstance||w,M.Element=c.Element||w,M.HTMLElement=c.HTMLElement||M.Element,M.Event=c.Event,M.Touch=c.Touch||w,M.PointerEvent=c.PointerEvent||c.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function w(){}var L=M;m.default=L;var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var U={init:function(s){var c=m.default.Element,u=s.navigator||{};U.supportsTouch="ontouchstart"in s||l.default.func(s.DocumentTouch)&&m.default.document instanceof s.DocumentTouch,U.supportsPointerEvent=u.pointerEnabled!==!1&&!!m.default.PointerEvent,U.isIOS=/iP(hone|od|ad)/.test(u.platform),U.isIOS7=/iP(hone|od|ad)/.test(u.platform)&&/OS 7[^\d]/.test(u.appVersion),U.isIe9=/MSIE 9/.test(u.userAgent),U.isOperaMobile=u.appName==="Opera"&&U.supportsTouch&&/Presto/.test(u.userAgent),U.prefixedMatchesSelector="matches"in c.prototype?"matches":"webkitMatchesSelector"in c.prototype?"webkitMatchesSelector":"mozMatchesSelector"in c.prototype?"mozMatchesSelector":"oMatchesSelector"in c.prototype?"oMatchesSelector":"msMatchesSelector",U.pEventTypes=U.supportsPointerEvent?m.default.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,U.wheelEvent=m.default.document&&"onmousewheel"in m.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},B=U;P.default=B;var z={};function R(s){var c=s.parentNode;if(l.default.docFrag(c)){for(;(c=c.host)&&l.default.docFrag(c););return c}return c}function N(s,c){return i.window!==i.realWindow&&(c=c.replace(/\/deep\//g," ")),s[P.default.prefixedMatchesSelector](c)}Object.defineProperty(z,"__esModule",{value:!0}),z.closest=function(s,c){for(;l.default.element(s);){if(N(s,c))return s;s=R(s)}return null},z.getActualElement=function(s){return s.correspondingUseElement||s},z.getElementClientRect=te,z.getElementRect=function(s){var c=te(s);if(!P.default.isIOS7&&c){var u=$(i.getWindow(s));c.left+=u.x,c.right+=u.x,c.top+=u.y,c.bottom+=u.y}return c},z.getPath=function(s){for(var c=[];s;)c.push(s),s=R(s);return c},z.getScrollXY=$,z.indexOfDeepestElement=function(s){for(var c,u=[],f=0;f<s.length;f++){var g=s[f],x=s[c];if(g&&f!==c)if(x){var A=ae(g),S=ae(x);if(A!==g.ownerDocument)if(S!==g.ownerDocument)if(A!==S){u=u.length?u:fe(x);var C=void 0;if(x instanceof m.default.HTMLElement&&g instanceof m.default.SVGElement&&!(g instanceof m.default.SVGSVGElement)){if(g===S)continue;C=g.ownerSVGElement}else C=g;for(var I=fe(C,x.ownerDocument),k=0;I[k]&&I[k]===u[k];)k++;var V=[I[k-1],I[k],u[k]];if(V[0])for(var ee=V[0].lastChild;ee;){if(ee===V[1]){c=f,u=I;break}if(ee===V[2])break;ee=ee.previousSibling}}else ue=g,Z=x,(parseInt(i.getWindow(ue).getComputedStyle(ue).zIndex,10)||0)>=(parseInt(i.getWindow(Z).getComputedStyle(Z).zIndex,10)||0)&&(c=f);else c=f}else c=f}var ue,Z;return c},z.matchesSelector=N,z.matchesUpTo=function(s,c,u){for(;l.default.element(s);){if(N(s,c))return!0;if((s=R(s))===u)return N(s,c)}return!1},z.nodeContains=function(s,c){if(s.contains)return s.contains(c);for(;c;){if(c===s)return!0;c=c.parentNode}return!1},z.parentNode=R,z.trySelector=function(s){return!!l.default.string(s)&&(m.default.document.querySelector(s),!0)};var ae=function(s){return s.parentNode||s.host};function fe(s,c){for(var u,f=[],g=s;(u=ae(g))&&g!==c&&u!==g.ownerDocument;)f.unshift(g),g=u;return f}function $(s){return{x:(s=s||i.window).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop}}function te(s){var c=s instanceof m.default.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return c&&{left:c.left,right:c.right,top:c.top,bottom:c.bottom,width:c.width||c.right-c.left,height:c.height||c.bottom-c.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(s,c){for(var u in c)s[u]=c[u];return s};var ce={};function pe(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}function X(s,c,u){return s==="parent"?(0,z.parentNode)(u):s==="self"?c.getRect(u):(0,z.closest)(u,s)}Object.defineProperty(ce,"__esModule",{value:!0}),ce.addEdges=function(s,c,u){s.left&&(c.left+=u.x),s.right&&(c.right+=u.x),s.top&&(c.top+=u.y),s.bottom&&(c.bottom+=u.y),c.width=c.right-c.left,c.height=c.bottom-c.top},ce.getStringOptionResult=X,ce.rectToXY=function(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}},ce.resolveRectLike=function(s,c,u,f){var g,x=s;return l.default.string(x)?x=X(x,c,u):l.default.func(x)&&(x=x.apply(void 0,function(A){if(Array.isArray(A))return pe(A)}(g=f)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(g)||function(A,S){if(A){if(typeof A=="string")return pe(A,S);var C=Object.prototype.toString.call(A).slice(8,-1);return C==="Object"&&A.constructor&&(C=A.constructor.name),C==="Map"||C==="Set"?Array.from(A):C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)?pe(A,S):void 0}}(g)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),l.default.element(x)&&(x=(0,z.getElementRect)(x)),x},ce.tlbrToXywh=function(s){return!s||"x"in s&&"y"in s||((s=(0,j.default)({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s},ce.xywhToTlbr=function(s){return!s||"left"in s&&"top"in s||((s=(0,j.default)({},s)).left=s.x||0,s.top=s.y||0,s.right=s.right||s.left+s.width,s.bottom=s.bottom||s.top+s.height),s};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(s,c,u){var f=s.options[u],g=f&&f.origin||s.options.origin,x=(0,ce.resolveRectLike)(g,s,c,[s&&c]);return(0,ce.rectToXY)(x)||{x:0,y:0}};var ne={};function we(s){return s.trim().split(/ +/)}Object.defineProperty(ne,"__esModule",{value:!0}),ne.default=function s(c,u,f){if(f=f||{},l.default.string(c)&&c.search(" ")!==-1&&(c=we(c)),l.default.array(c))return c.reduce(function(C,I){return(0,j.default)(C,s(I,u,f))},f);if(l.default.object(c)&&(u=c,c=""),l.default.func(u))f[c]=f[c]||[],f[c].push(u);else if(l.default.array(u))for(var g=0;g<u.length;g++){var x;x=u[g],s(c,x,f)}else if(l.default.object(u))for(var A in u){var S=we(A).map(function(C){return"".concat(c).concat(C)});s(S,u[A],f)}return f};var ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=void 0,ve.default=function(s,c){return Math.sqrt(s*s+c*c)};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=function(s,c){s.__set||(s.__set={});var u=function(g){typeof s[g]!="function"&&g!=="__set"&&Object.defineProperty(s,g,{get:function(){return g in s.__set?s.__set[g]:s.__set[g]=c[g]},set:function(x){s.__set[g]=x},configurable:!0})};for(var f in c)u(f);return s};var q={};function Me(s){return s instanceof m.default.Event||s instanceof m.default.Touch}function Ee(s,c,u){return s=s||"page",(u=u||{}).x=c[s+"X"],u.y=c[s+"Y"],u}function H(s,c){return c=c||{x:0,y:0},P.default.isOperaMobile&&Me(s)?(Ee("screen",s,c),c.x+=window.scrollX,c.y+=window.scrollY):Ee("page",s,c),c}function Ze(s,c){return c=c||{},P.default.isOperaMobile&&Me(s)?Ee("screen",s,c):Ee("client",s,c),c}function He(s){var c=[];return l.default.array(s)?(c[0]=s[0],c[1]=s[1]):s.type==="touchend"?s.touches.length===1?(c[0]=s.touches[0],c[1]=s.changedTouches[0]):s.touches.length===0&&(c[0]=s.changedTouches[0],c[1]=s.changedTouches[1]):(c[0]=s.touches[0],c[1]=s.touches[1]),c}function Te(s){for(var c={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},u=0;u<s.length;u++){var f=s[u];for(var g in c)c[g]+=f[g]}for(var x in c)c[x]/=s.length;return c}Object.defineProperty(q,"__esModule",{value:!0}),q.coordsToEvent=function(s){return{coords:s,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},q.copyCoords=function(s,c){s.page=s.page||{},s.page.x=c.page.x,s.page.y=c.page.y,s.client=s.client||{},s.client.x=c.client.x,s.client.y=c.client.y,s.timeStamp=c.timeStamp},q.getClientXY=Ze,q.getEventTargets=function(s){var c=l.default.func(s.composedPath)?s.composedPath():s.path;return[z.getActualElement(c?c[0]:s.target),z.getActualElement(s.currentTarget)]},q.getPageXY=H,q.getPointerId=function(s){return l.default.number(s.pointerId)?s.pointerId:s.identifier},q.getPointerType=function(s){return l.default.string(s.pointerType)?s.pointerType:l.default.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof m.default.Touch?"touch":"mouse"},q.getTouchPair=He,q.getXY=Ee,q.isNativePointer=Me,q.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},q.pointerAverage=Te,Object.defineProperty(q,"pointerExtend",{enumerable:!0,get:function(){return oe.default}}),q.setCoordDeltas=function(s,c,u){s.page.x=u.page.x-c.page.x,s.page.y=u.page.y-c.page.y,s.client.x=u.client.x-c.client.x,s.client.y=u.client.y-c.client.y,s.timeStamp=u.timeStamp-c.timeStamp},q.setCoordVelocity=function(s,c){var u=Math.max(c.timeStamp/1e3,.001);s.page.x=c.page.x/u,s.page.y=c.page.y/u,s.client.x=c.client.x/u,s.client.y=c.client.y/u,s.timeStamp=u},q.setCoords=function(s,c,u){var f=c.length>1?Te(c):c[0];H(f,s.page),Ze(f,s.client),s.timeStamp=u},q.setZeroCoords=function(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0},q.touchAngle=function(s,c){var u=c+"X",f=c+"Y",g=He(s),x=g[1][u]-g[0][u],A=g[1][f]-g[0][f];return 180*Math.atan2(A,x)/Math.PI},q.touchBBox=function(s){if(!s.length)return null;var c=He(s),u=Math.min(c[0].pageX,c[1].pageX),f=Math.min(c[0].pageY,c[1].pageY),g=Math.max(c[0].pageX,c[1].pageX),x=Math.max(c[0].pageY,c[1].pageY);return{x:u,y:f,left:u,top:f,right:g,bottom:x,width:g-u,height:x-f}},q.touchDistance=function(s,c){var u=c+"X",f=c+"Y",g=He(s),x=g[0][u]-g[1][u],A=g[0][f]-g[1][f];return(0,ve.default)(x,A)};var Ge={};function ht(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Be(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Ge,"__esModule",{value:!0}),Ge.BaseEvent=void 0;var Je=function(){function s(f){(function(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),Be(this,"immediatePropagationStopped",!1),Be(this,"propagationStopped",!1),this._interaction=f}var c,u;return c=s,(u=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&ht(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();Ge.BaseEvent=Je,Object.defineProperty(Je.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.remove=Ye.merge=Ye.from=Ye.findIndex=Ye.find=Ye.contains=void 0,Ye.contains=function(s,c){return s.indexOf(c)!==-1},Ye.remove=function(s,c){return s.splice(s.indexOf(c),1)};var Tt=function(s,c){for(var u=0;u<c.length;u++){var f=c[u];s.push(f)}return s};Ye.merge=Tt,Ye.from=function(s){return Tt([],s)};var Ot=function(s,c){for(var u=0;u<s.length;u++)if(c(s[u],u,s))return u;return-1};Ye.findIndex=Ot,Ye.find=function(s,c){return s[Ot(s,c)]};var gt={};function lt(s){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},lt(s)}function Mt(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function jt(s,c){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},jt(s,c)}function F(s,c){if(c&&(lt(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D(s)}function D(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function se(s){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},se(s)}function me(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(gt,"__esModule",{value:!0}),gt.DropEvent=void 0;var xe=function(s){(function(S,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(C&&C.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),C&&jt(S,C)})(A,s);var c,u,f,g,x=(f=A,g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,C=se(f);if(g){var I=se(this).constructor;S=Reflect.construct(C,arguments,I)}else S=C.apply(this,arguments);return F(this,S)});function A(S,C,I){var k;(function(Z,ye){if(!(Z instanceof ye))throw new TypeError("Cannot call a class as a function")})(this,A),me(D(k=x.call(this,C._interaction)),"dropzone",void 0),me(D(k),"dragEvent",void 0),me(D(k),"relatedTarget",void 0),me(D(k),"draggable",void 0),me(D(k),"propagationStopped",!1),me(D(k),"immediatePropagationStopped",!1);var V=I==="dragleave"?S.prev:S.cur,ee=V.element,ue=V.dropzone;return k.type=I,k.target=ee,k.currentTarget=ee,k.dropzone=ue,k.dragEvent=C,k.relatedTarget=C.target,k.draggable=C.interactable,k.timeStamp=C.timeStamp,k}return c=A,(u=[{key:"reject",value:function(){var S=this,C=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&C.cur.dropzone===this.dropzone&&C.cur.element===this.target)if(C.prev.dropzone=this.dropzone,C.prev.element=this.target,C.rejected=!0,C.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var I=C.activeDrops,k=Ye.findIndex(I,function(ee){var ue=ee.dropzone,Z=ee.element;return ue===S.dropzone&&Z===S.target});C.activeDrops.splice(k,1);var V=new A(C,this.dragEvent,"dropdeactivate");V.dropzone=this.dropzone,V.target=this.target,this.dropzone.fire(V)}else this.dropzone.fire(new A(C,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Mt(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),A}(Ge.BaseEvent);gt.DropEvent=xe;var be={};function G(s,c){for(var u=0;u<s.slice().length;u++){var f=s.slice()[u],g=f.dropzone,x=f.element;c.dropzone=g,c.target=x,g.fire(c),c.propagationStopped=c.immediatePropagationStopped=!1}}function he(s,c){for(var u=function(x,A){for(var S=x.interactables,C=[],I=0;I<S.list.length;I++){var k=S.list[I];if(k.options.drop.enabled){var V=k.options.drop.accept;if(!(l.default.element(V)&&V!==A||l.default.string(V)&&!z.matchesSelector(A,V)||l.default.func(V)&&!V({dropzone:k,draggableElement:A})))for(var ee=l.default.string(k.target)?k._context.querySelectorAll(k.target):l.default.array(k.target)?k.target:[k.target],ue=0;ue<ee.length;ue++){var Z=ee[ue];Z!==A&&C.push({dropzone:k,element:Z,rect:k.getRect(Z)})}}}return C}(s,c),f=0;f<u.length;f++){var g=u[f];g.rect=g.dropzone.getRect(g.element)}return u}function ie(s,c,u){for(var f=s.dropState,g=s.interactable,x=s.element,A=[],S=0;S<f.activeDrops.length;S++){var C=f.activeDrops[S],I=C.dropzone,k=C.element,V=C.rect;A.push(I.dropCheck(c,u,g,x,k,V)?k:null)}var ee=z.indexOfDeepestElement(A);return f.activeDrops[ee]||null}function Ae(s,c,u){var f=s.dropState,g={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return u.type==="dragstart"&&(g.activate=new gt.DropEvent(f,u,"dropactivate"),g.activate.target=null,g.activate.dropzone=null),u.type==="dragend"&&(g.deactivate=new gt.DropEvent(f,u,"dropdeactivate"),g.deactivate.target=null,g.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(g.leave=new gt.DropEvent(f,u,"dragleave"),u.dragLeave=g.leave.target=f.prev.element,u.prevDropzone=g.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(g.enter=new gt.DropEvent(f,u,"dragenter"),u.dragEnter=f.cur.element,u.dropzone=f.cur.dropzone)),u.type==="dragend"&&f.cur.dropzone&&(g.drop=new gt.DropEvent(f,u,"drop"),u.dropzone=f.cur.dropzone,u.relatedTarget=f.cur.element),u.type==="dragmove"&&f.cur.dropzone&&(g.move=new gt.DropEvent(f,u,"dropmove"),g.move.dragmove=u,u.dropzone=f.cur.dropzone)),g}function Ie(s,c){var u=s.dropState,f=u.activeDrops,g=u.cur,x=u.prev;c.leave&&x.dropzone.fire(c.leave),c.enter&&g.dropzone.fire(c.enter),c.move&&g.dropzone.fire(c.move),c.drop&&g.dropzone.fire(c.drop),c.deactivate&&G(f,c.deactivate),u.prev.dropzone=g.dropzone,u.prev.element=g.element}function ze(s,c){var u=s.interaction,f=s.iEvent,g=s.event;if(f.type==="dragmove"||f.type==="dragend"){var x=u.dropState;c.dynamicDrop&&(x.activeDrops=he(c,u.element));var A=f,S=ie(u,A,g);x.rejected=x.rejected&&!!S&&S.dropzone===x.cur.dropzone&&S.element===x.cur.element,x.cur.dropzone=S&&S.dropzone,x.cur.element=S&&S.element,x.events=Ae(u,0,A)}}Object.defineProperty(be,"__esModule",{value:!0}),be.default=void 0;var De={id:"actions/drop",install:function(s){var c=s.actions,u=s.interactStatic,f=s.Interactable,g=s.defaults;s.usePlugin(v.default),f.prototype.dropzone=function(x){return function(A,S){if(l.default.object(S)){if(A.options.drop.enabled=S.enabled!==!1,S.listeners){var C=(0,ne.default)(S.listeners),I=Object.keys(C).reduce(function(k,V){return k[/^(enter|leave)/.test(V)?"drag".concat(V):/^(activate|deactivate|move)/.test(V)?"drop".concat(V):V]=C[V],k},{});A.off(A.options.drop.listeners),A.on(I),A.options.drop.listeners=I}return l.default.func(S.ondrop)&&A.on("drop",S.ondrop),l.default.func(S.ondropactivate)&&A.on("dropactivate",S.ondropactivate),l.default.func(S.ondropdeactivate)&&A.on("dropdeactivate",S.ondropdeactivate),l.default.func(S.ondragenter)&&A.on("dragenter",S.ondragenter),l.default.func(S.ondragleave)&&A.on("dragleave",S.ondragleave),l.default.func(S.ondropmove)&&A.on("dropmove",S.ondropmove),/^(pointer|center)$/.test(S.overlap)?A.options.drop.overlap=S.overlap:l.default.number(S.overlap)&&(A.options.drop.overlap=Math.max(Math.min(1,S.overlap),0)),"accept"in S&&(A.options.drop.accept=S.accept),"checker"in S&&(A.options.drop.checker=S.checker),A}return l.default.bool(S)?(A.options.drop.enabled=S,A):A.options.drop}(this,x)},f.prototype.dropCheck=function(x,A,S,C,I,k){return function(V,ee,ue,Z,ye,Pe,_e){var ke=!1;if(!(_e=_e||V.getRect(Pe)))return!!V.options.drop.checker&&V.options.drop.checker(ee,ue,ke,V,Pe,Z,ye);var Xe=V.options.drop.overlap;if(Xe==="pointer"){var it=(0,J.default)(Z,ye,"drag"),_t=q.getPageXY(ee);_t.x+=it.x,_t.y+=it.y;var bt=_t.x>_e.left&&_t.x<_e.right,ut=_t.y>_e.top&&_t.y<_e.bottom;ke=bt&&ut}var wt=Z.getRect(ye);if(wt&&Xe==="center"){var oi=wt.left+wt.width/2,$i=wt.top+wt.height/2;ke=oi>=_e.left&&oi<=_e.right&&$i>=_e.top&&$i<=_e.bottom}return wt&&l.default.number(Xe)&&(ke=Math.max(0,Math.min(_e.right,wt.right)-Math.max(_e.left,wt.left))*Math.max(0,Math.min(_e.bottom,wt.bottom)-Math.max(_e.top,wt.top))/(wt.width*wt.height)>=Xe),V.options.drop.checker&&(ke=V.options.drop.checker(ee,ue,ke,V,Pe,Z,ye)),ke}(this,x,A,S,C,I,k)},u.dynamicDrop=function(x){return l.default.bool(x)?(s.dynamicDrop=x,u):s.dynamicDrop},(0,j.default)(c.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),c.methodDict.drop="dropzone",s.dynamicDrop=!1,g.actions.drop=De.defaults},listeners:{"interactions:before-action-start":function(s){var c=s.interaction;c.prepared.name==="drag"&&(c.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,c){var u=s.interaction,f=(s.event,s.iEvent);if(u.prepared.name==="drag"){var g=u.dropState;g.activeDrops=null,g.events=null,g.activeDrops=he(c,u.element),g.events=Ae(u,0,f),g.events.activate&&(G(g.activeDrops,g.events.activate),c.fire("actions/drop:start",{interaction:u,dragEvent:f}))}},"interactions:action-move":ze,"interactions:after-action-move":function(s,c){var u=s.interaction,f=s.iEvent;u.prepared.name==="drag"&&(Ie(u,u.dropState.events),c.fire("actions/drop:move",{interaction:u,dragEvent:f}),u.dropState.events={})},"interactions:action-end":function(s,c){if(s.interaction.prepared.name==="drag"){var u=s.interaction,f=s.iEvent;ze(s,c),Ie(u,u.dropState.events),c.fire("actions/drop:end",{interaction:u,dragEvent:f})}},"interactions:stop":function(s){var c=s.interaction;if(c.prepared.name==="drag"){var u=c.dropState;u&&(u.activeDrops=null,u.events=null,u.cur.dropzone=null,u.cur.element=null,u.prev.dropzone=null,u.prev.element=null,u.rejected=!1)}}},getActiveDrops:he,getDrop:ie,getDropEvents:Ae,fireDropEvents:Ie,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Fe=De;be.default=Fe;var qe={};function et(s){var c=s.interaction,u=s.iEvent,f=s.phase;if(c.prepared.name==="gesture"){var g=c.pointers.map(function(I){return I.pointer}),x=f==="start",A=f==="end",S=c.interactable.options.deltaSource;if(u.touches=[g[0],g[1]],x)u.distance=q.touchDistance(g,S),u.box=q.touchBBox(g),u.scale=1,u.ds=0,u.angle=q.touchAngle(g,S),u.da=0,c.gesture.startDistance=u.distance,c.gesture.startAngle=u.angle;else if(A){var C=c.prevEvent;u.distance=C.distance,u.box=C.box,u.scale=C.scale,u.ds=0,u.angle=C.angle,u.da=0}else u.distance=q.touchDistance(g,S),u.box=q.touchBBox(g),u.scale=u.distance/c.gesture.startDistance,u.angle=q.touchAngle(g,S),u.ds=u.scale-c.gesture.scale,u.da=u.angle-c.gesture.angle;c.gesture.distance=u.distance,c.gesture.angle=u.angle,l.default.number(u.scale)&&u.scale!==1/0&&!isNaN(u.scale)&&(c.gesture.scale=u.scale)}}Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=void 0;var At={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var c=s.actions,u=s.Interactable,f=s.defaults;u.prototype.gesturable=function(g){return l.default.object(g)?(this.options.gesture.enabled=g.enabled!==!1,this.setPerAction("gesture",g),this.setOnEvents("gesture",g),this):l.default.bool(g)?(this.options.gesture.enabled=g,this):this.options.gesture},c.map.gesture=At,c.methodDict.gesture="gesturable",f.actions.gesture=At.defaults},listeners:{"interactions:action-start":et,"interactions:action-move":et,"interactions:action-end":et,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var c=s.interactable.options.gesture;if(c&&c.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},W=At;qe.default=W;var le={};function ge(s,c,u,f,g,x,A){if(!c)return!1;if(c===!0){var S=l.default.number(x.width)?x.width:x.right-x.left,C=l.default.number(x.height)?x.height:x.bottom-x.top;if(A=Math.min(A,Math.abs((s==="left"||s==="right"?S:C)/2)),S<0&&(s==="left"?s="right":s==="right"&&(s="left")),C<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var I=S>=0?x.left:x.right;return u.x<I+A}if(s==="top"){var k=C>=0?x.top:x.bottom;return u.y<k+A}if(s==="right")return u.x>(S>=0?x.right:x.left)-A;if(s==="bottom")return u.y>(C>=0?x.bottom:x.top)-A}return!!l.default.element(f)&&(l.default.element(c)?c===f:z.matchesUpTo(f,c,g))}function Le(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="resize"&&u.resizeAxes){var f=c;u.interactable.options.resize.square?(u.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=u.resizeAxes,u.resizeAxes==="x"?f.delta.y=0:u.resizeAxes==="y"&&(f.delta.x=0))}}Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;var Ue={id:"actions/resize",before:["actions/drag"],install:function(s){var c=s.actions,u=s.browser,f=s.Interactable,g=s.defaults;Ue.cursors=function(x){return x.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(u),Ue.defaultMargin=u.supportsTouch||u.supportsPointerEvent?20:10,f.prototype.resizable=function(x){return function(A,S,C){return l.default.object(S)?(A.options.resize.enabled=S.enabled!==!1,A.setPerAction("resize",S),A.setOnEvents("resize",S),l.default.string(S.axis)&&/^x$|^y$|^xy$/.test(S.axis)?A.options.resize.axis=S.axis:S.axis===null&&(A.options.resize.axis=C.defaults.actions.resize.axis),l.default.bool(S.preserveAspectRatio)?A.options.resize.preserveAspectRatio=S.preserveAspectRatio:l.default.bool(S.square)&&(A.options.resize.square=S.square),A):l.default.bool(S)?(A.options.resize.enabled=S,A):A.options.resize}(this,x,s)},c.map.resize=Ue,c.methodDict.resize="resizable",g.actions.resize=Ue.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(c){var u=c.iEvent,f=c.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var g=u,x=f.rect;f._rects={start:(0,j.default)({},x),corrected:(0,j.default)({},x),previous:(0,j.default)({},x),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},g.edges=f.prepared.edges,g.rect=f._rects.corrected,g.deltaRect=f._rects.delta}})(s),Le(s)},"interactions:action-move":function(s){(function(c){var u=c.iEvent,f=c.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var g=u,x=f.interactable.options.resize.invert,A=x==="reposition"||x==="negate",S=f.rect,C=f._rects,I=C.start,k=C.corrected,V=C.delta,ee=C.previous;if((0,j.default)(ee,k),A){if((0,j.default)(k,S),x==="reposition"){if(k.top>k.bottom){var ue=k.top;k.top=k.bottom,k.bottom=ue}if(k.left>k.right){var Z=k.left;k.left=k.right,k.right=Z}}}else k.top=Math.min(S.top,I.bottom),k.bottom=Math.max(S.bottom,I.top),k.left=Math.min(S.left,I.right),k.right=Math.max(S.right,I.left);for(var ye in k.width=k.right-k.left,k.height=k.bottom-k.top,k)V[ye]=k[ye]-ee[ye];g.edges=f.prepared.edges,g.rect=k,g.deltaRect=V}})(s),Le(s)},"interactions:action-end":function(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c;f.edges=u.prepared.edges,f.rect=u._rects.corrected,f.deltaRect=u._rects.delta}},"auto-start:check":function(s){var c=s.interaction,u=s.interactable,f=s.element,g=s.rect,x=s.buttons;if(g){var A=(0,j.default)({},c.coords.cur.page),S=u.options.resize;if(S&&S.enabled&&(!c.pointerIsDown||!/mouse|pointer/.test(c.pointerType)||x&S.mouseButtons)){if(l.default.object(S.edges)){var C={left:!1,right:!1,top:!1,bottom:!1};for(var I in C)C[I]=ge(I,S.edges[I],A,c._latestPointer.eventTarget,f,g,S.margin||Ue.defaultMargin);C.left=C.left&&!C.right,C.top=C.top&&!C.bottom,(C.left||C.right||C.top||C.bottom)&&(s.action={name:"resize",edges:C})}else{var k=S.axis!=="y"&&A.x>g.right-Ue.defaultMargin,V=S.axis!=="x"&&A.y>g.bottom-Ue.defaultMargin;(k||V)&&(s.action={name:"resize",axes:(k?"x":"")+(V?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var c=s.edges,u=s.axis,f=s.name,g=Ue.cursors,x=null;if(u)x=g[f+u];else if(c){for(var A="",S=["top","bottom","left","right"],C=0;C<S.length;C++){var I=S[C];c[I]&&(A+=I)}x=g[A]}return x},defaultMargin:null},xt=Ue;le.default=xt;var pt={};Object.defineProperty(pt,"__esModule",{value:!0}),pt.default=void 0;var on={id:"actions",install:function(s){s.usePlugin(qe.default),s.usePlugin(le.default),s.usePlugin(v.default),s.usePlugin(be.default)}};pt.default=on;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var yt,Yt,Xn=0,Fo={request:function(s){return yt(s)},cancel:function(s){return Yt(s)},init:function(s){if(yt=s.requestAnimationFrame,Yt=s.cancelAnimationFrame,!yt)for(var c=["ms","moz","webkit","o"],u=0;u<c.length;u++){var f=c[u];yt=s["".concat(f,"RequestAnimationFrame")],Yt=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}yt=yt&&yt.bind(s),Yt=Yt&&Yt.bind(s),yt||(yt=function(g){var x=Date.now(),A=Math.max(0,16-(x-Xn)),S=s.setTimeout(function(){g(x+A)},A);return Xn=x+A,S},Yt=function(g){return clearTimeout(g)})}};Xt.default=Fo;var ni={};Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=void 0,ni.getContainer=ko,ni.getScroll=$r,ni.getScrollSize=function(s){return l.default.window(s)&&(s=window.document.body),{x:s.scrollWidth,y:s.scrollHeight}},ni.getScrollSizeDelta=function(s,c){var u=s.interaction,f=s.element,g=u&&u.interactable.options[u.prepared.name].autoScroll;if(!g||!g.enabled)return c(),{x:0,y:0};var x=ko(g.container,u.interactable,f),A=$r(x);c();var S=$r(x);return{x:S.x-A.x,y:S.y-A.y}};var $e={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){$e.isScrolling=!0,Xt.default.cancel($e.i),s.autoScroll=$e,$e.interaction=s,$e.prevTime=$e.now(),$e.i=Xt.default.request($e.scroll)},stop:function(){$e.isScrolling=!1,$e.interaction&&($e.interaction.autoScroll=null),Xt.default.cancel($e.i)},scroll:function(){var s=$e.interaction,c=s.interactable,u=s.element,f=s.prepared.name,g=c.options[f].autoScroll,x=ko(g.container,c,u),A=$e.now(),S=(A-$e.prevTime)/1e3,C=g.speed*S;if(C>=1){var I={x:$e.x*C,y:$e.y*C};if(I.x||I.y){var k=$r(x);l.default.window(x)?x.scrollBy(I.x,I.y):x&&(x.scrollLeft+=I.x,x.scrollTop+=I.y);var V=$r(x),ee={x:V.x-k.x,y:V.y-k.y};(ee.x||ee.y)&&c.fire({type:"autoscroll",target:u,interactable:c,delta:ee,interaction:s,container:x})}$e.prevTime=A}$e.isScrolling&&(Xt.default.cancel($e.i),$e.i=Xt.default.request($e.scroll))},check:function(s,c){var u;return(u=s.options[c].autoScroll)==null?void 0:u.enabled},onInteractionMove:function(s){var c=s.interaction,u=s.pointer;if(c.interacting()&&$e.check(c.interactable,c.prepared.name))if(c.simulation)$e.x=$e.y=0;else{var f,g,x,A,S=c.interactable,C=c.element,I=c.prepared.name,k=S.options[I].autoScroll,V=ko(k.container,S,C);if(l.default.window(V))A=u.clientX<$e.margin,f=u.clientY<$e.margin,g=u.clientX>V.innerWidth-$e.margin,x=u.clientY>V.innerHeight-$e.margin;else{var ee=z.getElementClientRect(V);A=u.clientX<ee.left+$e.margin,f=u.clientY<ee.top+$e.margin,g=u.clientX>ee.right-$e.margin,x=u.clientY>ee.bottom-$e.margin}$e.x=g?1:A?-1:0,$e.y=x?1:f?-1:0,$e.isScrolling||($e.margin=k.margin,$e.speed=k.speed,$e.start(c))}}};function ko(s,c,u){return(l.default.string(s)?(0,ce.getStringOptionResult)(s,c,u):s)||(0,i.getWindow)(u)}function $r(s){return l.default.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var O={id:"auto-scroll",install:function(s){var c=s.defaults,u=s.actions;s.autoScroll=$e,$e.now=function(){return s.now()},u.phaselessTypes.autoscroll=!0,c.perAction.autoScroll=$e.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,$e.stop(),$e.interaction&&($e.interaction=null)},"interactions:stop":$e.stop,"interactions:action-move":function(s){return $e.onInteractionMove(s)}}},Q=O;ni.default=Q;var re={};Object.defineProperty(re,"__esModule",{value:!0}),re.copyAction=function(s,c){return s.name=c.name,s.axis=c.axis,s.edges=c.edges,s},re.sign=void 0,re.warnOnce=function(s,c){var u=!1;return function(){return u||(i.window.console.warn(c),u=!0),s.apply(this,arguments)}},re.sign=function(s){return s>=0?1:-1};var K={};function de(s){return l.default.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ve(s){return l.default.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;var We={id:"auto-start/interactableMethods",install:function(s){var c=s.Interactable;c.prototype.getAction=function(u,f,g,x){var A=function(S,C,I,k,V){var ee=S.getRect(k),ue={action:null,interactable:S,interaction:I,element:k,rect:ee,buttons:C.buttons||{0:1,1:4,3:8,4:16}[C.button]};return V.fire("auto-start:check",ue),ue.action}(this,f,g,x,s);return this.options.actionChecker?this.options.actionChecker(u,f,A,this,x,g):A},c.prototype.ignoreFrom=(0,re.warnOnce)(function(u){return this._backCompatOption("ignoreFrom",u)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),c.prototype.allowFrom=(0,re.warnOnce)(function(u){return this._backCompatOption("allowFrom",u)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),c.prototype.actionChecker=Ve,c.prototype.styleCursor=de}};K.default=We;var je={};function tt(s,c,u,f,g){return c.testIgnoreAllow(c.options[s.name],u,f)&&c.options[s.name].enabled&&mt(c,u,s,g)?s:null}function ot(s,c,u,f,g,x,A){for(var S=0,C=f.length;S<C;S++){var I=f[S],k=g[S],V=I.getAction(c,u,s,k);if(V){var ee=tt(V,I,k,x,A);if(ee)return{action:ee,interactable:I,element:k}}}return{action:null,interactable:null,element:null}}function rt(s,c,u,f,g){var x=[],A=[],S=f;function C(k){x.push(k),A.push(S)}for(;l.default.element(S);){x=[],A=[],g.interactables.forEachMatch(S,C);var I=ot(s,c,u,x,A,f,g);if(I.action&&!I.interactable.options[I.action.name].manualStart)return I;S=z.parentNode(S)}return{action:null,interactable:null,element:null}}function st(s,c,u){var f=c.action,g=c.interactable,x=c.element;f=f||{name:null},s.interactable=g,s.element=x,(0,re.copyAction)(s.prepared,f),s.rect=g&&f.name?g.getRect(x):null,Ii(s,u),u.fire("autoStart:prepared",{interaction:s})}function mt(s,c,u,f){var g=s.options,x=g[u.name].max,A=g[u.name].maxPerElement,S=f.autoStart.maxInteractions,C=0,I=0,k=0;if(!(x&&A&&S))return!1;for(var V=0;V<f.interactions.list.length;V++){var ee=f.interactions.list[V],ue=ee.prepared.name;if(ee.interacting()&&(++C>=S||ee.interactable===s&&((I+=ue===u.name?1:0)>=x||ee.element===c&&(k++,ue===u.name&&k>=A))))return!1}return S>0}function sn(s,c){return l.default.number(s)?(c.autoStart.maxInteractions=s,this):c.autoStart.maxInteractions}function Cn(s,c,u){var f=u.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=c,s.style.cursor=c,u.autoStart.cursorElement=c?s:null}function Ii(s,c){var u=s.interactable,f=s.element,g=s.prepared;if(s.pointerType==="mouse"&&u&&u.options.styleCursor){var x="";if(g.name){var A=u.options[g.name].cursorChecker;x=l.default.func(A)?A(g,u,f,s._interacting):c.actions.map[g.name].getCursor(g)}Cn(s.element,x||"",c)}else c.autoStart.cursorElement&&Cn(c.autoStart.cursorElement,"",c)}Object.defineProperty(je,"__esModule",{value:!0}),je.default=void 0;var Bt={id:"auto-start/base",before:["actions"],install:function(s){var c=s.interactStatic,u=s.defaults;s.usePlugin(K.default),u.base.actionChecker=null,u.base.styleCursor=!0,(0,j.default)(u.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),c.maxInteractions=function(f){return sn(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:mt,cursorElement:null}},listeners:{"interactions:down":function(s,c){var u=s.interaction,f=s.pointer,g=s.event,x=s.eventTarget;u.interacting()||st(u,rt(u,f,g,x,c),c)},"interactions:move":function(s,c){(function(u,f){var g=u.interaction,x=u.pointer,A=u.event,S=u.eventTarget;g.pointerType!=="mouse"||g.pointerIsDown||g.interacting()||st(g,rt(g,x,A,S,f),f)})(s,c),function(u,f){var g=u.interaction;if(g.pointerIsDown&&!g.interacting()&&g.pointerWasMoved&&g.prepared.name){f.fire("autoStart:before-start",u);var x=g.interactable,A=g.prepared.name;A&&x&&(x.options[A].manualStart||!mt(x,g.element,g.prepared,f)?g.stop():(g.start(g.prepared,x,g.element),Ii(g,f)))}}(s,c)},"interactions:stop":function(s,c){var u=s.interaction,f=u.interactable;f&&f.options.styleCursor&&Cn(u.element,"",c)}},maxInteractions:sn,withinInteractionLimit:mt,validateAction:tt},ct=Bt;je.default=ct;var gr={};Object.defineProperty(gr,"__esModule",{value:!0}),gr.default=void 0;var qt={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,c){var u=s.interaction,f=s.eventTarget,g=s.dx,x=s.dy;if(u.prepared.name==="drag"){var A=Math.abs(g),S=Math.abs(x),C=u.interactable.options.drag,I=C.startAxis,k=A>S?"x":A<S?"y":"xy";if(u.prepared.axis=C.lockAxis==="start"?k[0]:C.lockAxis,k!=="xy"&&I!=="xy"&&I!==k){u.prepared.name=null;for(var V=f,ee=function(Z){if(Z!==u.interactable){var ye=u.interactable.options.drag;if(!ye.manualStart&&Z.testIgnoreAllow(ye,V,f)){var Pe=Z.getAction(u.downPointer,u.downEvent,u,V);if(Pe&&Pe.name==="drag"&&function(_e,ke){if(!ke)return!1;var Xe=ke.options.drag.startAxis;return _e==="xy"||Xe==="xy"||Xe===_e}(k,Z)&&je.default.validateAction(Pe,Z,V,f,c))return Z}}};l.default.element(V);){var ue=c.interactables.forEachMatch(V,ee);if(ue){u.prepared.name="drag",u.interactable=ue,u.element=V;break}V=(0,z.parentNode)(V)}}}}}};gr.default=qt;var ii={};function zo(s){var c=s.prepared&&s.prepared.name;if(!c)return null;var u=s.interactable.options;return u[c].hold||u[c].delay}Object.defineProperty(ii,"__esModule",{value:!0}),ii.default=void 0;var Kr={id:"auto-start/hold",install:function(s){var c=s.defaults;s.usePlugin(je.default),c.perAction.hold=0,c.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var c=s.interaction,u=zo(c);u>0&&(c.autoStartHoldTimer=setTimeout(function(){c.start(c.prepared,c.interactable,c.element)},u))},"interactions:move":function(s){var c=s.interaction,u=s.duplicate;c.autoStartHoldTimer&&c.pointerWasMoved&&!u&&(clearTimeout(c.autoStartHoldTimer),c.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var c=s.interaction;zo(c)>0&&(c.prepared.name=null)}},getHoldDuration:zo},ia=Kr;ii.default=ia;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.default=void 0;var Xi={id:"auto-start",install:function(s){s.usePlugin(je.default),s.usePlugin(ii.default),s.usePlugin(gr.default)}};Ht.default=Xi;var vi={};function An(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):l.default.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault}function ra(s){var c=s.interaction,u=s.event;c.interactable&&c.interactable.checkAndPreventDefault(u)}function Rl(s){var c=s.Interactable;c.prototype.preventDefault=An,c.prototype.checkAndPreventDefault=function(u){return function(f,g,x){var A=f.options.preventDefault;if(A!=="never")if(A!=="always"){if(g.events.supportsPassive&&/^touch(start|move)$/.test(x.type)){var S=(0,i.getWindow)(x.target).document,C=g.getDocOptions(S);if(!C||!C.events||C.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(x.type)||l.default.element(x.target)&&(0,z.matchesSelector)(x.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||x.preventDefault()}else x.preventDefault()}(this,s,u)},s.interactions.docEvents.push({type:"dragstart",listener:function(u){for(var f=0;f<s.interactions.list.length;f++){var g=s.interactions.list[f];if(g.element&&(g.element===u.target||(0,z.nodeContains)(g.element,u.target)))return void g.interactable.checkAndPreventDefault(u)}}})}Object.defineProperty(vi,"__esModule",{value:!0}),vi.default=void 0,vi.install=Rl;var Dl={id:"core/interactablePreventDefault",install:Rl,listeners:["down","move","up","cancel"].reduce(function(s,c){return s["interactions:".concat(c)]=ra,s},{})};vi.default=Dl;var Qu={};Object.defineProperty(Qu,"__esModule",{value:!0}),Qu.default=void 0,Qu.default={};var oa,Ll={};Object.defineProperty(Ll,"__esModule",{value:!0}),Ll.default=void 0,function(s){s.touchAction="touchAction",s.boxSizing="boxSizing",s.noListeners="noListeners"}(oa||(oa={})),oa.touchAction,oa.boxSizing,oa.noListeners;var wx={id:"dev-tools",install:function(){}};Ll.default=wx;var Zr={};Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.default=function s(c){var u={};for(var f in c){var g=c[f];l.default.plainObject(g)?u[f]=s(g):l.default.array(g)?u[f]=Ye.from(g):u[f]=g}return u};var Qr={};function qp(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var g=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var x,A,S=[],C=!0,I=!1;try{for(g=g.call(u);!(C=(x=g.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||g.return==null||g.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return $p(u,f);var g=Object.prototype.toString.call(u).slice(8,-1);return g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set"?Array.from(u):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?$p(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function $p(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}function Tx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Jr(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.default=void 0,Qr.getRectOffset=Kp;var bx=function(){function s(f){(function(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),Jr(this,"states",[]),Jr(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Jr(this,"startDelta",void 0),Jr(this,"result",void 0),Jr(this,"endResult",void 0),Jr(this,"edges",void 0),Jr(this,"interaction",void 0),this.interaction=f,this.result=Il()}var c,u;return c=s,(u=[{key:"start",value:function(f,g){var x=f.phase,A=this.interaction,S=function(I){var k=I.interactable.options[I.prepared.name],V=k.modifiers;return V&&V.length?V:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var ue=k[ee];return ue&&ue.enabled&&{options:ue,methods:ue._methods}}).filter(function(ee){return!!ee})}(A);this.prepareStates(S),this.edges=(0,j.default)({},A.edges),this.startOffset=Kp(A.rect,g),this.startDelta={x:0,y:0};var C=this.fillArg({phase:x,pageCoords:g,preEnd:!1});return this.result=Il(),this.startAll(C),this.result=this.setAll(C)}},{key:"fillArg",value:function(f){var g=this.interaction;return f.interaction=g,f.interactable=g.interactable,f.element=g.element,f.rect=f.rect||g.rect,f.edges=this.edges,f.startOffset=this.startOffset,f}},{key:"startAll",value:function(f){for(var g=0;g<this.states.length;g++){var x=this.states[g];x.methods.start&&(f.state=x,x.methods.start(f))}}},{key:"setAll",value:function(f){var g=f.phase,x=f.preEnd,A=f.skipModifiers,S=f.rect;f.coords=(0,j.default)({},f.pageCoords),f.rect=(0,j.default)({},S);for(var C=A?this.states.slice(A):this.states,I=Il(f.coords,f.rect),k=0;k<C.length;k++){var V,ee=C[k],ue=ee.options,Z=(0,j.default)({},f.coords),ye=null;(V=ee.methods)!=null&&V.set&&this.shouldDo(ue,x,g)&&(f.state=ee,ye=ee.methods.set(f),ce.addEdges(this.interaction.edges,f.rect,{x:f.coords.x-Z.x,y:f.coords.y-Z.y})),I.eventProps.push(ye)}I.delta.x=f.coords.x-f.pageCoords.x,I.delta.y=f.coords.y-f.pageCoords.y,I.rectDelta.left=f.rect.left-S.left,I.rectDelta.right=f.rect.right-S.right,I.rectDelta.top=f.rect.top-S.top,I.rectDelta.bottom=f.rect.bottom-S.bottom;var Pe=this.result.coords,_e=this.result.rect;if(Pe&&_e){var ke=I.rect.left!==_e.left||I.rect.right!==_e.right||I.rect.top!==_e.top||I.rect.bottom!==_e.bottom;I.changed=ke||Pe.x!==I.coords.x||Pe.y!==I.coords.y}return I}},{key:"applyToInteraction",value:function(f){var g=this.interaction,x=f.phase,A=g.coords.cur,S=g.coords.start,C=this.result,I=this.startDelta,k=C.delta;x==="start"&&(0,j.default)(this.startDelta,C.delta);for(var V=0;V<[[S,I],[A,k]].length;V++){var ee=qp([[S,I],[A,k]][V],2),ue=ee[0],Z=ee[1];ue.page.x+=Z.x,ue.page.y+=Z.y,ue.client.x+=Z.x,ue.client.y+=Z.y}var ye=this.result.rectDelta,Pe=f.rect||g.rect;Pe.left+=ye.left,Pe.right+=ye.right,Pe.top+=ye.top,Pe.bottom+=ye.bottom,Pe.width=Pe.right-Pe.left,Pe.height=Pe.bottom-Pe.top}},{key:"setAndApply",value:function(f){var g=this.interaction,x=f.phase,A=f.preEnd,S=f.skipModifiers,C=this.setAll(this.fillArg({preEnd:A,phase:x,pageCoords:f.modifiedCoords||g.coords.cur.page}));if(this.result=C,!C.changed&&(!S||S<this.states.length)&&g.interacting())return!1;if(f.modifiedCoords){var I=g.coords.cur.page,k={x:f.modifiedCoords.x-I.x,y:f.modifiedCoords.y-I.y};C.coords.x+=k.x,C.coords.y+=k.y,C.delta.x+=k.x,C.delta.y+=k.y}this.applyToInteraction(f)}},{key:"beforeEnd",value:function(f){var g=f.interaction,x=f.event,A=this.states;if(A&&A.length){for(var S=!1,C=0;C<A.length;C++){var I=A[C];f.state=I;var k=I.options,V=I.methods,ee=V.beforeEnd&&V.beforeEnd(f);if(ee)return this.endResult=ee,!1;S=S||!S&&this.shouldDo(k,!0,f.phase,!0)}S&&g.move({event:x,preEnd:!0})}}},{key:"stop",value:function(f){var g=f.interaction;if(this.states&&this.states.length){var x=(0,j.default)({states:this.states,interactable:g.interactable,element:g.element,rect:null},f);this.fillArg(x);for(var A=0;A<this.states.length;A++){var S=this.states[A];x.state=S,S.methods.stop&&S.methods.stop(x)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(f){this.states=[];for(var g=0;g<f.length;g++){var x=f[g],A=x.options,S=x.methods,C=x.name;this.states.push({options:A,methods:S,index:g,name:C})}return this.states}},{key:"restoreInteractionCoords",value:function(f){var g=f.interaction,x=g.coords,A=g.rect,S=g.modification;if(S.result){for(var C=S.startDelta,I=S.result,k=I.delta,V=I.rectDelta,ee=[[x.start,C],[x.cur,k]],ue=0;ue<ee.length;ue++){var Z=qp(ee[ue],2),ye=Z[0],Pe=Z[1];ye.page.x-=Pe.x,ye.page.y-=Pe.y,ye.client.x-=Pe.x,ye.client.y-=Pe.y}A.left-=V.left,A.right-=V.right,A.top-=V.top,A.bottom-=V.bottom}}},{key:"shouldDo",value:function(f,g,x,A){return!(!f||f.enabled===!1||A&&!f.endOnly||f.endOnly&&!g||x==="start"&&!f.setStart)}},{key:"copyFrom",value:function(f){this.startOffset=f.startOffset,this.startDelta=f.startDelta,this.edges=f.edges,this.states=f.states.map(function(g){return(0,Zr.default)(g)}),this.result=Il((0,j.default)({},f.result.coords),(0,j.default)({},f.result.rect))}},{key:"destroy",value:function(){for(var f in this)this[f]=null}}])&&Tx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();function Il(s,c){return{rect:c,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Kp(s,c){return s?{left:c.x-s.left,top:c.y-s.top,right:s.right-c.x,bottom:s.bottom-c.y}:{left:0,top:0,right:0,bottom:0}}Qr.default=bx;var hn={};function Ul(s){var c=s.iEvent,u=s.interaction.modification.result;u&&(c.modifiers=u.eventProps)}Object.defineProperty(hn,"__esModule",{value:!0}),hn.addEventModifiers=Ul,hn.default=void 0,hn.makeModifier=function(s,c){var u=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},g=function(x){var A=x||{};for(var S in A.enabled=A.enabled!==!1,u)S in A||(A[S]=u[S]);var C={options:A,methods:f,name:c,enable:function(){return A.enabled=!0,C},disable:function(){return A.enabled=!1,C}};return C};return c&&typeof c=="string"&&(g._defaults=u,g._methods=f),g};var Cx={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var c=s.interaction;c.modification=new Qr.default(c)},"interactions:before-action-start":function(s){var c=s.interaction.modification;c.start(s,s.interaction.coords.start.page),s.interaction.edges=c.edges,c.applyToInteraction(s)},"interactions:before-action-move":function(s){return s.interaction.modification.setAndApply(s)},"interactions:before-action-end":function(s){return s.interaction.modification.beforeEnd(s)},"interactions:action-start":Ul,"interactions:action-move":Ul,"interactions:action-end":Ul,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},Ax=Cx;hn.default=Ax;var sa={};Object.defineProperty(sa,"__esModule",{value:!0}),sa.defaults=void 0,sa.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var aa={};function Ju(s){return Ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Ju(s)}function Px(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function ef(s,c){return ef=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},ef(s,c)}function Rx(s,c){if(c&&(Ju(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Et(s)}function Et(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ol(s){return Ol=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},Ol(s)}function Pt(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(aa,"__esModule",{value:!0}),aa.InteractEvent=void 0;var Zp=function(s){(function(S,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(C&&C.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),C&&ef(S,C)})(A,s);var c,u,f,g,x=(f=A,g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,C=Ol(f);if(g){var I=Ol(this).constructor;S=Reflect.construct(C,arguments,I)}else S=C.apply(this,arguments);return Rx(this,S)});function A(S,C,I,k,V,ee,ue){var Z;(function(bt,ut){if(!(bt instanceof ut))throw new TypeError("Cannot call a class as a function")})(this,A),Pt(Et(Z=x.call(this,S)),"relatedTarget",null),Pt(Et(Z),"screenX",void 0),Pt(Et(Z),"screenY",void 0),Pt(Et(Z),"button",void 0),Pt(Et(Z),"buttons",void 0),Pt(Et(Z),"ctrlKey",void 0),Pt(Et(Z),"shiftKey",void 0),Pt(Et(Z),"altKey",void 0),Pt(Et(Z),"metaKey",void 0),Pt(Et(Z),"page",void 0),Pt(Et(Z),"client",void 0),Pt(Et(Z),"delta",void 0),Pt(Et(Z),"rect",void 0),Pt(Et(Z),"x0",void 0),Pt(Et(Z),"y0",void 0),Pt(Et(Z),"t0",void 0),Pt(Et(Z),"dt",void 0),Pt(Et(Z),"duration",void 0),Pt(Et(Z),"clientX0",void 0),Pt(Et(Z),"clientY0",void 0),Pt(Et(Z),"velocity",void 0),Pt(Et(Z),"speed",void 0),Pt(Et(Z),"swipe",void 0),Pt(Et(Z),"axes",void 0),Pt(Et(Z),"preEnd",void 0),V=V||S.element;var ye=S.interactable,Pe=(ye&&ye.options||sa.defaults).deltaSource,_e=(0,J.default)(ye,V,I),ke=k==="start",Xe=k==="end",it=ke?Et(Z):S.prevEvent,_t=ke?S.coords.start:Xe?{page:it.page,client:it.client,timeStamp:S.coords.cur.timeStamp}:S.coords.cur;return Z.page=(0,j.default)({},_t.page),Z.client=(0,j.default)({},_t.client),Z.rect=(0,j.default)({},S.rect),Z.timeStamp=_t.timeStamp,Xe||(Z.page.x-=_e.x,Z.page.y-=_e.y,Z.client.x-=_e.x,Z.client.y-=_e.y),Z.ctrlKey=C.ctrlKey,Z.altKey=C.altKey,Z.shiftKey=C.shiftKey,Z.metaKey=C.metaKey,Z.button=C.button,Z.buttons=C.buttons,Z.target=V,Z.currentTarget=V,Z.preEnd=ee,Z.type=ue||I+(k||""),Z.interactable=ye,Z.t0=ke?S.pointers[S.pointers.length-1].downTime:it.t0,Z.x0=S.coords.start.page.x-_e.x,Z.y0=S.coords.start.page.y-_e.y,Z.clientX0=S.coords.start.client.x-_e.x,Z.clientY0=S.coords.start.client.y-_e.y,Z.delta=ke||Xe?{x:0,y:0}:{x:Z[Pe].x-it[Pe].x,y:Z[Pe].y-it[Pe].y},Z.dt=S.coords.delta.timeStamp,Z.duration=Z.timeStamp-Z.t0,Z.velocity=(0,j.default)({},S.coords.velocity[Pe]),Z.speed=(0,ve.default)(Z.velocity.x,Z.velocity.y),Z.swipe=Xe||k==="inertiastart"?Z.getSwipe():null,Z}return c=A,(u=[{key:"getSwipe",value:function(){var S=this._interaction;if(S.prevEvent.speed<600||this.timeStamp-S.prevEvent.timeStamp>150)return null;var C=180*Math.atan2(S.prevEvent.velocityY,S.prevEvent.velocityX)/Math.PI;C<0&&(C+=360);var I=112.5<=C&&C<247.5,k=202.5<=C&&C<337.5;return{up:k,down:!k&&22.5<=C&&C<157.5,left:I,right:!I&&(292.5<=C||C<67.5),angle:C,speed:S.prevEvent.speed,velocity:{x:S.prevEvent.velocityX,y:S.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Px(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),A}(Ge.BaseEvent);aa.InteractEvent=Zp,Object.defineProperties(Zp.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var la={};function Qp(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Dx(s,c,u){return c&&Qp(s.prototype,c),u&&Qp(s,u),Object.defineProperty(s,"prototype",{writable:!1}),s}function ca(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(la,"__esModule",{value:!0}),la.PointerInfo=void 0;var Lx=Dx(function s(c,u,f,g,x){(function(A,S){if(!(A instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),ca(this,"id",void 0),ca(this,"pointer",void 0),ca(this,"event",void 0),ca(this,"downTime",void 0),ca(this,"downTarget",void 0),this.id=c,this.pointer=u,this.event=f,this.downTime=g,this.downTarget=x});la.PointerInfo=Lx;var Nl,Fl,Fn={};function Ix(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Nt(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.Interaction=void 0,Object.defineProperty(Fn,"PointerInfo",{enumerable:!0,get:function(){return la.PointerInfo}}),Fn.default=Fn._ProxyValues=Fn._ProxyMethods=void 0,Fn._ProxyValues=Nl,function(s){s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy=""}(Nl||(Fn._ProxyValues=Nl={})),Fn._ProxyMethods=Fl,function(s){s.start="",s.move="",s.end="",s.stop="",s.interacting=""}(Fl||(Fn._ProxyMethods=Fl={}));var Ux=0,Jp=function(){function s(f){var g=this,x=f.pointerType,A=f.scopeFire;(function(ee,ue){if(!(ee instanceof ue))throw new TypeError("Cannot call a class as a function")})(this,s),Nt(this,"interactable",null),Nt(this,"element",null),Nt(this,"rect",null),Nt(this,"_rects",void 0),Nt(this,"edges",null),Nt(this,"_scopeFire",void 0),Nt(this,"prepared",{name:null,axis:null,edges:null}),Nt(this,"pointerType",void 0),Nt(this,"pointers",[]),Nt(this,"downEvent",null),Nt(this,"downPointer",{}),Nt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Nt(this,"prevEvent",null),Nt(this,"pointerIsDown",!1),Nt(this,"pointerWasMoved",!1),Nt(this,"_interacting",!1),Nt(this,"_ending",!1),Nt(this,"_stopped",!0),Nt(this,"_proxy",null),Nt(this,"simulation",null),Nt(this,"doMove",(0,re.warnOnce)(function(ee){this.move(ee)},"The interaction.doMove() method has been renamed to interaction.move()")),Nt(this,"coords",{start:q.newCoords(),prev:q.newCoords(),cur:q.newCoords(),delta:q.newCoords(),velocity:q.newCoords()}),Nt(this,"_id",Ux++),this._scopeFire=A,this.pointerType=x;var S=this;this._proxy={};var C=function(ee){Object.defineProperty(g._proxy,ee,{get:function(){return S[ee]}})};for(var I in Nl)C(I);var k=function(ee){Object.defineProperty(g._proxy,ee,{value:function(){return S[ee].apply(S,arguments)}})};for(var V in Fl)k(V);this._scopeFire("interactions:new",{interaction:this})}var c,u;return c=s,u=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(f,g,x){var A=this.updatePointer(f,g,x,!0),S=this.pointers[A];this._scopeFire("interactions:down",{pointer:f,event:g,eventTarget:x,pointerIndex:A,pointerInfo:S,type:"down",interaction:this})}},{key:"start",value:function(f,g,x){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(f.name==="gesture"?2:1)||!g.options[f.name].enabled)&&((0,re.copyAction)(this.prepared,f),this.interactable=g,this.element=x,this.rect=g.getRect(x),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(f,g,x){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(f,g,x,!1);var A,S,C=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(A=this.coords.cur.client.x-this.coords.start.client.x,S=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ve.default)(A,S)>this.pointerMoveTolerance);var I=this.getPointerIndex(f),k={pointer:f,pointerIndex:I,pointerInfo:this.pointers[I],event:g,type:"move",eventTarget:x,dx:A,dy:S,duplicate:C,interaction:this};C||q.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",k),C||this.simulation||(this.interacting()&&(k.type=null,this.move(k)),this.pointerWasMoved&&q.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(f){f&&f.event||q.setZeroCoords(this.coords.delta),(f=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},f||{})).phase="move",this._doPhase(f)}},{key:"pointerUp",value:function(f,g,x,A){var S=this.getPointerIndex(f);S===-1&&(S=this.updatePointer(f,g,x,!1));var C=/cancel$/i.test(g.type)?"cancel":"up";this._scopeFire("interactions:".concat(C),{pointer:f,pointerIndex:S,pointerInfo:this.pointers[S],event:g,eventTarget:x,type:C,curEventTarget:A,interaction:this}),this.simulation||this.end(g),this.removePointer(f,g)}},{key:"documentBlur",value:function(f){this.end(f),this._scopeFire("interactions:blur",{event:f,type:"blur",interaction:this})}},{key:"end",value:function(f){var g;this._ending=!0,f=f||this._latestPointer.event,this.interacting()&&(g=this._doPhase({event:f,interaction:this,phase:"end"})),this._ending=!1,g===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(f){var g=q.getPointerId(f);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Ye.findIndex(this.pointers,function(x){return x.id===g})}},{key:"getPointerInfo",value:function(f){return this.pointers[this.getPointerIndex(f)]}},{key:"updatePointer",value:function(f,g,x,A){var S=q.getPointerId(f),C=this.getPointerIndex(f),I=this.pointers[C];return A=A!==!1&&(A||/(down|start)$/i.test(g.type)),I?I.pointer=f:(I=new la.PointerInfo(S,f,g,null,null),C=this.pointers.length,this.pointers.push(I)),q.setCoords(this.coords.cur,this.pointers.map(function(k){return k.pointer}),this._now()),q.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),A&&(this.pointerIsDown=!0,I.downTime=this.coords.cur.timeStamp,I.downTarget=x,q.pointerExtend(this.downPointer,f),this.interacting()||(q.copyCoords(this.coords.start,this.coords.cur),q.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=g,this.pointerWasMoved=!1)),this._updateLatestPointer(f,g,x),this._scopeFire("interactions:update-pointer",{pointer:f,event:g,eventTarget:x,down:A,pointerInfo:I,pointerIndex:C,interaction:this}),C}},{key:"removePointer",value:function(f,g){var x=this.getPointerIndex(f);if(x!==-1){var A=this.pointers[x];this._scopeFire("interactions:remove-pointer",{pointer:f,event:g,eventTarget:null,pointerIndex:x,pointerInfo:A,interaction:this}),this.pointers.splice(x,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(f,g,x){this._latestPointer.pointer=f,this._latestPointer.event=g,this._latestPointer.eventTarget=x}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(f,g,x,A){return new aa.InteractEvent(this,f,this.prepared.name,g,this.element,x,A)}},{key:"_fireEvent",value:function(f){var g;(g=this.interactable)==null||g.fire(f),(!this.prevEvent||f.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=f)}},{key:"_doPhase",value:function(f){var g=f.event,x=f.phase,A=f.preEnd,S=f.type,C=this.rect;if(C&&x==="move"&&(ce.addEdges(this.edges,C,this.coords.delta[this.interactable.options.deltaSource]),C.width=C.right-C.left,C.height=C.bottom-C.top),this._scopeFire("interactions:before-action-".concat(x),f)===!1)return!1;var I=f.iEvent=this._createPreparedEvent(g,x,A,S);return this._scopeFire("interactions:action-".concat(x),f),x==="start"&&(this.prevEvent=I),this._fireEvent(I),this._scopeFire("interactions:after-action-".concat(x),f),!0}},{key:"_now",value:function(){return Date.now()}}],u&&Ix(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();Fn.Interaction=Jp;var Ox=Jp;Fn.default=Ox;var yr={};function em(s){s.pointerIsDown&&(nf(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}function tm(s){tf(s.interaction)}function tf(s){if(!function(u){return!(!u.offset.pending.x&&!u.offset.pending.y)}(s))return!1;var c=s.offset.pending;return nf(s.coords.cur,c),nf(s.coords.delta,c),ce.addEdges(s.edges,s.rect,c),c.x=0,c.y=0,!0}function Nx(s){var c=s.x,u=s.y;this.offset.pending.x+=c,this.offset.pending.y+=u,this.offset.total.x+=c,this.offset.total.y+=u}function nf(s,c){var u=s.page,f=s.client,g=c.x,x=c.y;u.x+=g,u.y+=x,f.x+=g,f.y+=x}Object.defineProperty(yr,"__esModule",{value:!0}),yr.addTotal=em,yr.applyPending=tf,yr.default=void 0,Fn._ProxyMethods.offsetBy="";var Fx={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=Nx},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return em(s.interaction)},"interactions:before-action-start":tm,"interactions:before-action-move":tm,"interactions:before-action-end":function(s){var c=s.interaction;if(tf(c))return c.move({offset:!0}),c.end(),!1},"interactions:stop":function(s){var c=s.interaction;c.offset.total.x=0,c.offset.total.y=0,c.offset.pending.x=0,c.offset.pending.y=0}}},kx=Fx;yr.default=kx;var eo={};function zx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function an(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(eo,"__esModule",{value:!0}),eo.default=eo.InertiaState=void 0;var nm=function(){function s(f){(function(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),an(this,"active",!1),an(this,"isModified",!1),an(this,"smoothEnd",!1),an(this,"allowResume",!1),an(this,"modification",void 0),an(this,"modifierCount",0),an(this,"modifierArg",void 0),an(this,"startCoords",void 0),an(this,"t0",0),an(this,"v0",0),an(this,"te",0),an(this,"targetOffset",void 0),an(this,"modifiedOffset",void 0),an(this,"currentOffset",void 0),an(this,"lambda_v0",0),an(this,"one_ve_v0",0),an(this,"timeout",void 0),an(this,"interaction",void 0),this.interaction=f}var c,u;return c=s,(u=[{key:"start",value:function(f){var g=this.interaction,x=kl(g);if(!x||!x.enabled)return!1;var A=g.coords.velocity.client,S=(0,ve.default)(A.x,A.y),C=this.modification||(this.modification=new Qr.default(g));if(C.copyFrom(g.modification),this.t0=g._now(),this.allowResume=x.allowResume,this.v0=S,this.currentOffset={x:0,y:0},this.startCoords=g.coords.cur.page,this.modifierArg=C.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-g.coords.cur.timeStamp<50&&S>x.minSpeed&&S>x.endSpeed)this.startInertia();else{if(C.result=C.setAll(this.modifierArg),!C.result.changed)return!1;this.startSmoothEnd()}return g.modification.result.rect=null,g.offsetBy(this.targetOffset),g._doPhase({interaction:g,event:f,phase:"inertiastart"}),g.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),g.modification.result.rect=null,this.active=!0,g.simulation=this,!0}},{key:"startInertia",value:function(){var f=this,g=this.interaction.coords.velocity.client,x=kl(this.interaction),A=x.resistance,S=-Math.log(x.endSpeed/this.v0)/A;this.targetOffset={x:(g.x-S)/A,y:(g.y-S)/A},this.te=S,this.lambda_v0=A/this.v0,this.one_ve_v0=1-x.endSpeed/this.v0;var C=this.modification,I=this.modifierArg;I.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},C.result=C.setAll(I),C.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+C.result.delta.x,y:this.targetOffset.y+C.result.delta.y}),this.onNextFrame(function(){return f.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var f=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return f.smoothEndTick()})}},{key:"onNextFrame",value:function(f){var g=this;this.timeout=Xt.default.request(function(){g.active&&f()})}},{key:"inertiaTick",value:function(){var f,g,x,A,S,C=this,I=this.interaction,k=kl(I).resistance,V=(I._now()-this.t0)/1e3;if(V<this.te){var ee,ue=1-(Math.exp(-k*V)-this.lambda_v0)/this.one_ve_v0;this.isModified?(f=this.targetOffset.x,g=this.targetOffset.y,x=this.modifiedOffset.x,A=this.modifiedOffset.y,ee={x:im(S=ue,0,f,x),y:im(S,0,g,A)}):ee={x:this.targetOffset.x*ue,y:this.targetOffset.y*ue};var Z={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=Z.x,this.currentOffset.y+=Z.y,I.offsetBy(Z),I.move(),this.onNextFrame(function(){return C.inertiaTick()})}else I.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var f=this,g=this.interaction,x=g._now()-this.t0,A=kl(g).smoothEndDuration;if(x<A){var S={x:rm(x,0,this.targetOffset.x,A),y:rm(x,0,this.targetOffset.y,A)},C={x:S.x-this.currentOffset.x,y:S.y-this.currentOffset.y};this.currentOffset.x+=C.x,this.currentOffset.y+=C.y,g.offsetBy(C),g.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return f.smoothEndTick()})}else g.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(f){var g=f.pointer,x=f.event,A=f.eventTarget,S=this.interaction;S.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),S.updatePointer(g,x,A,!0),S._doPhase({interaction:S,event:x,phase:"resume"}),(0,q.copyCoords)(S.coords.prev,S.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Xt.default.cancel(this.timeout)}}])&&zx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();function kl(s){var c=s.interactable,u=s.prepared;return c&&c.options&&u.name&&c.options[u.name].inertia}eo.InertiaState=nm;var Bx={id:"inertia",before:["modifiers","actions"],install:function(s){var c=s.defaults;s.usePlugin(yr.default),s.usePlugin(hn.default),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,c.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var c=s.interaction;c.inertia=new nm(c)},"interactions:before-action-end":function(s){var c=s.interaction,u=s.event;return(!c._interacting||c.simulation||!c.inertia.start(u))&&null},"interactions:down":function(s){var c=s.interaction,u=s.eventTarget,f=c.inertia;if(f.active)for(var g=u;l.default.element(g);){if(g===c.element){f.resume(s);break}g=z.parentNode(g)}},"interactions:stop":function(s){var c=s.interaction.inertia;c.active&&c.stop()},"interactions:before-action-resume":function(s){var c=s.interaction.modification;c.stop(s),c.start(s,s.interaction.coords.cur.page),c.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":hn.addEventModifiers,"interactions:action-inertiastart":hn.addEventModifiers,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function im(s,c,u,f){var g=1-s;return g*g*c+2*g*s*u+s*s*f}function rm(s,c,u,f){return-u*(s/=f)*(s-2)+c}var Gx=Bx;eo.default=Gx;var ua={};function Vx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function fa(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}function om(s,c){for(var u=0;u<c.length;u++){var f=c[u];if(s.immediatePropagationStopped)break;f(s)}}Object.defineProperty(ua,"__esModule",{value:!0}),ua.Eventable=void 0;var Hx=function(){function s(f){(function(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),fa(this,"options",void 0),fa(this,"types",{}),fa(this,"propagationStopped",!1),fa(this,"immediatePropagationStopped",!1),fa(this,"global",void 0),this.options=(0,j.default)({},f||{})}var c,u;return c=s,(u=[{key:"fire",value:function(f){var g,x=this.global;(g=this.types[f.type])&&om(f,g),!f.propagationStopped&&x&&(g=x[f.type])&&om(f,g)}},{key:"on",value:function(f,g){var x=(0,ne.default)(f,g);for(f in x)this.types[f]=Ye.merge(this.types[f]||[],x[f])}},{key:"off",value:function(f,g){var x=(0,ne.default)(f,g);for(f in x){var A=this.types[f];if(A&&A.length)for(var S=0;S<x[f].length;S++){var C=x[f][S],I=A.indexOf(C);I!==-1&&A.splice(I,1)}}}},{key:"getRect",value:function(f){return null}}])&&Vx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();ua.Eventable=Hx;var da={};Object.defineProperty(da,"__esModule",{value:!0}),da.default=function(s,c){if(c.phaselessTypes[s])return!0;for(var u in c.map)if(s.indexOf(u)===0&&s.substr(u.length)in c.phases)return!0;return!1};var rf={};Object.defineProperty(rf,"__esModule",{value:!0}),rf.createInteractStatic=function(s){var c=function u(f,g){var x=s.interactables.get(f,g);return x||((x=s.interactables.new(f,g)).events.global=u.globalEvents),x};return c.getPointerAverage=q.pointerAverage,c.getTouchBBox=q.touchBBox,c.getTouchDistance=q.touchDistance,c.getTouchAngle=q.touchAngle,c.getElementRect=z.getElementRect,c.getElementClientRect=z.getElementClientRect,c.matchesSelector=z.matchesSelector,c.closest=z.closest,c.globalEvents={},c.version="1.10.17",c.scope=s,c.use=function(u,f){return this.scope.usePlugin(u,f),this},c.isSet=function(u,f){return!!this.scope.interactables.get(u,f&&f.context)},c.on=(0,re.warnOnce)(function(u,f,g){if(l.default.string(u)&&u.search(" ")!==-1&&(u=u.trim().split(/ +/)),l.default.array(u)){for(var x=0;x<u.length;x++){var A=u[x];this.on(A,f,g)}return this}if(l.default.object(u)){for(var S in u)this.on(S,u[S],f);return this}return(0,da.default)(u,this.scope.actions)?this.globalEvents[u]?this.globalEvents[u].push(f):this.globalEvents[u]=[f]:this.scope.events.add(this.scope.document,u,f,{options:g}),this},"The interact.on() method is being deprecated"),c.off=(0,re.warnOnce)(function(u,f,g){if(l.default.string(u)&&u.search(" ")!==-1&&(u=u.trim().split(/ +/)),l.default.array(u)){for(var x=0;x<u.length;x++){var A=u[x];this.off(A,f,g)}return this}if(l.default.object(u)){for(var S in u)this.off(S,u[S],f);return this}var C;return(0,da.default)(u,this.scope.actions)?u in this.globalEvents&&(C=this.globalEvents[u].indexOf(f))!==-1&&this.globalEvents[u].splice(C,1):this.scope.events.remove(this.scope.document,u,f,g),this},"The interact.off() method is being deprecated"),c.debug=function(){return this.scope},c.supportsTouch=function(){return P.default.supportsTouch},c.supportsPointerEvent=function(){return P.default.supportsPointerEvent},c.stop=function(){for(var u=0;u<this.scope.interactions.list.length;u++)this.scope.interactions.list[u].stop();return this},c.pointerMoveTolerance=function(u){return l.default.number(u)?(this.scope.interactions.pointerMoveTolerance=u,this):this.scope.interactions.pointerMoveTolerance},c.addDocument=function(u,f){this.scope.addDocument(u,f)},c.removeDocument=function(u){this.scope.removeDocument(u)},c};var zl={};function Wx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Yi(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(zl,"__esModule",{value:!0}),zl.Interactable=void 0;var jx=function(){function s(f,g,x,A){(function(S,C){if(!(S instanceof C))throw new TypeError("Cannot call a class as a function")})(this,s),Yi(this,"options",void 0),Yi(this,"_actions",void 0),Yi(this,"target",void 0),Yi(this,"events",new ua.Eventable),Yi(this,"_context",void 0),Yi(this,"_win",void 0),Yi(this,"_doc",void 0),Yi(this,"_scopeEvents",void 0),Yi(this,"_rectChecker",void 0),this._actions=g.actions,this.target=f,this._context=g.context||x,this._win=(0,i.getWindow)((0,z.trySelector)(f)?this._context:f),this._doc=this._win.document,this._scopeEvents=A,this.set(g)}var c,u;return c=s,(u=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(f,g){return l.default.func(g.onstart)&&this.on("".concat(f,"start"),g.onstart),l.default.func(g.onmove)&&this.on("".concat(f,"move"),g.onmove),l.default.func(g.onend)&&this.on("".concat(f,"end"),g.onend),l.default.func(g.oninertiastart)&&this.on("".concat(f,"inertiastart"),g.oninertiastart),this}},{key:"updatePerActionListeners",value:function(f,g,x){(l.default.array(g)||l.default.object(g))&&this.off(f,g),(l.default.array(x)||l.default.object(x))&&this.on(f,x)}},{key:"setPerAction",value:function(f,g){var x=this._defaults;for(var A in g){var S=A,C=this.options[f],I=g[S];S==="listeners"&&this.updatePerActionListeners(f,C.listeners,I),l.default.array(I)?C[S]=Ye.from(I):l.default.plainObject(I)?(C[S]=(0,j.default)(C[S]||{},(0,Zr.default)(I)),l.default.object(x.perAction[S])&&"enabled"in x.perAction[S]&&(C[S].enabled=I.enabled!==!1)):l.default.bool(I)&&l.default.object(x.perAction[S])?C[S].enabled=I:C[S]=I}}},{key:"getRect",value:function(f){return f=f||(l.default.element(this.target)?this.target:null),l.default.string(this.target)&&(f=f||this._context.querySelector(this.target)),(0,z.getElementRect)(f)}},{key:"rectChecker",value:function(f){var g=this;return l.default.func(f)?(this._rectChecker=f,this.getRect=function(x){var A=(0,j.default)({},g._rectChecker(x));return"width"in A||(A.width=A.right-A.left,A.height=A.bottom-A.top),A},this):f===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(f,g){if((0,z.trySelector)(g)||l.default.object(g)){for(var x in this.options[f]=g,this._actions.map)this.options[x][f]=g;return this}return this.options[f]}},{key:"origin",value:function(f){return this._backCompatOption("origin",f)}},{key:"deltaSource",value:function(f){return f==="page"||f==="client"?(this.options.deltaSource=f,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(f){return this._context===f.ownerDocument||(0,z.nodeContains)(this._context,f)}},{key:"testIgnoreAllow",value:function(f,g,x){return!this.testIgnore(f.ignoreFrom,g,x)&&this.testAllow(f.allowFrom,g,x)}},{key:"testAllow",value:function(f,g,x){return!f||!!l.default.element(x)&&(l.default.string(f)?(0,z.matchesUpTo)(x,f,g):!!l.default.element(f)&&(0,z.nodeContains)(f,x))}},{key:"testIgnore",value:function(f,g,x){return!(!f||!l.default.element(x))&&(l.default.string(f)?(0,z.matchesUpTo)(x,f,g):!!l.default.element(f)&&(0,z.nodeContains)(f,x))}},{key:"fire",value:function(f){return this.events.fire(f),this}},{key:"_onOff",value:function(f,g,x,A){l.default.object(g)&&!l.default.array(g)&&(A=x,x=null);var S=f==="on"?"add":"remove",C=(0,ne.default)(g,x);for(var I in C){I==="wheel"&&(I=P.default.wheelEvent);for(var k=0;k<C[I].length;k++){var V=C[I][k];(0,da.default)(I,this._actions)?this.events[f](I,V):l.default.string(this.target)?this._scopeEvents["".concat(S,"Delegate")](this.target,this._context,I,V,A):this._scopeEvents[S](this.target,I,V,A)}}return this}},{key:"on",value:function(f,g,x){return this._onOff("on",f,g,x)}},{key:"off",value:function(f,g,x){return this._onOff("off",f,g,x)}},{key:"set",value:function(f){var g=this._defaults;for(var x in l.default.object(f)||(f={}),this.options=(0,Zr.default)(g.base),this._actions.methodDict){var A=x,S=this._actions.methodDict[A];this.options[A]={},this.setPerAction(A,(0,j.default)((0,j.default)({},g.perAction),g.actions[A])),this[S](f[A])}for(var C in f)l.default.func(this[C])&&this[C](f[C]);return this}},{key:"unset",value:function(){if(l.default.string(this.target))for(var f in this._scopeEvents.delegatedEvents)for(var g=this._scopeEvents.delegatedEvents[f],x=g.length-1;x>=0;x--){var A=g[x],S=A.selector,C=A.context,I=A.listeners;S===this.target&&C===this._context&&g.splice(x,1);for(var k=I.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,f,I[k][0],I[k][1])}else this._scopeEvents.remove(this.target,"all")}}])&&Wx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();zl.Interactable=jx;var Bl={};function Xx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function of(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.InteractableSet=void 0;var Yx=function(){function s(f){var g=this;(function(x,A){if(!(x instanceof A))throw new TypeError("Cannot call a class as a function")})(this,s),of(this,"list",[]),of(this,"selectorMap",{}),of(this,"scope",void 0),this.scope=f,f.addListeners({"interactable:unset":function(x){var A=x.interactable,S=A.target,C=A._context,I=l.default.string(S)?g.selectorMap[S]:S[g.scope.id],k=Ye.findIndex(I,function(V){return V.context===C});I[k]&&(I[k].context=null,I[k].interactable=null),I.splice(k,1)}})}var c,u;return c=s,(u=[{key:"new",value:function(f,g){g=(0,j.default)(g||{},{actions:this.scope.actions});var x=new this.scope.Interactable(f,g,this.scope.document,this.scope.events),A={context:x._context,interactable:x};return this.scope.addDocument(x._doc),this.list.push(x),l.default.string(f)?(this.selectorMap[f]||(this.selectorMap[f]=[]),this.selectorMap[f].push(A)):(x.target[this.scope.id]||Object.defineProperty(f,this.scope.id,{value:[],configurable:!0}),f[this.scope.id].push(A)),this.scope.fire("interactable:new",{target:f,options:g,interactable:x,win:this.scope._win}),x}},{key:"get",value:function(f,g){var x=g&&g.context||this.scope.document,A=l.default.string(f),S=A?this.selectorMap[f]:f[this.scope.id];if(!S)return null;var C=Ye.find(S,function(I){return I.context===x&&(A||I.interactable.inContext(f))});return C&&C.interactable}},{key:"forEachMatch",value:function(f,g){for(var x=0;x<this.list.length;x++){var A=this.list[x],S=void 0;if((l.default.string(A.target)?l.default.element(f)&&z.matchesSelector(f,A.target):f===A.target)&&A.inContext(f)&&(S=g(A)),S!==void 0)return S}}}])&&Xx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();Bl.InteractableSet=Yx;var Gl={};function qx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function sf(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}function af(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var g=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var x,A,S=[],C=!0,I=!1;try{for(g=g.call(u);!(C=(x=g.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||g.return==null||g.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return sm(u,f);var g=Object.prototype.toString.call(u).slice(8,-1);return g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set"?Array.from(u):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?sm(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function sm(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var $x=function(){function s(f){(function(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),sf(this,"currentTarget",void 0),sf(this,"originalEvent",void 0),sf(this,"type",void 0),this.originalEvent=f,(0,oe.default)(this,f)}var c,u;return c=s,(u=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&qx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();function ha(s){if(!l.default.object(s))return{capture:!!s,passive:!1};var c=(0,j.default)({},s);return c.capture=!!s.capture,c.passive=!!s.passive,c}var Kx={id:"events",install:function(s){var c,u=[],f={},g=[],x={add:A,remove:S,addDelegate:function(k,V,ee,ue,Z){var ye=ha(Z);if(!f[ee]){f[ee]=[];for(var Pe=0;Pe<g.length;Pe++){var _e=g[Pe];A(_e,ee,C),A(_e,ee,I,!0)}}var ke=f[ee],Xe=Ye.find(ke,function(it){return it.selector===k&&it.context===V});Xe||(Xe={selector:k,context:V,listeners:[]},ke.push(Xe)),Xe.listeners.push([ue,ye])},removeDelegate:function(k,V,ee,ue,Z){var ye,Pe=ha(Z),_e=f[ee],ke=!1;if(_e)for(ye=_e.length-1;ye>=0;ye--){var Xe=_e[ye];if(Xe.selector===k&&Xe.context===V){for(var it=Xe.listeners,_t=it.length-1;_t>=0;_t--){var bt=af(it[_t],2),ut=bt[0],wt=bt[1],oi=wt.capture,$i=wt.passive;if(ut===ue&&oi===Pe.capture&&$i===Pe.passive){it.splice(_t,1),it.length||(_e.splice(ye,1),S(V,ee,C),S(V,ee,I,!0)),ke=!0;break}}if(ke)break}}},delegateListener:C,delegateUseCapture:I,delegatedEvents:f,documents:g,targets:u,supportsOptions:!1,supportsPassive:!1};function A(k,V,ee,ue){var Z=ha(ue),ye=Ye.find(u,function(Pe){return Pe.eventTarget===k});ye||(ye={eventTarget:k,events:{}},u.push(ye)),ye.events[V]||(ye.events[V]=[]),k.addEventListener&&!Ye.contains(ye.events[V],ee)&&(k.addEventListener(V,ee,x.supportsOptions?Z:Z.capture),ye.events[V].push(ee))}function S(k,V,ee,ue){var Z=ha(ue),ye=Ye.findIndex(u,function(_t){return _t.eventTarget===k}),Pe=u[ye];if(Pe&&Pe.events)if(V!=="all"){var _e=!1,ke=Pe.events[V];if(ke){if(ee==="all"){for(var Xe=ke.length-1;Xe>=0;Xe--)S(k,V,ke[Xe],Z);return}for(var it=0;it<ke.length;it++)if(ke[it]===ee){k.removeEventListener(V,ee,x.supportsOptions?Z:Z.capture),ke.splice(it,1),ke.length===0&&(delete Pe.events[V],_e=!0);break}}_e&&!Object.keys(Pe.events).length&&u.splice(ye,1)}else for(V in Pe.events)Pe.events.hasOwnProperty(V)&&S(k,V,"all")}function C(k,V){for(var ee=ha(V),ue=new $x(k),Z=f[k.type],ye=af(q.getEventTargets(k),1)[0],Pe=ye;l.default.element(Pe);){for(var _e=0;_e<Z.length;_e++){var ke=Z[_e],Xe=ke.selector,it=ke.context;if(z.matchesSelector(Pe,Xe)&&z.nodeContains(it,ye)&&z.nodeContains(it,Pe)){var _t=ke.listeners;ue.currentTarget=Pe;for(var bt=0;bt<_t.length;bt++){var ut=af(_t[bt],2),wt=ut[0],oi=ut[1],$i=oi.capture,bf=oi.passive;$i===ee.capture&&bf===ee.passive&&wt(ue)}}}Pe=z.parentNode(Pe)}}function I(k){return C(k,!0)}return(c=s.document)==null||c.createElement("div").addEventListener("test",null,{get capture(){return x.supportsOptions=!0},get passive(){return x.supportsPassive=!0}}),s.events=x,x}};Gl.default=Kx;var Vl={};Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var Hl={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var c=0;c<Hl.methodOrder.length;c++){var u;u=Hl.methodOrder[c];var f=Hl[u](s);if(f)return f}return null},simulationResume:function(s){var c=s.pointerType,u=s.eventType,f=s.eventTarget,g=s.scope;if(!/down|start/i.test(u))return null;for(var x=0;x<g.interactions.list.length;x++){var A=g.interactions.list[x],S=f;if(A.simulation&&A.simulation.allowResume&&A.pointerType===c)for(;S;){if(S===A.element)return A;S=z.parentNode(S)}}return null},mouseOrPen:function(s){var c,u=s.pointerId,f=s.pointerType,g=s.eventType,x=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var A=0;A<x.interactions.list.length;A++){var S=x.interactions.list[A];if(S.pointerType===f){if(S.simulation&&!am(S,u))continue;if(S.interacting())return S;c||(c=S)}}if(c)return c;for(var C=0;C<x.interactions.list.length;C++){var I=x.interactions.list[C];if(!(I.pointerType!==f||/down/i.test(g)&&I.simulation))return I}return null},hasPointer:function(s){for(var c=s.pointerId,u=s.scope,f=0;f<u.interactions.list.length;f++){var g=u.interactions.list[f];if(am(g,c))return g}return null},idle:function(s){for(var c=s.pointerType,u=s.scope,f=0;f<u.interactions.list.length;f++){var g=u.interactions.list[f];if(g.pointers.length===1){var x=g.interactable;if(x&&(!x.options.gesture||!x.options.gesture.enabled))continue}else if(g.pointers.length>=2)continue;if(!g.interacting()&&c===g.pointerType)return g}return null}};function am(s,c){return s.pointers.some(function(u){return u.id===c})}var Zx=Hl;Vl.default=Zx;var Wl={};function lf(s){return lf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},lf(s)}function lm(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var g=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var x,A,S=[],C=!0,I=!1;try{for(g=g.call(u);!(C=(x=g.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||g.return==null||g.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return cm(u,f);var g=Object.prototype.toString.call(u).slice(8,-1);return g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set"?Array.from(u):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?cm(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function cm(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}function Qx(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")}function Jx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function cf(s,c){return cf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},cf(s,c)}function eS(s,c){if(c&&(lf(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}(s)}function jl(s){return jl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},jl(s)}Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0;var uf=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function um(s,c){return function(u){var f=c.interactions.list,g=q.getPointerType(u),x=lm(q.getEventTargets(u),2),A=x[0],S=x[1],C=[];if(/^touch/.test(u.type)){c.prevTouchTime=c.now();for(var I=0;I<u.changedTouches.length;I++){var k=u.changedTouches[I],V={pointer:k,pointerId:q.getPointerId(k),pointerType:g,eventType:u.type,eventTarget:A,curEventTarget:S,scope:c},ee=fm(V);C.push([V.pointer,V.eventTarget,V.curEventTarget,ee])}}else{var ue=!1;if(!P.default.supportsPointerEvent&&/mouse/.test(u.type)){for(var Z=0;Z<f.length&&!ue;Z++)ue=f[Z].pointerType!=="mouse"&&f[Z].pointerIsDown;ue=ue||c.now()-c.prevTouchTime<500||u.timeStamp===0}if(!ue){var ye={pointer:u,pointerId:q.getPointerId(u),pointerType:g,eventType:u.type,curEventTarget:S,eventTarget:A,scope:c},Pe=fm(ye);C.push([ye.pointer,ye.eventTarget,ye.curEventTarget,Pe])}}for(var _e=0;_e<C.length;_e++){var ke=lm(C[_e],4),Xe=ke[0],it=ke[1],_t=ke[2];ke[3][s](Xe,u,it,_t)}}}function fm(s){var c=s.pointerType,u=s.scope,f={interaction:Vl.default.search(s),searchDetails:s};return u.fire("interactions:find",f),f.interaction||u.interactions.new({pointerType:c})}function ff(s,c){var u=s.doc,f=s.scope,g=s.options,x=f.interactions.docEvents,A=f.events,S=A[c];for(var C in f.browser.isIOS&&!g.events&&(g.events={passive:!1}),A.delegatedEvents)S(u,C,A.delegateListener),S(u,C,A.delegateUseCapture,!0);for(var I=g&&g.events,k=0;k<x.length;k++){var V=x[k];S(u,V.type,V.listener,I)}}var tS={id:"core/interactions",install:function(s){for(var c={},u=0;u<uf.length;u++){var f=uf[u];c[f]=um(f,s)}var g,x=P.default.pEventTypes;function A(){for(var S=0;S<s.interactions.list.length;S++){var C=s.interactions.list[S];if(C.pointerIsDown&&C.pointerType==="touch"&&!C._interacting)for(var I=function(){var V=C.pointers[k];s.documents.some(function(ee){var ue=ee.doc;return(0,z.nodeContains)(ue,V.downTarget)})||C.removePointer(V.pointer,V.event)},k=0;k<C.pointers.length;k++)I()}}(g=m.default.PointerEvent?[{type:x.down,listener:A},{type:x.down,listener:c.pointerDown},{type:x.move,listener:c.pointerMove},{type:x.up,listener:c.pointerUp},{type:x.cancel,listener:c.pointerUp}]:[{type:"mousedown",listener:c.pointerDown},{type:"mousemove",listener:c.pointerMove},{type:"mouseup",listener:c.pointerUp},{type:"touchstart",listener:A},{type:"touchstart",listener:c.pointerDown},{type:"touchmove",listener:c.pointerMove},{type:"touchend",listener:c.pointerUp},{type:"touchcancel",listener:c.pointerUp}]).push({type:"blur",listener:function(S){for(var C=0;C<s.interactions.list.length;C++)s.interactions.list[C].documentBlur(S)}}),s.prevTouchTime=0,s.Interaction=function(S){(function(Z,ye){if(typeof ye!="function"&&ye!==null)throw new TypeError("Super expression must either be null or a function");Z.prototype=Object.create(ye&&ye.prototype,{constructor:{value:Z,writable:!0,configurable:!0}}),Object.defineProperty(Z,"prototype",{writable:!1}),ye&&cf(Z,ye)})(ue,S);var C,I,k,V,ee=(k=ue,V=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var Z,ye=jl(k);if(V){var Pe=jl(this).constructor;Z=Reflect.construct(ye,arguments,Pe)}else Z=ye.apply(this,arguments);return eS(this,Z)});function ue(){return Qx(this,ue),ee.apply(this,arguments)}return C=ue,(I=[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(Z){s.interactions.pointerMoveTolerance=Z}},{key:"_now",value:function(){return s.now()}}])&&Jx(C.prototype,I),Object.defineProperty(C,"prototype",{writable:!1}),ue}(Fn.default),s.interactions={list:[],new:function(S){S.scopeFire=function(I,k){return s.fire(I,k)};var C=new s.Interaction(S);return s.interactions.list.push(C),C},listeners:c,docEvents:g,pointerMoveTolerance:1},s.usePlugin(vi.default)},listeners:{"scope:add-document":function(s){return ff(s,"add")},"scope:remove-document":function(s){return ff(s,"remove")},"interactable:unset":function(s,c){for(var u=s.interactable,f=c.interactions.list.length-1;f>=0;f--){var g=c.interactions.list[f];g.interactable===u&&(g.stop(),c.fire("interactions:destroy",{interaction:g}),g.destroy(),c.interactions.list.length>2&&c.interactions.list.splice(f,1))}}},onDocSignal:ff,doOnInteractions:um,methodNames:uf},nS=tS;Wl.default=nS;var pa={};function df(s){return df=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},df(s)}function ma(){return ma=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(s,c,u){var f=iS(s,c);if(f){var g=Object.getOwnPropertyDescriptor(f,c);return g.get?g.get.call(arguments.length<3?s:u):g.value}},ma.apply(this,arguments)}function iS(s,c){for(;!Object.prototype.hasOwnProperty.call(s,c)&&(s=_r(s))!==null;);return s}function hf(s,c){return hf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},hf(s,c)}function rS(s,c){if(c&&(df(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}(s)}function _r(s){return _r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},_r(s)}function dm(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")}function hm(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function pm(s,c,u){return c&&hm(s.prototype,c),u&&hm(s,u),Object.defineProperty(s,"prototype",{writable:!1}),s}function pn(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(pa,"__esModule",{value:!0}),pa.Scope=void 0,pa.initScope=mm;var oS=function(){function s(){var c=this;dm(this,s),pn(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),pn(this,"isInitialized",!1),pn(this,"listenerMaps",[]),pn(this,"browser",P.default),pn(this,"defaults",(0,Zr.default)(sa.defaults)),pn(this,"Eventable",ua.Eventable),pn(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),pn(this,"interactStatic",(0,rf.createInteractStatic)(this)),pn(this,"InteractEvent",aa.InteractEvent),pn(this,"Interactable",void 0),pn(this,"interactables",new Bl.InteractableSet(this)),pn(this,"_win",void 0),pn(this,"document",void 0),pn(this,"window",void 0),pn(this,"documents",[]),pn(this,"_plugins",{list:[],map:{}}),pn(this,"onWindowUnload",function(f){return c.removeDocument(f.target)});var u=this;this.Interactable=function(f){(function(C,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(I&&I.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),I&&hf(C,I)})(S,f);var g,x,A=(g=S,x=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var C,I=_r(g);if(x){var k=_r(this).constructor;C=Reflect.construct(I,arguments,k)}else C=I.apply(this,arguments);return rS(this,C)});function S(){return dm(this,S),A.apply(this,arguments)}return pm(S,[{key:"_defaults",get:function(){return u.defaults}},{key:"set",value:function(C){return ma(_r(S.prototype),"set",this).call(this,C),u.fire("interactable:set",{options:C,interactable:this}),this}},{key:"unset",value:function(){ma(_r(S.prototype),"unset",this).call(this);var C=u.interactables.list.indexOf(this);C<0||(ma(_r(S.prototype),"unset",this).call(this),u.interactables.list.splice(C,1),u.fire("interactable:unset",{interactable:this}))}}]),S}(zl.Interactable)}return pm(s,[{key:"addListeners",value:function(c,u){this.listenerMaps.push({id:u,map:c})}},{key:"fire",value:function(c,u){for(var f=0;f<this.listenerMaps.length;f++){var g=this.listenerMaps[f].map[c];if(g&&g(u,this,c)===!1)return!1}}},{key:"init",value:function(c){return this.isInitialized?this:mm(this,c)}},{key:"pluginIsInstalled",value:function(c){return this._plugins.map[c.id]||this._plugins.list.indexOf(c)!==-1}},{key:"usePlugin",value:function(c,u){if(!this.isInitialized)return this;if(this.pluginIsInstalled(c))return this;if(c.id&&(this._plugins.map[c.id]=c),this._plugins.list.push(c),c.install&&c.install(this,u),c.listeners&&c.before){for(var f=0,g=this.listenerMaps.length,x=c.before.reduce(function(S,C){return S[C]=!0,S[vm(C)]=!0,S},{});f<g;f++){var A=this.listenerMaps[f].id;if(x[A]||x[vm(A)])break}this.listenerMaps.splice(f,0,{id:c.id,map:c.listeners})}else c.listeners&&this.listenerMaps.push({id:c.id,map:c.listeners});return this}},{key:"addDocument",value:function(c,u){if(this.getDocIndex(c)!==-1)return!1;var f=i.getWindow(c);u=u?(0,j.default)({},u):{},this.documents.push({doc:c,options:u}),this.events.documents.push(c),c!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:c,window:f,scope:this,options:u})}},{key:"removeDocument",value:function(c){var u=this.getDocIndex(c),f=i.getWindow(c),g=this.documents[u].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(u,1),this.events.documents.splice(u,1),this.fire("scope:remove-document",{doc:c,window:f,scope:this,options:g})}},{key:"getDocIndex",value:function(c){for(var u=0;u<this.documents.length;u++)if(this.documents[u].doc===c)return u;return-1}},{key:"getDocOptions",value:function(c){var u=this.getDocIndex(c);return u===-1?null:this.documents[u].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s}();function mm(s,c){return s.isInitialized=!0,l.default.window(c)&&i.init(c),m.default.init(c),P.default.init(c),Xt.default.init(c),s.window=c,s.document=c.document,s.usePlugin(Wl.default),s.usePlugin(Gl.default),s}function vm(s){return s&&s.replace(/\/.*$/,"")}pa.Scope=oS;var mn={};Object.defineProperty(mn,"__esModule",{value:!0}),mn.default=void 0;var gm=new pa.Scope,sS=gm.interactStatic;mn.default=sS;var aS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;gm.init(aS);var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0,Xl.default=function(){};var Yl={};Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0,Yl.default=function(){};var ql={};function ym(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var g=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var x,A,S=[],C=!0,I=!1;try{for(g=g.call(u);!(C=(x=g.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||g.return==null||g.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return _m(u,f);var g=Object.prototype.toString.call(u).slice(8,-1);return g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set"?Array.from(u):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?_m(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function _m(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}Object.defineProperty(ql,"__esModule",{value:!0}),ql.default=void 0,ql.default=function(s){var c=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(f){var g=ym(f,2),x=g[0],A=g[1];return x in s||A in s}),u=function(f,g){for(var x=s.range,A=s.limits,S=A===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:A,C=s.offset,I=C===void 0?{x:0,y:0}:C,k={range:x,grid:s,x:null,y:null},V=0;V<c.length;V++){var ee=ym(c[V],2),ue=ee[0],Z=ee[1],ye=Math.round((f-I.x)/s[ue]),Pe=Math.round((g-I.y)/s[Z]);k[ue]=Math.max(S.left,Math.min(S.right,ye*s[ue]+I.x)),k[Z]=Math.max(S.top,Math.min(S.bottom,Pe*s[Z]+I.y))}return k};return u.grid=s,u.coordFields=c,u};var va={};Object.defineProperty(va,"__esModule",{value:!0}),Object.defineProperty(va,"edgeTarget",{enumerable:!0,get:function(){return Xl.default}}),Object.defineProperty(va,"elements",{enumerable:!0,get:function(){return Yl.default}}),Object.defineProperty(va,"grid",{enumerable:!0,get:function(){return ql.default}});var $l={};Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var lS={id:"snappers",install:function(s){var c=s.interactStatic;c.snappers=(0,j.default)(c.snappers||{},va),c.createSnapGrid=c.snappers.grid}},cS=lS;$l.default=cS;var Bo={};function xm(s,c){var u=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);c&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(s,g).enumerable})),u.push.apply(u,f)}return u}function pf(s){for(var c=1;c<arguments.length;c++){var u=arguments[c]!=null?arguments[c]:{};c%2?xm(Object(u),!0).forEach(function(f){uS(s,f,u[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(u)):xm(Object(u)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(u,f))})}return s}function uS(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=Bo.aspectRatio=void 0;var Sm={start:function(s){var c=s.state,u=s.rect,f=s.edges,g=s.pageCoords,x=c.options.ratio,A=c.options,S=A.equalDelta,C=A.modifiers;x==="preserve"&&(x=u.width/u.height),c.startCoords=(0,j.default)({},g),c.startRect=(0,j.default)({},u),c.ratio=x,c.equalDelta=S;var I=c.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(c.xIsPrimaryAxis=!(!f.left&&!f.right),c.equalDelta){var k=(I.left?1:-1)*(I.top?1:-1);c.edgeSign={x:k,y:k}}else c.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if((0,j.default)(s.edges,I),C&&C.length){var V=new Qr.default(s.interaction);V.copyFrom(s.interaction.modification),V.prepareStates(C),c.subModification=V,V.startAll(pf({},s))}},set:function(s){var c=s.state,u=s.rect,f=s.coords,g=(0,j.default)({},f),x=c.equalDelta?fS:dS;if(x(c,c.xIsPrimaryAxis,f,u),!c.subModification)return null;var A=(0,j.default)({},u);(0,ce.addEdges)(c.linkedEdges,A,{x:f.x-g.x,y:f.y-g.y});var S=c.subModification.setAll(pf(pf({},s),{},{rect:A,edges:c.linkedEdges,pageCoords:f,prevCoords:f,prevRect:A})),C=S.delta;return S.changed&&(x(c,Math.abs(C.x)>Math.abs(C.y),S.coords,S.rect),(0,j.default)(f,S.coords)),S.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function fS(s,c,u){var f=s.startCoords,g=s.edgeSign;c?u.y=f.y+(u.x-f.x)*g.y:u.x=f.x+(u.y-f.y)*g.x}function dS(s,c,u,f){var g=s.startRect,x=s.startCoords,A=s.ratio,S=s.edgeSign;if(c){var C=f.width/A;u.y=x.y+(C-g.height)*S.y}else{var I=f.height*A;u.x=x.x+(I-g.width)*S.x}}Bo.aspectRatio=Sm;var hS=(0,hn.makeModifier)(Sm,"aspectRatio");Bo.default=hS;var to={};Object.defineProperty(to,"__esModule",{value:!0}),to.default=void 0;var Mm=function(){};Mm._defaults={};var pS=Mm;to.default=pS;var mf={};Object.defineProperty(mf,"__esModule",{value:!0}),Object.defineProperty(mf,"default",{enumerable:!0,get:function(){return to.default}});var Pn={};function vf(s,c,u){return l.default.func(s)?ce.resolveRectLike(s,c.interactable,c.element,[u.x,u.y,c]):ce.resolveRectLike(s,c.interactable,c.element)}Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.default=void 0,Pn.getRestrictionRect=vf,Pn.restrict=void 0;var Em={start:function(s){var c=s.rect,u=s.startOffset,f=s.state,g=s.interaction,x=s.pageCoords,A=f.options,S=A.elementRect,C=(0,j.default)({left:0,top:0,right:0,bottom:0},A.offset||{});if(c&&S){var I=vf(A.restriction,g,x);if(I){var k=I.right-I.left-c.width,V=I.bottom-I.top-c.height;k<0&&(C.left+=k,C.right+=k),V<0&&(C.top+=V,C.bottom+=V)}C.left+=u.left-c.width*S.left,C.top+=u.top-c.height*S.top,C.right+=u.right-c.width*(1-S.right),C.bottom+=u.bottom-c.height*(1-S.bottom)}f.offset=C},set:function(s){var c=s.coords,u=s.interaction,f=s.state,g=f.options,x=f.offset,A=vf(g.restriction,u,c);if(A){var S=ce.xywhToTlbr(A);c.x=Math.max(Math.min(S.right-x.right,c.x),S.left+x.left),c.y=Math.max(Math.min(S.bottom-x.bottom,c.y),S.top+x.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Pn.restrict=Em;var mS=(0,hn.makeModifier)(Em,"restrict");Pn.default=mS;var Ui={};Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.restrictEdges=Ui.default=void 0;var wm={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Tm={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function bm(s,c){for(var u=["top","left","bottom","right"],f=0;f<u.length;f++){var g=u[f];g in s||(s[g]=c[g])}return s}var Cm={noInner:wm,noOuter:Tm,start:function(s){var c,u=s.interaction,f=s.startOffset,g=s.state,x=g.options;if(x){var A=(0,Pn.getRestrictionRect)(x.offset,u,u.coords.start.page);c=ce.rectToXY(A)}c=c||{x:0,y:0},g.offset={top:c.y+f.top,left:c.x+f.left,bottom:c.y-f.bottom,right:c.x-f.right}},set:function(s){var c=s.coords,u=s.edges,f=s.interaction,g=s.state,x=g.offset,A=g.options;if(u){var S=(0,j.default)({},c),C=(0,Pn.getRestrictionRect)(A.inner,f,S)||{},I=(0,Pn.getRestrictionRect)(A.outer,f,S)||{};bm(C,wm),bm(I,Tm),u.top?c.y=Math.min(Math.max(I.top+x.top,S.y),C.top+x.top):u.bottom&&(c.y=Math.max(Math.min(I.bottom+x.bottom,S.y),C.bottom+x.bottom)),u.left?c.x=Math.min(Math.max(I.left+x.left,S.x),C.left+x.left):u.right&&(c.x=Math.max(Math.min(I.right+x.right,S.x),C.right+x.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Ui.restrictEdges=Cm;var vS=(0,hn.makeModifier)(Cm,"restrictEdges");Ui.default=vS;var Go={};Object.defineProperty(Go,"__esModule",{value:!0}),Go.restrictRect=Go.default=void 0;var gS=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},Pn.restrict.defaults),Am={start:Pn.restrict.start,set:Pn.restrict.set,defaults:gS};Go.restrictRect=Am;var yS=(0,hn.makeModifier)(Am,"restrictRect");Go.default=yS;var Vo={};Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.restrictSize=Vo.default=void 0;var _S={width:-1/0,height:-1/0},xS={width:1/0,height:1/0},Pm={start:function(s){return Ui.restrictEdges.start(s)},set:function(s){var c=s.interaction,u=s.state,f=s.rect,g=s.edges,x=u.options;if(g){var A=ce.tlbrToXywh((0,Pn.getRestrictionRect)(x.min,c,s.coords))||_S,S=ce.tlbrToXywh((0,Pn.getRestrictionRect)(x.max,c,s.coords))||xS;u.options={endOnly:x.endOnly,inner:(0,j.default)({},Ui.restrictEdges.noInner),outer:(0,j.default)({},Ui.restrictEdges.noOuter)},g.top?(u.options.inner.top=f.bottom-A.height,u.options.outer.top=f.bottom-S.height):g.bottom&&(u.options.inner.bottom=f.top+A.height,u.options.outer.bottom=f.top+S.height),g.left?(u.options.inner.left=f.right-A.width,u.options.outer.left=f.right-S.width):g.right&&(u.options.inner.right=f.left+A.width,u.options.outer.right=f.left+S.width),Ui.restrictEdges.set(s),u.options=x}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Vo.restrictSize=Pm;var SS=(0,hn.makeModifier)(Pm,"restrictSize");Vo.default=SS;var gf={};Object.defineProperty(gf,"__esModule",{value:!0}),Object.defineProperty(gf,"default",{enumerable:!0,get:function(){return to.default}});var xr={};Object.defineProperty(xr,"__esModule",{value:!0}),xr.snap=xr.default=void 0;var Rm={start:function(s){var c,u=s.interaction,f=s.interactable,g=s.element,x=s.rect,A=s.state,S=s.startOffset,C=A.options,I=C.offsetWithOrigin?function(ee){var ue=ee.interaction.element;return(0,ce.rectToXY)((0,ce.resolveRectLike)(ee.state.options.origin,null,null,[ue]))||(0,J.default)(ee.interactable,ue,ee.interaction.prepared.name)}(s):{x:0,y:0};if(C.offset==="startCoords")c={x:u.coords.start.page.x,y:u.coords.start.page.y};else{var k=(0,ce.resolveRectLike)(C.offset,f,g,[u]);(c=(0,ce.rectToXY)(k)||{x:0,y:0}).x+=I.x,c.y+=I.y}var V=C.relativePoints;A.offsets=x&&V&&V.length?V.map(function(ee,ue){return{index:ue,relativePoint:ee,x:S.left-x.width*ee.x+c.x,y:S.top-x.height*ee.y+c.y}}):[{index:0,relativePoint:null,x:c.x,y:c.y}]},set:function(s){var c=s.interaction,u=s.coords,f=s.state,g=f.options,x=f.offsets,A=(0,J.default)(c.interactable,c.element,c.prepared.name),S=(0,j.default)({},u),C=[];g.offsetWithOrigin||(S.x-=A.x,S.y-=A.y);for(var I=0;I<x.length;I++)for(var k=x[I],V=S.x-k.x,ee=S.y-k.y,ue=0,Z=g.targets.length;ue<Z;ue++){var ye,Pe=g.targets[ue];(ye=l.default.func(Pe)?Pe(V,ee,c._proxy,k,ue):Pe)&&C.push({x:(l.default.number(ye.x)?ye.x:V)+k.x,y:(l.default.number(ye.y)?ye.y:ee)+k.y,range:l.default.number(ye.range)?ye.range:g.range,source:Pe,index:ue,offset:k})}for(var _e={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},ke=0;ke<C.length;ke++){var Xe=C[ke],it=Xe.range,_t=Xe.x-S.x,bt=Xe.y-S.y,ut=(0,ve.default)(_t,bt),wt=ut<=it;it===1/0&&_e.inRange&&_e.range!==1/0&&(wt=!1),_e.target&&!(wt?_e.inRange&&it!==1/0?ut/it<_e.distance/_e.range:it===1/0&&_e.range!==1/0||ut<_e.distance:!_e.inRange&&ut<_e.distance)||(_e.target=Xe,_e.distance=ut,_e.range=it,_e.inRange=wt,_e.delta.x=_t,_e.delta.y=bt)}return _e.inRange&&(u.x=_e.target.x,u.y=_e.target.y),f.closest=_e,_e},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};xr.snap=Rm;var MS=(0,hn.makeModifier)(Rm,"snap");xr.default=MS;var qi={};function Dm(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}Object.defineProperty(qi,"__esModule",{value:!0}),qi.snapSize=qi.default=void 0;var Lm={start:function(s){var c=s.state,u=s.edges,f=c.options;if(!u)return null;s.state={options:{targets:null,relativePoints:[{x:u.left?0:1,y:u.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},c.targetFields=c.targetFields||[["width","height"],["x","y"]],xr.snap.start(s),c.offsets=s.state.offsets,s.state=c},set:function(s){var c,u,f=s.interaction,g=s.state,x=s.coords,A=g.options,S=g.offsets,C={x:x.x-S[0].x,y:x.y-S[0].y};g.options=(0,j.default)({},A),g.options.targets=[];for(var I=0;I<(A.targets||[]).length;I++){var k=(A.targets||[])[I],V=void 0;if(V=l.default.func(k)?k(C.x,C.y,f):k){for(var ee=0;ee<g.targetFields.length;ee++){var ue=(c=g.targetFields[ee],u=2,function(_e){if(Array.isArray(_e))return _e}(c)||function(_e,ke){var Xe=_e==null?null:typeof Symbol<"u"&&_e[Symbol.iterator]||_e["@@iterator"];if(Xe!=null){var it,_t,bt=[],ut=!0,wt=!1;try{for(Xe=Xe.call(_e);!(ut=(it=Xe.next()).done)&&(bt.push(it.value),!ke||bt.length!==ke);ut=!0);}catch(oi){wt=!0,_t=oi}finally{try{ut||Xe.return==null||Xe.return()}finally{if(wt)throw _t}}return bt}}(c,u)||function(_e,ke){if(_e){if(typeof _e=="string")return Dm(_e,ke);var Xe=Object.prototype.toString.call(_e).slice(8,-1);return Xe==="Object"&&_e.constructor&&(Xe=_e.constructor.name),Xe==="Map"||Xe==="Set"?Array.from(_e):Xe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Xe)?Dm(_e,ke):void 0}}(c,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=ue[0],ye=ue[1];if(Z in V||ye in V){V.x=V[Z],V.y=V[ye];break}}g.options.targets.push(V)}}var Pe=xr.snap.set(s);return g.options=A,Pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};qi.snapSize=Lm;var ES=(0,hn.makeModifier)(Lm,"snapSize");qi.default=ES;var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.snapEdges=Ho.default=void 0;var Im={start:function(s){var c=s.edges;return c?(s.state.targetFields=s.state.targetFields||[[c.left?"left":"right",c.top?"top":"bottom"]],qi.snapSize.start(s)):null},set:qi.snapSize.set,defaults:(0,j.default)((0,Zr.default)(qi.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};Ho.snapEdges=Im;var wS=(0,hn.makeModifier)(Im,"snapEdges");Ho.default=wS;var yf={};Object.defineProperty(yf,"__esModule",{value:!0}),Object.defineProperty(yf,"default",{enumerable:!0,get:function(){return to.default}});var _f={};Object.defineProperty(_f,"__esModule",{value:!0}),Object.defineProperty(_f,"default",{enumerable:!0,get:function(){return to.default}});var Wo={};Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.default=void 0;var TS={aspectRatio:Bo.default,restrictEdges:Ui.default,restrict:Pn.default,restrictRect:Go.default,restrictSize:Vo.default,snapEdges:Ho.default,snap:xr.default,snapSize:qi.default,spring:yf.default,avoid:mf.default,transform:_f.default,rubberband:gf.default};Wo.default=TS;var ga={};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=void 0;var bS={id:"modifiers",install:function(s){var c=s.interactStatic;for(var u in s.usePlugin(hn.default),s.usePlugin($l.default),c.modifiers=Wo.default,Wo.default){var f=Wo.default[u],g=f._defaults,x=f._methods;g._methods=x,s.defaults.perAction[u]=g}}},CS=bS;ga.default=CS;var no={};function xf(s){return xf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},xf(s)}function AS(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Sf(s,c){return Sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},Sf(s,c)}function PS(s,c){if(c&&(xf(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mf(s)}function Mf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Kl(s){return Kl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},Kl(s)}Object.defineProperty(no,"__esModule",{value:!0}),no.default=no.PointerEvent=void 0;var RS=function(s){(function(S,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(C&&C.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),C&&Sf(S,C)})(A,s);var c,u,f,g,x=(f=A,g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,C=Kl(f);if(g){var I=Kl(this).constructor;S=Reflect.construct(C,arguments,I)}else S=C.apply(this,arguments);return PS(this,S)});function A(S,C,I,k,V,ee){var ue;if(function(Pe,_e){if(!(Pe instanceof _e))throw new TypeError("Cannot call a class as a function")}(this,A),ue=x.call(this,V),q.pointerExtend(Mf(ue),I),I!==C&&q.pointerExtend(Mf(ue),C),ue.timeStamp=ee,ue.originalEvent=I,ue.type=S,ue.pointerId=q.getPointerId(C),ue.pointerType=q.getPointerType(C),ue.target=k,ue.currentTarget=null,S==="tap"){var Z=V.getPointerIndex(C);ue.dt=ue.timeStamp-V.pointers[Z].downTime;var ye=ue.timeStamp-V.tapTime;ue.double=!!V.prevTap&&V.prevTap.type!=="doubletap"&&V.prevTap.target===ue.target&&ye<500}else S==="doubletap"&&(ue.dt=C.timeStamp-V.tapTime,ue.double=!0);return ue}return c=A,(u=[{key:"_subtractOrigin",value:function(S){var C=S.x,I=S.y;return this.pageX-=C,this.pageY-=I,this.clientX-=C,this.clientY-=I,this}},{key:"_addOrigin",value:function(S){var C=S.x,I=S.y;return this.pageX+=C,this.pageY+=I,this.clientX+=C,this.clientY+=I,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&AS(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),A}(Ge.BaseEvent);no.PointerEvent=no.default=RS;var ya={};Object.defineProperty(ya,"__esModule",{value:!0}),ya.default=void 0;var Zl={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=Zl,s.defaults.actions.pointerEvents=Zl.defaults,(0,j.default)(s.actions.phaselessTypes,Zl.types)},listeners:{"interactions:new":function(s){var c=s.interaction;c.prevTap=null,c.tapTime=0},"interactions:update-pointer":function(s){var c=s.down,u=s.pointerInfo;!c&&u.hold||(u.hold={duration:1/0,timeout:null})},"interactions:move":function(s,c){var u=s.interaction,f=s.pointer,g=s.event,x=s.eventTarget;s.duplicate||u.pointerIsDown&&!u.pointerWasMoved||(u.pointerIsDown&&Ef(s),Sr({interaction:u,pointer:f,event:g,eventTarget:x,type:"move"},c))},"interactions:down":function(s,c){(function(u,f){for(var g=u.interaction,x=u.pointer,A=u.event,S=u.eventTarget,C=u.pointerIndex,I=g.pointers[C].hold,k=z.getPath(S),V={interaction:g,pointer:x,event:A,eventTarget:S,type:"hold",targets:[],path:k,node:null},ee=0;ee<k.length;ee++){var ue=k[ee];V.node=ue,f.fire("pointerEvents:collect-targets",V)}if(V.targets.length){for(var Z=1/0,ye=0;ye<V.targets.length;ye++){var Pe=V.targets[ye].eventable.options.holdDuration;Pe<Z&&(Z=Pe)}I.duration=Z,I.timeout=setTimeout(function(){Sr({interaction:g,eventTarget:S,pointer:x,event:A,type:"hold"},f)},Z)}})(s,c),Sr(s,c)},"interactions:up":function(s,c){Ef(s),Sr(s,c),function(u,f){var g=u.interaction,x=u.pointer,A=u.event,S=u.eventTarget;g.pointerWasMoved||Sr({interaction:g,eventTarget:S,pointer:x,event:A,type:"tap"},f)}(s,c)},"interactions:cancel":function(s,c){Ef(s),Sr(s,c)}},PointerEvent:no.PointerEvent,fire:Sr,collectEventTargets:Um,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Sr(s,c){var u=s.interaction,f=s.pointer,g=s.event,x=s.eventTarget,A=s.type,S=s.targets,C=S===void 0?Um(s,c):S,I=new no.PointerEvent(A,f,g,x,u,c.now());c.fire("pointerEvents:new",{pointerEvent:I});for(var k={interaction:u,pointer:f,event:g,eventTarget:x,targets:C,type:A,pointerEvent:I},V=0;V<C.length;V++){var ee=C[V];for(var ue in ee.props||{})I[ue]=ee.props[ue];var Z=(0,J.default)(ee.eventable,ee.node);if(I._subtractOrigin(Z),I.eventable=ee.eventable,I.currentTarget=ee.node,ee.eventable.fire(I),I._addOrigin(Z),I.immediatePropagationStopped||I.propagationStopped&&V+1<C.length&&C[V+1].node!==I.currentTarget)break}if(c.fire("pointerEvents:fired",k),A==="tap"){var ye=I.double?Sr({interaction:u,pointer:f,event:g,eventTarget:x,type:"doubletap"},c):I;u.prevTap=ye,u.tapTime=ye.timeStamp}return I}function Um(s,c){var u=s.interaction,f=s.pointer,g=s.event,x=s.eventTarget,A=s.type,S=u.getPointerIndex(f),C=u.pointers[S];if(A==="tap"&&(u.pointerWasMoved||!C||C.downTarget!==x))return[];for(var I=z.getPath(x),k={interaction:u,pointer:f,event:g,eventTarget:x,type:A,path:I,targets:[],node:null},V=0;V<I.length;V++){var ee=I[V];k.node=ee,c.fire("pointerEvents:collect-targets",k)}return A==="hold"&&(k.targets=k.targets.filter(function(ue){var Z;return ue.eventable.options.holdDuration===((Z=u.pointers[S])==null?void 0:Z.hold.duration)})),k.targets}function Ef(s){var c=s.interaction,u=s.pointerIndex,f=c.pointers[u].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var DS=Zl;ya.default=DS;var Ql={};function LS(s){var c=s.interaction;c.holdIntervalHandle&&(clearInterval(c.holdIntervalHandle),c.holdIntervalHandle=null)}Object.defineProperty(Ql,"__esModule",{value:!0}),Ql.default=void 0;var IS={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(ya.default);var c=s.pointerEvents;c.defaults.holdRepeatInterval=0,c.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(s,c){return s["pointerEvents:".concat(c)]=LS,s},{"pointerEvents:new":function(s){var c=s.pointerEvent;c.type==="hold"&&(c.count=(c.count||0)+1)},"pointerEvents:fired":function(s,c){var u=s.interaction,f=s.pointerEvent,g=s.eventTarget,x=s.targets;if(f.type==="hold"&&x.length){var A=x[0].eventable.options.holdRepeatInterval;A<=0||(u.holdIntervalHandle=setTimeout(function(){c.pointerEvents.fire({interaction:u,eventTarget:g,type:"hold",pointer:f,event:f},c)},A))}}})},US=IS;Ql.default=US;var Jl={};function OS(s){return(0,j.default)(this.events.options,s),this}Object.defineProperty(Jl,"__esModule",{value:!0}),Jl.default=void 0;var NS={id:"pointer-events/interactableTargets",install:function(s){var c=s.Interactable;c.prototype.pointerEvents=OS;var u=c.prototype._backCompatOption;c.prototype._backCompatOption=function(f,g){var x=u.call(this,f,g);return x===this&&(this.events.options[f]=g),x}},listeners:{"pointerEvents:collect-targets":function(s,c){var u=s.targets,f=s.node,g=s.type,x=s.eventTarget;c.interactables.forEachMatch(f,function(A){var S=A.events,C=S.options;S.types[g]&&S.types[g].length&&A.testIgnoreAllow(C,f,x)&&u.push({node:f,eventable:S,props:{interactable:A}})})},"interactable:new":function(s){var c=s.interactable;c.events.getRect=function(u){return c.getRect(u)}},"interactable:set":function(s,c){var u=s.interactable,f=s.options;(0,j.default)(u.events.options,c.pointerEvents.defaults),(0,j.default)(u.events.options,f.pointerEvents||{})}}},FS=NS;Jl.default=FS;var _a={};Object.defineProperty(_a,"__esModule",{value:!0}),_a.default=void 0;var kS={id:"pointer-events",install:function(s){s.usePlugin(ya),s.usePlugin(Ql.default),s.usePlugin(Jl.default)}},zS=kS;_a.default=zS;var jo={};function Om(s){var c=s.Interactable;s.actions.phases.reflow=!0,c.prototype.reflow=function(u){return function(f,g,x){for(var A=l.default.string(f.target)?Ye.from(f._context.querySelectorAll(f.target)):[f.target],S=x.window.Promise,C=S?[]:null,I=function(){var V=A[k],ee=f.getRect(V);if(!ee)return"break";var ue=Ye.find(x.interactions.list,function(ke){return ke.interacting()&&ke.interactable===f&&ke.element===V&&ke.prepared.name===g.name}),Z=void 0;if(ue)ue.move(),C&&(Z=ue._reflowPromise||new S(function(ke){ue._reflowResolve=ke}));else{var ye=(0,ce.tlbrToXywh)(ee),Pe={page:{x:ye.x,y:ye.y},client:{x:ye.x,y:ye.y},timeStamp:x.now()},_e=q.coordsToEvent(Pe);Z=function(ke,Xe,it,_t,bt){var ut=ke.interactions.new({pointerType:"reflow"}),wt={interaction:ut,event:bt,pointer:bt,eventTarget:it,phase:"reflow"};ut.interactable=Xe,ut.element=it,ut.prevEvent=bt,ut.updatePointer(bt,bt,it,!0),q.setZeroCoords(ut.coords.delta),(0,re.copyAction)(ut.prepared,_t),ut._doPhase(wt);var oi=ke.window.Promise,$i=oi?new oi(function(bf){ut._reflowResolve=bf}):void 0;return ut._reflowPromise=$i,ut.start(_t,Xe,it),ut._interacting?(ut.move(wt),ut.end(bt)):(ut.stop(),ut._reflowResolve()),ut.removePointer(bt,bt),$i}(x,f,V,g,_e)}C&&C.push(Z)},k=0;k<A.length&&I()!=="break";k++);return C&&S.all(C).then(function(){return f})}(this,u,s)}}Object.defineProperty(jo,"__esModule",{value:!0}),jo.default=void 0,jo.install=Om;var BS={id:"reflow",install:Om,listeners:{"interactions:stop":function(s,c){var u=s.interaction;u.pointerType==="reflow"&&(u._reflowResolve&&u._reflowResolve(),Ye.remove(c.interactions.list,u))}}},GS=BS;jo.default=GS;var ri={exports:{}};function wf(s){return wf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},wf(s)}Object.defineProperty(ri.exports,"__esModule",{value:!0}),ri.exports.default=void 0,mn.default.use(vi.default),mn.default.use(yr.default),mn.default.use(_a.default),mn.default.use(eo.default),mn.default.use(ga.default),mn.default.use(Ht.default),mn.default.use(pt.default),mn.default.use(ni.default),mn.default.use(jo.default);var VS=mn.default;if(ri.exports.default=VS,wf(ri)==="object"&&ri)try{ri.exports=mn.default}catch{}mn.default.default=mn.default,pt.default,ni.default,Ht.default,vi.default,Ll.default,eo.default,mn.default,ga.default,yr.default,_a.default,jo.default,ri=ri.exports;var io={exports:{}};function Tf(s){return Tf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Tf(s)}Object.defineProperty(io.exports,"__esModule",{value:!0}),io.exports.default=void 0;var HS=ri.default;if(io.exports.default=HS,Tf(io)==="object"&&io)try{io.exports=ri.default}catch{}return ri.default.default=ri.default,io.exports})})(xx);var VP=xx.exports;const HP=WS(VP),m0={type:"change"},Id={type:"start"},v0={type:"end"};class WP extends No{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yo.ROTATE,MIDDLE:Yo.DOLLY,RIGHT:Yo.PAN},this.touches={ONE:qo.ROTATE,TWO:qo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Mt),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(m0),i.update(),o=r.NONE},this.update=function(){const G=new Y,he=new Io().setFromUnitVectors(e.up,new Y(0,1,0)),ie=he.clone().invert(),Ae=new Y,Ie=new Io,ze=2*Math.PI;return function(){const Fe=i.object.position;G.copy(Fe).sub(i.target),G.applyQuaternion(he),l.setFromVector3(G),i.autoRotate&&o===r.NONE&&R(B()),i.enableDamping?(l.theta+=d.theta*i.dampingFactor,l.phi+=d.phi*i.dampingFactor):(l.theta+=d.theta,l.phi+=d.phi);let qe=i.minAzimuthAngle,et=i.maxAzimuthAngle;return isFinite(qe)&&isFinite(et)&&(qe<-Math.PI?qe+=ze:qe>Math.PI&&(qe-=ze),et<-Math.PI?et+=ze:et>Math.PI&&(et-=ze),qe<=et?l.theta=Math.max(qe,Math.min(et,l.theta)):l.theta=l.theta>(qe+et)/2?Math.max(qe,l.theta):Math.min(et,l.theta)),l.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(i.minDistance,Math.min(i.maxDistance,l.radius)),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),G.setFromSpherical(l),G.applyQuaternion(ie),Fe.copy(i.target).add(G),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0)),h=1,y||Ae.distanceToSquared(i.object.position)>a||8*(1-Ie.dot(i.object.quaternion))>a?(i.dispatchEvent(m0),Ae.copy(i.object.position),Ie.copy(i.object.quaternion),y=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",D),i.domElement.removeEventListener("pointerdown",Je),i.domElement.removeEventListener("pointercancel",Tt),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Mt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,l=new d0,d=new d0;let h=1;const p=new Y;let y=!1;const v=new Ne,_=new Ne,T=new Ne,b=new Ne,E=new Ne,m=new Ne,M=new Ne,w=new Ne,L=new Ne,P=[],U={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function z(){return Math.pow(.95,i.zoomSpeed)}function R(G){d.theta-=G}function N(G){d.phi-=G}const ae=function(){const G=new Y;return function(ie,Ae){G.setFromMatrixColumn(Ae,0),G.multiplyScalar(-ie),p.add(G)}}(),fe=function(){const G=new Y;return function(ie,Ae){i.screenSpacePanning===!0?G.setFromMatrixColumn(Ae,1):(G.setFromMatrixColumn(Ae,0),G.crossVectors(i.object.up,G)),G.multiplyScalar(ie),p.add(G)}}(),$=function(){const G=new Y;return function(ie,Ae){const Ie=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;G.copy(ze).sub(i.target);let De=G.length();De*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*ie*De/Ie.clientHeight,i.object.matrix),fe(2*Ae*De/Ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(ie*(i.object.right-i.object.left)/i.object.zoom/Ie.clientWidth,i.object.matrix),fe(Ae*(i.object.top-i.object.bottom)/i.object.zoom/Ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(G){i.object.isPerspectiveCamera?h/=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*G)),i.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(G){i.object.isPerspectiveCamera?h*=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/G)),i.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(G){v.set(G.clientX,G.clientY)}function pe(G){M.set(G.clientX,G.clientY)}function X(G){b.set(G.clientX,G.clientY)}function J(G){_.set(G.clientX,G.clientY),T.subVectors(_,v).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*T.x/he.clientHeight),N(2*Math.PI*T.y/he.clientHeight),v.copy(_),i.update()}function ne(G){w.set(G.clientX,G.clientY),L.subVectors(w,M),L.y>0?te(z()):L.y<0&&j(z()),M.copy(w),i.update()}function we(G){E.set(G.clientX,G.clientY),m.subVectors(E,b).multiplyScalar(i.panSpeed),$(m.x,m.y),b.copy(E),i.update()}function ve(G){G.deltaY<0?j(z()):G.deltaY>0&&te(z()),i.update()}function oe(G){let he=!1;switch(G.code){case i.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),he=!0;break}he&&(G.preventDefault(),i.update())}function q(){if(P.length===1)v.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);v.set(G,he)}}function Me(){if(P.length===1)b.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);b.set(G,he)}}function Ee(){const G=P[0].pageX-P[1].pageX,he=P[0].pageY-P[1].pageY,ie=Math.sqrt(G*G+he*he);M.set(0,ie)}function H(){i.enableZoom&&Ee(),i.enablePan&&Me()}function Ze(){i.enableZoom&&Ee(),i.enableRotate&&q()}function He(G){if(P.length==1)_.set(G.pageX,G.pageY);else{const ie=be(G),Ae=.5*(G.pageX+ie.x),Ie=.5*(G.pageY+ie.y);_.set(Ae,Ie)}T.subVectors(_,v).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*T.x/he.clientHeight),N(2*Math.PI*T.y/he.clientHeight),v.copy(_)}function Te(G){if(P.length===1)E.set(G.pageX,G.pageY);else{const he=be(G),ie=.5*(G.pageX+he.x),Ae=.5*(G.pageY+he.y);E.set(ie,Ae)}m.subVectors(E,b).multiplyScalar(i.panSpeed),$(m.x,m.y),b.copy(E)}function Ge(G){const he=be(G),ie=G.pageX-he.x,Ae=G.pageY-he.y,Ie=Math.sqrt(ie*ie+Ae*Ae);w.set(0,Ie),L.set(0,Math.pow(w.y/M.y,i.zoomSpeed)),te(L.y),M.copy(w)}function ht(G){i.enableZoom&&Ge(G),i.enablePan&&Te(G)}function Be(G){i.enableZoom&&Ge(G),i.enableRotate&&He(G)}function Je(G){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(G.pointerId),i.domElement.addEventListener("pointermove",Ye),i.domElement.addEventListener("pointerup",Tt)),se(G),G.pointerType==="touch"?jt(G):Ot(G))}function Ye(G){i.enabled!==!1&&(G.pointerType==="touch"?F(G):gt(G))}function Tt(G){me(G),P.length===0&&(i.domElement.releasePointerCapture(G.pointerId),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt)),i.dispatchEvent(v0),o=r.NONE}function Ot(G){let he;switch(G.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Yo.DOLLY:if(i.enableZoom===!1)return;pe(G),o=r.DOLLY;break;case Yo.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enablePan===!1)return;X(G),o=r.PAN}else{if(i.enableRotate===!1)return;ce(G),o=r.ROTATE}break;case Yo.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enableRotate===!1)return;ce(G),o=r.ROTATE}else{if(i.enablePan===!1)return;X(G),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Id)}function gt(G){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;J(G);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(G);break;case r.PAN:if(i.enablePan===!1)return;we(G);break}}function lt(G){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(G.preventDefault(),i.dispatchEvent(Id),ve(G),i.dispatchEvent(v0))}function Mt(G){i.enabled===!1||i.enablePan===!1||oe(G)}function jt(G){switch(xe(G),P.length){case 1:switch(i.touches.ONE){case qo.ROTATE:if(i.enableRotate===!1)return;q(),o=r.TOUCH_ROTATE;break;case qo.PAN:if(i.enablePan===!1)return;Me(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case qo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(),o=r.TOUCH_DOLLY_PAN;break;case qo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ze(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Id)}function F(G){switch(xe(G),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;He(G),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(G),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ht(G),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(G),i.update();break;default:o=r.NONE}}function D(G){i.enabled!==!1&&G.preventDefault()}function se(G){P.push(G)}function me(G){delete U[G.pointerId];for(let he=0;he<P.length;he++)if(P[he].pointerId==G.pointerId){P.splice(he,1);return}}function xe(G){let he=U[G.pointerId];he===void 0&&(he=new Ne,U[G.pointerId]=he),he.set(G.pageX,G.pageY)}function be(G){const he=G.pointerId===P[0].pointerId?P[1]:P[0];return U[he.pointerId]}i.domElement.addEventListener("contextmenu",D),i.domElement.addEventListener("pointerdown",Je),i.domElement.addEventListener("pointercancel",Tt),i.domElement.addEventListener("wheel",lt,{passive:!1}),this.update()}}class qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const jP=new Yu(-1,1,1,-1,0,1),Yp=new mi;Yp.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3));Yp.setAttribute("uv",new dn([0,2,0,0,2,0],2));class Zu{constructor(e){this._mesh=new Ln(Yp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jP)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const XP={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class YP extends qr{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,o=i.aspect!==void 0?i.aspect:n.aspect,a=i.aperture!==void 0?i.aperture:.025,l=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new en(1,1,{minFilter:Qt,magFilter:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new pr,this.materialDepth.depthPacking=Js,this.materialDepth.blending=cn;const d=XP,h=Bn.clone(d.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=r,h.aspect.value=o,h.aperture.value=a,h.maxblur.value=l,h.nearClip.value=n.near,h.farClip.value=n.far,this.materialBokeh=new Lt({defines:Object.assign({},d.defines),uniforms:h,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new Zu(this.materialBokeh),this._oldClearColor=new Ke}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,n){this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Ka={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Fh extends qr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bn.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zu(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class g0 extends qr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class qP extends qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $P{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ne);this._width=i.width,this._height=i.height,n=new en(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fh(Ka),this.clock=new gP}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const l=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}g0!==void 0&&(a instanceof g0?i=!0:a instanceof qP&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class KP extends qr{constructor(e,n,i,r,o){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const zc={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ne(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Vt},cameraInverseProjectionMatrix:{value:new Vt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},Cr={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Ne(512,512)},sampleUvOffsets:{value:[new Ne(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},Cu={createSampleWeights:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(ZP(i,e));return n},createSampleOffsets:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(e.clone().multiplyScalar(i));return n},configure:function(t,e,n,i){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=Cu.createSampleOffsets(e,i),t.uniforms.sampleWeights.value=Cu.createSampleWeights(e,n),t.needsUpdate=!0}};function ZP(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Ud={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class kh extends qr{constructor(e,n,i=!1,r=!1,o=new Ne(256,256)){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Ke,this._oldClearColor=new Ke,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ne(o.x,o.y),this.saoRenderTarget=new en(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new en(this.resolution.x,this.resolution.y,{minFilter:Qt,magFilter:Qt}),this.depthRenderTarget=this.normalRenderTarget.clone();let a;this.supportsDepthTextureExtension&&(a=new sx,a.type=Fp,this.beautyRenderTarget.depthTexture=a,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new pr,this.depthMaterial.depthPacking=Js,this.depthMaterial.blending=cn,this.normalMaterial=new cx,this.normalMaterial.blending=cn,this.saoMaterial=new Lt({defines:Object.assign({},zc.defines),fragmentShader:zc.fragmentShader,vertexShader:zc.vertexShader,uniforms:Bn.clone(zc.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?a:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=cn,this.vBlurMaterial=new Lt({uniforms:Bn.clone(Cr.uniforms),defines:Object.assign({},Cr.defines),vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?a:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=cn,this.hBlurMaterial=new Lt({uniforms:Bn.clone(Cr.uniforms),defines:Object.assign({},Cr.defines),vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?a:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=cn,this.materialCopy=new Lt({uniforms:Bn.clone(Ka.uniforms),vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader,blending:cn}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=pl,this.materialCopy.blendSrc=z_,this.materialCopy.blendDst=Dh,this.materialCopy.blendEquation=sr,this.materialCopy.blendSrcAlpha=k_,this.materialCopy.blendDstAlpha=Dh,this.materialCopy.blendEquationAlpha=sr,this.depthCopy=new Lt({uniforms:Bn.clone(Ud.uniforms),vertexShader:Ud.vertexShader,fragmentShader:Ud.fragmentShader,blending:cn}),this.fsQuad=new Zu(null)}render(e,n,i){if(this.renderToScreen&&(this.materialCopy.blending=cn,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Cu.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(0,1)),Cu.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let a=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,a=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?a.blending=pl:a.blending=cn,this.renderPass(e,a,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,n,i,r,o){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,n,i,r,o){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,o=n.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,n){this.beautyRenderTarget.setSize(e,n),this.saoRenderTarget.setSize(e,n),this.blurIntermediateRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.depthRenderTarget.setSize(e,n),this.saoMaterial.uniforms.size.value.set(e,n),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,n),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,n),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}kh.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const QP={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $s extends qr{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(o,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let y=0;y<this.nMips;y++){const v=new en(o,a);v.texture.name="UnrealBloomPass.h"+y,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new en(o,a);_.texture.name="UnrealBloomPass.v"+y,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),o=Math.round(o/2),a=Math.round(a/2)}const l=QP;this.highPassUniforms=Bn.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let y=0;y<this.nMips;y++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[y])),this.separableBlurMaterials[y].uniforms.texSize.value=new Ne(o,a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const p=Ka;this.copyUniforms=Bn.clone(p.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,blending:Rh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ke,this.oldClearAlpha=1,this.basic=new To,this.fsQuad=new Zu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Ne(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[d].uniforms.direction.value=$s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=$s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}$s.BlurDirectionX=new Ne(1,0);$s.BlurDirectionY=new Ne(0,1);const JP={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},eR={uniforms:{tDiffuse:{value:null},resolution:{value:new Ne}},vertexShader:`

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

		}`},tR=Math.PI/180;function nR(t){return t*tR}const iR={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},rR={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new Y}},vertexShader:`

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

		}`},oR={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},sR={uniforms:{vSunPositionScreenSpace:{value:new Y},fAspect:{value:1},sunColor:{value:new Ke(16772608)},bgColor:{value:new Ke(0)}},vertexShader:`

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

		}`};class aR extends qr{constructor(e,n,i={}){super(),this.scene=e,this.camera=n,this.orthoScene=new lx,this.orthoCamera=new Yu(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new Dt,this.sunPosition=i.sunPosition||new Y(0,1e3,1e3),this.screenSpacePosition=new Y,this.rtTextureDepth=new en(1,1),this.rtTextureDepthMask=new en(1,1),this.rtTextureGodRays1=new en(1,1),this.rtTextureGodRays2=new en(1,1),this.materialDepth=new pr;const r=iR;this.godrayMaskUniforms=Bn.clone(r.uniforms),this.materialGodraysDepthMask=new Lt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=rR;this.godrayGenUniforms=Bn.clone(o.uniforms),this.materialGodraysGenerate=new Lt({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const a=oR;this.godrayCombineUniforms=Bn.clone(a.uniforms),this.materialGodraysCombine=new Lt({uniforms:this.godrayCombineUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader});const l=sR;this.godraysFakeSunUniforms=Bn.clone(l.uniforms),this.materialGodraysFakeSun=new Lt({uniforms:this.godraysFakeSunUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Ln(new Al(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,n,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=n,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,n,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(n),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,n){this.rtTextureDepth.setSize(e,n),this.rtTextureDepthMask.setSize(e,n);const i=e*this.multiplier,r=n*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var Sx=`/* BEGIN HEADER */
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
attribute vec2 instancePosition;
attribute vec2 instanceTarget;
attribute vec2 instanceCentroid;
#elif DIMENSIONS == 3
attribute vec3 instancePosition;
attribute vec3 instanceTarget;
attribute vec3 instanceCentroid;
#elif DIMENSIONS == 4
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

const float radial = 8.;
const float TAU = 6.28318530717958647692528676655900576;
const float EPS = .001;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  

  #if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor.rgb = instanceColor.rgb;
  #endif

  #if DIMENSIONS == 2
  vec2 pos;
  vec2 next;
  vec2 other;
  #elif DIMENSIONS == 3
  vec3 pos;
  vec3 next;
  vec3 other;
  #elif DIMENSIONS == 4
  vec4 pos;
  vec4 next;
  vec4 other;
  #elif DIMENSIONS == 5
  vec5 pos;
  vec5 next;
  vec5 other;
  vec5 instancePosition = fromMat(instancePosition);
  vec5 instanceTarget = fromMat(instanceTarget);
  vec5 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 6
  vec6 pos;
  vec6 next;
  vec6 other;
  vec6 instancePosition = fromMat(instancePosition);
  vec6 instanceTarget = fromMat(instanceTarget);
  vec6 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 7
  vec7 pos;
  vec7 next;
  vec7 other;
  vec7 instancePosition = fromMat(instancePosition);
  vec7 instanceTarget = fromMat(instanceTarget);
  vec7 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 8
  vec8 pos;
  vec8 next;
  vec8 other;
  vec8 instancePosition = fromMat(instancePosition);
  vec8 instanceTarget = fromMat(instanceTarget);
  vec8 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 9
  vec9 pos;
  vec9 next;
  vec9 other;
  vec9 instancePosition = fromMat(instancePosition);
  vec9 instanceTarget = fromMat(instanceTarget);
  vec9 instanceCentroid = fromMat(instanceCentroid);
  #endif

  vec3 norm;
  
  vec3 transformed;
  float vid = float(gl_VertexID);

  if(!nan(instanceCentroid)) {
    pos = trix(instanceCentroid, instancePosition, instanceTarget, uv);
    next = trix(instanceCentroid, instancePosition, instanceTarget, uv + vec2(EPS, 0.));
    other = trix(instanceCentroid, instancePosition, instanceTarget, uv + vec2(0., EPS));

    if(length(uv) != 0. || segments > 1.) {
      pos = xnormalize(pos);
      next = xnormalize(next);
      other = xnormalize(other);
    }
    transformed = xproject(pos);
    vec3 n = xproject(next);
    vec3 o = xproject(other);
    norm = cross(n - transformed, o - transformed);
  } else if(!nan(instanceTarget)) {

    float h = floor(vid / (radial + 1.)) / (segments);
    float r = mod(vid, radial + 1.) / (radial);

    pos = mix(instancePosition, instanceTarget, h);
    next = mix(instancePosition, instanceTarget, h + EPS);

  
  

  
  

  
  
  
  
  
  

  
    pos = xnormalize(pos);
    next = xnormalize(next);

    transformed = xproject(pos);
    vec3 n = xproject(next) + NOISE; 
    vec3 k = normalize(transformed - n); 

    
    
    vec3 v = normalize(cross(n, transformed));
    norm = v * cos(r * TAU) + cross(k, v) * sin(r * TAU);
    norm = normalize(norm);
    float sizeFactor = .001 * edgeThickness;
    transformed += sizeFactor * norm / len(pos);

  } else {
    pos = instancePosition;
    transformed = xproject(pos);
    norm = normal;
    float sizeFactor = .001 * vertexThickness;
    transformed += sizeFactor * norm / len(pos);
  }

  
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}`,lR=`/* BEGIN INCLUDE */

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
  return v / (sqrt(abs(xdot(v))));
}

vec3 xnormalize(in vec3 v) {
  if(curvature == 0.0) {
    return v;
  }
  return v / (sqrt(abs(xdot(v))));
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  return v / (sqrt(abs(xdot(v))));
}

#if DIMENSIONS == 5
vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  float n = sqrt(abs(xdot(v)));
  return vec5(v.v / n, v.u / n);
}
#elif DIMENSIONS == 6
vec6 xnormalize(in vec6 v) {
  if(curvature == 0.0) {
    return v;
  }
  float n = sqrt(abs(xdot(v)));
  return vec6(v.v / n, v.u / n);
}
#elif DIMENSIONS == 7
vec7 xnormalize(in vec7 v) {
  if(curvature == 0.0) {
    return v;
  }
  float n = sqrt(abs(xdot(v)));
  return vec7(v.v / n, v.u / n);
}
#elif DIMENSIONS == 8
vec8 xnormalize(in vec8 v) {
  if(curvature == 0.0) {
    return v;
  }
  float n = sqrt(abs(xdot(v)));
  return vec8(v.v / n, v.u / n);
}
#elif DIMENSIONS == 9
vec9 xnormalize(in vec9 v) {
  if(curvature == 0.0) {
    return v;
  }
  float n = sqrt(abs(xdot(v)));
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
  return vec3(v.xy / (curvature + v.z), 1.);
  #elif PROJECTION == 4 
  return vec3(v.xy / v.z, 1. / v.z);
  #elif PROJECTION == 5 
  v.xy /= v.z;
  v.z = 1. / v.z;

  v.xz *= 2. / (1. + v.y);
  v.y = 1.;
  return v.xzy;
  #endif

  return v.xyz;
}

#if DIMENSIONS >= 4
vec3 xproject(in vec4 v) {
  #if PROJECTION == 0 
  return v.xyz / (v.w * fov4 - curvature);
  #elif PROJECTION == 1 
  return v.xyz;
  #elif PROJECTION == 2 
  return v.xyz / (v.w * fov4);
  #elif PROJECTION == 3 
  return v.xyz / (v.w * fov4 + curvature);
  #elif PROJECTION == 4 
  return v.xyz;
  #elif PROJECTION == 5 
  v.xyz /= v.w;
  v.w = 1. / v.w;

  v.xyw *= 2. / (1. + v.z);
  v.w -= 1.;
  return v.xwy;
  #endif
}
#endif

#if DIMENSIONS >= 5
vec3 xproject(in vec5 v) {
  #if PROJECTION == 0 
  return xproject(v.v / (v.u * fov5 - curvature));
  #elif PROJECTION == 1 
  return xproject(v.v);
  #elif PROJECTION == 2 
  return xproject(v.v / (v.u * fov5));
  #elif PROJECTION == 3 
  return xproject(v.v / (v.u * fov5 + curvature));
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
  float nr = v.u.y * fov6 - curvature;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 1 
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 2 
  float nr = v.u.y * fov6;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 3 
  float nr = v.u.y * fov6 - curvature;
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
  float nr = v.u.z * fov7 - curvature;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 1 
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 2 
  float nr = v.u.z * fov7;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 3 
  float nr = v.u.z * fov7 - curvature;
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
  float nr = v.u.w * fov8 - curvature;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 1 
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 2 
  float nr = v.u.w * fov8;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 3 
  float nr = v.u.w * fov8 - curvature;
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
  float nr = v.t * fov9 - curvature;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 1 
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 2 
  float nr = v.t * fov9;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 3 
  float nr = v.t * fov9 - curvature;
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
/* END INCLUDE */`;const cR=Sx.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],y0=Sx.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],uR=lR.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],En=(t,e)=>{t=t.clone(),t.vertexColors=![pr,Lt,cx,Ys].find(n=>t instanceof n),t._rt=e,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let n=4;n<=e.dimensions;n++)t.uniforms[`fov${n}`]={value:90};return t.onBeforeCompile=n=>{const{dimensions:i,projection:r}=t._rt,o=[`#define DIMENSIONS ${i}`,`#define PROJECTION ${vx.indexOf(r)}`];Object.assign(n.uniforms,t.uniforms),t instanceof To?n.vertexShader=n.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof pr||t instanceof Ys?n.vertexShader=n.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof Lt&&(n.vertexShader=n.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",y0+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),n.vertexShader=[...o,cR,uR,n.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",y0)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}`,t},fR=()=>{const t=new ax;t.autoClear=!1,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const e=new zn(90,window.innerWidth/window.innerHeight,.01,100);e.position.set(0,0,-1),e.up.set(0,1,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const n=new lx;e.updateProjectionMatrix(),n.add(e);const i=new WP(e,t.domElement);i.target.set(0,0,0),i.minDistance=0,i.maxDistance=100,i.addEventListener("change",()=>r.render()),i.update(),i.enabled=!1,t.domElement.addEventListener("dblclick",()=>{i.position0.set(0,0,i.position0.z===-1?-.25:i.position0.z===-.25?-10:-1,0,0),i.reset()});const r=new $P(t);r.setPixelRatio(window.devicePixelRatio);const o=new KP(n,e);return r.addPass(o),{composer:r,camera:e,scene:n,orbitControls:i}},_0=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=ji[t.ambiance],{dimensions:i}=t,r=new $u(1,32,32),o=new Hp().copy(r),a=i>4?9:i;o.setAttribute("instancePosition",new fi(new Float32Array(t.maxVertices*a),a)),o.setAttribute("instanceTarget",new fi(new Float32Array(t.maxVertices*a),a)),o.setAttribute("instanceCentroid",new fi(new Float32Array(t.maxVertices*a),a)),o.setAttribute("instanceColor",new fi(new Float32Array(t.maxVertices*3),3));const l=new Ln(o,En(n.vertexMaterial,t));o.attributes.instanceTarget.array.fill(NaN),o.attributes.instanceCentroid.array.fill(NaN),l.geometry.instanceCount=0,l.frustumCulled=!1,l.customDepthMaterial=En(new pr({depthPacking:Js}),t),l.customDistanceMaterial=En(new Ys,t),l.castShadow=n.shadow,l.name="instanced-vertex",l.visible=t.showVertices,t.scene.add(l)},x0=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=ji[t.ambiance],{dimensions:i,curve:r,segments:o}=t,a=r?o:1,l=new Gp(1,1,1,8,a,!0),d=new Hp().copy(l),h=i>4?9:i;d.setAttribute("instancePosition",new fi(new Float32Array(t.maxEdges*h),h)),d.setAttribute("instanceTarget",new fi(new Float32Array(t.maxEdges*h),h)),d.setAttribute("instanceCentroid",new fi(new Float32Array(t.maxEdges*h),h)),d.setAttribute("instanceColor",new fi(new Float32Array(t.maxEdges*3),3));const p=new Ln(d,En(n.edgeMaterial,t));d.attributes.instanceCentroid.array.fill(NaN),p.geometry.instanceCount=0,p.frustumCulled=!1,p.customDepthMaterial=En(new pr({depthPacking:Js}),t),p.customDistanceMaterial=En(new Ys,t),p.castShadow=n.shadow,p.name="instanced-edge",p.visible=t.showEdges,t.scene.add(p)},dR=t=>{let e=t.scene.getObjectByName("instanced-face");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=ji[t.ambiance],{dimensions:i,curve:r,segments:o}=t,a=new mi,l=[],d=[],h=[],p=[],y=r?o:1,v=1/y;for(let E=0;E<y+1;E++)for(let m=0;m<E+1;m++)d.push((2*m-E)*v/2,E*v,0),h.push(0,0,1),p.push(v*m,1-v*E);for(let E=1;E<y+1;E++)for(let m=0;m<E;m++){const M=E*(E+1)/2+m,w=E*(E-1)/2+m;if(l.push(w,M,M+1),E<y){const L=(E+1)*(E+2)/2+m;l.push(L+1,M+1,M)}}a.setIndex(l),a.setAttribute("position",new dn(d,3)),a.setAttribute("normal",new dn(h,3)),a.setAttribute("uv",new dn(p,2));const _=new Hp().copy(a),T=i>4?9:i;_.setAttribute("instanceCentroid",new fi(new Float32Array(t.maxFaces*T),T)),_.setAttribute("instancePosition",new fi(new Float32Array(t.maxFaces*T),T)),_.setAttribute("instanceTarget",new fi(new Float32Array(t.maxFaces*T),T)),_.setAttribute("instanceColor",new fi(new Float32Array(t.maxFaces*3),3));const b=new Ln(_,En(n.faceMaterial,t));b.geometry.instanceCount=0,b.frustumCulled=!1,b.customDepthMaterial=En(new pr({depthPacking:Js}),t),b.customDistanceMaterial=En(new Ys,t),b.name="instanced-face",b.visible=t.showFaces,b.renderOrder=1,t.scene.add(b)},hR=(t,e=null)=>{const n=ji[t.ambiance],i=t.scene.getObjectByName("instanced-vertex"),r=i.geometry.attributes.instancePosition.array,{dimensions:o}=t;let a=e?e[0]:0,l=e?e[1]:t.vertices.length;const d=o>4?9:o;i.geometry.instanceCount=l;for(let h=a;h<l;h++){const p=t.vertices[h];for(let _=0;_<o;_++)r[h*d+_]=p.vertex[_];const y=i.geometry.attributes.instanceColor.array,v=n.color(p,"vertex",o);y[h*3+0]=v.r,y[h*3+1]=v.g,y[h*3+2]=v.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},pR=(t,e=null)=>{const n=ji[t.ambiance],i=t.scene.getObjectByName("instanced-edge"),r=i.geometry.attributes.instancePosition.array,o=i.geometry.attributes.instanceTarget.array,{dimensions:a}=t;let l=e?e[0]:0,d=e?e[1]:t.edges.length;const h=a>4?9:a;i.geometry.instanceCount=d;for(let p=l;p<d;p++){const y=t.edges[p],v=t.vertices[y.start].vertex,_=t.vertices[y.end].vertex;for(let E=0;E<a;E++)r[p*h+E]=v[E],o[p*h+E]=_[E];const T=i.geometry.attributes.instanceColor.array,b=n.color(y,"edge",a);T[p*3+0]=b.r,T[p*3+1]=b.g,T[p*3+2]=b.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},mR=(t,e=null)=>{const n=ji[t.ambiance],i=t.scene.getObjectByName("instanced-face"),r=i.geometry.attributes.instanceCentroid.array,o=i.geometry.attributes.instancePosition.array,a=i.geometry.attributes.instanceTarget.array,{dimensions:l}=t;let d=e?e[0]:0,h=e?e[1]:t.faces.length,p=0;for(let v=0;v<d;v++){const _=t.faces[v].vertices.length;p+=_===3?1:_}const y=l>4?9:l;for(let v=d;v<h;v++){const _=t.faces[v];if(_.vertices.length<3)continue;let T=[];if(_.vertices.length===3)T.push(_.vertices.map(b=>t.vertices[b].vertex));else{const b=new Array(l).fill(0);for(let E=0;E<_.vertices.length;E++){const m=t.vertices[_.vertices[E]].vertex;for(let M=0;M<l;M++)b[M]+=m[M]}for(let E=0;E<l;E++)b[E]/=_.vertices.length;for(let E=0;E<_.vertices.length;E++)T.push([b,t.vertices[_.vertices[E]].vertex,t.vertices[_.vertices[(E+1)%_.vertices.length]].vertex])}for(let b=0;b<T.length;b++){let[E,m,M]=T[b];_.word.length%2===(t.curvature>0?0:1)&&([m,M]=[M,m]);for(let P=0;P<l;P++)r[p*y+P]=E[P],o[p*y+P]=m[P],a[p*y+P]=M[P];const w=i.geometry.attributes.instanceColor.array,L=n.color(_,"face",l);w[p*3+0]=L.r,w[p*3+1]=L.g,w[p*3+2]=L.b,p++}}i.geometry.instanceCount=p,i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceCentroid.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},Od=(t,e)=>{const n=t.scene.getObjectByName(`instanced-${e}`);n.visible=t[e==="vertex"?"showVertices":e==="edge"?"showEdges":"showFaces"]},bs=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const n=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]],faces:[t.ranges[0].faces[0],t.ranges[t.currentOrder-1].faces[1]]};t.scene.getObjectByName("instanced-vertex").visible&&hR(t,n.vertices),t.scene.getObjectByName("instanced-edge").visible&&pR(t,n.edges),t.scene.getObjectByName("instanced-face").visible&&mR(t,n.faces),t.composer.render(),document.title=`Honeyball^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges, ${t.faces.length} faces`},vR=(t,e,n)=>{e.fov=n,e.updateProjectionMatrix(),t.render()},gR=(t,e,n)=>{const i=t.renderer.getDrawingBufferSize(new Ne),r=new en(i.width,i.height,{samples:e?n:0});t.reset(r),t.render()},yR=t=>{const e=ji[t.ambiance],{scene:n,composer:i,camera:r}=t,o=t.scene.getObjectByName("instanced-vertex"),a=t.scene.getObjectByName("instanced-edge"),l=t.scene.getObjectByName("instanced-face");o.material=En(e.vertexMaterial,t),a.material=En(e.edgeMaterial,t),l.material=En(e.faceMaterial,t),e.env?n.environment=e.env:n.environment=null,typeof e.background!="number"?n.background=e.background:(n.background=null,i.renderer.setClearColor(new Ke(e.background),1));const d=[];n.traverse(v=>{v.isLight&&d.push(v)}),d.forEach(v=>{v.parent.remove(v)});let h=n.getObjectByName("ground");h&&(h.geometry.dispose(),h.material.dispose(),n.remove(h)),e.shadow&&(i.renderer.shadowMap.type=Up,e.ground==="sphere"?h=new Ln(new $u(20,32,32),new Ts({color:16777215,side:Un,depthWrite:!1})):e.ground==="plane"&&(h=new Ln(new Al(1e3,1e3),new Ts({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),h.rotation.x=-Math.PI/2,h.position.y=-3),h.name="ground",h.receiveShadow=!0,n.add(h)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=F_,o.castShadow=e.shadow,a.castShadow=e.shadow;const p=e.shadow?v=>{v.shadow&&(v.castShadow=!0,v.shadow.mapSize.width=2048,v.shadow.mapSize.height=2048,v.shadow.camera.near=r.near,v.shadow.camera.far=r.far,v.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(v=>{p(v),n.add(v)}),(e.cameraLights||[]).forEach(v=>{p(v),r.add(v)});const y=e.fx||["copy"];i.renderer.toneMapping=y.includes("bloom")?B_:Hi,i.renderer.toneMappingExposure=y.includes("bloom")?1.5:1,i.passes.slice(1).forEach(v=>{i.removePass(v),v.dispose()}),y.forEach(v=>{if(v==="copy")i.addPass(i.copyPass);else if(v==="sao"){const _=new kh(n,r,!1,!0);_.depthMaterial=En(_.depthMaterial,t),_.normalMaterial=En(_.normalMaterial,t),_.params.output=kh.OUTPUT.Default,_.params.saoBias=-.5,_.params.saoIntensity=.175,_.params.saoScale=10,_.params.saoKernelRadius=50,_.params.saoMinResolution=0,_.params.saoBlur=!0,_.params.saoBlurRadius=8,_.params.saoBlurStdDev=4,_.params.saoBlurDepthCutoff=.01,i.addPass(_)}else if(v==="bokeh"){const _=new YP(n,r,{focus:.5,aperture:.005,maxblur:.005});_.materialDepth=En(_.materialDepth,t),i.addPass(_)}else if(v==="sobel"){const _=new Fh(JP);i.addPass(_);const T=new Fh(eR);T.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,T.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(T)}else if(v==="bloom"){const _=new $s(new Ne(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(_),l.material.opacity=.025}else if(v==="godray"){const _=new aR(n,r);_.materialDepth=En(_.materialDepth,t),i.addPass(_)}}),Mx(t),i.render()},Mx=t=>{const{composer:e,scene:n,dimensions:i,curvature:r,projection:o,vertexThickness:a,edgeThickness:l}=t,d=t.curve?t.segments:1,h=n.getObjectByName("instanced-vertex"),p=n.getObjectByName("instanced-edge"),y=n.getObjectByName("instanced-face"),v=_=>{if(_!=null&&_._rt){_.uniforms.curvature.value=r,_.uniforms.vertexThickness.value=a,_.uniforms.edgeThickness.value=l,_.needsUpdate=i!==_._rt.dimensions||o!==_._rt.projection,_._rt=t,_.uniforms.segments.value=d;for(let T=4;T<=i;T++)_.uniforms[`fov${T}`]||(_.uniforms[`fov${T}`]={value:1}),_.uniforms[`fov${T}`].value=AP(nR(t[`fov${T}`])*.5)}};v(h.material),v(p.material),v(y.material),e.passes.forEach(_=>Object.values(_).filter(T=>T==null?void 0:T.isMaterial).forEach(T=>v(T))),v(h.customDepthMaterial),v(h.customDistanceMaterial),v(p.customDepthMaterial),v(p.customDistanceMaterial),v(y.customDepthMaterial),v(y.customDistanceMaterial)},ho=(t,e,n)=>{for(let i=0;i<e.length;i++){const{vertex:r}=e[i];hx(r,t,n)}},yl=(t,e,n)=>{for(let i=0;i<e.length;i++){const{vertex:r}=e[i];EP(r,t)}},_l=(t,e,n)=>{for(let i=0;i<e.length;i++){const{vertex:r}=e[i];wP(r,t,n)}},_R=(t,e,n,i,r)=>{const o=window.innerWidth/2,a=window.innerHeight/2,l=Math.min(o,a)*.9;if(t.ctrlKey)yl(-t.dx/(2*l),n),_l(-t.dy/(2*l),n,i);else{const d=-t.dx/o,h=-t.dy/a,p=new Array(e).fill(0);!r&&t.shiftKey?r=1:!r&&t.altKey?r=2:!r&&t.ctrKey?r=3:!r&&t.metaKey&&(r=4),p[r*2]=d,p[r*2+1]=h,ho(p,n,i)}},xR=(t,e,n,i)=>{yl(qs*t.da/180,e),_l(t.ds,e,n)},SR=(t,e,n)=>{const{code:i}=t;if(t.target!==document.body)return;const r=.01;if(i==="ArrowLeft"||i==="KeyA")ho([-r,0,0,0],e,n);else if(i==="ArrowRight"||i==="KeyD")ho([r,0,0,0],e,n);else if(i==="ArrowUp"||i==="KeyW")ho([0,0,-r,0],e,n);else if(i==="ArrowDown"||i==="KeyS")ho([0,0,r,0],e,n);else if(i==="PageUp"||i==="KeyQ")ho([0,-r,0,0],e,n);else if(i==="PageDown"||i==="KeyE")ho([0,r,0,0],e,n);else if(i==="Digit1")yl(-(qs*5)/180,e);else if(i==="Digit3")yl(qs*5/180,e);else if(i==="KeyZ")_l(-r,e,n);else if(i==="KeyC")_l(r,e,n);else return;return!0},MR=(t,e,n,i)=>{const r=window.innerWidth/2,o=window.innerHeight/2,a=Math.min(r,o)*.9,l=10*(t.deltaMode===1?t.deltaY*10:t.deltaY)/a;t.shiftKey===!!i?yl(qs*l/180,e):_l(-l/100,e,n)},ER=t=>{Qe.useLayoutEffect(()=>{const e=HP(t.composer.renderer.domElement).draggable({listeners:{move:n=>{t.controls==="free"&&(_R(n,t.dimensions,t.vertices,t.curvature,t.controlsShift),bs(t))}}}).gesturable({onmove:n=>{t.controls==="free"&&(xR(n,t.vertices,t.curvature,t.controlsShift),bs(t))}});return()=>{e.unset()}},[t]),Qe.useEffect(()=>{const e=n=>{t.controls!=="orbit"&&(MR(n,t.vertices,t.curvature,t.controlsShift),bs(t))};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e)},[t]),Qe.useEffect(()=>{const e=n=>{SR(n,t.vertices,t.curvature,t.controlsShift)&&bs(t)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])};function wR({runtime:t}){return ER(t),null}const TR=t=>{const{camera:e,composer:n}=t,i=1,r=window.innerWidth*i,o=window.innerHeight*i,a=n.renderer.domElement;if(a.width!==r||a.height!==o){e.aspect=r/o,e.zoom=Math.min(1,r/o),e.updateProjectionMatrix(),n.renderer.setSize(r,o),n.setSize(r,o);const l=n.renderer.getPixelRatio();n.setPixelRatio(l);const d=r*l,h=o*l;n.passes.forEach(p=>{var y,v;if((v=(y=p.material)==null?void 0:y.uniforms)!=null&&v.resolution){let _=d,T=h;p.material.uniforms.resolution.value.x<=1&&(_=1/_,T=1/T),p.material.uniforms.resolution.value.x=_,p.material.uniforms.resolution.value.y=T}p.resolution&&(p.resolution=new Ne(r,o))}),a.style.width=r+"px",a.style.height=o+"px"}n.render()},bR=t=>{Qe.useEffect(()=>{t.orbitControls.enabled=t.controls==="orbit"},[t.controls,t.orbitControls]),Qe.useEffect(()=>{gR(t.composer,t.msaa,t.msaaSamples)},[t.msaa,t.msaaSamples,t.composer]),Qe.useEffect(()=>{vR(t.composer,t.camera,t.fov3)},[t.fov3,t.camera,t.composer]),Qe.useEffect(()=>{_0(t),x0(t),dR(t)},[t.dimensions,t.curve,t.segments]),Qe.useEffect(()=>{t.vertices.length&&(console.warn(`Extending vertex buffer to ${t.vertices.length}`),_0(t))},[t.maxVertices]),Qe.useEffect(()=>{t.edges.length&&(console.warn(`Extending edge buffer to ${t.edges.length}`),x0(t))},[t.maxEdges]),Qe.useEffect(()=>{yR(t)},[t.ambiance]),Qe.useEffect(()=>{Mx(t),t.composer.render()},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges]),Qe.useEffect(()=>{Od(t,"vertex"),Od(t,"edge"),Od(t,"face")},[t.showVertices,t.showEdges,t.showFaces]),Qe.useEffect(()=>{t.currentOrder<0||bs(t,t.currentOrder-1)},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges,t.showFaces]),Qe.useEffect(()=>{bs(t)},[t.ambiance,t.showVertices,t.showEdges,t.showFaces,t.maxVertices,t.maxEdges,t.curve,t.segments]),Qe.useEffect(()=>{const e=()=>{TR(t)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[t])};function CR({runtime:t}){return bR(t),null}function AR({runtime:t,setRuntime:e}){window.rt=t,BP(t,e);const n=Qe.useCallback(i=>{e(r=>({...r,renderError:i.message}))},[e]);return Ce.jsx(Ce.Fragment,{children:Ce.jsxs(GP,{error:t.renderError,onError:n,children:[Ce.jsx(CR,{runtime:t}),Ce.jsx(wR,{runtime:t})]})})}function S0(){return Ce.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:Ce.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:"1",stroke:"currentColor"})})}const Nd=6,Bc=14,M0={active:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("circle",{cx:"16",cy:"16",r:Bc}),Ce.jsx("circle",{cx:"16",cy:"16",r:Nd,fill:"currentColor"})]}),inactive:Ce.jsx(Ce.Fragment,{children:Ce.jsx("circle",{cx:"16",cy:"16",r:Nd,fill:"currentColor"})}),snub:Ce.jsx(Ce.Fragment,{children:Ce.jsx("circle",{cx:"16",cy:"16",r:Bc})}),holosnub:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("circle",{cx:"16",cy:"16",r:Bc}),Ce.jsx("circle",{cx:"16",cy:"16",r:Nd})]}),custom:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("circle",{cx:"16",cy:"16",r:Bc}),Ce.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]})};function PR({index:t,value:e,extended:n,onChange:i}){const r=e===0?"inactive":e===1?"active":e==="s"?"snub":e==="h"?"holosnub":"custom",o=()=>{const a=Object.keys(M0),l=a.indexOf(r),d=n?a[(l+1)%a.length]:r==="active"?"inactive":"active",h={active:1,inactive:0,snub:"s",holosnub:"h",custom:.5}[d];i(t,h)};return Ce.jsxs("div",{className:"coxeter-node",children:[Ce.jsx("svg",{className:`coxeter-graphic ${r}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",onClick:o,children:M0[r]}),r==="custom"&&Ce.jsx("input",{type:"number",value:e,min:"0",step:".1",onChange:a=>i(t,+a.target.value)})]})}const RR=(t,e,n,i,r)=>{let o=!0,a=0,l=1;if(["inf","Infinity"].includes(t)&&(t="∞"),t==="∞"&&r)a=1/0;else if(t.includes("/")){const[d,h]=t.split("/");a=+d,l=+h,l===1&&(t=`${a}`),o=!(isNaN(a)||a<e||a>n||a%i!==0||isNaN(l)||l<e||l>n||l%i!==0)}else a=+t,o=!(isNaN(a)||a<e||a>n||a%i!==0);return{valid:o,raw:t,value:a,fraction:l}};function ir({name:t,label:e,min:n=0,max:i=1/0,step:r=1,value:o,allowInfinity:a,fraction:l,fractionName:d,toggler:h,togglerName:p,onChange:y,...v}){const[_,T]=Qe.useState(o===1/0&&a?"∞":d&&l>1?`${o}/${l}`:`${o}`),[b,E]=Qe.useState(!0),m=Qe.useCallback(P=>{const U=RR(P,n,i,r,a);T(U.raw),E(U.valid),U.valid&&(y({target:{name:t,value:U.value}}),d&&y({target:{name:d,value:U.fraction}}))},[a,d,i,n,t,y,r]),M=Qe.useCallback(()=>{if(!b){m(`${n}`);return}_!=="∞"&&(_===`${n}`?a&&m("∞"):_.includes("/")?m((+_.split("/")[0]-r).toString()):m((+_-r).toString()))},[a,n,_,r,m,b]),w=Qe.useCallback(()=>{if(!b){m(`${n}`);return}_==="∞"?a&&m(`${n}`):_.includes("/")?m((+_.split("/")[0]+r).toString()):m((+_+r).toString())},[a,n,_,r,m,b]),L=P=>{const U=P.target.value;m(U)};return Ce.jsxs("label",{className:`number ${b?"valid":"invalid"}`,children:[e&&Ce.jsx("span",{className:"number-label",children:e}),p&&Ce.jsx("input",{type:"checkbox",name:p,checked:h,onChange:y}),(!p||h)&&Ce.jsxs("div",{className:"number-control",children:[Ce.jsx("input",{type:"text",name:t,value:_,style:{width:`${_.length+.25}ch`},onChange:L,...v}),Ce.jsx("button",{className:"plusminus minus",onClick:M,tabIndex:-1,children:"−"}),Ce.jsx("button",{className:"plusminus plus",onClick:w,tabIndex:-1,children:"+"})]})]})}function DR({i:t,j:e,value:n,stellation:i,onChange:r}){return Ce.jsx("div",{className:"coxeter-value",children:Ce.jsx(ir,{name:`coxeter-${t}-${e}`,min:2,step:1,value:n,onChange:r,allowInfinity:!0,fraction:i,fractionName:`stellation-${t}-${e}`})})}function LR({params:t,runtime:e,onChange:n,onExtend:i,onControls:r,onMirrorChange:o}){const[a,l]=Qe.useState(!0),d=Qe.useCallback(()=>l(p=>!p),[]),h=Qe.useCallback(p=>{let{name:y,checked:v,type:_,value:T}=p.target;_==="checkbox"&&(T=v),n(y,T)},[n]);return Ce.jsxs("div",{className:e.error?"error":"",title:e.error,children:[Ce.jsxs("button",{className:"control-indicator",onClick:r,children:[e.controls==="orbit"?"⇹":"↭",e.controls==="free"?Ce.jsx("sup",{children:e.controlsShift+1}):null]}),Ce.jsxs("button",{className:`space-indicator${e.processing?" processing":""}`,onClick:d,children:[e.spaceType===null||e.spaceType==="indefinite"?"𝕏":e.spaceType==="affine"?"𝔼":e.spaceType==="finite"?"𝕊":"ℍ",Ce.jsxs("sup",{children:[e.spaceType==="hyperbolic-paracompact"?"*":"",e.dimensions-1]}),e.currentOrder<e.order?Ce.jsxs("sub",{children:[e.currentOrder,"/",e.order]}):null]}),a&&Ce.jsxs("aside",{className:"controls",children:[(t.extended||t.grouper!=="")&&Ce.jsxs("label",{children:["Grouper",Ce.jsx("select",{name:"grouper",value:t.grouper,onChange:h,children:OP.map(p=>Ce.jsx("option",{value:p,children:p===""?t.grouper===""?`Auto [${e.grouper.replace(/^auto-/,"")}]`:"Auto":p.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},p))})]}),(t.extended||e.grouper.replace(/^auto-/,"")==="knuthbendix"||e.curvature<=0)&&Ce.jsx(ir,{name:"order",label:"Precision",min:1,step:1,value:t.order,onChange:h}),Ce.jsx(ir,{name:"segments",label:"Segments",min:1,step:1,value:t.segments,toggler:t.curve,togglerName:"curve",onChange:h}),Ce.jsx(ir,{name:"dimensions",label:"Dimensions",min:2,max:9,step:1,value:t.dimensions,onChange:h}),Ce.jsxs("label",{children:["Projection",Ce.jsx("select",{name:"projection",value:t.projection,onChange:h,children:vx.map(p=>Ce.jsx("option",{value:p,children:p.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},p))})]}),Ce.jsx(ir,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:t.vertexThickness,toggler:t.showVertices,togglerName:"showVertices",onChange:h}),Ce.jsx(ir,{name:"edgeThickness",label:"Edges",min:0,step:1,value:t.edgeThickness,toggler:t.showEdges,togglerName:"showEdges",onChange:h}),e.grouper.replace(/^auto-/,"")==="toddcoxeter"&&Ce.jsxs("label",{children:["Faces",Ce.jsx("input",{type:"checkbox",name:"showFaces",checked:t.showFaces,onChange:h})]}),Ce.jsxs("label",{children:["Ambiance",Ce.jsx("select",{name:"ambiance",value:t.ambiance,onChange:h,children:(t.extended?Object.keys(ji):Object.entries(ji).filter(([p,{extended:y}])=>!y).map(([p])=>p)).map(p=>Ce.jsx("option",{value:p,children:p.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},p))})]})]}),a&&Ce.jsxs("aside",{className:"view",children:[Ce.jsx(ir,{name:"msaaSamples",label:"MSAA",min:0,step:1,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:h}),Ce.jsx(ir,{name:"fov3",label:"FOV3",min:0,step:1,value:t.fov3,onChange:h}),t.dimensions>3?[...Array(t.dimensions-3).keys()].map(p=>Ce.jsx(ir,{label:`FOV${p+4}`,name:`fov${p+4}`,step:1,value:t[`fov${p+4}`],onChange:h},p)):null]}),a&&Ce.jsxs("aside",{className:"coxeters",children:[Ce.jsx("div",{className:"coxeter-matrix",children:[...Array(t.dimensions).keys()].map(p=>Ce.jsxs(Qe.Fragment,{children:[p>0&&Ce.jsx("div",{className:"coxeter-column",children:[...Array(p).keys()].map(y=>(t.extended||p===y+1)&&Ce.jsx(DR,{i:p,j:y,value:t.coxeter[p][y],stellation:t.stellation[p][y],onChange:h},`${p}x${y}`))}),p>0&&Ce.jsx(S0,{}),Ce.jsx(PR,{index:p,value:t.mirrors[p],extended:t.extended,onChange:o}),p<t.dimensions-1&&Ce.jsx(S0,{})]},p))}),Ce.jsx("div",{className:"coxeter-toggles",children:Ce.jsx("button",{className:"button",onClick:i,title:"extended mode",children:t.extended?"▲":"▼"})})]})]})}function IR({gl:t,params:e,updateParams:n}){const[i,r]=Qe.useState(()=>({...e,...t,currentOrder:-1,askedOrder:null,spaceType:null,curvature:0,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],faces:[],maxVertices:3e4,maxEdges:5e4,maxFaces:5e4,processing:!0,error:null,renderError:null}));Qe.useEffect(()=>{r(h=>({...h,...gx({order:e.order,controls:e.controls,controlsShift:e.controlsShift,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,curve:e.curve,segments:e.segments,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation})}))},[e.order,e.ambiance,e.controls,e.controlsShift,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.showEdges,e.showFaces,e.showVertices,e.stellation,e.vertexThickness]),Qe.useEffect(()=>{r(h=>e.grouper===""&&h.grouper.startsWith("auto-")?h:{...h,grouper:e.grouper})},[e.grouper]);const o=Qe.useCallback(()=>{let h,p;const y=LP(e.dimensions/2)-1;e.controls==="orbit"?(h="free",p=0):e.controlsShift>=y?(h="orbit",p=0):(h="free",p=e.controlsShift+1),n({controls:h,controlsShift:p})},[e.controls,e.controlsShift,e.dimensions,n]),a=Qe.useCallback(()=>{const h={extended:!e.extended};if(!e.extended)for(let p=0;p<e.dimensions;p++)for(let y=0;y<p-1;y++)e.coxeter[p][y]=2,e.coxeter[y][p]=2;n(h)},[e.extended,e.dimensions,e.coxeter,n]),l=Qe.useCallback((h,p)=>{const y={};if(h==="dimensions"&&p){y.coxeter=new Array(p).fill().map(()=>new Array(p).fill(2)),y.stellation=new Array(p).fill().map(()=>new Array(p).fill(1)),y.mirrors=new Array(p).fill(0);for(let v=0;v<RP(e.coxeter.length,p);v++){for(let _=0;_<v;_++)y.coxeter[v][_]=e.coxeter[v][_],y.coxeter[_][v]=e.coxeter[_][v];y.mirrors[v]=e.mirrors[v]}for(let v=0;v<p;v++)y.coxeter[v][v]=1;for(let v=4;v<=p;v++)e[`fov${v}`]||(y[`fov${v}`]=v===4?90:45)}if(h.startsWith("coxeter")){const[v,_]=h.split("-").slice(1).map(b=>+b),T=e.coxeter.map(b=>b.slice());T[v][_]=p,T[_][v]=p,h="coxeter",p=T}if(h.startsWith("stellation")){const[v,_]=h.split("-").slice(1).map(b=>+b),T=e.stellation.map(b=>b.slice());T[v][_]=p,T[_][v]=p,h="stellation",p=T}y[h]=p,n(y)},[e,n]),d=Qe.useCallback((h,p)=>{const y=e.mirrors.slice();y[h]=p,n({mirrors:y})},[e.mirrors,n]);return Ce.jsxs("div",{className:i.error||i.renderError?"error":"",title:i.error||i.renderError,children:[Ce.jsx(LR,{runtime:i,params:e,onChange:l,onExtend:a,onControls:o,onMirrorChange:d}),Ce.jsx(AR,{runtime:i,setRuntime:r})]})}const Ex=fR();Object.assign(window,Ex);const UR=t=>JSON.parse(t,(n,i)=>i==="Infinity"?1/0:i),OR=t=>JSON.stringify(t,(n,i)=>i===1/0?"Infinity":i),E0=(t=null)=>{const{location:e}=window;if(e.hash)try{return UR(atob(e.hash.slice(1)))}catch(n){console.warn(n),e.hash=""}return t},NR=t=>{window.history.pushState(null,null,"#"+btoa(OR(t)))},FR=()=>{const[t,e]=Qe.useState(E0(bu)),n=Qe.useCallback(()=>{const r=E0();r&&e(r)},[]),i=Qe.useCallback(r=>{e(o=>{const a={...o,...r};return Object.keys(gx(a)).length===Object.keys(bu).length&&NR(a),a})},[]);return Qe.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),Ce.jsx(IR,{gl:Ex,params:t,updateParams:i})};Fd.createRoot(document.getElementById("root")).render(Ce.jsx(FR,{}));
