(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function VS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x0={exports:{}},bu={},S0={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),HS=Symbol.for("react.portal"),WS=Symbol.for("react.fragment"),jS=Symbol.for("react.strict_mode"),XS=Symbol.for("react.profiler"),YS=Symbol.for("react.provider"),qS=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),KS=Symbol.for("react.suspense"),ZS=Symbol.for("react.memo"),QS=Symbol.for("react.lazy"),Im=Symbol.iterator;function JS(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var M0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,w0={};function qs(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||M0}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function T0(){}T0.prototype=qs.prototype;function Nh(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||M0}var Fh=Nh.prototype=new T0;Fh.constructor=Nh;E0(Fh,qs.prototype);Fh.isPureReactComponent=!0;var Um=Array.isArray,b0=Object.prototype.hasOwnProperty,kh={current:null},C0={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)b0.call(e,i)&&!C0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var d=Array(a),h=0;h<a;h++)d[h]=arguments[h+2];r.children=d}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:yl,type:t,key:o,ref:l,props:r,_owner:kh.current}}function eM(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function tM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Om=/\/+/g;function Tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tM(""+t.key):e.toString(36)}function zc(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case yl:case HS:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+Tf(l,0):i,Um(r)?(n="",t!=null&&(n=t.replace(Om,"$&/")+"/"),zc(r,e,n,"",function(h){return h})):r!=null&&(zh(r)&&(r=eM(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Om,"$&/")+"/")+t)),e.push(r)),1;if(l=0,i=i===""?".":i+":",Um(t))for(var a=0;a<t.length;a++){o=t[a];var d=i+Tf(o,a);l+=zc(o,e,n,d,r)}else if(d=JS(t),typeof d=="function")for(t=d.call(t),a=0;!(o=t.next()).done;)o=o.value,d=i+Tf(o,a++),l+=zc(o,e,n,d,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ql(t,e,n){if(t==null)return t;var i=[],r=0;return zc(t,i,"","",function(o){return e.call(n,o,r++)}),i}function nM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var On={current:null},Bc={transition:null},iM={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Bc,ReactCurrentOwner:kh};ft.Children={map:Ql,forEach:function(t,e,n){Ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ql(t,function(){e++}),e},toArray:function(t){return Ql(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=qs;ft.Fragment=WS;ft.Profiler=XS;ft.PureComponent=Nh;ft.StrictMode=jS;ft.Suspense=KS;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iM;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=E0({},t.props),r=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)b0.call(e,d)&&!C0.hasOwnProperty(d)&&(i[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){a=Array(d);for(var h=0;h<d;h++)a[h]=arguments[h+2];i.children=a}return{$$typeof:yl,type:t.type,key:r,ref:o,props:i,_owner:l}};ft.createContext=function(t){return t={$$typeof:qS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YS,_context:t},t.Consumer=t};ft.createElement=A0;ft.createFactory=function(t){var e=A0.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:$S,render:t}};ft.isValidElement=zh;ft.lazy=function(t){return{$$typeof:QS,_payload:{_status:-1,_result:t},_init:nM}};ft.memo=function(t,e){return{$$typeof:ZS,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=Bc.transition;Bc.transition={};try{t()}finally{Bc.transition=e}};ft.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ft.useCallback=function(t,e){return On.current.useCallback(t,e)};ft.useContext=function(t){return On.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return On.current.useDeferredValue(t)};ft.useEffect=function(t,e){return On.current.useEffect(t,e)};ft.useId=function(){return On.current.useId()};ft.useImperativeHandle=function(t,e,n){return On.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return On.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return On.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return On.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return On.current.useReducer(t,e,n)};ft.useRef=function(t){return On.current.useRef(t)};ft.useState=function(t){return On.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return On.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return On.current.useTransition()};ft.version="18.2.0";S0.exports=ft;var nt=S0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rM=nt,oM=Symbol.for("react.element"),sM=Symbol.for("react.fragment"),aM=Object.prototype.hasOwnProperty,lM=rM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cM={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var i,r={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)aM.call(e,i)&&!cM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:oM,type:t,key:o,ref:l,props:r,_owner:lM.current}}bu.Fragment=sM;bu.jsx=P0;bu.jsxs=P0;x0.exports=bu;var Me=x0.exports,Ud={},R0={exports:{}},ei={},D0={exports:{}},L0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,J){var ne=X.length;X.push(J);e:for(;0<ne;){var Te=ne-1>>>1,ve=X[Te];if(0<r(ve,J))X[Te]=J,X[ne]=ve,ne=Te;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var J=X[0],ne=X.pop();if(ne!==J){X[0]=ne;e:for(var Te=0,ve=X.length,oe=ve>>>1;Te<oe;){var q=2*(Te+1)-1,Ee=X[q],we=q+1,H=X[we];if(0>r(Ee,ne))we<ve&&0>r(H,Ee)?(X[Te]=H,X[we]=ne,Te=we):(X[Te]=Ee,X[q]=ne,Te=q);else if(we<ve&&0>r(H,ne))X[Te]=H,X[we]=ne,Te=we;else break e}}return J}function r(X,J){var ne=X.sortIndex-J.sortIndex;return ne!==0?ne:X.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],h=[],m=1,g=null,v=3,_=!1,T=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(X){for(var J=n(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=X)i(h),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(h)}}function L(X){if(b=!1,w(X),!T)if(n(d)!==null)T=!0,ce(P);else{var J=n(h);J!==null&&pe(L,J.startTime-X)}}function P(X,J){T=!1,b&&(b=!1,p(z),z=-1),_=!0;var ne=v;try{for(w(J),g=n(d);g!==null&&(!(g.expirationTime>J)||X&&!ae());){var Te=g.callback;if(typeof Te=="function"){g.callback=null,v=g.priorityLevel;var ve=Te(g.expirationTime<=J);J=t.unstable_now(),typeof ve=="function"?g.callback=ve:g===n(d)&&i(d),w(J)}else i(d);g=n(d)}if(g!==null)var oe=!0;else{var q=n(h);q!==null&&pe(L,q.startTime-J),oe=!1}return oe}finally{g=null,v=ne,_=!1}}var O=!1,B=null,z=-1,R=5,N=-1;function ae(){return!(t.unstable_now()-N<R)}function fe(){if(B!==null){var X=t.unstable_now();N=X;var J=!0;try{J=B(!0,X)}finally{J?$():(O=!1,B=null)}}else O=!1}var $;if(typeof E=="function")$=function(){E(fe)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,j=te.port2;te.port1.onmessage=fe,$=function(){j.postMessage(null)}}else $=function(){M(fe,0)};function ce(X){B=X,O||(O=!0,$())}function pe(X,J){z=M(function(){X(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,ce(P))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(X){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var ne=v;v=J;try{return X()}finally{v=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,J){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=v;v=X;try{return J()}finally{v=ne}},t.unstable_scheduleCallback=function(X,J,ne){var Te=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Te+ne:Te):ne=Te,X){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ne+ve,X={id:m++,callback:J,priorityLevel:X,startTime:ne,expirationTime:ve,sortIndex:-1},ne>Te?(X.sortIndex=ne,e(h,X),n(d)===null&&X===n(h)&&(b?(p(z),z=-1):b=!0,pe(L,ne-Te))):(X.sortIndex=ve,e(d,X),T||_||(T=!0,ce(P))),X},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(X){var J=v;return function(){var ne=v;v=J;try{return X.apply(this,arguments)}finally{v=ne}}}})(L0);D0.exports=L0;var uM=D0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=nt,Jn=uM;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U0=new Set,qa={};function Io(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(qa[t]=e,t=0;t<e.length;t++)U0.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,fM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},Fm={};function dM(t){return Od.call(Fm,t)?!0:Od.call(Nm,t)?!1:fM.test(t)?Fm[t]=!0:(Nm[t]=!0,!1)}function hM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pM(t,e,n,i){if(e===null||typeof e>"u"||hM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nn(t,e,n,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yn[t]=new Nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yn[e]=new Nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yn[t]=new Nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yn[t]=new Nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yn[t]=new Nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yn[t]=new Nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yn[t]=new Nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yn[t]=new Nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yn[t]=new Nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Gh);yn[e]=new Nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Gh);yn[e]=new Nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Gh);yn[e]=new Nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yn[t]=new Nn(t,1,!1,t.toLowerCase(),null,!1,!1)});yn.xlinkHref=new Nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yn[t]=new Nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pM(e,n,r,i)&&(n=null),i||r===null?dM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pr=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jl=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Nd=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),F0=Symbol.for("react.offscreen"),km=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var zt=Object.assign,bf;function Da(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var Cf=!1;function Af(t,e){if(!t||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){i=h}t.call(e.prototype)}else{try{throw Error()}catch(h){i=h}t()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var d=`
`+r[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function mM(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=Af(t.type,!1),t;case 11:return t=Af(t.type.render,!1),t;case 1:return t=Af(t.type,!0),t;default:return""}}function zd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case fs:return"Portal";case Nd:return"Profiler";case Hh:return"StrictMode";case Fd:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case O0:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:zd(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return zd(t(e))}catch{}}return null}function vM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gM(t){var e=k0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ec(t){t._valueTracker||(t._valueTracker=gM(t))}function z0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=k0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bd(t,e){var n=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B0(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function Gd(t,e){B0(t,e);var n=Gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vd(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vd(t,e,n){(e!=="number"||Qc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(La(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function G0(t,e){var n=Gr(e.value),i=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tc,H0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yM=["Webkit","ms","Moz","O"];Object.keys(Na).forEach(function(t){yM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Na[e]=Na[t]})});function W0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Na.hasOwnProperty(t)&&Na[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=W0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _M=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jd(t,e){if(e){if(_M[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function Xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function Xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qd=null,Cs=null,As=null;function Hm(t){if(t=Sl(t)){if(typeof qd!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=Du(e),qd(t.stateNode,t.type,e))}}function X0(t){Cs?As?As.push(t):As=[t]:Cs=t}function Y0(){if(Cs){var t=Cs,e=As;if(As=Cs=null,Hm(t),e)for(t=0;t<e.length;t++)Hm(e[t])}}function q0(t,e){return t(e)}function $0(){}var Pf=!1;function K0(t,e,n){if(Pf)return t(e,n);Pf=!0;try{return q0(t,e,n)}finally{Pf=!1,(Cs!==null||As!==null)&&($0(),Y0())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var i=Du(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var $d=!1;if(cr)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){$d=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{$d=!1}function xM(t,e,n,i,r,o,l,a,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var Fa=!1,Jc=null,eu=!1,Kd=null,SM={onError:function(t){Fa=!0,Jc=t}};function MM(t,e,n,i,r,o,l,a,d){Fa=!1,Jc=null,xM.apply(SM,arguments)}function EM(t,e,n,i,r,o,l,a,d){if(MM.apply(this,arguments),Fa){if(Fa){var h=Jc;Fa=!1,Jc=null}else throw Error(Se(198));eu||(eu=!0,Kd=h)}}function Uo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(Uo(t)!==t)throw Error(Se(188))}function wM(t){var e=t.alternate;if(!e){if(e=Uo(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Wm(r),t;if(o===i)return Wm(r),e;o=o.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===n){l=!0,n=r,i=o;break}if(a===i){l=!0,i=r,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,i=r;break}if(a===i){l=!0,i=o,n=r;break}a=a.sibling}if(!l)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function Q0(t){return t=wM(t),t!==null?J0(t):null}function J0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J0(t);if(e!==null)return e;t=t.sibling}return null}var ey=Jn.unstable_scheduleCallback,jm=Jn.unstable_cancelCallback,TM=Jn.unstable_shouldYield,bM=Jn.unstable_requestPaint,Wt=Jn.unstable_now,CM=Jn.unstable_getCurrentPriorityLevel,Yh=Jn.unstable_ImmediatePriority,ty=Jn.unstable_UserBlockingPriority,tu=Jn.unstable_NormalPriority,AM=Jn.unstable_LowPriority,ny=Jn.unstable_IdlePriority,Cu=null,Gi=null;function PM(t){if(Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Pi=Math.clz32?Math.clz32:LM,RM=Math.log,DM=Math.LN2;function LM(t){return t>>>=0,t===0?32:31-(RM(t)/DM|0)|0}var nc=64,ic=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~r;a!==0?i=Ia(a):(o&=l,o!==0&&(i=Ia(o)))}else l=n&~r,l!==0?i=Ia(l):o!==0&&(i=Ia(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Pi(e),r=1<<n,i|=t[n],e&=~r;return i}function IM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Pi(o),a=1<<l,d=r[l];d===-1?(!(a&n)||a&i)&&(r[l]=IM(a,e)):d<=e&&(t.expiredLanes|=a),o&=~a}}function Zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iy(){var t=nc;return nc<<=1,!(nc&4194240)&&(nc=64),t}function Rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pi(e),t[e]=n}function OM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Pi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var St=0;function ry(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var oy,$h,sy,ay,ly,Qd=!1,rc=[],Ir=null,Ur=null,Or=null,Za=new Map,Qa=new Map,Pr=[],NM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function xa(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Sl(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function FM(t,e,n,i,r){switch(e){case"focusin":return Ir=xa(Ir,t,e,n,i,r),!0;case"dragenter":return Ur=xa(Ur,t,e,n,i,r),!0;case"mouseover":return Or=xa(Or,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Za.set(o,xa(Za.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Qa.set(o,xa(Qa.get(o)||null,t,e,n,i,r)),!0}return!1}function cy(t){var e=po(t.target);if(e!==null){var n=Uo(e);if(n!==null){if(e=n.tag,e===13){if(e=Z0(n),e!==null){t.blockedOn=e,ly(t.priority,function(){sy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yd=i,n.target.dispatchEvent(i),Yd=null}else return e=Sl(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){Gc(t)&&n.delete(e)}function kM(){Qd=!1,Ir!==null&&Gc(Ir)&&(Ir=null),Ur!==null&&Gc(Ur)&&(Ur=null),Or!==null&&Gc(Or)&&(Or=null),Za.forEach(Ym),Qa.forEach(Ym)}function Sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Qd||(Qd=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,kM)))}function Ja(t){function e(r){return Sa(r,t)}if(0<rc.length){Sa(rc[0],t);for(var n=1;n<rc.length;n++){var i=rc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ir!==null&&Sa(Ir,t),Ur!==null&&Sa(Ur,t),Or!==null&&Sa(Or,t),Za.forEach(e),Qa.forEach(e),n=0;n<Pr.length;n++)i=Pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)cy(n),n.blockedOn===null&&Pr.shift()}var Ps=pr.ReactCurrentBatchConfig,iu=!0;function zM(t,e,n,i){var r=St,o=Ps.transition;Ps.transition=null;try{St=1,Kh(t,e,n,i)}finally{St=r,Ps.transition=o}}function BM(t,e,n,i){var r=St,o=Ps.transition;Ps.transition=null;try{St=4,Kh(t,e,n,i)}finally{St=r,Ps.transition=o}}function Kh(t,e,n,i){if(iu){var r=Jd(t,e,n,i);if(r===null)Bf(t,e,i,ru,n),Xm(t,i);else if(FM(r,t,e,n,i))i.stopPropagation();else if(Xm(t,i),e&4&&-1<NM.indexOf(t)){for(;r!==null;){var o=Sl(r);if(o!==null&&oy(o),o=Jd(t,e,n,i),o===null&&Bf(t,e,i,ru,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Bf(t,e,i,null,n)}}var ru=null;function Jd(t,e,n,i){if(ru=null,t=Xh(i),t=po(t),t!==null)if(e=Uo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CM()){case Yh:return 1;case ty:return 4;case tu:case AM:return 16;case ny:return 536870912;default:return 16}default:return 16}}var Dr=null,Zh=null,Vc=null;function fy(){if(Vc)return Vc;var t,e=Zh,n=e.length,i,r="value"in Dr?Dr.value:Dr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===r[o-i];i++);return Vc=r.slice(t,1<i?1-i:void 0)}function Hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oc(){return!0}function qm(){return!1}function ti(t){function e(n,i,r,o,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oc:qm,this.isPropagationStopped=qm,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=ti($s),xl=zt({},$s,{view:0,detail:0}),GM=ti(xl),Df,Lf,Ma,Au=zt({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(Df=t.screenX-Ma.screenX,Lf=t.screenY-Ma.screenY):Lf=Df=0,Ma=t),Df)},movementY:function(t){return"movementY"in t?t.movementY:Lf}}),$m=ti(Au),VM=zt({},Au,{dataTransfer:0}),HM=ti(VM),WM=zt({},xl,{relatedTarget:0}),If=ti(WM),jM=zt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),XM=ti(jM),YM=zt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qM=ti(YM),$M=zt({},$s,{data:0}),Km=ti($M),KM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QM[t])?!!e[t]:!1}function Jh(){return JM}var eE=zt({},xl,{key:function(t){if(t.key){var e=KM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?Hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tE=ti(eE),nE=zt({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=ti(nE),iE=zt({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),rE=ti(iE),oE=zt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),sE=ti(oE),aE=zt({},Au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=ti(aE),cE=[9,13,27,32],ep=cr&&"CompositionEvent"in window,ka=null;cr&&"documentMode"in document&&(ka=document.documentMode);var uE=cr&&"TextEvent"in window&&!ka,dy=cr&&(!ep||ka&&8<ka&&11>=ka),Qm=String.fromCharCode(32),Jm=!1;function hy(t,e){switch(t){case"keyup":return cE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function py(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function fE(t,e){switch(t){case"compositionend":return py(e);case"keypress":return e.which!==32?null:(Jm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Jm?null:t;default:return null}}function dE(t,e){if(hs)return t==="compositionend"||!ep&&hy(t,e)?(t=fy(),Vc=Zh=Dr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dy&&e.locale!=="ko"?null:e.data;default:return null}}var hE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hE[t.type]:e==="textarea"}function my(t,e,n,i){X0(i),e=ou(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var za=null,el=null;function pE(t){by(t,0)}function Pu(t){var e=vs(t);if(z0(e))return t}function mE(t,e){if(t==="change")return e}var vy=!1;if(cr){var Uf;if(cr){var Of="oninput"in document;if(!Of){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),Of=typeof tv.oninput=="function"}Uf=Of}else Uf=!1;vy=Uf&&(!document.documentMode||9<document.documentMode)}function nv(){za&&(za.detachEvent("onpropertychange",gy),el=za=null)}function gy(t){if(t.propertyName==="value"&&Pu(el)){var e=[];my(e,el,t,Xh(t)),K0(pE,e)}}function vE(t,e,n){t==="focusin"?(nv(),za=e,el=n,za.attachEvent("onpropertychange",gy)):t==="focusout"&&nv()}function gE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(el)}function yE(t,e){if(t==="click")return Pu(e)}function _E(t,e){if(t==="input"||t==="change")return Pu(e)}function xE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Li=typeof Object.is=="function"?Object.is:xE;function tl(t,e){if(Li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Od.call(e,r)||!Li(t[r],e[r]))return!1}return!0}function iv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rv(t,e){var n=iv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iv(n)}}function yy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _y(){for(var t=window,e=Qc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qc(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SE(t){var e=_y(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yy(n.ownerDocument.documentElement,n)){if(i!==null&&tp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=rv(n,o);var l=rv(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ME=cr&&"documentMode"in document&&11>=document.documentMode,ps=null,eh=null,Ba=null,th=!1;function ov(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;th||ps==null||ps!==Qc(i)||(i=ps,"selectionStart"in i&&tp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&tl(Ba,i)||(Ba=i,i=ou(eh,"onSelect"),0<i.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},Nf={},xy={};cr&&(xy=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Ru(t){if(Nf[t])return Nf[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xy)return Nf[t]=e[n];return t}var Sy=Ru("animationend"),My=Ru("animationiteration"),Ey=Ru("animationstart"),wy=Ru("transitionend"),Ty=new Map,sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){Ty.set(t,e),Io(e,[t])}for(var Ff=0;Ff<sv.length;Ff++){var kf=sv[Ff],EE=kf.toLowerCase(),wE=kf[0].toUpperCase()+kf.slice(1);Wr(EE,"on"+wE)}Wr(Sy,"onAnimationEnd");Wr(My,"onAnimationIteration");Wr(Ey,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(wy,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Io("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Io("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Io("onBeforeInput",["compositionend","keypress","textInput","paste"]);Io("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Io("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Io("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function av(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,EM(i,e,void 0,t),t.currentTarget=null}function by(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var a=i[l],d=a.instance,h=a.currentTarget;if(a=a.listener,d!==o&&r.isPropagationStopped())break e;av(r,a,h),o=d}else for(l=0;l<i.length;l++){if(a=i[l],d=a.instance,h=a.currentTarget,a=a.listener,d!==o&&r.isPropagationStopped())break e;av(r,a,h),o=d}}}if(eu)throw t=Kd,eu=!1,Kd=null,t}function Rt(t,e){var n=e[sh];n===void 0&&(n=e[sh]=new Set);var i=t+"__bubble";n.has(i)||(Cy(e,t,2,!1),n.add(i))}function zf(t,e,n){var i=0;e&&(i|=4),Cy(n,t,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function nl(t){if(!t[ac]){t[ac]=!0,U0.forEach(function(n){n!=="selectionchange"&&(TE.has(n)||zf(n,!1,t),zf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,zf("selectionchange",!1,e))}}function Cy(t,e,n,i){switch(uy(e)){case 1:var r=zM;break;case 4:r=BM;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!$d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;l=l.return}for(;a!==null;){if(l=po(a),l===null)return;if(d=l.tag,d===5||d===6){i=o=l;continue e}a=a.parentNode}}i=i.return}K0(function(){var h=o,m=Xh(n),g=[];e:{var v=Ty.get(t);if(v!==void 0){var _=Qh,T=t;switch(t){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":_=tE;break;case"focusin":T="focus",_=If;break;case"focusout":T="blur",_=If;break;case"beforeblur":case"afterblur":_=If;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=HM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=rE;break;case Sy:case My:case Ey:_=XM;break;case wy:_=sE;break;case"scroll":_=GM;break;case"wheel":_=lE;break;case"copy":case"cut":case"paste":_=qM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Zm}var b=(e&4)!==0,M=!b&&t==="scroll",p=b?v!==null?v+"Capture":null:v;b=[];for(var E=h,w;E!==null;){w=E;var L=w.stateNode;if(w.tag===5&&L!==null&&(w=L,p!==null&&(L=Ka(E,p),L!=null&&b.push(il(E,L,w)))),M)break;E=E.return}0<b.length&&(v=new _(v,T,null,n,m),g.push({event:v,listeners:b}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",v&&n!==Yd&&(T=n.relatedTarget||n.fromElement)&&(po(T)||T[ur]))break e;if((_||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=h,T=T?po(T):null,T!==null&&(M=Uo(T),T!==M||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=h),_!==T)){if(b=$m,L="onMouseLeave",p="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(b=Zm,L="onPointerLeave",p="onPointerEnter",E="pointer"),M=_==null?v:vs(_),w=T==null?v:vs(T),v=new b(L,E+"leave",_,n,m),v.target=M,v.relatedTarget=w,L=null,po(m)===h&&(b=new b(p,E+"enter",T,n,m),b.target=w,b.relatedTarget=M,L=b),M=L,_&&T)t:{for(b=_,p=T,E=0,w=b;w;w=jo(w))E++;for(w=0,L=p;L;L=jo(L))w++;for(;0<E-w;)b=jo(b),E--;for(;0<w-E;)p=jo(p),w--;for(;E--;){if(b===p||p!==null&&b===p.alternate)break t;b=jo(b),p=jo(p)}b=null}else b=null;_!==null&&lv(g,v,_,b,!1),T!==null&&M!==null&&lv(g,M,T,b,!0)}}e:{if(v=h?vs(h):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var P=mE;else if(ev(v))if(vy)P=_E;else{P=gE;var O=vE}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=yE);if(P&&(P=P(t,h))){my(g,P,n,m);break e}O&&O(t,v,h),t==="focusout"&&(O=v._wrapperState)&&O.controlled&&v.type==="number"&&Vd(v,"number",v.value)}switch(O=h?vs(h):window,t){case"focusin":(ev(O)||O.contentEditable==="true")&&(ps=O,eh=h,Ba=null);break;case"focusout":Ba=eh=ps=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,ov(g,n,m);break;case"selectionchange":if(ME)break;case"keydown":case"keyup":ov(g,n,m)}var B;if(ep)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else hs?hy(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(dy&&n.locale!=="ko"&&(hs||z!=="onCompositionStart"?z==="onCompositionEnd"&&hs&&(B=fy()):(Dr=m,Zh="value"in Dr?Dr.value:Dr.textContent,hs=!0)),O=ou(h,z),0<O.length&&(z=new Km(z,t,null,n,m),g.push({event:z,listeners:O}),B?z.data=B:(B=py(n),B!==null&&(z.data=B)))),(B=uE?fE(t,n):dE(t,n))&&(h=ou(h,"onBeforeInput"),0<h.length&&(m=new Km("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:h}),m.data=B))}by(g,e)})}function il(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ka(t,n),o!=null&&i.unshift(il(t,o,r)),o=Ka(t,e),o!=null&&i.push(il(t,o,r))),t=t.return}return i}function jo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,i,r){for(var o=e._reactName,l=[];n!==null&&n!==i;){var a=n,d=a.alternate,h=a.stateNode;if(d!==null&&d===i)break;a.tag===5&&h!==null&&(a=h,r?(d=Ka(n,o),d!=null&&l.unshift(il(n,d,a))):r||(d=Ka(n,o),d!=null&&l.push(il(n,d,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var bE=/\r\n?/g,CE=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(bE,`
`).replace(CE,"")}function lc(t,e,n){if(e=cv(e),cv(t)!==e&&n)throw Error(Se(425))}function su(){}var nh=null,ih=null;function rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,AE=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(t){return uv.resolve(null).then(t).catch(RE)}:oh;function RE(t){setTimeout(function(){throw t})}function Gf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ja(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),zi="__reactFiber$"+Ks,rl="__reactProps$"+Ks,ur="__reactContainer$"+Ks,sh="__reactEvents$"+Ks,DE="__reactListeners$"+Ks,LE="__reactHandles$"+Ks;function po(t){var e=t[zi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[zi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fv(t);t!==null;){if(n=t[zi])return n;t=fv(t)}return e}t=n,n=t.parentNode}return null}function Sl(t){return t=t[zi]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function Du(t){return t[rl]||null}var ah=[],gs=-1;function jr(t){return{current:t}}function It(t){0>gs||(t.current=ah[gs],ah[gs]=null,gs--)}function Ct(t,e){gs++,ah[gs]=t.current,t.current=e}var Vr={},bn=jr(Vr),Vn=jr(!1),To=Vr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return Vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Hn(t){return t=t.childContextTypes,t!=null}function au(){It(Vn),It(bn)}function dv(t,e,n){if(bn.current!==Vr)throw Error(Se(168));Ct(bn,e),Ct(Vn,n)}function Ay(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,vM(t)||"Unknown",r));return zt({},n,i)}function lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,To=bn.current,Ct(bn,t),Ct(Vn,Vn.current),!0}function hv(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=Ay(t,e,To),i.__reactInternalMemoizedMergedChildContext=t,It(Vn),It(bn),Ct(bn,t)):It(Vn),Ct(Vn,n)}var rr=null,Lu=!1,Vf=!1;function Py(t){rr===null?rr=[t]:rr.push(t)}function IE(t){Lu=!0,Py(t)}function Xr(){if(!Vf&&rr!==null){Vf=!0;var t=0,e=St;try{var n=rr;for(St=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}rr=null,Lu=!1}catch(r){throw rr!==null&&(rr=rr.slice(t+1)),ey(Yh,Xr),r}finally{St=e,Vf=!1}}return null}var ys=[],_s=0,cu=null,uu=0,ai=[],li=0,bo=null,sr=1,ar="";function ao(t,e){ys[_s++]=uu,ys[_s++]=cu,cu=t,uu=e}function Ry(t,e,n){ai[li++]=sr,ai[li++]=ar,ai[li++]=bo,bo=t;var i=sr;t=ar;var r=32-Pi(i)-1;i&=~(1<<r),n+=1;var o=32-Pi(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,sr=1<<32-Pi(e)+r|n<<r|i,ar=o+t}else sr=1<<o|n<<r|i,ar=t}function np(t){t.return!==null&&(ao(t,1),Ry(t,1,0))}function ip(t){for(;t===cu;)cu=ys[--_s],ys[_s]=null,uu=ys[--_s],ys[_s]=null;for(;t===bo;)bo=ai[--li],ai[li]=null,ar=ai[--li],ai[li]=null,sr=ai[--li],ai[li]=null}var Qn=null,Zn=null,Ut=!1,Ti=null;function Dy(t,e){var n=ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bo!==null?{id:sr,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,Zn=null,!0):!1;default:return!1}}function lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ch(t){if(Ut){var e=Zn;if(e){var n=e;if(!pv(t,e)){if(lh(t))throw Error(Se(418));e=Nr(n.nextSibling);var i=Qn;e&&pv(t,e)?Dy(i,n):(t.flags=t.flags&-4097|2,Ut=!1,Qn=t)}}else{if(lh(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Ut=!1,Qn=t}}}function mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function cc(t){if(t!==Qn)return!1;if(!Ut)return mv(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rh(t.type,t.memoizedProps)),e&&(e=Zn)){if(lh(t))throw Ly(),Error(Se(418));for(;e;)Dy(t,e),e=Nr(e.nextSibling)}if(mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=Qn?Nr(t.stateNode.nextSibling):null;return!0}function Ly(){for(var t=Zn;t;)t=Nr(t.nextSibling)}function Fs(){Zn=Qn=null,Ut=!1}function rp(t){Ti===null?Ti=[t]:Ti.push(t)}var UE=pr.ReactCurrentBatchConfig;function Ei(t,e){if(t&&t.defaultProps){e=zt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fu=jr(null),du=null,xs=null,op=null;function sp(){op=xs=du=null}function ap(t){var e=fu.current;It(fu),t._currentValue=e}function uh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){du=t,op=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gn=!0),t.firstContext=null)}function hi(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(du===null)throw Error(Se(308));xs=t,du.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var mo=null;function lp(t){mo===null?mo=[t]:mo.push(t)}function Iy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,lp(e)):(n.next=r.next,r.next=n),e.interleaved=n,fr(t,i)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fr(t,n)}return r=i.interleaved,r===null?(e.next=e,lp(i)):(e.next=r.next,r.next=e),i.interleaved=e,fr(t,n)}function Wc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function vv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,i){var r=t.updateQueue;Ar=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var d=a,h=d.next;d.next=null,l===null?o=h:l.next=h,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=h:a.next=h,m.lastBaseUpdate=d))}if(o!==null){var g=r.baseState;l=0,m=h=d=null,a=o;do{var v=a.lane,_=a.eventTime;if((i&v)===v){m!==null&&(m=m.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,b=a;switch(v=e,_=n,b.tag){case 1:if(T=b.payload,typeof T=="function"){g=T.call(_,g,v);break e}g=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=b.payload,v=typeof T=="function"?T.call(_,g,v):T,v==null)break e;g=zt({},g,v);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,v=r.effects,v===null?r.effects=[a]:v.push(a))}else _={eventTime:_,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(h=m=_,d=g):m=m.next=_,l|=v;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;v=a,a=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(1);if(m===null&&(d=g),r.baseState=d,r.firstBaseUpdate=h,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ao|=l,t.lanes=l,t.memoizedState=g}}function gv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var Oy=new I0.Component().refs;function fh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:zt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?Uo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=In(),r=zr(t),o=lr(i,r);o.payload=e,n!=null&&(o.callback=n),e=Fr(t,o,r),e!==null&&(Ri(e,t,r,i),Wc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=In(),r=zr(t),o=lr(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Fr(t,o,r),e!==null&&(Ri(e,t,r,i),Wc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=In(),i=zr(t),r=lr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fr(t,r,i),e!==null&&(Ri(e,t,i,n),Wc(e,t,i))}};function yv(t,e,n,i,r,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!tl(n,i)||!tl(r,o):!0}function Ny(t,e,n){var i=!1,r=Vr,o=e.contextType;return typeof o=="object"&&o!==null?o=hi(o):(r=Hn(e)?To:bn.current,i=e.contextTypes,o=(i=i!=null)?Ns(t,r):Vr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function _v(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function dh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Oy,cp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=hi(o):(o=Hn(e)?To:bn.current,r.context=Ns(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fh(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Iu.enqueueReplaceState(r,r.state,null),hu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var a=r.refs;a===Oy&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xv(t){var e=t._init;return e(t._payload)}function Fy(t){function e(p,E){if(t){var w=p.deletions;w===null?(p.deletions=[E],p.flags|=16):w.push(E)}}function n(p,E){if(!t)return null;for(;E!==null;)e(p,E),E=E.sibling;return null}function i(p,E){for(p=new Map;E!==null;)E.key!==null?p.set(E.key,E):p.set(E.index,E),E=E.sibling;return p}function r(p,E){return p=Br(p,E),p.index=0,p.sibling=null,p}function o(p,E,w){return p.index=w,t?(w=p.alternate,w!==null?(w=w.index,w<E?(p.flags|=2,E):w):(p.flags|=2,E)):(p.flags|=1048576,E)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,E,w,L){return E===null||E.tag!==6?(E=$f(w,p.mode,L),E.return=p,E):(E=r(E,w),E.return=p,E)}function d(p,E,w,L){var P=w.type;return P===ds?m(p,E,w.props.children,L,w.key):E!==null&&(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Cr&&xv(P)===E.type)?(L=r(E,w.props),L.ref=Ea(p,E,w),L.return=p,L):(L=Kc(w.type,w.key,w.props,null,p.mode,L),L.ref=Ea(p,E,w),L.return=p,L)}function h(p,E,w,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==w.containerInfo||E.stateNode.implementation!==w.implementation?(E=Kf(w,p.mode,L),E.return=p,E):(E=r(E,w.children||[]),E.return=p,E)}function m(p,E,w,L,P){return E===null||E.tag!==7?(E=xo(w,p.mode,L,P),E.return=p,E):(E=r(E,w),E.return=p,E)}function g(p,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return E=$f(""+E,p.mode,w),E.return=p,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Jl:return w=Kc(E.type,E.key,E.props,null,p.mode,w),w.ref=Ea(p,null,E),w.return=p,w;case fs:return E=Kf(E,p.mode,w),E.return=p,E;case Cr:var L=E._init;return g(p,L(E._payload),w)}if(La(E)||ya(E))return E=xo(E,p.mode,w,null),E.return=p,E;uc(p,E)}return null}function v(p,E,w,L){var P=E!==null?E.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return P!==null?null:a(p,E,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jl:return w.key===P?d(p,E,w,L):null;case fs:return w.key===P?h(p,E,w,L):null;case Cr:return P=w._init,v(p,E,P(w._payload),L)}if(La(w)||ya(w))return P!==null?null:m(p,E,w,L,null);uc(p,w)}return null}function _(p,E,w,L,P){if(typeof L=="string"&&L!==""||typeof L=="number")return p=p.get(w)||null,a(E,p,""+L,P);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Jl:return p=p.get(L.key===null?w:L.key)||null,d(E,p,L,P);case fs:return p=p.get(L.key===null?w:L.key)||null,h(E,p,L,P);case Cr:var O=L._init;return _(p,E,w,O(L._payload),P)}if(La(L)||ya(L))return p=p.get(w)||null,m(E,p,L,P,null);uc(E,L)}return null}function T(p,E,w,L){for(var P=null,O=null,B=E,z=E=0,R=null;B!==null&&z<w.length;z++){B.index>z?(R=B,B=null):R=B.sibling;var N=v(p,B,w[z],L);if(N===null){B===null&&(B=R);break}t&&B&&N.alternate===null&&e(p,B),E=o(N,E,z),O===null?P=N:O.sibling=N,O=N,B=R}if(z===w.length)return n(p,B),Ut&&ao(p,z),P;if(B===null){for(;z<w.length;z++)B=g(p,w[z],L),B!==null&&(E=o(B,E,z),O===null?P=B:O.sibling=B,O=B);return Ut&&ao(p,z),P}for(B=i(p,B);z<w.length;z++)R=_(B,p,z,w[z],L),R!==null&&(t&&R.alternate!==null&&B.delete(R.key===null?z:R.key),E=o(R,E,z),O===null?P=R:O.sibling=R,O=R);return t&&B.forEach(function(ae){return e(p,ae)}),Ut&&ao(p,z),P}function b(p,E,w,L){var P=ya(w);if(typeof P!="function")throw Error(Se(150));if(w=P.call(w),w==null)throw Error(Se(151));for(var O=P=null,B=E,z=E=0,R=null,N=w.next();B!==null&&!N.done;z++,N=w.next()){B.index>z?(R=B,B=null):R=B.sibling;var ae=v(p,B,N.value,L);if(ae===null){B===null&&(B=R);break}t&&B&&ae.alternate===null&&e(p,B),E=o(ae,E,z),O===null?P=ae:O.sibling=ae,O=ae,B=R}if(N.done)return n(p,B),Ut&&ao(p,z),P;if(B===null){for(;!N.done;z++,N=w.next())N=g(p,N.value,L),N!==null&&(E=o(N,E,z),O===null?P=N:O.sibling=N,O=N);return Ut&&ao(p,z),P}for(B=i(p,B);!N.done;z++,N=w.next())N=_(B,p,z,N.value,L),N!==null&&(t&&N.alternate!==null&&B.delete(N.key===null?z:N.key),E=o(N,E,z),O===null?P=N:O.sibling=N,O=N);return t&&B.forEach(function(fe){return e(p,fe)}),Ut&&ao(p,z),P}function M(p,E,w,L){if(typeof w=="object"&&w!==null&&w.type===ds&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Jl:e:{for(var P=w.key,O=E;O!==null;){if(O.key===P){if(P=w.type,P===ds){if(O.tag===7){n(p,O.sibling),E=r(O,w.props.children),E.return=p,p=E;break e}}else if(O.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Cr&&xv(P)===O.type){n(p,O.sibling),E=r(O,w.props),E.ref=Ea(p,O,w),E.return=p,p=E;break e}n(p,O);break}else e(p,O);O=O.sibling}w.type===ds?(E=xo(w.props.children,p.mode,L,w.key),E.return=p,p=E):(L=Kc(w.type,w.key,w.props,null,p.mode,L),L.ref=Ea(p,E,w),L.return=p,p=L)}return l(p);case fs:e:{for(O=w.key;E!==null;){if(E.key===O)if(E.tag===4&&E.stateNode.containerInfo===w.containerInfo&&E.stateNode.implementation===w.implementation){n(p,E.sibling),E=r(E,w.children||[]),E.return=p,p=E;break e}else{n(p,E);break}else e(p,E);E=E.sibling}E=Kf(w,p.mode,L),E.return=p,p=E}return l(p);case Cr:return O=w._init,M(p,E,O(w._payload),L)}if(La(w))return T(p,E,w,L);if(ya(w))return b(p,E,w,L);uc(p,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,E!==null&&E.tag===6?(n(p,E.sibling),E=r(E,w),E.return=p,p=E):(n(p,E),E=$f(w,p.mode,L),E.return=p,p=E),l(p)):n(p,E)}return M}var ks=Fy(!0),ky=Fy(!1),Ml={},Vi=jr(Ml),ol=jr(Ml),sl=jr(Ml);function vo(t){if(t===Ml)throw Error(Se(174));return t}function up(t,e){switch(Ct(sl,e),Ct(ol,t),Ct(Vi,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wd(e,t)}It(Vi),Ct(Vi,e)}function zs(){It(Vi),It(ol),It(sl)}function zy(t){vo(sl.current);var e=vo(Vi.current),n=Wd(e,t.type);e!==n&&(Ct(ol,t),Ct(Vi,n))}function fp(t){ol.current===t&&(It(Vi),It(ol))}var Ft=jr(0);function pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hf=[];function dp(){for(var t=0;t<Hf.length;t++)Hf[t]._workInProgressVersionPrimary=null;Hf.length=0}var jc=pr.ReactCurrentDispatcher,Wf=pr.ReactCurrentBatchConfig,Co=0,kt=null,Zt=null,un=null,mu=!1,Ga=!1,al=0,OE=0;function _n(){throw Error(Se(321))}function hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Li(t[n],e[n]))return!1;return!0}function pp(t,e,n,i,r,o){if(Co=o,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jc.current=t===null||t.memoizedState===null?zE:BE,t=n(i,r),Ga){o=0;do{if(Ga=!1,al=0,25<=o)throw Error(Se(301));o+=1,un=Zt=null,e.updateQueue=null,jc.current=GE,t=n(i,r)}while(Ga)}if(jc.current=vu,e=Zt!==null&&Zt.next!==null,Co=0,un=Zt=kt=null,mu=!1,e)throw Error(Se(300));return t}function mp(){var t=al!==0;return al=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?kt.memoizedState=un=t:un=un.next=t,un}function pi(){if(Zt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var e=un===null?kt.memoizedState:un.next;if(e!==null)un=e,Zt=t;else{if(t===null)throw Error(Se(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},un===null?kt.memoizedState=un=t:un=un.next=t}return un}function ll(t,e){return typeof e=="function"?e(t):e}function jf(t){var e=pi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Zt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,d=null,h=o;do{var m=h.lane;if((Co&m)===m)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:t(i,h.action);else{var g={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(a=d=g,l=i):d=d.next=g,kt.lanes|=m,Ao|=m}h=h.next}while(h!==null&&h!==o);d===null?l=i:d.next=a,Li(i,e.memoizedState)||(Gn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=d,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,kt.lanes|=o,Ao|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xf(t){var e=pi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do o=t(o,l.action),l=l.next;while(l!==r);Li(o,e.memoizedState)||(Gn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function By(){}function Gy(t,e){var n=kt,i=pi(),r=e(),o=!Li(i.memoizedState,r);if(o&&(i.memoizedState=r,Gn=!0),i=i.queue,vp(Wy.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||un!==null&&un.memoizedState.tag&1){if(n.flags|=2048,cl(9,Hy.bind(null,n,i,r,e),void 0,null),fn===null)throw Error(Se(349));Co&30||Vy(n,e,r)}return r}function Vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hy(t,e,n,i){e.value=n,e.getSnapshot=i,jy(e)&&Xy(t)}function Wy(t,e,n){return n(function(){jy(e)&&Xy(t)})}function jy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Li(t,n)}catch{return!0}}function Xy(t){var e=fr(t,1);e!==null&&Ri(e,t,1,-1)}function Sv(t){var e=Fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:t},e.queue=t,t=t.dispatch=kE.bind(null,kt,t),[e.memoizedState,t]}function cl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yy(){return pi().memoizedState}function Xc(t,e,n,i){var r=Fi();kt.flags|=t,r.memoizedState=cl(1|e,n,void 0,i===void 0?null:i)}function Uu(t,e,n,i){var r=pi();i=i===void 0?null:i;var o=void 0;if(Zt!==null){var l=Zt.memoizedState;if(o=l.destroy,i!==null&&hp(i,l.deps)){r.memoizedState=cl(e,n,o,i);return}}kt.flags|=t,r.memoizedState=cl(1|e,n,o,i)}function Mv(t,e){return Xc(8390656,8,t,e)}function vp(t,e){return Uu(2048,8,t,e)}function qy(t,e){return Uu(4,2,t,e)}function $y(t,e){return Uu(4,4,t,e)}function Ky(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zy(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,Ky.bind(null,e,t),n)}function gp(){}function Qy(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jy(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function e_(t,e,n){return Co&21?(Li(n,e)||(n=iy(),kt.lanes|=n,Ao|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gn=!0),t.memoizedState=n)}function NE(t,e){var n=St;St=n!==0&&4>n?n:4,t(!0);var i=Wf.transition;Wf.transition={};try{t(!1),e()}finally{St=n,Wf.transition=i}}function t_(){return pi().memoizedState}function FE(t,e,n){var i=zr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},n_(t))i_(e,n);else if(n=Iy(t,e,n,i),n!==null){var r=In();Ri(n,t,i,r),r_(n,e,i)}}function kE(t,e,n){var i=zr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(n_(t))i_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,a=o(l,n);if(r.hasEagerState=!0,r.eagerState=a,Li(a,l)){var d=e.interleaved;d===null?(r.next=r,lp(e)):(r.next=d.next,d.next=r),e.interleaved=r;return}}catch{}finally{}n=Iy(t,e,r,i),n!==null&&(r=In(),Ri(n,t,i,r),r_(n,e,i))}}function n_(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function i_(t,e){Ga=mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function r_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var vu={readContext:hi,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},zE={readContext:hi,useCallback:function(t,e){return Fi().memoizedState=[t,e===void 0?null:e],t},useContext:hi,useEffect:Mv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xc(4194308,4,Ky.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xc(4,2,t,e)},useMemo:function(t,e){var n=Fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=FE.bind(null,kt,t),[i.memoizedState,t]},useRef:function(t){var e=Fi();return t={current:t},e.memoizedState=t},useState:Sv,useDebugValue:gp,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=Sv(!1),e=t[0];return t=NE.bind(null,t[1]),Fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=kt,r=Fi();if(Ut){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),fn===null)throw Error(Se(349));Co&30||Vy(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Mv(Wy.bind(null,i,o,t),[t]),i.flags|=2048,cl(9,Hy.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Fi(),e=fn.identifierPrefix;if(Ut){var n=ar,i=sr;n=(i&~(1<<32-Pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=al++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BE={readContext:hi,useCallback:Qy,useContext:hi,useEffect:vp,useImperativeHandle:Zy,useInsertionEffect:qy,useLayoutEffect:$y,useMemo:Jy,useReducer:jf,useRef:Yy,useState:function(){return jf(ll)},useDebugValue:gp,useDeferredValue:function(t){var e=pi();return e_(e,Zt.memoizedState,t)},useTransition:function(){var t=jf(ll)[0],e=pi().memoizedState;return[t,e]},useMutableSource:By,useSyncExternalStore:Gy,useId:t_,unstable_isNewReconciler:!1},GE={readContext:hi,useCallback:Qy,useContext:hi,useEffect:vp,useImperativeHandle:Zy,useInsertionEffect:qy,useLayoutEffect:$y,useMemo:Jy,useReducer:Xf,useRef:Yy,useState:function(){return Xf(ll)},useDebugValue:gp,useDeferredValue:function(t){var e=pi();return Zt===null?e.memoizedState=t:e_(e,Zt.memoizedState,t)},useTransition:function(){var t=Xf(ll)[0],e=pi().memoizedState;return[t,e]},useMutableSource:By,useSyncExternalStore:Gy,useId:t_,unstable_isNewReconciler:!1};function Bs(t,e){try{var n="",i=e;do n+=mM(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Yf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VE=typeof WeakMap=="function"?WeakMap:Map;function o_(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yu||(yu=!0,Eh=i),hh(t,e)},n}function s_(t,e,n){n=lr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hh(t,e),typeof i!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Ev(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new VE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nw.bind(null,t,e,n),e.then(t,t))}function wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var HE=pr.ReactCurrentOwner,Gn=!1;function Dn(t,e,n,i){e.child=t===null?ky(e,null,n,i):ks(e,t.child,n,i)}function bv(t,e,n,i,r){n=n.render;var o=e.ref;return Rs(e,r),i=pp(t,e,n,i,o,r),n=mp(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,dr(t,e,r)):(Ut&&n&&np(e),e.flags|=1,Dn(t,e,i,r),e.child)}function Cv(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Tp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,a_(t,e,o,i,r)):(t=Kc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(l,i)&&t.ref===e.ref)return dr(t,e,r)}return e.flags|=1,t=Br(o,i),t.ref=e.ref,t.return=e,e.child=t}function a_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(tl(o,i)&&t.ref===e.ref)if(Gn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Gn=!0);else return e.lanes=t.lanes,dr(t,e,r)}return ph(t,e,n,i,r)}function l_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Ms,Kn),Kn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ct(Ms,Kn),Kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ct(Ms,Kn),Kn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ct(Ms,Kn),Kn|=i;return Dn(t,e,r,n),e.child}function c_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ph(t,e,n,i,r){var o=Hn(n)?To:bn.current;return o=Ns(e,o),Rs(e,r),n=pp(t,e,n,i,o,r),i=mp(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,dr(t,e,r)):(Ut&&i&&np(e),e.flags|=1,Dn(t,e,n,r),e.child)}function Av(t,e,n,i,r){if(Hn(n)){var o=!0;lu(e)}else o=!1;if(Rs(e,r),e.stateNode===null)Yc(t,e),Ny(e,n,i),dh(e,n,i,r),i=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=hi(h):(h=Hn(n)?To:bn.current,h=Ns(e,h));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||d!==h)&&_v(e,l,i,h),Ar=!1;var v=e.memoizedState;l.state=v,hu(e,i,l,r),d=e.memoizedState,a!==i||v!==d||Vn.current||Ar?(typeof m=="function"&&(fh(e,n,m,i),d=e.memoizedState),(a=Ar||yv(e,n,a,i,v,d,h))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),l.props=i,l.state=d,l.context=h,i=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Uy(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:Ei(e.type,a),l.props=h,g=e.pendingProps,v=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=hi(d):(d=Hn(n)?To:bn.current,d=Ns(e,d));var _=n.getDerivedStateFromProps;(m=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||v!==d)&&_v(e,l,i,d),Ar=!1,v=e.memoizedState,l.state=v,hu(e,i,l,r);var T=e.memoizedState;a!==g||v!==T||Vn.current||Ar?(typeof _=="function"&&(fh(e,n,_,i),T=e.memoizedState),(h=Ar||yv(e,n,h,i,v,T,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,T,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,T,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=T),l.props=i,l.state=T,l.context=d,i=h):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),i=!1)}return mh(t,e,n,i,o,r)}function mh(t,e,n,i,r,o){c_(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&hv(e,n,!1),dr(t,e,o);i=e.stateNode,HE.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=ks(e,t.child,null,o),e.child=ks(e,null,a,o)):Dn(t,e,a,o),e.memoizedState=i.state,r&&hv(e,n,!0),e.child}function u_(t){var e=t.stateNode;e.pendingContext?dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(t,e.context,!1),up(t,e.containerInfo)}function Pv(t,e,n,i,r){return Fs(),rp(r),e.flags|=256,Dn(t,e,n,i),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function f_(t,e,n){var i=e.pendingProps,r=Ft.current,o=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ct(Ft,r&1),t===null)return ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Fu(l,i,0,null),t=xo(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=gh(n),e.memoizedState=vh,t):yp(e,l));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return WE(t,e,l,i,a,r,n);if(o){o=i.fallback,l=e.mode,r=t.child,a=r.sibling;var d={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=d,e.deletions=null):(i=Br(r,d),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Br(a,o):(o=xo(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?gh(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=vh,i}return o=t.child,t=o.sibling,i=Br(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yp(t,e){return e=Fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,i){return i!==null&&rp(i),ks(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WE(t,e,n,i,r,o,l){if(n)return e.flags&256?(e.flags&=-257,i=Yf(Error(Se(422))),fc(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Fu({mode:"visible",children:i.children},r,0,null),o=xo(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ks(e,t.child,null,l),e.child.memoizedState=gh(l),e.memoizedState=vh,o);if(!(e.mode&1))return fc(t,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Se(419)),i=Yf(o,i,void 0),fc(t,e,l,i)}if(a=(l&t.childLanes)!==0,Gn||a){if(i=fn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,fr(t,r),Ri(i,t,r,-1))}return wp(),i=Yf(Error(Se(421))),fc(t,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=iw.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Zn=Nr(r.nextSibling),Qn=e,Ut=!0,Ti=null,t!==null&&(ai[li++]=sr,ai[li++]=ar,ai[li++]=bo,sr=t.id,ar=t.overflow,bo=e),e=yp(e,i.children),e.flags|=4096,e)}function Rv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uh(t.return,e,n)}function qf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function d_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Dn(t,e,i.children,n),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,n,e);else if(t.tag===19)Rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ct(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qf(e,!0,n,null,o);break;case"together":qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ao|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jE(t,e,n){switch(e.tag){case 3:u_(e),Fs();break;case 5:zy(e);break;case 1:Hn(e.type)&&lu(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(fu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(Ft,Ft.current&1),e.flags|=128,null):n&e.child.childLanes?f_(t,e,n):(Ct(Ft,Ft.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Ct(Ft,Ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return d_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,l_(t,e,n)}return dr(t,e,n)}var h_,yh,p_,m_;h_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};p_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vo(Vi.current);var o=null;switch(n){case"input":r=Bd(t,r),i=Bd(t,i),o=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),o=[];break;case"textarea":r=Hd(t,r),i=Hd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=su)}jd(n,i);var l;n=null;for(h in r)if(!i.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var a=r[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(qa.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var d=i[h];if(a=r!=null?r[h]:void 0,i.hasOwnProperty(h)&&d!==a&&(d!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(qa.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Rt("scroll",t),o||a===d||(o=[])):(o=o||[]).push(h,d))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};m_=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function xn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function XE(t,e,n){var i=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return Hn(e.type)&&au(),xn(e),null;case 3:return i=e.stateNode,zs(),It(Vn),It(bn),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(cc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ti!==null&&(bh(Ti),Ti=null))),yh(t,e),xn(e),null;case 5:fp(e);var r=vo(sl.current);if(n=e.type,t!==null&&e.stateNode!=null)p_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return xn(e),null}if(t=vo(Vi.current),cc(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[zi]=e,i[rl]=o,t=(e.mode&1)!==0,n){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Ua.length;r++)Rt(Ua[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":zm(i,o),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Rt("invalid",i);break;case"textarea":Gm(i,o),Rt("invalid",i)}jd(n,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,a,t),r=["children",""+a]):qa.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Rt("scroll",i)}switch(n){case"input":ec(i),Bm(i,o,!0);break;case"textarea":ec(i),Vm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=su)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[zi]=e,t[rl]=i,h_(t,e,!1,!1),e.stateNode=t;e:{switch(l=Xd(n,i),n){case"dialog":Rt("cancel",t),Rt("close",t),r=i;break;case"iframe":case"object":case"embed":Rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ua.length;r++)Rt(Ua[r],t);r=i;break;case"source":Rt("error",t),r=i;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),r=i;break;case"details":Rt("toggle",t),r=i;break;case"input":zm(t,i),r=Bd(t,i),Rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Rt("invalid",t);break;case"textarea":Gm(t,i),r=Hd(t,i),Rt("invalid",t);break;default:r=i}jd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?j0(t,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&H0(t,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&$a(t,d):typeof d=="number"&&$a(t,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qa.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Rt("scroll",t):d!=null&&Vh(t,o,d,l))}switch(n){case"input":ec(t),Bm(t,i,!1);break;case"textarea":ec(t),Vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?bs(t,!!i.multiple,o,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(t&&e.stateNode!=null)m_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=vo(sl.current),vo(Vi.current),cc(e)){if(i=e.stateNode,n=e.memoizedProps,i[zi]=e,(o=i.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:lc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=e,e.stateNode=i}return xn(e),null;case 13:if(It(Ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Zn!==null&&e.mode&1&&!(e.flags&128))Ly(),Fs(),e.flags|=98560,o=!1;else if(o=cc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[zi]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),o=!1}else Ti!==null&&(bh(Ti),Ti=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Jt===0&&(Jt=3):wp())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return zs(),yh(t,e),t===null&&nl(e.stateNode.containerInfo),xn(e),null;case 10:return ap(e.type._context),xn(e),null;case 17:return Hn(e.type)&&au(),xn(e),null;case 19:if(It(Ft),o=e.memoizedState,o===null)return xn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)wa(o,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=pu(t),l!==null){for(e.flags|=128,wa(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ct(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&Wt()>Gs&&(e.flags|=128,i=!0,wa(o,!1),e.lanes=4194304)}else{if(!i)if(t=pu(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ut)return xn(e),null}else 2*Wt()-o.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,wa(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wt(),e.sibling=null,n=Ft.current,Ct(Ft,i?n&1|2:n&1),e):(xn(e),null);case 22:case 23:return Ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function YE(t,e){switch(ip(e),e.tag){case 1:return Hn(e.type)&&au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),It(Vn),It(bn),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(It(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ft),null;case 4:return zs(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var dc=!1,wn=!1,qE=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Gt(t,e,i)}else n.current=null}function _h(t,e,n){try{n()}catch(i){Gt(t,e,i)}}var Dv=!1;function $E(t,e){if(nh=iu,t=_y(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,h=0,m=0,g=t,v=null;t:for(;;){for(var _;g!==n||r!==0&&g.nodeType!==3||(a=l+r),g!==o||i!==0&&g.nodeType!==3||(d=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(_=g.firstChild)!==null;)v=g,g=_;for(;;){if(g===t)break t;if(v===n&&++h===r&&(a=l),v===o&&++m===i&&(d=l),(_=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=_}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},iu=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){e=Oe;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var b=T.memoizedProps,M=T.memoizedState,p=e.stateNode,E=p.getSnapshotBeforeUpdate(e.elementType===e.type?b:Ei(e.type,b),M);p.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(L){Gt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}return T=Dv,Dv=!1,T}function Va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&_h(e,n,o)}r=r.next}while(r!==i)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v_(t){var e=t.alternate;e!==null&&(t.alternate=null,v_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zi],delete e[rl],delete e[sh],delete e[DE],delete e[LE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g_(t){return t.tag===5||t.tag===3||t.tag===4}function Lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(i!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}function Mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}var vn=null,wi=!1;function Sr(t,e,n){for(n=n.child;n!==null;)y_(t,e,n),n=n.sibling}function y_(t,e,n){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:wn||Ss(n,e);case 6:var i=vn,r=wi;vn=null,Sr(t,e,n),vn=i,wi=r,vn!==null&&(wi?(t=vn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vn.removeChild(n.stateNode));break;case 18:vn!==null&&(wi?(t=vn,n=n.stateNode,t.nodeType===8?Gf(t.parentNode,n):t.nodeType===1&&Gf(t,n),Ja(t)):Gf(vn,n.stateNode));break;case 4:i=vn,r=wi,vn=n.stateNode.containerInfo,wi=!0,Sr(t,e,n),vn=i,wi=r;break;case 0:case 11:case 14:case 15:if(!wn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&_h(n,e,l),r=r.next}while(r!==i)}Sr(t,e,n);break;case 1:if(!wn&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Gt(n,e,a)}Sr(t,e,n);break;case 21:Sr(t,e,n);break;case 22:n.mode&1?(wn=(i=wn)||n.memoizedState!==null,Sr(t,e,n),wn=i):Sr(t,e,n);break;default:Sr(t,e,n)}}function Iv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qE),e.forEach(function(i){var r=rw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function gi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:vn=a.stateNode,wi=!1;break e;case 3:vn=a.stateNode.containerInfo,wi=!0;break e;case 4:vn=a.stateNode.containerInfo,wi=!0;break e}a=a.return}if(vn===null)throw Error(Se(160));y_(o,l,r),vn=null,wi=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(h){Gt(r,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)__(e,t),e=e.sibling}function __(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gi(e,t),Oi(t),i&4){try{Va(3,t,t.return),Ou(3,t)}catch(b){Gt(t,t.return,b)}try{Va(5,t,t.return)}catch(b){Gt(t,t.return,b)}}break;case 1:gi(e,t),Oi(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(gi(e,t),Oi(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{$a(r,"")}catch(b){Gt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&B0(r,o),Xd(a,l);var h=Xd(a,o);for(l=0;l<d.length;l+=2){var m=d[l],g=d[l+1];m==="style"?j0(r,g):m==="dangerouslySetInnerHTML"?H0(r,g):m==="children"?$a(r,g):Vh(r,m,g,h)}switch(a){case"input":Gd(r,o);break;case"textarea":G0(r,o);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?bs(r,!!o.multiple,_,!1):v!==!!o.multiple&&(o.defaultValue!=null?bs(r,!!o.multiple,o.defaultValue,!0):bs(r,!!o.multiple,o.multiple?[]:"",!1))}r[rl]=o}catch(b){Gt(t,t.return,b)}}break;case 6:if(gi(e,t),Oi(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(b){Gt(t,t.return,b)}}break;case 3:if(gi(e,t),Oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(b){Gt(t,t.return,b)}break;case 4:gi(e,t),Oi(t);break;case 13:gi(e,t),Oi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Sp=Wt())),i&4&&Iv(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(wn=(h=wn)||m,gi(e,t),wn=h):gi(e,t),Oi(t),i&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(Oe=t,m=t.child;m!==null;){for(g=Oe=m;Oe!==null;){switch(v=Oe,_=v.child,v.tag){case 0:case 11:case 14:case 15:Va(4,v,v.return);break;case 1:Ss(v,v.return);var T=v.stateNode;if(typeof T.componentWillUnmount=="function"){i=v,n=v.return;try{e=i,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(b){Gt(i,n,b)}}break;case 5:Ss(v,v.return);break;case 22:if(v.memoizedState!==null){Ov(g);continue}}_!==null?(_.return=v,Oe=_):Ov(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{r=g.stateNode,h?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,d=g.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=W0("display",l))}catch(b){Gt(t,t.return,b)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(b){Gt(t,t.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:gi(e,t),Oi(t),i&4&&Iv(t);break;case 21:break;default:gi(e,t),Oi(t)}}function Oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g_(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($a(r,""),i.flags&=-33);var o=Lv(t);Mh(t,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=Lv(t);Sh(t,a,l);break;default:throw Error(Se(161))}}catch(d){Gt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KE(t,e,n){Oe=t,x_(t)}function x_(t,e,n){for(var i=(t.mode&1)!==0;Oe!==null;){var r=Oe,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||dc;if(!l){var a=r.alternate,d=a!==null&&a.memoizedState!==null||wn;a=dc;var h=wn;if(dc=l,(wn=d)&&!h)for(Oe=r;Oe!==null;)l=Oe,d=l.child,l.tag===22&&l.memoizedState!==null?Nv(r):d!==null?(d.return=l,Oe=d):Nv(r);for(;o!==null;)Oe=o,x_(o),o=o.sibling;Oe=r,dc=a,wn=h}Uv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Oe=o):Uv(t)}}function Uv(t){for(;Oe!==null;){var e=Oe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wn||Ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!wn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&gv(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gv(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Ja(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}wn||e.flags&512&&xh(e)}catch(v){Gt(e,e.return,v)}}if(e===t){Oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function Ov(t){for(;Oe!==null;){var e=Oe;if(e===t){Oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function Nv(t){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(d){Gt(e,n,d)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(d){Gt(e,r,d)}}var o=e.return;try{xh(e)}catch(d){Gt(e,o,d)}break;case 5:var l=e.return;try{xh(e)}catch(d){Gt(e,l,d)}}}catch(d){Gt(e,e.return,d)}if(e===t){Oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Oe=a;break}Oe=e.return}}var ZE=Math.ceil,gu=pr.ReactCurrentDispatcher,_p=pr.ReactCurrentOwner,di=pr.ReactCurrentBatchConfig,vt=0,fn=null,Kt=null,gn=0,Kn=0,Ms=jr(0),Jt=0,ul=null,Ao=0,Nu=0,xp=0,Ha=null,kn=null,Sp=0,Gs=1/0,ir=null,yu=!1,Eh=null,kr=null,hc=!1,Lr=null,_u=0,Wa=0,wh=null,qc=-1,$c=0;function In(){return vt&6?Wt():qc!==-1?qc:qc=Wt()}function zr(t){return t.mode&1?vt&2&&gn!==0?gn&-gn:UE.transition!==null?($c===0&&($c=iy()),$c):(t=St,t!==0||(t=window.event,t=t===void 0?16:uy(t.type)),t):1}function Ri(t,e,n,i){if(50<Wa)throw Wa=0,wh=null,Error(Se(185));_l(t,n,i),(!(vt&2)||t!==fn)&&(t===fn&&(!(vt&2)&&(Nu|=n),Jt===4&&Rr(t,gn)),Wn(t,i),n===1&&vt===0&&!(e.mode&1)&&(Gs=Wt()+500,Lu&&Xr()))}function Wn(t,e){var n=t.callbackNode;UM(t,e);var i=nu(t,t===fn?gn:0);if(i===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?IE(Fv.bind(null,t)):Py(Fv.bind(null,t)),PE(function(){!(vt&6)&&Xr()}),n=null;else{switch(ry(i)){case 1:n=Yh;break;case 4:n=ty;break;case 16:n=tu;break;case 536870912:n=ny;break;default:n=tu}n=A_(n,S_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S_(t,e){if(qc=-1,$c=0,vt&6)throw Error(Se(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=nu(t,t===fn?gn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xu(t,i);else{e=i;var r=vt;vt|=2;var o=E_();(fn!==t||gn!==e)&&(ir=null,Gs=Wt()+500,_o(t,e));do try{ew();break}catch(a){M_(t,a)}while(1);sp(),gu.current=o,vt=r,Kt!==null?e=0:(fn=null,gn=0,e=Jt)}if(e!==0){if(e===2&&(r=Zd(t),r!==0&&(i=r,e=Th(t,r))),e===1)throw n=ul,_o(t,0),Rr(t,i),Wn(t,Wt()),n;if(e===6)Rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!QE(r)&&(e=xu(t,i),e===2&&(o=Zd(t),o!==0&&(i=o,e=Th(t,o))),e===1))throw n=ul,_o(t,0),Rr(t,i),Wn(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:lo(t,kn,ir);break;case 3:if(Rr(t,i),(i&130023424)===i&&(e=Sp+500-Wt(),10<e)){if(nu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){In(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=oh(lo.bind(null,t,kn,ir),e);break}lo(t,kn,ir);break;case 4:if(Rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var l=31-Pi(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZE(i/1960))-i,10<i){t.timeoutHandle=oh(lo.bind(null,t,kn,ir),i);break}lo(t,kn,ir);break;case 5:lo(t,kn,ir);break;default:throw Error(Se(329))}}}return Wn(t,Wt()),t.callbackNode===n?S_.bind(null,t):null}function Th(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(_o(t,e).flags|=256),t=xu(t,e),t!==2&&(e=kn,kn=n,e!==null&&bh(e)),t}function bh(t){kn===null?kn=t:kn.push.apply(kn,t)}function QE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Li(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~xp,e&=~Nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pi(e),i=1<<n;t[n]=-1,e&=~i}}function Fv(t){if(vt&6)throw Error(Se(327));Ds();var e=nu(t,0);if(!(e&1))return Wn(t,Wt()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var i=Zd(t);i!==0&&(e=i,n=Th(t,i))}if(n===1)throw n=ul,_o(t,0),Rr(t,e),Wn(t,Wt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lo(t,kn,ir),Wn(t,Wt()),null}function Mp(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(Gs=Wt()+500,Lu&&Xr())}}function Po(t){Lr!==null&&Lr.tag===0&&!(vt&6)&&Ds();var e=vt;vt|=1;var n=di.transition,i=St;try{if(di.transition=null,St=1,t)return t()}finally{St=i,di.transition=n,vt=e,!(vt&6)&&Xr()}}function Ep(){Kn=Ms.current,It(Ms)}function _o(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AE(n)),Kt!==null)for(n=Kt.return;n!==null;){var i=n;switch(ip(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&au();break;case 3:zs(),It(Vn),It(bn),dp();break;case 5:fp(i);break;case 4:zs();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:ap(i.type._context);break;case 22:case 23:Ep()}n=n.return}if(fn=t,Kt=t=Br(t.current,null),gn=Kn=e,Jt=0,ul=null,xp=Nu=Ao=0,kn=Ha=null,mo!==null){for(e=0;e<mo.length;e++)if(n=mo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}n.pending=i}mo=null}return t}function M_(t,e){do{var n=Kt;try{if(sp(),jc.current=vu,mu){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mu=!1}if(Co=0,un=Zt=kt=null,Ga=!1,al=0,_p.current=null,n===null||n.return===null){Jt=1,ul=e,Kt=null;break}e:{var o=t,l=n.return,a=n,d=e;if(e=gn,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,m=a,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var _=wv(l);if(_!==null){_.flags&=-257,Tv(_,l,a,o,e),_.mode&1&&Ev(o,h,e),e=_,d=h;var T=e.updateQueue;if(T===null){var b=new Set;b.add(d),e.updateQueue=b}else T.add(d);break e}else{if(!(e&1)){Ev(o,h,e),wp();break e}d=Error(Se(426))}}else if(Ut&&a.mode&1){var M=wv(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Tv(M,l,a,o,e),rp(Bs(d,a));break e}}o=d=Bs(d,a),Jt!==4&&(Jt=2),Ha===null?Ha=[o]:Ha.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=o_(o,d,e);vv(o,p);break e;case 1:a=d;var E=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof E.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(kr===null||!kr.has(w)))){o.flags|=65536,e&=-e,o.lanes|=e;var L=s_(o,a,e);vv(o,L);break e}}o=o.return}while(o!==null)}T_(n)}catch(P){e=P,Kt===n&&n!==null&&(Kt=n=n.return);continue}break}while(1)}function E_(){var t=gu.current;return gu.current=vu,t===null?vu:t}function wp(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),fn===null||!(Ao&268435455)&&!(Nu&268435455)||Rr(fn,gn)}function xu(t,e){var n=vt;vt|=2;var i=E_();(fn!==t||gn!==e)&&(ir=null,_o(t,e));do try{JE();break}catch(r){M_(t,r)}while(1);if(sp(),vt=n,gu.current=i,Kt!==null)throw Error(Se(261));return fn=null,gn=0,Jt}function JE(){for(;Kt!==null;)w_(Kt)}function ew(){for(;Kt!==null&&!TM();)w_(Kt)}function w_(t){var e=C_(t.alternate,t,Kn);t.memoizedProps=t.pendingProps,e===null?T_(t):Kt=e,_p.current=null}function T_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YE(n,e),n!==null){n.flags&=32767,Kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Kt=null;return}}else if(n=XE(n,e,Kn),n!==null){Kt=n;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);Jt===0&&(Jt=5)}function lo(t,e,n){var i=St,r=di.transition;try{di.transition=null,St=1,tw(t,e,n,i)}finally{di.transition=r,St=i}return null}function tw(t,e,n,i){do Ds();while(Lr!==null);if(vt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(OM(t,o),t===fn&&(Kt=fn=null,gn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,A_(tu,function(){return Ds(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=di.transition,di.transition=null;var l=St;St=1;var a=vt;vt|=4,_p.current=null,$E(t,n),__(n,t),SE(ih),iu=!!nh,ih=nh=null,t.current=n,KE(n),bM(),vt=a,St=l,di.transition=o}else t.current=n;if(hc&&(hc=!1,Lr=t,_u=r),o=t.pendingLanes,o===0&&(kr=null),PM(n.stateNode),Wn(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yu)throw yu=!1,t=Eh,Eh=null,t;return _u&1&&t.tag!==0&&Ds(),o=t.pendingLanes,o&1?t===wh?Wa++:(Wa=0,wh=t):Wa=0,Xr(),null}function Ds(){if(Lr!==null){var t=ry(_u),e=di.transition,n=St;try{if(di.transition=null,St=16>t?16:t,Lr===null)var i=!1;else{if(t=Lr,Lr=null,_u=0,vt&6)throw Error(Se(331));var r=vt;for(vt|=4,Oe=t.current;Oe!==null;){var o=Oe,l=o.child;if(Oe.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var h=a[d];for(Oe=h;Oe!==null;){var m=Oe;switch(m.tag){case 0:case 11:case 15:Va(8,m,o)}var g=m.child;if(g!==null)g.return=m,Oe=g;else for(;Oe!==null;){m=Oe;var v=m.sibling,_=m.return;if(v_(m),m===h){Oe=null;break}if(v!==null){v.return=_,Oe=v;break}Oe=_}}}var T=o.alternate;if(T!==null){var b=T.child;if(b!==null){T.child=null;do{var M=b.sibling;b.sibling=null,b=M}while(b!==null)}}Oe=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Oe=l;else e:for(;Oe!==null;){if(o=Oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Va(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Oe=p;break e}Oe=o.return}}var E=t.current;for(Oe=E;Oe!==null;){l=Oe;var w=l.child;if(l.subtreeFlags&2064&&w!==null)w.return=l,Oe=w;else e:for(l=E;Oe!==null;){if(a=Oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(P){Gt(a,a.return,P)}if(a===l){Oe=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,Oe=L;break e}Oe=a.return}}if(vt=r,Xr(),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{St=n,di.transition=e}}return!1}function kv(t,e,n){e=Bs(n,e),e=o_(t,e,1),t=Fr(t,e,1),e=In(),t!==null&&(_l(t,1,e),Wn(t,e))}function Gt(t,e,n){if(t.tag===3)kv(t,t,n);else for(;e!==null;){if(e.tag===3){kv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(kr===null||!kr.has(i))){t=Bs(n,t),t=s_(e,t,1),e=Fr(e,t,1),t=In(),e!==null&&(_l(e,1,t),Wn(e,t));break}}e=e.return}}function nw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=In(),t.pingedLanes|=t.suspendedLanes&n,fn===t&&(gn&n)===n&&(Jt===4||Jt===3&&(gn&130023424)===gn&&500>Wt()-Sp?_o(t,0):xp|=n),Wn(t,e)}function b_(t,e){e===0&&(t.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var n=In();t=fr(t,e),t!==null&&(_l(t,e,n),Wn(t,n))}function iw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b_(t,n)}function rw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),b_(t,n)}var C_;C_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vn.current)Gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gn=!1,jE(t,e,n);Gn=!!(t.flags&131072)}else Gn=!1,Ut&&e.flags&1048576&&Ry(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yc(t,e),t=e.pendingProps;var r=Ns(e,bn.current);Rs(e,n),r=pp(null,e,i,t,r,n);var o=mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Hn(i)?(o=!0,lu(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=Iu,e.stateNode=r,r._reactInternals=e,dh(e,i,t,n),e=mh(null,e,i,!0,o,n)):(e.tag=0,Ut&&o&&np(e),Dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sw(i),t=Ei(i,t),r){case 0:e=ph(null,e,i,t,n);break e;case 1:e=Av(null,e,i,t,n);break e;case 11:e=bv(null,e,i,t,n);break e;case 14:e=Cv(null,e,i,Ei(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),ph(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),Av(t,e,i,r,n);case 3:e:{if(u_(e),t===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Uy(t,e),hu(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Bs(Error(Se(423)),e),e=Pv(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(Se(424)),e),e=Pv(t,e,i,n,r);break e}else for(Zn=Nr(e.stateNode.containerInfo.firstChild),Qn=e,Ut=!0,Ti=null,n=ky(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=dr(t,e,n);break e}Dn(t,e,i,n)}e=e.child}return e;case 5:return zy(e),t===null&&ch(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,l=r.children,rh(i,r)?l=null:o!==null&&rh(i,o)&&(e.flags|=32),c_(t,e),Dn(t,e,l,n),e.child;case 6:return t===null&&ch(e),null;case 13:return f_(t,e,n);case 4:return up(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),bv(t,e,i,r,n);case 7:return Dn(t,e,e.pendingProps,n),e.child;case 8:return Dn(t,e,e.pendingProps.children,n),e.child;case 12:return Dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Ct(fu,i._currentValue),i._currentValue=l,o!==null)if(Li(o.value,l)){if(o.children===r.children&&!Vn.current){e=dr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var d=a.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=lr(-1,n&-n),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?d.next=d:(d.next=m.next,m.next=d),h.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),uh(o.return,n,e),a.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Se(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),uh(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=hi(r),i=i(r),e.flags|=1,Dn(t,e,i,n),e.child;case 14:return i=e.type,r=Ei(i,e.pendingProps),r=Ei(i.type,r),Cv(t,e,i,r,n);case 15:return a_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ei(i,r),Yc(t,e),e.tag=1,Hn(i)?(t=!0,lu(e)):t=!1,Rs(e,n),Ny(e,i,r),dh(e,i,r,n),mh(null,e,i,!0,t,n);case 19:return d_(t,e,n);case 22:return l_(t,e,n)}throw Error(Se(156,e.tag))};function A_(t,e){return ey(t,e)}function ow(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,e,n,i){return new ow(t,e,n,i)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sw(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===jh)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kc(t,e,n,i,r,o){var l=2;if(i=t,typeof t=="function")Tp(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case ds:return xo(n.children,r,o,e);case Hh:l=8,r|=8;break;case Nd:return t=ui(12,n,e,r|2),t.elementType=Nd,t.lanes=o,t;case Fd:return t=ui(13,n,e,r),t.elementType=Fd,t.lanes=o,t;case kd:return t=ui(19,n,e,r),t.elementType=kd,t.lanes=o,t;case F0:return Fu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O0:l=10;break e;case N0:l=9;break e;case Wh:l=11;break e;case jh:l=14;break e;case Cr:l=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=ui(l,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function xo(t,e,n,i){return t=ui(7,t,i,e),t.lanes=n,t}function Fu(t,e,n,i){return t=ui(22,t,i,e),t.elementType=F0,t.lanes=n,t.stateNode={isHidden:!1},t}function $f(t,e,n){return t=ui(6,t,null,e),t.lanes=n,t}function Kf(t,e,n){return e=ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rf(0),this.expirationTimes=Rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,i,r,o,l,a,d){return t=new aw(t,e,n,a,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ui(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(o),t}function lw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function P_(t){if(!t)return Vr;t=t._reactInternals;e:{if(Uo(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(Hn(n))return Ay(t,n,e)}return e}function R_(t,e,n,i,r,o,l,a,d){return t=bp(n,i,!0,t,r,o,l,a,d),t.context=P_(null),n=t.current,i=In(),r=zr(n),o=lr(i,r),o.callback=e??null,Fr(n,o,r),t.current.lanes=r,_l(t,r,i),Wn(t,i),t}function ku(t,e,n,i){var r=e.current,o=In(),l=zr(r);return n=P_(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fr(r,e,l),t!==null&&(Ri(t,r,l,o),Wc(t,r,l)),l}function Su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cp(t,e){zv(t,e),(t=t.alternate)&&zv(t,e)}function cw(){return null}var D_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}zu.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));ku(t,e,null,null)};zu.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Po(function(){ku(null,t,null,null)}),e[ur]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ay();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&cy(t)}};function Pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function uw(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var h=Su(l);o.call(h)}}var l=R_(e,i,t,0,null,!1,!1,"",Bv);return t._reactRootContainer=l,t[ur]=l.current,nl(t.nodeType===8?t.parentNode:t),Po(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var h=Su(d);a.call(h)}}var d=bp(t,0,!1,null,null,!1,!1,"",Bv);return t._reactRootContainer=d,t[ur]=d.current,nl(t.nodeType===8?t.parentNode:t),Po(function(){ku(e,d,n,i)}),d}function Gu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var d=Su(l);a.call(d)}}ku(e,l,t,r)}else l=uw(n,e,t,r,i);return Su(l)}oy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&(qh(e,n|1),Wn(e,Wt()),!(vt&6)&&(Gs=Wt()+500,Xr()))}break;case 13:Po(function(){var i=fr(t,1);if(i!==null){var r=In();Ri(i,t,1,r)}}),Cp(t,1)}};$h=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=In();Ri(e,t,134217728,n)}Cp(t,134217728)}};sy=function(t){if(t.tag===13){var e=zr(t),n=fr(t,e);if(n!==null){var i=In();Ri(n,t,e,i)}Cp(t,e)}};ay=function(){return St};ly=function(t,e){var n=St;try{return St=t,e()}finally{St=n}};qd=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Du(i);if(!r)throw Error(Se(90));z0(i),Gd(i,r)}}}break;case"textarea":G0(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};q0=Mp;$0=Po;var fw={usingClientEntryPoint:!1,Events:[Sl,vs,Du,X0,Y0,Mp]},Ta={findFiberByHostInstance:po,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dw={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Cu=pc.inject(dw),Gi=pc}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw;ei.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pp(e))throw Error(Se(200));return lw(t,e,null,n)};ei.createRoot=function(t,e){if(!Pp(t))throw Error(Se(299));var n=!1,i="",r=D_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,i,r),t[ur]=e.current,nl(t.nodeType===8?t.parentNode:t),new Ap(e)};ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=Q0(e),t=t===null?null:t.stateNode,t};ei.flushSync=function(t){return Po(t)};ei.hydrate=function(t,e,n){if(!Bu(e))throw Error(Se(200));return Gu(null,t,e,!0,n)};ei.hydrateRoot=function(t,e,n){if(!Pp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",l=D_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=R_(e,null,t,1,n??null,r,!1,o,l),t[ur]=e.current,nl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zu(e)};ei.render=function(t,e,n){if(!Bu(e))throw Error(Se(200));return Gu(null,t,e,!1,n)};ei.unmountComponentAtNode=function(t){if(!Bu(t))throw Error(Se(40));return t._reactRootContainer?(Po(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};ei.unstable_batchedUpdates=Mp;ei.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bu(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return Gu(t,e,n,!1,i)};ei.version="18.2.0-next-9e3b772b8-20220608";function L_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L_)}catch(t){console.error(t)}}L_(),R0.exports=ei;var hw=R0.exports,Gv=hw;Ud.createRoot=Gv.createRoot,Ud.hydrateRoot=Gv.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="152",Xo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pw=0,Vv=1,mw=2,Dp=1,I_=2,nr=3,Hr=0,Un=1,Bi=2,cn=0,Ls=1,Ch=2,Hv=3,Wv=4,fl=5,or=100,vw=101,gw=102,jv=103,Xv=104,Ah=200,yw=201,_w=202,xw=203,Lp=204,Ip=205,U_=206,Sw=207,O_=208,Mw=209,Ew=210,ww=0,Tw=1,bw=2,Ph=3,Cw=4,Aw=5,Pw=6,Rw=7,Vu=0,Dw=1,Lw=2,Hi=0,Iw=1,N_=2,Uw=3,Ow=4,Nw=5,F_=300,Vs=301,Hs=302,Mu=303,Rh=304,Hu=306,Ro=1e3,Ci=1001,Dh=1002,Qt=1003,Yv=1004,Zf=1005,ci=1006,Fw=1007,dl=1008,Do=1009,kw=1010,zw=1011,Up=1012,Bw=1013,go=1014,yo=1015,hl=1016,Gw=1017,Vw=1018,Is=1020,Hw=1021,Ai=1023,Ww=1024,jw=1025,So=1026,Ws=1027,Xw=1028,Yw=1029,qw=1030,$w=1031,Kw=1033,Qf=33776,Jf=33777,ed=33778,td=33779,qv=35840,$v=35841,Kv=35842,Zv=35843,Zw=36196,Qv=37492,Jv=37496,eg=37808,tg=37809,ng=37810,ig=37811,rg=37812,og=37813,sg=37814,ag=37815,lg=37816,cg=37817,ug=37818,fg=37819,dg=37820,hg=37821,nd=36492,Qw=36283,pg=36284,mg=36285,vg=36286,k_=3e3,Mo=3001,Jw=3200,Zs=3201,Qs=0,e1=1,Eo="",tt="srgb",Wi="srgb-linear",z_="display-p3",id=7680,t1=519,gg=35044,yg="300 es",Lh=1035;class Oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Eu=180/Math.PI;function El(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[t&255]+Sn[t>>8&255]+Sn[t>>16&255]+Sn[t>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function Tn(t,e,n){return Math.max(e,Math.min(n,t))}function n1(t,e){return(t%e+e)%e}function od(t,e,n){return(1-n)*t+n*e}function _g(t){return(t&t-1)===0&&t!==0}function i1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function mc(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,l,a,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=a,m[3]=n,m[4]=o,m[5]=d,m[6]=i,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[3],d=i[6],h=i[1],m=i[4],g=i[7],v=i[2],_=i[5],T=i[8],b=r[0],M=r[3],p=r[6],E=r[1],w=r[4],L=r[7],P=r[2],O=r[5],B=r[8];return o[0]=l*b+a*E+d*P,o[3]=l*M+a*w+d*O,o[6]=l*p+a*L+d*B,o[1]=h*b+m*E+g*P,o[4]=h*M+m*w+g*O,o[7]=h*p+m*L+g*B,o[2]=v*b+_*E+T*P,o[5]=v*M+_*w+T*O,o[8]=v*p+_*L+T*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8];return n*l*m-n*a*h-i*o*m+i*a*d+r*o*h-r*l*d}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8],g=m*l-a*h,v=a*d-m*o,_=h*o-l*d,T=n*g+i*v+r*_;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=g*b,e[1]=(r*h-m*i)*b,e[2]=(a*i-r*l)*b,e[3]=v*b,e[4]=(m*n-r*d)*b,e[5]=(r*o-a*n)*b,e[6]=_*b,e[7]=(i*d-h*n)*b,e[8]=(l*n-i*o)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,l,a){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*l+h*a)+l+e,-r*h,r*d,-r*(-h*l+d*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(sd.makeScale(e,n)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,n){return this.premultiply(sd.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new dt;function B_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const xg={};function ja(t){t in xg||(xg[t]=!0,console.warn(t))}function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ad(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const r1=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),o1=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function s1(t){return t.convertSRGBToLinear().applyMatrix3(o1)}function a1(t){return t.applyMatrix3(r1).convertLinearToSRGB()}const l1={[Wi]:t=>t,[tt]:t=>t.convertSRGBToLinear(),[z_]:s1},c1={[Wi]:t=>t,[tt]:t=>t.convertLinearToSRGB(),[z_]:a1},yi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Wi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=l1[e],r=c1[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let qo;class G_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qo===void 0&&(qo=pl("canvas")),qo.width=e.width,qo.height=e.height;const i=qo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Us(o[l]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class V_{constructor(e=null){this.isSource=!0,this.uuid=El(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?o.push(ld(r[l].image)):o.push(ld(r[l]))}else o=ld(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?G_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u1=0;class jn extends Oo{constructor(e=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,i=Ci,r=Ci,o=ci,l=dl,a=Ai,d=Do,h=jn.DEFAULT_ANISOTROPY,m=Eo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=El(),this.name="",this.source=new V_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=d,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Mo?tt:Eo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?Mo:k_}set encoding(e){ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mo?tt:Eo}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=F_;jn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],_=d[5],T=d[9],b=d[2],M=d[6],p=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-b)<.01&&Math.abs(T-M)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+b)<.1&&Math.abs(T+M)<.1&&Math.abs(h+_+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,L=(_+1)/2,P=(p+1)/2,O=(m+v)/4,B=(g+b)/4,z=(T+M)/4;return w>L&&w>P?w<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(w),r=O/i,o=B/i):L>P?L<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),i=O/r,o=z/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=B/o,r=z/o),this.set(i,r,o,n),this}let E=Math.sqrt((M-T)*(M-T)+(g-b)*(g-b)+(v-m)*(v-m));return Math.abs(E)<.001&&(E=1),this.x=(M-T)/E,this.y=(g-b)/E,this.z=(v-m)/E,this.w=Math.acos((h+_+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends Oo{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mo?tt:Eo),this.texture=new jn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ci,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new V_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class H_ extends jn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class f1 extends jn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,l,a){let d=i[r+0],h=i[r+1],m=i[r+2],g=i[r+3];const v=o[l+0],_=o[l+1],T=o[l+2],b=o[l+3];if(a===0){e[n+0]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g;return}if(a===1){e[n+0]=v,e[n+1]=_,e[n+2]=T,e[n+3]=b;return}if(g!==b||d!==v||h!==_||m!==T){let M=1-a;const p=d*v+h*_+m*T+g*b,E=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const P=Math.sqrt(w),O=Math.atan2(P,p*E);M=Math.sin(M*O)/P,a=Math.sin(a*O)/P}const L=a*E;if(d=d*M+v*L,h=h*M+_*L,m=m*M+T*L,g=g*M+b*L,M===1-a){const P=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=P,h*=P,m*=P,g*=P}}e[n]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,r,o,l){const a=i[r],d=i[r+1],h=i[r+2],m=i[r+3],g=o[l],v=o[l+1],_=o[l+2],T=o[l+3];return e[n]=a*T+m*g+d*_-h*v,e[n+1]=d*T+m*v+h*g-a*_,e[n+2]=h*T+m*_+a*v-d*g,e[n+3]=m*T-a*g-d*v-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,l=e._order,a=Math.cos,d=Math.sin,h=a(i/2),m=a(r/2),g=a(o/2),v=d(i/2),_=d(r/2),T=d(o/2);switch(l){case"XYZ":this._x=v*m*g+h*_*T,this._y=h*_*g-v*m*T,this._z=h*m*T+v*_*g,this._w=h*m*g-v*_*T;break;case"YXZ":this._x=v*m*g+h*_*T,this._y=h*_*g-v*m*T,this._z=h*m*T-v*_*g,this._w=h*m*g+v*_*T;break;case"ZXY":this._x=v*m*g-h*_*T,this._y=h*_*g+v*m*T,this._z=h*m*T+v*_*g,this._w=h*m*g-v*_*T;break;case"ZYX":this._x=v*m*g-h*_*T,this._y=h*_*g+v*m*T,this._z=h*m*T-v*_*g,this._w=h*m*g+v*_*T;break;case"YZX":this._x=v*m*g+h*_*T,this._y=h*_*g+v*m*T,this._z=h*m*T-v*_*g,this._w=h*m*g-v*_*T;break;case"XZY":this._x=v*m*g-h*_*T,this._y=h*_*g-v*m*T,this._z=h*m*T+v*_*g,this._w=h*m*g+v*_*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],l=n[1],a=n[5],d=n[9],h=n[2],m=n[6],g=n[10],v=i+a+g;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(m-d)*_,this._y=(o-h)*_,this._z=(l-r)*_}else if(i>a&&i>g){const _=2*Math.sqrt(1+i-a-g);this._w=(m-d)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(o+h)/_}else if(a>g){const _=2*Math.sqrt(1+a-i-g);this._w=(o-h)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(d+m)/_}else{const _=2*Math.sqrt(1+g-i-a);this._w=(l-r)/_,this._x=(o+h)/_,this._y=(d+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,l=e._w,a=n._x,d=n._y,h=n._z,m=n._w;return this._x=i*m+l*a+r*h-o*d,this._y=r*m+l*d+o*a-i*h,this._z=o*m+l*h+i*d-r*a,this._w=l*m-i*a-r*d-o*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const d=1-a*a;if(d<=Number.EPSILON){const _=1-n;return this._w=_*l+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),m=Math.atan2(h,a),g=Math.sin((1-n)*m)/h,v=Math.sin(n*m)/h;return this._w=l*g+this._w*v,this._x=i*g+this._x*v,this._y=r*g+this._y*v,this._z=o*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,l=e.y,a=e.z,d=e.w,h=d*n+l*r-a*i,m=d*i+a*n-o*r,g=d*r+o*i-l*n,v=-o*n-l*i-a*r;return this.x=h*d+v*-o+m*-a-g*-l,this.y=m*d+v*-l+g*-o-h*-a,this.z=g*d+v*-a+h*-l-m*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,l=n.x,a=n.y,d=n.z;return this.x=r*d-o*a,this.y=o*l-i*d,this.z=i*a-r*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new Y,Sg=new Lo;class wl{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox),$o.applyMatrix4(e.matrixWorld),this.union($o);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let l=0,a=o.count;l<a;l++)Zi.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Zi)}else r.boundingBox===null&&r.computeBoundingBox(),$o.copy(r.boundingBox),$o.applyMatrix4(e.matrixWorld),this.union($o)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),vc.subVectors(this.max,ba),Ko.subVectors(e.a,ba),Zo.subVectors(e.b,ba),Qo.subVectors(e.c,ba),Mr.subVectors(Zo,Ko),Er.subVectors(Qo,Zo),io.subVectors(Ko,Qo);let n=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-io.z,io.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,io.z,0,-io.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-io.y,io.x,0];return!ud(n,Ko,Zo,Qo,vc)||(n=[1,0,0,0,1,0,0,0,1],!ud(n,Ko,Zo,Qo,vc))?!1:(gc.crossVectors(Mr,Er),n=[gc.x,gc.y,gc.z],ud(n,Ko,Zo,Qo,vc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Zi=new Y,$o=new wl,Ko=new Y,Zo=new Y,Qo=new Y,Mr=new Y,Er=new Y,io=new Y,ba=new Y,vc=new Y,gc=new Y,ro=new Y;function ud(t,e,n,i,r){for(let o=0,l=t.length-3;o<=l;o+=3){ro.fromArray(t,o);const a=r.x*Math.abs(ro.x)+r.y*Math.abs(ro.y)+r.z*Math.abs(ro.z),d=e.dot(ro),h=n.dot(ro),m=i.dot(ro);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>a)return!1}return!0}const d1=new wl,Ca=new Y,fd=new Y;class Op{constructor(e=new Y,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):d1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const n=Ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(fd)),this.expandByPoint(Ca.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new Y,dd=new Y,yc=new Y,wr=new Y,hd=new Y,_c=new Y,pd=new Y;class h1{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){dd.copy(e).add(n).multiplyScalar(.5),yc.copy(n).sub(e).normalize(),wr.copy(this.origin).sub(dd);const o=e.distanceTo(n)*.5,l=-this.direction.dot(yc),a=wr.dot(this.direction),d=-wr.dot(yc),h=wr.lengthSq(),m=Math.abs(1-l*l);let g,v,_,T;if(m>0)if(g=l*d-a,v=l*a-d,T=o*m,g>=0)if(v>=-T)if(v<=T){const b=1/m;g*=b,v*=b,_=g*(g+l*v+2*a)+v*(l*g+v+2*d)+h}else v=o,g=Math.max(0,-(l*v+a)),_=-g*g+v*(v+2*d)+h;else v=-o,g=Math.max(0,-(l*v+a)),_=-g*g+v*(v+2*d)+h;else v<=-T?(g=Math.max(0,-(-l*o+a)),v=g>0?-o:Math.min(Math.max(-o,-d),o),_=-g*g+v*(v+2*d)+h):v<=T?(g=0,v=Math.min(Math.max(-o,-d),o),_=v*(v+2*d)+h):(g=Math.max(0,-(l*o+a)),v=g>0?o:Math.min(Math.max(-o,-d),o),_=-g*g+v*(v+2*d)+h);else v=l>0?-o:o,g=Math.max(0,-(l*v+a)),_=-g*g+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(dd).addScaledVector(yc,v),_}intersectSphere(e,n){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),a=i-l,d=i+l;return d<0?null:a<0?this.at(d,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,l,a,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),m>=0?(o=(e.min.y-v.y)*m,l=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,l=(e.min.y-v.y)*m),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),g>=0?(a=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(a=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),i>d||a>r)||((a>i||i!==i)&&(i=a),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,i,r,o){hd.subVectors(n,e),_c.subVectors(i,e),pd.crossVectors(hd,_c);let l=this.direction.dot(pd),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;wr.subVectors(this.origin,e);const d=a*this.direction.dot(_c.crossVectors(wr,_c));if(d<0)return null;const h=a*this.direction.dot(hd.cross(wr));if(h<0||d+h>l)return null;const m=-a*wr.dot(pd);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,l,a,d,h,m,g,v,_,T,b,M){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=l,p[9]=a,p[13]=d,p[2]=h,p[6]=m,p[10]=g,p[14]=v,p[3]=_,p[7]=T,p[11]=b,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jo.setFromMatrixColumn(e,0).length(),o=1/Jo.setFromMatrixColumn(e,1).length(),l=1/Jo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),a=Math.sin(i),d=Math.cos(r),h=Math.sin(r),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=l*m,_=l*g,T=a*m,b=a*g;n[0]=d*m,n[4]=-d*g,n[8]=h,n[1]=_+T*h,n[5]=v-b*h,n[9]=-a*d,n[2]=b-v*h,n[6]=T+_*h,n[10]=l*d}else if(e.order==="YXZ"){const v=d*m,_=d*g,T=h*m,b=h*g;n[0]=v+b*a,n[4]=T*a-_,n[8]=l*h,n[1]=l*g,n[5]=l*m,n[9]=-a,n[2]=_*a-T,n[6]=b+v*a,n[10]=l*d}else if(e.order==="ZXY"){const v=d*m,_=d*g,T=h*m,b=h*g;n[0]=v-b*a,n[4]=-l*g,n[8]=T+_*a,n[1]=_+T*a,n[5]=l*m,n[9]=b-v*a,n[2]=-l*h,n[6]=a,n[10]=l*d}else if(e.order==="ZYX"){const v=l*m,_=l*g,T=a*m,b=a*g;n[0]=d*m,n[4]=T*h-_,n[8]=v*h+b,n[1]=d*g,n[5]=b*h+v,n[9]=_*h-T,n[2]=-h,n[6]=a*d,n[10]=l*d}else if(e.order==="YZX"){const v=l*d,_=l*h,T=a*d,b=a*h;n[0]=d*m,n[4]=b-v*g,n[8]=T*g+_,n[1]=g,n[5]=l*m,n[9]=-a*m,n[2]=-h*m,n[6]=_*g+T,n[10]=v-b*g}else if(e.order==="XZY"){const v=l*d,_=l*h,T=a*d,b=a*h;n[0]=d*m,n[4]=-g,n[8]=h*m,n[1]=v*g+b,n[5]=l*m,n[9]=_*g-T,n[2]=T*g-_,n[6]=a*m,n[10]=b*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p1,e,m1)}lookAt(e,n,i){const r=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Tr.crossVectors(i,qn),Tr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Tr.crossVectors(i,qn)),Tr.normalize(),xc.crossVectors(qn,Tr),r[0]=Tr.x,r[4]=xc.x,r[8]=qn.x,r[1]=Tr.y,r[5]=xc.y,r[9]=qn.y,r[2]=Tr.z,r[6]=xc.z,r[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[4],d=i[8],h=i[12],m=i[1],g=i[5],v=i[9],_=i[13],T=i[2],b=i[6],M=i[10],p=i[14],E=i[3],w=i[7],L=i[11],P=i[15],O=r[0],B=r[4],z=r[8],R=r[12],N=r[1],ae=r[5],fe=r[9],$=r[13],te=r[2],j=r[6],ce=r[10],pe=r[14],X=r[3],J=r[7],ne=r[11],Te=r[15];return o[0]=l*O+a*N+d*te+h*X,o[4]=l*B+a*ae+d*j+h*J,o[8]=l*z+a*fe+d*ce+h*ne,o[12]=l*R+a*$+d*pe+h*Te,o[1]=m*O+g*N+v*te+_*X,o[5]=m*B+g*ae+v*j+_*J,o[9]=m*z+g*fe+v*ce+_*ne,o[13]=m*R+g*$+v*pe+_*Te,o[2]=T*O+b*N+M*te+p*X,o[6]=T*B+b*ae+M*j+p*J,o[10]=T*z+b*fe+M*ce+p*ne,o[14]=T*R+b*$+M*pe+p*Te,o[3]=E*O+w*N+L*te+P*X,o[7]=E*B+w*ae+L*j+P*J,o[11]=E*z+w*fe+L*ce+P*ne,o[15]=E*R+w*$+L*pe+P*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],l=e[1],a=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],_=e[14],T=e[3],b=e[7],M=e[11],p=e[15];return T*(+o*d*g-r*h*g-o*a*v+i*h*v+r*a*_-i*d*_)+b*(+n*d*_-n*h*v+o*l*v-r*l*_+r*h*m-o*d*m)+M*(+n*h*g-n*a*_-o*l*g+i*l*_+o*a*m-i*h*m)+p*(-r*a*m-n*d*g+n*a*v+r*l*g-i*l*v+i*d*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],_=e[11],T=e[12],b=e[13],M=e[14],p=e[15],E=g*M*h-b*v*h+b*d*_-a*M*_-g*d*p+a*v*p,w=T*v*h-m*M*h-T*d*_+l*M*_+m*d*p-l*v*p,L=m*b*h-T*g*h+T*a*_-l*b*_-m*a*p+l*g*p,P=T*g*d-m*b*d-T*a*v+l*b*v+m*a*M-l*g*M,O=n*E+i*w+r*L+o*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=E*B,e[1]=(b*v*o-g*M*o-b*r*_+i*M*_+g*r*p-i*v*p)*B,e[2]=(a*M*o-b*d*o+b*r*h-i*M*h-a*r*p+i*d*p)*B,e[3]=(g*d*o-a*v*o-g*r*h+i*v*h+a*r*_-i*d*_)*B,e[4]=w*B,e[5]=(m*M*o-T*v*o+T*r*_-n*M*_-m*r*p+n*v*p)*B,e[6]=(T*d*o-l*M*o-T*r*h+n*M*h+l*r*p-n*d*p)*B,e[7]=(l*v*o-m*d*o+m*r*h-n*v*h-l*r*_+n*d*_)*B,e[8]=L*B,e[9]=(T*g*o-m*b*o-T*i*_+n*b*_+m*i*p-n*g*p)*B,e[10]=(l*b*o-T*a*o+T*i*h-n*b*h-l*i*p+n*a*p)*B,e[11]=(m*a*o-l*g*o-m*i*h+n*g*h+l*i*_-n*a*_)*B,e[12]=P*B,e[13]=(m*b*r-T*g*r+T*i*v-n*b*v-m*i*M+n*g*M)*B,e[14]=(T*a*r-l*b*r-T*i*d+n*b*d+l*i*M-n*a*M)*B,e[15]=(l*g*r-m*a*r+m*i*d-n*g*d-l*i*v+n*a*v)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,l=e.x,a=e.y,d=e.z,h=o*l,m=o*a;return this.set(h*l+i,h*a-r*d,h*d+r*a,0,h*a+r*d,m*a+i,m*d-r*l,0,h*d-r*a,m*d+r*l,o*d*d+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,l=n._y,a=n._z,d=n._w,h=o+o,m=l+l,g=a+a,v=o*h,_=o*m,T=o*g,b=l*m,M=l*g,p=a*g,E=d*h,w=d*m,L=d*g,P=i.x,O=i.y,B=i.z;return r[0]=(1-(b+p))*P,r[1]=(_+L)*P,r[2]=(T-w)*P,r[3]=0,r[4]=(_-L)*O,r[5]=(1-(v+p))*O,r[6]=(M+E)*O,r[7]=0,r[8]=(T+w)*B,r[9]=(M-E)*B,r[10]=(1-(v+b))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Jo.set(r[0],r[1],r[2]).length();const l=Jo.set(r[4],r[5],r[6]).length(),a=Jo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],_i.copy(this);const h=1/o,m=1/l,g=1/a;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=m,_i.elements[5]*=m,_i.elements[6]*=m,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,n.setFromRotationMatrix(_i),i.x=o,i.y=l,i.z=a,this}makePerspective(e,n,i,r,o,l){const a=this.elements,d=2*o/(n-e),h=2*o/(i-r),m=(n+e)/(n-e),g=(i+r)/(i-r),v=-(l+o)/(l-o),_=-2*l*o/(l-o);return a[0]=d,a[4]=0,a[8]=m,a[12]=0,a[1]=0,a[5]=h,a[9]=g,a[13]=0,a[2]=0,a[6]=0,a[10]=v,a[14]=_,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,l){const a=this.elements,d=1/(n-e),h=1/(i-r),m=1/(l-o),g=(n+e)*d,v=(i+r)*h,_=(l+o)*m;return a[0]=2*d,a[4]=0,a[8]=0,a[12]=-g,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-v,a[2]=0,a[6]=0,a[10]=-2*m,a[14]=-_,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jo=new Y,_i=new Vt,p1=new Y(0,0,0),m1=new Y(1,1,1),Tr=new Y,xc=new Y,qn=new Y,Mg=new Vt,Eg=new Lo;class Wu{constructor(e=0,n=0,i=0,r=Wu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],a=r[8],d=r[1],h=r[5],m=r[9],g=r[2],v=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-m,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wu.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v1=0;const wg=new Y,es=new Lo,Ji=new Vt,Sc=new Y,Aa=new Y,g1=new Y,y1=new Lo,Tg=new Y(1,0,0),bg=new Y(0,1,0),Cg=new Y(0,0,1),_1={type:"added"},Ag={type:"removed"};class tn extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Y,n=new Wu,i=new Lo,r=new Y(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new dt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,n){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sc.copy(e):Sc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Aa,Sc,this.up):Ji.lookAt(Sc,Aa,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Ji),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ag)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Ag)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const l=this.children[r].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,g1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,d){return a[d.uuid]===void 0&&(a[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const d=a.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let d=0,h=this.material.length;d<h;d++)a.push(o(e.materials,this.material[d]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const d=this.animations[a];r.animations.push(o(e.animations,d))}}if(n){const a=l(e.geometries),d=l(e.materials),h=l(e.textures),m=l(e.images),g=l(e.shapes),v=l(e.skeletons),_=l(e.animations),T=l(e.nodes);a.length>0&&(i.geometries=a),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),_.length>0&&(i.animations=_),T.length>0&&(i.nodes=T)}return i.object=r,i;function l(a){const d=[];for(const h in a){const m=a[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Y(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Y,er=new Y,md=new Y,tr=new Y,ts=new Y,ns=new Y,Pg=new Y,vd=new Y,gd=new Y,yd=new Y;let Mc=!1;class bi{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xi.subVectors(e,n),r.cross(xi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){xi.subVectors(r,n),er.subVectors(i,n),md.subVectors(e,n);const l=xi.dot(xi),a=xi.dot(er),d=xi.dot(md),h=er.dot(er),m=er.dot(md),g=l*h-a*a;if(g===0)return o.set(-2,-1,-1);const v=1/g,_=(h*d-a*m)*v,T=(l*m-a*d)*v;return o.set(1-_-T,T,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,tr),tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getUV(e,n,i,r,o,l,a,d){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),this.getInterpolation(e,n,i,r,o,l,a,d)}static getInterpolation(e,n,i,r,o,l,a,d){return this.getBarycoord(e,n,i,r,tr),d.setScalar(0),d.addScaledVector(o,tr.x),d.addScaledVector(l,tr.y),d.addScaledVector(a,tr.z),d}static isFrontFacing(e,n,i,r){return xi.subVectors(i,n),er.subVectors(e,n),xi.cross(er).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),xi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),bi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return bi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let l,a;ts.subVectors(r,i),ns.subVectors(o,i),vd.subVectors(e,i);const d=ts.dot(vd),h=ns.dot(vd);if(d<=0&&h<=0)return n.copy(i);gd.subVectors(e,r);const m=ts.dot(gd),g=ns.dot(gd);if(m>=0&&g<=m)return n.copy(r);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return l=d/(d-m),n.copy(i).addScaledVector(ts,l);yd.subVectors(e,o);const _=ts.dot(yd),T=ns.dot(yd);if(T>=0&&_<=T)return n.copy(o);const b=_*h-d*T;if(b<=0&&h>=0&&T<=0)return a=h/(h-T),n.copy(i).addScaledVector(ns,a);const M=m*T-_*g;if(M<=0&&g-m>=0&&_-T>=0)return Pg.subVectors(o,r),a=(g-m)/(g-m+(_-T)),n.copy(r).addScaledVector(Pg,a);const p=1/(M+b+v);return l=b*p,a=v*p,n.copy(i).addScaledVector(ts,l).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let x1=0;class mr extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=El(),this.name="",this.type="Material",this.blending=Ls,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lp,this.blendDst=Ip,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ph,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=id,this.stencilZFail=id,this.stencilZPass=id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const a in o){const d=o[a];delete d.metadata,l.push(d)}return l}if(n){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function _d(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=yi.workingColorSpace){return this.r=e,this.g=n,this.b=i,yi.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=yi.workingColorSpace){if(e=n1(e,1),n=Tn(n,0,1),i=Tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=_d(l,o,e+1/3),this.g=_d(l,o,e),this.b=_d(l,o,e-1/3)}return yi.toWorkingColorSpace(this,r),this}setStyle(e,n=tt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tt){const i=j_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=ad(e.r),this.g=ad(e.g),this.b=ad(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return yi.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Tn(Mn.r*255,0,255))*65536+Math.round(Tn(Mn.g*255,0,255))*256+Math.round(Tn(Mn.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yi.workingColorSpace){yi.fromWorkingColorSpace(Mn.copy(this),n);const i=Mn.r,r=Mn.g,o=Mn.b,l=Math.max(i,r,o),a=Math.min(i,r,o);let d,h;const m=(a+l)/2;if(a===l)d=0,h=0;else{const g=l-a;switch(h=m<=.5?g/(l+a):g/(2-l-a),l){case i:d=(r-o)/g+(r<o?6:0);break;case r:d=(o-i)/g+2;break;case o:d=(i-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,n=yi.workingColorSpace){return yi.fromWorkingColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=tt){yi.fromWorkingColorSpace(Mn.copy(this),e);const n=Mn.r,i=Mn.g,r=Mn.b;return e!==tt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),Si.h+=e,Si.s+=n,Si.l+=i,this.setHSL(Si.h,Si.s,Si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(Ec);const i=od(Si.h,Ec.h,n),r=od(Si.s,Ec.s,n),o=od(Si.l,Ec.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ke;Ke.NAMES=j_;class wo extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,wc=new Ne;class Di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wc.fromBufferAttribute(this,n),wc.applyMatrix3(e),this.setXY(n,wc.x,wc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mc(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mc(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mc(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class X_ extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Y_ extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let S1=0;const si=new Vt,xd=new tn,is=new Y,$n=new wl,Pa=new wl,ln=new Y;class mi extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?Y_:X_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new dt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,i){return si.makeTranslation(e,n,i),this.applyMatrix4(si),this}scale(e,n,i){return si.makeScale(e,n,i),this.applyMatrix4(si),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Op);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const a=n[o];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors($n.min,Pa.min),$n.expandByPoint(ln),ln.addVectors($n.max,Pa.max),$n.expandByPoint(ln)):($n.expandByPoint(Pa.min),$n.expandByPoint(Pa.max))}$n.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)ln.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ln));if(n)for(let o=0,l=n.length;o<l;o++){const a=n[o],d=this.morphTargetsRelative;for(let h=0,m=a.count;h<m;h++)ln.fromBufferAttribute(a,h),d&&(is.fromBufferAttribute(e,h),ln.add(is)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,l=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*a),4));const d=this.getAttribute("tangent").array,h=[],m=[];for(let N=0;N<a;N++)h[N]=new Y,m[N]=new Y;const g=new Y,v=new Y,_=new Y,T=new Ne,b=new Ne,M=new Ne,p=new Y,E=new Y;function w(N,ae,fe){g.fromArray(r,N*3),v.fromArray(r,ae*3),_.fromArray(r,fe*3),T.fromArray(l,N*2),b.fromArray(l,ae*2),M.fromArray(l,fe*2),v.sub(g),_.sub(g),b.sub(T),M.sub(T);const $=1/(b.x*M.y-M.x*b.y);isFinite($)&&(p.copy(v).multiplyScalar(M.y).addScaledVector(_,-b.y).multiplyScalar($),E.copy(_).multiplyScalar(b.x).addScaledVector(v,-M.x).multiplyScalar($),h[N].add(p),h[ae].add(p),h[fe].add(p),m[N].add(E),m[ae].add(E),m[fe].add(E))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ce=$+te;j<ce;j+=3)w(i[j+0],i[j+1],i[j+2])}const P=new Y,O=new Y,B=new Y,z=new Y;function R(N){B.fromArray(o,N*3),z.copy(B);const ae=h[N];P.copy(ae),P.sub(B.multiplyScalar(B.dot(ae))).normalize(),O.crossVectors(z,ae);const $=O.dot(m[N])<0?-1:1;d[N*4]=P.x,d[N*4+1]=P.y,d[N*4+2]=P.z,d[N*4+3]=$}for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ce=$+te;j<ce;j+=3)R(i[j+0]),R(i[j+1]),R(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let v=0,_=i.count;v<_;v++)i.setXYZ(v,0,0,0);const r=new Y,o=new Y,l=new Y,a=new Y,d=new Y,h=new Y,m=new Y,g=new Y;if(e)for(let v=0,_=e.count;v<_;v+=3){const T=e.getX(v+0),b=e.getX(v+1),M=e.getX(v+2);r.fromBufferAttribute(n,T),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,M),m.subVectors(l,o),g.subVectors(r,o),m.cross(g),a.fromBufferAttribute(i,T),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),a.add(m),d.add(m),h.add(m),i.setXYZ(T,a.x,a.y,a.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(M,h.x,h.y,h.z)}else for(let v=0,_=n.count;v<_;v+=3)r.fromBufferAttribute(n,v+0),o.fromBufferAttribute(n,v+1),l.fromBufferAttribute(n,v+2),m.subVectors(l,o),g.subVectors(r,o),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,d){const h=a.array,m=a.itemSize,g=a.normalized,v=new h.constructor(d.length*m);let _=0,T=0;for(let b=0,M=d.length;b<M;b++){a.isInterleavedBufferAttribute?_=d[b]*a.data.stride+a.offset:_=d[b]*m;for(let p=0;p<m;p++)v[T++]=h[_++]}return new Di(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,r=this.attributes;for(const a in r){const d=r[a],h=e(d,i);n.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const d=[],h=o[a];for(let m=0,g=h.length;m<g;m++){const v=h[m],_=e(v,i);d.push(_)}n.morphAttributes[a]=d}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,d=l.length;a<d;a++){const h=l[a];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const _=h[g];m.push(_.toJSON(e.data))}m.length>0&&(r[d]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(n))}const o=e.morphAttributes;for(const h in o){const m=[],g=o[h];for(let v=0,_=g.length;v<_;v++)m.push(g[v].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,m=l.length;h<m;h++){const g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new Vt,Ni=new h1,Tc=new Op,Dg=new Y,rs=new Y,os=new Y,ss=new Y,Sd=new Y,bc=new Y,Cc=new Ne,Ac=new Ne,Pc=new Ne,Lg=new Y,Ig=new Y,Ug=new Y,Rc=new Y,Dc=new Y;class Ln extends tn{constructor(e=new mi,n=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){bc.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const m=a[d],g=o[d];m!==0&&(Sd.fromBufferAttribute(g,e),l?bc.addScaledVector(Sd,m):bc.addScaledVector(Sd.sub(n),m))}n.add(bc)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(o),Ni.copy(e.ray).recast(e.near),!(Tc.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Tc,Dg)===null||Ni.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Rg.copy(o).invert(),Ni.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,g=r.groups,v=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,T=g.length;_<T;_++){const b=g[_],M=o[b.materialIndex],p=Math.max(b.start,v.start),E=Math.min(l.count,Math.min(b.start+b.count,v.start+v.count));for(let w=p,L=E;w<L;w+=3){const P=l.getX(w),O=l.getX(w+1),B=l.getX(w+2);i=Lc(this,M,e,Ni,d,h,m,P,O,B),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=b.materialIndex,n.push(i))}}else{const _=Math.max(0,v.start),T=Math.min(l.count,v.start+v.count);for(let b=_,M=T;b<M;b+=3){const p=l.getX(b),E=l.getX(b+1),w=l.getX(b+2);i=Lc(this,o,e,Ni,d,h,m,p,E,w),i&&(i.faceIndex=Math.floor(b/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let _=0,T=g.length;_<T;_++){const b=g[_],M=o[b.materialIndex],p=Math.max(b.start,v.start),E=Math.min(a.count,Math.min(b.start+b.count,v.start+v.count));for(let w=p,L=E;w<L;w+=3){const P=w,O=w+1,B=w+2;i=Lc(this,M,e,Ni,d,h,m,P,O,B),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=b.materialIndex,n.push(i))}}else{const _=Math.max(0,v.start),T=Math.min(a.count,v.start+v.count);for(let b=_,M=T;b<M;b+=3){const p=b,E=b+1,w=b+2;i=Lc(this,o,e,Ni,d,h,m,p,E,w),i&&(i.faceIndex=Math.floor(b/3),n.push(i))}}}}function M1(t,e,n,i,r,o,l,a){let d;if(e.side===Un?d=i.intersectTriangle(l,o,r,!0,a):d=i.intersectTriangle(r,o,l,e.side===Hr,a),d===null)return null;Dc.copy(a),Dc.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Dc);return h<n.near||h>n.far?null:{distance:h,point:Dc.clone(),object:t}}function Lc(t,e,n,i,r,o,l,a,d,h){t.getVertexPosition(a,rs),t.getVertexPosition(d,os),t.getVertexPosition(h,ss);const m=M1(t,e,n,i,rs,os,ss,Rc);if(m){r&&(Cc.fromBufferAttribute(r,a),Ac.fromBufferAttribute(r,d),Pc.fromBufferAttribute(r,h),m.uv=bi.getInterpolation(Rc,rs,os,ss,Cc,Ac,Pc,new Ne)),o&&(Cc.fromBufferAttribute(o,a),Ac.fromBufferAttribute(o,d),Pc.fromBufferAttribute(o,h),m.uv1=bi.getInterpolation(Rc,rs,os,ss,Cc,Ac,Pc,new Ne),m.uv2=m.uv1),l&&(Lg.fromBufferAttribute(l,a),Ig.fromBufferAttribute(l,d),Ug.fromBufferAttribute(l,h),m.normal=bi.getInterpolation(Rc,rs,os,ss,Lg,Ig,Ug,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const g={a,b:d,c:h,normal:new Y,materialIndex:0};bi.getNormal(rs,os,ss,g.normal),m.face=g}return m}class Tl extends mi{constructor(e=1,n=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const a=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const d=[],h=[],m=[],g=[];let v=0,_=0;T("z","y","x",-1,-1,i,n,e,l,o,0),T("z","y","x",1,-1,i,n,-e,l,o,1),T("x","z","y",1,1,e,i,n,r,l,2),T("x","z","y",1,-1,e,i,-n,r,l,3),T("x","y","z",1,-1,e,n,i,r,o,4),T("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(g,2));function T(b,M,p,E,w,L,P,O,B,z,R){const N=L/B,ae=P/z,fe=L/2,$=P/2,te=O/2,j=B+1,ce=z+1;let pe=0,X=0;const J=new Y;for(let ne=0;ne<ce;ne++){const Te=ne*ae-$;for(let ve=0;ve<j;ve++){const oe=ve*N-fe;J[b]=oe*E,J[M]=Te*w,J[p]=te,h.push(J.x,J.y,J.z),J[b]=0,J[M]=0,J[p]=O>0?1:-1,m.push(J.x,J.y,J.z),g.push(ve/B),g.push(1-ne/z),pe+=1}}for(let ne=0;ne<z;ne++)for(let Te=0;Te<B;Te++){const ve=v+Te+j*ne,oe=v+Te+j*(ne+1),q=v+(Te+1)+j*(ne+1),Ee=v+(Te+1)+j*ne;d.push(ve,oe,Ee),d.push(oe,q,Ee),X+=6}a.addGroup(_,X,R),_+=X,v+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Rn(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function E1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function q_(t){return t.getRenderTarget()===null?t.outputColorSpace:Wi}const Bn={clone:js,merge:Rn};var w1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?n.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[r]={type:"m4",value:l.toArray()}:n.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zn extends $_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Eu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eu*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/d,n-=l.offsetY*i/h,r*=l.width/d,i*=l.height/h}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class b1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new zn(as,ls,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new zn(as,ls,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const l=new zn(as,ls,e,n);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const a=new zn(as,ls,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const d=new zn(as,ls,e,n);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const h=new zn(as,ls,e,n);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,a,d,h]=this.children,m=e.getRenderTarget(),g=e.toneMapping,v=e.xr.enabled;e.toneMapping=Hi,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,d),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(n,h),e.setRenderTarget(m),e.toneMapping=g,e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class K_ extends jn{constructor(e,n,i,r,o,l,a,d,h,m){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,i,r,o,l,a,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C1 extends en{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mo?tt:Eo),this.texture=new K_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tl(5,5,5),o=new Lt({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:cn});o.uniforms.tEquirect.value=n;const l=new Ln(r,o),a=n.minFilter;return n.minFilter===dl&&(n.minFilter=ci),new b1(1,10,this).update(e,l),n.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,r);e.setRenderTarget(o)}}const Md=new Y,A1=new Y,P1=new dt;class co{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Md.subVectors(i,n).cross(A1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Md),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||P1.getNormalMatrix(e),r=this.coplanarPoint(Md).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new Op,Ic=new Y;class Np{constructor(e=new co,n=new co,i=new co,r=new co,o=new co,l=new co){this.planes=[e,n,i,r,o,l]}set(e,n,i,r,o,l){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],a=i[3],d=i[4],h=i[5],m=i[6],g=i[7],v=i[8],_=i[9],T=i[10],b=i[11],M=i[12],p=i[13],E=i[14],w=i[15];return n[0].setComponents(a-r,g-d,b-v,w-M).normalize(),n[1].setComponents(a+r,g+d,b+v,w+M).normalize(),n[2].setComponents(a+o,g+h,b+_,w+p).normalize(),n[3].setComponents(a-o,g-h,b-_,w-p).normalize(),n[4].setComponents(a-l,g-m,b-T,w-E).normalize(),n[5].setComponents(a+l,g+m,b+T,w+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(e){return oo.center.set(0,0,0),oo.radius=.7071067811865476,oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ic.x=r.normal.x>0?e.max.x:e.min.x,Ic.y=r.normal.y>0?e.max.y:e.min.y,Ic.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z_(){let t=null,e=!1,n=null,i=null;function r(o,l){n(o,l),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function R1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(h,m){const g=h.array,v=h.usage,_=t.createBuffer();t.bindBuffer(m,_),t.bufferData(m,g,v),h.onUploadCallback();let T;if(g instanceof Float32Array)T=t.FLOAT;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)T=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=t.UNSIGNED_SHORT;else if(g instanceof Int16Array)T=t.SHORT;else if(g instanceof Uint32Array)T=t.UNSIGNED_INT;else if(g instanceof Int32Array)T=t.INT;else if(g instanceof Int8Array)T=t.BYTE;else if(g instanceof Uint8Array)T=t.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)T=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:T,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function o(h,m,g){const v=m.array,_=m.updateRange;t.bindBuffer(g,h),_.count===-1?t.bufferSubData(g,0,v):(n?t.bufferSubData(g,_.offset*v.BYTES_PER_ELEMENT,v,_.offset,_.count):t.bufferSubData(g,_.offset*v.BYTES_PER_ELEMENT,v.subarray(_.offset,_.offset+_.count)),_.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);m&&(t.deleteBuffer(m.buffer),i.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const v=i.get(h);(!v||v.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=i.get(h);g===void 0?i.set(h,r(h,m)):g.version<h.version&&(o(g.buffer,h,m),g.version=h.version)}return{get:l,remove:a,update:d}}class bl extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,l=n/2,a=Math.floor(i),d=Math.floor(r),h=a+1,m=d+1,g=e/a,v=n/d,_=[],T=[],b=[],M=[];for(let p=0;p<m;p++){const E=p*v-l;for(let w=0;w<h;w++){const L=w*g-o;T.push(L,-E,0),b.push(0,0,1),M.push(w/a),M.push(1-p/d)}}for(let p=0;p<d;p++)for(let E=0;E<a;E++){const w=E+h*p,L=E+h*(p+1),P=E+1+h*(p+1),O=E+1+h*p;_.push(w,L,O),_.push(L,P,O)}this.setIndex(_),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(b,3)),this.setAttribute("uv",new dn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F1="vec3 transformed = vec3( position );",k1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B1=`#ifdef USE_IRIDESCENCE
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
#endif`,G1=`#ifdef USE_BUMPMAP
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K1=`#define PI 3.141592653589793
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
} // validated`,Z1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q1=`vec3 transformedNormal = objectNormal;
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
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
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
}`,mT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_T=`uniform bool receiveShadow;
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
#endif`,xT=`#if defined( USE_ENVMAP )
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
#endif`,ST=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ET=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TT=`PhysicalMaterial material;
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
#endif`,bT=`struct PhysicalMaterial {
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
}`,CT=`
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
#endif`,AT=`#if defined( RE_IndirectDiffuse )
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
#endif`,PT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,RT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,UT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,OT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FT=`#if defined( USE_POINTS_UV )
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
#endif`,kT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GT=`#ifdef USE_MORPHNORMALS
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
#endif`,VT=`#ifdef USE_MORPHTARGETS
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
#endif`,HT=`#ifdef USE_MORPHTARGETS
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
#endif`,WT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,KT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fb=`float getShadowMask() {
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
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#ifdef USE_UV
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
#endif`,Eb=`#ifdef USE_UV
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
#endif`,wb=`#ifdef USE_UV
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
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lb=`#include <common>
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
}`,Ib=`#if DEPTH_PACKING == 3200
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
}`,Ub=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kb=`uniform float scale;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,Hb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,jb=`#define MATCAP
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
}`,Xb=`#define NORMAL
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
}`,Yb=`#define NORMAL
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
}`,qb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,Kb=`#define STANDARD
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
}`,Zb=`#define STANDARD
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
}`,Qb=`#define TOON
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
}`,Jb=`#define TOON
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
}`,eC=`uniform float size;
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
}`,tC=`uniform vec3 diffuse;
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
}`,nC=`#include <common>
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
}`,iC=`uniform vec3 color;
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
}`,rC=`uniform float rotation;
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
}`,oC=`uniform vec3 diffuse;
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
}`,at={alphamap_fragment:D1,alphamap_pars_fragment:L1,alphatest_fragment:I1,alphatest_pars_fragment:U1,aomap_fragment:O1,aomap_pars_fragment:N1,begin_vertex:F1,beginnormal_vertex:k1,bsdfs:z1,iridescence_fragment:B1,bumpmap_pars_fragment:G1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:H1,clipping_planes_pars_vertex:W1,clipping_planes_vertex:j1,color_fragment:X1,color_pars_fragment:Y1,color_pars_vertex:q1,color_vertex:$1,common:K1,cube_uv_reflection_fragment:Z1,defaultnormal_vertex:Q1,displacementmap_pars_vertex:J1,displacementmap_vertex:eT,emissivemap_fragment:tT,emissivemap_pars_fragment:nT,encodings_fragment:iT,encodings_pars_fragment:rT,envmap_fragment:oT,envmap_common_pars_fragment:sT,envmap_pars_fragment:aT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:xT,envmap_vertex:cT,fog_vertex:uT,fog_pars_vertex:fT,fog_fragment:dT,fog_pars_fragment:hT,gradientmap_pars_fragment:pT,lightmap_fragment:mT,lightmap_pars_fragment:vT,lights_lambert_fragment:gT,lights_lambert_pars_fragment:yT,lights_pars_begin:_T,lights_toon_fragment:ST,lights_toon_pars_fragment:MT,lights_phong_fragment:ET,lights_phong_pars_fragment:wT,lights_physical_fragment:TT,lights_physical_pars_fragment:bT,lights_fragment_begin:CT,lights_fragment_maps:AT,lights_fragment_end:PT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:DT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:IT,map_fragment:UT,map_pars_fragment:OT,map_particle_fragment:NT,map_particle_pars_fragment:FT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:zT,morphcolor_vertex:BT,morphnormal_vertex:GT,morphtarget_pars_vertex:VT,morphtarget_vertex:HT,normal_fragment_begin:WT,normal_fragment_maps:jT,normal_pars_fragment:XT,normal_pars_vertex:YT,normal_vertex:qT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:KT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:QT,iridescence_pars_fragment:JT,output_fragment:eb,packing:tb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:rb,dithering_pars_fragment:ob,roughnessmap_fragment:sb,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:db,skinning_pars_vertex:hb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:vb,specularmap_pars_fragment:gb,tonemapping_fragment:yb,tonemapping_pars_fragment:_b,transmission_fragment:xb,transmission_pars_fragment:Sb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:wb,worldpos_vertex:Tb,background_vert:bb,background_frag:Cb,backgroundCube_vert:Ab,backgroundCube_frag:Pb,cube_vert:Rb,cube_frag:Db,depth_vert:Lb,depth_frag:Ib,distanceRGBA_vert:Ub,distanceRGBA_frag:Ob,equirect_vert:Nb,equirect_frag:Fb,linedashed_vert:kb,linedashed_frag:zb,meshbasic_vert:Bb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:Hb,meshmatcap_vert:Wb,meshmatcap_frag:jb,meshnormal_vert:Xb,meshnormal_frag:Yb,meshphong_vert:qb,meshphong_frag:$b,meshphysical_vert:Kb,meshphysical_frag:Zb,meshtoon_vert:Qb,meshtoon_frag:Jb,points_vert:eC,points_frag:tC,shadow_vert:nC,shadow_frag:iC,sprite_vert:rC,sprite_frag:oC},Re={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}}},ki={basic:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Rn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Rn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Rn([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Rn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Rn([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Rn([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Rn([Re.common,Re.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Rn([Re.lights,Re.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ki.physical={uniforms:Rn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Uc={r:0,b:0,g:0};function sC(t,e,n,i,r,o,l){const a=new Ke(0);let d=o===!0?0:1,h,m,g=null,v=0,_=null;function T(M,p){let E=!1,w=p.isScene===!0?p.background:null;switch(w&&w.isTexture&&(w=(p.backgroundBlurriness>0?n:e).get(w)),w===null?b(a,d):w&&w.isColor&&(b(w,1),E=!0),t.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,l),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,l),E=!0;break}(t.autoClear||E)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Hu)?(m===void 0&&(m=new Ln(new Tl(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:js(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,m.material.toneMapped=w.colorSpace!==tt,(g!==w||v!==w.version||_!==t.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,_=t.toneMapping),m.layers.enableAll(),M.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Ln(new bl(2,2),new Lt({name:"BackgroundMaterial",uniforms:js(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=w.colorSpace!==tt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||_!==t.toneMapping)&&(h.material.needsUpdate=!0,g=w,v=w.version,_=t.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function b(M,p){M.getRGB(Uc,q_(t)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,p,l)}return{getClearColor:function(){return a},setClearColor:function(M,p=1){a.set(M),d=p,b(a,d)},getClearAlpha:function(){return d},setClearAlpha:function(M){d=M,b(a,d)},render:T}}function aC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,a={},d=M(null);let h=d,m=!1;function g(te,j,ce,pe,X){let J=!1;if(l){const ne=b(pe,ce,j);h!==ne&&(h=ne,_(h.object)),J=p(te,pe,ce,X),J&&E(te,pe,ce,X)}else{const ne=j.wireframe===!0;(h.geometry!==pe.id||h.program!==ce.id||h.wireframe!==ne)&&(h.geometry=pe.id,h.program=ce.id,h.wireframe=ne,J=!0)}X!==null&&n.update(X,t.ELEMENT_ARRAY_BUFFER),(J||m)&&(m=!1,z(te,j,ce,pe),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function v(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function _(te){return i.isWebGL2?t.bindVertexArray(te):o.bindVertexArrayOES(te)}function T(te){return i.isWebGL2?t.deleteVertexArray(te):o.deleteVertexArrayOES(te)}function b(te,j,ce){const pe=ce.wireframe===!0;let X=a[te.id];X===void 0&&(X={},a[te.id]=X);let J=X[j.id];J===void 0&&(J={},X[j.id]=J);let ne=J[pe];return ne===void 0&&(ne=M(v()),J[pe]=ne),ne}function M(te){const j=[],ce=[],pe=[];for(let X=0;X<r;X++)j[X]=0,ce[X]=0,pe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:pe,object:te,attributes:{},index:null}}function p(te,j,ce,pe){const X=h.attributes,J=j.attributes;let ne=0;const Te=ce.getAttributes();for(const ve in Te)if(Te[ve].location>=0){const q=X[ve];let Ee=J[ve];if(Ee===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(Ee=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(Ee=te.instanceColor)),q===void 0||q.attribute!==Ee||Ee&&q.data!==Ee.data)return!0;ne++}return h.attributesNum!==ne||h.index!==pe}function E(te,j,ce,pe){const X={},J=j.attributes;let ne=0;const Te=ce.getAttributes();for(const ve in Te)if(Te[ve].location>=0){let q=J[ve];q===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(q=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(q=te.instanceColor));const Ee={};Ee.attribute=q,q&&q.data&&(Ee.data=q.data),X[ve]=Ee,ne++}h.attributes=X,h.attributesNum=ne,h.index=pe}function w(){const te=h.newAttributes;for(let j=0,ce=te.length;j<ce;j++)te[j]=0}function L(te){P(te,0)}function P(te,j){const ce=h.newAttributes,pe=h.enabledAttributes,X=h.attributeDivisors;ce[te]=1,pe[te]===0&&(t.enableVertexAttribArray(te),pe[te]=1),X[te]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,j),X[te]=j)}function O(){const te=h.newAttributes,j=h.enabledAttributes;for(let ce=0,pe=j.length;ce<pe;ce++)j[ce]!==te[ce]&&(t.disableVertexAttribArray(ce),j[ce]=0)}function B(te,j,ce,pe,X,J){i.isWebGL2===!0&&(ce===t.INT||ce===t.UNSIGNED_INT)?t.vertexAttribIPointer(te,j,ce,X,J):t.vertexAttribPointer(te,j,ce,pe,X,J)}function z(te,j,ce,pe){if(i.isWebGL2===!1&&(te.isInstancedMesh||pe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const X=pe.attributes,J=ce.getAttributes(),ne=j.defaultAttributeValues;for(const Te in J){const ve=J[Te];if(ve.location>=0){let oe=X[Te];if(oe===void 0&&(Te==="instanceMatrix"&&te.instanceMatrix&&(oe=te.instanceMatrix),Te==="instanceColor"&&te.instanceColor&&(oe=te.instanceColor)),oe!==void 0){const q=oe.normalized,Ee=oe.itemSize,we=n.get(oe);if(we===void 0)continue;const H=we.buffer,Ze=we.type,He=we.bytesPerElement;if(oe.isInterleavedBufferAttribute){const be=oe.data,Ge=be.stride,ht=oe.offset;if(be.isInstancedInterleavedBuffer){for(let Be=0;Be<ve.locationSize;Be++)P(ve.location+Be,be.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Be=0;Be<ve.locationSize;Be++)L(ve.location+Be);t.bindBuffer(t.ARRAY_BUFFER,H);for(let Be=0;Be<ve.locationSize;Be++)B(ve.location+Be,Ee/ve.locationSize,Ze,q,Ge*He,(ht+Ee/ve.locationSize*Be)*He)}else{if(oe.isInstancedBufferAttribute){for(let be=0;be<ve.locationSize;be++)P(ve.location+be,oe.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<ve.locationSize;be++)L(ve.location+be);t.bindBuffer(t.ARRAY_BUFFER,H);for(let be=0;be<ve.locationSize;be++)B(ve.location+be,Ee/ve.locationSize,Ze,q,Ee*He,Ee/ve.locationSize*be*He)}}else if(ne!==void 0){const q=ne[Te];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(ve.location,q);break;case 3:t.vertexAttrib3fv(ve.location,q);break;case 4:t.vertexAttrib4fv(ve.location,q);break;default:t.vertexAttrib1fv(ve.location,q)}}}}O()}function R(){fe();for(const te in a){const j=a[te];for(const ce in j){const pe=j[ce];for(const X in pe)T(pe[X].object),delete pe[X];delete j[ce]}delete a[te]}}function N(te){if(a[te.id]===void 0)return;const j=a[te.id];for(const ce in j){const pe=j[ce];for(const X in pe)T(pe[X].object),delete pe[X];delete j[ce]}delete a[te.id]}function ae(te){for(const j in a){const ce=a[j];if(ce[te.id]===void 0)continue;const pe=ce[te.id];for(const X in pe)T(pe[X].object),delete pe[X];delete ce[te.id]}}function fe(){$(),m=!0,h!==d&&(h=d,_(h.object))}function $(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:fe,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:w,enableAttribute:L,disableUnusedAttributes:O}}function lC(t,e,n,i){const r=i.isWebGL2;let o;function l(h){o=h}function a(h,m){t.drawArrays(o,h,m),n.update(m,o,1)}function d(h,m,g){if(g===0)return;let v,_;if(r)v=t,_="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](o,h,m,g),n.update(m,o,g)}this.setMode=l,this.render=a,this.renderInstances=d}function cC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const d=o(a);d!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const h=l||e.has("WEBGL_draw_buffers"),m=n.logarithmicDepthBuffer===!0,g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),T=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),b=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,L=l||e.has("OES_texture_float"),P=w&&L,O=l?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:T,maxAttributes:b,maxVertexUniforms:M,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:w,floatFragmentTextures:L,floatVertexTextures:P,maxSamples:O}}function uC(t){const e=this;let n=null,i=0,r=!1,o=!1;const l=new co,a=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const _=g.length!==0||v||i!==0||r;return r=v,i=g.length,_},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){n=m(g,v,0)},this.setState=function(g,v,_){const T=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,p=t.get(g);if(!r||T===null||T.length===0||o&&!M)o?m(null):h();else{const E=o?0:i,w=E*4;let L=p.clippingState||null;d.value=L,L=m(T,v,w,_);for(let P=0;P!==w;++P)L[P]=n[P];p.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,v,_,T){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=d.value,T!==!0||M===null){const p=_+b*4,E=v.matrixWorldInverse;a.getNormalMatrix(E),(M===null||M.length<p)&&(M=new Float32Array(p));for(let w=0,L=_;w!==b;++w,L+=4)l.copy(g[w]).applyMatrix4(E,a),l.normal.toArray(M,L),M[L+3]=l.constant}d.value=M,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}function fC(t){let e=new WeakMap;function n(l,a){return a===Mu?l.mapping=Vs:a===Rh&&(l.mapping=Hs),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Mu||a===Rh)if(e.has(l)){const d=e.get(l).texture;return n(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new C1(d.height/2);return h.fromEquirectangularTexture(t,l),e.set(l,h),l.addEventListener("dispose",r),n(h.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const d=e.get(a);d!==void 0&&(e.delete(a),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class ju extends $_{constructor(e=-1,n=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,a=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,a-=m*this.view.offsetY,d=a-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,Og=[.125,.215,.35,.446,.526,.582],ho=20,Ed=new ju,Ng=new Ke;let wd=null;const uo=(1+Math.sqrt(5))/2,cs=1/uo,Fg=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,uo,cs),new Y(0,uo,-cs),new Y(cs,0,uo),new Y(-cs,0,uo),new Y(uo,cs,0),new Y(-uo,cs,0)];class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){wd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd),e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:hl,format:Ai,colorSpace:Wi,depthBuffer:!1},r=zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dC(o)),this._blurMaterial=hC(o,e,n)}return r}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,Ed)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(Ng),m.toneMapping=Hi,m.autoClear=!1;const _=new wo({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),T=new Ln(new Tl,_);let b=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,b=!0):(_.color.copy(Ng),b=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,d[p],0),a.lookAt(h[p],0,0)):E===1?(a.up.set(0,0,d[p]),a.lookAt(0,h[p],0)):(a.up.set(0,d[p],0),a.lookAt(0,0,h[p]));const w=this._cubeSize;Oc(r,E*w,p>2?w:0,w,w),m.setRenderTarget(r),b&&m.render(T,a),m.render(e,a)}T.geometry.dispose(),T.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Ln(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const d=this._cubeSize;Oc(n,0,0,3*d,2*d),i.setRenderTarget(n),i.render(l,Ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Fg[(r-1)%Fg.length];this._blur(e,r-1,r,o,l)}n.autoClear=i}_blur(e,n,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,l,a){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ln(this._lodPlanes[r],h),v=h.uniforms,_=this._sizeLods[i]-1,T=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*ho-1),b=o/T,M=isFinite(o)?1+Math.floor(m*b):ho;M>ho&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ho}`);const p=[];let E=0;for(let B=0;B<ho;++B){const z=B/b,R=Math.exp(-z*z/2);p.push(R),B===0?E+=R:B<M&&(E+=2*R)}for(let B=0;B<p.length;B++)p[B]=p[B]/E;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=p,v.latitudinal.value=l==="latitudinal",a&&(v.poleAxis.value=a);const{_lodMax:w}=this;v.dTheta.value=T,v.mipInt.value=w-i;const L=this._sizeLods[r],P=3*L*(r>w-Es?r-w+Es:0),O=4*(this._cubeSize-L);Oc(n,P,O,3*L,2*L),d.setRenderTarget(n),d.render(g,Ed)}}function dC(t){const e=[],n=[],i=[];let r=t;const o=t-Es+1+Og.length;for(let l=0;l<o;l++){const a=Math.pow(2,r);n.push(a);let d=1/a;l>t-Es?d=Og[l-t+Es-1]:l===0&&(d=0),i.push(d);const h=1/(a-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,T=6,b=3,M=2,p=1,E=new Float32Array(b*T*_),w=new Float32Array(M*T*_),L=new Float32Array(p*T*_);for(let O=0;O<_;O++){const B=O%3*2/3-1,z=O>2?0:-1,R=[B,z,0,B+2/3,z,0,B+2/3,z+1,0,B,z,0,B+2/3,z+1,0,B,z+1,0];E.set(R,b*T*O),w.set(v,M*T*O);const N=[O,O,O,O,O,O];L.set(N,p*T*O)}const P=new mi;P.setAttribute("position",new Di(E,b)),P.setAttribute("uv",new Di(w,M)),P.setAttribute("faceIndex",new Di(L,p)),e.push(P),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zg(t,e,n){const i=new en(t,e,n);return i.texture.mapping=Hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hC(t,e,n){const i=new Float32Array(ho),r=new Y(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fp(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Bg(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fp(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Gg(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Fp(){return`

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
	`}function pC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const d=a.mapping,h=d===Mu||d===Rh,m=d===Vs||d===Hs;if(h||m)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let g=e.get(a);return n===null&&(n=new kg(t)),g=h?n.fromEquirectangular(a,g):n.fromCubemap(a,g),e.set(a,g),g.texture}else{if(e.has(a))return e.get(a).texture;{const g=a.image;if(h&&g&&g.height>0||m&&g&&r(g)){n===null&&(n=new kg(t));const v=h?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,v),a.addEventListener("dispose",o),v.texture}else return null}}}return a}function r(a){let d=0;const h=6;for(let m=0;m<h;m++)a[m]!==void 0&&d++;return d===h}function o(a){const d=a.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function mC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vC(t,e,n,i){const r={},o=new WeakMap;function l(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",l),delete r[v.id];const _=o.get(v);_&&(e.remove(_),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function a(g,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const T in v)e.update(v[T],t.ARRAY_BUFFER);const _=g.morphAttributes;for(const T in _){const b=_[T];for(let M=0,p=b.length;M<p;M++)e.update(b[M],t.ARRAY_BUFFER)}}function h(g){const v=[],_=g.index,T=g.attributes.position;let b=0;if(_!==null){const E=_.array;b=_.version;for(let w=0,L=E.length;w<L;w+=3){const P=E[w+0],O=E[w+1],B=E[w+2];v.push(P,O,O,B,B,P)}}else{const E=T.array;b=T.version;for(let w=0,L=E.length/3-1;w<L;w+=3){const P=w+0,O=w+1,B=w+2;v.push(P,O,O,B,B,P)}}const M=new(B_(v)?Y_:X_)(v,1);M.version=b;const p=o.get(g);p&&e.remove(p),o.set(g,M)}function m(g){const v=o.get(g);if(v){const _=g.index;_!==null&&v.version<_.version&&h(g)}else h(g);return o.get(g)}return{get:a,update:d,getWireframeAttribute:m}}function gC(t,e,n,i){const r=i.isWebGL2;let o;function l(v){o=v}let a,d;function h(v){a=v.type,d=v.bytesPerElement}function m(v,_){t.drawElements(o,_,a,v*d),n.update(_,o,1)}function g(v,_,T){if(T===0)return;let b,M;if(r)b=t,M="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[M](o,_,a,v*d,T),n.update(_,o,T)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=g}function yC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,a){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _C(t,e){return t[0]-e[0]}function xC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function SC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,l=new Dt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function d(h,m,g){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,T=_!==void 0?_.length:0;let b=o.get(m);if(b===void 0||b.count!==T){let te=function(){fe.dispose(),o.delete(m),m.removeEventListener("dispose",te)};b!==void 0&&b.texture.dispose();const E=m.morphAttributes.position!==void 0,w=m.morphAttributes.normal!==void 0,L=m.morphAttributes.color!==void 0,P=m.morphAttributes.position||[],O=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let z=0;E===!0&&(z=1),w===!0&&(z=2),L===!0&&(z=3);let R=m.attributes.position.count*z,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ae=new Float32Array(R*N*4*T),fe=new H_(ae,R,N,T);fe.type=yo,fe.needsUpdate=!0;const $=z*4;for(let j=0;j<T;j++){const ce=P[j],pe=O[j],X=B[j],J=R*N*4*j;for(let ne=0;ne<ce.count;ne++){const Te=ne*$;E===!0&&(l.fromBufferAttribute(ce,ne),ae[J+Te+0]=l.x,ae[J+Te+1]=l.y,ae[J+Te+2]=l.z,ae[J+Te+3]=0),w===!0&&(l.fromBufferAttribute(pe,ne),ae[J+Te+4]=l.x,ae[J+Te+5]=l.y,ae[J+Te+6]=l.z,ae[J+Te+7]=0),L===!0&&(l.fromBufferAttribute(X,ne),ae[J+Te+8]=l.x,ae[J+Te+9]=l.y,ae[J+Te+10]=l.z,ae[J+Te+11]=X.itemSize===4?l.w:1)}}b={count:T,texture:fe,size:new Ne(R,N)},o.set(m,b),m.addEventListener("dispose",te)}let M=0;for(let E=0;E<v.length;E++)M+=v[E];const p=m.morphTargetsRelative?1:1-M;g.getUniforms().setValue(t,"morphTargetBaseInfluence",p),g.getUniforms().setValue(t,"morphTargetInfluences",v),g.getUniforms().setValue(t,"morphTargetsTexture",b.texture,n),g.getUniforms().setValue(t,"morphTargetsTextureSize",b.size)}else{const _=v===void 0?0:v.length;let T=i[m.id];if(T===void 0||T.length!==_){T=[];for(let w=0;w<_;w++)T[w]=[w,0];i[m.id]=T}for(let w=0;w<_;w++){const L=T[w];L[0]=w,L[1]=v[w]}T.sort(xC);for(let w=0;w<8;w++)w<_&&T[w][1]?(a[w][0]=T[w][0],a[w][1]=T[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(_C);const b=m.morphAttributes.position,M=m.morphAttributes.normal;let p=0;for(let w=0;w<8;w++){const L=a[w],P=L[0],O=L[1];P!==Number.MAX_SAFE_INTEGER&&O?(b&&m.getAttribute("morphTarget"+w)!==b[P]&&m.setAttribute("morphTarget"+w,b[P]),M&&m.getAttribute("morphNormal"+w)!==M[P]&&m.setAttribute("morphNormal"+w,M[P]),r[w]=O,p+=O):(b&&m.hasAttribute("morphTarget"+w)===!0&&m.deleteAttribute("morphTarget"+w),M&&m.hasAttribute("morphNormal"+w)===!0&&m.deleteAttribute("morphNormal"+w),r[w]=0)}const E=m.morphTargetsRelative?1:1-p;g.getUniforms().setValue(t,"morphTargetBaseInfluence",E),g.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:d}}function MC(t,e,n,i){let r=new WeakMap;function o(d){const h=i.render.frame,m=d.geometry,g=e.get(d,m);return r.get(g)!==h&&(e.update(g),r.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",a)===!1&&d.addEventListener("dispose",a),n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER)),g}function l(){r=new WeakMap}function a(d){const h=d.target;h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:l}}const Q_=new jn,J_=new H_,ex=new f1,tx=new K_,Vg=[],Hg=[],Wg=new Float32Array(16),jg=new Float32Array(9),Xg=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Vg[r];if(o===void 0&&(o=new Float32Array(r),Vg[r]=o),e!==0){i.toArray(o,0);for(let l=1,a=0;l!==e;++l)a+=n,t[l].toArray(o,a)}return o}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xu(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function EC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function TC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function CC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Xg.set(i),t.uniformMatrix2fv(this.addr,!1,Xg),rn(n,i)}}function AC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;jg.set(i),t.uniformMatrix3fv(this.addr,!1,jg),rn(n,i)}}function PC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Wg.set(i),t.uniformMatrix4fv(this.addr,!1,Wg),rn(n,i)}}function RC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function UC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function kC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Q_,r)}function zC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ex,r)}function BC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tx,r)}function GC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||J_,r)}function VC(t){switch(t){case 5126:return EC;case 35664:return wC;case 35665:return TC;case 35666:return bC;case 35674:return CC;case 35675:return AC;case 35676:return PC;case 5124:case 35670:return RC;case 35667:case 35671:return DC;case 35668:case 35672:return LC;case 35669:case 35673:return IC;case 5125:return UC;case 36294:return OC;case 36295:return NC;case 36296:return FC;case 35678:case 36198:case 36298:case 36306:case 35682:return kC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return BC;case 36289:case 36303:case 36311:case 36292:return GC}}function HC(t,e){t.uniform1fv(this.addr,e)}function WC(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function jC(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function XC(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function YC(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qC(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $C(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function KC(t,e){t.uniform1iv(this.addr,e)}function ZC(t,e){t.uniform2iv(this.addr,e)}function QC(t,e){t.uniform3iv(this.addr,e)}function JC(t,e){t.uniform4iv(this.addr,e)}function eA(t,e){t.uniform1uiv(this.addr,e)}function tA(t,e){t.uniform2uiv(this.addr,e)}function nA(t,e){t.uniform3uiv(this.addr,e)}function iA(t,e){t.uniform4uiv(this.addr,e)}function rA(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2D(e[l]||Q_,o[l])}function oA(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture3D(e[l]||ex,o[l])}function sA(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTextureCube(e[l]||tx,o[l])}function aA(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2DArray(e[l]||J_,o[l])}function lA(t){switch(t){case 5126:return HC;case 35664:return WC;case 35665:return jC;case 35666:return XC;case 35674:return YC;case 35675:return qC;case 35676:return $C;case 5124:case 35670:return KC;case 35667:case 35671:return ZC;case 35668:case 35672:return QC;case 35669:case 35673:return JC;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return aA}}class cA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=VC(n.type)}}class uA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=lA(n.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function Yg(t,e){t.seq.push(e),t.map[e.id]=e}function dA(t,e,n){const i=t.name,r=i.length;for(Td.lastIndex=0;;){const o=Td.exec(i),l=Td.lastIndex;let a=o[1];const d=o[2]==="]",h=o[3];if(d&&(a=a|0),h===void 0||h==="["&&l+2===r){Yg(n,h===void 0?new cA(a,t,e):new uA(a,t,e));break}else{let g=n.map[a];g===void 0&&(g=new fA(a),Yg(n,g)),n=g}}}class Zc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);dA(o,l,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,l=n.length;o!==l;++o){const a=n[o],d=i[a.id];d.needsUpdate!==!1&&a.setValue(e,d.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in n&&i.push(l)}return i}}function qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let hA=0;function pA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=r;l<o;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${n[l]}`)}return i.join(`
`)}function mA(t){switch(t){case Wi:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function $g(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+pA(t.getShaderSource(e),l)}else return r}function vA(t,e){const n=mA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function gA(t,e){let n;switch(e){case Iw:n="Linear";break;case N_:n="Reinhard";break;case Uw:n="OptimizedCineon";break;case Ow:n="ACESFilmic";break;case Nw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oa).join(`
`)}function _A(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),l=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:a}}return n}function Oa(t){return t!==""}function Kg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(t){return t.replace(SA,MA)}function MA(t,e){const n=at[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ih(n)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(t){return t.replace(EA,wA)}function wA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Jg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===I_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function bA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function AA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dw:e="ENVMAP_BLENDING_MIX";break;case Lw:e="ENVMAP_BLENDING_ADD";break}return e}function PA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RA(t,e,n,i){const r=t.getContext(),o=n.defines;let l=n.vertexShader,a=n.fragmentShader;const d=TA(n),h=bA(n),m=CA(n),g=AA(n),v=PA(n),_=n.isWebGL2?"":yA(n),T=_A(o),b=r.createProgram();let M,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=[T].filter(Oa).join(`
`),M.length>0&&(M+=`
`),p=[_,T].filter(Oa).join(`
`),p.length>0&&(p+=`
`)):(M=[Jg(n),"#define SHADER_NAME "+n.shaderName,T,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),p=[_,Jg(n),"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?at.tonemapping_pars_fragment:"",n.toneMapping!==Hi?gA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.encodings_pars_fragment,vA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),l=Ih(l),l=Kg(l,n),l=Zg(l,n),a=Ih(a),a=Kg(a,n),a=Zg(a,n),l=Qg(l),a=Qg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,M=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=E+M+l,L=E+p+a,P=qg(r,r.VERTEX_SHADER,w),O=qg(r,r.FRAGMENT_SHADER,L);if(r.attachShader(b,P),r.attachShader(b,O),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),t.debug.checkShaderErrors){const R=r.getProgramInfoLog(b).trim(),N=r.getShaderInfoLog(P).trim(),ae=r.getShaderInfoLog(O).trim();let fe=!0,$=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(fe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,P,O);else{const te=$g(r,P,"vertex"),j=$g(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+te+`
`+j)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||ae==="")&&($=!1);$&&(this.diagnostics={runnable:fe,programLog:R,vertexShader:{log:N,prefix:M},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(P),r.deleteShader(O);let B;this.getUniforms=function(){return B===void 0&&(B=new Zc(r,b)),B};let z;return this.getAttributes=function(){return z===void 0&&(z=xA(r,b)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.name=n.shaderName,this.id=hA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=O,this}let DA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IA(e),n.set(e,i)),i}}class IA{constructor(e){this.id=DA++,this.code=e,this.usedTimes=0}}function UA(t,e,n,i,r,o,l){const a=new W_,d=new LA,h=[],m=r.isWebGL2,g=r.logarithmicDepthBuffer,v=r.vertexTextures;let _=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return R===1?"uv1":R===2?"uv2":R===3?"uv3":"uv"}function M(R,N,ae,fe,$){const te=fe.fog,j=$.geometry,ce=R.isMeshStandardMaterial?fe.environment:null,pe=(R.isMeshStandardMaterial?n:e).get(R.envMap||ce),X=pe&&pe.mapping===Hu?pe.image.height:null,J=T[R.type];R.precision!==null&&(_=r.getMaxPrecision(R.precision),_!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",_,"instead."));const ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Te=ne!==void 0?ne.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let oe,q,Ee,we;if(J){const xt=ki[J];oe=xt.vertexShader,q=xt.fragmentShader}else oe=R.vertexShader,q=R.fragmentShader,d.update(R),Ee=d.getVertexShaderID(R),we=d.getFragmentShaderID(R);const H=t.getRenderTarget(),Ze=$.isInstancedMesh===!0,He=!!R.map,be=!!R.matcap,Ge=!!pe,ht=!!R.aoMap,Be=!!R.lightMap,Qe=!!R.bumpMap,Ye=!!R.normalMap,Tt=!!R.displacementMap,Ot=!!R.emissiveMap,gt=!!R.metalnessMap,lt=!!R.roughnessMap,Mt=R.clearcoat>0,jt=R.iridescence>0,F=R.sheen>0,D=R.transmission>0,se=Mt&&!!R.clearcoatMap,me=Mt&&!!R.clearcoatNormalMap,xe=Mt&&!!R.clearcoatRoughnessMap,Ce=jt&&!!R.iridescenceMap,G=jt&&!!R.iridescenceThicknessMap,he=F&&!!R.sheenColorMap,ie=F&&!!R.sheenRoughnessMap,Ae=!!R.specularMap,Ie=!!R.specularColorMap,ze=!!R.specularIntensityMap,De=D&&!!R.transmissionMap,Fe=D&&!!R.thicknessMap,qe=!!R.gradientMap,Je=!!R.alphaMap,At=R.alphaTest>0,W=!!R.extensions,le=!!j.attributes.uv1,ge=!!j.attributes.uv2,Le=!!j.attributes.uv3;return{isWebGL2:m,shaderID:J,shaderName:R.type,vertexShader:oe,fragmentShader:q,defines:R.defines,customVertexShaderID:Ee,customFragmentShaderID:we,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:_,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Wi,map:He,matcap:be,envMap:Ge,envMapMode:Ge&&pe.mapping,envMapCubeUVHeight:X,aoMap:ht,lightMap:Be,bumpMap:Qe,normalMap:Ye,displacementMap:v&&Tt,emissiveMap:Ot,normalMapObjectSpace:Ye&&R.normalMapType===e1,normalMapTangentSpace:Ye&&R.normalMapType===Qs,metalnessMap:gt,roughnessMap:lt,clearcoat:Mt,clearcoatMap:se,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:jt,iridescenceMap:Ce,iridescenceThicknessMap:G,sheen:F,sheenColorMap:he,sheenRoughnessMap:ie,specularMap:Ae,specularColorMap:Ie,specularIntensityMap:ze,transmission:D,transmissionMap:De,thicknessMap:Fe,gradientMap:qe,opaque:R.transparent===!1&&R.blending===Ls,alphaMap:Je,alphaTest:At,combine:R.combine,mapUv:He&&b(R.map.channel),aoMapUv:ht&&b(R.aoMap.channel),lightMapUv:Be&&b(R.lightMap.channel),bumpMapUv:Qe&&b(R.bumpMap.channel),normalMapUv:Ye&&b(R.normalMap.channel),displacementMapUv:Tt&&b(R.displacementMap.channel),emissiveMapUv:Ot&&b(R.emissiveMap.channel),metalnessMapUv:gt&&b(R.metalnessMap.channel),roughnessMapUv:lt&&b(R.roughnessMap.channel),clearcoatMapUv:se&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:G&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:ie&&b(R.sheenRoughnessMap.channel),specularMapUv:Ae&&b(R.specularMap.channel),specularColorMapUv:Ie&&b(R.specularColorMap.channel),specularIntensityMapUv:ze&&b(R.specularIntensityMap.channel),transmissionMapUv:De&&b(R.transmissionMap.channel),thicknessMapUv:Fe&&b(R.thicknessMap.channel),alphaMapUv:Je&&b(R.alphaMap.channel),vertexTangents:Ye&&!!j.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ge,vertexUv3s:Le,pointsUvs:$.isPoints===!0&&!!j.attributes.uv&&(He||Je),fog:!!te,useFog:R.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:$.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ve,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&ae.length>0,shadowMapType:t.shadowMap.type,toneMapping:R.toneMapped?t.toneMapping:Hi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Bi,flipSided:R.side===Un,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:W&&R.extensions.derivatives===!0,extensionFragDepth:W&&R.extensions.fragDepth===!0,extensionDrawBuffers:W&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function p(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ae in R.defines)N.push(ae),N.push(R.defines[ae]);return R.isRawShaderMaterial===!1&&(E(N,R),w(N,R),N.push(t.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function E(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function w(R,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),R.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),R.push(a.mask)}function L(R){const N=T[R.type];let ae;if(N){const fe=ki[N];ae=Bn.clone(fe.uniforms)}else ae=R.uniforms;return ae}function P(R,N){let ae;for(let fe=0,$=h.length;fe<$;fe++){const te=h[fe];if(te.cacheKey===N){ae=te,++ae.usedTimes;break}}return ae===void 0&&(ae=new RA(t,N,R,o),h.push(ae)),ae}function O(R){if(--R.usedTimes===0){const N=h.indexOf(R);h[N]=h[h.length-1],h.pop(),R.destroy()}}function B(R){d.remove(R)}function z(){d.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:L,acquireProgram:P,releaseProgram:O,releaseShaderCache:B,programs:h,dispose:z}}function OA(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,a){t.get(o)[l]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function NA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function e0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function t0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function l(g,v,_,T,b,M){let p=t[e];return p===void 0?(p={id:g.id,object:g,geometry:v,material:_,groupOrder:T,renderOrder:g.renderOrder,z:b,group:M},t[e]=p):(p.id=g.id,p.object=g,p.geometry=v,p.material=_,p.groupOrder=T,p.renderOrder=g.renderOrder,p.z=b,p.group=M),e++,p}function a(g,v,_,T,b,M){const p=l(g,v,_,T,b,M);_.transmission>0?i.push(p):_.transparent===!0?r.push(p):n.push(p)}function d(g,v,_,T,b,M){const p=l(g,v,_,T,b,M);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function h(g,v){n.length>1&&n.sort(g||NA),i.length>1&&i.sort(v||e0),r.length>1&&r.sort(v||e0)}function m(){for(let g=e,v=t.length;g<v;g++){const _=t[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:d,finish:m,sort:h}}function FA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let l;return o===void 0?(l=new t0,t.set(i,[l])):r>=o.length?(l=new t0,o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function kA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Ke};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BA=0;function GA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VA(t,e){const n=new kA,i=zA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new Y);const o=new Y,l=new Vt,a=new Vt;function d(m,g){let v=0,_=0,T=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let b=0,M=0,p=0,E=0,w=0,L=0,P=0,O=0,B=0,z=0;m.sort(GA);const R=g===!0?Math.PI:1;for(let ae=0,fe=m.length;ae<fe;ae++){const $=m[ae],te=$.color,j=$.intensity,ce=$.distance,pe=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)v+=te.r*j*R,_+=te.g*j*R,T+=te.b*j*R;else if($.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector($.sh.coefficients[X],j);else if($.isDirectionalLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.directionalShadow[b]=ne,r.directionalShadowMap[b]=pe,r.directionalShadowMatrix[b]=$.shadow.matrix,L++}r.directional[b]=X,b++}else if($.isSpotLight){const X=n.get($);X.position.setFromMatrixPosition($.matrixWorld),X.color.copy(te).multiplyScalar(j*R),X.distance=ce,X.coneCos=Math.cos($.angle),X.penumbraCos=Math.cos($.angle*(1-$.penumbra)),X.decay=$.decay,r.spot[p]=X;const J=$.shadow;if($.map&&(r.spotLightMap[B]=$.map,B++,J.updateMatrices($),$.castShadow&&z++),r.spotLightMatrix[p]=J.matrix,$.castShadow){const ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.spotShadow[p]=ne,r.spotShadowMap[p]=pe,O++}p++}else if($.isRectAreaLight){const X=n.get($);X.color.copy(te).multiplyScalar(j),X.halfWidth.set($.width*.5,0,0),X.halfHeight.set(0,$.height*.5,0),r.rectArea[E]=X,E++}else if($.isPointLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),X.distance=$.distance,X.decay=$.decay,$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,ne.shadowCameraNear=J.camera.near,ne.shadowCameraFar=J.camera.far,r.pointShadow[M]=ne,r.pointShadowMap[M]=pe,r.pointShadowMatrix[M]=$.shadow.matrix,P++}r.point[M]=X,M++}else if($.isHemisphereLight){const X=n.get($);X.skyColor.copy($.color).multiplyScalar(j*R),X.groundColor.copy($.groundColor).multiplyScalar(j*R),r.hemi[w]=X,w++}}E>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=T;const N=r.hash;(N.directionalLength!==b||N.pointLength!==M||N.spotLength!==p||N.rectAreaLength!==E||N.hemiLength!==w||N.numDirectionalShadows!==L||N.numPointShadows!==P||N.numSpotShadows!==O||N.numSpotMaps!==B)&&(r.directional.length=b,r.spot.length=p,r.rectArea.length=E,r.point.length=M,r.hemi.length=w,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=O+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,N.directionalLength=b,N.pointLength=M,N.spotLength=p,N.rectAreaLength=E,N.hemiLength=w,N.numDirectionalShadows=L,N.numPointShadows=P,N.numSpotShadows=O,N.numSpotMaps=B,r.version=BA++)}function h(m,g){let v=0,_=0,T=0,b=0,M=0;const p=g.matrixWorldInverse;for(let E=0,w=m.length;E<w;E++){const L=m[E];if(L.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),v++}else if(L.isSpotLight){const P=r.spot[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),T++}else if(L.isRectAreaLight){const P=r.rectArea[b];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),a.identity(),l.copy(L.matrixWorld),l.premultiply(p),a.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),b++}else if(L.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),_++}else if(L.isHemisphereLight){const P=r.hemi[M];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(p),M++}}}return{setup:d,setupView:h,state:r}}function n0(t,e){const n=new VA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(g){i.push(g)}function a(g){r.push(g)}function d(g){n.setup(i,g)}function h(g){n.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:d,setupLightsView:h,pushLight:l,pushShadow:a}}function HA(t,e){let n=new WeakMap;function i(o,l=0){const a=n.get(o);let d;return a===void 0?(d=new n0(t,e),n.set(o,[d])):l>=a.length?(d=new n0(t,e),a.push(d)):d=a[l],d}function r(){n=new WeakMap}return{get:i,dispose:r}}class hr extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xs extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
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
}`;function XA(t,e,n){let i=new Np;const r=new Ne,o=new Ne,l=new Dt,a=new hr({depthPacking:Zs}),d=new Xs,h={},m=n.maxTextureSize,g={[Hr]:Un,[Un]:Hr,[Bi]:Bi},v=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:WA,fragmentShader:jA}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const T=new mi;T.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ln(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let p=this.type;this.render=function(P,O,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;const z=t.getRenderTarget(),R=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(cn),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const fe=p!==nr&&this.type===nr,$=p===nr&&this.type!==nr;for(let te=0,j=P.length;te<j;te++){const ce=P[te],pe=ce.shadow;if(pe===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(pe.autoUpdate===!1&&pe.needsUpdate===!1)continue;r.copy(pe.mapSize);const X=pe.getFrameExtents();if(r.multiply(X),o.copy(pe.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/X.x),r.x=o.x*X.x,pe.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/X.y),r.y=o.y*X.y,pe.mapSize.y=o.y)),pe.map===null||fe===!0||$===!0){const ne=this.type!==nr?{minFilter:Qt,magFilter:Qt}:{};pe.map!==null&&pe.map.dispose(),pe.map=new en(r.x,r.y,ne),pe.map.texture.name=ce.name+".shadowMap",pe.camera.updateProjectionMatrix()}t.setRenderTarget(pe.map),t.clear();const J=pe.getViewportCount();for(let ne=0;ne<J;ne++){const Te=pe.getViewport(ne);l.set(o.x*Te.x,o.y*Te.y,o.x*Te.z,o.y*Te.w),ae.viewport(l),pe.updateMatrices(ce,ne),i=pe.getFrustum(),L(O,B,pe.camera,ce,this.type)}pe.isPointLightShadow!==!0&&this.type===nr&&E(pe,B),pe.needsUpdate=!1}p=this.type,M.needsUpdate=!1,t.setRenderTarget(z,R,N)};function E(P,O){const B=e.update(b);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new en(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(O,null,B,v,b,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(O,null,B,_,b,null)}function w(P,O,B,z){let R=null;const N=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)R=N;else if(R=B.isPointLight===!0?d:a,t.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ae=R.uuid,fe=O.uuid;let $=h[ae];$===void 0&&($={},h[ae]=$);let te=$[fe];te===void 0&&(te=R.clone(),$[fe]=te),R=te}if(R.visible=O.visible,R.wireframe=O.wireframe,z===nr?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=t.properties.get(R);ae.light=B}return R}function L(P,O,B,z,R){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===nr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),$=P.material;if(Array.isArray($)){const te=fe.groups;for(let j=0,ce=te.length;j<ce;j++){const pe=te[j],X=$[pe.materialIndex];if(X&&X.visible){const J=w(P,X,z,R);t.renderBufferDirect(B,null,fe,J,P,pe)}}}else if($.visible){const te=w(P,$,z,R);t.renderBufferDirect(B,null,fe,te,P,null)}}const ae=P.children;for(let fe=0,$=ae.length;fe<$;fe++)L(ae[fe],O,B,z,R)}}function YA(t,e,n){const i=n.isWebGL2;function r(){let W=!1;const le=new Dt;let ge=null;const Le=new Dt(0,0,0,0);return{setMask:function(Ue){ge!==Ue&&!W&&(t.colorMask(Ue,Ue,Ue,Ue),ge=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,xt,pt,on,Xt){Xt===!0&&(Ue*=on,xt*=on,pt*=on),le.set(Ue,xt,pt,on),Le.equals(le)===!1&&(t.clearColor(Ue,xt,pt,on),Le.copy(le))},reset:function(){W=!1,ge=null,Le.set(-1,0,0,0)}}}function o(){let W=!1,le=null,ge=null,Le=null;return{setTest:function(Ue){Ue?H(t.DEPTH_TEST):Ze(t.DEPTH_TEST)},setMask:function(Ue){le!==Ue&&!W&&(t.depthMask(Ue),le=Ue)},setFunc:function(Ue){if(ge!==Ue){switch(Ue){case ww:t.depthFunc(t.NEVER);break;case Tw:t.depthFunc(t.ALWAYS);break;case bw:t.depthFunc(t.LESS);break;case Ph:t.depthFunc(t.LEQUAL);break;case Cw:t.depthFunc(t.EQUAL);break;case Aw:t.depthFunc(t.GEQUAL);break;case Pw:t.depthFunc(t.GREATER);break;case Rw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Ue}},setLocked:function(Ue){W=Ue},setClear:function(Ue){Le!==Ue&&(t.clearDepth(Ue),Le=Ue)},reset:function(){W=!1,le=null,ge=null,Le=null}}}function l(){let W=!1,le=null,ge=null,Le=null,Ue=null,xt=null,pt=null,on=null,Xt=null;return{setTest:function(yt){W||(yt?H(t.STENCIL_TEST):Ze(t.STENCIL_TEST))},setMask:function(yt){le!==yt&&!W&&(t.stencilMask(yt),le=yt)},setFunc:function(yt,Yt,Xn){(ge!==yt||Le!==Yt||Ue!==Xn)&&(t.stencilFunc(yt,Yt,Xn),ge=yt,Le=Yt,Ue=Xn)},setOp:function(yt,Yt,Xn){(xt!==yt||pt!==Yt||on!==Xn)&&(t.stencilOp(yt,Yt,Xn),xt=yt,pt=Yt,on=Xn)},setLocked:function(yt){W=yt},setClear:function(yt){Xt!==yt&&(t.clearStencil(yt),Xt=yt)},reset:function(){W=!1,le=null,ge=null,Le=null,Ue=null,xt=null,pt=null,on=null,Xt=null}}}const a=new r,d=new o,h=new l,m=new WeakMap,g=new WeakMap;let v={},_={},T=new WeakMap,b=[],M=null,p=!1,E=null,w=null,L=null,P=null,O=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,pe=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(X)[1]),ce=pe>=1):X.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ce=pe>=2);let J=null,ne={};const Te=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),oe=new Dt().fromArray(Te),q=new Dt().fromArray(ve);function Ee(W,le,ge,Le){const Ue=new Uint8Array(4),xt=t.createTexture();t.bindTexture(W,xt),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<ge;pt++)i&&(W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(le+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return xt}const we={};we[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),d.setClear(1),h.setClear(0),H(t.DEPTH_TEST),d.setFunc(Ph),Tt(!1),Ot(Vv),H(t.CULL_FACE),Qe(cn);function H(W){v[W]!==!0&&(t.enable(W),v[W]=!0)}function Ze(W){v[W]!==!1&&(t.disable(W),v[W]=!1)}function He(W,le){return _[W]!==le?(t.bindFramebuffer(W,le),_[W]=le,i&&(W===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=le),W===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function be(W,le){let ge=b,Le=!1;if(W)if(ge=T.get(le),ge===void 0&&(ge=[],T.set(le,ge)),W.isWebGLMultipleRenderTargets){const Ue=W.texture;if(ge.length!==Ue.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let xt=0,pt=Ue.length;xt<pt;xt++)ge[xt]=t.COLOR_ATTACHMENT0+xt;ge.length=Ue.length,Le=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Le=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ge(W){return M!==W?(t.useProgram(W),M=W,!0):!1}const ht={[or]:t.FUNC_ADD,[vw]:t.FUNC_SUBTRACT,[gw]:t.FUNC_REVERSE_SUBTRACT};if(i)ht[jv]=t.MIN,ht[Xv]=t.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(ht[jv]=W.MIN_EXT,ht[Xv]=W.MAX_EXT)}const Be={[Ah]:t.ZERO,[yw]:t.ONE,[_w]:t.SRC_COLOR,[Lp]:t.SRC_ALPHA,[Ew]:t.SRC_ALPHA_SATURATE,[O_]:t.DST_COLOR,[U_]:t.DST_ALPHA,[xw]:t.ONE_MINUS_SRC_COLOR,[Ip]:t.ONE_MINUS_SRC_ALPHA,[Mw]:t.ONE_MINUS_DST_COLOR,[Sw]:t.ONE_MINUS_DST_ALPHA};function Qe(W,le,ge,Le,Ue,xt,pt,on){if(W===cn){p===!0&&(Ze(t.BLEND),p=!1);return}if(p===!1&&(H(t.BLEND),p=!0),W!==fl){if(W!==E||on!==R){if((w!==or||O!==or)&&(t.blendEquation(t.FUNC_ADD),w=or,O=or),on)switch(W){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.ONE,t.ONE);break;case Hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,B=null,z=null,E=W,R=on}return}Ue=Ue||le,xt=xt||ge,pt=pt||Le,(le!==w||Ue!==O)&&(t.blendEquationSeparate(ht[le],ht[Ue]),w=le,O=Ue),(ge!==L||Le!==P||xt!==B||pt!==z)&&(t.blendFuncSeparate(Be[ge],Be[Le],Be[xt],Be[pt]),L=ge,P=Le,B=xt,z=pt),E=W,R=!1}function Ye(W,le){W.side===Bi?Ze(t.CULL_FACE):H(t.CULL_FACE);let ge=W.side===Un;le&&(ge=!ge),Tt(ge),W.blending===Ls&&W.transparent===!1?Qe(cn):Qe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),a.setMask(W.colorWrite);const Le=W.stencilWrite;h.setTest(Le),Le&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):Ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(W){N!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),N=W)}function Ot(W){W!==pw?(H(t.CULL_FACE),W!==ae&&(W===Vv?t.cullFace(t.BACK):W===mw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ze(t.CULL_FACE),ae=W}function gt(W){W!==fe&&(ce&&t.lineWidth(W),fe=W)}function lt(W,le,ge){W?(H(t.POLYGON_OFFSET_FILL),($!==le||te!==ge)&&(t.polygonOffset(le,ge),$=le,te=ge)):Ze(t.POLYGON_OFFSET_FILL)}function Mt(W){W?H(t.SCISSOR_TEST):Ze(t.SCISSOR_TEST)}function jt(W){W===void 0&&(W=t.TEXTURE0+j-1),J!==W&&(t.activeTexture(W),J=W)}function F(W,le,ge){ge===void 0&&(J===null?ge=t.TEXTURE0+j-1:ge=J);let Le=ne[ge];Le===void 0&&(Le={type:void 0,texture:void 0},ne[ge]=Le),(Le.type!==W||Le.texture!==le)&&(J!==ge&&(t.activeTexture(ge),J=ge),t.bindTexture(W,le||we[W]),Le.type=W,Le.texture=le)}function D(){const W=ne[J];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{t.texSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{t.texStorage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{t.texImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(W){oe.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),oe.copy(W))}function Fe(W){q.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function qe(W,le){let ge=g.get(le);ge===void 0&&(ge=new WeakMap,g.set(le,ge));let Le=ge.get(W);Le===void 0&&(Le=t.getUniformBlockIndex(le,W.name),ge.set(W,Le))}function Je(W,le){const Le=g.get(le).get(W);m.get(le)!==Le&&(t.uniformBlockBinding(le,Le,W.__bindingPointIndex),m.set(le,Le))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),v={},J=null,ne={},_={},T=new WeakMap,b=[],M=null,p=!1,E=null,w=null,L=null,P=null,O=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null,oe.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),d.reset(),h.reset()}return{buffers:{color:a,depth:d,stencil:h},enable:H,disable:Ze,bindFramebuffer:He,drawBuffers:be,useProgram:Ge,setBlending:Qe,setMaterial:Ye,setFlipSided:Tt,setCullFace:Ot,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:Mt,activeTexture:jt,bindTexture:F,unbindTexture:D,compressedTexImage2D:se,compressedTexImage3D:me,texImage2D:Ie,texImage3D:ze,updateUBOMapping:qe,uniformBlockBinding:Je,texStorage2D:ie,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:Ce,compressedTexSubImage2D:G,compressedTexSubImage3D:he,scissor:De,viewport:Fe,reset:At}}function qA(t,e,n,i,r,o,l){const a=r.isWebGL2,d=r.maxTextures,h=r.maxCubemapSize,m=r.maxTextureSize,g=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let b;const M=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,D){return p?new OffscreenCanvas(F,D):pl("canvas")}function w(F,D,se,me){let xe=1;if((F.width>me||F.height>me)&&(xe=me/Math.max(F.width,F.height)),xe<1||D===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const Ce=D?i1:Math.floor,G=Ce(xe*F.width),he=Ce(xe*F.height);b===void 0&&(b=E(G,he));const ie=se?E(G,he):b;return ie.width=G,ie.height=he,ie.getContext("2d").drawImage(F,0,0,G,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+G+"x"+he+")."),ie}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function L(F){return _g(F.width)&&_g(F.height)}function P(F){return a?!1:F.wrapS!==Ci||F.wrapT!==Ci||F.minFilter!==Qt&&F.minFilter!==ci}function O(F,D){return F.generateMipmaps&&D&&F.minFilter!==Qt&&F.minFilter!==ci}function B(F){t.generateMipmap(F)}function z(F,D,se,me,xe=!1){if(a===!1)return D;if(F!==null){if(t[F]!==void 0)return t[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ce=D;return D===t.RED&&(se===t.FLOAT&&(Ce=t.R32F),se===t.HALF_FLOAT&&(Ce=t.R16F),se===t.UNSIGNED_BYTE&&(Ce=t.R8)),D===t.RG&&(se===t.FLOAT&&(Ce=t.RG32F),se===t.HALF_FLOAT&&(Ce=t.RG16F),se===t.UNSIGNED_BYTE&&(Ce=t.RG8)),D===t.RGBA&&(se===t.FLOAT&&(Ce=t.RGBA32F),se===t.HALF_FLOAT&&(Ce=t.RGBA16F),se===t.UNSIGNED_BYTE&&(Ce=me===tt&&xe===!1?t.SRGB8_ALPHA8:t.RGBA8),se===t.UNSIGNED_SHORT_4_4_4_4&&(Ce=t.RGBA4),se===t.UNSIGNED_SHORT_5_5_5_1&&(Ce=t.RGB5_A1)),(Ce===t.R16F||Ce===t.R32F||Ce===t.RG16F||Ce===t.RG32F||Ce===t.RGBA16F||Ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function R(F,D,se){return O(F,se)===!0||F.isFramebufferTexture&&F.minFilter!==Qt&&F.minFilter!==ci?Math.log2(Math.max(D.width,D.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?D.mipmaps.length:1}function N(F){return F===Qt||F===Yv||F===Zf?t.NEAREST:t.LINEAR}function ae(F){const D=F.target;D.removeEventListener("dispose",ae),$(D),D.isVideoTexture&&T.delete(D)}function fe(F){const D=F.target;D.removeEventListener("dispose",fe),j(D)}function $(F){const D=i.get(F);if(D.__webglInit===void 0)return;const se=F.source,me=M.get(se);if(me){const xe=me[D.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&te(F),Object.keys(me).length===0&&M.delete(se)}i.remove(F)}function te(F){const D=i.get(F);t.deleteTexture(D.__webglTexture);const se=F.source,me=M.get(se);delete me[D.__cacheKey],l.memory.textures--}function j(F){const D=F.texture,se=i.get(F),me=i.get(D);if(me.__webglTexture!==void 0&&(t.deleteTexture(me.__webglTexture),l.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)t.deleteFramebuffer(se.__webglFramebuffer[xe]),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer[xe]);else{if(t.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&t.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let xe=0;xe<se.__webglColorRenderbuffer.length;xe++)se.__webglColorRenderbuffer[xe]&&t.deleteRenderbuffer(se.__webglColorRenderbuffer[xe]);se.__webglDepthRenderbuffer&&t.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let xe=0,Ce=D.length;xe<Ce;xe++){const G=i.get(D[xe]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),l.memory.textures--),i.remove(D[xe])}i.remove(D),i.remove(F)}let ce=0;function pe(){ce=0}function X(){const F=ce;return F>=d&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+d),ce+=1,F}function J(F){const D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()}function ne(F,D){const se=i.get(F);if(F.isVideoTexture&&Mt(F),F.isRenderTargetTexture===!1&&F.version>0&&se.__version!==F.version){const me=F.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(se,F,D);return}}n.bindTexture(t.TEXTURE_2D,se.__webglTexture,t.TEXTURE0+D)}function Te(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ze(se,F,D);return}n.bindTexture(t.TEXTURE_2D_ARRAY,se.__webglTexture,t.TEXTURE0+D)}function ve(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ze(se,F,D);return}n.bindTexture(t.TEXTURE_3D,se.__webglTexture,t.TEXTURE0+D)}function oe(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){He(se,F,D);return}n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture,t.TEXTURE0+D)}const q={[Ro]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Dh]:t.MIRRORED_REPEAT},Ee={[Qt]:t.NEAREST,[Yv]:t.NEAREST_MIPMAP_NEAREST,[Zf]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[Fw]:t.LINEAR_MIPMAP_NEAREST,[dl]:t.LINEAR_MIPMAP_LINEAR};function we(F,D,se){if(se?(t.texParameteri(F,t.TEXTURE_WRAP_S,q[D.wrapS]),t.texParameteri(F,t.TEXTURE_WRAP_T,q[D.wrapT]),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,q[D.wrapR]),t.texParameteri(F,t.TEXTURE_MAG_FILTER,Ee[D.magFilter]),t.texParameteri(F,t.TEXTURE_MIN_FILTER,Ee[D.minFilter])):(t.texParameteri(F,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(F,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(D.wrapS!==Ci||D.wrapT!==Ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(F,t.TEXTURE_MAG_FILTER,N(D.magFilter)),t.texParameteri(F,t.TEXTURE_MIN_FILTER,N(D.minFilter)),D.minFilter!==Qt&&D.minFilter!==ci&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===Qt||D.minFilter!==Zf&&D.minFilter!==dl||D.type===yo&&e.has("OES_texture_float_linear")===!1||a===!1&&D.type===hl&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(t.texParameterf(F,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function H(F,D){let se=!1;F.__webglInit===void 0&&(F.__webglInit=!0,D.addEventListener("dispose",ae));const me=D.source;let xe=M.get(me);xe===void 0&&(xe={},M.set(me,xe));const Ce=J(D);if(Ce!==F.__cacheKey){xe[Ce]===void 0&&(xe[Ce]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,se=!0),xe[Ce].usedTimes++;const G=xe[F.__cacheKey];G!==void 0&&(xe[F.__cacheKey].usedTimes--,G.usedTimes===0&&te(D)),F.__cacheKey=Ce,F.__webglTexture=xe[Ce].texture}return se}function Ze(F,D,se){let me=t.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(me=t.TEXTURE_2D_ARRAY),D.isData3DTexture&&(me=t.TEXTURE_3D);const xe=H(F,D),Ce=D.source;n.bindTexture(me,F.__webglTexture,t.TEXTURE0+se);const G=i.get(Ce);if(Ce.version!==G.__version||xe===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const he=P(D)&&L(D.image)===!1;let ie=w(D.image,he,!1,m);ie=jt(D,ie);const Ae=L(ie)||a,Ie=o.convert(D.format,D.colorSpace);let ze=o.convert(D.type),De=z(D.internalFormat,Ie,ze,D.colorSpace);we(me,D,Ae);let Fe;const qe=D.mipmaps,Je=a&&D.isVideoTexture!==!0,At=G.__version===void 0||xe===!0,W=R(D,ie,Ae);if(D.isDepthTexture)De=t.DEPTH_COMPONENT,a?D.type===yo?De=t.DEPTH_COMPONENT32F:D.type===go?De=t.DEPTH_COMPONENT24:D.type===Is?De=t.DEPTH24_STENCIL8:De=t.DEPTH_COMPONENT16:D.type===yo&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===So&&De===t.DEPTH_COMPONENT&&D.type!==Up&&D.type!==go&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=go,ze=o.convert(D.type)),D.format===Ws&&De===t.DEPTH_COMPONENT&&(De=t.DEPTH_STENCIL,D.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Is,ze=o.convert(D.type))),At&&(Je?n.texStorage2D(t.TEXTURE_2D,1,De,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,Ie,ze,null));else if(D.isDataTexture)if(qe.length>0&&Ae){Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,ze,Fe.data):n.texImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Ie,ze,Fe.data);D.generateMipmaps=!1}else Je?(At&&n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Ie,ze,ie.data)):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,Ie,ze,ie.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Je&&At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,qe[0].width,qe[0].height,ie.depth);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],D.format!==Ai?Ie!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,ie.depth,Ie,Fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,De,Fe.width,Fe.height,ie.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,ie.depth,Ie,ze,Fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,De,Fe.width,Fe.height,ie.depth,0,Ie,ze,Fe.data)}else{Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],D.format!==Ai?Ie!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,Fe.data):n.compressedTexImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,ze,Fe.data):n.texImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Ie,ze,Fe.data)}else if(D.isDataArrayTexture)Je?(At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ie,ze,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,Ie,ze,ie.data);else if(D.isData3DTexture)Je?(At&&n.texStorage3D(t.TEXTURE_3D,W,De,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ie,ze,ie.data)):n.texImage3D(t.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,Ie,ze,ie.data);else if(D.isFramebufferTexture){if(At)if(Je)n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height);else{let le=ie.width,ge=ie.height;for(let Le=0;Le<W;Le++)n.texImage2D(t.TEXTURE_2D,Le,De,le,ge,0,Ie,ze,null),le>>=1,ge>>=1}}else if(qe.length>0&&Ae){Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ie,ze,Fe):n.texImage2D(t.TEXTURE_2D,le,De,Ie,ze,Fe);D.generateMipmaps=!1}else Je?(At&&n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,ze,ie)):n.texImage2D(t.TEXTURE_2D,0,De,Ie,ze,ie);O(D,Ae)&&B(me),G.__version=Ce.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function He(F,D,se){if(D.image.length!==6)return;const me=H(F,D),xe=D.source;n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+se);const Ce=i.get(xe);if(xe.version!==Ce.__version||me===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const G=D.isCompressedTexture||D.image[0].isCompressedTexture,he=D.image[0]&&D.image[0].isDataTexture,ie=[];for(let le=0;le<6;le++)!G&&!he?ie[le]=w(D.image[le],!1,!0,h):ie[le]=he?D.image[le].image:D.image[le],ie[le]=jt(D,ie[le]);const Ae=ie[0],Ie=L(Ae)||a,ze=o.convert(D.format,D.colorSpace),De=o.convert(D.type),Fe=z(D.internalFormat,ze,De,D.colorSpace),qe=a&&D.isVideoTexture!==!0,Je=Ce.__version===void 0||me===!0;let At=R(D,Ae,Ie);we(t.TEXTURE_CUBE_MAP,D,Ie);let W;if(G){qe&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Fe,Ae.width,Ae.height);for(let le=0;le<6;le++){W=ie[le].mipmaps;for(let ge=0;ge<W.length;ge++){const Le=W[ge];D.format!==Ai?ze!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,Le.width,Le.height,ze,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,Le.width,Le.height,ze,De,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Fe,Le.width,Le.height,0,ze,De,Le.data)}}}else{W=D.mipmaps,qe&&Je&&(W.length>0&&At++,n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Fe,ie[0].width,ie[0].height));for(let le=0;le<6;le++)if(he){qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie[le].width,ie[le].height,ze,De,ie[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,ie[le].width,ie[le].height,0,ze,De,ie[le].data);for(let ge=0;ge<W.length;ge++){const Ue=W[ge].image[le].image;qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,Ue.width,Ue.height,ze,De,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Fe,Ue.width,Ue.height,0,ze,De,Ue.data)}}else{qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,De,ie[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,ze,De,ie[le]);for(let ge=0;ge<W.length;ge++){const Le=W[ge];qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,ze,De,Le.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Fe,ze,De,Le.image[le])}}}O(D,Ie)&&B(t.TEXTURE_CUBE_MAP),Ce.__version=xe.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function be(F,D,se,me,xe){const Ce=o.convert(se.format,se.colorSpace),G=o.convert(se.type),he=z(se.internalFormat,Ce,G,se.colorSpace);i.get(D).__hasExternalTextures||(xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,he,D.width,D.height,D.depth,0,Ce,G,null):n.texImage2D(xe,0,he,D.width,D.height,0,Ce,G,null)),n.bindFramebuffer(t.FRAMEBUFFER,F),lt(D)?v.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0,gt(D)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(F,D,se){if(t.bindRenderbuffer(t.RENDERBUFFER,F),D.depthBuffer&&!D.stencilBuffer){let me=t.DEPTH_COMPONENT16;if(se||lt(D)){const xe=D.depthTexture;xe&&xe.isDepthTexture&&(xe.type===yo?me=t.DEPTH_COMPONENT32F:xe.type===go&&(me=t.DEPTH_COMPONENT24));const Ce=gt(D);lt(D)?v.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,me,D.width,D.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,me,D.width,D.height)}else t.renderbufferStorage(t.RENDERBUFFER,me,D.width,D.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,F)}else if(D.depthBuffer&&D.stencilBuffer){const me=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):lt(D)?v.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,F)}else{const me=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let xe=0;xe<me.length;xe++){const Ce=me[xe],G=o.convert(Ce.format,Ce.colorSpace),he=o.convert(Ce.type),ie=z(Ce.internalFormat,G,he,Ce.colorSpace),Ae=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ie,D.width,D.height):lt(D)?v.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ie,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,ie,D.width,D.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ht(F,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,F),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),ne(D.depthTexture,0);const me=i.get(D.depthTexture).__webglTexture,xe=gt(D);if(D.depthTexture.format===So)lt(D)?v.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(D.depthTexture.format===Ws)lt(D)?v.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Be(F){const D=i.get(F),se=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!D.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ht(D.__webglFramebuffer,F)}else if(se){D.__webglDepthbuffer=[];for(let me=0;me<6;me++)n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer[me]),D.__webglDepthbuffer[me]=t.createRenderbuffer(),Ge(D.__webglDepthbuffer[me],F,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=t.createRenderbuffer(),Ge(D.__webglDepthbuffer,F,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(F,D,se){const me=i.get(F);D!==void 0&&be(me.__webglFramebuffer,F,F.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),se!==void 0&&Be(F)}function Ye(F){const D=F.texture,se=i.get(F),me=i.get(D);F.addEventListener("dispose",fe),F.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture()),me.__version=D.version,l.memory.textures++);const xe=F.isWebGLCubeRenderTarget===!0,Ce=F.isWebGLMultipleRenderTargets===!0,G=L(F)||a;if(xe){se.__webglFramebuffer=[];for(let he=0;he<6;he++)se.__webglFramebuffer[he]=t.createFramebuffer()}else{if(se.__webglFramebuffer=t.createFramebuffer(),Ce)if(r.drawBuffers){const he=F.texture;for(let ie=0,Ae=he.length;ie<Ae;ie++){const Ie=i.get(he[ie]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&lt(F)===!1){const he=Ce?D:[D];se.__webglMultisampledFramebuffer=t.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ie=0;ie<he.length;ie++){const Ae=he[ie];se.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);const Ie=o.convert(Ae.format,Ae.colorSpace),ze=o.convert(Ae.type),De=z(Ae.internalFormat,Ie,ze,Ae.colorSpace,F.isXRRenderTarget===!0),Fe=gt(F);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,De,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,se.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),F.depthBuffer&&(se.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(se.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),we(t.TEXTURE_CUBE_MAP,D,G);for(let he=0;he<6;he++)be(se.__webglFramebuffer[he],F,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he);O(D,G)&&B(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){const he=F.texture;for(let ie=0,Ae=he.length;ie<Ae;ie++){const Ie=he[ie],ze=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ze.__webglTexture),we(t.TEXTURE_2D,Ie,G),be(se.__webglFramebuffer,F,Ie,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D),O(Ie,G)&&B(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?he=F.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,me.__webglTexture),we(he,D,G),be(se.__webglFramebuffer,F,D,t.COLOR_ATTACHMENT0,he),O(D,G)&&B(he),n.unbindTexture()}F.depthBuffer&&Be(F)}function Tt(F){const D=L(F)||a,se=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let me=0,xe=se.length;me<xe;me++){const Ce=se[me];if(O(Ce,D)){const G=F.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(Ce).__webglTexture;n.bindTexture(G,he),B(G),n.unbindTexture()}}}function Ot(F){if(a&&F.samples>0&&lt(F)===!1){const D=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],se=F.width,me=F.height;let xe=t.COLOR_BUFFER_BIT;const Ce=[],G=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(F),ie=F.isWebGLMultipleRenderTargets===!0;if(ie)for(let Ae=0;Ae<D.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ae=0;Ae<D.length;Ae++){Ce.push(t.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&Ce.push(G);const Ie=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ie===!1&&(F.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),F.stencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),ie&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[G]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[G])),ie){const ze=i.get(D[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,se,me,0,0,se,me,xe,t.NEAREST),_&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let Ae=0;Ae<D.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const Ie=i.get(D[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function gt(F){return Math.min(g,F.samples)}function lt(F){const D=i.get(F);return a&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Mt(F){const D=l.render.frame;T.get(F)!==D&&(T.set(F,D),F.update())}function jt(F,D){const se=F.colorSpace,me=F.format,xe=F.type;return F.isCompressedTexture===!0||F.format===Lh||se!==Wi&&se!==Eo&&(se===tt?a===!1?e.has("EXT_sRGB")===!0&&me===Ai?(F.format=Lh,F.minFilter=ci,F.generateMipmaps=!1):D=G_.sRGBToLinear(D):(me!==Ai||xe!==Do)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),D}this.allocateTextureUnit=X,this.resetTextureUnits=pe,this.setTexture2D=ne,this.setTexture2DArray=Te,this.setTexture3D=ve,this.setTextureCube=oe,this.rebindTextures=Qe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=lt}function $A(t,e,n){const i=n.isWebGL2;function r(o,l=Eo){let a;if(o===Do)return t.UNSIGNED_BYTE;if(o===Gw)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Vw)return t.UNSIGNED_SHORT_5_5_5_1;if(o===kw)return t.BYTE;if(o===zw)return t.SHORT;if(o===Up)return t.UNSIGNED_SHORT;if(o===Bw)return t.INT;if(o===go)return t.UNSIGNED_INT;if(o===yo)return t.FLOAT;if(o===hl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Hw)return t.ALPHA;if(o===Ai)return t.RGBA;if(o===Ww)return t.LUMINANCE;if(o===jw)return t.LUMINANCE_ALPHA;if(o===So)return t.DEPTH_COMPONENT;if(o===Ws)return t.DEPTH_STENCIL;if(o===Lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Xw)return t.RED;if(o===Yw)return t.RED_INTEGER;if(o===qw)return t.RG;if(o===$w)return t.RG_INTEGER;if(o===Kw)return t.RGBA_INTEGER;if(o===Qf||o===Jf||o===ed||o===td)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Qf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Qf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===qv||o===$v||o===Kv||o===Zv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===qv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===$v)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Kv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Zv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Zw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Qv||o===Jv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Qv)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Jv)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===cg||o===ug||o===fg||o===dg||o===hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===eg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===tg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ng)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ig)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===rg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===og)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===sg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ag)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===lg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===cg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ug)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===fg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===dg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===hg)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===nd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===nd)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===Qw||o===pg||o===mg||o===vg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(o===pg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===vg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Is?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class KA extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nc extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZA={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,l=null;const a=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const b of e.hand.values()){const M=n.getJointPose(b,i),p=this._getHandJoint(h,b);M!==null&&(p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius),p.visible=M!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),_=.02,T=.005;h.inputState.pinching&&v>_+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=_-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZA)))}return a!==null&&(a.visible=r!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class nx extends jn{constructor(e,n,i,r,o,l,a,d,h,m){if(m=m!==void 0?m:So,m!==So&&m!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===So&&(i=go),i===void 0&&m===Ws&&(i=Is),super(null,r,o,l,a,d,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1}}class QA extends Oo{constructor(e,n){super();const i=this;let r=null,o=1,l=null,a="local-floor",d=1,h=null,m=null,g=null,v=null,_=null,T=null;const b=n.getContextAttributes();let M=null,p=null;const E=[],w=[],L=new Set,P=new Map,O=new zn;O.layers.enable(1),O.viewport=new Dt;const B=new zn;B.layers.enable(2),B.viewport=new Dt;const z=[O,B],R=new KA;R.layers.enable(1),R.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let q=E[oe];return q===void 0&&(q=new bd,E[oe]=q),q.getTargetRaySpace()},this.getControllerGrip=function(oe){let q=E[oe];return q===void 0&&(q=new bd,E[oe]=q),q.getGripSpace()},this.getHand=function(oe){let q=E[oe];return q===void 0&&(q=new bd,E[oe]=q),q.getHandSpace()};function fe(oe){const q=w.indexOf(oe.inputSource);if(q===-1)return;const Ee=E[q];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,h||l),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function $(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",te);for(let oe=0;oe<E.length;oe++){const q=w[oe];q!==null&&(w[oe]=null,E[oe].disconnect(q))}N=null,ae=null,e.setRenderTarget(M),_=null,v=null,g=null,r=null,p=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",$),r.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:_}),p=new en(_.framebufferWidth,_.framebufferHeight,{format:Ai,type:Do,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let q=null,Ee=null,we=null;b.depth&&(we=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=b.stencil?Ws:So,Ee=b.stencil?Is:go);const H={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:o};g=new XRWebGLBinding(r,n),v=g.createProjectionLayer(H),r.updateRenderState({layers:[v]}),p=new en(v.textureWidth,v.textureHeight,{format:Ai,type:Do,depthTexture:new nx(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Ze=e.properties.get(p);Ze.__ignoreDepthValues=v.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(oe){for(let q=0;q<oe.removed.length;q++){const Ee=oe.removed[q],we=w.indexOf(Ee);we>=0&&(w[we]=null,E[we].disconnect(Ee))}for(let q=0;q<oe.added.length;q++){const Ee=oe.added[q];let we=w.indexOf(Ee);if(we===-1){for(let Ze=0;Ze<E.length;Ze++)if(Ze>=w.length){w.push(Ee),we=Ze;break}else if(w[Ze]===null){w[Ze]=Ee,we=Ze;break}if(we===-1)break}const H=E[we];H&&H.connect(Ee)}}const j=new Y,ce=new Y;function pe(oe,q,Ee){j.setFromMatrixPosition(q.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const we=j.distanceTo(ce),H=q.projectionMatrix.elements,Ze=Ee.projectionMatrix.elements,He=H[14]/(H[10]-1),be=H[14]/(H[10]+1),Ge=(H[9]+1)/H[5],ht=(H[9]-1)/H[5],Be=(H[8]-1)/H[0],Qe=(Ze[8]+1)/Ze[0],Ye=He*Be,Tt=He*Qe,Ot=we/(-Be+Qe),gt=Ot*-Be;q.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(gt),oe.translateZ(Ot),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const lt=He+Ot,Mt=be+Ot,jt=Ye-gt,F=Tt+(we-gt),D=Ge*be/Mt*lt,se=ht*be/Mt*lt;oe.projectionMatrix.makePerspective(jt,F,D,se,lt,Mt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function X(oe,q){q===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(q.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;R.near=B.near=O.near=oe.near,R.far=B.far=O.far=oe.far,(N!==R.near||ae!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,ae=R.far);const q=oe.parent,Ee=R.cameras;X(R,q);for(let we=0;we<Ee.length;we++)X(Ee[we],q);Ee.length===2?pe(R,O,B):R.projectionMatrix.copy(O.projectionMatrix),J(oe,R,q)};function J(oe,q,Ee){Ee===null?oe.matrix.copy(q.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(q.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0);const we=oe.children;for(let H=0,Ze=we.length;H<Ze;H++)we[H].updateMatrixWorld(!0);oe.projectionMatrix.copy(q.projectionMatrix),oe.projectionMatrixInverse.copy(q.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Eu*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&_===null))return d},this.setFoveation=function(oe){d=oe,v!==null&&(v.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.getPlanes=function(){return L};let ne=null;function Te(oe,q){if(m=q.getViewerPose(h||l),T=q,m!==null){const Ee=m.views;_!==null&&(e.setRenderTargetFramebuffer(p,_.framebuffer),e.setRenderTarget(p));let we=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,we=!0);for(let H=0;H<Ee.length;H++){const Ze=Ee[H];let He=null;if(_!==null)He=_.getViewport(Ze);else{const Ge=g.getViewSubImage(v,Ze);He=Ge.viewport,H===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,v.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let be=z[H];be===void 0&&(be=new zn,be.layers.enable(H),be.viewport=new Dt,z[H]=be),be.matrix.fromArray(Ze.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ze.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(He.x,He.y,He.width,He.height),H===0&&(R.matrix.copy(be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),we===!0&&R.cameras.push(be)}}for(let Ee=0;Ee<E.length;Ee++){const we=w[Ee],H=E[Ee];we!==null&&H!==void 0&&H.update(we,q,h||l)}if(ne&&ne(oe,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let Ee=null;for(const we of L)q.detectedPlanes.has(we)||(Ee===null&&(Ee=[]),Ee.push(we));if(Ee!==null)for(const we of Ee)L.delete(we),P.delete(we),i.dispatchEvent({type:"planeremoved",data:we});for(const we of q.detectedPlanes)if(!L.has(we))L.add(we),P.set(we,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:we});else{const H=P.get(we);we.lastChangedTime>H&&(P.set(we,we.lastChangedTime),i.dispatchEvent({type:"planechanged",data:we}))}}T=null}const ve=new Z_;ve.setAnimationLoop(Te),this.setAnimationLoop=function(oe){ne=oe},this.dispose=function(){}}}function JA(t,e){function n(M,p){M.matrixAutoUpdate===!0&&M.updateMatrix(),p.value.copy(M.matrix)}function i(M,p){p.color.getRGB(M.fogColor.value,q_(t)),p.isFog?(M.fogNear.value=p.near,M.fogFar.value=p.far):p.isFogExp2&&(M.fogDensity.value=p.density)}function r(M,p,E,w,L){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(M,p):p.isMeshToonMaterial?(o(M,p),g(M,p)):p.isMeshPhongMaterial?(o(M,p),m(M,p)):p.isMeshStandardMaterial?(o(M,p),v(M,p),p.isMeshPhysicalMaterial&&_(M,p,L)):p.isMeshMatcapMaterial?(o(M,p),T(M,p)):p.isMeshDepthMaterial?o(M,p):p.isMeshDistanceMaterial?(o(M,p),b(M,p)):p.isMeshNormalMaterial?o(M,p):p.isLineBasicMaterial?(l(M,p),p.isLineDashedMaterial&&a(M,p)):p.isPointsMaterial?d(M,p,E,w):p.isSpriteMaterial?h(M,p):p.isShadowMaterial?(M.color.value.copy(p.color),M.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(M,p){M.opacity.value=p.opacity,p.color&&M.diffuse.value.copy(p.color),p.emissive&&M.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(M.map.value=p.map,n(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,n(p.alphaMap,M.alphaMapTransform)),p.bumpMap&&(M.bumpMap.value=p.bumpMap,n(p.bumpMap,M.bumpMapTransform),M.bumpScale.value=p.bumpScale,p.side===Un&&(M.bumpScale.value*=-1)),p.normalMap&&(M.normalMap.value=p.normalMap,n(p.normalMap,M.normalMapTransform),M.normalScale.value.copy(p.normalScale),p.side===Un&&M.normalScale.value.negate()),p.displacementMap&&(M.displacementMap.value=p.displacementMap,n(p.displacementMap,M.displacementMapTransform),M.displacementScale.value=p.displacementScale,M.displacementBias.value=p.displacementBias),p.emissiveMap&&(M.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,M.emissiveMapTransform)),p.specularMap&&(M.specularMap.value=p.specularMap,n(p.specularMap,M.specularMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(M.envMap.value=E,M.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=p.reflectivity,M.ior.value=p.ior,M.refractionRatio.value=p.refractionRatio),p.lightMap){M.lightMap.value=p.lightMap;const w=t.useLegacyLights===!0?Math.PI:1;M.lightMapIntensity.value=p.lightMapIntensity*w,n(p.lightMap,M.lightMapTransform)}p.aoMap&&(M.aoMap.value=p.aoMap,M.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,M.aoMapTransform))}function l(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,p.map&&(M.map.value=p.map,n(p.map,M.mapTransform))}function a(M,p){M.dashSize.value=p.dashSize,M.totalSize.value=p.dashSize+p.gapSize,M.scale.value=p.scale}function d(M,p,E,w){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.size.value=p.size*E,M.scale.value=w*.5,p.map&&(M.map.value=p.map,n(p.map,M.uvTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function h(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.rotation.value=p.rotation,p.map&&(M.map.value=p.map,n(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function m(M,p){M.specular.value.copy(p.specular),M.shininess.value=Math.max(p.shininess,1e-4)}function g(M,p){p.gradientMap&&(M.gradientMap.value=p.gradientMap)}function v(M,p){M.metalness.value=p.metalness,p.metalnessMap&&(M.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,M.metalnessMapTransform)),M.roughness.value=p.roughness,p.roughnessMap&&(M.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,M.roughnessMapTransform)),e.get(p).envMap&&(M.envMapIntensity.value=p.envMapIntensity)}function _(M,p,E){M.ior.value=p.ior,p.sheen>0&&(M.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),M.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(M.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,M.sheenColorMapTransform)),p.sheenRoughnessMap&&(M.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,M.sheenRoughnessMapTransform))),p.clearcoat>0&&(M.clearcoat.value=p.clearcoat,M.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(M.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,M.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(M.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&M.clearcoatNormalScale.value.negate())),p.iridescence>0&&(M.iridescence.value=p.iridescence,M.iridescenceIOR.value=p.iridescenceIOR,M.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(M.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,M.iridescenceMapTransform)),p.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),p.transmission>0&&(M.transmission.value=p.transmission,M.transmissionSamplerMap.value=E.texture,M.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(M.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,M.transmissionMapTransform)),M.thickness.value=p.thickness,p.thicknessMap&&(M.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=p.attenuationDistance,M.attenuationColor.value.copy(p.attenuationColor)),M.specularIntensity.value=p.specularIntensity,M.specularColor.value.copy(p.specularColor),p.specularColorMap&&(M.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,M.specularColorMapTransform)),p.specularIntensityMap&&(M.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,p){p.matcap&&(M.matcap.value=p.matcap)}function b(M,p){const E=e.get(p).light;M.referencePosition.value.setFromMatrixPosition(E.matrixWorld),M.nearDistance.value=E.shadow.camera.near,M.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eP(t,e,n,i){let r={},o={},l=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(E,w){const L=w.program;i.uniformBlockBinding(E,L)}function h(E,w){let L=r[E.id];L===void 0&&(T(E),L=m(E),r[E.id]=L,E.addEventListener("dispose",M));const P=w.program;i.updateUBOMapping(E,P);const O=e.render.frame;o[E.id]!==O&&(v(E),o[E.id]=O)}function m(E){const w=g();E.__bindingPointIndex=w;const L=t.createBuffer(),P=E.__size,O=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,L),t.bufferData(t.UNIFORM_BUFFER,P,O),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,L),L}function g(){for(let E=0;E<a;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(E){const w=r[E.id],L=E.uniforms,P=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let O=0,B=L.length;O<B;O++){const z=L[O];if(_(z,O,P)===!0){const R=z.__offset,N=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let fe=0;fe<N.length;fe++){const $=N[fe],te=b($);typeof $=="number"?(z.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,R+ae,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=$.elements[0],z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=$.elements[0],z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=$.elements[0]):($.toArray(z.__data,ae),ae+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,z.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(E,w,L){const P=E.value;if(L[w]===void 0){if(typeof P=="number")L[w]=P;else{const O=Array.isArray(P)?P:[P],B=[];for(let z=0;z<O.length;z++)B.push(O[z].clone());L[w]=B}return!0}else if(typeof P=="number"){if(L[w]!==P)return L[w]=P,!0}else{const O=Array.isArray(L[w])?L[w]:[L[w]],B=Array.isArray(P)?P:[P];for(let z=0;z<O.length;z++){const R=O[z];if(R.equals(B[z])===!1)return R.copy(B[z]),!0}}return!1}function T(E){const w=E.uniforms;let L=0;const P=16;let O=0;for(let B=0,z=w.length;B<z;B++){const R=w[B],N={boundary:0,storage:0},ae=Array.isArray(R.value)?R.value:[R.value];for(let fe=0,$=ae.length;fe<$;fe++){const te=ae[fe],j=b(te);N.boundary+=j.boundary,N.storage+=j.storage}if(R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=L,B>0){O=L%P;const fe=P-O;O!==0&&fe-N.boundary<0&&(L+=P-O,R.__offset=L)}L+=N.storage}return O=L%P,O>0&&(L+=P-O),E.__size=L,E.__cache={},this}function b(E){const w={boundary:0,storage:0};return typeof E=="number"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function M(E){const w=E.target;w.removeEventListener("dispose",M);const L=l.indexOf(w.__bindingPointIndex);l.splice(L,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function p(){for(const E in r)t.deleteBuffer(r[E]);l=[],r={},o={}}return{bind:d,update:h,dispose:p}}function tP(){const t=pl("canvas");return t.style.display="block",t}class ix{constructor(e={}){const{canvas:n=tP(),context:i=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=l;let _=null,T=null;const b=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=tt,this.useLegacyLights=!0,this.toneMapping=Hi,this.toneMappingExposure=1;const p=this;let E=!1,w=0,L=0,P=null,O=-1,B=null;const z=new Dt,R=new Dt;let N=null,ae=n.width,fe=n.height,$=1,te=null,j=null;const ce=new Dt(0,0,ae,fe),pe=new Dt(0,0,ae,fe);let X=!1;const J=new Np;let ne=!1,Te=!1,ve=null;const oe=new Vt,q=new Y,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return P===null?$:1}let H=i;function Ze(U,Q){for(let re=0;re<U.length;re++){const K=U[re],de=n.getContext(K,Q);if(de!==null)return de}return null}try{const U={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rp}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",Je,!1),H===null){const Q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&Q.shift(),H=Ze(Q,U),H===null)throw Ze(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let He,be,Ge,ht,Be,Qe,Ye,Tt,Ot,gt,lt,Mt,jt,F,D,se,me,xe,Ce,G,he,ie,Ae,Ie;function ze(){He=new mC(H),be=new cC(H,He,e),He.init(be),ie=new $A(H,He,be),Ge=new YA(H,He,be),ht=new yC(H),Be=new OA,Qe=new qA(H,He,Ge,Be,be,ie,ht),Ye=new fC(p),Tt=new pC(p),Ot=new R1(H,be),Ae=new aC(H,He,Ot,be),gt=new vC(H,Ot,ht,Ae),lt=new MC(H,gt,Ot,ht),Ce=new SC(H,be,Qe),se=new uC(Be),Mt=new UA(p,Ye,Tt,He,be,Ae,se),jt=new JA(p,Be),F=new FA,D=new HA(He,be),xe=new sC(p,Ye,Tt,Ge,lt,v,d),me=new XA(p,lt,be),Ie=new eP(H,ht,be,Ge),G=new lC(H,He,ht,be),he=new gC(H,He,ht,be),ht.programs=Mt.programs,p.capabilities=be,p.extensions=He,p.properties=Be,p.renderLists=F,p.shadowMap=me,p.state=Ge,p.info=ht}ze();const De=new QA(p,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const U=He.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=He.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(ae,fe,!1))},this.getSize=function(U){return U.set(ae,fe)},this.setSize=function(U,Q,re=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=U,fe=Q,n.width=Math.floor(U*$),n.height=Math.floor(Q*$),re===!0&&(n.style.width=U+"px",n.style.height=Q+"px"),this.setViewport(0,0,U,Q)},this.getDrawingBufferSize=function(U){return U.set(ae*$,fe*$).floor()},this.setDrawingBufferSize=function(U,Q,re){ae=U,fe=Q,$=re,n.width=Math.floor(U*re),n.height=Math.floor(Q*re),this.setViewport(0,0,U,Q)},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(ce)},this.setViewport=function(U,Q,re,K){U.isVector4?ce.set(U.x,U.y,U.z,U.w):ce.set(U,Q,re,K),Ge.viewport(z.copy(ce).multiplyScalar($).floor())},this.getScissor=function(U){return U.copy(pe)},this.setScissor=function(U,Q,re,K){U.isVector4?pe.set(U.x,U.y,U.z,U.w):pe.set(U,Q,re,K),Ge.scissor(R.copy(pe).multiplyScalar($).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(U){Ge.setScissorTest(X=U)},this.setOpaqueSort=function(U){te=U},this.setTransparentSort=function(U){j=U},this.getClearColor=function(U){return U.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(U=!0,Q=!0,re=!0){let K=0;U&&(K|=H.COLOR_BUFFER_BIT),Q&&(K|=H.DEPTH_BUFFER_BIT),re&&(K|=H.STENCIL_BUFFER_BIT),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",Je,!1),F.dispose(),D.dispose(),Be.dispose(),Ye.dispose(),Tt.dispose(),lt.dispose(),Ae.dispose(),Ie.dispose(),Mt.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ue),De.removeEventListener("sessionend",xt),ve&&(ve.dispose(),ve=null),pt.stop()};function Fe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const U=ht.autoReset,Q=me.enabled,re=me.autoUpdate,K=me.needsUpdate,de=me.type;ze(),ht.autoReset=U,me.enabled=Q,me.autoUpdate=re,me.needsUpdate=K,me.type=de}function Je(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function At(U){const Q=U.target;Q.removeEventListener("dispose",At),W(Q)}function W(U){le(U),Be.remove(U)}function le(U){const Q=Be.get(U).programs;Q!==void 0&&(Q.forEach(function(re){Mt.releaseProgram(re)}),U.isShaderMaterial&&Mt.releaseShaderCache(U))}this.renderBufferDirect=function(U,Q,re,K,de,Ve){Q===null&&(Q=Ee);const We=de.isMesh&&de.matrixWorld.determinant()<0,je=$e(U,Q,re,K,de);Ge.setMaterial(K,We);let et=re.index,ot=1;K.wireframe===!0&&(et=gt.getWireframeAttribute(re),ot=2);const rt=re.drawRange,st=re.attributes.position;let mt=rt.start*ot,sn=(rt.start+rt.count)*ot;Ve!==null&&(mt=Math.max(mt,Ve.start*ot),sn=Math.min(sn,(Ve.start+Ve.count)*ot)),et!==null?(mt=Math.max(mt,0),sn=Math.min(sn,et.count)):st!=null&&(mt=Math.max(mt,0),sn=Math.min(sn,st.count));const Cn=sn-mt;if(Cn<0||Cn===1/0)return;Ae.setup(de,K,je,re,et);let Ii,Bt=G;if(et!==null&&(Ii=Ot.get(et),Bt=he,Bt.setIndex(Ii)),de.isMesh)K.wireframe===!0?(Ge.setLineWidth(K.wireframeLinewidth*we()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(de.isLine){let ct=K.linewidth;ct===void 0&&(ct=1),Ge.setLineWidth(ct*we()),de.isLineSegments?Bt.setMode(H.LINES):de.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else de.isPoints?Bt.setMode(H.POINTS):de.isSprite&&Bt.setMode(H.TRIANGLES);if(de.isInstancedMesh)Bt.renderInstances(mt,Cn,de.count);else if(re.isInstancedBufferGeometry){const ct=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,vr=Math.min(re.instanceCount,ct);Bt.renderInstances(mt,Cn,vr)}else Bt.render(mt,Cn)},this.compile=function(U,Q){function re(K,de,Ve){K.transparent===!0&&K.side===Bi&&K.forceSinglePass===!1?(K.side=Un,K.needsUpdate=!0,No(K,de,Ve),K.side=Hr,K.needsUpdate=!0,No(K,de,Ve),K.side=Bi):No(K,de,Ve)}T=D.get(U),T.init(),M.push(T),U.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(p.useLegacyLights),U.traverse(function(K){const de=K.material;if(de)if(Array.isArray(de))for(let Ve=0;Ve<de.length;Ve++){const We=de[Ve];re(We,U,K)}else re(de,U,K)}),M.pop(),T=null};let ge=null;function Le(U){ge&&ge(U)}function Ue(){pt.stop()}function xt(){pt.start()}const pt=new Z_;pt.setAnimationLoop(Le),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(U){ge=U,De.setAnimationLoop(U),U===null?pt.stop():pt.start()},De.addEventListener("sessionstart",Ue),De.addEventListener("sessionend",xt),this.render=function(U,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),U.isScene===!0&&U.onBeforeRender(p,U,Q,P),T=D.get(U,M.length),T.init(),M.push(T),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J.setFromProjectionMatrix(oe),Te=this.localClippingEnabled,ne=se.init(this.clippingPlanes,Te),_=F.get(U,b.length),_.init(),b.push(_),on(U,Q,0,p.sortObjects),_.finish(),p.sortObjects===!0&&_.sort(te,j),ne===!0&&se.beginShadows();const re=T.state.shadowsArray;if(me.render(re,U,Q),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(_,U),T.setupLights(p.useLegacyLights),Q.isArrayCamera){const K=Q.cameras;for(let de=0,Ve=K.length;de<Ve;de++){const We=K[de];Xt(_,U,We,We.viewport)}}else Xt(_,U,Q);P!==null&&(Qe.updateMultisampleRenderTarget(P),Qe.updateRenderTargetMipmap(P)),U.isScene===!0&&U.onAfterRender(p,U,Q),Ae.resetDefaultState(),O=-1,B=null,M.pop(),M.length>0?T=M[M.length-1]:T=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function on(U,Q,re,K){if(U.visible===!1)return;if(U.layers.test(Q.layers)){if(U.isGroup)re=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Q);else if(U.isLight)T.pushLight(U),U.castShadow&&T.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||J.intersectsSprite(U)){K&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(oe);const We=lt.update(U),je=U.material;je.visible&&_.push(U,We,je,re,q.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||J.intersectsObject(U))){U.isSkinnedMesh&&U.skeleton.frame!==ht.render.frame&&(U.skeleton.update(),U.skeleton.frame=ht.render.frame);const We=lt.update(U),je=U.material;if(K&&(We.boundingSphere===null&&We.computeBoundingSphere(),q.copy(We.boundingSphere.center).applyMatrix4(U.matrixWorld).applyMatrix4(oe)),Array.isArray(je)){const et=We.groups;for(let ot=0,rt=et.length;ot<rt;ot++){const st=et[ot],mt=je[st.materialIndex];mt&&mt.visible&&_.push(U,We,mt,re,q.z,st)}}else je.visible&&_.push(U,We,je,re,q.z,null)}}const Ve=U.children;for(let We=0,je=Ve.length;We<je;We++)on(Ve[We],Q,re,K)}function Xt(U,Q,re,K){const de=U.opaque,Ve=U.transmissive,We=U.transparent;T.setupLightsView(re),ne===!0&&se.setGlobalState(p.clippingPlanes,re),Ve.length>0&&yt(de,Ve,Q,re),K&&Ge.viewport(z.copy(K)),de.length>0&&Yt(de,Q,re),Ve.length>0&&Yt(Ve,Q,re),We.length>0&&Yt(We,Q,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function yt(U,Q,re,K){if(ve===null){const je=be.isWebGL2;ve=new en(1024,1024,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?hl:Do,minFilter:dl,samples:je&&a===!0?4:0})}const de=p.getRenderTarget();p.setRenderTarget(ve),p.clear();const Ve=p.toneMapping;p.toneMapping=Hi,Yt(U,re,K),Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve);let We=!1;for(let je=0,et=Q.length;je<et;je++){const ot=Q[je],rt=ot.object,st=ot.geometry,mt=ot.material,sn=ot.group;if(mt.side===Bi&&rt.layers.test(K.layers)){const Cn=mt.side;mt.side=Un,mt.needsUpdate=!0,Xn(rt,re,K,st,mt,sn),mt.side=Cn,mt.needsUpdate=!0,We=!0}}We===!0&&(Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve)),p.setRenderTarget(de),p.toneMapping=Ve}function Yt(U,Q,re){const K=Q.isScene===!0?Q.overrideMaterial:null;for(let de=0,Ve=U.length;de<Ve;de++){const We=U[de],je=We.object,et=We.geometry,ot=K===null?We.material:K,rt=We.group;je.layers.test(re.layers)&&Xn(je,Q,re,et,ot,rt)}}function Xn(U,Q,re,K,de,Ve){U.onBeforeRender(p,Q,re,K,de,Ve),U.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),de.onBeforeRender(p,Q,re,K,U,Ve),de.transparent===!0&&de.side===Bi&&de.forceSinglePass===!1?(de.side=Un,de.needsUpdate=!0,p.renderBufferDirect(re,Q,K,de,U,Ve),de.side=Hr,de.needsUpdate=!0,p.renderBufferDirect(re,Q,K,de,U,Ve),de.side=Bi):p.renderBufferDirect(re,Q,K,de,U,Ve),U.onAfterRender(p,Q,re,K,de,Ve)}function No(U,Q,re){Q.isScene!==!0&&(Q=Ee);const K=Be.get(U),de=T.state.lights,Ve=T.state.shadowsArray,We=de.state.version,je=Mt.getParameters(U,de.state,Ve,Q,re),et=Mt.getProgramCacheKey(je);let ot=K.programs;K.environment=U.isMeshStandardMaterial?Q.environment:null,K.fog=Q.fog,K.envMap=(U.isMeshStandardMaterial?Tt:Ye).get(U.envMap||K.environment),ot===void 0&&(U.addEventListener("dispose",At),ot=new Map,K.programs=ot);let rt=ot.get(et);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===We)return ni(U,je),rt}else je.uniforms=Mt.getUniforms(U),U.onBuild(re,je,p),U.onBeforeCompile(je,p),rt=Mt.acquireProgram(je,et),ot.set(et,rt),K.uniforms=je.uniforms;const st=K.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(st.clippingPlanes=se.uniform),ni(U,je),K.needsLights=qr(U),K.lightsStateVersion=We,K.needsLights&&(st.ambientLightColor.value=de.state.ambient,st.lightProbe.value=de.state.probe,st.directionalLights.value=de.state.directional,st.directionalLightShadows.value=de.state.directionalShadow,st.spotLights.value=de.state.spot,st.spotLightShadows.value=de.state.spotShadow,st.rectAreaLights.value=de.state.rectArea,st.ltc_1.value=de.state.rectAreaLTC1,st.ltc_2.value=de.state.rectAreaLTC2,st.pointLights.value=de.state.point,st.pointLightShadows.value=de.state.pointShadow,st.hemisphereLights.value=de.state.hemi,st.directionalShadowMap.value=de.state.directionalShadowMap,st.directionalShadowMatrix.value=de.state.directionalShadowMatrix,st.spotShadowMap.value=de.state.spotShadowMap,st.spotLightMatrix.value=de.state.spotLightMatrix,st.spotLightMap.value=de.state.spotLightMap,st.pointShadowMap.value=de.state.pointShadowMap,st.pointShadowMatrix.value=de.state.pointShadowMatrix);const mt=rt.getUniforms(),sn=Zc.seqWithValue(mt.seq,st);return K.currentProgram=rt,K.uniformsList=sn,rt}function ni(U,Q){const re=Be.get(U);re.outputColorSpace=Q.outputColorSpace,re.instancing=Q.instancing,re.skinning=Q.skinning,re.morphTargets=Q.morphTargets,re.morphNormals=Q.morphNormals,re.morphColors=Q.morphColors,re.morphTargetsCount=Q.morphTargetsCount,re.numClippingPlanes=Q.numClippingPlanes,re.numIntersection=Q.numClipIntersection,re.vertexAlphas=Q.vertexAlphas,re.vertexTangents=Q.vertexTangents,re.toneMapping=Q.toneMapping}function $e(U,Q,re,K,de){Q.isScene!==!0&&(Q=Ee),Qe.resetTextureUnits();const Ve=Q.fog,We=K.isMeshStandardMaterial?Q.environment:null,je=P===null?p.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Wi,et=(K.isMeshStandardMaterial?Tt:Ye).get(K.envMap||We),ot=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!K.normalMap&&!!re.attributes.tangent,st=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,sn=!!re.morphAttributes.color,Cn=K.toneMapped?p.toneMapping:Hi,Ii=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bt=Ii!==void 0?Ii.length:0,ct=Be.get(K),vr=T.state.lights;if(ne===!0&&(Te===!0||U!==B)){const An=U===B&&K.id===O;se.setState(K,U,An)}let qt=!1;K.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==vr.state.version||ct.outputColorSpace!==je||de.isInstancedMesh&&ct.instancing===!1||!de.isInstancedMesh&&ct.instancing===!0||de.isSkinnedMesh&&ct.skinning===!1||!de.isSkinnedMesh&&ct.skinning===!0||ct.envMap!==et||K.fog===!0&&ct.fog!==Ve||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==se.numPlanes||ct.numIntersection!==se.numIntersection)||ct.vertexAlphas!==ot||ct.vertexTangents!==rt||ct.morphTargets!==st||ct.morphNormals!==mt||ct.morphColors!==sn||ct.toneMapping!==Cn||be.isWebGL2===!0&&ct.morphTargetsCount!==Bt)&&(qt=!0):(qt=!0,ct.__version=K.version);let ii=ct.currentProgram;qt===!0&&(ii=No(K,Q,de));let ko=!1,$r=!1,ta=!1;const Ht=ii.getUniforms(),Xi=ct.uniforms;if(Ge.useProgram(ii.program)&&(ko=!0,$r=!0,ta=!0),K.id!==O&&(O=K.id,$r=!0),ko||B!==U){if(Ht.setValue(H,"projectionMatrix",U.projectionMatrix),be.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),B!==U&&(B=U,$r=!0,ta=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const An=Ht.map.cameraPosition;An!==void 0&&An.setValue(H,q.setFromMatrixPosition(U.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",U.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||de.isSkinnedMesh)&&Ht.setValue(H,"viewMatrix",U.matrixWorldInverse)}if(de.isSkinnedMesh){Ht.setOptional(H,de,"bindMatrix"),Ht.setOptional(H,de,"bindMatrixInverse");const An=de.skeleton;An&&(be.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Ht.setValue(H,"boneTexture",An.boneTexture,Qe),Ht.setValue(H,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vi=re.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0&&be.isWebGL2===!0)&&Ce.update(de,re,ii),($r||ct.receiveShadow!==de.receiveShadow)&&(ct.receiveShadow=de.receiveShadow,Ht.setValue(H,"receiveShadow",de.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Xi.envMap.value=et,Xi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),$r&&(Ht.setValue(H,"toneMappingExposure",p.toneMappingExposure),ct.needsLights&&Fo(Xi,ta),Ve&&K.fog===!0&&jt.refreshFogUniforms(Xi,Ve),jt.refreshMaterialUniforms(Xi,K,$,fe,ve),Zc.upload(H,ct.uniformsList,Xi,Qe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zc.upload(H,ct.uniformsList,Xi,Qe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(H,"center",de.center),Ht.setValue(H,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(H,"normalMatrix",de.normalMatrix),Ht.setValue(H,"modelMatrix",de.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const An=K.uniformsGroups;for(let na=0,Al=An.length;na<Al;na++)if(be.isWebGL2){const Pl=An[na];Ie.update(Pl,ii),Ie.bind(Pl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Fo(U,Q){U.ambientLightColor.needsUpdate=Q,U.lightProbe.needsUpdate=Q,U.directionalLights.needsUpdate=Q,U.directionalLightShadows.needsUpdate=Q,U.pointLights.needsUpdate=Q,U.pointLightShadows.needsUpdate=Q,U.spotLights.needsUpdate=Q,U.spotLightShadows.needsUpdate=Q,U.rectAreaLights.needsUpdate=Q,U.hemisphereLights.needsUpdate=Q}function qr(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(U,Q,re){Be.get(U.texture).__webglTexture=Q,Be.get(U.depthTexture).__webglTexture=re;const K=Be.get(U);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=re===void 0,K.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,Q){const re=Be.get(U);re.__webglFramebuffer=Q,re.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(U,Q=0,re=0){P=U,w=Q,L=re;let K=!0,de=null,Ve=!1,We=!1;if(U){const et=Be.get(U);et.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(H.FRAMEBUFFER,null),K=!1):et.__webglFramebuffer===void 0?Qe.setupRenderTarget(U):et.__hasExternalTextures&&Qe.rebindTextures(U,Be.get(U.texture).__webglTexture,Be.get(U.depthTexture).__webglTexture);const ot=U.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(We=!0);const rt=Be.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(de=rt[Q],Ve=!0):be.isWebGL2&&U.samples>0&&Qe.useMultisampledRTT(U)===!1?de=Be.get(U).__webglMultisampledFramebuffer:de=rt,z.copy(U.viewport),R.copy(U.scissor),N=U.scissorTest}else z.copy(ce).multiplyScalar($).floor(),R.copy(pe).multiplyScalar($).floor(),N=X;if(Ge.bindFramebuffer(H.FRAMEBUFFER,de)&&be.drawBuffers&&K&&Ge.drawBuffers(U,de),Ge.viewport(z),Ge.scissor(R),Ge.setScissorTest(N),Ve){const et=Be.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et.__webglTexture,re)}else if(We){const et=Be.get(U.texture),ot=Q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,et.__webglTexture,re||0,ot)}O=-1},this.readRenderTargetPixels=function(U,Q,re,K,de,Ve,We){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Be.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){Ge.bindFramebuffer(H.FRAMEBUFFER,je);try{const et=U.texture,ot=et.format,rt=et.type;if(ot!==Ai&&ie.convert(ot)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=rt===hl&&(He.has("EXT_color_buffer_half_float")||be.isWebGL2&&He.has("EXT_color_buffer_float"));if(rt!==Do&&ie.convert(rt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===yo&&(be.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=U.width-K&&re>=0&&re<=U.height-de&&H.readPixels(Q,re,K,de,ie.convert(ot),ie.convert(rt),Ve)}finally{const et=P!==null?Be.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(U,Q,re=0){const K=Math.pow(2,-re),de=Math.floor(Q.image.width*K),Ve=Math.floor(Q.image.height*K);Qe.setTexture2D(Q,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,U.x,U.y,de,Ve),Ge.unbindTexture()},this.copyTextureToTexture=function(U,Q,re,K=0){const de=Q.image.width,Ve=Q.image.height,We=ie.convert(re.format),je=ie.convert(re.type);Qe.setTexture2D(re,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,re.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,re.unpackAlignment),Q.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,U.x,U.y,de,Ve,We,je,Q.image.data):Q.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,U.x,U.y,Q.mipmaps[0].width,Q.mipmaps[0].height,We,Q.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,K,U.x,U.y,We,je,Q.image),K===0&&re.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(U,Q,re,K,de=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=U.max.x-U.min.x+1,We=U.max.y-U.min.y+1,je=U.max.z-U.min.z+1,et=ie.convert(K.format),ot=ie.convert(K.type);let rt;if(K.isData3DTexture)Qe.setTexture3D(K,0),rt=H.TEXTURE_3D;else if(K.isDataArrayTexture)Qe.setTexture2DArray(K,0),rt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const st=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),sn=H.getParameter(H.UNPACK_SKIP_PIXELS),Cn=H.getParameter(H.UNPACK_SKIP_ROWS),Ii=H.getParameter(H.UNPACK_SKIP_IMAGES),Bt=re.isCompressedTexture?re.mipmaps[0]:re.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,U.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,U.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,U.min.z),re.isDataTexture||re.isData3DTexture?H.texSubImage3D(rt,de,Q.x,Q.y,Q.z,Ve,We,je,et,ot,Bt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(rt,de,Q.x,Q.y,Q.z,Ve,We,je,et,Bt.data)):H.texSubImage3D(rt,de,Q.x,Q.y,Q.z,Ve,We,je,et,ot,Bt),H.pixelStorei(H.UNPACK_ROW_LENGTH,st),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,sn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ii),de===0&&K.generateMipmaps&&H.generateMipmap(rt),Ge.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?Qe.setTextureCube(U,0):U.isData3DTexture?Qe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Qe.setTexture2DArray(U,0):Qe.setTexture2D(U,0),Ge.unbindTexture()},this.resetState=function(){w=0,L=0,P=null,Ge.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?Mo:k_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mo?tt:Wi}}class nP extends ix{}nP.prototype.isWebGL1Renderer=!0;class rx extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class fi extends Di{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class kp extends mi{constructor(e=1,n=1,i=1,r=32,o=1,l=!1,a=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:a,thetaLength:d};const h=this;r=Math.floor(r),o=Math.floor(o);const m=[],g=[],v=[],_=[];let T=0;const b=[],M=i/2;let p=0;E(),l===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(_,2));function E(){const L=new Y,P=new Y;let O=0;const B=(n-e)/i;for(let z=0;z<=o;z++){const R=[],N=z/o,ae=N*(n-e)+e;for(let fe=0;fe<=r;fe++){const $=fe/r,te=$*d+a,j=Math.sin(te),ce=Math.cos(te);P.x=ae*j,P.y=-N*i+M,P.z=ae*ce,g.push(P.x,P.y,P.z),L.set(j,B,ce).normalize(),v.push(L.x,L.y,L.z),_.push($,1-N),R.push(T++)}b.push(R)}for(let z=0;z<r;z++)for(let R=0;R<o;R++){const N=b[R][z],ae=b[R+1][z],fe=b[R+1][z+1],$=b[R][z+1];m.push(N,ae,$),m.push(ae,fe,$),O+=6}h.addGroup(p,O,0),p+=O}function w(L){const P=T,O=new Ne,B=new Y;let z=0;const R=L===!0?e:n,N=L===!0?1:-1;for(let fe=1;fe<=r;fe++)g.push(0,M*N,0),v.push(0,N,0),_.push(.5,.5),T++;const ae=T;for(let fe=0;fe<=r;fe++){const te=fe/r*d+a,j=Math.cos(te),ce=Math.sin(te);B.x=R*ce,B.y=M*N,B.z=R*j,g.push(B.x,B.y,B.z),v.push(0,N,0),O.x=j*.5+.5,O.y=ce*.5*N+.5,_.push(O.x,O.y),T++}for(let fe=0;fe<r;fe++){const $=P+fe,te=ae+fe;L===!0?m.push(te,te+1,$):m.push(te+1,te,$),z+=3}h.addGroup(p,z,L===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yu extends mi{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const d=Math.min(l+a,Math.PI);let h=0;const m=[],g=new Y,v=new Y,_=[],T=[],b=[],M=[];for(let p=0;p<=i;p++){const E=[],w=p/i;let L=0;p===0&&l===0?L=.5/n:p===i&&d===Math.PI&&(L=-.5/n);for(let P=0;P<=n;P++){const O=P/n;g.x=-e*Math.cos(r+O*o)*Math.sin(l+w*a),g.y=e*Math.cos(l+w*a),g.z=e*Math.sin(r+O*o)*Math.sin(l+w*a),T.push(g.x,g.y,g.z),v.copy(g).normalize(),b.push(v.x,v.y,v.z),M.push(O+L,1-w),E.push(h++)}m.push(E)}for(let p=0;p<i;p++)for(let E=0;E<n;E++){const w=m[p][E+1],L=m[p][E],P=m[p+1][E],O=m[p+1][E+1];(p!==0||l>0)&&_.push(w,L,O),(p!==i-1||d<Math.PI)&&_.push(L,P,O)}this.setIndex(_),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(b,3)),this.setAttribute("uv",new dn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class iP extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i0 extends iP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ws extends mr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rP extends mr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ox extends mr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class oP extends mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const r0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class sP{constructor(e,n,i){const r=this;let o=!1,l=0,a=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(m){a++,o===!1&&r.onStart!==void 0&&r.onStart(m,l,a),o=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,a),l===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const _=h[g],T=h[g+1];if(_.global&&(_.lastIndex=0),_.test(m))return T}return null}}}const aP=new sP;class sx{constructor(e){this.manager=e!==void 0?e:aP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class lP extends sx{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=r0.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(l),o.manager.itemEnd(e)},0),l;const a=pl("img");function d(){m(),r0.add(e,this),n&&n(this),o.manager.itemEnd(e)}function h(g){m(),r&&r(g),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){a.removeEventListener("load",d,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",d,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class cP extends sx{constructor(e){super(e)}load(e,n,i,r){const o=new jn,l=new lP(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class Cl extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class uP extends Cl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Cd=new Vt,o0=new Y,s0=new Y;class zp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Np,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;o0.setFromMatrixPosition(e.matrixWorld),n.position.copy(o0),s0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(s0),n.updateMatrixWorld(),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fP extends zp{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Eu*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ad extends Cl{constructor(e,n,i=0,r=Math.PI/3,o=0,l=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new fP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const a0=new Vt,Ra=new Y,Pd=new Y;class dP extends zp{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ra),Pd.copy(i.position),Pd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Pd),i.updateMatrixWorld(),r.makeTranslation(-Ra.x,-Ra.y,-Ra.z),a0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a0)}}class so extends Cl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hP extends zp{constructor(){super(new ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pP extends Cl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new hP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class us extends Cl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bp extends mi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class mP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=l0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=l0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function l0(){return(typeof performance>"u"?Date:performance).now()}class c0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);const{abs:Gp,cos:ax,sin:vP,cosh:RR,sinh:DR,acos:LR,acosh:IR,tan:gP,min:lx,max:cx,round:yP,sqrt:qu,sign:ux,floor:_P,log:UR,exp:OR,PI:ml}=Math,xP=t=>String.fromCharCode(97+t),SP=t=>t.charCodeAt(0)-97,fx=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],MP=["","knuthbendix","toddcoxeter"],Mi=new Ke,Vp=new cP,ea=Vp.load("Carbon.png");ea.colorSpace=tt;ea.wrapS=Ro;ea.wrapT=Ro;ea.repeat.x=10;ea.repeat.y=10;const Hp=Vp.load("Carbon_Normal.png");Hp.wrapS=Ro;Hp.wrapT=Ro;const Xa=Vp.load("ocean.jpg");Xa.colorSpace=tt;Xa.mapping=Mu;[...new Array(10).keys()].map(t=>new RegExp(xP(t),"g"));const ji={neon:{background:0,fx:["bloom"],shadow:!1,material:new wo,lights:[],color:({word:t})=>Mi.setHSL(t.length*.17%1,.5,.5)},colorful:{background:16777215,shadow:!1,material:new ws,lights:[new us(16777215,.25)],cameraLights:[new so(16777215,.75)],color:({word:t},e,n)=>Mi.setHSL(t.length*.03%1,1,.8)},reflection:{background:16777215,shadow:!1,material:new rP,lights:[new us(16777215,.25)],cameraLights:[new so(16777215,.75)],color:({word:t},e,n)=>{const i=t.length?SP(t[t.length-1])/n:0;return Mi.setHSL(i%1,1,.8)}},projection:{background:16777215,ground:"sphere",shadow:!0,material:new ws({transparent:!0,opacity:.75,blending:fl}),lights:[new so],color:({word:t})=>Mi.setHSL(t.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new ws,lights:[new us(13421772,.4)],cameraLights:[new so(16777215,1)],color:()=>Mi.set(16776960)},pure:{background:0,fx:["sao"],shadow:!1,material:new oP,lights:[new us(0,.5)],cameraLights:[new so(16777215,1)],color:({word:t})=>Mi.setHSL(t.length*.03%1,.75,.7)},glass:{extended:!0,background:Xa,env:Xa,shadow:!1,material:new i0({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new pP,new uP],color:()=>Mi.set(15658734)},museum:{extended:!0,background:12303291,env:Xa,shadow:!0,ground:"plane",material:new i0({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:ea,normalMap:Hp}),lights:[(()=>{const t=new Ad(16777215,.2);return t.position.set(0,4,-6),t})(),(()=>{const t=new Ad(16777215,.2);return t.position.set(8,7,0),t})(),(()=>{const t=new Ad(16777215,.2);return t.position.set(-4,6,2),t})(),new us(16777215,.4)],cameraLights:[(()=>{const t=new so(16777215,2.5,5,5);return t.shadow=null,t})()],color:()=>Mi.set(16777215)},bokeh:{extended:!0,background:16777215,fx:["bokeh"],shadow:!1,material:new ws,lights:[new us(16777215,.5)],cameraLights:[new so(16777215,1)],color:({word:t})=>Mi.setHSL(t.length*.17%1,.7,.5)},transcendent:{extended:!0,background:16777215,fx:["godray"],shadow:!1,material:new wo,color:()=>Mi.set(0)},wireframe:{extended:!0,background:0,shadow:!1,material:new wo({wireframe:!0}),lights:[],color:({word:t})=>Mi.setHSL(t.length*.17%1,.5,.5)}};Object.values(ji).forEach(t=>{t.vertexMaterial||(t.vertexMaterial=t.material),t.edgeMaterial||(t.edgeMaterial=t.material),t.faceMaterial||(t.faceMaterial=t.material.clone(),t.faceMaterial.side=Bi,t.faceMaterial.transparent=!0,t.faceMaterial.opacity=.5,t.faceMaterial.blending=fl,t.faceMaterial.blendEquation=or,t.faceMaterial.blendSrc=Lp,t.faceMaterial.blendDst=Ip,t.faceMaterial.depthWrite=!1)});const wu={dimensions:4,coxeter:[[-1,5,2,2],[5,-1,3,2],[2,3,-1,4],[2,2,4,-1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],mirrors:[1,0,0,0],extended:!1,stellated:!1,order:10,curve:!0,segments:32,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,showFaces:!0,grouper:"",projection:"stereographic",controls:"orbit",controlsShift:0,ambiance:"neon",fov3:90,fov4:90,msaa:window.devicePixelRatio<=1,msaaSamples:8},dx=t=>{const e={...t};return Object.entries(e).forEach(([n,i])=>{typeof wu[n]=="number"?(i===""||isNaN(i))&&delete e[n]:Array.isArray(wu[n])&&(Array.isArray(i[0])?i.find(r=>r.find(o=>i===""||isNaN(o)))&&delete e[n]:i.find(r=>i===""||isNaN(r)&&!(n==="mirrors"&&"sh".includes(r)))&&delete e[n])}),e},hx=t=>{if(t.length===1)return t[0][0];let e=0;for(let n=0;n<t.length;n++){const i=new Array(t.length-1).fill().map(()=>new Array(t.length-1).fill(0));for(let o=1;o<t.length;o++)for(let l=0;l<t.length;l++)l<n?i[o-1][l]=t[o][l]:l>n&&(i[o-1][l-1]=t[o][l]);const r=n%2===0?1:-1;e+=t[0][n]*r*hx(i)}return e},EP=(t,e)=>t.map((n,i)=>n.map((r,o)=>-ax((e?e[i][o]:1)*ml/r))),wP=t=>{const e=hx(t);return Gp(e)<1e-8?0:ux(e)},px=(t,e,n)=>{let i=0;for(let r=0;r<t.length;r++)i+=t[r]*e[r]*(r===t.length-1&&n||1);return i},TP=(t,e)=>{if(t=t.slice(),e===0){for(let i=0;i<t.length;i++)t[i]/=t[t.length-1];return t}const n=(e===-1&&ux(t[t.length-1])||1)/qu(Gp(px(t,t,e)));for(let i=0;i<t.length;i++)t[i]*=n;return t},bP=(t,e)=>{const[n,i]=t,r=ax(e),o=vP(e);t[0]=n*r-i*o,t[1]=n*o+i*r},CP=(t,e,n)=>{if(n!==0){const i=e/qu(px(t,t,1)),r=new Array(t.length-1);for(let o=0;o<t.length-1;o++)r[o]=t[o]*i;mx(t,r,n)}else for(let i=0;i<t.length;i++)t[i]*=1-e},AP=(t,e,n)=>{const i=t.length,r=n;for(let o=0;o<i-1;o++){const l=e[o];if(l!==0){const a=qu(1-r*l*l),d=l;let h=t[o],m=t[i-1];t[o]=a*h+-r*d*m,t[i-1]=d*h+a*m}}},mx=(t,e,n)=>{if(n===0)for(let i=0;i<e.length;i++)t[i]+=e[i];else AP(t,e,n)},PP=(t,e)=>{const n=t[0].length,i=new Array(n).fill().map(()=>new Array(n).fill(0));i[0][0]=1;for(let r=1;r<n;r++){for(let o=0;o<r;o++){let l=0;for(let a=0;a<o;a++)l+=i[r][a]*i[o][a];i[r][o]=(t[r][o]-l)/i[o][o]}i[r][r]=qu(Gp(1-i[r].slice(0,r).reduce((o,l)=>o+l*l,0)))}return i[i.length-1][i.length-1]=e?i[i.length-1][i.length-1]*e:1,i},RP=(t,e,n)=>{const i=t.length,r=new Array(i);for(let o=0;o<i;o++){let l=0;for(let a=0;a<o;a++)l+=e[o][a]*r[a];r[o]=((isNaN(t[o])?1:+t[o])-l)/e[o][o]}return r[r.length-1]*=n||1,TP(r,n)};function DP(){return new Worker(""+new URL("knuthbendix-tiling.worker-a221c5cd.js",import.meta.url).href)}function LP(){return new Worker(""+new URL("toddcoxeter-tiling.worker-17a7b399.js",import.meta.url).href)}let u0=class vx{constructor(e,n){this.workerClass=n,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=vx.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((n,i)=>{const r=l=>{if(l.data.uuid!==e.uuid)return;const a=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${a}ms`),this.processing--,this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),l.data.error){i(l.data.error);return}n(l.data)},o=l=>{this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=cx(0,this.processing),console.error(`Can't call web worker ${this.name}`,l))};this.worker.addEventListener("message",r),this.worker.addEventListener("error",o)})}};const IP=()=>Object.values(gx).filter(t=>t.processing>0).forEach(t=>t.kill()),gx={knuthbendix:new u0("knuthbendix",DP),toddcoxeter:new u0("toddcoxeter",LP)},UP=async(t,e)=>{const n=gx[t.grouper.replace(/^auto-/,"")];e(i=>({...i,processing:!0,error:null})),t.askedOrder===0&&IP();try{const{vertices:i,edges:r,faces:o,order:l}=await n.process({order:t.askedOrder,coxeter:t.coxeter,curvature:t.curvature,stellated:t.stellated,stellation:t.stellation,mirrors:t.mirrors,mirrorsPlanes:t.mirrorsPlanes,rootVertex:t.rootVertex,dimensions:t.dimensions});e(a=>a.processing?{...a,ranges:[...a.ranges,{vertices:[a.vertices.length,a.vertices.length+i.length],edges:[a.edges.length,a.edges.length+r.length],faces:[a.faces.length,a.faces.length+o.length]}],vertices:a.vertices.concat(i),edges:a.edges.concat(r),faces:a.faces.concat(o),currentOrder:a.askedOrder+1,processing:!1,error:null}:a)}catch(i){console.warn(i),e(r=>({...r,currentOrder:r.order,error:i.message,processing:!1}))}},OP=(t,e)=>{nt.useEffect(()=>{e(n=>n.order<n.currentOrder?{...n,currentOrder:n.order}:n)},[t.order,t.currentOrder,e]),nt.useEffect(()=>{e(n=>{const i=EP(n.coxeter,n.stellated?n.stellation:null),r=wP(i),o=PP(i,r),l=RP(n.mirrors,o,r),a=n.grouper===""||n.grouper.startsWith("auto-")?r>0&&!n.stellated&&n.mirrors.every(d=>!isNaN(d))?"auto-toddcoxeter":"auto-knuthbendix":n.grouper;return{...n,currentOrder:0,grouper:a,vertices:[],edges:[],faces:[],ranges:[],curvature:r,mirrorsPlanes:o,rootVertex:l,renderError:null}})},[t.dimensions,t.coxeter,t.mirrors,t.stellated,t.stellation,t.grouper,e]),nt.useEffect(()=>{e(n=>{var i;return n.order<=n.currentOrder?{...n,askedOrder:null}:n.currentOrder<0?n:(i=n.ranges)!=null&&i[n.order]?{...n,currentOrder:n.order,askedOrder:null}:{...n,askedOrder:n.currentOrder}})},[e,t.order,t.currentOrder]),nt.useEffect(()=>{t.askedOrder!==null&&UP(t,e)},[t.askedOrder,e]),nt.useEffect(()=>{e(n=>n.vertices.length>n.maxVertices?{...n,maxVertices:n.vertices.length}:n)},[t.vertices,e]),nt.useEffect(()=>{e(n=>n.edges.length>n.maxEdges?{...n,maxEdges:n.edges.length}:n)},[t.edges,e]),nt.useEffect(()=>{e(n=>{let i=0;for(let r=0;r<n.faces.length;r++){const o=n.faces[r].vertices.length;i+=o===3?1:o}return i>n.maxFaces?{...n,maxFaces:i}:n})},[t.faces,e])};class NP extends nt.Component{componentDidCatch(e,n){this.props.onError(e,n)}render(){return this.props.error?null:this.props.children}}var yx={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default=function(s){return!(!s||!s.Window)&&s instanceof s.Window};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.getWindow=function(s){return(0,n.default)(s)?s:(s.ownerDocument||s).defaultView||o.window},i.init=l,i.window=i.realWindow=void 0;var r=void 0;i.realWindow=r;var o=void 0;function l(s){i.realWindow=r=s;var c=s.document.createTextNode("");c.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(c)===c&&(s=s.wrap(s)),i.window=o=s}i.window=o,typeof window<"u"&&window&&l(window);var a={};function d(s){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=function(s){return!!s&&d(s)==="object"},m=function(s){return typeof s=="function"},g={window:function(s){return s===i.window||(0,n.default)(s)},docFrag:function(s){return h(s)&&s.nodeType===11},object:h,func:m,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||d(s)!=="object")return!1;var c=i.getWindow(s)||i.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?s instanceof Element||s instanceof c.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return h(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return h(s)&&s.length!==void 0&&m(s.splice)}};a.default=g;var v={};function _(s){var c=s.interaction;if(c.prepared.name==="drag"){var u=c.prepared.axis;u==="x"?(c.coords.cur.page.y=c.coords.start.page.y,c.coords.cur.client.y=c.coords.start.client.y,c.coords.velocity.client.y=0,c.coords.velocity.page.y=0):u==="y"&&(c.coords.cur.page.x=c.coords.start.page.x,c.coords.cur.client.x=c.coords.start.client.x,c.coords.velocity.client.x=0,c.coords.velocity.page.x=0)}}function T(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="drag"){var f=u.prepared.axis;if(f==="x"||f==="y"){var y=f==="x"?"y":"x";c.page[y]=u.coords.start.page[y],c.client[y]=u.coords.start.client[y],c.delta[y]=0}}}Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var b={id:"actions/drag",install:function(s){var c=s.actions,u=s.Interactable,f=s.defaults;u.prototype.draggable=b.draggable,c.map.drag=b,c.methodDict.drag="draggable",f.actions.drag=b.defaults},listeners:{"interactions:before-action-move":_,"interactions:action-resume":_,"interactions:action-move":T,"auto-start:check":function(s){var c=s.interaction,u=s.interactable,f=s.buttons,y=u.options.drag;if(y&&y.enabled&&(!c.pointerIsDown||!/mouse|pointer/.test(c.pointerType)||f&u.options.drag.mouseButtons))return s.action={name:"drag",axis:y.lockAxis==="start"?y.startAxis:y.lockAxis},!1}},draggable:function(s){return a.default.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):a.default.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:_,move:T,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},M=b;v.default=M;var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var E={init:function(s){var c=s;E.document=c.document,E.DocumentFragment=c.DocumentFragment||w,E.SVGElement=c.SVGElement||w,E.SVGSVGElement=c.SVGSVGElement||w,E.SVGElementInstance=c.SVGElementInstance||w,E.Element=c.Element||w,E.HTMLElement=c.HTMLElement||E.Element,E.Event=c.Event,E.Touch=c.Touch||w,E.PointerEvent=c.PointerEvent||c.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function w(){}var L=E;p.default=L;var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var O={init:function(s){var c=p.default.Element,u=s.navigator||{};O.supportsTouch="ontouchstart"in s||a.default.func(s.DocumentTouch)&&p.default.document instanceof s.DocumentTouch,O.supportsPointerEvent=u.pointerEnabled!==!1&&!!p.default.PointerEvent,O.isIOS=/iP(hone|od|ad)/.test(u.platform),O.isIOS7=/iP(hone|od|ad)/.test(u.platform)&&/OS 7[^\d]/.test(u.appVersion),O.isIe9=/MSIE 9/.test(u.userAgent),O.isOperaMobile=u.appName==="Opera"&&O.supportsTouch&&/Presto/.test(u.userAgent),O.prefixedMatchesSelector="matches"in c.prototype?"matches":"webkitMatchesSelector"in c.prototype?"webkitMatchesSelector":"mozMatchesSelector"in c.prototype?"mozMatchesSelector":"oMatchesSelector"in c.prototype?"oMatchesSelector":"msMatchesSelector",O.pEventTypes=O.supportsPointerEvent?p.default.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,O.wheelEvent=p.default.document&&"onmousewheel"in p.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},B=O;P.default=B;var z={};function R(s){var c=s.parentNode;if(a.default.docFrag(c)){for(;(c=c.host)&&a.default.docFrag(c););return c}return c}function N(s,c){return i.window!==i.realWindow&&(c=c.replace(/\/deep\//g," ")),s[P.default.prefixedMatchesSelector](c)}Object.defineProperty(z,"__esModule",{value:!0}),z.closest=function(s,c){for(;a.default.element(s);){if(N(s,c))return s;s=R(s)}return null},z.getActualElement=function(s){return s.correspondingUseElement||s},z.getElementClientRect=te,z.getElementRect=function(s){var c=te(s);if(!P.default.isIOS7&&c){var u=$(i.getWindow(s));c.left+=u.x,c.right+=u.x,c.top+=u.y,c.bottom+=u.y}return c},z.getPath=function(s){for(var c=[];s;)c.push(s),s=R(s);return c},z.getScrollXY=$,z.indexOfDeepestElement=function(s){for(var c,u=[],f=0;f<s.length;f++){var y=s[f],x=s[c];if(y&&f!==c)if(x){var A=ae(y),S=ae(x);if(A!==y.ownerDocument)if(S!==y.ownerDocument)if(A!==S){u=u.length?u:fe(x);var C=void 0;if(x instanceof p.default.HTMLElement&&y instanceof p.default.SVGElement&&!(y instanceof p.default.SVGSVGElement)){if(y===S)continue;C=y.ownerSVGElement}else C=y;for(var I=fe(C,x.ownerDocument),k=0;I[k]&&I[k]===u[k];)k++;var V=[I[k-1],I[k],u[k]];if(V[0])for(var ee=V[0].lastChild;ee;){if(ee===V[1]){c=f,u=I;break}if(ee===V[2])break;ee=ee.previousSibling}}else ue=y,Z=x,(parseInt(i.getWindow(ue).getComputedStyle(ue).zIndex,10)||0)>=(parseInt(i.getWindow(Z).getComputedStyle(Z).zIndex,10)||0)&&(c=f);else c=f}else c=f}var ue,Z;return c},z.matchesSelector=N,z.matchesUpTo=function(s,c,u){for(;a.default.element(s);){if(N(s,c))return!0;if((s=R(s))===u)return N(s,c)}return!1},z.nodeContains=function(s,c){if(s.contains)return s.contains(c);for(;c;){if(c===s)return!0;c=c.parentNode}return!1},z.parentNode=R,z.trySelector=function(s){return!!a.default.string(s)&&(p.default.document.querySelector(s),!0)};var ae=function(s){return s.parentNode||s.host};function fe(s,c){for(var u,f=[],y=s;(u=ae(y))&&y!==c&&u!==y.ownerDocument;)f.unshift(y),y=u;return f}function $(s){return{x:(s=s||i.window).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop}}function te(s){var c=s instanceof p.default.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return c&&{left:c.left,right:c.right,top:c.top,bottom:c.bottom,width:c.width||c.right-c.left,height:c.height||c.bottom-c.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(s,c){for(var u in c)s[u]=c[u];return s};var ce={};function pe(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}function X(s,c,u){return s==="parent"?(0,z.parentNode)(u):s==="self"?c.getRect(u):(0,z.closest)(u,s)}Object.defineProperty(ce,"__esModule",{value:!0}),ce.addEdges=function(s,c,u){s.left&&(c.left+=u.x),s.right&&(c.right+=u.x),s.top&&(c.top+=u.y),s.bottom&&(c.bottom+=u.y),c.width=c.right-c.left,c.height=c.bottom-c.top},ce.getStringOptionResult=X,ce.rectToXY=function(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}},ce.resolveRectLike=function(s,c,u,f){var y,x=s;return a.default.string(x)?x=X(x,c,u):a.default.func(x)&&(x=x.apply(void 0,function(A){if(Array.isArray(A))return pe(A)}(y=f)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(y)||function(A,S){if(A){if(typeof A=="string")return pe(A,S);var C=Object.prototype.toString.call(A).slice(8,-1);return C==="Object"&&A.constructor&&(C=A.constructor.name),C==="Map"||C==="Set"?Array.from(A):C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)?pe(A,S):void 0}}(y)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),a.default.element(x)&&(x=(0,z.getElementRect)(x)),x},ce.tlbrToXywh=function(s){return!s||"x"in s&&"y"in s||((s=(0,j.default)({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s},ce.xywhToTlbr=function(s){return!s||"left"in s&&"top"in s||((s=(0,j.default)({},s)).left=s.x||0,s.top=s.y||0,s.right=s.right||s.left+s.width,s.bottom=s.bottom||s.top+s.height),s};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(s,c,u){var f=s.options[u],y=f&&f.origin||s.options.origin,x=(0,ce.resolveRectLike)(y,s,c,[s&&c]);return(0,ce.rectToXY)(x)||{x:0,y:0}};var ne={};function Te(s){return s.trim().split(/ +/)}Object.defineProperty(ne,"__esModule",{value:!0}),ne.default=function s(c,u,f){if(f=f||{},a.default.string(c)&&c.search(" ")!==-1&&(c=Te(c)),a.default.array(c))return c.reduce(function(C,I){return(0,j.default)(C,s(I,u,f))},f);if(a.default.object(c)&&(u=c,c=""),a.default.func(u))f[c]=f[c]||[],f[c].push(u);else if(a.default.array(u))for(var y=0;y<u.length;y++){var x;x=u[y],s(c,x,f)}else if(a.default.object(u))for(var A in u){var S=Te(A).map(function(C){return"".concat(c).concat(C)});s(S,u[A],f)}return f};var ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=void 0,ve.default=function(s,c){return Math.sqrt(s*s+c*c)};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=function(s,c){s.__set||(s.__set={});var u=function(y){typeof s[y]!="function"&&y!=="__set"&&Object.defineProperty(s,y,{get:function(){return y in s.__set?s.__set[y]:s.__set[y]=c[y]},set:function(x){s.__set[y]=x},configurable:!0})};for(var f in c)u(f);return s};var q={};function Ee(s){return s instanceof p.default.Event||s instanceof p.default.Touch}function we(s,c,u){return s=s||"page",(u=u||{}).x=c[s+"X"],u.y=c[s+"Y"],u}function H(s,c){return c=c||{x:0,y:0},P.default.isOperaMobile&&Ee(s)?(we("screen",s,c),c.x+=window.scrollX,c.y+=window.scrollY):we("page",s,c),c}function Ze(s,c){return c=c||{},P.default.isOperaMobile&&Ee(s)?we("screen",s,c):we("client",s,c),c}function He(s){var c=[];return a.default.array(s)?(c[0]=s[0],c[1]=s[1]):s.type==="touchend"?s.touches.length===1?(c[0]=s.touches[0],c[1]=s.changedTouches[0]):s.touches.length===0&&(c[0]=s.changedTouches[0],c[1]=s.changedTouches[1]):(c[0]=s.touches[0],c[1]=s.touches[1]),c}function be(s){for(var c={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},u=0;u<s.length;u++){var f=s[u];for(var y in c)c[y]+=f[y]}for(var x in c)c[x]/=s.length;return c}Object.defineProperty(q,"__esModule",{value:!0}),q.coordsToEvent=function(s){return{coords:s,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},q.copyCoords=function(s,c){s.page=s.page||{},s.page.x=c.page.x,s.page.y=c.page.y,s.client=s.client||{},s.client.x=c.client.x,s.client.y=c.client.y,s.timeStamp=c.timeStamp},q.getClientXY=Ze,q.getEventTargets=function(s){var c=a.default.func(s.composedPath)?s.composedPath():s.path;return[z.getActualElement(c?c[0]:s.target),z.getActualElement(s.currentTarget)]},q.getPageXY=H,q.getPointerId=function(s){return a.default.number(s.pointerId)?s.pointerId:s.identifier},q.getPointerType=function(s){return a.default.string(s.pointerType)?s.pointerType:a.default.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof p.default.Touch?"touch":"mouse"},q.getTouchPair=He,q.getXY=we,q.isNativePointer=Ee,q.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},q.pointerAverage=be,Object.defineProperty(q,"pointerExtend",{enumerable:!0,get:function(){return oe.default}}),q.setCoordDeltas=function(s,c,u){s.page.x=u.page.x-c.page.x,s.page.y=u.page.y-c.page.y,s.client.x=u.client.x-c.client.x,s.client.y=u.client.y-c.client.y,s.timeStamp=u.timeStamp-c.timeStamp},q.setCoordVelocity=function(s,c){var u=Math.max(c.timeStamp/1e3,.001);s.page.x=c.page.x/u,s.page.y=c.page.y/u,s.client.x=c.client.x/u,s.client.y=c.client.y/u,s.timeStamp=u},q.setCoords=function(s,c,u){var f=c.length>1?be(c):c[0];H(f,s.page),Ze(f,s.client),s.timeStamp=u},q.setZeroCoords=function(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0},q.touchAngle=function(s,c){var u=c+"X",f=c+"Y",y=He(s),x=y[1][u]-y[0][u],A=y[1][f]-y[0][f];return 180*Math.atan2(A,x)/Math.PI},q.touchBBox=function(s){if(!s.length)return null;var c=He(s),u=Math.min(c[0].pageX,c[1].pageX),f=Math.min(c[0].pageY,c[1].pageY),y=Math.max(c[0].pageX,c[1].pageX),x=Math.max(c[0].pageY,c[1].pageY);return{x:u,y:f,left:u,top:f,right:y,bottom:x,width:y-u,height:x-f}},q.touchDistance=function(s,c){var u=c+"X",f=c+"Y",y=He(s),x=y[0][u]-y[1][u],A=y[0][f]-y[1][f];return(0,ve.default)(x,A)};var Ge={};function ht(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Be(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Ge,"__esModule",{value:!0}),Ge.BaseEvent=void 0;var Qe=function(){function s(f){(function(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),Be(this,"immediatePropagationStopped",!1),Be(this,"propagationStopped",!1),this._interaction=f}var c,u;return c=s,(u=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&ht(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();Ge.BaseEvent=Qe,Object.defineProperty(Qe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.remove=Ye.merge=Ye.from=Ye.findIndex=Ye.find=Ye.contains=void 0,Ye.contains=function(s,c){return s.indexOf(c)!==-1},Ye.remove=function(s,c){return s.splice(s.indexOf(c),1)};var Tt=function(s,c){for(var u=0;u<c.length;u++){var f=c[u];s.push(f)}return s};Ye.merge=Tt,Ye.from=function(s){return Tt([],s)};var Ot=function(s,c){for(var u=0;u<s.length;u++)if(c(s[u],u,s))return u;return-1};Ye.findIndex=Ot,Ye.find=function(s,c){return s[Ot(s,c)]};var gt={};function lt(s){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},lt(s)}function Mt(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function jt(s,c){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},jt(s,c)}function F(s,c){if(c&&(lt(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D(s)}function D(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function se(s){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},se(s)}function me(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(gt,"__esModule",{value:!0}),gt.DropEvent=void 0;var xe=function(s){(function(S,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(C&&C.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),C&&jt(S,C)})(A,s);var c,u,f,y,x=(f=A,y=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,C=se(f);if(y){var I=se(this).constructor;S=Reflect.construct(C,arguments,I)}else S=C.apply(this,arguments);return F(this,S)});function A(S,C,I){var k;(function(Z,ye){if(!(Z instanceof ye))throw new TypeError("Cannot call a class as a function")})(this,A),me(D(k=x.call(this,C._interaction)),"dropzone",void 0),me(D(k),"dragEvent",void 0),me(D(k),"relatedTarget",void 0),me(D(k),"draggable",void 0),me(D(k),"propagationStopped",!1),me(D(k),"immediatePropagationStopped",!1);var V=I==="dragleave"?S.prev:S.cur,ee=V.element,ue=V.dropzone;return k.type=I,k.target=ee,k.currentTarget=ee,k.dropzone=ue,k.dragEvent=C,k.relatedTarget=C.target,k.draggable=C.interactable,k.timeStamp=C.timeStamp,k}return c=A,(u=[{key:"reject",value:function(){var S=this,C=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&C.cur.dropzone===this.dropzone&&C.cur.element===this.target)if(C.prev.dropzone=this.dropzone,C.prev.element=this.target,C.rejected=!0,C.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var I=C.activeDrops,k=Ye.findIndex(I,function(ee){var ue=ee.dropzone,Z=ee.element;return ue===S.dropzone&&Z===S.target});C.activeDrops.splice(k,1);var V=new A(C,this.dragEvent,"dropdeactivate");V.dropzone=this.dropzone,V.target=this.target,this.dropzone.fire(V)}else this.dropzone.fire(new A(C,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Mt(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),A}(Ge.BaseEvent);gt.DropEvent=xe;var Ce={};function G(s,c){for(var u=0;u<s.slice().length;u++){var f=s.slice()[u],y=f.dropzone,x=f.element;c.dropzone=y,c.target=x,y.fire(c),c.propagationStopped=c.immediatePropagationStopped=!1}}function he(s,c){for(var u=function(x,A){for(var S=x.interactables,C=[],I=0;I<S.list.length;I++){var k=S.list[I];if(k.options.drop.enabled){var V=k.options.drop.accept;if(!(a.default.element(V)&&V!==A||a.default.string(V)&&!z.matchesSelector(A,V)||a.default.func(V)&&!V({dropzone:k,draggableElement:A})))for(var ee=a.default.string(k.target)?k._context.querySelectorAll(k.target):a.default.array(k.target)?k.target:[k.target],ue=0;ue<ee.length;ue++){var Z=ee[ue];Z!==A&&C.push({dropzone:k,element:Z,rect:k.getRect(Z)})}}}return C}(s,c),f=0;f<u.length;f++){var y=u[f];y.rect=y.dropzone.getRect(y.element)}return u}function ie(s,c,u){for(var f=s.dropState,y=s.interactable,x=s.element,A=[],S=0;S<f.activeDrops.length;S++){var C=f.activeDrops[S],I=C.dropzone,k=C.element,V=C.rect;A.push(I.dropCheck(c,u,y,x,k,V)?k:null)}var ee=z.indexOfDeepestElement(A);return f.activeDrops[ee]||null}function Ae(s,c,u){var f=s.dropState,y={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return u.type==="dragstart"&&(y.activate=new gt.DropEvent(f,u,"dropactivate"),y.activate.target=null,y.activate.dropzone=null),u.type==="dragend"&&(y.deactivate=new gt.DropEvent(f,u,"dropdeactivate"),y.deactivate.target=null,y.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(y.leave=new gt.DropEvent(f,u,"dragleave"),u.dragLeave=y.leave.target=f.prev.element,u.prevDropzone=y.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(y.enter=new gt.DropEvent(f,u,"dragenter"),u.dragEnter=f.cur.element,u.dropzone=f.cur.dropzone)),u.type==="dragend"&&f.cur.dropzone&&(y.drop=new gt.DropEvent(f,u,"drop"),u.dropzone=f.cur.dropzone,u.relatedTarget=f.cur.element),u.type==="dragmove"&&f.cur.dropzone&&(y.move=new gt.DropEvent(f,u,"dropmove"),y.move.dragmove=u,u.dropzone=f.cur.dropzone)),y}function Ie(s,c){var u=s.dropState,f=u.activeDrops,y=u.cur,x=u.prev;c.leave&&x.dropzone.fire(c.leave),c.enter&&y.dropzone.fire(c.enter),c.move&&y.dropzone.fire(c.move),c.drop&&y.dropzone.fire(c.drop),c.deactivate&&G(f,c.deactivate),u.prev.dropzone=y.dropzone,u.prev.element=y.element}function ze(s,c){var u=s.interaction,f=s.iEvent,y=s.event;if(f.type==="dragmove"||f.type==="dragend"){var x=u.dropState;c.dynamicDrop&&(x.activeDrops=he(c,u.element));var A=f,S=ie(u,A,y);x.rejected=x.rejected&&!!S&&S.dropzone===x.cur.dropzone&&S.element===x.cur.element,x.cur.dropzone=S&&S.dropzone,x.cur.element=S&&S.element,x.events=Ae(u,0,A)}}Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.default=void 0;var De={id:"actions/drop",install:function(s){var c=s.actions,u=s.interactStatic,f=s.Interactable,y=s.defaults;s.usePlugin(v.default),f.prototype.dropzone=function(x){return function(A,S){if(a.default.object(S)){if(A.options.drop.enabled=S.enabled!==!1,S.listeners){var C=(0,ne.default)(S.listeners),I=Object.keys(C).reduce(function(k,V){return k[/^(enter|leave)/.test(V)?"drag".concat(V):/^(activate|deactivate|move)/.test(V)?"drop".concat(V):V]=C[V],k},{});A.off(A.options.drop.listeners),A.on(I),A.options.drop.listeners=I}return a.default.func(S.ondrop)&&A.on("drop",S.ondrop),a.default.func(S.ondropactivate)&&A.on("dropactivate",S.ondropactivate),a.default.func(S.ondropdeactivate)&&A.on("dropdeactivate",S.ondropdeactivate),a.default.func(S.ondragenter)&&A.on("dragenter",S.ondragenter),a.default.func(S.ondragleave)&&A.on("dragleave",S.ondragleave),a.default.func(S.ondropmove)&&A.on("dropmove",S.ondropmove),/^(pointer|center)$/.test(S.overlap)?A.options.drop.overlap=S.overlap:a.default.number(S.overlap)&&(A.options.drop.overlap=Math.max(Math.min(1,S.overlap),0)),"accept"in S&&(A.options.drop.accept=S.accept),"checker"in S&&(A.options.drop.checker=S.checker),A}return a.default.bool(S)?(A.options.drop.enabled=S,A):A.options.drop}(this,x)},f.prototype.dropCheck=function(x,A,S,C,I,k){return function(V,ee,ue,Z,ye,Pe,_e){var ke=!1;if(!(_e=_e||V.getRect(Pe)))return!!V.options.drop.checker&&V.options.drop.checker(ee,ue,ke,V,Pe,Z,ye);var Xe=V.options.drop.overlap;if(Xe==="pointer"){var it=(0,J.default)(Z,ye,"drag"),_t=q.getPageXY(ee);_t.x+=it.x,_t.y+=it.y;var bt=_t.x>_e.left&&_t.x<_e.right,ut=_t.y>_e.top&&_t.y<_e.bottom;ke=bt&&ut}var wt=Z.getRect(ye);if(wt&&Xe==="center"){var oi=wt.left+wt.width/2,$i=wt.top+wt.height/2;ke=oi>=_e.left&&oi<=_e.right&&$i>=_e.top&&$i<=_e.bottom}return wt&&a.default.number(Xe)&&(ke=Math.max(0,Math.min(_e.right,wt.right)-Math.max(_e.left,wt.left))*Math.max(0,Math.min(_e.bottom,wt.bottom)-Math.max(_e.top,wt.top))/(wt.width*wt.height)>=Xe),V.options.drop.checker&&(ke=V.options.drop.checker(ee,ue,ke,V,Pe,Z,ye)),ke}(this,x,A,S,C,I,k)},u.dynamicDrop=function(x){return a.default.bool(x)?(s.dynamicDrop=x,u):s.dynamicDrop},(0,j.default)(c.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),c.methodDict.drop="dropzone",s.dynamicDrop=!1,y.actions.drop=De.defaults},listeners:{"interactions:before-action-start":function(s){var c=s.interaction;c.prepared.name==="drag"&&(c.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,c){var u=s.interaction,f=(s.event,s.iEvent);if(u.prepared.name==="drag"){var y=u.dropState;y.activeDrops=null,y.events=null,y.activeDrops=he(c,u.element),y.events=Ae(u,0,f),y.events.activate&&(G(y.activeDrops,y.events.activate),c.fire("actions/drop:start",{interaction:u,dragEvent:f}))}},"interactions:action-move":ze,"interactions:after-action-move":function(s,c){var u=s.interaction,f=s.iEvent;u.prepared.name==="drag"&&(Ie(u,u.dropState.events),c.fire("actions/drop:move",{interaction:u,dragEvent:f}),u.dropState.events={})},"interactions:action-end":function(s,c){if(s.interaction.prepared.name==="drag"){var u=s.interaction,f=s.iEvent;ze(s,c),Ie(u,u.dropState.events),c.fire("actions/drop:end",{interaction:u,dragEvent:f})}},"interactions:stop":function(s){var c=s.interaction;if(c.prepared.name==="drag"){var u=c.dropState;u&&(u.activeDrops=null,u.events=null,u.cur.dropzone=null,u.cur.element=null,u.prev.dropzone=null,u.prev.element=null,u.rejected=!1)}}},getActiveDrops:he,getDrop:ie,getDropEvents:Ae,fireDropEvents:Ie,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Fe=De;Ce.default=Fe;var qe={};function Je(s){var c=s.interaction,u=s.iEvent,f=s.phase;if(c.prepared.name==="gesture"){var y=c.pointers.map(function(I){return I.pointer}),x=f==="start",A=f==="end",S=c.interactable.options.deltaSource;if(u.touches=[y[0],y[1]],x)u.distance=q.touchDistance(y,S),u.box=q.touchBBox(y),u.scale=1,u.ds=0,u.angle=q.touchAngle(y,S),u.da=0,c.gesture.startDistance=u.distance,c.gesture.startAngle=u.angle;else if(A){var C=c.prevEvent;u.distance=C.distance,u.box=C.box,u.scale=C.scale,u.ds=0,u.angle=C.angle,u.da=0}else u.distance=q.touchDistance(y,S),u.box=q.touchBBox(y),u.scale=u.distance/c.gesture.startDistance,u.angle=q.touchAngle(y,S),u.ds=u.scale-c.gesture.scale,u.da=u.angle-c.gesture.angle;c.gesture.distance=u.distance,c.gesture.angle=u.angle,a.default.number(u.scale)&&u.scale!==1/0&&!isNaN(u.scale)&&(c.gesture.scale=u.scale)}}Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=void 0;var At={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var c=s.actions,u=s.Interactable,f=s.defaults;u.prototype.gesturable=function(y){return a.default.object(y)?(this.options.gesture.enabled=y.enabled!==!1,this.setPerAction("gesture",y),this.setOnEvents("gesture",y),this):a.default.bool(y)?(this.options.gesture.enabled=y,this):this.options.gesture},c.map.gesture=At,c.methodDict.gesture="gesturable",f.actions.gesture=At.defaults},listeners:{"interactions:action-start":Je,"interactions:action-move":Je,"interactions:action-end":Je,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var c=s.interactable.options.gesture;if(c&&c.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},W=At;qe.default=W;var le={};function ge(s,c,u,f,y,x,A){if(!c)return!1;if(c===!0){var S=a.default.number(x.width)?x.width:x.right-x.left,C=a.default.number(x.height)?x.height:x.bottom-x.top;if(A=Math.min(A,Math.abs((s==="left"||s==="right"?S:C)/2)),S<0&&(s==="left"?s="right":s==="right"&&(s="left")),C<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var I=S>=0?x.left:x.right;return u.x<I+A}if(s==="top"){var k=C>=0?x.top:x.bottom;return u.y<k+A}if(s==="right")return u.x>(S>=0?x.right:x.left)-A;if(s==="bottom")return u.y>(C>=0?x.bottom:x.top)-A}return!!a.default.element(f)&&(a.default.element(c)?c===f:z.matchesUpTo(f,c,y))}function Le(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="resize"&&u.resizeAxes){var f=c;u.interactable.options.resize.square?(u.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=u.resizeAxes,u.resizeAxes==="x"?f.delta.y=0:u.resizeAxes==="y"&&(f.delta.x=0))}}Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;var Ue={id:"actions/resize",before:["actions/drag"],install:function(s){var c=s.actions,u=s.browser,f=s.Interactable,y=s.defaults;Ue.cursors=function(x){return x.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(u),Ue.defaultMargin=u.supportsTouch||u.supportsPointerEvent?20:10,f.prototype.resizable=function(x){return function(A,S,C){return a.default.object(S)?(A.options.resize.enabled=S.enabled!==!1,A.setPerAction("resize",S),A.setOnEvents("resize",S),a.default.string(S.axis)&&/^x$|^y$|^xy$/.test(S.axis)?A.options.resize.axis=S.axis:S.axis===null&&(A.options.resize.axis=C.defaults.actions.resize.axis),a.default.bool(S.preserveAspectRatio)?A.options.resize.preserveAspectRatio=S.preserveAspectRatio:a.default.bool(S.square)&&(A.options.resize.square=S.square),A):a.default.bool(S)?(A.options.resize.enabled=S,A):A.options.resize}(this,x,s)},c.map.resize=Ue,c.methodDict.resize="resizable",y.actions.resize=Ue.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(c){var u=c.iEvent,f=c.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var y=u,x=f.rect;f._rects={start:(0,j.default)({},x),corrected:(0,j.default)({},x),previous:(0,j.default)({},x),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},y.edges=f.prepared.edges,y.rect=f._rects.corrected,y.deltaRect=f._rects.delta}})(s),Le(s)},"interactions:action-move":function(s){(function(c){var u=c.iEvent,f=c.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var y=u,x=f.interactable.options.resize.invert,A=x==="reposition"||x==="negate",S=f.rect,C=f._rects,I=C.start,k=C.corrected,V=C.delta,ee=C.previous;if((0,j.default)(ee,k),A){if((0,j.default)(k,S),x==="reposition"){if(k.top>k.bottom){var ue=k.top;k.top=k.bottom,k.bottom=ue}if(k.left>k.right){var Z=k.left;k.left=k.right,k.right=Z}}}else k.top=Math.min(S.top,I.bottom),k.bottom=Math.max(S.bottom,I.top),k.left=Math.min(S.left,I.right),k.right=Math.max(S.right,I.left);for(var ye in k.width=k.right-k.left,k.height=k.bottom-k.top,k)V[ye]=k[ye]-ee[ye];y.edges=f.prepared.edges,y.rect=k,y.deltaRect=V}})(s),Le(s)},"interactions:action-end":function(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c;f.edges=u.prepared.edges,f.rect=u._rects.corrected,f.deltaRect=u._rects.delta}},"auto-start:check":function(s){var c=s.interaction,u=s.interactable,f=s.element,y=s.rect,x=s.buttons;if(y){var A=(0,j.default)({},c.coords.cur.page),S=u.options.resize;if(S&&S.enabled&&(!c.pointerIsDown||!/mouse|pointer/.test(c.pointerType)||x&S.mouseButtons)){if(a.default.object(S.edges)){var C={left:!1,right:!1,top:!1,bottom:!1};for(var I in C)C[I]=ge(I,S.edges[I],A,c._latestPointer.eventTarget,f,y,S.margin||Ue.defaultMargin);C.left=C.left&&!C.right,C.top=C.top&&!C.bottom,(C.left||C.right||C.top||C.bottom)&&(s.action={name:"resize",edges:C})}else{var k=S.axis!=="y"&&A.x>y.right-Ue.defaultMargin,V=S.axis!=="x"&&A.y>y.bottom-Ue.defaultMargin;(k||V)&&(s.action={name:"resize",axes:(k?"x":"")+(V?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var c=s.edges,u=s.axis,f=s.name,y=Ue.cursors,x=null;if(u)x=y[f+u];else if(c){for(var A="",S=["top","bottom","left","right"],C=0;C<S.length;C++){var I=S[C];c[I]&&(A+=I)}x=y[A]}return x},defaultMargin:null},xt=Ue;le.default=xt;var pt={};Object.defineProperty(pt,"__esModule",{value:!0}),pt.default=void 0;var on={id:"actions",install:function(s){s.usePlugin(qe.default),s.usePlugin(le.default),s.usePlugin(v.default),s.usePlugin(Ce.default)}};pt.default=on;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var yt,Yt,Xn=0,No={request:function(s){return yt(s)},cancel:function(s){return Yt(s)},init:function(s){if(yt=s.requestAnimationFrame,Yt=s.cancelAnimationFrame,!yt)for(var c=["ms","moz","webkit","o"],u=0;u<c.length;u++){var f=c[u];yt=s["".concat(f,"RequestAnimationFrame")],Yt=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}yt=yt&&yt.bind(s),Yt=Yt&&Yt.bind(s),yt||(yt=function(y){var x=Date.now(),A=Math.max(0,16-(x-Xn)),S=s.setTimeout(function(){y(x+A)},A);return Xn=x+A,S},Yt=function(y){return clearTimeout(y)})}};Xt.default=No;var ni={};Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=void 0,ni.getContainer=Fo,ni.getScroll=qr,ni.getScrollSize=function(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollWidth,y:s.scrollHeight}},ni.getScrollSizeDelta=function(s,c){var u=s.interaction,f=s.element,y=u&&u.interactable.options[u.prepared.name].autoScroll;if(!y||!y.enabled)return c(),{x:0,y:0};var x=Fo(y.container,u.interactable,f),A=qr(x);c();var S=qr(x);return{x:S.x-A.x,y:S.y-A.y}};var $e={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){$e.isScrolling=!0,Xt.default.cancel($e.i),s.autoScroll=$e,$e.interaction=s,$e.prevTime=$e.now(),$e.i=Xt.default.request($e.scroll)},stop:function(){$e.isScrolling=!1,$e.interaction&&($e.interaction.autoScroll=null),Xt.default.cancel($e.i)},scroll:function(){var s=$e.interaction,c=s.interactable,u=s.element,f=s.prepared.name,y=c.options[f].autoScroll,x=Fo(y.container,c,u),A=$e.now(),S=(A-$e.prevTime)/1e3,C=y.speed*S;if(C>=1){var I={x:$e.x*C,y:$e.y*C};if(I.x||I.y){var k=qr(x);a.default.window(x)?x.scrollBy(I.x,I.y):x&&(x.scrollLeft+=I.x,x.scrollTop+=I.y);var V=qr(x),ee={x:V.x-k.x,y:V.y-k.y};(ee.x||ee.y)&&c.fire({type:"autoscroll",target:u,interactable:c,delta:ee,interaction:s,container:x})}$e.prevTime=A}$e.isScrolling&&(Xt.default.cancel($e.i),$e.i=Xt.default.request($e.scroll))},check:function(s,c){var u;return(u=s.options[c].autoScroll)==null?void 0:u.enabled},onInteractionMove:function(s){var c=s.interaction,u=s.pointer;if(c.interacting()&&$e.check(c.interactable,c.prepared.name))if(c.simulation)$e.x=$e.y=0;else{var f,y,x,A,S=c.interactable,C=c.element,I=c.prepared.name,k=S.options[I].autoScroll,V=Fo(k.container,S,C);if(a.default.window(V))A=u.clientX<$e.margin,f=u.clientY<$e.margin,y=u.clientX>V.innerWidth-$e.margin,x=u.clientY>V.innerHeight-$e.margin;else{var ee=z.getElementClientRect(V);A=u.clientX<ee.left+$e.margin,f=u.clientY<ee.top+$e.margin,y=u.clientX>ee.right-$e.margin,x=u.clientY>ee.bottom-$e.margin}$e.x=y?1:A?-1:0,$e.y=x?1:f?-1:0,$e.isScrolling||($e.margin=k.margin,$e.speed=k.speed,$e.start(c))}}};function Fo(s,c,u){return(a.default.string(s)?(0,ce.getStringOptionResult)(s,c,u):s)||(0,i.getWindow)(u)}function qr(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var U={id:"auto-scroll",install:function(s){var c=s.defaults,u=s.actions;s.autoScroll=$e,$e.now=function(){return s.now()},u.phaselessTypes.autoscroll=!0,c.perAction.autoScroll=$e.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,$e.stop(),$e.interaction&&($e.interaction=null)},"interactions:stop":$e.stop,"interactions:action-move":function(s){return $e.onInteractionMove(s)}}},Q=U;ni.default=Q;var re={};Object.defineProperty(re,"__esModule",{value:!0}),re.copyAction=function(s,c){return s.name=c.name,s.axis=c.axis,s.edges=c.edges,s},re.sign=void 0,re.warnOnce=function(s,c){var u=!1;return function(){return u||(i.window.console.warn(c),u=!0),s.apply(this,arguments)}},re.sign=function(s){return s>=0?1:-1};var K={};function de(s){return a.default.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ve(s){return a.default.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;var We={id:"auto-start/interactableMethods",install:function(s){var c=s.Interactable;c.prototype.getAction=function(u,f,y,x){var A=function(S,C,I,k,V){var ee=S.getRect(k),ue={action:null,interactable:S,interaction:I,element:k,rect:ee,buttons:C.buttons||{0:1,1:4,3:8,4:16}[C.button]};return V.fire("auto-start:check",ue),ue.action}(this,f,y,x,s);return this.options.actionChecker?this.options.actionChecker(u,f,A,this,x,y):A},c.prototype.ignoreFrom=(0,re.warnOnce)(function(u){return this._backCompatOption("ignoreFrom",u)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),c.prototype.allowFrom=(0,re.warnOnce)(function(u){return this._backCompatOption("allowFrom",u)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),c.prototype.actionChecker=Ve,c.prototype.styleCursor=de}};K.default=We;var je={};function et(s,c,u,f,y){return c.testIgnoreAllow(c.options[s.name],u,f)&&c.options[s.name].enabled&&mt(c,u,s,y)?s:null}function ot(s,c,u,f,y,x,A){for(var S=0,C=f.length;S<C;S++){var I=f[S],k=y[S],V=I.getAction(c,u,s,k);if(V){var ee=et(V,I,k,x,A);if(ee)return{action:ee,interactable:I,element:k}}}return{action:null,interactable:null,element:null}}function rt(s,c,u,f,y){var x=[],A=[],S=f;function C(k){x.push(k),A.push(S)}for(;a.default.element(S);){x=[],A=[],y.interactables.forEachMatch(S,C);var I=ot(s,c,u,x,A,f,y);if(I.action&&!I.interactable.options[I.action.name].manualStart)return I;S=z.parentNode(S)}return{action:null,interactable:null,element:null}}function st(s,c,u){var f=c.action,y=c.interactable,x=c.element;f=f||{name:null},s.interactable=y,s.element=x,(0,re.copyAction)(s.prepared,f),s.rect=y&&f.name?y.getRect(x):null,Ii(s,u),u.fire("autoStart:prepared",{interaction:s})}function mt(s,c,u,f){var y=s.options,x=y[u.name].max,A=y[u.name].maxPerElement,S=f.autoStart.maxInteractions,C=0,I=0,k=0;if(!(x&&A&&S))return!1;for(var V=0;V<f.interactions.list.length;V++){var ee=f.interactions.list[V],ue=ee.prepared.name;if(ee.interacting()&&(++C>=S||ee.interactable===s&&((I+=ue===u.name?1:0)>=x||ee.element===c&&(k++,ue===u.name&&k>=A))))return!1}return S>0}function sn(s,c){return a.default.number(s)?(c.autoStart.maxInteractions=s,this):c.autoStart.maxInteractions}function Cn(s,c,u){var f=u.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=c,s.style.cursor=c,u.autoStart.cursorElement=c?s:null}function Ii(s,c){var u=s.interactable,f=s.element,y=s.prepared;if(s.pointerType==="mouse"&&u&&u.options.styleCursor){var x="";if(y.name){var A=u.options[y.name].cursorChecker;x=a.default.func(A)?A(y,u,f,s._interacting):c.actions.map[y.name].getCursor(y)}Cn(s.element,x||"",c)}else c.autoStart.cursorElement&&Cn(c.autoStart.cursorElement,"",c)}Object.defineProperty(je,"__esModule",{value:!0}),je.default=void 0;var Bt={id:"auto-start/base",before:["actions"],install:function(s){var c=s.interactStatic,u=s.defaults;s.usePlugin(K.default),u.base.actionChecker=null,u.base.styleCursor=!0,(0,j.default)(u.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),c.maxInteractions=function(f){return sn(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:mt,cursorElement:null}},listeners:{"interactions:down":function(s,c){var u=s.interaction,f=s.pointer,y=s.event,x=s.eventTarget;u.interacting()||st(u,rt(u,f,y,x,c),c)},"interactions:move":function(s,c){(function(u,f){var y=u.interaction,x=u.pointer,A=u.event,S=u.eventTarget;y.pointerType!=="mouse"||y.pointerIsDown||y.interacting()||st(y,rt(y,x,A,S,f),f)})(s,c),function(u,f){var y=u.interaction;if(y.pointerIsDown&&!y.interacting()&&y.pointerWasMoved&&y.prepared.name){f.fire("autoStart:before-start",u);var x=y.interactable,A=y.prepared.name;A&&x&&(x.options[A].manualStart||!mt(x,y.element,y.prepared,f)?y.stop():(y.start(y.prepared,x,y.element),Ii(y,f)))}}(s,c)},"interactions:stop":function(s,c){var u=s.interaction,f=u.interactable;f&&f.options.styleCursor&&Cn(u.element,"",c)}},maxInteractions:sn,withinInteractionLimit:mt,validateAction:et},ct=Bt;je.default=ct;var vr={};Object.defineProperty(vr,"__esModule",{value:!0}),vr.default=void 0;var qt={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,c){var u=s.interaction,f=s.eventTarget,y=s.dx,x=s.dy;if(u.prepared.name==="drag"){var A=Math.abs(y),S=Math.abs(x),C=u.interactable.options.drag,I=C.startAxis,k=A>S?"x":A<S?"y":"xy";if(u.prepared.axis=C.lockAxis==="start"?k[0]:C.lockAxis,k!=="xy"&&I!=="xy"&&I!==k){u.prepared.name=null;for(var V=f,ee=function(Z){if(Z!==u.interactable){var ye=u.interactable.options.drag;if(!ye.manualStart&&Z.testIgnoreAllow(ye,V,f)){var Pe=Z.getAction(u.downPointer,u.downEvent,u,V);if(Pe&&Pe.name==="drag"&&function(_e,ke){if(!ke)return!1;var Xe=ke.options.drag.startAxis;return _e==="xy"||Xe==="xy"||Xe===_e}(k,Z)&&je.default.validateAction(Pe,Z,V,f,c))return Z}}};a.default.element(V);){var ue=c.interactables.forEachMatch(V,ee);if(ue){u.prepared.name="drag",u.interactable=ue,u.element=V;break}V=(0,z.parentNode)(V)}}}}}};vr.default=qt;var ii={};function ko(s){var c=s.prepared&&s.prepared.name;if(!c)return null;var u=s.interactable.options;return u[c].hold||u[c].delay}Object.defineProperty(ii,"__esModule",{value:!0}),ii.default=void 0;var $r={id:"auto-start/hold",install:function(s){var c=s.defaults;s.usePlugin(je.default),c.perAction.hold=0,c.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var c=s.interaction,u=ko(c);u>0&&(c.autoStartHoldTimer=setTimeout(function(){c.start(c.prepared,c.interactable,c.element)},u))},"interactions:move":function(s){var c=s.interaction,u=s.duplicate;c.autoStartHoldTimer&&c.pointerWasMoved&&!u&&(clearTimeout(c.autoStartHoldTimer),c.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var c=s.interaction;ko(c)>0&&(c.prepared.name=null)}},getHoldDuration:ko},ta=$r;ii.default=ta;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.default=void 0;var Xi={id:"auto-start",install:function(s){s.usePlugin(je.default),s.usePlugin(ii.default),s.usePlugin(vr.default)}};Ht.default=Xi;var vi={};function An(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):a.default.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault}function na(s){var c=s.interaction,u=s.event;c.interactable&&c.interactable.checkAndPreventDefault(u)}function Al(s){var c=s.Interactable;c.prototype.preventDefault=An,c.prototype.checkAndPreventDefault=function(u){return function(f,y,x){var A=f.options.preventDefault;if(A!=="never")if(A!=="always"){if(y.events.supportsPassive&&/^touch(start|move)$/.test(x.type)){var S=(0,i.getWindow)(x.target).document,C=y.getDocOptions(S);if(!C||!C.events||C.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(x.type)||a.default.element(x.target)&&(0,z.matchesSelector)(x.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||x.preventDefault()}else x.preventDefault()}(this,s,u)},s.interactions.docEvents.push({type:"dragstart",listener:function(u){for(var f=0;f<s.interactions.list.length;f++){var y=s.interactions.list[f];if(y.element&&(y.element===u.target||(0,z.nodeContains)(y.element,u.target)))return void y.interactable.checkAndPreventDefault(u)}}})}Object.defineProperty(vi,"__esModule",{value:!0}),vi.default=void 0,vi.install=Al;var Pl={id:"core/interactablePreventDefault",install:Al,listeners:["down","move","up","cancel"].reduce(function(s,c){return s["interactions:".concat(c)]=na,s},{})};vi.default=Pl;var Ku={};Object.defineProperty(Ku,"__esModule",{value:!0}),Ku.default=void 0,Ku.default={};var ia,Rl={};Object.defineProperty(Rl,"__esModule",{value:!0}),Rl.default=void 0,function(s){s.touchAction="touchAction",s.boxSizing="boxSizing",s.noListeners="noListeners"}(ia||(ia={})),ia.touchAction,ia.boxSizing,ia.noListeners;var Mx={id:"dev-tools",install:function(){}};Rl.default=Mx;var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.default=function s(c){var u={};for(var f in c){var y=c[f];a.default.plainObject(y)?u[f]=s(y):a.default.array(y)?u[f]=Ye.from(y):u[f]=y}return u};var Zr={};function jp(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var y=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(y!=null){var x,A,S=[],C=!0,I=!1;try{for(y=y.call(u);!(C=(x=y.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||y.return==null||y.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return Xp(u,f);var y=Object.prototype.toString.call(u).slice(8,-1);return y==="Object"&&u.constructor&&(y=u.constructor.name),y==="Map"||y==="Set"?Array.from(u):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?Xp(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Xp(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}function Ex(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Qr(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.default=void 0,Zr.getRectOffset=Yp;var wx=function(){function s(f){(function(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),Qr(this,"states",[]),Qr(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Qr(this,"startDelta",void 0),Qr(this,"result",void 0),Qr(this,"endResult",void 0),Qr(this,"edges",void 0),Qr(this,"interaction",void 0),this.interaction=f,this.result=Dl()}var c,u;return c=s,(u=[{key:"start",value:function(f,y){var x=f.phase,A=this.interaction,S=function(I){var k=I.interactable.options[I.prepared.name],V=k.modifiers;return V&&V.length?V:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var ue=k[ee];return ue&&ue.enabled&&{options:ue,methods:ue._methods}}).filter(function(ee){return!!ee})}(A);this.prepareStates(S),this.edges=(0,j.default)({},A.edges),this.startOffset=Yp(A.rect,y),this.startDelta={x:0,y:0};var C=this.fillArg({phase:x,pageCoords:y,preEnd:!1});return this.result=Dl(),this.startAll(C),this.result=this.setAll(C)}},{key:"fillArg",value:function(f){var y=this.interaction;return f.interaction=y,f.interactable=y.interactable,f.element=y.element,f.rect=f.rect||y.rect,f.edges=this.edges,f.startOffset=this.startOffset,f}},{key:"startAll",value:function(f){for(var y=0;y<this.states.length;y++){var x=this.states[y];x.methods.start&&(f.state=x,x.methods.start(f))}}},{key:"setAll",value:function(f){var y=f.phase,x=f.preEnd,A=f.skipModifiers,S=f.rect;f.coords=(0,j.default)({},f.pageCoords),f.rect=(0,j.default)({},S);for(var C=A?this.states.slice(A):this.states,I=Dl(f.coords,f.rect),k=0;k<C.length;k++){var V,ee=C[k],ue=ee.options,Z=(0,j.default)({},f.coords),ye=null;(V=ee.methods)!=null&&V.set&&this.shouldDo(ue,x,y)&&(f.state=ee,ye=ee.methods.set(f),ce.addEdges(this.interaction.edges,f.rect,{x:f.coords.x-Z.x,y:f.coords.y-Z.y})),I.eventProps.push(ye)}I.delta.x=f.coords.x-f.pageCoords.x,I.delta.y=f.coords.y-f.pageCoords.y,I.rectDelta.left=f.rect.left-S.left,I.rectDelta.right=f.rect.right-S.right,I.rectDelta.top=f.rect.top-S.top,I.rectDelta.bottom=f.rect.bottom-S.bottom;var Pe=this.result.coords,_e=this.result.rect;if(Pe&&_e){var ke=I.rect.left!==_e.left||I.rect.right!==_e.right||I.rect.top!==_e.top||I.rect.bottom!==_e.bottom;I.changed=ke||Pe.x!==I.coords.x||Pe.y!==I.coords.y}return I}},{key:"applyToInteraction",value:function(f){var y=this.interaction,x=f.phase,A=y.coords.cur,S=y.coords.start,C=this.result,I=this.startDelta,k=C.delta;x==="start"&&(0,j.default)(this.startDelta,C.delta);for(var V=0;V<[[S,I],[A,k]].length;V++){var ee=jp([[S,I],[A,k]][V],2),ue=ee[0],Z=ee[1];ue.page.x+=Z.x,ue.page.y+=Z.y,ue.client.x+=Z.x,ue.client.y+=Z.y}var ye=this.result.rectDelta,Pe=f.rect||y.rect;Pe.left+=ye.left,Pe.right+=ye.right,Pe.top+=ye.top,Pe.bottom+=ye.bottom,Pe.width=Pe.right-Pe.left,Pe.height=Pe.bottom-Pe.top}},{key:"setAndApply",value:function(f){var y=this.interaction,x=f.phase,A=f.preEnd,S=f.skipModifiers,C=this.setAll(this.fillArg({preEnd:A,phase:x,pageCoords:f.modifiedCoords||y.coords.cur.page}));if(this.result=C,!C.changed&&(!S||S<this.states.length)&&y.interacting())return!1;if(f.modifiedCoords){var I=y.coords.cur.page,k={x:f.modifiedCoords.x-I.x,y:f.modifiedCoords.y-I.y};C.coords.x+=k.x,C.coords.y+=k.y,C.delta.x+=k.x,C.delta.y+=k.y}this.applyToInteraction(f)}},{key:"beforeEnd",value:function(f){var y=f.interaction,x=f.event,A=this.states;if(A&&A.length){for(var S=!1,C=0;C<A.length;C++){var I=A[C];f.state=I;var k=I.options,V=I.methods,ee=V.beforeEnd&&V.beforeEnd(f);if(ee)return this.endResult=ee,!1;S=S||!S&&this.shouldDo(k,!0,f.phase,!0)}S&&y.move({event:x,preEnd:!0})}}},{key:"stop",value:function(f){var y=f.interaction;if(this.states&&this.states.length){var x=(0,j.default)({states:this.states,interactable:y.interactable,element:y.element,rect:null},f);this.fillArg(x);for(var A=0;A<this.states.length;A++){var S=this.states[A];x.state=S,S.methods.stop&&S.methods.stop(x)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(f){this.states=[];for(var y=0;y<f.length;y++){var x=f[y],A=x.options,S=x.methods,C=x.name;this.states.push({options:A,methods:S,index:y,name:C})}return this.states}},{key:"restoreInteractionCoords",value:function(f){var y=f.interaction,x=y.coords,A=y.rect,S=y.modification;if(S.result){for(var C=S.startDelta,I=S.result,k=I.delta,V=I.rectDelta,ee=[[x.start,C],[x.cur,k]],ue=0;ue<ee.length;ue++){var Z=jp(ee[ue],2),ye=Z[0],Pe=Z[1];ye.page.x-=Pe.x,ye.page.y-=Pe.y,ye.client.x-=Pe.x,ye.client.y-=Pe.y}A.left-=V.left,A.right-=V.right,A.top-=V.top,A.bottom-=V.bottom}}},{key:"shouldDo",value:function(f,y,x,A){return!(!f||f.enabled===!1||A&&!f.endOnly||f.endOnly&&!y||x==="start"&&!f.setStart)}},{key:"copyFrom",value:function(f){this.startOffset=f.startOffset,this.startDelta=f.startDelta,this.edges=f.edges,this.states=f.states.map(function(y){return(0,Kr.default)(y)}),this.result=Dl((0,j.default)({},f.result.coords),(0,j.default)({},f.result.rect))}},{key:"destroy",value:function(){for(var f in this)this[f]=null}}])&&Ex(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();function Dl(s,c){return{rect:c,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Yp(s,c){return s?{left:c.x-s.left,top:c.y-s.top,right:s.right-c.x,bottom:s.bottom-c.y}:{left:0,top:0,right:0,bottom:0}}Zr.default=wx;var hn={};function Ll(s){var c=s.iEvent,u=s.interaction.modification.result;u&&(c.modifiers=u.eventProps)}Object.defineProperty(hn,"__esModule",{value:!0}),hn.addEventModifiers=Ll,hn.default=void 0,hn.makeModifier=function(s,c){var u=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},y=function(x){var A=x||{};for(var S in A.enabled=A.enabled!==!1,u)S in A||(A[S]=u[S]);var C={options:A,methods:f,name:c,enable:function(){return A.enabled=!0,C},disable:function(){return A.enabled=!1,C}};return C};return c&&typeof c=="string"&&(y._defaults=u,y._methods=f),y};var Tx={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var c=s.interaction;c.modification=new Zr.default(c)},"interactions:before-action-start":function(s){var c=s.interaction.modification;c.start(s,s.interaction.coords.start.page),s.interaction.edges=c.edges,c.applyToInteraction(s)},"interactions:before-action-move":function(s){return s.interaction.modification.setAndApply(s)},"interactions:before-action-end":function(s){return s.interaction.modification.beforeEnd(s)},"interactions:action-start":Ll,"interactions:action-move":Ll,"interactions:action-end":Ll,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},bx=Tx;hn.default=bx;var ra={};Object.defineProperty(ra,"__esModule",{value:!0}),ra.defaults=void 0,ra.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var oa={};function Zu(s){return Zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Zu(s)}function Cx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Qu(s,c){return Qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},Qu(s,c)}function Ax(s,c){if(c&&(Zu(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Et(s)}function Et(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Il(s){return Il=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},Il(s)}function Pt(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(oa,"__esModule",{value:!0}),oa.InteractEvent=void 0;var qp=function(s){(function(S,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(C&&C.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),C&&Qu(S,C)})(A,s);var c,u,f,y,x=(f=A,y=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,C=Il(f);if(y){var I=Il(this).constructor;S=Reflect.construct(C,arguments,I)}else S=C.apply(this,arguments);return Ax(this,S)});function A(S,C,I,k,V,ee,ue){var Z;(function(bt,ut){if(!(bt instanceof ut))throw new TypeError("Cannot call a class as a function")})(this,A),Pt(Et(Z=x.call(this,S)),"relatedTarget",null),Pt(Et(Z),"screenX",void 0),Pt(Et(Z),"screenY",void 0),Pt(Et(Z),"button",void 0),Pt(Et(Z),"buttons",void 0),Pt(Et(Z),"ctrlKey",void 0),Pt(Et(Z),"shiftKey",void 0),Pt(Et(Z),"altKey",void 0),Pt(Et(Z),"metaKey",void 0),Pt(Et(Z),"page",void 0),Pt(Et(Z),"client",void 0),Pt(Et(Z),"delta",void 0),Pt(Et(Z),"rect",void 0),Pt(Et(Z),"x0",void 0),Pt(Et(Z),"y0",void 0),Pt(Et(Z),"t0",void 0),Pt(Et(Z),"dt",void 0),Pt(Et(Z),"duration",void 0),Pt(Et(Z),"clientX0",void 0),Pt(Et(Z),"clientY0",void 0),Pt(Et(Z),"velocity",void 0),Pt(Et(Z),"speed",void 0),Pt(Et(Z),"swipe",void 0),Pt(Et(Z),"axes",void 0),Pt(Et(Z),"preEnd",void 0),V=V||S.element;var ye=S.interactable,Pe=(ye&&ye.options||ra.defaults).deltaSource,_e=(0,J.default)(ye,V,I),ke=k==="start",Xe=k==="end",it=ke?Et(Z):S.prevEvent,_t=ke?S.coords.start:Xe?{page:it.page,client:it.client,timeStamp:S.coords.cur.timeStamp}:S.coords.cur;return Z.page=(0,j.default)({},_t.page),Z.client=(0,j.default)({},_t.client),Z.rect=(0,j.default)({},S.rect),Z.timeStamp=_t.timeStamp,Xe||(Z.page.x-=_e.x,Z.page.y-=_e.y,Z.client.x-=_e.x,Z.client.y-=_e.y),Z.ctrlKey=C.ctrlKey,Z.altKey=C.altKey,Z.shiftKey=C.shiftKey,Z.metaKey=C.metaKey,Z.button=C.button,Z.buttons=C.buttons,Z.target=V,Z.currentTarget=V,Z.preEnd=ee,Z.type=ue||I+(k||""),Z.interactable=ye,Z.t0=ke?S.pointers[S.pointers.length-1].downTime:it.t0,Z.x0=S.coords.start.page.x-_e.x,Z.y0=S.coords.start.page.y-_e.y,Z.clientX0=S.coords.start.client.x-_e.x,Z.clientY0=S.coords.start.client.y-_e.y,Z.delta=ke||Xe?{x:0,y:0}:{x:Z[Pe].x-it[Pe].x,y:Z[Pe].y-it[Pe].y},Z.dt=S.coords.delta.timeStamp,Z.duration=Z.timeStamp-Z.t0,Z.velocity=(0,j.default)({},S.coords.velocity[Pe]),Z.speed=(0,ve.default)(Z.velocity.x,Z.velocity.y),Z.swipe=Xe||k==="inertiastart"?Z.getSwipe():null,Z}return c=A,(u=[{key:"getSwipe",value:function(){var S=this._interaction;if(S.prevEvent.speed<600||this.timeStamp-S.prevEvent.timeStamp>150)return null;var C=180*Math.atan2(S.prevEvent.velocityY,S.prevEvent.velocityX)/Math.PI;C<0&&(C+=360);var I=112.5<=C&&C<247.5,k=202.5<=C&&C<337.5;return{up:k,down:!k&&22.5<=C&&C<157.5,left:I,right:!I&&(292.5<=C||C<67.5),angle:C,speed:S.prevEvent.speed,velocity:{x:S.prevEvent.velocityX,y:S.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Cx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),A}(Ge.BaseEvent);oa.InteractEvent=qp,Object.defineProperties(qp.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var sa={};function $p(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Px(s,c,u){return c&&$p(s.prototype,c),u&&$p(s,u),Object.defineProperty(s,"prototype",{writable:!1}),s}function aa(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(sa,"__esModule",{value:!0}),sa.PointerInfo=void 0;var Rx=Px(function s(c,u,f,y,x){(function(A,S){if(!(A instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),aa(this,"id",void 0),aa(this,"pointer",void 0),aa(this,"event",void 0),aa(this,"downTime",void 0),aa(this,"downTarget",void 0),this.id=c,this.pointer=u,this.event=f,this.downTime=y,this.downTarget=x});sa.PointerInfo=Rx;var Ul,Ol,Fn={};function Dx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Nt(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.Interaction=void 0,Object.defineProperty(Fn,"PointerInfo",{enumerable:!0,get:function(){return sa.PointerInfo}}),Fn.default=Fn._ProxyValues=Fn._ProxyMethods=void 0,Fn._ProxyValues=Ul,function(s){s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy=""}(Ul||(Fn._ProxyValues=Ul={})),Fn._ProxyMethods=Ol,function(s){s.start="",s.move="",s.end="",s.stop="",s.interacting=""}(Ol||(Fn._ProxyMethods=Ol={}));var Lx=0,Kp=function(){function s(f){var y=this,x=f.pointerType,A=f.scopeFire;(function(ee,ue){if(!(ee instanceof ue))throw new TypeError("Cannot call a class as a function")})(this,s),Nt(this,"interactable",null),Nt(this,"element",null),Nt(this,"rect",null),Nt(this,"_rects",void 0),Nt(this,"edges",null),Nt(this,"_scopeFire",void 0),Nt(this,"prepared",{name:null,axis:null,edges:null}),Nt(this,"pointerType",void 0),Nt(this,"pointers",[]),Nt(this,"downEvent",null),Nt(this,"downPointer",{}),Nt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Nt(this,"prevEvent",null),Nt(this,"pointerIsDown",!1),Nt(this,"pointerWasMoved",!1),Nt(this,"_interacting",!1),Nt(this,"_ending",!1),Nt(this,"_stopped",!0),Nt(this,"_proxy",null),Nt(this,"simulation",null),Nt(this,"doMove",(0,re.warnOnce)(function(ee){this.move(ee)},"The interaction.doMove() method has been renamed to interaction.move()")),Nt(this,"coords",{start:q.newCoords(),prev:q.newCoords(),cur:q.newCoords(),delta:q.newCoords(),velocity:q.newCoords()}),Nt(this,"_id",Lx++),this._scopeFire=A,this.pointerType=x;var S=this;this._proxy={};var C=function(ee){Object.defineProperty(y._proxy,ee,{get:function(){return S[ee]}})};for(var I in Ul)C(I);var k=function(ee){Object.defineProperty(y._proxy,ee,{value:function(){return S[ee].apply(S,arguments)}})};for(var V in Ol)k(V);this._scopeFire("interactions:new",{interaction:this})}var c,u;return c=s,u=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(f,y,x){var A=this.updatePointer(f,y,x,!0),S=this.pointers[A];this._scopeFire("interactions:down",{pointer:f,event:y,eventTarget:x,pointerIndex:A,pointerInfo:S,type:"down",interaction:this})}},{key:"start",value:function(f,y,x){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(f.name==="gesture"?2:1)||!y.options[f.name].enabled)&&((0,re.copyAction)(this.prepared,f),this.interactable=y,this.element=x,this.rect=y.getRect(x),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(f,y,x){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(f,y,x,!1);var A,S,C=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(A=this.coords.cur.client.x-this.coords.start.client.x,S=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ve.default)(A,S)>this.pointerMoveTolerance);var I=this.getPointerIndex(f),k={pointer:f,pointerIndex:I,pointerInfo:this.pointers[I],event:y,type:"move",eventTarget:x,dx:A,dy:S,duplicate:C,interaction:this};C||q.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",k),C||this.simulation||(this.interacting()&&(k.type=null,this.move(k)),this.pointerWasMoved&&q.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(f){f&&f.event||q.setZeroCoords(this.coords.delta),(f=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},f||{})).phase="move",this._doPhase(f)}},{key:"pointerUp",value:function(f,y,x,A){var S=this.getPointerIndex(f);S===-1&&(S=this.updatePointer(f,y,x,!1));var C=/cancel$/i.test(y.type)?"cancel":"up";this._scopeFire("interactions:".concat(C),{pointer:f,pointerIndex:S,pointerInfo:this.pointers[S],event:y,eventTarget:x,type:C,curEventTarget:A,interaction:this}),this.simulation||this.end(y),this.removePointer(f,y)}},{key:"documentBlur",value:function(f){this.end(f),this._scopeFire("interactions:blur",{event:f,type:"blur",interaction:this})}},{key:"end",value:function(f){var y;this._ending=!0,f=f||this._latestPointer.event,this.interacting()&&(y=this._doPhase({event:f,interaction:this,phase:"end"})),this._ending=!1,y===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(f){var y=q.getPointerId(f);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Ye.findIndex(this.pointers,function(x){return x.id===y})}},{key:"getPointerInfo",value:function(f){return this.pointers[this.getPointerIndex(f)]}},{key:"updatePointer",value:function(f,y,x,A){var S=q.getPointerId(f),C=this.getPointerIndex(f),I=this.pointers[C];return A=A!==!1&&(A||/(down|start)$/i.test(y.type)),I?I.pointer=f:(I=new sa.PointerInfo(S,f,y,null,null),C=this.pointers.length,this.pointers.push(I)),q.setCoords(this.coords.cur,this.pointers.map(function(k){return k.pointer}),this._now()),q.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),A&&(this.pointerIsDown=!0,I.downTime=this.coords.cur.timeStamp,I.downTarget=x,q.pointerExtend(this.downPointer,f),this.interacting()||(q.copyCoords(this.coords.start,this.coords.cur),q.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=y,this.pointerWasMoved=!1)),this._updateLatestPointer(f,y,x),this._scopeFire("interactions:update-pointer",{pointer:f,event:y,eventTarget:x,down:A,pointerInfo:I,pointerIndex:C,interaction:this}),C}},{key:"removePointer",value:function(f,y){var x=this.getPointerIndex(f);if(x!==-1){var A=this.pointers[x];this._scopeFire("interactions:remove-pointer",{pointer:f,event:y,eventTarget:null,pointerIndex:x,pointerInfo:A,interaction:this}),this.pointers.splice(x,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(f,y,x){this._latestPointer.pointer=f,this._latestPointer.event=y,this._latestPointer.eventTarget=x}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(f,y,x,A){return new oa.InteractEvent(this,f,this.prepared.name,y,this.element,x,A)}},{key:"_fireEvent",value:function(f){var y;(y=this.interactable)==null||y.fire(f),(!this.prevEvent||f.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=f)}},{key:"_doPhase",value:function(f){var y=f.event,x=f.phase,A=f.preEnd,S=f.type,C=this.rect;if(C&&x==="move"&&(ce.addEdges(this.edges,C,this.coords.delta[this.interactable.options.deltaSource]),C.width=C.right-C.left,C.height=C.bottom-C.top),this._scopeFire("interactions:before-action-".concat(x),f)===!1)return!1;var I=f.iEvent=this._createPreparedEvent(y,x,A,S);return this._scopeFire("interactions:action-".concat(x),f),x==="start"&&(this.prevEvent=I),this._fireEvent(I),this._scopeFire("interactions:after-action-".concat(x),f),!0}},{key:"_now",value:function(){return Date.now()}}],u&&Dx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();Fn.Interaction=Kp;var Ix=Kp;Fn.default=Ix;var gr={};function Zp(s){s.pointerIsDown&&(ef(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}function Qp(s){Ju(s.interaction)}function Ju(s){if(!function(u){return!(!u.offset.pending.x&&!u.offset.pending.y)}(s))return!1;var c=s.offset.pending;return ef(s.coords.cur,c),ef(s.coords.delta,c),ce.addEdges(s.edges,s.rect,c),c.x=0,c.y=0,!0}function Ux(s){var c=s.x,u=s.y;this.offset.pending.x+=c,this.offset.pending.y+=u,this.offset.total.x+=c,this.offset.total.y+=u}function ef(s,c){var u=s.page,f=s.client,y=c.x,x=c.y;u.x+=y,u.y+=x,f.x+=y,f.y+=x}Object.defineProperty(gr,"__esModule",{value:!0}),gr.addTotal=Zp,gr.applyPending=Ju,gr.default=void 0,Fn._ProxyMethods.offsetBy="";var Ox={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=Ux},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return Zp(s.interaction)},"interactions:before-action-start":Qp,"interactions:before-action-move":Qp,"interactions:before-action-end":function(s){var c=s.interaction;if(Ju(c))return c.move({offset:!0}),c.end(),!1},"interactions:stop":function(s){var c=s.interaction;c.offset.total.x=0,c.offset.total.y=0,c.offset.pending.x=0,c.offset.pending.y=0}}},Nx=Ox;gr.default=Nx;var Jr={};function Fx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function an(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=Jr.InertiaState=void 0;var Jp=function(){function s(f){(function(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),an(this,"active",!1),an(this,"isModified",!1),an(this,"smoothEnd",!1),an(this,"allowResume",!1),an(this,"modification",void 0),an(this,"modifierCount",0),an(this,"modifierArg",void 0),an(this,"startCoords",void 0),an(this,"t0",0),an(this,"v0",0),an(this,"te",0),an(this,"targetOffset",void 0),an(this,"modifiedOffset",void 0),an(this,"currentOffset",void 0),an(this,"lambda_v0",0),an(this,"one_ve_v0",0),an(this,"timeout",void 0),an(this,"interaction",void 0),this.interaction=f}var c,u;return c=s,(u=[{key:"start",value:function(f){var y=this.interaction,x=Nl(y);if(!x||!x.enabled)return!1;var A=y.coords.velocity.client,S=(0,ve.default)(A.x,A.y),C=this.modification||(this.modification=new Zr.default(y));if(C.copyFrom(y.modification),this.t0=y._now(),this.allowResume=x.allowResume,this.v0=S,this.currentOffset={x:0,y:0},this.startCoords=y.coords.cur.page,this.modifierArg=C.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-y.coords.cur.timeStamp<50&&S>x.minSpeed&&S>x.endSpeed)this.startInertia();else{if(C.result=C.setAll(this.modifierArg),!C.result.changed)return!1;this.startSmoothEnd()}return y.modification.result.rect=null,y.offsetBy(this.targetOffset),y._doPhase({interaction:y,event:f,phase:"inertiastart"}),y.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),y.modification.result.rect=null,this.active=!0,y.simulation=this,!0}},{key:"startInertia",value:function(){var f=this,y=this.interaction.coords.velocity.client,x=Nl(this.interaction),A=x.resistance,S=-Math.log(x.endSpeed/this.v0)/A;this.targetOffset={x:(y.x-S)/A,y:(y.y-S)/A},this.te=S,this.lambda_v0=A/this.v0,this.one_ve_v0=1-x.endSpeed/this.v0;var C=this.modification,I=this.modifierArg;I.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},C.result=C.setAll(I),C.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+C.result.delta.x,y:this.targetOffset.y+C.result.delta.y}),this.onNextFrame(function(){return f.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var f=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return f.smoothEndTick()})}},{key:"onNextFrame",value:function(f){var y=this;this.timeout=Xt.default.request(function(){y.active&&f()})}},{key:"inertiaTick",value:function(){var f,y,x,A,S,C=this,I=this.interaction,k=Nl(I).resistance,V=(I._now()-this.t0)/1e3;if(V<this.te){var ee,ue=1-(Math.exp(-k*V)-this.lambda_v0)/this.one_ve_v0;this.isModified?(f=this.targetOffset.x,y=this.targetOffset.y,x=this.modifiedOffset.x,A=this.modifiedOffset.y,ee={x:em(S=ue,0,f,x),y:em(S,0,y,A)}):ee={x:this.targetOffset.x*ue,y:this.targetOffset.y*ue};var Z={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=Z.x,this.currentOffset.y+=Z.y,I.offsetBy(Z),I.move(),this.onNextFrame(function(){return C.inertiaTick()})}else I.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var f=this,y=this.interaction,x=y._now()-this.t0,A=Nl(y).smoothEndDuration;if(x<A){var S={x:tm(x,0,this.targetOffset.x,A),y:tm(x,0,this.targetOffset.y,A)},C={x:S.x-this.currentOffset.x,y:S.y-this.currentOffset.y};this.currentOffset.x+=C.x,this.currentOffset.y+=C.y,y.offsetBy(C),y.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return f.smoothEndTick()})}else y.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(f){var y=f.pointer,x=f.event,A=f.eventTarget,S=this.interaction;S.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),S.updatePointer(y,x,A,!0),S._doPhase({interaction:S,event:x,phase:"resume"}),(0,q.copyCoords)(S.coords.prev,S.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Xt.default.cancel(this.timeout)}}])&&Fx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();function Nl(s){var c=s.interactable,u=s.prepared;return c&&c.options&&u.name&&c.options[u.name].inertia}Jr.InertiaState=Jp;var kx={id:"inertia",before:["modifiers","actions"],install:function(s){var c=s.defaults;s.usePlugin(gr.default),s.usePlugin(hn.default),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,c.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var c=s.interaction;c.inertia=new Jp(c)},"interactions:before-action-end":function(s){var c=s.interaction,u=s.event;return(!c._interacting||c.simulation||!c.inertia.start(u))&&null},"interactions:down":function(s){var c=s.interaction,u=s.eventTarget,f=c.inertia;if(f.active)for(var y=u;a.default.element(y);){if(y===c.element){f.resume(s);break}y=z.parentNode(y)}},"interactions:stop":function(s){var c=s.interaction.inertia;c.active&&c.stop()},"interactions:before-action-resume":function(s){var c=s.interaction.modification;c.stop(s),c.start(s,s.interaction.coords.cur.page),c.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":hn.addEventModifiers,"interactions:action-inertiastart":hn.addEventModifiers,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function em(s,c,u,f){var y=1-s;return y*y*c+2*y*s*u+s*s*f}function tm(s,c,u,f){return-u*(s/=f)*(s-2)+c}var zx=kx;Jr.default=zx;var la={};function Bx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function ca(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}function nm(s,c){for(var u=0;u<c.length;u++){var f=c[u];if(s.immediatePropagationStopped)break;f(s)}}Object.defineProperty(la,"__esModule",{value:!0}),la.Eventable=void 0;var Gx=function(){function s(f){(function(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),ca(this,"options",void 0),ca(this,"types",{}),ca(this,"propagationStopped",!1),ca(this,"immediatePropagationStopped",!1),ca(this,"global",void 0),this.options=(0,j.default)({},f||{})}var c,u;return c=s,(u=[{key:"fire",value:function(f){var y,x=this.global;(y=this.types[f.type])&&nm(f,y),!f.propagationStopped&&x&&(y=x[f.type])&&nm(f,y)}},{key:"on",value:function(f,y){var x=(0,ne.default)(f,y);for(f in x)this.types[f]=Ye.merge(this.types[f]||[],x[f])}},{key:"off",value:function(f,y){var x=(0,ne.default)(f,y);for(f in x){var A=this.types[f];if(A&&A.length)for(var S=0;S<x[f].length;S++){var C=x[f][S],I=A.indexOf(C);I!==-1&&A.splice(I,1)}}}},{key:"getRect",value:function(f){return null}}])&&Bx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();la.Eventable=Gx;var ua={};Object.defineProperty(ua,"__esModule",{value:!0}),ua.default=function(s,c){if(c.phaselessTypes[s])return!0;for(var u in c.map)if(s.indexOf(u)===0&&s.substr(u.length)in c.phases)return!0;return!1};var tf={};Object.defineProperty(tf,"__esModule",{value:!0}),tf.createInteractStatic=function(s){var c=function u(f,y){var x=s.interactables.get(f,y);return x||((x=s.interactables.new(f,y)).events.global=u.globalEvents),x};return c.getPointerAverage=q.pointerAverage,c.getTouchBBox=q.touchBBox,c.getTouchDistance=q.touchDistance,c.getTouchAngle=q.touchAngle,c.getElementRect=z.getElementRect,c.getElementClientRect=z.getElementClientRect,c.matchesSelector=z.matchesSelector,c.closest=z.closest,c.globalEvents={},c.version="1.10.17",c.scope=s,c.use=function(u,f){return this.scope.usePlugin(u,f),this},c.isSet=function(u,f){return!!this.scope.interactables.get(u,f&&f.context)},c.on=(0,re.warnOnce)(function(u,f,y){if(a.default.string(u)&&u.search(" ")!==-1&&(u=u.trim().split(/ +/)),a.default.array(u)){for(var x=0;x<u.length;x++){var A=u[x];this.on(A,f,y)}return this}if(a.default.object(u)){for(var S in u)this.on(S,u[S],f);return this}return(0,ua.default)(u,this.scope.actions)?this.globalEvents[u]?this.globalEvents[u].push(f):this.globalEvents[u]=[f]:this.scope.events.add(this.scope.document,u,f,{options:y}),this},"The interact.on() method is being deprecated"),c.off=(0,re.warnOnce)(function(u,f,y){if(a.default.string(u)&&u.search(" ")!==-1&&(u=u.trim().split(/ +/)),a.default.array(u)){for(var x=0;x<u.length;x++){var A=u[x];this.off(A,f,y)}return this}if(a.default.object(u)){for(var S in u)this.off(S,u[S],f);return this}var C;return(0,ua.default)(u,this.scope.actions)?u in this.globalEvents&&(C=this.globalEvents[u].indexOf(f))!==-1&&this.globalEvents[u].splice(C,1):this.scope.events.remove(this.scope.document,u,f,y),this},"The interact.off() method is being deprecated"),c.debug=function(){return this.scope},c.supportsTouch=function(){return P.default.supportsTouch},c.supportsPointerEvent=function(){return P.default.supportsPointerEvent},c.stop=function(){for(var u=0;u<this.scope.interactions.list.length;u++)this.scope.interactions.list[u].stop();return this},c.pointerMoveTolerance=function(u){return a.default.number(u)?(this.scope.interactions.pointerMoveTolerance=u,this):this.scope.interactions.pointerMoveTolerance},c.addDocument=function(u,f){this.scope.addDocument(u,f)},c.removeDocument=function(u){this.scope.removeDocument(u)},c};var Fl={};function Vx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Yi(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(Fl,"__esModule",{value:!0}),Fl.Interactable=void 0;var Hx=function(){function s(f,y,x,A){(function(S,C){if(!(S instanceof C))throw new TypeError("Cannot call a class as a function")})(this,s),Yi(this,"options",void 0),Yi(this,"_actions",void 0),Yi(this,"target",void 0),Yi(this,"events",new la.Eventable),Yi(this,"_context",void 0),Yi(this,"_win",void 0),Yi(this,"_doc",void 0),Yi(this,"_scopeEvents",void 0),Yi(this,"_rectChecker",void 0),this._actions=y.actions,this.target=f,this._context=y.context||x,this._win=(0,i.getWindow)((0,z.trySelector)(f)?this._context:f),this._doc=this._win.document,this._scopeEvents=A,this.set(y)}var c,u;return c=s,(u=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(f,y){return a.default.func(y.onstart)&&this.on("".concat(f,"start"),y.onstart),a.default.func(y.onmove)&&this.on("".concat(f,"move"),y.onmove),a.default.func(y.onend)&&this.on("".concat(f,"end"),y.onend),a.default.func(y.oninertiastart)&&this.on("".concat(f,"inertiastart"),y.oninertiastart),this}},{key:"updatePerActionListeners",value:function(f,y,x){(a.default.array(y)||a.default.object(y))&&this.off(f,y),(a.default.array(x)||a.default.object(x))&&this.on(f,x)}},{key:"setPerAction",value:function(f,y){var x=this._defaults;for(var A in y){var S=A,C=this.options[f],I=y[S];S==="listeners"&&this.updatePerActionListeners(f,C.listeners,I),a.default.array(I)?C[S]=Ye.from(I):a.default.plainObject(I)?(C[S]=(0,j.default)(C[S]||{},(0,Kr.default)(I)),a.default.object(x.perAction[S])&&"enabled"in x.perAction[S]&&(C[S].enabled=I.enabled!==!1)):a.default.bool(I)&&a.default.object(x.perAction[S])?C[S].enabled=I:C[S]=I}}},{key:"getRect",value:function(f){return f=f||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(f=f||this._context.querySelector(this.target)),(0,z.getElementRect)(f)}},{key:"rectChecker",value:function(f){var y=this;return a.default.func(f)?(this._rectChecker=f,this.getRect=function(x){var A=(0,j.default)({},y._rectChecker(x));return"width"in A||(A.width=A.right-A.left,A.height=A.bottom-A.top),A},this):f===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(f,y){if((0,z.trySelector)(y)||a.default.object(y)){for(var x in this.options[f]=y,this._actions.map)this.options[x][f]=y;return this}return this.options[f]}},{key:"origin",value:function(f){return this._backCompatOption("origin",f)}},{key:"deltaSource",value:function(f){return f==="page"||f==="client"?(this.options.deltaSource=f,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(f){return this._context===f.ownerDocument||(0,z.nodeContains)(this._context,f)}},{key:"testIgnoreAllow",value:function(f,y,x){return!this.testIgnore(f.ignoreFrom,y,x)&&this.testAllow(f.allowFrom,y,x)}},{key:"testAllow",value:function(f,y,x){return!f||!!a.default.element(x)&&(a.default.string(f)?(0,z.matchesUpTo)(x,f,y):!!a.default.element(f)&&(0,z.nodeContains)(f,x))}},{key:"testIgnore",value:function(f,y,x){return!(!f||!a.default.element(x))&&(a.default.string(f)?(0,z.matchesUpTo)(x,f,y):!!a.default.element(f)&&(0,z.nodeContains)(f,x))}},{key:"fire",value:function(f){return this.events.fire(f),this}},{key:"_onOff",value:function(f,y,x,A){a.default.object(y)&&!a.default.array(y)&&(A=x,x=null);var S=f==="on"?"add":"remove",C=(0,ne.default)(y,x);for(var I in C){I==="wheel"&&(I=P.default.wheelEvent);for(var k=0;k<C[I].length;k++){var V=C[I][k];(0,ua.default)(I,this._actions)?this.events[f](I,V):a.default.string(this.target)?this._scopeEvents["".concat(S,"Delegate")](this.target,this._context,I,V,A):this._scopeEvents[S](this.target,I,V,A)}}return this}},{key:"on",value:function(f,y,x){return this._onOff("on",f,y,x)}},{key:"off",value:function(f,y,x){return this._onOff("off",f,y,x)}},{key:"set",value:function(f){var y=this._defaults;for(var x in a.default.object(f)||(f={}),this.options=(0,Kr.default)(y.base),this._actions.methodDict){var A=x,S=this._actions.methodDict[A];this.options[A]={},this.setPerAction(A,(0,j.default)((0,j.default)({},y.perAction),y.actions[A])),this[S](f[A])}for(var C in f)a.default.func(this[C])&&this[C](f[C]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var f in this._scopeEvents.delegatedEvents)for(var y=this._scopeEvents.delegatedEvents[f],x=y.length-1;x>=0;x--){var A=y[x],S=A.selector,C=A.context,I=A.listeners;S===this.target&&C===this._context&&y.splice(x,1);for(var k=I.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,f,I[k][0],I[k][1])}else this._scopeEvents.remove(this.target,"all")}}])&&Vx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();Fl.Interactable=Hx;var kl={};function Wx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function nf(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(kl,"__esModule",{value:!0}),kl.InteractableSet=void 0;var jx=function(){function s(f){var y=this;(function(x,A){if(!(x instanceof A))throw new TypeError("Cannot call a class as a function")})(this,s),nf(this,"list",[]),nf(this,"selectorMap",{}),nf(this,"scope",void 0),this.scope=f,f.addListeners({"interactable:unset":function(x){var A=x.interactable,S=A.target,C=A._context,I=a.default.string(S)?y.selectorMap[S]:S[y.scope.id],k=Ye.findIndex(I,function(V){return V.context===C});I[k]&&(I[k].context=null,I[k].interactable=null),I.splice(k,1)}})}var c,u;return c=s,(u=[{key:"new",value:function(f,y){y=(0,j.default)(y||{},{actions:this.scope.actions});var x=new this.scope.Interactable(f,y,this.scope.document,this.scope.events),A={context:x._context,interactable:x};return this.scope.addDocument(x._doc),this.list.push(x),a.default.string(f)?(this.selectorMap[f]||(this.selectorMap[f]=[]),this.selectorMap[f].push(A)):(x.target[this.scope.id]||Object.defineProperty(f,this.scope.id,{value:[],configurable:!0}),f[this.scope.id].push(A)),this.scope.fire("interactable:new",{target:f,options:y,interactable:x,win:this.scope._win}),x}},{key:"get",value:function(f,y){var x=y&&y.context||this.scope.document,A=a.default.string(f),S=A?this.selectorMap[f]:f[this.scope.id];if(!S)return null;var C=Ye.find(S,function(I){return I.context===x&&(A||I.interactable.inContext(f))});return C&&C.interactable}},{key:"forEachMatch",value:function(f,y){for(var x=0;x<this.list.length;x++){var A=this.list[x],S=void 0;if((a.default.string(A.target)?a.default.element(f)&&z.matchesSelector(f,A.target):f===A.target)&&A.inContext(f)&&(S=y(A)),S!==void 0)return S}}}])&&Wx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();kl.InteractableSet=jx;var zl={};function Xx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function rf(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}function of(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var y=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(y!=null){var x,A,S=[],C=!0,I=!1;try{for(y=y.call(u);!(C=(x=y.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||y.return==null||y.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return im(u,f);var y=Object.prototype.toString.call(u).slice(8,-1);return y==="Object"&&u.constructor&&(y=u.constructor.name),y==="Map"||y==="Set"?Array.from(u):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?im(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function im(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=void 0;var Yx=function(){function s(f){(function(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),rf(this,"currentTarget",void 0),rf(this,"originalEvent",void 0),rf(this,"type",void 0),this.originalEvent=f,(0,oe.default)(this,f)}var c,u;return c=s,(u=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&Xx(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),s}();function fa(s){if(!a.default.object(s))return{capture:!!s,passive:!1};var c=(0,j.default)({},s);return c.capture=!!s.capture,c.passive=!!s.passive,c}var qx={id:"events",install:function(s){var c,u=[],f={},y=[],x={add:A,remove:S,addDelegate:function(k,V,ee,ue,Z){var ye=fa(Z);if(!f[ee]){f[ee]=[];for(var Pe=0;Pe<y.length;Pe++){var _e=y[Pe];A(_e,ee,C),A(_e,ee,I,!0)}}var ke=f[ee],Xe=Ye.find(ke,function(it){return it.selector===k&&it.context===V});Xe||(Xe={selector:k,context:V,listeners:[]},ke.push(Xe)),Xe.listeners.push([ue,ye])},removeDelegate:function(k,V,ee,ue,Z){var ye,Pe=fa(Z),_e=f[ee],ke=!1;if(_e)for(ye=_e.length-1;ye>=0;ye--){var Xe=_e[ye];if(Xe.selector===k&&Xe.context===V){for(var it=Xe.listeners,_t=it.length-1;_t>=0;_t--){var bt=of(it[_t],2),ut=bt[0],wt=bt[1],oi=wt.capture,$i=wt.passive;if(ut===ue&&oi===Pe.capture&&$i===Pe.passive){it.splice(_t,1),it.length||(_e.splice(ye,1),S(V,ee,C),S(V,ee,I,!0)),ke=!0;break}}if(ke)break}}},delegateListener:C,delegateUseCapture:I,delegatedEvents:f,documents:y,targets:u,supportsOptions:!1,supportsPassive:!1};function A(k,V,ee,ue){var Z=fa(ue),ye=Ye.find(u,function(Pe){return Pe.eventTarget===k});ye||(ye={eventTarget:k,events:{}},u.push(ye)),ye.events[V]||(ye.events[V]=[]),k.addEventListener&&!Ye.contains(ye.events[V],ee)&&(k.addEventListener(V,ee,x.supportsOptions?Z:Z.capture),ye.events[V].push(ee))}function S(k,V,ee,ue){var Z=fa(ue),ye=Ye.findIndex(u,function(_t){return _t.eventTarget===k}),Pe=u[ye];if(Pe&&Pe.events)if(V!=="all"){var _e=!1,ke=Pe.events[V];if(ke){if(ee==="all"){for(var Xe=ke.length-1;Xe>=0;Xe--)S(k,V,ke[Xe],Z);return}for(var it=0;it<ke.length;it++)if(ke[it]===ee){k.removeEventListener(V,ee,x.supportsOptions?Z:Z.capture),ke.splice(it,1),ke.length===0&&(delete Pe.events[V],_e=!0);break}}_e&&!Object.keys(Pe.events).length&&u.splice(ye,1)}else for(V in Pe.events)Pe.events.hasOwnProperty(V)&&S(k,V,"all")}function C(k,V){for(var ee=fa(V),ue=new Yx(k),Z=f[k.type],ye=of(q.getEventTargets(k),1)[0],Pe=ye;a.default.element(Pe);){for(var _e=0;_e<Z.length;_e++){var ke=Z[_e],Xe=ke.selector,it=ke.context;if(z.matchesSelector(Pe,Xe)&&z.nodeContains(it,ye)&&z.nodeContains(it,Pe)){var _t=ke.listeners;ue.currentTarget=Pe;for(var bt=0;bt<_t.length;bt++){var ut=of(_t[bt],2),wt=ut[0],oi=ut[1],$i=oi.capture,wf=oi.passive;$i===ee.capture&&wf===ee.passive&&wt(ue)}}}Pe=z.parentNode(Pe)}}function I(k){return C(k,!0)}return(c=s.document)==null||c.createElement("div").addEventListener("test",null,{get capture(){return x.supportsOptions=!0},get passive(){return x.supportsPassive=!0}}),s.events=x,x}};zl.default=qx;var Bl={};Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.default=void 0;var Gl={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var c=0;c<Gl.methodOrder.length;c++){var u;u=Gl.methodOrder[c];var f=Gl[u](s);if(f)return f}return null},simulationResume:function(s){var c=s.pointerType,u=s.eventType,f=s.eventTarget,y=s.scope;if(!/down|start/i.test(u))return null;for(var x=0;x<y.interactions.list.length;x++){var A=y.interactions.list[x],S=f;if(A.simulation&&A.simulation.allowResume&&A.pointerType===c)for(;S;){if(S===A.element)return A;S=z.parentNode(S)}}return null},mouseOrPen:function(s){var c,u=s.pointerId,f=s.pointerType,y=s.eventType,x=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var A=0;A<x.interactions.list.length;A++){var S=x.interactions.list[A];if(S.pointerType===f){if(S.simulation&&!rm(S,u))continue;if(S.interacting())return S;c||(c=S)}}if(c)return c;for(var C=0;C<x.interactions.list.length;C++){var I=x.interactions.list[C];if(!(I.pointerType!==f||/down/i.test(y)&&I.simulation))return I}return null},hasPointer:function(s){for(var c=s.pointerId,u=s.scope,f=0;f<u.interactions.list.length;f++){var y=u.interactions.list[f];if(rm(y,c))return y}return null},idle:function(s){for(var c=s.pointerType,u=s.scope,f=0;f<u.interactions.list.length;f++){var y=u.interactions.list[f];if(y.pointers.length===1){var x=y.interactable;if(x&&(!x.options.gesture||!x.options.gesture.enabled))continue}else if(y.pointers.length>=2)continue;if(!y.interacting()&&c===y.pointerType)return y}return null}};function rm(s,c){return s.pointers.some(function(u){return u.id===c})}var $x=Gl;Bl.default=$x;var Vl={};function sf(s){return sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},sf(s)}function om(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var y=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(y!=null){var x,A,S=[],C=!0,I=!1;try{for(y=y.call(u);!(C=(x=y.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||y.return==null||y.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return sm(u,f);var y=Object.prototype.toString.call(u).slice(8,-1);return y==="Object"&&u.constructor&&(y=u.constructor.name),y==="Map"||y==="Set"?Array.from(u):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?sm(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function sm(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}function Kx(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")}function Zx(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function af(s,c){return af=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},af(s,c)}function Qx(s,c){if(c&&(sf(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}(s)}function Hl(s){return Hl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},Hl(s)}Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var lf=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function am(s,c){return function(u){var f=c.interactions.list,y=q.getPointerType(u),x=om(q.getEventTargets(u),2),A=x[0],S=x[1],C=[];if(/^touch/.test(u.type)){c.prevTouchTime=c.now();for(var I=0;I<u.changedTouches.length;I++){var k=u.changedTouches[I],V={pointer:k,pointerId:q.getPointerId(k),pointerType:y,eventType:u.type,eventTarget:A,curEventTarget:S,scope:c},ee=lm(V);C.push([V.pointer,V.eventTarget,V.curEventTarget,ee])}}else{var ue=!1;if(!P.default.supportsPointerEvent&&/mouse/.test(u.type)){for(var Z=0;Z<f.length&&!ue;Z++)ue=f[Z].pointerType!=="mouse"&&f[Z].pointerIsDown;ue=ue||c.now()-c.prevTouchTime<500||u.timeStamp===0}if(!ue){var ye={pointer:u,pointerId:q.getPointerId(u),pointerType:y,eventType:u.type,curEventTarget:S,eventTarget:A,scope:c},Pe=lm(ye);C.push([ye.pointer,ye.eventTarget,ye.curEventTarget,Pe])}}for(var _e=0;_e<C.length;_e++){var ke=om(C[_e],4),Xe=ke[0],it=ke[1],_t=ke[2];ke[3][s](Xe,u,it,_t)}}}function lm(s){var c=s.pointerType,u=s.scope,f={interaction:Bl.default.search(s),searchDetails:s};return u.fire("interactions:find",f),f.interaction||u.interactions.new({pointerType:c})}function cf(s,c){var u=s.doc,f=s.scope,y=s.options,x=f.interactions.docEvents,A=f.events,S=A[c];for(var C in f.browser.isIOS&&!y.events&&(y.events={passive:!1}),A.delegatedEvents)S(u,C,A.delegateListener),S(u,C,A.delegateUseCapture,!0);for(var I=y&&y.events,k=0;k<x.length;k++){var V=x[k];S(u,V.type,V.listener,I)}}var Jx={id:"core/interactions",install:function(s){for(var c={},u=0;u<lf.length;u++){var f=lf[u];c[f]=am(f,s)}var y,x=P.default.pEventTypes;function A(){for(var S=0;S<s.interactions.list.length;S++){var C=s.interactions.list[S];if(C.pointerIsDown&&C.pointerType==="touch"&&!C._interacting)for(var I=function(){var V=C.pointers[k];s.documents.some(function(ee){var ue=ee.doc;return(0,z.nodeContains)(ue,V.downTarget)})||C.removePointer(V.pointer,V.event)},k=0;k<C.pointers.length;k++)I()}}(y=p.default.PointerEvent?[{type:x.down,listener:A},{type:x.down,listener:c.pointerDown},{type:x.move,listener:c.pointerMove},{type:x.up,listener:c.pointerUp},{type:x.cancel,listener:c.pointerUp}]:[{type:"mousedown",listener:c.pointerDown},{type:"mousemove",listener:c.pointerMove},{type:"mouseup",listener:c.pointerUp},{type:"touchstart",listener:A},{type:"touchstart",listener:c.pointerDown},{type:"touchmove",listener:c.pointerMove},{type:"touchend",listener:c.pointerUp},{type:"touchcancel",listener:c.pointerUp}]).push({type:"blur",listener:function(S){for(var C=0;C<s.interactions.list.length;C++)s.interactions.list[C].documentBlur(S)}}),s.prevTouchTime=0,s.Interaction=function(S){(function(Z,ye){if(typeof ye!="function"&&ye!==null)throw new TypeError("Super expression must either be null or a function");Z.prototype=Object.create(ye&&ye.prototype,{constructor:{value:Z,writable:!0,configurable:!0}}),Object.defineProperty(Z,"prototype",{writable:!1}),ye&&af(Z,ye)})(ue,S);var C,I,k,V,ee=(k=ue,V=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var Z,ye=Hl(k);if(V){var Pe=Hl(this).constructor;Z=Reflect.construct(ye,arguments,Pe)}else Z=ye.apply(this,arguments);return Qx(this,Z)});function ue(){return Kx(this,ue),ee.apply(this,arguments)}return C=ue,(I=[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(Z){s.interactions.pointerMoveTolerance=Z}},{key:"_now",value:function(){return s.now()}}])&&Zx(C.prototype,I),Object.defineProperty(C,"prototype",{writable:!1}),ue}(Fn.default),s.interactions={list:[],new:function(S){S.scopeFire=function(I,k){return s.fire(I,k)};var C=new s.Interaction(S);return s.interactions.list.push(C),C},listeners:c,docEvents:y,pointerMoveTolerance:1},s.usePlugin(vi.default)},listeners:{"scope:add-document":function(s){return cf(s,"add")},"scope:remove-document":function(s){return cf(s,"remove")},"interactable:unset":function(s,c){for(var u=s.interactable,f=c.interactions.list.length-1;f>=0;f--){var y=c.interactions.list[f];y.interactable===u&&(y.stop(),c.fire("interactions:destroy",{interaction:y}),y.destroy(),c.interactions.list.length>2&&c.interactions.list.splice(f,1))}}},onDocSignal:cf,doOnInteractions:am,methodNames:lf},eS=Jx;Vl.default=eS;var da={};function uf(s){return uf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},uf(s)}function ha(){return ha=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(s,c,u){var f=tS(s,c);if(f){var y=Object.getOwnPropertyDescriptor(f,c);return y.get?y.get.call(arguments.length<3?s:u):y.value}},ha.apply(this,arguments)}function tS(s,c){for(;!Object.prototype.hasOwnProperty.call(s,c)&&(s=yr(s))!==null;);return s}function ff(s,c){return ff=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},ff(s,c)}function nS(s,c){if(c&&(uf(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}(s)}function yr(s){return yr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},yr(s)}function cm(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")}function um(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function fm(s,c,u){return c&&um(s.prototype,c),u&&um(s,u),Object.defineProperty(s,"prototype",{writable:!1}),s}function pn(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(da,"__esModule",{value:!0}),da.Scope=void 0,da.initScope=dm;var iS=function(){function s(){var c=this;cm(this,s),pn(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),pn(this,"isInitialized",!1),pn(this,"listenerMaps",[]),pn(this,"browser",P.default),pn(this,"defaults",(0,Kr.default)(ra.defaults)),pn(this,"Eventable",la.Eventable),pn(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),pn(this,"interactStatic",(0,tf.createInteractStatic)(this)),pn(this,"InteractEvent",oa.InteractEvent),pn(this,"Interactable",void 0),pn(this,"interactables",new kl.InteractableSet(this)),pn(this,"_win",void 0),pn(this,"document",void 0),pn(this,"window",void 0),pn(this,"documents",[]),pn(this,"_plugins",{list:[],map:{}}),pn(this,"onWindowUnload",function(f){return c.removeDocument(f.target)});var u=this;this.Interactable=function(f){(function(C,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(I&&I.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),I&&ff(C,I)})(S,f);var y,x,A=(y=S,x=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var C,I=yr(y);if(x){var k=yr(this).constructor;C=Reflect.construct(I,arguments,k)}else C=I.apply(this,arguments);return nS(this,C)});function S(){return cm(this,S),A.apply(this,arguments)}return fm(S,[{key:"_defaults",get:function(){return u.defaults}},{key:"set",value:function(C){return ha(yr(S.prototype),"set",this).call(this,C),u.fire("interactable:set",{options:C,interactable:this}),this}},{key:"unset",value:function(){ha(yr(S.prototype),"unset",this).call(this);var C=u.interactables.list.indexOf(this);C<0||(ha(yr(S.prototype),"unset",this).call(this),u.interactables.list.splice(C,1),u.fire("interactable:unset",{interactable:this}))}}]),S}(Fl.Interactable)}return fm(s,[{key:"addListeners",value:function(c,u){this.listenerMaps.push({id:u,map:c})}},{key:"fire",value:function(c,u){for(var f=0;f<this.listenerMaps.length;f++){var y=this.listenerMaps[f].map[c];if(y&&y(u,this,c)===!1)return!1}}},{key:"init",value:function(c){return this.isInitialized?this:dm(this,c)}},{key:"pluginIsInstalled",value:function(c){return this._plugins.map[c.id]||this._plugins.list.indexOf(c)!==-1}},{key:"usePlugin",value:function(c,u){if(!this.isInitialized)return this;if(this.pluginIsInstalled(c))return this;if(c.id&&(this._plugins.map[c.id]=c),this._plugins.list.push(c),c.install&&c.install(this,u),c.listeners&&c.before){for(var f=0,y=this.listenerMaps.length,x=c.before.reduce(function(S,C){return S[C]=!0,S[hm(C)]=!0,S},{});f<y;f++){var A=this.listenerMaps[f].id;if(x[A]||x[hm(A)])break}this.listenerMaps.splice(f,0,{id:c.id,map:c.listeners})}else c.listeners&&this.listenerMaps.push({id:c.id,map:c.listeners});return this}},{key:"addDocument",value:function(c,u){if(this.getDocIndex(c)!==-1)return!1;var f=i.getWindow(c);u=u?(0,j.default)({},u):{},this.documents.push({doc:c,options:u}),this.events.documents.push(c),c!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:c,window:f,scope:this,options:u})}},{key:"removeDocument",value:function(c){var u=this.getDocIndex(c),f=i.getWindow(c),y=this.documents[u].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(u,1),this.events.documents.splice(u,1),this.fire("scope:remove-document",{doc:c,window:f,scope:this,options:y})}},{key:"getDocIndex",value:function(c){for(var u=0;u<this.documents.length;u++)if(this.documents[u].doc===c)return u;return-1}},{key:"getDocOptions",value:function(c){var u=this.getDocIndex(c);return u===-1?null:this.documents[u].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s}();function dm(s,c){return s.isInitialized=!0,a.default.window(c)&&i.init(c),p.default.init(c),P.default.init(c),Xt.default.init(c),s.window=c,s.document=c.document,s.usePlugin(Vl.default),s.usePlugin(zl.default),s}function hm(s){return s&&s.replace(/\/.*$/,"")}da.Scope=iS;var mn={};Object.defineProperty(mn,"__esModule",{value:!0}),mn.default=void 0;var pm=new da.Scope,rS=pm.interactStatic;mn.default=rS;var oS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;pm.init(oS);var Wl={};Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0,Wl.default=function(){};var jl={};Object.defineProperty(jl,"__esModule",{value:!0}),jl.default=void 0,jl.default=function(){};var Xl={};function mm(s,c){return function(u){if(Array.isArray(u))return u}(s)||function(u,f){var y=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(y!=null){var x,A,S=[],C=!0,I=!1;try{for(y=y.call(u);!(C=(x=y.next()).done)&&(S.push(x.value),!f||S.length!==f);C=!0);}catch(k){I=!0,A=k}finally{try{C||y.return==null||y.return()}finally{if(I)throw A}}return S}}(s,c)||function(u,f){if(u){if(typeof u=="string")return vm(u,f);var y=Object.prototype.toString.call(u).slice(8,-1);return y==="Object"&&u.constructor&&(y=u.constructor.name),y==="Map"||y==="Set"?Array.from(u):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?vm(u,f):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function vm(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0,Xl.default=function(s){var c=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(f){var y=mm(f,2),x=y[0],A=y[1];return x in s||A in s}),u=function(f,y){for(var x=s.range,A=s.limits,S=A===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:A,C=s.offset,I=C===void 0?{x:0,y:0}:C,k={range:x,grid:s,x:null,y:null},V=0;V<c.length;V++){var ee=mm(c[V],2),ue=ee[0],Z=ee[1],ye=Math.round((f-I.x)/s[ue]),Pe=Math.round((y-I.y)/s[Z]);k[ue]=Math.max(S.left,Math.min(S.right,ye*s[ue]+I.x)),k[Z]=Math.max(S.top,Math.min(S.bottom,Pe*s[Z]+I.y))}return k};return u.grid=s,u.coordFields=c,u};var pa={};Object.defineProperty(pa,"__esModule",{value:!0}),Object.defineProperty(pa,"edgeTarget",{enumerable:!0,get:function(){return Wl.default}}),Object.defineProperty(pa,"elements",{enumerable:!0,get:function(){return jl.default}}),Object.defineProperty(pa,"grid",{enumerable:!0,get:function(){return Xl.default}});var Yl={};Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var sS={id:"snappers",install:function(s){var c=s.interactStatic;c.snappers=(0,j.default)(c.snappers||{},pa),c.createSnapGrid=c.snappers.grid}},aS=sS;Yl.default=aS;var zo={};function gm(s,c){var u=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);c&&(f=f.filter(function(y){return Object.getOwnPropertyDescriptor(s,y).enumerable})),u.push.apply(u,f)}return u}function df(s){for(var c=1;c<arguments.length;c++){var u=arguments[c]!=null?arguments[c]:{};c%2?gm(Object(u),!0).forEach(function(f){lS(s,f,u[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(u)):gm(Object(u)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(u,f))})}return s}function lS(s,c,u){return c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s}Object.defineProperty(zo,"__esModule",{value:!0}),zo.default=zo.aspectRatio=void 0;var ym={start:function(s){var c=s.state,u=s.rect,f=s.edges,y=s.pageCoords,x=c.options.ratio,A=c.options,S=A.equalDelta,C=A.modifiers;x==="preserve"&&(x=u.width/u.height),c.startCoords=(0,j.default)({},y),c.startRect=(0,j.default)({},u),c.ratio=x,c.equalDelta=S;var I=c.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(c.xIsPrimaryAxis=!(!f.left&&!f.right),c.equalDelta){var k=(I.left?1:-1)*(I.top?1:-1);c.edgeSign={x:k,y:k}}else c.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if((0,j.default)(s.edges,I),C&&C.length){var V=new Zr.default(s.interaction);V.copyFrom(s.interaction.modification),V.prepareStates(C),c.subModification=V,V.startAll(df({},s))}},set:function(s){var c=s.state,u=s.rect,f=s.coords,y=(0,j.default)({},f),x=c.equalDelta?cS:uS;if(x(c,c.xIsPrimaryAxis,f,u),!c.subModification)return null;var A=(0,j.default)({},u);(0,ce.addEdges)(c.linkedEdges,A,{x:f.x-y.x,y:f.y-y.y});var S=c.subModification.setAll(df(df({},s),{},{rect:A,edges:c.linkedEdges,pageCoords:f,prevCoords:f,prevRect:A})),C=S.delta;return S.changed&&(x(c,Math.abs(C.x)>Math.abs(C.y),S.coords,S.rect),(0,j.default)(f,S.coords)),S.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function cS(s,c,u){var f=s.startCoords,y=s.edgeSign;c?u.y=f.y+(u.x-f.x)*y.y:u.x=f.x+(u.y-f.y)*y.x}function uS(s,c,u,f){var y=s.startRect,x=s.startCoords,A=s.ratio,S=s.edgeSign;if(c){var C=f.width/A;u.y=x.y+(C-y.height)*S.y}else{var I=f.height*A;u.x=x.x+(I-y.width)*S.x}}zo.aspectRatio=ym;var fS=(0,hn.makeModifier)(ym,"aspectRatio");zo.default=fS;var eo={};Object.defineProperty(eo,"__esModule",{value:!0}),eo.default=void 0;var _m=function(){};_m._defaults={};var dS=_m;eo.default=dS;var hf={};Object.defineProperty(hf,"__esModule",{value:!0}),Object.defineProperty(hf,"default",{enumerable:!0,get:function(){return eo.default}});var Pn={};function pf(s,c,u){return a.default.func(s)?ce.resolveRectLike(s,c.interactable,c.element,[u.x,u.y,c]):ce.resolveRectLike(s,c.interactable,c.element)}Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.default=void 0,Pn.getRestrictionRect=pf,Pn.restrict=void 0;var xm={start:function(s){var c=s.rect,u=s.startOffset,f=s.state,y=s.interaction,x=s.pageCoords,A=f.options,S=A.elementRect,C=(0,j.default)({left:0,top:0,right:0,bottom:0},A.offset||{});if(c&&S){var I=pf(A.restriction,y,x);if(I){var k=I.right-I.left-c.width,V=I.bottom-I.top-c.height;k<0&&(C.left+=k,C.right+=k),V<0&&(C.top+=V,C.bottom+=V)}C.left+=u.left-c.width*S.left,C.top+=u.top-c.height*S.top,C.right+=u.right-c.width*(1-S.right),C.bottom+=u.bottom-c.height*(1-S.bottom)}f.offset=C},set:function(s){var c=s.coords,u=s.interaction,f=s.state,y=f.options,x=f.offset,A=pf(y.restriction,u,c);if(A){var S=ce.xywhToTlbr(A);c.x=Math.max(Math.min(S.right-x.right,c.x),S.left+x.left),c.y=Math.max(Math.min(S.bottom-x.bottom,c.y),S.top+x.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Pn.restrict=xm;var hS=(0,hn.makeModifier)(xm,"restrict");Pn.default=hS;var Ui={};Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.restrictEdges=Ui.default=void 0;var Sm={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Mm={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Em(s,c){for(var u=["top","left","bottom","right"],f=0;f<u.length;f++){var y=u[f];y in s||(s[y]=c[y])}return s}var wm={noInner:Sm,noOuter:Mm,start:function(s){var c,u=s.interaction,f=s.startOffset,y=s.state,x=y.options;if(x){var A=(0,Pn.getRestrictionRect)(x.offset,u,u.coords.start.page);c=ce.rectToXY(A)}c=c||{x:0,y:0},y.offset={top:c.y+f.top,left:c.x+f.left,bottom:c.y-f.bottom,right:c.x-f.right}},set:function(s){var c=s.coords,u=s.edges,f=s.interaction,y=s.state,x=y.offset,A=y.options;if(u){var S=(0,j.default)({},c),C=(0,Pn.getRestrictionRect)(A.inner,f,S)||{},I=(0,Pn.getRestrictionRect)(A.outer,f,S)||{};Em(C,Sm),Em(I,Mm),u.top?c.y=Math.min(Math.max(I.top+x.top,S.y),C.top+x.top):u.bottom&&(c.y=Math.max(Math.min(I.bottom+x.bottom,S.y),C.bottom+x.bottom)),u.left?c.x=Math.min(Math.max(I.left+x.left,S.x),C.left+x.left):u.right&&(c.x=Math.max(Math.min(I.right+x.right,S.x),C.right+x.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Ui.restrictEdges=wm;var pS=(0,hn.makeModifier)(wm,"restrictEdges");Ui.default=pS;var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.restrictRect=Bo.default=void 0;var mS=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},Pn.restrict.defaults),Tm={start:Pn.restrict.start,set:Pn.restrict.set,defaults:mS};Bo.restrictRect=Tm;var vS=(0,hn.makeModifier)(Tm,"restrictRect");Bo.default=vS;var Go={};Object.defineProperty(Go,"__esModule",{value:!0}),Go.restrictSize=Go.default=void 0;var gS={width:-1/0,height:-1/0},yS={width:1/0,height:1/0},bm={start:function(s){return Ui.restrictEdges.start(s)},set:function(s){var c=s.interaction,u=s.state,f=s.rect,y=s.edges,x=u.options;if(y){var A=ce.tlbrToXywh((0,Pn.getRestrictionRect)(x.min,c,s.coords))||gS,S=ce.tlbrToXywh((0,Pn.getRestrictionRect)(x.max,c,s.coords))||yS;u.options={endOnly:x.endOnly,inner:(0,j.default)({},Ui.restrictEdges.noInner),outer:(0,j.default)({},Ui.restrictEdges.noOuter)},y.top?(u.options.inner.top=f.bottom-A.height,u.options.outer.top=f.bottom-S.height):y.bottom&&(u.options.inner.bottom=f.top+A.height,u.options.outer.bottom=f.top+S.height),y.left?(u.options.inner.left=f.right-A.width,u.options.outer.left=f.right-S.width):y.right&&(u.options.inner.right=f.left+A.width,u.options.outer.right=f.left+S.width),Ui.restrictEdges.set(s),u.options=x}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Go.restrictSize=bm;var _S=(0,hn.makeModifier)(bm,"restrictSize");Go.default=_S;var mf={};Object.defineProperty(mf,"__esModule",{value:!0}),Object.defineProperty(mf,"default",{enumerable:!0,get:function(){return eo.default}});var _r={};Object.defineProperty(_r,"__esModule",{value:!0}),_r.snap=_r.default=void 0;var Cm={start:function(s){var c,u=s.interaction,f=s.interactable,y=s.element,x=s.rect,A=s.state,S=s.startOffset,C=A.options,I=C.offsetWithOrigin?function(ee){var ue=ee.interaction.element;return(0,ce.rectToXY)((0,ce.resolveRectLike)(ee.state.options.origin,null,null,[ue]))||(0,J.default)(ee.interactable,ue,ee.interaction.prepared.name)}(s):{x:0,y:0};if(C.offset==="startCoords")c={x:u.coords.start.page.x,y:u.coords.start.page.y};else{var k=(0,ce.resolveRectLike)(C.offset,f,y,[u]);(c=(0,ce.rectToXY)(k)||{x:0,y:0}).x+=I.x,c.y+=I.y}var V=C.relativePoints;A.offsets=x&&V&&V.length?V.map(function(ee,ue){return{index:ue,relativePoint:ee,x:S.left-x.width*ee.x+c.x,y:S.top-x.height*ee.y+c.y}}):[{index:0,relativePoint:null,x:c.x,y:c.y}]},set:function(s){var c=s.interaction,u=s.coords,f=s.state,y=f.options,x=f.offsets,A=(0,J.default)(c.interactable,c.element,c.prepared.name),S=(0,j.default)({},u),C=[];y.offsetWithOrigin||(S.x-=A.x,S.y-=A.y);for(var I=0;I<x.length;I++)for(var k=x[I],V=S.x-k.x,ee=S.y-k.y,ue=0,Z=y.targets.length;ue<Z;ue++){var ye,Pe=y.targets[ue];(ye=a.default.func(Pe)?Pe(V,ee,c._proxy,k,ue):Pe)&&C.push({x:(a.default.number(ye.x)?ye.x:V)+k.x,y:(a.default.number(ye.y)?ye.y:ee)+k.y,range:a.default.number(ye.range)?ye.range:y.range,source:Pe,index:ue,offset:k})}for(var _e={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},ke=0;ke<C.length;ke++){var Xe=C[ke],it=Xe.range,_t=Xe.x-S.x,bt=Xe.y-S.y,ut=(0,ve.default)(_t,bt),wt=ut<=it;it===1/0&&_e.inRange&&_e.range!==1/0&&(wt=!1),_e.target&&!(wt?_e.inRange&&it!==1/0?ut/it<_e.distance/_e.range:it===1/0&&_e.range!==1/0||ut<_e.distance:!_e.inRange&&ut<_e.distance)||(_e.target=Xe,_e.distance=ut,_e.range=it,_e.inRange=wt,_e.delta.x=_t,_e.delta.y=bt)}return _e.inRange&&(u.x=_e.target.x,u.y=_e.target.y),f.closest=_e,_e},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};_r.snap=Cm;var xS=(0,hn.makeModifier)(Cm,"snap");_r.default=xS;var qi={};function Am(s,c){(c==null||c>s.length)&&(c=s.length);for(var u=0,f=Array(c);u<c;u++)f[u]=s[u];return f}Object.defineProperty(qi,"__esModule",{value:!0}),qi.snapSize=qi.default=void 0;var Pm={start:function(s){var c=s.state,u=s.edges,f=c.options;if(!u)return null;s.state={options:{targets:null,relativePoints:[{x:u.left?0:1,y:u.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},c.targetFields=c.targetFields||[["width","height"],["x","y"]],_r.snap.start(s),c.offsets=s.state.offsets,s.state=c},set:function(s){var c,u,f=s.interaction,y=s.state,x=s.coords,A=y.options,S=y.offsets,C={x:x.x-S[0].x,y:x.y-S[0].y};y.options=(0,j.default)({},A),y.options.targets=[];for(var I=0;I<(A.targets||[]).length;I++){var k=(A.targets||[])[I],V=void 0;if(V=a.default.func(k)?k(C.x,C.y,f):k){for(var ee=0;ee<y.targetFields.length;ee++){var ue=(c=y.targetFields[ee],u=2,function(_e){if(Array.isArray(_e))return _e}(c)||function(_e,ke){var Xe=_e==null?null:typeof Symbol<"u"&&_e[Symbol.iterator]||_e["@@iterator"];if(Xe!=null){var it,_t,bt=[],ut=!0,wt=!1;try{for(Xe=Xe.call(_e);!(ut=(it=Xe.next()).done)&&(bt.push(it.value),!ke||bt.length!==ke);ut=!0);}catch(oi){wt=!0,_t=oi}finally{try{ut||Xe.return==null||Xe.return()}finally{if(wt)throw _t}}return bt}}(c,u)||function(_e,ke){if(_e){if(typeof _e=="string")return Am(_e,ke);var Xe=Object.prototype.toString.call(_e).slice(8,-1);return Xe==="Object"&&_e.constructor&&(Xe=_e.constructor.name),Xe==="Map"||Xe==="Set"?Array.from(_e):Xe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Xe)?Am(_e,ke):void 0}}(c,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=ue[0],ye=ue[1];if(Z in V||ye in V){V.x=V[Z],V.y=V[ye];break}}y.options.targets.push(V)}}var Pe=_r.snap.set(s);return y.options=A,Pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};qi.snapSize=Pm;var SS=(0,hn.makeModifier)(Pm,"snapSize");qi.default=SS;var Vo={};Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.snapEdges=Vo.default=void 0;var Rm={start:function(s){var c=s.edges;return c?(s.state.targetFields=s.state.targetFields||[[c.left?"left":"right",c.top?"top":"bottom"]],qi.snapSize.start(s)):null},set:qi.snapSize.set,defaults:(0,j.default)((0,Kr.default)(qi.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};Vo.snapEdges=Rm;var MS=(0,hn.makeModifier)(Rm,"snapEdges");Vo.default=MS;var vf={};Object.defineProperty(vf,"__esModule",{value:!0}),Object.defineProperty(vf,"default",{enumerable:!0,get:function(){return eo.default}});var gf={};Object.defineProperty(gf,"__esModule",{value:!0}),Object.defineProperty(gf,"default",{enumerable:!0,get:function(){return eo.default}});var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.default=void 0;var ES={aspectRatio:zo.default,restrictEdges:Ui.default,restrict:Pn.default,restrictRect:Bo.default,restrictSize:Go.default,snapEdges:Vo.default,snap:_r.default,snapSize:qi.default,spring:vf.default,avoid:hf.default,transform:gf.default,rubberband:mf.default};Ho.default=ES;var ma={};Object.defineProperty(ma,"__esModule",{value:!0}),ma.default=void 0;var wS={id:"modifiers",install:function(s){var c=s.interactStatic;for(var u in s.usePlugin(hn.default),s.usePlugin(Yl.default),c.modifiers=Ho.default,Ho.default){var f=Ho.default[u],y=f._defaults,x=f._methods;y._methods=x,s.defaults.perAction[u]=y}}},TS=wS;ma.default=TS;var to={};function yf(s){return yf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},yf(s)}function bS(s,c){for(var u=0;u<c.length;u++){var f=c[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function _f(s,c){return _f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,f){return u.__proto__=f,u},_f(s,c)}function CS(s,c){if(c&&(yf(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xf(s)}function xf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ql(s){return ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},ql(s)}Object.defineProperty(to,"__esModule",{value:!0}),to.default=to.PointerEvent=void 0;var AS=function(s){(function(S,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(C&&C.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),C&&_f(S,C)})(A,s);var c,u,f,y,x=(f=A,y=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,C=ql(f);if(y){var I=ql(this).constructor;S=Reflect.construct(C,arguments,I)}else S=C.apply(this,arguments);return CS(this,S)});function A(S,C,I,k,V,ee){var ue;if(function(Pe,_e){if(!(Pe instanceof _e))throw new TypeError("Cannot call a class as a function")}(this,A),ue=x.call(this,V),q.pointerExtend(xf(ue),I),I!==C&&q.pointerExtend(xf(ue),C),ue.timeStamp=ee,ue.originalEvent=I,ue.type=S,ue.pointerId=q.getPointerId(C),ue.pointerType=q.getPointerType(C),ue.target=k,ue.currentTarget=null,S==="tap"){var Z=V.getPointerIndex(C);ue.dt=ue.timeStamp-V.pointers[Z].downTime;var ye=ue.timeStamp-V.tapTime;ue.double=!!V.prevTap&&V.prevTap.type!=="doubletap"&&V.prevTap.target===ue.target&&ye<500}else S==="doubletap"&&(ue.dt=C.timeStamp-V.tapTime,ue.double=!0);return ue}return c=A,(u=[{key:"_subtractOrigin",value:function(S){var C=S.x,I=S.y;return this.pageX-=C,this.pageY-=I,this.clientX-=C,this.clientY-=I,this}},{key:"_addOrigin",value:function(S){var C=S.x,I=S.y;return this.pageX+=C,this.pageY+=I,this.clientX+=C,this.clientY+=I,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&bS(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),A}(Ge.BaseEvent);to.PointerEvent=to.default=AS;var va={};Object.defineProperty(va,"__esModule",{value:!0}),va.default=void 0;var $l={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=$l,s.defaults.actions.pointerEvents=$l.defaults,(0,j.default)(s.actions.phaselessTypes,$l.types)},listeners:{"interactions:new":function(s){var c=s.interaction;c.prevTap=null,c.tapTime=0},"interactions:update-pointer":function(s){var c=s.down,u=s.pointerInfo;!c&&u.hold||(u.hold={duration:1/0,timeout:null})},"interactions:move":function(s,c){var u=s.interaction,f=s.pointer,y=s.event,x=s.eventTarget;s.duplicate||u.pointerIsDown&&!u.pointerWasMoved||(u.pointerIsDown&&Sf(s),xr({interaction:u,pointer:f,event:y,eventTarget:x,type:"move"},c))},"interactions:down":function(s,c){(function(u,f){for(var y=u.interaction,x=u.pointer,A=u.event,S=u.eventTarget,C=u.pointerIndex,I=y.pointers[C].hold,k=z.getPath(S),V={interaction:y,pointer:x,event:A,eventTarget:S,type:"hold",targets:[],path:k,node:null},ee=0;ee<k.length;ee++){var ue=k[ee];V.node=ue,f.fire("pointerEvents:collect-targets",V)}if(V.targets.length){for(var Z=1/0,ye=0;ye<V.targets.length;ye++){var Pe=V.targets[ye].eventable.options.holdDuration;Pe<Z&&(Z=Pe)}I.duration=Z,I.timeout=setTimeout(function(){xr({interaction:y,eventTarget:S,pointer:x,event:A,type:"hold"},f)},Z)}})(s,c),xr(s,c)},"interactions:up":function(s,c){Sf(s),xr(s,c),function(u,f){var y=u.interaction,x=u.pointer,A=u.event,S=u.eventTarget;y.pointerWasMoved||xr({interaction:y,eventTarget:S,pointer:x,event:A,type:"tap"},f)}(s,c)},"interactions:cancel":function(s,c){Sf(s),xr(s,c)}},PointerEvent:to.PointerEvent,fire:xr,collectEventTargets:Dm,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function xr(s,c){var u=s.interaction,f=s.pointer,y=s.event,x=s.eventTarget,A=s.type,S=s.targets,C=S===void 0?Dm(s,c):S,I=new to.PointerEvent(A,f,y,x,u,c.now());c.fire("pointerEvents:new",{pointerEvent:I});for(var k={interaction:u,pointer:f,event:y,eventTarget:x,targets:C,type:A,pointerEvent:I},V=0;V<C.length;V++){var ee=C[V];for(var ue in ee.props||{})I[ue]=ee.props[ue];var Z=(0,J.default)(ee.eventable,ee.node);if(I._subtractOrigin(Z),I.eventable=ee.eventable,I.currentTarget=ee.node,ee.eventable.fire(I),I._addOrigin(Z),I.immediatePropagationStopped||I.propagationStopped&&V+1<C.length&&C[V+1].node!==I.currentTarget)break}if(c.fire("pointerEvents:fired",k),A==="tap"){var ye=I.double?xr({interaction:u,pointer:f,event:y,eventTarget:x,type:"doubletap"},c):I;u.prevTap=ye,u.tapTime=ye.timeStamp}return I}function Dm(s,c){var u=s.interaction,f=s.pointer,y=s.event,x=s.eventTarget,A=s.type,S=u.getPointerIndex(f),C=u.pointers[S];if(A==="tap"&&(u.pointerWasMoved||!C||C.downTarget!==x))return[];for(var I=z.getPath(x),k={interaction:u,pointer:f,event:y,eventTarget:x,type:A,path:I,targets:[],node:null},V=0;V<I.length;V++){var ee=I[V];k.node=ee,c.fire("pointerEvents:collect-targets",k)}return A==="hold"&&(k.targets=k.targets.filter(function(ue){var Z;return ue.eventable.options.holdDuration===((Z=u.pointers[S])==null?void 0:Z.hold.duration)})),k.targets}function Sf(s){var c=s.interaction,u=s.pointerIndex,f=c.pointers[u].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var PS=$l;va.default=PS;var Kl={};function RS(s){var c=s.interaction;c.holdIntervalHandle&&(clearInterval(c.holdIntervalHandle),c.holdIntervalHandle=null)}Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.default=void 0;var DS={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(va.default);var c=s.pointerEvents;c.defaults.holdRepeatInterval=0,c.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(s,c){return s["pointerEvents:".concat(c)]=RS,s},{"pointerEvents:new":function(s){var c=s.pointerEvent;c.type==="hold"&&(c.count=(c.count||0)+1)},"pointerEvents:fired":function(s,c){var u=s.interaction,f=s.pointerEvent,y=s.eventTarget,x=s.targets;if(f.type==="hold"&&x.length){var A=x[0].eventable.options.holdRepeatInterval;A<=0||(u.holdIntervalHandle=setTimeout(function(){c.pointerEvents.fire({interaction:u,eventTarget:y,type:"hold",pointer:f,event:f},c)},A))}}})},LS=DS;Kl.default=LS;var Zl={};function IS(s){return(0,j.default)(this.events.options,s),this}Object.defineProperty(Zl,"__esModule",{value:!0}),Zl.default=void 0;var US={id:"pointer-events/interactableTargets",install:function(s){var c=s.Interactable;c.prototype.pointerEvents=IS;var u=c.prototype._backCompatOption;c.prototype._backCompatOption=function(f,y){var x=u.call(this,f,y);return x===this&&(this.events.options[f]=y),x}},listeners:{"pointerEvents:collect-targets":function(s,c){var u=s.targets,f=s.node,y=s.type,x=s.eventTarget;c.interactables.forEachMatch(f,function(A){var S=A.events,C=S.options;S.types[y]&&S.types[y].length&&A.testIgnoreAllow(C,f,x)&&u.push({node:f,eventable:S,props:{interactable:A}})})},"interactable:new":function(s){var c=s.interactable;c.events.getRect=function(u){return c.getRect(u)}},"interactable:set":function(s,c){var u=s.interactable,f=s.options;(0,j.default)(u.events.options,c.pointerEvents.defaults),(0,j.default)(u.events.options,f.pointerEvents||{})}}},OS=US;Zl.default=OS;var ga={};Object.defineProperty(ga,"__esModule",{value:!0}),ga.default=void 0;var NS={id:"pointer-events",install:function(s){s.usePlugin(va),s.usePlugin(Kl.default),s.usePlugin(Zl.default)}},FS=NS;ga.default=FS;var Wo={};function Lm(s){var c=s.Interactable;s.actions.phases.reflow=!0,c.prototype.reflow=function(u){return function(f,y,x){for(var A=a.default.string(f.target)?Ye.from(f._context.querySelectorAll(f.target)):[f.target],S=x.window.Promise,C=S?[]:null,I=function(){var V=A[k],ee=f.getRect(V);if(!ee)return"break";var ue=Ye.find(x.interactions.list,function(ke){return ke.interacting()&&ke.interactable===f&&ke.element===V&&ke.prepared.name===y.name}),Z=void 0;if(ue)ue.move(),C&&(Z=ue._reflowPromise||new S(function(ke){ue._reflowResolve=ke}));else{var ye=(0,ce.tlbrToXywh)(ee),Pe={page:{x:ye.x,y:ye.y},client:{x:ye.x,y:ye.y},timeStamp:x.now()},_e=q.coordsToEvent(Pe);Z=function(ke,Xe,it,_t,bt){var ut=ke.interactions.new({pointerType:"reflow"}),wt={interaction:ut,event:bt,pointer:bt,eventTarget:it,phase:"reflow"};ut.interactable=Xe,ut.element=it,ut.prevEvent=bt,ut.updatePointer(bt,bt,it,!0),q.setZeroCoords(ut.coords.delta),(0,re.copyAction)(ut.prepared,_t),ut._doPhase(wt);var oi=ke.window.Promise,$i=oi?new oi(function(wf){ut._reflowResolve=wf}):void 0;return ut._reflowPromise=$i,ut.start(_t,Xe,it),ut._interacting?(ut.move(wt),ut.end(bt)):(ut.stop(),ut._reflowResolve()),ut.removePointer(bt,bt),$i}(x,f,V,y,_e)}C&&C.push(Z)},k=0;k<A.length&&I()!=="break";k++);return C&&S.all(C).then(function(){return f})}(this,u,s)}}Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.default=void 0,Wo.install=Lm;var kS={id:"reflow",install:Lm,listeners:{"interactions:stop":function(s,c){var u=s.interaction;u.pointerType==="reflow"&&(u._reflowResolve&&u._reflowResolve(),Ye.remove(c.interactions.list,u))}}},zS=kS;Wo.default=zS;var ri={exports:{}};function Mf(s){return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Mf(s)}Object.defineProperty(ri.exports,"__esModule",{value:!0}),ri.exports.default=void 0,mn.default.use(vi.default),mn.default.use(gr.default),mn.default.use(ga.default),mn.default.use(Jr.default),mn.default.use(ma.default),mn.default.use(Ht.default),mn.default.use(pt.default),mn.default.use(ni.default),mn.default.use(Wo.default);var BS=mn.default;if(ri.exports.default=BS,Mf(ri)==="object"&&ri)try{ri.exports=mn.default}catch{}mn.default.default=mn.default,pt.default,ni.default,Ht.default,vi.default,Rl.default,Jr.default,mn.default,ma.default,gr.default,ga.default,Wo.default,ri=ri.exports;var no={exports:{}};function Ef(s){return Ef=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Ef(s)}Object.defineProperty(no.exports,"__esModule",{value:!0}),no.exports.default=void 0;var GS=ri.default;if(no.exports.default=GS,Ef(no)==="object"&&no)try{no.exports=ri.default}catch{}return ri.default.default=ri.default,no.exports})})(yx);var FP=yx.exports;const kP=VS(FP),f0={type:"change"},Rd={type:"start"},d0={type:"end"};class zP extends Oo{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xo.ROTATE,MIDDLE:Xo.DOLLY,RIGHT:Xo.PAN},this.touches={ONE:Yo.ROTATE,TWO:Yo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Mt),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(f0),i.update(),o=r.NONE},this.update=function(){const G=new Y,he=new Lo().setFromUnitVectors(e.up,new Y(0,1,0)),ie=he.clone().invert(),Ae=new Y,Ie=new Lo,ze=2*Math.PI;return function(){const Fe=i.object.position;G.copy(Fe).sub(i.target),G.applyQuaternion(he),a.setFromVector3(G),i.autoRotate&&o===r.NONE&&R(B()),i.enableDamping?(a.theta+=d.theta*i.dampingFactor,a.phi+=d.phi*i.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let qe=i.minAzimuthAngle,Je=i.maxAzimuthAngle;return isFinite(qe)&&isFinite(Je)&&(qe<-Math.PI?qe+=ze:qe>Math.PI&&(qe-=ze),Je<-Math.PI?Je+=ze:Je>Math.PI&&(Je-=ze),qe<=Je?a.theta=Math.max(qe,Math.min(Je,a.theta)):a.theta=a.theta>(qe+Je)/2?Math.max(qe,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),G.setFromSpherical(a),G.applyQuaternion(ie),Fe.copy(i.target).add(G),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),m.set(0,0,0)),h=1,g||Ae.distanceToSquared(i.object.position)>l||8*(1-Ie.dot(i.object.quaternion))>l?(i.dispatchEvent(f0),Ae.copy(i.object.position),Ie.copy(i.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",D),i.domElement.removeEventListener("pointerdown",Qe),i.domElement.removeEventListener("pointercancel",Tt),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Mt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,a=new c0,d=new c0;let h=1;const m=new Y;let g=!1;const v=new Ne,_=new Ne,T=new Ne,b=new Ne,M=new Ne,p=new Ne,E=new Ne,w=new Ne,L=new Ne,P=[],O={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function z(){return Math.pow(.95,i.zoomSpeed)}function R(G){d.theta-=G}function N(G){d.phi-=G}const ae=function(){const G=new Y;return function(ie,Ae){G.setFromMatrixColumn(Ae,0),G.multiplyScalar(-ie),m.add(G)}}(),fe=function(){const G=new Y;return function(ie,Ae){i.screenSpacePanning===!0?G.setFromMatrixColumn(Ae,1):(G.setFromMatrixColumn(Ae,0),G.crossVectors(i.object.up,G)),G.multiplyScalar(ie),m.add(G)}}(),$=function(){const G=new Y;return function(ie,Ae){const Ie=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;G.copy(ze).sub(i.target);let De=G.length();De*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*ie*De/Ie.clientHeight,i.object.matrix),fe(2*Ae*De/Ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(ie*(i.object.right-i.object.left)/i.object.zoom/Ie.clientWidth,i.object.matrix),fe(Ae*(i.object.top-i.object.bottom)/i.object.zoom/Ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(G){i.object.isPerspectiveCamera?h/=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*G)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(G){i.object.isPerspectiveCamera?h*=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/G)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(G){v.set(G.clientX,G.clientY)}function pe(G){E.set(G.clientX,G.clientY)}function X(G){b.set(G.clientX,G.clientY)}function J(G){_.set(G.clientX,G.clientY),T.subVectors(_,v).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*T.x/he.clientHeight),N(2*Math.PI*T.y/he.clientHeight),v.copy(_),i.update()}function ne(G){w.set(G.clientX,G.clientY),L.subVectors(w,E),L.y>0?te(z()):L.y<0&&j(z()),E.copy(w),i.update()}function Te(G){M.set(G.clientX,G.clientY),p.subVectors(M,b).multiplyScalar(i.panSpeed),$(p.x,p.y),b.copy(M),i.update()}function ve(G){G.deltaY<0?j(z()):G.deltaY>0&&te(z()),i.update()}function oe(G){let he=!1;switch(G.code){case i.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),he=!0;break}he&&(G.preventDefault(),i.update())}function q(){if(P.length===1)v.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);v.set(G,he)}}function Ee(){if(P.length===1)b.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);b.set(G,he)}}function we(){const G=P[0].pageX-P[1].pageX,he=P[0].pageY-P[1].pageY,ie=Math.sqrt(G*G+he*he);E.set(0,ie)}function H(){i.enableZoom&&we(),i.enablePan&&Ee()}function Ze(){i.enableZoom&&we(),i.enableRotate&&q()}function He(G){if(P.length==1)_.set(G.pageX,G.pageY);else{const ie=Ce(G),Ae=.5*(G.pageX+ie.x),Ie=.5*(G.pageY+ie.y);_.set(Ae,Ie)}T.subVectors(_,v).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*T.x/he.clientHeight),N(2*Math.PI*T.y/he.clientHeight),v.copy(_)}function be(G){if(P.length===1)M.set(G.pageX,G.pageY);else{const he=Ce(G),ie=.5*(G.pageX+he.x),Ae=.5*(G.pageY+he.y);M.set(ie,Ae)}p.subVectors(M,b).multiplyScalar(i.panSpeed),$(p.x,p.y),b.copy(M)}function Ge(G){const he=Ce(G),ie=G.pageX-he.x,Ae=G.pageY-he.y,Ie=Math.sqrt(ie*ie+Ae*Ae);w.set(0,Ie),L.set(0,Math.pow(w.y/E.y,i.zoomSpeed)),te(L.y),E.copy(w)}function ht(G){i.enableZoom&&Ge(G),i.enablePan&&be(G)}function Be(G){i.enableZoom&&Ge(G),i.enableRotate&&He(G)}function Qe(G){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(G.pointerId),i.domElement.addEventListener("pointermove",Ye),i.domElement.addEventListener("pointerup",Tt)),se(G),G.pointerType==="touch"?jt(G):Ot(G))}function Ye(G){i.enabled!==!1&&(G.pointerType==="touch"?F(G):gt(G))}function Tt(G){me(G),P.length===0&&(i.domElement.releasePointerCapture(G.pointerId),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt)),i.dispatchEvent(d0),o=r.NONE}function Ot(G){let he;switch(G.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Xo.DOLLY:if(i.enableZoom===!1)return;pe(G),o=r.DOLLY;break;case Xo.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enablePan===!1)return;X(G),o=r.PAN}else{if(i.enableRotate===!1)return;ce(G),o=r.ROTATE}break;case Xo.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enableRotate===!1)return;ce(G),o=r.ROTATE}else{if(i.enablePan===!1)return;X(G),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Rd)}function gt(G){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;J(G);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(G);break;case r.PAN:if(i.enablePan===!1)return;Te(G);break}}function lt(G){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(G.preventDefault(),i.dispatchEvent(Rd),ve(G),i.dispatchEvent(d0))}function Mt(G){i.enabled===!1||i.enablePan===!1||oe(G)}function jt(G){switch(xe(G),P.length){case 1:switch(i.touches.ONE){case Yo.ROTATE:if(i.enableRotate===!1)return;q(),o=r.TOUCH_ROTATE;break;case Yo.PAN:if(i.enablePan===!1)return;Ee(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Yo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(),o=r.TOUCH_DOLLY_PAN;break;case Yo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ze(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Rd)}function F(G){switch(xe(G),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;He(G),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(G),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ht(G),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(G),i.update();break;default:o=r.NONE}}function D(G){i.enabled!==!1&&G.preventDefault()}function se(G){P.push(G)}function me(G){delete O[G.pointerId];for(let he=0;he<P.length;he++)if(P[he].pointerId==G.pointerId){P.splice(he,1);return}}function xe(G){let he=O[G.pointerId];he===void 0&&(he=new Ne,O[G.pointerId]=he),he.set(G.pageX,G.pageY)}function Ce(G){const he=G.pointerId===P[0].pointerId?P[1]:P[0];return O[he.pointerId]}i.domElement.addEventListener("contextmenu",D),i.domElement.addEventListener("pointerdown",Qe),i.domElement.addEventListener("pointercancel",Tt),i.domElement.addEventListener("wheel",lt,{passive:!1}),this.update()}}class Yr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const BP=new ju(-1,1,1,-1,0,1),Wp=new mi;Wp.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3));Wp.setAttribute("uv",new dn([0,2,0,0,2,0],2));class $u{constructor(e){this._mesh=new Ln(Wp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BP)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const GP={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class VP extends Yr{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,o=i.aspect!==void 0?i.aspect:n.aspect,l=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new en(1,1,{minFilter:Qt,magFilter:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new hr,this.materialDepth.depthPacking=Zs,this.materialDepth.blending=cn;const d=GP,h=Bn.clone(d.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=r,h.aspect.value=o,h.aperture.value=l,h.maxblur.value=a,h.nearClip.value=n.near,h.farClip.value=n.far,this.materialBokeh=new Lt({defines:Object.assign({},d.defines),uniforms:h,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new $u(this.materialBokeh),this._oldClearColor=new Ke}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,n){this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Ya={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Uh extends Yr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bn.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $u(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class h0 extends Yr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class HP extends Yr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class WP{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ne);this._width=i.width,this._height=i.height,n=new en(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uh(Ya),this.clock=new mP}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const a=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}h0!==void 0&&(l instanceof h0?i=!0:l instanceof HP&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jP extends Yr{constructor(e,n,i,r,o){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Fc={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ne(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Vt},cameraInverseProjectionMatrix:{value:new Vt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},br={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Ne(512,512)},sampleUvOffsets:{value:[new Ne(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},Tu={createSampleWeights:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(XP(i,e));return n},createSampleOffsets:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(e.clone().multiplyScalar(i));return n},configure:function(t,e,n,i){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=Tu.createSampleOffsets(e,i),t.uniforms.sampleWeights.value=Tu.createSampleWeights(e,n),t.needsUpdate=!0}};function XP(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Dd={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class Oh extends Yr{constructor(e,n,i=!1,r=!1,o=new Ne(256,256)){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Ke,this._oldClearColor=new Ke,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ne(o.x,o.y),this.saoRenderTarget=new en(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new en(this.resolution.x,this.resolution.y,{minFilter:Qt,magFilter:Qt}),this.depthRenderTarget=this.normalRenderTarget.clone();let l;this.supportsDepthTextureExtension&&(l=new nx,l.type=Up,this.beautyRenderTarget.depthTexture=l,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new hr,this.depthMaterial.depthPacking=Zs,this.depthMaterial.blending=cn,this.normalMaterial=new ox,this.normalMaterial.blending=cn,this.saoMaterial=new Lt({defines:Object.assign({},Fc.defines),fragmentShader:Fc.fragmentShader,vertexShader:Fc.vertexShader,uniforms:Bn.clone(Fc.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=cn,this.vBlurMaterial=new Lt({uniforms:Bn.clone(br.uniforms),defines:Object.assign({},br.defines),vertexShader:br.vertexShader,fragmentShader:br.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=cn,this.hBlurMaterial=new Lt({uniforms:Bn.clone(br.uniforms),defines:Object.assign({},br.defines),vertexShader:br.vertexShader,fragmentShader:br.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=cn,this.materialCopy=new Lt({uniforms:Bn.clone(Ya.uniforms),vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader,blending:cn}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=fl,this.materialCopy.blendSrc=O_,this.materialCopy.blendDst=Ah,this.materialCopy.blendEquation=or,this.materialCopy.blendSrcAlpha=U_,this.materialCopy.blendDstAlpha=Ah,this.materialCopy.blendEquationAlpha=or,this.depthCopy=new Lt({uniforms:Bn.clone(Dd.uniforms),vertexShader:Dd.vertexShader,fragmentShader:Dd.fragmentShader,blending:cn}),this.fsQuad=new $u(null)}render(e,n,i){if(this.renderToScreen&&(this.materialCopy.blending=cn,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Tu.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(0,1)),Tu.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let l=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,l=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?l.blending=fl:l.blending=cn,this.renderPass(e,l,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}renderOverride(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,o=n.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}setSize(e,n){this.beautyRenderTarget.setSize(e,n),this.saoRenderTarget.setSize(e,n),this.blurIntermediateRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.depthRenderTarget.setSize(e,n),this.saoMaterial.uniforms.size.value.set(e,n),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,n),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,n),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}Oh.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const YP={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ys extends Yr{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new en(o,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new en(o,l);v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new en(o,l);_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),o=Math.round(o/2),l=Math.round(l/2)}const a=YP;this.highPassUniforms=Bn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new Ne(o,l),o=Math.round(o/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=Ya;this.copyUniforms=Bn.clone(m.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:Ch,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ke,this.oldClearAlpha=1,this.basic=new wo,this.fsQuad=new $u(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Ne(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[d].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ys.BlurDirectionX=new Ne(1,0);Ys.BlurDirectionY=new Ne(0,1);const qP={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},$P={uniforms:{tDiffuse:{value:null},resolution:{value:new Ne}},vertexShader:`

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

		}`},KP=Math.PI/180;function ZP(t){return t*KP}const QP={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},JP={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new Y}},vertexShader:`

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

		}`},eR={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},tR={uniforms:{vSunPositionScreenSpace:{value:new Y},fAspect:{value:1},sunColor:{value:new Ke(16772608)},bgColor:{value:new Ke(0)}},vertexShader:`

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

		}`};class nR extends Yr{constructor(e,n,i={}){super(),this.scene=e,this.camera=n,this.orthoScene=new rx,this.orthoCamera=new ju(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new Dt,this.sunPosition=i.sunPosition||new Y(0,1e3,1e3),this.screenSpacePosition=new Y,this.rtTextureDepth=new en(1,1),this.rtTextureDepthMask=new en(1,1),this.rtTextureGodRays1=new en(1,1),this.rtTextureGodRays2=new en(1,1),this.materialDepth=new hr;const r=QP;this.godrayMaskUniforms=Bn.clone(r.uniforms),this.materialGodraysDepthMask=new Lt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=JP;this.godrayGenUniforms=Bn.clone(o.uniforms),this.materialGodraysGenerate=new Lt({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const l=eR;this.godrayCombineUniforms=Bn.clone(l.uniforms),this.materialGodraysCombine=new Lt({uniforms:this.godrayCombineUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader});const a=tR;this.godraysFakeSunUniforms=Bn.clone(a.uniforms),this.materialGodraysFakeSun=new Lt({uniforms:this.godraysFakeSunUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Ln(new bl(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,n,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=n,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,n,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(n),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,n){this.rtTextureDepth.setSize(e,n),this.rtTextureDepthMask.setSize(e,n);const i=e*this.multiplier,r=n*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var _x=`/* BEGIN HEADER */
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
}`,iR=`/* BEGIN INCLUDE */

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
/* END INCLUDE */`;const rR=_x.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],p0=_x.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],oR=iR.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],En=(t,e)=>{t=t.clone(),t.vertexColors=![hr,Lt,ox,Xs].find(n=>t instanceof n),t._rt=e,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let n=4;n<=e.dimensions;n++)t.uniforms[`fov${n}`]={value:90};return t.onBeforeCompile=n=>{const{dimensions:i,projection:r}=t._rt,o=[`#define DIMENSIONS ${i}`,`#define PROJECTION ${fx.indexOf(r)}`];Object.assign(n.uniforms,t.uniforms),t instanceof wo?n.vertexShader=n.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof hr||t instanceof Xs?n.vertexShader=n.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof Lt&&(n.vertexShader=n.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",p0+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),n.vertexShader=[...o,rR,oR,n.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",p0)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}`,t},sR=()=>{const t=new ix;t.autoClear=!1,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const e=new zn(90,window.innerWidth/window.innerHeight,.01,100);e.position.set(0,0,-1),e.up.set(0,1,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const n=new rx;e.updateProjectionMatrix(),n.add(e);const i=new zP(e,t.domElement);i.target.set(0,0,0),i.minDistance=0,i.maxDistance=100,i.addEventListener("change",()=>r.render()),i.update(),i.enabled=!1,t.domElement.addEventListener("dblclick",()=>{i.position0.set(0,0,i.position0.z===-1?-.25:-1,0,0),i.reset()});const r=new WP(t);r.setPixelRatio(window.devicePixelRatio);const o=new jP(n,e);return r.addPass(o),{composer:r,camera:e,scene:n,orbitControls:i}},m0=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=ji[t.ambiance],{dimensions:i}=t,r=new Yu(1,32,32),o=new Bp().copy(r),l=i>4?9:i;o.setAttribute("instancePosition",new fi(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceTarget",new fi(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceCentroid",new fi(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceColor",new fi(new Float32Array(t.maxVertices*3),3));const a=new Ln(o,En(n.vertexMaterial,t));o.attributes.instanceTarget.array.fill(NaN),o.attributes.instanceCentroid.array.fill(NaN),a.geometry.instanceCount=0,a.frustumCulled=!1,a.customDepthMaterial=En(new hr({depthPacking:Zs}),t),a.customDistanceMaterial=En(new Xs,t),a.castShadow=n.shadow,a.name="instanced-vertex",a.visible=t.showVertices,t.scene.add(a)},v0=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=ji[t.ambiance],{dimensions:i,curve:r,segments:o}=t,l=r?o:1,a=new kp(1,1,1,8,l,!0),d=new Bp().copy(a),h=i>4?9:i;d.setAttribute("instancePosition",new fi(new Float32Array(t.maxEdges*h),h)),d.setAttribute("instanceTarget",new fi(new Float32Array(t.maxEdges*h),h)),d.setAttribute("instanceCentroid",new fi(new Float32Array(t.maxEdges*h),h)),d.setAttribute("instanceColor",new fi(new Float32Array(t.maxEdges*3),3));const m=new Ln(d,En(n.edgeMaterial,t));d.attributes.instanceCentroid.array.fill(NaN),m.geometry.instanceCount=0,m.frustumCulled=!1,m.customDepthMaterial=En(new hr({depthPacking:Zs}),t),m.customDistanceMaterial=En(new Xs,t),m.castShadow=n.shadow,m.name="instanced-edge",m.visible=t.showEdges,t.scene.add(m)},aR=t=>{let e=t.scene.getObjectByName("instanced-face");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=ji[t.ambiance],{dimensions:i,curve:r,segments:o}=t,l=new mi,a=[],d=[],h=[],m=[],g=r?o:1,v=1/g;for(let M=0;M<g+1;M++)for(let p=0;p<M+1;p++)d.push((2*p-M)*v/2,M*v,0),h.push(0,0,1),m.push(v*p,1-v*M);for(let M=1;M<g+1;M++)for(let p=0;p<M;p++){const E=M*(M+1)/2+p,w=M*(M-1)/2+p;if(a.push(w,E,E+1),M<g){const L=(M+1)*(M+2)/2+p;a.push(L+1,E+1,E)}}l.setIndex(a),l.setAttribute("position",new dn(d,3)),l.setAttribute("normal",new dn(h,3)),l.setAttribute("uv",new dn(m,2));const _=new Bp().copy(l),T=i>4?9:i;_.setAttribute("instanceCentroid",new fi(new Float32Array(t.maxFaces*T),T)),_.setAttribute("instancePosition",new fi(new Float32Array(t.maxFaces*T),T)),_.setAttribute("instanceTarget",new fi(new Float32Array(t.maxFaces*T),T)),_.setAttribute("instanceColor",new fi(new Float32Array(t.maxFaces*3),3));const b=new Ln(_,En(n.faceMaterial,t));b.geometry.instanceCount=0,b.frustumCulled=!1,b.customDepthMaterial=En(new hr({depthPacking:Zs}),t),b.customDistanceMaterial=En(new Xs,t),b.name="instanced-face",b.visible=t.showFaces,b.renderOrder=1,t.scene.add(b)},lR=(t,e=null)=>{const n=ji[t.ambiance],i=t.scene.getObjectByName("instanced-vertex"),r=i.geometry.attributes.instancePosition.array,{dimensions:o}=t;let l=e?e[0]:0,a=e?e[1]:t.vertices.length;const d=o>4?9:o;i.geometry.instanceCount=a;for(let h=l;h<a;h++){const m=t.vertices[h];for(let _=0;_<o;_++)r[h*d+_]=m.vertex[_];const g=i.geometry.attributes.instanceColor.array,v=n.color(m,"vertex",o);g[h*3+0]=v.r,g[h*3+1]=v.g,g[h*3+2]=v.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},cR=(t,e=null)=>{const n=ji[t.ambiance],i=t.scene.getObjectByName("instanced-edge"),r=i.geometry.attributes.instancePosition.array,o=i.geometry.attributes.instanceTarget.array,{dimensions:l}=t;let a=e?e[0]:0,d=e?e[1]:t.edges.length;const h=l>4?9:l;i.geometry.instanceCount=d;for(let m=a;m<d;m++){const g=t.edges[m],v=t.vertices[g.start].vertex,_=t.vertices[g.end].vertex;for(let M=0;M<l;M++)r[m*h+M]=v[M],o[m*h+M]=_[M];const T=i.geometry.attributes.instanceColor.array,b=n.color(g,"edge",l);T[m*3+0]=b.r,T[m*3+1]=b.g,T[m*3+2]=b.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},uR=(t,e=null)=>{const n=ji[t.ambiance],i=t.scene.getObjectByName("instanced-face"),r=i.geometry.attributes.instanceCentroid.array,o=i.geometry.attributes.instancePosition.array,l=i.geometry.attributes.instanceTarget.array,{dimensions:a}=t;let d=e?e[0]:0,h=e?e[1]:t.faces.length,m=0;for(let v=0;v<d;v++){const _=t.faces[v].vertices.length;m+=_===3?1:_}const g=a>4?9:a;for(let v=d;v<h;v++){const _=t.faces[v];if(_.vertices.length<3)continue;let T=[];if(_.vertices.length===3)T.push(_.vertices.map(b=>t.vertices[b].vertex));else{const b=new Array(a).fill(0);for(let M=0;M<_.vertices.length;M++){const p=t.vertices[_.vertices[M]].vertex;for(let E=0;E<a;E++)b[E]+=p[E]}for(let M=0;M<a;M++)b[M]/=_.vertices.length;for(let M=0;M<_.vertices.length;M++)T.push([b,t.vertices[_.vertices[M]].vertex,t.vertices[_.vertices[(M+1)%_.vertices.length]].vertex])}for(let b=0;b<T.length;b++){let[M,p,E]=T[b];_.word.length%2===(t.curvature>0?0:1)&&([p,E]=[E,p]);for(let P=0;P<a;P++)r[m*g+P]=M[P],o[m*g+P]=p[P],l[m*g+P]=E[P];const w=i.geometry.attributes.instanceColor.array,L=n.color(_,"face",a);w[m*3+0]=L.r,w[m*3+1]=L.g,w[m*3+2]=L.b,m++}}i.geometry.instanceCount=m,i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceCentroid.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},Ld=(t,e)=>{const n=t.scene.getObjectByName(`instanced-${e}`);n.visible=t[e==="vertex"?"showVertices":e==="edge"?"showEdges":"showFaces"]},Ts=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const n=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]],faces:[t.ranges[0].faces[0],t.ranges[t.currentOrder-1].faces[1]]};t.scene.getObjectByName("instanced-vertex").visible&&lR(t,n.vertices),t.scene.getObjectByName("instanced-edge").visible&&cR(t,n.edges),t.scene.getObjectByName("instanced-face").visible&&uR(t,n.faces),t.composer.render(),document.title=`Honeyball^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges, ${t.faces.length} faces`},fR=(t,e,n)=>{e.fov=n,e.updateProjectionMatrix(),t.render()},dR=(t,e,n)=>{const i=t.renderer.getDrawingBufferSize(new Ne),r=new en(i.width,i.height,{samples:e?n:0});t.reset(r),t.render()},hR=t=>{const e=ji[t.ambiance],{scene:n,composer:i,camera:r}=t,o=t.scene.getObjectByName("instanced-vertex"),l=t.scene.getObjectByName("instanced-edge"),a=t.scene.getObjectByName("instanced-face");o.material=En(e.vertexMaterial,t),l.material=En(e.edgeMaterial,t),a.material=En(e.faceMaterial,t),e.env?n.environment=e.env:n.environment=null,typeof e.background!="number"?n.background=e.background:(n.background=null,i.renderer.setClearColor(new Ke(e.background),1));const d=[];n.traverse(v=>{v.isLight&&d.push(v)}),d.forEach(v=>{v.parent.remove(v)});let h=n.getObjectByName("ground");h&&(h.geometry.dispose(),h.material.dispose(),n.remove(h)),e.shadow&&(i.renderer.shadowMap.type=Dp,e.ground==="sphere"?h=new Ln(new Yu(20,32,32),new ws({color:16777215,side:Un,depthWrite:!1})):e.ground==="plane"&&(h=new Ln(new bl(1e3,1e3),new ws({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),h.rotation.x=-Math.PI/2,h.position.y=-3),h.name="ground",h.receiveShadow=!0,n.add(h)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=I_,o.castShadow=e.shadow,l.castShadow=e.shadow;const m=e.shadow?v=>{v.shadow&&(v.castShadow=!0,v.shadow.mapSize.width=2048,v.shadow.mapSize.height=2048,v.shadow.camera.near=r.near,v.shadow.camera.far=r.far,v.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(v=>{m(v),n.add(v)}),(e.cameraLights||[]).forEach(v=>{m(v),r.add(v)});const g=e.fx||["copy"];i.renderer.toneMapping=g.includes("bloom")?N_:Hi,i.renderer.toneMappingExposure=g.includes("bloom")?1.5:1,i.passes.slice(1).forEach(v=>{i.removePass(v),v.dispose()}),g.forEach(v=>{if(v==="copy")i.addPass(i.copyPass);else if(v==="sao"){const _=new Oh(n,r,!1,!0);_.depthMaterial=En(_.depthMaterial,t),_.normalMaterial=En(_.normalMaterial,t),_.params.output=Oh.OUTPUT.Default,_.params.saoBias=-.5,_.params.saoIntensity=.175,_.params.saoScale=10,_.params.saoKernelRadius=50,_.params.saoMinResolution=0,_.params.saoBlur=!0,_.params.saoBlurRadius=8,_.params.saoBlurStdDev=4,_.params.saoBlurDepthCutoff=.01,i.addPass(_)}else if(v==="bokeh"){const _=new VP(n,r,{focus:.5,aperture:.005,maxblur:.005});_.materialDepth=En(_.materialDepth,t),i.addPass(_)}else if(v==="sobel"){const _=new Uh(qP);i.addPass(_);const T=new Uh($P);T.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,T.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(T)}else if(v==="bloom"){const _=new Ys(new Ne(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(_)}else if(v==="godray"){const _=new nR(n,r);_.materialDepth=En(_.materialDepth,t),i.addPass(_)}}),xx(t),i.render()},xx=t=>{const{composer:e,scene:n,dimensions:i,curvature:r,projection:o,vertexThickness:l,edgeThickness:a}=t,d=t.curve?t.segments:1,h=n.getObjectByName("instanced-vertex"),m=n.getObjectByName("instanced-edge"),g=n.getObjectByName("instanced-face"),v=_=>{if(_!=null&&_._rt){_.uniforms.curvature.value=r,_.uniforms.vertexThickness.value=l,_.uniforms.edgeThickness.value=a,_.needsUpdate=i!==_._rt.dimensions||o!==_._rt.projection,_._rt=t,_.uniforms.segments.value=d;for(let T=4;T<=i;T++)_.uniforms[`fov${T}`]||(_.uniforms[`fov${T}`]={value:1}),_.uniforms[`fov${T}`].value=gP(ZP(t[`fov${T}`])*.5)}};v(h.material),v(m.material),v(g.material),e.passes.forEach(_=>Object.values(_).filter(T=>T==null?void 0:T.isMaterial).forEach(T=>v(T))),v(h.customDepthMaterial),v(h.customDistanceMaterial),v(m.customDepthMaterial),v(m.customDistanceMaterial),v(g.customDepthMaterial),v(g.customDistanceMaterial)},fo=(t,e,n)=>{for(let i=0;i<e.length;i++){const{vertex:r}=e[i];mx(r,t,n)}},vl=(t,e,n)=>{for(let i=0;i<e.length;i++){const{vertex:r}=e[i];bP(r,t)}},gl=(t,e,n)=>{for(let i=0;i<e.length;i++){const{vertex:r}=e[i];CP(r,t,n)}},pR=(t,e,n,i,r)=>{const o=window.innerWidth/2,l=window.innerHeight/2,a=Math.min(o,l)*.9;if(t.ctrlKey)vl(-t.dx/(2*a),n),gl(-t.dy/(2*a),n,i);else{const d=-t.dx/o,h=-t.dy/l,m=new Array(e).fill(0);!r&&t.shiftKey?r=1:!r&&t.altKey?r=2:!r&&t.ctrKey?r=3:!r&&t.metaKey&&(r=4),m[r*2]=d,m[r*2+1]=h,fo(m,n,i)}},mR=(t,e,n,i)=>{vl(ml*t.da/180,e),gl(t.ds,e,n)},vR=(t,e,n)=>{const{code:i}=t;if(t.target!==document.body)return;const r=.01;if(i==="ArrowLeft"||i==="KeyA")fo([-r,0,0,0],e,n);else if(i==="ArrowRight"||i==="KeyD")fo([r,0,0,0],e,n);else if(i==="ArrowUp"||i==="KeyW")fo([0,0,-r,0],e,n);else if(i==="ArrowDown"||i==="KeyS")fo([0,0,r,0],e,n);else if(i==="PageUp"||i==="KeyQ")fo([0,-r,0,0],e,n);else if(i==="PageDown"||i==="KeyE")fo([0,r,0,0],e,n);else if(i==="Digit1")vl(-(ml*5)/180,e);else if(i==="Digit3")vl(ml*5/180,e);else if(i==="KeyZ")gl(-r,e,n);else if(i==="KeyC")gl(r,e,n);else return;return!0},gR=(t,e,n,i)=>{const r=window.innerWidth/2,o=window.innerHeight/2,l=Math.min(r,o)*.9,a=10*(t.deltaMode===1?t.deltaY*10:t.deltaY)/l;t.shiftKey===!!i?vl(ml*a/180,e):gl(-a/100,e,n)},yR=t=>{nt.useLayoutEffect(()=>{const e=kP(t.composer.renderer.domElement).draggable({listeners:{move:n=>{t.controls==="free"&&(pR(n,t.dimensions,t.vertices,t.curvature,t.controlsShift),Ts(t))}}}).gesturable({onmove:n=>{t.controls==="free"&&(mR(n,t.vertices,t.curvature,t.controlsShift),Ts(t))}});return()=>{e.unset()}},[t]),nt.useEffect(()=>{const e=n=>{t.controls!=="orbit"&&(gR(n,t.vertices,t.curvature,t.controlsShift),Ts(t))};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e)},[t]),nt.useEffect(()=>{const e=n=>{vR(n,t.vertices,t.curvature,t.controlsShift)&&Ts(t)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])};function _R({runtime:t}){return yR(t),null}const xR=t=>{const{camera:e,composer:n}=t,i=1,r=window.innerWidth*i,o=window.innerHeight*i,l=n.renderer.domElement;if(l.width!==r||l.height!==o){e.aspect=r/o,e.zoom=Math.min(1,r/o),e.updateProjectionMatrix(),n.renderer.setSize(r,o),n.setSize(r,o);const a=n.renderer.getPixelRatio();n.setPixelRatio(a);const d=r*a,h=o*a;n.passes.forEach(m=>{var g,v;if((v=(g=m.material)==null?void 0:g.uniforms)!=null&&v.resolution){let _=d,T=h;m.material.uniforms.resolution.value.x<=1&&(_=1/_,T=1/T),m.material.uniforms.resolution.value.x=_,m.material.uniforms.resolution.value.y=T}m.resolution&&(m.resolution=new Ne(r,o))}),l.style.width=r+"px",l.style.height=o+"px"}n.render()},SR=t=>{nt.useEffect(()=>{t.orbitControls.enabled=t.controls==="orbit"},[t.controls,t.orbitControls]),nt.useEffect(()=>{dR(t.composer,t.msaa,t.msaaSamples)},[t.msaa,t.msaaSamples,t.composer]),nt.useEffect(()=>{fR(t.composer,t.camera,t.fov3)},[t.fov3,t.camera,t.composer]),nt.useEffect(()=>{m0(t),v0(t),aR(t)},[t.dimensions,t.curve,t.segments]),nt.useEffect(()=>{t.vertices.length&&(console.warn(`Extending vertex buffer to ${t.vertices.length}`),m0(t))},[t.maxVertices]),nt.useEffect(()=>{t.edges.length&&(console.warn(`Extending edge buffer to ${t.edges.length}`),v0(t))},[t.maxEdges]),nt.useEffect(()=>{hR(t)},[t.ambiance]),nt.useEffect(()=>{xx(t),t.composer.render()},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges]),nt.useEffect(()=>{Ld(t,"vertex"),Ld(t,"edge"),Ld(t,"face")},[t.showVertices,t.showEdges,t.showFaces]),nt.useEffect(()=>{t.currentOrder<0||Ts(t,t.currentOrder-1)},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges,t.showFaces]),nt.useEffect(()=>{Ts(t)},[t.ambiance,t.showVertices,t.showEdges,t.showFaces,t.maxVertices,t.maxEdges,t.curve,t.segments]),nt.useEffect(()=>{const e=()=>{xR(t)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[t])};function MR({runtime:t}){return SR(t),null}function ER({runtime:t,setRuntime:e}){window.rt=t,OP(t,e);const n=nt.useCallback(i=>{e(r=>({...r,renderError:i.message}))},[e]);return Me.jsx(Me.Fragment,{children:Me.jsxs(NP,{error:t.renderError,onError:n,children:[Me.jsx(MR,{runtime:t}),Me.jsx(_R,{runtime:t})]})})}function g0(){return Me.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:Me.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:"1",stroke:"currentColor"})})}const Id=6,kc=14,y0={active:Me.jsxs(Me.Fragment,{children:[Me.jsx("circle",{cx:"16",cy:"16",r:kc}),Me.jsx("circle",{cx:"16",cy:"16",r:Id,fill:"currentColor"})]}),inactive:Me.jsx(Me.Fragment,{children:Me.jsx("circle",{cx:"16",cy:"16",r:Id,fill:"currentColor"})}),snub:Me.jsx(Me.Fragment,{children:Me.jsx("circle",{cx:"16",cy:"16",r:kc})}),holosnub:Me.jsxs(Me.Fragment,{children:[Me.jsx("circle",{cx:"16",cy:"16",r:kc}),Me.jsx("circle",{cx:"16",cy:"16",r:Id})]}),custom:Me.jsxs(Me.Fragment,{children:[Me.jsx("circle",{cx:"16",cy:"16",r:kc}),Me.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]})};function wR({index:t,value:e,extended:n,onChange:i}){const r=e===0?"inactive":e===1?"active":e==="s"?"snub":e==="h"?"holosnub":"custom",o=()=>{const l=Object.keys(y0),a=l.indexOf(r),d=n?l[(a+1)%l.length]:r==="active"?"inactive":"active",h={active:1,inactive:0,snub:"s",holosnub:"h",custom:.5}[d];i(t,h)};return Me.jsxs("div",{className:"coxeter-node",children:[Me.jsx("svg",{className:`coxeter-graphic ${r}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",onClick:o,children:y0[r]}),r==="custom"&&Me.jsx("input",{type:"number",value:e,min:"0",step:".1",onChange:l=>i(t,l.target.value)})]})}function TR({i:t,j:e,value:n,stellation:i,onChange:r}){return Me.jsxs("div",{className:"coxeter-value"+(typeof i<"u"?" stellated":""),children:[Me.jsx("input",{type:"number",name:`coxeter-${t}-${e}`,min:"2",step:"1",value:n,onChange:r}),typeof i<"u"&&Me.jsxs("div",{children:[Me.jsx("span",{className:"stellation-divisor",children:"/"}),Me.jsx("input",{type:"number",className:"stellation",name:`stellation-${t}-${e}`,min:"1",step:"1",value:i,onChange:r})]})]})}function bR({params:t,runtime:e,onChange:n,onExtend:i,onControls:r,onStellated:o,onMirrorChange:l}){const[a,d]=nt.useState(!0),h=nt.useCallback(()=>d(g=>!g),[]),m=nt.useCallback(g=>{let{name:v,checked:_,type:T,value:b}=g.target;T==="checkbox"?b=_:T==="number"&&b&&!isNaN(b)&&(b=+b,g.target.min&&(b=cx(b,+g.target.min)),g.target.max&&(b=lx(b,+g.target.max)),g.target.step&&(b=yP(b/+g.target.step)*+g.target.step)),n(v,b)},[n]);return Me.jsxs("div",{className:e.error?"error":"",title:e.error,children:[Me.jsxs("button",{className:"control-indicator",onClick:r,children:[e.controls==="orbit"?"⇹":"↭",e.controls==="free"?Me.jsx("sup",{children:e.controlsShift+1}):null]}),Me.jsxs("button",{className:`space-indicator${e.processing?" processing":""}`,onClick:h,children:[e.curvature===0?"𝔼":e.curvature>0?"𝕊":"ℍ",Me.jsx("sup",{children:e.dimensions-1}),e.currentOrder<e.order?Me.jsxs("sub",{children:[e.currentOrder,"/",e.order]}):null]}),a&&Me.jsxs("aside",{className:"controls",children:[(t.extended||t.grouper!=="")&&Me.jsxs("label",{children:["Grouper",Me.jsx("select",{name:"grouper",value:t.grouper,onChange:m,children:MP.map(g=>Me.jsx("option",{value:g,children:g===""?t.grouper===""?`Auto [${e.grouper.replace(/^auto-/,"")}]`:"Auto":g.replace(/_/g," ").replace(/./,v=>v.toUpperCase())},g))})]}),(t.extended||e.grouper.replace(/^auto-/,"")==="knuthbendix"||e.curvature<=0)&&Me.jsxs("label",{children:["Order",Me.jsx("input",{type:"number",name:"order",min:"1",step:"1",value:t.order,onChange:m})]}),Me.jsxs("label",{children:["Segments",Me.jsx("input",{type:"checkbox",name:"curve",checked:t.curve,onChange:m}),t.curve?Me.jsx("input",{type:"number",name:"segments",min:"1",step:"1",value:t.segments,onChange:m}):null]}),Me.jsxs("label",{children:["Dimensions",Me.jsx("input",{type:"number",name:"dimensions",min:"2",max:"9",step:"1",value:t.dimensions,onChange:m})]}),Me.jsxs("label",{children:["Projection",Me.jsx("select",{name:"projection",value:t.projection,onChange:m,children:fx.map(g=>Me.jsx("option",{value:g,children:g.replace(/_/g," ").replace(/./,v=>v.toUpperCase())},g))})]}),Me.jsxs("label",{children:["Vertices",Me.jsx("input",{type:"checkbox",name:"showVertices",checked:t.showVertices,onChange:m}),t.showVertices?Me.jsx("input",{type:"number",name:"vertexThickness",min:"0",step:"1",value:t.vertexThickness,onChange:m}):null]}),Me.jsxs("label",{children:["Edges",Me.jsx("input",{type:"checkbox",name:"showEdges",checked:t.showEdges,onChange:m}),t.showEdges?Me.jsx("input",{type:"number",name:"edgeThickness",min:"0",step:"1",value:t.edgeThickness,onChange:m}):null]}),e.grouper.replace(/^auto-/,"")==="toddcoxeter"&&Me.jsxs("label",{children:["Faces",Me.jsx("input",{type:"checkbox",name:"showFaces",checked:t.showFaces,onChange:m})]}),Me.jsxs("label",{children:["Ambiance",Me.jsx("select",{name:"ambiance",value:t.ambiance,onChange:m,children:(t.extended?Object.keys(ji):Object.entries(ji).filter(([g,{extended:v}])=>!v).map(([g])=>g)).map(g=>Me.jsx("option",{value:g,children:g.replace(/_/g," ").replace(/./,v=>v.toUpperCase())},g))})]})]}),a&&Me.jsxs("aside",{className:"view",children:[Me.jsxs("label",{children:["MSAA",Me.jsx("input",{type:"checkbox",name:"msaa",checked:t.msaa,onChange:m}),t.msaa?Me.jsx("input",{type:"number",name:"msaaSamples",min:"0",step:"1",value:t.msaaSamples,onChange:m}):null]}),Me.jsxs("label",{children:["FOV3",Me.jsx("input",{type:"number",name:"fov3",min:"0",step:"1",value:t.fov3,onChange:m})]}),t.dimensions>3?[...Array(t.dimensions-3).keys()].map(g=>Me.jsxs("label",{children:["FOV",g+4,Me.jsx("input",{type:"number",name:`fov${g+4}`,step:"1",value:t[`fov${g+4}`],onChange:m})]},g)):null]}),a&&Me.jsxs("aside",{className:"coxeters",children:[Me.jsx("div",{className:"coxeter-matrix",children:[...Array(t.dimensions).keys()].map(g=>Me.jsxs(nt.Fragment,{children:[g>0&&Me.jsx("div",{className:"coxeter-column",children:[...Array(g).keys()].map(v=>(t.extended||g===v+1)&&Me.jsx(TR,{i:g,j:v,value:t.coxeter[g][v],stellation:t.stellated?t.stellation[g][v]:void 0,onChange:m},`${g}x${v}`))}),g>0&&Me.jsx(g0,{}),Me.jsx(wR,{index:g,value:t.mirrors[g],extended:t.extended,onChange:l}),g<t.dimensions-1&&Me.jsx(g0,{})]},g))}),Me.jsxs("div",{className:"coxeter-toggles",children:[Me.jsx("button",{className:"button",onClick:o,title:"stellated",children:t.stellated?"⋇":"÷"}),Me.jsx("button",{className:"button",onClick:i,title:"extended mode",children:t.extended?"▲":"▼"})]})]})]})}function CR({gl:t,params:e,updateParams:n}){const[i,r]=nt.useState(()=>({...e,...t,currentOrder:-1,askedOrder:null,curvature:0,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],faces:[],maxVertices:3e4,maxEdges:5e4,maxFaces:5e4,processing:!0,error:null,renderError:null}));nt.useEffect(()=>{r(m=>({...m,...dx({order:e.order,controls:e.controls,controlsShift:e.controlsShift,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,curve:e.curve,segments:e.segments,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellated:e.stellated,stellation:e.stellation})}))},[e.order,e.ambiance,e.controls,e.controlsShift,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.showEdges,e.showFaces,e.showVertices,e.stellated,e.stellation,e.vertexThickness]),nt.useEffect(()=>{r(m=>e.grouper===""&&m.grouper.startsWith("auto-")?m:{...m,grouper:e.grouper})},[e.grouper]);const o=nt.useCallback(()=>{let m,g;const v=_P(e.dimensions/2)-1;e.controls==="orbit"?(m="free",g=0):e.controlsShift>=v?(m="orbit",g=0):(m="free",g=e.controlsShift+1),n({controls:m,controlsShift:g})},[e.controls,e.controlsShift,e.dimensions,n]),l=nt.useCallback(()=>{const m={extended:!e.extended};if(!e.extended)for(let g=0;g<e.dimensions;g++)for(let v=0;v<g-1;v++)e.coxeter[g][v]=2,e.coxeter[v][g]=2;n(m)},[e.extended,e.dimensions,e.coxeter,n]),a=nt.useCallback(()=>{n({stellated:!e.stellated})},[e.stellated,n]),d=nt.useCallback((m,g)=>{const v={};if(m==="dimensions"&&g){v.coxeter=new Array(g).fill().map(()=>new Array(g).fill(2)),v.stellation=new Array(g).fill().map(()=>new Array(g).fill(1)),v.mirrors=new Array(g).fill(0);for(let _=0;_<lx(e.coxeter.length,g);_++){for(let T=0;T<_;T++)v.coxeter[_][T]=e.coxeter[_][T],v.coxeter[T][_]=e.coxeter[T][_];v.mirrors[_]=e.mirrors[_]}for(let _=0;_<g;_++)v.coxeter[_][_]=-1;for(let _=4;_<=g;_++)e[`fov${_}`]||(v[`fov${_}`]=_===4?90:45)}if(m.startsWith("coxeter")){const[_,T]=m.split("-").slice(1).map(M=>+M),b=e.coxeter.map(M=>M.slice());b[_][T]=g,b[T][_]=g,m="coxeter",g=b}if(m.startsWith("stellation")){const[_,T]=m.split("-").slice(1).map(M=>+M),b=e.stellation.map(M=>M.slice());b[_][T]=g,b[T][_]=g,m="stellation",g=b}v[m]=g,n(v)},[e,n]),h=nt.useCallback((m,g)=>{const v=e.mirrors.slice();v[m]=g,n({mirrors:v})},[e.mirrors,n]);return Me.jsxs("div",{className:i.error||i.renderError?"error":"",title:i.error||i.renderError,children:[Me.jsx(bR,{runtime:i,params:e,onChange:d,onExtend:l,onControls:o,onStellated:a,onMirrorChange:h}),Me.jsx(ER,{runtime:i,setRuntime:r})]})}const Sx=sR();Object.assign(window,Sx);const _0=(t=null)=>{const{location:e}=window;if(e.hash)try{return JSON.parse(atob(e.hash.slice(1)))}catch(n){console.warn(n),e.hash=""}return t},AR=t=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(t)))},PR=()=>{const[t,e]=nt.useState(_0(wu)),n=nt.useCallback(()=>{const r=_0();r&&e(r)},[]),i=nt.useCallback(r=>{const o={...t,...r};e(o),!(Object.keys(dx(o)).length<Object.keys(wu).length)&&AR(o)},[t]);return nt.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),Me.jsx(CR,{gl:Sx,params:t,updateParams:i})};Ud.createRoot(document.getElementById("root")).render(Me.jsx(PR,{}));
