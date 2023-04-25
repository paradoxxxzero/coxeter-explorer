(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function NS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var He={},US={get exports(){return He},set exports(n){He=n}},Ec={},st={},kS={get exports(){return st},set exports(n){st=n}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),zS=Symbol.for("react.portal"),FS=Symbol.for("react.fragment"),BS=Symbol.for("react.strict_mode"),VS=Symbol.for("react.profiler"),GS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),WS=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),XS=Symbol.for("react.memo"),qS=Symbol.for("react.lazy"),Im=Symbol.iterator;function $S(n){return n===null||typeof n!="object"?null:(n=Im&&n[Im]||n["@@iterator"],typeof n=="function"?n:null)}var x0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,S0={};function Hs(n,e,t){this.props=n,this.context=e,this.refs=S0,this.updater=t||x0}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Hs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function M0(){}M0.prototype=Hs.prototype;function Fh(n,e,t){this.props=n,this.context=e,this.refs=S0,this.updater=t||x0}var Bh=Fh.prototype=new M0;Bh.constructor=Fh;_0(Bh,Hs.prototype);Bh.isPureReactComponent=!0;var Om=Array.isArray,w0=Object.prototype.hasOwnProperty,Vh={current:null},b0={key:!0,ref:!0,__self:!0,__source:!0};function E0(n,e,t){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)w0.call(e,i)&&!b0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var d=Array(a),p=0;p<a;p++)d[p]=arguments[p+2];r.children=d}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ml,type:n,key:o,ref:l,props:r,_owner:Vh.current}}function YS(n,e){return{$$typeof:ml,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ml}function KS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Nm=/\/+/g;function bf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?KS(""+n.key):e.toString(36)}function ku(n,e,t,i,r){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var l=!1;if(n===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case ml:case zS:l=!0}}if(l)return l=n,r=r(l),n=i===""?"."+bf(l,0):i,Om(r)?(t="",n!=null&&(t=n.replace(Nm,"$&/")+"/"),ku(r,e,t,"",function(p){return p})):r!=null&&(Gh(r)&&(r=YS(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Nm,"$&/")+"/")+n)),e.push(r)),1;if(l=0,i=i===""?".":i+":",Om(n))for(var a=0;a<n.length;a++){o=n[a];var d=i+bf(o,a);l+=ku(o,e,t,d,r)}else if(d=$S(n),typeof d=="function")for(n=d.call(n),a=0;!(o=n.next()).done;)o=o.value,d=i+bf(o,a++),l+=ku(o,e,t,d,r);else if(o==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Zl(n,e,t){if(n==null)return n;var i=[],r=0;return ku(n,i,"","",function(o){return e.call(t,o,r++)}),i}function ZS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var In={current:null},zu={transition:null},QS={ReactCurrentDispatcher:In,ReactCurrentBatchConfig:zu,ReactCurrentOwner:Vh};ct.Children={map:Zl,forEach:function(n,e,t){Zl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Zl(n,function(){e++}),e},toArray:function(n){return Zl(n,function(e){return e})||[]},only:function(n){if(!Gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ct.Component=Hs;ct.Fragment=FS;ct.Profiler=VS;ct.PureComponent=Fh;ct.StrictMode=BS;ct.Suspense=jS;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QS;ct.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=_0({},n.props),r=n.key,o=n.ref,l=n._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Vh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(d in e)w0.call(e,d)&&!b0.hasOwnProperty(d)&&(i[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)i.children=t;else if(1<d){a=Array(d);for(var p=0;p<d;p++)a[p]=arguments[p+2];i.children=a}return{$$typeof:ml,type:n.type,key:r,ref:o,props:i,_owner:l}};ct.createContext=function(n){return n={$$typeof:HS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:GS,_context:n},n.Consumer=n};ct.createElement=E0;ct.createFactory=function(n){var e=E0.bind(null,n);return e.type=n,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(n){return{$$typeof:WS,render:n}};ct.isValidElement=Gh;ct.lazy=function(n){return{$$typeof:qS,_payload:{_status:-1,_result:n},_init:ZS}};ct.memo=function(n,e){return{$$typeof:XS,type:n,compare:e===void 0?null:e}};ct.startTransition=function(n){var e=zu.transition;zu.transition={};try{n()}finally{zu.transition=e}};ct.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ct.useCallback=function(n,e){return In.current.useCallback(n,e)};ct.useContext=function(n){return In.current.useContext(n)};ct.useDebugValue=function(){};ct.useDeferredValue=function(n){return In.current.useDeferredValue(n)};ct.useEffect=function(n,e){return In.current.useEffect(n,e)};ct.useId=function(){return In.current.useId()};ct.useImperativeHandle=function(n,e,t){return In.current.useImperativeHandle(n,e,t)};ct.useInsertionEffect=function(n,e){return In.current.useInsertionEffect(n,e)};ct.useLayoutEffect=function(n,e){return In.current.useLayoutEffect(n,e)};ct.useMemo=function(n,e){return In.current.useMemo(n,e)};ct.useReducer=function(n,e,t){return In.current.useReducer(n,e,t)};ct.useRef=function(n){return In.current.useRef(n)};ct.useState=function(n){return In.current.useState(n)};ct.useSyncExternalStore=function(n,e,t){return In.current.useSyncExternalStore(n,e,t)};ct.useTransition=function(){return In.current.useTransition()};ct.version="18.2.0";(function(n){n.exports=ct})(kS);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=st,eM=Symbol.for("react.element"),tM=Symbol.for("react.fragment"),nM=Object.prototype.hasOwnProperty,iM=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rM={key:!0,ref:!0,__self:!0,__source:!0};function T0(n,e,t){var i,r={},o=null,l=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)nM.call(e,i)&&!rM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:eM,type:n,key:o,ref:l,props:r,_owner:iM.current}}Ec.Fragment=tM;Ec.jsx=T0;Ec.jsxs=T0;(function(n){n.exports=Ec})(US);var Od={},Nd={},oM={get exports(){return Nd},set exports(n){Nd=n}},ei={},Ud={},sM={get exports(){return Ud},set exports(n){Ud=n}},C0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(j,J){var re=j.length;j.push(J);e:for(;0<re;){var Te=re-1>>>1,ve=j[Te];if(0<r(ve,J))j[Te]=J,j[re]=ve,re=Te;else break e}}function t(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var J=j[0],re=j.pop();if(re!==J){j[0]=re;e:for(var Te=0,ve=j.length,oe=ve>>>1;Te<oe;){var q=2*(Te+1)-1,we=j[q],Me=q+1,te=j[Me];if(0>r(we,re))Me<ve&&0>r(te,we)?(j[Te]=te,j[Me]=re,Te=Me):(j[Te]=we,j[q]=re,Te=q);else if(Me<ve&&0>r(te,re))j[Te]=te,j[Me]=re,Te=Me;else break e}}return J}function r(j,J){var re=j.sortIndex-J.sortIndex;return re!==0?re:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();n.unstable_now=function(){return l.now()-a}}var d=[],p=[],m=1,g=null,y=3,_=!1,E=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var J=t(p);J!==null;){if(J.callback===null)i(p);else if(J.startTime<=j)i(p),J.sortIndex=J.expirationTime,e(d,J);else break;J=t(p)}}function P(j){if(A=!1,b(j),!E)if(t(d)!==null)E=!0,fe(D);else{var J=t(p);J!==null&&me(P,J.startTime-j)}}function D(j,J){E=!1,A&&(A=!1,h(k),k=-1),_=!0;var re=y;try{for(b(J),g=t(d);g!==null&&(!(g.expirationTime>J)||j&&!se());){var Te=g.callback;if(typeof Te=="function"){g.callback=null,y=g.priorityLevel;var ve=Te(g.expirationTime<=J);J=n.unstable_now(),typeof ve=="function"?g.callback=ve:g===t(d)&&i(d),b(J)}else i(d);g=t(d)}if(g!==null)var oe=!0;else{var q=t(p);q!==null&&me(P,q.startTime-J),oe=!1}return oe}finally{g=null,y=re,_=!1}}var O=!1,B=null,k=-1,R=5,N=-1;function se(){return!(n.unstable_now()-N<R)}function ue(){if(B!==null){var j=n.unstable_now();N=j;var J=!0;try{J=B(!0,j)}finally{J?$():(O=!1,B=null)}}else O=!1}var $;if(typeof S=="function")$=function(){S(ue)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,W=Z.port2;Z.port1.onmessage=ue,$=function(){W.postMessage(null)}}else $=function(){x(ue,0)};function fe(j){B=j,O||(O=!0,$())}function me(j,J){k=x(function(){j(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){E||_||(E=!0,fe(D))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(j){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var re=y;y=J;try{return j()}finally{y=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var re=y;y=j;try{return J()}finally{y=re}},n.unstable_scheduleCallback=function(j,J,re){var Te=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Te+re:Te):re=Te,j){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=re+ve,j={id:m++,callback:J,priorityLevel:j,startTime:re,expirationTime:ve,sortIndex:-1},re>Te?(j.sortIndex=re,e(p,j),t(d)===null&&j===t(p)&&(A?(h(k),k=-1):A=!0,me(P,re-Te))):(j.sortIndex=ve,e(d,j),E||_||(E=!0,fe(D))),j},n.unstable_shouldYield=se,n.unstable_wrapCallback=function(j){var J=y;return function(){var re=y;y=J;try{return j.apply(this,arguments)}finally{y=re}}}})(C0);(function(n){n.exports=C0})(sM);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=st,Jn=Ud;function Se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,Ha={};function Po(n,e){Rs(n,e),Rs(n+"Capture",e)}function Rs(n,e){for(Ha[n]=e,n=0;n<e.length;n++)A0.add(e[n])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kd=Object.prototype.hasOwnProperty,aM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},km={};function lM(n){return kd.call(km,n)?!0:kd.call(Um,n)?!1:aM.test(n)?km[n]=!0:(Um[n]=!0,!1)}function uM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function cM(n,e,t,i){if(e===null||typeof e>"u"||uM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function On(n,e,t,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){gn[n]=new On(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];gn[e]=new On(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){gn[n]=new On(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){gn[n]=new On(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){gn[n]=new On(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){gn[n]=new On(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){gn[n]=new On(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){gn[n]=new On(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){gn[n]=new On(n,5,!1,n.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Wh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Hh,Wh);gn[e]=new On(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Hh,Wh);gn[e]=new On(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Hh,Wh);gn[e]=new On(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){gn[n]=new On(n,1,!1,n.toLowerCase(),null,!1,!1)});gn.xlinkHref=new On("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){gn[n]=new On(n,1,!1,n.toLowerCase(),null,!0,!0)});function jh(n,e,t,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cM(e,t,r,i)&&(t=null),i||r===null?lM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ur=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),L0=Symbol.for("react.offscreen"),zm=Symbol.iterator;function da(n){return n===null||typeof n!="object"?null:(n=zm&&n[zm]||n["@@iterator"],typeof n=="function"?n:null)}var Ft=Object.assign,Ef;function Ta(n){if(Ef===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ef=e&&e[1]||""}return`
`+Ef+n}var Tf=!1;function Cf(n,e){if(!n||Tf)return"";Tf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(p){var i=p}Reflect.construct(n,[],e)}else{try{e.call()}catch(p){i=p}n.call(e.prototype)}else{try{throw Error()}catch(p){i=p}n()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var d=`
`+r[l].replace(" at new "," at ");return n.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",n.displayName)),d}while(1<=l&&0<=a);break}}}finally{Tf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ta(n):""}function fM(n){switch(n.tag){case 5:return Ta(n.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return n=Cf(n.type,!1),n;case 11:return n=Cf(n.type.render,!1),n;case 1:return n=Cf(n.type,!0),n;default:return""}}function Vd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case as:return"Fragment";case ss:return"Portal";case zd:return"Profiler";case Xh:return"StrictMode";case Fd:return"Suspense";case Bd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case R0:return(n.displayName||"Context")+".Consumer";case D0:return(n._context.displayName||"Context")+".Provider";case qh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $h:return e=n.displayName||null,e!==null?e:Vd(n.type)||"Memo";case Sr:e=n._payload,n=n._init;try{return Vd(n(e))}catch{}}return null}function dM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function I0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hM(n){var e=I0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Jl(n){n._valueTracker||(n._valueTracker=hM(n))}function O0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=I0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Zu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Gd(n,e){var t=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Fm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ur(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(n,e){e=e.checked,e!=null&&jh(n,"checked",e,!1)}function Hd(n,e){N0(n,e);var t=Ur(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Wd(n,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Bm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Wd(n,e,t){(e!=="number"||Zu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ca=Array.isArray;function Ss(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ur(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function jd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Se(92));if(Ca(t)){if(1<t.length)throw Error(Se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ur(t)}}function U0(n,e){var t=Ur(e.value),i=Ur(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Gm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function k0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?k0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var eu,z0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Wa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pM=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(n){pM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),La[e]=La[n]})});function F0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||La.hasOwnProperty(n)&&La[n]?(""+e).trim():e+"px"}function B0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=F0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var mM=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(n,e){if(e){if(mM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function $d(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=null;function Yh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Kd=null,Ms=null,ws=null;function Hm(n){if(n=yl(n)){if(typeof Kd!="function")throw Error(Se(280));var e=n.stateNode;e&&(e=Dc(e),Kd(n.stateNode,n.type,e))}}function V0(n){Ms?ws?ws.push(n):ws=[n]:Ms=n}function G0(){if(Ms){var n=Ms,e=ws;if(ws=Ms=null,Hm(n),e)for(n=0;n<e.length;n++)Hm(e[n])}}function H0(n,e){return n(e)}function W0(){}var Pf=!1;function j0(n,e,t){if(Pf)return n(e,t);Pf=!0;try{return H0(n,e,t)}finally{Pf=!1,(Ms!==null||ws!==null)&&(W0(),G0())}}function ja(n,e){var t=n.stateNode;if(t===null)return null;var i=Dc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Se(231,e,typeof t));return t}var Zd=!1;if(or)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Zd=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Zd=!1}function vM(n,e,t,i,r,o,l,a,d){var p=Array.prototype.slice.call(arguments,3);try{e.apply(t,p)}catch(m){this.onError(m)}}var Ia=!1,Qu=null,Ju=!1,Qd=null,gM={onError:function(n){Ia=!0,Qu=n}};function yM(n,e,t,i,r,o,l,a,d){Ia=!1,Qu=null,vM.apply(gM,arguments)}function xM(n,e,t,i,r,o,l,a,d){if(yM.apply(this,arguments),Ia){if(Ia){var p=Qu;Ia=!1,Qu=null}else throw Error(Se(198));Ju||(Ju=!0,Qd=p)}}function Ao(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function X0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(n){if(Ao(n)!==n)throw Error(Se(188))}function _M(n){var e=n.alternate;if(!e){if(e=Ao(n),e===null)throw Error(Se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return Wm(r),n;if(o===i)return Wm(r),e;o=o.sibling}throw Error(Se(188))}if(t.return!==i.return)t=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===t){l=!0,t=r,i=o;break}if(a===i){l=!0,i=r,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,i=r;break}if(a===i){l=!0,i=o,t=r;break}a=a.sibling}if(!l)throw Error(Se(189))}}if(t.alternate!==i)throw Error(Se(190))}if(t.tag!==3)throw Error(Se(188));return t.stateNode.current===t?n:e}function q0(n){return n=_M(n),n!==null?$0(n):null}function $0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$0(n);if(e!==null)return e;n=n.sibling}return null}var Y0=Jn.unstable_scheduleCallback,jm=Jn.unstable_cancelCallback,SM=Jn.unstable_shouldYield,MM=Jn.unstable_requestPaint,Wt=Jn.unstable_now,wM=Jn.unstable_getCurrentPriorityLevel,Kh=Jn.unstable_ImmediatePriority,K0=Jn.unstable_UserBlockingPriority,ec=Jn.unstable_NormalPriority,bM=Jn.unstable_LowPriority,Z0=Jn.unstable_IdlePriority,Tc=null,Bi=null;function EM(n){if(Bi&&typeof Bi.onCommitFiberRoot=="function")try{Bi.onCommitFiberRoot(Tc,n,void 0,(n.current.flags&128)===128)}catch{}}var Ti=Math.clz32?Math.clz32:PM,TM=Math.log,CM=Math.LN2;function PM(n){return n>>>=0,n===0?32:31-(TM(n)/CM|0)|0}var tu=64,nu=4194304;function Pa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,o=n.pingedLanes,l=t&268435455;if(l!==0){var a=l&~r;a!==0?i=Pa(a):(o&=l,o!==0&&(i=Pa(o)))}else l=t&~r,l!==0?i=Pa(l):o!==0&&(i=Pa(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ti(e),r=1<<t,i|=n[t],e&=~r;return i}function AM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,o=n.pendingLanes;0<o;){var l=31-Ti(o),a=1<<l,d=r[l];d===-1?(!(a&t)||a&i)&&(r[l]=AM(a,e)):d<=e&&(n.expiredLanes|=a),o&=~a}}function Jd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Q0(){var n=tu;return tu<<=1,!(tu&4194240)&&(tu=64),n}function Af(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ti(e),n[e]=t}function RM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ti(t),o=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~o}}function Zh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ti(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var xt=0;function J0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ey,Qh,ty,ny,iy,eh=!1,iu=[],Pr=null,Ar=null,Dr=null,Xa=new Map,qa=new Map,wr=[],LM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(n,e){switch(n){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function pa(n,e,t,i,r,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=yl(e),e!==null&&Qh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function IM(n,e,t,i,r){switch(e){case"focusin":return Pr=pa(Pr,n,e,t,i,r),!0;case"dragenter":return Ar=pa(Ar,n,e,t,i,r),!0;case"mouseover":return Dr=pa(Dr,n,e,t,i,r),!0;case"pointerover":var o=r.pointerId;return Xa.set(o,pa(Xa.get(o)||null,n,e,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,qa.set(o,pa(qa.get(o)||null,n,e,t,i,r)),!0}return!1}function ry(n){var e=uo(n.target);if(e!==null){var t=Ao(e);if(t!==null){if(e=t.tag,e===13){if(e=X0(t),e!==null){n.blockedOn=e,iy(n.priority,function(){ty(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=th(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Yd=i,t.target.dispatchEvent(i),Yd=null}else return e=yl(t),e!==null&&Qh(e),n.blockedOn=t,!1;e.shift()}return!0}function qm(n,e,t){Fu(n)&&t.delete(e)}function OM(){eh=!1,Pr!==null&&Fu(Pr)&&(Pr=null),Ar!==null&&Fu(Ar)&&(Ar=null),Dr!==null&&Fu(Dr)&&(Dr=null),Xa.forEach(qm),qa.forEach(qm)}function ma(n,e){n.blockedOn===e&&(n.blockedOn=null,eh||(eh=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,OM)))}function $a(n){function e(r){return ma(r,n)}if(0<iu.length){ma(iu[0],n);for(var t=1;t<iu.length;t++){var i=iu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Pr!==null&&ma(Pr,n),Ar!==null&&ma(Ar,n),Dr!==null&&ma(Dr,n),Xa.forEach(e),qa.forEach(e),t=0;t<wr.length;t++)i=wr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<wr.length&&(t=wr[0],t.blockedOn===null);)ry(t),t.blockedOn===null&&wr.shift()}var bs=ur.ReactCurrentBatchConfig,nc=!0;function NM(n,e,t,i){var r=xt,o=bs.transition;bs.transition=null;try{xt=1,Jh(n,e,t,i)}finally{xt=r,bs.transition=o}}function UM(n,e,t,i){var r=xt,o=bs.transition;bs.transition=null;try{xt=4,Jh(n,e,t,i)}finally{xt=r,bs.transition=o}}function Jh(n,e,t,i){if(nc){var r=th(n,e,t,i);if(r===null)Ff(n,e,i,ic,t),Xm(n,i);else if(IM(r,n,e,t,i))i.stopPropagation();else if(Xm(n,i),e&4&&-1<LM.indexOf(n)){for(;r!==null;){var o=yl(r);if(o!==null&&ey(o),o=th(n,e,t,i),o===null&&Ff(n,e,i,ic,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else Ff(n,e,i,null,t)}}var ic=null;function th(n,e,t,i){if(ic=null,n=Yh(i),n=uo(n),n!==null)if(e=Ao(n),e===null)n=null;else if(t=e.tag,t===13){if(n=X0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ic=n,null}function oy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wM()){case Kh:return 1;case K0:return 4;case ec:case bM:return 16;case Z0:return 536870912;default:return 16}default:return 16}}var Tr=null,ep=null,Bu=null;function sy(){if(Bu)return Bu;var n,e=ep,t=e.length,i,r="value"in Tr?Tr.value:Tr.textContent,o=r.length;for(n=0;n<t&&e[n]===r[n];n++);var l=t-n;for(i=1;i<=l&&e[t-i]===r[o-i];i++);return Bu=r.slice(n,1<i?1-i:void 0)}function Vu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ru(){return!0}function $m(){return!1}function ti(n){function e(t,i,r,o,l){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ru:$m,this.isPropagationStopped=$m,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=ti(Ws),gl=Ft({},Ws,{view:0,detail:0}),kM=ti(gl),Df,Rf,va,Cc=Ft({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(Df=n.screenX-va.screenX,Rf=n.screenY-va.screenY):Rf=Df=0,va=n),Df)},movementY:function(n){return"movementY"in n?n.movementY:Rf}}),Ym=ti(Cc),zM=Ft({},Cc,{dataTransfer:0}),FM=ti(zM),BM=Ft({},gl,{relatedTarget:0}),Lf=ti(BM),VM=Ft({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),GM=ti(VM),HM=Ft({},Ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),WM=ti(HM),jM=Ft({},Ws,{data:0}),Km=ti(jM),XM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$M={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=$M[n])?!!e[n]:!1}function np(){return YM}var KM=Ft({},gl,{key:function(n){if(n.key){var e=XM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Vu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(n){return n.type==="keypress"?Vu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ZM=ti(KM),QM=Ft({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=ti(QM),JM=Ft({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),e1=ti(JM),t1=Ft({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),n1=ti(t1),i1=Ft({},Cc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=ti(i1),o1=[9,13,27,32],ip=or&&"CompositionEvent"in window,Oa=null;or&&"documentMode"in document&&(Oa=document.documentMode);var s1=or&&"TextEvent"in window&&!Oa,ay=or&&(!ip||Oa&&8<Oa&&11>=Oa),Qm=String.fromCharCode(32),Jm=!1;function ly(n,e){switch(n){case"keyup":return o1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function a1(n,e){switch(n){case"compositionend":return uy(e);case"keypress":return e.which!==32?null:(Jm=!0,Qm);case"textInput":return n=e.data,n===Qm&&Jm?null:n;default:return null}}function l1(n,e){if(ls)return n==="compositionend"||!ip&&ly(n,e)?(n=sy(),Bu=ep=Tr=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ay&&e.locale!=="ko"?null:e.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!u1[n.type]:e==="textarea"}function cy(n,e,t,i){V0(i),e=rc(e,"onChange"),0<e.length&&(t=new tp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Na=null,Ya=null;function c1(n){Sy(n,0)}function Pc(n){var e=fs(n);if(O0(e))return n}function f1(n,e){if(n==="change")return e}var fy=!1;if(or){var If;if(or){var Of="oninput"in document;if(!Of){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),Of=typeof tv.oninput=="function"}If=Of}else If=!1;fy=If&&(!document.documentMode||9<document.documentMode)}function nv(){Na&&(Na.detachEvent("onpropertychange",dy),Ya=Na=null)}function dy(n){if(n.propertyName==="value"&&Pc(Ya)){var e=[];cy(e,Ya,n,Yh(n)),j0(c1,e)}}function d1(n,e,t){n==="focusin"?(nv(),Na=e,Ya=t,Na.attachEvent("onpropertychange",dy)):n==="focusout"&&nv()}function h1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pc(Ya)}function p1(n,e){if(n==="click")return Pc(e)}function m1(n,e){if(n==="input"||n==="change")return Pc(e)}function v1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ai=typeof Object.is=="function"?Object.is:v1;function Ka(n,e){if(Ai(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!kd.call(e,r)||!Ai(n[r],e[r]))return!1}return!0}function iv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rv(n,e){var t=iv(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=iv(t)}}function hy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?hy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function py(){for(var n=window,e=Zu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Zu(n.document)}return e}function rp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function g1(n){var e=py(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&hy(t.ownerDocument.documentElement,t)){if(i!==null&&rp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!n.extend&&o>i&&(r=i,i=o,o=r),r=rv(t,o);var l=rv(t,i);r&&l&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),o>i?(n.addRange(e),n.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var y1=or&&"documentMode"in document&&11>=document.documentMode,us=null,nh=null,Ua=null,ih=!1;function ov(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ih||us==null||us!==Zu(i)||(i=us,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ua&&Ka(Ua,i)||(Ua=i,i=rc(nh,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=us)))}function ou(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var cs={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Nf={},my={};or&&(my=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Ac(n){if(Nf[n])return Nf[n];if(!cs[n])return n;var e=cs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in my)return Nf[n]=e[t];return n}var vy=Ac("animationend"),gy=Ac("animationiteration"),yy=Ac("animationstart"),xy=Ac("transitionend"),_y=new Map,sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,e){_y.set(n,e),Po(e,[n])}for(var Uf=0;Uf<sv.length;Uf++){var kf=sv[Uf],x1=kf.toLowerCase(),_1=kf[0].toUpperCase()+kf.slice(1);Br(x1,"on"+_1)}Br(vy,"onAnimationEnd");Br(gy,"onAnimationIteration");Br(yy,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(xy,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Po("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Po("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Po("onBeforeInput",["compositionend","keypress","textInput","paste"]);Po("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function av(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,xM(i,e,void 0,n),n.currentTarget=null}function Sy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var a=i[l],d=a.instance,p=a.currentTarget;if(a=a.listener,d!==o&&r.isPropagationStopped())break e;av(r,a,p),o=d}else for(l=0;l<i.length;l++){if(a=i[l],d=a.instance,p=a.currentTarget,a=a.listener,d!==o&&r.isPropagationStopped())break e;av(r,a,p),o=d}}}if(Ju)throw n=Qd,Ju=!1,Qd=null,n}function Dt(n,e){var t=e[lh];t===void 0&&(t=e[lh]=new Set);var i=n+"__bubble";t.has(i)||(My(e,n,2,!1),t.add(i))}function zf(n,e,t){var i=0;e&&(i|=4),My(t,n,i,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function Za(n){if(!n[su]){n[su]=!0,A0.forEach(function(t){t!=="selectionchange"&&(S1.has(t)||zf(t,!1,n),zf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[su]||(e[su]=!0,zf("selectionchange",!1,e))}}function My(n,e,t,i){switch(oy(e)){case 1:var r=NM;break;case 4:r=UM;break;default:r=Jh}t=r.bind(null,e,t,n),r=void 0,!Zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ff(n,e,t,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;l=l.return}for(;a!==null;){if(l=uo(a),l===null)return;if(d=l.tag,d===5||d===6){i=o=l;continue e}a=a.parentNode}}i=i.return}j0(function(){var p=o,m=Yh(t),g=[];e:{var y=_y.get(n);if(y!==void 0){var _=tp,E=n;switch(n){case"keypress":if(Vu(t)===0)break e;case"keydown":case"keyup":_=ZM;break;case"focusin":E="focus",_=Lf;break;case"focusout":E="blur",_=Lf;break;case"beforeblur":case"afterblur":_=Lf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=FM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=e1;break;case vy:case gy:case yy:_=GM;break;case xy:_=n1;break;case"scroll":_=kM;break;case"wheel":_=r1;break;case"copy":case"cut":case"paste":_=WM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Zm}var A=(e&4)!==0,x=!A&&n==="scroll",h=A?y!==null?y+"Capture":null:y;A=[];for(var S=p,b;S!==null;){b=S;var P=b.stateNode;if(b.tag===5&&P!==null&&(b=P,h!==null&&(P=ja(S,h),P!=null&&A.push(Qa(S,P,b)))),x)break;S=S.return}0<A.length&&(y=new _(y,E,null,t,m),g.push({event:y,listeners:A}))}}if(!(e&7)){e:{if(y=n==="mouseover"||n==="pointerover",_=n==="mouseout"||n==="pointerout",y&&t!==Yd&&(E=t.relatedTarget||t.fromElement)&&(uo(E)||E[sr]))break e;if((_||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,_?(E=t.relatedTarget||t.toElement,_=p,E=E?uo(E):null,E!==null&&(x=Ao(E),E!==x||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=p),_!==E)){if(A=Ym,P="onMouseLeave",h="onMouseEnter",S="mouse",(n==="pointerout"||n==="pointerover")&&(A=Zm,P="onPointerLeave",h="onPointerEnter",S="pointer"),x=_==null?y:fs(_),b=E==null?y:fs(E),y=new A(P,S+"leave",_,t,m),y.target=x,y.relatedTarget=b,P=null,uo(m)===p&&(A=new A(h,S+"enter",E,t,m),A.target=b,A.relatedTarget=x,P=A),x=P,_&&E)t:{for(A=_,h=E,S=0,b=A;b;b=Bo(b))S++;for(b=0,P=h;P;P=Bo(P))b++;for(;0<S-b;)A=Bo(A),S--;for(;0<b-S;)h=Bo(h),b--;for(;S--;){if(A===h||h!==null&&A===h.alternate)break t;A=Bo(A),h=Bo(h)}A=null}else A=null;_!==null&&lv(g,y,_,A,!1),E!==null&&x!==null&&lv(g,x,E,A,!0)}}e:{if(y=p?fs(p):window,_=y.nodeName&&y.nodeName.toLowerCase(),_==="select"||_==="input"&&y.type==="file")var D=f1;else if(ev(y))if(fy)D=m1;else{D=h1;var O=d1}else(_=y.nodeName)&&_.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(D=p1);if(D&&(D=D(n,p))){cy(g,D,t,m);break e}O&&O(n,y,p),n==="focusout"&&(O=y._wrapperState)&&O.controlled&&y.type==="number"&&Wd(y,"number",y.value)}switch(O=p?fs(p):window,n){case"focusin":(ev(O)||O.contentEditable==="true")&&(us=O,nh=p,Ua=null);break;case"focusout":Ua=nh=us=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,ov(g,t,m);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":ov(g,t,m)}var B;if(ip)e:{switch(n){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ls?ly(n,t)&&(k="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(ay&&t.locale!=="ko"&&(ls||k!=="onCompositionStart"?k==="onCompositionEnd"&&ls&&(B=sy()):(Tr=m,ep="value"in Tr?Tr.value:Tr.textContent,ls=!0)),O=rc(p,k),0<O.length&&(k=new Km(k,n,null,t,m),g.push({event:k,listeners:O}),B?k.data=B:(B=uy(t),B!==null&&(k.data=B)))),(B=s1?a1(n,t):l1(n,t))&&(p=rc(p,"onBeforeInput"),0<p.length&&(m=new Km("onBeforeInput","beforeinput",null,t,m),g.push({event:m,listeners:p}),m.data=B))}Sy(g,e)})}function Qa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function rc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ja(n,t),o!=null&&i.unshift(Qa(n,o,r)),o=ja(n,e),o!=null&&i.push(Qa(n,o,r))),n=n.return}return i}function Bo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lv(n,e,t,i,r){for(var o=e._reactName,l=[];t!==null&&t!==i;){var a=t,d=a.alternate,p=a.stateNode;if(d!==null&&d===i)break;a.tag===5&&p!==null&&(a=p,r?(d=ja(t,o),d!=null&&l.unshift(Qa(t,d,a))):r||(d=ja(t,o),d!=null&&l.push(Qa(t,d,a)))),t=t.return}l.length!==0&&n.push({event:e,listeners:l})}var M1=/\r\n?/g,w1=/\u0000|\uFFFD/g;function uv(n){return(typeof n=="string"?n:""+n).replace(M1,`
`).replace(w1,"")}function au(n,e,t){if(e=uv(e),uv(n)!==e&&t)throw Error(Se(425))}function oc(){}var rh=null,oh=null;function sh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,b1=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(n){return cv.resolve(null).then(n).catch(T1)}:ah;function T1(n){setTimeout(function(){throw n})}function Bf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),$a(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);$a(e)}function Rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function fv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Fi="__reactFiber$"+js,Ja="__reactProps$"+js,sr="__reactContainer$"+js,lh="__reactEvents$"+js,C1="__reactListeners$"+js,P1="__reactHandles$"+js;function uo(n){var e=n[Fi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[sr]||t[Fi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fv(n);n!==null;){if(t=n[Fi])return t;n=fv(n)}return e}n=t,t=n.parentNode}return null}function yl(n){return n=n[Fi]||n[sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Se(33))}function Dc(n){return n[Ja]||null}var uh=[],ds=-1;function Vr(n){return{current:n}}function It(n){0>ds||(n.current=uh[ds],uh[ds]=null,ds--)}function Ct(n,e){ds++,uh[ds]=n.current,n.current=e}var kr={},bn=Vr(kr),Vn=Vr(!1),xo=kr;function Ls(n,e){var t=n.type.contextTypes;if(!t)return kr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=e[o];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Gn(n){return n=n.childContextTypes,n!=null}function sc(){It(Vn),It(bn)}function dv(n,e,t){if(bn.current!==kr)throw Error(Se(168));Ct(bn,e),Ct(Vn,t)}function wy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,dM(n)||"Unknown",r));return Ft({},t,i)}function ac(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,xo=bn.current,Ct(bn,n),Ct(Vn,Vn.current),!0}function hv(n,e,t){var i=n.stateNode;if(!i)throw Error(Se(169));t?(n=wy(n,e,xo),i.__reactInternalMemoizedMergedChildContext=n,It(Vn),It(bn),Ct(bn,n)):It(Vn),Ct(Vn,t)}var er=null,Rc=!1,Vf=!1;function by(n){er===null?er=[n]:er.push(n)}function A1(n){Rc=!0,by(n)}function Gr(){if(!Vf&&er!==null){Vf=!0;var n=0,e=xt;try{var t=er;for(xt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}er=null,Rc=!1}catch(r){throw er!==null&&(er=er.slice(n+1)),Y0(Kh,Gr),r}finally{xt=e,Vf=!1}}return null}var hs=[],ps=0,lc=null,uc=0,ai=[],li=0,_o=null,nr=1,ir="";function io(n,e){hs[ps++]=uc,hs[ps++]=lc,lc=n,uc=e}function Ey(n,e,t){ai[li++]=nr,ai[li++]=ir,ai[li++]=_o,_o=n;var i=nr;n=ir;var r=32-Ti(i)-1;i&=~(1<<r),t+=1;var o=32-Ti(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,nr=1<<32-Ti(e)+r|t<<r|i,ir=o+n}else nr=1<<o|t<<r|i,ir=n}function op(n){n.return!==null&&(io(n,1),Ey(n,1,0))}function sp(n){for(;n===lc;)lc=hs[--ps],hs[ps]=null,uc=hs[--ps],hs[ps]=null;for(;n===_o;)_o=ai[--li],ai[li]=null,ir=ai[--li],ai[li]=null,nr=ai[--li],ai[li]=null}var Qn=null,Zn=null,Ot=!1,Mi=null;function Ty(n,e){var t=fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function pv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Qn=n,Zn=Rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Qn=n,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=_o!==null?{id:nr,overflow:ir}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Qn=n,Zn=null,!0):!1;default:return!1}}function ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function fh(n){if(Ot){var e=Zn;if(e){var t=e;if(!pv(n,e)){if(ch(n))throw Error(Se(418));e=Rr(t.nextSibling);var i=Qn;e&&pv(n,e)?Ty(i,t):(n.flags=n.flags&-4097|2,Ot=!1,Qn=n)}}else{if(ch(n))throw Error(Se(418));n.flags=n.flags&-4097|2,Ot=!1,Qn=n}}}function mv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function lu(n){if(n!==Qn)return!1;if(!Ot)return mv(n),Ot=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!sh(n.type,n.memoizedProps)),e&&(e=Zn)){if(ch(n))throw Cy(),Error(Se(418));for(;e;)Ty(n,e),e=Rr(e.nextSibling)}if(mv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Zn=Rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Zn=null}}else Zn=Qn?Rr(n.stateNode.nextSibling):null;return!0}function Cy(){for(var n=Zn;n;)n=Rr(n.nextSibling)}function Is(){Zn=Qn=null,Ot=!1}function ap(n){Mi===null?Mi=[n]:Mi.push(n)}var D1=ur.ReactCurrentBatchConfig;function _i(n,e){if(n&&n.defaultProps){e=Ft({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var cc=Vr(null),fc=null,ms=null,lp=null;function up(){lp=ms=fc=null}function cp(n){var e=cc.current;It(cc),n._currentValue=e}function dh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Es(n,e){fc=n,lp=ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Fn=!0),n.firstContext=null)}function hi(n){var e=n._currentValue;if(lp!==n)if(n={context:n,memoizedValue:e,next:null},ms===null){if(fc===null)throw Error(Se(308));ms=n,fc.dependencies={lanes:0,firstContext:n}}else ms=ms.next=n;return e}var co=null;function fp(n){co===null?co=[n]:co.push(n)}function Py(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,fp(e)):(t.next=r.next,r.next=t),e.interleaved=t,ar(n,i)}function ar(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Mr=!1;function dp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ay(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ar(n,t)}return r=i.interleaved,r===null?(e.next=e,fp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ar(n,t)}function Gu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zh(n,t)}}function vv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?r=o=e:o=o.next=e}else r=o=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function dc(n,e,t,i){var r=n.updateQueue;Mr=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var d=a,p=d.next;d.next=null,l===null?o=p:l.next=p,l=d;var m=n.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=p:a.next=p,m.lastBaseUpdate=d))}if(o!==null){var g=r.baseState;l=0,m=p=d=null,a=o;do{var y=a.lane,_=a.eventTime;if((i&y)===y){m!==null&&(m=m.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=n,A=a;switch(y=e,_=t,A.tag){case 1:if(E=A.payload,typeof E=="function"){g=E.call(_,g,y);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,y=typeof E=="function"?E.call(_,g,y):E,y==null)break e;g=Ft({},g,y);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,y=r.effects,y===null?r.effects=[a]:y.push(a))}else _={eventTime:_,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(p=m=_,d=g):m=m.next=_,l|=y;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;y=a,a=y.next,y.next=null,r.lastBaseUpdate=y,r.shared.pending=null}}while(1);if(m===null&&(d=g),r.baseState=d,r.firstBaseUpdate=p,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Mo|=l,n.lanes=l,n.memoizedState=g}}function gv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var Dy=new P0.Component().refs;function hh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ft({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Lc={isMounted:function(n){return(n=n._reactInternals)?Ao(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Dn(),r=Or(n),o=rr(i,r);o.payload=e,t!=null&&(o.callback=t),e=Lr(n,o,r),e!==null&&(Ci(e,n,r,i),Gu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Dn(),r=Or(n),o=rr(i,r);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=Lr(n,o,r),e!==null&&(Ci(e,n,r,i),Gu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Dn(),i=Or(n),r=rr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Lr(n,r,i),e!==null&&(Ci(e,n,i,t),Gu(e,n,i))}};function yv(n,e,t,i,r,o,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Ka(t,i)||!Ka(r,o):!0}function Ry(n,e,t){var i=!1,r=kr,o=e.contextType;return typeof o=="object"&&o!==null?o=hi(o):(r=Gn(e)?xo:bn.current,i=e.contextTypes,o=(i=i!=null)?Ls(n,r):kr),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),e}function xv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Lc.enqueueReplaceState(e,e.state,null)}function ph(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Dy,dp(n);var o=e.contextType;typeof o=="object"&&o!==null?r.context=hi(o):(o=Gn(e)?xo:bn.current,r.context=Ls(n,o)),r.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(hh(n,e,o,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),dc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ga(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Se(309));var i=t.stateNode}if(!i)throw Error(Se(147,n));var r=i,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var a=r.refs;a===Dy&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},e._stringRef=o,e)}if(typeof n!="string")throw Error(Se(284));if(!t._owner)throw Error(Se(290,n))}return n}function uu(n,e){throw n=Object.prototype.toString.call(e),Error(Se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function _v(n){var e=n._init;return e(n._payload)}function Ly(n){function e(h,S){if(n){var b=h.deletions;b===null?(h.deletions=[S],h.flags|=16):b.push(S)}}function t(h,S){if(!n)return null;for(;S!==null;)e(h,S),S=S.sibling;return null}function i(h,S){for(h=new Map;S!==null;)S.key!==null?h.set(S.key,S):h.set(S.index,S),S=S.sibling;return h}function r(h,S){return h=Nr(h,S),h.index=0,h.sibling=null,h}function o(h,S,b){return h.index=b,n?(b=h.alternate,b!==null?(b=b.index,b<S?(h.flags|=2,S):b):(h.flags|=2,S)):(h.flags|=1048576,S)}function l(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,S,b,P){return S===null||S.tag!==6?(S=$f(b,h.mode,P),S.return=h,S):(S=r(S,b),S.return=h,S)}function d(h,S,b,P){var D=b.type;return D===as?m(h,S,b.props.children,P,b.key):S!==null&&(S.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&_v(D)===S.type)?(P=r(S,b.props),P.ref=ga(h,S,b),P.return=h,P):(P=$u(b.type,b.key,b.props,null,h.mode,P),P.ref=ga(h,S,b),P.return=h,P)}function p(h,S,b,P){return S===null||S.tag!==4||S.stateNode.containerInfo!==b.containerInfo||S.stateNode.implementation!==b.implementation?(S=Yf(b,h.mode,P),S.return=h,S):(S=r(S,b.children||[]),S.return=h,S)}function m(h,S,b,P,D){return S===null||S.tag!==7?(S=vo(b,h.mode,P,D),S.return=h,S):(S=r(S,b),S.return=h,S)}function g(h,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return S=$f(""+S,h.mode,b),S.return=h,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ql:return b=$u(S.type,S.key,S.props,null,h.mode,b),b.ref=ga(h,null,S),b.return=h,b;case ss:return S=Yf(S,h.mode,b),S.return=h,S;case Sr:var P=S._init;return g(h,P(S._payload),b)}if(Ca(S)||da(S))return S=vo(S,h.mode,b,null),S.return=h,S;uu(h,S)}return null}function y(h,S,b,P){var D=S!==null?S.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return D!==null?null:a(h,S,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ql:return b.key===D?d(h,S,b,P):null;case ss:return b.key===D?p(h,S,b,P):null;case Sr:return D=b._init,y(h,S,D(b._payload),P)}if(Ca(b)||da(b))return D!==null?null:m(h,S,b,P,null);uu(h,b)}return null}function _(h,S,b,P,D){if(typeof P=="string"&&P!==""||typeof P=="number")return h=h.get(b)||null,a(S,h,""+P,D);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Ql:return h=h.get(P.key===null?b:P.key)||null,d(S,h,P,D);case ss:return h=h.get(P.key===null?b:P.key)||null,p(S,h,P,D);case Sr:var O=P._init;return _(h,S,b,O(P._payload),D)}if(Ca(P)||da(P))return h=h.get(b)||null,m(S,h,P,D,null);uu(S,P)}return null}function E(h,S,b,P){for(var D=null,O=null,B=S,k=S=0,R=null;B!==null&&k<b.length;k++){B.index>k?(R=B,B=null):R=B.sibling;var N=y(h,B,b[k],P);if(N===null){B===null&&(B=R);break}n&&B&&N.alternate===null&&e(h,B),S=o(N,S,k),O===null?D=N:O.sibling=N,O=N,B=R}if(k===b.length)return t(h,B),Ot&&io(h,k),D;if(B===null){for(;k<b.length;k++)B=g(h,b[k],P),B!==null&&(S=o(B,S,k),O===null?D=B:O.sibling=B,O=B);return Ot&&io(h,k),D}for(B=i(h,B);k<b.length;k++)R=_(B,h,k,b[k],P),R!==null&&(n&&R.alternate!==null&&B.delete(R.key===null?k:R.key),S=o(R,S,k),O===null?D=R:O.sibling=R,O=R);return n&&B.forEach(function(se){return e(h,se)}),Ot&&io(h,k),D}function A(h,S,b,P){var D=da(b);if(typeof D!="function")throw Error(Se(150));if(b=D.call(b),b==null)throw Error(Se(151));for(var O=D=null,B=S,k=S=0,R=null,N=b.next();B!==null&&!N.done;k++,N=b.next()){B.index>k?(R=B,B=null):R=B.sibling;var se=y(h,B,N.value,P);if(se===null){B===null&&(B=R);break}n&&B&&se.alternate===null&&e(h,B),S=o(se,S,k),O===null?D=se:O.sibling=se,O=se,B=R}if(N.done)return t(h,B),Ot&&io(h,k),D;if(B===null){for(;!N.done;k++,N=b.next())N=g(h,N.value,P),N!==null&&(S=o(N,S,k),O===null?D=N:O.sibling=N,O=N);return Ot&&io(h,k),D}for(B=i(h,B);!N.done;k++,N=b.next())N=_(B,h,k,N.value,P),N!==null&&(n&&N.alternate!==null&&B.delete(N.key===null?k:N.key),S=o(N,S,k),O===null?D=N:O.sibling=N,O=N);return n&&B.forEach(function(ue){return e(h,ue)}),Ot&&io(h,k),D}function x(h,S,b,P){if(typeof b=="object"&&b!==null&&b.type===as&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ql:e:{for(var D=b.key,O=S;O!==null;){if(O.key===D){if(D=b.type,D===as){if(O.tag===7){t(h,O.sibling),S=r(O,b.props.children),S.return=h,h=S;break e}}else if(O.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&_v(D)===O.type){t(h,O.sibling),S=r(O,b.props),S.ref=ga(h,O,b),S.return=h,h=S;break e}t(h,O);break}else e(h,O);O=O.sibling}b.type===as?(S=vo(b.props.children,h.mode,P,b.key),S.return=h,h=S):(P=$u(b.type,b.key,b.props,null,h.mode,P),P.ref=ga(h,S,b),P.return=h,h=P)}return l(h);case ss:e:{for(O=b.key;S!==null;){if(S.key===O)if(S.tag===4&&S.stateNode.containerInfo===b.containerInfo&&S.stateNode.implementation===b.implementation){t(h,S.sibling),S=r(S,b.children||[]),S.return=h,h=S;break e}else{t(h,S);break}else e(h,S);S=S.sibling}S=Yf(b,h.mode,P),S.return=h,h=S}return l(h);case Sr:return O=b._init,x(h,S,O(b._payload),P)}if(Ca(b))return E(h,S,b,P);if(da(b))return A(h,S,b,P);uu(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,S!==null&&S.tag===6?(t(h,S.sibling),S=r(S,b),S.return=h,h=S):(t(h,S),S=$f(b,h.mode,P),S.return=h,h=S),l(h)):t(h,S)}return x}var Os=Ly(!0),Iy=Ly(!1),xl={},Vi=Vr(xl),el=Vr(xl),tl=Vr(xl);function fo(n){if(n===xl)throw Error(Se(174));return n}function hp(n,e){switch(Ct(tl,e),Ct(el,n),Ct(Vi,xl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Xd(e,n)}It(Vi),Ct(Vi,e)}function Ns(){It(Vi),It(el),It(tl)}function Oy(n){fo(tl.current);var e=fo(Vi.current),t=Xd(e,n.type);e!==t&&(Ct(el,n),Ct(Vi,t))}function pp(n){el.current===n&&(It(Vi),It(el))}var kt=Vr(0);function hc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gf=[];function mp(){for(var n=0;n<Gf.length;n++)Gf[n]._workInProgressVersionPrimary=null;Gf.length=0}var Hu=ur.ReactCurrentDispatcher,Hf=ur.ReactCurrentBatchConfig,So=0,zt=null,Zt=null,cn=null,pc=!1,ka=!1,nl=0,R1=0;function yn(){throw Error(Se(321))}function vp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ai(n[t],e[t]))return!1;return!0}function gp(n,e,t,i,r,o){if(So=o,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=n===null||n.memoizedState===null?N1:U1,n=t(i,r),ka){o=0;do{if(ka=!1,nl=0,25<=o)throw Error(Se(301));o+=1,cn=Zt=null,e.updateQueue=null,Hu.current=k1,n=t(i,r)}while(ka)}if(Hu.current=mc,e=Zt!==null&&Zt.next!==null,So=0,cn=Zt=zt=null,pc=!1,e)throw Error(Se(300));return n}function yp(){var n=nl!==0;return nl=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?zt.memoizedState=cn=n:cn=cn.next=n,cn}function pi(){if(Zt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var e=cn===null?zt.memoizedState:cn.next;if(e!==null)cn=e,Zt=n;else{if(n===null)throw Error(Se(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},cn===null?zt.memoizedState=cn=n:cn=cn.next=n}return cn}function il(n,e){return typeof e=="function"?e(n):e}function Wf(n){var e=pi(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var i=Zt,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,d=null,p=o;do{var m=p.lane;if((So&m)===m)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:n(i,p.action);else{var g={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(a=d=g,l=i):d=d.next=g,zt.lanes|=m,Mo|=m}p=p.next}while(p!==null&&p!==o);d===null?l=i:d.next=a,Ai(i,e.memoizedState)||(Fn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=d,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do o=r.lane,zt.lanes|=o,Mo|=o,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function jf(n){var e=pi(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,o=e.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do o=n(o,l.action),l=l.next;while(l!==r);Ai(o,e.memoizedState)||(Fn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,i]}function Ny(){}function Uy(n,e){var t=zt,i=pi(),r=e(),o=!Ai(i.memoizedState,r);if(o&&(i.memoizedState=r,Fn=!0),i=i.queue,xp(Fy.bind(null,t,i,n),[n]),i.getSnapshot!==e||o||cn!==null&&cn.memoizedState.tag&1){if(t.flags|=2048,rl(9,zy.bind(null,t,i,r,e),void 0,null),fn===null)throw Error(Se(349));So&30||ky(t,e,r)}return r}function ky(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function zy(n,e,t,i){e.value=t,e.getSnapshot=i,By(e)&&Vy(n)}function Fy(n,e,t){return t(function(){By(e)&&Vy(n)})}function By(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ai(n,t)}catch{return!0}}function Vy(n){var e=ar(n,1);e!==null&&Ci(e,n,1,-1)}function Sv(n){var e=Ui();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:n},e.queue=n,n=n.dispatch=O1.bind(null,zt,n),[e.memoizedState,n]}function rl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Gy(){return pi().memoizedState}function Wu(n,e,t,i){var r=Ui();zt.flags|=n,r.memoizedState=rl(1|e,t,void 0,i===void 0?null:i)}function Ic(n,e,t,i){var r=pi();i=i===void 0?null:i;var o=void 0;if(Zt!==null){var l=Zt.memoizedState;if(o=l.destroy,i!==null&&vp(i,l.deps)){r.memoizedState=rl(e,t,o,i);return}}zt.flags|=n,r.memoizedState=rl(1|e,t,o,i)}function Mv(n,e){return Wu(8390656,8,n,e)}function xp(n,e){return Ic(2048,8,n,e)}function Hy(n,e){return Ic(4,2,n,e)}function Wy(n,e){return Ic(4,4,n,e)}function jy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Xy(n,e,t){return t=t!=null?t.concat([n]):null,Ic(4,4,jy.bind(null,e,n),t)}function _p(){}function qy(n,e){var t=pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function $y(n,e){var t=pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Yy(n,e,t){return So&21?(Ai(t,e)||(t=Q0(),zt.lanes|=t,Mo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Fn=!0),n.memoizedState=t)}function L1(n,e){var t=xt;xt=t!==0&&4>t?t:4,n(!0);var i=Hf.transition;Hf.transition={};try{n(!1),e()}finally{xt=t,Hf.transition=i}}function Ky(){return pi().memoizedState}function I1(n,e,t){var i=Or(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Zy(n))Qy(e,t);else if(t=Py(n,e,t,i),t!==null){var r=Dn();Ci(t,n,i,r),Jy(t,e,i)}}function O1(n,e,t){var i=Or(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zy(n))Qy(e,r);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,a=o(l,t);if(r.hasEagerState=!0,r.eagerState=a,Ai(a,l)){var d=e.interleaved;d===null?(r.next=r,fp(e)):(r.next=d.next,d.next=r),e.interleaved=r;return}}catch{}finally{}t=Py(n,e,r,i),t!==null&&(r=Dn(),Ci(t,n,i,r),Jy(t,e,i))}}function Zy(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function Qy(n,e){ka=pc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Jy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Zh(n,t)}}var mc={readContext:hi,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},N1={readContext:hi,useCallback:function(n,e){return Ui().memoizedState=[n,e===void 0?null:e],n},useContext:hi,useEffect:Mv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Wu(4194308,4,jy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Wu(4194308,4,n,e)},useInsertionEffect:function(n,e){return Wu(4,2,n,e)},useMemo:function(n,e){var t=Ui();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ui();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=I1.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=Ui();return n={current:n},e.memoizedState=n},useState:Sv,useDebugValue:_p,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Sv(!1),e=n[0];return n=L1.bind(null,n[1]),Ui().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=Ui();if(Ot){if(t===void 0)throw Error(Se(407));t=t()}else{if(t=e(),fn===null)throw Error(Se(349));So&30||ky(i,e,t)}r.memoizedState=t;var o={value:t,getSnapshot:e};return r.queue=o,Mv(Fy.bind(null,i,o,n),[n]),i.flags|=2048,rl(9,zy.bind(null,i,o,t,e),void 0,null),t},useId:function(){var n=Ui(),e=fn.identifierPrefix;if(Ot){var t=ir,i=nr;t=(i&~(1<<32-Ti(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=nl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=R1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},U1={readContext:hi,useCallback:qy,useContext:hi,useEffect:xp,useImperativeHandle:Xy,useInsertionEffect:Hy,useLayoutEffect:Wy,useMemo:$y,useReducer:Wf,useRef:Gy,useState:function(){return Wf(il)},useDebugValue:_p,useDeferredValue:function(n){var e=pi();return Yy(e,Zt.memoizedState,n)},useTransition:function(){var n=Wf(il)[0],e=pi().memoizedState;return[n,e]},useMutableSource:Ny,useSyncExternalStore:Uy,useId:Ky,unstable_isNewReconciler:!1},k1={readContext:hi,useCallback:qy,useContext:hi,useEffect:xp,useImperativeHandle:Xy,useInsertionEffect:Hy,useLayoutEffect:Wy,useMemo:$y,useReducer:jf,useRef:Gy,useState:function(){return jf(il)},useDebugValue:_p,useDeferredValue:function(n){var e=pi();return Zt===null?e.memoizedState=n:Yy(e,Zt.memoizedState,n)},useTransition:function(){var n=jf(il)[0],e=pi().memoizedState;return[n,e]},useMutableSource:Ny,useSyncExternalStore:Uy,useId:Ky,unstable_isNewReconciler:!1};function Us(n,e){try{var t="",i=e;do t+=fM(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:r,digest:null}}function Xf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function mh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var z1=typeof WeakMap=="function"?WeakMap:Map;function ex(n,e,t){t=rr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){gc||(gc=!0,Eh=i),mh(n,e)},t}function tx(n,e,t){t=rr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){mh(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){mh(n,e),typeof i!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),t}function wv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new z1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Q1.bind(null,n,e,t),e.then(n,n))}function bv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ev(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=rr(-1,1),e.tag=2,Lr(t,e,1))),t.lanes|=1),n)}var F1=ur.ReactCurrentOwner,Fn=!1;function An(n,e,t,i){e.child=n===null?Iy(e,null,t,i):Os(e,n.child,t,i)}function Tv(n,e,t,i,r){t=t.render;var o=e.ref;return Es(e,r),i=gp(n,e,t,i,o,r),t=yp(),n!==null&&!Fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,lr(n,e,r)):(Ot&&t&&op(e),e.flags|=1,An(n,e,i,r),e.child)}function Cv(n,e,t,i,r){if(n===null){var o=t.type;return typeof o=="function"&&!Pp(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,nx(n,e,o,i,r)):(n=$u(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,!(n.lanes&r)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ka,t(l,i)&&n.ref===e.ref)return lr(n,e,r)}return e.flags|=1,n=Nr(o,i),n.ref=e.ref,n.return=e,e.child=n}function nx(n,e,t,i,r){if(n!==null){var o=n.memoizedProps;if(Ka(o,i)&&n.ref===e.ref)if(Fn=!1,e.pendingProps=i=o,(n.lanes&r)!==0)n.flags&131072&&(Fn=!0);else return e.lanes=n.lanes,lr(n,e,r)}return vh(n,e,t,i,r)}function ix(n,e,t){var i=e.pendingProps,r=i.children,o=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(gs,Kn),Kn|=t;else{if(!(t&1073741824))return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ct(gs,Kn),Kn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,Ct(gs,Kn),Kn|=i}else o!==null?(i=o.baseLanes|t,e.memoizedState=null):i=t,Ct(gs,Kn),Kn|=i;return An(n,e,r,t),e.child}function rx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function vh(n,e,t,i,r){var o=Gn(t)?xo:bn.current;return o=Ls(e,o),Es(e,r),t=gp(n,e,t,i,o,r),i=yp(),n!==null&&!Fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,lr(n,e,r)):(Ot&&i&&op(e),e.flags|=1,An(n,e,t,r),e.child)}function Pv(n,e,t,i,r){if(Gn(t)){var o=!0;ac(e)}else o=!1;if(Es(e,r),e.stateNode===null)ju(n,e),Ry(e,t,i),ph(e,t,i,r),i=!0;else if(n===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,p=t.contextType;typeof p=="object"&&p!==null?p=hi(p):(p=Gn(t)?xo:bn.current,p=Ls(e,p));var m=t.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||d!==p)&&xv(e,l,i,p),Mr=!1;var y=e.memoizedState;l.state=y,dc(e,i,l,r),d=e.memoizedState,a!==i||y!==d||Vn.current||Mr?(typeof m=="function"&&(hh(e,t,m,i),d=e.memoizedState),(a=Mr||yv(e,t,a,i,y,d,p))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),l.props=i,l.state=d,l.context=p,i=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Ay(n,e),a=e.memoizedProps,p=e.type===e.elementType?a:_i(e.type,a),l.props=p,g=e.pendingProps,y=l.context,d=t.contextType,typeof d=="object"&&d!==null?d=hi(d):(d=Gn(t)?xo:bn.current,d=Ls(e,d));var _=t.getDerivedStateFromProps;(m=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||y!==d)&&xv(e,l,i,d),Mr=!1,y=e.memoizedState,l.state=y,dc(e,i,l,r);var E=e.memoizedState;a!==g||y!==E||Vn.current||Mr?(typeof _=="function"&&(hh(e,t,_,i),E=e.memoizedState),(p=Mr||yv(e,t,p,i,y,E,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,E,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,E,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),l.props=i,l.state=E,l.context=d,i=p):(typeof l.componentDidUpdate!="function"||a===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),i=!1)}return gh(n,e,t,i,o,r)}function gh(n,e,t,i,r,o){rx(n,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&hv(e,t,!1),lr(n,e,o);i=e.stateNode,F1.current=e;var a=l&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&l?(e.child=Os(e,n.child,null,o),e.child=Os(e,null,a,o)):An(n,e,a,o),e.memoizedState=i.state,r&&hv(e,t,!0),e.child}function ox(n){var e=n.stateNode;e.pendingContext?dv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(n,e.context,!1),hp(n,e.containerInfo)}function Av(n,e,t,i,r){return Is(),ap(r),e.flags|=256,An(n,e,t,i),e.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function xh(n){return{baseLanes:n,cachePool:null,transitions:null}}function sx(n,e,t){var i=e.pendingProps,r=kt.current,o=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ct(kt,r&1),n===null)return fh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,n=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Uc(l,i,0,null),n=vo(n,i,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=xh(t),e.memoizedState=yh,n):Sp(e,l));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return B1(n,e,l,i,a,r,t);if(o){o=i.fallback,l=e.mode,r=n.child,a=r.sibling;var d={mode:"hidden",children:i.children};return!(l&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=d,e.deletions=null):(i=Nr(r,d),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Nr(a,o):(o=vo(o,l,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=n.child.memoizedState,l=l===null?xh(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=n.childLanes&~t,e.memoizedState=yh,i}return o=n.child,n=o.sibling,i=Nr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Sp(n,e){return e=Uc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function cu(n,e,t,i){return i!==null&&ap(i),Os(e,n.child,null,t),n=Sp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function B1(n,e,t,i,r,o,l){if(t)return e.flags&256?(e.flags&=-257,i=Xf(Error(Se(422))),cu(n,e,l,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),o=vo(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Os(e,n.child,null,l),e.child.memoizedState=xh(l),e.memoizedState=yh,o);if(!(e.mode&1))return cu(n,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Se(419)),i=Xf(o,i,void 0),cu(n,e,l,i)}if(a=(l&n.childLanes)!==0,Fn||a){if(i=fn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ar(n,r),Ci(i,n,r,-1))}return Cp(),i=Xf(Error(Se(421))),cu(n,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=J1.bind(null,n),r._reactRetry=e,null):(n=o.treeContext,Zn=Rr(r.nextSibling),Qn=e,Ot=!0,Mi=null,n!==null&&(ai[li++]=nr,ai[li++]=ir,ai[li++]=_o,nr=n.id,ir=n.overflow,_o=e),e=Sp(e,i.children),e.flags|=4096,e)}function Dv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),dh(n.return,e,t)}function qf(n,e,t,i,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function ax(n,e,t){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(An(n,e,i.children,t),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dv(n,t,e);else if(n.tag===19)Dv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ct(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&hc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),qf(e,!1,r,t,o);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&hc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}qf(e,!0,t,null,o);break;case"together":qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ju(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function lr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Mo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Se(153));if(e.child!==null){for(n=e.child,t=Nr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Nr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function V1(n,e,t){switch(e.tag){case 3:ox(e),Is();break;case 5:Oy(e);break;case 1:Gn(e.type)&&ac(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(cc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(kt,kt.current&1),e.flags|=128,null):t&e.child.childLanes?sx(n,e,t):(Ct(kt,kt.current&1),n=lr(n,e,t),n!==null?n.sibling:null);Ct(kt,kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return ax(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,ix(n,e,t)}return lr(n,e,t)}var lx,_h,ux,cx;lx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};_h=function(){};ux=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fo(Vi.current);var o=null;switch(t){case"input":r=Gd(n,r),i=Gd(n,i),o=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),o=[];break;case"textarea":r=jd(n,r),i=jd(n,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=oc)}qd(t,i);var l;t=null;for(p in r)if(!i.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var a=r[p];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ha.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in i){var d=i[p];if(a=r!=null?r[p]:void 0,i.hasOwnProperty(p)&&d!==a&&(d!=null||a!=null))if(p==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(t||(t={}),t[l]=d[l])}else t||(o||(o=[]),o.push(p,t)),t=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&Dt("scroll",n),o||a===d||(o=[])):(o=o||[]).push(p,d))}t&&(o=o||[]).push("style",t);var p=o;(e.updateQueue=p)&&(e.flags|=4)}};cx=function(n,e,t,i){t!==i&&(e.flags|=4)};function ya(n,e){if(!Ot)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function xn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function G1(n,e,t){var i=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return Gn(e.type)&&sc(),xn(e),null;case 3:return i=e.stateNode,Ns(),It(Vn),It(bn),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(lu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(Ph(Mi),Mi=null))),_h(n,e),xn(e),null;case 5:pp(e);var r=fo(tl.current);if(t=e.type,n!==null&&e.stateNode!=null)ux(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return xn(e),null}if(n=fo(Vi.current),lu(e)){i=e.stateNode,t=e.type;var o=e.memoizedProps;switch(i[Fi]=e,i[Ja]=o,n=(e.mode&1)!==0,t){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)Dt(Aa[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Fm(i,o),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Dt("invalid",i);break;case"textarea":Vm(i,o),Dt("invalid",i)}qd(t,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&au(i.textContent,a,n),r=["children",""+a]):Ha.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Dt("scroll",i)}switch(t){case"input":Jl(i),Bm(i,o,!0);break;case"textarea":Jl(i),Gm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=l.createElement(t,{is:i.is}):(n=l.createElement(t),t==="select"&&(l=n,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):n=l.createElementNS(n,t),n[Fi]=e,n[Ja]=i,lx(n,e,!1,!1),e.stateNode=n;e:{switch(l=$d(t,i),t){case"dialog":Dt("cancel",n),Dt("close",n),r=i;break;case"iframe":case"object":case"embed":Dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)Dt(Aa[r],n);r=i;break;case"source":Dt("error",n),r=i;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),r=i;break;case"details":Dt("toggle",n),r=i;break;case"input":Fm(n,i),r=Gd(n,i),Dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),Dt("invalid",n);break;case"textarea":Vm(n,i),r=jd(n,i),Dt("invalid",n);break;default:r=i}qd(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?B0(n,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&z0(n,d)):o==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Wa(n,d):typeof d=="number"&&Wa(n,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ha.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Dt("scroll",n):d!=null&&jh(n,o,d,l))}switch(t){case"input":Jl(n),Bm(n,i,!1);break;case"textarea":Jl(n),Gm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ur(i.value));break;case"select":n.multiple=!!i.multiple,o=i.value,o!=null?Ss(n,!!i.multiple,o,!1):i.defaultValue!=null&&Ss(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=oc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(n&&e.stateNode!=null)cx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(t=fo(tl.current),fo(Vi.current),lu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Fi]=e,(o=i.nodeValue!==t)&&(n=Qn,n!==null))switch(n.tag){case 3:au(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&au(i.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Fi]=e,e.stateNode=i}return xn(e),null;case 13:if(It(kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Zn!==null&&e.mode&1&&!(e.flags&128))Cy(),Is(),e.flags|=98560,o=!1;else if(o=lu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[Fi]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),o=!1}else Mi!==null&&(Ph(Mi),Mi=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||kt.current&1?Jt===0&&(Jt=3):Cp())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Ns(),_h(n,e),n===null&&Za(e.stateNode.containerInfo),xn(e),null;case 10:return cp(e.type._context),xn(e),null;case 17:return Gn(e.type)&&sc(),xn(e),null;case 19:if(It(kt),o=e.memoizedState,o===null)return xn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)ya(o,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(l=hc(n),l!==null){for(e.flags|=128,ya(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)o=t,n=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,n=l.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ct(kt,kt.current&1|2),e.child}n=n.sibling}o.tail!==null&&Wt()>ks&&(e.flags|=128,i=!0,ya(o,!1),e.lanes=4194304)}else{if(!i)if(n=hc(l),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ya(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ot)return xn(e),null}else 2*Wt()-o.renderingStartTime>ks&&t!==1073741824&&(e.flags|=128,i=!0,ya(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(t=o.last,t!==null?t.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Wt(),e.sibling=null,t=kt.current,Ct(kt,i?t&1|2:t&1),e):(xn(e),null);case 22:case 23:return Tp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function H1(n,e){switch(sp(e),e.tag){case 1:return Gn(e.type)&&sc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ns(),It(Vn),It(bn),mp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return pp(e),null;case 13:if(It(kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Is()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return It(kt),null;case 4:return Ns(),null;case 10:return cp(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var fu=!1,Mn=!1,W1=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function vs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function Sh(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var Rv=!1;function j1(n,e){if(rh=nc,n=py(),rp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,d=-1,p=0,m=0,g=n,y=null;t:for(;;){for(var _;g!==t||r!==0&&g.nodeType!==3||(a=l+r),g!==o||i!==0&&g.nodeType!==3||(d=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(_=g.firstChild)!==null;)y=g,g=_;for(;;){if(g===n)break t;if(y===t&&++p===r&&(a=l),y===o&&++m===i&&(d=l),(_=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=_}t=a===-1||d===-1?null:{start:a,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(oh={focusedElem:n,selectionRange:t},nc=!1,Ie=e;Ie!==null;)if(e=Ie,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ie=n;else for(;Ie!==null;){e=Ie;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,x=E.memoizedState,h=e.stateNode,S=h.getSnapshotBeforeUpdate(e.elementType===e.type?A:_i(e.type,A),x);h.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(P){Vt(e,e.return,P)}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}return E=Rv,Rv=!1,E}function za(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var o=r.destroy;r.destroy=void 0,o!==void 0&&Sh(e,t,o)}r=r.next}while(r!==i)}}function Oc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Mh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function fx(n){var e=n.alternate;e!==null&&(n.alternate=null,fx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Fi],delete e[Ja],delete e[lh],delete e[C1],delete e[P1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dx(n){return n.tag===5||n.tag===3||n.tag===4}function Lv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(n=n.child,n!==null))for(wh(n,e,t),n=n.sibling;n!==null;)wh(n,e,t),n=n.sibling}function bh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(bh(n,e,t),n=n.sibling;n!==null;)bh(n,e,t),n=n.sibling}var mn=null,Si=!1;function mr(n,e,t){for(t=t.child;t!==null;)hx(n,e,t),t=t.sibling}function hx(n,e,t){if(Bi&&typeof Bi.onCommitFiberUnmount=="function")try{Bi.onCommitFiberUnmount(Tc,t)}catch{}switch(t.tag){case 5:Mn||vs(t,e);case 6:var i=mn,r=Si;mn=null,mr(n,e,t),mn=i,Si=r,mn!==null&&(Si?(n=mn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):mn.removeChild(t.stateNode));break;case 18:mn!==null&&(Si?(n=mn,t=t.stateNode,n.nodeType===8?Bf(n.parentNode,t):n.nodeType===1&&Bf(n,t),$a(n)):Bf(mn,t.stateNode));break;case 4:i=mn,r=Si,mn=t.stateNode.containerInfo,Si=!0,mr(n,e,t),mn=i,Si=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Sh(t,e,l),r=r.next}while(r!==i)}mr(n,e,t);break;case 1:if(!Mn&&(vs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}mr(n,e,t);break;case 21:mr(n,e,t);break;case 22:t.mode&1?(Mn=(i=Mn)||t.memoizedState!==null,mr(n,e,t),Mn=i):mr(n,e,t);break;default:mr(n,e,t)}}function Iv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new W1),e.forEach(function(i){var r=ew.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function vi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=n,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,Si=!1;break e;case 3:mn=a.stateNode.containerInfo,Si=!0;break e;case 4:mn=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(mn===null)throw Error(Se(160));hx(o,l,r),mn=null,Si=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(p){Vt(r,e,p)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)px(e,n),e=e.sibling}function px(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(e,n),Ii(n),i&4){try{za(3,n,n.return),Oc(3,n)}catch(A){Vt(n,n.return,A)}try{za(5,n,n.return)}catch(A){Vt(n,n.return,A)}}break;case 1:vi(e,n),Ii(n),i&512&&t!==null&&vs(t,t.return);break;case 5:if(vi(e,n),Ii(n),i&512&&t!==null&&vs(t,t.return),n.flags&32){var r=n.stateNode;try{Wa(r,"")}catch(A){Vt(n,n.return,A)}}if(i&4&&(r=n.stateNode,r!=null)){var o=n.memoizedProps,l=t!==null?t.memoizedProps:o,a=n.type,d=n.updateQueue;if(n.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&N0(r,o),$d(a,l);var p=$d(a,o);for(l=0;l<d.length;l+=2){var m=d[l],g=d[l+1];m==="style"?B0(r,g):m==="dangerouslySetInnerHTML"?z0(r,g):m==="children"?Wa(r,g):jh(r,m,g,p)}switch(a){case"input":Hd(r,o);break;case"textarea":U0(r,o);break;case"select":var y=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Ss(r,!!o.multiple,_,!1):y!==!!o.multiple&&(o.defaultValue!=null?Ss(r,!!o.multiple,o.defaultValue,!0):Ss(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ja]=o}catch(A){Vt(n,n.return,A)}}break;case 6:if(vi(e,n),Ii(n),i&4){if(n.stateNode===null)throw Error(Se(162));r=n.stateNode,o=n.memoizedProps;try{r.nodeValue=o}catch(A){Vt(n,n.return,A)}}break;case 3:if(vi(e,n),Ii(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(A){Vt(n,n.return,A)}break;case 4:vi(e,n),Ii(n);break;case 13:vi(e,n),Ii(n),r=n.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(bp=Wt())),i&4&&Iv(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(Mn=(p=Mn)||m,vi(e,n),Mn=p):vi(e,n),Ii(n),i&8192){if(p=n.memoizedState!==null,(n.stateNode.isHidden=p)&&!m&&n.mode&1)for(Ie=n,m=n.child;m!==null;){for(g=Ie=m;Ie!==null;){switch(y=Ie,_=y.child,y.tag){case 0:case 11:case 14:case 15:za(4,y,y.return);break;case 1:vs(y,y.return);var E=y.stateNode;if(typeof E.componentWillUnmount=="function"){i=y,t=y.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){Vt(i,t,A)}}break;case 5:vs(y,y.return);break;case 22:if(y.memoizedState!==null){Nv(g);continue}}_!==null?(_.return=y,Ie=_):Nv(g)}m=m.sibling}e:for(m=null,g=n;;){if(g.tag===5){if(m===null){m=g;try{r=g.stateNode,p?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,d=g.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=F0("display",l))}catch(A){Vt(n,n.return,A)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(A){Vt(n,n.return,A)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===n)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:vi(e,n),Ii(n),i&4&&Iv(n);break;case 21:break;default:vi(e,n),Ii(n)}}function Ii(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(dx(t)){var i=t;break e}t=t.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wa(r,""),i.flags&=-33);var o=Lv(n);bh(n,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=Lv(n);wh(n,a,l);break;default:throw Error(Se(161))}}catch(d){Vt(n,n.return,d)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function X1(n,e,t){Ie=n,mx(n)}function mx(n,e,t){for(var i=(n.mode&1)!==0;Ie!==null;){var r=Ie,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||fu;if(!l){var a=r.alternate,d=a!==null&&a.memoizedState!==null||Mn;a=fu;var p=Mn;if(fu=l,(Mn=d)&&!p)for(Ie=r;Ie!==null;)l=Ie,d=l.child,l.tag===22&&l.memoizedState!==null?Uv(r):d!==null?(d.return=l,Ie=d):Uv(r);for(;o!==null;)Ie=o,mx(o),o=o.sibling;Ie=r,fu=a,Mn=p}Ov(n)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ie=o):Ov(n)}}function Ov(n){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:_i(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&gv(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}gv(e,l,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var p=e.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&$a(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Mn||e.flags&512&&Mh(e)}catch(y){Vt(e,e.return,y)}}if(e===n){Ie=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function Nv(n){for(;Ie!==null;){var e=Ie;if(e===n){Ie=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function Uv(n){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Oc(4,e)}catch(d){Vt(e,t,d)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(d){Vt(e,r,d)}}var o=e.return;try{Mh(e)}catch(d){Vt(e,o,d)}break;case 5:var l=e.return;try{Mh(e)}catch(d){Vt(e,l,d)}}}catch(d){Vt(e,e.return,d)}if(e===n){Ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ie=a;break}Ie=e.return}}var q1=Math.ceil,vc=ur.ReactCurrentDispatcher,Mp=ur.ReactCurrentOwner,di=ur.ReactCurrentBatchConfig,pt=0,fn=null,Kt=null,vn=0,Kn=0,gs=Vr(0),Jt=0,ol=null,Mo=0,Nc=0,wp=0,Fa=null,Un=null,bp=0,ks=1/0,Ji=null,gc=!1,Eh=null,Ir=null,du=!1,Cr=null,yc=0,Ba=0,Th=null,Xu=-1,qu=0;function Dn(){return pt&6?Wt():Xu!==-1?Xu:Xu=Wt()}function Or(n){return n.mode&1?pt&2&&vn!==0?vn&-vn:D1.transition!==null?(qu===0&&(qu=Q0()),qu):(n=xt,n!==0||(n=window.event,n=n===void 0?16:oy(n.type)),n):1}function Ci(n,e,t,i){if(50<Ba)throw Ba=0,Th=null,Error(Se(185));vl(n,t,i),(!(pt&2)||n!==fn)&&(n===fn&&(!(pt&2)&&(Nc|=t),Jt===4&&br(n,vn)),Hn(n,i),t===1&&pt===0&&!(e.mode&1)&&(ks=Wt()+500,Rc&&Gr()))}function Hn(n,e){var t=n.callbackNode;DM(n,e);var i=tc(n,n===fn?vn:0);if(i===0)t!==null&&jm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&jm(t),e===1)n.tag===0?A1(kv.bind(null,n)):by(kv.bind(null,n)),E1(function(){!(pt&6)&&Gr()}),t=null;else{switch(J0(i)){case 1:t=Kh;break;case 4:t=K0;break;case 16:t=ec;break;case 536870912:t=Z0;break;default:t=ec}t=wx(t,vx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function vx(n,e){if(Xu=-1,qu=0,pt&6)throw Error(Se(327));var t=n.callbackNode;if(Ts()&&n.callbackNode!==t)return null;var i=tc(n,n===fn?vn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=xc(n,i);else{e=i;var r=pt;pt|=2;var o=yx();(fn!==n||vn!==e)&&(Ji=null,ks=Wt()+500,mo(n,e));do try{K1();break}catch(a){gx(n,a)}while(1);up(),vc.current=o,pt=r,Kt!==null?e=0:(fn=null,vn=0,e=Jt)}if(e!==0){if(e===2&&(r=Jd(n),r!==0&&(i=r,e=Ch(n,r))),e===1)throw t=ol,mo(n,0),br(n,i),Hn(n,Wt()),t;if(e===6)br(n,i);else{if(r=n.current.alternate,!(i&30)&&!$1(r)&&(e=xc(n,i),e===2&&(o=Jd(n),o!==0&&(i=o,e=Ch(n,o))),e===1))throw t=ol,mo(n,0),br(n,i),Hn(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:ro(n,Un,Ji);break;case 3:if(br(n,i),(i&130023424)===i&&(e=bp+500-Wt(),10<e)){if(tc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ah(ro.bind(null,n,Un,Ji),e);break}ro(n,Un,Ji);break;case 4:if(br(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var l=31-Ti(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*q1(i/1960))-i,10<i){n.timeoutHandle=ah(ro.bind(null,n,Un,Ji),i);break}ro(n,Un,Ji);break;case 5:ro(n,Un,Ji);break;default:throw Error(Se(329))}}}return Hn(n,Wt()),n.callbackNode===t?vx.bind(null,n):null}function Ch(n,e){var t=Fa;return n.current.memoizedState.isDehydrated&&(mo(n,e).flags|=256),n=xc(n,e),n!==2&&(e=Un,Un=t,e!==null&&Ph(e)),n}function Ph(n){Un===null?Un=n:Un.push.apply(Un,n)}function $1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!Ai(o(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(n,e){for(e&=~wp,e&=~Nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ti(e),i=1<<t;n[t]=-1,e&=~i}}function kv(n){if(pt&6)throw Error(Se(327));Ts();var e=tc(n,0);if(!(e&1))return Hn(n,Wt()),null;var t=xc(n,e);if(n.tag!==0&&t===2){var i=Jd(n);i!==0&&(e=i,t=Ch(n,i))}if(t===1)throw t=ol,mo(n,0),br(n,e),Hn(n,Wt()),t;if(t===6)throw Error(Se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ro(n,Un,Ji),Hn(n,Wt()),null}function Ep(n,e){var t=pt;pt|=1;try{return n(e)}finally{pt=t,pt===0&&(ks=Wt()+500,Rc&&Gr())}}function wo(n){Cr!==null&&Cr.tag===0&&!(pt&6)&&Ts();var e=pt;pt|=1;var t=di.transition,i=xt;try{if(di.transition=null,xt=1,n)return n()}finally{xt=i,di.transition=t,pt=e,!(pt&6)&&Gr()}}function Tp(){Kn=gs.current,It(gs)}function mo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,b1(t)),Kt!==null)for(t=Kt.return;t!==null;){var i=t;switch(sp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sc();break;case 3:Ns(),It(Vn),It(bn),mp();break;case 5:pp(i);break;case 4:Ns();break;case 13:It(kt);break;case 19:It(kt);break;case 10:cp(i.type._context);break;case 22:case 23:Tp()}t=t.return}if(fn=n,Kt=n=Nr(n.current,null),vn=Kn=e,Jt=0,ol=null,wp=Nc=Mo=0,Un=Fa=null,co!==null){for(e=0;e<co.length;e++)if(t=co[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}t.pending=i}co=null}return n}function gx(n,e){do{var t=Kt;try{if(up(),Hu.current=mc,pc){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pc=!1}if(So=0,cn=Zt=zt=null,ka=!1,nl=0,Mp.current=null,t===null||t.return===null){Jt=1,ol=e,Kt=null;break}e:{var o=n,l=t.return,a=t,d=e;if(e=vn,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,m=a,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var _=bv(l);if(_!==null){_.flags&=-257,Ev(_,l,a,o,e),_.mode&1&&wv(o,p,e),e=_,d=p;var E=e.updateQueue;if(E===null){var A=new Set;A.add(d),e.updateQueue=A}else E.add(d);break e}else{if(!(e&1)){wv(o,p,e),Cp();break e}d=Error(Se(426))}}else if(Ot&&a.mode&1){var x=bv(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ev(x,l,a,o,e),ap(Us(d,a));break e}}o=d=Us(d,a),Jt!==4&&(Jt=2),Fa===null?Fa=[o]:Fa.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=ex(o,d,e);vv(o,h);break e;case 1:a=d;var S=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof S.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ir===null||!Ir.has(b)))){o.flags|=65536,e&=-e,o.lanes|=e;var P=tx(o,a,e);vv(o,P);break e}}o=o.return}while(o!==null)}_x(t)}catch(D){e=D,Kt===t&&t!==null&&(Kt=t=t.return);continue}break}while(1)}function yx(){var n=vc.current;return vc.current=mc,n===null?mc:n}function Cp(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),fn===null||!(Mo&268435455)&&!(Nc&268435455)||br(fn,vn)}function xc(n,e){var t=pt;pt|=2;var i=yx();(fn!==n||vn!==e)&&(Ji=null,mo(n,e));do try{Y1();break}catch(r){gx(n,r)}while(1);if(up(),pt=t,vc.current=i,Kt!==null)throw Error(Se(261));return fn=null,vn=0,Jt}function Y1(){for(;Kt!==null;)xx(Kt)}function K1(){for(;Kt!==null&&!SM();)xx(Kt)}function xx(n){var e=Mx(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,e===null?_x(n):Kt=e,Mp.current=null}function _x(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=H1(t,e),t!==null){t.flags&=32767,Kt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Kt=null;return}}else if(t=G1(t,e,Kn),t!==null){Kt=t;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=n}while(e!==null);Jt===0&&(Jt=5)}function ro(n,e,t){var i=xt,r=di.transition;try{di.transition=null,xt=1,Z1(n,e,t,i)}finally{di.transition=r,xt=i}return null}function Z1(n,e,t,i){do Ts();while(Cr!==null);if(pt&6)throw Error(Se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Se(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(RM(n,o),n===fn&&(Kt=fn=null,vn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||du||(du=!0,wx(ec,function(){return Ts(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=di.transition,di.transition=null;var l=xt;xt=1;var a=pt;pt|=4,Mp.current=null,j1(n,t),px(t,n),g1(oh),nc=!!rh,oh=rh=null,n.current=t,X1(t),MM(),pt=a,xt=l,di.transition=o}else n.current=t;if(du&&(du=!1,Cr=n,yc=r),o=n.pendingLanes,o===0&&(Ir=null),EM(t.stateNode),Hn(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(gc)throw gc=!1,n=Eh,Eh=null,n;return yc&1&&n.tag!==0&&Ts(),o=n.pendingLanes,o&1?n===Th?Ba++:(Ba=0,Th=n):Ba=0,Gr(),null}function Ts(){if(Cr!==null){var n=J0(yc),e=di.transition,t=xt;try{if(di.transition=null,xt=16>n?16:n,Cr===null)var i=!1;else{if(n=Cr,Cr=null,yc=0,pt&6)throw Error(Se(331));var r=pt;for(pt|=4,Ie=n.current;Ie!==null;){var o=Ie,l=o.child;if(Ie.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var p=a[d];for(Ie=p;Ie!==null;){var m=Ie;switch(m.tag){case 0:case 11:case 15:za(8,m,o)}var g=m.child;if(g!==null)g.return=m,Ie=g;else for(;Ie!==null;){m=Ie;var y=m.sibling,_=m.return;if(fx(m),m===p){Ie=null;break}if(y!==null){y.return=_,Ie=y;break}Ie=_}}}var E=o.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var x=A.sibling;A.sibling=null,A=x}while(A!==null)}}Ie=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Ie=l;else e:for(;Ie!==null;){if(o=Ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:za(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Ie=h;break e}Ie=o.return}}var S=n.current;for(Ie=S;Ie!==null;){l=Ie;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,Ie=b;else e:for(l=S;Ie!==null;){if(a=Ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oc(9,a)}}catch(D){Vt(a,a.return,D)}if(a===l){Ie=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,Ie=P;break e}Ie=a.return}}if(pt=r,Gr(),Bi&&typeof Bi.onPostCommitFiberRoot=="function")try{Bi.onPostCommitFiberRoot(Tc,n)}catch{}i=!0}return i}finally{xt=t,di.transition=e}}return!1}function zv(n,e,t){e=Us(t,e),e=ex(n,e,1),n=Lr(n,e,1),e=Dn(),n!==null&&(vl(n,1,e),Hn(n,e))}function Vt(n,e,t){if(n.tag===3)zv(n,n,t);else for(;e!==null;){if(e.tag===3){zv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ir===null||!Ir.has(i))){n=Us(t,n),n=tx(e,n,1),e=Lr(e,n,1),n=Dn(),e!==null&&(vl(e,1,n),Hn(e,n));break}}e=e.return}}function Q1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Dn(),n.pingedLanes|=n.suspendedLanes&t,fn===n&&(vn&t)===t&&(Jt===4||Jt===3&&(vn&130023424)===vn&&500>Wt()-bp?mo(n,0):wp|=t),Hn(n,e)}function Sx(n,e){e===0&&(n.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var t=Dn();n=ar(n,e),n!==null&&(vl(n,e,t),Hn(n,t))}function J1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Sx(n,t)}function ew(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),Sx(n,t)}var Mx;Mx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Vn.current)Fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Fn=!1,V1(n,e,t);Fn=!!(n.flags&131072)}else Fn=!1,Ot&&e.flags&1048576&&Ey(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ju(n,e),n=e.pendingProps;var r=Ls(e,bn.current);Es(e,t),r=gp(null,e,i,n,r,t);var o=yp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gn(i)?(o=!0,ac(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dp(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,ph(e,i,n,t),e=gh(null,e,i,!0,o,t)):(e.tag=0,Ot&&o&&op(e),An(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ju(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nw(i),n=_i(i,n),r){case 0:e=vh(null,e,i,n,t);break e;case 1:e=Pv(null,e,i,n,t);break e;case 11:e=Tv(null,e,i,n,t);break e;case 14:e=Cv(null,e,i,_i(i.type,n),t);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),vh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Pv(n,e,i,r,t);case 3:e:{if(ox(e),n===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Ay(n,e),dc(e,i,null,t);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Us(Error(Se(423)),e),e=Av(n,e,i,t,r);break e}else if(i!==r){r=Us(Error(Se(424)),e),e=Av(n,e,i,t,r);break e}else for(Zn=Rr(e.stateNode.containerInfo.firstChild),Qn=e,Ot=!0,Mi=null,t=Iy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Is(),i===r){e=lr(n,e,t);break e}An(n,e,i,t)}e=e.child}return e;case 5:return Oy(e),n===null&&fh(e),i=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,l=r.children,sh(i,r)?l=null:o!==null&&sh(i,o)&&(e.flags|=32),rx(n,e),An(n,e,l,t),e.child;case 6:return n===null&&fh(e),null;case 13:return sx(n,e,t);case 4:return hp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Os(e,null,i,t):An(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),Tv(n,e,i,r,t);case 7:return An(n,e,e.pendingProps,t),e.child;case 8:return An(n,e,e.pendingProps.children,t),e.child;case 12:return An(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Ct(cc,i._currentValue),i._currentValue=l,o!==null)if(Ai(o.value,l)){if(o.children===r.children&&!Vn.current){e=lr(n,e,t);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var d=a.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=rr(-1,t&-t),d.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?d.next=d:(d.next=m.next,m.next=d),p.pending=d}}o.lanes|=t,d=o.alternate,d!==null&&(d.lanes|=t),dh(o.return,t,e),a.lanes|=t;break}d=d.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Se(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),dh(l,t,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}An(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,t),r=hi(r),i=i(r),e.flags|=1,An(n,e,i,t),e.child;case 14:return i=e.type,r=_i(i,e.pendingProps),r=_i(i.type,r),Cv(n,e,i,r,t);case 15:return nx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),ju(n,e),e.tag=1,Gn(i)?(n=!0,ac(e)):n=!1,Es(e,t),Ry(e,i,r),ph(e,i,r,t),gh(null,e,i,!0,n,t);case 19:return ax(n,e,t);case 22:return ix(n,e,t)}throw Error(Se(156,e.tag))};function wx(n,e){return Y0(n,e)}function tw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,e,t,i){return new tw(n,e,t,i)}function Pp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nw(n){if(typeof n=="function")return Pp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qh)return 11;if(n===$h)return 14}return 2}function Nr(n,e){var t=n.alternate;return t===null?(t=fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function $u(n,e,t,i,r,o){var l=2;if(i=n,typeof n=="function")Pp(n)&&(l=1);else if(typeof n=="string")l=5;else e:switch(n){case as:return vo(t.children,r,o,e);case Xh:l=8,r|=8;break;case zd:return n=fi(12,t,e,r|2),n.elementType=zd,n.lanes=o,n;case Fd:return n=fi(13,t,e,r),n.elementType=Fd,n.lanes=o,n;case Bd:return n=fi(19,t,e,r),n.elementType=Bd,n.lanes=o,n;case L0:return Uc(t,r,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D0:l=10;break e;case R0:l=9;break e;case qh:l=11;break e;case $h:l=14;break e;case Sr:l=16,i=null;break e}throw Error(Se(130,n==null?n:typeof n,""))}return e=fi(l,t,e,r),e.elementType=n,e.type=i,e.lanes=o,e}function vo(n,e,t,i){return n=fi(7,n,i,e),n.lanes=t,n}function Uc(n,e,t,i){return n=fi(22,n,i,e),n.elementType=L0,n.lanes=t,n.stateNode={isHidden:!1},n}function $f(n,e,t){return n=fi(6,n,null,e),n.lanes=t,n}function Yf(n,e,t){return e=fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function iw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Af(0),this.expirationTimes=Af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Af(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ap(n,e,t,i,r,o,l,a,d){return n=new iw(n,e,t,a,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=fi(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(o),n}function rw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function bx(n){if(!n)return kr;n=n._reactInternals;e:{if(Ao(n)!==n||n.tag!==1)throw Error(Se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(n.tag===1){var t=n.type;if(Gn(t))return wy(n,t,e)}return e}function Ex(n,e,t,i,r,o,l,a,d){return n=Ap(t,i,!0,n,r,o,l,a,d),n.context=bx(null),t=n.current,i=Dn(),r=Or(t),o=rr(i,r),o.callback=e??null,Lr(t,o,r),n.current.lanes=r,vl(n,r,i),Hn(n,i),n}function kc(n,e,t,i){var r=e.current,o=Dn(),l=Or(r);return t=bx(t),e.context===null?e.context=t:e.pendingContext=t,e=rr(o,l),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Lr(r,e,l),n!==null&&(Ci(n,r,l,o),Gu(n,r,l)),l}function _c(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Dp(n,e){Fv(n,e),(n=n.alternate)&&Fv(n,e)}function ow(){return null}var Tx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rp(n){this._internalRoot=n}zc.prototype.render=Rp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Se(409));kc(n,e,null,null)};zc.prototype.unmount=Rp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;wo(function(){kc(null,n,null,null)}),e[sr]=null}};function zc(n){this._internalRoot=n}zc.prototype.unstable_scheduleHydration=function(n){if(n){var e=ny();n={blockedOn:null,target:n,priority:e};for(var t=0;t<wr.length&&e!==0&&e<wr[t].priority;t++);wr.splice(t,0,n),t===0&&ry(n)}};function Lp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function sw(n,e,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var p=_c(l);o.call(p)}}var l=Ex(e,i,n,0,null,!1,!1,"",Bv);return n._reactRootContainer=l,n[sr]=l.current,Za(n.nodeType===8?n.parentNode:n),wo(),l}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var p=_c(d);a.call(p)}}var d=Ap(n,0,!1,null,null,!1,!1,"",Bv);return n._reactRootContainer=d,n[sr]=d.current,Za(n.nodeType===8?n.parentNode:n),wo(function(){kc(e,d,t,i)}),d}function Bc(n,e,t,i,r){var o=t._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var d=_c(l);a.call(d)}}kc(e,l,n,r)}else l=sw(t,e,n,r,i);return _c(l)}ey=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Pa(e.pendingLanes);t!==0&&(Zh(e,t|1),Hn(e,Wt()),!(pt&6)&&(ks=Wt()+500,Gr()))}break;case 13:wo(function(){var i=ar(n,1);if(i!==null){var r=Dn();Ci(i,n,1,r)}}),Dp(n,1)}};Qh=function(n){if(n.tag===13){var e=ar(n,134217728);if(e!==null){var t=Dn();Ci(e,n,134217728,t)}Dp(n,134217728)}};ty=function(n){if(n.tag===13){var e=Or(n),t=ar(n,e);if(t!==null){var i=Dn();Ci(t,n,e,i)}Dp(n,e)}};ny=function(){return xt};iy=function(n,e){var t=xt;try{return xt=n,e()}finally{xt=t}};Kd=function(n,e,t){switch(e){case"input":if(Hd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Dc(i);if(!r)throw Error(Se(90));O0(i),Hd(i,r)}}}break;case"textarea":U0(n,t);break;case"select":e=t.value,e!=null&&Ss(n,!!t.multiple,e,!1)}};H0=Ep;W0=wo;var aw={usingClientEntryPoint:!1,Events:[yl,fs,Dc,V0,G0,Ep]},xa={findFiberByHostInstance:uo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lw={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=q0(n),n===null?null:n.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Tc=hu.inject(lw),Bi=hu}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aw;ei.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(e))throw Error(Se(200));return rw(n,e,null,t)};ei.createRoot=function(n,e){if(!Lp(n))throw Error(Se(299));var t=!1,i="",r=Tx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ap(n,1,!1,null,null,t,!1,i,r),n[sr]=e.current,Za(n.nodeType===8?n.parentNode:n),new Rp(e)};ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Se(188)):(n=Object.keys(n).join(","),Error(Se(268,n)));return n=q0(e),n=n===null?null:n.stateNode,n};ei.flushSync=function(n){return wo(n)};ei.hydrate=function(n,e,t){if(!Fc(e))throw Error(Se(200));return Bc(null,n,e,!0,t)};ei.hydrateRoot=function(n,e,t){if(!Lp(n))throw Error(Se(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",l=Tx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),e=Ex(e,null,n,1,t??null,r,!1,o,l),n[sr]=e.current,Za(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new zc(e)};ei.render=function(n,e,t){if(!Fc(e))throw Error(Se(200));return Bc(null,n,e,!1,t)};ei.unmountComponentAtNode=function(n){if(!Fc(n))throw Error(Se(40));return n._reactRootContainer?(wo(function(){Bc(null,null,n,!1,function(){n._reactRootContainer=null,n[sr]=null})}),!0):!1};ei.unstable_batchedUpdates=Ep;ei.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Fc(t))throw Error(Se(200));if(n==null||n._reactInternals===void 0)throw Error(Se(38));return Bc(n,e,t,!1,i)};ei.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=ei})(oM);var Vv=Nd;Od.createRoot=Vv.createRoot,Od.hydrateRoot=Vv.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="151",Vo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uw=0,Gv=1,cw=2,Op=1,Cx=2,Da=3,zr=0,Rn=1,tr=2,un=0,Cs=1,Ah=2,Hv=3,Wv=4,Sc=5,Er=100,fw=101,dw=102,jv=103,Xv=104,Dh=200,hw=201,pw=202,mw=203,Px=204,Ax=205,Dx=206,vw=207,Rx=208,gw=209,yw=210,xw=0,_w=1,Sw=2,Rh=3,Mw=4,ww=5,bw=6,Ew=7,Vc=0,Tw=1,Cw=2,Gi=0,Pw=1,Lx=2,Aw=3,Dw=4,Rw=5,Ix=300,zs=301,Fs=302,Mc=303,Lh=304,Gc=306,bo=1e3,bi=1001,Ih=1002,Qt=1003,qv=1004,Kf=1005,ui=1006,Lw=1007,sl=1008,Eo=1009,Iw=1010,Ow=1011,Np=1012,Nw=1013,ho=1014,po=1015,al=1016,Uw=1017,kw=1018,Ps=1020,zw=1021,Ei=1023,Fw=1024,Bw=1025,go=1026,Bs=1027,Vw=1028,Gw=1029,Hw=1030,Ww=1031,jw=1033,Zf=33776,Qf=33777,Jf=33778,ed=33779,$v=35840,Yv=35841,Kv=35842,Zv=35843,Xw=36196,Qv=37492,Jv=37496,eg=37808,tg=37809,ng=37810,ig=37811,rg=37812,og=37813,sg=37814,ag=37815,lg=37816,ug=37817,cg=37818,fg=37819,dg=37820,hg=37821,td=36492,qw=36283,pg=36284,mg=36285,vg=36286,To=3e3,bt=3001,$w=3200,_l=3201,Sl=0,Yw=1,ki="srgb",ll="srgb-linear",Ox="display-p3",nd=7680,Kw=519,gg=35044,yg="300 es",Oh=1035;class Do{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,wc=180/Math.PI;function Ml(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function Zw(n,e){return(n%e+e)%e}function rd(n,e,t){return(1-t)*n+t*e}function xg(n){return(n&n-1)===0&&n!==0}function Qw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pu(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,o,l,a,d,p){const m=this.elements;return m[0]=e,m[1]=r,m[2]=a,m[3]=t,m[4]=o,m[5]=d,m[6]=i,m[7]=l,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],a=i[3],d=i[6],p=i[1],m=i[4],g=i[7],y=i[2],_=i[5],E=i[8],A=r[0],x=r[3],h=r[6],S=r[1],b=r[4],P=r[7],D=r[2],O=r[5],B=r[8];return o[0]=l*A+a*S+d*D,o[3]=l*x+a*b+d*O,o[6]=l*h+a*P+d*B,o[1]=p*A+m*S+g*D,o[4]=p*x+m*b+g*O,o[7]=p*h+m*P+g*B,o[2]=y*A+_*S+E*D,o[5]=y*x+_*b+E*O,o[8]=y*h+_*P+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],p=e[7],m=e[8];return t*l*m-t*a*p-i*o*m+i*a*d+r*o*p-r*l*d}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],p=e[7],m=e[8],g=m*l-a*p,y=a*d-m*o,_=p*o-l*d,E=t*g+i*y+r*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(r*p-m*i)*A,e[2]=(a*i-r*l)*A,e[3]=y*A,e[4]=(m*t-r*d)*A,e[5]=(r*o-a*t)*A,e[6]=_*A,e[7]=(i*d-p*t)*A,e[8]=(l*t-i*o)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,l,a){const d=Math.cos(o),p=Math.sin(o);return this.set(i*d,i*p,-i*(d*l+p*a)+l+e,-r*p,r*d,-r*(-p*l+d*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(od.makeScale(e,t)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,t){return this.premultiply(od.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new ft;function Nx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ul(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function As(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Jw=new ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),eb=new ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function tb(n){return n.convertSRGBToLinear().applyMatrix3(eb)}function nb(n){return n.applyMatrix3(Jw).convertLinearToSRGB()}const ib={[ll]:n=>n,[ki]:n=>n.convertSRGBToLinear(),[Ox]:tb},rb={[ll]:n=>n,[ki]:n=>n.convertLinearToSRGB(),[Ox]:nb},qn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return ll},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ib[e],r=rb[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ho;class Ux{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ho===void 0&&(Ho=ul("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ho}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ul("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=As(o[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class kx{constructor(e=null){this.isSource=!0,this.uuid=Ml(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?o.push(ad(r[l].image)):o.push(ad(r[l]))}else o=ad(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function ad(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ux.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ob=0;class Wn extends Do{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,i=bi,r=bi,o=ui,l=sl,a=Ei,d=Eo,p=Wn.DEFAULT_ANISOTROPY,m=To){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Ml(),this.name="",this.source=new kx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=p,this.format=a,this.internalFormat=null,this.type=d,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Ix;Wn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const d=e.elements,p=d[0],m=d[4],g=d[8],y=d[1],_=d[5],E=d[9],A=d[2],x=d[6],h=d[10];if(Math.abs(m-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+x)<.1&&Math.abs(p+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,P=(_+1)/2,D=(h+1)/2,O=(m+y)/4,B=(g+A)/4,k=(E+x)/4;return b>P&&b>D?b<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(b),r=O/i,o=B/i):P>D?P<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(P),i=O/r,o=k/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=B/o,r=k/o),this.set(i,r,o,t),this}let S=Math.sqrt((x-E)*(x-E)+(g-A)*(g-A)+(y-m)*(y-m));return Math.abs(S)<.001&&(S=1),this.x=(x-E)/S,this.y=(g-A)/S,this.z=(y-m)/S,this.w=Math.acos((p+_+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends Do{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ui,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zx extends Wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sb extends Wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,l,a){let d=i[r+0],p=i[r+1],m=i[r+2],g=i[r+3];const y=o[l+0],_=o[l+1],E=o[l+2],A=o[l+3];if(a===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(a===1){e[t+0]=y,e[t+1]=_,e[t+2]=E,e[t+3]=A;return}if(g!==A||d!==y||p!==_||m!==E){let x=1-a;const h=d*y+p*_+m*E+g*A,S=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const D=Math.sqrt(b),O=Math.atan2(D,h*S);x=Math.sin(x*O)/D,a=Math.sin(a*O)/D}const P=a*S;if(d=d*x+y*P,p=p*x+_*P,m=m*x+E*P,g=g*x+A*P,x===1-a){const D=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=D,p*=D,m*=D,g*=D}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,r,o,l){const a=i[r],d=i[r+1],p=i[r+2],m=i[r+3],g=o[l],y=o[l+1],_=o[l+2],E=o[l+3];return e[t]=a*E+m*g+d*_-p*y,e[t+1]=d*E+m*y+p*g-a*_,e[t+2]=p*E+m*_+a*y-d*g,e[t+3]=m*E-a*g-d*y-p*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,l=e._order,a=Math.cos,d=Math.sin,p=a(i/2),m=a(r/2),g=a(o/2),y=d(i/2),_=d(r/2),E=d(o/2);switch(l){case"XYZ":this._x=y*m*g+p*_*E,this._y=p*_*g-y*m*E,this._z=p*m*E+y*_*g,this._w=p*m*g-y*_*E;break;case"YXZ":this._x=y*m*g+p*_*E,this._y=p*_*g-y*m*E,this._z=p*m*E-y*_*g,this._w=p*m*g+y*_*E;break;case"ZXY":this._x=y*m*g-p*_*E,this._y=p*_*g+y*m*E,this._z=p*m*E+y*_*g,this._w=p*m*g-y*_*E;break;case"ZYX":this._x=y*m*g-p*_*E,this._y=p*_*g+y*m*E,this._z=p*m*E-y*_*g,this._w=p*m*g+y*_*E;break;case"YZX":this._x=y*m*g+p*_*E,this._y=p*_*g+y*m*E,this._z=p*m*E-y*_*g,this._w=p*m*g-y*_*E;break;case"XZY":this._x=y*m*g-p*_*E,this._y=p*_*g-y*m*E,this._z=p*m*E+y*_*g,this._w=p*m*g+y*_*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],l=t[1],a=t[5],d=t[9],p=t[2],m=t[6],g=t[10],y=i+a+g;if(y>0){const _=.5/Math.sqrt(y+1);this._w=.25/_,this._x=(m-d)*_,this._y=(o-p)*_,this._z=(l-r)*_}else if(i>a&&i>g){const _=2*Math.sqrt(1+i-a-g);this._w=(m-d)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(o+p)/_}else if(a>g){const _=2*Math.sqrt(1+a-i-g);this._w=(o-p)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(d+m)/_}else{const _=2*Math.sqrt(1+g-i-a);this._w=(l-r)/_,this._x=(o+p)/_,this._y=(d+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,l=e._w,a=t._x,d=t._y,p=t._z,m=t._w;return this._x=i*m+l*a+r*p-o*d,this._y=r*m+l*d+o*a-i*p,this._z=o*m+l*p+i*d-r*a,this._w=l*m-i*a-r*d-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let a=l*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const d=1-a*a;if(d<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),m=Math.atan2(p,a),g=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=l*g+this._w*y,this._x=i*g+this._x*y,this._y=r*g+this._y*y,this._z=o*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_g.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,l=e.y,a=e.z,d=e.w,p=d*t+l*r-a*i,m=d*i+a*t-o*r,g=d*r+o*i-l*t,y=-o*t-l*i-a*r;return this.x=p*d+y*-o+m*-a-g*-l,this.y=m*d+y*-l+g*-o-p*-a,this.z=g*d+y*-a+p*-l-m*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,l=t.x,a=t.y,d=t.z;return this.x=r*d-o*a,this.y=o*l-i*d,this.z=i*a-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ld=new X,_g=new Co;class wl{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox),Wo.applyMatrix4(e.matrixWorld),this.union(Wo);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let l=0,a=o.count;l<a;l++)$i.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint($i)}else r.boundingBox===null&&r.computeBoundingBox(),Wo.copy(r.boundingBox),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),mu.subVectors(this.max,_a),jo.subVectors(e.a,_a),Xo.subVectors(e.b,_a),qo.subVectors(e.c,_a),vr.subVectors(Xo,jo),gr.subVectors(qo,Xo),eo.subVectors(jo,qo);let t=[0,-vr.z,vr.y,0,-gr.z,gr.y,0,-eo.z,eo.y,vr.z,0,-vr.x,gr.z,0,-gr.x,eo.z,0,-eo.x,-vr.y,vr.x,0,-gr.y,gr.x,0,-eo.y,eo.x,0];return!ud(t,jo,Xo,qo,mu)||(t=[1,0,0,0,1,0,0,0,1],!ud(t,jo,Xo,qo,mu))?!1:(vu.crossVectors(vr,gr),t=[vu.x,vu.y,vu.z],ud(t,jo,Xo,qo,mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new X,new X,new X,new X,new X,new X,new X,new X],$i=new X,Wo=new wl,jo=new X,Xo=new X,qo=new X,vr=new X,gr=new X,eo=new X,_a=new X,mu=new X,vu=new X,to=new X;function ud(n,e,t,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){to.fromArray(n,o);const a=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),d=e.dot(to),p=t.dot(to),m=i.dot(to);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>a)return!1}return!0}const ab=new wl,Sa=new X,cd=new X;class Up{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ab.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(cd)),this.expandByPoint(Sa.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new X,fd=new X,gu=new X,yr=new X,dd=new X,yu=new X,hd=new X;class lb{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fd.copy(e).add(t).multiplyScalar(.5),gu.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(fd);const o=e.distanceTo(t)*.5,l=-this.direction.dot(gu),a=yr.dot(this.direction),d=-yr.dot(gu),p=yr.lengthSq(),m=Math.abs(1-l*l);let g,y,_,E;if(m>0)if(g=l*d-a,y=l*a-d,E=o*m,g>=0)if(y>=-E)if(y<=E){const A=1/m;g*=A,y*=A,_=g*(g+l*y+2*a)+y*(l*g+y+2*d)+p}else y=o,g=Math.max(0,-(l*y+a)),_=-g*g+y*(y+2*d)+p;else y=-o,g=Math.max(0,-(l*y+a)),_=-g*g+y*(y+2*d)+p;else y<=-E?(g=Math.max(0,-(-l*o+a)),y=g>0?-o:Math.min(Math.max(-o,-d),o),_=-g*g+y*(y+2*d)+p):y<=E?(g=0,y=Math.min(Math.max(-o,-d),o),_=y*(y+2*d)+p):(g=Math.max(0,-(l*o+a)),y=g>0?o:Math.min(Math.max(-o,-d),o),_=-g*g+y*(y+2*d)+p);else y=l>0?-o:o,g=Math.max(0,-(l*y+a)),_=-g*g+y*(y+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(fd).addScaledVector(gu,y),_}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),a=i-l,d=i+l;return d<0?null:a<0?this.at(d,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,l,a,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(i=(e.min.x-y.x)*p,r=(e.max.x-y.x)*p):(i=(e.max.x-y.x)*p,r=(e.min.x-y.x)*p),m>=0?(o=(e.min.y-y.y)*m,l=(e.max.y-y.y)*m):(o=(e.max.y-y.y)*m,l=(e.min.y-y.y)*m),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),g>=0?(a=(e.min.z-y.z)*g,d=(e.max.z-y.z)*g):(a=(e.max.z-y.z)*g,d=(e.min.z-y.z)*g),i>d||a>r)||((a>i||i!==i)&&(i=a),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,r,o){dd.subVectors(t,e),yu.subVectors(i,e),hd.crossVectors(dd,yu);let l=this.direction.dot(hd),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;yr.subVectors(this.origin,e);const d=a*this.direction.dot(yu.crossVectors(yr,yu));if(d<0)return null;const p=a*this.direction.dot(dd.cross(yr));if(p<0||d+p>l)return null;const m=-a*yr.dot(hd);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,o,l,a,d,p,m,g,y,_,E,A,x){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=o,h[5]=l,h[9]=a,h[13]=d,h[2]=p,h[6]=m,h[10]=g,h[14]=y,h[3]=_,h[7]=E,h[11]=A,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),o=1/$o.setFromMatrixColumn(e,1).length(),l=1/$o.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),a=Math.sin(i),d=Math.cos(r),p=Math.sin(r),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const y=l*m,_=l*g,E=a*m,A=a*g;t[0]=d*m,t[4]=-d*g,t[8]=p,t[1]=_+E*p,t[5]=y-A*p,t[9]=-a*d,t[2]=A-y*p,t[6]=E+_*p,t[10]=l*d}else if(e.order==="YXZ"){const y=d*m,_=d*g,E=p*m,A=p*g;t[0]=y+A*a,t[4]=E*a-_,t[8]=l*p,t[1]=l*g,t[5]=l*m,t[9]=-a,t[2]=_*a-E,t[6]=A+y*a,t[10]=l*d}else if(e.order==="ZXY"){const y=d*m,_=d*g,E=p*m,A=p*g;t[0]=y-A*a,t[4]=-l*g,t[8]=E+_*a,t[1]=_+E*a,t[5]=l*m,t[9]=A-y*a,t[2]=-l*p,t[6]=a,t[10]=l*d}else if(e.order==="ZYX"){const y=l*m,_=l*g,E=a*m,A=a*g;t[0]=d*m,t[4]=E*p-_,t[8]=y*p+A,t[1]=d*g,t[5]=A*p+y,t[9]=_*p-E,t[2]=-p,t[6]=a*d,t[10]=l*d}else if(e.order==="YZX"){const y=l*d,_=l*p,E=a*d,A=a*p;t[0]=d*m,t[4]=A-y*g,t[8]=E*g+_,t[1]=g,t[5]=l*m,t[9]=-a*m,t[2]=-p*m,t[6]=_*g+E,t[10]=y-A*g}else if(e.order==="XZY"){const y=l*d,_=l*p,E=a*d,A=a*p;t[0]=d*m,t[4]=-g,t[8]=p*m,t[1]=y*g+A,t[5]=l*m,t[9]=_*g-E,t[2]=E*g-_,t[6]=a*m,t[10]=A*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ub,e,cb)}lookAt(e,t,i){const r=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),xr.crossVectors(i,$n),xr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),xr.crossVectors(i,$n)),xr.normalize(),xu.crossVectors($n,xr),r[0]=xr.x,r[4]=xu.x,r[8]=$n.x,r[1]=xr.y,r[5]=xu.y,r[9]=$n.y,r[2]=xr.z,r[6]=xu.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],a=i[4],d=i[8],p=i[12],m=i[1],g=i[5],y=i[9],_=i[13],E=i[2],A=i[6],x=i[10],h=i[14],S=i[3],b=i[7],P=i[11],D=i[15],O=r[0],B=r[4],k=r[8],R=r[12],N=r[1],se=r[5],ue=r[9],$=r[13],Z=r[2],W=r[6],fe=r[10],me=r[14],j=r[3],J=r[7],re=r[11],Te=r[15];return o[0]=l*O+a*N+d*Z+p*j,o[4]=l*B+a*se+d*W+p*J,o[8]=l*k+a*ue+d*fe+p*re,o[12]=l*R+a*$+d*me+p*Te,o[1]=m*O+g*N+y*Z+_*j,o[5]=m*B+g*se+y*W+_*J,o[9]=m*k+g*ue+y*fe+_*re,o[13]=m*R+g*$+y*me+_*Te,o[2]=E*O+A*N+x*Z+h*j,o[6]=E*B+A*se+x*W+h*J,o[10]=E*k+A*ue+x*fe+h*re,o[14]=E*R+A*$+x*me+h*Te,o[3]=S*O+b*N+P*Z+D*j,o[7]=S*B+b*se+P*W+D*J,o[11]=S*k+b*ue+P*fe+D*re,o[15]=S*R+b*$+P*me+D*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],l=e[1],a=e[5],d=e[9],p=e[13],m=e[2],g=e[6],y=e[10],_=e[14],E=e[3],A=e[7],x=e[11],h=e[15];return E*(+o*d*g-r*p*g-o*a*y+i*p*y+r*a*_-i*d*_)+A*(+t*d*_-t*p*y+o*l*y-r*l*_+r*p*m-o*d*m)+x*(+t*p*g-t*a*_-o*l*g+i*l*_+o*a*m-i*p*m)+h*(-r*a*m-t*d*g+t*a*y+r*l*g-i*l*y+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],a=e[5],d=e[6],p=e[7],m=e[8],g=e[9],y=e[10],_=e[11],E=e[12],A=e[13],x=e[14],h=e[15],S=g*x*p-A*y*p+A*d*_-a*x*_-g*d*h+a*y*h,b=E*y*p-m*x*p-E*d*_+l*x*_+m*d*h-l*y*h,P=m*A*p-E*g*p+E*a*_-l*A*_-m*a*h+l*g*h,D=E*g*d-m*A*d-E*a*y+l*A*y+m*a*x-l*g*x,O=t*S+i*b+r*P+o*D;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=S*B,e[1]=(A*y*o-g*x*o-A*r*_+i*x*_+g*r*h-i*y*h)*B,e[2]=(a*x*o-A*d*o+A*r*p-i*x*p-a*r*h+i*d*h)*B,e[3]=(g*d*o-a*y*o-g*r*p+i*y*p+a*r*_-i*d*_)*B,e[4]=b*B,e[5]=(m*x*o-E*y*o+E*r*_-t*x*_-m*r*h+t*y*h)*B,e[6]=(E*d*o-l*x*o-E*r*p+t*x*p+l*r*h-t*d*h)*B,e[7]=(l*y*o-m*d*o+m*r*p-t*y*p-l*r*_+t*d*_)*B,e[8]=P*B,e[9]=(E*g*o-m*A*o-E*i*_+t*A*_+m*i*h-t*g*h)*B,e[10]=(l*A*o-E*a*o+E*i*p-t*A*p-l*i*h+t*a*h)*B,e[11]=(m*a*o-l*g*o-m*i*p+t*g*p+l*i*_-t*a*_)*B,e[12]=D*B,e[13]=(m*A*r-E*g*r+E*i*y-t*A*y-m*i*x+t*g*x)*B,e[14]=(E*a*r-l*A*r-E*i*d+t*A*d+l*i*x-t*a*x)*B,e[15]=(l*g*r-m*a*r+m*i*d-t*g*d-l*i*y+t*a*y)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,l=e.x,a=e.y,d=e.z,p=o*l,m=o*a;return this.set(p*l+i,p*a-r*d,p*d+r*a,0,p*a+r*d,m*a+i,m*d-r*l,0,p*d-r*a,m*d+r*l,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,l=t._y,a=t._z,d=t._w,p=o+o,m=l+l,g=a+a,y=o*p,_=o*m,E=o*g,A=l*m,x=l*g,h=a*g,S=d*p,b=d*m,P=d*g,D=i.x,O=i.y,B=i.z;return r[0]=(1-(A+h))*D,r[1]=(_+P)*D,r[2]=(E-b)*D,r[3]=0,r[4]=(_-P)*O,r[5]=(1-(y+h))*O,r[6]=(x+S)*O,r[7]=0,r[8]=(E+b)*B,r[9]=(x-S)*B,r[10]=(1-(y+A))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=$o.set(r[0],r[1],r[2]).length();const l=$o.set(r[4],r[5],r[6]).length(),a=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const p=1/o,m=1/l,g=1/a;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=m,gi.elements[5]*=m,gi.elements[6]*=m,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,t.setFromRotationMatrix(gi),i.x=o,i.y=l,i.z=a,this}makePerspective(e,t,i,r,o,l){const a=this.elements,d=2*o/(t-e),p=2*o/(i-r),m=(t+e)/(t-e),g=(i+r)/(i-r),y=-(l+o)/(l-o),_=-2*l*o/(l-o);return a[0]=d,a[4]=0,a[8]=m,a[12]=0,a[1]=0,a[5]=p,a[9]=g,a[13]=0,a[2]=0,a[6]=0,a[10]=y,a[14]=_,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,l){const a=this.elements,d=1/(t-e),p=1/(i-r),m=1/(l-o),g=(t+e)*d,y=(i+r)*p,_=(l+o)*m;return a[0]=2*d,a[4]=0,a[8]=0,a[12]=-g,a[1]=0,a[5]=2*p,a[9]=0,a[13]=-y,a[2]=0,a[6]=0,a[10]=-2*m,a[14]=-_,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $o=new X,gi=new Gt,ub=new X(0,0,0),cb=new X(1,1,1),xr=new X,xu=new X,$n=new X,Sg=new Gt,Mg=new Co;class Hc{constructor(e=0,t=0,i=0,r=Hc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],a=r[8],d=r[1],p=r[5],m=r[9],g=r[2],y=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(wn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,_),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-m,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hc.DEFAULT_ORDER="XYZ";class Fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fb=0;const wg=new X,Yo=new Co,Ki=new Gt,_u=new X,Ma=new X,db=new X,hb=new Co,bg=new X(1,0,0),Eg=new X(0,1,0),Tg=new X(0,0,1),pb={type:"added"},Cg={type:"removed"};class tn extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new X,t=new Hc,i=new Co,r=new X(1,1,1);function o(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.multiply(Yo),this}rotateOnWorldAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.premultiply(Yo),this}rotateX(e){return this.rotateOnAxis(bg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_u.copy(e):_u.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ma,_u,this.up):Ki.lookAt(_u,Ma,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Yo.setFromRotationMatrix(Ki),this.quaternion.premultiply(Yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,db),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,hb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,d){return a[d.uuid]===void 0&&(a[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const d=a.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let d=0,p=this.material.length;d<p;d++)a.push(o(e.materials,this.material[d]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const d=this.animations[a];r.animations.push(o(e.animations,d))}}if(t){const a=l(e.geometries),d=l(e.materials),p=l(e.textures),m=l(e.images),g=l(e.shapes),y=l(e.skeletons),_=l(e.animations),E=l(e.nodes);a.length>0&&(i.geometries=a),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),y.length>0&&(i.skeletons=y),_.length>0&&(i.animations=_),E.length>0&&(i.nodes=E)}return i.object=r,i;function l(a){const d=[];for(const p in a){const m=a[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new X(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new X,Zi=new X,pd=new X,Qi=new X,Ko=new X,Zo=new X,Pg=new X,md=new X,vd=new X,gd=new X;let Su=!1;class wi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yi.subVectors(e,t),r.cross(yi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){yi.subVectors(r,t),Zi.subVectors(i,t),pd.subVectors(e,t);const l=yi.dot(yi),a=yi.dot(Zi),d=yi.dot(pd),p=Zi.dot(Zi),m=Zi.dot(pd),g=l*p-a*a;if(g===0)return o.set(-2,-1,-1);const y=1/g,_=(p*d-a*m)*y,E=(l*m-a*d)*y;return o.set(1-_-E,E,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qi),Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,t,i,r,o,l,a,d){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),this.getInterpolation(e,t,i,r,o,l,a,d)}static getInterpolation(e,t,i,r,o,l,a,d){return this.getBarycoord(e,t,i,r,Qi),d.setScalar(0),d.addScaledVector(o,Qi.x),d.addScaledVector(l,Qi.y),d.addScaledVector(a,Qi.z),d}static isFrontFacing(e,t,i,r){return yi.subVectors(i,t),Zi.subVectors(e,t),yi.cross(Zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),yi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return Su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Su=!0),wi.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let l,a;Ko.subVectors(r,i),Zo.subVectors(o,i),md.subVectors(e,i);const d=Ko.dot(md),p=Zo.dot(md);if(d<=0&&p<=0)return t.copy(i);vd.subVectors(e,r);const m=Ko.dot(vd),g=Zo.dot(vd);if(m>=0&&g<=m)return t.copy(r);const y=d*g-m*p;if(y<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(i).addScaledVector(Ko,l);gd.subVectors(e,o);const _=Ko.dot(gd),E=Zo.dot(gd);if(E>=0&&_<=E)return t.copy(o);const A=_*p-d*E;if(A<=0&&p>=0&&E<=0)return a=p/(p-E),t.copy(i).addScaledVector(Zo,a);const x=m*E-_*g;if(x<=0&&g-m>=0&&_-E>=0)return Pg.subVectors(o,r),a=(g-m)/(g-m+(_-E)),t.copy(r).addScaledVector(Pg,a);const h=1/(x+A+y);return l=A*h,a=y*h,t.copy(i).addScaledVector(Ko,l).addScaledVector(Zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mb=0;class Hr extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Cs,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Px,this.blendDst=Ax,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nd,this.stencilZFail=nd,this.stencilZPass=nd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const a in o){const d=o[a];delete d.metadata,l.push(d)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function yd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qn.workingColorSpace){return this.r=e,this.g=t,this.b=i,qn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qn.workingColorSpace){if(e=Zw(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,l=2*i-o;this.r=yd(l,o,e+1/3),this.g=yd(l,o,e),this.b=yd(l,o,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,t=ki){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,qn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,qn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const d=parseFloat(o[1])/360,p=parseFloat(o[2])/100,m=parseFloat(o[3])/100;return i(o[4]),this.setHSL(d,p,m,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ki){const i=Bx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=sd(e.r),this.g=sd(e.g),this.b=sd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ki){return qn.fromWorkingColorSpace(Sn.copy(this),e),wn(Sn.r*255,0,255)<<16^wn(Sn.g*255,0,255)<<8^wn(Sn.b*255,0,255)<<0}getHexString(e=ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qn.workingColorSpace){qn.fromWorkingColorSpace(Sn.copy(this),t);const i=Sn.r,r=Sn.g,o=Sn.b,l=Math.max(i,r,o),a=Math.min(i,r,o);let d,p;const m=(a+l)/2;if(a===l)d=0,p=0;else{const g=l-a;switch(p=m<=.5?g/(l+a):g/(2-l-a),l){case i:d=(r-o)/g+(r<o?6:0);break;case r:d=(o-i)/g+2;break;case o:d=(i-r)/g+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=qn.workingColorSpace){return qn.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ki){qn.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,i=Sn.g,r=Sn.b;return e!==ki?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(xi),xi.h+=e,xi.s+=t,xi.l+=i,this.setHSL(xi.h,xi.s,xi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Mu);const i=rd(xi.h,Mu.h,t),r=rd(xi.s,Mu.s,t),o=rd(xi.l,Mu.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ze;Ze.NAMES=Bx;class yo extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new X,wu=new Ne;class Pi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wu.fromBufferAttribute(this,t),wu.applyMatrix3(e),this.setXY(t,wu.x,wu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vx extends Pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gx extends Pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ln extends Pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vb=0;const si=new Gt,xd=new tn,Qo=new X,Yn=new wl,wa=new wl,ln=new X;class Di extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nx(e)?Gx:Vx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ft().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const a=t[o];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Yn.min,wa.min),Yn.expandByPoint(ln),ln.addVectors(Yn.max,wa.max),Yn.expandByPoint(ln)):(Yn.expandByPoint(wa.min),Yn.expandByPoint(wa.max))}Yn.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)ln.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let o=0,l=t.length;o<l;o++){const a=t[o],d=this.morphTargetsRelative;for(let p=0,m=a.count;p<m;p++)ln.fromBufferAttribute(a,p),d&&(Qo.fromBufferAttribute(e,p),ln.add(Qo)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,l=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a),4));const d=this.getAttribute("tangent").array,p=[],m=[];for(let N=0;N<a;N++)p[N]=new X,m[N]=new X;const g=new X,y=new X,_=new X,E=new Ne,A=new Ne,x=new Ne,h=new X,S=new X;function b(N,se,ue){g.fromArray(r,N*3),y.fromArray(r,se*3),_.fromArray(r,ue*3),E.fromArray(l,N*2),A.fromArray(l,se*2),x.fromArray(l,ue*2),y.sub(g),_.sub(g),A.sub(E),x.sub(E);const $=1/(A.x*x.y-x.x*A.y);isFinite($)&&(h.copy(y).multiplyScalar(x.y).addScaledVector(_,-A.y).multiplyScalar($),S.copy(_).multiplyScalar(A.x).addScaledVector(y,-x.x).multiplyScalar($),p[N].add(h),p[se].add(h),p[ue].add(h),m[N].add(S),m[se].add(S),m[ue].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let N=0,se=P.length;N<se;++N){const ue=P[N],$=ue.start,Z=ue.count;for(let W=$,fe=$+Z;W<fe;W+=3)b(i[W+0],i[W+1],i[W+2])}const D=new X,O=new X,B=new X,k=new X;function R(N){B.fromArray(o,N*3),k.copy(B);const se=p[N];D.copy(se),D.sub(B.multiplyScalar(B.dot(se))).normalize(),O.crossVectors(k,se);const $=O.dot(m[N])<0?-1:1;d[N*4]=D.x,d[N*4+1]=D.y,d[N*4+2]=D.z,d[N*4+3]=$}for(let N=0,se=P.length;N<se;++N){const ue=P[N],$=ue.start,Z=ue.count;for(let W=$,fe=$+Z;W<fe;W+=3)R(i[W+0]),R(i[W+1]),R(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let y=0,_=i.count;y<_;y++)i.setXYZ(y,0,0,0);const r=new X,o=new X,l=new X,a=new X,d=new X,p=new X,m=new X,g=new X;if(e)for(let y=0,_=e.count;y<_;y+=3){const E=e.getX(y+0),A=e.getX(y+1),x=e.getX(y+2);r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,x),m.subVectors(l,o),g.subVectors(r,o),m.cross(g),a.fromBufferAttribute(i,E),d.fromBufferAttribute(i,A),p.fromBufferAttribute(i,x),a.add(m),d.add(m),p.add(m),i.setXYZ(E,a.x,a.y,a.z),i.setXYZ(A,d.x,d.y,d.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,_=t.count;y<_;y+=3)r.fromBufferAttribute(t,y+0),o.fromBufferAttribute(t,y+1),l.fromBufferAttribute(t,y+2),m.subVectors(l,o),g.subVectors(r,o),m.cross(g),i.setXYZ(y+0,m.x,m.y,m.z),i.setXYZ(y+1,m.x,m.y,m.z),i.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,d){const p=a.array,m=a.itemSize,g=a.normalized,y=new p.constructor(d.length*m);let _=0,E=0;for(let A=0,x=d.length;A<x;A++){a.isInterleavedBufferAttribute?_=d[A]*a.data.stride+a.offset:_=d[A]*m;for(let h=0;h<m;h++)y[E++]=p[_++]}return new Pi(y,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,i=this.index.array,r=this.attributes;for(const a in r){const d=r[a],p=e(d,i);t.setAttribute(a,p)}const o=this.morphAttributes;for(const a in o){const d=[],p=o[a];for(let m=0,g=p.length;m<g;m++){const y=p[m],_=e(y,i);d.push(_)}t.morphAttributes[a]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,d=l.length;a<d;a++){const p=l[a];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const p=i[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,y=p.length;g<y;g++){const _=p[g];m.push(_.toJSON(e.data))}m.length>0&&(r[d]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(t))}const o=e.morphAttributes;for(const p in o){const m=[],g=o[p];for(let y=0,_=g.length;y<_;y++)m.push(g[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let p=0,m=l.length;p<m;p++){const g=l[p];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new Gt,Oi=new lb,bu=new Up,Dg=new X,Jo=new X,es=new X,ts=new X,_d=new X,Eu=new X,Tu=new Ne,Cu=new Ne,Pu=new Ne,Rg=new X,Lg=new X,Ig=new X,Au=new X,Du=new X;class Bn extends tn{constructor(e=new Di,t=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Eu.set(0,0,0);for(let d=0,p=o.length;d<p;d++){const m=a[d],g=o[d];m!==0&&(_d.fromBufferAttribute(g,e),l?Eu.addScaledVector(_d,m):Eu.addScaledVector(_d.sub(t),m))}t.add(Eu)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),bu.copy(i.boundingSphere),bu.applyMatrix4(o),Oi.copy(e.ray).recast(e.near),bu.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(bu,Dg)===null||Oi.origin.distanceToSquared(Dg)>(e.far-e.near)**2))||(Ag.copy(o).invert(),Oi.copy(e.ray).applyMatrix4(Ag),i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1))return;let l;const a=i.index,d=i.attributes.position,p=i.attributes.uv,m=i.attributes.uv2,g=i.attributes.normal,y=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let E=0,A=y.length;E<A;E++){const x=y[E],h=r[x.materialIndex],S=Math.max(x.start,_.start),b=Math.min(a.count,Math.min(x.start+x.count,_.start+_.count));for(let P=S,D=b;P<D;P+=3){const O=a.getX(P),B=a.getX(P+1),k=a.getX(P+2);l=Ru(this,h,e,Oi,p,m,g,O,B,k),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const E=Math.max(0,_.start),A=Math.min(a.count,_.start+_.count);for(let x=E,h=A;x<h;x+=3){const S=a.getX(x),b=a.getX(x+1),P=a.getX(x+2);l=Ru(this,r,e,Oi,p,m,g,S,b,P),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}else if(d!==void 0)if(Array.isArray(r))for(let E=0,A=y.length;E<A;E++){const x=y[E],h=r[x.materialIndex],S=Math.max(x.start,_.start),b=Math.min(d.count,Math.min(x.start+x.count,_.start+_.count));for(let P=S,D=b;P<D;P+=3){const O=P,B=P+1,k=P+2;l=Ru(this,h,e,Oi,p,m,g,O,B,k),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const E=Math.max(0,_.start),A=Math.min(d.count,_.start+_.count);for(let x=E,h=A;x<h;x+=3){const S=x,b=x+1,P=x+2;l=Ru(this,r,e,Oi,p,m,g,S,b,P),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}}}function gb(n,e,t,i,r,o,l,a){let d;if(e.side===Rn?d=i.intersectTriangle(l,o,r,!0,a):d=i.intersectTriangle(r,o,l,e.side===zr,a),d===null)return null;Du.copy(a),Du.applyMatrix4(n.matrixWorld);const p=t.ray.origin.distanceTo(Du);return p<t.near||p>t.far?null:{distance:p,point:Du.clone(),object:n}}function Ru(n,e,t,i,r,o,l,a,d,p){n.getVertexPosition(a,Jo),n.getVertexPosition(d,es),n.getVertexPosition(p,ts);const m=gb(n,e,t,i,Jo,es,ts,Au);if(m){r&&(Tu.fromBufferAttribute(r,a),Cu.fromBufferAttribute(r,d),Pu.fromBufferAttribute(r,p),m.uv=wi.getInterpolation(Au,Jo,es,ts,Tu,Cu,Pu,new Ne)),o&&(Tu.fromBufferAttribute(o,a),Cu.fromBufferAttribute(o,d),Pu.fromBufferAttribute(o,p),m.uv2=wi.getInterpolation(Au,Jo,es,ts,Tu,Cu,Pu,new Ne)),l&&(Rg.fromBufferAttribute(l,a),Lg.fromBufferAttribute(l,d),Ig.fromBufferAttribute(l,p),m.normal=wi.getInterpolation(Au,Jo,es,ts,Rg,Lg,Ig,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const g={a,b:d,c:p,normal:new X,materialIndex:0};wi.getNormal(Jo,es,ts,g.normal),m.face=g}return m}class bl extends Di{constructor(e=1,t=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const a=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const d=[],p=[],m=[],g=[];let y=0,_=0;E("z","y","x",-1,-1,i,t,e,l,o,0),E("z","y","x",1,-1,i,t,-e,l,o,1),E("x","z","y",1,1,e,i,t,r,l,2),E("x","z","y",1,-1,e,i,-t,r,l,3),E("x","y","z",1,-1,e,t,i,r,o,4),E("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(g,2));function E(A,x,h,S,b,P,D,O,B,k,R){const N=P/B,se=D/k,ue=P/2,$=D/2,Z=O/2,W=B+1,fe=k+1;let me=0,j=0;const J=new X;for(let re=0;re<fe;re++){const Te=re*se-$;for(let ve=0;ve<W;ve++){const oe=ve*N-ue;J[A]=oe*S,J[x]=Te*b,J[h]=Z,p.push(J.x,J.y,J.z),J[A]=0,J[x]=0,J[h]=O>0?1:-1,m.push(J.x,J.y,J.z),g.push(ve/B),g.push(1-re/k),me+=1}}for(let re=0;re<k;re++)for(let Te=0;Te<B;Te++){const ve=y+Te+W*re,oe=y+Te+W*(re+1),q=y+(Te+1)+W*(re+1),we=y+(Te+1)+W*re;d.push(ve,oe,we),d.push(oe,q,we),j+=6}a.addGroup(_,j,R),_+=j,y+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pn(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const r in i)e[r]=i[r]}return e}function yb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hx(n){return n.getRenderTarget()===null&&n.outputEncoding===bt?ki:ll}const zn={clone:Vs,merge:Pn};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends Wx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(id*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,p=l.fullHeight;o+=l.offsetX*r/d,t-=l.offsetY*i/p,r*=l.width/d,i*=l.height/p}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Sb extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new kn(ns,is,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new kn(ns,is,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const l=new kn(ns,is,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const a=new kn(ns,is,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const d=new kn(ns,is,e,t);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const p=new kn(ns,is,e,t);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,a,d,p]=this.children,m=e.getRenderTarget(),g=e.toneMapping,y=e.xr.enabled;e.toneMapping=Gi,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,l),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,d),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(t,p),e.setRenderTarget(m),e.toneMapping=g,e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class jx extends Wn{constructor(e,t,i,r,o,l,a,d,p,m){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,r,o,l,a,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mb extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bl(5,5,5),o=new Lt({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:un});o.uniforms.tEquirect.value=t;const l=new Bn(r,o),a=t.minFilter;return t.minFilter===sl&&(t.minFilter=ui),new Sb(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(o)}}const Sd=new X,wb=new X,bb=new ft;class oo{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sd.subVectors(i,t).cross(wb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bb.getNormalMatrix(e),r=this.coplanarPoint(Sd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new Up,Lu=new X;class kp{constructor(e=new oo,t=new oo,i=new oo,r=new oo,o=new oo,l=new oo){this.planes=[e,t,i,r,o,l]}set(e,t,i,r,o,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],a=i[3],d=i[4],p=i[5],m=i[6],g=i[7],y=i[8],_=i[9],E=i[10],A=i[11],x=i[12],h=i[13],S=i[14],b=i[15];return t[0].setComponents(a-r,g-d,A-y,b-x).normalize(),t[1].setComponents(a+r,g+d,A+y,b+x).normalize(),t[2].setComponents(a+o,g+p,A+_,b+h).normalize(),t[3].setComponents(a-o,g-p,A-_,b-h).normalize(),t[4].setComponents(a-l,g-m,A-E,b-S).normalize(),t[5].setComponents(a+l,g+m,A+E,b+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),no.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Lu.x=r.normal.x>0?e.max.x:e.min.x,Lu.y=r.normal.y>0?e.max.y:e.min.y,Lu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xx(){let n=null,e=!1,t=null,i=null;function r(o,l){t(o,l),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Eb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(p,m){const g=p.array,y=p.usage,_=n.createBuffer();n.bindBuffer(m,_),n.bufferData(m,g,y),p.onUploadCallback();let E;if(g instanceof Float32Array)E=5126;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)E=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=5123;else if(g instanceof Int16Array)E=5122;else if(g instanceof Uint32Array)E=5125;else if(g instanceof Int32Array)E=5124;else if(g instanceof Int8Array)E=5120;else if(g instanceof Uint8Array)E=5121;else if(g instanceof Uint8ClampedArray)E=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version}}function o(p,m,g){const y=m.array,_=m.updateRange;n.bindBuffer(g,p),_.count===-1?n.bufferSubData(g,0,y):(t?n.bufferSubData(g,_.offset*y.BYTES_PER_ELEMENT,y,_.offset,_.count):n.bufferSubData(g,_.offset*y.BYTES_PER_ELEMENT,y.subarray(_.offset,_.offset+_.count)),_.count=-1),m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function a(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=i.get(p);m&&(n.deleteBuffer(m.buffer),i.delete(p))}function d(p,m){if(p.isGLBufferAttribute){const y=i.get(p);(!y||y.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=i.get(p);g===void 0?i.set(p,r(p,m)):g.version<p.version&&(o(g.buffer,p,m),g.version=p.version)}return{get:l,remove:a,update:d}}class El extends Di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,l=t/2,a=Math.floor(i),d=Math.floor(r),p=a+1,m=d+1,g=e/a,y=t/d,_=[],E=[],A=[],x=[];for(let h=0;h<m;h++){const S=h*y-l;for(let b=0;b<p;b++){const P=b*g-o;E.push(P,-S,0),A.push(0,0,1),x.push(b/a),x.push(1-h/d)}}for(let h=0;h<d;h++)for(let S=0;S<a;S++){const b=S+p*h,P=S+p*(h+1),D=S+1+p*(h+1),O=S+1+p*h;_.push(b,P,O),_.push(P,D,O)}this.setIndex(_),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Db=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lb="vec3 transformed = vec3( position );",Ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ub=`#ifdef USE_BUMPMAP
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jb=`#define PI 3.141592653589793
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
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uE=`#ifdef USE_GRADIENTMAP
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
}`,cE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pE=`uniform bool receiveShadow;
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
#endif`,mE=`#if defined( USE_ENVMAP )
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
#endif`,vE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
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
#endif`,SE=`struct PhysicalMaterial {
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
}`,ME=`
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
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
#endif`,kE=`#ifdef USE_MORPHTARGETS
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
#endif`,zE=`#ifdef USE_MORPHTARGETS
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
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
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
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sT=`float getShadowMask() {
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
}`,aT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,fT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#ifdef USE_UV
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
#endif`,yT=`#ifdef USE_UV
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
#endif`,xT=`#ifdef USE_UV
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
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CT=`#include <common>
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
}`,PT=`#if DEPTH_PACKING == 3200
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
}`,AT=`#define DISTANCE
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
}`,DT=`#define DISTANCE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IT=`uniform float scale;
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
}`,OT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,kT=`#define LAMBERT
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
}`,zT=`#define LAMBERT
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
}`,FT=`#define MATCAP
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
}`,BT=`#define MATCAP
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
}`,VT=`#define NORMAL
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
}`,GT=`#define NORMAL
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
}`,HT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,jT=`#define STANDARD
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
}`,XT=`#define STANDARD
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
}`,qT=`#define TOON
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
}`,$T=`#define TOON
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
}`,YT=`uniform float size;
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
}`,KT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,QT=`uniform vec3 color;
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
}`,JT=`uniform float rotation;
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
}`,eC=`uniform vec3 diffuse;
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
}`,ot={alphamap_fragment:Tb,alphamap_pars_fragment:Cb,alphatest_fragment:Pb,alphatest_pars_fragment:Ab,aomap_fragment:Db,aomap_pars_fragment:Rb,begin_vertex:Lb,beginnormal_vertex:Ib,bsdfs:Ob,iridescence_fragment:Nb,bumpmap_pars_fragment:Ub,clipping_planes_fragment:kb,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Bb,color_fragment:Vb,color_pars_fragment:Gb,color_pars_vertex:Hb,color_vertex:Wb,common:jb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:qb,displacementmap_pars_vertex:$b,displacementmap_vertex:Yb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Zb,encodings_fragment:Qb,encodings_pars_fragment:Jb,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:mE,envmap_vertex:rE,fog_vertex:oE,fog_pars_vertex:sE,fog_fragment:aE,fog_pars_fragment:lE,gradientmap_pars_fragment:uE,lightmap_fragment:cE,lightmap_pars_fragment:fE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:hE,lights_pars_begin:pE,lights_toon_fragment:vE,lights_toon_pars_fragment:gE,lights_phong_fragment:yE,lights_phong_pars_fragment:xE,lights_physical_fragment:_E,lights_physical_pars_fragment:SE,lights_fragment_begin:ME,lights_fragment_maps:wE,lights_fragment_end:bE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:CE,logdepthbuf_vertex:PE,map_fragment:AE,map_pars_fragment:DE,map_particle_fragment:RE,map_particle_pars_fragment:LE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:OE,morphcolor_vertex:NE,morphnormal_vertex:UE,morphtarget_pars_vertex:kE,morphtarget_vertex:zE,normal_fragment_begin:FE,normal_fragment_maps:BE,normal_pars_fragment:VE,normal_pars_vertex:GE,normal_vertex:HE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:$E,output_fragment:YE,packing:KE,premultiplied_alpha_fragment:ZE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:rT,shadowmap_vertex:oT,shadowmask_pars_fragment:sT,skinbase_vertex:aT,skinning_pars_vertex:lT,skinning_vertex:uT,skinnormal_vertex:cT,specularmap_fragment:fT,specularmap_pars_fragment:dT,tonemapping_fragment:hT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:vT,uv_pars_fragment:gT,uv_pars_vertex:yT,uv_vertex:xT,worldpos_vertex:_T,background_vert:ST,background_frag:MT,backgroundCube_vert:wT,backgroundCube_frag:bT,cube_vert:ET,cube_frag:TT,depth_vert:CT,depth_frag:PT,distanceRGBA_vert:AT,distanceRGBA_frag:DT,equirect_vert:RT,equirect_frag:LT,linedashed_vert:IT,linedashed_frag:OT,meshbasic_vert:NT,meshbasic_frag:UT,meshlambert_vert:kT,meshlambert_frag:zT,meshmatcap_vert:FT,meshmatcap_frag:BT,meshnormal_vert:VT,meshnormal_frag:GT,meshphong_vert:HT,meshphong_frag:WT,meshphysical_vert:jT,meshphysical_frag:XT,meshtoon_vert:qT,meshtoon_frag:$T,points_vert:YT,points_frag:KT,shadow_vert:ZT,shadow_frag:QT,sprite_vert:JT,sprite_frag:eC},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Pn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Pn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Pn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Pn([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Iu={r:0,b:0,g:0};function tC(n,e,t,i,r,o,l){const a=new Ze(0);let d=o===!0?0:1,p,m,g=null,y=0,_=null;function E(x,h){let S=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b));const P=n.xr,D=P.getSession&&P.getSession();D&&D.environmentBlendMode==="additive"&&(b=null),b===null?A(a,d):b&&b.isColor&&(A(b,1),S=!0),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Gc)?(m===void 0&&(m=new Bn(new bl(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Vs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,m.material.toneMapped=b.encoding!==bt,(g!==b||y!==b.version||_!==n.toneMapping)&&(m.material.needsUpdate=!0,g=b,y=b.version,_=n.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new Bn(new El(2,2),new Lt({name:"BackgroundMaterial",uniforms:Vs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,p.material.toneMapped=b.encoding!==bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||y!==b.version||_!==n.toneMapping)&&(p.material.needsUpdate=!0,g=b,y=b.version,_=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function A(x,h){x.getRGB(Iu,Hx(n)),i.buffers.color.setClear(Iu.r,Iu.g,Iu.b,h,l)}return{getClearColor:function(){return a},setClearColor:function(x,h=1){a.set(x),d=h,A(a,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,A(a,d)},render:E}}function nC(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,a={},d=x(null);let p=d,m=!1;function g(Z,W,fe,me,j){let J=!1;if(l){const re=A(me,fe,W);p!==re&&(p=re,_(p.object)),J=h(Z,me,fe,j),J&&S(Z,me,fe,j)}else{const re=W.wireframe===!0;(p.geometry!==me.id||p.program!==fe.id||p.wireframe!==re)&&(p.geometry=me.id,p.program=fe.id,p.wireframe=re,J=!0)}j!==null&&t.update(j,34963),(J||m)&&(m=!1,k(Z,W,fe,me),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function y(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function _(Z){return i.isWebGL2?n.bindVertexArray(Z):o.bindVertexArrayOES(Z)}function E(Z){return i.isWebGL2?n.deleteVertexArray(Z):o.deleteVertexArrayOES(Z)}function A(Z,W,fe){const me=fe.wireframe===!0;let j=a[Z.id];j===void 0&&(j={},a[Z.id]=j);let J=j[W.id];J===void 0&&(J={},j[W.id]=J);let re=J[me];return re===void 0&&(re=x(y()),J[me]=re),re}function x(Z){const W=[],fe=[],me=[];for(let j=0;j<r;j++)W[j]=0,fe[j]=0,me[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:fe,attributeDivisors:me,object:Z,attributes:{},index:null}}function h(Z,W,fe,me){const j=p.attributes,J=W.attributes;let re=0;const Te=fe.getAttributes();for(const ve in Te)if(Te[ve].location>=0){const q=j[ve];let we=J[ve];if(we===void 0&&(ve==="instanceMatrix"&&Z.instanceMatrix&&(we=Z.instanceMatrix),ve==="instanceColor"&&Z.instanceColor&&(we=Z.instanceColor)),q===void 0||q.attribute!==we||we&&q.data!==we.data)return!0;re++}return p.attributesNum!==re||p.index!==me}function S(Z,W,fe,me){const j={},J=W.attributes;let re=0;const Te=fe.getAttributes();for(const ve in Te)if(Te[ve].location>=0){let q=J[ve];q===void 0&&(ve==="instanceMatrix"&&Z.instanceMatrix&&(q=Z.instanceMatrix),ve==="instanceColor"&&Z.instanceColor&&(q=Z.instanceColor));const we={};we.attribute=q,q&&q.data&&(we.data=q.data),j[ve]=we,re++}p.attributes=j,p.attributesNum=re,p.index=me}function b(){const Z=p.newAttributes;for(let W=0,fe=Z.length;W<fe;W++)Z[W]=0}function P(Z){D(Z,0)}function D(Z,W){const fe=p.newAttributes,me=p.enabledAttributes,j=p.attributeDivisors;fe[Z]=1,me[Z]===0&&(n.enableVertexAttribArray(Z),me[Z]=1),j[Z]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,W),j[Z]=W)}function O(){const Z=p.newAttributes,W=p.enabledAttributes;for(let fe=0,me=W.length;fe<me;fe++)W[fe]!==Z[fe]&&(n.disableVertexAttribArray(fe),W[fe]=0)}function B(Z,W,fe,me,j,J){i.isWebGL2===!0&&(fe===5124||fe===5125)?n.vertexAttribIPointer(Z,W,fe,j,J):n.vertexAttribPointer(Z,W,fe,me,j,J)}function k(Z,W,fe,me){if(i.isWebGL2===!1&&(Z.isInstancedMesh||me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const j=me.attributes,J=fe.getAttributes(),re=W.defaultAttributeValues;for(const Te in J){const ve=J[Te];if(ve.location>=0){let oe=j[Te];if(oe===void 0&&(Te==="instanceMatrix"&&Z.instanceMatrix&&(oe=Z.instanceMatrix),Te==="instanceColor"&&Z.instanceColor&&(oe=Z.instanceColor)),oe!==void 0){const q=oe.normalized,we=oe.itemSize,Me=t.get(oe);if(Me===void 0)continue;const te=Me.buffer,Ke=Me.type,Ge=Me.bytesPerElement;if(oe.isInterleavedBufferAttribute){const be=oe.data,Be=be.stride,dt=oe.offset;if(be.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ve.locationSize;Fe++)D(ve.location+Fe,be.meshPerAttribute);Z.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Fe=0;Fe<ve.locationSize;Fe++)P(ve.location+Fe);n.bindBuffer(34962,te);for(let Fe=0;Fe<ve.locationSize;Fe++)B(ve.location+Fe,we/ve.locationSize,Ke,q,Be*Ge,(dt+we/ve.locationSize*Fe)*Ge)}else{if(oe.isInstancedBufferAttribute){for(let be=0;be<ve.locationSize;be++)D(ve.location+be,oe.meshPerAttribute);Z.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<ve.locationSize;be++)P(ve.location+be);n.bindBuffer(34962,te);for(let be=0;be<ve.locationSize;be++)B(ve.location+be,we/ve.locationSize,Ke,q,we*Ge,we/ve.locationSize*be*Ge)}}else if(re!==void 0){const q=re[Te];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ve.location,q);break;case 3:n.vertexAttrib3fv(ve.location,q);break;case 4:n.vertexAttrib4fv(ve.location,q);break;default:n.vertexAttrib1fv(ve.location,q)}}}}O()}function R(){ue();for(const Z in a){const W=a[Z];for(const fe in W){const me=W[fe];for(const j in me)E(me[j].object),delete me[j];delete W[fe]}delete a[Z]}}function N(Z){if(a[Z.id]===void 0)return;const W=a[Z.id];for(const fe in W){const me=W[fe];for(const j in me)E(me[j].object),delete me[j];delete W[fe]}delete a[Z.id]}function se(Z){for(const W in a){const fe=a[W];if(fe[Z.id]===void 0)continue;const me=fe[Z.id];for(const j in me)E(me[j].object),delete me[j];delete fe[Z.id]}}function ue(){$(),m=!0,p!==d&&(p=d,_(p.object))}function $(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:ue,resetDefaultState:$,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:se,initAttributes:b,enableAttribute:P,disableUnusedAttributes:O}}function iC(n,e,t,i){const r=i.isWebGL2;let o;function l(p){o=p}function a(p,m){n.drawArrays(o,p,m),t.update(m,o,1)}function d(p,m,g){if(g===0)return;let y,_;if(r)y=n,_="drawArraysInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](o,p,m,g),t.update(m,o,g)}this.setMode=l,this.render=a,this.renderInstances=d}function rC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const d=o(a);d!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const p=l||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=n.getParameter(34930),y=n.getParameter(35660),_=n.getParameter(3379),E=n.getParameter(34076),A=n.getParameter(34921),x=n.getParameter(36347),h=n.getParameter(36348),S=n.getParameter(36349),b=y>0,P=l||e.has("OES_texture_float"),D=b&&P,O=l?n.getParameter(36183):0;return{isWebGL2:l,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:E,maxAttributes:A,maxVertexUniforms:x,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:b,floatFragmentTextures:P,floatVertexTextures:D,maxSamples:O}}function oC(n){const e=this;let t=null,i=0,r=!1,o=!1;const l=new oo,a=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const _=g.length!==0||y||i!==0||r;return r=y,i=g.length,_},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,y){t=m(g,y,0)},this.setState=function(g,y,_){const E=g.clippingPlanes,A=g.clipIntersection,x=g.clipShadows,h=n.get(g);if(!r||E===null||E.length===0||o&&!x)o?m(null):p();else{const S=o?0:i,b=S*4;let P=h.clippingState||null;d.value=P,P=m(E,y,b,_);for(let D=0;D!==b;++D)P[D]=t[D];h.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=S}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,y,_,E){const A=g!==null?g.length:0;let x=null;if(A!==0){if(x=d.value,E!==!0||x===null){const h=_+A*4,S=y.matrixWorldInverse;a.getNormalMatrix(S),(x===null||x.length<h)&&(x=new Float32Array(h));for(let b=0,P=_;b!==A;++b,P+=4)l.copy(g[b]).applyMatrix4(S,a),l.normal.toArray(x,P),x[P+3]=l.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function sC(n){let e=new WeakMap;function t(l,a){return a===Mc?l.mapping=zs:a===Lh&&(l.mapping=Fs),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Mc||a===Lh)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const p=new Mb(d.height/2);return p.fromEquirectangularTexture(n,l),e.set(l,p),l.addEventListener("dispose",r),t(p.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const d=e.get(a);d!==void 0&&(e.delete(a),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Wc extends Wx{constructor(e=-1,t=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,a=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,l=o+p*this.view.width,a-=m*this.view.offsetY,d=a-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=4,Og=[.125,.215,.35,.446,.526,.582],lo=20,Md=new Wc,Ng=new Ze;let wd=null;const so=(1+Math.sqrt(5))/2,rs=1/so,Ug=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,so,rs),new X(0,so,-rs),new X(rs,0,so),new X(-rs,0,so),new X(so,rs,0),new X(-so,rs,0)];class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd),e.scissorTest=!1,Ou(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:al,format:Ei,encoding:To,depthBuffer:!1},r=zg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aC(o)),this._blurMaterial=lC(o,e,t)}return r}_compileMaterial(e){const t=new Bn(this._lodPlanes[0],e);this._renderer.compile(t,Md)}_sceneToCubeUV(e,t,i,r){const a=new kn(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,y=m.toneMapping;m.getClearColor(Ng),m.toneMapping=Gi,m.autoClear=!1;const _=new yo({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),E=new Bn(new bl,_);let A=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,A=!0):(_.color.copy(Ng),A=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(a.up.set(0,d[h],0),a.lookAt(p[h],0,0)):S===1?(a.up.set(0,0,d[h]),a.lookAt(0,p[h],0)):(a.up.set(0,d[h],0),a.lookAt(0,0,p[h]));const b=this._cubeSize;Ou(r,S*b,h>2?b:0,b,b),m.setRenderTarget(r),A&&m.render(E,a),m.render(e,a)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=y,m.autoClear=g,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zs||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const d=this._cubeSize;Ou(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(l,Md)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Ug[(r-1)%Ug.length];this._blur(e,r-1,r,o,l)}t.autoClear=i}_blur(e,t,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,l,a){const d=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Bn(this._lodPlanes[r],p),y=p.uniforms,_=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*lo-1),A=o/E,x=isFinite(o)?1+Math.floor(m*A):lo;x>lo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${lo}`);const h=[];let S=0;for(let B=0;B<lo;++B){const k=B/A,R=Math.exp(-k*k/2);h.push(R),B===0?S+=R:B<x&&(S+=2*R)}for(let B=0;B<h.length;B++)h[B]=h[B]/S;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=h,y.latitudinal.value=l==="latitudinal",a&&(y.poleAxis.value=a);const{_lodMax:b}=this;y.dTheta.value=E,y.mipInt.value=b-i;const P=this._sizeLods[r],D=3*P*(r>b-ys?r-b+ys:0),O=4*(this._cubeSize-P);Ou(t,D,O,3*P,2*P),d.setRenderTarget(t),d.render(g,Md)}}function aC(n){const e=[],t=[],i=[];let r=n;const o=n-ys+1+Og.length;for(let l=0;l<o;l++){const a=Math.pow(2,r);t.push(a);let d=1/a;l>n-ys?d=Og[l-n+ys-1]:l===0&&(d=0),i.push(d);const p=1/(a-2),m=-p,g=1+p,y=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,E=6,A=3,x=2,h=1,S=new Float32Array(A*E*_),b=new Float32Array(x*E*_),P=new Float32Array(h*E*_);for(let O=0;O<_;O++){const B=O%3*2/3-1,k=O>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];S.set(R,A*E*O),b.set(y,x*E*O);const N=[O,O,O,O,O,O];P.set(N,h*E*O)}const D=new Di;D.setAttribute("position",new Pi(S,A)),D.setAttribute("uv",new Pi(b,x)),D.setAttribute("faceIndex",new Pi(P,h)),e.push(D),r>ys&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zg(n,e,t){const i=new en(n,e,t);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ou(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lC(n,e,t){const i=new Float32Array(lo),r=new X(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zp(),fragmentShader:`

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
	`}function uC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const d=a.mapping,p=d===Mc||d===Lh,m=d===zs||d===Fs;if(p||m)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let g=e.get(a);return t===null&&(t=new kg(n)),g=p?t.fromEquirectangular(a,g):t.fromCubemap(a,g),e.set(a,g),g.texture}else{if(e.has(a))return e.get(a).texture;{const g=a.image;if(p&&g&&g.height>0||m&&g&&r(g)){t===null&&(t=new kg(n));const y=p?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,y),a.addEventListener("dispose",o),y.texture}else return null}}}return a}function r(a){let d=0;const p=6;for(let m=0;m<p;m++)a[m]!==void 0&&d++;return d===p}function o(a){const d=a.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function cC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fC(n,e,t,i){const r={},o=new WeakMap;function l(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",l),delete r[y.id];const _=o.get(y);_&&(e.remove(_),o.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function a(g,y){return r[y.id]===!0||(y.addEventListener("dispose",l),r[y.id]=!0,t.memory.geometries++),y}function d(g){const y=g.attributes;for(const E in y)e.update(y[E],34962);const _=g.morphAttributes;for(const E in _){const A=_[E];for(let x=0,h=A.length;x<h;x++)e.update(A[x],34962)}}function p(g){const y=[],_=g.index,E=g.attributes.position;let A=0;if(_!==null){const S=_.array;A=_.version;for(let b=0,P=S.length;b<P;b+=3){const D=S[b+0],O=S[b+1],B=S[b+2];y.push(D,O,O,B,B,D)}}else{const S=E.array;A=E.version;for(let b=0,P=S.length/3-1;b<P;b+=3){const D=b+0,O=b+1,B=b+2;y.push(D,O,O,B,B,D)}}const x=new(Nx(y)?Gx:Vx)(y,1);x.version=A;const h=o.get(g);h&&e.remove(h),o.set(g,x)}function m(g){const y=o.get(g);if(y){const _=g.index;_!==null&&y.version<_.version&&p(g)}else p(g);return o.get(g)}return{get:a,update:d,getWireframeAttribute:m}}function dC(n,e,t,i){const r=i.isWebGL2;let o;function l(y){o=y}let a,d;function p(y){a=y.type,d=y.bytesPerElement}function m(y,_){n.drawElements(o,_,a,y*d),t.update(_,o,1)}function g(y,_,E){if(E===0)return;let A,x;if(r)A=n,x="drawElementsInstanced";else if(A=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",A===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}A[x](o,_,a,y*d,E),t.update(_,o,E)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=g}function hC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,a){switch(t.calls++,l){case 4:t.triangles+=a*(o/3);break;case 1:t.lines+=a*(o/2);break;case 3:t.lines+=a*(o-1);break;case 2:t.lines+=a*o;break;case 0:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pC(n,e){return n[0]-e[0]}function mC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function vC(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,l=new Rt,a=[];for(let p=0;p<8;p++)a[p]=[p,0];function d(p,m,g){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const _=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,E=_!==void 0?_.length:0;let A=o.get(m);if(A===void 0||A.count!==E){let Z=function(){ue.dispose(),o.delete(m),m.removeEventListener("dispose",Z)};A!==void 0&&A.texture.dispose();const S=m.morphAttributes.position!==void 0,b=m.morphAttributes.normal!==void 0,P=m.morphAttributes.color!==void 0,D=m.morphAttributes.position||[],O=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let k=0;S===!0&&(k=1),b===!0&&(k=2),P===!0&&(k=3);let R=m.attributes.position.count*k,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const se=new Float32Array(R*N*4*E),ue=new zx(se,R,N,E);ue.type=po,ue.needsUpdate=!0;const $=k*4;for(let W=0;W<E;W++){const fe=D[W],me=O[W],j=B[W],J=R*N*4*W;for(let re=0;re<fe.count;re++){const Te=re*$;S===!0&&(l.fromBufferAttribute(fe,re),se[J+Te+0]=l.x,se[J+Te+1]=l.y,se[J+Te+2]=l.z,se[J+Te+3]=0),b===!0&&(l.fromBufferAttribute(me,re),se[J+Te+4]=l.x,se[J+Te+5]=l.y,se[J+Te+6]=l.z,se[J+Te+7]=0),P===!0&&(l.fromBufferAttribute(j,re),se[J+Te+8]=l.x,se[J+Te+9]=l.y,se[J+Te+10]=l.z,se[J+Te+11]=j.itemSize===4?l.w:1)}}A={count:E,texture:ue,size:new Ne(R,N)},o.set(m,A),m.addEventListener("dispose",Z)}let x=0;for(let S=0;S<y.length;S++)x+=y[S];const h=m.morphTargetsRelative?1:1-x;g.getUniforms().setValue(n,"morphTargetBaseInfluence",h),g.getUniforms().setValue(n,"morphTargetInfluences",y),g.getUniforms().setValue(n,"morphTargetsTexture",A.texture,t),g.getUniforms().setValue(n,"morphTargetsTextureSize",A.size)}else{const _=y===void 0?0:y.length;let E=i[m.id];if(E===void 0||E.length!==_){E=[];for(let b=0;b<_;b++)E[b]=[b,0];i[m.id]=E}for(let b=0;b<_;b++){const P=E[b];P[0]=b,P[1]=y[b]}E.sort(mC);for(let b=0;b<8;b++)b<_&&E[b][1]?(a[b][0]=E[b][0],a[b][1]=E[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(pC);const A=m.morphAttributes.position,x=m.morphAttributes.normal;let h=0;for(let b=0;b<8;b++){const P=a[b],D=P[0],O=P[1];D!==Number.MAX_SAFE_INTEGER&&O?(A&&m.getAttribute("morphTarget"+b)!==A[D]&&m.setAttribute("morphTarget"+b,A[D]),x&&m.getAttribute("morphNormal"+b)!==x[D]&&m.setAttribute("morphNormal"+b,x[D]),r[b]=O,h+=O):(A&&m.hasAttribute("morphTarget"+b)===!0&&m.deleteAttribute("morphTarget"+b),x&&m.hasAttribute("morphNormal"+b)===!0&&m.deleteAttribute("morphNormal"+b),r[b]=0)}const S=m.morphTargetsRelative?1:1-h;g.getUniforms().setValue(n,"morphTargetBaseInfluence",S),g.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:d}}function gC(n,e,t,i){let r=new WeakMap;function o(d){const p=i.render.frame,m=d.geometry,g=e.get(d,m);return r.get(g)!==p&&(e.update(g),r.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",a)===!1&&d.addEventListener("dispose",a),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),g}function l(){r=new WeakMap}function a(d){const p=d.target;p.removeEventListener("dispose",a),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:l}}const qx=new Wn,$x=new zx,Yx=new sb,Kx=new jx,Vg=[],Gg=[],Hg=new Float32Array(16),Wg=new Float32Array(9),jg=new Float32Array(4);function Xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Vg[r];if(o===void 0&&(o=new Float32Array(r),Vg[r]=o),e!==0){i.toArray(o,0);for(let l=1,a=0;l!==e;++l)a+=t,n[l].toArray(o,a)}return o}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jc(n,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function _C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function SC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function MC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;jg.set(i),n.uniformMatrix2fv(this.addr,!1,jg),rn(t,i)}}function wC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Wg.set(i),n.uniformMatrix3fv(this.addr,!1,Wg),rn(t,i)}}function bC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Hg.set(i),n.uniformMatrix4fv(this.addr,!1,Hg),rn(t,i)}}function EC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function CC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function PC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function AC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function RC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function LC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function IC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||qx,r)}function OC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yx,r)}function NC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kx,r)}function UC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$x,r)}function kC(n){switch(n){case 5126:return yC;case 35664:return xC;case 35665:return _C;case 35666:return SC;case 35674:return MC;case 35675:return wC;case 35676:return bC;case 5124:case 35670:return EC;case 35667:case 35671:return TC;case 35668:case 35672:return CC;case 35669:case 35673:return PC;case 5125:return AC;case 36294:return DC;case 36295:return RC;case 36296:return LC;case 35678:case 36198:case 36298:case 36306:case 35682:return IC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return UC}}function zC(n,e){n.uniform1fv(this.addr,e)}function FC(n,e){const t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function BC(n,e){const t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function VC(n,e){const t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function GC(n,e){const t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HC(n,e){const t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WC(n,e){const t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jC(n,e){n.uniform1iv(this.addr,e)}function XC(n,e){n.uniform2iv(this.addr,e)}function qC(n,e){n.uniform3iv(this.addr,e)}function $C(n,e){n.uniform4iv(this.addr,e)}function YC(n,e){n.uniform1uiv(this.addr,e)}function KC(n,e){n.uniform2uiv(this.addr,e)}function ZC(n,e){n.uniform3uiv(this.addr,e)}function QC(n,e){n.uniform4uiv(this.addr,e)}function JC(n,e,t){const i=this.cache,r=e.length,o=jc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||qx,o[l])}function eP(n,e,t){const i=this.cache,r=e.length,o=jc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Yx,o[l])}function tP(n,e,t){const i=this.cache,r=e.length,o=jc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Kx,o[l])}function nP(n,e,t){const i=this.cache,r=e.length,o=jc(t,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||$x,o[l])}function iP(n){switch(n){case 5126:return zC;case 35664:return FC;case 35665:return BC;case 35666:return VC;case 35674:return GC;case 35675:return HC;case 35676:return WC;case 5124:case 35670:return jC;case 35667:case 35671:return XC;case 35668:case 35672:return qC;case 35669:case 35673:return $C;case 5125:return YC;case 36294:return KC;case 36295:return ZC;case 36296:return QC;case 35678:case 36198:case 36298:case 36306:case 35682:return JC;case 35679:case 36299:case 36307:return eP;case 35680:case 36300:case 36308:case 36293:return tP;case 36289:case 36303:case 36311:case 36292:return nP}}class rP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=kC(t.type)}}class oP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=iP(t.type)}}class sP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function Xg(n,e){n.seq.push(e),n.map[e.id]=e}function aP(n,e,t){const i=n.name,r=i.length;for(bd.lastIndex=0;;){const o=bd.exec(i),l=bd.lastIndex;let a=o[1];const d=o[2]==="]",p=o[3];if(d&&(a=a|0),p===void 0||p==="["&&l+2===r){Xg(t,p===void 0?new rP(a,n,e):new oP(a,n,e));break}else{let g=t.map[a];g===void 0&&(g=new sP(a),Xg(t,g)),t=g}}}class Yu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);aP(o,l,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,l=t.length;o!==l;++o){const a=t[o],d=i[a.id];d.needsUpdate!==!1&&a.setValue(e,d.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function qg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let lP=0;function uP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const a=l+1;i.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return i.join(`
`)}function cP(n){switch(n){case To:return["Linear","( value )"];case bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function $g(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+uP(n.getShaderSource(e),l)}else return r}function fP(n,e){const t=cP(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dP(n,e){let t;switch(e){case Pw:t="Linear";break;case Lx:t="Reinhard";break;case Aw:t="OptimizedCineon";break;case Dw:t="ACESFilmic";break;case Rw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hP(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ra).join(`
`)}function pP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mP(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),l=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:a}}return t}function Ra(n){return n!==""}function Yg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(n){return n.replace(vP,gP)}function gP(n,e){const t=ot[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Nh(t)}const yP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(n){return n.replace(yP,xP)}function xP(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Qg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _P(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Da&&(e="SHADOWMAP_TYPE_VSM"),e}function SP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Fs:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function wP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case Tw:e="ENVMAP_BLENDING_MIX";break;case Cw:e="ENVMAP_BLENDING_ADD";break}return e}function bP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function EP(n,e,t,i){const r=n.getContext(),o=t.defines;let l=t.vertexShader,a=t.fragmentShader;const d=_P(t),p=SP(t),m=MP(t),g=wP(t),y=bP(t),_=t.isWebGL2?"":hP(t),E=pP(o),A=r.createProgram();let x,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[E].filter(Ra).join(`
`),x.length>0&&(x+=`
`),h=[_,E].filter(Ra).join(`
`),h.length>0&&(h+=`
`)):(x=[Qg(t),"#define SHADER_NAME "+t.shaderName,E,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),h=[_,Qg(t),"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Gi?dP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.encodings_pars_fragment,fP("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),l=Nh(l),l=Yg(l,t),l=Kg(l,t),a=Nh(a),a=Yg(a,t),a=Kg(a,t),l=Zg(l),a=Zg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",t.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=S+x+l,P=S+h+a,D=qg(r,35633,b),O=qg(r,35632,P);if(r.attachShader(A,D),r.attachShader(A,O),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A),n.debug.checkShaderErrors){const R=r.getProgramInfoLog(A).trim(),N=r.getShaderInfoLog(D).trim(),se=r.getShaderInfoLog(O).trim();let ue=!0,$=!0;if(r.getProgramParameter(A,35714)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,A,D,O);else{const Z=$g(r,D,"vertex"),W=$g(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,35715)+`

Program Info Log: `+R+`
`+Z+`
`+W)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||se==="")&&($=!1);$&&(this.diagnostics={runnable:ue,programLog:R,vertexShader:{log:N,prefix:x},fragmentShader:{log:se,prefix:h}})}r.deleteShader(D),r.deleteShader(O);let B;this.getUniforms=function(){return B===void 0&&(B=new Yu(r,A)),B};let k;return this.getAttributes=function(){return k===void 0&&(k=mP(r,A)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.name=t.shaderName,this.id=lP++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=O,this}let TP=0;class CP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PP(e),t.set(e,i)),i}}class PP{constructor(e){this.id=TP++,this.code=e,this.usedTimes=0}}function AP(n,e,t,i,r,o,l){const a=new Fx,d=new CP,p=[],m=r.isWebGL2,g=r.logarithmicDepthBuffer,y=r.vertexTextures;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return R===1?"uv2":"uv"}function x(R,N,se,ue,$){const Z=ue.fog,W=$.geometry,fe=R.isMeshStandardMaterial?ue.environment:null,me=(R.isMeshStandardMaterial?t:e).get(R.envMap||fe),j=me&&me.mapping===Gc?me.image.height:null,J=E[R.type];R.precision!==null&&(_=r.getMaxPrecision(R.precision),_!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",_,"instead."));const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Te=re!==void 0?re.length:0;let ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let oe,q,we,Me;if(J){const Re=zi[J];oe=Re.vertexShader,q=Re.fragmentShader}else oe=R.vertexShader,q=R.fragmentShader,d.update(R),we=d.getVertexShaderID(R),Me=d.getFragmentShaderID(R);const te=n.getRenderTarget(),Ke=$.isInstancedMesh===!0,Ge=!!R.map,be=!!R.matcap,Be=!!me,dt=!!R.aoMap,Fe=!!R.lightMap,Qe=!!R.bumpMap,Xe=!!R.normalMap,Et=!!R.displacementMap,Nt=!!R.emissiveMap,mt=!!R.metalnessMap,at=!!R.roughnessMap,_t=R.clearcoat>0,jt=R.iridescence>0,z=R.sheen>0,L=R.transmission>0,ae=_t&&!!R.clearcoatMap,pe=_t&&!!R.clearcoatNormalMap,_e=_t&&!!R.clearcoatRoughnessMap,Ee=jt&&!!R.iridescenceMap,V=jt&&!!R.iridescenceThicknessMap,he=z&&!!R.sheenColorMap,ne=z&&!!R.sheenRoughnessMap,Ce=!!R.specularMap,Le=!!R.specularColorMap,ze=!!R.specularIntensityMap,De=L&&!!R.transmissionMap,Ue=L&&!!R.thicknessMap,qe=!!R.gradientMap,Je=!!R.alphaMap,Pt=R.alphaTest>0,H=!!R.extensions,le=!!W.attributes.uv2;return{isWebGL2:m,shaderID:J,shaderName:R.type,vertexShader:oe,fragmentShader:q,defines:R.defines,customVertexShaderID:we,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:_,instancing:Ke,instancingColor:Ke&&$.instanceColor!==null,supportsVertexTextures:y,outputEncoding:te===null?n.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:To,map:Ge,matcap:be,envMap:Be,envMapMode:Be&&me.mapping,envMapCubeUVHeight:j,aoMap:dt,lightMap:Fe,bumpMap:Qe,normalMap:Xe,displacementMap:y&&Et,emissiveMap:Nt,normalMapObjectSpace:Xe&&R.normalMapType===Yw,normalMapTangentSpace:Xe&&R.normalMapType===Sl,decodeVideoTexture:Ge&&R.map.isVideoTexture===!0&&R.map.encoding===bt,metalnessMap:mt,roughnessMap:at,clearcoat:_t,clearcoatMap:ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:_e,iridescence:jt,iridescenceMap:Ee,iridescenceThicknessMap:V,sheen:z,sheenColorMap:he,sheenRoughnessMap:ne,specularMap:Ce,specularColorMap:Le,specularIntensityMap:ze,transmission:L,transmissionMap:De,thicknessMap:Ue,gradientMap:qe,opaque:R.transparent===!1&&R.blending===Cs,alphaMap:Je,alphaTest:Pt,combine:R.combine,mapUv:Ge&&A(R.map.channel),aoMapUv:dt&&A(R.aoMap.channel),lightMapUv:Fe&&A(R.lightMap.channel),bumpMapUv:Qe&&A(R.bumpMap.channel),normalMapUv:Xe&&A(R.normalMap.channel),displacementMapUv:Et&&A(R.displacementMap.channel),emissiveMapUv:Nt&&A(R.emissiveMap.channel),metalnessMapUv:mt&&A(R.metalnessMap.channel),roughnessMapUv:at&&A(R.roughnessMap.channel),clearcoatMapUv:ae&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:pe&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:V&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(R.sheenRoughnessMap.channel),specularMapUv:Ce&&A(R.specularMap.channel),specularColorMapUv:Le&&A(R.specularColorMap.channel),specularIntensityMapUv:ze&&A(R.specularIntensityMap.channel),transmissionMapUv:De&&A(R.transmissionMap.channel),thicknessMapUv:Ue&&A(R.thicknessMap.channel),alphaMapUv:Je&&A(R.alphaMap.channel),vertexTangents:Xe&&!!W.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs2:le,pointsUvs:$.isPoints===!0&&!!W.attributes.uv&&(Ge||Je),fog:!!Z,useFog:R.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:$.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ve,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:R.toneMapped?n.toneMapping:Gi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===tr,flipSided:R.side===Rn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:H&&R.extensions.derivatives===!0,extensionFragDepth:H&&R.extensions.fragDepth===!0,extensionDrawBuffers:H&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function h(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const se in R.defines)N.push(se),N.push(R.defines[se]);return R.isRawShaderMaterial===!1&&(S(N,R),b(N,R),N.push(n.outputEncoding)),N.push(R.customProgramCacheKey),N.join()}function S(R,N){R.push(N.precision),R.push(N.outputEncoding),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function b(R,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUvs2&&a.enable(13),N.vertexTangents&&a.enable(14),R.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.decodeVideoTexture&&a.enable(17),N.opaque&&a.enable(18),N.pointsUvs&&a.enable(19),R.push(a.mask)}function P(R){const N=E[R.type];let se;if(N){const ue=zi[N];se=zn.clone(ue.uniforms)}else se=R.uniforms;return se}function D(R,N){let se;for(let ue=0,$=p.length;ue<$;ue++){const Z=p[ue];if(Z.cacheKey===N){se=Z,++se.usedTimes;break}}return se===void 0&&(se=new EP(n,N,R,o),p.push(se)),se}function O(R){if(--R.usedTimes===0){const N=p.indexOf(R);p[N]=p[p.length-1],p.pop(),R.destroy()}}function B(R){d.remove(R)}function k(){d.dispose()}return{getParameters:x,getProgramCacheKey:h,getUniforms:P,acquireProgram:D,releaseProgram:O,releaseShaderCache:B,programs:p,dispose:k}}function DP(){let n=new WeakMap;function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function t(o){n.delete(o)}function i(o,l,a){n.get(o)[l]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function RP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function e0(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function l(g,y,_,E,A,x){let h=n[e];return h===void 0?(h={id:g.id,object:g,geometry:y,material:_,groupOrder:E,renderOrder:g.renderOrder,z:A,group:x},n[e]=h):(h.id=g.id,h.object=g,h.geometry=y,h.material=_,h.groupOrder=E,h.renderOrder=g.renderOrder,h.z=A,h.group=x),e++,h}function a(g,y,_,E,A,x){const h=l(g,y,_,E,A,x);_.transmission>0?i.push(h):_.transparent===!0?r.push(h):t.push(h)}function d(g,y,_,E,A,x){const h=l(g,y,_,E,A,x);_.transmission>0?i.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function p(g,y){t.length>1&&t.sort(g||RP),i.length>1&&i.sort(y||Jg),r.length>1&&r.sort(y||Jg)}function m(){for(let g=e,y=n.length;g<y;g++){const _=n[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:d,finish:m,sort:p}}function LP(){let n=new WeakMap;function e(i,r){const o=n.get(i);let l;return o===void 0?(l=new e0,n.set(i,[l])):r>=o.length?(l=new e0,o.push(l)):l=o[r],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function IP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ze};break;case"SpotLight":t={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function OP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NP=0;function UP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kP(n,e){const t=new IP,i=OP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new X);const o=new X,l=new Gt,a=new Gt;function d(m,g){let y=0,_=0,E=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let A=0,x=0,h=0,S=0,b=0,P=0,D=0,O=0,B=0,k=0;m.sort(UP);const R=g===!0?Math.PI:1;for(let se=0,ue=m.length;se<ue;se++){const $=m[se],Z=$.color,W=$.intensity,fe=$.distance,me=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)y+=Z.r*W*R,_+=Z.g*W*R,E+=Z.b*W*R;else if($.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector($.sh.coefficients[j],W);else if($.isDirectionalLight){const j=t.get($);if(j.color.copy($.color).multiplyScalar($.intensity*R),$.castShadow){const J=$.shadow,re=i.get($);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.directionalShadow[A]=re,r.directionalShadowMap[A]=me,r.directionalShadowMatrix[A]=$.shadow.matrix,P++}r.directional[A]=j,A++}else if($.isSpotLight){const j=t.get($);j.position.setFromMatrixPosition($.matrixWorld),j.color.copy(Z).multiplyScalar(W*R),j.distance=fe,j.coneCos=Math.cos($.angle),j.penumbraCos=Math.cos($.angle*(1-$.penumbra)),j.decay=$.decay,r.spot[h]=j;const J=$.shadow;if($.map&&(r.spotLightMap[B]=$.map,B++,J.updateMatrices($),$.castShadow&&k++),r.spotLightMatrix[h]=J.matrix,$.castShadow){const re=i.get($);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,r.spotShadow[h]=re,r.spotShadowMap[h]=me,O++}h++}else if($.isRectAreaLight){const j=t.get($);j.color.copy(Z).multiplyScalar(W),j.halfWidth.set($.width*.5,0,0),j.halfHeight.set(0,$.height*.5,0),r.rectArea[S]=j,S++}else if($.isPointLight){const j=t.get($);if(j.color.copy($.color).multiplyScalar($.intensity*R),j.distance=$.distance,j.decay=$.decay,$.castShadow){const J=$.shadow,re=i.get($);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,r.pointShadow[x]=re,r.pointShadowMap[x]=me,r.pointShadowMatrix[x]=$.shadow.matrix,D++}r.point[x]=j,x++}else if($.isHemisphereLight){const j=t.get($);j.skyColor.copy($.color).multiplyScalar(W*R),j.groundColor.copy($.groundColor).multiplyScalar(W*R),r.hemi[b]=j,b++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=y,r.ambient[1]=_,r.ambient[2]=E;const N=r.hash;(N.directionalLength!==A||N.pointLength!==x||N.spotLength!==h||N.rectAreaLength!==S||N.hemiLength!==b||N.numDirectionalShadows!==P||N.numPointShadows!==D||N.numSpotShadows!==O||N.numSpotMaps!==B)&&(r.directional.length=A,r.spot.length=h,r.rectArea.length=S,r.point.length=x,r.hemi.length=b,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=O+B-k,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=k,N.directionalLength=A,N.pointLength=x,N.spotLength=h,N.rectAreaLength=S,N.hemiLength=b,N.numDirectionalShadows=P,N.numPointShadows=D,N.numSpotShadows=O,N.numSpotMaps=B,r.version=NP++)}function p(m,g){let y=0,_=0,E=0,A=0,x=0;const h=g.matrixWorldInverse;for(let S=0,b=m.length;S<b;S++){const P=m[S];if(P.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(h),y++}else if(P.isSpotLight){const D=r.spot[E];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(h),E++}else if(P.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(h),a.identity(),l.copy(P.matrixWorld),l.premultiply(h),a.extractRotation(l),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),A++}else if(P.isPointLight){const D=r.point[_];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(h),_++}else if(P.isHemisphereLight){const D=r.hemi[x];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(h),x++}}}return{setup:d,setupView:p,state:r}}function t0(n,e){const t=new kP(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(g){i.push(g)}function a(g){r.push(g)}function d(g){t.setup(i,g)}function p(g){t.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:d,setupLightsView:p,pushLight:l,pushShadow:a}}function zP(n,e){let t=new WeakMap;function i(o,l=0){const a=t.get(o);let d;return a===void 0?(d=new t0(n,e),t.set(o,[d])):l>=a.length?(d=new t0(n,e),a.push(d)):d=a[l],d}function r(){t=new WeakMap}return{get:i,dispose:r}}class Fr extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$w,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cl extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BP=`uniform sampler2D shadow_pass;
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
}`;function VP(n,e,t){let i=new kp;const r=new Ne,o=new Ne,l=new Rt,a=new Fr({depthPacking:_l}),d=new cl,p={},m=t.maxTextureSize,g={[zr]:Rn,[Rn]:zr,[tr]:tr},y=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:FP,fragmentShader:BP}),_=y.clone();_.defines.HORIZONTAL_PASS=1;const E=new Di;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Bn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op,this.render=function(P,D,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const B=n.getRenderTarget(),k=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(un),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let se=0,ue=P.length;se<ue;se++){const $=P[se],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const W=Z.getFrameExtents();if(r.multiply(W),o.copy(Z.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/W.x),r.x=o.x*W.x,Z.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/W.y),r.y=o.y*W.y,Z.mapSize.y=o.y)),Z.map===null){const me=this.type!==Da?{minFilter:Qt,magFilter:Qt}:{};Z.map=new en(r.x,r.y,me),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const fe=Z.getViewportCount();for(let me=0;me<fe;me++){const j=Z.getViewport(me);l.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),N.viewport(l),Z.updateMatrices($,me),i=Z.getFrustum(),b(D,O,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Da&&h(Z,O),Z.needsUpdate=!1}x.needsUpdate=!1,n.setRenderTarget(B,k,R)};function h(P,D){const O=e.update(A);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new en(r.x,r.y)),y.uniforms.shadow_pass.value=P.map.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,O,y,A,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,O,_,A,null)}function S(P,D,O,B){let k=null;const R=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)k=R;else if(k=O.isPointLight===!0?d:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const N=k.uuid,se=D.uuid;let ue=p[N];ue===void 0&&(ue={},p[N]=ue);let $=ue[se];$===void 0&&($=k.clone(),ue[se]=$),k=$}if(k.visible=D.visible,k.wireframe=D.wireframe,B===Da?k.side=D.shadowSide!==null?D.shadowSide:D.side:k.side=D.shadowSide!==null?D.shadowSide:g[D.side],k.alphaMap=D.alphaMap,k.alphaTest=D.alphaTest,k.map=D.map,k.clipShadows=D.clipShadows,k.clippingPlanes=D.clippingPlanes,k.clipIntersection=D.clipIntersection,k.displacementMap=D.displacementMap,k.displacementScale=D.displacementScale,k.displacementBias=D.displacementBias,k.wireframeLinewidth=D.wireframeLinewidth,k.linewidth=D.linewidth,O.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const N=n.properties.get(k);N.light=O}return k}function b(P,D,O,B,k){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===Da)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const se=e.update(P),ue=P.material;if(Array.isArray(ue)){const $=se.groups;for(let Z=0,W=$.length;Z<W;Z++){const fe=$[Z],me=ue[fe.materialIndex];if(me&&me.visible){const j=S(P,me,B,k);n.renderBufferDirect(O,null,se,j,P,fe)}}}else if(ue.visible){const $=S(P,ue,B,k);n.renderBufferDirect(O,null,se,$,P,null)}}const N=P.children;for(let se=0,ue=N.length;se<ue;se++)b(N[se],D,O,B,k)}}function GP(n,e,t){const i=t.isWebGL2;function r(){let H=!1;const le=new Rt;let ge=null;const Re=new Rt(0,0,0,0);return{setMask:function(Oe){ge!==Oe&&!H&&(n.colorMask(Oe,Oe,Oe,Oe),ge=Oe)},setLocked:function(Oe){H=Oe},setClear:function(Oe,St,yt,on,Xt){Xt===!0&&(Oe*=on,St*=on,yt*=on),le.set(Oe,St,yt,on),Re.equals(le)===!1&&(n.clearColor(Oe,St,yt,on),Re.copy(le))},reset:function(){H=!1,ge=null,Re.set(-1,0,0,0)}}}function o(){let H=!1,le=null,ge=null,Re=null;return{setTest:function(Oe){Oe?te(2929):Ke(2929)},setMask:function(Oe){le!==Oe&&!H&&(n.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(ge!==Oe){switch(Oe){case xw:n.depthFunc(512);break;case _w:n.depthFunc(519);break;case Sw:n.depthFunc(513);break;case Rh:n.depthFunc(515);break;case Mw:n.depthFunc(514);break;case ww:n.depthFunc(518);break;case bw:n.depthFunc(516);break;case Ew:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){Re!==Oe&&(n.clearDepth(Oe),Re=Oe)},reset:function(){H=!1,le=null,ge=null,Re=null}}}function l(){let H=!1,le=null,ge=null,Re=null,Oe=null,St=null,yt=null,on=null,Xt=null;return{setTest:function(vt){H||(vt?te(2960):Ke(2960))},setMask:function(vt){le!==vt&&!H&&(n.stencilMask(vt),le=vt)},setFunc:function(vt,qt,jn){(ge!==vt||Re!==qt||Oe!==jn)&&(n.stencilFunc(vt,qt,jn),ge=vt,Re=qt,Oe=jn)},setOp:function(vt,qt,jn){(St!==vt||yt!==qt||on!==jn)&&(n.stencilOp(vt,qt,jn),St=vt,yt=qt,on=jn)},setLocked:function(vt){H=vt},setClear:function(vt){Xt!==vt&&(n.clearStencil(vt),Xt=vt)},reset:function(){H=!1,le=null,ge=null,Re=null,Oe=null,St=null,yt=null,on=null,Xt=null}}}const a=new r,d=new o,p=new l,m=new WeakMap,g=new WeakMap;let y={},_={},E=new WeakMap,A=[],x=null,h=!1,S=null,b=null,P=null,D=null,O=null,B=null,k=null,R=!1,N=null,se=null,ue=null,$=null,Z=null;const W=n.getParameter(35661);let fe=!1,me=0;const j=n.getParameter(7938);j.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(j)[1]),fe=me>=1):j.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),fe=me>=2);let J=null,re={};const Te=n.getParameter(3088),ve=n.getParameter(2978),oe=new Rt().fromArray(Te),q=new Rt().fromArray(ve);function we(H,le,ge){const Re=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(H,Oe),n.texParameteri(H,10241,9728),n.texParameteri(H,10240,9728);for(let St=0;St<ge;St++)n.texImage2D(le+St,0,6408,1,1,0,6408,5121,Re);return Oe}const Me={};Me[3553]=we(3553,3553,1),Me[34067]=we(34067,34069,6),a.setClear(0,0,0,1),d.setClear(1),p.setClear(0),te(2929),d.setFunc(Rh),Et(!1),Nt(Gv),te(2884),Qe(un);function te(H){y[H]!==!0&&(n.enable(H),y[H]=!0)}function Ke(H){y[H]!==!1&&(n.disable(H),y[H]=!1)}function Ge(H,le){return _[H]!==le?(n.bindFramebuffer(H,le),_[H]=le,i&&(H===36009&&(_[36160]=le),H===36160&&(_[36009]=le)),!0):!1}function be(H,le){let ge=A,Re=!1;if(H)if(ge=E.get(le),ge===void 0&&(ge=[],E.set(le,ge)),H.isWebGLMultipleRenderTargets){const Oe=H.texture;if(ge.length!==Oe.length||ge[0]!==36064){for(let St=0,yt=Oe.length;St<yt;St++)ge[St]=36064+St;ge.length=Oe.length,Re=!0}}else ge[0]!==36064&&(ge[0]=36064,Re=!0);else ge[0]!==1029&&(ge[0]=1029,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Be(H){return x!==H?(n.useProgram(H),x=H,!0):!1}const dt={[Er]:32774,[fw]:32778,[dw]:32779};if(i)dt[jv]=32775,dt[Xv]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(dt[jv]=H.MIN_EXT,dt[Xv]=H.MAX_EXT)}const Fe={[Dh]:0,[hw]:1,[pw]:768,[Px]:770,[yw]:776,[Rx]:774,[Dx]:772,[mw]:769,[Ax]:771,[gw]:775,[vw]:773};function Qe(H,le,ge,Re,Oe,St,yt,on){if(H===un){h===!0&&(Ke(3042),h=!1);return}if(h===!1&&(te(3042),h=!0),H!==Sc){if(H!==S||on!==R){if((b!==Er||O!==Er)&&(n.blendEquation(32774),b=Er,O=Er),on)switch(H){case Cs:n.blendFuncSeparate(1,771,1,771);break;case Ah:n.blendFunc(1,1);break;case Hv:n.blendFuncSeparate(0,769,0,1);break;case Wv:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Cs:n.blendFuncSeparate(770,771,1,771);break;case Ah:n.blendFunc(770,1);break;case Hv:n.blendFuncSeparate(0,769,0,1);break;case Wv:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,D=null,B=null,k=null,S=H,R=on}return}Oe=Oe||le,St=St||ge,yt=yt||Re,(le!==b||Oe!==O)&&(n.blendEquationSeparate(dt[le],dt[Oe]),b=le,O=Oe),(ge!==P||Re!==D||St!==B||yt!==k)&&(n.blendFuncSeparate(Fe[ge],Fe[Re],Fe[St],Fe[yt]),P=ge,D=Re,B=St,k=yt),S=H,R=!1}function Xe(H,le){H.side===tr?Ke(2884):te(2884);let ge=H.side===Rn;le&&(ge=!ge),Et(ge),H.blending===Cs&&H.transparent===!1?Qe(un):Qe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),a.setMask(H.colorWrite);const Re=H.stencilWrite;p.setTest(Re),Re&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),at(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?te(32926):Ke(32926)}function Et(H){N!==H&&(H?n.frontFace(2304):n.frontFace(2305),N=H)}function Nt(H){H!==uw?(te(2884),H!==se&&(H===Gv?n.cullFace(1029):H===cw?n.cullFace(1028):n.cullFace(1032))):Ke(2884),se=H}function mt(H){H!==ue&&(fe&&n.lineWidth(H),ue=H)}function at(H,le,ge){H?(te(32823),($!==le||Z!==ge)&&(n.polygonOffset(le,ge),$=le,Z=ge)):Ke(32823)}function _t(H){H?te(3089):Ke(3089)}function jt(H){H===void 0&&(H=33984+W-1),J!==H&&(n.activeTexture(H),J=H)}function z(H,le,ge){ge===void 0&&(J===null?ge=33984+W-1:ge=J);let Re=re[ge];Re===void 0&&(Re={type:void 0,texture:void 0},re[ge]=Re),(Re.type!==H||Re.texture!==le)&&(J!==ge&&(n.activeTexture(ge),J=ge),n.bindTexture(H,le||Me[H]),Re.type=H,Re.texture=le)}function L(){const H=re[J];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(H){oe.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),oe.copy(H))}function Ue(H){q.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),q.copy(H))}function qe(H,le){let ge=g.get(le);ge===void 0&&(ge=new WeakMap,g.set(le,ge));let Re=ge.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(le,H.name),ge.set(H,Re))}function Je(H,le){const Re=g.get(le).get(H);m.get(le)!==Re&&(n.uniformBlockBinding(le,Re,H.__bindingPointIndex),m.set(le,Re))}function Pt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),y={},J=null,re={},_={},E=new WeakMap,A=[],x=null,h=!1,S=null,b=null,P=null,D=null,O=null,B=null,k=null,R=!1,N=null,se=null,ue=null,$=null,Z=null,oe.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),d.reset(),p.reset()}return{buffers:{color:a,depth:d,stencil:p},enable:te,disable:Ke,bindFramebuffer:Ge,drawBuffers:be,useProgram:Be,setBlending:Qe,setMaterial:Xe,setFlipSided:Et,setCullFace:Nt,setLineWidth:mt,setPolygonOffset:at,setScissorTest:_t,activeTexture:jt,bindTexture:z,unbindTexture:L,compressedTexImage2D:ae,compressedTexImage3D:pe,texImage2D:Le,texImage3D:ze,updateUBOMapping:qe,uniformBlockBinding:Je,texStorage2D:ne,texStorage3D:Ce,texSubImage2D:_e,texSubImage3D:Ee,compressedTexSubImage2D:V,compressedTexSubImage3D:he,scissor:De,viewport:Ue,reset:Pt}}function HP(n,e,t,i,r,o,l){const a=r.isWebGL2,d=r.maxTextures,p=r.maxCubemapSize,m=r.maxTextureSize,g=r.maxSamples,y=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let A;const x=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(z,L){return h?new OffscreenCanvas(z,L):ul("canvas")}function b(z,L,ae,pe){let _e=1;if((z.width>pe||z.height>pe)&&(_e=pe/Math.max(z.width,z.height)),_e<1||L===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const Ee=L?Qw:Math.floor,V=Ee(_e*z.width),he=Ee(_e*z.height);A===void 0&&(A=S(V,he));const ne=ae?S(V,he):A;return ne.width=V,ne.height=he,ne.getContext("2d").drawImage(z,0,0,V,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+V+"x"+he+")."),ne}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function P(z){return xg(z.width)&&xg(z.height)}function D(z){return a?!1:z.wrapS!==bi||z.wrapT!==bi||z.minFilter!==Qt&&z.minFilter!==ui}function O(z,L){return z.generateMipmaps&&L&&z.minFilter!==Qt&&z.minFilter!==ui}function B(z){n.generateMipmap(z)}function k(z,L,ae,pe,_e=!1){if(a===!1)return L;if(z!==null){if(n[z]!==void 0)return n[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ee=L;return L===6403&&(ae===5126&&(Ee=33326),ae===5131&&(Ee=33325),ae===5121&&(Ee=33321)),L===33319&&(ae===5126&&(Ee=33328),ae===5131&&(Ee=33327),ae===5121&&(Ee=33323)),L===6408&&(ae===5126&&(Ee=34836),ae===5131&&(Ee=34842),ae===5121&&(Ee=pe===bt&&_e===!1?35907:32856),ae===32819&&(Ee=32854),ae===32820&&(Ee=32855)),(Ee===33325||Ee===33326||Ee===33327||Ee===33328||Ee===34842||Ee===34836)&&e.get("EXT_color_buffer_float"),Ee}function R(z,L,ae){return O(z,ae)===!0||z.isFramebufferTexture&&z.minFilter!==Qt&&z.minFilter!==ui?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function N(z){return z===Qt||z===qv||z===Kf?9728:9729}function se(z){const L=z.target;L.removeEventListener("dispose",se),$(L),L.isVideoTexture&&E.delete(L)}function ue(z){const L=z.target;L.removeEventListener("dispose",ue),W(L)}function $(z){const L=i.get(z);if(L.__webglInit===void 0)return;const ae=z.source,pe=x.get(ae);if(pe){const _e=pe[L.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&Z(z),Object.keys(pe).length===0&&x.delete(ae)}i.remove(z)}function Z(z){const L=i.get(z);n.deleteTexture(L.__webglTexture);const ae=z.source,pe=x.get(ae);delete pe[L.__cacheKey],l.memory.textures--}function W(z){const L=z.texture,ae=i.get(z),pe=i.get(L);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),l.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)n.deleteFramebuffer(ae.__webglFramebuffer[_e]),ae.__webglDepthbuffer&&n.deleteRenderbuffer(ae.__webglDepthbuffer[_e]);else{if(n.deleteFramebuffer(ae.__webglFramebuffer),ae.__webglDepthbuffer&&n.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer)for(let _e=0;_e<ae.__webglColorRenderbuffer.length;_e++)ae.__webglColorRenderbuffer[_e]&&n.deleteRenderbuffer(ae.__webglColorRenderbuffer[_e]);ae.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ae.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let _e=0,Ee=L.length;_e<Ee;_e++){const V=i.get(L[_e]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),l.memory.textures--),i.remove(L[_e])}i.remove(L),i.remove(z)}let fe=0;function me(){fe=0}function j(){const z=fe;return z>=d&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+d),fe+=1,z}function J(z){const L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.encoding),L.join()}function re(z,L){const ae=i.get(z);if(z.isVideoTexture&&_t(z),z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){const pe=z.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(ae,z,L);return}}t.bindTexture(3553,ae.__webglTexture,33984+L)}function Te(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){Ke(ae,z,L);return}t.bindTexture(35866,ae.__webglTexture,33984+L)}function ve(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){Ke(ae,z,L);return}t.bindTexture(32879,ae.__webglTexture,33984+L)}function oe(z,L){const ae=i.get(z);if(z.version>0&&ae.__version!==z.version){Ge(ae,z,L);return}t.bindTexture(34067,ae.__webglTexture,33984+L)}const q={[bo]:10497,[bi]:33071,[Ih]:33648},we={[Qt]:9728,[qv]:9984,[Kf]:9986,[ui]:9729,[Lw]:9985,[sl]:9987};function Me(z,L,ae){if(ae?(n.texParameteri(z,10242,q[L.wrapS]),n.texParameteri(z,10243,q[L.wrapT]),(z===32879||z===35866)&&n.texParameteri(z,32882,q[L.wrapR]),n.texParameteri(z,10240,we[L.magFilter]),n.texParameteri(z,10241,we[L.minFilter])):(n.texParameteri(z,10242,33071),n.texParameteri(z,10243,33071),(z===32879||z===35866)&&n.texParameteri(z,32882,33071),(L.wrapS!==bi||L.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(z,10240,N(L.magFilter)),n.texParameteri(z,10241,N(L.minFilter)),L.minFilter!==Qt&&L.minFilter!==ui&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Qt||L.minFilter!==Kf&&L.minFilter!==sl||L.type===po&&e.has("OES_texture_float_linear")===!1||a===!1&&L.type===al&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(n.texParameterf(z,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function te(z,L){let ae=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",se));const pe=L.source;let _e=x.get(pe);_e===void 0&&(_e={},x.set(pe,_e));const Ee=J(L);if(Ee!==z.__cacheKey){_e[Ee]===void 0&&(_e[Ee]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),_e[Ee].usedTimes++;const V=_e[z.__cacheKey];V!==void 0&&(_e[z.__cacheKey].usedTimes--,V.usedTimes===0&&Z(L)),z.__cacheKey=Ee,z.__webglTexture=_e[Ee].texture}return ae}function Ke(z,L,ae){let pe=3553;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(pe=35866),L.isData3DTexture&&(pe=32879);const _e=te(z,L),Ee=L.source;t.bindTexture(pe,z.__webglTexture,33984+ae);const V=i.get(Ee);if(Ee.version!==V.__version||_e===!0){t.activeTexture(33984+ae),n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const he=D(L)&&P(L.image)===!1;let ne=b(L.image,he,!1,m);ne=jt(L,ne);const Ce=P(ne)||a,Le=o.convert(L.format,L.encoding);let ze=o.convert(L.type),De=k(L.internalFormat,Le,ze,L.encoding,L.isVideoTexture);Me(pe,L,Ce);let Ue;const qe=L.mipmaps,Je=a&&L.isVideoTexture!==!0,Pt=V.__version===void 0||_e===!0,H=R(L,ne,Ce);if(L.isDepthTexture)De=6402,a?L.type===po?De=36012:L.type===ho?De=33190:L.type===Ps?De=35056:De=33189:L.type===po&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===go&&De===6402&&L.type!==Np&&L.type!==ho&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=ho,ze=o.convert(L.type)),L.format===Bs&&De===6402&&(De=34041,L.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Ps,ze=o.convert(L.type))),Pt&&(Je?t.texStorage2D(3553,1,De,ne.width,ne.height):t.texImage2D(3553,0,De,ne.width,ne.height,0,Le,ze,null));else if(L.isDataTexture)if(qe.length>0&&Ce){Je&&Pt&&t.texStorage2D(3553,H,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],Je?t.texSubImage2D(3553,le,0,0,Ue.width,Ue.height,Le,ze,Ue.data):t.texImage2D(3553,le,De,Ue.width,Ue.height,0,Le,ze,Ue.data);L.generateMipmaps=!1}else Je?(Pt&&t.texStorage2D(3553,H,De,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,ne.width,ne.height,Le,ze,ne.data)):t.texImage2D(3553,0,De,ne.width,ne.height,0,Le,ze,ne.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Je&&Pt&&t.texStorage3D(35866,H,De,qe[0].width,qe[0].height,ne.depth);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],L.format!==Ei?Le!==null?Je?t.compressedTexSubImage3D(35866,le,0,0,0,Ue.width,Ue.height,ne.depth,Le,Ue.data,0,0):t.compressedTexImage3D(35866,le,De,Ue.width,Ue.height,ne.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,le,0,0,0,Ue.width,Ue.height,ne.depth,Le,ze,Ue.data):t.texImage3D(35866,le,De,Ue.width,Ue.height,ne.depth,0,Le,ze,Ue.data)}else{Je&&Pt&&t.texStorage2D(3553,H,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],L.format!==Ei?Le!==null?Je?t.compressedTexSubImage2D(3553,le,0,0,Ue.width,Ue.height,Le,Ue.data):t.compressedTexImage2D(3553,le,De,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,le,0,0,Ue.width,Ue.height,Le,ze,Ue.data):t.texImage2D(3553,le,De,Ue.width,Ue.height,0,Le,ze,Ue.data)}else if(L.isDataArrayTexture)Je?(Pt&&t.texStorage3D(35866,H,De,ne.width,ne.height,ne.depth),t.texSubImage3D(35866,0,0,0,0,ne.width,ne.height,ne.depth,Le,ze,ne.data)):t.texImage3D(35866,0,De,ne.width,ne.height,ne.depth,0,Le,ze,ne.data);else if(L.isData3DTexture)Je?(Pt&&t.texStorage3D(32879,H,De,ne.width,ne.height,ne.depth),t.texSubImage3D(32879,0,0,0,0,ne.width,ne.height,ne.depth,Le,ze,ne.data)):t.texImage3D(32879,0,De,ne.width,ne.height,ne.depth,0,Le,ze,ne.data);else if(L.isFramebufferTexture){if(Pt)if(Je)t.texStorage2D(3553,H,De,ne.width,ne.height);else{let le=ne.width,ge=ne.height;for(let Re=0;Re<H;Re++)t.texImage2D(3553,Re,De,le,ge,0,Le,ze,null),le>>=1,ge>>=1}}else if(qe.length>0&&Ce){Je&&Pt&&t.texStorage2D(3553,H,De,qe[0].width,qe[0].height);for(let le=0,ge=qe.length;le<ge;le++)Ue=qe[le],Je?t.texSubImage2D(3553,le,0,0,Le,ze,Ue):t.texImage2D(3553,le,De,Le,ze,Ue);L.generateMipmaps=!1}else Je?(Pt&&t.texStorage2D(3553,H,De,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,Le,ze,ne)):t.texImage2D(3553,0,De,Le,ze,ne);O(L,Ce)&&B(pe),V.__version=Ee.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Ge(z,L,ae){if(L.image.length!==6)return;const pe=te(z,L),_e=L.source;t.bindTexture(34067,z.__webglTexture,33984+ae);const Ee=i.get(_e);if(_e.version!==Ee.__version||pe===!0){t.activeTexture(33984+ae),n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const V=L.isCompressedTexture||L.image[0].isCompressedTexture,he=L.image[0]&&L.image[0].isDataTexture,ne=[];for(let le=0;le<6;le++)!V&&!he?ne[le]=b(L.image[le],!1,!0,p):ne[le]=he?L.image[le].image:L.image[le],ne[le]=jt(L,ne[le]);const Ce=ne[0],Le=P(Ce)||a,ze=o.convert(L.format,L.encoding),De=o.convert(L.type),Ue=k(L.internalFormat,ze,De,L.encoding),qe=a&&L.isVideoTexture!==!0,Je=Ee.__version===void 0||pe===!0;let Pt=R(L,Ce,Le);Me(34067,L,Le);let H;if(V){qe&&Je&&t.texStorage2D(34067,Pt,Ue,Ce.width,Ce.height);for(let le=0;le<6;le++){H=ne[le].mipmaps;for(let ge=0;ge<H.length;ge++){const Re=H[ge];L.format!==Ei?ze!==null?qe?t.compressedTexSubImage2D(34069+le,ge,0,0,Re.width,Re.height,ze,Re.data):t.compressedTexImage2D(34069+le,ge,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(34069+le,ge,0,0,Re.width,Re.height,ze,De,Re.data):t.texImage2D(34069+le,ge,Ue,Re.width,Re.height,0,ze,De,Re.data)}}}else{H=L.mipmaps,qe&&Je&&(H.length>0&&Pt++,t.texStorage2D(34067,Pt,Ue,ne[0].width,ne[0].height));for(let le=0;le<6;le++)if(he){qe?t.texSubImage2D(34069+le,0,0,0,ne[le].width,ne[le].height,ze,De,ne[le].data):t.texImage2D(34069+le,0,Ue,ne[le].width,ne[le].height,0,ze,De,ne[le].data);for(let ge=0;ge<H.length;ge++){const Oe=H[ge].image[le].image;qe?t.texSubImage2D(34069+le,ge+1,0,0,Oe.width,Oe.height,ze,De,Oe.data):t.texImage2D(34069+le,ge+1,Ue,Oe.width,Oe.height,0,ze,De,Oe.data)}}else{qe?t.texSubImage2D(34069+le,0,0,0,ze,De,ne[le]):t.texImage2D(34069+le,0,Ue,ze,De,ne[le]);for(let ge=0;ge<H.length;ge++){const Re=H[ge];qe?t.texSubImage2D(34069+le,ge+1,0,0,ze,De,Re.image[le]):t.texImage2D(34069+le,ge+1,Ue,ze,De,Re.image[le])}}}O(L,Le)&&B(34067),Ee.__version=_e.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function be(z,L,ae,pe,_e){const Ee=o.convert(ae.format,ae.encoding),V=o.convert(ae.type),he=k(ae.internalFormat,Ee,V,ae.encoding);i.get(L).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,he,L.width,L.height,L.depth,0,Ee,V,null):t.texImage2D(_e,0,he,L.width,L.height,0,Ee,V,null)),t.bindFramebuffer(36160,z),at(L)?y.framebufferTexture2DMultisampleEXT(36160,pe,_e,i.get(ae).__webglTexture,0,mt(L)):(_e===3553||_e>=34069&&_e<=34074)&&n.framebufferTexture2D(36160,pe,_e,i.get(ae).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(z,L,ae){if(n.bindRenderbuffer(36161,z),L.depthBuffer&&!L.stencilBuffer){let pe=33189;if(ae||at(L)){const _e=L.depthTexture;_e&&_e.isDepthTexture&&(_e.type===po?pe=36012:_e.type===ho&&(pe=33190));const Ee=mt(L);at(L)?y.renderbufferStorageMultisampleEXT(36161,Ee,pe,L.width,L.height):n.renderbufferStorageMultisample(36161,Ee,pe,L.width,L.height)}else n.renderbufferStorage(36161,pe,L.width,L.height);n.framebufferRenderbuffer(36160,36096,36161,z)}else if(L.depthBuffer&&L.stencilBuffer){const pe=mt(L);ae&&at(L)===!1?n.renderbufferStorageMultisample(36161,pe,35056,L.width,L.height):at(L)?y.renderbufferStorageMultisampleEXT(36161,pe,35056,L.width,L.height):n.renderbufferStorage(36161,34041,L.width,L.height),n.framebufferRenderbuffer(36160,33306,36161,z)}else{const pe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let _e=0;_e<pe.length;_e++){const Ee=pe[_e],V=o.convert(Ee.format,Ee.encoding),he=o.convert(Ee.type),ne=k(Ee.internalFormat,V,he,Ee.encoding),Ce=mt(L);ae&&at(L)===!1?n.renderbufferStorageMultisample(36161,Ce,ne,L.width,L.height):at(L)?y.renderbufferStorageMultisampleEXT(36161,Ce,ne,L.width,L.height):n.renderbufferStorage(36161,ne,L.width,L.height)}}n.bindRenderbuffer(36161,null)}function dt(z,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),re(L.depthTexture,0);const pe=i.get(L.depthTexture).__webglTexture,_e=mt(L);if(L.depthTexture.format===go)at(L)?y.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,_e):n.framebufferTexture2D(36160,36096,3553,pe,0);else if(L.depthTexture.format===Bs)at(L)?y.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,_e):n.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function Fe(z){const L=i.get(z),ae=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!L.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");dt(L.__webglFramebuffer,z)}else if(ae){L.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(36160,L.__webglFramebuffer[pe]),L.__webglDepthbuffer[pe]=n.createRenderbuffer(),Be(L.__webglDepthbuffer[pe],z,!1)}else t.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=n.createRenderbuffer(),Be(L.__webglDepthbuffer,z,!1);t.bindFramebuffer(36160,null)}function Qe(z,L,ae){const pe=i.get(z);L!==void 0&&be(pe.__webglFramebuffer,z,z.texture,36064,3553),ae!==void 0&&Fe(z)}function Xe(z){const L=z.texture,ae=i.get(z),pe=i.get(L);z.addEventListener("dispose",ue),z.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=L.version,l.memory.textures++);const _e=z.isWebGLCubeRenderTarget===!0,Ee=z.isWebGLMultipleRenderTargets===!0,V=P(z)||a;if(_e){ae.__webglFramebuffer=[];for(let he=0;he<6;he++)ae.__webglFramebuffer[he]=n.createFramebuffer()}else{if(ae.__webglFramebuffer=n.createFramebuffer(),Ee)if(r.drawBuffers){const he=z.texture;for(let ne=0,Ce=he.length;ne<Ce;ne++){const Le=i.get(he[ne]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&z.samples>0&&at(z)===!1){const he=Ee?L:[L];ae.__webglMultisampledFramebuffer=n.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer);for(let ne=0;ne<he.length;ne++){const Ce=he[ne];ae.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(36161,ae.__webglColorRenderbuffer[ne]);const Le=o.convert(Ce.format,Ce.encoding),ze=o.convert(Ce.type),De=k(Ce.internalFormat,Le,ze,Ce.encoding,z.isXRRenderTarget===!0),Ue=mt(z);n.renderbufferStorageMultisample(36161,Ue,De,z.width,z.height),n.framebufferRenderbuffer(36160,36064+ne,36161,ae.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(36161,null),z.depthBuffer&&(ae.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(ae.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,pe.__webglTexture),Me(34067,L,V);for(let he=0;he<6;he++)be(ae.__webglFramebuffer[he],z,L,36064,34069+he);O(L,V)&&B(34067),t.unbindTexture()}else if(Ee){const he=z.texture;for(let ne=0,Ce=he.length;ne<Ce;ne++){const Le=he[ne],ze=i.get(Le);t.bindTexture(3553,ze.__webglTexture),Me(3553,Le,V),be(ae.__webglFramebuffer,z,Le,36064+ne,3553),O(Le,V)&&B(3553)}t.unbindTexture()}else{let he=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(a?he=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,pe.__webglTexture),Me(he,L,V),be(ae.__webglFramebuffer,z,L,36064,he),O(L,V)&&B(he),t.unbindTexture()}z.depthBuffer&&Fe(z)}function Et(z){const L=P(z)||a,ae=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let pe=0,_e=ae.length;pe<_e;pe++){const Ee=ae[pe];if(O(Ee,L)){const V=z.isWebGLCubeRenderTarget?34067:3553,he=i.get(Ee).__webglTexture;t.bindTexture(V,he),B(V),t.unbindTexture()}}}function Nt(z){if(a&&z.samples>0&&at(z)===!1){const L=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],ae=z.width,pe=z.height;let _e=16384;const Ee=[],V=z.stencilBuffer?33306:36096,he=i.get(z),ne=z.isWebGLMultipleRenderTargets===!0;if(ne)for(let Ce=0;Ce<L.length;Ce++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ce,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ce,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let Ce=0;Ce<L.length;Ce++){Ee.push(36064+Ce),z.depthBuffer&&Ee.push(V);const Le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Le===!1&&(z.depthBuffer&&(_e|=256),z.stencilBuffer&&(_e|=1024)),ne&&n.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[Ce]),Le===!0&&(n.invalidateFramebuffer(36008,[V]),n.invalidateFramebuffer(36009,[V])),ne){const ze=i.get(L[Ce]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ze,0)}n.blitFramebuffer(0,0,ae,pe,0,0,ae,pe,_e,9728),_&&n.invalidateFramebuffer(36008,Ee)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let Ce=0;Ce<L.length;Ce++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ce,36161,he.__webglColorRenderbuffer[Ce]);const Le=i.get(L[Ce]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ce,3553,Le,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function mt(z){return Math.min(g,z.samples)}function at(z){const L=i.get(z);return a&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function _t(z){const L=l.render.frame;E.get(z)!==L&&(E.set(z,L),z.update())}function jt(z,L){const ae=z.encoding,pe=z.format,_e=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===Oh||ae!==To&&(ae===bt?a===!1?e.has("EXT_sRGB")===!0&&pe===Ei?(z.format=Oh,z.minFilter=ui,z.generateMipmaps=!1):L=Ux.sRGBToLinear(L):(pe!==Ei||_e!==Eo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ae)),L}this.allocateTextureUnit=j,this.resetTextureUnits=me,this.setTexture2D=re,this.setTexture2DArray=Te,this.setTexture3D=ve,this.setTextureCube=oe,this.rebindTextures=Qe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=at}function WP(n,e,t){const i=t.isWebGL2;function r(o,l=null){let a;if(o===Eo)return 5121;if(o===Uw)return 32819;if(o===kw)return 32820;if(o===Iw)return 5120;if(o===Ow)return 5122;if(o===Np)return 5123;if(o===Nw)return 5124;if(o===ho)return 5125;if(o===po)return 5126;if(o===al)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===zw)return 6406;if(o===Ei)return 6408;if(o===Fw)return 6409;if(o===Bw)return 6410;if(o===go)return 6402;if(o===Bs)return 34041;if(o===Oh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Vw)return 6403;if(o===Gw)return 36244;if(o===Hw)return 33319;if(o===Ww)return 33320;if(o===jw)return 36249;if(o===Zf||o===Qf||o===Jf||o===ed)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Zf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Qf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Zf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Qf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Jf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ed)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===$v||o===Yv||o===Kv||o===Zv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===$v)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Yv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Kv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Zv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Xw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Qv||o===Jv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Qv)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Jv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===eg||o===tg||o===ng||o===ig||o===rg||o===og||o===sg||o===ag||o===lg||o===ug||o===cg||o===fg||o===dg||o===hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===eg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===tg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ng)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ig)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===rg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===og)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===sg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ag)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===lg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ug)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===cg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===fg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===dg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===hg)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===td)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===td)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===qw||o===pg||o===mg||o===vg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===td)return a.COMPRESSED_RED_RGTC1_EXT;if(o===pg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===vg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ps?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class jP extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nu extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XP={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,l=null;const a=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){l=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,i),h=this._getHandJoint(p,A);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=x.radius),h.visible=x!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=m.position.distanceTo(g.position),_=.02,E=.005;p.inputState.pinching&&y>_+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=_-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XP)))}return a!==null&&(a.visible=r!==null),d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Zx extends Wn{constructor(e,t,i,r,o,l,a,d,p,m){if(m=m!==void 0?m:go,m!==go&&m!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===go&&(i=ho),i===void 0&&m===Bs&&(i=Ps),super(null,r,o,l,a,d,m,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1}}class qP extends Do{constructor(e,t){super();const i=this;let r=null,o=1,l=null,a="local-floor",d=1,p=null,m=null,g=null,y=null,_=null,E=null;const A=t.getContextAttributes();let x=null,h=null;const S=[],b=[],P=new Set,D=new Map,O=new kn;O.layers.enable(1),O.viewport=new Rt;const B=new kn;B.layers.enable(2),B.viewport=new Rt;const k=[O,B],R=new jP;R.layers.enable(1),R.layers.enable(2);let N=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let q=S[oe];return q===void 0&&(q=new Ed,S[oe]=q),q.getTargetRaySpace()},this.getControllerGrip=function(oe){let q=S[oe];return q===void 0&&(q=new Ed,S[oe]=q),q.getGripSpace()},this.getHand=function(oe){let q=S[oe];return q===void 0&&(q=new Ed,S[oe]=q),q.getHandSpace()};function ue(oe){const q=b.indexOf(oe.inputSource);if(q===-1)return;const we=S[q];we!==void 0&&we.dispatchEvent({type:oe.type,data:oe.inputSource})}function $(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<S.length;oe++){const q=b[oe];q!==null&&(b[oe]=null,S[oe].disconnect(q))}N=null,se=null,e.setRenderTarget(x),_=null,y=null,g=null,r=null,h=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return y!==null?y:_},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),A.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?A.antialias:!0,alpha:A.alpha,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:_}),h=new en(_.framebufferWidth,_.framebufferHeight,{format:Ei,type:Eo,encoding:e.outputEncoding,stencilBuffer:A.stencil})}else{let q=null,we=null,Me=null;A.depth&&(Me=A.stencil?35056:33190,q=A.stencil?Bs:go,we=A.stencil?Ps:ho);const te={colorFormat:32856,depthFormat:Me,scaleFactor:o};g=new XRWebGLBinding(r,t),y=g.createProjectionLayer(te),r.updateRenderState({layers:[y]}),h=new en(y.textureWidth,y.textureHeight,{format:Ei,type:Eo,depthTexture:new Zx(y.textureWidth,y.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:A.stencil,encoding:e.outputEncoding,samples:A.antialias?4:0});const Ke=e.properties.get(h);Ke.__ignoreDepthValues=y.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(d),p=null,l=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Z(oe){for(let q=0;q<oe.removed.length;q++){const we=oe.removed[q],Me=b.indexOf(we);Me>=0&&(b[Me]=null,S[Me].disconnect(we))}for(let q=0;q<oe.added.length;q++){const we=oe.added[q];let Me=b.indexOf(we);if(Me===-1){for(let Ke=0;Ke<S.length;Ke++)if(Ke>=b.length){b.push(we),Me=Ke;break}else if(b[Ke]===null){b[Ke]=we,Me=Ke;break}if(Me===-1)break}const te=S[Me];te&&te.connect(we)}}const W=new X,fe=new X;function me(oe,q,we){W.setFromMatrixPosition(q.matrixWorld),fe.setFromMatrixPosition(we.matrixWorld);const Me=W.distanceTo(fe),te=q.projectionMatrix.elements,Ke=we.projectionMatrix.elements,Ge=te[14]/(te[10]-1),be=te[14]/(te[10]+1),Be=(te[9]+1)/te[5],dt=(te[9]-1)/te[5],Fe=(te[8]-1)/te[0],Qe=(Ke[8]+1)/Ke[0],Xe=Ge*Fe,Et=Ge*Qe,Nt=Me/(-Fe+Qe),mt=Nt*-Fe;q.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(mt),oe.translateZ(Nt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const at=Ge+Nt,_t=be+Nt,jt=Xe-mt,z=Et+(Me-mt),L=Be*be/_t*at,ae=dt*be/_t*at;oe.projectionMatrix.makePerspective(jt,z,L,ae,at,_t),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function j(oe,q){q===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(q.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;R.near=B.near=O.near=oe.near,R.far=B.far=O.far=oe.far,(N!==R.near||se!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,se=R.far);const q=oe.parent,we=R.cameras;j(R,q);for(let Me=0;Me<we.length;Me++)j(we[Me],q);we.length===2?me(R,O,B):R.projectionMatrix.copy(O.projectionMatrix),J(oe,R,q)};function J(oe,q,we){we===null?oe.matrix.copy(q.matrixWorld):(oe.matrix.copy(we.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(q.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0);const Me=oe.children;for(let te=0,Ke=Me.length;te<Ke;te++)Me[te].updateMatrixWorld(!0);oe.projectionMatrix.copy(q.projectionMatrix),oe.projectionMatrixInverse.copy(q.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=wc*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&_===null))return d},this.setFoveation=function(oe){d=oe,y!==null&&(y.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.getPlanes=function(){return P};let re=null;function Te(oe,q){if(m=q.getViewerPose(p||l),E=q,m!==null){const we=m.views;_!==null&&(e.setRenderTargetFramebuffer(h,_.framebuffer),e.setRenderTarget(h));let Me=!1;we.length!==R.cameras.length&&(R.cameras.length=0,Me=!0);for(let te=0;te<we.length;te++){const Ke=we[te];let Ge=null;if(_!==null)Ge=_.getViewport(Ke);else{const Be=g.getViewSubImage(y,Ke);Ge=Be.viewport,te===0&&(e.setRenderTargetTextures(h,Be.colorTexture,y.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(h))}let be=k[te];be===void 0&&(be=new kn,be.layers.enable(te),be.viewport=new Rt,k[te]=be),be.matrix.fromArray(Ke.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ke.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),te===0&&(R.matrix.copy(be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Me===!0&&R.cameras.push(be)}}for(let we=0;we<S.length;we++){const Me=b[we],te=S[we];Me!==null&&te!==void 0&&te.update(Me,q,p||l)}if(re&&re(oe,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let we=null;for(const Me of P)q.detectedPlanes.has(Me)||(we===null&&(we=[]),we.push(Me));if(we!==null)for(const Me of we)P.delete(Me),D.delete(Me),i.dispatchEvent({type:"planeremoved",data:Me});for(const Me of q.detectedPlanes)if(!P.has(Me))P.add(Me),D.set(Me,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Me});else{const te=D.get(Me);Me.lastChangedTime>te&&(D.set(Me,Me.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Me}))}}E=null}const ve=new Xx;ve.setAnimationLoop(Te),this.setAnimationLoop=function(oe){re=oe},this.dispose=function(){}}}function $P(n,e){function t(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,Hx(n)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,S,b,P){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(x,h):h.isMeshToonMaterial?(o(x,h),g(x,h)):h.isMeshPhongMaterial?(o(x,h),m(x,h)):h.isMeshStandardMaterial?(o(x,h),y(x,h),h.isMeshPhysicalMaterial&&_(x,h,P)):h.isMeshMatcapMaterial?(o(x,h),E(x,h)):h.isMeshDepthMaterial?o(x,h):h.isMeshDistanceMaterial?(o(x,h),A(x,h)):h.isMeshNormalMaterial?o(x,h):h.isLineBasicMaterial?(l(x,h),h.isLineDashedMaterial&&a(x,h)):h.isPointsMaterial?d(x,h,S,b):h.isSpriteMaterial?p(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,t(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===Rn&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,t(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===Rn&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,t(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,t(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(x.envMap.value=S,x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap){x.lightMap.value=h.lightMap;const b=n.useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,x.lightMapTransform)}h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,x.aoMapTransform))}function l(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform))}function a(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function d(x,h,S,b){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*S,x.scale.value=b*.5,h.map&&(x.map.value=h.map,t(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function p(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function m(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function g(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function y(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,x.roughnessMapTransform)),e.get(h).envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function _(x,h,S){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rn&&x.clearcoatNormalScale.value.negate())),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,h){h.matcap&&(x.matcap.value=h.matcap)}function A(x,h){const S=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YP(n,e,t,i){let r={},o={},l=[];const a=t.isWebGL2?n.getParameter(35375):0;function d(S,b){const P=b.program;i.uniformBlockBinding(S,P)}function p(S,b){let P=r[S.id];P===void 0&&(E(S),P=m(S),r[S.id]=P,S.addEventListener("dispose",x));const D=b.program;i.updateUBOMapping(S,D);const O=e.render.frame;o[S.id]!==O&&(y(S),o[S.id]=O)}function m(S){const b=g();S.__bindingPointIndex=b;const P=n.createBuffer(),D=S.__size,O=S.usage;return n.bindBuffer(35345,P),n.bufferData(35345,D,O),n.bindBuffer(35345,null),n.bindBufferBase(35345,b,P),P}function g(){for(let S=0;S<a;S++)if(l.indexOf(S)===-1)return l.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(S){const b=r[S.id],P=S.uniforms,D=S.__cache;n.bindBuffer(35345,b);for(let O=0,B=P.length;O<B;O++){const k=P[O];if(_(k,O,D)===!0){const R=k.__offset,N=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let ue=0;ue<N.length;ue++){const $=N[ue],Z=A($);typeof $=="number"?(k.__data[0]=$,n.bufferSubData(35345,R+se,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=$.elements[0],k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=$.elements[0],k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=$.elements[0]):($.toArray(k.__data,se),se+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,R,k.__data)}}n.bindBuffer(35345,null)}function _(S,b,P){const D=S.value;if(P[b]===void 0){if(typeof D=="number")P[b]=D;else{const O=Array.isArray(D)?D:[D],B=[];for(let k=0;k<O.length;k++)B.push(O[k].clone());P[b]=B}return!0}else if(typeof D=="number"){if(P[b]!==D)return P[b]=D,!0}else{const O=Array.isArray(P[b])?P[b]:[P[b]],B=Array.isArray(D)?D:[D];for(let k=0;k<O.length;k++){const R=O[k];if(R.equals(B[k])===!1)return R.copy(B[k]),!0}}return!1}function E(S){const b=S.uniforms;let P=0;const D=16;let O=0;for(let B=0,k=b.length;B<k;B++){const R=b[B],N={boundary:0,storage:0},se=Array.isArray(R.value)?R.value:[R.value];for(let ue=0,$=se.length;ue<$;ue++){const Z=se[ue],W=A(Z);N.boundary+=W.boundary,N.storage+=W.storage}if(R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=P,B>0){O=P%D;const ue=D-O;O!==0&&ue-N.boundary<0&&(P+=D-O,R.__offset=P)}P+=N.storage}return O=P%D,O>0&&(P+=D-O),S.__size=P,S.__cache={},this}function A(S){const b={boundary:0,storage:0};return typeof S=="number"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function x(S){const b=S.target;b.removeEventListener("dispose",x);const P=l.indexOf(b.__bindingPointIndex);l.splice(P,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);l=[],r={},o={}}return{bind:d,update:p,dispose:h}}function KP(){const n=ul("canvas");return n.style.display="block",n}class Qx{constructor(e={}){const{canvas:t=KP(),context:i=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let y;i!==null?y=i.getContextAttributes().alpha:y=l;let _=null,E=null;const A=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=To,this.useLegacyLights=!0,this.toneMapping=Gi,this.toneMappingExposure=1;const h=this;let S=!1,b=0,P=0,D=null,O=-1,B=null;const k=new Rt,R=new Rt;let N=null,se=t.width,ue=t.height,$=1,Z=null,W=null;const fe=new Rt(0,0,se,ue),me=new Rt(0,0,se,ue);let j=!1;const J=new kp;let re=!1,Te=!1,ve=null;const oe=new Gt,q=new X,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return D===null?$:1}let te=i;function Ke(U,Q){for(let ie=0;ie<U.length;ie++){const Y=U[ie],de=t.getContext(Y,Q);if(de!==null)return de}return null}try{const U={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ip}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Je,!1),te===null){const Q=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&Q.shift(),te=Ke(Q,U),te===null)throw Ke(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Ge,be,Be,dt,Fe,Qe,Xe,Et,Nt,mt,at,_t,jt,z,L,ae,pe,_e,Ee,V,he,ne,Ce,Le;function ze(){Ge=new cC(te),be=new rC(te,Ge,e),Ge.init(be),ne=new WP(te,Ge,be),Be=new GP(te,Ge,be),dt=new hC,Fe=new DP,Qe=new HP(te,Ge,Be,Fe,be,ne,dt),Xe=new sC(h),Et=new uC(h),Nt=new Eb(te,be),Ce=new nC(te,Ge,Nt,be),mt=new fC(te,Nt,dt,Ce),at=new gC(te,mt,Nt,dt),Ee=new vC(te,be,Qe),ae=new oC(Fe),_t=new AP(h,Xe,Et,Ge,be,Ce,ae),jt=new $P(h,Fe),z=new LP,L=new zP(Ge,be),_e=new tC(h,Xe,Et,Be,at,y,d),pe=new VP(h,at,be),Le=new YP(te,dt,be,Be),V=new iC(te,Ge,dt,be),he=new dC(te,Ge,dt,be),dt.programs=_t.programs,h.capabilities=be,h.extensions=Ge,h.properties=Fe,h.renderLists=z,h.shadowMap=pe,h.state=Be,h.info=dt}ze();const De=new qP(h,te);this.xr=De,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const U=Ge.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Ge.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(se,ue,!1))},this.getSize=function(U){return U.set(se,ue)},this.setSize=function(U,Q,ie=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=U,ue=Q,t.width=Math.floor(U*$),t.height=Math.floor(Q*$),ie===!0&&(t.style.width=U+"px",t.style.height=Q+"px"),this.setViewport(0,0,U,Q)},this.getDrawingBufferSize=function(U){return U.set(se*$,ue*$).floor()},this.setDrawingBufferSize=function(U,Q,ie){se=U,ue=Q,$=ie,t.width=Math.floor(U*ie),t.height=Math.floor(Q*ie),this.setViewport(0,0,U,Q)},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(fe)},this.setViewport=function(U,Q,ie,Y){U.isVector4?fe.set(U.x,U.y,U.z,U.w):fe.set(U,Q,ie,Y),Be.viewport(k.copy(fe).multiplyScalar($).floor())},this.getScissor=function(U){return U.copy(me)},this.setScissor=function(U,Q,ie,Y){U.isVector4?me.set(U.x,U.y,U.z,U.w):me.set(U,Q,ie,Y),Be.scissor(R.copy(me).multiplyScalar($).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(U){Be.setScissorTest(j=U)},this.setOpaqueSort=function(U){Z=U},this.setTransparentSort=function(U){W=U},this.getClearColor=function(U){return U.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(U=!0,Q=!0,ie=!0){let Y=0;U&&(Y|=16384),Q&&(Y|=256),ie&&(Y|=1024),te.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),z.dispose(),L.dispose(),Fe.dispose(),Xe.dispose(),Et.dispose(),at.dispose(),Ce.dispose(),Le.dispose(),_t.dispose(),De.dispose(),De.removeEventListener("sessionstart",Oe),De.removeEventListener("sessionend",St),ve&&(ve.dispose(),ve=null),yt.stop()};function Ue(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const U=dt.autoReset,Q=pe.enabled,ie=pe.autoUpdate,Y=pe.needsUpdate,de=pe.type;ze(),dt.autoReset=U,pe.enabled=Q,pe.autoUpdate=ie,pe.needsUpdate=Y,pe.type=de}function Je(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Pt(U){const Q=U.target;Q.removeEventListener("dispose",Pt),H(Q)}function H(U){le(U),Fe.remove(U)}function le(U){const Q=Fe.get(U).programs;Q!==void 0&&(Q.forEach(function(ie){_t.releaseProgram(ie)}),U.isShaderMaterial&&_t.releaseShaderCache(U))}this.renderBufferDirect=function(U,Q,ie,Y,de,Ve){Q===null&&(Q=we);const Ye=de.isMesh&&de.matrixWorld.determinant()<0,We=$e(U,Q,ie,Y,de);Be.setMaterial(Y,Ye);let et=ie.index,it=1;Y.wireframe===!0&&(et=mt.getWireframeAttribute(ie),it=2);const nt=ie.drawRange,rt=ie.attributes.position;let ht=nt.start*it,sn=(nt.start+nt.count)*it;Ve!==null&&(ht=Math.max(ht,Ve.start*it),sn=Math.min(sn,(Ve.start+Ve.count)*it)),et!==null?(ht=Math.max(ht,0),sn=Math.min(sn,et.count)):rt!=null&&(ht=Math.max(ht,0),sn=Math.min(sn,rt.count));const En=sn-ht;if(En<0||En===1/0)return;Ce.setup(de,Y,We,ie,et);let Ri,Bt=V;if(et!==null&&(Ri=Nt.get(et),Bt=he,Bt.setIndex(Ri)),de.isMesh)Y.wireframe===!0?(Be.setLineWidth(Y.wireframeLinewidth*Me()),Bt.setMode(1)):Bt.setMode(4);else if(de.isLine){let lt=Y.linewidth;lt===void 0&&(lt=1),Be.setLineWidth(lt*Me()),de.isLineSegments?Bt.setMode(1):de.isLineLoop?Bt.setMode(2):Bt.setMode(3)}else de.isPoints?Bt.setMode(0):de.isSprite&&Bt.setMode(4);if(de.isInstancedMesh)Bt.renderInstances(ht,En,de.count);else if(ie.isInstancedBufferGeometry){const lt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,cr=Math.min(ie.instanceCount,lt);Bt.renderInstances(ht,En,cr)}else Bt.render(ht,En)},this.compile=function(U,Q){function ie(Y,de,Ve){Y.transparent===!0&&Y.side===tr&&Y.forceSinglePass===!1?(Y.side=Rn,Y.needsUpdate=!0,Ro(Y,de,Ve),Y.side=zr,Y.needsUpdate=!0,Ro(Y,de,Ve),Y.side=tr):Ro(Y,de,Ve)}E=L.get(U),E.init(),x.push(E),U.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Q.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(h.useLegacyLights),U.traverse(function(Y){const de=Y.material;if(de)if(Array.isArray(de))for(let Ve=0;Ve<de.length;Ve++){const Ye=de[Ve];ie(Ye,U,Y)}else ie(de,U,Y)}),x.pop(),E=null};let ge=null;function Re(U){ge&&ge(U)}function Oe(){yt.stop()}function St(){yt.start()}const yt=new Xx;yt.setAnimationLoop(Re),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(U){ge=U,De.setAnimationLoop(U),U===null?yt.stop():yt.start()},De.addEventListener("sessionstart",Oe),De.addEventListener("sessionend",St),this.render=function(U,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),U.isScene===!0&&U.onBeforeRender(h,U,Q,D),E=L.get(U,x.length),E.init(),x.push(E),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J.setFromProjectionMatrix(oe),Te=this.localClippingEnabled,re=ae.init(this.clippingPlanes,Te),_=z.get(U,A.length),_.init(),A.push(_),on(U,Q,0,h.sortObjects),_.finish(),h.sortObjects===!0&&_.sort(Z,W),re===!0&&ae.beginShadows();const ie=E.state.shadowsArray;if(pe.render(ie,U,Q),re===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(_,U),E.setupLights(h.useLegacyLights),Q.isArrayCamera){const Y=Q.cameras;for(let de=0,Ve=Y.length;de<Ve;de++){const Ye=Y[de];Xt(_,U,Ye,Ye.viewport)}}else Xt(_,U,Q);D!==null&&(Qe.updateMultisampleRenderTarget(D),Qe.updateRenderTargetMipmap(D)),U.isScene===!0&&U.onAfterRender(h,U,Q),Ce.resetDefaultState(),O=-1,B=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,A.pop(),A.length>0?_=A[A.length-1]:_=null};function on(U,Q,ie,Y){if(U.visible===!1)return;if(U.layers.test(Q.layers)){if(U.isGroup)ie=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Q);else if(U.isLight)E.pushLight(U),U.castShadow&&E.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||J.intersectsSprite(U)){Y&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(oe);const Ye=at.update(U),We=U.material;We.visible&&_.push(U,Ye,We,ie,q.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(U.isSkinnedMesh&&U.skeleton.frame!==dt.render.frame&&(U.skeleton.update(),U.skeleton.frame=dt.render.frame),!U.frustumCulled||J.intersectsObject(U))){Y&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(oe);const Ye=at.update(U),We=U.material;if(Array.isArray(We)){const et=Ye.groups;for(let it=0,nt=et.length;it<nt;it++){const rt=et[it],ht=We[rt.materialIndex];ht&&ht.visible&&_.push(U,Ye,ht,ie,q.z,rt)}}else We.visible&&_.push(U,Ye,We,ie,q.z,null)}}const Ve=U.children;for(let Ye=0,We=Ve.length;Ye<We;Ye++)on(Ve[Ye],Q,ie,Y)}function Xt(U,Q,ie,Y){const de=U.opaque,Ve=U.transmissive,Ye=U.transparent;E.setupLightsView(ie),re===!0&&ae.setGlobalState(h.clippingPlanes,ie),Ve.length>0&&vt(de,Ve,Q,ie),Y&&Be.viewport(k.copy(Y)),de.length>0&&qt(de,Q,ie),Ve.length>0&&qt(Ve,Q,ie),Ye.length>0&&qt(Ye,Q,ie),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function vt(U,Q,ie,Y){if(ve===null){const We=be.isWebGL2;ve=new en(1024,1024,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")?al:Eo,minFilter:sl,samples:We&&a===!0?4:0})}const de=h.getRenderTarget();h.setRenderTarget(ve),h.clear();const Ve=h.toneMapping;h.toneMapping=Gi,qt(U,ie,Y),Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve);let Ye=!1;for(let We=0,et=Q.length;We<et;We++){const it=Q[We],nt=it.object,rt=it.geometry,ht=it.material,sn=it.group;if(ht.side===tr&&nt.layers.test(Y.layers)){const En=ht.side;ht.side=Rn,ht.needsUpdate=!0,jn(nt,ie,Y,rt,ht,sn),ht.side=En,ht.needsUpdate=!0,Ye=!0}}Ye===!0&&(Qe.updateMultisampleRenderTarget(ve),Qe.updateRenderTargetMipmap(ve)),h.setRenderTarget(de),h.toneMapping=Ve}function qt(U,Q,ie){const Y=Q.isScene===!0?Q.overrideMaterial:null;for(let de=0,Ve=U.length;de<Ve;de++){const Ye=U[de],We=Ye.object,et=Ye.geometry,it=Y===null?Ye.material:Y,nt=Ye.group;We.layers.test(ie.layers)&&jn(We,Q,ie,et,it,nt)}}function jn(U,Q,ie,Y,de,Ve){U.onBeforeRender(h,Q,ie,Y,de,Ve),U.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),de.onBeforeRender(h,Q,ie,Y,U,Ve),de.transparent===!0&&de.side===tr&&de.forceSinglePass===!1?(de.side=Rn,de.needsUpdate=!0,h.renderBufferDirect(ie,Q,Y,de,U,Ve),de.side=zr,de.needsUpdate=!0,h.renderBufferDirect(ie,Q,Y,de,U,Ve),de.side=tr):h.renderBufferDirect(ie,Q,Y,de,U,Ve),U.onAfterRender(h,Q,ie,Y,de,Ve)}function Ro(U,Q,ie){Q.isScene!==!0&&(Q=we);const Y=Fe.get(U),de=E.state.lights,Ve=E.state.shadowsArray,Ye=de.state.version,We=_t.getParameters(U,de.state,Ve,Q,ie),et=_t.getProgramCacheKey(We);let it=Y.programs;Y.environment=U.isMeshStandardMaterial?Q.environment:null,Y.fog=Q.fog,Y.envMap=(U.isMeshStandardMaterial?Et:Xe).get(U.envMap||Y.environment),it===void 0&&(U.addEventListener("dispose",Pt),it=new Map,Y.programs=it);let nt=it.get(et);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===Ye)return ni(U,We),nt}else We.uniforms=_t.getUniforms(U),U.onBuild(ie,We,h),U.onBeforeCompile(We,h),nt=_t.acquireProgram(We,et),it.set(et,nt),Y.uniforms=We.uniforms;const rt=Y.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(rt.clippingPlanes=ae.uniform),ni(U,We),Y.needsLights=jr(U),Y.lightsStateVersion=Ye,Y.needsLights&&(rt.ambientLightColor.value=de.state.ambient,rt.lightProbe.value=de.state.probe,rt.directionalLights.value=de.state.directional,rt.directionalLightShadows.value=de.state.directionalShadow,rt.spotLights.value=de.state.spot,rt.spotLightShadows.value=de.state.spotShadow,rt.rectAreaLights.value=de.state.rectArea,rt.ltc_1.value=de.state.rectAreaLTC1,rt.ltc_2.value=de.state.rectAreaLTC2,rt.pointLights.value=de.state.point,rt.pointLightShadows.value=de.state.pointShadow,rt.hemisphereLights.value=de.state.hemi,rt.directionalShadowMap.value=de.state.directionalShadowMap,rt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,rt.spotShadowMap.value=de.state.spotShadowMap,rt.spotLightMatrix.value=de.state.spotLightMatrix,rt.spotLightMap.value=de.state.spotLightMap,rt.pointShadowMap.value=de.state.pointShadowMap,rt.pointShadowMatrix.value=de.state.pointShadowMatrix);const ht=nt.getUniforms(),sn=Yu.seqWithValue(ht.seq,rt);return Y.currentProgram=nt,Y.uniformsList=sn,nt}function ni(U,Q){const ie=Fe.get(U);ie.outputEncoding=Q.outputEncoding,ie.instancing=Q.instancing,ie.skinning=Q.skinning,ie.morphTargets=Q.morphTargets,ie.morphNormals=Q.morphNormals,ie.morphColors=Q.morphColors,ie.morphTargetsCount=Q.morphTargetsCount,ie.numClippingPlanes=Q.numClippingPlanes,ie.numIntersection=Q.numClipIntersection,ie.vertexAlphas=Q.vertexAlphas,ie.vertexTangents=Q.vertexTangents,ie.toneMapping=Q.toneMapping}function $e(U,Q,ie,Y,de){Q.isScene!==!0&&(Q=we),Qe.resetTextureUnits();const Ve=Q.fog,Ye=Y.isMeshStandardMaterial?Q.environment:null,We=D===null?h.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:To,et=(Y.isMeshStandardMaterial?Et:Xe).get(Y.envMap||Ye),it=Y.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!Y.normalMap&&!!ie.attributes.tangent,rt=!!ie.morphAttributes.position,ht=!!ie.morphAttributes.normal,sn=!!ie.morphAttributes.color,En=Y.toneMapped?h.toneMapping:Gi,Ri=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Bt=Ri!==void 0?Ri.length:0,lt=Fe.get(Y),cr=E.state.lights;if(re===!0&&(Te===!0||U!==B)){const Tn=U===B&&Y.id===O;ae.setState(Y,U,Tn)}let $t=!1;Y.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==cr.state.version||lt.outputEncoding!==We||de.isInstancedMesh&&lt.instancing===!1||!de.isInstancedMesh&&lt.instancing===!0||de.isSkinnedMesh&&lt.skinning===!1||!de.isSkinnedMesh&&lt.skinning===!0||lt.envMap!==et||Y.fog===!0&&lt.fog!==Ve||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==ae.numPlanes||lt.numIntersection!==ae.numIntersection)||lt.vertexAlphas!==it||lt.vertexTangents!==nt||lt.morphTargets!==rt||lt.morphNormals!==ht||lt.morphColors!==sn||lt.toneMapping!==En||be.isWebGL2===!0&&lt.morphTargetsCount!==Bt)&&($t=!0):($t=!0,lt.__version=Y.version);let ii=lt.currentProgram;$t===!0&&(ii=Ro(Y,Q,de));let Io=!1,Xr=!1,Ys=!1;const Ht=ii.getUniforms(),Hi=lt.uniforms;if(Be.useProgram(ii.program)&&(Io=!0,Xr=!0,Ys=!0),Y.id!==O&&(O=Y.id,Xr=!0),Io||B!==U){if(Ht.setValue(te,"projectionMatrix",U.projectionMatrix),be.logarithmicDepthBuffer&&Ht.setValue(te,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),B!==U&&(B=U,Xr=!0,Ys=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const Tn=Ht.map.cameraPosition;Tn!==void 0&&Tn.setValue(te,q.setFromMatrixPosition(U.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ht.setValue(te,"isOrthographic",U.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||de.isSkinnedMesh)&&Ht.setValue(te,"viewMatrix",U.matrixWorldInverse)}if(de.isSkinnedMesh){Ht.setOptional(te,de,"bindMatrix"),Ht.setOptional(te,de,"bindMatrixInverse");const Tn=de.skeleton;Tn&&(be.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ht.setValue(te,"boneTexture",Tn.boneTexture,Qe),Ht.setValue(te,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mi=ie.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0&&be.isWebGL2===!0)&&Ee.update(de,ie,ii),(Xr||lt.receiveShadow!==de.receiveShadow)&&(lt.receiveShadow=de.receiveShadow,Ht.setValue(te,"receiveShadow",de.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Hi.envMap.value=et,Hi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),Xr&&(Ht.setValue(te,"toneMappingExposure",h.toneMappingExposure),lt.needsLights&&Lo(Hi,Ys),Ve&&Y.fog===!0&&jt.refreshFogUniforms(Hi,Ve),jt.refreshMaterialUniforms(Hi,Y,$,ue,ve),Yu.upload(te,lt.uniformsList,Hi,Qe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Yu.upload(te,lt.uniformsList,Hi,Qe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ht.setValue(te,"center",de.center),Ht.setValue(te,"modelViewMatrix",de.modelViewMatrix),Ht.setValue(te,"normalMatrix",de.normalMatrix),Ht.setValue(te,"modelMatrix",de.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Tn=Y.uniformsGroups;for(let Ks=0,Cl=Tn.length;Ks<Cl;Ks++)if(be.isWebGL2){const Pl=Tn[Ks];Le.update(Pl,ii),Le.bind(Pl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Lo(U,Q){U.ambientLightColor.needsUpdate=Q,U.lightProbe.needsUpdate=Q,U.directionalLights.needsUpdate=Q,U.directionalLightShadows.needsUpdate=Q,U.pointLights.needsUpdate=Q,U.pointLightShadows.needsUpdate=Q,U.spotLights.needsUpdate=Q,U.spotLightShadows.needsUpdate=Q,U.rectAreaLights.needsUpdate=Q,U.hemisphereLights.needsUpdate=Q}function jr(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,Q,ie){Fe.get(U.texture).__webglTexture=Q,Fe.get(U.depthTexture).__webglTexture=ie;const Y=Fe.get(U);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ie===void 0,Y.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,Q){const ie=Fe.get(U);ie.__webglFramebuffer=Q,ie.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(U,Q=0,ie=0){D=U,b=Q,P=ie;let Y=!0,de=null,Ve=!1,Ye=!1;if(U){const et=Fe.get(U);et.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(36160,null),Y=!1):et.__webglFramebuffer===void 0?Qe.setupRenderTarget(U):et.__hasExternalTextures&&Qe.rebindTextures(U,Fe.get(U.texture).__webglTexture,Fe.get(U.depthTexture).__webglTexture);const it=U.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ye=!0);const nt=Fe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(de=nt[Q],Ve=!0):be.isWebGL2&&U.samples>0&&Qe.useMultisampledRTT(U)===!1?de=Fe.get(U).__webglMultisampledFramebuffer:de=nt,k.copy(U.viewport),R.copy(U.scissor),N=U.scissorTest}else k.copy(fe).multiplyScalar($).floor(),R.copy(me).multiplyScalar($).floor(),N=j;if(Be.bindFramebuffer(36160,de)&&be.drawBuffers&&Y&&Be.drawBuffers(U,de),Be.viewport(k),Be.scissor(R),Be.setScissorTest(N),Ve){const et=Fe.get(U.texture);te.framebufferTexture2D(36160,36064,34069+Q,et.__webglTexture,ie)}else if(Ye){const et=Fe.get(U.texture),it=Q||0;te.framebufferTextureLayer(36160,36064,et.__webglTexture,ie||0,it)}O=-1},this.readRenderTargetPixels=function(U,Q,ie,Y,de,Ve,Ye){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Fe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ye!==void 0&&(We=We[Ye]),We){Be.bindFramebuffer(36160,We);try{const et=U.texture,it=et.format,nt=et.type;if(it!==Ei&&ne.convert(it)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=nt===al&&(Ge.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ge.has("EXT_color_buffer_float"));if(nt!==Eo&&ne.convert(nt)!==te.getParameter(35738)&&!(nt===po&&(be.isWebGL2||Ge.has("OES_texture_float")||Ge.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=U.width-Y&&ie>=0&&ie<=U.height-de&&te.readPixels(Q,ie,Y,de,ne.convert(it),ne.convert(nt),Ve)}finally{const et=D!==null?Fe.get(D).__webglFramebuffer:null;Be.bindFramebuffer(36160,et)}}},this.copyFramebufferToTexture=function(U,Q,ie=0){const Y=Math.pow(2,-ie),de=Math.floor(Q.image.width*Y),Ve=Math.floor(Q.image.height*Y);Qe.setTexture2D(Q,0),te.copyTexSubImage2D(3553,ie,0,0,U.x,U.y,de,Ve),Be.unbindTexture()},this.copyTextureToTexture=function(U,Q,ie,Y=0){const de=Q.image.width,Ve=Q.image.height,Ye=ne.convert(ie.format),We=ne.convert(ie.type);Qe.setTexture2D(ie,0),te.pixelStorei(37440,ie.flipY),te.pixelStorei(37441,ie.premultiplyAlpha),te.pixelStorei(3317,ie.unpackAlignment),Q.isDataTexture?te.texSubImage2D(3553,Y,U.x,U.y,de,Ve,Ye,We,Q.image.data):Q.isCompressedTexture?te.compressedTexSubImage2D(3553,Y,U.x,U.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Ye,Q.mipmaps[0].data):te.texSubImage2D(3553,Y,U.x,U.y,Ye,We,Q.image),Y===0&&ie.generateMipmaps&&te.generateMipmap(3553),Be.unbindTexture()},this.copyTextureToTexture3D=function(U,Q,ie,Y,de=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=U.max.x-U.min.x+1,Ye=U.max.y-U.min.y+1,We=U.max.z-U.min.z+1,et=ne.convert(Y.format),it=ne.convert(Y.type);let nt;if(Y.isData3DTexture)Qe.setTexture3D(Y,0),nt=32879;else if(Y.isDataArrayTexture)Qe.setTexture2DArray(Y,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(37440,Y.flipY),te.pixelStorei(37441,Y.premultiplyAlpha),te.pixelStorei(3317,Y.unpackAlignment);const rt=te.getParameter(3314),ht=te.getParameter(32878),sn=te.getParameter(3316),En=te.getParameter(3315),Ri=te.getParameter(32877),Bt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;te.pixelStorei(3314,Bt.width),te.pixelStorei(32878,Bt.height),te.pixelStorei(3316,U.min.x),te.pixelStorei(3315,U.min.y),te.pixelStorei(32877,U.min.z),ie.isDataTexture||ie.isData3DTexture?te.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,We,et,it,Bt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,We,et,Bt.data)):te.texSubImage3D(nt,de,Q.x,Q.y,Q.z,Ve,Ye,We,et,it,Bt),te.pixelStorei(3314,rt),te.pixelStorei(32878,ht),te.pixelStorei(3316,sn),te.pixelStorei(3315,En),te.pixelStorei(32877,Ri),de===0&&Y.generateMipmaps&&te.generateMipmap(nt),Be.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?Qe.setTextureCube(U,0):U.isData3DTexture?Qe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Qe.setTexture2DArray(U,0):Qe.setTexture2D(U,0),Be.unbindTexture()},this.resetState=function(){b=0,P=0,D=null,Be.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class ZP extends Qx{}ZP.prototype.isWebGL1Renderer=!0;class Jx extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ds extends Pi{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Fp extends Di{constructor(e=1,t=1,i=1,r=32,o=1,l=!1,a=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:a,thetaLength:d};const p=this;r=Math.floor(r),o=Math.floor(o);const m=[],g=[],y=[],_=[];let E=0;const A=[],x=i/2;let h=0;S(),l===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(m),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(_,2));function S(){const P=new X,D=new X;let O=0;const B=(t-e)/i;for(let k=0;k<=o;k++){const R=[],N=k/o,se=N*(t-e)+e;for(let ue=0;ue<=r;ue++){const $=ue/r,Z=$*d+a,W=Math.sin(Z),fe=Math.cos(Z);D.x=se*W,D.y=-N*i+x,D.z=se*fe,g.push(D.x,D.y,D.z),P.set(W,B,fe).normalize(),y.push(P.x,P.y,P.z),_.push($,1-N),R.push(E++)}A.push(R)}for(let k=0;k<r;k++)for(let R=0;R<o;R++){const N=A[R][k],se=A[R+1][k],ue=A[R+1][k+1],$=A[R][k+1];m.push(N,se,$),m.push(se,ue,$),O+=6}p.addGroup(h,O,0),h+=O}function b(P){const D=E,O=new Ne,B=new X;let k=0;const R=P===!0?e:t,N=P===!0?1:-1;for(let ue=1;ue<=r;ue++)g.push(0,x*N,0),y.push(0,N,0),_.push(.5,.5),E++;const se=E;for(let ue=0;ue<=r;ue++){const Z=ue/r*d+a,W=Math.cos(Z),fe=Math.sin(Z);B.x=R*fe,B.y=x*N,B.z=R*W,g.push(B.x,B.y,B.z),y.push(0,N,0),O.x=W*.5+.5,O.y=fe*.5*N+.5,_.push(O.x,O.y),E++}for(let ue=0;ue<r;ue++){const $=D+ue,Z=se+ue;P===!0?m.push(Z,Z+1,$):m.push(Z+1,Z,$),k+=3}p.addGroup(h,k,P===!0?1:2),h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xc extends Di{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(l+a,Math.PI);let p=0;const m=[],g=new X,y=new X,_=[],E=[],A=[],x=[];for(let h=0;h<=i;h++){const S=[],b=h/i;let P=0;h===0&&l===0?P=.5/t:h===i&&d===Math.PI&&(P=-.5/t);for(let D=0;D<=t;D++){const O=D/t;g.x=-e*Math.cos(r+O*o)*Math.sin(l+b*a),g.y=e*Math.cos(l+b*a),g.z=e*Math.sin(r+O*o)*Math.sin(l+b*a),E.push(g.x,g.y,g.z),y.copy(g).normalize(),A.push(y.x,y.y,y.z),x.push(O+P,1-b),S.push(p++)}m.push(S)}for(let h=0;h<i;h++)for(let S=0;S<t;S++){const b=m[h][S+1],P=m[h][S],D=m[h+1][S],O=m[h+1][S+1];(h!==0||l>0)&&_.push(b,P,O),(h!==i-1||d<Math.PI)&&_.push(P,D,O)}this.setIndex(_),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class QP extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n0 extends QP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xs extends Hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class e_ extends Hr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class JP extends Hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const i0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class e2{constructor(e,t,i){const r=this;let o=!1,l=0,a=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){a++,o===!1&&r.onStart!==void 0&&r.onStart(m,l,a),o=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,a),l===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return p.push(m,g),this},this.removeHandler=function(m){const g=p.indexOf(m);return g!==-1&&p.splice(g,2),this},this.getHandler=function(m){for(let g=0,y=p.length;g<y;g+=2){const _=p[g],E=p[g+1];if(_.global&&(_.lastIndex=0),_.test(m))return E}return null}}}const t2=new e2;class t_{constructor(e){this.manager=e!==void 0?e:t2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class n2 extends t_{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=i0.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const a=ul("img");function d(){m(),i0.add(e,this),t&&t(this),o.manager.itemEnd(e)}function p(g){m(),r&&r(g),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){a.removeEventListener("load",d,!1),a.removeEventListener("error",p,!1)}return a.addEventListener("load",d,!1),a.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class i2 extends t_{constructor(e){super(e)}load(e,t,i,r){const o=new Wn,l=new n2(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Tl extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class r2 extends Tl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Td=new Gt,r0=new X,o0=new X;class Bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;r0.setFromMatrixPosition(e.matrixWorld),t.position.copy(r0),o0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(o0),t.updateMatrixWorld(),Td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o2 extends Bp{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cd extends Tl{constructor(e,t,i=0,r=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new o2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const s0=new Gt,ba=new X,Pd=new X;class s2 extends Bp{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),Pd.copy(i.position),Pd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pd),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),s0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s0)}}class os extends Tl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new s2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class a2 extends Bp{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l2 extends Tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new a2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ea extends Tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class n_ extends Di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class u2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=a0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=a0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function a0(){return(typeof performance>"u"?Date:performance).now()}class l0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);const c2=n=>{const{camera:e,composer:t}=n,i=1,r=window.innerWidth*i,o=window.innerHeight*i,l=t.renderer.domElement;if(l.width!==r||l.height!==o){e.aspect=r/o,e.zoom=Math.min(1,r/o),e.updateProjectionMatrix(),t.renderer.setSize(r,o),t.setSize(r,o);const a=t.renderer.getPixelRatio();t.setPixelRatio(a);const d=r*a,p=o*a;t.passes.forEach(m=>{var g,y;if((y=(g=m.material)==null?void 0:g.uniforms)!=null&&y.resolution){let _=d,E=p;m.material.uniforms.resolution.value.x<=1&&(_=1/_,E=1/E),m.material.uniforms.resolution.value.x=_,m.material.uniforms.resolution.value.y=E}m.resolution&&(m.resolution=new Ne(r,o))}),l.style.width=r+"px",l.style.height=o+"px"}t.render()};var Uh={},f2={get exports(){return Uh},set exports(n){Uh=n}};(function(n,e){(function(t){n.exports=t()})(function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(s){return!(!s||!s.Window)&&s instanceof s.Window};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.getWindow=function(s){return(0,t.default)(s)?s:(s.ownerDocument||s).defaultView||o.window},i.init=l,i.window=i.realWindow=void 0;var r=void 0;i.realWindow=r;var o=void 0;function l(s){i.realWindow=r=s;var u=s.document.createTextNode("");u.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(u)===u&&(s=s.wrap(s)),i.window=o=s}i.window=o,typeof window<"u"&&window&&l(window);var a={};function d(s){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p=function(s){return!!s&&d(s)==="object"},m=function(s){return typeof s=="function"},g={window:function(s){return s===i.window||(0,t.default)(s)},docFrag:function(s){return p(s)&&s.nodeType===11},object:p,func:m,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||d(s)!=="object")return!1;var u=i.getWindow(s)||i.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?s instanceof Element||s instanceof u.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return p(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return p(s)&&s.length!==void 0&&m(s.splice)}};a.default=g;var y={};function _(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.prepared.axis;c==="x"?(u.coords.cur.page.y=u.coords.start.page.y,u.coords.cur.client.y=u.coords.start.client.y,u.coords.velocity.client.y=0,u.coords.velocity.page.y=0):c==="y"&&(u.coords.cur.page.x=u.coords.start.page.x,u.coords.cur.client.x=u.coords.start.client.x,u.coords.velocity.client.x=0,u.coords.velocity.page.x=0)}}function E(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="drag"){var f=c.prepared.axis;if(f==="x"||f==="y"){var v=f==="x"?"y":"x";u.page[v]=c.coords.start.page[v],u.client[v]=c.coords.start.client[v],u.delta[v]=0}}}Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var A={id:"actions/drag",install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.draggable=A.draggable,u.map.drag=A,u.methodDict.drag="draggable",f.actions.drag=A.defaults},listeners:{"interactions:before-action-move":_,"interactions:action-resume":_,"interactions:action-move":E,"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.buttons,v=c.options.drag;if(v&&v.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||f&c.options.drag.mouseButtons))return s.action={name:"drag",axis:v.lockAxis==="start"?v.startAxis:v.lockAxis},!1}},draggable:function(s){return a.default.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):a.default.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:_,move:E,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},x=A;y.default=x;var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var S={init:function(s){var u=s;S.document=u.document,S.DocumentFragment=u.DocumentFragment||b,S.SVGElement=u.SVGElement||b,S.SVGSVGElement=u.SVGSVGElement||b,S.SVGElementInstance=u.SVGElementInstance||b,S.Element=u.Element||b,S.HTMLElement=u.HTMLElement||S.Element,S.Event=u.Event,S.Touch=u.Touch||b,S.PointerEvent=u.PointerEvent||u.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function b(){}var P=S;h.default=P;var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var O={init:function(s){var u=h.default.Element,c=s.navigator||{};O.supportsTouch="ontouchstart"in s||a.default.func(s.DocumentTouch)&&h.default.document instanceof s.DocumentTouch,O.supportsPointerEvent=c.pointerEnabled!==!1&&!!h.default.PointerEvent,O.isIOS=/iP(hone|od|ad)/.test(c.platform),O.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),O.isIe9=/MSIE 9/.test(c.userAgent),O.isOperaMobile=c.appName==="Opera"&&O.supportsTouch&&/Presto/.test(c.userAgent),O.prefixedMatchesSelector="matches"in u.prototype?"matches":"webkitMatchesSelector"in u.prototype?"webkitMatchesSelector":"mozMatchesSelector"in u.prototype?"mozMatchesSelector":"oMatchesSelector"in u.prototype?"oMatchesSelector":"msMatchesSelector",O.pEventTypes=O.supportsPointerEvent?h.default.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,O.wheelEvent=h.default.document&&"onmousewheel"in h.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},B=O;D.default=B;var k={};function R(s){var u=s.parentNode;if(a.default.docFrag(u)){for(;(u=u.host)&&a.default.docFrag(u););return u}return u}function N(s,u){return i.window!==i.realWindow&&(u=u.replace(/\/deep\//g," ")),s[D.default.prefixedMatchesSelector](u)}Object.defineProperty(k,"__esModule",{value:!0}),k.closest=function(s,u){for(;a.default.element(s);){if(N(s,u))return s;s=R(s)}return null},k.getActualElement=function(s){return s.correspondingUseElement||s},k.getElementClientRect=Z,k.getElementRect=function(s){var u=Z(s);if(!D.default.isIOS7&&u){var c=$(i.getWindow(s));u.left+=c.x,u.right+=c.x,u.top+=c.y,u.bottom+=c.y}return u},k.getPath=function(s){for(var u=[];s;)u.push(s),s=R(s);return u},k.getScrollXY=$,k.indexOfDeepestElement=function(s){for(var u,c=[],f=0;f<s.length;f++){var v=s[f],M=s[u];if(v&&f!==u)if(M){var C=se(v),w=se(M);if(C!==v.ownerDocument)if(w!==v.ownerDocument)if(C!==w){c=c.length?c:ue(M);var T=void 0;if(M instanceof h.default.HTMLElement&&v instanceof h.default.SVGElement&&!(v instanceof h.default.SVGSVGElement)){if(v===w)continue;T=v.ownerSVGElement}else T=v;for(var I=ue(T,M.ownerDocument),F=0;I[F]&&I[F]===c[F];)F++;var G=[I[F-1],I[F],c[F]];if(G[0])for(var ee=G[0].lastChild;ee;){if(ee===G[1]){u=f,c=I;break}if(ee===G[2])break;ee=ee.previousSibling}}else ce=v,K=M,(parseInt(i.getWindow(ce).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(i.getWindow(K).getComputedStyle(K).zIndex,10)||0)&&(u=f);else u=f}else u=f}var ce,K;return u},k.matchesSelector=N,k.matchesUpTo=function(s,u,c){for(;a.default.element(s);){if(N(s,u))return!0;if((s=R(s))===c)return N(s,u)}return!1},k.nodeContains=function(s,u){if(s.contains)return s.contains(u);for(;u;){if(u===s)return!0;u=u.parentNode}return!1},k.parentNode=R,k.trySelector=function(s){return!!a.default.string(s)&&(h.default.document.querySelector(s),!0)};var se=function(s){return s.parentNode||s.host};function ue(s,u){for(var c,f=[],v=s;(c=se(v))&&v!==u&&c!==v.ownerDocument;)f.unshift(v),v=c;return f}function $(s){return{x:(s=s||i.window).scrollX||s.document.documentElement.scrollLeft,y:s.scrollY||s.document.documentElement.scrollTop}}function Z(s){var u=s instanceof h.default.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return u&&{left:u.left,right:u.right,top:u.top,bottom:u.bottom,width:u.width||u.right-u.left,height:u.height||u.bottom-u.top}}var W={};Object.defineProperty(W,"__esModule",{value:!0}),W.default=function(s,u){for(var c in u)s[c]=u[c];return s};var fe={};function me(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function j(s,u,c){return s==="parent"?(0,k.parentNode)(c):s==="self"?u.getRect(c):(0,k.closest)(c,s)}Object.defineProperty(fe,"__esModule",{value:!0}),fe.addEdges=function(s,u,c){s.left&&(u.left+=c.x),s.right&&(u.right+=c.x),s.top&&(u.top+=c.y),s.bottom&&(u.bottom+=c.y),u.width=u.right-u.left,u.height=u.bottom-u.top},fe.getStringOptionResult=j,fe.rectToXY=function(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}},fe.resolveRectLike=function(s,u,c,f){var v,M=s;return a.default.string(M)?M=j(M,u,c):a.default.func(M)&&(M=M.apply(void 0,function(C){if(Array.isArray(C))return me(C)}(v=f)||function(C){if(typeof Symbol<"u"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}(v)||function(C,w){if(C){if(typeof C=="string")return me(C,w);var T=Object.prototype.toString.call(C).slice(8,-1);return T==="Object"&&C.constructor&&(T=C.constructor.name),T==="Map"||T==="Set"?Array.from(C):T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)?me(C,w):void 0}}(v)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),a.default.element(M)&&(M=(0,k.getElementRect)(M)),M},fe.tlbrToXywh=function(s){return!s||"x"in s&&"y"in s||((s=(0,W.default)({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s},fe.xywhToTlbr=function(s){return!s||"left"in s&&"top"in s||((s=(0,W.default)({},s)).left=s.x||0,s.top=s.y||0,s.right=s.right||s.left+s.width,s.bottom=s.bottom||s.top+s.height),s};var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(s,u,c){var f=s.options[c],v=f&&f.origin||s.options.origin,M=(0,fe.resolveRectLike)(v,s,u,[s&&u]);return(0,fe.rectToXY)(M)||{x:0,y:0}};var re={};function Te(s){return s.trim().split(/ +/)}Object.defineProperty(re,"__esModule",{value:!0}),re.default=function s(u,c,f){if(f=f||{},a.default.string(u)&&u.search(" ")!==-1&&(u=Te(u)),a.default.array(u))return u.reduce(function(T,I){return(0,W.default)(T,s(I,c,f))},f);if(a.default.object(u)&&(c=u,u=""),a.default.func(c))f[u]=f[u]||[],f[u].push(c);else if(a.default.array(c))for(var v=0;v<c.length;v++){var M;M=c[v],s(u,M,f)}else if(a.default.object(c))for(var C in c){var w=Te(C).map(function(T){return"".concat(u).concat(T)});s(w,c[C],f)}return f};var ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=void 0,ve.default=function(s,u){return Math.sqrt(s*s+u*u)};var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=function(s,u){s.__set||(s.__set={});var c=function(v){typeof s[v]!="function"&&v!=="__set"&&Object.defineProperty(s,v,{get:function(){return v in s.__set?s.__set[v]:s.__set[v]=u[v]},set:function(M){s.__set[v]=M},configurable:!0})};for(var f in u)c(f);return s};var q={};function we(s){return s instanceof h.default.Event||s instanceof h.default.Touch}function Me(s,u,c){return s=s||"page",(c=c||{}).x=u[s+"X"],c.y=u[s+"Y"],c}function te(s,u){return u=u||{x:0,y:0},D.default.isOperaMobile&&we(s)?(Me("screen",s,u),u.x+=window.scrollX,u.y+=window.scrollY):Me("page",s,u),u}function Ke(s,u){return u=u||{},D.default.isOperaMobile&&we(s)?Me("screen",s,u):Me("client",s,u),u}function Ge(s){var u=[];return a.default.array(s)?(u[0]=s[0],u[1]=s[1]):s.type==="touchend"?s.touches.length===1?(u[0]=s.touches[0],u[1]=s.changedTouches[0]):s.touches.length===0&&(u[0]=s.changedTouches[0],u[1]=s.changedTouches[1]):(u[0]=s.touches[0],u[1]=s.touches[1]),u}function be(s){for(var u={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<s.length;c++){var f=s[c];for(var v in u)u[v]+=f[v]}for(var M in u)u[M]/=s.length;return u}Object.defineProperty(q,"__esModule",{value:!0}),q.coordsToEvent=function(s){return{coords:s,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},q.copyCoords=function(s,u){s.page=s.page||{},s.page.x=u.page.x,s.page.y=u.page.y,s.client=s.client||{},s.client.x=u.client.x,s.client.y=u.client.y,s.timeStamp=u.timeStamp},q.getClientXY=Ke,q.getEventTargets=function(s){var u=a.default.func(s.composedPath)?s.composedPath():s.path;return[k.getActualElement(u?u[0]:s.target),k.getActualElement(s.currentTarget)]},q.getPageXY=te,q.getPointerId=function(s){return a.default.number(s.pointerId)?s.pointerId:s.identifier},q.getPointerType=function(s){return a.default.string(s.pointerType)?s.pointerType:a.default.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof h.default.Touch?"touch":"mouse"},q.getTouchPair=Ge,q.getXY=Me,q.isNativePointer=we,q.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},q.pointerAverage=be,Object.defineProperty(q,"pointerExtend",{enumerable:!0,get:function(){return oe.default}}),q.setCoordDeltas=function(s,u,c){s.page.x=c.page.x-u.page.x,s.page.y=c.page.y-u.page.y,s.client.x=c.client.x-u.client.x,s.client.y=c.client.y-u.client.y,s.timeStamp=c.timeStamp-u.timeStamp},q.setCoordVelocity=function(s,u){var c=Math.max(u.timeStamp/1e3,.001);s.page.x=u.page.x/c,s.page.y=u.page.y/c,s.client.x=u.client.x/c,s.client.y=u.client.y/c,s.timeStamp=c},q.setCoords=function(s,u,c){var f=u.length>1?be(u):u[0];te(f,s.page),Ke(f,s.client),s.timeStamp=c},q.setZeroCoords=function(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0},q.touchAngle=function(s,u){var c=u+"X",f=u+"Y",v=Ge(s),M=v[1][c]-v[0][c],C=v[1][f]-v[0][f];return 180*Math.atan2(C,M)/Math.PI},q.touchBBox=function(s){if(!s.length)return null;var u=Ge(s),c=Math.min(u[0].pageX,u[1].pageX),f=Math.min(u[0].pageY,u[1].pageY),v=Math.max(u[0].pageX,u[1].pageX),M=Math.max(u[0].pageY,u[1].pageY);return{x:c,y:f,left:c,top:f,right:v,bottom:M,width:v-c,height:M-f}},q.touchDistance=function(s,u){var c=u+"X",f=u+"Y",v=Ge(s),M=v[0][c]-v[1][c],C=v[0][f]-v[1][f];return(0,ve.default)(M,C)};var Be={};function dt(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Fe(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Be,"__esModule",{value:!0}),Be.BaseEvent=void 0;var Qe=function(){function s(f){(function(v,M){if(!(v instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),Fe(this,"immediatePropagationStopped",!1),Fe(this,"propagationStopped",!1),this._interaction=f}var u,c;return u=s,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&dt(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Be.BaseEvent=Qe,Object.defineProperty(Qe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0}),Xe.remove=Xe.merge=Xe.from=Xe.findIndex=Xe.find=Xe.contains=void 0,Xe.contains=function(s,u){return s.indexOf(u)!==-1},Xe.remove=function(s,u){return s.splice(s.indexOf(u),1)};var Et=function(s,u){for(var c=0;c<u.length;c++){var f=u[c];s.push(f)}return s};Xe.merge=Et,Xe.from=function(s){return Et([],s)};var Nt=function(s,u){for(var c=0;c<s.length;c++)if(u(s[c],c,s))return c;return-1};Xe.findIndex=Nt,Xe.find=function(s,u){return s[Nt(s,u)]};var mt={};function at(s){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},at(s)}function _t(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function jt(s,u){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},jt(s,u)}function z(s,u){if(u&&(at(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(s)}function L(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ae(s){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},ae(s)}function pe(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(mt,"__esModule",{value:!0}),mt.DropEvent=void 0;var _e=function(s){(function(w,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(T&&T.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),T&&jt(w,T)})(C,s);var u,c,f,v,M=(f=C,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,T=ae(f);if(v){var I=ae(this).constructor;w=Reflect.construct(T,arguments,I)}else w=T.apply(this,arguments);return z(this,w)});function C(w,T,I){var F;(function(K,ye){if(!(K instanceof ye))throw new TypeError("Cannot call a class as a function")})(this,C),pe(L(F=M.call(this,T._interaction)),"dropzone",void 0),pe(L(F),"dragEvent",void 0),pe(L(F),"relatedTarget",void 0),pe(L(F),"draggable",void 0),pe(L(F),"propagationStopped",!1),pe(L(F),"immediatePropagationStopped",!1);var G=I==="dragleave"?w.prev:w.cur,ee=G.element,ce=G.dropzone;return F.type=I,F.target=ee,F.currentTarget=ee,F.dropzone=ce,F.dragEvent=T,F.relatedTarget=T.target,F.draggable=T.interactable,F.timeStamp=T.timeStamp,F}return u=C,(c=[{key:"reject",value:function(){var w=this,T=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&T.cur.dropzone===this.dropzone&&T.cur.element===this.target)if(T.prev.dropzone=this.dropzone,T.prev.element=this.target,T.rejected=!0,T.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var I=T.activeDrops,F=Xe.findIndex(I,function(ee){var ce=ee.dropzone,K=ee.element;return ce===w.dropzone&&K===w.target});T.activeDrops.splice(F,1);var G=new C(T,this.dragEvent,"dropdeactivate");G.dropzone=this.dropzone,G.target=this.target,this.dropzone.fire(G)}else this.dropzone.fire(new C(T,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&_t(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Be.BaseEvent);mt.DropEvent=_e;var Ee={};function V(s,u){for(var c=0;c<s.slice().length;c++){var f=s.slice()[c],v=f.dropzone,M=f.element;u.dropzone=v,u.target=M,v.fire(u),u.propagationStopped=u.immediatePropagationStopped=!1}}function he(s,u){for(var c=function(M,C){for(var w=M.interactables,T=[],I=0;I<w.list.length;I++){var F=w.list[I];if(F.options.drop.enabled){var G=F.options.drop.accept;if(!(a.default.element(G)&&G!==C||a.default.string(G)&&!k.matchesSelector(C,G)||a.default.func(G)&&!G({dropzone:F,draggableElement:C})))for(var ee=a.default.string(F.target)?F._context.querySelectorAll(F.target):a.default.array(F.target)?F.target:[F.target],ce=0;ce<ee.length;ce++){var K=ee[ce];K!==C&&T.push({dropzone:F,element:K,rect:F.getRect(K)})}}}return T}(s,u),f=0;f<c.length;f++){var v=c[f];v.rect=v.dropzone.getRect(v.element)}return c}function ne(s,u,c){for(var f=s.dropState,v=s.interactable,M=s.element,C=[],w=0;w<f.activeDrops.length;w++){var T=f.activeDrops[w],I=T.dropzone,F=T.element,G=T.rect;C.push(I.dropCheck(u,c,v,M,F,G)?F:null)}var ee=k.indexOfDeepestElement(C);return f.activeDrops[ee]||null}function Ce(s,u,c){var f=s.dropState,v={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(v.activate=new mt.DropEvent(f,c,"dropactivate"),v.activate.target=null,v.activate.dropzone=null),c.type==="dragend"&&(v.deactivate=new mt.DropEvent(f,c,"dropdeactivate"),v.deactivate.target=null,v.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(v.leave=new mt.DropEvent(f,c,"dragleave"),c.dragLeave=v.leave.target=f.prev.element,c.prevDropzone=v.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(v.enter=new mt.DropEvent(f,c,"dragenter"),c.dragEnter=f.cur.element,c.dropzone=f.cur.dropzone)),c.type==="dragend"&&f.cur.dropzone&&(v.drop=new mt.DropEvent(f,c,"drop"),c.dropzone=f.cur.dropzone,c.relatedTarget=f.cur.element),c.type==="dragmove"&&f.cur.dropzone&&(v.move=new mt.DropEvent(f,c,"dropmove"),v.move.dragmove=c,c.dropzone=f.cur.dropzone)),v}function Le(s,u){var c=s.dropState,f=c.activeDrops,v=c.cur,M=c.prev;u.leave&&M.dropzone.fire(u.leave),u.enter&&v.dropzone.fire(u.enter),u.move&&v.dropzone.fire(u.move),u.drop&&v.dropzone.fire(u.drop),u.deactivate&&V(f,u.deactivate),c.prev.dropzone=v.dropzone,c.prev.element=v.element}function ze(s,u){var c=s.interaction,f=s.iEvent,v=s.event;if(f.type==="dragmove"||f.type==="dragend"){var M=c.dropState;u.dynamicDrop&&(M.activeDrops=he(u,c.element));var C=f,w=ne(c,C,v);M.rejected=M.rejected&&!!w&&w.dropzone===M.cur.dropzone&&w.element===M.cur.element,M.cur.dropzone=w&&w.dropzone,M.cur.element=w&&w.element,M.events=Ce(c,0,C)}}Object.defineProperty(Ee,"__esModule",{value:!0}),Ee.default=void 0;var De={id:"actions/drop",install:function(s){var u=s.actions,c=s.interactStatic,f=s.Interactable,v=s.defaults;s.usePlugin(y.default),f.prototype.dropzone=function(M){return function(C,w){if(a.default.object(w)){if(C.options.drop.enabled=w.enabled!==!1,w.listeners){var T=(0,re.default)(w.listeners),I=Object.keys(T).reduce(function(F,G){return F[/^(enter|leave)/.test(G)?"drag".concat(G):/^(activate|deactivate|move)/.test(G)?"drop".concat(G):G]=T[G],F},{});C.off(C.options.drop.listeners),C.on(I),C.options.drop.listeners=I}return a.default.func(w.ondrop)&&C.on("drop",w.ondrop),a.default.func(w.ondropactivate)&&C.on("dropactivate",w.ondropactivate),a.default.func(w.ondropdeactivate)&&C.on("dropdeactivate",w.ondropdeactivate),a.default.func(w.ondragenter)&&C.on("dragenter",w.ondragenter),a.default.func(w.ondragleave)&&C.on("dragleave",w.ondragleave),a.default.func(w.ondropmove)&&C.on("dropmove",w.ondropmove),/^(pointer|center)$/.test(w.overlap)?C.options.drop.overlap=w.overlap:a.default.number(w.overlap)&&(C.options.drop.overlap=Math.max(Math.min(1,w.overlap),0)),"accept"in w&&(C.options.drop.accept=w.accept),"checker"in w&&(C.options.drop.checker=w.checker),C}return a.default.bool(w)?(C.options.drop.enabled=w,C):C.options.drop}(this,M)},f.prototype.dropCheck=function(M,C,w,T,I,F){return function(G,ee,ce,K,ye,Pe,xe){var ke=!1;if(!(xe=xe||G.getRect(Pe)))return!!G.options.drop.checker&&G.options.drop.checker(ee,ce,ke,G,Pe,K,ye);var je=G.options.drop.overlap;if(je==="pointer"){var tt=(0,J.default)(K,ye,"drag"),gt=q.getPageXY(ee);gt.x+=tt.x,gt.y+=tt.y;var Tt=gt.x>xe.left&&gt.x<xe.right,ut=gt.y>xe.top&&gt.y<xe.bottom;ke=Tt&&ut}var wt=K.getRect(ye);if(wt&&je==="center"){var oi=wt.left+wt.width/2,Xi=wt.top+wt.height/2;ke=oi>=xe.left&&oi<=xe.right&&Xi>=xe.top&&Xi<=xe.bottom}return wt&&a.default.number(je)&&(ke=Math.max(0,Math.min(xe.right,wt.right)-Math.max(xe.left,wt.left))*Math.max(0,Math.min(xe.bottom,wt.bottom)-Math.max(xe.top,wt.top))/(wt.width*wt.height)>=je),G.options.drop.checker&&(ke=G.options.drop.checker(ee,ce,ke,G,Pe,K,ye)),ke}(this,M,C,w,T,I,F)},c.dynamicDrop=function(M){return a.default.bool(M)?(s.dynamicDrop=M,c):s.dynamicDrop},(0,W.default)(u.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),u.methodDict.drop="dropzone",s.dynamicDrop=!1,v.actions.drop=De.defaults},listeners:{"interactions:before-action-start":function(s){var u=s.interaction;u.prepared.name==="drag"&&(u.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,u){var c=s.interaction,f=(s.event,s.iEvent);if(c.prepared.name==="drag"){var v=c.dropState;v.activeDrops=null,v.events=null,v.activeDrops=he(u,c.element),v.events=Ce(c,0,f),v.events.activate&&(V(v.activeDrops,v.events.activate),u.fire("actions/drop:start",{interaction:c,dragEvent:f}))}},"interactions:action-move":ze,"interactions:after-action-move":function(s,u){var c=s.interaction,f=s.iEvent;c.prepared.name==="drag"&&(Le(c,c.dropState.events),u.fire("actions/drop:move",{interaction:c,dragEvent:f}),c.dropState.events={})},"interactions:action-end":function(s,u){if(s.interaction.prepared.name==="drag"){var c=s.interaction,f=s.iEvent;ze(s,u),Le(c,c.dropState.events),u.fire("actions/drop:end",{interaction:c,dragEvent:f})}},"interactions:stop":function(s){var u=s.interaction;if(u.prepared.name==="drag"){var c=u.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:he,getDrop:ne,getDropEvents:Ce,fireDropEvents:Le,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ue=De;Ee.default=Ue;var qe={};function Je(s){var u=s.interaction,c=s.iEvent,f=s.phase;if(u.prepared.name==="gesture"){var v=u.pointers.map(function(I){return I.pointer}),M=f==="start",C=f==="end",w=u.interactable.options.deltaSource;if(c.touches=[v[0],v[1]],M)c.distance=q.touchDistance(v,w),c.box=q.touchBBox(v),c.scale=1,c.ds=0,c.angle=q.touchAngle(v,w),c.da=0,u.gesture.startDistance=c.distance,u.gesture.startAngle=c.angle;else if(C){var T=u.prevEvent;c.distance=T.distance,c.box=T.box,c.scale=T.scale,c.ds=0,c.angle=T.angle,c.da=0}else c.distance=q.touchDistance(v,w),c.box=q.touchBBox(v),c.scale=c.distance/u.gesture.startDistance,c.angle=q.touchAngle(v,w),c.ds=c.scale-u.gesture.scale,c.da=c.angle-u.gesture.angle;u.gesture.distance=c.distance,u.gesture.angle=c.angle,a.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(u.gesture.scale=c.scale)}}Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=void 0;var Pt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var u=s.actions,c=s.Interactable,f=s.defaults;c.prototype.gesturable=function(v){return a.default.object(v)?(this.options.gesture.enabled=v.enabled!==!1,this.setPerAction("gesture",v),this.setOnEvents("gesture",v),this):a.default.bool(v)?(this.options.gesture.enabled=v,this):this.options.gesture},u.map.gesture=Pt,u.methodDict.gesture="gesturable",f.actions.gesture=Pt.defaults},listeners:{"interactions:action-start":Je,"interactions:action-move":Je,"interactions:action-end":Je,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var u=s.interactable.options.gesture;if(u&&u.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},H=Pt;qe.default=H;var le={};function ge(s,u,c,f,v,M,C){if(!u)return!1;if(u===!0){var w=a.default.number(M.width)?M.width:M.right-M.left,T=a.default.number(M.height)?M.height:M.bottom-M.top;if(C=Math.min(C,Math.abs((s==="left"||s==="right"?w:T)/2)),w<0&&(s==="left"?s="right":s==="right"&&(s="left")),T<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var I=w>=0?M.left:M.right;return c.x<I+C}if(s==="top"){var F=T>=0?M.top:M.bottom;return c.y<F+C}if(s==="right")return c.x>(w>=0?M.right:M.left)-C;if(s==="bottom")return c.y>(T>=0?M.bottom:M.top)-C}return!!a.default.element(f)&&(a.default.element(u)?u===f:k.matchesUpTo(f,u,v))}function Re(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var f=u;c.interactable.options.resize.square?(c.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=c.resizeAxes,c.resizeAxes==="x"?f.delta.y=0:c.resizeAxes==="y"&&(f.delta.x=0))}}Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;var Oe={id:"actions/resize",before:["actions/drag"],install:function(s){var u=s.actions,c=s.browser,f=s.Interactable,v=s.defaults;Oe.cursors=function(M){return M.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Oe.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,f.prototype.resizable=function(M){return function(C,w,T){return a.default.object(w)?(C.options.resize.enabled=w.enabled!==!1,C.setPerAction("resize",w),C.setOnEvents("resize",w),a.default.string(w.axis)&&/^x$|^y$|^xy$/.test(w.axis)?C.options.resize.axis=w.axis:w.axis===null&&(C.options.resize.axis=T.defaults.actions.resize.axis),a.default.bool(w.preserveAspectRatio)?C.options.resize.preserveAspectRatio=w.preserveAspectRatio:a.default.bool(w.square)&&(C.options.resize.square=w.square),C):a.default.bool(w)?(C.options.resize.enabled=w,C):C.options.resize}(this,M,s)},u.map.resize=Oe,u.methodDict.resize="resizable",v.actions.resize=Oe.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var v=c,M=f.rect;f._rects={start:(0,W.default)({},M),corrected:(0,W.default)({},M),previous:(0,W.default)({},M),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},v.edges=f.prepared.edges,v.rect=f._rects.corrected,v.deltaRect=f._rects.delta}})(s),Re(s)},"interactions:action-move":function(s){(function(u){var c=u.iEvent,f=u.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var v=c,M=f.interactable.options.resize.invert,C=M==="reposition"||M==="negate",w=f.rect,T=f._rects,I=T.start,F=T.corrected,G=T.delta,ee=T.previous;if((0,W.default)(ee,F),C){if((0,W.default)(F,w),M==="reposition"){if(F.top>F.bottom){var ce=F.top;F.top=F.bottom,F.bottom=ce}if(F.left>F.right){var K=F.left;F.left=F.right,F.right=K}}}else F.top=Math.min(w.top,I.bottom),F.bottom=Math.max(w.bottom,I.top),F.left=Math.min(w.left,I.right),F.right=Math.max(w.right,I.left);for(var ye in F.width=F.right-F.left,F.height=F.bottom-F.top,F)G[ye]=F[ye]-ee[ye];v.edges=f.prepared.edges,v.rect=F,v.deltaRect=G}})(s),Re(s)},"interactions:action-end":function(s){var u=s.iEvent,c=s.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var f=u;f.edges=c.prepared.edges,f.rect=c._rects.corrected,f.deltaRect=c._rects.delta}},"auto-start:check":function(s){var u=s.interaction,c=s.interactable,f=s.element,v=s.rect,M=s.buttons;if(v){var C=(0,W.default)({},u.coords.cur.page),w=c.options.resize;if(w&&w.enabled&&(!u.pointerIsDown||!/mouse|pointer/.test(u.pointerType)||M&w.mouseButtons)){if(a.default.object(w.edges)){var T={left:!1,right:!1,top:!1,bottom:!1};for(var I in T)T[I]=ge(I,w.edges[I],C,u._latestPointer.eventTarget,f,v,w.margin||Oe.defaultMargin);T.left=T.left&&!T.right,T.top=T.top&&!T.bottom,(T.left||T.right||T.top||T.bottom)&&(s.action={name:"resize",edges:T})}else{var F=w.axis!=="y"&&C.x>v.right-Oe.defaultMargin,G=w.axis!=="x"&&C.y>v.bottom-Oe.defaultMargin;(F||G)&&(s.action={name:"resize",axes:(F?"x":"")+(G?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var u=s.edges,c=s.axis,f=s.name,v=Oe.cursors,M=null;if(c)M=v[f+c];else if(u){for(var C="",w=["top","bottom","left","right"],T=0;T<w.length;T++){var I=w[T];u[I]&&(C+=I)}M=v[C]}return M},defaultMargin:null},St=Oe;le.default=St;var yt={};Object.defineProperty(yt,"__esModule",{value:!0}),yt.default=void 0;var on={id:"actions",install:function(s){s.usePlugin(qe.default),s.usePlugin(le.default),s.usePlugin(y.default),s.usePlugin(Ee.default)}};yt.default=on;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var vt,qt,jn=0,Ro={request:function(s){return vt(s)},cancel:function(s){return qt(s)},init:function(s){if(vt=s.requestAnimationFrame,qt=s.cancelAnimationFrame,!vt)for(var u=["ms","moz","webkit","o"],c=0;c<u.length;c++){var f=u[c];vt=s["".concat(f,"RequestAnimationFrame")],qt=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}vt=vt&&vt.bind(s),qt=qt&&qt.bind(s),vt||(vt=function(v){var M=Date.now(),C=Math.max(0,16-(M-jn)),w=s.setTimeout(function(){v(M+C)},C);return jn=M+C,w},qt=function(v){return clearTimeout(v)})}};Xt.default=Ro;var ni={};Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=void 0,ni.getContainer=Lo,ni.getScroll=jr,ni.getScrollSize=function(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollWidth,y:s.scrollHeight}},ni.getScrollSizeDelta=function(s,u){var c=s.interaction,f=s.element,v=c&&c.interactable.options[c.prepared.name].autoScroll;if(!v||!v.enabled)return u(),{x:0,y:0};var M=Lo(v.container,c.interactable,f),C=jr(M);u();var w=jr(M);return{x:w.x-C.x,y:w.y-C.y}};var $e={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){$e.isScrolling=!0,Xt.default.cancel($e.i),s.autoScroll=$e,$e.interaction=s,$e.prevTime=$e.now(),$e.i=Xt.default.request($e.scroll)},stop:function(){$e.isScrolling=!1,$e.interaction&&($e.interaction.autoScroll=null),Xt.default.cancel($e.i)},scroll:function(){var s=$e.interaction,u=s.interactable,c=s.element,f=s.prepared.name,v=u.options[f].autoScroll,M=Lo(v.container,u,c),C=$e.now(),w=(C-$e.prevTime)/1e3,T=v.speed*w;if(T>=1){var I={x:$e.x*T,y:$e.y*T};if(I.x||I.y){var F=jr(M);a.default.window(M)?M.scrollBy(I.x,I.y):M&&(M.scrollLeft+=I.x,M.scrollTop+=I.y);var G=jr(M),ee={x:G.x-F.x,y:G.y-F.y};(ee.x||ee.y)&&u.fire({type:"autoscroll",target:c,interactable:u,delta:ee,interaction:s,container:M})}$e.prevTime=C}$e.isScrolling&&(Xt.default.cancel($e.i),$e.i=Xt.default.request($e.scroll))},check:function(s,u){var c;return(c=s.options[u].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(s){var u=s.interaction,c=s.pointer;if(u.interacting()&&$e.check(u.interactable,u.prepared.name))if(u.simulation)$e.x=$e.y=0;else{var f,v,M,C,w=u.interactable,T=u.element,I=u.prepared.name,F=w.options[I].autoScroll,G=Lo(F.container,w,T);if(a.default.window(G))C=c.clientX<$e.margin,f=c.clientY<$e.margin,v=c.clientX>G.innerWidth-$e.margin,M=c.clientY>G.innerHeight-$e.margin;else{var ee=k.getElementClientRect(G);C=c.clientX<ee.left+$e.margin,f=c.clientY<ee.top+$e.margin,v=c.clientX>ee.right-$e.margin,M=c.clientY>ee.bottom-$e.margin}$e.x=v?1:C?-1:0,$e.y=M?1:f?-1:0,$e.isScrolling||($e.margin=F.margin,$e.speed=F.speed,$e.start(u))}}};function Lo(s,u,c){return(a.default.string(s)?(0,fe.getStringOptionResult)(s,u,c):s)||(0,i.getWindow)(c)}function jr(s){return a.default.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var U={id:"auto-scroll",install:function(s){var u=s.defaults,c=s.actions;s.autoScroll=$e,$e.now=function(){return s.now()},c.phaselessTypes.autoscroll=!0,u.perAction.autoScroll=$e.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,$e.stop(),$e.interaction&&($e.interaction=null)},"interactions:stop":$e.stop,"interactions:action-move":function(s){return $e.onInteractionMove(s)}}},Q=U;ni.default=Q;var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.copyAction=function(s,u){return s.name=u.name,s.axis=u.axis,s.edges=u.edges,s},ie.sign=void 0,ie.warnOnce=function(s,u){var c=!1;return function(){return c||(i.window.console.warn(u),c=!0),s.apply(this,arguments)}},ie.sign=function(s){return s>=0?1:-1};var Y={};function de(s){return a.default.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ve(s){return a.default.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Y,"__esModule",{value:!0}),Y.default=void 0;var Ye={id:"auto-start/interactableMethods",install:function(s){var u=s.Interactable;u.prototype.getAction=function(c,f,v,M){var C=function(w,T,I,F,G){var ee=w.getRect(F),ce={action:null,interactable:w,interaction:I,element:F,rect:ee,buttons:T.buttons||{0:1,1:4,3:8,4:16}[T.button]};return G.fire("auto-start:check",ce),ce.action}(this,f,v,M,s);return this.options.actionChecker?this.options.actionChecker(c,f,C,this,M,v):C},u.prototype.ignoreFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),u.prototype.allowFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),u.prototype.actionChecker=Ve,u.prototype.styleCursor=de}};Y.default=Ye;var We={};function et(s,u,c,f,v){return u.testIgnoreAllow(u.options[s.name],c,f)&&u.options[s.name].enabled&&ht(u,c,s,v)?s:null}function it(s,u,c,f,v,M,C){for(var w=0,T=f.length;w<T;w++){var I=f[w],F=v[w],G=I.getAction(u,c,s,F);if(G){var ee=et(G,I,F,M,C);if(ee)return{action:ee,interactable:I,element:F}}}return{action:null,interactable:null,element:null}}function nt(s,u,c,f,v){var M=[],C=[],w=f;function T(F){M.push(F),C.push(w)}for(;a.default.element(w);){M=[],C=[],v.interactables.forEachMatch(w,T);var I=it(s,u,c,M,C,f,v);if(I.action&&!I.interactable.options[I.action.name].manualStart)return I;w=k.parentNode(w)}return{action:null,interactable:null,element:null}}function rt(s,u,c){var f=u.action,v=u.interactable,M=u.element;f=f||{name:null},s.interactable=v,s.element=M,(0,ie.copyAction)(s.prepared,f),s.rect=v&&f.name?v.getRect(M):null,Ri(s,c),c.fire("autoStart:prepared",{interaction:s})}function ht(s,u,c,f){var v=s.options,M=v[c.name].max,C=v[c.name].maxPerElement,w=f.autoStart.maxInteractions,T=0,I=0,F=0;if(!(M&&C&&w))return!1;for(var G=0;G<f.interactions.list.length;G++){var ee=f.interactions.list[G],ce=ee.prepared.name;if(ee.interacting()&&(++T>=w||ee.interactable===s&&((I+=ce===c.name?1:0)>=M||ee.element===u&&(F++,ce===c.name&&F>=C))))return!1}return w>0}function sn(s,u){return a.default.number(s)?(u.autoStart.maxInteractions=s,this):u.autoStart.maxInteractions}function En(s,u,c){var f=c.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=u,s.style.cursor=u,c.autoStart.cursorElement=u?s:null}function Ri(s,u){var c=s.interactable,f=s.element,v=s.prepared;if(s.pointerType==="mouse"&&c&&c.options.styleCursor){var M="";if(v.name){var C=c.options[v.name].cursorChecker;M=a.default.func(C)?C(v,c,f,s._interacting):u.actions.map[v.name].getCursor(v)}En(s.element,M||"",u)}else u.autoStart.cursorElement&&En(u.autoStart.cursorElement,"",u)}Object.defineProperty(We,"__esModule",{value:!0}),We.default=void 0;var Bt={id:"auto-start/base",before:["actions"],install:function(s){var u=s.interactStatic,c=s.defaults;s.usePlugin(Y.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,W.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),u.maxInteractions=function(f){return sn(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:ht,cursorElement:null}},listeners:{"interactions:down":function(s,u){var c=s.interaction,f=s.pointer,v=s.event,M=s.eventTarget;c.interacting()||rt(c,nt(c,f,v,M,u),u)},"interactions:move":function(s,u){(function(c,f){var v=c.interaction,M=c.pointer,C=c.event,w=c.eventTarget;v.pointerType!=="mouse"||v.pointerIsDown||v.interacting()||rt(v,nt(v,M,C,w,f),f)})(s,u),function(c,f){var v=c.interaction;if(v.pointerIsDown&&!v.interacting()&&v.pointerWasMoved&&v.prepared.name){f.fire("autoStart:before-start",c);var M=v.interactable,C=v.prepared.name;C&&M&&(M.options[C].manualStart||!ht(M,v.element,v.prepared,f)?v.stop():(v.start(v.prepared,M,v.element),Ri(v,f)))}}(s,u)},"interactions:stop":function(s,u){var c=s.interaction,f=c.interactable;f&&f.options.styleCursor&&En(c.element,"",u)}},maxInteractions:sn,withinInteractionLimit:ht,validateAction:et},lt=Bt;We.default=lt;var cr={};Object.defineProperty(cr,"__esModule",{value:!0}),cr.default=void 0;var $t={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,u){var c=s.interaction,f=s.eventTarget,v=s.dx,M=s.dy;if(c.prepared.name==="drag"){var C=Math.abs(v),w=Math.abs(M),T=c.interactable.options.drag,I=T.startAxis,F=C>w?"x":C<w?"y":"xy";if(c.prepared.axis=T.lockAxis==="start"?F[0]:T.lockAxis,F!=="xy"&&I!=="xy"&&I!==F){c.prepared.name=null;for(var G=f,ee=function(K){if(K!==c.interactable){var ye=c.interactable.options.drag;if(!ye.manualStart&&K.testIgnoreAllow(ye,G,f)){var Pe=K.getAction(c.downPointer,c.downEvent,c,G);if(Pe&&Pe.name==="drag"&&function(xe,ke){if(!ke)return!1;var je=ke.options.drag.startAxis;return xe==="xy"||je==="xy"||je===xe}(F,K)&&We.default.validateAction(Pe,K,G,f,u))return K}}};a.default.element(G);){var ce=u.interactables.forEachMatch(G,ee);if(ce){c.prepared.name="drag",c.interactable=ce,c.element=G;break}G=(0,k.parentNode)(G)}}}}}};cr.default=$t;var ii={};function Io(s){var u=s.prepared&&s.prepared.name;if(!u)return null;var c=s.interactable.options;return c[u].hold||c[u].delay}Object.defineProperty(ii,"__esModule",{value:!0}),ii.default=void 0;var Xr={id:"auto-start/hold",install:function(s){var u=s.defaults;s.usePlugin(We.default),u.perAction.hold=0,u.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var u=s.interaction,c=Io(u);c>0&&(u.autoStartHoldTimer=setTimeout(function(){u.start(u.prepared,u.interactable,u.element)},c))},"interactions:move":function(s){var u=s.interaction,c=s.duplicate;u.autoStartHoldTimer&&u.pointerWasMoved&&!c&&(clearTimeout(u.autoStartHoldTimer),u.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var u=s.interaction;Io(u)>0&&(u.prepared.name=null)}},getHoldDuration:Io},Ys=Xr;ii.default=Ys;var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.default=void 0;var Hi={id:"auto-start",install:function(s){s.usePlugin(We.default),s.usePlugin(ii.default),s.usePlugin(cr.default)}};Ht.default=Hi;var mi={};function Tn(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):a.default.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault}function Ks(s){var u=s.interaction,c=s.event;u.interactable&&u.interactable.checkAndPreventDefault(c)}function Cl(s){var u=s.Interactable;u.prototype.preventDefault=Tn,u.prototype.checkAndPreventDefault=function(c){return function(f,v,M){var C=f.options.preventDefault;if(C!=="never")if(C!=="always"){if(v.events.supportsPassive&&/^touch(start|move)$/.test(M.type)){var w=(0,i.getWindow)(M.target).document,T=v.getDocOptions(w);if(!T||!T.events||T.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(M.type)||a.default.element(M.target)&&(0,k.matchesSelector)(M.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||M.preventDefault()}else M.preventDefault()}(this,s,c)},s.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var f=0;f<s.interactions.list.length;f++){var v=s.interactions.list[f];if(v.element&&(v.element===c.target||(0,k.nodeContains)(v.element,c.target)))return void v.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(mi,"__esModule",{value:!0}),mi.default=void 0,mi.install=Cl;var Pl={id:"core/interactablePreventDefault",install:Cl,listeners:["down","move","up","cancel"].reduce(function(s,u){return s["interactions:".concat(u)]=Ks,s},{})};mi.default=Pl;var Yc={};Object.defineProperty(Yc,"__esModule",{value:!0}),Yc.default=void 0,Yc.default={};var Zs,Al={};Object.defineProperty(Al,"__esModule",{value:!0}),Al.default=void 0,function(s){s.touchAction="touchAction",s.boxSizing="boxSizing",s.noListeners="noListeners"}(Zs||(Zs={})),Zs.touchAction,Zs.boxSizing,Zs.noListeners;var m_={id:"dev-tools",install:function(){}};Al.default=m_;var qr={};Object.defineProperty(qr,"__esModule",{value:!0}),qr.default=function s(u){var c={};for(var f in u){var v=u[f];a.default.plainObject(v)?c[f]=s(v):a.default.array(v)?c[f]=Xe.from(v):c[f]=v}return c};var $r={};function jp(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var M,C,w=[],T=!0,I=!1;try{for(v=v.call(c);!(T=(M=v.next()).done)&&(w.push(M.value),!f||w.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||v.return==null||v.return()}finally{if(I)throw C}}return w}}(s,u)||function(c,f){if(c){if(typeof c=="string")return Xp(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?Xp(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Xp(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function v_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Yr(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty($r,"__esModule",{value:!0}),$r.default=void 0,$r.getRectOffset=qp;var g_=function(){function s(f){(function(v,M){if(!(v instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),Yr(this,"states",[]),Yr(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Yr(this,"startDelta",void 0),Yr(this,"result",void 0),Yr(this,"endResult",void 0),Yr(this,"edges",void 0),Yr(this,"interaction",void 0),this.interaction=f,this.result=Dl()}var u,c;return u=s,(c=[{key:"start",value:function(f,v){var M=f.phase,C=this.interaction,w=function(I){var F=I.interactable.options[I.prepared.name],G=F.modifiers;return G&&G.length?G:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var ce=F[ee];return ce&&ce.enabled&&{options:ce,methods:ce._methods}}).filter(function(ee){return!!ee})}(C);this.prepareStates(w),this.edges=(0,W.default)({},C.edges),this.startOffset=qp(C.rect,v),this.startDelta={x:0,y:0};var T=this.fillArg({phase:M,pageCoords:v,preEnd:!1});return this.result=Dl(),this.startAll(T),this.result=this.setAll(T)}},{key:"fillArg",value:function(f){var v=this.interaction;return f.interaction=v,f.interactable=v.interactable,f.element=v.element,f.rect=f.rect||v.rect,f.edges=this.edges,f.startOffset=this.startOffset,f}},{key:"startAll",value:function(f){for(var v=0;v<this.states.length;v++){var M=this.states[v];M.methods.start&&(f.state=M,M.methods.start(f))}}},{key:"setAll",value:function(f){var v=f.phase,M=f.preEnd,C=f.skipModifiers,w=f.rect;f.coords=(0,W.default)({},f.pageCoords),f.rect=(0,W.default)({},w);for(var T=C?this.states.slice(C):this.states,I=Dl(f.coords,f.rect),F=0;F<T.length;F++){var G,ee=T[F],ce=ee.options,K=(0,W.default)({},f.coords),ye=null;(G=ee.methods)!=null&&G.set&&this.shouldDo(ce,M,v)&&(f.state=ee,ye=ee.methods.set(f),fe.addEdges(this.interaction.edges,f.rect,{x:f.coords.x-K.x,y:f.coords.y-K.y})),I.eventProps.push(ye)}I.delta.x=f.coords.x-f.pageCoords.x,I.delta.y=f.coords.y-f.pageCoords.y,I.rectDelta.left=f.rect.left-w.left,I.rectDelta.right=f.rect.right-w.right,I.rectDelta.top=f.rect.top-w.top,I.rectDelta.bottom=f.rect.bottom-w.bottom;var Pe=this.result.coords,xe=this.result.rect;if(Pe&&xe){var ke=I.rect.left!==xe.left||I.rect.right!==xe.right||I.rect.top!==xe.top||I.rect.bottom!==xe.bottom;I.changed=ke||Pe.x!==I.coords.x||Pe.y!==I.coords.y}return I}},{key:"applyToInteraction",value:function(f){var v=this.interaction,M=f.phase,C=v.coords.cur,w=v.coords.start,T=this.result,I=this.startDelta,F=T.delta;M==="start"&&(0,W.default)(this.startDelta,T.delta);for(var G=0;G<[[w,I],[C,F]].length;G++){var ee=jp([[w,I],[C,F]][G],2),ce=ee[0],K=ee[1];ce.page.x+=K.x,ce.page.y+=K.y,ce.client.x+=K.x,ce.client.y+=K.y}var ye=this.result.rectDelta,Pe=f.rect||v.rect;Pe.left+=ye.left,Pe.right+=ye.right,Pe.top+=ye.top,Pe.bottom+=ye.bottom,Pe.width=Pe.right-Pe.left,Pe.height=Pe.bottom-Pe.top}},{key:"setAndApply",value:function(f){var v=this.interaction,M=f.phase,C=f.preEnd,w=f.skipModifiers,T=this.setAll(this.fillArg({preEnd:C,phase:M,pageCoords:f.modifiedCoords||v.coords.cur.page}));if(this.result=T,!T.changed&&(!w||w<this.states.length)&&v.interacting())return!1;if(f.modifiedCoords){var I=v.coords.cur.page,F={x:f.modifiedCoords.x-I.x,y:f.modifiedCoords.y-I.y};T.coords.x+=F.x,T.coords.y+=F.y,T.delta.x+=F.x,T.delta.y+=F.y}this.applyToInteraction(f)}},{key:"beforeEnd",value:function(f){var v=f.interaction,M=f.event,C=this.states;if(C&&C.length){for(var w=!1,T=0;T<C.length;T++){var I=C[T];f.state=I;var F=I.options,G=I.methods,ee=G.beforeEnd&&G.beforeEnd(f);if(ee)return this.endResult=ee,!1;w=w||!w&&this.shouldDo(F,!0,f.phase,!0)}w&&v.move({event:M,preEnd:!0})}}},{key:"stop",value:function(f){var v=f.interaction;if(this.states&&this.states.length){var M=(0,W.default)({states:this.states,interactable:v.interactable,element:v.element,rect:null},f);this.fillArg(M);for(var C=0;C<this.states.length;C++){var w=this.states[C];M.state=w,w.methods.stop&&w.methods.stop(M)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(f){this.states=[];for(var v=0;v<f.length;v++){var M=f[v],C=M.options,w=M.methods,T=M.name;this.states.push({options:C,methods:w,index:v,name:T})}return this.states}},{key:"restoreInteractionCoords",value:function(f){var v=f.interaction,M=v.coords,C=v.rect,w=v.modification;if(w.result){for(var T=w.startDelta,I=w.result,F=I.delta,G=I.rectDelta,ee=[[M.start,T],[M.cur,F]],ce=0;ce<ee.length;ce++){var K=jp(ee[ce],2),ye=K[0],Pe=K[1];ye.page.x-=Pe.x,ye.page.y-=Pe.y,ye.client.x-=Pe.x,ye.client.y-=Pe.y}C.left-=G.left,C.right-=G.right,C.top-=G.top,C.bottom-=G.bottom}}},{key:"shouldDo",value:function(f,v,M,C){return!(!f||f.enabled===!1||C&&!f.endOnly||f.endOnly&&!v||M==="start"&&!f.setStart)}},{key:"copyFrom",value:function(f){this.startOffset=f.startOffset,this.startDelta=f.startDelta,this.edges=f.edges,this.states=f.states.map(function(v){return(0,qr.default)(v)}),this.result=Dl((0,W.default)({},f.result.coords),(0,W.default)({},f.result.rect))}},{key:"destroy",value:function(){for(var f in this)this[f]=null}}])&&v_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Dl(s,u){return{rect:u,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function qp(s,u){return s?{left:u.x-s.left,top:u.y-s.top,right:s.right-u.x,bottom:s.bottom-u.y}:{left:0,top:0,right:0,bottom:0}}$r.default=g_;var dn={};function Rl(s){var u=s.iEvent,c=s.interaction.modification.result;c&&(u.modifiers=c.eventProps)}Object.defineProperty(dn,"__esModule",{value:!0}),dn.addEventModifiers=Rl,dn.default=void 0,dn.makeModifier=function(s,u){var c=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},v=function(M){var C=M||{};for(var w in C.enabled=C.enabled!==!1,c)w in C||(C[w]=c[w]);var T={options:C,methods:f,name:u,enable:function(){return C.enabled=!0,T},disable:function(){return C.enabled=!1,T}};return T};return u&&typeof u=="string"&&(v._defaults=c,v._methods=f),v};var y_={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var u=s.interaction;u.modification=new $r.default(u)},"interactions:before-action-start":function(s){var u=s.interaction.modification;u.start(s,s.interaction.coords.start.page),s.interaction.edges=u.edges,u.applyToInteraction(s)},"interactions:before-action-move":function(s){return s.interaction.modification.setAndApply(s)},"interactions:before-action-end":function(s){return s.interaction.modification.beforeEnd(s)},"interactions:action-start":Rl,"interactions:action-move":Rl,"interactions:action-end":Rl,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},x_=y_;dn.default=x_;var Qs={};Object.defineProperty(Qs,"__esModule",{value:!0}),Qs.defaults=void 0,Qs.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var Js={};function Kc(s){return Kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Kc(s)}function __(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Zc(s,u){return Zc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},Zc(s,u)}function S_(s,u){if(u&&(Kc(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mt(s)}function Mt(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ll(s){return Ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Ll(s)}function At(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Js,"__esModule",{value:!0}),Js.InteractEvent=void 0;var $p=function(s){(function(w,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(T&&T.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),T&&Zc(w,T)})(C,s);var u,c,f,v,M=(f=C,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,T=Ll(f);if(v){var I=Ll(this).constructor;w=Reflect.construct(T,arguments,I)}else w=T.apply(this,arguments);return S_(this,w)});function C(w,T,I,F,G,ee,ce){var K;(function(Tt,ut){if(!(Tt instanceof ut))throw new TypeError("Cannot call a class as a function")})(this,C),At(Mt(K=M.call(this,w)),"relatedTarget",null),At(Mt(K),"screenX",void 0),At(Mt(K),"screenY",void 0),At(Mt(K),"button",void 0),At(Mt(K),"buttons",void 0),At(Mt(K),"ctrlKey",void 0),At(Mt(K),"shiftKey",void 0),At(Mt(K),"altKey",void 0),At(Mt(K),"metaKey",void 0),At(Mt(K),"page",void 0),At(Mt(K),"client",void 0),At(Mt(K),"delta",void 0),At(Mt(K),"rect",void 0),At(Mt(K),"x0",void 0),At(Mt(K),"y0",void 0),At(Mt(K),"t0",void 0),At(Mt(K),"dt",void 0),At(Mt(K),"duration",void 0),At(Mt(K),"clientX0",void 0),At(Mt(K),"clientY0",void 0),At(Mt(K),"velocity",void 0),At(Mt(K),"speed",void 0),At(Mt(K),"swipe",void 0),At(Mt(K),"axes",void 0),At(Mt(K),"preEnd",void 0),G=G||w.element;var ye=w.interactable,Pe=(ye&&ye.options||Qs.defaults).deltaSource,xe=(0,J.default)(ye,G,I),ke=F==="start",je=F==="end",tt=ke?Mt(K):w.prevEvent,gt=ke?w.coords.start:je?{page:tt.page,client:tt.client,timeStamp:w.coords.cur.timeStamp}:w.coords.cur;return K.page=(0,W.default)({},gt.page),K.client=(0,W.default)({},gt.client),K.rect=(0,W.default)({},w.rect),K.timeStamp=gt.timeStamp,je||(K.page.x-=xe.x,K.page.y-=xe.y,K.client.x-=xe.x,K.client.y-=xe.y),K.ctrlKey=T.ctrlKey,K.altKey=T.altKey,K.shiftKey=T.shiftKey,K.metaKey=T.metaKey,K.button=T.button,K.buttons=T.buttons,K.target=G,K.currentTarget=G,K.preEnd=ee,K.type=ce||I+(F||""),K.interactable=ye,K.t0=ke?w.pointers[w.pointers.length-1].downTime:tt.t0,K.x0=w.coords.start.page.x-xe.x,K.y0=w.coords.start.page.y-xe.y,K.clientX0=w.coords.start.client.x-xe.x,K.clientY0=w.coords.start.client.y-xe.y,K.delta=ke||je?{x:0,y:0}:{x:K[Pe].x-tt[Pe].x,y:K[Pe].y-tt[Pe].y},K.dt=w.coords.delta.timeStamp,K.duration=K.timeStamp-K.t0,K.velocity=(0,W.default)({},w.coords.velocity[Pe]),K.speed=(0,ve.default)(K.velocity.x,K.velocity.y),K.swipe=je||F==="inertiastart"?K.getSwipe():null,K}return u=C,(c=[{key:"getSwipe",value:function(){var w=this._interaction;if(w.prevEvent.speed<600||this.timeStamp-w.prevEvent.timeStamp>150)return null;var T=180*Math.atan2(w.prevEvent.velocityY,w.prevEvent.velocityX)/Math.PI;T<0&&(T+=360);var I=112.5<=T&&T<247.5,F=202.5<=T&&T<337.5;return{up:F,down:!F&&22.5<=T&&T<157.5,left:I,right:!I&&(292.5<=T||T<67.5),angle:T,speed:w.prevEvent.speed,velocity:{x:w.prevEvent.velocityX,y:w.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&__(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Be.BaseEvent);Js.InteractEvent=$p,Object.defineProperties($p.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var ea={};function Yp(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function M_(s,u,c){return u&&Yp(s.prototype,u),c&&Yp(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function ta(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(ea,"__esModule",{value:!0}),ea.PointerInfo=void 0;var w_=M_(function s(u,c,f,v,M){(function(C,w){if(!(C instanceof w))throw new TypeError("Cannot call a class as a function")})(this,s),ta(this,"id",void 0),ta(this,"pointer",void 0),ta(this,"event",void 0),ta(this,"downTime",void 0),ta(this,"downTarget",void 0),this.id=u,this.pointer=c,this.event=f,this.downTime=v,this.downTarget=M});ea.PointerInfo=w_;var Il,Ol,Nn={};function b_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Ut(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.Interaction=void 0,Object.defineProperty(Nn,"PointerInfo",{enumerable:!0,get:function(){return ea.PointerInfo}}),Nn.default=Nn._ProxyValues=Nn._ProxyMethods=void 0,Nn._ProxyValues=Il,function(s){s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy=""}(Il||(Nn._ProxyValues=Il={})),Nn._ProxyMethods=Ol,function(s){s.start="",s.move="",s.end="",s.stop="",s.interacting=""}(Ol||(Nn._ProxyMethods=Ol={}));var E_=0,Kp=function(){function s(f){var v=this,M=f.pointerType,C=f.scopeFire;(function(ee,ce){if(!(ee instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,s),Ut(this,"interactable",null),Ut(this,"element",null),Ut(this,"rect",null),Ut(this,"_rects",void 0),Ut(this,"edges",null),Ut(this,"_scopeFire",void 0),Ut(this,"prepared",{name:null,axis:null,edges:null}),Ut(this,"pointerType",void 0),Ut(this,"pointers",[]),Ut(this,"downEvent",null),Ut(this,"downPointer",{}),Ut(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Ut(this,"prevEvent",null),Ut(this,"pointerIsDown",!1),Ut(this,"pointerWasMoved",!1),Ut(this,"_interacting",!1),Ut(this,"_ending",!1),Ut(this,"_stopped",!0),Ut(this,"_proxy",null),Ut(this,"simulation",null),Ut(this,"doMove",(0,ie.warnOnce)(function(ee){this.move(ee)},"The interaction.doMove() method has been renamed to interaction.move()")),Ut(this,"coords",{start:q.newCoords(),prev:q.newCoords(),cur:q.newCoords(),delta:q.newCoords(),velocity:q.newCoords()}),Ut(this,"_id",E_++),this._scopeFire=C,this.pointerType=M;var w=this;this._proxy={};var T=function(ee){Object.defineProperty(v._proxy,ee,{get:function(){return w[ee]}})};for(var I in Il)T(I);var F=function(ee){Object.defineProperty(v._proxy,ee,{value:function(){return w[ee].apply(w,arguments)}})};for(var G in Ol)F(G);this._scopeFire("interactions:new",{interaction:this})}var u,c;return u=s,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(f,v,M){var C=this.updatePointer(f,v,M,!0),w=this.pointers[C];this._scopeFire("interactions:down",{pointer:f,event:v,eventTarget:M,pointerIndex:C,pointerInfo:w,type:"down",interaction:this})}},{key:"start",value:function(f,v,M){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(f.name==="gesture"?2:1)||!v.options[f.name].enabled)&&((0,ie.copyAction)(this.prepared,f),this.interactable=v,this.element=M,this.rect=v.getRect(M),this.edges=this.prepared.edges?(0,W.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(f,v,M){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(f,v,M,!1);var C,w,T=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(C=this.coords.cur.client.x-this.coords.start.client.x,w=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ve.default)(C,w)>this.pointerMoveTolerance);var I=this.getPointerIndex(f),F={pointer:f,pointerIndex:I,pointerInfo:this.pointers[I],event:v,type:"move",eventTarget:M,dx:C,dy:w,duplicate:T,interaction:this};T||q.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",F),T||this.simulation||(this.interacting()&&(F.type=null,this.move(F)),this.pointerWasMoved&&q.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(f){f&&f.event||q.setZeroCoords(this.coords.delta),(f=(0,W.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},f||{})).phase="move",this._doPhase(f)}},{key:"pointerUp",value:function(f,v,M,C){var w=this.getPointerIndex(f);w===-1&&(w=this.updatePointer(f,v,M,!1));var T=/cancel$/i.test(v.type)?"cancel":"up";this._scopeFire("interactions:".concat(T),{pointer:f,pointerIndex:w,pointerInfo:this.pointers[w],event:v,eventTarget:M,type:T,curEventTarget:C,interaction:this}),this.simulation||this.end(v),this.removePointer(f,v)}},{key:"documentBlur",value:function(f){this.end(f),this._scopeFire("interactions:blur",{event:f,type:"blur",interaction:this})}},{key:"end",value:function(f){var v;this._ending=!0,f=f||this._latestPointer.event,this.interacting()&&(v=this._doPhase({event:f,interaction:this,phase:"end"})),this._ending=!1,v===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(f){var v=q.getPointerId(f);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Xe.findIndex(this.pointers,function(M){return M.id===v})}},{key:"getPointerInfo",value:function(f){return this.pointers[this.getPointerIndex(f)]}},{key:"updatePointer",value:function(f,v,M,C){var w=q.getPointerId(f),T=this.getPointerIndex(f),I=this.pointers[T];return C=C!==!1&&(C||/(down|start)$/i.test(v.type)),I?I.pointer=f:(I=new ea.PointerInfo(w,f,v,null,null),T=this.pointers.length,this.pointers.push(I)),q.setCoords(this.coords.cur,this.pointers.map(function(F){return F.pointer}),this._now()),q.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),C&&(this.pointerIsDown=!0,I.downTime=this.coords.cur.timeStamp,I.downTarget=M,q.pointerExtend(this.downPointer,f),this.interacting()||(q.copyCoords(this.coords.start,this.coords.cur),q.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=v,this.pointerWasMoved=!1)),this._updateLatestPointer(f,v,M),this._scopeFire("interactions:update-pointer",{pointer:f,event:v,eventTarget:M,down:C,pointerInfo:I,pointerIndex:T,interaction:this}),T}},{key:"removePointer",value:function(f,v){var M=this.getPointerIndex(f);if(M!==-1){var C=this.pointers[M];this._scopeFire("interactions:remove-pointer",{pointer:f,event:v,eventTarget:null,pointerIndex:M,pointerInfo:C,interaction:this}),this.pointers.splice(M,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(f,v,M){this._latestPointer.pointer=f,this._latestPointer.event=v,this._latestPointer.eventTarget=M}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(f,v,M,C){return new Js.InteractEvent(this,f,this.prepared.name,v,this.element,M,C)}},{key:"_fireEvent",value:function(f){var v;(v=this.interactable)==null||v.fire(f),(!this.prevEvent||f.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=f)}},{key:"_doPhase",value:function(f){var v=f.event,M=f.phase,C=f.preEnd,w=f.type,T=this.rect;if(T&&M==="move"&&(fe.addEdges(this.edges,T,this.coords.delta[this.interactable.options.deltaSource]),T.width=T.right-T.left,T.height=T.bottom-T.top),this._scopeFire("interactions:before-action-".concat(M),f)===!1)return!1;var I=f.iEvent=this._createPreparedEvent(v,M,C,w);return this._scopeFire("interactions:action-".concat(M),f),M==="start"&&(this.prevEvent=I),this._fireEvent(I),this._scopeFire("interactions:after-action-".concat(M),f),!0}},{key:"_now",value:function(){return Date.now()}}],c&&b_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Nn.Interaction=Kp;var T_=Kp;Nn.default=T_;var fr={};function Zp(s){s.pointerIsDown&&(Jc(s.coords.cur,s.offset.total),s.offset.pending.x=0,s.offset.pending.y=0)}function Qp(s){Qc(s.interaction)}function Qc(s){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(s))return!1;var u=s.offset.pending;return Jc(s.coords.cur,u),Jc(s.coords.delta,u),fe.addEdges(s.edges,s.rect,u),u.x=0,u.y=0,!0}function C_(s){var u=s.x,c=s.y;this.offset.pending.x+=u,this.offset.pending.y+=c,this.offset.total.x+=u,this.offset.total.y+=c}function Jc(s,u){var c=s.page,f=s.client,v=u.x,M=u.y;c.x+=v,c.y+=M,f.x+=v,f.y+=M}Object.defineProperty(fr,"__esModule",{value:!0}),fr.addTotal=Zp,fr.applyPending=Qc,fr.default=void 0,Nn._ProxyMethods.offsetBy="";var P_={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=C_},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return Zp(s.interaction)},"interactions:before-action-start":Qp,"interactions:before-action-move":Qp,"interactions:before-action-end":function(s){var u=s.interaction;if(Qc(u))return u.move({offset:!0}),u.end(),!1},"interactions:stop":function(s){var u=s.interaction;u.offset.total.x=0,u.offset.total.y=0,u.offset.pending.x=0,u.offset.pending.y=0}}},A_=P_;fr.default=A_;var Kr={};function D_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function an(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.default=Kr.InertiaState=void 0;var Jp=function(){function s(f){(function(v,M){if(!(v instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),an(this,"active",!1),an(this,"isModified",!1),an(this,"smoothEnd",!1),an(this,"allowResume",!1),an(this,"modification",void 0),an(this,"modifierCount",0),an(this,"modifierArg",void 0),an(this,"startCoords",void 0),an(this,"t0",0),an(this,"v0",0),an(this,"te",0),an(this,"targetOffset",void 0),an(this,"modifiedOffset",void 0),an(this,"currentOffset",void 0),an(this,"lambda_v0",0),an(this,"one_ve_v0",0),an(this,"timeout",void 0),an(this,"interaction",void 0),this.interaction=f}var u,c;return u=s,(c=[{key:"start",value:function(f){var v=this.interaction,M=Nl(v);if(!M||!M.enabled)return!1;var C=v.coords.velocity.client,w=(0,ve.default)(C.x,C.y),T=this.modification||(this.modification=new $r.default(v));if(T.copyFrom(v.modification),this.t0=v._now(),this.allowResume=M.allowResume,this.v0=w,this.currentOffset={x:0,y:0},this.startCoords=v.coords.cur.page,this.modifierArg=T.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-v.coords.cur.timeStamp<50&&w>M.minSpeed&&w>M.endSpeed)this.startInertia();else{if(T.result=T.setAll(this.modifierArg),!T.result.changed)return!1;this.startSmoothEnd()}return v.modification.result.rect=null,v.offsetBy(this.targetOffset),v._doPhase({interaction:v,event:f,phase:"inertiastart"}),v.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),v.modification.result.rect=null,this.active=!0,v.simulation=this,!0}},{key:"startInertia",value:function(){var f=this,v=this.interaction.coords.velocity.client,M=Nl(this.interaction),C=M.resistance,w=-Math.log(M.endSpeed/this.v0)/C;this.targetOffset={x:(v.x-w)/C,y:(v.y-w)/C},this.te=w,this.lambda_v0=C/this.v0,this.one_ve_v0=1-M.endSpeed/this.v0;var T=this.modification,I=this.modifierArg;I.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},T.result=T.setAll(I),T.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+T.result.delta.x,y:this.targetOffset.y+T.result.delta.y}),this.onNextFrame(function(){return f.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var f=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return f.smoothEndTick()})}},{key:"onNextFrame",value:function(f){var v=this;this.timeout=Xt.default.request(function(){v.active&&f()})}},{key:"inertiaTick",value:function(){var f,v,M,C,w,T=this,I=this.interaction,F=Nl(I).resistance,G=(I._now()-this.t0)/1e3;if(G<this.te){var ee,ce=1-(Math.exp(-F*G)-this.lambda_v0)/this.one_ve_v0;this.isModified?(f=this.targetOffset.x,v=this.targetOffset.y,M=this.modifiedOffset.x,C=this.modifiedOffset.y,ee={x:em(w=ce,0,f,M),y:em(w,0,v,C)}):ee={x:this.targetOffset.x*ce,y:this.targetOffset.y*ce};var K={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=K.x,this.currentOffset.y+=K.y,I.offsetBy(K),I.move(),this.onNextFrame(function(){return T.inertiaTick()})}else I.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var f=this,v=this.interaction,M=v._now()-this.t0,C=Nl(v).smoothEndDuration;if(M<C){var w={x:tm(M,0,this.targetOffset.x,C),y:tm(M,0,this.targetOffset.y,C)},T={x:w.x-this.currentOffset.x,y:w.y-this.currentOffset.y};this.currentOffset.x+=T.x,this.currentOffset.y+=T.y,v.offsetBy(T),v.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return f.smoothEndTick()})}else v.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(f){var v=f.pointer,M=f.event,C=f.eventTarget,w=this.interaction;w.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),w.updatePointer(v,M,C,!0),w._doPhase({interaction:w,event:M,phase:"resume"}),(0,q.copyCoords)(w.coords.prev,w.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Xt.default.cancel(this.timeout)}}])&&D_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function Nl(s){var u=s.interactable,c=s.prepared;return u&&u.options&&c.name&&u.options[c.name].inertia}Kr.InertiaState=Jp;var R_={id:"inertia",before:["modifiers","actions"],install:function(s){var u=s.defaults;s.usePlugin(fr.default),s.usePlugin(dn.default),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,u.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var u=s.interaction;u.inertia=new Jp(u)},"interactions:before-action-end":function(s){var u=s.interaction,c=s.event;return(!u._interacting||u.simulation||!u.inertia.start(c))&&null},"interactions:down":function(s){var u=s.interaction,c=s.eventTarget,f=u.inertia;if(f.active)for(var v=c;a.default.element(v);){if(v===u.element){f.resume(s);break}v=k.parentNode(v)}},"interactions:stop":function(s){var u=s.interaction.inertia;u.active&&u.stop()},"interactions:before-action-resume":function(s){var u=s.interaction.modification;u.stop(s),u.start(s,s.interaction.coords.cur.page),u.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":dn.addEventModifiers,"interactions:action-inertiastart":dn.addEventModifiers,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function em(s,u,c,f){var v=1-s;return v*v*u+2*v*s*c+s*s*f}function tm(s,u,c,f){return-c*(s/=f)*(s-2)+u}var L_=R_;Kr.default=L_;var na={};function I_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function ia(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function nm(s,u){for(var c=0;c<u.length;c++){var f=u[c];if(s.immediatePropagationStopped)break;f(s)}}Object.defineProperty(na,"__esModule",{value:!0}),na.Eventable=void 0;var O_=function(){function s(f){(function(v,M){if(!(v instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),ia(this,"options",void 0),ia(this,"types",{}),ia(this,"propagationStopped",!1),ia(this,"immediatePropagationStopped",!1),ia(this,"global",void 0),this.options=(0,W.default)({},f||{})}var u,c;return u=s,(c=[{key:"fire",value:function(f){var v,M=this.global;(v=this.types[f.type])&&nm(f,v),!f.propagationStopped&&M&&(v=M[f.type])&&nm(f,v)}},{key:"on",value:function(f,v){var M=(0,re.default)(f,v);for(f in M)this.types[f]=Xe.merge(this.types[f]||[],M[f])}},{key:"off",value:function(f,v){var M=(0,re.default)(f,v);for(f in M){var C=this.types[f];if(C&&C.length)for(var w=0;w<M[f].length;w++){var T=M[f][w],I=C.indexOf(T);I!==-1&&C.splice(I,1)}}}},{key:"getRect",value:function(f){return null}}])&&I_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();na.Eventable=O_;var ra={};Object.defineProperty(ra,"__esModule",{value:!0}),ra.default=function(s,u){if(u.phaselessTypes[s])return!0;for(var c in u.map)if(s.indexOf(c)===0&&s.substr(c.length)in u.phases)return!0;return!1};var ef={};Object.defineProperty(ef,"__esModule",{value:!0}),ef.createInteractStatic=function(s){var u=function c(f,v){var M=s.interactables.get(f,v);return M||((M=s.interactables.new(f,v)).events.global=c.globalEvents),M};return u.getPointerAverage=q.pointerAverage,u.getTouchBBox=q.touchBBox,u.getTouchDistance=q.touchDistance,u.getTouchAngle=q.touchAngle,u.getElementRect=k.getElementRect,u.getElementClientRect=k.getElementClientRect,u.matchesSelector=k.matchesSelector,u.closest=k.closest,u.globalEvents={},u.version="1.10.17",u.scope=s,u.use=function(c,f){return this.scope.usePlugin(c,f),this},u.isSet=function(c,f){return!!this.scope.interactables.get(c,f&&f.context)},u.on=(0,ie.warnOnce)(function(c,f,v){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var M=0;M<c.length;M++){var C=c[M];this.on(C,f,v)}return this}if(a.default.object(c)){for(var w in c)this.on(w,c[w],f);return this}return(0,ra.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(f):this.globalEvents[c]=[f]:this.scope.events.add(this.scope.document,c,f,{options:v}),this},"The interact.on() method is being deprecated"),u.off=(0,ie.warnOnce)(function(c,f,v){if(a.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),a.default.array(c)){for(var M=0;M<c.length;M++){var C=c[M];this.off(C,f,v)}return this}if(a.default.object(c)){for(var w in c)this.off(w,c[w],f);return this}var T;return(0,ra.default)(c,this.scope.actions)?c in this.globalEvents&&(T=this.globalEvents[c].indexOf(f))!==-1&&this.globalEvents[c].splice(T,1):this.scope.events.remove(this.scope.document,c,f,v),this},"The interact.off() method is being deprecated"),u.debug=function(){return this.scope},u.supportsTouch=function(){return D.default.supportsTouch},u.supportsPointerEvent=function(){return D.default.supportsPointerEvent},u.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},u.pointerMoveTolerance=function(c){return a.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},u.addDocument=function(c,f){this.scope.addDocument(c,f)},u.removeDocument=function(c){this.scope.removeDocument(c)},u};var Ul={};function N_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function Wi(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Ul,"__esModule",{value:!0}),Ul.Interactable=void 0;var U_=function(){function s(f,v,M,C){(function(w,T){if(!(w instanceof T))throw new TypeError("Cannot call a class as a function")})(this,s),Wi(this,"options",void 0),Wi(this,"_actions",void 0),Wi(this,"target",void 0),Wi(this,"events",new na.Eventable),Wi(this,"_context",void 0),Wi(this,"_win",void 0),Wi(this,"_doc",void 0),Wi(this,"_scopeEvents",void 0),Wi(this,"_rectChecker",void 0),this._actions=v.actions,this.target=f,this._context=v.context||M,this._win=(0,i.getWindow)((0,k.trySelector)(f)?this._context:f),this._doc=this._win.document,this._scopeEvents=C,this.set(v)}var u,c;return u=s,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(f,v){return a.default.func(v.onstart)&&this.on("".concat(f,"start"),v.onstart),a.default.func(v.onmove)&&this.on("".concat(f,"move"),v.onmove),a.default.func(v.onend)&&this.on("".concat(f,"end"),v.onend),a.default.func(v.oninertiastart)&&this.on("".concat(f,"inertiastart"),v.oninertiastart),this}},{key:"updatePerActionListeners",value:function(f,v,M){(a.default.array(v)||a.default.object(v))&&this.off(f,v),(a.default.array(M)||a.default.object(M))&&this.on(f,M)}},{key:"setPerAction",value:function(f,v){var M=this._defaults;for(var C in v){var w=C,T=this.options[f],I=v[w];w==="listeners"&&this.updatePerActionListeners(f,T.listeners,I),a.default.array(I)?T[w]=Xe.from(I):a.default.plainObject(I)?(T[w]=(0,W.default)(T[w]||{},(0,qr.default)(I)),a.default.object(M.perAction[w])&&"enabled"in M.perAction[w]&&(T[w].enabled=I.enabled!==!1)):a.default.bool(I)&&a.default.object(M.perAction[w])?T[w].enabled=I:T[w]=I}}},{key:"getRect",value:function(f){return f=f||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(f=f||this._context.querySelector(this.target)),(0,k.getElementRect)(f)}},{key:"rectChecker",value:function(f){var v=this;return a.default.func(f)?(this._rectChecker=f,this.getRect=function(M){var C=(0,W.default)({},v._rectChecker(M));return"width"in C||(C.width=C.right-C.left,C.height=C.bottom-C.top),C},this):f===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(f,v){if((0,k.trySelector)(v)||a.default.object(v)){for(var M in this.options[f]=v,this._actions.map)this.options[M][f]=v;return this}return this.options[f]}},{key:"origin",value:function(f){return this._backCompatOption("origin",f)}},{key:"deltaSource",value:function(f){return f==="page"||f==="client"?(this.options.deltaSource=f,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(f){return this._context===f.ownerDocument||(0,k.nodeContains)(this._context,f)}},{key:"testIgnoreAllow",value:function(f,v,M){return!this.testIgnore(f.ignoreFrom,v,M)&&this.testAllow(f.allowFrom,v,M)}},{key:"testAllow",value:function(f,v,M){return!f||!!a.default.element(M)&&(a.default.string(f)?(0,k.matchesUpTo)(M,f,v):!!a.default.element(f)&&(0,k.nodeContains)(f,M))}},{key:"testIgnore",value:function(f,v,M){return!(!f||!a.default.element(M))&&(a.default.string(f)?(0,k.matchesUpTo)(M,f,v):!!a.default.element(f)&&(0,k.nodeContains)(f,M))}},{key:"fire",value:function(f){return this.events.fire(f),this}},{key:"_onOff",value:function(f,v,M,C){a.default.object(v)&&!a.default.array(v)&&(C=M,M=null);var w=f==="on"?"add":"remove",T=(0,re.default)(v,M);for(var I in T){I==="wheel"&&(I=D.default.wheelEvent);for(var F=0;F<T[I].length;F++){var G=T[I][F];(0,ra.default)(I,this._actions)?this.events[f](I,G):a.default.string(this.target)?this._scopeEvents["".concat(w,"Delegate")](this.target,this._context,I,G,C):this._scopeEvents[w](this.target,I,G,C)}}return this}},{key:"on",value:function(f,v,M){return this._onOff("on",f,v,M)}},{key:"off",value:function(f,v,M){return this._onOff("off",f,v,M)}},{key:"set",value:function(f){var v=this._defaults;for(var M in a.default.object(f)||(f={}),this.options=(0,qr.default)(v.base),this._actions.methodDict){var C=M,w=this._actions.methodDict[C];this.options[C]={},this.setPerAction(C,(0,W.default)((0,W.default)({},v.perAction),v.actions[C])),this[w](f[C])}for(var T in f)a.default.func(this[T])&&this[T](f[T]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var f in this._scopeEvents.delegatedEvents)for(var v=this._scopeEvents.delegatedEvents[f],M=v.length-1;M>=0;M--){var C=v[M],w=C.selector,T=C.context,I=C.listeners;w===this.target&&T===this._context&&v.splice(M,1);for(var F=I.length-1;F>=0;F--)this._scopeEvents.removeDelegate(this.target,this._context,f,I[F][0],I[F][1])}else this._scopeEvents.remove(this.target,"all")}}])&&N_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();Ul.Interactable=U_;var kl={};function k_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function tf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(kl,"__esModule",{value:!0}),kl.InteractableSet=void 0;var z_=function(){function s(f){var v=this;(function(M,C){if(!(M instanceof C))throw new TypeError("Cannot call a class as a function")})(this,s),tf(this,"list",[]),tf(this,"selectorMap",{}),tf(this,"scope",void 0),this.scope=f,f.addListeners({"interactable:unset":function(M){var C=M.interactable,w=C.target,T=C._context,I=a.default.string(w)?v.selectorMap[w]:w[v.scope.id],F=Xe.findIndex(I,function(G){return G.context===T});I[F]&&(I[F].context=null,I[F].interactable=null),I.splice(F,1)}})}var u,c;return u=s,(c=[{key:"new",value:function(f,v){v=(0,W.default)(v||{},{actions:this.scope.actions});var M=new this.scope.Interactable(f,v,this.scope.document,this.scope.events),C={context:M._context,interactable:M};return this.scope.addDocument(M._doc),this.list.push(M),a.default.string(f)?(this.selectorMap[f]||(this.selectorMap[f]=[]),this.selectorMap[f].push(C)):(M.target[this.scope.id]||Object.defineProperty(f,this.scope.id,{value:[],configurable:!0}),f[this.scope.id].push(C)),this.scope.fire("interactable:new",{target:f,options:v,interactable:M,win:this.scope._win}),M}},{key:"get",value:function(f,v){var M=v&&v.context||this.scope.document,C=a.default.string(f),w=C?this.selectorMap[f]:f[this.scope.id];if(!w)return null;var T=Xe.find(w,function(I){return I.context===M&&(C||I.interactable.inContext(f))});return T&&T.interactable}},{key:"forEachMatch",value:function(f,v){for(var M=0;M<this.list.length;M++){var C=this.list[M],w=void 0;if((a.default.string(C.target)?a.default.element(f)&&k.matchesSelector(f,C.target):f===C.target)&&C.inContext(f)&&(w=v(C)),w!==void 0)return w}}}])&&k_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();kl.InteractableSet=z_;var zl={};function F_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function nf(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function rf(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var M,C,w=[],T=!0,I=!1;try{for(v=v.call(c);!(T=(M=v.next()).done)&&(w.push(M.value),!f||w.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||v.return==null||v.return()}finally{if(I)throw C}}return w}}(s,u)||function(c,f){if(c){if(typeof c=="string")return im(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?im(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function im(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=void 0;var B_=function(){function s(f){(function(v,M){if(!(v instanceof M))throw new TypeError("Cannot call a class as a function")})(this,s),nf(this,"currentTarget",void 0),nf(this,"originalEvent",void 0),nf(this,"type",void 0),this.originalEvent=f,(0,oe.default)(this,f)}var u,c;return u=s,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&F_(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),s}();function oa(s){if(!a.default.object(s))return{capture:!!s,passive:!1};var u=(0,W.default)({},s);return u.capture=!!s.capture,u.passive=!!s.passive,u}var V_={id:"events",install:function(s){var u,c=[],f={},v=[],M={add:C,remove:w,addDelegate:function(F,G,ee,ce,K){var ye=oa(K);if(!f[ee]){f[ee]=[];for(var Pe=0;Pe<v.length;Pe++){var xe=v[Pe];C(xe,ee,T),C(xe,ee,I,!0)}}var ke=f[ee],je=Xe.find(ke,function(tt){return tt.selector===F&&tt.context===G});je||(je={selector:F,context:G,listeners:[]},ke.push(je)),je.listeners.push([ce,ye])},removeDelegate:function(F,G,ee,ce,K){var ye,Pe=oa(K),xe=f[ee],ke=!1;if(xe)for(ye=xe.length-1;ye>=0;ye--){var je=xe[ye];if(je.selector===F&&je.context===G){for(var tt=je.listeners,gt=tt.length-1;gt>=0;gt--){var Tt=rf(tt[gt],2),ut=Tt[0],wt=Tt[1],oi=wt.capture,Xi=wt.passive;if(ut===ce&&oi===Pe.capture&&Xi===Pe.passive){tt.splice(gt,1),tt.length||(xe.splice(ye,1),w(G,ee,T),w(G,ee,I,!0)),ke=!0;break}}if(ke)break}}},delegateListener:T,delegateUseCapture:I,delegatedEvents:f,documents:v,targets:c,supportsOptions:!1,supportsPassive:!1};function C(F,G,ee,ce){var K=oa(ce),ye=Xe.find(c,function(Pe){return Pe.eventTarget===F});ye||(ye={eventTarget:F,events:{}},c.push(ye)),ye.events[G]||(ye.events[G]=[]),F.addEventListener&&!Xe.contains(ye.events[G],ee)&&(F.addEventListener(G,ee,M.supportsOptions?K:K.capture),ye.events[G].push(ee))}function w(F,G,ee,ce){var K=oa(ce),ye=Xe.findIndex(c,function(gt){return gt.eventTarget===F}),Pe=c[ye];if(Pe&&Pe.events)if(G!=="all"){var xe=!1,ke=Pe.events[G];if(ke){if(ee==="all"){for(var je=ke.length-1;je>=0;je--)w(F,G,ke[je],K);return}for(var tt=0;tt<ke.length;tt++)if(ke[tt]===ee){F.removeEventListener(G,ee,M.supportsOptions?K:K.capture),ke.splice(tt,1),ke.length===0&&(delete Pe.events[G],xe=!0);break}}xe&&!Object.keys(Pe.events).length&&c.splice(ye,1)}else for(G in Pe.events)Pe.events.hasOwnProperty(G)&&w(F,G,"all")}function T(F,G){for(var ee=oa(G),ce=new B_(F),K=f[F.type],ye=rf(q.getEventTargets(F),1)[0],Pe=ye;a.default.element(Pe);){for(var xe=0;xe<K.length;xe++){var ke=K[xe],je=ke.selector,tt=ke.context;if(k.matchesSelector(Pe,je)&&k.nodeContains(tt,ye)&&k.nodeContains(tt,Pe)){var gt=ke.listeners;ce.currentTarget=Pe;for(var Tt=0;Tt<gt.length;Tt++){var ut=rf(gt[Tt],2),wt=ut[0],oi=ut[1],Xi=oi.capture,wf=oi.passive;Xi===ee.capture&&wf===ee.passive&&wt(ce)}}}Pe=k.parentNode(Pe)}}function I(F){return T(F,!0)}return(u=s.document)==null||u.createElement("div").addEventListener("test",null,{get capture(){return M.supportsOptions=!0},get passive(){return M.supportsPassive=!0}}),s.events=M,M}};zl.default=V_;var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0}),Fl.default=void 0;var Bl={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var u=0;u<Bl.methodOrder.length;u++){var c;c=Bl.methodOrder[u];var f=Bl[c](s);if(f)return f}return null},simulationResume:function(s){var u=s.pointerType,c=s.eventType,f=s.eventTarget,v=s.scope;if(!/down|start/i.test(c))return null;for(var M=0;M<v.interactions.list.length;M++){var C=v.interactions.list[M],w=f;if(C.simulation&&C.simulation.allowResume&&C.pointerType===u)for(;w;){if(w===C.element)return C;w=k.parentNode(w)}}return null},mouseOrPen:function(s){var u,c=s.pointerId,f=s.pointerType,v=s.eventType,M=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var C=0;C<M.interactions.list.length;C++){var w=M.interactions.list[C];if(w.pointerType===f){if(w.simulation&&!rm(w,c))continue;if(w.interacting())return w;u||(u=w)}}if(u)return u;for(var T=0;T<M.interactions.list.length;T++){var I=M.interactions.list[T];if(!(I.pointerType!==f||/down/i.test(v)&&I.simulation))return I}return null},hasPointer:function(s){for(var u=s.pointerId,c=s.scope,f=0;f<c.interactions.list.length;f++){var v=c.interactions.list[f];if(rm(v,u))return v}return null},idle:function(s){for(var u=s.pointerType,c=s.scope,f=0;f<c.interactions.list.length;f++){var v=c.interactions.list[f];if(v.pointers.length===1){var M=v.interactable;if(M&&(!M.options.gesture||!M.options.gesture.enabled))continue}else if(v.pointers.length>=2)continue;if(!v.interacting()&&u===v.pointerType)return v}return null}};function rm(s,u){return s.pointers.some(function(c){return c.id===u})}var G_=Bl;Fl.default=G_;var Vl={};function of(s){return of=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},of(s)}function om(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var M,C,w=[],T=!0,I=!1;try{for(v=v.call(c);!(T=(M=v.next()).done)&&(w.push(M.value),!f||w.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||v.return==null||v.return()}finally{if(I)throw C}}return w}}(s,u)||function(c,f){if(c){if(typeof c=="string")return sm(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?sm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function sm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}function H_(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function W_(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function sf(s,u){return sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},sf(s,u)}function j_(s,u){if(u&&(of(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function Gl(s){return Gl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},Gl(s)}Object.defineProperty(Vl,"__esModule",{value:!0}),Vl.default=void 0;var af=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function am(s,u){return function(c){var f=u.interactions.list,v=q.getPointerType(c),M=om(q.getEventTargets(c),2),C=M[0],w=M[1],T=[];if(/^touch/.test(c.type)){u.prevTouchTime=u.now();for(var I=0;I<c.changedTouches.length;I++){var F=c.changedTouches[I],G={pointer:F,pointerId:q.getPointerId(F),pointerType:v,eventType:c.type,eventTarget:C,curEventTarget:w,scope:u},ee=lm(G);T.push([G.pointer,G.eventTarget,G.curEventTarget,ee])}}else{var ce=!1;if(!D.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var K=0;K<f.length&&!ce;K++)ce=f[K].pointerType!=="mouse"&&f[K].pointerIsDown;ce=ce||u.now()-u.prevTouchTime<500||c.timeStamp===0}if(!ce){var ye={pointer:c,pointerId:q.getPointerId(c),pointerType:v,eventType:c.type,curEventTarget:w,eventTarget:C,scope:u},Pe=lm(ye);T.push([ye.pointer,ye.eventTarget,ye.curEventTarget,Pe])}}for(var xe=0;xe<T.length;xe++){var ke=om(T[xe],4),je=ke[0],tt=ke[1],gt=ke[2];ke[3][s](je,c,tt,gt)}}}function lm(s){var u=s.pointerType,c=s.scope,f={interaction:Fl.default.search(s),searchDetails:s};return c.fire("interactions:find",f),f.interaction||c.interactions.new({pointerType:u})}function lf(s,u){var c=s.doc,f=s.scope,v=s.options,M=f.interactions.docEvents,C=f.events,w=C[u];for(var T in f.browser.isIOS&&!v.events&&(v.events={passive:!1}),C.delegatedEvents)w(c,T,C.delegateListener),w(c,T,C.delegateUseCapture,!0);for(var I=v&&v.events,F=0;F<M.length;F++){var G=M[F];w(c,G.type,G.listener,I)}}var X_={id:"core/interactions",install:function(s){for(var u={},c=0;c<af.length;c++){var f=af[c];u[f]=am(f,s)}var v,M=D.default.pEventTypes;function C(){for(var w=0;w<s.interactions.list.length;w++){var T=s.interactions.list[w];if(T.pointerIsDown&&T.pointerType==="touch"&&!T._interacting)for(var I=function(){var G=T.pointers[F];s.documents.some(function(ee){var ce=ee.doc;return(0,k.nodeContains)(ce,G.downTarget)})||T.removePointer(G.pointer,G.event)},F=0;F<T.pointers.length;F++)I()}}(v=h.default.PointerEvent?[{type:M.down,listener:C},{type:M.down,listener:u.pointerDown},{type:M.move,listener:u.pointerMove},{type:M.up,listener:u.pointerUp},{type:M.cancel,listener:u.pointerUp}]:[{type:"mousedown",listener:u.pointerDown},{type:"mousemove",listener:u.pointerMove},{type:"mouseup",listener:u.pointerUp},{type:"touchstart",listener:C},{type:"touchstart",listener:u.pointerDown},{type:"touchmove",listener:u.pointerMove},{type:"touchend",listener:u.pointerUp},{type:"touchcancel",listener:u.pointerUp}]).push({type:"blur",listener:function(w){for(var T=0;T<s.interactions.list.length;T++)s.interactions.list[T].documentBlur(w)}}),s.prevTouchTime=0,s.Interaction=function(w){(function(K,ye){if(typeof ye!="function"&&ye!==null)throw new TypeError("Super expression must either be null or a function");K.prototype=Object.create(ye&&ye.prototype,{constructor:{value:K,writable:!0,configurable:!0}}),Object.defineProperty(K,"prototype",{writable:!1}),ye&&sf(K,ye)})(ce,w);var T,I,F,G,ee=(F=ce,G=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var K,ye=Gl(F);if(G){var Pe=Gl(this).constructor;K=Reflect.construct(ye,arguments,Pe)}else K=ye.apply(this,arguments);return j_(this,K)});function ce(){return H_(this,ce),ee.apply(this,arguments)}return T=ce,(I=[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(K){s.interactions.pointerMoveTolerance=K}},{key:"_now",value:function(){return s.now()}}])&&W_(T.prototype,I),Object.defineProperty(T,"prototype",{writable:!1}),ce}(Nn.default),s.interactions={list:[],new:function(w){w.scopeFire=function(I,F){return s.fire(I,F)};var T=new s.Interaction(w);return s.interactions.list.push(T),T},listeners:u,docEvents:v,pointerMoveTolerance:1},s.usePlugin(mi.default)},listeners:{"scope:add-document":function(s){return lf(s,"add")},"scope:remove-document":function(s){return lf(s,"remove")},"interactable:unset":function(s,u){for(var c=s.interactable,f=u.interactions.list.length-1;f>=0;f--){var v=u.interactions.list[f];v.interactable===c&&(v.stop(),u.fire("interactions:destroy",{interaction:v}),v.destroy(),u.interactions.list.length>2&&u.interactions.list.splice(f,1))}}},onDocSignal:lf,doOnInteractions:am,methodNames:af},q_=X_;Vl.default=q_;var sa={};function uf(s){return uf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},uf(s)}function aa(){return aa=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(s,u,c){var f=$_(s,u);if(f){var v=Object.getOwnPropertyDescriptor(f,u);return v.get?v.get.call(arguments.length<3?s:c):v.value}},aa.apply(this,arguments)}function $_(s,u){for(;!Object.prototype.hasOwnProperty.call(s,u)&&(s=dr(s))!==null;);return s}function cf(s,u){return cf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},cf(s,u)}function Y_(s,u){if(u&&(uf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(s)}function dr(s){return dr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},dr(s)}function um(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function cm(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function fm(s,u,c){return u&&cm(s.prototype,u),c&&cm(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}function hn(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(sa,"__esModule",{value:!0}),sa.Scope=void 0,sa.initScope=dm;var K_=function(){function s(){var u=this;um(this,s),hn(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),hn(this,"isInitialized",!1),hn(this,"listenerMaps",[]),hn(this,"browser",D.default),hn(this,"defaults",(0,qr.default)(Qs.defaults)),hn(this,"Eventable",na.Eventable),hn(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),hn(this,"interactStatic",(0,ef.createInteractStatic)(this)),hn(this,"InteractEvent",Js.InteractEvent),hn(this,"Interactable",void 0),hn(this,"interactables",new kl.InteractableSet(this)),hn(this,"_win",void 0),hn(this,"document",void 0),hn(this,"window",void 0),hn(this,"documents",[]),hn(this,"_plugins",{list:[],map:{}}),hn(this,"onWindowUnload",function(f){return u.removeDocument(f.target)});var c=this;this.Interactable=function(f){(function(T,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(I&&I.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),I&&cf(T,I)})(w,f);var v,M,C=(v=w,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var T,I=dr(v);if(M){var F=dr(this).constructor;T=Reflect.construct(I,arguments,F)}else T=I.apply(this,arguments);return Y_(this,T)});function w(){return um(this,w),C.apply(this,arguments)}return fm(w,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(T){return aa(dr(w.prototype),"set",this).call(this,T),c.fire("interactable:set",{options:T,interactable:this}),this}},{key:"unset",value:function(){aa(dr(w.prototype),"unset",this).call(this);var T=c.interactables.list.indexOf(this);T<0||(aa(dr(w.prototype),"unset",this).call(this),c.interactables.list.splice(T,1),c.fire("interactable:unset",{interactable:this}))}}]),w}(Ul.Interactable)}return fm(s,[{key:"addListeners",value:function(u,c){this.listenerMaps.push({id:c,map:u})}},{key:"fire",value:function(u,c){for(var f=0;f<this.listenerMaps.length;f++){var v=this.listenerMaps[f].map[u];if(v&&v(c,this,u)===!1)return!1}}},{key:"init",value:function(u){return this.isInitialized?this:dm(this,u)}},{key:"pluginIsInstalled",value:function(u){return this._plugins.map[u.id]||this._plugins.list.indexOf(u)!==-1}},{key:"usePlugin",value:function(u,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(u))return this;if(u.id&&(this._plugins.map[u.id]=u),this._plugins.list.push(u),u.install&&u.install(this,c),u.listeners&&u.before){for(var f=0,v=this.listenerMaps.length,M=u.before.reduce(function(w,T){return w[T]=!0,w[hm(T)]=!0,w},{});f<v;f++){var C=this.listenerMaps[f].id;if(M[C]||M[hm(C)])break}this.listenerMaps.splice(f,0,{id:u.id,map:u.listeners})}else u.listeners&&this.listenerMaps.push({id:u.id,map:u.listeners});return this}},{key:"addDocument",value:function(u,c){if(this.getDocIndex(u)!==-1)return!1;var f=i.getWindow(u);c=c?(0,W.default)({},c):{},this.documents.push({doc:u,options:c}),this.events.documents.push(u),u!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:u,window:f,scope:this,options:c})}},{key:"removeDocument",value:function(u){var c=this.getDocIndex(u),f=i.getWindow(u),v=this.documents[c].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:u,window:f,scope:this,options:v})}},{key:"getDocIndex",value:function(u){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===u)return c;return-1}},{key:"getDocOptions",value:function(u){var c=this.getDocIndex(u);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s}();function dm(s,u){return s.isInitialized=!0,a.default.window(u)&&i.init(u),h.default.init(u),D.default.init(u),Xt.default.init(u),s.window=u,s.document=u.document,s.usePlugin(Vl.default),s.usePlugin(zl.default),s}function hm(s){return s&&s.replace(/\/.*$/,"")}sa.Scope=K_;var pn={};Object.defineProperty(pn,"__esModule",{value:!0}),pn.default=void 0;var pm=new sa.Scope,Z_=pm.interactStatic;pn.default=Z_;var Q_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;pm.init(Q_);var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.default=void 0,Hl.default=function(){};var Wl={};Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.default=void 0,Wl.default=function(){};var jl={};function mm(s,u){return function(c){if(Array.isArray(c))return c}(s)||function(c,f){var v=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var M,C,w=[],T=!0,I=!1;try{for(v=v.call(c);!(T=(M=v.next()).done)&&(w.push(M.value),!f||w.length!==f);T=!0);}catch(F){I=!0,C=F}finally{try{T||v.return==null||v.return()}finally{if(I)throw C}}return w}}(s,u)||function(c,f){if(c){if(typeof c=="string")return vm(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);return v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set"?Array.from(c):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?vm(c,f):void 0}}(s,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function vm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(jl,"__esModule",{value:!0}),jl.default=void 0,jl.default=function(s){var u=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(f){var v=mm(f,2),M=v[0],C=v[1];return M in s||C in s}),c=function(f,v){for(var M=s.range,C=s.limits,w=C===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:C,T=s.offset,I=T===void 0?{x:0,y:0}:T,F={range:M,grid:s,x:null,y:null},G=0;G<u.length;G++){var ee=mm(u[G],2),ce=ee[0],K=ee[1],ye=Math.round((f-I.x)/s[ce]),Pe=Math.round((v-I.y)/s[K]);F[ce]=Math.max(w.left,Math.min(w.right,ye*s[ce]+I.x)),F[K]=Math.max(w.top,Math.min(w.bottom,Pe*s[K]+I.y))}return F};return c.grid=s,c.coordFields=u,c};var la={};Object.defineProperty(la,"__esModule",{value:!0}),Object.defineProperty(la,"edgeTarget",{enumerable:!0,get:function(){return Hl.default}}),Object.defineProperty(la,"elements",{enumerable:!0,get:function(){return Wl.default}}),Object.defineProperty(la,"grid",{enumerable:!0,get:function(){return jl.default}});var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.default=void 0;var J_={id:"snappers",install:function(s){var u=s.interactStatic;u.snappers=(0,W.default)(u.snappers||{},la),u.createSnapGrid=u.snappers.grid}},eS=J_;Xl.default=eS;var Oo={};function gm(s,u){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);u&&(f=f.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),c.push.apply(c,f)}return c}function ff(s){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?gm(Object(c),!0).forEach(function(f){tS(s,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):gm(Object(c)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(c,f))})}return s}function tS(s,u,c){return u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.default=Oo.aspectRatio=void 0;var ym={start:function(s){var u=s.state,c=s.rect,f=s.edges,v=s.pageCoords,M=u.options.ratio,C=u.options,w=C.equalDelta,T=C.modifiers;M==="preserve"&&(M=c.width/c.height),u.startCoords=(0,W.default)({},v),u.startRect=(0,W.default)({},c),u.ratio=M,u.equalDelta=w;var I=u.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(u.xIsPrimaryAxis=!(!f.left&&!f.right),u.equalDelta){var F=(I.left?1:-1)*(I.top?1:-1);u.edgeSign={x:F,y:F}}else u.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if((0,W.default)(s.edges,I),T&&T.length){var G=new $r.default(s.interaction);G.copyFrom(s.interaction.modification),G.prepareStates(T),u.subModification=G,G.startAll(ff({},s))}},set:function(s){var u=s.state,c=s.rect,f=s.coords,v=(0,W.default)({},f),M=u.equalDelta?nS:iS;if(M(u,u.xIsPrimaryAxis,f,c),!u.subModification)return null;var C=(0,W.default)({},c);(0,fe.addEdges)(u.linkedEdges,C,{x:f.x-v.x,y:f.y-v.y});var w=u.subModification.setAll(ff(ff({},s),{},{rect:C,edges:u.linkedEdges,pageCoords:f,prevCoords:f,prevRect:C})),T=w.delta;return w.changed&&(M(u,Math.abs(T.x)>Math.abs(T.y),w.coords,w.rect),(0,W.default)(f,w.coords)),w.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function nS(s,u,c){var f=s.startCoords,v=s.edgeSign;u?c.y=f.y+(c.x-f.x)*v.y:c.x=f.x+(c.y-f.y)*v.x}function iS(s,u,c,f){var v=s.startRect,M=s.startCoords,C=s.ratio,w=s.edgeSign;if(u){var T=f.width/C;c.y=M.y+(T-v.height)*w.y}else{var I=f.height*C;c.x=M.x+(I-v.width)*w.x}}Oo.aspectRatio=ym;var rS=(0,dn.makeModifier)(ym,"aspectRatio");Oo.default=rS;var Zr={};Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.default=void 0;var xm=function(){};xm._defaults={};var oS=xm;Zr.default=oS;var df={};Object.defineProperty(df,"__esModule",{value:!0}),Object.defineProperty(df,"default",{enumerable:!0,get:function(){return Zr.default}});var Cn={};function hf(s,u,c){return a.default.func(s)?fe.resolveRectLike(s,u.interactable,u.element,[c.x,c.y,u]):fe.resolveRectLike(s,u.interactable,u.element)}Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0,Cn.getRestrictionRect=hf,Cn.restrict=void 0;var _m={start:function(s){var u=s.rect,c=s.startOffset,f=s.state,v=s.interaction,M=s.pageCoords,C=f.options,w=C.elementRect,T=(0,W.default)({left:0,top:0,right:0,bottom:0},C.offset||{});if(u&&w){var I=hf(C.restriction,v,M);if(I){var F=I.right-I.left-u.width,G=I.bottom-I.top-u.height;F<0&&(T.left+=F,T.right+=F),G<0&&(T.top+=G,T.bottom+=G)}T.left+=c.left-u.width*w.left,T.top+=c.top-u.height*w.top,T.right+=c.right-u.width*(1-w.right),T.bottom+=c.bottom-u.height*(1-w.bottom)}f.offset=T},set:function(s){var u=s.coords,c=s.interaction,f=s.state,v=f.options,M=f.offset,C=hf(v.restriction,c,u);if(C){var w=fe.xywhToTlbr(C);u.x=Math.max(Math.min(w.right-M.right,u.x),w.left+M.left),u.y=Math.max(Math.min(w.bottom-M.bottom,u.y),w.top+M.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Cn.restrict=_m;var sS=(0,dn.makeModifier)(_m,"restrict");Cn.default=sS;var Li={};Object.defineProperty(Li,"__esModule",{value:!0}),Li.restrictEdges=Li.default=void 0;var Sm={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Mm={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function wm(s,u){for(var c=["top","left","bottom","right"],f=0;f<c.length;f++){var v=c[f];v in s||(s[v]=u[v])}return s}var bm={noInner:Sm,noOuter:Mm,start:function(s){var u,c=s.interaction,f=s.startOffset,v=s.state,M=v.options;if(M){var C=(0,Cn.getRestrictionRect)(M.offset,c,c.coords.start.page);u=fe.rectToXY(C)}u=u||{x:0,y:0},v.offset={top:u.y+f.top,left:u.x+f.left,bottom:u.y-f.bottom,right:u.x-f.right}},set:function(s){var u=s.coords,c=s.edges,f=s.interaction,v=s.state,M=v.offset,C=v.options;if(c){var w=(0,W.default)({},u),T=(0,Cn.getRestrictionRect)(C.inner,f,w)||{},I=(0,Cn.getRestrictionRect)(C.outer,f,w)||{};wm(T,Sm),wm(I,Mm),c.top?u.y=Math.min(Math.max(I.top+M.top,w.y),T.top+M.top):c.bottom&&(u.y=Math.max(Math.min(I.bottom+M.bottom,w.y),T.bottom+M.bottom)),c.left?u.x=Math.min(Math.max(I.left+M.left,w.x),T.left+M.left):c.right&&(u.x=Math.max(Math.min(I.right+M.right,w.x),T.right+M.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Li.restrictEdges=bm;var aS=(0,dn.makeModifier)(bm,"restrictEdges");Li.default=aS;var No={};Object.defineProperty(No,"__esModule",{value:!0}),No.restrictRect=No.default=void 0;var lS=(0,W.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},Cn.restrict.defaults),Em={start:Cn.restrict.start,set:Cn.restrict.set,defaults:lS};No.restrictRect=Em;var uS=(0,dn.makeModifier)(Em,"restrictRect");No.default=uS;var Uo={};Object.defineProperty(Uo,"__esModule",{value:!0}),Uo.restrictSize=Uo.default=void 0;var cS={width:-1/0,height:-1/0},fS={width:1/0,height:1/0},Tm={start:function(s){return Li.restrictEdges.start(s)},set:function(s){var u=s.interaction,c=s.state,f=s.rect,v=s.edges,M=c.options;if(v){var C=fe.tlbrToXywh((0,Cn.getRestrictionRect)(M.min,u,s.coords))||cS,w=fe.tlbrToXywh((0,Cn.getRestrictionRect)(M.max,u,s.coords))||fS;c.options={endOnly:M.endOnly,inner:(0,W.default)({},Li.restrictEdges.noInner),outer:(0,W.default)({},Li.restrictEdges.noOuter)},v.top?(c.options.inner.top=f.bottom-C.height,c.options.outer.top=f.bottom-w.height):v.bottom&&(c.options.inner.bottom=f.top+C.height,c.options.outer.bottom=f.top+w.height),v.left?(c.options.inner.left=f.right-C.width,c.options.outer.left=f.right-w.width):v.right&&(c.options.inner.right=f.left+C.width,c.options.outer.right=f.left+w.width),Li.restrictEdges.set(s),c.options=M}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Uo.restrictSize=Tm;var dS=(0,dn.makeModifier)(Tm,"restrictSize");Uo.default=dS;var pf={};Object.defineProperty(pf,"__esModule",{value:!0}),Object.defineProperty(pf,"default",{enumerable:!0,get:function(){return Zr.default}});var hr={};Object.defineProperty(hr,"__esModule",{value:!0}),hr.snap=hr.default=void 0;var Cm={start:function(s){var u,c=s.interaction,f=s.interactable,v=s.element,M=s.rect,C=s.state,w=s.startOffset,T=C.options,I=T.offsetWithOrigin?function(ee){var ce=ee.interaction.element;return(0,fe.rectToXY)((0,fe.resolveRectLike)(ee.state.options.origin,null,null,[ce]))||(0,J.default)(ee.interactable,ce,ee.interaction.prepared.name)}(s):{x:0,y:0};if(T.offset==="startCoords")u={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var F=(0,fe.resolveRectLike)(T.offset,f,v,[c]);(u=(0,fe.rectToXY)(F)||{x:0,y:0}).x+=I.x,u.y+=I.y}var G=T.relativePoints;C.offsets=M&&G&&G.length?G.map(function(ee,ce){return{index:ce,relativePoint:ee,x:w.left-M.width*ee.x+u.x,y:w.top-M.height*ee.y+u.y}}):[{index:0,relativePoint:null,x:u.x,y:u.y}]},set:function(s){var u=s.interaction,c=s.coords,f=s.state,v=f.options,M=f.offsets,C=(0,J.default)(u.interactable,u.element,u.prepared.name),w=(0,W.default)({},c),T=[];v.offsetWithOrigin||(w.x-=C.x,w.y-=C.y);for(var I=0;I<M.length;I++)for(var F=M[I],G=w.x-F.x,ee=w.y-F.y,ce=0,K=v.targets.length;ce<K;ce++){var ye,Pe=v.targets[ce];(ye=a.default.func(Pe)?Pe(G,ee,u._proxy,F,ce):Pe)&&T.push({x:(a.default.number(ye.x)?ye.x:G)+F.x,y:(a.default.number(ye.y)?ye.y:ee)+F.y,range:a.default.number(ye.range)?ye.range:v.range,source:Pe,index:ce,offset:F})}for(var xe={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},ke=0;ke<T.length;ke++){var je=T[ke],tt=je.range,gt=je.x-w.x,Tt=je.y-w.y,ut=(0,ve.default)(gt,Tt),wt=ut<=tt;tt===1/0&&xe.inRange&&xe.range!==1/0&&(wt=!1),xe.target&&!(wt?xe.inRange&&tt!==1/0?ut/tt<xe.distance/xe.range:tt===1/0&&xe.range!==1/0||ut<xe.distance:!xe.inRange&&ut<xe.distance)||(xe.target=je,xe.distance=ut,xe.range=tt,xe.inRange=wt,xe.delta.x=gt,xe.delta.y=Tt)}return xe.inRange&&(c.x=xe.target.x,c.y=xe.target.y),f.closest=xe,xe},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};hr.snap=Cm;var hS=(0,dn.makeModifier)(Cm,"snap");hr.default=hS;var ji={};function Pm(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,f=Array(u);c<u;c++)f[c]=s[c];return f}Object.defineProperty(ji,"__esModule",{value:!0}),ji.snapSize=ji.default=void 0;var Am={start:function(s){var u=s.state,c=s.edges,f=u.options;if(!c)return null;s.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},u.targetFields=u.targetFields||[["width","height"],["x","y"]],hr.snap.start(s),u.offsets=s.state.offsets,s.state=u},set:function(s){var u,c,f=s.interaction,v=s.state,M=s.coords,C=v.options,w=v.offsets,T={x:M.x-w[0].x,y:M.y-w[0].y};v.options=(0,W.default)({},C),v.options.targets=[];for(var I=0;I<(C.targets||[]).length;I++){var F=(C.targets||[])[I],G=void 0;if(G=a.default.func(F)?F(T.x,T.y,f):F){for(var ee=0;ee<v.targetFields.length;ee++){var ce=(u=v.targetFields[ee],c=2,function(xe){if(Array.isArray(xe))return xe}(u)||function(xe,ke){var je=xe==null?null:typeof Symbol<"u"&&xe[Symbol.iterator]||xe["@@iterator"];if(je!=null){var tt,gt,Tt=[],ut=!0,wt=!1;try{for(je=je.call(xe);!(ut=(tt=je.next()).done)&&(Tt.push(tt.value),!ke||Tt.length!==ke);ut=!0);}catch(oi){wt=!0,gt=oi}finally{try{ut||je.return==null||je.return()}finally{if(wt)throw gt}}return Tt}}(u,c)||function(xe,ke){if(xe){if(typeof xe=="string")return Pm(xe,ke);var je=Object.prototype.toString.call(xe).slice(8,-1);return je==="Object"&&xe.constructor&&(je=xe.constructor.name),je==="Map"||je==="Set"?Array.from(xe):je==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(je)?Pm(xe,ke):void 0}}(u,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),K=ce[0],ye=ce[1];if(K in G||ye in G){G.x=G[K],G.y=G[ye];break}}v.options.targets.push(G)}}var Pe=hr.snap.set(s);return v.options=C,Pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ji.snapSize=Am;var pS=(0,dn.makeModifier)(Am,"snapSize");ji.default=pS;var ko={};Object.defineProperty(ko,"__esModule",{value:!0}),ko.snapEdges=ko.default=void 0;var Dm={start:function(s){var u=s.edges;return u?(s.state.targetFields=s.state.targetFields||[[u.left?"left":"right",u.top?"top":"bottom"]],ji.snapSize.start(s)):null},set:ji.snapSize.set,defaults:(0,W.default)((0,qr.default)(ji.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};ko.snapEdges=Dm;var mS=(0,dn.makeModifier)(Dm,"snapEdges");ko.default=mS;var mf={};Object.defineProperty(mf,"__esModule",{value:!0}),Object.defineProperty(mf,"default",{enumerable:!0,get:function(){return Zr.default}});var vf={};Object.defineProperty(vf,"__esModule",{value:!0}),Object.defineProperty(vf,"default",{enumerable:!0,get:function(){return Zr.default}});var zo={};Object.defineProperty(zo,"__esModule",{value:!0}),zo.default=void 0;var vS={aspectRatio:Oo.default,restrictEdges:Li.default,restrict:Cn.default,restrictRect:No.default,restrictSize:Uo.default,snapEdges:ko.default,snap:hr.default,snapSize:ji.default,spring:mf.default,avoid:df.default,transform:vf.default,rubberband:pf.default};zo.default=vS;var ua={};Object.defineProperty(ua,"__esModule",{value:!0}),ua.default=void 0;var gS={id:"modifiers",install:function(s){var u=s.interactStatic;for(var c in s.usePlugin(dn.default),s.usePlugin(Xl.default),u.modifiers=zo.default,zo.default){var f=zo.default[c],v=f._defaults,M=f._methods;v._methods=M,s.defaults.perAction[c]=v}}},yS=gS;ua.default=yS;var Qr={};function gf(s){return gf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},gf(s)}function xS(s,u){for(var c=0;c<u.length;c++){var f=u[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function yf(s,u){return yf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},yf(s,u)}function _S(s,u){if(u&&(gf(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xf(s)}function xf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ql(s){return ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},ql(s)}Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.default=Qr.PointerEvent=void 0;var SS=function(s){(function(w,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(T&&T.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),T&&yf(w,T)})(C,s);var u,c,f,v,M=(f=C,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,T=ql(f);if(v){var I=ql(this).constructor;w=Reflect.construct(T,arguments,I)}else w=T.apply(this,arguments);return _S(this,w)});function C(w,T,I,F,G,ee){var ce;if(function(Pe,xe){if(!(Pe instanceof xe))throw new TypeError("Cannot call a class as a function")}(this,C),ce=M.call(this,G),q.pointerExtend(xf(ce),I),I!==T&&q.pointerExtend(xf(ce),T),ce.timeStamp=ee,ce.originalEvent=I,ce.type=w,ce.pointerId=q.getPointerId(T),ce.pointerType=q.getPointerType(T),ce.target=F,ce.currentTarget=null,w==="tap"){var K=G.getPointerIndex(T);ce.dt=ce.timeStamp-G.pointers[K].downTime;var ye=ce.timeStamp-G.tapTime;ce.double=!!G.prevTap&&G.prevTap.type!=="doubletap"&&G.prevTap.target===ce.target&&ye<500}else w==="doubletap"&&(ce.dt=T.timeStamp-G.tapTime,ce.double=!0);return ce}return u=C,(c=[{key:"_subtractOrigin",value:function(w){var T=w.x,I=w.y;return this.pageX-=T,this.pageY-=I,this.clientX-=T,this.clientY-=I,this}},{key:"_addOrigin",value:function(w){var T=w.x,I=w.y;return this.pageX+=T,this.pageY+=I,this.clientX+=T,this.clientY+=I,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&xS(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),C}(Be.BaseEvent);Qr.PointerEvent=Qr.default=SS;var ca={};Object.defineProperty(ca,"__esModule",{value:!0}),ca.default=void 0;var $l={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=$l,s.defaults.actions.pointerEvents=$l.defaults,(0,W.default)(s.actions.phaselessTypes,$l.types)},listeners:{"interactions:new":function(s){var u=s.interaction;u.prevTap=null,u.tapTime=0},"interactions:update-pointer":function(s){var u=s.down,c=s.pointerInfo;!u&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(s,u){var c=s.interaction,f=s.pointer,v=s.event,M=s.eventTarget;s.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&_f(s),pr({interaction:c,pointer:f,event:v,eventTarget:M,type:"move"},u))},"interactions:down":function(s,u){(function(c,f){for(var v=c.interaction,M=c.pointer,C=c.event,w=c.eventTarget,T=c.pointerIndex,I=v.pointers[T].hold,F=k.getPath(w),G={interaction:v,pointer:M,event:C,eventTarget:w,type:"hold",targets:[],path:F,node:null},ee=0;ee<F.length;ee++){var ce=F[ee];G.node=ce,f.fire("pointerEvents:collect-targets",G)}if(G.targets.length){for(var K=1/0,ye=0;ye<G.targets.length;ye++){var Pe=G.targets[ye].eventable.options.holdDuration;Pe<K&&(K=Pe)}I.duration=K,I.timeout=setTimeout(function(){pr({interaction:v,eventTarget:w,pointer:M,event:C,type:"hold"},f)},K)}})(s,u),pr(s,u)},"interactions:up":function(s,u){_f(s),pr(s,u),function(c,f){var v=c.interaction,M=c.pointer,C=c.event,w=c.eventTarget;v.pointerWasMoved||pr({interaction:v,eventTarget:w,pointer:M,event:C,type:"tap"},f)}(s,u)},"interactions:cancel":function(s,u){_f(s),pr(s,u)}},PointerEvent:Qr.PointerEvent,fire:pr,collectEventTargets:Rm,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function pr(s,u){var c=s.interaction,f=s.pointer,v=s.event,M=s.eventTarget,C=s.type,w=s.targets,T=w===void 0?Rm(s,u):w,I=new Qr.PointerEvent(C,f,v,M,c,u.now());u.fire("pointerEvents:new",{pointerEvent:I});for(var F={interaction:c,pointer:f,event:v,eventTarget:M,targets:T,type:C,pointerEvent:I},G=0;G<T.length;G++){var ee=T[G];for(var ce in ee.props||{})I[ce]=ee.props[ce];var K=(0,J.default)(ee.eventable,ee.node);if(I._subtractOrigin(K),I.eventable=ee.eventable,I.currentTarget=ee.node,ee.eventable.fire(I),I._addOrigin(K),I.immediatePropagationStopped||I.propagationStopped&&G+1<T.length&&T[G+1].node!==I.currentTarget)break}if(u.fire("pointerEvents:fired",F),C==="tap"){var ye=I.double?pr({interaction:c,pointer:f,event:v,eventTarget:M,type:"doubletap"},u):I;c.prevTap=ye,c.tapTime=ye.timeStamp}return I}function Rm(s,u){var c=s.interaction,f=s.pointer,v=s.event,M=s.eventTarget,C=s.type,w=c.getPointerIndex(f),T=c.pointers[w];if(C==="tap"&&(c.pointerWasMoved||!T||T.downTarget!==M))return[];for(var I=k.getPath(M),F={interaction:c,pointer:f,event:v,eventTarget:M,type:C,path:I,targets:[],node:null},G=0;G<I.length;G++){var ee=I[G];F.node=ee,u.fire("pointerEvents:collect-targets",F)}return C==="hold"&&(F.targets=F.targets.filter(function(ce){var K;return ce.eventable.options.holdDuration===((K=c.pointers[w])==null?void 0:K.hold.duration)})),F.targets}function _f(s){var u=s.interaction,c=s.pointerIndex,f=u.pointers[c].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var MS=$l;ca.default=MS;var Yl={};function wS(s){var u=s.interaction;u.holdIntervalHandle&&(clearInterval(u.holdIntervalHandle),u.holdIntervalHandle=null)}Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.default=void 0;var bS={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(ca.default);var u=s.pointerEvents;u.defaults.holdRepeatInterval=0,u.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(s,u){return s["pointerEvents:".concat(u)]=wS,s},{"pointerEvents:new":function(s){var u=s.pointerEvent;u.type==="hold"&&(u.count=(u.count||0)+1)},"pointerEvents:fired":function(s,u){var c=s.interaction,f=s.pointerEvent,v=s.eventTarget,M=s.targets;if(f.type==="hold"&&M.length){var C=M[0].eventable.options.holdRepeatInterval;C<=0||(c.holdIntervalHandle=setTimeout(function(){u.pointerEvents.fire({interaction:c,eventTarget:v,type:"hold",pointer:f,event:f},u)},C))}}})},ES=bS;Yl.default=ES;var Kl={};function TS(s){return(0,W.default)(this.events.options,s),this}Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.default=void 0;var CS={id:"pointer-events/interactableTargets",install:function(s){var u=s.Interactable;u.prototype.pointerEvents=TS;var c=u.prototype._backCompatOption;u.prototype._backCompatOption=function(f,v){var M=c.call(this,f,v);return M===this&&(this.events.options[f]=v),M}},listeners:{"pointerEvents:collect-targets":function(s,u){var c=s.targets,f=s.node,v=s.type,M=s.eventTarget;u.interactables.forEachMatch(f,function(C){var w=C.events,T=w.options;w.types[v]&&w.types[v].length&&C.testIgnoreAllow(T,f,M)&&c.push({node:f,eventable:w,props:{interactable:C}})})},"interactable:new":function(s){var u=s.interactable;u.events.getRect=function(c){return u.getRect(c)}},"interactable:set":function(s,u){var c=s.interactable,f=s.options;(0,W.default)(c.events.options,u.pointerEvents.defaults),(0,W.default)(c.events.options,f.pointerEvents||{})}}},PS=CS;Kl.default=PS;var fa={};Object.defineProperty(fa,"__esModule",{value:!0}),fa.default=void 0;var AS={id:"pointer-events",install:function(s){s.usePlugin(ca),s.usePlugin(Yl.default),s.usePlugin(Kl.default)}},DS=AS;fa.default=DS;var Fo={};function Lm(s){var u=s.Interactable;s.actions.phases.reflow=!0,u.prototype.reflow=function(c){return function(f,v,M){for(var C=a.default.string(f.target)?Xe.from(f._context.querySelectorAll(f.target)):[f.target],w=M.window.Promise,T=w?[]:null,I=function(){var G=C[F],ee=f.getRect(G);if(!ee)return"break";var ce=Xe.find(M.interactions.list,function(ke){return ke.interacting()&&ke.interactable===f&&ke.element===G&&ke.prepared.name===v.name}),K=void 0;if(ce)ce.move(),T&&(K=ce._reflowPromise||new w(function(ke){ce._reflowResolve=ke}));else{var ye=(0,fe.tlbrToXywh)(ee),Pe={page:{x:ye.x,y:ye.y},client:{x:ye.x,y:ye.y},timeStamp:M.now()},xe=q.coordsToEvent(Pe);K=function(ke,je,tt,gt,Tt){var ut=ke.interactions.new({pointerType:"reflow"}),wt={interaction:ut,event:Tt,pointer:Tt,eventTarget:tt,phase:"reflow"};ut.interactable=je,ut.element=tt,ut.prevEvent=Tt,ut.updatePointer(Tt,Tt,tt,!0),q.setZeroCoords(ut.coords.delta),(0,ie.copyAction)(ut.prepared,gt),ut._doPhase(wt);var oi=ke.window.Promise,Xi=oi?new oi(function(wf){ut._reflowResolve=wf}):void 0;return ut._reflowPromise=Xi,ut.start(gt,je,tt),ut._interacting?(ut.move(wt),ut.end(Tt)):(ut.stop(),ut._reflowResolve()),ut.removePointer(Tt,Tt),Xi}(M,f,G,v,xe)}T&&T.push(K)},F=0;F<C.length&&I()!=="break";F++);return T&&w.all(T).then(function(){return f})}(this,c,s)}}Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.default=void 0,Fo.install=Lm;var RS={id:"reflow",install:Lm,listeners:{"interactions:stop":function(s,u){var c=s.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),Xe.remove(u.interactions.list,c))}}},LS=RS;Fo.default=LS;var ri={exports:{}};function Sf(s){return Sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Sf(s)}Object.defineProperty(ri.exports,"__esModule",{value:!0}),ri.exports.default=void 0,pn.default.use(mi.default),pn.default.use(fr.default),pn.default.use(fa.default),pn.default.use(Kr.default),pn.default.use(ua.default),pn.default.use(Ht.default),pn.default.use(yt.default),pn.default.use(ni.default),pn.default.use(Fo.default);var IS=pn.default;if(ri.exports.default=IS,Sf(ri)==="object"&&ri)try{ri.exports=pn.default}catch{}pn.default.default=pn.default,yt.default,ni.default,Ht.default,mi.default,Al.default,Kr.default,pn.default,ua.default,fr.default,fa.default,Fo.default,ri=ri.exports;var Jr={exports:{}};function Mf(s){return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Mf(s)}Object.defineProperty(Jr.exports,"__esModule",{value:!0}),Jr.exports.default=void 0;var OS=ri.default;if(Jr.exports.default=OS,Mf(Jr)==="object"&&Jr)try{Jr.exports=ri.default}catch{}return ri.default.default=ri.default,Jr.exports})})(f2);const d2=NS(Uh),{abs:Vp,cos:i_,sin:h2,cosh:aA,sinh:lA,acos:uA,acosh:cA,tan:p2,min:u0,max:r_,round:m2,sqrt:qc,sign:o_,floor:v2,log:fA,exp:dA,PI:fl}=Math,s_=n=>{if(n.length===1)return n[0][0];let e=0;for(let t=0;t<n.length;t++){const i=new Array(n.length-1).fill().map(()=>new Array(n.length-1).fill(0));for(let o=1;o<n.length;o++)for(let l=0;l<n.length;l++)l<t?i[o-1][l]=n[o][l]:l>t&&(i[o-1][l-1]=n[o][l]);const r=t%2===0?1:-1;e+=n[0][t]*r*s_(i)}return e},g2=n=>{const e=s_(n);return Vp(e)<1e-8?0:o_(e)},a_=(n,e,t)=>{let i=0;for(let r=0;r<n.length;r++)i+=n[r]*e[r]*(r===n.length-1&&t||1);return i},y2=(n,e)=>{if(n=n.slice(),e===0){for(let i=0;i<n.length;i++)n[i]/=n[n.length-1];return n}const t=(e===-1&&o_(n[n.length-1])||1)/qc(Vp(a_(n,n,e)));for(let i=0;i<n.length;i++)n[i]*=t;return n},Ad=(n,e)=>{const[t,i]=n,r=i_(e),o=h2(e);n[0]=t*r-i*o,n[1]=t*o+i*r},Dd=(n,e,t)=>{if(t!==0){const i=e/qc(a_(n,n,1)),r=new Array(n.length-1);for(let o=0;o<n.length-1;o++)r[o]=n[o]*i;Ku(n,r,t)}else for(let i=0;i<n.length;i++)n[i]*=1-e},x2=(n,e,t)=>{const i=n.length,r=t;for(let o=0;o<i-1;o++){const l=e[o];if(l!==0){const a=qc(1-r*l*l),d=l;let p=n[o],m=n[i-1];n[o]=a*p+-r*d*m,n[i-1]=d*p+a*m}}},Ku=(n,e,t)=>{if(t===0)for(let i=0;i<e.length;i++)n[i]+=e[i];else x2(n,e,t)},_2=(n,e)=>{const t=n[0].length,i=new Array(t).fill().map(()=>new Array(t).fill(0));i[0][0]=1;for(let r=1;r<t;r++){for(let o=0;o<r;o++){let l=0;for(let a=0;a<o;a++)l+=i[r][a]*i[o][a];i[r][o]=(n[r][o]-l)/i[o][o]}i[r][r]=qc(Vp(1-i[r].slice(0,r).reduce((o,l)=>o+l*l,0)))}return i[i.length-1][i.length-1]=e?i[i.length-1][i.length-1]*e:1,i},S2=(n,e,t)=>{const i=n.length,r=new Array(i);for(let o=0;o<i;o++){let l=0;for(let a=0;a<o;a++)l+=e[o][a]*r[a];r[o]=(n[o]-l)/e[o][o]}return r[r.length-1]*=t||1,y2(r,t)},c0={type:"change"},Rd={type:"start"},f0={type:"end"};class M2 extends Do{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vo.ROTATE,MIDDLE:Vo.DOLLY,RIGHT:Vo.PAN},this.touches={ONE:Go.ROTATE,TWO:Go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",_t),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(c0),i.update(),o=r.NONE},this.update=function(){const V=new X,he=new Co().setFromUnitVectors(e.up,new X(0,1,0)),ne=he.clone().invert(),Ce=new X,Le=new Co,ze=2*Math.PI;return function(){const Ue=i.object.position;V.copy(Ue).sub(i.target),V.applyQuaternion(he),a.setFromVector3(V),i.autoRotate&&o===r.NONE&&R(B()),i.enableDamping?(a.theta+=d.theta*i.dampingFactor,a.phi+=d.phi*i.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let qe=i.minAzimuthAngle,Je=i.maxAzimuthAngle;return isFinite(qe)&&isFinite(Je)&&(qe<-Math.PI?qe+=ze:qe>Math.PI&&(qe-=ze),Je<-Math.PI?Je+=ze:Je>Math.PI&&(Je-=ze),qe<=Je?a.theta=Math.max(qe,Math.min(Je,a.theta)):a.theta=a.theta>(qe+Je)/2?Math.max(qe,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=p,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),V.setFromSpherical(a),V.applyQuaternion(ne),Ue.copy(i.target).add(V),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),m.set(0,0,0)),p=1,g||Ce.distanceToSquared(i.object.position)>l||8*(1-Le.dot(i.object.quaternion))>l?(i.dispatchEvent(c0),Ce.copy(i.object.position),Le.copy(i.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",L),i.domElement.removeEventListener("pointerdown",Qe),i.domElement.removeEventListener("pointercancel",Et),i.domElement.removeEventListener("wheel",at),i.domElement.removeEventListener("pointermove",Xe),i.domElement.removeEventListener("pointerup",Et),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_t),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,a=new l0,d=new l0;let p=1;const m=new X;let g=!1;const y=new Ne,_=new Ne,E=new Ne,A=new Ne,x=new Ne,h=new Ne,S=new Ne,b=new Ne,P=new Ne,D=[],O={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function k(){return Math.pow(.95,i.zoomSpeed)}function R(V){d.theta-=V}function N(V){d.phi-=V}const se=function(){const V=new X;return function(ne,Ce){V.setFromMatrixColumn(Ce,0),V.multiplyScalar(-ne),m.add(V)}}(),ue=function(){const V=new X;return function(ne,Ce){i.screenSpacePanning===!0?V.setFromMatrixColumn(Ce,1):(V.setFromMatrixColumn(Ce,0),V.crossVectors(i.object.up,V)),V.multiplyScalar(ne),m.add(V)}}(),$=function(){const V=new X;return function(ne,Ce){const Le=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;V.copy(ze).sub(i.target);let De=V.length();De*=Math.tan(i.object.fov/2*Math.PI/180),se(2*ne*De/Le.clientHeight,i.object.matrix),ue(2*Ce*De/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(se(ne*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),ue(Ce*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(V){i.object.isPerspectiveCamera?p/=V:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*V)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(V){i.object.isPerspectiveCamera?p*=V:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/V)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function fe(V){y.set(V.clientX,V.clientY)}function me(V){S.set(V.clientX,V.clientY)}function j(V){A.set(V.clientX,V.clientY)}function J(V){_.set(V.clientX,V.clientY),E.subVectors(_,y).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*E.x/he.clientHeight),N(2*Math.PI*E.y/he.clientHeight),y.copy(_),i.update()}function re(V){b.set(V.clientX,V.clientY),P.subVectors(b,S),P.y>0?Z(k()):P.y<0&&W(k()),S.copy(b),i.update()}function Te(V){x.set(V.clientX,V.clientY),h.subVectors(x,A).multiplyScalar(i.panSpeed),$(h.x,h.y),A.copy(x),i.update()}function ve(V){V.deltaY<0?W(k()):V.deltaY>0&&Z(k()),i.update()}function oe(V){let he=!1;switch(V.code){case i.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),he=!0;break}he&&(V.preventDefault(),i.update())}function q(){if(D.length===1)y.set(D[0].pageX,D[0].pageY);else{const V=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);y.set(V,he)}}function we(){if(D.length===1)A.set(D[0].pageX,D[0].pageY);else{const V=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);A.set(V,he)}}function Me(){const V=D[0].pageX-D[1].pageX,he=D[0].pageY-D[1].pageY,ne=Math.sqrt(V*V+he*he);S.set(0,ne)}function te(){i.enableZoom&&Me(),i.enablePan&&we()}function Ke(){i.enableZoom&&Me(),i.enableRotate&&q()}function Ge(V){if(D.length==1)_.set(V.pageX,V.pageY);else{const ne=Ee(V),Ce=.5*(V.pageX+ne.x),Le=.5*(V.pageY+ne.y);_.set(Ce,Le)}E.subVectors(_,y).multiplyScalar(i.rotateSpeed);const he=i.domElement;R(2*Math.PI*E.x/he.clientHeight),N(2*Math.PI*E.y/he.clientHeight),y.copy(_)}function be(V){if(D.length===1)x.set(V.pageX,V.pageY);else{const he=Ee(V),ne=.5*(V.pageX+he.x),Ce=.5*(V.pageY+he.y);x.set(ne,Ce)}h.subVectors(x,A).multiplyScalar(i.panSpeed),$(h.x,h.y),A.copy(x)}function Be(V){const he=Ee(V),ne=V.pageX-he.x,Ce=V.pageY-he.y,Le=Math.sqrt(ne*ne+Ce*Ce);b.set(0,Le),P.set(0,Math.pow(b.y/S.y,i.zoomSpeed)),Z(P.y),S.copy(b)}function dt(V){i.enableZoom&&Be(V),i.enablePan&&be(V)}function Fe(V){i.enableZoom&&Be(V),i.enableRotate&&Ge(V)}function Qe(V){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(V.pointerId),i.domElement.addEventListener("pointermove",Xe),i.domElement.addEventListener("pointerup",Et)),ae(V),V.pointerType==="touch"?jt(V):Nt(V))}function Xe(V){i.enabled!==!1&&(V.pointerType==="touch"?z(V):mt(V))}function Et(V){pe(V),D.length===0&&(i.domElement.releasePointerCapture(V.pointerId),i.domElement.removeEventListener("pointermove",Xe),i.domElement.removeEventListener("pointerup",Et)),i.dispatchEvent(f0),o=r.NONE}function Nt(V){let he;switch(V.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Vo.DOLLY:if(i.enableZoom===!1)return;me(V),o=r.DOLLY;break;case Vo.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(i.enablePan===!1)return;j(V),o=r.PAN}else{if(i.enableRotate===!1)return;fe(V),o=r.ROTATE}break;case Vo.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(i.enableRotate===!1)return;fe(V),o=r.ROTATE}else{if(i.enablePan===!1)return;j(V),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Rd)}function mt(V){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;J(V);break;case r.DOLLY:if(i.enableZoom===!1)return;re(V);break;case r.PAN:if(i.enablePan===!1)return;Te(V);break}}function at(V){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(V.preventDefault(),i.dispatchEvent(Rd),ve(V),i.dispatchEvent(f0))}function _t(V){i.enabled===!1||i.enablePan===!1||oe(V)}function jt(V){switch(_e(V),D.length){case 1:switch(i.touches.ONE){case Go.ROTATE:if(i.enableRotate===!1)return;q(),o=r.TOUCH_ROTATE;break;case Go.PAN:if(i.enablePan===!1)return;we(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Go.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;te(),o=r.TOUCH_DOLLY_PAN;break;case Go.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Rd)}function z(V){switch(_e(V),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ge(V),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(V),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;dt(V),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(V),i.update();break;default:o=r.NONE}}function L(V){i.enabled!==!1&&V.preventDefault()}function ae(V){D.push(V)}function pe(V){delete O[V.pointerId];for(let he=0;he<D.length;he++)if(D[he].pointerId==V.pointerId){D.splice(he,1);return}}function _e(V){let he=O[V.pointerId];he===void 0&&(he=new Ne,O[V.pointerId]=he),he.set(V.pageX,V.pageY)}function Ee(V){const he=V.pointerId===D[0].pointerId?D[1]:D[0];return O[he.pointerId]}i.domElement.addEventListener("contextmenu",L),i.domElement.addEventListener("pointerdown",Qe),i.domElement.addEventListener("pointercancel",Et),i.domElement.addEventListener("wheel",at,{passive:!1}),this.update()}}class Wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const w2=new Wc(-1,1,1,-1,0,1),Gp=new Di;Gp.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3));Gp.setAttribute("uv",new Ln([0,2,0,0,2,0],2));class $c{constructor(e){this._mesh=new Bn(Gp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const b2={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class E2 extends Wr{constructor(e,t,i){super(),this.scene=e,this.camera=t;const r=i.focus!==void 0?i.focus:1,o=i.aspect!==void 0?i.aspect:t.aspect,l=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new en(1,1,{minFilter:Qt,magFilter:Qt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Fr,this.materialDepth.depthPacking=_l,this.materialDepth.blending=un;const d=b2,p=zn.clone(d.uniforms);p.tDepth.value=this.renderTargetDepth.texture,p.focus.value=r,p.aspect.value=o,p.aperture.value=l,p.maxblur.value=a,p.nearClip.value=t.near,p.farClip.value=t.far,this.materialBokeh=new Lt({defines:Object.assign({},d.defines),uniforms:p,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=p,this.needsSwap=!1,this.fsQuad=new $c(this.materialBokeh),this._oldClearColor=new Ze}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,t){this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Va={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class kh extends Wr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zn.clone(e.uniforms),this.material=new Lt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $c(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class d0 extends Wr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class T2 extends Wr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class C2{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Ne);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kh(Va),this.clock=new u2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const a=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}d0!==void 0&&(l instanceof d0?i=!0:l instanceof T2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class P2 extends Wr{constructor(e,t,i,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Uu={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ne(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Gt},cameraInverseProjectionMatrix:{value:new Gt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},bc={createSampleWeights:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(A2(i,e));return t},createSampleOffsets:function(n,e){const t=[];for(let i=0;i<=n;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(n,e,t,i){n.defines.KERNEL_RADIUS=e,n.uniforms.sampleUvOffsets.value=bc.createSampleOffsets(e,i),n.uniforms.sampleWeights.value=bc.createSampleWeights(e,t),n.needsUpdate=!0}};function A2(n,e){return Math.exp(-(n*n)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Ld={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class zh extends Wr{constructor(e,t,i=!1,r=!1,o=new Ne(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Ze,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ne(o.x,o.y),this.saoRenderTarget=new en(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new en(this.resolution.x,this.resolution.y,{minFilter:Qt,magFilter:Qt}),this.depthRenderTarget=this.normalRenderTarget.clone();let l;this.supportsDepthTextureExtension&&(l=new Zx,l.type=Np,this.beautyRenderTarget.depthTexture=l,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new Fr,this.depthMaterial.depthPacking=_l,this.depthMaterial.blending=un,this.normalMaterial=new e_,this.normalMaterial.blending=un,this.saoMaterial=new Lt({defines:Object.assign({},Uu.defines),fragmentShader:Uu.fragmentShader,vertexShader:Uu.vertexShader,uniforms:zn.clone(Uu.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=un,this.vBlurMaterial=new Lt({uniforms:zn.clone(_r.uniforms),defines:Object.assign({},_r.defines),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=un,this.hBlurMaterial=new Lt({uniforms:zn.clone(_r.uniforms),defines:Object.assign({},_r.defines),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?l:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=un,this.materialCopy=new Lt({uniforms:zn.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:un}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Sc,this.materialCopy.blendSrc=Rx,this.materialCopy.blendDst=Dh,this.materialCopy.blendEquation=Er,this.materialCopy.blendSrcAlpha=Dx,this.materialCopy.blendDstAlpha=Dh,this.materialCopy.blendEquationAlpha=Er,this.depthCopy=new Lt({uniforms:zn.clone(Ld.uniforms),vertexShader:Ld.vertexShader,fragmentShader:Ld.fragmentShader,blending:un}),this.fsQuad=new $c(null)}render(e,t,i){if(this.renderToScreen&&(this.materialCopy.blending=un,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(bc.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(0,1)),bc.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ne(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let l=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,l=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?l.blending=Sc:l.blending=un,this.renderPass(e,l,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,t,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}renderOverride(e,t,i,r,o){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,o=t.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}setSize(e,t){this.beautyRenderTarget.setSize(e,t),this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.depthRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}zh.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const D2={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gs extends Wr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new en(o,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const y=new en(o,l);y.texture.name="UnrealBloomPass.h"+g,y.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(y);const _=new en(o,l);_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),o=Math.round(o/2),l=Math.round(l/2)}const a=D2;this.highPassUniforms=zn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];o=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new Ne(o,l),o=Math.round(o/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=Va;this.copyUniforms=zn.clone(m.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Lt({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:Ah,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new yo,this.fsQuad=new $c(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Ne(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[d].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}getSeperableBlurMaterial(e){return new Lt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gs.BlurDirectionX=new Ne(1,0);Gs.BlurDirectionY=new Ne(0,1);const R2={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},L2={uniforms:{tDiffuse:{value:null},resolution:{value:new Ne}},vertexShader:`

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

		}`},I2=Math.PI/180;function O2(n){return n*I2}const l_=["stereographic","orthographic","klein","inverted","jemisphere","upperhalf"],Ni=new Ze,Hp=new i2,qs=Hp.load("Carbon.png");qs.encoding=bt;qs.wrapS=bo;qs.wrapT=bo;qs.repeat.x=10;qs.repeat.y=10;const Wp=Hp.load("Carbon_Normal.png");Wp.wrapS=bo;Wp.wrapT=bo;const Ga=Hp.load("ocean.jpg");Ga.encoding=bt;Ga.mapping=Mc;const $s={neon:{background:0,fx:["bloom"],shadow:!1,material:new yo,lights:[],color:({word:n})=>Ni.setHSL(n.length*.17%1,.5,.5)},museum:{background:12303291,env:Ga,shadow:!0,ground:"plane",material:new n0({roughness:.5,reflectivity:.25,clearcoat:1,clearcoatRoughness:.1,map:qs,normalMap:Wp}),lights:[(()=>{const n=new Cd(16777215,.2);return n.position.set(0,4,-6),n})(),(()=>{const n=new Cd(16777215,.2);return n.position.set(8,7,0),n})(),(()=>{const n=new Cd(16777215,.2);return n.position.set(-4,6,2),n})(),new Ea(16777215,.4)],cameraLights:[(()=>{const n=new os(16777215,2.5,5,5);return n.shadow=null,n})()],color:()=>Ni.set(16777215)},projection:{background:16777215,ground:"sphere",shadow:!0,material:new xs({transparent:!0,opacity:.75,blending:Sc}),lights:[new os],color:({word:n})=>Ni.setHSL(n.length*.17%1,.5,.5)},bw:{background:0,fx:["sobel"],shadow:!1,material:new xs,lights:[new Ea(13421772,.4)],cameraLights:[new os(16777215,1)],color:()=>Ni.set(16776960)},colorful:{background:16777215,shadow:!1,material:new xs,lights:[new Ea(16777215,1)],cameraLights:[new os(16777215,.5)],color:({word:n})=>Ni.setHSL(n.length*.03%1,.5,.5)},bokeh:{background:16777215,fx:["bokeh"],shadow:!1,material:new xs,lights:[new Ea(16777215,.5)],cameraLights:[new os(16777215,1)],color:({word:n})=>Ni.setHSL(n.length*.17%1,.7,.5)},pure:{background:16777215,fx:["sao"],shadow:!1,material:new JP,lights:[new Ea(0,.5)],cameraLights:[new os(16777215,1)],color:({word:n})=>Ni.setHSL(n.length*.03%1,.75,.7)},transcendent:{background:16777215,fx:["godray"],shadow:!1,material:new yo,color:()=>Ni.set(0)},glass:{background:Ga,env:Ga,shadow:!1,material:new n0({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new l2,new r2],color:()=>Ni.set(11184810)},wireframe:{background:0,shadow:!1,material:new yo({wireframe:!0}),lights:[],color:({word:n})=>Ni.setHSL(n.length*.17%1,.5,.5)}},N2={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},U2={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new X}},vertexShader:`

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

		}`},k2={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},z2={uniforms:{vSunPositionScreenSpace:{value:new X},fAspect:{value:1},sunColor:{value:new Ze(16772608)},bgColor:{value:new Ze(0)}},vertexShader:`

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

		}`};class F2 extends Wr{constructor(e,t,i={}){super(),this.scene=e,this.camera=t,this.orthoScene=new Jx,this.orthoCamera=new Wc(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=i.background||1297,this.sunColor=i.sunColor||16776960,this.multiplier=i.multiplier||.25,this.clipPosition=new Rt,this.sunPosition=i.sunPosition||new X(0,1e3,1e3),this.screenSpacePosition=new X,this.rtTextureDepth=new en(1,1),this.rtTextureDepthMask=new en(1,1),this.rtTextureGodRays1=new en(1,1),this.rtTextureGodRays2=new en(1,1),this.materialDepth=new Fr;const r=N2;this.godrayMaskUniforms=zn.clone(r.uniforms),this.materialGodraysDepthMask=new Lt({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=U2;this.godrayGenUniforms=zn.clone(o.uniforms),this.materialGodraysGenerate=new Lt({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const l=k2;this.godrayCombineUniforms=zn.clone(l.uniforms),this.materialGodraysCombine=new Lt({uniforms:this.godrayCombineUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader});const a=z2;this.godraysFakeSunUniforms=zn.clone(a.uniforms),this.materialGodraysFakeSun=new Lt({uniforms:this.godraysFakeSunUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Bn(new El(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,t,i,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=t,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,t,i){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(i),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=i.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(t),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,t){this.rtTextureDepth.setSize(e,t),this.rtTextureDepthMask.setSize(e,t);const i=e*this.multiplier,r=t*this.multiplier;this.rtTextureGodRays1.setSize(i,r),this.rtTextureGodRays2.setSize(i,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var u_=`/* BEGIN HEADER */
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
}`,B2=`/* BEGIN INCLUDE */

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
/* END INCLUDE */`;const V2=u_.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],h0=u_.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],G2=B2.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],ci=(n,e)=>{n=n.clone(),n.vertexColors=![Fr,Lt,e_,cl].find(t=>n instanceof t),n._rt=e,n.uniforms={...n.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let t=4;t<=e.dimensions;t++)n.uniforms[`fov${t}`]={value:90};return n.onBeforeCompile=t=>{const{dimensions:i,projection:r}=n._rt,o=[`#define DIMENSIONS ${i}`,`#define PROJECTION ${l_.indexOf(r)}`];console.log(r),Object.assign(t.uniforms,n.uniforms),n instanceof yo?t.vertexShader=t.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):n instanceof Fr||n instanceof cl?t.vertexShader=t.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):n instanceof Lt&&(t.vertexShader=t.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",h0+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),t.vertexShader=[...o,V2,G2,t.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",h0)].join(`
`)},n.customProgramCacheKey=()=>`hypermath_${n.constructor.name}_${n._rt.dimensions}_${n._rt.projection}`,n},H2=()=>{const n=new Qx;n.autoClear=!1,n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);const e=new kn(90,window.innerWidth/window.innerHeight,.01,100);e.position.set(0,0,-1),e.up.set(0,1,0),e.lookAt(0,0,0),e.zoom=Math.min(1,window.innerWidth/window.innerHeight),e.updateProjectionMatrix();const t=new Jx;e.updateProjectionMatrix(),t.add(e);const i=new M2(e,n.domElement);i.target.set(0,0,0),i.minDistance=0,i.maxDistance=100,i.addEventListener("change",()=>r.render()),i.update(),i.enabled=!1,n.domElement.addEventListener("dblclick",()=>{i.position0.set(0,0,i.position0.z===-1?-.25:-1,0,0),i.reset()});const r=new C2(n);r.setPixelRatio(window.devicePixelRatio);const o=new P2(t,e);return r.addPass(o),{composer:r,camera:e,scene:t,orbitControls:i}},c_=n=>{let e=n.scene.getObjectByName("instanced-vertex");if(e)return console.warn("Vertex already exists, skipping init"),e;const t=$s[n.ambiance],{dimensions:i,projection:r}=n,o=new Xc(1e-7,32,32);o.attributes.position.array.fill(0);const l=new n_().copy(o),a=i>4?9:i;l.setAttribute("instancePosition",new Ds(new Float32Array(n.maxVertices*a),a)),l.setAttribute("instanceTarget",new Ds(new Float32Array(n.maxVertices*a),a)),l.setAttribute("instanceColor",new Ds(new Float32Array(n.maxVertices*3),3));const d=new Bn(l,ci(t.material,n));return l.attributes.instanceTarget.array.fill(NaN),d.geometry.instanceCount=0,d.frustumCulled=!1,d.customDepthMaterial=ci(new Fr({depthPacking:_l}),n),d.customDistanceMaterial=ci(new cl,n),d.castShadow=t.shadow,d.name="instanced-vertex",d.visible=n.showVertices,n.scene.add(d),d},f_=n=>{let e=n.scene.getObjectByName("instanced-edge");if(e)return console.warn("Edge already exists, skipping init"),e;const t=$s[n.ambiance],{dimensions:i,curve:r,segments:o,projection:l}=n,a=new Fp(0,0,1,8,r?o:1,!0),d=new n_().copy(a),p=i>4?9:i;d.setAttribute("instancePosition",new Ds(new Float32Array(n.maxEdges*p),p)),d.setAttribute("instanceTarget",new Ds(new Float32Array(n.maxEdges*p),p)),d.setAttribute("instanceColor",new Ds(new Float32Array(n.maxEdges*3),3));const m=new Bn(d,ci(t.material,n));return m.geometry.instanceCount=0,m.frustumCulled=!1,m.customDepthMaterial=ci(new Fr({depthPacking:_l}),n),m.customDistanceMaterial=ci(new cl,n),m.castShadow=t.shadow,m.name="instanced-edge",m.visible=n.showEdges,n.scene.add(m),m},p0=n=>{const e=n.scene.getObjectByName("instanced-vertex");n.scene.remove(e),e.geometry.dispose(),e.material.dispose();const t=c_(n);return dl({...n,instancedVertex:t}),t},m0=n=>{const e=n.scene.getObjectByName("instanced-edge");n.scene.remove(e),e.geometry.dispose(),e.material.dispose();const t=f_(n);return dl({...n,instancedEdge:t}),t},W2=(n,e=null)=>{const t=$s[n.ambiance],i=n.scene.getObjectByName("instanced-vertex"),{dimensions:r}=n;let o=e?e[0]:0,l=e?e[1]:n.vertices.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const p=n.vertices[d],m=i.geometry.attributes.instancePosition.array;for(let _=0;_<r;_++)m[d*a+_]=p.vertex[_];const g=i.geometry.attributes.instanceColor.array,y=t.color(p,"vertex");g[d*3+0]=y.r,g[d*3+1]=y.g,g[d*3+2]=y.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},j2=(n,e=null)=>{const t=$s[n.ambiance],i=n.scene.getObjectByName("instanced-edge"),{dimensions:r}=n;let o=e?e[0]:0,l=e?e[1]:n.edges.length;const a=r>4?9:r;i.geometry.instanceCount=l;for(let d=o;d<l;d++){const p=n.edges[d],m=i.geometry.attributes.instancePosition.array;for(let E=0;E<r;E++)m[d*a+E]=p.start[E];const g=i.geometry.attributes.instanceTarget.array;for(let E=0;E<r;E++)g[d*a+E]=p.end[E];const y=i.geometry.attributes.instanceColor.array,_=t.color(p,"edge");y[d*3+0]=_.r,y[d*3+1]=_.g,y[d*3+2]=_.b}i.geometry.attributes.instancePosition.needsUpdate=!0,i.geometry.attributes.instanceTarget.needsUpdate=!0,i.geometry.attributes.instanceColor.needsUpdate=!0},v0=(n,e)=>{const t=n.scene.getObjectByName(`instanced-${e}`);t.visible=n[e==="vertex"?"showVertices":"showEdges"]},_s=(n,e=null)=>{if(n.currentOrder===0||e===null&&n.ranges.length===0||e!==null&&e>=n.ranges.length)return;const t=e!==null?n.ranges[e]:{vertices:[n.ranges[0].vertices[0],n.ranges[n.currentOrder-1].vertices[1]],edges:[n.ranges[0].edges[0],n.ranges[n.currentOrder-1].edges[1]]};n.scene.getObjectByName("instanced-vertex").visible&&W2(n,t.vertices),n.scene.getObjectByName("instanced-edge").visible&&j2(n,t.edges),n.composer.render(),document.title=`Honeyball^${n.dimensions} ${n.currentOrder<n.order?`(${n.currentOrder}/${n.order})…`:""}- ${n.vertices.length} vertices, ${n.edges.length} edges`},X2=(n,e,t)=>{e.fov=t,e.updateProjectionMatrix(),n.render()},q2=(n,e,t)=>{const i=n.renderer.getDrawingBufferSize(new Ne),r=new en(i.width,i.height,{samples:e?t:0});n.reset(r),n.render()},$2=n=>{const e=$s[n.ambiance],{scene:t,composer:i,camera:r}=n,o=n.scene.getObjectByName("instanced-vertex"),l=n.scene.getObjectByName("instanced-edge");o.material=ci(e.material,n),l.material=ci(e.material,n),e.env?t.environment=e.env:t.environment=null,typeof e.background!="number"?t.background=e.background:(t.background=null,i.renderer.setClearColor(new Ze(e.background),1));const a=[];t.traverse(g=>{g.isLight&&a.push(g)}),a.forEach(g=>{g.parent.remove(g)});let d=t.getObjectByName("ground");d&&(d.geometry.dispose(),d.material.dispose(),t.remove(d)),e.shadow&&(i.renderer.shadowMap.type=Op,e.ground==="sphere"?d=new Bn(new Xc(20,32,32),new xs({color:16777215,side:Rn,depthWrite:!1})):e.ground==="plane"&&(d=new Bn(new El(1e3,1e3),new xs({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),d.rotation.x=-Math.PI/2,d.position.y=-3),d.name="ground",d.receiveShadow=!0,t.add(d)),i.renderer.shadowMap.enabled=e.shadow,i.renderer.shadowMap.type=Cx,o.castShadow=e.shadow,l.castShadow=e.shadow;const p=e.shadow?g=>{g.shadow&&(g.castShadow=!0,g.shadow.mapSize.width=2048,g.shadow.mapSize.height=2048,g.shadow.camera.near=r.near,g.shadow.camera.far=r.far,g.shadow.camera.fov=r.fov)}:()=>{};(e.lights||[]).forEach(g=>{p(g),t.add(g)}),(e.cameraLights||[]).forEach(g=>{p(g),r.add(g)});const m=e.fx||["copy"];i.renderer.toneMapping=m.includes("bloom")?Lx:Gi,i.renderer.toneMappingExposure=m.includes("bloom")?1.5:1,i.passes.slice(1).forEach(g=>{i.removePass(g),g.dispose()}),m.forEach(g=>{if(g==="copy")i.addPass(i.copyPass);else if(g==="sao"){const y=new zh(t,r,!1,!0);y.depthMaterial=ci(y.depthMaterial,n),y.normalMaterial=ci(y.normalMaterial,n),y.params.output=zh.OUTPUT.Default,y.params.saoIntensity=.1,y.params.saoScale=10,y.params.saoKernelRadius=10,y.params.saoMinResolution=0,y.params.saoBlur=!0,y.params.saoBlurRadius=8,y.params.saoBlurStdDev=4,y.params.saoBlurDepthCutoff=.01,i.addPass(y)}else if(g==="bokeh"){const y=new E2(t,r,{focus:.5,aperture:.005,maxblur:.005});y.materialDepth=ci(y.materialDepth,n),i.addPass(y)}else if(g==="sobel"){const y=new kh(R2);i.addPass(y);const _=new kh(L2);_.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,_.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,i.addPass(_)}else if(g==="bloom"){const y=new Gs(new Ne(window.innerWidth,window.innerHeight),1.5,0,0);i.addPass(y)}else if(g==="godray"){const y=new F2(t,r);y.materialDepth=ci(y.materialDepth,n),i.addPass(y)}}),dl(n),i.render()},dl=n=>{const{composer:e,scene:t,dimensions:i,curvature:r,projection:o,vertexThickness:l,edgeThickness:a}=n,d=n.curve?n.segments:1,p=t.getObjectByName("instanced-vertex"),m=t.getObjectByName("instanced-edge"),g=y=>{if(y!=null&&y._rt){y.uniforms.curvature.value=r,y.uniforms.vertexThickness.value=l,y.uniforms.edgeThickness.value=a,y.needsUpdate=i!==y._rt.dimensions||o!==y._rt.projection,y._rt=n,y.uniforms.segments.value=d;for(let _=4;_<=i;_++)y.uniforms[`fov${_}`]||(y.uniforms[`fov${_}`]={value:1}),y.uniforms[`fov${_}`].value=p2(O2(n[`fov${_}`])*.5)}};g(p.material),g(m.material),e.passes.forEach(y=>Object.values(y).filter(_=>_==null?void 0:_.isMaterial).forEach(_=>g(_))),g(p.customDepthMaterial),g(p.customDistanceMaterial),g(m.customDepthMaterial),g(m.customDistanceMaterial)},ao=(n,e,t,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Ku(o,n,i)}for(let r=0;r<t.length;r++){const{start:o,end:l}=t[r];Ku(o,n,i),Ku(l,n,i)}},hl=(n,e,t,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Ad(o,n)}for(let r=0;r<t.length;r++){const{start:o,end:l}=t[r];Ad(o,n),Ad(l,n)}},pl=(n,e,t,i)=>{for(let r=0;r<e.length;r++){const{vertex:o}=e[r];Dd(o,n,i)}for(let r=0;r<t.length;r++){const{start:o,end:l}=t[r];Dd(o,n,i),Dd(l,n,i)}},Y2=(n,e,t,i,r,o)=>{const l=window.innerWidth/2,a=window.innerHeight/2,d=Math.min(l,a)*.9;if(n.ctrlKey)hl(-n.dx/(2*d),t,i),pl(-n.dy/(2*d),t,i,r);else{const p=-n.dx/l,m=-n.dy/a,g=new Array(e).fill(0);!o&&n.shiftKey?o=1:!o&&n.altKey?o=2:!o&&n.ctrKey?o=3:!o&&n.metaKey&&(o=4),g[o*2]=p,g[o*2+1]=m,ao(g,t,i,r)}},K2=(n,e,t,i,r)=>{hl(fl*n.da/180,e,t),pl(n.ds,e,t,i)},Z2=(n,e,t,i)=>{const{code:r}=n;if(n.target!==document.body)return;const o=.01;if(r==="ArrowLeft"||r==="KeyA")ao([-o,0,0,0],e,t,i);else if(r==="ArrowRight"||r==="KeyD")ao([o,0,0,0],e,t,i);else if(r==="ArrowUp"||r==="KeyW")ao([0,0,-o,0],e,t,i);else if(r==="ArrowDown"||r==="KeyS")ao([0,0,o,0],e,t,i);else if(r==="PageUp"||r==="KeyQ")ao([0,-o,0,0],e,t,i);else if(r==="PageDown"||r==="KeyE")ao([0,o,0,0],e,t,i);else if(r==="Digit1")hl(-(fl*5)/180,e,t);else if(r==="Digit3")hl(fl*5/180,e,t);else if(r==="KeyZ")pl(-o,e,t,i);else if(r==="KeyC")pl(o,e,t,i);else return;return!0},Q2=(n,e,t,i,r)=>{const o=window.innerWidth/2,l=window.innerHeight/2,a=Math.min(o,l)*.9,d=10*(n.deltaMode===1?n.deltaY*10:n.deltaY)/a;n.shiftKey===!!r?hl(fl*d/180,e,t):pl(-d/100,e,t,i)},J2=n=>{st.useLayoutEffect(()=>{const e=d2(n.composer.renderer.domElement).draggable({listeners:{move:t=>{n.controls==="free"&&(Y2(t,n.dimensions,n.vertices,n.edges,n.curvature,n.controlsShift),_s(n))}}}).gesturable({onmove:t=>{n.controls==="free"&&(K2(t,n.vertices,n.edges,n.curvature,n.controlsShift),_s(n))}});return()=>{e.unset()}},[n]),st.useEffect(()=>{const e=t=>{n.controls!=="orbit"&&(Q2(t,n.vertices,n.edges,n.curvature,n.controlsShift),_s(n))};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e)},[n]),st.useEffect(()=>{const e=t=>{Z2(t,n.vertices,n.edges,n.curvature,n.controlsShift)&&_s(n)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n])},Id=(n,e)=>(n=n||0,e||(e=n,n=0),new Array(e-n).fill().map((t,i)=>i+n));function eA(){return new Worker(""+new URL("tiling.worker-388c7fc5.js",import.meta.url).href)}function tA(){return new Worker(""+new URL("group.worker-e23f2590.js",import.meta.url).href)}let d_=class h_{constructor(e,t){this.workerClass=t,this.name=e,this.init()}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=h_.uuid4(),this.processing++,this.worker.postMessage(e),new Promise((t,i)=>{const r=l=>{if(l.data.uuid===e.uuid){if(this.processing--,this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),l.data.error){i(l.data.error);return}t(l.data)}},o=l=>{this.worker.removeEventListener("message",r),this.worker.removeEventListener("error",o),!(this.processing<=0)&&(this.processing--,this.processing=r_(0,this.processing),console.error(`Can't call web worker ${this.name}`,l))};this.worker.addEventListener("message",r),this.worker.addEventListener("error",o)})}};const g0=new d_("tiler",eA),nA=new d_("grouper",tA);function iA({gl:n,params:e,updateParams:t}){var A;const[i,r]=st.useState(()=>{const x={currentOrder:0,rules:null,curvature:0,mirrorsPlanes:null,rootVertex:null,words:null,edgeHashes:null,vertexHashes:null,nextWords:null,vertices:null,edges:null,ranges:null,maxVertices:5e3,maxEdges:5e4,...e,...n};return c_(x),f_(x),x}),[o,l]=st.useState(!1),[a,d]=st.useState(),[p,m]=st.useState(!0),g=st.useCallback(()=>m(x=>!x),[]),y=st.useCallback(()=>{let x,h;const S=v2(e.dimensions/2)-1;e.controls==="orbit"?(x="free",h=0):e.controlsShift>=S?(x="orbit",h=0):(x="free",h=e.controlsShift+1),t({controls:x,controlsShift:h})},[e.controls,e.controlsShift,e.dimensions,t]);st.useEffect(()=>{r(x=>({...x,controls:e.controls,controlsShift:e.controlsShift})),i.orbitControls.enabled=e.controls==="orbit"},[i.orbitControls,e.controls,e.controlsShift]),st.useEffect(()=>{r(x=>{const h={...x,ambiance:e.ambiance};return $2(h),h})},[e.ambiance]),st.useEffect(()=>{r(x=>{if(e.showVertices&&!e.vertexThickness||e.showEdges&&!e.edgeThickness)return x;const h={...x,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection};return dl(h),h.composer.render(),h})},[e.showVertices,e.showEdges,e.vertexThickness,e.edgeThickness,e.projection,i.curvature]),st.useEffect(()=>{q2(i.composer,e.msaa,e.msaaSamples)},[e.msaa,e.msaaSamples,i.composer]),st.useEffect(()=>{X2(i.composer,i.camera,e.fov3)},[e.fov3,i.camera,i.composer]),st.useEffect(()=>{r(x=>{const h={...x,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9};return dl(h),h.composer.render(),h})},[e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9]),st.useEffect(()=>{r(x=>{const h={...x,showVertices:e.showVertices,showEdges:e.showEdges};return v0(h,"vertex"),v0(h,"edge"),h})},[e.showVertices,e.showEdges]),st.useEffect(()=>{r(x=>e.curve&&!e.segments?x:{...x,curve:e.curve,segments:e.segments})},[e.curve,e.segments]),st.useEffect(()=>{r(x=>!e.dimensions||e.coxeter.find(h=>h.find(S=>!S))||e.stellation.find(h=>h.find(S=>!S))?x:{...x,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellated:e.stellated,stellation:e.stellation,currentOrder:0,rules:null,mirrorsPlanes:null,rootVertex:null,words:null,edgeHashes:null,vertexHashes:null,nextWords:null,vertices:null,edges:null,ranges:null})},[e.dimensions,e.coxeter,e.mirrors,e.stellated,e.stellation]),st.useEffect(()=>{p0(i),m0(i)},[i.dimensions,i.curve,i.segments]),st.useEffect(()=>{g0.kill(),l(!1)},[i.dimensions,i.coxeter,i.stellated,i.mirrors,i.stellation]),st.useEffect(()=>{r(x=>e.order?{...x,order:e.order}:x)},[e.order]),st.useEffect(()=>{r(x=>x.order<x.currentOrder?{...x,currentOrder:x.order}:x)},[i.order,i.currentOrder]),st.useEffect(()=>{var x;if(!(i.order<=i.currentOrder)){if((x=i.ranges)!=null&&x[i.order]){r(h=>({...h,currentOrder:h.order}));return}(async()=>{d(null),l(!0);const h={};if(i.currentOrder===0){console.log("Reiniting");try{h.rules=await nA.process({dimensions:i.dimensions,coxeter:i.coxeter})}catch(b){console.warn(b)}const S=i.coxeter.map((b,P)=>b.map((D,O)=>-i_((i.stellated?i.stellation[P][O]:1)*fl/D)));h.curvature=g2(S),h.mirrorsPlanes=_2(S,h.curvature),h.rootVertex=S2(i.mirrors,h.mirrorsPlanes,h.curvature),h.words=new Map([["",h.rootVertex]]),h.edgeHashes=new Set,h.vertexHashes=new Set,h.nextWords=[""],h.vertices=[],h.edges=[],h.ranges=[]}try{const S={...i,...h},b=await g0.process({currentOrder:S.currentOrder,curvature:S.curvature,vertices:S.vertices,edges:S.edges,ranges:S.ranges,words:S.words,edgeHashes:S.edgeHashes,vertexHashes:S.vertexHashes,nextWords:S.nextWords,rules:S.rules,mirrorsPlanes:S.mirrorsPlanes,rootVertex:S.rootVertex,dimensions:S.dimensions});r(P=>({...P,...b}))}catch(S){d(S),console.warn(S),r(b=>({...b,currentOrder:b.order}))}finally{l(!1)}})()}},[i.order,i.currentOrder,i.dimensions,i.coxeter,i.mirrors,i.stellated,i.stellation]),st.useEffect(()=>{r(x=>{var h;if(((h=x.vertices)==null?void 0:h.length)>x.maxVertices){console.warn(`Extending vertex buffer to ${x.vertices.length}`);const S={...x,maxVertices:x.vertices.length};return p0(S),S}return x})},[i.vertices]),st.useEffect(()=>{r(x=>{var h;if(((h=x.edges)==null?void 0:h.length)>x.maxEdges){console.warn(`Extending edge buffer to ${x.edges.length}`);const S={...x,maxEdges:x.edges.length};return m0(S),S}return x})},[i.edges]),st.useEffect(()=>{_s(i,i.currentOrder-1)},[i.currentOrder,i.vertices,i.edges,i.ranges,i.showVertices,i.showEdges]),st.useEffect(()=>{_s(i)},[i.ambiance,i.showVertices,i.showEdges,i.maxVertices,i.maxEdges,i.curve,i.segments]),st.useEffect(()=>{const x=()=>{c2(i)};return window.addEventListener("resize",x),window.addEventListener("orientationchange",x),()=>{window.removeEventListener("resize",x),window.removeEventListener("orientationchange",x)}},[i]),J2(i);const _=st.useCallback(()=>{const x={extended:!e.extended};if(e.extended)for(let h=0;h<e.dimensions;h++)for(let S=0;S<h-1;S++)e.coxeter[h][S]=2,e.coxeter[S][h]=2;t(x)},[e.extended,e.dimensions,e.coxeter,t]),E=st.useCallback(x=>{let{name:h,checked:S,type:b,value:P}=x.target;b==="checkbox"?P=S:b==="number"&&P&&!isNaN(P)&&(P=+P,x.target.min&&(P=r_(P,+x.target.min)),x.target.max&&(P=u0(P,+x.target.max)),x.target.step&&(P=m2(P/+x.target.step)*+x.target.step));const D={};if(h==="dimensions"&&P){D.coxeter=new Array(P).fill().map(()=>new Array(P).fill(2)),D.stellation=new Array(P).fill().map(()=>new Array(P).fill(1)),D.mirrors=new Array(P).fill(0);for(let O=0;O<u0(e.coxeter.length,P);O++){for(let B=0;B<O;B++)D.coxeter[O][B]=e.coxeter[O][B],D.coxeter[B][O]=e.coxeter[B][O];D.mirrors[O]=e.mirrors[O]}for(let O=0;O<P;O++)D.coxeter[O][O]=-1;for(let O=4;O<=P;O++)e[`fov${O}`]||(D[`fov${O}`]=O===4?90:45)}if(h.startsWith("coxeter")){const[O,B]=h.split("-").slice(1).map(R=>+R),k=e.coxeter.map(R=>R.slice());k[O][B]=P,k[B][O]=P,h="coxeter",P=k}if(h.startsWith("div")){const[O,B]=h.split("-").slice(1).map(R=>+R),k=e.stellation.map(R=>R.slice());k[O][B]=P,k[B][O]=P,h="stellation",P=k}if(h.startsWith("mirror")){const[O]=h.split("-").slice(1).map(B=>+B);h="mirrors",P=e.mirrors.map((B,k)=>(k===O?P:B)?1:0),P.reduce((B,k)=>B+k,0)===0&&(P[0]=1)}D[h]=P,t(D)},[e,t]);return He.jsxs("div",{className:[a?"error":"",(A=i.rules)!=null&&A.warn?"warning":""].filter(x=>x).join(" "),title:a,children:[He.jsxs("button",{className:"control-indicator",onClick:y,children:[i.controls==="orbit"?"⇹":"↭",i.controls==="free"?He.jsx("sup",{children:i.controlsShift+1}):null]}),He.jsxs("button",{className:`space-indicator${o?" processing":""}`,onClick:g,children:[i.curvature===0?"𝔼":i.curvature>0?"𝕊":"ℍ",He.jsx("sup",{children:i.dimensions-1}),i.currentOrder<i.order?He.jsxs("sub",{children:[i.currentOrder,"/",i.order]}):null]}),p&&He.jsxs("aside",{className:"controls",children:[He.jsxs("label",{children:["Order",He.jsx("input",{type:"number",name:"order",min:"1",step:"1",value:e.order,onChange:E})]}),He.jsxs("label",{children:["Segments",He.jsx("input",{type:"checkbox",name:"curve",checked:e.curve,onChange:E}),e.curve?He.jsx("input",{type:"number",name:"segments",min:"1",step:"1",value:e.segments,onChange:E}):null]}),He.jsxs("label",{children:["Dimensions",He.jsx("input",{type:"number",name:"dimensions",min:"2",max:"9",step:"1",value:e.dimensions,onChange:E})]}),He.jsxs("label",{children:["Projection",He.jsx("select",{name:"projection",value:e.projection,onChange:E,children:l_.map(x=>He.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,h=>h.toUpperCase())},x))})]}),He.jsxs("label",{children:["Vertices",He.jsx("input",{type:"checkbox",name:"showVertices",checked:e.showVertices,onChange:E}),e.showVertices?He.jsx("input",{type:"number",name:"vertexThickness",min:"0",step:"1",value:e.vertexThickness,onChange:E}):null]}),He.jsxs("label",{children:["Edges",He.jsx("input",{type:"checkbox",name:"showEdges",checked:e.showEdges,onChange:E}),e.showEdges?He.jsx("input",{type:"number",name:"edgeThickness",min:"0",step:"1",value:e.edgeThickness,onChange:E}):null]}),He.jsxs("label",{children:[He.jsx("input",{type:"checkbox",name:"stellated",checked:e.stellated,onChange:E}),"Stellated"]}),He.jsxs("label",{children:["Ambiance",He.jsx("select",{name:"ambiance",value:e.ambiance,onChange:E,children:Object.keys($s).map(x=>He.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,h=>h.toUpperCase())},x))})]})]}),p&&He.jsxs("aside",{className:"view",children:[He.jsxs("label",{children:["MSAA",He.jsx("input",{type:"checkbox",name:"msaa",checked:e.msaa,onChange:E}),e.msaa?He.jsx("input",{type:"number",name:"msaaSamples",min:"0",step:"1",value:e.msaaSamples,onChange:E}):null]}),He.jsxs("label",{children:["FOV3",He.jsx("input",{type:"number",name:"fov3",min:"0",step:"1",value:e.fov3,onChange:E})]}),e.dimensions>3?Id(e.dimensions-3).map(x=>He.jsxs("label",{children:["FOV",x+4,He.jsx("input",{type:"number",name:`fov${x+4}`,step:"1",value:e[`fov${x+4}`],onChange:E})]},x)):null]}),p&&He.jsxs("aside",{className:"coxeters",children:[Id(e.dimensions).map(x=>He.jsxs(st.Fragment,{children:[x>0&&He.jsx("div",{className:"number",children:Id(x).map(h=>(!e.extended||x===h+1)&&He.jsxs("label",{children:[He.jsx("input",{type:"number",name:`coxeter-${x}-${h}`,min:"2",step:"1",value:e.coxeter[x][h],onChange:E}),e.stellated&&He.jsxs("div",{className:"stellation",children:[He.jsx("span",{className:"divisor",children:" / "}),He.jsx("input",{type:"number",name:`div-${x}-${h}`,min:"1",step:"1",value:e.stellation[x][h],onChange:E})]})]},h))}),He.jsxs("label",{className:"mirror",children:[x>0&&He.jsx("span",{className:"coxeter",children:"——"}),He.jsx("input",{type:"checkbox",name:`mirror-${x}`,checked:!!e.mirrors[x],onChange:E}),x<e.dimensions-1&&He.jsx("span",{className:"coxeter",children:"——"})]})]},x)),He.jsx("button",{className:"extend",onClick:_,children:e.extended?"▼":"▲"})]})]})}const p_=H2();Object.assign(window,p_);const rA={dimensions:4,coxeter:[[-1,5,2,2],[5,-1,3,2],[2,3,-1,4],[2,2,4,-1]],stellation:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],mirrors:[1,0,0,0],extended:!0,stellated:!1,order:10,segments:32,curve:!0,showVertices:!1,vertexThickness:75,showEdges:!0,edgeThickness:25,projection:"stereographic",controls:"orbit",controlsShift:0,ambiance:"neon",fov3:90,fov4:90,msaa:window.devicePixelRatio<=1,msaaSamples:8},y0=(n=null)=>{const{location:e}=window;if(e.hash)try{return JSON.parse(atob(e.hash.slice(1)))}catch(t){console.warn(t),e.hash=""}return n},oA=n=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(n)))},sA=()=>{const[n,e]=st.useState(y0(rA)),t=st.useCallback(()=>{const r=y0();r&&e(r)},[]),i=st.useCallback(r=>{const o={...n,...r};e(o),!(!o.dimensions||o.coxeter.find(l=>l.find(a=>!a))||o.stellation.find(l=>l.find(a=>!a))||o.curve&&!o.segments||o.showVertices&&!o.vertexThickness||o.showEdges&&!o.edgeThickness||o.msaa&&!o.msaaSamples||!o.order)&&oA(o)},[n]);return st.useEffect(()=>(window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}),[t]),He.jsx(iA,{gl:p_,params:n,updateParams:i})};Od.createRoot(document.getElementById("root")).render(He.jsx(sA,{}));
