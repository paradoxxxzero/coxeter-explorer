(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function jS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M0={exports:{}},Cc={},E0={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),XS=Symbol.for("react.portal"),YS=Symbol.for("react.fragment"),qS=Symbol.for("react.strict_mode"),$S=Symbol.for("react.profiler"),KS=Symbol.for("react.provider"),ZS=Symbol.for("react.context"),QS=Symbol.for("react.forward_ref"),JS=Symbol.for("react.suspense"),eM=Symbol.for("react.memo"),tM=Symbol.for("react.lazy"),Lm=Symbol.iterator;function nM(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T0=Object.assign,b0={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||w0}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C0(){}C0.prototype=Ys.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||w0}var zh=kh.prototype=new C0;zh.constructor=kh;T0(zh,Ys.prototype);zh.isPureReactComponent=!0;var Im=Array.isArray,A0=Object.prototype.hasOwnProperty,Bh={current:null},P0={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)A0.call(e,i)&&!P0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var d=Array(a),h=0;h<a;h++)d[h]=arguments[h+2];r.children=d}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:t,key:o,ref:l,props:r,_owner:Bh.current}}function iM(t,e){return{$$typeof:ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ml}function rM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function bf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rM(""+t.key):e.toString(36)}function ku(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case ml:case XS:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+bf(l,0):i,Im(r)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),ku(r,e,n,"",function(h){return h})):r!=null&&(Gh(r)&&(r=iM(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Um,"$&/")+"/")+t)),e.push(r)),1;if(l=0,i=i===""?".":i+":",Im(t))for(var a=0;a<t.length;a++){o=t[a];var d=i+bf(o,a);l+=ku(o,e,n,d,r)}else if(d=nM(t),typeof d=="function")for(t=d.call(t),a=0;!(o=t.next()).done;)o=o.value,d=i+bf(o,a++),l+=ku(o,e,n,d,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Zl(t,e,n){if(t==null)return t;var i=[],r=0;return ku(t,i,"","",function(o){return e.call(n,o,r++)}),i}function oM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var In={current:null},zu={transition:null},sM={ReactCurrentDispatcher:In,ReactCurrentBatchConfig:zu,ReactCurrentOwner:Bh};ft.Children={map:Zl,forEach:function(t,e,n){Zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zl(t,function(){e++}),e},toArray:function(t){return Zl(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=Ys;ft.Fragment=YS;ft.Profiler=$S;ft.PureComponent=kh;ft.StrictMode=qS;ft.Suspense=JS;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sM;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=T0({},t.props),r=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)A0.call(e,d)&&!P0.hasOwnProperty(d)&&(i[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){a=Array(d);for(var h=0;h<d;h++)a[h]=arguments[h+2];i.children=a}return{$$typeof:ml,type:t.type,key:r,ref:o,props:i,_owner:l}};ft.createContext=function(t){return t={$$typeof:ZS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KS,_context:t},t.Consumer=t};ft.createElement=R0;ft.createFactory=function(t){var e=R0.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:QS,render:t}};ft.isValidElement=Gh;ft.lazy=function(t){return{$$typeof:tM,_payload:{_status:-1,_result:t},_init:oM}};ft.memo=function(t,e){return{$$typeof:eM,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=zu.transition;zu.transition={};try{t()}finally{zu.transition=e}};ft.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ft.useCallback=function(t,e){return In.current.useCallback(t,e)};ft.useContext=function(t){return In.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return In.current.useDeferredValue(t)};ft.useEffect=function(t,e){return In.current.useEffect(t,e)};ft.useId=function(){return In.current.useId()};ft.useImperativeHandle=function(t,e,n){return In.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return In.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return In.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return In.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return In.current.useReducer(t,e,n)};ft.useRef=function(t){return In.current.useRef(t)};ft.useState=function(t){return In.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return In.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return In.current.useTransition()};ft.version="18.2.0";E0.exports=ft;var at=E0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aM=at,lM=Symbol.for("react.element"),uM=Symbol.for("react.fragment"),cM=Object.prototype.hasOwnProperty,fM=aM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dM={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var i,r={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)cM.call(e,i)&&!dM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lM,type:t,key:o,ref:l,props:r,_owner:fM.current}}Cc.Fragment=uM;Cc.jsx=D0;Cc.jsxs=D0;M0.exports=Cc;var Ce=M0.exports,Nd={},L0={exports:{}},Jn={},I0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,J){var ne=X.length;X.push(J);e:for(;0<ne;){var we=ne-1>>>1,ve=X[we];if(0<r(ve,J))X[we]=J,X[ne]=ve,ne=we;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var J=X[0],ne=X.pop();if(ne!==J){X[0]=ne;e:for(var we=0,ve=X.length,oe=ve>>>1;we<oe;){var q=2*(we+1)-1,Me=X[q],Ee=q+1,H=X[Ee];if(0>r(Me,ne))Ee<ve&&0>r(H,Me)?(X[we]=H,X[Ee]=ne,we=Ee):(X[we]=Me,X[q]=ne,we=q);else if(Ee<ve&&0>r(H,ne))X[we]=H,X[Ee]=ne,we=Ee;else break e}}return J}function r(X,J){var ne=X.sortIndex-J.sortIndex;return ne!==0?ne:X.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],h=[],v=1,g=null,_=3,y=!1,w=!1,A=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(X){for(var J=n(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=X)i(h),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(h)}}function L(X){if(A=!1,S(X),!w)if(n(d)!==null)w=!0,ue(P);else{var J=n(h);J!==null&&pe(L,J.startTime-X)}}function P(X,J){w=!1,A&&(A=!1,p(z),z=-1),y=!0;var ne=_;try{for(S(J),g=n(d);g!==null&&(!(g.expirationTime>J)||X&&!ae());){var we=g.callback;if(typeof we=="function"){g.callback=null,_=g.priorityLevel;var ve=we(g.expirationTime<=J);J=t.unstable_now(),typeof ve=="function"?g.callback=ve:g===n(d)&&i(d),S(J)}else i(d);g=n(d)}if(g!==null)var oe=!0;else{var q=n(h);q!==null&&pe(L,q.startTime-J),oe=!1}return oe}finally{g=null,_=ne,y=!1}}var U=!1,B=null,z=-1,R=5,N=-1;function ae(){return!(t.unstable_now()-N<R)}function fe(){if(B!==null){var X=t.unstable_now();N=X;var J=!0;try{J=B(!0,X)}finally{J?$():(U=!1,B=null)}}else U=!1}var $;if(typeof E=="function")$=function(){E(fe)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,j=te.port2;te.port1.onmessage=fe,$=function(){j.postMessage(null)}}else $=function(){T(fe,0)};function ue(X){B=X,U||(U=!0,$())}function pe(X,J){z=T(function(){X(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,ue(P))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(X){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var ne=_;_=J;try{return X()}finally{_=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,J){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=_;_=X;try{return J()}finally{_=ne}},t.unstable_scheduleCallback=function(X,J,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,X){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ne+ve,X={id:v++,callback:J,priorityLevel:X,startTime:ne,expirationTime:ve,sortIndex:-1},ne>we?(X.sortIndex=ne,e(h,X),n(d)===null&&X===n(h)&&(A?(p(z),z=-1):A=!0,pe(L,ne-we))):(X.sortIndex=ve,e(d,X),w||y||(w=!0,ue(P))),X},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(X){var J=_;return function(){var ne=_;_=J;try{return X.apply(this,arguments)}finally{_=ne}}}})(U0);I0.exports=U0;var hM=I0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=at,Qn=hM;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,ja={};function Io(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(ja[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=Object.prototype.hasOwnProperty,pM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},Nm={};function mM(t){return Fd.call(Nm,t)?!0:Fd.call(Om,t)?!1:pM.test(t)?Nm[t]=!0:(Om[t]=!0,!1)}function vM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gM(t,e,n,i){if(e===null||typeof e>"u"||vM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Un(t,e,n,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gn[t]=new Un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gn[e]=new Un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gn[t]=new Un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gn[t]=new Un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gn[t]=new Un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gn[t]=new Un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gn[t]=new Un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gn[t]=new Un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gn[t]=new Un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Hh);gn[e]=new Un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Hh);gn[e]=new Un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Hh);gn[e]=new Un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gn[t]=new Un(t,1,!1,t.toLowerCase(),null,!1,!1)});gn.xlinkHref=new Un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gn[t]=new Un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gM(e,n,r,i)&&(n=null),i||r===null?mM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fr=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),z0=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var zt=Object.assign,Cf;function Aa(t){if(Cf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cf=e&&e[1]||""}return`
`+Cf+t}var Af=!1;function Pf(t,e){if(!t||Af)return"";Af=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){i=h}t.call(e.prototype)}else{try{throw Error()}catch(h){i=h}t()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var d=`
`+r[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Af=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Aa(t):""}function _M(t){switch(t.tag){case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return t=Pf(t.type,!1),t;case 11:return t=Pf(t.type.render,!1),t;case 1:return t=Pf(t.type,!0),t;default:return""}}function Gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case fs:return"Portal";case kd:return"Profiler";case jh:return"StrictMode";case zd:return"Suspense";case Bd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k0:return(t.displayName||"Context")+".Consumer";case F0:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yh:return e=t.displayName||null,e!==null?e:Gd(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Gd(t(e))}catch{}}return null}function yM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gd(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xM(t){var e=B0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=xM(t))}function G0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=B0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vd(t,e){var n=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V0(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function Hd(t,e){V0(t,e);var n=kr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wd(t,e,n){(e!=="number"||Qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Pa(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function H0(t,e){var n=kr(e.value),i=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eu,j0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SM=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){SM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function Y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=X0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var MM=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yd(t,e){if(e){if(MM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=null;function qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kd=null,bs=null,Cs=null;function Vm(t){if(t=_l(t)){if(typeof Kd!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=Lc(e),Kd(t.stateNode,t.type,e))}}function q0(t){bs?Cs?Cs.push(t):Cs=[t]:bs=t}function $0(){if(bs){var t=bs,e=Cs;if(Cs=bs=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function K0(t,e){return t(e)}function Z0(){}var Rf=!1;function Q0(t,e,n){if(Rf)return t(e,n);Rf=!0;try{return K0(t,e,n)}finally{Rf=!1,(bs!==null||Cs!==null)&&(Z0(),$0())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var Zd=!1;if(ar)try{var va={};Object.defineProperty(va,"passive",{get:function(){Zd=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Zd=!1}function EM(t,e,n,i,r,o,l,a,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(v){this.onError(v)}}var Ua=!1,Ju=null,ec=!1,Qd=null,wM={onError:function(t){Ua=!0,Ju=t}};function TM(t,e,n,i,r,o,l,a,d){Ua=!1,Ju=null,EM.apply(wM,arguments)}function bM(t,e,n,i,r,o,l,a,d){if(TM.apply(this,arguments),Ua){if(Ua){var h=Ju;Ua=!1,Ju=null}else throw Error(Se(198));ec||(ec=!0,Qd=h)}}function Uo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(Uo(t)!==t)throw Error(Se(188))}function CM(t){var e=t.alternate;if(!e){if(e=Uo(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Hm(r),t;if(o===i)return Hm(r),e;o=o.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===n){l=!0,n=r,i=o;break}if(a===i){l=!0,i=r,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,i=r;break}if(a===i){l=!0,i=o,n=r;break}a=a.sibling}if(!l)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function e_(t){return t=CM(t),t!==null?t_(t):null}function t_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t_(t);if(e!==null)return e;t=t.sibling}return null}var n_=Qn.unstable_scheduleCallback,Wm=Qn.unstable_cancelCallback,AM=Qn.unstable_shouldYield,PM=Qn.unstable_requestPaint,Wt=Qn.unstable_now,RM=Qn.unstable_getCurrentPriorityLevel,$h=Qn.unstable_ImmediatePriority,i_=Qn.unstable_UserBlockingPriority,tc=Qn.unstable_NormalPriority,DM=Qn.unstable_LowPriority,r_=Qn.unstable_IdlePriority,Ac=null,zi=null;function LM(t){if(zi&&typeof zi.onCommitFiberRoot=="function")try{zi.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Ci=Math.clz32?Math.clz32:OM,IM=Math.log,UM=Math.LN2;function OM(t){return t>>>=0,t===0?32:31-(IM(t)/UM|0)|0}var tu=64,nu=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~r;a!==0?i=Ra(a):(o&=l,o!==0&&(i=Ra(o)))}else l=n&~r,l!==0?i=Ra(l):o!==0&&(i=Ra(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ci(e),r=1<<n,i|=t[n],e&=~r;return i}function NM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Ci(o),a=1<<l,d=r[l];d===-1?(!(a&n)||a&i)&&(r[l]=NM(a,e)):d<=e&&(t.expiredLanes|=a),o&=~a}}function Jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o_(){var t=tu;return tu<<=1,!(tu&4194240)&&(tu=64),t}function Df(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ci(e),t[e]=n}function kM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ci(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var St=0;function s_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a_,Zh,l_,u_,c_,eh=!1,iu=[],Rr=null,Dr=null,Lr=null,qa=new Map,$a=new Map,Tr=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function ga(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=_l(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function BM(t,e,n,i,r){switch(e){case"focusin":return Rr=ga(Rr,t,e,n,i,r),!0;case"dragenter":return Dr=ga(Dr,t,e,n,i,r),!0;case"mouseover":return Lr=ga(Lr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return qa.set(o,ga(qa.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,$a.set(o,ga($a.get(o)||null,t,e,n,i,r)),!0}return!1}function f_(t){var e=po(t.target);if(e!==null){var n=Uo(e);if(n!==null){if(e=n.tag,e===13){if(e=J0(n),e!==null){t.blockedOn=e,c_(t.priority,function(){l_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$d=i,n.target.dispatchEvent(i),$d=null}else return e=_l(n),e!==null&&Zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Xm(t,e,n){Bu(t)&&n.delete(e)}function GM(){eh=!1,Rr!==null&&Bu(Rr)&&(Rr=null),Dr!==null&&Bu(Dr)&&(Dr=null),Lr!==null&&Bu(Lr)&&(Lr=null),qa.forEach(Xm),$a.forEach(Xm)}function _a(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,GM)))}function Ka(t){function e(r){return _a(r,t)}if(0<iu.length){_a(iu[0],t);for(var n=1;n<iu.length;n++){var i=iu[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Rr!==null&&_a(Rr,t),Dr!==null&&_a(Dr,t),Lr!==null&&_a(Lr,t),qa.forEach(e),$a.forEach(e),n=0;n<Tr.length;n++)i=Tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&Tr.shift()}var As=fr.ReactCurrentBatchConfig,ic=!0;function VM(t,e,n,i){var r=St,o=As.transition;As.transition=null;try{St=1,Qh(t,e,n,i)}finally{St=r,As.transition=o}}function HM(t,e,n,i){var r=St,o=As.transition;As.transition=null;try{St=4,Qh(t,e,n,i)}finally{St=r,As.transition=o}}function Qh(t,e,n,i){if(ic){var r=th(t,e,n,i);if(r===null)Gf(t,e,i,rc,n),jm(t,i);else if(BM(r,t,e,n,i))i.stopPropagation();else if(jm(t,i),e&4&&-1<zM.indexOf(t)){for(;r!==null;){var o=_l(r);if(o!==null&&a_(o),o=th(t,e,n,i),o===null&&Gf(t,e,i,rc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Gf(t,e,i,null,n)}}var rc=null;function th(t,e,n,i){if(rc=null,t=qh(i),t=po(t),t!==null)if(e=Uo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rc=t,null}function d_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RM()){case $h:return 1;case i_:return 4;case tc:case DM:return 16;case r_:return 536870912;default:return 16}default:return 16}}var Ar=null,Jh=null,Gu=null;function h_(){if(Gu)return Gu;var t,e=Jh,n=e.length,i,r="value"in Ar?Ar.value:Ar.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===r[o-i];i++);return Gu=r.slice(t,1<i?1-i:void 0)}function Vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ru(){return!0}function Ym(){return!1}function ei(t){function e(n,i,r,o,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ru:Ym,this.isPropagationStopped=Ym,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=ei(qs),gl=zt({},qs,{view:0,detail:0}),WM=ei(gl),Lf,If,ya,Pc=zt({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(Lf=t.screenX-ya.screenX,If=t.screenY-ya.screenY):If=Lf=0,ya=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:If}}),qm=ei(Pc),jM=zt({},Pc,{dataTransfer:0}),XM=ei(jM),YM=zt({},gl,{relatedTarget:0}),Uf=ei(YM),qM=zt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),$M=ei(qM),KM=zt({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZM=ei(KM),QM=zt({},qs,{data:0}),$m=ei(QM),JM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tE[t])?!!e[t]:!1}function tp(){return nE}var iE=zt({},gl,{key:function(t){if(t.key){var e=JM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rE=ei(iE),oE=zt({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=ei(oE),sE=zt({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),aE=ei(sE),lE=zt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),uE=ei(lE),cE=zt({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=ei(cE),dE=[9,13,27,32],np=ar&&"CompositionEvent"in window,Oa=null;ar&&"documentMode"in document&&(Oa=document.documentMode);var hE=ar&&"TextEvent"in window&&!Oa,p_=ar&&(!np||Oa&&8<Oa&&11>=Oa),Zm=String.fromCharCode(32),Qm=!1;function m_(t,e){switch(t){case"keyup":return dE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function pE(t,e){switch(t){case"compositionend":return v_(e);case"keypress":return e.which!==32?null:(Qm=!0,Zm);case"textInput":return t=e.data,t===Zm&&Qm?null:t;default:return null}}function mE(t,e){if(hs)return t==="compositionend"||!np&&m_(t,e)?(t=h_(),Gu=Jh=Ar=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p_&&e.locale!=="ko"?null:e.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vE[t.type]:e==="textarea"}function g_(t,e,n,i){q0(i),e=oc(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Na=null,Za=null;function gE(t){A_(t,0)}function Rc(t){var e=vs(t);if(G0(e))return t}function _E(t,e){if(t==="change")return e}var __=!1;if(ar){var Of;if(ar){var Nf="oninput"in document;if(!Nf){var ev=document.createElement("div");ev.setAttribute("oninput","return;"),Nf=typeof ev.oninput=="function"}Of=Nf}else Of=!1;__=Of&&(!document.documentMode||9<document.documentMode)}function tv(){Na&&(Na.detachEvent("onpropertychange",y_),Za=Na=null)}function y_(t){if(t.propertyName==="value"&&Rc(Za)){var e=[];g_(e,Za,t,qh(t)),Q0(gE,e)}}function yE(t,e,n){t==="focusin"?(tv(),Na=e,Za=n,Na.attachEvent("onpropertychange",y_)):t==="focusout"&&tv()}function xE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(Za)}function SE(t,e){if(t==="click")return Rc(e)}function ME(t,e){if(t==="input"||t==="change")return Rc(e)}function EE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ri=typeof Object.is=="function"?Object.is:EE;function Qa(t,e){if(Ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fd.call(e,r)||!Ri(t[r],e[r]))return!1}return!0}function nv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iv(t,e){var n=nv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nv(n)}}function x_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S_(){for(var t=window,e=Qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qu(t.document)}return e}function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wE(t){var e=S_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x_(n.ownerDocument.documentElement,n)){if(i!==null&&ip(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=iv(n,o);var l=iv(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TE=ar&&"documentMode"in document&&11>=document.documentMode,ps=null,nh=null,Fa=null,ih=!1;function rv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ih||ps==null||ps!==Qu(i)||(i=ps,"selectionStart"in i&&ip(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fa&&Qa(Fa,i)||(Fa=i,i=oc(nh,"onSelect"),0<i.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Ff={},M_={};ar&&(M_=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Dc(t){if(Ff[t])return Ff[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M_)return Ff[t]=e[n];return t}var E_=Dc("animationend"),w_=Dc("animationiteration"),T_=Dc("animationstart"),b_=Dc("transitionend"),C_=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){C_.set(t,e),Io(e,[t])}for(var kf=0;kf<ov.length;kf++){var zf=ov[kf],bE=zf.toLowerCase(),CE=zf[0].toUpperCase()+zf.slice(1);Vr(bE,"on"+CE)}Vr(E_,"onAnimationEnd");Vr(w_,"onAnimationIteration");Vr(T_,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(b_,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Io("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Io("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Io("onBeforeInput",["compositionend","keypress","textInput","paste"]);Io("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Io("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Io("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function sv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,bM(i,e,void 0,t),t.currentTarget=null}function A_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var a=i[l],d=a.instance,h=a.currentTarget;if(a=a.listener,d!==o&&r.isPropagationStopped())break e;sv(r,a,h),o=d}else for(l=0;l<i.length;l++){if(a=i[l],d=a.instance,h=a.currentTarget,a=a.listener,d!==o&&r.isPropagationStopped())break e;sv(r,a,h),o=d}}}if(ec)throw t=Qd,ec=!1,Qd=null,t}function Rt(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var i=t+"__bubble";n.has(i)||(P_(e,t,2,!1),n.add(i))}function Bf(t,e,n){var i=0;e&&(i|=4),P_(n,t,i,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[su]){t[su]=!0,N0.forEach(function(n){n!=="selectionchange"&&(AE.has(n)||Bf(n,!1,t),Bf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[su]||(e[su]=!0,Bf("selectionchange",!1,e))}}function P_(t,e,n,i){switch(d_(e)){case 1:var r=VM;break;case 4:r=HM;break;default:r=Qh}n=r.bind(null,e,n,t),r=void 0,!Zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;l=l.return}for(;a!==null;){if(l=po(a),l===null)return;if(d=l.tag,d===5||d===6){i=o=l;continue e}a=a.parentNode}}i=i.return}Q0(function(){var h=o,v=qh(n),g=[];e:{var _=C_.get(t);if(_!==void 0){var y=ep,w=t;switch(t){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":y=rE;break;case"focusin":w="focus",y=Uf;break;case"focusout":w="blur",y=Uf;break;case"beforeblur":case"afterblur":y=Uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=XM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=aE;break;case E_:case w_:case T_:y=$M;break;case b_:y=uE;break;case"scroll":y=WM;break;case"wheel":y=fE;break;case"copy":case"cut":case"paste":y=ZM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Km}var A=(e&4)!==0,T=!A&&t==="scroll",p=A?_!==null?_+"Capture":null:_;A=[];for(var E=h,S;E!==null;){S=E;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,p!==null&&(L=Ya(E,p),L!=null&&A.push(el(E,L,S)))),T)break;E=E.return}0<A.length&&(_=new y(_,w,null,n,v),g.push({event:_,listeners:A}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",_&&n!==$d&&(w=n.relatedTarget||n.fromElement)&&(po(w)||w[lr]))break e;if((y||_)&&(_=v.window===v?v:(_=v.ownerDocument)?_.defaultView||_.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=h,w=w?po(w):null,w!==null&&(T=Uo(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=h),y!==w)){if(A=qm,L="onMouseLeave",p="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(A=Km,L="onPointerLeave",p="onPointerEnter",E="pointer"),T=y==null?_:vs(y),S=w==null?_:vs(w),_=new A(L,E+"leave",y,n,v),_.target=T,_.relatedTarget=S,L=null,po(v)===h&&(A=new A(p,E+"enter",w,n,v),A.target=S,A.relatedTarget=T,L=A),T=L,y&&w)t:{for(A=y,p=w,E=0,S=A;S;S=jo(S))E++;for(S=0,L=p;L;L=jo(L))S++;for(;0<E-S;)A=jo(A),E--;for(;0<S-E;)p=jo(p),S--;for(;E--;){if(A===p||p!==null&&A===p.alternate)break t;A=jo(A),p=jo(p)}A=null}else A=null;y!==null&&av(g,_,y,A,!1),w!==null&&T!==null&&av(g,T,w,A,!0)}}e:{if(_=h?vs(h):window,y=_.nodeName&&_.nodeName.toLowerCase(),y==="select"||y==="input"&&_.type==="file")var P=_E;else if(Jm(_))if(__)P=ME;else{P=xE;var U=yE}else(y=_.nodeName)&&y.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(P=SE);if(P&&(P=P(t,h))){g_(g,P,n,v);break e}U&&U(t,_,h),t==="focusout"&&(U=_._wrapperState)&&U.controlled&&_.type==="number"&&Wd(_,"number",_.value)}switch(U=h?vs(h):window,t){case"focusin":(Jm(U)||U.contentEditable==="true")&&(ps=U,nh=h,Fa=null);break;case"focusout":Fa=nh=ps=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,rv(g,n,v);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":rv(g,n,v)}var B;if(np)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else hs?m_(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(p_&&n.locale!=="ko"&&(hs||z!=="onCompositionStart"?z==="onCompositionEnd"&&hs&&(B=h_()):(Ar=v,Jh="value"in Ar?Ar.value:Ar.textContent,hs=!0)),U=oc(h,z),0<U.length&&(z=new $m(z,t,null,n,v),g.push({event:z,listeners:U}),B?z.data=B:(B=v_(n),B!==null&&(z.data=B)))),(B=hE?pE(t,n):mE(t,n))&&(h=oc(h,"onBeforeInput"),0<h.length&&(v=new $m("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:h}),v.data=B))}A_(g,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ya(t,n),o!=null&&i.unshift(el(t,o,r)),o=Ya(t,e),o!=null&&i.push(el(t,o,r))),t=t.return}return i}function jo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function av(t,e,n,i,r){for(var o=e._reactName,l=[];n!==null&&n!==i;){var a=n,d=a.alternate,h=a.stateNode;if(d!==null&&d===i)break;a.tag===5&&h!==null&&(a=h,r?(d=Ya(n,o),d!=null&&l.unshift(el(n,d,a))):r||(d=Ya(n,o),d!=null&&l.push(el(n,d,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var PE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function lv(t){return(typeof t=="string"?t:""+t).replace(PE,`
`).replace(RE,"")}function au(t,e,n){if(e=lv(e),lv(t)!==e&&n)throw Error(Se(425))}function sc(){}var rh=null,oh=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(t){return uv.resolve(null).then(t).catch(IE)}:ah;function IE(t){setTimeout(function(){throw t})}function Vf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ka(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ka(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),ki="__reactFiber$"+$s,tl="__reactProps$"+$s,lr="__reactContainer$"+$s,lh="__reactEvents$"+$s,UE="__reactListeners$"+$s,OE="__reactHandles$"+$s;function po(t){var e=t[ki];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[ki]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cv(t);t!==null;){if(n=t[ki])return n;t=cv(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[ki]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function Lc(t){return t[tl]||null}var uh=[],gs=-1;function Hr(t){return{current:t}}function It(t){0>gs||(t.current=uh[gs],uh[gs]=null,gs--)}function Ct(t,e){gs++,uh[gs]=t.current,t.current=e}var zr={},wn=Hr(zr),Gn=Hr(!1),wo=zr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Vn(t){return t=t.childContextTypes,t!=null}function ac(){It(Gn),It(wn)}function fv(t,e,n){if(wn.current!==zr)throw Error(Se(168));Ct(wn,e),Ct(Gn,n)}function R_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,yM(t)||"Unknown",r));return zt({},n,i)}function lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,wo=wn.current,Ct(wn,t),Ct(Gn,Gn.current),!0}function dv(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=R_(t,e,wo),i.__reactInternalMemoizedMergedChildContext=t,It(Gn),It(wn),Ct(wn,t)):It(Gn),Ct(Gn,n)}var tr=null,Ic=!1,Hf=!1;function D_(t){tr===null?tr=[t]:tr.push(t)}function NE(t){Ic=!0,D_(t)}function Wr(){if(!Hf&&tr!==null){Hf=!0;var t=0,e=St;try{var n=tr;for(St=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}tr=null,Ic=!1}catch(r){throw tr!==null&&(tr=tr.slice(t+1)),n_($h,Wr),r}finally{St=e,Hf=!1}}return null}var _s=[],ys=0,uc=null,cc=0,si=[],ai=0,To=null,ir=1,rr="";function so(t,e){_s[ys++]=cc,_s[ys++]=uc,uc=t,cc=e}function L_(t,e,n){si[ai++]=ir,si[ai++]=rr,si[ai++]=To,To=t;var i=ir;t=rr;var r=32-Ci(i)-1;i&=~(1<<r),n+=1;var o=32-Ci(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,ir=1<<32-Ci(e)+r|n<<r|i,rr=o+t}else ir=1<<o|n<<r|i,rr=t}function rp(t){t.return!==null&&(so(t,1),L_(t,1,0))}function op(t){for(;t===uc;)uc=_s[--ys],_s[ys]=null,cc=_s[--ys],_s[ys]=null;for(;t===To;)To=si[--ai],si[ai]=null,rr=si[--ai],si[ai]=null,ir=si[--ai],si[ai]=null}var Zn=null,Kn=null,Ut=!1,Ei=null;function I_(t,e){var n=ci(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=To!==null?{id:ir,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ci(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zn=t,Kn=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fh(t){if(Ut){var e=Kn;if(e){var n=e;if(!hv(t,e)){if(ch(t))throw Error(Se(418));e=Ir(n.nextSibling);var i=Zn;e&&hv(t,e)?I_(i,n):(t.flags=t.flags&-4097|2,Ut=!1,Zn=t)}}else{if(ch(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Ut=!1,Zn=t}}}function pv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zn=t}function lu(t){if(t!==Zn)return!1;if(!Ut)return pv(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=Kn)){if(ch(t))throw U_(),Error(Se(418));for(;e;)I_(t,e),e=Ir(e.nextSibling)}if(pv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kn=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kn=null}}else Kn=Zn?Ir(t.stateNode.nextSibling):null;return!0}function U_(){for(var t=Kn;t;)t=Ir(t.nextSibling)}function Fs(){Kn=Zn=null,Ut=!1}function sp(t){Ei===null?Ei=[t]:Ei.push(t)}var FE=fr.ReactCurrentBatchConfig;function Si(t,e){if(t&&t.defaultProps){e=zt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fc=Hr(null),dc=null,xs=null,ap=null;function lp(){ap=xs=dc=null}function up(t){var e=fc.current;It(fc),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){dc=t,ap=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zn=!0),t.firstContext=null)}function di(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(dc===null)throw Error(Se(308));xs=t,dc.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var mo=null;function cp(t){mo===null?mo=[t]:mo.push(t)}function O_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ur(t,i)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ur(t,n)}return r=i.interleaved,r===null?(e.next=e,cp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ur(t,n)}function Hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}function mv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hc(t,e,n,i){var r=t.updateQueue;wr=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var d=a,h=d.next;d.next=null,l===null?o=h:l.next=h,l=d;var v=t.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=h:a.next=h,v.lastBaseUpdate=d))}if(o!==null){var g=r.baseState;l=0,v=h=d=null,a=o;do{var _=a.lane,y=a.eventTime;if((i&_)===_){v!==null&&(v=v.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,A=a;switch(_=e,y=n,A.tag){case 1:if(w=A.payload,typeof w=="function"){g=w.call(y,g,_);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=A.payload,_=typeof w=="function"?w.call(y,g,_):w,_==null)break e;g=zt({},g,_);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,_=r.effects,_===null?r.effects=[a]:_.push(a))}else y={eventTime:y,lane:_,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(h=v=y,d=g):v=v.next=y,l|=_;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;_=a,a=_.next,_.next=null,r.lastBaseUpdate=_,r.shared.pending=null}}while(1);if(v===null&&(d=g),r.baseState=d,r.firstBaseUpdate=h,r.lastBaseUpdate=v,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Co|=l,t.lanes=l,t.memoizedState=g}}function vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var F_=new O0.Component().refs;function hh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:zt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uc={isMounted:function(t){return(t=t._reactInternals)?Uo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Rn(),r=Nr(t),o=or(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ur(t,o,r),e!==null&&(Ai(e,t,r,i),Hu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Rn(),r=Nr(t),o=or(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ur(t,o,r),e!==null&&(Ai(e,t,r,i),Hu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rn(),i=Nr(t),r=or(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ur(t,r,i),e!==null&&(Ai(e,t,i,n),Hu(e,t,i))}};function gv(t,e,n,i,r,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,i)||!Qa(r,o):!0}function k_(t,e,n){var i=!1,r=zr,o=e.contextType;return typeof o=="object"&&o!==null?o=di(o):(r=Vn(e)?wo:wn.current,i=e.contextTypes,o=(i=i!=null)?Ns(t,r):zr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function _v(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uc.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=F_,fp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=di(o):(o=Vn(e)?wo:wn.current,r.context=Ns(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(hh(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),hc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var a=r.refs;a===F_&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function uu(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yv(t){var e=t._init;return e(t._payload)}function z_(t){function e(p,E){if(t){var S=p.deletions;S===null?(p.deletions=[E],p.flags|=16):S.push(E)}}function n(p,E){if(!t)return null;for(;E!==null;)e(p,E),E=E.sibling;return null}function i(p,E){for(p=new Map;E!==null;)E.key!==null?p.set(E.key,E):p.set(E.index,E),E=E.sibling;return p}function r(p,E){return p=Fr(p,E),p.index=0,p.sibling=null,p}function o(p,E,S){return p.index=S,t?(S=p.alternate,S!==null?(S=S.index,S<E?(p.flags|=2,E):S):(p.flags|=2,E)):(p.flags|=1048576,E)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,E,S,L){return E===null||E.tag!==6?(E=Kf(S,p.mode,L),E.return=p,E):(E=r(E,S),E.return=p,E)}function d(p,E,S,L){var P=S.type;return P===ds?v(p,E,S.props.children,L,S.key):E!==null&&(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Er&&yv(P)===E.type)?(L=r(E,S.props),L.ref=xa(p,E,S),L.return=p,L):(L=$u(S.type,S.key,S.props,null,p.mode,L),L.ref=xa(p,E,S),L.return=p,L)}function h(p,E,S,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=Zf(S,p.mode,L),E.return=p,E):(E=r(E,S.children||[]),E.return=p,E)}function v(p,E,S,L,P){return E===null||E.tag!==7?(E=xo(S,p.mode,L,P),E.return=p,E):(E=r(E,S),E.return=p,E)}function g(p,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Kf(""+E,p.mode,S),E.return=p,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ql:return S=$u(E.type,E.key,E.props,null,p.mode,S),S.ref=xa(p,null,E),S.return=p,S;case fs:return E=Zf(E,p.mode,S),E.return=p,E;case Er:var L=E._init;return g(p,L(E._payload),S)}if(Pa(E)||ma(E))return E=xo(E,p.mode,S,null),E.return=p,E;uu(p,E)}return null}function _(p,E,S,L){var P=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return P!==null?null:a(p,E,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ql:return S.key===P?d(p,E,S,L):null;case fs:return S.key===P?h(p,E,S,L):null;case Er:return P=S._init,_(p,E,P(S._payload),L)}if(Pa(S)||ma(S))return P!==null?null:v(p,E,S,L,null);uu(p,S)}return null}function y(p,E,S,L,P){if(typeof L=="string"&&L!==""||typeof L=="number")return p=p.get(S)||null,a(E,p,""+L,P);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ql:return p=p.get(L.key===null?S:L.key)||null,d(E,p,L,P);case fs:return p=p.get(L.key===null?S:L.key)||null,h(E,p,L,P);case Er:var U=L._init;return y(p,E,S,U(L._payload),P)}if(Pa(L)||ma(L))return p=p.get(S)||null,v(E,p,L,P,null);uu(E,L)}return null}function w(p,E,S,L){for(var P=null,U=null,B=E,z=E=0,R=null;B!==null&&z<S.length;z++){B.index>z?(R=B,B=null):R=B.sibling;var N=_(p,B,S[z],L);if(N===null){B===null&&(B=R);break}t&&B&&N.alternate===null&&e(p,B),E=o(N,E,z),U===null?P=N:U.sibling=N,U=N,B=R}if(z===S.length)return n(p,B),Ut&&so(p,z),P;if(B===null){for(;z<S.length;z++)B=g(p,S[z],L),B!==null&&(E=o(B,E,z),U===null?P=B:U.sibling=B,U=B);return Ut&&so(p,z),P}for(B=i(p,B);z<S.length;z++)R=y(B,p,z,S[z],L),R!==null&&(t&&R.alternate!==null&&B.delete(R.key===null?z:R.key),E=o(R,E,z),U===null?P=R:U.sibling=R,U=R);return t&&B.forEach(function(ae){return e(p,ae)}),Ut&&so(p,z),P}function A(p,E,S,L){var P=ma(S);if(typeof P!="function")throw Error(Se(150));if(S=P.call(S),S==null)throw Error(Se(151));for(var U=P=null,B=E,z=E=0,R=null,N=S.next();B!==null&&!N.done;z++,N=S.next()){B.index>z?(R=B,B=null):R=B.sibling;var ae=_(p,B,N.value,L);if(ae===null){B===null&&(B=R);break}t&&B&&ae.alternate===null&&e(p,B),E=o(ae,E,z),U===null?P=ae:U.sibling=ae,U=ae,B=R}if(N.done)return n(p,B),Ut&&so(p,z),P;if(B===null){for(;!N.done;z++,N=S.next())N=g(p,N.value,L),N!==null&&(E=o(N,E,z),U===null?P=N:U.sibling=N,U=N);return Ut&&so(p,z),P}for(B=i(p,B);!N.done;z++,N=S.next())N=y(B,p,z,N.value,L),N!==null&&(t&&N.alternate!==null&&B.delete(N.key===null?z:N.key),E=o(N,E,z),U===null?P=N:U.sibling=N,U=N);return t&&B.forEach(function(fe){return e(p,fe)}),Ut&&so(p,z),P}function T(p,E,S,L){if(typeof S=="object"&&S!==null&&S.type===ds&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ql:e:{for(var P=S.key,U=E;U!==null;){if(U.key===P){if(P=S.type,P===ds){if(U.tag===7){n(p,U.sibling),E=r(U,S.props.children),E.return=p,p=E;break e}}else if(U.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Er&&yv(P)===U.type){n(p,U.sibling),E=r(U,S.props),E.ref=xa(p,U,S),E.return=p,p=E;break e}n(p,U);break}else e(p,U);U=U.sibling}S.type===ds?(E=xo(S.props.children,p.mode,L,S.key),E.return=p,p=E):(L=$u(S.type,S.key,S.props,null,p.mode,L),L.ref=xa(p,E,S),L.return=p,p=L)}return l(p);case fs:e:{for(U=S.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(p,E.sibling),E=r(E,S.children||[]),E.return=p,p=E;break e}else{n(p,E);break}else e(p,E);E=E.sibling}E=Zf(S,p.mode,L),E.return=p,p=E}return l(p);case Er:return U=S._init,T(p,E,U(S._payload),L)}if(Pa(S))return w(p,E,S,L);if(ma(S))return A(p,E,S,L);uu(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(p,E.sibling),E=r(E,S),E.return=p,p=E):(n(p,E),E=Kf(S,p.mode,L),E.return=p,p=E),l(p)):n(p,E)}return T}var ks=z_(!0),B_=z_(!1),yl={},Bi=Hr(yl),nl=Hr(yl),il=Hr(yl);function vo(t){if(t===yl)throw Error(Se(174));return t}function dp(t,e){switch(Ct(il,e),Ct(nl,t),Ct(Bi,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xd(e,t)}It(Bi),Ct(Bi,e)}function zs(){It(Bi),It(nl),It(il)}function G_(t){vo(il.current);var e=vo(Bi.current),n=Xd(e,t.type);e!==n&&(Ct(nl,t),Ct(Bi,n))}function hp(t){nl.current===t&&(It(Bi),It(nl))}var Ft=Hr(0);function pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wf=[];function pp(){for(var t=0;t<Wf.length;t++)Wf[t]._workInProgressVersionPrimary=null;Wf.length=0}var Wu=fr.ReactCurrentDispatcher,jf=fr.ReactCurrentBatchConfig,bo=0,kt=null,Zt=null,cn=null,mc=!1,ka=!1,rl=0,kE=0;function _n(){throw Error(Se(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ri(t[n],e[n]))return!1;return!0}function vp(t,e,n,i,r,o){if(bo=o,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wu.current=t===null||t.memoizedState===null?VE:HE,t=n(i,r),ka){o=0;do{if(ka=!1,rl=0,25<=o)throw Error(Se(301));o+=1,cn=Zt=null,e.updateQueue=null,Wu.current=WE,t=n(i,r)}while(ka)}if(Wu.current=vc,e=Zt!==null&&Zt.next!==null,bo=0,cn=Zt=kt=null,mc=!1,e)throw Error(Se(300));return t}function gp(){var t=rl!==0;return rl=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?kt.memoizedState=cn=t:cn=cn.next=t,cn}function hi(){if(Zt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var e=cn===null?kt.memoizedState:cn.next;if(e!==null)cn=e,Zt=t;else{if(t===null)throw Error(Se(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},cn===null?kt.memoizedState=cn=t:cn=cn.next=t}return cn}function ol(t,e){return typeof e=="function"?e(t):e}function Xf(t){var e=hi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Zt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,d=null,h=o;do{var v=h.lane;if((bo&v)===v)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:t(i,h.action);else{var g={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(a=d=g,l=i):d=d.next=g,kt.lanes|=v,Co|=v}h=h.next}while(h!==null&&h!==o);d===null?l=i:d.next=a,Ri(i,e.memoizedState)||(zn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=d,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,kt.lanes|=o,Co|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yf(t){var e=hi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do o=t(o,l.action),l=l.next;while(l!==r);Ri(o,e.memoizedState)||(zn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function V_(){}function H_(t,e){var n=kt,i=hi(),r=e(),o=!Ri(i.memoizedState,r);if(o&&(i.memoizedState=r,zn=!0),i=i.queue,_p(X_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||cn!==null&&cn.memoizedState.tag&1){if(n.flags|=2048,sl(9,j_.bind(null,n,i,r,e),void 0,null),fn===null)throw Error(Se(349));bo&30||W_(n,e,r)}return r}function W_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function j_(t,e,n,i){e.value=n,e.getSnapshot=i,Y_(e)&&q_(t)}function X_(t,e,n){return n(function(){Y_(e)&&q_(t)})}function Y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ri(t,n)}catch{return!0}}function q_(t){var e=ur(t,1);e!==null&&Ai(e,t,1,-1)}function xv(t){var e=Ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:t},e.queue=t,t=t.dispatch=GE.bind(null,kt,t),[e.memoizedState,t]}function sl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $_(){return hi().memoizedState}function ju(t,e,n,i){var r=Ni();kt.flags|=t,r.memoizedState=sl(1|e,n,void 0,i===void 0?null:i)}function Oc(t,e,n,i){var r=hi();i=i===void 0?null:i;var o=void 0;if(Zt!==null){var l=Zt.memoizedState;if(o=l.destroy,i!==null&&mp(i,l.deps)){r.memoizedState=sl(e,n,o,i);return}}kt.flags|=t,r.memoizedState=sl(1|e,n,o,i)}function Sv(t,e){return ju(8390656,8,t,e)}function _p(t,e){return Oc(2048,8,t,e)}function K_(t,e){return Oc(4,2,t,e)}function Z_(t,e){return Oc(4,4,t,e)}function Q_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J_(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,Q_.bind(null,e,t),n)}function yp(){}function ey(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ty(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ny(t,e,n){return bo&21?(Ri(n,e)||(n=o_(),kt.lanes|=n,Co|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zn=!0),t.memoizedState=n)}function zE(t,e){var n=St;St=n!==0&&4>n?n:4,t(!0);var i=jf.transition;jf.transition={};try{t(!1),e()}finally{St=n,jf.transition=i}}function iy(){return hi().memoizedState}function BE(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ry(t))oy(e,n);else if(n=O_(t,e,n,i),n!==null){var r=Rn();Ai(n,t,i,r),sy(n,e,i)}}function GE(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ry(t))oy(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,a=o(l,n);if(r.hasEagerState=!0,r.eagerState=a,Ri(a,l)){var d=e.interleaved;d===null?(r.next=r,cp(e)):(r.next=d.next,d.next=r),e.interleaved=r;return}}catch{}finally{}n=O_(t,e,r,i),n!==null&&(r=Rn(),Ai(n,t,i,r),sy(n,e,i))}}function ry(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function oy(t,e){ka=mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}var vc={readContext:di,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},VE={readContext:di,useCallback:function(t,e){return Ni().memoizedState=[t,e===void 0?null:e],t},useContext:di,useEffect:Sv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ju(4194308,4,Q_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return ju(4,2,t,e)},useMemo:function(t,e){var n=Ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=BE.bind(null,kt,t),[i.memoizedState,t]},useRef:function(t){var e=Ni();return t={current:t},e.memoizedState=t},useState:xv,useDebugValue:yp,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=xv(!1),e=t[0];return t=zE.bind(null,t[1]),Ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=kt,r=Ni();if(Ut){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),fn===null)throw Error(Se(349));bo&30||W_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Sv(X_.bind(null,i,o,t),[t]),i.flags|=2048,sl(9,j_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Ni(),e=fn.identifierPrefix;if(Ut){var n=rr,i=ir;n=(i&~(1<<32-Ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HE={readContext:di,useCallback:ey,useContext:di,useEffect:_p,useImperativeHandle:J_,useInsertionEffect:K_,useLayoutEffect:Z_,useMemo:ty,useReducer:Xf,useRef:$_,useState:function(){return Xf(ol)},useDebugValue:yp,useDeferredValue:function(t){var e=hi();return ny(e,Zt.memoizedState,t)},useTransition:function(){var t=Xf(ol)[0],e=hi().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:H_,useId:iy,unstable_isNewReconciler:!1},WE={readContext:di,useCallback:ey,useContext:di,useEffect:_p,useImperativeHandle:J_,useInsertionEffect:K_,useLayoutEffect:Z_,useMemo:ty,useReducer:Yf,useRef:$_,useState:function(){return Yf(ol)},useDebugValue:yp,useDeferredValue:function(t){var e=hi();return Zt===null?e.memoizedState=t:ny(e,Zt.memoizedState,t)},useTransition:function(){var t=Yf(ol)[0],e=hi().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:H_,useId:iy,unstable_isNewReconciler:!1};function Bs(t,e){try{var n="",i=e;do n+=_M(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function qf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jE=typeof WeakMap=="function"?WeakMap:Map;function ay(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_c||(_c=!0,Th=i),mh(t,e)},n}function ly(t,e,n){n=or(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){mh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Mv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ow.bind(null,t,e,n),e.then(t,t))}function Ev(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var XE=fr.ReactCurrentOwner,zn=!1;function Pn(t,e,n,i){e.child=t===null?B_(e,null,n,i):ks(e,t.child,n,i)}function Tv(t,e,n,i,r){n=n.render;var o=e.ref;return Ps(e,r),i=vp(t,e,n,i,o,r),n=gp(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(Ut&&n&&rp(e),e.flags|=1,Pn(t,e,i,r),e.child)}function bv(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Cp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,uy(t,e,o,i,r)):(t=$u(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(l,i)&&t.ref===e.ref)return cr(t,e,r)}return e.flags|=1,t=Fr(o,i),t.ref=e.ref,t.return=e,e.child=t}function uy(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Qa(o,i)&&t.ref===e.ref)if(zn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(zn=!0);else return e.lanes=t.lanes,cr(t,e,r)}return vh(t,e,n,i,r)}function cy(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Ms,$n),$n|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ct(Ms,$n),$n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ct(Ms,$n),$n|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ct(Ms,$n),$n|=i;return Pn(t,e,r,n),e.child}function fy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,i,r){var o=Vn(n)?wo:wn.current;return o=Ns(e,o),Ps(e,r),n=vp(t,e,n,i,o,r),i=gp(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(Ut&&i&&rp(e),e.flags|=1,Pn(t,e,n,r),e.child)}function Cv(t,e,n,i,r){if(Vn(n)){var o=!0;lc(e)}else o=!1;if(Ps(e,r),e.stateNode===null)Xu(t,e),k_(e,n,i),ph(e,n,i,r),i=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=di(h):(h=Vn(n)?wo:wn.current,h=Ns(e,h));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||d!==h)&&_v(e,l,i,h),wr=!1;var _=e.memoizedState;l.state=_,hc(e,i,l,r),d=e.memoizedState,a!==i||_!==d||Gn.current||wr?(typeof v=="function"&&(hh(e,n,v,i),d=e.memoizedState),(a=wr||gv(e,n,a,i,_,d,h))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),l.props=i,l.state=d,l.context=h,i=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,N_(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:Si(e.type,a),l.props=h,g=e.pendingProps,_=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=di(d):(d=Vn(n)?wo:wn.current,d=Ns(e,d));var y=n.getDerivedStateFromProps;(v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||_!==d)&&_v(e,l,i,d),wr=!1,_=e.memoizedState,l.state=_,hc(e,i,l,r);var w=e.memoizedState;a!==g||_!==w||Gn.current||wr?(typeof y=="function"&&(hh(e,n,y,i),w=e.memoizedState),(h=wr||gv(e,n,h,i,_,w,d)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,w,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=w),l.props=i,l.state=w,l.context=d,i=h):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),i=!1)}return gh(t,e,n,i,o,r)}function gh(t,e,n,i,r,o){fy(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&dv(e,n,!1),cr(t,e,o);i=e.stateNode,XE.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=ks(e,t.child,null,o),e.child=ks(e,null,a,o)):Pn(t,e,a,o),e.memoizedState=i.state,r&&dv(e,n,!0),e.child}function dy(t){var e=t.stateNode;e.pendingContext?fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fv(t,e.context,!1),dp(t,e.containerInfo)}function Av(t,e,n,i,r){return Fs(),sp(r),e.flags|=256,Pn(t,e,n,i),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function hy(t,e,n){var i=e.pendingProps,r=Ft.current,o=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ct(Ft,r&1),t===null)return fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=kc(l,i,0,null),t=xo(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=yh(n),e.memoizedState=_h,t):xp(e,l));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return YE(t,e,l,i,a,r,n);if(o){o=i.fallback,l=e.mode,r=t.child,a=r.sibling;var d={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=d,e.deletions=null):(i=Fr(r,d),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Fr(a,o):(o=xo(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?yh(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=_h,i}return o=t.child,t=o.sibling,i=Fr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xp(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cu(t,e,n,i){return i!==null&&sp(i),ks(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YE(t,e,n,i,r,o,l){if(n)return e.flags&256?(e.flags&=-257,i=qf(Error(Se(422))),cu(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=kc({mode:"visible",children:i.children},r,0,null),o=xo(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ks(e,t.child,null,l),e.child.memoizedState=yh(l),e.memoizedState=_h,o);if(!(e.mode&1))return cu(t,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Se(419)),i=qf(o,i,void 0),cu(t,e,l,i)}if(a=(l&t.childLanes)!==0,zn||a){if(i=fn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ur(t,r),Ai(i,t,r,-1))}return bp(),i=qf(Error(Se(421))),cu(t,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sw.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Kn=Ir(r.nextSibling),Zn=e,Ut=!0,Ei=null,t!==null&&(si[ai++]=ir,si[ai++]=rr,si[ai++]=To,ir=t.id,rr=t.overflow,To=e),e=xp(e,i.children),e.flags|=4096,e)}function Pv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dh(t.return,e,n)}function $f(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function py(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Pn(t,e,i.children,n),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pv(t,n,e);else if(t.tag===19)Pv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ct(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$f(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$f(e,!0,n,null,o);break;case"together":$f(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Co|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qE(t,e,n){switch(e.tag){case 3:dy(e),Fs();break;case 5:G_(e);break;case 1:Vn(e.type)&&lc(e);break;case 4:dp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(fc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(Ft,Ft.current&1),e.flags|=128,null):n&e.child.childLanes?hy(t,e,n):(Ct(Ft,Ft.current&1),t=cr(t,e,n),t!==null?t.sibling:null);Ct(Ft,Ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return py(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,cy(t,e,n)}return cr(t,e,n)}var my,xh,vy,gy;my=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};vy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vo(Bi.current);var o=null;switch(n){case"input":r=Vd(t,r),i=Vd(t,i),o=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),o=[];break;case"textarea":r=jd(t,r),i=jd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sc)}Yd(n,i);var l;n=null;for(h in r)if(!i.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var a=r[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ja.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var d=i[h];if(a=r!=null?r[h]:void 0,i.hasOwnProperty(h)&&d!==a&&(d!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ja.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Rt("scroll",t),o||a===d||(o=[])):(o=o||[]).push(h,d))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};gy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Sa(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function yn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $E(t,e,n){var i=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(e),null;case 1:return Vn(e.type)&&ac(),yn(e),null;case 3:return i=e.stateNode,zs(),It(Gn),It(wn),pp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ei!==null&&(Ah(Ei),Ei=null))),xh(t,e),yn(e),null;case 5:hp(e);var r=vo(il.current);if(n=e.type,t!==null&&e.stateNode!=null)vy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return yn(e),null}if(t=vo(Bi.current),lu(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ki]=e,i[tl]=o,t=(e.mode&1)!==0,n){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)Rt(Da[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":km(i,o),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Rt("invalid",i);break;case"textarea":Bm(i,o),Rt("invalid",i)}Yd(n,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,t),r=["children",""+a]):ja.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Rt("scroll",i)}switch(n){case"input":Jl(i),zm(i,o,!0);break;case"textarea":Jl(i),Gm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[ki]=e,t[tl]=i,my(t,e,!1,!1),e.stateNode=t;e:{switch(l=qd(n,i),n){case"dialog":Rt("cancel",t),Rt("close",t),r=i;break;case"iframe":case"object":case"embed":Rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)Rt(Da[r],t);r=i;break;case"source":Rt("error",t),r=i;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),r=i;break;case"details":Rt("toggle",t),r=i;break;case"input":km(t,i),r=Vd(t,i),Rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Rt("invalid",t);break;case"textarea":Bm(t,i),r=jd(t,i),Rt("invalid",t);break;default:r=i}Yd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?Y0(t,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&j0(t,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Xa(t,d):typeof d=="number"&&Xa(t,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ja.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Rt("scroll",t):d!=null&&Wh(t,o,d,l))}switch(n){case"input":Jl(t),zm(t,i,!1);break;case"textarea":Jl(t),Gm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+kr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ts(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yn(e),null;case 6:if(t&&e.stateNode!=null)gy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=vo(il.current),vo(Bi.current),lu(e)){if(i=e.stateNode,n=e.memoizedProps,i[ki]=e,(o=i.nodeValue!==n)&&(t=Zn,t!==null))switch(t.tag){case 3:au(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&au(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ki]=e,e.stateNode=i}return yn(e),null;case 13:if(It(Ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Kn!==null&&e.mode&1&&!(e.flags&128))U_(),Fs(),e.flags|=98560,o=!1;else if(o=lu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[ki]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yn(e),o=!1}else Ei!==null&&(Ah(Ei),Ei=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Jt===0&&(Jt=3):bp())),e.updateQueue!==null&&(e.flags|=4),yn(e),null);case 4:return zs(),xh(t,e),t===null&&Ja(e.stateNode.containerInfo),yn(e),null;case 10:return up(e.type._context),yn(e),null;case 17:return Vn(e.type)&&ac(),yn(e),null;case 19:if(It(Ft),o=e.memoizedState,o===null)return yn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)Sa(o,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=pc(t),l!==null){for(e.flags|=128,Sa(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ct(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&Wt()>Gs&&(e.flags|=128,i=!0,Sa(o,!1),e.lanes=4194304)}else{if(!i)if(t=pc(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Sa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ut)return yn(e),null}else 2*Wt()-o.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,Sa(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wt(),e.sibling=null,n=Ft.current,Ct(Ft,i?n&1|2:n&1),e):(yn(e),null);case 22:case 23:return Tp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?$n&1073741824&&(yn(e),e.subtreeFlags&6&&(e.flags|=8192)):yn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function KE(t,e){switch(op(e),e.tag){case 1:return Vn(e.type)&&ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),It(Gn),It(wn),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(It(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ft),null;case 4:return zs(),null;case 10:return up(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var fu=!1,Mn=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Gt(t,e,i)}else n.current=null}function Sh(t,e,n){try{n()}catch(i){Gt(t,e,i)}}var Rv=!1;function QE(t,e){if(rh=ic,t=S_(),ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,h=0,v=0,g=t,_=null;t:for(;;){for(var y;g!==n||r!==0&&g.nodeType!==3||(a=l+r),g!==o||i!==0&&g.nodeType!==3||(d=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(y=g.firstChild)!==null;)_=g,g=y;for(;;){if(g===t)break t;if(_===n&&++h===r&&(a=l),_===o&&++v===i&&(d=l),(y=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=y}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(oh={focusedElem:t,selectionRange:n},ic=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){e=Oe;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var A=w.memoizedProps,T=w.memoizedState,p=e.stateNode,E=p.getSnapshotBeforeUpdate(e.elementType===e.type?A:Si(e.type,A),T);p.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(L){Gt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}return w=Rv,Rv=!1,w}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Sh(e,n,o)}r=r.next}while(r!==i)}}function Nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _y(t){var e=t.alternate;e!==null&&(t.alternate=null,_y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ki],delete e[tl],delete e[lh],delete e[UE],delete e[OE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yy(t){return t.tag===5||t.tag===3||t.tag===4}function Dv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sc));else if(i!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}function wh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}var mn=null,Mi=!1;function gr(t,e,n){for(n=n.child;n!==null;)xy(t,e,n),n=n.sibling}function xy(t,e,n){if(zi&&typeof zi.onCommitFiberUnmount=="function")try{zi.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:Mn||Ss(n,e);case 6:var i=mn,r=Mi;mn=null,gr(t,e,n),mn=i,Mi=r,mn!==null&&(Mi?(t=mn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mn.removeChild(n.stateNode));break;case 18:mn!==null&&(Mi?(t=mn,n=n.stateNode,t.nodeType===8?Vf(t.parentNode,n):t.nodeType===1&&Vf(t,n),Ka(t)):Vf(mn,n.stateNode));break;case 4:i=mn,r=Mi,mn=n.stateNode.containerInfo,Mi=!0,gr(t,e,n),mn=i,Mi=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Sh(n,e,l),r=r.next}while(r!==i)}gr(t,e,n);break;case 1:if(!Mn&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Gt(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(Mn=(i=Mn)||n.memoizedState!==null,gr(t,e,n),Mn=i):gr(t,e,n);break;default:gr(t,e,n)}}function Lv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZE),e.forEach(function(i){var r=aw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function mi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,Mi=!1;break e;case 3:mn=a.stateNode.containerInfo,Mi=!0;break e;case 4:mn=a.stateNode.containerInfo,Mi=!0;break e}a=a.return}if(mn===null)throw Error(Se(160));xy(o,l,r),mn=null,Mi=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(h){Gt(r,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sy(e,t),e=e.sibling}function Sy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(e,t),Ui(t),i&4){try{za(3,t,t.return),Nc(3,t)}catch(A){Gt(t,t.return,A)}try{za(5,t,t.return)}catch(A){Gt(t,t.return,A)}}break;case 1:mi(e,t),Ui(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(mi(e,t),Ui(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(A){Gt(t,t.return,A)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&V0(r,o),qd(a,l);var h=qd(a,o);for(l=0;l<d.length;l+=2){var v=d[l],g=d[l+1];v==="style"?Y0(r,g):v==="dangerouslySetInnerHTML"?j0(r,g):v==="children"?Xa(r,g):Wh(r,v,g,h)}switch(a){case"input":Hd(r,o);break;case"textarea":H0(r,o);break;case"select":var _=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Ts(r,!!o.multiple,y,!1):_!==!!o.multiple&&(o.defaultValue!=null?Ts(r,!!o.multiple,o.defaultValue,!0):Ts(r,!!o.multiple,o.multiple?[]:"",!1))}r[tl]=o}catch(A){Gt(t,t.return,A)}}break;case 6:if(mi(e,t),Ui(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(A){Gt(t,t.return,A)}}break;case 3:if(mi(e,t),Ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(A){Gt(t,t.return,A)}break;case 4:mi(e,t),Ui(t);break;case 13:mi(e,t),Ui(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Ep=Wt())),i&4&&Lv(t);break;case 22:if(v=n!==null&&n.memoizedState!==null,t.mode&1?(Mn=(h=Mn)||v,mi(e,t),Mn=h):mi(e,t),Ui(t),i&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!v&&t.mode&1)for(Oe=t,v=t.child;v!==null;){for(g=Oe=v;Oe!==null;){switch(_=Oe,y=_.child,_.tag){case 0:case 11:case 14:case 15:za(4,_,_.return);break;case 1:Ss(_,_.return);var w=_.stateNode;if(typeof w.componentWillUnmount=="function"){i=_,n=_.return;try{e=i,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(A){Gt(i,n,A)}}break;case 5:Ss(_,_.return);break;case 22:if(_.memoizedState!==null){Uv(g);continue}}y!==null?(y.return=_,Oe=y):Uv(g)}v=v.sibling}e:for(v=null,g=t;;){if(g.tag===5){if(v===null){v=g;try{r=g.stateNode,h?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,d=g.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=X0("display",l))}catch(A){Gt(t,t.return,A)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(A){Gt(t,t.return,A)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:mi(e,t),Ui(t),i&4&&Lv(t);break;case 21:break;default:mi(e,t),Ui(t)}}function Ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yy(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var o=Dv(t);wh(t,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=Dv(t);Eh(t,a,l);break;default:throw Error(Se(161))}}catch(d){Gt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JE(t,e,n){Oe=t,My(t)}function My(t,e,n){for(var i=(t.mode&1)!==0;Oe!==null;){var r=Oe,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||fu;if(!l){var a=r.alternate,d=a!==null&&a.memoizedState!==null||Mn;a=fu;var h=Mn;if(fu=l,(Mn=d)&&!h)for(Oe=r;Oe!==null;)l=Oe,d=l.child,l.tag===22&&l.memoizedState!==null?Ov(r):d!==null?(d.return=l,Oe=d):Ov(r);for(;o!==null;)Oe=o,My(o),o=o.sibling;Oe=r,fu=a,Mn=h}Iv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Oe=o):Iv(t)}}function Iv(t){for(;Oe!==null;){var e=Oe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&vv(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vv(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Ka(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Mn||e.flags&512&&Mh(e)}catch(_){Gt(e,e.return,_)}}if(e===t){Oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function Uv(t){for(;Oe!==null;){var e=Oe;if(e===t){Oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function Ov(t){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nc(4,e)}catch(d){Gt(e,n,d)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(d){Gt(e,r,d)}}var o=e.return;try{Mh(e)}catch(d){Gt(e,o,d)}break;case 5:var l=e.return;try{Mh(e)}catch(d){Gt(e,l,d)}}}catch(d){Gt(e,e.return,d)}if(e===t){Oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Oe=a;break}Oe=e.return}}var ew=Math.ceil,gc=fr.ReactCurrentDispatcher,Sp=fr.ReactCurrentOwner,fi=fr.ReactCurrentBatchConfig,vt=0,fn=null,Kt=null,vn=0,$n=0,Ms=Hr(0),Jt=0,al=null,Co=0,Fc=0,Mp=0,Ba=null,Nn=null,Ep=0,Gs=1/0,er=null,_c=!1,Th=null,Or=null,du=!1,Pr=null,yc=0,Ga=0,bh=null,Yu=-1,qu=0;function Rn(){return vt&6?Wt():Yu!==-1?Yu:Yu=Wt()}function Nr(t){return t.mode&1?vt&2&&vn!==0?vn&-vn:FE.transition!==null?(qu===0&&(qu=o_()),qu):(t=St,t!==0||(t=window.event,t=t===void 0?16:d_(t.type)),t):1}function Ai(t,e,n,i){if(50<Ga)throw Ga=0,bh=null,Error(Se(185));vl(t,n,i),(!(vt&2)||t!==fn)&&(t===fn&&(!(vt&2)&&(Fc|=n),Jt===4&&br(t,vn)),Hn(t,i),n===1&&vt===0&&!(e.mode&1)&&(Gs=Wt()+500,Ic&&Wr()))}function Hn(t,e){var n=t.callbackNode;FM(t,e);var i=nc(t,t===fn?vn:0);if(i===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?NE(Nv.bind(null,t)):D_(Nv.bind(null,t)),LE(function(){!(vt&6)&&Wr()}),n=null;else{switch(s_(i)){case 1:n=$h;break;case 4:n=i_;break;case 16:n=tc;break;case 536870912:n=r_;break;default:n=tc}n=Ry(n,Ey.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ey(t,e){if(Yu=-1,qu=0,vt&6)throw Error(Se(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=nc(t,t===fn?vn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xc(t,i);else{e=i;var r=vt;vt|=2;var o=Ty();(fn!==t||vn!==e)&&(er=null,Gs=Wt()+500,yo(t,e));do try{iw();break}catch(a){wy(t,a)}while(1);lp(),gc.current=o,vt=r,Kt!==null?e=0:(fn=null,vn=0,e=Jt)}if(e!==0){if(e===2&&(r=Jd(t),r!==0&&(i=r,e=Ch(t,r))),e===1)throw n=al,yo(t,0),br(t,i),Hn(t,Wt()),n;if(e===6)br(t,i);else{if(r=t.current.alternate,!(i&30)&&!tw(r)&&(e=xc(t,i),e===2&&(o=Jd(t),o!==0&&(i=o,e=Ch(t,o))),e===1))throw n=al,yo(t,0),br(t,i),Hn(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:ao(t,Nn,er);break;case 3:if(br(t,i),(i&130023424)===i&&(e=Ep+500-Wt(),10<e)){if(nc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ah(ao.bind(null,t,Nn,er),e);break}ao(t,Nn,er);break;case 4:if(br(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var l=31-Ci(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ew(i/1960))-i,10<i){t.timeoutHandle=ah(ao.bind(null,t,Nn,er),i);break}ao(t,Nn,er);break;case 5:ao(t,Nn,er);break;default:throw Error(Se(329))}}}return Hn(t,Wt()),t.callbackNode===n?Ey.bind(null,t):null}function Ch(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(yo(t,e).flags|=256),t=xc(t,e),t!==2&&(e=Nn,Nn=n,e!==null&&Ah(e)),t}function Ah(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function tw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Ri(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~Mp,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ci(e),i=1<<n;t[n]=-1,e&=~i}}function Nv(t){if(vt&6)throw Error(Se(327));Rs();var e=nc(t,0);if(!(e&1))return Hn(t,Wt()),null;var n=xc(t,e);if(t.tag!==0&&n===2){var i=Jd(t);i!==0&&(e=i,n=Ch(t,i))}if(n===1)throw n=al,yo(t,0),br(t,e),Hn(t,Wt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ao(t,Nn,er),Hn(t,Wt()),null}function wp(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(Gs=Wt()+500,Ic&&Wr())}}function Ao(t){Pr!==null&&Pr.tag===0&&!(vt&6)&&Rs();var e=vt;vt|=1;var n=fi.transition,i=St;try{if(fi.transition=null,St=1,t)return t()}finally{St=i,fi.transition=n,vt=e,!(vt&6)&&Wr()}}function Tp(){$n=Ms.current,It(Ms)}function yo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DE(n)),Kt!==null)for(n=Kt.return;n!==null;){var i=n;switch(op(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ac();break;case 3:zs(),It(Gn),It(wn),pp();break;case 5:hp(i);break;case 4:zs();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:up(i.type._context);break;case 22:case 23:Tp()}n=n.return}if(fn=t,Kt=t=Fr(t.current,null),vn=$n=e,Jt=0,al=null,Mp=Fc=Co=0,Nn=Ba=null,mo!==null){for(e=0;e<mo.length;e++)if(n=mo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}n.pending=i}mo=null}return t}function wy(t,e){do{var n=Kt;try{if(lp(),Wu.current=vc,mc){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mc=!1}if(bo=0,cn=Zt=kt=null,ka=!1,rl=0,Sp.current=null,n===null||n.return===null){Jt=1,al=e,Kt=null;break}e:{var o=t,l=n.return,a=n,d=e;if(e=vn,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,v=a,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var _=v.alternate;_?(v.updateQueue=_.updateQueue,v.memoizedState=_.memoizedState,v.lanes=_.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Ev(l);if(y!==null){y.flags&=-257,wv(y,l,a,o,e),y.mode&1&&Mv(o,h,e),e=y,d=h;var w=e.updateQueue;if(w===null){var A=new Set;A.add(d),e.updateQueue=A}else w.add(d);break e}else{if(!(e&1)){Mv(o,h,e),bp();break e}d=Error(Se(426))}}else if(Ut&&a.mode&1){var T=Ev(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),wv(T,l,a,o,e),sp(Bs(d,a));break e}}o=d=Bs(d,a),Jt!==4&&(Jt=2),Ba===null?Ba=[o]:Ba.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=ay(o,d,e);mv(o,p);break e;case 1:a=d;var E=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Or===null||!Or.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var L=ly(o,a,e);mv(o,L);break e}}o=o.return}while(o!==null)}Cy(n)}catch(P){e=P,Kt===n&&n!==null&&(Kt=n=n.return);continue}break}while(1)}function Ty(){var t=gc.current;return gc.current=vc,t===null?vc:t}function bp(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),fn===null||!(Co&268435455)&&!(Fc&268435455)||br(fn,vn)}function xc(t,e){var n=vt;vt|=2;var i=Ty();(fn!==t||vn!==e)&&(er=null,yo(t,e));do try{nw();break}catch(r){wy(t,r)}while(1);if(lp(),vt=n,gc.current=i,Kt!==null)throw Error(Se(261));return fn=null,vn=0,Jt}function nw(){for(;Kt!==null;)by(Kt)}function iw(){for(;Kt!==null&&!AM();)by(Kt)}function by(t){var e=Py(t.alternate,t,$n);t.memoizedProps=t.pendingProps,e===null?Cy(t):Kt=e,Sp.current=null}function Cy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KE(n,e),n!==null){n.flags&=32767,Kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Kt=null;return}}else if(n=$E(n,e,$n),n!==null){Kt=n;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);Jt===0&&(Jt=5)}function ao(t,e,n){var i=St,r=fi.transition;try{fi.transition=null,St=1,rw(t,e,n,i)}finally{fi.transition=r,St=i}return null}function rw(t,e,n,i){do Rs();while(Pr!==null);if(vt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(kM(t,o),t===fn&&(Kt=fn=null,vn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||du||(du=!0,Ry(tc,function(){return Rs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=fi.transition,fi.transition=null;var l=St;St=1;var a=vt;vt|=4,Sp.current=null,QE(t,n),Sy(n,t),wE(oh),ic=!!rh,oh=rh=null,t.current=n,JE(n),PM(),vt=a,St=l,fi.transition=o}else t.current=n;if(du&&(du=!1,Pr=t,yc=r),o=t.pendingLanes,o===0&&(Or=null),LM(n.stateNode),Hn(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_c)throw _c=!1,t=Th,Th=null,t;return yc&1&&t.tag!==0&&Rs(),o=t.pendingLanes,o&1?t===bh?Ga++:(Ga=0,bh=t):Ga=0,Wr(),null}function Rs(){if(Pr!==null){var t=s_(yc),e=fi.transition,n=St;try{if(fi.transition=null,St=16>t?16:t,Pr===null)var i=!1;else{if(t=Pr,Pr=null,yc=0,vt&6)throw Error(Se(331));var r=vt;for(vt|=4,Oe=t.current;Oe!==null;){var o=Oe,l=o.child;if(Oe.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var h=a[d];for(Oe=h;Oe!==null;){var v=Oe;switch(v.tag){case 0:case 11:case 15:za(8,v,o)}var g=v.child;if(g!==null)g.return=v,Oe=g;else for(;Oe!==null;){v=Oe;var _=v.sibling,y=v.return;if(_y(v),v===h){Oe=null;break}if(_!==null){_.return=y,Oe=_;break}Oe=y}}}var w=o.alternate;if(w!==null){var A=w.child;if(A!==null){w.child=null;do{var T=A.sibling;A.sibling=null,A=T}while(A!==null)}}Oe=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Oe=l;else e:for(;Oe!==null;){if(o=Oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:za(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Oe=p;break e}Oe=o.return}}var E=t.current;for(Oe=E;Oe!==null;){l=Oe;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,Oe=S;else e:for(l=E;Oe!==null;){if(a=Oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nc(9,a)}}catch(P){Gt(a,a.return,P)}if(a===l){Oe=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,Oe=L;break e}Oe=a.return}}if(vt=r,Wr(),zi&&typeof zi.onPostCommitFiberRoot=="function")try{zi.onPostCommitFiberRoot(Ac,t)}catch{}i=!0}return i}finally{St=n,fi.transition=e}}return!1}function Fv(t,e,n){e=Bs(n,e),e=ay(t,e,1),t=Ur(t,e,1),e=Rn(),t!==null&&(vl(t,1,e),Hn(t,e))}function Gt(t,e,n){if(t.tag===3)Fv(t,t,n);else for(;e!==null;){if(e.tag===3){Fv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){t=Bs(n,t),t=ly(e,t,1),e=Ur(e,t,1),t=Rn(),e!==null&&(vl(e,1,t),Hn(e,t));break}}e=e.return}}function ow(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Rn(),t.pingedLanes|=t.suspendedLanes&n,fn===t&&(vn&n)===n&&(Jt===4||Jt===3&&(vn&130023424)===vn&&500>Wt()-Ep?yo(t,0):Mp|=n),Hn(t,e)}function Ay(t,e){e===0&&(t.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var n=Rn();t=ur(t,e),t!==null&&(vl(t,e,n),Hn(t,n))}function sw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ay(t,n)}function aw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),Ay(t,n)}var Py;Py=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gn.current)zn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zn=!1,qE(t,e,n);zn=!!(t.flags&131072)}else zn=!1,Ut&&e.flags&1048576&&L_(e,cc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xu(t,e),t=e.pendingProps;var r=Ns(e,wn.current);Ps(e,n),r=vp(null,e,i,t,r,n);var o=gp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vn(i)?(o=!0,lc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fp(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,ph(e,i,t,n),e=gh(null,e,i,!0,o,n)):(e.tag=0,Ut&&o&&rp(e),Pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uw(i),t=Si(i,t),r){case 0:e=vh(null,e,i,t,n);break e;case 1:e=Cv(null,e,i,t,n);break e;case 11:e=Tv(null,e,i,t,n);break e;case 14:e=bv(null,e,i,Si(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),vh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Cv(t,e,i,r,n);case 3:e:{if(dy(e),t===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,N_(t,e),hc(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Bs(Error(Se(423)),e),e=Av(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(Se(424)),e),e=Av(t,e,i,n,r);break e}else for(Kn=Ir(e.stateNode.containerInfo.firstChild),Zn=e,Ut=!0,Ei=null,n=B_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=cr(t,e,n);break e}Pn(t,e,i,n)}e=e.child}return e;case 5:return G_(e),t===null&&fh(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,l=r.children,sh(i,r)?l=null:o!==null&&sh(i,o)&&(e.flags|=32),fy(t,e),Pn(t,e,l,n),e.child;case 6:return t===null&&fh(e),null;case 13:return hy(t,e,n);case 4:return dp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Tv(t,e,i,r,n);case 7:return Pn(t,e,e.pendingProps,n),e.child;case 8:return Pn(t,e,e.pendingProps.children,n),e.child;case 12:return Pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Ct(fc,i._currentValue),i._currentValue=l,o!==null)if(Ri(o.value,l)){if(o.children===r.children&&!Gn.current){e=cr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var d=a.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=or(-1,n&-n),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?d.next=d:(d.next=v.next,v.next=d),h.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),dh(o.return,n,e),a.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Se(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),dh(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=di(r),i=i(r),e.flags|=1,Pn(t,e,i,n),e.child;case 14:return i=e.type,r=Si(i,e.pendingProps),r=Si(i.type,r),bv(t,e,i,r,n);case 15:return uy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Xu(t,e),e.tag=1,Vn(i)?(t=!0,lc(e)):t=!1,Ps(e,n),k_(e,i,r),ph(e,i,r,n),gh(null,e,i,!0,t,n);case 19:return py(t,e,n);case 22:return cy(t,e,n)}throw Error(Se(156,e.tag))};function Ry(t,e){return n_(t,e)}function lw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,e,n,i){return new lw(t,e,n,i)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uw(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===Yh)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=ci(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $u(t,e,n,i,r,o){var l=2;if(i=t,typeof t=="function")Cp(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case ds:return xo(n.children,r,o,e);case jh:l=8,r|=8;break;case kd:return t=ci(12,n,e,r|2),t.elementType=kd,t.lanes=o,t;case zd:return t=ci(13,n,e,r),t.elementType=zd,t.lanes=o,t;case Bd:return t=ci(19,n,e,r),t.elementType=Bd,t.lanes=o,t;case z0:return kc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F0:l=10;break e;case k0:l=9;break e;case Xh:l=11;break e;case Yh:l=14;break e;case Er:l=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=ci(l,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function xo(t,e,n,i){return t=ci(7,t,i,e),t.lanes=n,t}function kc(t,e,n,i){return t=ci(22,t,i,e),t.elementType=z0,t.lanes=n,t.stateNode={isHidden:!1},t}function Kf(t,e,n){return t=ci(6,t,null,e),t.lanes=n,t}function Zf(t,e,n){return e=ci(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Df(0),this.expirationTimes=Df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Df(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,i,r,o,l,a,d){return t=new cw(t,e,n,a,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ci(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(o),t}function fw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Dy(t){if(!t)return zr;t=t._reactInternals;e:{if(Uo(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(Vn(n))return R_(t,n,e)}return e}function Ly(t,e,n,i,r,o,l,a,d){return t=Ap(n,i,!0,t,r,o,l,a,d),t.context=Dy(null),n=t.current,i=Rn(),r=Nr(n),o=or(i,r),o.callback=e??null,Ur(n,o,r),t.current.lanes=r,vl(t,r,i),Hn(t,i),t}function zc(t,e,n,i){var r=e.current,o=Rn(),l=Nr(r);return n=Dy(n),e.context===null?e.context=n:e.pendingContext=n,e=or(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ur(r,e,l),t!==null&&(Ai(t,r,l,o),Hu(t,r,l)),l}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pp(t,e){kv(t,e),(t=t.alternate)&&kv(t,e)}function dw(){return null}var Iy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rp(t){this._internalRoot=t}Bc.prototype.render=Rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));zc(t,e,null,null)};Bc.prototype.unmount=Rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ao(function(){zc(null,t,null,null)}),e[lr]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=u_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&f_(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zv(){}function hw(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var h=Sc(l);o.call(h)}}var l=Ly(e,i,t,0,null,!1,!1,"",zv);return t._reactRootContainer=l,t[lr]=l.current,Ja(t.nodeType===8?t.parentNode:t),Ao(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var h=Sc(d);a.call(h)}}var d=Ap(t,0,!1,null,null,!1,!1,"",zv);return t._reactRootContainer=d,t[lr]=d.current,Ja(t.nodeType===8?t.parentNode:t),Ao(function(){zc(e,d,n,i)}),d}function Vc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var d=Sc(l);a.call(d)}}zc(e,l,t,r)}else l=hw(n,e,t,r,i);return Sc(l)}a_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(Kh(e,n|1),Hn(e,Wt()),!(vt&6)&&(Gs=Wt()+500,Wr()))}break;case 13:Ao(function(){var i=ur(t,1);if(i!==null){var r=Rn();Ai(i,t,1,r)}}),Pp(t,1)}};Zh=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Rn();Ai(e,t,134217728,n)}Pp(t,134217728)}};l_=function(t){if(t.tag===13){var e=Nr(t),n=ur(t,e);if(n!==null){var i=Rn();Ai(n,t,e,i)}Pp(t,e)}};u_=function(){return St};c_=function(t,e){var n=St;try{return St=t,e()}finally{St=n}};Kd=function(t,e,n){switch(e){case"input":if(Hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(Se(90));G0(i),Hd(i,r)}}}break;case"textarea":H0(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};K0=wp;Z0=Ao;var pw={usingClientEntryPoint:!1,Events:[_l,vs,Lc,q0,$0,wp]},Ma={findFiberByHostInstance:po,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mw={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Ac=hu.inject(mw),zi=hu}catch{}}Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;Jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(Se(200));return fw(t,e,null,n)};Jn.createRoot=function(t,e){if(!Dp(t))throw Error(Se(299));var n=!1,i="",r=Iy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,i,r),t[lr]=e.current,Ja(t.nodeType===8?t.parentNode:t),new Rp(e)};Jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=e_(e),t=t===null?null:t.stateNode,t};Jn.flushSync=function(t){return Ao(t)};Jn.hydrate=function(t,e,n){if(!Gc(e))throw Error(Se(200));return Vc(null,t,e,!0,n)};Jn.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",l=Iy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=Ly(e,null,t,1,n??null,r,!1,o,l),t[lr]=e.current,Ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bc(e)};Jn.render=function(t,e,n){if(!Gc(e))throw Error(Se(200));return Vc(null,t,e,!1,n)};Jn.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(Se(40));return t._reactRootContainer?(Ao(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Jn.unstable_batchedUpdates=wp;Jn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gc(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return Vc(t,e,n,!1,i)};Jn.version="18.2.0-next-9e3b772b8-20220608";function Uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy)}catch(t){console.error(t)}}Uy(),L0.exports=Jn;var vw=L0.exports,Bv=vw;Nd.createRoot=Bv.createRoot,Nd.hydrateRoot=Bv.hydrateRoot;var Oy={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default=function(s){return!(!s||!s.Window)&&s instanceof s.Window};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.getWindow=function(s){return(0,n.default)(s)?s:(s.ownerDocument||s).defaultView||o.window},i.init=l,i.window=i.realWindow=void 0;var r=void 0;i.realWindow=r;var o=void 0;function l(s){i.realWindow=r=s;var u=s.document.createTextNode("");u.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(u)===u&&(s=s.wrap(s)),i.window=o=s}i.window=o,typeof window<"u"&&window&&l(window);var a={};function d(s){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=function(s){return!!s&&d(s)==="object"},v=function(s){return typeof s=="function"},g={window:function(s){return s===i.window||(0,n.default)(s)},docFrag:function(s){return h(s)&&s.nodeType===11},object:h,func:v,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||d(s)!=="object")return!1;var u=i.getWindow(s)||i.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?s instanceof Element||s instanceof u.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return h(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return h(s)&&s.length!==void 0&&v(s.splice)}};a.default=g;var _={};function y(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.prepared.axis;c==="x"?(u.coords.cur.page.y=u.coords.start.page.y,u.coords.cur.client.y=u.coords.start.client.y,u.coords.velocity.client.y=0,u.coords.velocity.page.y=0):c==="y"&&(u.coords.cur.page.x=u.coords.start.page.x,u.coords.cur.client.x=u.coords.start.client.x,u.coords.velocity.client.x=0,u.coords.velocity.page.x=0)}}function w(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="drag"){var f=c.prepared.axis;if(f==="x"||f==="y"){var m=f==="x"?"y":"x";u.page[m]=c.coords.start.page[m],u.client[m]=c.coords.start.client[m],u.delta[m]=0}}}Object.defineProperty(_,"__esModule",{value:!0}),_.default=void 0;var A={id:"actions/drag",install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.draggable=A.draggable,u.map.drag=A,u.methodDict.drag="draggable",f.actions.drag=A.defaults},listeners:{"interactions:before-action-move":y,"interactions:action-resume":y,"interactions:action-move":w,"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.buttons,m=c.options.drag;if(m&&m.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||f&c.options.drag.mouseButtons))return s.action={name:"drag",axis:m.lockAxis==="start"?m.startAxis:m.lockAxis},!1}},draggable:function(s){return a.default.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):a.default.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:y,move:w,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},T=A;_.default=T;var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var E={init:function(s){var u=s;E.document=u.document,E.DocumentFragment=u.DocumentFragment||S,E.SVGElement=u.SVGElement||S,E.SVGSVGElement=u.SVGSVGElement||S,E.SVGElementInstance=u.SVGElementInstance||S,E.Element=u.Element||S,E.HTMLElement=u.HTMLElement||E.Element,E.Event=u.Event,E.Touch=u.Touch||S,E.PointerEvent=u.PointerEvent||u.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function S(){}var L=E;p.default=L;var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var U={init:function(s){var u=p.default.Element,c=s.navigator||{};U.supportsTouch="ontouchstart"in s||a.default.func(s.DocumentTouch)&&p.default.document instanceof s.DocumentTouch,U.supportsPointerEvent=c.pointerEnabled!==!1&&!!p.default.PointerEvent,U.isIOS=/iP(hone|od|ad)/.test(c.platform),U.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),U.isIe9=/MSIE 9/.test(c.userAgent),U.isOperaMobile=c.appName==="Opera"&&U.supportsTouch&&/Presto/.test(c.userAgent),U.prefixedMatchesSelector="matches"in u.prototype?"matches":"webkitMatchesSelector"in u.prototype?"webkitMatchesSelector":"mozMatchesSelector"in u.prototype?"mozMatchesSelector":"oMatchesSelector"in u.prototype?"oMatchesSelector":"msMatchesSelector",U.pEventTypes=U.supportsPointerEvent?p.default.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,U.wheelEvent=p.default.document&&"onmousewheel"in p.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},B=U;P.default=B;var z={};function R(s){var u=s.parentNode;if(a.default.docFrag(u)){for(;(u=u.host)&&a.default.docFrag(u););return u}return u}function N(s,u){return i.window!==i.realWindow&&(u=u.replace(/\/deep\//g," ")),s[P.default.prefixedMatchesSelector](u)}Object.defineProperty(z,"__esModule",{value:!0}),z.closest=function(s,u){for(;a.default.element(s);){if(N(s,u))return s;s=R(s)}return null},z.getActualElement=function(s){return s.correspondingUseElement||s},z.getElementClientRect=te,z.getElementRect=function(s){var u=te(s);if(!P.default.isIOS7&&u){var c=$(i.getWindow(s));u.left+=c.x,u.right+=c.x,u.top+=c.y,u.bottom+=c.y}return u},z.getPath=function(s){for(var u=[];s;)u.push(s),s=R(s);return u},z.getScrollXY=$,z.indexOfDeepestElement=function(s){for(var u,c=[],f=0;f<s.length;f++){var m=s[f],x=s[u];if(m&&f!==u)if(x){var C=ae(m),M=ae(x);if(C!==m.ownerDocument)if(M!==m.ownerDocument)if(C!==M){c=c.length?c:fe(x);var b=void 0;if(x instanceof p.default.HTMLElement&&m instanceof p.default.SVGElement&&!(m instanceof p.default.SVGSVGElement)){if(m===M)continue;b=m.ownerSVGElement}else b=m;for(var I=fe(b,x.ownerDocument),k=0;I[k]&&I[k]===c[k];)k++;var V=[I[k-1],I[k],c[k]];if(V[0])for(var ee=V[0].lastChild;ee;){if(ee===V[1]){u=f,c=I;break}if(ee===V[2])break;ee=ee.previousSibling}}else ce=m,Z=x,(parseInt(i.getWindow(ce).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(i.getWindow(Z).getComputedStyle(Z).zIndex,10)||0)&&(u=f);else u=f}else u=f}var ce,Z;return u},z.matchesSelector=N,z.matchesUpTo=function(s,u,c){for(;a.default.element(s);){if(N(s,u))return!0;if((s=R(s))===c)return N(s,u)}return!1},z.nodeContains=function(s,u){if(s.contains)return s.contains(u);for(;u;){if(u===s)return!0;u=u.parentNode}return!1},z.parentNode=R,z.trySelector=function(s){return!!a.default.string(s)&&(p.default.document.querySelector(s),!0)};var ae=function(s){return s.parentNode||s.host};function fe(s,u){for(var c,f=[],m=s;(c=ae(m))&&m!==u&&c!==m.ownerDocument;)f.unshift(m),m=c;return f}function $(s){return{x:(s=s||i.window).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop}}function te(s){var u=s instanceof p.default.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return u&&{left:u.left,right:u.right,top:u.top,bottom:u.bottom,width:u.width||u.right-u.left,height:u.height||u.bottom-u.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(s,u){for(var c in u)s[c]=u[c];return s};var ue={};function pe(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function X(s,u,c){return s==="parent"?(0,z.parentNode)(c):s==="self"?u.getRect(c):(0,z.closest)(c,s)}Object.defineProperty(ue,"__esModule",{value:!0}),ue.addEdges=function(s,u,c){s.left&&(u.left+=c.x),s.right&&(u.right+=c.x),s.top&&(u.top+=c.y),s.bottom&&(u.bottom+=c.y),u.width=u.right-u.left,u.height=u.bottom-u.top},ue.getStringOptionResult=X,ue.rectToXY=function(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}},ue.resolveRectLike=function(s,u,c,f){var m,x=s;return a.default.string(x)?x=X(x,u,c):a.default.func(x)&&(x=x.apply(void 0,function(C){if(Array.isArray(C))return pe(C)}(m=f)||function(C){if(typeof Symbol<"u"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}(m)||function(C,M){if(C){if(typeof C=="string")return pe(C,M);var b=Object.prototype.toString.call(C).slice(8,-1);return b==="Object"&&C.constructor&&(b=C.constructor.name),b==="Map"||b==="Set"?Array.from(C):b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?pe(C,M):void 0}}(m)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),a.default.element(x)&&(x=(0,z.getElementRect)(x)),x},ue.tlbrToXywh=function(s){return!s||"x"in s&&"y"in s||((s=(0,j.default)({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s},ue.xywhToTlbr=function(s){return!s||"left"in s&&"top"in s||((s=(0,j.default)({},s)).left=s.x||0,s.top=s.y||0,s.right=s.right||s.left+s.width,s.bottom=s.bottom||s.top+s.height),s};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(s,u,c){var f=s.options[c],m=f&&f.origin||s.options.origin,x=(0,ue.resolveRectLike)(m,s,u,[s&&u]);return(0,ue.rectToXY)(x)||{x:0,y:0}};var ne={};function we(s){return s.trim().split(/ +/)}Object.defineProperty(ne,"__esModule",{value:!0}),ne.default=function s(u,c,f){if(f=f||{},a.default.string(u)&&u.search(" ")!==-1&&(u=we(u)),a.default.array(u))return u.reduce(function(b,I){return(0,j.default)(b,s(I,c,f))},f);if(a.default.object(u)&&(c=u,u=""),a.default.func(c))f[u]=f[u]||[],f[u].push(c);else if(a.default.array(c))for(var m=0;m<c.length;m++){var x;x=c[m],s(u,x,f)}else if(a.default.object(c))for(var C in c){var M=we(C).map(function(b){return"".concat(u).concat(b)});s(M,c[C],f)}return f};var ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=void 0,ve.default=function(s,u){return Math.sqrt(s*s+u*u)};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=function(s,u){s.__set||(s.__set={});var c=function(m){typeof s[m]!="function"&&m!=="__set"&&Object.defineProperty(s,m,{get:function(){return m in s.__set?s.__set[m]:s.__set[m]=u[m]},set:function(x){s.__set[m]=x},configurable:!0})};for(var f in u)c(f);return s};var q={};function Me(s){return s instanceof p.default.Event||s instanceof p.default.Touch}function Ee(s,u,c){return s=s||"page",(c=c||{}).x=u[s+"X"],c.y=u[s+"Y"],c}function H(s,u){return u=u||{x:0,y:0},P.default.isOperaMobile&&Me(s)?(Ee("screen",s,u),u.x+=window.scrollX,u.y+=window.scrollY):Ee("page",s,u),u}function Ke(s,u){return u=u||{},P.default.isOperaMobile&&Me(s)?Ee("screen",s,u):Ee("client",s,u),u}function He(s){var u=[];return a.default.array(s)?(u[0]=s[0],u[1]=s[1]):s.type==="touchend"?s.touches.length===1?(u[0]=s.touches[0],u[1]=s.changedTouches[0]):s.touches.length===0&&(u[0]=s.changedTouches[0],u[1]=s.changedTouches[1]):(u[0]=s.touches[0],u[1]=s.touches[1]),u}function Te(s){for(var u={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<s.length;c++){var f=s[c];for(var m in u)u[m]+=f[m]}for(var x in u)u[x]/=s.length;return u}Object.defineProperty(q,"__esModule",{value:!0}),q.coordsToEvent=function(s){return{coords:s,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},q.copyCoords=function(s,u){s.page=s.page||{},s.page.x=u.page.x,s.page.y=u.page.y,s.client=s.client||{},s.client.x=u.client.x,s.client.y=u.client.y,s.timeStamp=u.timeStamp},q.getClientXY=Ke,q.getEventTargets=function(s){var u=a.default.func(s.composedPath)?s.composedPath():s.path;return[z.getActualElement(u?u[0]:s.target),z.getActualElement(s.currentTarget)]},q.getPageXY=H,q.getPointerId=function(s){return a.default.number(s.pointerId)?s.pointerId:s.identifier},q.getPointerType=function(s){return a.default.string(s.pointerType)?s.pointerType:a.default.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof p.default.Touch?"touch":"mouse"},q.getTouchPair=He,q.getXY=Ee,q.isNativePointer=Me,q.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},q.pointerAverage=Te,Object.defineProperty(q,"pointerExtend",{enumerable:!0,get:function(){return oe.default}}),q.setCoordDeltas=function(s,u,c){s.page.x=c.page.x-u.page.x,s.page.y=c.page.y-u.page.y,s.client.x=c.client.x-u.client.x,s.client.y=c.client.y-u.client.y,s.timeStamp=c.timeStamp-u.timeStamp},q.setCoordVelocity=function(s,u){var c=Math.max(u.timeStamp/1e3,.001);s.page.x=u.page.x/c,s.page.y=u.page.y/c,s.client.x=u.client.x/c,s.client.y=u.client.y/c,s.timeStamp=c},q.setCoords=function(s,u,c){var f=u.length>1?Te(u):u[0];H(f,s.page),Ke(f,s.client),s.timeStamp=c},q.setZeroCoords=function(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0},q.touchAngle=function(s,u){var c=u+"X",f=u+"Y",m=He(s),x=m[1][c]-m[0][c],C=m[1][f]-m[0][f];return 180*Math.atan2(C,x)/Math.PI},q.touchBBox=function(s){if(!s.length)return null;var u=He(s),c=Math.min(u[0].pageX,u[1].pageX),f=Math.min(u[0].pageY,u[1].pageY),m=Math.max(u[0].pageX,u[1].pageX),x=Math.max(u[0].pageY,u[1].pageY);return{x:c,y:f,left:c,top:f,right:m,bottom:x,width:m-c,height:x-f}},q.touchDistance=function(s,u){var c=u+"X",f=u+"Y",m=He(s),x=m[0][c]-m[1][c],C=m[0][f]-m[1][f];return(0,ve.default)(x,C)};var Ge={};function ht(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Be(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Ge,"__esModule",{value:!0}),Ge.BaseEvent=void 0;var Qe=function(){function s(f){(function(m,x){if(!(m instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),Be(this,"immediatePropagationStopped",!1),Be(this,"propagationStopped",!1),this._interaction=f}var u,c;return u=s,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&ht(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Ge.BaseEvent=Qe,Object.defineProperty(Qe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.remove=Ye.merge=Ye.from=Ye.findIndex=Ye.find=Ye.contains=void 0,Ye.contains=function(s,u){return s.indexOf(u)!==-1},Ye.remove=function(s,u){return s.splice(s.indexOf(u),1)};var Tt=function(s,u){for(var c=0;c<u.length;c++){var f=u[c];s.push(f)}return s};Ye.merge=Tt,Ye.from=function(s){return Tt([],s)};var Ot=function(s,u){for(var c=0;c<s.length;c++)if(u(s[c],c,s))return c;return-1};Ye.findIndex=Ot,Ye.find=function(s,u){return s[Ot(s,u)]};var gt={};function lt(s){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},lt(s)}function Mt(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function jt(s,u){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},jt(s,u)}function F(s,u){if(u&&(lt(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D(s)}function D(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function se(s){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},se(s)}function me(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(gt,"__esModule",{value:!0}),gt.DropEvent=void 0;var xe=function(s){(function(M,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(b&&b.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),b&&jt(M,b)})(C,s);var u,c,f,m,x=(f=C,m=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,b=se(f);if(m){var I=se(this).constructor;M=Reflect.construct(b,arguments,I)}else M=b.apply(this,arguments);return F(this,M)});function C(M,b,I){var k;(function(Z,_e){if(!(Z instanceof _e))throw new TypeError("Cannot call a class as a function")})(this,C),me(D(k=x.call(this,b._interaction)),"dropzone",void 0),me(D(k),"dragEvent",void 0),me(D(k),"relatedTarget",void 0),me(D(k),"draggable",void 0),me(D(k),"propagationStopped",!1),me(D(k),"immediatePropagationStopped",!1);var V=I==="dragleave"?M.prev:M.cur,ee=V.element,ce=V.dropzone;return k.type=I,k.target=ee,k.currentTarget=ee,k.dropzone=ce,k.dragEvent=b,k.relatedTarget=b.target,k.draggable=b.interactable,k.timeStamp=b.timeStamp,k}return u=C,(c=[{key:"reject",value:function(){var M=this,b=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&b.cur.dropzone===this.dropzone&&b.cur.element===this.target)if(b.prev.dropzone=this.dropzone,b.prev.element=this.target,b.rejected=!0,b.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var I=b.activeDrops,k=Ye.findIndex(I,function(ee){var ce=ee.dropzone,Z=ee.element;return ce===M.dropzone&&Z===M.target});b.activeDrops.splice(k,1);var V=new C(b,this.dragEvent,"dropdeactivate");V.dropzone=this.dropzone,V.target=this.target,this.dropzone.fire(V)}else this.dropzone.fire(new C(b,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Mt(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Ge.BaseEvent);gt.DropEvent=xe;var be={};function G(s,u){for(var c=0;c<s.slice().length;c++){var f=s.slice()[c],m=f.dropzone,x=f.element;u.dropzone=m,u.target=x,m.fire(u),u.propagationStopped=u.immediatePropagationStopped=!1}}function he(s,u){for(var c=function(x,C){for(var M=x.interactables,b=[],I=0;I<M.list.length;I++){var k=M.list[I];if(k.options.drop.enabled){var V=k.options.drop.accept;if(!(a.default.element(V)&&V!==C||a.default.string(V)&&!z.matchesSelector(C,V)||a.default.func(V)&&!V({dropzone:k,draggableElement:C})))for(var ee=a.default.string(k.target)?k._context.querySelectorAll(k.target):a.default.array(k.target)?k.target:[k.target],ce=0;ce<ee.length;ce++){var Z=ee[ce];Z!==C&&b.push({dropzone:k,element:Z,rect:k.getRect(Z)})}}}return b}(s,u),f=0;f<c.length;f++){var m=c[f];m.rect=m.dropzone.getRect(m.element)}return c}function ie(s,u,c){for(var f=s.dropState,m=s.interactable,x=s.element,C=[],M=0;M<f.activeDrops.length;M++){var b=f.activeDrops[M],I=b.dropzone,k=b.element,V=b.rect;C.push(I.dropCheck(u,c,m,x,k,V)?k:null)}var ee=z.indexOfDeepestElement(C);return f.activeDrops[ee]||null}function Ae(s,u,c){var f=s.dropState,m={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(m.activate=new gt.DropEvent(f,c,"dropactivate"),m.activate.target=null,m.activate.dropzone=null),c.type==="dragend"&&(m.deactivate=new gt.DropEvent(f,c,"dropdeactivate"),m.deactivate.target=null,m.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(m.leave=new gt.DropEvent(f,c,"dragleave"),c.dragLeave=m.leave.target=f.prev.element,c.prevDropzone=m.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(m.enter=new gt.DropEvent(f,c,"dragenter"),c.dragEnter=f.cur.element,c.dropzone=f.cur.dropzone)),c.type==="dragend"&&f.cur.dropzone&&(m.drop=new gt.DropEvent(f,c,"drop"),c.dropzone=f.cur.dropzone,c.relatedTarget=f.cur.element),c.type==="dragmove"&&f.cur.dropzone&&(m.move=new gt.DropEvent(f,c,"dropmove"),m.move.dragmove=c,c.dropzone=f.cur.dropzone)),m}function Ie(s,u){var c=s.dropState,f=c.activeDrops,m=c.cur,x=c.prev;u.leave&&x.dropzone.fire(u.leave),u.enter&&m.dropzone.fire(u.enter),u.move&&m.dropzone.fire(u.move),u.drop&&m.dropzone.fire(u.drop),u.deactivate&&G(f,u.deactivate),c.prev.dropzone=m.dropzone,c.prev.element=m.element}function ze(s,u){var c=s.interaction,f=s.iEvent,m=s.event;if(f.type==="dragmove"||f.type==="dragend"){var x=c.dropState;u.dynamicDrop&&(x.activeDrops=he(u,c.element));var C=f,M=ie(c,C,m);x.rejected=x.rejected&&!!M&&M.dropzone===x.cur.dropzone&&M.element===x.cur.element,x.cur.dropzone=M&&M.dropzone,x.cur.element=M&&M.element,x.events=Ae(c,0,C)}}Object.defineProperty(be,"__esModule",{value:!0}),be.default=void 0;var De={id:"actions/drop",install:function(s){var u=s.actions,c=s.interactStatic,f=s.Interactable,m=s.defaults;s.usePlugin(_.default),f.prototype.dropzone=function(x){return function(C,M){if(a.default.object(M)){if(C.options.drop.enabled=M.enabled!==!1,M.listeners){var b=(0,ne.default)(M.listeners),I=Object.keys(b).reduce(function(k,V){return k[/^(enter|leave)/.test(V)?"drag".concat(V):/^(activate|deactivate|move)/.test(V)?"drop".concat(V):V]=b[V],k},{});C.off(C.options.drop.listeners),C.on(I),C.options.drop.listeners=I}return a.default.func(M.ondrop)&&C.on("drop",M.ondrop),a.default.func(M.ondropactivate)&&C.on("dropactivate",M.ondropactivate),a.default.func(M.ondropdeactivate)&&C.on("dropdeactivate",M.ondropdeactivate),a.default.func(M.ondragenter)&&C.on("dragenter",M.ondragenter),a.default.func(M.ondragleave)&&C.on("dragleave",M.ondragleave),a.default.func(M.ondropmove)&&C.on("dropmove",M.ondropmove),/^(pointer|center)$/.test(M.overlap)?C.options.drop.overlap=M.overlap:a.default.number(M.overlap)&&(C.options.drop.overlap=Math.max(Math.min(1,M.overlap),0)),"accept"in M&&(C.options.drop.accept=M.accept),"checker"in M&&(C.options.drop.checker=M.checker),C}return a.default.bool(M)?(C.options.drop.enabled=M,C):C.options.drop}(this,x)},f.prototype.dropCheck=function(x,C,M,b,I,k){return function(V,ee,ce,Z,_e,Pe,ye){var ke=!1;if(!(ye=ye||V.getRect(Pe)))return!!V.options.drop.checker&&V.options.drop.checker(ee,ce,ke,V,Pe,Z,_e);var Xe=V.options.drop.overlap;if(Xe==="pointer"){var tt=(0,J.default)(Z,_e,"drag"),yt=q.getPageXY(ee);yt.x+=tt.x,yt.y+=tt.y;var bt=yt.x>ye.left&&yt.x<ye.right,ct=yt.y>ye.top&&yt.y<ye.bottom;ke=bt&&ct}var wt=Z.getRect(_e);if(wt&&Xe==="center"){var ri=wt.left+wt.width/2,Xi=wt.top+wt.height/2;ke=ri>=ye.left&&ri<=ye.right&&Xi>=ye.top&&Xi<=ye.bottom}return wt&&a.default.number(Xe)&&(ke=Math.max(0,Math.min(ye.right,wt.right)-Math.max(ye.left,wt.left))*Math.max(0,Math.min(ye.bottom,wt.bottom)-Math.max(ye.top,wt.top))/(wt.width*wt.height)>=Xe),V.options.drop.checker&&(ke=V.options.drop.checker(ee,ce,ke,V,Pe,Z,_e)),ke}(this,x,C,M,b,I,k)},c.dynamicDrop=function(x){return a.default.bool(x)?(s.dynamicDrop=x,c):s.dynamicDrop},(0,j.default)(u.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),u.methodDict.drop="dropzone",s.dynamicDrop=!1,m.actions.drop=De.defaults},listeners:{"interactions:before-action-start":function(s){var u=s.interaction;u.prepared.name==="drag"&&(u.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,u){var c=s.interaction,f=(s.event,s.iEvent);if(c.prepared.name==="drag"){var m=c.dropState;m.activeDrops=null,m.events=null,m.activeDrops=he(u,c.element),m.events=Ae(c,0,f),m.events.activate&&(G(m.activeDrops,m.events.activate),u.fire("actions/drop:start",{interaction:c,dragEvent:f}))}},"interactions:action-move":ze,"interactions:after-action-move":function(s,u){var c=s.interaction,f=s.iEvent;c.prepared.name==="drag"&&(Ie(c,c.dropState.events),u.fire("actions/drop:move",{interaction:c,dragEvent:f}),c.dropState.events={})},"interactions:action-end":function(s,u){if(s.interaction.prepared.name==="drag"){var c=s.interaction,f=s.iEvent;ze(s,u),Ie(c,c.dropState.events),u.fire("actions/drop:end",{interaction:c,dragEvent:f})}},"interactions:stop":function(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:he,getDrop:ie,getDropEvents:Ae,fireDropEvents:Ie,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Fe=De;be.default=Fe;var qe={};function Je(s){var u=s.interaction,c=s.iEvent,f=s.phase;if(u.prepared.name==="gesture"){var m=u.pointers.map(function(I){return I.pointer}),x=f==="start",C=f==="end",M=u.interactable.options.deltaSource;if(c.touches=[m[0],m[1]],x)c.distance=q.touchDistance(m,M),c.box=q.touchBBox(m),c.scale=1,c.ds=0,c.angle=q.touchAngle(m,M),c.da=0,u.gesture.startDistance=c.distance,u.gesture.startAngle=c.angle;else if(C){var b=u.prevEvent;c.distance=b.distance,c.box=b.box,c.scale=b.scale,c.ds=0,c.angle=b.angle,c.da=0}else c.distance=q.touchDistance(m,M),c.box=q.touchBBox(m),c.scale=c.distance/u.gesture.startDistance,c.angle=q.touchAngle(m,M),c.ds=c.scale-u.gesture.scale,c.da=c.angle-u.gesture.angle;u.gesture.distance=c.distance,u.gesture.angle=c.angle,a.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(u.gesture.scale=c.scale)}}Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=void 0;var At={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.gesturable=function(m){return a.default.object(m)?(this.options.gesture.enabled=m.enabled!==!1,this.setPerAction("gesture",m),this.setOnEvents("gesture",m),this):a.default.bool(m)?(this.options.gesture.enabled=m,this):this.options.gesture},u.map.gesture=At,u.methodDict.gesture="gesturable",f.actions.gesture=At.defaults},listeners:{"interactions:action-start":Je,"interactions:action-move":Je,"interactions:action-end":Je,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var u=s.interactable.options.gesture;if(u&&u.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},W=At;qe.default=W;var le={};function ge(s,u,c,f,m,x,C){if(!u)return!1;if(u===!0){var M=a.default.number(x.width)?x.width:x.right-x.left,b=a.default.number(x.height)?x.height:x.bottom-x.top;if(C=Math.min(C,Math.abs((s==="left"||s==="right"?M:b)/2)),M<0&&(s==="left"?s="right":s==="right"&&(s="left")),b<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var I=M>=0?x.left:x.right;return c.x<I+C}if(s==="top"){var k=b>=0?x.top:x.bottom;return c.y<k+C}if(s==="right")return c.x>(M>=0?x.right:x.left)-C;if(s==="bottom")return c.y>(b>=0?x.bottom:x.top)-C}return!!a.default.element(f)&&(a.default.element(u)?u===f:z.matchesUpTo(f,u,m))}function Le(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var f=u;c.interactable.options.resize.square?(c.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=c.resizeAxes,c.resizeAxes==="x"?f.delta.y=0:c.resizeAxes==="y"&&(f.delta.x=0))}}Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;var Ue={id:"actions/resize",before:["actions/drag"],install:function(s){var u=s.actions,c=s.browser,f=s.Interactable,m=s.defaults;Ue.cursors=function(x){return x.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Ue.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,f.prototype.resizable=function(x){return function(C,M,b){return a.default.object(M)?(C.options.resize.enabled=M.enabled!==!1,C.setPerAction("resize",M),C.setOnEvents("resize",M),a.default.string(M.axis)&&/^x$|^y$|^xy$/.test(M.axis)?C.options.resize.axis=M.axis:M.axis===null&&(C.options.resize.axis=b.defaults.actions.resize.axis),a.default.bool(M.preserveAspectRatio)?C.options.resize.preserveAspectRatio=M.preserveAspectRatio:a.default.bool(M.square)&&(C.options.resize.square=M.square),C):a.default.bool(M)?(C.options.resize.enabled=M,C):C.options.resize}(this,x,s)},u.map.resize=Ue,u.methodDict.resize="resizable",m.actions.resize=Ue.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var m=c,x=f.rect;f._rects={start:(0,j.default)({},x),corrected:(0,j.default)({},x),previous:(0,j.default)({},x),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},m.edges=f.prepared.edges,m.rect=f._rects.corrected,m.deltaRect=f._rects.delta}})(s),Le(s)},"interactions:action-move":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var m=c,x=f.interactable.options.resize.invert,C=x==="reposition"||x==="negate",M=f.rect,b=f._rects,I=b.start,k=b.corrected,V=b.delta,ee=b.previous;if((0,j.default)(ee,k),C){if((0,j.default)(k,M),x==="reposition"){if(k.top>k.bottom){var ce=k.top;k.top=k.bottom,k.bottom=ce}if(k.left>k.right){var Z=k.left;k.left=k.right,k.right=Z}}}else k.top=Math.min(M.top,I.bottom),k.bottom=Math.max(M.bottom,I.top),k.left=Math.min(M.left,I.right),k.right=Math.max(M.right,I.left);for(var _e in k.width=k.right-k.left,k.height=k.bottom-k.top,k)V[_e]=k[_e]-ee[_e];m.edges=f.prepared.edges,m.rect=k,m.deltaRect=V}})(s),Le(s)},"interactions:action-end":function(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var f=u;f.edges=c.prepared.edges,f.rect=c._rects.corrected,f.deltaRect=c._rects.delta}},"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.element,m=s.rect,x=s.buttons;if(m){var C=(0,j.default)({},u.coords.cur.page),M=c.options.resize;if(M&&M.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||x&M.mouseButtons)){if(a.default.object(M.edges)){var b={left:!1,right:!1,top:!1,bottom:!1};for(var I in b)b[I]=ge(I,M.edges[I],C,u._latestPointer.eventTarget,f,m,M.margin||Ue.defaultMargin);b.left=b.left&&!b.right,b.top=b.top&&!b.bottom,(b.left||b.right||b.top||b.bottom)&&(s.action={name:"resize",edges:b})}else{var k=M.axis!=="y"&&C.x>m.right-Ue.defaultMargin,V=M.axis!=="x"&&C.y>m.bottom-Ue.defaultMargin;(k||V)&&(s.action={name:"resize",axes:(k?"x":"")+(V?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var u=s.edges,c=s.axis,f=s.name,m=Ue.cursors,x=null;if(c)x=m[f+c];else if(u){for(var C="",M=["top","bottom","left","right"],b=0;b<M.length;b++){var I=M[b];u[I]&&(C+=I)}x=m[C]}return x},defaultMargin:null},xt=Ue;le.default=xt;var pt={};Object.defineProperty(pt,"__esModule",{value:!0}),pt.default=void 0;var on={id:"actions",install:function(s){s.usePlugin(qe.default),s.usePlugin(le.default),s.usePlugin(_.default),s.usePlugin(be.default)}};pt.default=on;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var _t,Yt,jn=0,No={request:function(s){return _t(s)},cancel:function(s){return Yt(s)},init:function(s){if(_t=s.requestAnimationFrame,Yt=s.cancelAnimationFrame,!_t)for(var u=["ms","moz","webkit","o"],c=0;c<u.length;c++){var f=u[c];_t=s["".concat(f,"RequestAnimationFrame")],Yt=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}_t=_t&&_t.bind(s),Yt=Yt&&Yt.bind(s),_t||(_t=function(m){var x=Date.now(),C=Math.max(0,16-(x-jn)),M=s.setTimeout(function(){m(x+C)},C);return jn=x+C,M},Yt=function(m){return clearTimeout(m)})}};Xt.default=No;var ti={};Object.defineProperty(ti,"__esModule",{value:!0}),ti.default=void 0,ti.getContainer=Fo,ti.getScroll=Yr,ti.getScrollSize=function(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollWidth,y:s.scrollHeight}},ti.getScrollSizeDelta=function(s,u){var c=s.interaction,f=s.element,m=c&&c.interactable.options[c.prepared.name].autoScroll;if(!m||!m.enabled)return u(),{x:0,y:0};var x=Fo(m.container,c.interactable,f),C=Yr(x);u();var M=Yr(x);return{x:M.x-C.x,y:M.y-C.y}};var $e={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){$e.isScrolling=!0,Xt.default.cancel($e.i),s.autoScroll=$e,$e.interaction=s,$e.prevTime=$e.now(),$e.i=Xt.default.request($e.scroll)},stop:function(){$e.isScrolling=!1,$e.interaction&&($e.interaction.autoScroll=null),Xt.default.cancel($e.i)},scroll:function(){var s=$e.interaction,u=s.interactable,c=s.element,f=s.prepared.name,m=u.options[f].autoScroll,x=Fo(m.container,u,c),C=$e.now(),M=(C-$e.prevTime)/1e3,b=m.speed*M;if(b>=1){var I={x:$e.x*b,y:$e.y*b};if(I.x||I.y){var k=Yr(x);a.default.window(x)?x.scrollBy(I.x,I.y):x&&(x.scrollLeft+=I.x,x.scrollTop+=I.y);var V=Yr(x),ee={x:V.x-k.x,y:V.y-k.y};(ee.x||ee.y)&&u.fire({type:"autoscroll",target:c,interactable:u,delta:ee,interaction:s,container:x})}$e.prevTime=C}$e.isScrolling&&(Xt.default.cancel($e.i),$e.i=Xt.default.request($e.scroll))},check:function(s,u){var c;return(c=s.options[u].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(s){var u=s.interaction,c=s.pointer;if(u.interacting()&&$e.check(u.interactable,u.prepared.name))if(u.simulation)$e.x=$e.y=0;else{var f,m,x,C,M=u.interactable,b=u.element,I=u.prepared.name,k=M.options[I].autoScroll,V=Fo(k.container,M,b);if(a.default.window(V))C=c.clientX<$e.margin,f=c.clientY<$e.margin,m=c.clientX>V.innerWidth-$e.margin,x=c.clientY>V.innerHeight-$e.margin;else{var ee=z.getElementClientRect(V);C=c.clientX<ee.left+$e.margin,f=c.clientY<ee.top+$e.margin,m=c.clientX>ee.right-$e.margin,x=c.clientY>ee.bottom-$e.margin}$e.x=m?1:C?-1:0,$e.y=x?1:f?-1:0,$e.isScrolling||($e.margin=k.margin,$e.speed=k.speed,$e.start(u))}}};function Fo(s,u,c){return(a.default.string(s)?(0,ue.getStringOptionResult)(s,u,c):s)||(0,i.getWindow)(c)}function Yr(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var O={id:"auto-scroll",install:function(s){var u=s.defaults,c=s.actions;s.autoScroll=$e,$e.now=function(){return s.now()},c.phaselessTypes.autoscroll=!0,u.perAction.autoScroll=$e.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,$e.stop(),$e.interaction&&($e.interaction=null)},"interactions:stop":$e.stop,"interactions:action-move":function(s){return $e.onInteractionMove(s)}}},Q=O;ti.default=Q;var re={};Object.defineProperty(re,"__esModule",{value:!0}),re.copyAction=function(s,u){return s.name=u.name,s.axis=u.axis,s.edges=u.edges,s},re.sign=void 0,re.warnOnce=function(s,u){var c=!1;return function(){return c||(i.window.console.warn(u),c=!0),s.apply(this,arguments)}},re.sign=function(s){return s>=0?1:-1};var K={};function de(s){return a.default.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ve(s){return a.default.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;var We={id:"auto-start/interactableMethods",install:function(s){var u=s.Interactable;u.prototype.getAction=function(c,f,m,x){var C=function(M,b,I,k,V){var ee=M.getRect(k),ce={action:null,interactable:M,interaction:I,element:k,rect:ee,buttons:b.buttons||{0:1,1:4,3:8,4:16}[b.button]};return V.fire("auto-start:check",ce),ce.action}(this,f,m,x,s);return this.options.actionChecker?this.options.actionChecker(c,f,C,this,x,m):C},u.prototype.ignoreFrom=(0,re.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),u.prototype.allowFrom=(0,re.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),u.prototype.actionChecker=Ve,u.prototype.styleCursor=de}};K.default=We;var je={};function et(s,u,c,f,m){return u.testIgnoreAllow(u.options[s.name],c,f)&&u.options[s.name].enabled&&mt(u,c,s,m)?s:null}function rt(s,u,c,f,m,x,C){for(var M=0,b=f.length;M<b;M++){var I=f[M],k=m[M],V=I.getAction(u,c,s,k);if(V){var ee=et(V,I,k,x,C);if(ee)return{action:ee,interactable:I,element:k}}}return{action:null,interactable:null,element:null}}function nt(s,u,c,f,m){var x=[],C=[],M=f;function b(k){x.push(k),C.push(M)}for(;a.default.element(M);){x=[],C=[],m.interactables.forEachMatch(M,b);var I=rt(s,u,c,x,C,f,m);if(I.action&&!I.interactable.options[I.action.name].manualStart)return I;M=z.parentNode(M)}return{action:null,interactable:null,element:null}}function ot(s,u,c){var f=u.action,m=u.interactable,x=u.element;f=f||{name:null},s.interactable=m,s.element=x,(0,re.copyAction)(s.prepared,f),s.rect=m&&f.name?m.getRect(x):null,Li(s,c),c.fire("autoStart:prepared",{interaction:s})}function mt(s,u,c,f){var m=s.options,x=m[c.name].max,C=m[c.name].maxPerElement,M=f.autoStart.maxInteractions,b=0,I=0,k=0;if(!(x&&C&&M))return!1;for(var V=0;V<f.interactions.list.length;V++){var ee=f.interactions.list[V],ce=ee.prepared.name;if(ee.interacting()&&(++b>=M||ee.interactable===s&&((I+=ce===c.name?1:0)>=x||ee.element===u&&(k++,ce===c.name&&k>=C))))return!1}return M>0}function sn(s,u){return a.default.number(s)?(u.autoStart.maxInteractions=s,this):u.autoStart.maxInteractions}function Tn(s,u,c){var f=c.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=u,s.style.cursor=u,c.autoStart.cursorElement=u?s:null}function Li(s,u){var c=s.interactable,f=s.element,m=s.prepared;if(s.pointerType==="mouse"&&c&&c.options.styleCursor){var x="";if(m.name){var C=c.options[m.name].cursorChecker;x=a.default.func(C)?C(m,c,f,s._interacting):u.actions.map[m.name].getCursor(m)}Tn(s.element,x||"",u)}else u.autoStart.cursorElement&&Tn(u.autoStart.cursorElement,"",u)}Object.defineProperty(je,"__esModule",{value:!0}),je.default=void 0;var Bt={id:"auto-start/base",before:["actions"],install:function(s){var u=s.interactStatic,c=s.defaults;s.usePlugin(K.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,j.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),u.maxInteractions=function(f){return sn(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:mt,cursorElement:null}},listeners:{"interactions:down":function(s,u){var c=s.interaction,f=s.pointer,m=s.event,x=s.eventTarget;c.interacting()||ot(c,nt(c,f,m,x,u),u)},"interactions:move":function(s,u){(function(c,f){var m=c.interaction,x=c.pointer,C=c.event,M=c.eventTarget;m.pointerType!=="mouse"||m.pointerIsDown||m.interacting()||ot(m,nt(m,x,C,M,f),f)})(s,u),function(c,f){var m=c.interaction;if(m.pointerIsDown&&!m.interacting()&&m.pointerWasMoved&&m.prepared.name){f.fire("autoStart:before-start",c);var x=m.interactable,C=m.prepared.name;C&&x&&(x.options[C].manualStart||!mt(x,m.element,m.prepared,f)?m.stop():(m.start(m.prepared,x,m.element),Li(m,f)))}}(s,u)},"interactions:stop":function(s,u){var c=s.interaction,f=c.interactable;f&&f.options.styleCursor&&Tn(c.element,"",u)}},maxInteractions:sn,withinInteractionLimit:mt,validateAction:et},ut=Bt;je.default=ut;var dr={};Object.defineProperty(dr,"__esModule",{value:!0}),dr.default=void 0;var qt={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,u){var c=s.interaction,f=s.eventTarget,m=s.dx,x=s.dy;if(c.prepared.name==="drag"){var C=Math.abs(m),M=Math.abs(x),b=c.interactable.options.drag,I=b.startAxis,k=C>M?"x":C<M?"y":"xy";if(c.prepared.axis=b.lockAxis==="start"?k[0]:b.lockAxis,k!=="xy"&&I!=="xy"&&I!==k){c.prepared.name=null;for(var V=f,ee=function(Z){if(Z!==c.interactable){var _e=c.interactable.options.drag;if(!_e.manualStart&&Z.testIgnoreAllow(_e,V,f)){var Pe=Z.getAction(c.downPointer,c.downEvent,c,V);if(Pe&&Pe.name==="drag"&&function(ye,ke){if(!ke)return!1;var Xe=ke.options.drag.startAxis;return ye==="xy"||Xe==="xy"||Xe===ye}(k,Z)&&je.default.validateAction(Pe,Z,V,f,u))return Z}}};a.default.element(V);){var ce=u.interactables.forEachMatch(V,ee);if(ce){c.prepared.name="drag",c.interactable=ce,c.element=V;break}V=(0,z.parentNode)(V)}}}}}};dr.default=qt;var ni={};function ko(s){var u=s.prepared&&s.prepared.name;if(!u)return null;var c=s.interactable.options;return c[u].hold||c[u].delay}Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=void 0;var qr={id:"auto-start/hold",install:function(s){var u=s.defaults;s.usePlugin(je.default),u.perAction.hold=0,u.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var u=s.interaction,c=ko(u);c>0&&(u.autoStartHoldTimer=setTimeout(function(){u.start(u.prepared,u.interactable,u.element)},c))},"interactions:move":function(s){var u=s.interaction,c=s.duplicate;u.autoStartHoldTimer&&u.pointerWasMoved&&!c&&(clearTimeout(u.autoStartHoldTimer),u.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var u=s.interaction;ko(u)>0&&(u.prepared.name=null)}},getHoldDuration:ko},Qs=qr;ni.default=Qs;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.default=void 0;var Hi={id:"auto-start",install:function(s){s.usePlugin(je.default),s.usePlugin(ni.default),s.usePlugin(dr.default)}};Ht.default=Hi;var pi={};function bn(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):a.default.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault}function Js(s){var u=s.interaction,c=s.event;u.interactable&&u.interactable.checkAndPreventDefault(c)}function Cl(s){var u=s.Interactable;u.prototype.preventDefault=bn,u.prototype.checkAndPreventDefault=function(c){return function(f,m,x){var C=f.options.preventDefault;if(C!=="never")if(C!=="always"){if(m.events.supportsPassive&&/^touch(start|move)$/.test(x.type)){var M=(0,i.getWindow)(x.target).document,b=m.getDocOptions(M);if(!b||!b.events||b.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(x.type)||a.default.element(x.target)&&(0,z.matchesSelector)(x.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||x.preventDefault()}else x.preventDefault()}(this,s,c)},s.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var f=0;f<s.interactions.list.length;f++){var m=s.interactions.list[f];if(m.element&&(m.element===c.target||(0,z.nodeContains)(m.element,c.target)))return void m.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(pi,"__esModule",{value:!0}),pi.default=void 0,pi.install=Cl;var Al={id:"core/interactablePreventDefault",install:Cl,listeners:["down","move","up","cancel"].reduce(function(s,u){return s["interactions:".concat(u)]=Js,s},{})};pi.default=Al;var Zc={};Object.defineProperty(Zc,"__esModule",{value:!0}),Zc.default=void 0,Zc.default={};var ea,Pl={};Object.defineProperty(Pl,"__esModule",{value:!0}),Pl.default=void 0,function(s){s.touchAction="touchAction",s.boxSizing="boxSizing",s.noListeners="noListeners"}(ea||(ea={})),ea.touchAction,ea.boxSizing,ea.noListeners;var Tx={id:"dev-tools",install:function(){}};Pl.default=Tx;var $r={};Object.defineProperty($r,"__esModule",{value:!0}),$r.default=function s(u){var c={};for(var f in u){var m=u[f];a.default.plainObject(m)?c[f]=s(m):a.default.array(m)?c[f]=Ye.from(m):c[f]=m}return c};var Kr={};function Wp(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var x,C,M=[],b=!0,I=!1;try{for(m=m.call(c);!(b=(x=m.next()).done)&&(M.push(x.value),!f||M.length!==f);b=!0);}catch(k){I=!0,C=k}finally{try{b||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return jp(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?jp(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function jp(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function bx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Zr(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.default=void 0,Kr.getRectOffset=Xp;var Cx=function(){function s(f){(function(m,x){if(!(m instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),Zr(this,"states",[]),Zr(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Zr(this,"startDelta",void 0),Zr(this,"result",void 0),Zr(this,"endResult",void 0),Zr(this,"edges",void 0),Zr(this,"interaction",void 0),this.interaction=f,this.result=Rl()}var u,c;return u=s,(c=[{key:"start",value:function(f,m){var x=f.phase,C=this.interaction,M=function(I){var k=I.interactable.options[I.prepared.name],V=k.modifiers;return V&&V.length?V:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var ce=k[ee];return ce&&ce.enabled&&{options:ce,methods:ce._methods}}).filter(function(ee){return!!ee})}(C);this.prepareStates(M),this.edges=(0,j.default)({},C.edges),this.startOffset=Xp(C.rect,m),this.startDelta={x:0,y:0};var b=this.fillArg({phase:x,pageCoords:m,preEnd:!1});return this.result=Rl(),this.startAll(b),this.result=this.setAll(b)}},{key:"fillArg",value:function(f){var m=this.interaction;return f.interaction=m,f.interactable=m.interactable,f.element=m.element,f.rect=f.rect||m.rect,f.edges=this.edges,f.startOffset=this.startOffset,f}},{key:"startAll",value:function(f){for(var m=0;m<this.states.length;m++){var x=this.states[m];x.methods.start&&(f.state=x,x.methods.start(f))}}},{key:"setAll",value:function(f){var m=f.phase,x=f.preEnd,C=f.skipModifiers,M=f.rect;f.coords=(0,j.default)({},f.pageCoords),f.rect=(0,j.default)({},M);for(var b=C?this.states.slice(C):this.states,I=Rl(f.coords,f.rect),k=0;k<b.length;k++){var V,ee=b[k],ce=ee.options,Z=(0,j.default)({},f.coords),_e=null;(V=ee.methods)!=null&&V.set&&this.shouldDo(ce,x,m)&&(f.state=ee,_e=ee.methods.set(f),ue.addEdges(this.interaction.edges,f.rect,{x:f.coords.x-Z.x,y:f.coords.y-Z.y})),I.eventProps.push(_e)}I.delta.x=f.coords.x-f.pageCoords.x,I.delta.y=f.coords.y-f.pageCoords.y,I.rectDelta.left=f.rect.left-M.left,I.rectDelta.right=f.rect.right-M.right,I.rectDelta.top=f.rect.top-M.top,I.rectDelta.bottom=f.rect.bottom-M.bottom;var Pe=this.result.coords,ye=this.result.rect;if(Pe&&ye){var ke=I.rect.left!==ye.left||I.rect.right!==ye.right||I.rect.top!==ye.top||I.rect.bottom!==ye.bottom;I.changed=ke||Pe.x!==I.coords.x||Pe.y!==I.coords.y}return I}},{key:"applyToInteraction",value:function(f){var m=this.interaction,x=f.phase,C=m.coords.cur,M=m.coords.start,b=this.result,I=this.startDelta,k=b.delta;x==="start"&&(0,j.default)(this.startDelta,b.delta);for(var V=0;V<[[M,I],[C,k]].length;V++){var ee=Wp([[M,I],[C,k]][V],2),ce=ee[0],Z=ee[1];ce.page.x+=Z.x,ce.page.y+=Z.y,ce.client.x+=Z.x,ce.client.y+=Z.y}var _e=this.result.rectDelta,Pe=f.rect||m.rect;Pe.left+=_e.left,Pe.right+=_e.right,Pe.top+=_e.top,Pe.bottom+=_e.bottom,Pe.width=Pe.right-Pe.left,Pe.height=Pe.bottom-Pe.top}},{key:"setAndApply",value:function(f){var m=this.interaction,x=f.phase,C=f.preEnd,M=f.skipModifiers,b=this.setAll(this.fillArg({preEnd:C,phase:x,pageCoords:f.modifiedCoords||m.coords.cur.page}));if(this.result=b,!b.changed&&(!M||M<this.states.length)&&m.interacting())return!1;if(f.modifiedCoords){var I=m.coords.cur.page,k={x:f.modifiedCoords.x-I.x,y:f.modifiedCoords.y-I.y};b.coords.x+=k.x,b.coords.y+=k.y,b.delta.x+=k.x,b.delta.y+=k.y}this.applyToInteraction(f)}},{key:"beforeEnd",value:function(f){var m=f.interaction,x=f.event,C=this.states;if(C&&C.length){for(var M=!1,b=0;b<C.length;b++){var I=C[b];f.state=I;var k=I.options,V=I.methods,ee=V.beforeEnd&&V.beforeEnd(f);if(ee)return this.endResult=ee,!1;M=M||!M&&this.shouldDo(k,!0,f.phase,!0)}M&&m.move({event:x,preEnd:!0})}}},{key:"stop",value:function(f){var m=f.interaction;if(this.states&&this.states.length){var x=(0,j.default)({states:this.states,interactable:m.interactable,element:m.element,rect:null},f);this.fillArg(x);for(var C=0;C<this.states.length;C++){var M=this.states[C];x.state=M,M.methods.stop&&M.methods.stop(x)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(f){this.states=[];for(var m=0;m<f.length;m++){var x=f[m],C=x.options,M=x.methods,b=x.name;this.states.push({options:C,methods:M,index:m,name:b})}return this.states}},{key:"restoreInteractionCoords",value:function(f){var m=f.interaction,x=m.coords,C=m.rect,M=m.modification;if(M.result){for(var b=M.startDelta,I=M.result,k=I.delta,V=I.rectDelta,ee=[[x.start,b],[x.cur,k]],ce=0;ce<ee.length;ce++){var Z=Wp(ee[ce],2),_e=Z[0],Pe=Z[1];_e.page.x-=Pe.x,_e.page.y-=Pe.y,_e.client.x-=Pe.x,_e.client.y-=Pe.y}C.left-=V.left,C.right-=V.right,C.top-=V.top,C.bottom-=V.bottom}}},{key:"shouldDo",value:function(f,m,x,C){return!(!f||f.enabled===!1||C&&!f.endOnly||f.endOnly&&!m||x==="start"&&!f.setStart)}},{key:"copyFrom",value:function(f){this.startOffset=f.startOffset,this.startDelta=f.startDelta,this.edges=f.edges,this.states=f.states.map(function(m){return(0,$r.default)(m)}),this.result=Rl((0,j.default)({},f.result.coords),(0,j.default)({},f.result.rect))}},{key:"destroy",value:function(){for(var f in this)this[f]=null}}])&&bx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Rl(s,u){return{rect:u,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Xp(s,u){return s?{left:u.x-s.left,top:u.y-s.top,right:s.right-u.x,bottom:s.bottom-u.y}:{left:0,top:0,right:0,bottom:0}}Kr.default=Cx;var dn={};function Dl(s){var u=s.iEvent,c=s.interaction.modification.result;c&&(u.modifiers=c.eventProps)}Object.defineProperty(dn,"__esModule",{value:!0}),dn.addEventModifiers=Dl,dn.default=void 0,dn.makeModifier=function(s,u){var c=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},m=function(x){var C=x||{};for(var M in C.enabled=C.enabled!==!1,c)M in C||(C[M]=c[M]);var b={options:C,methods:f,name:u,enable:function(){return C.enabled=!0,b},disable:function(){return C.enabled=!1,b}};return b};return u&&typeof u=="string"&&(m._defaults=c,m._methods=f),m};var Ax={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var u=s.interaction;u.modification=new Kr.default(u)},"interactions:before-action-start":function(s){var u=s.interaction.modification;u.start(s,s.interaction.coords.start.page),s.interaction.edges=u.edges,u.applyToInteraction(s)},"interactions:before-action-move":function(s){return s.interaction.modification.setAndApply(s)},"interactions:before-action-end":function(s){return s.interaction.modification.beforeEnd(s)},"interactions:action-start":Dl,"interactions:action-move":Dl,"interactions:action-end":Dl,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},Px=Ax;dn.default=Px;var ta={};Object.defineProperty(ta,"__esModule",{value:!0}),ta.defaults=void 0,ta.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var na={};function Qc(s){return Qc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Qc(s)}function Rx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Jc(s,u){return Jc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},Jc(s,u)}function Dx(s,u){if(u&&(Qc(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Et(s)}function Et(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ll(s){return Ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Ll(s)}function Pt(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(na,"__esModule",{value:!0}),na.InteractEvent=void 0;var Yp=function(s){(function(M,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(b&&b.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),b&&Jc(M,b)})(C,s);var u,c,f,m,x=(f=C,m=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,b=Ll(f);if(m){var I=Ll(this).constructor;M=Reflect.construct(b,arguments,I)}else M=b.apply(this,arguments);return Dx(this,M)});function C(M,b,I,k,V,ee,ce){var Z;(function(bt,ct){if(!(bt instanceof ct))throw new TypeError("Cannot call a class as a function")})(this,C),Pt(Et(Z=x.call(this,M)),"relatedTarget",null),Pt(Et(Z),"screenX",void 0),Pt(Et(Z),"screenY",void 0),Pt(Et(Z),"button",void 0),Pt(Et(Z),"buttons",void 0),Pt(Et(Z),"ctrlKey",void 0),Pt(Et(Z),"shiftKey",void 0),Pt(Et(Z),"altKey",void 0),Pt(Et(Z),"metaKey",void 0),Pt(Et(Z),"page",void 0),Pt(Et(Z),"client",void 0),Pt(Et(Z),"delta",void 0),Pt(Et(Z),"rect",void 0),Pt(Et(Z),"x0",void 0),Pt(Et(Z),"y0",void 0),Pt(Et(Z),"t0",void 0),Pt(Et(Z),"dt",void 0),Pt(Et(Z),"duration",void 0),Pt(Et(Z),"clientX0",void 0),Pt(Et(Z),"clientY0",void 0),Pt(Et(Z),"velocity",void 0),Pt(Et(Z),"speed",void 0),Pt(Et(Z),"swipe",void 0),Pt(Et(Z),"axes",void 0),Pt(Et(Z),"preEnd",void 0),V=V||M.element;var _e=M.interactable,Pe=(_e&&_e.options||ta.defaults).deltaSource,ye=(0,J.default)(_e,V,I),ke=k==="start",Xe=k==="end",tt=ke?Et(Z):M.prevEvent,yt=ke?M.coords.start:Xe?{page:tt.page,client:tt.client,timeStamp:M.coords.cur.timeStamp}:M.coords.cur;return Z.page=(0,j.default)({},yt.page),Z.client=(0,j.default)({},yt.client),Z.rect=(0,j.default)({},M.rect),Z.timeStamp=yt.timeStamp,Xe||(Z.page.x-=ye.x,Z.page.y-=ye.y,Z.client.x-=ye.x,Z.client.y-=ye.y),Z.ctrlKey=b.ctrlKey,Z.altKey=b.altKey,Z.shiftKey=b.shiftKey,Z.metaKey=b.metaKey,Z.button=b.button,Z.buttons=b.buttons,Z.target=V,Z.currentTarget=V,Z.preEnd=ee,Z.type=ce||I+(k||""),Z.interactable=_e,Z.t0=ke?M.pointers[M.pointers.length-1].downTime:tt.t0,Z.x0=M.coords.start.page.x-ye.x,Z.y0=M.coords.start.page.y-ye.y,Z.clientX0=M.coords.start.client.x-ye.x,Z.clientY0=M.coords.start.client.y-ye.y,Z.delta=ke||Xe?{x:0,y:0}:{x:Z[Pe].x-tt[Pe].x,y:Z[Pe].y-tt[Pe].y},Z.dt=M.coords.delta.timeStamp,Z.duration=Z.timeStamp-Z.t0,Z.velocity=(0,j.default)({},M.coords.velocity[Pe]),Z.speed=(0,ve.default)(Z.velocity.x,Z.velocity.y),Z.swipe=Xe||k==="inertiastart"?Z.getSwipe():null,Z}return u=C,(c=[{key:"getSwipe",value:function(){var M=this._interaction;if(M.prevEvent.speed<600||this.timeStamp-M.prevEvent.timeStamp>150)return null;var b=180*Math.atan2(M.prevEvent.velocityY,M.prevEvent.velocityX)/Math.PI;b<0&&(b+=360);var I=112.5<=b&&b<247.5,k=202.5<=b&&b<337.5;return{up:k,down:!k&&22.5<=b&&b<157.5,left:I,right:!I&&(292.5<=b||b<67.5),angle:b,speed:M.prevEvent.speed,velocity:{x:M.prevEvent.velocityX,y:M.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Rx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Ge.BaseEvent);na.InteractEvent=Yp,Object.defineProperties(Yp.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var ia={};function qp(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Lx(s,u,c){return u&&qp(s.prototype,u),c&&qp(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function ra(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(ia,"__esModule",{value:!0}),ia.PointerInfo=void 0;var Ix=Lx(function s(u,c,f,m,x){(function(C,M){if(!(C instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),ra(this,"id",void 0),ra(this,"pointer",void 0),ra(this,"event",void 0),ra(this,"downTime",void 0),ra(this,"downTarget",void 0),this.id=u,this.pointer=c,this.event=f,this.downTime=m,this.downTarget=x});ia.PointerInfo=Ix;var Il,Ul,On={};function Ux(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Nt(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(On,"__esModule",{value:!0}),On.Interaction=void 0,Object.defineProperty(On,"PointerInfo",{enumerable:!0,get:function(){return ia.PointerInfo}}),On.default=On._ProxyValues=On._ProxyMethods=void 0,On._ProxyValues=Il,function(s){s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy=""}(Il||(On._ProxyValues=Il={})),On._ProxyMethods=Ul,function(s){s.start="",s.move="",s.end="",s.stop="",s.interacting=""}(Ul||(On._ProxyMethods=Ul={}));var Ox=0,$p=function(){function s(f){var m=this,x=f.pointerType,C=f.scopeFire;(function(ee,ce){if(!(ee instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,s),Nt(this,"interactable",null),Nt(this,"element",null),Nt(this,"rect",null),Nt(this,"_rects",void 0),Nt(this,"edges",null),Nt(this,"_scopeFire",void 0),Nt(this,"prepared",{name:null,axis:null,edges:null}),Nt(this,"pointerType",void 0),Nt(this,"pointers",[]),Nt(this,"downEvent",null),Nt(this,"downPointer",{}),Nt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Nt(this,"prevEvent",null),Nt(this,"pointerIsDown",!1),Nt(this,"pointerWasMoved",!1),Nt(this,"_interacting",!1),Nt(this,"_ending",!1),Nt(this,"_stopped",!0),Nt(this,"_proxy",null),Nt(this,"simulation",null),Nt(this,"doMove",(0,re.warnOnce)(function(ee){this.move(ee)},"The interaction.doMove() method has been renamed to interaction.move()")),Nt(this,"coords",{start:q.newCoords(),prev:q.newCoords(),cur:q.newCoords(),delta:q.newCoords(),velocity:q.newCoords()}),Nt(this,"_id",Ox++),this._scopeFire=C,this.pointerType=x;var M=this;this._proxy={};var b=function(ee){Object.defineProperty(m._proxy,ee,{get:function(){return M[ee]}})};for(var I in Il)b(I);var k=function(ee){Object.defineProperty(m._proxy,ee,{value:function(){return M[ee].apply(M,arguments)}})};for(var V in Ul)k(V);this._scopeFire("interactions:new",{interaction:this})}var u,c;return u=s,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(f,m,x){var C=this.updatePointer(f,m,x,!0),M=this.pointers[C];this._scopeFire("interactions:down",{pointer:f,event:m,eventTarget:x,pointerIndex:C,pointerInfo:M,type:"down",interaction:this})}},{key:"start",value:function(f,m,x){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(f.name==="gesture"?2:1)||!m.options[f.name].enabled)&&((0,re.copyAction)(this.prepared,f),this.interactable=m,this.element=x,this.rect=m.getRect(x),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(f,m,x){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(f,m,x,!1);var C,M,b=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(C=this.coords.cur.client.x-this.coords.start.client.x,M=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ve.default)(C,M)>this.pointerMoveTolerance);var I=this.getPointerIndex(f),k={pointer:f,pointerIndex:I,pointerInfo:this.pointers[I],event:m,type:"move",eventTarget:x,dx:C,dy:M,duplicate:b,interaction:this};b||q.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",k),b||this.simulation||(this.interacting()&&(k.type=null,this.move(k)),this.pointerWasMoved&&q.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(f){f&&f.event||q.setZeroCoords(this.coords.delta),(f=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},f||{})).phase="move",this._doPhase(f)}},{key:"pointerUp",value:function(f,m,x,C){var M=this.getPointerIndex(f);M===-1&&(M=this.updatePointer(f,m,x,!1));var b=/cancel$/i.test(m.type)?"cancel":"up";this._scopeFire("interactions:".concat(b),{pointer:f,pointerIndex:M,pointerInfo:this.pointers[M],event:m,eventTarget:x,type:b,curEventTarget:C,interaction:this}),this.simulation||this.end(m),this.removePointer(f,m)}},{key:"documentBlur",value:function(f){this.end(f),this._scopeFire("interactions:blur",{event:f,type:"blur",interaction:this})}},{key:"end",value:function(f){var m;this._ending=!0,f=f||this._latestPointer.event,this.interacting()&&(m=this._doPhase({event:f,interaction:this,phase:"end"})),this._ending=!1,m===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(f){var m=q.getPointerId(f);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Ye.findIndex(this.pointers,function(x){return x.id===m})}},{key:"getPointerInfo",value:function(f){return this.pointers[this.getPointerIndex(f)]}},{key:"updatePointer",value:function(f,m,x,C){var M=q.getPointerId(f),b=this.getPointerIndex(f),I=this.pointers[b];return C=C!==!1&&(C||/(down|start)$/i.test(m.type)),I?I.pointer=f:(I=new ia.PointerInfo(M,f,m,null,null),b=this.pointers.length,this.pointers.push(I)),q.setCoords(this.coords.cur,this.pointers.map(function(k){return k.pointer}),this._now()),q.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),C&&(this.pointerIsDown=!0,I.downTime=this.coords.cur.timeStamp,I.downTarget=x,q.pointerExtend(this.downPointer,f),this.interacting()||(q.copyCoords(this.coords.start,this.coords.cur),q.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=m,this.pointerWasMoved=!1)),this._updateLatestPointer(f,m,x),this._scopeFire("interactions:update-pointer",{pointer:f,event:m,eventTarget:x,down:C,pointerInfo:I,pointerIndex:b,interaction:this}),b}},{key:"removePointer",value:function(f,m){var x=this.getPointerIndex(f);if(x!==-1){var C=this.pointers[x];this._scopeFire("interactions:remove-pointer",{pointer:f,event:m,eventTarget:null,pointerIndex:x,pointerInfo:C,interaction:this}),this.pointers.splice(x,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(f,m,x){this._latestPointer.pointer=f,this._latestPointer.event=m,this._latestPointer.eventTarget=x}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(f,m,x,C){return new na.InteractEvent(this,f,this.prepared.name,m,this.element,x,C)}},{key:"_fireEvent",value:function(f){var m;(m=this.interactable)==null||m.fire(f),(!this.prevEvent||f.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=f)}},{key:"_doPhase",value:function(f){var m=f.event,x=f.phase,C=f.preEnd,M=f.type,b=this.rect;if(b&&x==="move"&&(ue.addEdges(this.edges,b,this.coords.delta[this.interactable.options.deltaSource]),b.width=b.right-b.left,b.height=b.bottom-b.top),this._scopeFire("interactions:before-action-".concat(x),f)===!1)return!1;var I=f.iEvent=this._createPreparedEvent(m,x,C,M);return this._scopeFire("interactions:action-".concat(x),f),x==="start"&&(this.prevEvent=I),this._fireEvent(I),this._scopeFire("interactions:after-action-".concat(x),f),!0}},{key:"_now",value:function(){return Date.now()}}],c&&Ux(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();On.Interaction=$p;var Nx=$p;On.default=Nx;var hr={};function Kp(s){s.pointerIsDown&&(tf(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}function Zp(s){ef(s.interaction)}function ef(s){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(s))return!1;var u=s.offset.pending;return tf(s.coords.cur,u),tf(s.coords.delta,u),ue.addEdges(s.edges,s.rect,u),u.x=0,u.y=0,!0}function Fx(s){var u=s.x,c=s.y;this.offset.pending.x+=u,this.offset.pending.y+=c,this.offset.total.x+=u,this.offset.total.y+=c}function tf(s,u){var c=s.page,f=s.client,m=u.x,x=u.y;c.x+=m,c.y+=x,f.x+=m,f.y+=x}Object.defineProperty(hr,"__esModule",{value:!0}),hr.addTotal=Kp,hr.applyPending=ef,hr.default=void 0,On._ProxyMethods.offsetBy="";var kx={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=Fx},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return Kp(s.interaction)},"interactions:before-action-start":Zp,"interactions:before-action-move":Zp,"interactions:before-action-end":function(s){var u=s.interaction;if(ef(u))return u.move({offset:!0}),u.end(),!1},"interactions:stop":function(s){var u=s.interaction;u.offset.total.x=0,u.offset.total.y=0,u.offset.pending.x=0,u.offset.pending.y=0}}},zx=kx;hr.default=zx;var Qr={};function Bx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function an(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.default=Qr.InertiaState=void 0;var Qp=function(){function s(f){(function(m,x){if(!(m instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),an(this,"active",!1),an(this,"isModified",!1),an(this,"smoothEnd",!1),an(this,"allowResume",!1),an(this,"modification",void 0),an(this,"modifierCount",0),an(this,"modifierArg",void 0),an(this,"startCoords",void 0),an(this,"t0",0),an(this,"v0",0),an(this,"te",0),an(this,"targetOffset",void 0),an(this,"modifiedOffset",void 0),an(this,"currentOffset",void 0),an(this,"lambda_v0",0),an(this,"one_ve_v0",0),an(this,"timeout",void 0),an(this,"interaction",void 0),this.interaction=f}var u,c;return u=s,(c=[{key:"start",value:function(f){var m=this.interaction,x=Ol(m);if(!x||!x.enabled)return!1;var C=m.coords.velocity.client,M=(0,ve.default)(C.x,C.y),b=this.modification||(this.modification=new Kr.default(m));if(b.copyFrom(m.modification),this.t0=m._now(),this.allowResume=x.allowResume,this.v0=M,this.currentOffset={x:0,y:0},this.startCoords=m.coords.cur.page,this.modifierArg=b.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-m.coords.cur.timeStamp<50&&M>x.minSpeed&&M>x.endSpeed)this.startInertia();else{if(b.result=b.setAll(this.modifierArg),!b.result.changed)return!1;this.startSmoothEnd()}return m.modification.result.rect=null,m.offsetBy(this.targetOffset),m._doPhase({interaction:m,event:f,phase:"inertiastart"}),m.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),m.modification.result.rect=null,this.active=!0,m.simulation=this,!0}},{key:"startInertia",value:function(){var f=this,m=this.interaction.coords.velocity.client,x=Ol(this.interaction),C=x.resistance,M=-Math.log(x.endSpeed/this.v0)/C;this.targetOffset={x:(m.x-M)/C,y:(m.y-M)/C},this.te=M,this.lambda_v0=C/this.v0,this.one_ve_v0=1-x.endSpeed/this.v0;var b=this.modification,I=this.modifierArg;I.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},b.result=b.setAll(I),b.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+b.result.delta.x,y:this.targetOffset.y+b.result.delta.y}),this.onNextFrame(function(){return f.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var f=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return f.smoothEndTick()})}},{key:"onNextFrame",value:function(f){var m=this;this.timeout=Xt.default.request(function(){m.active&&f()})}},{key:"inertiaTick",value:function(){var f,m,x,C,M,b=this,I=this.interaction,k=Ol(I).resistance,V=(I._now()-this.t0)/1e3;if(V<this.te){var ee,ce=1-(Math.exp(-k*V)-this.lambda_v0)/this.one_ve_v0;this.isModified?(f=this.targetOffset.x,m=this.targetOffset.y,x=this.modifiedOffset.x,C=this.modifiedOffset.y,ee={x:Jp(M=ce,0,f,x),y:Jp(M,0,m,C)}):ee={x:this.targetOffset.x*ce,y:this.targetOffset.y*ce};var Z={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=Z.x,this.currentOffset.y+=Z.y,I.offsetBy(Z),I.move(),this.onNextFrame(function(){return b.inertiaTick()})}else I.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var f=this,m=this.interaction,x=m._now()-this.t0,C=Ol(m).smoothEndDuration;if(x<C){var M={x:em(x,0,this.targetOffset.x,C),y:em(x,0,this.targetOffset.y,C)},b={x:M.x-this.currentOffset.x,y:M.y-this.currentOffset.y};this.currentOffset.x+=b.x,this.currentOffset.y+=b.y,m.offsetBy(b),m.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return f.smoothEndTick()})}else m.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(f){var m=f.pointer,x=f.event,C=f.eventTarget,M=this.interaction;M.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),M.updatePointer(m,x,C,!0),M._doPhase({interaction:M,event:x,phase:"resume"}),(0,q.copyCoords)(M.coords.prev,M.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Xt.default.cancel(this.timeout)}}])&&Bx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Ol(s){var u=s.interactable,c=s.prepared;return u&&u.options&&c.name&&u.options[c.name].inertia}Qr.InertiaState=Qp;var Gx={id:"inertia",before:["modifiers","actions"],install:function(s){var u=s.defaults;s.usePlugin(hr.default),s.usePlugin(dn.default),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,u.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var u=s.interaction;u.inertia=new Qp(u)},"interactions:before-action-end":function(s){var u=s.interaction,c=s.event;return(!u._interacting||u.simulation||!u.inertia.start(c))&&null},"interactions:down":function(s){var u=s.interaction,c=s.eventTarget,f=u.inertia;if(f.active)for(var m=c;a.default.element(m);){if(m===u.element){f.resume(s);break}m=z.parentNode(m)}},"interactions:stop":function(s){var u=s.interaction.inertia;u.active&&u.stop()},"interactions:before-action-resume":function(s){var u=s.interaction.modification;u.stop(s),u.start(s,s.interaction.coords.cur.page),u.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":dn.addEventModifiers,"interactions:action-inertiastart":dn.addEventModifiers,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function Jp(s,u,c,f){var m=1-s;return m*m*u+2*m*s*c+s*s*f}function em(s,u,c,f){return-c*(s/=f)*(s-2)+u}var Vx=Gx;Qr.default=Vx;var oa={};function Hx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function sa(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function tm(s,u){for(var c=0;c<u.length;c++){var f=u[c];if(s.immediatePropagationStopped)break;f(s)}}Object.defineProperty(oa,"__esModule",{value:!0}),oa.Eventable=void 0;var Wx=function(){function s(f){(function(m,x){if(!(m instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),sa(this,"options",void 0),sa(this,"types",{}),sa(this,"propagationStopped",!1),sa(this,"immediatePropagationStopped",!1),sa(this,"global",void 0),this.options=(0,j.default)({},f||{})}var u,c;return u=s,(c=[{key:"fire",value:function(f){var m,x=this.global;(m=this.types[f.type])&&tm(f,m),!f.propagationStopped&&x&&(m=x[f.type])&&tm(f,m)}},{key:"on",value:function(f,m){var x=(0,ne.default)(f,m);for(f in x)this.types[f]=Ye.merge(this.types[f]||[],x[f])}},{key:"off",value:function(f,m){var x=(0,ne.default)(f,m);for(f in x){var C=this.types[f];if(C&&C.length)for(var M=0;M<x[f].length;M++){var b=x[f][M],I=C.indexOf(b);I!==-1&&C.splice(I,1)}}}},{key:"getRect",value:function(f){return null}}])&&Hx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();oa.Eventable=Wx;var aa={};Object.defineProperty(aa,"__esModule",{value:!0}),aa.default=function(s,u){if(u.phaselessTypes[s])return!0;for(var c in u.map)if(s.indexOf(c)===0&&s.substr(c.length)in u.phases)return!0;return!1};var nf={};Object.defineProperty(nf,"__esModule",{value:!0}),nf.createInteractStatic=function(s){var u=function c(f,m){var x=s.interactables.get(f,m);return x||((x=s.interactables.new(f,m)).events.global=c.globalEvents),x};return u.getPointerAverage=q.pointerAverage,u.getTouchBBox=q.touchBBox,u.getTouchDistance=q.touchDistance,u.getTouchAngle=q.touchAngle,u.getElementRect=z.getElementRect,u.getElementClientRect=z.getElementClientRect,u.matchesSelector=z.matchesSelector,u.closest=z.closest,u.globalEvents={},u.version="1.10.17",u.scope=s,u.use=function(c,f){return this.scope.usePlugin(c,f),this},u.isSet=function(c,f){return!!this.scope.interactables.get(c,f&&f.context)},u.on=(0,re.warnOnce)(function(c,f,m){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var x=0;x<c.length;x++){var C=c[x];this.on(C,f,m)}return this}if(a.default.object(c)){for(var M in c)this.on(M,c[M],f);return this}return(0,aa.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(f):this.globalEvents[c]=[f]:this.scope.events.add(this.scope.document,c,f,{options:m}),this},"The interact.on() method is being deprecated"),u.off=(0,re.warnOnce)(function(c,f,m){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var x=0;x<c.length;x++){var C=c[x];this.off(C,f,m)}return this}if(a.default.object(c)){for(var M in c)this.off(M,c[M],f);return this}var b;return(0,aa.default)(c,this.scope.actions)?c in this.globalEvents&&(b=this.globalEvents[c].indexOf(f))!==-1&&this.globalEvents[c].splice(b,1):this.scope.events.remove(this.scope.document,c,f,m),this},"The interact.off() method is being deprecated"),u.debug=function(){return this.scope},u.supportsTouch=function(){return P.default.supportsTouch},u.supportsPointerEvent=function(){return P.default.supportsPointerEvent},u.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},u.pointerMoveTolerance=function(c){return a.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},u.addDocument=function(c,f){this.scope.addDocument(c,f)},u.removeDocument=function(c){this.scope.removeDocument(c)},u};var Nl={};function jx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Wi(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.Interactable=void 0;var Xx=function(){function s(f,m,x,C){(function(M,b){if(!(M instanceof b))throw new TypeError("Cannot call a class as a function")})(this,s),Wi(this,"options",void 0),Wi(this,"_actions",void 0),Wi(this,"target",void 0),Wi(this,"events",new oa.Eventable),Wi(this,"_context",void 0),Wi(this,"_win",void 0),Wi(this,"_doc",void 0),Wi(this,"_scopeEvents",void 0),Wi(this,"_rectChecker",void 0),this._actions=m.actions,this.target=f,this._context=m.context||x,this._win=(0,i.getWindow)((0,z.trySelector)(f)?this._context:f),this._doc=this._win.document,this._scopeEvents=C,this.set(m)}var u,c;return u=s,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(f,m){return a.default.func(m.onstart)&&this.on("".concat(f,"start"),m.onstart),a.default.func(m.onmove)&&this.on("".concat(f,"move"),m.onmove),a.default.func(m.onend)&&this.on("".concat(f,"end"),m.onend),a.default.func(m.oninertiastart)&&this.on("".concat(f,"inertiastart"),m.oninertiastart),this}},{key:"updatePerActionListeners",value:function(f,m,x){(a.default.array(m)||a.default.object(m))&&this.off(f,m),(a.default.array(x)||a.default.object(x))&&this.on(f,x)}},{key:"setPerAction",value:function(f,m){var x=this._defaults;for(var C in m){var M=C,b=this.options[f],I=m[M];M==="listeners"&&this.updatePerActionListeners(f,b.listeners,I),a.default.array(I)?b[M]=Ye.from(I):a.default.plainObject(I)?(b[M]=(0,j.default)(b[M]||{},(0,$r.default)(I)),a.default.object(x.perAction[M])&&"enabled"in x.perAction[M]&&(b[M].enabled=I.enabled!==!1)):a.default.bool(I)&&a.default.object(x.perAction[M])?b[M].enabled=I:b[M]=I}}},{key:"getRect",value:function(f){return f=f||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(f=f||this._context.querySelector(this.target)),(0,z.getElementRect)(f)}},{key:"rectChecker",value:function(f){var m=this;return a.default.func(f)?(this._rectChecker=f,this.getRect=function(x){var C=(0,j.default)({},m._rectChecker(x));return"width"in C||(C.width=C.right-C.left,C.height=C.bottom-C.top),C},this):f===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(f,m){if((0,z.trySelector)(m)||a.default.object(m)){for(var x in this.options[f]=m,this._actions.map)this.options[x][f]=m;return this}return this.options[f]}},{key:"origin",value:function(f){return this._backCompatOption("origin",f)}},{key:"deltaSource",value:function(f){return f==="page"||f==="client"?(this.options.deltaSource=f,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(f){return this._context===f.ownerDocument||(0,z.nodeContains)(this._context,f)}},{key:"testIgnoreAllow",value:function(f,m,x){return!this.testIgnore(f.ignoreFrom,m,x)&&this.testAllow(f.allowFrom,m,x)}},{key:"testAllow",value:function(f,m,x){return!f||!!a.default.element(x)&&(a.default.string(f)?(0,z.matchesUpTo)(x,f,m):!!a.default.element(f)&&(0,z.nodeContains)(f,x))}},{key:"testIgnore",value:function(f,m,x){return!(!f||!a.default.element(x))&&(a.default.string(f)?(0,z.matchesUpTo)(x,f,m):!!a.default.element(f)&&(0,z.nodeContains)(f,x))}},{key:"fire",value:function(f){return this.events.fire(f),this}},{key:"_onOff",value:function(f,m,x,C){a.default.object(m)&&!a.default.array(m)&&(C=x,x=null);var M=f==="on"?"add":"remove",b=(0,ne.default)(m,x);for(var I in b){I==="wheel"&&(I=P.default.wheelEvent);for(var k=0;k<b[I].length;k++){var V=b[I][k];(0,aa.default)(I,this._actions)?this.events[f](I,V):a.default.string(this.target)?this._scopeEvents["".concat(M,"Delegate")](this.target,this._context,I,V,C):this._scopeEvents[M](this.target,I,V,C)}}return this}},{key:"on",value:function(f,m,x){return this._onOff("on",f,m,x)}},{key:"off",value:function(f,m,x){return this._onOff("off",f,m,x)}},{key:"set",value:function(f){var m=this._defaults;for(var x in a.default.object(f)||(f={}),this.options=(0,$r.default)(m.base),this._actions.methodDict){var C=x,M=this._actions.methodDict[C];this.options[C]={},this.setPerAction(C,(0,j.default)((0,j.default)({},m.perAction),m.actions[C])),this[M](f[C])}for(var b in f)a.default.func(this[b])&&this[b](f[b]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var f in this._scopeEvents.delegatedEvents)for(var m=this._scopeEvents.delegatedEvents[f],x=m.length-1;x>=0;x--){var C=m[x],M=C.selector,b=C.context,I=C.listeners;M===this.target&&b===this._context&&m.splice(x,1);for(var k=I.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,f,I[k][0],I[k][1])}else this._scopeEvents.remove(this.target,"all")}}])&&jx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Nl.Interactable=Xx;var Fl={};function Yx(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function rf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Fl,"__esModule",{value:!0}),Fl.InteractableSet=void 0;var qx=function(){function s(f){var m=this;(function(x,C){if(!(x instanceof C))throw new TypeError("Cannot call a class as a function")})(this,s),rf(this,"list",[]),rf(this,"selectorMap",{}),rf(this,"scope",void 0),this.scope=f,f.addListeners({"interactable:unset":function(x){var C=x.interactable,M=C.target,b=C._context,I=a.default.string(M)?m.selectorMap[M]:M[m.scope.id],k=Ye.findIndex(I,function(V){return V.context===b});I[k]&&(I[k].context=null,I[k].interactable=null),I.splice(k,1)}})}var u,c;return u=s,(c=[{key:"new",value:function(f,m){m=(0,j.default)(m||{},{actions:this.scope.actions});var x=new this.scope.Interactable(f,m,this.scope.document,this.scope.events),C={context:x._context,interactable:x};return this.scope.addDocument(x._doc),this.list.push(x),a.default.string(f)?(this.selectorMap[f]||(this.selectorMap[f]=[]),this.selectorMap[f].push(C)):(x.target[this.scope.id]||Object.defineProperty(f,this.scope.id,{value:[],configurable:!0}),f[this.scope.id].push(C)),this.scope.fire("interactable:new",{target:f,options:m,interactable:x,win:this.scope._win}),x}},{key:"get",value:function(f,m){var x=m&&m.context||this.scope.document,C=a.default.string(f),M=C?this.selectorMap[f]:f[this.scope.id];if(!M)return null;var b=Ye.find(M,function(I){return I.context===x&&(C||I.interactable.inContext(f))});return b&&b.interactable}},{key:"forEachMatch",value:function(f,m){for(var x=0;x<this.list.length;x++){var C=this.list[x],M=void 0;if((a.default.string(C.target)?a.default.element(f)&&z.matchesSelector(f,C.target):f===C.target)&&C.inContext(f)&&(M=m(C)),M!==void 0)return M}}}])&&Yx(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Fl.InteractableSet=qx;var kl={};function $x(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function of(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function sf(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var x,C,M=[],b=!0,I=!1;try{for(m=m.call(c);!(b=(x=m.next()).done)&&(M.push(x.value),!f||M.length!==f);b=!0);}catch(k){I=!0,C=k}finally{try{b||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return nm(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?nm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function nm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(kl,"__esModule",{value:!0}),kl.default=void 0;var Kx=function(){function s(f){(function(m,x){if(!(m instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),of(this,"currentTarget",void 0),of(this,"originalEvent",void 0),of(this,"type",void 0),this.originalEvent=f,(0,oe.default)(this,f)}var u,c;return u=s,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&$x(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function la(s){if(!a.default.object(s))return{capture:!!s,passive:!1};var u=(0,j.default)({},s);return u.capture=!!s.capture,u.passive=!!s.passive,u}var Zx={id:"events",install:function(s){var u,c=[],f={},m=[],x={add:C,remove:M,addDelegate:function(k,V,ee,ce,Z){var _e=la(Z);if(!f[ee]){f[ee]=[];for(var Pe=0;Pe<m.length;Pe++){var ye=m[Pe];C(ye,ee,b),C(ye,ee,I,!0)}}var ke=f[ee],Xe=Ye.find(ke,function(tt){return tt.selector===k&&tt.context===V});Xe||(Xe={selector:k,context:V,listeners:[]},ke.push(Xe)),Xe.listeners.push([ce,_e])},removeDelegate:function(k,V,ee,ce,Z){var _e,Pe=la(Z),ye=f[ee],ke=!1;if(ye)for(_e=ye.length-1;_e>=0;_e--){var Xe=ye[_e];if(Xe.selector===k&&Xe.context===V){for(var tt=Xe.listeners,yt=tt.length-1;yt>=0;yt--){var bt=sf(tt[yt],2),ct=bt[0],wt=bt[1],ri=wt.capture,Xi=wt.passive;if(ct===ce&&ri===Pe.capture&&Xi===Pe.passive){tt.splice(yt,1),tt.length||(ye.splice(_e,1),M(V,ee,b),M(V,ee,I,!0)),ke=!0;break}}if(ke)break}}},delegateListener:b,delegateUseCapture:I,delegatedEvents:f,documents:m,targets:c,supportsOptions:!1,supportsPassive:!1};function C(k,V,ee,ce){var Z=la(ce),_e=Ye.find(c,function(Pe){return Pe.eventTarget===k});_e||(_e={eventTarget:k,events:{}},c.push(_e)),_e.events[V]||(_e.events[V]=[]),k.addEventListener&&!Ye.contains(_e.events[V],ee)&&(k.addEventListener(V,ee,x.supportsOptions?Z:Z.capture),_e.events[V].push(ee))}function M(k,V,ee,ce){var Z=la(ce),_e=Ye.findIndex(c,function(yt){return yt.eventTarget===k}),Pe=c[_e];if(Pe&&Pe.events)if(V!=="all"){var ye=!1,ke=Pe.events[V];if(ke){if(ee==="all"){for(var Xe=ke.length-1;Xe>=0;Xe--)M(k,V,ke[Xe],Z);return}for(var tt=0;tt<ke.length;tt++)if(ke[tt]===ee){k.removeEventListener(V,ee,x.supportsOptions?Z:Z.capture),ke.splice(tt,1),ke.length===0&&(delete Pe.events[V],ye=!0);break}}ye&&!Object.keys(Pe.events).length&&c.splice(_e,1)}else for(V in Pe.events)Pe.events.hasOwnProperty(V)&&M(k,V,"all")}function b(k,V){for(var ee=la(V),ce=new Kx(k),Z=f[k.type],_e=sf(q.getEventTargets(k),1)[0],Pe=_e;a.default.element(Pe);){for(var ye=0;ye<Z.length;ye++){var ke=Z[ye],Xe=ke.selector,tt=ke.context;if(z.matchesSelector(Pe,Xe)&&z.nodeContains(tt,_e)&&z.nodeContains(tt,Pe)){var yt=ke.listeners;ce.currentTarget=Pe;for(var bt=0;bt<yt.length;bt++){var ct=sf(yt[bt],2),wt=ct[0],ri=ct[1],Xi=ri.capture,Tf=ri.passive;Xi===ee.capture&&Tf===ee.passive&&wt(ce)}}}Pe=z.parentNode(Pe)}}function I(k){return b(k,!0)}return(u=s.document)==null||u.createElement("div").addEventListener("test",null,{get capture(){return x.supportsOptions=!0},get passive(){return x.supportsPassive=!0}}),s.events=x,x}};kl.default=Zx;var zl={};Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=void 0;var Bl={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var u=0;u<Bl.methodOrder.length;u++){var c;c=Bl.methodOrder[u];var f=Bl[c](s);if(f)return f}return null},simulationResume:function(s){var u=s.pointerType,c=s.eventType,f=s.eventTarget,m=s.scope;if(!/down|start/i.test(c))return null;for(var x=0;x<m.interactions.list.length;x++){var C=m.interactions.list[x],M=f;if(C.simulation&&C.simulation.allowResume&&C.pointerType===u)for(;M;){if(M===C.element)return C;M=z.parentNode(M)}}return null},mouseOrPen:function(s){var u,c=s.pointerId,f=s.pointerType,m=s.eventType,x=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var C=0;C<x.interactions.list.length;C++){var M=x.interactions.list[C];if(M.pointerType===f){if(M.simulation&&!im(M,c))continue;if(M.interacting())return M;u||(u=M)}}if(u)return u;for(var b=0;b<x.interactions.list.length;b++){var I=x.interactions.list[b];if(!(I.pointerType!==f||/down/i.test(m)&&I.simulation))return I}return null},hasPointer:function(s){for(var u=s.pointerId,c=s.scope,f=0;f<c.interactions.list.length;f++){var m=c.interactions.list[f];if(im(m,u))return m}return null},idle:function(s){for(var u=s.pointerType,c=s.scope,f=0;f<c.interactions.list.length;f++){var m=c.interactions.list[f];if(m.pointers.length===1){var x=m.interactable;if(x&&(!x.options.gesture||!x.options.gesture.enabled))continue}else if(m.pointers.length>=2)continue;if(!m.interacting()&&u===m.pointerType)return m}return null}};function im(s,u){return s.pointers.some(function(c){return c.id===u})}var Qx=Bl;zl.default=Qx;var Gl={};function af(s){return af=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},af(s)}function rm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var x,C,M=[],b=!0,I=!1;try{for(m=m.call(c);!(b=(x=m.next()).done)&&(M.push(x.value),!f||M.length!==f);b=!0);}catch(k){I=!0,C=k}finally{try{b||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return om(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?om(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function om(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function Jx(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function eS(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function lf(s,u){return lf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},lf(s,u)}function tS(s,u){if(u&&(af(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function Vl(s){return Vl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Vl(s)}Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0;var uf=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function sm(s,u){return function(c){var f=u.interactions.list,m=q.getPointerType(c),x=rm(q.getEventTargets(c),2),C=x[0],M=x[1],b=[];if(/^touch/.test(c.type)){u.prevTouchTime=u.now();for(var I=0;I<c.changedTouches.length;I++){var k=c.changedTouches[I],V={pointer:k,pointerId:q.getPointerId(k),pointerType:m,eventType:c.type,eventTarget:C,curEventTarget:M,scope:u},ee=am(V);b.push([V.pointer,V.eventTarget,V.curEventTarget,ee])}}else{var ce=!1;if(!P.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var Z=0;Z<f.length&&!ce;Z++)ce=f[Z].pointerType!=="mouse"&&f[Z].pointerIsDown;ce=ce||u.now()-u.prevTouchTime<500||c.timeStamp===0}if(!ce){var _e={pointer:c,pointerId:q.getPointerId(c),pointerType:m,eventType:c.type,curEventTarget:M,eventTarget:C,scope:u},Pe=am(_e);b.push([_e.pointer,_e.eventTarget,_e.curEventTarget,Pe])}}for(var ye=0;ye<b.length;ye++){var ke=rm(b[ye],4),Xe=ke[0],tt=ke[1],yt=ke[2];ke[3][s](Xe,c,tt,yt)}}}function am(s){var u=s.pointerType,c=s.scope,f={interaction:zl.default.search(s),searchDetails:s};return c.fire("interactions:find",f),f.interaction||c.interactions.new({pointerType:u})}function cf(s,u){var c=s.doc,f=s.scope,m=s.options,x=f.interactions.docEvents,C=f.events,M=C[u];for(var b in f.browser.isIOS&&!m.events&&(m.events={passive:!1}),C.delegatedEvents)M(c,b,C.delegateListener),M(c,b,C.delegateUseCapture,!0);for(var I=m&&m.events,k=0;k<x.length;k++){var V=x[k];M(c,V.type,V.listener,I)}}var nS={id:"core/interactions",install:function(s){for(var u={},c=0;c<uf.length;c++){var f=uf[c];u[f]=sm(f,s)}var m,x=P.default.pEventTypes;function C(){for(var M=0;M<s.interactions.list.length;M++){var b=s.interactions.list[M];if(b.pointerIsDown&&b.pointerType==="touch"&&!b._interacting)for(var I=function(){var V=b.pointers[k];s.documents.some(function(ee){var ce=ee.doc;return(0,z.nodeContains)(ce,V.downTarget)})||b.removePointer(V.pointer,V.event)},k=0;k<b.pointers.length;k++)I()}}(m=p.default.PointerEvent?[{type:x.down,listener:C},{type:x.down,listener:u.pointerDown},{type:x.move,listener:u.pointerMove},{type:x.up,listener:u.pointerUp},{type:x.cancel,listener:u.pointerUp}]:[{type:"mousedown",listener:u.pointerDown},{type:"mousemove",listener:u.pointerMove},{type:"mouseup",listener:u.pointerUp},{type:"touchstart",listener:C},{type:"touchstart",listener:u.pointerDown},{type:"touchmove",listener:u.pointerMove},{type:"touchend",listener:u.pointerUp},{type:"touchcancel",listener:u.pointerUp}]).push({type:"blur",listener:function(M){for(var b=0;b<s.interactions.list.length;b++)s.interactions.list[b].documentBlur(M)}}),s.prevTouchTime=0,s.Interaction=function(M){(function(Z,_e){if(typeof _e!="function"&&_e!==null)throw new TypeError("Super expression must either be null or a function");Z.prototype=Object.create(_e&&_e.prototype,{constructor:{value:Z,writable:!0,configurable:!0}}),Object.defineProperty(Z,"prototype",{writable:!1}),_e&&lf(Z,_e)})(ce,M);var b,I,k,V,ee=(k=ce,V=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var Z,_e=Vl(k);if(V){var Pe=Vl(this).constructor;Z=Reflect.construct(_e,arguments,Pe)}else Z=_e.apply(this,arguments);return tS(this,Z)});function ce(){return Jx(this,ce),ee.apply(this,arguments)}return b=ce,(I=[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(Z){s.interactions.pointerMoveTolerance=Z}},{key:"_now",value:function(){return s.now()}}])&&eS(b.prototype,I),Object.defineProperty(b,"prototype",{writable:!1}),ce}(On.default),s.interactions={list:[],new:function(M){M.scopeFire=function(I,k){return s.fire(I,k)};var b=new s.Interaction(M);return s.interactions.list.push(b),b},listeners:u,docEvents:m,pointerMoveTolerance:1},s.usePlugin(pi.default)},listeners:{"scope:add-document":function(s){return cf(s,"add")},"scope:remove-document":function(s){return cf(s,"remove")},"interactable:unset":function(s,u){for(var c=s.interactable,f=u.interactions.list.length-1;f>=0;f--){var m=u.interactions.list[f];m.interactable===c&&(m.stop(),u.fire("interactions:destroy",{interaction:m}),m.destroy(),u.interactions.list.length>2&&u.interactions.list.splice(f,1))}}},onDocSignal:cf,doOnInteractions:sm,methodNames:uf},iS=nS;Gl.default=iS;var ua={};function ff(s){return ff=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ff(s)}function ca(){return ca=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(s,u,c){var f=rS(s,u);if(f){var m=Object.getOwnPropertyDescriptor(f,u);return m.get?m.get.call(arguments.length<3?s:c):m.value}},ca.apply(this,arguments)}function rS(s,u){for(;!Object.prototype.hasOwnProperty.call(s,u)&&(s=pr(s))!==null;);return s}function df(s,u){return df=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},df(s,u)}function oS(s,u){if(u&&(ff(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function pr(s){return pr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},pr(s)}function lm(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function um(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function cm(s,u,c){return u&&um(s.prototype,u),c&&um(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function hn(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(ua,"__esModule",{value:!0}),ua.Scope=void 0,ua.initScope=fm;var sS=function(){function s(){var u=this;lm(this,s),hn(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),hn(this,"isInitialized",!1),hn(this,"listenerMaps",[]),hn(this,"browser",P.default),hn(this,"defaults",(0,$r.default)(ta.defaults)),hn(this,"Eventable",oa.Eventable),hn(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),hn(this,"interactStatic",(0,nf.createInteractStatic)(this)),hn(this,"InteractEvent",na.InteractEvent),hn(this,"Interactable",void 0),hn(this,"interactables",new Fl.InteractableSet(this)),hn(this,"_win",void 0),hn(this,"document",void 0),hn(this,"window",void 0),hn(this,"documents",[]),hn(this,"_plugins",{list:[],map:{}}),hn(this,"onWindowUnload",function(f){return u.removeDocument(f.target)});var c=this;this.Interactable=function(f){(function(b,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(I&&I.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),I&&df(b,I)})(M,f);var m,x,C=(m=M,x=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var b,I=pr(m);if(x){var k=pr(this).constructor;b=Reflect.construct(I,arguments,k)}else b=I.apply(this,arguments);return oS(this,b)});function M(){return lm(this,M),C.apply(this,arguments)}return cm(M,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(b){return ca(pr(M.prototype),"set",this).call(this,b),c.fire("interactable:set",{options:b,interactable:this}),this}},{key:"unset",value:function(){ca(pr(M.prototype),"unset",this).call(this);var b=c.interactables.list.indexOf(this);b<0||(ca(pr(M.prototype),"unset",this).call(this),c.interactables.list.splice(b,1),c.fire("interactable:unset",{interactable:this}))}}]),M}(Nl.Interactable)}return cm(s,[{key:"addListeners",value:function(u,c){this.listenerMaps.push({id:c,map:u})}},{key:"fire",value:function(u,c){for(var f=0;f<this.listenerMaps.length;f++){var m=this.listenerMaps[f].map[u];if(m&&m(c,this,u)===!1)return!1}}},{key:"init",value:function(u){return this.isInitialized?this:fm(this,u)}},{key:"pluginIsInstalled",value:function(u){return this._plugins.map[u.id]||this._plugins.list.indexOf(u)!==-1}},{key:"usePlugin",value:function(u,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(u))return this;if(u.id&&(this._plugins.map[u.id]=u),this._plugins.list.push(u),u.install&&u.install(this,c),u.listeners&&u.before){for(var f=0,m=this.listenerMaps.length,x=u.before.reduce(function(M,b){return M[b]=!0,M[dm(b)]=!0,M},{});f<m;f++){var C=this.listenerMaps[f].id;if(x[C]||x[dm(C)])break}this.listenerMaps.splice(f,0,{id:u.id,map:u.listeners})}else u.listeners&&this.listenerMaps.push({id:u.id,map:u.listeners});return this}},{key:"addDocument",value:function(u,c){if(this.getDocIndex(u)!==-1)return!1;var f=i.getWindow(u);c=c?(0,j.default)({},c):{},this.documents.push({doc:u,options:c}),this.events.documents.push(u),u!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:u,window:f,scope:this,options:c})}},{key:"removeDocument",value:function(u){var c=this.getDocIndex(u),f=i.getWindow(u),m=this.documents[c].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:u,window:f,scope:this,options:m})}},{key:"getDocIndex",value:function(u){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===u)return c;return-1}},{key:"getDocOptions",value:function(u){var c=this.getDocIndex(u);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s}();function fm(s,u){return s.isInitialized=!0,a.default.window(u)&&i.init(u),p.default.init(u),P.default.init(u),Xt.default.init(u),s.window=u,s.document=u.document,s.usePlugin(Gl.default),s.usePlugin(kl.default),s}function dm(s){return s&&s.replace(/\/.*$/,"")}ua.Scope=sS;var pn={};Object.defineProperty(pn,"__esModule",{value:!0}),pn.default=void 0;var hm=new ua.Scope,aS=hm.interactStatic;pn.default=aS;var lS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;hm.init(lS);var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0,Hl.default=function(){};var Wl={};Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0,Wl.default=function(){};var jl={};function pm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var x,C,M=[],b=!0,I=!1;try{for(m=m.call(c);!(b=(x=m.next()).done)&&(M.push(x.value),!f||M.length!==f);b=!0);}catch(k){I=!0,C=k}finally{try{b||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return mm(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?mm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function mm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(jl,"__esModule",{value:!0}),jl.default=void 0,jl.default=function(s){var u=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(f){var m=pm(f,2),x=m[0],C=m[1];return x in s||C in s}),c=function(f,m){for(var x=s.range,C=s.limits,M=C===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:C,b=s.offset,I=b===void 0?{x:0,y:0}:b,k={range:x,grid:s,x:null,y:null},V=0;V<u.length;V++){var ee=pm(u[V],2),ce=ee[0],Z=ee[1],_e=Math.round((f-I.x)/s[ce]),Pe=Math.round((m-I.y)/s[Z]);k[ce]=Math.max(M.left,Math.min(M.right,_e*s[ce]+I.x)),k[Z]=Math.max(M.top,Math.min(M.bottom,Pe*s[Z]+I.y))}return k};return c.grid=s,c.coordFields=u,c};var fa={};Object.defineProperty(fa,"__esModule",{value:!0}),Object.defineProperty(fa,"edgeTarget",{enumerable:!0,get:function(){return Hl.default}}),Object.defineProperty(fa,"elements",{enumerable:!0,get:function(){return Wl.default}}),Object.defineProperty(fa,"grid",{enumerable:!0,get:function(){return jl.default}});var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var uS={id:"snappers",install:function(s){var u=s.interactStatic;u.snappers=(0,j.default)(u.snappers||{},fa),u.createSnapGrid=u.snappers.grid}},cS=uS;Xl.default=cS;var zo={};function vm(s,u){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);u&&(f=f.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),c.push.apply(c,f)}return c}function hf(s){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?vm(Object(c),!0).forEach(function(f){fS(s,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):vm(Object(c)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(c,f))})}return s}function fS(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(zo,"__esModule",{value:!0}),zo.default=zo.aspectRatio=void 0;var gm={start:function(s){var u=s.state,c=s.rect,f=s.edges,m=s.pageCoords,x=u.options.ratio,C=u.options,M=C.equalDelta,b=C.modifiers;x==="preserve"&&(x=c.width/c.height),u.startCoords=(0,j.default)({},m),u.startRect=(0,j.default)({},c),u.ratio=x,u.equalDelta=M;var I=u.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(u.xIsPrimaryAxis=!(!f.left&&!f.right),u.equalDelta){var k=(I.left?1:-1)*(I.top?1:-1);u.edgeSign={x:k,y:k}}else u.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if((0,j.default)(s.edges,I),b&&b.length){var V=new Kr.default(s.interaction);V.copyFrom(s.interaction.modification),V.prepareStates(b),u.subModification=V,V.startAll(hf({},s))}},set:function(s){var u=s.state,c=s.rect,f=s.coords,m=(0,j.default)({},f),x=u.equalDelta?dS:hS;if(x(u,u.xIsPrimaryAxis,f,c),!u.subModification)return null;var C=(0,j.default)({},c);(0,ue.addEdges)(u.linkedEdges,C,{x:f.x-m.x,y:f.y-m.y});var M=u.subModification.setAll(hf(hf({},s),{},{rect:C,edges:u.linkedEdges,pageCoords:f,prevCoords:f,prevRect:C})),b=M.delta;return M.changed&&(x(u,Math.abs(b.x)>Math.abs(b.y),M.coords,M.rect),(0,j.default)(f,M.coords)),M.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function dS(s,u,c){var f=s.startCoords,m=s.edgeSign;u?c.y=f.y+(c.x-f.x)*m.y:c.x=f.x+(c.y-f.y)*m.x}function hS(s,u,c,f){var m=s.startRect,x=s.startCoords,C=s.ratio,M=s.edgeSign;if(u){var b=f.width/C;c.y=x.y+(b-m.height)*M.y}else{var I=f.height*C;c.x=x.x+(I-m.width)*M.x}}zo.aspectRatio=gm;var pS=(0,dn.makeModifier)(gm,"aspectRatio");zo.default=pS;var Jr={};Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=void 0;var _m=function(){};_m._defaults={};var mS=_m;Jr.default=mS;var pf={};Object.defineProperty(pf,"__esModule",{value:!0}),Object.defineProperty(pf,"default",{enumerable:!0,get:function(){return Jr.default}});var Cn={};function mf(s,u,c){return a.default.func(s)?ue.resolveRectLike(s,u.interactable,u.element,[c.x,c.y,u]):ue.resolveRectLike(s,u.interactable,u.element)}Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0,Cn.getRestrictionRect=mf,Cn.restrict=void 0;var ym={start:function(s){var u=s.rect,c=s.startOffset,f=s.state,m=s.interaction,x=s.pageCoords,C=f.options,M=C.elementRect,b=(0,j.default)({left:0,top:0,right:0,bottom:0},C.offset||{});if(u&&M){var I=mf(C.restriction,m,x);if(I){var k=I.right-I.left-u.width,V=I.bottom-I.top-u.height;k<0&&(b.left+=k,b.right+=k),V<0&&(b.top+=V,b.bottom+=V)}b.left+=c.left-u.width*M.left,b.top+=c.top-u.height*M.top,b.right+=c.right-u.width*(1-M.right),b.bottom+=c.bottom-u.height*(1-M.bottom)}f.offset=b},set:function(s){var u=s.coords,c=s.interaction,f=s.state,m=f.options,x=f.offset,C=mf(m.restriction,c,u);if(C){var M=ue.xywhToTlbr(C);u.x=Math.max(Math.min(M.right-x.right,u.x),M.left+x.left),u.y=Math.max(Math.min(M.bottom-x.bottom,u.y),M.top+x.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Cn.restrict=ym;var vS=(0,dn.makeModifier)(ym,"restrict");Cn.default=vS;var Ii={};Object.defineProperty(Ii,"__esModule",{value:!0}),Ii.restrictEdges=Ii.default=void 0;var xm={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Sm={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Mm(s,u){for(var c=["top","left","bottom","right"],f=0;f<c.length;f++){var m=c[f];m in s||(s[m]=u[m])}return s}var Em={noInner:xm,noOuter:Sm,start:function(s){var u,c=s.interaction,f=s.startOffset,m=s.state,x=m.options;if(x){var C=(0,Cn.getRestrictionRect)(x.offset,c,c.coords.start.page);u=ue.rectToXY(C)}u=u||{x:0,y:0},m.offset={top:u.y+f.top,left:u.x+f.left,bottom:u.y-f.bottom,right:u.x-f.right}},set:function(s){var u=s.coords,c=s.edges,f=s.interaction,m=s.state,x=m.offset,C=m.options;if(c){var M=(0,j.default)({},u),b=(0,Cn.getRestrictionRect)(C.inner,f,M)||{},I=(0,Cn.getRestrictionRect)(C.outer,f,M)||{};Mm(b,xm),Mm(I,Sm),c.top?u.y=Math.min(Math.max(I.top+x.top,M.y),b.top+x.top):c.bottom&&(u.y=Math.max(Math.min(I.bottom+x.bottom,M.y),b.bottom+x.bottom)),c.left?u.x=Math.min(Math.max(I.left+x.left,M.x),b.left+x.left):c.right&&(u.x=Math.max(Math.min(I.right+x.right,M.x),b.right+x.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Ii.restrictEdges=Em;var gS=(0,dn.makeModifier)(Em,"restrictEdges");Ii.default=gS;var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.restrictRect=Bo.default=void 0;var _S=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},Cn.restrict.defaults),wm={start:Cn.restrict.start,set:Cn.restrict.set,defaults:_S};Bo.restrictRect=wm;var yS=(0,dn.makeModifier)(wm,"restrictRect");Bo.default=yS;var Go={};Object.defineProperty(Go,"__esModule",{value:!0}),Go.restrictSize=Go.default=void 0;var xS={width:-1/0,height:-1/0},SS={width:1/0,height:1/0},Tm={start:function(s){return Ii.restrictEdges.start(s)},set:function(s){var u=s.interaction,c=s.state,f=s.rect,m=s.edges,x=c.options;if(m){var C=ue.tlbrToXywh((0,Cn.getRestrictionRect)(x.min,u,s.coords))||xS,M=ue.tlbrToXywh((0,Cn.getRestrictionRect)(x.max,u,s.coords))||SS;c.options={endOnly:x.endOnly,inner:(0,j.default)({},Ii.restrictEdges.noInner),outer:(0,j.default)({},Ii.restrictEdges.noOuter)},m.top?(c.options.inner.top=f.bottom-C.height,c.options.outer.top=f.bottom-M.height):m.bottom&&(c.options.inner.bottom=f.top+C.height,c.options.outer.bottom=f.top+M.height),m.left?(c.options.inner.left=f.right-C.width,c.options.outer.left=f.right-M.width):m.right&&(c.options.inner.right=f.left+C.width,c.options.outer.right=f.left+M.width),Ii.restrictEdges.set(s),c.options=x}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Go.restrictSize=Tm;var MS=(0,dn.makeModifier)(Tm,"restrictSize");Go.default=MS;var vf={};Object.defineProperty(vf,"__esModule",{value:!0}),Object.defineProperty(vf,"default",{enumerable:!0,get:function(){return Jr.default}});var mr={};Object.defineProperty(mr,"__esModule",{value:!0}),mr.snap=mr.default=void 0;var bm={start:function(s){var u,c=s.interaction,f=s.interactable,m=s.element,x=s.rect,C=s.state,M=s.startOffset,b=C.options,I=b.offsetWithOrigin?function(ee){var ce=ee.interaction.element;return(0,ue.rectToXY)((0,ue.resolveRectLike)(ee.state.options.origin,null,null,[ce]))||(0,J.default)(ee.interactable,ce,ee.interaction.prepared.name)}(s):{x:0,y:0};if(b.offset==="startCoords")u={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var k=(0,ue.resolveRectLike)(b.offset,f,m,[c]);(u=(0,ue.rectToXY)(k)||{x:0,y:0}).x+=I.x,u.y+=I.y}var V=b.relativePoints;C.offsets=x&&V&&V.length?V.map(function(ee,ce){return{index:ce,relativePoint:ee,x:M.left-x.width*ee.x+u.x,y:M.top-x.height*ee.y+u.y}}):[{index:0,relativePoint:null,x:u.x,y:u.y}]},set:function(s){var u=s.interaction,c=s.coords,f=s.state,m=f.options,x=f.offsets,C=(0,J.default)(u.interactable,u.element,u.prepared.name),M=(0,j.default)({},c),b=[];m.offsetWithOrigin||(M.x-=C.x,M.y-=C.y);for(var I=0;I<x.length;I++)for(var k=x[I],V=M.x-k.x,ee=M.y-k.y,ce=0,Z=m.targets.length;ce<Z;ce++){var _e,Pe=m.targets[ce];(_e=a.default.func(Pe)?Pe(V,ee,u._proxy,k,ce):Pe)&&b.push({x:(a.default.number(_e.x)?_e.x:V)+k.x,y:(a.default.number(_e.y)?_e.y:ee)+k.y,range:a.default.number(_e.range)?_e.range:m.range,source:Pe,index:ce,offset:k})}for(var ye={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},ke=0;ke<b.length;ke++){var Xe=b[ke],tt=Xe.range,yt=Xe.x-M.x,bt=Xe.y-M.y,ct=(0,ve.default)(yt,bt),wt=ct<=tt;tt===1/0&&ye.inRange&&ye.range!==1/0&&(wt=!1),ye.target&&!(wt?ye.inRange&&tt!==1/0?ct/tt<ye.distance/ye.range:tt===1/0&&ye.range!==1/0||ct<ye.distance:!ye.inRange&&ct<ye.distance)||(ye.target=Xe,ye.distance=ct,ye.range=tt,ye.inRange=wt,ye.delta.x=yt,ye.delta.y=bt)}return ye.inRange&&(c.x=ye.target.x,c.y=ye.target.y),f.closest=ye,ye},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};mr.snap=bm;var ES=(0,dn.makeModifier)(bm,"snap");mr.default=ES;var ji={};function Cm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(ji,"__esModule",{value:!0}),ji.snapSize=ji.default=void 0;var Am={start:function(s){var u=s.state,c=s.edges,f=u.options;if(!c)return null;s.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},u.targetFields=u.targetFields||[["width","height"],["x","y"]],mr.snap.start(s),u.offsets=s.state.offsets,s.state=u},set:function(s){var u,c,f=s.interaction,m=s.state,x=s.coords,C=m.options,M=m.offsets,b={x:x.x-M[0].x,y:x.y-M[0].y};m.options=(0,j.default)({},C),m.options.targets=[];for(var I=0;I<(C.targets||[]).length;I++){var k=(C.targets||[])[I],V=void 0;if(V=a.default.func(k)?k(b.x,b.y,f):k){for(var ee=0;ee<m.targetFields.length;ee++){var ce=(u=m.targetFields[ee],c=2,function(ye){if(Array.isArray(ye))return ye}(u)||function(ye,ke){var Xe=ye==null?null:typeof Symbol<"u"&&ye[Symbol.iterator]||ye["@@iterator"];if(Xe!=null){var tt,yt,bt=[],ct=!0,wt=!1;try{for(Xe=Xe.call(ye);!(ct=(tt=Xe.next()).done)&&(bt.push(tt.value),!ke||bt.length!==ke);ct=!0);}catch(ri){wt=!0,yt=ri}finally{try{ct||Xe.return==null||Xe.return()}finally{if(wt)throw yt}}return bt}}(u,c)||function(ye,ke){if(ye){if(typeof ye=="string")return Cm(ye,ke);var Xe=Object.prototype.toString.call(ye).slice(8,-1);return Xe==="Object"&&ye.constructor&&(Xe=ye.constructor.name),Xe==="Map"||Xe==="Set"?Array.from(ye):Xe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Xe)?Cm(ye,ke):void 0}}(u,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Z=ce[0],_e=ce[1];if(Z in V||_e in V){V.x=V[Z],V.y=V[_e];break}}m.options.targets.push(V)}}var Pe=mr.snap.set(s);return m.options=C,Pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ji.snapSize=Am;var wS=(0,dn.makeModifier)(Am,"snapSize");ji.default=wS;var Vo={};Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.snapEdges=Vo.default=void 0;var Pm={start:function(s){var u=s.edges;return u?(s.state.targetFields=s.state.targetFields||[[u.left?"left":"right",u.top?"top":"bottom"]],ji.snapSize.start(s)):null},set:ji.snapSize.set,defaults:(0,j.default)((0,$r.default)(ji.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};Vo.snapEdges=Pm;var TS=(0,dn.makeModifier)(Pm,"snapEdges");Vo.default=TS;var gf={};Object.defineProperty(gf,"__esModule",{value:!0}),Object.defineProperty(gf,"default",{enumerable:!0,get:function(){return Jr.default}});var _f={};Object.defineProperty(_f,"__esModule",{value:!0}),Object.defineProperty(_f,"default",{enumerable:!0,get:function(){return Jr.default}});var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.default=void 0;var bS={aspectRatio:zo.default,restrictEdges:Ii.default,restrict:Cn.default,restrictRect:Bo.default,restrictSize:Go.default,snapEdges:Vo.default,snap:mr.default,snapSize:ji.default,spring:gf.default,avoid:pf.default,transform:_f.default,rubberband:vf.default};Ho.default=bS;var da={};Object.defineProperty(da,"__esModule",{value:!0}),da.default=void 0;var CS={id:"modifiers",install:function(s){var u=s.interactStatic;for(var c in s.usePlugin(dn.default),s.usePlugin(Xl.default),u.modifiers=Ho.default,Ho.default){var f=Ho.default[c],m=f._defaults,x=f._methods;m._methods=x,s.defaults.perAction[c]=m}}},AS=CS;da.default=AS;var eo={};function yf(s){return yf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},yf(s)}function PS(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function xf(s,u){return xf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},xf(s,u)}function RS(s,u){if(u&&(yf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Sf(s)}function Sf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Yl(s){return Yl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Yl(s)}Object.defineProperty(eo,"__esModule",{value:!0}),eo.default=eo.PointerEvent=void 0;var DS=function(s){(function(M,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(b&&b.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),b&&xf(M,b)})(C,s);var u,c,f,m,x=(f=C,m=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,b=Yl(f);if(m){var I=Yl(this).constructor;M=Reflect.construct(b,arguments,I)}else M=b.apply(this,arguments);return RS(this,M)});function C(M,b,I,k,V,ee){var ce;if(function(Pe,ye){if(!(Pe instanceof ye))throw new TypeError("Cannot call a class as a function")}(this,C),ce=x.call(this,V),q.pointerExtend(Sf(ce),I),I!==b&&q.pointerExtend(Sf(ce),b),ce.timeStamp=ee,ce.originalEvent=I,ce.type=M,ce.pointerId=q.getPointerId(b),ce.pointerType=q.getPointerType(b),ce.target=k,ce.currentTarget=null,M==="tap"){var Z=V.getPointerIndex(b);ce.dt=ce.timeStamp-V.pointers[Z].downTime;var _e=ce.timeStamp-V.tapTime;ce.double=!!V.prevTap&&V.prevTap.type!=="doubletap"&&V.prevTap.target===ce.target&&_e<500}else M==="doubletap"&&(ce.dt=b.timeStamp-V.tapTime,ce.double=!0);return ce}return u=C,(c=[{key:"_subtractOrigin",value:function(M){var b=M.x,I=M.y;return this.pageX-=b,this.pageY-=I,this.clientX-=b,this.clientY-=I,this}},{key:"_addOrigin",value:function(M){var b=M.x,I=M.y;return this.pageX+=b,this.pageY+=I,this.clientX+=b,this.clientY+=I,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&PS(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Ge.BaseEvent);eo.PointerEvent=eo.default=DS;var ha={};Object.defineProperty(ha,"__esModule",{value:!0}),ha.default=void 0;var ql={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=ql,s.defaults.actions.pointerEvents=ql.defaults,(0,j.default)(s.actions.phaselessTypes,ql.types)},listeners:{"interactions:new":function(s){var u=s.interaction;u.prevTap=null,u.tapTime=0},"interactions:update-pointer":function(s){var u=s.down,c=s.pointerInfo;!u&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(s,u){var c=s.interaction,f=s.pointer,m=s.event,x=s.eventTarget;s.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&Mf(s),vr({interaction:c,pointer:f,event:m,eventTarget:x,type:"move"},u))},"interactions:down":function(s,u){(function(c,f){for(var m=c.interaction,x=c.pointer,C=c.event,M=c.eventTarget,b=c.pointerIndex,I=m.pointers[b].hold,k=z.getPath(M),V={interaction:m,pointer:x,event:C,eventTarget:M,type:"hold",targets:[],path:k,node:null},ee=0;ee<k.length;ee++){var ce=k[ee];V.node=ce,f.fire("pointerEvents:collect-targets",V)}if(V.targets.length){for(var Z=1/0,_e=0;_e<V.targets.length;_e++){var Pe=V.targets[_e].eventable.options.holdDuration;Pe<Z&&(Z=Pe)}I.duration=Z,I.timeout=setTimeout(function(){vr({interaction:m,eventTarget:M,pointer:x,event:C,type:"hold"},f)},Z)}})(s,u),vr(s,u)},"interactions:up":function(s,u){Mf(s),vr(s,u),function(c,f){var m=c.interaction,x=c.pointer,C=c.event,M=c.eventTarget;m.pointerWasMoved||vr({interaction:m,eventTarget:M,pointer:x,event:C,type:"tap"},f)}(s,u)},"interactions:cancel":function(s,u){Mf(s),vr(s,u)}},PointerEvent:eo.PointerEvent,fire:vr,collectEventTargets:Rm,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function vr(s,u){var c=s.interaction,f=s.pointer,m=s.event,x=s.eventTarget,C=s.type,M=s.targets,b=M===void 0?Rm(s,u):M,I=new eo.PointerEvent(C,f,m,x,c,u.now());u.fire("pointerEvents:new",{pointerEvent:I});for(var k={interaction:c,pointer:f,event:m,eventTarget:x,targets:b,type:C,pointerEvent:I},V=0;V<b.length;V++){var ee=b[V];for(var ce in ee.props||{})I[ce]=ee.props[ce];var Z=(0,J.default)(ee.eventable,ee.node);if(I._subtractOrigin(Z),I.eventable=ee.eventable,I.currentTarget=ee.node,ee.eventable.fire(I),I._addOrigin(Z),I.immediatePropagationStopped||I.propagationStopped&&V+1<b.length&&b[V+1].node!==I.currentTarget)break}if(u.fire("pointerEvents:fired",k),C==="tap"){var _e=I.double?vr({interaction:c,pointer:f,event:m,eventTarget:x,type:"doubletap"},u):I;c.prevTap=_e,c.tapTime=_e.timeStamp}return I}function Rm(s,u){var c=s.interaction,f=s.pointer,m=s.event,x=s.eventTarget,C=s.type,M=c.getPointerIndex(f),b=c.pointers[M];if(C==="tap"&&(c.pointerWasMoved||!b||b.downTarget!==x))return[];for(var I=z.getPath(x),k={interaction:c,pointer:f,event:m,eventTarget:x,type:C,path:I,targets:[],node:null},V=0;V<I.length;V++){var ee=I[V];k.node=ee,u.fire("pointerEvents:collect-targets",k)}return C==="hold"&&(k.targets=k.targets.filter(function(ce){var Z;return ce.eventable.options.holdDuration===((Z=c.pointers[M])==null?void 0:Z.hold.duration)})),k.targets}function Mf(s){var u=s.interaction,c=s.pointerIndex,f=u.pointers[c].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var LS=ql;ha.default=LS;var $l={};function IS(s){var u=s.interaction;u.holdIntervalHandle&&(clearInterval(u.holdIntervalHandle),u.holdIntervalHandle=null)}Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var US={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(ha.default);var u=s.pointerEvents;u.defaults.holdRepeatInterval=0,u.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(s,u){return s["pointerEvents:".concat(u)]=IS,s},{"pointerEvents:new":function(s){var u=s.pointerEvent;u.type==="hold"&&(u.count=(u.count||0)+1)},"pointerEvents:fired":function(s,u){var c=s.interaction,f=s.pointerEvent,m=s.eventTarget,x=s.targets;if(f.type==="hold"&&x.length){var C=x[0].eventable.options.holdRepeatInterval;C<=0||(c.holdIntervalHandle=setTimeout(function(){u.pointerEvents.fire({interaction:c,eventTarget:m,type:"hold",pointer:f,event:f},u)},C))}}})},OS=US;$l.default=OS;var Kl={};function NS(s){return(0,j.default)(this.events.options,s),this}Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.default=void 0;var FS={id:"pointer-events/interactableTargets",install:function(s){var u=s.Interactable;u.prototype.pointerEvents=NS;var c=u.prototype._backCompatOption;u.prototype._backCompatOption=function(f,m){var x=c.call(this,f,m);return x===this&&(this.events.options[f]=m),x}},listeners:{"pointerEvents:collect-targets":function(s,u){var c=s.targets,f=s.node,m=s.type,x=s.eventTarget;u.interactables.forEachMatch(f,function(C){var M=C.events,b=M.options;M.types[m]&&M.types[m].length&&C.testIgnoreAllow(b,f,x)&&c.push({node:f,eventable:M,props:{interactable:C}})})},"interactable:new":function(s){var u=s.interactable;u.events.getRect=function(c){return u.getRect(c)}},"interactable:set":function(s,u){var c=s.interactable,f=s.options;(0,j.default)(c.events.options,u.pointerEvents.defaults),(0,j.default)(c.events.options,f.pointerEvents||{})}}},kS=FS;Kl.default=kS;var pa={};Object.defineProperty(pa,"__esModule",{value:!0}),pa.default=void 0;var zS={id:"pointer-events",install:function(s){s.usePlugin(ha),s.usePlugin($l.default),s.usePlugin(Kl.default)}},BS=zS;pa.default=BS;var Wo={};function Dm(s){var u=s.Interactable;s.actions.phases.reflow=!0,u.prototype.reflow=function(c){return function(f,m,x){for(var C=a.default.string(f.target)?Ye.from(f._context.querySelectorAll(f.target)):[f.target],M=x.window.Promise,b=M?[]:null,I=function(){var V=C[k],ee=f.getRect(V);if(!ee)return"break";var ce=Ye.find(x.interactions.list,function(ke){return ke.interacting()&&ke.interactable===f&&ke.element===V&&ke.prepared.name===m.name}),Z=void 0;if(ce)ce.move(),b&&(Z=ce._reflowPromise||new M(function(ke){ce._reflowResolve=ke}));else{var _e=(0,ue.tlbrToXywh)(ee),Pe={page:{x:_e.x,y:_e.y},client:{x:_e.x,y:_e.y},timeStamp:x.now()},ye=q.coordsToEvent(Pe);Z=function(ke,Xe,tt,yt,bt){var ct=ke.interactions.new({pointerType:"reflow"}),wt={interaction:ct,event:bt,pointer:bt,eventTarget:tt,phase:"reflow"};ct.interactable=Xe,ct.element=tt,ct.prevEvent=bt,ct.updatePointer(bt,bt,tt,!0),q.setZeroCoords(ct.coords.delta),(0,re.copyAction)(ct.prepared,yt),ct._doPhase(wt);var ri=ke.window.Promise,Xi=ri?new ri(function(Tf){ct._reflowResolve=Tf}):void 0;return ct._reflowPromise=Xi,ct.start(yt,Xe,tt),ct._interacting?(ct.move(wt),ct.end(bt)):(ct.stop(),ct._reflowResolve()),ct.removePointer(bt,bt),Xi}(x,f,V,m,ye)}b&&b.push(Z)},k=0;k<C.length&&I()!=="break";k++);return b&&M.all(b).then(function(){return f})}(this,c,s)}}Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.default=void 0,Wo.install=Dm;var GS={id:"reflow",install:Dm,listeners:{"interactions:stop":function(s,u){var c=s.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),Ye.remove(u.interactions.list,c))}}},VS=GS;Wo.default=VS;var ii={exports:{}};function Ef(s){return Ef=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Ef(s)}Object.defineProperty(ii.exports,"__esModule",{value:!0}),ii.exports.default=void 0,pn.default.use(pi.default),pn.default.use(hr.default),pn.default.use(pa.default),pn.default.use(Qr.default),pn.default.use(da.default),pn.default.use(Ht.default),pn.default.use(pt.default),pn.default.use(ti.default),pn.default.use(Wo.default);var HS=pn.default;if(ii.exports.default=HS,Ef(ii)==="object"&&ii)try{ii.exports=pn.default}catch{}pn.default.default=pn.default,pt.default,ti.default,Ht.default,pi.default,Pl.default,Qr.default,pn.default,da.default,hr.default,pa.default,Wo.default,ii=ii.exports;var to={exports:{}};function wf(s){return wf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},wf(s)}Object.defineProperty(to.exports,"__esModule",{value:!0}),to.exports.default=void 0;var WS=ii.default;if(to.exports.default=WS,wf(to)==="object"&&to)try{to.exports=ii.default}catch{}return ii.default.default=ii.default,to.exports})})(Oy);var gw=Oy.exports;const _w=jS(gw),{abs:Lp,cos:Ny,sin:yw,cosh:SR,sinh:MR,acos:ER,acosh:wR,tan:xw,min:Gv,max:Fy,round:Sw,sqrt:Hc,sign:ky,floor:Mw,log:TR,exp:bR,PI:ll}=Math,Ew=t=>String.fromCharCode(97+t),zy=t=>{if(t.length===1)return t[0][0];let e=0;for(let n=0;n<t.length;n++){const i=new Array(t.length-1).fill().map(()=>new Array(t.length-1).fill(0));for(let o=1;o<t.length;o++)for(let l=0;l<t.length;l++)l<n?i[o-1][l]=t[o][l]:l>n&&(i[o-1][l-1]=t[o][l]);const r=n%2===0?1:-1;e+=t[0][n]*r*zy(i)}return e},ww=(t,e)=>t.map((n,i)=>n.map((r,o)=>-Ny((e?e[i][o]:1)*ll/r))),Tw=t=>{const e=zy(t);return Lp(e)<1e-8?0:ky(e)},By=(t,e,n)=>{let i=0;for(let r=0;r<t.length;r++)i+=t[r]*e[r]*(r===t.length-1&&n||1);return i},bw=(t,e)=>{if(t=t.slice(),e===0){for(let i=0;i<t.length;i++)t[i]/=t[t.length-1];return t}const n=(e===-1&&ky(t[t.length-1])||1)/Hc(Lp(By(t,t,e)));for(let i=0;i<t.length;i++)t[i]*=n;return t},Qf=(t,e)=>{const[n,i]=t,r=Ny(e),o=yw(e);t[0]=n*r-i*o,t[1]=n*o+i*r},Jf=(t,e,n)=>{if(n!==0){const i=e/Hc(By(t,t,1)),r=new Array(t.length-1);for(let o=0;o<t.length-1;o++)r[o]=t[o]*i;Ku(t,r,n)}else for(let i=0;i<t.length;i++)t[i]*=1-e},Cw=(t,e,n)=>{const i=t.length,r=n;for(let o=0;o<i-1;o++){const l=e[o];if(l!==0){const a=Hc(1-r*l*l),d=l;let h=t[o],v=t[i-1];t[o]=a*h+-r*d*v,t[i-1]=d*h+a*v}}},Ku=(t,e,n)=>{if(n===0)for(let i=0;i<e.length;i++)t[i]+=e[i];else Cw(t,e,n)},Aw=(t,e)=>{const n=t[0].length,i=new Array(n).fill().map(()=>new Array(n).fill(0));i[0][0]=1;for(let r=1;r<n;r++){for(let o=0;o<r;o++){let l=0;for(let a=0;a<o;a++)l+=i[r][a]*i[o][a];i[r][o]=(t[r][o]-l)/i[o][o]}i[r][r]=Hc(Lp(1-i[r].slice(0,r).reduce((o,l)=>o+l*l,0)))}return i[i.length-1][i.length-1]=e?i[i.length-1][i.length-1]*e:1,i},Pw=(t,e,n)=>{const i=t.length,r=new Array(i);for(let o=0;o<i;o++){let l=0;for(let a=0;a<o;a++)l+=e[o][a]*r[a];r[o]=((isNaN(t[o])?1:+t[o])-l)/e[o][o]}return r[r.length-1]*=n||1,bw(r,n)};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="152",Xo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rw=0,Vv=1,Dw=2,Up=1,Gy=2,Ji=3,Br=0,Dn=1,nr=2,un=0,Ds=1,Ph=2,Hv=3,Wv=4,Mc=5,Cr=100,Lw=101,Iw=102,jv=103,Xv=104,Rh=200,Uw=201,Ow=202,Nw=203,Vy=204,Hy=205,Wy=206,Fw=207,jy=208,kw=209,zw=210,Bw=0,Gw=1,Vw=2,Dh=3,Hw=4,Ww=5,jw=6,Xw=7,Wc=0,Yw=1,qw=2,Gi=0,$w=1,Xy=2,Kw=3,Zw=4,Qw=5,Yy=300,Vs=301,Hs=302,Ec=303,Lh=304,jc=306,Po=1e3,Ti=1001,Ih=1002,Qt=1003,Yv=1004,ed=1005,li=1006,Jw=1007,ul=1008,Ro=1009,e1=1010,t1=1011,Op=1012,n1=1013,go=1014,_o=1015,cl=1016,i1=1017,r1=1018,Ls=1020,o1=1021,bi=1023,s1=1024,a1=1025,So=1026,Ws=1027,l1=1028,u1=1029,c1=1030,f1=1031,d1=1033,td=33776,nd=33777,id=33778,rd=33779,qv=35840,$v=35841,Kv=35842,Zv=35843,h1=36196,Qv=37492,Jv=37496,eg=37808,tg=37809,ng=37810,ig=37811,rg=37812,og=37813,sg=37814,ag=37815,lg=37816,ug=37817,cg=37818,fg=37819,dg=37820,hg=37821,od=36492,p1=36283,pg=36284,mg=36285,vg=36286,qy=3e3,sr=3001,m1=3200,xl=3201,Sl=0,v1=1,Mo="",it="srgb",Vi="srgb-linear",$y="display-p3",sd=7680,g1=519,gg=35044,_g="300 es",Uh=1035;class Oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,wc=180/Math.PI;function Ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[t&255]+xn[t>>8&255]+xn[t>>16&255]+xn[t>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function En(t,e,n){return Math.max(e,Math.min(n,t))}function _1(t,e){return(t%e+e)%e}function ld(t,e,n){return(1-n)*t+n*e}function yg(t){return(t&t-1)===0&&t!==0}function y1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function pu(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,l,a,d,h){const v=this.elements;return v[0]=e,v[1]=r,v[2]=a,v[3]=n,v[4]=o,v[5]=d,v[6]=i,v[7]=l,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[3],d=i[6],h=i[1],v=i[4],g=i[7],_=i[2],y=i[5],w=i[8],A=r[0],T=r[3],p=r[6],E=r[1],S=r[4],L=r[7],P=r[2],U=r[5],B=r[8];return o[0]=l*A+a*E+d*P,o[3]=l*T+a*S+d*U,o[6]=l*p+a*L+d*B,o[1]=h*A+v*E+g*P,o[4]=h*T+v*S+g*U,o[7]=h*p+v*L+g*B,o[2]=_*A+y*E+w*P,o[5]=_*T+y*S+w*U,o[8]=_*p+y*L+w*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],v=e[8];return n*l*v-n*a*h-i*o*v+i*a*d+r*o*h-r*l*d}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],v=e[8],g=v*l-a*h,_=a*d-v*o,y=h*o-l*d,w=n*g+i*_+r*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(r*h-v*i)*A,e[2]=(a*i-r*l)*A,e[3]=_*A,e[4]=(v*n-r*d)*A,e[5]=(r*o-a*n)*A,e[6]=y*A,e[7]=(i*d-h*n)*A,e[8]=(l*n-i*o)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,l,a){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*l+h*a)+l+e,-r*h,r*d,-r*(-h*l+d*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ud.makeScale(e,n)),this}rotate(e){return this.premultiply(ud.makeRotation(-e)),this}translate(e,n){return this.premultiply(ud.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new dt;function Ky(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const xg={};function Va(t){t in xg||(xg[t]=!0,console.warn(t))}function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const x1=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),S1=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function M1(t){return t.convertSRGBToLinear().applyMatrix3(S1)}function E1(t){return t.applyMatrix3(x1).convertLinearToSRGB()}const w1={[Vi]:t=>t,[it]:t=>t.convertSRGBToLinear(),[$y]:M1},T1={[Vi]:t=>t,[it]:t=>t.convertLinearToSRGB(),[$y]:E1},vi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Vi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=w1[e],r=T1[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let qo;class Zy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qo===void 0&&(qo=fl("canvas")),qo.width=e.width,qo.height=e.height;const i=qo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Is(o[l]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qy{constructor(e=null){this.isSource=!0,this.uuid=Ml(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?o.push(fd(r[l].image)):o.push(fd(r[l]))}else o=fd(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function fd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b1=0;class Wn extends Oo{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,i=Ti,r=Ti,o=li,l=ul,a=bi,d=Ro,h=Wn.DEFAULT_ANISOTROPY,v=Mo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ml(),this.name="",this.source=new Qy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=d,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===sr?it:Mo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?sr:qy}set encoding(e){Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?it:Mo}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Yy;Wn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const d=e.elements,h=d[0],v=d[4],g=d[8],_=d[1],y=d[5],w=d[9],A=d[2],T=d[6],p=d[10];if(Math.abs(v-_)<.01&&Math.abs(g-A)<.01&&Math.abs(w-T)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+A)<.1&&Math.abs(w+T)<.1&&Math.abs(h+y+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(h+1)/2,L=(y+1)/2,P=(p+1)/2,U=(v+_)/4,B=(g+A)/4,z=(w+T)/4;return S>L&&S>P?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=U/i,o=B/i):L>P?L<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),i=U/r,o=z/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=B/o,r=z/o),this.set(i,r,o,n),this}let E=Math.sqrt((T-w)*(T-w)+(g-A)*(g-A)+(_-v)*(_-v));return Math.abs(E)<.001&&(E=1),this.x=(T-w)/E,this.y=(g-A)/E,this.z=(_-v)/E,this.w=Math.acos((h+y+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends Oo{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?it:Mo),this.texture=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:li,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jy extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C1 extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,l,a){let d=i[r+0],h=i[r+1],v=i[r+2],g=i[r+3];const _=o[l+0],y=o[l+1],w=o[l+2],A=o[l+3];if(a===0){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(a===1){e[n+0]=_,e[n+1]=y,e[n+2]=w,e[n+3]=A;return}if(g!==A||d!==_||h!==y||v!==w){let T=1-a;const p=d*_+h*y+v*w+g*A,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),U=Math.atan2(P,p*E);T=Math.sin(T*U)/P,a=Math.sin(a*U)/P}const L=a*E;if(d=d*T+_*L,h=h*T+y*L,v=v*T+w*L,g=g*T+A*L,T===1-a){const P=1/Math.sqrt(d*d+h*h+v*v+g*g);d*=P,h*=P,v*=P,g*=P}}e[n]=d,e[n+1]=h,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,r,o,l){const a=i[r],d=i[r+1],h=i[r+2],v=i[r+3],g=o[l],_=o[l+1],y=o[l+2],w=o[l+3];return e[n]=a*w+v*g+d*y-h*_,e[n+1]=d*w+v*_+h*g-a*y,e[n+2]=h*w+v*y+a*_-d*g,e[n+3]=v*w-a*g-d*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,l=e._order,a=Math.cos,d=Math.sin,h=a(i/2),v=a(r/2),g=a(o/2),_=d(i/2),y=d(r/2),w=d(o/2);switch(l){case"XYZ":this._x=_*v*g+h*y*w,this._y=h*y*g-_*v*w,this._z=h*v*w+_*y*g,this._w=h*v*g-_*y*w;break;case"YXZ":this._x=_*v*g+h*y*w,this._y=h*y*g-_*v*w,this._z=h*v*w-_*y*g,this._w=h*v*g+_*y*w;break;case"ZXY":this._x=_*v*g-h*y*w,this._y=h*y*g+_*v*w,this._z=h*v*w+_*y*g,this._w=h*v*g-_*y*w;break;case"ZYX":this._x=_*v*g-h*y*w,this._y=h*y*g+_*v*w,this._z=h*v*w-_*y*g,this._w=h*v*g+_*y*w;break;case"YZX":this._x=_*v*g+h*y*w,this._y=h*y*g+_*v*w,this._z=h*v*w-_*y*g,this._w=h*v*g-_*y*w;break;case"XZY":this._x=_*v*g-h*y*w,this._y=h*y*g-_*v*w,this._z=h*v*w+_*y*g,this._w=h*v*g+_*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],l=n[1],a=n[5],d=n[9],h=n[2],v=n[6],g=n[10],_=i+a+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-d)*y,this._y=(o-h)*y,this._z=(l-r)*y}else if(i>a&&i>g){const y=2*Math.sqrt(1+i-a-g);this._w=(v-d)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(o+h)/y}else if(a>g){const y=2*Math.sqrt(1+a-i-g);this._w=(o-h)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(d+v)/y}else{const y=2*Math.sqrt(1+g-i-a);this._w=(l-r)/y,this._x=(o+h)/y,this._y=(d+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,l=e._w,a=n._x,d=n._y,h=n._z,v=n._w;return this._x=i*v+l*a+r*h-o*d,this._y=r*v+l*d+o*a-i*h,this._z=o*v+l*h+i*d-r*a,this._w=l*v-i*a-r*d-o*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const d=1-a*a;if(d<=Number.EPSILON){const y=1-n;return this._w=y*l+n*this._w,this._x=y*i+n*this._x,this._y=y*r+n*this._y,this._z=y*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),v=Math.atan2(h,a),g=Math.sin((1-n)*v)/h,_=Math.sin(n*v)/h;return this._w=l*g+this._w*_,this._x=i*g+this._x*_,this._y=r*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,l=e.y,a=e.z,d=e.w,h=d*n+l*r-a*i,v=d*i+a*n-o*r,g=d*r+o*i-l*n,_=-o*n-l*i-a*r;return this.x=h*d+_*-o+v*-a-g*-l,this.y=v*d+_*-l+g*-o-h*-a,this.z=g*d+_*-a+h*-l-v*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,l=n.x,a=n.y,d=n.z;return this.x=r*d-o*a,this.y=o*l-i*d,this.z=i*a-r*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new Y,Sg=new Do;class El{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox),$o.applyMatrix4(e.matrixWorld),this.union($o);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let l=0,a=o.count;l<a;l++)qi.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else r.boundingBox===null&&r.computeBoundingBox(),$o.copy(r.boundingBox),$o.applyMatrix4(e.matrixWorld),this.union($o)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),mu.subVectors(this.max,Ea),Ko.subVectors(e.a,Ea),Zo.subVectors(e.b,Ea),Qo.subVectors(e.c,Ea),_r.subVectors(Zo,Ko),yr.subVectors(Qo,Zo),no.subVectors(Ko,Qo);let n=[0,-_r.z,_r.y,0,-yr.z,yr.y,0,-no.z,no.y,_r.z,0,-_r.x,yr.z,0,-yr.x,no.z,0,-no.x,-_r.y,_r.x,0,-yr.y,yr.x,0,-no.y,no.x,0];return!hd(n,Ko,Zo,Qo,mu)||(n=[1,0,0,0,1,0,0,0,1],!hd(n,Ko,Zo,Qo,mu))?!1:(vu.crossVectors(_r,yr),n=[vu.x,vu.y,vu.z],hd(n,Ko,Zo,Qo,mu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qi=new Y,$o=new El,Ko=new Y,Zo=new Y,Qo=new Y,_r=new Y,yr=new Y,no=new Y,Ea=new Y,mu=new Y,vu=new Y,io=new Y;function hd(t,e,n,i,r){for(let o=0,l=t.length-3;o<=l;o+=3){io.fromArray(t,o);const a=r.x*Math.abs(io.x)+r.y*Math.abs(io.y)+r.z*Math.abs(io.z),d=e.dot(io),h=n.dot(io),v=i.dot(io);if(Math.max(-Math.max(d,h,v),Math.min(d,h,v))>a)return!1}return!0}const A1=new El,wa=new Y,pd=new Y;class Np{constructor(e=new Y,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):A1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const n=wa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(pd)),this.expandByPoint(wa.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new Y,md=new Y,gu=new Y,xr=new Y,vd=new Y,_u=new Y,gd=new Y;class P1{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){md.copy(e).add(n).multiplyScalar(.5),gu.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(md);const o=e.distanceTo(n)*.5,l=-this.direction.dot(gu),a=xr.dot(this.direction),d=-xr.dot(gu),h=xr.lengthSq(),v=Math.abs(1-l*l);let g,_,y,w;if(v>0)if(g=l*d-a,_=l*a-d,w=o*v,g>=0)if(_>=-w)if(_<=w){const A=1/v;g*=A,_*=A,y=g*(g+l*_+2*a)+_*(l*g+_+2*d)+h}else _=o,g=Math.max(0,-(l*_+a)),y=-g*g+_*(_+2*d)+h;else _=-o,g=Math.max(0,-(l*_+a)),y=-g*g+_*(_+2*d)+h;else _<=-w?(g=Math.max(0,-(-l*o+a)),_=g>0?-o:Math.min(Math.max(-o,-d),o),y=-g*g+_*(_+2*d)+h):_<=w?(g=0,_=Math.min(Math.max(-o,-d),o),y=_*(_+2*d)+h):(g=Math.max(0,-(l*o+a)),_=g>0?o:Math.min(Math.max(-o,-d),o),y=-g*g+_*(_+2*d)+h);else _=l>0?-o:o,g=Math.max(0,-(l*_+a)),y=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(md).addScaledVector(gu,_),y}intersectSphere(e,n){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),r=$i.dot($i)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),a=i-l,d=i+l;return d<0?null:a<0?this.at(d,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,l,a,d;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,r=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,r=(e.min.x-_.x)*h),v>=0?(o=(e.min.y-_.y)*v,l=(e.max.y-_.y)*v):(o=(e.max.y-_.y)*v,l=(e.min.y-_.y)*v),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),g>=0?(a=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(a=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||a>r)||((a>i||i!==i)&&(i=a),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,i,r,o){vd.subVectors(n,e),_u.subVectors(i,e),gd.crossVectors(vd,_u);let l=this.direction.dot(gd),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;xr.subVectors(this.origin,e);const d=a*this.direction.dot(_u.crossVectors(xr,_u));if(d<0)return null;const h=a*this.direction.dot(vd.cross(xr));if(h<0||d+h>l)return null;const v=-a*xr.dot(gd);return v<0?null:this.at(v/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,l,a,d,h,v,g,_,y,w,A,T){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=l,p[9]=a,p[13]=d,p[2]=h,p[6]=v,p[10]=g,p[14]=_,p[3]=y,p[7]=w,p[11]=A,p[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jo.setFromMatrixColumn(e,0).length(),o=1/Jo.setFromMatrixColumn(e,1).length(),l=1/Jo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),a=Math.sin(i),d=Math.cos(r),h=Math.sin(r),v=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=l*v,y=l*g,w=a*v,A=a*g;n[0]=d*v,n[4]=-d*g,n[8]=h,n[1]=y+w*h,n[5]=_-A*h,n[9]=-a*d,n[2]=A-_*h,n[6]=w+y*h,n[10]=l*d}else if(e.order==="YXZ"){const _=d*v,y=d*g,w=h*v,A=h*g;n[0]=_+A*a,n[4]=w*a-y,n[8]=l*h,n[1]=l*g,n[5]=l*v,n[9]=-a,n[2]=y*a-w,n[6]=A+_*a,n[10]=l*d}else if(e.order==="ZXY"){const _=d*v,y=d*g,w=h*v,A=h*g;n[0]=_-A*a,n[4]=-l*g,n[8]=w+y*a,n[1]=y+w*a,n[5]=l*v,n[9]=A-_*a,n[2]=-l*h,n[6]=a,n[10]=l*d}else if(e.order==="ZYX"){const _=l*v,y=l*g,w=a*v,A=a*g;n[0]=d*v,n[4]=w*h-y,n[8]=_*h+A,n[1]=d*g,n[5]=A*h+_,n[9]=y*h-w,n[2]=-h,n[6]=a*d,n[10]=l*d}else if(e.order==="YZX"){const _=l*d,y=l*h,w=a*d,A=a*h;n[0]=d*v,n[4]=A-_*g,n[8]=w*g+y,n[1]=g,n[5]=l*v,n[9]=-a*v,n[2]=-h*v,n[6]=y*g+w,n[10]=_-A*g}else if(e.order==="XZY"){const _=l*d,y=l*h,w=a*d,A=a*h;n[0]=d*v,n[4]=-g,n[8]=h*v,n[1]=_*g+A,n[5]=l*v,n[9]=y*g-w,n[2]=w*g-y,n[6]=a*v,n[10]=A*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R1,e,D1)}lookAt(e,n,i){const r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Sr.crossVectors(i,Yn),Sr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Sr.crossVectors(i,Yn)),Sr.normalize(),yu.crossVectors(Yn,Sr),r[0]=Sr.x,r[4]=yu.x,r[8]=Yn.x,r[1]=Sr.y,r[5]=yu.y,r[9]=Yn.y,r[2]=Sr.z,r[6]=yu.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[4],d=i[8],h=i[12],v=i[1],g=i[5],_=i[9],y=i[13],w=i[2],A=i[6],T=i[10],p=i[14],E=i[3],S=i[7],L=i[11],P=i[15],U=r[0],B=r[4],z=r[8],R=r[12],N=r[1],ae=r[5],fe=r[9],$=r[13],te=r[2],j=r[6],ue=r[10],pe=r[14],X=r[3],J=r[7],ne=r[11],we=r[15];return o[0]=l*U+a*N+d*te+h*X,o[4]=l*B+a*ae+d*j+h*J,o[8]=l*z+a*fe+d*ue+h*ne,o[12]=l*R+a*$+d*pe+h*we,o[1]=v*U+g*N+_*te+y*X,o[5]=v*B+g*ae+_*j+y*J,o[9]=v*z+g*fe+_*ue+y*ne,o[13]=v*R+g*$+_*pe+y*we,o[2]=w*U+A*N+T*te+p*X,o[6]=w*B+A*ae+T*j+p*J,o[10]=w*z+A*fe+T*ue+p*ne,o[14]=w*R+A*$+T*pe+p*we,o[3]=E*U+S*N+L*te+P*X,o[7]=E*B+S*ae+L*j+P*J,o[11]=E*z+S*fe+L*ue+P*ne,o[15]=E*R+S*$+L*pe+P*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],l=e[1],a=e[5],d=e[9],h=e[13],v=e[2],g=e[6],_=e[10],y=e[14],w=e[3],A=e[7],T=e[11],p=e[15];return w*(+o*d*g-r*h*g-o*a*_+i*h*_+r*a*y-i*d*y)+A*(+n*d*y-n*h*_+o*l*_-r*l*y+r*h*v-o*d*v)+T*(+n*h*g-n*a*y-o*l*g+i*l*y+o*a*v-i*h*v)+p*(-r*a*v-n*d*g+n*a*_+r*l*g-i*l*_+i*d*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],v=e[8],g=e[9],_=e[10],y=e[11],w=e[12],A=e[13],T=e[14],p=e[15],E=g*T*h-A*_*h+A*d*y-a*T*y-g*d*p+a*_*p,S=w*_*h-v*T*h-w*d*y+l*T*y+v*d*p-l*_*p,L=v*A*h-w*g*h+w*a*y-l*A*y-v*a*p+l*g*p,P=w*g*d-v*A*d-w*a*_+l*A*_+v*a*T-l*g*T,U=n*E+i*S+r*L+o*P;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/U;return e[0]=E*B,e[1]=(A*_*o-g*T*o-A*r*y+i*T*y+g*r*p-i*_*p)*B,e[2]=(a*T*o-A*d*o+A*r*h-i*T*h-a*r*p+i*d*p)*B,e[3]=(g*d*o-a*_*o-g*r*h+i*_*h+a*r*y-i*d*y)*B,e[4]=S*B,e[5]=(v*T*o-w*_*o+w*r*y-n*T*y-v*r*p+n*_*p)*B,e[6]=(w*d*o-l*T*o-w*r*h+n*T*h+l*r*p-n*d*p)*B,e[7]=(l*_*o-v*d*o+v*r*h-n*_*h-l*r*y+n*d*y)*B,e[8]=L*B,e[9]=(w*g*o-v*A*o-w*i*y+n*A*y+v*i*p-n*g*p)*B,e[10]=(l*A*o-w*a*o+w*i*h-n*A*h-l*i*p+n*a*p)*B,e[11]=(v*a*o-l*g*o-v*i*h+n*g*h+l*i*y-n*a*y)*B,e[12]=P*B,e[13]=(v*A*r-w*g*r+w*i*_-n*A*_-v*i*T+n*g*T)*B,e[14]=(w*a*r-l*A*r-w*i*d+n*A*d+l*i*T-n*a*T)*B,e[15]=(l*g*r-v*a*r+v*i*d-n*g*d-l*i*_+n*a*_)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,l=e.x,a=e.y,d=e.z,h=o*l,v=o*a;return this.set(h*l+i,h*a-r*d,h*d+r*a,0,h*a+r*d,v*a+i,v*d-r*l,0,h*d-r*a,v*d+r*l,o*d*d+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,l=n._y,a=n._z,d=n._w,h=o+o,v=l+l,g=a+a,_=o*h,y=o*v,w=o*g,A=l*v,T=l*g,p=a*g,E=d*h,S=d*v,L=d*g,P=i.x,U=i.y,B=i.z;return r[0]=(1-(A+p))*P,r[1]=(y+L)*P,r[2]=(w-S)*P,r[3]=0,r[4]=(y-L)*U,r[5]=(1-(_+p))*U,r[6]=(T+E)*U,r[7]=0,r[8]=(w+S)*B,r[9]=(T-E)*B,r[10]=(1-(_+A))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Jo.set(r[0],r[1],r[2]).length();const l=Jo.set(r[4],r[5],r[6]).length(),a=Jo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const h=1/o,v=1/l,g=1/a;return gi.elements[0]*=h,gi.elements[1]*=h,gi.elements[2]*=h,gi.elements[4]*=v,gi.elements[5]*=v,gi.elements[6]*=v,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,n.setFromRotationMatrix(gi),i.x=o,i.y=l,i.z=a,this}makePerspective(e,n,i,r,o,l){const a=this.elements,d=2*o/(n-e),h=2*o/(i-r),v=(n+e)/(n-e),g=(i+r)/(i-r),_=-(l+o)/(l-o),y=-2*l*o/(l-o);return a[0]=d,a[4]=0,a[8]=v,a[12]=0,a[1]=0,a[5]=h,a[9]=g,a[13]=0,a[2]=0,a[6]=0,a[10]=_,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,l){const a=this.elements,d=1/(n-e),h=1/(i-r),v=1/(l-o),g=(n+e)*d,_=(i+r)*h,y=(l+o)*v;return a[0]=2*d,a[4]=0,a[8]=0,a[12]=-g,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-_,a[2]=0,a[6]=0,a[10]=-2*v,a[14]=-y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jo=new Y,gi=new Vt,R1=new Y(0,0,0),D1=new Y(1,1,1),Sr=new Y,yu=new Y,Yn=new Y,Mg=new Vt,Eg=new Do;class Xc{constructor(e=0,n=0,i=0,r=Xc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],a=r[8],d=r[1],h=r[5],v=r[9],g=r[2],_=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-En(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(En(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-En(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xc.DEFAULT_ORDER="XYZ";class ex{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L1=0;const wg=new Y,es=new Do,Ki=new Vt,xu=new Y,Ta=new Y,I1=new Y,U1=new Do,Tg=new Y(1,0,0),bg=new Y(0,1,0),Cg=new Y(0,0,1),O1={type:"added"},Ag={type:"removed"};class tn extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Y,n=new Xc,i=new Do,r=new Y(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new dt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,n){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xu.copy(e):xu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ta,xu,this.up):Ki.lookAt(xu,Ta,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Ki),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(O1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ag)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Ag)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const l=this.children[r].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,I1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,U1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,d){return a[d.uuid]===void 0&&(a[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const d=a.shapes;if(Array.isArray(d))for(let h=0,v=d.length;h<v;h++){const g=d[h];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let d=0,h=this.material.length;d<h;d++)a.push(o(e.materials,this.material[d]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const d=this.animations[a];r.animations.push(o(e.animations,d))}}if(n){const a=l(e.geometries),d=l(e.materials),h=l(e.textures),v=l(e.images),g=l(e.shapes),_=l(e.skeletons),y=l(e.animations),w=l(e.nodes);a.length>0&&(i.geometries=a),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),v.length>0&&(i.images=v),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=r,i;function l(a){const d=[];for(const h in a){const v=a[h];delete v.metadata,d.push(v)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Y(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new Y,Zi=new Y,_d=new Y,Qi=new Y,ts=new Y,ns=new Y,Pg=new Y,yd=new Y,xd=new Y,Sd=new Y;let Su=!1;class wi{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),_i.subVectors(e,n),r.cross(_i);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){_i.subVectors(r,n),Zi.subVectors(i,n),_d.subVectors(e,n);const l=_i.dot(_i),a=_i.dot(Zi),d=_i.dot(_d),h=Zi.dot(Zi),v=Zi.dot(_d),g=l*h-a*a;if(g===0)return o.set(-2,-1,-1);const _=1/g,y=(h*d-a*v)*_,w=(l*v-a*d)*_;return o.set(1-y-w,w,y)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qi),Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,n,i,r,o,l,a,d){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),this.getInterpolation(e,n,i,r,o,l,a,d)}static getInterpolation(e,n,i,r,o,l,a,d){return this.getBarycoord(e,n,i,r,Qi),d.setScalar(0),d.addScaledVector(o,Qi.x),d.addScaledVector(l,Qi.y),d.addScaledVector(a,Qi.z),d}static isFrontFacing(e,n,i,r){return _i.subVectors(i,n),Zi.subVectors(e,n),_i.cross(Zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),_i.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let l,a;ts.subVectors(r,i),ns.subVectors(o,i),yd.subVectors(e,i);const d=ts.dot(yd),h=ns.dot(yd);if(d<=0&&h<=0)return n.copy(i);xd.subVectors(e,r);const v=ts.dot(xd),g=ns.dot(xd);if(v>=0&&g<=v)return n.copy(r);const _=d*g-v*h;if(_<=0&&d>=0&&v<=0)return l=d/(d-v),n.copy(i).addScaledVector(ts,l);Sd.subVectors(e,o);const y=ts.dot(Sd),w=ns.dot(Sd);if(w>=0&&y<=w)return n.copy(o);const A=y*h-d*w;if(A<=0&&h>=0&&w<=0)return a=h/(h-w),n.copy(i).addScaledVector(ns,a);const T=v*w-y*g;if(T<=0&&g-v>=0&&y-w>=0)return Pg.subVectors(o,r),a=(g-v)/(g-v+(y-w)),n.copy(r).addScaledVector(Pg,a);const p=1/(T+A+_);return l=A*p,a=_*p,n.copy(i).addScaledVector(ts,l).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let N1=0;class jr extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Ds,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Vy,this.blendDst=Hy,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sd,this.stencilZFail=sd,this.stencilZPass=sd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const a in o){const d=o[a];delete d.metadata,l.push(d)}return l}if(n){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function Md(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=vi.workingColorSpace){return this.r=e,this.g=n,this.b=i,vi.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=vi.workingColorSpace){if(e=_1(e,1),n=En(n,0,1),i=En(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=Md(l,o,e+1/3),this.g=Md(l,o,e),this.b=Md(l,o,e-1/3)}return vi.toWorkingColorSpace(this,r),this}setStyle(e,n=it){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=it){const i=tx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=cd(e.r),this.g=cd(e.g),this.b=cd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return vi.fromWorkingColorSpace(Sn.copy(this),e),Math.round(En(Sn.r*255,0,255))*65536+Math.round(En(Sn.g*255,0,255))*256+Math.round(En(Sn.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vi.workingColorSpace){vi.fromWorkingColorSpace(Sn.copy(this),n);const i=Sn.r,r=Sn.g,o=Sn.b,l=Math.max(i,r,o),a=Math.min(i,r,o);let d,h;const v=(a+l)/2;if(a===l)d=0,h=0;else{const g=l-a;switch(h=v<=.5?g/(l+a):g/(2-l-a),l){case i:d=(r-o)/g+(r<o?6:0);break;case r:d=(o-i)/g+2;break;case o:d=(i-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=v,e}getRGB(e,n=vi.workingColorSpace){return vi.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=it){vi.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,r=Sn.b;return e!==it?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),yi.h+=e,yi.s+=n,yi.l+=i,this.setHSL(yi.h,yi.s,yi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(Mu);const i=ld(yi.h,Mu.h,n),r=ld(yi.s,Mu.s,n),o=ld(yi.l,Mu.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ze;Ze.NAMES=tx;class Eo extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,Eu=new Ne;class Pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(e),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pu(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pu(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pu(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pu(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nx extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ix extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let F1=0;const oi=new Vt,Ed=new tn,is=new Y,qn=new El,ba=new El,ln=new Y;class Di extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?ix:nx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new dt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,i){return oi.makeTranslation(e,n,i),this.applyMatrix4(oi),this}scale(e,n,i){return oi.makeScale(e,n,i),this.applyMatrix4(oi),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Np);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const a=n[o];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(qn.min,ba.min),qn.expandByPoint(ln),ln.addVectors(qn.max,ba.max),qn.expandByPoint(ln)):(qn.expandByPoint(ba.min),qn.expandByPoint(ba.max))}qn.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)ln.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ln));if(n)for(let o=0,l=n.length;o<l;o++){const a=n[o],d=this.morphTargetsRelative;for(let h=0,v=a.count;h<v;h++)ln.fromBufferAttribute(a,h),d&&(is.fromBufferAttribute(e,h),ln.add(is)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,l=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a),4));const d=this.getAttribute("tangent").array,h=[],v=[];for(let N=0;N<a;N++)h[N]=new Y,v[N]=new Y;const g=new Y,_=new Y,y=new Y,w=new Ne,A=new Ne,T=new Ne,p=new Y,E=new Y;function S(N,ae,fe){g.fromArray(r,N*3),_.fromArray(r,ae*3),y.fromArray(r,fe*3),w.fromArray(l,N*2),A.fromArray(l,ae*2),T.fromArray(l,fe*2),_.sub(g),y.sub(g),A.sub(w),T.sub(w);const $=1/(A.x*T.y-T.x*A.y);isFinite($)&&(p.copy(_).multiplyScalar(T.y).addScaledVector(y,-A.y).multiplyScalar($),E.copy(y).multiplyScalar(A.x).addScaledVector(_,-T.x).multiplyScalar($),h[N].add(p),h[ae].add(p),h[fe].add(p),v[N].add(E),v[ae].add(E),v[fe].add(E))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ue=$+te;j<ue;j+=3)S(i[j+0],i[j+1],i[j+2])}const P=new Y,U=new Y,B=new Y,z=new Y;function R(N){B.fromArray(o,N*3),z.copy(B);const ae=h[N];P.copy(ae),P.sub(B.multiplyScalar(B.dot(ae))).normalize(),U.crossVectors(z,ae);const $=U.dot(v[N])<0?-1:1;d[N*4]=P.x,d[N*4+1]=P.y,d[N*4+2]=P.z,d[N*4+3]=$}for(let N=0,ae=L.length;N<ae;++N){const fe=L[N],$=fe.start,te=fe.count;for(let j=$,ue=$+te;j<ue;j+=3)R(i[j+0]),R(i[j+1]),R(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const r=new Y,o=new Y,l=new Y,a=new Y,d=new Y,h=new Y,v=new Y,g=new Y;if(e)for(let _=0,y=e.count;_<y;_+=3){const w=e.getX(_+0),A=e.getX(_+1),T=e.getX(_+2);r.fromBufferAttribute(n,w),o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,T),v.subVectors(l,o),g.subVectors(r,o),v.cross(g),a.fromBufferAttribute(i,w),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,T),a.add(v),d.add(v),h.add(v),i.setXYZ(w,a.x,a.y,a.z),i.setXYZ(A,d.x,d.y,d.z),i.setXYZ(T,h.x,h.y,h.z)}else for(let _=0,y=n.count;_<y;_+=3)r.fromBufferAttribute(n,_+0),o.fromBufferAttribute(n,_+1),l.fromBufferAttribute(n,_+2),v.subVectors(l,o),g.subVectors(r,o),v.cross(g),i.setXYZ(_+0,v.x,v.y,v.z),i.setXYZ(_+1,v.x,v.y,v.z),i.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,d){const h=a.array,v=a.itemSize,g=a.normalized,_=new h.constructor(d.length*v);let y=0,w=0;for(let A=0,T=d.length;A<T;A++){a.isInterleavedBufferAttribute?y=d[A]*a.data.stride+a.offset:y=d[A]*v;for(let p=0;p<v;p++)_[w++]=h[y++]}return new Pi(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,i=this.index.array,r=this.attributes;for(const a in r){const d=r[a],h=e(d,i);n.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const d=[],h=o[a];for(let v=0,g=h.length;v<g;v++){const _=h[v],y=e(_,i);d.push(y)}n.morphAttributes[a]=d}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,d=l.length;a<d;a++){const h=l[a];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],v=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];v.push(y.toJSON(e.data))}v.length>0&&(r[d]=v,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const h in r){const v=r[h];this.setAttribute(h,v.clone(n))}const o=e.morphAttributes;for(const h in o){const v=[],g=o[h];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,v=l.length;h<v;h++){const g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new Vt,Oi=new P1,wu=new Np,Dg=new Y,rs=new Y,os=new Y,ss=new Y,wd=new Y,Tu=new Y,bu=new Ne,Cu=new Ne,Au=new Ne,Lg=new Y,Ig=new Y,Ug=new Y,Pu=new Y,Ru=new Y;class Bn extends tn{constructor(e=new Di,n=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Tu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const v=a[d],g=o[d];v!==0&&(wd.fromBufferAttribute(g,e),l?Tu.addScaledVector(wd,v):Tu.addScaledVector(wd.sub(n),v))}n.add(Tu)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wu.copy(i.boundingSphere),wu.applyMatrix4(o),Oi.copy(e.ray).recast(e.near),!(wu.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(wu,Dg)===null||Oi.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Rg.copy(o).invert(),Oi.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,v=r.attributes.normal,g=r.groups,_=r.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,w=g.length;y<w;y++){const A=g[y],T=o[A.materialIndex],p=Math.max(A.start,_.start),E=Math.min(l.count,Math.min(A.start+A.count,_.start+_.count));for(let S=p,L=E;S<L;S+=3){const P=l.getX(S),U=l.getX(S+1),B=l.getX(S+2);i=Du(this,T,e,Oi,d,h,v,P,U,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=A.materialIndex,n.push(i))}}else{const y=Math.max(0,_.start),w=Math.min(l.count,_.start+_.count);for(let A=y,T=w;A<T;A+=3){const p=l.getX(A),E=l.getX(A+1),S=l.getX(A+2);i=Du(this,o,e,Oi,d,h,v,p,E,S),i&&(i.faceIndex=Math.floor(A/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let y=0,w=g.length;y<w;y++){const A=g[y],T=o[A.materialIndex],p=Math.max(A.start,_.start),E=Math.min(a.count,Math.min(A.start+A.count,_.start+_.count));for(let S=p,L=E;S<L;S+=3){const P=S,U=S+1,B=S+2;i=Du(this,T,e,Oi,d,h,v,P,U,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=A.materialIndex,n.push(i))}}else{const y=Math.max(0,_.start),w=Math.min(a.count,_.start+_.count);for(let A=y,T=w;A<T;A+=3){const p=A,E=A+1,S=A+2;i=Du(this,o,e,Oi,d,h,v,p,E,S),i&&(i.faceIndex=Math.floor(A/3),n.push(i))}}}}function k1(t,e,n,i,r,o,l,a){let d;if(e.side===Dn?d=i.intersectTriangle(l,o,r,!0,a):d=i.intersectTriangle(r,o,l,e.side===Br,a),d===null)return null;Ru.copy(a),Ru.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Ru);return h<n.near||h>n.far?null:{distance:h,point:Ru.clone(),object:t}}function Du(t,e,n,i,r,o,l,a,d,h){t.getVertexPosition(a,rs),t.getVertexPosition(d,os),t.getVertexPosition(h,ss);const v=k1(t,e,n,i,rs,os,ss,Pu);if(v){r&&(bu.fromBufferAttribute(r,a),Cu.fromBufferAttribute(r,d),Au.fromBufferAttribute(r,h),v.uv=wi.getInterpolation(Pu,rs,os,ss,bu,Cu,Au,new Ne)),o&&(bu.fromBufferAttribute(o,a),Cu.fromBufferAttribute(o,d),Au.fromBufferAttribute(o,h),v.uv1=wi.getInterpolation(Pu,rs,os,ss,bu,Cu,Au,new Ne),v.uv2=v.uv1),l&&(Lg.fromBufferAttribute(l,a),Ig.fromBufferAttribute(l,d),Ug.fromBufferAttribute(l,h),v.normal=wi.getInterpolation(Pu,rs,os,ss,Lg,Ig,Ug,new Y),v.normal.dot(i.direction)>0&&v.normal.multiplyScalar(-1));const g={a,b:d,c:h,normal:new Y,materialIndex:0};wi.getNormal(rs,os,ss,g.normal),v.face=g}return v}class wl extends Di{constructor(e=1,n=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const a=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const d=[],h=[],v=[],g=[];let _=0,y=0;w("z","y","x",-1,-1,i,n,e,l,o,0),w("z","y","x",1,-1,i,n,-e,l,o,1),w("x","z","y",1,1,e,i,n,r,l,2),w("x","z","y",1,-1,e,i,-n,r,l,3),w("x","y","z",1,-1,e,n,i,r,o,4),w("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new Ln(h,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(g,2));function w(A,T,p,E,S,L,P,U,B,z,R){const N=L/B,ae=P/z,fe=L/2,$=P/2,te=U/2,j=B+1,ue=z+1;let pe=0,X=0;const J=new Y;for(let ne=0;ne<ue;ne++){const we=ne*ae-$;for(let ve=0;ve<j;ve++){const oe=ve*N-fe;J[A]=oe*E,J[T]=we*S,J[p]=te,h.push(J.x,J.y,J.z),J[A]=0,J[T]=0,J[p]=U>0?1:-1,v.push(J.x,J.y,J.z),g.push(ve/B),g.push(1-ne/z),pe+=1}}for(let ne=0;ne<z;ne++)for(let we=0;we<B;we++){const ve=_+we+j*ne,oe=_+we+j*(ne+1),q=_+(we+1)+j*(ne+1),Me=_+(we+1)+j*ne;d.push(ve,oe,Me),d.push(oe,q,Me),X+=6}a.addGroup(y,X,R),y+=X,_+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function An(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function z1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rx(t){return t.getRenderTarget()===null?t.outputColorSpace:Vi}const kn={clone:js,merge:An};var B1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B1,this.fragmentShader=G1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=z1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?n.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[r]={type:"m4",value:l.toArray()}:n.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ox extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends ox{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ad*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/d,n-=l.offsetY*i/h,r*=l.width/d,i*=l.height/h}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class V1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Fn(as,ls,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new Fn(as,ls,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const l=new Fn(as,ls,e,n);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const a=new Fn(as,ls,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const d=new Fn(as,ls,e,n);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const h=new Fn(as,ls,e,n);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,a,d,h]=this.children,v=e.getRenderTarget(),g=e.toneMapping,_=e.xr.enabled;e.toneMapping=Gi,e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,d),i.texture.generateMipmaps=y,e.setRenderTarget(i,5),e.render(n,h),e.setRenderTarget(v),e.toneMapping=g,e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sx extends Wn{constructor(e,n,i,r,o,l,a,d,h,v){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,i,r,o,l,a,d,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H1 extends en{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?it:Mo),this.texture=new sx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:li}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wl(5,5,5),o=new Lt({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:un});o.uniforms.tEquirect.value=n;const l=new Bn(r,o),a=n.minFilter;return n.minFilter===ul&&(n.minFilter=li),new V1(1,10,this).update(e,l),n.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,r);e.setRenderTarget(o)}}const Td=new Y,W1=new Y,j1=new dt;class lo{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Td.subVectors(i,n).cross(W1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Td),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||j1.getNormalMatrix(e),r=this.coplanarPoint(Td).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Np,Lu=new Y;class Fp{constructor(e=new lo,n=new lo,i=new lo,r=new lo,o=new lo,l=new lo){this.planes=[e,n,i,r,o,l]}set(e,n,i,r,o,l){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],a=i[3],d=i[4],h=i[5],v=i[6],g=i[7],_=i[8],y=i[9],w=i[10],A=i[11],T=i[12],p=i[13],E=i[14],S=i[15];return n[0].setComponents(a-r,g-d,A-_,S-T).normalize(),n[1].setComponents(a+r,g+d,A+_,S+T).normalize(),n[2].setComponents(a+o,g+h,A+y,S+p).normalize(),n[3].setComponents(a-o,g-h,A-y,S-p).normalize(),n[4].setComponents(a-l,g-v,A-w,S-E).normalize(),n[5].setComponents(a+l,g+v,A+w,S+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Lu.x=r.normal.x>0?e.max.x:e.min.x,Lu.y=r.normal.y>0?e.max.y:e.min.y,Lu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ax(){let t=null,e=!1,n=null,i=null;function r(o,l){n(o,l),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function X1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(h,v){const g=h.array,_=h.usage,y=t.createBuffer();t.bindBuffer(v,y),t.bufferData(v,g,_),h.onUploadCallback();let w;if(g instanceof Float32Array)w=t.FLOAT;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)w=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=t.UNSIGNED_SHORT;else if(g instanceof Int16Array)w=t.SHORT;else if(g instanceof Uint32Array)w=t.UNSIGNED_INT;else if(g instanceof Int32Array)w=t.INT;else if(g instanceof Int8Array)w=t.BYTE;else if(g instanceof Uint8Array)w=t.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)w=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:w,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function o(h,v,g){const _=v.array,y=v.updateRange;t.bindBuffer(g,h),y.count===-1?t.bufferSubData(g,0,_):(n?t.bufferSubData(g,y.offset*_.BYTES_PER_ELEMENT,_,y.offset,y.count):t.bufferSubData(g,y.offset*_.BYTES_PER_ELEMENT,_.subarray(y.offset,y.offset+y.count)),y.count=-1),v.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=i.get(h);v&&(t.deleteBuffer(v.buffer),i.delete(h))}function d(h,v){if(h.isGLBufferAttribute){const _=i.get(h);(!_||_.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=i.get(h);g===void 0?i.set(h,r(h,v)):g.version<h.version&&(o(g.buffer,h,v),g.version=h.version)}return{get:l,remove:a,update:d}}class Tl extends Di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,l=n/2,a=Math.floor(i),d=Math.floor(r),h=a+1,v=d+1,g=e/a,_=n/d,y=[],w=[],A=[],T=[];for(let p=0;p<v;p++){const E=p*_-l;for(let S=0;S<h;S++){const L=S*g-o;w.push(L,-E,0),A.push(0,0,1),T.push(S/a),T.push(1-p/d)}}for(let p=0;p<d;p++)for(let E=0;E<a;E++){const S=E+h*p,L=E+h*(p+1),P=E+1+h*(p+1),U=E+1+h*p;y.push(S,L,U),y.push(L,P,U)}this.setIndex(y),this.setAttribute("position",new Ln(w,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,K1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J1="vec3 transformed = vec3( position );",eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nT=`#ifdef USE_IRIDESCENCE
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
#endif`,iT=`#ifdef USE_BUMPMAP
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dT=`#define PI 3.141592653589793
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
} // validated`,hT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pT=`vec3 transformedNormal = objectNormal;
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
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yT="gl_FragColor = linearToOutputTexel( gl_FragColor );",xT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ST=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RT=`#ifdef USE_GRADIENTMAP
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
}`,DT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OT=`uniform bool receiveShadow;
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
#endif`,NT=`#if defined( USE_ENVMAP )
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
#endif`,FT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
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
#endif`,VT=`struct PhysicalMaterial {
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
}`,HT=`
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
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
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,XT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ZT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JT=`#if defined( USE_POINTS_UV )
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
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
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
#endif`,rb=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
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
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cb=`float getShadowMask() {
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
}`,Ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#ifdef USE_UV
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
#endif`,zb=`#ifdef USE_UV
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
#endif`,Bb=`#ifdef USE_UV
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
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,Zb=`#define DISTANCE
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eC=`uniform float scale;
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
}`,tC=`uniform vec3 diffuse;
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
}`,nC=`#include <common>
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
}`,iC=`uniform vec3 diffuse;
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
}`,rC=`#define LAMBERT
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
}`,oC=`#define LAMBERT
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
}`,sC=`#define MATCAP
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
}`,aC=`#define MATCAP
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
}`,lC=`#define NORMAL
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
}`,uC=`#define NORMAL
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
}`,cC=`#define PHONG
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
}`,fC=`#define PHONG
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
}`,dC=`#define STANDARD
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
}`,hC=`#define STANDARD
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
}`,pC=`#define TOON
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
}`,mC=`#define TOON
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
}`,vC=`uniform float size;
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
}`,gC=`uniform vec3 diffuse;
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
}`,_C=`#include <common>
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
}`,yC=`uniform vec3 color;
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
}`,xC=`uniform float rotation;
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
}`,SC=`uniform vec3 diffuse;
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
}`,st={alphamap_fragment:Y1,alphamap_pars_fragment:q1,alphatest_fragment:$1,alphatest_pars_fragment:K1,aomap_fragment:Z1,aomap_pars_fragment:Q1,begin_vertex:J1,beginnormal_vertex:eT,bsdfs:tT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:oT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:aT,color_fragment:lT,color_pars_fragment:uT,color_pars_vertex:cT,color_vertex:fT,common:dT,cube_uv_reflection_fragment:hT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:vT,emissivemap_fragment:gT,emissivemap_pars_fragment:_T,encodings_fragment:yT,encodings_pars_fragment:xT,envmap_fragment:ST,envmap_common_pars_fragment:MT,envmap_pars_fragment:ET,envmap_pars_vertex:wT,envmap_physical_pars_fragment:NT,envmap_vertex:TT,fog_vertex:bT,fog_pars_vertex:CT,fog_fragment:AT,fog_pars_fragment:PT,gradientmap_pars_fragment:RT,lightmap_fragment:DT,lightmap_pars_fragment:LT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:UT,lights_pars_begin:OT,lights_toon_fragment:FT,lights_toon_pars_fragment:kT,lights_phong_fragment:zT,lights_phong_pars_fragment:BT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:HT,lights_fragment_maps:WT,lights_fragment_end:jT,logdepthbuf_fragment:XT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:qT,logdepthbuf_vertex:$T,map_fragment:KT,map_pars_fragment:ZT,map_particle_fragment:QT,map_particle_pars_fragment:JT,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:rb,morphtarget_vertex:ob,normal_fragment_begin:sb,normal_fragment_maps:ab,normal_pars_fragment:lb,normal_pars_vertex:ub,normal_vertex:cb,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,output_fragment:vb,packing:gb,premultiplied_alpha_fragment:_b,project_vertex:yb,dithering_fragment:xb,dithering_pars_fragment:Sb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Tb,shadowmap_vertex:bb,shadowmask_pars_fragment:Cb,skinbase_vertex:Ab,skinning_pars_vertex:Pb,skinning_vertex:Rb,skinnormal_vertex:Db,specularmap_fragment:Lb,specularmap_pars_fragment:Ib,tonemapping_fragment:Ub,tonemapping_pars_fragment:Ob,transmission_fragment:Nb,transmission_pars_fragment:Fb,uv_pars_fragment:kb,uv_pars_vertex:zb,uv_vertex:Bb,worldpos_vertex:Gb,background_vert:Vb,background_frag:Hb,backgroundCube_vert:Wb,backgroundCube_frag:jb,cube_vert:Xb,cube_frag:Yb,depth_vert:qb,depth_frag:$b,distanceRGBA_vert:Kb,distanceRGBA_frag:Zb,equirect_vert:Qb,equirect_frag:Jb,linedashed_vert:eC,linedashed_frag:tC,meshbasic_vert:nC,meshbasic_frag:iC,meshlambert_vert:rC,meshlambert_frag:oC,meshmatcap_vert:sC,meshmatcap_frag:aC,meshnormal_vert:lC,meshnormal_frag:uC,meshphong_vert:cC,meshphong_frag:fC,meshphysical_vert:dC,meshphysical_frag:hC,meshtoon_vert:pC,meshtoon_frag:mC,points_vert:vC,points_frag:gC,shadow_vert:_C,shadow_frag:yC,sprite_vert:xC,sprite_frag:SC},Re={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}}},Fi={basic:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:An([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:An([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:An([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:An([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:An([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:An([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:An([Re.common,Re.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:An([Re.lights,Re.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Fi.physical={uniforms:An([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Iu={r:0,b:0,g:0};function MC(t,e,n,i,r,o,l){const a=new Ze(0);let d=o===!0?0:1,h,v,g=null,_=0,y=null;function w(T,p){let E=!1,S=p.isScene===!0?p.background:null;switch(S&&S.isTexture&&(S=(p.backgroundBlurriness>0?n:e).get(S)),S===null?A(a,d):S&&S.isColor&&(A(S,1),E=!0),t.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,l),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,l),E=!0;break}(t.autoClear||E)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),S&&(S.isCubeTexture||S.mapping===jc)?(v===void 0&&(v=new Bn(new wl(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:js(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(U,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(v)),v.material.uniforms.envMap.value=S,v.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,v.material.toneMapped=S.colorSpace!==it,(g!==S||_!==S.version||y!==t.toneMapping)&&(v.material.needsUpdate=!0,g=S,_=S.version,y=t.toneMapping),v.layers.enableAll(),T.unshift(v,v.geometry,v.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Bn(new Tl(2,2),new Lt({name:"BackgroundMaterial",uniforms:js(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=S.colorSpace!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(g!==S||_!==S.version||y!==t.toneMapping)&&(h.material.needsUpdate=!0,g=S,_=S.version,y=t.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function A(T,p){T.getRGB(Iu,rx(t)),i.buffers.color.setClear(Iu.r,Iu.g,Iu.b,p,l)}return{getClearColor:function(){return a},setClearColor:function(T,p=1){a.set(T),d=p,A(a,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,A(a,d)},render:w}}function EC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,a={},d=T(null);let h=d,v=!1;function g(te,j,ue,pe,X){let J=!1;if(l){const ne=A(pe,ue,j);h!==ne&&(h=ne,y(h.object)),J=p(te,pe,ue,X),J&&E(te,pe,ue,X)}else{const ne=j.wireframe===!0;(h.geometry!==pe.id||h.program!==ue.id||h.wireframe!==ne)&&(h.geometry=pe.id,h.program=ue.id,h.wireframe=ne,J=!0)}X!==null&&n.update(X,t.ELEMENT_ARRAY_BUFFER),(J||v)&&(v=!1,z(te,j,ue,pe),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function _(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function y(te){return i.isWebGL2?t.bindVertexArray(te):o.bindVertexArrayOES(te)}function w(te){return i.isWebGL2?t.deleteVertexArray(te):o.deleteVertexArrayOES(te)}function A(te,j,ue){const pe=ue.wireframe===!0;let X=a[te.id];X===void 0&&(X={},a[te.id]=X);let J=X[j.id];J===void 0&&(J={},X[j.id]=J);let ne=J[pe];return ne===void 0&&(ne=T(_()),J[pe]=ne),ne}function T(te){const j=[],ue=[],pe=[];for(let X=0;X<r;X++)j[X]=0,ue[X]=0,pe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ue,attributeDivisors:pe,object:te,attributes:{},index:null}}function p(te,j,ue,pe){const X=h.attributes,J=j.attributes;let ne=0;const we=ue.getAttributes();for(const ve in we)if(we[ve].location>=0){const q=X[ve];let Me=J[ve];if(Me===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(Me=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(Me=te.instanceColor)),q===void 0||q.attribute!==Me||Me&&q.data!==Me.data)return!0;ne++}return h.attributesNum!==ne||h.index!==pe}function E(te,j,ue,pe){const X={},J=j.attributes;let ne=0;const we=ue.getAttributes();for(const ve in we)if(we[ve].location>=0){let q=J[ve];q===void 0&&(ve==="instanceMatrix"&&te.instanceMatrix&&(q=te.instanceMatrix),ve==="instanceColor"&&te.instanceColor&&(q=te.instanceColor));const Me={};Me.attribute=q,q&&q.data&&(Me.data=q.data),X[ve]=Me,ne++}h.attributes=X,h.attributesNum=ne,h.index=pe}function S(){const te=h.newAttributes;for(let j=0,ue=te.length;j<ue;j++)te[j]=0}function L(te){P(te,0)}function P(te,j){const ue=h.newAttributes,pe=h.enabledAttributes,X=h.attributeDivisors;ue[te]=1,pe[te]===0&&(t.enableVertexAttribArray(te),pe[te]=1),X[te]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,j),X[te]=j)}function U(){const te=h.newAttributes,j=h.enabledAttributes;for(let ue=0,pe=j.length;ue<pe;ue++)j[ue]!==te[ue]&&(t.disableVertexAttribArray(ue),j[ue]=0)}function B(te,j,ue,pe,X,J){i.isWebGL2===!0&&(ue===t.INT||ue===t.UNSIGNED_INT)?t.vertexAttribIPointer(te,j,ue,X,J):t.vertexAttribPointer(te,j,ue,pe,X,J)}function z(te,j,ue,pe){if(i.isWebGL2===!1&&(te.isInstancedMesh||pe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const X=pe.attributes,J=ue.getAttributes(),ne=j.defaultAttributeValues;for(const we in J){const ve=J[we];if(ve.location>=0){let oe=X[we];if(oe===void 0&&(we==="instanceMatrix"&&te.instanceMatrix&&(oe=te.instanceMatrix),we==="instanceColor"&&te.instanceColor&&(oe=te.instanceColor)),oe!==void 0){const q=oe.normalized,Me=oe.itemSize,Ee=n.get(oe);if(Ee===void 0)continue;const H=Ee.buffer,Ke=Ee.type,He=Ee.bytesPerElement;if(oe.isInterleavedBufferAttribute){const Te=oe.data,Ge=Te.stride,ht=oe.offset;if(Te.isInstancedInterleavedBuffer){for(let Be=0;Be<ve.locationSize;Be++)P(ve.location+Be,Te.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Be=0;Be<ve.locationSize;Be++)L(ve.location+Be);t.bindBuffer(t.ARRAY_BUFFER,H);for(let Be=0;Be<ve.locationSize;Be++)B(ve.location+Be,Me/ve.locationSize,Ke,q,Ge*He,(ht+Me/ve.locationSize*Be)*He)}else{if(oe.isInstancedBufferAttribute){for(let Te=0;Te<ve.locationSize;Te++)P(ve.location+Te,oe.meshPerAttribute);te.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<ve.locationSize;Te++)L(ve.location+Te);t.bindBuffer(t.ARRAY_BUFFER,H);for(let Te=0;Te<ve.locationSize;Te++)B(ve.location+Te,Me/ve.locationSize,Ke,q,Me*He,Me/ve.locationSize*Te*He)}}else if(ne!==void 0){const q=ne[we];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(ve.location,q);break;case 3:t.vertexAttrib3fv(ve.location,q);break;case 4:t.vertexAttrib4fv(ve.location,q);break;default:t.vertexAttrib1fv(ve.location,q)}}}}U()}function R(){fe();for(const te in a){const j=a[te];for(const ue in j){const pe=j[ue];for(const X in pe)w(pe[X].object),delete pe[X];delete j[ue]}delete a[te]}}function N(te){if(a[te.id]===void 0)return;const j=a[te.id];for(const ue in j){const pe=j[ue];for(const X in pe)w(pe[X].object),delete pe[X];delete j[ue]}delete a[te.id]}function ae(te){for(const j in a){const ue=a[j];if(ue[te.id]===void 0)continue;const pe=ue[te.id];for(const X in pe)w(pe[X].object),delete pe[X];delete ue[te.id]}}function fe(){$(),v=!0,h!==d&&(h=d,y(h.object))}function $(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:fe,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:S,enableAttribute:L,disableUnusedAttributes:U}}function wC(t,e,n,i){const r=i.isWebGL2;let o;function l(h){o=h}function a(h,v){t.drawArrays(o,h,v),n.update(v,o,1)}function d(h,v,g){if(g===0)return;let _,y;if(r)_=t,y="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[y](o,h,v,g),n.update(v,o,g)}this.setMode=l,this.render=a,this.renderInstances=d}function TC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const d=o(a);d!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const h=l||e.has("WEBGL_draw_buffers"),v=n.logarithmicDepthBuffer===!0,g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),w=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),A=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,L=l||e.has("OES_texture_float"),P=S&&L,U=l?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:v,maxTextures:g,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:w,maxAttributes:A,maxVertexUniforms:T,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:L,floatVertexTextures:P,maxSamples:U}}function bC(t){const e=this;let n=null,i=0,r=!1,o=!1;const l=new lo,a=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||r;return r=_,i=g.length,y},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,y){const w=g.clippingPlanes,A=g.clipIntersection,T=g.clipShadows,p=t.get(g);if(!r||w===null||w.length===0||o&&!T)o?v(null):h();else{const E=o?0:i,S=E*4;let L=p.clippingState||null;d.value=L,L=v(w,_,S,y);for(let P=0;P!==S;++P)L[P]=n[P];p.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=E}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function v(g,_,y,w){const A=g!==null?g.length:0;let T=null;if(A!==0){if(T=d.value,w!==!0||T===null){const p=y+A*4,E=_.matrixWorldInverse;a.getNormalMatrix(E),(T===null||T.length<p)&&(T=new Float32Array(p));for(let S=0,L=y;S!==A;++S,L+=4)l.copy(g[S]).applyMatrix4(E,a),l.normal.toArray(T,L),T[L+3]=l.constant}d.value=T,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,T}}function CC(t){let e=new WeakMap;function n(l,a){return a===Ec?l.mapping=Vs:a===Lh&&(l.mapping=Hs),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Ec||a===Lh)if(e.has(l)){const d=e.get(l).texture;return n(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new H1(d.height/2);return h.fromEquirectangularTexture(t,l),e.set(l,h),l.addEventListener("dispose",r),n(h.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const d=e.get(a);d!==void 0&&(e.delete(a),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Yc extends ox{constructor(e=-1,n=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,a=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,a-=v*this.view.offsetY,d=a-v*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,Og=[.125,.215,.35,.446,.526,.582],fo=20,bd=new Yc,Ng=new Ze;let Cd=null;const uo=(1+Math.sqrt(5))/2,us=1/uo,Fg=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,uo,us),new Y(0,uo,-us),new Y(us,0,uo),new Y(-us,0,uo),new Y(uo,us,0),new Y(-uo,us,0)];class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd),e.scissorTest=!1,Uu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:cl,format:bi,colorSpace:Vi,depthBuffer:!1},r=zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AC(o)),this._blurMaterial=PC(o,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,bd)}_sceneToCubeUV(e,n,i,r){const a=new Fn(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(Ng),v.toneMapping=Gi,v.autoClear=!1;const y=new Eo({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),w=new Bn(new wl,y);let A=!1;const T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,A=!0):(y.color.copy(Ng),A=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,d[p],0),a.lookAt(h[p],0,0)):E===1?(a.up.set(0,0,d[p]),a.lookAt(0,h[p],0)):(a.up.set(0,d[p],0),a.lookAt(0,0,h[p]));const S=this._cubeSize;Uu(r,E*S,p>2?S:0,S,S),v.setRenderTarget(r),A&&v.render(w,a),v.render(e,a)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=_,v.autoClear=g,e.background=T}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const d=this._cubeSize;Uu(n,0,0,3*d,2*d),i.setRenderTarget(n),i.render(l,bd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Fg[(r-1)%Fg.length];this._blur(e,r-1,r,o,l)}n.autoClear=i}_blur(e,n,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,l,a){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Bn(this._lodPlanes[r],h),_=h.uniforms,y=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*fo-1),A=o/w,T=isFinite(o)?1+Math.floor(v*A):fo;T>fo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${fo}`);const p=[];let E=0;for(let B=0;B<fo;++B){const z=B/A,R=Math.exp(-z*z/2);p.push(R),B===0?E+=R:B<T&&(E+=2*R)}for(let B=0;B<p.length;B++)p[B]=p[B]/E;_.envMap.value=e.texture,_.samples.value=T,_.weights.value=p,_.latitudinal.value=l==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:S}=this;_.dTheta.value=w,_.mipInt.value=S-i;const L=this._sizeLods[r],P=3*L*(r>S-Es?r-S+Es:0),U=4*(this._cubeSize-L);Uu(n,P,U,3*L,2*L),d.setRenderTarget(n),d.render(g,bd)}}function AC(t){const e=[],n=[],i=[];let r=t;const o=t-Es+1+Og.length;for(let l=0;l<o;l++){const a=Math.pow(2,r);n.push(a);let d=1/a;l>t-Es?d=Og[l-t+Es-1]:l===0&&(d=0),i.push(d);const h=1/(a-2),v=-h,g=1+h,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,w=6,A=3,T=2,p=1,E=new Float32Array(A*w*y),S=new Float32Array(T*w*y),L=new Float32Array(p*w*y);for(let U=0;U<y;U++){const B=U%3*2/3-1,z=U>2?0:-1,R=[B,z,0,B+2/3,z,0,B+2/3,z+1,0,B,z,0,B+2/3,z+1,0,B,z+1,0];E.set(R,A*w*U),S.set(_,T*w*U);const N=[U,U,U,U,U,U];L.set(N,p*w*U)}const P=new Di;P.setAttribute("position",new Pi(E,A)),P.setAttribute("uv",new Pi(S,T)),P.setAttribute("faceIndex",new Pi(L,p)),e.push(P),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zg(t,e,n){const i=new en(t,e,n);return i.texture.mapping=jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PC(t,e,n){const i=new Float32Array(fo),r=new Y(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kp(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Bg(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kp(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Gg(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function kp(){return`

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
	`}function RC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const d=a.mapping,h=d===Ec||d===Lh,v=d===Vs||d===Hs;if(h||v)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let g=e.get(a);return n===null&&(n=new kg(t)),g=h?n.fromEquirectangular(a,g):n.fromCubemap(a,g),e.set(a,g),g.texture}else{if(e.has(a))return e.get(a).texture;{const g=a.image;if(h&&g&&g.height>0||v&&g&&r(g)){n===null&&(n=new kg(t));const _=h?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,_),a.addEventListener("dispose",o),_.texture}else return null}}}return a}function r(a){let d=0;const h=6;for(let v=0;v<h;v++)a[v]!==void 0&&d++;return d===h}function o(a){const d=a.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function DC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function LC(t,e,n,i){const r={},o=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",l),delete r[_.id];const y=o.get(_);y&&(e.remove(y),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function a(g,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,n.memory.geometries++),_}function d(g){const _=g.attributes;for(const w in _)e.update(_[w],t.ARRAY_BUFFER);const y=g.morphAttributes;for(const w in y){const A=y[w];for(let T=0,p=A.length;T<p;T++)e.update(A[T],t.ARRAY_BUFFER)}}function h(g){const _=[],y=g.index,w=g.attributes.position;let A=0;if(y!==null){const E=y.array;A=y.version;for(let S=0,L=E.length;S<L;S+=3){const P=E[S+0],U=E[S+1],B=E[S+2];_.push(P,U,U,B,B,P)}}else{const E=w.array;A=w.version;for(let S=0,L=E.length/3-1;S<L;S+=3){const P=S+0,U=S+1,B=S+2;_.push(P,U,U,B,B,P)}}const T=new(Ky(_)?ix:nx)(_,1);T.version=A;const p=o.get(g);p&&e.remove(p),o.set(g,T)}function v(g){const _=o.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return o.get(g)}return{get:a,update:d,getWireframeAttribute:v}}function IC(t,e,n,i){const r=i.isWebGL2;let o;function l(_){o=_}let a,d;function h(_){a=_.type,d=_.bytesPerElement}function v(_,y){t.drawElements(o,y,a,_*d),n.update(y,o,1)}function g(_,y,w){if(w===0)return;let A,T;if(r)A=t,T="drawElementsInstanced";else if(A=e.get("ANGLE_instanced_arrays"),T="drawElementsInstancedANGLE",A===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}A[T](o,y,a,_*d,w),n.update(y,o,w)}this.setMode=l,this.setIndex=h,this.render=v,this.renderInstances=g}function UC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,a){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OC(t,e){return t[0]-e[0]}function NC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function FC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,l=new Dt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function d(h,v,g){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const y=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,w=y!==void 0?y.length:0;let A=o.get(v);if(A===void 0||A.count!==w){let te=function(){fe.dispose(),o.delete(v),v.removeEventListener("dispose",te)};A!==void 0&&A.texture.dispose();const E=v.morphAttributes.position!==void 0,S=v.morphAttributes.normal!==void 0,L=v.morphAttributes.color!==void 0,P=v.morphAttributes.position||[],U=v.morphAttributes.normal||[],B=v.morphAttributes.color||[];let z=0;E===!0&&(z=1),S===!0&&(z=2),L===!0&&(z=3);let R=v.attributes.position.count*z,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ae=new Float32Array(R*N*4*w),fe=new Jy(ae,R,N,w);fe.type=_o,fe.needsUpdate=!0;const $=z*4;for(let j=0;j<w;j++){const ue=P[j],pe=U[j],X=B[j],J=R*N*4*j;for(let ne=0;ne<ue.count;ne++){const we=ne*$;E===!0&&(l.fromBufferAttribute(ue,ne),ae[J+we+0]=l.x,ae[J+we+1]=l.y,ae[J+we+2]=l.z,ae[J+we+3]=0),S===!0&&(l.fromBufferAttribute(pe,ne),ae[J+we+4]=l.x,ae[J+we+5]=l.y,ae[J+we+6]=l.z,ae[J+we+7]=0),L===!0&&(l.fromBufferAttribute(X,ne),ae[J+we+8]=l.x,ae[J+we+9]=l.y,ae[J+we+10]=l.z,ae[J+we+11]=X.itemSize===4?l.w:1)}}A={count:w,texture:fe,size:new Ne(R,N)},o.set(v,A),v.addEventListener("dispose",te)}let T=0;for(let E=0;E<_.length;E++)T+=_[E];const p=v.morphTargetsRelative?1:1-T;g.getUniforms().setValue(t,"morphTargetBaseInfluence",p),g.getUniforms().setValue(t,"morphTargetInfluences",_),g.getUniforms().setValue(t,"morphTargetsTexture",A.texture,n),g.getUniforms().setValue(t,"morphTargetsTextureSize",A.size)}else{const y=_===void 0?0:_.length;let w=i[v.id];if(w===void 0||w.length!==y){w=[];for(let S=0;S<y;S++)w[S]=[S,0];i[v.id]=w}for(let S=0;S<y;S++){const L=w[S];L[0]=S,L[1]=_[S]}w.sort(NC);for(let S=0;S<8;S++)S<y&&w[S][1]?(a[S][0]=w[S][0],a[S][1]=w[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(OC);const A=v.morphAttributes.position,T=v.morphAttributes.normal;let p=0;for(let S=0;S<8;S++){const L=a[S],P=L[0],U=L[1];P!==Number.MAX_SAFE_INTEGER&&U?(A&&v.getAttribute("morphTarget"+S)!==A[P]&&v.setAttribute("morphTarget"+S,A[P]),T&&v.getAttribute("morphNormal"+S)!==T[P]&&v.setAttribute("morphNormal"+S,T[P]),r[S]=U,p+=U):(A&&v.hasAttribute("morphTarget"+S)===!0&&v.deleteAttribute("morphTarget"+S),T&&v.hasAttribute("morphNormal"+S)===!0&&v.deleteAttribute("morphNormal"+S),r[S]=0)}const E=v.morphTargetsRelative?1:1-p;g.getUniforms().setValue(t,"morphTargetBaseInfluence",E),g.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:d}}function kC(t,e,n,i){let r=new WeakMap;function o(d){const h=i.render.frame,v=d.geometry,g=e.get(d,v);return r.get(g)!==h&&(e.update(g),r.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",a)===!1&&d.addEventListener("dispose",a),n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER)),g}function l(){r=new WeakMap}function a(d){const h=d.target;h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:l}}const lx=new Wn,ux=new Jy,cx=new C1,fx=new sx,Vg=[],Hg=[],Wg=new Float32Array(16),jg=new Float32Array(9),Xg=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Vg[r];if(o===void 0&&(o=new Float32Array(r),Vg[r]=o),e!==0){i.toArray(o,0);for(let l=1,a=0;l!==e;++l)a+=n,t[l].toArray(o,a)}return o}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qc(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function HC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Xg.set(i),t.uniformMatrix2fv(this.addr,!1,Xg),rn(n,i)}}function WC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;jg.set(i),t.uniformMatrix3fv(this.addr,!1,jg),rn(n,i)}}function jC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Wg.set(i),t.uniformMatrix4fv(this.addr,!1,Wg),rn(n,i)}}function XC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function KC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function QC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function eA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||lx,r)}function tA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cx,r)}function nA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fx,r)}function iA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ux,r)}function rA(t){switch(t){case 5126:return zC;case 35664:return BC;case 35665:return GC;case 35666:return VC;case 35674:return HC;case 35675:return WC;case 35676:return jC;case 5124:case 35670:return XC;case 35667:case 35671:return YC;case 35668:case 35672:return qC;case 35669:case 35673:return $C;case 5125:return KC;case 36294:return ZC;case 36295:return QC;case 36296:return JC;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function oA(t,e){t.uniform1fv(this.addr,e)}function sA(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function aA(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function lA(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function uA(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cA(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fA(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dA(t,e){t.uniform1iv(this.addr,e)}function hA(t,e){t.uniform2iv(this.addr,e)}function pA(t,e){t.uniform3iv(this.addr,e)}function mA(t,e){t.uniform4iv(this.addr,e)}function vA(t,e){t.uniform1uiv(this.addr,e)}function gA(t,e){t.uniform2uiv(this.addr,e)}function _A(t,e){t.uniform3uiv(this.addr,e)}function yA(t,e){t.uniform4uiv(this.addr,e)}function xA(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2D(e[l]||lx,o[l])}function SA(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture3D(e[l]||cx,o[l])}function MA(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTextureCube(e[l]||fx,o[l])}function EA(t,e,n){const i=this.cache,r=e.length,o=qc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2DArray(e[l]||ux,o[l])}function wA(t){switch(t){case 5126:return oA;case 35664:return sA;case 35665:return aA;case 35666:return lA;case 35674:return uA;case 35675:return cA;case 35676:return fA;case 5124:case 35670:return dA;case 35667:case 35671:return hA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return vA;case 36294:return gA;case 36295:return _A;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}class TA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=rA(n.type)}}class bA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=wA(n.type)}}class CA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function Yg(t,e){t.seq.push(e),t.map[e.id]=e}function AA(t,e,n){const i=t.name,r=i.length;for(Ad.lastIndex=0;;){const o=Ad.exec(i),l=Ad.lastIndex;let a=o[1];const d=o[2]==="]",h=o[3];if(d&&(a=a|0),h===void 0||h==="["&&l+2===r){Yg(n,h===void 0?new TA(a,t,e):new bA(a,t,e));break}else{let g=n.map[a];g===void 0&&(g=new CA(a),Yg(n,g)),n=g}}}class Zu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);AA(o,l,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,l=n.length;o!==l;++o){const a=n[o],d=i[a.id];d.needsUpdate!==!1&&a.setValue(e,d.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in n&&i.push(l)}return i}}function qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let PA=0;function RA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=r;l<o;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${n[l]}`)}return i.join(`
`)}function DA(t){switch(t){case Vi:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function $g(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+RA(t.getShaderSource(e),l)}else return r}function LA(t,e){const n=DA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function IA(t,e){let n;switch(e){case $w:n="Linear";break;case Xy:n="Reinhard";break;case Kw:n="OptimizedCineon";break;case Zw:n="ACESFilmic";break;case Qw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function UA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(La).join(`
`)}function OA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),l=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:a}}return n}function La(t){return t!==""}function Kg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(t){return t.replace(FA,kA)}function kA(t,e){const n=st[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Oh(n)}const zA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(t){return t.replace(zA,BA)}function BA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Jg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function VA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function WA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yw:e="ENVMAP_BLENDING_MIX";break;case qw:e="ENVMAP_BLENDING_ADD";break}return e}function jA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XA(t,e,n,i){const r=t.getContext(),o=n.defines;let l=n.vertexShader,a=n.fragmentShader;const d=GA(n),h=VA(n),v=HA(n),g=WA(n),_=jA(n),y=n.isWebGL2?"":UA(n),w=OA(o),A=r.createProgram();let T,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=[w].filter(La).join(`
`),T.length>0&&(T+=`
`),p=[y,w].filter(La).join(`
`),p.length>0&&(p+=`
`)):(T=[Jg(n),"#define SHADER_NAME "+n.shaderName,w,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[y,Jg(n),"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?st.tonemapping_pars_fragment:"",n.toneMapping!==Gi?IA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.encodings_pars_fragment,LA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),l=Oh(l),l=Kg(l,n),l=Zg(l,n),a=Oh(a),a=Kg(a,n),a=Zg(a,n),l=Qg(l),a=Qg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,T=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,p=["#define varying in",n.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+T+l,L=E+p+a,P=qg(r,r.VERTEX_SHADER,S),U=qg(r,r.FRAGMENT_SHADER,L);if(r.attachShader(A,P),r.attachShader(A,U),n.index0AttributeName!==void 0?r.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A),t.debug.checkShaderErrors){const R=r.getProgramInfoLog(A).trim(),N=r.getShaderInfoLog(P).trim(),ae=r.getShaderInfoLog(U).trim();let fe=!0,$=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(fe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,A,P,U);else{const te=$g(r,P,"vertex"),j=$g(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+te+`
`+j)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||ae==="")&&($=!1);$&&(this.diagnostics={runnable:fe,programLog:R,vertexShader:{log:N,prefix:T},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(P),r.deleteShader(U);let B;this.getUniforms=function(){return B===void 0&&(B=new Zu(r,A)),B};let z;return this.getAttributes=function(){return z===void 0&&(z=NA(r,A)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.name=n.shaderName,this.id=PA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=U,this}let YA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $A(e),n.set(e,i)),i}}class $A{constructor(e){this.id=YA++,this.code=e,this.usedTimes=0}}function KA(t,e,n,i,r,o,l){const a=new ex,d=new qA,h=[],v=r.isWebGL2,g=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return R===1?"uv1":R===2?"uv2":R===3?"uv3":"uv"}function T(R,N,ae,fe,$){const te=fe.fog,j=$.geometry,ue=R.isMeshStandardMaterial?fe.environment:null,pe=(R.isMeshStandardMaterial?n:e).get(R.envMap||ue),X=pe&&pe.mapping===jc?pe.image.height:null,J=w[R.type];R.precision!==null&&(y=r.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const ne=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=ne!==void 0?ne.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let oe,q,Me,Ee;if(J){const xt=Fi[J];oe=xt.vertexShader,q=xt.fragmentShader}else oe=R.vertexShader,q=R.fragmentShader,d.update(R),Me=d.getVertexShaderID(R),Ee=d.getFragmentShaderID(R);const H=t.getRenderTarget(),Ke=$.isInstancedMesh===!0,He=!!R.map,Te=!!R.matcap,Ge=!!pe,ht=!!R.aoMap,Be=!!R.lightMap,Qe=!!R.bumpMap,Ye=!!R.normalMap,Tt=!!R.displacementMap,Ot=!!R.emissiveMap,gt=!!R.metalnessMap,lt=!!R.roughnessMap,Mt=R.clearcoat>0,jt=R.iridescence>0,F=R.sheen>0,D=R.transmission>0,se=Mt&&!!R.clearcoatMap,me=Mt&&!!R.clearcoatNormalMap,xe=Mt&&!!R.clearcoatRoughnessMap,be=jt&&!!R.iridescenceMap,G=jt&&!!R.iridescenceThicknessMap,he=F&&!!R.sheenColorMap,ie=F&&!!R.sheenRoughnessMap,Ae=!!R.specularMap,Ie=!!R.specularColorMap,ze=!!R.specularIntensityMap,De=D&&!!R.transmissionMap,Fe=D&&!!R.thicknessMap,qe=!!R.gradientMap,Je=!!R.alphaMap,At=R.alphaTest>0,W=!!R.extensions,le=!!j.attributes.uv1,ge=!!j.attributes.uv2,Le=!!j.attributes.uv3;return{isWebGL2:v,shaderID:J,shaderName:R.type,vertexShader:oe,fragmentShader:q,defines:R.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,instancing:Ke,instancingColor:Ke&&$.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Vi,map:He,matcap:Te,envMap:Ge,envMapMode:Ge&&pe.mapping,envMapCubeUVHeight:X,aoMap:ht,lightMap:Be,bumpMap:Qe,normalMap:Ye,displacementMap:_&&Tt,emissiveMap:Ot,normalMapObjectSpace:Ye&&R.normalMapType===v1,normalMapTangentSpace:Ye&&R.normalMapType===Sl,metalnessMap:gt,roughnessMap:lt,clearcoat:Mt,clearcoatMap:se,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:jt,iridescenceMap:be,iridescenceThicknessMap:G,sheen:F,sheenColorMap:he,sheenRoughnessMap:ie,specularMap:Ae,specularColorMap:Ie,specularIntensityMap:ze,transmission:D,transmissionMap:De,thicknessMap:Fe,gradientMap:qe,opaque:R.transparent===!1&&R.blending===Ds,alphaMap:Je,alphaTest:At,combine:R.combine,mapUv:He&&A(R.map.channel),aoMapUv:ht&&A(R.aoMap.channel),lightMapUv:Be&&A(R.lightMap.channel),bumpMapUv:Qe&&A(R.bumpMap.channel),normalMapUv:Ye&&A(R.normalMap.channel),displacementMapUv:Tt&&A(R.displacementMap.channel),emissiveMapUv:Ot&&A(R.emissiveMap.channel),metalnessMapUv:gt&&A(R.metalnessMap.channel),roughnessMapUv:lt&&A(R.roughnessMap.channel),clearcoatMapUv:se&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:me&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:G&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:ie&&A(R.sheenRoughnessMap.channel),specularMapUv:Ae&&A(R.specularMap.channel),specularColorMapUv:Ie&&A(R.specularColorMap.channel),specularIntensityMapUv:ze&&A(R.specularIntensityMap.channel),transmissionMapUv:De&&A(R.transmissionMap.channel),thicknessMapUv:Fe&&A(R.thicknessMap.channel),alphaMapUv:Je&&A(R.alphaMap.channel),vertexTangents:Ye&&!!j.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ge,vertexUv3s:Le,pointsUvs:$.isPoints===!0&&!!j.attributes.uv&&(He||Je),fog:!!te,useFog:R.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:$.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ve,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&ae.length>0,shadowMapType:t.shadowMap.type,toneMapping:R.toneMapped?t.toneMapping:Gi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===nr,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:W&&R.extensions.derivatives===!0,extensionFragDepth:W&&R.extensions.fragDepth===!0,extensionDrawBuffers:W&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:v||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function p(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ae in R.defines)N.push(ae),N.push(R.defines[ae]);return R.isRawShaderMaterial===!1&&(E(N,R),S(N,R),N.push(t.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function E(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function S(R,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),R.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),R.push(a.mask)}function L(R){const N=w[R.type];let ae;if(N){const fe=Fi[N];ae=kn.clone(fe.uniforms)}else ae=R.uniforms;return ae}function P(R,N){let ae;for(let fe=0,$=h.length;fe<$;fe++){const te=h[fe];if(te.cacheKey===N){ae=te,++ae.usedTimes;break}}return ae===void 0&&(ae=new XA(t,N,R,o),h.push(ae)),ae}function U(R){if(--R.usedTimes===0){const N=h.indexOf(R);h[N]=h[h.length-1],h.pop(),R.destroy()}}function B(R){d.remove(R)}function z(){d.dispose()}return{getParameters:T,getProgramCacheKey:p,getUniforms:L,acquireProgram:P,releaseProgram:U,releaseShaderCache:B,programs:h,dispose:z}}function ZA(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,a){t.get(o)[l]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function QA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function e0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function t0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function l(g,_,y,w,A,T){let p=t[e];return p===void 0?(p={id:g.id,object:g,geometry:_,material:y,groupOrder:w,renderOrder:g.renderOrder,z:A,group:T},t[e]=p):(p.id=g.id,p.object=g,p.geometry=_,p.material=y,p.groupOrder=w,p.renderOrder=g.renderOrder,p.z=A,p.group=T),e++,p}function a(g,_,y,w,A,T){const p=l(g,_,y,w,A,T);y.transmission>0?i.push(p):y.transparent===!0?r.push(p):n.push(p)}function d(g,_,y,w,A,T){const p=l(g,_,y,w,A,T);y.transmission>0?i.unshift(p):y.transparent===!0?r.unshift(p):n.unshift(p)}function h(g,_){n.length>1&&n.sort(g||QA),i.length>1&&i.sort(_||e0),r.length>1&&r.sort(_||e0)}function v(){for(let g=e,_=t.length;g<_;g++){const y=t[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:d,finish:v,sort:h}}function JA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let l;return o===void 0?(l=new t0,t.set(i,[l])):r>=o.length?(l=new t0,o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function eP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Ze};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function tP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nP=0;function iP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rP(t,e){const n=new eP,i=tP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let v=0;v<9;v++)r.probe.push(new Y);const o=new Y,l=new Vt,a=new Vt;function d(v,g){let _=0,y=0,w=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let A=0,T=0,p=0,E=0,S=0,L=0,P=0,U=0,B=0,z=0;v.sort(iP);const R=g===!0?Math.PI:1;for(let ae=0,fe=v.length;ae<fe;ae++){const $=v[ae],te=$.color,j=$.intensity,ue=$.distance,pe=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)_+=te.r*j*R,y+=te.g*j*R,w+=te.b*j*R;else if($.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector($.sh.coefficients[X],j);else if($.isDirectionalLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.directionalShadow[A]=ne,r.directionalShadowMap[A]=pe,r.directionalShadowMatrix[A]=$.shadow.matrix,L++}r.directional[A]=X,A++}else if($.isSpotLight){const X=n.get($);X.position.setFromMatrixPosition($.matrixWorld),X.color.copy(te).multiplyScalar(j*R),X.distance=ue,X.coneCos=Math.cos($.angle),X.penumbraCos=Math.cos($.angle*(1-$.penumbra)),X.decay=$.decay,r.spot[p]=X;const J=$.shadow;if($.map&&(r.spotLightMap[B]=$.map,B++,J.updateMatrices($),$.castShadow&&z++),r.spotLightMatrix[p]=J.matrix,$.castShadow){const ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.spotShadow[p]=ne,r.spotShadowMap[p]=pe,U++}p++}else if($.isRectAreaLight){const X=n.get($);X.color.copy(te).multiplyScalar(j),X.halfWidth.set($.width*.5,0,0),X.halfHeight.set(0,$.height*.5,0),r.rectArea[E]=X,E++}else if($.isPointLight){const X=n.get($);if(X.color.copy($.color).multiplyScalar($.intensity*R),X.distance=$.distance,X.decay=$.decay,$.castShadow){const J=$.shadow,ne=i.get($);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,ne.shadowCameraNear=J.camera.near,ne.shadowCameraFar=J.camera.far,r.pointShadow[T]=ne,r.pointShadowMap[T]=pe,r.pointShadowMatrix[T]=$.shadow.matrix,P++}r.point[T]=X,T++}else if($.isHemisphereLight){const X=n.get($);X.skyColor.copy($.color).multiplyScalar(j*R),X.groundColor.copy($.groundColor).multiplyScalar(j*R),r.hemi[S]=X,S++}}E>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=w;const N=r.hash;(N.directionalLength!==A||N.pointLength!==T||N.spotLength!==p||N.rectAreaLength!==E||N.hemiLength!==S||N.numDirectionalShadows!==L||N.numPointShadows!==P||N.numSpotShadows!==U||N.numSpotMaps!==B)&&(r.directional.length=A,r.spot.length=p,r.rectArea.length=E,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,N.directionalLength=A,N.pointLength=T,N.spotLength=p,N.rectAreaLength=E,N.hemiLength=S,N.numDirectionalShadows=L,N.numPointShadows=P,N.numSpotShadows=U,N.numSpotMaps=B,r.version=nP++)}function h(v,g){let _=0,y=0,w=0,A=0,T=0;const p=g.matrixWorldInverse;for(let E=0,S=v.length;E<S;E++){const L=v[E];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),_++}else if(L.isSpotLight){const P=r.spot[w];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),w++}else if(L.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),a.identity(),l.copy(L.matrixWorld),l.premultiply(p),a.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),A++}else if(L.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(p),y++}else if(L.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(p),T++}}}return{setup:d,setupView:h,state:r}}function n0(t,e){const n=new rP(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(g){i.push(g)}function a(g){r.push(g)}function d(g){n.setup(i,g)}function h(g){n.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:d,setupLightsView:h,pushLight:l,pushShadow:a}}function oP(t,e){let n=new WeakMap;function i(o,l=0){const a=n.get(o);let d;return a===void 0?(d=new n0(t,e),n.set(o,[d])):l>=a.length?(d=new n0(t,e),a.push(d)):d=a[l],d}function r(){n=new WeakMap}return{get:i,dispose:r}}class Gr extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dl extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aP=`uniform sampler2D shadow_pass;
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
}`;function lP(t,e,n){let i=new Fp;const r=new Ne,o=new Ne,l=new Dt,a=new Gr({depthPacking:xl}),d=new dl,h={},v=n.maxTextureSize,g={[Br]:Dn,[Dn]:Br,[nr]:nr},_=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:sP,fragmentShader:aP}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const w=new Di;w.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Bn(w,_),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let p=this.type;this.render=function(P,U,B){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||P.length===0)return;const z=t.getRenderTarget(),R=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(un),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const fe=p!==Ji&&this.type===Ji,$=p===Ji&&this.type!==Ji;for(let te=0,j=P.length;te<j;te++){const ue=P[te],pe=ue.shadow;if(pe===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(pe.autoUpdate===!1&&pe.needsUpdate===!1)continue;r.copy(pe.mapSize);const X=pe.getFrameExtents();if(r.multiply(X),o.copy(pe.mapSize),(r.x>v||r.y>v)&&(r.x>v&&(o.x=Math.floor(v/X.x),r.x=o.x*X.x,pe.mapSize.x=o.x),r.y>v&&(o.y=Math.floor(v/X.y),r.y=o.y*X.y,pe.mapSize.y=o.y)),pe.map===null||fe===!0||$===!0){const ne=this.type!==Ji?{minFilter:Qt,magFilter:Qt}:{};pe.map!==null&&pe.map.dispose(),pe.map=new en(r.x,r.y,ne),pe.map.texture.name=ue.name+".shadowMap",pe.camera.updateProjectionMatrix()}t.setRenderTarget(pe.map),t.clear();const J=pe.getViewportCount();for(let ne=0;ne<J;ne++){const we=pe.getViewport(ne);l.set(o.x*we.x,o.y*we.y,o.x*we.z,o.y*we.w),ae.viewport(l),pe.updateMatrices(ue,ne),i=pe.getFrustum(),L(U,B,pe.camera,ue,this.type)}pe.isPointLightShadow!==!0&&this.type===Ji&&E(pe,B),pe.needsUpdate=!1}p=this.type,T.needsUpdate=!1,t.setRenderTarget(z,R,N)};function E(P,U){const B=e.update(A);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new en(r.x,r.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(U,null,B,_,A,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(U,null,B,y,A,null)}function S(P,U,B,z){let R=null;const N=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)R=N;else if(R=B.isPointLight===!0?d:a,t.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ae=R.uuid,fe=U.uuid;let $=h[ae];$===void 0&&($={},h[ae]=$);let te=$[fe];te===void 0&&(te=R.clone(),$[fe]=te),R=te}if(R.visible=U.visible,R.wireframe=U.wireframe,z===Ji?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=t.properties.get(R);ae.light=B}return R}function L(P,U,B,z,R){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Ji)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),$=P.material;if(Array.isArray($)){const te=fe.groups;for(let j=0,ue=te.length;j<ue;j++){const pe=te[j],X=$[pe.materialIndex];if(X&&X.visible){const J=S(P,X,z,R);t.renderBufferDirect(B,null,fe,J,P,pe)}}}else if($.visible){const te=S(P,$,z,R);t.renderBufferDirect(B,null,fe,te,P,null)}}const ae=P.children;for(let fe=0,$=ae.length;fe<$;fe++)L(ae[fe],U,B,z,R)}}function uP(t,e,n){const i=n.isWebGL2;function r(){let W=!1;const le=new Dt;let ge=null;const Le=new Dt(0,0,0,0);return{setMask:function(Ue){ge!==Ue&&!W&&(t.colorMask(Ue,Ue,Ue,Ue),ge=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,xt,pt,on,Xt){Xt===!0&&(Ue*=on,xt*=on,pt*=on),le.set(Ue,xt,pt,on),Le.equals(le)===!1&&(t.clearColor(Ue,xt,pt,on),Le.copy(le))},reset:function(){W=!1,ge=null,Le.set(-1,0,0,0)}}}function o(){let W=!1,le=null,ge=null,Le=null;return{setTest:function(Ue){Ue?H(t.DEPTH_TEST):Ke(t.DEPTH_TEST)},setMask:function(Ue){le!==Ue&&!W&&(t.depthMask(Ue),le=Ue)},setFunc:function(Ue){if(ge!==Ue){switch(Ue){case Bw:t.depthFunc(t.NEVER);break;case Gw:t.depthFunc(t.ALWAYS);break;case Vw:t.depthFunc(t.LESS);break;case Dh:t.depthFunc(t.LEQUAL);break;case Hw:t.depthFunc(t.EQUAL);break;case Ww:t.depthFunc(t.GEQUAL);break;case jw:t.depthFunc(t.GREATER);break;case Xw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Ue}},setLocked:function(Ue){W=Ue},setClear:function(Ue){Le!==Ue&&(t.clearDepth(Ue),Le=Ue)},reset:function(){W=!1,le=null,ge=null,Le=null}}}function l(){let W=!1,le=null,ge=null,Le=null,Ue=null,xt=null,pt=null,on=null,Xt=null;return{setTest:function(_t){W||(_t?H(t.STENCIL_TEST):Ke(t.STENCIL_TEST))},setMask:function(_t){le!==_t&&!W&&(t.stencilMask(_t),le=_t)},setFunc:function(_t,Yt,jn){(ge!==_t||Le!==Yt||Ue!==jn)&&(t.stencilFunc(_t,Yt,jn),ge=_t,Le=Yt,Ue=jn)},setOp:function(_t,Yt,jn){(xt!==_t||pt!==Yt||on!==jn)&&(t.stencilOp(_t,Yt,jn),xt=_t,pt=Yt,on=jn)},setLocked:function(_t){W=_t},setClear:function(_t){Xt!==_t&&(t.clearStencil(_t),Xt=_t)},reset:function(){W=!1,le=null,ge=null,Le=null,Ue=null,xt=null,pt=null,on=null,Xt=null}}}const a=new r,d=new o,h=new l,v=new WeakMap,g=new WeakMap;let _={},y={},w=new WeakMap,A=[],T=null,p=!1,E=null,S=null,L=null,P=null,U=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,pe=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(X)[1]),ue=pe>=1):X.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ue=pe>=2);let J=null,ne={};const we=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),oe=new Dt().fromArray(we),q=new Dt().fromArray(ve);function Me(W,le,ge,Le){const Ue=new Uint8Array(4),xt=t.createTexture();t.bindTexture(W,xt),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<ge;pt++)i&&(W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(le+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return xt}const Ee={};Ee[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),d.setClear(1),h.setClear(0),H(t.DEPTH_TEST),d.setFunc(Dh),Tt(!1),Ot(Vv),H(t.CULL_FACE),Qe(un);function H(W){_[W]!==!0&&(t.enable(W),_[W]=!0)}function Ke(W){_[W]!==!1&&(t.disable(W),_[W]=!1)}function He(W,le){return y[W]!==le?(t.bindFramebuffer(W,le),y[W]=le,i&&(W===t.DRAW_FRAMEBUFFER&&(y[t.FRAMEBUFFER]=le),W===t.FRAMEBUFFER&&(y[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function Te(W,le){let ge=A,Le=!1;if(W)if(ge=w.get(le),ge===void 0&&(ge=[],w.set(le,ge)),W.isWebGLMultipleRenderTargets){const Ue=W.texture;if(ge.length!==Ue.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let xt=0,pt=Ue.length;xt<pt;xt++)ge[xt]=t.COLOR_ATTACHMENT0+xt;ge.length=Ue.length,Le=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Le=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ge(W){return T!==W?(t.useProgram(W),T=W,!0):!1}const ht={[Cr]:t.FUNC_ADD,[Lw]:t.FUNC_SUBTRACT,[Iw]:t.FUNC_REVERSE_SUBTRACT};if(i)ht[jv]=t.MIN,ht[Xv]=t.MAX;else{const W=e.get("EXT_blend_minmax");W!==null&&(ht[jv]=W.MIN_EXT,ht[Xv]=W.MAX_EXT)}const Be={[Rh]:t.ZERO,[Uw]:t.ONE,[Ow]:t.SRC_COLOR,[Vy]:t.SRC_ALPHA,[zw]:t.SRC_ALPHA_SATURATE,[jy]:t.DST_COLOR,[Wy]:t.DST_ALPHA,[Nw]:t.ONE_MINUS_SRC_COLOR,[Hy]:t.ONE_MINUS_SRC_ALPHA,[kw]:t.ONE_MINUS_DST_COLOR,[Fw]:t.ONE_MINUS_DST_ALPHA};function Qe(W,le,ge,Le,Ue,xt,pt,on){if(W===un){p===!0&&(Ke(t.BLEND),p=!1);return}if(p===!1&&(H(t.BLEND),p=!0),W!==Mc){if(W!==E||on!==R){if((S!==Cr||U!==Cr)&&(t.blendEquation(t.FUNC_ADD),S=Cr,U=Cr),on)switch(W){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ph:t.blendFunc(t.ONE,t.ONE);break;case Hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ph:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,B=null,z=null,E=W,R=on}return}Ue=Ue||le,xt=xt||ge,pt=pt||Le,(le!==S||Ue!==U)&&(t.blendEquationSeparate(ht[le],ht[Ue]),S=le,U=Ue),(ge!==L||Le!==P||xt!==B||pt!==z)&&(t.blendFuncSeparate(Be[ge],Be[Le],Be[xt],Be[pt]),L=ge,P=Le,B=xt,z=pt),E=W,R=!1}function Ye(W,le){W.side===nr?Ke(t.CULL_FACE):H(t.CULL_FACE);let ge=W.side===Dn;le&&(ge=!ge),Tt(ge),W.blending===Ds&&W.transparent===!1?Qe(un):Qe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),a.setMask(W.colorWrite);const Le=W.stencilWrite;h.setTest(Le),Le&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):Ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(W){N!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),N=W)}function Ot(W){W!==Rw?(H(t.CULL_FACE),W!==ae&&(W===Vv?t.cullFace(t.BACK):W===Dw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ke(t.CULL_FACE),ae=W}function gt(W){W!==fe&&(ue&&t.lineWidth(W),fe=W)}function lt(W,le,ge){W?(H(t.POLYGON_OFFSET_FILL),($!==le||te!==ge)&&(t.polygonOffset(le,ge),$=le,te=ge)):Ke(t.POLYGON_OFFSET_FILL)}function Mt(W){W?H(t.SCISSOR_TEST):Ke(t.SCISSOR_TEST)}function jt(W){W===void 0&&(W=t.TEXTURE0+j-1),J!==W&&(t.activeTexture(W),J=W)}function F(W,le,ge){ge===void 0&&(J===null?ge=t.TEXTURE0+j-1:ge=J);let Le=ne[ge];Le===void 0&&(Le={type:void 0,texture:void 0},ne[ge]=Le),(Le.type!==W||Le.texture!==le)&&(J!==ge&&(t.activeTexture(ge),J=ge),t.bindTexture(W,le||Ee[W]),Le.type=W,Le.texture=le)}function D(){const W=ne[J];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{t.texSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{t.texStorage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{t.texImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(W){oe.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),oe.copy(W))}function Fe(W){q.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function qe(W,le){let ge=g.get(le);ge===void 0&&(ge=new WeakMap,g.set(le,ge));let Le=ge.get(W);Le===void 0&&(Le=t.getUniformBlockIndex(le,W.name),ge.set(W,Le))}function Je(W,le){const Le=g.get(le).get(W);v.get(le)!==Le&&(t.uniformBlockBinding(le,Le,W.__bindingPointIndex),v.set(le,Le))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),_={},J=null,ne={},y={},w=new WeakMap,A=[],T=null,p=!1,E=null,S=null,L=null,P=null,U=null,B=null,z=null,R=!1,N=null,ae=null,fe=null,$=null,te=null,oe.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),d.reset(),h.reset()}return{buffers:{color:a,depth:d,stencil:h},enable:H,disable:Ke,bindFramebuffer:He,drawBuffers:Te,useProgram:Ge,setBlending:Qe,setMaterial:Ye,setFlipSided:Tt,setCullFace:Ot,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:Mt,activeTexture:jt,bindTexture:F,unbindTexture:D,compressedTexImage2D:se,compressedTexImage3D:me,texImage2D:Ie,texImage3D:ze,updateUBOMapping:qe,uniformBlockBinding:Je,texStorage2D:ie,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:G,compressedTexSubImage3D:he,scissor:De,viewport:Fe,reset:At}}function cP(t,e,n,i,r,o,l){const a=r.isWebGL2,d=r.maxTextures,h=r.maxCubemapSize,v=r.maxTextureSize,g=r.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let A;const T=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,D){return p?new OffscreenCanvas(F,D):fl("canvas")}function S(F,D,se,me){let xe=1;if((F.width>me||F.height>me)&&(xe=me/Math.max(F.width,F.height)),xe<1||D===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const be=D?y1:Math.floor,G=be(xe*F.width),he=be(xe*F.height);A===void 0&&(A=E(G,he));const ie=se?E(G,he):A;return ie.width=G,ie.height=he,ie.getContext("2d").drawImage(F,0,0,G,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+G+"x"+he+")."),ie}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function L(F){return yg(F.width)&&yg(F.height)}function P(F){return a?!1:F.wrapS!==Ti||F.wrapT!==Ti||F.minFilter!==Qt&&F.minFilter!==li}function U(F,D){return F.generateMipmaps&&D&&F.minFilter!==Qt&&F.minFilter!==li}function B(F){t.generateMipmap(F)}function z(F,D,se,me,xe=!1){if(a===!1)return D;if(F!==null){if(t[F]!==void 0)return t[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let be=D;return D===t.RED&&(se===t.FLOAT&&(be=t.R32F),se===t.HALF_FLOAT&&(be=t.R16F),se===t.UNSIGNED_BYTE&&(be=t.R8)),D===t.RG&&(se===t.FLOAT&&(be=t.RG32F),se===t.HALF_FLOAT&&(be=t.RG16F),se===t.UNSIGNED_BYTE&&(be=t.RG8)),D===t.RGBA&&(se===t.FLOAT&&(be=t.RGBA32F),se===t.HALF_FLOAT&&(be=t.RGBA16F),se===t.UNSIGNED_BYTE&&(be=me===it&&xe===!1?t.SRGB8_ALPHA8:t.RGBA8),se===t.UNSIGNED_SHORT_4_4_4_4&&(be=t.RGBA4),se===t.UNSIGNED_SHORT_5_5_5_1&&(be=t.RGB5_A1)),(be===t.R16F||be===t.R32F||be===t.RG16F||be===t.RG32F||be===t.RGBA16F||be===t.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function R(F,D,se){return U(F,se)===!0||F.isFramebufferTexture&&F.minFilter!==Qt&&F.minFilter!==li?Math.log2(Math.max(D.width,D.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?D.mipmaps.length:1}function N(F){return F===Qt||F===Yv||F===ed?t.NEAREST:t.LINEAR}function ae(F){const D=F.target;D.removeEventListener("dispose",ae),$(D),D.isVideoTexture&&w.delete(D)}function fe(F){const D=F.target;D.removeEventListener("dispose",fe),j(D)}function $(F){const D=i.get(F);if(D.__webglInit===void 0)return;const se=F.source,me=T.get(se);if(me){const xe=me[D.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&te(F),Object.keys(me).length===0&&T.delete(se)}i.remove(F)}function te(F){const D=i.get(F);t.deleteTexture(D.__webglTexture);const se=F.source,me=T.get(se);delete me[D.__cacheKey],l.memory.textures--}function j(F){const D=F.texture,se=i.get(F),me=i.get(D);if(me.__webglTexture!==void 0&&(t.deleteTexture(me.__webglTexture),l.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)t.deleteFramebuffer(se.__webglFramebuffer[xe]),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer[xe]);else{if(t.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&t.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&t.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let xe=0;xe<se.__webglColorRenderbuffer.length;xe++)se.__webglColorRenderbuffer[xe]&&t.deleteRenderbuffer(se.__webglColorRenderbuffer[xe]);se.__webglDepthRenderbuffer&&t.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let xe=0,be=D.length;xe<be;xe++){const G=i.get(D[xe]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),l.memory.textures--),i.remove(D[xe])}i.remove(D),i.remove(F)}let ue=0;function pe(){ue=0}function X(){const F=ue;return F>=d&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+d),ue+=1,F}function J(F){const D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()}function ne(F,D){const se=i.get(F);if(F.isVideoTexture&&Mt(F),F.isRenderTargetTexture===!1&&F.version>0&&se.__version!==F.version){const me=F.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(se,F,D);return}}n.bindTexture(t.TEXTURE_2D,se.__webglTexture,t.TEXTURE0+D)}function we(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ke(se,F,D);return}n.bindTexture(t.TEXTURE_2D_ARRAY,se.__webglTexture,t.TEXTURE0+D)}function ve(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){Ke(se,F,D);return}n.bindTexture(t.TEXTURE_3D,se.__webglTexture,t.TEXTURE0+D)}function oe(F,D){const se=i.get(F);if(F.version>0&&se.__version!==F.version){He(se,F,D);return}n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture,t.TEXTURE0+D)}const q={[Po]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[Ih]:t.MIRRORED_REPEAT},Me={[Qt]:t.NEAREST,[Yv]:t.NEAREST_MIPMAP_NEAREST,[ed]:t.NEAREST_MIPMAP_LINEAR,[li]:t.LINEAR,[Jw]:t.LINEAR_MIPMAP_NEAREST,[ul]:t.LINEAR_MIPMAP_LINEAR};function Ee(F,D,se){if(se?(t.texParameteri(F,t.TEXTURE_WRAP_S,q[D.wrapS]),t.texParameteri(F,t.TEXTURE_WRAP_T,q[D.wrapT]),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,q[D.wrapR]),t.texParameteri(F,t.TEXTURE_MAG_FILTER,Me[D.magFilter]),t.texParameteri(F,t.TEXTURE_MIN_FILTER,Me[D.minFilter])):(t.texParameteri(F,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(F,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(D.wrapS!==Ti||D.wrapT!==Ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(F,t.TEXTURE_MAG_FILTER,N(D.magFilter)),t.texParameteri(F,t.TEXTURE_MIN_FILTER,N(D.minFilter)),D.minFilter!==Qt&&D.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===Qt||D.minFilter!==ed&&D.minFilter!==ul||D.type===_o&&e.has("OES_texture_float_linear")===!1||a===!1&&D.type===cl&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(t.texParameterf(F,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function H(F,D){let se=!1;F.__webglInit===void 0&&(F.__webglInit=!0,D.addEventListener("dispose",ae));const me=D.source;let xe=T.get(me);xe===void 0&&(xe={},T.set(me,xe));const be=J(D);if(be!==F.__cacheKey){xe[be]===void 0&&(xe[be]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,se=!0),xe[be].usedTimes++;const G=xe[F.__cacheKey];G!==void 0&&(xe[F.__cacheKey].usedTimes--,G.usedTimes===0&&te(D)),F.__cacheKey=be,F.__webglTexture=xe[be].texture}return se}function Ke(F,D,se){let me=t.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(me=t.TEXTURE_2D_ARRAY),D.isData3DTexture&&(me=t.TEXTURE_3D);const xe=H(F,D),be=D.source;n.bindTexture(me,F.__webglTexture,t.TEXTURE0+se);const G=i.get(be);if(be.version!==G.__version||xe===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const he=P(D)&&L(D.image)===!1;let ie=S(D.image,he,!1,v);ie=jt(D,ie);const Ae=L(ie)||a,Ie=o.convert(D.format,D.colorSpace);let ze=o.convert(D.type),De=z(D.internalFormat,Ie,ze,D.colorSpace);Ee(me,D,Ae);let Fe;const qe=D.mipmaps,Je=a&&D.isVideoTexture!==!0,At=G.__version===void 0||xe===!0,W=R(D,ie,Ae);if(D.isDepthTexture)De=t.DEPTH_COMPONENT,a?D.type===_o?De=t.DEPTH_COMPONENT32F:D.type===go?De=t.DEPTH_COMPONENT24:D.type===Ls?De=t.DEPTH24_STENCIL8:De=t.DEPTH_COMPONENT16:D.type===_o&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===So&&De===t.DEPTH_COMPONENT&&D.type!==Op&&D.type!==go&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=go,ze=o.convert(D.type)),D.format===Ws&&De===t.DEPTH_COMPONENT&&(De=t.DEPTH_STENCIL,D.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Ls,ze=o.convert(D.type))),At&&(Je?n.texStorage2D(t.TEXTURE_2D,1,De,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,Ie,ze,null));else if(D.isDataTexture)if(qe.length>0&&Ae){Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,ze,Fe.data):n.texImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Ie,ze,Fe.data);D.generateMipmaps=!1}else Je?(At&&n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Ie,ze,ie.data)):n.texImage2D(t.TEXTURE_2D,0,De,ie.width,ie.height,0,Ie,ze,ie.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Je&&At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,qe[0].width,qe[0].height,ie.depth);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],D.format!==bi?Ie!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,ie.depth,Ie,Fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,De,Fe.width,Fe.height,ie.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Fe.width,Fe.height,ie.depth,Ie,ze,Fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,De,Fe.width,Fe.height,ie.depth,0,Ie,ze,Fe.data)}else{Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],D.format!==bi?Ie!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,Fe.data):n.compressedTexImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Fe.width,Fe.height,Ie,ze,Fe.data):n.texImage2D(t.TEXTURE_2D,le,De,Fe.width,Fe.height,0,Ie,ze,Fe.data)}else if(D.isDataArrayTexture)Je?(At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ie,ze,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,Ie,ze,ie.data);else if(D.isData3DTexture)Je?(At&&n.texStorage3D(t.TEXTURE_3D,W,De,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ie,ze,ie.data)):n.texImage3D(t.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,Ie,ze,ie.data);else if(D.isFramebufferTexture){if(At)if(Je)n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height);else{let le=ie.width,ge=ie.height;for(let Le=0;Le<W;Le++)n.texImage2D(t.TEXTURE_2D,Le,De,le,ge,0,Ie,ze,null),le>>=1,ge>>=1}}else if(qe.length>0&&Ae){Je&&At&&n.texStorage2D(t.TEXTURE_2D,W,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Fe=qe[le],Je?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ie,ze,Fe):n.texImage2D(t.TEXTURE_2D,le,De,Ie,ze,Fe);D.generateMipmaps=!1}else Je?(At&&n.texStorage2D(t.TEXTURE_2D,W,De,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,ze,ie)):n.texImage2D(t.TEXTURE_2D,0,De,Ie,ze,ie);U(D,Ae)&&B(me),G.__version=be.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function He(F,D,se){if(D.image.length!==6)return;const me=H(F,D),xe=D.source;n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+se);const be=i.get(xe);if(xe.version!==be.__version||me===!0){n.activeTexture(t.TEXTURE0+se),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const G=D.isCompressedTexture||D.image[0].isCompressedTexture,he=D.image[0]&&D.image[0].isDataTexture,ie=[];for(let le=0;le<6;le++)!G&&!he?ie[le]=S(D.image[le],!1,!0,h):ie[le]=he?D.image[le].image:D.image[le],ie[le]=jt(D,ie[le]);const Ae=ie[0],Ie=L(Ae)||a,ze=o.convert(D.format,D.colorSpace),De=o.convert(D.type),Fe=z(D.internalFormat,ze,De,D.colorSpace),qe=a&&D.isVideoTexture!==!0,Je=be.__version===void 0||me===!0;let At=R(D,Ae,Ie);Ee(t.TEXTURE_CUBE_MAP,D,Ie);let W;if(G){qe&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Fe,Ae.width,Ae.height);for(let le=0;le<6;le++){W=ie[le].mipmaps;for(let ge=0;ge<W.length;ge++){const Le=W[ge];D.format!==bi?ze!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,Le.width,Le.height,ze,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,0,0,Le.width,Le.height,ze,De,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge,Fe,Le.width,Le.height,0,ze,De,Le.data)}}}else{W=D.mipmaps,qe&&Je&&(W.length>0&&At++,n.texStorage2D(t.TEXTURE_CUBE_MAP,At,Fe,ie[0].width,ie[0].height));for(let le=0;le<6;le++)if(he){qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie[le].width,ie[le].height,ze,De,ie[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,ie[le].width,ie[le].height,0,ze,De,ie[le].data);for(let ge=0;ge<W.length;ge++){const Ue=W[ge].image[le].image;qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,Ue.width,Ue.height,ze,De,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Fe,Ue.width,Ue.height,0,ze,De,Ue.data)}}else{qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,De,ie[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Fe,ze,De,ie[le]);for(let ge=0;ge<W.length;ge++){const Le=W[ge];qe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,0,0,ze,De,Le.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge+1,Fe,ze,De,Le.image[le])}}}U(D,Ie)&&B(t.TEXTURE_CUBE_MAP),be.__version=xe.version,D.onUpdate&&D.onUpdate(D)}F.__version=D.version}function Te(F,D,se,me,xe){const be=o.convert(se.format,se.colorSpace),G=o.convert(se.type),he=z(se.internalFormat,be,G,se.colorSpace);i.get(D).__hasExternalTextures||(xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,he,D.width,D.height,D.depth,0,be,G,null):n.texImage2D(xe,0,he,D.width,D.height,0,be,G,null)),n.bindFramebuffer(t.FRAMEBUFFER,F),lt(D)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0,gt(D)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,me,xe,i.get(se).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(F,D,se){if(t.bindRenderbuffer(t.RENDERBUFFER,F),D.depthBuffer&&!D.stencilBuffer){let me=t.DEPTH_COMPONENT16;if(se||lt(D)){const xe=D.depthTexture;xe&&xe.isDepthTexture&&(xe.type===_o?me=t.DEPTH_COMPONENT32F:xe.type===go&&(me=t.DEPTH_COMPONENT24));const be=gt(D);lt(D)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,me,D.width,D.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,be,me,D.width,D.height)}else t.renderbufferStorage(t.RENDERBUFFER,me,D.width,D.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,F)}else if(D.depthBuffer&&D.stencilBuffer){const me=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):lt(D)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,F)}else{const me=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let xe=0;xe<me.length;xe++){const be=me[xe],G=o.convert(be.format,be.colorSpace),he=o.convert(be.type),ie=z(be.internalFormat,G,he,be.colorSpace),Ae=gt(D);se&&lt(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ie,D.width,D.height):lt(D)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ie,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,ie,D.width,D.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ht(F,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,F),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),ne(D.depthTexture,0);const me=i.get(D.depthTexture).__webglTexture,xe=gt(D);if(D.depthTexture.format===So)lt(D)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(D.depthTexture.format===Ws)lt(D)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Be(F){const D=i.get(F),se=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!D.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ht(D.__webglFramebuffer,F)}else if(se){D.__webglDepthbuffer=[];for(let me=0;me<6;me++)n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer[me]),D.__webglDepthbuffer[me]=t.createRenderbuffer(),Ge(D.__webglDepthbuffer[me],F,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=t.createRenderbuffer(),Ge(D.__webglDepthbuffer,F,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(F,D,se){const me=i.get(F);D!==void 0&&Te(me.__webglFramebuffer,F,F.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),se!==void 0&&Be(F)}function Ye(F){const D=F.texture,se=i.get(F),me=i.get(D);F.addEventListener("dispose",fe),F.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture()),me.__version=D.version,l.memory.textures++);const xe=F.isWebGLCubeRenderTarget===!0,be=F.isWebGLMultipleRenderTargets===!0,G=L(F)||a;if(xe){se.__webglFramebuffer=[];for(let he=0;he<6;he++)se.__webglFramebuffer[he]=t.createFramebuffer()}else{if(se.__webglFramebuffer=t.createFramebuffer(),be)if(r.drawBuffers){const he=F.texture;for(let ie=0,Ae=he.length;ie<Ae;ie++){const Ie=i.get(he[ie]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&lt(F)===!1){const he=be?D:[D];se.__webglMultisampledFramebuffer=t.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ie=0;ie<he.length;ie++){const Ae=he[ie];se.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,se.__webglColorRenderbuffer[ie]);const Ie=o.convert(Ae.format,Ae.colorSpace),ze=o.convert(Ae.type),De=z(Ae.internalFormat,Ie,ze,Ae.colorSpace,F.isXRRenderTarget===!0),Fe=gt(F);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,De,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,se.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),F.depthBuffer&&(se.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(se.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,D,G);for(let he=0;he<6;he++)Te(se.__webglFramebuffer[he],F,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he);U(D,G)&&B(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){const he=F.texture;for(let ie=0,Ae=he.length;ie<Ae;ie++){const Ie=he[ie],ze=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ze.__webglTexture),Ee(t.TEXTURE_2D,Ie,G),Te(se.__webglFramebuffer,F,Ie,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D),U(Ie,G)&&B(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?he=F.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,me.__webglTexture),Ee(he,D,G),Te(se.__webglFramebuffer,F,D,t.COLOR_ATTACHMENT0,he),U(D,G)&&B(he),n.unbindTexture()}F.depthBuffer&&Be(F)}function Tt(F){const D=L(F)||a,se=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let me=0,xe=se.length;me<xe;me++){const be=se[me];if(U(be,D)){const G=F.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(be).__webglTexture;n.bindTexture(G,he),B(G),n.unbindTexture()}}}function Ot(F){if(a&&F.samples>0&&lt(F)===!1){const D=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],se=F.width,me=F.height;let xe=t.COLOR_BUFFER_BIT;const be=[],G=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(F),ie=F.isWebGLMultipleRenderTargets===!0;if(ie)for(let Ae=0;Ae<D.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ae=0;Ae<D.length;Ae++){be.push(t.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&be.push(G);const Ie=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ie===!1&&(F.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),F.stencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),ie&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[G]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[G])),ie){const ze=i.get(D[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,se,me,0,0,se,me,xe,t.NEAREST),y&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,be)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let Ae=0;Ae<D.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const Ie=i.get(D[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function gt(F){return Math.min(g,F.samples)}function lt(F){const D=i.get(F);return a&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Mt(F){const D=l.render.frame;w.get(F)!==D&&(w.set(F,D),F.update())}function jt(F,D){const se=F.colorSpace,me=F.format,xe=F.type;return F.isCompressedTexture===!0||F.format===Uh||se!==Vi&&se!==Mo&&(se===it?a===!1?e.has("EXT_sRGB")===!0&&me===bi?(F.format=Uh,F.minFilter=li,F.generateMipmaps=!1):D=Zy.sRGBToLinear(D):(me!==bi||xe!==Ro)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),D}this.allocateTextureUnit=X,this.resetTextureUnits=pe,this.setTexture2D=ne,this.setTexture2DArray=we,this.setTexture3D=ve,this.setTextureCube=oe,this.rebindTextures=Qe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=lt}function fP(t,e,n){const i=n.isWebGL2;function r(o,l=Mo){let a;if(o===Ro)return t.UNSIGNED_BYTE;if(o===i1)return t.UNSIGNED_SHORT_4_4_4_4;if(o===r1)return t.UNSIGNED_SHORT_5_5_5_1;if(o===e1)return t.BYTE;if(o===t1)return t.SHORT;if(o===Op)return t.UNSIGNED_SHORT;if(o===n1)return t.INT;if(o===go)return t.UNSIGNED_INT;if(o===_o)return t.FLOAT;if(o===cl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===o1)return t.ALPHA;if(o===bi)return t.RGBA;if(o===s1)return t.LUMINANCE;if(o===a1)return t.LUMINANCE_ALPHA;if(o===So)return t.DEPTH_COMPONENT;if(o===Ws)return t.DEPTH_STENCIL;if(o===Uh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===l1)return t.RED;if(o===u1)return t.RED_INTEGER;if(o===c1)return t.RG;if(o===f1)return t.RG_INTEGER;if(o===d1)return t.RGBA_INTEGER;if(o===td||o===nd||o===id||o===rd)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===td)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===id)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===rd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===td)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===nd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===id)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===rd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===qv||o===$v||o===Kv||o===Zv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===qv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===$v)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Kv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Zv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===h1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Qv||o===Jv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Qv)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Jv)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===ug||o===cg||o===fg||o===dg||o===hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===eg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===tg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ng)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ig)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===rg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===og)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===sg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ag)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===lg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ug)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===cg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===fg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===dg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===hg)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===od)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===od)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===p1||o===pg||o===mg||o===vg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===od)return a.COMPRESSED_RED_RGTC1_EXT;if(o===pg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===vg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ls?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class dP extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ou extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hP={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,l=null;const a=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const A of e.hand.values()){const T=n.getJointPose(A,i),p=this._getHandJoint(h,A);T!==null&&(p.matrix.fromArray(T.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=T.radius),p.visible=T!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,w=.005;h.inputState.pinching&&_>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hP)))}return a!==null&&(a.visible=r!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ou;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dx extends Wn{constructor(e,n,i,r,o,l,a,d,h,v){if(v=v!==void 0?v:So,v!==So&&v!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&v===So&&(i=go),i===void 0&&v===Ws&&(i=Ls),super(null,r,o,l,a,d,v,i,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1}}class pP extends Oo{constructor(e,n){super();const i=this;let r=null,o=1,l=null,a="local-floor",d=1,h=null,v=null,g=null,_=null,y=null,w=null;const A=n.getContextAttributes();let T=null,p=null;const E=[],S=[],L=new Set,P=new Map,U=new Fn;U.layers.enable(1),U.viewport=new Dt;const B=new Fn;B.layers.enable(2),B.viewport=new Dt;const z=[U,B],R=new dP;R.layers.enable(1),R.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let q=E[oe];return q===void 0&&(q=new Pd,E[oe]=q),q.getTargetRaySpace()},this.getControllerGrip=function(oe){let q=E[oe];return q===void 0&&(q=new Pd,E[oe]=q),q.getGripSpace()},this.getHand=function(oe){let q=E[oe];return q===void 0&&(q=new Pd,E[oe]=q),q.getHandSpace()};function fe(oe){const q=S.indexOf(oe.inputSource);if(q===-1)return;const Me=E[q];Me!==void 0&&(Me.update(oe.inputSource,oe.frame,h||l),Me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function $(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",te);for(let oe=0;oe<E.length;oe++){const q=S[oe];q!==null&&(S[oe]=null,E[oe].disconnect(q))}N=null,ae=null,e.setRenderTarget(T),y=null,_=null,g=null,r=null,p=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",$),r.addEventListener("inputsourceschange",te),A.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?A.antialias:!0,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:y}),p=new en(y.framebufferWidth,y.framebufferHeight,{format:bi,type:Ro,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil})}else{let q=null,Me=null,Ee=null;A.depth&&(Ee=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=A.stencil?Ws:So,Me=A.stencil?Ls:go);const H={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:o};g=new XRWebGLBinding(r,n),_=g.createProjectionLayer(H),r.updateRenderState({layers:[_]}),p=new en(_.textureWidth,_.textureHeight,{format:bi,type:Ro,depthTexture:new dx(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0});const Ke=e.properties.get(p);Ke.__ignoreDepthValues=_.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(oe){for(let q=0;q<oe.removed.length;q++){const Me=oe.removed[q],Ee=S.indexOf(Me);Ee>=0&&(S[Ee]=null,E[Ee].disconnect(Me))}for(let q=0;q<oe.added.length;q++){const Me=oe.added[q];let Ee=S.indexOf(Me);if(Ee===-1){for(let Ke=0;Ke<E.length;Ke++)if(Ke>=S.length){S.push(Me),Ee=Ke;break}else if(S[Ke]===null){S[Ke]=Me,Ee=Ke;break}if(Ee===-1)break}const H=E[Ee];H&&H.connect(Me)}}const j=new Y,ue=new Y;function pe(oe,q,Me){j.setFromMatrixPosition(q.matrixWorld),ue.setFromMatrixPosition(Me.matrixWorld);const Ee=j.distanceTo(ue),H=q.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,He=H[14]/(H[10]-1),Te=H[14]/(H[10]+1),Ge=(H[9]+1)/H[5],ht=(H[9]-1)/H[5],Be=(H[8]-1)/H[0],Qe=(Ke[8]+1)/Ke[0],Ye=He*Be,Tt=He*Qe,Ot=Ee/(-Be+Qe),gt=Ot*-Be;q.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(gt),oe.translateZ(Ot),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const lt=He+Ot,Mt=Te+Ot,jt=Ye-gt,F=Tt+(Ee-gt),D=Ge*Te/Mt*lt,se=ht*Te/Mt*lt;oe.projectionMatrix.makePerspective(jt,F,D,se,lt,Mt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function X(oe,q){q===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(q.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;R.near=B.near=U.near=oe.near,R.far=B.far=U.far=oe.far,(N!==R.near||ae!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,ae=R.far);const q=oe.parent,Me=R.cameras;X(R,q);for(let Ee=0;Ee<Me.length;Ee++)X(Me[Ee],q);Me.length===2?pe(R,U,B):R.projectionMatrix.copy(U.projectionMatrix),J(oe,R,q)};function J(oe,q,Me){Me===null?oe.matrix.copy(q.matrixWorld):(oe.matrix.copy(Me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(q.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0);const Ee=oe.children;for(let H=0,Ke=Ee.length;H<Ke;H++)Ee[H].updateMatrixWorld(!0);oe.projectionMatrix.copy(q.projectionMatrix),oe.projectionMatrixInverse.copy(q.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=wc*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(oe){d=oe,_!==null&&(_.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.getPlanes=function(){return L};let ne=null;function we(oe,q){if(v=q.getViewerPose(h||l),w=q,v!==null){const Me=v.views;y!==null&&(e.setRenderTargetFramebuffer(p,y.framebuffer),e.setRenderTarget(p));let Ee=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,Ee=!0);for(let H=0;H<Me.length;H++){const Ke=Me[H];let He=null;if(y!==null)He=y.getViewport(Ke);else{const Ge=g.getViewSubImage(_,Ke);He=Ge.viewport,H===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,_.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Te=z[H];Te===void 0&&(Te=new Fn,Te.layers.enable(H),Te.viewport=new Dt,z[H]=Te),Te.matrix.fromArray(Ke.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ke.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(He.x,He.y,He.width,He.height),H===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ee===!0&&R.cameras.push(Te)}}for(let Me=0;Me<E.length;Me++){const Ee=S[Me],H=E[Me];Ee!==null&&H!==void 0&&H.update(Ee,q,h||l)}if(ne&&ne(oe,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let Me=null;for(const Ee of L)q.detectedPlanes.has(Ee)||(Me===null&&(Me=[]),Me.push(Ee));if(Me!==null)for(const Ee of Me)L.delete(Ee),P.delete(Ee),i.dispatchEvent({type:"planeremoved",data:Ee});for(const Ee of q.detectedPlanes)if(!L.has(Ee))L.add(Ee),P.set(Ee,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Ee});else{const H=P.get(Ee);Ee.lastChangedTime>H&&(P.set(Ee,Ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Ee}))}}w=null}const ve=new ax;ve.setAnimationLoop(we),this.setAnimationLoop=function(oe){ne=oe},this.dispose=function(){}}}function mP(t,e){function n(T,p){T.matrixAutoUpdate===!0&&T.updateMatrix(),p.value.copy(T.matrix)}function i(T,p){p.color.getRGB(T.fogColor.value,rx(t)),p.isFog?(T.fogNear.value=p.near,T.fogFar.value=p.far):p.isFogExp2&&(T.fogDensity.value=p.density)}function r(T,p,E,S,L){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(T,p):p.isMeshToonMaterial?(o(T,p),g(T,p)):p.isMeshPhongMaterial?(o(T,p),v(T,p)):p.isMeshStandardMaterial?(o(T,p),_(T,p),p.isMeshPhysicalMaterial&&y(T,p,L)):p.isMeshMatcapMaterial?(o(T,p),w(T,p)):p.isMeshDepthMaterial?o(T,p):p.isMeshDistanceMaterial?(o(T,p),A(T,p)):p.isMeshNormalMaterial?o(T,p):p.isLineBasicMaterial?(l(T,p),p.isLineDashedMaterial&&a(T,p)):p.isPointsMaterial?d(T,p,E,S):p.isSpriteMaterial?h(T,p):p.isShadowMaterial?(T.color.value.copy(p.color),T.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(T,p){T.opacity.value=p.opacity,p.color&&T.diffuse.value.copy(p.color),p.emissive&&T.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(T.map.value=p.map,n(p.map,T.mapTransform)),p.alphaMap&&(T.alphaMap.value=p.alphaMap,n(p.alphaMap,T.alphaMapTransform)),p.bumpMap&&(T.bumpMap.value=p.bumpMap,n(p.bumpMap,T.bumpMapTransform),T.bumpScale.value=p.bumpScale,p.side===Dn&&(T.bumpScale.value*=-1)),p.normalMap&&(T.normalMap.value=p.normalMap,n(p.normalMap,T.normalMapTransform),T.normalScale.value.copy(p.normalScale),p.side===Dn&&T.normalScale.value.negate()),p.displacementMap&&(T.displacementMap.value=p.displacementMap,n(p.displacementMap,T.displacementMapTransform),T.displacementScale.value=p.displacementScale,T.displacementBias.value=p.displacementBias),p.emissiveMap&&(T.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,T.emissiveMapTransform)),p.specularMap&&(T.specularMap.value=p.specularMap,n(p.specularMap,T.specularMapTransform)),p.alphaTest>0&&(T.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(T.envMap.value=E,T.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=p.reflectivity,T.ior.value=p.ior,T.refractionRatio.value=p.refractionRatio),p.lightMap){T.lightMap.value=p.lightMap;const S=t.useLegacyLights===!0?Math.PI:1;T.lightMapIntensity.value=p.lightMapIntensity*S,n(p.lightMap,T.lightMapTransform)}p.aoMap&&(T.aoMap.value=p.aoMap,T.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,T.aoMapTransform))}function l(T,p){T.diffuse.value.copy(p.color),T.opacity.value=p.opacity,p.map&&(T.map.value=p.map,n(p.map,T.mapTransform))}function a(T,p){T.dashSize.value=p.dashSize,T.totalSize.value=p.dashSize+p.gapSize,T.scale.value=p.scale}function d(T,p,E,S){T.diffuse.value.copy(p.color),T.opacity.value=p.opacity,T.size.value=p.size*E,T.scale.value=S*.5,p.map&&(T.map.value=p.map,n(p.map,T.uvTransform)),p.alphaMap&&(T.alphaMap.value=p.alphaMap),p.alphaTest>0&&(T.alphaTest.value=p.alphaTest)}function h(T,p){T.diffuse.value.copy(p.color),T.opacity.value=p.opacity,T.rotation.value=p.rotation,p.map&&(T.map.value=p.map,n(p.map,T.mapTransform)),p.alphaMap&&(T.alphaMap.value=p.alphaMap),p.alphaTest>0&&(T.alphaTest.value=p.alphaTest)}function v(T,p){T.specular.value.copy(p.specular),T.shininess.value=Math.max(p.shininess,1e-4)}function g(T,p){p.gradientMap&&(T.gradientMap.value=p.gradientMap)}function _(T,p){T.metalness.value=p.metalness,p.metalnessMap&&(T.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,T.metalnessMapTransform)),T.roughness.value=p.roughness,p.roughnessMap&&(T.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,T.roughnessMapTransform)),e.get(p).envMap&&(T.envMapIntensity.value=p.envMapIntensity)}function y(T,p,E){T.ior.value=p.ior,p.sheen>0&&(T.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),T.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(T.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,T.sheenColorMapTransform)),p.sheenRoughnessMap&&(T.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,T.sheenRoughnessMapTransform))),p.clearcoat>0&&(T.clearcoat.value=p.clearcoat,T.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(T.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,T.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(T.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&T.clearcoatNormalScale.value.negate())),p.iridescence>0&&(T.iridescence.value=p.iridescence,T.iridescenceIOR.value=p.iridescenceIOR,T.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(T.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,T.iridescenceMapTransform)),p.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),p.transmission>0&&(T.transmission.value=p.transmission,T.transmissionSamplerMap.value=E.texture,T.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(T.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,T.transmissionMapTransform)),T.thickness.value=p.thickness,p.thicknessMap&&(T.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=p.attenuationDistance,T.attenuationColor.value.copy(p.attenuationColor)),T.specularIntensity.value=p.specularIntensity,T.specularColor.value.copy(p.specularColor),p.specularColorMap&&(T.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,T.specularColorMapTransform)),p.specularIntensityMap&&(T.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,T.specularIntensityMapTransform))}function w(T,p){p.matcap&&(T.matcap.value=p.matcap)}function A(T,p){const E=e.get(p).light;T.referencePosition.value.setFromMatrixPosition(E.matrixWorld),T.nearDistance.value=E.shadow.camera.near,T.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vP(t,e,n,i){let r={},o={},l=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(E,S){const L=S.program;i.uniformBlockBinding(E,L)}function h(E,S){let L=r[E.id];L===void 0&&(w(E),L=v(E),r[E.id]=L,E.addEventListener("dispose",T));const P=S.program;i.updateUBOMapping(E,P);const U=e.render.frame;o[E.id]!==U&&(_(E),o[E.id]=U)}function v(E){const S=g();E.__bindingPointIndex=S;const L=t.createBuffer(),P=E.__size,U=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,L),t.bufferData(t.UNIFORM_BUFFER,P,U),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,L),L}function g(){for(let E=0;E<a;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(E){const S=r[E.id],L=E.uniforms,P=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let U=0,B=L.length;U<B;U++){const z=L[U];if(y(z,U,P)===!0){const R=z.__offset,N=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let fe=0;fe<N.length;fe++){const $=N[fe],te=A($);typeof $=="number"?(z.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,R+ae,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=$.elements[0],z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=$.elements[0],z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=$.elements[0]):($.toArray(z.__data,ae),ae+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,z.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(E,S,L){const P=E.value;if(L[S]===void 0){if(typeof P=="number")L[S]=P;else{const U=Array.isArray(P)?P:[P],B=[];for(let z=0;z<U.length;z++)B.push(U[z].clone());L[S]=B}return!0}else if(typeof P=="number"){if(L[S]!==P)return L[S]=P,!0}else{const U=Array.isArray(L[S])?L[S]:[L[S]],B=Array.isArray(P)?P:[P];for(let z=0;z<U.length;z++){const R=U[z];if(R.equals(B[z])===!1)return R.copy(B[z]),!0}}return!1}function w(E){const S=E.uniforms;let L=0;const P=16;let U=0;for(let B=0,z=S.length;B<z;B++){const R=S[B],N={boundary:0,storage:0},ae=Array.isArray(R.value)?R.value:[R.value];for(let fe=0,$=ae.length;fe<$;fe++){const te=ae[fe],j=A(te);N.boundary+=j.boundary,N.storage+=j.storage}if(R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=L,B>0){U=L%P;const fe=P-U;U!==0&&fe-N.boundary<0&&(L+=P-U,R.__offset=L)}L+=N.storage}return U=L%P,U>0&&(L+=P-U),E.__size=L,E.__cache={},this}function A(E){const S={boundary:0,storage:0};return typeof E=="number"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function T(E){const S=E.target;S.removeEventListener("dispose",T);const L=l.indexOf(S.__bindingPointIndex);l.splice(L,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const E in r)t.deleteBuffer(r[E]);l=[],r={},o={}}return{bind:d,update:h,dispose:p}}function gP(){const t=fl("canvas");return t.style.display="block",t}class hx{constructor(e={}){const{canvas:n=gP(),context:i=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=l;let y=null,w=null;const A=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=it,this.useLegacyLights=!0,this.toneMapping=Gi,this.toneMappingExposure=1;const p=this;let E=!1,S=0,L=0,P=null,U=-1,B=null;const z=new Dt,R=new Dt;let N=null,ae=n.width,fe=n.height,$=1,te=null,j=null;const ue=new Dt(0,0,ae,fe),pe=new Dt(0,0,ae,fe);let X=!1;const J=new Fp;let ne=!1,we=!1,ve=null;const oe=new Vt,q=new Y,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return P===null?$:1}let H=i;function Ke(O,Q){for(let re=0;re<O.length;re++){const K=O[re],de=n.getContext(K,Q);if(de!==null)return de}return null}try{const O={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ip}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",Je,!1),H===null){const Q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&Q.shift(),H=Ke(Q,O),H===null)throw Ke(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let He,Te,Ge,ht,Be,Qe,Ye,Tt,Ot,gt,lt,Mt,jt,F,D,se,me,xe,be,G,he,ie,Ae,Ie;function ze(){He=new DC(H),Te=new TC(H,He,e),He.init(Te),ie=new fP(H,He,Te),Ge=new uP(H,He,Te),ht=new UC(H),Be=new ZA,Qe=new cP(H,He,Ge,Be,Te,ie,ht),Ye=new CC(p),Tt=new RC(p),Ot=new X1(H,Te),Ae=new EC(H,He,Ot,Te),gt=new LC(H,Ot,ht,Ae),lt=new kC(H,gt,Ot,ht),be=new FC(H,Te,Qe),se=new bC(Be),Mt=new KA(p,Ye,Tt,He,Te,Ae,se),jt=new mP(p,Be),F=new JA,D=new oP(He,Te),xe=new MC(p,Ye,Tt,Ge,lt,_,d),me=new lP(p,lt,Te),Ie=new vP(H,ht,Te,Ge),G=new wC(H,He,ht,Te),he=new IC(H,He,ht,Te),ht.programs=Mt.programs,p.capabilities=Te,p.extensions=He,p.properties=Be,p.renderLists=F,p.shadowMap=me,p.state=Ge,p.info=ht}ze();const De=new pP(p,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const O=He.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=He.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(O){O!==void 0&&($=O,this.setSize(ae,fe,!1))},this.getSize=function(O){return O.set(ae,fe)},this.setSize=function(O,Q,re=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=O,fe=Q,n.width=Math.floor(O*$),n.height=Math.floor(Q*$),re===!0&&(n.style.width=O+"px",n.style.height=Q+"px"),this.setViewport(0,0,O,Q)},this.getDrawingBufferSize=function(O){return O.set(ae*$,fe*$).floor()},this.setDrawingBufferSize=function(O,Q,re){ae=O,fe=Q,$=re,n.width=Math.floor(O*re),n.height=Math.floor(Q*re),this.setViewport(0,0,O,Q)},this.getCurrentViewport=function(O){return O.copy(z)},this.getViewport=function(O){return O.copy(ue)},this.setViewport=function(O,Q,re,K){O.isVector4?ue.set(O.x,O.y,O.z,O.w):ue.set(O,Q,re,K),Ge.viewport(z.copy(ue).multiplyScalar($).floor())},this.getScissor=function(O){return O.copy(pe)},this.setScissor=function(O,Q,re,K){O.isVector4?pe.set(O.x,O.y,O.z,O.w):pe.set(O,Q,re,K),Ge.scissor(R.copy(pe).multiplyScalar($).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(O){Ge.setScissorTest(X=O)},this.setOpaqueSort=function(O){te=O},this.setTransparentSort=function(O){j=O},this.getClearColor=function(O){return O.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(O=!0,Q=!0,re=!0){let K=0;O&&(K|=H.COLOR_BUFFER_BIT),Q&&(K|=H.DEPTH_BUFFER_BIT),re&&(K|=H.STENCIL_BUFFER_BIT),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",Je,!1),F.dispose(),D.dispose(),Be.dispose(),Ye.dispose(),Tt.dispose(),lt.dispose(),Ae.dispose(),Ie.dispose(),Mt.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ue),De.removeEventListener("sessionend",xt),ve&&(ve.dispose(),ve=null),pt.stop()};function Fe(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const O=ht.autoReset,Q=me.enabled,re=me.autoUpdate,K=me.needsUpdate,de=me.type;ze(),ht.autoReset=O,me.enabled=Q,me.autoUpdate=re,me.needsUpdate=K,me.type=de}function Je(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function At(O){const Q=O.target;Q.removeEventListener("dispose",At),W(Q)}function W(O){le(O),Be.remove(O)}function le(O){const Q=Be.get(O).programs;Q!==void 0&&(Q.forEach(function(re){Mt.releaseProgram(re)}),O.isShaderMaterial&&Mt.releaseShaderCache(O))}this.renderBufferDirect=function(O,Q,re,K,de,Ve){Q===null&&(Q=Me);const We=de.isMesh&&de.matrixWorld.determinant()<0,je=$e(O,Q,re,K,de);Ge.setMaterial(K,We);let et=re.index,rt=1;K.wireframe===!0&&(et=gt.getWireframeAttribute(re),rt=2);const nt=re.drawRange,ot=re.attributes.position;let mt=nt.start*rt,sn=(nt.start+nt.count)*rt;Ve!==null&&(mt=Math.max(mt,Ve.start*rt),sn=Math.min(sn,(Ve.start+Ve.count)*rt)),et!==null?(mt=Math.max(mt,0),sn=Math.min(sn,et.count)):ot!=null&&(mt=Math.max(mt,0),sn=Math.min(sn,ot.count));const Tn=sn-mt;if(Tn<0||Tn===1/0)return;Ae.setup(de,K,je,re,et);let Li,Bt=G;if(et!==null&&(Li=Ot.get(et),Bt=he,Bt.setIndex(Li)),de.isMesh)K.wireframe===!0?(Ge.setLineWidth(K.wireframeLinewidth*Ee()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(de.isLine){let ut=K.linewidth;ut===void 0&&(ut=1),Ge.setLineWidth(ut*Ee()),de.isLineSegments?Bt.setMode(H.LINES):de.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else de.isPoints?Bt.setMode(H.POINTS):de.isSprite&&Bt.setMode(H.TRIANGLES);if(de.isInstancedMesh)Bt.renderInstances(mt,Tn,de.count);else if(re.isInstancedBufferGeometry){const ut=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,dr=Math.min(re.instanceCount,ut);Bt.renderInstances(mt,Tn,dr)}else Bt.render(mt,Tn)},this.compile=function(O,Q){function re(K,de,Ve){K.transparent===!0&&K.side===nr&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,No(K,de,Ve),K.side=Br,K.needsUpdate=!0,No(K,de,Ve),K.side=nr):No(K,de,Ve)}w=D.get(O),w.init(),T.push(w),O.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(p.useLegacyLights),O.traverse(function(K){const de=K.material;if(de)if(Array.isArray(de))for(let Ve=0;Ve<de.length;Ve++){const We=de[Ve];re(We,O,K)}else re(de,O,K)}),T.pop(),w=null};let ge=null;function Le(O){ge&&ge(O)}function Ue(){pt.stop()}function xt(){pt.start()}const pt=new ax;pt.setAnimationLoop(Le),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(O){ge=O,De.setAnimationLoop(O),O===null?pt.stop():pt.start()},De.addEventListener("sessionstart",Ue),De.addEventListener("sessionend",xt),this.render=function(O,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),O.isScene===!0&&O.onBeforeRender(p,O,Q,P),w=D.get(O,T.length),w.init(),T.push(w),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J.setFromProjectionMatrix(oe),we=this.localClippingEnabled,ne=se.init(this.clippingPlanes,we),y=F.get(O,A.length),y.init(),A.push(y),on(O,Q,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(te,j),ne===!0&&se.beginShadows();const re=w.state.shadowsArray;if(me.render(re,O,Q),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(y,O),w.setupLights(p.useLegacyLights),Q.isArrayCamera){const K=Q.cameras;for(let de=0,Ve=K.length;de<Ve;de++){const We=K[de];Xt(y,O,We,We.viewport)}}else Xt(y,O,Q);P!==null&&(Qe.updateMultisampleRenderTarget(P),Qe.updateRenderTargetMipmap(P)),O.isScene===!0&&O.onAfterRender(p,O,Q),Ae.resetDefaultState(),U=-1,B=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function on(O,Q,re,K){if(O.visible===!1)return;if(O.layers.test(Q.layers)){if(O.isGroup)re=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Q);else if(O.isLight)w.pushLight(O),O.castShadow&&w.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||J.intersectsSprite(O)){K&&q.setFromMatrixPosition(O.matrixWorld).applyMatrix4(oe);const We=lt.update(O),je=O.material;je.visible&&y.push(O,We,je,re,q.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||J.intersectsObject(O))){O.isSkinnedMesh&&O.skeleton.frame!==ht.render.frame&&(O.skeleton.update(),O.skeleton.frame=ht.render.frame);const We=lt.update(O),je=O.material;if(K&&(We.boundingSphere===null&&We.computeBoundingSphere(),q.copy(We.boundingSphere.center).applyMatrix4(O.matrixWorld).applyMatrix4(oe)),Array.isArray(je)){const et=We.groups;for(let rt=0,nt=et.length;rt<nt;rt++){const ot=et[rt],mt=je[ot.materialIndex];mt&&mt.visible&&y.push(O,We,mt,re,q.z,ot)}}else je.visible&&y.push(O,We,je,re,q.z,null)}}const Ve=O.children;for(let We=0,je=Ve.length;We<je;We++)on(Ve[We],Q,re,K)}function Xt(O,Q,re,K){const de=O.opaque,Ve=O.transmissive,We=O.transparent;w.setupLightsView(re),ne===!0&&se.setGlobalState(p.clippingPlanes,re),Ve.length>0&&_t(de,Ve,Q,re),K&&Ge.viewport(z.copy(K)),de.length>0&&Yt(de,Q,re),Ve.length>0&&Yt(Ve,Q,re),We.length>0&&Yt(We,Q,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function _t(O,Q,re,K){if(ve===null){const je=Te.isWebGL2;ve=new en(1024,1024,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?cl:Ro,minFilter:ul,samples:je&&a===!0?4:0})}const de=p.getRenderTarget();p.setRenderTarget(ve),p.clear();const Ve=p.toneMapping;p.toneMapping=Gi,Yt(O,re,K),Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve);let We=!1;for(let je=0,et=Q.length;je<et;je++){const rt=Q[je],nt=rt.object,ot=rt.geometry,mt=rt.material,sn=rt.group;if(mt.side===nr&&nt.layers.test(K.layers)){const Tn=mt.side;mt.side=Dn,mt.needsUpdate=!0,jn(nt,re,K,ot,mt,sn),mt.side=Tn,mt.needsUpdate=!0,We=!0}}We===!0&&(Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve)),p.setRenderTarget(de),p.toneMapping=Ve}function Yt(O,Q,re){const K=Q.isScene===!0?Q.overrideMaterial:null;for(let de=0,Ve=O.length;de<Ve;de++){const We=O[de],je=We.object,et=We.geometry,rt=K===null?We.material:K,nt=We.group;je.layers.test(re.layers)&&jn(je,Q,re,et,rt,nt)}}function jn(O,Q,re,K,de,Ve){O.onBeforeRender(p,Q,re,K,de,Ve),O.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),de.onBeforeRender(p,Q,re,K,O,Ve),de.transparent===!0&&de.side===nr&&de.forceSinglePass===!1?(de.side=Dn,de.needsUpdate=!0,p.renderBufferDirect(re,Q,K,de,O,Ve),de.side=Br,de.needsUpdate=!0,p.renderBufferDirect(re,Q,K,de,O,Ve),de.side=nr):p.renderBufferDirect(re,Q,K,de,O,Ve),O.onAfterRender(p,Q,re,K,de,Ve)}function No(O,Q,re){Q.isScene!==!0&&(Q=Me);const K=Be.get(O),de=w.state.lights,Ve=w.state.shadowsArray,We=de.state.version,je=Mt.getParameters(O,de.state,Ve,Q,re),et=Mt.getProgramCacheKey(je);let rt=K.programs;K.environment=O.isMeshStandardMaterial?Q.environment:null,K.fog=Q.fog,K.envMap=(O.isMeshStandardMaterial?Tt:Ye).get(O.envMap||K.environment),rt===void 0&&(O.addEventListener("dispose",At),rt=new Map,K.programs=rt);let nt=rt.get(et);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===We)return ti(O,je),nt}else je.uniforms=Mt.getUniforms(O),O.onBuild(re,je,p),O.onBeforeCompile(je,p),nt=Mt.acquireProgram(je,et),rt.set(et,nt),K.uniforms=je.uniforms;const ot=K.uniforms;(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ot.clippingPlanes=se.uniform),ti(O,je),K.needsLights=Yr(O),K.lightsStateVersion=We,K.needsLights&&(ot.ambientLightColor.value=de.state.ambient,ot.lightProbe.value=de.state.probe,ot.directionalLights.value=de.state.directional,ot.directionalLightShadows.value=de.state.directionalShadow,ot.spotLights.value=de.state.spot,ot.spotLightShadows.value=de.state.spotShadow,ot.rectAreaLights.value=de.state.rectArea,ot.ltc_1.value=de.state.rectAreaLTC1,ot.ltc_2.value=de.state.rectAreaLTC2,ot.pointLights.value=de.state.point,ot.pointLightShadows.value=de.state.pointShadow,ot.hemisphereLights.value=de.state.hemi,ot.directionalShadowMap.value=de.state.directionalShadowMap,ot.directionalShadowMatrix.value=de.state.directionalShadowMatrix,ot.spotShadowMap.value=de.state.spotShadowMap,ot.spotLightMatrix.value=de.state.spotLightMatrix,ot.spotLightMap.value=de.state.spotLightMap,ot.pointShadowMap.value=de.state.pointShadowMap,ot.pointShadowMatrix.value=de.state.pointShadowMatrix);const mt=nt.getUniforms(),sn=Zu.seqWithValue(mt.seq,ot);return K.currentProgram=nt,K.uniformsList=sn,nt}function ti(O,Q){const re=Be.get(O);re.outputColorSpace=Q.outputColorSpace,re.instancing=Q.instancing,re.skinning=Q.skinning,re.morphTargets=Q.morphTargets,re.morphNormals=Q.morphNormals,re.morphColors=Q.morphColors,re.morphTargetsCount=Q.morphTargetsCount,re.numClippingPlanes=Q.numClippingPlanes,re.numIntersection=Q.numClipIntersection,re.vertexAlphas=Q.vertexAlphas,re.vertexTangents=Q.vertexTangents,re.toneMapping=Q.toneMapping}function $e(O,Q,re,K,de){Q.isScene!==!0&&(Q=Me),Qe.resetTextureUnits();const Ve=Q.fog,We=K.isMeshStandardMaterial?Q.environment:null,je=P===null?p.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vi,et=(K.isMeshStandardMaterial?Tt:Ye).get(K.envMap||We),rt=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!K.normalMap&&!!re.attributes.tangent,ot=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,sn=!!re.morphAttributes.color,Tn=K.toneMapped?p.toneMapping:Gi,Li=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bt=Li!==void 0?Li.length:0,ut=Be.get(K),dr=w.state.lights;if(ne===!0&&(we===!0||O!==B)){const bn=O===B&&K.id===U;se.setState(K,O,bn)}let qt=!1;K.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==dr.state.version||ut.outputColorSpace!==je||de.isInstancedMesh&&ut.instancing===!1||!de.isInstancedMesh&&ut.instancing===!0||de.isSkinnedMesh&&ut.skinning===!1||!de.isSkinnedMesh&&ut.skinning===!0||ut.envMap!==et||K.fog===!0&&ut.fog!==Ve||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==se.numPlanes||ut.numIntersection!==se.numIntersection)||ut.vertexAlphas!==rt||ut.vertexTangents!==nt||ut.morphTargets!==ot||ut.morphNormals!==mt||ut.morphColors!==sn||ut.toneMapping!==Tn||Te.isWebGL2===!0&&ut.morphTargetsCount!==Bt)&&(qt=!0):(qt=!0,ut.__version=K.version);let ni=ut.currentProgram;qt===!0&&(ni=No(K,Q,de));let ko=!1,qr=!1,Qs=!1;const Ht=ni.getUniforms(),Hi=ut.uniforms;if(Ge.useProgram(ni.program)&&(ko=!0,qr=!0,Qs=!0),K.id!==U&&(U=K.id,qr=!0),ko||B!==O){if(Ht.setValue(H,"projectionMatrix",O.projectionMatrix),Te.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),B!==O&&(B=O,qr=!0,Qs=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const bn=Ht.map.cameraPosition;bn!==void 0&&bn.setValue(H,q.setFromMatrixPosition(O.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",O.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||de.isSkinnedMesh)&&Ht.setValue(H,"viewMatrix",O.matrixWorldInverse)}if(de.isSkinnedMesh){Ht.setOptional(H,de,"bindMatrix"),Ht.setOptional(H,de,"bindMatrixInverse");const bn=de.skeleton;bn&&(Te.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(H,"boneTexture",bn.boneTexture,Qe),Ht.setValue(H,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pi=re.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0&&Te.isWebGL2===!0)&&be.update(de,re,ni),(qr||ut.receiveShadow!==de.receiveShadow)&&(ut.receiveShadow=de.receiveShadow,Ht.setValue(H,"receiveShadow",de.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Hi.envMap.value=et,Hi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),qr&&(Ht.setValue(H,"toneMappingExposure",p.toneMappingExposure),ut.needsLights&&Fo(Hi,Qs),Ve&&K.fog===!0&&jt.refreshFogUniforms(Hi,Ve),jt.refreshMaterialUniforms(Hi,K,$,fe,ve),Zu.upload(H,ut.uniformsList,Hi,Qe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zu.upload(H,ut.uniformsList,Hi,Qe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(H,"center",de.center),Ht.setValue(H,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(H,"normalMatrix",de.normalMatrix),Ht.setValue(H,"modelMatrix",de.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const bn=K.uniformsGroups;for(let Js=0,Cl=bn.length;Js<Cl;Js++)if(Te.isWebGL2){const Al=bn[Js];Ie.update(Al,ni),Ie.bind(Al,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Fo(O,Q){O.ambientLightColor.needsUpdate=Q,O.lightProbe.needsUpdate=Q,O.directionalLights.needsUpdate=Q,O.directionalLightShadows.needsUpdate=Q,O.pointLights.needsUpdate=Q,O.pointLightShadows.needsUpdate=Q,O.spotLights.needsUpdate=Q,O.spotLightShadows.needsUpdate=Q,O.rectAreaLights.needsUpdate=Q,O.hemisphereLights.needsUpdate=Q}function Yr(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(O,Q,re){Be.get(O.texture).__webglTexture=Q,Be.get(O.depthTexture).__webglTexture=re;const K=Be.get(O);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=re===void 0,K.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,Q){const re=Be.get(O);re.__webglFramebuffer=Q,re.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(O,Q=0,re=0){P=O,S=Q,L=re;let K=!0,de=null,Ve=!1,We=!1;if(O){const et=Be.get(O);et.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(H.FRAMEBUFFER,null),K=!1):et.__webglFramebuffer===void 0?Qe.setupRenderTarget(O):et.__hasExternalTextures&&Qe.rebindTextures(O,Be.get(O.texture).__webglTexture,Be.get(O.depthTexture).__webglTexture);const rt=O.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(We=!0);const nt=Be.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(de=nt[Q],Ve=!0):Te.isWebGL2&&O.samples>0&&Qe.useMultisampledRTT(O)===!1?de=Be.get(O).__webglMultisampledFramebuffer:de=nt,z.copy(O.viewport),R.copy(O.scissor),N=O.scissorTest}else z.copy(ue).multiplyScalar($).floor(),R.copy(pe).multiplyScalar($).floor(),N=X;if(Ge.bindFramebuffer(H.FRAMEBUFFER,de)&&Te.drawBuffers&&K&&Ge.drawBuffers(O,de),Ge.viewport(z),Ge.scissor(R),Ge.setScissorTest(N),Ve){const et=Be.get(O.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et.__webglTexture,re)}else if(We){const et=Be.get(O.texture),rt=Q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,et.__webglTexture,re||0,rt)}U=-1},this.readRenderTargetPixels=function(O,Q,re,K,de,Ve,We){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Be.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){Ge.bindFramebuffer(H.FRAMEBUFFER,je);try{const et=O.texture,rt=et.format,nt=et.type;if(rt!==bi&&ie.convert(rt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=nt===cl&&(He.has("EXT_color_buffer_half_float")||Te.isWebGL2&&He.has("EXT_color_buffer_float"));if(nt!==Ro&&ie.convert(nt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===_o&&(Te.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=O.width-K&&re>=0&&re<=O.height-de&&H.readPixels(Q,re,K,de,ie.convert(rt),ie.convert(nt),Ve)}finally{const et=P!==null?Be.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(O,Q,re=0){const K=Math.pow(2,-re),de=Math.floor(Q.image.width*K),Ve=Math.floor(Q.image.height*K);Qe.setTexture2D(Q,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,O.x,O.y,de,Ve),Ge.unbindTexture()},this.copyTextureToTexture=function(O,Q,re,K=0){const de=Q.image.width,Ve=Q.image.height,We=ie.convert(re.format),je=ie.convert(re.type);Qe.setTexture2D(re,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,re.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,re.unpackAlignment),Q.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,O.x,O.y,de,Ve,We,je,Q.image.data):Q.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,O.x,O.y,Q.mipmaps[0].width,Q.mipmaps[0].height,We,Q.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,K,O.x,O.y,We,je,Q.image),K===0&&re.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(O,Q,re,K,de=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=O.max.x-O.min.x+1,We=O.max.y-O.min.y+1,je=O.max.z-O.min.z+1,et=ie.convert(K.format),rt=ie.convert(K.type);let nt;if(K.isData3DTexture)Qe.setTexture3D(K,0),nt=H.TEXTURE_3D;else if(K.isDataArrayTexture)Qe.setTexture2DArray(K,0),nt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const ot=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),sn=H.getParameter(H.UNPACK_SKIP_PIXELS),Tn=H.getParameter(H.UNPACK_SKIP_ROWS),Li=H.getParameter(H.UNPACK_SKIP_IMAGES),Bt=re.isCompressedTexture?re.mipmaps[0]:re.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,O.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,O.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,O.min.z),re.isDataTexture||re.isData3DTexture?H.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,We,je,et,rt,Bt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,We,je,et,Bt.data)):H.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,We,je,et,rt,Bt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ot),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,sn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Li),de===0&&K.generateMipmaps&&H.generateMipmap(nt),Ge.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?Qe.setTextureCube(O,0):O.isData3DTexture?Qe.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Qe.setTexture2DArray(O,0):Qe.setTexture2D(O,0),Ge.unbindTexture()},this.resetState=function(){S=0,L=0,P=null,Ge.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?sr:qy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?it:Vi}}class _P extends hx{}_P.prototype.isWebGL1Renderer=!0;class px extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Us extends Pi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class zp extends Di{constructor(e=1,n=1,i=1,r=32,o=1,l=!1,a=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:a,thetaLength:d};const h=this;r=Math.floor(r),o=Math.floor(o);const v=[],g=[],_=[],y=[];let w=0;const A=[],T=i/2;let p=0;E(),l===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(v),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(_,3)),this.setAttribute("uv",new Ln(y,2));function E(){const L=new Y,P=new Y;let U=0;const B=(n-e)/i;for(let z=0;z<=o;z++){const R=[],N=z/o,ae=N*(n-e)+e;for(let fe=0;fe<=r;fe++){const $=fe/r,te=$*d+a,j=Math.sin(te),ue=Math.cos(te);P.x=ae*j,P.y=-N*i+T,P.z=ae*ue,g.push(P.x,P.y,P.z),L.set(j,B,ue).normalize(),_.push(L.x,L.y,L.z),y.push($,1-N),R.push(w++)}A.push(R)}for(let z=0;z<r;z++)for(let R=0;R<o;R++){const N=A[R][z],ae=A[R+1][z],fe=A[R+1][z+1],$=A[R][z+1];v.push(N,ae,$),v.push(ae,fe,$),U+=6}h.addGroup(p,U,0),p+=U}function S(L){const P=w,U=new Ne,B=new Y;let z=0;const R=L===!0?e:n,N=L===!0?1:-1;for(let fe=1;fe<=r;fe++)g.push(0,T*N,0),_.push(0,N,0),y.push(.5,.5),w++;const ae=w;for(let fe=0;fe<=r;fe++){const te=fe/r*d+a,j=Math.cos(te),ue=Math.sin(te);B.x=R*ue,B.y=T*N,B.z=R*j,g.push(B.x,B.y,B.z),_.push(0,N,0),U.x=j*.5+.5,U.y=ue*.5*N+.5,y.push(U.x,U.y),w++}for(let fe=0;fe<r;fe++){const $=P+fe,te=ae+fe;L===!0?v.push(te,te+1,$):v.push(te+1,te,$),z+=3}h.addGroup(p,z,L===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $c extends Di{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const d=Math.min(l+a,Math.PI);let h=0;const v=[],g=new Y,_=new Y,y=[],w=[],A=[],T=[];for(let p=0;p<=i;p++){const E=[],S=p/i;let L=0;p===0&&l===0?L=.5/n:p===i&&d===Math.PI&&(L=-.5/n);for(let P=0;P<=n;P++){const U=P/n;g.x=-e*Math.cos(r+U*o)*Math.sin(l+S*a),g.y=e*Math.cos(l+S*a),g.z=e*Math.sin(r+U*o)*Math.sin(l+S*a),w.push(g.x,g.y,g.z),_.copy(g).normalize(),A.push(_.x,_.y,_.z),T.push(U+L,1-S),E.push(h++)}v.push(E)}for(let p=0;p<i;p++)for(let E=0;E<n;E++){const S=v[p][E+1],L=v[p][E],P=v[p+1][E],U=v[p+1][E+1];(p!==0||l>0)&&y.push(S,L,U),(p!==i-1||d<Math.PI)&&y.push(L,P,U)}this.setIndex(y),this.setAttribute("position",new Ln(w,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yP extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i0 extends yP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ho extends jr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mx extends jr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class xP extends jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const r0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class SP{constructor(e,n,i){const r=this;let o=!1,l=0,a=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(v){a++,o===!1&&r.onStart!==void 0&&r.onStart(v,l,a),o=!0},this.itemEnd=function(v){l++,r.onProgress!==void 0&&r.onProgress(v,l,a),l===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(v){r.onError!==void 0&&r.onError(v)},this.resolveURL=function(v){return d?d(v):v},this.setURLModifier=function(v){return d=v,this},this.addHandler=function(v,g){return h.push(v,g),this},this.removeHandler=function(v){const g=h.indexOf(v);return g!==-1&&h.splice(g,2),this},this.getHandler=function(v){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],w=h[g+1];if(y.global&&(y.lastIndex=0),y.test(v))return w}return null}}}const MP=new SP;class vx{constructor(e){this.manager=e!==void 0?e:MP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class EP extends vx{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=r0.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(l),o.manager.itemEnd(e)},0),l;const a=fl("img");function d(){v(),r0.add(e,this),n&&n(this),o.manager.itemEnd(e)}function h(g){v(),r&&r(g),o.manager.itemError(e),o.manager.itemEnd(e)}function v(){a.removeEventListener("load",d,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",d,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class wP extends vx{constructor(e){super(e)}load(e,n,i,r){const o=new Wn,l=new EP(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class bl extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class TP extends bl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Rd=new Vt,o0=new Y,s0=new Y;class Bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;o0.setFromMatrixPosition(e.matrixWorld),n.position.copy(o0),s0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(s0),n.updateMatrixWorld(),Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bP extends Bp{constructor(){super(new Fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=wc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Dd extends bl{constructor(e,n,i=0,r=Math.PI/3,o=0,l=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new bP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const a0=new Vt,Ca=new Y,Ld=new Y;class CP extends Bp{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),Ld.copy(i.position),Ld.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ld),i.updateMatrixWorld(),r.makeTranslation(-Ca.x,-Ca.y,-Ca.z),a0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a0)}}class oo extends bl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new CP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AP extends Bp{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class PP extends bl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new AP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cs extends bl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class gx extends Di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class RP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=l0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=l0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function l0(){return(typeof performance>"u"?Date:performance).now()}class u0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(En(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);const c0={type:"change"},Id={type:"start"},f0={type:"end"};class DP extends Oo{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xo.ROTATE,MIDDLE:Xo.DOLLY,RIGHT:Xo.PAN},this.touches={ONE:Yo.ROTATE,TWO:Yo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Mt),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(c0),i.update(),o=r.NONE},this.update=function(){const G=new Y,he=new Do().setFromUnitVectors(e.up,new Y(0,1,0)),ie=he.clone().invert(),Ae=new Y,Ie=new Do,ze=2*Math.PI;return function(){const Fe=i.object.position;G.copy(Fe).sub(i.target),G.applyQuaternion(he),a.setFromVector3(G),i.autoRotate&&o===r.NONE&&R(B()),i.enableDamping?(a.theta+=d.theta*i.dampingFactor,a.phi+=d.phi*i.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let qe=i.minAzimuthAngle,Je=i.maxAzimuthAngle;return isFinite(qe)&&isFinite(Je)&&(qe<-Math.PI?qe+=ze:qe>Math.PI&&(qe-=ze),Je<-Math.PI?Je+=ze:Je>Math.PI&&(Je-=ze),qe<=Je?a.theta=Math.max(qe,Math.min(Je,a.theta)):a.theta=a.theta>(qe+Je)/2?Math.max(qe,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(v,i.dampingFactor):i.target.add(v),G.setFromSpherical(a),G.applyQuaternion(ie),Fe.copy(i.target).add(G),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,v.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),v.set(0,0,0)),h=1,g||Ae.distanceToSquared(i.object.position)>l||8*(1-Ie.dot(i.object.quaternion))>l?(i.dispatchEvent(c0),Ae.copy(i.object.position),Ie.copy(i.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",D),i.domElement.removeEventListener("pointerdown",Qe),i.domElement.removeEventListener("pointercancel",Tt),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Mt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,a=new u0,d=new u0;let h=1;const v=new Y;let g=!1;const _=new Ne,y=new Ne,w=new Ne,A=new Ne,T=new Ne,p=new Ne,E=new Ne,S=new Ne,L=new Ne,P=[],U={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function z(){return Math.pow(.95,i.zoomSpeed)}function R(G){d.theta-=G}function N(G){d.phi-=G}const ae=function(){const G=new Y;return function(ie,Ae){G.setFromMatrixColumn(Ae,0),G.multiplyScalar(-ie),v.add(G)}}(),fe=function(){const G=new Y;return function(ie,Ae){i.screenSpacePanning===!0?G.setFromMatrixColumn(Ae,1):(G.setFromMatrixColumn(Ae,0),G.crossVectors(i.object.up,G)),G.multiplyScalar(ie),v.add(G)}}(),$=function(){const G=new Y;return function(ie,Ae){const Ie=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;G.copy(ze).sub(i.target);let De=G.length();De*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*ie*De/Ie.clientHeight,i.object.matrix),fe(2*Ae*De/Ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(ie*(i.object.right-i.object.left)/i.object.zoom/Ie.clientWidth,i.object.matrix),fe(Ae*(i.object.top-i.object.bottom)/i.object.zoom/Ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(G){i.object.isPerspectiveCamera?h/=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*G)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(G){i.object.isPerspectiveCamera?h*=G:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/G)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(G){_.set(G.clientX,G.clientY)}function pe(G){E.set(G.clientX,G.clientY)}function X(G){A.set(G.clientX,G.clientY)}function J(G){y.set(G.clientX,G.clientY),w.subVectors(y,_).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*w.x/he.clientHeight),N(2*Math.PI*w.y/he.clientHeight),_.copy(y),i.update()}function ne(G){S.set(G.clientX,G.clientY),L.subVectors(S,E),L.y>0?te(z()):L.y<0&&j(z()),E.copy(S),i.update()}function we(G){T.set(G.clientX,G.clientY),p.subVectors(T,A).multiplyScalar(i.panSpeed),$(p.x,p.y),A.copy(T),i.update()}function ve(G){G.deltaY<0?j(z()):G.deltaY>0&&te(z()),i.update()}function oe(G){let he=!1;switch(G.code){case i.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),he=!0;break}he&&(G.preventDefault(),i.update())}function q(){if(P.length===1)_.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);_.set(G,he)}}function Me(){if(P.length===1)A.set(P[0].pageX,P[0].pageY);else{const G=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);A.set(G,he)}}function Ee(){const G=P[0].pageX-P[1].pageX,he=P[0].pageY-P[1].pageY,ie=Math.sqrt(G*G+he*he);E.set(0,ie)}function H(){i.enableZoom&&Ee(),i.enablePan&&Me()}function Ke(){i.enableZoom&&Ee(),i.enableRotate&&q()}function He(G){if(P.length==1)y.set(G.pageX,G.pageY);else{const ie=be(G),Ae=.5*(G.pageX+ie.x),Ie=.5*(G.pageY+ie.y);y.set(Ae,Ie)}w.subVectors(y,_).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*w.x/he.clientHeight),N(2*Math.PI*w.y/he.clientHeight),_.copy(y)}function Te(G){if(P.length===1)T.set(G.pageX,G.pageY);else{const he=be(G),ie=.5*(G.pageX+he.x),Ae=.5*(G.pageY+he.y);T.set(ie,Ae)}p.subVectors(T,A).multiplyScalar(i.panSpeed),$(p.x,p.y),A.copy(T)}function Ge(G){const he=be(G),ie=G.pageX-he.x,Ae=G.pageY-he.y,Ie=Math.sqrt(ie*ie+Ae*Ae);S.set(0,Ie),L.set(0,Math.pow(S.y/E.y,i.zoomSpeed)),te(L.y),E.copy(S)}function ht(G){i.enableZoom&&Ge(G),i.enablePan&&Te(G)}function Be(G){i.enableZoom&&Ge(G),i.enableRotate&&He(G)}function Qe(G){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(G.pointerId),i.domElement.addEventListener("pointermove",Ye),i.domElement.addEventListener("pointerup",Tt)),se(G),G.pointerType==="touch"?jt(G):Ot(G))}function Ye(G){i.enabled!==!1&&(G.pointerType==="touch"?F(G):gt(G))}function Tt(G){me(G),P.length===0&&(i.domElement.releasePointerCapture(G.pointerId),i.domElement.removeEventListener("pointermove",Ye),i.domElement.removeEventListener("pointerup",Tt)),i.dispatchEvent(f0),o=r.NONE}function Ot(G){let he;switch(G.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Xo.DOLLY:if(i.enableZoom===!1)return;pe(G),o=r.DOLLY;break;case Xo.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enablePan===!1)return;X(G),o=r.PAN}else{if(i.enableRotate===!1)return;ue(G),o=r.ROTATE}break;case Xo.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(i.enableRotate===!1)return;ue(G),o=r.ROTATE}else{if(i.enablePan===!1)return;X(G),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Id)}function gt(G){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;J(G);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(G);break;case r.PAN:if(i.enablePan===!1)return;we(G);break}}function lt(G){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(G.preventDefault(),i.dispatchEvent(Id),ve(G),i.dispatchEvent(f0))}function Mt(G){i.enabled===!1||i.enablePan===!1||oe(G)}function jt(G){switch(xe(G),P.length){case 1:switch(i.touches.ONE){case Yo.ROTATE:if(i.enableRotate===!1)return;q(),o=r.TOUCH_ROTATE;break;case Yo.PAN:if(i.enablePan===!1)return;Me(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Yo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(),o=r.TOUCH_DOLLY_PAN;break;case Yo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Id)}function F(G){switch(xe(G),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;He(G),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(G),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ht(G),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(G),i.update();break;default:o=r.NONE}}function D(G){i.enabled!==!1&&G.preventDefault()}function se(G){P.push(G)}function me(G){delete U[G.pointerId];for(let he=0;he<P.length;he++)if(P[he].pointerId==G.pointerId){P.splice(he,1);return}}function xe(G){let he=U[G.pointerId];he===void 0&&(he=new Ne,U[G.pointerId]=he),he.set(G.pageX,G.pageY)}function be(G){const he=G.pointerId===P[0].pointerId?P[1]:P[0];return U[he.pointerId]}i.domElement.addEventListener("contextmenu",D),i.domElement.addEventListener("pointerdown",Qe),i.domElement.addEventListener("pointercancel",Tt),i.domElement.addEventListener("wheel",lt,{passive:!1}),this.update()}}class Xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const LP=new Yc(-1,1,1,-1,0,1),Gp=new Di;Gp.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3));Gp.setAttribute("uv",new Ln([0,2,0,0,2,0],2));class Kc{constructor(e){this._mesh=new Bn(Gp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,LP)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const IP={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class UP extends Xr{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,o=i.aspect!==void 0?i.aspect:n.aspect,l=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new en(1,1,{minFilter:Qt,magFilter:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Gr,this.materialDepth.depthPacking=xl,this.materialDepth.blending=un;const d=IP,h=kn.clone(d.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=r,h.aspect.value=o,h.aperture.value=l,h.maxblur.value=a,h.nearClip.value=n.near,h.farClip.value=n.far,this.materialBokeh=new Lt({defines:Object.assign({},d.defines),uniforms:h,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new Kc(this.materialBokeh),this._oldClearColor=new Ze}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,n){this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Ha={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Nh extends Xr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kn.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Kc(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class d0 extends Xr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class OP extends Xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class NP{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ne);this._width=i.width,this._height=i.height,n=new en(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nh(Ha),this.clock=new RP}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const a=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}d0!==void 0&&(l instanceof d0?i=!0:l instanceof OP&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class FP extends Xr{constructor(e,n,i,r,o){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Nu={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ne(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Vt},cameraInverseProjectionMatrix:{value:new Vt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},Mr={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Ne(512,512)},sampleUvOffsets:{value:[new Ne(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},Tc={createSampleWeights:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(kP(i,e));return n},createSampleOffsets:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(e.clone().multiplyScalar(i));return n},configure:function(t,e,n,i){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=Tc.createSampleOffsets(e,i),t.uniforms.sampleWeights.value=Tc.createSampleWeights(e,n),t.needsUpdate=!0}};function kP(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Ud={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class Fh extends Xr{constructor(e,n,i=!1,r=!1,o=new Ne(256,256)){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Ze,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ne(o.x,o.y),this.saoRenderTarget=new en(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new en(this.resolution.x,this.resolution.y,{minFilter:Qt,magFilter:Qt}),this.depthRenderTarget=this.normalRenderTarget.clone();let l;this.supportsDepthTextureExtension&&(l=new dx,l.type=Op,this.beautyRenderTarget.depthTexture=l,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new Gr,this.depthMaterial.depthPacking=xl,this.depthMaterial.blending=un,this.normalMaterial=new mx,this.normalMaterial.blending=un,this.saoMaterial=new Lt({defines:Object.assign({},Nu.defines),fragmentShader:Nu.fragmentShader,vertexShader:Nu.vertexShader,uniforms:kn.clone(Nu.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=un,this.vBlurMaterial=new Lt({uniforms:kn.clone(Mr.uniforms),defines:Object.assign({},Mr.defines),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=un,this.hBlurMaterial=new Lt({uniforms:kn.clone(Mr.uniforms),defines:Object.assign({},Mr.defines),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=un,this.materialCopy=new Lt({uniforms:kn.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,blending:un}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Mc,this.materialCopy.blendSrc=jy,this.materialCopy.blendDst=Rh,this.materialCopy.blendEquation=Cr,this.materialCopy.blendSrcAlpha=Wy,this.materialCopy.blendDstAlpha=Rh,this.materialCopy.blendEquationAlpha=Cr,this.depthCopy=new Lt({uniforms:kn.clone(Ud.uniforms),vertexShader:Ud.vertexShader,fragmentShader:Ud.fragmentShader,blending:un}),this.fsQuad=new Kc(null)}render(e,n,i){if(this.renderToScreen&&(this.materialCopy.blending=un,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Tc.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(0,1)),Tc.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let l=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,l=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?l.blending=Mc:l.blending=un,this.renderPass(e,l,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}renderOverride(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,o=n.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}setSize(e,n){this.beautyRenderTarget.setSize(e,n),this.saoRenderTarget.setSize(e,n),this.blurIntermediateRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.depthRenderTarget.setSize(e,n),this.saoMaterial.uniforms.size.value.set(e,n),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,n),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,n),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}Fh.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const zP={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xs extends Xr{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new en(o,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new en(o,l);_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const y=new en(o,l);y.texture.name="UnrealBloomPass.v"+g,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),o=Math.round(o/2),l=Math.round(l/2)}const a=zP;this.highPassUniforms=kn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new Ne(o,l),o=Math.round(o/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const v=Ha;this.copyUniforms=kn.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:Ph,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new Eo,this.fsQuad=new Kc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Ne(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[d].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xs.BlurDirectionX=new Ne(1,0);Xs.BlurDirectionY=new Ne(0,1);const BP={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},GP={uniforms:{tDiffuse:{value:null},resolution:{value:new Ne}},vertexShader:`

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

		}`},VP=Math.PI/180;function HP(t){return t*VP}const _x=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],WP=["","knuthbendix","toddcoxeter"],xi=new Ze,Vp=new wP,Zs=Vp.load("Carbon.png");Zs.colorSpace=sr;Zs.wrapS=Po;Zs.wrapT=Po;Zs.repeat.x=10;Zs.repeat.y=10;const Hp=Vp.load("Carbon_Normal.png");Hp.wrapS=Po;Hp.wrapT=Po;const Wa=Vp.load("ocean.jpg");Wa.colorSpace=sr;Wa.mapping=Ec;const h0=[...new Array(10).keys()].map(t=>new RegExp(Ew(t),"g")),Lo={neon:{background:0,fx:["bloom"],shadow:!1,material:new Eo,lights:[],color:({word:t})=>xi.setHSL(t.length*.17%1,.5,.5)},colorful:{background:16777215,shadow:!1,material:new ho,lights:[new cs(16777215,1)],cameraLights:[new oo(16777215,.5)],color:({word:t},e,n)=>{var r;const i=((r=t.match(h0[n-1]))==null?void 0:r.length)||0;return xi.setHSL(i*.07%1,.5,.5)}},reflection:{background:16777215,shadow:!1,material:new ho,lights:[new cs(16777215,.25)],cameraLights:[new oo(16777215,.75)],color:({word:t},e,n)=>{const i=h0.map(l=>(t.match(l)||[]).length),r=Math.max(...i),o=i.indexOf(r)/n;return xi.setHSL(o%1,1,.8)}},projection:{background:16777215,ground:"sphere",shadow:!0,material:new ho({transparent:!0,opacity:.75,blending:Mc}),lights:[new oo],color:({word:t})=>xi.setHSL(t.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new ho,lights:[new cs(13421772,.4)],cameraLights:[new oo(16777215,1)],color:()=>xi.set(16776960)},pure:{background:0,fx:["sao"],shadow:!1,material:new xP,lights:[new cs(0,.5)],cameraLights:[new oo(16777215,1)],color:({word:t})=>xi.setHSL(t.length*.03%1,.75,.7)},glass:{extended:!0,background:Wa,env:Wa,shadow:!1,material:new i0({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new PP,new TP],color:()=>xi.set(11184810)},museum:{extended:!0,background:12303291,env:Wa,shadow:!0,ground:"plane",material:new i0({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:Zs,normalMap:Hp}),lights:[(()=>{const t=new Dd(16777215,.2);return t.position.set(0,4,-6),t})(),(()=>{const t=new Dd(16777215,.2);return t.position.set(8,7,0),t})(),(()=>{const t=new Dd(16777215,.2);return t.position.set(-4,6,2),t})(),new cs(16777215,.4)],cameraLights:[(()=>{const t=new oo(16777215,2.5,5,5);return t.shadow=null,t})()],color:()=>xi.set(16777215)},bokeh:{extended:!0,background:16777215,fx:["bokeh"],shadow:!1,material:new ho,lights:[new cs(16777215,.5)],cameraLights:[new oo(16777215,1)],color:({word:t})=>xi.setHSL(t.length*.17%1,.7,.5)},transcendent:{extended:!0,background:16777215,fx:["godray"],shadow:!1,material:new Eo,color:()=>xi.set(0)},wireframe:{extended:!0,background:0,shadow:!1,material:new Eo({wireframe:!0}),lights:[],color:({word:t})=>xi.setHSL(t.length*.17%1,.5,.5)}},bc={dimensions:4,coxeter:[[-1,5,2,2],[5,-1,3,2],[2,3,-1,4],[2,2,4,-1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],mirrors:[1,0,0,0],extended:!1,stellated:!1,order:10,segments:32,curve:!0,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,grouper:"",projection:"stereographic",controls:"orbit",controlsShift:0,ambiance:"neon",fov3:90,fov4:90,msaa:window.devicePixelRatio<=1,msaaSamples:8},yx=t=>{const e={...t};return Object.entries(e).forEach(([n,i])=>{typeof bc[n]=="number"?(i===""||isNaN(i))&&delete e[n]:Array.isArray(bc[n])&&(Array.isArray(i[0])?i.find(r=>r.find(o=>i===""||isNaN(o)))&&delete e[n]:i.find(r=>i===""||isNaN(r)&&!(n==="mirrors"&&"sh".includes(r)))&&(console.log("rem",n,i),delete e[n]))}),e},jP={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},XP={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new Y}},vertexShader:`

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

		}`},YP={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},qP={uniforms:{vSunPositionScreenSpace:{value:new Y},fAspect:{value:1},sunColor:{value:new Ze(16772608)},bgColor:{value:new Ze(0)}},vertexShader:`

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

		}`};class $P extends Xr{constructor(e,n,i={}){super(),this.scene=e,this.camera=n,this.orthoScene=new px,this.orthoCamera=new Yc(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new Dt,this.sunPosition=i.sunPosition||new Y(0,1e3,1e3),this.screenSpacePosition=new Y,this.rtTextureDepth=new en(1,1),this.rtTextureDepthMask=new en(1,1),this.rtTextureGodRays1=new en(1,1),this.rtTextureGodRays2=new en(1,1),this.materialDepth=new Gr;const r=jP;this.godrayMaskUniforms=kn.clone(r.uniforms),this.materialGodraysDepthMask=new Lt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=XP;this.godrayGenUniforms=kn.clone(o.uniforms),this.materialGodraysGenerate=new Lt({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const l=YP;this.godrayCombineUniforms=kn.clone(l.uniforms),this.materialGodraysCombine=new Lt({uniforms:this.godrayCombineUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader});const a=qP;this.godraysFakeSunUniforms=kn.clone(a.uniforms),this.materialGodraysFakeSun=new Lt({uniforms:this.godraysFakeSunUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Bn(new Tl(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,n,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=n,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,n,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(n),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,n){this.rtTextureDepth.setSize(e,n),this.rtTextureDepthMask.setSize(e,n);const i=e*this.multiplier,r=n*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var xx=`/* BEGIN HEADER */
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
}`,KP=`/* BEGIN INCLUDE */

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
/* END INCLUDE */`;const ZP=xx.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],p0=xx.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],QP=KP.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],ui=(t,e)=>{t=t.clone(),t.vertexColors=![Gr,Lt,mx,dl].find(n=>t instanceof n),t._rt=e,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let n=4;n<=e.dimensions;n++)t.uniforms[`fov${n}`]={value:90};return t.onBeforeCompile=n=>{const{dimensions:i,projection:r}=t._rt,o=[`#define DIMENSIONS ${i}`,`#define PROJECTION ${_x.indexOf(r)}`];Object.assign(n.uniforms,t.uniforms),t instanceof Eo?n.vertexShader=n.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof Gr||t instanceof dl?n.vertexShader=n.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof Lt&&(n.vertexShader=n.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",p0+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),n.vertexShader=[...o,ZP,QP,n.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",p0)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}`,t},JP=()=>{const t=new hx;t.autoClear=!1,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const e=new Fn(90,window.innerWidth/window.innerHeight,.01,100);e.position.set(0,0,-1),e.up.set(0,1,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const n=new px;e.updateProjectionMatrix(),n.add(e);const i=new DP(e,t.domElement);i.target.set(0,0,0),i.minDistance=0,i.maxDistance=100,i.addEventListener("change",()=>r.render()),i.update(),i.enabled=!1,t.domElement.addEventListener("dblclick",()=>{i.position0.set(0,0,i.position0.z===-1?-.25:-1,0,0),i.reset()});const r=new NP(t);r.setPixelRatio(window.devicePixelRatio);const o=new FP(n,e);return r.addPass(o),{composer:r,camera:e,scene:n,orbitControls:i}},m0=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=Lo[t.ambiance],{dimensions:i}=t,r=new $c(1,32,32),o=new gx().copy(r),l=i>4?9:i;o.setAttribute("instancePosition",new Us(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceTarget",new Us(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceColor",new Us(new Float32Array(t.maxVertices*3),3));const a=new Bn(o,ui(n.material,t));o.attributes.instanceTarget.array.fill(NaN),a.geometry.instanceCount=0,a.frustumCulled=!1,a.customDepthMaterial=ui(new Gr({depthPacking:xl}),t),a.customDistanceMaterial=ui(new dl,t),a.castShadow=n.shadow,a.name="instanced-vertex",a.visible=t.showVertices,t.scene.add(a)},v0=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=Lo[t.ambiance],{dimensions:i,curve:r,segments:o}=t,l=new zp(1,1,1,8,r?o:1,!0),a=new gx().copy(l),d=i>4?9:i;a.setAttribute("instancePosition",new Us(new Float32Array(t.maxEdges*d),d)),a.setAttribute("instanceTarget",new Us(new Float32Array(t.maxEdges*d),d)),a.setAttribute("instanceColor",new Us(new Float32Array(t.maxEdges*3),3));const h=new Bn(a,ui(n.material,t));h.geometry.instanceCount=0,h.frustumCulled=!1,h.customDepthMaterial=ui(new Gr({depthPacking:xl}),t),h.customDistanceMaterial=ui(new dl,t),h.castShadow=n.shadow,h.name="instanced-edge",h.visible=t.showEdges,t.scene.add(h)},eR=(t,e=null)=>{const n=Lo[t.ambiance],i=t.scene.getObjectByName("instanced-vertex"),{dimensions:r}=t;let o=e?e[0]:0,l=e?e[1]:t.vertices.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=t.vertices[d],v=i.geometry.attributes.instancePosition.array;for(let y=0;y<r;y++)v[d*a+y]=h.vertex[y];const g=i.geometry.attributes.instanceColor.array,_=n.color(h,"vertex",r);g[d*3+0]=_.r,g[d*3+1]=_.g,g[d*3+2]=_.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},tR=(t,e=null)=>{const n=Lo[t.ambiance],i=t.scene.getObjectByName("instanced-edge"),{dimensions:r}=t;let o=e?e[0]:0,l=e?e[1]:t.edges.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=t.edges[d],v=i.geometry.attributes.instancePosition.array;for(let w=0;w<r;w++)v[d*a+w]=h.start[w];const g=i.geometry.attributes.instanceTarget.array;for(let w=0;w<r;w++)g[d*a+w]=h.end[w];const _=i.geometry.attributes.instanceColor.array,y=n.color(h,"edge",r);_[d*3+0]=y.r,_[d*3+1]=y.g,_[d*3+2]=y.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},g0=(t,e)=>{const n=t.scene.getObjectByName(`instanced-${e}`);n.visible=t[e==="vertex"?"showVertices":"showEdges"]},ws=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const n=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]]};t.scene.getObjectByName("instanced-vertex").visible&&eR(t,n.vertices),t.scene.getObjectByName("instanced-edge").visible&&tR(t,n.edges),t.composer.render(),document.title=`Honeyball^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges`},nR=(t,e,n)=>{e.fov=n,e.updateProjectionMatrix(),t.render()},iR=(t,e,n)=>{const i=t.renderer.getDrawingBufferSize(new Ne),r=new en(i.width,i.height,{samples:e?n:0});t.reset(r),t.render()},rR=t=>{const e=Lo[t.ambiance],{scene:n,composer:i,camera:r}=t,o=t.scene.getObjectByName("instanced-vertex"),l=t.scene.getObjectByName("instanced-edge");o.material=ui(e.material,t),l.material=ui(e.material,t),e.env?n.environment=e.env:n.environment=null,typeof e.background!="number"?n.background=e.background:(n.background=null,i.renderer.setClearColor(new Ze(e.background),1));const a=[];n.traverse(g=>{g.isLight&&a.push(g)}),a.forEach(g=>{g.parent.remove(g)});let d=n.getObjectByName("ground");d&&(d.geometry.dispose(),d.material.dispose(),n.remove(d)),e.shadow&&(i.renderer.shadowMap.type=Up,e.ground==="sphere"?d=new Bn(new $c(20,32,32),new ho({color:16777215,side:Dn,depthWrite:!1})):e.ground==="plane"&&(d=new Bn(new Tl(1e3,1e3),new ho({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),d.rotation.x=-Math.PI/2,d.position.y=-3),d.name="ground",d.receiveShadow=!0,n.add(d)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=Gy,o.castShadow=e.shadow,l.castShadow=e.shadow;const h=e.shadow?g=>{g.shadow&&(g.castShadow=!0,g.shadow.mapSize.width=2048,g.shadow.mapSize.height=2048,g.shadow.camera.near=r.near,g.shadow.camera.far=r.far,g.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(g=>{h(g),n.add(g)}),(e.cameraLights||[]).forEach(g=>{h(g),r.add(g)});const v=e.fx||["copy"];i.renderer.toneMapping=v.includes("bloom")?Xy:Gi,i.renderer.toneMappingExposure=v.includes("bloom")?1.5:1,i.passes.slice(1).forEach(g=>{i.removePass(g),g.dispose()}),v.forEach(g=>{if(g==="copy")i.addPass(i.copyPass);else if(g==="sao"){const _=new Fh(n,r,!1,!0);_.depthMaterial=ui(_.depthMaterial,t),_.normalMaterial=ui(_.normalMaterial,t),_.params.output=Fh.OUTPUT.Default,_.params.saoBias=-.5,_.params.saoIntensity=.175,_.params.saoScale=10,_.params.saoKernelRadius=50,_.params.saoMinResolution=0,_.params.saoBlur=!0,_.params.saoBlurRadius=8,_.params.saoBlurStdDev=4,_.params.saoBlurDepthCutoff=.01,i.addPass(_)}else if(g==="bokeh"){const _=new UP(n,r,{focus:.5,aperture:.005,maxblur:.005});_.materialDepth=ui(_.materialDepth,t),i.addPass(_)}else if(g==="sobel"){const _=new Nh(BP);i.addPass(_);const y=new Nh(GP);y.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,y.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(y)}else if(g==="bloom"){const _=new Xs(new Ne(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(_)}else if(g==="godray"){const _=new $P(n,r);_.materialDepth=ui(_.materialDepth,t),i.addPass(_)}}),Sx(t),i.render()},Sx=t=>{const{composer:e,scene:n,dimensions:i,curvature:r,projection:o,vertexThickness:l,edgeThickness:a}=t,d=t.curve?t.segments:1,h=n.getObjectByName("instanced-vertex"),v=n.getObjectByName("instanced-edge"),g=_=>{if(_!=null&&_._rt){_.uniforms.curvature.value=r,_.uniforms.vertexThickness.value=l,_.uniforms.edgeThickness.value=a,_.needsUpdate=i!==_._rt.dimensions||o!==_._rt.projection,_._rt=t,_.uniforms.segments.value=d;for(let y=4;y<=i;y++)_.uniforms[`fov${y}`]||(_.uniforms[`fov${y}`]={value:1}),_.uniforms[`fov${y}`].value=xw(HP(t[`fov${y}`])*.5)}};g(h.material),g(v.material),e.passes.forEach(_=>Object.values(_).filter(y=>y==null?void 0:y.isMaterial).forEach(y=>g(y))),g(h.customDepthMaterial),g(h.customDistanceMaterial),g(v.customDepthMaterial),g(v.customDistanceMaterial)},co=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Ku(o,t,i)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];Ku(o,t,i),Ku(l,t,i)}},hl=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Qf(o,t)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];Qf(o,t),Qf(l,t)}},pl=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Jf(o,t,i)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];Jf(o,t,i),Jf(l,t,i)}},oR=(t,e,n,i,r,o)=>{const l=window.innerWidth/2,a=window.innerHeight/2,d=Math.min(l,a)*.9;if(t.ctrlKey)hl(-t.dx/(2*d),n,i),pl(-t.dy/(2*d),n,i,r);else{const h=-t.dx/l,v=-t.dy/a,g=new Array(e).fill(0);!o&&t.shiftKey?o=1:!o&&t.altKey?o=2:!o&&t.ctrKey?o=3:!o&&t.metaKey&&(o=4),g[o*2]=h,g[o*2+1]=v,co(g,n,i,r)}},sR=(t,e,n,i,r)=>{hl(ll*t.da/180,e,n),pl(t.ds,e,n,i)},aR=(t,e,n,i)=>{const{code:r}=t;if(t.target!==document.body)return;const o=.01;if(r==="ArrowLeft"||r==="KeyA")co([-o,0,0,0],e,n,i);else if(r==="ArrowRight"||r==="KeyD")co([o,0,0,0],e,n,i);else if(r==="ArrowUp"||r==="KeyW")co([0,0,-o,0],e,n,i);else if(r==="ArrowDown"||r==="KeyS")co([0,0,o,0],e,n,i);else if(r==="PageUp"||r==="KeyQ")co([0,-o,0,0],e,n,i);else if(r==="PageDown"||r==="KeyE")co([0,o,0,0],e,n,i);else if(r==="Digit1")hl(-(ll*5)/180,e,n);else if(r==="Digit3")hl(ll*5/180,e,n);else if(r==="KeyZ")pl(-o,e,n,i);else if(r==="KeyC")pl(o,e,n,i);else return;return!0},lR=(t,e,n,i,r)=>{const o=window.innerWidth/2,l=window.innerHeight/2,a=Math.min(o,l)*.9,d=10*(t.deltaMode===1?t.deltaY*10:t.deltaY)/a;t.shiftKey===!!r?hl(ll*d/180,e,n):pl(-d/100,e,n,i)},uR=t=>{at.useLayoutEffect(()=>{const e=_w(t.composer.renderer.domElement).draggable({listeners:{move:n=>{t.controls==="free"&&(oR(n,t.dimensions,t.vertices,t.edges,t.curvature,t.controlsShift),ws(t))}}}).gesturable({onmove:n=>{t.controls==="free"&&(sR(n,t.vertices,t.edges,t.curvature,t.controlsShift),ws(t))}});return()=>{e.unset()}},[t]),at.useEffect(()=>{const e=n=>{t.controls!=="orbit"&&(lR(n,t.vertices,t.edges,t.curvature,t.controlsShift),ws(t))};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e)},[t]),at.useEffect(()=>{const e=n=>{aR(n,t.vertices,t.edges,t.curvature,t.controlsShift)&&ws(t)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])};function cR(){return new Worker(""+new URL("knuthbendix-tiling.worker-adbad49f.js",import.meta.url).href)}function fR(){return new Worker(""+new URL("toddcoxeter-tiling.worker-474acfca.js",import.meta.url).href)}let _0=class Mx{constructor(e,n){this.workerClass=n,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=Mx.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((n,i)=>{const r=l=>{if(l.data.uuid!==e.uuid)return;const a=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${a}ms`),this.processing--,this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),l.data.error){i(l.data.error);return}n(l.data)},o=l=>{this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=Fy(0,this.processing),console.error(`Can't call web worker ${this.name}`,l))};this.worker.addEventListener("message",r),this.worker.addEventListener("error",o)})}};const dR=()=>Object.values(Ex).filter(t=>t.processing>0).forEach(t=>t.kill()),Ex={knuthbendix:new _0("knuthbendix",cR),toddcoxeter:new _0("toddcoxeter",fR)},hR=(t,e)=>{at.useEffect(()=>{e(n=>n.order<n.currentOrder?{...n,currentOrder:n.order}:n)},[t.order,t.currentOrder,e]),at.useEffect(()=>{e(n=>{const i=ww(n.coxeter,n.stellated?n.stellation:null),r=Tw(i),o=Aw(i,r),l=Pw(n.mirrors,o,r),a=n.grouper===""||n.grouper.startsWith("auto-")?r>0&&!n.stellated&&n.mirrors.every(d=>!isNaN(d))?"auto-toddcoxeter":"auto-knuthbendix":n.grouper;return{...n,currentOrder:0,grouper:a,vertices:[],edges:[],ranges:[],curvature:r,mirrorsPlanes:o,rootVertex:l}})},[t.dimensions,t.coxeter,t.mirrors,t.stellated,t.stellation,t.grouper,e]),at.useEffect(()=>{var n;if(!(t.order<=t.currentOrder)&&t.rootVertex){if((n=t.ranges)!=null&&n[t.order]){e(i=>({...i,currentOrder:i.order}));return}(async()=>{const i=Ex[t.grouper.replace(/^auto-/,"")];e(r=>({...r,processing:!0,error:null})),t.currentOrder===0&&dR();try{const{vertices:r,edges:o}=await i.process({order:t.currentOrder,coxeter:t.coxeter,curvature:t.curvature,stellated:t.stellated,stellation:t.stellation,mirrors:t.mirrors,mirrorsPlanes:t.mirrorsPlanes,rootVertex:t.rootVertex,dimensions:t.dimensions});e(l=>l.processing?{...l,ranges:[...l.ranges,{vertices:[l.vertices.length,l.vertices.length+r.length],edges:[l.edges.length,l.edges.length+o.length]}],vertices:l.vertices.concat(r),edges:l.edges.concat(o),currentOrder:l.currentOrder+1,processing:!1,error:null}:l)}catch(r){console.warn(r),e(o=>({...o,currentOrder:o.order,error:r.message,processing:!1}))}})()}},[e,t.order,t.currentOrder,t.curvature,t.mirrorsPlanes,t.rootVertex]),at.useEffect(()=>{e(n=>n.vertices.length>n.maxVertices?{...n,maxVertices:n.vertices.length}:n)},[t.vertices,e]),at.useEffect(()=>{e(n=>n.edges.length>n.maxEdges?{...n,maxEdges:n.edges.length}:n)},[t.edges,e])},pR=t=>{const{camera:e,composer:n}=t,i=1,r=window.innerWidth*i,o=window.innerHeight*i,l=n.renderer.domElement;if(l.width!==r||l.height!==o){e.aspect=r/o,e.zoom=Math.min(1,r/o),e.updateProjectionMatrix(),n.renderer.setSize(r,o),n.setSize(r,o);const a=n.renderer.getPixelRatio();n.setPixelRatio(a);const d=r*a,h=o*a;n.passes.forEach(v=>{var g,_;if((_=(g=v.material)==null?void 0:g.uniforms)!=null&&_.resolution){let y=d,w=h;v.material.uniforms.resolution.value.x<=1&&(y=1/y,w=1/w),v.material.uniforms.resolution.value.x=y,v.material.uniforms.resolution.value.y=w}v.resolution&&(v.resolution=new Ne(r,o))}),l.style.width=r+"px",l.style.height=o+"px"}n.render()},mR=t=>{at.useEffect(()=>{t.orbitControls.enabled=t.controls==="orbit"},[t.controls,t.orbitControls]),at.useEffect(()=>{iR(t.composer,t.msaa,t.msaaSamples)},[t.msaa,t.msaaSamples,t.composer]),at.useEffect(()=>{nR(t.composer,t.camera,t.fov3)},[t.fov3,t.camera,t.composer]),at.useEffect(()=>{m0(t),v0(t)},[t.dimensions,t.curve,t.segments]),at.useEffect(()=>{t.vertices.length&&(console.warn(`Extending vertex buffer to ${t.vertices.length}`),m0(t))},[t.maxVertices]),at.useEffect(()=>{t.edges.length&&(console.warn(`Extending edge buffer to ${t.edges.length}`),v0(t))},[t.maxEdges]),at.useEffect(()=>{rR(t)},[t.ambiance]),at.useEffect(()=>{Sx(t),t.composer.render()},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges]),at.useEffect(()=>{g0(t,"vertex"),g0(t,"edge")},[t.showVertices,t.showEdges]),at.useEffect(()=>{ws(t,t.currentOrder-1)},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges]),at.useEffect(()=>{ws(t)},[t.ambiance,t.showVertices,t.showEdges,t.maxVertices,t.maxEdges,t.curve,t.segments]),at.useEffect(()=>{const e=()=>{pR(t)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[t])};function y0(){return Ce.jsx("svg",{className:"coxeter-link",viewBox:"0 0 24 16",children:Ce.jsx("path",{d:"M 0 8 L 24 8",strokeWidth:"1",stroke:"currentColor"})})}const Od=6,Fu=14,x0={active:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("circle",{cx:"16",cy:"16",r:Fu}),Ce.jsx("circle",{cx:"16",cy:"16",r:Od,fill:"currentColor"})]}),inactive:Ce.jsx(Ce.Fragment,{children:Ce.jsx("circle",{cx:"16",cy:"16",r:Od,fill:"currentColor"})}),snub:Ce.jsx(Ce.Fragment,{children:Ce.jsx("circle",{cx:"16",cy:"16",r:Fu})}),holosnub:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("circle",{cx:"16",cy:"16",r:Fu}),Ce.jsx("circle",{cx:"16",cy:"16",r:Od})]}),custom:Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("circle",{cx:"16",cy:"16",r:Fu}),Ce.jsx("path",{d:"M 10 14 L 10 18 L 22 18 L 22 14"})]})};function vR({index:t,value:e,extended:n,onChange:i}){const r=e===0?"inactive":e===1?"active":e==="s"?"snub":e==="h"?"holosnub":"custom",o=()=>{const l=Object.keys(x0),a=l.indexOf(r),d=n?l[(a+1)%l.length]:r==="active"?"inactive":"active",h={active:1,inactive:0,snub:"s",holosnub:"h",custom:.5}[d];i(t,h)};return Ce.jsxs("div",{className:"coxeter-node",children:[Ce.jsx("svg",{className:`coxeter-graphic ${r}`,viewBox:"0 0 32 32",width:"1em",strokeWidth:"2",stroke:"currentColor",onClick:o,children:x0[r]}),r==="custom"&&Ce.jsx("input",{type:"number",value:e,min:"0",step:".1",onChange:l=>i(t,l.target.value)})]})}function gR({i:t,j:e,value:n,stellation:i,onChange:r}){return Ce.jsxs("div",{className:"coxeter-value"+(typeof i<"u"?" stellated":""),children:[Ce.jsx("input",{type:"number",name:`coxeter-${t}-${e}`,min:"2",step:"1",value:n,onChange:r}),typeof i<"u"&&Ce.jsxs("div",{children:[Ce.jsx("span",{className:"stellation-divisor",children:"/"}),Ce.jsx("input",{type:"number",className:"stellation",name:`stellation-${t}-${e}`,min:"1",step:"1",value:i,onChange:r})]})]})}function _R({gl:t,params:e,updateParams:n}){const[i,r]=at.useState(()=>({...e,...t,currentOrder:0,curvature:0,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],maxVertices:3e4,maxEdges:5e4,processing:!0,error:null}));window.rt=i;const[o,l]=at.useState(!0),a=at.useCallback(()=>l(y=>!y),[]),d=at.useCallback(()=>{let y,w;const A=Mw(e.dimensions/2)-1;e.controls==="orbit"?(y="free",w=0):e.controlsShift>=A?(y="orbit",w=0):(y="free",w=e.controlsShift+1),n({controls:y,controlsShift:w})},[e.controls,e.controlsShift,e.dimensions,n]);at.useEffect(()=>{r(y=>({...y,...yx({order:e.order,controls:e.controls,controlsShift:e.controlsShift,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,curve:e.curve,segments:e.segments,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellated:e.stellated,stellation:e.stellation})}))},[e.order,e.ambiance,e.controls,e.controlsShift,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.showEdges,e.showVertices,e.stellated,e.stellation,e.vertexThickness]),at.useEffect(()=>{r(y=>({...y,grouper:e.grouper}))},[e.grouper]),hR(i,r),mR(i),uR(i);const h=at.useCallback(()=>{const y={extended:!e.extended};if(!e.extended)for(let w=0;w<e.dimensions;w++)for(let A=0;A<w-1;A++)e.coxeter[w][A]=2,e.coxeter[A][w]=2;n(y)},[e.extended,e.dimensions,e.coxeter,n]),v=at.useCallback(()=>{n({stellated:!e.stellated})},[e.stellated,n]),g=at.useCallback(y=>{let{name:w,checked:A,type:T,value:p}=y.target;T==="checkbox"?p=A:T==="number"&&p&&!isNaN(p)&&(p=+p,y.target.min&&(p=Fy(p,+y.target.min)),y.target.max&&(p=Gv(p,+y.target.max)),y.target.step&&(p=Sw(p/+y.target.step)*+y.target.step));const E={};if(w==="dimensions"&&p){E.coxeter=new Array(p).fill().map(()=>new Array(p).fill(2)),E.stellation=new Array(p).fill().map(()=>new Array(p).fill(1)),E.mirrors=new Array(p).fill(0);for(let S=0;S<Gv(e.coxeter.length,p);S++){for(let L=0;L<S;L++)E.coxeter[S][L]=e.coxeter[S][L],E.coxeter[L][S]=e.coxeter[L][S];E.mirrors[S]=e.mirrors[S]}for(let S=0;S<p;S++)E.coxeter[S][S]=-1;for(let S=4;S<=p;S++)e[`fov${S}`]||(E[`fov${S}`]=S===4?90:45)}if(w.startsWith("coxeter")){const[S,L]=w.split("-").slice(1).map(U=>+U),P=e.coxeter.map(U=>U.slice());P[S][L]=p,P[L][S]=p,w="coxeter",p=P}if(w.startsWith("stellation")){const[S,L]=w.split("-").slice(1).map(U=>+U),P=e.stellation.map(U=>U.slice());P[S][L]=p,P[L][S]=p,w="stellation",p=P}E[w]=p,n(E)},[e,n]),_=at.useCallback((y,w)=>{const A=e.mirrors.slice();A[y]=w,n({mirrors:A})},[e.mirrors,n]);return Ce.jsxs("div",{className:i.error?"error":"",title:i.error,children:[Ce.jsxs("button",{className:"control-indicator",onClick:d,children:[i.controls==="orbit"?"⇹":"↭",i.controls==="free"?Ce.jsx("sup",{children:i.controlsShift+1}):null]}),Ce.jsxs("button",{className:`space-indicator${i.processing?" processing":""}`,onClick:a,children:[i.curvature===0?"𝔼":i.curvature>0?"𝕊":"ℍ",Ce.jsx("sup",{children:i.dimensions-1}),i.currentOrder<i.order?Ce.jsxs("sub",{children:[i.currentOrder,"/",i.order]}):null]}),o&&Ce.jsxs("aside",{className:"controls",children:[e.extended&&Ce.jsxs("label",{children:["Grouper",Ce.jsx("select",{name:"grouper",value:e.grouper,onChange:g,children:WP.map(y=>Ce.jsx("option",{value:y,children:y===""?e.grouper===""?`Auto [${i.grouper.replace(/^auto-/,"")}]`:"Auto":y.replace(/_/g," ").replace(/./,w=>w.toUpperCase())},y))})]}),(e.extended||i.grouper.replace(/^auto-/,"")==="knuthbendix"||i.curvature<=0)&&Ce.jsxs("label",{children:["Order",Ce.jsx("input",{type:"number",name:"order",min:"1",step:"1",value:e.order,onChange:g})]}),Ce.jsxs("label",{children:["Segments",Ce.jsx("input",{type:"checkbox",name:"curve",checked:e.curve,onChange:g}),e.curve?Ce.jsx("input",{type:"number",name:"segments",min:"1",step:"1",value:e.segments,onChange:g}):null]}),Ce.jsxs("label",{children:["Dimensions",Ce.jsx("input",{type:"number",name:"dimensions",min:"2",max:"9",step:"1",value:e.dimensions,onChange:g})]}),Ce.jsxs("label",{children:["Projection",Ce.jsx("select",{name:"projection",value:e.projection,onChange:g,children:_x.map(y=>Ce.jsx("option",{value:y,children:y.replace(/_/g," ").replace(/./,w=>w.toUpperCase())},y))})]}),Ce.jsxs("label",{children:["Vertices",Ce.jsx("input",{type:"checkbox",name:"showVertices",checked:e.showVertices,onChange:g}),e.showVertices?Ce.jsx("input",{type:"number",name:"vertexThickness",min:"0",step:"1",value:e.vertexThickness,onChange:g}):null]}),Ce.jsxs("label",{children:["Edges",Ce.jsx("input",{type:"checkbox",name:"showEdges",checked:e.showEdges,onChange:g}),e.showEdges?Ce.jsx("input",{type:"number",name:"edgeThickness",min:"0",step:"1",value:e.edgeThickness,onChange:g}):null]}),Ce.jsxs("label",{children:["Ambiance",Ce.jsx("select",{name:"ambiance",value:e.ambiance,onChange:g,children:(e.extended?Object.keys(Lo):Object.entries(Lo).filter(([y,{extended:w}])=>!w).map(([y])=>y)).map(y=>Ce.jsx("option",{value:y,children:y.replace(/_/g," ").replace(/./,w=>w.toUpperCase())},y))})]})]}),o&&Ce.jsxs("aside",{className:"view",children:[Ce.jsxs("label",{children:["MSAA",Ce.jsx("input",{type:"checkbox",name:"msaa",checked:e.msaa,onChange:g}),e.msaa?Ce.jsx("input",{type:"number",name:"msaaSamples",min:"0",step:"1",value:e.msaaSamples,onChange:g}):null]}),Ce.jsxs("label",{children:["FOV3",Ce.jsx("input",{type:"number",name:"fov3",min:"0",step:"1",value:e.fov3,onChange:g})]}),e.dimensions>3?[...Array(e.dimensions-3).keys()].map(y=>Ce.jsxs("label",{children:["FOV",y+4,Ce.jsx("input",{type:"number",name:`fov${y+4}`,step:"1",value:e[`fov${y+4}`],onChange:g})]},y)):null]}),o&&Ce.jsxs("aside",{className:"coxeters",children:[Ce.jsx("div",{className:"coxeter-matrix",children:[...Array(e.dimensions).keys()].map(y=>Ce.jsxs(at.Fragment,{children:[y>0&&Ce.jsx("div",{className:"coxeter-column",children:[...Array(y).keys()].map(w=>(e.extended||y===w+1)&&Ce.jsx(gR,{i:y,j:w,value:e.coxeter[y][w],stellation:e.stellated?e.stellation[y][w]:void 0,onChange:g},`${y}x${w}`))}),y>0&&Ce.jsx(y0,{}),Ce.jsx(vR,{index:y,value:e.mirrors[y],extended:e.extended,onChange:_}),y<e.dimensions-1&&Ce.jsx(y0,{})]},y))}),Ce.jsxs("div",{className:"coxeter-toggles",children:[Ce.jsx("button",{className:"button",onClick:v,title:"stellated",children:e.stellated?"⋇":"÷"}),Ce.jsx("button",{className:"button",onClick:h,title:"extended mode",children:e.extended?"▲":"▼"})]})]})]})}const wx=JP();Object.assign(window,wx);const S0=(t=null)=>{const{location:e}=window;if(e.hash)try{return JSON.parse(atob(e.hash.slice(1)))}catch(n){console.warn(n),e.hash=""}return t},yR=t=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(t)))},xR=()=>{const[t,e]=at.useState(S0(bc)),n=at.useCallback(()=>{const r=S0();r&&e(r)},[]),i=at.useCallback(r=>{const o={...t,...r};e(o),!(Object.keys(yx(o)).length<Object.keys(bc).length)&&yR(o)},[t]);return at.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),Ce.jsx(_R,{gl:wx,params:t,updateParams:i})};Nd.createRoot(document.getElementById("root")).render(Ce.jsx(xR,{}));
