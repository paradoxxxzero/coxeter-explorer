(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function OS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var He={},NS={get exports(){return He},set exports(t){He=t}},bc={},st={},US={get exports(){return st},set exports(t){st=t}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pl=Symbol.for("react.element"),kS=Symbol.for("react.portal"),zS=Symbol.for("react.fragment"),FS=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),VS=Symbol.for("react.provider"),GS=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),WS=Symbol.for("react.suspense"),jS=Symbol.for("react.memo"),XS=Symbol.for("react.lazy"),Lm=Symbol.iterator;function qS(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var g0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,x0={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||g0}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _0(){}_0.prototype=Hs.prototype;function zh(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||g0}var Fh=zh.prototype=new _0;Fh.constructor=zh;y0(Fh,Hs.prototype);Fh.isPureReactComponent=!0;var Im=Array.isArray,S0=Object.prototype.hasOwnProperty,Bh={current:null},M0={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)S0.call(e,i)&&!M0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var d=Array(a),h=0;h<a;h++)d[h]=arguments[h+2];r.children=d}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pl,type:t,key:o,ref:l,props:r,_owner:Bh.current}}function $S(t,e){return{$$typeof:pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===pl}function YS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Om=/\/+/g;function wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YS(""+t.key):e.toString(36)}function Uu(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case pl:case kS:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+wf(l,0):i,Im(r)?(n="",t!=null&&(n=t.replace(Om,"$&/")+"/"),Uu(r,e,n,"",function(h){return h})):r!=null&&(Vh(r)&&(r=$S(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Om,"$&/")+"/")+t)),e.push(r)),1;if(l=0,i=i===""?".":i+":",Im(t))for(var a=0;a<t.length;a++){o=t[a];var d=i+wf(o,a);l+=Uu(o,e,n,d,r)}else if(d=qS(t),typeof d=="function")for(t=d.call(t),a=0;!(o=t.next()).done;)o=o.value,d=i+wf(o,a++),l+=Uu(o,e,n,d,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Kl(t,e,n){if(t==null)return t;var i=[],r=0;return Uu(t,i,"","",function(o){return e.call(n,o,r++)}),i}function KS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var In={current:null},ku={transition:null},ZS={ReactCurrentDispatcher:In,ReactCurrentBatchConfig:ku,ReactCurrentOwner:Bh};ct.Children={map:Kl,forEach:function(t,e,n){Kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Kl(t,function(){e++}),e},toArray:function(t){return Kl(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Component=Hs;ct.Fragment=zS;ct.Profiler=BS;ct.PureComponent=zh;ct.StrictMode=FS;ct.Suspense=WS;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y0({},t.props),r=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)S0.call(e,d)&&!M0.hasOwnProperty(d)&&(i[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){a=Array(d);for(var h=0;h<d;h++)a[h]=arguments[h+2];i.children=a}return{$$typeof:pl,type:t.type,key:r,ref:o,props:i,_owner:l}};ct.createContext=function(t){return t={$$typeof:GS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VS,_context:t},t.Consumer=t};ct.createElement=w0;ct.createFactory=function(t){var e=w0.bind(null,t);return e.type=t,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:HS,render:t}};ct.isValidElement=Vh;ct.lazy=function(t){return{$$typeof:XS,_payload:{_status:-1,_result:t},_init:KS}};ct.memo=function(t,e){return{$$typeof:jS,type:t,compare:e===void 0?null:e}};ct.startTransition=function(t){var e=ku.transition;ku.transition={};try{t()}finally{ku.transition=e}};ct.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ct.useCallback=function(t,e){return In.current.useCallback(t,e)};ct.useContext=function(t){return In.current.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t){return In.current.useDeferredValue(t)};ct.useEffect=function(t,e){return In.current.useEffect(t,e)};ct.useId=function(){return In.current.useId()};ct.useImperativeHandle=function(t,e,n){return In.current.useImperativeHandle(t,e,n)};ct.useInsertionEffect=function(t,e){return In.current.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return In.current.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return In.current.useMemo(t,e)};ct.useReducer=function(t,e,n){return In.current.useReducer(t,e,n)};ct.useRef=function(t){return In.current.useRef(t)};ct.useState=function(t){return In.current.useState(t)};ct.useSyncExternalStore=function(t,e,n){return In.current.useSyncExternalStore(t,e,n)};ct.useTransition=function(){return In.current.useTransition()};ct.version="18.2.0";(function(t){t.exports=ct})(US);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=st,JS=Symbol.for("react.element"),eM=Symbol.for("react.fragment"),tM=Object.prototype.hasOwnProperty,nM=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iM={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var i,r={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)tM.call(e,i)&&!iM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:JS,type:t,key:o,ref:l,props:r,_owner:nM.current}}bc.Fragment=eM;bc.jsx=b0;bc.jsxs=b0;(function(t){t.exports=bc})(NS);var Id={},Od={},rM={get exports(){return Od},set exports(t){Od=t}},ei={},Nd={},oM={get exports(){return Nd},set exports(t){Nd=t}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,J){var re=j.length;j.push(J);e:for(;0<re;){var Te=re-1>>>1,ve=j[Te];if(0<r(ve,J))j[Te]=J,j[re]=ve,re=Te;else break e}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var J=j[0],re=j.pop();if(re!==J){j[0]=re;e:for(var Te=0,ve=j.length,oe=ve>>>1;Te<oe;){var q=2*(Te+1)-1,we=j[q],Me=q+1,te=j[Me];if(0>r(we,re))Me<ve&&0>r(te,we)?(j[Te]=te,j[Me]=re,Te=Me):(j[Te]=we,j[q]=re,Te=q);else if(Me<ve&&0>r(te,re))j[Te]=te,j[Me]=re,Te=Me;else break e}}return J}function r(j,J){var re=j.sortIndex-J.sortIndex;return re!==0?re:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],h=[],v=1,g=null,y=3,x=!1,E=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var J=n(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=j)i(h),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(h)}}function P(j){if(A=!1,b(j),!E)if(n(d)!==null)E=!0,fe(D);else{var J=n(h);J!==null&&me(P,J.startTime-j)}}function D(j,J){E=!1,A&&(A=!1,p(k),k=-1),x=!0;var re=y;try{for(b(J),g=n(d);g!==null&&(!(g.expirationTime>J)||j&&!se());){var Te=g.callback;if(typeof Te=="function"){g.callback=null,y=g.priorityLevel;var ve=Te(g.expirationTime<=J);J=t.unstable_now(),typeof ve=="function"?g.callback=ve:g===n(d)&&i(d),b(J)}else i(d);g=n(d)}if(g!==null)var oe=!0;else{var q=n(h);q!==null&&me(P,q.startTime-J),oe=!1}return oe}finally{g=null,y=re,x=!1}}var O=!1,B=null,k=-1,R=5,N=-1;function se(){return!(t.unstable_now()-N<R)}function ue(){if(B!==null){var j=t.unstable_now();N=j;var J=!0;try{J=B(!0,j)}finally{J?$():(O=!1,B=null)}}else O=!1}var $;if(typeof w=="function")$=function(){w(ue)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,W=Z.port2;Z.port1.onmessage=ue,$=function(){W.postMessage(null)}}else $=function(){_(ue,0)};function fe(j){B=j,O||(O=!0,$())}function me(j,J){k=_(function(){j(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){E||x||(E=!0,fe(D))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(j){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var re=y;y=J;try{return j()}finally{y=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var re=y;y=j;try{return J()}finally{y=re}},t.unstable_scheduleCallback=function(j,J,re){var Te=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Te+re:Te):re=Te,j){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=re+ve,j={id:v++,callback:J,priorityLevel:j,startTime:re,expirationTime:ve,sortIndex:-1},re>Te?(j.sortIndex=re,e(h,j),n(d)===null&&j===n(h)&&(A?(p(k),k=-1):A=!0,me(P,re-Te))):(j.sortIndex=ve,e(d,j),E||x||(E=!0,fe(D))),j},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(j){var J=y;return function(){var re=y;y=J;try{return j.apply(this,arguments)}finally{y=re}}}})(E0);(function(t){t.exports=E0})(oM);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=st,Jn=Nd;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,Ha={};function Po(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(Ha[t]=e,t=0;t<e.length;t++)C0.add(e[t])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,sM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},Um={};function aM(t){return Ud.call(Um,t)?!0:Ud.call(Nm,t)?!1:sM.test(t)?Um[t]=!0:(Nm[t]=!0,!1)}function lM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uM(t,e,n,i){if(e===null||typeof e>"u"||lM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function On(t,e,n,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gn[t]=new On(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gn[e]=new On(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gn[t]=new On(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gn[t]=new On(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gn[t]=new On(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gn[t]=new On(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gn[t]=new On(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gn[t]=new On(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gn[t]=new On(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gh,Hh);gn[e]=new On(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gh,Hh);gn[e]=new On(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gh,Hh);gn[e]=new On(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gn[t]=new On(t,1,!1,t.toLowerCase(),null,!1,!1)});gn.xlinkHref=new On("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gn[t]=new On(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uM(e,n,r,i)&&(n=null),i||r===null?aM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ur=T0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),km=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,bf;function Ta(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var Ef=!1;function Tf(t,e){if(!t||Ef)return"";Ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){i=h}t.call(e.prototype)}else{try{throw Error()}catch(h){i=h}t()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var d=`
`+r[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Ef=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ta(t):""}function cM(t){switch(t.tag){case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return t=Tf(t.type,!1),t;case 11:return t=Tf(t.type.render,!1),t;case 1:return t=Tf(t.type,!0),t;default:return""}}function Bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case kd:return"Profiler";case jh:return"StrictMode";case zd:return"Suspense";case Fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A0:return(t.displayName||"Context")+".Consumer";case P0:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}function fM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dM(t){var e=R0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ql(t){t._valueTracker||(t._valueTracker=dM(t))}function L0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=R0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vd(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I0(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function Gd(t,e){I0(t,e);var n=Ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hd(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hd(t,e,n){(e!=="number"||Ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Ca(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function O0(t,e){var n=Ur(e.value),i=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jl,U0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jl=Jl||document.createElement("div"),Jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hM=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(t){hM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),La[e]=La[t]})});function k0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||La.hasOwnProperty(t)&&La[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=k0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var pM=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xd(t,e){if(e){if(pM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yd=null,Ms=null,ws=null;function Gm(t){if(t=gl(t)){if(typeof Yd!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=Ac(e),Yd(t.stateNode,t.type,e))}}function F0(t){Ms?ws?ws.push(t):ws=[t]:Ms=t}function B0(){if(Ms){var t=Ms,e=ws;if(ws=Ms=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function V0(t,e){return t(e)}function G0(){}var Cf=!1;function H0(t,e,n){if(Cf)return t(e,n);Cf=!0;try{return V0(t,e,n)}finally{Cf=!1,(Ms!==null||ws!==null)&&(G0(),B0())}}function ja(t,e){var n=t.stateNode;if(n===null)return null;var i=Ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var Kd=!1;if(or)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Kd=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Kd=!1}function mM(t,e,n,i,r,o,l,a,d){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(v){this.onError(v)}}var Ia=!1,Zu=null,Qu=!1,Zd=null,vM={onError:function(t){Ia=!0,Zu=t}};function gM(t,e,n,i,r,o,l,a,d){Ia=!1,Zu=null,mM.apply(vM,arguments)}function yM(t,e,n,i,r,o,l,a,d){if(gM.apply(this,arguments),Ia){if(Ia){var h=Zu;Ia=!1,Zu=null}else throw Error(Se(198));Qu||(Qu=!0,Zd=h)}}function Ao(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(Ao(t)!==t)throw Error(Se(188))}function xM(t){var e=t.alternate;if(!e){if(e=Ao(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Hm(r),t;if(o===i)return Hm(r),e;o=o.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===n){l=!0,n=r,i=o;break}if(a===i){l=!0,i=r,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,i=r;break}if(a===i){l=!0,i=o,n=r;break}a=a.sibling}if(!l)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function j0(t){return t=xM(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var q0=Jn.unstable_scheduleCallback,Wm=Jn.unstable_cancelCallback,_M=Jn.unstable_shouldYield,SM=Jn.unstable_requestPaint,Wt=Jn.unstable_now,MM=Jn.unstable_getCurrentPriorityLevel,Yh=Jn.unstable_ImmediatePriority,$0=Jn.unstable_UserBlockingPriority,Ju=Jn.unstable_NormalPriority,wM=Jn.unstable_LowPriority,Y0=Jn.unstable_IdlePriority,Ec=null,Bi=null;function bM(t){if(Bi&&typeof Bi.onCommitFiberRoot=="function")try{Bi.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Ti=Math.clz32?Math.clz32:CM,EM=Math.log,TM=Math.LN2;function CM(t){return t>>>=0,t===0?32:31-(EM(t)/TM|0)|0}var eu=64,tu=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~r;a!==0?i=Pa(a):(o&=l,o!==0&&(i=Pa(o)))}else l=n&~r,l!==0?i=Pa(l):o!==0&&(i=Pa(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ti(e),r=1<<n,i|=t[n],e&=~r;return i}function PM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Ti(o),a=1<<l,d=r[l];d===-1?(!(a&n)||a&i)&&(r[l]=PM(a,e)):d<=e&&(t.expiredLanes|=a),o&=~a}}function Qd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K0(){var t=eu;return eu<<=1,!(eu&4194240)&&(eu=64),t}function Pf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ti(e),t[e]=n}function DM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ti(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function Z0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q0,Zh,J0,ey,ty,Jd=!1,nu=[],Pr=null,Ar=null,Dr=null,Xa=new Map,qa=new Map,wr=[],RM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function pa(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=gl(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function LM(t,e,n,i,r){switch(e){case"focusin":return Pr=pa(Pr,t,e,n,i,r),!0;case"dragenter":return Ar=pa(Ar,t,e,n,i,r),!0;case"mouseover":return Dr=pa(Dr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Xa.set(o,pa(Xa.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,qa.set(o,pa(qa.get(o)||null,t,e,n,i,r)),!0}return!1}function ny(t){var e=uo(t.target);if(e!==null){var n=Ao(e);if(n!==null){if(e=n.tag,e===13){if(e=W0(n),e!==null){t.blockedOn=e,ty(t.priority,function(){J0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$d=i,n.target.dispatchEvent(i),$d=null}else return e=gl(n),e!==null&&Zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Xm(t,e,n){zu(t)&&n.delete(e)}function IM(){Jd=!1,Pr!==null&&zu(Pr)&&(Pr=null),Ar!==null&&zu(Ar)&&(Ar=null),Dr!==null&&zu(Dr)&&(Dr=null),Xa.forEach(Xm),qa.forEach(Xm)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Jd||(Jd=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,IM)))}function $a(t){function e(r){return ma(r,t)}if(0<nu.length){ma(nu[0],t);for(var n=1;n<nu.length;n++){var i=nu[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pr!==null&&ma(Pr,t),Ar!==null&&ma(Ar,t),Dr!==null&&ma(Dr,t),Xa.forEach(e),qa.forEach(e),n=0;n<wr.length;n++)i=wr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)ny(n),n.blockedOn===null&&wr.shift()}var bs=ur.ReactCurrentBatchConfig,tc=!0;function OM(t,e,n,i){var r=xt,o=bs.transition;bs.transition=null;try{xt=1,Qh(t,e,n,i)}finally{xt=r,bs.transition=o}}function NM(t,e,n,i){var r=xt,o=bs.transition;bs.transition=null;try{xt=4,Qh(t,e,n,i)}finally{xt=r,bs.transition=o}}function Qh(t,e,n,i){if(tc){var r=eh(t,e,n,i);if(r===null)zf(t,e,i,nc,n),jm(t,i);else if(LM(r,t,e,n,i))i.stopPropagation();else if(jm(t,i),e&4&&-1<RM.indexOf(t)){for(;r!==null;){var o=gl(r);if(o!==null&&Q0(o),o=eh(t,e,n,i),o===null&&zf(t,e,i,nc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else zf(t,e,i,null,n)}}var nc=null;function eh(t,e,n,i){if(nc=null,t=$h(i),t=uo(t),t!==null)if(e=Ao(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function iy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MM()){case Yh:return 1;case $0:return 4;case Ju:case wM:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var Tr=null,Jh=null,Fu=null;function ry(){if(Fu)return Fu;var t,e=Jh,n=e.length,i,r="value"in Tr?Tr.value:Tr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===r[o-i];i++);return Fu=r.slice(t,1<i?1-i:void 0)}function Bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function iu(){return!0}function qm(){return!1}function ti(t){function e(n,i,r,o,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?iu:qm,this.isPropagationStopped=qm,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=ti(Ws),vl=Ft({},Ws,{view:0,detail:0}),UM=ti(vl),Af,Df,va,Tc=Ft({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Af=t.screenX-va.screenX,Df=t.screenY-va.screenY):Df=Af=0,va=t),Af)},movementY:function(t){return"movementY"in t?t.movementY:Df}}),$m=ti(Tc),kM=Ft({},Tc,{dataTransfer:0}),zM=ti(kM),FM=Ft({},vl,{relatedTarget:0}),Rf=ti(FM),BM=Ft({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),VM=ti(BM),GM=Ft({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HM=ti(GM),WM=Ft({},Ws,{data:0}),Ym=ti(WM),jM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $M(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qM[t])?!!e[t]:!1}function tp(){return $M}var YM=Ft({},vl,{key:function(t){if(t.key){var e=jM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KM=ti(YM),ZM=Ft({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=ti(ZM),QM=Ft({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),JM=ti(QM),e1=Ft({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=ti(e1),n1=Ft({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=ti(n1),r1=[9,13,27,32],np=or&&"CompositionEvent"in window,Oa=null;or&&"documentMode"in document&&(Oa=document.documentMode);var o1=or&&"TextEvent"in window&&!Oa,oy=or&&(!np||Oa&&8<Oa&&11>=Oa),Zm=String.fromCharCode(32),Qm=!1;function sy(t,e){switch(t){case"keyup":return r1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ay(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function s1(t,e){switch(t){case"compositionend":return ay(e);case"keypress":return e.which!==32?null:(Qm=!0,Zm);case"textInput":return t=e.data,t===Zm&&Qm?null:t;default:return null}}function a1(t,e){if(ls)return t==="compositionend"||!np&&sy(t,e)?(t=ry(),Fu=Jh=Tr=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oy&&e.locale!=="ko"?null:e.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l1[t.type]:e==="textarea"}function ly(t,e,n,i){F0(i),e=ic(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Na=null,Ya=null;function u1(t){xy(t,0)}function Cc(t){var e=fs(t);if(L0(e))return t}function c1(t,e){if(t==="change")return e}var uy=!1;if(or){var Lf;if(or){var If="oninput"in document;if(!If){var ev=document.createElement("div");ev.setAttribute("oninput","return;"),If=typeof ev.oninput=="function"}Lf=If}else Lf=!1;uy=Lf&&(!document.documentMode||9<document.documentMode)}function tv(){Na&&(Na.detachEvent("onpropertychange",cy),Ya=Na=null)}function cy(t){if(t.propertyName==="value"&&Cc(Ya)){var e=[];ly(e,Ya,t,$h(t)),H0(u1,e)}}function f1(t,e,n){t==="focusin"?(tv(),Na=e,Ya=n,Na.attachEvent("onpropertychange",cy)):t==="focusout"&&tv()}function d1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(Ya)}function h1(t,e){if(t==="click")return Cc(e)}function p1(t,e){if(t==="input"||t==="change")return Cc(e)}function m1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ai=typeof Object.is=="function"?Object.is:m1;function Ka(t,e){if(Ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ud.call(e,r)||!Ai(t[r],e[r]))return!1}return!0}function nv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iv(t,e){var n=nv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nv(n)}}function fy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dy(){for(var t=window,e=Ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ku(t.document)}return e}function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v1(t){var e=dy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fy(n.ownerDocument.documentElement,n)){if(i!==null&&ip(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=iv(n,o);var l=iv(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g1=or&&"documentMode"in document&&11>=document.documentMode,us=null,th=null,Ua=null,nh=!1;function rv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||us==null||us!==Ku(i)||(i=us,"selectionStart"in i&&ip(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ua&&Ka(Ua,i)||(Ua=i,i=ic(th,"onSelect"),0<i.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},Of={},hy={};or&&(hy=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Pc(t){if(Of[t])return Of[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hy)return Of[t]=e[n];return t}var py=Pc("animationend"),my=Pc("animationiteration"),vy=Pc("animationstart"),gy=Pc("transitionend"),yy=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){yy.set(t,e),Po(e,[t])}for(var Nf=0;Nf<ov.length;Nf++){var Uf=ov[Nf],y1=Uf.toLowerCase(),x1=Uf[0].toUpperCase()+Uf.slice(1);Br(y1,"on"+x1)}Br(py,"onAnimationEnd");Br(my,"onAnimationIteration");Br(vy,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(gy,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Po("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Po("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Po("onBeforeInput",["compositionend","keypress","textInput","paste"]);Po("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function sv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yM(i,e,void 0,t),t.currentTarget=null}function xy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var a=i[l],d=a.instance,h=a.currentTarget;if(a=a.listener,d!==o&&r.isPropagationStopped())break e;sv(r,a,h),o=d}else for(l=0;l<i.length;l++){if(a=i[l],d=a.instance,h=a.currentTarget,a=a.listener,d!==o&&r.isPropagationStopped())break e;sv(r,a,h),o=d}}}if(Qu)throw t=Zd,Qu=!1,Zd=null,t}function Dt(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var i=t+"__bubble";n.has(i)||(_y(e,t,2,!1),n.add(i))}function kf(t,e,n){var i=0;e&&(i|=4),_y(n,t,i,e)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[ou]){t[ou]=!0,C0.forEach(function(n){n!=="selectionchange"&&(_1.has(n)||kf(n,!1,t),kf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ou]||(e[ou]=!0,kf("selectionchange",!1,e))}}function _y(t,e,n,i){switch(iy(e)){case 1:var r=OM;break;case 4:r=NM;break;default:r=Qh}n=r.bind(null,e,n,t),r=void 0,!Kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;l=l.return}for(;a!==null;){if(l=uo(a),l===null)return;if(d=l.tag,d===5||d===6){i=o=l;continue e}a=a.parentNode}}i=i.return}H0(function(){var h=o,v=$h(n),g=[];e:{var y=yy.get(t);if(y!==void 0){var x=ep,E=t;switch(t){case"keypress":if(Bu(n)===0)break e;case"keydown":case"keyup":x=KM;break;case"focusin":E="focus",x=Rf;break;case"focusout":E="blur",x=Rf;break;case"beforeblur":case"afterblur":x=Rf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=zM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=JM;break;case py:case my:case vy:x=VM;break;case gy:x=t1;break;case"scroll":x=UM;break;case"wheel":x=i1;break;case"copy":case"cut":case"paste":x=HM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Km}var A=(e&4)!==0,_=!A&&t==="scroll",p=A?y!==null?y+"Capture":null:y;A=[];for(var w=h,b;w!==null;){b=w;var P=b.stateNode;if(b.tag===5&&P!==null&&(b=P,p!==null&&(P=ja(w,p),P!=null&&A.push(Qa(w,P,b)))),_)break;w=w.return}0<A.length&&(y=new x(y,E,null,n,v),g.push({event:y,listeners:A}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",y&&n!==$d&&(E=n.relatedTarget||n.fromElement)&&(uo(E)||E[sr]))break e;if((x||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=h,E=E?uo(E):null,E!==null&&(_=Ao(E),E!==_||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=h),x!==E)){if(A=$m,P="onMouseLeave",p="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(A=Km,P="onPointerLeave",p="onPointerEnter",w="pointer"),_=x==null?y:fs(x),b=E==null?y:fs(E),y=new A(P,w+"leave",x,n,v),y.target=_,y.relatedTarget=b,P=null,uo(v)===h&&(A=new A(p,w+"enter",E,n,v),A.target=b,A.relatedTarget=_,P=A),_=P,x&&E)t:{for(A=x,p=E,w=0,b=A;b;b=Bo(b))w++;for(b=0,P=p;P;P=Bo(P))b++;for(;0<w-b;)A=Bo(A),w--;for(;0<b-w;)p=Bo(p),b--;for(;w--;){if(A===p||p!==null&&A===p.alternate)break t;A=Bo(A),p=Bo(p)}A=null}else A=null;x!==null&&av(g,y,x,A,!1),E!==null&&_!==null&&av(g,_,E,A,!0)}}e:{if(y=h?fs(h):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var D=c1;else if(Jm(y))if(uy)D=p1;else{D=d1;var O=f1}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(D=h1);if(D&&(D=D(t,h))){ly(g,D,n,v);break e}O&&O(t,y,h),t==="focusout"&&(O=y._wrapperState)&&O.controlled&&y.type==="number"&&Hd(y,"number",y.value)}switch(O=h?fs(h):window,t){case"focusin":(Jm(O)||O.contentEditable==="true")&&(us=O,th=h,Ua=null);break;case"focusout":Ua=th=us=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,rv(g,n,v);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":rv(g,n,v)}var B;if(np)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ls?sy(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(oy&&n.locale!=="ko"&&(ls||k!=="onCompositionStart"?k==="onCompositionEnd"&&ls&&(B=ry()):(Tr=v,Jh="value"in Tr?Tr.value:Tr.textContent,ls=!0)),O=ic(h,k),0<O.length&&(k=new Ym(k,t,null,n,v),g.push({event:k,listeners:O}),B?k.data=B:(B=ay(n),B!==null&&(k.data=B)))),(B=o1?s1(t,n):a1(t,n))&&(h=ic(h,"onBeforeInput"),0<h.length&&(v=new Ym("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:h}),v.data=B))}xy(g,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ic(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ja(t,n),o!=null&&i.unshift(Qa(t,o,r)),o=ja(t,e),o!=null&&i.push(Qa(t,o,r))),t=t.return}return i}function Bo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function av(t,e,n,i,r){for(var o=e._reactName,l=[];n!==null&&n!==i;){var a=n,d=a.alternate,h=a.stateNode;if(d!==null&&d===i)break;a.tag===5&&h!==null&&(a=h,r?(d=ja(n,o),d!=null&&l.unshift(Qa(n,d,a))):r||(d=ja(n,o),d!=null&&l.push(Qa(n,d,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var S1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function lv(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(M1,"")}function su(t,e,n){if(e=lv(e),lv(t)!==e&&n)throw Error(Se(425))}function rc(){}var ih=null,rh=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sh=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,b1=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(t){return uv.resolve(null).then(t).catch(E1)}:sh;function E1(t){setTimeout(function(){throw t})}function Ff(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$a(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),Fi="__reactFiber$"+js,Ja="__reactProps$"+js,sr="__reactContainer$"+js,ah="__reactEvents$"+js,T1="__reactListeners$"+js,C1="__reactHandles$"+js;function uo(t){var e=t[Fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cv(t);t!==null;){if(n=t[Fi])return n;t=cv(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[Fi]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function Ac(t){return t[Ja]||null}var lh=[],ds=-1;function Vr(t){return{current:t}}function It(t){0>ds||(t.current=lh[ds],lh[ds]=null,ds--)}function Ct(t,e){ds++,lh[ds]=t.current,t.current=e}var kr={},bn=Vr(kr),Vn=Vr(!1),xo=kr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Gn(t){return t=t.childContextTypes,t!=null}function oc(){It(Vn),It(bn)}function fv(t,e,n){if(bn.current!==kr)throw Error(Se(168));Ct(bn,e),Ct(Vn,n)}function Sy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,fM(t)||"Unknown",r));return Ft({},n,i)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,xo=bn.current,Ct(bn,t),Ct(Vn,Vn.current),!0}function dv(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=Sy(t,e,xo),i.__reactInternalMemoizedMergedChildContext=t,It(Vn),It(bn),Ct(bn,t)):It(Vn),Ct(Vn,n)}var er=null,Dc=!1,Bf=!1;function My(t){er===null?er=[t]:er.push(t)}function P1(t){Dc=!0,My(t)}function Gr(){if(!Bf&&er!==null){Bf=!0;var t=0,e=xt;try{var n=er;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}er=null,Dc=!1}catch(r){throw er!==null&&(er=er.slice(t+1)),q0(Yh,Gr),r}finally{xt=e,Bf=!1}}return null}var hs=[],ps=0,ac=null,lc=0,ai=[],li=0,_o=null,nr=1,ir="";function io(t,e){hs[ps++]=lc,hs[ps++]=ac,ac=t,lc=e}function wy(t,e,n){ai[li++]=nr,ai[li++]=ir,ai[li++]=_o,_o=t;var i=nr;t=ir;var r=32-Ti(i)-1;i&=~(1<<r),n+=1;var o=32-Ti(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,nr=1<<32-Ti(e)+r|n<<r|i,ir=o+t}else nr=1<<o|n<<r|i,ir=t}function rp(t){t.return!==null&&(io(t,1),wy(t,1,0))}function op(t){for(;t===ac;)ac=hs[--ps],hs[ps]=null,lc=hs[--ps],hs[ps]=null;for(;t===_o;)_o=ai[--li],ai[li]=null,ir=ai[--li],ai[li]=null,nr=ai[--li],ai[li]=null}var Qn=null,Zn=null,Ot=!1,Mi=null;function by(t,e){var n=fi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_o!==null?{id:nr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,Zn=null,!0):!1;default:return!1}}function uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ch(t){if(Ot){var e=Zn;if(e){var n=e;if(!hv(t,e)){if(uh(t))throw Error(Se(418));e=Rr(n.nextSibling);var i=Qn;e&&hv(t,e)?by(i,n):(t.flags=t.flags&-4097|2,Ot=!1,Qn=t)}}else{if(uh(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Ot=!1,Qn=t}}}function pv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function au(t){if(t!==Qn)return!1;if(!Ot)return pv(t),Ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=Zn)){if(uh(t))throw Ey(),Error(Se(418));for(;e;)by(t,e),e=Rr(e.nextSibling)}if(pv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=Qn?Rr(t.stateNode.nextSibling):null;return!0}function Ey(){for(var t=Zn;t;)t=Rr(t.nextSibling)}function Is(){Zn=Qn=null,Ot=!1}function sp(t){Mi===null?Mi=[t]:Mi.push(t)}var A1=ur.ReactCurrentBatchConfig;function _i(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uc=Vr(null),cc=null,ms=null,ap=null;function lp(){ap=ms=cc=null}function up(t){var e=uc.current;It(uc),t._currentValue=e}function fh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){cc=t,ap=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fn=!0),t.firstContext=null)}function hi(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(cc===null)throw Error(Se(308));ms=t,cc.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var co=null;function cp(t){co===null?co=[t]:co.push(t)}function Ty(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ar(t,i)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ar(t,n)}return r=i.interleaved,r===null?(e.next=e,cp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ar(t,n)}function Vu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}function mv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fc(t,e,n,i){var r=t.updateQueue;Mr=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var d=a,h=d.next;d.next=null,l===null?o=h:l.next=h,l=d;var v=t.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=h:a.next=h,v.lastBaseUpdate=d))}if(o!==null){var g=r.baseState;l=0,v=h=d=null,a=o;do{var y=a.lane,x=a.eventTime;if((i&y)===y){v!==null&&(v=v.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,A=a;switch(y=e,x=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){g=E.call(x,g,y);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,y=typeof E=="function"?E.call(x,g,y):E,y==null)break e;g=Ft({},g,y);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,y=r.effects,y===null?r.effects=[a]:y.push(a))}else x={eventTime:x,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(h=v=x,d=g):v=v.next=x,l|=y;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;y=a,a=y.next,y.next=null,r.lastBaseUpdate=y,r.shared.pending=null}}while(1);if(v===null&&(d=g),r.baseState=d,r.firstBaseUpdate=h,r.lastBaseUpdate=v,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Mo|=l,t.lanes=l,t.memoizedState=g}}function vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var Py=new T0.Component().refs;function dh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rc={isMounted:function(t){return(t=t._reactInternals)?Ao(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Dn(),r=Or(t),o=rr(i,r);o.payload=e,n!=null&&(o.callback=n),e=Lr(t,o,r),e!==null&&(Ci(e,t,r,i),Vu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Dn(),r=Or(t),o=rr(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Lr(t,o,r),e!==null&&(Ci(e,t,r,i),Vu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dn(),i=Or(t),r=rr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Lr(t,r,i),e!==null&&(Ci(e,t,i,n),Vu(e,t,i))}};function gv(t,e,n,i,r,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Ka(n,i)||!Ka(r,o):!0}function Ay(t,e,n){var i=!1,r=kr,o=e.contextType;return typeof o=="object"&&o!==null?o=hi(o):(r=Gn(e)?xo:bn.current,i=e.contextTypes,o=(i=i!=null)?Ls(t,r):kr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function yv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rc.enqueueReplaceState(e,e.state,null)}function hh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Py,fp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=hi(o):(o=Gn(e)?xo:bn.current,r.context=Ls(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(dh(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rc.enqueueReplaceState(r,r.state,null),fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var a=r.refs;a===Py&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function lu(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xv(t){var e=t._init;return e(t._payload)}function Dy(t){function e(p,w){if(t){var b=p.deletions;b===null?(p.deletions=[w],p.flags|=16):b.push(w)}}function n(p,w){if(!t)return null;for(;w!==null;)e(p,w),w=w.sibling;return null}function i(p,w){for(p=new Map;w!==null;)w.key!==null?p.set(w.key,w):p.set(w.index,w),w=w.sibling;return p}function r(p,w){return p=Nr(p,w),p.index=0,p.sibling=null,p}function o(p,w,b){return p.index=b,t?(b=p.alternate,b!==null?(b=b.index,b<w?(p.flags|=2,w):b):(p.flags|=2,w)):(p.flags|=1048576,w)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,w,b,P){return w===null||w.tag!==6?(w=qf(b,p.mode,P),w.return=p,w):(w=r(w,b),w.return=p,w)}function d(p,w,b,P){var D=b.type;return D===as?v(p,w,b.props.children,P,b.key):w!==null&&(w.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&xv(D)===w.type)?(P=r(w,b.props),P.ref=ga(p,w,b),P.return=p,P):(P=qu(b.type,b.key,b.props,null,p.mode,P),P.ref=ga(p,w,b),P.return=p,P)}function h(p,w,b,P){return w===null||w.tag!==4||w.stateNode.containerInfo!==b.containerInfo||w.stateNode.implementation!==b.implementation?(w=$f(b,p.mode,P),w.return=p,w):(w=r(w,b.children||[]),w.return=p,w)}function v(p,w,b,P,D){return w===null||w.tag!==7?(w=vo(b,p.mode,P,D),w.return=p,w):(w=r(w,b),w.return=p,w)}function g(p,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return w=qf(""+w,p.mode,b),w.return=p,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Zl:return b=qu(w.type,w.key,w.props,null,p.mode,b),b.ref=ga(p,null,w),b.return=p,b;case ss:return w=$f(w,p.mode,b),w.return=p,w;case Sr:var P=w._init;return g(p,P(w._payload),b)}if(Ca(w)||da(w))return w=vo(w,p.mode,b,null),w.return=p,w;lu(p,w)}return null}function y(p,w,b,P){var D=w!==null?w.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return D!==null?null:a(p,w,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Zl:return b.key===D?d(p,w,b,P):null;case ss:return b.key===D?h(p,w,b,P):null;case Sr:return D=b._init,y(p,w,D(b._payload),P)}if(Ca(b)||da(b))return D!==null?null:v(p,w,b,P,null);lu(p,b)}return null}function x(p,w,b,P,D){if(typeof P=="string"&&P!==""||typeof P=="number")return p=p.get(b)||null,a(w,p,""+P,D);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Zl:return p=p.get(P.key===null?b:P.key)||null,d(w,p,P,D);case ss:return p=p.get(P.key===null?b:P.key)||null,h(w,p,P,D);case Sr:var O=P._init;return x(p,w,b,O(P._payload),D)}if(Ca(P)||da(P))return p=p.get(b)||null,v(w,p,P,D,null);lu(w,P)}return null}function E(p,w,b,P){for(var D=null,O=null,B=w,k=w=0,R=null;B!==null&&k<b.length;k++){B.index>k?(R=B,B=null):R=B.sibling;var N=y(p,B,b[k],P);if(N===null){B===null&&(B=R);break}t&&B&&N.alternate===null&&e(p,B),w=o(N,w,k),O===null?D=N:O.sibling=N,O=N,B=R}if(k===b.length)return n(p,B),Ot&&io(p,k),D;if(B===null){for(;k<b.length;k++)B=g(p,b[k],P),B!==null&&(w=o(B,w,k),O===null?D=B:O.sibling=B,O=B);return Ot&&io(p,k),D}for(B=i(p,B);k<b.length;k++)R=x(B,p,k,b[k],P),R!==null&&(t&&R.alternate!==null&&B.delete(R.key===null?k:R.key),w=o(R,w,k),O===null?D=R:O.sibling=R,O=R);return t&&B.forEach(function(se){return e(p,se)}),Ot&&io(p,k),D}function A(p,w,b,P){var D=da(b);if(typeof D!="function")throw Error(Se(150));if(b=D.call(b),b==null)throw Error(Se(151));for(var O=D=null,B=w,k=w=0,R=null,N=b.next();B!==null&&!N.done;k++,N=b.next()){B.index>k?(R=B,B=null):R=B.sibling;var se=y(p,B,N.value,P);if(se===null){B===null&&(B=R);break}t&&B&&se.alternate===null&&e(p,B),w=o(se,w,k),O===null?D=se:O.sibling=se,O=se,B=R}if(N.done)return n(p,B),Ot&&io(p,k),D;if(B===null){for(;!N.done;k++,N=b.next())N=g(p,N.value,P),N!==null&&(w=o(N,w,k),O===null?D=N:O.sibling=N,O=N);return Ot&&io(p,k),D}for(B=i(p,B);!N.done;k++,N=b.next())N=x(B,p,k,N.value,P),N!==null&&(t&&N.alternate!==null&&B.delete(N.key===null?k:N.key),w=o(N,w,k),O===null?D=N:O.sibling=N,O=N);return t&&B.forEach(function(ue){return e(p,ue)}),Ot&&io(p,k),D}function _(p,w,b,P){if(typeof b=="object"&&b!==null&&b.type===as&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Zl:e:{for(var D=b.key,O=w;O!==null;){if(O.key===D){if(D=b.type,D===as){if(O.tag===7){n(p,O.sibling),w=r(O,b.props.children),w.return=p,p=w;break e}}else if(O.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&xv(D)===O.type){n(p,O.sibling),w=r(O,b.props),w.ref=ga(p,O,b),w.return=p,p=w;break e}n(p,O);break}else e(p,O);O=O.sibling}b.type===as?(w=vo(b.props.children,p.mode,P,b.key),w.return=p,p=w):(P=qu(b.type,b.key,b.props,null,p.mode,P),P.ref=ga(p,w,b),P.return=p,p=P)}return l(p);case ss:e:{for(O=b.key;w!==null;){if(w.key===O)if(w.tag===4&&w.stateNode.containerInfo===b.containerInfo&&w.stateNode.implementation===b.implementation){n(p,w.sibling),w=r(w,b.children||[]),w.return=p,p=w;break e}else{n(p,w);break}else e(p,w);w=w.sibling}w=$f(b,p.mode,P),w.return=p,p=w}return l(p);case Sr:return O=b._init,_(p,w,O(b._payload),P)}if(Ca(b))return E(p,w,b,P);if(da(b))return A(p,w,b,P);lu(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,w!==null&&w.tag===6?(n(p,w.sibling),w=r(w,b),w.return=p,p=w):(n(p,w),w=qf(b,p.mode,P),w.return=p,p=w),l(p)):n(p,w)}return _}var Os=Dy(!0),Ry=Dy(!1),yl={},Vi=Vr(yl),el=Vr(yl),tl=Vr(yl);function fo(t){if(t===yl)throw Error(Se(174));return t}function dp(t,e){switch(Ct(tl,e),Ct(el,t),Ct(Vi,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jd(e,t)}It(Vi),Ct(Vi,e)}function Ns(){It(Vi),It(el),It(tl)}function Ly(t){fo(tl.current);var e=fo(Vi.current),n=jd(e,t.type);e!==n&&(Ct(el,t),Ct(Vi,n))}function hp(t){el.current===t&&(It(Vi),It(el))}var kt=Vr(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vf=[];function pp(){for(var t=0;t<Vf.length;t++)Vf[t]._workInProgressVersionPrimary=null;Vf.length=0}var Gu=ur.ReactCurrentDispatcher,Gf=ur.ReactCurrentBatchConfig,So=0,zt=null,Zt=null,cn=null,hc=!1,ka=!1,nl=0,D1=0;function yn(){throw Error(Se(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ai(t[n],e[n]))return!1;return!0}function vp(t,e,n,i,r,o){if(So=o,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gu.current=t===null||t.memoizedState===null?O1:N1,t=n(i,r),ka){o=0;do{if(ka=!1,nl=0,25<=o)throw Error(Se(301));o+=1,cn=Zt=null,e.updateQueue=null,Gu.current=U1,t=n(i,r)}while(ka)}if(Gu.current=pc,e=Zt!==null&&Zt.next!==null,So=0,cn=Zt=zt=null,hc=!1,e)throw Error(Se(300));return t}function gp(){var t=nl!==0;return nl=0,t}function Ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?zt.memoizedState=cn=t:cn=cn.next=t,cn}function pi(){if(Zt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var e=cn===null?zt.memoizedState:cn.next;if(e!==null)cn=e,Zt=t;else{if(t===null)throw Error(Se(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},cn===null?zt.memoizedState=cn=t:cn=cn.next=t}return cn}function il(t,e){return typeof e=="function"?e(t):e}function Hf(t){var e=pi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=Zt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,d=null,h=o;do{var v=h.lane;if((So&v)===v)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:t(i,h.action);else{var g={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(a=d=g,l=i):d=d.next=g,zt.lanes|=v,Mo|=v}h=h.next}while(h!==null&&h!==o);d===null?l=i:d.next=a,Ai(i,e.memoizedState)||(Fn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=d,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,zt.lanes|=o,Mo|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wf(t){var e=pi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do o=t(o,l.action),l=l.next;while(l!==r);Ai(o,e.memoizedState)||(Fn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Iy(){}function Oy(t,e){var n=zt,i=pi(),r=e(),o=!Ai(i.memoizedState,r);if(o&&(i.memoizedState=r,Fn=!0),i=i.queue,yp(ky.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||cn!==null&&cn.memoizedState.tag&1){if(n.flags|=2048,rl(9,Uy.bind(null,n,i,r,e),void 0,null),fn===null)throw Error(Se(349));So&30||Ny(n,e,r)}return r}function Ny(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Uy(t,e,n,i){e.value=n,e.getSnapshot=i,zy(e)&&Fy(t)}function ky(t,e,n){return n(function(){zy(e)&&Fy(t)})}function zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ai(t,n)}catch{return!0}}function Fy(t){var e=ar(t,1);e!==null&&Ci(e,t,1,-1)}function _v(t){var e=Ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=I1.bind(null,zt,t),[e.memoizedState,t]}function rl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function By(){return pi().memoizedState}function Hu(t,e,n,i){var r=Ui();zt.flags|=t,r.memoizedState=rl(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=pi();i=i===void 0?null:i;var o=void 0;if(Zt!==null){var l=Zt.memoizedState;if(o=l.destroy,i!==null&&mp(i,l.deps)){r.memoizedState=rl(e,n,o,i);return}}zt.flags|=t,r.memoizedState=rl(1|e,n,o,i)}function Sv(t,e){return Hu(8390656,8,t,e)}function yp(t,e){return Lc(2048,8,t,e)}function Vy(t,e){return Lc(4,2,t,e)}function Gy(t,e){return Lc(4,4,t,e)}function Hy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wy(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,Hy.bind(null,e,t),n)}function xp(){}function jy(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Xy(t,e){var n=pi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function qy(t,e,n){return So&21?(Ai(n,e)||(n=K0(),zt.lanes|=n,Mo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fn=!0),t.memoizedState=n)}function R1(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=Gf.transition;Gf.transition={};try{t(!1),e()}finally{xt=n,Gf.transition=i}}function $y(){return pi().memoizedState}function L1(t,e,n){var i=Or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Yy(t))Ky(e,n);else if(n=Ty(t,e,n,i),n!==null){var r=Dn();Ci(n,t,i,r),Zy(n,e,i)}}function I1(t,e,n){var i=Or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yy(t))Ky(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,a=o(l,n);if(r.hasEagerState=!0,r.eagerState=a,Ai(a,l)){var d=e.interleaved;d===null?(r.next=r,cp(e)):(r.next=d.next,d.next=r),e.interleaved=r;return}}catch{}finally{}n=Ty(t,e,r,i),n!==null&&(r=Dn(),Ci(n,t,i,r),Zy(n,e,i))}}function Yy(t){var e=t.alternate;return t===zt||e!==null&&e===zt}function Ky(t,e){ka=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kh(t,n)}}var pc={readContext:hi,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},O1={readContext:hi,useCallback:function(t,e){return Ui().memoizedState=[t,e===void 0?null:e],t},useContext:hi,useEffect:Sv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4194308,4,Hy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hu(4,2,t,e)},useMemo:function(t,e){var n=Ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L1.bind(null,zt,t),[i.memoizedState,t]},useRef:function(t){var e=Ui();return t={current:t},e.memoizedState=t},useState:_v,useDebugValue:xp,useDeferredValue:function(t){return Ui().memoizedState=t},useTransition:function(){var t=_v(!1),e=t[0];return t=R1.bind(null,t[1]),Ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=zt,r=Ui();if(Ot){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),fn===null)throw Error(Se(349));So&30||Ny(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Sv(ky.bind(null,i,o,t),[t]),i.flags|=2048,rl(9,Uy.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Ui(),e=fn.identifierPrefix;if(Ot){var n=ir,i=nr;n=(i&~(1<<32-Ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=nl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},N1={readContext:hi,useCallback:jy,useContext:hi,useEffect:yp,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:Gy,useMemo:Xy,useReducer:Hf,useRef:By,useState:function(){return Hf(il)},useDebugValue:xp,useDeferredValue:function(t){var e=pi();return qy(e,Zt.memoizedState,t)},useTransition:function(){var t=Hf(il)[0],e=pi().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Oy,useId:$y,unstable_isNewReconciler:!1},U1={readContext:hi,useCallback:jy,useContext:hi,useEffect:yp,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:Gy,useMemo:Xy,useReducer:Wf,useRef:By,useState:function(){return Wf(il)},useDebugValue:xp,useDeferredValue:function(t){var e=pi();return Zt===null?e.memoizedState=t:qy(e,Zt.memoizedState,t)},useTransition:function(){var t=Wf(il)[0],e=pi().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Oy,useId:$y,unstable_isNewReconciler:!1};function Us(t,e){try{var n="",i=e;do n+=cM(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function jf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function Qy(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vc||(vc=!0,bh=i),ph(t,e)},n}function Jy(t,e,n){n=rr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ph(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof i!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Mv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new k1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Z1.bind(null,t,e,n),e.then(t,t))}function wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var z1=ur.ReactCurrentOwner,Fn=!1;function An(t,e,n,i){e.child=t===null?Ry(e,null,n,i):Os(e,t.child,n,i)}function Ev(t,e,n,i,r){n=n.render;var o=e.ref;return Es(e,r),i=vp(t,e,n,i,o,r),n=gp(),t!==null&&!Fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,lr(t,e,r)):(Ot&&n&&rp(e),e.flags|=1,An(t,e,i,r),e.child)}function Tv(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Cp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,ex(t,e,o,i,r)):(t=qu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(l,i)&&t.ref===e.ref)return lr(t,e,r)}return e.flags|=1,t=Nr(o,i),t.ref=e.ref,t.return=e,e.child=t}function ex(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ka(o,i)&&t.ref===e.ref)if(Fn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Fn=!0);else return e.lanes=t.lanes,lr(t,e,r)}return mh(t,e,n,i,r)}function tx(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(gs,Kn),Kn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ct(gs,Kn),Kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ct(gs,Kn),Kn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ct(gs,Kn),Kn|=i;return An(t,e,r,n),e.child}function nx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,i,r){var o=Gn(n)?xo:bn.current;return o=Ls(e,o),Es(e,r),n=vp(t,e,n,i,o,r),i=gp(),t!==null&&!Fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,lr(t,e,r)):(Ot&&i&&rp(e),e.flags|=1,An(t,e,n,r),e.child)}function Cv(t,e,n,i,r){if(Gn(n)){var o=!0;sc(e)}else o=!1;if(Es(e,r),e.stateNode===null)Wu(t,e),Ay(e,n,i),hh(e,n,i,r),i=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=hi(h):(h=Gn(n)?xo:bn.current,h=Ls(e,h));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||d!==h)&&yv(e,l,i,h),Mr=!1;var y=e.memoizedState;l.state=y,fc(e,i,l,r),d=e.memoizedState,a!==i||y!==d||Vn.current||Mr?(typeof v=="function"&&(dh(e,n,v,i),d=e.memoizedState),(a=Mr||gv(e,n,a,i,y,d,h))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),l.props=i,l.state=d,l.context=h,i=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Cy(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:_i(e.type,a),l.props=h,g=e.pendingProps,y=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=hi(d):(d=Gn(n)?xo:bn.current,d=Ls(e,d));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||y!==d)&&yv(e,l,i,d),Mr=!1,y=e.memoizedState,l.state=y,fc(e,i,l,r);var E=e.memoizedState;a!==g||y!==E||Vn.current||Mr?(typeof x=="function"&&(dh(e,n,x,i),E=e.memoizedState),(h=Mr||gv(e,n,h,i,y,E,d)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,E,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,E,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),l.props=i,l.state=E,l.context=d,i=h):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),i=!1)}return vh(t,e,n,i,o,r)}function vh(t,e,n,i,r,o){nx(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&dv(e,n,!1),lr(t,e,o);i=e.stateNode,z1.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=Os(e,t.child,null,o),e.child=Os(e,null,a,o)):An(t,e,a,o),e.memoizedState=i.state,r&&dv(e,n,!0),e.child}function ix(t){var e=t.stateNode;e.pendingContext?fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fv(t,e.context,!1),dp(t,e.containerInfo)}function Pv(t,e,n,i,r){return Is(),sp(r),e.flags|=256,An(t,e,n,i),e.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function rx(t,e,n){var i=e.pendingProps,r=kt.current,o=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ct(kt,r&1),t===null)return ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Nc(l,i,0,null),t=vo(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=yh(n),e.memoizedState=gh,t):_p(e,l));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return F1(t,e,l,i,a,r,n);if(o){o=i.fallback,l=e.mode,r=t.child,a=r.sibling;var d={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=d,e.deletions=null):(i=Nr(r,d),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Nr(a,o):(o=vo(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?yh(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=gh,i}return o=t.child,t=o.sibling,i=Nr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _p(t,e){return e=Nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uu(t,e,n,i){return i!==null&&sp(i),Os(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function F1(t,e,n,i,r,o,l){if(n)return e.flags&256?(e.flags&=-257,i=jf(Error(Se(422))),uu(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),o=vo(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Os(e,t.child,null,l),e.child.memoizedState=yh(l),e.memoizedState=gh,o);if(!(e.mode&1))return uu(t,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Se(419)),i=jf(o,i,void 0),uu(t,e,l,i)}if(a=(l&t.childLanes)!==0,Fn||a){if(i=fn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ar(t,r),Ci(i,t,r,-1))}return Tp(),i=jf(Error(Se(421))),uu(t,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Q1.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Zn=Rr(r.nextSibling),Qn=e,Ot=!0,Mi=null,t!==null&&(ai[li++]=nr,ai[li++]=ir,ai[li++]=_o,nr=t.id,ir=t.overflow,_o=e),e=_p(e,i.children),e.flags|=4096,e)}function Av(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fh(t.return,e,n)}function Xf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function ox(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(An(t,e,i.children,n),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Av(t,n,e);else if(t.tag===19)Av(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ct(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xf(e,!0,n,null,o);break;case"together":Xf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function B1(t,e,n){switch(e.tag){case 3:ix(e),Is();break;case 5:Ly(e);break;case 1:Gn(e.type)&&sc(e);break;case 4:dp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(uc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(kt,kt.current&1),e.flags|=128,null):n&e.child.childLanes?rx(t,e,n):(Ct(kt,kt.current&1),t=lr(t,e,n),t!==null?t.sibling:null);Ct(kt,kt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ox(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,tx(t,e,n)}return lr(t,e,n)}var sx,xh,ax,lx;sx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};ax=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,fo(Vi.current);var o=null;switch(n){case"input":r=Vd(t,r),i=Vd(t,i),o=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),o=[];break;case"textarea":r=Wd(t,r),i=Wd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rc)}Xd(n,i);var l;n=null;for(h in r)if(!i.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var a=r[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ha.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var d=i[h];if(a=r!=null?r[h]:void 0,i.hasOwnProperty(h)&&d!==a&&(d!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Dt("scroll",t),o||a===d||(o=[])):(o=o||[]).push(h,d))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};lx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ya(t,e){if(!Ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function xn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function V1(t,e,n){var i=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return Gn(e.type)&&oc(),xn(e),null;case 3:return i=e.stateNode,Ns(),It(Vn),It(bn),pp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(Ch(Mi),Mi=null))),xh(t,e),xn(e),null;case 5:hp(e);var r=fo(tl.current);if(n=e.type,t!==null&&e.stateNode!=null)ax(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return xn(e),null}if(t=fo(Vi.current),au(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Fi]=e,i[Ja]=o,t=(e.mode&1)!==0,n){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)Dt(Aa[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":zm(i,o),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Dt("invalid",i);break;case"textarea":Bm(i,o),Dt("invalid",i)}Xd(n,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&su(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&su(i.textContent,a,t),r=["children",""+a]):Ha.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Dt("scroll",i)}switch(n){case"input":Ql(i),Fm(i,o,!0);break;case"textarea":Ql(i),Vm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Fi]=e,t[Ja]=i,sx(t,e,!1,!1),e.stateNode=t;e:{switch(l=qd(n,i),n){case"dialog":Dt("cancel",t),Dt("close",t),r=i;break;case"iframe":case"object":case"embed":Dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)Dt(Aa[r],t);r=i;break;case"source":Dt("error",t),r=i;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),r=i;break;case"details":Dt("toggle",t),r=i;break;case"input":zm(t,i),r=Vd(t,i),Dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),Dt("invalid",t);break;case"textarea":Bm(t,i),r=Wd(t,i),Dt("invalid",t);break;default:r=i}Xd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?z0(t,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&U0(t,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Wa(t,d):typeof d=="number"&&Wa(t,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ha.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Dt("scroll",t):d!=null&&Wh(t,o,d,l))}switch(n){case"input":Ql(t),Fm(t,i,!1);break;case"textarea":Ql(t),Vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ur(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ss(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(t&&e.stateNode!=null)lx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=fo(tl.current),fo(Vi.current),au(e)){if(i=e.stateNode,n=e.memoizedProps,i[Fi]=e,(o=i.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:su(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&su(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Fi]=e,e.stateNode=i}return xn(e),null;case 13:if(It(kt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Zn!==null&&e.mode&1&&!(e.flags&128))Ey(),Is(),e.flags|=98560,o=!1;else if(o=au(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[Fi]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),o=!1}else Mi!==null&&(Ch(Mi),Mi=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||kt.current&1?Jt===0&&(Jt=3):Tp())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Ns(),xh(t,e),t===null&&Za(e.stateNode.containerInfo),xn(e),null;case 10:return up(e.type._context),xn(e),null;case 17:return Gn(e.type)&&oc(),xn(e),null;case 19:if(It(kt),o=e.memoizedState,o===null)return xn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)ya(o,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=dc(t),l!==null){for(e.flags|=128,ya(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ct(kt,kt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Wt()>ks&&(e.flags|=128,i=!0,ya(o,!1),e.lanes=4194304)}else{if(!i)if(t=dc(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ot)return xn(e),null}else 2*Wt()-o.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,i=!0,ya(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wt(),e.sibling=null,n=kt.current,Ct(kt,i?n&1|2:n&1),e):(xn(e),null);case 22:case 23:return Ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function G1(t,e){switch(op(e),e.tag){case 1:return Gn(e.type)&&oc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),It(Vn),It(bn),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(It(kt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(kt),null;case 4:return Ns(),null;case 10:return up(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var cu=!1,Mn=!1,H1=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Vt(t,e,i)}else n.current=null}function _h(t,e,n){try{n()}catch(i){Vt(t,e,i)}}var Dv=!1;function W1(t,e){if(ih=tc,t=dy(),ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,h=0,v=0,g=t,y=null;t:for(;;){for(var x;g!==n||r!==0&&g.nodeType!==3||(a=l+r),g!==o||i!==0&&g.nodeType!==3||(d=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)y=g,g=x;for(;;){if(g===t)break t;if(y===n&&++h===r&&(a=l),y===o&&++v===i&&(d=l),(x=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=x}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:t,selectionRange:n},tc=!1,Ie=e;Ie!==null;)if(e=Ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ie=t;else for(;Ie!==null;){e=Ie;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,_=E.memoizedState,p=e.stateNode,w=p.getSnapshotBeforeUpdate(e.elementType===e.type?A:_i(e.type,A),_);p.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(P){Vt(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}return E=Dv,Dv=!1,E}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&_h(e,n,o)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ux(t){var e=t.alternate;e!==null&&(t.alternate=null,ux(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fi],delete e[Ja],delete e[ah],delete e[T1],delete e[C1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cx(t){return t.tag===5||t.tag===3||t.tag===4}function Rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(i!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function wh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}var mn=null,Si=!1;function mr(t,e,n){for(n=n.child;n!==null;)fx(t,e,n),n=n.sibling}function fx(t,e,n){if(Bi&&typeof Bi.onCommitFiberUnmount=="function")try{Bi.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:Mn||vs(n,e);case 6:var i=mn,r=Si;mn=null,mr(t,e,n),mn=i,Si=r,mn!==null&&(Si?(t=mn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mn.removeChild(n.stateNode));break;case 18:mn!==null&&(Si?(t=mn,n=n.stateNode,t.nodeType===8?Ff(t.parentNode,n):t.nodeType===1&&Ff(t,n),$a(t)):Ff(mn,n.stateNode));break;case 4:i=mn,r=Si,mn=n.stateNode.containerInfo,Si=!0,mr(t,e,n),mn=i,Si=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&_h(n,e,l),r=r.next}while(r!==i)}mr(t,e,n);break;case 1:if(!Mn&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Vt(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(Mn=(i=Mn)||n.memoizedState!==null,mr(t,e,n),Mn=i):mr(t,e,n);break;default:mr(t,e,n)}}function Lv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H1),e.forEach(function(i){var r=J1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function vi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,Si=!1;break e;case 3:mn=a.stateNode.containerInfo,Si=!0;break e;case 4:mn=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(mn===null)throw Error(Se(160));fx(o,l,r),mn=null,Si=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(h){Vt(r,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dx(e,t),e=e.sibling}function dx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(e,t),Ii(t),i&4){try{za(3,t,t.return),Ic(3,t)}catch(A){Vt(t,t.return,A)}try{za(5,t,t.return)}catch(A){Vt(t,t.return,A)}}break;case 1:vi(e,t),Ii(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(vi(e,t),Ii(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Wa(r,"")}catch(A){Vt(t,t.return,A)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&I0(r,o),qd(a,l);var h=qd(a,o);for(l=0;l<d.length;l+=2){var v=d[l],g=d[l+1];v==="style"?z0(r,g):v==="dangerouslySetInnerHTML"?U0(r,g):v==="children"?Wa(r,g):Wh(r,v,g,h)}switch(a){case"input":Gd(r,o);break;case"textarea":O0(r,o);break;case"select":var y=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Ss(r,!!o.multiple,x,!1):y!==!!o.multiple&&(o.defaultValue!=null?Ss(r,!!o.multiple,o.defaultValue,!0):Ss(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ja]=o}catch(A){Vt(t,t.return,A)}}break;case 6:if(vi(e,t),Ii(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(A){Vt(t,t.return,A)}}break;case 3:if(vi(e,t),Ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(A){Vt(t,t.return,A)}break;case 4:vi(e,t),Ii(t);break;case 13:vi(e,t),Ii(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(wp=Wt())),i&4&&Lv(t);break;case 22:if(v=n!==null&&n.memoizedState!==null,t.mode&1?(Mn=(h=Mn)||v,vi(e,t),Mn=h):vi(e,t),Ii(t),i&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!v&&t.mode&1)for(Ie=t,v=t.child;v!==null;){for(g=Ie=v;Ie!==null;){switch(y=Ie,x=y.child,y.tag){case 0:case 11:case 14:case 15:za(4,y,y.return);break;case 1:vs(y,y.return);var E=y.stateNode;if(typeof E.componentWillUnmount=="function"){i=y,n=y.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){Vt(i,n,A)}}break;case 5:vs(y,y.return);break;case 22:if(y.memoizedState!==null){Ov(g);continue}}x!==null?(x.return=y,Ie=x):Ov(g)}v=v.sibling}e:for(v=null,g=t;;){if(g.tag===5){if(v===null){v=g;try{r=g.stateNode,h?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,d=g.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=k0("display",l))}catch(A){Vt(t,t.return,A)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(A){Vt(t,t.return,A)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:vi(e,t),Ii(t),i&4&&Lv(t);break;case 21:break;default:vi(e,t),Ii(t)}}function Ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cx(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wa(r,""),i.flags&=-33);var o=Rv(t);wh(t,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=Rv(t);Mh(t,a,l);break;default:throw Error(Se(161))}}catch(d){Vt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j1(t,e,n){Ie=t,hx(t)}function hx(t,e,n){for(var i=(t.mode&1)!==0;Ie!==null;){var r=Ie,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||cu;if(!l){var a=r.alternate,d=a!==null&&a.memoizedState!==null||Mn;a=cu;var h=Mn;if(cu=l,(Mn=d)&&!h)for(Ie=r;Ie!==null;)l=Ie,d=l.child,l.tag===22&&l.memoizedState!==null?Nv(r):d!==null?(d.return=l,Ie=d):Nv(r);for(;o!==null;)Ie=o,hx(o),o=o.sibling;Ie=r,cu=a,Mn=h}Iv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ie=o):Iv(t)}}function Iv(t){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:_i(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&vv(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vv(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&$a(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Mn||e.flags&512&&Sh(e)}catch(y){Vt(e,e.return,y)}}if(e===t){Ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function Ov(t){for(;Ie!==null;){var e=Ie;if(e===t){Ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function Nv(t){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(d){Vt(e,n,d)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(d){Vt(e,r,d)}}var o=e.return;try{Sh(e)}catch(d){Vt(e,o,d)}break;case 5:var l=e.return;try{Sh(e)}catch(d){Vt(e,l,d)}}}catch(d){Vt(e,e.return,d)}if(e===t){Ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ie=a;break}Ie=e.return}}var X1=Math.ceil,mc=ur.ReactCurrentDispatcher,Sp=ur.ReactCurrentOwner,di=ur.ReactCurrentBatchConfig,pt=0,fn=null,Kt=null,vn=0,Kn=0,gs=Vr(0),Jt=0,ol=null,Mo=0,Oc=0,Mp=0,Fa=null,Un=null,wp=0,ks=1/0,Ji=null,vc=!1,bh=null,Ir=null,fu=!1,Cr=null,gc=0,Ba=0,Eh=null,ju=-1,Xu=0;function Dn(){return pt&6?Wt():ju!==-1?ju:ju=Wt()}function Or(t){return t.mode&1?pt&2&&vn!==0?vn&-vn:A1.transition!==null?(Xu===0&&(Xu=K0()),Xu):(t=xt,t!==0||(t=window.event,t=t===void 0?16:iy(t.type)),t):1}function Ci(t,e,n,i){if(50<Ba)throw Ba=0,Eh=null,Error(Se(185));ml(t,n,i),(!(pt&2)||t!==fn)&&(t===fn&&(!(pt&2)&&(Oc|=n),Jt===4&&br(t,vn)),Hn(t,i),n===1&&pt===0&&!(e.mode&1)&&(ks=Wt()+500,Dc&&Gr()))}function Hn(t,e){var n=t.callbackNode;AM(t,e);var i=ec(t,t===fn?vn:0);if(i===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?P1(Uv.bind(null,t)):My(Uv.bind(null,t)),b1(function(){!(pt&6)&&Gr()}),n=null;else{switch(Z0(i)){case 1:n=Yh;break;case 4:n=$0;break;case 16:n=Ju;break;case 536870912:n=Y0;break;default:n=Ju}n=Sx(n,px.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function px(t,e){if(ju=-1,Xu=0,pt&6)throw Error(Se(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=ec(t,t===fn?vn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yc(t,i);else{e=i;var r=pt;pt|=2;var o=vx();(fn!==t||vn!==e)&&(Ji=null,ks=Wt()+500,mo(t,e));do try{Y1();break}catch(a){mx(t,a)}while(1);lp(),mc.current=o,pt=r,Kt!==null?e=0:(fn=null,vn=0,e=Jt)}if(e!==0){if(e===2&&(r=Qd(t),r!==0&&(i=r,e=Th(t,r))),e===1)throw n=ol,mo(t,0),br(t,i),Hn(t,Wt()),n;if(e===6)br(t,i);else{if(r=t.current.alternate,!(i&30)&&!q1(r)&&(e=yc(t,i),e===2&&(o=Qd(t),o!==0&&(i=o,e=Th(t,o))),e===1))throw n=ol,mo(t,0),br(t,i),Hn(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:ro(t,Un,Ji);break;case 3:if(br(t,i),(i&130023424)===i&&(e=wp+500-Wt(),10<e)){if(ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sh(ro.bind(null,t,Un,Ji),e);break}ro(t,Un,Ji);break;case 4:if(br(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var l=31-Ti(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X1(i/1960))-i,10<i){t.timeoutHandle=sh(ro.bind(null,t,Un,Ji),i);break}ro(t,Un,Ji);break;case 5:ro(t,Un,Ji);break;default:throw Error(Se(329))}}}return Hn(t,Wt()),t.callbackNode===n?px.bind(null,t):null}function Th(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(mo(t,e).flags|=256),t=yc(t,e),t!==2&&(e=Un,Un=n,e!==null&&Ch(e)),t}function Ch(t){Un===null?Un=t:Un.push.apply(Un,t)}function q1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Ai(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~Mp,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ti(e),i=1<<n;t[n]=-1,e&=~i}}function Uv(t){if(pt&6)throw Error(Se(327));Ts();var e=ec(t,0);if(!(e&1))return Hn(t,Wt()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var i=Qd(t);i!==0&&(e=i,n=Th(t,i))}if(n===1)throw n=ol,mo(t,0),br(t,e),Hn(t,Wt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ro(t,Un,Ji),Hn(t,Wt()),null}function bp(t,e){var n=pt;pt|=1;try{return t(e)}finally{pt=n,pt===0&&(ks=Wt()+500,Dc&&Gr())}}function wo(t){Cr!==null&&Cr.tag===0&&!(pt&6)&&Ts();var e=pt;pt|=1;var n=di.transition,i=xt;try{if(di.transition=null,xt=1,t)return t()}finally{xt=i,di.transition=n,pt=e,!(pt&6)&&Gr()}}function Ep(){Kn=gs.current,It(gs)}function mo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,w1(n)),Kt!==null)for(n=Kt.return;n!==null;){var i=n;switch(op(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&oc();break;case 3:Ns(),It(Vn),It(bn),pp();break;case 5:hp(i);break;case 4:Ns();break;case 13:It(kt);break;case 19:It(kt);break;case 10:up(i.type._context);break;case 22:case 23:Ep()}n=n.return}if(fn=t,Kt=t=Nr(t.current,null),vn=Kn=e,Jt=0,ol=null,Mp=Oc=Mo=0,Un=Fa=null,co!==null){for(e=0;e<co.length;e++)if(n=co[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}n.pending=i}co=null}return t}function mx(t,e){do{var n=Kt;try{if(lp(),Gu.current=pc,hc){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(So=0,cn=Zt=zt=null,ka=!1,nl=0,Sp.current=null,n===null||n.return===null){Jt=1,ol=e,Kt=null;break}e:{var o=t,l=n.return,a=n,d=e;if(e=vn,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,v=a,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var y=v.alternate;y?(v.updateQueue=y.updateQueue,v.memoizedState=y.memoizedState,v.lanes=y.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=wv(l);if(x!==null){x.flags&=-257,bv(x,l,a,o,e),x.mode&1&&Mv(o,h,e),e=x,d=h;var E=e.updateQueue;if(E===null){var A=new Set;A.add(d),e.updateQueue=A}else E.add(d);break e}else{if(!(e&1)){Mv(o,h,e),Tp();break e}d=Error(Se(426))}}else if(Ot&&a.mode&1){var _=wv(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),bv(_,l,a,o,e),sp(Us(d,a));break e}}o=d=Us(d,a),Jt!==4&&(Jt=2),Fa===null?Fa=[o]:Fa.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=Qy(o,d,e);mv(o,p);break e;case 1:a=d;var w=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ir===null||!Ir.has(b)))){o.flags|=65536,e&=-e,o.lanes|=e;var P=Jy(o,a,e);mv(o,P);break e}}o=o.return}while(o!==null)}yx(n)}catch(D){e=D,Kt===n&&n!==null&&(Kt=n=n.return);continue}break}while(1)}function vx(){var t=mc.current;return mc.current=pc,t===null?pc:t}function Tp(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),fn===null||!(Mo&268435455)&&!(Oc&268435455)||br(fn,vn)}function yc(t,e){var n=pt;pt|=2;var i=vx();(fn!==t||vn!==e)&&(Ji=null,mo(t,e));do try{$1();break}catch(r){mx(t,r)}while(1);if(lp(),pt=n,mc.current=i,Kt!==null)throw Error(Se(261));return fn=null,vn=0,Jt}function $1(){for(;Kt!==null;)gx(Kt)}function Y1(){for(;Kt!==null&&!_M();)gx(Kt)}function gx(t){var e=_x(t.alternate,t,Kn);t.memoizedProps=t.pendingProps,e===null?yx(t):Kt=e,Sp.current=null}function yx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=G1(n,e),n!==null){n.flags&=32767,Kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Kt=null;return}}else if(n=V1(n,e,Kn),n!==null){Kt=n;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);Jt===0&&(Jt=5)}function ro(t,e,n){var i=xt,r=di.transition;try{di.transition=null,xt=1,K1(t,e,n,i)}finally{di.transition=r,xt=i}return null}function K1(t,e,n,i){do Ts();while(Cr!==null);if(pt&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(DM(t,o),t===fn&&(Kt=fn=null,vn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fu||(fu=!0,Sx(Ju,function(){return Ts(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=di.transition,di.transition=null;var l=xt;xt=1;var a=pt;pt|=4,Sp.current=null,W1(t,n),dx(n,t),v1(rh),tc=!!ih,rh=ih=null,t.current=n,j1(n),SM(),pt=a,xt=l,di.transition=o}else t.current=n;if(fu&&(fu=!1,Cr=t,gc=r),o=t.pendingLanes,o===0&&(Ir=null),bM(n.stateNode),Hn(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vc)throw vc=!1,t=bh,bh=null,t;return gc&1&&t.tag!==0&&Ts(),o=t.pendingLanes,o&1?t===Eh?Ba++:(Ba=0,Eh=t):Ba=0,Gr(),null}function Ts(){if(Cr!==null){var t=Z0(gc),e=di.transition,n=xt;try{if(di.transition=null,xt=16>t?16:t,Cr===null)var i=!1;else{if(t=Cr,Cr=null,gc=0,pt&6)throw Error(Se(331));var r=pt;for(pt|=4,Ie=t.current;Ie!==null;){var o=Ie,l=o.child;if(Ie.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var h=a[d];for(Ie=h;Ie!==null;){var v=Ie;switch(v.tag){case 0:case 11:case 15:za(8,v,o)}var g=v.child;if(g!==null)g.return=v,Ie=g;else for(;Ie!==null;){v=Ie;var y=v.sibling,x=v.return;if(ux(v),v===h){Ie=null;break}if(y!==null){y.return=x,Ie=y;break}Ie=x}}}var E=o.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var _=A.sibling;A.sibling=null,A=_}while(A!==null)}}Ie=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Ie=l;else e:for(;Ie!==null;){if(o=Ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:za(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Ie=p;break e}Ie=o.return}}var w=t.current;for(Ie=w;Ie!==null;){l=Ie;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,Ie=b;else e:for(l=w;Ie!==null;){if(a=Ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ic(9,a)}}catch(D){Vt(a,a.return,D)}if(a===l){Ie=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,Ie=P;break e}Ie=a.return}}if(pt=r,Gr(),Bi&&typeof Bi.onPostCommitFiberRoot=="function")try{Bi.onPostCommitFiberRoot(Ec,t)}catch{}i=!0}return i}finally{xt=n,di.transition=e}}return!1}function kv(t,e,n){e=Us(n,e),e=Qy(t,e,1),t=Lr(t,e,1),e=Dn(),t!==null&&(ml(t,1,e),Hn(t,e))}function Vt(t,e,n){if(t.tag===3)kv(t,t,n);else for(;e!==null;){if(e.tag===3){kv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ir===null||!Ir.has(i))){t=Us(n,t),t=Jy(e,t,1),e=Lr(e,t,1),t=Dn(),e!==null&&(ml(e,1,t),Hn(e,t));break}}e=e.return}}function Z1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Dn(),t.pingedLanes|=t.suspendedLanes&n,fn===t&&(vn&n)===n&&(Jt===4||Jt===3&&(vn&130023424)===vn&&500>Wt()-wp?mo(t,0):Mp|=n),Hn(t,e)}function xx(t,e){e===0&&(t.mode&1?(e=tu,tu<<=1,!(tu&130023424)&&(tu=4194304)):e=1);var n=Dn();t=ar(t,e),t!==null&&(ml(t,e,n),Hn(t,n))}function Q1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xx(t,n)}function J1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),xx(t,n)}var _x;_x=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vn.current)Fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fn=!1,B1(t,e,n);Fn=!!(t.flags&131072)}else Fn=!1,Ot&&e.flags&1048576&&wy(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wu(t,e),t=e.pendingProps;var r=Ls(e,bn.current);Es(e,n),r=vp(null,e,i,t,r,n);var o=gp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gn(i)?(o=!0,sc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fp(e),r.updater=Rc,e.stateNode=r,r._reactInternals=e,hh(e,i,t,n),e=vh(null,e,i,!0,o,n)):(e.tag=0,Ot&&o&&rp(e),An(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tw(i),t=_i(i,t),r){case 0:e=mh(null,e,i,t,n);break e;case 1:e=Cv(null,e,i,t,n);break e;case 11:e=Ev(null,e,i,t,n);break e;case 14:e=Tv(null,e,i,_i(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),mh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Cv(t,e,i,r,n);case 3:e:{if(ix(e),t===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Cy(t,e),fc(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Us(Error(Se(423)),e),e=Pv(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(Se(424)),e),e=Pv(t,e,i,n,r);break e}else for(Zn=Rr(e.stateNode.containerInfo.firstChild),Qn=e,Ot=!0,Mi=null,n=Ry(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),i===r){e=lr(t,e,n);break e}An(t,e,i,n)}e=e.child}return e;case 5:return Ly(e),t===null&&ch(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,l=r.children,oh(i,r)?l=null:o!==null&&oh(i,o)&&(e.flags|=32),nx(t,e),An(t,e,l,n),e.child;case 6:return t===null&&ch(e),null;case 13:return rx(t,e,n);case 4:return dp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Os(e,null,i,n):An(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Ev(t,e,i,r,n);case 7:return An(t,e,e.pendingProps,n),e.child;case 8:return An(t,e,e.pendingProps.children,n),e.child;case 12:return An(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Ct(uc,i._currentValue),i._currentValue=l,o!==null)if(Ai(o.value,l)){if(o.children===r.children&&!Vn.current){e=lr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var d=a.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=rr(-1,n&-n),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?d.next=d:(d.next=v.next,v.next=d),h.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),fh(o.return,n,e),a.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Se(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),fh(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}An(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=hi(r),i=i(r),e.flags|=1,An(t,e,i,n),e.child;case 14:return i=e.type,r=_i(i,e.pendingProps),r=_i(i.type,r),Tv(t,e,i,r,n);case 15:return ex(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Wu(t,e),e.tag=1,Gn(i)?(t=!0,sc(e)):t=!1,Es(e,n),Ay(e,i,r),hh(e,i,r,n),vh(null,e,i,!0,t,n);case 19:return ox(t,e,n);case 22:return tx(t,e,n)}throw Error(Se(156,e.tag))};function Sx(t,e){return q0(t,e)}function ew(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,e,n,i){return new ew(t,e,n,i)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tw(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===qh)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=fi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qu(t,e,n,i,r,o){var l=2;if(i=t,typeof t=="function")Cp(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case as:return vo(n.children,r,o,e);case jh:l=8,r|=8;break;case kd:return t=fi(12,n,e,r|2),t.elementType=kd,t.lanes=o,t;case zd:return t=fi(13,n,e,r),t.elementType=zd,t.lanes=o,t;case Fd:return t=fi(19,n,e,r),t.elementType=Fd,t.lanes=o,t;case D0:return Nc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P0:l=10;break e;case A0:l=9;break e;case Xh:l=11;break e;case qh:l=14;break e;case Sr:l=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=fi(l,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function vo(t,e,n,i){return t=fi(7,t,i,e),t.lanes=n,t}function Nc(t,e,n,i){return t=fi(22,t,i,e),t.elementType=D0,t.lanes=n,t.stateNode={isHidden:!1},t}function qf(t,e,n){return t=fi(6,t,null,e),t.lanes=n,t}function $f(t,e,n){return e=fi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pf(0),this.expirationTimes=Pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,i,r,o,l,a,d){return t=new nw(t,e,n,a,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=fi(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(o),t}function iw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mx(t){if(!t)return kr;t=t._reactInternals;e:{if(Ao(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(Gn(n))return Sy(t,n,e)}return e}function wx(t,e,n,i,r,o,l,a,d){return t=Pp(n,i,!0,t,r,o,l,a,d),t.context=Mx(null),n=t.current,i=Dn(),r=Or(n),o=rr(i,r),o.callback=e??null,Lr(n,o,r),t.current.lanes=r,ml(t,r,i),Hn(t,i),t}function Uc(t,e,n,i){var r=e.current,o=Dn(),l=Or(r);return n=Mx(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Lr(r,e,l),t!==null&&(Ci(t,r,l,o),Vu(t,r,l)),l}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){zv(t,e),(t=t.alternate)&&zv(t,e)}function rw(){return null}var bx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dp(t){this._internalRoot=t}kc.prototype.render=Dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));Uc(t,e,null,null)};kc.prototype.unmount=Dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wo(function(){Uc(null,t,null,null)}),e[sr]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ey();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&ny(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fv(){}function ow(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var h=xc(l);o.call(h)}}var l=wx(e,i,t,0,null,!1,!1,"",Fv);return t._reactRootContainer=l,t[sr]=l.current,Za(t.nodeType===8?t.parentNode:t),wo(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var h=xc(d);a.call(h)}}var d=Pp(t,0,!1,null,null,!1,!1,"",Fv);return t._reactRootContainer=d,t[sr]=d.current,Za(t.nodeType===8?t.parentNode:t),wo(function(){Uc(e,d,n,i)}),d}function Fc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var d=xc(l);a.call(d)}}Uc(e,l,t,r)}else l=ow(n,e,t,r,i);return xc(l)}Q0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(Kh(e,n|1),Hn(e,Wt()),!(pt&6)&&(ks=Wt()+500,Gr()))}break;case 13:wo(function(){var i=ar(t,1);if(i!==null){var r=Dn();Ci(i,t,1,r)}}),Ap(t,1)}};Zh=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Dn();Ci(e,t,134217728,n)}Ap(t,134217728)}};J0=function(t){if(t.tag===13){var e=Or(t),n=ar(t,e);if(n!==null){var i=Dn();Ci(n,t,e,i)}Ap(t,e)}};ey=function(){return xt};ty=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};Yd=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ac(i);if(!r)throw Error(Se(90));L0(i),Gd(i,r)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};V0=bp;G0=wo;var sw={usingClientEntryPoint:!1,Events:[gl,fs,Ac,F0,B0,bp]},xa={findFiberByHostInstance:uo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aw={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j0(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Ec=du.inject(aw),Bi=du}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sw;ei.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(Se(200));return iw(t,e,null,n)};ei.createRoot=function(t,e){if(!Rp(t))throw Error(Se(299));var n=!1,i="",r=bx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,i,r),t[sr]=e.current,Za(t.nodeType===8?t.parentNode:t),new Dp(e)};ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=j0(e),t=t===null?null:t.stateNode,t};ei.flushSync=function(t){return wo(t)};ei.hydrate=function(t,e,n){if(!zc(e))throw Error(Se(200));return Fc(null,t,e,!0,n)};ei.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",l=bx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=wx(e,null,t,1,n??null,r,!1,o,l),t[sr]=e.current,Za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new kc(e)};ei.render=function(t,e,n){if(!zc(e))throw Error(Se(200));return Fc(null,t,e,!1,n)};ei.unmountComponentAtNode=function(t){if(!zc(t))throw Error(Se(40));return t._reactRootContainer?(wo(function(){Fc(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};ei.unstable_batchedUpdates=bp;ei.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zc(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return Fc(t,e,n,!1,i)};ei.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ei})(rM);var Bv=Od;Id.createRoot=Bv.createRoot,Id.hydrateRoot=Bv.hydrateRoot;var Ph={},lw={get exports(){return Ph},set exports(t){Ph=t}};(function(t,e){(function(n){t.exports=n()})(function(){var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default=function(s){return!(!s||!s.Window)&&s instanceof s.Window};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.getWindow=function(s){return(0,n.default)(s)?s:(s.ownerDocument||s).defaultView||o.window},i.init=l,i.window=i.realWindow=void 0;var r=void 0;i.realWindow=r;var o=void 0;function l(s){i.realWindow=r=s;var u=s.document.createTextNode("");u.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(u)===u&&(s=s.wrap(s)),i.window=o=s}i.window=o,typeof window<"u"&&window&&l(window);var a={};function d(s){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=function(s){return!!s&&d(s)==="object"},v=function(s){return typeof s=="function"},g={window:function(s){return s===i.window||(0,n.default)(s)},docFrag:function(s){return h(s)&&s.nodeType===11},object:h,func:v,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||d(s)!=="object")return!1;var u=i.getWindow(s)||i.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?s instanceof Element||s instanceof u.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return h(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return h(s)&&s.length!==void 0&&v(s.splice)}};a.default=g;var y={};function x(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.prepared.axis;c==="x"?(u.coords.cur.page.y=u.coords.start.page.y,u.coords.cur.client.y=u.coords.start.client.y,u.coords.velocity.client.y=0,u.coords.velocity.page.y=0):c==="y"&&(u.coords.cur.page.x=u.coords.start.page.x,u.coords.cur.client.x=u.coords.start.client.x,u.coords.velocity.client.x=0,u.coords.velocity.page.x=0)}}function E(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="drag"){var f=c.prepared.axis;if(f==="x"||f==="y"){var m=f==="x"?"y":"x";u.page[m]=c.coords.start.page[m],u.client[m]=c.coords.start.client[m],u.delta[m]=0}}}Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var A={id:"actions/drag",install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.draggable=A.draggable,u.map.drag=A,u.methodDict.drag="draggable",f.actions.drag=A.defaults},listeners:{"interactions:before-action-move":x,"interactions:action-resume":x,"interactions:action-move":E,"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.buttons,m=c.options.drag;if(m&&m.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||f&c.options.drag.mouseButtons))return s.action={name:"drag",axis:m.lockAxis==="start"?m.startAxis:m.lockAxis},!1}},draggable:function(s){return a.default.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):a.default.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:x,move:E,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},_=A;y.default=_;var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var w={init:function(s){var u=s;w.document=u.document,w.DocumentFragment=u.DocumentFragment||b,w.SVGElement=u.SVGElement||b,w.SVGSVGElement=u.SVGSVGElement||b,w.SVGElementInstance=u.SVGElementInstance||b,w.Element=u.Element||b,w.HTMLElement=u.HTMLElement||w.Element,w.Event=u.Event,w.Touch=u.Touch||b,w.PointerEvent=u.PointerEvent||u.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function b(){}var P=w;p.default=P;var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var O={init:function(s){var u=p.default.Element,c=s.navigator||{};O.supportsTouch="ontouchstart"in s||a.default.func(s.DocumentTouch)&&p.default.document instanceof s.DocumentTouch,O.supportsPointerEvent=c.pointerEnabled!==!1&&!!p.default.PointerEvent,O.isIOS=/iP(hone|od|ad)/.test(c.platform),O.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),O.isIe9=/MSIE 9/.test(c.userAgent),O.isOperaMobile=c.appName==="Opera"&&O.supportsTouch&&/Presto/.test(c.userAgent),O.prefixedMatchesSelector="matches"in u.prototype?"matches":"webkitMatchesSelector"in u.prototype?"webkitMatchesSelector":"mozMatchesSelector"in u.prototype?"mozMatchesSelector":"oMatchesSelector"in u.prototype?"oMatchesSelector":"msMatchesSelector",O.pEventTypes=O.supportsPointerEvent?p.default.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,O.wheelEvent=p.default.document&&"onmousewheel"in p.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},B=O;D.default=B;var k={};function R(s){var u=s.parentNode;if(a.default.docFrag(u)){for(;(u=u.host)&&a.default.docFrag(u););return u}return u}function N(s,u){return i.window!==i.realWindow&&(u=u.replace(/\/deep\//g," ")),s[D.default.prefixedMatchesSelector](u)}Object.defineProperty(k,"__esModule",{value:!0}),k.closest=function(s,u){for(;a.default.element(s);){if(N(s,u))return s;s=R(s)}return null},k.getActualElement=function(s){return s.correspondingUseElement||s},k.getElementClientRect=Z,k.getElementRect=function(s){var u=Z(s);if(!D.default.isIOS7&&u){var c=$(i.getWindow(s));u.left+=c.x,u.right+=c.x,u.top+=c.y,u.bottom+=c.y}return u},k.getPath=function(s){for(var u=[];s;)u.push(s),s=R(s);return u},k.getScrollXY=$,k.indexOfDeepestElement=function(s){for(var u,c=[],f=0;f<s.length;f++){var m=s[f],S=s[u];if(m&&f!==u)if(S){var C=se(m),M=se(S);if(C!==m.ownerDocument)if(M!==m.ownerDocument)if(C!==M){c=c.length?c:ue(S);var T=void 0;if(S instanceof p.default.HTMLElement&&m instanceof p.default.SVGElement&&!(m instanceof p.default.SVGSVGElement)){if(m===M)continue;T=m.ownerSVGElement}else T=m;for(var I=ue(T,S.ownerDocument),F=0;I[F]&&I[F]===c[F];)F++;var G=[I[F-1],I[F],c[F]];if(G[0])for(var ee=G[0].lastChild;ee;){if(ee===G[1]){u=f,c=I;break}if(ee===G[2])break;ee=ee.previousSibling}}else ce=m,K=S,(parseInt(i.getWindow(ce).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(i.getWindow(K).getComputedStyle(K).zIndex,10)||0)&&(u=f);else u=f}else u=f}var ce,K;return u},k.matchesSelector=N,k.matchesUpTo=function(s,u,c){for(;a.default.element(s);){if(N(s,u))return!0;if((s=R(s))===c)return N(s,u)}return!1},k.nodeContains=function(s,u){if(s.contains)return s.contains(u);for(;u;){if(u===s)return!0;u=u.parentNode}return!1},k.parentNode=R,k.trySelector=function(s){return!!a.default.string(s)&&(p.default.document.querySelector(s),!0)};var se=function(s){return s.parentNode||s.host};function ue(s,u){for(var c,f=[],m=s;(c=se(m))&&m!==u&&c!==m.ownerDocument;)f.unshift(m),m=c;return f}function $(s){return{x:(s=s||i.window).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop}}function Z(s){var u=s instanceof p.default.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return u&&{left:u.left,right:u.right,top:u.top,bottom:u.bottom,width:u.width||u.right-u.left,height:u.height||u.bottom-u.top}}var W={};Object.defineProperty(W,"__esModule",{value:!0}),W.default=function(s,u){for(var c in u)s[c]=u[c];return s};var fe={};function me(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function j(s,u,c){return s==="parent"?(0,k.parentNode)(c):s==="self"?u.getRect(c):(0,k.closest)(c,s)}Object.defineProperty(fe,"__esModule",{value:!0}),fe.addEdges=function(s,u,c){s.left&&(u.left+=c.x),s.right&&(u.right+=c.x),s.top&&(u.top+=c.y),s.bottom&&(u.bottom+=c.y),u.width=u.right-u.left,u.height=u.bottom-u.top},fe.getStringOptionResult=j,fe.rectToXY=function(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}},fe.resolveRectLike=function(s,u,c,f){var m,S=s;return a.default.string(S)?S=j(S,u,c):a.default.func(S)&&(S=S.apply(void 0,function(C){if(Array.isArray(C))return me(C)}(m=f)||function(C){if(typeof Symbol<"u"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}(m)||function(C,M){if(C){if(typeof C=="string")return me(C,M);var T=Object.prototype.toString.call(C).slice(8,-1);return T==="Object"&&C.constructor&&(T=C.constructor.name),T==="Map"||T==="Set"?Array.from(C):T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)?me(C,M):void 0}}(m)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),a.default.element(S)&&(S=(0,k.getElementRect)(S)),S},fe.tlbrToXywh=function(s){return!s||"x"in s&&"y"in s||((s=(0,W.default)({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s},fe.xywhToTlbr=function(s){return!s||"left"in s&&"top"in s||((s=(0,W.default)({},s)).left=s.x||0,s.top=s.y||0,s.right=s.right||s.left+s.width,s.bottom=s.bottom||s.top+s.height),s};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(s,u,c){var f=s.options[c],m=f&&f.origin||s.options.origin,S=(0,fe.resolveRectLike)(m,s,u,[s&&u]);return(0,fe.rectToXY)(S)||{x:0,y:0}};var re={};function Te(s){return s.trim().split(/ +/)}Object.defineProperty(re,"__esModule",{value:!0}),re.default=function s(u,c,f){if(f=f||{},a.default.string(u)&&u.search(" ")!==-1&&(u=Te(u)),a.default.array(u))return u.reduce(function(T,I){return(0,W.default)(T,s(I,c,f))},f);if(a.default.object(u)&&(c=u,u=""),a.default.func(c))f[u]=f[u]||[],f[u].push(c);else if(a.default.array(c))for(var m=0;m<c.length;m++){var S;S=c[m],s(u,S,f)}else if(a.default.object(c))for(var C in c){var M=Te(C).map(function(T){return"".concat(u).concat(T)});s(M,c[C],f)}return f};var ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=void 0,ve.default=function(s,u){return Math.sqrt(s*s+u*u)};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=function(s,u){s.__set||(s.__set={});var c=function(m){typeof s[m]!="function"&&m!=="__set"&&Object.defineProperty(s,m,{get:function(){return m in s.__set?s.__set[m]:s.__set[m]=u[m]},set:function(S){s.__set[m]=S},configurable:!0})};for(var f in u)c(f);return s};var q={};function we(s){return s instanceof p.default.Event||s instanceof p.default.Touch}function Me(s,u,c){return s=s||"page",(c=c||{}).x=u[s+"X"],c.y=u[s+"Y"],c}function te(s,u){return u=u||{x:0,y:0},D.default.isOperaMobile&&we(s)?(Me("screen",s,u),u.x+=window.scrollX,u.y+=window.scrollY):Me("page",s,u),u}function Ke(s,u){return u=u||{},D.default.isOperaMobile&&we(s)?Me("screen",s,u):Me("client",s,u),u}function Ge(s){var u=[];return a.default.array(s)?(u[0]=s[0],u[1]=s[1]):s.type==="touchend"?s.touches.length===1?(u[0]=s.touches[0],u[1]=s.changedTouches[0]):s.touches.length===0&&(u[0]=s.changedTouches[0],u[1]=s.changedTouches[1]):(u[0]=s.touches[0],u[1]=s.touches[1]),u}function be(s){for(var u={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<s.length;c++){var f=s[c];for(var m in u)u[m]+=f[m]}for(var S in u)u[S]/=s.length;return u}Object.defineProperty(q,"__esModule",{value:!0}),q.coordsToEvent=function(s){return{coords:s,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},q.copyCoords=function(s,u){s.page=s.page||{},s.page.x=u.page.x,s.page.y=u.page.y,s.client=s.client||{},s.client.x=u.client.x,s.client.y=u.client.y,s.timeStamp=u.timeStamp},q.getClientXY=Ke,q.getEventTargets=function(s){var u=a.default.func(s.composedPath)?s.composedPath():s.path;return[k.getActualElement(u?u[0]:s.target),k.getActualElement(s.currentTarget)]},q.getPageXY=te,q.getPointerId=function(s){return a.default.number(s.pointerId)?s.pointerId:s.identifier},q.getPointerType=function(s){return a.default.string(s.pointerType)?s.pointerType:a.default.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof p.default.Touch?"touch":"mouse"},q.getTouchPair=Ge,q.getXY=Me,q.isNativePointer=we,q.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},q.pointerAverage=be,Object.defineProperty(q,"pointerExtend",{enumerable:!0,get:function(){return oe.default}}),q.setCoordDeltas=function(s,u,c){s.page.x=c.page.x-u.page.x,s.page.y=c.page.y-u.page.y,s.client.x=c.client.x-u.client.x,s.client.y=c.client.y-u.client.y,s.timeStamp=c.timeStamp-u.timeStamp},q.setCoordVelocity=function(s,u){var c=Math.max(u.timeStamp/1e3,.001);s.page.x=u.page.x/c,s.page.y=u.page.y/c,s.client.x=u.client.x/c,s.client.y=u.client.y/c,s.timeStamp=c},q.setCoords=function(s,u,c){var f=u.length>1?be(u):u[0];te(f,s.page),Ke(f,s.client),s.timeStamp=c},q.setZeroCoords=function(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0},q.touchAngle=function(s,u){var c=u+"X",f=u+"Y",m=Ge(s),S=m[1][c]-m[0][c],C=m[1][f]-m[0][f];return 180*Math.atan2(C,S)/Math.PI},q.touchBBox=function(s){if(!s.length)return null;var u=Ge(s),c=Math.min(u[0].pageX,u[1].pageX),f=Math.min(u[0].pageY,u[1].pageY),m=Math.max(u[0].pageX,u[1].pageX),S=Math.max(u[0].pageY,u[1].pageY);return{x:c,y:f,left:c,top:f,right:m,bottom:S,width:m-c,height:S-f}},q.touchDistance=function(s,u){var c=u+"X",f=u+"Y",m=Ge(s),S=m[0][c]-m[1][c],C=m[0][f]-m[1][f];return(0,ve.default)(S,C)};var Be={};function dt(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Fe(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Be,"__esModule",{value:!0}),Be.BaseEvent=void 0;var Qe=function(){function s(f){(function(m,S){if(!(m instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),Fe(this,"immediatePropagationStopped",!1),Fe(this,"propagationStopped",!1),this._interaction=f}var u,c;return u=s,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&dt(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Be.BaseEvent=Qe,Object.defineProperty(Qe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0}),Xe.remove=Xe.merge=Xe.from=Xe.findIndex=Xe.find=Xe.contains=void 0,Xe.contains=function(s,u){return s.indexOf(u)!==-1},Xe.remove=function(s,u){return s.splice(s.indexOf(u),1)};var Et=function(s,u){for(var c=0;c<u.length;c++){var f=u[c];s.push(f)}return s};Xe.merge=Et,Xe.from=function(s){return Et([],s)};var Nt=function(s,u){for(var c=0;c<s.length;c++)if(u(s[c],c,s))return c;return-1};Xe.findIndex=Nt,Xe.find=function(s,u){return s[Nt(s,u)]};var mt={};function at(s){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},at(s)}function _t(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function jt(s,u){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},jt(s,u)}function z(s,u){if(u&&(at(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(s)}function L(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ae(s){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},ae(s)}function pe(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(mt,"__esModule",{value:!0}),mt.DropEvent=void 0;var _e=function(s){(function(M,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(T&&T.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),T&&jt(M,T)})(C,s);var u,c,f,m,S=(f=C,m=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,T=ae(f);if(m){var I=ae(this).constructor;M=Reflect.construct(T,arguments,I)}else M=T.apply(this,arguments);return z(this,M)});function C(M,T,I){var F;(function(K,ye){if(!(K instanceof ye))throw new TypeError("Cannot call a class as a function")})(this,C),pe(L(F=S.call(this,T._interaction)),"dropzone",void 0),pe(L(F),"dragEvent",void 0),pe(L(F),"relatedTarget",void 0),pe(L(F),"draggable",void 0),pe(L(F),"propagationStopped",!1),pe(L(F),"immediatePropagationStopped",!1);var G=I==="dragleave"?M.prev:M.cur,ee=G.element,ce=G.dropzone;return F.type=I,F.target=ee,F.currentTarget=ee,F.dropzone=ce,F.dragEvent=T,F.relatedTarget=T.target,F.draggable=T.interactable,F.timeStamp=T.timeStamp,F}return u=C,(c=[{key:"reject",value:function(){var M=this,T=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&T.cur.dropzone===this.dropzone&&T.cur.element===this.target)if(T.prev.dropzone=this.dropzone,T.prev.element=this.target,T.rejected=!0,T.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var I=T.activeDrops,F=Xe.findIndex(I,function(ee){var ce=ee.dropzone,K=ee.element;return ce===M.dropzone&&K===M.target});T.activeDrops.splice(F,1);var G=new C(T,this.dragEvent,"dropdeactivate");G.dropzone=this.dropzone,G.target=this.target,this.dropzone.fire(G)}else this.dropzone.fire(new C(T,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&_t(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Be.BaseEvent);mt.DropEvent=_e;var Ee={};function V(s,u){for(var c=0;c<s.slice().length;c++){var f=s.slice()[c],m=f.dropzone,S=f.element;u.dropzone=m,u.target=S,m.fire(u),u.propagationStopped=u.immediatePropagationStopped=!1}}function he(s,u){for(var c=function(S,C){for(var M=S.interactables,T=[],I=0;I<M.list.length;I++){var F=M.list[I];if(F.options.drop.enabled){var G=F.options.drop.accept;if(!(a.default.element(G)&&G!==C||a.default.string(G)&&!k.matchesSelector(C,G)||a.default.func(G)&&!G({dropzone:F,draggableElement:C})))for(var ee=a.default.string(F.target)?F._context.querySelectorAll(F.target):a.default.array(F.target)?F.target:[F.target],ce=0;ce<ee.length;ce++){var K=ee[ce];K!==C&&T.push({dropzone:F,element:K,rect:F.getRect(K)})}}}return T}(s,u),f=0;f<c.length;f++){var m=c[f];m.rect=m.dropzone.getRect(m.element)}return c}function ne(s,u,c){for(var f=s.dropState,m=s.interactable,S=s.element,C=[],M=0;M<f.activeDrops.length;M++){var T=f.activeDrops[M],I=T.dropzone,F=T.element,G=T.rect;C.push(I.dropCheck(u,c,m,S,F,G)?F:null)}var ee=k.indexOfDeepestElement(C);return f.activeDrops[ee]||null}function Ce(s,u,c){var f=s.dropState,m={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(m.activate=new mt.DropEvent(f,c,"dropactivate"),m.activate.target=null,m.activate.dropzone=null),c.type==="dragend"&&(m.deactivate=new mt.DropEvent(f,c,"dropdeactivate"),m.deactivate.target=null,m.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(m.leave=new mt.DropEvent(f,c,"dragleave"),c.dragLeave=m.leave.target=f.prev.element,c.prevDropzone=m.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(m.enter=new mt.DropEvent(f,c,"dragenter"),c.dragEnter=f.cur.element,c.dropzone=f.cur.dropzone)),c.type==="dragend"&&f.cur.dropzone&&(m.drop=new mt.DropEvent(f,c,"drop"),c.dropzone=f.cur.dropzone,c.relatedTarget=f.cur.element),c.type==="dragmove"&&f.cur.dropzone&&(m.move=new mt.DropEvent(f,c,"dropmove"),m.move.dragmove=c,c.dropzone=f.cur.dropzone)),m}function Le(s,u){var c=s.dropState,f=c.activeDrops,m=c.cur,S=c.prev;u.leave&&S.dropzone.fire(u.leave),u.enter&&m.dropzone.fire(u.enter),u.move&&m.dropzone.fire(u.move),u.drop&&m.dropzone.fire(u.drop),u.deactivate&&V(f,u.deactivate),c.prev.dropzone=m.dropzone,c.prev.element=m.element}function ze(s,u){var c=s.interaction,f=s.iEvent,m=s.event;if(f.type==="dragmove"||f.type==="dragend"){var S=c.dropState;u.dynamicDrop&&(S.activeDrops=he(u,c.element));var C=f,M=ne(c,C,m);S.rejected=S.rejected&&!!M&&M.dropzone===S.cur.dropzone&&M.element===S.cur.element,S.cur.dropzone=M&&M.dropzone,S.cur.element=M&&M.element,S.events=Ce(c,0,C)}}Object.defineProperty(Ee,"__esModule",{value:!0}),Ee.default=void 0;var De={id:"actions/drop",install:function(s){var u=s.actions,c=s.interactStatic,f=s.Interactable,m=s.defaults;s.usePlugin(y.default),f.prototype.dropzone=function(S){return function(C,M){if(a.default.object(M)){if(C.options.drop.enabled=M.enabled!==!1,M.listeners){var T=(0,re.default)(M.listeners),I=Object.keys(T).reduce(function(F,G){return F[/^(enter|leave)/.test(G)?"drag".concat(G):/^(activate|deactivate|move)/.test(G)?"drop".concat(G):G]=T[G],F},{});C.off(C.options.drop.listeners),C.on(I),C.options.drop.listeners=I}return a.default.func(M.ondrop)&&C.on("drop",M.ondrop),a.default.func(M.ondropactivate)&&C.on("dropactivate",M.ondropactivate),a.default.func(M.ondropdeactivate)&&C.on("dropdeactivate",M.ondropdeactivate),a.default.func(M.ondragenter)&&C.on("dragenter",M.ondragenter),a.default.func(M.ondragleave)&&C.on("dragleave",M.ondragleave),a.default.func(M.ondropmove)&&C.on("dropmove",M.ondropmove),/^(pointer|center)$/.test(M.overlap)?C.options.drop.overlap=M.overlap:a.default.number(M.overlap)&&(C.options.drop.overlap=Math.max(Math.min(1,M.overlap),0)),"accept"in M&&(C.options.drop.accept=M.accept),"checker"in M&&(C.options.drop.checker=M.checker),C}return a.default.bool(M)?(C.options.drop.enabled=M,C):C.options.drop}(this,S)},f.prototype.dropCheck=function(S,C,M,T,I,F){return function(G,ee,ce,K,ye,Pe,xe){var ke=!1;if(!(xe=xe||G.getRect(Pe)))return!!G.options.drop.checker&&G.options.drop.checker(ee,ce,ke,G,Pe,K,ye);var je=G.options.drop.overlap;if(je==="pointer"){var tt=(0,J.default)(K,ye,"drag"),gt=q.getPageXY(ee);gt.x+=tt.x,gt.y+=tt.y;var Tt=gt.x>xe.left&&gt.x<xe.right,ut=gt.y>xe.top&&gt.y<xe.bottom;ke=Tt&&ut}var wt=K.getRect(ye);if(wt&&je==="center"){var oi=wt.left+wt.width/2,Xi=wt.top+wt.height/2;ke=oi>=xe.left&&oi<=xe.right&&Xi>=xe.top&&Xi<=xe.bottom}return wt&&a.default.number(je)&&(ke=Math.max(0,Math.min(xe.right,wt.right)-Math.max(xe.left,wt.left))*Math.max(0,Math.min(xe.bottom,wt.bottom)-Math.max(xe.top,wt.top))/(wt.width*wt.height)>=je),G.options.drop.checker&&(ke=G.options.drop.checker(ee,ce,ke,G,Pe,K,ye)),ke}(this,S,C,M,T,I,F)},c.dynamicDrop=function(S){return a.default.bool(S)?(s.dynamicDrop=S,c):s.dynamicDrop},(0,W.default)(u.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),u.methodDict.drop="dropzone",s.dynamicDrop=!1,m.actions.drop=De.defaults},listeners:{"interactions:before-action-start":function(s){var u=s.interaction;u.prepared.name==="drag"&&(u.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,u){var c=s.interaction,f=(s.event,s.iEvent);if(c.prepared.name==="drag"){var m=c.dropState;m.activeDrops=null,m.events=null,m.activeDrops=he(u,c.element),m.events=Ce(c,0,f),m.events.activate&&(V(m.activeDrops,m.events.activate),u.fire("actions/drop:start",{interaction:c,dragEvent:f}))}},"interactions:action-move":ze,"interactions:after-action-move":function(s,u){var c=s.interaction,f=s.iEvent;c.prepared.name==="drag"&&(Le(c,c.dropState.events),u.fire("actions/drop:move",{interaction:c,dragEvent:f}),c.dropState.events={})},"interactions:action-end":function(s,u){if(s.interaction.prepared.name==="drag"){var c=s.interaction,f=s.iEvent;ze(s,u),Le(c,c.dropState.events),u.fire("actions/drop:end",{interaction:c,dragEvent:f})}},"interactions:stop":function(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:he,getDrop:ne,getDropEvents:Ce,fireDropEvents:Le,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ue=De;Ee.default=Ue;var qe={};function Je(s){var u=s.interaction,c=s.iEvent,f=s.phase;if(u.prepared.name==="gesture"){var m=u.pointers.map(function(I){return I.pointer}),S=f==="start",C=f==="end",M=u.interactable.options.deltaSource;if(c.touches=[m[0],m[1]],S)c.distance=q.touchDistance(m,M),c.box=q.touchBBox(m),c.scale=1,c.ds=0,c.angle=q.touchAngle(m,M),c.da=0,u.gesture.startDistance=c.distance,u.gesture.startAngle=c.angle;else if(C){var T=u.prevEvent;c.distance=T.distance,c.box=T.box,c.scale=T.scale,c.ds=0,c.angle=T.angle,c.da=0}else c.distance=q.touchDistance(m,M),c.box=q.touchBBox(m),c.scale=c.distance/u.gesture.startDistance,c.angle=q.touchAngle(m,M),c.ds=c.scale-u.gesture.scale,c.da=c.angle-u.gesture.angle;u.gesture.distance=c.distance,u.gesture.angle=c.angle,a.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(u.gesture.scale=c.scale)}}Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=void 0;var Pt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.gesturable=function(m){return a.default.object(m)?(this.options.gesture.enabled=m.enabled!==!1,this.setPerAction("gesture",m),this.setOnEvents("gesture",m),this):a.default.bool(m)?(this.options.gesture.enabled=m,this):this.options.gesture},u.map.gesture=Pt,u.methodDict.gesture="gesturable",f.actions.gesture=Pt.defaults},listeners:{"interactions:action-start":Je,"interactions:action-move":Je,"interactions:action-end":Je,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var u=s.interactable.options.gesture;if(u&&u.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},H=Pt;qe.default=H;var le={};function ge(s,u,c,f,m,S,C){if(!u)return!1;if(u===!0){var M=a.default.number(S.width)?S.width:S.right-S.left,T=a.default.number(S.height)?S.height:S.bottom-S.top;if(C=Math.min(C,Math.abs((s==="left"||s==="right"?M:T)/2)),M<0&&(s==="left"?s="right":s==="right"&&(s="left")),T<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var I=M>=0?S.left:S.right;return c.x<I+C}if(s==="top"){var F=T>=0?S.top:S.bottom;return c.y<F+C}if(s==="right")return c.x>(M>=0?S.right:S.left)-C;if(s==="bottom")return c.y>(T>=0?S.bottom:S.top)-C}return!!a.default.element(f)&&(a.default.element(u)?u===f:k.matchesUpTo(f,u,m))}function Re(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var f=u;c.interactable.options.resize.square?(c.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=c.resizeAxes,c.resizeAxes==="x"?f.delta.y=0:c.resizeAxes==="y"&&(f.delta.x=0))}}Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;var Oe={id:"actions/resize",before:["actions/drag"],install:function(s){var u=s.actions,c=s.browser,f=s.Interactable,m=s.defaults;Oe.cursors=function(S){return S.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Oe.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,f.prototype.resizable=function(S){return function(C,M,T){return a.default.object(M)?(C.options.resize.enabled=M.enabled!==!1,C.setPerAction("resize",M),C.setOnEvents("resize",M),a.default.string(M.axis)&&/^x$|^y$|^xy$/.test(M.axis)?C.options.resize.axis=M.axis:M.axis===null&&(C.options.resize.axis=T.defaults.actions.resize.axis),a.default.bool(M.preserveAspectRatio)?C.options.resize.preserveAspectRatio=M.preserveAspectRatio:a.default.bool(M.square)&&(C.options.resize.square=M.square),C):a.default.bool(M)?(C.options.resize.enabled=M,C):C.options.resize}(this,S,s)},u.map.resize=Oe,u.methodDict.resize="resizable",m.actions.resize=Oe.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var m=c,S=f.rect;f._rects={start:(0,W.default)({},S),corrected:(0,W.default)({},S),previous:(0,W.default)({},S),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},m.edges=f.prepared.edges,m.rect=f._rects.corrected,m.deltaRect=f._rects.delta}})(s),Re(s)},"interactions:action-move":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var m=c,S=f.interactable.options.resize.invert,C=S==="reposition"||S==="negate",M=f.rect,T=f._rects,I=T.start,F=T.corrected,G=T.delta,ee=T.previous;if((0,W.default)(ee,F),C){if((0,W.default)(F,M),S==="reposition"){if(F.top>F.bottom){var ce=F.top;F.top=F.bottom,F.bottom=ce}if(F.left>F.right){var K=F.left;F.left=F.right,F.right=K}}}else F.top=Math.min(M.top,I.bottom),F.bottom=Math.max(M.bottom,I.top),F.left=Math.min(M.left,I.right),F.right=Math.max(M.right,I.left);for(var ye in F.width=F.right-F.left,F.height=F.bottom-F.top,F)G[ye]=F[ye]-ee[ye];m.edges=f.prepared.edges,m.rect=F,m.deltaRect=G}})(s),Re(s)},"interactions:action-end":function(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var f=u;f.edges=c.prepared.edges,f.rect=c._rects.corrected,f.deltaRect=c._rects.delta}},"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.element,m=s.rect,S=s.buttons;if(m){var C=(0,W.default)({},u.coords.cur.page),M=c.options.resize;if(M&&M.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||S&M.mouseButtons)){if(a.default.object(M.edges)){var T={left:!1,right:!1,top:!1,bottom:!1};for(var I in T)T[I]=ge(I,M.edges[I],C,u._latestPointer.eventTarget,f,m,M.margin||Oe.defaultMargin);T.left=T.left&&!T.right,T.top=T.top&&!T.bottom,(T.left||T.right||T.top||T.bottom)&&(s.action={name:"resize",edges:T})}else{var F=M.axis!=="y"&&C.x>m.right-Oe.defaultMargin,G=M.axis!=="x"&&C.y>m.bottom-Oe.defaultMargin;(F||G)&&(s.action={name:"resize",axes:(F?"x":"")+(G?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var u=s.edges,c=s.axis,f=s.name,m=Oe.cursors,S=null;if(c)S=m[f+c];else if(u){for(var C="",M=["top","bottom","left","right"],T=0;T<M.length;T++){var I=M[T];u[I]&&(C+=I)}S=m[C]}return S},defaultMargin:null},St=Oe;le.default=St;var yt={};Object.defineProperty(yt,"__esModule",{value:!0}),yt.default=void 0;var on={id:"actions",install:function(s){s.usePlugin(qe.default),s.usePlugin(le.default),s.usePlugin(y.default),s.usePlugin(Ee.default)}};yt.default=on;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var vt,qt,jn=0,Ro={request:function(s){return vt(s)},cancel:function(s){return qt(s)},init:function(s){if(vt=s.requestAnimationFrame,qt=s.cancelAnimationFrame,!vt)for(var u=["ms","moz","webkit","o"],c=0;c<u.length;c++){var f=u[c];vt=s["".concat(f,"RequestAnimationFrame")],qt=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}vt=vt&&vt.bind(s),qt=qt&&qt.bind(s),vt||(vt=function(m){var S=Date.now(),C=Math.max(0,16-(S-jn)),M=s.setTimeout(function(){m(S+C)},C);return jn=S+C,M},qt=function(m){return clearTimeout(m)})}};Xt.default=Ro;var ni={};Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=void 0,ni.getContainer=Lo,ni.getScroll=jr,ni.getScrollSize=function(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollWidth,y:s.scrollHeight}},ni.getScrollSizeDelta=function(s,u){var c=s.interaction,f=s.element,m=c&&c.interactable.options[c.prepared.name].autoScroll;if(!m||!m.enabled)return u(),{x:0,y:0};var S=Lo(m.container,c.interactable,f),C=jr(S);u();var M=jr(S);return{x:M.x-C.x,y:M.y-C.y}};var $e={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){$e.isScrolling=!0,Xt.default.cancel($e.i),s.autoScroll=$e,$e.interaction=s,$e.prevTime=$e.now(),$e.i=Xt.default.request($e.scroll)},stop:function(){$e.isScrolling=!1,$e.interaction&&($e.interaction.autoScroll=null),Xt.default.cancel($e.i)},scroll:function(){var s=$e.interaction,u=s.interactable,c=s.element,f=s.prepared.name,m=u.options[f].autoScroll,S=Lo(m.container,u,c),C=$e.now(),M=(C-$e.prevTime)/1e3,T=m.speed*M;if(T>=1){var I={x:$e.x*T,y:$e.y*T};if(I.x||I.y){var F=jr(S);a.default.window(S)?S.scrollBy(I.x,I.y):S&&(S.scrollLeft+=I.x,S.scrollTop+=I.y);var G=jr(S),ee={x:G.x-F.x,y:G.y-F.y};(ee.x||ee.y)&&u.fire({type:"autoscroll",target:c,interactable:u,delta:ee,interaction:s,container:S})}$e.prevTime=C}$e.isScrolling&&(Xt.default.cancel($e.i),$e.i=Xt.default.request($e.scroll))},check:function(s,u){var c;return(c=s.options[u].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(s){var u=s.interaction,c=s.pointer;if(u.interacting()&&$e.check(u.interactable,u.prepared.name))if(u.simulation)$e.x=$e.y=0;else{var f,m,S,C,M=u.interactable,T=u.element,I=u.prepared.name,F=M.options[I].autoScroll,G=Lo(F.container,M,T);if(a.default.window(G))C=c.clientX<$e.margin,f=c.clientY<$e.margin,m=c.clientX>G.innerWidth-$e.margin,S=c.clientY>G.innerHeight-$e.margin;else{var ee=k.getElementClientRect(G);C=c.clientX<ee.left+$e.margin,f=c.clientY<ee.top+$e.margin,m=c.clientX>ee.right-$e.margin,S=c.clientY>ee.bottom-$e.margin}$e.x=m?1:C?-1:0,$e.y=S?1:f?-1:0,$e.isScrolling||($e.margin=F.margin,$e.speed=F.speed,$e.start(u))}}};function Lo(s,u,c){return(a.default.string(s)?(0,fe.getStringOptionResult)(s,u,c):s)||(0,i.getWindow)(c)}function jr(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var U={id:"auto-scroll",install:function(s){var u=s.defaults,c=s.actions;s.autoScroll=$e,$e.now=function(){return s.now()},c.phaselessTypes.autoscroll=!0,u.perAction.autoScroll=$e.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,$e.stop(),$e.interaction&&($e.interaction=null)},"interactions:stop":$e.stop,"interactions:action-move":function(s){return $e.onInteractionMove(s)}}},Q=U;ni.default=Q;var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.copyAction=function(s,u){return s.name=u.name,s.axis=u.axis,s.edges=u.edges,s},ie.sign=void 0,ie.warnOnce=function(s,u){var c=!1;return function(){return c||(i.window.console.warn(u),c=!0),s.apply(this,arguments)}},ie.sign=function(s){return s>=0?1:-1};var Y={};function de(s){return a.default.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ve(s){return a.default.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Y,"__esModule",{value:!0}),Y.default=void 0;var Ye={id:"auto-start/interactableMethods",install:function(s){var u=s.Interactable;u.prototype.getAction=function(c,f,m,S){var C=function(M,T,I,F,G){var ee=M.getRect(F),ce={action:null,interactable:M,interaction:I,element:F,rect:ee,buttons:T.buttons||{0:1,1:4,3:8,4:16}[T.button]};return G.fire("auto-start:check",ce),ce.action}(this,f,m,S,s);return this.options.actionChecker?this.options.actionChecker(c,f,C,this,S,m):C},u.prototype.ignoreFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),u.prototype.allowFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),u.prototype.actionChecker=Ve,u.prototype.styleCursor=de}};Y.default=Ye;var We={};function et(s,u,c,f,m){return u.testIgnoreAllow(u.options[s.name],c,f)&&u.options[s.name].enabled&&ht(u,c,s,m)?s:null}function it(s,u,c,f,m,S,C){for(var M=0,T=f.length;M<T;M++){var I=f[M],F=m[M],G=I.getAction(u,c,s,F);if(G){var ee=et(G,I,F,S,C);if(ee)return{action:ee,interactable:I,element:F}}}return{action:null,interactable:null,element:null}}function nt(s,u,c,f,m){var S=[],C=[],M=f;function T(F){S.push(F),C.push(M)}for(;a.default.element(M);){S=[],C=[],m.interactables.forEachMatch(M,T);var I=it(s,u,c,S,C,f,m);if(I.action&&!I.interactable.options[I.action.name].manualStart)return I;M=k.parentNode(M)}return{action:null,interactable:null,element:null}}function rt(s,u,c){var f=u.action,m=u.interactable,S=u.element;f=f||{name:null},s.interactable=m,s.element=S,(0,ie.copyAction)(s.prepared,f),s.rect=m&&f.name?m.getRect(S):null,Ri(s,c),c.fire("autoStart:prepared",{interaction:s})}function ht(s,u,c,f){var m=s.options,S=m[c.name].max,C=m[c.name].maxPerElement,M=f.autoStart.maxInteractions,T=0,I=0,F=0;if(!(S&&C&&M))return!1;for(var G=0;G<f.interactions.list.length;G++){var ee=f.interactions.list[G],ce=ee.prepared.name;if(ee.interacting()&&(++T>=M||ee.interactable===s&&((I+=ce===c.name?1:0)>=S||ee.element===u&&(F++,ce===c.name&&F>=C))))return!1}return M>0}function sn(s,u){return a.default.number(s)?(u.autoStart.maxInteractions=s,this):u.autoStart.maxInteractions}function En(s,u,c){var f=c.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=u,s.style.cursor=u,c.autoStart.cursorElement=u?s:null}function Ri(s,u){var c=s.interactable,f=s.element,m=s.prepared;if(s.pointerType==="mouse"&&c&&c.options.styleCursor){var S="";if(m.name){var C=c.options[m.name].cursorChecker;S=a.default.func(C)?C(m,c,f,s._interacting):u.actions.map[m.name].getCursor(m)}En(s.element,S||"",u)}else u.autoStart.cursorElement&&En(u.autoStart.cursorElement,"",u)}Object.defineProperty(We,"__esModule",{value:!0}),We.default=void 0;var Bt={id:"auto-start/base",before:["actions"],install:function(s){var u=s.interactStatic,c=s.defaults;s.usePlugin(Y.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,W.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),u.maxInteractions=function(f){return sn(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:ht,cursorElement:null}},listeners:{"interactions:down":function(s,u){var c=s.interaction,f=s.pointer,m=s.event,S=s.eventTarget;c.interacting()||rt(c,nt(c,f,m,S,u),u)},"interactions:move":function(s,u){(function(c,f){var m=c.interaction,S=c.pointer,C=c.event,M=c.eventTarget;m.pointerType!=="mouse"||m.pointerIsDown||m.interacting()||rt(m,nt(m,S,C,M,f),f)})(s,u),function(c,f){var m=c.interaction;if(m.pointerIsDown&&!m.interacting()&&m.pointerWasMoved&&m.prepared.name){f.fire("autoStart:before-start",c);var S=m.interactable,C=m.prepared.name;C&&S&&(S.options[C].manualStart||!ht(S,m.element,m.prepared,f)?m.stop():(m.start(m.prepared,S,m.element),Ri(m,f)))}}(s,u)},"interactions:stop":function(s,u){var c=s.interaction,f=c.interactable;f&&f.options.styleCursor&&En(c.element,"",u)}},maxInteractions:sn,withinInteractionLimit:ht,validateAction:et},lt=Bt;We.default=lt;var cr={};Object.defineProperty(cr,"__esModule",{value:!0}),cr.default=void 0;var $t={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,u){var c=s.interaction,f=s.eventTarget,m=s.dx,S=s.dy;if(c.prepared.name==="drag"){var C=Math.abs(m),M=Math.abs(S),T=c.interactable.options.drag,I=T.startAxis,F=C>M?"x":C<M?"y":"xy";if(c.prepared.axis=T.lockAxis==="start"?F[0]:T.lockAxis,F!=="xy"&&I!=="xy"&&I!==F){c.prepared.name=null;for(var G=f,ee=function(K){if(K!==c.interactable){var ye=c.interactable.options.drag;if(!ye.manualStart&&K.testIgnoreAllow(ye,G,f)){var Pe=K.getAction(c.downPointer,c.downEvent,c,G);if(Pe&&Pe.name==="drag"&&function(xe,ke){if(!ke)return!1;var je=ke.options.drag.startAxis;return xe==="xy"||je==="xy"||je===xe}(F,K)&&We.default.validateAction(Pe,K,G,f,u))return K}}};a.default.element(G);){var ce=u.interactables.forEachMatch(G,ee);if(ce){c.prepared.name="drag",c.interactable=ce,c.element=G;break}G=(0,k.parentNode)(G)}}}}}};cr.default=$t;var ii={};function Io(s){var u=s.prepared&&s.prepared.name;if(!u)return null;var c=s.interactable.options;return c[u].hold||c[u].delay}Object.defineProperty(ii,"__esModule",{value:!0}),ii.default=void 0;var Xr={id:"auto-start/hold",install:function(s){var u=s.defaults;s.usePlugin(We.default),u.perAction.hold=0,u.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var u=s.interaction,c=Io(u);c>0&&(u.autoStartHoldTimer=setTimeout(function(){u.start(u.prepared,u.interactable,u.element)},c))},"interactions:move":function(s){var u=s.interaction,c=s.duplicate;u.autoStartHoldTimer&&u.pointerWasMoved&&!c&&(clearTimeout(u.autoStartHoldTimer),u.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var u=s.interaction;Io(u)>0&&(u.prepared.name=null)}},getHoldDuration:Io},Ys=Xr;ii.default=Ys;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.default=void 0;var Hi={id:"auto-start",install:function(s){s.usePlugin(We.default),s.usePlugin(ii.default),s.usePlugin(cr.default)}};Ht.default=Hi;var mi={};function Tn(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):a.default.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault}function Ks(s){var u=s.interaction,c=s.event;u.interactable&&u.interactable.checkAndPreventDefault(c)}function Tl(s){var u=s.Interactable;u.prototype.preventDefault=Tn,u.prototype.checkAndPreventDefault=function(c){return function(f,m,S){var C=f.options.preventDefault;if(C!=="never")if(C!=="always"){if(m.events.supportsPassive&&/^touch(start|move)$/.test(S.type)){var M=(0,i.getWindow)(S.target).document,T=m.getDocOptions(M);if(!T||!T.events||T.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(S.type)||a.default.element(S.target)&&(0,k.matchesSelector)(S.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||S.preventDefault()}else S.preventDefault()}(this,s,c)},s.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var f=0;f<s.interactions.list.length;f++){var m=s.interactions.list[f];if(m.element&&(m.element===c.target||(0,k.nodeContains)(m.element,c.target)))return void m.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(mi,"__esModule",{value:!0}),mi.default=void 0,mi.install=Tl;var Cl={id:"core/interactablePreventDefault",install:Tl,listeners:["down","move","up","cancel"].reduce(function(s,u){return s["interactions:".concat(u)]=Ks,s},{})};mi.default=Cl;var $c={};Object.defineProperty($c,"__esModule",{value:!0}),$c.default=void 0,$c.default={};var Zs,Pl={};Object.defineProperty(Pl,"__esModule",{value:!0}),Pl.default=void 0,function(s){s.touchAction="touchAction",s.boxSizing="boxSizing",s.noListeners="noListeners"}(Zs||(Zs={})),Zs.touchAction,Zs.boxSizing,Zs.noListeners;var p_={id:"dev-tools",install:function(){}};Pl.default=p_;var qr={};Object.defineProperty(qr,"__esModule",{value:!0}),qr.default=function s(u){var c={};for(var f in u){var m=u[f];a.default.plainObject(m)?c[f]=s(m):a.default.array(m)?c[f]=Xe.from(m):c[f]=m}return c};var $r={};function Wp(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var S,C,M=[],T=!0,I=!1;try{for(m=m.call(c);!(T=(S=m.next()).done)&&(M.push(S.value),!f||M.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return jp(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?jp(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function jp(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function m_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Yr(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty($r,"__esModule",{value:!0}),$r.default=void 0,$r.getRectOffset=Xp;var v_=function(){function s(f){(function(m,S){if(!(m instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),Yr(this,"states",[]),Yr(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Yr(this,"startDelta",void 0),Yr(this,"result",void 0),Yr(this,"endResult",void 0),Yr(this,"edges",void 0),Yr(this,"interaction",void 0),this.interaction=f,this.result=Al()}var u,c;return u=s,(c=[{key:"start",value:function(f,m){var S=f.phase,C=this.interaction,M=function(I){var F=I.interactable.options[I.prepared.name],G=F.modifiers;return G&&G.length?G:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var ce=F[ee];return ce&&ce.enabled&&{options:ce,methods:ce._methods}}).filter(function(ee){return!!ee})}(C);this.prepareStates(M),this.edges=(0,W.default)({},C.edges),this.startOffset=Xp(C.rect,m),this.startDelta={x:0,y:0};var T=this.fillArg({phase:S,pageCoords:m,preEnd:!1});return this.result=Al(),this.startAll(T),this.result=this.setAll(T)}},{key:"fillArg",value:function(f){var m=this.interaction;return f.interaction=m,f.interactable=m.interactable,f.element=m.element,f.rect=f.rect||m.rect,f.edges=this.edges,f.startOffset=this.startOffset,f}},{key:"startAll",value:function(f){for(var m=0;m<this.states.length;m++){var S=this.states[m];S.methods.start&&(f.state=S,S.methods.start(f))}}},{key:"setAll",value:function(f){var m=f.phase,S=f.preEnd,C=f.skipModifiers,M=f.rect;f.coords=(0,W.default)({},f.pageCoords),f.rect=(0,W.default)({},M);for(var T=C?this.states.slice(C):this.states,I=Al(f.coords,f.rect),F=0;F<T.length;F++){var G,ee=T[F],ce=ee.options,K=(0,W.default)({},f.coords),ye=null;(G=ee.methods)!=null&&G.set&&this.shouldDo(ce,S,m)&&(f.state=ee,ye=ee.methods.set(f),fe.addEdges(this.interaction.edges,f.rect,{x:f.coords.x-K.x,y:f.coords.y-K.y})),I.eventProps.push(ye)}I.delta.x=f.coords.x-f.pageCoords.x,I.delta.y=f.coords.y-f.pageCoords.y,I.rectDelta.left=f.rect.left-M.left,I.rectDelta.right=f.rect.right-M.right,I.rectDelta.top=f.rect.top-M.top,I.rectDelta.bottom=f.rect.bottom-M.bottom;var Pe=this.result.coords,xe=this.result.rect;if(Pe&&xe){var ke=I.rect.left!==xe.left||I.rect.right!==xe.right||I.rect.top!==xe.top||I.rect.bottom!==xe.bottom;I.changed=ke||Pe.x!==I.coords.x||Pe.y!==I.coords.y}return I}},{key:"applyToInteraction",value:function(f){var m=this.interaction,S=f.phase,C=m.coords.cur,M=m.coords.start,T=this.result,I=this.startDelta,F=T.delta;S==="start"&&(0,W.default)(this.startDelta,T.delta);for(var G=0;G<[[M,I],[C,F]].length;G++){var ee=Wp([[M,I],[C,F]][G],2),ce=ee[0],K=ee[1];ce.page.x+=K.x,ce.page.y+=K.y,ce.client.x+=K.x,ce.client.y+=K.y}var ye=this.result.rectDelta,Pe=f.rect||m.rect;Pe.left+=ye.left,Pe.right+=ye.right,Pe.top+=ye.top,Pe.bottom+=ye.bottom,Pe.width=Pe.right-Pe.left,Pe.height=Pe.bottom-Pe.top}},{key:"setAndApply",value:function(f){var m=this.interaction,S=f.phase,C=f.preEnd,M=f.skipModifiers,T=this.setAll(this.fillArg({preEnd:C,phase:S,pageCoords:f.modifiedCoords||m.coords.cur.page}));if(this.result=T,!T.changed&&(!M||M<this.states.length)&&m.interacting())return!1;if(f.modifiedCoords){var I=m.coords.cur.page,F={x:f.modifiedCoords.x-I.x,y:f.modifiedCoords.y-I.y};T.coords.x+=F.x,T.coords.y+=F.y,T.delta.x+=F.x,T.delta.y+=F.y}this.applyToInteraction(f)}},{key:"beforeEnd",value:function(f){var m=f.interaction,S=f.event,C=this.states;if(C&&C.length){for(var M=!1,T=0;T<C.length;T++){var I=C[T];f.state=I;var F=I.options,G=I.methods,ee=G.beforeEnd&&G.beforeEnd(f);if(ee)return this.endResult=ee,!1;M=M||!M&&this.shouldDo(F,!0,f.phase,!0)}M&&m.move({event:S,preEnd:!0})}}},{key:"stop",value:function(f){var m=f.interaction;if(this.states&&this.states.length){var S=(0,W.default)({states:this.states,interactable:m.interactable,element:m.element,rect:null},f);this.fillArg(S);for(var C=0;C<this.states.length;C++){var M=this.states[C];S.state=M,M.methods.stop&&M.methods.stop(S)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(f){this.states=[];for(var m=0;m<f.length;m++){var S=f[m],C=S.options,M=S.methods,T=S.name;this.states.push({options:C,methods:M,index:m,name:T})}return this.states}},{key:"restoreInteractionCoords",value:function(f){var m=f.interaction,S=m.coords,C=m.rect,M=m.modification;if(M.result){for(var T=M.startDelta,I=M.result,F=I.delta,G=I.rectDelta,ee=[[S.start,T],[S.cur,F]],ce=0;ce<ee.length;ce++){var K=Wp(ee[ce],2),ye=K[0],Pe=K[1];ye.page.x-=Pe.x,ye.page.y-=Pe.y,ye.client.x-=Pe.x,ye.client.y-=Pe.y}C.left-=G.left,C.right-=G.right,C.top-=G.top,C.bottom-=G.bottom}}},{key:"shouldDo",value:function(f,m,S,C){return!(!f||f.enabled===!1||C&&!f.endOnly||f.endOnly&&!m||S==="start"&&!f.setStart)}},{key:"copyFrom",value:function(f){this.startOffset=f.startOffset,this.startDelta=f.startDelta,this.edges=f.edges,this.states=f.states.map(function(m){return(0,qr.default)(m)}),this.result=Al((0,W.default)({},f.result.coords),(0,W.default)({},f.result.rect))}},{key:"destroy",value:function(){for(var f in this)this[f]=null}}])&&m_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Al(s,u){return{rect:u,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Xp(s,u){return s?{left:u.x-s.left,top:u.y-s.top,right:s.right-u.x,bottom:s.bottom-u.y}:{left:0,top:0,right:0,bottom:0}}$r.default=v_;var dn={};function Dl(s){var u=s.iEvent,c=s.interaction.modification.result;c&&(u.modifiers=c.eventProps)}Object.defineProperty(dn,"__esModule",{value:!0}),dn.addEventModifiers=Dl,dn.default=void 0,dn.makeModifier=function(s,u){var c=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},m=function(S){var C=S||{};for(var M in C.enabled=C.enabled!==!1,c)M in C||(C[M]=c[M]);var T={options:C,methods:f,name:u,enable:function(){return C.enabled=!0,T},disable:function(){return C.enabled=!1,T}};return T};return u&&typeof u=="string"&&(m._defaults=c,m._methods=f),m};var g_={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var u=s.interaction;u.modification=new $r.default(u)},"interactions:before-action-start":function(s){var u=s.interaction.modification;u.start(s,s.interaction.coords.start.page),s.interaction.edges=u.edges,u.applyToInteraction(s)},"interactions:before-action-move":function(s){return s.interaction.modification.setAndApply(s)},"interactions:before-action-end":function(s){return s.interaction.modification.beforeEnd(s)},"interactions:action-start":Dl,"interactions:action-move":Dl,"interactions:action-end":Dl,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},y_=g_;dn.default=y_;var Qs={};Object.defineProperty(Qs,"__esModule",{value:!0}),Qs.defaults=void 0,Qs.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var Js={};function Yc(s){return Yc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Yc(s)}function x_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Kc(s,u){return Kc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},Kc(s,u)}function __(s,u){if(u&&(Yc(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mt(s)}function Mt(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Rl(s){return Rl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Rl(s)}function At(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Js,"__esModule",{value:!0}),Js.InteractEvent=void 0;var qp=function(s){(function(M,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(T&&T.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),T&&Kc(M,T)})(C,s);var u,c,f,m,S=(f=C,m=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,T=Rl(f);if(m){var I=Rl(this).constructor;M=Reflect.construct(T,arguments,I)}else M=T.apply(this,arguments);return __(this,M)});function C(M,T,I,F,G,ee,ce){var K;(function(Tt,ut){if(!(Tt instanceof ut))throw new TypeError("Cannot call a class as a function")})(this,C),At(Mt(K=S.call(this,M)),"relatedTarget",null),At(Mt(K),"screenX",void 0),At(Mt(K),"screenY",void 0),At(Mt(K),"button",void 0),At(Mt(K),"buttons",void 0),At(Mt(K),"ctrlKey",void 0),At(Mt(K),"shiftKey",void 0),At(Mt(K),"altKey",void 0),At(Mt(K),"metaKey",void 0),At(Mt(K),"page",void 0),At(Mt(K),"client",void 0),At(Mt(K),"delta",void 0),At(Mt(K),"rect",void 0),At(Mt(K),"x0",void 0),At(Mt(K),"y0",void 0),At(Mt(K),"t0",void 0),At(Mt(K),"dt",void 0),At(Mt(K),"duration",void 0),At(Mt(K),"clientX0",void 0),At(Mt(K),"clientY0",void 0),At(Mt(K),"velocity",void 0),At(Mt(K),"speed",void 0),At(Mt(K),"swipe",void 0),At(Mt(K),"axes",void 0),At(Mt(K),"preEnd",void 0),G=G||M.element;var ye=M.interactable,Pe=(ye&&ye.options||Qs.defaults).deltaSource,xe=(0,J.default)(ye,G,I),ke=F==="start",je=F==="end",tt=ke?Mt(K):M.prevEvent,gt=ke?M.coords.start:je?{page:tt.page,client:tt.client,timeStamp:M.coords.cur.timeStamp}:M.coords.cur;return K.page=(0,W.default)({},gt.page),K.client=(0,W.default)({},gt.client),K.rect=(0,W.default)({},M.rect),K.timeStamp=gt.timeStamp,je||(K.page.x-=xe.x,K.page.y-=xe.y,K.client.x-=xe.x,K.client.y-=xe.y),K.ctrlKey=T.ctrlKey,K.altKey=T.altKey,K.shiftKey=T.shiftKey,K.metaKey=T.metaKey,K.button=T.button,K.buttons=T.buttons,K.target=G,K.currentTarget=G,K.preEnd=ee,K.type=ce||I+(F||""),K.interactable=ye,K.t0=ke?M.pointers[M.pointers.length-1].downTime:tt.t0,K.x0=M.coords.start.page.x-xe.x,K.y0=M.coords.start.page.y-xe.y,K.clientX0=M.coords.start.client.x-xe.x,K.clientY0=M.coords.start.client.y-xe.y,K.delta=ke||je?{x:0,y:0}:{x:K[Pe].x-tt[Pe].x,y:K[Pe].y-tt[Pe].y},K.dt=M.coords.delta.timeStamp,K.duration=K.timeStamp-K.t0,K.velocity=(0,W.default)({},M.coords.velocity[Pe]),K.speed=(0,ve.default)(K.velocity.x,K.velocity.y),K.swipe=je||F==="inertiastart"?K.getSwipe():null,K}return u=C,(c=[{key:"getSwipe",value:function(){var M=this._interaction;if(M.prevEvent.speed<600||this.timeStamp-M.prevEvent.timeStamp>150)return null;var T=180*Math.atan2(M.prevEvent.velocityY,M.prevEvent.velocityX)/Math.PI;T<0&&(T+=360);var I=112.5<=T&&T<247.5,F=202.5<=T&&T<337.5;return{up:F,down:!F&&22.5<=T&&T<157.5,left:I,right:!I&&(292.5<=T||T<67.5),angle:T,speed:M.prevEvent.speed,velocity:{x:M.prevEvent.velocityX,y:M.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&x_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Be.BaseEvent);Js.InteractEvent=qp,Object.defineProperties(qp.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var ea={};function $p(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function S_(s,u,c){return u&&$p(s.prototype,u),c&&$p(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function ta(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(ea,"__esModule",{value:!0}),ea.PointerInfo=void 0;var M_=S_(function s(u,c,f,m,S){(function(C,M){if(!(C instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),ta(this,"id",void 0),ta(this,"pointer",void 0),ta(this,"event",void 0),ta(this,"downTime",void 0),ta(this,"downTarget",void 0),this.id=u,this.pointer=c,this.event=f,this.downTime=m,this.downTarget=S});ea.PointerInfo=M_;var Ll,Il,Nn={};function w_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Ut(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.Interaction=void 0,Object.defineProperty(Nn,"PointerInfo",{enumerable:!0,get:function(){return ea.PointerInfo}}),Nn.default=Nn._ProxyValues=Nn._ProxyMethods=void 0,Nn._ProxyValues=Ll,function(s){s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy=""}(Ll||(Nn._ProxyValues=Ll={})),Nn._ProxyMethods=Il,function(s){s.start="",s.move="",s.end="",s.stop="",s.interacting=""}(Il||(Nn._ProxyMethods=Il={}));var b_=0,Yp=function(){function s(f){var m=this,S=f.pointerType,C=f.scopeFire;(function(ee,ce){if(!(ee instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,s),Ut(this,"interactable",null),Ut(this,"element",null),Ut(this,"rect",null),Ut(this,"_rects",void 0),Ut(this,"edges",null),Ut(this,"_scopeFire",void 0),Ut(this,"prepared",{name:null,axis:null,edges:null}),Ut(this,"pointerType",void 0),Ut(this,"pointers",[]),Ut(this,"downEvent",null),Ut(this,"downPointer",{}),Ut(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Ut(this,"prevEvent",null),Ut(this,"pointerIsDown",!1),Ut(this,"pointerWasMoved",!1),Ut(this,"_interacting",!1),Ut(this,"_ending",!1),Ut(this,"_stopped",!0),Ut(this,"_proxy",null),Ut(this,"simulation",null),Ut(this,"doMove",(0,ie.warnOnce)(function(ee){this.move(ee)},"The interaction.doMove() method has been renamed to interaction.move()")),Ut(this,"coords",{start:q.newCoords(),prev:q.newCoords(),cur:q.newCoords(),delta:q.newCoords(),velocity:q.newCoords()}),Ut(this,"_id",b_++),this._scopeFire=C,this.pointerType=S;var M=this;this._proxy={};var T=function(ee){Object.defineProperty(m._proxy,ee,{get:function(){return M[ee]}})};for(var I in Ll)T(I);var F=function(ee){Object.defineProperty(m._proxy,ee,{value:function(){return M[ee].apply(M,arguments)}})};for(var G in Il)F(G);this._scopeFire("interactions:new",{interaction:this})}var u,c;return u=s,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(f,m,S){var C=this.updatePointer(f,m,S,!0),M=this.pointers[C];this._scopeFire("interactions:down",{pointer:f,event:m,eventTarget:S,pointerIndex:C,pointerInfo:M,type:"down",interaction:this})}},{key:"start",value:function(f,m,S){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(f.name==="gesture"?2:1)||!m.options[f.name].enabled)&&((0,ie.copyAction)(this.prepared,f),this.interactable=m,this.element=S,this.rect=m.getRect(S),this.edges=this.prepared.edges?(0,W.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(f,m,S){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(f,m,S,!1);var C,M,T=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(C=this.coords.cur.client.x-this.coords.start.client.x,M=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ve.default)(C,M)>this.pointerMoveTolerance);var I=this.getPointerIndex(f),F={pointer:f,pointerIndex:I,pointerInfo:this.pointers[I],event:m,type:"move",eventTarget:S,dx:C,dy:M,duplicate:T,interaction:this};T||q.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",F),T||this.simulation||(this.interacting()&&(F.type=null,this.move(F)),this.pointerWasMoved&&q.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(f){f&&f.event||q.setZeroCoords(this.coords.delta),(f=(0,W.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},f||{})).phase="move",this._doPhase(f)}},{key:"pointerUp",value:function(f,m,S,C){var M=this.getPointerIndex(f);M===-1&&(M=this.updatePointer(f,m,S,!1));var T=/cancel$/i.test(m.type)?"cancel":"up";this._scopeFire("interactions:".concat(T),{pointer:f,pointerIndex:M,pointerInfo:this.pointers[M],event:m,eventTarget:S,type:T,curEventTarget:C,interaction:this}),this.simulation||this.end(m),this.removePointer(f,m)}},{key:"documentBlur",value:function(f){this.end(f),this._scopeFire("interactions:blur",{event:f,type:"blur",interaction:this})}},{key:"end",value:function(f){var m;this._ending=!0,f=f||this._latestPointer.event,this.interacting()&&(m=this._doPhase({event:f,interaction:this,phase:"end"})),this._ending=!1,m===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(f){var m=q.getPointerId(f);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Xe.findIndex(this.pointers,function(S){return S.id===m})}},{key:"getPointerInfo",value:function(f){return this.pointers[this.getPointerIndex(f)]}},{key:"updatePointer",value:function(f,m,S,C){var M=q.getPointerId(f),T=this.getPointerIndex(f),I=this.pointers[T];return C=C!==!1&&(C||/(down|start)$/i.test(m.type)),I?I.pointer=f:(I=new ea.PointerInfo(M,f,m,null,null),T=this.pointers.length,this.pointers.push(I)),q.setCoords(this.coords.cur,this.pointers.map(function(F){return F.pointer}),this._now()),q.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),C&&(this.pointerIsDown=!0,I.downTime=this.coords.cur.timeStamp,I.downTarget=S,q.pointerExtend(this.downPointer,f),this.interacting()||(q.copyCoords(this.coords.start,this.coords.cur),q.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=m,this.pointerWasMoved=!1)),this._updateLatestPointer(f,m,S),this._scopeFire("interactions:update-pointer",{pointer:f,event:m,eventTarget:S,down:C,pointerInfo:I,pointerIndex:T,interaction:this}),T}},{key:"removePointer",value:function(f,m){var S=this.getPointerIndex(f);if(S!==-1){var C=this.pointers[S];this._scopeFire("interactions:remove-pointer",{pointer:f,event:m,eventTarget:null,pointerIndex:S,pointerInfo:C,interaction:this}),this.pointers.splice(S,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(f,m,S){this._latestPointer.pointer=f,this._latestPointer.event=m,this._latestPointer.eventTarget=S}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(f,m,S,C){return new Js.InteractEvent(this,f,this.prepared.name,m,this.element,S,C)}},{key:"_fireEvent",value:function(f){var m;(m=this.interactable)==null||m.fire(f),(!this.prevEvent||f.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=f)}},{key:"_doPhase",value:function(f){var m=f.event,S=f.phase,C=f.preEnd,M=f.type,T=this.rect;if(T&&S==="move"&&(fe.addEdges(this.edges,T,this.coords.delta[this.interactable.options.deltaSource]),T.width=T.right-T.left,T.height=T.bottom-T.top),this._scopeFire("interactions:before-action-".concat(S),f)===!1)return!1;var I=f.iEvent=this._createPreparedEvent(m,S,C,M);return this._scopeFire("interactions:action-".concat(S),f),S==="start"&&(this.prevEvent=I),this._fireEvent(I),this._scopeFire("interactions:after-action-".concat(S),f),!0}},{key:"_now",value:function(){return Date.now()}}],c&&w_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Nn.Interaction=Yp;var E_=Yp;Nn.default=E_;var fr={};function Kp(s){s.pointerIsDown&&(Qc(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}function Zp(s){Zc(s.interaction)}function Zc(s){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(s))return!1;var u=s.offset.pending;return Qc(s.coords.cur,u),Qc(s.coords.delta,u),fe.addEdges(s.edges,s.rect,u),u.x=0,u.y=0,!0}function T_(s){var u=s.x,c=s.y;this.offset.pending.x+=u,this.offset.pending.y+=c,this.offset.total.x+=u,this.offset.total.y+=c}function Qc(s,u){var c=s.page,f=s.client,m=u.x,S=u.y;c.x+=m,c.y+=S,f.x+=m,f.y+=S}Object.defineProperty(fr,"__esModule",{value:!0}),fr.addTotal=Kp,fr.applyPending=Zc,fr.default=void 0,Nn._ProxyMethods.offsetBy="";var C_={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=T_},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return Kp(s.interaction)},"interactions:before-action-start":Zp,"interactions:before-action-move":Zp,"interactions:before-action-end":function(s){var u=s.interaction;if(Zc(u))return u.move({offset:!0}),u.end(),!1},"interactions:stop":function(s){var u=s.interaction;u.offset.total.x=0,u.offset.total.y=0,u.offset.pending.x=0,u.offset.pending.y=0}}},P_=C_;fr.default=P_;var Kr={};function A_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function an(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.default=Kr.InertiaState=void 0;var Qp=function(){function s(f){(function(m,S){if(!(m instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),an(this,"active",!1),an(this,"isModified",!1),an(this,"smoothEnd",!1),an(this,"allowResume",!1),an(this,"modification",void 0),an(this,"modifierCount",0),an(this,"modifierArg",void 0),an(this,"startCoords",void 0),an(this,"t0",0),an(this,"v0",0),an(this,"te",0),an(this,"targetOffset",void 0),an(this,"modifiedOffset",void 0),an(this,"currentOffset",void 0),an(this,"lambda_v0",0),an(this,"one_ve_v0",0),an(this,"timeout",void 0),an(this,"interaction",void 0),this.interaction=f}var u,c;return u=s,(c=[{key:"start",value:function(f){var m=this.interaction,S=Ol(m);if(!S||!S.enabled)return!1;var C=m.coords.velocity.client,M=(0,ve.default)(C.x,C.y),T=this.modification||(this.modification=new $r.default(m));if(T.copyFrom(m.modification),this.t0=m._now(),this.allowResume=S.allowResume,this.v0=M,this.currentOffset={x:0,y:0},this.startCoords=m.coords.cur.page,this.modifierArg=T.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-m.coords.cur.timeStamp<50&&M>S.minSpeed&&M>S.endSpeed)this.startInertia();else{if(T.result=T.setAll(this.modifierArg),!T.result.changed)return!1;this.startSmoothEnd()}return m.modification.result.rect=null,m.offsetBy(this.targetOffset),m._doPhase({interaction:m,event:f,phase:"inertiastart"}),m.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),m.modification.result.rect=null,this.active=!0,m.simulation=this,!0}},{key:"startInertia",value:function(){var f=this,m=this.interaction.coords.velocity.client,S=Ol(this.interaction),C=S.resistance,M=-Math.log(S.endSpeed/this.v0)/C;this.targetOffset={x:(m.x-M)/C,y:(m.y-M)/C},this.te=M,this.lambda_v0=C/this.v0,this.one_ve_v0=1-S.endSpeed/this.v0;var T=this.modification,I=this.modifierArg;I.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},T.result=T.setAll(I),T.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+T.result.delta.x,y:this.targetOffset.y+T.result.delta.y}),this.onNextFrame(function(){return f.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var f=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return f.smoothEndTick()})}},{key:"onNextFrame",value:function(f){var m=this;this.timeout=Xt.default.request(function(){m.active&&f()})}},{key:"inertiaTick",value:function(){var f,m,S,C,M,T=this,I=this.interaction,F=Ol(I).resistance,G=(I._now()-this.t0)/1e3;if(G<this.te){var ee,ce=1-(Math.exp(-F*G)-this.lambda_v0)/this.one_ve_v0;this.isModified?(f=this.targetOffset.x,m=this.targetOffset.y,S=this.modifiedOffset.x,C=this.modifiedOffset.y,ee={x:Jp(M=ce,0,f,S),y:Jp(M,0,m,C)}):ee={x:this.targetOffset.x*ce,y:this.targetOffset.y*ce};var K={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=K.x,this.currentOffset.y+=K.y,I.offsetBy(K),I.move(),this.onNextFrame(function(){return T.inertiaTick()})}else I.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var f=this,m=this.interaction,S=m._now()-this.t0,C=Ol(m).smoothEndDuration;if(S<C){var M={x:em(S,0,this.targetOffset.x,C),y:em(S,0,this.targetOffset.y,C)},T={x:M.x-this.currentOffset.x,y:M.y-this.currentOffset.y};this.currentOffset.x+=T.x,this.currentOffset.y+=T.y,m.offsetBy(T),m.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return f.smoothEndTick()})}else m.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(f){var m=f.pointer,S=f.event,C=f.eventTarget,M=this.interaction;M.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),M.updatePointer(m,S,C,!0),M._doPhase({interaction:M,event:S,phase:"resume"}),(0,q.copyCoords)(M.coords.prev,M.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Xt.default.cancel(this.timeout)}}])&&A_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Ol(s){var u=s.interactable,c=s.prepared;return u&&u.options&&c.name&&u.options[c.name].inertia}Kr.InertiaState=Qp;var D_={id:"inertia",before:["modifiers","actions"],install:function(s){var u=s.defaults;s.usePlugin(fr.default),s.usePlugin(dn.default),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,u.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var u=s.interaction;u.inertia=new Qp(u)},"interactions:before-action-end":function(s){var u=s.interaction,c=s.event;return(!u._interacting||u.simulation||!u.inertia.start(c))&&null},"interactions:down":function(s){var u=s.interaction,c=s.eventTarget,f=u.inertia;if(f.active)for(var m=c;a.default.element(m);){if(m===u.element){f.resume(s);break}m=k.parentNode(m)}},"interactions:stop":function(s){var u=s.interaction.inertia;u.active&&u.stop()},"interactions:before-action-resume":function(s){var u=s.interaction.modification;u.stop(s),u.start(s,s.interaction.coords.cur.page),u.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":dn.addEventModifiers,"interactions:action-inertiastart":dn.addEventModifiers,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function Jp(s,u,c,f){var m=1-s;return m*m*u+2*m*s*c+s*s*f}function em(s,u,c,f){return-c*(s/=f)*(s-2)+u}var R_=D_;Kr.default=R_;var na={};function L_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function ia(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function tm(s,u){for(var c=0;c<u.length;c++){var f=u[c];if(s.immediatePropagationStopped)break;f(s)}}Object.defineProperty(na,"__esModule",{value:!0}),na.Eventable=void 0;var I_=function(){function s(f){(function(m,S){if(!(m instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),ia(this,"options",void 0),ia(this,"types",{}),ia(this,"propagationStopped",!1),ia(this,"immediatePropagationStopped",!1),ia(this,"global",void 0),this.options=(0,W.default)({},f||{})}var u,c;return u=s,(c=[{key:"fire",value:function(f){var m,S=this.global;(m=this.types[f.type])&&tm(f,m),!f.propagationStopped&&S&&(m=S[f.type])&&tm(f,m)}},{key:"on",value:function(f,m){var S=(0,re.default)(f,m);for(f in S)this.types[f]=Xe.merge(this.types[f]||[],S[f])}},{key:"off",value:function(f,m){var S=(0,re.default)(f,m);for(f in S){var C=this.types[f];if(C&&C.length)for(var M=0;M<S[f].length;M++){var T=S[f][M],I=C.indexOf(T);I!==-1&&C.splice(I,1)}}}},{key:"getRect",value:function(f){return null}}])&&L_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();na.Eventable=I_;var ra={};Object.defineProperty(ra,"__esModule",{value:!0}),ra.default=function(s,u){if(u.phaselessTypes[s])return!0;for(var c in u.map)if(s.indexOf(c)===0&&s.substr(c.length)in u.phases)return!0;return!1};var Jc={};Object.defineProperty(Jc,"__esModule",{value:!0}),Jc.createInteractStatic=function(s){var u=function c(f,m){var S=s.interactables.get(f,m);return S||((S=s.interactables.new(f,m)).events.global=c.globalEvents),S};return u.getPointerAverage=q.pointerAverage,u.getTouchBBox=q.touchBBox,u.getTouchDistance=q.touchDistance,u.getTouchAngle=q.touchAngle,u.getElementRect=k.getElementRect,u.getElementClientRect=k.getElementClientRect,u.matchesSelector=k.matchesSelector,u.closest=k.closest,u.globalEvents={},u.version="1.10.17",u.scope=s,u.use=function(c,f){return this.scope.usePlugin(c,f),this},u.isSet=function(c,f){return!!this.scope.interactables.get(c,f&&f.context)},u.on=(0,ie.warnOnce)(function(c,f,m){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var S=0;S<c.length;S++){var C=c[S];this.on(C,f,m)}return this}if(a.default.object(c)){for(var M in c)this.on(M,c[M],f);return this}return(0,ra.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(f):this.globalEvents[c]=[f]:this.scope.events.add(this.scope.document,c,f,{options:m}),this},"The interact.on() method is being deprecated"),u.off=(0,ie.warnOnce)(function(c,f,m){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var S=0;S<c.length;S++){var C=c[S];this.off(C,f,m)}return this}if(a.default.object(c)){for(var M in c)this.off(M,c[M],f);return this}var T;return(0,ra.default)(c,this.scope.actions)?c in this.globalEvents&&(T=this.globalEvents[c].indexOf(f))!==-1&&this.globalEvents[c].splice(T,1):this.scope.events.remove(this.scope.document,c,f,m),this},"The interact.off() method is being deprecated"),u.debug=function(){return this.scope},u.supportsTouch=function(){return D.default.supportsTouch},u.supportsPointerEvent=function(){return D.default.supportsPointerEvent},u.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},u.pointerMoveTolerance=function(c){return a.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},u.addDocument=function(c,f){this.scope.addDocument(c,f)},u.removeDocument=function(c){this.scope.removeDocument(c)},u};var Nl={};function O_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Wi(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.Interactable=void 0;var N_=function(){function s(f,m,S,C){(function(M,T){if(!(M instanceof T))throw new TypeError("Cannot call a class as a function")})(this,s),Wi(this,"options",void 0),Wi(this,"_actions",void 0),Wi(this,"target",void 0),Wi(this,"events",new na.Eventable),Wi(this,"_context",void 0),Wi(this,"_win",void 0),Wi(this,"_doc",void 0),Wi(this,"_scopeEvents",void 0),Wi(this,"_rectChecker",void 0),this._actions=m.actions,this.target=f,this._context=m.context||S,this._win=(0,i.getWindow)((0,k.trySelector)(f)?this._context:f),this._doc=this._win.document,this._scopeEvents=C,this.set(m)}var u,c;return u=s,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(f,m){return a.default.func(m.onstart)&&this.on("".concat(f,"start"),m.onstart),a.default.func(m.onmove)&&this.on("".concat(f,"move"),m.onmove),a.default.func(m.onend)&&this.on("".concat(f,"end"),m.onend),a.default.func(m.oninertiastart)&&this.on("".concat(f,"inertiastart"),m.oninertiastart),this}},{key:"updatePerActionListeners",value:function(f,m,S){(a.default.array(m)||a.default.object(m))&&this.off(f,m),(a.default.array(S)||a.default.object(S))&&this.on(f,S)}},{key:"setPerAction",value:function(f,m){var S=this._defaults;for(var C in m){var M=C,T=this.options[f],I=m[M];M==="listeners"&&this.updatePerActionListeners(f,T.listeners,I),a.default.array(I)?T[M]=Xe.from(I):a.default.plainObject(I)?(T[M]=(0,W.default)(T[M]||{},(0,qr.default)(I)),a.default.object(S.perAction[M])&&"enabled"in S.perAction[M]&&(T[M].enabled=I.enabled!==!1)):a.default.bool(I)&&a.default.object(S.perAction[M])?T[M].enabled=I:T[M]=I}}},{key:"getRect",value:function(f){return f=f||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(f=f||this._context.querySelector(this.target)),(0,k.getElementRect)(f)}},{key:"rectChecker",value:function(f){var m=this;return a.default.func(f)?(this._rectChecker=f,this.getRect=function(S){var C=(0,W.default)({},m._rectChecker(S));return"width"in C||(C.width=C.right-C.left,C.height=C.bottom-C.top),C},this):f===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(f,m){if((0,k.trySelector)(m)||a.default.object(m)){for(var S in this.options[f]=m,this._actions.map)this.options[S][f]=m;return this}return this.options[f]}},{key:"origin",value:function(f){return this._backCompatOption("origin",f)}},{key:"deltaSource",value:function(f){return f==="page"||f==="client"?(this.options.deltaSource=f,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(f){return this._context===f.ownerDocument||(0,k.nodeContains)(this._context,f)}},{key:"testIgnoreAllow",value:function(f,m,S){return!this.testIgnore(f.ignoreFrom,m,S)&&this.testAllow(f.allowFrom,m,S)}},{key:"testAllow",value:function(f,m,S){return!f||!!a.default.element(S)&&(a.default.string(f)?(0,k.matchesUpTo)(S,f,m):!!a.default.element(f)&&(0,k.nodeContains)(f,S))}},{key:"testIgnore",value:function(f,m,S){return!(!f||!a.default.element(S))&&(a.default.string(f)?(0,k.matchesUpTo)(S,f,m):!!a.default.element(f)&&(0,k.nodeContains)(f,S))}},{key:"fire",value:function(f){return this.events.fire(f),this}},{key:"_onOff",value:function(f,m,S,C){a.default.object(m)&&!a.default.array(m)&&(C=S,S=null);var M=f==="on"?"add":"remove",T=(0,re.default)(m,S);for(var I in T){I==="wheel"&&(I=D.default.wheelEvent);for(var F=0;F<T[I].length;F++){var G=T[I][F];(0,ra.default)(I,this._actions)?this.events[f](I,G):a.default.string(this.target)?this._scopeEvents["".concat(M,"Delegate")](this.target,this._context,I,G,C):this._scopeEvents[M](this.target,I,G,C)}}return this}},{key:"on",value:function(f,m,S){return this._onOff("on",f,m,S)}},{key:"off",value:function(f,m,S){return this._onOff("off",f,m,S)}},{key:"set",value:function(f){var m=this._defaults;for(var S in a.default.object(f)||(f={}),this.options=(0,qr.default)(m.base),this._actions.methodDict){var C=S,M=this._actions.methodDict[C];this.options[C]={},this.setPerAction(C,(0,W.default)((0,W.default)({},m.perAction),m.actions[C])),this[M](f[C])}for(var T in f)a.default.func(this[T])&&this[T](f[T]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var f in this._scopeEvents.delegatedEvents)for(var m=this._scopeEvents.delegatedEvents[f],S=m.length-1;S>=0;S--){var C=m[S],M=C.selector,T=C.context,I=C.listeners;M===this.target&&T===this._context&&m.splice(S,1);for(var F=I.length-1;F>=0;F--)this._scopeEvents.removeDelegate(this.target,this._context,f,I[F][0],I[F][1])}else this._scopeEvents.remove(this.target,"all")}}])&&O_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Nl.Interactable=N_;var Ul={};function U_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function ef(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Ul,"__esModule",{value:!0}),Ul.InteractableSet=void 0;var k_=function(){function s(f){var m=this;(function(S,C){if(!(S instanceof C))throw new TypeError("Cannot call a class as a function")})(this,s),ef(this,"list",[]),ef(this,"selectorMap",{}),ef(this,"scope",void 0),this.scope=f,f.addListeners({"interactable:unset":function(S){var C=S.interactable,M=C.target,T=C._context,I=a.default.string(M)?m.selectorMap[M]:M[m.scope.id],F=Xe.findIndex(I,function(G){return G.context===T});I[F]&&(I[F].context=null,I[F].interactable=null),I.splice(F,1)}})}var u,c;return u=s,(c=[{key:"new",value:function(f,m){m=(0,W.default)(m||{},{actions:this.scope.actions});var S=new this.scope.Interactable(f,m,this.scope.document,this.scope.events),C={context:S._context,interactable:S};return this.scope.addDocument(S._doc),this.list.push(S),a.default.string(f)?(this.selectorMap[f]||(this.selectorMap[f]=[]),this.selectorMap[f].push(C)):(S.target[this.scope.id]||Object.defineProperty(f,this.scope.id,{value:[],configurable:!0}),f[this.scope.id].push(C)),this.scope.fire("interactable:new",{target:f,options:m,interactable:S,win:this.scope._win}),S}},{key:"get",value:function(f,m){var S=m&&m.context||this.scope.document,C=a.default.string(f),M=C?this.selectorMap[f]:f[this.scope.id];if(!M)return null;var T=Xe.find(M,function(I){return I.context===S&&(C||I.interactable.inContext(f))});return T&&T.interactable}},{key:"forEachMatch",value:function(f,m){for(var S=0;S<this.list.length;S++){var C=this.list[S],M=void 0;if((a.default.string(C.target)?a.default.element(f)&&k.matchesSelector(f,C.target):f===C.target)&&C.inContext(f)&&(M=m(C)),M!==void 0)return M}}}])&&U_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Ul.InteractableSet=k_;var kl={};function z_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function tf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function nf(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var S,C,M=[],T=!0,I=!1;try{for(m=m.call(c);!(T=(S=m.next()).done)&&(M.push(S.value),!f||M.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return nm(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?nm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function nm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(kl,"__esModule",{value:!0}),kl.default=void 0;var F_=function(){function s(f){(function(m,S){if(!(m instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),tf(this,"currentTarget",void 0),tf(this,"originalEvent",void 0),tf(this,"type",void 0),this.originalEvent=f,(0,oe.default)(this,f)}var u,c;return u=s,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&z_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function oa(s){if(!a.default.object(s))return{capture:!!s,passive:!1};var u=(0,W.default)({},s);return u.capture=!!s.capture,u.passive=!!s.passive,u}var B_={id:"events",install:function(s){var u,c=[],f={},m=[],S={add:C,remove:M,addDelegate:function(F,G,ee,ce,K){var ye=oa(K);if(!f[ee]){f[ee]=[];for(var Pe=0;Pe<m.length;Pe++){var xe=m[Pe];C(xe,ee,T),C(xe,ee,I,!0)}}var ke=f[ee],je=Xe.find(ke,function(tt){return tt.selector===F&&tt.context===G});je||(je={selector:F,context:G,listeners:[]},ke.push(je)),je.listeners.push([ce,ye])},removeDelegate:function(F,G,ee,ce,K){var ye,Pe=oa(K),xe=f[ee],ke=!1;if(xe)for(ye=xe.length-1;ye>=0;ye--){var je=xe[ye];if(je.selector===F&&je.context===G){for(var tt=je.listeners,gt=tt.length-1;gt>=0;gt--){var Tt=nf(tt[gt],2),ut=Tt[0],wt=Tt[1],oi=wt.capture,Xi=wt.passive;if(ut===ce&&oi===Pe.capture&&Xi===Pe.passive){tt.splice(gt,1),tt.length||(xe.splice(ye,1),M(G,ee,T),M(G,ee,I,!0)),ke=!0;break}}if(ke)break}}},delegateListener:T,delegateUseCapture:I,delegatedEvents:f,documents:m,targets:c,supportsOptions:!1,supportsPassive:!1};function C(F,G,ee,ce){var K=oa(ce),ye=Xe.find(c,function(Pe){return Pe.eventTarget===F});ye||(ye={eventTarget:F,events:{}},c.push(ye)),ye.events[G]||(ye.events[G]=[]),F.addEventListener&&!Xe.contains(ye.events[G],ee)&&(F.addEventListener(G,ee,S.supportsOptions?K:K.capture),ye.events[G].push(ee))}function M(F,G,ee,ce){var K=oa(ce),ye=Xe.findIndex(c,function(gt){return gt.eventTarget===F}),Pe=c[ye];if(Pe&&Pe.events)if(G!=="all"){var xe=!1,ke=Pe.events[G];if(ke){if(ee==="all"){for(var je=ke.length-1;je>=0;je--)M(F,G,ke[je],K);return}for(var tt=0;tt<ke.length;tt++)if(ke[tt]===ee){F.removeEventListener(G,ee,S.supportsOptions?K:K.capture),ke.splice(tt,1),ke.length===0&&(delete Pe.events[G],xe=!0);break}}xe&&!Object.keys(Pe.events).length&&c.splice(ye,1)}else for(G in Pe.events)Pe.events.hasOwnProperty(G)&&M(F,G,"all")}function T(F,G){for(var ee=oa(G),ce=new F_(F),K=f[F.type],ye=nf(q.getEventTargets(F),1)[0],Pe=ye;a.default.element(Pe);){for(var xe=0;xe<K.length;xe++){var ke=K[xe],je=ke.selector,tt=ke.context;if(k.matchesSelector(Pe,je)&&k.nodeContains(tt,ye)&&k.nodeContains(tt,Pe)){var gt=ke.listeners;ce.currentTarget=Pe;for(var Tt=0;Tt<gt.length;Tt++){var ut=nf(gt[Tt],2),wt=ut[0],oi=ut[1],Xi=oi.capture,Mf=oi.passive;Xi===ee.capture&&Mf===ee.passive&&wt(ce)}}}Pe=k.parentNode(Pe)}}function I(F){return T(F,!0)}return(u=s.document)==null||u.createElement("div").addEventListener("test",null,{get capture(){return S.supportsOptions=!0},get passive(){return S.supportsPassive=!0}}),s.events=S,S}};kl.default=B_;var zl={};Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=void 0;var Fl={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var u=0;u<Fl.methodOrder.length;u++){var c;c=Fl.methodOrder[u];var f=Fl[c](s);if(f)return f}return null},simulationResume:function(s){var u=s.pointerType,c=s.eventType,f=s.eventTarget,m=s.scope;if(!/down|start/i.test(c))return null;for(var S=0;S<m.interactions.list.length;S++){var C=m.interactions.list[S],M=f;if(C.simulation&&C.simulation.allowResume&&C.pointerType===u)for(;M;){if(M===C.element)return C;M=k.parentNode(M)}}return null},mouseOrPen:function(s){var u,c=s.pointerId,f=s.pointerType,m=s.eventType,S=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var C=0;C<S.interactions.list.length;C++){var M=S.interactions.list[C];if(M.pointerType===f){if(M.simulation&&!im(M,c))continue;if(M.interacting())return M;u||(u=M)}}if(u)return u;for(var T=0;T<S.interactions.list.length;T++){var I=S.interactions.list[T];if(!(I.pointerType!==f||/down/i.test(m)&&I.simulation))return I}return null},hasPointer:function(s){for(var u=s.pointerId,c=s.scope,f=0;f<c.interactions.list.length;f++){var m=c.interactions.list[f];if(im(m,u))return m}return null},idle:function(s){for(var u=s.pointerType,c=s.scope,f=0;f<c.interactions.list.length;f++){var m=c.interactions.list[f];if(m.pointers.length===1){var S=m.interactable;if(S&&(!S.options.gesture||!S.options.gesture.enabled))continue}else if(m.pointers.length>=2)continue;if(!m.interacting()&&u===m.pointerType)return m}return null}};function im(s,u){return s.pointers.some(function(c){return c.id===u})}var V_=Fl;zl.default=V_;var Bl={};function rf(s){return rf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},rf(s)}function rm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var S,C,M=[],T=!0,I=!1;try{for(m=m.call(c);!(T=(S=m.next()).done)&&(M.push(S.value),!f||M.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return om(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?om(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function om(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function G_(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function H_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function of(s,u){return of=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},of(s,u)}function W_(s,u){if(u&&(rf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function Vl(s){return Vl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Vl(s)}Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.default=void 0;var sf=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function sm(s,u){return function(c){var f=u.interactions.list,m=q.getPointerType(c),S=rm(q.getEventTargets(c),2),C=S[0],M=S[1],T=[];if(/^touch/.test(c.type)){u.prevTouchTime=u.now();for(var I=0;I<c.changedTouches.length;I++){var F=c.changedTouches[I],G={pointer:F,pointerId:q.getPointerId(F),pointerType:m,eventType:c.type,eventTarget:C,curEventTarget:M,scope:u},ee=am(G);T.push([G.pointer,G.eventTarget,G.curEventTarget,ee])}}else{var ce=!1;if(!D.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var K=0;K<f.length&&!ce;K++)ce=f[K].pointerType!=="mouse"&&f[K].pointerIsDown;ce=ce||u.now()-u.prevTouchTime<500||c.timeStamp===0}if(!ce){var ye={pointer:c,pointerId:q.getPointerId(c),pointerType:m,eventType:c.type,curEventTarget:M,eventTarget:C,scope:u},Pe=am(ye);T.push([ye.pointer,ye.eventTarget,ye.curEventTarget,Pe])}}for(var xe=0;xe<T.length;xe++){var ke=rm(T[xe],4),je=ke[0],tt=ke[1],gt=ke[2];ke[3][s](je,c,tt,gt)}}}function am(s){var u=s.pointerType,c=s.scope,f={interaction:zl.default.search(s),searchDetails:s};return c.fire("interactions:find",f),f.interaction||c.interactions.new({pointerType:u})}function af(s,u){var c=s.doc,f=s.scope,m=s.options,S=f.interactions.docEvents,C=f.events,M=C[u];for(var T in f.browser.isIOS&&!m.events&&(m.events={passive:!1}),C.delegatedEvents)M(c,T,C.delegateListener),M(c,T,C.delegateUseCapture,!0);for(var I=m&&m.events,F=0;F<S.length;F++){var G=S[F];M(c,G.type,G.listener,I)}}var j_={id:"core/interactions",install:function(s){for(var u={},c=0;c<sf.length;c++){var f=sf[c];u[f]=sm(f,s)}var m,S=D.default.pEventTypes;function C(){for(var M=0;M<s.interactions.list.length;M++){var T=s.interactions.list[M];if(T.pointerIsDown&&T.pointerType==="touch"&&!T._interacting)for(var I=function(){var G=T.pointers[F];s.documents.some(function(ee){var ce=ee.doc;return(0,k.nodeContains)(ce,G.downTarget)})||T.removePointer(G.pointer,G.event)},F=0;F<T.pointers.length;F++)I()}}(m=p.default.PointerEvent?[{type:S.down,listener:C},{type:S.down,listener:u.pointerDown},{type:S.move,listener:u.pointerMove},{type:S.up,listener:u.pointerUp},{type:S.cancel,listener:u.pointerUp}]:[{type:"mousedown",listener:u.pointerDown},{type:"mousemove",listener:u.pointerMove},{type:"mouseup",listener:u.pointerUp},{type:"touchstart",listener:C},{type:"touchstart",listener:u.pointerDown},{type:"touchmove",listener:u.pointerMove},{type:"touchend",listener:u.pointerUp},{type:"touchcancel",listener:u.pointerUp}]).push({type:"blur",listener:function(M){for(var T=0;T<s.interactions.list.length;T++)s.interactions.list[T].documentBlur(M)}}),s.prevTouchTime=0,s.Interaction=function(M){(function(K,ye){if(typeof ye!="function"&&ye!==null)throw new TypeError("Super expression must either be null or a function");K.prototype=Object.create(ye&&ye.prototype,{constructor:{value:K,writable:!0,configurable:!0}}),Object.defineProperty(K,"prototype",{writable:!1}),ye&&of(K,ye)})(ce,M);var T,I,F,G,ee=(F=ce,G=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var K,ye=Vl(F);if(G){var Pe=Vl(this).constructor;K=Reflect.construct(ye,arguments,Pe)}else K=ye.apply(this,arguments);return W_(this,K)});function ce(){return G_(this,ce),ee.apply(this,arguments)}return T=ce,(I=[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(K){s.interactions.pointerMoveTolerance=K}},{key:"_now",value:function(){return s.now()}}])&&H_(T.prototype,I),Object.defineProperty(T,"prototype",{writable:!1}),ce}(Nn.default),s.interactions={list:[],new:function(M){M.scopeFire=function(I,F){return s.fire(I,F)};var T=new s.Interaction(M);return s.interactions.list.push(T),T},listeners:u,docEvents:m,pointerMoveTolerance:1},s.usePlugin(mi.default)},listeners:{"scope:add-document":function(s){return af(s,"add")},"scope:remove-document":function(s){return af(s,"remove")},"interactable:unset":function(s,u){for(var c=s.interactable,f=u.interactions.list.length-1;f>=0;f--){var m=u.interactions.list[f];m.interactable===c&&(m.stop(),u.fire("interactions:destroy",{interaction:m}),m.destroy(),u.interactions.list.length>2&&u.interactions.list.splice(f,1))}}},onDocSignal:af,doOnInteractions:sm,methodNames:sf},X_=j_;Bl.default=X_;var sa={};function lf(s){return lf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},lf(s)}function aa(){return aa=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(s,u,c){var f=q_(s,u);if(f){var m=Object.getOwnPropertyDescriptor(f,u);return m.get?m.get.call(arguments.length<3?s:c):m.value}},aa.apply(this,arguments)}function q_(s,u){for(;!Object.prototype.hasOwnProperty.call(s,u)&&(s=dr(s))!==null;);return s}function uf(s,u){return uf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},uf(s,u)}function $_(s,u){if(u&&(lf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function dr(s){return dr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},dr(s)}function lm(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function um(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function cm(s,u,c){return u&&um(s.prototype,u),c&&um(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function hn(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(sa,"__esModule",{value:!0}),sa.Scope=void 0,sa.initScope=fm;var Y_=function(){function s(){var u=this;lm(this,s),hn(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),hn(this,"isInitialized",!1),hn(this,"listenerMaps",[]),hn(this,"browser",D.default),hn(this,"defaults",(0,qr.default)(Qs.defaults)),hn(this,"Eventable",na.Eventable),hn(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),hn(this,"interactStatic",(0,Jc.createInteractStatic)(this)),hn(this,"InteractEvent",Js.InteractEvent),hn(this,"Interactable",void 0),hn(this,"interactables",new Ul.InteractableSet(this)),hn(this,"_win",void 0),hn(this,"document",void 0),hn(this,"window",void 0),hn(this,"documents",[]),hn(this,"_plugins",{list:[],map:{}}),hn(this,"onWindowUnload",function(f){return u.removeDocument(f.target)});var c=this;this.Interactable=function(f){(function(T,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(I&&I.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),I&&uf(T,I)})(M,f);var m,S,C=(m=M,S=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var T,I=dr(m);if(S){var F=dr(this).constructor;T=Reflect.construct(I,arguments,F)}else T=I.apply(this,arguments);return $_(this,T)});function M(){return lm(this,M),C.apply(this,arguments)}return cm(M,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(T){return aa(dr(M.prototype),"set",this).call(this,T),c.fire("interactable:set",{options:T,interactable:this}),this}},{key:"unset",value:function(){aa(dr(M.prototype),"unset",this).call(this);var T=c.interactables.list.indexOf(this);T<0||(aa(dr(M.prototype),"unset",this).call(this),c.interactables.list.splice(T,1),c.fire("interactable:unset",{interactable:this}))}}]),M}(Nl.Interactable)}return cm(s,[{key:"addListeners",value:function(u,c){this.listenerMaps.push({id:c,map:u})}},{key:"fire",value:function(u,c){for(var f=0;f<this.listenerMaps.length;f++){var m=this.listenerMaps[f].map[u];if(m&&m(c,this,u)===!1)return!1}}},{key:"init",value:function(u){return this.isInitialized?this:fm(this,u)}},{key:"pluginIsInstalled",value:function(u){return this._plugins.map[u.id]||this._plugins.list.indexOf(u)!==-1}},{key:"usePlugin",value:function(u,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(u))return this;if(u.id&&(this._plugins.map[u.id]=u),this._plugins.list.push(u),u.install&&u.install(this,c),u.listeners&&u.before){for(var f=0,m=this.listenerMaps.length,S=u.before.reduce(function(M,T){return M[T]=!0,M[dm(T)]=!0,M},{});f<m;f++){var C=this.listenerMaps[f].id;if(S[C]||S[dm(C)])break}this.listenerMaps.splice(f,0,{id:u.id,map:u.listeners})}else u.listeners&&this.listenerMaps.push({id:u.id,map:u.listeners});return this}},{key:"addDocument",value:function(u,c){if(this.getDocIndex(u)!==-1)return!1;var f=i.getWindow(u);c=c?(0,W.default)({},c):{},this.documents.push({doc:u,options:c}),this.events.documents.push(u),u!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:u,window:f,scope:this,options:c})}},{key:"removeDocument",value:function(u){var c=this.getDocIndex(u),f=i.getWindow(u),m=this.documents[c].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:u,window:f,scope:this,options:m})}},{key:"getDocIndex",value:function(u){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===u)return c;return-1}},{key:"getDocOptions",value:function(u){var c=this.getDocIndex(u);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s}();function fm(s,u){return s.isInitialized=!0,a.default.window(u)&&i.init(u),p.default.init(u),D.default.init(u),Xt.default.init(u),s.window=u,s.document=u.document,s.usePlugin(Bl.default),s.usePlugin(kl.default),s}function dm(s){return s&&s.replace(/\/.*$/,"")}sa.Scope=Y_;var pn={};Object.defineProperty(pn,"__esModule",{value:!0}),pn.default=void 0;var hm=new sa.Scope,K_=hm.interactStatic;pn.default=K_;var Z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;hm.init(Z_);var Gl={};Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default=void 0,Gl.default=function(){};var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0,Hl.default=function(){};var Wl={};function pm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var m=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var S,C,M=[],T=!0,I=!1;try{for(m=m.call(c);!(T=(S=m.next()).done)&&(M.push(S.value),!f||M.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||m.return==null||m.return()}finally{if(I)throw C}}return M}}(s,u)||function(c,f){if(c){if(typeof c=="string")return mm(c,f);var m=Object.prototype.toString.call(c).slice(8,-1);return m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set"?Array.from(c):m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)?mm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function mm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0,Wl.default=function(s){var u=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(f){var m=pm(f,2),S=m[0],C=m[1];return S in s||C in s}),c=function(f,m){for(var S=s.range,C=s.limits,M=C===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:C,T=s.offset,I=T===void 0?{x:0,y:0}:T,F={range:S,grid:s,x:null,y:null},G=0;G<u.length;G++){var ee=pm(u[G],2),ce=ee[0],K=ee[1],ye=Math.round((f-I.x)/s[ce]),Pe=Math.round((m-I.y)/s[K]);F[ce]=Math.max(M.left,Math.min(M.right,ye*s[ce]+I.x)),F[K]=Math.max(M.top,Math.min(M.bottom,Pe*s[K]+I.y))}return F};return c.grid=s,c.coordFields=u,c};var la={};Object.defineProperty(la,"__esModule",{value:!0}),Object.defineProperty(la,"edgeTarget",{enumerable:!0,get:function(){return Gl.default}}),Object.defineProperty(la,"elements",{enumerable:!0,get:function(){return Hl.default}}),Object.defineProperty(la,"grid",{enumerable:!0,get:function(){return Wl.default}});var jl={};Object.defineProperty(jl,"__esModule",{value:!0}),jl.default=void 0;var Q_={id:"snappers",install:function(s){var u=s.interactStatic;u.snappers=(0,W.default)(u.snappers||{},la),u.createSnapGrid=u.snappers.grid}},J_=Q_;jl.default=J_;var Oo={};function vm(s,u){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);u&&(f=f.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),c.push.apply(c,f)}return c}function cf(s){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?vm(Object(c),!0).forEach(function(f){eS(s,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):vm(Object(c)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(c,f))})}return s}function eS(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.default=Oo.aspectRatio=void 0;var gm={start:function(s){var u=s.state,c=s.rect,f=s.edges,m=s.pageCoords,S=u.options.ratio,C=u.options,M=C.equalDelta,T=C.modifiers;S==="preserve"&&(S=c.width/c.height),u.startCoords=(0,W.default)({},m),u.startRect=(0,W.default)({},c),u.ratio=S,u.equalDelta=M;var I=u.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(u.xIsPrimaryAxis=!(!f.left&&!f.right),u.equalDelta){var F=(I.left?1:-1)*(I.top?1:-1);u.edgeSign={x:F,y:F}}else u.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if((0,W.default)(s.edges,I),T&&T.length){var G=new $r.default(s.interaction);G.copyFrom(s.interaction.modification),G.prepareStates(T),u.subModification=G,G.startAll(cf({},s))}},set:function(s){var u=s.state,c=s.rect,f=s.coords,m=(0,W.default)({},f),S=u.equalDelta?tS:nS;if(S(u,u.xIsPrimaryAxis,f,c),!u.subModification)return null;var C=(0,W.default)({},c);(0,fe.addEdges)(u.linkedEdges,C,{x:f.x-m.x,y:f.y-m.y});var M=u.subModification.setAll(cf(cf({},s),{},{rect:C,edges:u.linkedEdges,pageCoords:f,prevCoords:f,prevRect:C})),T=M.delta;return M.changed&&(S(u,Math.abs(T.x)>Math.abs(T.y),M.coords,M.rect),(0,W.default)(f,M.coords)),M.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function tS(s,u,c){var f=s.startCoords,m=s.edgeSign;u?c.y=f.y+(c.x-f.x)*m.y:c.x=f.x+(c.y-f.y)*m.x}function nS(s,u,c,f){var m=s.startRect,S=s.startCoords,C=s.ratio,M=s.edgeSign;if(u){var T=f.width/C;c.y=S.y+(T-m.height)*M.y}else{var I=f.height*C;c.x=S.x+(I-m.width)*M.x}}Oo.aspectRatio=gm;var iS=(0,dn.makeModifier)(gm,"aspectRatio");Oo.default=iS;var Zr={};Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.default=void 0;var ym=function(){};ym._defaults={};var rS=ym;Zr.default=rS;var ff={};Object.defineProperty(ff,"__esModule",{value:!0}),Object.defineProperty(ff,"default",{enumerable:!0,get:function(){return Zr.default}});var Cn={};function df(s,u,c){return a.default.func(s)?fe.resolveRectLike(s,u.interactable,u.element,[c.x,c.y,u]):fe.resolveRectLike(s,u.interactable,u.element)}Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0,Cn.getRestrictionRect=df,Cn.restrict=void 0;var xm={start:function(s){var u=s.rect,c=s.startOffset,f=s.state,m=s.interaction,S=s.pageCoords,C=f.options,M=C.elementRect,T=(0,W.default)({left:0,top:0,right:0,bottom:0},C.offset||{});if(u&&M){var I=df(C.restriction,m,S);if(I){var F=I.right-I.left-u.width,G=I.bottom-I.top-u.height;F<0&&(T.left+=F,T.right+=F),G<0&&(T.top+=G,T.bottom+=G)}T.left+=c.left-u.width*M.left,T.top+=c.top-u.height*M.top,T.right+=c.right-u.width*(1-M.right),T.bottom+=c.bottom-u.height*(1-M.bottom)}f.offset=T},set:function(s){var u=s.coords,c=s.interaction,f=s.state,m=f.options,S=f.offset,C=df(m.restriction,c,u);if(C){var M=fe.xywhToTlbr(C);u.x=Math.max(Math.min(M.right-S.right,u.x),M.left+S.left),u.y=Math.max(Math.min(M.bottom-S.bottom,u.y),M.top+S.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Cn.restrict=xm;var oS=(0,dn.makeModifier)(xm,"restrict");Cn.default=oS;var Li={};Object.defineProperty(Li,"__esModule",{value:!0}),Li.restrictEdges=Li.default=void 0;var _m={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Sm={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Mm(s,u){for(var c=["top","left","bottom","right"],f=0;f<c.length;f++){var m=c[f];m in s||(s[m]=u[m])}return s}var wm={noInner:_m,noOuter:Sm,start:function(s){var u,c=s.interaction,f=s.startOffset,m=s.state,S=m.options;if(S){var C=(0,Cn.getRestrictionRect)(S.offset,c,c.coords.start.page);u=fe.rectToXY(C)}u=u||{x:0,y:0},m.offset={top:u.y+f.top,left:u.x+f.left,bottom:u.y-f.bottom,right:u.x-f.right}},set:function(s){var u=s.coords,c=s.edges,f=s.interaction,m=s.state,S=m.offset,C=m.options;if(c){var M=(0,W.default)({},u),T=(0,Cn.getRestrictionRect)(C.inner,f,M)||{},I=(0,Cn.getRestrictionRect)(C.outer,f,M)||{};Mm(T,_m),Mm(I,Sm),c.top?u.y=Math.min(Math.max(I.top+S.top,M.y),T.top+S.top):c.bottom&&(u.y=Math.max(Math.min(I.bottom+S.bottom,M.y),T.bottom+S.bottom)),c.left?u.x=Math.min(Math.max(I.left+S.left,M.x),T.left+S.left):c.right&&(u.x=Math.max(Math.min(I.right+S.right,M.x),T.right+S.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Li.restrictEdges=wm;var sS=(0,dn.makeModifier)(wm,"restrictEdges");Li.default=sS;var No={};Object.defineProperty(No,"__esModule",{value:!0}),No.restrictRect=No.default=void 0;var aS=(0,W.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},Cn.restrict.defaults),bm={start:Cn.restrict.start,set:Cn.restrict.set,defaults:aS};No.restrictRect=bm;var lS=(0,dn.makeModifier)(bm,"restrictRect");No.default=lS;var Uo={};Object.defineProperty(Uo,"__esModule",{value:!0}),Uo.restrictSize=Uo.default=void 0;var uS={width:-1/0,height:-1/0},cS={width:1/0,height:1/0},Em={start:function(s){return Li.restrictEdges.start(s)},set:function(s){var u=s.interaction,c=s.state,f=s.rect,m=s.edges,S=c.options;if(m){var C=fe.tlbrToXywh((0,Cn.getRestrictionRect)(S.min,u,s.coords))||uS,M=fe.tlbrToXywh((0,Cn.getRestrictionRect)(S.max,u,s.coords))||cS;c.options={endOnly:S.endOnly,inner:(0,W.default)({},Li.restrictEdges.noInner),outer:(0,W.default)({},Li.restrictEdges.noOuter)},m.top?(c.options.inner.top=f.bottom-C.height,c.options.outer.top=f.bottom-M.height):m.bottom&&(c.options.inner.bottom=f.top+C.height,c.options.outer.bottom=f.top+M.height),m.left?(c.options.inner.left=f.right-C.width,c.options.outer.left=f.right-M.width):m.right&&(c.options.inner.right=f.left+C.width,c.options.outer.right=f.left+M.width),Li.restrictEdges.set(s),c.options=S}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Uo.restrictSize=Em;var fS=(0,dn.makeModifier)(Em,"restrictSize");Uo.default=fS;var hf={};Object.defineProperty(hf,"__esModule",{value:!0}),Object.defineProperty(hf,"default",{enumerable:!0,get:function(){return Zr.default}});var hr={};Object.defineProperty(hr,"__esModule",{value:!0}),hr.snap=hr.default=void 0;var Tm={start:function(s){var u,c=s.interaction,f=s.interactable,m=s.element,S=s.rect,C=s.state,M=s.startOffset,T=C.options,I=T.offsetWithOrigin?function(ee){var ce=ee.interaction.element;return(0,fe.rectToXY)((0,fe.resolveRectLike)(ee.state.options.origin,null,null,[ce]))||(0,J.default)(ee.interactable,ce,ee.interaction.prepared.name)}(s):{x:0,y:0};if(T.offset==="startCoords")u={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var F=(0,fe.resolveRectLike)(T.offset,f,m,[c]);(u=(0,fe.rectToXY)(F)||{x:0,y:0}).x+=I.x,u.y+=I.y}var G=T.relativePoints;C.offsets=S&&G&&G.length?G.map(function(ee,ce){return{index:ce,relativePoint:ee,x:M.left-S.width*ee.x+u.x,y:M.top-S.height*ee.y+u.y}}):[{index:0,relativePoint:null,x:u.x,y:u.y}]},set:function(s){var u=s.interaction,c=s.coords,f=s.state,m=f.options,S=f.offsets,C=(0,J.default)(u.interactable,u.element,u.prepared.name),M=(0,W.default)({},c),T=[];m.offsetWithOrigin||(M.x-=C.x,M.y-=C.y);for(var I=0;I<S.length;I++)for(var F=S[I],G=M.x-F.x,ee=M.y-F.y,ce=0,K=m.targets.length;ce<K;ce++){var ye,Pe=m.targets[ce];(ye=a.default.func(Pe)?Pe(G,ee,u._proxy,F,ce):Pe)&&T.push({x:(a.default.number(ye.x)?ye.x:G)+F.x,y:(a.default.number(ye.y)?ye.y:ee)+F.y,range:a.default.number(ye.range)?ye.range:m.range,source:Pe,index:ce,offset:F})}for(var xe={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},ke=0;ke<T.length;ke++){var je=T[ke],tt=je.range,gt=je.x-M.x,Tt=je.y-M.y,ut=(0,ve.default)(gt,Tt),wt=ut<=tt;tt===1/0&&xe.inRange&&xe.range!==1/0&&(wt=!1),xe.target&&!(wt?xe.inRange&&tt!==1/0?ut/tt<xe.distance/xe.range:tt===1/0&&xe.range!==1/0||ut<xe.distance:!xe.inRange&&ut<xe.distance)||(xe.target=je,xe.distance=ut,xe.range=tt,xe.inRange=wt,xe.delta.x=gt,xe.delta.y=Tt)}return xe.inRange&&(c.x=xe.target.x,c.y=xe.target.y),f.closest=xe,xe},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};hr.snap=Tm;var dS=(0,dn.makeModifier)(Tm,"snap");hr.default=dS;var ji={};function Cm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(ji,"__esModule",{value:!0}),ji.snapSize=ji.default=void 0;var Pm={start:function(s){var u=s.state,c=s.edges,f=u.options;if(!c)return null;s.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},u.targetFields=u.targetFields||[["width","height"],["x","y"]],hr.snap.start(s),u.offsets=s.state.offsets,s.state=u},set:function(s){var u,c,f=s.interaction,m=s.state,S=s.coords,C=m.options,M=m.offsets,T={x:S.x-M[0].x,y:S.y-M[0].y};m.options=(0,W.default)({},C),m.options.targets=[];for(var I=0;I<(C.targets||[]).length;I++){var F=(C.targets||[])[I],G=void 0;if(G=a.default.func(F)?F(T.x,T.y,f):F){for(var ee=0;ee<m.targetFields.length;ee++){var ce=(u=m.targetFields[ee],c=2,function(xe){if(Array.isArray(xe))return xe}(u)||function(xe,ke){var je=xe==null?null:typeof Symbol<"u"&&xe[Symbol.iterator]||xe["@@iterator"];if(je!=null){var tt,gt,Tt=[],ut=!0,wt=!1;try{for(je=je.call(xe);!(ut=(tt=je.next()).done)&&(Tt.push(tt.value),!ke||Tt.length!==ke);ut=!0);}catch(oi){wt=!0,gt=oi}finally{try{ut||je.return==null||je.return()}finally{if(wt)throw gt}}return Tt}}(u,c)||function(xe,ke){if(xe){if(typeof xe=="string")return Cm(xe,ke);var je=Object.prototype.toString.call(xe).slice(8,-1);return je==="Object"&&xe.constructor&&(je=xe.constructor.name),je==="Map"||je==="Set"?Array.from(xe):je==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(je)?Cm(xe,ke):void 0}}(u,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),K=ce[0],ye=ce[1];if(K in G||ye in G){G.x=G[K],G.y=G[ye];break}}m.options.targets.push(G)}}var Pe=hr.snap.set(s);return m.options=C,Pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ji.snapSize=Pm;var hS=(0,dn.makeModifier)(Pm,"snapSize");ji.default=hS;var ko={};Object.defineProperty(ko,"__esModule",{value:!0}),ko.snapEdges=ko.default=void 0;var Am={start:function(s){var u=s.edges;return u?(s.state.targetFields=s.state.targetFields||[[u.left?"left":"right",u.top?"top":"bottom"]],ji.snapSize.start(s)):null},set:ji.snapSize.set,defaults:(0,W.default)((0,qr.default)(ji.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};ko.snapEdges=Am;var pS=(0,dn.makeModifier)(Am,"snapEdges");ko.default=pS;var pf={};Object.defineProperty(pf,"__esModule",{value:!0}),Object.defineProperty(pf,"default",{enumerable:!0,get:function(){return Zr.default}});var mf={};Object.defineProperty(mf,"__esModule",{value:!0}),Object.defineProperty(mf,"default",{enumerable:!0,get:function(){return Zr.default}});var zo={};Object.defineProperty(zo,"__esModule",{value:!0}),zo.default=void 0;var mS={aspectRatio:Oo.default,restrictEdges:Li.default,restrict:Cn.default,restrictRect:No.default,restrictSize:Uo.default,snapEdges:ko.default,snap:hr.default,snapSize:ji.default,spring:pf.default,avoid:ff.default,transform:mf.default,rubberband:hf.default};zo.default=mS;var ua={};Object.defineProperty(ua,"__esModule",{value:!0}),ua.default=void 0;var vS={id:"modifiers",install:function(s){var u=s.interactStatic;for(var c in s.usePlugin(dn.default),s.usePlugin(jl.default),u.modifiers=zo.default,zo.default){var f=zo.default[c],m=f._defaults,S=f._methods;m._methods=S,s.defaults.perAction[c]=m}}},gS=vS;ua.default=gS;var Qr={};function vf(s){return vf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},vf(s)}function yS(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function gf(s,u){return gf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},gf(s,u)}function xS(s,u){if(u&&(vf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yf(s)}function yf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Xl(s){return Xl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Xl(s)}Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.default=Qr.PointerEvent=void 0;var _S=function(s){(function(M,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(T&&T.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),T&&gf(M,T)})(C,s);var u,c,f,m,S=(f=C,m=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,T=Xl(f);if(m){var I=Xl(this).constructor;M=Reflect.construct(T,arguments,I)}else M=T.apply(this,arguments);return xS(this,M)});function C(M,T,I,F,G,ee){var ce;if(function(Pe,xe){if(!(Pe instanceof xe))throw new TypeError("Cannot call a class as a function")}(this,C),ce=S.call(this,G),q.pointerExtend(yf(ce),I),I!==T&&q.pointerExtend(yf(ce),T),ce.timeStamp=ee,ce.originalEvent=I,ce.type=M,ce.pointerId=q.getPointerId(T),ce.pointerType=q.getPointerType(T),ce.target=F,ce.currentTarget=null,M==="tap"){var K=G.getPointerIndex(T);ce.dt=ce.timeStamp-G.pointers[K].downTime;var ye=ce.timeStamp-G.tapTime;ce.double=!!G.prevTap&&G.prevTap.type!=="doubletap"&&G.prevTap.target===ce.target&&ye<500}else M==="doubletap"&&(ce.dt=T.timeStamp-G.tapTime,ce.double=!0);return ce}return u=C,(c=[{key:"_subtractOrigin",value:function(M){var T=M.x,I=M.y;return this.pageX-=T,this.pageY-=I,this.clientX-=T,this.clientY-=I,this}},{key:"_addOrigin",value:function(M){var T=M.x,I=M.y;return this.pageX+=T,this.pageY+=I,this.clientX+=T,this.clientY+=I,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&yS(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Be.BaseEvent);Qr.PointerEvent=Qr.default=_S;var ca={};Object.defineProperty(ca,"__esModule",{value:!0}),ca.default=void 0;var ql={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=ql,s.defaults.actions.pointerEvents=ql.defaults,(0,W.default)(s.actions.phaselessTypes,ql.types)},listeners:{"interactions:new":function(s){var u=s.interaction;u.prevTap=null,u.tapTime=0},"interactions:update-pointer":function(s){var u=s.down,c=s.pointerInfo;!u&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(s,u){var c=s.interaction,f=s.pointer,m=s.event,S=s.eventTarget;s.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&xf(s),pr({interaction:c,pointer:f,event:m,eventTarget:S,type:"move"},u))},"interactions:down":function(s,u){(function(c,f){for(var m=c.interaction,S=c.pointer,C=c.event,M=c.eventTarget,T=c.pointerIndex,I=m.pointers[T].hold,F=k.getPath(M),G={interaction:m,pointer:S,event:C,eventTarget:M,type:"hold",targets:[],path:F,node:null},ee=0;ee<F.length;ee++){var ce=F[ee];G.node=ce,f.fire("pointerEvents:collect-targets",G)}if(G.targets.length){for(var K=1/0,ye=0;ye<G.targets.length;ye++){var Pe=G.targets[ye].eventable.options.holdDuration;Pe<K&&(K=Pe)}I.duration=K,I.timeout=setTimeout(function(){pr({interaction:m,eventTarget:M,pointer:S,event:C,type:"hold"},f)},K)}})(s,u),pr(s,u)},"interactions:up":function(s,u){xf(s),pr(s,u),function(c,f){var m=c.interaction,S=c.pointer,C=c.event,M=c.eventTarget;m.pointerWasMoved||pr({interaction:m,eventTarget:M,pointer:S,event:C,type:"tap"},f)}(s,u)},"interactions:cancel":function(s,u){xf(s),pr(s,u)}},PointerEvent:Qr.PointerEvent,fire:pr,collectEventTargets:Dm,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function pr(s,u){var c=s.interaction,f=s.pointer,m=s.event,S=s.eventTarget,C=s.type,M=s.targets,T=M===void 0?Dm(s,u):M,I=new Qr.PointerEvent(C,f,m,S,c,u.now());u.fire("pointerEvents:new",{pointerEvent:I});for(var F={interaction:c,pointer:f,event:m,eventTarget:S,targets:T,type:C,pointerEvent:I},G=0;G<T.length;G++){var ee=T[G];for(var ce in ee.props||{})I[ce]=ee.props[ce];var K=(0,J.default)(ee.eventable,ee.node);if(I._subtractOrigin(K),I.eventable=ee.eventable,I.currentTarget=ee.node,ee.eventable.fire(I),I._addOrigin(K),I.immediatePropagationStopped||I.propagationStopped&&G+1<T.length&&T[G+1].node!==I.currentTarget)break}if(u.fire("pointerEvents:fired",F),C==="tap"){var ye=I.double?pr({interaction:c,pointer:f,event:m,eventTarget:S,type:"doubletap"},u):I;c.prevTap=ye,c.tapTime=ye.timeStamp}return I}function Dm(s,u){var c=s.interaction,f=s.pointer,m=s.event,S=s.eventTarget,C=s.type,M=c.getPointerIndex(f),T=c.pointers[M];if(C==="tap"&&(c.pointerWasMoved||!T||T.downTarget!==S))return[];for(var I=k.getPath(S),F={interaction:c,pointer:f,event:m,eventTarget:S,type:C,path:I,targets:[],node:null},G=0;G<I.length;G++){var ee=I[G];F.node=ee,u.fire("pointerEvents:collect-targets",F)}return C==="hold"&&(F.targets=F.targets.filter(function(ce){var K;return ce.eventable.options.holdDuration===((K=c.pointers[M])==null?void 0:K.hold.duration)})),F.targets}function xf(s){var u=s.interaction,c=s.pointerIndex,f=u.pointers[c].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var SS=ql;ca.default=SS;var $l={};function MS(s){var u=s.interaction;u.holdIntervalHandle&&(clearInterval(u.holdIntervalHandle),u.holdIntervalHandle=null)}Object.defineProperty($l,"__esModule",{value:!0}),$l.default=void 0;var wS={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(ca.default);var u=s.pointerEvents;u.defaults.holdRepeatInterval=0,u.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(s,u){return s["pointerEvents:".concat(u)]=MS,s},{"pointerEvents:new":function(s){var u=s.pointerEvent;u.type==="hold"&&(u.count=(u.count||0)+1)},"pointerEvents:fired":function(s,u){var c=s.interaction,f=s.pointerEvent,m=s.eventTarget,S=s.targets;if(f.type==="hold"&&S.length){var C=S[0].eventable.options.holdRepeatInterval;C<=0||(c.holdIntervalHandle=setTimeout(function(){u.pointerEvents.fire({interaction:c,eventTarget:m,type:"hold",pointer:f,event:f},u)},C))}}})},bS=wS;$l.default=bS;var Yl={};function ES(s){return(0,W.default)(this.events.options,s),this}Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var TS={id:"pointer-events/interactableTargets",install:function(s){var u=s.Interactable;u.prototype.pointerEvents=ES;var c=u.prototype._backCompatOption;u.prototype._backCompatOption=function(f,m){var S=c.call(this,f,m);return S===this&&(this.events.options[f]=m),S}},listeners:{"pointerEvents:collect-targets":function(s,u){var c=s.targets,f=s.node,m=s.type,S=s.eventTarget;u.interactables.forEachMatch(f,function(C){var M=C.events,T=M.options;M.types[m]&&M.types[m].length&&C.testIgnoreAllow(T,f,S)&&c.push({node:f,eventable:M,props:{interactable:C}})})},"interactable:new":function(s){var u=s.interactable;u.events.getRect=function(c){return u.getRect(c)}},"interactable:set":function(s,u){var c=s.interactable,f=s.options;(0,W.default)(c.events.options,u.pointerEvents.defaults),(0,W.default)(c.events.options,f.pointerEvents||{})}}},CS=TS;Yl.default=CS;var fa={};Object.defineProperty(fa,"__esModule",{value:!0}),fa.default=void 0;var PS={id:"pointer-events",install:function(s){s.usePlugin(ca),s.usePlugin($l.default),s.usePlugin(Yl.default)}},AS=PS;fa.default=AS;var Fo={};function Rm(s){var u=s.Interactable;s.actions.phases.reflow=!0,u.prototype.reflow=function(c){return function(f,m,S){for(var C=a.default.string(f.target)?Xe.from(f._context.querySelectorAll(f.target)):[f.target],M=S.window.Promise,T=M?[]:null,I=function(){var G=C[F],ee=f.getRect(G);if(!ee)return"break";var ce=Xe.find(S.interactions.list,function(ke){return ke.interacting()&&ke.interactable===f&&ke.element===G&&ke.prepared.name===m.name}),K=void 0;if(ce)ce.move(),T&&(K=ce._reflowPromise||new M(function(ke){ce._reflowResolve=ke}));else{var ye=(0,fe.tlbrToXywh)(ee),Pe={page:{x:ye.x,y:ye.y},client:{x:ye.x,y:ye.y},timeStamp:S.now()},xe=q.coordsToEvent(Pe);K=function(ke,je,tt,gt,Tt){var ut=ke.interactions.new({pointerType:"reflow"}),wt={interaction:ut,event:Tt,pointer:Tt,eventTarget:tt,phase:"reflow"};ut.interactable=je,ut.element=tt,ut.prevEvent=Tt,ut.updatePointer(Tt,Tt,tt,!0),q.setZeroCoords(ut.coords.delta),(0,ie.copyAction)(ut.prepared,gt),ut._doPhase(wt);var oi=ke.window.Promise,Xi=oi?new oi(function(Mf){ut._reflowResolve=Mf}):void 0;return ut._reflowPromise=Xi,ut.start(gt,je,tt),ut._interacting?(ut.move(wt),ut.end(Tt)):(ut.stop(),ut._reflowResolve()),ut.removePointer(Tt,Tt),Xi}(S,f,G,m,xe)}T&&T.push(K)},F=0;F<C.length&&I()!=="break";F++);return T&&M.all(T).then(function(){return f})}(this,c,s)}}Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.default=void 0,Fo.install=Rm;var DS={id:"reflow",install:Rm,listeners:{"interactions:stop":function(s,u){var c=s.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),Xe.remove(u.interactions.list,c))}}},RS=DS;Fo.default=RS;var ri={exports:{}};function _f(s){return _f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},_f(s)}Object.defineProperty(ri.exports,"__esModule",{value:!0}),ri.exports.default=void 0,pn.default.use(mi.default),pn.default.use(fr.default),pn.default.use(fa.default),pn.default.use(Kr.default),pn.default.use(ua.default),pn.default.use(Ht.default),pn.default.use(yt.default),pn.default.use(ni.default),pn.default.use(Fo.default);var LS=pn.default;if(ri.exports.default=LS,_f(ri)==="object"&&ri)try{ri.exports=pn.default}catch{}pn.default.default=pn.default,yt.default,ni.default,Ht.default,mi.default,Pl.default,Kr.default,pn.default,ua.default,fr.default,fa.default,Fo.default,ri=ri.exports;var Jr={exports:{}};function Sf(s){return Sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Sf(s)}Object.defineProperty(Jr.exports,"__esModule",{value:!0}),Jr.exports.default=void 0;var IS=ri.default;if(Jr.exports.default=IS,Sf(Jr)==="object"&&Jr)try{Jr.exports=ri.default}catch{}return ri.default.default=ri.default,Jr.exports})})(lw);const uw=OS(Ph),{abs:Lp,cos:Ex,sin:cw,cosh:aA,sinh:lA,acos:uA,acosh:cA,tan:fw,min:Vv,max:Tx,round:dw,sqrt:Bc,sign:Cx,floor:hw,log:fA,exp:dA,PI:sl}=Math,Px=t=>{if(t.length===1)return t[0][0];let e=0;for(let n=0;n<t.length;n++){const i=new Array(t.length-1).fill().map(()=>new Array(t.length-1).fill(0));for(let o=1;o<t.length;o++)for(let l=0;l<t.length;l++)l<n?i[o-1][l]=t[o][l]:l>n&&(i[o-1][l-1]=t[o][l]);const r=n%2===0?1:-1;e+=t[0][n]*r*Px(i)}return e},pw=t=>{const e=Px(t);return Lp(e)<1e-8?0:Cx(e)},Ax=(t,e,n)=>{let i=0;for(let r=0;r<t.length;r++)i+=t[r]*e[r]*(r===t.length-1&&n||1);return i},mw=(t,e)=>{if(t=t.slice(),e===0){for(let i=0;i<t.length;i++)t[i]/=t[t.length-1];return t}const n=(e===-1&&Cx(t[t.length-1])||1)/Bc(Lp(Ax(t,t,e)));for(let i=0;i<t.length;i++)t[i]*=n;return t},Yf=(t,e)=>{const[n,i]=t,r=Ex(e),o=cw(e);t[0]=n*r-i*o,t[1]=n*o+i*r},Kf=(t,e,n)=>{if(n!==0){const i=e/Bc(Ax(t,t,1)),r=new Array(t.length-1);for(let o=0;o<t.length-1;o++)r[o]=t[o]*i;$u(t,r,n)}else for(let i=0;i<t.length;i++)t[i]*=1-e},vw=(t,e,n)=>{const i=t.length,r=n;for(let o=0;o<i-1;o++){const l=e[o];if(l!==0){const a=Bc(1-r*l*l),d=l;let h=t[o],v=t[i-1];t[o]=a*h+-r*d*v,t[i-1]=d*h+a*v}}},$u=(t,e,n)=>{if(n===0)for(let i=0;i<e.length;i++)t[i]+=e[i];else vw(t,e,n)},gw=(t,e)=>{const n=t[0].length,i=new Array(n).fill().map(()=>new Array(n).fill(0));i[0][0]=1;for(let r=1;r<n;r++){for(let o=0;o<r;o++){let l=0;for(let a=0;a<o;a++)l+=i[r][a]*i[o][a];i[r][o]=(t[r][o]-l)/i[o][o]}i[r][r]=Bc(Lp(1-i[r].slice(0,r).reduce((o,l)=>o+l*l,0)))}return i[i.length-1][i.length-1]=e?i[i.length-1][i.length-1]*e:1,i},yw=(t,e,n)=>{const i=t.length,r=new Array(i);for(let o=0;o<i;o++){let l=0;for(let a=0;a<o;a++)l+=e[o][a]*r[a];r[o]=(t[o]-l)/e[o][o]}return r[r.length-1]*=n||1,mw(r,n)};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="151",Vo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xw=0,Gv=1,_w=2,Op=1,Dx=2,Da=3,zr=0,Rn=1,tr=2,un=0,Cs=1,Ah=2,Hv=3,Wv=4,_c=5,Er=100,Sw=101,Mw=102,jv=103,Xv=104,Dh=200,ww=201,bw=202,Ew=203,Rx=204,Lx=205,Ix=206,Tw=207,Ox=208,Cw=209,Pw=210,Aw=0,Dw=1,Rw=2,Rh=3,Lw=4,Iw=5,Ow=6,Nw=7,Vc=0,Uw=1,kw=2,Gi=0,zw=1,Nx=2,Fw=3,Bw=4,Vw=5,Ux=300,zs=301,Fs=302,Sc=303,Lh=304,Gc=306,bo=1e3,bi=1001,Ih=1002,Qt=1003,qv=1004,Zf=1005,ui=1006,Gw=1007,al=1008,Eo=1009,Hw=1010,Ww=1011,Np=1012,jw=1013,ho=1014,po=1015,ll=1016,Xw=1017,qw=1018,Ps=1020,$w=1021,Ei=1023,Yw=1024,Kw=1025,go=1026,Bs=1027,Zw=1028,Qw=1029,Jw=1030,eb=1031,tb=1033,Qf=33776,Jf=33777,ed=33778,td=33779,$v=35840,Yv=35841,Kv=35842,Zv=35843,nb=36196,Qv=37492,Jv=37496,eg=37808,tg=37809,ng=37810,ig=37811,rg=37812,og=37813,sg=37814,ag=37815,lg=37816,ug=37817,cg=37818,fg=37819,dg=37820,hg=37821,nd=36492,ib=36283,pg=36284,mg=36285,vg=36286,To=3e3,bt=3001,rb=3200,xl=3201,_l=0,ob=1,ki="srgb",ul="srgb-linear",kx="display-p3",id=7680,sb=519,gg=35044,yg="300 es",Oh=1035;class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Mc=180/Math.PI;function Sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[t&255]+_n[t>>8&255]+_n[t>>16&255]+_n[t>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function wn(t,e,n){return Math.max(e,Math.min(n,t))}function ab(t,e){return(t%e+e)%e}function od(t,e,n){return(1-n)*t+n*e}function xg(t){return(t&t-1)===0&&t!==0}function lb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hu(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,l,a,d,h){const v=this.elements;return v[0]=e,v[1]=r,v[2]=a,v[3]=n,v[4]=o,v[5]=d,v[6]=i,v[7]=l,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[3],d=i[6],h=i[1],v=i[4],g=i[7],y=i[2],x=i[5],E=i[8],A=r[0],_=r[3],p=r[6],w=r[1],b=r[4],P=r[7],D=r[2],O=r[5],B=r[8];return o[0]=l*A+a*w+d*D,o[3]=l*_+a*b+d*O,o[6]=l*p+a*P+d*B,o[1]=h*A+v*w+g*D,o[4]=h*_+v*b+g*O,o[7]=h*p+v*P+g*B,o[2]=y*A+x*w+E*D,o[5]=y*_+x*b+E*O,o[8]=y*p+x*P+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],v=e[8];return n*l*v-n*a*h-i*o*v+i*a*d+r*o*h-r*l*d}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],v=e[8],g=v*l-a*h,y=a*d-v*o,x=h*o-l*d,E=n*g+i*y+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(r*h-v*i)*A,e[2]=(a*i-r*l)*A,e[3]=y*A,e[4]=(v*n-r*d)*A,e[5]=(r*o-a*n)*A,e[6]=x*A,e[7]=(i*d-h*n)*A,e[8]=(l*n-i*o)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,l,a){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*l+h*a)+l+e,-r*h,r*d,-r*(-h*l+d*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(sd.makeScale(e,n)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,n){return this.premultiply(sd.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new ft;function zx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ad(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const ub=new ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cb=new ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function fb(t){return t.convertSRGBToLinear().applyMatrix3(cb)}function db(t){return t.applyMatrix3(ub).convertLinearToSRGB()}const hb={[ul]:t=>t,[ki]:t=>t.convertSRGBToLinear(),[kx]:fb},pb={[ul]:t=>t,[ki]:t=>t.convertLinearToSRGB(),[kx]:db},qn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ul},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=hb[e],r=pb[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ho;class Fx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=cl("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=As(o[l]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Bx{constructor(e=null){this.isSource=!0,this.uuid=Sl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?o.push(ld(r[l].image)):o.push(ld(r[l]))}else o=ld(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Fx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mb=0;class Wn extends Do{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,i=bi,r=bi,o=ui,l=al,a=Ei,d=Eo,h=Wn.DEFAULT_ANISOTROPY,v=To){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Sl(),this.name="",this.source=new Bx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=d,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Ux;Wn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const d=e.elements,h=d[0],v=d[4],g=d[8],y=d[1],x=d[5],E=d[9],A=d[2],_=d[6],p=d[10];if(Math.abs(v-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-_)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+_)<.1&&Math.abs(h+x+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(h+1)/2,P=(x+1)/2,D=(p+1)/2,O=(v+y)/4,B=(g+A)/4,k=(E+_)/4;return b>P&&b>D?b<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(b),r=O/i,o=B/i):P>D?P<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(P),i=O/r,o=k/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=B/o,r=k/o),this.set(i,r,o,n),this}let w=Math.sqrt((_-E)*(_-E)+(g-A)*(g-A)+(y-v)*(y-v));return Math.abs(w)<.001&&(w=1),this.x=(_-E)/w,this.y=(g-A)/w,this.z=(y-v)/w,this.w=Math.acos((h+x+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends Do{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ui,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vx extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vb extends Wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,l,a){let d=i[r+0],h=i[r+1],v=i[r+2],g=i[r+3];const y=o[l+0],x=o[l+1],E=o[l+2],A=o[l+3];if(a===0){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(a===1){e[n+0]=y,e[n+1]=x,e[n+2]=E,e[n+3]=A;return}if(g!==A||d!==y||h!==x||v!==E){let _=1-a;const p=d*y+h*x+v*E+g*A,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const D=Math.sqrt(b),O=Math.atan2(D,p*w);_=Math.sin(_*O)/D,a=Math.sin(a*O)/D}const P=a*w;if(d=d*_+y*P,h=h*_+x*P,v=v*_+E*P,g=g*_+A*P,_===1-a){const D=1/Math.sqrt(d*d+h*h+v*v+g*g);d*=D,h*=D,v*=D,g*=D}}e[n]=d,e[n+1]=h,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,r,o,l){const a=i[r],d=i[r+1],h=i[r+2],v=i[r+3],g=o[l],y=o[l+1],x=o[l+2],E=o[l+3];return e[n]=a*E+v*g+d*x-h*y,e[n+1]=d*E+v*y+h*g-a*x,e[n+2]=h*E+v*x+a*y-d*g,e[n+3]=v*E-a*g-d*y-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,l=e._order,a=Math.cos,d=Math.sin,h=a(i/2),v=a(r/2),g=a(o/2),y=d(i/2),x=d(r/2),E=d(o/2);switch(l){case"XYZ":this._x=y*v*g+h*x*E,this._y=h*x*g-y*v*E,this._z=h*v*E+y*x*g,this._w=h*v*g-y*x*E;break;case"YXZ":this._x=y*v*g+h*x*E,this._y=h*x*g-y*v*E,this._z=h*v*E-y*x*g,this._w=h*v*g+y*x*E;break;case"ZXY":this._x=y*v*g-h*x*E,this._y=h*x*g+y*v*E,this._z=h*v*E+y*x*g,this._w=h*v*g-y*x*E;break;case"ZYX":this._x=y*v*g-h*x*E,this._y=h*x*g+y*v*E,this._z=h*v*E-y*x*g,this._w=h*v*g+y*x*E;break;case"YZX":this._x=y*v*g+h*x*E,this._y=h*x*g+y*v*E,this._z=h*v*E-y*x*g,this._w=h*v*g-y*x*E;break;case"XZY":this._x=y*v*g-h*x*E,this._y=h*x*g-y*v*E,this._z=h*v*E+y*x*g,this._w=h*v*g+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],l=n[1],a=n[5],d=n[9],h=n[2],v=n[6],g=n[10],y=i+a+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-d)*x,this._y=(o-h)*x,this._z=(l-r)*x}else if(i>a&&i>g){const x=2*Math.sqrt(1+i-a-g);this._w=(v-d)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(o+h)/x}else if(a>g){const x=2*Math.sqrt(1+a-i-g);this._w=(o-h)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(d+v)/x}else{const x=2*Math.sqrt(1+g-i-a);this._w=(l-r)/x,this._x=(o+h)/x,this._y=(d+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,l=e._w,a=n._x,d=n._y,h=n._z,v=n._w;return this._x=i*v+l*a+r*h-o*d,this._y=r*v+l*d+o*a-i*h,this._z=o*v+l*h+i*d-r*a,this._w=l*v-i*a-r*d-o*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const d=1-a*a;if(d<=Number.EPSILON){const x=1-n;return this._w=x*l+n*this._w,this._x=x*i+n*this._x,this._y=x*r+n*this._y,this._z=x*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),v=Math.atan2(h,a),g=Math.sin((1-n)*v)/h,y=Math.sin(n*v)/h;return this._w=l*g+this._w*y,this._x=i*g+this._x*y,this._y=r*g+this._y*y,this._z=o*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_g.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,l=e.y,a=e.z,d=e.w,h=d*n+l*r-a*i,v=d*i+a*n-o*r,g=d*r+o*i-l*n,y=-o*n-l*i-a*r;return this.x=h*d+y*-o+v*-a-g*-l,this.y=v*d+y*-l+g*-o-h*-a,this.z=g*d+y*-a+h*-l-v*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,l=n.x,a=n.y,d=n.z;return this.x=r*d-o*a,this.y=o*l-i*d,this.z=i*a-r*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new X,_g=new Co;class Ml{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox),Wo.applyMatrix4(e.matrixWorld),this.union(Wo);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let l=0,a=o.count;l<a;l++)$i.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint($i)}else r.boundingBox===null&&r.computeBoundingBox(),Wo.copy(r.boundingBox),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),pu.subVectors(this.max,_a),jo.subVectors(e.a,_a),Xo.subVectors(e.b,_a),qo.subVectors(e.c,_a),vr.subVectors(Xo,jo),gr.subVectors(qo,Xo),eo.subVectors(jo,qo);let n=[0,-vr.z,vr.y,0,-gr.z,gr.y,0,-eo.z,eo.y,vr.z,0,-vr.x,gr.z,0,-gr.x,eo.z,0,-eo.x,-vr.y,vr.x,0,-gr.y,gr.x,0,-eo.y,eo.x,0];return!cd(n,jo,Xo,qo,pu)||(n=[1,0,0,0,1,0,0,0,1],!cd(n,jo,Xo,qo,pu))?!1:(mu.crossVectors(vr,gr),n=[mu.x,mu.y,mu.z],cd(n,jo,Xo,qo,pu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new X,new X,new X,new X,new X,new X,new X,new X],$i=new X,Wo=new Ml,jo=new X,Xo=new X,qo=new X,vr=new X,gr=new X,eo=new X,_a=new X,pu=new X,mu=new X,to=new X;function cd(t,e,n,i,r){for(let o=0,l=t.length-3;o<=l;o+=3){to.fromArray(t,o);const a=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),d=e.dot(to),h=n.dot(to),v=i.dot(to);if(Math.max(-Math.max(d,h,v),Math.min(d,h,v))>a)return!1}return!0}const gb=new Ml,Sa=new X,fd=new X;class Up{constructor(e=new X,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gb.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(fd)),this.expandByPoint(Sa.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new X,dd=new X,vu=new X,yr=new X,hd=new X,gu=new X,pd=new X;class yb{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,n),Yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){dd.copy(e).add(n).multiplyScalar(.5),vu.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(dd);const o=e.distanceTo(n)*.5,l=-this.direction.dot(vu),a=yr.dot(this.direction),d=-yr.dot(vu),h=yr.lengthSq(),v=Math.abs(1-l*l);let g,y,x,E;if(v>0)if(g=l*d-a,y=l*a-d,E=o*v,g>=0)if(y>=-E)if(y<=E){const A=1/v;g*=A,y*=A,x=g*(g+l*y+2*a)+y*(l*g+y+2*d)+h}else y=o,g=Math.max(0,-(l*y+a)),x=-g*g+y*(y+2*d)+h;else y=-o,g=Math.max(0,-(l*y+a)),x=-g*g+y*(y+2*d)+h;else y<=-E?(g=Math.max(0,-(-l*o+a)),y=g>0?-o:Math.min(Math.max(-o,-d),o),x=-g*g+y*(y+2*d)+h):y<=E?(g=0,y=Math.min(Math.max(-o,-d),o),x=y*(y+2*d)+h):(g=Math.max(0,-(l*o+a)),y=g>0?o:Math.min(Math.max(-o,-d),o),x=-g*g+y*(y+2*d)+h);else y=l>0?-o:o,g=Math.max(0,-(l*y+a)),x=-g*g+y*(y+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(dd).addScaledVector(vu,y),x}intersectSphere(e,n){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),a=i-l,d=i+l;return d<0?null:a<0?this.at(d,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,l,a,d;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return h>=0?(i=(e.min.x-y.x)*h,r=(e.max.x-y.x)*h):(i=(e.max.x-y.x)*h,r=(e.min.x-y.x)*h),v>=0?(o=(e.min.y-y.y)*v,l=(e.max.y-y.y)*v):(o=(e.max.y-y.y)*v,l=(e.min.y-y.y)*v),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),g>=0?(a=(e.min.z-y.z)*g,d=(e.max.z-y.z)*g):(a=(e.max.z-y.z)*g,d=(e.min.z-y.z)*g),i>d||a>r)||((a>i||i!==i)&&(i=a),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,n,i,r,o){hd.subVectors(n,e),gu.subVectors(i,e),pd.crossVectors(hd,gu);let l=this.direction.dot(pd),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;yr.subVectors(this.origin,e);const d=a*this.direction.dot(gu.crossVectors(yr,gu));if(d<0)return null;const h=a*this.direction.dot(hd.cross(yr));if(h<0||d+h>l)return null;const v=-a*yr.dot(pd);return v<0?null:this.at(v/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,l,a,d,h,v,g,y,x,E,A,_){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=l,p[9]=a,p[13]=d,p[2]=h,p[6]=v,p[10]=g,p[14]=y,p[3]=x,p[7]=E,p[11]=A,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),o=1/$o.setFromMatrixColumn(e,1).length(),l=1/$o.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),a=Math.sin(i),d=Math.cos(r),h=Math.sin(r),v=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const y=l*v,x=l*g,E=a*v,A=a*g;n[0]=d*v,n[4]=-d*g,n[8]=h,n[1]=x+E*h,n[5]=y-A*h,n[9]=-a*d,n[2]=A-y*h,n[6]=E+x*h,n[10]=l*d}else if(e.order==="YXZ"){const y=d*v,x=d*g,E=h*v,A=h*g;n[0]=y+A*a,n[4]=E*a-x,n[8]=l*h,n[1]=l*g,n[5]=l*v,n[9]=-a,n[2]=x*a-E,n[6]=A+y*a,n[10]=l*d}else if(e.order==="ZXY"){const y=d*v,x=d*g,E=h*v,A=h*g;n[0]=y-A*a,n[4]=-l*g,n[8]=E+x*a,n[1]=x+E*a,n[5]=l*v,n[9]=A-y*a,n[2]=-l*h,n[6]=a,n[10]=l*d}else if(e.order==="ZYX"){const y=l*v,x=l*g,E=a*v,A=a*g;n[0]=d*v,n[4]=E*h-x,n[8]=y*h+A,n[1]=d*g,n[5]=A*h+y,n[9]=x*h-E,n[2]=-h,n[6]=a*d,n[10]=l*d}else if(e.order==="YZX"){const y=l*d,x=l*h,E=a*d,A=a*h;n[0]=d*v,n[4]=A-y*g,n[8]=E*g+x,n[1]=g,n[5]=l*v,n[9]=-a*v,n[2]=-h*v,n[6]=x*g+E,n[10]=y-A*g}else if(e.order==="XZY"){const y=l*d,x=l*h,E=a*d,A=a*h;n[0]=d*v,n[4]=-g,n[8]=h*v,n[1]=y*g+A,n[5]=l*v,n[9]=x*g-E,n[2]=E*g-x,n[6]=a*v,n[10]=A*g+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,_b)}lookAt(e,n,i){const r=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),xr.crossVectors(i,$n),xr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),xr.crossVectors(i,$n)),xr.normalize(),yu.crossVectors($n,xr),r[0]=xr.x,r[4]=yu.x,r[8]=$n.x,r[1]=xr.y,r[5]=yu.y,r[9]=$n.y,r[2]=xr.z,r[6]=yu.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,l=i[0],a=i[4],d=i[8],h=i[12],v=i[1],g=i[5],y=i[9],x=i[13],E=i[2],A=i[6],_=i[10],p=i[14],w=i[3],b=i[7],P=i[11],D=i[15],O=r[0],B=r[4],k=r[8],R=r[12],N=r[1],se=r[5],ue=r[9],$=r[13],Z=r[2],W=r[6],fe=r[10],me=r[14],j=r[3],J=r[7],re=r[11],Te=r[15];return o[0]=l*O+a*N+d*Z+h*j,o[4]=l*B+a*se+d*W+h*J,o[8]=l*k+a*ue+d*fe+h*re,o[12]=l*R+a*$+d*me+h*Te,o[1]=v*O+g*N+y*Z+x*j,o[5]=v*B+g*se+y*W+x*J,o[9]=v*k+g*ue+y*fe+x*re,o[13]=v*R+g*$+y*me+x*Te,o[2]=E*O+A*N+_*Z+p*j,o[6]=E*B+A*se+_*W+p*J,o[10]=E*k+A*ue+_*fe+p*re,o[14]=E*R+A*$+_*me+p*Te,o[3]=w*O+b*N+P*Z+D*j,o[7]=w*B+b*se+P*W+D*J,o[11]=w*k+b*ue+P*fe+D*re,o[15]=w*R+b*$+P*me+D*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],l=e[1],a=e[5],d=e[9],h=e[13],v=e[2],g=e[6],y=e[10],x=e[14],E=e[3],A=e[7],_=e[11],p=e[15];return E*(+o*d*g-r*h*g-o*a*y+i*h*y+r*a*x-i*d*x)+A*(+n*d*x-n*h*y+o*l*y-r*l*x+r*h*v-o*d*v)+_*(+n*h*g-n*a*x-o*l*g+i*l*x+o*a*v-i*h*v)+p*(-r*a*v-n*d*g+n*a*y+r*l*g-i*l*y+i*d*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],h=e[7],v=e[8],g=e[9],y=e[10],x=e[11],E=e[12],A=e[13],_=e[14],p=e[15],w=g*_*h-A*y*h+A*d*x-a*_*x-g*d*p+a*y*p,b=E*y*h-v*_*h-E*d*x+l*_*x+v*d*p-l*y*p,P=v*A*h-E*g*h+E*a*x-l*A*x-v*a*p+l*g*p,D=E*g*d-v*A*d-E*a*y+l*A*y+v*a*_-l*g*_,O=n*w+i*b+r*P+o*D;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=w*B,e[1]=(A*y*o-g*_*o-A*r*x+i*_*x+g*r*p-i*y*p)*B,e[2]=(a*_*o-A*d*o+A*r*h-i*_*h-a*r*p+i*d*p)*B,e[3]=(g*d*o-a*y*o-g*r*h+i*y*h+a*r*x-i*d*x)*B,e[4]=b*B,e[5]=(v*_*o-E*y*o+E*r*x-n*_*x-v*r*p+n*y*p)*B,e[6]=(E*d*o-l*_*o-E*r*h+n*_*h+l*r*p-n*d*p)*B,e[7]=(l*y*o-v*d*o+v*r*h-n*y*h-l*r*x+n*d*x)*B,e[8]=P*B,e[9]=(E*g*o-v*A*o-E*i*x+n*A*x+v*i*p-n*g*p)*B,e[10]=(l*A*o-E*a*o+E*i*h-n*A*h-l*i*p+n*a*p)*B,e[11]=(v*a*o-l*g*o-v*i*h+n*g*h+l*i*x-n*a*x)*B,e[12]=D*B,e[13]=(v*A*r-E*g*r+E*i*y-n*A*y-v*i*_+n*g*_)*B,e[14]=(E*a*r-l*A*r-E*i*d+n*A*d+l*i*_-n*a*_)*B,e[15]=(l*g*r-v*a*r+v*i*d-n*g*d-l*i*y+n*a*y)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,l=e.x,a=e.y,d=e.z,h=o*l,v=o*a;return this.set(h*l+i,h*a-r*d,h*d+r*a,0,h*a+r*d,v*a+i,v*d-r*l,0,h*d-r*a,v*d+r*l,o*d*d+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,l=n._y,a=n._z,d=n._w,h=o+o,v=l+l,g=a+a,y=o*h,x=o*v,E=o*g,A=l*v,_=l*g,p=a*g,w=d*h,b=d*v,P=d*g,D=i.x,O=i.y,B=i.z;return r[0]=(1-(A+p))*D,r[1]=(x+P)*D,r[2]=(E-b)*D,r[3]=0,r[4]=(x-P)*O,r[5]=(1-(y+p))*O,r[6]=(_+w)*O,r[7]=0,r[8]=(E+b)*B,r[9]=(_-w)*B,r[10]=(1-(y+A))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=$o.set(r[0],r[1],r[2]).length();const l=$o.set(r[4],r[5],r[6]).length(),a=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const h=1/o,v=1/l,g=1/a;return gi.elements[0]*=h,gi.elements[1]*=h,gi.elements[2]*=h,gi.elements[4]*=v,gi.elements[5]*=v,gi.elements[6]*=v,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,n.setFromRotationMatrix(gi),i.x=o,i.y=l,i.z=a,this}makePerspective(e,n,i,r,o,l){const a=this.elements,d=2*o/(n-e),h=2*o/(i-r),v=(n+e)/(n-e),g=(i+r)/(i-r),y=-(l+o)/(l-o),x=-2*l*o/(l-o);return a[0]=d,a[4]=0,a[8]=v,a[12]=0,a[1]=0,a[5]=h,a[9]=g,a[13]=0,a[2]=0,a[6]=0,a[10]=y,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,l){const a=this.elements,d=1/(n-e),h=1/(i-r),v=1/(l-o),g=(n+e)*d,y=(i+r)*h,x=(l+o)*v;return a[0]=2*d,a[4]=0,a[8]=0,a[12]=-g,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-y,a[2]=0,a[6]=0,a[10]=-2*v,a[14]=-x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $o=new X,gi=new Gt,xb=new X(0,0,0),_b=new X(1,1,1),xr=new X,yu=new X,$n=new X,Sg=new Gt,Mg=new Co;class Hc{constructor(e=0,n=0,i=0,r=Hc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],a=r[8],d=r[1],h=r[5],v=r[9],g=r[2],y=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(wn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hc.DEFAULT_ORDER="XYZ";class Gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sb=0;const wg=new X,Yo=new Co,Ki=new Gt,xu=new X,Ma=new X,Mb=new X,wb=new Co,bg=new X(1,0,0),Eg=new X(0,1,0),Tg=new X(0,0,1),bb={type:"added"},Cg={type:"removed"};class tn extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new X,n=new Hc,i=new Co,r=new X(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yo.setFromAxisAngle(e,n),this.quaternion.multiply(Yo),this}rotateOnWorldAxis(e,n){return Yo.setFromAxisAngle(e,n),this.quaternion.premultiply(Yo),this}rotateX(e){return this.rotateOnAxis(bg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,n){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xu.copy(e):xu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ma,xu,this.up):Ki.lookAt(xu,Ma,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Yo.setFromRotationMatrix(Ki),this.quaternion.premultiply(Yo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Cg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const l=this.children[r].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,Mb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,wb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,d){return a[d.uuid]===void 0&&(a[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const d=a.shapes;if(Array.isArray(d))for(let h=0,v=d.length;h<v;h++){const g=d[h];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let d=0,h=this.material.length;d<h;d++)a.push(o(e.materials,this.material[d]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const d=this.animations[a];r.animations.push(o(e.animations,d))}}if(n){const a=l(e.geometries),d=l(e.materials),h=l(e.textures),v=l(e.images),g=l(e.shapes),y=l(e.skeletons),x=l(e.animations),E=l(e.nodes);a.length>0&&(i.geometries=a),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),v.length>0&&(i.images=v),g.length>0&&(i.shapes=g),y.length>0&&(i.skeletons=y),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=r,i;function l(a){const d=[];for(const h in a){const v=a[h];delete v.metadata,d.push(v)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new X(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new X,Zi=new X,md=new X,Qi=new X,Ko=new X,Zo=new X,Pg=new X,vd=new X,gd=new X,yd=new X;let _u=!1;class wi{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yi.subVectors(e,n),r.cross(yi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){yi.subVectors(r,n),Zi.subVectors(i,n),md.subVectors(e,n);const l=yi.dot(yi),a=yi.dot(Zi),d=yi.dot(md),h=Zi.dot(Zi),v=Zi.dot(md),g=l*h-a*a;if(g===0)return o.set(-2,-1,-1);const y=1/g,x=(h*d-a*v)*y,E=(l*v-a*d)*y;return o.set(1-x-E,E,x)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qi),Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,n,i,r,o,l,a,d){return _u===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_u=!0),this.getInterpolation(e,n,i,r,o,l,a,d)}static getInterpolation(e,n,i,r,o,l,a,d){return this.getBarycoord(e,n,i,r,Qi),d.setScalar(0),d.addScaledVector(o,Qi.x),d.addScaledVector(l,Qi.y),d.addScaledVector(a,Qi.z),d}static isFrontFacing(e,n,i,r){return yi.subVectors(i,n),Zi.subVectors(e,n),yi.cross(Zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),yi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return _u===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_u=!0),wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let l,a;Ko.subVectors(r,i),Zo.subVectors(o,i),vd.subVectors(e,i);const d=Ko.dot(vd),h=Zo.dot(vd);if(d<=0&&h<=0)return n.copy(i);gd.subVectors(e,r);const v=Ko.dot(gd),g=Zo.dot(gd);if(v>=0&&g<=v)return n.copy(r);const y=d*g-v*h;if(y<=0&&d>=0&&v<=0)return l=d/(d-v),n.copy(i).addScaledVector(Ko,l);yd.subVectors(e,o);const x=Ko.dot(yd),E=Zo.dot(yd);if(E>=0&&x<=E)return n.copy(o);const A=x*h-d*E;if(A<=0&&h>=0&&E<=0)return a=h/(h-E),n.copy(i).addScaledVector(Zo,a);const _=v*E-x*g;if(_<=0&&g-v>=0&&x-E>=0)return Pg.subVectors(o,r),a=(g-v)/(g-v+(x-E)),n.copy(r).addScaledVector(Pg,a);const p=1/(_+A+y);return l=A*p,a=y*p,n.copy(i).addScaledVector(Ko,l).addScaledVector(Zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Eb=0;class Hr extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=Cs,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rx,this.blendDst=Lx,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=id,this.stencilZFail=id,this.stencilZPass=id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const a in o){const d=o[a];delete d.metadata,l.push(d)}return l}if(n){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Su={h:0,s:0,l:0};function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qn.workingColorSpace){return this.r=e,this.g=n,this.b=i,qn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qn.workingColorSpace){if(e=ab(e,1),n=wn(n,0,1),i=wn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=xd(l,o,e+1/3),this.g=xd(l,o,e),this.b=xd(l,o,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,n=ki){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,qn.toWorkingColorSpace(this,n),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,qn.toWorkingColorSpace(this,n),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const d=parseFloat(o[1])/360,h=parseFloat(o[2])/100,v=parseFloat(o[3])/100;return i(o[4]),this.setHSL(d,h,v,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ki){const i=Hx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=ad(e.r),this.g=ad(e.g),this.b=ad(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ki){return qn.fromWorkingColorSpace(Sn.copy(this),e),wn(Sn.r*255,0,255)<<16^wn(Sn.g*255,0,255)<<8^wn(Sn.b*255,0,255)<<0}getHexString(e=ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qn.workingColorSpace){qn.fromWorkingColorSpace(Sn.copy(this),n);const i=Sn.r,r=Sn.g,o=Sn.b,l=Math.max(i,r,o),a=Math.min(i,r,o);let d,h;const v=(a+l)/2;if(a===l)d=0,h=0;else{const g=l-a;switch(h=v<=.5?g/(l+a):g/(2-l-a),l){case i:d=(r-o)/g+(r<o?6:0);break;case r:d=(o-i)/g+2;break;case o:d=(i-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=v,e}getRGB(e,n=qn.workingColorSpace){return qn.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ki){qn.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,r=Sn.b;return e!==ki?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${n*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,n,i){return this.getHSL(xi),xi.h+=e,xi.s+=n,xi.l+=i,this.setHSL(xi.h,xi.s,xi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xi),e.getHSL(Su);const i=od(xi.h,Su.h,n),r=od(xi.s,Su.s,n),o=od(xi.l,Su.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ze;Ze.NAMES=Hx;class yo extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new X,Mu=new Ne;class Pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mu.fromBufferAttribute(this,n),Mu.applyMatrix3(e),this.setXY(n,Mu.x,Mu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hu(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hu(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hu(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hu(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wx extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jx extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Tb=0;const si=new Gt,_d=new tn,Qo=new X,Yn=new Ml,wa=new Ml,ln=new X;class Di extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?jx:Wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ft().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,i){return si.makeTranslation(e,n,i),this.applyMatrix4(si),this}scale(e,n,i){return si.makeScale(e,n,i),this.applyMatrix4(si),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const a=n[o];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Yn.min,wa.min),Yn.expandByPoint(ln),ln.addVectors(Yn.max,wa.max),Yn.expandByPoint(ln)):(Yn.expandByPoint(wa.min),Yn.expandByPoint(wa.max))}Yn.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)ln.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ln));if(n)for(let o=0,l=n.length;o<l;o++){const a=n[o],d=this.morphTargetsRelative;for(let h=0,v=a.count;h<v;h++)ln.fromBufferAttribute(a,h),d&&(Qo.fromBufferAttribute(e,h),ln.add(Qo)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,l=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a),4));const d=this.getAttribute("tangent").array,h=[],v=[];for(let N=0;N<a;N++)h[N]=new X,v[N]=new X;const g=new X,y=new X,x=new X,E=new Ne,A=new Ne,_=new Ne,p=new X,w=new X;function b(N,se,ue){g.fromArray(r,N*3),y.fromArray(r,se*3),x.fromArray(r,ue*3),E.fromArray(l,N*2),A.fromArray(l,se*2),_.fromArray(l,ue*2),y.sub(g),x.sub(g),A.sub(E),_.sub(E);const $=1/(A.x*_.y-_.x*A.y);isFinite($)&&(p.copy(y).multiplyScalar(_.y).addScaledVector(x,-A.y).multiplyScalar($),w.copy(x).multiplyScalar(A.x).addScaledVector(y,-_.x).multiplyScalar($),h[N].add(p),h[se].add(p),h[ue].add(p),v[N].add(w),v[se].add(w),v[ue].add(w))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let N=0,se=P.length;N<se;++N){const ue=P[N],$=ue.start,Z=ue.count;for(let W=$,fe=$+Z;W<fe;W+=3)b(i[W+0],i[W+1],i[W+2])}const D=new X,O=new X,B=new X,k=new X;function R(N){B.fromArray(o,N*3),k.copy(B);const se=h[N];D.copy(se),D.sub(B.multiplyScalar(B.dot(se))).normalize(),O.crossVectors(k,se);const $=O.dot(v[N])<0?-1:1;d[N*4]=D.x,d[N*4+1]=D.y,d[N*4+2]=D.z,d[N*4+3]=$}for(let N=0,se=P.length;N<se;++N){const ue=P[N],$=ue.start,Z=ue.count;for(let W=$,fe=$+Z;W<fe;W+=3)R(i[W+0]),R(i[W+1]),R(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let y=0,x=i.count;y<x;y++)i.setXYZ(y,0,0,0);const r=new X,o=new X,l=new X,a=new X,d=new X,h=new X,v=new X,g=new X;if(e)for(let y=0,x=e.count;y<x;y+=3){const E=e.getX(y+0),A=e.getX(y+1),_=e.getX(y+2);r.fromBufferAttribute(n,E),o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,_),v.subVectors(l,o),g.subVectors(r,o),v.cross(g),a.fromBufferAttribute(i,E),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,_),a.add(v),d.add(v),h.add(v),i.setXYZ(E,a.x,a.y,a.z),i.setXYZ(A,d.x,d.y,d.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let y=0,x=n.count;y<x;y+=3)r.fromBufferAttribute(n,y+0),o.fromBufferAttribute(n,y+1),l.fromBufferAttribute(n,y+2),v.subVectors(l,o),g.subVectors(r,o),v.cross(g),i.setXYZ(y+0,v.x,v.y,v.z),i.setXYZ(y+1,v.x,v.y,v.z),i.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,d){const h=a.array,v=a.itemSize,g=a.normalized,y=new h.constructor(d.length*v);let x=0,E=0;for(let A=0,_=d.length;A<_;A++){a.isInterleavedBufferAttribute?x=d[A]*a.data.stride+a.offset:x=d[A]*v;for(let p=0;p<v;p++)y[E++]=h[x++]}return new Pi(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,i=this.index.array,r=this.attributes;for(const a in r){const d=r[a],h=e(d,i);n.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const d=[],h=o[a];for(let v=0,g=h.length;v<g;v++){const y=h[v],x=e(y,i);d.push(x)}n.morphAttributes[a]=d}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,d=l.length;a<d;a++){const h=l[a];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],v=[];for(let g=0,y=h.length;g<y;g++){const x=h[g];v.push(x.toJSON(e.data))}v.length>0&&(r[d]=v,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const h in r){const v=r[h];this.setAttribute(h,v.clone(n))}const o=e.morphAttributes;for(const h in o){const v=[],g=o[h];for(let y=0,x=g.length;y<x;y++)v.push(g[y].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,v=l.length;h<v;h++){const g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new Gt,Oi=new yb,wu=new Up,Dg=new X,Jo=new X,es=new X,ts=new X,Sd=new X,bu=new X,Eu=new Ne,Tu=new Ne,Cu=new Ne,Rg=new X,Lg=new X,Ig=new X,Pu=new X,Au=new X;class Bn extends tn{constructor(e=new Di,n=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){bu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const v=a[d],g=o[d];v!==0&&(Sd.fromBufferAttribute(g,e),l?bu.addScaledVector(Sd,v):bu.addScaledVector(Sd.sub(n),v))}n.add(bu)}return this.isSkinnedMesh&&this.applyBoneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),wu.copy(i.boundingSphere),wu.applyMatrix4(o),Oi.copy(e.ray).recast(e.near),wu.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(wu,Dg)===null||Oi.origin.distanceToSquared(Dg)>(e.far-e.near)**2))||(Ag.copy(o).invert(),Oi.copy(e.ray).applyMatrix4(Ag),i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1))return;let l;const a=i.index,d=i.attributes.position,h=i.attributes.uv,v=i.attributes.uv2,g=i.attributes.normal,y=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let E=0,A=y.length;E<A;E++){const _=y[E],p=r[_.materialIndex],w=Math.max(_.start,x.start),b=Math.min(a.count,Math.min(_.start+_.count,x.start+x.count));for(let P=w,D=b;P<D;P+=3){const O=a.getX(P),B=a.getX(P+1),k=a.getX(P+2);l=Du(this,p,e,Oi,h,v,g,O,B,k),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=_.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(a.count,x.start+x.count);for(let _=E,p=A;_<p;_+=3){const w=a.getX(_),b=a.getX(_+1),P=a.getX(_+2);l=Du(this,r,e,Oi,h,v,g,w,b,P),l&&(l.faceIndex=Math.floor(_/3),n.push(l))}}else if(d!==void 0)if(Array.isArray(r))for(let E=0,A=y.length;E<A;E++){const _=y[E],p=r[_.materialIndex],w=Math.max(_.start,x.start),b=Math.min(d.count,Math.min(_.start+_.count,x.start+x.count));for(let P=w,D=b;P<D;P+=3){const O=P,B=P+1,k=P+2;l=Du(this,p,e,Oi,h,v,g,O,B,k),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=_.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let _=E,p=A;_<p;_+=3){const w=_,b=_+1,P=_+2;l=Du(this,r,e,Oi,h,v,g,w,b,P),l&&(l.faceIndex=Math.floor(_/3),n.push(l))}}}}function Cb(t,e,n,i,r,o,l,a){let d;if(e.side===Rn?d=i.intersectTriangle(l,o,r,!0,a):d=i.intersectTriangle(r,o,l,e.side===zr,a),d===null)return null;Au.copy(a),Au.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Au);return h<n.near||h>n.far?null:{distance:h,point:Au.clone(),object:t}}function Du(t,e,n,i,r,o,l,a,d,h){t.getVertexPosition(a,Jo),t.getVertexPosition(d,es),t.getVertexPosition(h,ts);const v=Cb(t,e,n,i,Jo,es,ts,Pu);if(v){r&&(Eu.fromBufferAttribute(r,a),Tu.fromBufferAttribute(r,d),Cu.fromBufferAttribute(r,h),v.uv=wi.getInterpolation(Pu,Jo,es,ts,Eu,Tu,Cu,new Ne)),o&&(Eu.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,d),Cu.fromBufferAttribute(o,h),v.uv2=wi.getInterpolation(Pu,Jo,es,ts,Eu,Tu,Cu,new Ne)),l&&(Rg.fromBufferAttribute(l,a),Lg.fromBufferAttribute(l,d),Ig.fromBufferAttribute(l,h),v.normal=wi.getInterpolation(Pu,Jo,es,ts,Rg,Lg,Ig,new X),v.normal.dot(i.direction)>0&&v.normal.multiplyScalar(-1));const g={a,b:d,c:h,normal:new X,materialIndex:0};wi.getNormal(Jo,es,ts,g.normal),v.face=g}return v}class wl extends Di{constructor(e=1,n=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const a=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const d=[],h=[],v=[],g=[];let y=0,x=0;E("z","y","x",-1,-1,i,n,e,l,o,0),E("z","y","x",1,-1,i,n,-e,l,o,1),E("x","z","y",1,1,e,i,n,r,l,2),E("x","z","y",1,-1,e,i,-n,r,l,3),E("x","y","z",1,-1,e,n,i,r,o,4),E("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new Ln(h,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(g,2));function E(A,_,p,w,b,P,D,O,B,k,R){const N=P/B,se=D/k,ue=P/2,$=D/2,Z=O/2,W=B+1,fe=k+1;let me=0,j=0;const J=new X;for(let re=0;re<fe;re++){const Te=re*se-$;for(let ve=0;ve<W;ve++){const oe=ve*N-ue;J[A]=oe*w,J[_]=Te*b,J[p]=Z,h.push(J.x,J.y,J.z),J[A]=0,J[_]=0,J[p]=O>0?1:-1,v.push(J.x,J.y,J.z),g.push(ve/B),g.push(1-re/k),me+=1}}for(let re=0;re<k;re++)for(let Te=0;Te<B;Te++){const ve=y+Te+W*re,oe=y+Te+W*(re+1),q=y+(Te+1)+W*(re+1),we=y+(Te+1)+W*re;d.push(ve,oe,we),d.push(oe,q,we),j+=6}a.addGroup(x,j,R),x+=j,y+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Pn(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function Pb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xx(t){return t.getRenderTarget()===null&&t.outputEncoding===bt?ki:ul}const zn={clone:Vs,merge:Pn};var Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?n.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[r]={type:"m4",value:l.toArray()}:n.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends qx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mc*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/d,n-=l.offsetY*i/h,r*=l.width/d,i*=l.height/h}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class Rb extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new kn(ns,is,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new kn(ns,is,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const l=new kn(ns,is,e,n);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const a=new kn(ns,is,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const d=new kn(ns,is,e,n);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const h=new kn(ns,is,e,n);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,a,d,h]=this.children,v=e.getRenderTarget(),g=e.toneMapping,y=e.xr.enabled;e.toneMapping=Gi,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,d),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(n,h),e.setRenderTarget(v),e.toneMapping=g,e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class $x extends Wn{constructor(e,n,i,r,o,l,a,d,h,v){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,i,r,o,l,a,d,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lb extends en{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $x(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ui}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wl(5,5,5),o=new Lt({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:un});o.uniforms.tEquirect.value=n;const l=new Bn(r,o),a=n.minFilter;return n.minFilter===al&&(n.minFilter=ui),new Rb(1,10,this).update(e,l),n.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,r);e.setRenderTarget(o)}}const Md=new X,Ib=new X,Ob=new ft;class oo{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Md.subVectors(i,n).cross(Ib.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Md),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ob.getNormalMatrix(e),r=this.coplanarPoint(Md).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new Up,Ru=new X;class kp{constructor(e=new oo,n=new oo,i=new oo,r=new oo,o=new oo,l=new oo){this.planes=[e,n,i,r,o,l]}set(e,n,i,r,o,l){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],a=i[3],d=i[4],h=i[5],v=i[6],g=i[7],y=i[8],x=i[9],E=i[10],A=i[11],_=i[12],p=i[13],w=i[14],b=i[15];return n[0].setComponents(a-r,g-d,A-y,b-_).normalize(),n[1].setComponents(a+r,g+d,A+y,b+_).normalize(),n[2].setComponents(a+o,g+h,A+x,b+p).normalize(),n[3].setComponents(a-o,g-h,A-x,b-p).normalize(),n[4].setComponents(a-l,g-v,A-E,b-w).normalize(),n[5].setComponents(a+l,g+v,A+E,b+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ru.x=r.normal.x>0?e.max.x:e.min.x,Ru.y=r.normal.y>0?e.max.y:e.min.y,Ru.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yx(){let t=null,e=!1,n=null,i=null;function r(o,l){n(o,l),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Nb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(h,v){const g=h.array,y=h.usage,x=t.createBuffer();t.bindBuffer(v,x),t.bufferData(v,g,y),h.onUploadCallback();let E;if(g instanceof Float32Array)E=5126;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)E=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=5123;else if(g instanceof Int16Array)E=5122;else if(g instanceof Uint32Array)E=5125;else if(g instanceof Int32Array)E=5124;else if(g instanceof Int8Array)E=5120;else if(g instanceof Uint8Array)E=5121;else if(g instanceof Uint8ClampedArray)E=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function o(h,v,g){const y=v.array,x=v.updateRange;t.bindBuffer(g,h),x.count===-1?t.bufferSubData(g,0,y):(n?t.bufferSubData(g,x.offset*y.BYTES_PER_ELEMENT,y,x.offset,x.count):t.bufferSubData(g,x.offset*y.BYTES_PER_ELEMENT,y.subarray(x.offset,x.offset+x.count)),x.count=-1),v.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=i.get(h);v&&(t.deleteBuffer(v.buffer),i.delete(h))}function d(h,v){if(h.isGLBufferAttribute){const y=i.get(h);(!y||y.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=i.get(h);g===void 0?i.set(h,r(h,v)):g.version<h.version&&(o(g.buffer,h,v),g.version=h.version)}return{get:l,remove:a,update:d}}class bl extends Di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,l=n/2,a=Math.floor(i),d=Math.floor(r),h=a+1,v=d+1,g=e/a,y=n/d,x=[],E=[],A=[],_=[];for(let p=0;p<v;p++){const w=p*y-l;for(let b=0;b<h;b++){const P=b*g-o;E.push(P,-w,0),A.push(0,0,1),_.push(b/a),_.push(1-p/d)}}for(let p=0;p<d;p++)for(let w=0;w<a;w++){const b=w+h*p,P=w+h*(p+1),D=w+1+h*(p+1),O=w+1+h*p;x.push(b,P,O),x.push(P,D,O)}this.setIndex(x),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb="vec3 transformed = vec3( position );",Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jb=`#ifdef USE_IRIDESCENCE
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
#endif`,Xb=`#ifdef USE_BUMPMAP
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tE=`#define PI 3.141592653589793
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
} // validated`,nE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iE=`vec3 transformedNormal = objectNormal;
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
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lE="gl_FragColor = linearToOutputTexel( gl_FragColor );",uE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xE=`#ifdef USE_GRADIENTMAP
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
}`,_E=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bE=`uniform bool receiveShadow;
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
#endif`,EE=`#if defined( USE_ENVMAP )
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
#endif`,TE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DE=`PhysicalMaterial material;
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
#endif`,RE=`struct PhysicalMaterial {
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
}`,LE=`
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
#endif`,IE=`#if defined( RE_IndirectDiffuse )
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
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,NE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GE=`#if defined( USE_POINTS_UV )
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
#endif`,HE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
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
#endif`,qE=`#ifdef USE_MORPHTARGETS
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
#endif`,$E=`#ifdef USE_MORPHTARGETS
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
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,KE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
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
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vT=`float getShadowMask() {
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
}`,gT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,xT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
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
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ET=`#ifdef USE_TRANSMISSION
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
#endif`,TT=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
#endif`,CT=`#ifdef USE_UV
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
#endif`,PT=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,AT=`#ifdef USE_UV
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
#endif`,DT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kT=`#include <common>
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
}`,zT=`#if DEPTH_PACKING == 3200
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
}`,FT=`#define DISTANCE
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
}`,BT=`#define DISTANCE
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,HT=`uniform float scale;
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
}`,WT=`uniform vec3 diffuse;
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
}`,jT=`#include <common>
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
}`,XT=`uniform vec3 diffuse;
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
}`,qT=`#define LAMBERT
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
}`,$T=`#define LAMBERT
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
}`,YT=`#define MATCAP
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
}`,KT=`#define MATCAP
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
}`,ZT=`#define NORMAL
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
}`,QT=`#define NORMAL
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
}`,JT=`#define PHONG
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
}`,eC=`#define PHONG
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
}`,tC=`#define STANDARD
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
}`,nC=`#define STANDARD
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
}`,iC=`#define TOON
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
}`,rC=`#define TOON
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
}`,oC=`uniform float size;
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
}`,sC=`uniform vec3 diffuse;
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
}`,aC=`#include <common>
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
}`,lC=`uniform vec3 color;
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
}`,uC=`uniform float rotation;
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
}`,cC=`uniform vec3 diffuse;
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
}`,ot={alphamap_fragment:Ub,alphamap_pars_fragment:kb,alphatest_fragment:zb,alphatest_pars_fragment:Fb,aomap_fragment:Bb,aomap_pars_fragment:Vb,begin_vertex:Gb,beginnormal_vertex:Hb,bsdfs:Wb,iridescence_fragment:jb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:qb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:Yb,clipping_planes_vertex:Kb,color_fragment:Zb,color_pars_fragment:Qb,color_pars_vertex:Jb,color_vertex:eE,common:tE,cube_uv_reflection_fragment:nE,defaultnormal_vertex:iE,displacementmap_pars_vertex:rE,displacementmap_vertex:oE,emissivemap_fragment:sE,emissivemap_pars_fragment:aE,encodings_fragment:lE,encodings_pars_fragment:uE,envmap_fragment:cE,envmap_common_pars_fragment:fE,envmap_pars_fragment:dE,envmap_pars_vertex:hE,envmap_physical_pars_fragment:EE,envmap_vertex:pE,fog_vertex:mE,fog_pars_vertex:vE,fog_fragment:gE,fog_pars_fragment:yE,gradientmap_pars_fragment:xE,lightmap_fragment:_E,lightmap_pars_fragment:SE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:wE,lights_pars_begin:bE,lights_toon_fragment:TE,lights_toon_pars_fragment:CE,lights_phong_fragment:PE,lights_phong_pars_fragment:AE,lights_physical_fragment:DE,lights_physical_pars_fragment:RE,lights_fragment_begin:LE,lights_fragment_maps:IE,lights_fragment_end:OE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:UE,logdepthbuf_pars_vertex:kE,logdepthbuf_vertex:zE,map_fragment:FE,map_pars_fragment:BE,map_particle_fragment:VE,map_particle_pars_fragment:GE,metalnessmap_fragment:HE,metalnessmap_pars_fragment:WE,morphcolor_vertex:jE,morphnormal_vertex:XE,morphtarget_pars_vertex:qE,morphtarget_vertex:$E,normal_fragment_begin:YE,normal_fragment_maps:KE,normal_pars_fragment:ZE,normal_pars_vertex:QE,normal_vertex:JE,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:nT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:rT,output_fragment:oT,packing:sT,premultiplied_alpha_fragment:aT,project_vertex:lT,dithering_fragment:uT,dithering_pars_fragment:cT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:dT,shadowmap_pars_fragment:hT,shadowmap_pars_vertex:pT,shadowmap_vertex:mT,shadowmask_pars_fragment:vT,skinbase_vertex:gT,skinning_pars_vertex:yT,skinning_vertex:xT,skinnormal_vertex:_T,specularmap_fragment:ST,specularmap_pars_fragment:MT,tonemapping_fragment:wT,tonemapping_pars_fragment:bT,transmission_fragment:ET,transmission_pars_fragment:TT,uv_pars_fragment:CT,uv_pars_vertex:PT,uv_vertex:AT,worldpos_vertex:DT,background_vert:RT,background_frag:LT,backgroundCube_vert:IT,backgroundCube_frag:OT,cube_vert:NT,cube_frag:UT,depth_vert:kT,depth_frag:zT,distanceRGBA_vert:FT,distanceRGBA_frag:BT,equirect_vert:VT,equirect_frag:GT,linedashed_vert:HT,linedashed_frag:WT,meshbasic_vert:jT,meshbasic_frag:XT,meshlambert_vert:qT,meshlambert_frag:$T,meshmatcap_vert:YT,meshmatcap_frag:KT,meshnormal_vert:ZT,meshnormal_frag:QT,meshphong_vert:JT,meshphong_frag:eC,meshphysical_vert:tC,meshphysical_frag:nC,meshtoon_vert:iC,meshtoon_frag:rC,points_vert:oC,points_frag:sC,shadow_vert:aC,shadow_frag:lC,sprite_vert:uC,sprite_frag:cC},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Pn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Pn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Pn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Pn([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Lu={r:0,b:0,g:0};function fC(t,e,n,i,r,o,l){const a=new Ze(0);let d=o===!0?0:1,h,v,g=null,y=0,x=null;function E(_,p){let w=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?n:e).get(b));const P=t.xr,D=P.getSession&&P.getSession();D&&D.environmentBlendMode==="additive"&&(b=null),b===null?A(a,d):b&&b.isColor&&(A(b,1),w=!0),(t.autoClear||w)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Gc)?(v===void 0&&(v=new Bn(new wl(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Vs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(v)),v.material.uniforms.envMap.value=b,v.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,v.material.toneMapped=b.encoding!==bt,(g!==b||y!==b.version||x!==t.toneMapping)&&(v.material.needsUpdate=!0,g=b,y=b.version,x=t.toneMapping),v.layers.enableAll(),_.unshift(v,v.geometry,v.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Bn(new bl(2,2),new Lt({name:"BackgroundMaterial",uniforms:Vs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=b.encoding!==bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||y!==b.version||x!==t.toneMapping)&&(h.material.needsUpdate=!0,g=b,y=b.version,x=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function A(_,p){_.getRGB(Lu,Xx(t)),i.buffers.color.setClear(Lu.r,Lu.g,Lu.b,p,l)}return{getClearColor:function(){return a},setClearColor:function(_,p=1){a.set(_),d=p,A(a,d)},getClearAlpha:function(){return d},setClearAlpha:function(_){d=_,A(a,d)},render:E}}function dC(t,e,n,i){const r=t.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,a={},d=_(null);let h=d,v=!1;function g(Z,W,fe,me,j){let J=!1;if(l){const re=A(me,fe,W);h!==re&&(h=re,x(h.object)),J=p(Z,me,fe,j),J&&w(Z,me,fe,j)}else{const re=W.wireframe===!0;(h.geometry!==me.id||h.program!==fe.id||h.wireframe!==re)&&(h.geometry=me.id,h.program=fe.id,h.wireframe=re,J=!0)}j!==null&&n.update(j,34963),(J||v)&&(v=!1,k(Z,W,fe,me),j!==null&&t.bindBuffer(34963,n.get(j).buffer))}function y(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function x(Z){return i.isWebGL2?t.bindVertexArray(Z):o.bindVertexArrayOES(Z)}function E(Z){return i.isWebGL2?t.deleteVertexArray(Z):o.deleteVertexArrayOES(Z)}function A(Z,W,fe){const me=fe.wireframe===!0;let j=a[Z.id];j===void 0&&(j={},a[Z.id]=j);let J=j[W.id];J===void 0&&(J={},j[W.id]=J);let re=J[me];return re===void 0&&(re=_(y()),J[me]=re),re}function _(Z){const W=[],fe=[],me=[];for(let j=0;j<r;j++)W[j]=0,fe[j]=0,me[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:fe,attributeDivisors:me,object:Z,attributes:{},index:null}}function p(Z,W,fe,me){const j=h.attributes,J=W.attributes;let re=0;const Te=fe.getAttributes();for(const ve in Te)if(Te[ve].location>=0){const q=j[ve];let we=J[ve];if(we===void 0&&(ve==="instanceMatrix"&&Z.instanceMatrix&&(we=Z.instanceMatrix),ve==="instanceColor"&&Z.instanceColor&&(we=Z.instanceColor)),q===void 0||q.attribute!==we||we&&q.data!==we.data)return!0;re++}return h.attributesNum!==re||h.index!==me}function w(Z,W,fe,me){const j={},J=W.attributes;let re=0;const Te=fe.getAttributes();for(const ve in Te)if(Te[ve].location>=0){let q=J[ve];q===void 0&&(ve==="instanceMatrix"&&Z.instanceMatrix&&(q=Z.instanceMatrix),ve==="instanceColor"&&Z.instanceColor&&(q=Z.instanceColor));const we={};we.attribute=q,q&&q.data&&(we.data=q.data),j[ve]=we,re++}h.attributes=j,h.attributesNum=re,h.index=me}function b(){const Z=h.newAttributes;for(let W=0,fe=Z.length;W<fe;W++)Z[W]=0}function P(Z){D(Z,0)}function D(Z,W){const fe=h.newAttributes,me=h.enabledAttributes,j=h.attributeDivisors;fe[Z]=1,me[Z]===0&&(t.enableVertexAttribArray(Z),me[Z]=1),j[Z]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,W),j[Z]=W)}function O(){const Z=h.newAttributes,W=h.enabledAttributes;for(let fe=0,me=W.length;fe<me;fe++)W[fe]!==Z[fe]&&(t.disableVertexAttribArray(fe),W[fe]=0)}function B(Z,W,fe,me,j,J){i.isWebGL2===!0&&(fe===5124||fe===5125)?t.vertexAttribIPointer(Z,W,fe,j,J):t.vertexAttribPointer(Z,W,fe,me,j,J)}function k(Z,W,fe,me){if(i.isWebGL2===!1&&(Z.isInstancedMesh||me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const j=me.attributes,J=fe.getAttributes(),re=W.defaultAttributeValues;for(const Te in J){const ve=J[Te];if(ve.location>=0){let oe=j[Te];if(oe===void 0&&(Te==="instanceMatrix"&&Z.instanceMatrix&&(oe=Z.instanceMatrix),Te==="instanceColor"&&Z.instanceColor&&(oe=Z.instanceColor)),oe!==void 0){const q=oe.normalized,we=oe.itemSize,Me=n.get(oe);if(Me===void 0)continue;const te=Me.buffer,Ke=Me.type,Ge=Me.bytesPerElement;if(oe.isInterleavedBufferAttribute){const be=oe.data,Be=be.stride,dt=oe.offset;if(be.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ve.locationSize;Fe++)D(ve.location+Fe,be.meshPerAttribute);Z.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Fe=0;Fe<ve.locationSize;Fe++)P(ve.location+Fe);t.bindBuffer(34962,te);for(let Fe=0;Fe<ve.locationSize;Fe++)B(ve.location+Fe,we/ve.locationSize,Ke,q,Be*Ge,(dt+we/ve.locationSize*Fe)*Ge)}else{if(oe.isInstancedBufferAttribute){for(let be=0;be<ve.locationSize;be++)D(ve.location+be,oe.meshPerAttribute);Z.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<ve.locationSize;be++)P(ve.location+be);t.bindBuffer(34962,te);for(let be=0;be<ve.locationSize;be++)B(ve.location+be,we/ve.locationSize,Ke,q,we*Ge,we/ve.locationSize*be*Ge)}}else if(re!==void 0){const q=re[Te];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(ve.location,q);break;case 3:t.vertexAttrib3fv(ve.location,q);break;case 4:t.vertexAttrib4fv(ve.location,q);break;default:t.vertexAttrib1fv(ve.location,q)}}}}O()}function R(){ue();for(const Z in a){const W=a[Z];for(const fe in W){const me=W[fe];for(const j in me)E(me[j].object),delete me[j];delete W[fe]}delete a[Z]}}function N(Z){if(a[Z.id]===void 0)return;const W=a[Z.id];for(const fe in W){const me=W[fe];for(const j in me)E(me[j].object),delete me[j];delete W[fe]}delete a[Z.id]}function se(Z){for(const W in a){const fe=a[W];if(fe[Z.id]===void 0)continue;const me=fe[Z.id];for(const j in me)E(me[j].object),delete me[j];delete fe[Z.id]}}function ue(){$(),v=!0,h!==d&&(h=d,x(h.object))}function $(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:ue,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:se,initAttributes:b,enableAttribute:P,disableUnusedAttributes:O}}function hC(t,e,n,i){const r=i.isWebGL2;let o;function l(h){o=h}function a(h,v){t.drawArrays(o,h,v),n.update(v,o,1)}function d(h,v,g){if(g===0)return;let y,x;if(r)y=t,x="drawArraysInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](o,h,v,g),n.update(v,o,g)}this.setMode=l,this.render=a,this.renderInstances=d}function pC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const d=o(a);d!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const h=l||e.has("WEBGL_draw_buffers"),v=n.logarithmicDepthBuffer===!0,g=t.getParameter(34930),y=t.getParameter(35660),x=t.getParameter(3379),E=t.getParameter(34076),A=t.getParameter(34921),_=t.getParameter(36347),p=t.getParameter(36348),w=t.getParameter(36349),b=y>0,P=l||e.has("OES_texture_float"),D=b&&P,O=l?t.getParameter(36183):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:v,maxTextures:g,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:E,maxAttributes:A,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:b,floatFragmentTextures:P,floatVertexTextures:D,maxSamples:O}}function mC(t){const e=this;let n=null,i=0,r=!1,o=!1;const l=new oo,a=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||i!==0||r;return r=y,i=g.length,x},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,y){n=v(g,y,0)},this.setState=function(g,y,x){const E=g.clippingPlanes,A=g.clipIntersection,_=g.clipShadows,p=t.get(g);if(!r||E===null||E.length===0||o&&!_)o?v(null):h();else{const w=o?0:i,b=w*4;let P=p.clippingState||null;d.value=P,P=v(E,y,b,x);for(let D=0;D!==b;++D)P[D]=n[D];p.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function v(g,y,x,E){const A=g!==null?g.length:0;let _=null;if(A!==0){if(_=d.value,E!==!0||_===null){const p=x+A*4,w=y.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<p)&&(_=new Float32Array(p));for(let b=0,P=x;b!==A;++b,P+=4)l.copy(g[b]).applyMatrix4(w,a),l.normal.toArray(_,P),_[P+3]=l.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}function vC(t){let e=new WeakMap;function n(l,a){return a===Sc?l.mapping=zs:a===Lh&&(l.mapping=Fs),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Sc||a===Lh)if(e.has(l)){const d=e.get(l).texture;return n(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new Lb(d.height/2);return h.fromEquirectangularTexture(t,l),e.set(l,h),l.addEventListener("dispose",r),n(h.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const d=e.get(a);d!==void 0&&(e.delete(a),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Wc extends qx{constructor(e=-1,n=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,a=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,a-=v*this.view.offsetY,d=a-v*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,Og=[.125,.215,.35,.446,.526,.582],lo=20,wd=new Wc,Ng=new Ze;let bd=null;const so=(1+Math.sqrt(5))/2,rs=1/so,Ug=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,so,rs),new X(0,so,-rs),new X(rs,0,so),new X(-rs,0,so),new X(so,rs,0),new X(-so,rs,0)];class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd),e.scissorTest=!1,Iu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:ll,format:Ei,encoding:To,depthBuffer:!1},r=zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gC(o)),this._blurMaterial=yC(o,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,wd)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(Ng),v.toneMapping=Gi,v.autoClear=!1;const x=new yo({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),E=new Bn(new wl,x);let A=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,A=!0):(x.color.copy(Ng),A=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,d[p],0),a.lookAt(h[p],0,0)):w===1?(a.up.set(0,0,d[p]),a.lookAt(0,h[p],0)):(a.up.set(0,d[p],0),a.lookAt(0,0,h[p]));const b=this._cubeSize;Iu(r,w*b,p>2?b:0,b,b),v.setRenderTarget(r),A&&v.render(E,a),v.render(e,a)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=y,v.autoClear=g,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zs||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const d=this._cubeSize;Iu(n,0,0,3*d,2*d),i.setRenderTarget(n),i.render(l,wd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Ug[(r-1)%Ug.length];this._blur(e,r-1,r,o,l)}n.autoClear=i}_blur(e,n,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,l,a){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Bn(this._lodPlanes[r],h),y=h.uniforms,x=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*lo-1),A=o/E,_=isFinite(o)?1+Math.floor(v*A):lo;_>lo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${lo}`);const p=[];let w=0;for(let B=0;B<lo;++B){const k=B/A,R=Math.exp(-k*k/2);p.push(R),B===0?w+=R:B<_&&(w+=2*R)}for(let B=0;B<p.length;B++)p[B]=p[B]/w;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=p,y.latitudinal.value=l==="latitudinal",a&&(y.poleAxis.value=a);const{_lodMax:b}=this;y.dTheta.value=E,y.mipInt.value=b-i;const P=this._sizeLods[r],D=3*P*(r>b-ys?r-b+ys:0),O=4*(this._cubeSize-P);Iu(n,D,O,3*P,2*P),d.setRenderTarget(n),d.render(g,wd)}}function gC(t){const e=[],n=[],i=[];let r=t;const o=t-ys+1+Og.length;for(let l=0;l<o;l++){const a=Math.pow(2,r);n.push(a);let d=1/a;l>t-ys?d=Og[l-t+ys-1]:l===0&&(d=0),i.push(d);const h=1/(a-2),v=-h,g=1+h,y=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,A=3,_=2,p=1,w=new Float32Array(A*E*x),b=new Float32Array(_*E*x),P=new Float32Array(p*E*x);for(let O=0;O<x;O++){const B=O%3*2/3-1,k=O>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];w.set(R,A*E*O),b.set(y,_*E*O);const N=[O,O,O,O,O,O];P.set(N,p*E*O)}const D=new Di;D.setAttribute("position",new Pi(w,A)),D.setAttribute("uv",new Pi(b,_)),D.setAttribute("faceIndex",new Pi(P,p)),e.push(D),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zg(t,e,n){const i=new en(t,e,n);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Iu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yC(t,e,n){const i=new Float32Array(lo),r=new X(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zp(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Fg(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zp(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Bg(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function zp(){return`

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
	`}function xC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const d=a.mapping,h=d===Sc||d===Lh,v=d===zs||d===Fs;if(h||v)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let g=e.get(a);return n===null&&(n=new kg(t)),g=h?n.fromEquirectangular(a,g):n.fromCubemap(a,g),e.set(a,g),g.texture}else{if(e.has(a))return e.get(a).texture;{const g=a.image;if(h&&g&&g.height>0||v&&g&&r(g)){n===null&&(n=new kg(t));const y=h?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,y),a.addEventListener("dispose",o),y.texture}else return null}}}return a}function r(a){let d=0;const h=6;for(let v=0;v<h;v++)a[v]!==void 0&&d++;return d===h}function o(a){const d=a.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function _C(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function SC(t,e,n,i){const r={},o=new WeakMap;function l(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",l),delete r[y.id];const x=o.get(y);x&&(e.remove(x),o.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function a(g,y){return r[y.id]===!0||(y.addEventListener("dispose",l),r[y.id]=!0,n.memory.geometries++),y}function d(g){const y=g.attributes;for(const E in y)e.update(y[E],34962);const x=g.morphAttributes;for(const E in x){const A=x[E];for(let _=0,p=A.length;_<p;_++)e.update(A[_],34962)}}function h(g){const y=[],x=g.index,E=g.attributes.position;let A=0;if(x!==null){const w=x.array;A=x.version;for(let b=0,P=w.length;b<P;b+=3){const D=w[b+0],O=w[b+1],B=w[b+2];y.push(D,O,O,B,B,D)}}else{const w=E.array;A=E.version;for(let b=0,P=w.length/3-1;b<P;b+=3){const D=b+0,O=b+1,B=b+2;y.push(D,O,O,B,B,D)}}const _=new(zx(y)?jx:Wx)(y,1);_.version=A;const p=o.get(g);p&&e.remove(p),o.set(g,_)}function v(g){const y=o.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&h(g)}else h(g);return o.get(g)}return{get:a,update:d,getWireframeAttribute:v}}function MC(t,e,n,i){const r=i.isWebGL2;let o;function l(y){o=y}let a,d;function h(y){a=y.type,d=y.bytesPerElement}function v(y,x){t.drawElements(o,x,a,y*d),n.update(x,o,1)}function g(y,x,E){if(E===0)return;let A,_;if(r)A=t,_="drawElementsInstanced";else if(A=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",A===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}A[_](o,x,a,y*d,E),n.update(x,o,E)}this.setMode=l,this.setIndex=h,this.render=v,this.renderInstances=g}function wC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,a){switch(n.calls++,l){case 4:n.triangles+=a*(o/3);break;case 1:n.lines+=a*(o/2);break;case 3:n.lines+=a*(o-1);break;case 2:n.lines+=a*o;break;case 0:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bC(t,e){return t[0]-e[0]}function EC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function TC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,l=new Rt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function d(h,v,g){const y=h.morphTargetInfluences;if(e.isWebGL2===!0){const x=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,E=x!==void 0?x.length:0;let A=o.get(v);if(A===void 0||A.count!==E){let Z=function(){ue.dispose(),o.delete(v),v.removeEventListener("dispose",Z)};A!==void 0&&A.texture.dispose();const w=v.morphAttributes.position!==void 0,b=v.morphAttributes.normal!==void 0,P=v.morphAttributes.color!==void 0,D=v.morphAttributes.position||[],O=v.morphAttributes.normal||[],B=v.morphAttributes.color||[];let k=0;w===!0&&(k=1),b===!0&&(k=2),P===!0&&(k=3);let R=v.attributes.position.count*k,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const se=new Float32Array(R*N*4*E),ue=new Vx(se,R,N,E);ue.type=po,ue.needsUpdate=!0;const $=k*4;for(let W=0;W<E;W++){const fe=D[W],me=O[W],j=B[W],J=R*N*4*W;for(let re=0;re<fe.count;re++){const Te=re*$;w===!0&&(l.fromBufferAttribute(fe,re),se[J+Te+0]=l.x,se[J+Te+1]=l.y,se[J+Te+2]=l.z,se[J+Te+3]=0),b===!0&&(l.fromBufferAttribute(me,re),se[J+Te+4]=l.x,se[J+Te+5]=l.y,se[J+Te+6]=l.z,se[J+Te+7]=0),P===!0&&(l.fromBufferAttribute(j,re),se[J+Te+8]=l.x,se[J+Te+9]=l.y,se[J+Te+10]=l.z,se[J+Te+11]=j.itemSize===4?l.w:1)}}A={count:E,texture:ue,size:new Ne(R,N)},o.set(v,A),v.addEventListener("dispose",Z)}let _=0;for(let w=0;w<y.length;w++)_+=y[w];const p=v.morphTargetsRelative?1:1-_;g.getUniforms().setValue(t,"morphTargetBaseInfluence",p),g.getUniforms().setValue(t,"morphTargetInfluences",y),g.getUniforms().setValue(t,"morphTargetsTexture",A.texture,n),g.getUniforms().setValue(t,"morphTargetsTextureSize",A.size)}else{const x=y===void 0?0:y.length;let E=i[v.id];if(E===void 0||E.length!==x){E=[];for(let b=0;b<x;b++)E[b]=[b,0];i[v.id]=E}for(let b=0;b<x;b++){const P=E[b];P[0]=b,P[1]=y[b]}E.sort(EC);for(let b=0;b<8;b++)b<x&&E[b][1]?(a[b][0]=E[b][0],a[b][1]=E[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(bC);const A=v.morphAttributes.position,_=v.morphAttributes.normal;let p=0;for(let b=0;b<8;b++){const P=a[b],D=P[0],O=P[1];D!==Number.MAX_SAFE_INTEGER&&O?(A&&v.getAttribute("morphTarget"+b)!==A[D]&&v.setAttribute("morphTarget"+b,A[D]),_&&v.getAttribute("morphNormal"+b)!==_[D]&&v.setAttribute("morphNormal"+b,_[D]),r[b]=O,p+=O):(A&&v.hasAttribute("morphTarget"+b)===!0&&v.deleteAttribute("morphTarget"+b),_&&v.hasAttribute("morphNormal"+b)===!0&&v.deleteAttribute("morphNormal"+b),r[b]=0)}const w=v.morphTargetsRelative?1:1-p;g.getUniforms().setValue(t,"morphTargetBaseInfluence",w),g.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:d}}function CC(t,e,n,i){let r=new WeakMap;function o(d){const h=i.render.frame,v=d.geometry,g=e.get(d,v);return r.get(g)!==h&&(e.update(g),r.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",a)===!1&&d.addEventListener("dispose",a),n.update(d.instanceMatrix,34962),d.instanceColor!==null&&n.update(d.instanceColor,34962)),g}function l(){r=new WeakMap}function a(d){const h=d.target;h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:l}}const Kx=new Wn,Zx=new Vx,Qx=new vb,Jx=new $x,Vg=[],Gg=[],Hg=new Float32Array(16),Wg=new Float32Array(9),jg=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Vg[r];if(o===void 0&&(o=new Float32Array(r),Vg[r]=o),e!==0){i.toArray(o,0);for(let l=1,a=0;l!==e;++l)a+=n,t[l].toArray(o,a)}return o}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=Gg[e];n===void 0&&(n=new Int32Array(e),Gg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function LC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;jg.set(i),t.uniformMatrix2fv(this.addr,!1,jg),rn(n,i)}}function IC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Wg.set(i),t.uniformMatrix3fv(this.addr,!1,Wg),rn(n,i)}}function OC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Hg.set(i),t.uniformMatrix4fv(this.addr,!1,Hg),rn(n,i)}}function NC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function FC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function HC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Kx,r)}function WC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qx,r)}function jC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jx,r)}function XC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zx,r)}function qC(t){switch(t){case 5126:return PC;case 35664:return AC;case 35665:return DC;case 35666:return RC;case 35674:return LC;case 35675:return IC;case 35676:return OC;case 5124:case 35670:return NC;case 35667:case 35671:return UC;case 35668:case 35672:return kC;case 35669:case 35673:return zC;case 5125:return FC;case 36294:return BC;case 36295:return VC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return WC;case 35680:case 36300:case 36308:case 36293:return jC;case 36289:case 36303:case 36311:case 36292:return XC}}function $C(t,e){t.uniform1fv(this.addr,e)}function YC(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function KC(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function ZC(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function QC(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JC(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function eP(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tP(t,e){t.uniform1iv(this.addr,e)}function nP(t,e){t.uniform2iv(this.addr,e)}function iP(t,e){t.uniform3iv(this.addr,e)}function rP(t,e){t.uniform4iv(this.addr,e)}function oP(t,e){t.uniform1uiv(this.addr,e)}function sP(t,e){t.uniform2uiv(this.addr,e)}function aP(t,e){t.uniform3uiv(this.addr,e)}function lP(t,e){t.uniform4uiv(this.addr,e)}function uP(t,e,n){const i=this.cache,r=e.length,o=jc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2D(e[l]||Kx,o[l])}function cP(t,e,n){const i=this.cache,r=e.length,o=jc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture3D(e[l]||Qx,o[l])}function fP(t,e,n){const i=this.cache,r=e.length,o=jc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTextureCube(e[l]||Jx,o[l])}function dP(t,e,n){const i=this.cache,r=e.length,o=jc(n,r);nn(i,o)||(t.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)n.setTexture2DArray(e[l]||Zx,o[l])}function hP(t){switch(t){case 5126:return $C;case 35664:return YC;case 35665:return KC;case 35666:return ZC;case 35674:return QC;case 35675:return JC;case 35676:return eP;case 5124:case 35670:return tP;case 35667:case 35671:return nP;case 35668:case 35672:return iP;case 35669:case 35673:return rP;case 5125:return oP;case 36294:return sP;case 36295:return aP;case 36296:return lP;case 35678:case 36198:case 36298:case 36306:case 35682:return uP;case 35679:case 36299:case 36307:return cP;case 35680:case 36300:case 36308:case 36293:return fP;case 36289:case 36303:case 36311:case 36292:return dP}}class pP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qC(n.type)}}class mP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=hP(n.type)}}class vP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function Xg(t,e){t.seq.push(e),t.map[e.id]=e}function gP(t,e,n){const i=t.name,r=i.length;for(Ed.lastIndex=0;;){const o=Ed.exec(i),l=Ed.lastIndex;let a=o[1];const d=o[2]==="]",h=o[3];if(d&&(a=a|0),h===void 0||h==="["&&l+2===r){Xg(n,h===void 0?new pP(a,t,e):new mP(a,t,e));break}else{let g=n.map[a];g===void 0&&(g=new vP(a),Xg(n,g)),n=g}}}class Yu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);gP(o,l,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,l=n.length;o!==l;++o){const a=n[o],d=i[a.id];d.needsUpdate!==!1&&a.setValue(e,d.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in n&&i.push(l)}return i}}function qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let yP=0;function xP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=r;l<o;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${n[l]}`)}return i.join(`
`)}function _P(t){switch(t){case To:return["Linear","( value )"];case bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function $g(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+xP(t.getShaderSource(e),l)}else return r}function SP(t,e){const n=_P(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function MP(t,e){let n;switch(e){case zw:n="Linear";break;case Nx:n="Reinhard";break;case Fw:n="OptimizedCineon";break;case Bw:n="ACESFilmic";break;case Vw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wP(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ra).join(`
`)}function bP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EP(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),l=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:a}}return n}function Ra(t){return t!==""}function Yg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(TP,CP)}function CP(t,e){const n=ot[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Nh(n)}const PP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(t){return t.replace(PP,AP)}function AP(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Qg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Da&&(e="SHADOWMAP_TYPE_VSM"),e}function RP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zs:case Fs:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function IP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case Uw:e="ENVMAP_BLENDING_MIX";break;case kw:e="ENVMAP_BLENDING_ADD";break}return e}function OP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NP(t,e,n,i){const r=t.getContext(),o=n.defines;let l=n.vertexShader,a=n.fragmentShader;const d=DP(n),h=RP(n),v=LP(n),g=IP(n),y=OP(n),x=n.isWebGL2?"":wP(n),E=bP(o),A=r.createProgram();let _,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=[E].filter(Ra).join(`
`),_.length>0&&(_+=`
`),p=[x,E].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(_=[Qg(n),"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs2?"#define USE_UV2":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[x,Qg(n),"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs2?"#define USE_UV2":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?ot.tonemapping_pars_fragment:"",n.toneMapping!==Gi?MP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.encodings_pars_fragment,SP("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ra).join(`
`)),l=Nh(l),l=Yg(l,n),l=Kg(l,n),a=Nh(a),a=Yg(a,n),a=Kg(a,n),l=Zg(l),a=Zg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+_+l,P=w+p+a,D=qg(r,35633,b),O=qg(r,35632,P);if(r.attachShader(A,D),r.attachShader(A,O),n.index0AttributeName!==void 0?r.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A),t.debug.checkShaderErrors){const R=r.getProgramInfoLog(A).trim(),N=r.getShaderInfoLog(D).trim(),se=r.getShaderInfoLog(O).trim();let ue=!0,$=!0;if(r.getProgramParameter(A,35714)===!1)if(ue=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,A,D,O);else{const Z=$g(r,D,"vertex"),W=$g(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,35715)+`

Program Info Log: `+R+`
`+Z+`
`+W)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||se==="")&&($=!1);$&&(this.diagnostics={runnable:ue,programLog:R,vertexShader:{log:N,prefix:_},fragmentShader:{log:se,prefix:p}})}r.deleteShader(D),r.deleteShader(O);let B;this.getUniforms=function(){return B===void 0&&(B=new Yu(r,A)),B};let k;return this.getAttributes=function(){return k===void 0&&(k=EP(r,A)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.name=n.shaderName,this.id=yP++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=O,this}let UP=0;class kP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zP(e),n.set(e,i)),i}}class zP{constructor(e){this.id=UP++,this.code=e,this.usedTimes=0}}function FP(t,e,n,i,r,o,l){const a=new Gx,d=new kP,h=[],v=r.isWebGL2,g=r.logarithmicDepthBuffer,y=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return R===1?"uv2":"uv"}function _(R,N,se,ue,$){const Z=ue.fog,W=$.geometry,fe=R.isMeshStandardMaterial?ue.environment:null,me=(R.isMeshStandardMaterial?n:e).get(R.envMap||fe),j=me&&me.mapping===Gc?me.image.height:null,J=E[R.type];R.precision!==null&&(x=r.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Te=re!==void 0?re.length:0;let ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let oe,q,we,Me;if(J){const Re=zi[J];oe=Re.vertexShader,q=Re.fragmentShader}else oe=R.vertexShader,q=R.fragmentShader,d.update(R),we=d.getVertexShaderID(R),Me=d.getFragmentShaderID(R);const te=t.getRenderTarget(),Ke=$.isInstancedMesh===!0,Ge=!!R.map,be=!!R.matcap,Be=!!me,dt=!!R.aoMap,Fe=!!R.lightMap,Qe=!!R.bumpMap,Xe=!!R.normalMap,Et=!!R.displacementMap,Nt=!!R.emissiveMap,mt=!!R.metalnessMap,at=!!R.roughnessMap,_t=R.clearcoat>0,jt=R.iridescence>0,z=R.sheen>0,L=R.transmission>0,ae=_t&&!!R.clearcoatMap,pe=_t&&!!R.clearcoatNormalMap,_e=_t&&!!R.clearcoatRoughnessMap,Ee=jt&&!!R.iridescenceMap,V=jt&&!!R.iridescenceThicknessMap,he=z&&!!R.sheenColorMap,ne=z&&!!R.sheenRoughnessMap,Ce=!!R.specularMap,Le=!!R.specularColorMap,ze=!!R.specularIntensityMap,De=L&&!!R.transmissionMap,Ue=L&&!!R.thicknessMap,qe=!!R.gradientMap,Je=!!R.alphaMap,Pt=R.alphaTest>0,H=!!R.extensions,le=!!W.attributes.uv2;return{isWebGL2:v,shaderID:J,shaderName:R.type,vertexShader:oe,fragmentShader:q,defines:R.defines,customVertexShaderID:we,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,instancing:Ke,instancingColor:Ke&&$.instanceColor!==null,supportsVertexTextures:y,outputEncoding:te===null?t.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:To,map:Ge,matcap:be,envMap:Be,envMapMode:Be&&me.mapping,envMapCubeUVHeight:j,aoMap:dt,lightMap:Fe,bumpMap:Qe,normalMap:Xe,displacementMap:y&&Et,emissiveMap:Nt,normalMapObjectSpace:Xe&&R.normalMapType===ob,normalMapTangentSpace:Xe&&R.normalMapType===_l,decodeVideoTexture:Ge&&R.map.isVideoTexture===!0&&R.map.encoding===bt,metalnessMap:mt,roughnessMap:at,clearcoat:_t,clearcoatMap:ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:_e,iridescence:jt,iridescenceMap:Ee,iridescenceThicknessMap:V,sheen:z,sheenColorMap:he,sheenRoughnessMap:ne,specularMap:Ce,specularColorMap:Le,specularIntensityMap:ze,transmission:L,transmissionMap:De,thicknessMap:Ue,gradientMap:qe,opaque:R.transparent===!1&&R.blending===Cs,alphaMap:Je,alphaTest:Pt,combine:R.combine,mapUv:Ge&&A(R.map.channel),aoMapUv:dt&&A(R.aoMap.channel),lightMapUv:Fe&&A(R.lightMap.channel),bumpMapUv:Qe&&A(R.bumpMap.channel),normalMapUv:Xe&&A(R.normalMap.channel),displacementMapUv:Et&&A(R.displacementMap.channel),emissiveMapUv:Nt&&A(R.emissiveMap.channel),metalnessMapUv:mt&&A(R.metalnessMap.channel),roughnessMapUv:at&&A(R.roughnessMap.channel),clearcoatMapUv:ae&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:pe&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:V&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(R.sheenRoughnessMap.channel),specularMapUv:Ce&&A(R.specularMap.channel),specularColorMapUv:Le&&A(R.specularColorMap.channel),specularIntensityMapUv:ze&&A(R.specularIntensityMap.channel),transmissionMapUv:De&&A(R.transmissionMap.channel),thicknessMapUv:Ue&&A(R.thicknessMap.channel),alphaMapUv:Je&&A(R.alphaMap.channel),vertexTangents:Xe&&!!W.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs2:le,pointsUvs:$.isPoints===!0&&!!W.attributes.uv&&(Ge||Je),fog:!!Z,useFog:R.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:$.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ve,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&se.length>0,shadowMapType:t.shadowMap.type,toneMapping:R.toneMapped?t.toneMapping:Gi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===tr,flipSided:R.side===Rn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:H&&R.extensions.derivatives===!0,extensionFragDepth:H&&R.extensions.fragDepth===!0,extensionDrawBuffers:H&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:v||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function p(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const se in R.defines)N.push(se),N.push(R.defines[se]);return R.isRawShaderMaterial===!1&&(w(N,R),b(N,R),N.push(t.outputEncoding)),N.push(R.customProgramCacheKey),N.join()}function w(R,N){R.push(N.precision),R.push(N.outputEncoding),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function b(R,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUvs2&&a.enable(13),N.vertexTangents&&a.enable(14),R.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.decodeVideoTexture&&a.enable(17),N.opaque&&a.enable(18),N.pointsUvs&&a.enable(19),R.push(a.mask)}function P(R){const N=E[R.type];let se;if(N){const ue=zi[N];se=zn.clone(ue.uniforms)}else se=R.uniforms;return se}function D(R,N){let se;for(let ue=0,$=h.length;ue<$;ue++){const Z=h[ue];if(Z.cacheKey===N){se=Z,++se.usedTimes;break}}return se===void 0&&(se=new NP(t,N,R,o),h.push(se)),se}function O(R){if(--R.usedTimes===0){const N=h.indexOf(R);h[N]=h[h.length-1],h.pop(),R.destroy()}}function B(R){d.remove(R)}function k(){d.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:P,acquireProgram:D,releaseProgram:O,releaseShaderCache:B,programs:h,dispose:k}}function BP(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,a){t.get(o)[l]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function VP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function e0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function l(g,y,x,E,A,_){let p=t[e];return p===void 0?(p={id:g.id,object:g,geometry:y,material:x,groupOrder:E,renderOrder:g.renderOrder,z:A,group:_},t[e]=p):(p.id=g.id,p.object=g,p.geometry=y,p.material=x,p.groupOrder=E,p.renderOrder=g.renderOrder,p.z=A,p.group=_),e++,p}function a(g,y,x,E,A,_){const p=l(g,y,x,E,A,_);x.transmission>0?i.push(p):x.transparent===!0?r.push(p):n.push(p)}function d(g,y,x,E,A,_){const p=l(g,y,x,E,A,_);x.transmission>0?i.unshift(p):x.transparent===!0?r.unshift(p):n.unshift(p)}function h(g,y){n.length>1&&n.sort(g||VP),i.length>1&&i.sort(y||Jg),r.length>1&&r.sort(y||Jg)}function v(){for(let g=e,y=t.length;g<y;g++){const x=t[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:d,finish:v,sort:h}}function GP(){let t=new WeakMap;function e(i,r){const o=t.get(i);let l;return o===void 0?(l=new e0,t.set(i,[l])):r>=o.length?(l=new e0,o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function HP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ze};break;case"SpotLight":n={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function WP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jP=0;function XP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qP(t,e){const n=new HP,i=WP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let v=0;v<9;v++)r.probe.push(new X);const o=new X,l=new Gt,a=new Gt;function d(v,g){let y=0,x=0,E=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let A=0,_=0,p=0,w=0,b=0,P=0,D=0,O=0,B=0,k=0;v.sort(XP);const R=g===!0?Math.PI:1;for(let se=0,ue=v.length;se<ue;se++){const $=v[se],Z=$.color,W=$.intensity,fe=$.distance,me=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)y+=Z.r*W*R,x+=Z.g*W*R,E+=Z.b*W*R;else if($.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector($.sh.coefficients[j],W);else if($.isDirectionalLight){const j=n.get($);if(j.color.copy($.color).multiplyScalar($.intensity*R),$.castShadow){const J=$.shadow,re=i.get($);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.directionalShadow[A]=re,r.directionalShadowMap[A]=me,r.directionalShadowMatrix[A]=$.shadow.matrix,P++}r.directional[A]=j,A++}else if($.isSpotLight){const j=n.get($);j.position.setFromMatrixPosition($.matrixWorld),j.color.copy(Z).multiplyScalar(W*R),j.distance=fe,j.coneCos=Math.cos($.angle),j.penumbraCos=Math.cos($.angle*(1-$.penumbra)),j.decay=$.decay,r.spot[p]=j;const J=$.shadow;if($.map&&(r.spotLightMap[B]=$.map,B++,J.updateMatrices($),$.castShadow&&k++),r.spotLightMatrix[p]=J.matrix,$.castShadow){const re=i.get($);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.spotShadow[p]=re,r.spotShadowMap[p]=me,O++}p++}else if($.isRectAreaLight){const j=n.get($);j.color.copy(Z).multiplyScalar(W),j.halfWidth.set($.width*.5,0,0),j.halfHeight.set(0,$.height*.5,0),r.rectArea[w]=j,w++}else if($.isPointLight){const j=n.get($);if(j.color.copy($.color).multiplyScalar($.intensity*R),j.distance=$.distance,j.decay=$.decay,$.castShadow){const J=$.shadow,re=i.get($);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,r.pointShadow[_]=re,r.pointShadowMap[_]=me,r.pointShadowMatrix[_]=$.shadow.matrix,D++}r.point[_]=j,_++}else if($.isHemisphereLight){const j=n.get($);j.skyColor.copy($.color).multiplyScalar(W*R),j.groundColor.copy($.groundColor).multiplyScalar(W*R),r.hemi[b]=j,b++}}w>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=E;const N=r.hash;(N.directionalLength!==A||N.pointLength!==_||N.spotLength!==p||N.rectAreaLength!==w||N.hemiLength!==b||N.numDirectionalShadows!==P||N.numPointShadows!==D||N.numSpotShadows!==O||N.numSpotMaps!==B)&&(r.directional.length=A,r.spot.length=p,r.rectArea.length=w,r.point.length=_,r.hemi.length=b,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=O+B-k,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=k,N.directionalLength=A,N.pointLength=_,N.spotLength=p,N.rectAreaLength=w,N.hemiLength=b,N.numDirectionalShadows=P,N.numPointShadows=D,N.numSpotShadows=O,N.numSpotMaps=B,r.version=jP++)}function h(v,g){let y=0,x=0,E=0,A=0,_=0;const p=g.matrixWorldInverse;for(let w=0,b=v.length;w<b;w++){const P=v[w];if(P.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(p),y++}else if(P.isSpotLight){const D=r.spot[E];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(p),E++}else if(P.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(p),a.identity(),l.copy(P.matrixWorld),l.premultiply(p),a.extractRotation(l),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),A++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(p),x++}else if(P.isHemisphereLight){const D=r.hemi[_];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(p),_++}}}return{setup:d,setupView:h,state:r}}function t0(t,e){const n=new qP(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(g){i.push(g)}function a(g){r.push(g)}function d(g){n.setup(i,g)}function h(g){n.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:d,setupLightsView:h,pushLight:l,pushShadow:a}}function $P(t,e){let n=new WeakMap;function i(o,l=0){const a=n.get(o);let d;return a===void 0?(d=new t0(t,e),n.set(o,[d])):l>=a.length?(d=new t0(t,e),a.push(d)):d=a[l],d}function r(){n=new WeakMap}return{get:i,dispose:r}}class Fr extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fl extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KP=`uniform sampler2D shadow_pass;
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
}`;function ZP(t,e,n){let i=new kp;const r=new Ne,o=new Ne,l=new Rt,a=new Fr({depthPacking:xl}),d=new fl,h={},v=n.maxTextureSize,g={[zr]:Rn,[Rn]:zr,[tr]:tr},y=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:YP,fragmentShader:KP}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new Di;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Bn(E,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op,this.render=function(P,D,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const B=t.getRenderTarget(),k=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),N=t.state;N.setBlending(un),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let se=0,ue=P.length;se<ue;se++){const $=P[se],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const W=Z.getFrameExtents();if(r.multiply(W),o.copy(Z.mapSize),(r.x>v||r.y>v)&&(r.x>v&&(o.x=Math.floor(v/W.x),r.x=o.x*W.x,Z.mapSize.x=o.x),r.y>v&&(o.y=Math.floor(v/W.y),r.y=o.y*W.y,Z.mapSize.y=o.y)),Z.map===null){const me=this.type!==Da?{minFilter:Qt,magFilter:Qt}:{};Z.map=new en(r.x,r.y,me),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}t.setRenderTarget(Z.map),t.clear();const fe=Z.getViewportCount();for(let me=0;me<fe;me++){const j=Z.getViewport(me);l.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),N.viewport(l),Z.updateMatrices($,me),i=Z.getFrustum(),b(D,O,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Da&&p(Z,O),Z.needsUpdate=!1}_.needsUpdate=!1,t.setRenderTarget(B,k,R)};function p(P,D){const O=e.update(A);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new en(r.x,r.y)),y.uniforms.shadow_pass.value=P.map.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(D,null,O,y,A,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(D,null,O,x,A,null)}function w(P,D,O,B){let k=null;const R=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)k=R;else if(k=O.isPointLight===!0?d:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const N=k.uuid,se=D.uuid;let ue=h[N];ue===void 0&&(ue={},h[N]=ue);let $=ue[se];$===void 0&&($=k.clone(),ue[se]=$),k=$}if(k.visible=D.visible,k.wireframe=D.wireframe,B===Da?k.side=D.shadowSide!==null?D.shadowSide:D.side:k.side=D.shadowSide!==null?D.shadowSide:g[D.side],k.alphaMap=D.alphaMap,k.alphaTest=D.alphaTest,k.map=D.map,k.clipShadows=D.clipShadows,k.clippingPlanes=D.clippingPlanes,k.clipIntersection=D.clipIntersection,k.displacementMap=D.displacementMap,k.displacementScale=D.displacementScale,k.displacementBias=D.displacementBias,k.wireframeLinewidth=D.wireframeLinewidth,k.linewidth=D.linewidth,O.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const N=t.properties.get(k);N.light=O}return k}function b(P,D,O,B,k){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===Da)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const se=e.update(P),ue=P.material;if(Array.isArray(ue)){const $=se.groups;for(let Z=0,W=$.length;Z<W;Z++){const fe=$[Z],me=ue[fe.materialIndex];if(me&&me.visible){const j=w(P,me,B,k);t.renderBufferDirect(O,null,se,j,P,fe)}}}else if(ue.visible){const $=w(P,ue,B,k);t.renderBufferDirect(O,null,se,$,P,null)}}const N=P.children;for(let se=0,ue=N.length;se<ue;se++)b(N[se],D,O,B,k)}}function QP(t,e,n){const i=n.isWebGL2;function r(){let H=!1;const le=new Rt;let ge=null;const Re=new Rt(0,0,0,0);return{setMask:function(Oe){ge!==Oe&&!H&&(t.colorMask(Oe,Oe,Oe,Oe),ge=Oe)},setLocked:function(Oe){H=Oe},setClear:function(Oe,St,yt,on,Xt){Xt===!0&&(Oe*=on,St*=on,yt*=on),le.set(Oe,St,yt,on),Re.equals(le)===!1&&(t.clearColor(Oe,St,yt,on),Re.copy(le))},reset:function(){H=!1,ge=null,Re.set(-1,0,0,0)}}}function o(){let H=!1,le=null,ge=null,Re=null;return{setTest:function(Oe){Oe?te(2929):Ke(2929)},setMask:function(Oe){le!==Oe&&!H&&(t.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(ge!==Oe){switch(Oe){case Aw:t.depthFunc(512);break;case Dw:t.depthFunc(519);break;case Rw:t.depthFunc(513);break;case Rh:t.depthFunc(515);break;case Lw:t.depthFunc(514);break;case Iw:t.depthFunc(518);break;case Ow:t.depthFunc(516);break;case Nw:t.depthFunc(517);break;default:t.depthFunc(515)}ge=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){Re!==Oe&&(t.clearDepth(Oe),Re=Oe)},reset:function(){H=!1,le=null,ge=null,Re=null}}}function l(){let H=!1,le=null,ge=null,Re=null,Oe=null,St=null,yt=null,on=null,Xt=null;return{setTest:function(vt){H||(vt?te(2960):Ke(2960))},setMask:function(vt){le!==vt&&!H&&(t.stencilMask(vt),le=vt)},setFunc:function(vt,qt,jn){(ge!==vt||Re!==qt||Oe!==jn)&&(t.stencilFunc(vt,qt,jn),ge=vt,Re=qt,Oe=jn)},setOp:function(vt,qt,jn){(St!==vt||yt!==qt||on!==jn)&&(t.stencilOp(vt,qt,jn),St=vt,yt=qt,on=jn)},setLocked:function(vt){H=vt},setClear:function(vt){Xt!==vt&&(t.clearStencil(vt),Xt=vt)},reset:function(){H=!1,le=null,ge=null,Re=null,Oe=null,St=null,yt=null,on=null,Xt=null}}}const a=new r,d=new o,h=new l,v=new WeakMap,g=new WeakMap;let y={},x={},E=new WeakMap,A=[],_=null,p=!1,w=null,b=null,P=null,D=null,O=null,B=null,k=null,R=!1,N=null,se=null,ue=null,$=null,Z=null;const W=t.getParameter(35661);let fe=!1,me=0;const j=t.getParameter(7938);j.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(j)[1]),fe=me>=1):j.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),fe=me>=2);let J=null,re={};const Te=t.getParameter(3088),ve=t.getParameter(2978),oe=new Rt().fromArray(Te),q=new Rt().fromArray(ve);function we(H,le,ge){const Re=new Uint8Array(4),Oe=t.createTexture();t.bindTexture(H,Oe),t.texParameteri(H,10241,9728),t.texParameteri(H,10240,9728);for(let St=0;St<ge;St++)t.texImage2D(le+St,0,6408,1,1,0,6408,5121,Re);return Oe}const Me={};Me[3553]=we(3553,3553,1),Me[34067]=we(34067,34069,6),a.setClear(0,0,0,1),d.setClear(1),h.setClear(0),te(2929),d.setFunc(Rh),Et(!1),Nt(Gv),te(2884),Qe(un);function te(H){y[H]!==!0&&(t.enable(H),y[H]=!0)}function Ke(H){y[H]!==!1&&(t.disable(H),y[H]=!1)}function Ge(H,le){return x[H]!==le?(t.bindFramebuffer(H,le),x[H]=le,i&&(H===36009&&(x[36160]=le),H===36160&&(x[36009]=le)),!0):!1}function be(H,le){let ge=A,Re=!1;if(H)if(ge=E.get(le),ge===void 0&&(ge=[],E.set(le,ge)),H.isWebGLMultipleRenderTargets){const Oe=H.texture;if(ge.length!==Oe.length||ge[0]!==36064){for(let St=0,yt=Oe.length;St<yt;St++)ge[St]=36064+St;ge.length=Oe.length,Re=!0}}else ge[0]!==36064&&(ge[0]=36064,Re=!0);else ge[0]!==1029&&(ge[0]=1029,Re=!0);Re&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Be(H){return _!==H?(t.useProgram(H),_=H,!0):!1}const dt={[Er]:32774,[Sw]:32778,[Mw]:32779};if(i)dt[jv]=32775,dt[Xv]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(dt[jv]=H.MIN_EXT,dt[Xv]=H.MAX_EXT)}const Fe={[Dh]:0,[ww]:1,[bw]:768,[Rx]:770,[Pw]:776,[Ox]:774,[Ix]:772,[Ew]:769,[Lx]:771,[Cw]:775,[Tw]:773};function Qe(H,le,ge,Re,Oe,St,yt,on){if(H===un){p===!0&&(Ke(3042),p=!1);return}if(p===!1&&(te(3042),p=!0),H!==_c){if(H!==w||on!==R){if((b!==Er||O!==Er)&&(t.blendEquation(32774),b=Er,O=Er),on)switch(H){case Cs:t.blendFuncSeparate(1,771,1,771);break;case Ah:t.blendFunc(1,1);break;case Hv:t.blendFuncSeparate(0,769,0,1);break;case Wv:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Cs:t.blendFuncSeparate(770,771,1,771);break;case Ah:t.blendFunc(770,1);break;case Hv:t.blendFuncSeparate(0,769,0,1);break;case Wv:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,D=null,B=null,k=null,w=H,R=on}return}Oe=Oe||le,St=St||ge,yt=yt||Re,(le!==b||Oe!==O)&&(t.blendEquationSeparate(dt[le],dt[Oe]),b=le,O=Oe),(ge!==P||Re!==D||St!==B||yt!==k)&&(t.blendFuncSeparate(Fe[ge],Fe[Re],Fe[St],Fe[yt]),P=ge,D=Re,B=St,k=yt),w=H,R=!1}function Xe(H,le){H.side===tr?Ke(2884):te(2884);let ge=H.side===Rn;le&&(ge=!ge),Et(ge),H.blending===Cs&&H.transparent===!1?Qe(un):Qe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),a.setMask(H.colorWrite);const Re=H.stencilWrite;h.setTest(Re),Re&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),at(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?te(32926):Ke(32926)}function Et(H){N!==H&&(H?t.frontFace(2304):t.frontFace(2305),N=H)}function Nt(H){H!==xw?(te(2884),H!==se&&(H===Gv?t.cullFace(1029):H===_w?t.cullFace(1028):t.cullFace(1032))):Ke(2884),se=H}function mt(H){H!==ue&&(fe&&t.lineWidth(H),ue=H)}function at(H,le,ge){H?(te(32823),($!==le||Z!==ge)&&(t.polygonOffset(le,ge),$=le,Z=ge)):Ke(32823)}function _t(H){H?te(3089):Ke(3089)}function jt(H){H===void 0&&(H=33984+W-1),J!==H&&(t.activeTexture(H),J=H)}function z(H,le,ge){ge===void 0&&(J===null?ge=33984+W-1:ge=J);let Re=re[ge];Re===void 0&&(Re={type:void 0,texture:void 0},re[ge]=Re),(Re.type!==H||Re.texture!==le)&&(J!==ge&&(t.activeTexture(ge),J=ge),t.bindTexture(H,le||Me[H]),Re.type=H,Re.texture=le)}function L(){const H=re[J];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(H){oe.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),oe.copy(H))}function Ue(H){q.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),q.copy(H))}function qe(H,le){let ge=g.get(le);ge===void 0&&(ge=new WeakMap,g.set(le,ge));let Re=ge.get(H);Re===void 0&&(Re=t.getUniformBlockIndex(le,H.name),ge.set(H,Re))}function Je(H,le){const Re=g.get(le).get(H);v.get(le)!==Re&&(t.uniformBlockBinding(le,Re,H.__bindingPointIndex),v.set(le,Re))}function Pt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),y={},J=null,re={},x={},E=new WeakMap,A=[],_=null,p=!1,w=null,b=null,P=null,D=null,O=null,B=null,k=null,R=!1,N=null,se=null,ue=null,$=null,Z=null,oe.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),d.reset(),h.reset()}return{buffers:{color:a,depth:d,stencil:h},enable:te,disable:Ke,bindFramebuffer:Ge,drawBuffers:be,useProgram:Be,setBlending:Qe,setMaterial:Xe,setFlipSided:Et,setCullFace:Nt,setLineWidth:mt,setPolygonOffset:at,setScissorTest:_t,activeTexture:jt,bindTexture:z,unbindTexture:L,compressedTexImage2D:ae,compressedTexImage3D:pe,texImage2D:Le,texImage3D:ze,updateUBOMapping:qe,uniformBlockBinding:Je,texStorage2D:ne,texStorage3D:Ce,texSubImage2D:_e,texSubImage3D:Ee,compressedTexSubImage2D:V,compressedTexSubImage3D:he,scissor:De,viewport:Ue,reset:Pt}}function JP(t,e,n,i,r,o,l){const a=r.isWebGL2,d=r.maxTextures,h=r.maxCubemapSize,v=r.maxTextureSize,g=r.maxSamples,y=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let A;const _=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,L){return p?new OffscreenCanvas(z,L):cl("canvas")}function b(z,L,ae,pe){let _e=1;if((z.width>pe||z.height>pe)&&(_e=pe/Math.max(z.width,z.height)),_e<1||L===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const Ee=L?lb:Math.floor,V=Ee(_e*z.width),he=Ee(_e*z.height);A===void 0&&(A=w(V,he));const ne=ae?w(V,he):A;return ne.width=V,ne.height=he,ne.getContext("2d").drawImage(z,0,0,V,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+V+"x"+he+")."),ne}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function P(z){return xg(z.width)&&xg(z.height)}function D(z){return a?!1:z.wrapS!==bi||z.wrapT!==bi||z.minFilter!==Qt&&z.minFilter!==ui}function O(z,L){return z.generateMipmaps&&L&&z.minFilter!==Qt&&z.minFilter!==ui}function B(z){t.generateMipmap(z)}function k(z,L,ae,pe,_e=!1){if(a===!1)return L;if(z!==null){if(t[z]!==void 0)return t[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ee=L;return L===6403&&(ae===5126&&(Ee=33326),ae===5131&&(Ee=33325),ae===5121&&(Ee=33321)),L===33319&&(ae===5126&&(Ee=33328),ae===5131&&(Ee=33327),ae===5121&&(Ee=33323)),L===6408&&(ae===5126&&(Ee=34836),ae===5131&&(Ee=34842),ae===5121&&(Ee=pe===bt&&_e===!1?35907:32856),ae===32819&&(Ee=32854),ae===32820&&(Ee=32855)),(Ee===33325||Ee===33326||Ee===33327||Ee===33328||Ee===34842||Ee===34836)&&e.get("EXT_color_buffer_float"),Ee}function R(z,L,ae){return O(z,ae)===!0||z.isFramebufferTexture&&z.minFilter!==Qt&&z.minFilter!==ui?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function N(z){return z===Qt||z===qv||z===Zf?9728:9729}function se(z){const L=z.target;L.removeEventListener("dispose",se),$(L),L.isVideoTexture&&E.delete(L)}function ue(z){const L=z.target;L.removeEventListener("dispose",ue),W(L)}function $(z){const L=i.get(z);if(L.__webglInit===void 0)return;const ae=z.source,pe=_.get(ae);if(pe){const _e=pe[L.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Z(z),Object.keys(pe).length===0&&_.delete(ae)}i.remove(z)}function Z(z){const L=i.get(z);t.deleteTexture(L.__webglTexture);const ae=z.source,pe=_.get(ae);delete pe[L.__cacheKey],l.memory.textures--}function W(z){const L=z.texture,ae=i.get(z),pe=i.get(L);if(pe.__webglTexture!==void 0&&(t.deleteTexture(pe.__webglTexture),l.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)t.deleteFramebuffer(ae.__webglFramebuffer[_e]),ae.__webglDepthbuffer&&t.deleteRenderbuffer(ae.__webglDepthbuffer[_e]);else{if(t.deleteFramebuffer(ae.__webglFramebuffer),ae.__webglDepthbuffer&&t.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer)for(let _e=0;_e<ae.__webglColorRenderbuffer.length;_e++)ae.__webglColorRenderbuffer[_e]&&t.deleteRenderbuffer(ae.__webglColorRenderbuffer[_e]);ae.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ae.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let _e=0,Ee=L.length;_e<Ee;_e++){const V=i.get(L[_e]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),l.memory.textures--),i.remove(L[_e])}i.remove(L),i.remove(z)}let fe=0;function me(){fe=0}function j(){const z=fe;return z>=d&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+d),fe+=1,z}function J(z){const L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.encoding),L.join()}function re(z,L){const ae=i.get(z);if(z.isVideoTexture&&_t(z),z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){const pe=z.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(ae,z,L);return}}n.bindTexture(3553,ae.__webglTexture,33984+L)}function Te(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){Ke(ae,z,L);return}n.bindTexture(35866,ae.__webglTexture,33984+L)}function ve(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){Ke(ae,z,L);return}n.bindTexture(32879,ae.__webglTexture,33984+L)}function oe(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){Ge(ae,z,L);return}n.bindTexture(34067,ae.__webglTexture,33984+L)}const q={[bo]:10497,[bi]:33071,[Ih]:33648},we={[Qt]:9728,[qv]:9984,[Zf]:9986,[ui]:9729,[Gw]:9985,[al]:9987};function Me(z,L,ae){if(ae?(t.texParameteri(z,10242,q[L.wrapS]),t.texParameteri(z,10243,q[L.wrapT]),(z===32879||z===35866)&&t.texParameteri(z,32882,q[L.wrapR]),t.texParameteri(z,10240,we[L.magFilter]),t.texParameteri(z,10241,we[L.minFilter])):(t.texParameteri(z,10242,33071),t.texParameteri(z,10243,33071),(z===32879||z===35866)&&t.texParameteri(z,32882,33071),(L.wrapS!==bi||L.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(z,10240,N(L.magFilter)),t.texParameteri(z,10241,N(L.minFilter)),L.minFilter!==Qt&&L.minFilter!==ui&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Qt||L.minFilter!==Zf&&L.minFilter!==al||L.type===po&&e.has("OES_texture_float_linear")===!1||a===!1&&L.type===ll&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(t.texParameterf(z,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function te(z,L){let ae=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",se));const pe=L.source;let _e=_.get(pe);_e===void 0&&(_e={},_.set(pe,_e));const Ee=J(L);if(Ee!==z.__cacheKey){_e[Ee]===void 0&&(_e[Ee]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),_e[Ee].usedTimes++;const V=_e[z.__cacheKey];V!==void 0&&(_e[z.__cacheKey].usedTimes--,V.usedTimes===0&&Z(L)),z.__cacheKey=Ee,z.__webglTexture=_e[Ee].texture}return ae}function Ke(z,L,ae){let pe=3553;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(pe=35866),L.isData3DTexture&&(pe=32879);const _e=te(z,L),Ee=L.source;n.bindTexture(pe,z.__webglTexture,33984+ae);const V=i.get(Ee);if(Ee.version!==V.__version||_e===!0){n.activeTexture(33984+ae),t.pixelStorei(37440,L.flipY),t.pixelStorei(37441,L.premultiplyAlpha),t.pixelStorei(3317,L.unpackAlignment),t.pixelStorei(37443,0);const he=D(L)&&P(L.image)===!1;let ne=b(L.image,he,!1,v);ne=jt(L,ne);const Ce=P(ne)||a,Le=o.convert(L.format,L.encoding);let ze=o.convert(L.type),De=k(L.internalFormat,Le,ze,L.encoding,L.isVideoTexture);Me(pe,L,Ce);let Ue;const qe=L.mipmaps,Je=a&&L.isVideoTexture!==!0,Pt=V.__version===void 0||_e===!0,H=R(L,ne,Ce);if(L.isDepthTexture)De=6402,a?L.type===po?De=36012:L.type===ho?De=33190:L.type===Ps?De=35056:De=33189:L.type===po&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===go&&De===6402&&L.type!==Np&&L.type!==ho&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=ho,ze=o.convert(L.type)),L.format===Bs&&De===6402&&(De=34041,L.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Ps,ze=o.convert(L.type))),Pt&&(Je?n.texStorage2D(3553,1,De,ne.width,ne.height):n.texImage2D(3553,0,De,ne.width,ne.height,0,Le,ze,null));else if(L.isDataTexture)if(qe.length>0&&Ce){Je&&Pt&&n.texStorage2D(3553,H,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],Je?n.texSubImage2D(3553,le,0,0,Ue.width,Ue.height,Le,ze,Ue.data):n.texImage2D(3553,le,De,Ue.width,Ue.height,0,Le,ze,Ue.data);L.generateMipmaps=!1}else Je?(Pt&&n.texStorage2D(3553,H,De,ne.width,ne.height),n.texSubImage2D(3553,0,0,0,ne.width,ne.height,Le,ze,ne.data)):n.texImage2D(3553,0,De,ne.width,ne.height,0,Le,ze,ne.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Je&&Pt&&n.texStorage3D(35866,H,De,qe[0].width,qe[0].height,ne.depth);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],L.format!==Ei?Le!==null?Je?n.compressedTexSubImage3D(35866,le,0,0,0,Ue.width,Ue.height,ne.depth,Le,Ue.data,0,0):n.compressedTexImage3D(35866,le,De,Ue.width,Ue.height,ne.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(35866,le,0,0,0,Ue.width,Ue.height,ne.depth,Le,ze,Ue.data):n.texImage3D(35866,le,De,Ue.width,Ue.height,ne.depth,0,Le,ze,Ue.data)}else{Je&&Pt&&n.texStorage2D(3553,H,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],L.format!==Ei?Le!==null?Je?n.compressedTexSubImage2D(3553,le,0,0,Ue.width,Ue.height,Le,Ue.data):n.compressedTexImage2D(3553,le,De,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(3553,le,0,0,Ue.width,Ue.height,Le,ze,Ue.data):n.texImage2D(3553,le,De,Ue.width,Ue.height,0,Le,ze,Ue.data)}else if(L.isDataArrayTexture)Je?(Pt&&n.texStorage3D(35866,H,De,ne.width,ne.height,ne.depth),n.texSubImage3D(35866,0,0,0,0,ne.width,ne.height,ne.depth,Le,ze,ne.data)):n.texImage3D(35866,0,De,ne.width,ne.height,ne.depth,0,Le,ze,ne.data);else if(L.isData3DTexture)Je?(Pt&&n.texStorage3D(32879,H,De,ne.width,ne.height,ne.depth),n.texSubImage3D(32879,0,0,0,0,ne.width,ne.height,ne.depth,Le,ze,ne.data)):n.texImage3D(32879,0,De,ne.width,ne.height,ne.depth,0,Le,ze,ne.data);else if(L.isFramebufferTexture){if(Pt)if(Je)n.texStorage2D(3553,H,De,ne.width,ne.height);else{let le=ne.width,ge=ne.height;for(let Re=0;Re<H;Re++)n.texImage2D(3553,Re,De,le,ge,0,Le,ze,null),le>>=1,ge>>=1}}else if(qe.length>0&&Ce){Je&&Pt&&n.texStorage2D(3553,H,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],Je?n.texSubImage2D(3553,le,0,0,Le,ze,Ue):n.texImage2D(3553,le,De,Le,ze,Ue);L.generateMipmaps=!1}else Je?(Pt&&n.texStorage2D(3553,H,De,ne.width,ne.height),n.texSubImage2D(3553,0,0,0,Le,ze,ne)):n.texImage2D(3553,0,De,Le,ze,ne);O(L,Ce)&&B(pe),V.__version=Ee.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Ge(z,L,ae){if(L.image.length!==6)return;const pe=te(z,L),_e=L.source;n.bindTexture(34067,z.__webglTexture,33984+ae);const Ee=i.get(_e);if(_e.version!==Ee.__version||pe===!0){n.activeTexture(33984+ae),t.pixelStorei(37440,L.flipY),t.pixelStorei(37441,L.premultiplyAlpha),t.pixelStorei(3317,L.unpackAlignment),t.pixelStorei(37443,0);const V=L.isCompressedTexture||L.image[0].isCompressedTexture,he=L.image[0]&&L.image[0].isDataTexture,ne=[];for(let le=0;le<6;le++)!V&&!he?ne[le]=b(L.image[le],!1,!0,h):ne[le]=he?L.image[le].image:L.image[le],ne[le]=jt(L,ne[le]);const Ce=ne[0],Le=P(Ce)||a,ze=o.convert(L.format,L.encoding),De=o.convert(L.type),Ue=k(L.internalFormat,ze,De,L.encoding),qe=a&&L.isVideoTexture!==!0,Je=Ee.__version===void 0||pe===!0;let Pt=R(L,Ce,Le);Me(34067,L,Le);let H;if(V){qe&&Je&&n.texStorage2D(34067,Pt,Ue,Ce.width,Ce.height);for(let le=0;le<6;le++){H=ne[le].mipmaps;for(let ge=0;ge<H.length;ge++){const Re=H[ge];L.format!==Ei?ze!==null?qe?n.compressedTexSubImage2D(34069+le,ge,0,0,Re.width,Re.height,ze,Re.data):n.compressedTexImage2D(34069+le,ge,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(34069+le,ge,0,0,Re.width,Re.height,ze,De,Re.data):n.texImage2D(34069+le,ge,Ue,Re.width,Re.height,0,ze,De,Re.data)}}}else{H=L.mipmaps,qe&&Je&&(H.length>0&&Pt++,n.texStorage2D(34067,Pt,Ue,ne[0].width,ne[0].height));for(let le=0;le<6;le++)if(he){qe?n.texSubImage2D(34069+le,0,0,0,ne[le].width,ne[le].height,ze,De,ne[le].data):n.texImage2D(34069+le,0,Ue,ne[le].width,ne[le].height,0,ze,De,ne[le].data);for(let ge=0;ge<H.length;ge++){const Oe=H[ge].image[le].image;qe?n.texSubImage2D(34069+le,ge+1,0,0,Oe.width,Oe.height,ze,De,Oe.data):n.texImage2D(34069+le,ge+1,Ue,Oe.width,Oe.height,0,ze,De,Oe.data)}}else{qe?n.texSubImage2D(34069+le,0,0,0,ze,De,ne[le]):n.texImage2D(34069+le,0,Ue,ze,De,ne[le]);for(let ge=0;ge<H.length;ge++){const Re=H[ge];qe?n.texSubImage2D(34069+le,ge+1,0,0,ze,De,Re.image[le]):n.texImage2D(34069+le,ge+1,Ue,ze,De,Re.image[le])}}}O(L,Le)&&B(34067),Ee.__version=_e.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function be(z,L,ae,pe,_e){const Ee=o.convert(ae.format,ae.encoding),V=o.convert(ae.type),he=k(ae.internalFormat,Ee,V,ae.encoding);i.get(L).__hasExternalTextures||(_e===32879||_e===35866?n.texImage3D(_e,0,he,L.width,L.height,L.depth,0,Ee,V,null):n.texImage2D(_e,0,he,L.width,L.height,0,Ee,V,null)),n.bindFramebuffer(36160,z),at(L)?y.framebufferTexture2DMultisampleEXT(36160,pe,_e,i.get(ae).__webglTexture,0,mt(L)):(_e===3553||_e>=34069&&_e<=34074)&&t.framebufferTexture2D(36160,pe,_e,i.get(ae).__webglTexture,0),n.bindFramebuffer(36160,null)}function Be(z,L,ae){if(t.bindRenderbuffer(36161,z),L.depthBuffer&&!L.stencilBuffer){let pe=33189;if(ae||at(L)){const _e=L.depthTexture;_e&&_e.isDepthTexture&&(_e.type===po?pe=36012:_e.type===ho&&(pe=33190));const Ee=mt(L);at(L)?y.renderbufferStorageMultisampleEXT(36161,Ee,pe,L.width,L.height):t.renderbufferStorageMultisample(36161,Ee,pe,L.width,L.height)}else t.renderbufferStorage(36161,pe,L.width,L.height);t.framebufferRenderbuffer(36160,36096,36161,z)}else if(L.depthBuffer&&L.stencilBuffer){const pe=mt(L);ae&&at(L)===!1?t.renderbufferStorageMultisample(36161,pe,35056,L.width,L.height):at(L)?y.renderbufferStorageMultisampleEXT(36161,pe,35056,L.width,L.height):t.renderbufferStorage(36161,34041,L.width,L.height),t.framebufferRenderbuffer(36160,33306,36161,z)}else{const pe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let _e=0;_e<pe.length;_e++){const Ee=pe[_e],V=o.convert(Ee.format,Ee.encoding),he=o.convert(Ee.type),ne=k(Ee.internalFormat,V,he,Ee.encoding),Ce=mt(L);ae&&at(L)===!1?t.renderbufferStorageMultisample(36161,Ce,ne,L.width,L.height):at(L)?y.renderbufferStorageMultisampleEXT(36161,Ce,ne,L.width,L.height):t.renderbufferStorage(36161,ne,L.width,L.height)}}t.bindRenderbuffer(36161,null)}function dt(z,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),re(L.depthTexture,0);const pe=i.get(L.depthTexture).__webglTexture,_e=mt(L);if(L.depthTexture.format===go)at(L)?y.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,_e):t.framebufferTexture2D(36160,36096,3553,pe,0);else if(L.depthTexture.format===Bs)at(L)?y.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,_e):t.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function Fe(z){const L=i.get(z),ae=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!L.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");dt(L.__webglFramebuffer,z)}else if(ae){L.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)n.bindFramebuffer(36160,L.__webglFramebuffer[pe]),L.__webglDepthbuffer[pe]=t.createRenderbuffer(),Be(L.__webglDepthbuffer[pe],z,!1)}else n.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=t.createRenderbuffer(),Be(L.__webglDepthbuffer,z,!1);n.bindFramebuffer(36160,null)}function Qe(z,L,ae){const pe=i.get(z);L!==void 0&&be(pe.__webglFramebuffer,z,z.texture,36064,3553),ae!==void 0&&Fe(z)}function Xe(z){const L=z.texture,ae=i.get(z),pe=i.get(L);z.addEventListener("dispose",ue),z.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture()),pe.__version=L.version,l.memory.textures++);const _e=z.isWebGLCubeRenderTarget===!0,Ee=z.isWebGLMultipleRenderTargets===!0,V=P(z)||a;if(_e){ae.__webglFramebuffer=[];for(let he=0;he<6;he++)ae.__webglFramebuffer[he]=t.createFramebuffer()}else{if(ae.__webglFramebuffer=t.createFramebuffer(),Ee)if(r.drawBuffers){const he=z.texture;for(let ne=0,Ce=he.length;ne<Ce;ne++){const Le=i.get(he[ne]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&z.samples>0&&at(z)===!1){const he=Ee?L:[L];ae.__webglMultisampledFramebuffer=t.createFramebuffer(),ae.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer);for(let ne=0;ne<he.length;ne++){const Ce=he[ne];ae.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(36161,ae.__webglColorRenderbuffer[ne]);const Le=o.convert(Ce.format,Ce.encoding),ze=o.convert(Ce.type),De=k(Ce.internalFormat,Le,ze,Ce.encoding,z.isXRRenderTarget===!0),Ue=mt(z);t.renderbufferStorageMultisample(36161,Ue,De,z.width,z.height),t.framebufferRenderbuffer(36160,36064+ne,36161,ae.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(36161,null),z.depthBuffer&&(ae.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(ae.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(36160,null)}}if(_e){n.bindTexture(34067,pe.__webglTexture),Me(34067,L,V);for(let he=0;he<6;he++)be(ae.__webglFramebuffer[he],z,L,36064,34069+he);O(L,V)&&B(34067),n.unbindTexture()}else if(Ee){const he=z.texture;for(let ne=0,Ce=he.length;ne<Ce;ne++){const Le=he[ne],ze=i.get(Le);n.bindTexture(3553,ze.__webglTexture),Me(3553,Le,V),be(ae.__webglFramebuffer,z,Le,36064+ne,3553),O(Le,V)&&B(3553)}n.unbindTexture()}else{let he=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(a?he=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,pe.__webglTexture),Me(he,L,V),be(ae.__webglFramebuffer,z,L,36064,he),O(L,V)&&B(he),n.unbindTexture()}z.depthBuffer&&Fe(z)}function Et(z){const L=P(z)||a,ae=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let pe=0,_e=ae.length;pe<_e;pe++){const Ee=ae[pe];if(O(Ee,L)){const V=z.isWebGLCubeRenderTarget?34067:3553,he=i.get(Ee).__webglTexture;n.bindTexture(V,he),B(V),n.unbindTexture()}}}function Nt(z){if(a&&z.samples>0&&at(z)===!1){const L=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],ae=z.width,pe=z.height;let _e=16384;const Ee=[],V=z.stencilBuffer?33306:36096,he=i.get(z),ne=z.isWebGLMultipleRenderTargets===!0;if(ne)for(let Ce=0;Ce<L.length;Ce++)n.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ce,36161,null),n.bindFramebuffer(36160,he.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ce,3553,null,0);n.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,he.__webglFramebuffer);for(let Ce=0;Ce<L.length;Ce++){Ee.push(36064+Ce),z.depthBuffer&&Ee.push(V);const Le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Le===!1&&(z.depthBuffer&&(_e|=256),z.stencilBuffer&&(_e|=1024)),ne&&t.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[Ce]),Le===!0&&(t.invalidateFramebuffer(36008,[V]),t.invalidateFramebuffer(36009,[V])),ne){const ze=i.get(L[Ce]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,ze,0)}t.blitFramebuffer(0,0,ae,pe,0,0,ae,pe,_e,9728),x&&t.invalidateFramebuffer(36008,Ee)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),ne)for(let Ce=0;Ce<L.length;Ce++){n.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ce,36161,he.__webglColorRenderbuffer[Ce]);const Le=i.get(L[Ce]).__webglTexture;n.bindFramebuffer(36160,he.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ce,3553,Le,0)}n.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function mt(z){return Math.min(g,z.samples)}function at(z){const L=i.get(z);return a&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function _t(z){const L=l.render.frame;E.get(z)!==L&&(E.set(z,L),z.update())}function jt(z,L){const ae=z.encoding,pe=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===Oh||ae!==To&&(ae===bt?a===!1?e.has("EXT_sRGB")===!0&&pe===Ei?(z.format=Oh,z.minFilter=ui,z.generateMipmaps=!1):L=Fx.sRGBToLinear(L):(pe!==Ei||_e!==Eo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ae)),L}this.allocateTextureUnit=j,this.resetTextureUnits=me,this.setTexture2D=re,this.setTexture2DArray=Te,this.setTexture3D=ve,this.setTextureCube=oe,this.rebindTextures=Qe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=at}function e2(t,e,n){const i=n.isWebGL2;function r(o,l=null){let a;if(o===Eo)return 5121;if(o===Xw)return 32819;if(o===qw)return 32820;if(o===Hw)return 5120;if(o===Ww)return 5122;if(o===Np)return 5123;if(o===jw)return 5124;if(o===ho)return 5125;if(o===po)return 5126;if(o===ll)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===$w)return 6406;if(o===Ei)return 6408;if(o===Yw)return 6409;if(o===Kw)return 6410;if(o===go)return 6402;if(o===Bs)return 34041;if(o===Oh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Zw)return 6403;if(o===Qw)return 36244;if(o===Jw)return 33319;if(o===eb)return 33320;if(o===tb)return 36249;if(o===Qf||o===Jf||o===ed||o===td)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Qf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Qf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$v||o===Yv||o===Kv||o===Zv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===$v)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Yv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Kv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Zv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===nb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Qv||o===Jv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Qv)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Jv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===ug||o===cg||o===fg||o===dg||o===hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===eg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===tg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ng)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ig)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===rg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===og)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===sg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ag)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===lg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ug)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===cg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===fg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===dg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===hg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===nd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===nd)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===ib||o===pg||o===mg||o===vg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(o===pg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===vg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ps?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class t2 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ou extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n2={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,l=null;const a=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const A of e.hand.values()){const _=n.getJointPose(A,i),p=this._getHandJoint(h,A);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=_.radius),p.visible=_!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],y=v.position.distanceTo(g.position),x=.02,E=.005;h.inputState.pinching&&y>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n2)))}return a!==null&&(a.visible=r!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ou;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class e_ extends Wn{constructor(e,n,i,r,o,l,a,d,h,v){if(v=v!==void 0?v:go,v!==go&&v!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&v===go&&(i=ho),i===void 0&&v===Bs&&(i=Ps),super(null,r,o,l,a,d,v,i,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1}}class i2 extends Do{constructor(e,n){super();const i=this;let r=null,o=1,l=null,a="local-floor",d=1,h=null,v=null,g=null,y=null,x=null,E=null;const A=n.getContextAttributes();let _=null,p=null;const w=[],b=[],P=new Set,D=new Map,O=new kn;O.layers.enable(1),O.viewport=new Rt;const B=new kn;B.layers.enable(2),B.viewport=new Rt;const k=[O,B],R=new t2;R.layers.enable(1),R.layers.enable(2);let N=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let q=w[oe];return q===void 0&&(q=new Td,w[oe]=q),q.getTargetRaySpace()},this.getControllerGrip=function(oe){let q=w[oe];return q===void 0&&(q=new Td,w[oe]=q),q.getGripSpace()},this.getHand=function(oe){let q=w[oe];return q===void 0&&(q=new Td,w[oe]=q),q.getHandSpace()};function ue(oe){const q=b.indexOf(oe.inputSource);if(q===-1)return;const we=w[q];we!==void 0&&we.dispatchEvent({type:oe.type,data:oe.inputSource})}function $(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<w.length;oe++){const q=b[oe];q!==null&&(b[oe]=null,w[oe].disconnect(q))}N=null,se=null,e.setRenderTarget(_),x=null,y=null,g=null,r=null,p=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),A.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?A.antialias:!0,alpha:A.alpha,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:x}),p=new en(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:Eo,encoding:e.outputEncoding,stencilBuffer:A.stencil})}else{let q=null,we=null,Me=null;A.depth&&(Me=A.stencil?35056:33190,q=A.stencil?Bs:go,we=A.stencil?Ps:ho);const te={colorFormat:32856,depthFormat:Me,scaleFactor:o};g=new XRWebGLBinding(r,n),y=g.createProjectionLayer(te),r.updateRenderState({layers:[y]}),p=new en(y.textureWidth,y.textureHeight,{format:Ei,type:Eo,depthTexture:new e_(y.textureWidth,y.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:A.stencil,encoding:e.outputEncoding,samples:A.antialias?4:0});const Ke=e.properties.get(p);Ke.__ignoreDepthValues=y.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Z(oe){for(let q=0;q<oe.removed.length;q++){const we=oe.removed[q],Me=b.indexOf(we);Me>=0&&(b[Me]=null,w[Me].disconnect(we))}for(let q=0;q<oe.added.length;q++){const we=oe.added[q];let Me=b.indexOf(we);if(Me===-1){for(let Ke=0;Ke<w.length;Ke++)if(Ke>=b.length){b.push(we),Me=Ke;break}else if(b[Ke]===null){b[Ke]=we,Me=Ke;break}if(Me===-1)break}const te=w[Me];te&&te.connect(we)}}const W=new X,fe=new X;function me(oe,q,we){W.setFromMatrixPosition(q.matrixWorld),fe.setFromMatrixPosition(we.matrixWorld);const Me=W.distanceTo(fe),te=q.projectionMatrix.elements,Ke=we.projectionMatrix.elements,Ge=te[14]/(te[10]-1),be=te[14]/(te[10]+1),Be=(te[9]+1)/te[5],dt=(te[9]-1)/te[5],Fe=(te[8]-1)/te[0],Qe=(Ke[8]+1)/Ke[0],Xe=Ge*Fe,Et=Ge*Qe,Nt=Me/(-Fe+Qe),mt=Nt*-Fe;q.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(mt),oe.translateZ(Nt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const at=Ge+Nt,_t=be+Nt,jt=Xe-mt,z=Et+(Me-mt),L=Be*be/_t*at,ae=dt*be/_t*at;oe.projectionMatrix.makePerspective(jt,z,L,ae,at,_t),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function j(oe,q){q===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(q.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;R.near=B.near=O.near=oe.near,R.far=B.far=O.far=oe.far,(N!==R.near||se!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,se=R.far);const q=oe.parent,we=R.cameras;j(R,q);for(let Me=0;Me<we.length;Me++)j(we[Me],q);we.length===2?me(R,O,B):R.projectionMatrix.copy(O.projectionMatrix),J(oe,R,q)};function J(oe,q,we){we===null?oe.matrix.copy(q.matrixWorld):(oe.matrix.copy(we.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(q.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0);const Me=oe.children;for(let te=0,Ke=Me.length;te<Ke;te++)Me[te].updateMatrixWorld(!0);oe.projectionMatrix.copy(q.projectionMatrix),oe.projectionMatrixInverse.copy(q.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Mc*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&x===null))return d},this.setFoveation=function(oe){d=oe,y!==null&&(y.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.getPlanes=function(){return P};let re=null;function Te(oe,q){if(v=q.getViewerPose(h||l),E=q,v!==null){const we=v.views;x!==null&&(e.setRenderTargetFramebuffer(p,x.framebuffer),e.setRenderTarget(p));let Me=!1;we.length!==R.cameras.length&&(R.cameras.length=0,Me=!0);for(let te=0;te<we.length;te++){const Ke=we[te];let Ge=null;if(x!==null)Ge=x.getViewport(Ke);else{const Be=g.getViewSubImage(y,Ke);Ge=Be.viewport,te===0&&(e.setRenderTargetTextures(p,Be.colorTexture,y.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let be=k[te];be===void 0&&(be=new kn,be.layers.enable(te),be.viewport=new Rt,k[te]=be),be.matrix.fromArray(Ke.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ke.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),te===0&&(R.matrix.copy(be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Me===!0&&R.cameras.push(be)}}for(let we=0;we<w.length;we++){const Me=b[we],te=w[we];Me!==null&&te!==void 0&&te.update(Me,q,h||l)}if(re&&re(oe,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let we=null;for(const Me of P)q.detectedPlanes.has(Me)||(we===null&&(we=[]),we.push(Me));if(we!==null)for(const Me of we)P.delete(Me),D.delete(Me),i.dispatchEvent({type:"planeremoved",data:Me});for(const Me of q.detectedPlanes)if(!P.has(Me))P.add(Me),D.set(Me,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Me});else{const te=D.get(Me);Me.lastChangedTime>te&&(D.set(Me,Me.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Me}))}}E=null}const ve=new Yx;ve.setAnimationLoop(Te),this.setAnimationLoop=function(oe){re=oe},this.dispose=function(){}}}function r2(t,e){function n(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,Xx(t)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,w,b,P){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),g(_,p)):p.isMeshPhongMaterial?(o(_,p),v(_,p)):p.isMeshStandardMaterial?(o(_,p),y(_,p),p.isMeshPhysicalMaterial&&x(_,p,P)):p.isMeshMatcapMaterial?(o(_,p),E(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),A(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(l(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?d(_,p,w,b):p.isSpriteMaterial?h(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,n(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Rn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,n(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Rn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,n(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,n(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(_.envMap.value=w,_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const b=t.useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*b,n(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,_.aoMapTransform))}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function d(_,p,w,b){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*w,_.scale.value=b*.5,p.map&&(_.map.value=p.map,n(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function v(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function g(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function y(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,_.roughnessMapTransform)),e.get(p).envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function x(_,p,w){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,p){p.matcap&&(_.matcap.value=p.matcap)}function A(_,p){const w=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function o2(t,e,n,i){let r={},o={},l=[];const a=n.isWebGL2?t.getParameter(35375):0;function d(w,b){const P=b.program;i.uniformBlockBinding(w,P)}function h(w,b){let P=r[w.id];P===void 0&&(E(w),P=v(w),r[w.id]=P,w.addEventListener("dispose",_));const D=b.program;i.updateUBOMapping(w,D);const O=e.render.frame;o[w.id]!==O&&(y(w),o[w.id]=O)}function v(w){const b=g();w.__bindingPointIndex=b;const P=t.createBuffer(),D=w.__size,O=w.usage;return t.bindBuffer(35345,P),t.bufferData(35345,D,O),t.bindBuffer(35345,null),t.bindBufferBase(35345,b,P),P}function g(){for(let w=0;w<a;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(w){const b=r[w.id],P=w.uniforms,D=w.__cache;t.bindBuffer(35345,b);for(let O=0,B=P.length;O<B;O++){const k=P[O];if(x(k,O,D)===!0){const R=k.__offset,N=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let ue=0;ue<N.length;ue++){const $=N[ue],Z=A($);typeof $=="number"?(k.__data[0]=$,t.bufferSubData(35345,R+se,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=$.elements[0],k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=$.elements[0],k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=$.elements[0]):($.toArray(k.__data,se),se+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,R,k.__data)}}t.bindBuffer(35345,null)}function x(w,b,P){const D=w.value;if(P[b]===void 0){if(typeof D=="number")P[b]=D;else{const O=Array.isArray(D)?D:[D],B=[];for(let k=0;k<O.length;k++)B.push(O[k].clone());P[b]=B}return!0}else if(typeof D=="number"){if(P[b]!==D)return P[b]=D,!0}else{const O=Array.isArray(P[b])?P[b]:[P[b]],B=Array.isArray(D)?D:[D];for(let k=0;k<O.length;k++){const R=O[k];if(R.equals(B[k])===!1)return R.copy(B[k]),!0}}return!1}function E(w){const b=w.uniforms;let P=0;const D=16;let O=0;for(let B=0,k=b.length;B<k;B++){const R=b[B],N={boundary:0,storage:0},se=Array.isArray(R.value)?R.value:[R.value];for(let ue=0,$=se.length;ue<$;ue++){const Z=se[ue],W=A(Z);N.boundary+=W.boundary,N.storage+=W.storage}if(R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=P,B>0){O=P%D;const ue=D-O;O!==0&&ue-N.boundary<0&&(P+=D-O,R.__offset=P)}P+=N.storage}return O=P%D,O>0&&(P+=D-O),w.__size=P,w.__cache={},this}function A(w){const b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function _(w){const b=w.target;b.removeEventListener("dispose",_);const P=l.indexOf(b.__bindingPointIndex);l.splice(P,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function p(){for(const w in r)t.deleteBuffer(r[w]);l=[],r={},o={}}return{bind:d,update:h,dispose:p}}function s2(){const t=cl("canvas");return t.style.display="block",t}class t_{constructor(e={}){const{canvas:n=s2(),context:i=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let y;i!==null?y=i.getContextAttributes().alpha:y=l;let x=null,E=null;const A=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=To,this.useLegacyLights=!0,this.toneMapping=Gi,this.toneMappingExposure=1;const p=this;let w=!1,b=0,P=0,D=null,O=-1,B=null;const k=new Rt,R=new Rt;let N=null,se=n.width,ue=n.height,$=1,Z=null,W=null;const fe=new Rt(0,0,se,ue),me=new Rt(0,0,se,ue);let j=!1;const J=new kp;let re=!1,Te=!1,ve=null;const oe=new Gt,q=new X,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return D===null?$:1}let te=i;function Ke(U,Q){for(let ie=0;ie<U.length;ie++){const Y=U[ie],de=n.getContext(Y,Q);if(de!==null)return de}return null}try{const U={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ip}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",Je,!1),te===null){const Q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&Q.shift(),te=Ke(Q,U),te===null)throw Ke(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Ge,be,Be,dt,Fe,Qe,Xe,Et,Nt,mt,at,_t,jt,z,L,ae,pe,_e,Ee,V,he,ne,Ce,Le;function ze(){Ge=new _C(te),be=new pC(te,Ge,e),Ge.init(be),ne=new e2(te,Ge,be),Be=new QP(te,Ge,be),dt=new wC,Fe=new BP,Qe=new JP(te,Ge,Be,Fe,be,ne,dt),Xe=new vC(p),Et=new xC(p),Nt=new Nb(te,be),Ce=new dC(te,Ge,Nt,be),mt=new SC(te,Nt,dt,Ce),at=new CC(te,mt,Nt,dt),Ee=new TC(te,be,Qe),ae=new mC(Fe),_t=new FP(p,Xe,Et,Ge,be,Ce,ae),jt=new r2(p,Fe),z=new GP,L=new $P(Ge,be),_e=new fC(p,Xe,Et,Be,at,y,d),pe=new ZP(p,at,be),Le=new o2(te,dt,be,Be),V=new hC(te,Ge,dt,be),he=new MC(te,Ge,dt,be),dt.programs=_t.programs,p.capabilities=be,p.extensions=Ge,p.properties=Fe,p.renderLists=z,p.shadowMap=pe,p.state=Be,p.info=dt}ze();const De=new i2(p,te);this.xr=De,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const U=Ge.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Ge.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(se,ue,!1))},this.getSize=function(U){return U.set(se,ue)},this.setSize=function(U,Q,ie=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=U,ue=Q,n.width=Math.floor(U*$),n.height=Math.floor(Q*$),ie===!0&&(n.style.width=U+"px",n.style.height=Q+"px"),this.setViewport(0,0,U,Q)},this.getDrawingBufferSize=function(U){return U.set(se*$,ue*$).floor()},this.setDrawingBufferSize=function(U,Q,ie){se=U,ue=Q,$=ie,n.width=Math.floor(U*ie),n.height=Math.floor(Q*ie),this.setViewport(0,0,U,Q)},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(fe)},this.setViewport=function(U,Q,ie,Y){U.isVector4?fe.set(U.x,U.y,U.z,U.w):fe.set(U,Q,ie,Y),Be.viewport(k.copy(fe).multiplyScalar($).floor())},this.getScissor=function(U){return U.copy(me)},this.setScissor=function(U,Q,ie,Y){U.isVector4?me.set(U.x,U.y,U.z,U.w):me.set(U,Q,ie,Y),Be.scissor(R.copy(me).multiplyScalar($).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(U){Be.setScissorTest(j=U)},this.setOpaqueSort=function(U){Z=U},this.setTransparentSort=function(U){W=U},this.getClearColor=function(U){return U.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(U=!0,Q=!0,ie=!0){let Y=0;U&&(Y|=16384),Q&&(Y|=256),ie&&(Y|=1024),te.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",Je,!1),z.dispose(),L.dispose(),Fe.dispose(),Xe.dispose(),Et.dispose(),at.dispose(),Ce.dispose(),Le.dispose(),_t.dispose(),De.dispose(),De.removeEventListener("sessionstart",Oe),De.removeEventListener("sessionend",St),ve&&(ve.dispose(),ve=null),yt.stop()};function Ue(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const U=dt.autoReset,Q=pe.enabled,ie=pe.autoUpdate,Y=pe.needsUpdate,de=pe.type;ze(),dt.autoReset=U,pe.enabled=Q,pe.autoUpdate=ie,pe.needsUpdate=Y,pe.type=de}function Je(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Pt(U){const Q=U.target;Q.removeEventListener("dispose",Pt),H(Q)}function H(U){le(U),Fe.remove(U)}function le(U){const Q=Fe.get(U).programs;Q!==void 0&&(Q.forEach(function(ie){_t.releaseProgram(ie)}),U.isShaderMaterial&&_t.releaseShaderCache(U))}this.renderBufferDirect=function(U,Q,ie,Y,de,Ve){Q===null&&(Q=we);const Ye=de.isMesh&&de.matrixWorld.determinant()<0,We=$e(U,Q,ie,Y,de);Be.setMaterial(Y,Ye);let et=ie.index,it=1;Y.wireframe===!0&&(et=mt.getWireframeAttribute(ie),it=2);const nt=ie.drawRange,rt=ie.attributes.position;let ht=nt.start*it,sn=(nt.start+nt.count)*it;Ve!==null&&(ht=Math.max(ht,Ve.start*it),sn=Math.min(sn,(Ve.start+Ve.count)*it)),et!==null?(ht=Math.max(ht,0),sn=Math.min(sn,et.count)):rt!=null&&(ht=Math.max(ht,0),sn=Math.min(sn,rt.count));const En=sn-ht;if(En<0||En===1/0)return;Ce.setup(de,Y,We,ie,et);let Ri,Bt=V;if(et!==null&&(Ri=Nt.get(et),Bt=he,Bt.setIndex(Ri)),de.isMesh)Y.wireframe===!0?(Be.setLineWidth(Y.wireframeLinewidth*Me()),Bt.setMode(1)):Bt.setMode(4);else if(de.isLine){let lt=Y.linewidth;lt===void 0&&(lt=1),Be.setLineWidth(lt*Me()),de.isLineSegments?Bt.setMode(1):de.isLineLoop?Bt.setMode(2):Bt.setMode(3)}else de.isPoints?Bt.setMode(0):de.isSprite&&Bt.setMode(4);if(de.isInstancedMesh)Bt.renderInstances(ht,En,de.count);else if(ie.isInstancedBufferGeometry){const lt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,cr=Math.min(ie.instanceCount,lt);Bt.renderInstances(ht,En,cr)}else Bt.render(ht,En)},this.compile=function(U,Q){function ie(Y,de,Ve){Y.transparent===!0&&Y.side===tr&&Y.forceSinglePass===!1?(Y.side=Rn,Y.needsUpdate=!0,Ro(Y,de,Ve),Y.side=zr,Y.needsUpdate=!0,Ro(Y,de,Ve),Y.side=tr):Ro(Y,de,Ve)}E=L.get(U),E.init(),_.push(E),U.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Q.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(p.useLegacyLights),U.traverse(function(Y){const de=Y.material;if(de)if(Array.isArray(de))for(let Ve=0;Ve<de.length;Ve++){const Ye=de[Ve];ie(Ye,U,Y)}else ie(de,U,Y)}),_.pop(),E=null};let ge=null;function Re(U){ge&&ge(U)}function Oe(){yt.stop()}function St(){yt.start()}const yt=new Yx;yt.setAnimationLoop(Re),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(U){ge=U,De.setAnimationLoop(U),U===null?yt.stop():yt.start()},De.addEventListener("sessionstart",Oe),De.addEventListener("sessionend",St),this.render=function(U,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),U.isScene===!0&&U.onBeforeRender(p,U,Q,D),E=L.get(U,_.length),E.init(),_.push(E),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J.setFromProjectionMatrix(oe),Te=this.localClippingEnabled,re=ae.init(this.clippingPlanes,Te),x=z.get(U,A.length),x.init(),A.push(x),on(U,Q,0,p.sortObjects),x.finish(),p.sortObjects===!0&&x.sort(Z,W),re===!0&&ae.beginShadows();const ie=E.state.shadowsArray;if(pe.render(ie,U,Q),re===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(x,U),E.setupLights(p.useLegacyLights),Q.isArrayCamera){const Y=Q.cameras;for(let de=0,Ve=Y.length;de<Ve;de++){const Ye=Y[de];Xt(x,U,Ye,Ye.viewport)}}else Xt(x,U,Q);D!==null&&(Qe.updateMultisampleRenderTarget(D),Qe.updateRenderTargetMipmap(D)),U.isScene===!0&&U.onAfterRender(p,U,Q),Ce.resetDefaultState(),O=-1,B=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function on(U,Q,ie,Y){if(U.visible===!1)return;if(U.layers.test(Q.layers)){if(U.isGroup)ie=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Q);else if(U.isLight)E.pushLight(U),U.castShadow&&E.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||J.intersectsSprite(U)){Y&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(oe);const Ye=at.update(U),We=U.material;We.visible&&x.push(U,Ye,We,ie,q.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(U.isSkinnedMesh&&U.skeleton.frame!==dt.render.frame&&(U.skeleton.update(),U.skeleton.frame=dt.render.frame),!U.frustumCulled||J.intersectsObject(U))){Y&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(oe);const Ye=at.update(U),We=U.material;if(Array.isArray(We)){const et=Ye.groups;for(let it=0,nt=et.length;it<nt;it++){const rt=et[it],ht=We[rt.materialIndex];ht&&ht.visible&&x.push(U,Ye,ht,ie,q.z,rt)}}else We.visible&&x.push(U,Ye,We,ie,q.z,null)}}const Ve=U.children;for(let Ye=0,We=Ve.length;Ye<We;Ye++)on(Ve[Ye],Q,ie,Y)}function Xt(U,Q,ie,Y){const de=U.opaque,Ve=U.transmissive,Ye=U.transparent;E.setupLightsView(ie),re===!0&&ae.setGlobalState(p.clippingPlanes,ie),Ve.length>0&&vt(de,Ve,Q,ie),Y&&Be.viewport(k.copy(Y)),de.length>0&&qt(de,Q,ie),Ve.length>0&&qt(Ve,Q,ie),Ye.length>0&&qt(Ye,Q,ie),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function vt(U,Q,ie,Y){if(ve===null){const We=be.isWebGL2;ve=new en(1024,1024,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")?ll:Eo,minFilter:al,samples:We&&a===!0?4:0})}const de=p.getRenderTarget();p.setRenderTarget(ve),p.clear();const Ve=p.toneMapping;p.toneMapping=Gi,qt(U,ie,Y),Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve);let Ye=!1;for(let We=0,et=Q.length;We<et;We++){const it=Q[We],nt=it.object,rt=it.geometry,ht=it.material,sn=it.group;if(ht.side===tr&&nt.layers.test(Y.layers)){const En=ht.side;ht.side=Rn,ht.needsUpdate=!0,jn(nt,ie,Y,rt,ht,sn),ht.side=En,ht.needsUpdate=!0,Ye=!0}}Ye===!0&&(Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve)),p.setRenderTarget(de),p.toneMapping=Ve}function qt(U,Q,ie){const Y=Q.isScene===!0?Q.overrideMaterial:null;for(let de=0,Ve=U.length;de<Ve;de++){const Ye=U[de],We=Ye.object,et=Ye.geometry,it=Y===null?Ye.material:Y,nt=Ye.group;We.layers.test(ie.layers)&&jn(We,Q,ie,et,it,nt)}}function jn(U,Q,ie,Y,de,Ve){U.onBeforeRender(p,Q,ie,Y,de,Ve),U.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),de.onBeforeRender(p,Q,ie,Y,U,Ve),de.transparent===!0&&de.side===tr&&de.forceSinglePass===!1?(de.side=Rn,de.needsUpdate=!0,p.renderBufferDirect(ie,Q,Y,de,U,Ve),de.side=zr,de.needsUpdate=!0,p.renderBufferDirect(ie,Q,Y,de,U,Ve),de.side=tr):p.renderBufferDirect(ie,Q,Y,de,U,Ve),U.onAfterRender(p,Q,ie,Y,de,Ve)}function Ro(U,Q,ie){Q.isScene!==!0&&(Q=we);const Y=Fe.get(U),de=E.state.lights,Ve=E.state.shadowsArray,Ye=de.state.version,We=_t.getParameters(U,de.state,Ve,Q,ie),et=_t.getProgramCacheKey(We);let it=Y.programs;Y.environment=U.isMeshStandardMaterial?Q.environment:null,Y.fog=Q.fog,Y.envMap=(U.isMeshStandardMaterial?Et:Xe).get(U.envMap||Y.environment),it===void 0&&(U.addEventListener("dispose",Pt),it=new Map,Y.programs=it);let nt=it.get(et);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===Ye)return ni(U,We),nt}else We.uniforms=_t.getUniforms(U),U.onBuild(ie,We,p),U.onBeforeCompile(We,p),nt=_t.acquireProgram(We,et),it.set(et,nt),Y.uniforms=We.uniforms;const rt=Y.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(rt.clippingPlanes=ae.uniform),ni(U,We),Y.needsLights=jr(U),Y.lightsStateVersion=Ye,Y.needsLights&&(rt.ambientLightColor.value=de.state.ambient,rt.lightProbe.value=de.state.probe,rt.directionalLights.value=de.state.directional,rt.directionalLightShadows.value=de.state.directionalShadow,rt.spotLights.value=de.state.spot,rt.spotLightShadows.value=de.state.spotShadow,rt.rectAreaLights.value=de.state.rectArea,rt.ltc_1.value=de.state.rectAreaLTC1,rt.ltc_2.value=de.state.rectAreaLTC2,rt.pointLights.value=de.state.point,rt.pointLightShadows.value=de.state.pointShadow,rt.hemisphereLights.value=de.state.hemi,rt.directionalShadowMap.value=de.state.directionalShadowMap,rt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,rt.spotShadowMap.value=de.state.spotShadowMap,rt.spotLightMatrix.value=de.state.spotLightMatrix,rt.spotLightMap.value=de.state.spotLightMap,rt.pointShadowMap.value=de.state.pointShadowMap,rt.pointShadowMatrix.value=de.state.pointShadowMatrix);const ht=nt.getUniforms(),sn=Yu.seqWithValue(ht.seq,rt);return Y.currentProgram=nt,Y.uniformsList=sn,nt}function ni(U,Q){const ie=Fe.get(U);ie.outputEncoding=Q.outputEncoding,ie.instancing=Q.instancing,ie.skinning=Q.skinning,ie.morphTargets=Q.morphTargets,ie.morphNormals=Q.morphNormals,ie.morphColors=Q.morphColors,ie.morphTargetsCount=Q.morphTargetsCount,ie.numClippingPlanes=Q.numClippingPlanes,ie.numIntersection=Q.numClipIntersection,ie.vertexAlphas=Q.vertexAlphas,ie.vertexTangents=Q.vertexTangents,ie.toneMapping=Q.toneMapping}function $e(U,Q,ie,Y,de){Q.isScene!==!0&&(Q=we),Qe.resetTextureUnits();const Ve=Q.fog,Ye=Y.isMeshStandardMaterial?Q.environment:null,We=D===null?p.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:To,et=(Y.isMeshStandardMaterial?Et:Xe).get(Y.envMap||Ye),it=Y.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!Y.normalMap&&!!ie.attributes.tangent,rt=!!ie.morphAttributes.position,ht=!!ie.morphAttributes.normal,sn=!!ie.morphAttributes.color,En=Y.toneMapped?p.toneMapping:Gi,Ri=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Bt=Ri!==void 0?Ri.length:0,lt=Fe.get(Y),cr=E.state.lights;if(re===!0&&(Te===!0||U!==B)){const Tn=U===B&&Y.id===O;ae.setState(Y,U,Tn)}let $t=!1;Y.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==cr.state.version||lt.outputEncoding!==We||de.isInstancedMesh&&lt.instancing===!1||!de.isInstancedMesh&&lt.instancing===!0||de.isSkinnedMesh&&lt.skinning===!1||!de.isSkinnedMesh&&lt.skinning===!0||lt.envMap!==et||Y.fog===!0&&lt.fog!==Ve||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==ae.numPlanes||lt.numIntersection!==ae.numIntersection)||lt.vertexAlphas!==it||lt.vertexTangents!==nt||lt.morphTargets!==rt||lt.morphNormals!==ht||lt.morphColors!==sn||lt.toneMapping!==En||be.isWebGL2===!0&&lt.morphTargetsCount!==Bt)&&($t=!0):($t=!0,lt.__version=Y.version);let ii=lt.currentProgram;$t===!0&&(ii=Ro(Y,Q,de));let Io=!1,Xr=!1,Ys=!1;const Ht=ii.getUniforms(),Hi=lt.uniforms;if(Be.useProgram(ii.program)&&(Io=!0,Xr=!0,Ys=!0),Y.id!==O&&(O=Y.id,Xr=!0),Io||B!==U){if(Ht.setValue(te,"projectionMatrix",U.projectionMatrix),be.logarithmicDepthBuffer&&Ht.setValue(te,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),B!==U&&(B=U,Xr=!0,Ys=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const Tn=Ht.map.cameraPosition;Tn!==void 0&&Tn.setValue(te,q.setFromMatrixPosition(U.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ht.setValue(te,"isOrthographic",U.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||de.isSkinnedMesh)&&Ht.setValue(te,"viewMatrix",U.matrixWorldInverse)}if(de.isSkinnedMesh){Ht.setOptional(te,de,"bindMatrix"),Ht.setOptional(te,de,"bindMatrixInverse");const Tn=de.skeleton;Tn&&(be.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ht.setValue(te,"boneTexture",Tn.boneTexture,Qe),Ht.setValue(te,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mi=ie.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0&&be.isWebGL2===!0)&&Ee.update(de,ie,ii),(Xr||lt.receiveShadow!==de.receiveShadow)&&(lt.receiveShadow=de.receiveShadow,Ht.setValue(te,"receiveShadow",de.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Hi.envMap.value=et,Hi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),Xr&&(Ht.setValue(te,"toneMappingExposure",p.toneMappingExposure),lt.needsLights&&Lo(Hi,Ys),Ve&&Y.fog===!0&&jt.refreshFogUniforms(Hi,Ve),jt.refreshMaterialUniforms(Hi,Y,$,ue,ve),Yu.upload(te,lt.uniformsList,Hi,Qe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Yu.upload(te,lt.uniformsList,Hi,Qe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ht.setValue(te,"center",de.center),Ht.setValue(te,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(te,"normalMatrix",de.normalMatrix),Ht.setValue(te,"modelMatrix",de.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Tn=Y.uniformsGroups;for(let Ks=0,Tl=Tn.length;Ks<Tl;Ks++)if(be.isWebGL2){const Cl=Tn[Ks];Le.update(Cl,ii),Le.bind(Cl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Lo(U,Q){U.ambientLightColor.needsUpdate=Q,U.lightProbe.needsUpdate=Q,U.directionalLights.needsUpdate=Q,U.directionalLightShadows.needsUpdate=Q,U.pointLights.needsUpdate=Q,U.pointLightShadows.needsUpdate=Q,U.spotLights.needsUpdate=Q,U.spotLightShadows.needsUpdate=Q,U.rectAreaLights.needsUpdate=Q,U.hemisphereLights.needsUpdate=Q}function jr(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,Q,ie){Fe.get(U.texture).__webglTexture=Q,Fe.get(U.depthTexture).__webglTexture=ie;const Y=Fe.get(U);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ie===void 0,Y.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,Q){const ie=Fe.get(U);ie.__webglFramebuffer=Q,ie.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(U,Q=0,ie=0){D=U,b=Q,P=ie;let Y=!0,de=null,Ve=!1,Ye=!1;if(U){const et=Fe.get(U);et.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(36160,null),Y=!1):et.__webglFramebuffer===void 0?Qe.setupRenderTarget(U):et.__hasExternalTextures&&Qe.rebindTextures(U,Fe.get(U.texture).__webglTexture,Fe.get(U.depthTexture).__webglTexture);const it=U.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ye=!0);const nt=Fe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(de=nt[Q],Ve=!0):be.isWebGL2&&U.samples>0&&Qe.useMultisampledRTT(U)===!1?de=Fe.get(U).__webglMultisampledFramebuffer:de=nt,k.copy(U.viewport),R.copy(U.scissor),N=U.scissorTest}else k.copy(fe).multiplyScalar($).floor(),R.copy(me).multiplyScalar($).floor(),N=j;if(Be.bindFramebuffer(36160,de)&&be.drawBuffers&&Y&&Be.drawBuffers(U,de),Be.viewport(k),Be.scissor(R),Be.setScissorTest(N),Ve){const et=Fe.get(U.texture);te.framebufferTexture2D(36160,36064,34069+Q,et.__webglTexture,ie)}else if(Ye){const et=Fe.get(U.texture),it=Q||0;te.framebufferTextureLayer(36160,36064,et.__webglTexture,ie||0,it)}O=-1},this.readRenderTargetPixels=function(U,Q,ie,Y,de,Ve,Ye){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Fe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ye!==void 0&&(We=We[Ye]),We){Be.bindFramebuffer(36160,We);try{const et=U.texture,it=et.format,nt=et.type;if(it!==Ei&&ne.convert(it)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=nt===ll&&(Ge.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ge.has("EXT_color_buffer_float"));if(nt!==Eo&&ne.convert(nt)!==te.getParameter(35738)&&!(nt===po&&(be.isWebGL2||Ge.has("OES_texture_float")||Ge.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=U.width-Y&&ie>=0&&ie<=U.height-de&&te.readPixels(Q,ie,Y,de,ne.convert(it),ne.convert(nt),Ve)}finally{const et=D!==null?Fe.get(D).__webglFramebuffer:null;Be.bindFramebuffer(36160,et)}}},this.copyFramebufferToTexture=function(U,Q,ie=0){const Y=Math.pow(2,-ie),de=Math.floor(Q.image.width*Y),Ve=Math.floor(Q.image.height*Y);Qe.setTexture2D(Q,0),te.copyTexSubImage2D(3553,ie,0,0,U.x,U.y,de,Ve),Be.unbindTexture()},this.copyTextureToTexture=function(U,Q,ie,Y=0){const de=Q.image.width,Ve=Q.image.height,Ye=ne.convert(ie.format),We=ne.convert(ie.type);Qe.setTexture2D(ie,0),te.pixelStorei(37440,ie.flipY),te.pixelStorei(37441,ie.premultiplyAlpha),te.pixelStorei(3317,ie.unpackAlignment),Q.isDataTexture?te.texSubImage2D(3553,Y,U.x,U.y,de,Ve,Ye,We,Q.image.data):Q.isCompressedTexture?te.compressedTexSubImage2D(3553,Y,U.x,U.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Ye,Q.mipmaps[0].data):te.texSubImage2D(3553,Y,U.x,U.y,Ye,We,Q.image),Y===0&&ie.generateMipmaps&&te.generateMipmap(3553),Be.unbindTexture()},this.copyTextureToTexture3D=function(U,Q,ie,Y,de=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=U.max.x-U.min.x+1,Ye=U.max.y-U.min.y+1,We=U.max.z-U.min.z+1,et=ne.convert(Y.format),it=ne.convert(Y.type);let nt;if(Y.isData3DTexture)Qe.setTexture3D(Y,0),nt=32879;else if(Y.isDataArrayTexture)Qe.setTexture2DArray(Y,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(37440,Y.flipY),te.pixelStorei(37441,Y.premultiplyAlpha),te.pixelStorei(3317,Y.unpackAlignment);const rt=te.getParameter(3314),ht=te.getParameter(32878),sn=te.getParameter(3316),En=te.getParameter(3315),Ri=te.getParameter(32877),Bt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;te.pixelStorei(3314,Bt.width),te.pixelStorei(32878,Bt.height),te.pixelStorei(3316,U.min.x),te.pixelStorei(3315,U.min.y),te.pixelStorei(32877,U.min.z),ie.isDataTexture||ie.isData3DTexture?te.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,We,et,it,Bt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,We,et,Bt.data)):te.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,We,et,it,Bt),te.pixelStorei(3314,rt),te.pixelStorei(32878,ht),te.pixelStorei(3316,sn),te.pixelStorei(3315,En),te.pixelStorei(32877,Ri),de===0&&Y.generateMipmaps&&te.generateMipmap(nt),Be.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?Qe.setTextureCube(U,0):U.isData3DTexture?Qe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Qe.setTexture2DArray(U,0):Qe.setTexture2D(U,0),Be.unbindTexture()},this.resetState=function(){b=0,P=0,D=null,Be.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class a2 extends t_{}a2.prototype.isWebGL1Renderer=!0;class n_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ds extends Pi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Fp extends Di{constructor(e=1,n=1,i=1,r=32,o=1,l=!1,a=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:a,thetaLength:d};const h=this;r=Math.floor(r),o=Math.floor(o);const v=[],g=[],y=[],x=[];let E=0;const A=[],_=i/2;let p=0;w(),l===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(v),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(x,2));function w(){const P=new X,D=new X;let O=0;const B=(n-e)/i;for(let k=0;k<=o;k++){const R=[],N=k/o,se=N*(n-e)+e;for(let ue=0;ue<=r;ue++){const $=ue/r,Z=$*d+a,W=Math.sin(Z),fe=Math.cos(Z);D.x=se*W,D.y=-N*i+_,D.z=se*fe,g.push(D.x,D.y,D.z),P.set(W,B,fe).normalize(),y.push(P.x,P.y,P.z),x.push($,1-N),R.push(E++)}A.push(R)}for(let k=0;k<r;k++)for(let R=0;R<o;R++){const N=A[R][k],se=A[R+1][k],ue=A[R+1][k+1],$=A[R][k+1];v.push(N,se,$),v.push(se,ue,$),O+=6}h.addGroup(p,O,0),p+=O}function b(P){const D=E,O=new Ne,B=new X;let k=0;const R=P===!0?e:n,N=P===!0?1:-1;for(let ue=1;ue<=r;ue++)g.push(0,_*N,0),y.push(0,N,0),x.push(.5,.5),E++;const se=E;for(let ue=0;ue<=r;ue++){const Z=ue/r*d+a,W=Math.cos(Z),fe=Math.sin(Z);B.x=R*fe,B.y=_*N,B.z=R*W,g.push(B.x,B.y,B.z),y.push(0,N,0),O.x=W*.5+.5,O.y=fe*.5*N+.5,x.push(O.x,O.y),E++}for(let ue=0;ue<r;ue++){const $=D+ue,Z=se+ue;P===!0?v.push(Z,Z+1,$):v.push(Z+1,Z,$),k+=3}h.addGroup(p,k,P===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xc extends Di{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const d=Math.min(l+a,Math.PI);let h=0;const v=[],g=new X,y=new X,x=[],E=[],A=[],_=[];for(let p=0;p<=i;p++){const w=[],b=p/i;let P=0;p===0&&l===0?P=.5/n:p===i&&d===Math.PI&&(P=-.5/n);for(let D=0;D<=n;D++){const O=D/n;g.x=-e*Math.cos(r+O*o)*Math.sin(l+b*a),g.y=e*Math.cos(l+b*a),g.z=e*Math.sin(r+O*o)*Math.sin(l+b*a),E.push(g.x,g.y,g.z),y.copy(g).normalize(),A.push(y.x,y.y,y.z),_.push(O+P,1-b),w.push(h++)}v.push(w)}for(let p=0;p<i;p++)for(let w=0;w<n;w++){const b=v[p][w+1],P=v[p][w],D=v[p+1][w],O=v[p+1][w+1];(p!==0||l>0)&&x.push(b,P,O),(p!==i-1||d<Math.PI)&&x.push(P,D,O)}this.setIndex(x),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class l2 extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n0 extends l2{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xs extends Hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i_ extends Hr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class u2 extends Hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const i0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class c2{constructor(e,n,i){const r=this;let o=!1,l=0,a=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(v){a++,o===!1&&r.onStart!==void 0&&r.onStart(v,l,a),o=!0},this.itemEnd=function(v){l++,r.onProgress!==void 0&&r.onProgress(v,l,a),l===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(v){r.onError!==void 0&&r.onError(v)},this.resolveURL=function(v){return d?d(v):v},this.setURLModifier=function(v){return d=v,this},this.addHandler=function(v,g){return h.push(v,g),this},this.removeHandler=function(v){const g=h.indexOf(v);return g!==-1&&h.splice(g,2),this},this.getHandler=function(v){for(let g=0,y=h.length;g<y;g+=2){const x=h[g],E=h[g+1];if(x.global&&(x.lastIndex=0),x.test(v))return E}return null}}}const f2=new c2;class r_{constructor(e){this.manager=e!==void 0?e:f2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class d2 extends r_{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=i0.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(l),o.manager.itemEnd(e)},0),l;const a=cl("img");function d(){v(),i0.add(e,this),n&&n(this),o.manager.itemEnd(e)}function h(g){v(),r&&r(g),o.manager.itemError(e),o.manager.itemEnd(e)}function v(){a.removeEventListener("load",d,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",d,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class h2 extends r_{constructor(e){super(e)}load(e,n,i,r){const o=new Wn,l=new d2(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class El extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class p2 extends El{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Cd=new Gt,r0=new X,o0=new X;class Bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;r0.setFromMatrixPosition(e.matrixWorld),n.position.copy(r0),o0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(o0),n.updateMatrixWorld(),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class m2 extends Bp{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Mc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pd extends El{constructor(e,n,i=0,r=Math.PI/3,o=0,l=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new m2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const s0=new Gt,ba=new X,Ad=new X;class v2 extends Bp{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),Ad.copy(i.position),Ad.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ad),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),s0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s0)}}class os extends El{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new v2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g2 extends Bp{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y2 extends El{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new g2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ea extends El{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class o_ extends Di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class x2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=a0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=a0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function a0(){return(typeof performance>"u"?Date:performance).now()}class l0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);const u0={type:"change"},Dd={type:"start"},c0={type:"end"};class _2 extends Do{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vo.ROTATE,MIDDLE:Vo.DOLLY,RIGHT:Vo.PAN},this.touches={ONE:Go.ROTATE,TWO:Go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",_t),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(u0),i.update(),o=r.NONE},this.update=function(){const V=new X,he=new Co().setFromUnitVectors(e.up,new X(0,1,0)),ne=he.clone().invert(),Ce=new X,Le=new Co,ze=2*Math.PI;return function(){const Ue=i.object.position;V.copy(Ue).sub(i.target),V.applyQuaternion(he),a.setFromVector3(V),i.autoRotate&&o===r.NONE&&R(B()),i.enableDamping?(a.theta+=d.theta*i.dampingFactor,a.phi+=d.phi*i.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let qe=i.minAzimuthAngle,Je=i.maxAzimuthAngle;return isFinite(qe)&&isFinite(Je)&&(qe<-Math.PI?qe+=ze:qe>Math.PI&&(qe-=ze),Je<-Math.PI?Je+=ze:Je>Math.PI&&(Je-=ze),qe<=Je?a.theta=Math.max(qe,Math.min(Je,a.theta)):a.theta=a.theta>(qe+Je)/2?Math.max(qe,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(v,i.dampingFactor):i.target.add(v),V.setFromSpherical(a),V.applyQuaternion(ne),Ue.copy(i.target).add(V),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,v.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),v.set(0,0,0)),h=1,g||Ce.distanceToSquared(i.object.position)>l||8*(1-Le.dot(i.object.quaternion))>l?(i.dispatchEvent(u0),Ce.copy(i.object.position),Le.copy(i.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",L),i.domElement.removeEventListener("pointerdown",Qe),i.domElement.removeEventListener("pointercancel",Et),i.domElement.removeEventListener("wheel",at),i.domElement.removeEventListener("pointermove",Xe),i.domElement.removeEventListener("pointerup",Et),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_t),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,a=new l0,d=new l0;let h=1;const v=new X;let g=!1;const y=new Ne,x=new Ne,E=new Ne,A=new Ne,_=new Ne,p=new Ne,w=new Ne,b=new Ne,P=new Ne,D=[],O={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function k(){return Math.pow(.95,i.zoomSpeed)}function R(V){d.theta-=V}function N(V){d.phi-=V}const se=function(){const V=new X;return function(ne,Ce){V.setFromMatrixColumn(Ce,0),V.multiplyScalar(-ne),v.add(V)}}(),ue=function(){const V=new X;return function(ne,Ce){i.screenSpacePanning===!0?V.setFromMatrixColumn(Ce,1):(V.setFromMatrixColumn(Ce,0),V.crossVectors(i.object.up,V)),V.multiplyScalar(ne),v.add(V)}}(),$=function(){const V=new X;return function(ne,Ce){const Le=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;V.copy(ze).sub(i.target);let De=V.length();De*=Math.tan(i.object.fov/2*Math.PI/180),se(2*ne*De/Le.clientHeight,i.object.matrix),ue(2*Ce*De/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(se(ne*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),ue(Ce*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(V){i.object.isPerspectiveCamera?h/=V:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*V)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(V){i.object.isPerspectiveCamera?h*=V:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/V)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function fe(V){y.set(V.clientX,V.clientY)}function me(V){w.set(V.clientX,V.clientY)}function j(V){A.set(V.clientX,V.clientY)}function J(V){x.set(V.clientX,V.clientY),E.subVectors(x,y).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*E.x/he.clientHeight),N(2*Math.PI*E.y/he.clientHeight),y.copy(x),i.update()}function re(V){b.set(V.clientX,V.clientY),P.subVectors(b,w),P.y>0?Z(k()):P.y<0&&W(k()),w.copy(b),i.update()}function Te(V){_.set(V.clientX,V.clientY),p.subVectors(_,A).multiplyScalar(i.panSpeed),$(p.x,p.y),A.copy(_),i.update()}function ve(V){V.deltaY<0?W(k()):V.deltaY>0&&Z(k()),i.update()}function oe(V){let he=!1;switch(V.code){case i.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),he=!0;break}he&&(V.preventDefault(),i.update())}function q(){if(D.length===1)y.set(D[0].pageX,D[0].pageY);else{const V=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);y.set(V,he)}}function we(){if(D.length===1)A.set(D[0].pageX,D[0].pageY);else{const V=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);A.set(V,he)}}function Me(){const V=D[0].pageX-D[1].pageX,he=D[0].pageY-D[1].pageY,ne=Math.sqrt(V*V+he*he);w.set(0,ne)}function te(){i.enableZoom&&Me(),i.enablePan&&we()}function Ke(){i.enableZoom&&Me(),i.enableRotate&&q()}function Ge(V){if(D.length==1)x.set(V.pageX,V.pageY);else{const ne=Ee(V),Ce=.5*(V.pageX+ne.x),Le=.5*(V.pageY+ne.y);x.set(Ce,Le)}E.subVectors(x,y).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*E.x/he.clientHeight),N(2*Math.PI*E.y/he.clientHeight),y.copy(x)}function be(V){if(D.length===1)_.set(V.pageX,V.pageY);else{const he=Ee(V),ne=.5*(V.pageX+he.x),Ce=.5*(V.pageY+he.y);_.set(ne,Ce)}p.subVectors(_,A).multiplyScalar(i.panSpeed),$(p.x,p.y),A.copy(_)}function Be(V){const he=Ee(V),ne=V.pageX-he.x,Ce=V.pageY-he.y,Le=Math.sqrt(ne*ne+Ce*Ce);b.set(0,Le),P.set(0,Math.pow(b.y/w.y,i.zoomSpeed)),Z(P.y),w.copy(b)}function dt(V){i.enableZoom&&Be(V),i.enablePan&&be(V)}function Fe(V){i.enableZoom&&Be(V),i.enableRotate&&Ge(V)}function Qe(V){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(V.pointerId),i.domElement.addEventListener("pointermove",Xe),i.domElement.addEventListener("pointerup",Et)),ae(V),V.pointerType==="touch"?jt(V):Nt(V))}function Xe(V){i.enabled!==!1&&(V.pointerType==="touch"?z(V):mt(V))}function Et(V){pe(V),D.length===0&&(i.domElement.releasePointerCapture(V.pointerId),i.domElement.removeEventListener("pointermove",Xe),i.domElement.removeEventListener("pointerup",Et)),i.dispatchEvent(c0),o=r.NONE}function Nt(V){let he;switch(V.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Vo.DOLLY:if(i.enableZoom===!1)return;me(V),o=r.DOLLY;break;case Vo.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(i.enablePan===!1)return;j(V),o=r.PAN}else{if(i.enableRotate===!1)return;fe(V),o=r.ROTATE}break;case Vo.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(i.enableRotate===!1)return;fe(V),o=r.ROTATE}else{if(i.enablePan===!1)return;j(V),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Dd)}function mt(V){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;J(V);break;case r.DOLLY:if(i.enableZoom===!1)return;re(V);break;case r.PAN:if(i.enablePan===!1)return;Te(V);break}}function at(V){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(V.preventDefault(),i.dispatchEvent(Dd),ve(V),i.dispatchEvent(c0))}function _t(V){i.enabled===!1||i.enablePan===!1||oe(V)}function jt(V){switch(_e(V),D.length){case 1:switch(i.touches.ONE){case Go.ROTATE:if(i.enableRotate===!1)return;q(),o=r.TOUCH_ROTATE;break;case Go.PAN:if(i.enablePan===!1)return;we(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Go.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;te(),o=r.TOUCH_DOLLY_PAN;break;case Go.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Dd)}function z(V){switch(_e(V),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ge(V),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(V),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;dt(V),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(V),i.update();break;default:o=r.NONE}}function L(V){i.enabled!==!1&&V.preventDefault()}function ae(V){D.push(V)}function pe(V){delete O[V.pointerId];for(let he=0;he<D.length;he++)if(D[he].pointerId==V.pointerId){D.splice(he,1);return}}function _e(V){let he=O[V.pointerId];he===void 0&&(he=new Ne,O[V.pointerId]=he),he.set(V.pageX,V.pageY)}function Ee(V){const he=V.pointerId===D[0].pointerId?D[1]:D[0];return O[he.pointerId]}i.domElement.addEventListener("contextmenu",L),i.domElement.addEventListener("pointerdown",Qe),i.domElement.addEventListener("pointercancel",Et),i.domElement.addEventListener("wheel",at,{passive:!1}),this.update()}}class Wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const S2=new Wc(-1,1,1,-1,0,1),Vp=new Di;Vp.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3));Vp.setAttribute("uv",new Ln([0,2,0,0,2,0],2));class qc{constructor(e){this._mesh=new Bn(Vp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,S2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const M2={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class w2 extends Wr{constructor(e,n,i){super(),this.scene=e,this.camera=n;const r=i.focus!==void 0?i.focus:1,o=i.aspect!==void 0?i.aspect:n.aspect,l=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new en(1,1,{minFilter:Qt,magFilter:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Fr,this.materialDepth.depthPacking=xl,this.materialDepth.blending=un;const d=M2,h=zn.clone(d.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=r,h.aspect.value=o,h.aperture.value=l,h.maxblur.value=a,h.nearClip.value=n.near,h.farClip.value=n.far,this.materialBokeh=new Lt({defines:Object.assign({},d.defines),uniforms:h,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new qc(this.materialBokeh),this._oldClearColor=new Ze}render(e,n,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,n){this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Va={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Uh extends Wr{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zn.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qc(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class f0 extends Wr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class b2 extends Wr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class E2{constructor(e,n){if(this.renderer=e,n===void 0){const i=e.getSize(new Ne);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,n=new en(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uh(Va),this.clock=new x2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const a=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}f0!==void 0&&(l instanceof f0?i=!0:l instanceof b2&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T2 extends Wr{constructor(e,n,i,r,o){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Nu={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ne(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Gt},cameraInverseProjectionMatrix:{value:new Gt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},_r={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Ne(512,512)},sampleUvOffsets:{value:[new Ne(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},wc={createSampleWeights:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(C2(i,e));return n},createSampleOffsets:function(t,e){const n=[];for(let i=0;i<=t;i++)n.push(e.clone().multiplyScalar(i));return n},configure:function(t,e,n,i){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=wc.createSampleOffsets(e,i),t.uniforms.sampleWeights.value=wc.createSampleWeights(e,n),t.needsUpdate=!0}};function C2(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Rd={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class kh extends Wr{constructor(e,n,i=!1,r=!1,o=new Ne(256,256)){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Ze,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ne(o.x,o.y),this.saoRenderTarget=new en(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new en(this.resolution.x,this.resolution.y,{minFilter:Qt,magFilter:Qt}),this.depthRenderTarget=this.normalRenderTarget.clone();let l;this.supportsDepthTextureExtension&&(l=new e_,l.type=Np,this.beautyRenderTarget.depthTexture=l,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new Fr,this.depthMaterial.depthPacking=xl,this.depthMaterial.blending=un,this.normalMaterial=new i_,this.normalMaterial.blending=un,this.saoMaterial=new Lt({defines:Object.assign({},Nu.defines),fragmentShader:Nu.fragmentShader,vertexShader:Nu.vertexShader,uniforms:zn.clone(Nu.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=un,this.vBlurMaterial=new Lt({uniforms:zn.clone(_r.uniforms),defines:Object.assign({},_r.defines),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=un,this.hBlurMaterial=new Lt({uniforms:zn.clone(_r.uniforms),defines:Object.assign({},_r.defines),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=un,this.materialCopy=new Lt({uniforms:zn.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:un}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=_c,this.materialCopy.blendSrc=Ox,this.materialCopy.blendDst=Dh,this.materialCopy.blendEquation=Er,this.materialCopy.blendSrcAlpha=Ix,this.materialCopy.blendDstAlpha=Dh,this.materialCopy.blendEquationAlpha=Er,this.depthCopy=new Lt({uniforms:zn.clone(Rd.uniforms),vertexShader:Rd.vertexShader,fragmentShader:Rd.fragmentShader,blending:un}),this.fsQuad=new qc(null)}render(e,n,i){if(this.renderToScreen&&(this.materialCopy.blending=un,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(wc.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(0,1)),wc.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let l=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,l=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?l.blending=_c:l.blending=un,this.renderPass(e,l,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}renderOverride(e,n,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,o=n.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}setSize(e,n){this.beautyRenderTarget.setSize(e,n),this.saoRenderTarget.setSize(e,n),this.blurIntermediateRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.depthRenderTarget.setSize(e,n),this.saoMaterial.uniforms.size.value.set(e,n),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,n),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,n),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}kh.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const P2={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gs extends Wr{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new en(o,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const y=new en(o,l);y.texture.name="UnrealBloomPass.h"+g,y.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(y);const x=new en(o,l);x.texture.name="UnrealBloomPass.v"+g,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),o=Math.round(o/2),l=Math.round(l/2)}const a=P2;this.highPassUniforms=zn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new Ne(o,l),o=Math.round(o/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const v=Va;this.copyUniforms=zn.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:Ah,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new yo,this.fsQuad=new qc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Ne(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[d].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gs.BlurDirectionX=new Ne(1,0);Gs.BlurDirectionY=new Ne(0,1);const A2={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},D2={uniforms:{tDiffuse:{value:null},resolution:{value:new Ne}},vertexShader:`

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

		}`},R2=Math.PI/180;function L2(t){return t*R2}const s_=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],Ni=new Ze,Gp=new h2,qs=Gp.load("Carbon.png");qs.encoding=bt;qs.wrapS=bo;qs.wrapT=bo;qs.repeat.x=10;qs.repeat.y=10;const Hp=Gp.load("Carbon_Normal.png");Hp.wrapS=bo;Hp.wrapT=bo;const Ga=Gp.load("ocean.jpg");Ga.encoding=bt;Ga.mapping=Sc;const $s={neon:{background:0,fx:["bloom"],shadow:!1,material:new yo,lights:[],color:({word:t})=>Ni.setHSL(t.length*.17%1,.5,.5)},museum:{background:12303291,env:Ga,shadow:!0,ground:"plane",material:new n0({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:qs,normalMap:Hp}),lights:[(()=>{const t=new Pd(16777215,.2);return t.position.set(0,4,-6),t})(),(()=>{const t=new Pd(16777215,.2);return t.position.set(8,7,0),t})(),(()=>{const t=new Pd(16777215,.2);return t.position.set(-4,6,2),t})(),new Ea(16777215,.4)],cameraLights:[(()=>{const t=new os(16777215,2.5,5,5);return t.shadow=null,t})()],color:()=>Ni.set(16777215)},projection:{background:16777215,ground:"sphere",shadow:!0,material:new xs({transparent:!0,opacity:.75,blending:_c}),lights:[new os],color:({word:t})=>Ni.setHSL(t.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new xs,lights:[new Ea(13421772,.4)],cameraLights:[new os(16777215,1)],color:()=>Ni.set(16776960)},colorful:{background:16777215,shadow:!1,material:new xs,lights:[new Ea(16777215,1)],cameraLights:[new os(16777215,.5)],color:({word:t})=>Ni.setHSL(t.length*.03%1,.5,.5)},bokeh:{background:16777215,fx:["bokeh"],shadow:!1,material:new xs,lights:[new Ea(16777215,.5)],cameraLights:[new os(16777215,1)],color:({word:t})=>Ni.setHSL(t.length*.17%1,.7,.5)},pure:{background:16777215,fx:["sao"],shadow:!1,material:new u2,lights:[new Ea(0,.5)],cameraLights:[new os(16777215,1)],color:({word:t})=>Ni.setHSL(t.length*.03%1,.75,.7)},transcendent:{background:16777215,fx:["godray"],shadow:!1,material:new yo,color:()=>Ni.set(0)},glass:{background:Ga,env:Ga,shadow:!1,material:new n0({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new y2,new p2],color:()=>Ni.set(11184810)},wireframe:{background:0,shadow:!1,material:new yo({wireframe:!0}),lights:[],color:({word:t})=>Ni.setHSL(t.length*.17%1,.5,.5)}},I2={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},O2={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new X}},vertexShader:`

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

		}`},N2={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},U2={uniforms:{vSunPositionScreenSpace:{value:new X},fAspect:{value:1},sunColor:{value:new Ze(16772608)},bgColor:{value:new Ze(0)}},vertexShader:`

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

		}`};class k2 extends Wr{constructor(e,n,i={}){super(),this.scene=e,this.camera=n,this.orthoScene=new n_,this.orthoCamera=new Wc(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new Rt,this.sunPosition=i.sunPosition||new X(0,1e3,1e3),this.screenSpacePosition=new X,this.rtTextureDepth=new en(1,1),this.rtTextureDepthMask=new en(1,1),this.rtTextureGodRays1=new en(1,1),this.rtTextureGodRays2=new en(1,1),this.materialDepth=new Fr;const r=I2;this.godrayMaskUniforms=zn.clone(r.uniforms),this.materialGodraysDepthMask=new Lt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=O2;this.godrayGenUniforms=zn.clone(o.uniforms),this.materialGodraysGenerate=new Lt({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const l=N2;this.godrayCombineUniforms=zn.clone(l.uniforms),this.materialGodraysCombine=new Lt({uniforms:this.godrayCombineUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader});const a=U2;this.godraysFakeSunUniforms=zn.clone(a.uniforms),this.materialGodraysFakeSun=new Lt({uniforms:this.godraysFakeSunUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Bn(new bl(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,n,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=n,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,n,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(n),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,n){this.rtTextureDepth.setSize(e,n),this.rtTextureDepthMask.setSize(e,n);const i=e*this.multiplier,r=n*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var a_=`/* BEGIN HEADER */
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
    float vid = float(gl_VertexID);
    float h = floor(vid / (radial + 1.)) / (segments);
    float r = mod(vid, radial + 1.) / (radial);

    pos = mix(instancePosition, instanceTarget, h);

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

    next = mix(instancePosition, instanceTarget, h + .001);

  
  

  
  

  
  
  
  
  
  

  
    pos = xnormalize(pos);
    next = xnormalize(next);

    vec3 p = xproject(pos);
    vec3 n = xproject(next);

    vec3 k = normalize(n - p); 

  
    vec3 u = cross(n, p);
    if(len(u) < .000001) {
      u = p + vec3(n.y, 0, n.z);
    }
    u = normalize(u);
    vec3 v = normalize(cross(u, k));

    norm = v * cos(r * TAU) + cross(v, k) * sin(r * TAU);
    norm = normalize(norm);
    sizeFactor = .001 * edgeThickness;
  } else {
    pos = instancePosition;
    norm = normal;
    sizeFactor = .001 * vertexThickness;
  }
  
  vec3 transformed = xproject(pos);
  transformed += sizeFactor * norm / max(1., len(pos));

  
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}`,z2=`/* BEGIN INCLUDE */

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
  return v.xyz / v.w;
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
  return xproject(v.v / v.u);
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
  float nr = (v.u.y * fov6 - curvature);
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 1 
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 2 
  return xproject(vec5(v.v / v.u.y, v.u.x / v.u.y));
  #elif PROJECTION == 3 
  float nr = (v.u.y * fov6 - curvature);
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
  float nr = (v.u.y * fov7 - curvature);
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 1 
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 2 
  return xproject(vec6(v.v / v.u.z, v.u.xy / v.u.z);
  #elif PROJECTION == 3 
  float nr = (v.u.y * fov7 - curvature);
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
  float nr = (v.u.y * fov8 - curvature);
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 1 
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 2 
  return xproject(vec7(v.v / v.u.w, v.u.xyz / v.u.w));
  #elif PROJECTION == 3 
  float nr = (v.u.y * fov8 - curvature);
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
  float nr = (v.u.y * fov9 - curvature);
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 1 
  return xproject(vec8(v.v, v.u.xyz));
  #elif PROJECTION == 2 
  return xproject(vec8(v.v / v.u.w, v.u / v.u.w));
  #elif PROJECTION == 3 
  float nr = (v.u.y * fov9 - curvature);
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
/* END INCLUDE */`;const F2=a_.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],d0=a_.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],B2=z2.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],ci=(t,e)=>{t=t.clone(),t.vertexColors=![Fr,Lt,i_,fl].find(n=>t instanceof n),t._rt=e,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let n=4;n<=e.dimensions;n++)t.uniforms[`fov${n}`]={value:90};return t.onBeforeCompile=n=>{const{dimensions:i,projection:r}=t._rt,o=[`#define DIMENSIONS ${i}`,`#define PROJECTION ${s_.indexOf(r)}`];console.log(r),Object.assign(n.uniforms,t.uniforms),t instanceof yo?n.vertexShader=n.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof Fr||t instanceof fl?n.vertexShader=n.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof Lt&&(n.vertexShader=n.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",d0+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),n.vertexShader=[...o,F2,B2,n.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",d0)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}`,t},V2=()=>{const t=new t_;t.autoClear=!1,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const e=new kn(90,window.innerWidth/window.innerHeight,.01,100);e.position.set(0,0,-1),e.up.set(0,1,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const n=new n_;e.updateProjectionMatrix(),n.add(e);const i=new _2(e,t.domElement);i.target.set(0,0,0),i.minDistance=0,i.maxDistance=100,i.addEventListener("change",()=>r.render()),i.update(),i.enabled=!1,t.domElement.addEventListener("dblclick",()=>{i.position0.set(0,0,i.position0.z===-1?-.25:-1,0,0),i.reset()});const r=new E2(t);r.setPixelRatio(window.devicePixelRatio);const o=new T2(n,e);return r.addPass(o),{composer:r,camera:e,scene:n,orbitControls:i}},h0=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=$s[t.ambiance],{dimensions:i}=t,r=new Xc(1e-7,32,32);r.attributes.position.array.fill(0);const o=new o_().copy(r),l=i>4?9:i;o.setAttribute("instancePosition",new Ds(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceTarget",new Ds(new Float32Array(t.maxVertices*l),l)),o.setAttribute("instanceColor",new Ds(new Float32Array(t.maxVertices*3),3));const a=new Bn(o,ci(n.material,t));o.attributes.instanceTarget.array.fill(NaN),a.geometry.instanceCount=0,a.frustumCulled=!1,a.customDepthMaterial=ci(new Fr({depthPacking:xl}),t),a.customDistanceMaterial=ci(new fl,t),a.castShadow=n.shadow,a.name="instanced-vertex",a.visible=t.showVertices,t.scene.add(a)},p0=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose());const n=$s[t.ambiance],{dimensions:i,curve:r,segments:o}=t,l=new Fp(0,0,1,8,r?o:1,!0),a=new o_().copy(l),d=i>4?9:i;a.setAttribute("instancePosition",new Ds(new Float32Array(t.maxEdges*d),d)),a.setAttribute("instanceTarget",new Ds(new Float32Array(t.maxEdges*d),d)),a.setAttribute("instanceColor",new Ds(new Float32Array(t.maxEdges*3),3));const h=new Bn(a,ci(n.material,t));h.geometry.instanceCount=0,h.frustumCulled=!1,h.customDepthMaterial=ci(new Fr({depthPacking:xl}),t),h.customDistanceMaterial=ci(new fl,t),h.castShadow=n.shadow,h.name="instanced-edge",h.visible=t.showEdges,t.scene.add(h)},G2=(t,e=null)=>{const n=$s[t.ambiance],i=t.scene.getObjectByName("instanced-vertex"),{dimensions:r}=t;let o=e?e[0]:0,l=e?e[1]:t.vertices.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=t.vertices[d],v=i.geometry.attributes.instancePosition.array;for(let x=0;x<r;x++)v[d*a+x]=h.vertex[x];const g=i.geometry.attributes.instanceColor.array,y=n.color(h,"vertex");g[d*3+0]=y.r,g[d*3+1]=y.g,g[d*3+2]=y.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},H2=(t,e=null)=>{const n=$s[t.ambiance],i=t.scene.getObjectByName("instanced-edge"),{dimensions:r}=t;let o=e?e[0]:0,l=e?e[1]:t.edges.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const h=t.edges[d],v=i.geometry.attributes.instancePosition.array;for(let E=0;E<r;E++)v[d*a+E]=h.start[E];const g=i.geometry.attributes.instanceTarget.array;for(let E=0;E<r;E++)g[d*a+E]=h.end[E];const y=i.geometry.attributes.instanceColor.array,x=n.color(h,"edge");y[d*3+0]=x.r,y[d*3+1]=x.g,y[d*3+2]=x.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},m0=(t,e)=>{const n=t.scene.getObjectByName(`instanced-${e}`);n.visible=t[e==="vertex"?"showVertices":"showEdges"]},_s=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const n=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]]};t.scene.getObjectByName("instanced-vertex").visible&&G2(t,n.vertices),t.scene.getObjectByName("instanced-edge").visible&&H2(t,n.edges),t.composer.render(),document.title=`Honeyball^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges`},W2=(t,e,n)=>{e.fov=n,e.updateProjectionMatrix(),t.render()},j2=(t,e,n)=>{const i=t.renderer.getDrawingBufferSize(new Ne),r=new en(i.width,i.height,{samples:e?n:0});t.reset(r),t.render()},X2=t=>{const e=$s[t.ambiance],{scene:n,composer:i,camera:r}=t,o=t.scene.getObjectByName("instanced-vertex"),l=t.scene.getObjectByName("instanced-edge");o.material=ci(e.material,t),l.material=ci(e.material,t),e.env?n.environment=e.env:n.environment=null,typeof e.background!="number"?n.background=e.background:(n.background=null,i.renderer.setClearColor(new Ze(e.background),1));const a=[];n.traverse(g=>{g.isLight&&a.push(g)}),a.forEach(g=>{g.parent.remove(g)});let d=n.getObjectByName("ground");d&&(d.geometry.dispose(),d.material.dispose(),n.remove(d)),e.shadow&&(i.renderer.shadowMap.type=Op,e.ground==="sphere"?d=new Bn(new Xc(20,32,32),new xs({color:16777215,side:Rn,depthWrite:!1})):e.ground==="plane"&&(d=new Bn(new bl(1e3,1e3),new xs({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),d.rotation.x=-Math.PI/2,d.position.y=-3),d.name="ground",d.receiveShadow=!0,n.add(d)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=Dx,o.castShadow=e.shadow,l.castShadow=e.shadow;const h=e.shadow?g=>{g.shadow&&(g.castShadow=!0,g.shadow.mapSize.width=2048,g.shadow.mapSize.height=2048,g.shadow.camera.near=r.near,g.shadow.camera.far=r.far,g.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(g=>{h(g),n.add(g)}),(e.cameraLights||[]).forEach(g=>{h(g),r.add(g)});const v=e.fx||["copy"];i.renderer.toneMapping=v.includes("bloom")?Nx:Gi,i.renderer.toneMappingExposure=v.includes("bloom")?1.5:1,i.passes.slice(1).forEach(g=>{i.removePass(g),g.dispose()}),v.forEach(g=>{if(g==="copy")i.addPass(i.copyPass);else if(g==="sao"){const y=new kh(n,r,!1,!0);y.depthMaterial=ci(y.depthMaterial,t),y.normalMaterial=ci(y.normalMaterial,t),y.params.output=kh.OUTPUT.Default,y.params.saoIntensity=.1,y.params.saoScale=10,y.params.saoKernelRadius=10,y.params.saoMinResolution=0,y.params.saoBlur=!0,y.params.saoBlurRadius=8,y.params.saoBlurStdDev=4,y.params.saoBlurDepthCutoff=.01,i.addPass(y)}else if(g==="bokeh"){const y=new w2(n,r,{focus:.5,aperture:.005,maxblur:.005});y.materialDepth=ci(y.materialDepth,t),i.addPass(y)}else if(g==="sobel"){const y=new Uh(A2);i.addPass(y);const x=new Uh(D2);x.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,x.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(x)}else if(g==="bloom"){const y=new Gs(new Ne(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(y)}else if(g==="godray"){const y=new k2(n,r);y.materialDepth=ci(y.materialDepth,t),i.addPass(y)}}),l_(t),i.render()},l_=t=>{const{composer:e,scene:n,dimensions:i,curvature:r,projection:o,vertexThickness:l,edgeThickness:a}=t,d=t.curve?t.segments:1,h=n.getObjectByName("instanced-vertex"),v=n.getObjectByName("instanced-edge"),g=y=>{if(y!=null&&y._rt){y.uniforms.curvature.value=r,y.uniforms.vertexThickness.value=l,y.uniforms.edgeThickness.value=a,y.needsUpdate=i!==y._rt.dimensions||o!==y._rt.projection,y._rt=t,y.uniforms.segments.value=d;for(let x=4;x<=i;x++)y.uniforms[`fov${x}`]||(y.uniforms[`fov${x}`]={value:1}),y.uniforms[`fov${x}`].value=fw(L2(t[`fov${x}`])*.5)}};g(h.material),g(v.material),e.passes.forEach(y=>Object.values(y).filter(x=>x==null?void 0:x.isMaterial).forEach(x=>g(x))),g(h.customDepthMaterial),g(h.customDistanceMaterial),g(v.customDepthMaterial),g(v.customDistanceMaterial)},ao=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];$u(o,t,i)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];$u(o,t,i),$u(l,t,i)}},dl=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Yf(o,t)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];Yf(o,t),Yf(l,t)}},hl=(t,e,n,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Kf(o,t,i)}for(let r=0;r<n.length;r++){const{start:o,end:l}=n[r];Kf(o,t,i),Kf(l,t,i)}},q2=(t,e,n,i,r,o)=>{const l=window.innerWidth/2,a=window.innerHeight/2,d=Math.min(l,a)*.9;if(t.ctrlKey)dl(-t.dx/(2*d),n,i),hl(-t.dy/(2*d),n,i,r);else{const h=-t.dx/l,v=-t.dy/a,g=new Array(e).fill(0);!o&&t.shiftKey?o=1:!o&&t.altKey?o=2:!o&&t.ctrKey?o=3:!o&&t.metaKey&&(o=4),g[o*2]=h,g[o*2+1]=v,ao(g,n,i,r)}},$2=(t,e,n,i,r)=>{dl(sl*t.da/180,e,n),hl(t.ds,e,n,i)},Y2=(t,e,n,i)=>{const{code:r}=t;if(t.target!==document.body)return;const o=.01;if(r==="ArrowLeft"||r==="KeyA")ao([-o,0,0,0],e,n,i);else if(r==="ArrowRight"||r==="KeyD")ao([o,0,0,0],e,n,i);else if(r==="ArrowUp"||r==="KeyW")ao([0,0,-o,0],e,n,i);else if(r==="ArrowDown"||r==="KeyS")ao([0,0,o,0],e,n,i);else if(r==="PageUp"||r==="KeyQ")ao([0,-o,0,0],e,n,i);else if(r==="PageDown"||r==="KeyE")ao([0,o,0,0],e,n,i);else if(r==="Digit1")dl(-(sl*5)/180,e,n);else if(r==="Digit3")dl(sl*5/180,e,n);else if(r==="KeyZ")hl(-o,e,n,i);else if(r==="KeyC")hl(o,e,n,i);else return;return!0},K2=(t,e,n,i,r)=>{const o=window.innerWidth/2,l=window.innerHeight/2,a=Math.min(o,l)*.9,d=10*(t.deltaMode===1?t.deltaY*10:t.deltaY)/a;t.shiftKey===!!r?dl(sl*d/180,e,n):hl(-d/100,e,n,i)},Z2=t=>{st.useLayoutEffect(()=>{const e=uw(t.composer.renderer.domElement).draggable({listeners:{move:n=>{t.controls==="free"&&(q2(n,t.dimensions,t.vertices,t.edges,t.curvature,t.controlsShift),_s(t))}}}).gesturable({onmove:n=>{t.controls==="free"&&($2(n,t.vertices,t.edges,t.curvature,t.controlsShift),_s(t))}});return()=>{e.unset()}},[t]),st.useEffect(()=>{const e=n=>{t.controls!=="orbit"&&(K2(n,t.vertices,t.edges,t.curvature,t.controlsShift),_s(t))};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e)},[t]),st.useEffect(()=>{const e=n=>{Y2(n,t.vertices,t.edges,t.curvature,t.controlsShift)&&_s(t)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])};function Q2(){return new Worker(""+new URL("tiling.worker-d56b4ef6.js",import.meta.url).href)}function J2(){return new Worker(""+new URL("group.worker-e23f2590.js",import.meta.url).href)}let u_=class c_{constructor(e,n){this.workerClass=n,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=c_.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((n,i)=>{const r=l=>{if(l.data.uuid!==e.uuid)return;const a=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${a}ms`),this.processing--,this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),l.data.error){i(l.data.error);return}n(l.data)},o=l=>{this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=Tx(0,this.processing),console.error(`Can't call web worker ${this.name}`,l))};this.worker.addEventListener("message",r),this.worker.addEventListener("error",o)})}};const f_=new u_("tiler",Q2),d_=new u_("grouper",J2),eA=(t,e,n,i)=>{st.useEffect(()=>{e(r=>r.order<r.currentOrder?{...r,currentOrder:r.order}:r)},[t.order,t.currentOrder,e]),st.useEffect(()=>{var r;if(!(t.order<=t.currentOrder)){if((r=t.ranges)!=null&&r[t.order]){e(o=>({...o,currentOrder:o.order}));return}(async()=>{i(null),n(!0);const o={};if(t.currentOrder===0){try{o.rules=await d_.process({dimensions:t.dimensions,coxeter:t.coxeter})}catch(a){console.warn(a)}const l=t.coxeter.map((a,d)=>a.map((h,v)=>-Ex((t.stellated?t.stellation[d][v]:1)*sl/h)));o.curvature=pw(l),o.mirrorsPlanes=gw(l,o.curvature),o.rootVertex=yw(t.mirrors,o.mirrorsPlanes,o.curvature),o.ranges=[]}try{const l={...t,...o},{vertices:a,edges:d}=await f_.process({first:l.currentOrder===0,curvature:l.curvature,rules:l.currentOrder===0?l.rules.rules:null,mirrorsPlanes:l.mirrorsPlanes,rootVertex:l.rootVertex,dimensions:l.dimensions});e(h=>({...h,...l,ranges:[...h.ranges,{vertices:[h.vertices.length,h.vertices.length+a.length],edges:[h.edges.length,h.edges.length+d.length]}],vertices:h.vertices.concat(a),edges:h.edges.concat(d),currentOrder:h.currentOrder+1}))}catch(l){i(l),console.warn(l),e(a=>({...a,currentOrder:a.order}))}finally{n(!1)}})()}},[e,n,i,t.order,t.currentOrder,t.dimensions,t.coxeter,t.mirrors,t.stellated,t.stellation]),st.useEffect(()=>{e(r=>r.vertices.length>r.maxVertices?{...r,maxVertices:r.vertices.length}:r)},[t.vertices,e]),st.useEffect(()=>{e(r=>r.edges.length>r.maxEdges?{...r,maxEdges:r.edges.length}:r)},[t.edges,e])},tA=t=>{const{camera:e,composer:n}=t,i=1,r=window.innerWidth*i,o=window.innerHeight*i,l=n.renderer.domElement;if(l.width!==r||l.height!==o){e.aspect=r/o,e.zoom=Math.min(1,r/o),e.updateProjectionMatrix(),n.renderer.setSize(r,o),n.setSize(r,o);const a=n.renderer.getPixelRatio();n.setPixelRatio(a);const d=r*a,h=o*a;n.passes.forEach(v=>{var g,y;if((y=(g=v.material)==null?void 0:g.uniforms)!=null&&y.resolution){let x=d,E=h;v.material.uniforms.resolution.value.x<=1&&(x=1/x,E=1/E),v.material.uniforms.resolution.value.x=x,v.material.uniforms.resolution.value.y=E}v.resolution&&(v.resolution=new Ne(r,o))}),l.style.width=r+"px",l.style.height=o+"px"}n.render()},nA=t=>{st.useEffect(()=>{t.orbitControls.enabled=t.controls==="orbit"},[t.controls,t.orbitControls]),st.useEffect(()=>{j2(t.composer,t.msaa,t.msaaSamples)},[t.msaa,t.msaaSamples,t.composer]),st.useEffect(()=>{W2(t.composer,t.camera,t.fov3)},[t.fov3,t.camera,t.composer]),st.useEffect(()=>{h0(t),p0(t)},[t.dimensions,t.curve,t.segments]),st.useEffect(()=>{t.vertices.length&&(console.warn(`Extending vertex buffer to ${t.vertices.length}`),h0(t))},[t.maxVertices]),st.useEffect(()=>{t.edges.length&&(console.warn(`Extending edge buffer to ${t.edges.length}`),p0(t))},[t.maxEdges]),st.useEffect(()=>{X2(t)},[t.ambiance]),st.useEffect(()=>{l_(t),t.composer.render()},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges]),st.useEffect(()=>{m0(t,"vertex"),m0(t,"edge")},[t.showVertices,t.showEdges]),st.useEffect(()=>{_s(t,t.currentOrder-1)},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges]),st.useEffect(()=>{_s(t)},[t.ambiance,t.showVertices,t.showEdges,t.maxVertices,t.maxEdges,t.curve,t.segments]),st.useEffect(()=>{const e=()=>{tA(t)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[t])},Ld=(t,e)=>(t=t||0,e||(e=t,t=0),new Array(e-t).fill().map((n,i)=>i+t));function iA({gl:t,params:e,updateParams:n}){var A;const[i,r]=st.useState(()=>({...e,...t,currentOrder:0,rules:null,curvature:0,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],maxVertices:3e4,maxEdges:5e4}));window.rt=i;const[o,l]=st.useState(!1),[a,d]=st.useState(),[h,v]=st.useState(!0),g=st.useCallback(()=>v(_=>!_),[]),y=st.useCallback(()=>{let _,p;const w=hw(e.dimensions/2)-1;e.controls==="orbit"?(_="free",p=0):e.controlsShift>=w?(_="orbit",p=0):(_="free",p=e.controlsShift+1),n({controls:_,controlsShift:p})},[e.controls,e.controlsShift,e.dimensions,n]);st.useEffect(()=>{r(_=>({..._,order:e.order,controls:e.controls,controlsShift:e.controlsShift,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,curve:e.curve,segments:e.segments,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellated:e.stellated,stellation:e.stellation}))},[e.order,e.ambiance,e.controls,e.controlsShift,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.showEdges,e.showVertices,e.stellated,e.stellation,e.vertexThickness]),st.useEffect(()=>{r(_=>!e.dimensions||e.coxeter.find(p=>p.find(w=>!w))||e.stellation.find(p=>p.find(w=>!w))?_:{..._,currentOrder:0,rules:null,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[]})},[e.dimensions,e.coxeter,e.mirrors,e.stellated,e.stellation]),st.useEffect(()=>{d_.kill(),f_.kill(),l(!1)},[i.dimensions,i.coxeter,i.stellated,i.mirrors,i.stellation]),eA(i,r,l,d),nA(i),Z2(i);const x=st.useCallback(()=>{const _={extended:!e.extended};if(!e.extended)for(let p=0;p<e.dimensions;p++)for(let w=0;w<p-1;w++)e.coxeter[p][w]=2,e.coxeter[w][p]=2;n(_)},[e.extended,e.dimensions,e.coxeter,n]),E=st.useCallback(_=>{let{name:p,checked:w,type:b,value:P}=_.target;b==="checkbox"?P=w:b==="number"&&P&&!isNaN(P)&&(P=+P,_.target.min&&(P=Tx(P,+_.target.min)),_.target.max&&(P=Vv(P,+_.target.max)),_.target.step&&(P=dw(P/+_.target.step)*+_.target.step));const D={};if(p==="dimensions"&&P){D.coxeter=new Array(P).fill().map(()=>new Array(P).fill(2)),D.stellation=new Array(P).fill().map(()=>new Array(P).fill(1)),D.mirrors=new Array(P).fill(0);for(let O=0;O<Vv(e.coxeter.length,P);O++){for(let B=0;B<O;B++)D.coxeter[O][B]=e.coxeter[O][B],D.coxeter[B][O]=e.coxeter[B][O];D.mirrors[O]=e.mirrors[O]}for(let O=0;O<P;O++)D.coxeter[O][O]=-1;for(let O=4;O<=P;O++)e[`fov${O}`]||(D[`fov${O}`]=O===4?90:45)}if(p.startsWith("coxeter")){const[O,B]=p.split("-").slice(1).map(R=>+R),k=e.coxeter.map(R=>R.slice());k[O][B]=P,k[B][O]=P,p="coxeter",P=k}if(p.startsWith("div")){const[O,B]=p.split("-").slice(1).map(R=>+R),k=e.stellation.map(R=>R.slice());k[O][B]=P,k[B][O]=P,p="stellation",P=k}if(p.startsWith("mirror")){const[O]=p.split("-").slice(1).map(B=>+B);p="mirrors",P=e.mirrors.map((B,k)=>(k===O?P:B)?1:0),P.reduce((B,k)=>B+k,0)===0&&(P[0]=1)}D[p]=P,n(D)},[e,n]);return He.jsxs("div",{className:[a?"error":"",(A=i.rules)!=null&&A.warn?"warning":""].filter(_=>_).join(" "),title:a,children:[He.jsxs("button",{className:"control-indicator",onClick:y,children:[i.controls==="orbit"?"⇹":"↭",i.controls==="free"?He.jsx("sup",{children:i.controlsShift+1}):null]}),He.jsxs("button",{className:`space-indicator${o?" processing":""}`,onClick:g,children:[i.curvature===0?"𝔼":i.curvature>0?"𝕊":"ℍ",He.jsx("sup",{children:i.dimensions-1}),i.currentOrder<i.order?He.jsxs("sub",{children:[i.currentOrder,"/",i.order]}):null]}),h&&He.jsxs("aside",{className:"controls",children:[He.jsxs("label",{children:["Order",He.jsx("input",{type:"number",name:"order",min:"1",step:"1",value:e.order,onChange:E})]}),He.jsxs("label",{children:["Segments",He.jsx("input",{type:"checkbox",name:"curve",checked:e.curve,onChange:E}),e.curve?He.jsx("input",{type:"number",name:"segments",min:"1",step:"1",value:e.segments,onChange:E}):null]}),He.jsxs("label",{children:["Dimensions",He.jsx("input",{type:"number",name:"dimensions",min:"2",max:"9",step:"1",value:e.dimensions,onChange:E})]}),He.jsxs("label",{children:["Projection",He.jsx("select",{name:"projection",value:e.projection,onChange:E,children:s_.map(_=>He.jsx("option",{value:_,children:_.replace(/_/g," ").replace(/./,p=>p.toUpperCase())},_))})]}),He.jsxs("label",{children:["Vertices",He.jsx("input",{type:"checkbox",name:"showVertices",checked:e.showVertices,onChange:E}),e.showVertices?He.jsx("input",{type:"number",name:"vertexThickness",min:"0",step:"1",value:e.vertexThickness,onChange:E}):null]}),He.jsxs("label",{children:["Edges",He.jsx("input",{type:"checkbox",name:"showEdges",checked:e.showEdges,onChange:E}),e.showEdges?He.jsx("input",{type:"number",name:"edgeThickness",min:"0",step:"1",value:e.edgeThickness,onChange:E}):null]}),He.jsxs("label",{children:[He.jsx("input",{type:"checkbox",name:"stellated",checked:e.stellated,onChange:E}),"Stellated"]}),He.jsxs("label",{children:["Ambiance",He.jsx("select",{name:"ambiance",value:e.ambiance,onChange:E,children:Object.keys($s).map(_=>He.jsx("option",{value:_,children:_.replace(/_/g," ").replace(/./,p=>p.toUpperCase())},_))})]})]}),h&&He.jsxs("aside",{className:"view",children:[He.jsxs("label",{children:["MSAA",He.jsx("input",{type:"checkbox",name:"msaa",checked:e.msaa,onChange:E}),e.msaa?He.jsx("input",{type:"number",name:"msaaSamples",min:"0",step:"1",value:e.msaaSamples,onChange:E}):null]}),He.jsxs("label",{children:["FOV3",He.jsx("input",{type:"number",name:"fov3",min:"0",step:"1",value:e.fov3,onChange:E})]}),e.dimensions>3?Ld(e.dimensions-3).map(_=>He.jsxs("label",{children:["FOV",_+4,He.jsx("input",{type:"number",name:`fov${_+4}`,step:"1",value:e[`fov${_+4}`],onChange:E})]},_)):null]}),h&&He.jsxs("aside",{className:"coxeters",children:[Ld(e.dimensions).map(_=>He.jsxs(st.Fragment,{children:[_>0&&He.jsx("div",{className:"number",children:Ld(_).map(p=>(e.extended||_===p+1)&&He.jsxs("label",{children:[He.jsx("input",{type:"number",name:`coxeter-${_}-${p}`,min:"2",step:"1",value:e.coxeter[_][p],onChange:E}),e.stellated&&He.jsxs("div",{className:"stellation",children:[He.jsx("span",{className:"divisor",children:" / "}),He.jsx("input",{type:"number",name:`div-${_}-${p}`,min:"1",step:"1",value:e.stellation[_][p],onChange:E})]})]},p))}),He.jsxs("label",{className:"mirror",children:[_>0&&He.jsx("span",{className:"coxeter",children:"——"}),He.jsx("input",{type:"checkbox",name:`mirror-${_}`,checked:!!e.mirrors[_],onChange:E}),_<e.dimensions-1&&He.jsx("span",{className:"coxeter",children:"——"})]})]},_)),He.jsx("button",{className:"extend",onClick:x,children:e.extended?"▲":"▼"})]})]})}const h_=V2();Object.assign(window,h_);const rA={dimensions:4,coxeter:[[-1,5,2,2],[5,-1,3,2],[2,3,-1,4],[2,2,4,-1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],mirrors:[1,0,0,0],extended:!1,stellated:!1,order:10,segments:32,curve:!0,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,projection:"stereographic",controls:"orbit",controlsShift:0,ambiance:"neon",fov3:90,fov4:90,msaa:window.devicePixelRatio<=1,msaaSamples:8},v0=(t=null)=>{const{location:e}=window;if(e.hash)try{return JSON.parse(atob(e.hash.slice(1)))}catch(n){console.warn(n),e.hash=""}return t},oA=t=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(t)))},sA=()=>{const[t,e]=st.useState(v0(rA)),n=st.useCallback(()=>{const r=v0();r&&e(r)},[]),i=st.useCallback(r=>{const o={...t,...r};e(o),!(!o.dimensions||o.coxeter.find(l=>l.find(a=>!a))||o.stellation.find(l=>l.find(a=>!a))||o.curve&&!o.segments||o.showVertices&&!o.vertexThickness||o.showEdges&&!o.edgeThickness||o.msaa&&!o.msaaSamples||!o.order)&&oA(o)},[t]);return st.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),He.jsx(iA,{gl:h_,params:t,updateParams:i})};Id.createRoot(document.getElementById("root")).render(He.jsx(sA,{}));
