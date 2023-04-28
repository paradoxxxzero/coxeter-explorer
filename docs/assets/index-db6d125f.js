(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function GS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v0={exports:{}},bc={},g0={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),VS=Symbol.for("react.portal"),HS=Symbol.for("react.fragment"),WS=Symbol.for("react.strict_mode"),jS=Symbol.for("react.profiler"),XS=Symbol.for("react.provider"),YS=Symbol.for("react.context"),qS=Symbol.for("react.forward_ref"),$S=Symbol.for("react.suspense"),KS=Symbol.for("react.memo"),ZS=Symbol.for("react.lazy"),Rm=Symbol.iterator;function QS(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,x0={};function js(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||_0}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S0(){}S0.prototype=js.prototype;function Nh(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||_0}var Fh=Nh.prototype=new S0;Fh.constructor=Nh;y0(Fh,js.prototype);Fh.isPureReactComponent=!0;var Dm=Array.isArray,M0=Object.prototype.hasOwnProperty,kh={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)M0.call(e,i)&&!E0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var d=Array(a),h=0;h<a;h++)d[h]=arguments[h+2];r.children=d}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:t,key:o,ref:l,props:r,_owner:kh.current}}function JS(t,e){return{$$typeof:ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ml}function eM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lm=/\/+/g;function Tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eM(""+t.key):e.toString(36)}function Fu(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case ml:case VS:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+Tf(l,0):i,Dm(r)?(n="",t!=null&&(n=t.replace(Lm,"$&/")+"/"),Fu(r,e,n,"",function(h){return h})):r!=null&&(zh(r)&&(r=JS(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Lm,"$&/")+"/")+t)),e.push(r)),1;if(l=0,i=i===""?".":i+":",Dm(t))for(var a=0;a<t.length;a++){o=t[a];var d=i+Tf(o,a);l+=Fu(o,e,n,d,r)}else if(d=QS(t),typeof d=="function")for(t=d.call(t),a=0;!(o=t.next()).done;)o=o.value,d=i+Tf(o,a++),l+=Fu(o,e,n,d,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Zl(t,e,n){if(t==null)return t;var i=[],r=0;return Fu(t,i,"","",function(o){return e.call(n,o,r++)}),i}function tM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var In={current:null},ku={transition:null},nM={ReactCurrentDispatcher:In,ReactCurrentBatchConfig:ku,ReactCurrentOwner:kh};ft.Children={map:Zl,forEach:function(t,e,n){Zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zl(t,function(){e++}),e},toArray:function(t){return Zl(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=js;ft.Fragment=HS;ft.Profiler=jS;ft.PureComponent=Nh;ft.StrictMode=WS;ft.Suspense=$S;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nM;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y0({},t.props),r=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)M0.call(e,d)&&!E0.hasOwnProperty(d)&&(i[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){a=Array(d);for(var h=0;h<d;h++)a[h]=arguments[h+2];i.children=a}return{$$typeof:ml,type:t.type,key:r,ref:o,props:i,_owner:l}};ft.createContext=function(t){return t={$$typeof:YS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XS,_context:t},t.Consumer=t};ft.createElement=w0;ft.createFactory=function(t){var e=w0.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:qS,render:t}};ft.isValidElement=zh;ft.lazy=function(t){return{$$typeof:ZS,_payload:{_status:-1,_result:t},_init:tM}};ft.memo=function(t,e){return{$$typeof:KS,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=ku.transition;ku.transition={};try{t()}finally{ku.transition=e}};ft.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ft.useCallback=function(t,e){return In.current.useCallback(t,e)};ft.useContext=function(t){return In.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return In.current.useDeferredValue(t)};ft.useEffect=function(t,e){return In.current.useEffect(t,e)};ft.useId=function(){return In.current.useId()};ft.useImperativeHandle=function(t,e,n){return In.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return In.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return In.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return In.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return In.current.useReducer(t,e,n)};ft.useRef=function(t){return In.current.useRef(t)};ft.useState=function(t){return In.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return In.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return In.current.useTransition()};ft.version="18.2.0";g0.exports=ft;var at=g0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iM=at,rM=Symbol.for("react.element"),oM=Symbol.for("react.fragment"),sM=Object.prototype.hasOwnProperty,aM=iM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lM={key:!0,ref:!0,__self:!0,__source:!0};function T0(t,e,n){var i,r={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)sM.call(e,i)&&!lM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:rM,type:t,key:o,ref:l,props:r,_owner:aM.current}}bc.Fragment=oM;bc.jsx=T0;bc.jsxs=T0;v0.exports=bc;var Ve=v0.exports,Ud={},b0={exports:{}},Jn={},C0={exports:{}},A0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,J){var ne=X.length;X.push(J);e:for(;0<ne;){var we=ne-1>>>1,ve=X[we];if(0<r(ve,J))X[we]=J,X[ne]=ve,ne=we;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var J=X[0],ne=X.pop();if(ne!==J){X[0]=ne;e:for(var we=0,ve=X.length,oe=ve>>>1;we<oe;){var q=2*(we+1)-1,Me=X[q],Ee=q+1,H=X[Ee];if(0>r(Me,ne))Ee<ve&&0>r(H,Me)?(X[we]=H,X[Ee]=ne,we=Ee):(X[we]=Me,X[q]=ne,we=q);else if(Ee<ve&&0>r(H,ne))X[we]=H,X[Ee]=ne,we=Ee;else break e}}return J}function r(X,J){var ne=X.sortIndex-J.sortIndex;return ne!==0?ne:X.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],h=[],m=1,_=null,g=3,y=!1,b=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(X){for(var J=n(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=X)i(h),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(h)}}function L(X){if(T=!1,x(X),!b)if(n(d)!==null)b=!0,ue(P);else{var J=n(h);J!==null&&pe(L,J.startTime-X)}}function P(X,J){b=!1,T&&(T=!1,p(z),z=-1),y=!0;var ne=g;try{for(x(J),_=n(d);_!==null&&(!(_.expirationTime>J)||X&&!ae());){var we=_.callback;if(typeof we=="function"){_.callback=null,g=_.priorityLevel;var ve=we(_.expirationTime<=J);J=t.unstable_now(),typeof ve=="function"?_.callback=ve:_===n(d)&&i(d),x(J)}else i(d);_=n(d)}if(_!==null)var oe=!0;else{var q=n(h);q!==null&&pe(L,q.startTime-J),oe=!1}return oe}finally{_=null,g=ne,y=!1}}var I=!1,B=null,z=-1,R=5,N=-1;function ae(){return!(t.unstable_now()-N<R)}function fe(){if(B!==null){var X=t.unstable_now();N=X;var J=!0;try{J=B(!0,X)}finally{J?$():(I=!1,B=null)}}else I=!1}var $;if(typeof w=="function")$=function(){w(fe)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,j=te.port2;te.port1.onmessage=fe,$=function(){j.postMessage(null)}}else $=function(){E(fe,0)};function ue(X){B=X,I||(I=!0,$())}function pe(X,J){z=E(function(){X(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){b||y||(b=!0,ue(P))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(X){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var ne=g;g=J;try{return X()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,J){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=g;g=X;try{return J()}finally{g=ne}},t.unstable_scheduleCallback=function(X,J,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,X){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ne+ve,X={id:m++,callback:J,priorityLevel:X,startTime:ne,expirationTime:ve,sortIndex:-1},ne>we?(X.sortIndex=ne,e(h,X),n(d)===null&&X===n(h)&&(T?(p(z),z=-1):T=!0,pe(L,ne-we))):(X.sortIndex=ve,e(d,X),b||y||(b=!0,ue(P))),X},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(X){var J=g;return function(){var ne=g;g=J;try{return X.apply(this,arguments)}finally{g=ne}}}})(A0);C0.exports=A0;var uM=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=at,Qn=uM;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,ja={};function Ro(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(ja[t]=e,t=0;t<e.length;t++)R0.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,cM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Im={},Um={};function fM(t){return Od.call(Um,t)?!0:Od.call(Im,t)?!1:cM.test(t)?Um[t]=!0:(Im[t]=!0,!1)}function dM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hM(t,e,n,i){if(e===null||typeof e>"u"||dM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Un(t,e,n,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gn[t]=new Un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gn[e]=new Un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gn[t]=new Un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gn[t]=new Un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gn[t]=new Un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gn[t]=new Un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gn[t]=new Un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gn[t]=new Un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gn[t]=new Un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,Gh);gn[e]=new Un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,Gh);gn[e]=new Un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,Gh);gn[e]=new Un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gn[t]=new Un(t,1,!1,t.toLowerCase(),null,!1,!1)});gn.xlinkHref=new Un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gn[t]=new Un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hM(e,n,r,i)&&(n=null),i||r===null?fM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fr=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Nd=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),Om=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var zt=Object.assign,bf;function Aa(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var Cf=!1;function Af(t,e){if(!t||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){i=h}t.call(e.prototype)}else{try{throw Error()}catch(h){i=h}t()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var d=`
`+r[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Aa(t):""}function pM(t){switch(t.tag){case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return t=Af(t.type,!1),t;case 11:return t=Af(t.type.render,!1),t;case 1:return t=Af(t.type,!0),t;default:return""}}function zd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case Nd:return"Profiler";case Hh:return"StrictMode";case Fd:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L0:return(t.displayName||"Context")+".Consumer";case D0:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:zd(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return zd(t(e))}catch{}}return null}function mM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vM(t){var e=U0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=vM(t))}function O0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=U0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bd(t,e){var n=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function Gd(t,e){N0(t,e);var n=kr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vd(t,e,n){(e!=="number"||Zu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Pa(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function F0(t,e){var n=kr(e.value),i=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eu,z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gM=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){gM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function B0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function G0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=B0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _M=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jd(t,e){if(e){if(_M[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function Xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function Xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qd=null,ws=null,Ts=null;function Bm(t){if(t=_l(t)){if(typeof qd!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=Dc(e),qd(t.stateNode,t.type,e))}}function V0(t){ws?Ts?Ts.push(t):Ts=[t]:ws=t}function H0(){if(ws){var t=ws,e=Ts;if(Ts=ws=null,Bm(t),e)for(t=0;t<e.length;t++)Bm(e[t])}}function W0(t,e){return t(e)}function j0(){}var Pf=!1;function X0(t,e,n){if(Pf)return t(e,n);Pf=!0;try{return W0(t,e,n)}finally{Pf=!1,(ws!==null||Ts!==null)&&(j0(),H0())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=Dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var $d=!1;if(ar)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){$d=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{$d=!1}function yM(t,e,n,i,r,o,l,a,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var Ua=!1,Qu=null,Ju=!1,Kd=null,xM={onError:function(t){Ua=!0,Qu=t}};function SM(t,e,n,i,r,o,l,a,d){Ua=!1,Qu=null,yM.apply(xM,arguments)}function MM(t,e,n,i,r,o,l,a,d){if(SM.apply(this,arguments),Ua){if(Ua){var h=Qu;Ua=!1,Qu=null}else throw Error(Se(198));Ju||(Ju=!0,Kd=h)}}function Do(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gm(t){if(Do(t)!==t)throw Error(Se(188))}function EM(t){var e=t.alternate;if(!e){if(e=Do(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Gm(r),t;if(o===i)return Gm(r),e;o=o.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===n){l=!0,n=r,i=o;break}if(a===i){l=!0,i=r,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,i=r;break}if(a===i){l=!0,i=o,n=r;break}a=a.sibling}if(!l)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function q0(t){return t=EM(t),t!==null?$0(t):null}function $0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$0(t);if(e!==null)return e;t=t.sibling}return null}var K0=Qn.unstable_scheduleCallback,Vm=Qn.unstable_cancelCallback,wM=Qn.unstable_shouldYield,TM=Qn.unstable_requestPaint,Wt=Qn.unstable_now,bM=Qn.unstable_getCurrentPriorityLevel,Yh=Qn.unstable_ImmediatePriority,Z0=Qn.unstable_UserBlockingPriority,ec=Qn.unstable_NormalPriority,CM=Qn.unstable_LowPriority,Q0=Qn.unstable_IdlePriority,Cc=null,zi=null;function AM(t){if(zi&&typeof zi.onCommitFiberRoot=="function")try{zi.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var bi=Math.clz32?Math.clz32:DM,PM=Math.log,RM=Math.LN2;function DM(t){return t>>>=0,t===0?32:31-(PM(t)/RM|0)|0}var tu=64,nu=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~r;a!==0?i=Ra(a):(o&=l,o!==0&&(i=Ra(o)))}else l=n&~r,l!==0?i=Ra(l):o!==0&&(i=Ra(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bi(e),r=1<<n,i|=t[n],e&=~r;return i}function LM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-bi(o),a=1<<l,d=r[l];d===-1?(!(a&n)||a&i)&&(r[l]=LM(a,e)):d<=e&&(t.expiredLanes|=a),o&=~a}}function Zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J0(){var t=tu;return tu<<=1,!(tu&4194240)&&(tu=64),t}function Rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bi(e),t[e]=n}function UM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var St=0;function e_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t_,$h,n_,i_,r_,Qd=!1,iu=[],Rr=null,Dr=null,Lr=null,qa=new Map,$a=new Map,Tr=[],OM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function va(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=_l(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function NM(t,e,n,i,r){switch(e){case"focusin":return Rr=va(Rr,t,e,n,i,r),!0;case"dragenter":return Dr=va(Dr,t,e,n,i,r),!0;case"mouseover":return Lr=va(Lr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return qa.set(o,va(qa.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,$a.set(o,va($a.get(o)||null,t,e,n,i,r)),!0}return!1}function o_(t){var e=fo(t.target);if(e!==null){var n=Do(e);if(n!==null){if(e=n.tag,e===13){if(e=Y0(n),e!==null){t.blockedOn=e,r_(t.priority,function(){n_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yd=i,n.target.dispatchEvent(i),Yd=null}else return e=_l(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function Wm(t,e,n){zu(t)&&n.delete(e)}function FM(){Qd=!1,Rr!==null&&zu(Rr)&&(Rr=null),Dr!==null&&zu(Dr)&&(Dr=null),Lr!==null&&zu(Lr)&&(Lr=null),qa.forEach(Wm),$a.forEach(Wm)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Qd||(Qd=!0,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,FM)))}function Ka(t){function e(r){return ga(r,t)}if(0<iu.length){ga(iu[0],t);for(var n=1;n<iu.length;n++){var i=iu[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Rr!==null&&ga(Rr,t),Dr!==null&&ga(Dr,t),Lr!==null&&ga(Lr,t),qa.forEach(e),$a.forEach(e),n=0;n<Tr.length;n++)i=Tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)o_(n),n.blockedOn===null&&Tr.shift()}var bs=fr.ReactCurrentBatchConfig,nc=!0;function kM(t,e,n,i){var r=St,o=bs.transition;bs.transition=null;try{St=1,Kh(t,e,n,i)}finally{St=r,bs.transition=o}}function zM(t,e,n,i){var r=St,o=bs.transition;bs.transition=null;try{St=4,Kh(t,e,n,i)}finally{St=r,bs.transition=o}}function Kh(t,e,n,i){if(nc){var r=Jd(t,e,n,i);if(r===null)Bf(t,e,i,ic,n),Hm(t,i);else if(NM(r,t,e,n,i))i.stopPropagation();else if(Hm(t,i),e&4&&-1<OM.indexOf(t)){for(;r!==null;){var o=_l(r);if(o!==null&&t_(o),o=Jd(t,e,n,i),o===null&&Bf(t,e,i,ic,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Bf(t,e,i,null,n)}}var ic=null;function Jd(t,e,n,i){if(ic=null,t=Xh(i),t=fo(t),t!==null)if(e=Do(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ic=t,null}function s_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bM()){case Yh:return 1;case Z0:return 4;case ec:case CM:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var Ar=null,Zh=null,Bu=null;function a_(){if(Bu)return Bu;var t,e=Zh,n=e.length,i,r="value"in Ar?Ar.value:Ar.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===r[o-i];i++);return Bu=r.slice(t,1<i?1-i:void 0)}function Gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ru(){return!0}function jm(){return!1}function ei(t){function e(n,i,r,o,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ru:jm,this.isPropagationStopped=jm,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=ei(Xs),gl=zt({},Xs,{view:0,detail:0}),BM=ei(gl),Df,Lf,_a,Ac=zt({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(Df=t.screenX-_a.screenX,Lf=t.screenY-_a.screenY):Lf=Df=0,_a=t),Df)},movementY:function(t){return"movementY"in t?t.movementY:Lf}}),Xm=ei(Ac),GM=zt({},Ac,{dataTransfer:0}),VM=ei(GM),HM=zt({},gl,{relatedTarget:0}),If=ei(HM),WM=zt({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),jM=ei(WM),XM=zt({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YM=ei(XM),qM=zt({},Xs,{data:0}),Ym=ei(qM),$M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZM[t])?!!e[t]:!1}function Jh(){return QM}var JM=zt({},gl,{key:function(t){if(t.key){var e=$M[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?Gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eE=ei(JM),tE=zt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qm=ei(tE),nE=zt({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),iE=ei(nE),rE=zt({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=ei(rE),sE=zt({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aE=ei(sE),lE=[9,13,27,32],ep=ar&&"CompositionEvent"in window,Oa=null;ar&&"documentMode"in document&&(Oa=document.documentMode);var uE=ar&&"TextEvent"in window&&!Oa,l_=ar&&(!ep||Oa&&8<Oa&&11>=Oa),$m=String.fromCharCode(32),Km=!1;function u_(t,e){switch(t){case"keyup":return lE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function cE(t,e){switch(t){case"compositionend":return c_(e);case"keypress":return e.which!==32?null:(Km=!0,$m);case"textInput":return t=e.data,t===$m&&Km?null:t;default:return null}}function fE(t,e){if(cs)return t==="compositionend"||!ep&&u_(t,e)?(t=a_(),Bu=Zh=Ar=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l_&&e.locale!=="ko"?null:e.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dE[t.type]:e==="textarea"}function f_(t,e,n,i){V0(i),e=rc(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Na=null,Za=null;function hE(t){M_(t,0)}function Pc(t){var e=hs(t);if(O0(e))return t}function pE(t,e){if(t==="change")return e}var d_=!1;if(ar){var Uf;if(ar){var Of="oninput"in document;if(!Of){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Of=typeof Qm.oninput=="function"}Uf=Of}else Uf=!1;d_=Uf&&(!document.documentMode||9<document.documentMode)}function Jm(){Na&&(Na.detachEvent("onpropertychange",h_),Za=Na=null)}function h_(t){if(t.propertyName==="value"&&Pc(Za)){var e=[];f_(e,Za,t,Xh(t)),X0(hE,e)}}function mE(t,e,n){t==="focusin"?(Jm(),Na=e,Za=n,Na.attachEvent("onpropertychange",h_)):t==="focusout"&&Jm()}function vE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(Za)}function gE(t,e){if(t==="click")return Pc(e)}function _E(t,e){if(t==="input"||t==="change")return Pc(e)}function yE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pi=typeof Object.is=="function"?Object.is:yE;function Qa(t,e){if(Pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Od.call(e,r)||!Pi(t[r],e[r]))return!1}return!0}function ev(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tv(t,e){var n=ev(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ev(n)}}function p_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m_(){for(var t=window,e=Zu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zu(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xE(t){var e=m_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p_(n.ownerDocument.documentElement,n)){if(i!==null&&tp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=tv(n,o);var l=tv(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SE=ar&&"documentMode"in document&&11>=document.documentMode,fs=null,eh=null,Fa=null,th=!1;function nv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;th||fs==null||fs!==Zu(i)||(i=fs,"selectionStart"in i&&tp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fa&&Qa(Fa,i)||(Fa=i,i=rc(eh,"onSelect"),0<i.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Nf={},v_={};ar&&(v_=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Rc(t){if(Nf[t])return Nf[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v_)return Nf[t]=e[n];return t}var g_=Rc("animationend"),__=Rc("animationiteration"),y_=Rc("animationstart"),x_=Rc("transitionend"),S_=new Map,iv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){S_.set(t,e),Ro(e,[t])}for(var Ff=0;Ff<iv.length;Ff++){var kf=iv[Ff],ME=kf.toLowerCase(),EE=kf[0].toUpperCase()+kf.slice(1);Vr(ME,"on"+EE)}Vr(g_,"onAnimationEnd");Vr(__,"onAnimationIteration");Vr(y_,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(x_,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);Ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function rv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,MM(i,e,void 0,t),t.currentTarget=null}function M_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var a=i[l],d=a.instance,h=a.currentTarget;if(a=a.listener,d!==o&&r.isPropagationStopped())break e;rv(r,a,h),o=d}else for(l=0;l<i.length;l++){if(a=i[l],d=a.instance,h=a.currentTarget,a=a.listener,d!==o&&r.isPropagationStopped())break e;rv(r,a,h),o=d}}}if(Ju)throw t=Kd,Ju=!1,Kd=null,t}function Rt(t,e){var n=e[sh];n===void 0&&(n=e[sh]=new Set);var i=t+"__bubble";n.has(i)||(E_(e,t,2,!1),n.add(i))}function zf(t,e,n){var i=0;e&&(i|=4),E_(n,t,i,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[su]){t[su]=!0,R0.forEach(function(n){n!=="selectionchange"&&(wE.has(n)||zf(n,!1,t),zf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[su]||(e[su]=!0,zf("selectionchange",!1,e))}}function E_(t,e,n,i){switch(s_(e)){case 1:var r=kM;break;case 4:r=zM;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!$d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;l=l.return}for(;a!==null;){if(l=fo(a),l===null)return;if(d=l.tag,d===5||d===6){i=o=l;continue e}a=a.parentNode}}i=i.return}X0(function(){var h=o,m=Xh(n),_=[];e:{var g=S_.get(t);if(g!==void 0){var y=Qh,b=t;switch(t){case"keypress":if(Gu(n)===0)break e;case"keydown":case"keyup":y=eE;break;case"focusin":b="focus",y=If;break;case"focusout":b="blur",y=If;break;case"beforeblur":case"afterblur":y=If;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=VM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=iE;break;case g_:case __:case y_:y=jM;break;case x_:y=oE;break;case"scroll":y=BM;break;case"wheel":y=aE;break;case"copy":case"cut":case"paste":y=YM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qm}var T=(e&4)!==0,E=!T&&t==="scroll",p=T?g!==null?g+"Capture":null:g;T=[];for(var w=h,x;w!==null;){x=w;var L=x.stateNode;if(x.tag===5&&L!==null&&(x=L,p!==null&&(L=Ya(w,p),L!=null&&T.push(el(w,L,x)))),E)break;w=w.return}0<T.length&&(g=new y(g,b,null,n,m),_.push({event:g,listeners:T}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==Yd&&(b=n.relatedTarget||n.fromElement)&&(fo(b)||b[lr]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=h,b=b?fo(b):null,b!==null&&(E=Do(b),b!==E||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=h),y!==b)){if(T=Xm,L="onMouseLeave",p="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(T=qm,L="onPointerLeave",p="onPointerEnter",w="pointer"),E=y==null?g:hs(y),x=b==null?g:hs(b),g=new T(L,w+"leave",y,n,m),g.target=E,g.relatedTarget=x,L=null,fo(m)===h&&(T=new T(p,w+"enter",b,n,m),T.target=x,T.relatedTarget=E,L=T),E=L,y&&b)t:{for(T=y,p=b,w=0,x=T;x;x=Vo(x))w++;for(x=0,L=p;L;L=Vo(L))x++;for(;0<w-x;)T=Vo(T),w--;for(;0<x-w;)p=Vo(p),x--;for(;w--;){if(T===p||p!==null&&T===p.alternate)break t;T=Vo(T),p=Vo(p)}T=null}else T=null;y!==null&&ov(_,g,y,T,!1),b!==null&&E!==null&&ov(_,E,b,T,!0)}}e:{if(g=h?hs(h):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var P=pE;else if(Zm(g))if(d_)P=_E;else{P=vE;var I=mE}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=gE);if(P&&(P=P(t,h))){f_(_,P,n,m);break e}I&&I(t,g,h),t==="focusout"&&(I=g._wrapperState)&&I.controlled&&g.type==="number"&&Vd(g,"number",g.value)}switch(I=h?hs(h):window,t){case"focusin":(Zm(I)||I.contentEditable==="true")&&(fs=I,eh=h,Fa=null);break;case"focusout":Fa=eh=fs=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,nv(_,n,m);break;case"selectionchange":if(SE)break;case"keydown":case"keyup":nv(_,n,m)}var B;if(ep)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else cs?u_(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(l_&&n.locale!=="ko"&&(cs||z!=="onCompositionStart"?z==="onCompositionEnd"&&cs&&(B=a_()):(Ar=m,Zh="value"in Ar?Ar.value:Ar.textContent,cs=!0)),I=rc(h,z),0<I.length&&(z=new Ym(z,t,null,n,m),_.push({event:z,listeners:I}),B?z.data=B:(B=c_(n),B!==null&&(z.data=B)))),(B=uE?cE(t,n):fE(t,n))&&(h=rc(h,"onBeforeInput"),0<h.length&&(m=new Ym("onBeforeInput","beforeinput",null,n,m),_.push({event:m,listeners:h}),m.data=B))}M_(_,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ya(t,n),o!=null&&i.unshift(el(t,o,r)),o=Ya(t,e),o!=null&&i.push(el(t,o,r))),t=t.return}return i}function Vo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ov(t,e,n,i,r){for(var o=e._reactName,l=[];n!==null&&n!==i;){var a=n,d=a.alternate,h=a.stateNode;if(d!==null&&d===i)break;a.tag===5&&h!==null&&(a=h,r?(d=Ya(n,o),d!=null&&l.unshift(el(n,d,a))):r||(d=Ya(n,o),d!=null&&l.push(el(n,d,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var TE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function sv(t){return(typeof t=="string"?t:""+t).replace(TE,`
`).replace(bE,"")}function au(t,e,n){if(e=sv(e),sv(t)!==e&&n)throw Error(Se(425))}function oc(){}var nh=null,ih=null;function rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(t){return av.resolve(null).then(t).catch(PE)}:oh;function PE(t){setTimeout(function(){throw t})}function Gf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ka(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ka(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ys,tl="__reactProps$"+Ys,lr="__reactContainer$"+Ys,sh="__reactEvents$"+Ys,RE="__reactListeners$"+Ys,DE="__reactHandles$"+Ys;function fo(t){var e=t[ki];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[ki]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lv(t);t!==null;){if(n=t[ki])return n;t=lv(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[ki]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function Dc(t){return t[tl]||null}var ah=[],ps=-1;function Hr(t){return{current:t}}function It(t){0>ps||(t.current=ah[ps],ah[ps]=null,ps--)}function Ct(t,e){ps++,ah[ps]=t.current,t.current=e}var zr={},wn=Hr(zr),Gn=Hr(!1),Mo=zr;function Us(t,e){var n=t.type.contextTypes;if(!n)return zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Vn(t){return t=t.childContextTypes,t!=null}function sc(){It(Gn),It(wn)}function uv(t,e,n){if(wn.current!==zr)throw Error(Se(168));Ct(wn,e),Ct(Gn,n)}function w_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,mM(t)||"Unknown",r));return zt({},n,i)}function ac(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,Mo=wn.current,Ct(wn,t),Ct(Gn,Gn.current),!0}function cv(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=w_(t,e,Mo),i.__reactInternalMemoizedMergedChildContext=t,It(Gn),It(wn),Ct(wn,t)):It(Gn),Ct(Gn,n)}var tr=null,Lc=!1,Vf=!1;function T_(t){tr===null?tr=[t]:tr.push(t)}function LE(t){Lc=!0,T_(t)}function Wr(){if(!Vf&&tr!==null){Vf=!0;var t=0,e=St;try{var n=tr;for(St=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}tr=null,Lc=!1}catch(r){throw tr!==null&&(tr=tr.slice(t+1)),K0(Yh,Wr),r}finally{St=e,Vf=!1}}return null}var ms=[],vs=0,lc=null,uc=0,si=[],ai=0,Eo=null,ir=1,rr="";function oo(t,e){ms[vs++]=uc,ms[vs++]=lc,lc=t,uc=e}function b_(t,e,n){si[ai++]=ir,si[ai++]=rr,si[ai++]=Eo,Eo=t;var i=ir;t=rr;var r=32-bi(i)-1;i&=~(1<<r),n+=1;var o=32-bi(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,ir=1<<32-bi(e)+r|n<<r|i,rr=o+t}else ir=1<<o|n<<r|i,rr=t}function np(t){t.return!==null&&(oo(t,1),b_(t,1,0))}function ip(t){for(;t===lc;)lc=ms[--vs],ms[vs]=null,uc=ms[--vs],ms[vs]=null;for(;t===Eo;)Eo=si[--ai],si[ai]=null,rr=si[--ai],si[ai]=null,ir=si[--ai],si[ai]=null}var Zn=null,Kn=null,Ut=!1,Mi=null;function C_(t,e){var n=ci(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Eo!==null?{id:ir,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ci(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zn=t,Kn=null,!0):!1;default:return!1}}function lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(Ut){var e=Kn;if(e){var n=e;if(!fv(t,e)){if(lh(t))throw Error(Se(418));e=Ir(n.nextSibling);var i=Zn;e&&fv(t,e)?C_(i,n):(t.flags=t.flags&-4097|2,Ut=!1,Zn=t)}}else{if(lh(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Ut=!1,Zn=t}}}function dv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zn=t}function lu(t){if(t!==Zn)return!1;if(!Ut)return dv(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rh(t.type,t.memoizedProps)),e&&(e=Kn)){if(lh(t))throw A_(),Error(Se(418));for(;e;)C_(t,e),e=Ir(e.nextSibling)}if(dv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kn=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kn=null}}else Kn=Zn?Ir(t.stateNode.nextSibling):null;return!0}function A_(){for(var t=Kn;t;)t=Ir(t.nextSibling)}function Os(){Kn=Zn=null,Ut=!1}function rp(t){Mi===null?Mi=[t]:Mi.push(t)}var IE=fr.ReactCurrentBatchConfig;function xi(t,e){if(t&&t.defaultProps){e=zt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cc=Hr(null),fc=null,gs=null,op=null;function sp(){op=gs=fc=null}function ap(t){var e=cc.current;It(cc),t._currentValue=e}function ch(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){fc=t,op=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zn=!0),t.firstContext=null)}function di(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(fc===null)throw Error(Se(308));gs=t,fc.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var ho=null;function lp(t){ho===null?ho=[t]:ho.push(t)}function P_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,lp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ur(t,i)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ur(t,n)}return r=i.interleaved,r===null?(e.next=e,lp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ur(t,n)}function Vu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function hv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dc(t,e,n,i){var r=t.updateQueue;wr=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var d=a,h=d.next;d.next=null,l===null?o=h:l.next=h,l=d;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=h:a.next=h,m.lastBaseUpdate=d))}if(o!==null){var _=r.baseState;l=0,m=h=d=null,a=o;do{var g=a.lane,y=a.eventTime;if((i&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=t,T=a;switch(g=e,y=n,T.tag){case 1:if(b=T.payload,typeof b=="function"){_=b.call(y,_,g);break e}_=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=T.payload,g=typeof b=="function"?b.call(y,_,g):b,g==null)break e;_=zt({},_,g);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=r.effects,g===null?r.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(h=m=y,d=_):m=m.next=y,l|=g;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;g=a,a=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(1);if(m===null&&(d=_),r.baseState=d,r.firstBaseUpdate=h,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);To|=l,t.lanes=l,t.memoizedState=_}}function pv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var D_=new P0.Component().refs;function fh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:zt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?Do(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Rn(),r=Nr(t),o=or(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ur(t,o,r),e!==null&&(Ci(e,t,r,i),Vu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Rn(),r=Nr(t),o=or(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ur(t,o,r),e!==null&&(Ci(e,t,r,i),Vu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rn(),i=Nr(t),r=or(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ur(t,r,i),e!==null&&(Ci(e,t,i,n),Vu(e,t,i))}};function mv(t,e,n,i,r,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,i)||!Qa(r,o):!0}function L_(t,e,n){var i=!1,r=zr,o=e.contextType;return typeof o=="object"&&o!==null?o=di(o):(r=Vn(e)?Mo:wn.current,i=e.contextTypes,o=(i=i!=null)?Us(t,r):zr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function vv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function dh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=D_,up(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=di(o):(o=Vn(e)?Mo:wn.current,r.context=Us(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fh(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ic.enqueueReplaceState(r,r.state,null),dc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var a=r.refs;a===D_&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function uu(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gv(t){var e=t._init;return e(t._payload)}function I_(t){function e(p,w){if(t){var x=p.deletions;x===null?(p.deletions=[w],p.flags|=16):x.push(w)}}function n(p,w){if(!t)return null;for(;w!==null;)e(p,w),w=w.sibling;return null}function i(p,w){for(p=new Map;w!==null;)w.key!==null?p.set(w.key,w):p.set(w.index,w),w=w.sibling;return p}function r(p,w){return p=Fr(p,w),p.index=0,p.sibling=null,p}function o(p,w,x){return p.index=x,t?(x=p.alternate,x!==null?(x=x.index,x<w?(p.flags|=2,w):x):(p.flags|=2,w)):(p.flags|=1048576,w)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,w,x,L){return w===null||w.tag!==6?(w=$f(x,p.mode,L),w.return=p,w):(w=r(w,x),w.return=p,w)}function d(p,w,x,L){var P=x.type;return P===us?m(p,w,x.props.children,L,x.key):w!==null&&(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Er&&gv(P)===w.type)?(L=r(w,x.props),L.ref=ya(p,w,x),L.return=p,L):(L=qu(x.type,x.key,x.props,null,p.mode,L),L.ref=ya(p,w,x),L.return=p,L)}function h(p,w,x,L){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=Kf(x,p.mode,L),w.return=p,w):(w=r(w,x.children||[]),w.return=p,w)}function m(p,w,x,L,P){return w===null||w.tag!==7?(w=_o(x,p.mode,L,P),w.return=p,w):(w=r(w,x),w.return=p,w)}function _(p,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=$f(""+w,p.mode,x),w.return=p,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:return x=qu(w.type,w.key,w.props,null,p.mode,x),x.ref=ya(p,null,w),x.return=p,x;case ls:return w=Kf(w,p.mode,x),w.return=p,w;case Er:var L=w._init;return _(p,L(w._payload),x)}if(Pa(w)||pa(w))return w=_o(w,p.mode,x,null),w.return=p,w;uu(p,w)}return null}function g(p,w,x,L){var P=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(p,w,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:return x.key===P?d(p,w,x,L):null;case ls:return x.key===P?h(p,w,x,L):null;case Er:return P=x._init,g(p,w,P(x._payload),L)}if(Pa(x)||pa(x))return P!==null?null:m(p,w,x,L,null);uu(p,x)}return null}function y(p,w,x,L,P){if(typeof L=="string"&&L!==""||typeof L=="number")return p=p.get(x)||null,a(w,p,""+L,P);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ql:return p=p.get(L.key===null?x:L.key)||null,d(w,p,L,P);case ls:return p=p.get(L.key===null?x:L.key)||null,h(w,p,L,P);case Er:var I=L._init;return y(p,w,x,I(L._payload),P)}if(Pa(L)||pa(L))return p=p.get(x)||null,m(w,p,L,P,null);uu(w,L)}return null}function b(p,w,x,L){for(var P=null,I=null,B=w,z=w=0,R=null;B!==null&&z<x.length;z++){B.index>z?(R=B,B=null):R=B.sibling;var N=g(p,B,x[z],L);if(N===null){B===null&&(B=R);break}t&&B&&N.alternate===null&&e(p,B),w=o(N,w,z),I===null?P=N:I.sibling=N,I=N,B=R}if(z===x.length)return n(p,B),Ut&&oo(p,z),P;if(B===null){for(;z<x.length;z++)B=_(p,x[z],L),B!==null&&(w=o(B,w,z),I===null?P=B:I.sibling=B,I=B);return Ut&&oo(p,z),P}for(B=i(p,B);z<x.length;z++)R=y(B,p,z,x[z],L),R!==null&&(t&&R.alternate!==null&&B.delete(R.key===null?z:R.key),w=o(R,w,z),I===null?P=R:I.sibling=R,I=R);return t&&B.forEach(function(ae){return e(p,ae)}),Ut&&oo(p,z),P}function T(p,w,x,L){var P=pa(x);if(typeof P!="function")throw Error(Se(150));if(x=P.call(x),x==null)throw Error(Se(151));for(var I=P=null,B=w,z=w=0,R=null,N=x.next();B!==null&&!N.done;z++,N=x.next()){B.index>z?(R=B,B=null):R=B.sibling;var ae=g(p,B,N.value,L);if(ae===null){B===null&&(B=R);break}t&&B&&ae.alternate===null&&e(p,B),w=o(ae,w,z),I===null?P=ae:I.sibling=ae,I=ae,B=R}if(N.done)return n(p,B),Ut&&oo(p,z),P;if(B===null){for(;!N.done;z++,N=x.next())N=_(p,N.value,L),N!==null&&(w=o(N,w,z),I===null?P=N:I.sibling=N,I=N);return Ut&&oo(p,z),P}for(B=i(p,B);!N.done;z++,N=x.next())N=y(B,p,z,N.value,L),N!==null&&(t&&N.alternate!==null&&B.delete(N.key===null?z:N.key),w=o(N,w,z),I===null?P=N:I.sibling=N,I=N);return t&&B.forEach(function(fe){return e(p,fe)}),Ut&&oo(p,z),P}function E(p,w,x,L){if(typeof x=="object"&&x!==null&&x.type===us&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:e:{for(var P=x.key,I=w;I!==null;){if(I.key===P){if(P=x.type,P===us){if(I.tag===7){n(p,I.sibling),w=r(I,x.props.children),w.return=p,p=w;break e}}else if(I.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Er&&gv(P)===I.type){n(p,I.sibling),w=r(I,x.props),w.ref=ya(p,I,x),w.return=p,p=w;break e}n(p,I);break}else e(p,I);I=I.sibling}x.type===us?(w=_o(x.props.children,p.mode,L,x.key),w.return=p,p=w):(L=qu(x.type,x.key,x.props,null,p.mode,L),L.ref=ya(p,w,x),L.return=p,p=L)}return l(p);case ls:e:{for(I=x.key;w!==null;){if(w.key===I)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(p,w.sibling),w=r(w,x.children||[]),w.return=p,p=w;break e}else{n(p,w);break}else e(p,w);w=w.sibling}w=Kf(x,p.mode,L),w.return=p,p=w}return l(p);case Er:return I=x._init,E(p,w,I(x._payload),L)}if(Pa(x))return b(p,w,x,L);if(pa(x))return T(p,w,x,L);uu(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(p,w.sibling),w=r(w,x),w.return=p,p=w):(n(p,w),w=$f(x,p.mode,L),w.return=p,p=w),l(p)):n(p,w)}return E}var Ns=I_(!0),U_=I_(!1),yl={},Bi=Hr(yl),nl=Hr(yl),il=Hr(yl);function po(t){if(t===yl)throw Error(Se(174));return t}function cp(t,e){switch(Ct(il,e),Ct(nl,t),Ct(Bi,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wd(e,t)}It(Bi),Ct(Bi,e)}function Fs(){It(Bi),It(nl),It(il)}function O_(t){po(il.current);var e=po(Bi.current),n=Wd(e,t.type);e!==n&&(Ct(nl,t),Ct(Bi,n))}function fp(t){nl.current===t&&(It(Bi),It(nl))}var Ft=Hr(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hf=[];function dp(){for(var t=0;t<Hf.length;t++)Hf[t]._workInProgressVersionPrimary=null;Hf.length=0}var Hu=fr.ReactCurrentDispatcher,Wf=fr.ReactCurrentBatchConfig,wo=0,kt=null,Zt=null,cn=null,pc=!1,ka=!1,rl=0,UE=0;function _n(){throw Error(Se(321))}function hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pi(t[n],e[n]))return!1;return!0}function pp(t,e,n,i,r,o){if(wo=o,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=t===null||t.memoizedState===null?kE:zE,t=n(i,r),ka){o=0;do{if(ka=!1,rl=0,25<=o)throw Error(Se(301));o+=1,cn=Zt=null,e.updateQueue=null,Hu.current=BE,t=n(i,r)}while(ka)}if(Hu.current=mc,e=Zt!==null&&Zt.next!==null,wo=0,cn=Zt=kt=null,pc=!1,e)throw Error(Se(300));return t}function mp(){var t=rl!==0;return rl=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?kt.memoizedState=cn=t:cn=cn.next=t,cn}function hi(){if(Zt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var e=cn===null?kt.memoizedState:cn.next;if(e!==null)cn=e,Zt=t;else{if(t===null)throw Error(Se(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},cn===null?kt.memoizedState=cn=t:cn=cn.next=t}return cn}function ol(t,e){return typeof e=="function"?e(t):e}function jf(t){var e=hi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Zt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,d=null,h=o;do{var m=h.lane;if((wo&m)===m)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:t(i,h.action);else{var _={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(a=d=_,l=i):d=d.next=_,kt.lanes|=m,To|=m}h=h.next}while(h!==null&&h!==o);d===null?l=i:d.next=a,Pi(i,e.memoizedState)||(zn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=d,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,kt.lanes|=o,To|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xf(t){var e=hi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do o=t(o,l.action),l=l.next;while(l!==r);Pi(o,e.memoizedState)||(zn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function N_(){}function F_(t,e){var n=kt,i=hi(),r=e(),o=!Pi(i.memoizedState,r);if(o&&(i.memoizedState=r,zn=!0),i=i.queue,vp(B_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||cn!==null&&cn.memoizedState.tag&1){if(n.flags|=2048,sl(9,z_.bind(null,n,i,r,e),void 0,null),fn===null)throw Error(Se(349));wo&30||k_(n,e,r)}return r}function k_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z_(t,e,n,i){e.value=n,e.getSnapshot=i,G_(e)&&V_(t)}function B_(t,e,n){return n(function(){G_(e)&&V_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pi(t,n)}catch{return!0}}function V_(t){var e=ur(t,1);e!==null&&Ci(e,t,1,-1)}function _v(t){var e=Ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:t},e.queue=t,t=t.dispatch=FE.bind(null,kt,t),[e.memoizedState,t]}function sl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function H_(){return hi().memoizedState}function Wu(t,e,n,i){var r=Ni();kt.flags|=t,r.memoizedState=sl(1|e,n,void 0,i===void 0?null:i)}function Uc(t,e,n,i){var r=hi();i=i===void 0?null:i;var o=void 0;if(Zt!==null){var l=Zt.memoizedState;if(o=l.destroy,i!==null&&hp(i,l.deps)){r.memoizedState=sl(e,n,o,i);return}}kt.flags|=t,r.memoizedState=sl(1|e,n,o,i)}function yv(t,e){return Wu(8390656,8,t,e)}function vp(t,e){return Uc(2048,8,t,e)}function W_(t,e){return Uc(4,2,t,e)}function j_(t,e){return Uc(4,4,t,e)}function X_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y_(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,X_.bind(null,e,t),n)}function gp(){}function q_(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $_(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return wo&21?(Pi(n,e)||(n=J0(),kt.lanes|=n,To|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zn=!0),t.memoizedState=n)}function OE(t,e){var n=St;St=n!==0&&4>n?n:4,t(!0);var i=Wf.transition;Wf.transition={};try{t(!1),e()}finally{St=n,Wf.transition=i}}function Z_(){return hi().memoizedState}function NE(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q_(t))J_(e,n);else if(n=P_(t,e,n,i),n!==null){var r=Rn();Ci(n,t,i,r),ey(n,e,i)}}function FE(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q_(t))J_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,a=o(l,n);if(r.hasEagerState=!0,r.eagerState=a,Pi(a,l)){var d=e.interleaved;d===null?(r.next=r,lp(e)):(r.next=d.next,d.next=r),e.interleaved=r;return}}catch{}finally{}n=P_(t,e,r,i),n!==null&&(r=Rn(),Ci(n,t,i,r),ey(n,e,i))}}function Q_(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function J_(t,e){ka=pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ey(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var mc={readContext:di,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},kE={readContext:di,useCallback:function(t,e){return Ni().memoizedState=[t,e===void 0?null:e],t},useContext:di,useEffect:yv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,X_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=Ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NE.bind(null,kt,t),[i.memoizedState,t]},useRef:function(t){var e=Ni();return t={current:t},e.memoizedState=t},useState:_v,useDebugValue:gp,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=_v(!1),e=t[0];return t=OE.bind(null,t[1]),Ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=kt,r=Ni();if(Ut){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),fn===null)throw Error(Se(349));wo&30||k_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,yv(B_.bind(null,i,o,t),[t]),i.flags|=2048,sl(9,z_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Ni(),e=fn.identifierPrefix;if(Ut){var n=rr,i=ir;n=(i&~(1<<32-bi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=UE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zE={readContext:di,useCallback:q_,useContext:di,useEffect:vp,useImperativeHandle:Y_,useInsertionEffect:W_,useLayoutEffect:j_,useMemo:$_,useReducer:jf,useRef:H_,useState:function(){return jf(ol)},useDebugValue:gp,useDeferredValue:function(t){var e=hi();return K_(e,Zt.memoizedState,t)},useTransition:function(){var t=jf(ol)[0],e=hi().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:F_,useId:Z_,unstable_isNewReconciler:!1},BE={readContext:di,useCallback:q_,useContext:di,useEffect:vp,useImperativeHandle:Y_,useInsertionEffect:W_,useLayoutEffect:j_,useMemo:$_,useReducer:Xf,useRef:H_,useState:function(){return Xf(ol)},useDebugValue:gp,useDeferredValue:function(t){var e=hi();return Zt===null?e.memoizedState=t:K_(e,Zt.memoizedState,t)},useTransition:function(){var t=Xf(ol)[0],e=hi().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:F_,useId:Z_,unstable_isNewReconciler:!1};function ks(t,e){try{var n="",i=e;do n+=pM(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Yf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function ty(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gc||(gc=!0,Eh=i),hh(t,e)},n}function ny(t,e,n){n=or(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hh(t,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function xv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new GE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tw.bind(null,t,e,n),e.then(t,t))}function Sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var VE=fr.ReactCurrentOwner,zn=!1;function Pn(t,e,n,i){e.child=t===null?U_(e,null,n,i):Ns(e,t.child,n,i)}function Ev(t,e,n,i,r){n=n.render;var o=e.ref;return Cs(e,r),i=pp(t,e,n,i,o,r),n=mp(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(Ut&&n&&np(e),e.flags|=1,Pn(t,e,i,r),e.child)}function wv(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Tp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,iy(t,e,o,i,r)):(t=qu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(l,i)&&t.ref===e.ref)return cr(t,e,r)}return e.flags|=1,t=Fr(o,i),t.ref=e.ref,t.return=e,e.child=t}function iy(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Qa(o,i)&&t.ref===e.ref)if(zn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(zn=!0);else return e.lanes=t.lanes,cr(t,e,r)}return ph(t,e,n,i,r)}function ry(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(ys,$n),$n|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ct(ys,$n),$n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ct(ys,$n),$n|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ct(ys,$n),$n|=i;return Pn(t,e,r,n),e.child}function oy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ph(t,e,n,i,r){var o=Vn(n)?Mo:wn.current;return o=Us(e,o),Cs(e,r),n=pp(t,e,n,i,o,r),i=mp(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(Ut&&i&&np(e),e.flags|=1,Pn(t,e,n,r),e.child)}function Tv(t,e,n,i,r){if(Vn(n)){var o=!0;ac(e)}else o=!1;if(Cs(e,r),e.stateNode===null)ju(t,e),L_(e,n,i),dh(e,n,i,r),i=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=di(h):(h=Vn(n)?Mo:wn.current,h=Us(e,h));var m=n.getDerivedStateFromProps,_=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||d!==h)&&vv(e,l,i,h),wr=!1;var g=e.memoizedState;l.state=g,dc(e,i,l,r),d=e.memoizedState,a!==i||g!==d||Gn.current||wr?(typeof m=="function"&&(fh(e,n,m,i),d=e.memoizedState),(a=wr||mv(e,n,a,i,g,d,h))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),l.props=i,l.state=d,l.context=h,i=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,R_(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:xi(e.type,a),l.props=h,_=e.pendingProps,g=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=di(d):(d=Vn(n)?Mo:wn.current,d=Us(e,d));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==_||g!==d)&&vv(e,l,i,d),wr=!1,g=e.memoizedState,l.state=g,dc(e,i,l,r);var b=e.memoizedState;a!==_||g!==b||Gn.current||wr?(typeof y=="function"&&(fh(e,n,y,i),b=e.memoizedState),(h=wr||mv(e,n,h,i,g,b,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,b,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,b,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=b),l.props=i,l.state=b,l.context=d,i=h):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),i=!1)}return mh(t,e,n,i,o,r)}function mh(t,e,n,i,r,o){oy(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&cv(e,n,!1),cr(t,e,o);i=e.stateNode,VE.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=Ns(e,t.child,null,o),e.child=Ns(e,null,a,o)):Pn(t,e,a,o),e.memoizedState=i.state,r&&cv(e,n,!0),e.child}function sy(t){var e=t.stateNode;e.pendingContext?uv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uv(t,e.context,!1),cp(t,e.containerInfo)}function bv(t,e,n,i,r){return Os(),rp(r),e.flags|=256,Pn(t,e,n,i),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ay(t,e,n){var i=e.pendingProps,r=Ft.current,o=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ct(Ft,r&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Fc(l,i,0,null),t=_o(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=gh(n),e.memoizedState=vh,t):_p(e,l));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HE(t,e,l,i,a,r,n);if(o){o=i.fallback,l=e.mode,r=t.child,a=r.sibling;var d={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=d,e.deletions=null):(i=Fr(r,d),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Fr(a,o):(o=_o(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?gh(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=vh,i}return o=t.child,t=o.sibling,i=Fr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _p(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cu(t,e,n,i){return i!==null&&rp(i),Ns(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HE(t,e,n,i,r,o,l){if(n)return e.flags&256?(e.flags&=-257,i=Yf(Error(Se(422))),cu(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),o=_o(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ns(e,t.child,null,l),e.child.memoizedState=gh(l),e.memoizedState=vh,o);if(!(e.mode&1))return cu(t,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Se(419)),i=Yf(o,i,void 0),cu(t,e,l,i)}if(a=(l&t.childLanes)!==0,zn||a){if(i=fn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ur(t,r),Ci(i,t,r,-1))}return wp(),i=Yf(Error(Se(421))),cu(t,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nw.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Kn=Ir(r.nextSibling),Zn=e,Ut=!0,Mi=null,t!==null&&(si[ai++]=ir,si[ai++]=rr,si[ai++]=Eo,ir=t.id,rr=t.overflow,Eo=e),e=_p(e,i.children),e.flags|=4096,e)}function Cv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ch(t.return,e,n)}function qf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function ly(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Pn(t,e,i.children,n),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cv(t,n,e);else if(t.tag===19)Cv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ct(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qf(e,!0,n,null,o);break;case"together":qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ju(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),To|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WE(t,e,n){switch(e.tag){case 3:sy(e),Os();break;case 5:O_(e);break;case 1:Vn(e.type)&&ac(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(cc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(Ft,Ft.current&1),e.flags|=128,null):n&e.child.childLanes?ay(t,e,n):(Ct(Ft,Ft.current&1),t=cr(t,e,n),t!==null?t.sibling:null);Ct(Ft,Ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ly(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,ry(t,e,n)}return cr(t,e,n)}var uy,_h,cy,fy;uy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};cy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,po(Bi.current);var o=null;switch(n){case"input":r=Bd(t,r),i=Bd(t,i),o=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),o=[];break;case"textarea":r=Hd(t,r),i=Hd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=oc)}jd(n,i);var l;n=null;for(h in r)if(!i.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var a=r[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ja.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var d=i[h];if(a=r!=null?r[h]:void 0,i.hasOwnProperty(h)&&d!==a&&(d!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ja.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Rt("scroll",t),o||a===d||(o=[])):(o=o||[]).push(h,d))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};fy=function(t,e,n,i){n!==i&&(e.flags|=4)};function xa(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function yn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jE(t,e,n){var i=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(e),null;case 1:return Vn(e.type)&&sc(),yn(e),null;case 3:return i=e.stateNode,Fs(),It(Gn),It(wn),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(bh(Mi),Mi=null))),_h(t,e),yn(e),null;case 5:fp(e);var r=po(il.current);if(n=e.type,t!==null&&e.stateNode!=null)cy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return yn(e),null}if(t=po(Bi.current),lu(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ki]=e,i[tl]=o,t=(e.mode&1)!==0,n){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)Rt(Da[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Nm(i,o),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Rt("invalid",i);break;case"textarea":km(i,o),Rt("invalid",i)}jd(n,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,t),r=["children",""+a]):ja.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Rt("scroll",i)}switch(n){case"input":Jl(i),Fm(i,o,!0);break;case"textarea":Jl(i),zm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[ki]=e,t[tl]=i,uy(t,e,!1,!1),e.stateNode=t;e:{switch(l=Xd(n,i),n){case"dialog":Rt("cancel",t),Rt("close",t),r=i;break;case"iframe":case"object":case"embed":Rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)Rt(Da[r],t);r=i;break;case"source":Rt("error",t),r=i;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),r=i;break;case"details":Rt("toggle",t),r=i;break;case"input":Nm(t,i),r=Bd(t,i),Rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Rt("invalid",t);break;case"textarea":km(t,i),r=Hd(t,i),Rt("invalid",t);break;default:r=i}jd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?G0(t,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&z0(t,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Xa(t,d):typeof d=="number"&&Xa(t,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ja.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Rt("scroll",t):d!=null&&Vh(t,o,d,l))}switch(n){case"input":Jl(t),Fm(t,i,!1);break;case"textarea":Jl(t),zm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+kr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Es(t,!!i.multiple,o,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yn(e),null;case 6:if(t&&e.stateNode!=null)fy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=po(il.current),po(Bi.current),lu(e)){if(i=e.stateNode,n=e.memoizedProps,i[ki]=e,(o=i.nodeValue!==n)&&(t=Zn,t!==null))switch(t.tag){case 3:au(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&au(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ki]=e,e.stateNode=i}return yn(e),null;case 13:if(It(Ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Kn!==null&&e.mode&1&&!(e.flags&128))A_(),Os(),e.flags|=98560,o=!1;else if(o=lu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[ki]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yn(e),o=!1}else Mi!==null&&(bh(Mi),Mi=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Jt===0&&(Jt=3):wp())),e.updateQueue!==null&&(e.flags|=4),yn(e),null);case 4:return Fs(),_h(t,e),t===null&&Ja(e.stateNode.containerInfo),yn(e),null;case 10:return ap(e.type._context),yn(e),null;case 17:return Vn(e.type)&&sc(),yn(e),null;case 19:if(It(Ft),o=e.memoizedState,o===null)return yn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)xa(o,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=hc(t),l!==null){for(e.flags|=128,xa(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ct(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&Wt()>zs&&(e.flags|=128,i=!0,xa(o,!1),e.lanes=4194304)}else{if(!i)if(t=hc(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ut)return yn(e),null}else 2*Wt()-o.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,xa(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wt(),e.sibling=null,n=Ft.current,Ct(Ft,i?n&1|2:n&1),e):(yn(e),null);case 22:case 23:return Ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?$n&1073741824&&(yn(e),e.subtreeFlags&6&&(e.flags|=8192)):yn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function XE(t,e){switch(ip(e),e.tag){case 1:return Vn(e.type)&&sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),It(Gn),It(wn),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(It(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ft),null;case 4:return Fs(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var fu=!1,Mn=!1,YE=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Gt(t,e,i)}else n.current=null}function yh(t,e,n){try{n()}catch(i){Gt(t,e,i)}}var Av=!1;function qE(t,e){if(nh=nc,t=m_(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,h=0,m=0,_=t,g=null;t:for(;;){for(var y;_!==n||r!==0&&_.nodeType!==3||(a=l+r),_!==o||i!==0&&_.nodeType!==3||(d=l+i),_.nodeType===3&&(l+=_.nodeValue.length),(y=_.firstChild)!==null;)g=_,_=y;for(;;){if(_===t)break t;if(g===n&&++h===r&&(a=l),g===o&&++m===i&&(d=l),(y=_.nextSibling)!==null)break;_=g,g=_.parentNode}_=y}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},nc=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var T=b.memoizedProps,E=b.memoizedState,p=e.stateNode,w=p.getSnapshotBeforeUpdate(e.elementType===e.type?T:xi(e.type,T),E);p.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(L){Gt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return b=Av,Av=!1,b}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&yh(e,n,o)}r=r.next}while(r!==i)}}function Oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dy(t){var e=t.alternate;e!==null&&(t.alternate=null,dy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ki],delete e[tl],delete e[sh],delete e[RE],delete e[DE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hy(t){return t.tag===5||t.tag===3||t.tag===4}function Pv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}function Mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}var mn=null,Si=!1;function gr(t,e,n){for(n=n.child;n!==null;)py(t,e,n),n=n.sibling}function py(t,e,n){if(zi&&typeof zi.onCommitFiberUnmount=="function")try{zi.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:Mn||_s(n,e);case 6:var i=mn,r=Si;mn=null,gr(t,e,n),mn=i,Si=r,mn!==null&&(Si?(t=mn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mn.removeChild(n.stateNode));break;case 18:mn!==null&&(Si?(t=mn,n=n.stateNode,t.nodeType===8?Gf(t.parentNode,n):t.nodeType===1&&Gf(t,n),Ka(t)):Gf(mn,n.stateNode));break;case 4:i=mn,r=Si,mn=n.stateNode.containerInfo,Si=!0,gr(t,e,n),mn=i,Si=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&yh(n,e,l),r=r.next}while(r!==i)}gr(t,e,n);break;case 1:if(!Mn&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Gt(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(Mn=(i=Mn)||n.memoizedState!==null,gr(t,e,n),Mn=i):gr(t,e,n);break;default:gr(t,e,n)}}function Rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YE),e.forEach(function(i){var r=iw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function mi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,Si=!1;break e;case 3:mn=a.stateNode.containerInfo,Si=!0;break e;case 4:mn=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(mn===null)throw Error(Se(160));py(o,l,r),mn=null,Si=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(h){Gt(r,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)my(e,t),e=e.sibling}function my(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(e,t),Ii(t),i&4){try{za(3,t,t.return),Oc(3,t)}catch(T){Gt(t,t.return,T)}try{za(5,t,t.return)}catch(T){Gt(t,t.return,T)}}break;case 1:mi(e,t),Ii(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(mi(e,t),Ii(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(T){Gt(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&N0(r,o),Xd(a,l);var h=Xd(a,o);for(l=0;l<d.length;l+=2){var m=d[l],_=d[l+1];m==="style"?G0(r,_):m==="dangerouslySetInnerHTML"?z0(r,_):m==="children"?Xa(r,_):Vh(r,m,_,h)}switch(a){case"input":Gd(r,o);break;case"textarea":F0(r,o);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Es(r,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Es(r,!!o.multiple,o.defaultValue,!0):Es(r,!!o.multiple,o.multiple?[]:"",!1))}r[tl]=o}catch(T){Gt(t,t.return,T)}}break;case 6:if(mi(e,t),Ii(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(T){Gt(t,t.return,T)}}break;case 3:if(mi(e,t),Ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(T){Gt(t,t.return,T)}break;case 4:mi(e,t),Ii(t);break;case 13:mi(e,t),Ii(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Sp=Wt())),i&4&&Rv(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(Mn=(h=Mn)||m,mi(e,t),Mn=h):mi(e,t),Ii(t),i&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(Ue=t,m=t.child;m!==null;){for(_=Ue=m;Ue!==null;){switch(g=Ue,y=g.child,g.tag){case 0:case 11:case 14:case 15:za(4,g,g.return);break;case 1:_s(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){i=g,n=g.return;try{e=i,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(T){Gt(i,n,T)}}break;case 5:_s(g,g.return);break;case 22:if(g.memoizedState!==null){Lv(_);continue}}y!==null?(y.return=g,Ue=y):Lv(_)}m=m.sibling}e:for(m=null,_=t;;){if(_.tag===5){if(m===null){m=_;try{r=_.stateNode,h?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=_.stateNode,d=_.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=B0("display",l))}catch(T){Gt(t,t.return,T)}}}else if(_.tag===6){if(m===null)try{_.stateNode.nodeValue=h?"":_.memoizedProps}catch(T){Gt(t,t.return,T)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===t)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break e;for(;_.sibling===null;){if(_.return===null||_.return===t)break e;m===_&&(m=null),_=_.return}m===_&&(m=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:mi(e,t),Ii(t),i&4&&Rv(t);break;case 21:break;default:mi(e,t),Ii(t)}}function Ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hy(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var o=Pv(t);Mh(t,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=Pv(t);Sh(t,a,l);break;default:throw Error(Se(161))}}catch(d){Gt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $E(t,e,n){Ue=t,vy(t)}function vy(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||fu;if(!l){var a=r.alternate,d=a!==null&&a.memoizedState!==null||Mn;a=fu;var h=Mn;if(fu=l,(Mn=d)&&!h)for(Ue=r;Ue!==null;)l=Ue,d=l.child,l.tag===22&&l.memoizedState!==null?Iv(r):d!==null?(d.return=l,Ue=d):Iv(r);for(;o!==null;)Ue=o,vy(o),o=o.sibling;Ue=r,fu=a,Mn=h}Dv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ue=o):Dv(t)}}function Dv(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:xi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&pv(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pv(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var _=m.dehydrated;_!==null&&Ka(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Mn||e.flags&512&&xh(e)}catch(g){Gt(e,e.return,g)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Lv(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Iv(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oc(4,e)}catch(d){Gt(e,n,d)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(d){Gt(e,r,d)}}var o=e.return;try{xh(e)}catch(d){Gt(e,o,d)}break;case 5:var l=e.return;try{xh(e)}catch(d){Gt(e,l,d)}}}catch(d){Gt(e,e.return,d)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var KE=Math.ceil,vc=fr.ReactCurrentDispatcher,yp=fr.ReactCurrentOwner,fi=fr.ReactCurrentBatchConfig,vt=0,fn=null,Kt=null,vn=0,$n=0,ys=Hr(0),Jt=0,al=null,To=0,Nc=0,xp=0,Ba=null,Nn=null,Sp=0,zs=1/0,er=null,gc=!1,Eh=null,Or=null,du=!1,Pr=null,_c=0,Ga=0,wh=null,Xu=-1,Yu=0;function Rn(){return vt&6?Wt():Xu!==-1?Xu:Xu=Wt()}function Nr(t){return t.mode&1?vt&2&&vn!==0?vn&-vn:IE.transition!==null?(Yu===0&&(Yu=J0()),Yu):(t=St,t!==0||(t=window.event,t=t===void 0?16:s_(t.type)),t):1}function Ci(t,e,n,i){if(50<Ga)throw Ga=0,wh=null,Error(Se(185));vl(t,n,i),(!(vt&2)||t!==fn)&&(t===fn&&(!(vt&2)&&(Nc|=n),Jt===4&&br(t,vn)),Hn(t,i),n===1&&vt===0&&!(e.mode&1)&&(zs=Wt()+500,Lc&&Wr()))}function Hn(t,e){var n=t.callbackNode;IM(t,e);var i=tc(t,t===fn?vn:0);if(i===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?LE(Uv.bind(null,t)):T_(Uv.bind(null,t)),AE(function(){!(vt&6)&&Wr()}),n=null;else{switch(e_(i)){case 1:n=Yh;break;case 4:n=Z0;break;case 16:n=ec;break;case 536870912:n=Q0;break;default:n=ec}n=wy(n,gy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gy(t,e){if(Xu=-1,Yu=0,vt&6)throw Error(Se(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=tc(t,t===fn?vn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yc(t,i);else{e=i;var r=vt;vt|=2;var o=yy();(fn!==t||vn!==e)&&(er=null,zs=Wt()+500,go(t,e));do try{JE();break}catch(a){_y(t,a)}while(1);sp(),vc.current=o,vt=r,Kt!==null?e=0:(fn=null,vn=0,e=Jt)}if(e!==0){if(e===2&&(r=Zd(t),r!==0&&(i=r,e=Th(t,r))),e===1)throw n=al,go(t,0),br(t,i),Hn(t,Wt()),n;if(e===6)br(t,i);else{if(r=t.current.alternate,!(i&30)&&!ZE(r)&&(e=yc(t,i),e===2&&(o=Zd(t),o!==0&&(i=o,e=Th(t,o))),e===1))throw n=al,go(t,0),br(t,i),Hn(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:so(t,Nn,er);break;case 3:if(br(t,i),(i&130023424)===i&&(e=Sp+500-Wt(),10<e)){if(tc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=oh(so.bind(null,t,Nn,er),e);break}so(t,Nn,er);break;case 4:if(br(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var l=31-bi(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KE(i/1960))-i,10<i){t.timeoutHandle=oh(so.bind(null,t,Nn,er),i);break}so(t,Nn,er);break;case 5:so(t,Nn,er);break;default:throw Error(Se(329))}}}return Hn(t,Wt()),t.callbackNode===n?gy.bind(null,t):null}function Th(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(go(t,e).flags|=256),t=yc(t,e),t!==2&&(e=Nn,Nn=n,e!==null&&bh(e)),t}function bh(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function ZE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Pi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~xp,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bi(e),i=1<<n;t[n]=-1,e&=~i}}function Uv(t){if(vt&6)throw Error(Se(327));As();var e=tc(t,0);if(!(e&1))return Hn(t,Wt()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var i=Zd(t);i!==0&&(e=i,n=Th(t,i))}if(n===1)throw n=al,go(t,0),br(t,e),Hn(t,Wt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,so(t,Nn,er),Hn(t,Wt()),null}function Mp(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(zs=Wt()+500,Lc&&Wr())}}function bo(t){Pr!==null&&Pr.tag===0&&!(vt&6)&&As();var e=vt;vt|=1;var n=fi.transition,i=St;try{if(fi.transition=null,St=1,t)return t()}finally{St=i,fi.transition=n,vt=e,!(vt&6)&&Wr()}}function Ep(){$n=ys.current,It(ys)}function go(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CE(n)),Kt!==null)for(n=Kt.return;n!==null;){var i=n;switch(ip(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sc();break;case 3:Fs(),It(Gn),It(wn),dp();break;case 5:fp(i);break;case 4:Fs();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:ap(i.type._context);break;case 22:case 23:Ep()}n=n.return}if(fn=t,Kt=t=Fr(t.current,null),vn=$n=e,Jt=0,al=null,xp=Nc=To=0,Nn=Ba=null,ho!==null){for(e=0;e<ho.length;e++)if(n=ho[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}n.pending=i}ho=null}return t}function _y(t,e){do{var n=Kt;try{if(sp(),Hu.current=mc,pc){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pc=!1}if(wo=0,cn=Zt=kt=null,ka=!1,rl=0,yp.current=null,n===null||n.return===null){Jt=1,al=e,Kt=null;break}e:{var o=t,l=n.return,a=n,d=e;if(e=vn,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,m=a,_=m.tag;if(!(m.mode&1)&&(_===0||_===11||_===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Sv(l);if(y!==null){y.flags&=-257,Mv(y,l,a,o,e),y.mode&1&&xv(o,h,e),e=y,d=h;var b=e.updateQueue;if(b===null){var T=new Set;T.add(d),e.updateQueue=T}else b.add(d);break e}else{if(!(e&1)){xv(o,h,e),wp();break e}d=Error(Se(426))}}else if(Ut&&a.mode&1){var E=Sv(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Mv(E,l,a,o,e),rp(ks(d,a));break e}}o=d=ks(d,a),Jt!==4&&(Jt=2),Ba===null?Ba=[o]:Ba.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=ty(o,d,e);hv(o,p);break e;case 1:a=d;var w=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Or===null||!Or.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var L=ny(o,a,e);hv(o,L);break e}}o=o.return}while(o!==null)}Sy(n)}catch(P){e=P,Kt===n&&n!==null&&(Kt=n=n.return);continue}break}while(1)}function yy(){var t=vc.current;return vc.current=mc,t===null?mc:t}function wp(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),fn===null||!(To&268435455)&&!(Nc&268435455)||br(fn,vn)}function yc(t,e){var n=vt;vt|=2;var i=yy();(fn!==t||vn!==e)&&(er=null,go(t,e));do try{QE();break}catch(r){_y(t,r)}while(1);if(sp(),vt=n,vc.current=i,Kt!==null)throw Error(Se(261));return fn=null,vn=0,Jt}function QE(){for(;Kt!==null;)xy(Kt)}function JE(){for(;Kt!==null&&!wM();)xy(Kt)}function xy(t){var e=Ey(t.alternate,t,$n);t.memoizedProps=t.pendingProps,e===null?Sy(t):Kt=e,yp.current=null}function Sy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XE(n,e),n!==null){n.flags&=32767,Kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Kt=null;return}}else if(n=jE(n,e,$n),n!==null){Kt=n;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);Jt===0&&(Jt=5)}function so(t,e,n){var i=St,r=fi.transition;try{fi.transition=null,St=1,ew(t,e,n,i)}finally{fi.transition=r,St=i}return null}function ew(t,e,n,i){do As();while(Pr!==null);if(vt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(UM(t,o),t===fn&&(Kt=fn=null,vn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||du||(du=!0,wy(ec,function(){return As(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=fi.transition,fi.transition=null;var l=St;St=1;var a=vt;vt|=4,yp.current=null,qE(t,n),my(n,t),xE(ih),nc=!!nh,ih=nh=null,t.current=n,$E(n),TM(),vt=a,St=l,fi.transition=o}else t.current=n;if(du&&(du=!1,Pr=t,_c=r),o=t.pendingLanes,o===0&&(Or=null),AM(n.stateNode),Hn(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gc)throw gc=!1,t=Eh,Eh=null,t;return _c&1&&t.tag!==0&&As(),o=t.pendingLanes,o&1?t===wh?Ga++:(Ga=0,wh=t):Ga=0,Wr(),null}function As(){if(Pr!==null){var t=e_(_c),e=fi.transition,n=St;try{if(fi.transition=null,St=16>t?16:t,Pr===null)var i=!1;else{if(t=Pr,Pr=null,_c=0,vt&6)throw Error(Se(331));var r=vt;for(vt|=4,Ue=t.current;Ue!==null;){var o=Ue,l=o.child;if(Ue.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var h=a[d];for(Ue=h;Ue!==null;){var m=Ue;switch(m.tag){case 0:case 11:case 15:za(8,m,o)}var _=m.child;if(_!==null)_.return=m,Ue=_;else for(;Ue!==null;){m=Ue;var g=m.sibling,y=m.return;if(dy(m),m===h){Ue=null;break}if(g!==null){g.return=y,Ue=g;break}Ue=y}}}var b=o.alternate;if(b!==null){var T=b.child;if(T!==null){b.child=null;do{var E=T.sibling;T.sibling=null,T=E}while(T!==null)}}Ue=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Ue=l;else e:for(;Ue!==null;){if(o=Ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:za(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Ue=p;break e}Ue=o.return}}var w=t.current;for(Ue=w;Ue!==null;){l=Ue;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,Ue=x;else e:for(l=w;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oc(9,a)}}catch(P){Gt(a,a.return,P)}if(a===l){Ue=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,Ue=L;break e}Ue=a.return}}if(vt=r,Wr(),zi&&typeof zi.onPostCommitFiberRoot=="function")try{zi.onPostCommitFiberRoot(Cc,t)}catch{}i=!0}return i}finally{St=n,fi.transition=e}}return!1}function Ov(t,e,n){e=ks(n,e),e=ty(t,e,1),t=Ur(t,e,1),e=Rn(),t!==null&&(vl(t,1,e),Hn(t,e))}function Gt(t,e,n){if(t.tag===3)Ov(t,t,n);else for(;e!==null;){if(e.tag===3){Ov(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){t=ks(n,t),t=ny(e,t,1),e=Ur(e,t,1),t=Rn(),e!==null&&(vl(e,1,t),Hn(e,t));break}}e=e.return}}function tw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Rn(),t.pingedLanes|=t.suspendedLanes&n,fn===t&&(vn&n)===n&&(Jt===4||Jt===3&&(vn&130023424)===vn&&500>Wt()-Sp?go(t,0):xp|=n),Hn(t,e)}function My(t,e){e===0&&(t.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var n=Rn();t=ur(t,e),t!==null&&(vl(t,e,n),Hn(t,n))}function nw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),My(t,n)}function iw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),My(t,n)}var Ey;Ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gn.current)zn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zn=!1,WE(t,e,n);zn=!!(t.flags&131072)}else zn=!1,Ut&&e.flags&1048576&&b_(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ju(t,e),t=e.pendingProps;var r=Us(e,wn.current);Cs(e,n),r=pp(null,e,i,t,r,n);var o=mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vn(i)?(o=!0,ac(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,up(e),r.updater=Ic,e.stateNode=r,r._reactInternals=e,dh(e,i,t,n),e=mh(null,e,i,!0,o,n)):(e.tag=0,Ut&&o&&np(e),Pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ju(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ow(i),t=xi(i,t),r){case 0:e=ph(null,e,i,t,n);break e;case 1:e=Tv(null,e,i,t,n);break e;case 11:e=Ev(null,e,i,t,n);break e;case 14:e=wv(null,e,i,xi(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),ph(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Tv(t,e,i,r,n);case 3:e:{if(sy(e),t===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,R_(t,e),dc(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ks(Error(Se(423)),e),e=bv(t,e,i,n,r);break e}else if(i!==r){r=ks(Error(Se(424)),e),e=bv(t,e,i,n,r);break e}else for(Kn=Ir(e.stateNode.containerInfo.firstChild),Zn=e,Ut=!0,Mi=null,n=U_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=cr(t,e,n);break e}Pn(t,e,i,n)}e=e.child}return e;case 5:return O_(e),t===null&&uh(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,l=r.children,rh(i,r)?l=null:o!==null&&rh(i,o)&&(e.flags|=32),oy(t,e),Pn(t,e,l,n),e.child;case 6:return t===null&&uh(e),null;case 13:return ay(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ns(e,null,i,n):Pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Ev(t,e,i,r,n);case 7:return Pn(t,e,e.pendingProps,n),e.child;case 8:return Pn(t,e,e.pendingProps.children,n),e.child;case 12:return Pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Ct(cc,i._currentValue),i._currentValue=l,o!==null)if(Pi(o.value,l)){if(o.children===r.children&&!Gn.current){e=cr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var d=a.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=or(-1,n&-n),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?d.next=d:(d.next=m.next,m.next=d),h.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),ch(o.return,n,e),a.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Se(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ch(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=di(r),i=i(r),e.flags|=1,Pn(t,e,i,n),e.child;case 14:return i=e.type,r=xi(i,e.pendingProps),r=xi(i.type,r),wv(t,e,i,r,n);case 15:return iy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),ju(t,e),e.tag=1,Vn(i)?(t=!0,ac(e)):t=!1,Cs(e,n),L_(e,i,r),dh(e,i,r,n),mh(null,e,i,!0,t,n);case 19:return ly(t,e,n);case 22:return ry(t,e,n)}throw Error(Se(156,e.tag))};function wy(t,e){return K0(t,e)}function rw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,e,n,i){return new rw(t,e,n,i)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ow(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===jh)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=ci(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qu(t,e,n,i,r,o){var l=2;if(i=t,typeof t=="function")Tp(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case us:return _o(n.children,r,o,e);case Hh:l=8,r|=8;break;case Nd:return t=ci(12,n,e,r|2),t.elementType=Nd,t.lanes=o,t;case Fd:return t=ci(13,n,e,r),t.elementType=Fd,t.lanes=o,t;case kd:return t=ci(19,n,e,r),t.elementType=kd,t.lanes=o,t;case I0:return Fc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D0:l=10;break e;case L0:l=9;break e;case Wh:l=11;break e;case jh:l=14;break e;case Er:l=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=ci(l,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function _o(t,e,n,i){return t=ci(7,t,i,e),t.lanes=n,t}function Fc(t,e,n,i){return t=ci(22,t,i,e),t.elementType=I0,t.lanes=n,t.stateNode={isHidden:!1},t}function $f(t,e,n){return t=ci(6,t,null,e),t.lanes=n,t}function Kf(t,e,n){return e=ci(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rf(0),this.expirationTimes=Rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,i,r,o,l,a,d){return t=new sw(t,e,n,a,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ci(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(o),t}function aw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ty(t){if(!t)return zr;t=t._reactInternals;e:{if(Do(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(Vn(n))return w_(t,n,e)}return e}function by(t,e,n,i,r,o,l,a,d){return t=bp(n,i,!0,t,r,o,l,a,d),t.context=Ty(null),n=t.current,i=Rn(),r=Nr(n),o=or(i,r),o.callback=e??null,Ur(n,o,r),t.current.lanes=r,vl(t,r,i),Hn(t,i),t}function kc(t,e,n,i){var r=e.current,o=Rn(),l=Nr(r);return n=Ty(n),e.context===null?e.context=n:e.pendingContext=n,e=or(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ur(r,e,l),t!==null&&(Ci(t,r,l,o),Vu(t,r,l)),l}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cp(t,e){Nv(t,e),(t=t.alternate)&&Nv(t,e)}function lw(){return null}var Cy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}zc.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));kc(t,e,null,null)};zc.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bo(function(){kc(null,t,null,null)}),e[lr]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=i_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&o_(t)}};function Pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fv(){}function uw(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var h=xc(l);o.call(h)}}var l=by(e,i,t,0,null,!1,!1,"",Fv);return t._reactRootContainer=l,t[lr]=l.current,Ja(t.nodeType===8?t.parentNode:t),bo(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var h=xc(d);a.call(h)}}var d=bp(t,0,!1,null,null,!1,!1,"",Fv);return t._reactRootContainer=d,t[lr]=d.current,Ja(t.nodeType===8?t.parentNode:t),bo(function(){kc(e,d,n,i)}),d}function Gc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var d=xc(l);a.call(d)}}kc(e,l,t,r)}else l=uw(n,e,t,r,i);return xc(l)}t_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(qh(e,n|1),Hn(e,Wt()),!(vt&6)&&(zs=Wt()+500,Wr()))}break;case 13:bo(function(){var i=ur(t,1);if(i!==null){var r=Rn();Ci(i,t,1,r)}}),Cp(t,1)}};$h=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Rn();Ci(e,t,134217728,n)}Cp(t,134217728)}};n_=function(t){if(t.tag===13){var e=Nr(t),n=ur(t,e);if(n!==null){var i=Rn();Ci(n,t,e,i)}Cp(t,e)}};i_=function(){return St};r_=function(t,e){var n=St;try{return St=t,e()}finally{St=n}};qd=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Dc(i);if(!r)throw Error(Se(90));O0(i),Gd(i,r)}}}break;case"textarea":F0(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};W0=Mp;j0=bo;var cw={usingClientEntryPoint:!1,Events:[_l,hs,Dc,V0,H0,Mp]},Sa={findFiberByHostInstance:fo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fw={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q0(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Cc=hu.inject(fw),zi=hu}catch{}}Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;Jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pp(e))throw Error(Se(200));return aw(t,e,null,n)};Jn.createRoot=function(t,e){if(!Pp(t))throw Error(Se(299));var n=!1,i="",r=Cy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,i,r),t[lr]=e.current,Ja(t.nodeType===8?t.parentNode:t),new Ap(e)};Jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=q0(e),t=t===null?null:t.stateNode,t};Jn.flushSync=function(t){return bo(t)};Jn.hydrate=function(t,e,n){if(!Bc(e))throw Error(Se(200));return Gc(null,t,e,!0,n)};Jn.hydrateRoot=function(t,e,n){if(!Pp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",l=Cy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=by(e,null,t,1,n??null,r,!1,o,l),t[lr]=e.current,Ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zc(e)};Jn.render=function(t,e,n){if(!Bc(e))throw Error(Se(200));return Gc(null,t,e,!1,n)};Jn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(Se(40));return t._reactRootContainer?(bo(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Jn.unstable_batchedUpdates=Mp;Jn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return Gc(t,e,n,!1,i)};Jn.version="18.2.0-next-9e3b772b8-20220608";function Ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ay)}catch(t){console.error(t)}}Ay(),b0.exports=Jn;var dw=b0.exports,kv=dw;Ud.createRoot=kv.createRoot,Ud.hydrateRoot=kv.hydrateRoot;var Py={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default=function(s){return!(!s||!s.Window)&&s instanceof s.Window};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.getWindow=function(s){return(0,n.default)(s)?s:(s.ownerDocument||s).defaultView||o.window},i.init=l,i.window=i.realWindow=void 0;var r=void 0;i.realWindow=r;var o=void 0;function l(s){i.realWindow=r=s;var u=s.document.createTextNode("");u.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(u)===u&&(s=s.wrap(s)),i.window=o=s}i.window=o,typeof window<"u"&&window&&l(window);var a={};function d(s){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=function(s){return!!s&&d(s)==="object"},m=function(s){return typeof s=="function"},_={window:function(s){return s===i.window||(0,n.default)(s)},docFrag:function(s){return h(s)&&s.nodeType===11},object:h,func:m,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||d(s)!=="object")return!1;var u=i.getWindow(s)||i.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?s instanceof Element||s instanceof u.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return h(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return h(s)&&s.length!==void 0&&m(s.splice)}};a.default=_;var g={};function y(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.prepared.axis;c==="x"?(u.coords.cur.page.y=u.coords.start.page.y,u.coords.cur.client.y=u.coords.start.client.y,u.coords.velocity.client.y=0,u.coords.velocity.page.y=0):c==="y"&&(u.coords.cur.page.x=u.coords.start.page.x,u.coords.cur.client.x=u.coords.start.client.x,u.coords.velocity.client.x=0,u.coords.velocity.page.x=0)}}function b(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="drag"){var f=c.prepared.axis;if(f==="x"||f==="y"){var v=f==="x"?"y":"x";u.page[v]=c.coords.start.page[v],u.client[v]=c.coords.start.client[v],u.delta[v]=0}}}Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var T={id:"actions/drag",install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.draggable=T.draggable,u.map.drag=T,u.methodDict.drag="draggable",f.actions.drag=T.defaults},listeners:{"interactions:before-action-move":y,"interactions:action-resume":y,"interactions:action-move":b,"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.buttons,v=c.options.drag;if(v&&v.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||f&c.options.drag.mouseButtons))return s.action={name:"drag",axis:v.lockAxis==="start"?v.startAxis:v.lockAxis},!1}},draggable:function(s){return a.default.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):a.default.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:y,move:b,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},E=T;g.default=E;var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var w={init:function(s){var u=s;w.document=u.document,w.DocumentFragment=u.DocumentFragment||x,w.SVGElement=u.SVGElement||x,w.SVGSVGElement=u.SVGSVGElement||x,w.SVGElementInstance=u.SVGElementInstance||x,w.Element=u.Element||x,w.HTMLElement=u.HTMLElement||w.Element,w.Event=u.Event,w.Touch=u.Touch||x,w.PointerEvent=u.PointerEvent||u.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function x(){}var L=w;p.default=L;var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var I={init:function(s){var u=p.default.Element,c=s.navigator||{};I.supportsTouch="ontouchstart"in s||a.default.func(s.DocumentTouch)&&p.default.document instanceof s.DocumentTouch,I.supportsPointerEvent=c.pointerEnabled!==!1&&!!p.default.PointerEvent,I.isIOS=/iP(hone|od|ad)/.test(c.platform),I.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),I.isIe9=/MSIE 9/.test(c.userAgent),I.isOperaMobile=c.appName==="Opera"&&I.supportsTouch&&/Presto/.test(c.userAgent),I.prefixedMatchesSelector="matches"in u.prototype?"matches":"webkitMatchesSelector"in u.prototype?"webkitMatchesSelector":"mozMatchesSelector"in u.prototype?"mozMatchesSelector":"oMatchesSelector"in u.prototype?"oMatchesSelector":"msMatchesSelector",I.pEventTypes=I.supportsPointerEvent?p.default.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,I.wheelEvent=p.default.document&&"onmousewheel"in p.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},B=I;P.default=B;var z={};function R(s){var u=s.parentNode;if(a.default.docFrag(u)){for(;(u=u.host)&&a.default.docFrag(u););return u}return u}function N(s,u){return i.window!==i.realWindow&&(u=u.replace(/\/deep\//g," ")),s[P.default.prefixedMatchesSelector](u)}Object.defineProperty(z,"__esModule",{value:!0}),z.closest=function(s,u){for(;a.default.element(s);){if(N(s,u))return s;s=R(s)}return null},z.getActualElement=function(s){return s.correspondingUseElement||s},z.getElementClientRect=te,z.getElementRect=function(s){var u=te(s);if(!P.default.isIOS7&&u){var c=$(i.getWindow(s));u.left+=c.x,u.right+=c.x,u.top+=c.y,u.bottom+=c.y}return u},z.getPath=function(s){for(var u=[];s;)u.push(s),s=R(s);return u},z.getScrollXY=$,z.indexOfDeepestElement=function(s){for(var u,c=[],f=0;f<s.length;f++){var v=s[f],S=s[u];if(v&&f!==u)if(S){var A=ae(v),M=ae(S);if(A!==v.ownerDocument)if(M!==v.ownerDocument)if(A!==M){c=c.length?c:fe(S);var C=void 0;if(S instanceof p.default.HTMLElement&&v instanceof p.default.SVGElement&&!(v instanceof p.default.SVGSVGElement)){if(v===M)continue;C=v.ownerSVGElement}else C=v;for(var U=fe(C,S.ownerDocument),k=0;U[k]&&U[k]===c[k];)k++;var V=[U[k-1],U[k],c[k]];if(V[0])for(var ee=V[0].lastChild;ee;){if(ee===V[1]){u=f,c=U;break}if(ee===V[2])break;ee=ee.previousSibling}}else ce=v,Z=S,(parseInt(i.getWindow(ce).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(i.getWindow(Z).getComputedStyle(Z).zIndex,10)||0)&&(u=f);else u=f}else u=f}var ce,Z;return u},z.matchesSelector=N,z.matchesUpTo=function(s,u,c){for(;a.default.element(s);){if(N(s,u))return!0;if((s=R(s))===c)return N(s,u)}return!1},z.nodeContains=function(s,u){if(s.contains)return s.contains(u);for(;u;){if(u===s)return!0;u=u.parentNode}return!1},z.parentNode=R,z.trySelector=function(s){return!!a.default.string(s)&&(p.default.document.querySelector(s),!0)};var ae=function(s){return s.parentNode||s.host};function fe(s,u){for(var c,f=[],v=s;(c=ae(v))&&v!==u&&c!==v.ownerDocument;)f.unshift(v),v=c;return f}function $(s){return{x:(s=s||i.window).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop}}function te(s){var u=s instanceof p.default.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return u&&{left:u.left,right:u.right,top:u.top,bottom:u.bottom,width:u.width||u.right-u.left,height:u.height||u.bottom-u.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(s,u){for(var c in u)s[c]=u[c];return s};var ue={};function pe(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function X(s,u,c){return s==="parent"?(0,z.parentNode)(c):s==="self"?u.getRect(c):(0,z.closest)(c,s)}Object.defineProperty(ue,"__esModule",{value:!0}),ue.addEdges=function(s,u,c){s.left&&(u.left+=c.x),s.right&&(u.right+=c.x),s.top&&(u.top+=c.y),s.bottom&&(u.bottom+=c.y),u.width=u.right-u.left,u.height=u.bottom-u.top},ue.getStringOptionResult=X,ue.rectToXY=function(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}},ue.resolveRectLike=function(s,u,c,f){var v,S=s;return a.default.string(S)?S=X(S,u,c):a.default.func(S)&&(S=S.apply(void 0,function(A){if(Array.isArray(A))return pe(A)}(v=f)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(v)||function(A,M){if(A){if(typeof A=="string")return pe(A,M);var C=Object.prototype.toString.call(A).slice(8,-1);return C==="Object"&&A.constructor&&(C=A.constructor.name),C==="Map"||C==="Set"?Array.from(A):C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)?pe(A,M):void 0}}(v)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),a.default.element(S)&&(S=(0,z.getElementRect)(S)),S},ue.tlbrToXywh=function(s){return!s||"x"in s&&"y"in s||((s=(0,j.default)({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s},ue.xywhToTlbr=function(s){return!s||"left"in s&&"top"in s||((s=(0,j.default)({},s)).left=s.x||0,s.top=s.y||0,s.right=s.right||s.left+s.width,s.bottom=s.bottom||s.top+s.height),s};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(s,u,c){var f=s.options[c],v=f&&f.origin||s.options.origin,S=(0,ue.resolveRectLike)(v,s,u,[s&&u]);return(0,ue.rectToXY)(S)||{x:0,y:0}};var ne={};function we(s){return s.trim().split(/ +/)}Object.defineProperty(ne,"__esModule",{value:!0}),ne.default=function s(u,c,f){if(f=f||{},a.default.string(u)&&u.search(" ")!==-1&&(u=we(u)),a.default.array(u))return u.reduce(function(C,U){return(0,j.default)(C,s(U,c,f))},f);if(a.default.object(u)&&(c=u,u=""),a.default.func(c))f[u]=f[u]||[],f[u].push(c);else if(a.default.array(c))for(var v=0;v<c.length;v++){var S;S=c[v],s(u,S,f)}else if(a.default.object(c))for(var A in c){var M=we(A).map(function(C){return"".concat(u).concat(C)});s(M,c[A],f)}return f};var ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=void 0,ve.default=function(s,u){return Math.sqrt(s*s+u*u)};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=function(s,u){s.__set||(s.__set={});var c=function(v){typeof s[v]!="function"&&v!=="__set"&&Object.defineProperty(s,v,{get:function(){return v in s.__set?s.__set[v]:s.__set[v]=u[v]},set:function(S){s.__set[v]=S},configurable:!0})};for(var f in u)c(f);return s};var q={};function Me(s){return s instanceof p.default.Event||s instanceof p.default.Touch}function Ee(s,u,c){return s=s||"page",(c=c||{}).x=u[s+"X"],c.y=u[s+"Y"],c}function H(s,u){return u=u||{x:0,y:0},P.default.isOperaMobile&&Me(s)?(Ee("screen",s,u),u.x+=window.scrollX,u.y+=window.scrollY):Ee("page",s,u),u}function Ke(s,u){return u=u||{},P.default.isOperaMobile&&Me(s)?Ee("screen",s,u):Ee("client",s,u),u}function He(s){var u=[];return a.default.array(s)?(u[0]=s[0],u[1]=s[1]):s.type==="touchend"?s.touches.length===1?(u[0]=s.touches[0],u[1]=s.changedTouches[0]):s.touches.length===0&&(u[0]=s.changedTouches[0],u[1]=s.changedTouches[1]):(u[0]=s.touches[0],u[1]=s.touches[1]),u}function Te(s){for(var u={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<s.length;c++){var f=s[c];for(var v in u)u[v]+=f[v]}for(var S in u)u[S]/=s.length;return u}Object.defineProperty(q,"__esModule",{value:!0}),q.coordsToEvent=function(s){return{coords:s,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},q.copyCoords=function(s,u){s.page=s.page||{},s.page.x=u.page.x,s.page.y=u.page.y,s.client=s.client||{},s.client.x=u.client.x,s.client.y=u.client.y,s.timeStamp=u.timeStamp},q.getClientXY=Ke,q.getEventTargets=function(s){var u=a.default.func(s.composedPath)?s.composedPath():s.path;return[z.getActualElement(u?u[0]:s.target),z.getActualElement(s.currentTarget)]},q.getPageXY=H,q.getPointerId=function(s){return a.default.number(s.pointerId)?s.pointerId:s.identifier},q.getPointerType=function(s){return a.default.string(s.pointerType)?s.pointerType:a.default.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof p.default.Touch?"touch":"mouse"},q.getTouchPair=He,q.getXY=Ee,q.isNativePointer=Me,q.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},q.pointerAverage=Te,Object.defineProperty(q,"pointerExtend",{enumerable:!0,get:function(){return oe.default}}),q.setCoordDeltas=function(s,u,c){s.page.x=c.page.x-u.page.x,s.page.y=c.page.y-u.page.y,s.client.x=c.client.x-u.client.x,s.client.y=c.client.y-u.client.y,s.timeStamp=c.timeStamp-u.timeStamp},q.setCoordVelocity=function(s,u){var c=Math.max(u.timeStamp/1e3,.001);s.page.x=u.page.x/c,s.page.y=u.page.y/c,s.client.x=u.client.x/c,s.client.y=u.client.y/c,s.timeStamp=c},q.setCoords=function(s,u,c){var f=u.length>1?Te(u):u[0];H(f,s.page),Ke(f,s.client),s.timeStamp=c},q.setZeroCoords=function(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0},q.touchAngle=function(s,u){var c=u+"X",f=u+"Y",v=He(s),S=v[1][c]-v[0][c],A=v[1][f]-v[0][f];return 180*Math.atan2(A,S)/Math.PI},q.touchBBox=function(s){if(!s.length)return null;var u=He(s),c=Math.min(u[0].pageX,u[1].pageX),f=Math.min(u[0].pageY,u[1].pageY),v=Math.max(u[0].pageX,u[1].pageX),S=Math.max(u[0].pageY,u[1].pageY);return{x:c,y:f,left:c,top:f,right:v,bottom:S,width:v-c,height:S-f}},q.touchDistance=function(s,u){var c=u+"X",f=u+"Y",v=He(s),S=v[0][c]-v[1][c],A=v[0][f]-v[1][f];return(0,ve.default)(S,A)};var Be={};function ht(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function ze(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Be,"__esModule",{value:!0}),Be.BaseEvent=void 0;var Qe=function(){function s(f){(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),ze(this,"immediatePropagationStopped",!1),ze(this,"propagationStopped",!1),this._interaction=f}var u,c;return u=s,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&ht(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Be.BaseEvent=Qe,Object.defineProperty(Qe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.remove=Ye.merge=Ye.from=Ye.findIndex=Ye.find=Ye.contains=void 0,Ye.contains=function(s,u){return s.indexOf(u)!==-1},Ye.remove=function(s,u){return s.splice(s.indexOf(u),1)};var Tt=function(s,u){for(var c=0;c<u.length;c++){var f=u[c];s.push(f)}return s};Ye.merge=Tt,Ye.from=function(s){return Tt([],s)};var Ot=function(s,u){for(var c=0;c<s.length;c++)if(u(s[c],c,s))return c;return-1};Ye.findIndex=Ot,Ye.find=function(s,u){return s[Ot(s,u)]};var gt={};function lt(s){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},lt(s)}function Mt(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function jt(s,u){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},jt(s,u)}function F(s,u){if(u&&(lt(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D(s)}function D(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function se(s){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},se(s)}function me(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(gt,"__esModule",{value:!0}),gt.DropEvent=void 0;var xe=function(s){(function(M,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(C&&C.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),C&&jt(M,C)})(A,s);var u,c,f,v,S=(f=A,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,C=se(f);if(v){var U=se(this).constructor;M=Reflect.construct(C,arguments,U)}else M=C.apply(this,arguments);return F(this,M)});function A(M,C,U){var k;(function(Z,_e){if(!(Z instanceof _e))throw new TypeError("Cannot call a class as a function")})(this,A),me(D(k=S.call(this,C._interaction)),"dropzone",void 0),me(D(k),"dragEvent",void 0),me(D(k),"relatedTarget",void 0),me(D(k),"draggable",void 0),me(D(k),"propagationStopped",!1),me(D(k),"immediatePropagationStopped",!1);var V=U==="dragleave"?M.prev:M.cur,ee=V.element,ce=V.dropzone;return k.type=U,k.target=ee,k.currentTarget=ee,k.dropzone=ce,k.dragEvent=C,k.relatedTarget=C.target,k.draggable=C.interactable,k.timeStamp=C.timeStamp,k}return u=A,(c=[{key:"reject",value:function(){var M=this,C=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&C.cur.dropzone===this.dropzone&&C.cur.element===this.target)if(C.prev.dropzone=this.dropzone,C.prev.element=this.target,C.rejected=!0,C.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var U=C.activeDrops,k=Ye.findIndex(U,function(ee){var ce=ee.dropzone,Z=ee.element;return ce===M.dropzone&&Z===M.target});C.activeDrops.splice(k,1);var V=new A(C,this.dragEvent,"dropdeactivate");V.dropzone=this.dropzone,V.target=this.target,this.dropzone.fire(V)}else this.dropzone.fire(new A(C,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Mt(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),A}(Be.BaseEvent);gt.DropEvent=xe;var be={};function G(s,u){for(var c=0;c<s.slice().length;c++){var f=s.slice()[c],v=f.dropzone,S=f.element;u.dropzone=v,u.target=S,v.fire(u),u.propagationStopped=u.immediatePropagationStopped=!1}}function he(s,u){for(var c=function(S,A){for(var M=S.interactables,C=[],U=0;U<M.list.length;U++){var k=M.list[U];if(k.options.drop.enabled){var V=k.options.drop.accept;if(!(a.default.element(V)&&V!==A||a.default.string(V)&&!z.matchesSelector(A,V)||a.default.func(V)&&!V({dropzone:k,draggableElement:A})))for(var ee=a.default.string(k.target)?k._context.querySelectorAll(k.target):a.default.array(k.target)?k.target:[k.target],ce=0;ce<ee.length;ce++){var Z=ee[ce];Z!==A&&C.push({dropzone:k,element:Z,rect:k.getRect(Z)})}}}return C}(s,u),f=0;f<c.length;f++){var v=c[f];v.rect=v.dropzone.getRect(v.element)}return c}function ie(s,u,c){for(var f=s.dropState,v=s.interactable,S=s.element,A=[],M=0;M<f.activeDrops.length;M++){var C=f.activeDrops[M],U=C.dropzone,k=C.element,V=C.rect;A.push(U.dropCheck(u,c,v,S,k,V)?k:null)}var ee=z.indexOfDeepestElement(A);return f.activeDrops[ee]||null}function Ce(s,u,c){var f=s.dropState,v={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(v.activate=new gt.DropEvent(f,c,"dropactivate"),v.activate.target=null,v.activate.dropzone=null),c.type==="dragend"&&(v.deactivate=new gt.DropEvent(f,c,"dropdeactivate"),v.deactivate.target=null,v.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(v.leave=new gt.DropEvent(f,c,"dragleave"),c.dragLeave=v.leave.target=f.prev.element,c.prevDropzone=v.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(v.enter=new gt.DropEvent(f,c,"dragenter"),c.dragEnter=f.cur.element,c.dropzone=f.cur.dropzone)),c.type==="dragend"&&f.cur.dropzone&&(v.drop=new gt.DropEvent(f,c,"drop"),c.dropzone=f.cur.dropzone,c.relatedTarget=f.cur.element),c.type==="dragmove"&&f.cur.dropzone&&(v.move=new gt.DropEvent(f,c,"dropmove"),v.move.dragmove=c,c.dropzone=f.cur.dropzone)),v}function Le(s,u){var c=s.dropState,f=c.activeDrops,v=c.cur,S=c.prev;u.leave&&S.dropzone.fire(u.leave),u.enter&&v.dropzone.fire(u.enter),u.move&&v.dropzone.fire(u.move),u.drop&&v.dropzone.fire(u.drop),u.deactivate&&G(f,u.deactivate),c.prev.dropzone=v.dropzone,c.prev.element=v.element}function ke(s,u){var c=s.interaction,f=s.iEvent,v=s.event;if(f.type==="dragmove"||f.type==="dragend"){var S=c.dropState;u.dynamicDrop&&(S.activeDrops=he(u,c.element));var A=f,M=ie(c,A,v);S.rejected=S.rejected&&!!M&&M.dropzone===S.cur.dropzone&&M.element===S.cur.element,S.cur.dropzone=M&&M.dropzone,S.cur.element=M&&M.element,S.events=Ce(c,0,A)}}Object.defineProperty(be,"__esModule",{value:!0}),be.default=void 0;var Re={id:"actions/drop",install:function(s){var u=s.actions,c=s.interactStatic,f=s.Interactable,v=s.defaults;s.usePlugin(g.default),f.prototype.dropzone=function(S){return function(A,M){if(a.default.object(M)){if(A.options.drop.enabled=M.enabled!==!1,M.listeners){var C=(0,ne.default)(M.listeners),U=Object.keys(C).reduce(function(k,V){return k[/^(enter|leave)/.test(V)?"drag".concat(V):/^(activate|deactivate|move)/.test(V)?"drop".concat(V):V]=C[V],k},{});A.off(A.options.drop.listeners),A.on(U),A.options.drop.listeners=U}return a.default.func(M.ondrop)&&A.on("drop",M.ondrop),a.default.func(M.ondropactivate)&&A.on("dropactivate",M.ondropactivate),a.default.func(M.ondropdeactivate)&&A.on("dropdeactivate",M.ondropdeactivate),a.default.func(M.ondragenter)&&A.on("dragenter",M.ondragenter),a.default.func(M.ondragleave)&&A.on("dragleave",M.ondragleave),a.default.func(M.ondropmove)&&A.on("dropmove",M.ondropmove),/^(pointer|center)$/.test(M.overlap)?A.options.drop.overlap=M.overlap:a.default.number(M.overlap)&&(A.options.drop.overlap=Math.max(Math.min(1,M.overlap),0)),"accept"in M&&(A.options.drop.accept=M.accept),"checker"in M&&(A.options.drop.checker=M.checker),A}return a.default.bool(M)?(A.options.drop.enabled=M,A):A.options.drop}(this,S)},f.prototype.dropCheck=function(S,A,M,C,U,k){return function(V,ee,ce,Z,_e,Ae,ye){var Fe=!1;if(!(ye=ye||V.getRect(Ae)))return!!V.options.drop.checker&&V.options.drop.checker(ee,ce,Fe,V,Ae,Z,_e);var Xe=V.options.drop.overlap;if(Xe==="pointer"){var tt=(0,J.default)(Z,_e,"drag"),yt=q.getPageXY(ee);yt.x+=tt.x,yt.y+=tt.y;var bt=yt.x>ye.left&&yt.x<ye.right,ct=yt.y>ye.top&&yt.y<ye.bottom;Fe=bt&&ct}var wt=Z.getRect(_e);if(wt&&Xe==="center"){var ri=wt.left+wt.width/2,Xi=wt.top+wt.height/2;Fe=ri>=ye.left&&ri<=ye.right&&Xi>=ye.top&&Xi<=ye.bottom}return wt&&a.default.number(Xe)&&(Fe=Math.max(0,Math.min(ye.right,wt.right)-Math.max(ye.left,wt.left))*Math.max(0,Math.min(ye.bottom,wt.bottom)-Math.max(ye.top,wt.top))/(wt.width*wt.height)>=Xe),V.options.drop.checker&&(Fe=V.options.drop.checker(ee,ce,Fe,V,Ae,Z,_e)),Fe}(this,S,A,M,C,U,k)},c.dynamicDrop=function(S){return a.default.bool(S)?(s.dynamicDrop=S,c):s.dynamicDrop},(0,j.default)(u.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),u.methodDict.drop="dropzone",s.dynamicDrop=!1,v.actions.drop=Re.defaults},listeners:{"interactions:before-action-start":function(s){var u=s.interaction;u.prepared.name==="drag"&&(u.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,u){var c=s.interaction,f=(s.event,s.iEvent);if(c.prepared.name==="drag"){var v=c.dropState;v.activeDrops=null,v.events=null,v.activeDrops=he(u,c.element),v.events=Ce(c,0,f),v.events.activate&&(G(v.activeDrops,v.events.activate),u.fire("actions/drop:start",{interaction:c,dragEvent:f}))}},"interactions:action-move":ke,"interactions:after-action-move":function(s,u){var c=s.interaction,f=s.iEvent;c.prepared.name==="drag"&&(Le(c,c.dropState.events),u.fire("actions/drop:move",{interaction:c,dragEvent:f}),c.dropState.events={})},"interactions:action-end":function(s,u){if(s.interaction.prepared.name==="drag"){var c=s.interaction,f=s.iEvent;ke(s,u),Le(c,c.dropState.events),u.fire("actions/drop:end",{interaction:c,dragEvent:f})}},"interactions:stop":function(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:he,getDrop:ie,getDropEvents:Ce,fireDropEvents:Le,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ne=Re;be.default=Ne;var qe={};function Je(s){var u=s.interaction,c=s.iEvent,f=s.phase;if(u.prepared.name==="gesture"){var v=u.pointers.map(function(U){return U.pointer}),S=f==="start",A=f==="end",M=u.interactable.options.deltaSource;if(c.touches=[v[0],v[1]],S)c.distance=q.touchDistance(v,M),c.box=q.touchBBox(v),c.scale=1,c.ds=0,c.angle=q.touchAngle(v,M),c.da=0,u.gesture.startDistance=c.distance,u.gesture.startAngle=c.angle;else if(A){var C=u.prevEvent;c.distance=C.distance,c.box=C.box,c.scale=C.scale,c.ds=0,c.angle=C.angle,c.da=0}else c.distance=q.touchDistance(v,M),c.box=q.touchBBox(v),c.scale=c.distance/u.gesture.startDistance,c.angle=q.touchAngle(v,M),c.ds=c.scale-u.gesture.scale,c.da=c.angle-u.gesture.angle;u.gesture.distance=c.distance,u.gesture.angle=c.angle,a.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(u.gesture.scale=c.scale)}}Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=void 0;var At={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.gesturable=function(v){return a.default.object(v)?(this.options.gesture.enabled=v.enabled!==!1,this.setPerAction("gesture",v),this.setOnEvents("gesture",v),this):a.default.bool(v)?(this.options.gesture.enabled=v,this):this.options.gesture},u.map.gesture=At,u.methodDict.gesture="gesturable",f.actions.gesture=At.defaults},listeners:{"interactions:action-start":Je,"interactions:action-move":Je,"interactions:action-end":Je,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var u=s.interactable.options.gesture;if(u&&u.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},W=At;qe.default=W;var le={};function ge(s,u,c,f,v,S,A){if(!u)return!1;if(u===!0){var M=a.default.number(S.width)?S.width:S.right-S.left,C=a.default.number(S.height)?S.height:S.bottom-S.top;if(A=Math.min(A,Math.abs((s==="left"||s==="right"?M:C)/2)),M<0&&(s==="left"?s="right":s==="right"&&(s="left")),C<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var U=M>=0?S.left:S.right;return c.x<U+A}if(s==="top"){var k=C>=0?S.top:S.bottom;return c.y<k+A}if(s==="right")return c.x>(M>=0?S.right:S.left)-A;if(s==="bottom")return c.y>(C>=0?S.bottom:S.top)-A}return!!a.default.element(f)&&(a.default.element(u)?u===f:z.matchesUpTo(f,u,v))}function De(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var f=u;c.interactable.options.resize.square?(c.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=c.resizeAxes,c.resizeAxes==="x"?f.delta.y=0:c.resizeAxes==="y"&&(f.delta.x=0))}}Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;var Ie={id:"actions/resize",before:["actions/drag"],install:function(s){var u=s.actions,c=s.browser,f=s.Interactable,v=s.defaults;Ie.cursors=function(S){return S.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Ie.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,f.prototype.resizable=function(S){return function(A,M,C){return a.default.object(M)?(A.options.resize.enabled=M.enabled!==!1,A.setPerAction("resize",M),A.setOnEvents("resize",M),a.default.string(M.axis)&&/^x$|^y$|^xy$/.test(M.axis)?A.options.resize.axis=M.axis:M.axis===null&&(A.options.resize.axis=C.defaults.actions.resize.axis),a.default.bool(M.preserveAspectRatio)?A.options.resize.preserveAspectRatio=M.preserveAspectRatio:a.default.bool(M.square)&&(A.options.resize.square=M.square),A):a.default.bool(M)?(A.options.resize.enabled=M,A):A.options.resize}(this,S,s)},u.map.resize=Ie,u.methodDict.resize="resizable",v.actions.resize=Ie.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var v=c,S=f.rect;f._rects={start:(0,j.default)({},S),corrected:(0,j.default)({},S),previous:(0,j.default)({},S),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},v.edges=f.prepared.edges,v.rect=f._rects.corrected,v.deltaRect=f._rects.delta}})(s),De(s)},"interactions:action-move":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var v=c,S=f.interactable.options.resize.invert,A=S==="reposition"||S==="negate",M=f.rect,C=f._rects,U=C.start,k=C.corrected,V=C.delta,ee=C.previous;if((0,j.default)(ee,k),A){if((0,j.default)(k,M),S==="reposition"){if(k.top>k.bottom){var ce=k.top;k.top=k.bottom,k.bottom=ce}if(k.left>k.right){var Z=k.left;k.left=k.right,k.right=Z}}}else k.top=Math.min(M.top,U.bottom),k.bottom=Math.max(M.bottom,U.top),k.left=Math.min(M.left,U.right),k.right=Math.max(M.right,U.left);for(var _e in k.width=k.right-k.left,k.height=k.bottom-k.top,k)V[_e]=k[_e]-ee[_e];v.edges=f.prepared.edges,v.rect=k,v.deltaRect=V}})(s),De(s)},"interactions:action-end":function(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var f=u;f.edges=c.prepared.edges,f.rect=c._rects.corrected,f.deltaRect=c._rects.delta}},"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.element,v=s.rect,S=s.buttons;if(v){var A=(0,j.default)({},u.coords.cur.page),M=c.options.resize;if(M&&M.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||S&M.mouseButtons)){if(a.default.object(M.edges)){var C={left:!1,right:!1,top:!1,bottom:!1};for(var U in C)C[U]=ge(U,M.edges[U],A,u._latestPointer.eventTarget,f,v,M.margin||Ie.defaultMargin);C.left=C.left&&!C.right,C.top=C.top&&!C.bottom,(C.left||C.right||C.top||C.bottom)&&(s.action={name:"resize",edges:C})}else{var k=M.axis!=="y"&&A.x>v.right-Ie.defaultMargin,V=M.axis!=="x"&&A.y>v.bottom-Ie.defaultMargin;(k||V)&&(s.action={name:"resize",axes:(k?"x":"")+(V?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var u=s.edges,c=s.axis,f=s.name,v=Ie.cursors,S=null;if(c)S=v[f+c];else if(u){for(var A="",M=["top","bottom","left","right"],C=0;C<M.length;C++){var U=M[C];u[U]&&(A+=U)}S=v[A]}return S},defaultMargin:null},xt=Ie;le.default=xt;var pt={};Object.defineProperty(pt,"__esModule",{value:!0}),pt.default=void 0;var on={id:"actions",install:function(s){s.usePlugin(qe.default),s.usePlugin(le.default),s.usePlugin(g.default),s.usePlugin(be.default)}};pt.default=on;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var _t,Yt,jn=0,Io={request:function(s){return _t(s)},cancel:function(s){return Yt(s)},init:function(s){if(_t=s.requestAnimationFrame,Yt=s.cancelAnimationFrame,!_t)for(var u=["ms","moz","webkit","o"],c=0;c<u.length;c++){var f=u[c];_t=s["".concat(f,"RequestAnimationFrame")],Yt=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}_t=_t&&_t.bind(s),Yt=Yt&&Yt.bind(s),_t||(_t=function(v){var S=Date.now(),A=Math.max(0,16-(S-jn)),M=s.setTimeout(function(){v(S+A)},A);return jn=S+A,M},Yt=function(v){return clearTimeout(v)})}};Xt.default=Io;var ti={};Object.defineProperty(ti,"__esModule",{value:!0}),ti.default=void 0,ti.getContainer=Uo,ti.getScroll=Yr,ti.getScrollSize=function(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollWidth,y:s.scrollHeight}},ti.getScrollSizeDelta=function(s,u){var c=s.interaction,f=s.element,v=c&&c.interactable.options[c.prepared.name].autoScroll;if(!v||!v.enabled)return u(),{x:0,y:0};var S=Uo(v.container,c.interactable,f),A=Yr(S);u();var M=Yr(S);return{x:M.x-A.x,y:M.y-A.y}};var $e={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){$e.isScrolling=!0,Xt.default.cancel($e.i),s.autoScroll=$e,$e.interaction=s,$e.prevTime=$e.now(),$e.i=Xt.default.request($e.scroll)},stop:function(){$e.isScrolling=!1,$e.interaction&&($e.interaction.autoScroll=null),Xt.default.cancel($e.i)},scroll:function(){var s=$e.interaction,u=s.interactable,c=s.element,f=s.prepared.name,v=u.options[f].autoScroll,S=Uo(v.container,u,c),A=$e.now(),M=(A-$e.prevTime)/1e3,C=v.speed*M;if(C>=1){var U={x:$e.x*C,y:$e.y*C};if(U.x||U.y){var k=Yr(S);a.default.window(S)?S.scrollBy(U.x,U.y):S&&(S.scrollLeft+=U.x,S.scrollTop+=U.y);var V=Yr(S),ee={x:V.x-k.x,y:V.y-k.y};(ee.x||ee.y)&&u.fire({type:"autoscroll",target:c,interactable:u,delta:ee,interaction:s,container:S})}$e.prevTime=A}$e.isScrolling&&(Xt.default.cancel($e.i),$e.i=Xt.default.request($e.scroll))},check:function(s,u){var c;return(c=s.options[u].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(s){var u=s.interaction,c=s.pointer;if(u.interacting()&&$e.check(u.interactable,u.prepared.name))if(u.simulation)$e.x=$e.y=0;else{var f,v,S,A,M=u.interactable,C=u.element,U=u.prepared.name,k=M.options[U].autoScroll,V=Uo(k.container,M,C);if(a.default.window(V))A=c.clientX<$e.margin,f=c.clientY<$e.margin,v=c.clientX>V.innerWidth-$e.margin,S=c.clientY>V.innerHeight-$e.margin;else{var ee=z.getElementClientRect(V);A=c.clientX<ee.left+$e.margin,f=c.clientY<ee.top+$e.margin,v=c.clientX>ee.right-$e.margin,S=c.clientY>ee.bottom-$e.margin}$e.x=v?1:A?-1:0,$e.y=S?1:f?-1:0,$e.isScrolling||($e.margin=k.margin,$e.speed=k.speed,$e.start(u))}}};function Uo(s,u,c){return(a.default.string(s)?(0,ue.getStringOptionResult)(s,u,c):s)||(0,i.getWindow)(c)}function Yr(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var O={id:"auto-scroll",install:function(s){var u=s.defaults,c=s.actions;s.autoScroll=$e,$e.now=function(){return s.now()},c.phaselessTypes.autoscroll=!0,u.perAction.autoScroll=$e.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,$e.stop(),$e.interaction&&($e.interaction=null)},"interactions:stop":$e.stop,"interactions:action-move":function(s){return $e.onInteractionMove(s)}}},Q=O;ti.default=Q;var re={};Object.defineProperty(re,"__esModule",{value:!0}),re.copyAction=function(s,u){return s.name=u.name,s.axis=u.axis,s.edges=u.edges,s},re.sign=void 0,re.warnOnce=function(s,u){var c=!1;return function(){return c||(i.window.console.warn(u),c=!0),s.apply(this,arguments)}},re.sign=function(s){return s>=0?1:-1};var K={};function de(s){return a.default.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ge(s){return a.default.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;var We={id:"auto-start/interactableMethods",install:function(s){var u=s.Interactable;u.prototype.getAction=function(c,f,v,S){var A=function(M,C,U,k,V){var ee=M.getRect(k),ce={action:null,interactable:M,interaction:U,element:k,rect:ee,buttons:C.buttons||{0:1,1:4,3:8,4:16}[C.button]};return V.fire("auto-start:check",ce),ce.action}(this,f,v,S,s);return this.options.actionChecker?this.options.actionChecker(c,f,A,this,S,v):A},u.prototype.ignoreFrom=(0,re.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),u.prototype.allowFrom=(0,re.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),u.prototype.actionChecker=Ge,u.prototype.styleCursor=de}};K.default=We;var je={};function et(s,u,c,f,v){return u.testIgnoreAllow(u.options[s.name],c,f)&&u.options[s.name].enabled&&mt(u,c,s,v)?s:null}function rt(s,u,c,f,v,S,A){for(var M=0,C=f.length;M<C;M++){var U=f[M],k=v[M],V=U.getAction(u,c,s,k);if(V){var ee=et(V,U,k,S,A);if(ee)return{action:ee,interactable:U,element:k}}}return{action:null,interactable:null,element:null}}function nt(s,u,c,f,v){var S=[],A=[],M=f;function C(k){S.push(k),A.push(M)}for(;a.default.element(M);){S=[],A=[],v.interactables.forEachMatch(M,C);var U=rt(s,u,c,S,A,f,v);if(U.action&&!U.interactable.options[U.action.name].manualStart)return U;M=z.parentNode(M)}return{action:null,interactable:null,element:null}}function ot(s,u,c){var f=u.action,v=u.interactable,S=u.element;f=f||{name:null},s.interactable=v,s.element=S,(0,re.copyAction)(s.prepared,f),s.rect=v&&f.name?v.getRect(S):null,Di(s,c),c.fire("autoStart:prepared",{interaction:s})}function mt(s,u,c,f){var v=s.options,S=v[c.name].max,A=v[c.name].maxPerElement,M=f.autoStart.maxInteractions,C=0,U=0,k=0;if(!(S&&A&&M))return!1;for(var V=0;V<f.interactions.list.length;V++){var ee=f.interactions.list[V],ce=ee.prepared.name;if(ee.interacting()&&(++C>=M||ee.interactable===s&&((U+=ce===c.name?1:0)>=S||ee.element===u&&(k++,ce===c.name&&k>=A))))return!1}return M>0}function sn(s,u){return a.default.number(s)?(u.autoStart.maxInteractions=s,this):u.autoStart.maxInteractions}function Tn(s,u,c){var f=c.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=u,s.style.cursor=u,c.autoStart.cursorElement=u?s:null}function Di(s,u){var c=s.interactable,f=s.element,v=s.prepared;if(s.pointerType==="mouse"&&c&&c.options.styleCursor){var S="";if(v.name){var A=c.options[v.name].cursorChecker;S=a.default.func(A)?A(v,c,f,s._interacting):u.actions.map[v.name].getCursor(v)}Tn(s.element,S||"",u)}else u.autoStart.cursorElement&&Tn(u.autoStart.cursorElement,"",u)}Object.defineProperty(je,"__esModule",{value:!0}),je.default=void 0;var Bt={id:"auto-start/base",before:["actions"],install:function(s){var u=s.interactStatic,c=s.defaults;s.usePlugin(K.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,j.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),u.maxInteractions=function(f){return sn(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:mt,cursorElement:null}},listeners:{"interactions:down":function(s,u){var c=s.interaction,f=s.pointer,v=s.event,S=s.eventTarget;c.interacting()||ot(c,nt(c,f,v,S,u),u)},"interactions:move":function(s,u){(function(c,f){var v=c.interaction,S=c.pointer,A=c.event,M=c.eventTarget;v.pointerType!=="mouse"||v.pointerIsDown||v.interacting()||ot(v,nt(v,S,A,M,f),f)})(s,u),function(c,f){var v=c.interaction;if(v.pointerIsDown&&!v.interacting()&&v.pointerWasMoved&&v.prepared.name){f.fire("autoStart:before-start",c);var S=v.interactable,A=v.prepared.name;A&&S&&(S.options[A].manualStart||!mt(S,v.element,v.prepared,f)?v.stop():(v.start(v.prepared,S,v.element),Di(v,f)))}}(s,u)},"interactions:stop":function(s,u){var c=s.interaction,f=c.interactable;f&&f.options.styleCursor&&Tn(c.element,"",u)}},maxInteractions:sn,withinInteractionLimit:mt,validateAction:et},ut=Bt;je.default=ut;var dr={};Object.defineProperty(dr,"__esModule",{value:!0}),dr.default=void 0;var qt={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,u){var c=s.interaction,f=s.eventTarget,v=s.dx,S=s.dy;if(c.prepared.name==="drag"){var A=Math.abs(v),M=Math.abs(S),C=c.interactable.options.drag,U=C.startAxis,k=A>M?"x":A<M?"y":"xy";if(c.prepared.axis=C.lockAxis==="start"?k[0]:C.lockAxis,k!=="xy"&&U!=="xy"&&U!==k){c.prepared.name=null;for(var V=f,ee=function(Z){if(Z!==c.interactable){var _e=c.interactable.options.drag;if(!_e.manualStart&&Z.testIgnoreAllow(_e,V,f)){var Ae=Z.getAction(c.downPointer,c.downEvent,c,V);if(Ae&&Ae.name==="drag"&&function(ye,Fe){if(!Fe)return!1;var Xe=Fe.options.drag.startAxis;return ye==="xy"||Xe==="xy"||Xe===ye}(k,Z)&&je.default.validateAction(Ae,Z,V,f,u))return Z}}};a.default.element(V);){var ce=u.interactables.forEachMatch(V,ee);if(ce){c.prepared.name="drag",c.interactable=ce,c.element=V;break}V=(0,z.parentNode)(V)}}}}}};dr.default=qt;var ni={};function Oo(s){var u=s.prepared&&s.prepared.name;if(!u)return null;var c=s.interactable.options;return c[u].hold||c[u].delay}Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=void 0;var qr={id:"auto-start/hold",install:function(s){var u=s.defaults;s.usePlugin(je.default),u.perAction.hold=0,u.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var u=s.interaction,c=Oo(u);c>0&&(u.autoStartHoldTimer=setTimeout(function(){u.start(u.prepared,u.interactable,u.element)},c))},"interactions:move":function(s){var u=s.interaction,c=s.duplicate;u.autoStartHoldTimer&&u.pointerWasMoved&&!c&&(clearTimeout(u.autoStartHoldTimer),u.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var u=s.interaction;Oo(u)>0&&(u.prepared.name=null)}},getHoldDuration:Oo},Zs=qr;ni.default=Zs;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.default=void 0;var Hi={id:"auto-start",install:function(s){s.usePlugin(je.default),s.usePlugin(ni.default),s.usePlugin(dr.default)}};Ht.default=Hi;var pi={};function bn(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):a.default.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault}function Qs(s){var u=s.interaction,c=s.event;u.interactable&&u.interactable.checkAndPreventDefault(c)}function Cl(s){var u=s.Interactable;u.prototype.preventDefault=bn,u.prototype.checkAndPreventDefault=function(c){return function(f,v,S){var A=f.options.preventDefault;if(A!=="never")if(A!=="always"){if(v.events.supportsPassive&&/^touch(start|move)$/.test(S.type)){var M=(0,i.getWindow)(S.target).document,C=v.getDocOptions(M);if(!C||!C.events||C.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(S.type)||a.default.element(S.target)&&(0,z.matchesSelector)(S.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||S.preventDefault()}else S.preventDefault()}(this,s,c)},s.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var f=0;f<s.interactions.list.length;f++){var v=s.interactions.list[f];if(v.element&&(v.element===c.target||(0,z.nodeContains)(v.element,c.target)))return void v.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(pi,"__esModule",{value:!0}),pi.default=void 0,pi.install=Cl;var Al={id:"core/interactablePreventDefault",install:Cl,listeners:["down","move","up","cancel"].reduce(function(s,u){return s["interactions:".concat(u)]=Qs,s},{})};pi.default=Al;var Kc={};Object.defineProperty(Kc,"__esModule",{value:!0}),Kc.default=void 0,Kc.default={};var Js,Pl={};Object.defineProperty(Pl,"__esModule",{value:!0}),Pl.default=void 0,function(s){s.touchAction="touchAction",s.boxSizing="boxSizing",s.noListeners="noListeners"}(Js||(Js={})),Js.touchAction,Js.boxSizing,Js.noListeners;var Sx={id:"dev-tools",install:function(){}};Pl.default=Sx;var $r={};Object.defineProperty($r,"__esModule",{value:!0}),$r.default=function s(u){var c={};for(var f in u){var v=u[f];a.default.plainObject(v)?c[f]=s(v):a.default.array(v)?c[f]=Ye.from(v):c[f]=v}return c};var Kr={};function Vp(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var S,A,M=[],C=!0,U=!1;try{for(v=v.call(c);!(C=(S=v.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(k){U=!0,A=k}finally{try{C||v.return==null||v.return()}finally{if(U)throw A}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return Hp(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?Hp(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Hp(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function Mx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Zr(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.default=void 0,Kr.getRectOffset=Wp;var Ex=function(){function s(f){(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),Zr(this,"states",[]),Zr(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Zr(this,"startDelta",void 0),Zr(this,"result",void 0),Zr(this,"endResult",void 0),Zr(this,"edges",void 0),Zr(this,"interaction",void 0),this.interaction=f,this.result=Rl()}var u,c;return u=s,(c=[{key:"start",value:function(f,v){var S=f.phase,A=this.interaction,M=function(U){var k=U.interactable.options[U.prepared.name],V=k.modifiers;return V&&V.length?V:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var ce=k[ee];return ce&&ce.enabled&&{options:ce,methods:ce._methods}}).filter(function(ee){return!!ee})}(A);this.prepareStates(M),this.edges=(0,j.default)({},A.edges),this.startOffset=Wp(A.rect,v),this.startDelta={x:0,y:0};var C=this.fillArg({phase:S,pageCoords:v,preEnd:!1});return this.result=Rl(),this.startAll(C),this.result=this.setAll(C)}},{key:"fillArg",value:function(f){var v=this.interaction;return f.interaction=v,f.interactable=v.interactable,f.element=v.element,f.rect=f.rect||v.rect,f.edges=this.edges,f.startOffset=this.startOffset,f}},{key:"startAll",value:function(f){for(var v=0;v<this.states.length;v++){var S=this.states[v];S.methods.start&&(f.state=S,S.methods.start(f))}}},{key:"setAll",value:function(f){var v=f.phase,S=f.preEnd,A=f.skipModifiers,M=f.rect;f.coords=(0,j.default)({},f.pageCoords),f.rect=(0,j.default)({},M);for(var C=A?this.states.slice(A):this.states,U=Rl(f.coords,f.rect),k=0;k<C.length;k++){var V,ee=C[k],ce=ee.options,Z=(0,j.default)({},f.coords),_e=null;(V=ee.methods)!=null&&V.set&&this.shouldDo(ce,S,v)&&(f.state=ee,_e=ee.methods.set(f),ue.addEdges(this.interaction.edges,f.rect,{x:f.coords.x-Z.x,y:f.coords.y-Z.y})),U.eventProps.push(_e)}U.delta.x=f.coords.x-f.pageCoords.x,U.delta.y=f.coords.y-f.pageCoords.y,U.rectDelta.left=f.rect.left-M.left,U.rectDelta.right=f.rect.right-M.right,U.rectDelta.top=f.rect.top-M.top,U.rectDelta.bottom=f.rect.bottom-M.bottom;var Ae=this.result.coords,ye=this.result.rect;if(Ae&&ye){var Fe=U.rect.left!==ye.left||U.rect.right!==ye.right||U.rect.top!==ye.top||U.rect.bottom!==ye.bottom;U.changed=Fe||Ae.x!==U.coords.x||Ae.y!==U.coords.y}return U}},{key:"applyToInteraction",value:function(f){var v=this.interaction,S=f.phase,A=v.coords.cur,M=v.coords.start,C=this.result,U=this.startDelta,k=C.delta;S==="start"&&(0,j.default)(this.startDelta,C.delta);for(var V=0;V<[[M,U],[A,k]].length;V++){var ee=Vp([[M,U],[A,k]][V],2),ce=ee[0],Z=ee[1];ce.page.x+=Z.x,ce.page.y+=Z.y,ce.client.x+=Z.x,ce.client.y+=Z.y}var _e=this.result.rectDelta,Ae=f.rect||v.rect;Ae.left+=_e.left,Ae.right+=_e.right,Ae.top+=_e.top,Ae.bottom+=_e.bottom,Ae.width=Ae.right-Ae.left,Ae.height=Ae.bottom-Ae.top}},{key:"setAndApply",value:function(f){var v=this.interaction,S=f.phase,A=f.preEnd,M=f.skipModifiers,C=this.setAll(this.fillArg({preEnd:A,phase:S,pageCoords:f.modifiedCoords||v.coords.cur.page}));if(this.result=C,!C.changed&&(!M||M<this.states.length)&&v.interacting())return!1;if(f.modifiedCoords){var U=v.coords.cur.page,k={x:f.modifiedCoords.x-U.x,y:f.modifiedCoords.y-U.y};C.coords.x+=k.x,C.coords.y+=k.y,C.delta.x+=k.x,C.delta.y+=k.y}this.applyToInteraction(f)}},{key:"beforeEnd",value:function(f){var v=f.interaction,S=f.event,A=this.states;if(A&&A.length){for(var M=!1,C=0;C<A.length;C++){var U=A[C];f.state=U;var k=U.options,V=U.methods,ee=V.beforeEnd&&V.beforeEnd(f);if(ee)return this.endResult=ee,!1;M=M||!M&&this.shouldDo(k,!0,f.phase,!0)}M&&v.move({event:S,preEnd:!0})}}},{key:"stop",value:function(f){var v=f.interaction;if(this.states&&this.states.length){var S=(0,j.default)({states:this.states,interactable:v.interactable,element:v.element,rect:null},f);this.fillArg(S);for(var A=0;A<this.states.length;A++){var M=this.states[A];S.state=M,M.methods.stop&&M.methods.stop(S)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(f){this.states=[];for(var v=0;v<f.length;v++){var S=f[v],A=S.options,M=S.methods,C=S.name;this.states.push({options:A,methods:M,index:v,name:C})}return this.states}},{key:"restoreInteractionCoords",value:function(f){var v=f.interaction,S=v.coords,A=v.rect,M=v.modification;if(M.result){for(var C=M.startDelta,U=M.result,k=U.delta,V=U.rectDelta,ee=[[S.start,C],[S.cur,k]],ce=0;ce<ee.length;ce++){var Z=Vp(ee[ce],2),_e=Z[0],Ae=Z[1];_e.page.x-=Ae.x,_e.page.y-=Ae.y,_e.client.x-=Ae.x,_e.client.y-=Ae.y}A.left-=V.left,A.right-=V.right,A.top-=V.top,A.bottom-=V.bottom}}},{key:"shouldDo",value:function(f,v,S,A){return!(!f||f.enabled===!1||A&&!f.endOnly||f.endOnly&&!v||S==="start"&&!f.setStart)}},{key:"copyFrom",value:function(f){this.startOffset=f.startOffset,this.startDelta=f.startDelta,this.edges=f.edges,this.states=f.states.map(function(v){return(0,$r.default)(v)}),this.result=Rl((0,j.default)({},f.result.coords),(0,j.default)({},f.result.rect))}},{key:"destroy",value:function(){for(var f in this)this[f]=null}}])&&Mx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Rl(s,u){return{rect:u,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Wp(s,u){return s?{left:u.x-s.left,top:u.y-s.top,right:s.right-u.x,bottom:s.bottom-u.y}:{left:0,top:0,right:0,bottom:0}}Kr.default=Ex;var dn={};function Dl(s){var u=s.iEvent,c=s.interaction.modification.result;c&&(u.modifiers=c.eventProps)}Object.defineProperty(dn,"__esModule",{value:!0}),dn.addEventModifiers=Dl,dn.default=void 0,dn.makeModifier=function(s,u){var c=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},v=function(S){var A=S||{};for(var M in A.enabled=A.enabled!==!1,c)M in A||(A[M]=c[M]);var C={options:A,methods:f,name:u,enable:function(){return A.enabled=!0,C},disable:function(){return A.enabled=!1,C}};return C};return u&&typeof u=="string"&&(v._defaults=c,v._methods=f),v};var wx={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var u=s.interaction;u.modification=new Kr.default(u)},"interactions:before-action-start":function(s){var u=s.interaction.modification;u.start(s,s.interaction.coords.start.page),s.interaction.edges=u.edges,u.applyToInteraction(s)},"interactions:before-action-move":function(s){return s.interaction.modification.setAndApply(s)},"interactions:before-action-end":function(s){return s.interaction.modification.beforeEnd(s)},"interactions:action-start":Dl,"interactions:action-move":Dl,"interactions:action-end":Dl,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},Tx=wx;dn.default=Tx;var ea={};Object.defineProperty(ea,"__esModule",{value:!0}),ea.defaults=void 0,ea.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var ta={};function Zc(s){return Zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Zc(s)}function bx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Qc(s,u){return Qc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},Qc(s,u)}function Cx(s,u){if(u&&(Zc(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Et(s)}function Et(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ll(s){return Ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Ll(s)}function Pt(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(ta,"__esModule",{value:!0}),ta.InteractEvent=void 0;var jp=function(s){(function(M,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(C&&C.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),C&&Qc(M,C)})(A,s);var u,c,f,v,S=(f=A,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,C=Ll(f);if(v){var U=Ll(this).constructor;M=Reflect.construct(C,arguments,U)}else M=C.apply(this,arguments);return Cx(this,M)});function A(M,C,U,k,V,ee,ce){var Z;(function(bt,ct){if(!(bt instanceof ct))throw new TypeError("Cannot call a class as a function")})(this,A),Pt(Et(Z=S.call(this,M)),"relatedTarget",null),Pt(Et(Z),"screenX",void 0),Pt(Et(Z),"screenY",void 0),Pt(Et(Z),"button",void 0),Pt(Et(Z),"buttons",void 0),Pt(Et(Z),"ctrlKey",void 0),Pt(Et(Z),"shiftKey",void 0),Pt(Et(Z),"altKey",void 0),Pt(Et(Z),"metaKey",void 0),Pt(Et(Z),"page",void 0),Pt(Et(Z),"client",void 0),Pt(Et(Z),"delta",void 0),Pt(Et(Z),"rect",void 0),Pt(Et(Z),"x0",void 0),Pt(Et(Z),"y0",void 0),Pt(Et(Z),"t0",void 0),Pt(Et(Z),"dt",void 0),Pt(Et(Z),"duration",void 0),Pt(Et(Z),"clientX0",void 0),Pt(Et(Z),"clientY0",void 0),Pt(Et(Z),"velocity",void 0),Pt(Et(Z),"speed",void 0),Pt(Et(Z),"swipe",void 0),Pt(Et(Z),"axes",void 0),Pt(Et(Z),"preEnd",void 0),V=V||M.element;var _e=M.interactable,Ae=(_e&&_e.options||ea.defaults).deltaSource,ye=(0,J.default)(_e,V,U),Fe=k==="start",Xe=k==="end",tt=Fe?Et(Z):M.prevEvent,yt=Fe?M.coords.start:Xe?{page:tt.page,client:tt.client,timeStamp:M.coords.cur.timeStamp}:M.coords.cur;return Z.page=(0,j.default)({},yt.page),Z.client=(0,j.default)({},yt.client),Z.rect=(0,j.default)({},M.rect),Z.timeStamp=yt.timeStamp,Xe||(Z.page.x-=ye.x,Z.page.y-=ye.y,Z.client.x-=ye.x,Z.client.y-=ye.y),Z.ctrlKey=C.ctrlKey,Z.altKey=C.altKey,Z.shiftKey=C.shiftKey,Z.metaKey=C.metaKey,Z.button=C.button,Z.buttons=C.buttons,Z.target=V,Z.currentTarget=V,Z.preEnd=ee,Z.type=ce||U+(k||""),Z.interactable=_e,Z.t0=Fe?M.pointers[M.pointers.length-1].downTime:tt.t0,Z.x0=M.coords.start.page.x-ye.x,Z.y0=M.coords.start.page.y-ye.y,Z.clientX0=M.coords.start.client.x-ye.x,Z.clientY0=M.coords.start.client.y-ye.y,Z.delta=Fe||Xe?{x:0,y:0}:{x:Z[Ae].x-tt[Ae].x,y:Z[Ae].y-tt[Ae].y},Z.dt=M.coords.delta.timeStamp,Z.duration=Z.timeStamp-Z.t0,Z.velocity=(0,j.default)({},M.coords.velocity[Ae]),Z.speed=(0,ve.default)(Z.velocity.x,Z.velocity.y),Z.swipe=Xe||k==="inertiastart"?Z.getSwipe():null,Z}return u=A,(c=[{key:"getSwipe",value:function(){var M=this._interaction;if(M.prevEvent.speed<600||this.timeStamp-M.prevEvent.timeStamp>150)return null;var C=180*Math.atan2(M.prevEvent.velocityY,M.prevEvent.velocityX)/Math.PI;C<0&&(C+=360);var U=112.5<=C&&C<247.5,k=202.5<=C&&C<337.5;return{up:k,down:!k&&22.5<=C&&C<157.5,left:U,right:!U&&(292.5<=C||C<67.5),angle:C,speed:M.prevEvent.speed,velocity:{x:M.prevEvent.velocityX,y:M.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&bx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),A}(Be.BaseEvent);ta.InteractEvent=jp,Object.defineProperties(jp.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var na={};function Xp(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Ax(s,u,c){return u&&Xp(s.prototype,u),c&&Xp(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function ia(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(na,"__esModule",{value:!0}),na.PointerInfo=void 0;var Px=Ax(function s(u,c,f,v,S){(function(A,M){if(!(A instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),ia(this,"id",void 0),ia(this,"pointer",void 0),ia(this,"event",void 0),ia(this,"downTime",void 0),ia(this,"downTarget",void 0),this.id=u,this.pointer=c,this.event=f,this.downTime=v,this.downTarget=S});na.PointerInfo=Px;var Il,Ul,On={};function Rx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Nt(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(On,"__esModule",{value:!0}),On.Interaction=void 0,Object.defineProperty(On,"PointerInfo",{enumerable:!0,get:function(){return na.PointerInfo}}),On.default=On._ProxyValues=On._ProxyMethods=void 0,On._ProxyValues=Il,function(s){s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy=""}(Il||(On._ProxyValues=Il={})),On._ProxyMethods=Ul,function(s){s.start="",s.move="",s.end="",s.stop="",s.interacting=""}(Ul||(On._ProxyMethods=Ul={}));var Dx=0,Yp=function(){function s(f){var v=this,S=f.pointerType,A=f.scopeFire;(function(ee,ce){if(!(ee instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,s),Nt(this,"interactable",null),Nt(this,"element",null),Nt(this,"rect",null),Nt(this,"_rects",void 0),Nt(this,"edges",null),Nt(this,"_scopeFire",void 0),Nt(this,"prepared",{name:null,axis:null,edges:null}),Nt(this,"pointerType",void 0),Nt(this,"pointers",[]),Nt(this,"downEvent",null),Nt(this,"downPointer",{}),Nt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Nt(this,"prevEvent",null),Nt(this,"pointerIsDown",!1),Nt(this,"pointerWasMoved",!1),Nt(this,"_interacting",!1),Nt(this,"_ending",!1),Nt(this,"_stopped",!0),Nt(this,"_proxy",null),Nt(this,"simulation",null),Nt(this,"doMove",(0,re.warnOnce)(function(ee){this.move(ee)},"The interaction.doMove() method has been renamed to interaction.move()")),Nt(this,"coords",{start:q.newCoords(),prev:q.newCoords(),cur:q.newCoords(),delta:q.newCoords(),velocity:q.newCoords()}),Nt(this,"_id",Dx++),this._scopeFire=A,this.pointerType=S;var M=this;this._proxy={};var C=function(ee){Object.defineProperty(v._proxy,ee,{get:function(){return M[ee]}})};for(var U in Il)C(U);var k=function(ee){Object.defineProperty(v._proxy,ee,{value:function(){return M[ee].apply(M,arguments)}})};for(var V in Ul)k(V);this._scopeFire("interactions:new",{interaction:this})}var u,c;return u=s,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(f,v,S){var A=this.updatePointer(f,v,S,!0),M=this.pointers[A];this._scopeFire("interactions:down",{pointer:f,event:v,eventTarget:S,pointerIndex:A,pointerInfo:M,type:"down",interaction:this})}},{key:"start",value:function(f,v,S){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(f.name==="gesture"?2:1)||!v.options[f.name].enabled)&&((0,re.copyAction)(this.prepared,f),this.interactable=v,this.element=S,this.rect=v.getRect(S),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(f,v,S){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(f,v,S,!1);var A,M,C=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(A=this.coords.cur.client.x-this.coords.start.client.x,M=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ve.default)(A,M)>this.pointerMoveTolerance);var U=this.getPointerIndex(f),k={pointer:f,pointerIndex:U,pointerInfo:this.pointers[U],event:v,type:"move",eventTarget:S,dx:A,dy:M,duplicate:C,interaction:this};C||q.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",k),C||this.simulation||(this.interacting()&&(k.type=null,this.move(k)),this.pointerWasMoved&&q.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(f){f&&f.event||q.setZeroCoords(this.coords.delta),(f=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},f||{})).phase="move",this._doPhase(f)}},{key:"pointerUp",value:function(f,v,S,A){var M=this.getPointerIndex(f);M===-1&&(M=this.updatePointer(f,v,S,!1));var C=/cancel$/i.test(v.type)?"cancel":"up";this._scopeFire("interactions:".concat(C),{pointer:f,pointerIndex:M,pointerInfo:this.pointers[M],event:v,eventTarget:S,type:C,curEventTarget:A,interaction:this}),this.simulation||this.end(v),this.removePointer(f,v)}},{key:"documentBlur",value:function(f){this.end(f),this._scopeFire("interactions:blur",{event:f,type:"blur",interaction:this})}},{key:"end",value:function(f){var v;this._ending=!0,f=f||this._latestPointer.event,this.interacting()&&(v=this._doPhase({event:f,interaction:this,phase:"end"})),this._ending=!1,v===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(f){var v=q.getPointerId(f);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Ye.findIndex(this.pointers,function(S){return S.id===v})}},{key:"getPointerInfo",value:function(f){return this.pointers[this.getPointerIndex(f)]}},{key:"updatePointer",value:function(f,v,S,A){var M=q.getPointerId(f),C=this.getPointerIndex(f),U=this.pointers[C];return A=A!==!1&&(A||/(down|start)$/i.test(v.type)),U?U.pointer=f:(U=new na.PointerInfo(M,f,v,null,null),C=this.pointers.length,this.pointers.push(U)),q.setCoords(this.coords.cur,this.pointers.map(function(k){return k.pointer}),this._now()),q.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),A&&(this.pointerIsDown=!0,U.downTime=this.coords.cur.timeStamp,U.downTarget=S,q.pointerExtend(this.downPointer,f),this.interacting()||(q.copyCoords(this.coords.start,this.coords.cur),q.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=v,this.pointerWasMoved=!1)),this._updateLatestPointer(f,v,S),this._scopeFire("interactions:update-pointer",{pointer:f,event:v,eventTarget:S,down:A,pointerInfo:U,pointerIndex:C,interaction:this}),C}},{key:"removePointer",value:function(f,v){var S=this.getPointerIndex(f);if(S!==-1){var A=this.pointers[S];this._scopeFire("interactions:remove-pointer",{pointer:f,event:v,eventTarget:null,pointerIndex:S,pointerInfo:A,interaction:this}),this.pointers.splice(S,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(f,v,S){this._latestPointer.pointer=f,this._latestPointer.event=v,this._latestPointer.eventTarget=S}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(f,v,S,A){return new ta.InteractEvent(this,f,this.prepared.name,v,this.element,S,A)}},{key:"_fireEvent",value:function(f){var v;(v=this.interactable)==null||v.fire(f),(!this.prevEvent||f.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=f)}},{key:"_doPhase",value:function(f){var v=f.event,S=f.phase,A=f.preEnd,M=f.type,C=this.rect;if(C&&S==="move"&&(ue.addEdges(this.edges,C,this.coords.delta[this.interactable.options.deltaSource]),C.width=C.right-C.left,C.height=C.bottom-C.top),this._scopeFire("interactions:before-action-".concat(S),f)===!1)return!1;var U=f.iEvent=this._createPreparedEvent(v,S,A,M);return this._scopeFire("interactions:action-".concat(S),f),S==="start"&&(this.prevEvent=U),this._fireEvent(U),this._scopeFire("interactions:after-action-".concat(S),f),!0}},{key:"_now",value:function(){return Date.now()}}],c&&Rx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();On.Interaction=Yp;var Lx=Yp;On.default=Lx;var hr={};function qp(s){s.pointerIsDown&&(ef(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}function $p(s){Jc(s.interaction)}function Jc(s){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(s))return!1;var u=s.offset.pending;return ef(s.coords.cur,u),ef(s.coords.delta,u),ue.addEdges(s.edges,s.rect,u),u.x=0,u.y=0,!0}function Ix(s){var u=s.x,c=s.y;this.offset.pending.x+=u,this.offset.pending.y+=c,this.offset.total.x+=u,this.offset.total.y+=c}function ef(s,u){var c=s.page,f=s.client,v=u.x,S=u.y;c.x+=v,c.y+=S,f.x+=v,f.y+=S}Object.defineProperty(hr,"__esModule",{value:!0}),hr.addTotal=qp,hr.applyPending=Jc,hr.default=void 0,On._ProxyMethods.offsetBy="";var Ux={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=Ix},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return qp(s.interaction)},"interactions:before-action-start":$p,"interactions:before-action-move":$p,"interactions:before-action-end":function(s){var u=s.interaction;if(Jc(u))return u.move({offset:!0}),u.end(),!1},"interactions:stop":function(s){var u=s.interaction;u.offset.total.x=0,u.offset.total.y=0,u.offset.pending.x=0,u.offset.pending.y=0}}},Ox=Ux;hr.default=Ox;var Qr={};function Nx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function an(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.default=Qr.InertiaState=void 0;var Kp=function(){function s(f){(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),an(this,"active",!1),an(this,"isModified",!1),an(this,"smoothEnd",!1),an(this,"allowResume",!1),an(this,"modification",void 0),an(this,"modifierCount",0),an(this,"modifierArg",void 0),an(this,"startCoords",void 0),an(this,"t0",0),an(this,"v0",0),an(this,"te",0),an(this,"targetOffset",void 0),an(this,"modifiedOffset",void 0),an(this,"currentOffset",void 0),an(this,"lambda_v0",0),an(this,"one_ve_v0",0),an(this,"timeout",void 0),an(this,"interaction",void 0),this.interaction=f}var u,c;return u=s,(c=[{key:"start",value:function(f){var v=this.interaction,S=Ol(v);if(!S||!S.enabled)return!1;var A=v.coords.velocity.client,M=(0,ve.default)(A.x,A.y),C=this.modification||(this.modification=new Kr.default(v));if(C.copyFrom(v.modification),this.t0=v._now(),this.allowResume=S.allowResume,this.v0=M,this.currentOffset={x:0,y:0},this.startCoords=v.coords.cur.page,this.modifierArg=C.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-v.coords.cur.timeStamp<50&&M>S.minSpeed&&M>S.endSpeed)this.startInertia();else{if(C.result=C.setAll(this.modifierArg),!C.result.changed)return!1;this.startSmoothEnd()}return v.modification.result.rect=null,v.offsetBy(this.targetOffset),v._doPhase({interaction:v,event:f,phase:"inertiastart"}),v.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),v.modification.result.rect=null,this.active=!0,v.simulation=this,!0}},{key:"startInertia",value:function(){var f=this,v=this.interaction.coords.velocity.client,S=Ol(this.interaction),A=S.resistance,M=-Math.log(S.endSpeed/this.v0)/A;this.targetOffset={x:(v.x-M)/A,y:(v.y-M)/A},this.te=M,this.lambda_v0=A/this.v0,this.one_ve_v0=1-S.endSpeed/this.v0;var C=this.modification,U=this.modifierArg;U.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},C.result=C.setAll(U),C.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+C.result.delta.x,y:this.targetOffset.y+C.result.delta.y}),this.onNextFrame(function(){return f.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var f=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return f.smoothEndTick()})}},{key:"onNextFrame",value:function(f){var v=this;this.timeout=Xt.default.request(function(){v.active&&f()})}},{key:"inertiaTick",value:function(){var f,v,S,A,M,C=this,U=this.interaction,k=Ol(U).resistance,V=(U._now()-this.t0)/1e3;if(V<this.te){var ee,ce=1-(Math.exp(-k*V)-this.lambda_v0)/this.one_ve_v0;this.isModified?(f=this.targetOffset.x,v=this.targetOffset.y,S=this.modifiedOffset.x,A=this.modifiedOffset.y,ee={x:Zp(M=ce,0,f,S),y:Zp(M,0,v,A)}):ee={x:this.targetOffset.x*ce,y:this.targetOffset.y*ce};var Z={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=Z.x,this.currentOffset.y+=Z.y,U.offsetBy(Z),U.move(),this.onNextFrame(function(){return C.inertiaTick()})}else U.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var f=this,v=this.interaction,S=v._now()-this.t0,A=Ol(v).smoothEndDuration;if(S<A){var M={x:Qp(S,0,this.targetOffset.x,A),y:Qp(S,0,this.targetOffset.y,A)},C={x:M.x-this.currentOffset.x,y:M.y-this.currentOffset.y};this.currentOffset.x+=C.x,this.currentOffset.y+=C.y,v.offsetBy(C),v.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return f.smoothEndTick()})}else v.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(f){var v=f.pointer,S=f.event,A=f.eventTarget,M=this.interaction;M.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),M.updatePointer(v,S,A,!0),M._doPhase({interaction:M,event:S,phase:"resume"}),(0,q.copyCoords)(M.coords.prev,M.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Xt.default.cancel(this.timeout)}}])&&Nx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Ol(s){var u=s.interactable,c=s.prepared;return u&&u.options&&c.name&&u.options[c.name].inertia}Qr.InertiaState=Kp;var Fx={id:"inertia",before:["modifiers","actions"],install:function(s){var u=s.defaults;s.usePlugin(hr.default),s.usePlugin(dn.default),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,u.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var u=s.interaction;u.inertia=new Kp(u)},"interactions:before-action-end":function(s){var u=s.interaction,c=s.event;return(!u._interacting||u.simulation||!u.inertia.start(c))&&null},"interactions:down":function(s){var u=s.interaction,c=s.eventTarget,f=u.inertia;if(f.active)for(var v=c;a.default.element(v);){if(v===u.element){f.resume(s);break}v=z.parentNode(v)}},"interactions:stop":function(s){var u=s.interaction.inertia;u.active&&u.stop()},"interactions:before-action-resume":function(s){var u=s.interaction.modification;u.stop(s),u.start(s,s.interaction.coords.cur.page),u.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":dn.addEventModifiers,"interactions:action-inertiastart":dn.addEventModifiers,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function Zp(s,u,c,f){var v=1-s;return v*v*u+2*v*s*c+s*s*f}function Qp(s,u,c,f){return-c*(s/=f)*(s-2)+u}var kx=Fx;Qr.default=kx;var ra={};function zx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function oa(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function Jp(s,u){for(var c=0;c<u.length;c++){var f=u[c];if(s.immediatePropagationStopped)break;f(s)}}Object.defineProperty(ra,"__esModule",{value:!0}),ra.Eventable=void 0;var Bx=function(){function s(f){(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),oa(this,"options",void 0),oa(this,"types",{}),oa(this,"propagationStopped",!1),oa(this,"immediatePropagationStopped",!1),oa(this,"global",void 0),this.options=(0,j.default)({},f||{})}var u,c;return u=s,(c=[{key:"fire",value:function(f){var v,S=this.global;(v=this.types[f.type])&&Jp(f,v),!f.propagationStopped&&S&&(v=S[f.type])&&Jp(f,v)}},{key:"on",value:function(f,v){var S=(0,ne.default)(f,v);for(f in S)this.types[f]=Ye.merge(this.types[f]||[],S[f])}},{key:"off",value:function(f,v){var S=(0,ne.default)(f,v);for(f in S){var A=this.types[f];if(A&&A.length)for(var M=0;M<S[f].length;M++){var C=S[f][M],U=A.indexOf(C);U!==-1&&A.splice(U,1)}}}},{key:"getRect",value:function(f){return null}}])&&zx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();ra.Eventable=Bx;var sa={};Object.defineProperty(sa,"__esModule",{value:!0}),sa.default=function(s,u){if(u.phaselessTypes[s])return!0;for(var c in u.map)if(s.indexOf(c)===0&&s.substr(c.length)in u.phases)return!0;return!1};var tf={};Object.defineProperty(tf,"__esModule",{value:!0}),tf.createInteractStatic=function(s){var u=function c(f,v){var S=s.interactables.get(f,v);return S||((S=s.interactables.new(f,v)).events.global=c.globalEvents),S};return u.getPointerAverage=q.pointerAverage,u.getTouchBBox=q.touchBBox,u.getTouchDistance=q.touchDistance,u.getTouchAngle=q.touchAngle,u.getElementRect=z.getElementRect,u.getElementClientRect=z.getElementClientRect,u.matchesSelector=z.matchesSelector,u.closest=z.closest,u.globalEvents={},u.version="1.10.17",u.scope=s,u.use=function(c,f){return this.scope.usePlugin(c,f),this},u.isSet=function(c,f){return!!this.scope.interactables.get(c,f&&f.context)},u.on=(0,re.warnOnce)(function(c,f,v){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var S=0;S<c.length;S++){var A=c[S];this.on(A,f,v)}return this}if(a.default.object(c)){for(var M in c)this.on(M,c[M],f);return this}return(0,sa.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(f):this.globalEvents[c]=[f]:this.scope.events.add(this.scope.document,c,f,{options:v}),this},"The interact.on() method is being deprecated"),u.off=(0,re.warnOnce)(function(c,f,v){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var S=0;S<c.length;S++){var A=c[S];this.off(A,f,v)}return this}if(a.default.object(c)){for(var M in c)this.off(M,c[M],f);return this}var C;return(0,sa.default)(c,this.scope.actions)?c in this.globalEvents&&(C=this.globalEvents[c].indexOf(f))!==-1&&this.globalEvents[c].splice(C,1):this.scope.events.remove(this.scope.document,c,f,v),this},"The interact.off() method is being deprecated"),u.debug=function(){return this.scope},u.supportsTouch=function(){return P.default.supportsTouch},u.supportsPointerEvent=function(){return P.default.supportsPointerEvent},u.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},u.pointerMoveTolerance=function(c){return a.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},u.addDocument=function(c,f){this.scope.addDocument(c,f)},u.removeDocument=function(c){this.scope.removeDocument(c)},u};var Nl={};function Gx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Wi(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.Interactable=void 0;var Vx=function(){function s(f,v,S,A){(function(M,C){if(!(M instanceof C))throw new TypeError("Cannot call a class as a function")})(this,s),Wi(this,"options",void 0),Wi(this,"_actions",void 0),Wi(this,"target",void 0),Wi(this,"events",new ra.Eventable),Wi(this,"_context",void 0),Wi(this,"_win",void 0),Wi(this,"_doc",void 0),Wi(this,"_scopeEvents",void 0),Wi(this,"_rectChecker",void 0),this._actions=v.actions,this.target=f,this._context=v.context||S,this._win=(0,i.getWindow)((0,z.trySelector)(f)?this._context:f),this._doc=this._win.document,this._scopeEvents=A,this.set(v)}var u,c;return u=s,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(f,v){return a.default.func(v.onstart)&&this.on("".concat(f,"start"),v.onstart),a.default.func(v.onmove)&&this.on("".concat(f,"move"),v.onmove),a.default.func(v.onend)&&this.on("".concat(f,"end"),v.onend),a.default.func(v.oninertiastart)&&this.on("".concat(f,"inertiastart"),v.oninertiastart),this}},{key:"updatePerActionListeners",value:function(f,v,S){(a.default.array(v)||a.default.object(v))&&this.off(f,v),(a.default.array(S)||a.default.object(S))&&this.on(f,S)}},{key:"setPerAction",value:function(f,v){var S=this._defaults;for(var A in v){var M=A,C=this.options[f],U=v[M];M==="listeners"&&this.updatePerActionListeners(f,C.listeners,U),a.default.array(U)?C[M]=Ye.from(U):a.default.plainObject(U)?(C[M]=(0,j.default)(C[M]||{},(0,$r.default)(U)),a.default.object(S.perAction[M])&&"enabled"in S.perAction[M]&&(C[M].enabled=U.enabled!==!1)):a.default.bool(U)&&a.default.object(S.perAction[M])?C[M].enabled=U:C[M]=U}}},{key:"getRect",value:function(f){return f=f||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(f=f||this._context.querySelector(this.target)),(0,z.getElementRect)(f)}},{key:"rectChecker",value:function(f){var v=this;return a.default.func(f)?(this._rectChecker=f,this.getRect=function(S){var A=(0,j.default)({},v._rectChecker(S));return"width"in A||(A.width=A.right-A.left,A.height=A.bottom-A.top),A},this):f===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(f,v){if((0,z.trySelector)(v)||a.default.object(v)){for(var S in this.options[f]=v,this._actions.map)this.options[S][f]=v;return this}return this.options[f]}},{key:"origin",value:function(f){return this._backCompatOption("origin",f)}},{key:"deltaSource",value:function(f){return f==="page"||f==="client"?(this.options.deltaSource=f,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(f){return this._context===f.ownerDocument||(0,z.nodeContains)(this._context,f)}},{key:"testIgnoreAllow",value:function(f,v,S){return!this.testIgnore(f.ignoreFrom,v,S)&&this.testAllow(f.allowFrom,v,S)}},{key:"testAllow",value:function(f,v,S){return!f||!!a.default.element(S)&&(a.default.string(f)?(0,z.matchesUpTo)(S,f,v):!!a.default.element(f)&&(0,z.nodeContains)(f,S))}},{key:"testIgnore",value:function(f,v,S){return!(!f||!a.default.element(S))&&(a.default.string(f)?(0,z.matchesUpTo)(S,f,v):!!a.default.element(f)&&(0,z.nodeContains)(f,S))}},{key:"fire",value:function(f){return this.events.fire(f),this}},{key:"_onOff",value:function(f,v,S,A){a.default.object(v)&&!a.default.array(v)&&(A=S,S=null);var M=f==="on"?"add":"remove",C=(0,ne.default)(v,S);for(var U in C){U==="wheel"&&(U=P.default.wheelEvent);for(var k=0;k<C[U].length;k++){var V=C[U][k];(0,sa.default)(U,this._actions)?this.events[f](U,V):a.default.string(this.target)?this._scopeEvents["".concat(M,"Delegate")](this.target,this._context,U,V,A):this._scopeEvents[M](this.target,U,V,A)}}return this}},{key:"on",value:function(f,v,S){return this._onOff("on",f,v,S)}},{key:"off",value:function(f,v,S){return this._onOff("off",f,v,S)}},{key:"set",value:function(f){var v=this._defaults;for(var S in a.default.object(f)||(f={}),this.options=(0,$r.default)(v.base),this._actions.methodDict){var A=S,M=this._actions.methodDict[A];this.options[A]={},this.setPerAction(A,(0,j.default)((0,j.default)({},v.perAction),v.actions[A])),this[M](f[A])}for(var C in f)a.default.func(this[C])&&this[C](f[C]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var f in this._scopeEvents.delegatedEvents)for(var v=this._scopeEvents.delegatedEvents[f],S=v.length-1;S>=0;S--){var A=v[S],M=A.selector,C=A.context,U=A.listeners;M===this.target&&C===this._context&&v.splice(S,1);for(var k=U.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,f,U[k][0],U[k][1])}else this._scopeEvents.remove(this.target,"all")}}])&&Gx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Nl.Interactable=Vx;var Fl={};function Hx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function nf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Fl,"__esModule",{value:!0}),Fl.InteractableSet=void 0;var Wx=function(){function s(f){var v=this;(function(S,A){if(!(S instanceof A))throw new TypeError("Cannot call a class as a function")})(this,s),nf(this,"list",[]),nf(this,"selectorMap",{}),nf(this,"scope",void 0),this.scope=f,f.addListeners({"interactable:unset":function(S){var A=S.interactable,M=A.target,C=A._context,U=a.default.string(M)?v.selectorMap[M]:M[v.scope.id],k=Ye.findIndex(U,function(V){return V.context===C});U[k]&&(U[k].context=null,U[k].interactable=null),U.splice(k,1)}})}var u,c;return u=s,(c=[{key:"new",value:function(f,v){v=(0,j.default)(v||{},{actions:this.scope.actions});var S=new this.scope.Interactable(f,v,this.scope.document,this.scope.events),A={context:S._context,interactable:S};return this.scope.addDocument(S._doc),this.list.push(S),a.default.string(f)?(this.selectorMap[f]||(this.selectorMap[f]=[]),this.selectorMap[f].push(A)):(S.target[this.scope.id]||Object.defineProperty(f,this.scope.id,{value:[],configurable:!0}),f[this.scope.id].push(A)),this.scope.fire("interactable:new",{target:f,options:v,interactable:S,win:this.scope._win}),S}},{key:"get",value:function(f,v){var S=v&&v.context||this.scope.document,A=a.default.string(f),M=A?this.selectorMap[f]:f[this.scope.id];if(!M)return null;var C=Ye.find(M,function(U){return U.context===S&&(A||U.interactable.inContext(f))});return C&&C.interactable}},{key:"forEachMatch",value:function(f,v){for(var S=0;S<this.list.length;S++){var A=this.list[S],M=void 0;if((a.default.string(A.target)?a.default.element(f)&&z.matchesSelector(f,A.target):f===A.target)&&A.inContext(f)&&(M=v(A)),M!==void 0)return M}}}])&&Hx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Fl.InteractableSet=Wx;var kl={};function jx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function rf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function of(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var S,A,M=[],C=!0,U=!1;try{for(v=v.call(c);!(C=(S=v.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(k){U=!0,A=k}finally{try{C||v.return==null||v.return()}finally{if(U)throw A}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return em(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?em(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function em(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(kl,"__esModule",{value:!0}),kl.default=void 0;var Xx=function(){function s(f){(function(v,S){if(!(v instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),rf(this,"currentTarget",void 0),rf(this,"originalEvent",void 0),rf(this,"type",void 0),this.originalEvent=f,(0,oe.default)(this,f)}var u,c;return u=s,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&jx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function aa(s){if(!a.default.object(s))return{capture:!!s,passive:!1};var u=(0,j.default)({},s);return u.capture=!!s.capture,u.passive=!!s.passive,u}var Yx={id:"events",install:function(s){var u,c=[],f={},v=[],S={add:A,remove:M,addDelegate:function(k,V,ee,ce,Z){var _e=aa(Z);if(!f[ee]){f[ee]=[];for(var Ae=0;Ae<v.length;Ae++){var ye=v[Ae];A(ye,ee,C),A(ye,ee,U,!0)}}var Fe=f[ee],Xe=Ye.find(Fe,function(tt){return tt.selector===k&&tt.context===V});Xe||(Xe={selector:k,context:V,listeners:[]},Fe.push(Xe)),Xe.listeners.push([ce,_e])},removeDelegate:function(k,V,ee,ce,Z){var _e,Ae=aa(Z),ye=f[ee],Fe=!1;if(ye)for(_e=ye.length-1;_e>=0;_e--){var Xe=ye[_e];if(Xe.selector===k&&Xe.context===V){for(var tt=Xe.listeners,yt=tt.length-1;yt>=0;yt--){var bt=of(tt[yt],2),ct=bt[0],wt=bt[1],ri=wt.capture,Xi=wt.passive;if(ct===ce&&ri===Ae.capture&&Xi===Ae.passive){tt.splice(yt,1),tt.length||(ye.splice(_e,1),M(V,ee,C),M(V,ee,U,!0)),Fe=!0;break}}if(Fe)break}}},delegateListener:C,delegateUseCapture:U,delegatedEvents:f,documents:v,targets:c,supportsOptions:!1,supportsPassive:!1};function A(k,V,ee,ce){var Z=aa(ce),_e=Ye.find(c,function(Ae){return Ae.eventTarget===k});_e||(_e={eventTarget:k,events:{}},c.push(_e)),_e.events[V]||(_e.events[V]=[]),k.addEventListener&&!Ye.contains(_e.events[V],ee)&&(k.addEventListener(V,ee,S.supportsOptions?Z:Z.capture),_e.events[V].push(ee))}function M(k,V,ee,ce){var Z=aa(ce),_e=Ye.findIndex(c,function(yt){return yt.eventTarget===k}),Ae=c[_e];if(Ae&&Ae.events)if(V!=="all"){var ye=!1,Fe=Ae.events[V];if(Fe){if(ee==="all"){for(var Xe=Fe.length-1;Xe>=0;Xe--)M(k,V,Fe[Xe],Z);return}for(var tt=0;tt<Fe.length;tt++)if(Fe[tt]===ee){k.removeEventListener(V,ee,S.supportsOptions?Z:Z.capture),Fe.splice(tt,1),Fe.length===0&&(delete Ae.events[V],ye=!0);break}}ye&&!Object.keys(Ae.events).length&&c.splice(_e,1)}else for(V in Ae.events)Ae.events.hasOwnProperty(V)&&M(k,V,"all")}function C(k,V){for(var ee=aa(V),ce=new Xx(k),Z=f[k.type],_e=of(q.getEventTargets(k),1)[0],Ae=_e;a.default.element(Ae);){for(var ye=0;ye<Z.length;ye++){var Fe=Z[ye],Xe=Fe.selector,tt=Fe.context;if(z.matchesSelector(Ae,Xe)&&z.nodeContains(tt,_e)&&z.nodeContains(tt,Ae)){var yt=Fe.listeners;ce.currentTarget=Ae;for(var bt=0;bt<yt.length;bt++){var ct=of(yt[bt],2),wt=ct[0],ri=ct[1],Xi=ri.capture,wf=ri.passive;Xi===ee.capture&&wf===ee.passive&&wt(ce)}}}Ae=z.parentNode(Ae)}}function U(k){return C(k,!0)}return(u=s.document)==null||u.createElement("div").addEventListener("test",null,{get capture(){return S.supportsOptions=!0},get passive(){return S.supportsPassive=!0}}),s.events=S,S}};kl.default=Yx;var zl={};Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=void 0;var Bl={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var u=0;u<Bl.methodOrder.length;u++){var c;c=Bl.methodOrder[u];var f=Bl[c](s);if(f)return f}return null},simulationResume:function(s){var u=s.pointerType,c=s.eventType,f=s.eventTarget,v=s.scope;if(!/down|start/i.test(c))return null;for(var S=0;S<v.interactions.list.length;S++){var A=v.interactions.list[S],M=f;if(A.simulation&&A.simulation.allowResume&&A.pointerType===u)for(;M;){if(M===A.element)return A;M=z.parentNode(M)}}return null},mouseOrPen:function(s){var u,c=s.pointerId,f=s.pointerType,v=s.eventType,S=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var A=0;A<S.interactions.list.length;A++){var M=S.interactions.list[A];if(M.pointerType===f){if(M.simulation&&!tm(M,c))continue;if(M.interacting())return M;u||(u=M)}}if(u)return u;for(var C=0;C<S.interactions.list.length;C++){var U=S.interactions.list[C];if(!(U.pointerType!==f||/down/i.test(v)&&U.simulation))return U}return null},hasPointer:function(s){for(var u=s.pointerId,c=s.scope,f=0;f<c.interactions.list.length;f++){var v=c.interactions.list[f];if(tm(v,u))return v}return null},idle:function(s){for(var u=s.pointerType,c=s.scope,f=0;f<c.interactions.list.length;f++){var v=c.interactions.list[f];if(v.pointers.length===1){var S=v.interactable;if(S&&(!S.options.gesture||!S.options.gesture.enabled))continue}else if(v.pointers.length>=2)continue;if(!v.interacting()&&u===v.pointerType)return v}return null}};function tm(s,u){return s.pointers.some(function(c){return c.id===u})}var qx=Bl;zl.default=qx;var Gl={};function sf(s){return sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},sf(s)}function nm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var S,A,M=[],C=!0,U=!1;try{for(v=v.call(c);!(C=(S=v.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(k){U=!0,A=k}finally{try{C||v.return==null||v.return()}finally{if(U)throw A}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return im(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?im(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function im(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function $x(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function Kx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function af(s,u){return af=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},af(s,u)}function Zx(s,u){if(u&&(sf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function Vl(s){return Vl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Vl(s)}Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var lf=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function rm(s,u){return function(c){var f=u.interactions.list,v=q.getPointerType(c),S=nm(q.getEventTargets(c),2),A=S[0],M=S[1],C=[];if(/^touch/.test(c.type)){u.prevTouchTime=u.now();for(var U=0;U<c.changedTouches.length;U++){var k=c.changedTouches[U],V={pointer:k,pointerId:q.getPointerId(k),pointerType:v,eventType:c.type,eventTarget:A,curEventTarget:M,scope:u},ee=om(V);C.push([V.pointer,V.eventTarget,V.curEventTarget,ee])}}else{var ce=!1;if(!P.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var Z=0;Z<f.length&&!ce;Z++)ce=f[Z].pointerType!=="mouse"&&f[Z].pointerIsDown;ce=ce||u.now()-u.prevTouchTime<500||c.timeStamp===0}if(!ce){var _e={pointer:c,pointerId:q.getPointerId(c),pointerType:v,eventType:c.type,curEventTarget:M,eventTarget:A,scope:u},Ae=om(_e);C.push([_e.pointer,_e.eventTarget,_e.curEventTarget,Ae])}}for(var ye=0;ye<C.length;ye++){var Fe=nm(C[ye],4),Xe=Fe[0],tt=Fe[1],yt=Fe[2];Fe[3][s](Xe,c,tt,yt)}}}function om(s){var u=s.pointerType,c=s.scope,f={interaction:zl.default.search(s),searchDetails:s};return c.fire("interactions:find",f),f.interaction||c.interactions.new({pointerType:u})}function uf(s,u){var c=s.doc,f=s.scope,v=s.options,S=f.interactions.docEvents,A=f.events,M=A[u];for(var C in f.browser.isIOS&&!v.events&&(v.events={passive:!1}),A.delegatedEvents)M(c,C,A.delegateListener),M(c,C,A.delegateUseCapture,!0);for(var U=v&&v.events,k=0;k<S.length;k++){var V=S[k];M(c,V.type,V.listener,U)}}var Qx={id:"core/interactions",install:function(s){for(var u={},c=0;c<lf.length;c++){var f=lf[c];u[f]=rm(f,s)}var v,S=P.default.pEventTypes;function A(){for(var M=0;M<s.interactions.list.length;M++){var C=s.interactions.list[M];if(C.pointerIsDown&&C.pointerType==="touch"&&!C._interacting)for(var U=function(){var V=C.pointers[k];s.documents.some(function(ee){var ce=ee.doc;return(0,z.nodeContains)(ce,V.downTarget)})||C.removePointer(V.pointer,V.event)},k=0;k<C.pointers.length;k++)U()}}(v=p.default.PointerEvent?[{type:S.down,listener:A},{type:S.down,listener:u.pointerDown},{type:S.move,listener:u.pointerMove},{type:S.up,listener:u.pointerUp},{type:S.cancel,listener:u.pointerUp}]:[{type:"mousedown",listener:u.pointerDown},{type:"mousemove",listener:u.pointerMove},{type:"mouseup",listener:u.pointerUp},{type:"touchstart",listener:A},{type:"touchstart",listener:u.pointerDown},{type:"touchmove",listener:u.pointerMove},{type:"touchend",listener:u.pointerUp},{type:"touchcancel",listener:u.pointerUp}]).push({type:"blur",listener:function(M){for(var C=0;C<s.interactions.list.length;C++)s.interactions.list[C].documentBlur(M)}}),s.prevTouchTime=0,s.Interaction=function(M){(function(Z,_e){if(typeof _e!="function"&&_e!==null)throw new TypeError("Super expression must either be null or a function");Z.prototype=Object.create(_e&&_e.prototype,{constructor:{value:Z,writable:!0,configurable:!0}}),Object.defineProperty(Z,"prototype",{writable:!1}),_e&&af(Z,_e)})(ce,M);var C,U,k,V,ee=(k=ce,V=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var Z,_e=Vl(k);if(V){var Ae=Vl(this).constructor;Z=Reflect.construct(_e,arguments,Ae)}else Z=_e.apply(this,arguments);return Zx(this,Z)});function ce(){return $x(this,ce),ee.apply(this,arguments)}return C=ce,(U=[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(Z){s.interactions.pointerMoveTolerance=Z}},{key:"_now",value:function(){return s.now()}}])&&Kx(C.prototype,U),Object.defineProperty(C,"prototype",{writable:!1}),ce}(On.default),s.interactions={list:[],new:function(M){M.scopeFire=function(U,k){return s.fire(U,k)};var C=new s.Interaction(M);return s.interactions.list.push(C),C},listeners:u,docEvents:v,pointerMoveTolerance:1},s.usePlugin(pi.default)},listeners:{"scope:add-document":function(s){return uf(s,"add")},"scope:remove-document":function(s){return uf(s,"remove")},"interactable:unset":function(s,u){for(var c=s.interactable,f=u.interactions.list.length-1;f>=0;f--){var v=u.interactions.list[f];v.interactable===c&&(v.stop(),u.fire("interactions:destroy",{interaction:v}),v.destroy(),u.interactions.list.length>2&&u.interactions.list.splice(f,1))}}},onDocSignal:uf,doOnInteractions:rm,methodNames:lf},Jx=Qx;Gl.default=Jx;var la={};function cf(s){return cf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},cf(s)}function ua(){return ua=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(s,u,c){var f=eS(s,u);if(f){var v=Object.getOwnPropertyDescriptor(f,u);return v.get?v.get.call(arguments.length<3?s:c):v.value}},ua.apply(this,arguments)}function eS(s,u){for(;!Object.prototype.hasOwnProperty.call(s,u)&&(s=pr(s))!==null;);return s}function ff(s,u){return ff=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},ff(s,u)}function tS(s,u){if(u&&(cf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function pr(s){return pr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},pr(s)}function sm(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function am(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function lm(s,u,c){return u&&am(s.prototype,u),c&&am(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function hn(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(la,"__esModule",{value:!0}),la.Scope=void 0,la.initScope=um;var nS=function(){function s(){var u=this;sm(this,s),hn(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),hn(this,"isInitialized",!1),hn(this,"listenerMaps",[]),hn(this,"browser",P.default),hn(this,"defaults",(0,$r.default)(ea.defaults)),hn(this,"Eventable",ra.Eventable),hn(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),hn(this,"interactStatic",(0,tf.createInteractStatic)(this)),hn(this,"InteractEvent",ta.InteractEvent),hn(this,"Interactable",void 0),hn(this,"interactables",new Fl.InteractableSet(this)),hn(this,"_win",void 0),hn(this,"document",void 0),hn(this,"window",void 0),hn(this,"documents",[]),hn(this,"_plugins",{list:[],map:{}}),hn(this,"onWindowUnload",function(f){return u.removeDocument(f.target)});var c=this;this.Interactable=function(f){(function(C,U){if(typeof U!="function"&&U!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(U&&U.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),U&&ff(C,U)})(M,f);var v,S,A=(v=M,S=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var C,U=pr(v);if(S){var k=pr(this).constructor;C=Reflect.construct(U,arguments,k)}else C=U.apply(this,arguments);return tS(this,C)});function M(){return sm(this,M),A.apply(this,arguments)}return lm(M,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(C){return ua(pr(M.prototype),"set",this).call(this,C),c.fire("interactable:set",{options:C,interactable:this}),this}},{key:"unset",value:function(){ua(pr(M.prototype),"unset",this).call(this);var C=c.interactables.list.indexOf(this);C<0||(ua(pr(M.prototype),"unset",this).call(this),c.interactables.list.splice(C,1),c.fire("interactable:unset",{interactable:this}))}}]),M}(Nl.Interactable)}return lm(s,[{key:"addListeners",value:function(u,c){this.listenerMaps.push({id:c,map:u})}},{key:"fire",value:function(u,c){for(var f=0;f<this.listenerMaps.length;f++){var v=this.listenerMaps[f].map[u];if(v&&v(c,this,u)===!1)return!1}}},{key:"init",value:function(u){return this.isInitialized?this:um(this,u)}},{key:"pluginIsInstalled",value:function(u){return this._plugins.map[u.id]||this._plugins.list.indexOf(u)!==-1}},{key:"usePlugin",value:function(u,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(u))return this;if(u.id&&(this._plugins.map[u.id]=u),this._plugins.list.push(u),u.install&&u.install(this,c),u.listeners&&u.before){for(var f=0,v=this.listenerMaps.length,S=u.before.reduce(function(M,C){return M[C]=!0,M[cm(C)]=!0,M},{});f<v;f++){var A=this.listenerMaps[f].id;if(S[A]||S[cm(A)])break}this.listenerMaps.splice(f,0,{id:u.id,map:u.listeners})}else u.listeners&&this.listenerMaps.push({id:u.id,map:u.listeners});return this}},{key:"addDocument",value:function(u,c){if(this.getDocIndex(u)!==-1)return!1;var f=i.getWindow(u);c=c?(0,j.default)({},c):{},this.documents.push({doc:u,options:c}),this.events.documents.push(u),u!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:u,window:f,scope:this,options:c})}},{key:"removeDocument",value:function(u){var c=this.getDocIndex(u),f=i.getWindow(u),v=this.documents[c].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:u,window:f,scope:this,options:v})}},{key:"getDocIndex",value:function(u){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===u)return c;return-1}},{key:"getDocOptions",value:function(u){var c=this.getDocIndex(u);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s}();function um(s,u){return s.isInitialized=!0,a.default.window(u)&&i.init(u),p.default.init(u),P.default.init(u),Xt.default.init(u),s.window=u,s.document=u.document,s.usePlugin(Gl.default),s.usePlugin(kl.default),s}function cm(s){return s&&s.replace(/\/.*$/,"")}la.Scope=nS;var pn={};Object.defineProperty(pn,"__esModule",{value:!0}),pn.default=void 0;var fm=new la.Scope,iS=fm.interactStatic;pn.default=iS;var rS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;fm.init(rS);var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0,Hl.default=function(){};var Wl={};Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0,Wl.default=function(){};var jl={};function dm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var S,A,M=[],C=!0,U=!1;try{for(v=v.call(c);!(C=(S=v.next()).done)&&(M.push(S.value),!f||M.length!==f);C=!0);}catch(k){U=!0,A=k}finally{try{C||v.return==null||v.return()}finally{if(U)throw A}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return hm(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?hm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function hm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(jl,"__esModule",{value:!0}),jl.default=void 0,jl.default=function(s){var u=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(f){var v=dm(f,2),S=v[0],A=v[1];return S in s||A in s}),c=function(f,v){for(var S=s.range,A=s.limits,M=A===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:A,C=s.offset,U=C===void 0?{x:0,y:0}:C,k={range:S,grid:s,x:null,y:null},V=0;V<u.length;V++){var ee=dm(u[V],2),ce=ee[0],Z=ee[1],_e=Math.round((f-U.x)/s[ce]),Ae=Math.round((v-U.y)/s[Z]);k[ce]=Math.max(M.left,Math.min(M.right,_e*s[ce]+U.x)),k[Z]=Math.max(M.top,Math.min(M.bottom,Ae*s[Z]+U.y))}return k};return c.grid=s,c.coordFields=u,c};var ca={};Object.defineProperty(ca,"__esModule",{value:!0}),Object.defineProperty(ca,"edgeTarget",{enumerable:!0,get:function(){return Hl.default}}),Object.defineProperty(ca,"elements",{enumerable:!0,get:function(){return Wl.default}}),Object.defineProperty(ca,"grid",{enumerable:!0,get:function(){return jl.default}});var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var oS={id:"snappers",install:function(s){var u=s.interactStatic;u.snappers=(0,j.default)(u.snappers||{},ca),u.createSnapGrid=u.snappers.grid}},sS=oS;Xl.default=sS;var No={};function pm(s,u){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);u&&(f=f.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),c.push.apply(c,f)}return c}function df(s){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?pm(Object(c),!0).forEach(function(f){aS(s,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):pm(Object(c)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(c,f))})}return s}function aS(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(No,"__esModule",{value:!0}),No.default=No.aspectRatio=void 0;var mm={start:function(s){var u=s.state,c=s.rect,f=s.edges,v=s.pageCoords,S=u.options.ratio,A=u.options,M=A.equalDelta,C=A.modifiers;S==="preserve"&&(S=c.width/c.height),u.startCoords=(0,j.default)({},v),u.startRect=(0,j.default)({},c),u.ratio=S,u.equalDelta=M;var U=u.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(u.xIsPrimaryAxis=!(!f.left&&!f.right),u.equalDelta){var k=(U.left?1:-1)*(U.top?1:-1);u.edgeSign={x:k,y:k}}else u.edgeSign={x:U.left?-1:1,y:U.top?-1:1};if((0,j.default)(s.edges,U),C&&C.length){var V=new Kr.default(s.interaction);V.copyFrom(s.interaction.modification),V.prepareStates(C),u.subModification=V,V.startAll(df({},s))}},set:function(s){var u=s.state,c=s.rect,f=s.coords,v=(0,j.default)({},f),S=u.equalDelta?lS:uS;if(S(u,u.xIsPrimaryAxis,f,c),!u.subModification)return null;var A=(0,j.default)({},c);(0,ue.addEdges)(u.linkedEdges,A,{x:f.x-v.x,y:f.y-v.y});var M=u.subModification.setAll(df(df({},s),{},{rect:A,edges:u.linkedEdges,pageCoords:f,prevCoords:f,prevRect:A})),C=M.delta;return M.changed&&(S(u,Math.abs(C.x)>Math.abs(C.y),M.coords,M.rect),(0,j.default)(f,M.coords)),M.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function lS(s,u,c){var f=s.startCoords,v=s.edgeSign;u?c.y=f.y+(c.x-f.x)*v.y:c.x=f.x+(c.y-f.y)*v.x}function uS(s,u,c,f){var v=s.startRect,S=s.startCoords,A=s.ratio,M=s.edgeSign;if(u){var C=f.width/A;c.y=S.y+(C-v.height)*M.y}else{var U=f.height*A;c.x=S.x+(U-v.width)*M.x}}No.aspectRatio=mm;var cS=(0,dn.makeModifier)(mm,"aspectRatio");No.default=cS;var Jr={};Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=void 0;var vm=function(){};vm._defaults={};var fS=vm;Jr.default=fS;var hf={};Object.defineProperty(hf,"__esModule",{value:!0}),Object.defineProperty(hf,"default",{enumerable:!0,get:function(){return Jr.default}});var Cn={};function pf(s,u,c){return a.default.func(s)?ue.resolveRectLike(s,u.interactable,u.element,[c.x,c.y,u]):ue.resolveRectLike(s,u.interactable,u.element)}Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0,Cn.getRestrictionRect=pf,Cn.restrict=void 0;var gm={start:function(s){var u=s.rect,c=s.startOffset,f=s.state,v=s.interaction,S=s.pageCoords,A=f.options,M=A.elementRect,C=(0,j.default)({left:0,top:0,right:0,bottom:0},A.offset||{});if(u&&M){var U=pf(A.restriction,v,S);if(U){var k=U.right-U.left-u.width,V=U.bottom-U.top-u.height;k<0&&(C.left+=k,C.right+=k),V<0&&(C.top+=V,C.bottom+=V)}C.left+=c.left-u.width*M.left,C.top+=c.top-u.height*M.top,C.right+=c.right-u.width*(1-M.right),C.bottom+=c.bottom-u.height*(1-M.bottom)}f.offset=C},set:function(s){var u=s.coords,c=s.interaction,f=s.state,v=f.options,S=f.offset,A=pf(v.restriction,c,u);if(A){var M=ue.xywhToTlbr(A);u.x=Math.max(Math.min(M.right-S.right,u.x),M.left+S.left),u.y=Math.max(Math.min(M.bottom-S.bottom,u.y),M.top+S.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Cn.restrict=gm;var dS=(0,dn.makeModifier)(gm,"restrict");Cn.default=dS;var Li={};Object.defineProperty(Li,"__esModule",{value:!0}),Li.restrictEdges=Li.default=void 0;var _m={top:1/0,left:1/0,bottom:-1/0,right:-1/0},ym={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function xm(s,u){for(var c=["top","left","bottom","right"],f=0;f<c.length;f++){var v=c[f];v in s||(s[v]=u[v])}return s}var Sm={noInner:_m,noOuter:ym,start:function(s){var u,c=s.interaction,f=s.startOffset,v=s.state,S=v.options;if(S){var A=(0,Cn.getRestrictionRect)(S.offset,c,c.coords.start.page);u=ue.rectToXY(A)}u=u||{x:0,y:0},v.offset={top:u.y+f.top,left:u.x+f.left,bottom:u.y-f.bottom,right:u.x-f.right}},set:function(s){var u=s.coords,c=s.edges,f=s.interaction,v=s.state,S=v.offset,A=v.options;if(c){var M=(0,j.default)({},u),C=(0,Cn.getRestrictionRect)(A.inner,f,M)||{},U=(0,Cn.getRestrictionRect)(A.outer,f,M)||{};xm(C,_m),xm(U,ym),c.top?u.y=Math.min(Math.max(U.top+S.top,M.y),C.top+S.top):c.bottom&&(u.y=Math.max(Math.min(U.bottom+S.bottom,M.y),C.bottom+S.bottom)),c.left?u.x=Math.min(Math.max(U.left+S.left,M.x),C.left+S.left):c.right&&(u.x=Math.max(Math.min(U.right+S.right,M.x),C.right+S.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Li.restrictEdges=Sm;var hS=(0,dn.makeModifier)(Sm,"restrictEdges");Li.default=hS;var Fo={};Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.restrictRect=Fo.default=void 0;var pS=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},Cn.restrict.defaults),Mm={start:Cn.restrict.start,set:Cn.restrict.set,defaults:pS};Fo.restrictRect=Mm;var mS=(0,dn.makeModifier)(Mm,"restrictRect");Fo.default=mS;var ko={};Object.defineProperty(ko,"__esModule",{value:!0}),ko.restrictSize=ko.default=void 0;var vS={width:-1/0,height:-1/0},gS={width:1/0,height:1/0},Em={start:function(s){return Li.restrictEdges.start(s)},set:function(s){var u=s.interaction,c=s.state,f=s.rect,v=s.edges,S=c.options;if(v){var A=ue.tlbrToXywh((0,Cn.getRestrictionRect)(S.min,u,s.coords))||vS,M=ue.tlbrToXywh((0,Cn.getRestrictionRect)(S.max,u,s.coords))||gS;c.options={endOnly:S.endOnly,inner:(0,j.default)({},Li.restrictEdges.noInner),outer:(0,j.default)({},Li.restrictEdges.noOuter)},v.top?(c.options.inner.top=f.bottom-A.height,c.options.outer.top=f.bottom-M.height):v.bottom&&(c.options.inner.bottom=f.top+A.height,c.options.outer.bottom=f.top+M.height),v.left?(c.options.inner.left=f.right-A.width,c.options.outer.left=f.right-M.width):v.right&&(c.options.inner.right=f.left+A.width,c.options.outer.right=f.left+M.width),Li.restrictEdges.set(s),c.options=S}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};ko.restrictSize=Em;var _S=(0,dn.makeModifier)(Em,"restrictSize");ko.default=_S;var mf={};Object.defineProperty(mf,"__esModule",{value:!0}),Object.defineProperty(mf,"default",{enumerable:!0,get:function(){return Jr.default}});var mr={};Object.defineProperty(mr,"__esModule",{value:!0}),mr.snap=mr.default=void 0;var wm={start:function(s){var u,c=s.interaction,f=s.interactable,v=s.element,S=s.rect,A=s.state,M=s.startOffset,C=A.options,U=C.offsetWithOrigin?function(ee){var ce=ee.interaction.element;return(0,ue.rectToXY)((0,ue.resolveRectLike)(ee.state.options.origin,null,null,[ce]))||(0,J.default)(ee.interactable,ce,ee.interaction.prepared.name)}(s):{x:0,y:0};if(C.offset==="startCoords")u={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var k=(0,ue.resolveRectLike)(C.offset,f,v,[c]);(u=(0,ue.rectToXY)(k)||{x:0,y:0}).x+=U.x,u.y+=U.y}var V=C.relativePoints;A.offsets=S&&V&&V.length?V.map(function(ee,ce){return{index:ce,relativePoint:ee,x:M.left-S.width*ee.x+u.x,y:M.top-S.height*ee.y+u.y}}):[{index:0,relativePoint:null,x:u.x,y:u.y}]},set:function(s){var u=s.interaction,c=s.coords,f=s.state,v=f.options,S=f.offsets,A=(0,J.default)(u.interactable,u.element,u.prepared.name),M=(0,j.default)({},c),C=[];v.offsetWithOrigin||(M.x-=A.x,M.y-=A.y);for(var U=0;U<S.length;U++)for(var k=S[U],V=M.x-k.x,ee=M.y-k.y,ce=0,Z=v.targets.length;ce<Z;ce++){var _e,Ae=v.targets[ce];(_e=a.default.func(Ae)?Ae(V,ee,u._proxy,k,ce):Ae)&&C.push({x:(a.default.number(_e.x)?_e.x:V)+k.x,y:(a.default.number(_e.y)?_e.y:ee)+k.y,range:a.default.number(_e.range)?_e.range:v.range,source:Ae,index:ce,offset:k})}for(var ye={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Fe=0;Fe<C.length;Fe++){var Xe=C[Fe],tt=Xe.range,yt=Xe.x-M.x,bt=Xe.y-M.y,ct=(0,ve.default)(yt,bt),wt=ct<=tt;tt===1/0&&ye.inRange&&ye.range!==1/0&&(wt=!1),ye.target&&!(wt?ye.inRange&&tt!==1/0?ct/tt<ye.distance/ye.range:tt===1/0&&ye.range!==1/0||ct<ye.distance:!ye.inRange&&ct<ye.distance)||(ye.target=Xe,ye.distance=ct,ye.range=tt,ye.inRange=wt,ye.delta.x=yt,ye.delta.y=bt)}return ye.inRange&&(c.x=ye.target.x,c.y=ye.target.y),f.closest=ye,ye},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};mr.snap=wm;var yS=(0,dn.makeModifier)(wm,"snap");mr.default=yS;var ji={};function Tm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(ji,"__esModule",{value:!0}),ji.snapSize=ji.default=void 0;var bm={start:function(s){var u=s.state,c=s.edges,f=u.options;if(!c)return null;s.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},u.targetFields=u.targetFields||[["width","height"],["x","y"]],mr.snap.start(s),u.offsets=s.state.offsets,s.state=u},set:function(s){var u,c,f=s.interaction,v=s.state,S=s.coords,A=v.options,M=v.offsets,C={x:S.x-M[0].x,y:S.y-M[0].y};v.options=(0,j.default)({},A),v.options.targets=[];for(var U=0;U<(A.targets||[]).length;U++){var k=(A.targets||[])[U],V=void 0;if(V=a.default.func(k)?k(C.x,C.y,f):k){for(var ee=0;ee<v.targetFields.length;ee++){var ce=(u=v.targetFields[ee],c=2,function(ye){if(Array.isArray(ye))return ye}(u)||function(ye,Fe){var Xe=ye==null?null:typeof Symbol<"u"&&ye[Symbol.iterator]||ye["@@iterator"];if(Xe!=null){var tt,yt,bt=[],ct=!0,wt=!1;try{for(Xe=Xe.call(ye);!(ct=(tt=Xe.next()).done)&&(bt.push(tt.value),!Fe||bt.length!==Fe);ct=!0);}catch(ri){wt=!0,yt=ri}finally{try{ct||Xe.return==null||Xe.return()}finally{if(wt)throw yt}}return bt}}(u,c)||function(ye,Fe){if(ye){if(typeof ye=="string")return Tm(ye,Fe);var Xe=Object.prototype.toString.call(ye).slice(8,-1);return Xe==="Object"&&ye.constructor&&(Xe=ye.constructor.name),Xe==="Map"||Xe==="Set"?Array.from(ye):Xe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Xe)?Tm(ye,Fe):void 0}}(u,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=ce[0],_e=ce[1];if(Z in V||_e in V){V.x=V[Z],V.y=V[_e];break}}v.options.targets.push(V)}}var Ae=mr.snap.set(s);return v.options=A,Ae},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ji.snapSize=bm;var xS=(0,dn.makeModifier)(bm,"snapSize");ji.default=xS;var zo={};Object.defineProperty(zo,"__esModule",{value:!0}),zo.snapEdges=zo.default=void 0;var Cm={start:function(s){var u=s.edges;return u?(s.state.targetFields=s.state.targetFields||[[u.left?"left":"right",u.top?"top":"bottom"]],ji.snapSize.start(s)):null},set:ji.snapSize.set,defaults:(0,j.default)((0,$r.default)(ji.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};zo.snapEdges=Cm;var SS=(0,dn.makeModifier)(Cm,"snapEdges");zo.default=SS;var vf={};Object.defineProperty(vf,"__esModule",{value:!0}),Object.defineProperty(vf,"default",{enumerable:!0,get:function(){return Jr.default}});var gf={};Object.defineProperty(gf,"__esModule",{value:!0}),Object.defineProperty(gf,"default",{enumerable:!0,get:function(){return Jr.default}});var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var MS={aspectRatio:No.default,restrictEdges:Li.default,restrict:Cn.default,restrictRect:Fo.default,restrictSize:ko.default,snapEdges:zo.default,snap:mr.default,snapSize:ji.default,spring:vf.default,avoid:hf.default,transform:gf.default,rubberband:mf.default};Bo.default=MS;var fa={};Object.defineProperty(fa,"__esModule",{value:!0}),fa.default=void 0;var ES={id:"modifiers",install:function(s){var u=s.interactStatic;for(var c in s.usePlugin(dn.default),s.usePlugin(Xl.default),u.modifiers=Bo.default,Bo.default){var f=Bo.default[c],v=f._defaults,S=f._methods;v._methods=S,s.defaults.perAction[c]=v}}},wS=ES;fa.default=wS;var eo={};function _f(s){return _f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},_f(s)}function TS(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function yf(s,u){return yf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},yf(s,u)}function bS(s,u){if(u&&(_f(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xf(s)}function xf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Yl(s){return Yl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Yl(s)}Object.defineProperty(eo,"__esModule",{value:!0}),eo.default=eo.PointerEvent=void 0;var CS=function(s){(function(M,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(C&&C.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),C&&yf(M,C)})(A,s);var u,c,f,v,S=(f=A,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,C=Yl(f);if(v){var U=Yl(this).constructor;M=Reflect.construct(C,arguments,U)}else M=C.apply(this,arguments);return bS(this,M)});function A(M,C,U,k,V,ee){var ce;if(function(Ae,ye){if(!(Ae instanceof ye))throw new TypeError("Cannot call a class as a function")}(this,A),ce=S.call(this,V),q.pointerExtend(xf(ce),U),U!==C&&q.pointerExtend(xf(ce),C),ce.timeStamp=ee,ce.originalEvent=U,ce.type=M,ce.pointerId=q.getPointerId(C),ce.pointerType=q.getPointerType(C),ce.target=k,ce.currentTarget=null,M==="tap"){var Z=V.getPointerIndex(C);ce.dt=ce.timeStamp-V.pointers[Z].downTime;var _e=ce.timeStamp-V.tapTime;ce.double=!!V.prevTap&&V.prevTap.type!=="doubletap"&&V.prevTap.target===ce.target&&_e<500}else M==="doubletap"&&(ce.dt=C.timeStamp-V.tapTime,ce.double=!0);return ce}return u=A,(c=[{key:"_subtractOrigin",value:function(M){var C=M.x,U=M.y;return this.pageX-=C,this.pageY-=U,this.clientX-=C,this.clientY-=U,this}},{key:"_addOrigin",value:function(M){var C=M.x,U=M.y;return this.pageX+=C,this.pageY+=U,this.clientX+=C,this.clientY+=U,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&TS(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),A}(Be.BaseEvent);eo.PointerEvent=eo.default=CS;var da={};Object.defineProperty(da,"__esModule",{value:!0}),da.default=void 0;var ql={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=ql,s.defaults.actions.pointerEvents=ql.defaults,(0,j.default)(s.actions.phaselessTypes,ql.types)},listeners:{"interactions:new":function(s){var u=s.interaction;u.prevTap=null,u.tapTime=0},"interactions:update-pointer":function(s){var u=s.down,c=s.pointerInfo;!u&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(s,u){var c=s.interaction,f=s.pointer,v=s.event,S=s.eventTarget;s.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&Sf(s),vr({interaction:c,pointer:f,event:v,eventTarget:S,type:"move"},u))},"interactions:down":function(s,u){(function(c,f){for(var v=c.interaction,S=c.pointer,A=c.event,M=c.eventTarget,C=c.pointerIndex,U=v.pointers[C].hold,k=z.getPath(M),V={interaction:v,pointer:S,event:A,eventTarget:M,type:"hold",targets:[],path:k,node:null},ee=0;ee<k.length;ee++){var ce=k[ee];V.node=ce,f.fire("pointerEvents:collect-targets",V)}if(V.targets.length){for(var Z=1/0,_e=0;_e<V.targets.length;_e++){var Ae=V.targets[_e].eventable.options.holdDuration;Ae<Z&&(Z=Ae)}U.duration=Z,U.timeout=setTimeout(function(){vr({interaction:v,eventTarget:M,pointer:S,event:A,type:"hold"},f)},Z)}})(s,u),vr(s,u)},"interactions:up":function(s,u){Sf(s),vr(s,u),function(c,f){var v=c.interaction,S=c.pointer,A=c.event,M=c.eventTarget;v.pointerWasMoved||vr({interaction:v,eventTarget:M,pointer:S,event:A,type:"tap"},f)}(s,u)},"interactions:cancel":function(s,u){Sf(s),vr(s,u)}},PointerEvent:eo.PointerEvent,fire:vr,collectEventTargets:Am,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function vr(s,u){var c=s.interaction,f=s.pointer,v=s.event,S=s.eventTarget,A=s.type,M=s.targets,C=M===void 0?Am(s,u):M,U=new eo.PointerEvent(A,f,v,S,c,u.now());u.fire("pointerEvents:new",{pointerEvent:U});for(var k={interaction:c,pointer:f,event:v,eventTarget:S,targets:C,type:A,pointerEvent:U},V=0;V<C.length;V++){var ee=C[V];for(var ce in ee.props||{})U[ce]=ee.props[ce];var Z=(0,J.default)(ee.eventable,ee.node);if(U._subtractOrigin(Z),U.eventable=ee.eventable,U.currentTarget=ee.node,ee.eventable.fire(U),U._addOrigin(Z),U.immediatePropagationStopped||U.propagationStopped&&V+1<C.length&&C[V+1].node!==U.currentTarget)break}if(u.fire("pointerEvents:fired",k),A==="tap"){var _e=U.double?vr({interaction:c,pointer:f,event:v,eventTarget:S,type:"doubletap"},u):U;c.prevTap=_e,c.tapTime=_e.timeStamp}return U}function Am(s,u){var c=s.interaction,f=s.pointer,v=s.event,S=s.eventTarget,A=s.type,M=c.getPointerIndex(f),C=c.pointers[M];if(A==="tap"&&(c.pointerWasMoved||!C||C.downTarget!==S))return[];for(var U=z.getPath(S),k={interaction:c,pointer:f,event:v,eventTarget:S,type:A,path:U,targets:[],node:null},V=0;V<U.length;V++){var ee=U[V];k.node=ee,u.fire("pointerEvents:collect-targets",k)}return A==="hold"&&(k.targets=k.targets.filter(function(ce){var Z;return ce.eventable.options.holdDuration===((Z=c.pointers[M])==null?void 0:Z.hold.duration)})),k.targets}function Sf(s){var u=s.interaction,c=s.pointerIndex,f=u.pointers[c].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var AS=ql;da.default=AS;var $l={};function PS(s){var u=s.interaction;u.holdIntervalHandle&&(clearInterval(u.holdIntervalHandle),u.holdIntervalHandle=null)}Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var RS={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(da.default);var u=s.pointerEvents;u.defaults.holdRepeatInterval=0,u.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(s,u){return s["pointerEvents:".concat(u)]=PS,s},{"pointerEvents:new":function(s){var u=s.pointerEvent;u.type==="hold"&&(u.count=(u.count||0)+1)},"pointerEvents:fired":function(s,u){var c=s.interaction,f=s.pointerEvent,v=s.eventTarget,S=s.targets;if(f.type==="hold"&&S.length){var A=S[0].eventable.options.holdRepeatInterval;A<=0||(c.holdIntervalHandle=setTimeout(function(){u.pointerEvents.fire({interaction:c,eventTarget:v,type:"hold",pointer:f,event:f},u)},A))}}})},DS=RS;$l.default=DS;var Kl={};function LS(s){return(0,j.default)(this.events.options,s),this}Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.default=void 0;var IS={id:"pointer-events/interactableTargets",install:function(s){var u=s.Interactable;u.prototype.pointerEvents=LS;var c=u.prototype._backCompatOption;u.prototype._backCompatOption=function(f,v){var S=c.call(this,f,v);return S===this&&(this.events.options[f]=v),S}},listeners:{"pointerEvents:collect-targets":function(s,u){var c=s.targets,f=s.node,v=s.type,S=s.eventTarget;u.interactables.forEachMatch(f,function(A){var M=A.events,C=M.options;M.types[v]&&M.types[v].length&&A.testIgnoreAllow(C,f,S)&&c.push({node:f,eventable:M,props:{interactable:A}})})},"interactable:new":function(s){var u=s.interactable;u.events.getRect=function(c){return u.getRect(c)}},"interactable:set":function(s,u){var c=s.interactable,f=s.options;(0,j.default)(c.events.options,u.pointerEvents.defaults),(0,j.default)(c.events.options,f.pointerEvents||{})}}},US=IS;Kl.default=US;var ha={};Object.defineProperty(ha,"__esModule",{value:!0}),ha.default=void 0;var OS={id:"pointer-events",install:function(s){s.usePlugin(da),s.usePlugin($l.default),s.usePlugin(Kl.default)}},NS=OS;ha.default=NS;var Go={};function Pm(s){var u=s.Interactable;s.actions.phases.reflow=!0,u.prototype.reflow=function(c){return function(f,v,S){for(var A=a.default.string(f.target)?Ye.from(f._context.querySelectorAll(f.target)):[f.target],M=S.window.Promise,C=M?[]:null,U=function(){var V=A[k],ee=f.getRect(V);if(!ee)return"break";var ce=Ye.find(S.interactions.list,function(Fe){return Fe.interacting()&&Fe.interactable===f&&Fe.element===V&&Fe.prepared.name===v.name}),Z=void 0;if(ce)ce.move(),C&&(Z=ce._reflowPromise||new M(function(Fe){ce._reflowResolve=Fe}));else{var _e=(0,ue.tlbrToXywh)(ee),Ae={page:{x:_e.x,y:_e.y},client:{x:_e.x,y:_e.y},timeStamp:S.now()},ye=q.coordsToEvent(Ae);Z=function(Fe,Xe,tt,yt,bt){var ct=Fe.interactions.new({pointerType:"reflow"}),wt={interaction:ct,event:bt,pointer:bt,eventTarget:tt,phase:"reflow"};ct.interactable=Xe,ct.element=tt,ct.prevEvent=bt,ct.updatePointer(bt,bt,tt,!0),q.setZeroCoords(ct.coords.delta),(0,re.copyAction)(ct.prepared,yt),ct._doPhase(wt);var ri=Fe.window.Promise,Xi=ri?new ri(function(wf){ct._reflowResolve=wf}):void 0;return ct._reflowPromise=Xi,ct.start(yt,Xe,tt),ct._interacting?(ct.move(wt),ct.end(bt)):(ct.stop(),ct._reflowResolve()),ct.removePointer(bt,bt),Xi}(S,f,V,v,ye)}C&&C.push(Z)},k=0;k<A.length&&U()!=="break";k++);return C&&M.all(C).then(function(){return f})}(this,c,s)}}Object.defineProperty(Go,"__esModule",{value:!0}),Go.default=void 0,Go.install=Pm;var FS={id:"reflow",install:Pm,listeners:{"interactions:stop":function(s,u){var c=s.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),Ye.remove(u.interactions.list,c))}}},kS=FS;Go.default=kS;var ii={exports:{}};function Mf(s){return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Mf(s)}Object.defineProperty(ii.exports,"__esModule",{value:!0}),ii.exports.default=void 0,pn.default.use(pi.default),pn.default.use(hr.default),pn.default.use(ha.default),pn.default.use(Qr.default),pn.default.use(fa.default),pn.default.use(Ht.default),pn.default.use(pt.default),pn.default.use(ti.default),pn.default.use(Go.default);var zS=pn.default;if(ii.exports.default=zS,Mf(ii)==="object"&&ii)try{ii.exports=pn.default}catch{}pn.default.default=pn.default,pt.default,ti.default,Ht.default,pi.default,Pl.default,Qr.default,pn.default,fa.default,hr.default,ha.default,Go.default,ii=ii.exports;var to={exports:{}};function Ef(s){return Ef=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Ef(s)}Object.defineProperty(to.exports,"__esModule",{value:!0}),to.exports.default=void 0;var BS=ii.default;if(to.exports.default=BS,Ef(to)==="object"&&to)try{to.exports=ii.default}catch{}return ii.default.default=ii.default,to.exports})})(Py);var hw=Py.exports;const pw=GS(hw),{abs:Rp,cos:Ry,sin:mw,cosh:dR,sinh:hR,acos:pR,acosh:mR,tan:vw,min:zv,max:Dy,round:gw,sqrt:Vc,sign:Ly,floor:_w,log:vR,exp:gR,PI:ll}=Math,Iy=t=>{if(t.length===1)return t[0][0];let e=0;for(let n=0;n<t.length;n++){const i=new Array(t.length-1).fill().map(()=>new Array(t.length-1).fill(0));for(let o=1;o<t.length;o++)for(let l=0;l<t.length;l++)l<n?i[o-1][l]=t[o][l]:l>n&&(i[o-1][l-1]=t[o][l]);const r=n%2===0?1:-1;e+=t[0][n]*r*Iy(i)}return e},yw=t=>{const e=Iy(t);return Rp(e)<1e-8?0:Ly(e)},Uy=(t,e,n)=>{let i=0;for(let r=0;r<t.length;r++)i+=t[r]*e[r]*(r===t.length-1&&n||1);return i},xw=(t,e)=>{if(t=t.slice(),e===0){for(let i=0;i<t.length;i++)t[i]/=t[t.length-1];return t}const n=(e===-1&&Ly(t[t.length-1])||1)/Vc(Rp(Uy(t,t,e)));for(let i=0;i<t.length;i++)t[i]*=n;return t},Zf=(t,e)=>{const[n,i]=t,r=Ry(e),o=mw(e);t[0]=n*r-i*o,t[1]=n*o+i*r},Qf=(t,e,n)=>{if(n!==0){const i=e/Vc(Uy(t,t,1)),r=new Array(t.length-1);for(let o=0;o<t.length-1;o++)r[o]=t[o]*i;$u(t,r,n)}else for(let i=0;i<t.length;i++)t[i]*=1-e},Sw=(t,e,n)=>{const i=t.length,r=n;for(let o=0;o<i-1;o++){const l=e[o];if(l!==0){const a=Vc(1-r*l*l),d=l;let h=t[o],m=t[i-1];t[o]=a*h+-r*d*m,t[i-1]=d*h+a*m}}},$u=(t,e,n)=>{if(n===0)for(let i=0;i<e.length;i++)t[i]+=e[i];else Sw(t,e,n)},Mw=(t,e)=>{const n=t[0].length,i=new Array(n).fill().map(()=>new Array(n).fill(0));i[0][0]=1;for(let r=1;r<n;r++){for(let o=0;o<r;o++){let l=0;for(let a=0;a<o;a++)l+=i[r][a]*i[o][a];i[r][o]=(t[r][o]-l)/i[o][o]}i[r][r]=Vc(Rp(1-i[r].slice(0,r).reduce((o,l)=>o+l*l,0)))}return i[i.length-1][i.length-1]=e?i[i.length-1][i.length-1]*e:1,i},Ew=(t,e,n)=>{const i=t.length,r=new Array(i);for(let o=0;o<i;o++){let l=0;for(let a=0;a<o;a++)l+=e[o][a]*r[a];r[o]=(t[o]-l)/e[o][o]}return r[r.length-1]*=n||1,xw(r,n)};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dp="152",Ho={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ww=0,Bv=1,Tw=2,Lp=1,Oy=2,Ji=3,Br=0,Dn=1,nr=2,un=0,Ps=1,Ch=2,Gv=3,Vv=4,Sc=5,Cr=100,bw=101,Cw=102,Hv=103,Wv=104,Ah=200,Aw=201,Pw=202,Rw=203,Ny=204,Fy=205,ky=206,Dw=207,zy=208,Lw=209,Iw=210,Uw=0,Ow=1,Nw=2,Ph=3,Fw=4,kw=5,zw=6,Bw=7,Hc=0,Gw=1,Vw=2,Gi=0,Hw=1,By=2,Ww=3,jw=4,Xw=5,Gy=300,Bs=301,Gs=302,Mc=303,Rh=304,Wc=306,Co=1e3,wi=1001,Dh=1002,Qt=1003,jv=1004,Jf=1005,li=1006,Yw=1007,ul=1008,Ao=1009,qw=1010,$w=1011,Ip=1012,Kw=1013,mo=1014,vo=1015,cl=1016,Zw=1017,Qw=1018,Rs=1020,Jw=1021,Ti=1023,e1=1024,t1=1025,yo=1026,Vs=1027,n1=1028,i1=1029,r1=1030,o1=1031,s1=1033,ed=33776,td=33777,nd=33778,id=33779,Xv=35840,Yv=35841,qv=35842,$v=35843,a1=36196,Kv=37492,Zv=37496,Qv=37808,Jv=37809,eg=37810,tg=37811,ng=37812,ig=37813,rg=37814,og=37815,sg=37816,ag=37817,lg=37818,ug=37819,cg=37820,fg=37821,rd=36492,l1=36283,dg=36284,hg=36285,pg=36286,Vy=3e3,sr=3001,u1=3200,xl=3201,Sl=0,c1=1,xo="",it="srgb",Vi="srgb-linear",Hy="display-p3",od=7680,f1=519,mg=35044,vg="300 es",Lh=1035;class Lo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,Ec=180/Math.PI;function Ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[t&255]+xn[t>>8&255]+xn[t>>16&255]+xn[t>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function En(t,e,n){return Math.max(e,Math.min(n,t))}function d1(t,e){return(t%e+e)%e}function ad(t,e,n){return(1-n)*t+n*e}function gg(t){return(t&t-1)===0&&t!==0}function h1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function pu(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,n=0){Oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,l,a,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=a,m[3]=n,m[4]=o,m[5]=d,m[6]=i,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[3],d=i[6],h=i[1],m=i[4],_=i[7],g=i[2],y=i[5],b=i[8],T=r[0],E=r[3],p=r[6],w=r[1],x=r[4],L=r[7],P=r[2],I=r[5],B=r[8];return o[0]=l*T+a*w+d*P,o[3]=l*E+a*x+d*I,o[6]=l*p+a*L+d*B,o[1]=h*T+m*w+_*P,o[4]=h*E+m*x+_*I,o[7]=h*p+m*L+_*B,o[2]=g*T+y*w+b*P,o[5]=g*E+y*x+b*I,o[8]=g*p+y*L+b*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8];return n*l*m-n*a*h-i*o*m+i*a*d+r*o*h-r*l*d}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8],_=m*l-a*h,g=a*d-m*o,y=h*o-l*d,b=n*_+i*g+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=_*T,e[1]=(r*h-m*i)*T,e[2]=(a*i-r*l)*T,e[3]=g*T,e[4]=(m*n-r*d)*T,e[5]=(r*o-a*n)*T,e[6]=y*T,e[7]=(i*d-h*n)*T,e[8]=(l*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,l,a){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*l+h*a)+l+e,-r*h,r*d,-r*(-h*l+d*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ld.makeScale(e,n)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new dt;function Wy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const _g={};function Va(t){t in _g||(_g[t]=!0,console.warn(t))}function Ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ud(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const p1=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),m1=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function v1(t){return t.convertSRGBToLinear().applyMatrix3(m1)}function g1(t){return t.applyMatrix3(p1).convertLinearToSRGB()}const _1={[Vi]:t=>t,[it]:t=>t.convertSRGBToLinear(),[Hy]:v1},y1={[Vi]:t=>t,[it]:t=>t.convertLinearToSRGB(),[Hy]:g1},vi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Vi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_1[e],r=y1[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let jo;class jy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jo===void 0&&(jo=fl("canvas")),jo.width=e.width,jo.height=e.height;const i=jo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Ds(o[l]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Xy{constructor(e=null){this.isSource=!0,this.uuid=Ml(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?o.push(cd(r[l].image)):o.push(cd(r[l]))}else o=cd(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function cd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x1=0;class Wn extends Lo{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,i=wi,r=wi,o=li,l=ul,a=Ti,d=Ao,h=Wn.DEFAULT_ANISOTROPY,m=xo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Ml(),this.name="",this.source=new Xy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=d,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===sr?it:xo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?sr:Vy}set encoding(e){Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?it:xo}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Gy;Wn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const d=e.elements,h=d[0],m=d[4],_=d[8],g=d[1],y=d[5],b=d[9],T=d[2],E=d[6],p=d[10];if(Math.abs(m-g)<.01&&Math.abs(_-T)<.01&&Math.abs(b-E)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+T)<.1&&Math.abs(b+E)<.1&&Math.abs(h+y+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(h+1)/2,L=(y+1)/2,P=(p+1)/2,I=(m+g)/4,B=(_+T)/4,z=(b+E)/4;return x>L&&x>P?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=I/i,o=B/i):L>P?L<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),i=I/r,o=z/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=B/o,r=z/o),this.set(i,r,o,n),this}let w=Math.sqrt((E-b)*(E-b)+(_-T)*(_-T)+(g-m)*(g-m));return Math.abs(w)<.001&&(w=1),this.x=(E-b)/w,this.y=(_-T)/w,this.z=(g-m)/w,this.w=Math.acos((h+y+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends Lo{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?it:xo),this.texture=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:li,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yy extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S1 extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,l,a){let d=i[r+0],h=i[r+1],m=i[r+2],_=i[r+3];const g=o[l+0],y=o[l+1],b=o[l+2],T=o[l+3];if(a===0){e[n+0]=d,e[n+1]=h,e[n+2]=m,e[n+3]=_;return}if(a===1){e[n+0]=g,e[n+1]=y,e[n+2]=b,e[n+3]=T;return}if(_!==T||d!==g||h!==y||m!==b){let E=1-a;const p=d*g+h*y+m*b+_*T,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),I=Math.atan2(P,p*w);E=Math.sin(E*I)/P,a=Math.sin(a*I)/P}const L=a*w;if(d=d*E+g*L,h=h*E+y*L,m=m*E+b*L,_=_*E+T*L,E===1-a){const P=1/Math.sqrt(d*d+h*h+m*m+_*_);d*=P,h*=P,m*=P,_*=P}}e[n]=d,e[n+1]=h,e[n+2]=m,e[n+3]=_}static multiplyQuaternionsFlat(e,n,i,r,o,l){const a=i[r],d=i[r+1],h=i[r+2],m=i[r+3],_=o[l],g=o[l+1],y=o[l+2],b=o[l+3];return e[n]=a*b+m*_+d*y-h*g,e[n+1]=d*b+m*g+h*_-a*y,e[n+2]=h*b+m*y+a*g-d*_,e[n+3]=m*b-a*_-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,l=e._order,a=Math.cos,d=Math.sin,h=a(i/2),m=a(r/2),_=a(o/2),g=d(i/2),y=d(r/2),b=d(o/2);switch(l){case"XYZ":this._x=g*m*_+h*y*b,this._y=h*y*_-g*m*b,this._z=h*m*b+g*y*_,this._w=h*m*_-g*y*b;break;case"YXZ":this._x=g*m*_+h*y*b,this._y=h*y*_-g*m*b,this._z=h*m*b-g*y*_,this._w=h*m*_+g*y*b;break;case"ZXY":this._x=g*m*_-h*y*b,this._y=h*y*_+g*m*b,this._z=h*m*b+g*y*_,this._w=h*m*_-g*y*b;break;case"ZYX":this._x=g*m*_-h*y*b,this._y=h*y*_+g*m*b,this._z=h*m*b-g*y*_,this._w=h*m*_+g*y*b;break;case"YZX":this._x=g*m*_+h*y*b,this._y=h*y*_+g*m*b,this._z=h*m*b-g*y*_,this._w=h*m*_-g*y*b;break;case"XZY":this._x=g*m*_-h*y*b,this._y=h*y*_-g*m*b,this._z=h*m*b+g*y*_,this._w=h*m*_+g*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],l=n[1],a=n[5],d=n[9],h=n[2],m=n[6],_=n[10],g=i+a+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(m-d)*y,this._y=(o-h)*y,this._z=(l-r)*y}else if(i>a&&i>_){const y=2*Math.sqrt(1+i-a-_);this._w=(m-d)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(o+h)/y}else if(a>_){const y=2*Math.sqrt(1+a-i-_);this._w=(o-h)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+_-i-a);this._w=(l-r)/y,this._x=(o+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,l=e._w,a=n._x,d=n._y,h=n._z,m=n._w;return this._x=i*m+l*a+r*h-o*d,this._y=r*m+l*d+o*a-i*h,this._z=o*m+l*h+i*d-r*a,this._w=l*m-i*a-r*d-o*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const d=1-a*a;if(d<=Number.EPSILON){const y=1-n;return this._w=y*l+n*this._w,this._x=y*i+n*this._x,this._y=y*r+n*this._y,this._z=y*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),m=Math.atan2(h,a),_=Math.sin((1-n)*m)/h,g=Math.sin(n*m)/h;return this._w=l*_+this._w*g,this._x=i*_+this._x*g,this._y=r*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,l=e.y,a=e.z,d=e.w,h=d*n+l*r-a*i,m=d*i+a*n-o*r,_=d*r+o*i-l*n,g=-o*n-l*i-a*r;return this.x=h*d+g*-o+m*-a-_*-l,this.y=m*d+g*-l+_*-o-h*-a,this.z=_*d+g*-a+h*-l-m*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,l=n.x,a=n.y,d=n.z;return this.x=r*d-o*a,this.y=o*l-i*d,this.z=i*a-r*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new Y,yg=new Po;class El{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let l=0,a=o.count;l<a;l++)qi.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else r.boundingBox===null&&r.computeBoundingBox(),Xo.copy(r.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),mu.subVectors(this.max,Ma),Yo.subVectors(e.a,Ma),qo.subVectors(e.b,Ma),$o.subVectors(e.c,Ma),_r.subVectors(qo,Yo),yr.subVectors($o,qo),no.subVectors(Yo,$o);let n=[0,-_r.z,_r.y,0,-yr.z,yr.y,0,-no.z,no.y,_r.z,0,-_r.x,yr.z,0,-yr.x,no.z,0,-no.x,-_r.y,_r.x,0,-yr.y,yr.x,0,-no.y,no.x,0];return!dd(n,Yo,qo,$o,mu)||(n=[1,0,0,0,1,0,0,0,1],!dd(n,Yo,qo,$o,mu))?!1:(vu.crossVectors(_r,yr),n=[vu.x,vu.y,vu.z],dd(n,Yo,qo,$o,mu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qi=new Y,Xo=new El,Yo=new Y,qo=new Y,$o=new Y,_r=new Y,yr=new Y,no=new Y,Ma=new Y,mu=new Y,vu=new Y,io=new Y;function dd(t,e,n,i,r){for(let o=0,l=t.length-3;o<=l;o+=3){io.fromArray(t,o);const a=r.x*Math.abs(io.x)+r.y*Math.abs(io.y)+r.z*Math.abs(io.z),d=e.dot(io),h=n.dot(io),m=i.dot(io);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>a)return!1}return!0}const M1=new El,Ea=new Y,hd=new Y;class Up{constructor(e=new Y,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):M1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(hd)),this.expandByPoint(Ea.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new Y,pd=new Y,gu=new Y,xr=new Y,md=new Y,_u=new Y,vd=new Y;class E1{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pd.copy(e).add(n).multiplyScalar(.5),gu.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(pd);const o=e.distanceTo(n)*.5,l=-this.direction.dot(gu),a=xr.dot(this.direction),d=-xr.dot(gu),h=xr.lengthSq(),m=Math.abs(1-l*l);let _,g,y,b;if(m>0)if(_=l*d-a,g=l*a-d,b=o*m,_>=0)if(g>=-b)if(g<=b){const T=1/m;_*=T,g*=T,y=_*(_+l*g+2*a)+g*(l*_+g+2*d)+h}else g=o,_=Math.max(0,-(l*g+a)),y=-_*_+g*(g+2*d)+h;else g=-o,_=Math.max(0,-(l*g+a)),y=-_*_+g*(g+2*d)+h;else g<=-b?(_=Math.max(0,-(-l*o+a)),g=_>0?-o:Math.min(Math.max(-o,-d),o),y=-_*_+g*(g+2*d)+h):g<=b?(_=0,g=Math.min(Math.max(-o,-d),o),y=g*(g+2*d)+h):(_=Math.max(0,-(l*o+a)),g=_>0?o:Math.min(Math.max(-o,-d),o),y=-_*_+g*(g+2*d)+h);else g=l>0?-o:o,_=Math.max(0,-(l*g+a)),y=-_*_+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(pd).addScaledVector(gu,g),y}intersectSphere(e,n){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),r=$i.dot($i)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),a=i-l,d=i+l;return d<0?null:a<0?this.at(d,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,l,a,d;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),m>=0?(o=(e.min.y-g.y)*m,l=(e.max.y-g.y)*m):(o=(e.max.y-g.y)*m,l=(e.min.y-g.y)*m),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),_>=0?(a=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(a=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),i>d||a>r)||((a>i||i!==i)&&(i=a),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,i,r,o){md.subVectors(n,e),_u.subVectors(i,e),vd.crossVectors(md,_u);let l=this.direction.dot(vd),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;xr.subVectors(this.origin,e);const d=a*this.direction.dot(_u.crossVectors(xr,_u));if(d<0)return null;const h=a*this.direction.dot(md.cross(xr));if(h<0||d+h>l)return null;const m=-a*xr.dot(vd);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,l,a,d,h,m,_,g,y,b,T,E){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=l,p[9]=a,p[13]=d,p[2]=h,p[6]=m,p[10]=_,p[14]=g,p[3]=y,p[7]=b,p[11]=T,p[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),o=1/Ko.setFromMatrixColumn(e,1).length(),l=1/Ko.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),a=Math.sin(i),d=Math.cos(r),h=Math.sin(r),m=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=l*m,y=l*_,b=a*m,T=a*_;n[0]=d*m,n[4]=-d*_,n[8]=h,n[1]=y+b*h,n[5]=g-T*h,n[9]=-a*d,n[2]=T-g*h,n[6]=b+y*h,n[10]=l*d}else if(e.order==="YXZ"){const g=d*m,y=d*_,b=h*m,T=h*_;n[0]=g+T*a,n[4]=b*a-y,n[8]=l*h,n[1]=l*_,n[5]=l*m,n[9]=-a,n[2]=y*a-b,n[6]=T+g*a,n[10]=l*d}else if(e.order==="ZXY"){const g=d*m,y=d*_,b=h*m,T=h*_;n[0]=g-T*a,n[4]=-l*_,n[8]=b+y*a,n[1]=y+b*a,n[5]=l*m,n[9]=T-g*a,n[2]=-l*h,n[6]=a,n[10]=l*d}else if(e.order==="ZYX"){const g=l*m,y=l*_,b=a*m,T=a*_;n[0]=d*m,n[4]=b*h-y,n[8]=g*h+T,n[1]=d*_,n[5]=T*h+g,n[9]=y*h-b,n[2]=-h,n[6]=a*d,n[10]=l*d}else if(e.order==="YZX"){const g=l*d,y=l*h,b=a*d,T=a*h;n[0]=d*m,n[4]=T-g*_,n[8]=b*_+y,n[1]=_,n[5]=l*m,n[9]=-a*m,n[2]=-h*m,n[6]=y*_+b,n[10]=g-T*_}else if(e.order==="XZY"){const g=l*d,y=l*h,b=a*d,T=a*h;n[0]=d*m,n[4]=-_,n[8]=h*m,n[1]=g*_+T,n[5]=l*m,n[9]=y*_-b,n[2]=b*_-y,n[6]=a*m,n[10]=T*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w1,e,T1)}lookAt(e,n,i){const r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Sr.crossVectors(i,Yn),Sr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Sr.crossVectors(i,Yn)),Sr.normalize(),yu.crossVectors(Yn,Sr),r[0]=Sr.x,r[4]=yu.x,r[8]=Yn.x,r[1]=Sr.y,r[5]=yu.y,r[9]=Yn.y,r[2]=Sr.z,r[6]=yu.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[4],d=i[8],h=i[12],m=i[1],_=i[5],g=i[9],y=i[13],b=i[2],T=i[6],E=i[10],p=i[14],w=i[3],x=i[7],L=i[11],P=i[15],I=r[0],B=r[4],z=r[8],R=r[12],N=r[1],ae=r[5],fe=r[9],$=r[13],te=r[2],j=r[6],ue=r[10],pe=r[14],X=r[3],J=r[7],ne=r[11],we=r[15];return o[0]=l*I+a*N+d*te+h*X,o[4]=l*B+a*ae+d*j+h*J,o[8]=l*z+a*fe+d*ue+h*ne,o[12]=l*R+a*$+d*pe+h*we,o[1]=m*I+_*N+g*te+y*X,o[5]=m*B+_*ae+g*j+y*J,o[9]=m*z+_*fe+g*ue+y*ne,o[13]=m*R+_*$+g*pe+y*we,o[2]=b*I+T*N+E*te+p*X,o[6]=b*B+T*ae+E*j+p*J,o[10]=b*z+T*fe+E*ue+p*ne,o[14]=b*R+T*$+E*pe+p*we,o[3]=w*I+x*N+L*te+P*X,o[7]=w*B+x*ae+L*j+P*J,o[11]=w*z+x*fe+L*ue+P*ne,o[15]=w*R+x*$+L*pe+P*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],l=e[1],a=e[5],d=e[9],h=e[13],m=e[2],_=e[6],g=e[10],y=e[14],b=e[3],T=e[7],E=e[11],p=e[15];return b*(+o*d*_-r*h*_-o*a*g+i*h*g+r*a*y-i*d*y)+T*(+n*d*y-n*h*g+o*l*g-r*l*y+r*h*m-o*d*m)+E*(+n*h*_-n*a*y-o*l*_+i*l*y+o*a*m-i*h*m)+p*(-r*a*m-n*d*_+n*a*g+r*l*_-i*l*g+i*d*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],m=e[8],_=e[9],g=e[10],y=e[11],b=e[12],T=e[13],E=e[14],p=e[15],w=_*E*h-T*g*h+T*d*y-a*E*y-_*d*p+a*g*p,x=b*g*h-m*E*h-b*d*y+l*E*y+m*d*p-l*g*p,L=m*T*h-b*_*h+b*a*y-l*T*y-m*a*p+l*_*p,P=b*_*d-m*T*d-b*a*g+l*T*g+m*a*E-l*_*E,I=n*w+i*x+r*L+o*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=w*B,e[1]=(T*g*o-_*E*o-T*r*y+i*E*y+_*r*p-i*g*p)*B,e[2]=(a*E*o-T*d*o+T*r*h-i*E*h-a*r*p+i*d*p)*B,e[3]=(_*d*o-a*g*o-_*r*h+i*g*h+a*r*y-i*d*y)*B,e[4]=x*B,e[5]=(m*E*o-b*g*o+b*r*y-n*E*y-m*r*p+n*g*p)*B,e[6]=(b*d*o-l*E*o-b*r*h+n*E*h+l*r*p-n*d*p)*B,e[7]=(l*g*o-m*d*o+m*r*h-n*g*h-l*r*y+n*d*y)*B,e[8]=L*B,e[9]=(b*_*o-m*T*o-b*i*y+n*T*y+m*i*p-n*_*p)*B,e[10]=(l*T*o-b*a*o+b*i*h-n*T*h-l*i*p+n*a*p)*B,e[11]=(m*a*o-l*_*o-m*i*h+n*_*h+l*i*y-n*a*y)*B,e[12]=P*B,e[13]=(m*T*r-b*_*r+b*i*g-n*T*g-m*i*E+n*_*E)*B,e[14]=(b*a*r-l*T*r-b*i*d+n*T*d+l*i*E-n*a*E)*B,e[15]=(l*_*r-m*a*r+m*i*d-n*_*d-l*i*g+n*a*g)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,l=e.x,a=e.y,d=e.z,h=o*l,m=o*a;return this.set(h*l+i,h*a-r*d,h*d+r*a,0,h*a+r*d,m*a+i,m*d-r*l,0,h*d-r*a,m*d+r*l,o*d*d+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,l=n._y,a=n._z,d=n._w,h=o+o,m=l+l,_=a+a,g=o*h,y=o*m,b=o*_,T=l*m,E=l*_,p=a*_,w=d*h,x=d*m,L=d*_,P=i.x,I=i.y,B=i.z;return r[0]=(1-(T+p))*P,r[1]=(y+L)*P,r[2]=(b-x)*P,r[3]=0,r[4]=(y-L)*I,r[5]=(1-(g+p))*I,r[6]=(E+w)*I,r[7]=0,r[8]=(b+x)*B,r[9]=(E-w)*B,r[10]=(1-(g+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Ko.set(r[0],r[1],r[2]).length();const l=Ko.set(r[4],r[5],r[6]).length(),a=Ko.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const h=1/o,m=1/l,_=1/a;return gi.elements[0]*=h,gi.elements[1]*=h,gi.elements[2]*=h,gi.elements[4]*=m,gi.elements[5]*=m,gi.elements[6]*=m,gi.elements[8]*=_,gi.elements[9]*=_,gi.elements[10]*=_,n.setFromRotationMatrix(gi),i.x=o,i.y=l,i.z=a,this}makePerspective(e,n,i,r,o,l){const a=this.elements,d=2*o/(n-e),h=2*o/(i-r),m=(n+e)/(n-e),_=(i+r)/(i-r),g=-(l+o)/(l-o),y=-2*l*o/(l-o);return a[0]=d,a[4]=0,a[8]=m,a[12]=0,a[1]=0,a[5]=h,a[9]=_,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,l){const a=this.elements,d=1/(n-e),h=1/(i-r),m=1/(l-o),_=(n+e)*d,g=(i+r)*h,y=(l+o)*m;return a[0]=2*d,a[4]=0,a[8]=0,a[12]=-_,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-g,a[2]=0,a[6]=0,a[10]=-2*m,a[14]=-y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ko=new Y,gi=new Vt,w1=new Y(0,0,0),T1=new Y(1,1,1),Sr=new Y,yu=new Y,Yn=new Y,xg=new Vt,Sg=new Po;class jc{constructor(e=0,n=0,i=0,r=jc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],a=r[8],d=r[1],h=r[5],m=r[9],_=r[2],g=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-En(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(En(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-En(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jc.DEFAULT_ORDER="XYZ";class qy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b1=0;const Mg=new Y,Zo=new Po,Ki=new Vt,xu=new Y,wa=new Y,C1=new Y,A1=new Po,Eg=new Y(1,0,0),wg=new Y(0,1,0),Tg=new Y(0,0,1),P1={type:"added"},bg={type:"removed"};class tn extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Y,n=new jc,i=new Po,r=new Y(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new dt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zo.setFromAxisAngle(e,n),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,n){return Zo.setFromAxisAngle(e,n),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xu.copy(e):xu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(wa,xu,this.up):Ki.lookAt(xu,wa,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(Ki),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(P1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(bg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const l=this.children[r].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,C1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,A1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,d){return a[d.uuid]===void 0&&(a[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const d=a.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const _=d[h];o(e.shapes,_)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let d=0,h=this.material.length;d<h;d++)a.push(o(e.materials,this.material[d]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const d=this.animations[a];r.animations.push(o(e.animations,d))}}if(n){const a=l(e.geometries),d=l(e.materials),h=l(e.textures),m=l(e.images),_=l(e.shapes),g=l(e.skeletons),y=l(e.animations),b=l(e.nodes);a.length>0&&(i.geometries=a),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y),b.length>0&&(i.nodes=b)}return i.object=r,i;function l(a){const d=[];for(const h in a){const m=a[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Y(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new Y,Zi=new Y,gd=new Y,Qi=new Y,Qo=new Y,Jo=new Y,Cg=new Y,_d=new Y,yd=new Y,xd=new Y;let Su=!1;class Ei{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),_i.subVectors(e,n),r.cross(_i);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){_i.subVectors(r,n),Zi.subVectors(i,n),gd.subVectors(e,n);const l=_i.dot(_i),a=_i.dot(Zi),d=_i.dot(gd),h=Zi.dot(Zi),m=Zi.dot(gd),_=l*h-a*a;if(_===0)return o.set(-2,-1,-1);const g=1/_,y=(h*d-a*m)*g,b=(l*m-a*d)*g;return o.set(1-y-b,b,y)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qi),Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,n,i,r,o,l,a,d){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),this.getInterpolation(e,n,i,r,o,l,a,d)}static getInterpolation(e,n,i,r,o,l,a,d){return this.getBarycoord(e,n,i,r,Qi),d.setScalar(0),d.addScaledVector(o,Qi.x),d.addScaledVector(l,Qi.y),d.addScaledVector(a,Qi.z),d}static isFrontFacing(e,n,i,r){return _i.subVectors(i,n),Zi.subVectors(e,n),_i.cross(Zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),_i.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),Ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let l,a;Qo.subVectors(r,i),Jo.subVectors(o,i),_d.subVectors(e,i);const d=Qo.dot(_d),h=Jo.dot(_d);if(d<=0&&h<=0)return n.copy(i);yd.subVectors(e,r);const m=Qo.dot(yd),_=Jo.dot(yd);if(m>=0&&_<=m)return n.copy(r);const g=d*_-m*h;if(g<=0&&d>=0&&m<=0)return l=d/(d-m),n.copy(i).addScaledVector(Qo,l);xd.subVectors(e,o);const y=Qo.dot(xd),b=Jo.dot(xd);if(b>=0&&y<=b)return n.copy(o);const T=y*h-d*b;if(T<=0&&h>=0&&b<=0)return a=h/(h-b),n.copy(i).addScaledVector(Jo,a);const E=m*b-y*_;if(E<=0&&_-m>=0&&y-b>=0)return Cg.subVectors(o,r),a=(_-m)/(_-m+(y-b)),n.copy(r).addScaledVector(Cg,a);const p=1/(E+T+g);return l=T*p,a=g*p,n.copy(i).addScaledVector(Qo,l).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let R1=0;class jr extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Ps,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ny,this.blendDst=Fy,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ph,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=od,this.stencilZFail=od,this.stencilZPass=od,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const a in o){const d=o[a];delete d.metadata,l.push(d)}return l}if(n){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function Sd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=vi.workingColorSpace){return this.r=e,this.g=n,this.b=i,vi.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=vi.workingColorSpace){if(e=d1(e,1),n=En(n,0,1),i=En(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=Sd(l,o,e+1/3),this.g=Sd(l,o,e),this.b=Sd(l,o,e-1/3)}return vi.toWorkingColorSpace(this,r),this}setStyle(e,n=it){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=it){const i=$y[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=ud(e.r),this.g=ud(e.g),this.b=ud(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return vi.fromWorkingColorSpace(Sn.copy(this),e),Math.round(En(Sn.r*255,0,255))*65536+Math.round(En(Sn.g*255,0,255))*256+Math.round(En(Sn.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vi.workingColorSpace){vi.fromWorkingColorSpace(Sn.copy(this),n);const i=Sn.r,r=Sn.g,o=Sn.b,l=Math.max(i,r,o),a=Math.min(i,r,o);let d,h;const m=(a+l)/2;if(a===l)d=0,h=0;else{const _=l-a;switch(h=m<=.5?_/(l+a):_/(2-l-a),l){case i:d=(r-o)/_+(r<o?6:0);break;case r:d=(o-i)/_+2;break;case o:d=(i-r)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,n=vi.workingColorSpace){return vi.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=it){vi.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,r=Sn.b;return e!==it?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),yi.h+=e,yi.s+=n,yi.l+=i,this.setHSL(yi.h,yi.s,yi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(Mu);const i=ad(yi.h,Mu.h,n),r=ad(yi.s,Mu.s,n),o=ad(yi.l,Mu.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ze;Ze.NAMES=$y;class So extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,Eu=new Oe;class Ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(e),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pu(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pu(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pu(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pu(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ky extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zy extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let D1=0;const oi=new Vt,Md=new tn,es=new Y,qn=new El,Ta=new El,ln=new Y;class Ri extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wy(e)?Zy:Ky)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new dt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,i){return oi.makeTranslation(e,n,i),this.applyMatrix4(oi),this}scale(e,n,i){return oi.makeScale(e,n,i),this.applyMatrix4(oi),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const a=n[o];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(qn.min,Ta.min),qn.expandByPoint(ln),ln.addVectors(qn.max,Ta.max),qn.expandByPoint(ln)):(qn.expandByPoint(Ta.min),qn.expandByPoint(Ta.max))}qn.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)ln.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ln));if(n)for(let o=0,l=n.length;o<l;o++){const a=n[o],d=this.morphTargetsRelative;for(let h=0,m=a.count;h<m;h++)ln.fromBufferAttribute(a,h),d&&(es.fromBufferAttribute(e,h),ln.add(es)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,l=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*a),4));const d=this.getAttribute("tangent").array,h=[],m=[];for(let N=0;N<a;N++)h[N]=new Y,m[N]=new Y;const _=new Y,g=new Y,y=new Y,b=new Oe,T=new Oe,E=new Oe,p=new Y,w=new Y;function x(N,ae,fe){_.fromArray(r,N*3),g.fromArray(r,ae*3),y.fromArray(r,fe*3),b.fromArray(l,N*2),T.fromArray(l,ae*2),E.fromArray(l,fe*2),g.sub(_),y.sub(_),T.sub(b),E.sub(b);const $=1/(T.x*E.y-E.x*T.y);isFinite($)&&(p.copy(g).multiplyScalar(E.y).addScaledVector(y,-T.y).multiplyScalar($),w.copy(y).multiplyScalar(T.x).addScaledVector(g,-E.x).multiplyScalar($),h[N].add(p),h[ae].add(p),h[fe].add(p),m[N].add(w),m[ae].add(w),m[fe].add(w))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ue=$+te;j<ue;j+=3)x(i[j+0],i[j+1],i[j+2])}const P=new Y,I=new Y,B=new Y,z=new Y;function R(N){B.fromArray(o,N*3),z.copy(B);const ae=h[N];P.copy(ae),P.sub(B.multiplyScalar(B.dot(ae))).normalize(),I.crossVectors(z,ae);const $=I.dot(m[N])<0?-1:1;d[N*4]=P.x,d[N*4+1]=P.y,d[N*4+2]=P.z,d[N*4+3]=$}for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ue=$+te;j<ue;j+=3)R(i[j+0]),R(i[j+1]),R(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const r=new Y,o=new Y,l=new Y,a=new Y,d=new Y,h=new Y,m=new Y,_=new Y;if(e)for(let g=0,y=e.count;g<y;g+=3){const b=e.getX(g+0),T=e.getX(g+1),E=e.getX(g+2);r.fromBufferAttribute(n,b),o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,E),m.subVectors(l,o),_.subVectors(r,o),m.cross(_),a.fromBufferAttribute(i,b),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),a.add(m),d.add(m),h.add(m),i.setXYZ(b,a.x,a.y,a.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(E,h.x,h.y,h.z)}else for(let g=0,y=n.count;g<y;g+=3)r.fromBufferAttribute(n,g+0),o.fromBufferAttribute(n,g+1),l.fromBufferAttribute(n,g+2),m.subVectors(l,o),_.subVectors(r,o),m.cross(_),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,d){const h=a.array,m=a.itemSize,_=a.normalized,g=new h.constructor(d.length*m);let y=0,b=0;for(let T=0,E=d.length;T<E;T++){a.isInterleavedBufferAttribute?y=d[T]*a.data.stride+a.offset:y=d[T]*m;for(let p=0;p<m;p++)g[b++]=h[y++]}return new Ai(g,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,i=this.index.array,r=this.attributes;for(const a in r){const d=r[a],h=e(d,i);n.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const d=[],h=o[a];for(let m=0,_=h.length;m<_;m++){const g=h[m],y=e(g,i);d.push(y)}n.morphAttributes[a]=d}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,d=l.length;a<d;a++){const h=l[a];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let _=0,g=h.length;_<g;_++){const y=h[_];m.push(y.toJSON(e.data))}m.length>0&&(r[d]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(n))}const o=e.morphAttributes;for(const h in o){const m=[],_=o[h];for(let g=0,y=_.length;g<y;g++)m.push(_[g].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,m=l.length;h<m;h++){const _=l[h];this.addGroup(_.start,_.count,_.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new Vt,Ui=new E1,wu=new Up,Pg=new Y,ts=new Y,ns=new Y,is=new Y,Ed=new Y,Tu=new Y,bu=new Oe,Cu=new Oe,Au=new Oe,Rg=new Y,Dg=new Y,Lg=new Y,Pu=new Y,Ru=new Y;class Bn extends tn{constructor(e=new Ri,n=new So){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Tu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const m=a[d],_=o[d];m!==0&&(Ed.fromBufferAttribute(_,e),l?Tu.addScaledVector(Ed,m):Tu.addScaledVector(Ed.sub(n),m))}n.add(Tu)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wu.copy(i.boundingSphere),wu.applyMatrix4(o),Ui.copy(e.ray).recast(e.near),!(wu.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(wu,Pg)===null||Ui.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Ag.copy(o).invert(),Ui.copy(e.ray).applyMatrix4(Ag),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,_=r.groups,g=r.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,b=_.length;y<b;y++){const T=_[y],E=o[T.materialIndex],p=Math.max(T.start,g.start),w=Math.min(l.count,Math.min(T.start+T.count,g.start+g.count));for(let x=p,L=w;x<L;x+=3){const P=l.getX(x),I=l.getX(x+1),B=l.getX(x+2);i=Du(this,E,e,Ui,d,h,m,P,I,B),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=T.materialIndex,n.push(i))}}else{const y=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let T=y,E=b;T<E;T+=3){const p=l.getX(T),w=l.getX(T+1),x=l.getX(T+2);i=Du(this,o,e,Ui,d,h,m,p,w,x),i&&(i.faceIndex=Math.floor(T/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let y=0,b=_.length;y<b;y++){const T=_[y],E=o[T.materialIndex],p=Math.max(T.start,g.start),w=Math.min(a.count,Math.min(T.start+T.count,g.start+g.count));for(let x=p,L=w;x<L;x+=3){const P=x,I=x+1,B=x+2;i=Du(this,E,e,Ui,d,h,m,P,I,B),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=T.materialIndex,n.push(i))}}else{const y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let T=y,E=b;T<E;T+=3){const p=T,w=T+1,x=T+2;i=Du(this,o,e,Ui,d,h,m,p,w,x),i&&(i.faceIndex=Math.floor(T/3),n.push(i))}}}}function L1(t,e,n,i,r,o,l,a){let d;if(e.side===Dn?d=i.intersectTriangle(l,o,r,!0,a):d=i.intersectTriangle(r,o,l,e.side===Br,a),d===null)return null;Ru.copy(a),Ru.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Ru);return h<n.near||h>n.far?null:{distance:h,point:Ru.clone(),object:t}}function Du(t,e,n,i,r,o,l,a,d,h){t.getVertexPosition(a,ts),t.getVertexPosition(d,ns),t.getVertexPosition(h,is);const m=L1(t,e,n,i,ts,ns,is,Pu);if(m){r&&(bu.fromBufferAttribute(r,a),Cu.fromBufferAttribute(r,d),Au.fromBufferAttribute(r,h),m.uv=Ei.getInterpolation(Pu,ts,ns,is,bu,Cu,Au,new Oe)),o&&(bu.fromBufferAttribute(o,a),Cu.fromBufferAttribute(o,d),Au.fromBufferAttribute(o,h),m.uv1=Ei.getInterpolation(Pu,ts,ns,is,bu,Cu,Au,new Oe),m.uv2=m.uv1),l&&(Rg.fromBufferAttribute(l,a),Dg.fromBufferAttribute(l,d),Lg.fromBufferAttribute(l,h),m.normal=Ei.getInterpolation(Pu,ts,ns,is,Rg,Dg,Lg,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a,b:d,c:h,normal:new Y,materialIndex:0};Ei.getNormal(ts,ns,is,_.normal),m.face=_}return m}class wl extends Ri{constructor(e=1,n=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const a=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const d=[],h=[],m=[],_=[];let g=0,y=0;b("z","y","x",-1,-1,i,n,e,l,o,0),b("z","y","x",1,-1,i,n,-e,l,o,1),b("x","z","y",1,1,e,i,n,r,l,2),b("x","z","y",1,-1,e,i,-n,r,l,3),b("x","y","z",1,-1,e,n,i,r,o,4),b("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new Ln(h,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(_,2));function b(T,E,p,w,x,L,P,I,B,z,R){const N=L/B,ae=P/z,fe=L/2,$=P/2,te=I/2,j=B+1,ue=z+1;let pe=0,X=0;const J=new Y;for(let ne=0;ne<ue;ne++){const we=ne*ae-$;for(let ve=0;ve<j;ve++){const oe=ve*N-fe;J[T]=oe*w,J[E]=we*x,J[p]=te,h.push(J.x,J.y,J.z),J[T]=0,J[E]=0,J[p]=I>0?1:-1,m.push(J.x,J.y,J.z),_.push(ve/B),_.push(1-ne/z),pe+=1}}for(let ne=0;ne<z;ne++)for(let we=0;we<B;we++){const ve=g+we+j*ne,oe=g+we+j*(ne+1),q=g+(we+1)+j*(ne+1),Me=g+(we+1)+j*ne;d.push(ve,oe,Me),d.push(oe,q,Me),X+=6}a.addGroup(y,X,R),y+=X,g+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function An(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function I1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qy(t){return t.getRenderTarget()===null?t.outputColorSpace:Vi}const kn={clone:Hs,merge:An};var U1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U1,this.fragmentShader=O1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=I1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?n.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[r]={type:"m4",value:l.toArray()}:n.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jy extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends Jy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ec*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/d,n-=l.offsetY*i/h,r*=l.width/d,i*=l.height/h}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,os=1;class N1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Fn(rs,os,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new Fn(rs,os,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const l=new Fn(rs,os,e,n);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const a=new Fn(rs,os,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const d=new Fn(rs,os,e,n);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const h=new Fn(rs,os,e,n);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,a,d,h]=this.children,m=e.getRenderTarget(),_=e.toneMapping,g=e.xr.enabled;e.toneMapping=Gi,e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,d),i.texture.generateMipmaps=y,e.setRenderTarget(i,5),e.render(n,h),e.setRenderTarget(m),e.toneMapping=_,e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ex extends Wn{constructor(e,n,i,r,o,l,a,d,h,m){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,o,l,a,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F1 extends en{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?it:xo),this.texture=new ex(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:li}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wl(5,5,5),o=new Lt({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:un});o.uniforms.tEquirect.value=n;const l=new Bn(r,o),a=n.minFilter;return n.minFilter===ul&&(n.minFilter=li),new N1(1,10,this).update(e,l),n.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,r);e.setRenderTarget(o)}}const wd=new Y,k1=new Y,z1=new dt;class ao{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wd.subVectors(i,n).cross(k1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||z1.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Up,Lu=new Y;class Op{constructor(e=new ao,n=new ao,i=new ao,r=new ao,o=new ao,l=new ao){this.planes=[e,n,i,r,o,l]}set(e,n,i,r,o,l){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],a=i[3],d=i[4],h=i[5],m=i[6],_=i[7],g=i[8],y=i[9],b=i[10],T=i[11],E=i[12],p=i[13],w=i[14],x=i[15];return n[0].setComponents(a-r,_-d,T-g,x-E).normalize(),n[1].setComponents(a+r,_+d,T+g,x+E).normalize(),n[2].setComponents(a+o,_+h,T+y,x+p).normalize(),n[3].setComponents(a-o,_-h,T-y,x-p).normalize(),n[4].setComponents(a-l,_-m,T-b,x-w).normalize(),n[5].setComponents(a+l,_+m,T+b,x+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Lu.x=r.normal.x>0?e.max.x:e.min.x,Lu.y=r.normal.y>0?e.max.y:e.min.y,Lu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tx(){let t=null,e=!1,n=null,i=null;function r(o,l){n(o,l),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function B1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(h,m){const _=h.array,g=h.usage,y=t.createBuffer();t.bindBuffer(m,y),t.bufferData(m,_,g),h.onUploadCallback();let b;if(_ instanceof Float32Array)b=t.FLOAT;else if(_ instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)b=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=t.UNSIGNED_SHORT;else if(_ instanceof Int16Array)b=t.SHORT;else if(_ instanceof Uint32Array)b=t.UNSIGNED_INT;else if(_ instanceof Int32Array)b=t.INT;else if(_ instanceof Int8Array)b=t.BYTE;else if(_ instanceof Uint8Array)b=t.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)b=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:b,bytesPerElement:_.BYTES_PER_ELEMENT,version:h.version}}function o(h,m,_){const g=m.array,y=m.updateRange;t.bindBuffer(_,h),y.count===-1?t.bufferSubData(_,0,g):(n?t.bufferSubData(_,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count):t.bufferSubData(_,y.offset*g.BYTES_PER_ELEMENT,g.subarray(y.offset,y.offset+y.count)),y.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);m&&(t.deleteBuffer(m.buffer),i.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const _=i.get(h);_===void 0?i.set(h,r(h,m)):_.version<h.version&&(o(_.buffer,h,m),_.version=h.version)}return{get:l,remove:a,update:d}}class Tl extends Ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,l=n/2,a=Math.floor(i),d=Math.floor(r),h=a+1,m=d+1,_=e/a,g=n/d,y=[],b=[],T=[],E=[];for(let p=0;p<m;p++){const w=p*g-l;for(let x=0;x<h;x++){const L=x*_-o;b.push(L,-w,0),T.push(0,0,1),E.push(x/a),E.push(1-p/d)}}for(let p=0;p<d;p++)for(let w=0;w<a;w++){const x=w+h*p,L=w+h*(p+1),P=w+1+h*(p+1),I=w+1+h*p;y.push(x,L,I),y.push(L,P,I)}this.setIndex(y),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(T,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}var G1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1="vec3 transformed = vec3( position );",q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K1=`#ifdef USE_IRIDESCENCE
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
#endif`,Z1=`#ifdef USE_BUMPMAP
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sT=`#define PI 3.141592653589793
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
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lT=`vec3 transformedNormal = objectNormal;
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
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mT=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wT=`#ifdef USE_GRADIENTMAP
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
}`,TT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,RT=`#if defined( USE_ENVMAP )
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
#endif`,DT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
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
#endif`,NT=`struct PhysicalMaterial {
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
}`,FT=`
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,BT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YT=`#if defined( USE_POINTS_UV )
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
#endif`,qT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZT=`#ifdef USE_MORPHNORMALS
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
#endif`,QT=`#ifdef USE_MORPHTARGETS
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
#endif`,JT=`#ifdef USE_MORPHTARGETS
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
#endif`,eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
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
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sb=`float getShadowMask() {
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
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,Db=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#ifdef USE_UV
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
#endif`,Ib=`#ifdef USE_UV
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
#endif`,Ub=`#ifdef USE_UV
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
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Wb=`#define DISTANCE
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
}`,jb=`#define DISTANCE
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qb=`uniform float scale;
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
}`,$b=`uniform vec3 diffuse;
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
}`,Kb=`#include <common>
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Qb=`#define LAMBERT
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
}`,Jb=`#define LAMBERT
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
}`,eC=`#define MATCAP
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
}`,tC=`#define MATCAP
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
}`,nC=`#define NORMAL
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
}`,iC=`#define NORMAL
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
}`,rC=`#define PHONG
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
}`,oC=`#define PHONG
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
}`,sC=`#define STANDARD
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
}`,aC=`#define STANDARD
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
}`,lC=`#define TOON
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
}`,uC=`#define TOON
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
}`,cC=`uniform float size;
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
}`,fC=`uniform vec3 diffuse;
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
}`,dC=`#include <common>
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
}`,hC=`uniform vec3 color;
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
}`,pC=`uniform float rotation;
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
}`,mC=`uniform vec3 diffuse;
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
}`,st={alphamap_fragment:G1,alphamap_pars_fragment:V1,alphatest_fragment:H1,alphatest_pars_fragment:W1,aomap_fragment:j1,aomap_pars_fragment:X1,begin_vertex:Y1,beginnormal_vertex:q1,bsdfs:$1,iridescence_fragment:K1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:eT,clipping_planes_vertex:tT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:rT,color_vertex:oT,common:sT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:lT,displacementmap_pars_vertex:uT,displacementmap_vertex:cT,emissivemap_fragment:fT,emissivemap_pars_fragment:dT,encodings_fragment:hT,encodings_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:vT,envmap_pars_fragment:gT,envmap_pars_vertex:_T,envmap_physical_pars_fragment:RT,envmap_vertex:yT,fog_vertex:xT,fog_pars_vertex:ST,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:wT,lightmap_fragment:TT,lightmap_pars_fragment:bT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:AT,lights_pars_begin:PT,lights_toon_fragment:DT,lights_toon_pars_fragment:LT,lights_phong_fragment:IT,lights_phong_pars_fragment:UT,lights_physical_fragment:OT,lights_physical_pars_fragment:NT,lights_fragment_begin:FT,lights_fragment_maps:kT,lights_fragment_end:zT,logdepthbuf_fragment:BT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:VT,logdepthbuf_vertex:HT,map_fragment:WT,map_pars_fragment:jT,map_particle_fragment:XT,map_particle_pars_fragment:YT,metalnessmap_fragment:qT,metalnessmap_pars_fragment:$T,morphcolor_vertex:KT,morphnormal_vertex:ZT,morphtarget_pars_vertex:QT,morphtarget_vertex:JT,normal_fragment_begin:eb,normal_fragment_maps:tb,normal_pars_fragment:nb,normal_pars_vertex:ib,normal_vertex:rb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:ab,clearcoat_pars_fragment:lb,iridescence_pars_fragment:ub,output_fragment:cb,packing:fb,premultiplied_alpha_fragment:db,project_vertex:hb,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:vb,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:yb,shadowmap_vertex:xb,shadowmask_pars_fragment:Sb,skinbase_vertex:Mb,skinning_pars_vertex:Eb,skinning_vertex:wb,skinnormal_vertex:Tb,specularmap_fragment:bb,specularmap_pars_fragment:Cb,tonemapping_fragment:Ab,tonemapping_pars_fragment:Pb,transmission_fragment:Rb,transmission_pars_fragment:Db,uv_pars_fragment:Lb,uv_pars_vertex:Ib,uv_vertex:Ub,worldpos_vertex:Ob,background_vert:Nb,background_frag:Fb,backgroundCube_vert:kb,backgroundCube_frag:zb,cube_vert:Bb,cube_frag:Gb,depth_vert:Vb,depth_frag:Hb,distanceRGBA_vert:Wb,distanceRGBA_frag:jb,equirect_vert:Xb,equirect_frag:Yb,linedashed_vert:qb,linedashed_frag:$b,meshbasic_vert:Kb,meshbasic_frag:Zb,meshlambert_vert:Qb,meshlambert_frag:Jb,meshmatcap_vert:eC,meshmatcap_frag:tC,meshnormal_vert:nC,meshnormal_frag:iC,meshphong_vert:rC,meshphong_frag:oC,meshphysical_vert:sC,meshphysical_frag:aC,meshtoon_vert:lC,meshtoon_frag:uC,points_vert:cC,points_frag:fC,shadow_vert:dC,shadow_frag:hC,sprite_vert:pC,sprite_frag:mC},Pe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}}},Fi={basic:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:An([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:An([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:An([Pe.points,Pe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:An([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:An([Pe.common,Pe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:An([Pe.sprite,Pe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:An([Pe.common,Pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:An([Pe.lights,Pe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Fi.physical={uniforms:An([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Iu={r:0,b:0,g:0};function vC(t,e,n,i,r,o,l){const a=new Ze(0);let d=o===!0?0:1,h,m,_=null,g=0,y=null;function b(E,p){let w=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?n:e).get(x)),x===null?T(a,d):x&&x.isColor&&(T(x,1),w=!0),t.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,l),w=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,l),w=!0;break}(t.autoClear||w)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Wc)?(m===void 0&&(m=new Bn(new wl(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Hs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=x,m.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,m.material.toneMapped=x.colorSpace!==it,(_!==x||g!==x.version||y!==t.toneMapping)&&(m.material.needsUpdate=!0,_=x,g=x.version,y=t.toneMapping),m.layers.enableAll(),E.unshift(m,m.geometry,m.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Bn(new Tl(2,2),new Lt({name:"BackgroundMaterial",uniforms:Hs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(_!==x||g!==x.version||y!==t.toneMapping)&&(h.material.needsUpdate=!0,_=x,g=x.version,y=t.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function T(E,p){E.getRGB(Iu,Qy(t)),i.buffers.color.setClear(Iu.r,Iu.g,Iu.b,p,l)}return{getClearColor:function(){return a},setClearColor:function(E,p=1){a.set(E),d=p,T(a,d)},getClearAlpha:function(){return d},setClearAlpha:function(E){d=E,T(a,d)},render:b}}function gC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,a={},d=E(null);let h=d,m=!1;function _(te,j,ue,pe,X){let J=!1;if(l){const ne=T(pe,ue,j);h!==ne&&(h=ne,y(h.object)),J=p(te,pe,ue,X),J&&w(te,pe,ue,X)}else{const ne=j.wireframe===!0;(h.geometry!==pe.id||h.program!==ue.id||h.wireframe!==ne)&&(h.geometry=pe.id,h.program=ue.id,h.wireframe=ne,J=!0)}X!==null&&n.update(X,t.ELEMENT_ARRAY_BUFFER),(J||m)&&(m=!1,z(te,j,ue,pe),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function g(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function y(te){return i.isWebGL2?t.bindVertexArray(te):o.bindVertexArrayOES(te)}function b(te){return i.isWebGL2?t.deleteVertexArray(te):o.deleteVertexArrayOES(te)}function T(te,j,ue){const pe=ue.wireframe===!0;let X=a[te.id];X===void 0&&(X={},a[te.id]=X);let J=X[j.id];J===void 0&&(J={},X[j.id]=J);let ne=J[pe];return ne===void 0&&(ne=E(g()),J[pe]=ne),ne}function E(te){const j=[],ue=[],pe=[];for(let X=0;X<r;X++)j[X]=0,ue[X]=0,pe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ue,attributeDivisors:pe,object:te,attributes:{},index:null}}function p(te,j,ue,pe){const X=h.attributes,J=j.attributes;let ne=0;const we=ue.getAttributes();for(const ve in we)if(we[ve].location>=0){const q=X[ve];let Me=J[ve];if(Me===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(Me=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(Me=te.instanceColor)),q===void 0||q.attribute!==Me||Me&&q.data!==Me.data)return!0;ne++}return h.attributesNum!==ne||h.index!==pe}function w(te,j,ue,pe){const X={},J=j.attributes;let ne=0;const we=ue.getAttributes();for(const ve in we)if(we[ve].location>=0){let q=J[ve];q===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(q=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(q=te.instanceColor));const Me={};Me.attribute=q,q&&q.data&&(Me.data=q.data),X[ve]=Me,ne++}h.attributes=X,h.attributesNum=ne,h.index=pe}function x(){const te=h.newAttributes;for(let j=0,ue=te.length;j<ue;j++)te[j]=0}function L(te){P(te,0)}function P(te,j){const ue=h.newAttributes,pe=h.enabledAttributes,X=h.attributeDivisors;ue[te]=1,pe[te]===0&&(t.enableVertexAttribArray(te),pe[te]=1),X[te]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,j),X[te]=j)}function I(){const te=h.newAttributes,j=h.enabledAttributes;for(let ue=0,pe=j.length;ue<pe;ue++)j[ue]!==te[ue]&&(t.disableVertexAttribArray(ue),j[ue]=0)}function B(te,j,ue,pe,X,J){i.isWebGL2===!0&&(ue===t.INT||ue===t.UNSIGNED_INT)?t.vertexAttribIPointer(te,j,ue,X,J):t.vertexAttribPointer(te,j,ue,pe,X,J)}function z(te,j,ue,pe){if(i.isWebGL2===!1&&(te.isInstancedMesh||pe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=pe.attributes,J=ue.getAttributes(),ne=j.defaultAttributeValues;for(const we in J){const ve=J[we];if(ve.location>=0){let oe=X[we];if(oe===void 0&&(we==="instanceMatrix"&&te.instanceMatrix&&(oe=te.instanceMatrix),we==="instanceColor"&&te.instanceColor&&(oe=te.instanceColor)),oe!==void 0){const q=oe.normalized,Me=oe.itemSize,Ee=n.get(oe);if(Ee===void 0)continue;const H=Ee.buffer,Ke=Ee.type,He=Ee.bytesPerElement;if(oe.isInterleavedBufferAttribute){const Te=oe.data,Be=Te.stride,ht=oe.offset;if(Te.isInstancedInterleavedBuffer){for(let ze=0;ze<ve.locationSize;ze++)P(ve.location+ze,Te.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ze=0;ze<ve.locationSize;ze++)L(ve.location+ze);t.bindBuffer(t.ARRAY_BUFFER,H);for(let ze=0;ze<ve.locationSize;ze++)B(ve.location+ze,Me/ve.locationSize,Ke,q,Be*He,(ht+Me/ve.locationSize*ze)*He)}else{if(oe.isInstancedBufferAttribute){for(let Te=0;Te<ve.locationSize;Te++)P(ve.location+Te,oe.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<ve.locationSize;Te++)L(ve.location+Te);t.bindBuffer(t.ARRAY_BUFFER,H);for(let Te=0;Te<ve.locationSize;Te++)B(ve.location+Te,Me/ve.locationSize,Ke,q,Me*He,Me/ve.locationSize*Te*He)}}else if(ne!==void 0){const q=ne[we];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(ve.location,q);break;case 3:t.vertexAttrib3fv(ve.location,q);break;case 4:t.vertexAttrib4fv(ve.location,q);break;default:t.vertexAttrib1fv(ve.location,q)}}}}I()}function R(){fe();for(const te in a){const j=a[te];for(const ue in j){const pe=j[ue];for(const X in pe)b(pe[X].object),delete pe[X];delete j[ue]}delete a[te]}}function N(te){if(a[te.id]===void 0)return;const j=a[te.id];for(const ue in j){const pe=j[ue];for(const X in pe)b(pe[X].object),delete pe[X];delete j[ue]}delete a[te.id]}function ae(te){for(const j in a){const ue=a[j];if(ue[te.id]===void 0)continue;const pe=ue[te.id];for(const X in pe)b(pe[X].object),delete pe[X];delete ue[te.id]}}function fe(){$(),m=!0,h!==d&&(h=d,y(h.object))}function $(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:_,reset:fe,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:x,enableAttribute:L,disableUnusedAttributes:I}}function _C(t,e,n,i){const r=i.isWebGL2;let o;function l(h){o=h}function a(h,m){t.drawArrays(o,h,m),n.update(m,o,1)}function d(h,m,_){if(_===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](o,h,m,_),n.update(m,o,_)}this.setMode=l,this.render=a,this.renderInstances=d}function yC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const d=o(a);d!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const h=l||e.has("WEBGL_draw_buffers"),m=n.logarithmicDepthBuffer===!0,_=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),b=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),T=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=g>0,L=l||e.has("OES_texture_float"),P=x&&L,I=l?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:E,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:L,floatVertexTextures:P,maxSamples:I}}function xC(t){const e=this;let n=null,i=0,r=!1,o=!1;const l=new ao,a=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||i!==0||r;return r=g,i=_.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){n=m(_,g,0)},this.setState=function(_,g,y){const b=_.clippingPlanes,T=_.clipIntersection,E=_.clipShadows,p=t.get(_);if(!r||b===null||b.length===0||o&&!E)o?m(null):h();else{const w=o?0:i,x=w*4;let L=p.clippingState||null;d.value=L,L=m(b,g,x,y);for(let P=0;P!==x;++P)L[P]=n[P];p.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,g,y,b){const T=_!==null?_.length:0;let E=null;if(T!==0){if(E=d.value,b!==!0||E===null){const p=y+T*4,w=g.matrixWorldInverse;a.getNormalMatrix(w),(E===null||E.length<p)&&(E=new Float32Array(p));for(let x=0,L=y;x!==T;++x,L+=4)l.copy(_[x]).applyMatrix4(w,a),l.normal.toArray(E,L),E[L+3]=l.constant}d.value=E,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,E}}function SC(t){let e=new WeakMap;function n(l,a){return a===Mc?l.mapping=Bs:a===Rh&&(l.mapping=Gs),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Mc||a===Rh)if(e.has(l)){const d=e.get(l).texture;return n(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new F1(d.height/2);return h.fromEquirectangularTexture(t,l),e.set(l,h),l.addEventListener("dispose",r),n(h.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const d=e.get(a);d!==void 0&&(e.delete(a),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Xc extends Jy{constructor(e=-1,n=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,a=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,a-=m*this.view.offsetY,d=a-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xs=4,Ig=[.125,.215,.35,.446,.526,.582],co=20,Td=new Xc,Ug=new Ze;let bd=null;const lo=(1+Math.sqrt(5))/2,ss=1/lo,Og=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,lo,ss),new Y(0,lo,-ss),new Y(ss,0,lo),new Y(-ss,0,lo),new Y(lo,ss,0),new Y(-lo,ss,0)];class Ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd),e.scissorTest=!1,Uu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:cl,format:Ti,colorSpace:Vi,depthBuffer:!1},r=Fg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MC(o)),this._blurMaterial=EC(o,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,Td)}_sceneToCubeUV(e,n,i,r){const a=new Fn(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,g=m.toneMapping;m.getClearColor(Ug),m.toneMapping=Gi,m.autoClear=!1;const y=new So({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),b=new Bn(new wl,y);let T=!1;const E=e.background;E?E.isColor&&(y.color.copy(E),e.background=null,T=!0):(y.color.copy(Ug),T=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,d[p],0),a.lookAt(h[p],0,0)):w===1?(a.up.set(0,0,d[p]),a.lookAt(0,h[p],0)):(a.up.set(0,d[p],0),a.lookAt(0,0,h[p]));const x=this._cubeSize;Uu(r,w*x,p>2?x:0,x,x),m.setRenderTarget(r),T&&m.render(b,a),m.render(e,a)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=g,m.autoClear=_,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const d=this._cubeSize;Uu(n,0,0,3*d,2*d),i.setRenderTarget(n),i.render(l,Td)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Og[(r-1)%Og.length];this._blur(e,r-1,r,o,l)}n.autoClear=i}_blur(e,n,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,l,a){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Bn(this._lodPlanes[r],h),g=h.uniforms,y=this._sizeLods[i]-1,b=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*co-1),T=o/b,E=isFinite(o)?1+Math.floor(m*T):co;E>co&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${co}`);const p=[];let w=0;for(let B=0;B<co;++B){const z=B/T,R=Math.exp(-z*z/2);p.push(R),B===0?w+=R:B<E&&(w+=2*R)}for(let B=0;B<p.length;B++)p[B]=p[B]/w;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=p,g.latitudinal.value=l==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:x}=this;g.dTheta.value=b,g.mipInt.value=x-i;const L=this._sizeLods[r],P=3*L*(r>x-xs?r-x+xs:0),I=4*(this._cubeSize-L);Uu(n,P,I,3*L,2*L),d.setRenderTarget(n),d.render(_,Td)}}function MC(t){const e=[],n=[],i=[];let r=t;const o=t-xs+1+Ig.length;for(let l=0;l<o;l++){const a=Math.pow(2,r);n.push(a);let d=1/a;l>t-xs?d=Ig[l-t+xs-1]:l===0&&(d=0),i.push(d);const h=1/(a-2),m=-h,_=1+h,g=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,b=6,T=3,E=2,p=1,w=new Float32Array(T*b*y),x=new Float32Array(E*b*y),L=new Float32Array(p*b*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,z=I>2?0:-1,R=[B,z,0,B+2/3,z,0,B+2/3,z+1,0,B,z,0,B+2/3,z+1,0,B,z+1,0];w.set(R,T*b*I),x.set(g,E*b*I);const N=[I,I,I,I,I,I];L.set(N,p*b*I)}const P=new Ri;P.setAttribute("position",new Ai(w,T)),P.setAttribute("uv",new Ai(x,E)),P.setAttribute("faceIndex",new Ai(L,p)),e.push(P),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fg(t,e,n){const i=new en(t,e,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EC(t,e,n){const i=new Float32Array(co),r=new Y(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Np(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function kg(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function zg(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Np(){return`

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
	`}function wC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const d=a.mapping,h=d===Mc||d===Rh,m=d===Bs||d===Gs;if(h||m)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let _=e.get(a);return n===null&&(n=new Ng(t)),_=h?n.fromEquirectangular(a,_):n.fromCubemap(a,_),e.set(a,_),_.texture}else{if(e.has(a))return e.get(a).texture;{const _=a.image;if(h&&_&&_.height>0||m&&_&&r(_)){n===null&&(n=new Ng(t));const g=h?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,g),a.addEventListener("dispose",o),g.texture}else return null}}}return a}function r(a){let d=0;const h=6;for(let m=0;m<h;m++)a[m]!==void 0&&d++;return d===h}function o(a){const d=a.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function TC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bC(t,e,n,i){const r={},o=new WeakMap;function l(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",l),delete r[g.id];const y=o.get(g);y&&(e.remove(y),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function a(_,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,n.memory.geometries++),g}function d(_){const g=_.attributes;for(const b in g)e.update(g[b],t.ARRAY_BUFFER);const y=_.morphAttributes;for(const b in y){const T=y[b];for(let E=0,p=T.length;E<p;E++)e.update(T[E],t.ARRAY_BUFFER)}}function h(_){const g=[],y=_.index,b=_.attributes.position;let T=0;if(y!==null){const w=y.array;T=y.version;for(let x=0,L=w.length;x<L;x+=3){const P=w[x+0],I=w[x+1],B=w[x+2];g.push(P,I,I,B,B,P)}}else{const w=b.array;T=b.version;for(let x=0,L=w.length/3-1;x<L;x+=3){const P=x+0,I=x+1,B=x+2;g.push(P,I,I,B,B,P)}}const E=new(Wy(g)?Zy:Ky)(g,1);E.version=T;const p=o.get(_);p&&e.remove(p),o.set(_,E)}function m(_){const g=o.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&h(_)}else h(_);return o.get(_)}return{get:a,update:d,getWireframeAttribute:m}}function CC(t,e,n,i){const r=i.isWebGL2;let o;function l(g){o=g}let a,d;function h(g){a=g.type,d=g.bytesPerElement}function m(g,y){t.drawElements(o,y,a,g*d),n.update(y,o,1)}function _(g,y,b){if(b===0)return;let T,E;if(r)T=t,E="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),E="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[E](o,y,a,g*d,b),n.update(y,o,b)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=_}function AC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,a){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PC(t,e){return t[0]-e[0]}function RC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function DC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,l=new Dt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function d(h,m,_){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const y=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,b=y!==void 0?y.length:0;let T=o.get(m);if(T===void 0||T.count!==b){let te=function(){fe.dispose(),o.delete(m),m.removeEventListener("dispose",te)};T!==void 0&&T.texture.dispose();const w=m.morphAttributes.position!==void 0,x=m.morphAttributes.normal!==void 0,L=m.morphAttributes.color!==void 0,P=m.morphAttributes.position||[],I=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let z=0;w===!0&&(z=1),x===!0&&(z=2),L===!0&&(z=3);let R=m.attributes.position.count*z,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ae=new Float32Array(R*N*4*b),fe=new Yy(ae,R,N,b);fe.type=vo,fe.needsUpdate=!0;const $=z*4;for(let j=0;j<b;j++){const ue=P[j],pe=I[j],X=B[j],J=R*N*4*j;for(let ne=0;ne<ue.count;ne++){const we=ne*$;w===!0&&(l.fromBufferAttribute(ue,ne),ae[J+we+0]=l.x,ae[J+we+1]=l.y,ae[J+we+2]=l.z,ae[J+we+3]=0),x===!0&&(l.fromBufferAttribute(pe,ne),ae[J+we+4]=l.x,ae[J+we+5]=l.y,ae[J+we+6]=l.z,ae[J+we+7]=0),L===!0&&(l.fromBufferAttribute(X,ne),ae[J+we+8]=l.x,ae[J+we+9]=l.y,ae[J+we+10]=l.z,ae[J+we+11]=X.itemSize===4?l.w:1)}}T={count:b,texture:fe,size:new Oe(R,N)},o.set(m,T),m.addEventListener("dispose",te)}let E=0;for(let w=0;w<g.length;w++)E+=g[w];const p=m.morphTargetsRelative?1:1-E;_.getUniforms().setValue(t,"morphTargetBaseInfluence",p),_.getUniforms().setValue(t,"morphTargetInfluences",g),_.getUniforms().setValue(t,"morphTargetsTexture",T.texture,n),_.getUniforms().setValue(t,"morphTargetsTextureSize",T.size)}else{const y=g===void 0?0:g.length;let b=i[m.id];if(b===void 0||b.length!==y){b=[];for(let x=0;x<y;x++)b[x]=[x,0];i[m.id]=b}for(let x=0;x<y;x++){const L=b[x];L[0]=x,L[1]=g[x]}b.sort(RC);for(let x=0;x<8;x++)x<y&&b[x][1]?(a[x][0]=b[x][0],a[x][1]=b[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(PC);const T=m.morphAttributes.position,E=m.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const L=a[x],P=L[0],I=L[1];P!==Number.MAX_SAFE_INTEGER&&I?(T&&m.getAttribute("morphTarget"+x)!==T[P]&&m.setAttribute("morphTarget"+x,T[P]),E&&m.getAttribute("morphNormal"+x)!==E[P]&&m.setAttribute("morphNormal"+x,E[P]),r[x]=I,p+=I):(T&&m.hasAttribute("morphTarget"+x)===!0&&m.deleteAttribute("morphTarget"+x),E&&m.hasAttribute("morphNormal"+x)===!0&&m.deleteAttribute("morphNormal"+x),r[x]=0)}const w=m.morphTargetsRelative?1:1-p;_.getUniforms().setValue(t,"morphTargetBaseInfluence",w),_.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:d}}function LC(t,e,n,i){let r=new WeakMap;function o(d){const h=i.render.frame,m=d.geometry,_=e.get(d,m);return r.get(_)!==h&&(e.update(_),r.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",a)===!1&&d.addEventListener("dispose",a),n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER)),_}function l(){r=new WeakMap}function a(d){const h=d.target;h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:l}}const nx=new Wn,ix=new Yy,rx=new S1,ox=new ex,Bg=[],Gg=[],Vg=new Float32Array(16),Hg=new Float32Array(9),Wg=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Bg[r];if(o===void 0&&(o=new Float32Array(r),Bg[r]=o),e!==0){i.toArray(o,0);for(let l=1,a=0;l!==e;++l)a+=n,t[l].toArray(o,a)}return o}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=Gg[e];n===void 0&&(n=new Int32Array(e),Gg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function FC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Wg.set(i),t.uniformMatrix2fv(this.addr,!1,Wg),rn(n,i)}}function kC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Hg.set(i),t.uniformMatrix3fv(this.addr,!1,Hg),rn(n,i)}}function zC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Vg.set(i),t.uniformMatrix4fv(this.addr,!1,Vg),rn(n,i)}}function BC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function WC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function XC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function qC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||nx,r)}function $C(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rx,r)}function KC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ox,r)}function ZC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ix,r)}function QC(t){switch(t){case 5126:return IC;case 35664:return UC;case 35665:return OC;case 35666:return NC;case 35674:return FC;case 35675:return kC;case 35676:return zC;case 5124:case 35670:return BC;case 35667:case 35671:return GC;case 35668:case 35672:return VC;case 35669:case 35673:return HC;case 5125:return WC;case 36294:return jC;case 36295:return XC;case 36296:return YC;case 35678:case 36198:case 36298:case 36306:case 35682:return qC;case 35679:case 36299:case 36307:return $C;case 35680:case 36300:case 36308:case 36293:return KC;case 36289:case 36303:case 36311:case 36292:return ZC}}function JC(t,e){t.uniform1fv(this.addr,e)}function eA(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function tA(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function nA(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function iA(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rA(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oA(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sA(t,e){t.uniform1iv(this.addr,e)}function aA(t,e){t.uniform2iv(this.addr,e)}function lA(t,e){t.uniform3iv(this.addr,e)}function uA(t,e){t.uniform4iv(this.addr,e)}function cA(t,e){t.uniform1uiv(this.addr,e)}function fA(t,e){t.uniform2uiv(this.addr,e)}function dA(t,e){t.uniform3uiv(this.addr,e)}function hA(t,e){t.uniform4uiv(this.addr,e)}function pA(t,e,n){const i=this.cache,r=e.length,o=Yc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2D(e[l]||nx,o[l])}function mA(t,e,n){const i=this.cache,r=e.length,o=Yc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture3D(e[l]||rx,o[l])}function vA(t,e,n){const i=this.cache,r=e.length,o=Yc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTextureCube(e[l]||ox,o[l])}function gA(t,e,n){const i=this.cache,r=e.length,o=Yc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2DArray(e[l]||ix,o[l])}function _A(t){switch(t){case 5126:return JC;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return oA;case 5124:case 35670:return sA;case 35667:case 35671:return aA;case 35668:case 35672:return lA;case 35669:case 35673:return uA;case 5125:return cA;case 36294:return fA;case 36295:return dA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return gA}}class yA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=QC(n.type)}}class xA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=_A(n.type)}}class SA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function jg(t,e){t.seq.push(e),t.map[e.id]=e}function MA(t,e,n){const i=t.name,r=i.length;for(Cd.lastIndex=0;;){const o=Cd.exec(i),l=Cd.lastIndex;let a=o[1];const d=o[2]==="]",h=o[3];if(d&&(a=a|0),h===void 0||h==="["&&l+2===r){jg(n,h===void 0?new yA(a,t,e):new xA(a,t,e));break}else{let _=n.map[a];_===void 0&&(_=new SA(a),jg(n,_)),n=_}}}class Ku{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);MA(o,l,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,l=n.length;o!==l;++o){const a=n[o],d=i[a.id];d.needsUpdate!==!1&&a.setValue(e,d.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in n&&i.push(l)}return i}}function Xg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let EA=0;function wA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=r;l<o;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${n[l]}`)}return i.join(`
`)}function TA(t){switch(t){case Vi:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+wA(t.getShaderSource(e),l)}else return r}function bA(t,e){const n=TA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function CA(t,e){let n;switch(e){case Hw:n="Linear";break;case By:n="Reinhard";break;case Ww:n="OptimizedCineon";break;case jw:n="ACESFilmic";break;case Xw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function AA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(La).join(`
`)}function PA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),l=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:a}}return n}function La(t){return t!==""}function qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(t){return t.replace(DA,LA)}function LA(t,e){const n=st[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ih(n)}const IA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(t){return t.replace(IA,UA)}function UA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Zg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Oy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function kA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Hc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gw:e="ENVMAP_BLENDING_MIX";break;case Vw:e="ENVMAP_BLENDING_ADD";break}return e}function zA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BA(t,e,n,i){const r=t.getContext(),o=n.defines;let l=n.vertexShader,a=n.fragmentShader;const d=OA(n),h=NA(n),m=FA(n),_=kA(n),g=zA(n),y=n.isWebGL2?"":AA(n),b=PA(o),T=r.createProgram();let E,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=[b].filter(La).join(`
`),E.length>0&&(E+=`
`),p=[y,b].filter(La).join(`
`),p.length>0&&(p+=`
`)):(E=[Zg(n),"#define SHADER_NAME "+n.shaderName,b,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[y,Zg(n),"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?st.tonemapping_pars_fragment:"",n.toneMapping!==Gi?CA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.encodings_pars_fragment,bA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),l=Ih(l),l=qg(l,n),l=$g(l,n),a=Ih(a),a=qg(a,n),a=$g(a,n),l=Kg(l),a=Kg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,E=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,p=["#define varying in",n.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+E+l,L=w+p+a,P=Xg(r,r.VERTEX_SHADER,x),I=Xg(r,r.FRAGMENT_SHADER,L);if(r.attachShader(T,P),r.attachShader(T,I),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T),t.debug.checkShaderErrors){const R=r.getProgramInfoLog(T).trim(),N=r.getShaderInfoLog(P).trim(),ae=r.getShaderInfoLog(I).trim();let fe=!0,$=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(fe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,P,I);else{const te=Yg(r,P,"vertex"),j=Yg(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+te+`
`+j)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||ae==="")&&($=!1);$&&(this.diagnostics={runnable:fe,programLog:R,vertexShader:{log:N,prefix:E},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(P),r.deleteShader(I);let B;this.getUniforms=function(){return B===void 0&&(B=new Ku(r,T)),B};let z;return this.getAttributes=function(){return z===void 0&&(z=RA(r,T)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.name=n.shaderName,this.id=EA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HA(e),n.set(e,i)),i}}class HA{constructor(e){this.id=GA++,this.code=e,this.usedTimes=0}}function WA(t,e,n,i,r,o,l){const a=new qy,d=new VA,h=[],m=r.isWebGL2,_=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===1?"uv1":R===2?"uv2":R===3?"uv3":"uv"}function E(R,N,ae,fe,$){const te=fe.fog,j=$.geometry,ue=R.isMeshStandardMaterial?fe.environment:null,pe=(R.isMeshStandardMaterial?n:e).get(R.envMap||ue),X=pe&&pe.mapping===Wc?pe.image.height:null,J=b[R.type];R.precision!==null&&(y=r.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=ne!==void 0?ne.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let oe,q,Me,Ee;if(J){const xt=Fi[J];oe=xt.vertexShader,q=xt.fragmentShader}else oe=R.vertexShader,q=R.fragmentShader,d.update(R),Me=d.getVertexShaderID(R),Ee=d.getFragmentShaderID(R);const H=t.getRenderTarget(),Ke=$.isInstancedMesh===!0,He=!!R.map,Te=!!R.matcap,Be=!!pe,ht=!!R.aoMap,ze=!!R.lightMap,Qe=!!R.bumpMap,Ye=!!R.normalMap,Tt=!!R.displacementMap,Ot=!!R.emissiveMap,gt=!!R.metalnessMap,lt=!!R.roughnessMap,Mt=R.clearcoat>0,jt=R.iridescence>0,F=R.sheen>0,D=R.transmission>0,se=Mt&&!!R.clearcoatMap,me=Mt&&!!R.clearcoatNormalMap,xe=Mt&&!!R.clearcoatRoughnessMap,be=jt&&!!R.iridescenceMap,G=jt&&!!R.iridescenceThicknessMap,he=F&&!!R.sheenColorMap,ie=F&&!!R.sheenRoughnessMap,Ce=!!R.specularMap,Le=!!R.specularColorMap,ke=!!R.specularIntensityMap,Re=D&&!!R.transmissionMap,Ne=D&&!!R.thicknessMap,qe=!!R.gradientMap,Je=!!R.alphaMap,At=R.alphaTest>0,W=!!R.extensions,le=!!j.attributes.uv1,ge=!!j.attributes.uv2,De=!!j.attributes.uv3;return{isWebGL2:m,shaderID:J,shaderName:R.type,vertexShader:oe,fragmentShader:q,defines:R.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,instancing:Ke,instancingColor:Ke&&$.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Vi,map:He,matcap:Te,envMap:Be,envMapMode:Be&&pe.mapping,envMapCubeUVHeight:X,aoMap:ht,lightMap:ze,bumpMap:Qe,normalMap:Ye,displacementMap:g&&Tt,emissiveMap:Ot,normalMapObjectSpace:Ye&&R.normalMapType===c1,normalMapTangentSpace:Ye&&R.normalMapType===Sl,metalnessMap:gt,roughnessMap:lt,clearcoat:Mt,clearcoatMap:se,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:jt,iridescenceMap:be,iridescenceThicknessMap:G,sheen:F,sheenColorMap:he,sheenRoughnessMap:ie,specularMap:Ce,specularColorMap:Le,specularIntensityMap:ke,transmission:D,transmissionMap:Re,thicknessMap:Ne,gradientMap:qe,opaque:R.transparent===!1&&R.blending===Ps,alphaMap:Je,alphaTest:At,combine:R.combine,mapUv:He&&T(R.map.channel),aoMapUv:ht&&T(R.aoMap.channel),lightMapUv:ze&&T(R.lightMap.channel),bumpMapUv:Qe&&T(R.bumpMap.channel),normalMapUv:Ye&&T(R.normalMap.channel),displacementMapUv:Tt&&T(R.displacementMap.channel),emissiveMapUv:Ot&&T(R.emissiveMap.channel),metalnessMapUv:gt&&T(R.metalnessMap.channel),roughnessMapUv:lt&&T(R.roughnessMap.channel),clearcoatMapUv:se&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:me&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:G&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:ie&&T(R.sheenRoughnessMap.channel),specularMapUv:Ce&&T(R.specularMap.channel),specularColorMapUv:Le&&T(R.specularColorMap.channel),specularIntensityMapUv:ke&&T(R.specularIntensityMap.channel),transmissionMapUv:Re&&T(R.transmissionMap.channel),thicknessMapUv:Ne&&T(R.thicknessMap.channel),alphaMapUv:Je&&T(R.alphaMap.channel),vertexTangents:Ye&&!!j.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ge,vertexUv3s:De,pointsUvs:$.isPoints===!0&&!!j.attributes.uv&&(He||Je),fog:!!te,useFog:R.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:$.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ve,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&ae.length>0,shadowMapType:t.shadowMap.type,toneMapping:R.toneMapped?t.toneMapping:Gi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===nr,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:W&&R.extensions.derivatives===!0,extensionFragDepth:W&&R.extensions.fragDepth===!0,extensionDrawBuffers:W&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function p(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ae in R.defines)N.push(ae),N.push(R.defines[ae]);return R.isRawShaderMaterial===!1&&(w(N,R),x(N,R),N.push(t.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function w(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function x(R,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),R.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),R.push(a.mask)}function L(R){const N=b[R.type];let ae;if(N){const fe=Fi[N];ae=kn.clone(fe.uniforms)}else ae=R.uniforms;return ae}function P(R,N){let ae;for(let fe=0,$=h.length;fe<$;fe++){const te=h[fe];if(te.cacheKey===N){ae=te,++ae.usedTimes;break}}return ae===void 0&&(ae=new BA(t,N,R,o),h.push(ae)),ae}function I(R){if(--R.usedTimes===0){const N=h.indexOf(R);h[N]=h[h.length-1],h.pop(),R.destroy()}}function B(R){d.remove(R)}function z(){d.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:L,acquireProgram:P,releaseProgram:I,releaseShaderCache:B,programs:h,dispose:z}}function jA(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,a){t.get(o)[l]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function l(_,g,y,b,T,E){let p=t[e];return p===void 0?(p={id:_.id,object:_,geometry:g,material:y,groupOrder:b,renderOrder:_.renderOrder,z:T,group:E},t[e]=p):(p.id=_.id,p.object=_,p.geometry=g,p.material=y,p.groupOrder=b,p.renderOrder=_.renderOrder,p.z=T,p.group=E),e++,p}function a(_,g,y,b,T,E){const p=l(_,g,y,b,T,E);y.transmission>0?i.push(p):y.transparent===!0?r.push(p):n.push(p)}function d(_,g,y,b,T,E){const p=l(_,g,y,b,T,E);y.transmission>0?i.unshift(p):y.transparent===!0?r.unshift(p):n.unshift(p)}function h(_,g){n.length>1&&n.sort(_||XA),i.length>1&&i.sort(g||Qg),r.length>1&&r.sort(g||Qg)}function m(){for(let _=e,g=t.length;_<g;_++){const y=t[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:d,finish:m,sort:h}}function YA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let l;return o===void 0?(l=new Jg,t.set(i,[l])):r>=o.length?(l=new Jg,o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function qA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Ze};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function $A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KA=0;function ZA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QA(t,e){const n=new qA,i=$A(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new Y);const o=new Y,l=new Vt,a=new Vt;function d(m,_){let g=0,y=0,b=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let T=0,E=0,p=0,w=0,x=0,L=0,P=0,I=0,B=0,z=0;m.sort(ZA);const R=_===!0?Math.PI:1;for(let ae=0,fe=m.length;ae<fe;ae++){const $=m[ae],te=$.color,j=$.intensity,ue=$.distance,pe=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)g+=te.r*j*R,y+=te.g*j*R,b+=te.b*j*R;else if($.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector($.sh.coefficients[X],j);else if($.isDirectionalLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.directionalShadow[T]=ne,r.directionalShadowMap[T]=pe,r.directionalShadowMatrix[T]=$.shadow.matrix,L++}r.directional[T]=X,T++}else if($.isSpotLight){const X=n.get($);X.position.setFromMatrixPosition($.matrixWorld),X.color.copy(te).multiplyScalar(j*R),X.distance=ue,X.coneCos=Math.cos($.angle),X.penumbraCos=Math.cos($.angle*(1-$.penumbra)),X.decay=$.decay,r.spot[p]=X;const J=$.shadow;if($.map&&(r.spotLightMap[B]=$.map,B++,J.updateMatrices($),$.castShadow&&z++),r.spotLightMatrix[p]=J.matrix,$.castShadow){const ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.spotShadow[p]=ne,r.spotShadowMap[p]=pe,I++}p++}else if($.isRectAreaLight){const X=n.get($);X.color.copy(te).multiplyScalar(j),X.halfWidth.set($.width*.5,0,0),X.halfHeight.set(0,$.height*.5,0),r.rectArea[w]=X,w++}else if($.isPointLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),X.distance=$.distance,X.decay=$.decay,$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,ne.shadowCameraNear=J.camera.near,ne.shadowCameraFar=J.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=$.shadow.matrix,P++}r.point[E]=X,E++}else if($.isHemisphereLight){const X=n.get($);X.skyColor.copy($.color).multiplyScalar(j*R),X.groundColor.copy($.groundColor).multiplyScalar(j*R),r.hemi[x]=X,x++}}w>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=b;const N=r.hash;(N.directionalLength!==T||N.pointLength!==E||N.spotLength!==p||N.rectAreaLength!==w||N.hemiLength!==x||N.numDirectionalShadows!==L||N.numPointShadows!==P||N.numSpotShadows!==I||N.numSpotMaps!==B)&&(r.directional.length=T,r.spot.length=p,r.rectArea.length=w,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=I+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,N.directionalLength=T,N.pointLength=E,N.spotLength=p,N.rectAreaLength=w,N.hemiLength=x,N.numDirectionalShadows=L,N.numPointShadows=P,N.numSpotShadows=I,N.numSpotMaps=B,r.version=KA++)}function h(m,_){let g=0,y=0,b=0,T=0,E=0;const p=_.matrixWorldInverse;for(let w=0,x=m.length;w<x;w++){const L=m[w];if(L.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),g++}else if(L.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),b++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),a.identity(),l.copy(L.matrixWorld),l.premultiply(p),a.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),T++}else if(L.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),y++}else if(L.isHemisphereLight){const P=r.hemi[E];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(p),E++}}}return{setup:d,setupView:h,state:r}}function e0(t,e){const n=new QA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(_){i.push(_)}function a(_){r.push(_)}function d(_){n.setup(i,_)}function h(_){n.setupView(i,_)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:d,setupLightsView:h,pushLight:l,pushShadow:a}}function JA(t,e){let n=new WeakMap;function i(o,l=0){const a=n.get(o);let d;return a===void 0?(d=new e0(t,e),n.set(o,[d])):l>=a.length?(d=new e0(t,e),a.push(d)):d=a[l],d}function r(){n=new WeakMap}return{get:i,dispose:r}}class Gr extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dl extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tP=`uniform sampler2D shadow_pass;
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
}`;function nP(t,e,n){let i=new Op;const r=new Oe,o=new Oe,l=new Dt,a=new Gr({depthPacking:xl}),d=new dl,h={},m=n.maxTextureSize,_={[Br]:Dn,[Dn]:Br,[nr]:nr},g=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:eP,fragmentShader:tP}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ri;b.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Bn(b,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp;let p=this.type;this.render=function(P,I,B){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||P.length===0)return;const z=t.getRenderTarget(),R=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(un),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const fe=p!==Ji&&this.type===Ji,$=p===Ji&&this.type!==Ji;for(let te=0,j=P.length;te<j;te++){const ue=P[te],pe=ue.shadow;if(pe===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(pe.autoUpdate===!1&&pe.needsUpdate===!1)continue;r.copy(pe.mapSize);const X=pe.getFrameExtents();if(r.multiply(X),o.copy(pe.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/X.x),r.x=o.x*X.x,pe.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/X.y),r.y=o.y*X.y,pe.mapSize.y=o.y)),pe.map===null||fe===!0||$===!0){const ne=this.type!==Ji?{minFilter:Qt,magFilter:Qt}:{};pe.map!==null&&pe.map.dispose(),pe.map=new en(r.x,r.y,ne),pe.map.texture.name=ue.name+".shadowMap",pe.camera.updateProjectionMatrix()}t.setRenderTarget(pe.map),t.clear();const J=pe.getViewportCount();for(let ne=0;ne<J;ne++){const we=pe.getViewport(ne);l.set(o.x*we.x,o.y*we.y,o.x*we.z,o.y*we.w),ae.viewport(l),pe.updateMatrices(ue,ne),i=pe.getFrustum(),L(I,B,pe.camera,ue,this.type)}pe.isPointLightShadow!==!0&&this.type===Ji&&w(pe,B),pe.needsUpdate=!1}p=this.type,E.needsUpdate=!1,t.setRenderTarget(z,R,N)};function w(P,I){const B=e.update(T);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new en(r.x,r.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(I,null,B,g,T,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(I,null,B,y,T,null)}function x(P,I,B,z){let R=null;const N=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)R=N;else if(R=B.isPointLight===!0?d:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ae=R.uuid,fe=I.uuid;let $=h[ae];$===void 0&&($={},h[ae]=$);let te=$[fe];te===void 0&&(te=R.clone(),$[fe]=te),R=te}if(R.visible=I.visible,R.wireframe=I.wireframe,z===Ji?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=t.properties.get(R);ae.light=B}return R}function L(P,I,B,z,R){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Ji)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),$=P.material;if(Array.isArray($)){const te=fe.groups;for(let j=0,ue=te.length;j<ue;j++){const pe=te[j],X=$[pe.materialIndex];if(X&&X.visible){const J=x(P,X,z,R);t.renderBufferDirect(B,null,fe,J,P,pe)}}}else if($.visible){const te=x(P,$,z,R);t.renderBufferDirect(B,null,fe,te,P,null)}}const ae=P.children;for(let fe=0,$=ae.length;fe<$;fe++)L(ae[fe],I,B,z,R)}}function iP(t,e,n){const i=n.isWebGL2;function r(){let W=!1;const le=new Dt;let ge=null;const De=new Dt(0,0,0,0);return{setMask:function(Ie){ge!==Ie&&!W&&(t.colorMask(Ie,Ie,Ie,Ie),ge=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,xt,pt,on,Xt){Xt===!0&&(Ie*=on,xt*=on,pt*=on),le.set(Ie,xt,pt,on),De.equals(le)===!1&&(t.clearColor(Ie,xt,pt,on),De.copy(le))},reset:function(){W=!1,ge=null,De.set(-1,0,0,0)}}}function o(){let W=!1,le=null,ge=null,De=null;return{setTest:function(Ie){Ie?H(t.DEPTH_TEST):Ke(t.DEPTH_TEST)},setMask:function(Ie){le!==Ie&&!W&&(t.depthMask(Ie),le=Ie)},setFunc:function(Ie){if(ge!==Ie){switch(Ie){case Uw:t.depthFunc(t.NEVER);break;case Ow:t.depthFunc(t.ALWAYS);break;case Nw:t.depthFunc(t.LESS);break;case Ph:t.depthFunc(t.LEQUAL);break;case Fw:t.depthFunc(t.EQUAL);break;case kw:t.depthFunc(t.GEQUAL);break;case zw:t.depthFunc(t.GREATER);break;case Bw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Ie}},setLocked:function(Ie){W=Ie},setClear:function(Ie){De!==Ie&&(t.clearDepth(Ie),De=Ie)},reset:function(){W=!1,le=null,ge=null,De=null}}}function l(){let W=!1,le=null,ge=null,De=null,Ie=null,xt=null,pt=null,on=null,Xt=null;return{setTest:function(_t){W||(_t?H(t.STENCIL_TEST):Ke(t.STENCIL_TEST))},setMask:function(_t){le!==_t&&!W&&(t.stencilMask(_t),le=_t)},setFunc:function(_t,Yt,jn){(ge!==_t||De!==Yt||Ie!==jn)&&(t.stencilFunc(_t,Yt,jn),ge=_t,De=Yt,Ie=jn)},setOp:function(_t,Yt,jn){(xt!==_t||pt!==Yt||on!==jn)&&(t.stencilOp(_t,Yt,jn),xt=_t,pt=Yt,on=jn)},setLocked:function(_t){W=_t},setClear:function(_t){Xt!==_t&&(t.clearStencil(_t),Xt=_t)},reset:function(){W=!1,le=null,ge=null,De=null,Ie=null,xt=null,pt=null,on=null,Xt=null}}}const a=new r,d=new o,h=new l,m=new WeakMap,_=new WeakMap;let g={},y={},b=new WeakMap,T=[],E=null,p=!1,w=null,x=null,L=null,P=null,I=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,pe=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(X)[1]),ue=pe>=1):X.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ue=pe>=2);let J=null,ne={};const we=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),oe=new Dt().fromArray(we),q=new Dt().fromArray(ve);function Me(W,le,ge,De){const Ie=new Uint8Array(4),xt=t.createTexture();t.bindTexture(W,xt),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<ge;pt++)i&&(W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(le+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return xt}const Ee={};Ee[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),d.setClear(1),h.setClear(0),H(t.DEPTH_TEST),d.setFunc(Ph),Tt(!1),Ot(Bv),H(t.CULL_FACE),Qe(un);function H(W){g[W]!==!0&&(t.enable(W),g[W]=!0)}function Ke(W){g[W]!==!1&&(t.disable(W),g[W]=!1)}function He(W,le){return y[W]!==le?(t.bindFramebuffer(W,le),y[W]=le,i&&(W===t.DRAW_FRAMEBUFFER&&(y[t.FRAMEBUFFER]=le),W===t.FRAMEBUFFER&&(y[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function Te(W,le){let ge=T,De=!1;if(W)if(ge=b.get(le),ge===void 0&&(ge=[],b.set(le,ge)),W.isWebGLMultipleRenderTargets){const Ie=W.texture;if(ge.length!==Ie.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let xt=0,pt=Ie.length;xt<pt;xt++)ge[xt]=t.COLOR_ATTACHMENT0+xt;ge.length=Ie.length,De=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,De=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Be(W){return E!==W?(t.useProgram(W),E=W,!0):!1}const ht={[Cr]:t.FUNC_ADD,[bw]:t.FUNC_SUBTRACT,[Cw]:t.FUNC_REVERSE_SUBTRACT};if(i)ht[Hv]=t.MIN,ht[Wv]=t.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(ht[Hv]=W.MIN_EXT,ht[Wv]=W.MAX_EXT)}const ze={[Ah]:t.ZERO,[Aw]:t.ONE,[Pw]:t.SRC_COLOR,[Ny]:t.SRC_ALPHA,[Iw]:t.SRC_ALPHA_SATURATE,[zy]:t.DST_COLOR,[ky]:t.DST_ALPHA,[Rw]:t.ONE_MINUS_SRC_COLOR,[Fy]:t.ONE_MINUS_SRC_ALPHA,[Lw]:t.ONE_MINUS_DST_COLOR,[Dw]:t.ONE_MINUS_DST_ALPHA};function Qe(W,le,ge,De,Ie,xt,pt,on){if(W===un){p===!0&&(Ke(t.BLEND),p=!1);return}if(p===!1&&(H(t.BLEND),p=!0),W!==Sc){if(W!==w||on!==R){if((x!==Cr||I!==Cr)&&(t.blendEquation(t.FUNC_ADD),x=Cr,I=Cr),on)switch(W){case Ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.ONE,t.ONE);break;case Gv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,B=null,z=null,w=W,R=on}return}Ie=Ie||le,xt=xt||ge,pt=pt||De,(le!==x||Ie!==I)&&(t.blendEquationSeparate(ht[le],ht[Ie]),x=le,I=Ie),(ge!==L||De!==P||xt!==B||pt!==z)&&(t.blendFuncSeparate(ze[ge],ze[De],ze[xt],ze[pt]),L=ge,P=De,B=xt,z=pt),w=W,R=!1}function Ye(W,le){W.side===nr?Ke(t.CULL_FACE):H(t.CULL_FACE);let ge=W.side===Dn;le&&(ge=!ge),Tt(ge),W.blending===Ps&&W.transparent===!1?Qe(un):Qe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),a.setMask(W.colorWrite);const De=W.stencilWrite;h.setTest(De),De&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):Ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(W){N!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),N=W)}function Ot(W){W!==ww?(H(t.CULL_FACE),W!==ae&&(W===Bv?t.cullFace(t.BACK):W===Tw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ke(t.CULL_FACE),ae=W}function gt(W){W!==fe&&(ue&&t.lineWidth(W),fe=W)}function lt(W,le,ge){W?(H(t.POLYGON_OFFSET_FILL),($!==le||te!==ge)&&(t.polygonOffset(le,ge),$=le,te=ge)):Ke(t.POLYGON_OFFSET_FILL)}function Mt(W){W?H(t.SCISSOR_TEST):Ke(t.SCISSOR_TEST)}function jt(W){W===void 0&&(W=t.TEXTURE0+j-1),J!==W&&(t.activeTexture(W),J=W)}function F(W,le,ge){ge===void 0&&(J===null?ge=t.TEXTURE0+j-1:ge=J);let De=ne[ge];De===void 0&&(De={type:void 0,texture:void 0},ne[ge]=De),(De.type!==W||De.texture!==le)&&(J!==ge&&(t.activeTexture(ge),J=ge),t.bindTexture(W,le||Ee[W]),De.type=W,De.texture=le)}function D(){const W=ne[J];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{t.texSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(W){oe.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),oe.copy(W))}function Ne(W){q.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function qe(W,le){let ge=_.get(le);ge===void 0&&(ge=new WeakMap,_.set(le,ge));let De=ge.get(W);De===void 0&&(De=t.getUniformBlockIndex(le,W.name),ge.set(W,De))}function Je(W,le){const De=_.get(le).get(W);m.get(le)!==De&&(t.uniformBlockBinding(le,De,W.__bindingPointIndex),m.set(le,De))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),g={},J=null,ne={},y={},b=new WeakMap,T=[],E=null,p=!1,w=null,x=null,L=null,P=null,I=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null,oe.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),d.reset(),h.reset()}return{buffers:{color:a,depth:d,stencil:h},enable:H,disable:Ke,bindFramebuffer:He,drawBuffers:Te,useProgram:Be,setBlending:Qe,setMaterial:Ye,setFlipSided:Tt,setCullFace:Ot,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:Mt,activeTexture:jt,bindTexture:F,unbindTexture:D,compressedTexImage2D:se,compressedTexImage3D:me,texImage2D:Le,texImage3D:ke,updateUBOMapping:qe,uniformBlockBinding:Je,texStorage2D:ie,texStorage3D:Ce,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:G,compressedTexSubImage3D:he,scissor:Re,viewport:Ne,reset:At}}function rP(t,e,n,i,r,o,l){const a=r.isWebGL2,d=r.maxTextures,h=r.maxCubemapSize,m=r.maxTextureSize,_=r.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let T;const E=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(F,D){return p?new OffscreenCanvas(F,D):fl("canvas")}function x(F,D,se,me){let xe=1;if((F.width>me||F.height>me)&&(xe=me/Math.max(F.width,F.height)),xe<1||D===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const be=D?h1:Math.floor,G=be(xe*F.width),he=be(xe*F.height);T===void 0&&(T=w(G,he));const ie=se?w(G,he):T;return ie.width=G,ie.height=he,ie.getContext("2d").drawImage(F,0,0,G,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+G+"x"+he+")."),ie}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function L(F){return gg(F.width)&&gg(F.height)}function P(F){return a?!1:F.wrapS!==wi||F.wrapT!==wi||F.minFilter!==Qt&&F.minFilter!==li}function I(F,D){return F.generateMipmaps&&D&&F.minFilter!==Qt&&F.minFilter!==li}function B(F){t.generateMipmap(F)}function z(F,D,se,me,xe=!1){if(a===!1)return D;if(F!==null){if(t[F]!==void 0)return t[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let be=D;return D===t.RED&&(se===t.FLOAT&&(be=t.R32F),se===t.HALF_FLOAT&&(be=t.R16F),se===t.UNSIGNED_BYTE&&(be=t.R8)),D===t.RG&&(se===t.FLOAT&&(be=t.RG32F),se===t.HALF_FLOAT&&(be=t.RG16F),se===t.UNSIGNED_BYTE&&(be=t.RG8)),D===t.RGBA&&(se===t.FLOAT&&(be=t.RGBA32F),se===t.HALF_FLOAT&&(be=t.RGBA16F),se===t.UNSIGNED_BYTE&&(be=me===it&&xe===!1?t.SRGB8_ALPHA8:t.RGBA8),se===t.UNSIGNED_SHORT_4_4_4_4&&(be=t.RGBA4),se===t.UNSIGNED_SHORT_5_5_5_1&&(be=t.RGB5_A1)),(be===t.R16F||be===t.R32F||be===t.RG16F||be===t.RG32F||be===t.RGBA16F||be===t.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function R(F,D,se){return I(F,se)===!0||F.isFramebufferTexture&&F.minFilter!==Qt&&F.minFilter!==li?Math.log2(Math.max(D.width,D.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?D.mipmaps.length:1}function N(F){return F===Qt||F===jv||F===Jf?t.NEAREST:t.LINEAR}function ae(F){const D=F.target;D.removeEventListener("dispose",ae),$(D),D.isVideoTexture&&b.delete(D)}function fe(F){const D=F.target;D.removeEventListener("dispose",fe),j(D)}function $(F){const D=i.get(F);if(D.__webglInit===void 0)return;const se=F.source,me=E.get(se);if(me){const xe=me[D.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&te(F),Object.keys(me).length===0&&E.delete(se)}i.remove(F)}function te(F){const D=i.get(F);t.deleteTexture(D.__webglTexture);const se=F.source,me=E.get(se);delete me[D.__cacheKey],l.memory.textures--}function j(F){const D=F.texture,se=i.get(F),me=i.get(D);if(me.__webglTexture!==void 0&&(t.deleteTexture(me.__webglTexture),l.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)t.deleteFramebuffer(se.__webglFramebuffer[xe]),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer[xe]);else{if(t.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&t.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let xe=0;xe<se.__webglColorRenderbuffer.length;xe++)se.__webglColorRenderbuffer[xe]&&t.deleteRenderbuffer(se.__webglColorRenderbuffer[xe]);se.__webglDepthRenderbuffer&&t.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let xe=0,be=D.length;xe<be;xe++){const G=i.get(D[xe]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),l.memory.textures--),i.remove(D[xe])}i.remove(D),i.remove(F)}let ue=0;function pe(){ue=0}function X(){const F=ue;return F>=d&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+d),ue+=1,F}function J(F){const D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()}function ne(F,D){const se=i.get(F);if(F.isVideoTexture&&Mt(F),F.isRenderTargetTexture===!1&&F.version>0&&se.__version!==F.version){const me=F.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(se,F,D);return}}n.bindTexture(t.TEXTURE_2D,se.__webglTexture,t.TEXTURE0+D)}function we(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ke(se,F,D);return}n.bindTexture(t.TEXTURE_2D_ARRAY,se.__webglTexture,t.TEXTURE0+D)}function ve(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ke(se,F,D);return}n.bindTexture(t.TEXTURE_3D,se.__webglTexture,t.TEXTURE0+D)}function oe(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){He(se,F,D);return}n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture,t.TEXTURE0+D)}const q={[Co]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Dh]:t.MIRRORED_REPEAT},Me={[Qt]:t.NEAREST,[jv]:t.NEAREST_MIPMAP_NEAREST,[Jf]:t.NEAREST_MIPMAP_LINEAR,[li]:t.LINEAR,[Yw]:t.LINEAR_MIPMAP_NEAREST,[ul]:t.LINEAR_MIPMAP_LINEAR};function Ee(F,D,se){if(se?(t.texParameteri(F,t.TEXTURE_WRAP_S,q[D.wrapS]),t.texParameteri(F,t.TEXTURE_WRAP_T,q[D.wrapT]),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,q[D.wrapR]),t.texParameteri(F,t.TEXTURE_MAG_FILTER,Me[D.magFilter]),t.texParameteri(F,t.TEXTURE_MIN_FILTER,Me[D.minFilter])):(t.texParameteri(F,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(F,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(D.wrapS!==wi||D.wrapT!==wi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(F,t.TEXTURE_MAG_FILTER,N(D.magFilter)),t.texParameteri(F,t.TEXTURE_MIN_FILTER,N(D.minFilter)),D.minFilter!==Qt&&D.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===Qt||D.minFilter!==Jf&&D.minFilter!==ul||D.type===vo&&e.has("OES_texture_float_linear")===!1||a===!1&&D.type===cl&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(t.texParameterf(F,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function H(F,D){let se=!1;F.__webglInit===void 0&&(F.__webglInit=!0,D.addEventListener("dispose",ae));const me=D.source;let xe=E.get(me);xe===void 0&&(xe={},E.set(me,xe));const be=J(D);if(be!==F.__cacheKey){xe[be]===void 0&&(xe[be]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,se=!0),xe[be].usedTimes++;const G=xe[F.__cacheKey];G!==void 0&&(xe[F.__cacheKey].usedTimes--,G.usedTimes===0&&te(D)),F.__cacheKey=be,F.__webglTexture=xe[be].texture}return se}function Ke(F,D,se){let me=t.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(me=t.TEXTURE_2D_ARRAY),D.isData3DTexture&&(me=t.TEXTURE_3D);const xe=H(F,D),be=D.source;n.bindTexture(me,F.__webglTexture,t.TEXTURE0+se);const G=i.get(be);if(be.version!==G.__version||xe===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const he=P(D)&&L(D.image)===!1;let ie=x(D.image,he,!1,m);ie=jt(D,ie);const Ce=L(ie)||a,Le=o.convert(D.format,D.colorSpace);let ke=o.convert(D.type),Re=z(D.internalFormat,Le,ke,D.colorSpace);Ee(me,D,Ce);let Ne;const qe=D.mipmaps,Je=a&&D.isVideoTexture!==!0,At=G.__version===void 0||xe===!0,W=R(D,ie,Ce);if(D.isDepthTexture)Re=t.DEPTH_COMPONENT,a?D.type===vo?Re=t.DEPTH_COMPONENT32F:D.type===mo?Re=t.DEPTH_COMPONENT24:D.type===Rs?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:D.type===vo&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===yo&&Re===t.DEPTH_COMPONENT&&D.type!==Ip&&D.type!==mo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=mo,ke=o.convert(D.type)),D.format===Vs&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,D.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Rs,ke=o.convert(D.type))),At&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,Le,ke,null));else if(D.isDataTexture)if(qe.length>0&&Ce){Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,Re,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ne=qe[le],Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ne.width,Ne.height,Le,ke,Ne.data):n.texImage2D(t.TEXTURE_2D,le,Re,Ne.width,Ne.height,0,Le,ke,Ne.data);D.generateMipmaps=!1}else Je?(At&&n.texStorage2D(t.TEXTURE_2D,W,Re,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Le,ke,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,Le,ke,ie.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Je&&At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Re,qe[0].width,qe[0].height,ie.depth);for(let le=0,ge=qe.length;le<ge;le++)Ne=qe[le],D.format!==Ti?Le!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Ne.width,Ne.height,ie.depth,Le,Ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Re,Ne.width,Ne.height,ie.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Ne.width,Ne.height,ie.depth,Le,ke,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Re,Ne.width,Ne.height,ie.depth,0,Le,ke,Ne.data)}else{Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,Re,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ne=qe[le],D.format!==Ti?Le!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Ne.width,Ne.height,Le,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Re,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ne.width,Ne.height,Le,ke,Ne.data):n.texImage2D(t.TEXTURE_2D,le,Re,Ne.width,Ne.height,0,Le,ke,Ne.data)}else if(D.isDataArrayTexture)Je?(At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,Re,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Le,ke,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,Le,ke,ie.data);else if(D.isData3DTexture)Je?(At&&n.texStorage3D(t.TEXTURE_3D,W,Re,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Le,ke,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,Le,ke,ie.data);else if(D.isFramebufferTexture){if(At)if(Je)n.texStorage2D(t.TEXTURE_2D,W,Re,ie.width,ie.height);else{let le=ie.width,ge=ie.height;for(let De=0;De<W;De++)n.texImage2D(t.TEXTURE_2D,De,Re,le,ge,0,Le,ke,null),le>>=1,ge>>=1}}else if(qe.length>0&&Ce){Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,Re,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ne=qe[le],Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Le,ke,Ne):n.texImage2D(t.TEXTURE_2D,le,Re,Le,ke,Ne);D.generateMipmaps=!1}else Je?(At&&n.texStorage2D(t.TEXTURE_2D,W,Re,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,ke,ie)):n.texImage2D(t.TEXTURE_2D,0,Re,Le,ke,ie);I(D,Ce)&&B(me),G.__version=be.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function He(F,D,se){if(D.image.length!==6)return;const me=H(F,D),xe=D.source;n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+se);const be=i.get(xe);if(xe.version!==be.__version||me===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const G=D.isCompressedTexture||D.image[0].isCompressedTexture,he=D.image[0]&&D.image[0].isDataTexture,ie=[];for(let le=0;le<6;le++)!G&&!he?ie[le]=x(D.image[le],!1,!0,h):ie[le]=he?D.image[le].image:D.image[le],ie[le]=jt(D,ie[le]);const Ce=ie[0],Le=L(Ce)||a,ke=o.convert(D.format,D.colorSpace),Re=o.convert(D.type),Ne=z(D.internalFormat,ke,Re,D.colorSpace),qe=a&&D.isVideoTexture!==!0,Je=be.__version===void 0||me===!0;let At=R(D,Ce,Le);Ee(t.TEXTURE_CUBE_MAP,D,Le);let W;if(G){qe&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Ne,Ce.width,Ce.height);for(let le=0;le<6;le++){W=ie[le].mipmaps;for(let ge=0;ge<W.length;ge++){const De=W[ge];D.format!==Ti?ke!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,De.width,De.height,ke,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,De.width,De.height,ke,Re,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Ne,De.width,De.height,0,ke,Re,De.data)}}}else{W=D.mipmaps,qe&&Je&&(W.length>0&&At++,n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Ne,ie[0].width,ie[0].height));for(let le=0;le<6;le++)if(he){qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie[le].width,ie[le].height,ke,Re,ie[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ne,ie[le].width,ie[le].height,0,ke,Re,ie[le].data);for(let ge=0;ge<W.length;ge++){const Ie=W[ge].image[le].image;qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,Ie.width,Ie.height,ke,Re,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Ne,Ie.width,Ie.height,0,ke,Re,Ie.data)}}else{qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ke,Re,ie[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ne,ke,Re,ie[le]);for(let ge=0;ge<W.length;ge++){const De=W[ge];qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,ke,Re,De.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Ne,ke,Re,De.image[le])}}}I(D,Le)&&B(t.TEXTURE_CUBE_MAP),be.__version=xe.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function Te(F,D,se,me,xe){const be=o.convert(se.format,se.colorSpace),G=o.convert(se.type),he=z(se.internalFormat,be,G,se.colorSpace);i.get(D).__hasExternalTextures||(xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,he,D.width,D.height,D.depth,0,be,G,null):n.texImage2D(xe,0,he,D.width,D.height,0,be,G,null)),n.bindFramebuffer(t.FRAMEBUFFER,F),lt(D)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0,gt(D)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(F,D,se){if(t.bindRenderbuffer(t.RENDERBUFFER,F),D.depthBuffer&&!D.stencilBuffer){let me=t.DEPTH_COMPONENT16;if(se||lt(D)){const xe=D.depthTexture;xe&&xe.isDepthTexture&&(xe.type===vo?me=t.DEPTH_COMPONENT32F:xe.type===mo&&(me=t.DEPTH_COMPONENT24));const be=gt(D);lt(D)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,me,D.width,D.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,be,me,D.width,D.height)}else t.renderbufferStorage(t.RENDERBUFFER,me,D.width,D.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,F)}else if(D.depthBuffer&&D.stencilBuffer){const me=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):lt(D)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,F)}else{const me=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let xe=0;xe<me.length;xe++){const be=me[xe],G=o.convert(be.format,be.colorSpace),he=o.convert(be.type),ie=z(be.internalFormat,G,he,be.colorSpace),Ce=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ie,D.width,D.height):lt(D)?g.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,ie,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,ie,D.width,D.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ht(F,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,F),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),ne(D.depthTexture,0);const me=i.get(D.depthTexture).__webglTexture,xe=gt(D);if(D.depthTexture.format===yo)lt(D)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(D.depthTexture.format===Vs)lt(D)?g.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ze(F){const D=i.get(F),se=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!D.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ht(D.__webglFramebuffer,F)}else if(se){D.__webglDepthbuffer=[];for(let me=0;me<6;me++)n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer[me]),D.__webglDepthbuffer[me]=t.createRenderbuffer(),Be(D.__webglDepthbuffer[me],F,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=t.createRenderbuffer(),Be(D.__webglDepthbuffer,F,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(F,D,se){const me=i.get(F);D!==void 0&&Te(me.__webglFramebuffer,F,F.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),se!==void 0&&ze(F)}function Ye(F){const D=F.texture,se=i.get(F),me=i.get(D);F.addEventListener("dispose",fe),F.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture()),me.__version=D.version,l.memory.textures++);const xe=F.isWebGLCubeRenderTarget===!0,be=F.isWebGLMultipleRenderTargets===!0,G=L(F)||a;if(xe){se.__webglFramebuffer=[];for(let he=0;he<6;he++)se.__webglFramebuffer[he]=t.createFramebuffer()}else{if(se.__webglFramebuffer=t.createFramebuffer(),be)if(r.drawBuffers){const he=F.texture;for(let ie=0,Ce=he.length;ie<Ce;ie++){const Le=i.get(he[ie]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&lt(F)===!1){const he=be?D:[D];se.__webglMultisampledFramebuffer=t.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ie=0;ie<he.length;ie++){const Ce=he[ie];se.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);const Le=o.convert(Ce.format,Ce.colorSpace),ke=o.convert(Ce.type),Re=z(Ce.internalFormat,Le,ke,Ce.colorSpace,F.isXRRenderTarget===!0),Ne=gt(F);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,Re,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,se.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),F.depthBuffer&&(se.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(se.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,D,G);for(let he=0;he<6;he++)Te(se.__webglFramebuffer[he],F,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he);I(D,G)&&B(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){const he=F.texture;for(let ie=0,Ce=he.length;ie<Ce;ie++){const Le=he[ie],ke=i.get(Le);n.bindTexture(t.TEXTURE_2D,ke.__webglTexture),Ee(t.TEXTURE_2D,Le,G),Te(se.__webglFramebuffer,F,Le,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D),I(Le,G)&&B(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?he=F.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,me.__webglTexture),Ee(he,D,G),Te(se.__webglFramebuffer,F,D,t.COLOR_ATTACHMENT0,he),I(D,G)&&B(he),n.unbindTexture()}F.depthBuffer&&ze(F)}function Tt(F){const D=L(F)||a,se=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let me=0,xe=se.length;me<xe;me++){const be=se[me];if(I(be,D)){const G=F.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(be).__webglTexture;n.bindTexture(G,he),B(G),n.unbindTexture()}}}function Ot(F){if(a&&F.samples>0&&lt(F)===!1){const D=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],se=F.width,me=F.height;let xe=t.COLOR_BUFFER_BIT;const be=[],G=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(F),ie=F.isWebGLMultipleRenderTargets===!0;if(ie)for(let Ce=0;Ce<D.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<D.length;Ce++){be.push(t.COLOR_ATTACHMENT0+Ce),F.depthBuffer&&be.push(G);const Le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Le===!1&&(F.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),F.stencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),ie&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),Le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[G]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[G])),ie){const ke=i.get(D[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,se,me,0,0,se,me,xe,t.NEAREST),y&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,be)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let Ce=0;Ce<D.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const Le=i.get(D[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function gt(F){return Math.min(_,F.samples)}function lt(F){const D=i.get(F);return a&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Mt(F){const D=l.render.frame;b.get(F)!==D&&(b.set(F,D),F.update())}function jt(F,D){const se=F.colorSpace,me=F.format,xe=F.type;return F.isCompressedTexture===!0||F.format===Lh||se!==Vi&&se!==xo&&(se===it?a===!1?e.has("EXT_sRGB")===!0&&me===Ti?(F.format=Lh,F.minFilter=li,F.generateMipmaps=!1):D=jy.sRGBToLinear(D):(me!==Ti||xe!==Ao)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),D}this.allocateTextureUnit=X,this.resetTextureUnits=pe,this.setTexture2D=ne,this.setTexture2DArray=we,this.setTexture3D=ve,this.setTextureCube=oe,this.rebindTextures=Qe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=lt}function oP(t,e,n){const i=n.isWebGL2;function r(o,l=xo){let a;if(o===Ao)return t.UNSIGNED_BYTE;if(o===Zw)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Qw)return t.UNSIGNED_SHORT_5_5_5_1;if(o===qw)return t.BYTE;if(o===$w)return t.SHORT;if(o===Ip)return t.UNSIGNED_SHORT;if(o===Kw)return t.INT;if(o===mo)return t.UNSIGNED_INT;if(o===vo)return t.FLOAT;if(o===cl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Jw)return t.ALPHA;if(o===Ti)return t.RGBA;if(o===e1)return t.LUMINANCE;if(o===t1)return t.LUMINANCE_ALPHA;if(o===yo)return t.DEPTH_COMPONENT;if(o===Vs)return t.DEPTH_STENCIL;if(o===Lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===n1)return t.RED;if(o===i1)return t.RED_INTEGER;if(o===r1)return t.RG;if(o===o1)return t.RG_INTEGER;if(o===s1)return t.RGBA_INTEGER;if(o===ed||o===td||o===nd||o===id)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===ed)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===id)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===ed)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===td)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===nd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===id)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Xv||o===Yv||o===qv||o===$v)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Xv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Yv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===qv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===$v)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===a1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Kv||o===Zv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Kv)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Zv)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Qv||o===Jv||o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===ug||o===cg||o===fg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Qv)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Jv)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===eg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===tg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ng)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ig)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===rg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===og)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===sg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ag)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===lg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ug)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===cg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===fg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===rd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===rd)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===l1||o===dg||o===hg||o===pg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===rd)return a.COMPRESSED_RED_RGTC1_EXT;if(o===dg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===hg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===pg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Rs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class sP extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ou extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aP={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,l=null;const a=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const T of e.hand.values()){const E=n.getJointPose(T,i),p=this._getHandJoint(h,T);E!==null&&(p.matrix.fromArray(E.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=E.radius),p.visible=E!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=m.position.distanceTo(_.position),y=.02,b=.005;h.inputState.pinching&&g>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aP)))}return a!==null&&(a.visible=r!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ou;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class sx extends Wn{constructor(e,n,i,r,o,l,a,d,h,m){if(m=m!==void 0?m:yo,m!==yo&&m!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===yo&&(i=mo),i===void 0&&m===Vs&&(i=Rs),super(null,r,o,l,a,d,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1}}class lP extends Lo{constructor(e,n){super();const i=this;let r=null,o=1,l=null,a="local-floor",d=1,h=null,m=null,_=null,g=null,y=null,b=null;const T=n.getContextAttributes();let E=null,p=null;const w=[],x=[],L=new Set,P=new Map,I=new Fn;I.layers.enable(1),I.viewport=new Dt;const B=new Fn;B.layers.enable(2),B.viewport=new Dt;const z=[I,B],R=new sP;R.layers.enable(1),R.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let q=w[oe];return q===void 0&&(q=new Ad,w[oe]=q),q.getTargetRaySpace()},this.getControllerGrip=function(oe){let q=w[oe];return q===void 0&&(q=new Ad,w[oe]=q),q.getGripSpace()},this.getHand=function(oe){let q=w[oe];return q===void 0&&(q=new Ad,w[oe]=q),q.getHandSpace()};function fe(oe){const q=x.indexOf(oe.inputSource);if(q===-1)return;const Me=w[q];Me!==void 0&&(Me.update(oe.inputSource,oe.frame,h||l),Me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function $(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",te);for(let oe=0;oe<w.length;oe++){const q=x[oe];q!==null&&(x[oe]=null,w[oe].disconnect(q))}N=null,ae=null,e.setRenderTarget(E),y=null,g=null,_=null,r=null,p=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",$),r.addEventListener("inputsourceschange",te),T.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:y}),p=new en(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:Ao,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let q=null,Me=null,Ee=null;T.depth&&(Ee=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=T.stencil?Vs:yo,Me=T.stencil?Rs:mo);const H={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:o};_=new XRWebGLBinding(r,n),g=_.createProjectionLayer(H),r.updateRenderState({layers:[g]}),p=new en(g.textureWidth,g.textureHeight,{format:Ti,type:Ao,depthTexture:new sx(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Ke=e.properties.get(p);Ke.__ignoreDepthValues=g.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(oe){for(let q=0;q<oe.removed.length;q++){const Me=oe.removed[q],Ee=x.indexOf(Me);Ee>=0&&(x[Ee]=null,w[Ee].disconnect(Me))}for(let q=0;q<oe.added.length;q++){const Me=oe.added[q];let Ee=x.indexOf(Me);if(Ee===-1){for(let Ke=0;Ke<w.length;Ke++)if(Ke>=x.length){x.push(Me),Ee=Ke;break}else if(x[Ke]===null){x[Ke]=Me,Ee=Ke;break}if(Ee===-1)break}const H=w[Ee];H&&H.connect(Me)}}const j=new Y,ue=new Y;function pe(oe,q,Me){j.setFromMatrixPosition(q.matrixWorld),ue.setFromMatrixPosition(Me.matrixWorld);const Ee=j.distanceTo(ue),H=q.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,He=H[14]/(H[10]-1),Te=H[14]/(H[10]+1),Be=(H[9]+1)/H[5],ht=(H[9]-1)/H[5],ze=(H[8]-1)/H[0],Qe=(Ke[8]+1)/Ke[0],Ye=He*ze,Tt=He*Qe,Ot=Ee/(-ze+Qe),gt=Ot*-ze;q.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(gt),oe.translateZ(Ot),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const lt=He+Ot,Mt=Te+Ot,jt=Ye-gt,F=Tt+(Ee-gt),D=Be*Te/Mt*lt,se=ht*Te/Mt*lt;oe.projectionMatrix.makePerspective(jt,F,D,se,lt,Mt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function X(oe,q){q===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(q.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;R.near=B.near=I.near=oe.near,R.far=B.far=I.far=oe.far,(N!==R.near||ae!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,ae=R.far);const q=oe.parent,Me=R.cameras;X(R,q);for(let Ee=0;Ee<Me.length;Ee++)X(Me[Ee],q);Me.length===2?pe(R,I,B):R.projectionMatrix.copy(I.projectionMatrix),J(oe,R,q)};function J(oe,q,Me){Me===null?oe.matrix.copy(q.matrixWorld):(oe.matrix.copy(Me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(q.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0);const Ee=oe.children;for(let H=0,Ke=Ee.length;H<Ke;H++)Ee[H].updateMatrixWorld(!0);oe.projectionMatrix.copy(q.projectionMatrix),oe.projectionMatrixInverse.copy(q.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ec*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.getPlanes=function(){return L};let ne=null;function we(oe,q){if(m=q.getViewerPose(h||l),b=q,m!==null){const Me=m.views;y!==null&&(e.setRenderTargetFramebuffer(p,y.framebuffer),e.setRenderTarget(p));let Ee=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,Ee=!0);for(let H=0;H<Me.length;H++){const Ke=Me[H];let He=null;if(y!==null)He=y.getViewport(Ke);else{const Be=_.getViewSubImage(g,Ke);He=Be.viewport,H===0&&(e.setRenderTargetTextures(p,Be.colorTexture,g.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let Te=z[H];Te===void 0&&(Te=new Fn,Te.layers.enable(H),Te.viewport=new Dt,z[H]=Te),Te.matrix.fromArray(Ke.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ke.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(He.x,He.y,He.width,He.height),H===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ee===!0&&R.cameras.push(Te)}}for(let Me=0;Me<w.length;Me++){const Ee=x[Me],H=w[Me];Ee!==null&&H!==void 0&&H.update(Ee,q,h||l)}if(ne&&ne(oe,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let Me=null;for(const Ee of L)q.detectedPlanes.has(Ee)||(Me===null&&(Me=[]),Me.push(Ee));if(Me!==null)for(const Ee of Me)L.delete(Ee),P.delete(Ee),i.dispatchEvent({type:"planeremoved",data:Ee});for(const Ee of q.detectedPlanes)if(!L.has(Ee))L.add(Ee),P.set(Ee,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Ee});else{const H=P.get(Ee);Ee.lastChangedTime>H&&(P.set(Ee,Ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Ee}))}}b=null}const ve=new tx;ve.setAnimationLoop(we),this.setAnimationLoop=function(oe){ne=oe},this.dispose=function(){}}}function uP(t,e){function n(E,p){E.matrixAutoUpdate===!0&&E.updateMatrix(),p.value.copy(E.matrix)}function i(E,p){p.color.getRGB(E.fogColor.value,Qy(t)),p.isFog?(E.fogNear.value=p.near,E.fogFar.value=p.far):p.isFogExp2&&(E.fogDensity.value=p.density)}function r(E,p,w,x,L){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(E,p):p.isMeshToonMaterial?(o(E,p),_(E,p)):p.isMeshPhongMaterial?(o(E,p),m(E,p)):p.isMeshStandardMaterial?(o(E,p),g(E,p),p.isMeshPhysicalMaterial&&y(E,p,L)):p.isMeshMatcapMaterial?(o(E,p),b(E,p)):p.isMeshDepthMaterial?o(E,p):p.isMeshDistanceMaterial?(o(E,p),T(E,p)):p.isMeshNormalMaterial?o(E,p):p.isLineBasicMaterial?(l(E,p),p.isLineDashedMaterial&&a(E,p)):p.isPointsMaterial?d(E,p,w,x):p.isSpriteMaterial?h(E,p):p.isShadowMaterial?(E.color.value.copy(p.color),E.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(E,p){E.opacity.value=p.opacity,p.color&&E.diffuse.value.copy(p.color),p.emissive&&E.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(E.map.value=p.map,n(p.map,E.mapTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap,n(p.alphaMap,E.alphaMapTransform)),p.bumpMap&&(E.bumpMap.value=p.bumpMap,n(p.bumpMap,E.bumpMapTransform),E.bumpScale.value=p.bumpScale,p.side===Dn&&(E.bumpScale.value*=-1)),p.normalMap&&(E.normalMap.value=p.normalMap,n(p.normalMap,E.normalMapTransform),E.normalScale.value.copy(p.normalScale),p.side===Dn&&E.normalScale.value.negate()),p.displacementMap&&(E.displacementMap.value=p.displacementMap,n(p.displacementMap,E.displacementMapTransform),E.displacementScale.value=p.displacementScale,E.displacementBias.value=p.displacementBias),p.emissiveMap&&(E.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,E.emissiveMapTransform)),p.specularMap&&(E.specularMap.value=p.specularMap,n(p.specularMap,E.specularMapTransform)),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(E.envMap.value=w,E.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=p.reflectivity,E.ior.value=p.ior,E.refractionRatio.value=p.refractionRatio),p.lightMap){E.lightMap.value=p.lightMap;const x=t.useLegacyLights===!0?Math.PI:1;E.lightMapIntensity.value=p.lightMapIntensity*x,n(p.lightMap,E.lightMapTransform)}p.aoMap&&(E.aoMap.value=p.aoMap,E.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,E.aoMapTransform))}function l(E,p){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,p.map&&(E.map.value=p.map,n(p.map,E.mapTransform))}function a(E,p){E.dashSize.value=p.dashSize,E.totalSize.value=p.dashSize+p.gapSize,E.scale.value=p.scale}function d(E,p,w,x){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,E.size.value=p.size*w,E.scale.value=x*.5,p.map&&(E.map.value=p.map,n(p.map,E.uvTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest)}function h(E,p){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,E.rotation.value=p.rotation,p.map&&(E.map.value=p.map,n(p.map,E.mapTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest)}function m(E,p){E.specular.value.copy(p.specular),E.shininess.value=Math.max(p.shininess,1e-4)}function _(E,p){p.gradientMap&&(E.gradientMap.value=p.gradientMap)}function g(E,p){E.metalness.value=p.metalness,p.metalnessMap&&(E.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,E.metalnessMapTransform)),E.roughness.value=p.roughness,p.roughnessMap&&(E.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,E.roughnessMapTransform)),e.get(p).envMap&&(E.envMapIntensity.value=p.envMapIntensity)}function y(E,p,w){E.ior.value=p.ior,p.sheen>0&&(E.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),E.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(E.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,E.sheenColorMapTransform)),p.sheenRoughnessMap&&(E.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,E.sheenRoughnessMapTransform))),p.clearcoat>0&&(E.clearcoat.value=p.clearcoat,E.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(E.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,E.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(E.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&E.clearcoatNormalScale.value.negate())),p.iridescence>0&&(E.iridescence.value=p.iridescence,E.iridescenceIOR.value=p.iridescenceIOR,E.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(E.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,E.iridescenceMapTransform)),p.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),p.transmission>0&&(E.transmission.value=p.transmission,E.transmissionSamplerMap.value=w.texture,E.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(E.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,E.transmissionMapTransform)),E.thickness.value=p.thickness,p.thicknessMap&&(E.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=p.attenuationDistance,E.attenuationColor.value.copy(p.attenuationColor)),E.specularIntensity.value=p.specularIntensity,E.specularColor.value.copy(p.specularColor),p.specularColorMap&&(E.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,E.specularColorMapTransform)),p.specularIntensityMap&&(E.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,E.specularIntensityMapTransform))}function b(E,p){p.matcap&&(E.matcap.value=p.matcap)}function T(E,p){const w=e.get(p).light;E.referencePosition.value.setFromMatrixPosition(w.matrixWorld),E.nearDistance.value=w.shadow.camera.near,E.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cP(t,e,n,i){let r={},o={},l=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(w,x){const L=x.program;i.uniformBlockBinding(w,L)}function h(w,x){let L=r[w.id];L===void 0&&(b(w),L=m(w),r[w.id]=L,w.addEventListener("dispose",E));const P=x.program;i.updateUBOMapping(w,P);const I=e.render.frame;o[w.id]!==I&&(g(w),o[w.id]=I)}function m(w){const x=_();w.__bindingPointIndex=x;const L=t.createBuffer(),P=w.__size,I=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,L),t.bufferData(t.UNIFORM_BUFFER,P,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,L),L}function _(){for(let w=0;w<a;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const x=r[w.id],L=w.uniforms,P=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let I=0,B=L.length;I<B;I++){const z=L[I];if(y(z,I,P)===!0){const R=z.__offset,N=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let fe=0;fe<N.length;fe++){const $=N[fe],te=T($);typeof $=="number"?(z.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,R+ae,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=$.elements[0],z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=$.elements[0],z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=$.elements[0]):($.toArray(z.__data,ae),ae+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,z.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(w,x,L){const P=w.value;if(L[x]===void 0){if(typeof P=="number")L[x]=P;else{const I=Array.isArray(P)?P:[P],B=[];for(let z=0;z<I.length;z++)B.push(I[z].clone());L[x]=B}return!0}else if(typeof P=="number"){if(L[x]!==P)return L[x]=P,!0}else{const I=Array.isArray(L[x])?L[x]:[L[x]],B=Array.isArray(P)?P:[P];for(let z=0;z<I.length;z++){const R=I[z];if(R.equals(B[z])===!1)return R.copy(B[z]),!0}}return!1}function b(w){const x=w.uniforms;let L=0;const P=16;let I=0;for(let B=0,z=x.length;B<z;B++){const R=x[B],N={boundary:0,storage:0},ae=Array.isArray(R.value)?R.value:[R.value];for(let fe=0,$=ae.length;fe<$;fe++){const te=ae[fe],j=T(te);N.boundary+=j.boundary,N.storage+=j.storage}if(R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=L,B>0){I=L%P;const fe=P-I;I!==0&&fe-N.boundary<0&&(L+=P-I,R.__offset=L)}L+=N.storage}return I=L%P,I>0&&(L+=P-I),w.__size=L,w.__cache={},this}function T(w){const x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function E(w){const x=w.target;x.removeEventListener("dispose",E);const L=l.indexOf(x.__bindingPointIndex);l.splice(L,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function p(){for(const w in r)t.deleteBuffer(r[w]);l=[],r={},o={}}return{bind:d,update:h,dispose:p}}function fP(){const t=fl("canvas");return t.style.display="block",t}class ax{constructor(e={}){const{canvas:n=fP(),context:i=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=l;let y=null,b=null;const T=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=it,this.useLegacyLights=!0,this.toneMapping=Gi,this.toneMappingExposure=1;const p=this;let w=!1,x=0,L=0,P=null,I=-1,B=null;const z=new Dt,R=new Dt;let N=null,ae=n.width,fe=n.height,$=1,te=null,j=null;const ue=new Dt(0,0,ae,fe),pe=new Dt(0,0,ae,fe);let X=!1;const J=new Op;let ne=!1,we=!1,ve=null;const oe=new Vt,q=new Y,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return P===null?$:1}let H=i;function Ke(O,Q){for(let re=0;re<O.length;re++){const K=O[re],de=n.getContext(K,Q);if(de!==null)return de}return null}try{const O={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dp}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",Je,!1),H===null){const Q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&Q.shift(),H=Ke(Q,O),H===null)throw Ke(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let He,Te,Be,ht,ze,Qe,Ye,Tt,Ot,gt,lt,Mt,jt,F,D,se,me,xe,be,G,he,ie,Ce,Le;function ke(){He=new TC(H),Te=new yC(H,He,e),He.init(Te),ie=new oP(H,He,Te),Be=new iP(H,He,Te),ht=new AC(H),ze=new jA,Qe=new rP(H,He,Be,ze,Te,ie,ht),Ye=new SC(p),Tt=new wC(p),Ot=new B1(H,Te),Ce=new gC(H,He,Ot,Te),gt=new bC(H,Ot,ht,Ce),lt=new LC(H,gt,Ot,ht),be=new DC(H,Te,Qe),se=new xC(ze),Mt=new WA(p,Ye,Tt,He,Te,Ce,se),jt=new uP(p,ze),F=new YA,D=new JA(He,Te),xe=new vC(p,Ye,Tt,Be,lt,g,d),me=new nP(p,lt,Te),Le=new cP(H,ht,Te,Be),G=new _C(H,He,ht,Te),he=new CC(H,He,ht,Te),ht.programs=Mt.programs,p.capabilities=Te,p.extensions=He,p.properties=ze,p.renderLists=F,p.shadowMap=me,p.state=Be,p.info=ht}ke();const Re=new lP(p,H);this.xr=Re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const O=He.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=He.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(O){O!==void 0&&($=O,this.setSize(ae,fe,!1))},this.getSize=function(O){return O.set(ae,fe)},this.setSize=function(O,Q,re=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=O,fe=Q,n.width=Math.floor(O*$),n.height=Math.floor(Q*$),re===!0&&(n.style.width=O+"px",n.style.height=Q+"px"),this.setViewport(0,0,O,Q)},this.getDrawingBufferSize=function(O){return O.set(ae*$,fe*$).floor()},this.setDrawingBufferSize=function(O,Q,re){ae=O,fe=Q,$=re,n.width=Math.floor(O*re),n.height=Math.floor(Q*re),this.setViewport(0,0,O,Q)},this.getCurrentViewport=function(O){return O.copy(z)},this.getViewport=function(O){return O.copy(ue)},this.setViewport=function(O,Q,re,K){O.isVector4?ue.set(O.x,O.y,O.z,O.w):ue.set(O,Q,re,K),Be.viewport(z.copy(ue).multiplyScalar($).floor())},this.getScissor=function(O){return O.copy(pe)},this.setScissor=function(O,Q,re,K){O.isVector4?pe.set(O.x,O.y,O.z,O.w):pe.set(O,Q,re,K),Be.scissor(R.copy(pe).multiplyScalar($).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(O){Be.setScissorTest(X=O)},this.setOpaqueSort=function(O){te=O},this.setTransparentSort=function(O){j=O},this.getClearColor=function(O){return O.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(O=!0,Q=!0,re=!0){let K=0;O&&(K|=H.COLOR_BUFFER_BIT),Q&&(K|=H.DEPTH_BUFFER_BIT),re&&(K|=H.STENCIL_BUFFER_BIT),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",Je,!1),F.dispose(),D.dispose(),ze.dispose(),Ye.dispose(),Tt.dispose(),lt.dispose(),Ce.dispose(),Le.dispose(),Mt.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ie),Re.removeEventListener("sessionend",xt),ve&&(ve.dispose(),ve=null),pt.stop()};function Ne(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const O=ht.autoReset,Q=me.enabled,re=me.autoUpdate,K=me.needsUpdate,de=me.type;ke(),ht.autoReset=O,me.enabled=Q,me.autoUpdate=re,me.needsUpdate=K,me.type=de}function Je(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function At(O){const Q=O.target;Q.removeEventListener("dispose",At),W(Q)}function W(O){le(O),ze.remove(O)}function le(O){const Q=ze.get(O).programs;Q!==void 0&&(Q.forEach(function(re){Mt.releaseProgram(re)}),O.isShaderMaterial&&Mt.releaseShaderCache(O))}this.renderBufferDirect=function(O,Q,re,K,de,Ge){Q===null&&(Q=Me);const We=de.isMesh&&de.matrixWorld.determinant()<0,je=$e(O,Q,re,K,de);Be.setMaterial(K,We);let et=re.index,rt=1;K.wireframe===!0&&(et=gt.getWireframeAttribute(re),rt=2);const nt=re.drawRange,ot=re.attributes.position;let mt=nt.start*rt,sn=(nt.start+nt.count)*rt;Ge!==null&&(mt=Math.max(mt,Ge.start*rt),sn=Math.min(sn,(Ge.start+Ge.count)*rt)),et!==null?(mt=Math.max(mt,0),sn=Math.min(sn,et.count)):ot!=null&&(mt=Math.max(mt,0),sn=Math.min(sn,ot.count));const Tn=sn-mt;if(Tn<0||Tn===1/0)return;Ce.setup(de,K,je,re,et);let Di,Bt=G;if(et!==null&&(Di=Ot.get(et),Bt=he,Bt.setIndex(Di)),de.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*Ee()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(de.isLine){let ut=K.linewidth;ut===void 0&&(ut=1),Be.setLineWidth(ut*Ee()),de.isLineSegments?Bt.setMode(H.LINES):de.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else de.isPoints?Bt.setMode(H.POINTS):de.isSprite&&Bt.setMode(H.TRIANGLES);if(de.isInstancedMesh)Bt.renderInstances(mt,Tn,de.count);else if(re.isInstancedBufferGeometry){const ut=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,dr=Math.min(re.instanceCount,ut);Bt.renderInstances(mt,Tn,dr)}else Bt.render(mt,Tn)},this.compile=function(O,Q){function re(K,de,Ge){K.transparent===!0&&K.side===nr&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,Io(K,de,Ge),K.side=Br,K.needsUpdate=!0,Io(K,de,Ge),K.side=nr):Io(K,de,Ge)}b=D.get(O),b.init(),E.push(b),O.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(p.useLegacyLights),O.traverse(function(K){const de=K.material;if(de)if(Array.isArray(de))for(let Ge=0;Ge<de.length;Ge++){const We=de[Ge];re(We,O,K)}else re(de,O,K)}),E.pop(),b=null};let ge=null;function De(O){ge&&ge(O)}function Ie(){pt.stop()}function xt(){pt.start()}const pt=new tx;pt.setAnimationLoop(De),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(O){ge=O,Re.setAnimationLoop(O),O===null?pt.stop():pt.start()},Re.addEventListener("sessionstart",Ie),Re.addEventListener("sessionend",xt),this.render=function(O,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Q),Q=Re.getCamera()),O.isScene===!0&&O.onBeforeRender(p,O,Q,P),b=D.get(O,E.length),b.init(),E.push(b),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J.setFromProjectionMatrix(oe),we=this.localClippingEnabled,ne=se.init(this.clippingPlanes,we),y=F.get(O,T.length),y.init(),T.push(y),on(O,Q,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(te,j),ne===!0&&se.beginShadows();const re=b.state.shadowsArray;if(me.render(re,O,Q),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(y,O),b.setupLights(p.useLegacyLights),Q.isArrayCamera){const K=Q.cameras;for(let de=0,Ge=K.length;de<Ge;de++){const We=K[de];Xt(y,O,We,We.viewport)}}else Xt(y,O,Q);P!==null&&(Qe.updateMultisampleRenderTarget(P),Qe.updateRenderTargetMipmap(P)),O.isScene===!0&&O.onAfterRender(p,O,Q),Ce.resetDefaultState(),I=-1,B=null,E.pop(),E.length>0?b=E[E.length-1]:b=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function on(O,Q,re,K){if(O.visible===!1)return;if(O.layers.test(Q.layers)){if(O.isGroup)re=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Q);else if(O.isLight)b.pushLight(O),O.castShadow&&b.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||J.intersectsSprite(O)){K&&q.setFromMatrixPosition(O.matrixWorld).applyMatrix4(oe);const We=lt.update(O),je=O.material;je.visible&&y.push(O,We,je,re,q.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||J.intersectsObject(O))){O.isSkinnedMesh&&O.skeleton.frame!==ht.render.frame&&(O.skeleton.update(),O.skeleton.frame=ht.render.frame);const We=lt.update(O),je=O.material;if(K&&(We.boundingSphere===null&&We.computeBoundingSphere(),q.copy(We.boundingSphere.center).applyMatrix4(O.matrixWorld).applyMatrix4(oe)),Array.isArray(je)){const et=We.groups;for(let rt=0,nt=et.length;rt<nt;rt++){const ot=et[rt],mt=je[ot.materialIndex];mt&&mt.visible&&y.push(O,We,mt,re,q.z,ot)}}else je.visible&&y.push(O,We,je,re,q.z,null)}}const Ge=O.children;for(let We=0,je=Ge.length;We<je;We++)on(Ge[We],Q,re,K)}function Xt(O,Q,re,K){const de=O.opaque,Ge=O.transmissive,We=O.transparent;b.setupLightsView(re),ne===!0&&se.setGlobalState(p.clippingPlanes,re),Ge.length>0&&_t(de,Ge,Q,re),K&&Be.viewport(z.copy(K)),de.length>0&&Yt(de,Q,re),Ge.length>0&&Yt(Ge,Q,re),We.length>0&&Yt(We,Q,re),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function _t(O,Q,re,K){if(ve===null){const je=Te.isWebGL2;ve=new en(1024,1024,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?cl:Ao,minFilter:ul,samples:je&&a===!0?4:0})}const de=p.getRenderTarget();p.setRenderTarget(ve),p.clear();const Ge=p.toneMapping;p.toneMapping=Gi,Yt(O,re,K),Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve);let We=!1;for(let je=0,et=Q.length;je<et;je++){const rt=Q[je],nt=rt.object,ot=rt.geometry,mt=rt.material,sn=rt.group;if(mt.side===nr&&nt.layers.test(K.layers)){const Tn=mt.side;mt.side=Dn,mt.needsUpdate=!0,jn(nt,re,K,ot,mt,sn),mt.side=Tn,mt.needsUpdate=!0,We=!0}}We===!0&&(Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve)),p.setRenderTarget(de),p.toneMapping=Ge}function Yt(O,Q,re){const K=Q.isScene===!0?Q.overrideMaterial:null;for(let de=0,Ge=O.length;de<Ge;de++){const We=O[de],je=We.object,et=We.geometry,rt=K===null?We.material:K,nt=We.group;je.layers.test(re.layers)&&jn(je,Q,re,et,rt,nt)}}function jn(O,Q,re,K,de,Ge){O.onBeforeRender(p,Q,re,K,de,Ge),O.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),de.onBeforeRender(p,Q,re,K,O,Ge),de.transparent===!0&&de.side===nr&&de.forceSinglePass===!1?(de.side=Dn,de.needsUpdate=!0,p.renderBufferDirect(re,Q,K,de,O,Ge),de.side=Br,de.needsUpdate=!0,p.renderBufferDirect(re,Q,K,de,O,Ge),de.side=nr):p.renderBufferDirect(re,Q,K,de,O,Ge),O.onAfterRender(p,Q,re,K,de,Ge)}function Io(O,Q,re){Q.isScene!==!0&&(Q=Me);const K=ze.get(O),de=b.state.lights,Ge=b.state.shadowsArray,We=de.state.version,je=Mt.getParameters(O,de.state,Ge,Q,re),et=Mt.getProgramCacheKey(je);let rt=K.programs;K.environment=O.isMeshStandardMaterial?Q.environment:null,K.fog=Q.fog,K.envMap=(O.isMeshStandardMaterial?Tt:Ye).get(O.envMap||K.environment),rt===void 0&&(O.addEventListener("dispose",At),rt=new Map,K.programs=rt);let nt=rt.get(et);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===We)return ti(O,je),nt}else je.uniforms=Mt.getUniforms(O),O.onBuild(re,je,p),O.onBeforeCompile(je,p),nt=Mt.acquireProgram(je,et),rt.set(et,nt),K.uniforms=je.uniforms;const ot=K.uniforms;(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ot.clippingPlanes=se.uniform),ti(O,je),K.needsLights=Yr(O),K.lightsStateVersion=We,K.needsLights&&(ot.ambientLightColor.value=de.state.ambient,ot.lightProbe.value=de.state.probe,ot.directionalLights.value=de.state.directional,ot.directionalLightShadows.value=de.state.directionalShadow,ot.spotLights.value=de.state.spot,ot.spotLightShadows.value=de.state.spotShadow,ot.rectAreaLights.value=de.state.rectArea,ot.ltc_1.value=de.state.rectAreaLTC1,ot.ltc_2.value=de.state.rectAreaLTC2,ot.pointLights.value=de.state.point,ot.pointLightShadows.value=de.state.pointShadow,ot.hemisphereLights.value=de.state.hemi,ot.directionalShadowMap.value=de.state.directionalShadowMap,ot.directionalShadowMatrix.value=de.state.directionalShadowMatrix,ot.spotShadowMap.value=de.state.spotShadowMap,ot.spotLightMatrix.value=de.state.spotLightMatrix,ot.spotLightMap.value=de.state.spotLightMap,ot.pointShadowMap.value=de.state.pointShadowMap,ot.pointShadowMatrix.value=de.state.pointShadowMatrix);const mt=nt.getUniforms(),sn=Ku.seqWithValue(mt.seq,ot);return K.currentProgram=nt,K.uniformsList=sn,nt}function ti(O,Q){const re=ze.get(O);re.outputColorSpace=Q.outputColorSpace,re.instancing=Q.instancing,re.skinning=Q.skinning,re.morphTargets=Q.morphTargets,re.morphNormals=Q.morphNormals,re.morphColors=Q.morphColors,re.morphTargetsCount=Q.morphTargetsCount,re.numClippingPlanes=Q.numClippingPlanes,re.numIntersection=Q.numClipIntersection,re.vertexAlphas=Q.vertexAlphas,re.vertexTangents=Q.vertexTangents,re.toneMapping=Q.toneMapping}function $e(O,Q,re,K,de){Q.isScene!==!0&&(Q=Me),Qe.resetTextureUnits();const Ge=Q.fog,We=K.isMeshStandardMaterial?Q.environment:null,je=P===null?p.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vi,et=(K.isMeshStandardMaterial?Tt:Ye).get(K.envMap||We),rt=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!K.normalMap&&!!re.attributes.tangent,ot=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,sn=!!re.morphAttributes.color,Tn=K.toneMapped?p.toneMapping:Gi,Di=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bt=Di!==void 0?Di.length:0,ut=ze.get(K),dr=b.state.lights;if(ne===!0&&(we===!0||O!==B)){const bn=O===B&&K.id===I;se.setState(K,O,bn)}let qt=!1;K.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==dr.state.version||ut.outputColorSpace!==je||de.isInstancedMesh&&ut.instancing===!1||!de.isInstancedMesh&&ut.instancing===!0||de.isSkinnedMesh&&ut.skinning===!1||!de.isSkinnedMesh&&ut.skinning===!0||ut.envMap!==et||K.fog===!0&&ut.fog!==Ge||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==se.numPlanes||ut.numIntersection!==se.numIntersection)||ut.vertexAlphas!==rt||ut.vertexTangents!==nt||ut.morphTargets!==ot||ut.morphNormals!==mt||ut.morphColors!==sn||ut.toneMapping!==Tn||Te.isWebGL2===!0&&ut.morphTargetsCount!==Bt)&&(qt=!0):(qt=!0,ut.__version=K.version);let ni=ut.currentProgram;qt===!0&&(ni=Io(K,Q,de));let Oo=!1,qr=!1,Zs=!1;const Ht=ni.getUniforms(),Hi=ut.uniforms;if(Be.useProgram(ni.program)&&(Oo=!0,qr=!0,Zs=!0),K.id!==I&&(I=K.id,qr=!0),Oo||B!==O){if(Ht.setValue(H,"projectionMatrix",O.projectionMatrix),Te.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),B!==O&&(B=O,qr=!0,Zs=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const bn=Ht.map.cameraPosition;bn!==void 0&&bn.setValue(H,q.setFromMatrixPosition(O.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",O.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||de.isSkinnedMesh)&&Ht.setValue(H,"viewMatrix",O.matrixWorldInverse)}if(de.isSkinnedMesh){Ht.setOptional(H,de,"bindMatrix"),Ht.setOptional(H,de,"bindMatrixInverse");const bn=de.skeleton;bn&&(Te.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(H,"boneTexture",bn.boneTexture,Qe),Ht.setValue(H,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pi=re.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0&&Te.isWebGL2===!0)&&be.update(de,re,ni),(qr||ut.receiveShadow!==de.receiveShadow)&&(ut.receiveShadow=de.receiveShadow,Ht.setValue(H,"receiveShadow",de.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Hi.envMap.value=et,Hi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),qr&&(Ht.setValue(H,"toneMappingExposure",p.toneMappingExposure),ut.needsLights&&Uo(Hi,Zs),Ge&&K.fog===!0&&jt.refreshFogUniforms(Hi,Ge),jt.refreshMaterialUniforms(Hi,K,$,fe,ve),Ku.upload(H,ut.uniformsList,Hi,Qe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ku.upload(H,ut.uniformsList,Hi,Qe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(H,"center",de.center),Ht.setValue(H,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(H,"normalMatrix",de.normalMatrix),Ht.setValue(H,"modelMatrix",de.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const bn=K.uniformsGroups;for(let Qs=0,Cl=bn.length;Qs<Cl;Qs++)if(Te.isWebGL2){const Al=bn[Qs];Le.update(Al,ni),Le.bind(Al,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Uo(O,Q){O.ambientLightColor.needsUpdate=Q,O.lightProbe.needsUpdate=Q,O.directionalLights.needsUpdate=Q,O.directionalLightShadows.needsUpdate=Q,O.pointLights.needsUpdate=Q,O.pointLightShadows.needsUpdate=Q,O.spotLights.needsUpdate=Q,O.spotLightShadows.needsUpdate=Q,O.rectAreaLights.needsUpdate=Q,O.hemisphereLights.needsUpdate=Q}function Yr(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(O,Q,re){ze.get(O.texture).__webglTexture=Q,ze.get(O.depthTexture).__webglTexture=re;const K=ze.get(O);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=re===void 0,K.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,Q){const re=ze.get(O);re.__webglFramebuffer=Q,re.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(O,Q=0,re=0){P=O,x=Q,L=re;let K=!0,de=null,Ge=!1,We=!1;if(O){const et=ze.get(O);et.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(H.FRAMEBUFFER,null),K=!1):et.__webglFramebuffer===void 0?Qe.setupRenderTarget(O):et.__hasExternalTextures&&Qe.rebindTextures(O,ze.get(O.texture).__webglTexture,ze.get(O.depthTexture).__webglTexture);const rt=O.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(We=!0);const nt=ze.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(de=nt[Q],Ge=!0):Te.isWebGL2&&O.samples>0&&Qe.useMultisampledRTT(O)===!1?de=ze.get(O).__webglMultisampledFramebuffer:de=nt,z.copy(O.viewport),R.copy(O.scissor),N=O.scissorTest}else z.copy(ue).multiplyScalar($).floor(),R.copy(pe).multiplyScalar($).floor(),N=X;if(Be.bindFramebuffer(H.FRAMEBUFFER,de)&&Te.drawBuffers&&K&&Be.drawBuffers(O,de),Be.viewport(z),Be.scissor(R),Be.setScissorTest(N),Ge){const et=ze.get(O.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et.__webglTexture,re)}else if(We){const et=ze.get(O.texture),rt=Q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,et.__webglTexture,re||0,rt)}I=-1},this.readRenderTargetPixels=function(O,Q,re,K,de,Ge,We){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ze.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){Be.bindFramebuffer(H.FRAMEBUFFER,je);try{const et=O.texture,rt=et.format,nt=et.type;if(rt!==Ti&&ie.convert(rt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=nt===cl&&(He.has("EXT_color_buffer_half_float")||Te.isWebGL2&&He.has("EXT_color_buffer_float"));if(nt!==Ao&&ie.convert(nt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===vo&&(Te.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=O.width-K&&re>=0&&re<=O.height-de&&H.readPixels(Q,re,K,de,ie.convert(rt),ie.convert(nt),Ge)}finally{const et=P!==null?ze.get(P).__webglFramebuffer:null;Be.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(O,Q,re=0){const K=Math.pow(2,-re),de=Math.floor(Q.image.width*K),Ge=Math.floor(Q.image.height*K);Qe.setTexture2D(Q,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,O.x,O.y,de,Ge),Be.unbindTexture()},this.copyTextureToTexture=function(O,Q,re,K=0){const de=Q.image.width,Ge=Q.image.height,We=ie.convert(re.format),je=ie.convert(re.type);Qe.setTexture2D(re,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,re.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,re.unpackAlignment),Q.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,O.x,O.y,de,Ge,We,je,Q.image.data):Q.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,O.x,O.y,Q.mipmaps[0].width,Q.mipmaps[0].height,We,Q.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,K,O.x,O.y,We,je,Q.image),K===0&&re.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(O,Q,re,K,de=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=O.max.x-O.min.x+1,We=O.max.y-O.min.y+1,je=O.max.z-O.min.z+1,et=ie.convert(K.format),rt=ie.convert(K.type);let nt;if(K.isData3DTexture)Qe.setTexture3D(K,0),nt=H.TEXTURE_3D;else if(K.isDataArrayTexture)Qe.setTexture2DArray(K,0),nt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const ot=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),sn=H.getParameter(H.UNPACK_SKIP_PIXELS),Tn=H.getParameter(H.UNPACK_SKIP_ROWS),Di=H.getParameter(H.UNPACK_SKIP_IMAGES),Bt=re.isCompressedTexture?re.mipmaps[0]:re.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,O.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,O.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,O.min.z),re.isDataTexture||re.isData3DTexture?H.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ge,We,je,et,rt,Bt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(nt,de,Q.x,Q.y,Q.z,Ge,We,je,et,Bt.data)):H.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ge,We,je,et,rt,Bt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ot),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,sn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Di),de===0&&K.generateMipmaps&&H.generateMipmap(nt),Be.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?Qe.setTextureCube(O,0):O.isData3DTexture?Qe.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Qe.setTexture2DArray(O,0):Qe.setTexture2D(O,0),Be.unbindTexture()},this.resetState=function(){x=0,L=0,P=null,Be.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?sr:Vy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?it:Vi}}class dP extends ax{}dP.prototype.isWebGL1Renderer=!0;class lx extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ls extends Ai{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Fp extends Ri{constructor(e=1,n=1,i=1,r=32,o=1,l=!1,a=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:a,thetaLength:d};const h=this;r=Math.floor(r),o=Math.floor(o);const m=[],_=[],g=[],y=[];let b=0;const T=[],E=i/2;let p=0;w(),l===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(m),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(y,2));function w(){const L=new Y,P=new Y;let I=0;const B=(n-e)/i;for(let z=0;z<=o;z++){const R=[],N=z/o,ae=N*(n-e)+e;for(let fe=0;fe<=r;fe++){const $=fe/r,te=$*d+a,j=Math.sin(te),ue=Math.cos(te);P.x=ae*j,P.y=-N*i+E,P.z=ae*ue,_.push(P.x,P.y,P.z),L.set(j,B,ue).normalize(),g.push(L.x,L.y,L.z),y.push($,1-N),R.push(b++)}T.push(R)}for(let z=0;z<r;z++)for(let R=0;R<o;R++){const N=T[R][z],ae=T[R+1][z],fe=T[R+1][z+1],$=T[R][z+1];m.push(N,ae,$),m.push(ae,fe,$),I+=6}h.addGroup(p,I,0),p+=I}function x(L){const P=b,I=new Oe,B=new Y;let z=0;const R=L===!0?e:n,N=L===!0?1:-1;for(let fe=1;fe<=r;fe++)_.push(0,E*N,0),g.push(0,N,0),y.push(.5,.5),b++;const ae=b;for(let fe=0;fe<=r;fe++){const te=fe/r*d+a,j=Math.cos(te),ue=Math.sin(te);B.x=R*ue,B.y=E*N,B.z=R*j,_.push(B.x,B.y,B.z),g.push(0,N,0),I.x=j*.5+.5,I.y=ue*.5*N+.5,y.push(I.x,I.y),b++}for(let fe=0;fe<r;fe++){const $=P+fe,te=ae+fe;L===!0?m.push(te,te+1,$):m.push(te+1,te,$),z+=3}h.addGroup(p,z,L===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qc extends Ri{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const d=Math.min(l+a,Math.PI);let h=0;const m=[],_=new Y,g=new Y,y=[],b=[],T=[],E=[];for(let p=0;p<=i;p++){const w=[],x=p/i;let L=0;p===0&&l===0?L=.5/n:p===i&&d===Math.PI&&(L=-.5/n);for(let P=0;P<=n;P++){const I=P/n;_.x=-e*Math.cos(r+I*o)*Math.sin(l+x*a),_.y=e*Math.cos(l+x*a),_.z=e*Math.sin(r+I*o)*Math.sin(l+x*a),b.push(_.x,_.y,_.z),g.copy(_).normalize(),T.push(g.x,g.y,g.z),E.push(I+L,1-x),w.push(h++)}m.push(w)}for(let p=0;p<i;p++)for(let w=0;w<n;w++){const x=m[p][w+1],L=m[p][w],P=m[p+1][w],I=m[p+1][w+1];(p!==0||l>0)&&y.push(x,L,I),(p!==i-1||d<Math.PI)&&y.push(L,P,I)}this.setIndex(y),this.setAttribute("position",new Ln(b,3)),this.setAttribute("normal",new Ln(T,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hP extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t0 extends hP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ss extends jr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ux extends jr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class pP extends jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const n0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class mP{constructor(e,n,i){const r=this;let o=!1,l=0,a=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(m){a++,o===!1&&r.onStart!==void 0&&r.onStart(m,l,a),o=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,a),l===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,_){return h.push(m,_),this},this.removeHandler=function(m){const _=h.indexOf(m);return _!==-1&&h.splice(_,2),this},this.getHandler=function(m){for(let _=0,g=h.length;_<g;_+=2){const y=h[_],b=h[_+1];if(y.global&&(y.lastIndex=0),y.test(m))return b}return null}}}const vP=new mP;class cx{constructor(e){this.manager=e!==void 0?e:vP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class gP extends cx{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=n0.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(l),o.manager.itemEnd(e)},0),l;const a=fl("img");function d(){m(),n0.add(e,this),n&&n(this),o.manager.itemEnd(e)}function h(_){m(),r&&r(_),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){a.removeEventListener("load",d,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",d,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class _P extends cx{constructor(e){super(e)}load(e,n,i,r){const o=new Wn,l=new gP(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class bl extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class yP extends bl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Pd=new Vt,i0=new Y,r0=new Y;class kp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Op,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;i0.setFromMatrixPosition(e.matrixWorld),n.position.copy(i0),r0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(r0),n.updateMatrixWorld(),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xP extends kp{constructor(){super(new Fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Ec*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rd extends bl{constructor(e,n,i=0,r=Math.PI/3,o=0,l=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new xP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const o0=new Vt,ba=new Y,Dd=new Y;class SP extends kp{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),Dd.copy(i.position),Dd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Dd),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),o0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o0)}}class as extends bl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new SP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class MP extends kp{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class EP extends bl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new MP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ca extends bl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class fx extends Ri{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class wP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=s0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=s0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function s0(){return(typeof performance>"u"?Date:performance).now()}class a0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(En(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);const l0={type:"change"},Ld={type:"start"},u0={type:"end"};class TP extends Lo{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ho.ROTATE,MIDDLE:Ho.DOLLY,RIGHT:Ho.PAN},this.touches={ONE:Wo.ROTATE,TWO:Wo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Mt),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(l0),i.update(),o=r.NONE},this.update=function(){const G=new Y,he=new Po().setFromUnitVectors(e.up,new Y(0,1,0)),ie=he.clone().invert(),Ce=new Y,Le=new Po,ke=2*Math.PI;return function(){const Ne=i.object.position;G.copy(Ne).sub(i.target),G.applyQuaternion(he),a.setFromVector3(G),i.autoRotate&&o===r.NONE&&R(B()),i.enableDamping?(a.theta+=d.theta*i.dampingFactor,a.phi+=d.phi*i.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let qe=i.minAzimuthAngle,Je=i.maxAzimuthAngle;return isFinite(qe)&&isFinite(Je)&&(qe<-Math.PI?qe+=ke:qe>Math.PI&&(qe-=ke),Je<-Math.PI?Je+=ke:Je>Math.PI&&(Je-=ke),qe<=Je?a.theta=Math.max(qe,Math.min(Je,a.theta)):a.theta=a.theta>(qe+Je)/2?Math.max(qe,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),G.setFromSpherical(a),G.applyQuaternion(ie),Ne.copy(i.target).add(G),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),m.set(0,0,0)),h=1,_||Ce.distanceToSquared(i.object.position)>l||8*(1-Le.dot(i.object.quaternion))>l?(i.dispatchEvent(l0),Ce.copy(i.object.position),Le.copy(i.object.quaternion),_=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",D),i.domElement.removeEventListener("pointerdown",Qe),i.domElement.removeEventListener("pointercancel",Tt),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Mt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,a=new a0,d=new a0;let h=1;const m=new Y;let _=!1;const g=new Oe,y=new Oe,b=new Oe,T=new Oe,E=new Oe,p=new Oe,w=new Oe,x=new Oe,L=new Oe,P=[],I={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function z(){return Math.pow(.95,i.zoomSpeed)}function R(G){d.theta-=G}function N(G){d.phi-=G}const ae=function(){const G=new Y;return function(ie,Ce){G.setFromMatrixColumn(Ce,0),G.multiplyScalar(-ie),m.add(G)}}(),fe=function(){const G=new Y;return function(ie,Ce){i.screenSpacePanning===!0?G.setFromMatrixColumn(Ce,1):(G.setFromMatrixColumn(Ce,0),G.crossVectors(i.object.up,G)),G.multiplyScalar(ie),m.add(G)}}(),$=function(){const G=new Y;return function(ie,Ce){const Le=i.domElement;if(i.object.isPerspectiveCamera){const ke=i.object.position;G.copy(ke).sub(i.target);let Re=G.length();Re*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*ie*Re/Le.clientHeight,i.object.matrix),fe(2*Ce*Re/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(ie*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),fe(Ce*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(G){i.object.isPerspectiveCamera?h/=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*G)),i.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(G){i.object.isPerspectiveCamera?h*=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/G)),i.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(G){g.set(G.clientX,G.clientY)}function pe(G){w.set(G.clientX,G.clientY)}function X(G){T.set(G.clientX,G.clientY)}function J(G){y.set(G.clientX,G.clientY),b.subVectors(y,g).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*b.x/he.clientHeight),N(2*Math.PI*b.y/he.clientHeight),g.copy(y),i.update()}function ne(G){x.set(G.clientX,G.clientY),L.subVectors(x,w),L.y>0?te(z()):L.y<0&&j(z()),w.copy(x),i.update()}function we(G){E.set(G.clientX,G.clientY),p.subVectors(E,T).multiplyScalar(i.panSpeed),$(p.x,p.y),T.copy(E),i.update()}function ve(G){G.deltaY<0?j(z()):G.deltaY>0&&te(z()),i.update()}function oe(G){let he=!1;switch(G.code){case i.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),he=!0;break}he&&(G.preventDefault(),i.update())}function q(){if(P.length===1)g.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);g.set(G,he)}}function Me(){if(P.length===1)T.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);T.set(G,he)}}function Ee(){const G=P[0].pageX-P[1].pageX,he=P[0].pageY-P[1].pageY,ie=Math.sqrt(G*G+he*he);w.set(0,ie)}function H(){i.enableZoom&&Ee(),i.enablePan&&Me()}function Ke(){i.enableZoom&&Ee(),i.enableRotate&&q()}function He(G){if(P.length==1)y.set(G.pageX,G.pageY);else{const ie=be(G),Ce=.5*(G.pageX+ie.x),Le=.5*(G.pageY+ie.y);y.set(Ce,Le)}b.subVectors(y,g).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*b.x/he.clientHeight),N(2*Math.PI*b.y/he.clientHeight),g.copy(y)}function Te(G){if(P.length===1)E.set(G.pageX,G.pageY);else{const he=be(G),ie=.5*(G.pageX+he.x),Ce=.5*(G.pageY+he.y);E.set(ie,Ce)}p.subVectors(E,T).multiplyScalar(i.panSpeed),$(p.x,p.y),T.copy(E)}function Be(G){const he=be(G),ie=G.pageX-he.x,Ce=G.pageY-he.y,Le=Math.sqrt(ie*ie+Ce*Ce);x.set(0,Le),L.set(0,Math.pow(x.y/w.y,i.zoomSpeed)),te(L.y),w.copy(x)}function ht(G){i.enableZoom&&Be(G),i.enablePan&&Te(G)}function ze(G){i.enableZoom&&Be(G),i.enableRotate&&He(G)}function Qe(G){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(G.pointerId),i.domElement.addEventListener("pointermove",Ye),i.domElement.addEventListener("pointerup",Tt)),se(G),G.pointerType==="touch"?jt(G):Ot(G))}function Ye(G){i.enabled!==!1&&(G.pointerType==="touch"?F(G):gt(G))}function Tt(G){me(G),P.length===0&&(i.domElement.releasePointerCapture(G.pointerId),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt)),i.dispatchEvent(u0),o=r.NONE}function Ot(G){let he;switch(G.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Ho.DOLLY:if(i.enableZoom===!1)return;pe(G),o=r.DOLLY;break;case Ho.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enablePan===!1)return;X(G),o=r.PAN}else{if(i.enableRotate===!1)return;ue(G),o=r.ROTATE}break;case Ho.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enableRotate===!1)return;ue(G),o=r.ROTATE}else{if(i.enablePan===!1)return;X(G),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Ld)}function gt(G){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;J(G);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(G);break;case r.PAN:if(i.enablePan===!1)return;we(G);break}}function lt(G){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(G.preventDefault(),i.dispatchEvent(Ld),ve(G),i.dispatchEvent(u0))}function Mt(G){i.enabled===!1||i.enablePan===!1||oe(G)}function jt(G){switch(xe(G),P.length){case 1:switch(i.touches.ONE){case Wo.ROTATE:if(i.enableRotate===!1)return;q(),o=r.TOUCH_ROTATE;break;case Wo.PAN:if(i.enablePan===!1)return;Me(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Wo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(),o=r.TOUCH_DOLLY_PAN;break;case Wo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Ld)}function F(G){switch(xe(G),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;He(G),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(G),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ht(G),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ze(G),i.update();break;default:o=r.NONE}}function D(G){i.enabled!==!1&&G.preventDefault()}function se(G){P.push(G)}function me(G){delete I[G.pointerId];for(let he=0;he<P.length;he++)if(P[he].pointerId==G.pointerId){P.splice(he,1);return}}function xe(G){let he=I[G.pointerId];he===void 0&&(he=new Oe,I[G.pointerId]=he),he.set(G.pageX,G.pageY)}function be(G){const he=G.pointerId===P[0].pointerId?P[1]:P[0];return I[he.pointerId]}i.domElement.addEventListener("contextmenu",D),i.domElement.addEventListener("pointerdown",Qe),i.domElement.addEventListener("pointercancel",Tt),i.domElement.addEventListener("wheel",lt,{passive:!1}),this.update()}}class Xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bP=new Xc(-1,1,1,-1,0,1),zp=new Ri;zp.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3));zp.setAttribute("uv",new Ln([0,2,0,0,2,0],2));class $c{constructor(e){this._mesh=new Bn(zp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bP)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const CP={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class AP extends Xr{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,o=i.aspect!==void 0?i.aspect:n.aspect,l=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new en(1,1,{minFilter:Qt,magFilter:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Gr,this.materialDepth.depthPacking=xl,this.materialDepth.blending=un;const d=CP,h=kn.clone(d.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=r,h.aspect.value=o,h.aperture.value=l,h.maxblur.value=a,h.nearClip.value=n.near,h.farClip.value=n.far,this.materialBokeh=new Lt({defines:Object.assign({},d.defines),uniforms:h,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new $c(this.materialBokeh),this._oldClearColor=new Ze}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,n){this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Ha={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Uh extends Xr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kn.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $c(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class c0 extends Xr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class PP extends Xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class RP{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Oe);this._width=i.width,this._height=i.height,n=new en(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uh(Ha),this.clock=new wP}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const a=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}c0!==void 0&&(l instanceof c0?i=!0:l instanceof PP&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class DP extends Xr{constructor(e,n,i,r,o){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Nu={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Oe(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Vt},cameraInverseProjectionMatrix:{value:new Vt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},Mr={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Oe(512,512)},sampleUvOffsets:{value:[new Oe(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},wc={createSampleWeights:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(LP(i,e));return n},createSampleOffsets:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(e.clone().multiplyScalar(i));return n},configure:function(t,e,n,i){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=wc.createSampleOffsets(e,i),t.uniforms.sampleWeights.value=wc.createSampleWeights(e,n),t.needsUpdate=!0}};function LP(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Id={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class Oh extends Xr{constructor(e,n,i=!1,r=!1,o=new Oe(256,256)){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Ze,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Oe(o.x,o.y),this.saoRenderTarget=new en(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new en(this.resolution.x,this.resolution.y,{minFilter:Qt,magFilter:Qt}),this.depthRenderTarget=this.normalRenderTarget.clone();let l;this.supportsDepthTextureExtension&&(l=new sx,l.type=Ip,this.beautyRenderTarget.depthTexture=l,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new Gr,this.depthMaterial.depthPacking=xl,this.depthMaterial.blending=un,this.normalMaterial=new ux,this.normalMaterial.blending=un,this.saoMaterial=new Lt({defines:Object.assign({},Nu.defines),fragmentShader:Nu.fragmentShader,vertexShader:Nu.vertexShader,uniforms:kn.clone(Nu.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=un,this.vBlurMaterial=new Lt({uniforms:kn.clone(Mr.uniforms),defines:Object.assign({},Mr.defines),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=un,this.hBlurMaterial=new Lt({uniforms:kn.clone(Mr.uniforms),defines:Object.assign({},Mr.defines),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=un,this.materialCopy=new Lt({uniforms:kn.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,blending:un}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Sc,this.materialCopy.blendSrc=zy,this.materialCopy.blendDst=Ah,this.materialCopy.blendEquation=Cr,this.materialCopy.blendSrcAlpha=ky,this.materialCopy.blendDstAlpha=Ah,this.materialCopy.blendEquationAlpha=Cr,this.depthCopy=new Lt({uniforms:kn.clone(Id.uniforms),vertexShader:Id.vertexShader,fragmentShader:Id.fragmentShader,blending:un}),this.fsQuad=new $c(null)}render(e,n,i){if(this.renderToScreen&&(this.materialCopy.blending=un,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(wc.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Oe(0,1)),wc.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Oe(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let l=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,l=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?l.blending=Sc:l.blending=un,this.renderPass(e,l,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}renderOverride(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,o=n.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}setSize(e,n){this.beautyRenderTarget.setSize(e,n),this.saoRenderTarget.setSize(e,n),this.blurIntermediateRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.depthRenderTarget.setSize(e,n),this.saoMaterial.uniforms.size.value.set(e,n),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,n),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,n),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}Oh.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const IP={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ws extends Xr{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new en(o,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const g=new en(o,l);g.texture.name="UnrealBloomPass.h"+_,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const y=new en(o,l);y.texture.name="UnrealBloomPass.v"+_,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),o=Math.round(o/2),l=Math.round(l/2)}const a=IP;this.highPassUniforms=kn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[_])),this.separableBlurMaterials[_].uniforms.texSize.value=new Oe(o,l),o=Math.round(o/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=Ha;this.copyUniforms=kn.clone(m.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:Ch,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new So,this.fsQuad=new $c(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Oe(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[d].uniforms.direction.value=Ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ws.BlurDirectionX=new Oe(1,0);Ws.BlurDirectionY=new Oe(0,1);const UP={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},OP={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe}},vertexShader:`

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

		}`},NP=Math.PI/180;function FP(t){return t*NP}const dx=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],kP=["knuthbendix","toddcoxeter"],Oi=new Ze,Bp=new _P,$s=Bp.load("Carbon.png");$s.encoding=sr;$s.wrapS=Co;$s.wrapT=Co;$s.repeat.x=10;$s.repeat.y=10;const Gp=Bp.load("Carbon_Normal.png");Gp.wrapS=Co;Gp.wrapT=Co;const Wa=Bp.load("ocean.jpg");Wa.encoding=sr;Wa.mapping=Mc;const Ks={neon:{background:0,fx:["bloom"],shadow:!1,material:new So,lights:[],color:({word:t})=>Oi.setHSL(t.length*.17%1,.5,.5)},museum:{background:12303291,env:Wa,shadow:!0,ground:"plane",material:new t0({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:$s,normalMap:Gp}),lights:[(()=>{const t=new Rd(16777215,.2);return t.position.set(0,4,-6),t})(),(()=>{const t=new Rd(16777215,.2);return t.position.set(8,7,0),t})(),(()=>{const t=new Rd(16777215,.2);return t.position.set(-4,6,2),t})(),new Ca(16777215,.4)],cameraLights:[(()=>{const t=new as(16777215,2.5,5,5);return t.shadow=null,t})()],color:()=>Oi.set(16777215)},projection:{background:16777215,ground:"sphere",shadow:!0,material:new Ss({transparent:!0,opacity:.75,blending:Sc}),lights:[new as],color:({word:t})=>Oi.setHSL(t.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new Ss,lights:[new Ca(13421772,.4)],cameraLights:[new as(16777215,1)],color:()=>Oi.set(16776960)},colorful:{background:16777215,shadow:!1,material:new Ss,lights:[new Ca(16777215,1)],cameraLights:[new as(16777215,.5)],color:({word:t})=>Oi.setHSL(t.length*.03%1,.5,.5)},bokeh:{background:16777215,fx:["bokeh"],shadow:!1,material:new Ss,lights:[new Ca(16777215,.5)],cameraLights:[new as(16777215,1)],color:({word:t})=>Oi.setHSL(t.length*.17%1,.7,.5)},pure:{background:16777215,fx:["sao"],shadow:!1,material:new pP,lights:[new Ca(0,.5)],cameraLights:[new as(16777215,1)],color:({word:t})=>Oi.setHSL(t.length*.03%1,.75,.7)},transcendent:{background:16777215,fx:["godray"],shadow:!1,material:new So,color:()=>Oi.set(0)},glass:{background:Wa,env:Wa,shadow:!1,material:new t0({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new EP,new yP],color:()=>Oi.set(11184810)},wireframe:{background:0,shadow:!1,material:new So({wireframe:!0}),lights:[],color:({word:t})=>Oi.setHSL(t.length*.17%1,.5,.5)}},Tc={dimensions:4,coxeter:[[-1,5,2,2],[5,-1,3,2],[2,3,-1,4],[2,2,4,-1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],mirrors:[1,0,0,0],extended:!1,stellated:!1,order:10,segments:32,curve:!0,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,grouper:"knuthbendix",projection:"stereographic",controls:"orbit",controlsShift:0,ambiance:"neon",fov3:90,fov4:90,msaa:window.devicePixelRatio<=1,msaaSamples:8},hx=t=>{const e={...t};return Object.entries(e).map(([n,i])=>{typeof Tc[n]=="number"?(i===""||isNaN(i))&&delete e[n]:Array.isArray(Tc[n])&&(Array.isArray(i[0])?i.find(r=>r.find(o=>i===""||isNaN(o)))&&delete e[n]:i.find(r=>i===""||isNaN(r))&&delete e[n])}),e},zP={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},BP={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new Y}},vertexShader:`

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

		}`},GP={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},VP={uniforms:{vSunPositionScreenSpace:{value:new Y},fAspect:{value:1},sunColor:{value:new Ze(16772608)},bgColor:{value:new Ze(0)}},vertexShader:`

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

		}`};class HP extends Xr{constructor(e,n,i={}){super(),this.scene=e,this.camera=n,this.orthoScene=new lx,this.orthoCamera=new Xc(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new Dt,this.sunPosition=i.sunPosition||new Y(0,1e3,1e3),this.screenSpacePosition=new Y,this.rtTextureDepth=new en(1,1),this.rtTextureDepthMask=new en(1,1),this.rtTextureGodRays1=new en(1,1),this.rtTextureGodRays2=new en(1,1),this.materialDepth=new Gr;const r=zP;this.godrayMaskUniforms=kn.clone(r.uniforms),this.materialGodraysDepthMask=new Lt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=BP;this.godrayGenUniforms=kn.clone(o.uniforms),this.materialGodraysGenerate=new Lt({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const l=GP;this.godrayCombineUniforms=kn.clone(l.uniforms),this.materialGodraysCombine=new Lt({uniforms:this.godrayCombineUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader});const a=VP;this.godraysFakeSunUniforms=kn.clone(a.uniforms),this.materialGodraysFakeSun=new Lt({uniforms:this.godraysFakeSunUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Bn(new Tl(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,n,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=n,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,n,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(n),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,n){this.rtTextureDepth.setSize(e,n),this.rtTextureDepthMask.setSize(e,n);const i=e*this.multiplier,r=n*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var px=`/* BEGIN HEADER */
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
#elif DIMENSIONS == 3
attribute vec3 instancePosition;
attribute vec3 instanceTarget;
#elif DIMENSIONS == 4
attribute vec4 instancePosition;
attribute vec4 instanceTarget;
#elif DIMENSIONS >= 5
attribute mat3 instancePosition;
attribute mat3 instanceTarget;

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
  #elif DIMENSIONS == 3
  vec3 pos;
  #elif DIMENSIONS == 4
  vec4 pos;
  #elif DIMENSIONS == 5
  vec5 pos;
  vec5 instancePosition = fromMat(instancePosition);
  vec5 instanceTarget = fromMat(instanceTarget);
  #elif DIMENSIONS == 6
  vec6 pos;
  vec6 instancePosition = fromMat(instancePosition);
  vec6 instanceTarget = fromMat(instanceTarget);
  #elif DIMENSIONS == 7
  vec7 pos;
  vec7 instancePosition = fromMat(instancePosition);
  vec7 instanceTarget = fromMat(instanceTarget);
  #elif DIMENSIONS == 8
  vec8 pos;
  vec8 instancePosition = fromMat(instancePosition);
  vec8 instanceTarget = fromMat(instanceTarget);
  #elif DIMENSIONS == 9
  vec9 pos;
  vec9 instancePosition = fromMat(instancePosition);
  vec9 instanceTarget = fromMat(instanceTarget);
  #endif

  vec3 norm;
  float sizeFactor;

  if(!nan(instanceTarget)) {
    #if DIMENSIONS == 2
    vec2 next;
    #elif DIMENSIONS == 3
    vec3 next;
    #elif DIMENSIONS == 4
    vec4 next;
    #elif DIMENSIONS == 5
    vec5 next;
    #elif DIMENSIONS == 6
    vec6 next;
    #elif DIMENSIONS == 7
    vec7 next;
    #elif DIMENSIONS == 8
    vec8 next;
    #elif DIMENSIONS == 9
    vec9 next;
    #endif

    float vid = float(gl_VertexID);
    float h = floor(vid / (radial + 1.)) / (segments);
    float r = mod(vid, radial + 1.) / (radial);

    pos = mix(instancePosition, instanceTarget, h);
    next = mix(instancePosition, instanceTarget, h + EPS);

  
  

  
  

  
  
  
  
  
  

  
    pos = xnormalize(pos);
    next = xnormalize(next);

    vec3 p = xproject(pos);
    vec3 n = xproject(next) + NOISE; 
    vec3 k = normalize(p - n); 

    
    
    vec3 v = normalize(cross(n, p));
    norm = v * cos(r * TAU) + cross(k, v) * sin(r * TAU);
    norm = normalize(norm);
    sizeFactor = .001 * edgeThickness;
  } else {
    pos = instancePosition;
    norm = normal;
    sizeFactor = .001 * vertexThickness;
  }
  
  vec3 transformed = xproject(pos);
  transformed += sizeFactor * norm / len(pos);

  
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}`,WP=`/* BEGIN INCLUDE */

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

#if DIMENSIONS == 5
vec5 mix(in vec5 a, in vec5 b, in float t) {
  return vec5(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
#elif DIMENSIONS == 6
vec6 mix(in vec6 a, in vec6 b, in float t) {
  return vec6(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
#elif DIMENSIONS == 7
vec7 mix(in vec7 a, in vec7 b, in float t) {
  return vec7(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
#elif DIMENSIONS == 8
vec8 mix(in vec8 a, in vec8 b, in float t) {
  return vec8(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
#elif DIMENSIONS == 9
vec9 mix(in vec9 a, in vec9 b, in float t) {
  return vec9(mix(a.v, b.v, t), mix(a.u, b.u, t), mix(a.t, b.t, t));
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
/* END INCLUDE */`;const jP=px.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],f0=px.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],XP=WP.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],ui=(t,e)=>{t=t.clone(),t.vertexColors=![Gr,Lt,ux,dl].find(n=>t instanceof n),t._rt=e,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let n=4;n<=e.dimensions;n++)t.uniforms[`fov${n}`]={value:90};return t.onBeforeCompile=n=>{const{dimensions:i,projection:r}=t._rt,o=[`#define DIMENSIONS ${i}`,`#define PROJECTION ${dx.indexOf(r)}`];console.log(r),Object.assign(n.uniforms,t.uniforms),t instanceof So?n.vertexShader=n.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof Gr||t instanceof dl?n.vertexShader=n.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof Lt&&(n.vertexShader=n.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",f0+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),n.vertexShader=[...o,jP,XP,n.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",f0)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}`,t},YP=()=>{const t=new ax;t.autoClear=!1,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const e=new Fn(90,window.innerWidth/window.innerHeight,.01,100);e.position.set(0,0,-1),e.up.set(0,1,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const n=new lx;e.updateProjectionMatrix(),n.add(e);const i=new TP(e,t.domElement);i.target.set(0,0,0),i.minDistance=0,i.maxDistance=100,i.addEventListener("change",()=>r.render()),i.update(),i.enabled=!1,t.domElement.addEventListener("dblclick",()=>{i.position0.set(0,0,i.position0.z===-1?-.25:-1,0,0),i.reset()});const r=new RP(t);r.setPixelRatio(window.devicePixelRatio);const o=new DP(n,e);return r.addPass(o),{composer:r,camera:e,scene:n,orbitControls:i}},d0=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=Ks[t.ambiance],{dimensions:i}=t,r=new qc(1,32,32),o=new fx().copy(r),l=i>4?9:i;o.setAttribute("instancePosition",new Ls(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceTarget",new Ls(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceColor",new Ls(new Float32Array(t.maxVertices*3),3));const a=new Bn(o,ui(n.material,t));o.attributes.instanceTarget.array.fill(NaN),a.geometry.instanceCount=0,a.frustumCulled=!1,a.customDepthMaterial=ui(new Gr({depthPacking:xl}),t),a.customDistanceMaterial=ui(new dl,t),a.castShadow=n.shadow,a.name="instanced-vertex",a.visible=t.showVertices,t.scene.add(a)},h0=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=Ks[t.ambiance],{dimensions:i,curve:r,segments:o}=t,l=new Fp(1,1,1,8,r?o:1,!0),a=new fx().copy(l),d=i>4?9:i;a.setAttribute("instancePosition",new Ls(new Float32Array(t.maxEdges*d),d)),a.setAttribute("instanceTarget",new Ls(new Float32Array(t.maxEdges*d),d)),a.setAttribute("instanceColor",new Ls(new Float32Array(t.maxEdges*3),3));const h=new Bn(a,ui(n.material,t));h.geometry.instanceCount=0,h.frustumCulled=!1,h.customDepthMaterial=ui(new Gr({depthPacking:xl}),t),h.customDistanceMaterial=ui(new dl,t),h.castShadow=n.shadow,h.name="instanced-edge",h.visible=t.showEdges,t.scene.add(h)},qP=(t,e=null)=>{const n=Ks[t.ambiance],i=t.scene.getObjectByName("instanced-vertex"),{dimensions:r}=t;let o=e?e[0]:0,l=e?e[1]:t.vertices.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=t.vertices[d],m=i.geometry.attributes.instancePosition.array;for(let y=0;y<r;y++)m[d*a+y]=h.vertex[y];const _=i.geometry.attributes.instanceColor.array,g=n.color(h,"vertex");_[d*3+0]=g.r,_[d*3+1]=g.g,_[d*3+2]=g.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},$P=(t,e=null)=>{const n=Ks[t.ambiance],i=t.scene.getObjectByName("instanced-edge"),{dimensions:r}=t;let o=e?e[0]:0,l=e?e[1]:t.edges.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=t.edges[d],m=i.geometry.attributes.instancePosition.array;for(let b=0;b<r;b++)m[d*a+b]=h.start[b];const _=i.geometry.attributes.instanceTarget.array;for(let b=0;b<r;b++)_[d*a+b]=h.end[b];const g=i.geometry.attributes.instanceColor.array,y=n.color(h,"edge");g[d*3+0]=y.r,g[d*3+1]=y.g,g[d*3+2]=y.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},p0=(t,e)=>{const n=t.scene.getObjectByName(`instanced-${e}`);n.visible=t[e==="vertex"?"showVertices":"showEdges"]},Ms=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const n=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]]};t.scene.getObjectByName("instanced-vertex").visible&&qP(t,n.vertices),t.scene.getObjectByName("instanced-edge").visible&&$P(t,n.edges),t.composer.render(),document.title=`Honeyball^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges`},KP=(t,e,n)=>{e.fov=n,e.updateProjectionMatrix(),t.render()},ZP=(t,e,n)=>{const i=t.renderer.getDrawingBufferSize(new Oe),r=new en(i.width,i.height,{samples:e?n:0});t.reset(r),t.render()},QP=t=>{const e=Ks[t.ambiance],{scene:n,composer:i,camera:r}=t,o=t.scene.getObjectByName("instanced-vertex"),l=t.scene.getObjectByName("instanced-edge");o.material=ui(e.material,t),l.material=ui(e.material,t),e.env?n.environment=e.env:n.environment=null,typeof e.background!="number"?n.background=e.background:(n.background=null,i.renderer.setClearColor(new Ze(e.background),1));const a=[];n.traverse(_=>{_.isLight&&a.push(_)}),a.forEach(_=>{_.parent.remove(_)});let d=n.getObjectByName("ground");d&&(d.geometry.dispose(),d.material.dispose(),n.remove(d)),e.shadow&&(i.renderer.shadowMap.type=Lp,e.ground==="sphere"?d=new Bn(new qc(20,32,32),new Ss({color:16777215,side:Dn,depthWrite:!1})):e.ground==="plane"&&(d=new Bn(new Tl(1e3,1e3),new Ss({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),d.rotation.x=-Math.PI/2,d.position.y=-3),d.name="ground",d.receiveShadow=!0,n.add(d)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=Oy,o.castShadow=e.shadow,l.castShadow=e.shadow;const h=e.shadow?_=>{_.shadow&&(_.castShadow=!0,_.shadow.mapSize.width=2048,_.shadow.mapSize.height=2048,_.shadow.camera.near=r.near,_.shadow.camera.far=r.far,_.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(_=>{h(_),n.add(_)}),(e.cameraLights||[]).forEach(_=>{h(_),r.add(_)});const m=e.fx||["copy"];i.renderer.toneMapping=m.includes("bloom")?By:Gi,i.renderer.toneMappingExposure=m.includes("bloom")?1.5:1,i.passes.slice(1).forEach(_=>{i.removePass(_),_.dispose()}),m.forEach(_=>{if(_==="copy")i.addPass(i.copyPass);else if(_==="sao"){const g=new Oh(n,r,!1,!0);g.depthMaterial=ui(g.depthMaterial,t),g.normalMaterial=ui(g.normalMaterial,t),g.params.output=Oh.OUTPUT.Default,g.params.saoIntensity=.1,g.params.saoScale=10,g.params.saoKernelRadius=10,g.params.saoMinResolution=0,g.params.saoBlur=!0,g.params.saoBlurRadius=8,g.params.saoBlurStdDev=4,g.params.saoBlurDepthCutoff=.01,i.addPass(g)}else if(_==="bokeh"){const g=new AP(n,r,{focus:.5,aperture:.005,maxblur:.005});g.materialDepth=ui(g.materialDepth,t),i.addPass(g)}else if(_==="sobel"){const g=new Uh(UP);i.addPass(g);const y=new Uh(OP);y.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,y.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(y)}else if(_==="bloom"){const g=new Ws(new Oe(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(g)}else if(_==="godray"){const g=new HP(n,r);g.materialDepth=ui(g.materialDepth,t),i.addPass(g)}}),mx(t),i.render()},mx=t=>{const{composer:e,scene:n,dimensions:i,curvature:r,projection:o,vertexThickness:l,edgeThickness:a}=t,d=t.curve?t.segments:1,h=n.getObjectByName("instanced-vertex"),m=n.getObjectByName("instanced-edge"),_=g=>{if(g!=null&&g._rt){g.uniforms.curvature.value=r,g.uniforms.vertexThickness.value=l,g.uniforms.edgeThickness.value=a,g.needsUpdate=i!==g._rt.dimensions||o!==g._rt.projection,g._rt=t,g.uniforms.segments.value=d;for(let y=4;y<=i;y++)g.uniforms[`fov${y}`]||(g.uniforms[`fov${y}`]={value:1}),g.uniforms[`fov${y}`].value=vw(FP(t[`fov${y}`])*.5)}};_(h.material),_(m.material),e.passes.forEach(g=>Object.values(g).filter(y=>y==null?void 0:y.isMaterial).forEach(y=>_(y))),_(h.customDepthMaterial),_(h.customDistanceMaterial),_(m.customDepthMaterial),_(m.customDistanceMaterial)},uo=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];$u(o,t,i)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];$u(o,t,i),$u(l,t,i)}},hl=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Zf(o,t)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];Zf(o,t),Zf(l,t)}},pl=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Qf(o,t,i)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];Qf(o,t,i),Qf(l,t,i)}},JP=(t,e,n,i,r,o)=>{const l=window.innerWidth/2,a=window.innerHeight/2,d=Math.min(l,a)*.9;if(t.ctrlKey)hl(-t.dx/(2*d),n,i),pl(-t.dy/(2*d),n,i,r);else{const h=-t.dx/l,m=-t.dy/a,_=new Array(e).fill(0);!o&&t.shiftKey?o=1:!o&&t.altKey?o=2:!o&&t.ctrKey?o=3:!o&&t.metaKey&&(o=4),_[o*2]=h,_[o*2+1]=m,uo(_,n,i,r)}},eR=(t,e,n,i,r)=>{hl(ll*t.da/180,e,n),pl(t.ds,e,n,i)},tR=(t,e,n,i)=>{const{code:r}=t;if(t.target!==document.body)return;const o=.01;if(r==="ArrowLeft"||r==="KeyA")uo([-o,0,0,0],e,n,i);else if(r==="ArrowRight"||r==="KeyD")uo([o,0,0,0],e,n,i);else if(r==="ArrowUp"||r==="KeyW")uo([0,0,-o,0],e,n,i);else if(r==="ArrowDown"||r==="KeyS")uo([0,0,o,0],e,n,i);else if(r==="PageUp"||r==="KeyQ")uo([0,-o,0,0],e,n,i);else if(r==="PageDown"||r==="KeyE")uo([0,o,0,0],e,n,i);else if(r==="Digit1")hl(-(ll*5)/180,e,n);else if(r==="Digit3")hl(ll*5/180,e,n);else if(r==="KeyZ")pl(-o,e,n,i);else if(r==="KeyC")pl(o,e,n,i);else return;return!0},nR=(t,e,n,i,r)=>{const o=window.innerWidth/2,l=window.innerHeight/2,a=Math.min(o,l)*.9,d=10*(t.deltaMode===1?t.deltaY*10:t.deltaY)/a;t.shiftKey===!!r?hl(ll*d/180,e,n):pl(-d/100,e,n,i)},iR=t=>{at.useLayoutEffect(()=>{const e=pw(t.composer.renderer.domElement).draggable({listeners:{move:n=>{t.controls==="free"&&(JP(n,t.dimensions,t.vertices,t.edges,t.curvature,t.controlsShift),Ms(t))}}}).gesturable({onmove:n=>{t.controls==="free"&&(eR(n,t.vertices,t.edges,t.curvature,t.controlsShift),Ms(t))}});return()=>{e.unset()}},[t]),at.useEffect(()=>{const e=n=>{t.controls!=="orbit"&&(nR(n,t.vertices,t.edges,t.curvature,t.controlsShift),Ms(t))};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e)},[t]),at.useEffect(()=>{const e=n=>{tR(n,t.vertices,t.edges,t.curvature,t.controlsShift)&&Ms(t)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])};function rR(){return new Worker(""+new URL("knuthbendix-tiling.worker-0d4e81f4.js",import.meta.url).href)}function oR(){return new Worker(""+new URL("toddcoxeter-tiling.worker-71de0b0f.js",import.meta.url).href)}let vx=class gx{constructor(e,n){this.workerClass=n,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=gx.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((n,i)=>{const r=l=>{if(l.data.uuid!==e.uuid)return;const a=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${a}ms`),this.processing--,this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),l.data.error){i(l.data.error);return}n(l.data)},o=l=>{this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=Dy(0,this.processing),console.error(`Can't call web worker ${this.name}`,l))};this.worker.addEventListener("message",r),this.worker.addEventListener("error",o)})}};const _x=new vx("knuthbendix",rR),yx=new vx("toddcoxeter",oR),sR=(t,e,n,i)=>{at.useEffect(()=>{e(r=>r.order<r.currentOrder?{...r,currentOrder:r.order}:r)},[t.order,t.currentOrder,e]),at.useEffect(()=>{var r;if(!(t.order<=t.currentOrder)){if((r=t.ranges)!=null&&r[t.order]){e(o=>({...o,currentOrder:o.order}));return}(async()=>{i(null),n(!0);const o={},l=t.grouper==="knuthbendix"?_x:yx;if(t.currentOrder===0){const a=t.coxeter.map((d,h)=>d.map((m,_)=>-Ry((t.stellated?t.stellation[h][_]:1)*ll/m)));o.curvature=yw(a),o.mirrorsPlanes=Mw(a,o.curvature),o.rootVertex=Ew(t.mirrors,o.mirrorsPlanes,o.curvature),o.ranges=[]}try{const a={...t,...o},{vertices:d,edges:h}=await l.process({order:a.currentOrder,coxeter:a.coxeter,curvature:a.curvature,mirrors:a.mirrors,mirrorsPlanes:a.mirrorsPlanes,rootVertex:a.rootVertex,dimensions:a.dimensions});e(m=>({...m,...a,ranges:[...m.ranges,{vertices:[m.vertices.length,m.vertices.length+d.length],edges:[m.edges.length,m.edges.length+h.length]}],vertices:m.vertices.concat(d),edges:m.edges.concat(h),currentOrder:m.currentOrder+1}))}catch(a){i(a),console.warn(a),e(d=>({...d,currentOrder:d.order}))}finally{n(!1)}})()}},[e,n,i,t.order,t.currentOrder,t.dimensions,t.coxeter,t.mirrors,t.stellated,t.stellation]),at.useEffect(()=>{e(r=>r.vertices.length>r.maxVertices?{...r,maxVertices:r.vertices.length}:r)},[t.vertices,e]),at.useEffect(()=>{e(r=>r.edges.length>r.maxEdges?{...r,maxEdges:r.edges.length}:r)},[t.edges,e])},aR=t=>{const{camera:e,composer:n}=t,i=1,r=window.innerWidth*i,o=window.innerHeight*i,l=n.renderer.domElement;if(l.width!==r||l.height!==o){e.aspect=r/o,e.zoom=Math.min(1,r/o),e.updateProjectionMatrix(),n.renderer.setSize(r,o),n.setSize(r,o);const a=n.renderer.getPixelRatio();n.setPixelRatio(a);const d=r*a,h=o*a;n.passes.forEach(m=>{var _,g;if((g=(_=m.material)==null?void 0:_.uniforms)!=null&&g.resolution){let y=d,b=h;m.material.uniforms.resolution.value.x<=1&&(y=1/y,b=1/b),m.material.uniforms.resolution.value.x=y,m.material.uniforms.resolution.value.y=b}m.resolution&&(m.resolution=new Oe(r,o))}),l.style.width=r+"px",l.style.height=o+"px"}n.render()},lR=t=>{at.useEffect(()=>{t.orbitControls.enabled=t.controls==="orbit"},[t.controls,t.orbitControls]),at.useEffect(()=>{ZP(t.composer,t.msaa,t.msaaSamples)},[t.msaa,t.msaaSamples,t.composer]),at.useEffect(()=>{KP(t.composer,t.camera,t.fov3)},[t.fov3,t.camera,t.composer]),at.useEffect(()=>{d0(t),h0(t)},[t.dimensions,t.curve,t.segments]),at.useEffect(()=>{t.vertices.length&&(console.warn(`Extending vertex buffer to ${t.vertices.length}`),d0(t))},[t.maxVertices]),at.useEffect(()=>{t.edges.length&&(console.warn(`Extending edge buffer to ${t.edges.length}`),h0(t))},[t.maxEdges]),at.useEffect(()=>{QP(t)},[t.ambiance]),at.useEffect(()=>{mx(t),t.composer.render()},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges]),at.useEffect(()=>{p0(t,"vertex"),p0(t,"edge")},[t.showVertices,t.showEdges]),at.useEffect(()=>{Ms(t,t.currentOrder-1)},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges]),at.useEffect(()=>{Ms(t)},[t.ambiance,t.showVertices,t.showEdges,t.maxVertices,t.maxEdges,t.curve,t.segments]),at.useEffect(()=>{const e=()=>{aR(t)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[t])};function uR({gl:t,params:e,updateParams:n}){const[i,r]=at.useState(()=>({...e,...t,currentOrder:0,curvature:0,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],maxVertices:3e4,maxEdges:5e4}));window.rt=i;const[o,l]=at.useState(!1),[a,d]=at.useState(),[h,m]=at.useState(!0),_=at.useCallback(()=>m(T=>!T),[]),g=at.useCallback(()=>{let T,E;const p=_w(e.dimensions/2)-1;e.controls==="orbit"?(T="free",E=0):e.controlsShift>=p?(T="orbit",E=0):(T="free",E=e.controlsShift+1),n({controls:T,controlsShift:E})},[e.controls,e.controlsShift,e.dimensions,n]);at.useEffect(()=>{r(T=>({...T,...hx({order:e.order,controls:e.controls,controlsShift:e.controlsShift,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,curve:e.curve,segments:e.segments,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellated:e.stellated,stellation:e.stellation,grouper:e.grouper})}))},[e.order,e.ambiance,e.controls,e.controlsShift,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.showEdges,e.showVertices,e.stellated,e.stellation,e.vertexThickness]),at.useEffect(()=>{r(T=>!e.dimensions||e.coxeter.find(E=>E.find(p=>!p))||e.stellation.find(E=>E.find(p=>!p))?T:{...T,currentOrder:0,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[]})},[e.dimensions,e.coxeter,e.mirrors,e.stellated,e.stellation,e.grouper]),at.useEffect(()=>{yx.kill(),_x.kill(),l(!1)},[i.dimensions,i.coxeter,i.stellated,i.mirrors,i.stellation,i.grouper]),sR(i,r,l,d),lR(i),iR(i);const y=at.useCallback(()=>{const T={extended:!e.extended};if(!e.extended)for(let E=0;E<e.dimensions;E++)for(let p=0;p<E-1;p++)e.coxeter[E][p]=2,e.coxeter[p][E]=2;n(T)},[e.extended,e.dimensions,e.coxeter,n]),b=at.useCallback(T=>{let{name:E,checked:p,type:w,value:x}=T.target;w==="checkbox"?x=p:w==="number"&&x&&!isNaN(x)&&(x=+x,T.target.min&&(x=Dy(x,+T.target.min)),T.target.max&&(x=zv(x,+T.target.max)),T.target.step&&(x=gw(x/+T.target.step)*+T.target.step));const L={};if(E==="dimensions"&&x){L.coxeter=new Array(x).fill().map(()=>new Array(x).fill(2)),L.stellation=new Array(x).fill().map(()=>new Array(x).fill(1)),L.mirrors=new Array(x).fill(0);for(let P=0;P<zv(e.coxeter.length,x);P++){for(let I=0;I<P;I++)L.coxeter[P][I]=e.coxeter[P][I],L.coxeter[I][P]=e.coxeter[I][P];L.mirrors[P]=e.mirrors[P]}for(let P=0;P<x;P++)L.coxeter[P][P]=-1;for(let P=4;P<=x;P++)e[`fov${P}`]||(L[`fov${P}`]=P===4?90:45)}if(E.startsWith("coxeter")){const[P,I]=E.split("-").slice(1).map(z=>+z),B=e.coxeter.map(z=>z.slice());B[P][I]=x,B[I][P]=x,E="coxeter",x=B}if(E.startsWith("div")){const[P,I]=E.split("-").slice(1).map(z=>+z),B=e.stellation.map(z=>z.slice());B[P][I]=x,B[I][P]=x,E="stellation",x=B}if(E.startsWith("mirror")){const[P]=E.split("-").slice(1).map(I=>+I);E="mirrors",x=e.mirrors.map((I,B)=>(B===P?x:I)?1:0),x.reduce((I,B)=>I+B,0)===0&&(x[0]=1)}L[E]=x,n(L)},[e,n]);return Ve.jsxs("div",{className:a?"error":"",title:a,children:[Ve.jsxs("button",{className:"control-indicator",onClick:g,children:[i.controls==="orbit"?"⇹":"↭",i.controls==="free"?Ve.jsx("sup",{children:i.controlsShift+1}):null]}),Ve.jsxs("button",{className:`space-indicator${o?" processing":""}`,onClick:_,children:[i.curvature===0?"𝔼":i.curvature>0?"𝕊":"ℍ",Ve.jsx("sup",{children:i.dimensions-1}),i.currentOrder<i.order?Ve.jsxs("sub",{children:[i.currentOrder,"/",i.order]}):null]}),h&&Ve.jsxs("aside",{className:"controls",children:[Ve.jsxs("label",{children:["Grouper",Ve.jsx("select",{name:"grouper",value:e.grouper,onChange:b,children:kP.map(T=>Ve.jsx("option",{value:T,children:T.replace(/_/g," ").replace(/./,E=>E.toUpperCase())},T))})]}),Ve.jsxs("label",{children:["Order",Ve.jsx("input",{type:"number",name:"order",min:"1",step:"1",value:e.order,onChange:b})]}),Ve.jsxs("label",{children:["Segments",Ve.jsx("input",{type:"checkbox",name:"curve",checked:e.curve,onChange:b}),e.curve?Ve.jsx("input",{type:"number",name:"segments",min:"1",step:"1",value:e.segments,onChange:b}):null]}),Ve.jsxs("label",{children:["Dimensions",Ve.jsx("input",{type:"number",name:"dimensions",min:"2",max:"9",step:"1",value:e.dimensions,onChange:b})]}),Ve.jsxs("label",{children:["Projection",Ve.jsx("select",{name:"projection",value:e.projection,onChange:b,children:dx.map(T=>Ve.jsx("option",{value:T,children:T.replace(/_/g," ").replace(/./,E=>E.toUpperCase())},T))})]}),Ve.jsxs("label",{children:["Vertices",Ve.jsx("input",{type:"checkbox",name:"showVertices",checked:e.showVertices,onChange:b}),e.showVertices?Ve.jsx("input",{type:"number",name:"vertexThickness",min:"0",step:"1",value:e.vertexThickness,onChange:b}):null]}),Ve.jsxs("label",{children:["Edges",Ve.jsx("input",{type:"checkbox",name:"showEdges",checked:e.showEdges,onChange:b}),e.showEdges?Ve.jsx("input",{type:"number",name:"edgeThickness",min:"0",step:"1",value:e.edgeThickness,onChange:b}):null]}),Ve.jsxs("label",{children:[Ve.jsx("input",{type:"checkbox",name:"stellated",checked:e.stellated,onChange:b}),"Stellated"]}),Ve.jsxs("label",{children:["Ambiance",Ve.jsx("select",{name:"ambiance",value:e.ambiance,onChange:b,children:Object.keys(Ks).map(T=>Ve.jsx("option",{value:T,children:T.replace(/_/g," ").replace(/./,E=>E.toUpperCase())},T))})]})]}),h&&Ve.jsxs("aside",{className:"view",children:[Ve.jsxs("label",{children:["MSAA",Ve.jsx("input",{type:"checkbox",name:"msaa",checked:e.msaa,onChange:b}),e.msaa?Ve.jsx("input",{type:"number",name:"msaaSamples",min:"0",step:"1",value:e.msaaSamples,onChange:b}):null]}),Ve.jsxs("label",{children:["FOV3",Ve.jsx("input",{type:"number",name:"fov3",min:"0",step:"1",value:e.fov3,onChange:b})]}),e.dimensions>3?[...Array(e.dimensions-3).keys()].map(T=>Ve.jsxs("label",{children:["FOV",T+4,Ve.jsx("input",{type:"number",name:`fov${T+4}`,step:"1",value:e[`fov${T+4}`],onChange:b})]},T)):null]}),h&&Ve.jsxs("aside",{className:"coxeters",children:[[...Array(e.dimensions).keys()].map(T=>Ve.jsxs(at.Fragment,{children:[T>0&&Ve.jsx("div",{className:"number",children:[...Array(T).keys()].map(E=>(e.extended||T===E+1)&&Ve.jsxs("label",{children:[Ve.jsx("input",{type:"number",name:`coxeter-${T}-${E}`,min:"2",step:"1",value:e.coxeter[T][E],onChange:b}),e.stellated&&Ve.jsxs("div",{className:"stellation",children:[Ve.jsx("span",{className:"divisor",children:" / "}),Ve.jsx("input",{type:"number",name:`div-${T}-${E}`,min:"1",step:"1",value:e.stellation[T][E],onChange:b})]})]},E))}),Ve.jsxs("label",{className:"mirror",children:[T>0&&Ve.jsx("span",{className:"coxeter",children:"——"}),Ve.jsx("input",{type:"checkbox",name:`mirror-${T}`,checked:!!e.mirrors[T],onChange:b}),T<e.dimensions-1&&Ve.jsx("span",{className:"coxeter",children:"——"})]})]},T)),Ve.jsx("button",{className:"extend",onClick:y,children:e.extended?"▲":"▼"})]})]})}const xx=YP();Object.assign(window,xx);const m0=(t=null)=>{const{location:e}=window;if(e.hash)try{return JSON.parse(atob(e.hash.slice(1)))}catch(n){console.warn(n),e.hash=""}return t},cR=t=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(t)))},fR=()=>{const[t,e]=at.useState(m0(Tc)),n=at.useCallback(()=>{const r=m0();r&&e(r)},[]),i=at.useCallback(r=>{const o={...t,...r};e(o),!(Object.keys(hx(o)).length<Object.keys(Tc).length)&&cR(o)},[t]);return at.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),Ve.jsx(uR,{gl:xx,params:t,updateParams:i})};Ud.createRoot(document.getElementById("root")).render(Ve.jsx(fR,{}));
